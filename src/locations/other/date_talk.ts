import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterContinueRate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (5);
  if (((s as any).locArgs?.[1] ?? 0) === 'improve'  ||  ((s as any).locArgs?.[1] ?? 0) === 'worsen') {
    qspCall(s, 'date_funcs', 'date_mood', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'flash') {
    // TODO-QSP: xgt $date_ev['cont_loc'], $date_ev['flash_arg']
  } else {
    // TODO-QSP: xgt $date_ev['cont_loc'], $date_ev['cont_arg']
  }
  scene.build();
}

function enterLocImg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $date_ev['loc'], $date_ev['loc_img']
  scene.build();
}

function enterTalkImg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs $date_ev['loc'], $date_ev['talk_img']
  scene.build();
}

function enterDateContinue(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
  ]);
  scene.build();
}

function enterPrevMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', $date_ev['prev_arg']
  } },
  ]);
  scene.build();
}

function enterTalkMenu(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['prev_arg'] = 'talk_menu';
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
  scene.build();
}

function enterRandTopic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_boy_talk', 'boy_topics');
  if (((s as any).date_ev ?? 0)?.['fun_talk'] === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_talk', 'fun_talk'"
  }
  if (Object.keys((s as any).date_ev_topics ?? {}).length === 0) {
    qspCall(s, 'date_talk', 'date_continue');
  }
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_talk', 'prev_menu');
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
  qspCall(s, 'date_talk', 'talk_img');
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
    qspCall(s, 'date_funcs', 'date_rate', 'like');
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
  scene.build();
}

function enterTidyHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_talk', 'talk_img');
  if (((s as any).date_ev ?? 0)?.['home_date'] === 1) {
    scene.text('"Your place is really well kept, you know that?"');
    // TODO-QSP: dynamic text: Looking around, everything is very neat and orderly. Little, if any dust is on t...
    scene.text(`Looking around, everything is very neat and orderly. Little, if any dust is on the floor or the surfaces, and all of ${((s as any).npcdesc ?? 0)}'s belongings are tidy and placed with care.`);
  } else {
    scene.text('"I couldn\'t help but notice, your place is really well kept," you remark. "Really well organized and clean. Not a speck of dust anywhere."');
  }
  if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "What are you trying to say about me?" <<$npcdesc>> frowns.
    scene.text(`"What are you trying to say about me?" ${((s as any).npcdesc ?? 0)} frowns.`);
  } else {
    scene.text('"A clean environment helps foster a clean mind," he shrugs. "It bothers me to see things out of order."');
    // TODO-QSP: dynamic text: "I think I just like vacuuming," he chuckles. "I like the sound it makes, the li...
    scene.text(`"I think I just like vacuuming," he chuckles. "I like the sound it makes, the little scratching noises of all the things getting picked up into the bag. And then the rest comes because I need everything else to be tidy to fit the vacuum head in!" ${((s as any).npcdesc ?? 0)} finishes, laughing openly.`);
    scene.actions([
      { label: 'You like it', goto: ['placeholder', ''] },
    ]);
  }
  scene.build();
}

function enterBralessTell(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['braless_tell'] = 1;
  qspCall(s, 'date_talk', 'talk_img');
  // TODO-QSP: dynamic text: "Hey, wanna hear a secret?" you ask <<$npcdesc>>.
  scene.text(`"Hey, wanna hear a secret?" you ask ${((s as any).npcdesc ?? 0)}.`);
  scene.text('"What?"');
  scene.text('You lean to whisper in his ear. "I\'m not wearing a bra right now."');
  if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"Yeah?" He looks at you again, gaze dropping down towards your chest. "Prove it."');
    scene.actions([
      { label: 'Nope', handler: (st: GameState) => {
    if (((s as any).PCloThinness ?? 0) === 6) {
      // TODO-QSP: dynamic text: "What's to prove?" you grin, knowing your top is already completely transparent ...
      scene.text(`"What's to prove?" you grin, knowing your top is already completely transparent and your ${((s as any).pcdesc_breasts ?? 0)} breasts are already on display for all to see.`);
      scene.text('"Maybe I just want a better view."');
      scene.text('"I think you\'ve already got a spectacular one."');
    } else {
      scene.text('"I think you can tell without further proof," you smirk, letting the outline of your nipples poke through the fabric of your top on their own.');
      scene.text('"Sorry, you\'ll just have to dream on it," you smirk.');
      scene.text('"Tease."');
      scene.text('"Guilty."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'Flash him', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    scene.text('"Sure."');
    if ((!((s as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: Without hesitation, you pull up your top giving <<$npcdesc>> an unobstructed loo...
      scene.text(`Without hesitation, you pull up your top giving ${((s as any).npcdesc ?? 0)} an unobstructed look at ${((s as any).pcdesc_breasts ?? 0)} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your top back down.`);
    } else {
      // TODO-QSP: dynamic text: Without hesitation, you pull your dress down giving <<$npcdesc>> an unobstructed...
      scene.text(`Without hesitation, you pull your dress down giving ${((s as any).npcdesc ?? 0)} an unobstructed look at ${((s as any).pcdesc_breasts ?? 0)} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your clothes back into place.`);
    }
    scene.text('"See? No bra."');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>> is grinning now. "I think I saw that really well."
    scene.text(`"Yeah..." ${((s as any).npcdesc ?? 0)} is grinning now. "I think I saw that really well."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "You know just what to say to excited a guy." <<$npcdesc>> grins at you, unable ...
      scene.text(`"You know just what to say to excited a guy." ${((s as any).npcdesc ?? 0)} grins at you, unable to help but take glances at your chest with the knowledge that there's one less layer between it and him.`);
    } else {
      // TODO-QSP: dynamic text: "Woah... That's so hot." <<$npcdesc>> is staring at your chest now, as if he is ...
      scene.text(`"Woah... That's so hot." ${((s as any).npcdesc ?? 0)} is staring at your chest now, as if he is trying to x-ray vision through your clothes.`);
      // TODO-QSP: dynamic text: <<$npcdesc>> blinks in surprise, unable to help himself from quickly glancing do...
      scene.text(`${((s as any).npcdesc ?? 0)} blinks in surprise, unable to help himself from quickly glancing down and back up again.`);
      scene.text('"Oh. Wow. Uhm...');
    }
    scene.actions([
      { label: 'Just wanted you to know', handler: (st: GameState) => {
    scene.text('"Just thought you should know that," you smirk.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
      { label: 'Prove it', handler: (st: GameState) => {
    // TODO-QSP: gs $date_ev['loc'], 'flash_mov'
    scene.text('"Here, let me show you."');
    if ((!((s as any).PCloDress ?? 0))) {
      // TODO-QSP: dynamic text: Before <<$npcdesc>> can say anything, you pull up your top, giving him an unobst...
      scene.text(`Before ${((s as any).npcdesc ?? 0)} can say anything, you pull up your top, giving him an unobstructed look at ${((s as any).pcdesc_breasts ?? 0)} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your top back down.`);
    } else {
      // TODO-QSP: dynamic text: Before <<$npcdesc>> can say anything, you pull your dress down, giving him an un...
      scene.text(`Before ${((s as any).npcdesc ?? 0)} can say anything, you pull your dress down, giving him an unobstructed look at ${((s as any).pcdesc_breasts ?? 0)} breasts. You let the view linger for a few seconds while you give him a lusty look before tugging your clothes back into place.`);
    }
    scene.text('"See? No bra."');
    // TODO-QSP: dynamic text: "Yeah..." <<$npcdesc>> is grinning now. "I think I saw that really well."
    scene.text(`"Yeah..." ${((s as any).npcdesc ?? 0)} is grinning now. "I think I saw that really well."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_talk', 'continue_rate', 'improve'
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFlirtArg(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['flirt_type'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).date_ev ?? 0)?.['flirt_type'] === 'romantically') {
    // TODO-QSP: dynamic text: Your voice diminishes to a hushed whisper, murmuring to <<$npcdesc>> in the quie...
    scene.text(`Your voice diminishes to a hushed whisper, murmuring to ${((s as any).npcdesc ?? 0)} in the quiet of the room as you stare into his eyes.`);
    // TODO-QSP: $flirt_rand1[] = '"You make me feel special... Like nobody ever has before..."'
  } else {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      if ((Math.floor(Math.random() * 1) + 1) === 1) {
        // TODO-QSP: $flirt_rand1[] = '"Can I tell you a secret?"'
        // TODO-QSP: $flirt_rand2[] = '"What''s that?"'
        // TODO-QSP: $flirt_rand3[] = '"I always wear underwear that match my socks." One of his eyebrows goes up at that...
      }
    }
    if (((s as any).date_ev ?? 0)?.['flirt_type'] === 'corny') {
    }
    (s as any).flirt_num = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('((s as any).flirt_rand1 ?? 0)')-1);
  }
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
    default:
      enterContinueRate(s, scene);
      break;
  }
}

export const date_talk: LocationDef = {
  name: 'date_talk',
  title: '"So, how\'s your weekend going?" you ask.',
  region: 'other',
  enter: enter,
};
