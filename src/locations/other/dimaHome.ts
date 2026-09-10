import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'home');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/dimkahome/house.jpg');
  scene.text('You walk up the path from the street to a relatively large, nice looking two-story house. You notice balconies on the front and side of the home. You exhale a deep breathe as you wonder what it would be like to live in such a nice place. You approach the front door and knock.');
  if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  ((s as any).kanikuli ?? 0) > 0) {
    if (((((s as any).week ?? 0) < 6  &&  (((s as any).hour ?? 0) > 15  ||  (((s as any).hour ?? 0) === 15  &&  ((s as any).minut ?? 0) >= 30))  &&  ((s as any).hour ?? 0) < 19)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 19))  &&  Math.floor(Math.random() * 5) + 0 !== 0) {
      scene.text('A few moments later Dimka\'s mother answers the door. "Oh, you must be one of Dimka\'s friends. Maybe more than friends." She says with a sly smile as she invites you in. "He is in his room, feel free to go on upstairs."');
      scene.actions([
        { label: 'Enter', goto: ['dimaHome', 'hallway'] },
      ]);
    } else {
      scene.text('A few moments later Dimka\'s mother answers the door. "I\'m sorry, Dimka isn\'t home right now. But I will let him know you stopped by to see him." With a smile she closes the door.');
      scene.text('After knocking several times, no one answers. It seems that either no one is home, or everyone is asleep.');
      scene.actions([
        { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
        { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
      ]);
    }
  } else {
    if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 19  &&  Math.floor(Math.random() * 5) + 0 !== 0) {
      scene.text('A few moments later Dimka\'s mother answers the door. "Oh, you must be one of Dimka\'s friends. Maybe more than friends." She says with a sly smile as she invites you in. "He is in his room, feel free to go on upstairs."');
      scene.actions([
        { label: 'Enter', goto: ['dimaHome', 'hallway'] },
      ]);
    } else {
      scene.text('A few moments later Dimka\'s mother answers the door "I\'m sorry, Dimka isn\'t home right now. But I will let him know you stopped by to see him." With a smile she closes the door.');
      scene.text('After knocking several times, no one answers. It seems that either no one is home, or everyone is asleep.');
      scene.actions([
        { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
        { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
      ]);
    }
  }
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'hallway');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/hallway.jpg');
  scene.text('You walk into the entrance hall of Dimka\'s house, noticing that it is tastefully decorated. There is a small closet for your coat with a set of shelves and a mirror. This room leads to all other areas of the house.');
  scene.actions([
    { label: '<b>Leave Dimka\'s home</b>', goto: ['pav_residential', ''] },
    { label: 'Living Room', goto: ['dimaHome', 'livingroom'] },
    { label: 'Kitchen', goto: ['dimaHome', 'kitchen'] },
    { label: 'Bathroom', goto: ['dimaHome', 'bathroom'] },
    { label: 'Study', goto: ['dimaHome', 'study'] },
    { label: 'Basement', goto: ['dimaHome', 'basement'] },
    { label: 'Go upstairs', goto: ['dimaHome', 'hallway2'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Downstairs bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/halfbath.jpg');
  scene.text('You enter a half bathroom with a large sink area and hardwood floors. The toilet sits along the far wall. It all looks very spotless. The main bathroom with the tub and shower must be upstairs, you assume.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['dimaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'livingroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/livingroom.jpg');
  scene.text('The spacious living room is very clean and tidy. Everything appears perfectly in place, the couch is a large L shape, with shelves set against the back. Several very large windows provide a great view of the manicured lawn. Hanging on the main wall above the fireplace is a huge flat screen TV. You are astonished by how crisp and stylish everything seems. Nothing like your own home.');
  scene.actions([
    { label: 'Leave the living room', goto: ['dimaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/kitchen.jpg');
  scene.text('You enter the kitchen, finding that it matches the decor and cleanliness of the rest of the home. All the granite and glass surfaces are polished to a reflective gleam. A large chandelier hangs above the kitchen table, while the tiled floor glints in the light.');
  if ((((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).rand ?? 0) (0, 1) === 1)  ||  (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 19  &&  ((s as any).week ?? 0) === 5)) {
    scene.text('You see Dimka\'s mother Olya is in the kitchen, drinking tea. She is finely dressed with flawless makeup. You don\'t think she has noticed you yet.');
    if (((s as any).met_DimkaMother ?? 0) === 0) {
      scene.actions([
        { label: 'Talk', goto: ['dimaHome', 'kitchen1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Talk', goto: ['dimaHome', 'kitchen2'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave the kitchen', goto: ['dimaHome', 'hallway'] },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'study');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Study</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/study.jpg');
  if (Math.floor(Math.random() * 2) + 0 === 0  ||  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6  ||  ((s as any).hour ?? 0) < 9  &&  ((s as any).week ?? 0) >= 6) {
    scene.actions([
      { label: 'Leave the study', goto: ['dimaHome', 'hallway'] },
    ]);
  } else {
    if (((s as any).met_DimkaDad ?? 0) === 0) {
      scene.text('You see Dimka\'s father Leonid sitting behind a beautiful polished large wooden desk. He is well dressed and not bad looking, for an older guy. He seems to be working on something, you don\'t think he has noticed you yet.');
      if (((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.actions([{ label: 'Continue', goto: ['dimaHome', 'study1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['dimaHome', 'study2'] }]);
      }
    } else {
      scene.text('You see Dimka\'s father Leonid sitting behind a beautiful polished large wooden desk. He is well dressed and not bad looking, for an older guy. He seems to be working on something, you don\'t think he has noticed you yet.');
      if (((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.actions([{ label: 'Continue', goto: ['dimaHome', 'study3'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['dimaHome', 'study4'] }]);
      }
    }
  }
  scene.build();
}

function enterHallway2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'hallway2');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/hallway1.jpg');
  scene.text('You enter the long upstairs hallway of Dimka\'s home. It displays a warm, welcoming decor. This hall leads to all the other rooms on the second floor.');
  scene.actions([
    { label: 'Go downstairs', goto: ['dimaHome', 'hallway'] },
    { label: 'Dimka\'s Room', goto: ['dimaHome', 'dimkaroom'] },
    { label: 'Parents Room', goto: ['dimaHome', 'dimkaparents'] },
    { label: 'Guest room', goto: ['dimaHome', 'guest'] },
    { label: 'Bathroom', goto: ['dimaHome', 'bathroom2'] },
  ]);
  scene.build();
}

function enterBathroom2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'bathroom2');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Upstairs bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/bathroom.jpg');
  scene.text('This restroom has a large sink area and tile floors. The toilet sits along the far wall. You also notice a walk-in shower and large bathtub. You imagine how luxurious it must feel to bathe in here.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Upstairs bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/mitsa.mp4');
    scene.text('You decide to take advantage of the luxury shower. As the warm water flows over your entire body from the massive showerhead, you feel your whole body relax in the comforting stream.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out and dry off', goto: ['dimaHome', 'bathroom2'] },
    ]);
  } },
      { label: 'Soak in the bath (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_sweat = 7 + ((s as any).rand ?? 0)(0, 4);
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Upstairs bathroom</b></center>');
    scene.img('images/shared/home/bathroom/wash4.jpg');
    scene.text('You smile to yourself as you draw a bath in the impressive tub. You relish the feeling as you slowly glide into steamy water and relax.');
    scene.text('Then you begin to lather your body, gently gliding your soft hands over your smooth curves, and wash yourself thoroughly.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the bath.');
    }
    scene.actions([
      { label: '"Wash" your pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash7.mp4');
    scene.text('You turn on the faucet, lift your legs and scoot your ass over to align your pussy with the jet of warm water. It feels really good and soon a warmth begins to grow in your abdomen.');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'clit_vibe', (-10), 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', (-10), 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Get out and dry off', goto: ['dimaHome', 'bathroom2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Get out and dry off', goto: ['dimaHome', 'bathroom2'] },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  }
  qspCall(s, 'din_van', 'prvt_pee');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['dimaHome', 'hallway2'] },
  ]);
  scene.build();
}

function enterDimkaroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'dimkaroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).DimaBeHomeOnce = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/dimkaroom.jpg');
  if (((s as any).dimaFilm ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['dimaEv', 'blackmail'] }]);
  } else {
    scene.text('Dimka\'s room is surprisingly clean and organized for a boy, you think. The decorations are fairly tasteful and every object has an air of quality about it. Along one wall next to the bed is a wardrobe with mirrored doors, a small zebra pattern love seat sits along a wall near the bed. Next to the love seat is a mini fridge and just above that on a shelf is a high-end stereo system. There is also a fancy, masculine desk with a top-of-the-line computer setup on it and a laptop lying nearby as well. You can\'t help but wonder how expensive it all is. Sitting at the desk is Dimka, he turns to face you as you enter the room.');
    scene.actions([
      { label: 'Talk to Dimka', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Dimka\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/dimkaroom.jpg');
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 80) {
      scene.text('You snoop around, opening drawers, and looking in the closet. Dimka has a lot of nice clothes which are all neatly folded or hung up in his closest. Somehow you doubt he is the one that takes such care of his stuff and imagine his mother running about, maintaining appearances. In one of the drawers next to his bed you find a small bag of white powder. Other than that, there doesn\'t seem to be anything interesting about his room.');
    } else {
      scene.text('As you start to look around his room, Dimka says. "What the fuck do you think you\'re doing? It\'s pretty rude to go snooping around someone\'s stuff." You cringe inwardly and give him an apologetic look. You know you\'d react the same way if someone did it to your room too.');
    }
    scene.actions([
      { label: 'Talk to Dimka', goto: ['dimaHome', 'dimka_chat'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave Dimka\'s room', goto: ['dimaHome', 'hallway2'] },
  ]);
  scene.build();
}

function enterDimkaparents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'dimkaparents');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dimka\'s parent\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/parentsroom.jpg');
  scene.text('You enter the master bedroom and it just as clean and neat as the rest of the home. The furniture is all highly polished wood. You feel almost overwhelmed by how beautifully the room is decorated.');
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Dimka\'s parent\'s room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/parentsroom.jpg');
    scene.text('You snoop around, opening drawers, and looking in the closet. Everything is perfectly in place and neatly arranged. You don\'t find anything of interest, Dimka\'s parents seem pretty boring, you think to yourself.');
    scene.actions([
      { label: 'Leave', goto: ['dimaHome', 'hallway2'] },
    ]);
  } },
    { label: 'Go into master bathroom', goto: ['dimaHome', 'dimka_master_bathroom'] },
    { label: 'Leave', goto: ['dimaHome', 'hallway2'] },
  ]);
  scene.build();
}

function enterDimkaMasterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'dimka_master_bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Master bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/masterbath.jpg');
  scene.text('The master bathroom is a huge space with a large sink area and tile floors. The toilet sits along the far wall. You can\'t help but feel impressed by the size of the walk-in shower and deep bathtub. It all looks very expensive.');
  scene.text('You can do your hair and makeup in the <a href="exec:gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0) {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  } else {
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    // TODO-QSP: dynamic text: <video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/school/boy/ig...
    scene.text(`<video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/school/boy/igor/mitsa.mp4"></video>`);
    scene.text('You take a quick shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Get out of the shower', handler: (st: GameState) => {
    scene.text('You get out of the shower and dry off.');
    scene.actions([
      { label: 'Get dressed', goto: ['dimaHome', 'dimka_master_bathroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Take a bath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'din_van', 'bath');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/wash4.jpg');
    scene.text('You take a quick bath.');
    scene.actions([
      { label: 'Get out of the bath', handler: (st: GameState) => {
    scene.text('You get out of the bath and dry off.');
    scene.actions([
      { label: 'Get dressed', goto: ['dimaHome', 'dimka_master_bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'prvt_pee');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['dimaHome', 'dimkaparents'] },
  ]);
  scene.build();
}

function enterGuest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'guest');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Guest Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/guestroom.jpg');
  scene.text('You enter the guest bedroom and it just as clean and neat as the rest of the home. The furniture is all highly polished wood. You feel almost overwhelmed by how beautifully the room is decorated.');
  scene.actions([
    { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('<center><b>Guest Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/guestroom.jpg');
    scene.text('You snoop around, opening drawers, and looking in the closet. Everything is perfectly in place and neatly arranged. You don\'t find anything of interest.');
    scene.actions([
      { label: 'Leave', goto: ['dimaHome', 'hallway2'] },
    ]);
  } },
    { label: 'Leave', goto: ['dimaHome', 'hallway2'] },
  ]);
  scene.build();
}

function enterBasement(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dimaHome', 'basement');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Basement</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/basement.jpg');
  scene.text('You walk down the stairs into the basement, even the basement in this place is nice. A door leads off to the utility room and another leads off to what looks like a fairly large part of the basement.');
  scene.actions([
    { label: 'Go back upstairs', goto: ['dimaHome', 'hallway'] },
    { label: 'Try the door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('<center><b>Basement</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/basement.jpg');
    scene.text('You walk over to the door and try it to open it. It won\'t budge, the door is locked. You look around and don\'t see a place for a key. Giving up you go back upstairs.');
    scene.actions([
      { label: 'Go back upstairs', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).met_DimkaMother = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/olya.jpg');
  scene.text('As soon as she notices that you\'ve entered she jumps up, quite frightened.');
  scene.text('"Oh, I\'m sorry! I didn\'t mean to startle you." you tell her.');
  scene.text('She manages to let out a somewhat fake smile, "No no, don\'t worry! It\'s completely my fault. I wasn\'t aware we had guests."');
  // TODO-QSP: dynamic text: You smile back, "I'm <<$pcs_firstname>> but you can call me <<$pcs_nickname>>. I...
  scene.text(`You smile back, "I'm ${((s as any).pcs_firstname ?? 0)} but you can call me ${((s as any).pcs_nickname ?? 0)}. I'm in the same class as Dimka."`);
  scene.text('Uncertain how to react she replies back, "O-Oh, hello, I\'m Olya and am Dimka\'s mother. Please take a seat, let me make some tea."');
  scene.actions([
    { label: 'Have a seat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/olya.jpg');
    scene.text('Olya starts humming on a tune while she brewing the tea, she looks really happy doing it.');
    scene.text('"You shouldn\'t go through the trouble. I don\'t want to be of any trouble." you remark.');
    // TODO-QSP: dynamic text: Olya smiles back, "Don't worry <<$pcs_nickname>> it's my pleasure to serve. My b...
    scene.text(`Olya smiles back, "Don't worry ${((s as any).pcs_nickname ?? 0)} it's my pleasure to serve. My boys already expect me to act that way so I'm more than happy to serve you too, especially since my sweet Dimka has been mentioning you."`);
    scene.actions([
      { label: 'He has?', handler: (st: GameState) => {
    (s as any).frost = 0;
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/olya.jpg');
    scene.text('You\'re a bit taken back as Olya mentions that Dimka\'s been talking about you to her, "I don\'t mind to pry but what has he said about me?" you curiously ask.');
    scene.text('She frowns a little, "He likes to keep me in the dark and doesn\'t really share what happens in his life. He likes to talk to his father more, I guess boys will be boys." she shrugs her shoulders.');
    scene.text('"I\'m so sorry it wasn\'t my intent to make you upset." you explain yourself as you notice Olya is getting a bit sad.');
    scene.text('As soon you utter the words she snaps out of it and begins to excuse herself, "Oh no no, I\'m so sorry. Don\'t worry about me, I\'ll manage. It was really silly of me. Please don\'t tell Dimka that I was upset or anything…"');
    scene.text('She\'s really acting strange, but you decide to let go of it as Olya hands you over a cup and some cookies and the two of you spend some time talking to each other.');
    scene.actions([
      { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKitchen2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/olya.jpg');
  // TODO-QSP: dynamic text: Noticing you, Olya smiles and greets you, "Hello <<$pcs_nickname>>, I'm glad to ...
  scene.text(`Noticing you, Olya smiles and greets you, "Hello ${((s as any).pcs_nickname ?? 0)}, I'm glad to see you again. Do you want some tee?"`);
  scene.text('You look worryingly at her, "I would like to but I have to talk to you about something."');
  // TODO-QSP: dynamic text: Olya looks at you in fear, "What's wrong <<$pcs_nickname>>? Did anything happen ...
  scene.text(`Olya looks at you in fear, "What's wrong ${((s as any).pcs_nickname ?? 0)}? Did anything happen to you?"`);
  scene.actions([
    { label: 'Tell her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Kitchen</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/olya.jpg');
    if (((s as any).dimaFilm ?? 0) === 1) {
      scene.text('Your breathing is heavy and you can feel a few sweat drops trickle down your back, "I have an issue that I have to talk to you with, it regards Dimka."');
      scene.text('Olya observes you closely, "Y-Yes? What has he done now?"');
      scene.text('You take a deep breath, "H-He\'s gotten hold of a video of mine and has been blackmailing me into slavedom."');
      // TODO-QSP: dynamic text: Olya as if she's relieved begins to speak, "Oh, don't worry about that <<$pcs_ni...
      scene.text(`Olya as if she's relieved begins to speak, "Oh, don't worry about that ${((s as any).pcs_nickname ?? 0)}. It's only a faze he's going through, it should pass relatively quickly."`);
      scene.text('Taken a back by how causally she\'s dismissing it you decide it\'s not worth to pursuing it as you\'re talking to deaf ears.');
      scene.actions([
        { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
      ]);
    } else {
      scene.text('Your breathing is heavy and you can feel a few sweat drops trickle down your back, "I have an issue that I have to talk to you with, it regards you."');
      scene.text('Olya starts franticly looking around, "Oh my, really? What have I done now to upset you?"');
      scene.text('You take a deep breath, "Nothing really, I\'m not upset or anything but I have a feeling that both Dimka and your husband might be using you."');
      scene.text('Olya keeps quiet for a moment and then starts to smile, "You\'re worried about me? That\'s sweet of you to worry but there\'s no need to worry about me. We\'re a happy family and I love my boys."');
      scene.text('You feel there\'s something more behind the facade but you don\'t want to press on as you don\'t have anything more to go on.');
      scene.actions([
        { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStudy1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Study</b></center>');
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  // TODO-QSP: dynamic text: Noticing you, he stops and looks towards you, "Hello <<$pcs_nickname>> What can ...
  scene.text(`Noticing you, he stops and looks towards you, "Hello ${((s as any).pcs_nickname ?? 0)} What can I help you with?"`);
  scene.text('You stumble a little as you\'re surprised that the man knows your name, as you\'ve never met him before in your life.');
  scene.actions([
    { label: 'How do you know my name?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('After the initial chock, you finally manage to compose yourself, "H-How do you know my name?"');
    scene.text('The man begins to laugh, "Sorry about that but my son has been talking about this wonderful girl he\'s met so as soon I noticed you, I just assumed he was talking about you."');
    scene.text('You\'re barely able to notice it but you\'re blushing by his comment, "T-Thank you for the compliment."');
    scene.actions([
      { label: 'Dimka has mentioned me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('You continue on, "I don\'t mean to pry but has Dimka been mentioning me?"');
    scene.text('The man grins, "Yeah, he can\'t stop going on about you. But I must say you far exceed my expectations. I must say I\'m pretty surprised that my son succeeded to attract someone this beautiful."');
    scene.text('By now you feel your cheeks heating up, and you\'re pretty sure that your cheeks have turned red, "T-Thank you once again. You\'re far too kind."');
    scene.text('"Now if you excuse me I must head back to work. The name is Leonid by the way. Don\'t be a stranger to visit me again if you have any questions or need any help with anything." he tells you as he returns to his desk.');
    scene.actions([
      { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStudy2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Study</b></center>');
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  scene.text('He looks up indifferent towards you, "And how can I help you?"');
  scene.text('You\'re taken a back a little by his brashness, "H-Hi, I didn\'t mean to bother you, I was looking for Dimka."');
  scene.text('The man let\'s out a loud sigh, "You won\'t find him here. He\'s probably somewhere else around. As you should be."');
  scene.actions([
    { label: 'Sorry to have bothered you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('Noticing he\'s getting annoyed, you tell him that you\'re sorry to have bothered him as he shoo\'s you off.');
    scene.text('Just as you\'re about to close the door, he speaks up, "Tell Dimka to come visit me when you find him. I need to tell him not to let people run around the house by themselves."');
    scene.text('You keep quiet and nod disheartened.');
    scene.actions([
      { label: 'Close the door', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStudy3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Study</b></center>');
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  scene.text('Noticing it\'s you, Leonid open-hearteningly welcomes you, "Come in my dear, it\'s been a while since I\'ve seen you last. Have you been avoiding me?" he teasingly says.');
  scene.text('Smiling, "No not at all, I\'ve just been busy with school and Dimka." you reply.');
  scene.text('"I understand, bet you and Dimka have been having fun with each other?" Leonid asks.');
  scene.actions([
    { label: 'How come?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('His question is strangely put and you start to wonder why, "It\'s kind of personal, Leonid. Why do you wonder?"');
    scene.text('He smiles as he explains himself, "Nothing in particular, I just wanted to know what my boy has been up to. I don\'t want him to take advantage of someone beautiful as you."');
    scene.text('You blush as you hear him go on, "Nothing to worry about Leonid. Dimka and I are having a great time with each other."');
    scene.actions([
      { label: 'Keep on talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    // TODO-QSP: dynamic text: The two of you are having quite a nice chat as Leonid inquires about different t...
    scene.text(`The two of you are having quite a nice chat as Leonid inquires about different things. All of a sudden he drops a bomb, "Tell me ${((s as any).pcs_nickname ?? 0)} are you still a virgin?"`);
    scene.text('You\'re taken aback by his question as you begin to stutter, "W-Why do you want to know that?"');
    scene.text('He begins to laugh, "I\'m just curious, and would like to know."');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not his business [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not his business', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('You cross your arms, "That\'s something I would like to keep to myself and I don\'t want to talk about it with you."');
    scene.text('Leonid has noticed that he crossed the line and backs off, "Aren\'t you feisty. If you don\'t feel talking about it, don\'t worry we don\'t have to."');
    scene.text('By now the whole situation is getting awkward and you just want to leave the room, "I need to head out now. I had a pleasant time talking to you."');
    scene.text('Leonid, dejected, "I understand. I hope I didn\'t make things too awkward between us. Come visit me whenever you like."');
    scene.actions([
      { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Say yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('Your face turns red as you meekly answer, "Y-Yes, I am…"');
    // TODO-QSP: dynamic text: Leonid smiles and gently touches your arm, "Nothing to be ashamed of <<$pcs_nick...
    scene.text(`Leonid smiles and gently touches your arm, "Nothing to be ashamed of ${((s as any).pcs_nickname ?? 0)}. It's quite uplifting hearing that there are still younger people out there waiting to have sex."`);
    scene.text('"I-I guess…" you shyly answer back.');
    scene.text('"Don\'t worry I\'m sure the right one will come sooner or later." he comforts you.');
    scene.text('You smile and nod, "Thank you for the talk but I have to be going now."');
    scene.actions([
      { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
      { label: 'Say no', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('You confidently answer back, "No I\'m not a virgin. I\'ve been having sex and it\'s quite exciting I must admit."');
    scene.text('Leonid begins to laugh, "Yeah, having sex is pretty great, I agree. It\'s good hearing that you\'re so fond of it."');
    scene.text('You nod, "Yeah, I like the sensation it gives me and it\'s quite special sharing it with someone you care about."');
    scene.text('"That sounds like you\'re really enjoying yourself. But if you excuse me now I have to go back to work. I have some important stuff that need some serious planning…" he tells you.');
    scene.actions([
      { label: 'Goodbye', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStudy4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Study</b></center>');
  scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
  scene.text('Seeing you once again entering his study, Dimka\'s father irritably ask you, "What are you doing back here again? Didn\'t Dimka tell you that this room is off limits?"');
  scene.text('You nod, "Yes, he did but…"');
  scene.text('The father frowns as he continues on, "So what do you want? I don\'t have time to deal with your issues…"');
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Study</b></center>');
    scene.img('images/characters/pavlovsk/resident/leonid/leonid.jpg');
    scene.text('Seeing Dimka\'s father upset you lose track of why you needed to see him, "S-Sorry, but it\'s totally slipped my mind why I wanted to see you."');
    scene.text('He crosses his arms, "Not very attractive nor smart… Such a disappointment… I need to talk to my son about this, he should really search for someone else, this won\'t do, at all."');
    scene.text('Knowing you messed up, you\'re only able to stand there and take the verbal beating Dimka\'s father is spewing. As he finishes you quickly excuse yourself and tell him that you won\'t be bothering him again…');
    scene.actions([
      { label: 'Close the door', goto: ['dimaHome', 'hallway'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).dimaFilm ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['dimaEv', 'blackmail'] }]);
  }
  (s as any).dima_chat_counter = ((s as any).dima_chat_counter ?? 0) + (1);
  if (((s as any).dima_chat_counter ?? 0) > 4) {
    scene.actions([{ label: 'Continue', goto: ['dimaHome', 'dimka_seduce'] }]);
  }
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/dimkahome/dimkadesk.jpg');
  scene.text('As you enter his room, Dimka walks over and sits on the love seat. He pats the cushion next to him. You walk over and take a seat on the comfy love seat as well.');
  if (((s as any).met_DimkaMother ?? 0) !== 0) {
    scene.actions([
      { label: 'Ask about his mother', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You decide to ask about his mother after having meet her. "Your mother seems nice."');
    scene.text('He shrugs a bit. "Yeah I guess." He answers in a dismissive tone.');
    scene.actions([
      { label: 'What do you think of her?', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You decided to press on anyways, as you want to know more about her. "She seems, well I don\'t mean to be rude but, overly subservient I guess." You say, trying not to sound rude.');
    scene.text('He snorts a bit. "Yeah, like my dad says, she has been well trained." He seems to find that amusing and, apparently, all the answer you need. Something about the way he says it makes you think there is more to it.');
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).met_DimkaDad ?? 0) !== 0) {
    scene.actions([
      { label: 'Ask about his dad', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    if (((s as any).pcs_hotcat ?? 0) > 6) {
      scene.text('You decide to ask him about his dad after having meet him. "I think your dad was coming on to me."');
      scene.text('He gives you a dark, hate-filled look for a moment but then shrugs a bit. You get the sense that the look wasn\'t directed at you. "I am sure he was just messing with you." His tone indicates this area of conversation is over.');
    } else {
      scene.text('You decide to ask him about his dad after having meet him. "Your dad seems pretty rude."');
      scene.text('He chuckles a bit. "Well you\'re not his type and you aren\'t anyone important to him. So that makes you something to be tolerated at best. My dad sees only two kinds of people: Those that are useful to him and those that are not. And you fall into the later." You get the feeling he finds that amusing.');
      scene.actions([
        { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
        { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Make small talk', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('The two of you chat about a variety of things, mostly school, music, and what has been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    { label: 'Ask about Igor', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    if (((s as any).IgorQW ?? 0)?.['DimaNos'] === 4) {
      scene.text('He looks at you with disgust. "That faggot? What about him?"');
      scene.actions([
        { label: 'What happened?', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('"I thought you guys were friends, what happened?"');
    scene.text('His scowl grows as he begins to look even more pissed off answering the question. "The fucking faggot dressed up like a girl and tricked me into dating him." He gives you a dirty look. "Don\'t think I don\'t know about the part you played in it. He admitted everything to me."');
    scene.actions([
      { label: 'We weren\'t trying to trick you', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You shake your head and speak calmly, trying to get him to see from Igor\'s point of view. "We weren\'t trying to trick you. I was just helping Igor come to terms with how he feels and who he really is. I know the last thing he wanted was to hurt you."');
    scene.text('"Then the sick little faggot should have told me then and there. Not agree to go out on a date with me. Did he tell you what happened on our first date?"');
    scene.text('Without even waiting for a reply he continues ranting. "We come back here and he fucking sucks my dick! Swallowed the whole load without hesitation! How fucking disgusting is that!"');
    scene.text('"He was even eager to go out again, but I found out the truth. I nearly beat him to death, but then I had a thought. I figured that if the little sissy slut wants to be my bitch so bad, I\'ll show him what it really takes. I gave him just what he thought he wanted. I fucked him like the faggy cunt he is." You can tell he is pissed, perhaps it is best to change the subject before he takes it out on Igor or maybe even you.');
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Igor and I have been friends almost as long as I can remember. We always hang out together and I know he has my back, no matter what." He goes on to tell you a few funny stories from when the two of them where kids and use to play together.');
    }
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    { label: 'Ask about Lavrenti', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('He busts up laughing and then shakes his head, it takes him a few minutes to get himself back under control. "Oh, that drama? Well, turned out the girl he was dating was a complete slut and he blames me."');
    scene.actions([
      { label: 'So what happened?', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('He seems to consider whether he wants to tell you or not and then shrugs before launching into the story. "So I was throwing one of my parties and he brought this girl he had been seeing. She was a year younger than us, I have no idea what he saw in her. She looked alright, I guess, but nothing special. I knew my boy could do better, but whatever. Anyway, after the party had been jumping a while I felt like I needed a break. So I headed up here to my room and his girl follows me. Before I knew it, she was on her knee\'s sucking my dick like there\'s no tomorrow. So I was like, Fuck it. If this is the kinda whore she is then I should have fun and tell Lavrenti to dump this slut in the morning. So I turned her around and started fucking her. I could tell she had been well used and recently, she was pretty loose even for me."');
    scene.text('He pauses a moment. "Anyway, while I\'m pounding this bitch from behind, Igor opens the door and looks in, then runs off. Before I know it almost everyone is piling into my room while I am banging the slut. She doesn\'t care and or even seem notice, she just keeps moaning like the slut she is." Dimka mimics some whoreish moaning before bursting into laughter. He gathers himself a moment later and continues. "That\'s when Lavrenti busts in and sees me plowing this slut and he fucking loses it! He runs over and punches me in the face, so I jump up and start giving him a beat down, asshole naked and everything."');
    scene.text('He pauses and shakes his head. "After some of the others broke up the fight, I tried to explain to him that she came onto me. He wouldn\'t hear it, though. This bitch is barely even paying attention and he starts whining about how he loves her and shit. She just straight up ignores him, it was pathetic and he blames me for it to this day!"');
    scene.actions([
      { label: 'What happened to her?', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('Being curious what happened to the girl, you decided to ask. "So what happened to her?"');
    scene.text('Dimka shrugs a bit. "Lizaveta said she moved in with her aunt or something in Pushkin, I think. Changed schools after everyone knew she was a slut and treated her accordingly." Not sure what more to say about it, you decided to move to a different subject.');
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    ]);
  } },
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    { label: 'Ask about the future', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You are curious what his plans are for the future. "What do you plan to do once we graduate?"');
    scene.text('He seems to think on that for a few moments. "Well, go to the University for sure and get my business degree. Then I will move to the city and start my own business." He doesn\'t ask about what you plan to do, nor does he seem interested.');
    scene.actions([
      { label: 'Talk about something else', goto: ['dimaHome', 'dimka_chat'] },
      { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    { label: 'Ask if he has a girlfriend', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You know many of the girls think he is cute and you are pretty sure he has dated some of them, but you don\'t know if he is serious with anyone. "So do you have a girlfriend?"');
    scene.text('He shakes his head no. "Not really, I date a few girls and we have fun, but nothing serious." Then he smirks a little bit and looks at you. "Why? You interested that position?"');
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You shake your head, confused. This conversation really went off the rails and not in a direction you intended. "No. I mean, I like you, but not like that, not that…"');
    scene.text('He interrupts you. "Hey it\'s cool, I am not looking either. I just want to have some fun. So, how about you and I have some fun?"');
    scene.text('Fun sounds all well and good, but what does he mean? "What kind of fun?" You ask him as you eye him suspiciously.');
    scene.actions([
      { label: 'Wait for his reply', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/cocaine.jpg');
    scene.text('He looks you over for a moment before he leans over and digs in a drawer. As moves back you see him holding a bag of white powder. He dangles it between his fingers, letting it sway back and forth enticingly. "Take a hit of this and we can have some real fun."');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-1));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head meekly. "No thanks, I can\'t."');
    scene.text('He looks disappointed, but maintains a sympathetic smile. "Ok, it\'s too much. I get it. How about you drink some alcohol with me then?"');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head again. "No thanks."');
    scene.text('His face suddenly twists in disgust. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave. I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('He nods and turns to dig around in the mini fridge. Dimka pours two glasses half full with juice and then adds some vodka to them. His body is obscuring your view of the glasses as he prepares the drinks.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('Feeling uncertain, you shake your head no. "Actually, I don\'t want to drink. Thanks, though."');
    scene.text('His face suddenly twists in disgust. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave. I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('You take the offered glass of booze. Dimka raises his glass and clinks it against yours before quickly taking a drink. You follow suit and swallow a large gulp of the liquor. You almost gasp. He made it really strong, you can barely taste anything but the vodka. You continue drinking and, after several more sips, you start to feel light headed. It\'s like your brain is fuzzy and you feel like everything is moving underwater. Your head swims as you look over at him and see a huge grin on his face.');
    scene.actions([
      { label: 'Further', goto: ['dimaEv', 'drugged'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/doaline.jpg');
    scene.text('You nod ok, still unsure about the decision. Dimka sprinkles some of the cocaine on the table and cuts it up into lines using a credit card he removed from his wallet. He hands you a drinking straw and leans back, giving you room to do a line. Tentatively you bend over with the straw held to your nostril. You snort up a line of coke and then throw your head back as the feeling hits you almost all at once. A rush of adrenaline and endorphins surges through your body, making it tingle and pulse in the most delightful of ways. Through the sensation you feel your pussy immediately begin to leak it\'s juices.');
    scene.actions([
      { label: 'Further', goto: ['dimaEv', 'cocaine'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).fedorKozlovQW ?? 0) >= 1  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.text('You tell him. "I have a boyfriend, you know? I\'m dating Niko."');
      scene.text('He busts out laughing. "That loser? Oh god I thought you had more sense than that. You know you could do much better than him don\'t you?" He says as he genly strokes your hair.');
    } else {
      scene.text('You tell him. "I have a boyfriend you know, I\'m dating Fedor."');
      scene.text('He busts out laughing. "Fedor? Oh god I thought you had more sense than that. I mean if it was Lazar or Ivan, maybe. Fedor is just a hanger on, you know you could do much better than that, don\'t you?" He says as he strokes your hair.');
      // TODO-QSP: dynamic text: You tell him. "I have a boyfriend you know, I'm dating <<$npc_usedname[$temp_npc...
      scene.text(`You tell him. "I have a boyfriend you know, I'm dating ${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcID ?? 0)]}."`);
      // TODO-QSP: dynamic text: He busts out laughing. "<<$npc_usedname[$temp_npcID]>>? Oh god I thought you had...
      scene.text(`He busts out laughing. "${((s as any).npc_usedname ?? 0)?.[String((s as any).temp_npcID ?? 0)]}? Oh god I thought you had more sense than that. You know you could do much better than him, right?" He says as he strokes your hair.`);
    }
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No I don\'t thnk I can [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No I don\'t think I can', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You shake your head no and push his hand away. "I doubt that, he makes me happy."');
    scene.text('Dimka gives you a disgusted look. "Then why the fuck are you here?" Before you can even answer that, he continues. "You know what? I think you should leave, I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('You blush slightly. "You think so?" You ask, looking up into his captivating eyes.');
    scene.text('He strokes your hair a bit more deeply. "A girl like you? Any guy would die to have you as his girlfriend, and most would treat you like a queen. How about we have a drink to celebrate?"');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head no. "No thanks."');
    scene.text('He gives you a disgusted look. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave, I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('He nods and turns to dig around in the mini fridge. Dimka pours two glasses half full with juice and then adds some vodka to them. His body is obscuring your view of the glasses as he prepares the drinks.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('Feeling uncertain, you shake your head no. "Actually, I don\'t want to drink. Thanks, though."');
    scene.text('His face suddenly twists in disgust. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave. I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('You take the offered glass of booze. Dimka raises his glass and clinks it against yours before quickly taking a drink. You follow suit and swallow a large gulp of the liquor. You almost gasp. He made it really strong, you can barely taste anything but the vodka. You continue drinking and, after several more sips, you start to feel light headed. It\'s like your brain is fuzzy and you feel like everything is moving underwater. Your head swims as you look over at him and see a huge grin on his face.');
    scene.actions([
      { label: 'Further', goto: ['dimaEv', 'drugged'] },
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
    scene.actions([
      { label: 'Maybe', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/talk.jpg');
    scene.text('Your cheeks flush read as you suddenly feel put on the spot. That is not what you meant… but he is awfully cute and all the other girls would be so jealous. "I don\'t know, maybe…" You trail off hoping he feels the same way.');
    scene.actions([
      { label: 'Wait for his reply', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/cocaine.jpg');
    scene.text('He looks you over for a moment before answering with a smirk. "Well any girl that wants to be my girl has to know how to party." With that said he leans over and digs in a drawer. As moves back you see him holding a bag of white powder. He dangles it between his fingers, letting it sway back and forth enticingly. "Take a hit of this and prove you\'re you know how to have fun."');
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-1));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head meekly. "No thanks, I can\'t."');
    scene.text('He looks disappointed, but maintains a sympathetic smile. "Ok, it\'s too much. I get it. How about you drink some alcohol with me then?"');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You shake your head again. "No thanks."');
    scene.text('His face suddenly twists in disgust. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave. I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('He nods and turns to dig around in the mini fridge. Dimka pours two glasses half full with juice and then adds some vodka to them. His body is obscuring your view of the glasses as he prepares the drinks.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('Feeling uncertain, you shake your head no. "Actually, I don\'t want to drink. Thanks, though."');
    scene.text('His face suddenly twists in disgust. "Then why the fuck are you here?" Before you can even answer that, he continues. "I think you should leave. I got more important things to do." With that he gets up and ushers you out of his house quickly.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/drink.jpg');
    scene.text('You take the offered glass of booze. Dimka raises his glass and clinks it against yours before quickly taking a drink. You follow suit and swallow a large gulp of the liquor. You almost gasp. He made it really strong, you can barely taste anything but the vodka. You continue drinking and, after several more sips, you start to feel light headed. It\'s like your brain is fuzzy and you feel like everything is moving underwater. Your head swims as you look over at him and see a huge grin on his face.');
    scene.actions([
      { label: 'Further', goto: ['dimaEv', 'drugged'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Ok', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/doaline.jpg');
    scene.text('You nod ok, still unsure about the decision. Dimka sprinkles some of the cocaine on the table and cuts it up into lines using a credit card he removed from his wallet. He hands you a drinking straw and leans back, giving you room to do a line. Tentatively you bend over with the straw held to your nostril. You snort up a line of coke and then throw your head back as the feeling hits you almost all at once. A rush of adrenaline and endorphins surges through your body, making it tingle and pulse in the most delightful of ways. Through the sensation you feel your pussy immediately begin to leak it\'s juices.');
    scene.actions([
      { label: 'Further', goto: ['dimaEv', 'cocaine'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Kiss him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 1);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss.jpg');
    scene.text('You decide that, instead of answering him, you will show him. You lean over and press your lips against his. He quickly pulls you closer as the two of you start to kiss.');
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop kissing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop kissing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-1));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You make out for a minute or two before you choose to pull away so that things don\'t go too far. You have to push him away with your hands to make him stop as he tries to lean in to continue. "Sorry, I got carried away. Can we just go back to talking?" You tell him.');
    scene.text('He frowns a little. "Come on baby, you started this. Don\'t leave me hanging." He says before attempting to lean into you again.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop kissing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop kissing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You push him away with all your strength and finally force him to back up. "I said no."');
    scene.text('He suddenly gets furious. "Oh, you fucking tease! Get the hell out of my house, then!" With that he gets up and practically drags you out of his house, pushing you out the front door, before slamming it behind you.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['dimaHome', 'dimka_makeout'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Make out', goto: ['dimaHome', 'dimka_makeout'] },
    ]);
  } },
    ]);
  } },
    { label: 'Stop talking', goto: ['dimaHome', 'dimkaroom'] },
  ]);
  scene.build();
}

function enterDimkaMakeout(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss1.jpg');
  scene.text('He wraps his arms around your neck and pulls you in close and soon the two of you are kissing passionately. The kisses are full of eager lust and urgent need. You feel yourself getting more and more aroused. Then he starts pulling your clothes off.');
  qspCall(s, 'arousal', 'foreplay', 3, 'unknown');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-3));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You pull away before things go too far and catch your breath, as you start pulling your clothes back in place. You have to push him away with your hands several times to make him stop trying to undress you. "Sorry, I got carried away. Can we just go back to talking?" You tell him.');
    scene.text('He frowns a little. "Come on baby, you started this. Don\'t leave me hanging."');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I said no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I said no', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('With that he reaches back in and tries to pull your top off again, you push him away with all your strength and you barely manage to force him to back up. "I said no."');
    scene.text('He suddenly gets furious. "Oh, you fucking tease! Get the hell out of my house, then!" With that he gets up and practically drags you out of his house, pushing you out the front door, before slamming it behind you.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['dimaHome', 'dimka_knees'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'To your knees', goto: ['dimaHome', 'dimka_knees'] },
  ]);
  scene.build();
}

function enterDimkaSeduce(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss.jpg');
  scene.text('As you sit together you turn to say something to him as he suddenly leans in and starts kissing you. His hands stroke your face and hair gently as his kisses you passionately.');
  qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop kissing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop kissing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-1));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You pull away before things go too far and catch your breath. You have to push him away with your hands to make him stop, as he tries to lean in as you pull away. "Sorry, Can we just go back to talking?" You tell him.');
    scene.text('He frowns a little. "Come on baby, I like you. Don\'t leave me hanging."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop kissing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop kissing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You push him away with all your strength and finally manage to force him to back up. "I said no."');
    scene.text('Dimka\'s face suddenly turns into anger and confusion, obviously upset. "I thought you liked me, but whatever! I think you should leave." With that he gets up and escorts you to his bedroom door and closes it firmly behind you. Unsure what else to do you leave his house.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['dimaHome', 'dimka_makeout2'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Make out', goto: ['dimaHome', 'dimka_makeout2'] },
  ]);
  scene.build();
}

function enterDimkaMakeout2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss1.jpg');
  scene.text('He wraps his arms around your neck and pulls you in close and soon the two of you are kissing passionately. Dimka smothers your mouth with his, kisses full of eager lust and urgent need. You feel yourself getting progressively aroused as a heat builds inside you. Dimka begins pulling at your clothes, attempting to remove them.');
  qspCall(s, 'arousal', 'foreplay', 3, 'unknown');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-3));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('You pull away before things go too far and catch your breath. You have to push him away with your hands to make him stop, as he tries to lean in as you pull away. "Sorry, Can we just go back to talking?" You tell him.');
    scene.text('He frowns a little. "Come on baby, I like you. Don\'t leave me hanging."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I said no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I said no', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'npc_relationship', 'modify', 'A1', (-5));
    qspCall(s, 'stat', '');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/stop.jpg');
    scene.text('With that, he reaches back in and tries to pull your top off again, you push him away with all your strength and finally manage to force him to back up. "I said no."');
    scene.text('He suddenly gets furious. "Oh, you fucking tease! Get the hell out of my house, then!" With that he gets up and practically drags you out of his house, pushing you out the front door, before slamming it behind you.');
    scene.actions([
      { label: 'Leave Dimka\'s home', goto: ['pav_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', goto: ['dimaHome', 'dimka_knees'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'To your knees', goto: ['dimaHome', 'dimka_knees'] },
  ]);
  scene.build();
}

function enterDimkaKnees(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'strip');
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss2.jpg');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.text('As the makeout session continues, Dimka takes every opportunity to strip you of your clothing. Soon enough you find yourself wearing just your panties.');
  } else {
    scene.text('As the makeout session continues, Dimka takes every opportunity to strip you of your clothing. Soon enough you find yourself naked in front of him.');
  }
  scene.text('With you undressed he pulls you up to stand with him, giving you another kiss. Then he pushes you down roughly to your knees as he pulls his shirt off. You know what he wants, so you start unbuttoning his pants. You tentatively pull his dick free and start stroking it with your hand. It doesn\'t take very long till it is rock-hard and pointing at your mouth.');
  qspCall(s, 'arousal', 'hj', 3, 'unknown');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A1', 3);
    qspCall(s, 'boyStat', 'A1');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss3.jpg');
    // TODO-QSP: dynamic text: Your mouth waters as your wrap your lips around his juicy cock. You use one hand...
    scene.text(`Your mouth waters as your wrap your lips around his juicy cock. You use one hand to gently stroke his balls and the other to stroke his shaft in rhythm with your head. You look up into his eyes with his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick in your mouth, looking for approval as you suck your way up and down his shaft. After a few minutes you feel his hands on the back of your head and he starts forcing you towards him as he thrusts his hips. Both of you hands move to his thighs as he begins to facefuck you, his cock sliding down your throat, gagging you viciously. Soon he is slamming into your esophagus balls deep until you feel yourself reaching the limit of what you can handle.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      (s as any).dimka_pantycheck = 1;
      scene.text('Finally he pulls his dick out of your mouth and kicks his pants off. You sputter and spit as he pulls you up to your feet. He sits down on the couch, reaches over and pulls your soaking panties down around your ankles before helping you step out of them. He turns you around and then pulls you back towards him.');
    } else {
      scene.text('Finally he pulls his dick out of your mouth and kicks his pants off. You sputter and spit as he pulls you up to your feet. He sits down on the couch, then he turns you around and then pulls you back towards him.');
    }
    qspCall(s, 'arousal', 'bj', 5, 'deepthroat', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take a seat', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A1');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss4.jpg');
    // TODO-QSP: dynamic text: You reach between your legs and grab his throbbing dick, guiding it into your we...
    scene.text(`You reach between your legs and grab his throbbing dick, guiding it into your wet pussy, as he pulls you down onto his lap. You feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock, slide into your hungry twat, filling it up. You slowly lower yourself down, impaling yourself on him. As you adjust to the sensation you begin to slowly ride his shaft, and as it feels better and better you pick up the pace.`);
    scene.text('After several minutes of you controlling the position, he reaches both hands under your knees and pulls your legs up. He then starts pounding you furiously from the bottom and starts fucking you in this position. After a few moments of this he stands pushes you up to your feet, obviously tired of holding you up to fuck you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss5.jpg');
    scene.text('Once you reach your feet he gets up as well and turns you to face the couch. He then pushes you forward, bending you over at the waist. You hands have barely touched the couch before you feel his dick slide back in your wet pussy. As soon as he is in he begins relentlessly pounding your cunt as hard as he can, his balls slamming against you. Dimka slaps your ass hard as he fucks you, the force of his hips slapping against your butt forces you forward slowly until you find yourself kneeling on the couch.');
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Hey you missed', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A1');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss6.jpg');
    scene.text('He continues railing you, showing no care for your pleasure, only his. After a while he has your head pushed down onto the arm of the couch with your shoulder pinned against the arm and the back of the couch. You feel somewhat trapped with no room left to scoot forward.');
    scene.text('Without warning he pulls his cock out of your dripping hole for a moment and repositions himself. He gets up on the couch, standing on it to get a higher position. You then feel the head of his cock pressed against your asshole! Before you can even protest he shoves it in your ass, plunging as deep as he can go in a single thrust. You cry in pain and pleasure, tears welling up in your eyes. You scream out "That\'s my ass!"');
    // TODO-QSP: dynamic text: Dimka doesn't seem to care as he drives his <<dick>>cm <<$dick_girth>> dick deep...
    scene.text(`Dimka doesn't seem to care as he drives his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick deeper into your ass. You beg him to pull it out but he coldly replies. "Shut the fuck up, slut!" as he continues pounding your aching butthole.`);
    qspCall(s, 'arousal', 'anal', 5, 'rough', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Not as bad', handler: (st: GameState) => {
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss7.jpg');
    scene.text('After several agonizing minutes he pulls out for a moment before rolling you over onto your side laying across the arm of the couch. You want to ask him to stop but as soon as he has you repositioned he slips his rod back in your ass. You grit your teeth at the pain and pray that it will be over soon. "At least now it is a bit loosened up. And in this position he can\'t go as deep which makes it feel a little better." You think, trying to reason with yourself in this powerless situation.');
    qspCall(s, 'arousal', 'anal', 5, 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Thar he blows', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'butt', 'A1');
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/home/kiss7.jpg');
    scene.text('After a few more minutes Dimka begins to grunt and spasm. He suddenly pulls his dick out of your abused hole and you feel his hot cum spray against your inner thighs and ass. After his orgasm subsides he climbs down off the couch and starts to get dressed again, while you clamor for some tissues to wipe his cum off you.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).dimka_pantycheck ?? 0) === 1) {
      (s as any).dimka_pantycheck = 0;
      qspCall(s, 'panties', 'wear');
    }
    qspCall(s, 'outfit', 'wear_last_worn');
    (s as any).dimaFilm = 1;
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/seeporn.jpg');
    scene.text('As you start to get dressed, still trying to make sense of what just happened, you notice Dimka checking something on his computer. Just as you\'re finishing pulling on your last bits of clothing, you hear him chuckle. "Now your mine you worthless fucking slut. I own your ass! You got that?!?"');
    scene.text('You look at him confused, thinking he must be joking still but then you realize he is serious. "What are you talking about?"');
    scene.text('An evil grin plays across his face. "I\'m glad you asked." Dimka says picks up a remote before turning on the tv. As soon as the screen turns on you see webcam video of him fucking you. Your face drains to pale white as you realize he\'s just recorded you having sex with him. Just as the shock is setting he makes his play, "If you don\'t do everything I say and come by here at least once a week to service me, I will make sure everyone in school gets a copy of this video. Oh, and your parents as well, just for good measure, whore."');
    scene.text('Your blood runs cold as the threat sinks in. You know what this would mean to your reputation, at school and at home with you mother.');
    scene.actions([
      { label: 'Run out of his house', goto: ['pav_residential', ''] },
      { label: 'Plead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Dimka\'s Room</b></center>');
    scene.img('images/pc/reactions/tears1.jpg');
    scene.text('"Please, you can\'t do this to me! Please delete it." You beg and plead with him, hoping to undo this mistake.');
    scene.text('Dimka laughs in your face. "I don\'t think so, slut. You\'re going to be my cock sock from now on, or else everyone will learn just how loose your dirty cunt really is." Tears begin to spill from your eyes as you realize you\'re trapped and powerless, destined to be a plaything for this monster as long as that video exists. Not knowing what else to do you mournfully gather your stuff and run out of his house, his laughter echoing in your ears as the tears stain your face.');
    scene.actions([
      { label: 'Run out of his house', goto: ['pav_residential', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'hallway2':
      enterHallway2(s, scene);
      break;
    case 'bathroom2':
      enterBathroom2(s, scene);
      break;
    case 'dimkaroom':
      enterDimkaroom(s, scene);
      break;
    case 'dimkaparents':
      enterDimkaparents(s, scene);
      break;
    case 'dimka_master_bathroom':
      enterDimkaMasterBathroom(s, scene);
      break;
    case 'guest':
      enterGuest(s, scene);
      break;
    case 'basement':
      enterBasement(s, scene);
      break;
    case 'kitchen1':
      enterKitchen1(s, scene);
      break;
    case 'kitchen2':
      enterKitchen2(s, scene);
      break;
    case 'study1':
      enterStudy1(s, scene);
      break;
    case 'study2':
      enterStudy2(s, scene);
      break;
    case 'study3':
      enterStudy3(s, scene);
      break;
    case 'study4':
      enterStudy4(s, scene);
      break;
    case 'dimka_chat':
      enterDimkaChat(s, scene);
      break;
    case 'dimka_makeout':
      enterDimkaMakeout(s, scene);
      break;
    case 'dimka_seduce':
      enterDimkaSeduce(s, scene);
      break;
    case 'dimka_makeout2':
      enterDimkaMakeout2(s, scene);
      break;
    case 'dimka_knees':
      enterDimkaKnees(s, scene);
      break;
    default:
      enterHome(s, scene);
      break;
  }
}

export const dimaHome: LocationDef = {
  name: 'dimaHome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  description: ['You walk up the path from the street to a relatively large, nice looking two-story house. You notice balconies on the front and side of the home. You exhale a deep breathe as you wonder what it would be like to live in such a nice place. You approach the front door and knock.'],
  enter: enter,
};
