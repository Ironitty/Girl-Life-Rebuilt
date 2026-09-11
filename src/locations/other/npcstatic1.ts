import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 1;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A1'  ||  ((s as any).locArgs?.[0] ?? 0) === 1) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dmitriy';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dimka';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Nosov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dimka';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991020;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 16;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 260;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 57;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 2;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A2'  ||  ((s as any).locArgs?.[0] ?? 0) === 2) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Artyom';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Artem';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Chebotarev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Artem';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990209;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 16;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 30;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 84;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 3;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A3'  ||  ((s as any).locArgs?.[0] ?? 0) === 3) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Prokhorov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990717;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 190;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 30;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 4;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A4'  ||  ((s as any).locArgs?.[0] ?? 0) === 4) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kruglov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991222;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 60;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 47;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 5;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A5'  ||  ((s as any).locArgs?.[0] ?? 0) === 5) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Fyodor';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Fedor';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kozlov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Fedor';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990324;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).fedormasha ?? 0) === 1) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    }
    if ((!((s as any).fedormasha ?? 0))) {
      qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    }
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 160;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 41;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 6;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A6'  ||  ((s as any).locArgs?.[0] ?? 0) === 6) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Peter';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Petka';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Klyuyev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Petka';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990915;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'slim';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 10;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 10;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 67;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 7;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A7'  ||  ((s as any).locArgs?.[0] ?? 0) === 7) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990703;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 16;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 55;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 8;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A8'  ||  ((s as any).locArgs?.[0] ?? 0) === 8) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Voinov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990503;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 170;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 52;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 9;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A9'  ||  ((s as any).locArgs?.[0] ?? 0) === 9) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Viktor';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vitek';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kotov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vitek';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991125;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 270;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 31;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 10;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A10'  ||  ((s as any).locArgs?.[0] ?? 0) === 10) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Denis';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dan';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ryzhov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dan';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990728;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 230;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 48;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 11;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A11'  ||  ((s as any).locArgs?.[0] ?? 0) === 11) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vasily';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Shulga';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Shulgin';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Shulga';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990425;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'massive';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 15;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 180;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 33;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 12;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A12'  ||  ((s as any).locArgs?.[0] ?? 0) === 12) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Milov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990330;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 23;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 10;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 80;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 13;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A13'  ||  ((s as any).locArgs?.[0] ?? 0) === 13) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Gruzdeva';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990603;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 45;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 14;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A14'  ||  ((s as any).locArgs?.[0] ?? 0) === 14) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ekaterina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Katja';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Meynold';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Katja';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990224;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 20;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 20;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 77;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 15;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A15'  ||  ((s as any).locArgs?.[0] ?? 0) === 15) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Viktoria';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vicky';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Meynold';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vicky';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990224;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 52;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 90;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 16;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A16'  ||  ((s as any).locArgs?.[0] ?? 0) === 16) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Belova';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990706;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 26;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 73;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 30;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 17;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A17'  ||  ((s as any).locArgs?.[0] ?? 0) === 17) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Inna';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Devyatova';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990329;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 24;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 44;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 60;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 18;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A18'  ||  ((s as any).locArgs?.[0] ?? 0) === 18) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Zvereva';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991226;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 32;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 80;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 19;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A19'  ||  ((s as any).locArgs?.[0] ?? 0) === 19) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Avelina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lina';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Starov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lina';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990224;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 30;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 60;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 20;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A20'  ||  ((s as any).locArgs?.[0] ?? 0) === 20) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Yalena';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lena';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kotov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lena';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991125;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 22;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 33;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 30;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 21;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A21'  ||  ((s as any).locArgs?.[0] ?? 0) === 21) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Valeria';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lera';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lera';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990702;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 24;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 80;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 22;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A22'  ||  ((s as any).locArgs?.[0] ?? 0) === 22) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Elžbieta';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Bella';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Artamonov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Bella';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990422;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 22;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 36;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 90;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 23;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A23'  ||  ((s as any).locArgs?.[0] ?? 0) === 23) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Barlovskaya';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990502;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 60;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 70;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 24;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A24'  ||  ((s as any).locArgs?.[0] ?? 0) === 24) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sebagotulina';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19991026;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 20;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 42;
    ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 90;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 25;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A25'  ||  ((s as any).locArgs?.[0] ?? 0) === 25) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ivanko';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19990623;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
      ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 390;
    } else {
      qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
      ((s as any).npc_rep ?? {})['A' + String((s as any).npctemp || '') + ''] = 40;
    }
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 9;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 54;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 26;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A26'  ||  ((s as any).locArgs?.[0] ?? 0) === 26) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19730307;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 15;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 27;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A27'  ||  ((s as any).locArgs?.[0] ?? 0) === 27) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19750903;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 29;
  }
  (s as any).npctemp = 28;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A28'  ||  ((s as any).locArgs?.[0] ?? 0) === 28) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Dad';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19700418;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 29;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A29'  ||  ((s as any).locArgs?.[0] ?? 0) === 29) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Mother';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Mother';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19820612;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 25;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 30;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A30'  ||  ((s as any).locArgs?.[0] ?? 0) === 30) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Lyudmila';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Luda';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Aunt Luda';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19750311;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 31;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A31'  ||  ((s as any).locArgs?.[0] ?? 0) === 31) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Elena';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Grandma';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Great Grandma';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19331027;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 29;
    ((s as any).npc_rel ?? {})['A' + String((s as any).npctemp || '') + ''] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 32;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A32'  ||  ((s as any).locArgs?.[0] ?? 0) === 32) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Zlatek';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Grandpa';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Great Grandpa';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19331205;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = 8000;
    ((s as any).npc_rel ?? {})['A' + String((s as any).npctemp || '') + ''] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 33;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A33'  ||  ((s as any).locArgs?.[0] ?? 0) === 33) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Anya';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sister';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Anya';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19970816;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 19;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 34;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A34'  ||  ((s as any).locArgs?.[0] ?? 0) === 34) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 20001219;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'slim';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 10;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_intel ?? {})['A' + String((s as any).npctemp || '') + ''] = 43;
    ((s as any).npc_hotcat ?? {})['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 35;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A35'  ||  ((s as any).locArgs?.[0] ?? 0) === 35) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Mikhail';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Biological Father';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Kuznetsov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Mikhail, your birthfather';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19830504;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    ((s as any).npc_spermpot ?? {})['A' + String((s as any).npctemp || '') + ''] = 11000;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 36;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A36'  ||  ((s as any).locArgs?.[0] ?? 0) === 36) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Rimma';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Rimma';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19950907;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 37;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A37'  ||  ((s as any).locArgs?.[0] ?? 0) === 37) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Margaret';
    ((s as any).npc_nickname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Margo';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'A girl met outside of the Boutique';
    ((s as any).npc_notes ?? {})['A' + String((s as any).npctemp || '') + ''] = qspUntranslated(s, "str(19940810)", { location: "npcstatic1" });
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 21) + 10;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 2) + 1;
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 38;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A38'  ||  ((s as any).locArgs?.[0] ?? 0) === 38) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Yuri';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Yuri';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19940609;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 39;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A39'  ||  ((s as any).locArgs?.[0] ?? 0) === 39) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sasha';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Sasha';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19920215;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 15;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 2) + 0;
  }
  (s as any).npctemp = 41;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A41'  ||  ((s as any).locArgs?.[0] ?? 0) === 41) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Fabiyan';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Pankratov';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Fabi';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19720410;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 20;
  }
  (s as any).npctemp = 42;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A42'  ||  ((s as any).locArgs?.[0] ?? 0) === 42) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ashot';
    ((s as any).npc_lastname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Karapetovich';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Ashot';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19970502;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
  }
  (s as any).npctemp = 43;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A43'  ||  ((s as any).locArgs?.[0] ?? 0) === 43) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Nika';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19941004;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust ?? {})['A' + String((s as any).npctemp || '') + ''] = 29;
  }
  (s as any).npctemp = 44;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A44'  ||  ((s as any).locArgs?.[0] ?? 0) === 44) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Jora';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Jora';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19890925;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 11;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 16;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 50;
  }
  (s as any).npctemp = 45;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A45'  ||  ((s as any).locArgs?.[0] ?? 0) === 45) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Semyon';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Semyon';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19920205;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'massive';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 14;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 18;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 80;
  }
  (s as any).npctemp = 46;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A46'  ||  ((s as any).locArgs?.[0] ?? 0) === 46) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Andrew';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Andrew';
    ((s as any).npc_dob ?? {})['A' + String((s as any).npctemp || '') + ''] = 19980408;
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'monstrous';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 27;
  }
  (s as any).npctemp = 47;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A47'  ||  ((s as any).locArgs?.[0] ?? 0) === 47) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Stasik';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Stasik';
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thick';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 13;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 15;
    ((s as any).npc_sexskill ?? {})['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 48;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A48'  ||  ((s as any).locArgs?.[0] ?? 0) === 48) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Valera';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Valera';
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 17;
  }
  (s as any).npctemp = 49;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A49'  ||  ((s as any).locArgs?.[0] ?? 0) === 49) {
    ((s as any).npc_firstname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Bobka';
    ((s as any).npc_usedname ?? {})['A' + String((s as any).npctemp || '') + ''] = 'Bobka';
    ((s as any).npc_gender ?? {})['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick ?? {})['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    ((s as any).npc_girth ?? {})['A' + String((s as any).npctemp || '') + ''] = 12;
    ((s as any).npc_dick ?? {})['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  scene.build();
}

export const npcstatic1: LocationDef = {
  name: 'npcstatic1',
  region: 'other',
  enter: enter,
};
