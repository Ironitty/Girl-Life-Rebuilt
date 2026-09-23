import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 1;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A1'  ||  String((s as any).locArgs?.[0] ?? '') === 1) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dmitriy';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dimka';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nosov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dimka';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991020;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 260;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 57;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 2;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A2'  ||  String((s as any).locArgs?.[0] ?? '') === 2) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Artyom';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Artem';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Chebotarev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Artem';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990209;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 84;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 3;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A3'  ||  String((s as any).locArgs?.[0] ?? '') === 3) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Prokhorov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivan';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990717;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 190;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 4;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A4'  ||  String((s as any).locArgs?.[0] ?? '') === 4) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kruglov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991222;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'skinny';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 60;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 47;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 5;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A5'  ||  String((s as any).locArgs?.[0] ?? '') === 5) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fyodor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fedor';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kozlov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fedor';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990324;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).fedormasha ?? 0) === 1) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    }
    if ((!((s as any).fedormasha ?? 0))) {
      qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    }
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 160;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 41;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 6;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A6'  ||  String((s as any).locArgs?.[0] ?? '') === 6) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Peter';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petka';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Klyuyev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petka';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990915;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 67;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 7;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A7'  ||  String((s as any).locArgs?.[0] ?? '') === 7) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lesco';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lesco';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tsarev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lesco';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990703;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 55;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 8;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A8'  ||  String((s as any).locArgs?.[0] ?? '') === 8) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Svyatoslav';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Svyatoslav';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Voinov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Svyatoslav';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990503;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 170;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 52;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 9;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A9'  ||  String((s as any).locArgs?.[0] ?? '') === 9) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Viktor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitek';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kotov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitek';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991125;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 270;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 3) + 0);
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 31;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 10;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A10'  ||  String((s as any).locArgs?.[0] ?? '') === 10) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Denis';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ryzhov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dan';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990728;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 230;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 3) + 0);
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 48;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 11;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A11'  ||  String((s as any).locArgs?.[0] ?? '') === 11) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasily';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Shulga';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Shulgin';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Shulga';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990425;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 180;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 3) + 0);
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 33;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 12;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A12'  ||  String((s as any).locArgs?.[0] ?? '') === 12) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Julia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Julia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Milov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Julia';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990330;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 23;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 80;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 13;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A13'  ||  String((s as any).locArgs?.[0] ?? '') === 13) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lariska';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lariska';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gruzdeva';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lariska';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990603;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 45;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 14;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A14'  ||  String((s as any).locArgs?.[0] ?? '') === 14) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ekaterina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Katja';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Meynold';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Katja';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990224;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 77;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 15;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A15'  ||  String((s as any).locArgs?.[0] ?? '') === 15) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Viktoria';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vicky';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Meynold';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vicky';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990224;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'science');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 52;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 90;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 16;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A16'  ||  String((s as any).locArgs?.[0] ?? '') === 16) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natasha';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natasha';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Belova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natasha';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990706;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 26;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 73;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 17;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A17'  ||  String((s as any).locArgs?.[0] ?? '') === 17) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Irina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Inna';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Devyatova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Irina';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990329;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 44;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 60;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 18;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A18'  ||  String((s as any).locArgs?.[0] ?? '') === 18) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Christina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Christina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zvereva';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Christina';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991226;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 32;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 80;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 19;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A19'  ||  String((s as any).locArgs?.[0] ?? '') === 19) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Avelina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Starov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lina';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990224;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 60;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 20;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A20'  ||  String((s as any).locArgs?.[0] ?? '') === 20) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yalena';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lena';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kotov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lena';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991125;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 33;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 21;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A21'  ||  String((s as any).locArgs?.[0] ?? '') === 21) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valeria';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lera';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tsarev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lera';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990702;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 80;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 22;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A22'  ||  String((s as any).locArgs?.[0] ?? '') === 22) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Elžbieta';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bella';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Artamonov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bella';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990422;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 36;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 90;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 23;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A23'  ||  String((s as any).locArgs?.[0] ?? '') === 23) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Albina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Albina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Barlovskaya';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Albina';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990502;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'nursing');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 60;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 70;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 24;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A24'  ||  String((s as any).locArgs?.[0] ?? '') === 24) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pauline';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pauline';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sebagotulina';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pauline';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991026;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 42;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 90;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 25;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A25'  ||  String((s as any).locArgs?.[0] ?? '') === 25) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sonia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sonia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivanko';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sonia';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990623;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (((s as any).soniaQW ?? 0)?.['slut'] > 0) {
      qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
      ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 390;
    } else {
      qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
      ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
    }
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'fashion');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 54;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 26;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A26'  ||  String((s as any).locArgs?.[0] ?? '') === 26) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anatoly E.';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anatoly E.';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tsarev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anatoly E.';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19730307;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 27;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A27'  ||  String((s as any).locArgs?.[0] ?? '') === 27) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vera';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vera';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tsarev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vera';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19750903;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 29;
  }
  (s as any).npctemp = 28;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A28'  ||  String((s as any).locArgs?.[0] ?? '') === 28) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vladimir';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dad';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vladimir';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19700418;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 29;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A29'  ||  String((s as any).locArgs?.[0] ?? '') === 29) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natasha';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mother';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mother';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19820612;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 25;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 30;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A30'  ||  String((s as any).locArgs?.[0] ?? '') === 30) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lyudmila';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Luda';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Knavs';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aunt Luda';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19750311;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 31;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A31'  ||  String((s as any).locArgs?.[0] ?? '') === 31) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Elena';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Grandma';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Knavs';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Great Grandma';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19331027;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 29;
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 32;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A32'  ||  String((s as any).locArgs?.[0] ?? '') === 32) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zlatek';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Grandpa';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Knavs';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Great Grandpa';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19331205;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8000;
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 100;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 33;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A33'  ||  String((s as any).locArgs?.[0] ?? '') === 33) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sister';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anya';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19970816;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 34;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A34'  ||  String((s as any).locArgs?.[0] ?? '') === 34) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolka';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolka';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = ((s as any).pcs_lastname ?? 0);
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolka';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20001219;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 43;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 35;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A35'  ||  String((s as any).locArgs?.[0] ?? '') === 35) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhail';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Biological Father';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kuznetsov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhail, your birthfather';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19830504;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 36;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A36'  ||  String((s as any).locArgs?.[0] ?? '') === 36) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Irina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rimma';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rimma';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950907;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
  }
  (s as any).npctemp = 37;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A37'  ||  String((s as any).locArgs?.[0] ?? '') === 37) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Margaret';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Margo';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'A girl met outside of the Boutique';
    ((s as any).npc_notes = (s as any).npc_notes ?? {})['A' + String(((s as any).npctemp ?? 0))] = String(19940810);
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 21) + 10);
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 2) + 1);
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
  }
  (s as any).npctemp = 38;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A38'  ||  String((s as any).locArgs?.[0] ?? '') === 38) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yuri';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yuri';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19940609;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 39;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A39'  ||  String((s as any).locArgs?.[0] ?? '') === 39) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasha';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasha';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19920215;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 2) + 0);
  }
  (s as any).npctemp = 41;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A41'  ||  String((s as any).locArgs?.[0] ?? '') === 41) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fabiyan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pankratov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fabi';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19720410;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 42;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A42'  ||  String((s as any).locArgs?.[0] ?? '') === 42) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ashot';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Karapetovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ashot';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19970502;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
  }
  (s as any).npctemp = 43;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A43'  ||  String((s as any).locArgs?.[0] ?? '') === 43) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nika';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19941004;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 29;
  }
  (s as any).npctemp = 44;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A44'  ||  String((s as any).locArgs?.[0] ?? '') === 44) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Jora';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Jora';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19890925;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 50;
  }
  (s as any).npctemp = 45;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A45'  ||  String((s as any).locArgs?.[0] ?? '') === 45) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Semyon';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Semyon';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19920205;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 80;
  }
  (s as any).npctemp = 46;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A46'  ||  String((s as any).locArgs?.[0] ?? '') === 46) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andrew';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andrew';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19980408;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 27;
  }
  (s as any).npctemp = 47;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A47'  ||  String((s as any).locArgs?.[0] ?? '') === 47) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Stasik';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Stasik';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 48;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A48'  ||  String((s as any).locArgs?.[0] ?? '') === 48) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valera';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valera';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
  }
  (s as any).npctemp = 49;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A49'  ||  String((s as any).locArgs?.[0] ?? '') === 49) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bobka';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bobka';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  scene.build();
}

export const npcstatic1: LocationDef = {
  name: 'npcstatic1',
  region: 'other',
  enter: enter,
};
