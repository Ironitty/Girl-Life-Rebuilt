import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGadukino(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/rex_gadukino_' + ((((s as any).month ?? 0) > 3  &&  ((s as any).month ?? 0) < 11) ? ('summer') : ('winter')) + '.jpg');
  // TODO-QSP: dynamic text: <<$rex[''name'']>> is running around '+iif(month > 3 and month < 11, 'sniffing e...
  scene.text('' + ((s as any).rex ?? 0)?.['name'] ?? '' + ' is running around \'+iif(month > 3 and month < 11, \'sniffing everything\', \'playing in the snow\')+\'. Your grandmother loves taking care of him, so you don\'t have to worry about him while you\'re in Gadukino.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  if (((s as any).objects ?? 0)?.['chew'] > 0  &&  (Math.floor(Math.random() * 10) + 1) > 5  &&  ((s as any).rex ?? 0)?.['chew_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (1);
    ((s as any).objects = (s as any).objects ?? {})['chew'] = ((s as any).objects['chew'] ?? 0) - (1);
    ((s as any).rex = (s as any).rex ?? {})['chew_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/shared/rex/rex_chew.jpg');
  } else {
    scene.img('images/locations/city/citycenter/mall/pet shop/pets/dog.jpg');
  }
  // TODO-QSP: 'Your dog''s name is <<$rex[''name'']>> and taking care of him is your responsibility. He needs to b...
  if ((((s as any).rex ?? 0)?.['count_walk'] + ((s as any).rex ?? 0)?.['count_feed'] + ((s as any).rex ?? 0)?.['count_bath']) > 0) {
    scene.text('<b>Chores:</b>');
    if (((s as any).rex ?? 0)?.['count_walk'] > 0) {
      // TODO-QSP: dynamic text: - You have to walk him <<rex[''count_walk'']>>x today.
      scene.text(`- You have to walk him ${((s as any).rex ?? 0)?.['count_walk'] ?? ''}x today.`);
    }
    if (((s as any).rex ?? 0)?.['count_feed'] > 0) {
      // TODO-QSP: dynamic text: - You have to feed him <<rex[''count_feed'']>>x today.
      scene.text(`- You have to feed him ${((s as any).rex ?? 0)?.['count_feed'] ?? ''}x today.`);
    }
    if (((s as any).rex ?? 0)?.['count_bath'] > 0) {
      // TODO-QSP: dynamic text: - You have to bath him <<rex[''count_bath'']>>x this week.
      scene.text(`- You have to bath him ${((s as any).rex ?? 0)?.['count_bath'] ?? ''}x this week.`);
    }
  }
  if (((s as any).rex ?? 0)?.['relationship'] < 10) {
    // TODO-QSP: '<<$rex[''name'']>> ignores you when you approach. '+iif(objects['chew'] = 0, 'His old chew toy has ...
  } else {
    if (((s as any).rex ?? 0)?.['relationship'] < 30) {
      // TODO-QSP: '<<$rex[''name'']>> looks up when you approach. '+iif(objects['chew'] = 0, 'His old chew toy has see...
    } else {
      if (((s as any).rex ?? 0)?.['relationship'] < 60) {
        // TODO-QSP: '<<$rex[''name'']>> looks up and wags his tail'+iif(rex['relationship'] > 45, ',', ' a bit')+' when ...
      } else {
        // TODO-QSP: '<<$rex[''name'']>> jumps up and'+iif(rex['relationship'] > 80, ' happily ', ' ')+'wags his tail whe...
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActivitiesNormal(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterActivitiesNormal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rex ?? 0)?.['count_feed'] > 0  &&  ((s as any).hour ?? 0) > (((s as any).rex ?? 0)?.['timer_feed'] + 3)  &&  (((s as any).home ?? 0)?.['current'] === 'parents_home'  ||  ((s as any).objects ?? 0)?.['dog_food'] > 0)) {
    scene.actions([
      { label: 'Feed him (0:03)', goto: ['pet_dog', 'feed'] },
    ]);
  } else {
    if (((s as any).rex ?? 0)?.['count_feed'] > 0  &&  ((s as any).hour ?? 0) > (((s as any).rex ?? 0)?.['timer_feed'] + 3)  &&  ((s as any).home ?? 0)?.['current'] !== 'parents_home'  &&  ((s as any).objects ?? 0)?.['dog_food'] <= 0) {
      scene.text('<br>You don\'t have dog food to feed him.');
    }
  }
  if (((s as any).objects ?? 0)?.['treats'] > 0  &&  ((s as any).rex ?? 0)?.['timer_treat'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Give him a treat (0:01)', goto: ['pet_dog', 'treat'] },
    ]);
  } else {
    if (((s as any).objects ?? 0)?.['treats'] === 0  &&  ((s as any).rex ?? 0)?.['timer_treat'] !== ((s as any).daystart ?? 0)) {
      scene.text('<br>You don\'t have any treats to give him.');
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: <br>You should put some clothes on if you want to go for a walk with <<$rex[''na...
    scene.text(`<br>You should put some clothes on if you want to go for a walk with ${((s as any).rex ?? 0)?.['name'] ?? ''}.`);
  } else {
    if (((s as any).rex ?? 0)?.['count_walk'] > 0  &&  ((s as any).hour ?? 0) > (((s as any).rex ?? 0)?.['timer_walk'] + 3)) {
      if (((s as any).rex ?? 0)?.['count_run'] === 0  &&  ((s as any).PSport ?? 0) === 1) {
        if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
          scene.actions([
            { label: 'Go for a run with him (1:00)', goto: ['pet_dog', 'exercise', 'run'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: <br>It''s too '+iif(hour < 7, 'early', 'late')+' to go for a run with him.
          scene.text('<br>It\'s too ' + ((((s as any).hour ?? 0) < 7) ? ('early') : ('late')) + ' to go for a run with him.');
        }
      }
      scene.actions([
        { label: 'Go for a walk with him  [+iif(daystage = 5 or sunWeather = 0, \'(0]', handler: (st: GameState) => {
    // TODO-QSP: 10)', '(0:15)')+' ': gt 'pet_dog', 'exercise', 'walk'
  } },
      ]);
    }
  }
  if (((s as any).rex ?? 0)?.['count_bath'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Bath ' + String(((s as any).rex ?? 0)?.['name'] ?? '' ?? '') + ' (0:25)', goto: ['pet_dog', 'bath'] },
    ]);
  }
  if (((s as any).rex ?? 0)?.['play_inside'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).objects ?? 0)?.['toys'] === 1) {
    scene.actions([
      { label: 'Play with him inside (0:20)', goto: ['pet_dog', 'play_inside'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFeed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (1);
  ((s as any).rex = (s as any).rex ?? {})['timer_feed'] = ((s as any).hour ?? 0);
  ((s as any).rex = (s as any).rex ?? {})['count_feed'] = ((s as any).rex['count_feed'] ?? 0) - (1);
  if (((s as any).home ?? 0)?.['current'] !== 'parents_home') {
    ((s as any).objects = (s as any).objects ?? {})['dog_food'] = ((s as any).objects['dog_food'] ?? 0) - (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/feeding_' + (Math.floor(Math.random() * 2) + 0) + '.jpg');
  // TODO-QSP: dynamic text: "Come '+iif(rand(0, 1) = 0, 'boy', $rex['name'])+' let''s get you something to e...
  scene.text('"Come ' + (((!(Math.floor(Math.random() * 2) + 0))) ? ('boy') : (((s as any).rex ?? 0)?.['name'] ?? '')) + ' let\'s get you something to eat," you say and go into the kitchen. He ' + (((!(Math.floor(Math.random() * 2) + 0))) ? ('follows and watches you fill his bowl with big thankful eyes') : ('runs into the kitchen the second he hears you filling his bowl')) + ' before he eagerly digs in.');
  if (((s as any).home ?? 0)?.['current'] !== 'parents_home') {
    // TODO-QSP: dynamic text: You have enough dog food for <<objects[''dog_food'']>> meals.
    scene.text(`You have enough dog food for ${((s as any).objects ?? 0)?.['dog_food'] ?? ''} meals.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him eat', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterTreat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (2);
  ((s as any).objects = (s as any).objects ?? {})['treats'] = ((s as any).objects['treats'] ?? 0) - (1);
  ((s as any).rex = (s as any).rex ?? {})['timer_treat'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/treat.jpg');
  scene.text('"Who\'s a good boy?" you ask with a smile and pull one of his favorite treats out of your pocket. He sniffs and his tail wags back and forth. "Who\'s a good boy?" you ask again and he barks in response. "Yes, you are!" you agree and hold out the treat. He snatches it right out of your hand and happily goes back to his dog basket.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pet_dog', 'start'] },
  ]);
  scene.build();
}

function enterExercise(s: GameState, scene: SceneBuilder): void {
  ((s as any).rex = (s as any).rex ?? {})['count_walk'] = ((s as any).rex['count_walk'] ?? 0) - (1);
  (s as any).location_type = 'public_outdoors';
  if (Number((s as any).locArgs?.[1] ?? 0) === 'walk') {
    ((s as any).rex = (s as any).rex ?? {})['timer_walk'] = ((s as any).hour ?? 0);
    ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + (((((s as any).daystage ?? 0) === 5  ||  (!((s as any).sunWeather ?? 0))) ? (10) : (15)));
    if (((s as any).daystage ?? 0) === 5) {
      scene.img('images/characters/shared/rex/walk_night_' + (Math.floor(Math.random() * 3) + 0) + '.jpg');
      // TODO-QSP: dynamic text: It''s too '+iif(hour < 9, 'early', 'late')+' to go for a long walk or play with ...
      scene.text('It\'s too ' + ((((s as any).hour ?? 0) < 9) ? ('early') : ('late')) + ' to go for a long walk or play with him. You only take him around the neighborhood until he has finished his business.');
    } else {
      if ((!((s as any).sunWeather ?? 0))) {
        scene.img('images/characters/shared/rex/walk_rain.jpg');
        scene.text('The weather is horrible and a long walk is out of the question. You only walk him around the neighborhood until he has finished his business.');
      } else {
        scene.img('images/characters/shared/rex/walk_day_' + (Math.floor(Math.random() * 5) + 0) + '.jpg');
        scene.text('He stops every few meters to sniff something interesting, happily greet another dog or mark his territory and you occasionally chat with another dog owner for a minute or two before you finally reach the park. You untie his leash when you reach the area marked for dogs and let him roam free for a while.');
        scene.actions([
          { label: 'Play with him (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'mood', 'raise', 'tiny');
    ((st as any).rex = (st as any).rex ?? {})['relationship'] = ((st as any).rex['relationship'] ?? 0) + (((((st as any).objects ?? 0)?.['toys'] === 1) ? (2) : (1)));
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/rex/play_outside_' + (Math.floor(Math.random() * 4) + 0) + '.jpg');
    // TODO-QSP: dynamic text: You '+iif(objects['toys'] = 1, 'pull out one of the rubber balls', 'pick up a br...
    scene.text('You ' + ((((st as any).objects ?? 0)?.['toys'] === 1) ? ('pull out one of the rubber balls') : ('pick up a branch')) + ' and he happily wags his tail, knowing what\'s going to happen next. "Catch!" you say and throw the ' + ((((st as any).objects ?? 0)?.['toys'] === 1) ? ('ball') : ('branch')) + ' as far as you can. He barks and runs after it before picking it up and proudly returning it to you. ' + ((((st as any).objects ?? 0)?.['toys'] === 1) ? ('He seems to enjoy playing fetch even more with his toy ball. ') : ('')) + 'You continue this for ten minutes before you finally…');
    scene.actions([
      { label: '… return home', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Return home', handler: (st: GameState) => {
    // TODO-QSP: gt $loc, $loc_arg, 'check'
  } },
    ]);
  } else {
    ((s as any).rex = (s as any).rex ?? {})['timer_walk'] = ((s as any).hour ?? 0);
    ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (3);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).sunWeather = 1;
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'exercise', 'tier1', 60, 'run');
    (s as any).fat = ((s as any).fat ?? 0) - ((Math.floor(Math.random() * 3) + 1));
    scene.img('images/characters/shared/rex/run_' + ((((s as any).daystage ?? 0) === 1  ||  ((s as any).daystage ?? 0) === 3  ||  ((s as any).daystage ?? 0) === 4  ||  ((s as any).daystage ?? 0) === 6) ? ('sunset') : (String((Math.floor(Math.random() * 2) + 0)))) + '.jpg');
    // TODO-QSP: dynamic text: <<$rex[''name'']>> excitedly runs around you as you put on your running shoes. H...
    scene.text(`${((s as any).rex ?? 0)?.['name'] ?? ''} excitedly runs around you as you put on your running shoes. He loves going on runs with you. "Yes," you say with a smile. "We're going for a run. Are you ready?" He wags his tail. "Alright, let's go boy!"`);
    // TODO-QSP: dynamic text: You head out and start your run. <<$rex[''name'']>> follows obediently, sometime...
    scene.text(`You head out and start your run. ${((s as any).rex ?? 0)?.['name'] ?? ''} follows obediently, sometimes stopping to sniff or mark his territory, but he always returns to your side before you get too far away.`);
    scene.text('You return home an hour later, exhausted and sweaty.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterPlayInside(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'mood', 'raise', 'small');
  ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (2);
  ((s as any).rex = (s as any).rex ?? {})['play_inside'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/play_inside_' + (Math.floor(Math.random() * 4) + 0) + '.jpg');
  // TODO-QSP: dynamic text: You cavort with <<$rex[''name'']>> and lavish him with all the attention he dese...
  scene.text(`You cavort with ${((s as any).rex ?? 0)?.['name'] ?? ''} and lavish him with all the attention he deserves. You get one of his toy balls and roll it around the apartment, playing a safe version of indoor catch. You cuddle up on the couch with him and spend the last few minutes stroking his soft fur.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop playing', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBath(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 25;
  ((s as any).rex = (s as any).rex ?? {})['count_bath'] = ((s as any).rex['count_bath'] ?? 0) - (1);
  ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/rex/bath.jpg');
  // TODO-QSP: dynamic text: "Come <<$rex[''name'']>>, time to take a bath," you say and open the door to the...
  scene.text(`"Come ${((s as any).rex ?? 0)?.['name'] ?? ''}, time to take a bath," you say and open the door to the bathroom. ${((s as any).rex ?? 0)?.['name'] ?? ''} looks a bit confused. "Come on boy," you say clicking your fingers and he finally follows you inside.`);
  scene.text('You brush his fur before trying to get him into the tub. It takes a few tries to convince him, but he eventually listens.');
  scene.text('"Stay," you say in a calm and reassuring voice and gently start scrubbing him with dog shampoo before rinsing and drying his fur. Once you\'re finished, you let him leave the bathroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterName(s: GameState, scene: SceneBuilder): void {
  ((s as any).rex = (s as any).rex ?? {})['status'] = 1;
  ((s as any).rex = (s as any).rex ?? {})['count_walk_base'] = 2;
  ((s as any).rex = (s as any).rex ?? {})['count_feed_base'] = 2;
  ((s as any).rex = (s as any).rex ?? {})['count_bath_base'] = 1;
  ((s as any).rex = (s as any).rex ?? {})['count_walk'] = ((s as any).rex ?? 0)?.['count_walk_base'];
  ((s as any).rex = (s as any).rex ?? {})['count_feed'] = ((s as any).rex ?? 0)?.['count_feed_base'];
  ((s as any).rex = (s as any).rex ?? {})['count_bath'] = ((s as any).rex ?? 0)?.['count_bath_base'];
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/mall/pet shop/pets/dog.jpg');
  ((s as any).rex = (s as any).rex ?? {})['name'] = 0;
  if (((s as any).rex ?? 0)?.['name'] === '') {
    ((s as any).rex = (s as any).rex ?? {})['name'] = 'Rex';
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $status['dog'] = 'active'
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Remove the dog (can be restored later in the cheat menu)', handler: (st: GameState) => {
    // TODO-QSP: $status['dog'] = 'blocked'
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gadukino':
      enterGadukino(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'activities_normal':
      enterActivitiesNormal(s, scene);
      break;
    case 'feed':
      enterFeed(s, scene);
      break;
    case 'treat':
      enterTreat(s, scene);
      break;
    case 'exercise':
      enterExercise(s, scene);
      break;
    case 'play_inside':
      enterPlayInside(s, scene);
      break;
    case 'bath':
      enterBath(s, scene);
      break;
    case 'name':
      enterName(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pet_dog: LocationDef = {
  name: 'pet_dog',
  title: '<b>Chores:</b>',
  region: 'other',
  locationType: 'public_outdoors',
  enter: enter,
};
