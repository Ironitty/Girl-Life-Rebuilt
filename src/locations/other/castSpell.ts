import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'spellList', '');
  (s as any).spellSuccess = 0;
  (s as any).i = 1;
  // TODO-QSP: :ArgLoop
  if (((s as any).i ?? 0) < Object.keys((s as any).ARGS ?? {}).length) {
    if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] === '') {
      // TODO-QSP: $SpellArgs += ", <<ARGS[i]>>"
    } else {
      // TODO-QSP: $SpellArgs += ", '<<$ARGS[i]>>'"
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'ArgLoop'
  }
  if (((s as any).spellKnown ?? 0)?.[String((s as any).SpellID ?? 0)] === 1) {
    (s as any).spellRoll = ((s as any).pcs_splcstng ?? 0) - ((s as any).spellDiff ?? 0)?.[String((s as any).SpellID ?? 0)] - (((s as any).pcs_horny ?? 0)/5) + ((s as any).rand ?? 0)(1, 100);
    if (((s as any).spellRoll ?? 0) > 50) {
      (s as any).spellSuccess = 2;
      qspCall(s, 'exp_gain', 'splcstng', ((s as any).rand ?? 0)(1, ((s as any).spellDiff ?? 0)?.[String((s as any).SpellID ?? 0)]) + ((s as any).rand ?? 0)(0, 5));
    } else {
      if (((s as any).spellRoll ?? 0) > 10) {
        (s as any).spellSuccess = 1;
        qspCall(s, 'exp_gain', 'splcstng', 0);
      } else {
        if (((s as any).spellRoll ?? 0) > -20) {
          (s as any).spellSuccess = 0;
          // TODO-QSP: gs 'exp_gain', 'splcstng', rand(1, spellDiff[$SpellID]) / 2
        } else {
          (s as any).spellSuccess = (-1);
          // TODO-QSP: gs 'exp_gain', 'splcstng', rand(1, spellDiff[$SpellID]) / 2
        }
      }
    }
    if (((s as any).spellSuccess ?? 0) === 2) {
      (s as any).manaCost = ((s as any).spellMana ?? 0)?.[String((s as any).SpellID ?? 0)] / 2;
    } else {
      if (((s as any).spellSuccess ?? 0) === -1) {
        (s as any).manaCost = ((s as any).spellMana ?? 0)?.[String((s as any).SpellID ?? 0)] * 2;
      } else {
        (s as any).manaCost = ((s as any).spellMana ?? 0)?.[String((s as any).SpellID ?? 0)];
      }
    }
    if (((s as any).pcs_mana ?? 0) < ((s as any).manaCost ?? 0)) {
    } else {
      (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (((s as any).manaCost ?? 0));
      (s as any).arouseVal = ((s as any).manaCost ?? 0) / 50;
      qspCall(s, 'arousal', 'voyeur', Math.min((-1), -((s as any).arouseVal ?? 0)));
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).spellTime ?? 0)?.[String((s as any).SpellID ?? 0)]);
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic "gs 'spell', '<<$SpellID>>', '<<spellSuccess>>'<<$SpellArgs>>"
    }
  }
  scene.build();
}

export const castSpell: LocationDef = {
  name: 'castSpell',
  region: 'other',
  enter: enter,
};
