import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'reset_CloVars');
  if (((s as any).loc ?? 0)('$attributes_' + ((s as any).locArgs?.[0] ?? 0))) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>', ARGS[1]
  }
  if ((!((s as any).CloQuality ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).CloTopCut ?? 0) === 2  &&  ((s as any).tits ?? 0) >= 6) {
    (s as any).CloTopCut = 3;
  } else {
    if (((s as any).CloTopCut ?? 0) === 3  &&  ((s as any).tits ?? 0) >= 4) {
      (s as any).CloTopCut = 4;
    }
  }
  if ((String(((s as any).locArgs?.[0] ?? 0)).indexOf(String('swimsuit'))) + 1 <= 0  &&  (String(((s as any).locArgs?.[0] ?? 0)).indexOf(String('bikinis'))) + 1 <= 0) {
    if (((s as any).CloCoverFront ?? 0) >= 4) {
      (s as any).CloInhibit = 50;
    } else {
      if (((s as any).CloCoverFront ?? 0) === 3  ||  ((s as any).CloCoverTop ?? 0) >= 4  ||  ((s as any).CloBra ?? 0) === 2) {
        (s as any).CloInhibit = 45;
      } else {
        if (((s as any).CloCoverFront ?? 0) === 2  ||  ((s as any).CloCoverTop ?? 0) === 3) {
          (s as any).CloInhibit = 40;
        } else {
          if (((s as any).CloSkirtShortness ?? 0) >= 6  ||  ((s as any).CloThinness ?? 0) >= 6  ||  ((s as any).CloCoverFront ?? 0) === 1  ||  ((s as any).CloCoverTop ?? 0) === 2) {
            (s as any).CloInhibit = 35;
          } else {
            if (((s as any).CloSkirtShortness ?? 0) === 5  ||  ((s as any).CloPantsShortness ?? 0) >= 6  ||  ((s as any).CloBra ?? 0) === 1  ||  ((s as any).CloCoverTop ?? 0) === 1) {
              (s as any).CloInhibit = 30;
            } else {
              if (((s as any).CloPantsShortness ?? 0) === 5  ||  ((s as any).CloThinness ?? 0) === 5  ||  ((s as any).CloTopCut ?? 0) >= 4  ||  ((s as any).CloPanties ?? 0) === 1) {
                (s as any).CloInhibit = 25;
              } else {
                if (((s as any).CloSkirtShortness ?? 0) === 4) {
                  (s as any).CloInhibit = 20;
                } else {
                  if (((s as any).CloPantsShortness ?? 0) === 4  ||  ((s as any).CloTopCut ?? 0) === 3) {
                    (s as any).CloInhibit = 15;
                  } else {
                    if (((s as any).CloSkirtShortness ?? 0) === 3  ||  ((s as any).CloThinness ?? 0) === 4) {
                      (s as any).CloInhibit = 10;
                    } else {
                      if (((s as any).CloSkirtShortness ?? 0) === 2  ||  ((s as any).CloPantsShortness ?? 0) === 3  ||  ((s as any).CloTopCut ?? 0) === 2  ||  ((s as any).CloThinness ?? 0) === 3) {
                        (s as any).CloInhibit = 5;
                      } else {
                        (s as any).CloInhibit = 0;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  (s as any).CloMaxStrength = ((s as any).CloStrength ?? 0);
  if (qspFunc(s, 'clothing', 'is_owned', ((s as any).locArgs?.[0] ?? 0), qspUntranslated(s, "ARGS[1]", { location: "clothing_attributes" }))) {
    // TODO-QSP: dynamic "
    (s as any).CloDirt = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_dirt[qspUntranslated(s, \"ARGS[1]\", { location: \"clothing_attributes\" })]", { location: "clothing_attributes" });
    (s as any).CloStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_h[qspUntranslated(s, \"ARGS[1]\", { location: \"clothing_attributes\" })]", { location: "clothing_attributes" });
    // TODO-QSP: "
  }
  scene.build();
}

export const clothing_attributes: LocationDef = {
  name: 'clothing_attributes',
  region: 'other',
  enter: enter,
};
