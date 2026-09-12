import { qspUntranslated } from '../_shared/qspUntranslated';

import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['teleport'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['teleport'] = 20;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['teleport'] = 20;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['teleport'] = 'Teleport';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['teleport'] = 'You can move from one Fairy Circle to another.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['teleport'] = 'self';
  if (!(s as any).spellOptDesc) (s as any).spellOptDesc = {}; (s as any).spellOptDesc['teleport'] = '$treeCircName';
  if (!(s as any).spellOptVal) (s as any).spellOptVal = {}; (s as any).spellOptVal['teleport'] = '$tpLocations';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['regenerate'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['regenerate'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['regenerate'] = 5;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['regenerate'] = 'Regenerate';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['regenerate'] = 'Slowly regain health over time.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['regenerate'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['curedisease'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['curedisease'] = 30;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['curedisease'] = 25;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['curedisease'] = 'Cure Disease';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['curedisease'] = 'Your body will burn itself free of any diseases you may have.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['curedisease'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['curewounds'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['curewounds'] = 30;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['curewounds'] = 25;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['curewounds'] = 'Cure Wounds';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['curewounds'] = 'You feel your body\'s wounds begin to heal.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['curewounds'] = 'team';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['curewounds2'] = 10000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['curewounds2'] = 60;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['curewounds2'] = 75;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['curewounds2'] = 'Greater Cure Wounds';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['curewounds2'] = 'You feel your body heal to perfection.';
  if (!(s as any).spellReq) (s as any).spellReq = {}; (s as any).spellReq['curewounds2'] = 'curewounds';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['curewounds2'] = 'team';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['painblock'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['painblock'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['painblock'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['painblock'] = 'Pain Block';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['painblock'] = 'Block your pain for some time.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['painblock'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['berserk'] = 5000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['berserk'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['berserk'] = 30;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['berserk'] = 'Berserker Rage';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['berserk'] = 'Enrage yourself with supernatural strength, speed, and endurance.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['berserk'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['shower'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['shower'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['shower'] = 1;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['shower'] = 'Shower';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['shower'] = 'Clean and refresh yourself as if you have taken a shower.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['shower'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['makeup'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['makeup'] = 5;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['makeup'] = 15;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['makeup'] = 'Makeup';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['makeup'] = 'Apply Makeup to yourself magically.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['makeup'] = 'self';
  if (!(s as any).spellOptDesc) (s as any).spellOptDesc = {}; (s as any).spellOptDesc['makeup'] = '$MakeupSet';
  if (!(s as any).spellOptVal) (s as any).spellOptVal = {}; (s as any).spellOptVal['makeup'] = '$makeupSetVal';
  // TODO-QSP: $MakeupSet[0] = 'No Makeup'
  // TODO-QSP: $makeupSetVal[0] = '000'
  (s as any).i = 1;
  if (((s as any).makeup ?? 0)?.['routine_1'] !== '') {
    // TODO-QSP: $MakeupSet[i] = $makeup['routine_1_name']
    // TODO-QSP: $makeupSetVal[i] = $makeup['routine_1']
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).makeup ?? 0)?.['routine_2'] !== '') {
    // TODO-QSP: $MakeupSet[i] = $makeup['routine_2_name']
    // TODO-QSP: $makeupSetVal[i] = $makeup['routine_2']
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).makeup ?? 0)?.['routine_3'] !== '') {
    // TODO-QSP: $MakeupSet[i] = $makeup['routine_3_name']
    // TODO-QSP: $makeupSetVal[i] = $makeup['routine_3']
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).makeup ?? 0)?.['routine_4'] !== '') {
    // TODO-QSP: $MakeupSet[i] = $makeup['routine_4_name']
    // TODO-QSP: $makeupSetVal[i] = $makeup['routine_4']
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 1) {
    // TODO-QSP: $MakeupSet[i] = 'Light Makeup'
    // TODO-QSP: $makeupSetVal[i] = '110'
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 2) {
    // TODO-QSP: $MakeupSet[i] = 'Vibrant Makeup'
    // TODO-QSP: $makeupSetVal[i] = '210'
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 3) {
    // TODO-QSP: $MakeupSet[i] = 'Heavy Makeup'
    // TODO-QSP: $makeupSetVal[i] = '310'
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 5) {
    // TODO-QSP: $MakeupSet[i] = 'Bimbo Makeup'
    // TODO-QSP: $makeupSetVal[i] = '510'
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 5) {
    // TODO-QSP: $MakeupSet[i] = 'Goth Makeup'
    // TODO-QSP: $makeupSetVal[i] = '610'
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['cosmetica'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['cosmetica'] = 5;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['cosmetica'] = 50;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['cosmetica'] = 'Cosmetica';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['cosmetica'] = 'Clean and tidy yourself, completely beautifying yourself; hair, makeup, grooming of all kinds.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['cosmetica'] = 'self';
  if (!(s as any).spellReq) (s as any).spellReq = {}; (s as any).spellReq['cosmetica'] = 'makeup';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['glamour'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['glamour'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['glamour'] = 30;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['glamour'] = 'Glamour';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['glamour'] = 'self';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['glamour'] = 'Become undefinably beautiful. Your eyes sparkle just so. Your hair has a perfect luster. Your curves are undefinably perfect.';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['alterself'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['alterself'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['alterself'] = 30;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['alterself'] = 'Alter Self';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['alterself'] = 'self';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['alterself'] = 'Change your appearance to that of some other person.';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['bodymod'] = 40;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['bodymod'] = 30;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['bodymod'] = 0;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['bodymod'] = 'Body Modification';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['bodymod'] = 'Change your appearance.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['bodymod'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['fog'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['fog'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['fog'] = 1;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['fog'] = 'Fog';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['fog'] = 'Create a fog on the battlefield, obscuring the view of the enemy.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['fog'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['clone'] = 15;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['clone'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['clone'] = 1;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['clone'] = 'Create Clone';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['clone'] = 'You can create an exact clone of yourself and slip out of sight of the enemy.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['clone'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['stun'] = 200;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['stun'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['stun'] = 50;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['stun'] = 'Stun';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['stun'] = 'Paralyze the enemy with a touch.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['stun'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['weapon'] = 20;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['weapon'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['weapon'] = 0;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['weapon'] = 'Empower Weapon';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['weapon'] = 'Magically empower a weapon, causing it to deal greater damage.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['weapon'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['wind'] = 40;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['wind'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['wind'] = 2;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['wind'] = 'Gust of Wind';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['wind'] = 'Summon a gust of wind that will clear away fog.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['wind'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['multiclone'] = 45;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['multiclone'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['multiclone'] = 2;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['multiclone'] = 'Multi-Clone';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['multiclone'] = 'Summon three clones of yourself and slip out of the enemy\'s sight.';
  if (!(s as any).spellReq) (s as any).spellReq = {}; (s as any).spellReq['multiclone'] = 'clone';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['multiclone'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['energo'] = 50;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['energo'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['energo'] = 3;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['energo'] = 'Energy Shield';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['energo'] = 'Create an energy shield to absorb incoming damage. You gain 100 defense.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['energo'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['haste'] = 60;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['haste'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['haste'] = 3;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['haste'] = 'Haste';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['haste'] = 'Hasten your passage through time to gain reaction speed to seize the initiative.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['haste'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['heal'] = 400;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['heal'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['heal'] = 4;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['heal'] = 'Heal';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['heal'] = 'Exchange mana for health, healing your wounds and fortifying your body.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['heal'] = 'team';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['hand'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['hand'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['hand'] = 0;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['hand'] = 'Quivering Palm';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['hand'] = 'Add energy from your mana to your hand for a devastating strike.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['wind'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['scaldingtouch'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['scaldingtouch'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['scaldingtouch'] = 6;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['scaldingtouch'] = 'Scalding Touch';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['scaldingtouch'] = 'Flames spring from your hands.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['scaldingtouch'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['burninghands'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['burninghands'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['burninghands'] = 7;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['burninghands'] = 'Burning Hands';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['burninghands'] = 'A torrent of flames jets from your hands.';
  if (!(s as any).spellReq) (s as any).spellReq = {}; (s as any).spellReq['burninghands'] = 'scaldingtouch';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['burninghands'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['firebarrier'] = 150;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['firebarrier'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['firebarrier'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['firebarrier'] = 'Fire Barrier';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['firebarrier'] = 'You are shielded by a wall of flames. Adds 750 defense.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['firebarrier'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['firestorm'] = 250;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['firestorm'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['firestorm'] = 9;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['firestorm'] = 'Fire Storm';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['firestorm'] = 'Superheated embers rain down upon your enemies.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['firestorm'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['flameshield'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['flameshield'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['flameshield'] = 10;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['flameshield'] = 'Flame Shield';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['flameshield'] = 'A Shield made of flames interposes itself between you and your enemy, absorbing 2500 damage to defend you.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['flameshield'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['shock'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['shock'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['shock'] = 6;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['shock'] = 'Electric Shock';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['shock'] = 'An electric spark shoots from your hand.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['shock'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['lightning'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['lightning'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['lightning'] = 7;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['lightning'] = 'Lightning';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['lightning'] = 'A lightning bolt shoots from your hand.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['lightning'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['electricbarrier'] = 150;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['electricbarrier'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['electricbarrier'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['electricbarrier'] = 'Electric Barrier';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['electricbarrier'] = 'A static electric field blocks incoming attacks from reaching you.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['electricbarrier'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['1000birds'] = 250;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['1000birds'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['1000birds'] = 9;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['1000birds'] = 'Dance of a Thousand Birds';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['1000birds'] = 'The air is filled with small lightning bolts leaping through the air with shrieks.';
  if (!(s as any).spellReq) (s as any).spellReq = {}; (s as any).spellReq['1000birds'] = 'lightning';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['1000birds'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['dancingsphere'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['dancingsphere'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['dancingsphere'] = 10;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['dancingsphere'] = 'Dancing Sphere';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['dancingsphere'] = 'Lightning dances around you, blocking attacks coming toward you.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['dancingsphere'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['quicksand'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['quicksand'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['quicksand'] = 6;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['quicksand'] = 'Quicksand';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['quicksand'] = 'Your opponent is caught in a quicksand trap.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['quicksand'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['earthshield'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['earthshield'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['earthshield'] = 7;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['earthshield'] = 'Earth Shield';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['earthshield'] = 'Tendrils of earth reach up to defend you. Some of the damage it absorbs is captured as mana and given to you.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['earthshield'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['abyss'] = 150;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['abyss'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['abyss'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['abyss'] = 'Abyss';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['abyss'] = 'The Earth opens up beneath your opponent\'s feet, slamming shut damaging him and depriving him of the ability to move.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['abyss'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['earthguardian'] = 250;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['earthguardian'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['earthguardian'] = 9;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['earthguardian'] = 'Earth Guardian';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['earthguardian'] = 'The Earth itself comes alive defending you from attacks. It draws from the power of the land to regenerate itself every round.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['earthguardian'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['sando'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['sando'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['sando'] = 10;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['sando'] = 'Sando';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['sando'] = 'Two huge plates of earth collapse together, crushing the enemy and depriving him of the ability to move.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['sando'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['windgust'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['windgust'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['windgust'] = 6;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['windgust'] = 'Wind Gust';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['windgust'] = 'a huge gust of wind rips past you, killing clones and removing fog.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['windgust'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['pressure'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['pressure'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['pressure'] = 7;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['pressure'] = 'Horrific Pressure';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['pressure'] = 'Enormous air pressure surrounds your enemy, causing damage as well as killing clones and removing fog.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['pressure'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['vacuum'] = 150;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['vacuum'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['vacuum'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['vacuum'] = 'Vacuum Sphere';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['vacuum'] = 'A turbulent sphere of vacuum surrounds you, blocking incoming attacks.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['vacuum'] = 'self';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['vacuumshells'] = 250;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['vacuumshells'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['vacuumshells'] = 9;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['vacuumshells'] = 'Vacuum Shells';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['vacuumshells'] = 'Turbulent spheres of vacuum bombard your enemy, destroying clones and removing fog.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['vacuumshells'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['devouringvacuum'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['devouringvacuum'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['devouringvacuum'] = 10;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['devouringvacuum'] = 'Devouring Vacuum';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['devouringvacuum'] = 'A devouring vacuum sucks away your enemy\'s defensive shields.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['devouringvacuum'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['leechmana'] = 10;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['leechmana'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['leechmana'] = 6;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['leechmana'] = 'Leech Mana';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['leechmana'] = 'Inflict 100 damage and absorb 100 mana from your foe.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['leechmana'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['flood'] = 100;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['flood'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['flood'] = 7;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['flood'] = 'Flood';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['flood'] = 'Inflict 1000 damage and absorb 500 mana from your foe.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['flood'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['blister'] = 150;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['blister'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['blister'] = 8;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['blister'] = 'Blister';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['blister'] = 'Create a protective sphere of water. Some of the damage absorbed is converted into mana for you.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['blister'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['sharkrockets'] = 250;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['sharkrockets'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['sharkrockets'] = 9;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['sharkrockets'] = 'Shark Rockets';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['sharkrockets'] = 'Blobs of Water shaped like sharks fly towards your enemies, striking them for 1500 damage and absorbing 2500 mana for you. Clones are destroyed.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['sharkrockets'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['greatflood'] = 500;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['greatflood'] = 0;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['greatflood'] = 10;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['greatflood'] = 'Great Flood';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['greatflood'] = 'A huge flood of water fills the area, absorbing mana from the enemy and giving you additional protection.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['greatflood'] = 'enemy';
  if (!(s as any).spellMana) (s as any).spellMana = {}; (s as any).spellMana['penisenvy'] = 1000;
  if (!(s as any).spellTime) (s as any).spellTime = {}; (s as any).spellTime['penisenvy'] = 1;
  if (!(s as any).spellDiff) (s as any).spellDiff = {}; (s as any).spellDiff['penisenvy'] = 50;
  if (!(s as any).spellName) (s as any).spellName = {}; (s as any).spellName['penisenvy'] = 'Penis Envy';
  if (!(s as any).spellDesc) (s as any).spellDesc = {}; (s as any).spellDesc['penisenvy'] = 'Temporarily animate a strapon dildo, the casters experiences sexual sensations from the dildo, as if it was a real penis.';
  if (!(s as any).spellTarget) (s as any).spellTarget = {}; (s as any).spellTarget['penisenvy'] = 'self';
  // TODO-QSP: $combatSpells[0] = 'fog'
  // TODO-QSP: $combatSpells[1] = 'clone'
  // TODO-QSP: $combatSpells[2] = 'stun'
  // TODO-QSP: $combatSpells[3] = 'weapon'
  // TODO-QSP: $combatSpells[4] = 'wind'
  // TODO-QSP: $combatSpells[5] = 'multiclone'
  // TODO-QSP: $combatSpells[6] = 'energo'
  // TODO-QSP: $combatSpells[7] = 'heal'
  // TODO-QSP: $combatSpells[8] = 'hand'
  // TODO-QSP: $combatSpells[9] = 'scaldingtouch'
  // TODO-QSP: $combatSpells[10] = 'burninghands'
  // TODO-QSP: $combatSpells[11] = 'firebarrier'
  // TODO-QSP: $combatSpells[12] = 'firestorm'
  // TODO-QSP: $combatSpells[13] = 'flameshield'
  // TODO-QSP: $combatSpells[14] = 'shock'
  // TODO-QSP: $combatSpells[15] = 'lightning'
  // TODO-QSP: $combatSpells[16] = 'electricbarrier'
  // TODO-QSP: $combatSpells[17] = '1000birds'
  // TODO-QSP: $combatSpells[18] = 'dancingsphere'
  // TODO-QSP: $combatSpells[19] = 'quicksand'
  // TODO-QSP: $combatSpells[20] = 'earthshield'
  // TODO-QSP: $combatSpells[21] = 'abyss'
  // TODO-QSP: $combatSpells[22] = 'earthguardian'
  // TODO-QSP: $combatSpells[23] = 'sando'
  // TODO-QSP: $combatSpells[24] = 'windgust'
  // TODO-QSP: $combatSpells[25] = 'pressure'
  // TODO-QSP: $combatSpells[26] = 'vacuum'
  // TODO-QSP: $combatSpells[27] = 'vacuumshells'
  // TODO-QSP: $combatSpells[28] = 'devouringvacuum'
  // TODO-QSP: $combatSpells[29] = 'leechmana'
  // TODO-QSP: $combatSpells[30] = 'flood'
  // TODO-QSP: $combatSpells[31] = 'blister'
  // TODO-QSP: $combatSpells[32] = 'sharkrockets'
  // TODO-QSP: $combatSpells[33] = 'greatflood'
  // TODO-QSP: $storySpells[0] = 'haste'
  // TODO-QSP: $basicSpells[0] = 'fog'
  // TODO-QSP: $basicSpells[1] = 'clone'
  // TODO-QSP: $basicSpells[2] = 'stun'
  // TODO-QSP: $basicSpells[3] = 'wind'
  // TODO-QSP: $basicSpells[4] = 'multiclone'
  // TODO-QSP: $basicSpells[5] = 'energo'
  // TODO-QSP: $basicSpells[6] = 'haste'
  // TODO-QSP: $basicSpells[7] = 'berserk'
  // TODO-QSP: $healSpells[0] = 'painblock'
  // TODO-QSP: $healSpells[1] = 'curewounds'
  // TODO-QSP: $healSpells[2] = 'curewounds2'
  // TODO-QSP: $healSpells[3] = 'curedisease'
  // TODO-QSP: $healSpells[4] = 'heal'
  // TODO-QSP: $healSpells[5] = 'regenerate'
  // TODO-QSP: $beautySpells[0] = 'shower'
  // TODO-QSP: $beautySpells[1] = 'makeup'
  // TODO-QSP: $beautySpells[2] = 'cosmetica'
  // TODO-QSP: $librarySpells[0] = 'painblock'
  // TODO-QSP: $librarySpells[1] = 'shower'
  // TODO-QSP: $librarySpells[2] = 'makeup'
  // TODO-QSP: $librarySpells[3] = 'cosmetica'
  // TODO-QSP: $librarySpells[4] = 'glamour'
  // TODO-QSP: $librarySpells[5] = 'penisenvy'
  // TODO-QSP: $fireSpells[0] = 'scaldingtouch'
  // TODO-QSP: $fireSpells[1] = 'burninghands'
  // TODO-QSP: $fireSpells[2] = 'firebarrier'
  // TODO-QSP: $fireSpells[3] = 'firestorm'
  // TODO-QSP: $fireSpells[4] = 'flameshield'
  // TODO-QSP: $electSpells[0] = 'shock'
  // TODO-QSP: $electSpells[1] = 'lightning'
  // TODO-QSP: $electSpells[2] = 'electricbarrier'
  // TODO-QSP: $electSpells[3] = '1000birds'
  // TODO-QSP: $electSpells[4] = 'dancingsphere'
  // TODO-QSP: $earthSpells[0] = 'quicksand'
  // TODO-QSP: $earthSpells[1] = 'earthshield'
  // TODO-QSP: $earthSpells[2] = 'abyss'
  // TODO-QSP: $earthSpells[3] = 'earthguardian'
  // TODO-QSP: $earthSpells[4] = 'sando'
  // TODO-QSP: $airSpells[0] = 'windgust'
  // TODO-QSP: $airSpells[1] = 'pressure'
  // TODO-QSP: $airSpells[2] = 'vacuum'
  // TODO-QSP: $airSpells[3] = 'vacuumshells'
  // TODO-QSP: $airSpells[4] = 'devouringvacuum'
  // TODO-QSP: $waterSpells[0] = 'leechmana'
  // TODO-QSP: $waterSpells[1] = 'flood'
  // TODO-QSP: $waterSpells[2] = 'blister'
  // TODO-QSP: $waterSpells[3] = 'sharkrockets'
  // TODO-QSP: $waterSpells[4] = 'greatflood'
  // TODO-QSP: $comHealSpells[0] = 'heal'
  // TODO-QSP: $comShldSpells[0] = 'flameshield'
  // TODO-QSP: $comShldSpells[1] = 'firebarrier'
  // TODO-QSP: $comShldSpells[2] = 'dancingsphere'
  // TODO-QSP: $comShldSpells[3] = 'electricbarrier'
  // TODO-QSP: $comShldSpells[4] = 'earthguardian'
  // TODO-QSP: $comShldSpells[5] = 'earthshield'
  // TODO-QSP: $comShldSpells[6] = 'vacuum'
  // TODO-QSP: $comShldSpells[7] = 'blister'
  // TODO-QSP: $comShldSpells[8] = 'energo'
  // TODO-QSP: $comAtkSpells[0] = 'firestorm'
  // TODO-QSP: $comAtkSpells[1] = 'burninghands'
  // TODO-QSP: $comAtkSpells[2] = 'scaldingtouch'
  // TODO-QSP: $comAtkSpells[3] = '1000birds'
  // TODO-QSP: $comAtkSpells[4] = 'lightning'
  // TODO-QSP: $comAtkSpells[5] = 'shock'
  // TODO-QSP: $comAtkSpells[6] = 'sando'
  // TODO-QSP: $comAtkSpells[7] = 'abyss'
  // TODO-QSP: $comAtkSpells[8] = 'devouringvacuum'
  // TODO-QSP: $comAtkSpells[9] = 'vacuumshells'
  // TODO-QSP: $comAtkSpells[10] = 'quicksand'
  // TODO-QSP: $comAtkSpells[11] = 'pressure'
  // TODO-QSP: $comAtkSpells[12] = 'windgust'
  // TODO-QSP: $comAtkSpells[13] = 'greatflood'
  // TODO-QSP: $comAtkSpells[14] = 'sharkrockets'
  // TODO-QSP: $comAtkSpells[15] = 'flood'
  // TODO-QSP: $comAtkSpells[16] = 'leechmana'
  // TODO-QSP: $comAtkSpells[17] = 'stun'
  // TODO-QSP: $comAtkSpells[18] = 'weapon'
  scene.build();
}

function enterTeacherActions(s: GameState, scene: SceneBuilder): void {
  (s as any).ThisArraySize = 0;
  (s as any).MaxAvailable = ((s as any).spellListAvail ?? 0)?.[String((s as any).ThisArrayName ?? 0)];
  (s as any).i = 0;
  // TODO-QSP: :LearnSpellLoop
  (s as any).spellDifficulty = 0;
  if (((s as any).i ?? 0) < ((s as any).ThisArraySize ?? 0)  &&  ((s as any).i ?? 0) < ((s as any).MaxAvailable ?? 0)) {
    if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 0  &&  (((s as any).spellReq ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === ''  ||  (((s as any).spellKnown ?? 0)[((s as any).spellReq ?? 0)?.[String((s as any).ThisSpellName ?? 0)]] === 1))) {
      if (((s as any).pcs_magik ?? 0) >= ((s as any).spellDifficulty ?? 0)) {
        // TODO-QSP: dynamic "act 'Practice <<$spellName[$ThisSpellName]>> (1:00) (Magic level <<pcs_magik>> / Level requ...
      } else {
        // TODO-QSP: act $func('wrap', 'neg', 'Practice <<$spellName[$ThisSpellName]>> (Magic level <<pcs_magik>> / Level...
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'LearnSpellLoop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterActLearn(s: GameState, scene: SceneBuilder): void {
  (s as any).spellDifficulty = 0;
  if (((s as any).pcs_mana ?? 0) >= 1000) {
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (1000);
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    if ((((s as any).pcs_splcstng ?? 0)/((s as any).spellDifficulty ?? 0)) > 0) {
      if (!(s as any).spellLearn) (s as any).spellLearn = {}; (s as any).spellLearn[String((s as any).ThisSpellName ?? 0)] = ((s as any).spellLearn[String((s as any).ThisSpellName ?? 0)] ?? 0) + ((Math.floor(Math.random() * (100/spellDifficulty - 1 + 1)) + (1)) * (((s as any).pcs_splcstng ?? 0)/((s as any).spellDifficulty ?? 0)));
    } else {
      if (!(s as any).spellLearn) (s as any).spellLearn = {}; (s as any).spellLearn[String((s as any).ThisSpellName ?? 0)] = ((s as any).spellLearn[String((s as any).ThisSpellName ?? 0)] ?? 0) + ((Math.floor(Math.random() * (100/spellDifficulty - 1 + 1)) + (1)));
    }
    if (((s as any).spellLearn ?? 0)?.[String((s as any).ThisSpellName ?? 0)] < 100) {
      scene.text('You diligently study the spell for an hour, but cannot grasp it.');
    } else {
      if (!(s as any).spellKnown) (s as any).spellKnown = {}; (s as any).spellKnown[String((s as any).ThisSpellName ?? 0)] = 1;
      scene.text('Finally, you are able to grasp and learn the spell.');
      // TODO-QSP: dynamic text: <<$spellName[$ThisSpellName]>>: <<$spellDesc[$ThisSpellName]>>
      scene.text(`${((s as any).spellName ?? 0)?.[String((s as any).ThisSpellName ?? 0)]}: ${((s as any).spellDesc ?? 0)?.[String((s as any).ThisSpellName ?? 0)]}`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'ExitLocation', 'ExitLocation2');
  } },
  ]);
  scene.build();
}

function enterNumAvailableSpells(s: GameState, scene: SceneBuilder): void {
  (s as any).ThisArraySize = 0;
  (s as any).result = ((s as any).ThisArraySize ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterAddAvailableSpells(s: GameState, scene: SceneBuilder): void {
  (s as any).ThisNumToAdd = qspUntranslated(s, "ARGS[2]", { location: "spellList" });
  if ((!((s as any).ThisNumToAdd ?? 0))) {
    (s as any).ThisNumToAdd = 1;
  }
  (s as any).ThisArraySize = 0;
  if (((s as any).ThisArraySize ?? 0) - ((s as any).ThisNumToAdd ?? 0) - ((s as any).spellListAvail ?? 0)?.[String((s as any).ThisArrayName ?? 0)] < 0) {
    if (!(s as any).spellListAvail) (s as any).spellListAvail = {}; (s as any).spellListAvail[String((s as any).ThisArrayName ?? 0)] = ((s as any).ThisArraySize ?? 0);
  } else {
    if (!(s as any).spellListAvail) (s as any).spellListAvail = {}; (s as any).spellListAvail[String((s as any).ThisArrayName ?? 0)] = ((s as any).spellListAvail[String((s as any).ThisArrayName ?? 0)] ?? 0) + (((s as any).ThisNumToAdd ?? 0));
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'teacherActions':
      enterTeacherActions(s, scene);
      break;
    case 'act learn':
      enterActLearn(s, scene);
      break;
    case 'numAvailableSpells':
      enterNumAvailableSpells(s, scene);
      break;
    case 'addAvailableSpells':
      enterAddAvailableSpells(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const spellList: LocationDef = {
  name: 'spellList',
  title: 'Practice <<$spellName[$ThisSpellName]>> (Magic level <<pcs_magik>> / Level required <<spellDifficulty>>)',
  region: 'other',
  enter: enter,
};
