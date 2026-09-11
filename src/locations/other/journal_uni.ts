import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterProfessors(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Professors & Facility</h2></center>');
  qspCall(s, 'journal_NPC_information', 'A254');
  qspCall(s, 'journal_NPC_information', 'A255');
  qspCall(s, 'journal_NPC_information', 'A256');
  qspCall(s, 'journal_NPC_information', 'A269');
  qspCall(s, 'journal_NPC_information', 'A270');
  qspCall(s, 'journal_NPC_information', 'A271');
  qspCall(s, 'journal_uni', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'uni'] },
  ]);
  scene.build();
}

function enterPavlovskUniversityStudents(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk University Students</h2></center>');
  scene.text('Your fellow students that came from Pavlovsk to attend university.');
  qspCall(s, 'journal_NPC_information', 'A149', 'uni');
  qspCall(s, 'journal_NPC_information', 'A1', 'uni');
  qspCall(s, 'journal_NPC_information', 'A22', 'uni');
  qspCall(s, 'journal_NPC_information', 'A23', 'uni');
  qspCall(s, 'journal_NPC_information', 'A17', 'uni');
  qspCall(s, 'journal_NPC_information', 'A144', 'uni');
  qspCall(s, 'journal_NPC_information', 'A155', 'uni');
  qspCall(s, 'journal_NPC_information', 'A15', 'uni');
  qspCall(s, 'journal_NPC_information', 'A147', 'uni');
  qspCall(s, 'journal_NPC_information', 'A139', 'uni');
  qspCall(s, 'journal_NPC_information', 'A146', 'uni');
  qspCall(s, 'journal_NPC_information', 'A16', 'uni');
  qspCall(s, 'journal_NPC_information', 'A152', 'uni');
  qspCall(s, 'journal_NPC_information', 'A140', 'uni');
  qspCall(s, 'journal_NPC_information', 'A2', 'uni');
  qspCall(s, 'journal_NPC_information', 'A18', 'uni');
  qspCall(s, 'journal_NPC_information', 'A14', 'uni');
  qspCall(s, 'journal_NPC_information', 'A165', 'uni');
  qspCall(s, 'journal_NPC_information', 'A153', 'uni');
  qspCall(s, 'journal_NPC_information', 'A12', 'uni');
  qspCall(s, 'journal_NPC_information', 'A6', 'uni');
  qspCall(s, 'journal_NPC_information', 'A13', 'uni');
  qspCall(s, 'journal_NPC_information', 'A19', 'uni');
  qspCall(s, 'journal_NPC_information', 'A25', 'uni');
  qspCall(s, 'journal_NPC_information', 'A4', 'uni');
  qspCall(s, 'journal_NPC_information', 'A142', 'uni');
  qspCall(s, 'journal_NPC_information', 'A7', 'uni');
  qspCall(s, 'journal_NPC_information', 'A159', 'uni');
  qspCall(s, 'journal_uni', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'uni'] },
  ]);
  scene.build();
}

function enterUniversityStudents(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Pavlovsk University Students</h2></center>');
  scene.text('Students who are attending the university.');
  qspCall(s, 'journal_NPC_information', 'A82', 'uni');
  qspCall(s, 'journal_NPC_information', 'A83', 'uni');
  qspCall(s, 'journal_NPC_information', 'A77', 'uni');
  qspCall(s, 'journal_NPC_information', 'A242', 'uni');
  qspCall(s, 'journal_NPC_information', 'A243', 'uni');
  qspCall(s, 'journal_NPC_information', 'A244', 'uni');
  qspCall(s, 'journal_NPC_information', 'A245', 'uni');
  qspCall(s, 'journal_NPC_information', 'A246', 'uni');
  qspCall(s, 'journal_NPC_information', 'A84', 'uni');
  qspCall(s, 'journal_NPC_information', 'A220', 'uni');
  qspCall(s, 'journal_NPC_information', 'A247', 'uni');
  qspCall(s, 'journal_NPC_information', 'A267', 'uni');
  qspCall(s, 'journal_NPC_information', 'A268', 'uni');
  qspCall(s, 'journal_uni', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'uni'] },
  ]);
  scene.build();
}

function enterFormerPavlovskStudents(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Cool kids</h2></center>');
  scene.text('The former cool kids that didn\'t go to the university in Saint Petersburg.');
  qspCall(s, 'journal_NPC_information', 'A148', 'uni');
  scene.text('<center><h2>Jocks</h2></center>');
  scene.text('The former jocks that didn\'t go to the university in Saint Petersburg.');
  qspCall(s, 'journal_NPC_information', 'A3', 'uni');
  qspCall(s, 'journal_NPC_information', 'A8', 'uni');
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
    qspCall(s, 'journal_NPC_information', 'A5', 'uni');
  }
  qspCall(s, 'journal_NPC_information', 'A150', 'uni');
  qspCall(s, 'journal_NPC_information', 'A141', 'uni');
  scene.text('<center><h2>Nerds</h2></center>');
  scene.text('The former nerds that didn\'t go to the university in Saint Petersburg.');
  qspCall(s, 'journal_NPC_information', 'A151', 'uni');
  qspCall(s, 'journal_NPC_information', 'A240', 'uni');
  scene.text('<center><h2>Gopniks</h2></center>');
  scene.text('The former gopniks that didn\'t go to the university in Saint Petersburg.');
  qspCall(s, 'journal_NPC_information', 'A9', 'uni');
  qspCall(s, 'journal_NPC_information', 'A10', 'uni');
  qspCall(s, 'journal_NPC_information', 'A11', 'uni');
  qspCall(s, 'journal_NPC_information', 'A154', 'uni');
  qspCall(s, 'journal_NPC_information', 'A156', 'uni');
  qspCall(s, 'journal_NPC_information', 'A157', 'uni');
  qspCall(s, 'journal_NPC_information', 'A158', 'uni');
  qspCall(s, 'journal_NPC_information', 'A145', 'uni');
  qspCall(s, 'journal_NPC_information', 'A20', 'uni');
  qspCall(s, 'journal_NPC_information', 'A21', 'uni');
  qspCall(s, 'journal_NPC_information', 'A24', 'uni');
  qspCall(s, 'journal_NPC_information', 'A143', 'uni');
  qspCall(s, 'journal_NPC_information', 'A189', 'uni');
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
    scene.text('<center><h2>Outcasts</h2></center>');
    scene.text('The former outcasts that didn\'t go to the university in Saint Petersburg.');
    qspCall(s, 'journal_NPC_information', 'A5', 'uni');
  }
  qspCall(s, 'journal_uni', 'leaveactions');
  scene.actions([
    { label: 'Go back', goto: ['journal', 'uni'] },
  ]);
  scene.build();
}

function enterLeaveactions(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Put your notebook down', handler: (st: GameState) => {
    (s as any).jclose = 1;
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'professors':
      enterProfessors(s, scene);
      break;
    case 'pavlovsk_university_students':
      enterPavlovskUniversityStudents(s, scene);
      break;
    case 'university_students':
      enterUniversityStudents(s, scene);
      break;
    case 'former_pavlovsk_students':
      enterFormerPavlovskStudents(s, scene);
      break;
    case 'leaveactions':
      enterLeaveactions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const journal_uni: LocationDef = {
  name: 'journal_uni',
  title: '<center><h2>Professors & Facility</h2></center>',
  region: 'other',
  enter: enter,
};
