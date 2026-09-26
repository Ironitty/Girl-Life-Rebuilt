import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'spellList', '');
  (s as any).spellSuccess = 1;
  (s as any).SpellID = ((s as any).locArgs?.[0] ?? 0);
  (s as any).SpellArgs = '';
  (s as any).i = 5;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).ARGS ?? {}).length) {
      if (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] === '') {
        (s as any).SpellArgs = ((s as any).SpellArgs ?? 0) + (', ' + (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '');
      } else {
        (s as any).SpellArgs = ((s as any).SpellArgs ?? 0) + (', \'' + (((s as any).ARGS ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '\'');
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    (s as any).i = undefined;
    (s as any).manaCost = (((s as any).spellMana ?? 0)?.[String((s as any).SpellID ?? 0)] ?? 0);
    (s as any).casterMana = 0;
    if (((s as any).casterMana ?? 0) >= ((s as any).manaCost ?? 0)) {
      scene.text('' + ((s as any).locArgs?.[3] ?? 0) + '_mana[' + ((s as any).locArgs?.[4] ?? 0) + '] -= ' + ((s as any).manaCost ?? 0) + '');
      (s as any).SpellExec = 'gs \'spell\', \'' + ((s as any).SpellID ?? 0) + '\', \'' + ((s as any).spellSuccess ?? 0) + '\', \'' + ((s as any).locArgs?.[1] ?? 0) + '\', ' + ((s as any).locArgs?.[2] ?? 0) + ', ' + ((s as any).locArgs?.[4] ?? 0) + '' + ((s as any).SpellArgs ?? 0) + '';
      dynamicGoto(s, String((s as any).SpellExec || ''));
    } else {
      scene.text('Not enough mana to cast the spell.');
    }
    (s as any).SpellID = undefined;
    (s as any).SpellExec = undefined;
    (s as any).spellSuccess = undefined;
    (s as any).manaCost = undefined;
    (s as any).casterMana = undefined;
  }
  scene.build();
}

export const castSpellNPC: LocationDef = {
  name: 'castSpellNPC',
  region: 'other',
  enter: enter,
};
