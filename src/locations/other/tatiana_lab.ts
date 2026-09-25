import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'tatiana_lab', 'start');
  if (String((s as any).locArgs?.[1] ?? '') !== 'no_time') {
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
    if ((!((s as any).sucbypass ?? 0))) {
      if (((s as any).sucpcinfo ?? 0) < 2) {
        qspGoto(s, 'tatiana_lab', 'suctraining');
      } else {
        if (((s as any).sucpcinfo ?? 0) >= 6  &&  ((s as any).sucskill ?? 0) < 3  &&  ((s as any).sctrainprep ?? 0) === 1) {
          qspGoto(s, 'tatiana_lab', 'suctraining');
        }
      }
    } else {
      (s as any).sucbypass = 0;
    }
  }
  if (((s as any).judosparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Gustav, mutant - power over 9000)', handler: (st: GameState) => {
    (st as any).judosparday = ((st as any).daystart ?? 0);
    qspCall(st, 'npcStat', 'A175');
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'gustav');
    qspGoto(st, 'fight', 'start');
  } },
    ]);
  }
  if (((s as any).tatianasparday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Sparring (Tatiana, magician - body magic)', handler: (st: GameState) => {
    (st as any).tatianasparday = ((st as any).daystart ?? 0);
    qspCall(st, 'npcStat', 'A176');
    qspCall(st, 'fight', 'initFight');
    qspCall(st, 'fight_npcdata', 'tatiana');
    qspGoto(st, 'fight', 'start');
  } },
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
    qspCall(st, 'tatiana_lab', '');
  } },
      { label: 'Develop agility (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', '');
  } },
      { label: 'Develop reactions (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', '');
  } },
      { label: 'Develop endurance (1:00)', handler: (st: GameState) => {
    qspCall(st, 'tatiana_lab', '');
  } },
    ]);
  } else {
    if (((s as any).gustavday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Develop strength (1:00)', handler: (st: GameState) => { scene.text('<br>You feel too hungry to do this.'); } },
        { label: 'Develop agility (1:00)', handler: (st: GameState) => { scene.text('<br>You feel too hungry to do this.'); } },
        { label: 'Develop reactions (1:00)', handler: (st: GameState) => { scene.text('<br>You feel too hungry to do this.'); } },
        { label: 'Develop endurance (1:00)', handler: (st: GameState) => { scene.text('<br>You feel too hungry to do this.'); } },
      ]);
    }
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
  (s as any).bodyModMana = ((s as any).locArgs?.[1] ?? 0);
  (s as any).bodyModTime = ((s as any).locArgs?.[2] ?? 0);
  (s as any).bodyModStat = ((s as any).locArgs?.[3] ?? 0);
  (s as any).bodyModVal = ((s as any).locArgs?.[4] ?? 0);
  (s as any).bodyModDesc = ((s as any).locArgs?.[5] ?? 0);
  (s as any).bodyModType = ((s as any).locArgs?.[6] ?? 0);
  (s as any).bodyModPain = ((s as any).locArgs?.[7] ?? 0);
  (s as any).bodyModExtra = ((s as any).locArgs?.[8] ?? 0);
  if (((s as any).pcs_mana ?? 0) >= ((s as any).bodyModMana ?? 0)) {
    qspFunc(s, 'bodyModExtra');
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
    default:
      enterDefault(s, scene);
      break;
  }
}

export const tatiana_lab: LocationDef = {
  name: 'tatiana_lab',
  title: 'Myrkov Investigative Agency.',
  region: 'other',
  enter: enter,
};
