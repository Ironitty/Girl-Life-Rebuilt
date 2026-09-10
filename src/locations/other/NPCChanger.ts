import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).n = 1;
  (s as any).o = 10;
  qspCall(s, 'NPCChanger', 'NPCLoop');
  scene.build();
}

function enterNPCLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'obj_din', 'cheattabs', 'NPCs');
  scene.text('<center><h2>Cheat Menu - NPCs - NPC Editor</h2></center>');
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td width="400" cellspacing="0" cellpadding="20" valign="top">');
  scene.text('*** THIS IS A WORK IN PROGRESS ***');
  if (((s as any).n ?? 0) === 0) {
    (s as any).n = 1;
    (s as any).o = 10;
  }
  // TODO-QSP: :LoopNPC
  if (((s as any).o ?? 0) > ((s as any).aarraynumber ?? 0)) {
    (s as any).o = ((s as any).aarraynumber ?? 0);
  }
  if (((s as any).n ?? 0) <= ((s as any).o ?? 0)) {
    qspCall(s, 'NPCChanger', 'npcdisplay');
    (s as any).n = ((s as any).n ?? 0) + (1);
    // TODO-QSP: jump 'LoopNPC'
  }
  scene.text('<hr>');
  // TODO-QSP: *p '<a href="exec:gt ''NPCChanger'', ''next10'' ">Next 10</a> '
  // TODO-QSP: *p '<a href="exec:gt ''NPCChanger'', ''back10'' ">Previous 10</a> '
  // TODO-QSP: *p '<a href="exec:gt ''NPCChanger'', ''next50'' ">Skip 50</a> '
  // TODO-QSP: *p '<a href="exec:gt ''NPCChanger'', ''back50'' ">Back 50</a> '
  // TODO-QSP: *p '<a href="exec:gt ''NPCChanger'', ''selection'' ">Select an NPC to modify</a>'
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Go Back', goto: ['cheatmenu_din', 'npcs'] },
  ]);
  scene.build();
}

function enterNext10(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) + (10);
  (s as any).n = (((s as any).o ?? 0) - 10);
  qspCall(s, 'NPCChanger', 'NPCLoop');
  scene.build();
}

function enterNext50(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) + (50);
  (s as any).n = (((s as any).o ?? 0) - 10);
  qspCall(s, 'NPCChanger', 'NPCLoop');
  scene.build();
}

function enterBack10(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) - (10);
  if (((s as any).o ?? 0) < 10) {
    (s as any).o = 10;
  }
  (s as any).n = (((s as any).o ?? 0) - 10);
  qspCall(s, 'NPCChanger', 'NPCLoop');
  scene.build();
}

function enterBack50(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) - (50);
  if (((s as any).o ?? 0) < 10) {
    (s as any).o = 10;
  }
  (s as any).n = (((s as any).o ?? 0) - 10);
  qspCall(s, 'NPCChanger', 'NPCLoop');
  scene.build();
}

function enterNpcdisplay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).isnum ?? 0)(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).n ?? 0))])) {
    // TODO-QSP: *p ''
  } else {
    // TODO-QSP: *p $npc_firstname['A<<n>>']
  }
  if (((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).n ?? 0))] === ((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).n ?? 0))]  ||  ((s as any).isnum ?? 0)(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).n ?? 0))])) {
    // TODO-QSP: *p ''
  } else {
    // TODO-QSP: *p ' "<<$npc_nickname[''A<<n>>'']>>"'
  }
  if (((s as any).isnum ?? 0)(((s as any).npc_lastname ?? 0)?.['a' + String(((s as any).n ?? 0))])) {
    // TODO-QSP: *p ''
  } else {
    // TODO-QSP: *p ' <<$npc_lastname[''A<<n>>'']>>'
  }
  scene.build();
}

function enterSelection(s: GameState, scene: SceneBuilder): void {
  (s as any).s = qspUntranslated(s, "val(input(\"Which NPC do you want to edit? Enter #\"))", { location: "NPCChanger" });
  if (((s as any).s ?? 0) === 0) {
    (s as any).n = (((s as any).o ?? 0) - 10);
    scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'NPCLoop'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  }
  scene.build();
}

function enterSelection2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: NPC first name: <<$npc_firstname['A<<s>>']>> <a href="exec:gt 'NPCChanger', 'edi...
  scene.text(`NPC first name: ${qspUntranslated(s, "npc_firstname['A<<s", { location: "NPCChanger" })}']>> <a href="exec:gt 'NPCChanger', 'editf'">Change</a>`);
  // TODO-QSP: dynamic text: NPC nickname: <<$npc_nickname['A<<s>>']>> <a href="exec:gt 'NPCChanger', 'editn'...
  scene.text(`NPC nickname: ${qspUntranslated(s, "npc_nickname['A<<s", { location: "NPCChanger" })}']>> <a href="exec:gt 'NPCChanger', 'editn'">Change</a>`);
  // TODO-QSP: dynamic text: NPC last name: <<$npc_lastname['A<<s>>']>> <a href="exec:gt 'NPCChanger', 'editl...
  scene.text(`NPC last name: ${qspUntranslated(s, "npc_lastname['A<<s", { location: "NPCChanger" })}']>> <a href="exec:gt 'NPCChanger', 'editl'">Change</a>`);
  // TODO-QSP: dynamic text: NPC used name: <<$npc_usedname['A<<s>>']>> <a href="exec:gt 'NPCChanger', 'editu...
  scene.text(`NPC used name: ${qspUntranslated(s, "npc_usedname['A<<s", { location: "NPCChanger" })}']>> <a href="exec:gt 'NPCChanger', 'editu'">Change</a>`);
  // TODO-QSP: dynamic text: NPC date of birth: <<npc_dob['A<<s>>']>> <a href="exec:gt 'NPCChanger', 'editd'"...
  scene.text(`NPC date of birth: ${qspUntranslated(s, "npc_dob['A<<s", { location: "NPCChanger" })}']>> <a href="exec:gt 'NPCChanger', 'editd'">Change</a>`);
  // TODO-QSP: 'NPC description: '+ $func('npc_notes', s)
  if (((s as any).npc_gender ?? 0)?.['A' + String(((s as any).s ?? 0))] === 0) {
    scene.text('NPC gender: Male');
    // TODO-QSP: dynamic text: NPC dick length: <<npc_dick['A<<s>>']>>cm
    scene.text(`NPC dick length: ${qspUntranslated(s, "npc_dick['A<<s", { location: "NPCChanger" })}']>>cm`);
    // TODO-QSP: dynamic text: NPC dick description: <<$npc_thdick['A<<s>>']>>
    scene.text(`NPC dick description: ${qspUntranslated(s, "npc_thdick['A<<s", { location: "NPCChanger" })}']>>`);
  } else {
    scene.text('NPC gender: Female');
  }
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    (s as any).n = (((s as any).o ?? 0) - 10);
  }, goto: ['NPCChanger', 'NPCLoop'] },
  ]);
  scene.build();
}

function enterEditf(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_firstname['A' + String((s as any).s ?? '') + ''] = qspUntranslated(s, "input('Enter new first name')", { location: "NPCChanger" });
  scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  scene.build();
}

function enterEditn(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_nickname['A' + String((s as any).s ?? '') + ''] = qspUntranslated(s, "input('Enter new nickname')", { location: "NPCChanger" });
  scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  scene.build();
}

function enterEditl(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_lastname['A' + String((s as any).s ?? '') + ''] = qspUntranslated(s, "input('Enter new last name')", { location: "NPCChanger" });
  scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  scene.build();
}

function enterEditu(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_usedname['A' + String((s as any).s ?? '') + ''] = qspUntranslated(s, "input('Enter new used name')", { location: "NPCChanger" });
  scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  scene.build();
}

function enterEditd(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_dob['A' + String((s as any).s ?? '') + ''] = qspUntranslated(s, "input('Enter new date of birth (yyyymmdd)')", { location: "NPCChanger" });
  scene.actions([{ label: 'Continue', goto: ['NPCChanger', 'selection2'] }]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Start':
      enterStart(s, scene);
      break;
    case 'NPCLoop':
      enterNPCLoop(s, scene);
      break;
    case 'next10':
      enterNext10(s, scene);
      break;
    case 'next50':
      enterNext50(s, scene);
      break;
    case 'back10':
      enterBack10(s, scene);
      break;
    case 'back50':
      enterBack50(s, scene);
      break;
    case 'npcdisplay':
      enterNpcdisplay(s, scene);
      break;
    case 'selection':
      enterSelection(s, scene);
      break;
    case 'selection2':
      enterSelection2(s, scene);
      break;
    case 'editf':
      enterEditf(s, scene);
      break;
    case 'editn':
      enterEditn(s, scene);
      break;
    case 'editl':
      enterEditl(s, scene);
      break;
    case 'editu':
      enterEditu(s, scene);
      break;
    case 'editd':
      enterEditd(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const NPCChanger: LocationDef = {
  name: 'NPCChanger',
  title: '<center><h2>Cheat Menu - NPCs - NPC Editor</h2></center>',
  region: 'other',
  enter: enter,
};
