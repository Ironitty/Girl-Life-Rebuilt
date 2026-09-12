import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBoyTopics(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['what_do_you_like_talk'] === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'what_do_you_like_talk'"
  }
  if (((((s as any).npc_conversations ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'video_games_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['whats_your_type_talk'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'whats_your_type_talk'"
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_length');
  if (((s as any).date_ev ?? 0)?.['love_hair_talk'] === 0  &&  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'love_hair_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['washing_hands_talk'] === 0  &&  ((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'washing_hands_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['flashing_jogger'] === 0  &&  (((s as any).npc_build_desc ?? 0)?.[String((s as any).npcID ?? 0)] === 'athletic'  ||  ((s as any).npc_build_desc ?? 0)?.[String((s as any).npcID ?? 0)] === 'thin'  ||  ((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'flashing_jogger'"
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhatDoYouLikeTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['what_do_you_like_talk'] = 1;
  // TODO-QSP: dynamic text: "What do you like to do?" <<$npcdesc>> asks.
  scene.text(`"What do you like to do?" ${((s as any).npcdesc ?? 0)} asks.`);
  qspCall(s, 'date_boy_talk', 'what_do_you_like_menu');
  // TODO-QSP: end
  scene.build();
}

function enterWhatDoYouLikeMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Studying', handler: (st: GameState) => {
    scene.text('"I spend a lot of time studying."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Oh yeah?" He seems surprised and interested. "What are you studying?"');
      scene.actions([
        { label: 'Getting into uni', handler: (st: GameState) => {
    if (((s as any).class ?? 0)?.['school_grade_average'] <= 20) {
      // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades are ...
      scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades are awful right now. I have to make a complete turnaround if I even want a <i>chance</i> at getting into uni!"`);
    } else {
      if (((s as any).class ?? 0)?.['school_grade_average'] <= 40) {
        // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades are ...
        scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades are awful right now. I have a long way to go if I want to actually get into uni."`);
      } else {
        if (((s as any).class ?? 0)?.['school_grade_average'] <= 60) {
          // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades aren...
          scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades aren't bad, but they're nothing special. I have a long way to go if I want to actually get into uni."`);
        } else {
          if (((s as any).class ?? 0)?.['school_grade_average'] <= 80) {
            // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "I'm just tryin...
            scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "I'm just trying to get into uni."`);
          } else {
            // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "I'm just tryin...
            scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "I'm just trying to get into uni."`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"You really spend your free time studying? That\'s kinda dorky, don\'t you think?" he says, quirking an eyebrow at you.');
      scene.actions([
        { label: 'Blush', handler: (st: GameState) => {
    scene.text('Your face grows hot with embarrassment.');
    scene.text('"I guess..."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
        { label: 'You like learning', handler: (st: GameState) => {
    scene.text('"I just like learning, I guess," you shrug. "I know it sounds counter intuitive, but it\'s fun to be the best at something, even if it\'s just studying."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
        { label: 'Uni is really important', handler: (st: GameState) => {
    scene.text('"I really want to get into uni," you tell him. "It\'s hard for me to concentrate on having fun doing other things when I have such important bars to meet for my future."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterVideoGamesTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['video_games_talk'] = 1;
  qspCall(s, 'date_talk', 'talk_img');
  // TODO-QSP: dynamic text: "Do you play video games?" <<$npcdesc>> asks.
  scene.text(`"Do you play video games?" ${((s as any).npcdesc ?? 0)} asks.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I love video games!', goto: ['date_boy_talk', 'video_games_love'] },
  ]);
  scene.build();
}

function enterVideoGamesLove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_talk', 'talk_img');
  scene.text('"I love video games!" you smile.');
  if (((((s as any).npc_hobbies ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 > 0) {
    scene.text('"Yeah?" He perks up, grinning back. "What do you play?"');
  } else {
    scene.text('"Oh, that\'s cool. What do you play?"');
  }
  qspCall(s, 'date_boy_talk', 'video_game_menu');
  // TODO-QSP: end
  scene.build();
}

function enterVideoGameMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '"Casual" games', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_talk', 'video_game_menu');
  } },
      { label: 'Candy Crunch', handler: (st: GameState) => {
    scene.text('"I\'m always playing that candy game on my phone. It\'s so addicting, I can\'t put it down!"');
    if (((s as any).npc_snob ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((((s as any).npc_hobbies ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 > 0) {
      scene.actions([{ label: 'Continue', goto: ['date_boy_talk', 'video_games_talk', '\'mobile_game\''] }]);
    } else {
      scene.text('"Oh, that\'s cool I guess."');
      scene.actions([
        { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
      ]);
    }
  } },
      { label: 'Call of Booty', handler: (st: GameState) => {
    scene.text('"I really like playing Call of Booty! Especially because of those sexy skins that come in the loot boxes."');
    if (((s as any).npc_snob ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((((s as any).npc_hobbies ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 > 0) {
      scene.actions([{ label: 'Continue', goto: ['date_boy_talk', 'video_games_talk'] }]);
    } else {
      scene.text('"Oh, that\'s cool I guess."');
      scene.actions([
        { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
      ]);
    }
  } },
      { label: 'FUFU (the football game)', handler: (st: GameState) => {
    scene.text('"I really like playing FUFU! All the fun of football without any of the sweating."');
    if (((s as any).npc_snob ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((((s as any).npc_hobbies ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 > 0) {
      scene.actions([{ label: 'Continue', goto: ['date_boy_talk', 'video_games_talk'] }]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        scene.text('"Nothing like kicking balls around for 90 minutes, huh?" he snickers.');
      } else {
        scene.text('"Oh, that\'s cool I guess."');
        scene.actions([
          { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
        ]);
      }
    }
  } },
    ]);
  } },
    { label: 'Competitive games', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_talk', 'video_game_menu');
  } },
      { label: 'Cunter-Strike', handler: (st: GameState) => {
    scene.text('"I play a lot of Cunter-Strike. I had to spend a lot of time to learn all the spray patters of the guns!"');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'Lewdy Legends', handler: (st: GameState) => {
    scene.text('"I play a lot of Lewdy Legends. Ranked ladder climbing can be so rage inducing!"');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'Tekken', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['gamebet'] === 1) {
      scene.text('"I like fighting games. One of my favorite ones right now is Tekken. I play it all the time with my friend and we-" You suddenly cut off, realizing Albina might not like you sharing the fact that you play the game and make bets to fuck each other with strap-ons. "We uhh, we play it a lot together."');
    } else {
      scene.text('"I like fighting games. One of my favorite ones right now is Tekken."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
    ]);
  } },
    { label: '"Hardcore" games', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_talk', 'video_game_menu');
  } },
      { label: 'Cunt Souls', handler: (st: GameState) => {
    scene.text('"I like playing hard and difficult games. Cunt Souls is one of my favorites right now."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"I got something hard down here for you," he snickers.');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVideoGameSnob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
  if (((s as any).locArgs?.[1] ?? 0) === 'mobile_game') {
    // TODO-QSP: dynamic text: "Oh." <<$npcdesc>>'s grin turns to a sneer. "I thought you played <i>real</i> ga...
    scene.text(`"Oh." ${((s as any).npcdesc ?? 0)}'s grin turns to a sneer. "I thought you played <i>real</i> games, not that mobile phone junk."`);
  } else {
    // TODO-QSP: dynamic text: "Oh." <<$npcdesc>>'s grin turns to a sneer. "I thought you played <i>real</i> ga...
    scene.text(`"Oh." ${((s as any).npcdesc ?? 0)}'s grin turns to a sneer. "I thought you played <i>real</i> games, not that junk."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Feel hurt', handler: (st: GameState) => {
    qspCall(s, 'date_talk', 'loc_img');
    // TODO-QSP: dynamic text: You wilt under the barrage of <<$npcdesc>>'s harsh words, your feelings more tha...
    scene.text(`You wilt under the barrage of ${((s as any).npcdesc ?? 0)}'s harsh words, your feelings more than just a little hurt.`);
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhatsYourTypeTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['whats_your_type_talk'] = 1;
  qspCall(s, 'date_talk', 'talk_img');
  if (((((s as any).npc_conversations ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';type_talk;'))) + 1 === 0) {
    // TODO-QSP: $npc_conversations[$npcID] += ';type_talk;'
    // TODO-QSP: dynamic text: "So, I was wondering, what's your type?" <<$npcdesc>> asks.
    scene.text(`"So, I was wondering, what's your type?" ${((s as any).npcdesc ?? 0)} asks.`);
  } else {
    // TODO-QSP: dynamic text: "You told me about some of the things you like in a guy before," <<$npcdesc>> sa...
    scene.text(`"You told me about some of the things you like in a guy before," ${((s as any).npcdesc ?? 0)} says. "Anything else I should know?"`);
  }
  qspCall(s, 'date_boy_talk', 'whats_your_type_menu');
  // TODO-QSP: end
  scene.build();
}

function enterWhatsYourTypeMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Never thought about it', handler: (st: GameState) => {
    if (((((s as any).npc_conversations ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';type_talk;'))) + 1 === 0) {
      scene.text('"My type?" The question startles you. "Uhmm... I don\'t know? I guess I never really thought about it before."');
    } else {
      scene.text('"Uhmm... I don\'t know? I guess I still haven\'t given it much thought."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
    { label: 'Body type', handler: (st: GameState) => {
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_boy_talk', 'whats_your_type_menu');
  } },
      { label: 'Skinny', handler: (st: GameState) => {
    scene.text('"I kinda like skinny guys," you tell him. "Not a lot of meat on their bones."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLoveHairTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['love_hair_talk'] = 1;
  qspCall(s, 'date_talk', 'talk_img');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_veryshort') {
    // TODO-QSP: dynamic text: "I love your hair," <<$npcdesc>> says. "Not many girls like to go so close cropp...
    scene.text(`"I love your hair," ${((s as any).npcdesc ?? 0)} says. "Not many girls like to go so close cropped, but you pull it off so well."`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_short') {
      // TODO-QSP: dynamic text: "Your hair is great," <<$npcdesc>> says. "I love a girl with a pixie cut."
      scene.text(`"Your hair is great," ${((s as any).npcdesc ?? 0)} says. "I love a girl with a pixie cut."`);
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_chin') {
        // TODO-QSP: dynamic text: "I love your hair," <<$npcdesc>> says. "The way it frames your face is perfect."
        scene.text(`"I love your hair," ${((s as any).npcdesc ?? 0)} says. "The way it frames your face is perfect."`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_shoulder') {
          // TODO-QSP: dynamic text: "I love your hair," <<$npcdesc>> says. "The way it just drapes over your shoulde...
          scene.text(`"I love your hair," ${((s as any).npcdesc ?? 0)} says. "The way it just drapes over your shoulders is perfect."`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_bra') {
            // TODO-QSP: dynamic text: "I love your hair," <<$npcdesc>> says. "Long hair like yours is so beautiful."
            scene.text(`"I love your hair," ${((s as any).npcdesc ?? 0)} says. "Long hair like yours is so beautiful."`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] === 'hair_length_long') {
              // TODO-QSP: dynamic text: "I love your hair," <<$npcdesc>> says. "Long hair like yours is so beautiful."
              scene.text(`"I love your hair," ${((s as any).npcdesc ?? 0)} says. "Long hair like yours is so beautiful."`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    scene.text('"Thanks," you smile back. "It\'s always nice to be told you\'re beautiful."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
    { label: 'Get embarrassed', handler: (st: GameState) => {
    scene.text('"Stop it!" you blush.');
    scene.text('"I mean it! Whatever barber you\'re seeing, keep seeing him."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWashingHandsTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_talk', 'talk_img');
  ((s as any).date_ev ?? {})['washing_hands_talk'] = 1;
  // TODO-QSP: dynamic text: <<$npcdesc>> takes a moment to use the restroom.
  scene.text(`${((s as any).npcdesc ?? 0)} takes a moment to use the restroom.`);
  scene.text('When he gets back, he says, "Man, don\'t you just hate it when you\'re about to leave the bathroom and somebody comes in so you have to actually wash your hands?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Quiet disgust', handler: (st: GameState) => {
    scene.text('"Uhm, yeah..." you reply stiffly, trying not to let your disgust show on your face.');
    scene.text('<i>He only washes his hands when somebody is watching?</i> you think. <i>Gross!</i>');
  }, goto: ['date_talk', 'date_continue'] },
    { label: 'Laugh in agreement', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"Yeah!" you laugh. "It\'s the worst!"');
  }, goto: ['date_talk', 'date_continue'] },
    { label: 'Visible disgust', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"You only wash your hands when somebody is watching?!" you say.');
    scene.text('"I mean, it\'s not like I actually touch anything when I take a piss."');
    scene.text('"That\'s fucking gross." Your brow wrinkles in disgust.');
  }, goto: ['date_talk', 'date_continue'] },
  ]);
  scene.build();
}

function enterFlashingJogger(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev ?? {})['flashing_jogger'] = 1;
  qspCall(s, 'date_talk', 'talk_img');
  // TODO-QSP: dynamic text: As you talk, you end up getting to the topic of exercise and <<$npcdesc>> starts...
  scene.text(`As you talk, you end up getting to the topic of exercise and ${((s as any).npcdesc ?? 0)} starts telling stories.`);
  scene.text('"Sometimes I like to take a jog through the park and half the time some girl will flash her tits at me! Isn\'t that crazy?"');
  if (((s as any).npc_hotcat ?? 0)?.[String((s as any).npcID ?? 0)] >= 9) {
    scene.actions([
      { label: 'It\'s cause he\'s hot', handler: (st: GameState) => {
    scene.text('"Not as crazy as you think," you smirk. "You\'re pretty hot after all."');
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "You think so?" <<$npcdesc>> seems genuinely surprised.
      scene.text(`"You think so?" ${((s as any).npcdesc ?? 0)} seems genuinely surprised.`);
      scene.text('"Yeah! You may not realize it, but you\'re drop dead gorgeous. A girl will do a lot to grab the attention of a guy like you."');
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('He seems pleased and takes the compliment with a blush.');
        scene.actions([
          { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
        ]);
      } else {
        scene.text('"So are you saying you\'d flash me?" he asks, almost hesitantly.');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.text('"No!" You laugh. "I\'m not that kind of girl."');
    // TODO-QSP: dynamic text: "Oh." <<$npcdesc>> seems kind of deflated after that...
    scene.text(`"Oh." ${((s as any).npcdesc ?? 0)} seems kind of deflated after that...`);
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
          { label: 'Definitely', handler: (st: GameState) => {
    scene.text('"Definitely." You grin at him. "Someone as hot as you can see my tits any time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> grins back at that. Though he does blush too.
    scene.text(`${((s as any).npcdesc ?? 0)} grins back at that. Though he does blush too.`);
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
          { label: 'Flash him now', handler: (st: GameState) => {
    qspCall(s, 'date_talk', 'flash_mov');
    scene.text('"Definitely. In fact-"');
    if ((!((s as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s jaw drops as you pull your top up and flash him your <<$pcdesc_br...
      scene.text(`${((s as any).npcdesc ?? 0)}'s jaw drops as you pull your top up and flash him your ${((s as any).pcdesc_breasts ?? 0)} breasts with a big grin on your face.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s jaw drops as you pull down your dress and flash him your <<$pcdes...
      scene.text(`${((s as any).npcdesc ?? 0)}'s jaw drops as you pull down your dress and flash him your ${((s as any).pcdesc_breasts ?? 0)} breasts with a big grin on your face.`);
    }
    scene.text('"See? You\'re so hot a girl can\'t help herself."');
    scene.text('He has trouble keeping eye contact after that.');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"So are you saying you\'d flash me?" he grins.');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.text('"No!" You laugh. "I\'m not that kind of girl."');
    scene.text('"So maybe not as effective a reason as you thought."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
        { label: 'Definitely', handler: (st: GameState) => {
    scene.text('"Definitely." You grin back at him. "Someone as hot as you can see my tits any time."');
    scene.text('"Well that explains everything then."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
        { label: 'Flash him now', handler: (st: GameState) => {
    qspCall(s, 'date_talk', 'flash_mov');
    scene.text('"Definitely. In fact-"');
    if ((!((s as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s eyes light up as you pull your top up and flash him your <<$pcdes...
      scene.text(`${((s as any).npcdesc ?? 0)}'s eyes light up as you pull your top up and flash him your ${((s as any).pcdesc_breasts ?? 0)} breasts with a big grin on your face.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s eyes light up as you pull down your dress and flash him your <<$p...
      scene.text(`${((s as any).npcdesc ?? 0)}'s eyes light up as you pull down your dress and flash him your ${((s as any).pcdesc_breasts ?? 0)} breasts with a big grin on your face.`);
    }
    scene.text('"See? You\'re so hot a girl can\'t help herself."');
    scene.text('He has trouble keeping eye contact after that.');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['park_flash'] > 0) {
    scene.actions([
      { label: 'Wonder if it was me', handler: (st: GameState) => {
    scene.text('"Yeah?" you grin. "Wonder if I\'ve been one of those flashing girls."');
    scene.text('"Seriously? You do that?"');
    scene.actions([
      { label: 'Once or twice', handler: (st: GameState) => {
    scene.text('"Only once or twice," you snigger. "I was feeling wild and daring."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
      { label: 'Sometimes', handler: (st: GameState) => {
    scene.text('"Sometimes," you admit. "Depends on if I\'m in the mood or not."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"That\'s hot," he grins.');
    } else {
      scene.text('"Well, if it was you, I don\'t remember," he grins. "To be honest, I\'m not really looking her face when that happens."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
      { label: 'All the time', handler: (st: GameState) => {
    scene.text('"All the time," you grin. "It\'s my favorite part of taking a jog."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"That\'s hot," he grins.');
    } else {
      scene.text('"Well, if it was you, I don\'t remember," he grins. "To be honest, I\'m not really looking her face when that happens."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'ll try not to get jealous', handler: (st: GameState) => {
    scene.text('"I\'ll try not to get jealous," you snicker back at him.');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
      scene.text('"Well, you could always flash me yourself to keep my interest up."');
      if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.actions([
          { label: 'You\'ll use sex instead', handler: (st: GameState) => {
    scene.text('"I don\'t think there\'s a need for that." You grin at him. "Not as long as I keep fucking you."');
    scene.text('"That\'s a good plan," he grins back.');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'You\'ll keep it in mind', handler: (st: GameState) => {
    scene.text('"I\'ll keep that in mind if it looks like you\'re losing focus."');
    scene.text('"Oh no! My vision! It\'s blurring!"');
    scene.text('You both laugh at that.');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 80) {
        scene.text('"You\'ve got nothing to be jealous of."');
        // TODO-QSP: dynamic text: <<$npcdesc>> smiles warmly at you and takes your hand.
        scene.text(`${((s as any).npcdesc ?? 0)} smiles warmly at you and takes your hand.`);
        scene.actions([
          { label: 'Continue', goto: ['date_talk', 'continue_rate', '\'improve\''] },
        ]);
      } else {
        if (((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"I doubt that," he snickers back. "If there\'s such a thing as a woman who doesn\'t get jealous, I\'ve yet to meet her."');
          scene.actions([
            { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
          ]);
        } else {
          scene.text('"Don\'t worry about it," he says flip-ly. "It was just a story."');
          scene.actions([
            { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
          ]);
        }
      }
    }
  } },
    { label: 'That <i>is</i> crazy!', handler: (st: GameState) => {
    scene.text('You can\'t help but gasp and gape.');
    scene.text('"Woah seriously? That <i>is</i> crazy!"');
    if (((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Girls are sluts, what are you gonna do?" he grins.');
    } else {
      scene.text('"I know right?"');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'boy_topics':
      enterBoyTopics(s, scene);
      break;
    case 'what_do_you_like_talk':
      enterWhatDoYouLikeTalk(s, scene);
      break;
    case 'what_do_you_like_menu':
      enterWhatDoYouLikeMenu(s, scene);
      break;
    case 'video_games_talk':
      enterVideoGamesTalk(s, scene);
      break;
    case 'video_games_love':
      enterVideoGamesLove(s, scene);
      break;
    case 'video_game_menu':
      enterVideoGameMenu(s, scene);
      break;
    case 'video_game_snob':
      enterVideoGameSnob(s, scene);
      break;
    case 'whats_your_type_talk':
      enterWhatsYourTypeTalk(s, scene);
      break;
    case 'whats_your_type_menu':
      enterWhatsYourTypeMenu(s, scene);
      break;
    case 'love_hair_talk':
      enterLoveHairTalk(s, scene);
      break;
    case 'washing_hands_talk':
      enterWashingHandsTalk(s, scene);
      break;
    case 'flashing_jogger':
      enterFlashingJogger(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_boy_talk: LocationDef = {
  name: 'date_boy_talk',
  title: '"I love video games!" you smile.',
  region: 'other',
  enter: enter,
};
