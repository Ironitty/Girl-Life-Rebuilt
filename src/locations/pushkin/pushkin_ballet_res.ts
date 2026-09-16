import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['imagepath'] = 'images/' + 'locations/pushkin/';
  scene.build();
}

function enterCheckStartEvt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer'  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1  &&  (((s as any).daystart ?? 0) === 185  &&  ((s as any).hour ?? 0) === 16)) {
    scene.actions([
      { label: '<b>Travel to the ballet school</b>', goto: ['pushkin_ballet_res', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'array', 'remove_element', 'balletqw', 'letter');
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Welcome and Introduction</h1></center>');
  scene.img(`${((s as any).npc_img_path ?? 0)?.['A286'] ?? ''}/286.jpg`);
  scene.text('As you and your group enter the halls for the first time, you are greeted by a matronly-looking woman who will be your warden during your stay.');
  // TODO-QSP: dynamic text: "Welcome, students, to your first night at these halls. I'm your warden, <<$npc_...
  scene.text(`"Welcome, students, to your first night at these halls. I'm your warden, ${((s as any).npc_firstname ?? 0)?.['A286'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''}. If you have any problems or need assistance, you can find me in the room to the right." She gestures towards a door with a brass plaque that reads "Warden".`);
  scene.text('"I will go through the student roster, and you will respond each evening. You can also find a list of rules in your bedroom, which will be strictly enforced. We do not tolerate any behavior that brings this school into disrepute."');
  // TODO-QSP: dynamic text: With that, you and the other students answer in unison, "Yes, Ms. <<$npc_lastnam...
  scene.text(`With that, you and the other students answer in unison, "Yes, Ms. ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''}."`);
  scene.text('"Very well. I suggest you read the rules in your bedroom. Ignorance will not be accepted as an excuse."');
  scene.text('"With that out of the way, I will now assign your rooms." She consults her clipboard and starts reading out student names, ticking them off as she allocates rooms.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>?" "Here!" you reply, "You've been assigned...
  scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}?" "Here!" you reply, "You've been assigned to room twelve, first floor to the right of the staircase. Do you have any questions? No? Good I will see you in the communal room once you've settled in."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Find your room', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'private';
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Residential Bedroom';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_residence/bedroom.jpg');
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  (s as any).region = 'pushkin';
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).balletqw ?? 0)?.['daystart'] === 0) {
    qspCall(s, 'homes_properties', 'set_home', 'pushkin_ballet_dorm');
    ((s as any).balletqw = (s as any).balletqw ?? {})['daystart'] = ((s as any).daystart ?? 0);
    if (((s as any).week ?? 0) !== 7) {
      (s as any).ballet_day = ((s as any).week ?? 0);
    }
    scene.text('You look around your room that will be the bedroom for the next week, and a small comfortable bed sits in the corner. You have a desk you can study on. In the corner, there\'s a full-size <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027wardrobe\\u0027, \\u0027start\\u0027); return false;">wardrobe</a> with a mirror on one of the doors.');
    scene.text('You start to unpack your suitcase into the wardrobe and settle for the evening before preparing to meet your fellow students.');
    scene.text('On the wall beside the entrance are various instructions for fire evacuation. Alongside these instructions is a sheet of paper with the words <b>Accommodation Rules</b>.');
    scene.actions([
      { label: 'Go meet your classmates', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    dynamicGoto(st, 'prevLoc', 'communal_area');
  } },
      { label: 'Read the rules', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'rules');
  } },
    ]);
  } else {
    if ((((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7)  &&  ((s as any).apparel ?? 0)?.['status'] !== 'sport') {
      scene.text('<b><font color = "red">You need to get dressed for ballet school (wear sports clothes).</font></b>');
    } else {
      scene.text('You enter your room and sit at your desk, wondering what to do next.');
    }
    // TODO-QSP: dynamic text: In the corner is your <a href="exec:gt 'wardrobe', 'start'">wardrobe</a> contain...
    scene.text(`In the corner is your <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027wardrobe\\u0027, \\u0027start\\u0027); return false;">wardrobe</a> containing a <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \\u0027images/\\u0027 + \\u0027__qspDyn\\u0027 + \\u0027/ballet_residence/ballet_blanc.jpg\\u0027; return s; }); return false;">Ballet Blanc</a> for your upcoming assessment and your clothes for the week.`);
    if (((s as any).komp ?? 0) === 1) {
      scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027komp\\u0027, \\u0027start\\u0027); return false;">computer</a> is on your desk.');
    }
    scene.text('<table><tr><td valign="top">');
    // TODO-QSP: func('alarmclock', 'base_alarmclock_text')
    if (((s as any).apparel ?? 0)?.['status'] !== 'nude') {
      scene.actions([
        { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'hallway');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go to the hallway', handler: (st: GameState) => {
    // TODO-QSP: msg '<b><font color = "red">Whilst as a dancer you have less...
  } },
      ]);
    }
    if (((s as any).ballet_day ?? 0) === 3  &&  ((s as any).mayaqw ?? 0)?.['grave'] === 0  &&  (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 20)) {
      scene.actions([
        { label: 'Answer the knock', handler: (st: GameState) => {
    qspCall(st, 'npc_274_init', 'grave');
  } },
      ]);
    } else {
      if (((s as any).ballet_day ?? 0) === 3  &&  ((s as any).hour ?? 0) > 19  &&  ((s as any).mayaqw ?? 0)?.['grave'] === 1) {
        scene.actions([
          { label: 'Another knock', goto: ['npc_274_init', 'post_grave'] },
        ]);
      } else {
        if (((s as any).ballet_day ?? 0) === 3  &&  ((s as any).mayaqw ?? 0)?.['grave'] === 0  &&  ((s as any).hour ?? 0) >= 21) {
          ((s as any).mayaqw = (s as any).mayaqw ?? {})['grave'] = (-1);
        } else {
          if (((s as any).ballet_debug ?? 0) === 1) {
            // TODO-QSP: $ballet_log[] = '<<daystart>> / <<hour>>:<<minut>> - Maya Grave event not triggered.'
          }
        }
      }
    }
    qspCall(s, 'core_library', 'bedroom');
    if (((s as any).week ?? 0) !== 7) {
      if (((s as any).homework_active ?? 0) === 1) {
        // TODO-QSP: gs $loc, 'homework'
      } else {
        scene.actions([
          { label: 'Homework tasks', handler: (st: GameState) => {
    (st as any).homework_active = 1;
    // TODO-QSP: gs $loc, 'homework'
  } },
          { label: 'Read the rules', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'rules');
  } },
          { label: 'Read class schedule', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'class_schedule');
  } },
        ]);
      }
    }
    if (((s as any).ballet_debug ?? 0) === 1) {
      qspCall(s, 'pushkin_ballet_init', 'debug_menu');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Residential Hallway';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/hall.jpg');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'core_library', 'corridor');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).ballet_awol = 0;
  if (((s as any).ballet_day ?? 0) !== ((s as any).week ?? 0)) {
    (s as any).ballet_day = ((s as any).week ?? 0);
  }
  (s as any).nclass = 0;
  qspCall(s, 'shortgs', 'clothing_status');
  if (((s as any).apparel ?? 0)?.['status'] !== 'nude'  &&  (((s as any).apparel ?? 0)?.['status'] === 'sport'  ||  ((s as any).apparel ?? 0)?.['status'] === 'dance')) {
    if (((s as any).hour ?? 0) === 7  &&  ((s as any).minut ?? 0) <= 30  &&  ((s as any).apparel ?? 0)?.['status'] === 'sport') {
      scene.actions([
        { label: '<b>Attend Ballet Classes</b>', goto: ['pushkin_ballet_class', 'start'] },
      ]);
    } else {
      if (((s as any).ballet_day ?? 0) !== 7  &&  ((((s as any).hour ?? 0) === 7  &&  (((s as any).minut ?? 0) > 30  &&  ((s as any).minut ?? 0) <= 59))  ||  (((s as any).hour ?? 0) >=8  &&  ((s as any).hour ?? 0) <= 16))) {
        ((s as any).balletEv = (s as any).balletEv ?? {})['trigger'] = 'late';
        qspCall(s, 'npc_274_init', 'summer_school');
      } else {
        scene.actions([
          { label: 'Leave Residence', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).ballet_awol = 1;
  }, goto: ['pushkin_ballet_center', 'start'] },
        ]);
      }
    }
  } else {
    if (((s as any).apparel ?? 0)?.['status'] === 'nude'  ||  ((s as any).apparel ?? 0)?.['status'] === 'underwear'  ||  ((s as any).apparel ?? 0)?.['status'] === 'bra'  ||  ((s as any).apparel ?? 0)?.['status'] === 'panties') {
    }
  }
  if (((s as any).birthday_party ?? 0)?.['events'] === 0  &&  ((s as any).week ?? 0) === 2  &&  (((s as any).hour ?? 0) > 16  &&  ((s as any).hour ?? 0) < 18)) {
    // TODO-QSP: gt 'pushkin_ballet_evt', 'res_events', 'birthday', 'card'
  } else {
    scene.actions([
      { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
      { label: 'Enter the communal room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'communal_area');
  } },
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_class', 'shower'] },
      { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'kitchen');
  } },
    ]);
  }
  if (((s as any).ballet_day ?? 0) === 7) {
    // TODO-QSP: dynamic text: The hall is bustling with various students settling into their rooms. A few of t...
    scene.text(`The hall is bustling with various students settling into their rooms. A few of them wave or smile to greet you as you pass by. You see Madam ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''} at the end of the hall, keeping an eye on the students and ready to provide assistance.`);
  } else {
    (s as any).amb_event = Math.floor(Math.random() * 4) + 1;
    if (((s as any).amb_event ?? 0) === 1) {
      scene.text('You enter the elegant hallway of your residence, and hear music coming from one of the rooms to the side of you.');
    } else {
      if (((s as any).amb_event ?? 0) === 2) {
        scene.text('As you enter the hallway you hear some giggling and laughter coming from one of the girls\' rooms.');
      } else {
        if (((s as any).amb_event ?? 0) === 3) {
          scene.text('As you leave the room, you see a student dashing down the corridor, almost bumping into you. You hear them say "sorry" before vanishing into one of the rooms.');
        } else {
          if (((s as any).amb_event ?? 0) === 4) {
            if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 21) {
              scene.text('You hear someone trying to play the piano at this hour. Before you can complain, you hear the piano being slammed shut, and you wince. A few moments later, two girls emerge from the communal room, arguing heatedly.');
            } else {
              qspCall(s, 'mood', 'raise', 'tiny');
              scene.text('You hear someone playing the piano in the communal room. You don\'t recognize the piece being played, but its soothing melody relaxes you.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMayaRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'private';
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = '' + ((s as any).npc_firstname ?? 0)?.['A274'] + ' Room';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/maya_room.jpg');
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  // TODO-QSP: dynamic text: <<$npc_firstname['A274']>>'s room closely resembles your own. Her wardrobe is op...
  scene.text(`${((s as any).npc_firstname ?? 0)?.['A274'] ?? ''}'s room closely resembles your own. Her wardrobe is open, and you see her collection of tutus hanging from the rails. On her desk there are several books, including an open poetry book. A quick glance reveals the page title "Like a White Stone" by Akhmatova.`);
  scene.text('Next to it is an old picture of a woman in a park with a black ribbon in the corner.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'hallway');
  } },
  ]);
  scene.build();
}

function enterCommunalArea(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Communal Room';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/communal.jpg');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).week ?? 0) === 2  &&  (((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) <= 17)) {
    qspCall(s, 'pushkin_ballet_evt', 'res_events', 'party');
  }
  if (((s as any).week ?? 0) === 7  &&  ((s as any).balletqw ?? 0)?.['res_mg'] === 0) {
    qspCall(s, 'pushkin_ballet_evt', 'res_events', 'introductions');
  } else {
    if ((((s as any).birthday_party ?? 0)?.['events'] > 0  &&  ((s as any).birthday_party ?? 0)?.['events'] <= 3)  &&  (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17)) {
      qspCall(s, 'pushkin_ballet_evt', 'res_events', 'prep');
    } else {
      if ((((s as any).birthday_party ?? 0)?.['events'] === 2  ||  ((s as any).birthday_party ?? 0)?.['events'] === 4)  &&  ((((s as any).hour ?? 0) >= 18  &&  ((s as any).minut ?? 0) >= 30)  ||  (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 21))) {
        // TODO-QSP: gt 'pushkin_ballet_evt', 'res_events', 'birthday' , 'party'
      } else {
        scene.text('WIP Progress - no content');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'hallway');
  } },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Residential Kitchen';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_residence/kitchen.jpg');
  (s as any).location_type = 'private';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'core_library', 'kitchen', 'full');
  if (((s as any).week ?? 0) === 2  &&  (((s as any).birthday_party ?? 0)?.['events'] === 0  &&  (((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 17))) {
    qspCall(s, 'pushkin_ballet_evt', 'res_events', 'kitchen_birthday');
  } else {
    scene.text('You enter the kitchen area and you\'re grateful that the school provides the essentials for cooking and snacks for the pupils to eat during the evenings.');
  }
  if (((s as any).hour ?? 0) > 16) {
    scene.actions([
      { label: 'Eat a light meal', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
      { label: 'Eat an Evening Meal', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
    ]);
  } else {
    if ((((s as any).hour ?? 0) > 4  &&  ((s as any).hour ?? 0) < 8)  &&  ((s as any).mayaqw ?? 0)?.['grave'] === 4  &&  ((s as any).sharedmeal ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Have breakfast with ' + String(((s as any).npc_firstname ?? 0)?.['A274'] ?? '' ?? ''), handler: (st: GameState) => {
    (s as any).sharedmeal = ((s as any).daystart ?? 0);
    qspCall(s, 'food', 'family_meals', 'breakfast');
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).npc_img_path ?? 0)?.['A274'] ?? ''}/274-1.jpg`);
    // TODO-QSP: dynamic text: You encounter <<$npc_firstname['A274']>> as she prepares her breakfast. You lend...
    scene.text(`You encounter ${((s as any).npc_firstname ?? 0)?.['A274'] ?? ''} as she prepares her breakfast. You lend a hand with the preparations and engage in a conversation about your upcoming lessons while enjoying your morning meal.`);
    scene.actions([
      { label: 'Finish breakfast', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'kitchen');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) > 4  &&  ((s as any).hour ?? 0) < 8) {
        scene.actions([
          { label: 'Eat breakfast', handler: (st: GameState) => {
    scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_residence/breakfast.jpg');
    qspCall(s, 'food', 'family_meals', 'breakfast');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    scene.text('You look in the fridge for some fruit and then make some porridge for breakfast.');
    scene.actions([
      { label: 'Finish breakfast', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'kitchen');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'prevLoc', 'hallway');
  } },
  ]);
  scene.build();
}

function enterWardenRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'private';
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Wardens Residence';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_residence/warden.jpg');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).locArgs?.[1] ?? 0) === 'reputation') {
    // TODO-QSP: "That Talk"
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).ballet_awol = 0;
    dynamicGoto(st, 'prevLoc', 'hallway');
  } },
  ]);
  scene.build();
}

function enterRules(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('1) No males are allowed in the accommodation block.');
  // TODO-QSP: dynamic text: 2) All residents must return to the block by '+func('time', 'get_time_string', 2...
  scene.text('2) All residents must return to the block by 21:00. No exceptions. If you are late, you will have to report to the duty warden.');
  scene.text('3) No smoking, drinking, or drug use is allowed in the accommodation. If you are caught, you will face immediate dismissal from the school.');
  // TODO-QSP: dynamic text: 4) Breakfast is from '+func('time', 'get_time_string', 6, 0)+' to '+func('time',...
  scene.text('4) Breakfast is from 6:00 to 7:00.');
  scene.text('5) All rooms must be kept clean and tidy.');
  scene.text('6) Valuables can be left with the duty warden if required. All thefts or problems are to be reported immediately.');
  scene.text('7) You are to follow the duty warden\'s instructions in an emergency.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterClassSchedule(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('Monday to Friday:');
  scene.text('0730 - Depart residence.');
  scene.text('0800 - 0900: Pilates exercise class.');
  scene.text('0900 - 1100: Group barre work and pose.');
  scene.text('1100 - 1200: Make up theory.');
  scene.text('1200 - 1300: Lunch period.');
  scene.text('1300 - 1600: Pas de Deux and solo barre.');
  scene.text('1600 - 1700: Ballet and musical theory.');
  scene.text('Saturday:');
  scene.text('0730 - Depart residence.');
  scene.text('0800 - 1200: Graded assessment.');
  scene.text('Transportation will be provided after the assessment and you will be informed of your results by letter in two weeks.');
  scene.text('Rules:');
  scene.text('Whilst attending classes students are expected dressed in sports clothing, preferably a leotard.');
  scene.text('You must also set your hair in a braid or a bun, no other styles are acceptable.');
  scene.text('Make up must be worn at all times, and you must be clean and presentable during classes. You will have access to showers during the day.');
  scene.text('The school operates a zero tolerance policy to all drugs and alcohol. If you are under the influence or suspected of taking substances you will face disciplinary action.');
  // TODO-QSP: dynamic text: If you require assistance at any point you can talk to the residence warden Mada...
  scene.text(`If you require assistance at any point you can talk to the residence warden Madam ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''} or any teacher.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Look away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterHomework(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 16  &&  ((s as any).week ?? 0) !== 7) {
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] >= 9) {
      scene.actions([
        { label: 'Practice make-up (60m)', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'make_up');
  } },
      ]);
    }
    if (((s as any).feet_track ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Take care of your feet (30m)', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'feetcare');
  } },
      ]);
    }
    scene.actions([
      { label: 'Barre Practice (30m)', goto: ['pushkin_ballet_evt', 'barre_exercise'] },
      { label: 'Study (60m)', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'study');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Listen to the radio (30m)', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'radio');
  } },
    { label: 'Back', handler: (st: GameState) => {
    (st as any).homework_active = 0;
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterRadio(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 5) + 1);
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) - (Math.floor(Math.random() * 10) + 1);
  if (((s as any).ballet_day ?? 0) >= 1  &&  ((s as any).week ?? 0) !== 7) {
    (s as any).instrmusic_exp = ((s as any).instrmusic_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 3) + 1);
    ((s as any).ballet_homework = (s as any).ballet_homework ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_homework[String((s as any).week ?? 0)] ?? 0) + (1);
    ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['homework'] = ((s as any).ballet_grade_score['homework'] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)]);
  }
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Radio';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_residence/russian_radio.jpg');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('You listen to the radio for half an hour, taking notes of the performance with the musical concepts from your earlier lessons. Then, you close your eyes and start to relax humming along to the familiar music after a while. ');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn the radio off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterFeetcare(s: GameState, scene: SceneBuilder): void {
  (s as any).mood = ((s as any).mood ?? 0) + (Math.floor(Math.random() * 10) + 1);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (15);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).feet_track = ((s as any).daystart ?? 0);
  (s as any).ballet_grade_health = ((s as any).ballet_grade_health ?? 0) + (1);
  qspCall(s, 'stat', '');
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Feet Care';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_events/feet_soak.jpg');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('After the long day at the ballet class, you diligently inspect your calves and feet for injuries, gently massaging Arnica Gel onto your calves and ankles to alleviate stiffness and swelling. Next, you carefully examine your calluses and check for any blisters.');
  scene.text('With your checks completed, you reach for your exercise band, commencing a series of foot-stretching exercises, culminating in a soothing massage using a tennis ball on your calves and soles.');
  scene.text('You take a brief moment to unwind before donning your foot warmers, making your way to the kitchen to fetch cold water and investigate the freezer for ice. Fortunately, the school has stored ice cube trays. After replenishing the trays, you fill a bowl and carry it back to your room.');
  scene.text('Seated on your bed, you pour into the bowl the ice cubes and chilled water into a foot bath. Adding a touch of Epsom Salts, you brace yourself as you immerse your feet in the chilling water. Your body shudders briefly from the shock, but after a few moments, the sensation subsides. You close your eyes and attempt to relax.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish feet care', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterStudy(s: GameState, scene: SceneBuilder): void {
  (s as any).mood = ((s as any).mood ?? 0) - (Math.floor(Math.random() * 10) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).ballet_homework = (s as any).ballet_homework ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_homework[String((s as any).week ?? 0)] ?? 0) + (1);
  ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['homework'] = ((s as any).ballet_grade_score['homework'] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)]);
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Ballet Studies';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + 'ballet_residence/study.jpg');
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('You gather your school books and notebook to begin studying ballet movements, history, and musical theory, diligently taking notes as you progress. After an hour of reading, you notice your eyes beginning to glaze over. Recognizing the need for a break, you decide to stand up and stretch.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish studying', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterMakeUp(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).ballet_homework = (s as any).ballet_homework ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_homework[String((s as any).week ?? 0)] ?? 0) + (1);
  ((s as any).ballet_grade_score = (s as any).ballet_grade_score ?? {})['homework'] = ((s as any).ballet_grade_score['homework'] ?? 0) + (((s as any).ballet_homework ?? 0)?.[String((s as any).week ?? 0)]);
  qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 3) + 1);
  if (((s as any).pcs_makupskl ?? 0) <= 30) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (9);
    (s as any).pcs_makeup = 0;
  } else {
    if (((s as any).pcs_makupskl ?? 0) <= 69) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (5);
      (s as any).pcs_makeup = 3;
    } else {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['cosmetics'] = ((s as any).mc_inventory['cosmetics'] ?? 0) - (3);
      (s as any).pcs_makeup = 5;
    }
  }
  qspCall(s, 'stat', '');
  ((s as any).setloc = (s as any).setloc ?? {})['StageTitle'] = 'Make Up Practice';
  scene.img('images/' + '' + ((s as any).setloc ?? 0)?.['imagepath'] + '/ballet_events/make-up.jpg');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).pcs_makupskl ?? 0) <= 30) {
    scene.text('You struggle to master the basics of applying your look, wasting a lot of your expensive make-up. You begin to wonder if you need to get help with practicing.');
  } else {
    if (((s as any).pcs_makupskl ?? 0) <= 69) {
      scene.text('You try to replicate the deft strokes that you were taught in school as you apply the basic foundations and contouring. You struggle briefly with the eyelashes before they settle in place. It takes you a few attempts to finalise the blending of your final look but at the end of your practice you are happy with the results even though it won\'t win any awards.');
    } else {
      scene.text('You artfully apply the make-up look with a quick, practiced ease that would leave most girls jealous with envy. The final look is almost flawless and you criticaly review the final result trying to find any imperfections.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practicing', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterWarden(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 6)  &&  ((s as any).ballet_awol ?? 0) === 1) {
    if (((s as any).school_curfew ?? 0) > 0) {
      ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (2);
    }
    // TODO-QSP: dynamic text: "Pushkin Ballet Residential Block, how may I help you?", you hear Madam <<$npc_l...
    scene.text(`"Pushkin Ballet Residential Block, how may I help you?", you hear Madam ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''}'s icy voice through the intercom.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, can I be let in please?", there's a few s...
    scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, can I be let in please?", there's a few seconds pause.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, you will see me in my office. Now." You c...
    scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, you will see me in my office. Now." You can swear the temperature around you just plummeted a few degrees and the door was buzzed open.`);
    qspGoto(s, 'pushkin_ballet_res', 'warden_room');
  } else {
    if ((((s as any).hour ?? 0) >= 17  ||  ((s as any).hour ?? 0) < 21 )  &&  ((s as any).ballet_awol ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Pushkin Ballet Residential Block, how may I help you?", you hear Madam <<$npc_l...
      scene.text(`"Pushkin Ballet Residential Block, how may I help you?", you hear Madam ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''}'s voice through the intercom.`);
      // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, can I be let in please?", there's a few s...
      scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, can I be let in please?", there's a few seconds pause and you hear the door being buzzed open.`);
      qspGoto(s, 'pushkin_ballet_res', 'hallway');
    } else {
      if (((s as any).ballet_awol ?? 0) === 1) {
        if (((s as any).school_curfew ?? 0) > 0) {
          ((s as any).ballet_grade_discipline = (s as any).ballet_grade_discipline ?? {})[String((s as any).week ?? 0)] = ((s as any).ballet_grade_discipline[String((s as any).week ?? 0)] ?? 0) - (5);
        }
        // TODO-QSP: dynamic text: "Pushkin Ballet Residential Block, how may I help you?", you hear Madam <<$npc_l...
        scene.text(`"Pushkin Ballet Residential Block, how may I help you?", you hear Madam ${((s as any).npc_lastname ?? 0)?.['A286'] ?? ''}'s voice through the intercom.`);
        // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, can I be let in please?", there's a few s...
        scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, can I be let in please?", there's a few seconds pause.`);
        // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, where the hell have you been? Get in here...
        scene.text(`"${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}, where the hell have you been? Get in here. Now.", you gulp at her voice and with trepidation make your way to her office.`);
        qspGoto(s, 'pushkin_ballet_res', 'warden_room');
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        qspCall(s, 'stat', '');
        scene.text('You press the buzzer but there\'s no response.');
        scene.actions([
          { label: 'Return', goto: ['pushkin', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_start_evt':
      enterCheckStartEvt(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'bedroom':
      enterBedroom(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'maya_room':
      enterMayaRoom(s, scene);
      break;
    case 'communal_area':
      enterCommunalArea(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'warden_room':
      enterWardenRoom(s, scene);
      break;
    case 'rules':
      enterRules(s, scene);
      break;
    case 'class_schedule':
      enterClassSchedule(s, scene);
      break;
    case 'homework':
      enterHomework(s, scene);
      break;
    case 'radio':
      enterRadio(s, scene);
      break;
    case 'feetcare':
      enterFeetcare(s, scene);
      break;
    case 'study':
      enterStudy(s, scene);
      break;
    case 'make_up':
      enterMakeUp(s, scene);
      break;
    case 'warden':
      enterWarden(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pushkin_ballet_res: LocationDef = {
  name: 'pushkin_ballet_res',
  title: '<center><h1>Welcome and Introduction</h1></center>',
  region: 'pushkin',
  locationType: 'public_indoors',
  enter: enter,
};
