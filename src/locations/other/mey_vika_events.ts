import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 20) {
    scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'first_meet'] }]);
  }
  scene.text('<center><b>Vicky\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_qw_30.jpg');
  scene.text('As soon as you walk in the room, Vicky throws herself onto Vanya. Wraps her legs around his waist and hugs him around the neck. They start making out. Vanya holds Vicky\'s ass and starts squeezing it. While you watch them, you start feeling aroused. They finally stop…');
  // TODO-QSP: dynamic text: "I suppose we surprised you a bit there?" Vicky giggles. "Don't be shy, <<$pcs_n...
  scene.text(`"I suppose we surprised you a bit there?" Vicky giggles. "Don't be shy, ${((s as any).pcs_nickname ?? 0)}!"`);
  // TODO-QSP: dynamic text: "Yeah, don't worry, <<$pcs_nickname>>!" Says Vanya. "This is all natural, you ne...
  scene.text(`"Yeah, don't worry, ${((s as any).pcs_nickname ?? 0)}!" Says Vanya. "This is all natural, you need some foreplay to reach orgasm!" He adds grinning.`);
  scene.text('"Why are you standing!" Asks Vicky. "Make yourself comfortable! Relax!" She drags Vanya and you down onto the enormous bed.');
  scene.text('The three of you mess around for a bit, laughing, squealing and growling. Vicky and Vanya put on a show where Vanya plays a bear growling and chasing Vicky around the bed. The neatly laid bed turns into a complete mess after a few seconds. All of a sudden the growling stops and you see Vicky pulling up her T-shirt, revealing hers small perky breasts. She\'s not wearing a bra and she\'s slowly pulling the shirt off, teasing both you and Vanya.');
  scene.text('Vanya, seeing an opportunity decides to help out. But Vicky seems to deliberately prevent him and instead he starts touching her breasts. As you watch on your arousal intensifies.');
  qspCall(s, 'arousal', 'foreplay', 10, 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (s as any).alko = 2;
    scene.text('<center><b>Vicky\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_qw_35.jpg');
    scene.text('Finally removing the t-shirt, she says…');
    // TODO-QSP: dynamic text: "Hold on a second I'll put a bra on so <<$pcs_nickname>> doesn't get too turned ...
    scene.text(`"Hold on a second I'll put a bra on so ${((s as any).pcs_nickname ?? 0)} doesn't get too turned on."`);
    scene.text('She jumps away from the bed, opens the dresser drawer and bends over, revealing her tight round ass. After finding a bra, she turns her back to you, and all of a sudden, throws a shirt over Vanyas head, quickly puts on a bra, and once again puts her t-shirt on. But not before she lets you notice that the bra is funny looking. It is bright orange and has Mickey Mouse prints on it.');
    scene.text('"Let\'s drink and play cards!!!" Vicky proclaims.');
    scene.text('She rummages through the wardrobe and pulls out a bottle of champagne.');
    scene.text('"What if your mother finds out?" You ask her nervously.');
    scene.text('"Don\'t worry, my mother is okay with it." Says Vicky. "She lets me do whatever, just to please me. So yeah, lets have something to drink!"');
    scene.text('She runs out of the room and brings back some glasses. Vanya opens a bottle and pours the bubbly liquid. It\'s a French champagne, with a delicate aroma, sparkling in myriads of tiny bubbles. You toast and take a sip from your glass. It tastes like wine and sparkling soda. The three of you talk and drink. Vanya is telling funny stories about some encounters he\'s had in his life. While he\'s telling his stories Vicky moves over to him placing her legs over his. Vanya places his hand onto her thigh.');
    scene.text('You start feeling a bit buzzed, getting that good and fun feeling.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, come and join us here on the bed, we're about to start." Vic...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, come and join us here on the bed, we're about to start." Vicky calls you over.`);
    scene.text('You jump onto the bed and wait for Vanya to shuffle the cards.');
    qspCall(s, 'arousal', 'foreplay', 10, 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start playing', goto: ['mey_vika_events', 'play_game'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEndGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).mey_vika['mey_vika_qw'] = 27;
  qspCall(s, 'stat', '');
  scene.text('Noticing you, Tamara leans over, rubbing against your breasts…');
  // TODO-QSP: dynamic text: "You can come over and visit us any time you want, <<$pcs_nickname>>. We can sit...
  scene.text(`"You can come over and visit us any time you want, ${((s as any).pcs_nickname ?? 0)}. We can sit down and have a chat over a cup of tea."`);
  scene.text('"Of course, aunt Tamara! I\'ll be sure to come by."');
  scene.text('Tamara smiles and adds…');
  scene.text('"You don\'t need an invitation from my girls, you can come by any time you want by yourself."');
  scene.actions([
    { label: 'Go home', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterPlayGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'mey_vika_events', 'play_game_sub', 1);
  if (((s as any).win ?? 0)[0] === 0) {
    scene.text('You get good cards, and quickly get rid of them, winning the hand.');
    if (((s as any).win ?? 0)[1] === 2) {
      scene.text('Vicky stares at you in awe, amazed by how good you are at playing cards.');
    } else {
      scene.text('Vanya stares at you in awe, amazed by how good you are at playing cards.');
    }
    if (((s as any).win ?? 0)[1] === 1) {
      scene.actions([
        { label: 'Make a wish', goto: ['mey_vika_events', 'play_game_wish0'] },
      ]);
    } else {
      scene.actions([
        { label: 'Make a wish', goto: ['mey_vika_events', 'play_game_wish1'] },
      ]);
    }
  } else {
    scene.text('Vanya totally outplays you. His card luck is out of this world…');
    if (((s as any).win ?? 0)[1] === 0) {
      scene.text('You lose without ever standing a chance, Vanya is just too good.');
    } else {
      scene.text('Vanya goes head to head against Vicky. He puts up a good fight, but, in the end, he loses to Vicky.');
    }
    if (((s as any).win ?? 0)[1] === 0) {
      scene.actions([
        { label: 'Vanya decides you should…', goto: ['mey_vika_events', 'play_game_wish2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Play again', goto: ['mey_vika_events', 'play_game'] },
        { label: 'Finish', goto: ['mey_vika_events', 'end_game'] },
      ]);
    }
    scene.text('Vicky is dominating the game, you have no choice but to hope for some luck.');
    if (((s as any).win ?? 0)[1] === 0) {
      scene.text('But there is none today, you lose to Vicky.');
    } else {
      scene.text('Her luck stops after beating you, Vanya is playing too well.');
    }
    if (((s as any).win ?? 0)[1] === 0) {
      scene.actions([
        { label: 'Vicky decides you should…', goto: ['mey_vika_events', 'play_game_wish3'] },
      ]);
    } else {
      scene.actions([
        { label: 'Vanya speaks up', goto: ['mey_vika_events', 'play_game_wish0'] },
      ]);
    }
  }
  scene.build();
}

function enterPlayGameWish0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).mey_vika['mey_vika_qw'] = ((s as any).mey_vika['mey_vika_qw'] ?? 0) + (1);
  }
  scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_game0.jpg');
  scene.text('"Vanya, you\'re the athlete here, come on show off your toned body! As if you were imitating a famous ancient discus thrower!"');
  scene.text('Vanya grabs a plate from the table and positions it in his hands. Standing wide legged he gets in the pose of a discus thrower.');
  scene.text('"No no no!" You and Vicky shout in unison. "That won\'t do! We want to see you just exactly like the athletes completed in ancient Greece. Without any clothes! We don\'t want to fantasize about your body! Take off your clothes so we can see it!"');
  scene.text('"Where\'s the music and the pole!" Laughs Vanya, moving his hips sensually, mocking male strippers.');
  scene.text('Vicky jumps off the bed and puts on music. Vanya starts dancing, taking his t-shirt off. He turns his back, and you are horrified by what you\'re seeing. His whole back is covered with red marks from Vicky\'s nails. You look at Vicky, giving her a questioning glare. But Vicky just winks at you.');
  scene.text('Vanya meanwhile, undoes his belt buckle and smoothly pulls his jeans down a bit. You and Vicky start squealing and cheer him on. You grab a pair of stuffed animals, which are lying around the room, and the two of you begin to imitate cheerleaders, chanting: "Go, Vanya! Go, Vanya! Go!" Vanya keeps on taking his jeans off, kicking them away as soon they touch the floor, he\'s only got his briefs on.');
  scene.text('An overexcited Vicky jumps up and screams: "That\'s not all!" She rips off his briefs, revealing his fairly sized cock, dangling in front of her face.');
  scene.text('Vanya doesn\'t mind, because Vicky\'s already on her knees licking the top of his cock, while he\'s stroking it.');
  scene.text('You turn away in shame, covering your eyes. But you\'re overcome with hornyness when you feel someone sliding their hand between your legs, touching your wet panties.');
  qspCall(s, 'arousal', 'foreplay', 10, 'group');
  qspCall(s, 'stat', '');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.text('Vicky starts laughing, telling you that you can open your eyes and that she and Vanya were only kidding. Clearly they love teasing visitors.');
    scene.actions([
      { label: 'Go', goto: ['mey_vika_events', 'end_game'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A165');
    qspCall(s, 'npcStat', 'A15', 'a');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_game1.jpg');
    scene.text('The touching stops and is replaced by someone\'s luscious lips, skillfully kissing your pussy lips through the panties. You gasp in excitement, eagerly responding to the kisses. The person\'s hands are now moving up your body under your clothes. As the lips move on to your breasts you gasp as you\'re yearning for more.');
    scene.text('You are so turned on now. You can feel your pussy dripping, pulsating with eagerness.');
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game2.mp4');
    scene.text('Opening your eyes, you are astonished to see that it\'s Vicky who\'s been teasing you! She smiles at you while removing your panties. She eagerly begins licking you, sending shivers all over your body. You start panting, edging, ready to cum. Vicky noticing you nearing the edge intensifies her tongue movements. All of a sudden you feel her tongue moving more erratically, somewhat disturbing the pleasant feeling. You look up and see Vanya, moving in from behind, pushing his cock into Vicky. Vicky can\'t keep on licking you and instead she starts moaning loudly, clearly enjoying Vanya\'s cock. Not wanting to lose your orgasm you grab her by the head and drag her face towards your pulsating pussy. She comes to her senses again and starts licking you. Vicky\'s tongue is so skillful you cum like a fountain all over her face.');
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game3.mp4');
    scene.text('Your orgasm is so good that you\'re still shaking several minutes after you\'ve cum. Vanya grabs hold of you and pushes you onto Vicky\'s bed, where she\'s already waiting.');
    scene.text('The two of you kiss, while Vicky is caressing Vanyas cock. Vicky pushes your head down towards Vanyas cock, making you go down on him. You suck on his head while Vicky sucks on his balls. Vanya panting a bit starts touching Vicky between her legs, getting her ready for his cock again. She starts moaning loudly, already edging. Vanya moves in and enters her wet pussy while you move over to the front playing with her nipples…');
    scene.text('Vanya, enjoying himself starts pounding Vicky harder and harder while she moans louder and louder. All of a sudden Vanya stops and pulls out of her and lustfully stares at you, saying it\'s your turn now. You let out a moan as he enters you. His cock is stretching your insides, making you even hornier. You hear him panting louder, his cock growing and throbbing. All of a sudden you feel something warm jetting inside you.');
    scene.text('As soon as Vanya pulls out Vicky begins licking you once again while you gush out his spunk. She swallows it all, licking you clean. Once she\'s done the two of you start kissing, mixing your bodily fluids.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'cum_cleanup', '', 3);
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game4.mp4');
    scene.text('The three of you lie down, exhausted, interwoven in an intricate sweaty tangle, slowly cooling off.');
    scene.text('All of a sudden you hear a gentle knock on the door.');
    scene.text('You hear the voice of Vicky\'s mother…');
    scene.text('"I didn\'t mean to interrupt, but are you all right?"');
    scene.actions([
      { label: 'Go', goto: ['mey_vika_events', 'end_game'] },
    ]);
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

function enterPlayGameWish1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    (s as any).mey_vika['mey_vika_qw'] = ((s as any).mey_vika['mey_vika_qw'] ?? 0) + (1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_vika_events" });
  qspCall(s, 'npcStat', 'A165');
  qspCall(s, 'npcStat', 'A15', 'a');
  qspCall(s, 'stat', '');
  if (((s as any).zz_stage ?? 0) < 16) {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip0.mp4');
    // TODO-QSP: dynamic text: "You've won, <<$pcs_nickname>>. Pick your prize." Says Vicky.
    scene.text(`"You've won, ${((s as any).pcs_nickname ?? 0)}. Pick your prize." Says Vicky.`);
    scene.text('You start thinking…');
    scene.text('"Hmm… Can I pick anything? Anything I want?"');
    scene.text('"Well, yeah! Anything but murder!"');
    scene.text('"Then… Then… I want you to strip!"');
    scene.text('Vicky grins slyly…');
    scene.text('"Will you also join me?"');
    scene.text('She moves over to the stereo and puts on some music. She begins dancing in the middle of the room.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'mey_vika_events', 'play_game_wish1', 16
  } },
    ]);
  } else {
    if (((s as any).zz_stage ?? 0) === 27) {
    } else {
      scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip\' + zz_stage + \'.mp4');
      scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip\' + zz_stage + \'.jpg');
    }
    if (((s as any).zz_stage ?? 0) === 16) {
      scene.text('She starts off quite innocent, swaying to the music carefully. However, the innocence doesn\'t last for very long…');
      scene.text('She playfully touches herself, twirling to the music, arching her tight round booty.');
      qspCall(s, 'arousal', 'voyeur', 2, 'group');
      qspCall(s, 'stat', '');
    } else {
      scene.text('Moving sensually, she takes off her t-shirt, throwing it in your face.');
      qspCall(s, 'arousal', 'voyeur', 2, 'group');
      qspCall(s, 'stat', '');
      if (((s as any).zz_stage ?? 0) === 18) {
        scene.text('Turning her back to you, Vicky, playfully looking at you, takes off the skirt.');
        qspCall(s, 'arousal', 'voyeur', 2, 'group');
        qspCall(s, 'stat', '');
      } else {
        scene.text('She lower her panties a bit, exposing just a little of her ass. Her ass is wonderfully shaped, making you a bit excited. After giving you a quick look she pulls them back.');
        qspCall(s, 'arousal', 'voyeur', 2, 'group');
        qspCall(s, 'stat', '');
        if (((s as any).zz_stage ?? 0) === 20) {
          scene.text('She turns again looking in your direction. Touching herself, she slowly starts removing the bra.');
          scene.text('Playfully spinning, she slips her bra off. Covers her breasts with a hand and after waving her bra around, throws it in your lap.');
          scene.text('Vicky\'s little show is making you more turned on, and when the bra falls in your lap, you feel your panties getting wet.');
          qspCall(s, 'arousal', 'voyeur', 2, 'group');
          qspCall(s, 'stat', '');
        } else {
          scene.text('She once again grabs her panties and pulls them down, this time exposing her wonderful pussy. After giving you a quick glance she pulls them back!');
          scene.text('After teasing you for a while she grabs her panties, pulling them down, this time dropping them almost to the floor.');
          qspCall(s, 'arousal', 'voyeur', 2, 'group');
          qspCall(s, 'stat', '');
          if (((s as any).zz_stage ?? 0) === 22) {
            scene.text('With that, she turns to you. Vanya sits behind her enjoying the show. Wanting to give Vanya a show, she bends over, pulling off her panties, revealing a dripping wet pussy.');
            qspCall(s, 'arousal', 'voyeur', 2, 'group');
            qspCall(s, 'stat', '');
          } else {
            scene.text('Turning to you, Vicky teases you with her breasts, lifting them from below.');
            scene.text('You are no longer able to hold back, you let out a little moan and slide a hand between your legs. You don\'t care that Vanya is sitting there.');
            scene.text('In the corner of your eye you notice that he has taken his pants off and started masturbating.');
            qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
            qspCall(s, 'stat', '');
            if (((s as any).zz_stage ?? 0) === 24) {
              scene.text('Vicky drops on her knees and starts crawling towards you, purring like a big red cat in heat.');
              qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
              qspCall(s, 'stat', '');
            } else {
              scene.text('She starts touching you under your clothes, kissing you. You return the favor and passionately kiss her back, gently touching her breasts.');
              qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'group', 'masturbate');
              qspCall(s, 'stat', '');
              if (((s as any).zz_stage ?? 0) === 26) {
                scene.text('However, this is not the end of the dance.');
                scene.text('Vicky, showing great flexibility, does a few acrobatic moves, widely spreading her legs and revealing her pussy to you and Vanya. You see her pussy shining from all the juices.');
                qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
                qspCall(s, 'stat', '');
              } else {
                scene.text('Vicky takes you by the hand and pulls you up to Vanya. You were so focused on Vicky that you forgot about Vanya being completely naked.');
                scene.text('The two of you lie down on the huge bed, making out, while Vanya comes over, holding his cock in his hand.');
                qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                qspCall(s, 'stat', '');
                if (((s as any).zz_stage ?? 0) === 28) {
                  scene.text('Vicky starts sucking his cock, bobbing her head up and down. While she\'s doing that she makes sure not to forget about you, rubbing her fingers on your pussy lips, stimulating you.');
                  qspCall(s, 'arousal', 'clit_finger', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                  qspCall(s, 'stat', '');
                } else {
                  scene.text('Vicky keeps on sucking Vanya\'s cock, she\'s really skillful, fitting his whole cock in her mouth. You and Vanya start making out, your tongues touching and exchanging saliva. Seeing this, Vicky speeds up, clearly turned on by seeing her boyfriend kissing another girl.');
                  qspCall(s, 'arousal', 'clit_finger', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                  qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group');
                  qspCall(s, 'stat', '');
                  if (((s as any).zz_stage ?? 0) === 30) {
                    scene.text('You can\'t really figure out who\'s having most fun, you, Vanya or Vicky.');
                  } else {
                    scene.text('Vicky, figuring that Vanya might cum soon, stops sucking him, leaving him with a throbbing cock to cool off for a minute. She pushes you on the bed and starts eating you out right away, making you edge immediately. Vanya, having rested for a bit begins fucking her from behind. The pleasure that Vanya gives her is making her lick your pussy even more passionately.');
                    qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                    qspCall(s, 'stat', '');
                    if (((s as any).zz_stage ?? 0) === 32) {
                      scene.text('Without thinking, you begin licking her clit, double pleasuring her. She starts moaning loudly. She\'s about to cum… Right in front of your nose you see Vanya\'s cock going in and out of Vicky\'s dripping pussy. When able, you sometimes lick Vanya\'s cock wanting to taste Vicky even more…');
                      qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                      qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                      qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
                      qspCall(s, 'stat', '');
                    } else {
                      scene.text('After a couple of minutes Vicky starts shaking and groaning, cumming over your face and Vanya\'s cock. She collapses on you, still shaking, Vanya pulls out of her pussy and cums all over her ass.');
                      scene.text('The hot jets of sperm hitting Vicky\'s ass drip all over you, making you try to catch it all with your mouth.');
                      scene.text('Vicky, feeling rejuvenated, begins violently assaulting your vagina with her tongue and fingers, you only manage to hold on for a minute, screaming, squirting all over Vicky\'s lovely face.');
                      qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                      qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                      qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                      qspCall(s, 'arousal', 'end');
                    }
                    scene.text('Still panting, tired but happy, you relax. Lying on the messy bed, the three of you hug each other carefully, gently stroking each other, slowly cooling down.');
                    // TODO-QSP: dynamic text: "That was amazing, <<$pcs_nickname>>!" Whispers Vicky. "I hope you're not mad at...
                    scene.text(`"That was amazing, ${((s as any).pcs_nickname ?? 0)}!" Whispers Vicky. "I hope you're not mad at us, Vanya and I wanted to have a threesome for the longest time. We had a feeling you would be up for it, but we didn't dare to ask you. We didn't know how you would react."`);
                    scene.text('You respond by gently kissing them both.');
                    scene.text('You forget about the time while lying there all together, intertwined in an intricate tangle, slowly cooling off.');
                    scene.text('All of a sudden you hear a gentle knock on the door.');
                    scene.text('You hear the voice of Vicky\'s mother…');
                    scene.text('"I didn\'t mean to interrupt, but are you all right?"');
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'mey_vika_events', 'play_game_wish1', zz_stage + 1
  } },
                      { label: 'Go', goto: ['mey_vika_events', 'end_game'] },
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'end_game':
      enterEndGame(s, scene);
      break;
    case 'play_game':
      enterPlayGame(s, scene);
      break;
    case 'play_game_wish0':
      enterPlayGameWish0(s, scene);
      break;
    case 'play_game_wish1':
      enterPlayGameWish1(s, scene);
      break;
    default:
      enterFirstVisit(s, scene);
      break;
  }
}

export const mey_vika_events: LocationDef = {
  name: 'mey_vika_events',
  title: 'Vicky\'s room',
  region: 'other',
  locationType: 'event',
  description: ['As soon as you walk in the room, Vicky throws herself onto Vanya. Wraps her legs around his waist and hugs him around the neck. They start making out. Vanya holds Vicky\'s ass and starts squeezing it. While you watch them, you start feeling aroused. They finally stop…'],
  enter: enter,
};
