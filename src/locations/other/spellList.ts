// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTeacherActions(s: GameState, scene: SceneBuilder): void {
  (s as any).ThisArrayName = (String(((s as any).locArgs?.[1] ?? 0)).split('$').join(undefined));
  (s as any).ExitLocation = ((s as any).locArgs?.[2] ?? 0);
  (s as any).ExitLocation2 = ((s as any).locArgs?.[3] ?? 0);
  (s as any).ThisArraySize = 0;
  (s as any).MaxAvailable = (((s as any).spellListAvail ?? 0)?.[String((s as any).ThisArrayName ?? 0)] ?? 0);
  (s as any).i = 0;
  // TODO-QSP: :LearnSpellLoop
  (s as any).ThisSpellName = 0;
  (s as any).spellDifficulty = Math.max((((s as any).spellDiff ?? 0)?.[String((s as any).ThisSpellName ?? 0)] ?? 0), 1);
  if (((s as any).i ?? 0) < ((s as any).ThisArraySize ?? 0)  &&  ((s as any).i ?? 0) < ((s as any).MaxAvailable ?? 0)) {
    if (((s as any).spellKnown ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === 0  &&  (((s as any).spellReq ?? 0)?.[String((s as any).ThisSpellName ?? 0)] === ''  ||  (((s as any).spellKnown ?? 0)[((s as any).spellReq ?? 0)?.[String((s as any).ThisSpellName ?? 0)]] === 1))) {
      if (((s as any).pcs_magik ?? 0) >= ((s as any).spellDifficulty ?? 0)) {
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).spellMana = (s as any).spellMana ?? {})['teleport'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['teleport'] = 20;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['teleport'] = 20;
  ((s as any).spellName = (s as any).spellName ?? {})['teleport'] = 'Teleport';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['teleport'] = 'You can move from one Fairy Circle to another.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['teleport'] = 'self';
  ((s as any).spellOptDesc = (s as any).spellOptDesc ?? {})['teleport'] = '$treeCircName';
  ((s as any).spellOptVal = (s as any).spellOptVal ?? {})['teleport'] = '$tpLocations';
  ((s as any).spellMana = (s as any).spellMana ?? {})['regenerate'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['regenerate'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['regenerate'] = 5;
  ((s as any).spellName = (s as any).spellName ?? {})['regenerate'] = 'Regenerate';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['regenerate'] = 'Slowly regain health over time.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['regenerate'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['curedisease'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['curedisease'] = 30;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['curedisease'] = 25;
  ((s as any).spellName = (s as any).spellName ?? {})['curedisease'] = 'Cure Disease';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['curedisease'] = 'Your body will burn itself free of any diseases you may have.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['curedisease'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['curewounds'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['curewounds'] = 30;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['curewounds'] = 25;
  ((s as any).spellName = (s as any).spellName ?? {})['curewounds'] = 'Cure Wounds';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['curewounds'] = 'You feel your body\'s wounds begin to heal.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['curewounds'] = 'team';
  ((s as any).spellMana = (s as any).spellMana ?? {})['curewounds2'] = 10000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['curewounds2'] = 60;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['curewounds2'] = 75;
  ((s as any).spellName = (s as any).spellName ?? {})['curewounds2'] = 'Greater Cure Wounds';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['curewounds2'] = 'You feel your body heal to perfection.';
  ((s as any).spellReq = (s as any).spellReq ?? {})['curewounds2'] = 'curewounds';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['curewounds2'] = 'team';
  ((s as any).spellMana = (s as any).spellMana ?? {})['painblock'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['painblock'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['painblock'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['painblock'] = 'Pain Block';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['painblock'] = 'Block your pain for some time.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['painblock'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['berserk'] = 5000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['berserk'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['berserk'] = 30;
  ((s as any).spellName = (s as any).spellName ?? {})['berserk'] = 'Berserker Rage';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['berserk'] = 'Enrage yourself with supernatural strength, speed, and endurance.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['berserk'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['shower'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['shower'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['shower'] = 1;
  ((s as any).spellName = (s as any).spellName ?? {})['shower'] = 'Shower';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['shower'] = 'Clean and refresh yourself as if you have taken a shower.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['shower'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['makeup'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['makeup'] = 5;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['makeup'] = 15;
  ((s as any).spellName = (s as any).spellName ?? {})['makeup'] = 'Makeup';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['makeup'] = 'Apply Makeup to yourself magically.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['makeup'] = 'self';
  ((s as any).spellOptDesc = (s as any).spellOptDesc ?? {})['makeup'] = '$MakeupSet';
  ((s as any).spellOptVal = (s as any).spellOptVal ?? {})['makeup'] = '$makeupSetVal';
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
  ((s as any).spellMana = (s as any).spellMana ?? {})['cosmetica'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['cosmetica'] = 5;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['cosmetica'] = 50;
  ((s as any).spellName = (s as any).spellName ?? {})['cosmetica'] = 'Cosmetica';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['cosmetica'] = 'Clean and tidy yourself, completely beautifying yourself; hair, makeup, grooming of all kinds.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['cosmetica'] = 'self';
  ((s as any).spellReq = (s as any).spellReq ?? {})['cosmetica'] = 'makeup';
  ((s as any).spellMana = (s as any).spellMana ?? {})['glamour'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['glamour'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['glamour'] = 30;
  ((s as any).spellName = (s as any).spellName ?? {})['glamour'] = 'Glamour';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['glamour'] = 'self';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['glamour'] = 'Become undefinably beautiful. Your eyes sparkle just so. Your hair has a perfect luster. Your curves are undefinably perfect.';
  ((s as any).spellMana = (s as any).spellMana ?? {})['alterself'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['alterself'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['alterself'] = 30;
  ((s as any).spellName = (s as any).spellName ?? {})['alterself'] = 'Alter Self';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['alterself'] = 'self';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['alterself'] = 'Change your appearance to that of some other person.';
  ((s as any).spellMana = (s as any).spellMana ?? {})['bodymod'] = 40;
  ((s as any).spellTime = (s as any).spellTime ?? {})['bodymod'] = 30;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['bodymod'] = 0;
  ((s as any).spellName = (s as any).spellName ?? {})['bodymod'] = 'Body Modification';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['bodymod'] = 'Change your appearance.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['bodymod'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['fog'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['fog'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['fog'] = 1;
  ((s as any).spellName = (s as any).spellName ?? {})['fog'] = 'Fog';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['fog'] = 'Create a fog on the battlefield, obscuring the view of the enemy.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['fog'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['clone'] = 15;
  ((s as any).spellTime = (s as any).spellTime ?? {})['clone'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['clone'] = 1;
  ((s as any).spellName = (s as any).spellName ?? {})['clone'] = 'Create Clone';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['clone'] = 'You can create an exact clone of yourself and slip out of sight of the enemy.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['clone'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['stun'] = 200;
  ((s as any).spellTime = (s as any).spellTime ?? {})['stun'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['stun'] = 50;
  ((s as any).spellName = (s as any).spellName ?? {})['stun'] = 'Stun';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['stun'] = 'Paralyze the enemy with a touch.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['stun'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['weapon'] = 20;
  ((s as any).spellTime = (s as any).spellTime ?? {})['weapon'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['weapon'] = 0;
  ((s as any).spellName = (s as any).spellName ?? {})['weapon'] = 'Empower Weapon';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['weapon'] = 'Magically empower a weapon, causing it to deal greater damage.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['weapon'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['wind'] = 40;
  ((s as any).spellTime = (s as any).spellTime ?? {})['wind'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['wind'] = 2;
  ((s as any).spellName = (s as any).spellName ?? {})['wind'] = 'Gust of Wind';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['wind'] = 'Summon a gust of wind that will clear away fog.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['wind'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['multiclone'] = 45;
  ((s as any).spellTime = (s as any).spellTime ?? {})['multiclone'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['multiclone'] = 2;
  ((s as any).spellName = (s as any).spellName ?? {})['multiclone'] = 'Multi-Clone';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['multiclone'] = 'Summon three clones of yourself and slip out of the enemy\'s sight.';
  ((s as any).spellReq = (s as any).spellReq ?? {})['multiclone'] = 'clone';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['multiclone'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['energo'] = 50;
  ((s as any).spellTime = (s as any).spellTime ?? {})['energo'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['energo'] = 3;
  ((s as any).spellName = (s as any).spellName ?? {})['energo'] = 'Energy Shield';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['energo'] = 'Create an energy shield to absorb incoming damage. You gain 100 defense.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['energo'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['haste'] = 60;
  ((s as any).spellTime = (s as any).spellTime ?? {})['haste'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['haste'] = 3;
  ((s as any).spellName = (s as any).spellName ?? {})['haste'] = 'Haste';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['haste'] = 'Hasten your passage through time to gain reaction speed to seize the initiative.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['haste'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['heal'] = 400;
  ((s as any).spellTime = (s as any).spellTime ?? {})['heal'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['heal'] = 4;
  ((s as any).spellName = (s as any).spellName ?? {})['heal'] = 'Heal';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['heal'] = 'Exchange mana for health, healing your wounds and fortifying your body.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['heal'] = 'team';
  ((s as any).spellMana = (s as any).spellMana ?? {})['hand'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['hand'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['hand'] = 0;
  ((s as any).spellName = (s as any).spellName ?? {})['hand'] = 'Quivering Palm';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['hand'] = 'Add energy from your mana to your hand for a devastating strike.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['wind'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['scaldingtouch'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['scaldingtouch'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['scaldingtouch'] = 6;
  ((s as any).spellName = (s as any).spellName ?? {})['scaldingtouch'] = 'Scalding Touch';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['scaldingtouch'] = 'Flames spring from your hands.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['scaldingtouch'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['burninghands'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['burninghands'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['burninghands'] = 7;
  ((s as any).spellName = (s as any).spellName ?? {})['burninghands'] = 'Burning Hands';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['burninghands'] = 'A torrent of flames jets from your hands.';
  ((s as any).spellReq = (s as any).spellReq ?? {})['burninghands'] = 'scaldingtouch';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['burninghands'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['firebarrier'] = 150;
  ((s as any).spellTime = (s as any).spellTime ?? {})['firebarrier'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['firebarrier'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['firebarrier'] = 'Fire Barrier';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['firebarrier'] = 'You are shielded by a wall of flames. Adds 750 defense.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['firebarrier'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['firestorm'] = 250;
  ((s as any).spellTime = (s as any).spellTime ?? {})['firestorm'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['firestorm'] = 9;
  ((s as any).spellName = (s as any).spellName ?? {})['firestorm'] = 'Fire Storm';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['firestorm'] = 'Superheated embers rain down upon your enemies.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['firestorm'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['flameshield'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['flameshield'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['flameshield'] = 10;
  ((s as any).spellName = (s as any).spellName ?? {})['flameshield'] = 'Flame Shield';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['flameshield'] = 'A Shield made of flames interposes itself between you and your enemy, absorbing 2500 damage to defend you.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['flameshield'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['shock'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['shock'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['shock'] = 6;
  ((s as any).spellName = (s as any).spellName ?? {})['shock'] = 'Electric Shock';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['shock'] = 'An electric spark shoots from your hand.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['shock'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['lightning'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['lightning'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['lightning'] = 7;
  ((s as any).spellName = (s as any).spellName ?? {})['lightning'] = 'Lightning';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['lightning'] = 'A lightning bolt shoots from your hand.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['lightning'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['electricbarrier'] = 150;
  ((s as any).spellTime = (s as any).spellTime ?? {})['electricbarrier'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['electricbarrier'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['electricbarrier'] = 'Electric Barrier';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['electricbarrier'] = 'A static electric field blocks incoming attacks from reaching you.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['electricbarrier'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['1000birds'] = 250;
  ((s as any).spellTime = (s as any).spellTime ?? {})['1000birds'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['1000birds'] = 9;
  ((s as any).spellName = (s as any).spellName ?? {})['1000birds'] = 'Dance of a Thousand Birds';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['1000birds'] = 'The air is filled with small lightning bolts leaping through the air with shrieks.';
  ((s as any).spellReq = (s as any).spellReq ?? {})['1000birds'] = 'lightning';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['1000birds'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['dancingsphere'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['dancingsphere'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['dancingsphere'] = 10;
  ((s as any).spellName = (s as any).spellName ?? {})['dancingsphere'] = 'Dancing Sphere';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['dancingsphere'] = 'Lightning dances around you, blocking attacks coming toward you.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['dancingsphere'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['quicksand'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['quicksand'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['quicksand'] = 6;
  ((s as any).spellName = (s as any).spellName ?? {})['quicksand'] = 'Quicksand';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['quicksand'] = 'Your opponent is caught in a quicksand trap.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['quicksand'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['earthshield'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['earthshield'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['earthshield'] = 7;
  ((s as any).spellName = (s as any).spellName ?? {})['earthshield'] = 'Earth Shield';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['earthshield'] = 'Tendrils of earth reach up to defend you. Some of the damage it absorbs is captured as mana and given to you.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['earthshield'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['abyss'] = 150;
  ((s as any).spellTime = (s as any).spellTime ?? {})['abyss'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['abyss'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['abyss'] = 'Abyss';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['abyss'] = 'The Earth opens up beneath your opponent\'s feet, slamming shut damaging him and depriving him of the ability to move.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['abyss'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['earthguardian'] = 250;
  ((s as any).spellTime = (s as any).spellTime ?? {})['earthguardian'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['earthguardian'] = 9;
  ((s as any).spellName = (s as any).spellName ?? {})['earthguardian'] = 'Earth Guardian';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['earthguardian'] = 'The Earth itself comes alive defending you from attacks. It draws from the power of the land to regenerate itself every round.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['earthguardian'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['sando'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['sando'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['sando'] = 10;
  ((s as any).spellName = (s as any).spellName ?? {})['sando'] = 'Sando';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['sando'] = 'Two huge plates of earth collapse together, crushing the enemy and depriving him of the ability to move.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['sando'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['windgust'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['windgust'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['windgust'] = 6;
  ((s as any).spellName = (s as any).spellName ?? {})['windgust'] = 'Wind Gust';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['windgust'] = 'a huge gust of wind rips past you, killing clones and removing fog.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['windgust'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['pressure'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['pressure'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['pressure'] = 7;
  ((s as any).spellName = (s as any).spellName ?? {})['pressure'] = 'Horrific Pressure';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['pressure'] = 'Enormous air pressure surrounds your enemy, causing damage as well as killing clones and removing fog.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['pressure'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['vacuum'] = 150;
  ((s as any).spellTime = (s as any).spellTime ?? {})['vacuum'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['vacuum'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['vacuum'] = 'Vacuum Sphere';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['vacuum'] = 'A turbulent sphere of vacuum surrounds you, blocking incoming attacks.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['vacuum'] = 'self';
  ((s as any).spellMana = (s as any).spellMana ?? {})['vacuumshells'] = 250;
  ((s as any).spellTime = (s as any).spellTime ?? {})['vacuumshells'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['vacuumshells'] = 9;
  ((s as any).spellName = (s as any).spellName ?? {})['vacuumshells'] = 'Vacuum Shells';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['vacuumshells'] = 'Turbulent spheres of vacuum bombard your enemy, destroying clones and removing fog.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['vacuumshells'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['devouringvacuum'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['devouringvacuum'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['devouringvacuum'] = 10;
  ((s as any).spellName = (s as any).spellName ?? {})['devouringvacuum'] = 'Devouring Vacuum';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['devouringvacuum'] = 'A devouring vacuum sucks away your enemy\'s defensive shields.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['devouringvacuum'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['leechmana'] = 10;
  ((s as any).spellTime = (s as any).spellTime ?? {})['leechmana'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['leechmana'] = 6;
  ((s as any).spellName = (s as any).spellName ?? {})['leechmana'] = 'Leech Mana';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['leechmana'] = 'Inflict 100 damage and absorb 100 mana from your foe.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['leechmana'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['flood'] = 100;
  ((s as any).spellTime = (s as any).spellTime ?? {})['flood'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['flood'] = 7;
  ((s as any).spellName = (s as any).spellName ?? {})['flood'] = 'Flood';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['flood'] = 'Inflict 1000 damage and absorb 500 mana from your foe.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['flood'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['blister'] = 150;
  ((s as any).spellTime = (s as any).spellTime ?? {})['blister'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['blister'] = 8;
  ((s as any).spellName = (s as any).spellName ?? {})['blister'] = 'Blister';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['blister'] = 'Create a protective sphere of water. Some of the damage absorbed is converted into mana for you.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['blister'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['sharkrockets'] = 250;
  ((s as any).spellTime = (s as any).spellTime ?? {})['sharkrockets'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['sharkrockets'] = 9;
  ((s as any).spellName = (s as any).spellName ?? {})['sharkrockets'] = 'Shark Rockets';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['sharkrockets'] = 'Blobs of Water shaped like sharks fly towards your enemies, striking them for 1500 damage and absorbing 2500 mana for you. Clones are destroyed.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['sharkrockets'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['greatflood'] = 500;
  ((s as any).spellTime = (s as any).spellTime ?? {})['greatflood'] = 0;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['greatflood'] = 10;
  ((s as any).spellName = (s as any).spellName ?? {})['greatflood'] = 'Great Flood';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['greatflood'] = 'A huge flood of water fills the area, absorbing mana from the enemy and giving you additional protection.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['greatflood'] = 'enemy';
  ((s as any).spellMana = (s as any).spellMana ?? {})['penisenvy'] = 1000;
  ((s as any).spellTime = (s as any).spellTime ?? {})['penisenvy'] = 1;
  ((s as any).spellDiff = (s as any).spellDiff ?? {})['penisenvy'] = 50;
  ((s as any).spellName = (s as any).spellName ?? {})['penisenvy'] = 'Penis Envy';
  ((s as any).spellDesc = (s as any).spellDesc ?? {})['penisenvy'] = 'Temporarily animate a strapon dildo, the casters experiences sexual sensations from the dildo, as if it was a real penis.';
  ((s as any).spellTarget = (s as any).spellTarget ?? {})['penisenvy'] = 'self';
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
  const arg = s.locArg;
  switch (arg) {
    case 'teacherActions':
      enterTeacherActions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const spellList: LocationDef = {
  name: 'spellList',
  title: 'Practice  (Magic level  / Level required )',
  region: 'other',
  enter: enter,
};
