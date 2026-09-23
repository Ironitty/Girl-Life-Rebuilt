import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterContinueRate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (5);
  if (String((s as any).locArgs?.[1] ?? '') === 'improve'  ||  String((s as any).locArgs?.[1] ?? '') === 'worsen') {
    qspCall(s, 'date_funcs', 'date_mood', ((s as any).locArgs?.[1] ?? 0));
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'flash') {
    dynamicGoto(s, (((s as any).date_ev ?? {}))['cont_loc'], (((s as any).date_ev ?? {}))['flash_arg']);
  } else {
    dynamicGoto(s, (((s as any).date_ev ?? {}))['cont_loc'], (((s as any).date_ev ?? {}))['cont_arg']);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLocImg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $date_ev['loc'], $date_ev['loc_img']
  // TODO-QSP: end
  scene.build();
}

function enterTalkImg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $date_ev['loc'], $date_ev['talk_img']
  // TODO-QSP: end
  scene.build();
}

function enterDateContinue(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, (((st as any).date_ev ?? {})['cont_loc']), (((st as any).date_ev ?? {})['cont_arg']));
  } },
  ]);
  scene.build();
}

function enterPrevMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', $date_ev['prev_arg']
  } },
  ]);
  scene.build();
}

function enterTalkMenu(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['prev_arg'] = 'talk_menu';
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.actions([
      { label: 'Make small talk', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'small_talk'
  } },
      { label: 'Talk about sex', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'sex_talk_menu1'
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'rand_topic'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandTopic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_boy_talk', 'boy_topics');
  if (((s as any).date_ev ?? 0)?.['fun_talk'] === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_talk', 'fun_talk'"
  }
  if (Object.keys((s as any).date_ev_topics ?? {}).length === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateContinue(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrevMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).date_ev ?? 0)?.['first_time'] === 1  &&  ((s as any).date_ev ?? 0)?.['type'] === 'casual_meal'  &&  ((s as any).date_ev ?? 0)?.['been_before'] === 0) {
    scene.actions([
      { label: 'Been here before?', goto: ['date_talk', 'been_before'] },
    ]);
  }
  if (((s as any).npc_home_visited ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([
        { label: 'His home is very tidy', goto: ['date_talk', 'tidy_home'] },
      ]);
    }
  }
  if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).date_ev ?? 0)?.['braless_tell'] === 0) {
    scene.actions([
      { label: '"I\'m not wearing a bra"', goto: ['date_talk', 'braless_tell'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about the weekend', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'weekend_talk'
  } },
    { label: '"What do you do for fun?"', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'fun_talk'
  } },
  ]);
  scene.build();
}

function enterWeekendTalk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).week ?? 0) >= 6) {
    scene.text('"So, how\'s your weekend going?" you ask.');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).npc_chrsm ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"Better now that I\'m with you," he says, looking into your eyes.');
      scene.actions([
        { label: 'Impressed', handler: (st: GameState) => {
    scene.text('You blink, unable to contain your surprise.');
    scene.text('<i>Wow, that was smooth...</i>');
    scene.text('You\'re impressed and he can see it.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
        { label: '"Nice line"', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"Nice line," you snicker.');
    scene.text('"Is it working?" he smiles back.');
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe."');
    scene.text('You decide to play coy. Keep some air of feminine mystique.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you admit. "I think it is."');
    scene.text('He grins back at you and ');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"It\'s been fine," he says, shrugging. "The usual stuff."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
      ]);
    }
  } else {
    scene.text('"So, how was your weekend?" you ask.');
    scene.text('"It was fine," he says, shrugging. "The usual stuff."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTidyHome(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).date_ev ?? 0)?.['home_date'] === 1) {
    scene.text('"Your place is really well kept, you know that?"');
    // TODO-QSP: dynamic text: Looking around, everything is very neat and orderly. Little, if any dust is on t...
    scene.text(`Looking around, everything is very neat and orderly. Little, if any dust is on the floor or the surfaces, and all of ${((s as any).npcdesc ?? '')}'s belongings are tidy and placed with care.`);
  } else {
    scene.text('"I couldn\'t help but notice, your place is really well kept," you remark. "Really well organized and clean. Not a speck of dust anywhere."');
  }
  if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "What are you trying to say about me?" <<$npcdesc>> frowns.
    scene.text(`"What are you trying to say about me?" ${((s as any).npcdesc ?? '')} frowns.`);
  } else {
    if (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"A clean environment helps foster a clean mind," he shrugs. "It bothers me to see things out of order."');
      scene.actions([
        { label: 'You like it', goto: ['placeholder', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I think I just like vacuuming," he chuckles. "I like the sound it makes, the li...
      scene.text(`"I think I just like vacuuming," he chuckles. "I like the sound it makes, the little scratching noises of all the things getting picked up into the bag. And then the rest comes because I need everything else to be tidy to fit the vacuum head in!" ${((s as any).npcdesc ?? '')} finishes, laughing openly.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBralessTell(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['braless_tell'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: "Hey, wanna hear a secret?" you ask <<$npcdesc>>.
  scene.text(`"Hey, wanna hear a secret?" you ask ${((s as any).npcdesc ?? '')}.`);
  scene.text('"What?"');
  scene.text('You lean to whisper in his ear. "I\'m not wearing a bra right now."');
  if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"Yeah?" He looks at you again, gaze dropping down towards your chest. "Prove it."');
    scene.actions([
      { label: 'Nope', handler: (st: GameState) => {
    if (((st as any).PCloThinness ?? 0) === 6) {
      // TODO-QSP: dynamic text: "What''s to prove?" you grin, knowing your top is already completely transparent...
      scene.text(`"What's to prove?" you grin, knowing your top is already completely transparent and your ${((st as any).pcdesc_breasts ?? '')} breasts are already on display for all to see.`);
      scene.text('"Maybe I just want a better view."');
      scene.text('"I think you\'ve already got a spectacular one."');
    } else {
      if (((st as any).PCloThinness ?? 0) >= 4) {
        scene.text('"I think you can tell without further proof," you smirk, letting the outline of your nipples poke through the fabric of your top on their own.');
      } else {
        scene.text('"Sorry, you\'ll just have to dream on it," you smirk.');
        scene.text('"Tease."');
        scene.text('"Guilty."');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'Flash him', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    scene.text('"Sure."');
    if ((!((st as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: Without hesitation, you pull up your top giving <<$npcdesc>> an unobstructed loo...
      scene.text(`Without hesitation, you pull up your top giving ${((st as any).npcdesc ?? '')} an unobstructed look at ${((st as any).pcdesc_breasts ?? '')} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your top back down.`);
    } else {
      // TODO-QSP: dynamic text: Without hesitation, you pull your dress down giving <<$npcdesc>> an unobstructed...
      scene.text(`Without hesitation, you pull your dress down giving ${((st as any).npcdesc ?? '')} an unobstructed look at ${((st as any).pcdesc_breasts ?? '')} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your clothes back into place.`);
    }
    scene.text('"See? No bra."');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>> is grinning now. "I think I saw that really well."
    scene.text(`"Yeah..." ${((st as any).npcdesc ?? '')} is grinning now. "I think I saw that really well."`);
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', 'improve'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "You know just what to say to excited a guy." <<$npcdesc>> grins at you, unable ...
      scene.text(`"You know just what to say to excited a guy." ${((s as any).npcdesc ?? '')} grins at you, unable to help but take glances at your chest with the knowledge that there's one less layer between it and him.`);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        // TODO-QSP: dynamic text: "Woah... That''s so hot." <<$npcdesc>> is staring at your chest now, as if he is...
        scene.text(`"Woah... That's so hot." ${((s as any).npcdesc ?? '')} is staring at your chest now, as if he is trying to x-ray vision through your clothes.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> blinks in surprise, unable to help himself from quickly glancing do...
        scene.text(`${((s as any).npcdesc ?? '')} blinks in surprise, unable to help himself from quickly glancing down and back up again.`);
        scene.text('"Oh. Wow. Uhm...');
      }
    }
    scene.actions([
      { label: 'Just wanted you to know', handler: (st: GameState) => {
    scene.text('"Just thought you should know that," you smirk.');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', 'improve'] },
    ]);
  } },
      { label: 'Prove it', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    scene.text('"Here, let me show you."');
    if ((!((st as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: Before <<$npcdesc>> can say anything, you pull up your top, giving him an unobst...
      scene.text(`Before ${((st as any).npcdesc ?? '')} can say anything, you pull up your top, giving him an unobstructed look at ${((st as any).pcdesc_breasts ?? '')} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your top back down.`);
    } else {
      // TODO-QSP: dynamic text: Before <<$npcdesc>> can say anything, you pull your dress down, giving him an un...
      scene.text(`Before ${((st as any).npcdesc ?? '')} can say anything, you pull your dress down, giving him an unobstructed look at ${((st as any).pcdesc_breasts ?? '')} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your clothes back into place.`);
    }
    scene.text('"See? No bra."');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>> is grinning now. "I think I saw that really well."
    scene.text(`"Yeah..." ${((st as any).npcdesc ?? '')} is grinning now. "I think I saw that really well."`);
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate', 'improve'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlirtArg(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['flirt_type'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).date_ev ?? 0)?.['flirt_type'] === 'romantically') {
    // TODO-QSP: dynamic text: Your voice diminishes to a hushed whisper, murmuring to <<$npcdesc>> in the quie...
    scene.text(`Your voice diminishes to a hushed whisper, murmuring to ${((s as any).npcdesc ?? '')} in the quiet of the room as you stare into his eyes.`);
    // TODO-QSP: $flirt_rand1[] = '"You make me feel special... Like nobody ever has before..."'
  } else {
    if (((s as any).date_ev ?? 0)?.['flirt_type'] === 'sexually') {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        if ((Math.floor(Math.random() * 1) + 1) === 1) {
          // TODO-QSP: $flirt_rand1[] = '"Can I tell you a secret?"'
          // TODO-QSP: $flirt_rand2[] = '"What''s that?"'
          // TODO-QSP: $flirt_rand3[] = '"I always wear underwear that match my socks." One of his eyebrows goes up at that...
        }
      }
    } else {
      if (((s as any).date_ev ?? 0)?.['flirt_type'] === 'corny') {
      }
    }
  }
  (s as any).flirt_num = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
  // TODO-QSP: end
  scene.build();
}

function enterFunTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['fun_talk'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: You end up asking <<$npcdesc>>, "So what do you do for fun?"
  scene.text(`You end up asking ${((s as any).npcdesc ?? '')}, "So what do you do for fun?"`);
  ((s as any).pc_know_hobby = (s as any).pc_know_hobby ?? {})[String((s as any).npcID ?? 0)] = 1;
  if (((s as any).npc_apt_sparetype ?? 0)?.[String((s as any).npcID ?? 0)] === 'gym'  ||  ((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    qspGoto(s, 'date_talk', 'workout_fun');
  } else {
    if (((s as any).npc_apt_sparetype ?? 0)?.[String((s as any).npcID ?? 0)] === 'gaming') {
      qspGoto(s, 'date_talk', 'gaming_fun');
    } else {
      if (((s as any).npc_door_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'indoor') {
        if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'netflix_chill') {
          qspGoto(s, 'date_talk', 'netflix_fun');
        } else {
          qspGoto(s, 'date_talk', 'reading_fun');
        }
      } else {
        if (((s as any).npc_fav_date ?? 0)?.[String((s as any).npcID ?? 0)] === 'beach_date') {
          qspGoto(s, 'date_talk', 'beach_fun');
        } else {
          qspGoto(s, 'date_talk', 'running_fun');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPoliteHobbyReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Inquire politely', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool," you say. "Tell me about it?"');
    // TODO-QSP: dynamic text: You listen somewhat mindlessly as he tells you about his interests <<$date_ev[''...
    scene.text(`You listen somewhat mindlessly as he tells you about his interests ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBeachFun(s: GameState, scene: SceneBuilder): void {
  scene.text('"I like going to the beach," he says.');
  qspGoto(s, 'date_talk', 'beach_fun_react');
  // TODO-QSP: end
  scene.build();
}

function enterBeachFunReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNetflixFun(s: GameState, scene: SceneBuilder): void {
  scene.text('"Oh, you know, just watch whatever is on streaming.');
  qspGoto(s, 'date_talk', 'netflix_react_menu');
  // TODO-QSP: end
  scene.actions([
    { label: 'Inquire politely', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool," you say. "Tell me about it?"');
    // TODO-QSP: dynamic text: You listen somewhat mindlessly as he tells you about his interests <<$date_ev[''...
    scene.text(`You listen somewhat mindlessly as he tells you about his interests ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNetflixReactMenu1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNetflixWatching(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNetflixFavShow(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterNetflixWatching(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What are you watching? (interested)', handler: (st: GameState) => {
    scene.text('"Oh? Like what?" you ask with interest. "Anything I\'ve seen?"');
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      if (((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
        scene.text('"There\'s this fantasy one that\'s pretty good," he says. "Got dragons and stuff. And the lead actress is smoking hot and constantly getting railed by other characters. It\'s awesome watching her tits flop around."');
        qspGoto(st, 'date_talk', 'netflix_womanizer');
      } else {
        scene.text('"There\'s this fantasy one that\'s pretty good," he says. "Got swords and magic and stuff and the characters are really interesting. Action isn\'t bad either. Can\'t complain about dragons setting everything on fire."');
        qspGoto(st, 'date_talk', 'netflix_react_menu2');
      }
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        if (((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
          scene.text('"There\'s this dramedy one that\'s pretty good," he says. "About a poor family and all the hijinks and sex they get up to. And the female lead is a hot super slut and getting naked and banging dudes all the time."');
          qspGoto(st, 'date_talk', 'netflix_womanizer');
        } else {
          scene.text('"There\'s this dramedy one that\'s pretty good," he says. "About a poor family and all the hijinks and sex they get up to. And there is <i>a lot</i> of sex."');
          qspGoto(st, 'date_talk', 'netflix_react_menu2');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterNetflixReactMenu2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You like that one too', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"Oh! I love that show! I loved the part where..."');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('"Wait wait! No spoilers! I haven\'t seen everything yet!"');
    } else {
      scene.text('"Oh man, that was the best. And what about..."');
    }
    // TODO-QSP: dynamic text: The two of you animatedly discuss the show <<$date_ev[''dialogue_setting'']>>.
    scene.text(`The two of you animatedly discuss the show ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNetflixFavShow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him about your favorite...', handler: (st: GameState) => {
    scene.actions([
      { label: '... drama show', handler: (st: GameState) => {
    scene.text('You tell him about your favorite drama show.');
    scene.text('He reacts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      { label: '... fantasy show', handler: (st: GameState) => {
    scene.text('You tell him about your favorite fantasy show.');
    scene.text('He reacts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      { label: '... sci-fi show', handler: (st: GameState) => {
    scene.text('You tell him about your favorite science fiction show.');
    scene.text('He reacts.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNetflixWomanizer(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNetflixReactMenu2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Gross', handler: (st: GameState) => {
    scene.text('<i>Ew.</i>');
    // TODO-QSP: dynamic text: You wrinkle your nose, disgusted by <<$npcdesc>>''s blatant womanizing. He doesn...
    scene.text(`You wrinkle your nose, disgusted by ${((st as any).npcdesc ?? '')}'s blatant womanizing. He doesn't seem to notice, going on about his shows ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'worsen'
  } },
    ]);
  } },
    { label: 'Typical', handler: (st: GameState) => {
    scene.text('<i>Typical boy...</i>');
    // TODO-QSP: dynamic text: You suppress an eyeroll. Of course his favorite part are the sex scenes. Though ...
    scene.text(`You suppress an eyeroll. Of course his favorite part are the sex scenes. Though you don't feel you can really hold it against him. Of course a man is going to be thinking with his dick. You continue listening to him going on about his shows ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    { label: 'You love sex scenes', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"Yeah, it\'s pretty hot isn\'t it? I love watching sex scenes," you grin. "They really turn me on."');
    // TODO-QSP: dynamic text: <<$npcdesc>> animatedly engages with you talking about more shows, both of you d...
    scene.text(`${((st as any).npcdesc ?? '')} animatedly engages with you talking about more shows, both of you discussing your favorite sex scenes in film and television ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReadingFun(s: GameState, scene: SceneBuilder): void {
  scene.text('"I like to read," he says.');
  qspGoto(s, 'date_talk', 'reading_fun_react');
  // TODO-QSP: end
  scene.build();
}

function enterReadingFunReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterRunningFun(s: GameState, scene: SceneBuilder): void {
  scene.text('"I like to read," he says.');
  qspGoto(s, 'date_talk', 'running_fun_react');
  // TODO-QSP: end
  scene.build();
}

function enterRunningFunReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWorkoutFun(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: '"I like to work out," he says ' + iif(npc_arrogant[$npcID] > 0, 'more than a little smugly.', 'casu...
  qspGoto(s, 'date_talk', 'workout_fun_react');
  // TODO-QSP: end
  scene.build();
}

function enterWorkoutFunReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWorkoutAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWorkoutNerdy(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWorkoutAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him about it', handler: (st: GameState) => {
    scene.text('"What is it you like about working out? What\'s so fun about lifting heavy things and putting them back down?"');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"It\'s not just lifting—it\'s problem-solving. Like, how do I make my body do that? Every rep is a tiny experiment."');
      scene.text('"So you\'re a mad scientist with protein shakes."');
      scene.text('"Exactly! And when you finally nail a movement you\'ve struggled with? That \'click\' in your brain is better than any video game level-up."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
      ]);
    } else {
      if (((st as any).npc_build_desc ?? 0)?.[String((st as any).npcID ?? 0)] === 'athletic') {
        scene.text('"Honestly? I like the way it makes me look," he grins.');
        scene.actions([
          { label: 'Go on', handler: (st: GameState) => {
    scene.text('"Yeah?" you snicker back.');
    scene.text('"I know maybe it\'s a little arrogant," he admits. "But it makes me feel good about myself."');
    if (((st as any).pcs_hotcat ?? 0) >= 8) {
      scene.actions([
        { label: 'You know what he means (you\'re hot)', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTalkImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "I know what you mean," twisting your lips in a suggestive smirk. You''re a <<pc...
    scene.text(`"I know what you mean," twisting your lips in a suggestive smirk. You're a ${((st as any).pcs_hotcat ?? '')} out of 10 girl and you know it. And from the way his gaze slips down your body, you're pretty sure he knows it too.`);
    scene.text('"Looking good feels good," you grin.');
    // TODO-QSP: dynamic text: "Yeah..." he mumbles back, still ogling you <<$date_ev[''dialogue_setting'']>>.
    scene.text(`"Yeah..." he mumbles back, still ogling you ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
      ]);
    }
  } },
          { label: 'You do too', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"I can\'t disagree there," you reply, a twisting smirk on your lips as you admire his muscular physique. He smiles back, clearly glad that you appreciate his body as much as he does. Or maybe, almost as much.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"I just feel great during and after it. It makes all my stress just... go away."');
        scene.text('"So it\'s your meditation?"');
        scene.text('"With better biceps. And no chanting," he grins.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You keep chatting <<$date_ev[''dialogue_setting'']>>.
    scene.text(`You keep chatting ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
          { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('You laugh at his joke.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
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

function enterWorkoutNerdy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_style_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'nerdy') {
    scene.actions([
      { label: 'Didn\'t expect that', handler: (st: GameState) => {
    scene.text('"Oh." You blink in surprise. "I wasn\'t expecting that."');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_insecure ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Why wouldn''t you expect it?" <<$npcdesc>> frowns.
      scene.text(`"Why wouldn't you expect it?" ${((st as any).npcdesc ?? '')} frowns.`);
      scene.actions([
        { label: 'Because you dress so nerdy', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"Cause of the way you dress." You gesture at his Tetris T-shirt. "Not a lot of jocks who are into Tetris."');
    scene.text('"What? A guy can\'t like Tetris and staying fit?" he snaps.');
    if (((st as any).date_ev ?? 0)?.['cont_arg'] === 'eating_menu') {
      scene.text('Further complaint is cut off as the wait staff returns with your food.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Cause I look like a nerd?" <<$npcdesc>> smirks.
      scene.text(`"Cause I look like a nerd?" ${((st as any).npcdesc ?? '')} smirks.`);
      scene.text('"Well... Yeah," you admit.');
      scene.text('"It\'s good to stay healthy," he explains. "I just like the way it makes me feel."');
      scene.text('"That\'s fair."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGamingFun(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: '"I like gaming," he says' + iif(npc_insecure[$npcID] > 0, ' somewhat embarrassedly.', '.')
  qspGoto(s, 'date_talk', 'gaming_fun_react');
  // TODO-QSP: end
  scene.build();
}

function enterGamingFunReact(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPoliteHobbyReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: '"What do you play?" (uninterested)', handler: (st: GameState) => {
    scene.text('"Oh, that\'s cool. What do you play?"');
    qspGoto(st, 'date_talk', 'gaming_fun_describe');
  } },
  ]);
  scene.build();
}

function enterGamingFunDescribe(s: GameState, scene: SceneBuilder): void {
  scene.text('"Counter Strike mostly. I dabble in other things but I always end up coming back to that."');
  if (((s as any).pcs_gaming ?? 0) >= 50) {
    scene.actions([
      { label: 'Tell him you like it too', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'love');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTalkImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I love that perfect sound it makes when you get a headshot sound," you grin.');
    // TODO-QSP: dynamic text: "Same!" <<$npcdesc>> says, a light coming alive in his eyes. "That ding is so sa...
    scene.text(`"Same!" ${((st as any).npcdesc ?? '')} says, a light coming alive in his eyes. "That ding is so satisfying. But I really live for those clutch moments."`);
    scene.text('"1v5s get my heart racing like nothing else," you agree. "You prefer AWPs or rifles?"');
    scene.text('"Gotta go with rifles - nothing beats spraying down a whole squad with an AK."');
    scene.text('"Respect. I\'m all about that AWP life though. That instant delete button feeling?"');
    // TODO-QSP: dynamic text: The two of you converse back and forth animatedly <<$date_ev[''dialogue_setting'...
    scene.text(`The two of you converse back and forth animatedly ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him about it', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTalkImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"Counter Strike mostly. I dabble in other things but I always end up coming back to that."');
    scene.text('"I\'ve never played it," you admit. "What\'s it like?"');
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      scene.text('"It\'s like high-stakes chess with guns. Every move matters."');
      scene.text('"But isn\'t it just running around shooting people?"');
      scene.text('"No way! There\'s economy management, map control, mind games... Last night I baited a whole team with fake footsteps."');
      scene.text('"That sounds stressful."');
      scene.text('"That\'s the rush! One perfect flick shot can change everything."');
      scene.text('"Flick?" you cock your head in confusion.');
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('"So you play that shooting game with all of our angry countrymen?" you ask in amusement.');
        scene.text('"Yeah," he snickers. "Though not everyone who plays is Russian - some are Polish teenagers screaming about skins too."');
        scene.text('"Skins? Like... character outfits?"');
        scene.text('"Weapon cosmetics. Some cost more than a car. My AK has a kitten sticker though."');
        scene.text('"You paid real money to put a cat on a pretend gun?"');
        scene.text('"It\'s a tactical kitten! The distraction value alone...');
      } else {
        scene.text('"Wait, you\'ve never played CS before?"');
        scene.text('"Only that mobile version where you shoot zombies. Is the real one different?"');
        scene.text('"It\'s like comparing checkers to 4D chess. Here, I\'ll show you a pro match," he says, pulling out his phone to show you. It isn\'t long before you have a question.');
        scene.text('"Why is that guy spinning in circles while defusing the bomb?"');
        scene.text('"... Okay maybe we\'ll start with Deathmatch first."');
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> continues animatedly educating you on the nuances of CS:GO <<$date_...
    scene.text(`${((st as any).npcdesc ?? '')} continues animatedly educating you on the nuances of CS:GO ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBeenBefore(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['been_before'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: '"So, you''ve been here before?" you ask' + iif(stat['del_parco'] > 0, ', looking around the restaur...
  if ((Math.floor(Math.random() * 3) + 1) > 1) {
    scene.text('"Yeah, a few times before."');
    scene.actions([
      { label: 'Can you recommend anything?', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'food_recommendations'
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)[((s as any).date_ev ?? 0)?.[String((s as any).loc ?? 0)]] > 0) {
      // TODO-QSP: dynamic text: "First time for me," <<$npcdesc>> shakes his head. "You?"
      scene.text(`"First time for me," ${((s as any).npcdesc ?? '')} shakes his head. "You?"`);
      scene.text('"I\'ve been a few times before."');
      scene.text('"Anything you can recommend?"');
      scene.actions([
        { label: 'Give him some recommendations', handler: (st: GameState) => {
    scene.text('"Sure."');
    scene.text('You point out some of your favorite menu items to him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "First time for me," <<$npcdesc>> shakes his head. "You?"
      scene.text(`"First time for me," ${((s as any).npcdesc ?? '')} shakes his head. "You?"`);
      scene.text('"Same," you reply with a wry smirk.');
      qspGoto(s, 'date_talk', 'small_talk');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAwkwardStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_date_count ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (String((s as any).locArgs?.[1] ?? '') === 'casual_meal') {
      ((s as any).date_ev = (s as any).date_ev ?? {})['talk_desc1'] = 'You adjust the fork on the napkin in front of you awkwardly as silence takes over.';
    }
    scene.text('"So... uh... how\'s your day been?" you ask, not knowing what else to say.');
    scene.text('"Oh, you know... it\'s been... fine. Just the usual. How about you?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAwkwardMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('"So, um... how was your day?"');
    scene.text('"Oh, uh, good! You know, just, uh... work stuff. Same old. You?"');
    scene.text('"Yeah, same. Work. Um, nothing too exciting, really."');
    scene.text('"Right. Right. Work is... work."');
    if (((s as any).date_ev ?? 0)?.['type'] === 'casual_meal') {
      scene.text('"Yeah. (awkward pause) So... you like the pelmeni here?"');
      scene.text('"Oh, uh... I don\'t know. I\'ve never had it here before. But I guess it looks good."');
      scene.text('"Yeah, me neither. It seems... fancy?"');
      scene.text('"Yeah, a little. Maybe too fancy... ?"');
      scene.text('"Right? Like, should pelmeni be fancy? Is that a thing?"');
      scene.text('"I... I don\'t think so? But, uh, I don\'t know. Maybe it\'s, like, \'fancy pelmeni.\' You know, with a \'fancy twist.\'"');
      scene.text('"Fancy twist? Oh, yeah, like... with, like, gold flakes or something?"');
      scene.text('"Yeah, exactly. Gold pelmeni. That\'s... that\'s a thing, right?"');
      scene.text('"Totally."');
    }
    scene.text('"(silence)');
    scene.text('"I guess we\'re just... really good at small talk."');
    qspGoto(s, 'date_talk', 'awkward_silence');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAwkwardMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gschoolVars ?? 0)?.['last_attendance'] === ((s as any).daystart ?? 0)  &&  ((s as any).date_ev ?? 0)?.['school_talk'] === 0) {
    scene.actions([
      { label: 'School', handler: (st: GameState) => {
    scene.text('"Uhm... just, like, school and stuff..." you reply.');
    if ((Math.floor(Math.random() * 100) + 1) + 20 < ((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)]  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Oh. How was that? Your classes going well?"');
      qspGoto(st, 'date_talk', 'school_awkward1');
    } else {
      scene.text('"That\'s good."');
      scene.text('...');
      scene.text('The silence stretches out between you...');
      qspGoto(st, 'date_talk', 'awkward_silence');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'The usual (nothing specific)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Uhm... Y''know, just the usual," you say back, cringing internally as you reali...
    scene.text(`"Uhm... Y'know, just the usual," you say back, cringing internally as you realize that's exactly what he just said. ${((st as any).date_ev ?? 0)?.['talk_desc1'] ?? ''}..`);
    qspGoto(st, 'date_talk', 'awkward_silence');
  } },
  ]);
  scene.build();
}

function enterAwkwardSilence(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Suffer it', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['cont_loc'] === 'date_casual_meal') {
      // TODO-QSP: dynamic text: You sit across from <<$npcdesc>>, the clink of silverware and the murmur of dist...
      scene.text(`You sit across from ${((st as any).npcdesc ?? '')}, the clink of silverware and the murmur of distant chatter only deepening the silence between you, the air thick and unyielding, as if it’s waiting for you to say something—anything—to shatter the unbearable quiet ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    } else {
      // TODO-QSP: dynamic text: You sit in the deepening silence between you and <<$npcdesc>>, the air thick and...
      scene.text(`You sit in the deepening silence between you and ${((st as any).npcdesc ?? '')}, the air thick and unyielding, as if it’s waiting for you to say something—anything—to shatter the unbearable quiet.`);
    }
    dynamicGoto(st, (((st as any).date_ev ?? {}))['cont_loc'], (((st as any).date_ev ?? {}))['cont_arg']);
  } },
    { label: 'Laugh about it', handler: (st: GameState) => {
    qspCall(st, 'date_ev', 'loc_img');
    qspCall(st, 'date_funcs', 'date_mood', 'improve');
    // TODO-QSP: dynamic text: The silence extends further as you meet <<$npcdesc>>''s eyes.
    scene.text(`The silence extends further as you meet ${((st as any).npcdesc ?? '')}'s eyes.`);
    scene.text('And then you both burst out laughing.');
    scene.text('"Well, that was pretty awkward, wasn\'t it?" he says.');
    scene.text('"Yeah," you chuckle. "Weird how it\'s kind of a relief to admit it?"');
    dynamicGoto(st, (((st as any).date_ev ?? {}))['cont_loc'], (((st as any).date_ev ?? {}))['cont_arg']);
  } },
    { label: 'Break the tension - flash him', handler: (st: GameState) => {
    scene.actions([
      { label: 'Do it awkwardly', goto: ['date_casual_meal', 'awkward_flash'] },
      { label: 'Do it casually', goto: ['date_casual_meal', 'casual_flash'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolAwkward1(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['school_talk'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you nod.');
    scene.text('...');
    scene.text('Maybe you should have said more...');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
    { label: 'You didn\'t pay attention', handler: (st: GameState) => {
    scene.text('"I wasn\'t really paying attention," you mumble awkwardly.');
    scene.text('...');
    scene.text('Well, there went any chance of the conversation getting better.');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
    { label: 'Talk about what you learned', handler: (st: GameState) => {
    scene.text('"Well, we went over..."');
    // TODO-QSP: 'You tell <<$npcdesc>> about your classes and what your teachers talked about and ' + iif($npc_humor...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAwkwardMenu2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAwkwardMenu2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAwkwardRelaxAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAwkwardRelaxAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['talk_mood'] === 'awkward') {
    scene.actions([
      { label: 'Start to relax', goto: ['date_talk', 'awkward_relax'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAwkwardRelax(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['talk_mood'] = 'relaxed';
  qspCall(s, 'date_funcs', 'date_rate', 'like');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Not sure what happened but the tension starts to bleed away and that awkward feeling is lifted like a physical weight from your shoulders.');
  qspGoto(s, 'date_talk', 'date_continue');
  // TODO-QSP: end
  scene.build();
}

function enterBoyTalkLead(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['school_talk'] === 0) {
    if (((s as any).npc_thinkage ?? 0)?.[String((s as any).npcID ?? 0)] < 18  &&  ((s as any).npc_know_school ?? 0)?.[String((s as any).npcID ?? 0)] >= 0) {
      qspGoto(s, 'date_talk', 'school_talk');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'loc_img');
  if (((s as any).npc_know_school ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: "So, you''re still in school?" <<$npcdesc>> asks.
    scene.text(`"So, you're still in school?" ${((s as any).npcdesc ?? '')} asks.`);
    if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1) {
      scene.actions([
        { label: 'Graduated', handler: (st: GameState) => {
    scene.text('"I graduated actually."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Yeah', handler: (st: GameState) => {
    ((st as any).npc_know_school = (st as any).npc_know_school ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Mhmm," you nod.');
    scene.text('"Anything interesting happen recently?"');
    qspGoto(st, 'date_talk', 'school_talk2');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him you got kicked out', handler: (st: GameState) => {
    ((st as any).npc_know_school = (st as any).npc_know_school ?? {})[String((st as any).npcID ?? 0)] = (-1);
    scene.text('"Erm, actually... I got kicked out of school," you admit.');
    scene.text('"Bit of a bad girl, aren\'t you?" he smirks.');
    scene.text('"Too many absences," you smile back ruefully.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
        { label: 'Lie', handler: (st: GameState) => {
    ((st as any).npc_know_school = (st as any).npc_know_school ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Mhmm," you nod, decidedly avoiding talking about how you got kicked out.');
    scene.text('"Anything interesting happen recently?"');
    qspGoto(st, 'date_talk', 'school_talk2');
  } },
      ]);
    }
  } else {
    if (((s as any).npc_know_school ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "So, how''s school going?" <<$npcdesc>> asks. "Anything interesting happen recen...
      scene.text(`"So, how's school going?" ${((s as any).npcdesc ?? '')} asks. "Anything interesting happen recently?"`);
      qspGoto(s, 'date_talk', 'school_talk2');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolTalk2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about your classes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Well, I''ve been learning about..." You tell <<$npcdesc>> about your classes, h...
    scene.text(`"Well, I've been learning about..." You tell ${((st as any).npcdesc ?? '')} about your classes, how they've been going, and what lessons your teachers have been giving.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Talk about how boring class is', handler: (st: GameState) => {
    scene.text('"Ugh, what could possibly be interesting? I spend most of my classes doodling and taking selfies."');
    scene.text('"I\'d like to see those," he grins.');
    scene.text('"Which? The doodles or the selfies?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    { label: 'Talk about some gossip', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Well, some classmates of mine..." You tell <<$npcdesc>> about all the dirty gos...
    scene.text(`"Well, some classmates of mine..." You tell ${((st as any).npcdesc ?? '')} about all the dirty gossip you've heard about who's fucking who and which girl blew which boy and which boy is cheating on which girl ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoobLook(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'cleavage_img');
  scene.text('You catch him looking at your breasts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Call him out', handler: (st: GameState) => {
    scene.text('"Something on your mind?" you ask pointedly, raising an eyebrow.');
    if (((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: '"Your tits." Shamelessly, he grins back at you, saying, "They look amazing in that ' + iif(PCloDres...
      qspGoto(st, 'date_talk', 'boob_comment');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> quickly looks up and away, blushing as he realizes he''s been caugh...
      scene.text(`${((st as any).npcdesc ?? '')} quickly looks up and away, blushing as he realizes he's been caught`);
      scene.text('"Er-"');
      scene.actions([
        { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('"It\'s okay." He blinks in surprise. "I don\'t mind you looking."');
    scene.text('"Really?"');
    scene.text('"Really." You give him a smile. "I know they\'re hard not to look at."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      ]);
    }
  } },
    { label: '"You\'re staring" (blush)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You''re staring, <<$npcdesc>>," you mumble, feeling your cheeks flush.
    scene.text(`"You're staring, ${((st as any).npcdesc ?? '')}," you mumble, feeling your cheeks flush.`);
    if (((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Can''t help myself," <<$npcdesc>> grins. "You''ve got a great pair."
      scene.text(`"Can't help myself," ${((st as any).npcdesc ?? '')} grins. "You've got a great pair."`);
      scene.actions([
        { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('You give him a shy smile as your own blush intensifies.');
    scene.text('"Just... don\'t stare too much..."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> quickly looks up and away, blushing as he realizes he''s been caugh...
      scene.text(`${((st as any).npcdesc ?? '')} quickly looks up and away, blushing as he realizes he's been caught`);
      scene.text('"Er-"');
      scene.actions([
        { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('"It\'s okay." He blinks in surprise. "I don\'t mind you looking."');
    scene.text('You give him a shy smile as your own blush intensifies.');
    scene.text('"Just... don\'t stare too much..."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBoobComment(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the compliment', handler: (st: GameState) => {
    scene.text('"Why thank you," you smile back. "Always nice to hear compliments."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    { label: 'Eyes up here', handler: (st: GameState) => {
    scene.text('"Hey." You snap your fingers. "My eyes are up here."');
    scene.text('"Sorry," he says, still grinning.');
    scene.text('"Just don\'t do it again."');
    scene.text('"No promises."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBralessTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'loc_img');
  ((s as any).date_ev = (s as any).date_ev ?? {})['braless_talk'] = 1;
  if (((s as any).npc_know_no_bra ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "So, do you never wear a bra or you''re just feeling daring today?" <<$npcdesc>>...
      scene.text(`"So, do you never wear a bra or you're just feeling daring today?" ${((s as any).npcdesc ?? '')} asks, raising an eyebrow at you.`);
    } else {
      // TODO-QSP: dynamic text: "So, uhm," <<$npcdesc>> starts awkwardly. "Do you normally go without a bra?"
      scene.text(`"So, uhm," ${((s as any).npcdesc ?? '')} starts awkwardly. "Do you normally go without a bra?"`);
    }
    scene.text('Following his gaze, you glance down and see the shape of your breasts and bumps of your nipples are a little obvious right now.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBralessReplyMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Just for him', handler: (st: GameState) => {
    scene.text('"I do normally," you smirk. "But I thought you might enjoy it more if I didn\'t today."');
    // TODO-QSP: dynamic text: "That''s nice of you," <<$npcdesc>> smiles in reply.
    scene.text(`"That's nice of you," ${((st as any).npcdesc ?? '')} smiles in reply.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      // TODO-QSP: dynamic text: "You really don''t wear a bra?" <<$npcdesc>> asks, looking tellingly at the full...
      scene.text(`"You really don't wear a bra?" ${((s as any).npcdesc ?? '')} asks, looking tellingly at the fully formed pokies showing through your top. "It doesn't... bother you?"`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBralessReplyMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'They\'re just nipples', handler: (st: GameState) => {
    scene.text('"No," you shrug. "Why should it? They\'re just nipples. Pretty sure you have a pair too."');
    qspGoto(st, 'date_talk', 'braless_reply_menu');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "It''s so hot that you don''t wear bras," <<$npcdesc>> says, shamelessly ogling ...
      scene.text(`"It's so hot that you don't wear bras," ${((s as any).npcdesc ?? '')} says, shamelessly ogling your braless tits.`);
      qspGoto(s, 'date_talk', 'braless_reply_menu');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBralessReplyMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Get embarrassed', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['temp_mood'] = 'embarrassed';
    scene.text('You blush fiercely.');
    scene.text('"Is it really that noticeable?"');
    if (((st as any).stat_nipple_text ?? 0) !== '') {
      if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: '"I''m kinda getting headlines right now," he says, wryly noting your <<$stat_nipple_text>> poking t...
      } else {
        // TODO-QSP: '"A bit, yeah," he says, blushing as well and looking away from your <<$stat_nipple_text>> poking th...
      }
    } else {
      if (((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: '"I''m kinda getting headlines right now," he says, wryly noting your <<$stat_nipple_text>> poking t...
      } else {
        // TODO-QSP: '"A bit, yeah," he says, blushing as well and looking away from your <<$stat_nipple_text>> poking th...
      }
    }
    qspGoto(st, 'date_talk', 'braless_reply_menu2');
  } },
  ]);
  scene.build();
}

function enterBralessReplyMenu2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBralessReplyPos(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBralessReplyNeutral(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'date_talk', 'braless_reply_exh');
  // TODO-QSP: end
  scene.build();
}

function enterBralessReplyPos(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Like the way they look', handler: (st: GameState) => {
    scene.text('"I like the way they look without a bra," you answer more clearly, adding a smirk.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"I\'m not sure I can disagree with that," he replies, appreciating the view.');
    } else {
      scene.text('"Me too," he grins.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    { label: 'Feels better', handler: (st: GameState) => {
    scene.text('"It feels better to go braless," you answer more clearly, adding a smirk.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      if (((st as any).pcs_cupsize ?? 0) > 20) {
        scene.text('"It doesn\'t hurt?" He looks surprised. "I mean, because..."');
        scene.text('"Cause I\'ve got a big pair of sweater puppies?" you ask, giving him a grin that he returns.');
        scene.text('"Yeah, that."');
        scene.text('"Well, I suppose it\'s a problem when I jump. But overall, wearing a bra feels worse than not wearing one. Itchy, sweaty, constraining. I\'d rather let these sweater puppies off the leash."');
        scene.text('"I\'m not sure I can disagree with that," he replies, appreciating the view.');
      } else {
        scene.text('"Huh. I hear that a lot about girls. That the first thing they do when they get home is take off their bra."');
        scene.text('"Yeah. They\'re itchy, sweaty, and constraining. Going braless gives me a sense of freedom. Both emotionally and physically. I\'d rather just skip all that and let people see a bit of nippage."');
        // TODO-QSP: dynamic text: "Makes sense." <<$npcdesc>> nods.
        scene.text(`"Makes sense." ${((st as any).npcdesc ?? '')} nods.`);
      }
    } else {
      scene.text('"Looks better too," he grins.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBralessReplyNeutral(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'They\'re just breasts', handler: (st: GameState) => {
    scene.text('"I don\'t see what the big deal is," you shrug. "Sometimes I wear them, sometimes I don\'t."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBralessReplyNeg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
  ]);
  scene.build();
}

function enterShowTitsEv(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['show_tits_ev'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <<$npcdesc>> leans close and whispers to you.
  scene.text(`${((s as any).npcdesc ?? '')} leans close and whispers to you.`);
  // TODO-QSP: dynamic text: "<<$pcs_usedname[$npcID]>>, show me your tits."
  scene.text(`"${((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}, show me your tits."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Protest', handler: (st: GameState) => {
    scene.text('"No way!" You blush, looking around. "We\'re in public!"');
    scene.text('"Come on, please? It would be so hot."');
    scene.actions([
      { label: 'No!', handler: (st: GameState) => {
    scene.text('"No!" you insist. "There are people around!"');
    scene.text('"I\'ll get you to do it one day."');
    scene.text('He looks wistful.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
      { label: 'Give in', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    // TODO-QSP: dynamic text: Taking another look around, you can''t help but feel hesitant about what <<$npcd...
    scene.text(`Taking another look around, you can't help but feel hesitant about what ${((st as any).npcdesc ?? '')} is asking you to do.`);
    scene.text('<i>Oh fuck it.</i>');
    if ((!((st as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: Before you can talk yourself out of it, you pull up your top, showing off your <...
      scene.text(`Before you can talk yourself out of it, you pull up your top, showing off your ${((st as any).pcdesc_breasts ?? '')} breasts to ${((st as any).npcdesc ?? '')}. You manage to hold it about two seconds before quickly tugging your clothes back down and looking around to see if anybody saw.`);
    } else {
      // TODO-QSP: dynamic text: Before you can talk yourself out of it, you pull down your dress, showing off yo...
      scene.text(`Before you can talk yourself out of it, you pull down your dress, showing off your ${((st as any).pcdesc_breasts ?? '')} breasts to ${((st as any).npcdesc ?? '')}. You manage to hold it about two seconds before quickly tugging your clothes back and looking around to see if anybody saw.`);
    }
    qspGoto(st, 'date_talk', 'npc_flash_react', 'shy');
  } },
    ]);
  } },
    { label: 'Tease him', handler: (st: GameState) => {
    scene.img('images/shared/romance/dates/casual_dining/bounce_tits.mp4');
    scene.text('"You want a look at the goods, huh?" You smirk at him, bouncing in your seat and letting your breasts bounce with you inside your top.');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>>''s practically drooling.
    scene.text(`"Yeah..." ${((st as any).npcdesc ?? '')}'s practically drooling.`);
    scene.text('"Hmmmm. Nope! Afraid all you get is this for now," you grin, bouncing some more.');
    if (((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] < (Math.floor(Math.random() * 10) + 1)) {
      scene.text('"Tease."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
      ]);
    } else {
      scene.text('"Oh come on, please? Fuck, you\'re so hot."');
      scene.actions([
        { label: 'Flash him', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    scene.text('"Flattery will get you everywhere."');
    if ((!((st as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: You take a quick look around to see if anybody is watching and pull up your top,...
      scene.text(`You take a quick look around to see if anybody is watching and pull up your top, watching ${((st as any).npcdesc ?? '')}'s face light up as you reveal your ${((st as any).pcdesc_breasts ?? '')} breasts to him. You give him a good two second view before tugging your top back down into place.`);
    } else {
      // TODO-QSP: dynamic text: You take a quick look around to see if anybody is watching and pull down your dr...
      scene.text(`You take a quick look around to see if anybody is watching and pull down your dress, watching ${((st as any).npcdesc ?? '')}'s face light up as you reveal your ${((st as any).pcdesc_breasts ?? '')} breasts to him. You give him a good two second view before tugging your top back into place.`);
    }
    qspGoto(st, 'date_talk', 'npc_flash_react');
  } },
      ]);
    }
  } },
    { label: 'Flash him', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    if ((!((st as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: "Is that a dare?" You grin at him and with no more hesitation than a glance to s...
      scene.text(`"Is that a dare?" You grin at him and with no more hesitation than a glance to see if anybody is watching, pull up your top and flash him your ${((st as any).pcdesc_breasts ?? '')} breasts. You give him a good two second view before tugging your top back down into place.`);
    } else {
      // TODO-QSP: dynamic text: "Is that a dare?" You grin at him and with no more hesitation than a glance to s...
      scene.text(`"Is that a dare?" You grin at him and with no more hesitation than a glance to see if anybody is watching, pull down your dress and flash him your ${((st as any).pcdesc_breasts ?? '')} breasts. You give him a good two second view before tugging your top back into place.`);
    }
    qspGoto(st, 'date_talk', 'npc_flash_react');
  } },
  ]);
  scene.build();
}

function enterNpcFlashReact(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'shy') {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "Fuck, that was hot," <<$npcdesc>> mutters under his breath.
      scene.text(`"Fuck, that was hot," ${((s as any).npcdesc ?? '')} mutters under his breath.`);
      scene.text('You feel an intense heat flush across your face as he grins at you. "Happy now?"');
      scene.text('"That\'s a word for it."');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        // TODO-QSP: dynamic text: "You''re awesome" <<$npcdesc>> gives you this goofy grin, still staring at your ...
        scene.text(`"You're awesome" ${((s as any).npcdesc ?? '')} gives you this goofy grin, still staring at your now covered breasts.`);
        scene.text('You feel an intense heat flush across your face as he grins at you. "Happy now?"');
        scene.text('"Yeah," he says, still goofy.');
      } else {
        scene.text('"Wow, I can\'t believe you actually did it."');
        // TODO-QSP: dynamic text: <<$npcdesc>> is blinking in surprise and you feel an intense heat flush across y...
        scene.text(`${((s as any).npcdesc ?? '')} is blinking in surprise and you feel an intense heat flush across your face.`);
        scene.text('"Well, you asked me to, didn\'t you?" you mumbled shyly.');
        scene.text('"And I\'m so glad I did," he grins.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "Fuck, that was hot," <<$npcdesc>> mutters under his breath.
      scene.text(`"Fuck, that was hot," ${((s as any).npcdesc ?? '')} mutters under his breath.`);
      scene.text('You grin at his expression. "Happy now?"');
      scene.text('"That\'s a word for it."');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        // TODO-QSP: dynamic text: "You''re awesome" <<$npcdesc>> gives you this goofy grin, still staring at your ...
        scene.text(`"You're awesome" ${((s as any).npcdesc ?? '')} gives you this goofy grin, still staring at your now covered breasts.`);
        scene.text('You grin at his expression. "Happy now?"');
        scene.text('"Yeah," he says, still goofy.');
      } else {
        scene.text('"Wow, I can\'t believe you actually did it."');
        // TODO-QSP: dynamic text: <<$npcdesc>> is blinking in surprise and you feel an intense heat flush across y...
        scene.text(`${((s as any).npcdesc ?? '')} is blinking in surprise and you feel an intense heat flush across your face.`);
        scene.text('"Well, you asked me to, didn\'t you?" you shrug, still smirking.');
        scene.text('"And I\'m so glad I did," he grins back.');
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexTalkMenu1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrevMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)) {
    if (((s as any).npc_last_sex_enjoyment ?? 0)?.[String((s as any).npcID ?? 0)] === 'enjoy') {
      scene.actions([
        { label: 'Talk about the sex you had earlier', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'sex_earlier'
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPornTalk1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: "Do you watch porn?" you ask <<$npcdesc>>.
  scene.text(`"Do you watch porn?" you ask ${((s as any).npcdesc ?? '')}.`);
  if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= 3) {
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('His face instantly turns red and he has trouble meeting your eyes.');
      scene.text('"Uhm, yeah..."');
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    scene.text('You tease him about watching porn.');
    scene.text('"What about you?" he asks, still blushing. "Do you watch porn?"');
    qspGoto(st, 'date_talk', 'porn_what_kind2');
  } },
      ]);
    } else {
      scene.text('"Yeah, of course," he grins without shame. "Doesn\'t everybody?"');
      scene.actions([
        { label: 'Ask him what he likes', goto: ['date_talk', 'porn_what_kind1'] },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
      { label: 'Ask him what kind', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'porn_what_kind1'
  } },
    ]);
  } else {
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('His face instantly turns red and he has trouble meeting your eyes.');
      scene.text('"Uhm, er, no... Not really."');
      scene.actions([
        { label: 'Tease him', handler: (st: GameState) => {
    scene.text('You tease him about watching porn.');
    scene.text('"What about you?" he asks, still blushing. "Do you watch porn?"');
    qspGoto(st, 'date_talk', 'porn_what_kind2');
  } },
      ]);
    } else {
      scene.text('"Not really," he shrugs.');
      scene.text('"Really?" You\'re surprised. "I thought that was something all boys did."');
      scene.text('"Most, maybe," he chuckles. "But not all."');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPornTease1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTalkImg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPornWhatKind1(s: GameState, scene: SceneBuilder): void {
  scene.text('"Is there a kind you like the most?" you ask him.');
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
      if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        ((s as any).date_ev = (s as any).date_ev ?? {})['porn_genre'] = 'rough';
        // TODO-QSP: dynamic text: <<$npcdesc>> grows even more embarrassed but answers your question anyways.
        scene.text(`${((s as any).npcdesc ?? '')} grows even more embarrassed but answers your question anyways.`);
        scene.text('"I kinda like the rough stuff," he admits. "Uhm. Er. What about you? Do you watch porn?"');
      } else {
        scene.text('"I like rough porn," he admits. "Slapping and hair pulling and the stuff where a girl is getting fucked within an inch of her life. What about you? Do you watch porn?"');
      }
    }
  } else {
    if (((s as any).placeholder ?? 0) === 1) {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPornWhatKind2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You don\'t', handler: (st: GameState) => {
    scene.text('"No," you shake your head amusedly. "I just like asking other people about it."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Generic porn', handler: (st: GameState) => {
    scene.text('"I guess I\'d say my tastes are pretty vanilla," you reply honestly. "Just normal boy-girl stuff."');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
    scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Rough porn', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['porn_genre'] === 'rough') {
      scene.text('"I like the rough stuff too," you reply with a grin. "I love imagining myself as one of those girls who is just getting totally manhandled by the guy."');
      // TODO-QSP: '"Maybe that''s something I can do for you some time," ' + iif(npc_shy[$npcID] > 0, '<<$npcdesc>> sa...
    } else {
      scene.text('"I kinda like the rough stuff," you reply honestly with a dirty grin. "The kind of porn where the girl gets totally manhandled by a guy with a big cock."');
      // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
      scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Rough porn', handler: (st: GameState) => {
    if (((st as any).date_ev ?? 0)?.['porn_genre'] === 'rough') {
      scene.text('"I like the rough stuff too," you reply with a grin. "I love imagining myself as one of those girls who is just getting totally manhandled by the guy."');
      // TODO-QSP: '"Maybe that''s something I can do for you some time," ' + iif(npc_shy[$npcID] > 0, '<<$npcdesc>> sa...
    } else {
      scene.text('"I kinda like the rough stuff," you reply honestly with a dirty grin. "The kind of porn where the girl gets totally manhandled by a guy with a big cock."');
      // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
      scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Creampie porn', handler: (st: GameState) => {
    scene.text('"I prefer porn that has creampies in it," you reply. "There\'s something about seeing a girl get filled and see it dribble out of her pussy that-" An involuntary shiver rolls through you and you can\'t help but grin. "It just sets me off."');
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie'  &&  ((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 0  ||  ((st as any).npc_bareback ?? 0)?.[String((st as any).npcID ?? 0)] !== 'never_use'  ||  ((st as any).npc_bareback ?? 0)?.[String((st as any).npcID ?? 0)] !== 'when_safe') {
      // TODO-QSP: '"Maybe that''s something we can do together later," ' + iif(npc_shy[$npcID] > 0, '<<$npcdesc>> says...
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
      scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Lesbian porn', handler: (st: GameState) => {
    scene.text('"I really like watching lesbian porn," you reply. "It\'s so tender and soft compared to normal porn. And girls really know how to get each other off."');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "I like lesbian porn too," <<$npcdesc>> grins.
      scene.text(`"I like lesbian porn too," ${((st as any).npcdesc ?? '')} grins.`);
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
    scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Rapeplay porn', handler: (st: GameState) => {
    scene.text('"I really like the ones where the girl is kind of forced into it," you reply. "Like the shoplifting ones or the bad student ones or, if I\'m being honest, some of the straight up rape ones. There\'s something about the idea of just <i>being taken</i> that revs my engines."');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
    scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Gangbang porn', handler: (st: GameState) => {
    scene.text('"I really like gangbang porn," you reply. "There\'s something about watching a girl get her every hole filled by cock that just-" An involuntary shiver rolls through you and you can\'t help but grin.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods back, seeming to appreciate your honesty.
    scene.text(`${((st as any).npcdesc ?? '')} nods back, seeming to appreciate your honesty.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
    { label: 'Gay porn', handler: (st: GameState) => {
    scene.text('"I like gay porn," you reply with a grin. "I love watching two muscular boys peg each other in the ass!"');
    if (((st as any).npc_insecure ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> looks disgusted.
      scene.text(`${((st as any).npcdesc ?? '')} looks disgusted.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> seems very discomfited.
      scene.text(`${((st as any).npcdesc ?? '')} seems very discomfited.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexEarlier(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Subtly', handler: (st: GameState) => {
    scene.text('"That was really great earlier," you say softly. "When we, y\'know..."');
    // TODO-QSP: dynamic text: You smile at <<$npcdesc>>, a twinkle in your eye as you bounce your eyebrows sug...
    scene.text(`You smile at ${((st as any).npcdesc ?? '')}, a twinkle in your eye as you bounce your eyebrows suggestively.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexTalkNpcReact(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'date_talk', 'sex_earlier2');
  } },
    { label: 'Explicitly', handler: (st: GameState) => {
    if (((st as any).npc_last_orgasm_count ?? 0)?.[String((st as any).npcID ?? 0)] >= 3) {
      // TODO-QSP: dynamic text: "You were amazing earlier," you grin at <<$npcdesc>>. "I came so many times! I t...
      scene.text(`"You were amazing earlier," you grin at ${((st as any).npcdesc ?? '')}. "I came so many times! I thought I was gonna lose my mind."`);
    } else {
      // TODO-QSP: dynamic text: "You were amazing earlier," you grin at <<$npcdesc>>. "You know just how to driv...
      scene.text(`"You were amazing earlier," you grin at ${((st as any).npcdesc ?? '')}. "You know just how to drive me crazy in bed."`);
    }
    // TODO-QSP: dynamic text: You smile at <<$npcdesc>>, a twinkle in your eye as you bounce your eyebrows sug...
    scene.text(`You smile at ${((st as any).npcdesc ?? '')}, a twinkle in your eye as you bounce your eyebrows suggestively.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexTalkNpcReact(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'date_talk', 'sex_earlier2');
  } },
  ]);
  scene.build();
}

function enterSexTalkNpcReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'unhappy') {
    // TODO-QSP: dynamic text: "For you, maybe," <<$npcdesc>> says unhappily.
    scene.text(`"For you, maybe," ${((s as any).npcdesc ?? '')} says unhappily.`);
  } else {
    if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'unsatisfied') {
      // TODO-QSP: dynamic text: "I''ve had better," <<$npcdesc>> says stiffly.
      scene.text(`"I've had better," ${((s as any).npcdesc ?? '')} says stiffly.`);
    } else {
      if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'okay') {
        scene.text('"Yeah it was okay," he nods wryly.');
      } else {
        if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'good') {
          scene.text('"Yeah, it was wasn\'t it?" he smiles.');
        } else {
          if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'great') {
            scene.text('"Great? More like fucking amazing!"');
          } else {
            if (((s as any).npc_last_sex_quality ?? 0)?.[String((s as any).npcID ?? 0)] === 'fucked_dry') {
              scene.text('"Great? You practically fucked me dry," he grins.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDickTalk(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrevMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'short') {
    scene.text('"I don\'t normally go on dates with guys who have small dicks," you say with a wry smirk.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexEarlier2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrevMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexCumLeak(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'We should do it again', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'sex_again'
  } },
    { label: 'You can still...', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'sex_can_still'
  } },
  ]);
  scene.build();
}

function enterSexAgain(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "We should do it again sometime," you smirk <<$date_ev[''dialogue_setting'']>>.
  scene.text(`"We should do it again sometime," you smirk ${((s as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
  ]);
  scene.build();
}

function enterSexCumLeak(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.actions([
      { label: 'Tell him about his cum leaking from you', handler: (st: GameState) => {
    qspCall(st, 'date_casual_meal', 'restaurant_talking_img');
    scene.text('"I\'m pretty sure your cum is still coming out of me," you whisper conspiratorially.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexCanStill(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCanStillBj(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: '... feel his cum leaking out', handler: (st: GameState) => {
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        scene.text('"I can still feel your cum..." you whisper, grinning. "Soaking my panties..."');
      } else {
        if (((st as any).PCloPantsShortness ?? 0) > 0) {
          // TODO-QSP: '"I can still feel your cum..." you whisper, grinning. "Dripping into my' + iif(PCloPantsShortness >...
        } else {
          // TODO-QSP: '"I can still feel your cum..." you whisper, grinning. ' + iif($date_ev['type'] = 'park_walk' or $da...
        }
      }
    } else {
      scene.text('"I can almost still feel your cum..." you whisper, grinning. "Leaking out of my pussy..."');
    }
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: '"Fuck." His eyes can''t help but flick towards your ' + iif(PCloPantsShortness ...
      scene.text('"Fuck." His eyes can\'t help but flick towards your ' + ((((st as any).PCloPantsShortness ?? 0) > 0) ? ('crotch.') : ('skirt.')) + ' "That\'s fucking hot."');
      scene.actions([
        { label: 'You do it for him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"I hoped you\'d say something like that," you smile, biting your lip with twinkling eyes.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"Yeah," you agree, biting your lip with twinkling eyes.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
      ]);
    } else {
      scene.text('"How\'s that feel?" he snickers.');
      scene.actions([
        { label: 'Wet', handler: (st: GameState) => {
    scene.text('"<i>Wet</i>," you smirk suggestively.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'Messy', handler: (st: GameState) => {
    scene.text('"Messy," you answer with a wry twist of your mouth. "Very messy."');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'Gross', handler: (st: GameState) => {
    scene.text('"If I\'m being honest?" You wrinkle your brow. "Kinda gross. I wish I had time to clean up before we came out."');
    scene.text('"That\'s what makes it hot."');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'Slimy', handler: (st: GameState) => {
    scene.text('"Slimy," you answer, rolling your hips. "Very slimy."');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanStillBj(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_last_oral ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: '... still taste his cock', handler: (st: GameState) => {
    scene.text('"I can still taste your cock on my tongue," you whisper, grinning.');
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'blowjob') {
      scene.text('"Your blowjobs are amazing," he replies, almost in a moan. "Your mouth felt so good, I thought I was going to explode."');
      scene.actions([
        { label: 'Nice to be appreciated', handler: (st: GameState) => {
    scene.text('"Always nice to be appreciated," you smile back.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'If you love what you do...', handler: (st: GameState) => {
    scene.text('"Well, if you love what you do..." you trail off, letting the unsaid words linger with your smile.');
    scene.text('From the look he gives you in response, you can almost feel his dick hardening in his pants.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        { label: 'Practice makes perfect', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'love');
    scene.text('"Well you know what they say," you smile back slyly. "Practice makes perfect."');
    scene.text('From the look he gives you in response, you can almost feel his dick hardening in his pants.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
      ]);
    } else {
      if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
        scene.text('"Is that your way of telling me I need to spend more time in the shower?" he asks wryly.');
        scene.actions([
          { label: 'You can shower together', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTalkImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'love');
    scene.text('"Is that your way of telling me I need to spend more time in the shower?" he asks wryly.');
    scene.text('"Of course. That\'s more time we can spend in there together."');
    // TODO-QSP: dynamic text: You give him a bright and innocent smile to complete the joke, which he returns ...
    scene.text(`You give him a bright and innocent smile to complete the joke, which he returns with full understanding. The two of you continuing subtextually sex bantering ${((st as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"Do I taste good?" he grins.');
        scene.actions([
          { label: 'Salty', handler: (st: GameState) => {
    scene.text('"Let\'s just say it tastes salty," you smirk.');
    qspGoto(st, 'date_talk', 'can_still_end');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanStillEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: The two of you continuing subtextually sex bantering <<$date_ev[''dialogue_setti...
  scene.text(`The two of you continuing subtextually sex bantering ${((s as any).date_ev ?? 0)?.['dialogue_setting'] ?? ''}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'continue_rate', 'improve'
  } },
  ]);
  scene.build();
}

function enterFoodRecommendations(s: GameState, scene: SceneBuilder): void {
  scene.text('"What do you recommend to eat here?" You look at the menu, scanning the items.');
  if (((s as any).npc_foodie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "You can''t go wrong here with the pelmeni," <<$npcdesc>> grins. "The first bite...
    scene.text(`"You can't go wrong here with the pelmeni," ${((s as any).npcdesc ?? '')} grins. "The first bite bursts with juicy pork and onion, the handmade dough so thin it melts away before you even chew. That perfect pinch at the top holds just enough to dip in cold smetana, tangy and rich against the steaming filling. It’s like winter comfort and childhood memories folded into one perfect little pouch."`);
    scene.actions([
      { label: '"You really like food, huh?"', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLocImg(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"You really like food, huh?"');
    if (((st as any).npc_insecure ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> blushes instantly at that, turning away from your gaze.
      scene.text(`${((st as any).npcdesc ?? '')} blushes instantly at that, turning away from your gaze.`);
      scene.text('"Er, uhm... I mean... I guess I just like the dumplings here..."');
      scene.actions([
        { label: 'Just observing', handler: (st: GameState) => {
    scene.text('"I didn\'t mean anything by it," you say quickly. "I was just noticing was all."');
    scene.text('That doesn\'t seem to reassure him.');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
        { label: 'It\'s cute', handler: (st: GameState) => {
    scene.text('"No," you say, putting your hand across the table to reassure him. "I think it\'s cute."');
    scene.text('He hesitates, but eventually gives you a shy smile in return.');
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
        { label: 'What a weirdo', handler: (st: GameState) => {
    scene.text('You don\'t say anything, though a look threatens to make its way across your face.');
    scene.text('<i>Who cares that much about food?</i> you think. <i>What a weirdo.</i>');
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah, I guess I do," <<$npcdesc>> smiles.
      scene.text(`"Yeah, I guess I do," ${((st as any).npcdesc ?? '')} smiles.`);
      qspGoto(st, 'date_talk', 'date_continue');
    }
  } },
      { label: 'That sounds good!', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"Wow, that sounds good! Maybe I\'ll try that!"');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
      { label: 'Don\'t like pelmeni...', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"I don\'t really like pelmeni," you say flatly.');
    scene.text('"... Oh."');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "It''s all pretty much fine," <<$npcdesc>> shrugs.
    scene.text(`"It's all pretty much fine," ${((s as any).npcdesc ?? '')} shrugs.`);
    qspGoto(s, 'date_talk', 'date_continue');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFoodFlirtStart(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'date_talk', qspUntranslated(s, "''food_flirt_<<rand(1'", { location: "date_talk" }), '3)>>');
  // TODO-QSP: end
  scene.build();
}

function enterFoodFlirt_1(s: GameState, scene: SceneBuilder): void {
  scene.text('"So, is it the food that\'s making your eyes sparkle, or is it just me?" you smile at him flirtatiously.');
  scene.text('"Well, let\'s just say the food is good, but you\'re the one making this a lot more delicious."');
  if (((s as any).date_ev ?? 0)?.['alcohol_order'] > 0) {
    scene.text('"Mmm, I\'m liking this. I think I might need more than just wine to handle all these compliments."');
  } else {
    scene.text('"Mmm, I\'m liking this. I think I might need something with a little more kick to handle all these compliments."');
  }
  scene.text('"Oh, don\'t worry—I have plenty more where that came from. But I think you\'re already a little intoxicating without the alcohol."');
  scene.text('"Careful, I might start thinking you\'ve got some hidden agenda with all this charm."');
  qspGoto(s, 'date_talk', 'date_continue');
  // TODO-QSP: end
  scene.build();
}

function enterFoodFlirt_2(s: GameState, scene: SceneBuilder): void {
  scene.text('"You know, I thought I\'d be the messy one today, but you\'ve got some sauce on your chin."');
  if (((s as any).sex_ev ?? 0)?.['bj_count'] > 0  &&  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
    scene.text('"Yeah," he smirks, wiping his face. "But you had my balls on your chin earlier today."');
    scene.actions([
      { label: 'Ugh', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('You groan, rolling your eyes.');
    scene.text('<i>What kind of man-child are you on a date with right now?</i>');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
      { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('You snort, his joke so childish and lame and yet somehow so charming and real in this moment.');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_face'] + ((s as any).sex_ev ?? 0)?.['cum_mouth'] > 0) {
      scene.text('"You had something else on your chin earlier today," he grins, looking at your suggestively.');
      scene.actions([
        { label: 'Not here!', handler: (st: GameState) => {
    scene.text('"Don\'t talk about that here!" you hiss, looking around to see if anybody heard.');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(st, 'fame', 'sex', ((st as any).region ?? 0), 'small');
      // TODO-QSP: 'But from the look the ' + iif(date_ev['male_waiter'] = 1, 'waiter is giving you, you''re pretty sur...
    } else {
      scene.text('Thankfully, it seems nobody did.');
    }
    qspGoto(st, 'date_talk', 'date_continue');
  } },
        { label: 'Could have some later too', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'like');
    scene.text('"Might not mind having something on it later too," you smirk, suggestively taking a messy bite of your food.');
    qspGoto(st, 'date_talk', 'date_continue');
  } },
      ]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"Oh, thanks for pointing that out. I was really trying to impress you with my eating skills."');
        scene.text('"Well, it\'s definitely impressive. You\'re making me wonder if you\'ve done this before. That looks a little too good for someone who\'s this messy."');
        scene.text('"What can I say? I\'m not afraid to get a little messy, especially when it means I get to enjoy something this delicious."');
        scene.text('He adds that last part giving you a suggestive look.');
      } else {
        scene.text('"Ah shit," he says, quickly wiping his face."');
      }
      qspGoto(s, 'date_talk', 'date_continue');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFoodFlirt_3(s: GameState, scene: SceneBuilder): void {
  scene.text('"So, is it the food that\'s making your eyes sparkle, or is it just me?" you smile at him flirtatiously.');
  scene.text('"Well, let\'s just say the food is good, but you\'re the one making this a lot more delicious."');
  if (((s as any).date_ev ?? 0)?.['alcohol_order'] > 0) {
    scene.text('"Mmm, I\'m liking this. I think I might need more than just wine to handle all these compliments."');
  } else {
    scene.text('"Mmm, I\'m liking this. I think I might need something with a little more kick to handle all these compliments."');
  }
  scene.text('"Oh, don\'t worry—I have plenty more where that came from. But I think you\'re already a little intoxicating without the alcohol."');
  scene.text('"Careful, I might start thinking you\'ve got some hidden agenda with all this charm."');
  qspGoto(s, 'date_talk', 'date_continue');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'continue_rate':
      enterContinueRate(s, scene);
      break;
    case 'loc_img':
      enterLocImg(s, scene);
      break;
    case 'talk_img':
      enterTalkImg(s, scene);
      break;
    case 'date_continue':
      enterDateContinue(s, scene);
      break;
    case 'prev_menu':
      enterPrevMenu(s, scene);
      break;
    case 'talk_menu':
      enterTalkMenu(s, scene);
      break;
    case 'rand_topic':
      enterRandTopic(s, scene);
      break;
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'weekend_talk':
      enterWeekendTalk(s, scene);
      break;
    case 'tidy_home':
      enterTidyHome(s, scene);
      break;
    case 'braless_tell':
      enterBralessTell(s, scene);
      break;
    case 'flirt_arg':
      enterFlirtArg(s, scene);
      break;
    case 'fun_talk':
      enterFunTalk(s, scene);
      break;
    case 'polite_hobby_react':
      enterPoliteHobbyReact(s, scene);
      break;
    case 'beach_fun':
      enterBeachFun(s, scene);
      break;
    case 'beach_fun_react':
      enterBeachFunReact(s, scene);
      break;
    case 'netflix_fun':
      enterNetflixFun(s, scene);
      break;
    case 'netflix_react_menu1':
      enterNetflixReactMenu1(s, scene);
      break;
    case 'netflix_watching':
      enterNetflixWatching(s, scene);
      break;
    case 'netflix_react_menu2':
      enterNetflixReactMenu2(s, scene);
      break;
    case 'netflix_fav_show':
      enterNetflixFavShow(s, scene);
      break;
    case 'netflix_womanizer':
      enterNetflixWomanizer(s, scene);
      break;
    case 'reading_fun':
      enterReadingFun(s, scene);
      break;
    case 'reading_fun_react':
      enterReadingFunReact(s, scene);
      break;
    case 'running_fun':
      enterRunningFun(s, scene);
      break;
    case 'running_fun_react':
      enterRunningFunReact(s, scene);
      break;
    case 'workout_fun':
      enterWorkoutFun(s, scene);
      break;
    case 'workout_fun_react':
      enterWorkoutFunReact(s, scene);
      break;
    case 'workout_ask':
      enterWorkoutAsk(s, scene);
      break;
    case 'workout_nerdy':
      enterWorkoutNerdy(s, scene);
      break;
    case 'gaming_fun':
      enterGamingFun(s, scene);
      break;
    case 'gaming_fun_react':
      enterGamingFunReact(s, scene);
      break;
    case 'gaming_fun_describe':
      enterGamingFunDescribe(s, scene);
      break;
    case 'been_before':
      enterBeenBefore(s, scene);
      break;
    case 'awkward_start':
      enterAwkwardStart(s, scene);
      break;
    case 'awkward_menu':
      enterAwkwardMenu(s, scene);
      break;
    case 'awkward_silence':
      enterAwkwardSilence(s, scene);
      break;
    case 'school_awkward1':
      enterSchoolAwkward1(s, scene);
      break;
    case 'awkward_menu2':
      enterAwkwardMenu2(s, scene);
      break;
    case 'awkward_relax_act':
      enterAwkwardRelaxAct(s, scene);
      break;
    case 'awkward_relax':
      enterAwkwardRelax(s, scene);
      break;
    case 'boy_talk_lead':
      enterBoyTalkLead(s, scene);
      break;
    case 'school_talk':
      enterSchoolTalk(s, scene);
      break;
    case 'school_talk2':
      enterSchoolTalk2(s, scene);
      break;
    case 'boob_look':
      enterBoobLook(s, scene);
      break;
    case 'boob_comment':
      enterBoobComment(s, scene);
      break;
    case 'braless_talk':
      enterBralessTalk(s, scene);
      break;
    case 'braless_reply_menu':
      enterBralessReplyMenu(s, scene);
      break;
    case 'braless_reply_menu2':
      enterBralessReplyMenu2(s, scene);
      break;
    case 'braless_reply_pos':
      enterBralessReplyPos(s, scene);
      break;
    case 'braless_reply_neutral':
      enterBralessReplyNeutral(s, scene);
      break;
    case 'braless_reply_neg':
      enterBralessReplyNeg(s, scene);
      break;
    case 'show_tits_ev':
      enterShowTitsEv(s, scene);
      break;
    case 'npc_flash_react':
      enterNpcFlashReact(s, scene);
      break;
    case 'sex_talk_menu1':
      enterSexTalkMenu1(s, scene);
      break;
    case 'porn_talk1':
      enterPornTalk1(s, scene);
      break;
    case 'porn_tease1':
      enterPornTease1(s, scene);
      break;
    case 'porn_what_kind1':
      enterPornWhatKind1(s, scene);
      break;
    case 'porn_what_kind2':
      enterPornWhatKind2(s, scene);
      break;
    case 'sex_earlier':
      enterSexEarlier(s, scene);
      break;
    case 'sex_talk_npc_react':
      enterSexTalkNpcReact(s, scene);
      break;
    case 'dick_talk':
      enterDickTalk(s, scene);
      break;
    case 'sex_earlier2':
      enterSexEarlier2(s, scene);
      break;
    case 'sex_again':
      enterSexAgain(s, scene);
      break;
    case 'sex_cum_leak':
      enterSexCumLeak(s, scene);
      break;
    case 'sex_can_still':
      enterSexCanStill(s, scene);
      break;
    case 'can_still_bj':
      enterCanStillBj(s, scene);
      break;
    case 'can_still_end':
      enterCanStillEnd(s, scene);
      break;
    case 'food_recommendations':
      enterFoodRecommendations(s, scene);
      break;
    case 'food_flirt_start':
      enterFoodFlirtStart(s, scene);
      break;
    case 'food_flirt_1':
      enterFoodFlirt_1(s, scene);
      break;
    case 'food_flirt_2':
      enterFoodFlirt_2(s, scene);
      break;
    case 'food_flirt_3':
      enterFoodFlirt_3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_talk: LocationDef = {
  name: 'date_talk',
  title: '"So, how\'s your weekend going?" you ask.',
  region: 'other',
  enter: enter,
};
