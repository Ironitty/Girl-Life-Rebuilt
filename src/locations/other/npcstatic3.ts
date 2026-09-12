import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npctemp = 101;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A101'  ||  ((s as any).locArgs?.[0] ?? 0) === 101) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Andrew';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sobulyagin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Andrew M.';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
  }
  (s as any).npctemp = 102;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A102'  ||  ((s as any).locArgs?.[0] ?? 0) === 102) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vasan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Nails';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Bob';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 11;
  }
  (s as any).npctemp = 103;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A103'  ||  ((s as any).locArgs?.[0] ?? 0) === 103) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Bereza';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Birch';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
  }
  (s as any).npctemp = 104;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A104'  ||  ((s as any).locArgs?.[0] ?? 0) === 104) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Konstantin';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Witek';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 21;
  }
  (s as any).npctemp = 105;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A105'  ||  ((s as any).locArgs?.[0] ?? 0) === 105) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Kostil';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Spike';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
  }
  (s as any).npctemp = 106;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A106'  ||  ((s as any).locArgs?.[0] ?? 0) === 106) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Udmurt';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Udmurt';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
  }
  (s as any).npctemp = 107;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A107'  ||  ((s as any).locArgs?.[0] ?? 0) === 107) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Seri';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Gray';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
  }
  (s as any).npctemp = 108;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A108'  ||  ((s as any).locArgs?.[0] ?? 0) === 108) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vladimir';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
  }
  (s as any).npctemp = 109;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A109'  ||  ((s as any).locArgs?.[0] ?? 0) === 109) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Glory';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Banzai';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
  }
  (s as any).npctemp = 110;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A110'  ||  ((s as any).locArgs?.[0] ?? 0) === 110) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vitaly';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vitaly';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
  }
  (s as any).npctemp = 111;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A111'  ||  ((s as any).locArgs?.[0] ?? 0) === 111) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Isolde';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19970410;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_pic) (s as any).npc_pic = {}; (s as any).npc_pic['A' + String((s as any).npctemp || '') + ''] = 'images/characters/city/isolde/izolda.jpg';
  }
  (s as any).npctemp = 112;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A112'  ||  ((s as any).locArgs?.[0] ?? 0) === 112) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Sergey';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Shulgin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Sergey';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19670504;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'friends');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 113;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A113'  ||  ((s as any).locArgs?.[0] ?? 0) === 113) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Vadim';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Bely';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Vadim Bely';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19900603;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 15;
  }
  (s as any).npctemp = 114;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A114'  ||  ((s as any).locArgs?.[0] ?? 0) === 114) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Georgiy';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Bely';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19930717;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 21;
  }
  (s as any).npctemp = 115;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A115'  ||  ((s as any).locArgs?.[0] ?? 0) === 115) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Siple';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19920420;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
  }
  (s as any).npctemp = 116;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A116'  ||  ((s as any).locArgs?.[0] ?? 0) === 116) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Tatar';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19900223;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
  }
  (s as any).npctemp = 117;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A117'  ||  ((s as any).locArgs?.[0] ?? 0) === 117) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Dimitrij';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Stallion';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Zherebets';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Stallion';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19911205;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_spermpot) (s as any).npc_spermpot = {}; (s as any).npc_spermpot['A' + String((s as any).npctemp || '') + ''] = 60000;
  }
  (s as any).npctemp = 118;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A118'  ||  ((s as any).locArgs?.[0] ?? 0) === 118) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Boris';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Boris';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Barlovskay';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Barlovskay';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19590221;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'skinny';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 8;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 1;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 119;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A119'  ||  ((s as any).locArgs?.[0] ?? 0) === 119) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Borislav';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Slava';
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19711209;
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 26;
  }
  (s as any).npctemp = 120;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A120'  ||  ((s as any).locArgs?.[0] ?? 0) === 120) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mistress\' companion';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    if (!(s as any).npc_sexskill) (s as any).npc_sexskill = {}; (s as any).npc_sexskill['A' + String((s as any).npctemp || '') + ''] = 2;
  }
  (s as any).npctemp = 121;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A121'  ||  ((s as any).locArgs?.[0] ?? 0) === 121) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'That Guy';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
  }
  (s as any).npctemp = 122;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A122'  ||  ((s as any).locArgs?.[0] ?? 0) === 122) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Adrik';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 123;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A123'  ||  ((s as any).locArgs?.[0] ?? 0) === 123) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Petr';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 14;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 124;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A124'  ||  ((s as any).locArgs?.[0] ?? 0) === 124) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Kolyan';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 18;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 125;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A125'  ||  ((s as any).locArgs?.[0] ?? 0) === 125) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Yakov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 126;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A126'  ||  ((s as any).locArgs?.[0] ?? 0) === 126) {
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mikhail';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 127;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A127'  ||  ((s as any).locArgs?.[0] ?? 0) === 127) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Shulyov';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Shul';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Ivanko';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 16;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 128;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A128'  ||  ((s as any).locArgs?.[0] ?? 0) === 128) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Makar';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Makar';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Vasilyev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Vasilyev';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19700230;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 129;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A129'  ||  ((s as any).locArgs?.[0] ?? 0) === 129) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Serafim';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Serafim';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Ivanov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Ivanov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19800724;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 22;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 130;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A130'  ||  ((s as any).locArgs?.[0] ?? 0) === 130) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ilya';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ilya';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Yenotin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Yenotin';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19801221;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'slim';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 131;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A131'  ||  ((s as any).locArgs?.[0] ?? 0) === 131) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Viktor';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Viktor';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pavlovich';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Pavlovich';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19731120;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thicker than average';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 17;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 132;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A132'  ||  ((s as any).locArgs?.[0] ?? 0) === 132) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Ruslan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ruslan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Kuznetsov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Kuznetsov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19680828;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'massive';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 21;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 133;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A133'  ||  ((s as any).locArgs?.[0] ?? 0) === 133) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Rolan';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Rolan';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Matveev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mr. Matveev';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19621214;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'well proportioned';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 11;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 12;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 3;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 134;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A134'  ||  ((s as any).locArgs?.[0] ?? 0) === 134) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Aleksandrina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Aleksandrina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Volkov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Volkov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19850101;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 135;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A135'  ||  ((s as any).locArgs?.[0] ?? 0) === 135) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yeva';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Yeva';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sokoloff';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Sokoloff';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19590522;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 136;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A136'  ||  ((s as any).locArgs?.[0] ?? 0) === 136) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Olga';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Olga';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Aleksandrov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Aleksandrov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19800214;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 24;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 137;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A137'  ||  ((s as any).locArgs?.[0] ?? 0) === 137) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Raven';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Raven';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Braakman';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Braakman';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19730912;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 34;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 138;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A138'  ||  ((s as any).locArgs?.[0] ?? 0) === 138) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Arina';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Arina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Orlov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Miss Orlov';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19930307;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'teacher');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 139;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A139'  ||  ((s as any).locArgs?.[0] ?? 0) === 139) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Stanislava';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Stasya';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pavlov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Stasya';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991209;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 18;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 38;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 140;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A140'  ||  ((s as any).locArgs?.[0] ?? 0) === 140) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Yelizaveta';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lizaveta';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Petrov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lizaveta';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990830;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'psychology');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 63;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 60;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 141;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A141'  ||  ((s as any).locArgs?.[0] ?? 0) === 141) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Veronika';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Ronnie';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Sokolov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Veronika';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990725;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 49;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 0;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 142;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A142'  ||  ((s as any).locArgs?.[0] ?? 0) === 142) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Zinaida';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Zina';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Alkaev';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Zinaida';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990311;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'nerd');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'programming');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 86;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 10;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 5;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 143;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A143'  ||  ((s as any).locArgs?.[0] ?? 0) === 143) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Alyona';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Alyona';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Zima';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Alyona';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990809;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 7;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 30;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 120;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 144;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A144'  ||  ((s as any).locArgs?.[0] ?? 0) === 144) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Anushka';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Nush';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Konstantinov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Anushka';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19991228;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 14;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 76;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 220;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 145;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A145'  ||  ((s as any).locArgs?.[0] ?? 0) === 145) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Katyusha';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Katyusha';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Maksimov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Katyusha';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 1;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990110;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'gopnik');
    if (!(s as any).npc_bust) (s as any).npc_bust = {}; (s as any).npc_bust['A' + String((s as any).npctemp || '') + ''] = 4;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 28;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 4;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 70;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 146;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A146'  ||  ((s as any).locArgs?.[0] ?? 0) === 146) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Marcus';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Marcus';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Larson';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Marcus';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990426;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 47;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 220;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 147;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A147'  ||  ((s as any).locArgs?.[0] ?? 0) === 147) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Andrey';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Andrey';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Aleksandrov';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Andrey';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990903;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 19;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 37;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 210;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 8;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  (s as any).npctemp = 148;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A148'  ||  ((s as any).locArgs?.[0] ?? 0) === 148) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Mefodiy';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Mefodiy';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Utkin';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Mefodiy';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990620;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'coolkid');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 20;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 6;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 130;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 44;
  }
  (s as any).npctemp = 149;
  if (((s as any).locArgs?.[0] ?? 0) === ''  &&  ((s as any).locArgs?.[0] ?? 0) === 0  ||  ((s as any).locArgs?.[0] ?? 0) === 'A149'  ||  ((s as any).locArgs?.[0] ?? 0) === 149) {
    if (!(s as any).npc_firstname) (s as any).npc_firstname = {}; (s as any).npc_firstname['A' + String((s as any).npctemp || '') + ''] = 'Lazar';
    if (!(s as any).npc_nickname) (s as any).npc_nickname = {}; (s as any).npc_nickname['A' + String((s as any).npctemp || '') + ''] = 'Lazar';
    if (!(s as any).npc_lastname) (s as any).npc_lastname = {}; (s as any).npc_lastname['A' + String((s as any).npctemp || '') + ''] = 'Pajari';
    if (!(s as any).npc_usedname) (s as any).npc_usedname = {}; (s as any).npc_usedname['A' + String((s as any).npctemp || '') + ''] = 'Lazar';
    if (!(s as any).npc_gender) (s as any).npc_gender = {}; (s as any).npc_gender['A' + String((s as any).npctemp || '') + ''] = 0;
    if (!(s as any).npc_dob) (s as any).npc_dob = {}; (s as any).npc_dob['A' + String((s as any).npctemp || '') + ''] = 19990709;
    qspCall(s, 'npcstaticdefaults', 'defaults');
    qspCall(s, 'npcstaticdefaults', 'group', 'jock');
    qspCall(s, 'npcstaticdefaults', 'uni_type', 'other');
    if (!(s as any).npc_thdick) (s as any).npc_thdick = {}; (s as any).npc_thdick['A' + String((s as any).npctemp || '') + ''] = 'thick';
    if (!(s as any).npc_girth) (s as any).npc_girth = {}; (s as any).npc_girth['A' + String((s as any).npctemp || '') + ''] = 13;
    if (!(s as any).npc_dick) (s as any).npc_dick = {}; (s as any).npc_dick['A' + String((s as any).npctemp || '') + ''] = 23;
    if (!(s as any).npc_intel) (s as any).npc_intel = {}; (s as any).npc_intel['A' + String((s as any).npctemp || '') + ''] = 40;
    if (!(s as any).npc_rep) (s as any).npc_rep = {}; (s as any).npc_rep['A' + String((s as any).npctemp || '') + ''] = 320;
    if (!(s as any).npc_hotcat) (s as any).npc_hotcat = {}; (s as any).npc_hotcat['A' + String((s as any).npctemp || '') + ''] = 7;
    qspCall(s, 'npc_set_preference', 'reset', 'A' + qspUntranslated(s, "npctemp>", { location: "npcstatic3" }) + '');
    qspCall(s, 'npc_standard_preferences', 'A<<npctemp>>');
  }
  scene.build();
}

export const npcstatic3: LocationDef = {
  name: 'npcstatic3',
  region: 'other',
  enter: enter,
};
