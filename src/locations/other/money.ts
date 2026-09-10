import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBankTransfer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'to_bank') {
    (s as any).money = ((s as any).money ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "money" }));
    (s as any).karta = ((s as any).karta ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "money" }));
  } else {
    (s as any).karta = ((s as any).karta ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "money" }));
    (s as any).money = ((s as any).money ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "money" }));
  }
  qspCall(s, 'money', '');
  scene.build();
}

function enterDeskTransfer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === 'to_desk') {
    (s as any).money = ((s as any).money ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "money" }));
    (s as any).stolmoney = ((s as any).stolmoney ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "money" }));
  } else {
    (s as any).stolmoney = ((s as any).stolmoney ?? 0) + (((s as any).money ?? 0));
    (s as any).stolmoney_overflow = ((s as any).stolmoney_overflow ?? 0) + (((s as any).money_overflow ?? 0));
    (s as any).money = 0;
    (s as any).money_overflow = 0;
    if (((s as any).locArgs?.[2] ?? 0) === 'from_desk') {
      (s as any).stolmoney = ((s as any).stolmoney ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "money" }));
      (s as any).money = ((s as any).money ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "money" }));
    } else {
      (s as any).money = ((s as any).money ?? 0) + (((s as any).stolmoney ?? 0));
      (s as any).money_overflow = ((s as any).money_overflow ?? 0) + (((s as any).stolmoney_overflow ?? 0));
      (s as any).stolmoney = 0;
      (s as any).stolmoney_overflow = 0;
    }
    qspCall(s, 'money', '');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'bank_transfer':
      enterBankTransfer(s, scene);
      break;
    case 'desk_transfer':
      enterDeskTransfer(s, scene);
      break;
    default:
      enterBankTransfer(s, scene);
      break;
  }
}

export const money: LocationDef = {
  name: 'money',
  title: '(You can\'t afford this)',
  region: 'other',
  enter: enter,
};
