import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'together') {
    qspCall(s, 'date_casual_meal', 'init');
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_together'] }]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'separate') {
      qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
      qspCall(s, 'date_casual_meal', 'init');
      scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_separate'] }]);
    } else {
      qspCall(s, 'date_casual_meal', 'init');
      scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_together'] }]);
    }
  }
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['at_home'] = 0;
  (s as any).date_ev['loc'] = 'date_casual_meal';
  (s as any).date_ev['loc_img'] = 'restauraunt_int_img';
  (s as any).date_ev['talk_img'] = 'restaurant_talking_img';
  (s as any).date_ev['genre'] = 'meal';
  (s as any).date_ev['public'] = 1;
  if (((s as any).region ?? 0) === 'pav') {
    qspCall(s, 'date_funcs', 'first_time', 'del_parco');
  } else {
    qspCall(s, 'date_funcs', 'first_time', 'city_diner');
  }
  if (((s as any).hour ?? 0) <= 14) {
    (s as any).date_ev['type'] = 'lunch_date';
    // TODO-QSP: $date_ev[] = 'lunch_date'
  } else {
    if (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 20) {
      (s as any).date_ev['type'] = 'dinner_date';
      // TODO-QSP: $date_ev[] = 'dinner_date'
    } else {
      (s as any).date_ev['type'] = 'dinner_date';
      // TODO-QSP: $date_ev[] = 'dinner_date'
    }
  }
  (s as any).date_ev['meal_cost'] = Math.floor(Math.random() * 251) + 250;
  (s as any).date_ev['activity_count'] = ((s as any).date_ev['activity_count'] ?? 0) + (1);
  scene.build();
}

function enterFlashImg(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'flash');
  if ((!((s as any).PCloDress ?? 0))) {
    scene.img('images/shared/romance/dates/casual_dining/show_tits1.jpg');
  } else {
    scene.img('images/shared/romance/dates/casual_dining/show_tits_d2.jpg');
  }
  scene.build();
}

function enterFlashMov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_oneline', 'flash');
  if ((!((s as any).PCloDress ?? 0))) {
    if (((s as any).date_ev ?? 0)?.['dialogue_setting'] === 'between bites of food') {
      scene.img('images/shared/romance/dates/casual_dining/show_tits1.mp4');
    } else {
      scene.img('images/shared/romance/dates/casual_dining/show_tits1.jpg');
    }
  } else {
    scene.img('images/shared/romance/dates/casual_dining/show_tits_d2.jpg');
  }
  scene.build();
}

function enterPayCash(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'split') {
    (s as any).money = ((s as any).money ?? 0) - (((s as any).date_ev ?? 0)?.['meal_cost']);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pc') {
      (s as any).money = ((s as any).money ?? 0) - (((s as any).date_ev ?? {})?.['meal_cost'] * 2);
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterPayCard(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'split') {
    (s as any).karta = ((s as any).karta ?? 0) - (((s as any).date_ev ?? 0)?.['meal_cost']);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pc') {
      (s as any).karta = ((s as any).karta ?? 0) - (((s as any).date_ev ?? {})?.['meal_cost'] * 2);
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterRestaurauntExtImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    if (((s as any).daystage ?? 0) <= 3) {
      scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_night.jpg');
    }
  } else {
    if (((s as any).region ?? 0) === 'city') {
      scene.img('images/shared/romance/dates/casual_dining/city_exterior.jpg');
    } else {
      scene.img('images/shared/romance/dates/casual_dining/city_exterior.jpg');
      if (((s as any).date_ev ?? 0)?.['rest_int_bug'] === 0) {
        // TODO-QSP: msg 'Please let hornguy6 know that $region is neither "pav" nor "city".'
      }
      (s as any).date_ev['rest_int_bug'] = 1;
    }
  }
  scene.build();
}

function enterRestaurauntIntImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_in.jpg');
  } else {
    if (((s as any).region ?? 0) === 'city') {
      scene.img('images/shared/romance/dates/casual_dining/city_interior.jpg');
    } else {
      scene.img('images/shared/romance/dates/casual_dining/city_interior.jpg');
      if (((s as any).date_ev ?? 0)?.['rest_int_bug'] === 0) {
        // TODO-QSP: msg 'Please let hornguy6 know that $region is neither "pav" nor "city".'
      }
      (s as any).date_ev['rest_int_bug'] = 1;
    }
  }
  scene.build();
}

function enterRestaurantTalkingImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.img('images/shared/romance/dates/casual_dining/talking1.jpg');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 2) {
      scene.img('images/shared/romance/dates/casual_dining/talking2.jpg');
    } else {
      scene.img('images/shared/romance/dates/casual_dining/talking1.jpg');
    }
  }
  scene.build();
}

function enterArriveSeparate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restauraunt_ext_img');
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'sit_down');
  if ((Math.floor(Math.random() * 4) + 0) + ((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
    // TODO-QSP: dynamic text: As you walk up to the restaurant, you find <<$npcdesc>> already there waiting fo...
    scene.text(`As you walk up to the restaurant, you find ${((s as any).npcdesc ?? 0)} already there waiting for you.`);
    scene.actions([
      { label: 'Say hi', handler: (st: GameState) => {
    scene.text('"Hi!" you say cheerfully. "You weren\'t waiting long, were you?"');
    scene.text('"No, not at all," he smiles back. "Let\'s head in."');
    scene.text('You nod and follow him inside.');
    scene.actions([
      { label: 'Get a table', goto: ['date_casual_meal', 'sit_down'] },
    ]);
  } },
      { label: 'Kiss his cheek', handler: (st: GameState) => {
    scene.text('"Hey," you say cheerfully, quickly moving over to peck him on the cheek. "You weren\'t waiting long, were you?"');
    scene.text('"No, not at all," he smiles back. "Let\'s head in."');
    scene.text('You nod and follow him inside.');
    scene.actions([
      { label: 'Get a table', goto: ['date_casual_meal', 'sit_down'] },
    ]);
  } },
      { label: 'Hug him', handler: (st: GameState) => {
    scene.text('"Hey," you say cheerfully, wrapping your arms around him for a quick hug and squeeze. "You weren\'t waiting long, were you?"');
    scene.text('"No, not at all," he smiles back. "Let\'s head in."');
    scene.text('You nod and follow him inside.');
    scene.actions([
      { label: 'Get a table', goto: ['date_casual_meal', 'sit_down'] },
    ]);
  } },
      { label: 'Kiss him deeply', handler: (st: GameState) => {
    scene.text('"Hey." You skip further words and kiss him deeply, letting your tongue wander into his mouth. It\'s several moments before you separate with a grin. "You weren\'t waiting long, were you?"');
    scene.text('"No, not at all," he smiles back, wiping his mouth a little. "Let\'s head in."');
    scene.text('You nod and follow him inside.');
    scene.actions([
      { label: 'Get a table', goto: ['date_casual_meal', 'sit_down'] },
    ]);
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 3) + 1) + ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
      (s as any).date_ev['npc_late'] = 1;
      // TODO-QSP: dynamic text: You walk over to where you said you'd meet but <<$npcdesc>> isn't here yet.
      scene.text(`You walk over to where you said you'd meet but ${((s as any).npcdesc ?? 0)} isn't here yet.`);
      if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
        scene.actions([
          { label: 'Have a smoke', goto: ['date_casual_meal', 'wait_date_smoke'] },
          { label: 'Smoke and phone', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_casual_meal', 'wait_date_smoke', 'phone'
  } },
        ]);
      }
      scene.actions([
        { label: 'Scroll your phone', goto: ['date_casual_meal', 'wait_date_phone'] },
      ]);
    }
  }
  scene.build();
}

function enterWaitDatePhone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/misc/wait_phone.jpg');
  (s as any).temp = Math.floor(Math.random() * 11) + 5;
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp ?? 0));
  qspCall(s, 'stat', '');
  if (((s as any).temp ?? 0) <= 10) {
    scene.text('With nothing else to do, you figure you can pass the time on your phone. So you do, tapping away on your feeds, checking all your favorite sites, and doing all your typical doom-scrolling.');
    // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> shows up.
    scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
    // TODO-QSP: dynamic text: With nothing else to do, you figure you can pass the time on your phone. So you ...
    scene.text(`With nothing else to do, you figure you can pass the time on your phone. So you do, tapping away on your feeds, checking all your favorite sites, and doing all your typical doom-scrolling. And once you've done all that... ${((s as any).npcdesc ?? 0)} still hasn't shown up...?`);
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    scene.img('images/shared/misc/light_ciga.jpg');
    qspCall(s, 'drugs', 'smoke');
    scene.text('With a sigh, you put your phone away and pull out a cigarette to smoke instead.');
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_smoke.jpg');
    // TODO-QSP: dynamic text: You precede your next sigh with a deep drag on your fresh light, letting out a b...
    scene.text(`You precede your next sigh with a deep drag on your fresh light, letting out a breath of smoke. Puff after puff, it's not until you get towards the end of your cigarette, ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
    ]);
  } },
        { label: 'Have a smoke and keep scrolling', handler: (st: GameState) => {
    scene.img('images/shared/misc/light_ciga.jpg');
    qspCall(s, 'drugs', 'smoke');
    scene.text('With a sigh, you dig into your bag and pull out a cigarette to smoke.');
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_smoke_phone.jpg');
    // TODO-QSP: dynamic text: You precede your next sigh with a deep drag on your fresh light, letting out a b...
    scene.text(`You precede your next sigh with a deep drag on your fresh light, letting out a breath of smoke. Puff after puff, feed after feed scrolled, it's not until you get towards the end of your cigarette, ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just keep scrolling', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<i>Whatever...</i>');
    // TODO-QSP: dynamic text: You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and...
    scene.text(`You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
    ]);
  }
  scene.build();
}

function enterWaitDateSmoke(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = Math.floor(Math.random() * 11) + 5;
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp ?? 0));
  qspCall(s, 'drugs', 'smoke');
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 'phone') {
    scene.img('images/shared/misc/light_ciga.jpg');
    scene.text('You dig into your bag and pull out your phone and a cigarette to go with it.');
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_smoke_phone.jpg');
    if (((s as any).temp ?? 0) <= 10) {
      // TODO-QSP: dynamic text: You browse all the feeds on your phone while puffing away on your cigarette, blo...
      scene.text(`You browse all the feeds on your phone while puffing away on your cigarette, blowing smoke with every swipe, tap, and scroll. As your cigarette is reaching the end of its life, ${((s as any).npcdesc ?? 0)} shows up.`);
      // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
      // TODO-QSP: dynamic text: You browse all the feeds on your phone while puffing away on your cigarette, blo...
      scene.text(`You browse all the feeds on your phone while puffing away on your cigarette, blowing smoke with every swipe, tap, and scroll. As your cigarette is reaching the end of its life... ${((s as any).npcdesc ?? 0)} still hasn't shown up...?`);
      if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
        scene.actions([
          { label: 'Have another smoke', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/misc/wait_smoke_phone.jpg');
    // TODO-QSP: dynamic text: With a sigh, you grind your last stub under your toe and pull out a fresh cigare...
    scene.text(`With a sigh, you grind your last stub under your toe and pull out a fresh cigarette from the pack. You keep scrolling. And smoking. And scrolling and smoking and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
          { label: 'Put your phone away for another smoke', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/misc/wait_smoke.jpg');
    scene.text('With a sigh, you grind your last stub under your toe and put your phone away, taking the opportunity to pull out a fresh cigarette from the pack.');
    // TODO-QSP: dynamic text: Your next sigh turns into a breath of smoke after a deep drag on your fresh ligh...
    scene.text(`Your next sigh turns into a breath of smoke after a deep drag on your fresh light. Puff after puff, it's not until you get towards the end of your cigarette, ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
        ]);
      } else {
        scene.actions([
          { label: 'And you\'re all out of smokes!', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_phone.jpg');
    scene.text('And you\'re all out of fucking cigarettes!');
    // TODO-QSP: dynamic text: With a growl, you grind the stub of your cigarette under your toe and start angr...
    scene.text(`With a growl, you grind the stub of your cigarette under your toe and start angrily doomscrolling your phone, fingers twitching in irritation for the smoke you wish could be between them. You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
        ]);
      }
      scene.actions([
        { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_phone.jpg');
    // TODO-QSP: dynamic text: With a sigh, you grind the stub of your cigarette under your toe and just stick ...
    scene.text(`With a sigh, you grind the stub of your cigarette under your toe and just stick with doomscrolling your phone. You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
      ]);
    }
  } },
    ]);
  } else {
    scene.img('images/shared/misc/light_ciga.jpg');
    scene.text('You dig into your bag and pull out a cigarette.');
    scene.actions([
      { label: 'Smoke', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_smoke.jpg');
    if (((s as any).temp ?? 0) <= 10) {
      // TODO-QSP: dynamic text: You let time pass in a haze not unlike the smoke you blow out of your lips, in t...
      scene.text(`You let time pass in a haze not unlike the smoke you blow out of your lips, in that almost meditative trance-like state that only comes from smoking a cigarette. As your smoke is just about at the end of its life, ${((s as any).npcdesc ?? 0)} shows up.`);
      // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
      // TODO-QSP: dynamic text: You let time pass in a haze not unlike the smoke you blow out of your lips, in t...
      scene.text(`You let time pass in a haze not unlike the smoke you blow out of your lips, in that almost meditative trance-like state that only comes from smoking a cigarette. Before you know it, your smoke is just about at the end of its life and... ${((s as any).npcdesc ?? 0)} still isn't here...?`);
      if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
        scene.actions([
          { label: 'Have another smoke', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/misc/wait_smoke.jpg');
    scene.text('With a sigh, you grind your last stub under your toe and pull out a fresh one from the pack.');
    // TODO-QSP: dynamic text: Your next sigh turns into a breath of smoke after a deep drag on your fresh ligh...
    scene.text(`Your next sigh turns into a breath of smoke after a deep drag on your fresh light. Puff after puff, it's not until you get towards the end of <i>this</i> cigarette that ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
          { label: 'Have another smoke and pull out your phone', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    scene.img('images/shared/misc/wait_smoke.jpg');
    // TODO-QSP: dynamic text: With a sigh, you grind your last stub under your toe and pull out a fresh cigare...
    scene.text(`With a sigh, you grind your last stub under your toe and pull out a fresh cigarette from the pack and your phone to go with it. You keep scrolling. And smoking. And scrolling and smoking and scrolling and it's not until you get towards the end of <i>this</i> cigarette that ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
        ]);
      } else {
        scene.actions([
          { label: 'And you\'re all out of smokes!', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_phone.jpg');
    scene.text('And you\'re all out of fucking cigarettes!');
    // TODO-QSP: dynamic text: With a growl, you grind the stub of your cigarette under your toe and start angr...
    scene.text(`With a growl, you grind the stub of your cigarette under your toe and start angrily doomscrolling your phone, fingers twitching in irritation for the smoke you wish could be between them. You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
        ]);
      }
      scene.actions([
        { label: 'Play with your phone', handler: (st: GameState) => {
    scene.img('images/shared/misc/wait_phone.jpg');
    // TODO-QSP: dynamic text: With a sigh, you grind the stub of your cigarette under your toe and pull out yo...
    scene.text(`With a sigh, you grind the stub of your cigarette under your toe and pull out your phone for some doomscrolling instead. You keep scrolling. And scrolling. And scrolling and scrolling and scrolling and then ${((s as any).npcdesc ?? 0)} finally shows up.`);
    // TODO-QSP: xgt 'date_casual_meal', 'wait_npc_arrive'
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterWaitNpcArrive(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"Hey, sorry I\'m late. Were you waiting long?"');
    qspCall(s, 'date_casual_meal', 'wait_not_long');
    qspCall(s, 'date_casual_meal', 'wait_youre_late');
  } else {
    scene.text('"Hey," he says, looking you over.');
    qspCall(s, 'date_casual_meal', 'clothing_react');
    qspCall(s, 'date_casual_meal', 'wait_youre_late');
  }
  scene.build();
}

function enterWaitNotLong(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Not long', handler: (st: GameState) => {
    qspCall(s, 'date_casual_meal', 'restauraunt_ext_img');
    scene.text('"No, not really," you shake your head. "Wanna head in?"');
    scene.text('"Yeah, let\'s go."');
    scene.actions([
      { label: 'Go inside', goto: ['date_casual_meal', 'arrive_together'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWaitYoureLate(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '"You\'re late!"', handler: (st: GameState) => {
    qspCall(s, 'date_casual_meal', 'restauraunt_ext_img');
    // TODO-QSP: dynamic text: "Where've you been?" You give <<$npcdesc>> an irritated frown.
    scene.text(`"Where've you been?" You give ${((s as any).npcdesc ?? 0)} an irritated frown.`);
    scene.text('"Sorry, I was running late. Want to head inside?"');
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    scene.text('You take a breath and swallow your irritation.');
    scene.text('"Yeah, sure. Let\'s go."');
    scene.actions([
      { label: 'Go inside', goto: ['date_casual_meal', 'arrive_together'] },
    ]);
  } },
      { label: 'Make a fuss', handler: (st: GameState) => {
    qspCall(s, 'date_funcs', 'date_rate', 'dislike');
    scene.text('"No shit, you were running late!" You sneer at him, unwilling to let this go. "Where the fuck were you?!"');
    scene.text('"Does it matter?! Come on, let\'s just go inside."');
    scene.text('"Fine!" You practically spit the word at him and stomp into the cafe.');
    scene.actions([
      { label: 'Go inside', goto: ['date_casual_meal', 'sit_down'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterClothingReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'clothes_thin');
  if (((s as any).PCloStyle2 ?? 0) === 4  ||  ((s as any).PCloSchool ?? 0) === 1) {
    // TODO-QSP: xgt 'date_casual_meal', 'clothing_react_school'
  }
  scene.build();
}

function enterClothingReactSchool(s: GameState, scene: SceneBuilder): void {
  scene.text('"You wear your school uniform on dates?"');
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6) {
    scene.actions([
      { label: 'You came from school', handler: (st: GameState) => {
    scene.text('"It\'s a school day," you shrug. "Wasn\'t gonna go home and change just to meet you."');
    scene.text('"A-huh." He seems amused. "Want to head in?"');
    scene.text('"Yeah, let\'s."');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Guys like schoolgirls (joke)', handler: (st: GameState) => {
    scene.text('"Well, I heard guys like a girl in a school uniform," you grin, fanning out your skirt. "Thought I\'d just do something special for you."');
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      scene.text('"It looks good on you." His gaze looks more than a little admiringly. "Anyways, want to head in?"');
      scene.text('"Yeah, let\'s."');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    } else {
      scene.text('"Not very flattering on you, is it?" he says, arching an eyebrow.');
      scene.actions([
        { label: 'It is what it is', handler: (st: GameState) => {
    scene.text('"Well, it\'s a schoolgirl uniform," you shrug. "Not one from a TV show or a strip club. What\'s a girl gonna do?"');
    scene.text('You flash him a smile that he returns.');
    scene.text('"Want to head in?"');
    scene.text('"Yeah, let\'s."');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
        { label: 'Get offended', handler: (st: GameState) => {
    scene.text('"You got a problem with the way I look?" you snap, instantly irate.');
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_low') {
      // TODO-QSP: xgt 'date_casual_meal', 'style_slut_reply'
    } else {
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_medium') {
        if (((s as any).PCloThinness ?? 0) < 3) {
          scene.text('"I\'m just saying, it\'s kinda shapeless, don\'t you think?"');
          scene.actions([
            { label: 'It\'s a school uniform', handler: (st: GameState) => {
    scene.text('After a momentary flash of red, your anger fades.');
    // TODO-QSP: dynamic text: "It's a school uniform, <<$npcdesc>>," you say, rolling your eyes. "I don't thin...
    scene.text(`"It's a school uniform, ${((s as any).npcdesc ?? 0)}," you say, rolling your eyes. "I don't think they wanted to encourage teenage hormones when they designed it."`);
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
            { label: 'Get defensive', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "It's a school uniform, <<$npcdesc>>," you hiss. "Designed by a bunch of old bag...
    scene.text(`"It's a school uniform, ${((s as any).npcdesc ?? 0)}," you hiss. "Designed by a bunch of old bags with dried up pussies and shriveled dicks. Of course it's shapeless."`);
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"I don\'t know, I\'ve seen some pretty hot uniforms around. Maybe you just didn\'t look very hard."');
      scene.text('"Shut up," you mutter and stomp into the cafe.');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"I don\'t know, I\'ve seen some pretty hot uniforms around. I\'m pretty sure it\'s the shriveled dicks who designed it that way," he snickers. "And their dicks aren\'t so shriveled."');
        scene.text('"Shut up," you mutter and stomp into the cafe.');
        scene.actions([
          { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
        ]);
      } else {
        scene.text('"Jeez, jeez. Don\'t get your panties in a knot. Come on, you want to just go on our date?"');
        scene.text('"Yeah, fine," you mumble and follow him inside.');
        scene.actions([
          { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
        ]);
      }
    }
  } },
          ]);
        } else {
          if (((s as any).PCloThinness ?? 0) > 4) {
            // TODO-QSP: xgt 'date_casual_meal', 'style_slut_reply'
          }
        }
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'clothes_thin_high') {
          scene.text('"Could be sexier is all I\'m saying."');
          scene.actions([
            { label: 'It\'s a school uniform', handler: (st: GameState) => {
    scene.text('After a momentary flash of red, your anger fades.');
    // TODO-QSP: dynamic text: "It's a school uniform, <<$npcdesc>>," you say, rolling your eyes. "I don't thin...
    scene.text(`"It's a school uniform, ${((s as any).npcdesc ?? 0)}," you say, rolling your eyes. "I don't think they wanted to encourage teenage hormones when they designed it."`);
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
            { label: 'It\'s called modesty', handler: (st: GameState) => {
    scene.text('"It\'s called modesty,"  you sneer. "I don\'t exactly want to go around school with everybody thinking I\'m a slut!"');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "Nothing wrong with that," <<$npcdesc>> grins. "Sluts are hot."
      scene.text(`"Nothing wrong with that," ${((s as any).npcdesc ?? 0)} grins. "Sluts are hot."`);
      scene.text('"Pig."');
      scene.text('You stick your tongue out at him as you head inside.');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    } else {
      scene.text('"I didn\'t say you should dress like a slut. Just saying you could do with something sexier."');
      scene.text('"Whatever."');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    }
  } },
            { label: 'Maybe he can buy you one', handler: (st: GameState) => {
    scene.text('After a momentary flash of red, your anger fades, turning to mischief.');
    scene.text('"Well if it bothers you that much, maybe you can buy me a sexier one." You smirk at him, swaggering your hips as you step into the restaurant.');
    scene.text('"Maybe I will..." he mutters as you go past.');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
          ]);
        }
      }
    }
  } },
        { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"Maybe I just wanted to make you look like a perv," you grin. "What other kind of creep would go on a date with a schoolgirl?"');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      qspCall(s, 'date_funcs', 'date_rate', 'like');
      scene.text('"Well, if she\'s a <i>hot</i> schoolgirl..."');
      scene.text('"You saying I\'m hot?"');
      scene.text('"All teen girls are hot."');
      scene.text('"Pervert." You stick your tongue out at him teasingly and he takes it in the good humor which it was intended.');
      scene.text('"Want to head in?"');
      scene.text('"Yeah, let\'s."');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
        qspCall(s, 'date_funcs', 'date_rate', 'like');
        scene.text('"Well, biologically, girls are meant to start trying to have kids around your age."');
        scene.text('"You saying you want to knock me up?"');
        scene.text('"No. I\'m saying <i>you</i> want <i>me</i> to knock you up."');
        scene.text('"Pervert." You stick your tongue out at him teasingly and he takes it in the good humor which it was intended.');
        scene.text('"Want to head in?"');
        scene.text('"Yeah, let\'s."');
        scene.actions([
          { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
        ]);
      } else {
        if (((s as any).npc_insecure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          qspCall(s, 'date_funcs', 'date_rate', 'dislike');
          // TODO-QSP: dynamic text: <<$npcdesc>> reddens immediately.
          scene.text(`${((s as any).npcdesc ?? 0)} reddens immediately.`);
          scene.text('"What the fuck is wrong with you? You think I want to fuck kids or something?!"');
          scene.text('"Woah," you startle backwards, blinking in surprise. "It\'s just a joke. Jeez."');
          scene.text('"There\'s nothing funny about shit like that," he scowls, "Not trying to go to jail or get on some fucking registry. Are you coming in or what?"');
          // TODO-QSP: dynamic text: "Yeah, I'm coming in..." You follow <<$npcdesc>> inside, noting clearly he doesn...
          scene.text(`"Yeah, I'm coming in..." You follow ${((s as any).npcdesc ?? 0)} inside, noting clearly he doesn't feel like holding the door open for you. It was just a joke...`);
          scene.actions([
            { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
          ]);
        } else {
          scene.text('"Must be a really handsome one if schoolgirls like you want to go on a date with me," he grins back. "Come on, let\'s get a table."');
          scene.actions([
            { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
          ]);
        }
      }
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStyleSlutReply(s: GameState, scene: SceneBuilder): void {
  scene.text('"I\'m just saying, it\'s kind of revealing, don\'t you think? Makes you look like a slut."');
  scene.actions([
    { label: 'He has a point', handler: (st: GameState) => {
    qspCall(s, 'date_funcs', 'date_rate', 'like');
    scene.text('After a momentary flash of red, your anger fades.');
    if (((s as any).PCloThinness ?? 0) >= 3  &&  ((s as any).PCloThinness ?? 0) <= 4) {
      scene.text('"Well..." You take a look down at yourself and your outfit, the way that it hugs your curves and leaves little imagination to the shape of your body...');
    } else {
      if (((s as any).braworntype ?? 0) !== 'none') {
        scene.text('"Well..." You take a look down at yourself and your outfit, with how thin it is and leaving him with a pretty good outline of your bra...');
      } else {
        scene.text('"Well..." You take a look down at yourself and your outfit, with how thin it is and even showing the outline of your nipples...');
      }
    }
    scene.text('You can\'t help but flash him a bashful grin. "I guess you have a bit of a point."');
    scene.text('He grins back. "You want to head inside?"');
    scene.text('"Yeah, let\'s."');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
    { label: '"You think I look like a slut?!"', handler: (st: GameState) => {
    qspCall(s, 'date_funcs', 'date_rate', 'dislike');
    qspCall(s, 'date_casual_meal', 'restauraunt_ext_img');
    scene.text('You gape at him for a moment, almost speechless. Almost.');
    scene.text('"You think I look like a slut?!"');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).PCloThinness ?? 0) >= 3  &&  ((s as any).PCloThinness ?? 0) <= 4  &&  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== 'clothes_thin_medium') {
        scene.text('"Have you looked at yourself in a mirror?" he scoffs back. "I can see the entire shape of your body. Not really leaving much to the imagination there, are you?"');
      } else {
        if (((s as any).braworntype ?? 0) !== 'none') {
          scene.text('"Have you looked at yourself in a mirror?" he scoffs back. "I can see the entire shape of your body. I can even see your bra. Not really leaving much to the imagination there, are you?"');
        } else {
          scene.text('"Have you looked at yourself in a mirror?" he scoffs back. "Who else other than a slut not only walks around without a bra but also wears an outfit that makes it obvious?"');
        }
      }
      scene.actions([
        { label: 'It\'s called fashion!', handler: (st: GameState) => {
    scene.text('"It\'s called fashion, you uncultured swine!"');
    scene.text('"Look, do we have to fight about this?" he sighs. "Don\'t you just want to go inside?"');
    scene.text('"Fine!"');
    scene.text('You practically spit the word at him and stomp into the cafe.');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
        { label: 'I did this for you!', handler: (st: GameState) => {
    scene.text('"I\'m dressed like this for you! I thought you\'d like it!"');
    // TODO-QSP: dynamic text: "You thought I wanted you to dress like a slut?" <<$npcdesc>> rolls his eyes dra...
    scene.text(`"You thought I wanted you to dress like a slut?" ${((s as any).npcdesc ?? 0)} rolls his eyes dramatically before taking a deep breath and a sigh. "Look, do we have to fight about this? Don't you just want to go inside?"`);
    scene.text('"Fine!"');
    scene.text('You practically spit the word at him and stomp into the cafe.');
    scene.actions([
      { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Look, do we have to fight about this?" he sighs. "Don\'t you just want to go inside?"');
      scene.text('"Fine!"');
      scene.text('You practically spit the word at him and stomp into the cafe.');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterArriveTogether(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (15);
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'sit_down');
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  // TODO-QSP: dynamic text: You and <<$npcdesc>> walk up to the restaurant together.
  scene.text(`You and ${((s as any).npcdesc ?? 0)} walk up to the restaurant together.`);
  scene.actions([
    { label: 'Get a table', goto: ['date_casual_meal', 'sit_down'] },
  ]);
  scene.build();
}

function enterSitDown(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'menu_read');
  (s as any).date_ev['flash_arg'] = 'awkward_flash';
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  if (((s as any).region ?? 0) === 'pav') {
    scene.text('It\'s a small town cafe in the park that many teenagers often come to.');
  } else {
    scene.text('It\'s a locally run cafe, the likes of which you can find in practically any city in the country.');
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_romantic ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('Someone comes by to lead the two of you to a table and says, "Here are some menus. I\'ll give you a minute."');
    // TODO-QSP: dynamic text: When you move to take your seat, <<$npcdesc>> pulls out your chair for you.
    scene.text(`When you move to take your seat, ${((s as any).npcdesc ?? 0)} pulls out your chair for you.`);
    scene.actions([
      { label: 'Thanks', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Thank you!" You award <<$npcdesc>> with a smile as he pushes your chair as you ...
    scene.text(`"Thank you!" You award ${((s as any).npcdesc ?? 0)} with a smile as he pushes your chair as you sit.`);
    scene.text('"My pleasure," he replies with a smile of his own and takes his seat.');
    scene.actions([
      { label: 'Chit chat', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  } },
    ]);
  } },
      { label: 'A gentleman!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Oh! What a gentleman!" you coo, awarding <<$npcdesc>> with a smile as he pushes...
    scene.text(`"Oh! What a gentleman!" you coo, awarding ${((s as any).npcdesc ?? 0)} with a smile as he pushes your chair as you sit. "And they said chivalry was dead."`);
    scene.text('"Only as dead as men make it," he replies with a smile of his own and takes his seat.');
    qspCall(s, 'date_funcs', 'date_rate', 'like');
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  } },
    ]);
  } else {
    scene.text('Someone comes by to lead the two of you to a table and you both take your seats.');
    scene.text('Here are some menus. I\'ll give you a minute," they say before departing.');
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  }
  scene.build();
}

function enterMenuRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'food_menu');
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('You realize you ought to look through the menu before the waiter arrives.');
    // TODO-QSP: dynamic text: "Get whatever you want," <<$npcdesc>> says. "I'm paying."
    scene.text(`"Get whatever you want," ${((s as any).npcdesc ?? 0)} says. "I'm paying."`);
    scene.actions([
      { label: 'Thank him', handler: (st: GameState) => {
    (s as any).date_ev['npc_pay_meal'] = 1;
    scene.text('"Thanks!" You smile sweetly back at him.');
    // TODO-QSP: xgt 'date_casual_meal', 'food_menu'
  } },
      { label: 'Insist you pay', handler: (st: GameState) => {
    if (((s as any).npc_paid_date_last ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"No, no!" you say. "You paid for it last time! Let me pay this time!"');
    } else {
      scene.text('"No, no, you don\'t need to do that," you say. "Let me pay for it."');
    }
    if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      (s as any).date_ev['npc_pay_meal'] = 1;
      scene.text('"I insist," he grins, brooking no argument from you.');
    } else {
      (s as any).date_ev['pc_pay_meal'] = 1;
      scene.text('"Okay," he smiles and agrees to let you pay.');
    }
    // TODO-QSP: xgt 'date_casual_meal', 'food_menu'
  } },
    ]);
  } else {
    scene.text('You realize you ought to look through the menu before the waiter arrives. Though, it occurs to you that you haven\'t really talked about how you\'re going to handle the bill...');
    scene.actions([
      { label: 'Don\'t talk about payment', handler: (st: GameState) => {
    scene.text('Oh well. You don\'t bring up the money and neither does he.');
    scene.text('Something to figure out later.');
    // TODO-QSP: xgt 'date_casual_meal', 'food_menu'
  } },
      { label: 'Suggest splitting the bill', handler: (st: GameState) => {
    qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
    (s as any).date_ev['split_meal'] = 1;
    scene.text('"We\'re splitting the bill, right?" you ask.');
    scene.text('"Yeah," he nods in agreement.');
    // TODO-QSP: xgt 'date_casual_meal', 'food_menu'
  } },
    ]);
  }
  scene.build();
}

function enterNpcOrder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_diet ?? 0)?.[String((s as any).npcID ?? 0)] === 'vegetarian') {
    (s as any).date_ev['npc_order'] = Math.floor(Math.random() * 2) + 1;
  } else {
    if (((s as any).npc_diet ?? 0)?.[String((s as any).npcID ?? 0)] === 'protein') {
      (s as any).date_ev['npc_order'] = 3;
    } else {
      (s as any).date_ev['npc_order'] = Math.floor(Math.random() * 6) + 2;
    }
  }
  if (((s as any).date_ev ?? 0)?.['npc_order'] === 1) {
    if (((s as any).date_ev ?? 0)?.['food_order'] === 'salad') {
      // TODO-QSP: dynamic text: "Make that two salads," he says, handing both of your menus back to the <<$date_...
      scene.text(`"Make that two salads," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
    } else {
      // TODO-QSP: dynamic text: "And I'll have the salad," he says, handing both of your menus back to the <<$da...
      scene.text(`"And I'll have the salad," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
    }
  } else {
    if (((s as any).date_ev ?? 0)?.['npc_order'] === 2) {
      if (((s as any).date_ev ?? 0)?.['food_order'] === 'borscht') {
        // TODO-QSP: dynamic text: "I'll have the Borscht soup as well," he says, handing both of your menus back t...
        scene.text(`"I'll have the Borscht soup as well," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
      } else {
        // TODO-QSP: dynamic text: "And I'll have the Borscht soup," he says, handing both of your menus back to th...
        scene.text(`"And I'll have the Borscht soup," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
      }
    } else {
      if (((s as any).date_ev ?? 0)?.['npc_order'] === 3) {
        if (((s as any).date_ev ?? 0)?.['food_order'] === 'stroganoff') {
          // TODO-QSP: dynamic text: "I'll have the stroganoff too," he says, handing both of your menus back to the ...
          scene.text(`"I'll have the stroganoff too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
        } else {
          // TODO-QSP: dynamic text: "And I'll have the stroganoff," he says, handing both of your menus back to the ...
          scene.text(`"And I'll have the stroganoff," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
        }
      } else {
        if (((s as any).date_ev ?? 0)?.['npc_order'] === 4) {
          if (((s as any).date_ev ?? 0)?.['food_order'] === 'sandwich') {
            // TODO-QSP: dynamic text: "I'll have a sandwich too," he says, handing both of your menus back to the <<$d...
            scene.text(`"I'll have a sandwich too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
          } else {
            // TODO-QSP: dynamic text: "And I'll have a sandwich," he says, handing both of your menus back to the <<$d...
            scene.text(`"And I'll have a sandwich," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
          }
        } else {
          if (((s as any).date_ev ?? 0)?.['npc_order'] === 5) {
            if (((s as any).date_ev ?? 0)?.['food_order'] === 'burger') {
              // TODO-QSP: dynamic text: "I'll have a burger too," he says, handing both of your menus back to the <<$dat...
              scene.text(`"I'll have a burger too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
            } else {
              // TODO-QSP: dynamic text: "And I'll have a burger," he says, handing both of your menus back to the <<$dat...
              scene.text(`"And I'll have a burger," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
            }
          } else {
            if (((s as any).date_ev ?? 0)?.['npc_order'] === 6) {
              if (((s as any).date_ev ?? 0)?.['food_order'] === 'shchi') {
                // TODO-QSP: dynamic text: "I'll have some shchi soup too," he says, handing both of your menus back to the...
                scene.text(`"I'll have some shchi soup too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
              } else {
                // TODO-QSP: dynamic text: "And I'll have the shchi soup," he says, handing both of your menus back to the ...
                scene.text(`"And I'll have the shchi soup," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
              }
            } else {
              if (((s as any).date_ev ?? 0)?.['npc_order'] === 7) {
                if (((s as any).date_ev ?? 0)?.['food_order'] === 'pelmeni') {
                  // TODO-QSP: dynamic text: "I'll have some pelmeni too," he says, handing both of your menus back to the <<...
                  scene.text(`"I'll have some pelmeni too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
                } else {
                  // TODO-QSP: dynamic text: "And I'll have the pelmeni," he says, handing both of your menus back to the <<$...
                  scene.text(`"And I'll have the pelmeni," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
                }
              } else {
                if (((s as any).date_ev ?? 0)?.['food_order'] === 'pelmeni') {
                  // TODO-QSP: dynamic text: "I'll have some pelmeni too," he says, handing both of your menus back to the <<...
                  scene.text(`"I'll have some pelmeni too," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
                } else {
                  // TODO-QSP: dynamic text: "And I'll have the pelmeni," he says, handing both of your menus back to the <<$...
                  scene.text(`"And I'll have the pelmeni," he says, handing both of your menus back to the ${((s as any).date_ev ?? 0)?.['waiter']}.`);
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

function enterFoodMenu(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    (s as any).date_ev['male_waiter'] = 1;
    scene.text('After a couple more minutes, a waiter comes.');
    (s as any).date_ev['waiter'] = 'waiter';
  } else {
    (s as any).date_ev['female_waiter'] = 1;
    scene.text('After a couple more minutes, a waitress comes.');
    (s as any).date_ev['waiter'] = 'waitress';
  }
  scene.text('"What would you like to order?"');
  scene.actions([
    { label: 'Vinaigrette salad', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'salad';
    (s as any).date_ev['food_size'] = 'small';
    scene.text('"I\'ll have the salad, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'A sandwich', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'sandwich';
    (s as any).date_ev['food_size'] = 'medium';
    scene.text('"I\'ll have a sandwich, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'A burger', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'burger';
    (s as any).date_ev['food_size'] = 'large';
    scene.text('"I\'ll have a burger, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'Shchi soup', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'shchi';
    (s as any).date_ev['food_size'] = 'medium';
    scene.text('"I\'ll have the shchi, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'Borscht soup', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'borscht';
    (s as any).date_ev['food_size'] = 'medium';
    scene.text('"I\'ll have the Borscht, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'Pelmeni dumplings', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'pelmeni';
    (s as any).date_ev['food_size'] = 'medium';
    scene.text('"I\'ll have the pelmeni, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
    { label: 'Beef stroganoff', handler: (st: GameState) => {
    (s as any).date_ev['food_order'] = 'stroganoff';
    (s as any).date_ev['food_size'] = 'large';
    scene.text('"I\'ll have the stroganoff, please."');
    qspCall(s, 'date_casual_meal', 'npc_order');
    // TODO-QSP: dynamic text: "Okay, coming right up." The <<$date_ev['waiter']>> heads off to kitchen to put ...
    scene.text(`"Okay, coming right up." The ${((s as any).date_ev ?? 0)?.['waiter']} heads off to kitchen to put your orders in.`);
    scene.actions([
      { label: 'Continue', goto: ['date_casual_meal', 'pre_converse'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPreConverse(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['dialogue_setting'] = 'until your food arrives';
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'casual_conversation');
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  if ((((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_wander_eyes ?? 0)?.[String((s as any).npcID ?? 0)]) > 0  &&  ((s as any).date_ev ?? 0)?.['female_waiter'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'waitress_ogle'] }]);
  } else {
    scene.text('The waiter takes your orders and heads off to the kitchen to get them started.');
    // TODO-QSP: xgt 'date_casual_meal', 'boy_lead_pre_convo'
  }
  scene.build();
}

function enterBoyLeadPreConvo(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) < ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).date_ev ?? 0)?.['date_rating'] < 1) {
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'awkward_silence'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'casual_conversation'] }]);
  }
  scene.build();
}

function enterWaitressOgle(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  // TODO-QSP: dynamic text: The waitress gives you a polite smile, collecting your menus, and heading off to...
  scene.text(`The waitress gives you a polite smile, collecting your menus, and heading off towards the kitchen. As she turns to leave, you can't help but notice ${((s as any).npcdesc ?? 0)}'s eyes linger on her ass.`);
  scene.text('"Hey!" you snap, drawing his attention back to you. "What do you think you\'re looking at?"');
  if (((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('He starts, at least having the decency to blush that he\'s been caught.');
    scene.text('"Er, uhh, sorry..."');
  } else {
    scene.text('"Just appreciating that fine piece of ass there," he grins, and unbelievably glances back for another look. "Is it a crime to look?"');
    scene.text('"It is when you\'re on a date with me," you snarl. He just shrugs.');
  }
  // TODO-QSP: xgt 'date_talk', 'talk_menu'
  // TODO-QSP: end !}
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    scene.text('You sigh internally but otherwise ignore his wandering eyes. Boys will be boys after all.');
    scene.text('He turns back to you with a smile still on his face, either unaware or uncaring that he did anything wrong.');
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  } },
    { label: 'Frown', handler: (st: GameState) => {
    scene.text('A flash of irritation passes through you and you\'re unable to keep yourself from frowning at his blatant ogling of another woman.');
    if (((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('He turns back to you with a smile still on his face but starts when he notices your face.');
      scene.text('"Uhh, is there something wrong?"');
      qspCall(s, 'date_casual_meal', 'waitress_ogle2');
    } else {
      scene.text('He turns back to you with a smile still on his face, either unaware or uncaring that he did anything wrong.');
      // TODO-QSP: xgt 'date_talk', 'talk_menu'
    }
  } },
    { label: 'Get irritated', handler: (st: GameState) => {
    scene.text('"Hey!" you snap, drawing his attention back to you. "What do you think you\'re looking at?"');
    if (((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('He starts, at least having the decency to blush that he\'s been caught.');
      scene.text('"Er, uhh, sorry..."');
    } else {
      scene.text('"Just appreciating that fine piece of ass there," he grins, and unbelievably glances back for another look. "Is it a crime to look?"');
      scene.text('"It is when you\'re on a date with me," you snarl. He just shrugs.');
    }
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  } },
  ]);
  scene.build();
}

function enterWaitressOgle2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Grit and grin', handler: (st: GameState) => {
    scene.text('You quickly turn the frown upside down and plaster a smile onto your face.');
    scene.text('"Nothing," you say through clenched teeth. He gives a smile back, though a lot more genuine than yours.');
    // TODO-QSP: xgt 'date_talk', 'talk_menu'
  } },
  ]);
  scene.build();
}

function enterAwkwardSilence(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'eating_menu');
  (s as any).date_ev['flash_arg'] = 'awkward_flash';
  (s as any).date_ev['talk_mood'] = 'awkward';
  // TODO-QSP: xgt 'date_talk', 'awkward_start'
  scene.build();
}

function enterCasualConversation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restaurant_talking_img');
  // TODO-QSP: dynamic text: You have a pleasant chat with <<$npcdesc>> waiting for your food.
  scene.text(`You have a pleasant chat with ${((s as any).npcdesc ?? 0)} waiting for your food.`);
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'eating_menu');
  (s as any).date_ev['talk_mood'] = 'normal';
  // TODO-QSP: xgt 'date_talk', 'talk_menu'
  scene.build();
}

function enterEatingMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Your <<$date_ev['food_order']>> finally arrives, delivered by the wait staff and...
  scene.text(`Your ${((s as any).date_ev ?? 0)?.['food_order']} finally arrives, delivered by the wait staff and you both get to digging in.`);
  (s as any).date_ev['dialogue_setting'] = 'between bites of food';
  scene.actions([
    { label: 'Pick at food', goto: ['date_casual_meal', 'eating_nibble'] },
    { label: 'Eat eagerly', goto: ['date_casual_meal', 'eating_fast'] },
    { label: 'Eat the best parts first', goto: ['date_casual_meal', 'eating_best_first'] },
    { label: 'Eat the worst parts first', goto: ['date_casual_meal', 'eating_worst'] },
  ]);
  scene.build();
}

function enterEatingNibble(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['eat_method'] = 'nibble';
  qspCall(s, 'food', 'small_meal_stats');
  scene.img('images/shared/romance/dates/casual_dining/food1.jpg');
  scene.text('You take small bites just nibbling at your food, in some ways moving it around the dish more than actually eating.');
  // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo'
  scene.build();
}

function enterEatingFast(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['eat_method'] = 'fast';
  qspCall(s, 'food', 'medium_meal_stats');
  scene.img('images/shared/romance/dates/casual_dining/food1.jpg');
  // TODO-QSP: dynamic text: You eat quickly, going through your plate much faster than <<$npcdesc>> does.
  scene.text(`You eat quickly, going through your plate much faster than ${((s as any).npcdesc ?? 0)} does.`);
  // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo'
  scene.build();
}

function enterEatingBestFirst(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['eat_method'] = 'best_first';
  qspCall(s, 'food', 'medium_meal_stats');
  scene.img('images/shared/romance/dates/casual_dining/food1.jpg');
  scene.text('You dig into your food, eating the most delicious parts parts first.');
  // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo'
  scene.build();
}

function enterEatingWorst(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['eat_method'] = 'best_last';
  qspCall(s, 'food', 'medium_meal_stats');
  scene.img('images/shared/romance/dates/casual_dining/food1.jpg');
  scene.text('You dig into your food, doing your best to clean the parts you don\'t find as exciting before saving the best parts for last.');
  // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo'
  scene.build();
}

function enterMidMealConvo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_foodie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: Meanwhile, <<$npcdesc>> eats his food in a way that lets you know he's savoring ...
    scene.text(`Meanwhile, ${((s as any).npcdesc ?? 0)} eats his food in a way that lets you know he's savoring every bite.`);
  } else {
    if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Meanwhile, <<$npcdesc>> eats like a pig at a trough, bits spilling over the side...
      scene.text(`Meanwhile, ${((s as any).npcdesc ?? 0)} eats like a pig at a trough, bits spilling over the sides, very loudly, and with very little use of the napkin.`);
    } else {
      if (((s as any).npc_clean ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: Meanwhile, <<$npcdesc>> eats his food carefully, precisely measuring every porti...
        scene.text(`Meanwhile, ${((s as any).npcdesc ?? 0)} eats his food carefully, precisely measuring every portion he lifts to his lips.`);
      } else {
        // TODO-QSP: dynamic text: Meanwhile, <<$npcdesc>> eats his food about as normally as anybody can eat.
        scene.text(`Meanwhile, ${((s as any).npcdesc ?? 0)} eats his food about as normally as anybody can eat.`);
      }
    }
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    // TODO-QSP: xgt 'date_casual_meal', 'eating_commentary'
  } else {
    // TODO-QSP: xgt 'date_casual_meal', 'food_ask'
  }
  scene.build();
}

function enterEatingCommentary(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['eat_method'] === 'nibble') {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_foodie ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "What's wrong?" <<$npcdesc>> asks. "Don't like your food?"
      scene.text(`"What's wrong?" ${((s as any).npcdesc ?? 0)} asks. "Don't like your food?"`);
      scene.actions([
        { label: 'Just a slow eater', handler: (st: GameState) => {
    scene.text('"I\'m just a slow eater," you reply, twisting your mouth in a small smile.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
        { label: 'Get annoyed', handler: (st: GameState) => {
    scene.text('"Got a problem with the way I eat?" you frown irksomely.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Fuck\'s sake, I was just making an observation," he snaps back.');
      qspCall(s, 'date_funcs', 'date_rate', 'dislike');
    }
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "You sure eat slow," <<$npcdesc>> notes, watching you pick at your food.
      scene.text(`"You sure eat slow," ${((s as any).npcdesc ?? 0)} notes, watching you pick at your food.`);
      scene.actions([
        { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you shrug. "That a problem?"');
    scene.text('"Just observing," he replies noncommittally.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
      ]);
    }
    scene.actions([
      { label: 'On a diet', handler: (st: GameState) => {
    scene.text('"I\'m on a diet," you reply, twisting your mouth in a small smile. "Trying not to overeat."');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
    ]);
  } else {
    if (((s as any).date_ev ?? 0)?.['eat_method'] === 'best_first') {
      scene.text('"You eat the best part first?"');
      scene.actions([
        { label: 'Of course', handler: (st: GameState) => {
    scene.text('"Of course I do. It\'s the best part!"');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
      ]);
    } else {
      if (((s as any).date_ev ?? 0)?.['eat_method'] === 'best_last') {
        scene.text('"You eat the parts you don\'t like first?"');
        scene.actions([
          { label: 'Of course', handler: (st: GameState) => {
    scene.text('"Of course," you smirk. "Save the best for last, that\'s what they say, isn\'t it?"');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
        ]);
      } else {
        if (((s as any).date_ev ?? 0)?.['eat_method'] === 'fast') {
          scene.text('"You eat pretty fast, huh?"');
          scene.actions([
            { label: 'While it\'s hot', handler: (st: GameState) => {
    scene.text('"Gotta get it while it\'s hot, right?" you smile.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterFoodAsk(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/romance/dates/casual_dining/eating${Math.floor(Math.random() * 2) + 1}.jpg`);
  qspCall(s, 'date_talk', 'talk_img');
  // TODO-QSP: dynamic text: "How's your food?" <<$npcdesc>> asks between bites.
  scene.text(`"How's your food?" ${((s as any).npcdesc ?? 0)} asks between bites.`);
  scene.actions([
    { label: 'Bland', handler: (st: GameState) => {
    scene.text('"Bland," you say flatly, poking around at your dish with your utensil.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_foodie ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Ah, shit. That sucks. You want to order something else?"');
      scene.text('"No, it\'s fine."');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> makes a face but doesn't say anything else.
      scene.text(`${((s as any).npcdesc ?? 0)} makes a face but doesn't say anything else.`);
    }
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
    { label: 'Okay', handler: (st: GameState) => {
    scene.text('"It\'s okay," you shrug noncommittally.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
    { label: 'It\'s fine', handler: (st: GameState) => {
    scene.text('"It\'s fine," you say casually.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
    { label: 'Good', handler: (st: GameState) => {
    scene.text('"It\'s good," you smile.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
    { label: 'Orgasmic', handler: (st: GameState) => {
    scene.text('"I might cum, it\'s so good," you grin through a mouthful.');
    // TODO-QSP: xgt 'date_casual_meal', 'mid_meal_convo_menu'
  } },
  ]);
  scene.build();
}

function enterMidMealConvoMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_funcs', 'set_continue', 'date_casual_meal', 'after_meal_start');
  qspCall(s, 'date_talk', 'talk_menu');
  scene.actions([
    { label: 'Talk about life', goto: ['date_casual_meal', 'mid_meal_life_convo'] },
    { label: 'Flirt', goto: ['date_casual_meal', 'mid_meal_firt_convo'] },
  ]);
  scene.build();
}

function enterMidMealFoodConvo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/dates/casual_dining/eating1.jpg');
  scene.text('You talk about the food.');
  scene.actions([
    { label: 'Continue', goto: ['date_casual_meal', 'after_meal_start'] },
  ]);
  scene.build();
}

function enterMidMealLifeConvo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/dates/casual_dining/eating1.jpg');
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'dating'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'married') {
    scene.text('You talk about what\'s going on in your lives.');
  } else {
    scene.text('You talk about life and get to know each other.');
  }
  scene.actions([
    { label: 'Continue', goto: ['date_casual_meal', 'after_meal_start'] },
  ]);
  scene.build();
}

function enterMidMealFirtConvo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restaurant_talking_img');
  qspCall(s, 'date_talk', 'food_flirt_<<rand(1,3)>>');
  scene.build();
}

function enterAfterMealStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
  scene.text('The waiter comes and clears your dishes.');
  qspCall(s, 'date_casual_meal', 'after_meal_pay');
  scene.actions([
    { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
  ]);
  scene.build();
}

function enterAfterMealPay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['npc_pay_meal'] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> pays the bill.
    scene.text(`${((s as any).npcdesc ?? 0)} pays the bill.`);
  } else {
    if (((s as any).date_ev ?? 0)?.['pc_pay_meal'] === 1) {
      // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost'] * 2
      // TODO-QSP: dynamic text: You pay the bill of <<$func('money', 'string_price', date_ev['meal_cost'] * 2)>>
      scene.text(`You pay the bill of ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? {})?.['meal_cost'] * 2)}`);
    } else {
      if (((s as any).date_ev ?? 0)?.['split_meal'] === 1) {
        // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost']
        // TODO-QSP: dynamic text: You split the bill and end up paying <<$func('money', 'string_price', date_ev['m...
        scene.text(`You split the bill and end up paying ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? 0)?.['meal_cost'])}`);
      } else {
        scene.actions([
          { label: 'Suggest splitting the bill', handler: (st: GameState) => {
    // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost']
    qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
    (s as any).date_ev['split_meal'] = 1;
    scene.text('"We\'re splitting the bill, right?"');
    scene.text('"Yeah."');
    scene.text('The two of you split the bill, each paying half.');
    scene.actions([
      { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
    ]);
  } },
          { label: 'Offer to pay', handler: (st: GameState) => {
    qspCall(s, 'date_casual_meal', 'restauraunt_int_img');
    scene.text('"I\'ll pay," you smile.');
    scene.actions([
      { label: 'Pay with cash', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['meal_cost'] * 2, 'cash') === 0) {
      scene.text('That is, until you open up your bag and realize you don\'t have enough money to pay.');
    } else {
      // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost'] * 2, 'cash'
      // TODO-QSP: dynamic text: You dig into your bag and pay the bill of <<$func('money', 'string_price', date_...
      scene.text(`You dig into your bag and pay the bill of ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? {})?.['meal_cost'] * 2)}.`);
    }
    scene.actions([
      { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
    ]);
  } },
      { label: 'Pay with card', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('That is until you pull out your card and the waiter frowns back at you.');
      scene.text('"We only take cash here."');
      if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['meal_cost'] * 2, 'cash') === 0) {
        scene.text('"Uhh..." You look down awkwardly into your bag and see you don\'t have enough money.');
        if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          (s as any).date_ev['npc_pay_meal'] = 1;
          // TODO-QSP: dynamic text: "Don't worry, I'll pay," <<$npcdesc>> says. And he does.
          scene.text(`"Don't worry, I'll pay," ${((s as any).npcdesc ?? 0)} says. And he does.`);
          scene.actions([
            { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
          ]);
        } else {
          if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            (s as any).date_ev['npc_pay_meal'] = 1;
            // TODO-QSP: dynamic text: <<$npcdesc>> pays for the meal, grumbling the whole time.
            scene.text(`${((s as any).npcdesc ?? 0)} pays for the meal, grumbling the whole time.`);
            scene.actions([
              { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
            ]);
          } else {
            (s as any).date_ev['npc_pay_meal'] = 1;
            // TODO-QSP: dynamic text: <<$npcdesc>> ends up paying for the date.
            scene.text(`${((s as any).npcdesc ?? 0)} ends up paying for the date.`);
            scene.text('Note: need to come up with more content here.');
            scene.actions([
              { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
            ]);
          }
        }
      } else {
        // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost'] * 2, 'cash'
        scene.text('"Oh!" you chirp awkwardly and pull out cash to pay with instead.');
        scene.actions([
          { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
        ]);
      }
    } else {
      if (qspFunc(s, 'money', 'can_afford', ((s as any).date_ev ?? 0)?.['meal_cost'] * 2, 'bank') === 0) {
        scene.text('That is, until your card gets swiped and declined.');
        if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          (s as any).date_ev['npc_pay_meal'] = 1;
          // TODO-QSP: dynamic text: "Don't worry, I'll pay," <<$npcdesc>> says. And he does.
          scene.text(`"Don't worry, I'll pay," ${((s as any).npcdesc ?? 0)} says. And he does.`);
          scene.actions([
            { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
          ]);
        } else {
          if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            (s as any).date_ev['npc_pay_meal'] = 1;
            // TODO-QSP: dynamic text: <<$npcdesc>> pays for the meal, grumbling the whole time.
            scene.text(`${((s as any).npcdesc ?? 0)} pays for the meal, grumbling the whole time.`);
            scene.actions([
              { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
            ]);
          } else {
            (s as any).date_ev['npc_pay_meal'] = 1;
            // TODO-QSP: dynamic text: <<$npcdesc>> ends up paying for the date.
            scene.text(`${((s as any).npcdesc ?? 0)} ends up paying for the date.`);
            scene.text('Note: need to come up with more content here.');
            scene.actions([
              { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
            ]);
          }
        }
      } else {
        // TODO-QSP: gs 'money', 'pay', date_ev['meal_cost'] * 2, 'bank'
        // TODO-QSP: dynamic text: You pull out your card and pay the bill of <<$func('money', 'string_price', date...
        scene.text(`You pull out your card and pay the bill of ${qspFunc(s, 'money', 'string_price', ((s as any).date_ev ?? {})?.['meal_cost'] * 2)}.`);
      }
      scene.actions([
        { label: 'Leave the restaurant', goto: ['date_casual_meal', 'date_end'] },
      ]);
    }
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterAwkwardFlash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_funcs', 'flash_stats');
  qspCall(s, 'date_casual_meal', 'flash_img');
  if ((!((s as any).PCloDress ?? 0))) {
    scene.text('"Uhm..."');
    scene.text('You catch his eyes with the statement. Not knowing what else to do, you take a glance around and then pull up your top, flashing your tits.');
  } else {
    scene.text('"Uhm..."');
    scene.text('You catch his eyes with the statement. Not knowing what else to do, you take a glance around and pull down your dress, flashing your tits.');
  }
  scene.text('His eyes go wide in shock. And then...');
  scene.actions([
    { label: 'Still awkward', handler: (st: GameState) => {
    scene.text('It\'s still awkward.');
    scene.text('Well. Shit.');
    qspCall(s, 'date_casual_meal', 'eating_menu');
  } },
    { label: 'Laughter', handler: (st: GameState) => {
    qspCall(s, 'date_funcs', 'date_rate', 'like');
    scene.text('You both burst out into guffaws of laughter.');
    scene.text('"Is that always your response to awkward silences?" he asks.');
    scene.actions([
      { label: 'If it works...', handler: (st: GameState) => {
    scene.text('"If it works, it works," you shrug back.');
    qspCall(s, 'date_casual_meal', 'eating_menu');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCasualFlash(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'flash_img');
  if ((!((s as any).PCloDress ?? 0))) {
    scene.text('"Hey."');
    scene.text('You catch his eyes and take a glance around. And then pull up your top, flashing your tits.');
  } else {
    scene.text('You catch his eyes and take a glance around. And then pull down your dress, flashing your tits.');
  }
  qspCall(s, 'date_casual_meal', 'eating_menu');
  scene.build();
}

function enterDateEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_casual_meal', 'date_end_stats');
  scene.actions([{ label: 'Continue', goto: ['date_after', 'after_date'] }]);
  scene.build();
}

function enterDateEndStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    qspCall(s, 'date_funcs', 'date_tracker', 'del_parco');
  } else {
    qspCall(s, 'date_funcs', 'date_tracker', 'city_diner');
  }
  (s as any).date_count_casual_meal[String((s as any).npcID ?? 0)] = ((s as any).date_count_casual_meal[String((s as any).npcID ?? 0)] ?? 0) + (1);
  if (((s as any).date_ev ?? 0)?.['npc_pay_meal'] === 1) {
    (s as any).npc_date_pay_count[String((s as any).npcID ?? 0)] = ((s as any).npc_date_pay_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
    (s as any).npc_last_date_paid[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
  } else {
    if (((s as any).date_ev ?? 0)?.['pc_pay_meal'] === 1) {
      (s as any).pc_date_pay_count[String((s as any).npcID ?? 0)] = ((s as any).pc_date_pay_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
      (s as any).pc_last_date_paid[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'flash_img':
      enterFlashImg(s, scene);
      break;
    case 'flash_mov':
      enterFlashMov(s, scene);
      break;
    case 'pay_cash':
      enterPayCash(s, scene);
      break;
    case 'pay_card':
      enterPayCard(s, scene);
      break;
    case 'restauraunt_ext_img':
      enterRestaurauntExtImg(s, scene);
      break;
    case 'restauraunt_int_img':
      enterRestaurauntIntImg(s, scene);
      break;
    case 'restaurant_talking_img':
      enterRestaurantTalkingImg(s, scene);
      break;
    case 'arrive_separate':
      enterArriveSeparate(s, scene);
      break;
    case 'wait_date_phone':
      enterWaitDatePhone(s, scene);
      break;
    case 'wait_date_smoke':
      enterWaitDateSmoke(s, scene);
      break;
    case 'wait_npc_arrive':
      enterWaitNpcArrive(s, scene);
      break;
    case 'wait_not_long':
      enterWaitNotLong(s, scene);
      break;
    case 'wait_youre_late':
      enterWaitYoureLate(s, scene);
      break;
    case 'clothing_react':
      enterClothingReact(s, scene);
      break;
    case 'clothing_react_school':
      enterClothingReactSchool(s, scene);
      break;
    case 'style_slut_reply':
      enterStyleSlutReply(s, scene);
      break;
    case 'arrive_together':
      enterArriveTogether(s, scene);
      break;
    case 'sit_down':
      enterSitDown(s, scene);
      break;
    case 'menu_read':
      enterMenuRead(s, scene);
      break;
    case 'npc_order':
      enterNpcOrder(s, scene);
      break;
    case 'food_menu':
      enterFoodMenu(s, scene);
      break;
    case 'pre_converse':
      enterPreConverse(s, scene);
      break;
    case 'boy_lead_pre_convo':
      enterBoyLeadPreConvo(s, scene);
      break;
    case 'waitress_ogle':
      enterWaitressOgle(s, scene);
      break;
    case 'waitress_ogle2':
      enterWaitressOgle2(s, scene);
      break;
    case 'awkward_silence':
      enterAwkwardSilence(s, scene);
      break;
    case 'casual_conversation':
      enterCasualConversation(s, scene);
      break;
    case 'eating_menu':
      enterEatingMenu(s, scene);
      break;
    case 'eating_nibble':
      enterEatingNibble(s, scene);
      break;
    case 'eating_fast':
      enterEatingFast(s, scene);
      break;
    case 'eating_best_first':
      enterEatingBestFirst(s, scene);
      break;
    case 'eating_worst':
      enterEatingWorst(s, scene);
      break;
    case 'mid_meal_convo':
      enterMidMealConvo(s, scene);
      break;
    case 'eating_commentary':
      enterEatingCommentary(s, scene);
      break;
    case 'food_ask':
      enterFoodAsk(s, scene);
      break;
    case 'mid_meal_convo_menu':
      enterMidMealConvoMenu(s, scene);
      break;
    case 'mid_meal_food_convo':
      enterMidMealFoodConvo(s, scene);
      break;
    case 'mid_meal_life_convo':
      enterMidMealLifeConvo(s, scene);
      break;
    case 'mid_meal_firt_convo':
      enterMidMealFirtConvo(s, scene);
      break;
    case 'after_meal_start':
      enterAfterMealStart(s, scene);
      break;
    case 'after_meal_pay':
      enterAfterMealPay(s, scene);
      break;
    case 'awkward_flash':
      enterAwkwardFlash(s, scene);
      break;
    case 'casual_flash':
      enterCasualFlash(s, scene);
      break;
    case 'date_end':
      enterDateEnd(s, scene);
      break;
    case 'date_end_stats':
      enterDateEndStats(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const date_casual_meal: LocationDef = {
  name: 'date_casual_meal',
  title: 'With nothing else to do, you figure you can pass the time on',
  region: 'other',
  enter: enter,
};
