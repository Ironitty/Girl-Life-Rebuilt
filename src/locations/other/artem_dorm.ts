import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'artem_dorm', 'start');
  qspCall(s, 'artem_chebotarev_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Artem\'s Dorm Room</b></center>');
  scene.img('images/locations/city/island/university/dorm/artemroom/artem_dorm_room.jpg');
  scene.text('The dorm room has two beds. The one on the left belongs to Artem\'s roommate while the one on the right is Artem\'s.');
  qspCall(s, 'artem_dorm', 'timecheck');
  if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_studying_or_relaxing') {
    scene.text('Above his bed is a small <a href="exec:gt \'artem_dorm\',\'bookshelf\'">bookshelf</a> full of books, and the wall is plastered with sci-fi, fantasy, anime and super hero posters. Next to the bed is a small <a href="exec:gt \'artem_dorm\',\'night_stand\'">night stand.</a> At the foot of his bed is a small desk with a <a href="exec:gt \'artem_dorm\',\'computer\'">laptop</a> on it. Artem is sitting on a couch facing a TV sitting against the wall.');
  } else {
    scene.text('Artem is getting ready to go to sleep, so you better leave.');
    scene.text('Artem is getting ready to leave, so you better do the same.');
  }
  if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_studying_or_relaxing') {
    scene.actions([
      { label: 'Sit with Artem', goto: ['artem_dorm', 'sit_couch'] },
    ]);
  }
  scene.actions([
    { label: 'Leave Artem\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
  ]);
  scene.build();
}

function enterNightStand(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/nightstand.jpg');
  scene.text('Having decided to snoop, you open the nightstand drawer to take a peek inside. Rummaging through the drawers, all you find is his phone hooked up to a charger, a few books, some cold medicine, some comics and a flashlight. Noticing him watching you snoop, you close the drawers.');
  scene.actions([
    { label: 'Close the drawer', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterBookshelf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  qspCall(s, 'core_library', 'setloc', 'artem_dorm', 'bookshelf');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
  scene.text('The small bookshelf has a lot of fantasy and science fiction books, a few gaming books and a lot of various nerdy nicknacks from popular fantasy, anime, and science fiction movies and TV shows. Maybe he wouldn\'t mind if you borrowed a book?');
  qspCall(s, 'artem_dorm', 'timecheck');
  if (((s as any).artem_borrowed_book ?? 0) !== 1) {
    scene.actions([
      { label: 'Ask to borrow a book', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artem_borrowed_book = 1;
    (s as any).BookVars['artem_pages'] = Math.floor(Math.random() * 201) + 400;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
    scene.text('You look through the books until you find one you like. "Do you mind if I borrow this to read?"');
    scene.text('He looks a little surprised as he walks over. "Oh sure yeah, you can borrow it," he answers a little excitedly.');
    scene.text('You take the book and put it in your purse. "Thanks. I\'ll get it back to you as soon as I finish it."');
    scene.text('He waves his hand like it\'s no big deal. "Oh, don\'t worry about that. I hope you enjoy it."');
    scene.actions([
      { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artem_borrowed_book ?? 0) === 1) {
    scene.actions([
      { label: 'Return a book', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).artem_borrowed_book = 0;
    (s as any).BookVars['artem_pages'] = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
    scene.text('"I brought your book back," you tell him as you take it out of your purse and put it back in place on the shelf, right where you got it from.');
    scene.text('"Did you like it?" he asks.');
    scene.actions([
      { label: 'I did', handler: (st: GameState) => {
    scene.text('"Yeah, it was good."');
    scene.text('His face lights up and he joins you at the bookshelf. "Yeah, I really liked that one too."');
    scene.actions([
      { label: 'Look at more books', goto: ['artem_dorm', 'bookshelf'] },
      { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
    ]);
  } },
      { label: 'Not really', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    if (((s as any).pcs_intel ?? 0) <= 40) {
      scene.text('"It was a bit complicated for me," you admit, feeling a little embarrassed.');
    } else {
      scene.text('"It was a bit bland and just bored me in the end. I could guess the outcome right at the start, and it turned out I was right."');
    }
    scene.text('Artem looks crushed at your answer.');
    scene.actions([
      { label: 'Look at more books', goto: ['artem_dorm', 'bookshelf'] },
      { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow', 'noporn');
  if (((s as any).ArtemCompUse ?? 0) === 0) {
    (s as any).ArtemCompUse = 1;
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/laptop.jpg');
    scene.text('You point towards his laptop. "You\'re so lucky to have your own computer."');
    scene.text('"I saved up my allowance for years before I could afford it," he replies.');
    scene.text('"Mind if I use it? I want to check my emails and stuff," you ask.');
    scene.text('He nods. "Sure, go ahead."');
  } else {
    scene.text('You look at the computer, then at Artem.');
    scene.text('He meets your gaze and breaks into a smile. "Go ahead and use it if you want. I don\'t mind."');
  }
  scene.actions([
    { label: 'Go online', goto: ['komp', 'start'] },
    { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterSitCouch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/artemroom/sitcouch.jpg');
  qspCall(s, 'artem_dorm', 'timecheck');
  if (((s as any).artemQW ?? 0)?.['date'] > 0) {
    scene.text('You walk over and sit on the couch next to Artem, who scoots over as he smiles at you. "I\'m glad you stopped by. Would you like to play some games? Or we could watch TV? Or just talk if you prefer?"');
    scene.text('You can tell he\'s trying to make you happy.');
  } else {
    scene.text('You walk over and sit on the couch next to Artem. As you do, he puts his arm around you.');
    scene.text('"It\'s always great when the most beautiful girl in the world comes to visit me. Would you like to play some games? Or we could watch TV? Or just talk if you prefer?"');
    scene.text('You can tell he\'s trying to make you happy.');
    scene.text('You walk over and sit on the couch next to Artem. As you do, he smiles at you.');
    scene.text('"I\'m glad you stopped by. I could really use a break from studying. Maybe we could play some games? Or we could watch TV? Or just talk if you prefer?"');
    scene.text('You can tell he\'s trying to make you happy.');
  }
  scene.actions([
    { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
    { label: 'Watch him play', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "No thanks. I\'ll just watch you play."');
    scene.text('He shrugs slightly and starts playing, but is so focused on the game that you think he\'s completely forgotten you\'re even here.');
    scene.text('After about an hour, you\'re about to get up and leave when he finally saves his game and puts the controller neatly away. "What do you want to do now?"');
    scene.actions([
      { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "No, I need to get going. Maybe next time."');
    scene.text('He looks disappointed. "Oh, okay. See you around campus then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    { label: 'Play', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    if (((s as any).artfalling ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
      (s as any).artfalling = ((s as any).daystart ?? 0);
    }
    qspCall(s, 'exp_gain', 'gaming', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/playgames.jpg');
    scene.text('You smile at him. "Yeah, I\'d like that."');
    scene.text('He grins and hands you the controller he has in his hand, then rushes over to grab the other one before sitting back on the couch. He starts the game up and the two of you play for some time; he\'s pretty good, but he keeps making mistakes.');
    scene.text('You eventually beat him, but he doesn\'t seem to mind at all. "What do you want to do now?"');
    scene.actions([
      { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
      { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun playing with you, but I need to get going."');
    scene.text('He looks disappointed. "Oh, okay. See you around campus then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    { label: 'Watch TV', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'stat', '');
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchtv_friends.jpg');
      scene.text('You smile at him. "Yeah, let\'s watch some TV."');
      scene.text('He grins and pulls up Netflix, browsing through the shows on his saved list. You notice they\'re pretty much all what most people would call nerdy shows. Fantasy, anime and sci-fi. Once he chooses one, he pulls you over close to him.');
      scene.text('As you watch, he talks excitedly about the show. By this point, you\'re very much used to him eagerly wanting to his favorite things with you.');
      scene.text('"What do you want to do now?" he asks when the episode ends.');
      scene.actions([
        { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
        { label: 'Watch another episode', goto: ['artem_dorm', 'watch_more'] },
        { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun watching that with you, but I need to get going."');
    scene.text('He looks disappointed. "Oh, okay. See you around campus then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchtv_friends.jpg');
      scene.text('You smile at him. "Yeah, let\'s watch some TV."');
      scene.text('He grins and pulls up Netflix, browsing through the shows on his saved list. You notice they\'re pretty much all what most people would call nerdy shows. Fantasy, anime and sci-fi.');
      scene.text('Once he chooses one, you settle down and start watching as he talks excitedly about the show, eager to share one of his favorite things with you.');
      scene.text('"What do you want to do now?" he asks when the episode ends');
      scene.actions([
        { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
        { label: 'Watch another episode', goto: ['artem_dorm', 'watch_more'] },
        { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun watching that with you, but I need to get going."');
    scene.text('He looks disappointed. "Oh, okay. See you around campus then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWatchMore(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  if (((s as any).artfalling ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artfalling = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchtv_friends.jpg');
    scene.text('You smile at him. "Let\'s watch another episode."');
    scene.text('He grins at you, clearly happy you seem to be enjoying one of his favorite shows. He gives you a quick hug before starting the next episode.');
    scene.text('"What do you want to do now?" he asks when it ends.');
    qspCall(s, 'artem_dorm', 'timecheck');
    scene.actions([
      { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
      { label: 'Watch another episode', goto: ['artem_dorm', 'watch_more'] },
      { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun watching that with you, but I need to get going."');
    scene.text('He looks disappointed. "Oh, okay. See you around campus then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchtv_friends.jpg');
    scene.text('You smile at him. "Let\'s watch another episode."');
    scene.text('He grins at you, clearly happy you seem to be enjoying one of his favorite shows, and quickly starts the next episode.');
    scene.text('"What do you want to do now?" he asks when it ends.');
    qspCall(s, 'artem_dorm', 'timecheck');
    scene.actions([
      { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
      { label: 'Watch another episode', goto: ['artem_dorm', 'watch_more'] },
      { label: 'I should go', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "I had a lot of fun watching that with you, but I need to get going."');
    scene.text('He looks disappointed. "Oh, okay. See you at school then."');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).artfalling ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).artemQW['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artfalling = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You sit on the couch next to Artem and talk about various topics. Or rather: you\'re doing most of the talking, and Artem is mostly listening while occasionally commenting on something you said.');
  qspCall(s, 'artem_dorm', 'timecheck');
  if (((s as any).artemQW ?? 0)?.['artfall'] > 5  &&  ((s as any).artkissing ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'artem_dorm', 'kiss');
  } else {
    qspCall(s, 'artem_dorm', 'walk');
    if (((s as any).artemQW ?? 0)?.['date'] > 0  &&  ((s as any).artemQW ?? 0)?.['date'] <= 3  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'artem_dorm', 'date');
    } else {
      qspCall(s, 'artem_dorm', 'strip');
      if (((s as any).artemQW ?? 0)?.['date'] === 5  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'artem_dorm', 'flowers');
      } else {
        qspCall(s, 'artem_dorm', 'another_date');
        if (((s as any).artemQW ?? 0)?.['date'] >= 9  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)  &&  ((s as any).artemQW ?? 0)?.['bf'] === 0) {
          qspCall(s, 'artem_dorm', 'proposal');
        } else {
          qspCall(s, 'artem_dorm', 'one_more_date');
          qspCall(s, 'artem_dorm', 'other_topics');
        }
      }
    }
  }
  scene.actions([
    { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'night_stand':
      enterNightStand(s, scene);
      break;
    case 'bookshelf':
      enterBookshelf(s, scene);
      break;
    case 'computer':
      enterComputer(s, scene);
      break;
    case 'sit_couch':
      enterSitCouch(s, scene);
      break;
    case 'watch_more':
      enterWatchMore(s, scene);
      break;
    case 'chat':
      enterChat(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const artem_dorm: LocationDef = {
  name: 'artem_dorm',
  title: 'Artem\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['The dorm room has two beds. The one on the left belongs to Artem\'s roommate while the one on the right is Artem\'s.'],
  enter: enter,
};
