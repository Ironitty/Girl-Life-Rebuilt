import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
  ((s as any).mey_vika ?? {})['mey_vika_qw'] = 27;
  qspCall(s, 'stat', '');
  scene.text('Noticing you, Tamara leans over, rubbing against your breasts…');
  // TODO-QSP: dynamic text: "You can come over and visit us any time you want, <<$pcs_nickname>>. We can sit...
  scene.text(`"You can come over and visit us any time you want, ${((s as any).pcs_nickname ?? 0)}. We can sit down and have a chat over a cup of tea."`);
  scene.text('"Of course, aunt Tamara! I\'ll be sure to come by."');
  scene.text('Tamara smiles and adds…');
  scene.text('"You don\'t need an invitation from my girls, you can come by any time you want by yourself."');
  // TODO-QSP: end
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
    if (((s as any).win ?? 0)[0] === 1) {
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
    } else {
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlayGameWish0(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
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
  // TODO-QSP: end
  scene.build();
}

function enterPlayGameWish1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
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
      { label: 'Continue', goto: ['mey_vika_events', 'play_game_wish1', '16'] },
    ]);
  } else {
    if (((s as any).zz_stage ?? 0) < 34) {
      if (((s as any).zz_stage ?? 0) === 27) {
      } else {
        if (((s as any).zz_stage ?? 0) === 16  ||  ((s as any).zz_stage ?? 0) === 22  ||  ((s as any).zz_stage ?? 0) === 25  ||  (((s as any).zz_stage ?? 0) >= 28  &&  ((s as any).zz_stage ?? 0) < 31)) {
          scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip\' + zz_stage + \'.mp4');
        } else {
          scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_strip\' + zz_stage + \'.jpg');
        }
      }
      if (((s as any).zz_stage ?? 0) === 16) {
        scene.text('She starts off quite innocent, swaying to the music carefully. However, the innocence doesn\'t last for very long…');
        scene.text('She playfully touches herself, twirling to the music, arching her tight round booty.');
        qspCall(s, 'arousal', 'voyeur', 2, 'group');
        qspCall(s, 'stat', '');
      } else {
        if (((s as any).zz_stage ?? 0) === 17) {
          scene.text('Moving sensually, she takes off her t-shirt, throwing it in your face.');
          qspCall(s, 'arousal', 'voyeur', 2, 'group');
          qspCall(s, 'stat', '');
        } else {
          if (((s as any).zz_stage ?? 0) === 18) {
            scene.text('Turning her back to you, Vicky, playfully looking at you, takes off the skirt.');
            qspCall(s, 'arousal', 'voyeur', 2, 'group');
            qspCall(s, 'stat', '');
          } else {
            if (((s as any).zz_stage ?? 0) === 19) {
              scene.text('She lower her panties a bit, exposing just a little of her ass. Her ass is wonderfully shaped, making you a bit excited. After giving you a quick look she pulls them back.');
              qspCall(s, 'arousal', 'voyeur', 2, 'group');
              qspCall(s, 'stat', '');
            } else {
              if (((s as any).zz_stage ?? 0) === 20) {
                scene.text('She turns again looking in your direction. Touching herself, she slowly starts removing the bra.');
                scene.text('Playfully spinning, she slips her bra off. Covers her breasts with a hand and after waving her bra around, throws it in your lap.');
                scene.text('Vicky\'s little show is making you more turned on, and when the bra falls in your lap, you feel your panties getting wet.');
                qspCall(s, 'arousal', 'voyeur', 2, 'group');
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).zz_stage ?? 0) === 21) {
                  scene.text('She once again grabs her panties and pulls them down, this time exposing her wonderful pussy. After giving you a quick glance she pulls them back!');
                  scene.text('After teasing you for a while she grabs her panties, pulling them down, this time dropping them almost to the floor.');
                  qspCall(s, 'arousal', 'voyeur', 2, 'group');
                  qspCall(s, 'stat', '');
                } else {
                  if (((s as any).zz_stage ?? 0) === 22) {
                    scene.text('With that, she turns to you. Vanya sits behind her enjoying the show. Wanting to give Vanya a show, she bends over, pulling off her panties, revealing a dripping wet pussy.');
                    qspCall(s, 'arousal', 'voyeur', 2, 'group');
                    qspCall(s, 'stat', '');
                  } else {
                    if (((s as any).zz_stage ?? 0) === 23) {
                      scene.text('Turning to you, Vicky teases you with her breasts, lifting them from below.');
                      scene.text('You are no longer able to hold back, you let out a little moan and slide a hand between your legs. You don\'t care that Vanya is sitting there.');
                      scene.text('In the corner of your eye you notice that he has taken his pants off and started masturbating.');
                      qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
                      qspCall(s, 'stat', '');
                    } else {
                      if (((s as any).zz_stage ?? 0) === 24) {
                        scene.text('Vicky drops on her knees and starts crawling towards you, purring like a big red cat in heat.');
                        qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
                        qspCall(s, 'stat', '');
                      } else {
                        if (((s as any).zz_stage ?? 0) === 25) {
                          scene.text('She starts touching you under your clothes, kissing you. You return the favor and passionately kiss her back, gently touching her breasts.');
                          qspCall(s, 'arousal', 'kiss', 2, ((s as any).npcID1 ?? 0), 'group', 'masturbate');
                          qspCall(s, 'stat', '');
                        } else {
                          if (((s as any).zz_stage ?? 0) === 26) {
                            scene.text('However, this is not the end of the dance.');
                            scene.text('Vicky, showing great flexibility, does a few acrobatic moves, widely spreading her legs and revealing her pussy to you and Vanya. You see her pussy shining from all the juices.');
                            qspCall(s, 'arousal', 'voyeur', 2, 'group', 'masturbate');
                            qspCall(s, 'stat', '');
                          } else {
                            if (((s as any).zz_stage ?? 0) === 27) {
                              scene.text('Vicky takes you by the hand and pulls you up to Vanya. You were so focused on Vicky that you forgot about Vanya being completely naked.');
                              scene.text('The two of you lie down on the huge bed, making out, while Vanya comes over, holding his cock in his hand.');
                              qspCall(s, 'arousal', 'foreplay', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                              qspCall(s, 'stat', '');
                            } else {
                              if (((s as any).zz_stage ?? 0) === 28) {
                                scene.text('Vicky starts sucking his cock, bobbing her head up and down. While she\'s doing that she makes sure not to forget about you, rubbing her fingers on your pussy lips, stimulating you.');
                                qspCall(s, 'arousal', 'clit_finger', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                qspCall(s, 'stat', '');
                              } else {
                                if (((s as any).zz_stage ?? 0) === 29) {
                                  scene.text('Vicky keeps on sucking Vanya\'s cock, she\'s really skillful, fitting his whole cock in her mouth. You and Vanya start making out, your tongues touching and exchanging saliva. Seeing this, Vicky speeds up, clearly turned on by seeing her boyfriend kissing another girl.');
                                  qspCall(s, 'arousal', 'clit_finger', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                  qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group');
                                  qspCall(s, 'stat', '');
                                } else {
                                  if (((s as any).zz_stage ?? 0) === 30) {
                                    scene.text('You can\'t really figure out who\'s having most fun, you, Vanya or Vicky.');
                                  } else {
                                    if (((s as any).zz_stage ?? 0) === 31) {
                                      scene.text('Vicky, figuring that Vanya might cum soon, stops sucking him, leaving him with a throbbing cock to cool off for a minute. She pushes you on the bed and starts eating you out right away, making you edge immediately. Vanya, having rested for a bit begins fucking her from behind. The pleasure that Vanya gives her is making her lick your pussy even more passionately.');
                                      qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                      qspCall(s, 'stat', '');
                                    } else {
                                      if (((s as any).zz_stage ?? 0) === 32) {
                                        scene.text('Without thinking, you begin licking her clit, double pleasuring her. She starts moaning loudly. She\'s about to cum… Right in front of your nose you see Vanya\'s cock going in and out of Vicky\'s dripping pussy. When able, you sometimes lick Vanya\'s cock wanting to taste Vicky even more…');
                                        qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                        qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                        qspCall(s, 'arousal', 'bj', 2, ((s as any).npcID ?? 0), 'group');
                                        qspCall(s, 'stat', '');
                                      } else {
                                        if (((s as any).zz_stage ?? 0) === 33) {
                                          scene.text('After a couple of minutes Vicky starts shaking and groaning, cumming over your face and Vanya\'s cock. She collapses on you, still shaking, Vanya pulls out of her pussy and cums all over her ass.');
                                          scene.text('The hot jets of sperm hitting Vicky\'s ass drip all over you, making you try to catch it all with your mouth.');
                                          scene.text('Vicky, feeling rejuvenated, begins violently assaulting your vagina with her tongue and fingers, you only manage to hold on for a minute, screaming, squirting all over Vicky\'s lovely face.');
                                          qspCall(s, 'arousal', 'cuni', 2, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                          qspCall(s, 'arousal', 'cuni_give', (-2), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
                                          qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
                                          qspCall(s, 'arousal', 'end');
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
                  }
                }
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'mey_vika_events', 'play_game_wish1', zz_stage + 1
  } },
      ]);
    } else {
      scene.text('Still panting, tired but happy, you relax. Lying on the messy bed, the three of you hug each other carefully, gently stroking each other, slowly cooling down.');
      // TODO-QSP: dynamic text: "That was amazing, <<$pcs_nickname>>!" Whispers Vicky. "I hope you're not mad at...
      scene.text(`"That was amazing, ${((s as any).pcs_nickname ?? 0)}!" Whispers Vicky. "I hope you're not mad at us, Vanya and I wanted to have a threesome for the longest time. We had a feeling you would be up for it, but we didn't dare to ask you. We didn't know how you would react."`);
      scene.text('You respond by gently kissing them both.');
      scene.text('You forget about the time while lying there all together, intertwined in an intricate tangle, slowly cooling off.');
      scene.text('All of a sudden you hear a gentle knock on the door.');
      scene.text('You hear the voice of Vicky\'s mother…');
      scene.text('"I didn\'t mean to interrupt, but are you all right?"');
      scene.actions([
        { label: 'Go', goto: ['mey_vika_events', 'end_game'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlayGameWish2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_game_kiss2.jpg');
  scene.text('Vanya thoughtfully rubs his chin.');
  scene.text('"What could I make you do? Let me think… I want you to kiss Vicky! A real kiss, not a little pecker! And don\'t forget using the tongue!"');
  scene.text('You look at him in amazement.');
  scene.text('"You have to keep your promise. Fulfill my wish!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_game_kiss3.jpg');
    scene.text('Vicky, meanwhile, slyly narrows her eyes expectantly looking at you, licking her lips.');
    scene.text('"Yeah, sure, I don\'t mind."');
    scene.text('You lean towards Vicky, she\'s excitedly waiting for your lips. The kiss starts innocently enough, but as Vicky\'s tongue sneaks into your mouth, the two of you start to play with each other\'s tongues. Vicky lightly bites your lower lip.');
    scene.text('Vicky hugs you, squeezing you with her perky little breasts, her hands gently caressing your back, descending lower and lower.');
    scene.text('You start getting excited and you are already passionately responding on your own initiative, feeling up her ass.');
    scene.text('You kiss enthusiastically, forgetting about time, about Vanya sitting next to you, completely surrendering to each other.');
    // TODO-QSP: dynamic text: "Wow! Well, who would have thought you were a good kisser, <<$pcs_nickname>>! I ...
    scene.text(`"Wow! Well, who would have thought you were a good kisser, ${((s as any).pcs_nickname ?? 0)}! I never thought you were cool enough to know how to kiss" Says a delightedly flushed Vicky.`);
    scene.actions([
      { label: 'Next game', goto: ['mey_vika_events', 'play_game'] },
      { label: 'Go', goto: ['mey_vika_events', 'end_game'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPlayGameWish3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
  }
  scene.img('images/characters/pavlovsk/school/girl/vicky/event/vika_game_kiss.mp4');
  scene.text('"You Lost! You Lost!" sings Vicky. "Now let\'s see, what do I want? I want… I want… I want you to make out with Vanya! A real kiss, not a little pecker! And don\'t forget using your tongue!"');
  scene.text('"Well, I lost, and will have to fulfill my promise." You lean to Vanya kissing him on the lips. Kissing someone else\'s boyfriend fills you with excitement. Your private parts start pulsating, the juices start flowing and you feel your panties getting wet. His tongue intertwines in your mouth, you suck each other lips. Vanya holds you close to him and can you feel his erect cock pressing against you. You begin grabbing his ass, and at the end of your make out session you bite his lip.');
  scene.text('Vicky heartily applauds.');
  // TODO-QSP: dynamic text: "Wow! Well, you surprised me, <<$pcs_nickname>>! I never thought you were so coo...
  scene.text(`"Wow! Well, you surprised me, ${((s as any).pcs_nickname ?? 0)}! I never thought you were so cool! While I was watching the two of you I wanted to make out with you too, you little tease."`);
  qspCall(s, 'arousal', 'foreplay', 10);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Next game', goto: ['mey_vika_events', 'play_game'] },
    { label: 'Finish', goto: ['mey_vika_events', 'end_game'] },
  ]);
  scene.build();
}

function enterPlayGameSub(s: GameState, scene: SceneBuilder): void {
  ((s as any).win ?? {})[0] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).win ?? 0)[0] === 0) {
    ((s as any).win ?? {})[1] = Math.floor(Math.random() * 2) + 1;
  } else {
    if (((s as any).win ?? 0)[0] === 1) {
      ((s as any).win ?? {})[1] = (((Math.floor(Math.random() * 11) + 0) > 5) ? (0) : (2));
    } else {
      if (((s as any).win ?? 0)[0] === 2) {
        ((s as any).win ?? {})[1] = Math.floor(Math.random() * 2) + 0;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNearSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).vicky_afterschool = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).locat ?? 0)?.['Vicky'] < 10  ||  ((s as any).locat ?? 0)?.['Vicky'] >= 12) {
    scene.text('<br>Vicky Meynold leaves the school by herself.');
  } else {
    scene.text('<br>You see Vicky Meynold leaving the school area holding hands with Vanya.');
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 0) {
      scene.text('"Hmm, where they are heading? Vicky\'s house is on the opposite side of the city, Vanya\'s too…" You think for yourself. In the corner of your eye you see Vicky\'s twin sister Katja and decided to ask her.');
      scene.text('"Katja, do you know where they\'re heading?" You ask, nodding towards the couple?');
      if (((s as any).npc_rel ?? 0)?.['A14'] >= 60) {
        // TODO-QSP: dynamic text: "There's not much to say, <<$pcs_nickname>>." Says Katja smiling.
        scene.text(`"There's not much to say, ${((s as any).pcs_nickname ?? 0)}." Says Katja smiling.`);
        scene.text('"As far as I know they go for a walk in the park. Though they walk on the off-beat tracks, attempting to stay hidden, away from all the prying eyes." Katja continues.');
        ((s as any).mey_vika ?? {})['mey_vika_qw'] = 1;
        scene.actions([
          { label: 'Go to the Park', goto: ['pav_park', 'start'] },
        ]);
      } else {
        scene.text('"I don\'t really know what the two of them are doing." Katja answers shortly and starts walking away, not wanting to keep the conversation going.');
        ((s as any).mey_vika ?? {})['mey_vika_qw'] = 2;
        scene.actions([
          { label: 'Stalk them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_park', 'start'] },
        ]);
      }
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 18  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 20  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'mey_vika_events', 'park_qw');
      } else {
        if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 20  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
          scene.text('Seeing you, they both turn in your direction and stop in front of you.');
          scene.text('Vicky smiles at you, "We should hang out! You won\'t bother anyone at my place."');
          scene.text('"Vicky won\'t accept a no, so you are coming with us." Vanya says, as he places his arm around your shoulders and guides you out of the school grounds.');
          scene.text('You don\'t want to be rude, so you gladly agree.');
          scene.actions([
            { label: 'Visit Vicky', goto: ['mey_vika_events', 'first_visit'] },
          ]);
        } else {
          if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 27  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
            ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
            // TODO-QSP: dynamic text: "My mother was quite intrigued by you, <<$pcs_nickname>>… That friend of yours, ...
            scene.text(`"My mother was quite intrigued by you, ${((s as any).pcs_nickname ?? 0)}… That friend of yours, ${((s as any).pcs_nickname ?? 0)}? Why doesn't she visit us more often?"`);
            scene.text('You start feeling a bit ashamed because Vicky needed to remind you and you promise that you will definitely visit in the near future.');
            scene.actions([
              { label: 'Visit aunt Tamara', goto: ['mey_tamara_events', 'next_meet'] },
            ]);
          } else {
            if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 31) {
              ((s as any).mey_vika ?? {})['mey_vika_qw'] = 32;
              ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
              ((s as any).mey_vika ?? {})['key'] = 1;
              // TODO-QSP: dynamic text: "My mother likes you very much, <<$pcs_nickname>>, and the three of us hit it of...
              scene.text(`"My mother likes you very much, ${((s as any).pcs_nickname ?? 0)}, and the three of us hit it off, so here's the key to our house. Don't worry about anything, our house is your house. Here you go, come visit any time you like!"`);
              scene.actions([
                { label: 'Depart', goto: ['gschool_grounds', 'main'] },
              ]);
            } else {
              scene.text('"The sweet couple are going to the park again…" you chuckle.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeachStalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/beach_chat.jpg');
  scene.text('"Hmm, where they are heading? Vicky\'s house is in the opposite direction, Vanya\'s too…" You think for yourself. In the corner of your eye you see Vicky\'s twin sister Katja sunbathing on a towel and decided to ask her.');
  scene.text('<br>"Katja, do you know where they\'re heading?" You ask, nodding towards the couple?');
  if (((s as any).npc_rel ?? 0)?.['A14'] >= 60) {
    // TODO-QSP: dynamic text: "There's not much to say, <<$pcs_nickname>>." Says Katja smiling.
    scene.text(`"There's not much to say, ${((s as any).pcs_nickname ?? 0)}." Says Katja smiling.`);
    scene.text('"As far as I know they go for a walk in the park. Though they walk on the off-beat tracks, attempting to stay hidden, away from all the prying eyes." Katja continues.');
    scene.text('You say your thanks and after a brief chat with Katja, you decide to follow the couple. She said they go to the park so you start heading there to see if you can find them.');
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 1;
    scene.actions([
      { label: 'Go to the Park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_park', 'start'] },
    ]);
  } else {
    scene.text('"I don\'t really know what the two of them are doing." Katja answers shortly, lays back down and puts her eye protection back on, in dismissal.');
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 2;
    scene.actions([
      { label: 'Stalk them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_park', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterParkMeet(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
  qspCall(s, 'stat', '');
  if (((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 5) {
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 17) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
      } else {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      }
    }
    if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 19) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/park/skver.jpg');
      } else {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
      }
    }
    if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 18) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
      } else {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
      }
    }
    if (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12) {
      if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 16) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
      } else {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
      }
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 3) {
      scene.text('You wander into a distant part of the park, but you can\'t see anyone, the bad weather has scared everyone away.');
    } else {
      scene.text('You wander into a distant part of the park where Vicky usually hangs out with Vanya, but you don\'t come across them there, perhaps due to bad weather.');
    }
    scene.actions([
      { label: 'Finish your walk', goto: ['pav_park', 'start'] },
    ]);
  } else {
    ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
    if (((s as any).mey_vika ?? 0)?.['mey_vika_park_action'] === 0) {
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      scene.img('images/locations/pavlovsk/resident/meynolds/vika_park_walk.jpg');
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_park_action'] === 1) {
        scene.text('<center><h2>Pavlovsk Park</h2></center>');
        scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_park_kiss_\' + iif(month > 10 or month < 4, \'winter\', \'summer\') + \'.jpg');
      } else {
        if (((s as any).mey_vika ?? 0)?.['mey_vika_park_action'] === 2) {
          scene.text('<center><h2>Pavlovsk Park</h2></center>');
          scene.img('images/locations/pavlovsk/resident/meynolds/vika_park_bench.jpg');
        }
      }
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 0) {
      scene.text('Walking around the square, dreaming yourself away, you don\'t pay attention to where you\'re headed. You wander to the distant side of the park, where you notice Vicky and Vanya.');
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 1) {
        scene.text('You know exactly where to head this time, notice Vicky and Vanya, and wander into the distant part of the park.');
      } else {
        if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 2) {
          scene.text('You want to avoid meeting Vicky and Vanya so you quietly follow them, avoiding them as best you can, sneaking after the couple in the park.');
        } else {
          if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 3) {
            scene.text('You know exactly where to head this time, notice Vicky and Vanya, and wander into the distant part of the park to "accidentally" meet the couple.');
          }
        }
      }
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 7) {
      qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
      qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
      qspCall(s, 'stat', '');
      scene.text('As you\'re leaving, you notice Vicky whispering something to Vanya. You notice Vanya\'s hand stroking and squeezing Vicky\'s butt, as they stare at you with lust in their eyes…');
      if (((s as any).npc_rel ?? 0)?.['A15'] < 80) {
        return;
        scene.actions([
          { label: 'Finish your walk', goto: ['pav_park', 'start'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A15'] >= 80  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 18) {
          if ((((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 10)  &&  (((s as any).hour ?? 0) <= 20  &&  ((s as any).hour ?? 0) >= 8)) {
            scene.text('They are going to the beach and ask you to join them.');
            if ((!((s as any).mesec ?? 0))) {
              scene.actions([
                { label: 'Go with them to the beach', goto: ['mey_vika_events', 'beach_event0'] },
                { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re in in a hurry, so you decide to thank Vicky for the invite but that you have something elsewhere that you need to attend.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Decline', handler: (st: GameState) => {
    scene.text('You currently have your period, and don\'t feel up to visiting the beach today, so you decide to thank Vicky for the invite but that you have a thing elsewhere that you need to attend…');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
              ]);
            }
          } else {
            if ((((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 4)  &&  (((s as any).hour ?? 0) <= 20  &&  ((s as any).hour ?? 0) >= 8)) {
              scene.text('They are going to the sauna and ask you to join them.');
              if ((!((s as any).mesec ?? 0))) {
                scene.actions([
                  { label: 'Go with them to the sauna', goto: ['mey_vika_events', 'sauna_event'] },
                  { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re in in a hurry, so you decide to thank Vicky for the invite but that you have something elsewhere that you need to attend.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Decline', handler: (st: GameState) => {
    scene.text('You currently have your period, and don\'t feel up to visiting the sauna today, so you decide to thank Vicky for the invite but that you have a thing elsewhere that you need to attend…');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
                ]);
              }
            } else {
              if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 21) {
                scene.text('Vicky invites you to the new trendy cafe "Del Parco".');
                if (qspFunc(s, 'money', 'can_afford', 300) === 1) {
                  scene.actions([
                    { label: 'Visit the cafe', goto: ['mey_vika_events', 'cafe_repeat_qw'] },
                    { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re in in a hurry, so you decide to thank Vicky for the invite but that you have something elsewhere that you need to attend.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re pretty much broke and you don\'t want to be impudent by asking Vicky to pay for you, so you decide to thank Vicky for the invite but that you have a thing elsewhere that you need to attend…');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
                  ]);
                }
              } else {
                scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
              }
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A15'] >= 60  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 10) {
            scene.text('Vicky invites you to the new trendy cafe "Del Parco".');
            if (qspFunc(s, 'money', 'can_afford', 300) === 1) {
              scene.actions([
                { label: 'Visit the cafe', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 15;
  }, goto: ['mey_vika_events', 'cafe_qw'] },
                { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re in in a hurry, so you decide to thank Vicky for the invite but that you have something elsewhere that you need to attend.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Decline', handler: (st: GameState) => {
    scene.text('You\'re pretty much broke and you don\'t want to be impudent by asking Vicky to pay for you, so you decide to thank Vicky for the invite but that you have a thing elsewhere that you need to attend…');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
    ]);
  } },
              ]);
            }
          } else {
            scene.actions([
              { label: 'Finish your walk', goto: ['pav_park', 'start'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 5) {
        if (((s as any).npc_rel ?? 0)?.['A15'] < 60) {
          scene.text('You approach the couple and greet them, but they don\'t pay any attention to you.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
          qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
          qspCall(s, 'stat', '');
          scene.text('You approach the couple and greet them, right away Vicky starts gossiping, as always, Vanya mostly jokes about the things you two are talking about. You chat for a few minutes…');
        }
        scene.actions([
          { label: 'Finish your walk', goto: ['pav_park', 'start'] },
        ]);
      } else {
        if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 3) {
          scene.text('Nearing them all you manage to say is a quick "Hi".');
          if (((s as any).npc_rel ?? 0)?.['A15'] < 60) {
            scene.text('Vicky and Vanya only glance in your direction and turn away. Not having anything to say, you decide it\'s better to go away.');
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
            qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
            qspCall(s, 'stat', '');
            scene.text('Vicky and Vanya unisonally answer "Hi", but not knowing how to continue the conversation, you keep walking on.');
          }
          scene.actions([
            { label: 'Finish your walk', goto: ['pav_park', 'start'] },
          ]);
        } else {
          if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 0) {
            scene.text('Nearing them, not having figured out what to do, you simply walk by.');
            scene.actions([
              { label: 'Finish your walk', goto: ['pav_park', 'start'] },
            ]);
          }
        }
      }
    }
    ((s as any).mey_vika ?? {})['mey_vika_park_action'] = (((s as any).mey_vika ?? {})['mey_vika_park_action'] ?? 0) + (1);
    if (((s as any).mey_vika ?? 0)?.['mey_vika_park_action'] > 2) {
      ((s as any).mey_vika ?? {})['mey_vika_park_action'] = 0;
    }
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 10) {
      ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterParkMeetEv(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterCafeQw(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 300);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/vicky/sex/cafe_qw0.jpg');
  scene.text('You sit in the café, eating pizza and chat with Vicky. You notice Vicky is acting somewhat strange, giggling, pressing herself against Vanya. One of his hands is almost constantly under the table and you can hear Vicky purr quietly, arching her back, and lustfully looking at you, occasionally licking her lips.');
  scene.text('Vanya keeps on joking as if nothing is going on. You observe them and start getting a bit excited without really knowing why. They are clearly playing some kind of game. You keep wondering why Vanya\'s hand is constantly under the table, and why Vicky is acting so strange, like she\'s trying to hide something?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hmm…', handler: (st: GameState) => {
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/cafe_qw1.jpg');
    scene.text('You "accidentally" drop a fork and bend down to pick it up. As you look under the table, you see Vicky with her legs spread wide while Vanya fingers her pussy and fondles her inner thighs, teasing the swollen clit, rubbing her lips, occasionally pushing his finger into her. As the fingers enter Vicky, she starts moving around trying to make herself cum.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/cafe_qw2.jpg');
    scene.text('So that\'s why she was arching! You\'re so mesmerized, you don\'t even notice the pussy juice flowing down your own legs. You knees tremble, but the excitement is still growing. You start to panic a bit and just a few more minutes later you know you must get away or else they\'ll see you orgasm.');
    qspCall(s, 'arousal', 'voyeur_sex', (-100));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Say goodbye', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/cafe_org.jpg');
    scene.text('You hastily say goodbye, wanting to get away. Vicky tries to say goodbye but she only manages to let out some quiet moans while Vanya begins speeding up. Seeing this you leave as quickly as you can. You turn around seeing them still at it, and right at the exit of the café a powerful orgasm hits you, making your legs tremble, barely keeping on your feet. You have to grab the patio wall of the café, just so you won\'t fall over.');
    qspCall(s, 'arousal', 'voyeur_sex', 2, 'unknown');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'mood', 'raise', 'tiny');
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 18;
    qspCall(s, 'stat', '');
  }, goto: ['cafe_parco', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCafeRepeatQw(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 300);
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/vicky/sex/cafe_qw0.jpg');
  scene.text('You sit in the café, eating pizza and chat with Vicky. You notice Vicky is acting somewhat strange, giggling, pressing herself against Vanya. One of his hands is almost constantly under the table, and you can hear Vicky purr quietly, arching her back, and lustfully looking at you, occasionally licking her lips.');
  scene.text('Vanya keeps on joking as if nothing is going on. You observe them, and start getting a bit excited without really knowing why. They are clearly playing some kind of game. You keep wondering why Vanya\'s hand is constantly under the table, and why Vicky is acting so strange like she\'s trying to hide something?');
  qspCall(s, 'arousal', 'voyeur_sex', 10);
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 15) {
    scene.text('Of course, you know why they act this way, but you try not to show it, despite getting very turned on.');
  } else {
    scene.text('You wonder why they act this way, but you don\'t dare to do anything…');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 18) {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Say goodbye and leave', goto: ['cafe_parco', 'inner'] },
  ]);
  scene.build();
}

function enterParkQw(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/building/gschool.jpg');
  // TODO-QSP: dynamic text: After school ends you meet Vicky and Vanya outside. They once again invite you t...
  scene.text(`After school ends you meet Vicky and Vanya outside. They once again invite you to the café, but remembering what happened the previous time you tell them that you don't have any money. You politely decline, even in spite being sure they would put on a new show for you.<br>"Then let's go for a walk together!" Vicky offers. <br>"What do you say, ${((s as any).pcs_nickname ?? 0)}?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but I can\'t tonight."');
    scene.text('"That\'s a shame…" Vicky answers disappointedly. "Well, some other time then."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Return', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    scene.text('You walk for an hour in the Park and spend a wonderful time with them. You walk in between them. Vicky, cheerfully chatting, holds you by the waist with one of her hands.');
    scene.text('You, of course, respond to her advances. You gently touch her back, continuing to walk arm in arm.');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'End the walk', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A165');
    qspCall(s, 'npcStat', 'A15', 'a');
    qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
    scene.text('"What a wonderful walk, Vanya! We need to do this again some time."<br> Vanya suddenly grabs you both with his arms and twirls around. The two of you start laughing and playfully try to escape from his grip. When saying goodbye Vicky leans towards you… and gives you a kiss on the lips. This kiss feels extraordinary and surprises you a bit… Vanya also kisses you and you, once again, start getting turned on just like at the café.');
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 19) {
      ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
  }, goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSaunaEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
  ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npcStat', 'A165');
  qspCall(s, 'npcStat', 'A15', 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/sauna.jpg');
  scene.text('Walking arm in arm, you make your way towards the sauna, chatting about your day and laughing.');
  scene.text('As you get close, Vanya breaks away. "You two go on ahead, I\'m gonna go and jump in the lake."');
  scene.text('You and Vicky roll your eyes at him almost simultaneously, and she points to the snow on the ground. "Shouldn\'t you do that after the sauna?"');
  scene.text('With a shrug, Vanya smiles back with a wink. "Walking with you two lovely ladies has gotten me plenty warm on the way here, I need to cool off." Then, he walks down the path towards the boat dock.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_1.jpg');
    // TODO-QSP: dynamic text: Entering the sauna by yourselves, you quickly get changed and head towards the r...
    scene.text(`Entering the sauna by yourselves, you quickly get changed and head towards the rocks to splash some water over them. Steam fills the room as you sit down on the bench next to Vicky, who is watching you with a smile on her face. "Hey ${((s as any).pcs_nickname ?? 0)}, there are better ways we could turn the heat up in here, make it even steamier since Vanya is gone," she says mischievously.`);
    scene.text('"What do you mean?" you ask, looking around for something you might have missed.');
    scene.text('Both Vanya and myself have been seeing you around in the park and at school, and we have talked about asking if you would be interested in a threesome together at some point…" Vicky says as she reaches over and puts a soft hand over your thigh. "… and I like you, maybe even more than a friend."');
    scene.text('By this time, her face is very close to yours and you can feel your cheeks getting really red, and not from the heat rocks. "I don\'t know… I…"');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kiss her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_2.jpg');
    scene.text('At a loss for words, you just decide to close your eyes, lean forward and kiss her. The cherry flavor of her chapstick is the first thing you notice, then the softness of her lips, like velvet. Vicky was in shock for the briefest of seconds and then pulls you in closer, her hands roaming over your body, cupping your breasts and running her thumb over the slight bump that exposes your nipple\'s presence.');
    scene.text('Feeling turned on, you kiss her harder and part her lips with your tongue. Your own hands reach up and return the fondling, one hand slipping behind her bikini top and pushing it to the side, while you feel your own top being similarly moved aside for Vicky\'s hand.');
    scene.text('With a gasp of air, Vicky pulls back from your kiss and bites her lip in pleasure, moaning at your touch, and reaches over and rolls an exposed nipple between her fingers while she slowly pushes you backwards.');
    scene.text('Sliding down, she nibbles on your other nipple and gives it a parting sensuous lick, before sliding down even further.');
    qspCall(s, 'arousal', 'kiss', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_3.jpg');
    scene.text('While removing more of each other\'s clothing, you watch as Vicky places kisses down your chest, across your tummy, then spreads your legs with her hands while she pecks the area around your labia with her velvety lips. "I have been wanting to do this to you for a while. Mmm", she says sensually, before licking the crevasse from the bottom up while staring into your eyes.');
    scene.text('You arch your back as you feel her tongue part your nether lips and you drop your top to the floor next to Vicky\'s discarded clothing.');
    scene.text('Reaching down, you run a hand through her hair, while your other hand plays with one of your breasts. You lose track of time during your bliss when she stands up over you and turns around.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '69', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_4.jpg');
    scene.text('Placing one leg to either side of you, she eases herself down once again and licks you between the legs from the other direction, and places her own cunny over your head.');
    scene.text('Taking the opportunity, you reach up with both hands and run them over her plump ass. You give each cheek a pleasurable squeeze, before pulling her down over your lips and slipping your own tongue between her folds. Feeling Vicky\'s tongue in yours quicken its momentum, you dive deeper into her folds and lap at her clit and inner walls with more gusto. You were just starting to feel a rise in pleasure being taken over by your orgasmic activities, when the door of the sauna opens.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Who is it?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_5.jpg');
    scene.text('Vanya enters with a huge grin and takes in the scene in front of him. "Oh… I see you two are busy. Maybe I should come back later?" he asks and feigns turning around to leave.');
    scene.text('Vicky lifts her head from your pussy long enough to glare at him playfully, "Don\'t you dare! Get your ass over here and give me your cock!"');
    scene.text('Vanya turns back towards you and lets his towel fall, showing off his larger than average hard cock and swinging it left and right. "That\'s no way to ask, Vicky! Say \'please\'."');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'cuni_give', (-3), ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Vicky rides your face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_6.jpg');
    scene.text('Vicky\'s demeanor changes in an instant as she responds in her most innocent voice, "Please Mister, can I have your cock in my mouth?", she says with the look of pure hunger on her face while she sits up and presses her snatch harder against your face."');
    scene.text('With no other choice, you increase the tempo of your tongue in her folds, while she grinds your face in pleasure.');
    scene.text('Vanya saunters over and places his rod in front of Vicky, who swallows it to the base in one gulp with practiced ease. Her happy bobbing up and down his shaft as he guides her head with his hands, causes her to press down even more and grind your face.');
    scene.text('Her wetness drips down your chin as she finally lifts up off of you, with a resounding pop of Vanya\'s cock sliding out of her lips. She urges you to sit up on the next bench and spread your legs as she changes position, once again.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_7.jpg');
    scene.text('Vicky gets down on all fours, and places her lips over your crotch again. She sucks on your clit while she slides a couple fingers inside, which only goes faster as Vanya comes up behind her and presses the head of his dick into her pussy and slides himself into her.');
    scene.text('Fucking Vicky doggy style, Vanya grabs her hips and pulls Vicky back into him, ramming her hard. She responds by moaning into your sex, sending vibrations through your body and bringing you back into mindless bliss.');
    scene.text('You slowly start to feel yourself climax, and something in your face must have given it away, because Vanya gives Vicky a hearty smack on her ass and pulls her away from you, and flips her over onto her back.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride her face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_8.jpg');
    scene.text('Laying on her back, Vicky spreads her legs, while Vanya gets back into position and rams into her. Vicky screams out with each thrust, and not wanting to let every jogger in the park know what\'s going on in the sauna, you decide to place yourself over her head and lower yourself down and ride her face as hard as she rode yours.');
    scene.text('Grinding yourself over her face, you quickly feel yourself edging closer and closer to orgasm. Vicky\'s moans and screams in your slit, as Vanya picks up speed, only heightens the sensation.');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_9.jpg');
    scene.text('By this time, all three of you are moaning loudly and Vicky is the first to climax. Her body shakes and spasms underneath you, and the force of her orgasmic scream in your folds is enough to make you release your juices all over the girl\'s face. You reach out and grasp both of her breasts and squeeze them, just to keep yourself steady.');
    scene.text('Vanya continues to plunge into Vicky for only a few more seconds, just enough to send her into a second convulsion, before sliding out of her and spraying her used slit and stomach with his seed with a deep moan and heavy breathing. He catches his breath and rolls over to lay back on a bench, "Oh, now that was fun."');
    qspCall(s, 'arousal', 'cuni', 3, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Aftercare', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/wintalt_10.jpg');
    // TODO-QSP: dynamic text: "Yes, it was… we should definitely do this again. What do you think, <<$pcs_nick...
    scene.text(`"Yes, it was… we should definitely do this again. What do you think, ${((s as any).pcs_nickname ?? 0)}? Is this arrangement to your liking? Maybe even Vanya can have some fun with you too, but we can work that out later," Vicky says to you, while you slide up behind her and run your hands over her body once more.`);
    scene.text('"Yeah, I\'d be up for this again. And I\'ll think about Vanya\'s involvement," you say, sticking your tongue out at him playfully before giving Vicky one last passionate kiss.');
    scene.text('"I promise I won\'t bite… unless you ask nicely," he responds with a playful wink in kind.');
    scene.text('You spend the next few minutes getting cleaned up and dressed, before leaving the sauna.');
    scene.text('Tired, but satisfied, the three of you walk back. Vicky is following you home, and just as you\'re about to part ways, she sweetly kisses you on the lips.');
    scene.text('"We should hang out at my place sometime. I\'ll introduce you to my mother. I\'m sure she\'ll be delighted to get to know you."');
    scene.text('You answer that you\'ll definitely think about it and thank her for the invitation.');
    // TODO-QSP: dynamic text: "Don't forget about it now, <<$pcs_nickname>>!" Vicky presses on.
    scene.text(`"Don't forget about it now, ${((s as any).pcs_nickname ?? 0)}!" Vicky presses on.`);
    scene.text('"Of course I won\'t, Vicky!" you sincerely reply.');
    qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 20;
    qspCall(s, 'stat', '');
    qspCall(s, 'mey_vika_events', 'beach_ender');
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBeachEvent0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach1.jpg');
  if (((s as any).args ?? 0)[1] < 1) {
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach1.jpg');
    scene.text('You arrive at the beach seeing more people than usual and lots of children running around. Vicky frowns…');
    scene.text('"Where the hell are we going to find a spot. You can neither breathe nor fart… I would like to sunbathe, and take a dip in the lake… Well, at least we brought some beers with us…"');
    scene.actions([
      { label: 'Go to the remote beach', goto: ['mey_vika_events', 'beach_event0', '1'] },
    ]);
  } else {
    ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach2.jpg');
    scene.text('Suddenly Vicky gets an idea…');
    scene.text('"What do you say we go to the remote beach instead? There is one near here! The water is cleaner and there aren\'t that many kids there." You agree with her, and the three of you start walking toward the remote beach.');
    scene.text('The remote beach is really empty and quiet. You are at ease, having found a nice spot, lazily chatting and sipping a cold beer, which Vanya brought in a cooling bag.');
    if (((s as any).hour ?? 0) < 20) {
      scene.actions([
        { label: 'Swim', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach3.jpg');
    scene.text('You laugh and squeal as you\'re running towards the water to go swimming. When the water gets to your thighs you dive and after coming up again start splashing each other in the shallow water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Continue', goto: ['mey_vika_events', 'beach_event0', '1'] },
    ]);
  } },
        { label: 'Tan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach4.jpg');
    scene.text('Vicky reaches into her bag and pulls out a bottle of suntan lotion…');
    scene.text('"Vanya, could you help me out? I always get burned like a pig because of my pale skin…"');
    scene.text('Vanya squeezes the bottle and begins applying lotion on Vicky\'s back, smearing it all over her back. His hands wander over Vicky\'s body while she lies there, enjoying herself, she\'s getting a lot of pleasure from this. Vanya constantly keeps touching the straps of the bikini top.');
    scene.text('"Vicky honey, I need to loosen your bikini top, is it okay?" He asks.');
    scene.text('"Can you untie it by yourself. Or do you need me to help you out?"');
    scene.text('Vanya awkwardly starts fumbling with her bikini top making Vicky explode…');
    scene.text('"You are literary the worst! Here, let me do it!" She sits up and immediately unties it.');
    scene.text('An awkward movement causes the top to fall in her lap, exposing her small breasts. Vicky doesn\'t seem to mind…');
    scene.text('"There is no one here but us anyway. And I want my whole body to get tanned!"');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach5.jpg');
    scene.text('"Vanya, don\'t just stand there! You haven\'t finished yet! My chest area is the most critical one it needs special attention." She lies back, relaxing, waiting for Vanya\'s hands to start.');
    scene.text('Vanya massages her body, rubbing lotion, putting special emphasis on her breasts, Vicky purrs and arches her back like a cat. Her nipples stiffen from the pleasure. Vanya moves downwards starting on her feet. He applies the lotion tenderly, massaging each toe, gradually moving upwards again. His hands start massaging her thighs, applying lotion, often touching her bikini bottom as if by accident. Vicky bends her knees and looks towards you…');
    scene.text('"Do you enjoy the view?"');
    scene.text('Her catching you red-handed is turning you on. You feel a bit wet. You also notice that Vanya has a boner, his cock is clearly sticking out.');
    scene.text('"I need to go and cool off." He says, and goes for a swim.');
    qspCall(s, 'arousal', 'voyeur', 5, 'group');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 60);
      scene.text('Being a virgin you don\'t know how to deal with something sexual like this and just go quiet and hope it blows over.');
      scene.text('You meet some others from school and spend an hour or so at the beach before getting ready to head back into town.');
      qspCall(s, 'mey_vika_events', 'beach_ender');
    } else {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach6.jpg');
    scene.text('Vicky turns toward you…');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you also need to use suntan lotion. The sun is scorching hot...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, you also need to use suntan lotion. The sun is scorching hot!"`);
    if (((s as any).pcs_tan ?? 0) <= 10) {
      scene.text('"We\'re both really pale. You will get a sunburn for sure."');
    } else {
      if (((s as any).pcs_tan ?? 0) <= 25) {
        scene.text('"Even though you\'re not as pale as me you can still get a sunburn easily."');
      } else {
        if (((s as any).pcs_tan ?? 0) <= 50) {
          scene.text('"Even though you\'ve got a pretty tan you can still get a sunburn if you\'re not careful."');
        }
      }
    }
    scene.text('"It\'s okay, I\'ll manage." You answer calmly.');
    scene.text('You start making excuses, but Vicky is determined…');
    scene.text('"Don\'t be silly! I\'ll smear you in and don\'t worry, I won\'t use my nails unless you want me to."');
    scene.text('"Remove your top!" She resolutely tells you.');
    if (((s as any).pcs_tan ?? 0) <= 10) {
      scene.text('"The both of us are going to get a beautiful tan."');
    } else {
      if (((s as any).pcs_tan ?? 0) <= 25) {
        scene.text('"I\'ll get a beautiful tan and you might even get an exotic air if your skin gets a shade darker."');
      }
    }
    scene.text('"Don\'t worry we\'re all alone here." and in one motion Vicky drops her bikini bottom…');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you apply lotion on my butt, I don't want to look like...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, could you apply lotion on my butt, I don't want to look like a red-assed baboon."`);
    scene.text('"What if Vanya sees us?"');
    scene.text('Vicky starts laughing…');
    scene.text('"It\'s not like he hasn\'t seen it before."');
    qspCall(s, 'arousal', 'voyeur', 5, 'lesbian');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A165');
    qspCall(s, 'npcStat', 'A15', 'a');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach7.jpg');
    scene.text('You take off your bikini top too. Your nipples stiffen just from knowing that Vanya is also here. You\'re not alone here.');
    scene.text('Vicky lies down on her stomach, comically sticking out her round ass. You start smearing the lotion on her milky-white buttocks. You unintentionally slip your finger into her crotch, and you notice that Vicky is as wet as the Niagara falls, she\'s really horny. Vicky moans and buries her head in her towel, biting her lip.');
    scene.text('"Don\'t stop…" She whispers in a husky voice.');
    scene.text('You\'re also getting turned on, you feel your bikini bottom getting wet.');
    scene.text('"Lets switch. Lie on your back." Vicky grabs the bottle from you.');
    scene.text('She sits on top of you and generously covers your body with lotion. Her pussy, which is literally stuck to the bottom of your stomach, is so wet that it seems you could just smear it all over your body, no lotion needed. Her hands stroke and massage your breasts, playing with your nipples. Both of you are panting heavily. Suddenly she reaches into your crotch, your wide-open pussy is ready, dripping your juice all over her fingers. She leans in for a long and juicy kiss. She start pulling off your bottom and to help her out you lift your butt and with one hand, help her to pull them off you. You kiss passionately, unable to break away from each other, petting, stroking and caressing each other, forgetting about Vanya who\'s still swimming.');
    qspCall(s, 'arousal', 'massage', 5, 'lesbian');
    qspCall(s, 'arousal', 'kiss', (-5), 'lesbian');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_beach8.jpg');
    scene.text('Suddenly Vicky begins moaning loudly, biting your lower lip while you kiss. She starts pinching your nipples. It\'s very painful, as if she\'s determined to tear them apart. You can hear her rhythmically panting. The pain almost brings you back from the heights of ecstasy down to earth. Opening your eyes, you realize that Vanya has snuck up from behind and is licking Vicky excitedly, making her act like a wild animal.');
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID1 ?? 0), 'lesbian');
    qspCall(s, 'arousal', 'voyeur', (-5), 'group');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_beach9.jpg');
    scene.text('You begin moaning louder again, edging, ready to cum… The pain you\'re experiencing from the merciless pinching is making you even more turned on. Vicky is now sliding two of her fingers into you, trying to lube you up as much as possible for Vanya. Vanya\'s presence seems to only edge her on as she speeds up bringing you almost to an orgasm.');
    scene.text('Vicky squeals loudly…');
    scene.text('"Vanya, not yet…"');
    scene.text('Vanya comes from behind Vicky and starts teasing you with his cock, pressing against your pussy lips. Vicky grabs Vanya\'s shaft, begins licking it and signals you to come over and join her. ');
    scene.text('You enthusiastically move over to Vanya licking his shaft, teasing him and finally having your lips envelop Vanya\'s hard cock. While you\'re pleasuring her boyfriend Vicky continues petting you edging you once more, stopping just before you orgasm as if she wants you to suffer.');
    qspCall(s, 'arousal', 'vaginal_finger', 20, ((s as any).npcID1 ?? 0), 'group', 'lube', 'lesbian');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_beach10.jpg');
    scene.text('The couple look at each other as they\'ve come to a silent agreement that it\'s time to finally make you orgasm. Vanya brusquely thrusts his cock inside of you. You gasp as he enters you and not before long you\'re yelling loudly unable to hold back anymore, you orgasm violently just like a fountain, your knees buckling from the pressure. Vicky forces herself onto Vanya\'s cock, sucking him until he erupts in her mouth…');
    scene.text('Exhausted, and still shivering, you lie between Vanya and Vicky. They hug you, kissing and caressing your body.');
    // TODO-QSP: dynamic text: "That was wonderful, <<$pcs_nickname>>." whispers Vicky. "I hope you're not mad ...
    scene.text(`"That was wonderful, ${((s as any).pcs_nickname ?? 0)}." whispers Vicky. "I hope you're not mad at us? Vanya and I have for the longest time wanted to experience a threesome. We really got fond of you, but we did not dare to ask you. We didn't know how you would react."`);
    scene.text('Your only response is you gently kissing them both.');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-2), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', (-3), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 20;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/sex/vika_beach11.jpg');
    if (((s as any).kanikuli ?? 0) > 0) {
      scene.text('Tired, but satisfied, the three of you walk back. Vicky is following you home, and just as you\'re about to part ways she sweetly kisses you on the lips.');
      scene.text('"We should go to my place. I\'ll introduce you to my mother. I\'m sure she\'ll be delighted to get to know you."');
      scene.text('"Vicky won\'t accept a no, so you are coming with us." Vanya says, as he places his arm around your shoulders and guides you out towards the residential area.');
      scene.text('You don\'t want to be rude, so you gladly agree.');
      scene.actions([
        { label: 'Go Home with Vicky', goto: ['mey_tamara_events', 'first_meet'] },
      ]);
    } else {
      scene.text('Tired, but satisfied, the three of you walk back. Vicky is following you home, and just as you\'re about to part ways she sweetly kisses you on the lips.');
      scene.text('"We should hang out at my place sometime. I\'ll introduce you to my mother. I\'m sure she\'ll be delighted to get to know you."');
      scene.text('You answer that you\'ll definitely think about it and thank her for the invitation.');
      // TODO-QSP: dynamic text: "Don't forget about it now, <<$pcs_nickname>>!" Vicky presses on.
      scene.text(`"Don't forget about it now, ${((s as any).pcs_nickname ?? 0)}!" Vicky presses on.`);
      scene.text('"Of course I won\'t, Vicky!" You sincerely reply.');
      qspCall(s, 'mey_vika_events', 'beach_ender');
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
    }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeachEnder(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go', handler: (st: GameState) => {
    if ((((s as any).clothingworntype ?? 0) === 'nude'  ||  ((s as any).PSwim ?? 0) === 1)) {
      qspCall(s, 'clothing', 'wear', ((s as any).lastwornclothingtype ?? 0), ((s as any).lastwornclothingnumber ?? 0));
    }
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterBeachEvent1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_beach1.jpg');
  scene.text('Arriving at the beach, you start looking for Vicky and Vanya.');
  scene.text('They\'ve found a comfortable spot where they can sunbathe and drink the beer that they brought in a hefty bag. Noticing you, they wave you over.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Come here and join us, the more the merrier! We have cold be...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}! Come here and join us, the more the merrier! We have cold beer!"`);
  scene.text('"You\'re getting drunk when it\'s this hot outside?" You ask a bit concerned.');
  scene.text('"Don\'t be a buzzkill! You should try some yourself." A sweaty Vanya says, handing you a beer.');
  scene.text('The beer is still cold, despite the heat.');
  scene.text('"It\'s all thanks to this cooler bag." Says Vanya. "I won it at one of the competitions I participated in."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('"Well, look at little princess. I would be honored if someone offered me a beer!" Vicky snorts.');
    scene.actions([
      { label: 'Go', goto: ['pav_lake', ''] },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    scene.text('"I\'m glad we were able to persuade you!" you wave your hand wanting them to scooch over and lie between them on the beach towel. There are more people arriving and the beach is filling up. The children are running around and screaming, splashing water around and the beach begins to resemble a Bazaar on market day.');
    scene.actions([
      { label: 'Sunbathe', handler: (st: GameState) => {
    scene.text('A woman with her children starts spreading their stuff next to you. Vicky being the farthest out, gets covered in sand by the children running around and speaks up furiously…');
    scene.text('"This is not a beach anymore. Look at these people no respect for personal space. Honey, I can\'t stand it here, I\'m going crazy!"');
    scene.text('She wrinkles her forehead. She\'s really mad, sitting there moping in silence, making you chuckle quietly because you\'ve never seen Vicky like this. It\'s quite comical and unusual, seeing her like this.');
    scene.text('All of a sudden Vicky speaks up…');
    scene.text('"How about we head over to the remote beach instead?!"');
    scene.actions([
      { label: 'Go to the remote beach', handler: (st: GameState) => {
    qspCall(s, 'mey_vika_events', 'beach_event0', 1);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCaseGift(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_vika_events" });
  if (((s as any).zz_stage ?? 0) < 2) {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift0.jpg');
    scene.text('Passing by Vicky\'s room, you hear some muffled voices coming from behind the door. Vicky and Vanya are making a commotion, laughing.');
    scene.actions([
      { label: 'Pass by', handler: (st: GameState) => {
    qspCall(st, 'mey_vika_events', 'case_gift_ender');
  } },
      { label: 'Listen', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/case_gift1.mp4');
    scene.text('Your curiosity gets the best of you and you stop by the door, trying to figure out what\'s happening. You can\'t hear them that well, and you can\'t really figure out what they\'re talking about.');
    scene.actions([
      { label: 'Move on', handler: (st: GameState) => {
    qspCall(st, 'mey_vika_events', 'case_gift_ender');
  } },
      { label: 'Try opening the door', handler: (st: GameState) => {
    qspCall(st, 'mey_vika_events', 'case_gift', 2);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).zz_stage ?? 0) < 14) {
      scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift2.jpg');
      scene.text('You can\'t see anything, and you hesitate for a moment, afraid of getting caught. You push the door a little harder, hoping "that the door better not make a sound…". It moves silently, and you look through to the gap again.');
      scene.text('The view is much better now.');
      scene.text('You see Vicky, looking through the linen closet, and hear Vanya\'s voice.');
      scene.text('Vicky finds something and proudly shows it off to Vanya. You can\'t really see what it is because the door is blocking the view. It\'s something that shimmers.');
      scene.text('"Look what my mother gave me!!!"');
      scene.text('Vanya says something sarcastically in response, and Vicky, offended, pouts. Her look is saying everything. Vanya is out on thin ice. She walks over to the chair, which you have a perfect view off.');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift3.jpg');
    scene.text('She sits down on the chair, and almost instantly, notices you.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift4.jpg');
    scene.text('She tries to settle in the chair but can\'t seem to find the sweet spot. "This chair is a real a pain in the ass!" she grins at you.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift5.jpg');
    scene.text('You can hear her clearly now. Vicky doesn\'t seem to mind that you were spying on them.');
    scene.text('Dangling her legs in the air, she grabs a large white Teddy bear and presses it to her.');
    scene.text('"Since you don\'t seem to love me, my new boyfriend will have to do instead." She says and pulls out a… dildo.');
    scene.text('Your mouth drops open. "This is the gift her mother gave her. A fake cock… Her mother gave her a dildo as a gift!!! Can you imagine if my mother would have given me a dildo as a gift…"');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift6.jpg');
    scene.text('You\'ve never fantasized about Vicky in that way. However, now that there\'s a chance of it happening, your head is spinning, wild with possibilities.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift7.jpg');
    scene.text('She starts by removing her t-shirt and places the dildo in the bear\'s paws.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift8.jpg');
    scene.text('Shortly thereafter she removes her shorts. As usual, Vicky rarely bothers wearing underwear.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift9.jpg');
    scene.text('She reaches for the Teddy bear, sliding it down her body and sticks the dildo between her legs.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift10.jpg');
    scene.text('"Look how good my new boyfriend pleases me."');
    scene.text('She glances at Vanya mischievously, as she begins licking the dildo.');
    scene.text('The spectacle is turning you on and you can feel your pussy pulsating a bit.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift11.jpg');
    scene.text('Vicky, spreading her legs mischievously, grabs the bear once again, then leads the dildo to her mouth and begins sucking it, bopping her head up and down.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift11.jpg');
    scene.text('Looking at Vicky playing around with the teddy bear is turning you on. Your juices are flowing and your panties are wet. You begin touching yourself, your pussy is hot and wet. Not being able to withstand, you start masturbating while still spying.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift13.jpg');
    scene.text('Vicky looks at you, not wanting to waste any time, she embraces the plush toy, slides the dildo up and down her pussy lips, lubing it up, and then thrusts it deep into her pussy.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).pcs_horny = 100;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift14.jpg');
    scene.text('You knees are tremble as you approach an orgasm, but then all of a sudden you hear footsteps coming up the stairs, Tamara was apparently still awake, watching TV. You hastily retreat to avoid getting caught at the crime scene.');
    scene.actions([
      { label: 'Quickly return to your room', handler: (st: GameState) => {
    // TODO-QSP: mey_vika['mey_vika_qw'] = 31
    qspCall(st, 'mey_vika_events', 'case_gift_ender');
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCaseGiftEnder(s: GameState, scene: SceneBuilder): void {
  ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
  scene.actions([{ label: 'Continue', goto: ['mey_home', 'guest_bedroom'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterLearning0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/school/girl/vicky/sex/case_gift0.jpg');
  scene.text('You walk around the house, hearing the voices of aunt Tamara, Vanya and Vicky. They\'re whispering something, trying to explain how Vicky should carry herself. The door is closed but not locked.');
  scene.text('Your curiosity comes over you and you sneak up to the door wanting to eavesdrop.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass by', goto: ['mey_home', 'guest_bedroom'] },
    { label: 'Open the door', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning1.jpg');
    scene.text('As you look through the crack your eyes widen as you see something very interesting, Tamara is sitting on the sofa dressed in a light robe. She is sternly instructing Vanya, tapping her sleek nails on her knee, like she\'s trying to keep a beat.');
    scene.actions([
      { label: 'Move away', goto: ['mey_home', 'guest_bedroom'] },
      { label: 'Keep watching', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning2.jpg');
    scene.text('You see Vanya fucking Vicky\'s ass. They\'re really going at it. Vicky is fingering her clitoris and moaning loudly.');
    scene.text('Your jaw drops and you instantly get wet between the legs. You slide your hand inside your panties and begin rubbing your swollen clit. You begin fingering yourself fast and hard and almost immediately a violent orgasm overcomes you.');
    if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 34) {
      scene.text('The convulsions are so strong you start shaking. As you try to calm down you accidentally try to rest your hand on the door and tumble into the room, revealing yourself and what you\'ve been doing.');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', ((((s as any).pcs_mood ?? 0) > 50) ? (30) : (((((s as any).pcs_mood ?? 0) > 20) ? (20) : (0)))));
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning3.jpg');
    scene.text('A hot wave of shame sweeps over you and you try to leave the room. But you only get entangled in your clothes and fall down again hurting your knees. Your eyes tear up from the pain and shame. As you\'re sitting on the floor, awkwardly trying to straighten your clothes, you feel ashamed, and feel pain in your knees.');
    scene.actions([
      { label: 'Escape to your room', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/guestroom.jpg');
    scene.text('Having escaped from the room like a speeding bullet, you\'re now in "your" room. You slam the door shut, dive on your bed and cover your head with a blanket, curling up, feeling ashamed from the incident.');
    scene.text('Half an hour later you hear a gentle knock on the door and the soft voice of Tamara.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, dear, will you let me in if it's okay?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, dear, will you let me in if it's okay?"`);
    scene.text('You nod, realizing that since aunt Tamara is standing behind a closed door she can\'t seeing you nod.');
    scene.text('"Of course. I\'ll open the door…" You answer in a husky voice.');
    scene.text('Aunt Tamara is still wearing the same robe as before. You can\'t believe that her warm and endearing smile was completely different just a few minutes ago. Like a superior mistress.');
    scene.text('"P-Par-d-on me, please! I… I didn\'t know!…" You start sobbing again, covering your face in your hand, while trying to pull the blanket up over yourself again with your other hand.');
    scene.text('"Don\'t worry, sweetheart." Tamara tries calming you down. She sits down beside you on the bed. "Don\'t be embarrassed, girl! Nothing terrible happened. I was wondering when it would finally happen. Like I told you before, we have no secrets from each other. And I know that you really enjoyed yourself at the beach and the café."');
    scene.text('"You\'re a big girl, and I know that you\'re very curious. I have often noticed you peeping and masturbating. And the fact that you are hanging out with Vicky and Vanya, I know you\'re not only studying. I\'ve known this from the very beginning. I\'ve never heard the three of you scream that loudly while actually studying. Suddenly she laughs heartily, "Yes, I even heard you when it was just you and Vicky, when Vanya wasn\'t present."');
    scene.text('"Wipe your tears, girl, and come on down. You seem ready for this conversation."');
    scene.actions([
      { label: 'Go into the hall', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 35;
    qspCall(s, 'homes_properties', 'give_access', 'meynold_household');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning4.jpg');
    scene.text('You sniff and unassumingly, still wiping your wet eyes, you follow aunt Tamara, mentally preparing for the worst.');
    scene.text('As soon as you enter the room, Vicky stands up and hugs you. She makes you sit next to her.');
    scene.text('"I\'ve seen a lot and been through a lot in my life. And I don\'t want my children to go through the same mishaps as I did. Sex is an integral part of our lives and if you know how to properly make use of this knowledge, you will find many doors opening. There are many wrong choices you can make in life. And who would I be, if I didn\'t prepare my children for the adult life?"');
    scene.text('"You\'re the best, mother!" Says Vicky, still embracing you. "I love you very much!"');
    scene.text('"Yes, aunt Tamara!" Vanya agrees.');
    scene.text('He is certainly not ashamed about what they were doing.');
    scene.text('Tamara sighs…');
    scene.text('"If only I could make Katja understand…"');
    scene.text('"If you want, I can mentor you. Don\'t give up, dear. You have nothing to lose, but a lot to gain instead."');
    scene.text('Through the tears you smile at her. After all, she is a wonderful woman.');
    scene.text('"Do you think I have what it takes?"');
    scene.text('"Of course, with my help there shouldn\'t be any issues." Vanya has moved and is now sitting behind you and Vicky, hugging the both of you. "I myself didn\'t know what I should do with the embarrassment the first time when Vicky asked me to sleep with her mother. And look at us now. It\'s like nothing happened, I got much better at having sex and I\'m sure Vicky doesn\'t complain either."');
    scene.text('Hearing this, nothing will surprise you anymore.');
    scene.text('"I\'m glad she managed to help you." You kiss him on the cheek. The tears have dried up and you\'re not embarrassed anymore. Vicky also takes advantage of the situation and kisses both you and Vanya.');
    scene.text('"So what do you say, do you want me to be your mentor?" Tamara asks.');
    scene.text('You take some time to consider the offer.');
    scene.text('"Yes, I accept." You answer.');
    scene.text('Then you all sit together for a long time in the kitchen, drinking sweet tea, and talking until late at night.');
    scene.text('After a while Tamara speaks up…');
    scene.text('"If you are serious about wanting to learn, you should come here after school. The more time you spend with me the more progress you will make."');
    scene.text('"What about my parents? Won\'t they wonder why I\'m always here?" You ask Tamara.');
    // TODO-QSP: dynamic text: "I have a solution for that, I'll give you a job as an au pair. You will get a r...
    scene.text(`"I have a solution for that, I'll give you a job as an au pair. You will get a room here and we'll say you're helping around the house. Now let's talk about your pay, my first offer is ${qspFunc(s, 'money', 'string_profit', 10000)} a month, it might not sound like much, but you're still in school. We generally do everything ourselves around the house, so your "focus" will solely be on your studies. Well, if you want to help, we would appreciate it, but it's not necessary."`);
    scene.actions([
      { label: 'Go to your room', goto: ['mey_home', 'guest_bedroom'] },
    ]);
  } },
      { label: 'Cry from shame and resentment', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 35;
    qspCall(s, 'homes_properties', 'give_access', 'meynold_household');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning4.jpg');
    scene.text('As Tamara gets up you break out in tears again.');
    scene.text('"B-But… They\'ll be mad at me!…" You start sobbing again. "I can\'t face them after this."');
    scene.text('"Don\'t worry, sweetheart." Tamara says gently as she sits down again. "It\'s not like this is the first time you\'ve seen them enjoy themselves like that. I know my daughter. She\'s been teasing you for a while now, hasn\'t she? Don\'t think for a second that they mind."');
    scene.text('"I\'ve seen a lot and been through a lot in my life. And I don\'t want my children to go through the same mishaps as I did. Sex is an integral part of our lives and if you know how to properly make use of this knowledge, you will find many doors opening. There are many wrong choices you can make in life. And who would I be, if I didn\'t prepare my children for the adult life?"');
    // TODO-QSP: dynamic text: "Y-You teach them these things?" you ask. "My <<$npc_nickname['A29']>> would loc...
    scene.text(`"Y-You teach them these things?" you ask. "My ${((s as any).npc_nickname ?? 0)?.['A29']} would lock me in my room if she even thought I'd consider such things."`);
    scene.text('"Oh sweety, your mother isn\'t exactly making things easier on you by forcing you to find everything out on yourself. Things can be a lot easier when you have someone to teach you."');
    scene.text('Tamara Meynold sighs…');
    scene.text('"If only I could make Katja understand…"');
    scene.text('"If you want, I can mentor you. Don\'t give up, dear. You have nothing to lose, but a lot to gain instead."');
    scene.text('Through the tears you smile at her. After all, she is a wonderful woman.');
    scene.text('"Do you think I have what it takes?"');
    scene.text('"Of course, with my help there shouldn\'t be any issues." Hugging you. "I remember how embarrassment Vanya was the first time Vicky asked him to sleep with me. And look at them now. It\'s like nothing happened, he got much better at having sex and I\'m sure Vicky doesn\'t complain either."');
    scene.text('Hearing this, nothing will surprise you anymore.');
    scene.text('"I\'m glad you managed to help him." You rest your head on her shoulder. The tears have dried up and you\'re not embarrassed anymore. Tamara gently takes your face in her hands and kisses you on the forehead.');
    scene.text('"So what do you say, do you want me to be your mentor?" Tamara asks.');
    scene.text('You take some time to consider the offer.');
    scene.text('"Yes, I accept." You answer.');
    scene.text('She beams at you and hugs you again. The two of you remain sitting on your bed as you talk through some of the things she has to teach.');
    scene.text('After a while Tamara speaks up…');
    scene.text('"If you are serious about wanting to learn, you should come here after school. The more time you spend with me the more progress you will make."');
    scene.text('"What about my parents? Won\'t they wonder why I\'m always here?" You ask Tamara.');
    // TODO-QSP: dynamic text: "I have a solution for that, I'll give you a job as an au pair. You will get a r...
    scene.text(`"I have a solution for that, I'll give you a job as an au pair. You will get a room here and we'll say you're helping around the house. Now let's talk about your pay, my first offer is ${qspFunc(s, 'money', 'string_profit', 10000)} a month, it might not sound like much, but you're still in school. We generally do everything ourselves around the house, so your "focus" will solely be on your studies. Well, if you want to help, we would appreciate it, but it's not necessary."`);
    scene.actions([
      { label: 'Go to your room', goto: ['mey_home', 'guest_bedroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      ((s as any).mey_vika ?? {})['mey_vika_qw'] = (((s as any).mey_vika ?? {})['mey_vika_qw'] ?? 0) + (1);
      scene.actions([
        { label: 'Return to your room', goto: ['mey_home', 'guest_bedroom'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGym0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym0.jpg');
  scene.text('You are walking past Vicky\'s room. The door to the room is opened. You see Vicky warming up inside her room. Seeing you, she smiles…');
  scene.text('"I was just about to start. Come in, let\'s train together."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['gym_day'] = ((s as any).daystart ?? 0);
    scene.text('"I\'m sorry, Vicky. I just came back from a run."Sure, no problem…" Vicky replies irritated, slamming the door.');
    scene.actions([
      { label: 'Continue on', goto: ['mey_home', 'start'] },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Then get in here and stand right there."');
    scene.text('You get in front of Vicky. She turns the music on and the two of you begin working out.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym3.jpg');
    if (((s as any).pcs_danc ?? 0) > 50  ||  ((s as any).pcs_dancero ?? 0) > 50  ||  ((s as any).pcs_dancero ?? 0) > 50) {
      scene.text('At first you manage to keep up with Vicky, probably thanks to learning how to dance, but soon she starts bending in ways you just can\'t manage. She\'s flexible like a cat.');
    } else {
      scene.text('You try to keep up with Vicky, but she\'s flexible like a cat, and you are struggling as you are not as flexible.');
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym4.jpg');
    scene.text('She can\'t be serious. While doing the exercises Vicky tells you to make hilarious grimaces or stick out your tongue and make faces.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym5.jpg');
    scene.text('"I\'m not really dressed correctly, don\'t you agree?" Surprised, Vicky starts scratching her head. "I\'ll fix that right away."');
    scene.text('"I don\'t like to wear clothes!" She says while removing her t-shirt.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym6.jpg');
    scene.text('Standing there, without the t-shirt, Vicky suddenly starts jumping around.');
    scene.text('"Why are you jumping around?" You ask her taken aback a bit.');
    scene.text('"Look at my breast jiggling as I jump around." Says Vicky, turning her back to you.');
    scene.text('She bends over and pulls off her pants. Then she strips off her socks as well.');
    // TODO-QSP: dynamic text: "You should take your clothes off too, <<$pcs_nickname>>. You'll feel much more ...
    scene.text(`"You should take your clothes off too, ${((s as any).pcs_nickname ?? 0)}. You'll feel much more free!"`);
    scene.text('You too, strip and you start jumping, laughing together with Vicky.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym7.jpg');
    scene.text('You and Vicky are having lots of fun, she\'s showing off her flexibility as she warms up.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym8.jpg');
    scene.text('"There\'s enough room here, watch this!" She laughs while she does an amazing stretch, you feel a discomfort in your groin area just from watching…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym9.jpg');
    scene.text('Finally the main program is completed and you start doing some relaxation exercises.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).fat = ((s as any).fat ?? 0) - (10);
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (30);
    qspCall(s, 'exp_gain', 'react', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'sweat', 'add', 3);
    ((s as any).mey_vika ?? {})['gym_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym10.jpg');
    scene.text('Vicky makes you do a few yoga poses, as you\'re about to finish she says…');
    // TODO-QSP: dynamic text: "Time to hit the shower! Won't you join me, <<$pcs_nickname>>?"
    scene.text(`"Time to hit the shower! Won't you join me, ${((s as any).pcs_nickname ?? 0)}?"`);
    if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mey_vika ?? 0)?.['bath_qw'] === 1  &&  ((s as any).mey_vika ?? 0)?.['bath_qw_day'] !== ((s as any).daystart ?? 0)) {
    }
    scene.actions([
      { label: 'Take a shower by yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/characters/pavlovsk/school/girl/vicky/after_bath0.jpg');
    scene.text('It takes you about fifteen minutes to take a shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out', handler: (st: GameState) => {
    qspCall(st, 'mey_home', 'start');
  } },
    ]);
  } },
      { label: 'Leave the room', goto: ['mey_home', 'start'] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGym1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_vika_events" });
  if (((s as any).zz_stage ?? 0) < 1) {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym20.jpg');
    scene.text('Just as you\'re ready to leave. You hear Vicky\'s voice echoing somewhere in the house. While you are standing in the lobby, wondering where she is, Vicky appears standing on the stairs in a bikini.');
    scene.text('"Fuck! There is not one good spot for working out in this house!" She loudly expresses her dissatisfaction. "Fuck it! I\'ll do it here then!"');
    scene.text('She lifts up her leg on the railing and begins to stretch, not paying attention to anyone else. It\'s quite typical. If she\'s made up her mind about something it\'s impossible to argue with her. She won\'t listen to reason, so it\'s much easier to wait her out instead of trying to fight her. With this in mind, you quietly walk into the hall. Through the open door the stairs are perfectly visible. Vicky is on her hands and knees growling, doing stretching exercises, using the railing as gymnastic equipment.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    qspCall(st, 'mey_vika_events', 'gym1', 21);
  } },
    ]);
  } else {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym21.jpg');
    scene.text('She doesn\'t care if someone sees her or not.');
    scene.text('"When will the fucking Sports gymnastics federation allow us to compete naked!" You hear her mumble.');
    scene.text('"Always pussyfooting!" She grumbles.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym22.jpg');
    scene.text('"Fuck \'em!!!" Vicky shouts, jerking the ties of her bikini-bottom, throwing it away.');
    scene.text('You hear a sigh of relief…');
    scene.text('"Oh, the difference!"');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym23.jpg');
    scene.text('Shortly thereafter you notice her throwing away the top. She\'s completely naked. Vicky, now having calmed down a bit ceases swearing and begins exercising once again.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym24.jpg');
    scene.text('She stretches amazingly, very catlike. The way she bends is making you a bit envious.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym25.jpg');
    scene.text('Vicky throws a leg up on the railing, grabbing hold of it with her hands. She then proceeds bending the other leg far back, bowing deeply, her bare pussy shamelessly flashes the hall. ');
    scene.text('"That\'s right, gymnasts are not allowed to be naked!" You think to yourself, tightly clutching your knees, trying to stop a familiar itch that\'s happening in the crotch area.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'stat', '');
    ((s as any).mey_vika ?? {})['gym_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/gym26.jpg');
    scene.text('Vicky is almost done and is now finishing by doing some relaxation exercises. As soon as she\'s finished, she runs down, picks up her clothes, and quickly runs back to her room.');
    qspCall(s, 'arousal', 'voyeur', (-20), 'lesbian');
    scene.actions([
      { label: 'Well, that was interesting…', goto: ['mey_home', 'start'] },
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathQw0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/meynolds/vaccleaner.jpg');
  scene.text('Sighing, you begin looking where the cleaning supplies are stored in the Meynold residence.');
  scene.text('Everything that is need is found in a small closet next to the kitchen, a broom, a bucket, detergent and a floor scrubbing machine. All brand new, as if no one ever used it. All the supplies stand in a far corner, covered with dust.');
  scene.text('You grab the large floor scrubbing machine located right at the entrance. You drag it outside, quickly figuring out how to turn it on, pour water into the tank, splash some detergent in the compartment and begin to diligently scrub the floors.');
  scene.text('You sweat and pant by the time you\'re finished with the housework on the first floor. After dragging the machine up the stairs you continue on in the hallway. When you\'re done cleaning the second floor hall, you start dragging the heavy scrubbing machine back to the closet on the first floor. All of a sudden Vicky pops up from her room. She\'s dressed in shorts and a short top. Seeing you, she comes towards you and grabs the other handle of the machine, saying…');
  // TODO-QSP: dynamic text: "Let me help you out, <<$pcs_nickname>>! This fucking thing weighs like a fuckin...
  scene.text(`"Let me help you out, ${((s as any).pcs_nickname ?? 0)}! This fucking thing weighs like a fucking mammoth!"`);
  scene.text('The two of you easily drag the machine back to the kitchen and put it back in the closet.');
  scene.text('Vicky grabs her nose…');
  // TODO-QSP: dynamic text: "You smell really bad, <<$pcs_nickname>>! You need a bath, you smell like an ani...
  scene.text(`"You smell really bad, ${((s as any).pcs_nickname ?? 0)}! You need a bath, you smell like an animal at the zoo! Let me fix you a bath! Come on, the bathtub is already filling up." Vicky grabs your hand and starts pulling you along, not paying attention if you're having any objections.`);
  if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Take a bath', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['bath_qw'] = 1;
    ((s as any).mey_vika ?? {})['bath_qw_day'] = ((s as any).daystart ?? 0);
  }, goto: ['mey_vika_events', 'bath_common', '1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/meynolds/vaccleaner.jpg');
    scene.text('"No, Vicky, stop, I can\'t right now."<br>"Well, have it your way then!" says Vicky, wiggling her pear shaped butt, while walking back to her room.');
    scene.actions([
      { label: 'Return to the hall', goto: ['mey_home', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathQw1(s: GameState, scene: SceneBuilder): void {
  ((s as any).mey_vika ?? {})['bath_qw_day'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('Standing in the hallway in her shorts and a short top Vicky confronts you, pointing at the stairs.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! No excuses you're taking a bath now! Come with me!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}! No excuses you're taking a bath now! Come with me!"`);
  if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    scene.actions([
      { label: 'Take a bath', goto: ['mey_vika_events', 'bath_common', '1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('"No, Vicky, stop, I can\'t right now."<br>"Well, have it your way then!" says Vicky, wiggling her pear shaped butt, while walking back to her room.');
    scene.actions([
      { label: 'Go back to the hall', goto: ['mey_home', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBathCommon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A15');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw1.jpg');
  scene.text('The bathroom looks absolutely amazing. Half of the space is occupied by a corner bath and an enormous mirror hangs there.');
  scene.text('You and Vicky quickly take off all the clothes you\'re wearing and climb into the tub.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw3.jpg');
    scene.text('Vicky pours a great deal of shampoo in the water stirring lots of foam. She starts laughing as the foam expands.');
    scene.text('Raising a foam mountain, Vicky jumps in it, splashing water all over you. You sit on the edge of the bath. Vicky now standing up, grabs a handful of foam and begins to smear it all over your body.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the bath.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw4.jpg');
    scene.text('The teasing quickly turns into gentle caressing. Vicky leans into you and begins kissing you, playing with your tongue, biting your lower lip. Resisting her is futile. You don\'t mind as you want the same thing as her. Vicky is her usual self, very spontaneous, passionate and flirty, and you can\'t avoid getting excited by being with her.');
    qspCall(s, 'arousal', 'foreplay', Math.floor(Math.random() * 6) + 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw5.jpg');
    scene.text('Grabbing the showerhead, she washes off the foam, directing the water jets on your pussy making your body shiver.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw6.jpg');
    scene.text('Vicky lets go of the showerhead, teasing and playing with your pussy lips, running her fingers slowly up and down, carefully avoiding sliding them inside your pussy. She spreads your legs wider, leaning in, sucking on your clit. You purr like a cat when Vicky begins licking your pussy.');
    qspCall(s, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw7.jpg');
    scene.text('Vicky stops, stands up and reaches for something in the cabinet. You don\'t notice it at first but as she moves over to you once more you see she\'s holding a pink dildo. She slides down on her knees, and begins licking you again, inserting the dildo into your wide spread pussy. You let a loud sensual moan escape from your mouth and you begin helping her out by slowly moving up and down.');
    qspCall(s, 'arousal', 'vaginal_dildo', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw8.jpg');
    scene.text('Vicky makes you turn around and without any hesitation she shoves the dildo in your relaxed anus. The dildo slides right in, causing you a new wave of pleasure. As she pulls the dildo out she begins licking your ass while she\'s touching your pussy with her hand.');
    qspCall(s, 'arousal', 'anal_dildo', 5, 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw9.jpg');
    scene.text('Wanting to repay the favor, you sit before her, taking the initiative. Vicky begins to moan from the pleasure of the dildo. At the same time you gently caress her wet, red pubes. Vicky is not a fan of shaving her private area, claiming that when having a stub, the pussy area feels like sandpaper. But you know the truth, she\'s just too lazy to shave.');
    qspCall(s, 'arousal', 'vaginal_dildo_give', Math.floor(Math.random() * 6) + 5);
    scene.text('Rolling her eyes, Vicky begins to moan loudly, rubbing your clit as you\'re relentlessly thrusting the dildo inside of her. She finally explodes, shaking, almost raising a small tsunami, screaming as she orgasms. Her drained body falls into the water, half of water is already on the floor thanks to your little games.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/sex/bath_qw10.jpg');
    scene.text('Satisfied, you quickly rinse and get out of the bath.');
    scene.text('"That was amazing!" Vicky screams. "We\'ll definitely do this again!"');
    scene.actions([
      { label: 'Get out', goto: ['mey_home', 'start'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBangKatya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_vika_events" });
  if ((!((s as any).zz_stage ?? 0))) {
    scene.text('Later that evening you hear Vanya and Vicky conspiring about something.');
    // TODO-QSP: dynamic text: "Are you up for some fun, <<$pcs_nickname>>?" Asks Vicky.
    scene.text(`"Are you up for some fun, ${((s as any).pcs_nickname ?? 0)}?" Asks Vicky.`);
    scene.text('"Well, it all depends on what you have in mind…"');
    if (((s as any).katjaQW ?? 0)?.['Slut'] < 20) {
      scene.text('"We were thinking about playing a prank on my prude sister Katja!"');
    } else {
      scene.text('"We were thinking about playing a prank on my naughty sister Katja!"');
    }
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    scene.text('"I\'m sorry, but not today. I don\'t feel up for it today."');
    scene.text('"Don\'t worry! Next time then!" Vicky chuckles, grabbing Vanya by the pants, dragging him to the gym.');
    scene.actions([
      { label: 'Go to your room', goto: ['mey_home', 'guest_bedroom'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Oh, great! I\'m so glad you agree!!!" Vicky begins to talk enthusiastically, jumping around you like a goat, while holding your hands.');
    scene.text('Vanya grins too. They were clearly plotting some kind of prank, but knowing them, you are sure that it\'s going to be something harmless.');
    scene.actions([
      { label: 'Go to Katja\'s room', goto: ['mey_vika_events', 'bang_katya2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBangKatya2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You quietly sneak into Katja\'s room. Katja is deep asleep, wearing a short tank top and panties, you lightly move her over and remove the blanket.');
  scene.text('Vicky lays still next to her sister and winks at you. You gently lay down on the other side. Vicky starts gently kissing Katja\'s tummy and softly touches her legs. You seem to understand what the plan is and you gently bite Katja\'s nipple through the thin fabric.');
  scene.text('Katya smiles as if she\'s about to wake, but it\'s a false alarm. She is still sleeping deeply. You nod to Vicky, and begin being more active, caressing her a bit harder, but trying not to wake her. Katja soon begins moaning and sometimes even grimaces as she\'s clearly enjoying herself. She spreads her legs, not waking up, seemingly sensing what is happening as a pleasant, better yet, very pleasant, dream. You touch her crotch through her panties, and soon enough you feel them getting wet, Katja is really enjoying this!');
  scene.text('As you look up you see Vicky pulling up her sisters top, and begins playing with her breasts.');
  scene.text('You take Katya\'s panties off, she even helps you by lifting her ass. The most amazing part, she\'s still not waking up!');
  scene.text('There is no question about it, the "sleeping" Katja is clearly enjoying herself! Her pussy is fully opened and wet. You carefully touch Katja\'s clit with your fingers. Katja lets out a quiet moan, spreading even wider.');
  scene.text('Vanya is not taking any part in the teasing, limiting his role to an observer, stroking his cock, as he watches on.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/bang_katya4.jpg');
    scene.text('"I\'ll show you, sleepyhead!" you think to yourself, leaning into Katja\'s wide open, juicy pussy. You do your best licking her furiously. And despite all that she\'s still not waking up!');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/bang_katya5.jpg');
    scene.text('Katja is now panting hard and moans somewhat loudly. Vicky, turned on, moves in and begins passionately kissing her sister.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/bang_katya6.jpg');
    scene.text('Letting go of your hair, Katja hugs Vicky responding to the kiss, stroking her sister\'s back. She bends her knees, giving you maximum access to her pussy, already edging, loudly moaning.');
    scene.text('You gesture toward Vanya. He has been ready for a long time, standing there "with his sword". Vanya moves in between Katya\'s widely spread legs, not feeling rushed at all.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/bang_katya7.jpg');
    scene.text('You grab his cock and stroke his head up and down Katja\'s pussy, which is now dripping wet.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 15);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 10);
    ((s as any).mey_vika ?? {})['mey_vika_bang_qw'] = 1;
    ((s as any).katjaQW ?? {})['horny'] = 0;
    ((s as any).Katjastat ?? {})['vaginal'] = (((s as any).Katjastat ?? {})['vaginal'] ?? 0) + (1);
    if (((s as any).katjaQW ?? 0)?.['slut'] < 20) {
      ((s as any).katjaQW ?? {})['slut'] = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/sex/home/bang_katya8.jpg');
    scene.text('Katja, all of a suddenly rolls on her side, turning her back on Vanya and without any hesitation he enters her to his full length and begins moving in and out her wet pussy. Not to interfere with Vanya, you move over to the side and begin caressing her clit with your tongue, while Vanya\'s cock is moving slowly in front of your face. Katja, clinging to her sister, kisses her passionately, breathing heavily, panting, moves around so you can taste the wonderful juices off Vanya\'s cock with your tongue.');
    scene.text('Finally Katja screams loudly, exploding, locking her whole body as she\'s convulsing, Vanya barely has time to pull out of her, groans, and cums all over the bed and falls back exhausted.');
    scene.text('Katja wakes up and looks around shocked.');
    scene.text('"What… What… are you doing… So it wasn\'t a dream?"');
    if (((s as any).katjaQW ?? 0)?.['Slut'] < 20) {
      scene.text('"I hate you, you fucking bitch! Get the fuck out!" Katja yells. "How could you? I know it was your idea, bitch!" She yells, frantically trying to cover herself with the blanket.');
      scene.text('"Don\'t lie, I know you liked it!" Vicky wisely jumps off the bed, away from her sister as she\'s throwing a tantrum. You and Vanya also move away not wanting to get caught in the crossfire.');
      scene.text('"Get out! So I don\'t have to watch your pathetic little face!" Katja growls furiously.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['Slut'] < 40) {
        scene.text('Kate hesitate and blushes, trying to cover her face with the blanket.');
        scene.text('"To be honest… it was the best sleep I\'ve ever had in my life…"');
        scene.text('Vicky doesn\'t even bat an eye. This girl doesn\'t know what shame is, there is no way to embarrass her.');
        // TODO-QSP: dynamic text: "What are you worrying about? We're at home! And the only ones knowing about it ...
        scene.text(`"What are you worrying about? We're at home! And the only ones knowing about it is us! You don't have to worry about ${((s as any).pcs_nickname ?? 0)} or Vanya saying anything I got them wrapped around my finger. And don't be such a prude. They did a damn good job at pleasing you and you still complain."`);
      } else {
        scene.text('Katja blushes even more, although you think it\'s impossible, she turns even more red just like a strawberry.');
        scene.text('She licks her lips.');
        scene.text('"Honestly… It was way better than any fantasy I ever dreamt about."');
        scene.text('Vicky enthusiastically rushes towards her sister, happily hugs her, saying…');
        scene.text('"I knew that you\'d enjoy it! I love you sis!"');
        scene.text('Katja smiles and gently hugs Vicky.');
        scene.text('"I love you too, my dear sister."');
      }
    }
    scene.actions([
      { label: 'Return to your room', goto: ['mey_home', 'guest_bedroom'] },
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
    case 'play_game_wish2':
      enterPlayGameWish2(s, scene);
      break;
    case 'play_game_wish3':
      enterPlayGameWish3(s, scene);
      break;
    case 'play_game_sub':
      enterPlayGameSub(s, scene);
      break;
    case 'near_school':
      enterNearSchool(s, scene);
      break;
    case 'beach_stalk':
      enterBeachStalk(s, scene);
      break;
    case 'park_meet':
      enterParkMeet(s, scene);
      break;
    case 'park_meet_ev':
      enterParkMeetEv(s, scene);
      break;
    case 'cafe_qw':
      enterCafeQw(s, scene);
      break;
    case 'cafe_repeat_qw':
      enterCafeRepeatQw(s, scene);
      break;
    case 'park_qw':
      enterParkQw(s, scene);
      break;
    case 'sauna_event':
      enterSaunaEvent(s, scene);
      break;
    case 'beach_event0':
      enterBeachEvent0(s, scene);
      break;
    case 'beach_ender':
      enterBeachEnder(s, scene);
      break;
    case 'beach_event1':
      enterBeachEvent1(s, scene);
      break;
    case 'case_gift':
      enterCaseGift(s, scene);
      break;
    case 'case_gift_ender':
      enterCaseGiftEnder(s, scene);
      break;
    case 'learning0':
      enterLearning0(s, scene);
      break;
    case 'gym0':
      enterGym0(s, scene);
      break;
    case 'gym1':
      enterGym1(s, scene);
      break;
    case 'bath_qw0':
      enterBathQw0(s, scene);
      break;
    case 'bath_qw1':
      enterBathQw1(s, scene);
      break;
    case 'bath_common':
      enterBathCommon(s, scene);
      break;
    case 'bang_katya':
      enterBangKatya(s, scene);
      break;
    case 'bang_katya2':
      enterBangKatya2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mey_vika_events: LocationDef = {
  name: 'mey_vika_events',
  title: 'Vicky\'s room',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
