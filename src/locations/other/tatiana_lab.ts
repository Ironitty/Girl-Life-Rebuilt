import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'start');
  if (((s as any).locArgs?.[1] ?? 0) !== 'no_time') {
    (s as any).minut = ((s as any).minut ?? 0) + (5);
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Myrkov Investigative Agency.</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('The Myrkov Investigative Agency is the front for Tatiana\'s laboratory and business in St Petersburg. It also provides a safe haven for council members when needed. You look at around the room and see a haphazard mishmash of modern scientific equipment and magical paraphernalia. On the walls are strange runes that sometimes flicker with a strange internal light causing Tatiana briefly to glance at them.');
  if (((s as any).tatiana_spell_reminder ?? 0) < 14) {
    (s as any).tatiana_spell_reminder = 14;
  }
  if (((s as any).tatiana_succubus_reminder ?? 0) < 14) {
    (s as any).tatiana_succubus_reminder = 14;
  }
  if (((s as any).tatiana_mission_reminder ?? 0) < 14) {
    (s as any).tatiana_mission_reminder = 14;
  }
  if (((s as any).succubusflag ?? 0) === 1) {
    if (((s as any).sucbypass ?? 0) === 0) {
      if (((s as any).sucpcinfo ?? 0) < 2) {
        // TODO-QSP: xgt 'tatiana_lab', 'suctraining'
      } else {
        // TODO-QSP: xgt 'tatiana_lab', 'suctraining'
      }
    } else {
      (s as any).sucbypass = 0;
    }
  }
  if (((s as any).judosparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Gustav, mutant - power over 9000)', handler: (st: GameState) => {
    (s as any).judosparday = ((s as any).daystart ?? 0);
    qspCall(s, 'npcStat', 'A175');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'gustav');
  }, goto: ['fight', 'start'] },
    ]);
  }
  if (((s as any).tatianasparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Tatiana, magician - body magic)', handler: (st: GameState) => {
    (s as any).tatianasparday = ((s as any).daystart ?? 0);
    qspCall(s, 'npcStat', 'A176');
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'tatiana');
  }, goto: ['fight', 'start'] },
    ]);
  }
  (s as any).TatianaMissionTotal = 3;
  if (((s as any).tobiQW ?? 0) > 0  &&  ((s as any).TatianaMissionDay ?? 0) + 30 < ((s as any).daystart ?? 0)  &&  ((s as any).TatianaMissionQW ?? 0) < ((s as any).TatianaMissionTotal ?? 0)) {
    scene.text('You have a feeling Tatiana might want to talk to you about something…');
    scene.actions([
      { label: 'Ask Tatiana what she wants', goto: ['tatiana_lab', 'missions'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Train with Gustav', goto: ['tatiana_lab', 'Gustav'] },
    { label: 'Talk with Tatiana', goto: ['tatiana_lab', 'Tatiana'] },
  ]);
  scene.build();
}

function enterGustav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'Gustav');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Gustav</b></center>');
  scene.img('images/characters/city/jugo/jugopre.jpg');
  scene.text('Gustav is sitting on floor and staring off into space.');
  if (((s as any).gustavday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pcs_energy ?? 0) >= 20) {
    scene.actions([
      { label: 'Develop strength (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'stren');
  } },
      { label: 'Develop agility (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'agil');
  } },
      { label: 'Develop reactions (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'react');
  } },
      { label: 'Develop endurance (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', 'GustavDevelop', 'vital');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Develop strength (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      { label: 'Develop agility (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      { label: 'Develop reactions (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      { label: 'Develop endurance (1:00)', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['tatiana_lab', 'start'] },
  ]);
  scene.build();
}

function enterGustavDevelop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 60, ((s as any).locArgs?.[1] ?? 0));
  (s as any).gustavday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('You do exercises under the guidance of Gustav.');
  scene.actions([
    { label: 'Leave', goto: ['tatiana_lab', 'Gustav'] },
  ]);
  scene.build();
}

function enterBodyModActuate(s: GameState, scene: SceneBuilder): void {
  (s as any).bodyModMana = qspUntranslated(s, "ARGS[1]", { location: "tatiana_lab" });
  (s as any).bodyModTime = qspUntranslated(s, "ARGS[2]", { location: "tatiana_lab" });
  (s as any).bodyModVal = qspUntranslated(s, "ARGS[4]", { location: "tatiana_lab" });
  if (((s as any).pcs_mana ?? 0) >= ((s as any).bodyModMana ?? 0)) {
    // TODO-QSP: dynamic "<<$bodyModStat>> = <<bodyModVal>>"
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (((s as any).bodyModMana ?? 0));
    qspCall(s, 'arousal', 'flash', (-30));
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).bodyModTime ?? 0));
    (s as any).pain[$bodyModPain] = 100;
    qspCall(s, 'body', 'UpdateBodyMeasurement');
    qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
    qspCall(s, 'body', 'Update_Appearance');
    qspCall(s, 'body', 'UpdateBodyImage');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'tatiana_lab', 'BodyModded', $bodyModType, $bodyModDesc
  }
  scene.build();
}

function enterBodyModValues(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'hair_color') {
    (s as any).bodyModMana = 500;
    (s as any).bodyModTime = 60;
    (s as any).bodyModDesc[0] = 'black';
    (s as any).bodymodValue[0] = 0;
    (s as any).bodyModDesc[1] = 'brown';
    (s as any).bodymodValue[1] = 1;
    (s as any).bodyModDesc[2] = 'red';
    (s as any).bodymodValue[2] = 2;
    (s as any).bodyModDesc[3] = 'blonde';
    (s as any).bodymodValue[3] = 3;
  } else {
    (s as any).bodyModMana = 200;
    (s as any).bodyModTime = 120;
    // TODO-QSP: $bodyModDesc[0] = 'extremely short'  & bodymodValue[0] = 5
    // TODO-QSP: $bodyModDesc[1] = 'pixie-cut'    & bodymodValue[1] = 31
    // TODO-QSP: $bodyModDesc[2] = 'medium'      & bodymodValue[2] = 81
    // TODO-QSP: $bodyModDesc[3] = 'shoulder-length'  & bodymodValue[3] = 161
    // TODO-QSP: $bodyModDesc[4] = 'long'      & bodymodValue[4] = 261
    // TODO-QSP: $bodyModDesc[5] = 'very long'    & bodymodValue[5] = 401
    // TODO-QSP: $bodyModDesc[6] = 'extremely long'  & bodymodValue[6] = 601
    if (((s as any).locArgs?.[1] ?? 0) === 'eye_color') {
      (s as any).bodyModMana = 300;
      (s as any).bodyModTime = 120;
      (s as any).bodyModDesc[0] = 'brown';
      (s as any).bodymodValue[0] = 0;
      (s as any).bodyModDesc[1] = 'grey';
      (s as any).bodymodValue[1] = 1;
      (s as any).bodyModDesc[2] = 'green';
      (s as any).bodymodValue[2] = 2;
      (s as any).bodyModDesc[3] = 'blue';
      (s as any).bodymodValue[3] = 3;
    } else {
      (s as any).bodyModMana = 100;
      (s as any).bodyModTime = 30;
      // TODO-QSP: $bodyModDesc[0] = 'short'        & bodymodValue[0] = 0
      // TODO-QSP: $bodyModDesc[1] = 'average'        & bodymodValue[1] = 1
      // TODO-QSP: $bodyModDesc[2] = 'long'        & bodymodValue[2] = 2
      // TODO-QSP: $bodyModDesc[3] = 'lavish'        & bodymodValue[3] = 3
      // TODO-QSP: $bodyModDesc[4] = 'show-stealing'    & bodymodValue[4] = 4
      // TODO-QSP: $bodyModDesc[5] = 'long, jewel-dusted'  & bodymodValue[5] = 5
      if (((s as any).locArgs?.[1] ?? 0) === 'lip_size') {
        (s as any).bodyModMana = 300;
        (s as any).bodyModTime = 120;
        (s as any).bodyModDesc[0] = 'thin';
        (s as any).bodymodValue[0] = 0;
        (s as any).bodyModDesc[1] = 'normal';
        (s as any).bodymodValue[1] = 1;
        (s as any).bodyModDesc[2] = 'plump';
        (s as any).bodymodValue[2] = 2;
        (s as any).bodyModDesc[3] = 'pouty';
        (s as any).bodymodValue[3] = 3;
        (s as any).bodyModDesc[4] = 'pillowy';
        (s as any).bodymodValue[4] = 4;
      } else {
        (s as any).bodyModMana = 1000;
        (s as any).bodyModTime = 240;
        // TODO-QSP: $bodyModDesc[0] = 'AA' & bodymodValue[0] = 3 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[1] = 'A' & bodymodValue[1] = 8 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[2] = 'B' & bodymodValue[2] = 13 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[3] = 'C' & bodymodValue[3] = 18 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[4] = 'D' & bodymodValue[4] = 23 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[5] = 'E' & bodymodValue[5] = 28 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[6] = 'F' & bodymodValue[6] = 33 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[7] = 'G' & bodymodValue[7] = 38 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[8] = 'H' & bodymodValue[8] = 43 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[9] = 'I' & bodymodValue[9] = 48 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[10] = 'J' & bodymodValue[10] = 53 - (pcs_cupsize - bodyVars['bust_magic'])
        // TODO-QSP: $bodyModDesc[11] = 'K' & bodymodValue[11] = 58 - (pcs_cupsize - bodyVars['bust_magic'])
        if (((s as any).locArgs?.[1] ?? 0) === 'skin') {
          (s as any).bodyModMana = 1000;
          (s as any).bodyModTime = 240;
          (s as any).bodyModDesc[0] = 'clear';
          (s as any).bodymodValue[0] = 1000;
        } else {
          (s as any).bodyModMana = 1000;
          (s as any).bodyModTime = 120;
          // TODO-QSP: $bodyModDesc[0] = 'renewed' & bodymodValue[0] = 20
          if (((s as any).locArgs?.[1] ?? 0) === 'silicone') {
            (s as any).bodyModMana = 1000;
            (s as any).bodyModTime = 240;
            (s as any).stringimplant = qspUntranslated(s, "0'", { location: "tatiana_lab" });
            (s as any).bodyModDesc[0] = 'natural again';
            (s as any).bodymodValue[0] = 0;
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'Gustav':
      enterGustav(s, scene);
      break;
    case 'GustavDevelop':
      enterGustavDevelop(s, scene);
      break;
    case 'BodyModActuate':
      enterBodyModActuate(s, scene);
      break;
    case 'BodyModValues':
      enterBodyModValues(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const tatiana_lab: LocationDef = {
  name: 'tatiana_lab',
  title: 'Myrkov Investigative Agency.',
  region: 'other',
  description: ['The Myrkov Investigative Agency is the front for Tatiana\'s laboratory and business in St Petersburg. It also provides a safe haven for council members when needed. You look at around the room and see a haphazard mishmash of modern scientific equipment and magical paraphernalia. On the walls are strange runes that sometimes flicker with a strange internal light causing Tatiana briefly to glance at them.'],
  enter: enter,
};
