import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 150;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A150'  ||  Number((s as any).locArgs?.[0] ?? 0) === 150) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Erast';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Erast';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vagin';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Erast';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990527;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 110;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 26;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 151;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A151'  ||  Number((s as any).locArgs?.[0] ?? 0) === 151) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Evgeny';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Evgeny';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kuznetsov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Evgeny';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19991215;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 87;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 152;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A152'  ||  Number((s as any).locArgs?.[0] ?? 0) === 152) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Feofan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Feofan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Krupin';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Feofan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990822;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 70;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 60;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 153;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A153'  ||  Number((s as any).locArgs?.[0] ?? 0) === 153) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gerasim';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gerasim';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasilyev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gerasim';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990814;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 92;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 154;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A154'  ||  Number((s as any).locArgs?.[0] ?? 0) === 154) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radomir';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radomir';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Popov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radomir';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990302;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 370;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 51;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 155;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A155'  ||  Number((s as any).locArgs?.[0] ?? 0) === 155) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lavrenti';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lavrenti';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Romanov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Lavrenti';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990420;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 25;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 51;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 240;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 156;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A156'  ||  Number((s as any).locArgs?.[0] ?? 0) === 156) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arkadi';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arkadi';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Fyodorov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arkadi';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19980415;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 260;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 42;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 157;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A157'  ||  Number((s as any).locArgs?.[0] ?? 0) === 157) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roman';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roman';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yakovlev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Roman';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990625;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 170;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 34;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 158;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A158'  ||  Number((s as any).locArgs?.[0] ?? 0) === 158) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valentin';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valentin';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Bogdanov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Valentin';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990212;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 280;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 44;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 159;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A159'  ||  Number((s as any).locArgs?.[0] ?? 0) === 159) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petia';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alkaev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petia';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990829;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 28;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 160;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A160'  ||  Number((s as any).locArgs?.[0] ?? 0) === 160) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Leonid';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Leonid';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nosov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mr. Nosov';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 161;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A161'  ||  Number((s as any).locArgs?.[0] ?? 0) === 161) {
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nicholas\'s Friend';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
  }
  (s as any).npctemp = 162;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A162'  ||  Number((s as any).locArgs?.[0] ?? 0) === 162) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Victor';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mistress\'s Driver';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
  }
  (s as any).npctemp = 163;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A163'  ||  Number((s as any).locArgs?.[0] ?? 0) === 163) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arsen';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arsen';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Arsen';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
  }
  (s as any).npctemp = 164;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A164'  ||  Number((s as any).locArgs?.[0] ?? 0) === 164) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maksim';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maksim';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Maksim';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
  }
  (s as any).npctemp = 165;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A165'  ||  Number((s as any).locArgs?.[0] ?? 0) === 165) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vanya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vanya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yanka';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vanya';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990415;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 36;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 120;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 166;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A166'  ||  Number((s as any).locArgs?.[0] ?? 0) === 166) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikita';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kirill';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikita';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 167;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A167'  ||  Number((s as any).locArgs?.[0] ?? 0) === 167) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Reinhold';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Reinhold';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 168;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A168'  ||  Number((s as any).locArgs?.[0] ?? 0) === 168) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gedo';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mazo';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gedo Mazo';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 169;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A169'  ||  Number((s as any).locArgs?.[0] ?? 0) === 169) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dmitry';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dima';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dima';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 170;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A170'  ||  Number((s as any).locArgs?.[0] ?? 0) === 170) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Aleksei';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alex';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alex';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 171;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A171'  ||  Number((s as any).locArgs?.[0] ?? 0) === 171) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Styopa';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Stepan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Uncle Stepan';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Zakharav';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19820513;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 22;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 4;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 172;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A172'  ||  Number((s as any).locArgs?.[0] ?? 0) === 172) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andrei';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andrei';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Andrei';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Saveliev';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19800317;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 20;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 173;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A173'  ||  Number((s as any).locArgs?.[0] ?? 0) === 173) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Igor';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Danilovich';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19920609;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_finance = (s as any).npc_finance ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 182;
    ((s as any).npc_weight = (s as any).npc_weight ?? {})['A' + String(((s as any).npctemp ?? 0))] = 64;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_pic = (s as any).npc_pic ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/characters/shared/headshots_generic/31.jpg';
    ((s as any).npc_icon = (s as any).npc_icon ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'images/system/phone/icons/icon_bf31.png';
  }
  (s as any).npctemp = 174;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A174'  ||  Number((s as any).locArgs?.[0] ?? 0) === 174) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Kirillov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19850120;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
  }
  (s as any).npctemp = 175;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A175'  ||  Number((s as any).locArgs?.[0] ?? 0) === 175) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gustav';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Gustav';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 176;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A176'  ||  Number((s as any).locArgs?.[0] ?? 0) === 176) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tatiana';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tatiana';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19970410;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
  }
  (s as any).npctemp = 177;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A177'  ||  Number((s as any).locArgs?.[0] ?? 0) === 177) {
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rude Fisherman';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rude Fisherman';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 178;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A178'  ||  Number((s as any).locArgs?.[0] ?? 0) === 178) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natalya';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natalya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Petrovna';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Natalya';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
  }
  (s as any).npctemp = 179;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A179'  ||  Number((s as any).locArgs?.[0] ?? 0) === 179) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ilari';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ilari';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Markov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Mr. Markov';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thicker than average';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 180;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A180'  ||  Number((s as any).locArgs?.[0] ?? 0) === 180) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasori';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasori';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasori';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sasori';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
  }
  (s as any).npctemp = 181;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A181'  ||  Number((s as any).locArgs?.[0] ?? 0) === 181) {
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sexshop Cashier';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 182;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A182'  ||  Number((s as any).locArgs?.[0] ?? 0) === 182) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Conan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Conan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Conan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 183;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A183'  ||  Number((s as any).locArgs?.[0] ?? 0) === 183) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Hidan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Hidan';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Hidan';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'skinny';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 7;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
  }
  (s as any).npctemp = 184;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A184'  ||  Number((s as any).locArgs?.[0] ?? 0) === 184) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Eugene';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Eugene';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Isenberg';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Miss Isenberg';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 185;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A185'  ||  Number((s as any).locArgs?.[0] ?? 0) === 185) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Michael';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Misha';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Michael';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 186;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A186'  ||  Number((s as any).locArgs?.[0] ?? 0) === 186) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ivan';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Master';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Pavlov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Dr. Pavlov';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'massive';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 14;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15000;
  }
  (s as any).npctemp = 187;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A187'  ||  Number((s as any).locArgs?.[0] ?? 0) === 187) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Elisabeta';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Liz';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Liz';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
  }
  (s as any).npctemp = 188;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A188'  ||  Number((s as any).locArgs?.[0] ?? 0) === 188) {
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'skinny';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 189;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A189'  ||  Number((s as any).locArgs?.[0] ?? 0) === 189) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nikolai';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Niko';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Volkov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Niko';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19990405;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})['A' + String(((s as any).npctemp ?? 0))] = 6;
    ((s as any).npc_rep = (s as any).npc_rep ?? {})['A' + String(((s as any).npctemp ?? 0))] = 140;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = 64;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + ((s as any).npctemp ?? 0) + '');
    qspCall(s, 'npc_standard_preferences', 'A' + ((s as any).npctemp ?? 0) + '');
  }
  (s as any).npctemp = 190;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A190'  ||  Number((s as any).locArgs?.[0] ?? 0) === 190) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yurik';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yurik';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Volkov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Yurik';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19951116;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'skinny';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
  }
  (s as any).npctemp = 191;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A191'  ||  Number((s as any).locArgs?.[0] ?? 0) === 191) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Isabella';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Isabella';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Belova';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Isabella';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19820922;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 23;
  }
  (s as any).npctemp = 192;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A192'  ||  Number((s as any).locArgs?.[0] ?? 0) === 192) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Anastasia';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nastja';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Nastja';
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_bust = (s as any).npc_bust ?? {})['A' + String(((s as any).npctemp ?? 0))] = 9;
  }
  (s as any).npctemp = 193;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A193'  ||  Number((s as any).locArgs?.[0] ?? 0) === 193) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexander';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexei';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Radimov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Alexei Radimov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19710610;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'monstrous';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 24;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 12000;
  }
  (s as any).npctemp = 194;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A194'  ||  Number((s as any).locArgs?.[0] ?? 0) === 194) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tatarov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Sergei Tatarov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19830409;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10000;
  }
  (s as any).npctemp = 195;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A195'  ||  Number((s as any).locArgs?.[0] ?? 0) === 195) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Egor';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Klyuyev';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Egor Klyuyev';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19630311;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'slim';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 8000;
  }
  (s as any).npctemp = 196;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A196'  ||  Number((s as any).locArgs?.[0] ?? 0) === 196) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ignatio';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ignat';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vedenin';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Ignat Vedenin';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19980501;
    ((s as any).npc_intel = (s as any).npc_intel ?? {})['A' + String(((s as any).npctemp ?? 0))] = (Math.floor(Math.random() * 11) + 40);
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'thick';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 13;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 16;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11000;
  }
  (s as any).npctemp = 197;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A197'  ||  Number((s as any).locArgs?.[0] ?? 0) === 197) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Simeon';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Syoma';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Rodionov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Syoma Rodionov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19891212;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 2;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 18000;
  }
  (s as any).npctemp = 198;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A198'  ||  Number((s as any).locArgs?.[0] ?? 0) === 198) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasilij';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasya';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Harkov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Vasya Harkov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19950727;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 17;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_haircol = (s as any).npc_haircol ?? {})['A' + String(((s as any).npctemp ?? 0))] = 3;
  }
  (s as any).npctemp = 199;
  if (Number((s as any).locArgs?.[0] ?? 0) === ''  &&  Number((s as any).locArgs?.[0] ?? 0) === 0  ||  Number((s as any).locArgs?.[0] ?? 0) === 'A199'  ||  Number((s as any).locArgs?.[0] ?? 0) === 199) {
    ((s as any).npc_firstname = (s as any).npc_firstname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Boris';
    ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A' + String(((s as any).npctemp ?? 0))] = '';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Tabrov';
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'Boris Tabrov';
    ((s as any).npc_dob = (s as any).npc_dob ?? {})['A' + String(((s as any).npctemp ?? 0))] = 19790812;
    ((s as any).npc_gender = (s as any).npc_gender ?? {})['A' + String(((s as any).npctemp ?? 0))] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'body', 'actor');
    ((s as any).npc_thdick = (s as any).npc_thdick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 'well proportioned';
    ((s as any).npc_girth = (s as any).npc_girth ?? {})['A' + String(((s as any).npctemp ?? 0))] = 11;
    ((s as any).npc_dick = (s as any).npc_dick ?? {})['A' + String(((s as any).npctemp ?? 0))] = 15;
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})['A' + String(((s as any).npctemp ?? 0))] = 1;
    ((s as any).npc_height = (s as any).npc_height ?? {})['A' + String(((s as any).npctemp ?? 0))] = 182;
    ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})['A' + String(((s as any).npctemp ?? 0))] = 10500;
  }
  scene.build();
}

export const npcstatic4: LocationDef = {
  name: 'npcstatic4',
  region: 'other',
  enter: enter,
};
