import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinnpc', '');
  qspCall(s, 'stat', '');
  (s as any).static_num = 'A' + ((s as any).numnpc ?? 0) + '';
  scene.text(`<center><b>${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "Snpc" })}']>> ${qspUntranslated(s, "npc_lastname['A<<numnpc", { location: "Snpc" })}']>></b></center>`);
  scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc || '')}.jpg`);
  // TODO-QSP: $func('npc_notes', numnpc)
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] < 20) {
    scene.text('They really don\'t like you.');
  }
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] >= 20  &&  ((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] < 40) {
    scene.text('They are fairly indifferent to you.');
  }
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] >= 40  &&  ((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] < 60) {
    scene.text('The two of you get along together fairly well, like casual friends.');
  }
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] >= 60  &&  ((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] < 80) {
    scene.text('You get along great with them. They are one of your friends.');
  }
  if (((s as any).npc_rel ?? 0)['A' + ((s as any).numnpc ?? 0)] >= 80) {
    scene.text('They are one of your best friends.');
  }
  qspCall(s, 'cumreaction', '');
  if (((s as any).loc ?? 0) !== 'pav_disco') {
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } else {
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'pav_disco') {
      (st as any).minut = ((st as any).minut ?? 0) + (5);
    }
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "Snpc" })}']>> ${qspUntranslated(s, "npc_lastname['A<<numnpc", { location: "Snpc" })}']>></b></center>`);
    scene.img(`images/characters/shared/headshots_main/big${((st as any).numnpc || '')}.jpg`);
    if (((st as any).loc ?? 0) !== 'pav_disco') {
      // TODO-QSP: dynamic text: You chat a bit with <<$npc_firstname[''A<<numnpc>>'']>> <<$npc_lastname[''A<<num...
      scene.text(`You chat a bit with ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "Snpc" })}']>> ${qspUntranslated(s, "npc_lastname['A<<numnpc", { location: "Snpc" })}']>>`);
      if (((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] < 20) {
        scene.text('"I have to go now, goodbye."');
      } else {
        if (((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] >= 20  &&  ((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] < 40) {
          scene.text('"Nice talking to you. I will see you in class."');
        } else {
          if (((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] >= 40  &&  ((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] < 60) {
            scene.text('"Really nice to talk to you. I will see you in class."');
          } else {
            if (((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] >= 60  &&  ((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] < 80) {
              scene.text('"It was really nice chatting with you. I will see you in class."');
            } else {
              if (((st as any).npc_rel ?? 0)['A' + ((st as any).numnpc ?? 0)] >= 80) {
                scene.text('"Really nice chatting with you, but I really need to go now. You know, preparing my lecture. Oh, and you look great by the way!"');
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const Snpc: LocationDef = {
  name: 'Snpc',
  title: '\']>> \']>>',
  region: 'other',
  description: ['They really don\'t like you.'],
  enter: enter,
};
