import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCheckStartEvt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] === 'dancer'  &&  ((s as any).balletqw ?? 0)?.['letter'] === 1  &&  (((s as any).daystart ?? 0) === 185  &&  ((s as any).hour ?? 0) === 16)) {
    scene.actions([
      { label: '<b>Travel to the ballet school</b>', goto: ['pushkin_ballet_res', 'start'] },
    ]);
  }
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'array', 'remove_element', 'balletqw', 'letter');
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Welcome and Introduction</h1></center>');
  scene.img(`${((s as any).npc_img_path ?? 0)?.['\'A286\'']}/286.jpg`);
  scene.text('As you and your group enter the halls for the first time, you are greeted by a matronly-looking woman who will be your warden during your stay.');
  // TODO-QSP: dynamic text: "Welcome, students, to your first night at these halls. I'm your warden, <<$npc_...
  scene.text(`"Welcome, students, to your first night at these halls. I'm your warden, ${((s as any).npc_firstname ?? 0)?.['A286']} ${((s as any).npc_lastname ?? 0)?.['A286']}. If you have any problems or need assistance, you can find me in the room to the right." She gestures towards a door with a brass plaque that reads "Warden".`);
  scene.text('"I will go through the student roster, and you will respond each evening. You can also find a list of rules in your bedroom, which will be strictly enforced. We do not tolerate any behavior that brings this school into disrepute."');
  // TODO-QSP: dynamic text: With that, you and the other students answer in unison, "Yes, Ms. <<$npc_lastnam...
  scene.text(`With that, you and the other students answer in unison, "Yes, Ms. ${((s as any).npc_lastname ?? 0)?.['A286']}."`);
  scene.text('"Very well. I suggest you read the rules in your bedroom. Ignorance will not be accepted as an excuse."');
  scene.text('"With that out of the way, I will now assign your rooms." She consults her clipboard and starts reading out student names, ticking them off as she allocates rooms.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>?" "Here!" you reply, "You've been assigned...
  scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}?" "Here!" you reply, "You've been assigned to room twelve, first floor to the right of the staircase. Do you have any questions? No? Good I will see you in the communal room once you've settled in."`);
  scene.actions([
    { label: 'Find your room', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'bedroom');
  } },
  ]);
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  (s as any).setloc['StageTitle'] = 'Residential Bedroom';
  (s as any).setloc['StageImage'] = '<<$setloc[\'imagepath\']>>ballet_residence/bedroom.jpg';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_res', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).balletqw ?? 0)?.['daystart'] === 0) {
    qspCall(s, 'homes_properties', 'set_home', 'pushkin_ballet_dorm');
    (s as any).balletqw['daystart'] = ((s as any).daystart ?? 0);
    if (((s as any).week ?? 0) !== 7) {
      (s as any).ballet_day = ((s as any).week ?? 0);
    }
    scene.text('You look around your room that will be the bedroom for the next week, and a small comfortable bed sits in the corner. You have a desk you can study on. In the corner, there\'s a full-size <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> with a mirror on one of the doors.');
    scene.text('You start to unpack your suitcase into the wardrobe and settle for the evening before preparing to meet your fellow students.');
    scene.text('On the wall beside the entrance are various instructions for fire evacuation. Alongside these instructions is a sheet of paper with the words <b>Accommodation Rules</b>.');
    scene.actions([
      { label: 'Go meet your classmates', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    dynamicGoto(st, 'loc', 'communal_area');
  } },
      { label: 'Read the rules', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'rules');
  } },
    ]);
  } else {
    if ((((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7)  &&  ((s as any).apparel ?? 0)?.['status'] !== 'sport') {
      scene.text('<b><font color = "red">You need to get dressed for ballet school (wear sports clothes).</font></b>');
    } else {
      scene.text('You enter your room and sit at your desk, wondering what to do next.');
    }
    // TODO-QSP: dynamic text: In the corner is your <a href="exec:gt 'wardrobe', 'start'">wardrobe</a> contain...
    scene.text(`In the corner is your <a href="exec:gt 'wardrobe', 'start'">wardrobe</a> containing a <a href="exec:view'images/${((s as any).setloc ?? 0)?.['imagepath']}/ballet_residence/ballet_blanc.jpg'">Ballet Blanc</a> for your upcoming assessment and your clothes for the week.`);
    if (((s as any).komp ?? 0) === 1) {
      scene.text('Your <a href="exec: gt \'komp\',\'start\'">computer</a> is on your desk.');
    }
    scene.text('<table><tr><td valign="top">');
    // TODO-QSP: func('alarmclock', 'base_alarmclock_text')
    if (((s as any).apparel ?? 0)?.['status'] !== 'nude') {
      scene.actions([
        { label: 'Go to the hallway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    dynamicGoto(st, 'loc', 'hallway');
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
      if (((s as any).ballet_day ?? 0) === 3  &&  ((s as any).mayaqw ?? 0)?.['grave'] === 0  &&  ((s as any).hour ?? 0) >= 21) {
        (s as any).mayaqw['grave'] = (-1);
      } else {
        // TODO-QSP: $ballet_log[] = '<<daystart>> / <<hour>>:<<minut>> - Maya Grave event not triggered.'
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
    dynamicGoto(st, 'loc', 'rules');
  } },
            { label: 'Read class schedule', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'class_schedule');
  } },
          ]);
        }
      }
      if (((s as any).ballet_debug ?? 0) === 1) {
        qspCall(s, 'pushkin_ballet_init', 'debug_menu');
      }
      scene.actions([
        { label: 'Another knock', goto: ['npc_274_init', 'post_grave'] },
      ]);
    }
  }
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
    default:
      enterCheckStartEvt(s, scene);
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
