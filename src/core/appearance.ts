import type { GameState } from './types';

function adjustFromBMI(s: GameState, value: number): number {
  const bmi = s.pcs_bmi;
  if (bmi < 16) return value * 0.5;
  if (bmi < 19) return value * 0.95;
  if (bmi < 25) return value;
  if (bmi < 30) return value * 0.95;
  if (bmi < 35) return value * 0.8;
  if (bmi < 40) return value * 0.55;
  if (bmi < 45) return value * 0.5;
  return value * 0.4;
}

function calcBodyShapeBonus(s: GameState): number {
  const bmi = s.pcs_bmi;
  const stren = s.strenbuf;

  let base: number;
  if (bmi < 16) base = -10;
  else if (bmi < 19) base = 25;
  else if (bmi < 22) base = 50;
  else if (bmi < 25) base = 50;
  else if (bmi < 30) base = 25;
  else if (bmi < 35) base = 10;
  else if (bmi < 40) base = -15;
  else if (bmi < 45) base = -40;
  else base = -80;

  let strenAdj: number;
  if (stren <= 5) strenAdj = -30;
  else if (stren <= 10) strenAdj = -20;
  else if (stren <= 15) strenAdj = -15;
  else if (stren <= 25) strenAdj = -10;
  else if (stren <= 35) strenAdj = -5;
  else if (stren <= 50) strenAdj = 0;
  else if (stren <= 70) strenAdj = 5;
  else if (stren <= 100) strenAdj = 10;
  else if (stren <= 110) strenAdj = 5;
  else if (stren <= 120) strenAdj = 0;
  else if (stren <= 130) strenAdj = -5;
  else if (stren <= 140) strenAdj = -15;
  else if (stren <= 150) strenAdj = -30;
  else if (stren <= 160) strenAdj = -45;
  else if (stren <= 170) strenAdj = -60;
  else if (stren <= 180) strenAdj = -75;
  else if (stren <= 190) strenAdj = -100;
  else strenAdj = -130;

  return base + strenAdj;
}

function calcAttributeBonus(s: GameState): number {
  const bonus = (s.pcs_agil + s.pcs_vital) / 5;
  return adjustFromBMI(s, bonus);
}

function calcVisibleAgePenalty(s: GameState): number {
  if (s.vidage < 20) {
    const penalty = (5 * (20 - s.vidage) + 1) / 2;
    return adjustFromBMI(s, penalty);
  }
  return 0;
}

function calcTeethPenalty(s: GameState): number {
  if (s.pcs_teeth > 0) return 10 * s.pcs_teeth;
  if (s.pcs_teeth === 0) return 5;
  return 0;
}

function calcFaceBonus(s: GameState): number {
  let eyelashesBonus: number;
  if (s.pcs_lashes <= 0) eyelashesBonus = 0;
  else if (s.pcs_lashes === 1) eyelashesBonus = 1;
  else eyelashesBonus = s.pcs_lashes + 1;
  eyelashesBonus = adjustFromBMI(s, eyelashesBonus);

  let eyeSizeBonus: number;
  if (s.pcs_eyesize <= 1) eyeSizeBonus = s.pcs_eyesize;
  else if (s.pcs_eyesize === 2) eyeSizeBonus = 3;
  else eyeSizeBonus = 2;
  eyeSizeBonus = adjustFromBMI(s, eyeSizeBonus);

  let lipBonus: number;
  if (s.pcs_lip <= 0) lipBonus = -2;
  else if (s.pcs_lip <= 2) lipBonus = s.pcs_lip - 1;
  else lipBonus = 3;
  lipBonus = adjustFromBMI(s, lipBonus);

  return eyelashesBonus + eyeSizeBonus + lipBonus;
}

function calcClothingBonus(s: GameState): number {
  if (s.clothingworntype === 'nude') {
    const bmi = s.pcs_bmi;
    if (bmi >= 19 && bmi < 30) return 15;
    return 0;
  }

  const bmi = s.pcs_bmi;
  const thinness = s.PCloThinness;
  const topCut = s.PXCloTopCut;
  const bottomShort = s.PXCloBottomShortness;

  let revealing: number;
  if (bmi < 19) {
    revealing = ((400 - thinness * 100) + (500 - topCut * 100) + (400 - bottomShort * 100)) / 2;
  } else if (bmi < 30) {
    revealing = (thinness * 100 + topCut * 100 + bottomShort * 100) / 2;
  } else {
    revealing = ((400 - thinness * 100) + (500 - topCut * 100) + (400 - bottomShort * 100)) * 3 / 4;
  }

  const cleanBonus = 9 + s.PCloQuality * 3;
  const dirt = Math.min(Math.max(-cleanBonus, cleanBonus * (1440 - s.PCloDirt) / 960), cleanBonus);

  return (s.PCloQuality * revealing) / 76 + dirt;
}

function calcAccessoriesBonus(s: GameState): number {
  let pantyBonus = 0;
  if (s.pantyworntype !== 'none') {
    pantyBonus = s.PPanQuality >= 4 ? s.PPanQuality - 2 : s.PPanQuality - 1;
  }

  let braBonus = 0;
  if (s.braworntype !== 'none') {
    braBonus = s.PBraQuality >= 4 ? s.PBraQuality - 2 : s.PBraQuality - 1;
  }

  let coatBonus = 0;
  const locType = s.locationType;
  const isOutside = locType.includes('outdoors') || locType === 'secluded';
  const isInside = ['bathroom', 'event_indoors', 'kitchen', 'private', 'private_shared', 'public_indoors', 'restroom'].some(t => locType.includes(t));
  if (isOutside && s.temper <= 0 && s.coatworntype !== 'none') {
    coatBonus = s.PCoatQuality - 2;
  } else if (isInside) {
    coatBonus = 0;
  }

  return coatBonus + s.PShoQuality + pantyBonus + braBonus;
}

function calcGroomingBonus(s: GameState): number {
  let makeupBonus: number;
  if (s.pcs_makeup === 0) makeupBonus = -5;
  else if (s.pcs_makeup === 1) makeupBonus = 0;
  else if (s.pcs_makeup === 5) makeupBonus = 30;
  else if (s.pcs_makeup >= 2) makeupBonus = (s.pcs_makeup * 5) - 5;
  else makeupBonus = 0;

  const breathBonus = 5 * s.pcs_breath;
  return adjustFromBMI(s, makeupBonus + breathBonus);
}

function calcGroomingPenalty(s: GameState): number {
  let penalty = 0;

  if (s.pcs_lipbalm <= 0) penalty += 5;

  const hairPenalty = (1 - s.pcs_hairbsh) * 10;
  penalty += hairPenalty;

  if (s.pcs_hairlng < 10) penalty += 10;

  if (s.deodorant_on === 0 || s.pcs_sweat >= 20) penalty += 5;

  if (s.pcs_sweat >= 22) {
    const sweatPenalty = (s.pcs_sweat - 10) / 4;
    penalty += sweatPenalty;
  }

  if (s.glass === 1) penalty += 10;

  if (s.pcs_leghair > 0) {
    penalty += Math.max(0, Math.min(3 * (s.pcs_leghair / 3), 9));
  }

  return penalty;
}

function convertToHotcat(appearance: number): number {
  if (appearance <= 40) return 1;
  if (appearance <= 60) return 2;
  if (appearance <= 80) return 3;
  if (appearance <= 100) return 4;
  if (appearance <= 125) return 5;
  if (appearance <= 150) return 6;
  if (appearance <= 165) return 7;
  if (appearance <= 180) return 8;
  if (appearance <= 199) return 9;
  return 10;
}

export function computeAppearance(s: GameState): void {
  const skinBonus = s.pcs_skin / 10;
  const bodyShapeBonus = calcBodyShapeBonus(s);
  const attributeBonus = calcAttributeBonus(s);
  const faceBonus = calcFaceBonus(s);
  const agePenalty = calcVisibleAgePenalty(s);
  const teethPenalty = calcTeethPenalty(s);
  const archBonus = s.arch_effects['appearance_effect'] ?? 0;
  const succBonus = s.succubusflag > 0 ? 50 : 0;

  s.pcs_apprncbase = skinBonus + bodyShapeBonus + attributeBonus + faceBonus - agePenalty - teethPenalty + archBonus + succBonus;

  const clothingBonus = calcClothingBonus(s);
  const accessoriesBonus = calcAccessoriesBonus(s);
  const groomingBonus = calcGroomingBonus(s);
  const groomingPenalty = calcGroomingPenalty(s);

  const supernatural = archBonus + succBonus;
  const total = s.pcs_apprncbase + clothingBonus + accessoriesBonus + groomingBonus - groomingPenalty;

  s.pcs_apprnc = Math.max(0, Math.min(total, 200)) + supernatural;
  s.pcs_hotcat = convertToHotcat(s.pcs_apprnc);
}
