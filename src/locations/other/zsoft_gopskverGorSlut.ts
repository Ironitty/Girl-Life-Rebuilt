import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = ((s as any).locArgs?.[0] ?? 0);
  (s as any).loc = 'zsoft_gopskverGorSlut';
  (s as any).location_type = 'event_outdoors';
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/skver.jpg');
  (s as any).temp_rand = Math.floor(Math.random() * 11) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand = 'looking for something to suck on?';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand = 'want to get fucked?';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand = 'you look like you want to get some dicks in your ass.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand = 'want to get laid?';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand = 'want some dick in your ass?';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shultextrand = 'get down on your hands and knees!';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shultextrand = 'you look like you could really use some cock right now!';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).shultextrand = 'you look like you could use some cock.';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).shultextrand = 'turn around and show us your holes!';
  }
  if (((s as any).temp_rand ?? 0) === 9) {
    (s as any).shultextrand = 'you need some cocks? Don\'t worry, we\'ll take care of you!';
  }
  if (((s as any).temp_rand ?? 0) === 10) {
    (s as any).shultextrand = 'you look like you have this itch… we can scratch it for you. Come here!';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 11) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand2 = 'slut';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand2 = 'whore';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand2 = 'fuck-puppet';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand2 = 'plaything';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand2 = 'school slut';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shultextrand2 = '' + ((s as any).gnikname ?? 0) + '';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shultextrand2 = 'sweetie';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).shultextrand2 = 'honey';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).shultextrand2 = 'bitch';
  }
  if (((s as any).temp_rand ?? 0) === 9) {
    (s as any).shultextrand2 = 'cum dump';
  }
  if (((s as any).temp_rand ?? 0) === 10) {
    (s as any).shultextrand2 = '' + ((s as any).pcs_nickname ?? 0) + '';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand3 = 'Vasily';
    (s as any).shultextID3 = 'A11';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand3 = 'Vitek';
    (s as any).shultextID3 = 'A9';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand3 = 'Dan';
    (s as any).shultextID3 = 'A10';
  }
  ((s as any).temp_rand = (s as any).temp_rand ?? {})[1] = Math.floor(Math.random() * 3) + 0;
  if (((s as any).temp_rand ?? 0)[1] === 0) {
    (s as any).shultextrand33 = 'Vitek';
    (s as any).shultextID33 = 'A9';
  }
  if (((s as any).temp_rand ?? 0)[1] === 1) {
    (s as any).shultextrand33 = 'Dan';
    (s as any).shultextID33 = 'A10';
  }
  if (((s as any).temp_rand ?? 0)[1] === 2) {
    (s as any).shultextrand33 = 'Vasily';
    (s as any).shultextID33 = 'A11';
  }
  if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).temp_rand ?? 0)[1] === 2) {
    (s as any).shultextrand33 = 'Dan';
    (s as any).shultextID33 = 'A10';
  }
  if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).temp_rand ?? 0)[1] === 0) {
    (s as any).shultextrand33 = 'Vasily';
    (s as any).shultextID33 = 'A11';
  }
  if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).temp_rand ?? 0)[1] === 1) {
    (s as any).shultextrand33 = 'Vitek';
    (s as any).shultextID33 = 'A9';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand7 = 'ass';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand7 = 'tits';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand7 = 'breasts';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand7 = 'groin';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand7 = 'boobs';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 16) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand4 = 'The guys grin at you, and look at you greedily.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' begins to kiss you, while ' + ((s as any).shultextrand3 ?? 0) + ' fondles your ' + ((s as any).shultextrand7 ?? 0) + '.';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand4 = 'The guys all move in closer to you, and ' + ((s as any).shultextrand33 ?? 0) + ' gives you a hard slap on the ass.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' boldly puts his hand down your pants, and pulls you in closer for a kiss.';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' puts his hand on your ' + ((s as any).shultextrand7 ?? 0) + '.';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' grabs your ' + ((s as any).shultextrand7 ?? 0) + ' and pulls you closer to him.';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' undoes his pants, and pulls your hands towards his exposed cock.';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' puts his hands on your shoulders, and gently but firmly pushes you down to your knees.';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' grins at you and says: "We know a quiet place, not far from here. We took Sonia there, just the other day…"';
  }
  if (((s as any).temp_rand ?? 0) === 9) {
    (s as any).shultextrand4 = 'The boys are all staring at your ' + ((s as any).shultextrand7 ?? 0) + ' greedily, and lick their lips as they reach out for you.';
  }
  if (((s as any).temp_rand ?? 0) === 10) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' comes up to you and whispers: "Your friend Sonia always satisfies us when we want… surely you\'re not going to let us down?"';
  }
  if (((s as any).temp_rand ?? 0) === 11) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' grins at you and says: "It\'s your turn to please us, ' + ((s as any).pcs_nickname ?? 0) + '. Let\'s see if you can do better than Sonia did yesterday…"';
  }
  if (((s as any).temp_rand ?? 0) === 12) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' takes your hand and puts it on his groin with a meaningful look in his eyes.';
  }
  if (((s as any).temp_rand ?? 0) === 13) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' winks at you and pulls out his cock, and slowly begins to rub it.';
  }
  if (((s as any).temp_rand ?? 0) === 14) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' suggests they could fuck you, right here on the park bench. His friends are definitely on board with the idea, and nod in agreement.';
  }
  if (((s as any).temp_rand ?? 0) === 15) {
    (s as any).shultextrand4 = '' + ((s as any).shultextrand33 ?? 0) + ' puts his hand under your clothes, and rubs your slit roughly.';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 9) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand5 = 'You notice the guys are all staring at your groin.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand5 = 'You\'re confused, and are not sure whether you should stay.';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand5 = 'You frantically think, what should you do next?';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand5 = 'You see the burning lust in their eyes, and realize they all want you.';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand5 = 'You see the lust in their eyes, and quickly think: should you stay or leave?';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shultextrand5 = 'You flutter your eyes at the guys seductively.';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shultextrand5 = 'You don\'t care much for the taunts the guys are throwing your way, and you wonder whether you should leave while you still can.';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).shultextrand5 = 'You try to ignore the boys\' lewd comments.';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).shultextrand5 = 'You\'re used to their treatment by now, and just ignore their degrading comments.';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 7) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shultextrand6 = 'smugly';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shultextrand6 = 'with a smirk';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shultextrand6 = 'with a laugh';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shultextrand6 = 'calmly';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shultextrand6 = 'while he is rubbing his pants';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shultextrand6 = 'approvingly';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shultextrand6 = 'soothingly';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shul_text_byh = 'Have a seat! We got you covered.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shul_text_byh = 'Sit down and have a beer with us!';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shul_text_byh = 'Sure thing ' + ((s as any).pcs_nickname ?? 0) + ', here you go.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shul_text_byh = 'Relax and have a seat, we\'ve got enough beer to go around!';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shul_text_byh = 'Come on, let\'s have a drink!';
  }
  (s as any).temp_rand = Math.floor(Math.random() * 9) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).text_sveta_obol = 'seductive';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).text_sveta_obol = 'seductive';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).text_sveta_obol = 'enchanting';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).text_sveta_obol = 'charming';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).text_sveta_obol = 'attractive';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).text_sveta_obol = 'captivating';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).text_sveta_obol = 'enchanting';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).text_sveta_obol = 'pretty';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).text_sveta_obol = 'charming';
  }
  // TODO-QSP: dynamic text: <<$shultextrand3>> <<$shultextrand6>> says: "Hey <<$shultextrand2>>, <<$shultext...
  scene.text(`${((s as any).shultextrand3 || '')} ${((s as any).shultextrand6 || '')} says: "Hey ${((s as any).shultextrand2 || '')}, ${((s as any).shultextrand || '')}" ${((s as any).shultextrand4 || '')}`);
  // TODO-QSP: dynamic text: <<$shultextrand5>>
  scene.text(`${((s as any).shultextrand5 || '')}`);
  // TODO-QSP: dynamic text: You just want a nice, cold beer and decide to take the initiative. You ask them:...
  scene.text(`You just want a nice, cold beer and decide to take the initiative. You ask them: "Come on boys, why so rude? Surely you'll give a nice lady a beer?" in a playful tone, taking a seductive pose and giving them your most ${((s as any).text_sveta_obol || '')} smile. The guys look and whisper some things, but ${((s as any).shultextrand33 || '')} quickly grins and beckons you to come closer.`);
  // TODO-QSP: dynamic text: You shake your hips and teasingly lick your parched <<$pc_desc['lips']>> lips, a...
  scene.text(`You shake your hips and teasingly lick your parched ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips, and for a second you wonder if you're laying it on too thick as you approach the three guys. You can feel your mouth water when you see the cold beer they're reaching out to you though.`);
  // TODO-QSP: dynamic text: <<$shultextrand33>> says <<$shultextrand6>>: "<<$shul_text_byh>>"
  scene.text(`${((s as any).shultextrand33 || '')} says ${((s as any).shultextrand6 || '')}: "${((s as any).shul_text_byh || '')}"`);
  qspCall(s, 'willpower', 'misc', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspGoto(s, 'pav_park', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a beer with the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) < 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
  }
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) >= 6) {
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).beer_drova_text = '' + ((s as any).pcs_nickname ?? 0) + ', sweetie… we gave you all the beer you wanted. It\'s time you do something for us in return.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).beer_drova_text = 'That\'s enough beer for you, slut… it\'s time you do something for us!';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).beer_drova_text = '' + ((s as any).pcs_nickname ?? 0) + ', that\'s enough drinking. Now assume the position! It\'s time you pay us back for our hospitality.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).beer_drova_text = 'You\'ve had enough. We\'re going to fuck you now!';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).beer_drova_text = 'You got us all worked up, babe. How about you take care of that first?';
    }
    (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' says: "' + ((s as any).beer_drova_text ?? 0) + '". ' + ((s as any).shultextrand4 ?? 0) + '';
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' opens a new beer bottle, and has a couple of sips from it before he gives it to you. You don\'t mind, and are happy to just get a beer from the guys while you chat with them.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' pours out a beer into a clean glass, and gives it to you. You enjoy the drink, and chat with the guys while you drink it.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' gives you a bottle of beer. You happily take it and take sips from it, while you talk with the boys.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' hands you a beer, and you sit down on the bench next to them. For the next 15 minutes, you chat with the guys while you take sips from the beer.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' gives you a bottle of beer. After you take a few sips, he takes the bottle from you and finishes it in one big gulp.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).beer_text = '' + ((s as any).shultextrand3 ?? 0) + ' hands you an unfinished bottle of beer, and you take it from him with a smile. You eagerly drink the remainder of the bottle, while you chat with the guys.';
    }
  }
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).beer_text_bazar2 = 'says';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).beer_text_bazar2 = 'mentions';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).beer_text_bazar2 = 'mutters';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).beer_text_bazar2 = 'says dreamily';
  }
  if (((s as any).alko ?? 0) >= 6) {
    (s as any).beer_text_bazar = '';
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 12) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Would you believe it, guys? Yesterday during the break, Sonia was sucking guys off in the men\'s restroom the whole time! She was like a vacuum cleaner, swallowing every last drop of anyone who would offer her a cock! What a whore…';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Last night at the disco was fun, right? We got drunk, hung out… I hear some girl even got fucked behind the club!"';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Man, that test at school recently was brutal. Don\'t tell me you guys had the answers and didn\'t tell me!" ' + ((s as any).shultextrand3 ?? 0) + ' laughs and responds: "Dude, why didn\'t you ask? You know we always get the answers when we need them…"';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "I\'ve heard a rumour not too long ago about Christina sucking off the P.E. teacher at school, just to keep her spot on the team! Can you believe that?" ' + ((s as any).shultextrand3 ?? 0) + ' replies: "You better believe it! She\'s probably not just sucking his cock… I bet she\'s offering him all of her holes, she\'s really not that good of a runner. The fact that she\'s still representing our school says it all!"';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "They say Albina is a whore. Like, an actual prostitute. Several guys I know say they have hired her services… do you think they\'re lying? Her ass always looks great in those yoga pants!" ' + ((s as any).shultextrand3 ?? 0) + ' replies: "Dude, just put Albina out of your head! You know who her dad is… you don\'t want to get on his bad side, trust me."';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "After one drunken night, Sonia gave five guys a blowjob! Five! Funny thing… before that, she was the biggest prude in school." ' + ((s as any).shultextrand3 ?? 0) + ' laughs: "She\'s a total whore now. If you ever want to get your dick sucked, just go to the men\'s restroom during lunch break. There\'s a pretty good chance she\'ll be there, offering blowjobs to whoever happens to come in. Just the other day she offered me one, when I just wanted to take a piss! Couldn\'t say no to that though… she\'s pretty good at it!"';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "One day in the afternoon, I heard some strange noises in the cafe at the station. I looked through one of the windows in the back, and I saw ' + ((s as any).pcs_nickname ?? 0) + '\'s mother getting fucked by the cafe owner! She wanted it badly, man! I could hear her moans through the window, she was such a slut! Remind me to send you the photos later…"';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "I saw ' + ((s as any).pcs_nickname ?? 0) + '\'s mother at the market yesterday… she\'s a beautiful woman! I bet she likes to get fucked in all of her holes, just like her daughter!" ' + ((s as any).shultextrand3 ?? 0) + ' laughs at you and says: "Heh, ' + ((s as any).pcs_nickname ?? 0) + '! Maybe we can set up a gangbang at some time, and fuck you alongside her eh?"';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "I hear someone came across our friend here at the market, one day. After a bit of negotiating, Arthur left with her… and the next day at school she suddenly had a new purse! What\'s up with that?"';
    }
    if (((s as any).temp_rand ?? 0) === 9) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Hey ' + ((s as any).pcs_nickname ?? 0) + ', want to star in a movie one day? We already have a role thought out for you. In the story, you meet three young stallions here in the park. They give you several beers, and then you fuck them in all possible positions. I bet you\'d do great in the role, you\'d be a natural! What do you say?" You grin and flip the guys off while you continue drinking your beer, ignoring their laughter.';
    }
    if (((s as any).temp_rand ?? 0) === 10) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Hey guys, I hear that Christina has some slut at her disposal in the women\'s locker room, every Wednesday and Friday after gym class! We should go there one day… ' + ((s as any).pcs_nickname ?? 0) + ', can you get us in? You owe us one, for all the beers you\'ve been mooching!"';
    }
    if (((s as any).temp_rand ?? 0) === 11) {
      (s as any).beer_text_bazar = '' + ((s as any).shultextrand33 ?? 0) + ' ' + ((s as any).shultextrand6 ?? 0) + ' ' + ((s as any).beer_text_bazar2 ?? 0) + ' "Recently, I saw Sonia fucking two students at school… at the same time! She had one of their cocks in her mouth, and I\'m not sure where the other was… pussy or ass. She had neatly folded her clothes and put them on a clothes hanger, before the guys roughly pounded her. I bet she\'d give it to anyone! You know… maybe we could get her to fuck some teachers, to give us all a better grade?" ' + ((s as any).shultextrand3 ?? 0) + ' laughs as he says: "Worth a shot! My grades could use a little help…"';
    }
  }
  if (((s as any).alko ?? 0) < 6) {
    scene.img('images/locations/pavlovsk/park/gop/b\'+rand(1, 15)+\'.jpg');
  } else {
    scene.img('images/locations/pavlovsk/park/gop/drova\'+rand(1, 8)+\'.jpg');
  }
  // TODO-QSP: dynamic text: <<$beer_text>>
  scene.text(`${((s as any).beer_text || '')}`);
  scene.text('');
  // TODO-QSP: dynamic text: <<$beer_text_bazar>>
  scene.text(`${((s as any).beer_text_bazar || '')}`);
  scene.text('');
  if (((s as any).alko ?? 0)<6) {
    scene.text('Go into the bushes for a <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027zsoft_gopskverGorSlut\\u0027, \\u0027piss\\u0027); return false;">pee break</a>.');
  }
  (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).temp_rand ?? 0) <= 15  &&  ((s as any).alko ?? 0) < 6) {
    // TODO-QSP: dynamic text: The guys suggest: "Hey <<$pcs_nickname>>, show us your tits!" (<a href="exec:gt ...
    scene.text(`The guys suggest: "Hey ${((s as any).pcs_nickname || '')}, show us your tits!" (<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027zsoft_gopskverGorSlut\\u0027, \\u0027siski\\u0027); return false;">Show them.</a>)`);
  }
  qspCall(s, 'willpower', 'drink', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['pav_park', 'start'] },
    ]);
  }
  if (((s as any).alko ?? 0)<6) {
    scene.actions([
      { label: 'Drink some more with the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Strike a sexy pose', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).poza_text = 'You get into a comfortable pose, that also shows off your body to the boys.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).poza_text = 'You strike a ' + ((s as any).text_sveta_obol ?? 0) + ' pose for the guys.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).poza_text = 'You get into a comfortable pose. Without realizing it, you\'re also giving the guys a nice show.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).poza_text = 'You shift your weight and get into a different pose while you talk with the boys. Without meaning to, you end up looking quite ' + ((s as any).text_sveta_obol ?? 0) + '.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).poza_text = 'The boys have been so nice to you, you want to do something back for them and show off your body. When they look at you, you give them a cute wink.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).poza_text = 'You calmly put down your empty bottle and strike a sexy pose for the boys, hoping they\'ll give you another.';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 8) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).poza_gop_text3 = 'successfully';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).poza_gop_text3 = 'sexually';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).poza_gop_text3 = 'for fucking';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).poza_gop_text3 = 'excitingly';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).poza_gop_text3 = 'vulgarly';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).poza_gop_text3 = 'handsomely';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).poza_gop_text3 = 'good';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).poza_gop_text3 = 'perfectly';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).poza_gop_text2 = 'Looks like our ' + ((s as any).shultextrand2 ?? 0) + ' is in the mood!';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).poza_gop_text2 = 'You know, ' + ((s as any).shultextrand2 ?? 0) + '… if you keep doing that, you\'re getting us all worked up! What are you going to do about it?';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).poza_gop_text2 = 'Looks like our ' + ((s as any).shultextrand2 ?? 0) + ' is in the mood for a fucking, boys!';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).poza_gop_text2 = 'You\'re suck a slut, ' + ((s as any).pcs_nickname ?? 0) + '… you want us to fuck you, don\'t you? Don\'t worry, we\'ll take good care of you.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).poza_gop_text2 = 'Looks like her cunt is ready, guys!';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).poza_gop_text2 = 'Haha, that\'s a nice look for you slut! Just stay in that position for a while…';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).poza_gop_text = 'Well, guys… who\'s going to fuck her first?';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).poza_gop_text = 'Alright, who gets to go first this time?';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).poza_gop_text = 'You were first last time, I think it\'s my turn to use this slut first!';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).poza_gop_text = 'Dibs on her mouth… I bet she gives a great blowjob!';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).poza_gop_text = 'I want to fuck her first, guys. It\'s been a while since I got to go first on a whore.';
    }
    scene.img('images/locations/pavlovsk/park/gop/p\'+rand(1, 34)+\'.jpg');
    // TODO-QSP: dynamic text: <<$poza_text>>
    scene.text(`${((s as any).poza_text || '')}`);
    // TODO-QSP: dynamic text: <<$shultextrand3>> <<$shultextrand6>> says "<<$poza_gop_text2>>"
    scene.text(`${((s as any).shultextrand3 || '')} ${((s as any).shultextrand6 || '')} says "${((s as any).poza_gop_text2 || '')}"`);
    // TODO-QSP: dynamic text: <<$shultextrand4>>.
    scene.text(`${((s as any).shultextrand4 || '')}.`);
    // TODO-QSP: dynamic text: <<$shultextrand33>> speaks "<<$poza_gop_text>>"
    scene.text(`${((s as any).shultextrand33 || '')} speaks "${((s as any).poza_gop_text || '')}"`);
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).horny_orgazm_text2 = 'You\'re enjoying their treatment more than you probably should. You frantically rub your clit, trying to get off while you please the guys.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).horny_orgazm_text2 = 'You groan loudly while you get fucked, and beg the guy to fuck you harder.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).horny_orgazm_text2 = 'It feels great, and you beg your partner to fuck you faster.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).horny_orgazm_text2 = 'You feel close to your orgasm and groan at the guy: "I\'m not made of sugar! Stop treating me like I\'m fragile and fuck me like a man!"';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).horny_orgazm_text2 = 'You moan at your partner: "I\'m a whore… I\'m your slut, I\'ll do whatever you want… just keep fucking me!"';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).horny_orgazm_text3 = 'You were not satisfied.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).horny_orgazm_text3 = 'Unfortunately, you did not reach your orgasm on time.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).horny_orgazm_text3 = 'You couldn\'t have an orgasm.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).horny_orgazm_text3 = 'Your partner finishes before you, leaving you unsatisfied.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).horny_orgazm_text3 = 'You were close to your orgasm, but didn\'t quite get there.';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).horny_orgazm_text4 = 'You moan loudly, and cum all over his cock.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).horny_orgazm_text4 = 'Your body begins to shake violently and you shamelessly orgasm.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).horny_orgazm_text4 = 'A loud groan escapes your lips, and your cunt spasms around his cock when you cum violently.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).horny_orgazm_text4 = 'You reach your orgasm loudly, and cover up your mouth afterwards in embarrassment. Oh my…';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).horny_orgazm_text4 = 'Your breathing grows more rapid, and you experience an explosive orgasm while pleasing him.';
    }
    (s as any).temp_rand = Math.floor(Math.random() * 7) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).oral_den_text = 'His cock is not fully hard yet, and he smiles at you: "Go on slut, get it hard for me." You nod and obediently close your lips around it, giving him the best blowjob you can.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).oral_den_text = 'His cock is already fully erect, and you dutifully close your lips around it. You suppress your gag reflex as you take him all the way down your throat, drooling all over his cock while you give him a sloppy blowjob.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).oral_den_text = 'You carefully close your ' + ((s as any).pc_desc ?? 0)?.['lips'] + ' lips around his cock, and guide it down your throat while you tease the shaft with your tongue. Eventually his balls are resting on your lips, his penis, and you even manage to lick them with your tongue while his cock is down your throat. You\'re not sure whether to feel proud, or ashamed.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).oral_den_text = 'At first he lets you control the pace while you teasingly suck the head of his dick, but after a while he can\'t take your teasing any longer. He roughly grabs hold of your hair and pushes your head down onto his groan, forcing his cock down your throat. Your throat spasms around his cock while you struggle to draw breath, and after a while he realizes your troubles and pulls back enough so you can breathe through your nose while you please him with your mouth.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
    }
    // TODO-QSP: You promise you''ll do better, and obediently open your mouth again and try a bit harder.'
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).oral_den_text = 'You routinely drop to your knees, and suck his cock as instructed. Suddenly Vitek reaches down, and rubs his rough fingers over your holes. He grunts: "Listen, ' + ((s as any).pcs_nickname ?? 0) + '… ever got fucked in the ass before?"';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).oral_den_text = 'His penis is quite long, and you feel like a performing sword swallower in a circus while you do your best to not gag on it. After a while you get used to the pace, and take shallow breaths when his cock is not in your throat.';
    }
    scene.actions([
      { label: 'Suck Dan\'s cock', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A10');
    (s as any).sexpartkno = 1;
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
    (s as any).dick = 17;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
    (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/oral/1/o\'+rand(1, 25)+\'.jpg');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: <<$oral_den_text>>
    scene.text(`${((s as any).oral_den_text || '')}`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumface(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCummouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumbody(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVaginalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Suck Vasily\'s cock', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A11');
    (s as any).sexpartkno = 1;
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A11'] = 1;
    (s as any).dick = 15;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/oral/2/o\'+rand(1, 28)+\'.jpg');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: <<$oral_den_text>>
    scene.text(`${((s as any).oral_den_text || '')}`);
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcumface');
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcummouth');
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcumbody');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVaginalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Suck Vitek\'s cock', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A9');
    (s as any).sexpartkno = 1;
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A9'] = 1;
    (s as any).dick = 18;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/oral/3/o\'+rand(1, 28)+\'.jpg');
    qspCall(s, 'dinSex', 'bj_random');
    // TODO-QSP: dynamic text: <<$oral_den_text>>
    scene.text(`${((s as any).oral_den_text || '')}`);
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcumface');
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcummouth');
    qspCall(s, 'zsoft_gopskverGorSlut', 'gopcumbody');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVaginalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Serve all of them at once', handler: (st: GameState) => {
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (3);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).pcs_hairbsh = 0;
    (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 100) + 1) <= 15) {
      (s as any).temp_randB = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).temp_randB ?? 0))) {
        scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((s as any).DoubleRand || '')}.jpg`);
        // TODO-QSP: dynamic text: By now you know what they want, and humbly open your mouth as wide as possible. ...
        scene.text(`By now you know what they want, and humbly open your mouth as wide as possible. Vitek immediately guides his cock towards your mouth, and impatiently pushes it down your ${((s as any).throattipe || '')} throat.`);
        scene.text('At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well, stretching it to the limit.');
        scene.text('You know protesting would be pointless and don\'t resist, allowing the boys to use your mouth as they please. With some grunts they try to force their cocks further down your throat, and eventually they manage to get both about two thirds of the way in.');
        scene.text('The Gopniks continue to stare you down, as if you are nothing to them. Vasily jokes from the side: "I see she\'s already used to two cocks in that whore mouth of hers… I wonder if she can take a third?"');
        scene.text('Suddenly, you feel like someone\'s watching you. You open your eyes and try to look past the boys, and you see… Kolka, your brother!');
        scene.text('From the look on his eyes, he is just as amazed at how good you are with your mouth as you are yourself. Judging from his posture, he\'s not just watching… he\'s slowly fondling himself as he watches his sister get fucked in her mouth by two guys at once. What a pervert!');
        scene.text('You can\'t reprimand him right now though, as you feel a hand at the back of your head and your focus is redirected to the erections you\'re supposed to be servicing.');
        scene.text('You feel deeply embarrassed, being exposed to your brother like this… as if the shame of that video was not enough!');
        scene.text('The guys, oblivious to your train of thought, simultaneously reach orgasm, and you have to do your best to swallow their sperm as it hits the back of your throat. You cough and recoil, having a rough time swallowing it all.');
        scene.text('Several thoughts race through your head… what if he tells your mother or stepfather? What would he think of you now?');
        scene.text('You look around trying to find him again, but he is gone. You obediently suck their cocks clean, and lick the last bits of sperm off them like you always do for the guys. When they\'re finally satisfied with your performance, Dan lets go of your hair.');
      } else {
        if (((s as any).temp_randB ?? 0) === 1) {
          scene.img('images/locations/pavlovsk/park/sex/gop/bjbeerphone.jpg');
          // TODO-QSP: dynamic text: You spread your <<$pc_desc['lips']>> lips and wrap them around Vitek's cock. At ...
          scene.text(`You spread your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips and wrap them around Vitek's cock. At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well. You try to protest, but the guys just laugh at the comical sounds you make with two cocks in your mouth.`);
          // TODO-QSP: dynamic text: Suddenly Vasily pulls out his phone and begins to record a video, while he comme...
          scene.text(`Suddenly Vasily pulls out his phone and begins to record a video, while he comments on what is happening: "Hello everyone, and welcome to Pavlovsk News! Our special guest today is the one and only ${((s as any).gnikname || '')}, ${((s as any).pcs_nickname || '')}! Say hi to our viewers, ${((s as any).pcs_nickname || '')}!"`);
          scene.text('"Mvhr… mflm…" you try to say something, but the cocks in your mouth prevent you from talking. The boys firmly hold your head in place, and continue to fuck your mouth with their two cocks.');
          // TODO-QSP: dynamic text: Vasily continues: "<<$pcs_nickname>>, I've been told that you're doing this, for...
          scene.text(`Vasily continues: "${((s as any).pcs_nickname || '')}, I've been told that you're doing this, for a beer! Do you really like beer, or do you just like sucking cocks so much?"`);
          // TODO-QSP: dynamic text: Dan grabs your <<$pcs_haircolor>> <<$curly_txt>> hair in his fist, and moves you...
          scene.text(`Dan grabs your ${((s as any).pcs_haircolor || '')} ${((s as any).curly_txt || '')} hair in his fist, and moves your head so it looks like you're nodding yes.`);
          // TODO-QSP: dynamic text: Vasily piles it on some more: "There you have it, dear viewers! <<$pcs_nickname>...
          scene.text(`Vasily piles it on some more: "There you have it, dear viewers! ${((s as any).pcs_nickname || '')} ${((s as any).pcs_lastname || '')} is happily sucking three cocks, for the low low price of one beer! Where else can you find such a cheap slut?"`);
          scene.text('You try to protest and turn away from the camera, but Dan\'s firm grip on your hair makes it so you cannot move.');
          // TODO-QSP: dynamic text: You can only imagine how incredibly foolish and humiliating you must look in the...
          scene.text(`You can only imagine how incredibly foolish and humiliating you must look in the video: on your knees, with two thick cocks in your cute little mouth wedged in so tightly that they make your cheeks bulge. "Open wider, ${((s as any).shultextrand2 || '')}" Dan tells you once more before unceremoniously cramming himself further down your throat, stretching your mouth to the limit.`);
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('Your cosmetics have gotten smeared from the tears in your eyes, now running all the way down your cheeks. You have strands of saliva hanging out of your mouth, attaching your chin to your boobs.');
          } else {
            scene.text('Your eyes have gotten all teary from the rough treatment, and there are strands of saliva hanging out of your mouth, attaching your chin to your boobs.');
          }
          // TODO-QSP: dynamic text: Luckily the guys don't last long, and finish fairly quickly. They both pull out ...
          scene.text(`Luckily the guys don't last long, and finish fairly quickly. They both pull out and drop their loads on your face, and wipe their dicks on your ${((s as any).pcs_haircolor || '')} ${((s as any).curly_txt || '')} hair. They make you lick their cocks clean, but don't let go of your hair just yet.`);
          // TODO-QSP: dynamic text: Vasily grins as he tells the camera: "And that was the premiere presentation of ...
          scene.text(`Vasily grins as he tells the camera: "And that was the premiere presentation of ${((s as any).pcs_nickname || '')} ${((s as any).pcs_lastname || '')} in her very first production called "Gagging Whore"! You delivered an excellent performance ${((s as any).pcs_nickname || '')}, say hi to your mother!" He zooms in on your face, and continues to film.`);
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('By now you would rather just disappear in a large hole in the ground and never come back, but that\'s not an option. You hesitantly look at the camera, wiping the tears and cum from your eyes as you softly mutter: "Hi mother…"');
            scene.text('You desperately hope Vasily was just having a bit of fun with you, and that he\'ll delete the recording before anyone else sees it.');
          } else {
            scene.text('You say: "Guys, are you out of your minds!? If anyone sees that recording, I will never talk to you again!"');
          }
        } else {
          scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer1.jpg');
          scene.text('You refuse to have sex with them in any shape or form, just for a can of beer! The guys are furious now, especially Dan: "What!? We\'ll teach you about your place in this world, whore!"');
          scene.text('When you get up and try to run away from them, Dan slaps you hard enough to knock you off-balance, and you fall to the ground. Tears form in your eyes and you struggle to get away from the boys, but they are way too strong for you and keep you pinned to the ground.');
          scene.text('You beg and plead for them to let you go, but they ignore your pleas and pull you further into the woods after gagging you with a piece of cloth. Once they arrive at a bench that you didn\'t even know was in the park, they\'re satisfied they won\'t be disturbed and push you onto the ground. You try to plead again, but all that escapes from your mouth is a low muffled moan.');
          scene.text('The other two guys hold you firmly, while Dan slaps your ass hard. "You will learn your place, whore. We have all day."');
          scene.text('Tears stream from your eyes now, and your earlier protests have turned into little more than quiet whimpers when Dan\'s hand strikes your ass again. Vasily grins: "I think she\'s ready to cooperate now. Aren\'t you, little slut of ours?"');
          scene.text('You just want the torture to stop, and nod meekly. The guys pull you towards the bench, and pull you over it so your knees rest on the seat. Vasily moves behind the bench and pulls the gag from your mouth, replacing it with his cock.');
          // TODO-QSP: dynamic text: With your spirit broken from the rough treatment, you just open your mouth and l...
          scene.text(`With your spirit broken from the rough treatment, you just open your mouth and let him in. Vasily gladly accepts your unspoken invitation, and immediately shoves his cock deeper down your throat and begins to fuck your mouth. It's a little hard to breathe at first, but after a while you get into the rhythm and just let him fuck your throat while your saliva runs down your chin. Then he pulls his cock from your mouth and sits down on the bench, next to his friends and tells you: "Alright… that was fun, but there's no reason why we should do all the work. Your turn now, ${((s as any).pcs_nickname || '')}. Make it good."`);
        }
      }
      scene.actions([
        { label: 'Leave', goto: ['pav_park', 'start'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/park/gop/sex/group/oral/o\'+rand(1, 33)+\'.jpg');
      (s as any).temp_randC = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).temp_randC ?? 0))) {
        // TODO-QSP: dynamic text: You spread your <<$pc_desc['lips']>> lips and wrap them around Vitek's cock. At ...
        scene.text(`You spread your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips and wrap them around Vitek's cock. At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well, stretching it to the limit. You try to protest, but the guys just laugh at the comical sounds you make with two cocks in your mouth.`);
        if ((Math.floor(Math.random() * 2) + 0)) {
          scene.text('Even though it\'s difficult, you manage to take both of their erections deep inside your mouth. You sometimes tease them with your tongue.');
        } else {
          scene.text('The cocks in your mouth are making it difficult for you to breathe, and you can feel tears forming in the corners of your eyes while you do your best to not anger the guys. Choking and gasping, you do your best to service them both, but most of your efforts are focused on keeping down the compulsion to retch. It\'s becoming more and more difficult.');
        }
        scene.text('The Gopniks don\'t care about your troubles, and continue to play with your mouth. They rub their own cocks against the inside of your cheeks, and constantly give you degrading talk.');
      } else {
        if (((s as any).temp_randC ?? 0) === 1) {
          scene.text('Dan softly says to his friends: "We should make a video next time… maybe a video of her choking on a cock?" The boys laugh loudly.');
        } else {
          if (((s as any).temp_randC ?? 0) === 2) {
            // TODO-QSP: dynamic text: The boys are whispering amongst themselves, thinking you can't hear them. You pi...
            scene.text(`The boys are whispering amongst themselves, thinking you can't hear them. You pick up a few snippets of the conversation: "${((s as any).pcs_nickname || '')}? My dad told me her mother was a huge whore in her day… he said she has a mouth like a vacuum cleaner! I guess the apple doesn't fall far from the tree eh? I should thank him for that tip…" The boys laugh, and you hide your face from them so they don't see your red cheeks. You can't believe they just said that about your mother!`);
          } else {
            scene.text('The boys are whispering amongst themselves: "She\'s got a good mouth on her, sure. But what about her other holes? Next time, we have to give that a try…"');
          }
        }
      }
      qspCall(s, 'willpower', 'misc', 'resist', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Run away from them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Run away from them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    qspGoto(s, 'pav_park', 'start');
  } },
        ]);
      }
      scene.actions([
        { label: 'Let them do what they want', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A10');
    qspCall(s, 'stat', '');
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (1);
    ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
    }
    // TODO-QSP: Meanwhile the third guy has taken possession of your pussy, and soon all of your holes are filled wi...
    if (((s as any).temp_rand ?? 0) === 1) {
    }
    // TODO-QSP: You look at him apologetically and massage his prick with your fingers for a while, before guiding i...
    scene.img('images/locations/pavlovsk/park/gop/sex/group/sex/s\'+rand(1, 55)+\'.jpg');
    // TODO-QSP: dynamic text: <<$gop_grup_eba>>
    scene.text(`${((s as any).gop_grup_eba || '')}`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHornyparksex(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumfaceGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCummouthGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumassGroup(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPiss(s: GameState, scene: SceneBuilder): void {
  (s as any).r1_event_piss = qspUntranslated(s, "{", { location: "zsoft_gopskverGorSlut" });
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs'stat'
  scene.text('As you\'re sitting on your haunches peeing in the park, you hear some footsteps and a conversation behind you. You continue your business, desperately hoping they weren\'t talking about you. However, when you\'re finished and turn around, you see two police officers looking directly at you.');
  scene.img('images/locations/pavlovsk/park/gop/p.jpg');
  scene.text('They come up to you and one says: "Miss, do you know where you are? This is a public park, people go here for their enjoyment! Urinating in a public place is strictly forbidden!"');
  // TODO-QSP: dynamic text: Seeing you realize the gravity of the situation he continues: "Look, we're not l...
  scene.text(`Seeing you realize the gravity of the situation he continues: "Look, we're not looking to ruin your day. We'll give you a choice: You can come with us to the police station and pay your ${qspFunc(s, 'money', 'string_price', 500)} fine after we handle all the administrative details. Alternatively you can just pay us the ${qspFunc(s, 'money', 'string_price', 500)} right now, and we'll let you go and fill out the paperwork at the police station later. It's up to you."`);
  (s as any).r2_event_piss = qspUntranslated(s, "{", { location: "zsoft_gopskverGorSlut" });
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs'stat'
  scene.text('You excuse yourself and disappear between some brushes to pee. Just as you pull your clothes aside, you hear some branches snapping behind you.');
  scene.text('When you turn around, you see a guy. You recognize him as one of the regulars in the park. He drinks here quite often, and apparently has to pee just like you.');
  scene.text('For a second you consider getting up and leaving, but you really have to go! You decide to just ignore him and close your eyes, relaxing your muscles. While your pee freely flows out of you, you half expect the guy to move over and drag you away… but he never does. When you\'re finished, you look around to see the guy still watching you. You give him a smug smile and walk away as if nothing happened, after straightening your clothes.');
  (s as any).r3_event_piss = qspUntranslated(s, "{", { location: "zsoft_gopskverGorSlut" });
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  // TODO-QSP: gs'stat'
  scene.text('You excuse yourself and disappear between some brushes to pee. Your head is buzzing from the booze, and you quickly pull your clothes to the side. Right in time too, a warm stream of urine steadily exits your body, landing on the grass and dry leaves beneath you.');
  scene.text('The feeling is really nice, and when you finish you idly run a finger over your clitoris.');
  scene.text('Then suddenly, someone pulls you back sharply… you hope you didn\'t land in the spot where you just peed. A guy frantically covers your mouth with his hand and says in a hoarse voice: "Don\'t shout or even say a word!"');
  (s as any).r4_event_piss = qspUntranslated(s, "{", { location: "zsoft_gopskverGorSlut" });
  scene.text('You quickly choose a spot to pee between the bushes, and pull your clothes aside and squat. The beers definitely had an effect on you, and the flow starts quite easily.');
  scene.text('A powerful stream of urine comes from you, and when you moan in relief you notice a blinking light in the corner of your eye - someone is recording this!');
  scene.text('You can\'t help but blush like an embarrassed schoolgirl… but at the same time, you can\'t stop the stream and just continue to pee in front of the camera.');
  scene.text('You haven\'t felt this embarrassed in a long time… but at the same time, you\'ve never felt so empowered! Despite your shame you feel horny, and you have no doubt that your show is arousing the guy that is recording you as well.');
  scene.text('You make a bit of a show out of it, and carefully and leisurely squeeze out the last few drops of urine from your soaking pussy. You moan eagerly and wag your hips to the camera for a few seconds, before adjusting your clothes again and getting ready to leave. If only the guy had made a move… who knows what he could\'ve had you do!');
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).rand_event_piss = ((s as any).r1_event_piss ?? 0);
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).rand_event_piss = ((s as any).r2_event_piss ?? 0);
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).rand_event_piss = ((s as any).r3_event_piss ?? 0);
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).rand_event_piss = ((s as any).r4_event_piss ?? 0);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (2);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  }
  (s as any).piss = ((s as any).piss ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/gop/piss\'+rand(1, 6)+\'.jpg');
  (s as any).ranadpercent = Math.floor(Math.random() * 100) + 1;
  if (((s as any).ranadpercent ?? 0)<=30) {
    return;
  }
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).r_piss_text = 'You quickly find a deserted place and squat down, quickly peeing before anyone can find you here.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).r_piss_text = 'You choose a quiet place, and quickly pull your clothes aside and empty your bladder. You feel so relieved!';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).r_piss_text = 'You quickly pull your clothes to the side and empty your bladder, before anyone finds you here. Whew, what a relief!';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).r_piss_text = 'You quickly pull your clothes to the side and pee. Much better!';
  }
  // TODO-QSP: dynamic text: <<$r_piss_text>> Nothing interesting happens.
  scene.text(`${((s as any).r_piss_text || '')} Nothing interesting happens.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Pay the fine', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: gs'stat'
      qspCall(s, 'money', 'pay', 500);
      scene.img('images/locations/pavlovsk/park/gop/vz\'+rand(1, 3)+\'.jpg');
      // TODO-QSP: dynamic text: You offer the policeman <<$func('money', 'string_price', 500)>>, which he prompt...
      scene.text(`You offer the policeman ${qspFunc(s, 'money', 'string_price', 500)}, which he promptly takes: "Very good, miss… I knew you would be reasonable, from the moment I saw you. Have a good day now."`);
      scene.text('They leave without even recording any of your personal information. That fine probably just went straight into their pockets, but at least it got you out of trouble!');
      scene.actions([
        { label: 'Leave', goto: ['pav_park', 'start'] },
        { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
      ]);
    }
  } },
    { label: 'Go to the police station', handler: (st: GameState) => {
    (st as any).schtraf = 500;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 1;
    // TODO-QSP: gt'katalkin'
  } },
    { label: 'Say you can\'t afford the fine', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'self');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/pol2.jpg');
    scene.text('You look at the policeman sadly and say: "I\'m sorry sir, I can\'t afford to pay that fine…"');
    scene.text('One of the policemen says: "That is very unfortunate, but then we\'ll have to stick to the protocol. We\'ll take you to the police station, where we\'ll fill out the documents and lock you up until someone in your family is willing to come pay the fine for you."');
    scene.text('You don\'t want that! Everyone in your family would know what you did if they called home! There\'s probably something you could do, to get them to forget about your infraction…');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Persuade the policemen with a blowjob', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Persuade the policemen with a blowjob', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npcgeneratec', '', 0, 'Policeman', Math.floor(Math.random() * 21) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (2);
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), '', '', 20000, 20);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), '', '', 20000, 20);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), '', '', 20000, 20);
    qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), '', '', 20000, 20);
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/p_otsos.mp4');
    scene.text('You sigh and drop to your knees, rubbing your hands over the groins of their police uniforms. They obviously want you, the bulges in their pants are impossible to ignore.');
    scene.text('One of the policemen makes a token effort to object, but quickly quiets down when you pull out his hard rod and eagerly close your lips around it. You realize you have to show some effort if you want this fine to go away, and dutifully suck the guy off, massaging the other policeman\'s cock with your hand after he pulls it out for you.');
    scene.text('After a while, the second policeman gets impatient and wants you to take his cock in your mouth too. You take turns on their cocks, sucking them off one by one while you massage the other with your hand after you make it nice and slick with your saliva.');
    qspCall(s, 'dinsex', 'bj_swallow_random');
    scene.text('The policemen drop their loads on your face, slightly adjusting his aim when they cum so they spread their cum absolutely everywhere. With a satisfied nod, they tuck their cocks back into their pants.');
    scene.text('The first policeman says: "Everything seems to be in order here after all, miss. Thank you for your cooperation."');
    scene.text('You hear them laugh as they walk away, while you wipe the cum from your eyes. They might have humiliated you a little, but at least no one else will know!');
    qspCall(s, 'arousal', 'bj', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go to the police station', handler: (st: GameState) => {
    (st as any).schtraf = 500;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 1;
    // TODO-QSP: gt'katalkin'
  } },
    ]);
  } },
    { label: 'Leave', goto: ['pav_park', 'start'] },
    { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    { label: 'Don\'t resist', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (30);
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/sex/ev3_1.mp4');
    scene.text('Afraid to anger the man, you just nod meekly. Satisfied that you probably won\'t scream or run off, he slowly removes his hand and says: "Very good. Now come with me, I\'ll have some of what you were showing."');
    scene.text('You blush furiously as he takes your hand and pulls you away, your clothes still disheveled. When you try to straighten them, he slaps your hand away and puts his hand on your exposed cunt: "Relax, girl… me and my friends will take good care of you."');
    scene.text('Wait what… friends!?');
    scene.text('Before he gives you any time to think about it, he pulls you through some brushes and pushes you into the middle of a circle. He shouts: "Look what I found, boys! A whore with a wet pussy, all ours for the taking!"');
    scene.text('The crowd laughs, and the guys all close in on you. You feel their hands touch you everywhere as he continues: "She told me in private that she\'s in kind of a rush, so we\'ll need to utilize all of her holes to make this quick. I hope that\'s no problem for you."');
    scene.text('The guys keep laughing, and the first guy pulls you down by the hair and guides your head towards his groin. His cock is fairly long, but thin. Without giving you any time to think it over he jams it down your throat, and uses his hands at the back of your head to guide you as he fucks your throat.');
    scene.text('Then you feel another hand on your pussy, and you hear a rough voice say: "Nice find, man! This slut is soaked… no need to go easy on her."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'vaginal', 3, 'rough', 'sub', 'gangbang', 'humiliation');
    qspCall(s, 'arousal', 'anal', 2, 'rough', 'sub', 'gangbang', 'humiliation');
    qspCall(s, 'arousal', 'bj', 2, 'rough', 'sub', 'gangbang', 'humiliation');
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/sex/ev3_2.mp4');
    scene.text('Their humiliating words only make you feel sluttier, and you groan embarrassedly around the cock buried in your mouth.');
    scene.text('Another of the guys worms his way underneath you and works his cock inside your pussy, while a third guy spits on your clenched sphincter and begins to rub his hard cock against your anus.');
    scene.text('Before too long, he works his way in too. You try to scream, but all this does is open your mouth further and give the first guy even better access to your throat, which he happily uses. The first guy wasn\'t joking: they didn\'t want to keep you away for long. Without letting up, all the guys begin to fuck your holes for all they\'re worth, treating you like a piece of meat with little more than their own enjoyment in mind.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'arousal', 'bj', 1, 'rough', 'sub', 'gangbang', 'humiliation');
    qspCall(s, 'arousal', 'anal', 1, 'rough', 'sub', 'gangbang', 'humiliation');
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/sex/ev3_3.mp4');
    scene.text('Suddenly, some of them pull their cocks away from you. The guy who found you first lies down on the bench, offering his cock to your mouth while one of his friends continues to brutally fuck your ass from behind. The guy who was fucking your pussy also begins to wank off over your face, and you do your best to please the two of them with your mouth.');
    scene.text('The guys are really enjoying themselves. They call you a washed-up whore and a promiscuous slut, probably willing to open your legs for anyone the park who treats you the way you deserved to be treated. They joke about what to do the next time they find you, and whether they should take you over to their football training for some team bonding afterwards.');
    scene.text('Their degrading talk put you over the edge, and your body quivers and shakes in orgasm.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2, 'rough', 'sub', 'gangbang', 'humiliation', 'deepthroat');
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/sex/ev3_4.mp4');
    scene.text('Then, one of them roughly shoves his cock down your throat and finishes inside. You barely taste his cum, and just let it slide down your throat and swallow obediently.');
    scene.text('The other guys jerk off over your face, and drop their loads onto you one by one. Some of it seeps into your hair, and you keep your eyes closed to at least not get any in your eyes.');
    scene.text('One of guys pulls some beers from a bag you didn\'t notice, and hands some out to his friends. They all take a few deep gulps, and drain the bottles in no time.');
    scene.text('He grins at you: "Before you can go, I want to see you shove this beer bottle into your pussy. Get on with it, slut…');
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    // TODO-QSP: gs'stat'
    scene.img('images/locations/pavlovsk/park/gop/but.jpg');
    scene.text('You sigh… you\'re too exhausted to fight them. If this is what you have to do so they\'ll let you go…');
    scene.text('You take the bottle from his hand and slowly guide it towards your pussy, and begin to push it in. After a while they lose interest in you fucking yourself with the bottle and disperse, leaving you by yourself.');
    qspCall(s, 'boystat', 'd4');
    qspCall(s, 'arousal', 'vaginal_dildo', 4, 'masturbate', 'exhibitionism', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to your friends', goto: ['zsoft_gopskverGorSlut', '2'] },
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
    { label: 'Leave', goto: ['pav_park', 'start'] },
    { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    { label: 'Leave', goto: ['pav_park', 'start'] },
    { label: 'Return to your friends', goto: ['zsoft_gopskverGorSlut', '2'] },
  ]);
  scene.build();
}

function enterSiski(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', those tits are fantastic!';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', I love the way your boobs bounce when you run. Can you run on the spot for a bit?';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', I bet you could make good money with those tits.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', I\'d love to stick my cock between your boobs and fuck them every day!';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', I bet I could do a trick or two with those tits.';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).sis_gop_text = '' + ((s as any).shultextrand2 ?? 0) + ', how about a boobjob? I love your rack…';
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    (s as any).sis_gop_text = 'Nice rack, ' + ((s as any).shultextrand2 ?? 0) + '. How about you show us your pussy too? Maybe masturbate a little while you\'re at it?';
  }
  scene.img('images/locations/pavlovsk/park/gop/tits\'+rand(1, 7)+\'.mp4');
  scene.text('You smile at the request, and quietly pull your clothes aside to expose your breasts to the boys with a lewd grin. The guys watch you eagerly, and you slowly rub your boobs and squeeze your nipples lightly. After a little while, they\'re so hard you could cut glass with them.');
  // TODO-QSP: dynamic text: <<$shultextrand3>> says <<$shultextrand6>>: "<<$sis_gop_text>>"
  scene.text(`${((s as any).shultextrand3 || '')} says ${((s as any).shultextrand6 || '')}: "${((s as any).sis_gop_text || '')}"`);
  scene.text('The guys laugh nervously, unable to keep their eyes from you.');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate in front of them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/gop/mast\'+rand(1, 3)+\'.mp4');
    (s as any).temp_randB = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).temp_randB ?? 0))) {
      (s as any).rnd_droch_text = 'Without hesitation, you pull your clothes to the side and rub your fingers over your wet cunt lips, and then theatrically suck on your finger to taste yourself. The guys are speechless, never thinking you would actually do it, and watch you intently.';
    }
    if (((s as any).temp_randB ?? 0) === 1) {
      (s as any).rnd_droch_text = 'You gently rub your fingers over your incredibly wet slit, and nearly orgasm at the first touch. You carefully touch yourself for a few minutes, making sure you don\'t orgasm in front of the guys.';
    }
    if (((s as any).temp_randB ?? 0) === 2) {
      (s as any).rnd_droch_text = 'You spread your legs and expose your bare pussy to the guys, before you slowly begin to rub your clitoris. The guys watch you intently, not wanting to miss a single moment of your show.';
    }
    if (((s as any).temp_randB ?? 0) === 3) {
      (s as any).rnd_droch_text = 'You bite your lip as you gently massage your clitoris, fondling your tits with your available hand. The guys are looking at your show with wide eyes, unsure what they did to convince you to actually do this for them.';
    }
    // TODO-QSP: dynamic text: <<$rnd_droch_text>>
    scene.text(`${((s as any).rnd_droch_text || '')}`);
    qspCall(s, 'arousal', 'clit_finger', 4, 'masturbate', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cover up again', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Cover up again', goto: ['zsoft_gopskverGorSlut', '2'] },
  ]);
  scene.build();
}

function enterHornyparksex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + 10;
    // TODO-QSP: dynamic text: <<$horny_orgazm_text2>> <<$horny_orgazm_text3>>.
    scene.text(`${((s as any).horny_orgazm_text2 || '')} ${((s as any).horny_orgazm_text3 || '')}.`);
  }
  if (((s as any).horand ?? 0) <= ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'raise', 'tiny');
    // TODO-QSP: dynamic text: <<$horny_orgazm_text2>> <<$horny_orgazm_text4>>
    scene.text(`${((s as any).horny_orgazm_text2 || '')} ${((s as any).horny_orgazm_text4 || '')}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHornyparksexanal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + 10;
    // TODO-QSP: dynamic text: <<$horny_orgazm_text2>> <<$horny_orgazm_text3>>.
    scene.text(`${((s as any).horny_orgazm_text2 || '')} ${((s as any).horny_orgazm_text3 || '')}.`);
  }
  if (((s as any).horand ?? 0) <= ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = 0;
    qspCall(s, 'mood', 'raise', 'tiny');
    // TODO-QSP: dynamic text: <<$horny_orgazm_text2>> <<$horny_orgazm_text4>>
    scene.text(`${((s as any).horny_orgazm_text2 || '')} ${((s as any).horny_orgazm_text4 || '')}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumface(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum on your face', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_rand ?? 0) > 20) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/oral/cum/...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/cumf'+rand(1, 22)+'.jpg"></center>`);
    }
    if (((s as any).temp_rand ?? 0) <= 20) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/park/g...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumf'+rand(1, 6)+'.mp4"></video></center>`);
    }
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).cum_face_text = 'He cums all over your face, shooting his hot jets of jizz all over you. You lick your lips obediently, and wink at him lewdly once he\'s finished.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).cum_face_text = 'His warm and slightly sweet jets of cum hit your face. After he\'s mostly finished, you massage his cock for a little while to squeeze out the last drops, and you lick his shrinking cock clean obediently.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).cum_face_text = 'When he\'s about to orgasm, he pulls his cock away from you and begins to jerk off. His sperm flies quite far, splattering against your face with quite a bit of force. The second and third blast hit your cheeks, while the fourth and fifth end up in your hair. Eventually he\'s done, and groans loudly when you lick him clean.';
    }
    // TODO-QSP: dynamic text: <<$cum_face_text>>
    scene.text(`${((s as any).cum_face_text || '')}`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to drinking beer with the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumfaceGroup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them cum on your face', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_rand ?? 0) > 20) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/group/cum...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/group/cum/cumf'+rand(1, 14)+'.jpg"></center>`);
    }
    if (((s as any).temp_rand ?? 0) <= 20) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/park/g...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumf'+rand(1, 6)+'.mp4"></video></center>`);
    }
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).cum_face_textgr = 'You fall back, feeling exhausted. Your face is covered in a mixture of the guys\' cum and your tears and saliva.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).cum_face_textgr = 'You fall back, feeling exhausted. Your face is covered in a mixture of the guys\' cum and your tears and saliva. ' + ((s as any).shultextrand3 ?? 0) + ' grins and says: "She\'s got a great mouth on her… it\'s like she was made for sucking cocks!" You blush and look away with your head held down, trying to ignore their degrading comments while you clean yourself up a little.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
    }
    // TODO-QSP: <<$shultextrand33>> spits on your face and gives you a few slaps, right before he cums on your cheek...
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).cum_face_textgr = 'The guys all cum at roughly the same time, shooting their loads all over your face. When they\'re done, you look like a glazed donut.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).cum_face_textgr = 'Luckily, you had the guys all pent up and they finish fairly quickly. After they shoot their hot loads of cum all over your face, they carefully wipe their dirty cocks off on your ' + ((s as any).pcs_haircolor ?? 0) + ' ' + ((s as any).curly_txt ?? 0) + ' before letting go of your head.';
    }
    // TODO-QSP: dynamic text: <<$cum_face_textgr>>
    scene.text(`${((s as any).cum_face_textgr || '')}`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCummouth(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_rand ?? 0) > 40) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/oral/cum/...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/cumm'+rand(1, 12)+'.jpg"></center>`);
    }
    if (((s as any).temp_rand ?? 0) <= 40) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/park/g...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumm'+rand(1, 8)+'.mp4"></video></center>`);
    }
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).cum_mouth_text = 'You feel his hot jets of cum shooting down your throat, and choke in surprise. You manage to recover though, and obediently swallow every drop of his load.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).cum_mouth_text = 'He grins: "Bon appetit, sperm slut" and cums down your throat. Then he wipes his limp cock against your cheeks and walks away, not paying you any more attention.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).cum_mouth_text = 'After a few quick hand movements, he pulls your face towards his cock and shoots his cum all over your tongue. Then he puts his hand on your jaw and forces it shut, making you swallow his load.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).cum_mouth_text = 'You can\'t do much besides swallow his load, and involuntarily wince at the horrible taste of it. He doesn\'t care, and tells you to lick him clean before he pulls his cock from your mouth.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).cum_mouth_text = 'Vasily grins at you and says: "Get used to it, whore. This is the way we\'ll be feeding you from now on" while you carefully lick the remnants of sperm from the shrinking cock. You don\'t feel bold enough to refute his statement right now, and just let it slide.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).cum_mouth_text = 'He forces his cock down your throat, and he cums while his balls are touching your lips. You nearly suffocate, but he grabs hold of your hair and keeps forcing you down against his groin until he\'s done. When he finally shot all his cum down your throat he lets you go, and you gasp for air when you can finally breathe again.';
    }
    // TODO-QSP: dynamic text: <<$cum_mouth_text>>
    scene.text(`${((s as any).cum_mouth_text || '')}`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCummouthGroup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them cum in your mouth', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_rand ?? 0) > 40) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/group/cum...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/group/cum/cumm'+rand(1, 4)+'.jpg"></center>`);
    }
    if (((s as any).temp_rand ?? 0) <= 40) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/oral/cum/...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/cumm'+rand(6, 10)+'.jpg"></center>`);
    }
    (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).cum_mouth_textgr = 'The guys line up, and the cock you are currently sucking on begins to spasm in your mouth, soon filling it with jets of slightly bitter cum. You choke in surprise and do your best to hide your disgust while you swallow every drop, while the second guy approaches you. Two more loads later, you sit back in the grass and idly lick your lips while the guys grin happily and pull up their pants.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).cum_mouth_textgr = 'He grins: "Bon appetit, sperm slut" and cums down your throat. Then he wipes his limp cock against your cheeks and walks away, not paying you any more attention. You\'re not given any time to respond, since a second guy immediately moves in to take his place. You dutifully swallow the loads of all three guys, and sit back in the grass licking your lips while the guys grin and pull up their pants again.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).cum_mouth_textgr = 'You can\'t do much besides swallow his load, and involuntarily wince at the horrible taste of it. He doesn\'t care, and tells you to lick him clean before he pulls his cock from your mouth.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).cum_mouth_textgr = 'Dan forces his cock down your throat, and he cums while his balls are touching your lips. You nearly suffocate, but he grabs hold of your hair and keeps forcing you down against his groin until he\'s done. When he finally shot all his cum down your throat he lets you go, and you gasp for air when you can finally breathe again. Vitek immediately takes his place though, and after a few quick gasps of breath your throat is filled again. Vitek and then Vasily fuck your throat for several more minutes, and eventually both cum in your mouth as well.';
    }
    // TODO-QSP: dynamic text: <<$cum_mouth_textgr>>
    scene.text(`${((s as any).cum_mouth_textgr || '')}`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumbody(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum on your body', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0));
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_rand ?? 0) > 50) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/park/gop/sex/oral/cum/...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/cumb'+rand(1, 9)+'.jpg"></center>`);
    }
    if (((s as any).temp_rand ?? 0) <= 50) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/park/g...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh || '')} src="images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumb'+rand(1, 2)+'.mp4"></video></center>`);
    }
    scene.text('A fountain of cum erupts over your body as he furiously strokes his cock, coating your boobs and stomach with his sperm.');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'start'] },
      { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumass(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your ass', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'cum_call', 'anal', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).cumass_text = 'You feel his body grow tense against yours, and soon after you feel a hot liquid spreading inside you. When he\'s nearly finished, he pulls out his cock and squeezes the last drops out over your ass, before rubbing it against your pussy, rubbing the cum that is slowly running out of your sphincter over your snatch too.';
    }
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).cumass_text = 'He shoots his load inside your ass, groaning loudly. Then he pulls out his cock and pushes your ass cheeks aside, slowly watching his cum run out of your stretched hole.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).cumass_text = 'You feel hot jets of his jizz spurting inside your asshole, and when he pulls out you can feel it slowly dribbling down your labia.';
    }
    scene.img('images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumass\'+rand(1, 2)+\'.mp4');
    // TODO-QSP: dynamic text: <<$cumass_text>>
    scene.text(`${((s as any).cumass_text || '')}`);
    if (((s as any).agape ?? 0) === 3) {
      scene.text('Your anus tore a little from the treatment today, and there is some blood mixed with the sperm leaking from it.');
    }
    if (((s as any).agape ?? 0) < 3) {
      scene.text('After the cocks you took today, your ass feels a bit sore. It won\'t fully close yet, and sperm leaks slowly from it.');
    }
    scene.actions([
      { label: 'Leave the guys alone', goto: ['pav_park', 'start'] },
      { label: 'Get back to drinking with the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumassGroup(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them cum in your ass', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'cum_call', 'anal', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cumass\'+rand(1, 2)+\'.mp4');
    // TODO-QSP: dynamic text: When all the guys are satisfied, you tiredly lie down on the grass for a moment....
    scene.text(`When all the guys are satisfied, you tiredly lie down on the grass for a moment. One of the guys comes over with a grin on his face and asks: "Well, ${((s as any).pcs_nickname || '')}, would you say you know how to get fucked in the ass now?"`);
    scene.text('You quietly answer: "Yes, I do", blushing and hiding your face. He happily nods, and continues: "I\'d say so too. So, you\'ll be offering us your ass more often from now on, understood?"');
    scene.text('You obediently nod and mechanically respond: "I will, you guys can fuck my ass more often if you want."');
    scene.text('He grins while the other boys laugh: "Excellent… just what we wanted to hear!"');
    scene.text('Then one of his friends orders you: "Now turn around and show us that used ass of yours!"');
    scene.actions([
      { label: 'Show them', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) <= 10) {
      scene.img('images/pc/body/cum/cumanal/cumanal4.jpg');
      scene.text('You obediently turn around and spread your ass cheeks, showing them your red and sore hole.');
    } else {
      if (((s as any).pcs_ass ?? 0) > 10  &&  ((s as any).pcs_ass ?? 0) < 25) {
        scene.img('images/pc/body/cum/cumanal/cumanal5.jpg');
        scene.text('You obediently turn around and spread your ass cheeks, showing them your red and stretched hole.');
      } else {
        if (((s as any).pcs_ass ?? 0) >= 25) {
          scene.img('images/pc/body/cum/cumanal/cumanal6.jpg');
          scene.text('You obediently turn around and spread your ass cheeks, showing them your sore and wrecked hole.');
        }
      }
    }
    scene.text('Your poor butthole is finally beginning to close again after several minutes, after getting several servings of seed poured into it.');
    if (((s as any).agape ?? 0) === 3) {
      scene.text('Your anus tore a little from the treatment today, and there is some blood mixed with the sperm leaking from it.');
    }
    if (((s as any).agape ?? 0) < 3) {
      scene.text('After the cocks you took today, your ass feels a bit sore. It still won\'t fully close yet, and sperm leaks slowly from it.');
    }
    scene.text('The guys slap each other on the back while they admire their handiwork: "We have a real buttslut on our hands here, boys! Training her is going to be a lot of fun!"');
    scene.actions([
      { label: 'Leave the guys alone', goto: ['pav_park', 'start'] },
      { label: 'Get back to drinking with the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumpussy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'large');
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (30);
  qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/gop/sex/oral/cum/gif/cump\'+rand(1, 2)+\'.mp4');
  if (((s as any).locArgs?.[1] ?? 0) === 'wanted') {
    scene.text('After several minutes of hard fucking, his thrusts grow shorter and more intense. He then slams his cock inside you all the way to the balls, and you feel his warm load being shot inside you.');
  } else {
    scene.text('Despite your request, he does not pull out and comes inside your quivering snatch. When he pulls out, his load slowly drips out of you while he gives you an indifferent shrug.');
    scene.text('You sigh in frustration. Nevertheless… there\'s not a whole lot you can do about it now, and getting angry over it will probably just cause trouble with the guys.');
  }
  qspCall(s, 'cuminsidereact', '');
  // TODO-QSP: iif(func('pregriskeval', eff_contra) < 2 and succubusflag ! 1, 'You squat down and try to push his s...
  if (qspFunc(s, 'pregriskeval', ((s as any).eff_contra ?? 0)) === -1  &&  ((s as any).birth_control ?? 0)?.['implant_status'] <= 1) {
    scene.text('As you push your fingers inside your pussy trying to scoop out his load, you think to yourself: "Did I take my pill today? I sure hope so…"');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_park', 'start'] },
    { label: 'Return to the guys', goto: ['zsoft_gopskverGorSlut', '2'] },
  ]);
  scene.build();
}

function enterCumpussywanted(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your pussy', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'wanted']; enterCumpussy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCumpussyunwanted(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him not to come in your pussy', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'unwanted']; enterCumpussy(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterVaginalsex(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him fuck your pussy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).stat = (s as any).stat ?? {})['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (1);
    (s as any).dick = 17;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/park/gop/sex/vagin/v\'+rand(1, 40)+\'.jpg');
    (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
    }
    // TODO-QSP: Soon enough, the fucking makes you feel so good that you forget all about them, and just close your ...
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).vag_gop_text = 'Your cunt is quite wet by now, and when he moves his ' + ((s as any).dick ?? 0) + 'cm cock against your pussy it slides in easily. Realizing he doesn\'t have to take it slow with you, he just begins to ram his cock inside you, and you reach down to massage your clit while you get fucked like a whore in the park.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
    }
    // TODO-QSP: Oh crap, did you just say that out loud!? He redoubles his efforts and fucks you even harder, while ...
    // TODO-QSP: dynamic text: <<$vag_gop_text>>
    scene.text(`${((s as any).vag_gop_text || '')}`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHornyparksex(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumface(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCummouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumbody(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumpussywanted(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumpussyunwanted(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAnalsex(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him fuck your ass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    ((s as any).stat = (s as any).stat ?? {})['anal'] = ((s as any).stat['anal'] ?? 0) + (1);
    (s as any).dick = 17;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/park/gop/sex/anal/ass\'+rand(1, 35)+\'.jpg');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('"You won\'t be needing this!" he grins, and pulls out your butt plug with a loud pop. He\'s quite rough with it, and you grimace at the sudden extrusion.');
    }
    (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
    if ((!((s as any).temp_rand ?? 0))) {
      scene.text('You bend down, holding on to the edge of the bench while you expose your bare ass. He puts one hand onto your thigh pulling you closer to him, while his other hand guides his cock towards your puckered anus. Your body involuntarily tenses, and you tighten your sphincter at the touch.');
      // TODO-QSP: dynamic text: He slaps your ass cheeks playfully and reminds you: "You should really relax, <<...
      scene.text(`He slaps your ass cheeks playfully and reminds you: "You should really relax, ${((s as any).pcs_nickname || '')}. This will hurt a lot more if you resist."`);
      scene.text('You know he\'s right, and nod while you try to do as he says. Your sphincter tenses up again when he pushes the head of his cock in though; it probably would\'ve been easier for you if he used lube. Nevertheless, at least he takes it slow and holds still for a while, and only continues to push his cock into your ass when he feels you relax a bit.');
      scene.text('It hurts a little, but in a way it\'s a good kind of pain. You close your eyes and close yourself off from your surroundings, focusing on the sensations he\'s giving you. He keeps going slow, and holds still again for a while when his dick is all the way in. When he eventually begins to move his hips, you\'re relaxed enough to enjoy it.');
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        scene.text('You get down on your hands and knees like he wants. He immediately kneels behind you and forces his cock inside your ass, a bit rougher than you would\'ve liked. He then begins to thrust his hips against yours, fucking you in a steady pace without giving you much time to adjust. It hurts and you cry out, but you don\'t pull away from him. When the worst of the pain subsides, you move a hand between your legs and slowly begin to rub your clit, and slowly the pain makes way for pleasure.');
      } else {
        if (((s as any).temp_rand ?? 0) === 2) {
          scene.text('He spits on your asshole a few times, and rubs his cock against it for a while. Once he\'s satisfied his cock is coated in saliva well enough he begins to shove it in, and you groan and try to pull away from him. It\'s no use, his hands hold you in place and soon his cock is all the way inside you. You beg him to take it slow for a bit, and to your surprise he complies and holds still, letting you get used to his size. After a while the pain subsides, and when he begins to move his hips it actually feels rather good!');
        } else {
          // TODO-QSP: dynamic text: He silently slides his cock inside your ass, and asks with a lewd grin on his fa...
          scene.text(`He silently slides his cock inside your ass, and asks with a lewd grin on his face: "You want this… don't you, ${((s as any).pcs_nickname || '')}?"`);
          scene.text('You know what he wants to hear, and meekly nod and whisper: "Yes…"');
          scene.text('"Louder, slut! I can\'t hear you!" He firmly grabs you by the hair and pulls your head backwards, rougher than you had anticipated. You let out an involuntary cry and feel tears forming in your eyes, but he ignores it and asks: "Why are you with us?"');
          scene.text('You don\'t want him to pull your hair again, and quickly blurt out: "I love the way you fuck my ass! All of you! You take such good care of me… I\'m an anal slut… please keep fucking me!"');
          scene.text('The boys laugh: "Look at her… she seems like such a sweet and innocent girl, but she\'s nothing more than an ordinary butt slut!"');
          scene.text('Your \'confession\' seems to have done it for him, and his movements are almost immediately speeding up.');
        }
      }
    }
    if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
      scene.text('When he sees the tattoo on your lower back, he pats your ass approvingly: "Nice tramp stamp, whore."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHornyparksexanal(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumface(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCummouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumbody(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumass(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case 'piss':
      enterPiss(s, scene);
      break;
    case 'siski':
      enterSiski(s, scene);
      break;
    case 'hornyparksex':
      enterHornyparksex(s, scene);
      break;
    case 'hornyparksexanal':
      enterHornyparksexanal(s, scene);
      break;
    case 'cumface':
      enterCumface(s, scene);
      break;
    case 'cumface_group':
      enterCumfaceGroup(s, scene);
      break;
    case 'cummouth':
      enterCummouth(s, scene);
      break;
    case 'cummouth_group':
      enterCummouthGroup(s, scene);
      break;
    case 'cumbody':
      enterCumbody(s, scene);
      break;
    case 'cumass':
      enterCumass(s, scene);
      break;
    case 'cumass_group':
      enterCumassGroup(s, scene);
      break;
    case 'cumpussy':
      enterCumpussy(s, scene);
      break;
    case 'cumpussywanted':
      enterCumpussywanted(s, scene);
      break;
    case 'cumpussyunwanted':
      enterCumpussyunwanted(s, scene);
      break;
    case 'vaginalsex':
      enterVaginalsex(s, scene);
      break;
    case 'analsex':
      enterAnalsex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const zsoft_gopskverGorSlut: LocationDef = {
  name: 'zsoft_gopskverGorSlut',
  title: 'As you\'re sitting on your haunches peeing in the park, you h',
  region: 'other',
  locationType: 'event_outdoors',
  enter: enter,
};
