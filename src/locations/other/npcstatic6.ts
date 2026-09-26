import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 250;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A250'  ||  String((s as any).locArgs?.[0] ?? '') === 250) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gora';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sir';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zhukov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mr. Zhukov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19760323;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 35;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 251;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A251'  ||  String((s as any).locArgs?.[0] ?? '') === 251) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pasha';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sir';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vorobev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mr. Vorobev';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19790603;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 25;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 252;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A252'  ||  String((s as any).locArgs?.[0] ?? '') === 252) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Osip';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sir';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kuznetsov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mr. Kuznetsov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19520603;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 25;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 253;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A253'  ||  String((s as any).locArgs?.[0] ?? '') === 253) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Diane';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Diane';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisyuk';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19961031;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 82;
  }
  (s as any).npctemp = 254;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A254'  ||  String((s as any).locArgs?.[0] ?? '') === 254) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Klim';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Klim';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kovalyov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Kovalyov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19831020;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 85;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 255;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A255'  ||  String((s as any).locArgs?.[0] ?? '') === 255) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Grigorii';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sir';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pasternak';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Pasternak';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19590926;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 95;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 256;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A256'  ||  String((s as any).locArgs?.[0] ?? '') === 256) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Selena';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Selena';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kovalchuk';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Kovalchuk';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19720102;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 88;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 257;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A257'  ||  String((s as any).locArgs?.[0] ?? '') === 257) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tamara';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tam';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Meynold';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aunt Tamara';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19760930;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 25;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
  }
  (s as any).npctemp = 258;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A258'  ||  String((s as any).locArgs?.[0] ?? '') === 258) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Irisa';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Iris';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Somova';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19970419;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 56;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 259;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A259'  ||  String((s as any).locArgs?.[0] ?? '') === 259) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Antonina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rzhevskaya';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19970727;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 260;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A260'  ||  String((s as any).locArgs?.[0] ?? '') === 260) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sofia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sofia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990809;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 59;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
  }
  (s as any).npctemp = 261;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A261'  ||  String((s as any).locArgs?.[0] ?? '') === 261) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maxim';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maxim';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990108;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 62;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
  }
  (s as any).npctemp = 262;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A262'  ||  String((s as any).locArgs?.[0] ?? '') === 262) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aliyyah';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Allie';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Najjar';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19910314;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 59;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
  }
  (s as any).npctemp = 263;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A263'  ||  String((s as any).locArgs?.[0] ?? '') === 263) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ksenya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ksenya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pavlov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ksenya';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950101;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 21) + 10);
    ((s as any).npc_drunk = (s as any).npc_drunk ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 173;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Exhibitionist Store Owner';
  }
  (s as any).npctemp = 264;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A264'  ||  String((s as any).locArgs?.[0] ?? '') === 264) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19961215;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'personal_trainer';
    ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
  }
  (s as any).npctemp = 265;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A265'  ||  String((s as any).locArgs?.[0] ?? '') === 265) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nestor';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19930127;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 266;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A266'  ||  String((s as any).locArgs?.[0] ?? '') === 266) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oleg';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950712;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'programmer';
    ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
  }
  (s as any).npctemp = 267;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A267'  ||  String((s as any).locArgs?.[0] ?? '') === 267) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Amelia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radimova';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19980325;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 55;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
  }
  (s as any).npctemp = 268;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A268'  ||  String((s as any).locArgs?.[0] ?? '') === 268) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yuliana';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yana';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radimova';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19980325;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 55;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
  }
  (s as any).npctemp = 269;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A269'  ||  String((s as any).locArgs?.[0] ?? '') === 269) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Raina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Raina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Marinova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Marinova';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19910707;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 84;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 270;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A270'  ||  String((s as any).locArgs?.[0] ?? '') === 270) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Olena';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Olena';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kudelina';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Kudelina';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19671019;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 90;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 271;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A271'  ||  String((s as any).locArgs?.[0] ?? '') === 271) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikita';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikita';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Professor Borisov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19830624;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 95;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 272;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A272'  ||  String((s as any).locArgs?.[0] ?? '') === 272) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rostislav';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rostislav';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Popov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rostislav';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19741225;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 65;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 273;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A273'  ||  String((s as any).locArgs?.[0] ?? '') === 273) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radislav';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slava';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Popov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radislav';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19940303;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 45;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 274;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A274'  ||  String((s as any).locArgs?.[0] ?? '') === 274) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Semionova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maya';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990502;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 75;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
    ((s as any).npc_haircolour = (s as any).npc_haircolour ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Blonde';
    ((s as any).npc_eyecolour = (s as any).npc_eyecolour ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'blue';
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 160;
    ((s as any).npc_weight = (s as any).npc_weight ?? {})['A' + String(((s as any).npctemp ?? 0))] = 50;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/pushkin/maya';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 275;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A275'  ||  String((s as any).locArgs?.[0] ?? '') === 275) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kima';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kima';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Agapova';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 276;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A276'  ||  String((s as any).locArgs?.[0] ?? '') === 276) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tanis';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tanis';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Komarova';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 277;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A277'  ||  String((s as any).locArgs?.[0] ?? '') === 277) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Galina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Galina';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Molchalina';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 278;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A278'  ||  String((s as any).locArgs?.[0] ?? '') === 278) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Taisiya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Taisiya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lebedeva';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 279;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A279'  ||  String((s as any).locArgs?.[0] ?? '') === 279) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikita';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Volkova';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Volkova';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 280;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A280'  ||  String((s as any).locArgs?.[0] ?? '') === 280) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gasha';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gasha';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Morozova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gasha';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20000705;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 50;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_haircolour = (s as any).npc_haircolour ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Brunette';
    ((s as any).npc_eyecolour = (s as any).npc_eyecolour ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Blue';
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 145;
    ((s as any).npc_weight = (s as any).npc_weight ?? {})['A' + String(((s as any).npctemp ?? 0))] = 40;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/pushkin/gasha';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 281;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A281'  ||  String((s as any).locArgs?.[0] ?? '') === 281) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Calina';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Callie';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sokolova';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport', 'chess');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 282;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A282'  ||  String((s as any).locArgs?.[0] ?? '') === 282) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ruza';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ruza';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sokolova';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'dance', 'sport', 'chess');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
  }
  (s as any).npctemp = 283;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A283'  ||  String((s as any).locArgs?.[0] ?? '') === 283) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rudolf';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rudolf ';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Baryshnikov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rudolf';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19820920;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 67;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15000;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/pushkin/rudolph';
    qspCall(s, 'npcstaticdefaults', 'defaults');
  }
  (s as any).npctemp = 284;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A284'  ||  String((s as any).locArgs?.[0] ?? '') === 284) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Biserka';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Biserka';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ananiashvili';
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
  }
  (s as any).npctemp = 285;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A285'  ||  String((s as any).locArgs?.[0] ?? '') === 285) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sofia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sofia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Solovyova';
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
  }
  (s as any).npctemp = 286;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A286'  ||  String((s as any).locArgs?.[0] ?? '') === 286) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bronya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bronya ';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Volkova';
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
  }
  (s as any).npctemp = 289;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A289'  ||  String((s as any).locArgs?.[0] ?? '') === 289) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zarya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zaza';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Popova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zaraya';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_img_path = (s as any).npc_img_path ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/ballet';
    qspCall(s, 'npcstaticdefaults', 'defaults');
  }
  (s as any).npctemp = 290;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A290'  ||  String((s as any).locArgs?.[0] ?? '') === 290) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Daniil';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Daniil';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Poznanski';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Daniil';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19940828;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'clerk';
    ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_eyecol = (s as any).npc_eyecol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_icon = (s as any).npc_icon ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/shared/headshots_main/290.jpg';
  }
  (s as any).npctemp = 291;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A291'  ||  String((s as any).locArgs?.[0] ?? '') === 291) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kira';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kira';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivanova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kira';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950214;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'clerk';
    ((s as any).npc_style = (s as any).npc_style ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_eyecol = (s as any).npc_eyecol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    ((s as any).npc_icon = (s as any).npc_icon ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/shared/headshots_main/291.jpg';
  }
  (s as any).npctemp = 292;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A292'  ||  String((s as any).locArgs?.[0] ?? '') === 292) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexander';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasha';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Grinevsky';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasha';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19640904;
    (s as any).npc_gender = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
  }
  (s as any).npctemp = 293;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A293'  ||  String((s as any).locArgs?.[0] ?? '') === 293) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Viktor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Viktor';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Antonov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Viktor';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19730802;
    (s as any).npc_gender = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 21;
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 294;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A294'  ||  String((s as any).locArgs?.[0] ?? '') === 294) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vadim';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vadim';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vadim';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19971023;
    (s as any).npc_gender = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
  }
  (s as any).npctemp = 295;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A295'  ||  String((s as any).locArgs?.[0] ?? '') === 295) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sultan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Shadow';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maskaev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sultan';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19981093;
    (s as any).npc_gender = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'muscular';
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15000;
  }
  (s as any).npctemp = 296;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A296'  ||  String((s as any).locArgs?.[0] ?? '') === 296) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kira';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Abaturova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Little Kira';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19960618;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'skills', 'combat', 'dance', 'sport');
    qspCall(s, 'npcstaticdefaults', 'body', 'model');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 151;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
  }
  scene.build();
}

export const npcstatic6: LocationDef = {
  name: 'npcstatic6',
  region: 'other',
  enter: enter,
};
