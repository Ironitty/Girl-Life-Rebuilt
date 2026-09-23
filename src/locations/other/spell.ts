import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).SuccessValue = ((!isNaN(String((s as any).locArgs?.[1] ?? '')) && String((s as any).locArgs?.[1] ?? '') !== '') ? (parseFloat(((s as any).locArgs?.[1] ?? 0))) : (((s as any).locArgs?.[1] ?? 0)));
  (s as any).SplTxtColGood = 'green';
  (s as any).SplTxtColBad = 'red';
  (s as any).TargetType = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).spellTarget ?? 0)[String((s as any).locArgs?.[2] ?? '')] === 'self') {
    (s as any).CasterType = ((s as any).TargetType ?? 0);
    (s as any).TargetNumber = ((s as any).locArgs?.[3] ?? 0);
    (s as any).CasterNumber = ((s as any).locArgs?.[3] ?? 0);
  } else {
    if (((s as any).spellTarget ?? 0)[String((s as any).locArgs?.[2] ?? '')] === 'team') {
      (s as any).CasterType = ((s as any).TargetType ?? 0);
      (s as any).TargetNumber = ((s as any).locArgs?.[3] ?? 0);
      (s as any).CasterNumber = ((s as any).locArgs?.[4] ?? 0);
    } else {
      if (((s as any).TargetType ?? 0) === 'pcs') {
        if (String((s as any).locArgs?.[0] ?? '') === 'heal'  ||  String((s as any).locArgs?.[0] ?? '') === 'clone'  ||  String((s as any).locArgs?.[0] ?? '') === 'multiclone'  ||  String((s as any).locArgs?.[0] ?? '') === 'energo'  ||  String((s as any).locArgs?.[0] ?? '') === 'haste') {
          (s as any).CasterType = 'pcs';
          (s as any).SplTxtColGood = 'green';
          (s as any).SplTxtColBad = 'red';
        } else {
          (s as any).CasterType = 'opp';
          (s as any).SplTxtColGood = 'red';
          (s as any).SplTxtColBad = 'green';
        }
      } else {
        if (((s as any).TargetType ?? 0) === 'opp') {
          (s as any).CasterType = 'pcs';
        } else {
          (s as any).CasterType = 'pcs';
          (s as any).TargetType = 'pcs';
        }
      }
      (s as any).TargetNumber = ((s as any).locArgs?.[3] ?? 0);
      (s as any).CasterNumber = ((s as any).locArgs?.[4] ?? 0);
    }
  }
  ((s as any).spellFunc = (s as any).spellFunc ?? {})['UpdateAttrib'] = qspUntranslated(s, "{", { location: "spell" });
  ((s as any).SpellFuncVar = (s as any).SpellFuncVar ?? {})['BaseArray'] = ((s as any).locArgs?.[0] ?? 0);
  ((s as any).SpellFuncVar = (s as any).SpellFuncVar ?? {})['TargetType'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).SpellFuncVar = (s as any).SpellFuncVar ?? {})['TargetNum'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).SpellFuncVar = (s as any).SpellFuncVar ?? {})['Operation'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).SpellFuncVar = (s as any).SpellFuncVar ?? {})['Amount'] = ((s as any).locArgs?.[4] ?? 0);
  if (((s as any).SpellFuncVar ?? 0)?.['Operation'] === '===') {
    // TODO-QSP: !"opp_fog[0] = 0"
  }
  scene.build();
}

export const spell: LocationDef = {
  name: 'spell',
  title: 'The spell fizzles. Nothing seems to happen.',
  region: 'other',
  enter: enter,
};
