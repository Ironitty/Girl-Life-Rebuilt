import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vanrPar', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'family_schedule', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  scene.text('The bathroom is very small and unimpressive. Nevertheless, it has everything you need.');
  // TODO-QSP: dynamic text: There is a shower, toilet, sink, <a href="exec:gt 'mirror','start'">mirror</a> w...
  scene.text('There is a shower, toilet, sink, <a href="exec:gt \'mirror\',\'start\'">mirror</a> where you can \' + iif(pcs_hairbsh = 0, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, and even a bathtub.');
  if ((!((s as any).vanr_lock ?? 0))) {
    scene.text('The door is not locked and does not close properly. <a href="exec:gt \'vanrPar\',\'latch\'">Latch the door</a> or <a href="exec:gt \'vanrPar\',\'perm_latch\'">Always latch the door</a>.');
  } else {
    scene.text('The door is always securely locked, ensuring your privacy. <a href="exec:gt \'vanrPar\',\'latch\'">Remove automatic latching</a>.');
    scene.text('The door is securely locked, ensuring your privacy. <a href="exec:gt \'vanrPar\',\'unlatch\'">Unlatch the door</a>.');
  }
  qspCall(s, 'selfplay', 'suction_dildo');
  if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 1  &&  ((s as any).motherKnowDildo ?? 0) === 1) {
    // TODO-QSP: dynamic text: <i>Huh? Where'd my dildos go? I thought I- oh shit! <<$npc_nickname['A29']>> pro...
    scene.text(`<i>Huh? Where'd my dildos go? I thought I- oh shit! ${((s as any).npc_nickname ?? 0)?.['A29']} probably took them again…</i>`);
  } else {
    // TODO-QSP: dynamic text: <i>Huh? Where'd my dildo go? I thought I- oh shit! <<$npc_nickname['A29']>> prob...
    scene.text(`<i>Huh? Where'd my dildo go? I thought I- oh shit! ${((s as any).npc_nickname ?? 0)?.['A29']} probably took it again…</i>`);
    if (((s as any).motherQW ?? 0)?.['bathroom_dildos'] > 1  &&  (!((s as any).vanrPar_suction_dildo ?? 0))) {
      scene.text('<i>Huh? Where\'d my dildos go? I thought I left them right here…</i>');
    } else {
      scene.text('<i>Huh? Where\'d my dildo go? I thought I left it right here…</i>');
    }
    if (((s as any).vanr_lock ?? 0) === 0  ||  ((s as any).vanr_lock ?? 0) === 2) {
      if (((s as any).fullmorrout ?? 0) === 1) {
        scene.actions([
          { label: '<b>Finish and go to the kitchen</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['kuhrPar', ''] },
        ]);
      } else {
        scene.actions([
          { label: '<b>Return to the hallway</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
        ]);
      }
    } else {
      scene.actions([
        { label: 'Unlatch the door and leave', handler: (st: GameState) => {
    (st as any).vanr_lock = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['korrPar', ''] },
      ]);
    }
    qspCall(s, 'din_van', 'private');
  }
  scene.build();
}

export const vanrPar: LocationDef = {
  name: 'vanrPar',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['The bathroom is very small and unimpressive. Nevertheless, it has everything you need.'],
  enter: enter,
};
