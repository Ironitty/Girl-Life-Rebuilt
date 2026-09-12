import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 1;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A1'  ||  ((s as any).locArgs?.[0] ?? 0) === 1) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Dmitriy';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Dimka';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Nosov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dimka';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991020;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 260;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 57;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 2;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A2'  ||  ((s as any).locArgs?.[0] ?? 0) === 2) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Artyom';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Artem';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Chebotarev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Artem';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990209;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 30;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 84;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 3;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A3'  ||  ((s as any).locArgs?.[0] ?? 0) === 3) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Prokhorov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990717;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 190;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 30;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 4;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A4'  ||  ((s as any).locArgs?.[0] ?? 0) === 4) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kruglov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991222;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 8;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 47;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 5;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A5'  ||  ((s as any).locArgs?.[0] ?? 0) === 5) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Fyodor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Fedor';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kozlov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Fedor';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990324;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).fedormasha ?? 0) === 1) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    }
    if ((!((s as any).fedormasha ?? 0))) {
      qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    }
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 160;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 41;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 6;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A6'  ||  ((s as any).locArgs?.[0] ?? 0) === 6) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Peter';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Petka';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Klyuyev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Petka';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990915;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 67;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 7;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A7'  ||  ((s as any).locArgs?.[0] ?? 0) === 7) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lesco';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990703;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 55;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 8;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A8'  ||  ((s as any).locArgs?.[0] ?? 0) === 8) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Voinov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Svyatoslav';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990503;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 170;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 52;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 9;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A9'  ||  ((s as any).locArgs?.[0] ?? 0) === 9) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Viktor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vitek';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kotov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vitek';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991125;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 270;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 31;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 10;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A10'  ||  ((s as any).locArgs?.[0] ?? 0) === 10) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Denis';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Dan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Ryzhov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dan';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990728;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 230;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 48;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 11;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A11'  ||  ((s as any).locArgs?.[0] ?? 0) === 11) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vasily';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Shulga';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Shulgin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Shulga';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990425;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 180;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 3) + 0;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 33;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 12;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A12'  ||  ((s as any).locArgs?.[0] ?? 0) === 12) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Milov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Julia';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990330;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 23;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 80;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 13;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A13'  ||  ((s as any).locArgs?.[0] ?? 0) === 13) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Gruzdeva';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lariska';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990603;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 45;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 8;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 40;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 14;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A14'  ||  ((s as any).locArgs?.[0] ?? 0) === 14) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ekaterina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Katja';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Meynold';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Katja';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990224;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 77;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 15;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A15'  ||  ((s as any).locArgs?.[0] ?? 0) === 15) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Viktoria';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vicky';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Meynold';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vicky';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990224;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 52;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 90;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 16;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A16'  ||  ((s as any).locArgs?.[0] ?? 0) === 16) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Belova';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990706;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 26;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 73;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 30;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 17;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A17'  ||  ((s as any).locArgs?.[0] ?? 0) === 17) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Inna';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Devyatova';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990329;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 24;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 44;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 18;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A18'  ||  ((s as any).locArgs?.[0] ?? 0) === 18) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Zvereva';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Christina';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991226;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 32;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 80;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 19;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A19'  ||  ((s as any).locArgs?.[0] ?? 0) === 19) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Avelina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Starov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lina';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990224;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 30;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 20;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A20'  ||  ((s as any).locArgs?.[0] ?? 0) === 20) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yalena';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lena';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kotov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lena';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991125;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 22;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 33;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 30;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 21;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A21'  ||  ((s as any).locArgs?.[0] ?? 0) === 21) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Valeria';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lera';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lera';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990702;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 24;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 80;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 22;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A22'  ||  ((s as any).locArgs?.[0] ?? 0) === 22) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Elžbieta';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Bella';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Artamonov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Bella';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990422;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 22;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 36;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 90;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 23;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A23'  ||  ((s as any).locArgs?.[0] ?? 0) === 23) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Barlovskaya';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Albina';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990502;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 70;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 24;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A24'  ||  ((s as any).locArgs?.[0] ?? 0) === 24) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sebagotulina';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Pauline';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991026;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 42;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 90;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 25;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A25'  ||  ((s as any).locArgs?.[0] ?? 0) === 25) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Ivanko';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sonia';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990623;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
      if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 390;
    } else {
      qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
      if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 40;
    }
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 54;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 26;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A26'  ||  ((s as any).locArgs?.[0] ?? 0) === 26) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Anatoly E.';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19730307;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 27;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A27'  ||  ((s as any).locArgs?.[0] ?? 0) === 27) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tsarev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vera';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19750903;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 29;
  }
  (s as any).npctemp = 28;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A28'  ||  ((s as any).locArgs?.[0] ?? 0) === 28) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Dad';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19700418;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 29;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A29'  ||  ((s as any).locArgs?.[0] ?? 0) === 29) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Natasha';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Mother';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mother';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19820612;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 25;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 30;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A30'  ||  ((s as any).locArgs?.[0] ?? 0) === 30) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lyudmila';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Luda';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Aunt Luda';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19750311;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 31;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A31'  ||  ((s as any).locArgs?.[0] ?? 0) === 31) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Elena';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Grandma';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Great Grandma';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19331027;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 29;
    if (!(s as any).npc_rel) (s as any).npc_rel = {}; (s as any).npc_rel['A' + String((s as any).npctemp || '') + ''] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 32;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A32'  ||  ((s as any).locArgs?.[0] ?? 0) === 32) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Zlatek';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Grandpa';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Knavs';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Great Grandpa';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19331205;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 8000;
    if (!(s as any).npc_rel) (s as any).npc_rel = {}; (s as any).npc_rel['A' + String((s as any).npctemp || '') + ''] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 33;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A33'  ||  ((s as any).locArgs?.[0] ?? 0) === 33) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Anya';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sister';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Anya';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19970816;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 19;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 34;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A34'  ||  ((s as any).locArgs?.[0] ?? 0) === 34) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = ((s as any).pcs_lastname ?? 0);
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Kolka';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 20001219;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 43;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 35;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A35'  ||  ((s as any).locArgs?.[0] ?? 0) === 35) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Mikhail';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Biological Father';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kuznetsov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mikhail, your birthfather';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19830504;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 11000;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic1" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 36;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A36'  ||  ((s as any).locArgs?.[0] ?? 0) === 36) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Irina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Rimma';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Rimma';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19950907;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 37;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A37'  ||  ((s as any).locArgs?.[0] ?? 0) === 37) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Margaret';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Margo';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'A girl met outside of the Boutique';
    if (!(s as any).npc_notes) (s as any).npc_notes = {}; (s as any).npc_notes['A' + String((s as any).npctemp || '') + ''] = qspUntranslated(s, "str(19940810)", { location: "npcstatic1" });
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 21) + 10;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 2) + 1;
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 38;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A38'  ||  ((s as any).locArgs?.[0] ?? 0) === 38) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yuri';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Yuri';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19940609;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 39;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A39'  ||  ((s as any).locArgs?.[0] ?? 0) === 39) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sasha';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sasha';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19920215;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 2) + 0;
  }
  (s as any).npctemp = 41;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A41'  ||  ((s as any).locArgs?.[0] ?? 0) === 41) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Fabiyan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pankratov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Fabi';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19720410;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
  }
  (s as any).npctemp = 42;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A42'  ||  ((s as any).locArgs?.[0] ?? 0) === 42) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ashot';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Karapetovich';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Ashot';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19970502;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
  }
  (s as any).npctemp = 43;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A43'  ||  ((s as any).locArgs?.[0] ?? 0) === 43) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Nika';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19941004;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 29;
  }
  (s as any).npctemp = 44;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A44'  ||  ((s as any).locArgs?.[0] ?? 0) === 44) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Jora';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Jora';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19890925;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 50;
  }
  (s as any).npctemp = 45;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A45'  ||  ((s as any).locArgs?.[0] ?? 0) === 45) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Semyon';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Semyon';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19920205;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 80;
  }
  (s as any).npctemp = 46;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A46'  ||  ((s as any).locArgs?.[0] ?? 0) === 46) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Andrew';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Andrew';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19980408;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'monstrous';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 27;
  }
  (s as any).npctemp = 47;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A47'  ||  ((s as any).locArgs?.[0] ?? 0) === 47) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Stasik';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Stasik';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 48;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A48'  ||  ((s as any).locArgs?.[0] ?? 0) === 48) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Valera';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Valera';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
  }
  (s as any).npctemp = 49;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A49'  ||  ((s as any).locArgs?.[0] ?? 0) === 49) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Bobka';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Bobka';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  scene.build();
}

export const npcstatic1: LocationDef = {
  name: 'npcstatic1',
  region: 'other',
  enter: enter,
};
