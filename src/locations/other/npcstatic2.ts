import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 50;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A50'  ||  String((s as any).locArgs?.[0] ?? '') === 50) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Stas';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 51;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A51'  ||  String((s as any).locArgs?.[0] ?? '') === 51) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitali';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitali';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
  }
  (s as any).npctemp = 52;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A52'  ||  String((s as any).locArgs?.[0] ?? '') === 52) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nicholas';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Polyakov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nicholas';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 53;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A53'  ||  String((s as any).locArgs?.[0] ?? '') === 53) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Joe';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 54;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A54'  ||  String((s as any).locArgs?.[0] ?? '') === 54) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhail';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Uncle Misha';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Uncle Misha';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 55;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A55'  ||  String((s as any).locArgs?.[0] ?? '') === 55) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Oluuosegun';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Olu';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maina';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Olu';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 30;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 56;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A56'  ||  String((s as any).locArgs?.[0] ?? '') === 56) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roma';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roma';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Meynold';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roma';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'friends');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 57;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A57'  ||  String((s as any).locArgs?.[0] ?? '') === 57) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rex';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisyuk';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rex';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'friends');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
  }
  (s as any).npctemp = 58;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A58'  ||  String((s as any).locArgs?.[0] ?? '') === 58) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zhendos';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zhen';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhailov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zhendos';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 34;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
  }
  (s as any).npctemp = 59;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A59'  ||  String((s as any).locArgs?.[0] ?? '') === 59) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mishan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Misha';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andreev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mishan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 38;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 60;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A60'  ||  String((s as any).locArgs?.[0] ?? '') === 60) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Miroslava';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mira';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mira';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maximova';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990805;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/gadukino/mira/mira.jpg';
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
  }
  (s as any).npctemp = 61;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A61'  ||  String((s as any).locArgs?.[0] ?? '') === 61) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolyamba';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolyamba';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kolyamba';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rostislav';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20000605;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
  }
  (s as any).npctemp = 62;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A62'  ||  String((s as any).locArgs?.[0] ?? '') === 62) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasyanya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasyan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasyan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Makarovich';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20000906;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
  }
  (s as any).npctemp = 63;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A63'  ||  String((s as any).locArgs?.[0] ?? '') === 63) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dimitriy';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mitka';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mitka';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ruslanov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20000117;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/shared/headshots_main/big63.jpg';
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 64;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A64'  ||  String((s as any).locArgs?.[0] ?? '') === 64) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Afanasiy';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Afanasiy';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Afanasiy';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maximov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19650523;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/locations/gadukino/village/mirafather.jpg';
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
  }
  (s as any).npctemp = 65;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A65'  ||  String((s as any).locArgs?.[0] ?? '') === 65) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitaliy';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitaliy';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vitaliy';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maximov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20000623;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 67;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A67'  ||  String((s as any).locArgs?.[0] ?? '') === 67) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Big C';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 21;
  }
  (s as any).npctemp = 68;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A68'  ||  String((s as any).locArgs?.[0] ?? '') === 68) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Perth';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Peter';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petrovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dr. Petrovich';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
  }
  (s as any).npctemp = 69;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A69'  ||  String((s as any).locArgs?.[0] ?? '') === 69) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhail';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Coach';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikolaevich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mikhail N.';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).discoenable = (s as any).discoenable ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 70;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A70'  ||  String((s as any).locArgs?.[0] ?? '') === 70) {
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Katalkin';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Captain Katalkin';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 71;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A71'  ||  String((s as any).locArgs?.[0] ?? '') === 71) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pasha';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Officer Pasha';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 72;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A72'  ||  String((s as any).locArgs?.[0] ?? '') === 72) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergi';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Officer Sergi';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 73;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A73'  ||  String((s as any).locArgs?.[0] ?? '') === 73) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arthur';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arthur';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arthur';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 26;
  }
  (s as any).npctemp = 74;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A74'  ||  String((s as any).locArgs?.[0] ?? '') === 74) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anatoly';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Chubais';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anatoly';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
  }
  (s as any).npctemp = 75;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A75'  ||  String((s as any).locArgs?.[0] ?? '') === 75) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_QW = (s as any).npc_QW ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_rel = (s as any).npc_rel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_love = (s as any).npc_love ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_outfit = (s as any).npc_outfit ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
  }
  (s as any).npctemp = 76;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A76'  ||  String((s as any).locArgs?.[0] ?? '') === 76) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ilyushkin';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Makarovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ily';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
  }
  (s as any).npctemp = 77;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A77'  ||  String((s as any).locArgs?.[0] ?? '') === 77) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tryndin';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maximovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tryndin';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 78;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A78'  ||  String((s as any).locArgs?.[0] ?? '') === 78) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vic';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vic';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
  }
  (s as any).npctemp = 79;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A79'  ||  String((s as any).locArgs?.[0] ?? '') === 79) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lena';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
  }
  (s as any).npctemp = 80;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A80'  ||  String((s as any).locArgs?.[0] ?? '') === 80) {
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Borisovich';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mrs. Borisovich';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 27;
  }
  (s as any).npctemp = 81;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A81'  ||  String((s as any).locArgs?.[0] ?? '') === 81) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexei';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexey';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 82;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A82'  ||  String((s as any).locArgs?.[0] ?? '') === 82) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Djibril';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maina';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Djibril';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 56;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 83;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A83'  ||  String((s as any).locArgs?.[0] ?? '') === 83) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Goshi';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sidorov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Goshi';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 67;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 84;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A84'  ||  String((s as any).locArgs?.[0] ?? '') === 84) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kendra';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = ' Abiodun';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kendra';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 63;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 85;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A85'  ||  String((s as any).locArgs?.[0] ?? '') === 85) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kas';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 86;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A86'  ||  String((s as any).locArgs?.[0] ?? '') === 86) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yaroslav';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yaroslav';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 87;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A87'  ||  String((s as any).locArgs?.[0] ?? '') === 87) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Boris';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivanovich';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 88;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A88'  ||  String((s as any).locArgs?.[0] ?? '') === 88) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexander';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexander E.';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
  }
  (s as any).npctemp = 89;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A89'  ||  String((s as any).locArgs?.[0] ?? '') === 89) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Eugene';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Eugene';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Eugene';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5000;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 90;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A90'  ||  String((s as any).locArgs?.[0] ?? '') === 90) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Angela';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
  }
  (s as any).npctemp = 91;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A91'  ||  String((s as any).locArgs?.[0] ?? '') === 91) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Abdul';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Abdul';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 21;
  }
  (s as any).npctemp = 92;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A92'  ||  String((s as any).locArgs?.[0] ?? '') === 92) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Hassan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Hassan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
  }
  (s as any).npctemp = 93;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A93'  ||  String((s as any).locArgs?.[0] ?? '') === 93) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Marisha';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Marisha';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
  }
  (s as any).npctemp = 94;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A94'  ||  String((s as any).locArgs?.[0] ?? '') === 94) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nadia';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
  }
  (s as any).npctemp = 95;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A95'  ||  String((s as any).locArgs?.[0] ?? '') === 95) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anna';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 29;
  }
  (s as any).npctemp = 96;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A96'  ||  String((s as any).locArgs?.[0] ?? '') === 96) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Katya';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aunt Katya';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
  }
  (s as any).npctemp = 97;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A97'  ||  String((s as any).locArgs?.[0] ?? '') === 97) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Camille';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
  }
  (s as any).npctemp = 98;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A98'  ||  String((s as any).locArgs?.[0] ?? '') === 98) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aslan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aslan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
  }
  (s as any).npctemp = 99;
  if (String((s as any).locArgs?.[0] ?? '') === ''  &&  String((s as any).locArgs?.[0] ?? '') === 0  ||  String((s as any).locArgs?.[0] ?? '') === 'A99'  ||  String((s as any).locArgs?.[0] ?? '') === 99) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mukhtar';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mukhtar';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
  }
  scene.build();
}

export const npcstatic2: LocationDef = {
  name: 'npcstatic2',
  region: 'other',
  enter: enter,
};
