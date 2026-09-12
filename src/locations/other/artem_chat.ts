import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).artfalling ?? 0) !== ((s as any).daystart ?? 0)) {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artfalling = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You sit and talk with Artem about various topics. Or rather: you\'re doing most of the talking, and Artem is mostly listening to you while occasionally commenting on something you said.');
  if (((s as any).dimaFilm ?? 0) > 0  &&  ((s as any).artemQW ?? 0)?.['artlie'] === 0  &&  ((s as any).artemQW ?? 0)?.['dimkahelp'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Ask Artem to steal the video Dimka filmed of you', handler: (st: GameState) => {
    (s as any).dimaRevenge = 1;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You\'re not sure how to start this conversation, and take a deep breath. "Artem… We\'re good friends, right?"');
    scene.text('He nods, unsure why you look so distraught. "Of course! Why, what\'s wrong?"');
    scene.text('You continue. "And you\'re good with computers? I could really use your help."');
    scene.text('He nods again. "Yeah, I know a thing or two about computers. If I can help you out, I certainly will. What do you need?"');
    scene.text('You look at him, and decide to tell him. "Can you hack into someone else\'s computer? To remove a file? I need you to hack into Dimka\'s computer and delete a video. Just promise me you won\'t look at it, please?!"');
    scene.text('He looks confused. "Erm, yeah… I think I can do that. Why, what\'s the video about?"');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie to him', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artlie'] = 1;
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dimkahelp'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You lie to him. "I got very drunk at the disco a few nights ago and he made a video of it and threatened to tell my mother. She would kill me if she saw it!"');
    scene.text('He nods. "Alright, I\'ll see what I can do."');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
      { label: 'Tell him the truth', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artlie'] = (-1);
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dimkahelp'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You have to gather some courage to tell him the truth, and remain silent for a second.');
    scene.text('You stare at your feet, afraid to look him in the eye. "He made a video of me giving him a blowjob and is blackmailing me with it, forcing me to do all sorts of nasty things! Please, it would mean the world to me if you could make that video disappear!"');
    scene.text('He nods. "That sounds horrible! Okay, I\'ll see what I can do."');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Don\'t ask Artem to steal the video', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dimkahelp'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You\'re too embarrassed to even broach the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).artemQW ?? 0)?.['artlie'] === 1  &&  ((s as any).artemQW ?? 0)?.['dimkahelp'] !== ((s as any).daystart ?? 0)  &&  ((s as any).dimaRevChoice ?? 0) !== 6) {
      (s as any).DimaRudeBlock = 1;
      if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artlie'] = 2;
      qspCall(s, 'npc_relationship', 'modify', 'A2', (-50));
      scene.img('images/characters/shared/headshots_main/big2.jpg');
      scene.text('Artem looks away from you with a blank stare in his eyes. "You know… I watched that video you wanted me to delete from Dimka\'s computer," he mutters. "I can\'t believe it… I was willing to do anything for you. Anything!"');
      scene.text('He continues. "I can\'t even look at you. How could you?!" He looks away from you in disgust. "Please leave, I never want to see you again."');
      scene.text('You don\'t know what to say, so just nod your head and walk out.');
      scene.actions([
        { label: 'Leave his apartment', goto: ['pod_ezd', 'etaj_1'] },
      ]);
    } else {
      if (((s as any).artemQW ?? 0)?.['artlie'] === -1  &&  ((s as any).artemQW ?? 0)?.['dimka'] !== 1  &&  ((s as any).artemQW ?? 0)?.['dimkahelp'] !== ((s as any).daystart ?? 0)) {
        if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dimka'] = 1;
        (s as any).DimaRudeBlock = 1;
        scene.img('images/characters/shared/headshots_main/big2.jpg');
        scene.text('"I managed to get onto Dimka\'s computer and delete the video. It\'s gone."');
        scene.actions([
          { label: 'Thank him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You jump up and hug him. His surprise is obvious, but he eventually loosens up and puts his arms around you too.');
    scene.text('"Thank you…" you murmur. "I don\'t know what I would have done if he\'d been able to keep tormenting me with it."');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).artemQW ?? 0)?.['slutlove'] === 0  &&  ((s as any).artemQW ?? 0)?.['sveslut'] === 0  &&  ((s as any).artemQW ?? 0)?.['artemlove'] === 1  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).grupTipe ?? 0) === 5) {
          scene.img('images/characters/pavlovsk/school/boy/artem/talk1.jpg');
          scene.text('You quietly walk past Artem and enter his room, sitting on the couch without saying a word.');
          // TODO-QSP: dynamic text: Artem looks at you questioningly. "<<$pcs_nickname>>…"
          scene.text(`Artem looks at you questioningly. "${((s as any).pcs_nickname ?? 0)}…"`);
          scene.text('Tears roll down your cheeks, but you still don\'t know what to say and just sit there crying softly.');
          scene.text('Artem is clueless as to what he should do and just hugs you. You\'re fairly sure he knows about your reputation. Surely he must…');
          scene.text('"They all know… Everyone in Pavlovsk knows!" you sniffle.');
          // TODO-QSP: dynamic text: Artem keeps hugging you. "<<$pcs_nickname>>, I…"
          scene.text(`Artem keeps hugging you. "${((s as any).pcs_nickname ?? 0)}, I…"`);
          // TODO-QSP: dynamic text: You break away from him and shout hysterically. "What do you mean, '<<$pcs_nickn...
          scene.text(`You break away from him and shout hysterically. "What do you mean, '${((s as any).pcs_nickname ?? 0)}'?! No one calls me that anymore! It's just '${((s as any).gnikname ?? 0)}' now…"`);
          scene.text('Artem wipes the tears from your face and hugs you tightly.');
          scene.text('"I still love you…" he whispers.');
          scene.text('You smile at him. "Are you sure you want to be seen with a whore? Everyone will look down on you too!"');
          scene.text('"I don\'t care what others call you, or what they think… I just want to be with you," he tells you.');
          if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
            scene.text('You continue. "You saw what happened to Sonia! She used to get along with everyone, but ever since that night at the disco, they all treat her like dirt! That will happen to me too, I just know it! And you, if people see you near me!"');
          } else {
            scene.text('You shake your head sadly. "I know you think that now, but it won\'t be the same. People will treat me like dirt, Artem! And they\'ll do the same to you for dating a whore!"');
          }
          // TODO-QSP: dynamic text: You hear his voice crack when he tries to reassure you. "<<$pcs_nickname>>, plea...
          scene.text(`You hear his voice crack when he tries to reassure you. "${((s as any).pcs_nickname ?? 0)}, please calm down! We'll figure something out! Just give it some time…"`);
          scene.text('You can tell it\'s been on his mind as well, and that he\'s having a difficult time with it too. Nevertheless, he\'s willing to support you.');
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Kiss him', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['slutlove'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You lean towards Artem and kiss him amorously.');
    scene.text('"Thank you, Artem…" you mutter. "I don\'t know what to say, besides… I love you!"');
    // TODO-QSP: dynamic text: "I love you too, <<$pcs_nickname>>," he replies.
    scene.text(`"I love you too, ${((s as any).pcs_nickname ?? 0)}," he replies.`);
    scene.text('You press your lips against his again and kiss him. He embraces you and kisses you back.');
    scene.text('You just lay silent in each other\'s arms for a minute, just thinking about the implications of it all. After that, you realize you need to get on with your day and he probably does too. You give Artem a quick kiss on his cheek and thank him for his support as you get up and gather your things. At least you know you\'re not alone in this.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave Artem\'s apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
            { label: 'Tell him you can\'t see him anymore', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['sveslut'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/talk3.jpg');
    scene.text('You quietly get up and begin to gather your things.');
    // TODO-QSP: dynamic text: Artem looks at you questioningly. "<<$pcs_nickname>>, what are you doing?"
    scene.text(`Artem looks at you questioningly. "${((s as any).pcs_nickname ?? 0)}, what are you doing?"`);
    scene.text('You shake your head as you softly mutter through your tears. "I\'m sorry, Artem… I can\'t ask this from you. I can\'t ask this from anyone. I\'m really sorry, but I don\'t think we should see each other any more."');
    scene.text('After you gather your things, you leave his apartment while ignoring his pleas.');
    scene.actions([
      { label: 'Leave Artem\'s apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: artemQW['artemblok'] = 1
  }, goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).artemQW ?? 0)?.['date'] === 0  &&  ((s as any).artemQW ?? 0)?.['artfall'] >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
            if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
            scene.img('images/characters/shared/headshots_main/big2.jpg');
            // TODO-QSP: dynamic text: Artem smiles at you. "<<$pcs_nickname>>, do you want to go for a walk in the par...
            scene.text(`Artem smiles at you. "${((s as any).pcs_nickname ?? 0)}, do you want to go for a walk in the park?"`);
            scene.actions([
              { label: 'Stay here', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) - (4);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'hate');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
              { label: 'Agree to go for a walk', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You give him a cute smile. "Sure, that sounds like fun!"');
    scene.text('You quickly pack up your things and leave the apartment with him, heading for the park.');
    scene.actions([
      { label: 'Walk in the park', goto: ['artem_date_events', 'firstdate'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).artemQW ?? 0)?.['date'] > 0  &&  ((s as any).artemQW ?? 0)?.['date'] <= 3  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
              if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
              scene.img('images/characters/shared/headshots_main/big2.jpg');
              // TODO-QSP: dynamic text: Artem smiles at you. "<<$pcs_nickname>>, would you like to go out on a date?"
              scene.text(`Artem smiles at you. "${((s as any).pcs_nickname ?? 0)}, would you like to go out on a date?"`);
              scene.actions([
                { label: 'Stay here', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
                { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You give him a cute smile. "Sure, that sounds like fun!"');
    scene.text('You quickly pack up your things and leave the apartment with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events', 'artem_date'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).artemQW ?? 0)?.['date'] === 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
                if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
                scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
                scene.text('Artem has an embarrassed look on his face.');
                if (((s as any).artemQW ?? 0)?.['stripsee'] === 0) {
                  scene.text('"You know… I\'ve never seen a girl naked before. Only in pictures… Maybe you could…"');
                } else {
                  scene.text('"I enjoyed seeing you naked last time. I want you to strip for me again, but can you make a bit more of a show of it this time?"');
                }
                qspCall(s, 'artem_chat', 'askedstrip');
              } else {
                if (((s as any).artemQW ?? 0)?.['date'] === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
                  if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
                  scene.img('images/characters/pavlovsk/school/boy/artem/flowers.jpg');
                  scene.text('As you sit down to talk, Artem suddenly produces a bouquet of flowers and offers it to you. "I got these for you. I hope you like them."');
                  scene.actions([
                    { label: 'Accept the flowers', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'adore');
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You smile at him. "Awww, they\'re beautiful! You shouldn\'t have!"');
    scene.text('He blushes. "Not as beautiful as you…"');
    // TODO-QSP: dynamic text: He leans in and kisses you before you can pull away and gently caresses your <<$...
    scene.text(`He leans in and kisses you before you can pull away and gently caresses your ${((s as any).titsize ?? 0)} breasts through your clothes.`);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You push his hands away. "Wait… You\'re going too fast, please stop!"');
    scene.text('He does as you ask and pulls his hands back as he apologizes.');
    scene.actions([
      { label: 'Just talk', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You return his kiss as his hands keep awkwardly groping at your breasts. He sits with his back against the wall and pulls you on top of him and you can feel the hard bulge in his pants as you keep making out.');
    scene.text('After a few seconds, he takes one of your hands and pulls it down to his crotch.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away and stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away and stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a handjob', goto: ['artem_sex', 'hj'] },
      { label: 'Give him a blowjob', goto: ['artem_sex', 'artem_bj'] },
    ]);
  } },
    ]);
  } },
                    { label: 'Reject the flowers', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'loathe');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/flowerstrash.jpg');
    scene.text('You look at Artem compassionately, but don\'t take the flowers. "Thank you… They\'re very nice, but we\'re just friends… I don\'t want to give you the wrong idea by accepting them, you know?"');
    scene.text('Artem sighs, and disappointedly throws the flowers into the trash.');
    scene.actions([
      { label: 'Leave them in the trash and study', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You quietly walk past him. "Come on, let\'s study?"');
    scene.text('You can tell he\'s unhappy. "Fine…" he mutters.');
    scene.actions([
      { label: 'Just talk', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).artemQW ?? 0)?.['date'] >= 6  &&  ((s as any).artemQW ?? 0)?.['date'] <= 8  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 200  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
                    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
                    scene.img('images/characters/shared/headshots_main/big2.jpg');
                    // TODO-QSP: dynamic text: Artem smiles at you as he walks over and hugs you. "<<$pcs_nickname>>, would you...
                    scene.text(`Artem smiles at you as he walks over and hugs you. "${((s as any).pcs_nickname ?? 0)}, would you like to go out on another date?"`);
                    scene.actions([
                      { label: 'Stay here', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
                      { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You give him a cute smile. "Sure, that sounds like fun!"');
    scene.text('You quickly pack up your things and leave the apartment with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events', 'artem_date'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).artemQW ?? 0)?.['date'] >= 9  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)  &&  ((s as any).artemQW ?? 0)?.['bf'] === 0) {
                      if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
                      if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
                      scene.img('images/characters/pavlovsk/school/boy/artem/wine.jpg');
                      scene.text('When you enter the room, you immediately notice the small folding table with chairs set up. It has several lighted candles on it and a bottle of wine with two glasses.');
                      scene.text('You look at Artem, slightly confused. "What\'s the meaning of this, Artem?"');
                      scene.text('He smiles at you. "Well, we\'ve spent a lot of time dating, so I figured it would be nice to make it official."');
                      scene.text('You\'re still not sold on the idea and question him further. "Make what official? And where did you get that wine from?"');
                      if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  ||  ((s as any).grupTipe ?? 0) === 4) {
                        // TODO-QSP: dynamic text: Artem reassures you. "Relax, <<$pcs_nickname>>. My parents are leaving to see a ...
                        scene.text(`Artem reassures you. "Relax, ${((s as any).pcs_nickname ?? 0)}. My parents are leaving to see a friend and I got the wine from my uncle. So please… Let's just sit down and chat?"`);
                      } else {
                        // TODO-QSP: dynamic text: Artem reassures you. "Relax, <<$pcs_nickname>>. My parents are leaving to see a ...
                        scene.text(`Artem reassures you. "Relax, ${((s as any).pcs_nickname ?? 0)}. My parents are leaving to see a friend to give us some privacy. And my mom gave me that wine, to share with you! My parents are very happy I met you, and my mother picked the wine. So please… Let's just sit down and chat?"`);
                      }
                      scene.text('You relax a little and nod at him. "Okay… I have to admit, that does sound nice."');
                      scene.text('You spend the next half hour talking about your plans after you finish school. The bottle of wine is empty before you know it, and you feel a bit tipsy.');
                      // TODO-QSP: dynamic text: After you've drank most of the wine and talked for a while, Artem is silent for ...
                      scene.text(`After you've drank most of the wine and talked for a while, Artem is silent for a few seconds before he nervously works up his courage. "${((s as any).pcs_nickname ?? 0)}… Will you be my girlfriend?"`);
                      (s as any).minut = ((s as any).minut ?? 0) + 30;
                      if (((s as any).pcs_hydra ?? 0) >= 100) {
                        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
                      } else {
                        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
                      }
                      qspCall(s, 'drugs', 'alcohol', 'wine', 2);
                      qspCall(s, 'stat', '');
                      scene.actions([
                        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-25));
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artembrokenheart'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/artemcry.jpg');
    scene.text('You shake your head. "I\'m sorry if you got the wrong impression. I like you, I really do, but I don\'t want to be your girlfriend."');
    scene.text('He looks so heartbroken that he might cry. "Is there someone else?"');
    scene.text('You sigh slightly. "It\'s not that. I just don\'t want to be anyone\'s girlfriend right now. Can\'t we just keep doing what we were before? Be friends and go out on dates?"');
    scene.text('Tears start rolling down his cheeks as he stands up. "I thought we had something special, but I guess I was wrong. Please leave now and never come back!" You know there\'s nothing you can say and trying to explain will only make things worse, so you get up and head for the door.');
    scene.text('"I\'ll see you later, okay?" you say, but he turns away from you. Once you close the door, you can hear him crying. Not sure what else to do, you just leave.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
                        { label: 'Yes', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['bf'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'adore');
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('A huge grin appears on his face as he gets up and rushes around the table, almost knocking it over in his haste to get to you. He pulls you up and into a tight fierce hug, nuzzling your neck as the two of you hug.');
    // TODO-QSP: dynamic text: "You just made me the happiest guy in the world! I love you, <<$pcs_nickname>>!"
    scene.text(`"You just made me the happiest guy in the world! I love you, ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.actions([
      { label: 'Tell him you love him too', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'adore');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artemlove'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('You kiss him. "I love you too, Artem."');
    scene.text('You\'ve never seen him look so happy as he starts kissing you and roaming his hands all over your body.');
    qspCall(s, 'artem_chat', 'artemgirlfriend');
  } },
      { label: 'Just hug him back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('You kiss him and hug him back.');
    scene.text('You\'ve never seen him look so happy as he starts kissing you and roaming his hands all over your body.');
    qspCall(s, 'artem_chat', 'artemgirlfriend');
  } },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).artemQW ?? 0)?.['bf'] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
                        if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['dateask'] = ((s as any).daystart ?? 0);
                        scene.img('images/characters/shared/headshots_main/big2.jpg');
                        // TODO-QSP: dynamic text: Artem smiles at you as he walks over and hugs you. "<<$pcs_nickname>>, would you...
                        scene.text(`Artem smiles at you as he walks over and hugs you. "${((s as any).pcs_nickname ?? 0)}, would you like to go out on another date?"`);
                        scene.actions([
                          { label: 'Stay here', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
                          { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('You give him a cute smile. "Sure, that sounds like fun!"');
    scene.text('You quickly pack up your things and leave the apartment with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events', 'artem_date'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
                          if (((s as any).artemQW ?? 0)?.['artem_open_relationship'] === 0) {
                            scene.actions([
                              { label: 'Talk to him about an open relationship', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You quietly walk past Artem and enter his room, sitting on the couch without saying a word.');
    // TODO-QSP: dynamic text: He looks at you questioningly. "<<$pcs_nickname>>…"
    scene.text(`He looks at you questioningly. "${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('You frown as you look at him. "We need to talk."');
    scene.text('His eyes start to water up. "Okay… about what?" He\'s trying to put on a brave face and salvage this.');
    scene.text('You sigh. "I think we should have an open relationship." You can tell by his look that is not what he expected and you hurry on before he can say something. "I love you, but we\'re both young and have a lot to experience, so I think we should see other people as well. We\'ll still be boyfriend and girlfriend, though."');
    if (((s as any).artemQW ?? 0)?.['confidence'] + Math.max(5*(((s as any).artemQW ?? 0)?.['nush3some'] + ((s as any).artemQW ?? 0)?.['katja_threesome'] -3), Math.min(5, ((s as any).artemQW ?? 0)?.['artem_dom']/4)) >= 20) {
      if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artem_open_relationship'] = 1;
      scene.text('He\'s already nodding in agreement before you even finish. "I think that\'s a great idea! You\'re right, we are young and should sow our wild oats while we can. This won\'t mean we\'ll love each other any less, it just means we\'ll get to explore things."');
      scene.text('He seems to like the idea more than you expected, so the two of you talk about how this will make things better for both of you before changing the subject.');
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
        if (((s as any).artemQW ?? 0)?.['strapon_count'] < 10) {
          scene.text('Artem is already shaking his head no even before you finish. "No, I\'m not comfortable with that."');
          scene.text('You try to convince him, but he shuts you down. "No. If you love me, you\'ll drop this. If you don\'t, then maybe we shouldn\'t be together at all…"');
          scene.text('You stop talking and the two of you sit quietly for a few minutes as you think about his words. Maybe he\'s right. Maybe you should break up…');
        } else {
          if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artem_sub'] = 1;
          if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artem_open_relationship'] = 1;
          if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artem_dom'] = (-1);
          scene.text('He looks sadly at you before he slowly nods. "If it will make you happy, you know I\'ll do anything for you. I love you that much," he says in a submissive, somewhat deflated tone.');
          scene.text('You can tell he really would agree to just about anything for you, maybe even to being cucked if you wanted.');
          scene.text('You quickly give him a hug as you smile. "Don\'t worry, I won\'t leave you and I still love you. Trust me, we\'ll have fun."');
          scene.text('He smiles back and you talk a bit more about it before changing subjects.');
        }
      } else {
        scene.text('He seems unsure and thinks for a moment. "Okay, but only with other girls. I don\'t think I\'d be okay with you being with another guy."');
        qspCall(s, 'willpower', 'misc', 'force', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artem_open_relationship'] = 1;
    qspCall(s, 'stat', '');
    scene.text('You spend the next few minutes using all your tricks to convince him to agree to it before he sighs.');
    scene.text('He\'s obviously not happy about it, but he gives in. "Okay, we can try it… for a while. If either of us change our mind, then we will end it, okay?"');
    scene.text('You nod in agreement, knowing you\'ll just be able to convince him again if needed. He doesn\'t seem to want to really talk about it, so you quickly change the topic.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    scene.text('You think for a moment and nod your head. "Okay, sure. Only with girls."');
    scene.text('He relaxes a little and the two of you talk about how you believe this will make your relationship better before you change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
                            ]);
                          }
                          scene.actions([
                            { label: 'Break up with him', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['bf'] = 0;
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artembrokenheart'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A2', (-30));
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/artemcry.jpg');
    scene.text('You quietly walk past Artem and enter his room, sitting on the couch without saying a word.');
    // TODO-QSP: dynamic text: He looks at you questioningly. "<<$pcs_nickname>>?"
    scene.text(`He looks at you questioningly. "${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('You frown as you look at him. "We need to talk…"');
    scene.text('His eyes start to water up. "Okay… About what?" He\'s trying to put on a brave face.');
    scene.text('You sigh. "I think we should break up."');
    scene.text('He tries to hug you, but you stop him. "Why? What did I do wrong?"');
    scene.text('You get up to put a little space between you. "It\'s not you… I just don\'t love you anymore."');
    scene.text('He openly starts to cry. "Is it someone else?"');
    scene.text('You shake your head. "Look, you\'re a great guy, but I just feel differently now is all."');
    scene.text('You try to comfort him as he begs and pleads, but after some time you finally get up. "I\'m sorry, but this is over. I\'m truly sorry."');
    scene.text('You turn and walk out, leaving Artem crying behind you.');
    scene.actions([
      { label: 'Leave Artem\'s apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
                          ]);
                        }
                        if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).artemQW ?? 0)?.['nush3some_again'] === 7  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A144'] <= 60  &&  ((s as any).artemQW ?? 0)?.['4some_kat_nush'] === 0) {
                          scene.actions([
                            { label: 'Bring up Artem fucking both Anushka and Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['4some_kat_nush'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You\'re unsure how to bring this up. "So I was wondering what you thought about the fact that you have had sex with two of my friends, Anushka and Katja?"');
    scene.text('He looks at you and blushes for a moment before a huge grin plays across his face. "It\'s amazing! I mean I would have never dreamed I would get to screw one of the cool girls like Katja or make one of the gopniks like Nush my bitch. You have any other friends that might be interested?" he asks rather eagerly.');
    scene.text('You smile as you look at him. "Yeah, I can see how you would feel that way, but you shouldn\'t sell yourself short. You\'ve always been more than you believed and I think that they both eagerly want to have sex with you is proof. As for the other... Well... I\'ll think about it."');
    scene.text('He beams with pride and then gets a look like he just had a great idea. "Hey... Do you think they would be willing to have a foursome, you know, have them at the same time? I mean Katja and Nush, that is," he asks far too eagerly, clearly thrilled by the very thought.');
    scene.text('You pause and think about it. "You know, I\'m not honestly sure. I\'m pretty sure Nush would be up for it and maybe Katja. I can ask them if you want." He starts nodding and you continue before he even needs to say it. "Okay, I\'ll ask, but no promises."');
    scene.text('He nods. "Yeah, I know. Thanks for even being willing to consider it," he says before he hugs you. "I\'m so lucky to have found you. You\'re the best girlfriend any guy could ask for."');
    scene.text('You return his hug. "Thank you. You\'re the best boyfriend a girl could ask for."');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
                          ]);
                        }
                        if (((s as any).artemQW ?? 0)?.['katja_threesome'] === 2  &&  ((s as any).artemQW ?? 0)?.['katja_threesome_talk'] === 0) {
                          scene.actions([
                            { label: 'Bring up the threesome with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['katja_threesome_talk'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You\'re unsure how to bring this up. "So I was wondering what you thought about our threesome with Katja?"');
    scene.text('He looks at you and blushes for a moment before a huge grin plays across his face. "It was great! Why? Does she want to do it again?" he asks very eagerly.');
    scene.text('You smile as you look at him. "I was just seeing how you felt about it and if you enjoyed it, but by your reaction I can tell you did."');
    scene.text('He looks a little sheepish. "Oh… Uh… Yeah, I really did. I mean who would believe a nerd like me got to bang one of the popular girls?"');
    scene.text('You grin at his reaction. "Good. I\'m glad you enjoyed yourself and don\'t sell yourself short. You\'re handsome and one hell of a lover. You should be a lot more confident about yourself; the only thing holding you back is yourself."');
    scene.text('He pauses before he nods. "Yeah, I know. You\'re right, as always," he says before he hugs you. "I\'m so lucky to have found you. You\'re the best girlfriend any guy could ask for."');
    scene.text('You return his hug. "Thank you. You\'re the best boyfriend a girl could ask for." The two of you hug a bit more before you continue. "And yes, I\'ll ask her sometime if she wants to do it again."');
    scene.text('You both laugh at that and then talk about other stuff, but you can see how eager he is to have sex with Katja again.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
                          ]);
                        }
                        if (((s as any).artemQW ?? 0)?.['nush3some_ask'] === 1) {
                          scene.actions([
                            { label: 'Bring up threesome with Anushka', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush3some_ask'] = ((s as any).artemQW['nush3some_ask'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You\'re unsure how to bring this up. "So I was hanging out with Nush the other day, and well, we started talking about you…"');
    scene.text('He looks at you questioningly. "Oh? Why?"');
    scene.text('You smile as you look at him. "Because you\'re my boyfriend, silly!"');
    scene.text('He looks a little sheepish. "Oh… Uh… So what did you guys talk about?"');
    scene.text('"Lots of stuff, but eventually we started talking about sex and… Anyway, we talked about it and wondered if you might be interested in a threesome?"');
    scene.text('He looks completely shocked. "What?!"');
    scene.text('You smile slightly at his reaction. "I said how would you feel about having sex with Nush and I?"');
    scene.text('He seems very unsure. "Uh… Are you sure?"');
    scene.text('You give him a slightly surprised look. "You don\'t want to? I thought all guys wanted to have sex with two girls at the same time?"');
    scene.text('He laughs nervously. "Well yeah, but she has such a reputation…" You can tell there\'s more to it by how he\'s acting.');
    scene.text('"Her reputation? What, as a wild girl that likes to have sex? I thought that would be a turn-on." He blushes more and looks even more nervous. "Okay, so it\'s not that, or at least not only that. If you don\'t want to, we don\'t have to, but what is it?" You take his hand in yours as you ask him.');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('He sighs. "I\'m afraid. Afraid of what she\'ll think or say. She\'s… Really experienced. What if she thinks I\'m no good?"');
    scene.text('You lean over and give him a kiss. "She\'s not like that. She might give you some advice, but she\'s not the type to lay back and judge others. Instead, she\'s more likely to encourage you to do what she likes."');
    scene.text('He starts to nod. "Okay yeah, I\'d like to be with two girls, and if she\'s your choice, then I\'m good with it." He seems to want to say more, but stays silent.');
    scene.text('You smile, catching it. "What?"');
    scene.text('He blushes. "Nothing."');
    scene.text('You raise his face to yours to look into each other\'s eyes. "Just tell me. We should be honest with each other about everything."');
    scene.text('He nods. "You\'re right. I was just thinking… It might be nice to get back at her a little for all the bullying."');
    scene.text('You giggle. "Oh, you want to fuck her hard and rough, don\'t you?"');
    scene.text('He turns bright red, confirming your guess. "Yeah… And I heard she lets guys use her ass too."');
    scene.text('You grin at him. "You can fuck her as hard as you want, and you can fuck her ass as hard as you want." He smiles back at you, and you laugh and talk about sex for a while.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
                          ]);
                        }
                        if (((s as any).artemQW ?? 0)?.['nush3some'] === 1) {
                          qspCall(s, 'anushka_konstantinov_schedule', '');
                          if (((s as any).locat ?? 0)?.['A144'] === 22  ||  ((s as any).locat ?? 0)?.['A144'] === 23) {
                            scene.actions([
                              { label: 'Ready for threesome with Anushka', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush3some'] = ((s as any).artemQW['nush3some'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "So, are you ready for our threesome?"');
    scene.text('He looks into your eyes and nods with a nervous smile. "Yeah, I\'m ready. As ready as I\'ll ever be."');
    scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Don\'t worry, it\'ll be fun." He just nods and doesn\'t say anything, but you can tell he\'s also eager under his nervousness.');
    scene.text('You pull out your phone and text Anushka. "Hey, what\'s up? You ready to come over for that threesome?"');
    scene.text('It takes a minute or so before she responds. "Sure, where at?", followed by a bunch of sexual innuendo emojis. You can sense Artem looking over and reading what she wrote.');
    scene.text('You text back. "Artem\'s, just send a text when you\'re here and he\'ll come answer the door."');
    scene.text('She just texts back several more sexual innuendo emojis.');
    scene.text('You put your phone down. "She\'s on her way."');
    scene.text('He tidies his room while waiting for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. You can\'t help but smile; he\'s serious about getting a little payback. He sits back next to you to wait for Anushka to show up.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_sex', 'anushka_3some'] },
    ]);
  } },
                            ]);
                          }
                        }
                        if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 1) {
                          qspCall(s, 'anushka_konstantinov_schedule', '');
                          if (((s as any).locat ?? 0)?.['A144'] === 22  ||  ((s as any).locat ?? 0)?.['A144'] === 23) {
                            scene.actions([
                              { label: 'Invite Anushka again', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush3some_again'] = 2;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You decide to see if Artem wants to have another threesome with Anushka. "I was thinking, since you had fun last time when we had a threesome with Nush, what would you say about doing it again?"');
    scene.text('He seems a little surprised. "Yeah, she said maybe, but that sounded more like a polite no to me…" He pauses and gives you a hopeful look. "Do you think she might be willing to do it again?" He\'s trying to hide his eagerness from you.');
    scene.text('You nod. "Yeah, I think I she\'d be into it. Do you want me to ask?"');
    scene.text('He blushes, but nods. "Yeah. Yeah, I think I do."');
    scene.text('You smile. "Okay, next time I see her, I\'ll ask."');
    scene.text('He just nods to that and the two of you talk about last time.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
                            ]);
                          }
                        }
                        if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 3) {
                          qspCall(s, 'anushka_konstantinov_schedule', '');
                          if (((s as any).locat ?? 0)?.['A144'] === 22  ||  ((s as any).locat ?? 0)?.['A144'] === 23) {
                            scene.actions([
                              { label: 'Ready for a second threesome with Anushka', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush3some'] = ((s as any).artemQW['nush3some'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2  ||  ((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      scene.text('You give him a kiss. "So, are you ready to have a threesome with Nush again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Oh yeah, I\'m ready. This time I\'m going to totally make her my little bitch! I\'m going to tear her little pussy and tight ass up!" He seems very eager for a second go around.');
      scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Don\'t get too carried away. We all want to have fun and… Wait, <i>your</i> little bitch?"');
      scene.text('He blushes. "I know, I won\'t be too rough. I just want her to know after today that when we have our fun together, I own her ass and she\'s OUR little bitch," he says with a smile.');
      scene.text('You laugh and shake your head at his comment.');
    } else {
      scene.text('You give him a kiss. "So, are you ready to have a threesome with Nush again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Yeah, I\'m ready. This time will be different, no holding back. I\'m going to show her who\'s the boss." You think he\'s more talking to himself than you at this point.');
      scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Don\'t worry, it\'ll be fun."');
      scene.text('He just nods and doesn\'t say anything, but you can tell he\'s also eager under his nervousness.');
    }
    scene.text('You pull out your phone and text Anushka. "Hey, what\'s up? You ready to come over for another threesome with Artem?"');
    scene.text('It takes a minute or so before she responds. "Sure, his apartment again?", followed by a bunch of sexual innuendo emojis. You can sense Artem looking over and reading what she wrote.');
    scene.text('You text back. "Yeah, just send a text when you\'re here and he\'ll come answer the door."');
    scene.text('She just texts back several more sexual innuendo emojis.');
    scene.text('You put your phone down. "She\'s on her way."');
    scene.text('He tidies his room while waiting for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. You can\'t help but smile; he\'s serious about getting a little payback. He then sits back next to you to wait for Anushka to show up.');
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_nush_sex', 'anushka_3some1'] },
    ]);
  } },
                            ]);
                          }
                        }
                        if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 5  ||  ((s as any).artemQW ?? 0)?.['nush3some_again'] === 7) {
                          qspCall(s, 'anushka_konstantinov_schedule', '');
                          if (((s as any).locat ?? 0)?.['A144'] === 22  ||  ((s as any).locat ?? 0)?.['A144'] === 23) {
                            scene.actions([
                              { label: 'Ready for more fun with Anushka', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush3some'] = ((s as any).artemQW['nush3some'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    if (((s as any).artemQW ?? 0)?.['rough_anal_nush'] === 2  ||  ((s as any).anushkaQW ?? 0)?.['artem_dom'] >= 1) {
      scene.text('You give him a kiss. "So, are you ready to fuck our pet bitch again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Hell yes, tell her to get her tight little ass over here right now, so I can pound it!" He seems very eager for another go.');
      scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Okay, I\'ll tell her."');
      scene.text('He just grins at you and watches as you pull out your phone and text Anushka. "Hey, Artem says to get your tight little slutty ass over to his place right now so he can fuck it again."');
      scene.text('It takes a minute or so before she responds. "One slutty ass, aching for a good fucking on the way".');
      scene.text('You text back. "Just send a text when you\'re here and he\'ll come answer the door."');
      scene.text('She just texts back several more sexual innuendo emojis.');
      scene.text('You glance over at him. "Her tight little slutty ass is on the way for your fucking pleasure."');
      scene.text('He laughs and gets up to tidy the room while you wait for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. Afterwards, he sits back down next to you to wait for Anushka to show up.');
    } else {
      scene.text('You give him a kiss. "So, are you ready to fuck Nush again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Hell yes, tell her to get her ass over here right now!" He seems very eager for another go.');
      scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Okay, I\'ll tell her."');
      scene.text('He just grins at you and watches as you pull out your phone and text Anushka. "Hey, Artem says to get your slutty ass over to his place right now so he can fuck it again."');
      scene.text('It takes a minute or so before she responds. "One slutty ass on the way".');
      scene.text('You text back. "Just send a text when you\'re here and he\'ll come answer the door."');
      scene.text('She just texts back several more sexual innuendo emojis.');
      scene.text('You glance over at him. "Her slutty ass is on the way for your fucking pleasure."');
      scene.text('He laughs and gets up to tidy the room while you wait for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. Afterwards, he sits back down next to you to wait for Anushka to show up.');
    }
    qspCall(s, 'arousal', 'kiss', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_nush_sex', 'anushka_3some2'] },
    ]);
  } },
                            ]);
                          }
                        }
                        if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === -1  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback_block'] !== ((s as any).daystart ?? 0)) {
                          (s as any).minut = ((s as any).minut ?? 0) + 15;
                          if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush_bully_payback_block'] = ((s as any).daystart ?? 0);
                          qspCall(s, 'stat', '');
                          scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
                          scene.text('You sit next to him. "I wanted to talk to you about what happened at school. You know, when the gopniks came in to bully you and the other nerds and how you ran Nush down?"');
                          scene.text('He frowns at you. "What about it? Nothing happened because you were right. It\'s not who I am or what I want. As they say, two wrongs don\'t make a right."');
                          scene.text('You nod slightly and place your hand on his to comfort him. "I just wanted to make sure you weren\'t mad was all."');
                          scene.text('He sighs before smiling at you, squeezing your hand back. "No, I\'m not mad. I won\'t lie; I really <i>really</i> wanted to pay her back and bully her for a change, but you\'re right. That would have made me no better than them and I\'m better than that."');
                          scene.text('He seems to be okay with it and the two of you talk some more, but you can tell getting bullied all the time is getting to him and that he would like to make it stop.');
                          scene.actions([
                            { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
                            { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
                          ]);
                        } else {
                          if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] > 0  &&  ((s as any).artemQW ?? 0)?.['nush_bully_payback_block'] !== ((s as any).daystart ?? 0)) {
                            (s as any).minut = ((s as any).minut ?? 0) + 15;
                            if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['nush_bully_payback_block'] = ((s as any).daystart ?? 0);
                            qspCall(s, 'stat', '');
                            scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
                            scene.text('You sit next to him. "I wanted to talk to you about what happened at school. You know, when the gopniks came in to bully you and the other nerds and how you ran Nush down?"');
                            if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 1) {
                              scene.text('He smiles at the memory. "Oh my god, that was so amazing! It felt so good to bully her back for a change and make her do what I wanted. I have to admit, I was a little surprised she played along."');
                              scene.text('You nod slightly and place your hand on his. "Maybe she did and maybe after all that\'s happened, she\'s feeling submissive towards you for real."');
                              scene.text('He looks at you with a surprised expression. "You really think so?"');
                              scene.text('You shrug. "Maybe."');
                              scene.text('He looks up for a moment with a dreamy look on his face. "That would be so amazing if she really was!"');
                              scene.text('The two of you talk about it a bit more and how he\'s tired of being bullied, but how getting back at her made him feel a little better.');
                            } else {
                              if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 2) {
                                scene.text('He smiles at the memory. "I\'m still having trouble believing this is all really happening. It felt so good to bully her back and make her do what I wanted. I\'m starting to wonder if this is real or if she\'s just playing along for her own fun."');
                                scene.text('You nod slightly and place your hand on his. "Maybe, though she does like getting naked so it\'s hard to say. Maybe after all that\'s happened, she\'s feeling submissive towards you for real."');
                                scene.text('He looks at you with a surprised expression. "You really think so?"');
                                scene.text('You shrug. "Maybe. It\'s hard to say for sure."');
                                scene.text('He looks up for a moment with a dreamy look on his face. "That would be so amazing if she really was!"');
                                scene.text('The two of you talk about it a bit more and how he\'s tired of being bullied, but how getting back at her made him feel a little better.');
                              } else {
                                if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 3) {
                                  scene.text('He smiles at the memory. "Yeah… Did you see how she just submitted to me and sucked my dick? One of my bullies was on her knees in the middle of the school day, sucking my dick because I told her to do it!"');
                                  scene.text('You nod slightly and place your hand on his. "Yeah, I saw. You definitely showed her. She looked cute submissively sucking your dick. I would say she\'s really starting to feel that way."');
                                  scene.text('He looks at you with a surprised expression. "You really think so?"');
                                  scene.text('You shrug. "Maybe. It\'s hard to say for sure, but I think so."');
                                  scene.text('He looks up for a moment with a dreamy look on his face. "That would be so amazing if she really was!"');
                                  scene.text('The two of you talk about it a bit more and how he\'s tired of being bullied, but how getting back at her made him feel a little better.');
                                } else {
                                  if (((s as any).artemQW ?? 0)?.['nush_bully_payback'] === 4) {
                                    scene.text('He smiles at the memory. "Yeah. I\'m starting to think you were right. Bad ass Nush just dropped to her knees and sucked my dick, then swallowed my cum like a good little submissive slut."');
                                    scene.text('You nod slightly and place your hand on his. "Yeah, I think it\'s safe to say that you\'ve turned your relationship with her around. Now you\'re the dominant one."');
                                    scene.text('He looks at you with a surprised expression. "You really think so?"');
                                    scene.text('You nod. "Yeah, I do. You saw how she obeyed everything you told her."');
                                    scene.text('He looks up for a moment with a dreamy look on his face. "Yeah, she did. This is so amazing! I owe this all to you too." He kisses you. "Thank you. Next time, I\'ll really teach her, unless she\'s smart enough to stop."');
                                    scene.text('The two of you talk about it a bit more and about how he\'s tired of being bullied, but how getting back at her made him feel a little better.');
                                  } else {
                                    scene.text('He smiles at the memory. "Fuck yeah, that was amazing! You were right, I\'ve completely turned the tables on her. Sure, she still bullies me around the others, but in private…" He laughs to himself. "In private, she\'s my little butt slut that I can do what I want with."');
                                    scene.text('You nod slightly and place your hand on his. "Yeah, you\'ve turned your relationship with her around. Now you\'re the dominant one."');
                                    scene.text('He laughs again. "Did you see her lick up my cum off the teacher\'s desk?"');
                                    scene.text('You smile at him, happy that he\'s happy. "Yeah, I saw how she obeyed everything you told her and let you do anything you wanted."');
                                    scene.text('He looks up for a moment with a dreamy look on his face. "Yeah she did! You\'re the best girlfriend ever! Without you pushing me and setting this all up in the first place, I would never have gained the confidence I needed to do something like this." He then kisses you. "Thank you, you make me a better man."');
                                    scene.text('The two of you talk about it a bit more and about how he\'s tired of being bullied, but how getting back at her made him feel a little better.');
                                  }
                                }
                              }
                            }
                            scene.actions([
                              { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
                              { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
                            ]);
                          } else {
                            if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0) {
                              if (((s as any).artemQW ?? 0)?.['strapon'] === 0) {
                                if (((s as any).artemQW ?? 0)?.['anal'] >= 1) {
                                  scene.actions([
                                    { label: 'Is Artem really kinky', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You wonder just how kinky he is. "Artem, we\'ve been having sex and it\'s been great, but I was wondering if you might want to try something new?"');
    scene.text('You had his full attention at just the word sex. "Uh sure, I guess so. Is it a new position you want to try?"');
    scene.text('As he talks, he starts taking off his pants.');
    scene.actions([
      { label: 'Show him the strapon', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    if (((s as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo attached out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees what you\'re holding. "Wait… You want to wear that and… you know…"');
      scene.text('You grin at his reaction. "Come on baby, I\'ll go easy on you. I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He looks at the dildo, then to you, and back again before finally sighing and nodding slightly. "Okay fine, but you can\'t tell anyone we tried this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it."');
      scene.text('He frowns at how you worded it, but it seems good enough. "Okay, if it\'ll make you happy, then I\'ll try it, but if it starts to hurt, we\'re stopping." You nod in agreement.');
      scene.actions([
        { label: 'Put on the harness', goto: ['artem_sex', 'strapon_first'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex', 'sex'] },
        { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
        { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      ]);
    }
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex', 'sex'] },
    ]);
  } },
    ]);
  } },
                                  ]);
                                }
                              } else {
                                if (((s as any).artemQW ?? 0)?.['strapon_count'] === 1) {
                                  scene.actions([
                                    { label: 'Bring up strapon sex again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    scene.text('You wonder if he might let you fuck him in the butt again. "Artem, you remember when you let me fuck you with a strapon?"');
    scene.text('He blushes bright red and panicky looks at the door like he expects his mom to burst in at any moment. "Not so loud and yes I remember, how could I forget?"');
    scene.text('You smile at him and talk softer. "I really loved doing that and I want to do it again."');
    scene.text('He seems speechless and unsure for a moment, then softly smiles. "Yeah, I guess, if it will make you happy, my love." As he talks, he starts taking off his pants.');
    if (((s as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo attached out of your purse and hold it up, showing it to him. "Here it is."`);
      scene.text('He looks at the dildo. "Okay fine, but you still can\'t tell anyone we did this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it." He frowns at how you worded it, but it seems good enough.');
      scene.actions([
        { label: 'Put on the harness', goto: ['artem_sex', 'strapon_second'] },
        { label: 'Change your mind', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex', 'sex'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex', 'sex'] },
        { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
        { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      ]);
    }
  } },
                                  ]);
                                } else {
                                  scene.actions([
                                    { label: 'Bring up strapon sex yet again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'boyStat', 'D<<strapNumber>>');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    scene.text('You wonder if he might let you fuck him in the butt again. "Artem, I was thinking tonight I can fuck you again, what do you think?"');
    scene.text('He blushes bright red. "Okay, sure, sweetie, you can fuck me again." As he talks, he starts taking off his pants.');
    if (((s as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo attached out of your purse and hold it up, showing it to him. "This will soon be up your ass and you'll be moaning like a slut." You say with a giggle.`);
      scene.text('He looks at the dildo and for a moment you think he actually looks eager, then he looks at you and smiles. "Okay fine, but you still can\'t tell anyone we are doing this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it." He frowns at how you worded it, but it seems good enough.');
      scene.actions([
        { label: 'Put on the harness', goto: ['artem_sex', 'strapon_again'] },
        { label: 'Change your mind', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex', 'sex'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex', 'sex'] },
        { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
        { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      ]);
    }
  } },
                                  ]);
                                }
                              }
                            }
                          }
                        }
                        scene.actions([
                          { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('The two of you chat about a variety of things, mostly school, movies, books, video games, his gaming night and what\'s been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
    ]);
  } },
                          { label: 'Ask about the future', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"What do you plan to do after school?" you ask.');
    scene.text('He looks at you with a smile. "I\'m going to the university in Saint Petersburg."');
    scene.text('"What about you? What are your plans for the future?" he asks back before you can say something.');
    if (((s as any).rex_love ?? 0) === 1) {
    } else {
      if (((s as any).kotovLoveQW ?? 0) === 1) {
      } else {
        if (((s as any).fedorKozlovQW ?? 0) >= 5) {
        } else {
          if (((s as any).NikoVolkovQW ?? 0) >= 5) {
          } else {
            if (((s as any).juliaQW ?? 0)?.['date'] === 1) {
            }
          }
        }
      }
    }
    if (((s as any).boyfriend_temp ?? 0) !== '') {
      scene.actions([
        { label: 'Live together', handler: (st: GameState) => {
    if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['artfall'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    if (((s as any).boyfriend_temp ?? 0) !== 'Julia') {
      // TODO-QSP: dynamic text: You sigh in a way only those in love can sigh. "Hopefully <<$boyfriend_temp>> an...
      scene.text(`You sigh in a way only those in love can sigh. "Hopefully ${((s as any).boyfriend_temp ?? 0)} and I can get married soon and get our own place."`);
      scene.text('He frowns and shrugs. "Well, I hope you guys are happy."');
    } else {
      // TODO-QSP: dynamic text: You sigh in a way only those in love can sigh. "Hopefully <<$boyfriend_temp>> an...
      scene.text(`You sigh in a way only those in love can sigh. "Hopefully ${((s as any).boyfriend_temp ?? 0)} and I can get a place of our own soon."`);
      // TODO-QSP: dynamic text: "Wait, you're dating <<$boyfriend_temp>>?"
      scene.text(`"Wait, you're dating ${((s as any).boyfriend_temp ?? 0)}?"`);
      scene.text('"I… Please don\'t make a big deal out of it. And don\'t tell anyone. I haven\'t exactly been spreading the news about us. People wouldn\'t understand."');
      scene.text('He frowns and shrugs. "Sure, you know I can keep a secret."');
    }
    scene.text('You\'re not sure what more to say on the topic.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t know', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"I\'m not sure. I have a few options I guess," you tell him.');
    scene.text('He nods. "Well, you still have some time to decide what you want to do."');
    scene.text('Not sure what more to say about it, you decide to change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      { label: 'Go to the university', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You get a little excited as you reply. "I\'m planning to attend the university too! Now I\'ll for sure know someone there!"');
    scene.text('He grins. "That\'s great! Maybe we can hang out there as well?"');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
                          { label: 'What have you been up to?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"So, what have you been up to lately?" you ask.');
    scene.text('He gives you a slightly puzzled look. "Up to?"');
    scene.text('You smile at him. "You know, what have you been doing in your free time?"');
    // TODO-QSP: dynamic text: The light dawns on him. "Oh…" He looks thoughtful for a moment. "I want to show ...
    scene.text(`The light dawns on him. "Oh…" He looks thoughtful for a moment. "I want to show you something, ${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('To your surprise, he takes out a book and shows it to you. "It\'s one of my favorite books…"');
    scene.actions([
      { label: 'What\'s it about?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    scene.img('images/pc/items/accessories/books/fantasy\' + rand(1, 9) + \'.jpg');
    scene.text('Not really what you expected, but you decide to be nice and widen your eyes. "Oh, what\'s it about?"');
    scene.text('He shines up in the biggest smile. "Oh, it\'s about this hero that needs to fight for a kingdom and the bad guy has all sorts of weird creatures that he forces to attack him. He finds this hidden world in his own world, so the book takes a completely different path than the one you expect it to take."');
    scene.text('He\'s so excited while explaining that you\'re having a hard time following him, but you immerse yourself in it just to make him happy.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      { label: 'A book?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"Really, a book?" you ask as you look at him unimpressed.');
    scene.text('Looking a little dejected, he starts explaining. "It\'s about this hero that needs to fight for a kingdom and the bad guy has all sorts of weird creatures that he forces to attack him. He finds this hidden world…" Noticing your boredom, he stops.');
    scene.text('You sigh. "It\'s okay, Artem. Fantasy isn\'t really my thing, but as long as it makes you happy…"');
    scene.text('He nods, but you can see the disappointment in him as he puts the book back.');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    ]);
  } },
                        ]);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
  ]);
  scene.build();
}

function enterAskedstrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'exhib', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No way [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No way [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You decline. "No, I wouldn\'t be comfortable doing that."');
    if (((s as any).artemQW ?? 0)?.['stripsee'] === 0) {
      // TODO-QSP: dynamic text: You can tell he's seriously let down by your refusal. "Please <<$pcs_nickname>>,...
      scene.text(`You can tell he's seriously let down by your refusal. "Please ${((s as any).pcs_nickname ?? 0)}, all the other guys have seen a naked girl before! Please?"`);
    } else {
      // TODO-QSP: dynamic text: You can tell he's seriously let down by your refusal. "Please <<$pcs_nickname>>,...
      scene.text(`You can tell he's seriously let down by your refusal. "Please ${((s as any).pcs_nickname ?? 0)}, I really enjoyed watching you naked last time. Please?"`);
    }
    qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'hate');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You shake your head. "I\'m sorry Artem, but I\'m just not comfortable doing that."');
    scene.text('He frowns deeply but nods his head. "Yeah, okay…"');
    scene.actions([
      { label: 'Stop talking', goto: ['artemhome', 'artemroom'] },
      { label: 'Keep talking', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to strip', goto: ['artem_chat', 'stripagree', '1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree to strip', goto: ['artem_chat', 'stripagree', '0'] },
  ]);
  scene.build();
}

function enterStripagree(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['stripsee'] = ((s as any).artemQW['stripsee'] ?? 0) + (1);
  if (!(s as any).artemQW) (s as any).artemQW = {}; (s as any).artemQW['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/artem/strip1.jpg');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.text('You give him a serious look. "You want me to get naked for you?"');
  } else {
    scene.text('You give him a serious look. "You want me to get naked for you that badly?"');
  }
  scene.text('You see him visibly swallow as he blushes before nodding. "Yes, I do. I would really love it if you did."');
  scene.text('You think it over for a moment before nodding. "Okay fine. Sit back and enjoy the show."');
  scene.text('He grins widely as you start slowly stripping out of your clothes, teasing him as you do. You might as well have some fun with this.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start stripping', goto: ['artem_events', 'striptease'] },
  ]);
  scene.build();
}

function enterArtemgirlfriend(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to stop', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile at him as you push his hands away. "Artem, wait! All in good time, okay? We\'ll get there, please just… Slow down a little."');
    scene.text('Artem does as you ask and pulls his hands back as he apologizes, though he is clearly disappointed.');
    scene.text('You finish the bottle of wine with Artem, and thank him for a nice time before you gather your things and leave.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
    ]);
  } },
    { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You return his kiss as his hands keep roaming over your body, but paying particular attention to your breasts and ass. He walks backward, pulling you along with him until he sits on the bed with his back against the wall and pulls you on top of his lap.');
    scene.text('You can feel quite the hard bulge in his pants as you keep making out. After a few seconds, he takes one of your hands and pulls it down to his crotch.');
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away and stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away and stop [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_chat', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a handjob', goto: ['artem_sex', 'hj'] },
      { label: 'Give him a blowjob', goto: ['artem_sex', 'bj'] },
      { label: 'Have sex with him', goto: ['artem_sex', 'sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'askedstrip':
      enterAskedstrip(s, scene);
      break;
    case 'stripagree':
      enterStripagree(s, scene);
      break;
    case 'artemgirlfriend':
      enterArtemgirlfriend(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_chat: LocationDef = {
  name: 'artem_chat',
  title: 'You sit and talk with Artem about various topics. Or rather:',
  region: 'other',
  enter: enter,
};
