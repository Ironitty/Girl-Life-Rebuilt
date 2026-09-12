import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_residential', ''] },
    { label: 'Go up to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_1\''] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down to the first floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_1', 'from_second_floor'] },
    { label: 'Go up to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_3', 'from_second_floor'] },
    { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_2\''] },
  ]);
  scene.build();
}

function enterFloor_3(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).totminut ?? 0) > 60 + ((s as any).floor3_event_time ?? 0))  ||  (((s as any).totminut ?? 0) < ((s as any).floor3_event_time ?? 0) - 1440)) {
    (s as any).floor3_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'city_apt_building', 'floor3_events', '' + qspUntranslated(s, "ARGS[1]>", { location: "city_apt_building" }) + '');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    { label: 'Go up to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
    { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_3\''] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_3'] },
    { label: 'Go up to the fifth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_5'] },
    { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_4\''] },
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Go down to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
    { label: 'Go up to the roof', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'roof'] },
    { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_5\''] },
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
      if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
        (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
        scene.text('You strip out of your clothes, put sunblock on your body and lie down on the roof to sunbathe.');
      }
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
      if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
        (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
        scene.text('You put sunblock on your body and lie down on the roof to sunbathe.');
      }
    }
    scene.actions([
      { label: 'Get up', goto: ['city_apt_building', 'roof'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Push button: Floor 1', goto: ['city_apt_building', 'floor_1', '\'from_lift\''] },
    { label: 'Push button: Floor 2', goto: ['city_apt_building', 'floor_2', '\'from_lift\''] },
    { label: 'Push button: Floor 3', goto: ['city_apt_building', 'floor_3', '\'from_lift\''] },
    { label: 'Push button: Floor 4', goto: ['city_apt_building', 'floor_4', '\'from_lift\''] },
    { label: 'Push button: Floor 5', goto: ['city_apt_building', 'floor_5', '\'from_lift\''] },
  ]);
  scene.build();
}

function enterCheckLiftEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 31) + 0) >= 7) {
    // TODO-QSP: exit
  }
  // TODO-QSP: gt 'city_apt_building', 'lift_event_<<rand(1, 7)>>', $ARGS[1]
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('He looks you over. "You\'ll do. Get in here and go down, so I can go up." He then laughs at his own joke.');
      scene.text('You\'re too baffled to do anything and just stand there staring at him before he speaks up. "Well come on, it isn\'t going to suck itself."');
      scene.text('When you still don\'t move, he frowns and pushes one of the buttons. "Whatever, a fugly chick like you should be thankful I even offered!" You just stand there as the door closes and the elevator moves away from you.');
    } else {
      scene.text('He looks you over and his smile turns into a grin, obviously liking what he sees. "Get in here and go down, so I can go up." He then laughs at his own joke.');
      scene.text('You\'re too baffled to do anything and just stand there staring at him before he speaks up. "Come on, don\'t be shy! Get that tight little body over here and wrap those beautiful lips around my cock."');
      scene.text('When you still don\'t move, he frowns and pushes one of the buttons. "Whatever!" You stand there as the door closes and the elevator moves away from you.');
    }
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterPodObjava(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/pod_ob\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_1'] },
  ]);
  scene.build();
}

function enterFloor1Events(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'city_apt_building', 'floor1_event_1', $ARGS[1]
  // TODO-QSP: end
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
    if (((s as any).locArgs?.[1] ?? 0) === 'from_lift') {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stairs/lift.jpg');
    scene.text('You get back in the elevator and decide to take it to another floor.');
    scene.actions([
      { label: 'Push button: Floor 2', goto: ['city_apt_building', 'floor_2', '\'from_lift\''] },
      { label: 'Push button: Floor 3', goto: ['city_apt_building', 'floor_3', '\'from_lift\''] },
      { label: 'Push button: Floor 4', goto: ['city_apt_building', 'floor_4', '\'from_lift\''] },
      { label: 'Push button: Floor 5', goto: ['city_apt_building', 'floor_5', '\'from_lift\''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_residential', ''] },
      ]);
    }
  }
  // TODO-QSP: end
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
      { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_1\''] },
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
    if (((s as any).floor2 ?? 0) < 6) {
      // TODO-QSP: gt 'city_apt_building', 'floor2_event_2', $ARGS[1]
    } else {
      if (((s as any).floor2 ?? 0) === 6) {
        // TODO-QSP: gt 'city_apt_building', 'floor2_event_3', $ARGS[1]
      } else {
        if (((s as any).floor2 ?? 0) < 10) {
          // TODO-QSP: gt 'city_apt_building', 'floor2_event_4', $ARGS[1]
        } else {
          if (((s as any).floor2 ?? 0) < 12) {
            // TODO-QSP: gt 'city_apt_building', 'floor2_event_5', $ARGS[1]
          } else {
            if (((s as any).floor2 ?? 0) === 12) {
              // TODO-QSP: gt 'city_apt_building', 'floor2_event_6', $ARGS[1]
            } else {
              if (((s as any).floor2 ?? 0) === 13) {
                // TODO-QSP: gt 'city_apt_building', 'floor2_event_7', $ARGS[1]
              } else {
                if (((s as any).floor2 ?? 0) === 14) {
                  // TODO-QSP: gt 'city_apt_building', 'floor2_event_8', $ARGS[1]
                } else {
                  // TODO-QSP: gt 'city_apt_building', 'floor2_event_9', $ARGS[1]
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

function enterFloor2Event_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_clothed.jpg');
  scene.text('You see one of your neighbors, a middle aged woman, about to head down the stairs. She gives you a friendly smile and you exchange hellos before you both go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_drunk.jpg');
  scene.text('There are a couple of young girls sitting on the steps who both look pretty wasted. Just as you start to walk past them, one of them suddenly throws up. Her friend quickly scoots away from her and looks like she\'s about to throw up as well. The smell of the vomit makes you feel a little ill yourself. You quickly make your way past them, being careful not to step in the vomit.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_flash.jpg');
  scene.text('A young woman stops on the stairs to the third floor in front of a young man. She pulls down her yoga pants and bends forward slightly with her legs spread. She gives the young man a nice view of her naked ass and pussy, and he stops dead in his tracks when confronted with the view. The girl then giggles, pulls up her pants and runs up the stairs. The young man takes off after her, gaining on her quickly. They soon disappear on the next floor up and shortly afterwards you hear her squealing in delight.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_girl.jpg');
  scene.text('You see a young woman about your age leaning against the wall. She\'s dressed in a tight, partially see-through, half-shirt that shows off her flat stomach, a very short skirt and mid calf high-heeled boots. She looks at you as you approach and gives you a friendly smile. You exchange hellos before you go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_gop.jpg');
  scene.text('Sitting on the stairs are two young gopnik boys with a gopnik girl between them. They\'re all drinking from bottles and look a little drunk. As you squeeze your way past them, they give you dirty looks, but don\'t say anything.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_naked.jpg');
  scene.text('You see a woman walking down the hall to the stairwell landing, completely naked. When she sees you, she smiles. "Hello!" she says, as if everything was normal. You greet her in return and try not to stare. She walks right past you and down the hallway of the other wing of the building, entering one of the apartments down there.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_nudedoor.jpg');
  scene.text('You see a woman standing next to an apartment door naked from the waist up, having been in the process of pulling her dress down while a man watched. When she sees you, she panics and quickly pulls her dress back up before running into the apartment. The young man laughs, looks at you and winks before following her inside.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor2_up.jpg');
  scene.text('As you get to the stairwell landing, you see a woman walking up to the third floor. You notice that her skirt is very short and that she isn\'t wearing any panties. As she nears the top of the stairs, you get a clear view of her pussy. You\'re unsure if she was aware that she had herself on display or not.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor2Event_9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor2_bj.jpg');
  scene.text('Sitting on the stairs is a naked man and a woman dressed in see through lingerie. She\'s squatting in front of him with her legs spread, showing off her pussy while she sucks his dick. He looks at you as you approach and gives you a huge smile. He backs up against the wall as best as he can and pulls her over, giving you just enough room to squeeze past them. She never does stop giving him a blowjob, even as you brush past her.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_2'] },
  ]);
  scene.build();
}

function enterFloor3Events(s: GameState, scene: SceneBuilder): void {
  (s as any).floor3 = Math.floor(Math.random() * 19) + 1;
  if (((s as any).floor3 ?? 0) < 3) {
    // TODO-QSP: gt 'city_apt_building', 'floor3_event_1', $ARGS[1]
  } else {
    if (((s as any).floor3 ?? 0) < 5) {
      // TODO-QSP: gt 'city_apt_building', 'floor3_event_2', $ARGS[1]
    } else {
      if (((s as any).floor3 ?? 0) === 5) {
        // TODO-QSP: gt 'city_apt_building', 'floor3_event_3', $ARGS[1]
      } else {
        if (((s as any).floor3 ?? 0) < 9) {
          // TODO-QSP: gt 'city_apt_building', 'floor3_event_4', $ARGS[1]
        } else {
          if (((s as any).floor3 ?? 0) < 12) {
            // TODO-QSP: gt 'city_apt_building', 'floor3_event_5', $ARGS[1]
          } else {
            if (((s as any).floor3 ?? 0) === 12) {
              // TODO-QSP: gt 'city_apt_building', 'floor3_event_6', $ARGS[1]
            } else {
              if (((s as any).floor3 ?? 0) === 13) {
                // TODO-QSP: gt 'city_apt_building', 'floor3_event_7', $ARGS[1]
              } else {
                if (((s as any).floor3 ?? 0) === 14) {
                  // TODO-QSP: gt 'city_apt_building', 'floor3_event_8', $ARGS[1]
                } else {
                  if (((s as any).floor3 ?? 0) < 17) {
                    // TODO-QSP: gt 'city_apt_building', 'floor3_event_9', $ARGS[1]
                  } else {
                    if (((s as any).floor3 ?? 0) === 17) {
                      // TODO-QSP: gt 'city_apt_building', 'floor3_event_10', $ARGS[1]
                    } else {
                      if (((s as any).floor3 ?? 0) === 18) {
                        // TODO-QSP: gt 'city_apt_building', 'floor3_event_11', $ARGS[1]
                      } else {
                        if (((s as any).floor3 ?? 0) === 19  &&  (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 2)  &&  ((s as any).porn_studio ?? 0)?.['know_alli_home'] === 0) {
                          // TODO-QSP: gt 'city_apt_building', 'floor3_event_12', $ARGS[1]
                        }
                      }
                    }
                  }
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

function enterFloor3Event_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_clothed.jpg');
  scene.text('You see one of your neighbors, a young woman about your age dressed in an alternative style. She gives you a friendly smile and a wave and you exchange hellos before you go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_drunk.jpg');
  scene.text('A young woman appears to be passed out on the landing, her belongings sitting on the stairs near her. You have no idea how long she\'s been here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore her and continue', goto: ['city_apt_building', 'floor_3'] },
    { label: 'Help her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stairs/event/floor3_drunk.jpg');
    scene.text('You stop to check on her. She seems fine, but you can smell the alcohol on her before you even get to close to her. You shake her, but she doesn\'t wake up, so you squat down next to her, grab her shoulders, and shake her really hard. It takes a few minutes, but she finally wakes up, her breath having a near overwhelming smell of alcohol on it. She mutters something about five more minutes, but you finally manage to get her up and on her feet. You find out she lives on the next floor up and help her upstairs to her apartment. She tries to use her keys to open the door, but fails and drops them.');
    scene.text('Before you can pick up the keys, the door opens. An older woman takes one look at the drunk woman and start ranting at her. She takes the young woman from you and thanks you for helping her. Once she has retrieved the keys from the floor and helped the young woman inside, she closes the door. You can hear her berating the younger woman through the door.');
    scene.actions([
      { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFloor3Event_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_flash.jpg');
  scene.text('An older woman stops on the stairs to the fourth floor in front of an older man. She pulls her skirt up, briefly exposing her pussy to him before she drops her skirt back in place and he walks up the few steps to her and gives her a kiss. After they finish kissing, they walk down the stairs hand-in-hand.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_girls.jpg');
  scene.text('Two young girls sit on the stairs filling bottles of juice with vodka. They ignore you as you walk past them, intent on their task at hand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_gop.jpg');
  scene.text('In the stairwell between the floors is a large group of gopniks. You\'ve seen several of them in the building, and most of the rest around the neighborhood. You don\'t think most of them live here. You know gopniks can be dangerous especially in large groups. You could try and walk past them, or just leave.');
  if (((s as any).locArgs?.[1] ?? 0) === 'from_second_floor') {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'from_lift') {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stairs/lift.jpg');
    scene.text('<center>You get back in the elevator and decide to take it to another floor.');
    scene.actions([
      { label: 'Push button: Floor 1', goto: ['city_apt_building', 'floor_1', '\'from_lift\''] },
      { label: 'Push button: Floor 2', goto: ['city_apt_building', 'floor_2', '\'from_lift\''] },
      { label: 'Push button: Floor 4', goto: ['city_apt_building', 'floor_4', '\'from_lift\''] },
      { label: 'Push button: Floor 5', goto: ['city_apt_building', 'floor_5', '\'from_lift\''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/stairs/event/floor3_gop.jpg');
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
      { label: 'Go down to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_2'] },
      { label: 'Go up to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_apt_building', 'floor_4'] },
      { label: 'Take the elevator', goto: ['city_apt_building', 'lift', '\'floor_3\''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFloor3Event_6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_naked.jpg');
  scene.text('You see a woman walking down the stairs, completely naked. When she sees you she smiles. "Hello!" she says as if everything was normal. You greet her in return and try not to stare. She walks right past you and down one of the hallways, entering one of the apartments down there.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_nudedoor.jpg');
  if ((!((s as any).meet_nudedoor_woman3 ?? 0))) {
    (s as any).meet_nudedoor_woman3 = 1;
    scene.text('As you\'re about to walk by one of the apartments, the door suddenly opens. A young, nude woman is standing there, wearing only a smile. She laughs when she sees you. "Sorry, I thought you were someone else."');
    scene.text('You can\'t help but smile back at her. "It\'s okay, I don\'t mind."');
    scene.text('She laughs again. "Well, nice meeting you," she says before closing the door.');
  } else {
    scene.text('As you\'re about to walk by one of the apartments, the door suddenly opens. A young, nude woman is standing there wearing only a smile. She laughs when she sees you again. "Sorry again, I thought you were my boyfriend coming home."');
    scene.text('You can\'t help but smile back at her. "Not a problem. He\'s a lucky man to have you greet him in such a way."');
    scene.text('She laughs at that. "Thanks! Well, nice seeing you," she says before closing the door.');
  }
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_up.jpg');
  scene.text('As you get to the stairwell landing, you see a woman walking up to the fourth floor with a man following her. As she nears the top of the stairs, she lifts her skirt and shows off her naked ass. The guy laughs and lunges for her, but she giggles and takes off up the stairs, shortly followed by the sound of a door opening and closing.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor3_ir.jpg');
  scene.text('You see a middle-aged woman making out with a younger, black man. Her hand is on the doorknob of a slightly opened apartment door, which you assume is hers. They seem completely oblivious to you as you walk past them.');
  qspCall(s, 'arousal', 'erotic', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor3_bj.jpg');
  scene.text('Down one of the hallways, leading to more apartments on this floor, you see an older woman on her knees in front of a man. She is dressed in a white teddy, a collar around her neck with a leash attached to it that the man is holding as she sucks his dick. The man glances your way and smiles at you as you continue on your way.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor3_fuck.jpg');
  scene.text('As you approach the stairs, you hear moaning and grunting, the obvious sounds of people having sex. A man and woman, by the sounds of the moans. As you get to the stairs, you see a woman in the stairwell on her back, but you can\'t really make her out, other than her bare legs spread wide. A man is thrusting between her legs with his pants pulled down.');
  scene.text('Another man appears to be passed out, or sleeping, next to the two having sex. You\'re unsure what the story is here, but you figure it\'s likely a good one and that the sleeping man will likely not enjoy the story as much as everyone else, if he ever learns of it.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor3Event_12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (!(s as any).porn_studio) (s as any).porn_studio = {}; (s as any).porn_studio['know_alli_home'] = 1;
  scene.img('images/locations/city/residential/apartment/stairs/event/floor3_nudedoor.jpg');
  if (((s as any).film ?? 0) > 0) {
    scene.text('As you get to the stairwell landing, the door of one of the apartments suddenly opens and you see a naked Alli standing there, her perky breasts and neatly trimmed bush on full display.');
    scene.text('"Alli?!" you ask in bewilderment and she giggles.');
    scene.text('"Oh hey there. Sorry, I thought you were someone else. I didn\'t know you lived here?"');
    scene.text('"Yeah, I live on the fifth floor. Apartment 49," you reply.');
    scene.text('"I would say I live here, but I spend most of my time at work and other places, so I only come here to crash," she smiles.');
    scene.text('At this point, an older man appears on the stairs and Alli grins. "Sorry, I need to go, but I\'ll see you at work?"');
    scene.text('You just nod and the man smacks her ass as he enters her apartment and she closes the door.');
    qspCall(s, 'arousal', 'voyeur', 3);
    qspCall(s, 'arousal', 'end');
  } else {
    scene.text('As you get to the stairwell landing, the door of one of the apartments suddenly opens and you see a naked girl standing there, her perky breasts and neatly trimmed bush on full display.');
    scene.text('"Oh hey there. Sorry, I thought you were someone else. I\'m Alli," she smiles as she casually reaches out to shake your hand. "Are you one of my neighbours?"');
    // TODO-QSP: dynamic text: "Yeah, I'm <<$pcs_nickname>>. I live up on the fifth floor."
    scene.text(`"Yeah, I'm ${((s as any).pcs_nickname ?? 0)}. I live up on the fifth floor."`);
    scene.text('"Cool," she replies. "I\'d say I live here, but I spend most of my time working at the porn studio and doing other stuff, so I only come here to crash," she smiles.');
    scene.text('"You\'re a porn star?" you ask and she smiles.');
    scene.text('"I wouldn\'t say a star since I only just started, but yes, I do work in porn and I don\'t care what anyone thinks. I signed up at the local studio on my 18th birthday and never looked back."');
    if ((!((s as any).pornstudio ?? 0))) {
      (s as any).pornstudio = 1;
      scene.text('"There\'s a porn studio in the city?" you ask.');
      scene.text('"Yeah, it\'s in one of the warehouses in the redlight district. You should swing by sometime and sign up."');
      scene.text('She gives you directions to the studio before she excuses herself and closes the door, leaving you to continue on your way.');
    } else {
      scene.text('"I heard there was a porn studio somewhere in the industrial district," you reply.');
      scene.text('"Yeah, it\'s in one of the warehouses in the redlight district. You should swing by sometime and sign up."');
      scene.text('You just nod your head and she smiles before excusing herself and closing the door, leaving you to continue on your way.');
      qspCall(s, 'arousal', 'voyeur', 3);
      qspCall(s, 'arousal', 'end');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor4Events(s: GameState, scene: SceneBuilder): void {
  (s as any).floor4 = Math.floor(Math.random() * 21) + 1;
  if (((s as any).floor4 ?? 0) < 3) {
    // TODO-QSP: gt 'city_apt_building', 'floor4_event_1', $ARGS[1]
  } else {
    if (((s as any).floor4 ?? 0) < 6) {
      // TODO-QSP: gt 'city_apt_building', 'floor4_event_2', $ARGS[1]
    } else {
      if (((s as any).floor4 ?? 0) === 6) {
        // TODO-QSP: gt 'city_apt_building', 'floor4_event_3', $ARGS[1]
      } else {
        if (((s as any).floor4 ?? 0) < 10) {
          // TODO-QSP: gt 'city_apt_building', 'floor4_event_4', $ARGS[1]
        } else {
          if (((s as any).floor4 ?? 0) < 13) {
            // TODO-QSP: gt 'city_apt_building', 'floor4_event_5', $ARGS[1]
          } else {
            if (((s as any).floor4 ?? 0) === 13) {
              // TODO-QSP: gt 'city_apt_building', 'floor4_event_6', $ARGS[1]
            } else {
              if (((s as any).floor4 ?? 0) < 17) {
                // TODO-QSP: gt 'city_apt_building', 'floor4_event_7', $ARGS[1]
              } else {
                if (((s as any).floor4 ?? 0) === 17) {
                  // TODO-QSP: gt 'city_apt_building', 'floor4_event_8', $ARGS[1]
                } else {
                  if (((s as any).floor4 ?? 0) === 18) {
                    // TODO-QSP: gt 'city_apt_building', 'floor4_event_9', $ARGS[1]
                  } else {
                    if (((s as any).floor4 ?? 0) === 19) {
                      // TODO-QSP: gt 'city_apt_building', 'floor4_event_10', $ARGS[1]
                    } else {
                      if (((s as any).floor4 ?? 0) === 20) {
                        // TODO-QSP: gt 'city_apt_building', 'floor4_event_11', $ARGS[1]
                      } else {
                        if (((s as any).floor4 ?? 0) === 21) {
                          // TODO-QSP: gt 'city_apt_building', 'floor4_event_12', $ARGS[1]
                        } else {
                          if (((s as any).floor4 ?? 0) < 24  &&  (((s as any).hour ?? 0) >= 19  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10))) {
                            // TODO-QSP: gt 'city_apt_building', 'floor4_event_13', $ARGS[1]
                          }
                        }
                      }
                    }
                  }
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

function enterFloor4Event_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_clothed.jpg');
  scene.text('You see one of your neighbors, a young woman about your age, sitting on the steps. She scoots over when you approach to allow you to walk past her. She gives you a friendly smile and a wave and you exchange hellos before you go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_drunk.jpg');
  scene.text('A young woman appears to be passed out on the stairs, her belongings sitting on the stairs near her. You have no idea how long she\'s been here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore her and continue', goto: ['city_apt_building', 'floor_4'] },
    { label: 'Help her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stairs/event/floor4_drunk.jpg');
    scene.text('You stop to check on her. She seems fine, but you can smell the alcohol on her before you even get close to her. You shake her, but she doesn\'t wake up, so you squat down next to her, grab her shoulders, and shake her really hard. It takes a few minutes, but she finally wakes up, her breath having a near overwhelming smell of alcohol on it. She mutters something about five more minutes, but you finally manage to get her up and on her feet. You find out she lives on this floor and you help her to her apartment. She tries to use her keys to open the door, but fails and drops them.');
    scene.text('Before you can pick up the keys, the door opens. An older woman takes one look at the drunk woman and starts ranting at her. She takes the young woman from you and thanks you for helping her. Once she has retrieved the keys from the floor and helped the young woman inside, she closes the door. You can hear her berating the younger woman through the door.');
    scene.actions([
      { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFloor4Event_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_flash.jpg');
  scene.text('A middle-aged woman stops on the stairs to the fifth floor in front of a man around her age. She pulls her skirt up, exposing her pussy to the man. She drops the skirt back in place and he walks up the few steps to her and gives her a kiss. After they finish kissing, they walk down the stairs hand-in-hand.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_3'] },
  ]);
  scene.build();
}

function enterFloor4Event_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_girls.jpg');
  scene.text('Two young girls sit on the stairs talking. They ignore you as you walk past them, absorbed in their conversation about some cute boys they know.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_gop.jpg');
  scene.text('In the stairwell between the floors are three gopnik boys, with a young girl out between them who looks completely wasted. One of them has pulled her shirt part way up as you approach them. As you look at the girl, one of them says. "Mind your own business, bitch!"');
  scene.text('She doesn\'t seem to be trying to stop them from groping her or pulling at her clothes. Not sure what else to do, you continue on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_naked.jpg');
  scene.text('In the stairwell between the floors you see a girl about your age leaning against the wall, completely naked and smoking a cigarette. When she sees you, she smiles. "Hello!" she says, as if everything was normal. You greet her in return and try not to stare as she continues to smoke and you walk by her.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).meet_nudedoor_woman3 = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_shop\' + rand(1, 2) + \'.jpg');
  scene.text('You see a beautiful woman dressed in nice clothes carrying a shopping bag. You\'ve seen her around before and you know she lives on this floor. Almost every time you see her, she\'s carrying some shopping bags. She either makes plenty of money or someone else buys her a lot of stuff. She smiles at you as she heads towards her apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/event/floor4_up.jpg');
  scene.text('As you get to the stairwell landing you see a man looking up the stairs at a middle aged-woman wearing a robe that\'s hanging wide open, her breasts and trimmed pussy on full display. They both look at you and smile before the guy pulls out his phone and starts taking pictures. After that, they both ignore you as you go on your way.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor4_bdsm.jpg');
  scene.text('On the landing, bent over the railing, is a woman wearing black baby doll lingerie, stockings and black high heels, as well as ankle and wrist cuffs. The ankle cuffs are attached to the railing in a way that forces her legs apart. Her hands are attached on the other side of the railing together. She blushes when she sees you, but you also notice that she smiles as she looks away from you. You get the feeling she\'s enjoying the humiliation of being found like this.');
  scene.text('As you walk past her, you can\'t help but notice she\'s not wearing panties under the baby doll lingerie. This gives you a full view of her pussy and the cum dripping down her inner thighs. You glance around but don\'t see anyone else around, and she seems content to remain like this, so you go on your way.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor4_bottle.jpg');
  scene.text('As you make your way to the stairs you notice a few gopnik boys, who seem focused on someone else as they\'re giving them encouragement to keep going. As you get close enough, you see a young woman naked from the waist down fucking her ass with a bottle. When she sees you, she blushes and quickly jumps up and runs down one of the hallways. She\'s quickly followed by the boys, one of whom pauses long enough to give you a dirty look for ruining their fun.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor4_bj.jpg');
  scene.text('A young man stands on the stairs in the stairwell with his pants pulled down just enough for his cock to be free. A girl, about his age, is bent over and sucking his dick. As you walk past them, he grins at you as he grabs hold of the back of her head with his hands and starts forcing his dick balls deep into her mouth and down her throat, gagging her. Just before the sounds of them fade completely, you hear him say "Fuck yeah, swallow it bitch!"');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_12(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor4_fuck.jpg');
  scene.text('As you approach the stairs, you hear moaning and grunting, the obvious sounds of people having sex. A man and woman, by the sounds of the moans. As you get to the landing, you see a light-skinned black girl about your age, her pants pulled down to her knees as she leans forward with her hands on the wall, her ass sticking out. A slightly older man is fucking her from behind. She looks in your direction, but you\'re not sure if she noticed you or not. She looks, and sounds, like she\'s really enjoying herself. You decide to move on and leave them to it.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_4'] },
  ]);
  scene.build();
}

function enterFloor4Event_13(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/tryndin/tryndin_stairs.jpg');
  if (((s as any).tryndinQW ?? 0)?.['stairwell_chat'] === 1) {
    scene.text('Your neighbor, <a href="exec:gt \'tryndin\'">Tryndin</a>, is in the hallway smoking a cigarette and flicking the ashes into a jar. He gives you a nod when he notices you. "Hello."');
    scene.actions([
      { label: 'Say "hello" and leave', goto: ['city_apt_building', 'floor_4'] },
      { label: 'Have a chat with Tryndin', goto: ['tryndin', 'stairwell_chat'] },
    ]);
  } else {
    scene.text('You see a young man, around your sister\'s age, in the hallway. You can\'t help but notice that he\'s pretty good looking. He looks up at you as you get close and gives you a pleasant smile. "You\'ve moved into apartment 69, right?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    if (!(s as any).tryndinQW) (s as any).tryndinQW = {}; (s as any).tryndinQW['stairwell_chat'] = ((s as any).tryndinQW['stairwell_chat'] ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big77.jpg');
    scene.text('You nod. "Yeah?"');
    scene.text('The guy looks visibly delighted. "Wonderful, it\'s always nice meeting new people. By the way, I\'m Tryndin. You are?"');
    scene.actions([
      { label: '<<$pcs_nickname>>', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big77.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>," you reply.
    scene.text(`"${((s as any).pcs_nickname ?? 0)}," you reply.`);
    scene.text('He nods his head and turns towards a nearby door. The door has number 37 on it. Digging in his pocket, he pulls out a set of keys and unlocks the door. "That\'s a pretty name. I live in this apartment here. I need to get going, but I hope to see you around." As he opens the door, an elderly woman looks out at him, and then at you, giving you a disapproving look. "Mother, stop hanging around the front door!" he says in an annoyed tone before he closes the door.');
    scene.actions([
      { label: 'Continue', goto: ['city_apt_building', 'floor_4'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFloor5Events(s: GameState, scene: SceneBuilder): void {
  (s as any).floor5 = Math.floor(Math.random() * 18) + 1;
  if (((s as any).floor5 ?? 0) < 3) {
    // TODO-QSP: gt 'city_apt_building', 'floor5_event_1', $ARGS[1]
  } else {
    if (((s as any).floor5 ?? 0) < 6) {
      // TODO-QSP: gt 'city_apt_building', 'floor5_event_2', $ARGS[1]
    } else {
      if (((s as any).floor5 ?? 0) === 6) {
        // TODO-QSP: gt 'city_apt_building', 'floor5_event_3', $ARGS[1]
      } else {
        if (((s as any).floor5 ?? 0) < 10) {
          // TODO-QSP: gt 'city_apt_building', 'floor5_event_4', $ARGS[1]
        } else {
          if (((s as any).floor5 ?? 0) < 13) {
            // TODO-QSP: gt 'city_apt_building', 'floor5_event_5', $ARGS[1]
          } else {
            if (((s as any).floor5 ?? 0) === 13) {
              // TODO-QSP: gt 'city_apt_building', 'floor5_event_6', $ARGS[1]
            } else {
              if (((s as any).floor5 ?? 0) === 14) {
                // TODO-QSP: gt 'city_apt_building', 'floor5_event_7', $ARGS[1]
              } else {
                if (((s as any).floor5 ?? 0) === 15  ||  ((s as any).floor5 ?? 0) === 16) {
                  // TODO-QSP: gt 'city_apt_building', 'floor5_event_8', $ARGS[1]
                } else {
                  if (((s as any).floor5 ?? 0) === 17) {
                    // TODO-QSP: gt 'city_apt_building', 'floor5_event_9', $ARGS[1]
                  } else {
                    if (((s as any).floor5 ?? 0) === 18) {
                      // TODO-QSP: gt 'city_apt_building', 'floor5_event_10', $ARGS[1]
                    }
                  }
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

function enterFloor5Event_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_clothed.jpg');
  scene.text('You see one of your neighbors, a young woman about your age, walking down the stairs to the fourth floor. She gives you a friendly smile and a wave and you exchange hellos before you go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_drunk.jpg');
  scene.text('On the stairs is a girl drinking from a bottle, clearly very drunk. She grins at you as you approach and you exchange hellos before you go on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_flash.jpg');
  scene.text('A middle-aged woman at the top of the stairs is looking down at a man near the landing of the stairs below. She pulls up her top to expose her breasts to him and they both laugh before she hurries down the stairs to catch up to him. They exchange a quick kiss before walking down the stairs hand-in-hand.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_girls.jpg');
  scene.text('Two girls and a guy are in the hallway near the roof access. One of the girls is sitting and looking in your direction while the other is on all-fours with the guy behind her. They\'re all clothed, but the guy acts like he\'s fucking the girl and they all seem to find it funny. They keep talking and playing around as you continue on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_gop.jpg');
  scene.text('In the hallway are a few gopniks squatting next to a tiny table with a few drinks and some food. They talk, laugh and smoke as they eat and drink. They offer you some food when you walk past, but you politely decline as it doesn\'t look very good and continue on your way.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/event/floor5_naked.jpg');
  scene.text('You see a woman walking down the stairs to the fourth floor, completely naked. She seems to be in no hurry and doesn\'t turn to look in your direction. You shake your head slightly and continue on your way.');
  qspCall(s, 'arousal', 'erotic_nudity', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor5_bdsm.jpg');
  scene.text('Two young women are in the hallway. One is blonde and is wearing boots and a skirt, while naked from the waist up. The other, a brunette, is completely naked with her hands tied behind her back. You watch as the blonde puts a large collar around the other one\'s neck and attaches a leash to it. With the leash in place, she steps back, unbinds the brunette\'s hands and slaps her on the ass. She drops to the floor on all-fours and the blonde starts walking, holding onto the leash as the brunette follows behind like a dog. The blonde smiles at you and waves while the brunette never says a word as they move past you.');
  scene.text('After taking a second to reflect on what you just seen, you continue on your way.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor5_couple.jpg');
  scene.text('You\'re on the fifth floor, walking up the dim staircase when you spot a couple against the chipped green-and-white wall. He grins nervously while she strikes a bold pose, completely unfazed by your sudden presence.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor5_bj.jpg');
  scene.text('A young man stands on the stairs in the stairwell with his pants pulled down just enough for his cock to be free. A girl, about his age, is bent over and sucking his dick. As you walk past them, he grins at you as he grabs hold of the back of her head with his hands and starts forcing his dick balls deep into her mouth and down her throat, gagging her. Just before the sounds of them fades completely, you hear him shout "Oh my god, that was amazing!"');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_5'] },
  ]);
  scene.build();
}

function enterFloor5Event_10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/apartment/stairs/sex/floor5_fuck.jpg');
  scene.text('As you approach the stairs, you hear moaning and grunting, the obvious sounds of people having sex. A man and woman by the sounds of it. As you approach the stairs, you see a woman on her back in the stairwell, but you can\'t really make her out other than her bare legs spread wide. A topless man with his pants pulled down is between her legs, thrusting. As you get closer, the man sees you and gives you a huge grin and a thumbs up. He doesn\'t stop thrusting into the woman underneath him as he does. Feeling a little awkward, you continue on your way.');
  qspCall(s, 'arousal', 'erotic_sex', 3);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_apt_building', 'floor_5'] },
  ]);
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
    case 'floor2_event_1':
      enterFloor2Event_1(s, scene);
      break;
    case 'floor2_event_2':
      enterFloor2Event_2(s, scene);
      break;
    case 'floor2_event_3':
      enterFloor2Event_3(s, scene);
      break;
    case 'floor2_event_4':
      enterFloor2Event_4(s, scene);
      break;
    case 'floor2_event_5':
      enterFloor2Event_5(s, scene);
      break;
    case 'floor2_event_6':
      enterFloor2Event_6(s, scene);
      break;
    case 'floor2_event_7':
      enterFloor2Event_7(s, scene);
      break;
    case 'floor2_event_8':
      enterFloor2Event_8(s, scene);
      break;
    case 'floor2_event_9':
      enterFloor2Event_9(s, scene);
      break;
    case 'floor3_events':
      enterFloor3Events(s, scene);
      break;
    case 'floor3_event_1':
      enterFloor3Event_1(s, scene);
      break;
    case 'floor3_event_2':
      enterFloor3Event_2(s, scene);
      break;
    case 'floor3_event_3':
      enterFloor3Event_3(s, scene);
      break;
    case 'floor3_event_4':
      enterFloor3Event_4(s, scene);
      break;
    case 'floor3_event_5':
      enterFloor3Event_5(s, scene);
      break;
    case 'floor3_event_6':
      enterFloor3Event_6(s, scene);
      break;
    case 'floor3_event_7':
      enterFloor3Event_7(s, scene);
      break;
    case 'floor3_event_8':
      enterFloor3Event_8(s, scene);
      break;
    case 'floor3_event_9':
      enterFloor3Event_9(s, scene);
      break;
    case 'floor3_event_10':
      enterFloor3Event_10(s, scene);
      break;
    case 'floor3_event_11':
      enterFloor3Event_11(s, scene);
      break;
    case 'floor3_event_12':
      enterFloor3Event_12(s, scene);
      break;
    case 'floor4_events':
      enterFloor4Events(s, scene);
      break;
    case 'floor4_event_1':
      enterFloor4Event_1(s, scene);
      break;
    case 'floor4_event_2':
      enterFloor4Event_2(s, scene);
      break;
    case 'floor4_event_3':
      enterFloor4Event_3(s, scene);
      break;
    case 'floor4_event_4':
      enterFloor4Event_4(s, scene);
      break;
    case 'floor4_event_5':
      enterFloor4Event_5(s, scene);
      break;
    case 'floor4_event_6':
      enterFloor4Event_6(s, scene);
      break;
    case 'floor4_event_7':
      enterFloor4Event_7(s, scene);
      break;
    case 'floor4_event_8':
      enterFloor4Event_8(s, scene);
      break;
    case 'floor4_event_9':
      enterFloor4Event_9(s, scene);
      break;
    case 'floor4_event_10':
      enterFloor4Event_10(s, scene);
      break;
    case 'floor4_event_11':
      enterFloor4Event_11(s, scene);
      break;
    case 'floor4_event_12':
      enterFloor4Event_12(s, scene);
      break;
    case 'floor4_event_13':
      enterFloor4Event_13(s, scene);
      break;
    case 'floor5_events':
      enterFloor5Events(s, scene);
      break;
    case 'floor5_event_1':
      enterFloor5Event_1(s, scene);
      break;
    case 'floor5_event_2':
      enterFloor5Event_2(s, scene);
      break;
    case 'floor5_event_3':
      enterFloor5Event_3(s, scene);
      break;
    case 'floor5_event_4':
      enterFloor5Event_4(s, scene);
      break;
    case 'floor5_event_5':
      enterFloor5Event_5(s, scene);
      break;
    case 'floor5_event_6':
      enterFloor5Event_6(s, scene);
      break;
    case 'floor5_event_7':
      enterFloor5Event_7(s, scene);
      break;
    case 'floor5_event_8':
      enterFloor5Event_8(s, scene);
      break;
    case 'floor5_event_9':
      enterFloor5Event_9(s, scene);
      break;
    case 'floor5_event_10':
      enterFloor5Event_10(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_apt_building: LocationDef = {
  name: 'city_apt_building',
  title: 'Floor 1 - You don\'t know anyone on this floor.',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
