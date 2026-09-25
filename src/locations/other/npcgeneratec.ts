import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAssignIndex(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterAssignDob(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterAssignStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetDetails(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetLifestyle(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetOccupation(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetPersonality(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetApprnc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).npclastgenerated ?? 0)]; enterSetOtherVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanup(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterAssignIndex(s: GameState, scene: SceneBuilder): void {
  if ((String((((s as any).cemptyarray ?? 0)?.[0] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'C') {
    (s as any).npclastgenerated = (((s as any).cemptyarray ?? 0)?.[0] ?? 0);
    (s as any).cemptyarray = undefined;
  } else {
    do {
      (s as any).ngc_scheck = 0;
      (s as any).npclastgenerated = 'C\' + \'' + ((s as any).carraynumber ?? 0) + '';
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['npcID'] = 'C\' + \'' + ((s as any).carraynumber ?? 0)-1 + '';
      if (((s as any).npc_perstype ?? 0)[((s as any).npcgeneratecVars ?? 0)?.['npcID']] === ''  &&  ((s as any).carraynumber ?? 0) > 0) {
        (s as any).carraynumber = ((s as any).carraynumber ?? 0) - (1);
        (s as any).ngc_scheck = 1;
      } else {
        if (((s as any).npc_perstype ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === '') {
          (s as any).ngc_scheck = 0;
        } else {
          (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
          (s as any).ngc_scheck = 1;
        }
      }
      (s as any).ngc_scheck = undefined;
    } while (((s as any).ngc_scheck ?? 0) === 1);
  }
  (s as any).carraynumber = ((s as any).carraynumber ?? 0) + (1);
  ((s as any).npc_index = (s as any).npc_index ?? {})[String((s as any).npclastgenerated ?? 0)] = ((s as any).npclastgenerated ?? 0);
  scene.build();
}

function enterAssignDob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'time', 'to_daystart', ((s as any).year ?? 0) - (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) - 1, ((s as any).month ?? 0), ((s as any).day ?? 0));
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['min_daystart'] = (((s as any).dateVars ?? {})?.['daystart'] ?? 0) + 1;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['birth_daystart'] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? {})?.['min_daystart'] ?? 0) + 364 - (((s as any).npcgeneratecVars ?? 0)?.['min_daystart']) + 1)) + ((((s as any).npcgeneratecVars ?? 0)?.['min_daystart'])));
  qspCall(s, 'time', 'to_date', (((s as any).npcgeneratecVars ?? 0)?.['birth_daystart']));
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).dateVars ?? {})?.['year'] ?? 0) * 10000;
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_dob[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).dateVars ?? {})?.['month'] ?? 0) * 100);
  ((s as any).npc_dob = (s as any).npc_dob ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_dob[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((((s as any).dateVars ?? 0)?.['day']));
  scene.build();
}

function enterAssignStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 18) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['virgin'] = (Math.floor(Math.random() * 21) + 0);
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['mind'] = (Math.floor(Math.random() * 21) + 20);
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body'] = (Math.floor(Math.random() * 21) + 40);
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 22) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['virgin'] = (Math.floor(Math.random() * 13) + 10);
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['mind'] = (Math.floor(Math.random() * 21) + 25);
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body'] = (Math.floor(Math.random() * 21) + 35);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 30) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['virgin'] = (Math.floor(Math.random() * 6) + 19);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['mind'] = (Math.floor(Math.random() * 21) + 30);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body'] = (Math.floor(Math.random() * 21) + 30);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] < 35) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['virgin'] = (Math.floor(Math.random() * 8) + 19);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['mind'] = (Math.floor(Math.random() * 21) + 35);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body'] = (Math.floor(Math.random() * 21) + 25);
        } else {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['virgin'] = (Math.floor(Math.random() * 12) + 19);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['mind'] = (Math.floor(Math.random() * 21) + 40);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body'] = (Math.floor(Math.random() * 21) + 20);
        }
      }
    }
  }
  (s as any).temp_statmin = Math.min((((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) / 2, 20);
  ((s as any).npc_stren = (s as any).npc_stren ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['body']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_agil = (s as any).npc_agil ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['body']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_vital = (s as any).npc_vital ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['body']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_intel = (s as any).npc_intel ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['mind']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_prcptn = (s as any).npc_prcptn ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['mind']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_react = (s as any).npc_react ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['mind']) - ((s as any).temp_statmin ?? 0) + 1)) + (((s as any).temp_statmin ?? 0)));
  ((s as any).npc_chrsm = (s as any).npc_chrsm ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['mind']) - (((s as any).npcgeneratecVars ?? {})?.['body'] ?? 0) / 2 + 1)) + ((((s as any).npcgeneratecVars ?? {})?.['body'] ?? 0) / 2));
  ((s as any).npc_sprt = (s as any).npc_sprt ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npcgeneratecVars ?? 0)?.['mind']) - (((s as any).npcgeneratecVars ?? {})?.['body'] ?? 0) / 2 + 1)) + ((((s as any).npcgeneratecVars ?? {})?.['body'] ?? 0) / 2));
  ((s as any).npc_magik = (s as any).npc_magik ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  if (((s as any).npcgeneratecVars ?? 0)?.['virgin'] < 20) {
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    ((s as any).npc_sexskill = (s as any).npc_sexskill ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 100) + 1);
  }
  scene.build();
}

function enterSetDetails(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusMale');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGenDick(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetDick(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).npc_gender = (s as any).npc_gender ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_height'] = 175;
    ((s as any).npc_height = (s as any).npc_height ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10))) + (Math.floor(Math.random() * (8 - (-8) + 1)) + ((-8))) + (Math.floor(Math.random() * (5 - (-5) + 1)) + ((-5)));
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_weight'] = 68;
    ((s as any).npc_weight = (s as any).npc_weight ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_weight'] ?? 0) + (Math.floor(Math.random() * (23 - (-23) + 1)) + ((-23)));
    ((s as any).npc_notes = (s as any).npc_notes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'A male.';
    ((s as any).npc_bust = (s as any).npc_bust ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusFemale');
      ((s as any).npc_gender = (s as any).npc_gender ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_height'] = 165;
      ((s as any).npc_height = (s as any).npc_height ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10))) + (Math.floor(Math.random() * (8 - (-8) + 1)) + ((-8))) + (Math.floor(Math.random() * (5 - (-5) + 1)) + ((-5)));
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_weight'] = 60;
      ((s as any).npc_weight = (s as any).npc_weight ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_weight'] ?? 0) + (Math.floor(Math.random() * (21 - (-21) + 1)) + ((-21)));
      ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})[((s as any).locArgs?.[1] ?? 0)] = (-1);
      ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})[((s as any).locArgs?.[1] ?? 0)] = (-1);
      ((s as any).npc_thdick = (s as any).npc_thdick ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'clitoris';
      ((s as any).npc_dick = (s as any).npc_dick ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
      ((s as any).npc_notes = (s as any).npc_notes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'A female.';
      ((s as any).npc_bust = (s as any).npc_bust ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * (15 - 0 + 1)) + (0));
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        ((s as any).npc_bust = (s as any).npc_bust ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_bust[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ((Math.floor(Math.random() * 16) + 0));
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusFemale');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGenDick(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetDick(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).npc_gender = (s as any).npc_gender ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_height'] = 165;
        ((s as any).npc_height = (s as any).npc_height ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (15 - (-15) + 1)) + ((-15)));
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_weight'] = 60;
        ((s as any).npc_weight = (s as any).npc_weight ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_weight'] ?? 0) + (Math.floor(Math.random() * (21 - (-21) + 1)) + ((-21)));
        ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})[((s as any).locArgs?.[1] ?? 0)] = (-1);
        ((s as any).npc_thdick = (s as any).npc_thdick ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'clitoris';
        ((s as any).npc_notes = (s as any).npc_notes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'A female Hermaphrodite.';
        ((s as any).npc_bust = (s as any).npc_bust ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * (15 - 0 + 1)) + (0));
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['firstname'] = qspFunc(s, 'npcrnamefile', 'rusMale');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGenDick(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterSetDick(s, scene); (s as any).locArgs = __savedLocArgs; }
        ((s as any).npc_gender = (s as any).npc_gender ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_height'] = 175;
        ((s as any).npc_height = (s as any).npc_height ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (15 - (-15) + 1)) + ((-15)));
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['av_weight'] = 68;
        ((s as any).npc_weight = (s as any).npc_weight ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['av_height'] ?? 0) + (Math.floor(Math.random() * (15 - (-15) + 1)) + ((-15)));
        ((s as any).npc_notes = (s as any).npc_notes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'A male Hermaphrodite.';
        ((s as any).npc_bust = (s as any).npc_bust ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 11) + 0);
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['nickname'] = qspFunc(s, 'npcrnamefile', 'get_nickname', (((s as any).npcgeneratecVars ?? 0)?.['firstname']));
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lastname'] = qspFunc(s, 'npcrnamefile', 'rusSur');
  ((s as any).npc_haircol = (s as any).npc_haircol ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).npc_haircol ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).npc_hair_desc = (s as any).npc_hair_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'black';
  } else {
    if (((s as any).npc_haircol ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
      ((s as any).npc_hair_desc = (s as any).npc_hair_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'blonde';
    } else {
      if (((s as any).npc_haircol ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
        ((s as any).npc_hair_desc = (s as any).npc_hair_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'brown';
      } else {
        if (((s as any).npc_haircol ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4) {
          ((s as any).npc_hair_desc = (s as any).npc_hair_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'red';
        }
      }
    }
  }
  ((s as any).npc_firstname = (s as any).npc_firstname ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['firstname']);
  ((s as any).npc_nickname = (s as any).npc_nickname ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['nickname']);
  ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['lastname']);
  if (((s as any).npcgeneratecVars ?? 0)?.['anonymous'] === 0  ||  ((s as any).npcgeneratecVars ?? 0)?.['name'] === '') {
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['firstname']);
  } else {
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['name']);
  }
  scene.build();
}

function enterGenDick(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'tiny') {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 8;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'short') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'chode') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'skinny') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 12;
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 9;
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'normal') {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'thick') {
              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 7;
              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'long') {
                ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'huge') {
                  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 'enormous') {
                    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 17;
                    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 14;
                  } else {
                    if (String((s as any).locArgs?.[1] ?? '') === 'lengthy') {
                      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
                    } else {
                      if (String((s as any).locArgs?.[1] ?? '') === 'gigantic') {
                        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
                      } else {
                        if (String((s as any).locArgs?.[1] ?? '') === 'monstrous') {
                          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 22;
                          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 15;
                        } else {
                          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 1 + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1) + (Math.floor(Math.random() * 4) + 1);
                          if ((!(Math.floor(Math.random() * 7) + 0))) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = ((s as any).npcgeneratecVars['dick_length'] ?? 0) + ((Math.floor(Math.random() * 8) + 1));
                          }
                          if ((!(Math.floor(Math.random() * 5) + 0))) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = ((s as any).npcgeneratecVars['dick_length'] ?? 0) + ((Math.floor(Math.random() * 6) + 1));
                          }
                          if ((!(Math.floor(Math.random() * 3) + 0))) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = ((s as any).npcgeneratecVars['dick_length'] ?? 0) + ((Math.floor(Math.random() * 4) + 1));
                          }
                          if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] > 30) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_length'] = 30;
                          }
                          if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 8) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 10;
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 11) {
                              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 11;
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 14) {
                                ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 12;
                              } else {
                                if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 20) {
                                  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 13;
                                } else {
                                  if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 23) {
                                    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 14;
                                  } else {
                                    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = 15;
                                  }
                                }
                              }
                            }
                          }
                          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 18) + 1);
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
                            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) - (3);
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 3) {
                              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) - (2);
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 6) {
                                ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) - (1);
                              } else {
                                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 7) {
                                  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) + (0);
                                } else {
                                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 13) {
                                    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) + (1);
                                  } else {
                                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] <= 16) {
                                      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) + (2);
                                    } else {
                                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 18) {
                                        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_girth'] = ((s as any).npcgeneratecVars['dick_girth'] ?? 0) + (3);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 9) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'skinny';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 10) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'slim';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 11) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'well proportioned';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 12) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'thicker than average';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 13) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'thick';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] === 14) {
              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'massive';
            } else {
              ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['thdick'] = 'monstrous';
            }
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 8) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_class'] = 'short';
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 9) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'tiny';
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'micropenis';
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 7501) + 4000);
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 5);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 11) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'short';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'short cock';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 7001) + 5000);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 10);
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'chode';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'chode';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6501) + 6000);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 15);
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 14) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_class'] = 'average';
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 10) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'skinny';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'pencil dick';
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6501) + 6000);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 15);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 12) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'normal';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'dick';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 7000);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 20);
        } else {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'thick';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'thick cock';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 7500);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 42) + 22);
        }
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['dick_length'] <= 19) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_class'] = 'big';
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 11) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'long';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'long cock';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 7500);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 42) + 22);
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 13) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'huge';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'sizeable cock';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 8000);
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 25);
          } else {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'enormous';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'enormous cock';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 8500);
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 42) + 27);
          }
        }
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_class'] = 'extra_big';
        if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 12) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'lengthy';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'lengthy dick';
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 8500);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 42) + 27);
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['dick_girth'] <= 14) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'gigantic';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'gigantic cock';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 9000);
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 41) + 30);
          } else {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_desc'] = 'monstrous';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['dick_noun'] = 'monster cock';
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['potency'] = (Math.floor(Math.random() * 6001) + 9500);
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['volume'] = (Math.floor(Math.random() * 42) + 32);
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetDick(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_dick = (s as any).npc_dick ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['dick_length']);
  ((s as any).npc_girth = (s as any).npc_girth ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['dick_girth']);
  ((s as any).npc_thdick = (s as any).npc_thdick ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['thdick']);
  ((s as any).npc_dick_class = (s as any).npc_dick_class ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['dick_class']);
  ((s as any).npc_dick_desc = (s as any).npc_dick_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['dick_desc']);
  ((s as any).npc_dick_noun = (s as any).npc_dick_noun ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['dick_noun']);
  ((s as any).npc_spermpot = (s as any).npc_spermpot ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['potency']);
  ((s as any).npc_spermvol = (s as any).npc_spermvol ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['volume']);
  scene.build();
}

function enterSetLifestyle(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 1) {
    ((s as any).npc_residence = (s as any).npc_residence ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pav_residential';
    ((s as any).npc_finance = (s as any).npc_finance ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 2) {
      ((s as any).npc_residence = (s as any).npc_residence ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'uni_grounds';
      ((s as any).npc_finance = (s as any).npc_finance ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['loc'] === 3) {
        ((s as any).npc_residence = (s as any).npc_residence ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'city_residential';
        ((s as any).npc_finance = (s as any).npc_finance ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 1);
      } else {
        ((s as any).npc_residence = (s as any).npc_residence ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'city_center';
        ((s as any).npc_finance = (s as any).npc_finance ?? {})[((s as any).locArgs?.[1] ?? 0)] = 2;
      }
    }
  }
  if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 8;
      ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
      ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 13;
      ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 21;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 15;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 20;
        ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 6;
        ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 14;
      } else {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 18;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 22;
        ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
        ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 17;
      }
    }
    if (((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 'pav_residential'  &&  ((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 'city_center'  &&  ((s as any).npcgeneratecVars ?? 0)?.['age'] < 28) {
      ((s as any).npc_student = (s as any).npc_student ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
      ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 4) + 1);
    } else {
      if (((s as any).npc_residence ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'uni_grounds') {
        ((s as any).npc_student = (s as any).npc_student ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 2;
      } else {
        ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 2);
      }
    }
    ((s as any).npc_style = (s as any).npc_style ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 5) + 1);
  } else {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 8;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
        ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 13;
        ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 21;
      } else {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 18;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 22;
        ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
        ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 17;
      }
      ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 4) + 2);
      ((s as any).npc_car = (s as any).npc_car ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * (1 - (-3) + 1)) + ((-3)));
      ((s as any).npc_style = (s as any).npc_style ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 5) + 1);
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 8;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 12;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 13;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 21;
        } else {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 18;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[((s as any).locArgs?.[1] ?? 0)] = 22;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[((s as any).locArgs?.[1] ?? 0)] = 9;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[((s as any).locArgs?.[1] ?? 0)] = 17;
        }
        ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 5);
        ((s as any).npc_car = (s as any).npc_car ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
        ((s as any).npc_style = (s as any).npc_style ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1 + ((Math.floor(Math.random() * 5) + 2) % 6);
      }
    }
  }
  if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4) {
    ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 5;
  }
  if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 6) {
    ((s as any).npc_apt_type = (s as any).npc_apt_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 5;
  }
  ((s as any).npc_day_off = (s as any).npc_day_off ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'normal';
    ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'jeans and a ' + ((((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) ? ('sweater') : ('blouse'));
  } else {
    if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
      ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'gopnik';
      ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'a tracksuit';
    } else {
      if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
        ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'nerdy';
        ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'jeans and a ' + (((Math.floor(Math.random() * 2) + 0)) ? ('t.A.T.u ') : ('Tetris ')) + 'shirt';
      } else {
        if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4) {
          ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'sporty';
          ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) ? ('jogging') : ('hot')) + ' pants and a tanktop';
        } else {
          if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 5) {
            ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fashionable';
            ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'a fashionable ' + ((((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) ? ('suit') : ('dress'));
          } else {
            ((s as any).npc_style_label = (s as any).npc_style_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'businessman';
            ((s as any).npc_outfit = (s as any).npc_outfit ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'an expensive ' + ((((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) ? ('suit') : ('dress'));
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['home_path'] = 'images/shared/romance/lovers/homes';
  if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 6) {
    ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'mansion';
    if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = 1;
    } else {
      if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2  ||  ((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = 2;
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = (Math.floor(Math.random() * 2) + 1);
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 1) {
      ((s as any).npc_apt_sparetype = (s as any).npc_apt_sparetype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'gaming';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 2) {
        ((s as any).npc_apt_sparetype = (s as any).npc_apt_sparetype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'gym';
      }
    }
    ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 1);
    ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
    ((s as any).npc_apt_guestroom = (s as any).npc_apt_guestroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/guestroom.jpg">';
    ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/kitchen.jpg">';
    ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
    ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bath.jpg">';
    ((s as any).npc_apt_guest_bathroom = (s as any).npc_apt_guest_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bathg.jpg">';
    ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/hall.jpg">';
    ((s as any).npc_apt_office = (s as any).npc_apt_office ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/office.jpg">';
    ((s as any).npc_apt_pool = (s as any).npc_apt_pool ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/pool.jpg">';
    ((s as any).npc_apt_sauna = (s as any).npc_apt_sauna ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/mansion/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/sauna.jpg">';
  } else {
    if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4  ||  ((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 5) {
      ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'multi_bedroom';
      if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = 1;
      } else {
        if (((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2  ||  ((s as any).npc_style ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 4) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = 2;
        } else {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['spare_room'] = (Math.floor(Math.random() * 2) + 1);
        }
      }
      if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 1) {
        ((s as any).npc_apt_sparetype = (s as any).npc_apt_sparetype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'gaming';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['spare_room'] === 2) {
          ((s as any).npc_apt_sparetype = (s as any).npc_apt_sparetype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'gym';
        }
      }
      ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 1);
      ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
      ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/kitchen.jpg">';
      ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
      ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bath.jpg">';
      ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
      ((s as any).npc_apt_spare = (s as any).npc_apt_spare ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/multibedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/' + (((s as any).npc_apt_sparetype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '.jpg">';
    } else {
      if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 3) {
        ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 1);
        ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'one_bedroom';
        ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
        ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/kitchen.jpg">';
        ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
        ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bath.jpg">';
        ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
      } else {
        if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
          ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 1);
          ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'studio';
          ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
          ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
          ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
          ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bath.jpg">';
          ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
        } else {
          if (((s as any).npc_apt_type ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
            ((s as any).npc_apt_number = (s as any).npc_apt_number ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 1);
            ((s as any).npc_apt_type_label = (s as any).npc_apt_type_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'student_dorm';
            ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bedroom.jpg">';
            ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/kitchen.jpg">';
            ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
            ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/1bedroom/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/bath.jpg">';
            ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})[((s as any).locArgs?.[1] ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="' + (((s as any).npcgeneratecVars ?? 0)?.['home_path']) + '/studio/' + (((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0) + '/living.jpg">';
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetOccupation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterPoorJobs(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterMiddleJobs(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRichJobs(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterPoorJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 16) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pimp';
      ((s as any).npc_gun = (s as any).npc_gun ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'drug_dealer';
        ((s as any).npc_gun = (s as any).npc_gun ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'enforcer';
          ((s as any).npc_gun = (s as any).npc_gun ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        } else {
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thief';
        }
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_police_type = (s as any).npc_police_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'undercover';
      ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      ((s as any).npc_gun = (s as any).npc_gun ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'enforcer';
      } else {
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thief';
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'police_officer';
        ((s as any).npc_gun = (s as any).npc_gun ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          ((s as any).npc_police_type = (s as any).npc_police_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'honest';
        } else {
          ((s as any).npc_police_type = (s as any).npc_police_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'corrupt';
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'cashier_supermarket';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'cashier_liquor';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'cashier_coffee';
            } else {
              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
                ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'barista';
              } else {
                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 7) {
                  ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fast_food';
                } else {
                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 8) {
                    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'taxi_driver';
                    ((s as any).npc_car = (s as any).npc_car ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
                  } else {
                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 9) {
                      ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'masseuse';
                    } else {
                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 10) {
                        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'masseuse_sexual';
                      } else {
                        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 11) {
                          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'factory';
                        } else {
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 12) {
                            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'bartender';
                          } else {
                            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 13) {
                              ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'mechanic';
                            } else {
                              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 14) {
                                ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'line_cook';
                              } else {
                                ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'waiter';
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterMiddleJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 11) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'masseuse';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'masseuse_sexual';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'factory';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'bartender';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'mechanic';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'line_cook';
            } else {
              if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
                ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'waiter';
              } else {
                if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 7) {
                  ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'personal_trainer';
                } else {
                  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 8) {
                    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'programmer';
                  } else {
                    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 9) {
                      ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
                      ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
                      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
                      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
                        ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pimp';
                      } else {
                        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
                          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'drug_dealer';
                        } else {
                          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
                            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'enforcer';
                          } else {
                            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thief';
                          }
                        }
                      }
                    } else {
                      ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'businessman';
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterRichJobs(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 7) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'personal_trainer';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'programmer';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
          ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pimp';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'drug_dealer';
          } else {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'enforcer';
          }
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
          ((s as any).npc_police_type = (s as any).npc_police_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'undercover';
          ((s as any).npc_criminal = (s as any).npc_criminal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
          ((s as any).npc_criminal_open = (s as any).npc_criminal_open ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'enforcer';
          } else {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thief';
          }
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
            ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'businessman';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
              ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'lawyer';
            } else {
              ((s as any).npc_occupation = (s as any).npc_occupation ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'investment_banker';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetPersonality(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'E';
  } else {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'I';
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('S');
  } else {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('N');
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('T');
  } else {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('F');
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('J');
  } else {
    ((s as any).npc_perstype = (s as any).npc_perstype ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_perstype[((s as any).locArgs?.[1] ?? 0)] ?? 0) + ('P');
  }
  if ((String((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((3)-1, ((3)-1)+(1))) === 'T') {
    if ((String((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'E') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['humor'] = (Math.floor(Math.random() * 2) + 2);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['humor'] = 3;
    }
  } else {
    if ((String((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'E') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['humor'] = (Math.floor(Math.random() * 2) + 1);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['humor'] = 1;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 1) {
    ((s as any).npc_humor = (s as any).npc_humor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'childish';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 2) {
      ((s as any).npc_humor = (s as any).npc_humor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'perverted';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['humor'] === 3) {
        ((s as any).npc_humor = (s as any).npc_humor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'intellectual';
      }
    }
  }
  ((s as any).npc_smoker = (s as any).npc_smoker ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 50) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 9) {
    ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 1);
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 29) {
      ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 3);
    } else {
      ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 10) + 1);
    }
  }
  if (((s as any).npc_sexdrive ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 5) {
    ((s as any).npc_energetic = (s as any).npc_energetic ?? {})[String((s as any).npcID ?? 0)] = (Math.floor(Math.random() * 2) + 0);
  }
  if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'perverted'  &&  ((s as any).npc_sexdrive ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 3) {
    ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  } else {
    ((s as any).npc_pervert = (s as any).npc_pervert ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    ((s as any).npc_mj = (s as any).npc_mj ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1 + ((Math.floor(Math.random() * 4) + 0) / 3);
  }
  if ((String((((s as any).npc_perstype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'E') {
    ((s as any).npc_door_pref = (s as any).npc_door_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'outdoor';
  } else {
    ((s as any).npc_door_pref = (s as any).npc_door_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'indoor';
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 1);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    ((s as any).npc_rel_goal = (s as any).npc_rel_goal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'sex';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      ((s as any).npc_rel_goal = (s as any).npc_rel_goal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'casual';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        ((s as any).npc_rel_goal = (s as any).npc_rel_goal ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'serious';
      }
    }
  }
  ((s as any).npc_fidelity = (s as any).npc_fidelity ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).npc_fidelity ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 4) {
    ((s as any).npc_fidelity_label = (s as any).npc_fidelity_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'cheater';
  } else {
    if (((s as any).npc_fidelity ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 6) {
      ((s as any).npc_fidelity_label = (s as any).npc_fidelity_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'seduced';
    } else {
      if (((s as any).npc_fidelity ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 7) {
        ((s as any).npc_fidelity_label = (s as any).npc_fidelity_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'open';
      } else {
        ((s as any).npc_fidelity_label = (s as any).npc_fidelity_label ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'faithful';
      }
    }
  }
  if (((s as any).npc_fidelity ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 5) {
    if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 26  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        ((s as any).npc_wife = (s as any).npc_wife ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
          ((s as any).npc_wife_age = (s as any).npc_wife_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) - (Math.floor(Math.random() * (20 - (-4) + 1)) + ((-4)));
        } else {
          ((s as any).npc_wife_age = (s as any).npc_wife_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4))) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4)));
        }
        if ((Math.floor(Math.random() * 4) + 1) === 1) {
          ((s as any).npc_wife_feelings = (s as any).npc_wife_feelings ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'estranged';
        } else {
          if ((Math.floor(Math.random() * 3) + 1) === 1) {
            ((s as any).npc_wife_feelings = (s as any).npc_wife_feelings ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'loveless';
          } else {
            if ((Math.floor(Math.random() * 2) + 1) === 1) {
              ((s as any).npc_wife_feelings = (s as any).npc_wife_feelings ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'transactional';
            } else {
              ((s as any).npc_wife_feelings = (s as any).npc_wife_feelings ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'love';
            }
          }
        }
      }
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        ((s as any).npc_ex_wife = (s as any).npc_ex_wife ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
          ((s as any).npc_ex_age = (s as any).npc_ex_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) - (Math.floor(Math.random() * (20 - (-4) + 1)) + ((-4)));
        } else {
          ((s as any).npc_ex_age = (s as any).npc_ex_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4))) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4)));
        }
        ((s as any).npc_divorced = (s as any).npc_divorced ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * ((((s as any).npc_age ?? 0)[((s as any).locArgs?.[1] ?? 0)]/15) - 1 + 1)) + (1));
      }
    } else {
      ((s as any).npc_girlfriend = (s as any).npc_girlfriend ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 2) + 0);
      if (((s as any).npcgeneratecVars ?? 0)?.['age'] >= 38) {
        ((s as any).npc_gf_age = (s as any).npc_gf_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) - (Math.floor(Math.random() * (20 - (-4) + 1)) + ((-4)));
      } else {
        ((s as any).npc_gf_age = (s as any).npc_gf_age ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? {})?.['age'] ?? 0) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4))) + (Math.floor(Math.random() * (4 - (-4) + 1)) + ((-4)));
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_earlyriser = (s as any).npc_earlyriser ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_latesleeper = (s as any).npc_latesleeper ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_earlyriser = (s as any).npc_earlyriser ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).npc_latesleeper = (s as any).npc_latesleeper ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_generous = (s as any).npc_generous ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_selfish = (s as any).npc_selfish ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_generous = (s as any).npc_generous ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).npc_selfish = (s as any).npc_selfish ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_rough = (s as any).npc_rough ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_gentle = (s as any).npc_gentle ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).npc_rough = (s as any).npc_rough ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_diligent = (s as any).npc_diligent ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_risktaker = (s as any).npc_risktaker ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_diligent = (s as any).npc_diligent ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
      ((s as any).npc_risktaker = (s as any).npc_risktaker ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 9) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2 + 2 * ((s as any).npc_diligent ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    ((s as any).npc_messy = (s as any).npc_messy ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).npc_neat = (s as any).npc_neat ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 6) {
      ((s as any).npc_messy = (s as any).npc_messy ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      ((s as any).npc_neat = (s as any).npc_neat ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (2 - 0 + 1)) + (0));
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 1) {
    ((s as any).npc_pubes = (s as any).npc_pubes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'shaved';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_pubes = (s as any).npc_pubes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'trimmed';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_pubes = (s as any).npc_pubes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'bush';
      }
    }
  }
  ((s as any).npc_argumentative = (s as any).npc_argumentative ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 9) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2 + 2 * ((s as any).npc_diligent ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
    ((s as any).npc_shy = (s as any).npc_shy ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).npc_assertive = (s as any).npc_assertive ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 6) {
      ((s as any).npc_shy = (s as any).npc_shy ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      ((s as any).npc_assertive = (s as any).npc_assertive ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    }
  }
  ((s as any).npc_willpwr = (s as any).npc_willpwr ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 50) + 1);
  ((s as any).npc_willpwr = (s as any).npc_willpwr ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_willpwr[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (((s as any).npc_argumentative ?? 0)[((s as any).locArgs?.[1] ?? 0)] * 10);
  if (((s as any).npc_shy ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npc_arrogant = (s as any).npc_arrogant ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  }
  if (((s as any).npc_shy ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npc_pushy = (s as any).npc_pushy ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((Math.floor(Math.random() * (1 - -3 + 1)) + (-3)) + 2 * ((s as any).npc_selfish ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) ? (1) : (0));
  }
  ((s as any).npc_snob = (s as any).npc_snob ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((Math.floor(Math.random() * (1 - -3 + 1)) + (-3)) + 2 * ((s as any).npc_arrogant ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) ? (1) : (0));
  ((s as any).npc_competitive = (s as any).npc_competitive ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_insecure = (s as any).npc_insecure ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_gymrat = (s as any).npc_gymrat ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_foodie = (s as any).npc_foodie ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_jealous = (s as any).npc_jealous ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_romantic = (s as any).npc_romantic ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_wander_eyes = (s as any).npc_wander_eyes ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_abusive = (s as any).npc_abusive ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_manipulative = (s as any).npc_manipulative ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  if (((s as any).npc_selfish ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 1) {
    ((s as any).npc_caretaker = (s as any).npc_caretaker ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  }
  ((s as any).npc_indiscreet = (s as any).npc_indiscreet ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_womanizer = (s as any).npc_womanizer ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_misogynist = (s as any).npc_misogynist ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_trust_issues = (s as any).npc_trust_issues ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    ((s as any).npc_diet = (s as any).npc_diet ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'vegetarian';
  } else {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      ((s as any).npc_diet = (s as any).npc_diet ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'protein';
    } else {
      ((s as any).npc_diet = (s as any).npc_diet ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'normal';
    }
  }
  if (((s as any).npc_humor ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'perverted') {
    ((s as any).npc_pineapple = (s as any).npc_pineapple ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((Math.floor(Math.random() * 5) + 0) > 2) ? (1) : (0));
  } else {
    ((s as any).npc_pineapple = (s as any).npc_pineapple ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  }
  if (((s as any).npc_pineapple ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  ||  ((s as any).npc_diet ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'vegetarian') {
    ((s as any).npc_cum_flavor = (s as any).npc_cum_flavor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'sweet';
  } else {
    if (((s as any).npc_diet ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'protein') {
      ((s as any).npc_cum_flavor = (s as any).npc_cum_flavor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'bitter';
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        ((s as any).npc_cum_flavor = (s as any).npc_cum_flavor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'sweet';
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).npc_cum_flavor = (s as any).npc_cum_flavor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'bitter';
        } else {
          ((s as any).npc_cum_flavor = (s as any).npc_cum_flavor ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'normal';
        }
      }
    }
  }
  ((s as any).npc_likes_cute = (s as any).npc_likes_cute ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_likes_girly = (s as any).npc_likes_girly ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_likes_gopnik = (s as any).npc_likes_gopnik ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_likes_tomboyish = (s as any).npc_likes_tomboyish ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_likes_slutty = (s as any).npc_likes_slutty ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  if ((Math.floor(Math.random() * 2) + 0) >= 1) {
    if (((s as any).npc_diligent ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, (Math.floor(Math.random() * (2 - (-1) + 1)) + ((-1))));
    } else {
      ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, (Math.floor(Math.random() * (2 - (-2) + 1)) + ((-2))));
    }
  } else {
    if (((s as any).npc_risktaker ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, (Math.floor(Math.random() * (2 - (-1) + 1)) + ((-1))));
    } else {
      ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, (Math.floor(Math.random() * (2 - (-2) + 1)) + ((-2))));
    }
  }
  if ((Math.floor(Math.random() * 100) + 1) <= 29) {
    ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 0);
  } else {
    ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 0);
  }
  if (((s as any).npc_condom_conscious ?? 0)[String((s as any).locArgs?.[1] ?? '')] < 0) {
    ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  if (((s as any).npc_no_condoms ?? 0)[String((s as any).locArgs?.[1] ?? '')] < 0) {
    ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  if ((!(Math.floor(Math.random() * 50) + 0))) {
    ((s as any).npc_latex_allergy = (s as any).npc_latex_allergy ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    ((s as any).npc_condom_conscious = (s as any).npc_condom_conscious ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  }
  if (((s as any).npc_no_condoms ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    if (((s as any).npc_risktaker ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
      ((s as any).npc_condom_type = (s as any).npc_condom_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'extra thin';
    } else {
      if (((s as any).npc_generous ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
        ((s as any).npc_condom_type = (s as any).npc_condom_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'ribbed';
      } else {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          ((s as any).npc_condom_type = (s as any).npc_condom_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'normal';
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((s as any).npc_condom_type = (s as any).npc_condom_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'extra thin';
          } else {
            ((s as any).npc_condom_type = (s as any).npc_condom_type ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'ribbed';
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'miss';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'doggy';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'cowgirl';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
          ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'blowjob';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
            ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'titjob';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 6) {
              ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = '69';
            } else {
              ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'anal';
            }
          }
        }
      }
    }
  }
  if (((s as any).npc_fav_pos ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 'anal') {
    ((s as any).npc_no_anal = (s as any).npc_no_anal ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  }
  ((s as any).npc_sex_speed = (s as any).npc_sex_speed ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 3) + 1);
  ((s as any).npc_sex_volume = (s as any).npc_sex_volume ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 4) + 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0  &&  ((s as any).npc_sex_speed ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npc_gentle_lover = (s as any).npc_gentle_lover ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_dirty_lover = (s as any).npc_dirty_lover ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_sensual_lover = (s as any).npc_sensual_lover ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
        }
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
    ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'creampie';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
      ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'mouth';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
        ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'facial';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
          ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'tits';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 5) {
            ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pullout';
          }
        }
      }
    }
  }
  if ((Math.floor(Math.random() * 5) + 0) === 0  ||  ((Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'facial')) {
    ((s as any).npc_bukakke_fetish = (s as any).npc_bukakke_fetish ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
  } else {
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npc_cum_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 'facial') {
      ((s as any).npc_dislikes_facials = (s as any).npc_dislikes_facials ?? {})[((s as any).locArgs?.[1] ?? 0)] = 1;
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
    ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'pussy';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
      ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'tits';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'ass';
      } else {
        ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thighs';
      }
    }
  }
  ((s as any).npc_sex_stamina = (s as any).npc_sex_stamina ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * 10) + 1);
  ((s as any).npc_sex_spanker = (s as any).npc_sex_spanker ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_childfree = (s as any).npc_childfree ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_pussyeater = (s as any).npc_pussyeater ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_cuddler = (s as any).npc_cuddler ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 3) + 0))) ? (1) : (0));
  ((s as any).npc_cum_cannon = (s as any).npc_cum_cannon ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_sex_filmer = (s as any).npc_sex_filmer ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 5) + 0))) ? (1) : (0));
  ((s as any).npc_two_pump = (s as any).npc_two_pump ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((!(Math.floor(Math.random() * 6) + 0))) ? (1) : (0));
  if (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'indoor') {
    if (((s as any).npc_apt_sparetype ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'gaming') {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';video_games;');
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';video_games;');
      }
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';reading_books;');
    }
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';film_and_tv;');
    }
  } else {
    if (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'outdoor') {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';going_out;');
      }
    }
  }
  if (((s as any).npc_foodie ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';dining_out;');
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';dining_out;');
    }
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';cooking;');
  }
  if ((!(Math.floor(Math.random() * 5) + 0))) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';sports;');
  }
  if (((s as any).npc_gymrat ?? 0)[String((s as any).locArgs?.[1] ?? '')] > 0) {
    ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';exercising;');
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      ((s as any).npc_hobbies = (s as any).npc_hobbies ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).npc_hobbies[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (';exercising;');
    }
  }
  if ((((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'indoor'  &&  (Math.floor(Math.random() * 3) + 0) !== 0)  ||  (((s as any).npc_door_pref ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 'outdoor'  &&  (Math.floor(Math.random() * 3) + 0) === 0)) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 5) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'casual_meal';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'coffee_date';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'takeout_date';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'netflix_chill';
          } else {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'movie_date';
          }
        }
      }
    }
  } else {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 6) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'casual_meal';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'picnic_date';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'beach_date';
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 3) {
            ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fancy_meal';
          } else {
            if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 4) {
              ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'amusement_park';
            } else {
              ((s as any).npc_fav_date = (s as any).npc_fav_date ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'shopping_date';
            }
          }
        }
      }
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 50) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 15) {
    ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'action';
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 30) {
      ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'horror';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 42) {
        if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)[String((s as any).locArgs?.[1] ?? '')]) {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'raunchy_comedy';
        } else {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'comedy';
        }
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 46) {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'drama';
        } else {
          ((s as any).npc_fav_genre = (s as any).npc_fav_genre ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'romance';
        }
      }
    }
  }
  scene.build();
}

function enterSetPreferences(s: GameState, scene: SceneBuilder): void {
  (s as any).pref_ids = undefined;
  (s as any).prefdin = 'gs \'npc_set_preference\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\', $ARGS[1],  iif($ARGS[2] <> \', $ARGS[2], $dyneval($ARGS[0], ARGS[2]-pref_ids[$ARGS[1]], ARGS[3], ARGS[4]))';
  (s as any).prefdin2 = '$result = iif(ARGS[0] >= -ARGS[1] and ARGS[0] <= ARGS[1], \'like\', iif(ARGS[0] >= -(1 + ARGS[1]+ARGS[2]) and ARGS[0] <= 1 + ARGS[1] + ARGS[2], \'neutral\', \'dislike\'))';
  (s as any).prefdin3 = '$result = iif(ARGS[0] >= -ARGS[1] and ARGS[0] <= ARGS[1], \'dislike\', iif(ARGS[0] >= -(1 + ARGS[1]+ARGS[2]) and ARGS[0] <= 1 + ARGS[1] + ARGS[2], \'neutral\', \'like\'))';
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_small'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_average'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_big'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_tits_huge'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 5) + 0);
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_tits');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_small', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_average', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_big', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_tits_huge', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_shaven'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_stubble'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_patch'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_trimmed'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_bush'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_pubes_untrimmed'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_pube_length');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_shaven', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_stubble', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_patch', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_trimmed', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_bush', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_pubes_untrimmed', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_starving'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_underweight'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_overweight'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_bmi_obese'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_bmi');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['rand'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_starving', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_underweight', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_normal', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_overweight', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_bmi_obese', (((s as any).npcgeneratecVars ?? 0)?.['rand']));
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3) {
    if (((s as any).npc_pervert ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  &&  (!(Math.floor(Math.random() * (1 + (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] % 2 - 0 + 1)) + (0))))) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = 4;
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = 0;
      } else {
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = (Math.floor(Math.random() * 3) + 1);
        } else {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTypePref'] = (Math.floor(Math.random() * 2) + 2);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 1) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (Math.floor(Math.random() * 2) + 1);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 3) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
        qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_wealthy', 'like');
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
          qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_fetish', 'like');
        }
      }
    }
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_medium'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_quality_high'] = 2;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] === 0) {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 1;
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (Math.floor(Math.random() * 2) + 1);
      } else {
        if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
          if ((!(Math.floor(Math.random() * 3) + 0))) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = 2;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_quality');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloQualPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_low', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_quality_high', (((s as any).npcgeneratecVars ?? 0)?.['CloQualPref']));
  }
  if (((s as any).npc_pervert ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  &&  (!(Math.floor(Math.random() * (1 + ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['slutconstant'] = 1;
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_small'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_medium'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_cleavage_large'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] !== 0  &&  ((s as any).npc_bust ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = ((s as any).npcgeneratecVars['CloTopPref'] ?? 0) + (1);
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_cleavage');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloTopPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_none', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_small', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_cleavage_large', (((s as any).npcgeneratecVars ?? 0)?.['CloTopPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_long'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_long'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_pants_short'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_skirt_short'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 1;
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 2;
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['slutconstant'] === 1  &&  (Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] === 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = 3;
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_skirt');
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_pants');
      }
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['PanShorPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_long', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_long', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_normal', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_normal', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_pants_short', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_skirt_short', (((s as any).npcgeneratecVars ?? 0)?.['PanShorPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_medium'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['clothes_thin_high'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'clothes_thin');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['CloThinPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_low', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_medium', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'clothes_thin_high', (((s as any).npcgeneratecVars ?? 0)?.['CloThinPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_flat'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_low'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_medium'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_high'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_ultra'] = 4;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['shoes_heels_fetish'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 5  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 3 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = 4;
          }
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'shoes_heels');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['ShoHeelPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_flat', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_low', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_medium', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_high', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_ultra', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'shoes_heels_fetish', (((s as any).npcgeneratecVars ?? 0)?.['ShoHeelPref']));
  }
  if ((Math.floor(Math.random() * (2 + 8 * ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)) === 0  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
    qspCall(s, 'npc_set_preference', '$ARGS[1]', 'clothes_style_bimbo', 'like');
    ((s as any).npcgeneratec = (s as any).npcgeneratec ?? {})['bimbo_pref'] = 1;
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_few'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_multiple'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_piercings_lot'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pierPref'] = Math.min(3, (Math.floor(Math.random() * (3 - 1 + 1)) + (1)));
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_piercings');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pierPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['pierPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_none', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_few', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_multiple', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_piercings_lot', (((s as any).npcgeneratecVars ?? 0)?.['pierPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_none'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_few'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_multiple'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_tattoos_lot'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 1) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = 3;
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_tattoos');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['tatPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['tatPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_none', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_few', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_multiple', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_tattoos_lot', (((s as any).npcgeneratecVars ?? 0)?.['tatPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_normal'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_plump'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_big'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['body_lips_pillowy'] = 2;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * (2 + ((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] - 0 + 1)) + (0)))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 3) + 0);
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] === 2) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = 2;
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'body_lips');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['lipPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['lipPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_normal', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_plump', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_big', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'body_lips_pillowy', (((s as any).npcgeneratecVars ?? 0)?.['lipPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_light'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_moderate'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['cosmetics_makeup_heavy'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * (5 - 0 + 1)) + (0));
    if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 2) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 1 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['rand'] < 4) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 2 + (((s as any).npcgeneratecVars ?? {})?.['slutconstant'] ?? 0);
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['rand'] >= 4  &&  ((s as any).npcgeneratecVars ?? 0)?.['CloTypePref'] !== 3) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
        }
      }
    }
    if (((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = 3;
    }
  }
  if ((Math.floor(Math.random() * 10) + 0) < 3  &&  ((s as any).npcgeneratecVars ?? 0)?.['bimbo_pref'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'cosmetics_makeup');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['makeupPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['makeupPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_light', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_moderate', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'cosmetics_makeup_heavy', (((s as any).npcgeneratecVars ?? 0)?.['makeupPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_black'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_brown'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_red'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_blonde'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['hair_color_dyed'] = 1;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_black', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_brown', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_red', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_blonde', (Math.floor(Math.random() * 4) + 0));
  qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'hair_color_dyed', (Math.floor(Math.random() * 4) + 0));
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'hair_color');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        qspCall(s, 'npc_set_preference', '$ARGS[1]', (((s as any).npcgeneratecVars ?? 0)?.['pref_attr']), (((s as any).npcgeneratecVars ?? 0)?.['attracted']));
      }
    }
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_dumb'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_intel_smart'] = 3;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = (Math.floor(Math.random() * 3) + 1);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = Math.min((Math.floor(Math.random() * 8) + 2), 3);
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_intel');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['IQPref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['IQPref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_dumb', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_normal', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_intel_smart', (((s as any).npcgeneratecVars ?? 0)?.['IQPref']));
  }
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_weak'] = 1;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_normal'] = 2;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_athletic'] = 3;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_strong'] = 4;
  ((s as any).pref_ids = (s as any).pref_ids ?? {})['stats_strength_manly'] = 4;
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin2 ?? 0);
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = (Math.floor(Math.random() * 3) + 1);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = Math.max(2, (Math.floor(Math.random() * 4) + 1));
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] !== '') {
    if ((Math.floor(Math.random() * 10) + 0) < 3) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['pref_attr'] = qspFunc(s, 'pcs_get_attr', 'stats_strength');
      if (((s as any).npcgeneratecVars ?? 0)?.['pref_attr'] !== '') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['MusclePref'] = (((s as any).pref_ids ?? 0)?.[(((s as any).npcgeneratecVars ?? 0)?.['pref_attr'])] ?? 0);
        if (((s as any).npcgeneratecVars ?? 0)?.['attracted'] === 'dislike') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['preftype'] = ((s as any).prefdin3 ?? 0);
        }
      }
    }
  }
  if (((s as any).npcgeneratecVars ?? 0)?.['MusclePref'] > 0) {
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_weak', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_normal', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_athletic', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_strong', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
    qspFunc(s, 'prefdin', (((s as any).npcgeneratecVars ?? 0)?.['preftype']), 'stats_strength_manly', (((s as any).npcgeneratecVars ?? 0)?.['MusclePref']));
  }
  (s as any).pref_ids = undefined;
  (s as any).prefdin = undefined;
  (s as any).prefdin = undefined;
  scene.build();
}

function enterSetApprnc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 81) + 60);
  } else {
    if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 71) + 90);
    } else {
      if (((s as any).npc_finance ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 2) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = (Math.floor(Math.random() * 41) + 130);
      }
    }
  }
  if (((s as any).npc_gentle ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 0) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) - ((Math.floor(Math.random() * 21) + 10));
  } else {
    if (((s as any).npc_rough ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) + ((Math.floor(Math.random() * 21) + 10));
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['apprnc'] = ((s as any).npcgeneratecVars['apprnc'] ?? 0) + ((Math.floor(Math.random() * (10 - (-10) + 1)) + ((-10))));
    }
  }
  ((s as any).npc_apprnc = (s as any).npc_apprnc ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).npcgeneratecVars ?? 0)?.['apprnc']);
  ((s as any).npc_hotcat = (s as any).npc_hotcat ?? {})[((s as any).locArgs?.[1] ?? 0)] = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', (((s as any).npcgeneratecVars ?? 0)?.['apprnc']));
  if (((s as any).npc_height ?? 0)[String((s as any).locArgs?.[1] ?? '')] < ((s as any).npcgeneratecVars ?? 0)?.['av_height'] - 5) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 1;
    ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'short';
  } else {
    if (((s as any).npc_height ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= ((s as any).npcgeneratecVars ?? 0)?.['av_height'] + 5) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 2;
      ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'average';
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['body_type'] = 3;
      ((s as any).npc_height_desc = (s as any).npc_height_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'tall';
    }
  }
  ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['bmi'] = 100000 * ((s as any).npc_weight ?? 0)[((s as any).locArgs?.[1] ?? 0)] / (((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)] * ((s as any).npc_height ?? 0)[((s as any).locArgs?.[1] ?? 0)]);
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'thin';
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'athletic';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'chunky';
        } else {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'fat';
        }
      }
    }
  } else {
    if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 190) {
      if (((s as any).npcgeneratecVars ?? 0)?.['body_type'] === 1) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'petite';
      } else {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'slender';
      }
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 225) {
        ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'toned';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['bmi'] < 250) {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'average';
        } else {
          ((s as any).npc_build_desc = (s as any).npc_build_desc ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'chubby';
        }
      }
    }
  }
  if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 30) + 31);
    ((s as any).npc_icon = (s as any).npc_icon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/system/phone/icons/icon_bf' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.png';
    ((s as any).npc_pic = (s as any).npc_pic ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/characters/shared/headshots_generic/' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.jpg';
  } else {
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['rand'] = (Math.floor(Math.random() * 30) + 1);
    ((s as any).npc_icon = (s as any).npc_icon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/system/phone/icons/icon_bf' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.png';
    ((s as any).npc_pic = (s as any).npc_pic ?? {})[((s as any).locArgs?.[1] ?? 0)] = 'images/characters/shared/headshots_generic/' + (((s as any).npcgeneratecVars ?? 0)?.['rand']) + '.jpg';
  }
  scene.build();
}

function enterSetOtherVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_drunk = (s as any).npc_drunk ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_horny = (s as any).npc_horny ?? {})[((s as any).locArgs?.[1] ?? 0)] = (Math.floor(Math.random() * (8 * ((s as any).pcs_hotcat ?? 0) - 2 * ((s as any).pcs_hotcat ?? 0) + 1)) + (2 * ((s as any).pcs_hotcat ?? 0)));
  if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1  ||  ((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
    ((s as any).npc_horny = (s as any).npc_horny ?? {})[((s as any).locArgs?.[1] ?? 0)] = Math.max(0, ((s as any).npc_horny ?? 0)[((s as any).locArgs?.[1] ?? 0)] - 20);
  }
  ((s as any).npc_lover_days = (s as any).npc_lover_days ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_daygenerated = (s as any).npc_daygenerated ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).npc_eventday = (s as any).npc_eventday ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_meetday = (s as any).npc_meetday ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_meethour = (s as any).npc_meethour ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_dates = (s as any).npc_dates ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_compliance = (s as any).npc_compliance ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_lover_keys = (s as any).npc_lover_keys ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_QW = (s as any).npc_QW ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_rel = (s as any).npc_rel ?? {})[((s as any).locArgs?.[1] ?? 0)] = 40;
  ((s as any).npc_love = (s as any).npc_love ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_perv = (s as any).npc_perv ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_herpes = (s as any).npc_herpes ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_syth = (s as any).npc_syth ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_gon = (s as any).npc_gon ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  ((s as any).npc_thrush = (s as any).npc_thrush ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
  (s as any).ngp_pref = undefined;
  (s as any)[npc_pref_traits] ? (s as any)[npc_pref_traits] = { ...(s as any)[ngp_pref] } : (s as any)[npc_pref_traits] = { ...(s as any)[ngp_pref] };
  qspCall(s, 'npc_get_preference', '$ARGS[1]', 'randomPosIndNeg', 'no_clear');
  ((s as any).npc_origin_attract = (s as any).npc_origin_attract ?? {})[((s as any).locArgs?.[1] ?? 0)] = (((s as any).ngpPrefResult ?? 0)?.['HasPos']);
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).npcgeneratecVars = undefined;
  (s as any).npcgeneratecVars = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[0] ?? '') === ''  ||  !isNaN(String((s as any).locArgs?.[0] ?? '')) && String((s as any).locArgs?.[0] ?? '') !== '') {
    if (String((s as any).locArgs?.[0] ?? '') !== '') {
      ((s as any).ARGS = (s as any).ARGS ?? {})[0] = parseFloat(((s as any).locArgs?.[0] ?? 0));
    }
    (s as any).npcgen_lastrun = 1;
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['gender'] = ((s as any).locArgs?.[0] ?? 0);
    if (String((s as any).locArgs?.[2] ?? '') !== 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['age'] = ((s as any).locArgs?.[2] ?? 0);
    } else {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['age'] = (Math.floor(Math.random() * 18) + 18);
    }
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((s as any).locArgs?.[1] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
      } else {
        if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 1) {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
        } else {
          if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
          } else {
            ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['name'] = 'A Male';
          }
        }
      }
    }
    if (String((s as any).locArgs?.[3] ?? '') !== 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = ((s as any).locArgs?.[3] ?? 0);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = 1;
      } else {
        if (((s as any).region ?? 0) === 'city') {
          ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['loc'] = (Math.floor(Math.random() * 2) + 3);
        }
      }
    }
    ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['anonymous'] = ((s as any).locArgs?.[4] ?? 0);
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('attracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('like') : -1) > 0) {
      ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = 'like';
    } else {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unattracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('dislike') : -1) > 0) {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = 'dislike';
      } else {
        ((s as any).npcgeneratecVars = (s as any).npcgeneratecVars ?? {})['attracted'] = '';
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'assign_index':
      enterAssignIndex(s, scene);
      break;
    case 'assign_dob':
      enterAssignDob(s, scene);
      break;
    case 'assign_stats':
      enterAssignStats(s, scene);
      break;
    case 'set_details':
      enterSetDetails(s, scene);
      break;
    case 'gen_dick':
      enterGenDick(s, scene);
      break;
    case 'set_dick':
      enterSetDick(s, scene);
      break;
    case 'set_lifestyle':
      enterSetLifestyle(s, scene);
      break;
    case 'set_occupation':
      enterSetOccupation(s, scene);
      break;
    case 'poor_jobs':
      enterPoorJobs(s, scene);
      break;
    case 'middle_jobs':
      enterMiddleJobs(s, scene);
      break;
    case 'rich_jobs':
      enterRichJobs(s, scene);
      break;
    case 'set_personality':
      enterSetPersonality(s, scene);
      break;
    case 'set_preferences':
      enterSetPreferences(s, scene);
      break;
    case 'set_apprnc':
      enterSetApprnc(s, scene);
      break;
    case 'set_other_vars':
      enterSetOtherVars(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcgeneratec: LocationDef = {
  name: 'npcgeneratec',
  region: 'other',
  enter: enter,
};
