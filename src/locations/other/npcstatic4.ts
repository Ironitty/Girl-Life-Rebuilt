import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 150;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A150'  ||  ((s as any).locArgs?.[0] ?? 0) === 150) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vagin';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Erast';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990527;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 110;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 26;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 151;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A151'  ||  ((s as any).locArgs?.[0] ?? 0) === 151) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kuznetsov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Evgeny';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991215;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 3;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 87;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 152;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A152'  ||  ((s as any).locArgs?.[0] ?? 0) === 152) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Krupin';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Feofan';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990822;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 70;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 153;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A153'  ||  ((s as any).locArgs?.[0] ?? 0) === 153) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vasilyev';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Gerasim';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990814;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 92;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 20;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 154;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A154'  ||  ((s as any).locArgs?.[0] ?? 0) === 154) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Popov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Radomir';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990302;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 370;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 51;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 155;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A155'  ||  ((s as any).locArgs?.[0] ?? 0) === 155) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Romanov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lavrenti';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990420;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 25;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 51;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 240;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 156;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A156'  ||  ((s as any).locArgs?.[0] ?? 0) === 156) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Fyodorov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Arkadi';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19980415;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 260;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 42;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 157;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A157'  ||  ((s as any).locArgs?.[0] ?? 0) === 157) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Yakovlev';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Roman';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990625;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 170;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 34;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 158;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A158'  ||  ((s as any).locArgs?.[0] ?? 0) === 158) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Bogdanov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Valentin';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990212;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 280;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 44;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 159;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A159'  ||  ((s as any).locArgs?.[0] ?? 0) === 159) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Alkaev';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Petia';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990829;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'outcast');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 28;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 160;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A160'  ||  ((s as any).locArgs?.[0] ?? 0) === 160) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Leonid';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Leonid';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Nosov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Nosov';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 161;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A161'  ||  ((s as any).locArgs?.[0] ?? 0) === 161) {
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nicholas\'s Friend';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
  }
  (s as any).npctemp = 162;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A162'  ||  ((s as any).locArgs?.[0] ?? 0) === 162) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Victor';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mistress\'s Driver';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 163;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A163'  ||  ((s as any).locArgs?.[0] ?? 0) === 163) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Arsen';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
  }
  (s as any).npctemp = 164;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A164'  ||  ((s as any).locArgs?.[0] ?? 0) === 164) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Maksim';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
  }
  (s as any).npctemp = 165;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A165'  ||  ((s as any).locArgs?.[0] ?? 0) === 165) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Yanka';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vanya';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990415;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'teaching');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 36;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 120;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 166;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A166'  ||  ((s as any).locArgs?.[0] ?? 0) === 166) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Nikita';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kirill';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nikita';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 167;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A167'  ||  ((s as any).locArgs?.[0] ?? 0) === 167) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Reinhold';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Reinhold';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 168;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A168'  ||  ((s as any).locArgs?.[0] ?? 0) === 168) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gedo';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Mazo';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Gedo Mazo';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 169;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A169'  ||  ((s as any).locArgs?.[0] ?? 0) === 169) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Dmitry';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Dima';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dima';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 170;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A170'  ||  ((s as any).locArgs?.[0] ?? 0) === 170) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Aleksei';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Alex';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Alex';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 171;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A171'  ||  ((s as any).locArgs?.[0] ?? 0) === 171) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Styopa';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Stepan';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Uncle Stepan';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Zakharav';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19820513;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 172;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A172'  ||  ((s as any).locArgs?.[0] ?? 0) === 172) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Andrei';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Saveliev';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19800317;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
  }
  (s as any).npctemp = 173;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A173'  ||  ((s as any).locArgs?.[0] ?? 0) === 173) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Igor';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Danilovich';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19920609;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    (s as any).npc_finance['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_height['A' + String((s as any).npctemp || '') + ''] = 182;
    (s as any).npc_weight['A' + String((s as any).npctemp || '') + ''] = 64;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_pic['A' + String((s as any).npctemp || '') + ''] = 'images/characters/shared/headshots_generic/31.jpg';
    (s as any).npc_icon['A' + String((s as any).npctemp || '') + ''] = 'images/system/phone/icons/icon_bf31.png';
  }
  (s as any).npctemp = 174;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A174'  ||  ((s as any).locArgs?.[0] ?? 0) === 174) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kirillov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19850120;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
  }
  (s as any).npctemp = 175;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A175'  ||  ((s as any).locArgs?.[0] ?? 0) === 175) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Gustav';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Gustav';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 10;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 176;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A176'  ||  ((s as any).locArgs?.[0] ?? 0) === 176) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Tatiana';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Tatiana';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19970410;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 177;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A177'  ||  ((s as any).locArgs?.[0] ?? 0) === 177) {
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Rude Fisherman';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Rude Fisherman';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 178;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A178'  ||  ((s as any).locArgs?.[0] ?? 0) === 178) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Petrovna';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Natalya';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 179;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A179'  ||  ((s as any).locArgs?.[0] ?? 0) === 179) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ilari';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ilari';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Markov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Markov';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 180;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A180'  ||  ((s as any).locArgs?.[0] ?? 0) === 180) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sasori';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 181;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A181'  ||  ((s as any).locArgs?.[0] ?? 0) === 181) {
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sexshop Cashier';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 182;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A182'  ||  ((s as any).locArgs?.[0] ?? 0) === 182) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Conan';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 183;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A183'  ||  ((s as any).locArgs?.[0] ?? 0) === 183) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Hidan';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 7;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 184;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A184'  ||  ((s as any).locArgs?.[0] ?? 0) === 184) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Eugene';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Eugene';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Isenberg';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Isenberg';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 185;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A185'  ||  ((s as any).locArgs?.[0] ?? 0) === 185) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Michael';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Misha';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Michael';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 186;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A186'  ||  ((s as any).locArgs?.[0] ?? 0) === 186) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ivan';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Master';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pavlov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Dr. Pavlov';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 15000;
  }
  (s as any).npctemp = 187;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A187'  ||  ((s as any).locArgs?.[0] ?? 0) === 187) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Elisabeta';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Liz';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Liz';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 188;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A188'  ||  ((s as any).locArgs?.[0] ?? 0) === 188) {
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 189;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A189'  ||  ((s as any).locArgs?.[0] ?? 0) === 189) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Nikolai';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Niko';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Volkov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Niko';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990405;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 140;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 64;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic4" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 190;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A190'  ||  ((s as any).locArgs?.[0] ?? 0) === 190) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Volkov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Yurik';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19951116;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 9;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 191;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A191'  ||  ((s as any).locArgs?.[0] ?? 0) === 191) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Belova';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Isabella';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19820922;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 23;
  }
  (s as any).npctemp = 192;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A192'  ||  ((s as any).locArgs?.[0] ?? 0) === 192) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Anastasia';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Nastja';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Nastja';
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 9;
  }
  (s as any).npctemp = 193;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A193'  ||  ((s as any).locArgs?.[0] ?? 0) === 193) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Alexander';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Alexei';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Radimov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Alexei Radimov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19710610;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'monstrous';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 24;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 3;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 12000;
  }
  (s as any).npctemp = 194;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A194'  ||  ((s as any).locArgs?.[0] ?? 0) === 194) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sergei';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tatarov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sergei Tatarov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19830409;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 10000;
  }
  (s as any).npctemp = 195;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A195'  ||  ((s as any).locArgs?.[0] ?? 0) === 195) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Egor';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Klyuyev';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Egor Klyuyev';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19630311;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 8000;
  }
  (s as any).npctemp = 196;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A196'  ||  ((s as any).locArgs?.[0] ?? 0) === 196) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ignatio';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ignat';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vedenin';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Ignat Vedenin';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19980501;
    (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = Math.floor(Math.random() * 11) + 40;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 11000;
  }
  (s as any).npctemp = 197;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A197'  ||  ((s as any).locArgs?.[0] ?? 0) === 197) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Simeon';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Syoma';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Rodionov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Syoma Rodionov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19891212;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 2;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 18000;
  }
  (s as any).npctemp = 198;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A198'  ||  ((s as any).locArgs?.[0] ?? 0) === 198) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vasilij';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Vasya';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Harkov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vasya Harkov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19950727;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_haircol['A' + String((s as any).npctemp || '') + ''] = 3;
  }
  (s as any).npctemp = 199;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A199'  ||  ((s as any).locArgs?.[0] ?? 0) === 199) {
    (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Boris';
    (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = '';
    (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Tabrov';
    (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Boris Tabrov';
    (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19790812;
    (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'body', 'actor');
    (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
    (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    (s as any).npc_height['A' + String((s as any).npctemp || '') + ''] = 182;
    (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 10500;
  }
  scene.build();
}

export const npcstatic4: LocationDef = {
  name: 'npcstatic4',
  region: 'other',
  enter: enter,
};
