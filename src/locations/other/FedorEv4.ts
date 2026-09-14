import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorHomeDate = 1;
  (s as any).WithFedor = 1;
  qspCall(s, 'boyStat', 'A5');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
  scene.text('As you arrive at Fedor\'s house and he opens the door for you then gives you a pat on the ass with a playful smile on his face as you walk in. You respond by pushing him against the wall while grabbing the back of his head and passionately kissing his lips as you rub on his crotch.');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'arousal', 'kiss', (-5), 'dom');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head to the livingroom', goto: ['FedorEv4', 'Home 2'] },
    { label: 'Get down on your knees', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall1.mp4');
    scene.text('You unzip then drop Fedor\'s pants as you continue kissing him while stroking his cock. After a few seconds, you drop to your knees and start sucking his dick without ever breaking eye contact. Fedor moans a bit. "You know just what I like." You respond with "What kind of girlfriend would I be if I didn\'t know how to please my man."');
    qspCall(s, 'arousal', 'bj', (-5), 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/blowjob2.mp4');
    scene.text('Fedor says, "Let\'s see how much you can take." as he grabs you by the back of your head and begins pushing his cock further down you throat. You do your best not to gag as Fedor begin fucking your throat. The sensation is unpleasant but you do your best to please Fedor, letting him fuck your throat deeper and rougher while trying to hold back the tears streaming down your face. After a few seconds Fedor notices your discomfort and releases you. Fedor then kneels down front of you and kisses you gently. "Since you did that for me, I\'m going to give you a reward."');
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    (s as any).VK = Math.floor(Math.random() * 4) + 1;
    if (((s as any).VK ?? 0) === 4  &&  ((s as any).fedorKozlovQW ?? 0) > -10) {
      scene.actions([
        { label: 'See what he does', goto: ['FedorEv4_sex', '3Way'] },
      ]);
    } else {
      scene.actions([
        { label: 'See what he does', goto: ['FedorEv4_sex', 'Hall Sex'] },
        { label: 'Put your feet in his face', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall6.jpg');
    scene.text('You lean back and lift your feet to his face. "Good, Kiss my feet." Fedor is surprised at first but then starts slowly rubbing your ankles with his hands as he begins gently kissing your feet. Fedor begins kissing each of your toes one at a time then starts to suck on them as you watch him in excitement of how much he is willing to do for you and how much he enjoys pleasing you.');
    qspCall(s, 'arousal', 'foreplay_give', (-10), 'dom', 'feet');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a footjob', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall7.jpg');
    // TODO-QSP: dynamic text: You pull your foot away from Fedor's mouth then place it on his chest lightly pu...
    scene.text(`You pull your foot away from Fedor's mouth then place it on his chest lightly pushing him on his back as you wrap both your feet around his dick and begin to stroking his cock while staring into his eyes, enjoying the very adoring look he is giving you. Fedor remarks. "Wow ${((s as any).pcs_nickname || '')}, Your feet are so soft."`);
    scene.text('You respond, "And so is your dick. I want to ride it." as you withdraw your feet then crawl on top of Fedor, burying his dick in your pussy while forcing your tongue in Fedor\'s mouth as he caresses it with his.');
    qspCall(s, 'arousal', 'footjob', (-10), 'dom', 'feet');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride Fedor', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/sex/hall8.jpg');
    scene.text('You ride Fedor\'s cock slowly at first but then begin picking up the pace as you see him begin to squirm. You can see that he is trying to keep himself from cumming.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.actions([
        { label: 'Make him cum inside you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum3.mp4');
    // TODO-QSP: dynamic text: You continue picking up the pace while staring into Fedor's eyes, feeling both t...
    scene.text(`You continue picking up the pace while staring into Fedor's eyes, feeling both the rush of pleasure and the thrill of dominance, Knowing that Fedor's pleasure is completely in your hands. Thrusting faster and faster until you hear Fedor say, "I can't hold on much longer. I'm gonna cum." You start thrusting rapidly, ready to take his load inside you and after the fourth thrust Fedor groans and you can feel his cum filling you with its warmth. You continue riding him, doing your best to milk his dick dry, feeling him filling your womb almost completely. Fedor take a few seconds to catch his breath. "${((s as any).pcs_firstname || '')} you're so damn good at that."`);
    scene.text('You respond, "I will always do my best to please you Fyodor." Fedor gives you a warm smile then begins getting dressed as he replies, "That\'s my girl. Shall we go and watch a movie together?" You reply, "Sure but I need to wash up first.');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum7.mp4');
    // TODO-QSP: dynamic text: You continue picking up the pace while staring into Fedor's eyes, feeling both t...
    scene.text(`You continue picking up the pace while staring into Fedor's eyes, feeling both the rush of pleasure and the thrill of dominance, Knowing that Fedor's pleasure is completely in your hands. Thrusting faster and faster until you hear Fedor say, "I can't hold on much longer. I'm gonna cum." You give him 3 more thrust then pull Fedor's dick out of you and begin rubbing it with your hands as he cums on your feet. You do your best to milk him dry while staring into his eyes as he cums for you. Fedor takes a few seconds to catch his breath. "Damn ${((s as any).pcs_firstname || '')}, I love it when you take control."`);
    scene.text('You respond, "What can I say? I know what my man needs." Fedor begins dressed as he replies, "You certainly do… So are you still up for a good movie?" You reply, "Sure but I need to wash up first."');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'legs', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go wash up', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['FedorEv4', 'Bathroom Wash'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHome2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/sitting.jpg');
  scene.text('You walk into the living room then take a seat on the couch. Fedor walks into the kitchen and returns with a bowl of <a href="exec:gt \'FedorEv4\', \'Popcorn\'">popcorn</a>, some <a href="exec:gt \'FedorEv4\', \'Snacks\'">snacks</a> and a few cans of soda then lays them down on the table. Fedor grabs the remote then sits down next to you as he begins flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  // TODO-QSP: end
  scene.build();
}

function enterPopcorn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (30);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/munch2.jpg');
  scene.text('You begin munching on some popcorn and drinking some soda as Fedor continues flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  // TODO-QSP: end
  scene.build();
}

function enterSnacks(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/munch1.jpg');
  scene.text('You begin enjoying some strawberries and drinking soda as Fedor continues flipping through channels.');
  qspCall(s, 'FedorEV4', 'movie_choice');
  // TODO-QSP: end
  scene.build();
}

function enterMovieChoice(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for Fedor to pick a channel', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 4) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Family'] }]);
    } else {
      if (((s as any).VK ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Sports'] }]);
      } else {
        if (((s as any).VK ?? 0) === 3) {
          scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Porn'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Movie Action'] }]);
        }
      }
    }
  } },
    { label: 'Watch Action', goto: ['FedorEv4', 'Movie Action'] },
    { label: 'Watch Sports ', goto: ['FedorEv4', 'Movie Sports'] },
    { label: 'Watch a Family film', goto: ['FedorEv4', 'Movie Family'] },
    { label: 'Watch Porn', goto: ['FedorEv4', 'Movie Porn'] },
  ]);
  scene.build();
}

function enterMovieAction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino\'+rand(2, 3)+\'.mp4');
  scene.text('You and Fedor begin watching an action/drama movie while occasionally discussing your favorite scenes as you see them.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish movie', goto: ['FedorEv4', 'Home 3'] },
  ]);
  scene.build();
}

function enterMovieSports(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport\'+rand(1, 2)+\'.mp4');
  scene.text('You and Fedor begin watching a variety of different sports channels while occasionally discussing your favorite teams and fighters.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish watching TV', goto: ['FedorEv4', 'Home 3'] },
  ]);
  scene.build();
}

function enterMovieFamily(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult\'+rand(1, 2)+\'.mp4');
  scene.text('You and Fedor begin watching a family/drama while occasionally discussing your favorite characters.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish movie', goto: ['FedorEv4', 'Home 3'] },
  ]);
  scene.build();
}

function enterMoviePorn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvporn\'+rand(1, 5)+\'.mp4');
  scene.text('You and Fedor begin watching a variety of different adult films while occasionally discussing your favorite pornstars and positions.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish movie', goto: ['FedorEv4', 'Home 3'] },
  ]);
  scene.build();
}

function enterHome3(s: GameState, scene: SceneBuilder): void {
  (s as any).EndMovie = 1;
  (s as any).WithFedor = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/sitting2.jpg');
  // TODO-QSP: dynamic text: Fedor leans over toward you and begins kissing and licking your neck, obviously ...
  scene.text(`Fedor leans over toward you and begins kissing and licking your neck, obviously ready for some fun. You lay back enjoying his tongue on your neck which turns you on as well as feeling his strong hands caressing your breasts. Fedor continues licking and feeling up your body as you both start undressing each other. Fedor whispers in your ear, "${((s as any).pcs_firstname || '')}, I want you right now."`);
  if (((s as any).FedorLove ?? 0) === 1) {
    scene.actions([
      { label: 'I could use a nice warm bed right now', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 2) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bedroom Cam'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bedroom 1'] }]);
    }
  } },
    ]);
  }
  if (((s as any).VKwip ?? 0) === 100) {
    scene.actions([
      { label: 'Is that a yoga ball?', goto: ['FedorEv4_sex', 'LivingRoom 3'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take me', goto: ['FedorEv4', 'random_sex'] },
    { label: 'Suck Fedor\'s dick', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 2) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Livingroom 1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Livingroom 2'] }]);
    }
  } },
    { label: 'I have a treat for you in the kitchen', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 2) + 1;
    if (((s as any).VK ?? 0) <= 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Kitchen 1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Kitchen 2'] }]);
    }
  } },
    { label: 'Use bathroom', goto: ['FedorEv4_sex', 'Bathroom 1'] },
  ]);
  scene.build();
}

function enterRandomSex(s: GameState, scene: SceneBuilder): void {
  (s as any).VK = Math.floor(Math.random() * 8) + 1;
  if (((s as any).VK ?? 0) <= 1) {
    scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Livingroom 1'] }]);
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Livingroom 2'] }]);
    } else {
      if (((s as any).VK ?? 0) === 3  &&  ((s as any).VKwip ?? 0) === 100) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Livingroom 3'] }]);
      } else {
        if (((s as any).VK ?? 0) === 4) {
          scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Kitchen 1'] }]);
        } else {
          if (((s as any).VK ?? 0) === 5) {
            scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Kitchen 2'] }]);
          } else {
            if (((s as any).VK ?? 0) === 6) {
              scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bathroom 1'] }]);
            } else {
              if (((s as any).VK ?? 0) === 7  &&  ((s as any).FedorLove ?? 0) === 1) {
                scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bedroom Cam'] }]);
              } else {
                if (((s as any).VK ?? 0) === 8  &&  ((s as any).FedorLove ?? 0) === 1) {
                  scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bedroom 1'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'random_sex'] }]);
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 9  &&  (!((s as any).WithFedor ?? 0))) {
    scene.text('Fedor is currently in the shower and has locked the door.');
    scene.actions([
      { label: 'Step away', goto: ['FedorEv4', 'Hallway'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 10  &&  (!((s as any).WithFedor ?? 0))) {
      scene.text('It seems that Regina is in the shower and has locked the door.');
      scene.actions([
        { label: 'Step away', goto: ['FedorEv4', 'Hallway'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/fedorhome/bathroom.jpg');
      scene.text('This bathroom is very clean and organized with a sink, <a href="exec:gt \'FedorEv4\', \'Toilet\'">Toilet</a>, <a href="exec:gt \'mirror\', \'start\'">mirror</a> and bathtub.');
      if ((!((s as any).WithFedor ?? 0))) {
        scene.actions([
          { label: 'Leave bathroom', goto: ['FedorEv4', 'Hallway'] },
          { label: 'Take a shower (0:15)', goto: ['FedorEv4', 'Shower'] },
        ]);
      } else {
        scene.actions([
          { label: 'Take a shower', goto: ['FedorEv4_sex', 'Shower 2'] },
        ]);
      }
      qspCall(s, 'din_van', 'tampon');
      scene.actions([
        { label: 'Quick wash (0:10)', goto: ['FedorEv4', 'Quick Wash'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBathroomWash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk out of the bathroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Join Fedor in the livingroom', goto: ['FedorEv4', 'Home 2'] },
  ]);
  scene.build();
}

function enterQuickWash(s: GameState, scene: SceneBuilder): void {
  (s as any).EndMovie = 0;
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/movies/Restroom/facecleanse.jpg');
  scene.text('You grab a few paper towels then approach the sink to clean yourself as thoroughly as possible while taking a few seconds to enjoy a splash of warm water on your face, leaving you feeling refreshed as you finish up and walk away from the sink.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry off', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).EndMovie = 0;
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Shower/wash.jpg');
  scene.text('You climb into the shower and begin lathering your body, cleaning yourself as thoroughly as possible before turning off the water. You grab a spare towel and begin drying yourself off before getting dressed.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Dry off', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/toilet.jpg');
  scene.text('This toilet looks very clean and there is plenty of toilet paper on the nearby roll.');
  if (((s as any).Potty_Daystart ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Use the toilet', handler: (st: GameState) => {
    (s as any).VK = Math.floor(Math.random() * 6) + 1;
    if (((s as any).VK ?? 0) >= 1  &&  ((s as any).VK ?? 0) <= 3  &&  ((s as any).WithFedor ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bathroom Cam'] }]);
    } else {
      if (((s as any).VK ?? 0) >= 4  &&  ((s as any).VK ?? 0) <= 6  &&  ((s as any).WithFedor ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bathroom 2'] }]);
      } else {
        if (((s as any).VK ?? 0) >= 7  &&  ((s as any).VK ?? 0) <= 9  &&  ((s as any).WithFedor ?? 0) === 1  &&  ((s as any).VKwip ?? 0) === 100) {
          scene.actions([{ label: 'Continue', goto: ['FedorEv4_sex', 'Bathroom 3'] }]);
        } else {
          if (((s as any).VK ?? 0) < 6  &&  (!((s as any).WithFedor ?? 0))) {
            scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Toilet 2'] }]);
          } else {
            if (((s as any).VK ?? 0) === 6  &&  (!((s as any).WithFedor ?? 0))) {
              scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Toilet 3'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Toilet'] }]);
            }
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterToilet2(s: GameState, scene: SceneBuilder): void {
  (s as any).Potty_Daystart = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/potty.jpg');
  scene.text('You pull down your pants then sit on the toilet. You take a this time to reflect on many things in your life, leaving you feeling more relaxed. After you are finished you use the nearby toilet paper to wipe yourself before washing your hands and flushing the toilet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterToilet3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Evil Toilet</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bathroom/Toilet/vket.jpg');
  scene.text('<h4><b>FEED ME!!!</b></h4>');
  // TODO-QSP: end
  scene.actions([
    { label: 'NOO!', goto: ['FedorEv4', 'Bathroom'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Kitchen');
  if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 22  &&  (!((s as any).ReginaIntro ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Regina Intro'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/kitchen.jpg');
  scene.text('This kitchen is very clean. Fedor\'s parents must be very neat people.');
  scene.text('There is a sink, a microwave, a stove and a <a href="exec:gt \'FedorEv4\', \'Fridge\'">refrigerator</a> stocked with food.');
  if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 20  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    scene.text('<a href="exec:gt \'FedorEv4\', \'Fedor Kitchen\'">Fedor</a> is sitting down, eating dinner.');
  } else {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 22  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 16) {
      scene.text('<a href="exec:gt \'FedorEv4\', \'Regina Chat\'">Regina</a> is sitting at the table, eating dinner.');
    } else {
      if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 20) {
        scene.text('<a href="exec:gt \'FedorEv4\', \'Regina Chat\'">Regina</a> is cleaning the kitchen.');
      } else {
        if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) === 11) {
          scene.text('<a href="exec:gt \'FedorEv4\', \'Regina Chat\'">Regina</a> is getting ready to leave for work.');
        }
      }
    }
  }
  qspCall(s, 'kit_din', 'driwater');
  qspCall(s, 'kit_din', 'dritea');
  qspCall(s, 'kit_din', 'fill_bottle');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['FedorEv4', 'Hallway'] },
    { label: 'Enter the living room', goto: ['FedorEv4', 'Livingroom'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/livingroom.jpg');
  scene.text('The living room looks very neat and has a couch, a blu-ray player and a <a href="exec:gt \'FedorEv4\', \'TV\'">TV</a>.');
  if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 22  ||  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 19  ||  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 16  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 18) {
    scene.text('<a href="exec:gt \'FedorEv4\', \'Fedor Livingroom\'">Fedor</a> is sitting on the couch, watching TV.');
  }
  if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 12) {
    scene.text('<a href="exec:gt \'FedorEv4\', \'Regina Chat\'">Regina</a> is vacuuming the floor.');
  } else {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) > 22  &&  ((s as any).hour ?? 0) <= 24  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
      scene.text('<a href="exec:gt \'FedorEv4\', \'Regina Chat\'">Regina</a> is sitting down on the couch, watching TV.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['FedorEv4', 'Hallway'] },
    { label: 'Step into the kitchen', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Hallway');
  if (((s as any).hour ?? 0) === 20  &&  (!((s as any).ReginaIntro ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Regina Intro'] }]);
  }
  (s as any).WithFedor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/hallway.jpg');
  scene.text('This is the central hallway which connects the whole house. There is a <a href="exec:gt \'mirror\', \'start\'">mirror</a>, a coat rack and multiple paintings on the walls.');
  if (((s as any).fedorKozlovQW ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17) {
    scene.actions([
      { label: 'Go to Fedor\'s bedroom', goto: ['FedorMisc', 'Workout Time'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to Fedor\'s bedroom', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17) {
    scene.actions([
      { label: 'Go to the bathroom', goto: ['FedorMisc', 'Workout Time'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the bathroom', goto: ['FedorEv4', 'Bathroom'] },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17) {
    scene.actions([
      { label: 'Go to the kitchen', goto: ['FedorMisc', 'Workout Time'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the kitchen', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  }
  if (((s as any).fedorKozlovQW ?? 0) > 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17) {
    scene.actions([
      { label: 'Go to the living room', goto: ['FedorMisc', 'Workout Time'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the living room', goto: ['FedorEv4', 'Livingroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<b>Leave the house</b>', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Nude'] }]);
    } else {
      if (((s as any).FedorHomeDate ?? 0) === 1  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 24) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'End Date'] }]);
      } else {
        (s as any).FedorHomeDate = 0;
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Bedroom');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/bedroom.jpg');
  scene.text('Fedor\'s bedroom is very neat, it has a bed, a computer desk with a chair and a <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a>, where you can choose outfits and organize your clothing.');
  if (((s as any).FedorLove ?? 0) === 1) {
    scene.text('Fedor has a <a href="exec:gt \'FedorEv4\', \'Picture\'">framed picture</a> by his bed.');
  }
  if (((s as any).hour ?? 0) < 8) {
    scene.text('<a href="exec:gt \'FedorEv4\', \'Fedor Sleeping\'">Fedor</a> is sleeping in his bed.');
  } else {
    if (((s as any).hour ?? 0) >= 22) {
      scene.text('<a href="exec:gt \'FedorEv4\', \'Fedor Bedroom\'">Fedor</a> is laying on his bed.');
    } else {
      if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 14  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22) {
        scene.text('<a href="exec:gt \'FedorEv4\', \'Fedor Bedroom 2\'">Fedor</a> is on his computer.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave bedroom', goto: ['FedorEv4', 'Hallway'] },
  ]);
  scene.build();
}

function enterNude(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/nude.jpg');
  scene.text('<center><b>I can\'t go out onto the streets naked. Hmm, Isn\'t there a wardrobe in Fedor\'s bedroom?</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['FedorEv4', 'Hallway'] },
  ]);
  scene.build();
}

function enterPicture(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#ff00cc><<"<<$pcs_firstname>> [<<$pcs_nickname>>] <<$...
  scene.text(`<center><b><h4><font color=#ff00cc>${qspUntranslated(s, "\"<<pcs_firstname", { location: "FedorEv4" })} [${((s as any).pcs_nickname || '')}] ${((s as any).pcs_lastname || '')}">></font></h4></b></center>`);
  scene.img('' + qspUntranslated(s, "FUNC('face_image')>", { location: "FedorEv4" }) + '');
  scene.text('Fedor has framed the picture he took of you and placed it by his bed with your name on the frame. After seeing the picture by his bed, you can\'t help but think to yourself. "That\'s so sweet. I must mean a lot to him… ohh Fedor." you then place the picture back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Step away', goto: ['FedorEv4', 'Bedroom'] },
  ]);
  scene.build();
}

function enterSolo(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sex/solo.mp4');
  scene.text('VKwip');
  qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['FedorEv4', 'Livingroom'] },
  ]);
  scene.build();
}

function enterSoloCaught(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ReginaKozQW ?? 0) < 2) {
    (s as any).ReginaKozQW = 2;
  }
  (s as any).ReginaKozCaught = ((s as any).ReginaKozCaught ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/caught.jpg');
  scene.text('VKwip');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Livingroom'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/eating.jpg');
  scene.text('You open the refrigerator and see leftover food and some snacks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Close refrigerator door', goto: ['FedorEv4', 'Kitchen'] },
    { label: 'Have a snack', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (5);
    (s as any).cumspclnt = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/munch1.jpg');
    scene.text('You grab a variety of different snacks and begin eating them while pondering over what your favorite snack is.');
    scene.actions([
      { label: 'Finish', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
    { label: 'Have some leftovers', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    (s as any).cumspclnt = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/eating.jpg');
    scene.text('You search the fridge for something to eat and notice a few containers of leftovers, so you grab one of them then begin heating it up in the microwave. When the food is ready you grab a can of soda then sit down and eat the meal.');
    scene.actions([
      { label: 'Finish', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorSleeping(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  // TODO-QSP: dynamic text: Hey <<$pcs_firstname>>, I'm a bit too tired to walk you home right now but you c...
  scene.text(`Hey ${((s as any).pcs_firstname || '')}, I'm a bit too tired to walk you home right now but you can climb into bed and spend the night if you like. Just don't let my mother see you leave.`);
  if (((s as any).pcs_health ?? 0) < 100) {
    // TODO-QSP: dynamic text: Fedor then looks back at you and frowns. "<<$pcs_firstname>> you're hurt. My mot...
    scene.text(`Fedor then looks back at you and frowns. "${((s as any).pcs_firstname || '')} you're hurt. My mother works as a nurse. You should have her take a look at you."`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Bedroom'] },
    { label: 'Spend the night', goto: ['bed2', ''] },
  ]);
  scene.build();
}

function enterEndDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/hall/fedor.jpg');
  scene.text('Fedor notices that you leaving then approaches you. "Are you ready to go?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Not right now', goto: ['FedorEv4', 'Hallway'] },
    { label: 'Yes I am', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Nude'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'End Date 2'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterEndDate2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).FedorHomeDate = 0;
  (s as any).ReginaDinner = 0;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('Fedor fetches your coat then hands it to you as he puts on his coat. Fedor opens the front door and holds it for you while guiding you out. You and Fedor begin walking back to your apartment while chatting about all of the latest trends on television. When you reach the door to your house, Fedor spins you around then gives you a passionate kiss as he presses you against the wall. After a few seconds, Fedor pulls off you then gives you a wink as he turns away and walks off.');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/endkiss.mp4');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'go_straight_home');
  } },
  ]);
  scene.build();
}

function enterTV(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/sitting.jpg');
  scene.text('You sit down on the couch and lay back, trying to get as comfortable as possible while you decide what channel you would like to watch.');
  if (((s as any).VKwip ?? 0) === 100) {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) <= 24  &&  ((s as any).hour ?? 0) > 20  ||  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) <= 10  &&  ((s as any).hour ?? 0) > 9  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) <= 18  &&  ((s as any).hour ?? 0) > 9) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Solo Caught'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Solo'] }]);
    }
  } },
    ]);
  }
  if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) < 20  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 22  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 10  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 18) {
    scene.actions([
      { label: 'Watch porn (0:30)', handler: (st: GameState) => {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) <= 24  &&  ((s as any).hour ?? 0) > 20  &&  ((s as any).VKwip ?? 0) === 100  ||  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) <= 10  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).VKwip ?? 0) === 100  ||  ((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) <= 18  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).VKwip ?? 0) === 100) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Porn Caught'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'TV Porn'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish movie', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Watch action movies (1:30)', goto: ['FedorEv4', 'TV Action'] },
    { label: 'Watch the geographic channel (0:30)', goto: ['FedorEv4', 'TV Geographic'] },
    { label: 'Watch sports (1:00)', goto: ['FedorEv4', 'TV Sports'] },
    { label: 'Watch family channel (1:30)', goto: ['FedorEv4', 'TV Family'] },
  ]);
  scene.build();
}

function enterTVAction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 11) + 15);
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino\'+rand(2, 3)+\'.mp4');
  scene.text('You and Fedor begin watching an action/drama movie while occasionally discussing your favorite scenes as you see them.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Change channel', goto: ['FedorEv4', 'TV'] },
  ]);
  scene.build();
}

function enterTVGeographic(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 6) + 5);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo\'+rand(1, 4)+\'.mp4');
  scene.text('You change to the geographic channel. You study what you see to have a better understanding of the world around you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Change channel', goto: ['FedorEv4', 'TV'] },
  ]);
  scene.build();
}

function enterTVSports(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 11) + 10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport\'+rand(1, 2)+\'.mp4');
  scene.text('You begin cycling through sports channels, enjoying the athletes competing in various sports.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Change channel', goto: ['FedorEv4', 'TV'] },
  ]);
  scene.build();
}

function enterTVFamily(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 11) + 15);
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult\'+rand(1, 2)+\'.mp4');
  scene.text('You change to the family channel and begin watch an animated movie with cute cuddly animals.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Change channel', goto: ['FedorEv4', 'TV'] },
  ]);
  scene.build();
}

function enterTVPorn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 6) + 5);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvporn\'+rand(1, 5)+\'.mp4');
  scene.text('You begin cycling through adult channels watching various sexual acts being performed by professional pornstars…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Change channel', goto: ['FedorEv4', 'TV'] },
  ]);
  scene.build();
}

function enterPornCaught(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/caught.jpg');
  scene.text('VKwip');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get off couch', goto: ['FedorEv4', 'Livingroom'] },
  ]);
  scene.build();
}

function enterReginaIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).ReginaKozlov = ((s as any).ReginaKozlov ?? 0) + (5);
  (s as any).ReginaIntro = 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
  scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  // TODO-QSP: dynamic text: You approach Fedor's mother and her eyes light up when she sees you. "Ahh, you m...
  scene.text(`You approach Fedor's mother and her eyes light up when she sees you. "Ahh, you must be ${((s as any).pcs_firstname || '')}. Fedor told me a bit about you but I can never get that boy to talk to me about anything. So how serious are things between you two? Ohh but where are my manners? My name is Regina. I am Fyodor's mother. I have been looking forward to meeting my son's first girlfriend." You tilt your head as you reply, "His first?" Regina replies, "Well yes. Fedor usually spends too much time in front of that TV or with his friend Ivan. His father always lectures that boy about not being more active, that is… when he's here anyway, I've droned on for long enough. Would you like me to make you something to eat?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No thank you', goto: ['FedorEv4', 'Kitchen'] },
    { label: 'Only if it\'s no trouble', goto: ['FedorEv4', 'Dinner 1'] },
  ]);
  scene.build();
}

function enterReginaChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
  scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  scene.text('Fedor\'s mother has long blond hair that is well kept and looks really good for her age.');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).ReginaKozCaught ?? 0) < 5) {
    (s as any).ReginaKozCaught = ((s as any).ReginaKozCaught ?? 0) + (1);
    scene.text('Regina looks at you then gasps. "Young lady, you shouldn\'t walk around here like that. Fyodor has a wardrobe in his room. Please get yourself dressed."');
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).ReginaKozCaught ?? 0) >= 5  &&  (!((s as any).ReginaKozQW ?? 0))) {
      (s as any).ReginaKozQW = ((s as any).ReginaKozQW ?? 0) + (1);
      scene.text('Regina looks at you then sighs. "You\'re not even trying to cover up anymore, are you? well at least make sure to get dressed before walking out the front door, okay?"');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).ReginaKozCaught ?? 0) >= 5  &&  ((s as any).ReginaKozQW ?? 0) === 1) {
        scene.text('Regina looks at you then sighs. "You\'re not even trying to cover up anymore, are you? well at least make sure to get dressed before walking out the front door, okay?"');
      } else {
        if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).ReginaCumChat ?? 0) === 0  &&  (!((s as any).ReginaKozQW ?? 0))) {
          (s as any).ReginaCumChat = ((s as any).ReginaCumChat ?? 0) + (1);
          scene.text('Regina squints and notices the cum on you. "Is that what I think it is? Can you please head to the bathroom and clean yourself up?"');
        } else {
          if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  (!((s as any).ReginaKozQW ?? 0))) {
            (s as any).ReginaKozQW = 1;
            scene.text('Regina gives you a stern look. "Young lady, you should at least clean up after you… well, you know what I mean."');
          } else {
            if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).ReginaKozQW ?? 0) === 1) {
              scene.text('Regina gives you a blank stare. "I won\'t pry into your love life but could you do me a favor and clean yourself up afterward?"');
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0)) {
    scene.text('Regina looks at you and gasps. "Ohh no sweetie, you\'re hurt. Let me take a look at you."');
  }
  if (((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0)) {
    scene.actions([
      { label: 'Let Regina help you', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 20) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'check_up'] }]);
    }
  } },
    ]);
  }
  if ((!((s as any).ReginaIntro ?? 0))) {
    scene.actions([
      { label: 'Introduce yourself', goto: ['FedorEv4', 'Regina Intro'] },
    ]);
  } else {
    scene.actions([
      { label: 'Chat', goto: ['FedorEv4', 'Regina Chat 2'] },
    ]);
  }
  if (((s as any).FedorShelter ?? 0) === 1) {
    scene.actions([
      { label: 'Ask about moving in', goto: ['FedorEv4', 'Fedor Shelter 2'] },
    ]);
  }
  if (((s as any).ReginaIntro ?? 0) === 1  &&  ((s as any).ReginaKoz_Daystart ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'May I join you for dinner?', goto: ['FedorEv4', 'Dinner 1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterReginaChat2(s: GameState, scene: SceneBuilder): void {
  (s as any).ReginaKozlov = ((s as any).ReginaKozlov ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
  scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  (s as any).VK = Math.floor(Math.random() * 7) + 1;
  if (((s as any).VK ?? 0) === 1) {
    scene.text('You and Regina discuss the latest fashion trends.');
  } else {
    if (((s as any).VK ?? 0) === 2) {
      scene.text('You and Regina chat about dinner recipes.');
    } else {
      if (((s as any).VK ?? 0) === 3) {
        scene.text('Regina gives you some tips on picking the right hair care products.');
      } else {
        if (((s as any).VK ?? 0) === 4) {
          scene.text('Regina shares some stories about her days in high school.');
        } else {
          if (((s as any).VK ?? 0) === 5) {
            scene.text('Regina tells you a little about Fedor\'s childhood.');
          } else {
            if (((s as any).VK ?? 0) === 6) {
              scene.text('Regina tells you a little about Fedor\'s father and his service in the military.');
            } else {
              scene.text('Regina tells you about her work as a nurse.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterDinner1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).ReginaKoz_Daystart = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
  scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  scene.text('Of course, it\'s no problem. Here, have a seat and I\'ll make us a nice meal.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a seat', goto: ['FedorEv4', 'Dinner'] },
  ]);
  scene.build();
}

function enterDinner(s: GameState, scene: SceneBuilder): void {
  (s as any).ReginaKoz_Daystart = ((s as any).daystart ?? 0);
  (s as any).ReginaKozlov = ((s as any).ReginaKozlov ?? 0) + (1);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'small');
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (70);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (60);
  (s as any).fat = ((s as any).fat ?? 0) + (2);
  (s as any).cumspclnt = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  scene.text('You and Regina spend a few minutes getting to know each other while eating a well prepared meal.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterCheckUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0)) {
    (s as any).pcs_health = ((s as any).healthmax ?? 0);
  }
  qspCall(s, 'money', 'pay', 20, 'cash');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/reginahelp.jpg');
  scene.text('You sit down on a nearby chair as Regina runs off to fetch her medical supplies. When Regina comes back she begins unpacking her supplies as she asks you about any health issues you may have. After a few minutes of being patching up, you feel a lot better. Regina gives you a warm smile while re-packing her supplies. When Regina finishes she gives you a lollipop as she says, "I know you might feel too old for these but I can\'t let any patient go with out one of these, I\'m just really old fashioned like that."');
  // TODO-QSP: dynamic text: You give her <<$func('money', 'string_price', 20)>> and say, "Please take this, ...
  scene.text(`You give her ${qspFunc(s, 'money', 'string_price', 20)} and say, "Please take this, for helping me." Regina gives you a smile before leaving the room to put her supplies away.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank you', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterFedorLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Fedor Livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/fedor.jpg');
  scene.text('Fedor is sitting on the sofa watching tv and when he notices you, he pats the seat next to him, offering you a seat.');
  if (((s as any).pcs_health ?? 0) < 100) {
    // TODO-QSP: dynamic text: Fedor looks at you and frowns. "<<$pcs_firstname>> you're hurt. My mother works ...
    scene.text(`Fedor looks at you and frowns. "${((s as any).pcs_firstname || '')} you're hurt. My mother works as a nurse, if she is home then you should have her take a look at you."`);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: Fedor reaches over, then begins rubbing your ass, "You have a body to die for <<...
    scene.text(`Fedor reaches over, then begins rubbing your ass, "You have a body to die for ${((s as any).pcs_nickname || '')}."`);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('Fedor notices your messy hair and pulls out his <a href="exec:gt \'FedorMisc\', \'Comb\'">comb</a>.');
  }
  if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  ((s as any).FedorLove ?? 0) === 1  &&  (!((s as any).FedorvsDimka ?? 0))) {
    scene.actions([
      { label: 'Ask for help with Dimka', goto: ['FedorEv4', 'Private Chat'] },
    ]);
  } else {
    if (((s as any).FedorvsDimka ?? 0) === 2) {
      scene.actions([
        { label: 'Talk about what happened with Dimka', goto: ['FedorEv4', 'Dimka Aftermath'] },
      ]);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  (!((s as any).FedorShelter ?? 0))) {
    scene.actions([
      { label: 'Ask about moving in', goto: ['FedorEv4', 'Fedor Shelter'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Livingroom'] },
    { label: 'Chat', goto: ['FedorEv4', 'Fedor Livingroom Chat'] },
  ]);
  scene.build();
}

function enterFedorKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Fedor Kitchen');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/fedor.jpg');
  scene.text('Fedor is sitting down at the table, waiting for his microwaved lunch to finish.');
  if (((s as any).FedorKoz_Daystart ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> would you like something to eat?"
    scene.text(`"${((s as any).pcs_firstname || '')} would you like something to eat?"`);
  }
  if (((s as any).pcs_health ?? 0) < 100) {
    // TODO-QSP: dynamic text: Fedor looks at you and frowns. "<<$pcs_firstname>> you're hurt. My mother works ...
    scene.text(`Fedor looks at you and frowns. "${((s as any).pcs_firstname || '')} you're hurt. My mother works as a nurse, if she is home then you should have her take a look at you."`);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('Fedor notices your messy hair and pulls out his <a href="exec:gt \'FedorMisc\', \'Comb\'">comb</a>.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: Fedor reaches over, then begins feeling up your legs, "You are so hot, <<$pcs_ni...
    scene.text(`Fedor reaches over, then begins feeling up your legs, "You are so hot, ${((s as any).pcs_nickname || '')}."`);
  }
  if (((s as any).FedorKoz_Daystart ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).FedorKoz_Daystart = ((s as any).daystart ?? 0);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (1);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    (s as any).cumspclnt = 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/eating2.jpg');
    scene.text('Fedor gets up then opens the refrigerator and grabs a few things that he begins cooking. When Fedor finishes then he places the plate of food and an empty cup in front of you as he pours you a drink then sits across from you. Both of you spend a few minutes eating while discussing favorite foods and snacks.');
    scene.actions([
      { label: 'Walk away', goto: ['FedorEv4', 'Kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  ((s as any).FedorLove ?? 0) === 1  &&  (!((s as any).FedorvsDimka ?? 0))) {
    scene.actions([
      { label: 'Ask for help with Dimka', goto: ['FedorEv4', 'Private Chat'] },
    ]);
  } else {
    if (((s as any).FedorvsDimka ?? 0) === 2) {
      scene.actions([
        { label: 'Talk about what happened with Dimka', goto: ['FedorEv4', 'Dimka Aftermath'] },
      ]);
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  (!((s as any).FedorShelter ?? 0))) {
    scene.actions([
      { label: 'Ask about moving in', goto: ['FedorEv4', 'Fedor Shelter'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Kitchen'] },
    { label: 'Chat', goto: ['FedorEv4', 'Fedor Kitchen Chat'] },
  ]);
  scene.build();
}

function enterFedorBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Fedor Bedroom');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  scene.text('Fedor is laying on his bed, relaxing.');
  if ((!((s as any).FedorLove ?? 0))) {
    scene.text('He seems lost in thought but as soon as you approach, he opens his mouth to speak but no words escape his mouth. He then closes his mouth and stares at the ceiling. It seems as though he has something he wants to talk to you about.');
  }
  if (((s as any).pcs_health ?? 0) < 100) {
    // TODO-QSP: dynamic text: Fedor looks at you then frowns. "<<$pcs_firstname>> you're hurt. My mother works...
    scene.text(`Fedor looks at you then frowns. "${((s as any).pcs_firstname || '')} you're hurt. My mother works as a nurse. You should have her take a look at you."`);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('Fedor notices your messy hair and pulls out his <a href="exec:gt \'FedorMisc\', \'Comb\'">comb</a>.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    // TODO-QSP: dynamic text: Fedor reaches over, then begins, gently rubbing your vagina, "Your body is so pe...
    scene.text(`Fedor reaches over, then begins, gently rubbing your vagina, "Your body is so perfect, ${((s as any).pcs_firstname || '')}."`);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  (!((s as any).FedorShelter ?? 0))) {
    scene.actions([
      { label: 'Ask about moving in', goto: ['FedorEv4', 'Fedor Shelter'] },
    ]);
  }
  if (((s as any).FedorLove ?? 0) === 0  &&  ((s as any).strelaQW ?? 0) === -1) {
    scene.actions([
      { label: 'Find out what\'s bothering him', goto: ['FedorEv4', 'Love Talk Strela'] },
    ]);
  } else {
    if (((s as any).FedorLove ?? 0) === 0  &&  ((s as any).strelaQW ?? 0) === -2) {
      scene.actions([
        { label: 'Find out what\'s bothering him', goto: ['FedorEv4', 'Love Talk Strela 2'] },
      ]);
    } else {
      if ((!((s as any).FedorLove ?? 0))) {
        scene.actions([
          { label: 'Find out what\'s bothering him', goto: ['FedorEv4', 'Love Talk'] },
        ]);
      } else {
        scene.actions([
          { label: 'Chat', goto: ['FedorEv4', 'Fedor Bedroom Chat'] },
          { label: 'Break up with Fedor', handler: (st: GameState) => {
    (s as any).fedorkoztalk = 1;
    (s as any).fedorKozlovQW = (-1);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('"I\'m sorry Fedor but I don\'t think this is working out, I think we need to break up." Fedor lowers his head clearly upset but after a few seconds he raises his head then looks in your eyes and says, "I guess what we had was a lie then… Go be with other men then if you want, I won\'t hold you back anymore." he takes a few steps back, never breaking eye contact with you until he suddenly turns away and walks off.');
    scene.actions([
      { label: 'Let him think about it', goto: ['FedorEv4', 'Fedor Bedroom'] },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  ((s as any).FedorLove ?? 0) === 1  &&  (!((s as any).FedorvsDimka ?? 0))) {
    scene.actions([
      { label: 'Ask for help with Dimka', goto: ['FedorEv4', 'Dimka Help'] },
    ]);
  } else {
    if (((s as any).FedorvsDimka ?? 0) === 2) {
      scene.actions([
        { label: 'Talk about what happened with Dimka', goto: ['FedorEv4', 'Dimka Aftermath'] },
      ]);
    }
  }
  if (((s as any).FedorLove ?? 0) === 1) {
    scene.actions([
      { label: 'Discuss taking your relationship to the next level', goto: ['FedorEv4', 'Future'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 21) {
    scene.actions([
      { label: 'Spend the night', goto: ['bed2', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['FedorEv4', 'Bedroom'] },
  ]);
  scene.build();
}

function enterFedorBedroom2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Fedor Bedroom 2');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  // TODO-QSP: dynamic text: Fedor is watching videos on his computer. As you approach, Fedor turns to you an...
  scene.text(`Fedor is watching videos on his computer. As you approach, Fedor turns to you and asks "Hey ${((s as any).pcs_nickname || '')}, wanna check out some videos?"`);
  if (((s as any).pcs_health ?? 0) < 100) {
    // TODO-QSP: dynamic text: Fedor looks at you and frowns. "<<$pcs_firstname>> you're hurt. My mother works ...
    scene.text(`Fedor looks at you and frowns. "${((s as any).pcs_firstname || '')} you're hurt. My mother works as a nurse, if she is home then you should have her take a look at you."`);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.text('Fedor notices your messy hair and pulls out his <a href="exec:gt \'FedorMisc\', \'Comb\'">comb</a>.');
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: dynamic text: Fedor reaches over, then begins gently squeezing your breasts, "You have great t...
    scene.text(`Fedor reaches over, then begins gently squeezing your breasts, "You have great tits, ${((s as any).pcs_firstname || '')}."`);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  &&  (!((s as any).FedorShelter ?? 0))) {
    scene.actions([
      { label: 'Ask about moving in', goto: ['FedorEv4', 'Fedor Shelter'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe later', goto: ['FedorEv4', 'Bedroom'] },
    { label: 'Sure', goto: ['FedorEv4', 'Fedor Bedroom Chat 2'] },
  ]);
  scene.build();
}

function enterLoveTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorLove = 1;
  (s as any).FedorKozHome = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  scene.text('You sit down next to Fedor and ask him "You look troubled. What\'s on your mind?" Fedor responds, "I\'m just thinking about how much my life has changes since I met you." You respond, "Changed for the better I hope." He turns to you with a wide smile on his face "Of course. I have never been as happy as I am with you and I just needed to tell you how much you mean to me."');
  // TODO-QSP: dynamic text: You crawl up the bed and lay down beside him and reply, "I feel the same way abo...
  scene.text(`You crawl up the bed and lay down beside him and reply, "I feel the same way about you… I love you Fyodor." Fedor looks shocked for a moment then responds, "I love you too ${((s as any).pcs_firstname || '')}. You really mean everything to me and I never want to lose you." You respond, "You never will." as you lean forward and share a very passionate kiss with Fedor`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/kiss.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish kissing', goto: ['FedorEv4', 'Fedor Bedroom'] },
  ]);
  scene.build();
}

function enterLoveTalkStrela(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorLove = 1;
  (s as any).FedorKozHome = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  // TODO-QSP: dynamic text: You sit down next to Fedor and ask him "You look troubled. What's on your mind?"...
  scene.text(`You sit down next to Fedor and ask him "You look troubled. What's on your mind?" With a tear sliding down his cheek, Fedor responds, "I keep thinking of that day where I felt completely helpless and almost lost everything to those bastards. The thought of what might have happened if you weren't there, chills me to my very core." You crawl forward and lay next to him "It was a crazy day and I'm glad everything worked out in the end. I would hate for something like that to happen to you because of me." Fedor places his hand on your cheek "You saved me ${((s as any).pcs_firstname || '')} and I will never forget it. You are everything I could ever hope for in a girl."`);
  // TODO-QSP: dynamic text: You can feel your cheeks getting flushed as you respond, "Well you're everything...
  scene.text(`You can feel your cheeks getting flushed as you respond, "Well you're everything I need in a man and that is why I… I love you Fyodor." Fedor looks shocked for a moment then responds, "I love you too ${((s as any).pcs_firstname || '')}. You really mean everything to me and I never want to lose you." You respond, "You never will." as you lean forward and share a very passionate kiss with Fedor.`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/kiss.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish kissing', goto: ['FedorEv4', 'Fedor Bedroom'] },
  ]);
  scene.build();
}

function enterLoveTalkStrela2(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorLove = 1;
  (s as any).FedorKozHome = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  scene.text('You sit down next to Fedor and ask him "You look troubled. What\'s on your mind?" With tears streaming down his cheeks Fedor responds, "I can\'t get that day out of my head. I was completely helpless as those… fuckers… took everything away from me, my reputation, my friends and my girl…" You lay down next to him "You never lost your girl. I\'ll always be here with you." He wraps his arm around your neck but remains silent, so you decide to break the silence. "Fedor I know what happened to you was horrible but I never thought less of you, not even for one second. You are the man I want to be with and nothing will change that."');
  // TODO-QSP: dynamic text: Fedor lets out a mild smile as he continues staring at the ceiling and after a f...
  scene.text(`Fedor lets out a mild smile as he continues staring at the ceiling and after a few seconds responds, "You are the greatest gift I can ever ask for and I'm so glad I met you. ${((s as any).pcs_firstname || '')} you are the perfect girl and I will always strive to be the best boyfriend you can ever have." You lightly kiss his cheek as you reply, "You are already the best boyfriend I could ever have." Fedor quickly turns to you and kisses your lips very passionately.`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/kiss.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish kissing', goto: ['FedorEv4', 'Fedor Bedroom'] },
  ]);
  scene.build();
}

function enterFuture(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/talk.jpg');
  if ((!((s as any).FedorLoveTalk ?? 0))) {
    scene.text('You lay down next to Fedor and he wraps his arms around you as you place your hand on his shoulder. "Fedor I really treasure the time we spend together and I was wondering if you feel ready to take this relationship to the next level?" Fedor raises an eyebrow. "Next level? what do you mean?"');
  } else {
    if (((s as any).FedorLoveTalk ?? 0) === 1) {
      scene.text('You lay down next to Fedor and he wraps his arms around you as you place your hand on his shoulder. "Fedor I would like to ask you something." Fedor gives you a warm smile. "Of course my love. What can I do for you?"');
    }
  }
  if (((s as any).FedorLoveTalk ?? 0) < 1) {
    scene.actions([
      { label: 'Pregnancy', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/talk.jpg');
    scene.text('You look Fedor in the eyes. "I have always wanted to one day… be a mother and I was thinking that maybe we could… have a baby together." Fedor\'s eyes widen and his jaw lowers. "You want… You want us to? I don\'t know. That\'s a very big step. Are you sure you want this?"');
    scene.actions([
      { label: 'I\'m sure', handler: (st: GameState) => {
    (s as any).FedorLoveTalk = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/kiss.jpg');
    scene.text('You give Fedor a light kiss then reply, "I\'m positive. I want you to be the father of my child so… what do you think? Would you like to be a father?" Fedor thinks it over for a few seconds then responds, "I care for you so much and would love to start a family with you. Whenever you feel ready to try for a baby then let me know." You lean forward and give Fedor a passionate kiss before responding "Thank you so much Fyodor. I\'m sure any child we make together will be perfect."');
    scene.actions([
      { label: 'Get up', goto: ['FedorEv4', 'Fedor Bedroom'] },
    ]);
  } },
      { label: 'Let me think about it', goto: ['FedorEv4', 'Fedor Bedroom'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Try for baby', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/talk.jpg');
    scene.text('You lean forward and whisper in his ear. "I would like to try for a baby with you. Are you ready for some fun?" Fedor brings his face to yours and replies, "I\'m ready whenever you are."');
    scene.actions([
      { label: 'I\'m ready', goto: ['FedorEv4_sex', 'Bedroom 1'] },
      { label: 'Maybe later', goto: ['FedorEv4', 'Fedor Bedroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', goto: ['FedorEv4', 'Fedor Bedroom'] },
    { label: 'Marriage', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/sitting.jpg');
    scene.text('<b><h4><font color=#FF00FF>To be continued… Love Violet Kitten.</font></h4></b>');
    scene.actions([
      { label: 'Awwww', goto: ['FedorEv4', 'Fedor Bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorLivingroomChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/livingroom/fedor.jpg');
  scene.text('You sit down next to Fedor and both of you discuss your favorite TV shows.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish chatting', goto: ['FedorEv4', 'Livingroom'] },
  ]);
  scene.build();
}

function enterFedorKitchenChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/kitchen/fedor.jpg');
  scene.text('You sit down next to Fedor and both of you discuss your favorite foods.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish chatting', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterFedorBedroomChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/fedor.jpg');
  scene.text('You sit down next to Fedor and both of you share stories about your classmates.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish chatting', goto: ['FedorEv4', 'Bedroom'] },
  ]);
  scene.build();
}

function enterFedorBedroomChat2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console1.jpg');
  scene.text('Fedor gets up and offers you his seat then stands behind you as he shows you his playlist of favorite online videos as you share with him, your favorites.');
  if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  ((s as any).FedorLove ?? 0) === 1  &&  (!((s as any).FedorvsDimka ?? 0))) {
    scene.actions([
      { label: 'Ask for help with Dimka', goto: ['FedorEv4', 'Dimka Help'] },
    ]);
  } else {
    if (((s as any).FedorvsDimka ?? 0) === 2) {
      scene.actions([
        { label: 'Talk about what happened with Dimka', goto: ['FedorEv4', 'Dimka Aftermath'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish chatting', goto: ['FedorEv4', 'Fedor Bedroom 2'] },
  ]);
  scene.build();
}

function enterPrivateChat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
  // TODO-QSP: dynamic text: You sit down next to Fedor then ask, "Can we talk for a moment… in private?" Fed...
  scene.text(`You sit down next to Fedor then ask, "Can we talk for a moment… in private?" Fedor turns to you with a concerned look on his face. "Of course ${((s as any).pcs_firstname || '')}. Let's head to my room where we can talk in private." Fedor takes your hand then leads you to the bedroom.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow Fedor to his bedroom', goto: ['FedorEv4', 'Dimka Help'] },
  ]);
  scene.build();
}

function enterFedorShelter(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorShelter = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console1.jpg');
  // TODO-QSP: dynamic text: You sit down next to Fedor then say, "Fedor… I need your help." Fedor quickly si...
  scene.text(`You sit down next to Fedor then say, "Fedor… I need your help." Fedor quickly sits up then responds, "What do you need?" you downcast your eyes then say, "My mother threw me out… of my home, and I don't know what to do." you begin sobbing as Fedor wraps his arms around you. "That's horrible. I bet my mother will take you in. I will speak to her the next time I see her. Don't worry I won't let you live on the streets." you quickly wrap your arms around Fedor's chest then say, "Thank you so much Fedor. I am so scared." Fedor kisses you on the forehead, as he responds, "I will always be here for you ${((s as any).pcs_firstname || '')}, whenever you need me." you give Fedor a soft kiss then get up and say, "I'm so lucky to have you." Fedor responds with a thumbs up, and a smile.`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console2.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave room', goto: ['FedorEv4', 'Hallway'] },
  ]);
  scene.build();
}

function enterFedorShelter2(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorKozHome = 1;
  (s as any).FedorShelter = 2;
  qspCall(s, 'npc_relationship', 'modify', 'A5', 20);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
  scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
  scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
  scene.text('You can see Fedor and Regina sitting down together chatting then Regina notices you. Regina looks up to you with a sad face then says, "Fyodor told me about what happened. Your mother threw you out? Why?" you lower your head, trying to figure out where to start when Regina says, "It\'s ok, you don\'t have to tell me. I can\'t believe that she would throw out her own daughter. Fyodor and I have been discussing, and I decided that it would be best if you to stay for while, but promise me that you will try to find a place to live when you graduate, okay?" you happily nod, and can feel tears gathering in your eyes, as you reply, "Yes I will. Thank you so much. I thought that I would be living on the street. Thank you." Regina approaches you then wipes away your tears. "I will get you a key." Regina then reaches inside of a drawer then pulls out a set of keys then give you one. Fedor gives you a hug then says, "You will always be welcome here." You return the hug, as you reply, "Thank you for everything Fyodor. You are the best boyfriend ever."');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console1.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['FedorEv4', 'Kitchen'] },
  ]);
  scene.build();
}

function enterDimkaHelp(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console1.jpg');
  // TODO-QSP: dynamic text: You sit at the edge of the bed next to Fedor then lower your head, staring blank...
  scene.text(`You sit at the edge of the bed next to Fedor then lower your head, staring blankly at the ground, trying to collect your thoughts when you feel Fedor's hand on your shoulder. "${((s as any).pcs_firstname || '')}, what's wrong?" You look toward him but are unable to look him in the eye. "Fedor… I need your help with something but I…" He sits up then wraps his arms around your waist. "${((s as any).pcs_firstname || '')} whatever it is, you can talk to me."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s… It\'s nothing', goto: ['FedorEv4', 'Bedroom'] },
    { label: 'Ask him for help', handler: (st: GameState) => {
    (s as any).FedorvsDimka = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console2.jpg');
    // TODO-QSP: dynamic text: "I… well… Dimka has a video of me and I need to know if you can help me get it b...
    scene.text(`"I… well… Dimka has a video of me and I need to know if you can help me get it back or erase it." Fedor frowns as he asks "Have you been having an affair with him?" You reply, "No. He blackmailed me into doing something… dirty and he filmed me. I'm sorry that I didn't tell you about this before but I needed to know for sure that I could trust you not to share the video." Fedor places his finger under your chin and raises your face to meet his as he replies, "I understand ${((s as any).pcs_firstname || '')} and don't worry, we will get that video from Dimka even if I have to beat it out of him. I never liked that cocky like punk anyway."`);
    scene.text('You remain speechless for a few seconds before you respond, "Ohh thank you Fedor. I thought that he was going to keep blackmailing me forever." Fedor gives you a kiss on the forehead. "You have nothing to fear with me around. Meet me after school and we\'ll deal with that punk together." Fedor then gives you a long passionate kiss.');
    scene.actions([
      { label: 'Get out of bed', goto: ['FedorEv4', 'Bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaAftermath(s: GameState, scene: SceneBuilder): void {
  (s as any).FedorvsDimka = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/console2.jpg');
  scene.text('You approach Fedor, he stands up and hugs you. "I\'m so sorry about not getting there in time. I can\'t believe I was so careless and it was you that paid the price." You give Fedor an innocent smile as you place your hand on his cheek and say, "It\'s alright Fyodor. He used to make me do things far worst than that." Fedor clenches his fists as he responds, "That fucking coward will never harm you again. I will make sure that he learns his place from now on."');
  // TODO-QSP: dynamic text: You give Fedor a soft kiss. "I know that I will always be safe with you." Fedor ...
  scene.text(`You give Fedor a soft kiss. "I know that I will always be safe with you." Fedor looks into your eyes. "I will always love you ${((s as any).pcs_firstname || '')}." You reply, "And I, you, Fedor" then you both share a long passionate kiss.`);
  scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/kiss2.mp4');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'FedorEv4') {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Bedroom'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    }
  } },
  ]);
  scene.build();
}

function enterHomeEntrance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Home Entrance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/fedorhome/house.jpg');
  scene.text('Fedor\'s house is a bit weathered but still looks quite lovely. This house is but a short walk away from my parents apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Knock on the door', goto: ['FedorEv4', 'Home Entrance 2'] },
  ]);
  scene.build();
}

function enterHomeEntrance2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'FedorEv4', 'Home Entrance 2');
  qspCall(s, 'stat', '');
  if (((s as any).FedorShelter ?? 0) === 2) {
    // TODO-QSP: dynamic text: <center><b><h4><font color=#ff00cc><<"<<$pcs_firstname>> [<<$pcs_nickname>>] <<$...
    scene.text(`<center><b><h4><font color=#ff00cc>${qspUntranslated(s, "\"<<pcs_firstname", { location: "FedorEv4" })} [${((s as any).pcs_nickname || '')}] ${((s as any).pcs_lastname || '')}">></font></h4></b></center>`);
    scene.img('' + qspUntranslated(s, "FUNC('face_image')>", { location: "FedorEv4" }) + '');
    scene.text('You place the key into the door lock then turn it, unlocking the door then making your way inside.');
    scene.actions([
      { label: 'Enter house', goto: ['FedorEv4', 'Hallway'] },
    ]);
  } else {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 19) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Home Entrance 3'] }]);
    } else {
      if (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) > 10) {
        // TODO-QSP: dynamic text: <center><b><h4><font color="#FF00FF"><<"Regina Kozlov">></font></h4></b></center...
        scene.text(`<center><b><h4><font color="#FF00FF">${'Regina Kozlov'}</font></h4></b></center>`);
        scene.img('images/locations/pavlovsk/resident/fedorhome/regina.jpg');
        scene.text('You knock on the door until Regina opens it and invites you inside.');
        scene.actions([
          { label: 'Enter house', goto: ['FedorEv4', 'Hallway'] },
        ]);
      } else {
        scene.text('You knock on the door but no one answers.');
        scene.actions([
          { label: 'Walk away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHomeEntrance3(s: GameState, scene: SceneBuilder): void {
  scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
  if (((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedormisc/Outcast/outcast2.jpg');
  } else {
    scene.img('images/characters/shared/headshots_main/big5.jpg');
  }
  scene.text('You knock on the door until Fedor opens it and invites you inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter apartment', goto: ['FedorEv4', 'Hallway'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Home 2':
      enterHome2(s, scene);
      break;
    case 'Popcorn':
      enterPopcorn(s, scene);
      break;
    case 'Snacks':
      enterSnacks(s, scene);
      break;
    case 'movie_choice':
      enterMovieChoice(s, scene);
      break;
    case 'Movie Action':
      enterMovieAction(s, scene);
      break;
    case 'Movie Sports':
      enterMovieSports(s, scene);
      break;
    case 'Movie Family':
      enterMovieFamily(s, scene);
      break;
    case 'Movie Porn':
      enterMoviePorn(s, scene);
      break;
    case 'Home 3':
      enterHome3(s, scene);
      break;
    case 'random_sex':
      enterRandomSex(s, scene);
      break;
    case 'Bathroom':
      enterBathroom(s, scene);
      break;
    case 'Bathroom Wash':
      enterBathroomWash(s, scene);
      break;
    case 'Quick Wash':
      enterQuickWash(s, scene);
      break;
    case 'Shower':
      enterShower(s, scene);
      break;
    case 'Toilet':
      enterToilet(s, scene);
      break;
    case 'Toilet 2':
      enterToilet2(s, scene);
      break;
    case 'Toilet 3':
      enterToilet3(s, scene);
      break;
    case 'Kitchen':
      enterKitchen(s, scene);
      break;
    case 'Livingroom':
      enterLivingroom(s, scene);
      break;
    case 'Hallway':
      enterHallway(s, scene);
      break;
    case 'Bedroom':
      enterBedroom(s, scene);
      break;
    case 'Nude':
      enterNude(s, scene);
      break;
    case 'Picture':
      enterPicture(s, scene);
      break;
    case 'Solo':
      enterSolo(s, scene);
      break;
    case 'Solo Caught':
      enterSoloCaught(s, scene);
      break;
    case 'Fridge':
      enterFridge(s, scene);
      break;
    case 'Fedor Sleeping':
      enterFedorSleeping(s, scene);
      break;
    case 'End Date':
      enterEndDate(s, scene);
      break;
    case 'End Date 2':
      enterEndDate2(s, scene);
      break;
    case 'TV':
      enterTV(s, scene);
      break;
    case 'TV Action':
      enterTVAction(s, scene);
      break;
    case 'TV Geographic':
      enterTVGeographic(s, scene);
      break;
    case 'TV Sports':
      enterTVSports(s, scene);
      break;
    case 'TV Family':
      enterTVFamily(s, scene);
      break;
    case 'TV Porn':
      enterTVPorn(s, scene);
      break;
    case 'Porn Caught':
      enterPornCaught(s, scene);
      break;
    case 'Regina Intro':
      enterReginaIntro(s, scene);
      break;
    case 'Regina Chat':
      enterReginaChat(s, scene);
      break;
    case 'Regina Chat 2':
      enterReginaChat2(s, scene);
      break;
    case 'Dinner 1':
      enterDinner1(s, scene);
      break;
    case 'Dinner':
      enterDinner(s, scene);
      break;
    case 'check_up':
      enterCheckUp(s, scene);
      break;
    case 'Fedor Livingroom':
      enterFedorLivingroom(s, scene);
      break;
    case 'Fedor Kitchen':
      enterFedorKitchen(s, scene);
      break;
    case 'Fedor Bedroom':
      enterFedorBedroom(s, scene);
      break;
    case 'Fedor Bedroom 2':
      enterFedorBedroom2(s, scene);
      break;
    case 'Love Talk':
      enterLoveTalk(s, scene);
      break;
    case 'Love Talk Strela':
      enterLoveTalkStrela(s, scene);
      break;
    case 'Love Talk Strela 2':
      enterLoveTalkStrela2(s, scene);
      break;
    case 'Future':
      enterFuture(s, scene);
      break;
    case 'Fedor Livingroom Chat':
      enterFedorLivingroomChat(s, scene);
      break;
    case 'Fedor Kitchen Chat':
      enterFedorKitchenChat(s, scene);
      break;
    case 'Fedor Bedroom Chat':
      enterFedorBedroomChat(s, scene);
      break;
    case 'Fedor Bedroom Chat 2':
      enterFedorBedroomChat2(s, scene);
      break;
    case 'Private Chat':
      enterPrivateChat(s, scene);
      break;
    case 'Fedor Shelter':
      enterFedorShelter(s, scene);
      break;
    case 'Fedor Shelter 2':
      enterFedorShelter2(s, scene);
      break;
    case 'Dimka Help':
      enterDimkaHelp(s, scene);
      break;
    case 'Dimka Aftermath':
      enterDimkaAftermath(s, scene);
      break;
    case 'Home Entrance':
      enterHomeEntrance(s, scene);
      break;
    case 'Home Entrance 2':
      enterHomeEntrance2(s, scene);
      break;
    case 'Home Entrance 3':
      enterHomeEntrance3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const FedorEv4: LocationDef = {
  name: 'FedorEv4',
  title: 'Bathroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['As you arrive at Fedor\'s house and he opens the door for you then gives you a pat on the ass with a playful smile on his face as you walk in. You respond by pushing him against the wall while grabbing the back of his head and passionately kissing his lips as you rub on his crotch.'],
  enter: enter,
};
