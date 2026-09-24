import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vacant House</b></center>');
  scene.img('images/locations/pushkin/dvor1.jpg');
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).pavserhom ?? 0) === 0  &&  ((s as any).koncepo ?? 0) === 0  ||  ((s as any).mesec ?? 0) === 1) {
    qspGoto(s, 'koncepod', 'read_notice_board_leave');
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).pavserhom ?? 0) === 0  &&  ((s as any).koncepo ?? 0) === 1  ||  ((s as any).psiha ?? 0) === 1  ||  ((s as any).pavserhom ?? 0) === 3) {
    scene.actions([
      { label: 'Read the notice on the door', goto: ['koncepod', 'prs'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21  &&  ((s as any).pavserhom ?? 0) === 1  &&  ((s as any).psiho ?? 0) === 0  &&  (!((s as any).psiha ?? 0))) {
    qspGoto(s, 'koncepod', 'read_notice_board');
  }
  if (((s as any).pavserhom ?? 0) === 1  &&  ((s as any).psiho ?? 0) === 1  &&  ((s as any).psiha ?? 0) === 0  &&  ((s as any).mesec ?? 0) === 0  &&  ((s as any).pavserpsiday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Enter the house', goto: ['koncepod', 'enter'] },
    ]);
  }
  if (((s as any).psi1day ?? 0) ===1  &&  ((s as any).pavserpsiday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Enter the house', goto: ['koncepod', 'krr2x'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to town center', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

function enterEnter(s: GameState, scene: SceneBuilder): void {
  (s as any).pavserpsiday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) <= 7  ||  ((s as any).hour ?? 0) >= 21) {
    scene.img('images/locations/pushkin/vacanthouse/koncepod1.jpg');
    scene.text('The concierge\'s desk is empty.');
  } else {
    scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
    scene.text('At the entrance sits a concierge, with an old man attending it.');
    if (((s as any).hausr ?? 0) >= 0  &&  ((s as any).hour ?? 0) >= 7  ||  ((s as any).hour ?? 0) <= 21) {
      scene.text('Sorry, but the apartment has already been rented.');
    }
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).PCloSkirt ?? 0) > 3  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 20) {
      (s as any).nurand = (Math.floor(Math.random() * 101) + 0);
      if (((s as any).nurand ?? 0) >= 90) {
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('As you walk away you hear the concierge hissing under his breath, "That trollop! Walking around in a short skirt with no underwear. Flaunting herself for all to see!"');
      }
    }
    if (((s as any).pcs_makeup ?? 0) === 4  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 21) {
      scene.text('As you walk away you hear the concierge hissing under his breath, "Oh, look at her now, all painted up like some cheap tart!"');
    }
    scene.actions([
      { label: 'Go upstairs', goto: ['koncepod', 'krr2x1'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['koncepod', 'start'] },
  ]);
  scene.build();
}

function enterPrs(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
  scene.text('"Please go away and stop bothering me."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['koncepod', 'start'] },
  ]);
  scene.build();
}

function enterKrr2x1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Stairs</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/koncepod3.jpg');
  if ((!((s as any).psiho ?? 0))) {
    scene.text('You stop at the door and immediately open it. You have the eerie feeling of the old man\'s presence, causing a chill to run down your spine.');
    scene.text('You look at your hand and try to focus on it to rid yourself of the unsettling feeling.');
    scene.text('Your heart pounds like a trapped bird. Looking at the ordinary architecture, the flight of stairs, and the general atmosphere of the old building helps. You begin to calm down.');
    scene.actions([
      { label: 'Quickly go inside', goto: ['koncepod', 'krr2x'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Outside', handler: (st: GameState) => {
    (st as any).pavserhom = 3;
    (st as any).psiha = 1;
  }, goto: ['koncepod', 'start'] },
  ]);
  scene.build();
}

function enterKrr2x(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pavserpsiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Corridor</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/corridor.jpg');
  if (((s as any).psiho ?? 0) === 0  &&  (!((s as any).psi1day ?? 0))) {
    (s as any).psi1day = 0;
    scene.text('Closing the gray door behind you, you\'re prepared to see… well, anything. You find yourself in a terribly narrow and gloomy hallway.');
    scene.text('The first thing you notice is the wallpaper. It\'s covered in a rather strange pattern and clearly very old.');
    scene.text('Then you notice the silence. The dead silence.');
    scene.text('"No place is this quiet," you think to yourself. "It\'s like I\'m in a coffin."');
    scene.text('You feel a chill run down your spine. A dark and empty place that even sound has abandoned, dust lying everywhere. People clearly haven\'t lived here for a long time.');
    scene.text('"Maybe it\'s more than that," you think. "Maybe someone died here."');
    scene.text('"No," you reassure yourself, "that\'s just my imagination running wild."');
    scene.text('With these thoughts still spinning in your head, you hesitate, unsure whether you want to look around further.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).pavserhom = 3;
    (st as any).psiha = 1;
  }, goto: ['koncepod', 'start'] },
    ]);
  }
  if (((s as any).psiho ?? 0) === 3  &&  (!((s as any).psi1day ?? 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPavser7(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).psi1day ?? 0) === 1) {
    scene.text('Continue');
  }
  if (((s as any).psiho ?? 0) > 0) {
    scene.actions([
      { label: '<b><font color = maroon>OUTSIDE</font></b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspGoto(st, 'koncepod', 'start');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude') {
        scene.text('<b><font color = red>You need to get dressed.</font></b>');
        dynamicGoto(st, 'curloc');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['koncepod', 'str2x'] },
    { label: 'Go to the kitchen', goto: ['koncepod', 'khr2x'] },
    { label: 'Go to the bathroom', goto: ['koncepod', 'vnr2x'] },
  ]);
  scene.build();
}

function enterStr2x(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).locclass = 'livingr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/hall.jpg');
  if (((s as any).psiho ?? 0) === 0  &&  (!((s as any).psi1day ?? 0))) {
    if (((s as any).pcs_hairbsh ?? 0) === 1) {
      (s as any).pcs_hairbsh = 0;
    }
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    scene.text('For some reason when you enter the room, you feel compelled to bow slightly, almost like entering a formal gathering.');
    scene.text('You shake your head, your hair sweeping around you. The sunlight streams through the window, momentarily blinding you, and the shadows seem to draw closer.');
    scene.text('Then you notice him: a man sitting behind the couch against the wall, his face buried in his knees. You cry out and instinctively raise your hand to your mouth, biting your fingers.');
    scene.actions([
      { label: 'Look closer', handler: (st: GameState) => {
    (st as any).psiho = 1;
    (st as any).pcs_mana = ((st as any).pcs_mana ?? 0) - (30);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('Before you appears a man, no longer young. He emanates a savage strength, evident in the dimensions of his body, barely concealed by his wrinkled beige trench coat.');
    scene.actions([
      { label: 'Who are you?', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).pcs_mana ?? 0) - (30);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('You exhale slowly, retreating toward the door and trying to pull yourself together. "You scared me," you continue, trying to stop your voice from shaking. "I recognize you—you\'re the man from the park. How did you get in here?"');
    scene.text('"Through the door," he replies, his voice deep and resonant. You stop at the doorway. You could just leave, but something makes you hesitate.');
    scene.actions([
      { label: 'I feel foolish…', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('"I left the door open. But I didn\'t hear you come in."');
    scene.text('"I was here before you," his voice scrapes slightly.');
    scene.text('Curiosity rises in you, "How? Did you have a key?"');
    scene.text('"He gave it to me," he corrects, continuing to look at you with an inquisitive gaze.');
    scene.text('You\'re surprised at how easily you\'re conversing with him, instead of just fleeing from this strange situation.');
    scene.actions([
      { label: 'I\'m looking at old houses', handler: (st: GameState) => {
    (st as any).arnksg = 1;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('"I\'m considering renting an apartment in this building," he says.');
    scene.text('"Are you planning to rent here?" you ask.');
    scene.text('"And you?" his voice now sounds hoarse.');
    scene.actions([
      { label: 'I haven\'t decided yet', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 1;
    (st as any).psihb = 0;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('You automatically smooth your hair, using the glass door as a mirror.');
    scene.text('A fleeting thought crosses your mind—I\'m being foolish—but it quickly vanishes.');
    scene.text('"I wonder who lived here before?" you observe.');
    scene.text('He calmly turns without answering and begins inspecting the apartment.');
    scene.text('You both move to the bedroom, pretending that the apartment interests you more than this unexpected meeting.');
    scene.actions([
      { label: 'In the bedroom', goto: ['koncepod', 'bdr2x'] },
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
      { label: 'Run away', handler: (st: GameState) => {
    (st as any).pavserhom = 3;
    (st as any).psiha = 1;
  }, goto: ['koncepod', 'start'] },
    ]);
  }
  if (((s as any).psiho ?? 0) >= 1) {
    scene.actions([
      { label: 'Go to the kitchen', goto: ['koncepod', 'khr2x'] },
      { label: 'Go to the bedroom', goto: ['koncepod', 'bdr2x'] },
      { label: 'Go to the hall', goto: ['koncepod', 'krr2x'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKhr2x(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).locclass = 'kitr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/kitchen.jpg');
  if (((s as any).psiho ?? 0) === 2  &&  ((s as any).psihb ?? 0) === 0  &&  ((s as any).psihc ?? 0) === 0  &&  (!((s as any).psi1day ?? 0))) {
    scene.text('Touring the apartment, you\'re struck by the contrast between the finished and unfinished areas. At least the kitchen is clean.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('You enter the kitchen; following etiquette, he lets you go slightly ahead. Stacks of yellowed newspapers are piled against the wall.');
    scene.text('A thought slips into your mind that he\'s always waiting to see what you\'ll do. You\'re caught in an emotional whirlwind—you feel drawn to him yet afraid of him at the same time.');
    scene.text('Perhaps he\'s decided not to help or guide you: he\'s letting things unfold naturally. And what happens next—does he even care?');
    scene.text('The two of you are like beings in an absurd situation, devoid of purpose or meaning.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).psihb = 1;
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('Emerging from your reverie, you catch him studying you with a hungry gaze. The look of a hunter eyeing his prey. It feels as though you\'ve been undressed and possessed by his eyes alone.');
    scene.text('You feel his gaze on every cell of your body and feel both awkward and somehow excited, as if enjoying his subtly dominant presence.');
    qspCall(st, 'arousal', 'vaginal', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Into the corridor', goto: ['koncepod', 'krr2x'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).psiho ?? 0) === 2  &&  ((s as any).psihb ?? 0) === 1  &&  ((s as any).psihc ?? 0) === 1  &&  (!((s as any).psi1day ?? 0))) {
    (s as any).psihb = 1;
    (s as any).psiho = 3;
    scene.text('You return to the kitchen, and avoiding each other\'s eyes, you drift into different rooms.');
    scene.text('You both understand that by prolonging the apartment inspection, you increase the likelihood that something will happen between you.');
    scene.text('Neither of you particularly desires or aims for this, yet neither wants to deviate from this unfolding script.');
    scene.text('It\'s as if someone has choreographed all your movements, and you feel reluctant to break the spell or destroy the atmosphere of inevitability that permeates the house.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['koncepod', 'str2x'] },
    { label: 'Go to the hall', goto: ['koncepod', 'krr2x'] },
  ]);
  scene.build();
}

function enterVnr2x(s: GameState, scene: SceneBuilder): void {
  (s as any).locM_arg = 'vnr2x';
  (s as any).locM = 'koncepod';
  (s as any).loc_arg = 'vnr2x';
  (s as any).loc = 'koncepod';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/bathroom.jpg');
  scene.text('Above the washbasin hangs an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">oval mirror</a>.');
  if (((s as any).psiho ?? 0) === 2  &&  ((s as any).psihb ?? 0) === 1  &&  ((s as any).psihc ?? 0) === 0  &&  (!((s as any).psi1day ?? 0))) {
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + 60;
    (s as any).piss = ((s as any).piss ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/bathroom/sittingtoilet.jpg');
    scene.text('You walk into the corridor and head to the bathroom, expecting him to follow, but from the sound of footsteps, you realize he\'s stayed in the kitchen. You glance around the bathroom, listening as he wanders in the other end of the apartment. The room is bathed in light filtering through the translucent glass window.');
    scene.text('The antique shell-shaped sink complements the oval mirror frame. You pause in front of it to check your hair and makeup.');
    scene.text('Then, making a sudden decision, you lift your skirt, pull down your underwear, and sit on the toilet. You realize you\'ve deliberately left the bathroom door not only unlocked but slightly ajar, and that he could enter at any moment—and this excites you. You feel a thrill at the possibility he might catch you in this vulnerable position, and part of you wants it to happen.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 95) {
      scene.actions([
        { label: 'Touch yourself', handler: (st: GameState) => {
    (st as any).psi1day = 1;
    (st as any).psiha = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/11684312.mp4');
    scene.text('You touch yourself, already wet with excitement.');
    scene.text('The sensation, combined with the risk of being caught in such an indecent position, spurs you on further. You barely contain yourself from making a sound.');
    qspCall(st, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/vacanthouse/11684312.mp4');
    (st as any).orgasm_or = 'custom';
    (st as any).orgasm_txt = 'Suddenly it\'s as if you\'ve been struck by lightning. Pleasant spasms ripple through your abdomen, and you squirm, biting your lip to keep from crying out in pleasure.';
    qspCall(st, 'arousal', 'clit_finger', 5, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Freshen up', goto: ['koncepod', 'vnr2x'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).psihc = 1;
  }, goto: ['koncepod', 'vnr2x'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hall', goto: ['koncepod', 'krr2x'] },
  ]);
  scene.build();
}

function enterBdr2x(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bedroom</b></center>');
  scene.img('images/locations/pushkin/vacanthouse/bedroom.jpg');
  if (((s as any).psiho ?? 0) === 1  &&  (!((s as any).psi1day ?? 0))) {
    scene.text('The condition of the bedroom plunges you further into bewilderment. It\'s quite a shabby room with a perfectly preserved antique plush ottoman awkwardly placed in the middle.');
    scene.actions([
      { label: '"The ottoman would look better in the living room," you remark.', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).pcs_mana ?? 0) - (50);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('"No," he replies, "the ottoman will stay where it is."');
    scene.text('It sounds like an order. Rude, firm, and clear.');
    scene.text('His answer makes you keep your distance from him.');
    scene.text('Yet you want to look at him more closely, to examine him—how he\'s dressed, the look in his eyes, what\'s hidden in the shadow beneath his prominent brow. You can\'t understand why all this gives you a strange kind of pleasure.');
    scene.text('Examining the living room, you move through adjacent rooms, both pretending that the apartment itself interests you more than this improbable meeting, fraught with promise—or threat—of some interchange.');
    scene.actions([
      { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).psiho = 2;
    (st as any).psihb = 0;
    (st as any).psihc = 0;
    qspGoto(st, 'koncepod', 'khr2x');
  } },
      { label: 'Go into the corridor', handler: (st: GameState) => {
    (st as any).psiho = 2;
    (st as any).psihb = 0;
    (st as any).psihc = 0;
    qspGoto(st, 'koncepod', 'krr2x');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hall', goto: ['koncepod', 'krr2x'] },
  ]);
  scene.build();
}

function enterPavser7(s: GameState, scene: SceneBuilder): void {
  scene.text('Suddenly, a phone rings inappropriately.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/phone.jpg');
    scene.text('You pick up the phone in the bedroom while he picks up in the corridor. An unfamiliar voice says nothing, the connection drops, but you both continue to press the receivers to your ears, listening to each other\'s breathing.');
    scene.text('You want him to speak to you, to make some small concession—to show some weakness—and then you could just get up and leave. You can\'t bring yourself to hang up, though you\'re desperately tempted to slam the receiver down on the cradle of the old machine.');
    scene.text('His inflexible pride prevents you. Perhaps he knows this and takes pride in his power over you.');
    scene.actions([
      { label: 'Listen to the receiver', handler: (st: GameState) => {
    qspCall(st, 'koncepod', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavser8(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
  scene.text('<center><img ' + ((s as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - 50;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
  scene.text('Then he appears, and you unconsciously run your tongue over your lip.');
  scene.text('"Well, have we decided?" you ask, unable to keep irritation from creeping into your voice. "Are we taking this apartment?"');
  scene.text('"Yes. It was decided from the beginning."');
  scene.text('"But now I\'m having second thoughts," he continues. "Do you like it?"');
  scene.text('He helps you up and asks again, "Do you like it?"');
  scene.text('"I need to think about it," you say. You feel anxious…');
  scene.text('"Don\'t beat around the bush," he says, the crude expression sounding like a threat from his lips.');
  scene.text('He leaves, slamming the door.');
  scene.text('You stand there pondering what just happened: he could do whatever he wants with you now, and you couldn\'t resist. But why?');
  scene.text('What if he\'s a maniac and plans to hurt you, and you\'re under some kind of hypnosis, looking at him as if he\'s your benefactor?');
  // TODO-QSP: end
  scene.actions([
    { label: 'The Hall', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).manamax ?? 0);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="'+func('$face_image')+'"></center>'
    scene.text('<center><img ' + ((st as any).set_imgh ?? '') + ' src="\'+func(\'$face_image\')+\'"></center>');
    scene.img('images/characters/pushkin/pavser/pavserjil.jpg');
    scene.text('"I thought you\'d left."');
    scene.text('"I locked the door."');
    scene.text('He slowly walks toward you, never taking his eyes from your wide-open eyes, veiled with moisture, in which there is more submission than fear.');
    scene.text('"Didn\'t I?" he asks.');
    scene.text('"No, no," you answer, trying to catch your breath. "I just thought you had gone." Your words come as an invitation.');
    scene.text('In an instant, he turns and is beside you.');
    scene.text('You gasp, but no words come out—they drown in your own mind.');
    scene.actions([
      { label: 'Oh', handler: (st: GameState) => {
    qspCall(st, 'koncepod', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPavser9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'huge');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/vacanthouse/kiss.jpg');
  scene.text('He takes your face in his palm and plants a kiss on your lips.');
  scene.text('In the living room, everything seems to stop, with only dust motes dancing in the sunlight; the dead silence broken only by your convulsive breathing.');
  scene.text('Suddenly he lifts you up and carries you across the living room to the window alcove, holding you with such ease as if you were a small child. You wrap your arms around his neck, feeling how mighty and strong he is, like a tree trunk, and begin stroking the muscles rippling under his smooth coat material.');
  scene.text('He has a slightly sour smell—sweat and something else you can\'t identify—a distinctly male scent unlike any of your previous boyfriends, and it strongly excites you.');
  qspCall(s, 'arousal', 'kiss', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/01.jpg');
    scene.text('He places you in the chair but doesn\'t release his strong grip. He slides his hand under your blouse and begins to caress your breasts.');
    scene.text('');
    scene.text('');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/02.jpg');
    scene.text('He cups your breasts in his palms, thumbs teasing your nipples. The rough skin on his fingertips sends waves of desire through you, and you cling to him.');
    scene.text('Finally, he exposes your breasts, and his hot lips touch your nipples, igniting a wild heat of sweet madness rising from the depths of your body.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/03.jpg');
    scene.text('You instinctively reach for his pants and feel the hard shaft beneath. Frantically, you begin to remove his pants until his member appears before your face.');
    scene.text('You inhale a mixture of scents: sour sweat and a musky male smell…');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).manamax ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/05.jpg');
    scene.text('While your brain tries to process what\'s happening, to understand how you\'ve gotten to this point…');
    scene.text('You find yourself on your knees before him, beginning to caress his rigid shaft with your tongue.');
    scene.text('');
    qspCall(st, 'arousal', 'hj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/04.jpg');
    scene.text('You\'re amazed at what\'s happening. You\'re half-naked on your knees before a complete stranger, passionately pleasuring him with your mouth, caressing his head with your tongue.');
    scene.text('');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).manamax ?? 0);
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/06.jpg');
    scene.text('Passion rolls over you like waves on a sandy shore, lifting you to new levels of bliss. You no longer question what\'s happening or why—only the sensations matter now.');
    scene.text('And the result proves to be his firm, strong, rough fingers on your clitoris…');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'npcgeneratec', '0', 'Stranger', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/07.jpg');
    scene.text('Your consciousness fades in and out in a wild passionate dance…');
    scene.text('He thrusts into you wildly, roughly, furiously. You feel like you\'re being skewered by the force and depth of his cock…');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_mana = ((st as any).manamax ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/08.jpg');
    scene.text('…');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/09.jpg');
    scene.text('Another moment of clarity comes when he puts you back on the chair, raises your legs, and enters you again. You feel a sharp pain as his member strikes deep within your butt…');
    scene.text('But the sharp pain is quickly replaced by an intense burst of pleasure as another wave washes over you…');
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/vacanthouse/sex/10.jpg');
    scene.text('He turns you to your side and switches back to your pussy, your pleasure builds further, you are close now…');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/sex/11.jpg');
    scene.text('You awaken. The wave of pleasure recedes, and you feel warm fluid on your stomach—his release, with a strange yet vaguely familiar scent.');
    scene.text('You collapse exhausted on the floor, and for a while you lie close to each other. You lie there embracing in the eerie silence, hearing only your breathing.');
    scene.text('He remains silent, and you\'re grateful for that.');
    scene.actions([
      { label: 'Recover', handler: (st: GameState) => {
    qspCall(st, 'koncepod', '');
  } },
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
    ]);
  } },
  ]);
  scene.build();
}

function enterPavser10(s: GameState, scene: SceneBuilder): void {
  (s as any).psi1day = 1;
  qspCall(s, 'sweat', 'add', 20);
  (s as any).spafinloc = 14;
  qspCall(s, 'cum_manage', '');
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  (s as any).vgape = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/vacanthouse/13.jpg');
  scene.text('You roll away and lie still for some time, watching as he silently dresses and leaves.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up and get dressed', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      qspCall(st, 'outfit', 'wear_last_worn');
    }
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'underwear', 'wear');
    qspGoto(st, 'koncepod', 'str2x');
  } },
  ]);
  scene.build();
}

function enterReadNoticeBoard(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Read the notice on the door', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).psiha = 0;
    qspCall(st, 'mood', 'lower', 'small');
    (st as any).pcs_horny = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
    scene.text('You walk into a large, dimly lit lobby. In the corner sits the concierge, an old man who looks at you with indifference.');
    scene.text('"I\'m inquiring about the apartment," You mumble. "On the advert outside"');
    scene.text('"There\'s an advert?" Asks the old man, seeming upset. "That\'s odd, no one said anything to me about it being up for rent."');
    scene.text('"So can I have a look at it?" You say, wondering why you\'re having to work so hard in this conversation.');
    scene.text('"You want to rent it"?');
    scene.text('"I want to look at it first. If it\'s too much hassle to do your job, I can leave."');
    scene.text('"OK then you can go look at the apartment. It\'s upstairs, room 17. I will not go with you, my legs ache."');
    // TODO-QSP: dynamic text: What an unpleasant man. He has you sign a registrar and then says, "Follow me <<...
    scene.text(`What an unpleasant man. He has you sign a registrar and then says, "Follow me ${((st as any).pcs_firstname ?? '')}."`);
    scene.text('You follow him through the dimly lit lobby and down a corridor. You can hear barely discernible sounds from various apartments, merging into ghostly mutterings that set the hair on the back of your neck on end. You hear one that almost sounds like it\'s whispering, "Run."');
    scene.text('Stopping by an old dresser, the old man rummages through a drawer, "Looks like you are in luck my dear…"');
    scene.text('The old man puts a key in your hand, "Here."');
    scene.text('You instinctively jerk your hand away at the touch of his dry, cold, almost deathly fingers. The concierge grabs your arm and breaks into a mad smile, revealing dark, rotten teeth.');
    scene.text('"So young and pretty…"');
    scene.text('You break his grip and run toward the stairs, hearing his laughter behind you. Echoing up the stairwell, it sounds like a thousand doors creaking.');
    scene.actions([
      { label: 'Get out of here fast', handler: (st: GameState) => {
    (st as any).pavserhom = 3;
    (st as any).psiha = 1;
  }, goto: ['koncepod', 'start'] },
      { label: 'View apartment', goto: ['koncepod', 'krr2x1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReadNoticeBoardLeave(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Read the notice on the door', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).koncepo = 0;
    qspCall(st, 'mood', 'lower', 'small');
    scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
    scene.actions([
      { label: '"I\'m inquiring about the apartment," You mumble. "On the advert outside"', handler: (st: GameState) => {
    scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
    scene.text('"Sorry darling, but the apartment is not for rent" Says the old man, reluctantly.');
    scene.actions([
      { label: 'Sorry, but why is there an ad on the door?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).koncepo = 1;
    scene.img('images/locations/pushkin/vacanthouse/koncepod.jpg');
    scene.text('"Kids, writing nonsense everywhere—on the walls too," The old man says, gesturing dismissively.');
    scene.actions([
      { label: 'Leave', goto: ['koncepod', 'start'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'enter':
      enterEnter(s, scene);
      break;
    case 'prs':
      enterPrs(s, scene);
      break;
    case 'krr2x1':
      enterKrr2x1(s, scene);
      break;
    case 'krr2x':
      enterKrr2x(s, scene);
      break;
    case 'str2x':
      enterStr2x(s, scene);
      break;
    case 'khr2x':
      enterKhr2x(s, scene);
      break;
    case 'vnr2x':
      enterVnr2x(s, scene);
      break;
    case 'bdr2x':
      enterBdr2x(s, scene);
      break;
    case 'pavser7':
      enterPavser7(s, scene);
      break;
    case 'pavser8':
      enterPavser8(s, scene);
      break;
    case 'pavser9':
      enterPavser9(s, scene);
      break;
    case 'pavser10':
      enterPavser10(s, scene);
      break;
    case 'read_notice_board':
      enterReadNoticeBoard(s, scene);
      break;
    case 'read_notice_board_leave':
      enterReadNoticeBoardLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const koncepod: LocationDef = {
  name: 'koncepod',
  title: 'Stairs',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
