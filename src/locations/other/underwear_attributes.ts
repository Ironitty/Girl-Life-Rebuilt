import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: **underwear Organization
  // TODO-QSP: PanStyle: used to set the type of underwear currently there is just 0 for panties and bra and 2 for ...
  // TODO-QSP: **underwear Variables
  // TODO-QSP: PanMaterial/BraMaterial: Used for bra, panty and bodysuit material (bodysuit uses bra) description a...
  // TODO-QSP: 1 - Leather
  // TODO-QSP: 2 - rubber
  // TODO-QSP: 3 - mesh
  // TODO-QSP: 4 - fishnet
  // TODO-QSP: 5 - vinyl
  // TODO-QSP: 6 - lace
  // TODO-QSP: PanType: Used for description of panties, could be useful for specific reactions
  // TODO-QSP: 1 - panties
  // TODO-QSP: 2 - boy shorts
  // TODO-QSP: 3 - G-string
  // TODO-QSP: 4 - C-string
  // TODO-QSP: 5 - French Knickers
  // TODO-QSP: BraType: Used for description of bra, could be useful for specific reactions
  // TODO-QSP: 1 - balcony
  // TODO-QSP: 2 - bandeau
  // TODO-QSP: 3 - corset
  // TODO-QSP: 4 - push up
  // TODO-QSP: 5 - bralette
  // TODO-QSP: 6 - sports
  // TODO-QSP: 7 - shelf
  // TODO-QSP: 8 - open
  // TODO-QSP: 9 - under wire
  // TODO-QSP: 10 - bikini top
  // TODO-QSP: BraType: Used for description of bodysuit with same variable that bra uses, could be useful for spec...
  // TODO-QSP: 1 - Full
  // TODO-QSP: 2 - long sleeve
  // TODO-QSP: 3 - high neck
  // TODO-QSP: 4 - backless
  // TODO-QSP: 5 - t-shirt
  // TODO-QSP: 6 - vest
  // TODO-QSP: 7 - spaghetti strap
  // TODO-QSP: 8 - romper
  // TODO-QSP: BraFun/PanFun: For function of underwear (bodysuit uses bra)
  // TODO-QSP: 1 - regular
  // TODO-QSP: 2 - sports
  // TODO-QSP: 3 - swimwear
  // TODO-QSP: BraPrice/PanPrice: The full price of the item
  // TODO-QSP: BraSport: Flag for sportwear
  // TODO-QSP: 1 - Is sport
  // TODO-QSP: BraSwim: Flag for swimwear
  // TODO-QSP: 1 - Is swimwear
  // TODO-QSP: (bodysuit uses BraQuality)
  // TODO-QSP: PanQuality/BraQuality: 1-6 scale, based on the general expensiveness of the underwear. Higher is bet...
  // TODO-QSP: 6-5 are the higher and lower levels of the expensive category
  // TODO-QSP: 3-4 are the same for average category
  // TODO-QSP: 2-1 are the same for cheap category.
  // TODO-QSP: PanThinness/BraThinness: 1-6 scale, with higher values being made of thinner material and/or being m...
  // TODO-QSP: 6 transparent - can see through it very easily would include things like fishnet
  // TODO-QSP: 5 semi-transparent - Can see through it but not immediately obvious, would include wide mesh
  // TODO-QSP: 4 slightly transparent - You have to really stare but you can make out some details or exceptionally...
  // TODO-QSP: 3 thin - Cannot see through it but can make put the shape clearly, or tighter and thinner than norma...
  // TODO-QSP: 2 not particularly thick or thin - This is everything in the middle and should cover the widest rang...
  // TODO-QSP: 1 thick - This should stand out as being thicker than you''d expect for underwear, things like therm...
  // TODO-QSP: (bodysuit uses all 3 exposure variables if required)
  // TODO-QSP: PanCoverFront: 1-4 scale not required to be set must expose the vagina at least partially
  // TODO-QSP: 4 Pussy not covered at all
  // TODO-QSP: 3 Pussy is covered but the material is completely transparent, or wide fishnet
  // TODO-QSP: 2 Pussy covered but still visible, inc. wide mesh
  // TODO-QSP: 1 Pussy can barely be seen through material if you look hard enough, inc. fine mesh
  // TODO-QSP: PanCoverBack: 1-4 scale not required to be set exposure of the butt, the presence of a g-string or t...
  // TODO-QSP: 4 Butt not covered at all
  // TODO-QSP: 3 Butt is covered but the material is completely transparent, or wide fishnet
  // TODO-QSP: 2 Butt covered but still visible, inc. wide mesh
  // TODO-QSP: 1 Butt can barely be seen through material if you look hard enough, inc. fine mesh
  // TODO-QSP: BraCover: 1-4 scale not required to be set. Breast exposure, must be some nipple or the whole of the...
  // TODO-QSP: 4 Breasts not covered at all
  // TODO-QSP: 3 Breasts is covered but the material is completely transparent, or wide fishnet
  // TODO-QSP: 2 Breasts covered but still visible, inc. wide mesh
  // TODO-QSP: 1 Breasts can barely be seen through material if you look hard enough, inc. fine mesh
  qspCall(s, 'bras', 'reset_BraVars');
  qspCall(s, 'panties', 'reset_PanVars');
  (s as any).underwear['pair'] = 0;
  if (((s as any).loc ?? 0)('attributes_\'0\'')) {
    // TODO-QSP: gs '$attributes_<<$ARGS[0]>>', ARGS[1]
  }
  if (((s as any).BraQuality ?? 0) === 0  &&  ((s as any).PanQuality ?? 0) === 0) {
    // TODO-QSP: exit
  }
  (s as any).PanMaxStrength = ((s as any).PanStrength ?? 0);
  (s as any).BraMaxStrength = ((s as any).BraStrength ?? 0);
  if (((s as any).dyneval ?? 0)('result === \'0\'[\'1\']') === 1) {
    // TODO-QSP: dynamic "
    (s as any).PanDirt = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_dirt[qspUntranslated(s, \"ARGS[1]\", { location: \"underwear_attributes\" })]", { location: "underwear_attributes" });
    (s as any).BraDirt = ((s as any).PanDirt ?? 0);
    (s as any).PanStrength = qspUntranslated(s, "((s as any).locArgs?.[0] ?? 0)_h[qspUntranslated(s, \"ARGS[1]\", { location: \"underwear_attributes\" })]", { location: "underwear_attributes" });
    (s as any).BraStrength = ((s as any).PanStrength ?? 0);
    // TODO-QSP: "
  }
  scene.build();
}

export const underwear_attributes: LocationDef = {
  name: 'underwear_attributes',
  region: 'other',
  enter: enter,
};
