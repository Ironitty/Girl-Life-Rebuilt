import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 150;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A150'  ||  ((s as any).locArgs?.[0] ?? 0) === 150) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vagin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990527;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 110;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 26;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 151;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A151'  ||  ((s as any).locArgs?.[0] ?? 0) === 151) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kuznetsov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991215;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 3;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 87;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 152;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A152'  ||  ((s as any).locArgs?.[0] ?? 0) === 152) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Krupin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990822;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 70;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 153;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A153'  ||  ((s as any).locArgs?.[0] ?? 0) === 153) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vasilyev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990814;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 92;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 154;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A154'  ||  ((s as any).locArgs?.[0] ?? 0) === 154) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Popov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990302;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 370;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 51;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 155;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A155'  ||  ((s as any).locArgs?.[0] ?? 0) === 155) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Romanov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990420;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 25;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 51;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 240;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 156;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A156'  ||  ((s as any).locArgs?.[0] ?? 0) === 156) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Fyodorov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19980415;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 260;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 42;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 157;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A157'  ||  ((s as any).locArgs?.[0] ?? 0) === 157) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Yakovlev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990625;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 170;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 34;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 158;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A158'  ||  ((s as any).locArgs?.[0] ?? 0) === 158) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Bogdanov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990212;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 280;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 44;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 159;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A159'  ||  ((s as any).locArgs?.[0] ?? 0) === 159) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Alkaev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990829;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 28;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 160;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A160'  ||  ((s as any).locArgs?.[0] ?? 0) === 160) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Leonid';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Leonid';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Nosov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Nosov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 161;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A161'  ||  ((s as any).locArgs?.[0] ?? 0) === 161) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nicholas\'s Friend';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
  }
  (s as any).npctemp = 162;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A162'  ||  ((s as any).locArgs?.[0] ?? 0) === 162) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Victor';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mistress\'s Driver';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 163;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A163'  ||  ((s as any).locArgs?.[0] ?? 0) === 163) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
  }
  (s as any).npctemp = 164;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A164'  ||  ((s as any).locArgs?.[0] ?? 0) === 164) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
  }
  (s as any).npctemp = 165;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A165'  ||  ((s as any).locArgs?.[0] ?? 0) === 165) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Yanka';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990415;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 36;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 120;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 166;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A166'  ||  ((s as any).locArgs?.[0] ?? 0) === 166) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Nikita';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kirill';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nikita';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 167;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A167'  ||  ((s as any).locArgs?.[0] ?? 0) === 167) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Reinhold';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Reinhold';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 168;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A168'  ||  ((s as any).locArgs?.[0] ?? 0) === 168) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gedo';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Mazo';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Gedo Mazo';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 169;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A169'  ||  ((s as any).locArgs?.[0] ?? 0) === 169) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Dmitry';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Dima';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dima';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 170;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A170'  ||  ((s as any).locArgs?.[0] ?? 0) === 170) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Aleksei';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Alex';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Alex';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 171;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A171'  ||  ((s as any).locArgs?.[0] ?? 0) === 171) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Styopa';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Stepan';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Uncle Stepan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Zakharav';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19820513;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 172;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A172'  ||  ((s as any).locArgs?.[0] ?? 0) === 172) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Saveliev';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19800317;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
  }
  (s as any).npctemp = 173;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A173'  ||  ((s as any).locArgs?.[0] ?? 0) === 173) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Danilovich';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19920609;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_finance) (s as any).npc_finance = {}; (s as any).npc_finance['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_height) (s as any).npc_height = {}; (s as any).npc_height['A' + String((s as any).npctemp || '') + ''] = 182;
    if (!(s as any).npc_weight) (s as any).npc_weight = {}; (s as any).npc_weight['A' + String((s as any).npctemp || '') + ''] = 64;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_pic) (s as any).npc_pic = {}; (s as any).npc_pic['A' + String((s as any).npctemp || '') + ''] = 'images/characters/shared/headshots_generic/31.jpg';
    if (!(s as any).npc_icon) (s as any).npc_icon = {}; (s as any).npc_icon['A' + String((s as any).npctemp || '') + ''] = 'images/system/phone/icons/icon_bf31.png';
  }
  (s as any).npctemp = 174;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A174'  ||  ((s as any).locArgs?.[0] ?? 0) === 174) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kirillov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19850120;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
  }
  (s as any).npctemp = 175;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A175'  ||  ((s as any).locArgs?.[0] ?? 0) === 175) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gustav';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Gustav';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 176;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A176'  ||  ((s as any).locArgs?.[0] ?? 0) === 176) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Tatiana';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Tatiana';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19970410;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 177;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A177'  ||  ((s as any).locArgs?.[0] ?? 0) === 177) {
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Rude Fisherman';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Rude Fisherman';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 178;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A178'  ||  ((s as any).locArgs?.[0] ?? 0) === 178) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Petrovna';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 179;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A179'  ||  ((s as any).locArgs?.[0] ?? 0) === 179) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ilari';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ilari';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Markov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Markov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 180;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A180'  ||  ((s as any).locArgs?.[0] ?? 0) === 180) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 181;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A181'  ||  ((s as any).locArgs?.[0] ?? 0) === 181) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sexshop Cashier';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 182;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A182'  ||  ((s as any).locArgs?.[0] ?? 0) === 182) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 183;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A183'  ||  ((s as any).locArgs?.[0] ?? 0) === 183) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 7;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 184;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A184'  ||  ((s as any).locArgs?.[0] ?? 0) === 184) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Eugene';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Eugene';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Isenberg';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Isenberg';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 185;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A185'  ||  ((s as any).locArgs?.[0] ?? 0) === 185) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Michael';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Misha';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Michael';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 186;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A186'  ||  ((s as any).locArgs?.[0] ?? 0) === 186) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Master';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pavlov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dr. Pavlov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 15000;
  }
  (s as any).npctemp = 187;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A187'  ||  ((s as any).locArgs?.[0] ?? 0) === 187) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Elisabeta';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Liz';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Liz';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 188;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A188'  ||  ((s as any).locArgs?.[0] ?? 0) === 188) {
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 189;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A189'  ||  ((s as any).locArgs?.[0] ?? 0) === 189) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Nikolai';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Niko';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Volkov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Niko';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990405;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 140;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 64;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 190;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A190'  ||  ((s as any).locArgs?.[0] ?? 0) === 190) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Volkov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19951116;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 191;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A191'  ||  ((s as any).locArgs?.[0] ?? 0) === 191) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Belova';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19820922;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 23;
  }
  (s as any).npctemp = 192;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A192'  ||  ((s as any).locArgs?.[0] ?? 0) === 192) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Anastasia';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Nastja';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nastja';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 193;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A193'  ||  ((s as any).locArgs?.[0] ?? 0) === 193) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Alexander';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Alexei';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Radimov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Alexei Radimov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19710610;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'monstrous';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 24;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 3;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 12000;
  }
  (s as any).npctemp = 194;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A194'  ||  ((s as any).locArgs?.[0] ?? 0) === 194) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tatarov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sergei Tatarov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19830409;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 10000;
  }
  (s as any).npctemp = 195;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A195'  ||  ((s as any).locArgs?.[0] ?? 0) === 195) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Egor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Klyuyev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Egor Klyuyev';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19630311;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 8000;
  }
  (s as any).npctemp = 196;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A196'  ||  ((s as any).locArgs?.[0] ?? 0) === 196) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ignatio';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ignat';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vedenin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Ignat Vedenin';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19980501;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 11) + 40;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 11000;
  }
  (s as any).npctemp = 197;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A197'  ||  ((s as any).locArgs?.[0] ?? 0) === 197) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Simeon';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Syoma';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Rodionov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Syoma Rodionov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19891212;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 2;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 18000;
  }
  (s as any).npctemp = 198;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A198'  ||  ((s as any).locArgs?.[0] ?? 0) === 198) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vasilij';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vasya';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Harkov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vasya Harkov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19950727;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_haircol) (s as any).npc_haircol = {}; (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 3;
  }
  (s as any).npctemp = 199;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A199'  ||  ((s as any).locArgs?.[0] ?? 0) === 199) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Boris';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tabrov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Boris Tabrov';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19790812;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'body', 'actor');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_height) (s as any).npc_height = {}; (s as any).npc_height['A' + String((s as any).npctemp || '') + ''] = 182;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 10500;
  }
  scene.build();
}

export const npcstatic4: LocationDef = {
  name: 'npcstatic4',
  region: 'other',
  enter: enter,
};
