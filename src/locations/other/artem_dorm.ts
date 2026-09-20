import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'artem_dorm', 'start');
  (s as any).locclass = 'livingr';
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'artem_chebotarev_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Artem\'s Dorm Room</b></center>');
  scene.img('images/locations/city/island/university/dorm/artemroom/artem_dorm_room.jpg');
  scene.text('The dorm room has two beds. The one on the left belongs to Artem\'s roommate while the one on the right is Artem\'s.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_studying_or_relaxing') {
    scene.text('Above his bed is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artem_dorm/u0027, /u0027bookshelf/u0027); return false;">bookshelf</a> full of books, and the wall is plastered with sci-fi, fantasy, anime and super hero posters. Next to the bed is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artem_dorm/u0027, /u0027night_stand/u0027); return false;">night stand.</a> At the foot of his bed is a small desk with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027artem_dorm/u0027, /u0027computer/u0027); return false;">laptop</a> on it. Artem is sitting on a couch facing a TV sitting against the wall.');
  } else {
    if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_asleep') {
      scene.text('Artem is getting ready to go to sleep, so you better leave.');
    } else {
      scene.text('Artem is getting ready to leave, so you better do the same.');
    }
  }
  if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_studying_or_relaxing') {
    scene.actions([
      { label: 'Sit with Artem', goto: ['artem_dorm', 'sit_couch'] },
    ]);
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the drawer', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterBookshelf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
  qspCall(s, 'core_library', 'setloc', 'artem_dorm', 'bookshelf');
  (s as any).locclass = 'livingr';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/artemhome/artemroom/bookshelf.jpg');
  scene.text('The small bookshelf has a lot of fantasy and science fiction books, a few gaming books and a lot of various nerdy nicknacks from popular fantasy, anime, and science fiction movies and TV shows. Maybe he wouldn\'t mind if you borrowed a book?');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).artem_borrowed_book ?? 0) !== 1) {
    scene.actions([
      { label: 'Ask to borrow a book', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
    (st as any).artem_borrowed_book = 1;
    ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = (Math.floor(Math.random() * 201) + 400);
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    (st as any).artem_borrowed_book = 0;
    ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = 0;
    qspCall(st, 'stat', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    if (((st as any).pcs_intel ?? 0) <= 40) {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterComputer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow', 'noporn');
  if ((!((s as any).ArtemCompUse ?? 0))) {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Go online', goto: ['komp', 'start'] },
    { label: 'Find something else to look at', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterSitCouch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/artemroom/sitcouch.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).artemQW ?? 0)?.['date'] > 0) {
    scene.text('You walk over and sit on the couch next to Artem, who scoots over as he smiles at you. "I\'m glad you stopped by. Would you like to play some games? Or we could watch TV? Or just talk if you prefer?"');
    scene.text('You can tell he\'s trying to make you happy.');
  } else {
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.text('You walk over and sit on the couch next to Artem. As you do, he puts his arm around you.');
      scene.text('"It\'s always great when the most beautiful girl in the world comes to visit me. Would you like to play some games? Or we could watch TV? Or just talk if you prefer?"');
      scene.text('You can tell he\'s trying to make you happy.');
    } else {
      scene.text('You walk over and sit on the couch next to Artem. As you do, he smiles at you.');
      scene.text('"I\'m glad you stopped by. I could really use a break from studying. Maybe we could play some games? Or we could watch TV? Or just talk if you prefer?"');
      scene.text('You can tell he\'s trying to make you happy.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
    { label: 'Watch him play', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchplay.jpg');
    scene.text('You shake your head. "No thanks. I\'ll just watch you play."');
    scene.text('He shrugs slightly and starts playing, but is so focused on the game that you think he\'s completely forgotten you\'re even here.');
    scene.text('After about an hour, you\'re about to get up and leave when he finally saves his game and puts the controller neatly away. "What do you want to do now?"');
    scene.actions([
      { label: 'Talk to Artem', goto: ['artem_dorm', 'chat'] },
      { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) - (1);
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    if (((st as any).artfalling ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
      (st as any).artfalling = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'exp_gain', 'gaming', 1);
    qspCall(st, 'stat', '');
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
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'stat', '');
    if (((st as any).artemQW ?? 0)?.['bf'] === 1) {
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
    ((s as any).artemQW = (s as any).artemQW ?? {})['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artfalling = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/artemhome/livingroom/watchtv_friends.jpg');
    scene.text('You smile at him. "Let\'s watch another episode."');
    scene.text('He grins at you, clearly happy you seem to be enjoying one of his favorite shows. He gives you a quick hug before starting the next episode.');
    scene.text('"What do you want to do now?" he asks when it ends.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  if (((s as any).artfalling ?? 0) !== ((s as any).daystart ?? 0)) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['artfall'] = ((s as any).artemQW['artfall'] ?? 0) + (1);
    (s as any).artfalling = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You sit on the couch next to Artem and talk about various topics. Or rather: you\'re doing most of the talking, and Artem is mostly listening while occasionally commenting on something you said.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTimecheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).artemQW ?? 0)?.['artfall'] > 5  &&  ((s as any).artkissing ?? 0) !== ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKiss(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).artemQW ?? 0)?.['date'] === 0  &&  ((s as any).artemQW ?? 0)?.['artfall'] >= 10  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).artemQW ?? 0)?.['date'] > 0  &&  ((s as any).artemQW ?? 0)?.['date'] <= 3  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDate(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).artemQW ?? 0)?.['date'] === 4  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStrip(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).artemQW ?? 0)?.['date'] === 5  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFlowers(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).artemQW ?? 0)?.['date'] >= 6  &&  ((s as any).artemQW ?? 0)?.['date'] <= 8  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnotherDate(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).artemQW ?? 0)?.['date'] >= 9  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)  &&  ((s as any).artemQW ?? 0)?.['bf'] === 0) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterProposal(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).artemQW ?? 0)?.['bf'] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).artemQW ?? 0)?.['dateask'] !== ((s as any).daystart ?? 0)) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOneMoreDate(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOtherTopics(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
  ]);
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    if (((st as any).artkissing ?? 0) !== ((st as any).daystart ?? 0)) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) + (1);
      (st as any).artkissing = ((st as any).daystart ?? 0);
    }
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('As you sit beside him, you perhaps look at him a little too long because he turns to look at you. You lean over to give him a kiss and he returns it fully.');
    qspCall(st, 'arousal', 'foreplay', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop kissing and talk', goto: ['artem_dorm', 'chat'] },
      { label: 'Make out', handler: (st: GameState) => {
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('He pulls you in close and you\'re soon passionately making out, the kisses full of eager lust and urgent need.');
    scene.text('You feel yourself getting more aroused as he scoots back against the wall and pulls you onto his lap. You can feel the hard bulge in his pants as you straddle him.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop making out', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'arousal', 'end');
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You pull away before things go too far and catch your breath. You see his slightly confused look and you feel a little bad. "Sorry, I got carried away. Can we just go back to talking?"');
    scene.text('He frowns. "Yes of course." He leans back and tries to adjust his pants to make his erection more comfortable when he thinks you\'re not looking.');
    scene.actions([
      { label: 'Talk about something else', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('His hands roam all over you body, but he pays special attention to your breasts, kneading and squeezing them repeatedly. As you keep making out, you feel the bulge growing in his pants.');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'stat', '');
    if (((st as any).artemQW ?? 0)?.['hj'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Give him a handjob', goto: ['artem_sex_uni', 'hj'] },
      ]);
    }
    if (((st as any).artemQW ?? 0)?.['bj'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Give him a blowjob', goto: ['artem_sex_uni', 'bj'] },
      ]);
    }
    if (((st as any).artemQW ?? 0)?.['sex'] > 0  ||  ((st as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Have sex with him', goto: ['artem_sex_uni', 'sex'] },
      ]);
    }
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Keep making out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You pull your hand away from the bulge in his pants, but keep kissing him. He lets go and stops trying to force your hand down to his crotch, focusing on kissing and fondling you instead.');
    if (((st as any).artemQW ?? 0)?.['bf'] === 1  &&  (((st as any).artemQW ?? 0)?.['hj'] > 0  ||  ((st as any).artemQW ?? 0)?.['bj'] > 0  ||  ((st as any).artemQW ?? 0)?.['sex'] > 0)) {
      if (((st as any).artemQW ?? 0)?.['hj'] > 0) {
        scene.actions([
          { label: 'Give him a handjob', goto: ['artem_sex_uni', 'hj'] },
        ]);
      }
      if (((st as any).artemQW ?? 0)?.['bj'] > 0) {
        scene.actions([
          { label: 'Give him a blowjob', goto: ['artem_sex_uni', 'bj'] },
        ]);
      }
      if (((st as any).artemQW ?? 0)?.['sex'] > 0) {
        scene.actions([
          { label: 'Have sex with him', goto: ['artem_sex_uni', 'sex'] },
        ]);
      }
      qspCall(st, 'willpower', 'bj', 'resist', 'medium');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Pull away and stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull away and stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Stop making out', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'arousal', 'end');
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You pull away before things go too far and catch your breath. You see his slightly confused look and you feel a little bad. "Sorry, I got carried away. Can we just go back to talking?"');
    scene.text('He frowns. "Yes of course." He leans back and when he thinks you\'re not looking, tries to adjust his pants to make his erection more comfortable.');
    scene.actions([
      { label: 'Talk about something else', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
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

function enterWalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Artem smiles at you. "Do you want to go for a walk on the quad?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay here', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['artfall'] = ((st as any).artemQW['artfall'] ?? 0) - (4);
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'hate');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    { label: 'Agree to go for a walk', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = ((st as any).artemQW['date'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You give him a cute smile. "Sure. That sounds like fun!"');
    scene.text('You quickly pack up your things and leave the dorm room with him, heading for the quad.');
    scene.actions([
      { label: 'Walk in the quad', goto: ['artem_date_events_uni', 'firstdate'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Artem smiles at you. "Would you like to go out on a date?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay here', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = ((st as any).artemQW['date'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You give him a cute smile. "Sure. That sounds like fun!"');
    scene.text('You quickly pack up your things and leave his dorm room with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events_uni', 'artem_date'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStrip(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
  scene.text('Artem has an embarrassed look on his face.');
  if (((s as any).artemQW ?? 0)?.['stripsee'] === 0) {
    scene.text('"You know… I\'ve never seen a girl naked before. Only in pictures… Maybe you could…"');
  } else {
    scene.text('"I enjoyed seeing you naked last time. I want you to strip for me again, but can you make a bit more of a show of it this time?"');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskedstrip(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFlowers(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/school/boy/artem/flowers.jpg');
  scene.text('As you sit down to talk, Artem suddenly produces a bouquet of flowers and offers it to you. "I got these for you. I hope you like them."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the flowers', handler: (st: GameState) => {
    (st as any).giftedflowers = 'Artem';
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = ((st as any).artemQW['date'] ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'adore');
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You smile at him. "Awww, they\'re beautiful! You shouldn\'t have!"');
    scene.text('He blushes. "Not as beautiful as you…"');
    // TODO-QSP: dynamic text: He leans in and kisses you before you can pull away and gently begins to caress ...
    scene.text(`He leans in and kisses you before you can pull away and gently begins to caress your ${((st as any).titsize ?? '')} breasts through your clothes.`);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him to stop it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him to stop it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You push his hands away. "Wait… You\'re going too fast, please stop!"');
    scene.text('He does as you ask and pulls his hands back as he apologizes.');
    scene.actions([
      { label: 'Just talk', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You return his kiss as his hands keep awkwardly groping at your breasts before he sits with his back against the wall and pulls you on top of him. You can feel the hard bulge in his pants as you keep making out. After a few seconds, he takes one of your hands and pulls it down to his crotch.');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… Not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a handjob', goto: ['artem_sex_uni', 'hj'] },
      { label: 'Give him a blowjob', goto: ['artem_sex_uni', 'artem_bj'] },
    ]);
  } },
    ]);
  } },
    { label: 'Reject the flowers', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = (-1);
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'loathe');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/flowerstrash.jpg');
    scene.text('You look at Artem compassionately, but don\'t take the flowers. "Thank you… They\'re very nice, but we\'re just friends… I don\'t want to give you the wrong idea by accepting them, you know?"');
    scene.text('Artem sighs, and disappointedly throws the flowers into the trash.');
    scene.text('There\'s a few minutes of awkwardness as you try and talk to him, but it\'s obvious he no longer feels like talking to you, so you get up and leave his dorm room.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnotherDate(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('Artem smiles at you as he walks over and hugs you. "Would you like to go out on another date?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay here', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = ((st as any).artemQW['date'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You give him a cute smile. "Sure. That sounds like fun!"');
    scene.text('You quickly pack up your things and leave his dorm room with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events_uni', 'artem_date'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterProposal(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  ((s as any).artemQW = (s as any).artemQW ?? {})['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/school/boy/artem/wine.jpg');
  scene.text('When you enter the room, you immediately notice the small folding table with chairs set up. It has several lighted candles on it, and a bottle of wine with two glasses.');
  scene.text('You look at Artem, slightly confused. "What\'s the meaning of this, Artem?"');
  scene.text('He smiles at you. "Well, we\'ve spent a lot of time dating, so I figured it would be nice to make it official."');
  scene.text('You\'re still not sold on the idea, and question him further. "Make what official? And where did you get that wine from?"');
  // TODO-QSP: dynamic text: Artem reassures you. "Relax, <<$pcs_nickname>>. My roommate will be out all nigh...
  scene.text(`Artem reassures you. "Relax, ${((s as any).pcs_nickname ?? '')}. My roommate will be out all night. So please… Let's just sit down and chat?"`);
  scene.text('You relax a little and nod at him. "Okay… I have to admit, that does sound nice."');
  scene.text('You spend the next half hour talking about your plans for the future. The bottle of wine is empty before you know it, and you feel a bit tipsy.');
  // TODO-QSP: dynamic text: After you''ve drunk most of the wine and talked for a while, Artem is silent for...
  scene.text(`After you've drunk most of the wine and talked for a while, Artem is silent for a few seconds before he takes a deep breath. "${((s as any).pcs_nickname ?? '')}, will you be my girlfriend?" he quickly asks.`);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (5);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
  }
  qspCall(s, 'drugs', 'alcohol', 'wine', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', (-25));
    ((st as any).artemQW = (st as any).artemQW ?? {})['artembrokenheart'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/artemcry.jpg');
    scene.text('You shake your head. "I\'m sorry if you got the wrong impression, Artem. I like you, I really do, but I don\'t want to be your girlfriend."');
    scene.text('He looks so heartbroken that he might cry. "Is there someone else?"');
    scene.text('You sigh. "It\'s not that. I just don\'t want to be anyone\'s girlfriend right now. Can\'t we just keep doing what we\'re doing? Be friends and go out on dates?"');
    scene.text('Tears start rolling down his cheeks as he stands up. "I get it. You want to just date anyone. Well I can\'t do that! I thought we had something special, but I guess I was wrong. Please leave and never come back!" You know there\'s nothing you can say and trying to explain will only make things worse, so you get up and head for the door.');
    scene.text('"I\'ll see you later, okay?" you say, but he turns away from you. Once you close the door, you can hear him crying. Not sure what else to do, you just leave.');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['bf'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'adore');
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    // TODO-QSP: dynamic text: A huge grin appears on his face as he gets up and rushes around the table, almos...
    scene.text(`A huge grin appears on his face as he gets up and rushes around the table, almost knocking it over in his haste to get to you. He pulls you up and into a tight fierce hug. He nuzzles your neck as the two of you hug. "You just made me the happiest guy in the world. I love you ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Tell him you love him too', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'adore');
    ((st as any).artemQW = (st as any).artemQW ?? {})['artemlove'] = 1;
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('You kiss him. "I love you too, Artem."');
    scene.text('You\'ve never seen him look so happy as he starts kissing you and roaming his hands all over your body.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterArtemgirlfriend(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Say nothing, just hug him back', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/hugging.jpg');
    scene.text('You kiss him and hug him back.');
    scene.text('You\'ve never seen him look so happy as he starts kissing you and roaming his hands all over your body.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterArtemgirlfriend(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOneMoreDate(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['dateask'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  // TODO-QSP: dynamic text: Artem smiles at you as he walks over and hugs you. "<<$pcs_nickname>>, would you...
  scene.text(`Artem smiles at you as he walks over and hugs you. "${((s as any).pcs_nickname ?? '')}, would you like to go out on another date?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay here', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'stat', '');
    scene.text('You shake your head. "No thanks, but thank you for asking."');
    scene.text('He looks a little disappointed. "Oh, okay…"');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    { label: 'Agree to go on a date', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    ((st as any).artemQW = (st as any).artemQW ?? {})['date'] = ((st as any).artemQW['date'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('You give him a cute smile. "Sure, we can go out on a date. That sounds like fun!"');
    scene.text('You quickly pack up your things and leave his dorm room with him.');
    scene.actions([
      { label: 'Go on a date', goto: ['artem_date_events_uni', 'artem_date'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOtherTopics(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
    if (((s as any).artemQW ?? 0)?.['artem_open_relationship'] === 0) {
      scene.actions([
        { label: 'Talk to him about an open relationship', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You quietly walk past Artem and enter his room, sitting on the couch without saying a word.');
    // TODO-QSP: dynamic text: He looks at you questioningly. "<<$pcs_nickname>>…"
    scene.text(`He looks at you questioningly. "${((st as any).pcs_nickname ?? '')}…"`);
    scene.text('You frown as you look at him. "We need to talk."');
    scene.text('His eyes start to water up. "Okay… About what?" He\'s trying to put on a brave face and salvage this.');
    scene.text('You sigh. "I think we should have an open relationship." You can tell that\'s not what he expected and you hurry on before he can say something. "I think we should keep dating, I love you, but we\'re both young and have a lot to experience, so I think we should see other people as well. We\'ll stay boyfriend and girlfriend, though."');
    if (((st as any).artemQW ?? 0)?.['confidence'] + Math.max(5 * (((st as any).artemQW ?? 0)?.['nush3some'] + ((st as any).artemQW ?? 0)?.['katja_threesome'] - 3), Math.min(5, ((st as any).artemQW ?? 0)?.['artem_dom'] / 4)) >= 20) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['artem_open_relationship'] = 1;
      scene.text('He\'s already nodding in agreement before you even finish. "I think that\'s a great idea! You\'re right, we are young and should sow our wild oats while we can. This won\'t mean we\'ll love each other any less, it just means we get to explore things."');
      scene.text('He seems to like the idea more than you expected, so you talk about how this will make things better for both of you before changing the subject.');
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        if (((st as any).artemQW ?? 0)?.['strapon_count'] < 10) {
          scene.text('He\'s already shaking his head before you finish. "No, I\'m not comfortable with that."');
          scene.text('You try to convince him, but he shuts you down. "No. If you love me, then you\'ll drop this. If you don\'t, then maybe we shouldn\'t be together at all."');
          scene.text('You stop talking and the two of you sit quietly as you think about his words. Maybe he\'s right. Maybe you should break up.');
        } else {
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_sub'] = 1;
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_open_relationship'] = 1;
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = (-1);
          scene.text('He looks at you sadly before he slowly nods. "If it makes you happy, then you know I\'ll do anything for you. I love you that much," he says in a submissive, somewhat deflated tone.');
          scene.text('You can tell he really would agree to just about anything for you, maybe even to being cucked if you wanted.');
          scene.text('You quickly give him a hug as you smile. "Don\'t worry, I won\'t leave you and I still love you. Trust me, we\'ll have fun."');
          scene.text('He smiles back and you talk more about it before changing subjects.');
        }
      } else {
        scene.text('He seems unsure. "Okay, but only with other girls, I don\'t think I\'d be okay with you being with another guy."');
        qspCall(st, 'willpower', 'misc', 'force', 'hard');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Convince him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Convince him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_open_relationship'] = 1;
    qspCall(st, 'stat', '');
    scene.text('You use all your tricks to convince him to agree to it and he sighs. He\'s obviously not happy about it, but he gives in. "Okay, we can try it… for a while. If either of us change our mind then we\'ll end it, okay?"');
    scene.text('You nod in agreement, knowing you\'ll just be able to convince him again if you needed. He doesn\'t seem to want to really talk about it, so you quickly change the topic.');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    scene.text('You nod your head. "Okay sure, only with girls."');
    scene.text('He relaxes a bit and the two of you talk about how you believe this will make your relationship better before you change the subject.');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask him to hang out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('As you sit and make idle small talk, you get the idea to go out somewhere together and just hang out. "Hey, you want to go somewhere?"');
    scene.text('He nods. "Sure, we can go out. Where do you want to go?"');
    scene.text('You think about it; the city is full of places to go.');
    scene.text('***Note - More places to be added in the future***');
    scene.actions([
      { label: 'Never mind', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('As you think about it, you realize nothing really comes to mind. "You know what, never mind. Let\'s just stay in together."');
    scene.text('He smiles at you. "I like the sound of that."');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      { label: 'The Coffee Hole', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    if (((st as any).artemQW ?? 0)?.['nush3some_again'] >= 4) {
      scene.text('You think about it and decide you could really go for a coffee. "How about we go to the Coffee Hole?"');
      scene.text('He smiles at you and nods. "Sure, sounds good."');
      scene.text('"I think Nush might be working there tonight…" you slyly comment as you get up.');
      scene.text('He perks up immediately and grins. "Oh really? Well, this could be real fun then."');
      scene.text('Ever since you let him fuck her, he\'s been eager to hang out with her, even if she did used to bully him back in school.');
      scene.text('The two of you get up together and leave his dorm room, heading for the Coffee Hole coffee shop.');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A144'] >= 60  &&  ((st as any).locat ?? 0)?.['A144'] === 9) {
        scene.text('You think about it and decide you could really go for a coffee. "How about we go to the Coffee Hole?"');
        scene.text('He smiles at you and nods. "Sure, sounds good."');
        scene.text('"I think Nush might be working there tonight," you say as you get up.');
        scene.text('He nods. "Oh… okay." He doesn\'t sound too thrilled, but he hides it well. You know it has to to do with her bullying him back in school.');
        scene.text('The two of you leave his dorm room, heading for the Coffee Hole coffee shop.');
      } else {
        scene.text('You think about it and decide you could really go for a coffee. "How about we go to the Coffee Hole?"');
        scene.text('He smiles at you and nods. "Sure, sounds good."');
        scene.text('The two of you get up together and leave his dorm room, heading for the Coffee Hole coffee shop.');
      }
    }
    scene.actions([
      { label: 'Head to the Coffee Hole', goto: ['artem_events_uni', 'coffee_hole'] },
    ]);
  } },
    ]);
  } },
      { label: 'Break up with him', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['bf'] = 0;
    ((st as any).artemQW = (st as any).artemQW ?? {})['artembrokenheart'] = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A2', (-30));
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/artemcry.jpg');
    scene.text('You quietly walk past Artem and enter his room, sitting on the couch without saying a word.');
    // TODO-QSP: dynamic text: He looks at you questioningly. "<<$pcs_nickname>>…"
    scene.text(`He looks at you questioningly. "${((st as any).pcs_nickname ?? '')}…"`);
    scene.text('You frown as you look at him. "We need to talk."');
    scene.text('His eyes start to water up. "Okay… About what?" He\'s trying to put on a brave face and salvage this.');
    scene.text('You sigh. "I think we should break up."');
    // TODO-QSP: dynamic text: He tries to hug you, but you stop him. "Why <<$pcs_nickname>>? What did I do wro...
    scene.text(`He tries to hug you, but you stop him. "Why ${((st as any).pcs_nickname ?? '')}? What did I do wrong?"`);
    scene.text('You get up to put a little space between you. "It\'s not you… I just don\'t love you anymore."');
    scene.text('He openly starts to cry. "Is it someone else?"');
    scene.text('You shake your head. "Look, you\'re a great guy, but I just feel differently now is all." You try to comfort him and he begs and pleads you not to do this, but after some time you finally get up. "I\'m sorry, but this is over. I\'m truly sorry."');
    scene.text('With that, you turn and walk out, leaving Artem crying behind you.');
    scene.actions([
      { label: 'Leave his room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['nush3some_ask'] === 1) {
    scene.actions([
      { label: 'Bring up threesome with Anushka', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some_ask'] = ((st as any).artemQW['nush3some_ask'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You\'re unsure how to bring this up. "I was hanging out with Nush the other day, and well, we started talking about you."');
    scene.text('He looks at you questioningly. "Oh? Why?"');
    scene.text('You smile as you look at him. "Because you\'re my boyfriend, silly!"');
    scene.text('He looks a little sheepish. "Oh… Uh… So what did you guys talk about?"');
    scene.text('"Lots of stuff, but eventually we started talking about sex and… Anyway, we talked about it and wondered if you might be interested in a threesome?"');
    scene.text('He looks almost shocked. "Uh… Are you sure?"');
    scene.text('You give him a slightly surprised look. "You don\'t want to? I thought all guys wanted to have sex with two girls at the same time?"');
    scene.text('He nervously laughs. "Well yeah, but she has such a reputation…" You can tell there\'s more to it by how he\'s acting.');
    scene.text('"Her reputation? What, as a wild girl that likes to have sex? I thought that would be a turn-on." He blushes more and looks even more nervous. "Okay, so it\'s not that, or at least not only that. If you don\'t want to, we don\'t have to, but what is it?" You take his hand in yours as you ask him.');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('He sighs. "I\'m afraid. Afraid of what she\'ll think or say. She\'s… Really experienced. What if she thinks I\'m no good?"');
    scene.text('You lean over and give him a kiss. "She\'s not like that. She might give you some advice, but she\'s not the type to lay back and judge others. Instead, she\'s more likely to encourage you to do what she likes."');
    scene.text('He starts to nod. "Okay yeah, I\'d like to be with two girls, and if she\'s your choice, then I\'m good with it." He seems to want to say more, but stays silent.');
    scene.text('You smile, catching it. "What?"');
    scene.text('He blushes. "Nothing."');
    scene.text('You raise his face to yours to look into each other\'s eyes. "Just tell me. We should be honest with each other about everything."');
    scene.text('He nods. "You\'re right. I was just thinking… It might be nice to get back at her a little for all the bullying."');
    scene.text('You giggle. "Oh, you want to fuck her hard and rough, don\'t you?"');
    scene.text('He turns bright red, confirming your guess. "Yeah… And I heard she lets guys use her ass too."');
    scene.text('You grin at him. "You can fuck her as hard as you want, and you can fuck her ass as hard as you want."');
    scene.text('He smiles back at you, and you laugh and talk about sex for a while.');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['nush3some'] === 1) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    if (((s as any).locat ?? 0)?.['A144'] > 0  &&  ((s as any).locat ?? 0)?.['A144'] < 8) {
      scene.actions([
        { label: 'Ready for threesome with Anushka', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some'] = ((st as any).artemQW['nush3some'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "So, are you ready for our threesome?"');
    scene.text('He looks into your eyes and nods with a nervous smile. "Yeah, I\'m ready. As ready as I\'ll ever be."');
    scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Don\'t worry, it\'ll be fun." He just nods and doesn\'t say anything, but you can tell he\'s also eager under his nervousness.');
    scene.text('You pull out your phone and text Anushka. "Hey, what\'s up? You ready to come over for that threesome?"');
    scene.text('It takes a minute or so before she responds. "Sure, where at?", followed by a bunch of sexual innuendo emojis. You can sense Artem looking over and reading what she wrote.');
    scene.text('You text back. "Artem\'s dorm room, just knock and he\'ll answer the door."');
    scene.text('She just texts back several more sexual innuendo emojis.');
    scene.text('You put your phone down. "She\'s on her way."');
    scene.text('He tidies up the dorm room while waiting for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. You can\'t help but smile; he\'s serious about getting a little payback. He sits back next to you to wait for Anushka to show up.');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_sex_uni', 'anushka_3some'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 1) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    if (((s as any).locat ?? 0)?.['A144'] > 0  &&  ((s as any).locat ?? 0)?.['A144'] < 8) {
      scene.actions([
        { label: 'Invite Anushka again', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some_again'] = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You decide to see if he wants to have another threesome with Anushka. "I was thinking, since you had fun last time when we had a threesome with Anushka, what would you say about doing it again?"');
    scene.text('He seems a little surprised. "Yeah, she said maybe, but that sounded more like a polite no to me…" He pauses and gives you a hopeful look. "Do you think she might be willing to do it again?" He\'s trying to hide his eagerness from you.');
    scene.text('You nod. "Yeah, I think I she would be into it. Do you want me to ask?"');
    scene.text('He blushes, but nods. "Yeah. Yeah, I think I do."');
    scene.text('You smile at his blush. "Okay, next time I see her, I\'ll ask."');
    scene.text('He just nods to that and the two of you talk about last time.');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 3) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    if (((s as any).locat ?? 0)?.['A144'] > 0  &&  ((s as any).locat ?? 0)?.['A144'] < 8) {
      scene.actions([
        { label: 'Ready for a second threesome with Anushka', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some'] = ((st as any).artemQW['nush3some'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    if (((st as any).artemQW ?? 0)?.['rough_anal_nush'] === 2  ||  ((st as any).anushkaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('You give him a kiss. "So, are you ready to have a threesome with Nush again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Oh yeah, I\'m ready. This time I\'m going to totally make her my little bitch! I\'m going to tear her little pussy and tight ass up!" He seems very eager for a second go around.');
      scene.text('You smile and give him a reassuring pat on the leg as you look at him. "Don\'t get too carried away. We all want to have fun and… Wait, <i>your</i> little bitch?"');
      scene.text('He blushes. "I know, I won\'t be too rough. I just want her to know after today that when we have our fun together, I own her ass and she\'s OUR little bitch," he says with a smile.');
      scene.text('You laugh and shake your head at his comment.');
    } else {
      scene.text('You give him a kiss. "So, are you ready to have a threesome with Nush again?"');
      scene.text('He looks into your eyes and nods with a confident smile. "Yeah, I\'m ready. This time will be different, no holding back. I\'m going to show her who\'s the boss."');
      scene.text('You think he\'s more talking to himself than you at this point as you smile and give him a reassuring pat on the leg. "Don\'t worry, it\'ll be fun."');
      scene.text('He just nods and doesn\'t say anything, but you can tell he\'s also eager under his nervousness.');
    }
    scene.text('You pull out your phone and text Anushka. "Hey, what\'s up? You ready to come over for another threesome with Artem?"');
    scene.text('It takes a minute or so before she responds. "Sure, dorm room again?", followed by a bunch of sexual innuendo emojis. You can sense Artem looking over and reading what she wrote.');
    scene.text('You text back. "Yes, just knock and he\'ll answer the door."');
    scene.text('She just texts back several more sexual innuendo emojis.');
    scene.text('You put your phone down. "She\'s on her way."');
    scene.text('He tidies the dorm room while waiting for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. You can\'t help but smile; he\'s serious about getting a little payback. He sits back next to you to wait for Anushka to show up.');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_nush_sex_uni', 'anushka_3some1'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).artemQW ?? 0)?.['nush3some_again'] === 5  ||  ((s as any).artemQW ?? 0)?.['nush3some_again'] === 7) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    if (((s as any).locat ?? 0)?.['A144'] > 0  &&  ((s as any).locat ?? 0)?.['A144'] < 8) {
      scene.actions([
        { label: 'Ready for more fun with Anushka', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['nush3some'] = ((st as any).artemQW['nush3some'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "So, are you ready to fuck our pet bitch again?"');
    scene.text('He looks into your eyes and nods with a confident smile. "Hell yes, tell her to get her ass over here right now!"');
    scene.text('He seems very eager for another go, and you smile and give him a reassuring pat on the leg as you look at him. "Okay, I\'ll tell her you want her ass over here right now."');
    scene.text('He just grins at you and watches as you pull out your phone and text Anushka. "Hey, Artem says to get your slutty ass over to his dorm room right now so he can fuck it again."');
    scene.text('It takes a minute or so before she responds. "One slutty ass on the way", followed by a bunch of sexual innuendo emojis.');
    scene.text('You glance over at him. "Her slutty ass is on the way for your fucking pleasure."');
    scene.text('He laughs, then gets up to tidy the room while you wait for her, stopping at his dresser and digging into the bottom drawer before setting a bottle of lube down on the end table. Afterwards, he sits back down next to you to wait for Anushka to show up.');
    qspCall(st, 'arousal', 'kiss', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['artem_nush_sex_uni', 'anushka_3some2'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 70  &&  ((s as any).artemQW ?? 0)?.['alb3some_ask'] === 0  &&  (((s as any).artemQW ?? 0)?.['artem_dom'] >= 5  ||  ((s as any).artemQW ?? 0)?.['confidence'] >= 15)) {
    scene.actions([
      { label: 'Artem has a question', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).artemQW = (st as any).artemQW ?? {})['alb3some_ask'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 7  &&  ((st as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
      scene.text('"So…" he starts. "I\'ve fucked Nush <i>and</i> Katja…"');
      scene.text('"Yeah, you have," you grin. "Quite the achievement."');
      scene.text('"I want to add to it," he states.');
      scene.text('"Oh? Who were you thinking of next?" you ask.');
      if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
        scene.text('"Albina," he states firmly. "I want to fuck Albina."');
        scene.text('His tone makes it sound more like a demand than a request.');
        scene.text('"Okay… Any reason you\'re choosing her?" you reply.');
        scene.text('He stares at you, as if wondering why you\'re even asking. "Because she\'s super hot and has an amazing ass? Nush is sexy and Katja is cute, but they have nothing on Albina!"');
        scene.text('You shake your head slightly and smile. "Okay. I can ask her for you."');
        scene.text('"I can\'t wait to dominate her ass!" he grins.');
      } else {
        scene.text('"You\'re friends with Albina, right?" he asks. "Do you think she would be willing?"');
        scene.text('While he\'s confident, you can tell he\'s still doubting his chances.');
        scene.text('"Yeah, sure. I can ask her for you," you smile.');
        scene.text('"Best girlfriend <i>ever</i>!" he says before he kisses you.');
      }
    } else {
      if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 7  ||  ((st as any).artemQW ?? 0)?.['katja_threesome'] === 2) {
        scene.text('"So I got to fuck a girl I never thought I\'d ever get a chance with," he states with a grin.');
        scene.text('"Yeah, you did," you grin back. "Quite the achievement."');
        scene.text('"I want to add to it," he states.');
        scene.text('"Oh? Who were you thinking of next?" you ask.');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
          scene.text('"Albina," he states firmly. "I want to fuck Albina."');
          scene.text('His tone makes it sound more like a demand than a request.');
          scene.text('"Any reason you\'re choosing her?" you reply.');
          if (((st as any).artemQW ?? 0)?.['nush3some_again'] === 7) {
            scene.text('He stares at you, as if wondering why you\'re even asking. "Because she\'s super hot and has an amazing ass? Nush was one thing, but Albina is out of this world!"');
            scene.text('You shake your head slightly and smile. "Okay. I can ask her for you."');
            scene.text('"I can\'t wait to dominate her ass!" he grins.');
          } else {
            scene.text('He stares at you, as if wondering why you\'re even asking. "Because she\'s super hot and has an amazing ass? Katja is cute, but Albina is out of this world!"');
            scene.text('You shake your head slightly and smile. "Okay. I can ask her for you."');
            scene.text('"I can\'t wait to dominate her ass!" he grins.');
          }
        } else {
          scene.text('"You\'re friends with Albina, right?" he asks. "Do you think she would be willing?"');
          scene.text('While he\'s confident, you can tell he\'s still doubting his chances.');
          scene.text('"Yeah, sure. I can ask her for you," you smile.');
          scene.text('"Best girlfriend <i>ever</i>!" he says before he kisses you.');
        }
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>…" he starts. "Can I ask you a question?"
        scene.text(`"${((st as any).pcs_nickname ?? '')}…" he starts. "Can I ask you a question?"`);
        scene.text('You smile at him. "Of course you can! You can ask me anything."');
        scene.text('"Do you think we could have a threesome?" he bluntly states.');
        scene.text('You\'re surprised at his boldness. "That depends. Who were you thinking of asking?"');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
          scene.text('"Albina," he firmly states. "I want to fuck Albina."');
          scene.text('His tone makes it sound more like a demand than a request.');
          scene.text('"Oh?" you reply. "And why is that?"');
          scene.text('He stares at you, as if wondering why you\'re even asking. "Because she\'s super hot and has an amazing body?"');
          scene.text('You shake your head slightly and smile. "Okay. I can ask her for you."');
          scene.text('"I can\'t wait!" he grins. "I\'ve always wanted to fuck a cheerleader…"');
        } else {
          scene.text('"You\'re friends with Albina, right?" he asks. "Do you think she would be willing?"');
          scene.text('While he\'s confident, you can tell he\'s still doubting his chances.');
          scene.text('"Yeah, sure. I can ask her for you," you smile.');
          scene.text('"Best girlfriend <i>ever</i>!" he says before he kisses you.');
        }
      }
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).AlbinaQW ?? 0)?.['artem_invite'] === 1) {
    scene.actions([
      { label: 'Tell him Albina said yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['artem_invite'] = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('"So…" you start. "I spoke with Albina…"');
    scene.text('"And?" he asks, his eyes wide with excitement.');
    scene.text('"She agreed," you continue. "But only if you beat her at one of her video games first."');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('"Of course she said that," he smirks. "She\'s just scared of being dominated by a nerd. I\'ll easily kick her ass at whatever game she chooses!"');
      scene.text('You smile. "She said to come to her dorm room on Sunday evening after 7. I can meet you here and we can head up together."');
      scene.text('He nods. "Sure. I can\'t wait!"');
    } else {
      scene.text('"Really?" he asks. "Well, if that\'s what it takes, then I\'ll play her little game, figuratively and literally."');
      scene.text('You smile. "She said to come to her dorm room on Sunday evening after 7. I can meet you here and we can head up together."');
      scene.text('He nods. "Sure. I can\'t wait!"');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).AlbinaQW ?? 0)?.['artem_invite'] === 2  &&  ((s as any).week ?? 0) === 7  &&  (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 21)) {
    if (((s as any).artemQW ?? 0)?.['alb_bet_attempts'] === 0) {
      scene.actions([
        { label: 'Ready for Albina threesome', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "You ready?"');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('He nods and grins. "I can\'t believe I\'m going to fuck Albina!"');
      scene.text('You smile. "You have to beat her at the game first."');
      scene.text('He gives you a reassuring smile in return. "That\'s easy. I\'ll have her on her knees worshipping my cock before she knows it!"');
      scene.text('You smile at his confidence. He really has come far from the shy nerd he was back in school.');
    } else {
      scene.text('He nods and smiles. "Yeah, I\'m ready. As ready as I\'ll ever be."');
      scene.text('You smile and give him a reassuring pat on the leg. "Don\'t worry, it\'ll be fun."');
      scene.text('He doesn\'t say anything, but you can tell he\'s a little nervous under his otherwise confident eagerness.');
    }
    scene.actions([
      { label: 'Head up to Albina\'s room', goto: ['artem_alb_sex', 'albina_3some'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ready to try with Albina again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "You ready to try with Albina again?"');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('He nods and grins. "Yeah. She\'s going to lose this time and I\'m going to own that pussy!"');
      scene.text('You smile. "You still have to beat her first, you know."');
      scene.text('He gives you a reassuring smile in return. "I\'ve been practicing since last time. I\'ll have her on her knees worshipping my cock before she knows it!"');
    } else {
      scene.text('He nods and smiles. "As ready as I\'ll ever be. I hope I don\'t embarrass myself in front of her this time."');
      scene.text('You smile and give him a reassuring pat on the leg. "Don\'t worry about that. She\'s enjoying the challenge."');
      scene.text('He doesn\'t say anything, but you can tell he\'s a little nervous under his otherwise confident eagerness.');
    }
    scene.actions([
      { label: 'Head up to Albina\'s room', goto: ['artem_alb_sex', 'albina_3some'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).artemQW ?? 0)?.['albina_threesome'] === 1  &&  ((s as any).artemQW ?? 0)?.['alb3some_again'] === 0) {
    scene.actions([
      { label: 'Ask if he wants another threesome with Albina', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['alb3some_again'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You decide to see if he wants to have another threesome with Albina. "I was thinking, since you had fun when we had our threesome with Albina, would you be up for doing it again?"');
    if (((st as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('"Hell yeah!" he grins. "I swear she enjoyed me dominating her more than I did!"');
      scene.text('You smile at his confidence. "Okay, I\'ll ask her if she\'s up for it as well."');
      scene.text('He laughs. "I think we both already know the answer to that. Tell her that I\'ll dominate her even harder this time."');
    } else {
      scene.text('"Of course I would!" he replies. "I hope she feels the same way because I really enjoyed myself last time and I think a part of her did as well."');
      scene.text('You smile at him and give him a reassuring pat on the leg. "I can ask her for you. I\'m pretty sure she would be up for a repeat performance."');
      scene.text('He nods, but you can tell he\'s a little doubtful under his confident smile.');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['alb3some_again'] === 2) {
    scene.actions([
      { label: 'Tell him Albina said yes', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['alb3some_again'] = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('"So I spoke with Albina and she said she\'s up for another threesome. Same time, same place," you tell him.');
    scene.text('His eyes light up. "Really?! And I don\'t have to beat her at a game this time?"');
    scene.text('You shake your head and smile. "No strings attached this time."');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 5) {
      scene.text('He grins happily. "Hell yeah! I\'m going to tear her tight little pussy up again!"');
    } else {
      scene.text('He nods his head. "Cool. So Sunday night again? I\'ll try and keep my schedule clear."');
    }
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['alb3some_again'] === 3  &&  ((s as any).week ?? 0) === 7  &&  (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 21)) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "So. You ready to have another threesome with Albina?"');
    if (((s as any).AlbinaQW ?? 0)?.['artem_dom'] === 1) {
      scene.text('He looks into your eyes and nods with a confident smile. "Hell yeah! After I\'m done with her pussy, I\'ll tear her ass up and make her my little bitch!"');
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
        scene.actions([
          { label: 'Keep him in check', handler: (st: GameState) => {
    ((st as any).artemQW = (st as any).artemQW ?? {})['albina_warning'] = 1;
    scene.text('"Don\'t get too carried away," you quickly tell him. "I know you want to have some fun, but she… Just don\'t go too far with her, okay?"');
    scene.text('He nods. "Oh… Okay, I won\'t be too rough. I just want her to know that, in that moment, I\'ll own her ass."');
    scene.text('You smile. "I know you do. I just don\'t want to see my friend getting hurt is all. She\'s been through some… things."');
    scene.text('He nods again. "I understand. Let\'s head up now."');
    scene.actions([
      { label: 'Head up to Albina\'s dorm room', goto: ['artem_alb_sex', 'albina_3some2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Smile at him', handler: (st: GameState) => {
    scene.text('You smile at his confidence. He really has come far from the shy nerd he was back in school.');
    scene.text('"Oh, you want to fuck her hard and rough, do you?" you giggle.');
    scene.text('"Hell yeah!" he grins. "I\'m going to make sure she knows her place and that I own her ass!"');
    scene.text('He\'s excitedly pacing around, eager to head up to Albina\'s room.');
    scene.actions([
      { label: 'Head up to Albina\'s dorm room', goto: ['artem_alb_sex', 'albina_3some2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('He looks into your eyes and nods with a confident smile. "Yeah, I\'m ready. This time will be different, no holding back. I\'m going to show her who\'s the boss!"');
      scene.text('You think he\'s more talking to himself than you at this point as you smile and give him a reassuring pat on the leg. "Don\'t worry, it\'ll be fun."');
      scene.text('He just nods and doesn\'t say anything, but you can tell he\'s still a little nervous under his eagerness.');
      scene.actions([
        { label: 'Head up to Albina\'s dorm room', goto: ['artem_alb_sex', 'albina_3some2'] },
      ]);
    }
  }
  if (((s as any).artemQW ?? 0)?.['albina_threesome'] === 3  &&  ((s as any).hour ?? 0) < 21) {
    qspCall(s, 'schedule', 'A23');
    scene.actions([
      { label: 'Ready for more fun with Albina', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/talk2.jpg');
    scene.text('You give him a kiss. "Do you want to fuck the slutty cheerleader again?"');
    scene.text('He nods with a confident smile. "Hell yes, tell her to get her ass over here right now!"');
    scene.text('He seems very eager for another go, and you smile and give him a reassuring pat on the leg as you look at him. "Okay, let text her first."');
    if (((st as any).locat ?? 0)?.['A23'] === 16  ||  ((st as any).locat ?? 0)?.['A23'] === 18  ||  ((st as any).locat ?? 0)?.['A23'] === 19) {
      scene.text('He just grins at you and watches as you pull out your phone and text Albina. "Hey slut, Artem wants to pound your ass. Come to his dorm room. Now."');
      scene.text('It takes a minute or so before she responds with a string of fire and thirsty emojis. "on the way"');
      scene.text('You glance over at him. "One slutty ass on the way for your fucking pleasure."');
      scene.text('He just laughs as you wait for Albina to arrive.');
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'arousal', 'kiss', 1);
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Wait for Albina', goto: ['artem_alb_sex', 'albina_3some_repeating'] },
      ]);
    } else {
      if (((st as any).locat ?? 0)?.['A23'] === 20  ||  ((st as any).locat ?? 0)?.['A23'] === 22  ||  ((st as any).locat ?? 0)?.['A23'] === 23  ||  ((st as any).locat ?? 0)?.['A23'] === 31  ||  ((st as any).locat ?? 0)?.['A23'] === 33) {
        scene.text('He just grins at you and watches as you pull out your phone and text Albina. "Hey slut, Artem wants to pound your ass. Come to his dorm room. Now."');
        scene.text('You wait a few minutes, but you don\'t receive a reply or even a notification that she has read your message.');
        scene.text('You put your phone away and turn to Artem. "Sorry, but it seems like she\'s busy."');
        scene.text('"Oh," he replies, looking a little disappointed. "Another time I guess."');
        scene.actions([
          { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
          { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
        ]);
      } else {
        scene.text('He just grins at you and watches as you pull out your phone and text Albina. "Hey slut, Artem wants to pound your ass. Come to his dorm room. Now."');
        scene.text('It takes a minute or so before she responds. "I\'d love that, but I\'m busy right now. Sorry!"');
        scene.text('You send her a message voicing your disappointment and she responds in kind, sending you a string of pouty face emojis.');
        scene.text('You put your phone away and turn to Artem. "She\'d love to come over, but she\'s busy."');
        scene.text('"Damn," he replies, looking a little disappointed. "Another time then."');
        scene.actions([
          { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
          { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStraponChat(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Make small talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('The two of you chat about a variety of things, mostly movies, books, video games, his gaming night and what\'s been going on at the university lately.');
    scene.actions([
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
    ]);
  } },
    { label: 'What have you been up to?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    scene.text('<center><b>Artem\'s Dorm Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"So, what have you been up to lately?" you ask');
    scene.text('He gives you a slightly puzzled look. "Up to?"');
    scene.text('You smile at him. "You know, what have you been doing in your free time?"');
    // TODO-QSP: dynamic text: The light dawns on him. "Oh…" He looks thoughtful for a moment. "I want to show ...
    scene.text(`The light dawns on him. "Oh…" He looks thoughtful for a moment. "I want to show you something, ${((st as any).pcs_nickname ?? '')}…"`);
    scene.text('Filled with excitement, you quickly start jumping around him. "What is it?! Show it to me!"');
    scene.text('To your surprise, Artem takes out a book and shows it to you. "It\'s one of my favorite books…"');
    scene.actions([
      { label: 'What is it about', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    scene.img('images/pc/items/accessories/books/fantasy' + (Math.floor(Math.random() * 9) + 1) + '.jpg');
    scene.text('Not really what you expected, but you decide to be nice and widen your eyes. "Oh, what\'s it about?"');
    scene.text('Artem shines up in the biggest smile. "Oh, it\'s about this hero that needs to fight for a kingdom and the bad guy has all sorts of weird creatures that he forces to attack him. He finds this hidden world in his own world, so the book takes a completely different path than the one you expect it to take."');
    scene.text('Artem is so excited while explaining that you\'re having a hard time following him, but you immerse yourself in it just to make him happy.');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      { label: 'A book?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('"Really, a book?" you look at him unimpressed.');
    scene.text('A bit dejected, he starts explaining. "It\'s about this hero that needs to fight for a kingdom and the bad guy has all sorts of weird creatures that he forces to attack him. He finds this hidden world…" Noticing your boredom, he stops.');
    scene.text('You sigh. "It\'s okay, Artem. Fantasy isn\'t really my cup of tea, but as long as it makes you happy…"');
    scene.text('He nods, and you can see the disappointment in him as he puts the book back.');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStraponChat(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['strapon'] === 0) {
    if (((s as any).artemQW ?? 0)?.['anal'] >= 1) {
      scene.actions([
        { label: 'Is Artem really kinky', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You wonder just how kinky he is. "We\'ve been having sex and it\'s been great, but I was wondering if you might want to try something new?"');
    scene.text('You had his full attention at just the word sex. "Uh sure, I guess so. Is it a new position you want to try?"');
    scene.text('As he talks, he starts taking off his pants.');
    scene.actions([
      { label: 'Show him the strapon', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    if (((st as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo attached out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he see\'s what you\'re holding. "Wait… You want to wear that and… you know…"');
      scene.text('You grin at his reaction. "Come on baby, I\'ll go easy on you. I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He looks at the dildo, then to you, and back again before finally sighing and nodding slightly. "Okay fine, but you can\'t tell anyone we tried this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it."');
      scene.text('He frowns at how you worded it, but it seems good enough. "Okay, if it\'ll make you happy, then I\'ll try it, but if it starts to hurt, we\'re stopping." You nod in agreement.');
      scene.actions([
        { label: 'Put on harness', goto: ['artem_sex_uni', 'strapon_first'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
        { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
        { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      ]);
    }
  } },
      { label: 'Change your mind', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['strapon_count'] === 1) {
      scene.actions([
        { label: 'Bring up strapon sex again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    scene.text('You wonder if he might let you fuck him in the butt again. "Artem, you remember when you let me fuck you with a strapon?"');
    scene.text('He blushes bright red and panicky looks at the door, like he expects his mom to burst in at any moment. "Not so loud and yes I remember, how could I forget?"');
    scene.text('You smile at him and talk softer. "I really loved doing that and I want to do it again."');
    scene.text('He seems speechless and unsure for a moment, then softly smiles. "Yeah I guess, if it will make you happy, my love." As he talks, he starts taking off his pants.');
    if (((st as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo attached out of your purse and hold it up, showing it to him. "Here it is."`);
      scene.text('He looks at the dildo. "Okay fine, but you still can\'t tell anyone we did this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it." He frowns at how you worded it, but it seems good enough.');
      scene.actions([
        { label: 'Put on the harness', goto: ['artem_sex_uni', 'strapon_second'] },
        { label: 'Change your mind', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
        { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
        { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Bring up strapon sex yet again', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'boyStat', 'D' + ((st as any).strapNumber ?? 0) + '');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon2.jpg');
    scene.text('You wonder if he might let you fuck him in the butt again. "Artem, I was thinking tonight I can fuck you again, what do you think?"');
    scene.text('He blushes bright red. "Ok sure sweety, you can fuck me again." As he talks, he starts taking off his pants.');
    if (((st as any).strapNumber ?? 0) < 4) {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo attached ...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo attached out of your purse and hold it up, showing it to him. "This will soon be up your ass and you'll be moaning like a slut." You say with a giggle.`);
      scene.text('He looks at the dildo and for a moment you think he actually looks eager, then he looks at you and smiles. "Okay fine, but you still can\'t tell anyone we are doing this, okay?"');
      scene.text('You nod. "I swear I won\'t tell anyone unless you\'re okay with it." He frowns at how you worded it, but it seems good enough.');
      scene.actions([
        { label: 'Put on the harness', goto: ['artem_sex_uni', 'strapon_again'] },
        { label: 'Change your mind', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/strapon/first_strapon1.jpg');
    scene.text('You think about it some more and decide against it. It might freak him out and you don\'t know how he would react to such a request. "Never mind. How about we just do what we normally do?"');
    scene.text('He pauses a moment and looks at you. "Are you sure?" You nod at him and start kissing him.');
    scene.actions([
      { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: You pull the strapon harness with its <<dick>>cm <<$dick_girth>> dildo out of yo...
      scene.text(`You pull the strapon harness with its ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dildo out of your purse and hold it up, showing it to him. "I thought we could use this."`);
      scene.text('His eyes bulge when he sees how big it is and starts shaking his head. "Hell no! That thing is massive! There\'s no way you\'re sticking that in me!"');
      scene.text('You sigh. "Come on baby, I\'ll go easy on you! I let you fuck me in the ass, so it\'s only fair. You\'ll enjoy it, I promise."');
      scene.text('He keeps shaking his head and laughs a little. "Fair? That thing is way bigger than I am! Maybe if it was my size or smaller, I might consider it but not that thing!"');
      scene.text('You try to convince him, but he\'s steadfast against it and pushes you to have regular sex instead.');
      scene.actions([
        { label: 'Have sex', goto: ['artem_sex_uni', 'sex'] },
        { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
        { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterArtemgirlfriend(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to stop', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You smile at him as you push his hands away. "Artem, wait! All in good time, okay? We\'ll get there, just please… Slow down a little."');
    scene.text('Artem does as you ask and pulls his hands back as he apologizes, though he is clearly disappointed.');
    scene.text('You finish the bottle of wine with Artem, and thank him for a nice time before you gather your things and leave.');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
    { label: 'Enjoy his touch', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/makeout.jpg');
    scene.text('You return his kiss as his hands keep roaming over you body, but paying particular attention to your breasts and ass. He walks backwards, pulling you along with him until he sits on the bed with his back against the wall and pulls you on top of his lap.');
    scene.text('You can feel quite the hard bulge in his pants as you keep making out. After a few seconds, he takes one of your hands and pulls it down to his crotch.');
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull away and stop', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You pull your hand away and climb off him. "No, I can\'t… not yet. I still want to wait."');
    scene.text('He looks visibly disappointed, but nods and smiles. "Sure, I understand. I don\'t want to pressure you, so whenever you\'re ready is fine."');
    scene.actions([
      { label: 'Talk to him', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give him a handjob', goto: ['artem_sex_uni', 'hj'] },
      { label: 'Give him a blowjob', goto: ['artem_sex_uni', 'bj'] },
      { label: 'Have sex with him', goto: ['artem_sex_uni', 'sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAskedstrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'exhib', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No way', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No way', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You decline. "No, I wouldn\'t be comfortable doing that."');
    if (((st as any).artemQW ?? 0)?.['stripsee'] === 0) {
      // TODO-QSP: dynamic text: You can tell he''s seriously let down by your refusal. "Please <<$pcs_nickname>>...
      scene.text(`You can tell he's seriously let down by your refusal. "Please ${((st as any).pcs_nickname ?? '')}, all the other guys have seen a naked girl before! Please?"`);
    } else {
      // TODO-QSP: dynamic text: You can tell he''s seriously let down by your refusal. "Please <<$pcs_nickname>>...
      scene.text(`You can tell he's seriously let down by your refusal. "Please ${((st as any).pcs_nickname ?? '')}, I really enjoyed watching you naked last time. Please?"`);
    }
    qspCall(st, 'willpower', 'exhib', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'hate');
    scene.img('images/characters/pavlovsk/school/boy/artem/talk.jpg');
    scene.text('You shake your head. "I\'m sorry Artem, but I\'m just not comfortable doing that."');
    scene.text('He frowns deeply, but nods his head. "Yeah, okay…"');
    scene.actions([
      { label: 'Stop talking', goto: ['artem_dorm', 'start'] },
      { label: 'Keep talking', goto: ['artem_dorm', 'chat'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to strip', goto: ['artem_dorm', 'stripagree', '1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree to strip', goto: ['artem_dorm', 'stripagree', '0'] },
  ]);
  scene.build();
}

function enterStripagree(s: GameState, scene: SceneBuilder): void {
  ((s as any).artemQW = (s as any).artemQW ?? {})['stripsee'] = ((s as any).artemQW['stripsee'] ?? 0) + (1);
  ((s as any).artemQW = (s as any).artemQW ?? {})['date'] = ((s as any).artemQW['date'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/characters/pavlovsk/school/boy/artem/strip1.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    scene.text('You give him a serious look. "You want me to get naked for you?"');
  } else {
    scene.text('You give him a serious look. "You want me to get naked for you that badly?"');
  }
  scene.text('You see him visibly swallow as he blushes before nodding. "Yes, I do. I would really love it if you did."');
  scene.text('You think it over for a moment before nodding. "Okay fine. Sit back and enjoy the show."');
  scene.text('He grins widely as you start slowly stripping out of your clothes, teasing him as you do. You might as well have some fun with this.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start stripping', goto: ['artem_dorm', 'striptease'] },
  ]);
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/strip2.jpg');
  scene.text('You do a little dance on your knees as you slowly undress, teasing him without showing him anything but the hint of your panties. You then slowly remove your bottoms, leaving you with only your top and panties on.');
  qspCall(s, 'arousal', 'striptease', 2);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Remove your top', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/strip3.jpg');
    scene.text('Next, you start to slowly undo your top, turning your back before he can see your breasts. With your top still partially obscuring your breasts, you turn back round, giving him glimpses of your nipples until you finally remove your top, showing off your breasts in all their glory.');
    qspCall(st, 'arousal', 'striptease', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/strip4.jpg');
    scene.text('Next, you start to slowly pull your panties down, almost to the point your clit is visible before you pull them up a little, teasing him as your panties just barely obscure your pussy. You then pull your panties down to your mid thighs, showing off your pussy.');
    qspCall(st, 'arousal', 'striptease', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get naked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/strip5.jpg');
    scene.text('You pull your panties all the way off and dance around naked before you finally face away from him on your knees. You then slowly bend over with your legs spread apart, getting down on all fours and giving him a perfect look at your pussy.');
    scene.text('He looks like he\'s about to start drooling as he stares at your pussy. You give him a few more seconds before you get up and start getting dressed again.');
    scene.text('"Thank you, but I need to do a few things, so perhaps you should go," he says. You just smile as you can likely guess what he needs to do, but you respect his wishes and leave.');
    qspCall(st, 'arousal', 'striptease', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTimecheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 6) {
    scene.text('Artem glances at the clock next to his bed. "I\'m sorry but it is getting late, I need to get some sleep. I\'m glad you stopped by, maybe you can again sometime." You agree to come by again while leaving it vague on just when that might be. With an exchange of good nights, he walks you to the door. Once you leave he closes it behind you.');
    scene.actions([
{ label: 'Leave Artem\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
]);
    return;
  }
  // TODO-QSP: end
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
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'walk':
      enterWalk(s, scene);
      break;
    case 'date':
      enterDate(s, scene);
      break;
    case 'strip':
      enterStrip(s, scene);
      break;
    case 'flowers':
      enterFlowers(s, scene);
      break;
    case 'another_date':
      enterAnotherDate(s, scene);
      break;
    case 'proposal':
      enterProposal(s, scene);
      break;
    case 'one_more_date':
      enterOneMoreDate(s, scene);
      break;
    case 'other_topics':
      enterOtherTopics(s, scene);
      break;
    case 'strapon_chat':
      enterStraponChat(s, scene);
      break;
    case 'artemgirlfriend':
      enterArtemgirlfriend(s, scene);
      break;
    case 'askedstrip':
      enterAskedstrip(s, scene);
      break;
    case 'stripagree':
      enterStripagree(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'timecheck':
      enterTimecheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_dorm: LocationDef = {
  name: 'artem_dorm',
  title: 'Artem\'s Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  enter: enter,
};
