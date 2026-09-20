import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter8floorAnalGangbang(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm1.jpg');
  scene.text('You enter the room and close the door. As you start stripping off your clothes, you watch as Haruna walks up behind the first girl and lines his dick up with her asshole.');
  scene.text('He pushes forward and his large massively thick black dick slides into her asshole with surprising ease.');
  scene.text('She moans as he starts fucking her ass, the other girls looking over and watching as their friend gets her ass fucked; all but the last look eager for their turn.');
  qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get in place', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm2.jpg');
    scene.text('Once you\'re naked and kneeling on the couch with the other girls, you\'re handed the bottle of lube and use it to lube up your asshole.');
    scene.text('As you do, Haruna pulls out of the first girl and moves down to the second, shoving it up her ass.');
    scene.text('She tenses up and hisses in pain before she relaxes and starts moaning, really getting into it.');
    scene.text('Before she can get off, he pulls out and slides his dick into the third girl\'s ass. She starts moaning loudly at once and begs him to fuck her harder, which Haruna is only to happy to do.');
    scene.text('He quickly starts hammering her ass hard and fast as you see the girl next to you look even more nervous as Haruna grunts and fills the third girl\'s ass with his cum.');
    qspCall(st, 'arousal', 'voyeur_sex', 10, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait your turn', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm3.jpg');
    scene.text('He pants for a moment before pulling out of the girl\'s ass. You see some cum leaking out of her asshole as he strokes his dick to get it hard again before he moves to the fourth girl in line.');
    scene.text('She cries out as he shoves his dick up her ass, but you can\'t tell if it\'s pleasure, pain or both.');
    scene.text('"Oh my god! His black dick… Is so big!" she pants and leans all the way forward with her face on the couch as he fucks her ass, clearly enjoying it.');
    scene.text('The girl before you looks nervous now that it\'s her turn.');
    scene.text('"Take deep breath and relax," Haruna tells her as he moves in behind her.');
    scene.text('She does as he instructs and he slides his dick up her ass. She yelps and jumps forward a bit, but his hands on her hips keep her from pulling to far away.');
    scene.text('"OW! Ow! It hurts! He\'s too big!" She says, but her friends all give her encouragement, telling her that it will feel better in time.');
    scene.text('With their encouragement, she stops complaining and just lets him fuck her ass, but you can tell she\'s not enjoying it.');
    scene.text('After a few minutes, he pulls out of Gagolina\'s ass and she sighs in relief as he moves over behind you. You feel the tip of his dick sliding between your cheeks and pressing against your asshole.');
    qspCall(st, 'arousal', 'voyeur_sex', 10, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get buttfucked', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A245');
    scene.img('images/locations/city/island/university/dorm/hallway/events/floor8/sex/set2/5wg1bm4.jpg');
    // TODO-QSP: dynamic text: You feel the pressure build up until it suddenly pops into your ass and you gasp...
    scene.text(`You feel the pressure build up until it suddenly pops into your ass and you gasp as Haruna's ${((st as any).dick || '')}cm ${((st as any).dick_girth || '')} dick starts sliding up your ass.`);
    scene.text('He\'s fairly slow at first, but he pushes your head down until your face is pressed against the seat. Your new position allows him to easily start fucking you balls deep.');
    scene.text('You grunt when he suddenly thrusts deep and feel his cock twitching inside you.');
    scene.text('When he finishes, he steps back and you feel his dick slide out of you, your ass suddenly feeling very empty as his cum leaks out of you.');
    scene.text('He laughs and slaps your ass before he starts cleaning his dick and getting dressed.');
    scene.text('You and the girls all start doing the same.');
    qspCall(st, 'arousal', 'anal', 5, 'group', 'sub', 'lube');
    qspCall(st, 'cum_call', 'anus', 'A245', 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Just get dressed and leave', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/misc/2wg_lovebbc.jpg');
    scene.text('As you finished getting dressed and cleaned up, you notice two of the girls are wearing "I heart black guys" shirts, but nobody says anything about it.');
    scene.text('Once the girls are dressed, they leave as Haruna sits on the now empty couch and turns the TV on. You only wait around a moment longer before leaving yourself.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
      { label: 'Ask the girls why they did this', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/misc/2wg_lovebbc.jpg');
    scene.text('You wait around as everyone get cleaned up and dressed. As the girls finish dressing, the first and second girls put on shirts that say "I heart black guys".');
    scene.text('As they all finish dressing, you decide to ask them why they do this, as you don\'t think any of them got off.');
    scene.text('You clear your throat softly. "I was just wondering why you guys did this? I mean I don\'t think any of you got off from it."');
    scene.text('The first girl frowns, as if you asked an offensive question. "This is not about us. This is about paying racial restitution." Several of the other girls nod in agreement. "This is about whites paying for our crimes against the Africans. White colonists enslaved many Africans and then shipped them around the world."');
    scene.text('You think about it for a moment. "I don\'t think Russia was really involved with that."');
    scene.text('She shakes her head. "It doesn\'t matter. As Professor Bryant says, this is about racial reparations. It doesn\'t matter if our ancestors did it or not. They allowed, and often supported, other whites to enslave the blacks of Africa. It is our duty to repay them."');
    scene.text('You\'ve heard of Professor Bryant; he\'s a black American that teaches African Studies here at the university. "So having sex with them makes up for slavery?"');
    scene.text('She sighs like you\'re thick headed. "No, of course not, but it\'s a start. If we offer up our bodies for their pleasure, then we are at least paying them back a little. That\'s why I, Tseydlits, started the White Pussy for African Cock club. We are all members who are doing our part. You should join us."');
    scene.text('She gives you the information on how to go about joining them and you talk to them all a little longer. They all seem to believe in the cause and all of them are taking the African Studies elective course.');
    scene.text('Shortly after, they all leave, as do you.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      { label: 'Ask Haruna why he did this', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big245.jpg');
    scene.text('As you talk to the girls, you notice Haruna has got dressed and sat on the couch in front of the TV.');
    scene.text('You decide to ask him what his take on all this is. "Do you agree with the girls?"');
    scene.text('He shrugs. "I don\'t know, seems kind of silly to me, but…" He can\'t help but grin. "I like fucking white girls. I like fucking girls in the butt. These girls think all white girls owe Africans their bodies, so I call them over, line up as many as I can and fuck each of them in the butt. My goal is to fuck ten of them in a row."');
    scene.text('You blink, not really sure what to say about that. "Oh. Okay. Good luck with that, I guess…"');
    scene.text('He nods and grins before he turns the TV on and starts watching it. You don\'t think you\'re going to learn any more from him, so decide to leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    ]);
  } },
      { label: 'Ask Haruna why he did this', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big245.jpg');
    scene.text('You wait around as everyone get cleaned up and gets dressed. As the girls finish dressing, the first and second girls put on shirts that say "I heart black guys".');
    scene.text('Haruna gets dressed and sits on the couch in front of the TV as the girls all leave, talking about how they\'ve made some reparations today.');
    scene.text('You decide to ask him what this was all about. "So… What was all of this about?"');
    scene.text('He grins. "I like fucking white girls. I like fucking girls in the butt. These girls think all white girls owe Africans their bodies, so I call them over, line up as many as I can and fuck each of them in the butt. My goal is to fuck ten of them in a row."');
    scene.text('You blink, not really sure what to say about that. "Oh. Okay. Good luck with that, I guess…"');
    scene.text('He nods and grins before he turns the TV on and starts watching it. You don\'t think you\'re going to learn any more from him, so decide to leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
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
    case '8floor_anal_gangbang':
      enter8floorAnalGangbang(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_dorm_events_sex: LocationDef = {
  name: 'uni_dorm_events_sex',
  title: 'You enter the room and close the door. As you start strippin',
  region: 'other',
  enter: enter,
};
