import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHousemates(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/housemates.jpg');
  scene.text('Floor 1 - You don\'t know anyone on this floor.');
  scene.text('Floor 2 - You don\'t know anyone on this floor.');
  if (((s as any).porn_studio ?? 0)?.['know_alli_home'] === 1  &&  ((s as any).film ?? 0) > 0) {
    scene.text('Floor 3 - Apartment 28: Aliana Smirnova');
  } else {
    scene.text('Floor 3 - You don\'t know anyone on this floor.');
  }
  if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] >= 1) {
    scene.text('Floor 4 - Apartment number 37: Tryndin Maximovich');
  } else {
    scene.text('Floor 4 - You don\'t know anyone on this floor.');
  }
  scene.text('Floor 5 - Apartment number 49: Your apartment');
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_1'] },
  ]);
  scene.build();
}

function enterFloor_1(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 6) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor1_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor1_event_time ?? 0) - 1440)) {
    (s as any).floor1_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor1_events', ((s as any).locArgs?.[1] ?? 0));
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'floor_1');
  qspCall(s, 'stat', '');
  scene.text('<center>First Floor</center>');
  scene.img('images/locations/city/residential/apartment/stairs/stairs1.jpg');
  scene.text('There is a short staircase down to the basement maintenance area and a short staircase up to the first floor, where there is a <a href="exec: gt \'city_apt_building\', \'housemates\'">list</a> of the people who live here on the wall. There is a series of mailboxes for each apartment, two halls going off to each wing of the building, and more stairs going up. The area is fairly clean and well maintained.');
  scene.text('The stairwell is empty.');
  scene.actions([
    { label: 'Leave the building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_residential', ''] },
    { label: 'Go up to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_1'
  } },
  ]);
  scene.build();
}

function enterFloor_2(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor2_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor2_event_time ?? 0) - 1440)) {
    (s as any).floor2_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor2_events');
  }
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'floor_2');
  qspCall(s, 'stat', '');
  scene.text('<center>Second Floor</center>');
  scene.img('images/locations/city/residential/apartment/stairs/stairs2.jpg');
  scene.text('The second floor stairwell is decently clean and fairly well maintained except for the occasional flickering or busted light, which is often not fixed for weeks.');
  scene.text('The stairwell is empty.');
  scene.actions([
    { label: 'Go down to the first floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'city_apt_building', 'floor_1', 'from_second_floor'
  } },
    { label: 'Go up to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'city_apt_building', 'floor_3', 'from_second_floor'
  } },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_2'
  } },
  ]);
  scene.build();
}

function enterFloor_3(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor3_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor3_event_time ?? 0) - 1440)) {
    (s as any).floor3_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor3_events', '<<$ARGS[1]>>');
  }
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'floor_3');
  qspCall(s, 'stat', '');
  scene.text('<center>Third Floor</center>');
  scene.img('images/locations/city/residential/apartment/stairs/stairs3.jpg');
  scene.text('The third floor stairwell is decently clean and fairly well maintained except for the occasional flickering or busted light, which is often not fixed for weeks.');
  scene.text('The stairwell is empty.');
  if (((s as any).porn_studio ?? 0)?.['know_alli_home'] === 1) {
    if (((s as any).film ?? 0) > 0) {
      scene.text('Your fellow porn actress Alli lives on this floor, but she never seems to be home. Knowing Alli, you\'re more likely to find her at the porn studio.');
    } else {
      scene.text('A girl called Aliana lives on this floor, but she never seems to be home. She did mention that she spends a lot of time working at the nearby porn studio.');
    }
  }
  scene.actions([
    { label: 'Go down to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    { label: 'Go up to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_3'
  } },
  ]);
  scene.build();
}

function enterFloor_4(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor4_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor4_event_time ?? 0) - 1440)) {
    (s as any).floor4_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor4_events');
  }
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'floor_4');
  qspCall(s, 'stat', '');
  scene.text('<center>Fourth Floor</center>');
  scene.img('images/locations/city/residential/apartment/stairs/stairs3.jpg');
  scene.text('The fourth floor stairwell is decently clean and fairly well maintained except for the occasional flickering or busted light, which is often not fixed for weeks.');
  scene.text('The stairwell is empty.');
  scene.actions([
    { label: 'Go down to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_3'] },
    { label: 'Go up to the fifth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_5'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_4'
  } },
  ]);
  scene.build();
}

function enterFloor_5(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor5_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor5_event_time ?? 0) - 1440)) {
    (s as any).floor5_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor5_events');
  }
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'floor_5');
  qspCall(s, 'stat', '');
  scene.text('<center>Fifth Floor</center>');
  scene.img('images/locations/city/residential/apartment/stairs/stairs3.jpg');
  scene.text('The fifth floor stairwell looks much like the other floors, but has a final set of stairs at the other end of the hall that go up to the roof.');
  scene.text('The stairwell is empty.');
  scene.actions([
    { label: 'Go down to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
    { label: 'Go up to the roof', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'roof'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_5'
  } },
    { label: 'Apartment 49: Your home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korr', ''] },
  ]);
  scene.build();
}

function enterRoof(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_apt_building', 'roof');
  qspCall(s, 'stat', '');
  scene.text('<center>Roof</center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/city/residential/apartment/roof/roofw.jpg');
    } else {
      scene.img('images/locations/city/residential/apartment/roof/roofwn.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/city/residential/apartment/roof/roof.jpg');
    } else {
      scene.img('images/locations/city/residential/apartment/roof/roofn.jpg');
    }
  }
  scene.text('<center>The roof is fairly flat, with the roof access door in a raised part in the middle of the roof. Along one of the walls is another door to some type of storage or maintenance area. There are several ventilation stacks dotted around the roof.</center>');
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Change back into your clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'restore', 'swim');
  }, goto: ['city_apt_building', 'roof'] },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).daystage ?? 0) < 4  &&  ((s as any).sunWeather ?? 0) === 1) {
    if ((!((s as any).PSwim ?? 0))) {
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
        scene.actions([
          { label: 'Change into a bikini', goto: ['changingroom', ''] },
        ]);
      }
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
    scene.img('images/locations/city/residential/apartment/roof/nude.jpg');
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You strip out of your clothes and lie down to sunbathe.');
    } else {
      (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
      scene.text('You strip out of your clothes, put sunblock on your body and lie down on the roof to sunbathe.');
    }
    scene.actions([
      { label: 'Get up', goto: ['city_apt_building', 'roof'] },
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
    scene.img('images/locations/city/residential/apartment/roof/bikini.jpg');
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You lie down to sunbathe.');
    } else {
      (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
      scene.text('You put sunblock on your body and lie down on the roof to sunbathe.');
    }
    scene.actions([
      { label: 'Get up', goto: ['city_apt_building', 'roof'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Go down to the fifth floor', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['city_apt_building', 'roof'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['city_apt_building', 'floor_5'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterLift(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'city_apt_building', 'check_lift_events', ((s as any).locArgs?.[1] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/lift.jpg');
  scene.text('The elevator in the apartment building was renovated at some point, but is still fairly old. It\'s in good working order though.');
  scene.actions([
    { label: 'Push button: Floor 1', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_1', 'from_lift'
  } },
    { label: 'Push button: Floor 2', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_2', 'from_lift'
  } },
    { label: 'Push button: Floor 3', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_3', 'from_lift'
  } },
    { label: 'Push button: Floor 4', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_4', 'from_lift'
  } },
    { label: 'Push button: Floor 5', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_5', 'from_lift'
  } },
  ]);
  scene.build();
}

function enterCheckLiftEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 31) + 0) >= 7) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gt 'city_apt_building', 'lift_event_<<rand(1, 7)>>', $ARGS[1]
  scene.build();
}

function enterLiftEvent_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator1.jpg');
  scene.text('When the elevator door opens, you\'re surprised to see a middle-aged naked woman handcuffed to the lift railing. She looks at you in panic, but you\'re too baffled to do anything until she says "Can you please push floor three?"');
  scene.text('You nod, reach in and push the button to go up to floor three. The doors close and the elevator moves away from you.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator2.jpg');
  scene.text('When the elevator door opens, you see a woman dressed in lingerie standing inside, her breasts hanging out of her bra with her coat pulled back to show off her body. At first her eyes are closed, but when she opens them, she looks at you in panic and frantically presses all of the elevator buttons. You\'re too baffled to do anything as the door closes.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator4_\' + rand(1, 2) + \'.jpg');
  scene.text('When the elevator door opens, you see a naked woman standing in it. She looks at you in panic and begins frantically pressing all of the elevator buttons. You\'re too baffled to do anything as the door closes.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator3_\' + rand(1, 2) + \'.jpg');
  scene.text('When the elevator door opens, you see a young man standing it with his limp dick hanging out. He has a huge smile on his face.');
  if (((s as any).pcs_hotcat ?? 0) < 4) {
    scene.text('His smile fades as he looks you over and gives you a disgusted look. "Oh it\'s you… I was hoping for a hot bitch," he whines before reaching over to push one of the elevator buttons. You\'re too baffled and insulted to do anything as the door closes.');
  } else {
    scene.text('He looks you over. "You\'ll do. Get in here and go down, so I can go up." He then laughs at his own joke.');
    scene.text('You\'re too baffled to do anything and just stand there staring at him before he speaks up. "Well come on, it isn\'t going to suck itself."');
    scene.text('When you still don\'t move, he frowns and pushes one of the buttons. "Whatever, a fugly chick like you should be thankful I even offered!" You just stand there as the door closes and the elevator moves away from you.');
    scene.text('He looks you over and his smile turns into a grin, obviously liking what he sees. "Get in here and go down, so I can go up." He then laughs at his own joke.');
    scene.text('You\'re too baffled to do anything and just stand there staring at him before he speaks up. "Come on, don\'t be shy! Get that tight little body over here and wrap those beautiful lips around my cock."');
    scene.text('When you still don\'t move, he frowns and pushes one of the buttons. "Whatever!" You stand there as the door closes and the elevator moves away from you.');
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator5.jpg');
  scene.text('When the elevator door opens, you see a woman standing in it. She looks at you and smiles, then pulls her top down to expose her breasts, followed by pulling up her skirt and showing off her neatly trimmed pussy, before she reaches across and pushes one of the buttons. You\'re too baffled to do anything as the door closes.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator6.jpg');
  scene.text('When the elevator door opens, you see the couple from your floor inside. You\'ve seen them around the building before. They are partially undressed and making out, seemingly looking like they\'re about to have sex.');
  if (((s as any).pcs_hotcat ?? 0) < 6) {
    scene.text('She looks at you and laughs slightly, then reaches over to push one of the elevator buttons. You\'re too baffled to do anything as the door closes.');
  } else {
    scene.text('She looks at you and gives you an inviting smile, then motions at you with her hand. "You can join us if you want."');
    scene.text('Her talking makes him finally look over at you and he smiles as well. "Yeah, come join us."');
    scene.text('You\'re too baffled to do anything and just stand there staring at them before he speaks up. "Sorry, but we\'re full in here." This makes her laugh as he pushes one of the buttons and the doors close.');
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/elevator7.jpg');
  scene.text('When the elevator door opens, you see two naked women standing in it. They look at you and then each other before laughing as one of them quickly reaches across and pushes one of the buttons. You\'re too baffled to do anything as the door closes.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterPodObjava(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/pod_ob\' + rand(1, 2) + \'.jpg');
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_1'] },
  ]);
  scene.build();
}

function enterFloor1Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'city_apt_building', 'floor1_event_1', $ARGS[1]
  scene.build();
}

function enterFloor1Event_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor1_gop.jpg');
  scene.text('A large group of gopniks are blocking the stairs up to the first floor. You\'ve seen several of them in the building and most of the rest around the neighborhood. You don\'t think most of them live here. You know gopniks can be dangerous, especially in large groups. You could try and walk past them, or just leave.');
  if (((s as any).locArgs?.[1] ?? 0) === 'from_second_floor') {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stairs/lift.jpg');
    scene.text('You get back in the elevator and decide to take it to another floor.');
    scene.actions([
      { label: 'Push button: Floor 2', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_2', 'from_lift'
  } },
      { label: 'Push button: Floor 3', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_3', 'from_lift'
  } },
      { label: 'Push button: Floor 4', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_4', 'from_lift'
  } },
      { label: 'Push button: Floor 5', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'floor_5', 'from_lift'
  } },
    ]);
  } },
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_residential', ''] },
    ]);
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/stairs/event/floor1_gop.jpg');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'stat', '');
      scene.text('You decide to push on and walk past them. As you carefully step around them, you can\'t help but brush up against them. Several of them give you dirty looks and others make comments.');
      scene.text('"Watch where you\'re stepping, you fat cow!"');
      scene.text('"Anyone else smell rotten fish?"');
      scene.text('At one point, you think one of them might do something, but you make it past them unharmed. However, you\'re a little upset at the comments made towards you.');
    } else {
      scene.text('You decide to push on and walk past them. As you carefully step around them, you can\'t help but brush up against them. Several of them make comments, soon followed by them groping you.');
      scene.text('"Hey sweetheart, have a seat and drink with us."');
      scene.text('"Damn girl you look fine. Take a seat and take a load off, maybe help us get a load off!"');
      scene.text('"Don\'t be shy beautiful, we won\'t bite. Unless you ask us nicely."');
      scene.text('Several even ruder comments are said, followed by them laughing as they start pawing at your legs and squeezing your ass. A few reach up and squeeze your breasts and one even rubs your crotch. You do your best to fend off the groping hands but there\'s just too many of them.');
      scene.text('You feel yourself starting to panic, thinking they might not stop at just groping. Thankfully, when you finally get past them, they stay seated.');
      qspCall(s, 'arousal', 'foreplay', 3, 'humiliation');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Leave the building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_residential', ''] },
      { label: 'Go up to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
      { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'city_apt_building', 'lift', 'floor_1'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFloor2Events(s: GameState, scene: SceneBuilder): void {
  (s as any).floor2 = Math.floor(Math.random() * 15) + 1;
  if (((s as any).floor2 ?? 0) < 3) {
    // TODO-QSP: gt 'city_apt_building', 'floor2_event_1', $ARGS[1]
  } else {
    // TODO-QSP: gt 'city_apt_building', 'floor2_event_2', $ARGS[1]
    if (((s as any).floor2 ?? 0) === 6) {
      // TODO-QSP: gt 'city_apt_building', 'floor2_event_3', $ARGS[1]
    } else {
      // TODO-QSP: gt 'city_apt_building', 'floor2_event_4', $ARGS[1]
      if (((s as any).floor2 ?? 0) < 12) {
        // TODO-QSP: gt 'city_apt_building', 'floor2_event_5', $ARGS[1]
      } else {
        // TODO-QSP: gt 'city_apt_building', 'floor2_event_6', $ARGS[1]
        if (((s as any).floor2 ?? 0) === 13) {
          // TODO-QSP: gt 'city_apt_building', 'floor2_event_7', $ARGS[1]
        } else {
          // TODO-QSP: gt 'city_apt_building', 'floor2_event_8', $ARGS[1]
          // TODO-QSP: gt 'city_apt_building', 'floor2_event_9', $ARGS[1]
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'housemates':
      enterHousemates(s, scene);
      break;
    case 'floor_1':
      enterFloor_1(s, scene);
      break;
    case 'floor_2':
      enterFloor_2(s, scene);
      break;
    case 'floor_3':
      enterFloor_3(s, scene);
      break;
    case 'floor_4':
      enterFloor_4(s, scene);
      break;
    case 'floor_5':
      enterFloor_5(s, scene);
      break;
    case 'roof':
      enterRoof(s, scene);
      break;
    case 'lift':
      enterLift(s, scene);
      break;
    case 'check_lift_events':
      enterCheckLiftEvents(s, scene);
      break;
    case 'lift_event_1':
      enterLiftEvent_1(s, scene);
      break;
    case 'lift_event_2':
      enterLiftEvent_2(s, scene);
      break;
    case 'lift_event_3':
      enterLiftEvent_3(s, scene);
      break;
    case 'lift_event_4':
      enterLiftEvent_4(s, scene);
      break;
    case 'lift_event_5':
      enterLiftEvent_5(s, scene);
      break;
    case 'lift_event_6':
      enterLiftEvent_6(s, scene);
      break;
    case 'lift_event_7':
      enterLiftEvent_7(s, scene);
      break;
    case 'pod_objava':
      enterPodObjava(s, scene);
      break;
    case 'floor1_events':
      enterFloor1Events(s, scene);
      break;
    case 'floor1_event_1':
      enterFloor1Event_1(s, scene);
      break;
    case 'floor2_events':
      enterFloor2Events(s, scene);
      break;
    default:
      enterHousemates(s, scene);
      break;
  }
}

export const city_apt_building: LocationDef = {
  name: 'city_apt_building',
  title: 'Floor 1 - You don\'t know anyone on this floor.',
  region: 'city',
  locationType: 'public_outdoors',
  description: ['Floor 1 - You don\'t know anyone on this floor.'],
  enter: enter,
};
