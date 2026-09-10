import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 50;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A50'  ||  ((s as any).ARGS ?? 0)[0] === 50) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Stas';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 15;
    (s as any).npc_sexskill['A' + String((s as any).npctemp ?? '') + ''] = 1;
  }
  (s as any).npctemp = 51;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A51'  ||  ((s as any).ARGS ?? 0)[0] === 51) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Vitali';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Vitali';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
  }
  (s as any).npctemp = 52;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A52'  ||  ((s as any).ARGS ?? 0)[0] === 52) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Nicholas';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Polyakov';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Nicholas';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 16;
  }
  (s as any).npctemp = 53;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A53'  ||  ((s as any).ARGS ?? 0)[0] === 53) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Joe';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
  }
  (s as any).npctemp = 54;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A54'  ||  ((s as any).ARGS ?? 0)[0] === 54) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Mikhail';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Uncle Misha';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Uncle Misha';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'family');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 55;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A55'  ||  ((s as any).ARGS ?? 0)[0] === 55) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Oluuosegun';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Olu';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maina';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Olu';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'monstrous';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 17;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 30;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 56;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A56'  ||  ((s as any).ARGS ?? 0)[0] === 56) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Roma';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Roma';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Meynold';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Roma';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'friends');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 17;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
  }
  (s as any).npctemp = 57;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A57'  ||  ((s as any).ARGS ?? 0)[0] === 57) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Rex';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Borisyuk';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Rex';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'friends');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 5;
  }
  (s as any).npctemp = 58;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A58'  ||  ((s as any).ARGS ?? 0)[0] === 58) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Zhendos';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Zhen';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Mikhailov';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Zhendos';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_intel['A' + String((s as any).npctemp ?? '') + ''] = 34;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 5;
  }
  (s as any).npctemp = 59;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A59'  ||  ((s as any).ARGS ?? 0)[0] === 59) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Mishan';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Misha';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Andreev';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mishan';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_intel['A' + String((s as any).npctemp ?? '') + ''] = 38;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
  }
  (s as any).npctemp = 60;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A60'  ||  ((s as any).ARGS ?? 0)[0] === 60) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Miroslava';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Mira';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mira';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maximova';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 19990805;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 9;
    (s as any).npc_pic['A' + String((s as any).npctemp ?? '') + ''] = 'images/characters/gadukino/mira/mira.jpg';
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 5;
  }
  (s as any).npctemp = 61;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A61'  ||  ((s as any).ARGS ?? 0)[0] === 61) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Kolyamba';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Kolyamba';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Kolyamba';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Rostislav';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 20000605;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 16;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 4;
  }
  (s as any).npctemp = 62;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A62'  ||  ((s as any).ARGS ?? 0)[0] === 62) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Vasyanya';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Vasyan';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Vasyan';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Makarovich';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 20000906;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 15;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 4;
  }
  (s as any).npctemp = 63;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A63'  ||  ((s as any).ARGS ?? 0)[0] === 63) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Dimitriy';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Mitka';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mitka';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Ruslanov';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 20000117;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    (s as any).npc_pic['A' + String((s as any).npctemp ?? '') + ''] = 'images/characters/shared/headshots_main/big63.jpg';
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
  }
  (s as any).npctemp = 64;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A64'  ||  ((s as any).ARGS ?? 0)[0] === 64) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Afanasiy';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Afanasiy';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Afanasiy';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maximov';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 19650523;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    (s as any).npc_pic['A' + String((s as any).npctemp ?? '') + ''] = 'images/locations/gadukino/village/mirafather.jpg';
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 5;
  }
  (s as any).npctemp = 65;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A65'  ||  ((s as any).ARGS ?? 0)[0] === 65) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Vitaliy';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Vitaliy';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Vitaliy';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maximov';
    (s as any).npc_dob['A' + String((s as any).npctemp ?? '') + ''] = 20000623;
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
  }
  (s as any).npctemp = 67;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A67'  ||  ((s as any).ARGS ?? 0)[0] === 67) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Big C';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'monstrous';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 15;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 21;
  }
  (s as any).npctemp = 68;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A68'  ||  ((s as any).ARGS ?? 0)[0] === 68) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Perth';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Peter';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Petrovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Dr. Petrovich';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 13;
  }
  (s as any).npctemp = 69;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A69'  ||  ((s as any).ARGS ?? 0)[0] === 69) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Mikhail';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Coach';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Nikolaevich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mikhail N.';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    (s as any).npc_sexskill['A' + String((s as any).npctemp ?? '') + ''] = 2;
    (s as any).discoenable['A' + String((s as any).npctemp ?? '') + ''] = 1;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 70;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A70'  ||  ((s as any).ARGS ?? 0)[0] === 70) {
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Katalkin';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Captain Katalkin';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 71;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A71'  ||  ((s as any).ARGS ?? 0)[0] === 71) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Pasha';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Officer Pasha';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 72;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A72'  ||  ((s as any).ARGS ?? 0)[0] === 72) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Sergi';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Officer Sergi';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 19;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 73;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A73'  ||  ((s as any).ARGS ?? 0)[0] === 73) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Arthur';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Arthur';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Arthur';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'monstrous';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 16;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 26;
  }
  (s as any).npctemp = 74;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A74'  ||  ((s as any).ARGS ?? 0)[0] === 74) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Anatoly';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Chubais';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Borisovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Anatoly';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 12;
  }
  (s as any).npctemp = 75;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A75'  ||  ((s as any).ARGS ?? 0)[0] === 75) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Sergei';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Borisovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Sergei';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
    (s as any).npc_QW['A' + String((s as any).npctemp ?? '') + ''] = 0;
    (s as any).npc_rel['A' + String((s as any).npctemp ?? '') + ''] = 0;
    (s as any).npc_love['A' + String((s as any).npctemp ?? '') + ''] = 0;
    (s as any).npc_occupation['A' + String((s as any).npctemp ?? '') + ''] = '';
    (s as any).npc_outfit['A' + String((s as any).npctemp ?? '') + ''] = 0;
  }
  (s as any).npctemp = 76;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A76'  ||  ((s as any).ARGS ?? 0)[0] === 76) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Ilyushkin';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Makarovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Ily';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 14;
  }
  (s as any).npctemp = 77;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A77'  ||  ((s as any).ARGS ?? 0)[0] === 77) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Tryndin';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maximovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Tryndin';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 17;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 78;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A78'  ||  ((s as any).ARGS ?? 0)[0] === 78) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Vic';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Vic';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 19;
  }
  (s as any).npctemp = 79;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A79'  ||  ((s as any).ARGS ?? 0)[0] === 79) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Lena';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 24;
  }
  (s as any).npctemp = 80;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A80'  ||  ((s as any).ARGS ?? 0)[0] === 80) {
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Borisovich';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mrs. Borisovich';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 27;
  }
  (s as any).npctemp = 81;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A81'  ||  ((s as any).ARGS ?? 0)[0] === 81) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Alexei';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Alexey';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
  }
  (s as any).npctemp = 82;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A82'  ||  ((s as any).ARGS ?? 0)[0] === 82) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Djibril';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Maina';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Djibril';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'monstrous';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 16;
    (s as any).npc_intel['A' + String((s as any).npctemp ?? '') + ''] = 56;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 24;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 83;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A83'  ||  ((s as any).ARGS ?? 0)[0] === 83) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Goshi';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Sidorov';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Goshi';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_intel['A' + String((s as any).npctemp ?? '') + ''] = 67;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 84;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A84'  ||  ((s as any).ARGS ?? 0)[0] === 84) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Kendra';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = ' Abiodun';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Kendra';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'business');
    (s as any).npc_intel['A' + String((s as any).npctemp ?? '') + ''] = 63;
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 24;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 85;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A85'  ||  ((s as any).ARGS ?? 0)[0] === 85) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = '';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Kas';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 16;
  }
  (s as any).npctemp = 86;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A86'  ||  ((s as any).ARGS ?? 0)[0] === 86) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Yaroslav';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Yaroslav';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
  }
  (s as any).npctemp = 87;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A87'  ||  ((s as any).ARGS ?? 0)[0] === 87) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Boris';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = '';
    (s as any).npc_lastname['A' + String((s as any).npctemp ?? '') + ''] = 'Ivanovich';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 16;
  }
  (s as any).npctemp = 88;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A88'  ||  ((s as any).ARGS ?? 0)[0] === 88) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Alexander';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Alexander E.';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 17;
  }
  (s as any).npctemp = 89;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A89'  ||  ((s as any).ARGS ?? 0)[0] === 89) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Eugene';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Eugene';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Eugene';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 17;
    (s as any).npc_spermpot['A' + String((s as any).npctemp ?? '') + ''] = 5000;
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 9;
    (s as any).npc_hotcat['A' + String((s as any).npctemp ?? '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A<<npctemp>>');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 90;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A90'  ||  ((s as any).ARGS ?? 0)[0] === 90) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Angela';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_sexskill['A' + String((s as any).npctemp ?? '') + ''] = 1;
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 14;
  }
  (s as any).npctemp = 91;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A91'  ||  ((s as any).ARGS ?? 0)[0] === 91) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Abdul';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Abdul';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 21;
  }
  (s as any).npctemp = 92;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A92'  ||  ((s as any).ARGS ?? 0)[0] === 92) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Hassan';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Hassan';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
  }
  (s as any).npctemp = 93;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A93'  ||  ((s as any).ARGS ?? 0)[0] === 93) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Marisha';
    (s as any).npc_nickname['A' + String((s as any).npctemp ?? '') + ''] = 'Marisha';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 22;
  }
  (s as any).npctemp = 94;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A94'  ||  ((s as any).ARGS ?? 0)[0] === 94) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Nadia';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 9;
  }
  (s as any).npctemp = 95;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A95'  ||  ((s as any).ARGS ?? 0)[0] === 95) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Anna';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 29;
  }
  (s as any).npctemp = 96;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A96'  ||  ((s as any).ARGS ?? 0)[0] === 96) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Katya';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Aunt Katya';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp ?? '') + ''] = 19;
  }
  (s as any).npctemp = 97;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A97'  ||  ((s as any).ARGS ?? 0)[0] === 97) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Camille';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 20;
  }
  (s as any).npctemp = 98;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A98'  ||  ((s as any).ARGS ?? 0)[0] === 98) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Aslan';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Aslan';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 17;
  }
  (s as any).npctemp = 99;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).ARGS ?? 0)[0] === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A99'  ||  ((s as any).ARGS ?? 0)[0] === 99) {
    (s as any).npc_firstname['A' + String((s as any).npctemp ?? '') + ''] = 'Mukhtar';
    (s as any).npc_usedname['A' + String((s as any).npctemp ?? '') + ''] = 'Mukhtar';
    (s as any).npc_gender['A' + String((s as any).npctemp ?? '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp ?? '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp ?? '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp ?? '') + ''] = 18;
  }
  scene.build();
}

export const npcstatic2: LocationDef = {
  name: 'npcstatic2',
  region: 'other',
  enter: enter,
};
