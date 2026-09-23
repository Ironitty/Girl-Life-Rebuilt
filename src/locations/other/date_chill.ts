import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKnockStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center>$npc_apt_hall[$npcID]</center>');
  // TODO-QSP: dynamic text: You knock on the door and <<$npcdesc>> opens up.
  scene.text(`You knock on the door and ${((s as any).npcdesc ?? '')} opens up.`);
  scene.text('"Hey, come on in."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetReady1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWithBoyStart(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center>$npc_apt_hall[$npcID]</center>');
  // TODO-QSP: dynamic text: You enter with <<$npcdesc>>.
  scene.text(`You enter with ${((s as any).npcdesc ?? '')}.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetReady1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_npcID = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).date_ev = (s as any).date_ev ?? {})['at_home'] = 1;
  ((s as any).date_ev = (s as any).date_ev ?? {})['type'] = 'home_date';
  // TODO-QSP: $date_ev[''] = 'home_date'
  ((s as any).date_ev = (s as any).date_ev ?? {})['activity_count'] = ((s as any).date_ev['activity_count'] ?? 0) + (1);
  qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterWatchingImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.img('images/shared/romance/dates/chill/.jpg');
  } else {
    if (((s as any).date_ev ?? 0)?.['get_snacks'] > 0) {
      scene.img('images/shared/romance/dates/chill/tv_snacks1.jpg');
    } else {
      scene.img('images/shared/romance/dates/chill/tv_watch1.jpg');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetReady1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetReady2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterGetReady2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_loc ?? 0) === 'player_home') {
    if (((s as any).player_home_has_living ?? 0) === 1) {
      scene.actions([
        { label: 'Settle down on the couch', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_chill', 'settle_down1'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Settle down on the bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_chill', 'settle_down1'
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['grab_drinks'] === 0) {
      scene.actions([
        { label: 'Get some drinks', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('You prowl through your fridge looking for things to drink.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['grab_snacks'] === 0) {
      scene.actions([
        { label: 'Get some snacks', handler: (st: GameState) => {
    scene.text('You prowl through your cupboards looking for things to snack on.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.actions([
        { label: 'Settle down on the bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_chill', 'settle_down1'
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Settle down on the couch', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_chill', 'settle_down1'
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['grab_drinks'] === 0) {
      scene.actions([
        { label: 'Get some drinks', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.text('<center>$npc_apt_kitchen[$npcID]</center>');
    // TODO-QSP: dynamic text: You prowl through <<$npcdesc>>''s fridge looking for things to drink.
    scene.text(`You prowl through ${((st as any).npcdesc ?? '')}'s fridge looking for things to drink.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).date_ev ?? 0)?.['grab_snacks'] === 0) {
      scene.actions([
        { label: 'Get some snacks', handler: (st: GameState) => {
    scene.text('<center>$npc_apt_kitchen[$npcID]</center>');
    // TODO-QSP: dynamic text: You prowl through <<$npcdesc>>''s cupboards looking for things to snack on.
    scene.text(`You prowl through ${((st as any).npcdesc ?? '')}'s cupboards looking for things to snack on.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrinkMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['his_drink'] === 0) {
    scene.actions([
      { label: 'Ask if he wants something', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Want me to get you something while I''m here?" you call back to <<$npcdesc>>.
    scene.text(`"Want me to get you something while I'm here?" you call back to ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Could you grab me a soda?"');
    scene.text('"Sure thing," you say, taking cold can out of the fridge.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'get_ready2');
  } },
    { label: 'Grab a soda', handler: (st: GameState) => {
    scene.text('You grab a soda and shut the fridge.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenuEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Grab a beer', handler: (st: GameState) => {
    scene.text('You grab a beer and shut the fridge.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenuEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Grab some vodka', handler: (st: GameState) => {
    scene.text('You grab some vodka and shut the fridge.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenuEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDrinkMenuEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['grab_drinks'] = 1;
  if (((s as any).date_ev ?? 0)?.['his_drink'] === 0) {
    scene.actions([
      { label: 'Ask if he wants something', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Want me to get you something while I''m here?" you call back to <<$npcdesc>>.
    scene.text(`"Want me to get you something while I'm here?" you call back to ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Could you grab me a soda?"');
    scene.text('"Sure thing," you say, taking cold can out of the fridge.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDrinkMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetSnacks(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'get_ready1');
  } },
  ]);
  scene.build();
}

function enterGetDrinks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['grab_snacks'] === 0) {
    scene.actions([
      { label: 'Get something to drink while you\'re here', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    qspCall(st, 'date_ev', 'kitchen_img');
    scene.text('You\'re already in the kitchen, might as well grab something to drink while you\'re here.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSnackMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'get_ready2');
  } },
    { label: 'Make some popcorn', handler: (st: GameState) => {
    scene.text('You make some popcorn in the microwave.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenuEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Make some sandwiches', handler: (st: GameState) => {
    scene.text('You slice some kolbasa and put it on top of bread.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenuEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSnackMenuEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).date_ev = (s as any).date_ev ?? {})['grab_snacks'] = 1;
  qspCall(s, 'stat', '');
  qspGoto(s, 'date_chill', 'get_ready2');
  // TODO-QSP: end
  scene.build();
}

function enterGetSnacks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['grab_snacks'] === 0) {
    scene.actions([
      { label: 'Get some snacks while you\'re here', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    qspCall(st, 'date_ev', 'kitchen_img');
    scene.text('You\'re already in the kitchen, might as well grab some snacks while you\'re here.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSnackMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSettleDown1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  if (((s as any).date_ev ?? 0)?.['loc'] === 'player_home') {
    if (((s as any).player_home_has_living ?? 0) === 1) {
      scene.text('You settle down on the couch.');
    } else {
      scene.text('You settle down on your bed.');
    }
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s bed
      scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s bed`);
    } else {
      // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s couch.
      scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s couch.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch a movie', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'netflix_movie1');
  } },
    { label: 'Watch a TV show', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'netflix_tv1');
  } },
  ]);
  scene.build();
}

function enterNetflixMovie1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['watching_image']
  scene.text('The two of you start watching a movie together.');
  qspGoto(s, 'date_chill', 'intermission1');
  // TODO-QSP: end
  scene.build();
}

function enterNetflixTv1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['watching_image']
  scene.text('The two of you start binge watching a TV show together.');
  qspGoto(s, 'date_chill', 'intermission1');
  // TODO-QSP: end
  scene.build();
}

function enterNetflixTv2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $date_ev['watching_image']
  scene.text('The two of you pick up where you left off, starting the next episode of the TV show you were watching together.');
  qspGoto(s, 'date_chill', 'intermission1');
  // TODO-QSP: end
  scene.build();
}

function enterIntermission1(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if ((Math.floor(Math.random() * 2) + 1) === 1  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      scene.text('"Hey, can you suck my dick?"');
      scene.actions([
        { label: 'No (annoyed)', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"No, I\'m trying to watch!" you scowl.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
        { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/television1.jpg');
    // TODO-QSP: dynamic text: "Sure," you grin, eagerly unzipping his pants and popping his <<$npc_dick_desc[$...
    scene.text(`"Sure," you grin, eagerly unzipping his pants and popping his ${((st as any).npc_dick_desc ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} cock into your mouth.`);
    scene.actions([
      { label: 'You were getting bored', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <i>This was getting boring anyways</i> you think to yourself as your lips start ...
    scene.text(`<i>This was getting boring anyways</i> you think to yourself as your lips start sliding down ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}'s length.`);
    scene.actions([
      { label: 'Blow him', goto: ['date_chill', 'chill_bj1'] },
    ]);
  } },
    ]);
  } },
        { label: 'Suck his dick (but keep watching)', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/television1.jpg');
    scene.text('"Sure," you say distractedly, unzipping his pants and bending your head down into his lap without your eyes ever leaving the screen.');
    scene.actions([
      { label: 'Blow him', goto: ['date_chill', 'chill_bj_watch1'] },
    ]);
  } },
        { label: 'Just a handy', handler: (st: GameState) => {
    scene.text('"How about a handy instead?"');
    scene.text('"Sure, that\'ll do."');
    scene.actions([
      { label: 'Jerk him', goto: ['date_chill', 'chill_hj1'] },
      { label: 'Casually jerk him (but keep watching)', goto: ['date_chill', 'chill_hj_watch1'] },
    ]);
  } },
        { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"No, not today," you say.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
        { label: 'Wait until later', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['bj_later'] = 1;
    qspCall(st, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"Can this wait until later?" you say distractedly, still watching what\'s on the screen.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Nothing sexual happens. WIP');
      scene.actions([
        { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Chill out and watch', goto: ['date_chill', 'finish_watch'] },
      { label: 'Unzip his pants', goto: ['date_chill', 'unzip_pants'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjInsist(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterUnzipPants(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('You unzip his pants and pull out his cock.');
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  ||  (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual'  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
    scene.text('He gets into it.');
    scene.actions([
      { label: 'Jerk him', goto: ['date_chill', 'chill_hj1'] },
      { label: 'Casually jerk him (but keep watching)', goto: ['date_chill', 'chill_hj_watch1'] },
      { label: 'Blow him', goto: ['date_chill', 'chill_bj1'] },
      { label: 'Blow him (but keep watching)', goto: ['date_chill', 'chill_bj_watch1'] },
    ]);
  } else {
    scene.text('"What are you doing?"');
    scene.actions([
      { label: 'A handjob? Duh?', handler: (st: GameState) => {
    scene.text('"What\'s it look like I\'m doing?" you ask back. "I\'m giving you a handjob."');
    scene.actions([
      { label: 'Jerk him', goto: ['date_chill', 'chill_hj1'] },
      { label: 'Casually jerk him (but keep watching)', goto: ['date_chill', 'chill_hj_watch1'] },
    ]);
  } },
      { label: 'A blowjob? Duh?', handler: (st: GameState) => {
    scene.text('"What\'s it look like I\'m doing?" you ask back. "I\'m giving you a blowjob."');
    // TODO-QSP: dynamic text: And then you wrap your lips around his <<$npc_dick_desc[$npcID]>> cock.
    scene.text(`And then you wrap your lips around his ${((st as any).npc_dick_desc ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} cock.`);
    scene.actions([
      { label: 'Blow him', goto: ['date_chill', 'chill_bj1'] },
      { label: 'Blow him (but keep watching)', goto: ['date_chill', 'chill_bj_watch1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChillHj1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Seriously jerk him', handler: (st: GameState) => {
    ((st as any).date_ev = (st as any).date_ev ?? {})['sex_pos'] = 'handjob';
    qspCall(st, 'arousal', 'hj', 10);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/handjob/kotovhj.jpg');
    // TODO-QSP: dynamic text: All attention turns to <<$npcdesc>>''s cock as you seriously jerk him off. What ...
    scene.text(`All attention turns to ${((st as any).npcdesc ?? '')}'s cock as you seriously jerk him off. What you put on the TV is still playing, but neither of you are watching anymore.`);
    scene.actions([
      { label: 'Try to make him cum', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'chill_cum');
  } },
      { label: 'Just have sex already', goto: ['date_chill', 'go_to_sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterChillHjWatch1(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['sex_pos'] = 'handjob';
  qspCall(s, 'arousal', 'hj', 10);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/handjob/television1.mp4');
  // TODO-QSP: dynamic text: You gently jerk <<$npcdesc>>''s cock while you both continue watching the show.
  scene.text(`You gently jerk ${((s as any).npcdesc ?? '')}'s cock while you both continue watching the show.`);
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'chill_cum');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChillBj1(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['sex_pos'] = 'blowjob';
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  scene.img('images/bj45.mp4');
  // TODO-QSP: dynamic text: You blow <<$npc_usedname[$npcID]>> seriously.
  scene.text(`You blow ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} seriously.`);
  // TODO-QSP: dynamic text: All attention turns to <<$npcdesc>>''s cock as you seriously loudly and noisily ...
  scene.text(`All attention turns to ${((s as any).npcdesc ?? '')}'s cock as you seriously loudly and noisily scuk him off. What you put on the TV is still playing, but neither of you are watching anymore.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to make him cum', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'chill_cum');
  } },
    { label: 'Just have sex already', goto: ['date_chill', 'go_to_sex'] },
  ]);
  scene.build();
}

function enterChillBjWatch1(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_ev = (s as any).date_ev ?? {})['sex_pos'] = 'blowjob';
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/television1.jpg');
  // TODO-QSP: dynamic text: You blow <<$npc_usedname[$npcID]>> while continuing to watch.
  scene.text(`You blow ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} while continuing to watch.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'date_chill', 'chill_cum');
  } },
  ]);
  scene.build();
}

function enterChillCum(s: GameState, scene: SceneBuilder): void {
  scene.text('He\'s gonna cum.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him with your hand', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'hand', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    scene.img('images/shared/sex/cum/handjob/hand1.jpg');
    scene.text('You finish him with your hand.');
    scene.actions([
      { label: 'Clean your hand with a tissue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'date_ev', 'living_room_img');
    scene.text('You get a tissue and wipe yourself up.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
      { label: 'Lick your fingers clean', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/lick_fingers.jpg');
    scene.text('You lick your fingers clean of the cum and swallow it.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
    ]);
  } },
    { label: 'Finish him with your mouth', handler: (st: GameState) => {
    scene.text('You make him cum in your mouth.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumSpitMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumSwallowMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCumSwallowMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow nonchalantly', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_swallow_nonch'] },
    { label: 'Swallow happily', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_swallow_happy'] },
    { label: 'Swallow reluctantly', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_swallow_reluc'] },
    { label: 'Swallow uncomfortably', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_swallow_choke'] },
  ]);
  scene.build();
}

function enterCumSwallowNonch(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/swallow4.mp4');
  scene.text('You take it in stride and casually gulp down each load of cum as it appears in your mouth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSwallowHappy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/swallow4.mp4');
  // TODO-QSP: dynamic text: You happily gulp down <<$npc_usedname[$npcID]>>''s cum, sucking every last drop ...
  scene.text(`You happily gulp down ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}'s cum, sucking every last drop out of his cock.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSwallowReluc(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/swallow4.mp4');
  scene.text('You\'d really rather not, but not knowing what else to do, you gulp down the bitter liquid.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSwallowChoke(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/gag3.mp4');
  scene.text('The bitter liquid hitting the back of your throat takes you by surprise and you have to choke it down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSpitMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit into a tissue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_spit_tissue'] },
    { label: 'Spit into a cup', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_spit_cup'] },
    { label: 'Spit into the sink', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_spit_sink'] },
    { label: 'Spit onto the floor', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
  }, goto: ['date_chill', 'cum_spit_floor'] },
  ]);
  scene.build();
}

function enterCumSpitTissue(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('You grab a tissue from a nearby table and spit his cum into it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSpitCup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('You grab a cup from a nearby table and spit his cum into it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSpitSink(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  // TODO-QSP: dynamic text: You quickly get up and hurry over to the bathroom and spit <<$npc_usedname[$npcI...
  scene.text(`You quickly get up and hurry over to the bathroom and spit ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}'s cum into the sink. After a quick rinse and a wipe, you head back and curl up on the couch next to him like nothing happened.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
  ]);
  scene.build();
}

function enterCumSpitFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('You spit his cum onto the floor.');
  if (((s as any).date_ev ?? 0)?.['loc'] === 'player_home') {
    scene.text('He gives you a look but doesn\'t say anything.');
  } else {
    qspCall(s, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"Ew, why are you spitting it on my floor?"');
    scene.actions([
      { label: 'What else am I supposed to do?', handler: (st: GameState) => {
    scene.text('"What else am I supposed to do with it?" you shrug.');
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
      scene.text('"Swallow it?"');
      scene.actions([
        { label: 'Oh. Right.', handler: (st: GameState) => {
    scene.text('"Oh." You blink. "Right."');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
        { label: 'Ew', handler: (st: GameState) => {
    scene.text('"Ew." You wrinkle your nose. "Yeah, that wasn\'t gonna happen."');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
        { label: 'Didn\'t feel like it', handler: (st: GameState) => {
    scene.text('"Eh. Didn\'t feel like it today."');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"The sink? A tissue? A cup?"');
      scene.actions([
        { label: 'Oh. Right.', handler: (st: GameState) => {
    scene.text('"Oh." You blink. "Right."');
    scene.text('You didn\'t even consider that.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
        { label: 'Too lazy', handler: (st: GameState) => {
    scene.text('"Eh. All those sound like a hassle. It was easier to do this."');
    scene.text('"Not easier to clean it up later," he mutters.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Bathroom\'s too far', handler: (st: GameState) => {
    scene.text('"Bathroom\'s too far," you shrug.');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
      { label: 'Payback', handler: (st: GameState) => {
    scene.text('"Payback," you smirk wickedly. "You cum in my mouth, I spit it on the floor."');
    scene.actions([
      { label: 'Continue', goto: ['date_chill', 'finish_watch'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinishWatch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('You finish watching the show or movie.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDateEndStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'date_after', 'after_date');
  // TODO-QSP: end
  scene.build();
}

function enterGoToSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_ev', 'living_room_img');
  scene.text('Oh forget it. You just need to have sex already.');
  ((s as any).date_ev = (s as any).date_ev ?? {})['npc_home_sex'] = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_start', 'initiate_pre', 'npcID', 'npc_home'] },
  ]);
  scene.build();
}

function enterDateEndStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).date_count_chill = (s as any).date_count_chill ?? {})[String((s as any).npcID ?? 0)] = ((s as any).date_count_chill[String((s as any).npcID ?? 0)] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'knock_start':
      enterKnockStart(s, scene);
      break;
    case 'with_boy_start':
      enterWithBoyStart(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'watching_image':
      enterWatchingImage(s, scene);
      break;
    case 'get_ready1':
      enterGetReady1(s, scene);
      break;
    case 'get_ready2':
      enterGetReady2(s, scene);
      break;
    case 'drink_menu':
      enterDrinkMenu(s, scene);
      break;
    case 'drink_menu_end':
      enterDrinkMenuEnd(s, scene);
      break;
    case 'get_drinks':
      enterGetDrinks(s, scene);
      break;
    case 'snack_menu':
      enterSnackMenu(s, scene);
      break;
    case 'snack_menu_end':
      enterSnackMenuEnd(s, scene);
      break;
    case 'get_snacks':
      enterGetSnacks(s, scene);
      break;
    case 'settle_down1':
      enterSettleDown1(s, scene);
      break;
    case 'netflix_movie1':
      enterNetflixMovie1(s, scene);
      break;
    case 'netflix_tv1':
      enterNetflixTv1(s, scene);
      break;
    case 'netflix_tv2':
      enterNetflixTv2(s, scene);
      break;
    case 'intermission1':
      enterIntermission1(s, scene);
      break;
    case 'bj_insist':
      enterBjInsist(s, scene);
      break;
    case 'unzip_pants':
      enterUnzipPants(s, scene);
      break;
    case 'chill_hj1':
      enterChillHj1(s, scene);
      break;
    case 'chill_hj_watch1':
      enterChillHjWatch1(s, scene);
      break;
    case 'chill_bj1':
      enterChillBj1(s, scene);
      break;
    case 'chill_bj_watch1':
      enterChillBjWatch1(s, scene);
      break;
    case 'chill_cum':
      enterChillCum(s, scene);
      break;
    case 'cum_swallow_menu':
      enterCumSwallowMenu(s, scene);
      break;
    case 'cum_swallow_nonch':
      enterCumSwallowNonch(s, scene);
      break;
    case 'cum_swallow_happy':
      enterCumSwallowHappy(s, scene);
      break;
    case 'cum_swallow_reluc':
      enterCumSwallowReluc(s, scene);
      break;
    case 'cum_swallow_choke':
      enterCumSwallowChoke(s, scene);
      break;
    case 'cum_spit_menu':
      enterCumSpitMenu(s, scene);
      break;
    case 'cum_spit_tissue':
      enterCumSpitTissue(s, scene);
      break;
    case 'cum_spit_cup':
      enterCumSpitCup(s, scene);
      break;
    case 'cum_spit_sink':
      enterCumSpitSink(s, scene);
      break;
    case 'cum_spit_floor':
      enterCumSpitFloor(s, scene);
      break;
    case 'finish_watch':
      enterFinishWatch(s, scene);
      break;
    case 'go_to_sex':
      enterGoToSex(s, scene);
      break;
    case 'date_end_stats':
      enterDateEndStats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_chill: LocationDef = {
  name: 'date_chill',
  title: '<center>$npc_apt_hall[$npcID]</center>',
  region: 'other',
  enter: enter,
};
