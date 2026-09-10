import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: **Shoe Organization
  // TODO-QSP: Shoe Categories: moncheri, bomba, dolls, eroto, gm, danilovich
  // TODO-QSP: ShoExhibit: 0-100 Exhibitionism value required to wear the outfit
  // TODO-QSP: **Shoe Variables
  (s as any).ShoStyle = 1;
  // TODO-QSP: 1 Alternative - For all good rebels might help your willpower
  // TODO-QSP: ShoStyle2:  1 Stripper, 2 Exercise
  (s as any).ShoQuality = Math.floor(Math.random() * 7) + 1;
  // TODO-QSP: Notes: 7 is for shoes that might only be found on celebrities or millionaires at red carpet events.
  // TODO-QSP: Ex:    6-5 are the higher and lower levels of the expensive category
  // TODO-QSP: 4-3 are the same for average category
  // TODO-QSP: 2-1 are the same for cheap category.
  (s as any).ShoHeels = Math.floor(Math.random() * 6) + 1;
  // TODO-QSP: Ex:    6 eroto heel over 15cm (6")
  // TODO-QSP: 5 Ultra high heel around 15cm (6")
  // TODO-QSP: 4 High heel around 10cm (4")
  // TODO-QSP: 3 Mid heel around 7.6cm (3")
  // TODO-QSP: 2 low heel around 5cm (2")
  // TODO-QSP: 1 Flats less than 5cm (2")
  (s as any).ShoCut = Math.floor(Math.random() * 6) + 1;
  // TODO-QSP: Ex:    6 groin high
  // TODO-QSP: 5 Thigh high
  // TODO-QSP: 4 for approx. knee high
  // TODO-QSP: 3 for calf high
  // TODO-QSP: 2 for ankle high
  // TODO-QSP: 1 for shoes
  // TODO-QSP: ShoPrice: The full price of the shoes
  (s as any).ShoStrip = 1;
  (s as any).ShoSport = 1;
  (s as any).ShoBimbo = 1;
  (s as any).ShoGoth = 1;
  (s as any).ShoPunk = 1;
  qspCall(s, 'shoes', 'reset_ShoVars');
  if (((s as any).loc ?? 0)('attributes_\'0\'_shoes')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>_shoes', ARGS[1]
  }
  if ((!((s as any).ShoQuality ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).ShoHeels ?? 0) < 2) {
    (s as any).ShoSkill = 0;
    (s as any).ShoPain['severe'] = 0;
    (s as any).ShoPain['medium'] = 0;
    (s as any).ShoPain['mild'] = 0;
  } else {
    (s as any).ShoSkill = 0;
    (s as any).ShoPain['severe'] = 0;
    (s as any).ShoPain['medium'] = 25;
    (s as any).ShoPain['mild'] = 40;
    if (((s as any).ShoHeels ?? 0) === 3) {
      (s as any).ShoSkill = 15;
      (s as any).ShoPain['severe'] = 0;
      (s as any).ShoPain['medium'] = 35;
      (s as any).ShoPain['mild'] = 50;
    } else {
      (s as any).ShoSkill = 30;
      (s as any).ShoPain['severe'] = 0;
      (s as any).ShoPain['medium'] = 45;
      (s as any).ShoPain['mild'] = 60;
      if (((s as any).ShoHeels ?? 0) === 5) {
        (s as any).ShoSkill = 45;
        (s as any).ShoPain['severe'] = 55;
        (s as any).ShoPain['medium'] = 65;
        (s as any).ShoPain['mild'] = 75;
      } else {
        (s as any).ShoSkill = 60;
        (s as any).ShoPain['severe'] = 70;
        (s as any).ShoPain['medium'] = 80;
        (s as any).ShoPain['mild'] = 90;
      }
      (s as any).ShoMaxStrength = ((s as any).ShoStrength ?? 0);
      if (qspFunc(s, 'shoes', 'is_owned', ((s as any).locArgs?.[0] ?? 0), qspUntranslated(s, "ARGS[1]", { location: "shoe_attributes" }))) {
        // TODO-QSP: dynamic "
        (s as any).ShoStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_shoe_h[qspUntranslated(s, \"ARGS[1]\", { location: \"shoe_attributes\" })]", { location: "shoe_attributes" });
        // TODO-QSP: "
      }
    }
  }
  scene.build();
}

export const shoe_attributes: LocationDef = {
  name: 'shoe_attributes',
  region: 'other',
  enter: enter,
};
