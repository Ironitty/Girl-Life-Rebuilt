import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).n = 1;
  (s as any).o = 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNPCLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterNPCLoop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'obj_din', 'cheattabs', 'NPCs');
  scene.text('<center><h2>Cheat Menu - NPCs - NPC Editor</h2></center>');
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td width="400" cellspacing="0" cellpadding="20" valign="top">');
  scene.text('*** THIS IS A WORK IN PROGRESS ***');
  if ((!((s as any).n ?? 0))) {
    (s as any).n = 1;
    (s as any).o = 10;
  }
  while (true) {
    if (((s as any).o ?? 0) > ((s as any).aarraynumber ?? 0)) {
      (s as any).o = ((s as any).aarraynumber ?? 0);
    }
    if (((s as any).n ?? 0) <= ((s as any).o ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcdisplay(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).n = ((s as any).n ?? 0) + (1);
      break;
    }
    scene.text('<hr>');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NPCChanger\u0027, \u0027next10\u0027); return false;">Next 10</a> ');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NPCChanger\u0027, \u0027back10\u0027); return false;">Previous 10</a> ');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NPCChanger\u0027, \u0027next50\u0027); return false;">Skip 50</a> ');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NPCChanger\u0027, \u0027back50\u0027); return false;">Back 50</a> ');
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027NPCChanger\u0027, \u0027selection\u0027); return false;">Select an NPC to modify</a>');
    scene.text('</td></tr></table></center>');
  }
  scene.actions([
    { label: 'Go Back', goto: ['cheatmenu_din', 'npcs'] },
  ]);
  scene.build();
}

function enterNext10(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) + (10);
  (s as any).n = (((s as any).o ?? 0) - 10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNPCLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterNext50(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) + (50);
  (s as any).n = (((s as any).o ?? 0) - 10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNPCLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBack10(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) - (10);
  if (((s as any).o ?? 0) < 10) {
    (s as any).o = 10;
  }
  (s as any).n = (((s as any).o ?? 0) - 10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNPCLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBack50(s: GameState, scene: SceneBuilder): void {
  (s as any).o = ((s as any).o ?? 0) - (50);
  if (((s as any).o ?? 0) < 10) {
    (s as any).o = 10;
  }
  (s as any).n = (((s as any).o ?? 0) - 10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNPCLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterNpcdisplay(s: GameState, scene: SceneBuilder): void {
  if (!isNaN(qspUntranslated(s, "npc_firstname[\u00000\u0000]", { location: "NPCChanger" })) && qspUntranslated(s, "npc_firstname[\u00000\u0000]", { location: "NPCChanger" }) !== '') {
    scene.text('');
  } else {
    scene.text(`$npc_firstname['A${((s as any).n ?? '')}']`);
  }
  if (((s as any).npc_firstname ?? 0)['A' + (((s as any).n ?? 0))] === ((s as any).npc_nickname ?? 0)['A' + (((s as any).n ?? 0))]  ||  !isNaN(qspUntranslated(s, "npc_nickname[\u00002\u0000]", { location: "NPCChanger" })) && qspUntranslated(s, "npc_nickname[\u00002\u0000]", { location: "NPCChanger" }) !== '') {
    scene.text('');
  } else {
    scene.text(` "${(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).n ?? 0))] ?? '')}"`);
  }
  if (!isNaN(qspUntranslated(s, "npc_lastname[\u00000\u0000]", { location: "NPCChanger" })) && qspUntranslated(s, "npc_lastname[\u00000\u0000]", { location: "NPCChanger" }) !== '') {
    scene.text('');
  } else {
    scene.text(` ${(((s as any).npc_lastname ?? 0)?.['A' + String(((s as any).n ?? 0))] ?? '')}`);
  }
  scene.build();
}

function enterSelection(s: GameState, scene: SceneBuilder): void {
  (s as any).s = parseFloat(window.prompt("Which NPC do you want to edit? Enter #") ?? '');
  if ((!((s as any).s ?? 0))) {
    (s as any).n = (((s as any).o ?? 0) - 10);
    qspGoto(s, 'NPCChanger', 'NPCLoop');
  } else {
    qspGoto(s, 'NPCChanger', 'selection2');
  }
  scene.build();
}

function enterSelection2(s: GameState, scene: SceneBuilder): void {
  scene.text(`NPC first name: ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027editf/u0027); return false;">Change</a>`);
  scene.text(`NPC nickname: ${(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027editn/u0027); return false;">Change</a>`);
  scene.text(`NPC last name: ${(((s as any).npc_lastname ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027editl/u0027); return false;">Change</a>`);
  scene.text(`NPC used name: ${(((s as any).npc_usedname ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027editu/u0027); return false;">Change</a>`);
  scene.text(`NPC date of birth: ${(((s as any).npc_dob ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027NPCChanger/u0027, /u0027editd/u0027); return false;">Change</a>`);
  scene.text('NPC description: ' + qspFunc(s, 'npc_notes', ((s as any).s ?? '')));
  if (((s as any).npc_gender ?? 0)['A' + (((s as any).s ?? 0))] === 0) {
    scene.text('NPC gender: Male');
    scene.text(`NPC dick length: ${(((s as any).npc_dick ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')}cm`);
    scene.text(`NPC dick description: ${(((s as any).npc_thdick ?? 0)?.['A' + String(((s as any).s ?? 0))] ?? '')}`);
  } else {
    scene.text('NPC gender: Female');
  }
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    (st as any).n = (((st as any).o ?? 0) - 10);
    qspGoto(st, 'NPCChanger', 'NPCLoop');
  } },
  ]);
  scene.build();
}

function enterEditf(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).s ?? 0))] = window.prompt("Enter new first name") ?? '';
  qspGoto(s, 'NPCChanger', 'selection2');
  scene.build();
}

function enterEditn(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).s ?? 0))] = window.prompt("Enter new nickname") ?? '';
  qspGoto(s, 'NPCChanger', 'selection2');
  scene.build();
}

function enterEditl(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).s ?? 0))] = window.prompt("Enter new last name") ?? '';
  qspGoto(s, 'NPCChanger', 'selection2');
  scene.build();
}

function enterEditu(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).s ?? 0))] = window.prompt("Enter new used name") ?? '';
  qspGoto(s, 'NPCChanger', 'selection2');
  scene.build();
}

function enterEditd(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).s ?? 0))] = window.prompt("Enter new date of birth (yyyymmdd)") ?? '';
  qspGoto(s, 'NPCChanger', 'selection2');
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
      enterDefault(s, scene);
      break;
  }
}

export const NPCChanger: LocationDef = {
  name: 'NPCChanger',
  title: '<center><h2>Cheat Menu - NPCs - NPC Editor</h2></center>',
  region: 'other',
  enter: enter,
};
