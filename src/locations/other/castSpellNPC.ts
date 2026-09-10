import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'spellList', '');
  (s as any).spellSuccess = 1;
  (s as any).i = 5;
  // TODO-QSP: :ArgLoopNPC
  if (((s as any).i ?? 0) < ((s as any).arrsize ?? 0)('ARGS')) {
    if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] === '') {
      // TODO-QSP: $SpellArgs += ", <<ARGS[i]>>"
    } else {
      // TODO-QSP: $SpellArgs += ", '<<$ARGS[i]>>'"
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'ArgLoopNPC'
  }
  (s as any).manaCost = ((s as any).spellMana ?? 0)?.[String((s as any).SpellID ?? 0)];
  (s as any).casterMana = 0;
  if (((s as any).casterMana ?? 0) >= ((s as any).manaCost ?? 0)) {
    // TODO-QSP: dynamic '<<$ARGS[3]>>_mana[<<ARGS[4]>>] -= <<manaCost>>'
  } else {
    scene.text('Not enough mana to cast the spell.');
  }
  scene.build();
}

export const castSpellNPC: LocationDef = {
  name: 'castSpellNPC',
  region: 'other',
  enter: enter,
};
