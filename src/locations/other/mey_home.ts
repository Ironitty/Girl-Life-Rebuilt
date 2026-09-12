import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).day ?? 0) <= 25  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] > 40) {
    if (!(s as any).mey_vika) (s as any).mey_vika = {}; (s as any).mey_vika['mey_vika_qw'] = 40;
  }
  scene.build();
}

function enterDoor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'door');
  qspCall(s, 'schedule', 'A14', 'A15');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Meynold\'s house</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/mey_home.jpg');
  if (((s as any).mey_vika ?? 0)?.['key'] === 1) {
    scene.text('You open the door with your key and enter the house.');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.actions([
      { label: 'Enter', goto: ['mey_home', 'start'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 20  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 15)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 10))  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27) {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 27) {
        scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'next_meet'] }]);
      } else {
        scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea1.jpg');
        scene.text('You walk up to the Meynolds\' residence and ring the doorbell…');
        scene.text('After a short wait, you hear the lock click, and you see Katja\'s mother, Tamara and sister, Vicky standing by the door');
        // TODO-QSP: dynamic text: "Oh, hi, <<$pcs_nickname>>, welcome! Come in, make yourself at home."
        scene.text(`"Oh, hi, ${((s as any).pcs_nickname ?? 0)}, welcome! Come in, make yourself at home."`);
        if (((s as any).frost ?? 0) > 0) {
          (s as any).frost = 0;
        }
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
        ]);
      }
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 7  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
        scene.text('You walk up to the Meynolds residence and ring the doorbell…');
        scene.text('Katja opens the door and quickly drags you to her room.');
        scene.actions([
          { label: 'Go to Katjas room', handler: (st: GameState) => {
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
  }, goto: ['KatjaHomeTalk', ''] },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea0.jpg');
        scene.text('You walk up to the Meynolds\' residence and ring the doorbell…');
        scene.text('No one opens the door. It looks like nobody\'s home, or they are all asleep.');
        scene.text('Maybe you should try again at a more sociable time?');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'start');
  qspCall(s, 'schedule', 'A14', 'A15');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/corridor.jpg');
  scene.text('A large and bright hall, this "hallway" stretches for quite a bit. You\'ve never seen anything like this before! There is a mirror covering half of one of the walls. You see the kitchen from the hallway. There\'s a big oval dining table.');
  scene.text('There are stairs leading to the second floor. You can also see two doors where the signs say "Toilet" and "Bathroom".');
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 30  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Vicky'] === 15) {
    qspCall(s, 'mey_vika_events', 'case_gift');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((s as any).mey_vika ?? 0)?.['gym_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Vicky'] === 12) {
    qspCall(s, 'mey_vika_events', 'gym0');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((s as any).mey_vika ?? 0)?.['gym_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Vicky'] === 13) {
    qspCall(s, 'mey_vika_events', 'gym1');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 35  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).locat ?? 0)?.['Vicky'] === 15) {
    qspCall(s, 'mey_vika_events', 'learning0');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32) {
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).day ?? 0) > 25  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 40  &&  ((s as any).mey_tamara ?? 0)?.['qw_end'] === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 150) {
      scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'party0'] }]);
    }
    if (((s as any).week ?? 0) === 7  &&  (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 18)  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 41) {
      scene.text('<br><a href="exec: gt\'mey_tamara_events\',\'check_look\'">Tamara Meynold.</a> is waiting for you in the lobby.');
      return;
    }
    if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mey_vika ?? 0)?.['bath_qw'] === 1  &&  ((s as any).mey_vika ?? 0)?.['bath_qw_day'] !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).locat ?? 0)?.['Vicky'] === 9) {
      scene.actions([{ label: 'Continue', goto: ['mey_vika_events', 'bath_qw1'] }]);
    }
    if (((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20))  &&  ((s as any).mey_tamara ?? 0)?.['help_day'] !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Clean the house', handler: (st: GameState) => {
    if (!(s as any).mey_tamara) (s as any).mey_tamara = {}; (s as any).mey_tamara['help_day'] = ((s as any).daystart ?? 0);
    if (!(s as any).mey_tamara) (s as any).mey_tamara = {}; (s as any).mey_tamara['help_count'] = ((s as any).mey_tamara['help_count'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 50);
    qspCall(s, 'sweat', 'add', 3);
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'stat', '');
    if (((s as any).mey_vika ?? 0)?.['bath_qw'] === 0  &&  ((s as any).mey_vika ?? 0)?.['bath_qw_day'] !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'mey_vika_events', 'bath_qw0');
    } else {
      scene.text('<br>You take out a hefty vacuum cleaner from the closet, and it takes you about an hour to vacuum the house.');
      scene.actions([
        { label: 'Finish', goto: ['mey_home', 'start'] },
      ]);
    }
  } },
      ]);
    }
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 30) {
    scene.actions([{ label: 'Continue', goto: ['mey_home', 'guest_bedroom'] }]);
    scene.actions([
      { label: 'Guest room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  } },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0  &&  qspFunc(s, 'homes_properties', 'can_live_here')  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 30) {
    scene.actions([
      { label: 'Set this household as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['mey_home', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the house', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) !== 1  ||  ((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mey_home', 'start'] }]);
    }
  } },
    { label: 'Kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'kitchen'] },
    { label: 'Bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'bathroom'] },
    { label: 'Lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'lounge'] },
    { label: 'Katja\'s room', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) !== 1  ||  ((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['mey_home', 'katja_bedroom'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mey_home', 'start'] }]);
    }
  } },
    { label: 'Vicky\'s room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'vicky_bedroom'] },
    { label: 'Tamara Meynold\'s room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'tamara_bedroom'] },
    { label: 'Garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'garden'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'kitchen');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/kitchen.jpg');
  scene.text('The kitchen is vast and luxurious. It is decorated in a minimalist high-tech style. An oval dining room table stands in the middle of the room. The appliances are all hidden. As a result, the kitchen is sparkling clean.');
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 31) {
    scene.text('Sitting on the counter is a note and a <a href="exec:gs \'mey_home\', \'key\'">key</a>');
  }
  if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20))  &&  ((s as any).mey_tamara ?? 0)?.['help_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Cook for the whole family', handler: (st: GameState) => {
    if (!(s as any).mey_tamara) (s as any).mey_tamara = {}; (s as any).mey_tamara['help_day'] = ((s as any).daystart ?? 0);
    if (!(s as any).mey_tamara) (s as any).mey_tamara = {}; (s as any).mey_tamara['help_count'] = ((s as any).mey_tamara['help_count'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 50);
    qspCall(s, 'stat', '');
    scene.text('<br>You take out the food from the refrigerator and start cooking for the whole family. It takes you about an hour to finish.');
    scene.actions([
      { label: 'Finish', goto: ['mey_home', 'kitchen'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'core_library', 'kitchen', 'full');
  qspCall(s, 'library_functions', 'set_home_read_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
    { label: 'Eat a hearty meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'large_meal');
  } },
    { label: 'Eat a normal meal (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
    { label: 'Eat a light meal (0:10)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
  ]);
  scene.build();
}

function enterKey(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/meynolds/key.jpg');
  if (!(s as any).mey_vika) (s as any).mey_vika = {}; (s as any).mey_vika['key'] = 1;
  if (!(s as any).mey_vika) (s as any).mey_vika = {}; (s as any).mey_vika['mey_vika_qw'] = 32;
  // TODO-QSP: dynamic text: <<$pcs_nickname>>,
  scene.text(`${((s as any).pcs_nickname ?? 0)},`);
  scene.text('  Here is the key to the house, Our home is your home. You can also clean out what remains in the guest bedroom and make it all yours. just put all of Roma\'s things in some boxes and I\'ll put them in storage.');
  scene.text('~Tamara Meynold');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take Key', goto: ['mey_home', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'bathroom');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
  scene.text('A luxurious bathroom looks like the five-star hotel bathrooms you read about in magazines.');
  scene.text('Above the beautiful vanity and sink there is a huge <a href="exec:gt \'mirror\',\'start\'">mirror</a>.');
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterGuestBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'guest_bedroom');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Guest room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/guestroom.jpg');
  scene.text('It feels and looks like a standard room in a hotel.');
  scene.text('There is a <a href="exec:gt \'bed\', \'start\'">bed</a>, a small <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> (where you can choose outfits and organize your clothing), and a <a href="exec:gt \'stol\' ,\'start\'">desk</a>.');
  scene.text('A <a href="exec:gt \'mirror\', \'start\'">mirror</a> hangs on the wall near the front door.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free');
    scene.text('Your <a href="exec:gt \'komp\',\'start\'">computer</a> is on the desk.');
  }
  qspCall(s, 'exercise', 'start');
  qspCall(s, 'music_actions', 'start');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You hide your porn magazines under the mattress of your bed.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Snort the White Lady (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You snort some White Lady, feeling dizzy for a moment. After that, you feel fantastic and incredibly horny.');
    scene.actions([
      { label: 'Continue', goto: ['mey_home', 'guest_bedroom'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'wardrobe', 'default_clothing_options');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterLounge(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'lounge');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Lounge</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/hall.jpg');
  scene.text('Spacious room with a sofa and armchairs, on the wall, hangs a large <a href="exec:gt \'TV\',\'meyhome\'">Plasma TV</a>, located next to the bookcase, and on the opposite side is the fireplace. From the hall, there is access to a bright garden overgrown with grapes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
    { label: 'Garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'garden'] },
  ]);
  scene.build();
}

function enterKatjaBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'katja_bedroom');
  qspCall(s, 'schedule', 'A14');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Katja\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/katya_room.jpg');
  scene.text('Katja\'s room feels like someone is living there temporarily and will soon move out. However, the things in the room are in perfect order, depicting the feeling of a "non-residential premise".');
  scene.text('There are numerous flowers in the pots on the windowsill, pots hanging on the walls and even plants in pots on the floor, giving the room a greenhouse feel.');
  scene.text('There is a computer desk in one corner, opposite the bed. In another corner is a hidden wardrobe. Lastly, a well-hidden bookshelf can be seen in the room, but it is kinda hard to spot because of the wildly overgrown plants.');
  if (((s as any).locat ?? 0)?.['katja'] === 7) {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 1) {
      scene.actions([
        { label: 'Chat with Katja', goto: ['KatjaHomeTalk', ''] },
      ]);
    } else {
      scene.text('<font color=red>Your relationship with Katja is not good enough to just barge into her room, better leave as soon as possible.</font>');
    }
  } else {
    scene.text('Katja is not in her room');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterVickyBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'vicky_bedroom');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Vicky\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/vika_room.jpg');
  scene.text('Vicky\'s room is always a mess. It\'s clean, but everything is scattered all over the place. Soft toys are lying around in enormous quantities, and all the walls are plastered with posters of pop stars and film actors.');
  scene.text('There\'s a laptop on the table by the window. It accidentally brings a sense of orderliness. The stacks of magazines resemble music speakers. The room\'s centerpiece is the ginormous bed and a wardrobe next to it. There\'s a lone chair somewhere hidden under all the stuff.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterTamaraBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'tamara_bedroom');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Tamara\'s room</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/tamara_room.jpg');
  scene.text('If it was not for the bed in the corner, you would say Tamara Meynold\'s room resembles an office. There\'s a computer on a desk, a wardrobe, and a big but pretty modest bed. The room is relatively small and cramped. There are no decorations but one, a sword hanging on the wall. It\'s unclear what it\'s doing there.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
  ]);
  scene.build();
}

function enterGarden(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mey_home', 'garden');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'outdoors');
  scene.text('<center><b>Garden</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/courtyard.jpg');
  scene.text('The garden is relatively small for the house and overgrown. Most of the space is taken up by a small pool.');
  scene.text('A car belonging to Tamara Meynold is parked on the drive next to the garden.');
  if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) >= 30  &&  ((s as any).week ?? 0) < 6) {
    scene.text('<a href="exec:gs\'mey_tamara_events\',\'tamara\'">Miss Tamara</a> is here talking on her phone.');
  }
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Change back into your clothes', goto: ['changingroom', ''] },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).daystage ?? 0) < 5  &&  ((s as any).sunWeather ?? 0) === 1) {
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0  &&  (!((s as any).PSwim ?? 0))) {
      scene.actions([
        { label: 'Change into a bikini', goto: ['changingroom', ''] },
        { label: 'Strip off clothing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/meynolds/strippy.mp4');
    scene.text('You strip out of your clothes and feel the warmth on your naked skin.');
    scene.actions([
      { label: 'Continue', goto: ['mey_home', 'garden'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) > 30) {
      scene.actions([
        { label: 'Sunbathe naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 3);
    if (((s as any).pcs_sweat ?? 0) < 35) {
      qspCall(s, 'sweat', 'add', 5);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
      qspCall(s, 'outfit', 'strip_all');
    } else {
      qspCall(s, 'outfit', 'strip_all');
    }
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/meynolds/sunbathe_naked${Math.floor(Math.random() * 2) + 0}.jpg`);
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You strip out of your clothes until you are naked, then lie down next to the pool to sunbathe.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
        (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
        scene.text('You strip out of your clothes until you are naked, then put sunblock on your body and lie down next to the pool to sunbathe.');
      }
    }
    scene.actions([
      { label: 'Get Up', goto: ['mey_home', 'garden'] },
    ]);
  } },
      ]);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.actions([
        { label: 'Sunbathe (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pcs_sweat ?? 0) < 35) {
      qspCall(s, 'sweat', 'add', 5);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/meynolds/sunbathe${Math.floor(Math.random() * 2) + 0}.jpg`);
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You lie down to sunbathe.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
        (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
        scene.text('You put sunblock on your body and lie down next to the pool to sunbathe.');
      }
    }
    scene.actions([
      { label: 'Get Up', goto: ['mey_home', 'garden'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Swim (1:00)', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 10;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'mood', 'raise', 'large');
    if (((s as any).pcs_sweat ?? 0) > 10) {
      (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    }
    if (((s as any).pcs_stren ?? 0) < 40) {
      qspCall(s, 'exp_gain', 'stren', 1);
    }
    if (((s as any).pcs_vital ?? 0) < 40) {
      qspCall(s, 'exp_gain', 'vital', 1);
    }
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'stat', '');
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 0) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img(`images/pc/activities/swim/pool/swim_nude_${Math.floor(Math.random() * 10) + 1}.jpg`);
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
      } else {
        scene.img(`images/pc/activities/swim/pool/swim_bikini_${Math.floor(Math.random() * 6) + 1}.jpg`);
        if (((s as any).pcs_inhib ?? 0) < 50) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
        }
      }
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img(`images/pc/activities/swim/pool/swim_nude_preg_${Math.floor(Math.random() * 2) + 1}.jpg`);
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
      } else {
        scene.img(`images/pc/activities/swim/pool/swim_bikini_preg_${Math.floor(Math.random() * 4) + 1}.jpg`);
        if (((s as any).pcs_inhib ?? 0) < 50) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
        }
      }
    }
    scene.text('You swim in the pool. The water refreshes and invigorates you.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', goto: ['mey_home', 'garden'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'start'] },
    { label: 'Return to lounge', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['mey_home', 'lounge'] },
  ]);
  scene.build();
}

function enterMeyMorningVomit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
  scene.text('At that moment, a sharp knocking sounds on the door and Tamara\'s muffled voice comes through the fine wood.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Are you all right? I thought I heard you throwing up. Is eve...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}? Are you all right? I thought I heard you throwing up. Is everything okay?"`);
  if (((s as any).vomit ?? 0)?.['hangover'] === 1) {
    scene.actions([
      { label: 'Hungover', handler: (st: GameState) => {
    scene.text('"I\'m a little hungover," you moan, gripping the toilet bowl as another wave of nausea overtakes you.');
    scene.text('"Oh, dear! There\'s some pain medication in the cupboard if it would help you."');
    scene.text('"Thank you, Tamara…" you reply.');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Feeling a little sick', handler: (st: GameState) => {
    scene.text('"I think I might\'ve caught something," you moan, standing to flush the toilet.');
    scene.text('"Oh, dear! Should I take you to the doctor?"');
    scene.text('"No, thank you," you reply. "I think it\'s just a stomach bug or something. I\'ll be okay."');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Everything is fine', handler: (st: GameState) => {
    scene.text('"Everything is fine!" you lie hurriedly and rush to flush the toilet, not wanting Tamara worrying about you. "Just, uhh, had a bad cramp."');
    scene.text('"Oh, dear! Well, I hope it\'s gone now. Breakfast is on in a bit!"');
    scene.text('"Okay!" you holler back.');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMeyPregScare(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
  scene.text('At that moment, a sharp knocking sounds on the door, and you jump in place, shocked by the sudden intrusion. Tamara\'s muffled voice comes through the fine wood.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Are you all right? I thought I heard you throwing up. Is eve...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}? Are you all right? I thought I heard you throwing up. Is everything okay?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Everything is fine!', handler: (st: GameState) => {
    scene.text('"Everything is fine!" you say in a hurry, rushing to flush the toilet and turn on the tap to wash your mouth. "I\'m fine! Don\'t worry, Tamara. Everything is fine!"');
    scene.actions([
      { label: 'You hope', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
    scene.text('<i>I hope,</i> you gulp, desperately hoping this is a fluke and you\'re not pregnant.');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
    ]);
  } },
      { label: 'This is really bad', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
    scene.text('<i>This is really, really bad!</i> You think, breaking out in a sweat.');
    scene.text('You\'re pregnant! How could anything be fine!');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
    ]);
  } },
      { label: 'This is wonderful', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/hotel.room.best1.jpg');
    scene.text('<i>I\'m much more than fine,</i> you smile to yourself.');
    scene.text('You\'re pregnant, after all! So you\'re going to be a mother! This is terrific news!');
    scene.actions([
      { label: 'Continue', goto: ['home_activity', 'vomiting_exit'] },
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
    case 'door':
      enterDoor(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'key':
      enterKey(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'guest_bedroom':
      enterGuestBedroom(s, scene);
      break;
    case 'lounge':
      enterLounge(s, scene);
      break;
    case 'katja_bedroom':
      enterKatjaBedroom(s, scene);
      break;
    case 'vicky_bedroom':
      enterVickyBedroom(s, scene);
      break;
    case 'tamara_bedroom':
      enterTamaraBedroom(s, scene);
      break;
    case 'garden':
      enterGarden(s, scene);
      break;
    case 'mey_morning_vomit':
      enterMeyMorningVomit(s, scene);
      break;
    case 'mey_preg_scare':
      enterMeyPregScare(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mey_home: LocationDef = {
  name: 'mey_home',
  title: 'Meynold\'s house',
  region: 'other',
  locationType: 'secluded',
  locclass: 'bedroom',
  enter: enter,
};
