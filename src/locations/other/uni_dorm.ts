import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', '');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = '';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Dormitory</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm.jpg');
  scene.text('You walk up to the dorm building and head inside. It\'s pretty clean and in good shape. An older woman, with a very unpleasant and judgmental look on her face sits in a room just off the main hallway. It has a partially glass wall and window splitting it from the main room.');
  scene.text('She glares up at you as you enter, her look telling you she\'s already judging you as her face frowns into a look of disapproval.');
  if (qspFunc(s, 'homes_properties', 'can_live_here')  ||  ((s as any).university ?? 0)?.['student'] === 1) {
    scene.actions([
      { label: 'Show her your student ID', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('As you walk by, you take out your student ID and show it to her. She looks for just a second and nods before going back to what she was doing as you head for the elevators.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
    ]);
  } else {
    scene.text('Since you\'re not attending the university and don\'t have a student ID, you won\'t be allowed access to the dorms unless you\'re on the guest list of a student.');
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
      if (((s as any).DjibrilQW ?? 0)?.['invite'] === 1) {
        scene.actions([
          { label: 'I\'m here to visit Djibril', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'bbc', 'tiny');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Djibril."');
    scene.text('The woman gives you a look of complete disgust. "What, your own kind not good enough for you? Go ahead and take care of those black cocks. He\'s on the eighth floor, room 810."');
    scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      if (((s as any).gosh ?? 0) > 0) {
        scene.actions([
          { label: 'I\'m here to visit Gosha', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Gosha."');
    scene.text('The woman shakes her head in disapproval. "You\'re Gosha\'s new whore? I\'ll never understand what you sluts see in that scrawny bastard. He\'s been through half of the dorm already! He\'s on the sixth floor, room 602."');
    scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
    (s as any).reccoldorm = 1;
    (s as any).goshiflag = 1;
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      if (((s as any).meet_kendra ?? 0) === 1) {
        scene.actions([
          { label: 'I\'m here to visit Kendra', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'bbc', 'tiny');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    if (((s as any).kendraQW ?? 0)?.['sub'] < 0) {
      scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Kendra."');
      scene.text('The woman gives you a look of complete disgust. "It seems like she\'s gotten tired of you since you\'re no longer on the guest list. Now get out of here before I call security!"');
      scene.text('Surprised, you turn and quickly leave.');
      scene.actions([
        { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
      ]);
    } else {
      scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Kendra."');
      scene.text('The woman gives you a look of complete disgust. "What, a man not good enough for you? Go ahead and serve that black whore. She\'s on the eighth floor, room 801."');
      scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
      scene.actions([
        { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).katjaQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
        scene.actions([
          { label: 'I\'m here to visit Katja', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Katja Meynold."');
    scene.text('The woman smiles. "You\'re one of Katja\'s friends? She\'s such a sweet girl. She\'s on the second floor, room 204."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      if (((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
        scene.actions([
          { label: 'I\'m here to visit Artem', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Artem Chebotarev."');
    scene.text('The woman smiles. "You\'re one of Artem\'s friends? He\'s such a sweet boy. He\'s on the second floor, room 209."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 1  &&  ((s as any).yearstart ?? 0) > 1) {
        scene.actions([
          { label: 'I\'m here to visit Albina', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Albina Barlovskaya."');
    scene.text('"Oh. <i>Her</i>," the woman says with a disgusted frown. "That little whore needs some discipline. Her mother should be ashamed of herself for raising such a shameless slut!"');
    scene.text('She gives you a judgmental stare. "Your \'friend\' is up on the seventh floor, room 707." She points you at the elevator before going back to what she was doing.');
    scene.text('You\'ve better things to do than stand around and argue with her, so you head for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
      if (((s as any).NatbelQW ?? 0)?.['uni_dorm_access'] === 1  &&  ((s as any).yearstart ?? 0) > 1) {
        scene.actions([
          { label: 'I\'m here to visit Natasha',  },
        ]);
      }
      // TODO-QSP: if twins
      scene.actions([
        { label: 'I\'m here to visit the twins', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Mia and Yana Radimova."');
    scene.text('The woman rolls her eyes. "Those two troublemakers really aren\'t as funny as they think they are. Anyway, they\'re up on the seventh floor, room 702."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
  ]);
  scene.build();
}

function enterElevator(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'elevator');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Dormitory</b></center>');
  scene.img('images/locations/city/island/university/dorm/elevator.jpg');
  scene.text('You enter the dorm elevator, which seems to be in decent shape and fairly well maintained. The panel of floor numbers awaits your input.');
  if (qspFunc(s, 'homes_properties', 'can_live_here')) {
    scene.text('Your dorm room is on the tenth floor.');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    scene.text('There is a laundromat on the first floor.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
    { label: 'Go to the first floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'first_floor'] },
    { label: 'Go to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'second_floor'] },
    { label: 'Go to the sixth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'sixth_floor'] },
    { label: 'Go to the seventh floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'seventh_floor'] },
    { label: 'Go to the eighth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    { label: 'Go to the tenth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'tenth_floor'] },
  ]);
  scene.build();
}

function enterFirstFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'laundry');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'first_floor';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you is the usual dorm hallway with the dilapidated walls of the first floor. You can hear humming of the laundry machines off to the side.');
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    scene.actions([
      { label: 'Walk to the laundry machines', goto: ['uni_dorm', 'laundry'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
  ]);
  scene.build();
}

function enterLaundry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'laundry');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you are the laundry machines where you can wash your clothes.');
  qspCall(s, 'washer', 'check_total_items');
  if (((s as any).washer_total_wash_count ?? 0) > 0) {
    (s as any).wash_time = Math.min(30 + 5 * (((s as any).washer_total_wash_count ?? 0) / 5), 120);
    // TODO-QSP: dynamic "
    // TODO-QSP: "
    scene.actions([
      { label: 'Wash clothes (<<wash_time / 60>>:<<$mid(100 + wash_time mod 60, 2, 2)>>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).wash_time ?? 0));
    qspCall(s, 'washer', 'wash_all');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: <center><img " + $set_imgh + " src=""images/system/image_needed.png""></center>
    scene.text('<center><img " + $set_imgh + " src=""images/system/image_needed.png""></center>');
    scene.text('You wash all your clothes.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'first_floor'] },
  ]);
  scene.build();
}

function enterSecondFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'second_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'second_floor';
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'artem_chebotarev_schedule', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you is the usual dorm hallway with the dilapidated walls of the second floor. You can hear music and loud talking from drunk students escaping from some rooms.');
  if (((s as any).totminut ?? 0) > ((s as any).uni_dorm ?? 0)?.['event_minut']) {
    if (((s as any).hour ?? 0) > 2  &&  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 11)) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the shared lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_lounge'] },
      { label: 'Go to the shared kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_kitchen'] },
      { label: 'Enter the women\'s shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
    ]);
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'mens_restroom'] },
    ]);
  }
  if (((s as any).katjaQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
    scene.actions([
      { label: 'Katja\'s room', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['katja'] === 24  ||  ((s as any).locat ?? 0)?.['katja'] === 31  ||  ((s as any).locat ?? 0)?.['katja'] === 35  ||  ((s as any).locat ?? 0)?.['katja'] === 51  ||  ((s as any).locat ?? 0)?.['katja'] === 52) {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
      // TODO-QSP: dynamic text: Katja opens the door. "Hey <<$pcs_nickname>>, come on in!" She stands aside to l...
      scene.text(`Katja opens the door. "Hey ${((s as any).pcs_nickname || '')}, come on in!" She stands aside to let you enter before closing the door behind you.`);
      scene.actions([
        { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['katja_dorm', 'start'] },
      ]);
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 29  &&  ((s as any).sofiaQW ?? 0)?.['know'] === 1  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).week ?? 0) < 5) {
        if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).sofiaQW ?? 0)?.['spying_day'] !== ((s as any).daystart ?? 0)) {
          scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
          scene.text('You knock on the door and can clearly hear somebody in the room, but they don\'t answer.');
          if (((s as any).pcs_prcptn ?? 0) > (Math.floor(Math.random() * 41) + 30)) {
            qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
            scene.text('Listening a little more carefully, you\'re sure that you can hear them having sex…');
            scene.actions([
              { label: 'Take a peek', goto: ['sofia', 'spying'] },
            ]);
          } else {
            scene.actions([
              { label: 'Open the door', goto: ['sofia', 'not_spying'] },
            ]);
          }
        } else {
          scene.img('images/characters/shared/headshots_main/big260.jpg');
          // TODO-QSP: dynamic text: Sofia opens the door. "Hey, <<$pcs_nickname>>! Katja is at the library right now...
          scene.text(`Sofia opens the door. "Hey, ${((s as any).pcs_nickname || '')}! Katja is at the library right now and I have Maxim over, so I don't really have time to talk. See you later!" she says before closing the door.`);
        }
      } else {
        if ((((s as any).locat ?? 0)?.['katja'] === 32  ||  ((s as any).locat ?? 0)?.['katja'] === 33)  &&  ((s as any).katjaQW ?? 0)?.['kitchen_day'] !== ((s as any).daystart ?? 0)) {
          scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
          scene.text('You knock on the door, but no one answers. Noticing what time it is, you realize that Katja is likely in the shared kitchen.');
          scene.actions([
            { label: 'Check if Katja is in the kitchen', goto: ['katja_pantyquest', 'kitchen', '\'from_room\''] },
          ]);
        } else {
          scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
          scene.text('You knock on the door, but no one answers. She must be asleep or not home.');
        }
      }
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'second_floor'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
    scene.actions([
      { label: 'Artem\'s room', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A2'] === 'dormroom_studying_or_relaxing') {
      if (((s as any).artemQW ?? 0)?.['artlie'] === 2  ||  ((s as any).artemQW ?? 0)?.['artembrokenheart'] === 1  ||  ((s as any).artemQW ?? 0)?.['artemblok'] === 1) {
        scene.text('You stand outside the dorm room, knocking on the door. It\'s soon answered by Artem, who frowns as soon as he sees you. "I told you I never wanted to see you again! Please go away."');
        scene.text('He closes the door in your face without another word.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'second_floor'] },
        ]);
      } else {
        scene.text('You stand outside the dorm room, knocking on the door, hoping Artem will answer.');
        // TODO-QSP: dynamic text: He soon opens the door with a smile. "Oh hey <<$pcs_nickname>>. I was just study...
        scene.text(`He soon opens the door with a smile. "Oh hey ${((s as any).pcs_nickname || '')}. I was just studying, but I can take a break."`);
        scene.text('Once you\'re inside, he closes the door and heads to the couch to take a seat.');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['artem_dorm', 'start'] },
        ]);
      }
    } else {
      scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
      scene.text('You knock on the door, but no one answers. He must be asleep or not home.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['uni_dorm', 'second_floor'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'womens_restroom'] },
  ]);
  scene.build();
}

function enterSixthFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'sixth_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'sixth_floor';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you is the usual dorm hallway with the dilapidated walls of the sixth floor. You can hear music and loud talking from drunk students escaping from some rooms.');
  if (((s as any).totminut ?? 0) > ((s as any).uni_dorm ?? 0)?.['event_minut']) {
    if (((s as any).hour ?? 0) > 2  &&  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 11)) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the shared lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_lounge'] },
      { label: 'Go to the shared kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_kitchen'] },
      { label: 'Enter the women\'s shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
    ]);
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'mens_restroom'] },
    ]);
  }
  if (((s as any).gosh ?? 0) > 0) {
    scene.actions([
      { label: 'Gosha\'s room', handler: (st: GameState) => {
    if ((((s as any).week ?? 0) <= 4  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 2) + 1) === 2)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 2) + 1) === 2)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 3) + 1) >= 2)) {
      scene.img('images/characters/shared/headshots_main/big83.jpg');
      // TODO-QSP: dynamic text: Gosha opens the door. "Hey <<$pcs_nickname>>, why don't you come in?"
      scene.text(`Gosha opens the door. "Hey ${((s as any).pcs_nickname || '')}, why don't you come in?"`);
      scene.text('He stands aside to let you enter before closing the door behind you.');
      scene.actions([
        { label: 'Enter', goto: ['gosha', 'gosha_room'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
      scene.text('You knock on the door, but no one answers. He must be asleep or not home.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'sixth_floor'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'womens_restroom'] },
  ]);
  scene.build();
}

function enterSeventhFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'seventh_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'seventh_floor';
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you is the usual dorm hallway with the dilapidated walls of the seventh floor. You can hear music and loud talking from drunk students escaping from some rooms.');
  if (((s as any).totminut ?? 0) > ((s as any).uni_dorm ?? 0)?.['event_minut']) {
    if (((s as any).hour ?? 0) > 2  &&  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 11)) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the shared lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_lounge'] },
      { label: 'Go to the shared kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_kitchen'] },
      { label: 'Enter the women\'s shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
    ]);
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'mens_restroom'] },
    ]);
  }
  if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 1  &&  ((s as any).yearstart ?? 0) > 1) {
    scene.actions([
      { label: 'Albina\'s room', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A23'] === 19) {
      scene.img('images/characters/shared/headshots_main/big23.jpg');
      if (((s as any).AlbinaQW ?? 0)?.['first_dorm_visit'] === 0) {
        // TODO-QSP: dynamic text: You knock on the door, and after a few seconds, Albina opens it. "<<$pcs_nicknam...
        scene.text(`You knock on the door, and after a few seconds, Albina opens it. "${((s as any).pcs_nickname || '')}! You came! Come in, come in."`);
        scene.text('She stands aside to let you enter before closing the door behind you.');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albina_dorm', 'first_room_visit'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: You knock on the door, and after a few seconds, Albina opens it. "<<$pcs_nicknam...
        scene.text(`You knock on the door, and after a few seconds, Albina opens it. "${((s as any).pcs_nickname || '')}! Come in, come in."`);
        scene.text('She stands aside to let you enter before closing the door behind you.');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albina_dorm', 'start'] },
        ]);
      }
    } else {
      if (((s as any).locat ?? 0)?.['A23'] === 16) {
        scene.img('images/characters/shared/headshots_main/big23.jpg');
        scene.text('You knock on the door, and after a few seconds, Albina opens it with a tired expression on her face. "Hey…"');
        scene.text('"Are you okay?" you ask.');
        scene.text('She nods her head. "Yeah, I\'m just powering through a studying session right now. No offense, but I don\'t need any distractions right now. Come back later if you want to hang out."');
        scene.text('You just nod in response and she closes the door without another word.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'seventh_floor'] },
        ]);
      } else {
        if (((s as any).locat ?? 0)?.['A23'] === 18  &&  ((s as any).AlbinaQW ?? 0)?.['first_dorm_visit'] === 1) {
          scene.img('images/characters/shared/headshots_main/big23.jpg');
          // TODO-QSP: dynamic text: You knock on the door, and after a few seconds, Albina peeks her head through th...
          scene.text(`You knock on the door, and after a few seconds, Albina peeks her head through the gap. "Oh hey ${((s as any).pcs_nickname || '')}."`);
          scene.text('"Hey. Are you okay?" you ask.');
          scene.text('"Yes, yes. You just caught me in the middle of a yoga session. Want to come in?"');
          scene.actions([
            { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albina_dorm', 'yoga'] },
            { label: 'No', handler: (st: GameState) => {
    scene.text('"No, I don\'t want to disturb you. I\'ll come back later," you reply.');
    scene.text('"Okay," she says and closes the door without another word.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'seventh_floor'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).locat ?? 0)?.['A23'] === 21) {
            if (((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
              scene.img('images/characters/shared/headshots_main/big23.jpg');
              scene.text('Just as you\'re about to knock on the door, it flies open and Albina walks out with a large bag slung over her shoulder. She\'s in such a hurry that she almost collides with you.');
              // TODO-QSP: dynamic text: "Oh. Sorry, <<$pcs_nickname>>. I didn't see you there."
              scene.text(`"Oh. Sorry, ${((s as any).pcs_nickname || '')}. I didn't see you there."`);
              scene.text('"Clearly," you reply as you look at her bag. "Off to work?" you whisper and she nods.');
              scene.text('"Yes, and I\'m going to be late if I don\'t get a move on. I\'l talk to you later, yeah?"');
              scene.text('She hurries off without another word, leaving you alone in the hallway.');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'seventh_floor'] },
              ]);
            } else {
              scene.img('images/characters/shared/headshots_main/big23.jpg');
              scene.text('Just as you\'re about to knock on the door, it flies open and Albina walks out with a large bag slung over her shoulder. She\'s in such a hurry that she almost collides with you.');
              // TODO-QSP: dynamic text: "Oh. Sorry, <<$pcs_nickname>>. I didn't see you there."
              scene.text(`"Oh. Sorry, ${((s as any).pcs_nickname || '')}. I didn't see you there."`);
              scene.text('"Clearly," you reply as you look at her bag. "Why are you in such a rush?" you ask, but she brushes you aside.');
              // TODO-QSP: dynamic text: "I have somewhere I need to be and need to go now before I'm late. I'll talk to ...
              scene.text(`"I have somewhere I need to be and need to go now before I'm late. I'll talk to you some other time, ${((s as any).pcs_nickname || '')}."`);
              scene.text('She hurries off without another word, leaving you alone and confused in the hallway.');
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'seventh_floor'] },
              ]);
            }
          } else {
            if (((s as any).locat ?? 0)?.['albina'] === 22) {
              scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
              scene.text('You knock on the door, but there\'s no answer.');
              if (((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1) {
                scene.text('You then remember what day it is and realize that she\'s at work and won\'t be back until the early hours of the morning, so you head back to the elevator.');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'elevator'] },
                ]);
              } else {
                scene.text('You have no idea where she could possibly be at this time of night, so you head back to the elevator.');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'elevator'] },
                ]);
              }
            } else {
              if (((s as any).locat ?? 0)?.['A23'] === 26) {
                scene.text('You knock on the door, but there\'s no answer.');
                qspCall(s, 'albina_dorm', 'albina_not_here_ermias_start');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'elevator'] },
                ]);
              } else {
                scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
                scene.text('You knock on the door, but there\'s no answer. She\'s either asleep or isn\'t home.');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'seventh_floor'] },
                ]);
              }
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
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'womens_restroom'] },
  ]);
  scene.build();
}

function enterEighthFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'eighth_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'eighth_floor';
  qspCall(s, 'fame', 'city', 'bbc', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    scene.text('Before you is the usual dorm hallway with the dilapidated walls of the eighth floor. You can hear music and loud talking from drunk students escaping from some rooms. You\'ve often heard this floor being referred to as the \'Black Site\' since only the African students are assigned rooms on this floor.');
  } else {
    scene.text('Before you is the usual dorm hallway with the dilapidated walls of the eighth floor. You can hear music, but it sounds rather different to what you\'re used to hearing and clearly isn\'t Russian.');
  }
  if (((s as any).totminut ?? 0) > ((s as any).uni_dorm ?? 0)?.['event_minut']) {
    if (((s as any).hour ?? 0) > 2  &&  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 11)) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor8'] }]);
      }
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor8'] }]);
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
      ]);
    }
    scene.actions([
      { label: 'Go to the shared lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_lounge'] },
      { label: 'Go to the shared kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_kitchen'] },
      { label: 'Enter the women\'s shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
    ]);
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'mens_restroom'] },
    ]);
  }
  if (((s as any).DjibrilQW ?? 0)?.['invite'] === 1) {
    scene.actions([
      { label: 'Djibril\'s room', handler: (st: GameState) => {
    if ((((s as any).week ?? 0) <= 4  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 2) + 1) === 2)  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 2) + 1) === 2)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 23  &&  (Math.floor(Math.random() * 3) + 1) >= 2)) {
      scene.img('images/characters/shared/headshots_main/big82.jpg');
      scene.text('You knock on the door, and after a few seconds, Djibril opens it.');
      scene.text('He smiles as he notices it\'s you. "I was hoping you would stop by. Come on in."');
      scene.actions([
        { label: 'Enter', goto: ['djibril', 'djibril_room'] },
      ]);
    } else {
      scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You knock on the door, but no one answers. He must be asleep or not home.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).ErmiasQW ?? 0)?.['invite'] === 1) {
    scene.actions([
      { label: 'Ermias\'s room', handler: (st: GameState) => {
    if ((((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) < 22)  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/characters/shared/headshots_main/big243.jpg');
      scene.text('You knock on the door, and after a few seconds, Ermias opens it.');
      if (((s as any).ErmiasQW ?? 0)?.['first_visit'] === 0) {
        scene.text('"I knew you would stop by," he smiles as he looks you over. "Come on in."');
        scene.actions([
          { label: 'Enter', goto: ['ermias_events', 'first_visit'] },
        ]);
      } else {
        scene.text('"Hello again, bunny," he smiles as he looks you over with a very lustful look in his eyes. "Come on in."');
        scene.actions([
          { label: 'Enter', goto: ['ermias_events', 'visit'] },
        ]);
      }
    } else {
      scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
      scene.text('You knock on the door, but no one answers. He must be asleep or not home.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).meet_kendra ?? 0) === 1) {
    scene.actions([
      { label: 'Kendra\'s room', handler: (st: GameState) => {
    qspCall(s, 'schedule', 'A84');
    if (!(((s as any).locat ?? 0)?.['A84_loc'] === 'uni_dorm'  &&  ((s as any).locat ?? 0)?.['A84_arg'] === 'eighth_floor')) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/university/girl/kendra/door.jpg');
      scene.text('You knock on the door, but no one answers. She must be asleep or not home.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    } else {
      if (((s as any).kendra_busy ?? 0) === ((s as any).daystart ?? 0)) {
        scene.img('images/characters/city/university/girl/kendra/door.jpg');
        scene.text('You can hear Kendra\'s voice as you get close to the door. It\'s fairly loud and sounds harsh in tone, but you can\'t quite make out what she\'s saying. You do hear a muffled reply that sounds male.');
        scene.text('It sounds like she\'s busy right now, so you shouldn\'t bother her.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      } else {
        if ((Math.floor(Math.random() * 5) + 0) > 0) {
          scene.img('images/characters/shared/headshots_main/big84.jpg');
          if (((s as any).kendraQW ?? 0)?.['sub'] < 0) {
            scene.text('You knock on the door, and after a few seconds, Kendra opens it. "I told you last time, I don\'t have time for games and I\'m tired of yours. Now get lost!"');
            scene.text('She then slams the door in your face.');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'eighth_floor'] },
            ]);
          } else {
            if (((s as any).kendraQW ?? 0)?.['sub'] < 10) {
              scene.text('You knock on the door, and after a few seconds, Kendra opens it. "So you came to worship your ebony mistress and learn how to become a proper white slave? Come in and let your lessons begin."');
              scene.text('She stands aside to let you enter before closing the door behind you.');
              scene.actions([
                { label: 'Enter', goto: ['kendra', 'kendra_room_start'] },
              ]);
            } else {
              scene.text('You knock on the door, and after a few seconds, Kendra opens it. "Well if it isn\'t my new favorite white slave bitch. Come in."');
              scene.text('She stands aside to let you enter before closing the door behind you.');
              scene.actions([
                { label: 'Enter', goto: ['kendra', 'kendra_room_start'] },
              ]);
            }
          }
        } else {
          scene.img('images/characters/city/university/girl/kendra/door.jpg');
          scene.text('You can hear Kendra\'s voice as you get close to the door. It\'s fairly loud and sounds harsh in tone, but you can\'t quite make out what she\'s saying. You hear a muffled reply that sounds male.');
          scene.text('It sounds like she\'s already busy. You could knock or just leave her to her company.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'eighth_floor'] },
            { label: 'Knock', handler: (st: GameState) => {
    (s as any).kendra_busy = ((s as any).daystart ?? 0);
    scene.img('images/characters/city/university/girl/kendra/strapon_door.jpg');
    if (((s as any).kendraQW ?? 0)?.['sub'] < 0) {
      scene.text('You knock on the door, and after a few seconds, Kendra opens it. She is completely naked and wearing a strapon harness around her hips.');
      scene.text('She plays with the large black dildo attached to it as she frowns at you. "I told you last time, I don\'t have time for games and I\'m tired of yours! Now get lost, I\'m busy!"');
      scene.text('She then slams the door in your face.');
      scene.actions([
        { label: 'Leave', goto: ['uni_dorm', 'eighth_floor'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 5) + 0) > 0  &&  ((s as any).petkaQW ?? 0)?.['pegged'] > 19) {
        if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] > 0) {
          scene.text('You knock on the door, and after a few seconds, Kendra opens it. She is completely naked and wearing a strapon harness around her hips.');
          scene.text('She plays with the large black dildo attached to it as she looks at you. "Well if it isn\'t my new favorite white slave bitch. I\'m kind of busy punishing one of my other slaves right now."');
          scene.text('She starts to close the door before you can reply, then stops and smiles at you. "You could come in and watch." She holds the door open and stands aside to let you enter.');
          scene.text('You glance into the room and see Petka naked and kneel on the bed. When he notices you, he blushes bright red and moves to cover himself up, but stops with one look from Kendra and instead just lowers his gaze to the floor.');
          scene.text('You have no doubt what she\'s going to do to him, consider she is wearing a strapon harness with a large black dildo dangling from it. But is it something you want to watch? It could be interesting and you might learn something from her as well. On the other hand, do you want to humiliate him more than he already is?');
        } else {
          scene.text('You knock on the door. After a few seconds, Kendra opens the door. She is completely naked and wearing a strapon harness around her hips.');
          scene.text('She plays with the large black dildo attached to it as she looks at you. "Well if it isn\'t my new favorite white slave bitch. I\'m punishing your little pussy assed bitch friend Petka again. Want to come in and watch again, he seemed to really enjoy you watching him get fucked with a big black dick last time."');
          scene.text('She holds the door open and stands aside to let you enter. You glance into the room and see Petka kneeling naked on the bed, just like last time.');
          scene.text('When he notices you, he blushes bright red, this time not trying to cover himself up, instead just lowers his gaze to the floor. You know what she\'s going to do to him after watching last time, but is it something you want to watch again?');
        }
        qspCall(s, 'arousal', 'erotic_nudity', 3);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Enter', goto: ['kendra', 'kendra_petka'] },
          { label: 'Decline', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/strapon_door.jpg');
    if (((s as any).petkaQW ?? 0)?.['pegged_kendra'] > 0) {
      if (((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
        scene.text('You shake your head. "No thanks. You look busy and I don\'t want to disturb you…"');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "You may leave… <i>After</i> you get down on the floor and kiss my boot like the good little white slave that you are."');
        qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (5);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
    scene.text('You glance around and see a few other students in the hall and feel yourself already blushing at the idea.');
    scene.text('You shake you head. "No I can\'t…"');
    scene.text('An angry scowl appears on her face. "Fine then! Don\'t come back!"');
    scene.text('She slams the door in your face, but you don\'t think she really means to <i>never</i> come back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
    scene.img('images/characters/city/university/girl/kendra/kiss_boot.jpg');
    scene.text('You glance around and spot a few other students in the hallway watching, but obediently get down on your hands and knees in front of her and kiss her boot.');
    scene.text('You can hear some murmers from the others, as well as a few laughs.');
    scene.text('"That\'s a good little bitch. You may leave now," she says as she steps away and closes the door.');
    scene.text('Once the door is closed, you stand back up and quickly hurry away.');
    qspCall(s, 'arousal', 'BDSM', 1, 'humiliation', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You shake your head. "No thanks. You look busy and I don\'t want to disturb you…"');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "Aww… So shy and adorable… but I <i>will</i> break you. Maybe next time then."');
        scene.text('She closes the door and you turn to leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      }
    } else {
      if (((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
        scene.text('You shake your head. "No thanks. Last time was entertaining, but I didn\'t come to see that again."');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "You may leave… <i>After</i> you get down on the floor and kiss my boot like the good little white slave that you are."');
        qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (5);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You glance around and see a few other students in the hall and feel yourself already blushing at the idea of kissing her boots. You shake you head. "No, I can\'t…"');
    scene.text('An angry scowl appears look in her face. "Fine then! Don\'t come back!"');
    scene.text('She slams the door in your face, but you don\'t think she really means to <i>never</i> come back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
    scene.img('images/characters/city/university/girl/kendra/kiss_boot.jpg');
    scene.text('You glance around and spot a few other students in the hallway watching, but obediently get down on your hands and knees in front of her and kiss her boot.');
    scene.text('You can hear some murmers from the others, as well as a few laughs.');
    scene.text('"That\'s a good little bitch. You may leave now," she says as she steps away and closes the door.');
    scene.text('Once the door is closed, you stand back up and quickly hurry away.');
    qspCall(s, 'arousal', 'BDSM', 1, 'humiliation', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You shake your head. "No thanks. Last time was entertaining, but I didn\'t come to see that again."');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "Your loss. I might have let you take a turn with him, or maybe not."');
        scene.text('She closes the door and you turn to leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        if ((!((s as any).kendra_male_slave ?? 0))) {
          scene.text('You knock on the door, and after a few seconds, Kendra opens it. She is completely naked and wearing a strapon harness around her hips.');
          scene.text('She plays with the large black dildo attached to it as she looks at you. "Well if it isn\'t my new favorite white slave bitch. I\'m kind of busy punishing one of my other slaves right now."');
          scene.text('She starts to close the door before you can reply, then stops and smiles at you. "You could come in and watch." She holds the door open and stands aside to let you enter.');
          scene.text('You glance into the room and see a naked college boy kneeling next to the couch. When he notices you, he blushes bright red and moves to cover himself up, but stops with one look from Kendra and instead just lowers his gaze to the floor.');
          scene.text('You have no doubt what she\'s going to do to him, but is it something you want to watch? It could be interesting and you might learn something from her as well. On the other hand, do you want to humiliate him more than he already is?');
        } else {
          scene.text('You knock on the door. After a few seconds, Kendra opens the door. She is completely naked and wearing a strapon harness around her hips.');
          scene.text('She plays with the large black dildo attached to it as she looks at you. "Well if it isn\'t my new favorite white slave bitch. I\'m punishing one of the boys again. Want to come in and watch again?"');
          scene.text('She holds the door open and stands aside to let you enter. You glance into the room and see the same college boy kneeling naked next to the couch, just like last time.');
          scene.text('When he notices you, he blushes bright red, this time not trying to cover himself up, instead just lowers his gaze to the floor. You know what she\'s going to do to him after watching last time, but is it something you want to watch again?');
        }
        qspCall(s, 'arousal', 'erotic_nudity', 3);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Enter', goto: ['kendra', 'kendra_male_slave'] },
          { label: 'Decline', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/strapon_door.jpg');
    if ((!((s as any).kendra_male_slave ?? 0))) {
      if (((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
        scene.text('You shake your head. "No thanks. You look busy and I don\'t want to disturb you…"');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "You may leave… <i>After</i> you get down on the floor and kiss my boot like the good little white slave that you are."');
        qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (5);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
    scene.text('You glance around and see a few other students in the hall and feel yourself already blushing at the idea.');
    scene.text('You shake you head. "No I can\'t…"');
    scene.text('An angry scowl appears on her face. "Fine then! Don\'t come back!"');
    scene.text('She slams the door in your face, but you don\'t think she really means to <i>never</i> come back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
    scene.img('images/characters/city/university/girl/kendra/kiss_boot.jpg');
    scene.text('You glance around and spot a few other students in the hallway watching, but obediently get down on your hands and knees in front of her and kiss her boot.');
    scene.text('You can hear some murmers from the others, as well as a few laughs.');
    scene.text('"That\'s a good little bitch. You may leave now," she says as she steps away and closes the door.');
    scene.text('Once the door is closed, you stand back up and quickly hurry away.');
    qspCall(s, 'arousal', 'BDSM', 1, 'humiliation', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You shake your head. "No thanks. You look busy and I don\'t want to disturb you…"');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "Aww… So shy and adorable… but I <i>will</i> break you. Maybe next time then."');
        scene.text('She closes the door and you turn to leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      }
    } else {
      if (((s as any).kendraQW ?? 0)?.['sub'] >= 10) {
        scene.text('You shake your head. "No thanks. Last time was entertaining, but I didn\'t come to see that again."');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "You may leave… <i>After</i> you get down on the floor and kiss my boot like the good little white slave that you are."');
        qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (5);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You glance around and see a few other students in the hall and feel yourself already blushing at the idea of kissing her boots. You shake you head. "No, I can\'t…"');
    scene.text('An angry scowl appears look in her face. "Fine then! Don\'t come back!"');
    scene.text('She slams the door in your face, but you don\'t think she really means to <i>never</i> come back.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Get down', handler: (st: GameState) => {
    if (!(s as any).kendraQW) (s as any).kendraQW = {}; (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
    scene.img('images/characters/city/university/girl/kendra/kiss_boot.jpg');
    scene.text('You glance around and spot a few other students in the hallway watching, but obediently get down on your hands and knees in front of her and kiss her boot.');
    scene.text('You can hear some murmers from the others, as well as a few laughs.');
    scene.text('"That\'s a good little bitch. You may leave now," she says as she steps away and closes the door.');
    scene.text('Once the door is closed, you stand back up and quickly hurry away.');
    qspCall(s, 'arousal', 'BDSM', 1, 'humiliation', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      } else {
        scene.text('You shake your head. "No thanks. Last time was entertaining, but I didn\'t come to see that again."');
        scene.text('She laughs loudly and roughly grabs your chin in her hand. "Your loss. I might have let you take a turn with him, or maybe not."');
        scene.text('She closes the door and you turn to leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
        ]);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
        ]);
      }
    }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'womens_restroom'] },
  ]);
  scene.build();
}

function enterNinthFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'ninth_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'ninth_floor';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Dormitory — Ninth Floor</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  scene.text('Before you is the usual dorm hallway with the dilapidated walls of the ninth floor. The corridor is quiet; most of the rooms here seem to belong to students who keep to themselves.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
  ]);
  scene.build();
}

function enterTenthFloor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'tenth_floor');
  if (!(s as any).uni_dorm) (s as any).uni_dorm = {}; (s as any).uni_dorm['floor'] = 'tenth_floor';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/dorm_hall.jpg');
  if (qspFunc(s, 'uniutil', 'student', 'enrolled')) {
    scene.text('Before you is the dorm hallway with it\'s dilapidated walls leading to your dorm room. You can hear music and loud talking from drunk students escaping from some rooms.');
  } else {
    scene.text('Before you is the usual dorm hallway with dilapidated walls. You can hear music and loud talking from drunk students escaping from some rooms.');
  }
  if (((s as any).totminut ?? 0) > ((s as any).uni_dorm ?? 0)?.['event_minut']) {
    if (((s as any).hour ?? 0) > 2  &&  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 15)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) < 11)) {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['uni_dorm_events', 'dorm_floor'] }]);
      }
    }
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')) {
    qspCall(s, 'courtletter', '');
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s shower', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
      ]);
    }
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_room'] },
      { label: 'Go to the shared lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_lounge'] },
      { label: 'Go to the shared kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_kitchen'] },
      { label: 'Enter the women\'s shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
    ]);
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'mens_restroom'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 6;
  }, goto: ['uni_grounds', ''] },
    { label: 'Use the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    { label: 'Enter the women\'s restroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'womens_restroom'] },
  ]);
  scene.build();
}

function enterDormLounge(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_lounge');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dorm Lounge</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_lounge.jpg');
  scene.text('This is the large shared lounge for this floor. Couches and chairs clustered around a TV on the wall create a square for groups of people to sit at, with just enough space between them to allow people to enter or leave.');
  scene.text('A vending machine charges a flat fee of 80 <b>₽</b> per item for snacks and energy drinks, likely for those cramming a late night study session.');
  scene.text('A free <a href="exec: newspaperVars[\'dbag\'] = 0 & gs \'newspaper\', \'start\'">newspaper</a> is available.');
  if (((s as any).money ?? 0) < 80) {
    scene.text('You don\'t have enough money to buy anything from the vending machine.');
  } else {
    scene.actions([
      { label: 'Buy a snack from the vending machine (80 <b>₽</b>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).money = ((s as any).money ?? 0) - (80);
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (20);
    (s as any).fat = ((s as any).fat ?? 0) + (6);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    qspCall(s, 'stat', '');
    scene.text('You insert the money into the machine and choose a tasty, but somewhat fattening, snack.');
    scene.actions([
      { label: 'Return', goto: ['uni_dorm', 'dorm_lounge'] },
    ]);
  } },
      { label: 'Buy an energy drink from the vending machine (80 <b>₽</b>)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).money = ((s as any).money ?? 0) - (80);
    qspCall(s, 'beverage', 'energy_drink_stats');
    qspCall(s, 'stat', '');
    scene.text('You buy and enjoy an energy drink from the vending machine.');
    scene.actions([
      { label: 'Return', goto: ['uni_dorm', 'dorm_lounge'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    { label: 'Watch TV', goto: ['uni_dorm', 'dorm_lounge_watch_tv'] },
    { label: 'Relax', goto: ['uni_dorm', 'dorm_lounge_relax'] },
  ]);
  scene.build();
}

function enterDormLoungeWatchTv(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_lounge_watch_tv');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dorm Lounge TV</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_lounge.jpg');
  scene.text('You take a seat on one of the couches to watch something on the TV. There\'s not much on, but it kills a little time.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    { label: 'Keep watching', goto: ['uni_dorm', 'dorm_lounge_watch_tv'] },
  ]);
  scene.build();
}

function enterDormLoungeRelax(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_lounge_relax');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dorm Lounge Relax</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_lounge.jpg');
  scene.text('You take a seat on one of the couches and just chill out for few minutes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    { label: 'Keep relaxing', goto: ['uni_dorm', 'dorm_lounge_relax'] },
  ]);
  scene.build();
}

function enterDormKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_kitchen');
  (s as any).food_loc = 0;
  qspCall(s, 'kit_din', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dorm Kitchen</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_kitchen.jpg');
  scene.text('The large shared kitchen for this floor. It\'s fairly tidy, with a lot of cabinets along two of the walls, two ovens and two refrigerators, and several tables with chairs around them scattered about the room.');
  if ((((s as any).locat ?? 0)?.['katja'] === 32  ||  ((s as any).locat ?? 0)?.['katja'] === 33)  &&  ((s as any).uni_dorm ?? 0)?.['floor'] === 'second_floor') {
    if (((s as any).katjaQW ?? 0)?.['kitchen_day'] !== ((s as any).daystart ?? 0)) {
      // TODO-QSP: 'You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $start_type['magic']...
    } else {
      if (((s as any).locat ?? 0)?.['katja'] === 32) {
        // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
        scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a cute redheaded girl\', \'Katja\')+\' cooking.');
      } else {
        // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
        scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a cute redheaded girl\', \'Katja\')+\' at the table eating her dinner.');
      }
    }
  }
  if (((s as any).uni_dorm ?? 0)?.['floor'] !== 'tenth_floor') {
    qspCall(s, 'core_library', 'kitchen', 'shared');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
      if ((!((s as any).edahot ?? 0))) {
      }
      // TODO-QSP: dynamic text: Your shelf in the refrigerator holds enough food for <b><<mc_inventory['food_bas...
      scene.text(`Your shelf in the refrigerator holds enough food for <b>${((s as any).mc_inventory ?? 0)?.['food_basic'] ?? ''}</b> ' + iif(mc_inventory['food_basic'] = 1, 'serving', 'servings') + '. ${((s as any).edagot || '')}`);
    } else {
      scene.text('<center><b>Your shelf in the refrigerator is bare. There is nothing left for you to eat.</b></center>');
    }
    qspCall(s, 'kit_din', 'edahota');
    qspCall(s, 'core_library', 'kitchen', 'communal');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the corridor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
  ]);
  scene.build();
}

function enterMensRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'mens_restroom');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Men\'s Restroom</b></center>');
  scene.img('images/locations/city/island/university/dorm/restrooms/bathroom_mens.jpg');
  scene.text('You peek around the corner. Stalls line the right side of the room, with urinals on the far wall and rows of sinks and <a href="exec:gt \'mirror\', \'start\'">mirrors</a> to the left. The room smells strongly of disinfectant and stale piss.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
  ]);
  scene.build();
}

function enterWomensRestroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'womens_restroom');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Women\'s Restroom</b></center>');
  scene.img('images/locations/city/island/university/dorm/restrooms/bathroom_womens.jpg');
  scene.text('You enter the room and walk around the corner. Stalls line the right side of the room, with rows of sinks with <a href="exec:gt \'mirror\', \'start\'">mirrors</a> to the left. The room smells strongly of disinfectant.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
  ]);
  scene.build();
}

function enterDormShowerMen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_shower_men');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Men\'s Communal Showers</b></center>');
  scene.img('images/locations/city/island/university/dorm/showers/entry.jpg');
  if (((s as any).week ?? 0) < 6) {
    if (((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30)) {
      scene.text('You open the door and immediately hear the sounds of multiple voices talking and laughing over the noise of running water. It sounds like a lot of people are getting ready for the busy day ahead. Since it\'s too risky to take a peek, you close the door and back away.');
    } else {
      if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 19) {
        scene.text('You open the door and hear a few voices speaking over the soft sound water quietly running. It sounds like a few people are showering now that classes are over.');
      } else {
        if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
          scene.text('You open the door and immediately hear the sounds of multiple voices talking and laughing over the noise of running water. It sounds like a lot of people are either getting ready for bed or a night out on the town. Since it\'s too risky to take a peek, you close the door and back away.');
        } else {
          if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).hour ?? 0) >= 22) {
            scene.text('You open the door and hear what sounds like a single shower running, as well as two voices speaking softly. You swear that one of them is female…');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
              { label: 'Investigate', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/bj4.mp4');
    scene.text('You sneak into the room and down the hall to the showers. Peeking around the corner, you\'re greeted by the sight of a girl on her knees passionately sucking a guy\'s dick as the stream of water runs over them.');
    scene.text('"Fuck, that feels good!" he groans. "We should hurry up before someone finds us, though."');
    scene.text('The girl just ignores him and keeps sucking, so you decide to leave before you\'re caught, slightly aroused by what you just witnessed.');
    qspCall(s, 'din_van', 'tampon');
    qspCall(s, 'din_van', 'quickwash');
    qspCall(s, 'din_van', 'basin');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } },
            ]);
          } else {
            scene.text('You open the door and walk down to the end of the L shaped hall to peek around the corner. In the nearest corner is a small alcove with lockers, a few benches, two rows of sinks and some <a href="exec:gt \'mirror\', \'start\'">mirrors</a>. On the other side of the room is a walkway that leads off to the communal <a href="exec:gt \'uni_dorm\', \'mens_shower\'">showers</a>.');
          }
        }
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 11) {
      scene.text('You open the door and immediately hear the sounds of voices talking over the noise of running water. It sounds like a few people are getting ready for the day ahead. Since it\'s too risky to take a peek, you close the door and back away.');
    } else {
      if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
        scene.text('You open the door and immediately hear the sounds of multiple voices talking and laughing over the noise of running water. It sounds like a lot of people are either getting ready for bed or a night out on the town. Since it\'s too risky to take a peek, you close the door and back away.');
      } else {
        if (((s as any).hour ?? 0) >= 22  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          scene.text('You open the door and hear what sounds like a single shower running, as well as two voices speaking softly. You swear that one of them is female…');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
            { label: 'Investigate', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/shower/bj4.mp4');
    scene.text('You sneak into the room and down the hall to the showers. Peeking around the corner, you\'re greeted by the sight of a girl on her knees passionately sucking a guy\'s dick as the stream of water runs over them.');
    scene.text('"Fuck, that feels good!" he groans. "We should hurry up before someone finds us, though."');
    scene.text('The girl just ignores him and keeps sucking, so you decide to leave before you\'re caught, slightly aroused by what you just witnessed.');
    qspCall(s, 'din_van', 'tampon');
    qspCall(s, 'din_van', 'quickwash');
    qspCall(s, 'din_van', 'basin');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You open the door and walk down to the end of the L shaped hall to peek around the corner. In the nearest corner is a small alcove with lockers, a few benches, two rows of sinks and some <a href="exec:gt \'mirror\', \'start\'">mirrors</a>. On the other side of the room is a walkway that leads off to the communal <a href="exec:gt \'uni_dorm\', \'mens_shower\'">showers</a>.');
        }
      }
    }
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    { label: 'Go to the showers', goto: ['uni_dorm', 'mens_shower'] },
  ]);
  scene.build();
}

function enterDormShowerWomen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_shower_women');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Women\'s Communal Showers</b></center>');
  scene.img('images/locations/city/island/university/dorm/showers/entry.jpg');
  scene.text('You open the door and walk down to the end of the L shaped hall, which takes you to the main area of the communal shower room. In the nearest corner is a small alcove with lockers, a few benches, two rows of sinks and some <a href="exec:gt \'mirror\', \'start\'">mirrors</a>. On the other side of the room is a walkway that leads off to the communal <a href="exec:gt \'uni_dorm\', \'womens_shower\'">showers</a>.');
  if (((s as any).uni_dorm ?? 0)?.['floor'] !== 'tenth_floor') {
    scene.text('The dorm has a rule against using the showers that aren\'t on your floor, but you\'ve never seen anybody care enough to actually enforce it.');
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: gt 'uni_dorm', $uni_dorm['floor']
  } },
    { label: 'Go to the showers', goto: ['uni_dorm', 'womens_shower'] },
  ]);
  scene.build();
}

function enterMensShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'mens_shower');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Men\'s Showers</b></center>');
  scene.img('images/locations/city/island/university/dorm/showers/empty_showers.jpg');
  scene.text('The room is currently empty, but you can see a line of showers with small baskets on the wall just under the shower heads to store shampoo and other products.');
  qspCall(s, 'din_van', 'private');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_men'] },
  ]);
  scene.build();
}

function enterWomensShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'womens_shower');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Dormitory - Women\'s Showers</b></center>');
  scene.img('images/locations/city/island/university/dorm/showers/empty_showers.jpg');
  if (((s as any).week ?? 0) < 6) {
    if (((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30)) {
      scene.text('As you walk down the L shaped hall to the showers, you hear the sounds of multiple voices talking and laughing over the noise of running water. Peeking round the corner, you find the showers packed with girls showering and getting ready for the busy day ahead.');
      if (((s as any).uni_dorm ?? 0)?.['floor'] === 'second_floor'  &&  ((s as any).locat ?? 0)?.['katja'] === 21) {
        scene.text('Through the crowd, you spot Katja rinsing herself off underneath one of the shower heads.');
      }
      if (((s as any).uni_dorm ?? 0)?.['floor'] === 'seventh_floor'  &&  ((s as any).locat ?? 0)?.['A23'] === 10) {
        scene.text('Through the crowd, you spot Albina rinsing herself off underneath one of the shower heads.');
      }
    } else {
      if (((s as any).hour ?? 0) === 17  ||  ((s as any).hour ?? 0) === 18) {
        scene.text('As you walk down the L shaped hall to the showers, you hear a few voices speaking over the soft sound water quietly running. Peeking round the corner, you see a few girls showering now that classes are over.');
      } else {
        if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
          scene.text('As you walk down the L shaped hall to the showers, you hear the sounds of multiple voices talking and laughing over the noise of running water. Peeking round the corner, you find the showers packed with girls who are either getting ready for bed or a night out on the town.');
        } else {
          scene.text('The room is currently empty, but you can see a line of showers with small baskets on the wall just under the shower heads to store shampoo and other products.');
        }
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 11) {
      scene.text('As you walk down the L shaped hall to the showers, you hear the sounds of voices talking over the noise of running water. Peeking round the corner, you see a few girls getting ready for the day ahead. Given that it\'s the weekend, the showers aren\'t as busy as they are during the week.');
    } else {
      if (((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30)) {
        scene.text('As you walk down the L shaped hall to the showers, you hear the sounds of multiple voices talking and laughing over the noise of running water. Peeking round the corner, you find the showers packed with girls who are either getting ready for bed or a night out on the town.');
      } else {
        scene.text('The room is currently empty, but you can see a line of showers with small baskets on the wall just under the shower heads to store shampoo and other products.');
      }
    }
  }
  qspCall(s, 'din_van', 'private');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['uni_dorm', 'dorm_shower_women'] },
  ]);
  scene.build();
}

function enterDormRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_dorm', 'dorm_room');
  (s as any).odkomp = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your dorm room</b></center>');
  scene.img('images/locations/city/island/university/dorm/dorm_room/room.jpg');
  scene.text('This is the dorm room you share with Vika.');
  scene.text('Your <a href="exec:gt \'bed\',\'start\'">bed</a> is positioned in one of the corners of the room, with your <a href="exec:gt \'stol\' ,\'start\'">desk</a> sitting at the foot of it.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You\'ve hidden your porn magazines under the mattress of your bed.');
  }
  (s as any).vika_inroom = 0;
  (s as any).vika_sleep = 0;
  if (((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < qspFunc(s, 'bordel', 'open_hour')) {
    (s as any).vika_inroom = 1;
    (s as any).vika_sleep = 0;
    if (((s as any).npc_rel ?? 0)?.['A220'] >= 60  &&  ((s as any).birthday ?? 0) === ((s as any).day ?? 0)  &&  ((s as any).birthmonth ?? 0) === ((s as any).month ?? 0)  &&  ((s as any).vikaslut ?? 0) === 1  &&  ((s as any).b_vika_present_Day ?? 0) !== ((s as any).daystart ?? 0)) {
    }
    qspCall(s, 'music_actions', 'not_alone');
  } else {
    if (((s as any).hour ?? 0) > qspFunc(s, 'bordel', 'close_hour')  &&  ((s as any).hour ?? 0) < 8) {
      (s as any).vika_inroom = 1;
      (s as any).vika_sleep = 1;
      if (((s as any).vikaslut ?? 0)) {
      }
      qspCall(s, 'music_actions', 'no_music');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free');
    if (((s as any).vika_inroom ?? 0)) {
      qspCall(s, 'internet_mobile', 'add_limitation', 'noporn', 'You shouldn\'t watch porn with Vika in the room!');
      qspCall(s, 'internet_mobile', 'add_limitation', 'nocamshow', 'You can\'t do any webcam shows with Vika in the room!');
    }
    scene.text('Your <a href="exec:gt \'komp\',\'start\'">computer</a> sits on your desk.');
  }
  scene.text('To the left of the entrance is an old <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a>.');
  scene.text('There\'s a <a href="exec:gt \'mirror\',\'start\'">mirror</a> hanging on the wall.');
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> is hidden in one of your desk drawers, as are your <a href="exec:gt \'stol\', \'bc\'">condoms</a>.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0) {
      scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> is hidden in one of your desk drawers.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
        scene.text('Your <a href="exec:gt \'stol\', \'bc\'">condoms</a> are hidden in one of your desk drawers.');
      }
    }
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).daystart ?? 0) >= 760) {
    qspCall(s, 'natbel_uni_dates_2', 'set_act');
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  qspCall(s, 'din_van', 'wearpan');
  qspCall(s, 'din_van', 'removepan');
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'blackmailer', 'open_package_act');
  if (! qspFunc(s, 'homes_properties', 'is_current_home')) {
    scene.actions([
      { label: 'Set your dorm room as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['uni_dorm', 'dorm_room'] },
    ]);
  }
  qspCall(s, 'music_actions', 'start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk out to the corridor', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'dorm_room'] }]);
    } else {
      (s as any).odkomp = 0;
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'tenth_floor'] }]);
    }
  } },
    { label: 'Leave the campus', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['uni_dorm', 'dorm_room'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      (s as any).odkomp = 0;
      scene.actions([{ label: 'Continue', goto: ['city_island', ''] }]);
    }
  } },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'elevator':
      enterElevator(s, scene);
      break;
    case 'first_floor':
      enterFirstFloor(s, scene);
      break;
    case 'laundry':
      enterLaundry(s, scene);
      break;
    case 'second_floor':
      enterSecondFloor(s, scene);
      break;
    case 'sixth_floor':
      enterSixthFloor(s, scene);
      break;
    case 'seventh_floor':
      enterSeventhFloor(s, scene);
      break;
    case 'eighth_floor':
      enterEighthFloor(s, scene);
      break;
    case 'ninth_floor':
      enterNinthFloor(s, scene);
      break;
    case 'tenth_floor':
      enterTenthFloor(s, scene);
      break;
    case 'dorm_lounge':
      enterDormLounge(s, scene);
      break;
    case 'dorm_lounge_watch_tv':
      enterDormLoungeWatchTv(s, scene);
      break;
    case 'dorm_lounge_relax':
      enterDormLoungeRelax(s, scene);
      break;
    case 'dorm_kitchen':
      enterDormKitchen(s, scene);
      break;
    case 'mens_restroom':
      enterMensRestroom(s, scene);
      break;
    case 'womens_restroom':
      enterWomensRestroom(s, scene);
      break;
    case 'dorm_shower_men':
      enterDormShowerMen(s, scene);
      break;
    case 'dorm_shower_women':
      enterDormShowerWomen(s, scene);
      break;
    case 'mens_shower':
      enterMensShower(s, scene);
      break;
    case 'womens_shower':
      enterWomensShower(s, scene);
      break;
    case 'dorm_room':
      enterDormRoom(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_dorm: LocationDef = {
  name: 'uni_dorm',
  title: 'Dormitory',
  region: 'other',
  locationType: 'private',
  locclass: 'restroom',
  description: ['You walk up to the dorm building and head inside. It\'s pretty clean and in good shape. An older woman, with a very unpleasant and judgmental look on her face sits in a room just off the main hallway. It has a partially glass wall and window splitting it from the main room.'],
  enter: enter,
};
