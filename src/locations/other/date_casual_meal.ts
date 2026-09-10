import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'together') {
    qspCall(s, 'date_casual_meal', 'init');
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_together'] }]);
  } else {
    qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
    qspCall(s, 'date_casual_meal', 'init');
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_separate'] }]);
    qspCall(s, 'date_casual_meal', 'init');
    scene.actions([{ label: 'Continue', goto: ['date_casual_meal', 'arrive_together'] }]);
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
    (s as any).date_ev['type'] = 'dinner_date';
    // TODO-QSP: $date_ev[] = 'dinner_date'
    (s as any).date_ev['type'] = 'dinner_date';
    // TODO-QSP: $date_ev[] = 'dinner_date'
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
    (s as any).money = ((s as any).money ?? 0) - (((s as any).date_ev ?? 0)?.['meal_cost'] * 2);
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterPayCard(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'split') {
    (s as any).karta = ((s as any).karta ?? 0) - (((s as any).date_ev ?? 0)?.['meal_cost']);
  } else {
    (s as any).karta = ((s as any).karta ?? 0) - (((s as any).date_ev ?? 0)?.['meal_cost'] * 2);
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
    scene.img('images/shared/romance/dates/casual_dining/city_exterior.jpg');
    scene.img('images/shared/romance/dates/casual_dining/city_exterior.jpg');
    if (((s as any).date_ev ?? 0)?.['rest_int_bug'] === 0) {
      // TODO-QSP: msg 'Please let hornguy6 know that $region is neither "pav" nor "city".'
    }
    (s as any).date_ev['rest_int_bug'] = 1;
  }
  scene.build();
}

function enterRestaurauntIntImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/pavlovsk/park/cafe/caffe_del_parco_in.jpg');
  } else {
    scene.img('images/shared/romance/dates/casual_dining/city_interior.jpg');
    scene.img('images/shared/romance/dates/casual_dining/city_interior.jpg');
    if (((s as any).date_ev ?? 0)?.['rest_int_bug'] === 0) {
      // TODO-QSP: msg 'Please let hornguy6 know that $region is neither "pav" nor "city".'
    }
    (s as any).date_ev['rest_int_bug'] = 1;
  }
  scene.build();
}

function enterRestaurantTalkingImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] === 1) {
    scene.img('images/shared/romance/dates/casual_dining/talking1.jpg');
  } else {
    scene.img('images/shared/romance/dates/casual_dining/talking2.jpg');
    scene.img('images/shared/romance/dates/casual_dining/talking1.jpg');
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
      scene.text('"I don\'t know, I\'ve seen some pretty hot uniforms around. I\'m pretty sure it\'s the shriveled dicks who designed it that way," he snickers. "And their dicks aren\'t so shriveled."');
      scene.text('"Shut up," you mutter and stomp into the cafe.');
      scene.text('"Jeez, jeez. Don\'t get your panties in a knot. Come on, you want to just go on our date?"');
      scene.text('"Yeah, fine," you mumble and follow him inside.');
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    }
  } },
        ]);
      } else {
        // TODO-QSP: xgt 'date_casual_meal', 'style_slut_reply'
      }
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
    scene.actions([
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
      qspCall(s, 'date_funcs', 'date_rate', 'like');
      scene.text('"Well, biologically, girls are meant to start trying to have kids around your age."');
      scene.text('"You saying you want to knock me up?"');
      scene.text('"No. I\'m saying <i>you</i> want <i>me</i> to knock you up."');
      scene.text('"Pervert." You stick your tongue out at him teasingly and he takes it in the good humor which it was intended.');
      scene.text('"Want to head in?"');
      scene.text('"Yeah, let\'s."');
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
      scene.actions([
        { label: 'Get a table', handler: (st: GameState) => {
    // TODO-QSP: gt $date_ev['cont_loc'], $date_ev['cont_arg']
  } },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
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
