import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_musicstore', '');
  qspCall(s, 'stat', '');
  if ((!((s as any).ml_musicstorevisited ?? 0))) {
    (s as any).ml_musicstorevisited = 1;
    scene.actions([{ label: 'Continue', goto: ['city_musicstore', 'firstvisit'] }]);
  } else {
    if (((s as any).ml_didntbuyguitarthefirstvisit ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['city_musicstore', 'cameback'] }]);
    }
  }
  scene.img('images/locations/city/citycenter/mall/musicstore/music_store.jpg');
  scene.text('You enter the store, welcomed by the familiar mix of random notes and bits of songs screaming from the back.');
  qspCall(s, 'schedule', 'A154');
  (s as any).musicrand = Math.floor(Math.random() * 2) + 1;
  if (((s as any).musicrand ?? 0) === 1  &&  ((s as any).locat ?? 0)?.['A154'] === 9) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetRadomirCounterText(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('Jimmy just nods at you, then returns his attention to the guitar laying on the counter in front of him.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Shop for guitars and amps', goto: ['city_musicstore_stock', 'acoustic'] },
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).ml_boughtguitar ?? 0) > 0  ||  ((s as any).ml_boughtamp ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['city_musicstore', 'payandtakestuff'] }]);
    }
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterSetRadomirCounterText(s: GameState, scene: SceneBuilder): void {
  scene.text('As you approach the counter, you see your old classmate Radomir standing behind it.');
  if (((s as any).daystart ?? 0) !== ((s as any).radomirQW ?? 0)?.['store_chat_day']) {
    scene.actions([
      { label: 'Approach the counter', handler: (st: GameState) => {
    if (!(s as any).radomirQW) (s as any).radomirQW = {}; (s as any).radomirQW['store_chat_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    if (((s as any).npc_rel ?? 0)?.['A154'] < 20) {
      scene.text('He visibly sighs when he sees you and does his best to ignore you, though he answers any questions about instruments that you ask with the barest amount of information.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A154'] < 60) {
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('Radomir is talking about the band\'s latest gig as you approach. He looks your body up and down when he sees you. "Nice to see all the working out is paying off. Looking good."');
          scene.text('You smile. "Thanks, but I just came to look around and maybe do a little shopping."');
          scene.text('He nods and starts telling you about a variety of instruments. He seems to really know his stuff.');
        } else {
          scene.text('He smirks when he sees you. "Come to try and butter me up before I get famous?"');
          scene.text('You ignore his comment and ask him about some of the instruments.');
          scene.text('He nods and starts telling you about a variety of instruments. He seems to really know his stuff.');
        }
      } else {
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('He gives you a smile when he sees you. "Come to hang out with me on my break? Maybe we can have a little fun?" he asks with a wink.');
          scene.text('You smile. "No, I just came to look around and maybe do a little shopping."');
          scene.text('He smiles and starts telling you about a variety of instruments. He seems to really know his stuff.');
        } else {
          scene.text('He gives you a slight knowing smirk when he sees you. "So what can I do for one of my fans?"');
          scene.text('"I just came to look around and maybe do a little shopping," you reply.');
          scene.text('He nods and starts telling you about a variety of instruments. He seems to really know his stuff.');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstvisit(s: GameState, scene: SceneBuilder): void {
  (s as any).musicrand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).musicrand ?? 0) === 1) {
    scene.img('images/locations/city/citycenter/mall/musicstore/boys_rocking.jpg');
    scene.text('You enter the store, passing the door to be submerged in a loud, cacophony environment. The walls are filled with guitars, bass, amps, drums and even keyboards. In the back are three teenage boys trying to play some of the guitars. They\'re loud and not very good…');
    scene.text('A tall, ginger haired man turns to you with a bored expression that turns into a perplexed smile as he takes your sight in.');
  } else {
    if (((s as any).musicrand ?? 0) === 2) {
      scene.img('images/locations/city/citycenter/mall/musicstore/nostairways.jpg');
      scene.text('You enter the store, passing the door to be submerged in a loud, cacophony environment. The walls are filled with guitars, bass, amps, drums and even keyboards.');
      scene.text('A tall, ginger haired man turns to you with a bored expression that turns into a perplexed smile as he takes your sight in.');
      scene.text('He suddenly turns and throws a sponge at one of the boys playing in the back. "No. Stairway. To. Heaven!" he growls and points at the sign on the wall before turning back to you.');
    } else {
      scene.img('images/locations/city/citycenter/mall/musicstore/music_store.jpg');
      scene.text('You enter the store, passing the door to be submerged in a loud, cacophony environment. The walls are filled with guitars, bass, amps, drums and even keyboards.');
      scene.text('A tall, ginger haired man turns to you with a bored expression that turns into a perplexed smile as he takes your sight in.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Approach the counter', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/musicstore/jimmy.jpg');
    scene.text('He straightens up. "Hello there, I\'m Jimmy! Is there anything I can help you with?"');
    scene.actions([
      { label: 'Look for a guitar', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/musicstore/cheap_acoustic_1.jpg');
    scene.text('You start browsing the guitars on offer, but aren\'t sure what you\'re looking and gladly accept his help. After answering his questions about what you\'re looking for, he finally picks up an affordable acoustic guitar as a recommendation.');
    scene.text('He leaves you alone with the instrument, so you sit down to try it. You strum the chords that you know, trying to play something.');
    if (qspFunc(s, 'money', 'can_afford', 3400) === 1) {
      if (qspFunc(s, 'money', 'can_afford', 14280) === 0) {
        scene.text('While the guitar isn\'t the best sounding, it\'s comfortable and looking at the price tags, the only one you can afford.');
      } else {
        scene.text('The guitar isn\'t the best sounding. However, looking at the price tags on the others, you\'re not sure if you should spend so much money on a better one until you\'re better at playing.');
      }
      scene.actions([
        { label: 'Buy a cheap acoustic guitar ( [3400₽]...]', goto: ['city_musicstore', 'buycheapacoustic'] },
        { label: 'You have to think about it', handler: (st: GameState) => {
    (s as any).ml_didntbuyguitarthefirstvisit = 1;
    scene.text('You hesitate before deciding not to buy it, at least not for now. "I\'ll have to talk to think about it first," you tell Jimmy.');
    // TODO-QSP: dynamic text: He nods. "You know what? I'll put it aside for you in case you change your mind,...
    scene.text('He nods. "You know what? I\'ll put it aside for you in case you change your mind, but be quick before someone else beats you to it!" He scribbles something on a post-it note and sticks it on the guitar. "I\'ll try to keep the price the same, 3400₽."');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).ml_didntbuyguitarthefirstvisit = 1;
      scene.text('While the guitar isn\'t the best sounding, it is comfortable. Unfortunately, while it\'s cheaper than the rest, it still costs more than you have. You hand it back to Jimmy with a sigh. "Sorry, but I can\'t buy it right now."');
      // TODO-QSP: dynamic text: He nods. "You know what? I'll put it aside for you in case you change your mind,...
      scene.text('He nods. "You know what? I\'ll put it aside for you in case you change your mind, but be quick before someone else beats you to it!" He scribbles something on a post-it note and sticks it on the guitar. "I\'ll try to keep the price the same, 3400₽."');
      scene.actions([
        { label: 'Leave', goto: ['city_mall', ''] },
      ]);
    }
  } },
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).ml_didntbuyguitarthefirstvisit = 1;
  }, goto: ['city_mall', ''] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).ml_didntbuyguitarthefirstvisit = 1;
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterCameback(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/musicstore/music_store.jpg');
  scene.text('You enter the store, passing the door to be submerged in a loud, cacophony environment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask Jimmy about the guitar', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3400) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/citycenter/mall/musicstore/jimmy.jpg');
      scene.text('You walk up to the counter where Jimmy is busy tinkering with a guitar.');
      scene.text('"Hey Jimmy, I was wondering if you still have that guitar?"');
      scene.text('He looks up from the guitar. "Oh hey. Sure, I have it. Let me get it for you."');
      scene.text('He disappears for a while before he brings the guitar out. "See, all in good shape. Properly set up and everything."');
      scene.actions([
        { label: 'Buy a cheap acoustic guitar ( [3400₽]...]', goto: ['city_musicstore', 'buycheapacoustic'] },
        { label: 'You have to think about it', handler: (st: GameState) => {
    scene.text('You hesitate before deciding not to buy it, at least not for now. "I\'ll have to talk to think about it first," you tell Jimmy.');
    // TODO-QSP: dynamic text: He nods. "You know what? I'll put it aside for you in case you change your mind,...
    scene.text('He nods. "You know what? I\'ll put it aside for you in case you change your mind, but be quick before someone else beats you to it!" He scribbles something on a post-it note and sticks it on the guitar. "I\'ll try to keep the price the same, 3400₽."');
    scene.actions([
      { label: 'Leave', goto: ['city_mall', ''] },
    ]);
  } },
      ]);
    }
  } },
    { label: 'Shop for guitars and amps', goto: ['city_musicstore_stock', 'acoustic'] },
    { label: 'Try some guitars', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/musicstore/try_guitars.jpg');
    if (((s as any).pcs_instrmusic ?? 0) < 30  &&  ((s as any).pcs_perform ?? 0) < 10) {
      scene.text('You pick up a guitar you like the look of, but are too shy to play it. After strumming a few chords, you put it back on it\'s stand.');
    } else {
      scene.text('Some texts here depending on music skill and performing skill');
    }
  } },
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).ml_boughtguitar ?? 0) > 0  ||  ((s as any).ml_boughtamp ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['city_musicstore', 'payandtakestuff'] }]);
    }
  }, goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterBuycheapacoustic(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/musicstore/starterkit.jpg');
  if (((s as any).ml_didntbuyguitarthefirstvisit ?? 0) === 1) {
    scene.text('You decide to buy the guitar and take it to the counter, where Jimmy throws in a gigbag and a set of strings and picks. "A proper starter kit," he states and rings up the purchase.');
  } else {
    scene.text('Jimmy puts the guitar in a gigbag and drops a set of strings and picks in the pocket. "A proper starter kit," he states and rings up the purchase.');
  }
  scene.text('He looks at you thoughtfully, then drops a thick, slightly worn booklet in the bag. "Some stuff to learn from," he says while handing your purchase to you. "Congratulations, welcome to the starving musician community."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFirstSetup(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'money', 'pay', 3400);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterPayandtakestuff(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ml_boughtamp ?? 0) + ((s as any).ml_guitar ?? 0)?.['carried'] > 0  ||  ((s as any).ml_boughtguitar ?? 0) > 1) {
    (s as any).minut = ((s as any).minut ?? 0) + ((((s as any).ml_boughtguitar ?? 0) * 5) + (((s as any).ml_boughtguitar ?? 0) * 5));
    scene.text('Jimmy takes your details and your home address after you pay to set up the delivery. "It should be there tomorrow."');
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (!(s as any).ml_guitar) (s as any).ml_guitar = {}; (s as any).ml_guitar['carried'] = 1;
    scene.text('Jimmy disappears into the back of the shop with your guitar before returning 10 minutes later. "That\'s it all set up, but if you need to tweak anything, just bring it in and we\'ll do it for you, free of charge."');
    // TODO-QSP: dynamic text: He puts the guitar in ' + iif(ml_gigbag = 1, 'a gigbag', ') + iif(ml_hardcase = ...
    scene.text(`He puts the guitar in ' + iif(ml_gigbag = 1, 'a gigbag', ') + iif(ml_hardcase = 1, 'its case', ') + ' and hands it to you. "All the best, ${((s as any).pcs_nickname || '')}."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_mall', ''] },
  ]);
  scene.build();
}

function enterFirstSetup(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).ml_guitars) (s as any).ml_guitars = {}; (s as any).ml_guitars['jb-budget-acoustic'] = 1;
  (s as any).ml_strings = 2;
  if (!(s as any).ml_guitar) (s as any).ml_guitar = {}; (s as any).ml_guitar['chordbook'] = 1;
  if (!(s as any).ml_guitar) (s as any).ml_guitar = {}; (s as any).ml_guitar['hasguitar'] = 1;
  if (!(s as any).ml_guitar) (s as any).ml_guitar = {}; (s as any).ml_guitar['carried'] = 1;
  if (!(s as any).ml_performance) (s as any).ml_performance = {}; (s as any).ml_performance['max_perform_minutes'] = ((s as any).pcs_instrmusic ?? 0) + ((s as any).pcs_vokal ?? 0);
  if (!(s as any).ml_performance) (s as any).ml_performance = {}; (s as any).ml_performance['performed_minutes'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_radomir_counter_text':
      enterSetRadomirCounterText(s, scene);
      break;
    case 'firstvisit':
      enterFirstvisit(s, scene);
      break;
    case 'cameback':
      enterCameback(s, scene);
      break;
    case 'buycheapacoustic':
      enterBuycheapacoustic(s, scene);
      break;
    case 'payandtakestuff':
      enterPayandtakestuff(s, scene);
      break;
    case 'first_setup':
      enterFirstSetup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_musicstore: LocationDef = {
  name: 'city_musicstore',
  title: 'You enter the store, welcomed by the familiar mix of random ',
  region: 'city',
  locationType: 'public_indoors',
  description: ['You enter the store, welcomed by the familiar mix of random notes and bits of songs screaming from the back.'],
  enter: enter,
};
