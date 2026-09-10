import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'init');
  (s as any).setloc['StageTitle'] = 'Ballet Secrets';
  (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '/((s as any).ballet ?? 0)-((s as any).shop ?? 0)-((s as any).window?.jpg ?? 0)';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) < 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 17) {
    scene.text('You enter the shop getting greeted by a riot of displays showcasing ballet and other dance equipment. A woman is sewing something in the corner and glances at you before continuing.');
    if (((s as any).balletqw ?? 0)?.['ballet_secrets'] === 1) {
      scene.actions([
        { label: 'Approach the woman', goto: ['pushkin_ballet_secrets', 'first_visit'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave the shop', goto: ['pushkin_sq', ''] },
        { label: 'Enter the fitness studio', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
  } else {
    scene.text('You look at the shop window and realize it\'s closed, there is a security door to the left of you that allows you access the studio areas if you are a member.');
    if (((s as any).balletqw ?? 0)?.['membership'] >= ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Swipe membership card', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'reception'] },
      ]);
    }
    scene.actions([
      { label: 'Return to Okhlopkov Square', goto: ['pushkin_sq', ''] },
    ]);
  }
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'shop') {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pushkin_sq', ''] }]);
    // TODO-QSP: gt $ARGS[1], $ARGS[2]
  }
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  (s as any).balletqw['ballet_secrets_visit'] = 1;
  (s as any).balletqw['shoe_order'] = ((s as any).daystart ?? 0) + 14;
  (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '/((s as any).ballet_secrets_fitting_1?.jpg ?? 0)';
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'stat', '');
  scene.text('You are greeted by a middle aged woman. "Hello, how may I help you?" She asks politely.');
  // TODO-QSP: dynamic text: "Hello, I am <<$pcs_firstname>> <<$pcs_lastname>>. I am part of the ballet schoo...
  scene.text(`"Hello, I am ${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}. I am part of the ballet school intake." you give her a smile and hand over the school's letter as proof.`);
  scene.text('The woman smiles warmly, "Ah you are the new students for this year?" she claps her hands and then takes yours, "Come, come we must measure your feet and order your shoes"');
  scene.text('Before you say anything she\'s dragging you through the shop towards the back we are greeted by a wall of shoes and there are pictures on the wall signed by dancers with shoes next to them. You look at the woman.');
  scene.text('"Yes, they are all dancers who are or have been clients of our establishment", she noticed your gaze and explained with pride."We will only provide the best for the school."');
  scene.text('"But where are my manners I am Darya Pushkina, I am the owner of this shop and facilies" she exclaims, "now to your fitting grabbing a tape measure and fitting tools for your feet"');
  scene.text('For the next hour, Madam Pushkina bombards you with questions of whether you want leather or cotton fabric, how many satin shoes and a myriad other questions before she finally relents.');
  scene.text('"Of course, as you are aware the school is sponsoring these costs, but only for the first year she says and you will need to manage your own equipment after this.", Madame Pushkina advises.');
  // TODO-QSP: dynamic text: "Is there anything else you need? No? Good, I will see you again in two weeks fo...
  scene.text(`"Is there anything else you need? No? Good, I will see you again in two weeks for your final shoe fitting. I would like to extend my congratulations and wish you a successful career Ms. ${((s as any).pcs_lastname ?? 0)}."`);
  scene.actions([
    { label: 'Leave', goto: ['pushkin_sq', ''] },
    { label: 'Return to shop', goto: ['pushkin_ballet_secrets', 'init'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_secrets', 'reception');
  (s as any).setloc['StageTitle'] = 'Ballet Secrets - Reception';
  (s as any).setloc['StageImage'] = ((s as any).setloc ?? 0)?.['imagepath'] + '/((s as any).reception?.jpg ?? 0)';
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('As you enter you are greeted warmly by the gym staff. The gym has an industrial feel reflecting the building being converted from an old factory.');
  scene.text('There is a <a href="exec: gt \'beverage\', \'watercooler\'">drinking fountain</a> near the doors to the gym hall to refill your water bottle.');
  if (((s as any).apparel ?? 0)?.['status'] !== 'nude') {
    scene.actions([
      { label: 'Leave the studio', handler: (st: GameState) => {
    // TODO-QSP: gt 'pushkin_ballet_secrets', 'exit', 'pushkin'
  } },
      { label: 'Return to shop', handler: (st: GameState) => {
    // TODO-QSP: gt 'pushkin_ballet_secrets', 'exit', 'shop'
  } },
    ]);
  }
  if (((s as any).balletqw ?? 0)?.['membership'] === 0  ||  ((s as any).balletqw ?? 0)?.['membership'] < ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Discuss membership', goto: ['pushkin_ballet_secrets', 'enrol'] },
    ]);
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      scene.text('You feel too tired to participate in a class.');
    } else {
      scene.text('You are too hungry to participate in a class.');
      if (((s as any).pcs_hydra ?? 0) < 20) {
        scene.text('You are too thirsty to participate in a class.');
      } else {
        scene.actions([
          { label: 'Attend a ballet class (2 hr)', goto: ['pushkin_ballet_secrets', 'ballet_courses'] },
          { label: 'Attend a yoga class (1 hr)', goto: ['pushkin_ballet_secrets', 'yoga_courses'] },
        ]);
      }
      if (((s as any).hour ?? 0) >= 16) {
        // TODO-QSP: dynamic text: All the evening classes have started today, you need to be here before '+func('t...
        scene.text('All the evening classes have started today, you need to be here before \'+func(\'time\', \'get_time_string\', 16, 0)+\' to ensure you can attend.');
      }
    }
  }
  scene.actions([
    { label: 'Changing rooms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pushkin_ballet_secrets', 'changing_room'] },
    { label: 'Visit the café', goto: ['pushkin_ballet_secrets', 'cafe'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    default:
      enterInit(s, scene);
      break;
  }
}

export const pushkin_ballet_secrets: LocationDef = {
  name: 'pushkin_ballet_secrets',
  title: 'You enter the shop getting greeted by a riot of displays sho',
  region: 'pushkin',
  locationType: 'public_indoors',
  locclass: 'changingroom',
  description: ['You enter the shop getting greeted by a riot of displays showcasing ballet and other dance equipment. A woman is sewing something in the corner and glances at you before continuing.'],
  enter: enter,
};
