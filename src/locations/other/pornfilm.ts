// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pfactor ?? 0) !== 50) {
    (s as any).num = ((s as any).pfactor ?? 0);
    // TODO-QSP: :actorloop
    (s as any).akrand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).akrand ?? 0) === 1) {
      // TODO-QSP: $pactor[num] = 'Alexei Radimov'
      // TODO-QSP: $pactorID[num] = 'A193'
    } else {
      // TODO-QSP: $pactor[num] = 'Sergei Tatarov'
      // TODO-QSP: $pactorID[num] = 'A194'
      if (((s as any).akrand ?? 0) === 3) {
        // TODO-QSP: $pactor[num] = 'Egor Klyuyev'
        // TODO-QSP: $pactorID[num] = 'A195'
      } else {
        // TODO-QSP: $pactor[num] = 'Ignat Vedenin'
        // TODO-QSP: $pactorID[num] = 'A196'
        if (((s as any).akrand ?? 0) === 5) {
          // TODO-QSP: $pactor[num] = 'Syoma Rodionov'
          // TODO-QSP: $pactorID[num] = 'A197'
        } else {
          // TODO-QSP: $pactor[num] = 'Vasya Harkov'
          // TODO-QSP: $pactorID[num] = 'A198'
          if (((s as any).akrand ?? 0) === 7) {
            // TODO-QSP: $pactor[num] = 'Boris Tabrov'
            // TODO-QSP: $pactorID[num] = 'A199'
          } else {
            // TODO-QSP: $pactor[num] = 'Daniel Rasnik'
            // TODO-QSP: $pactorID[num] = 'A200'
            if (((s as any).akrand ?? 0) === 9) {
              // TODO-QSP: $pactor[num] = 'Peter Izratam'
              // TODO-QSP: $pactorID[num] = 'A201'
            } else {
              // TODO-QSP: $pactor[num] = 'Oleg Taburov'
              // TODO-QSP: $pactorID[num] = 'A202'
            }
            if (((s as any).num ?? 0) < ((s as any).pfactor ?? 0)) {
              (s as any).num2 = ((s as any).pfactor ?? 0);
              // TODO-QSP: :actorloop2
              if (((s as any).pactor ?? 0)?.[String((s as any).num ?? 0)] === ((s as any).pactor ?? 0)?.[String((s as any).num2 ?? 0)]) {
                // TODO-QSP: jump 'actorloop'
              }
              (s as any).num2 = ((s as any).num2 ?? 0) - (1);
              if (((s as any).num2 ?? 0) > ((s as any).num ?? 0)) {
                // TODO-QSP: jump 'actorloop2'
              }
            }
            if (((s as any).aksex ?? 0)?.[String((s as any).akrand ?? 0)] === 0) {
              (s as any).aksex[String((s as any).akrand ?? 0)] = 1;
              (s as any).guy = ((s as any).guy ?? 0) + (1);
            }
            (s as any).num = ((s as any).num ?? 0) - (1);
            if (((s as any).num ?? 0) > 0) {
              // TODO-QSP: jump 'actorloop'
            }
          }
          return;
        }
        return;
      }
      return;
    }
    return;
  }
  scene.build();
}

export const pornfilm: LocationDef = {
  name: 'pornfilm',
  title: 'The set is already bustling with assistants preparing for th',
  region: 'other',
  enter: enter,
};
