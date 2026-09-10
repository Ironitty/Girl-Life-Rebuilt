import type { GameState } from './types';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function outfitClearAll(s: GameState): void {
  s.clothingworntype = 'nude';
  s.clothingwornnumber = 0;
  s.underwear['type'] = 0;
  s.bodysuitworntype = 'none';
  s.bodysuitwornnumber = 0;
  s.braworntype = 'none';
  s.brawornnumber = 0;
  s.pantyworntype = 'none';
  s.pantywornnumber = 0;
  s.currentpursetype = 'none';
  s.currentpursenumber = 0;
  s.shoeworntype = 'none';
  s.shoewornnumber = 0;
  s.coatworntype = 'none';
  s.coatwornnumber = 0;
  outfitResetDerivedVars(s);
}

export function outfitResetDerivedVars(s: GameState): void {
  s.PBimbo = 0;
  s.PGoth = 0;
  s.PPunk = 0;
  s.PPrep = 0;
  s.PPrude = 0;
  s.PProstitute = 0;
  s.PMaid = 0;
  s.PServer = 0;
  s.PStrip = 0;
  s.PSchool = 0;
  s.POffice = 0;
  s.PSport = 0;
  s.PSwim = 0;
  s.PCoverTop = 0;
  s.PCoverFront = 0;
  s.PCoverBack = 0;
}

export function outfitSetDerivedVars(s: GameState): void {
  outfitResetDerivedVars(s);

  if (s.PCloBra === 1) {
    if (s.braworntype !== 'none') {
      s.braworntype = 'none';
      s.brawornnumber = 0;
      outfitSetDerivedVars(s);
      return;
    }
    s.PXCloTopCut = 400;
  } else if (s.PCloBra === 2) {
    s.PXCloTopCut = 500;
  }

  if (s.PCloBimbo === 1 && s.PShoBimbo === 1) s.PBimbo = 1;
  if (s.PCloGoth === 1 && s.PShoGoth === 1) s.PGoth = 1;
  if (s.PCloPunk === 1 && s.PShoPunk === 1) s.PPunk = 1;
  if (s.PCloPrep === 1) s.PPrep = 1;
  if (s.PCloPrude === 1) s.PPrude = 1;
  if (s.PCloStyle2 === 1 || s.PCloMaid === 1) s.PMaid = 1;
  if (s.PCloStyle2 === 2 || s.PCloServer === 1) s.PServer = 1;
  if ((s.PCloStyle2 === 3 || s.PCloStrip === 1) && (s.PShoStyle2 === 1 || s.PShoStrip === 1)) s.PStrip = 1;
  if (s.PCloStyle2 === 4 || s.PCloSchool === 1) s.PSchool = 1;
  if (s.PCloStyle2 === 5 || s.PCloOffice === 1) s.POffice = 1;
  if ((s.PCloStyle2 === 6 || s.PCloSport === 1) && (s.PShoStyle2 === 2 || s.PShoSport === 1)) s.PSport = 1;
  s.PSwim = s.PCloSwim;

  s.PCoverTop = Math.max(0, s.PCloCoverTop + s.PBraCover - 4);
  s.PCoverFront = Math.max(0, s.PCloCoverFront + s.PPanCoverFront - 4);
  s.PCoverBack = Math.max(0, s.PCloCoverBack + s.PPanCoverBack - 4);
}

export function outfitBackup(s: GameState, slot?: string): void {
  const key = slot || '';
  if (!key) {
    s.lastwornclothingtype = s.clothingworntype;
    s.lastwornclothingnumber = s.clothingwornnumber;
    s.lastwornunderwear = s.underwear['type'];
    s.lastwornbodysuittype = s.bodysuitworntype;
    s.lastwornbodysuitnumber = s.bodysuitwornnumber;
    s.lastwornpantytype = s.pantyworntype;
    s.lastwornpantynumber = s.pantywornnumber;
    s.lastwornbratype = s.braworntype;
    s.lastwornbranumber = s.brawornnumber;
    s.lastwornshoetype = s.shoeworntype;
    s.lastwornshoenumber = s.shoewornnumber;
    s.lastwornpursetype = s.currentpursetype;
    s.lastwornpursenumber = s.currentpursenumber;
    s.lastworncoattype = s.coatworntype;
    s.lastworncoatnumber = s.coatwornnumber;
  } else {
    const b = s.lastworn_backups[key] || {};
    b['clothingtype'] = s.clothingworntype;
    b['clothingnumber'] = s.clothingwornnumber;
    b['underwear'] = s.underwear['type'];
    b['bodysuittype'] = s.bodysuitworntype;
    b['bodysuitnumber'] = s.bodysuitwornnumber;
    b['pantytype'] = s.pantyworntype;
    b['pantynumber'] = s.pantywornnumber;
    b['bratype'] = s.braworntype;
    b['branumber'] = s.brawornnumber;
    b['shoetype'] = s.shoeworntype;
    b['shoenumber'] = s.shoewornnumber;
    b['pursetype'] = s.currentpursetype;
    b['pursenumber'] = s.currentpursenumber;
    b['coattype'] = s.coatworntype;
    b['coatnumber'] = s.coatwornnumber;
    s.lastworn_backups[key] = b;
  }
}

export function outfitNudeBackup(s: GameState, slot?: string): void {
  const key = slot || '';
  if (!key) {
    s.lastwornclothingtype = 'nude';
    s.lastwornclothingnumber = 0;
    s.lastwornunderwear = 0;
    s.lastwornbodysuittype = 'none';
    s.lastwornbodysuitnumber = 0;
    s.lastwornpantytype = 'none';
    s.lastwornpantynumber = 0;
    s.lastwornbratype = 'none';
    s.lastwornbranumber = 0;
    s.lastwornshoetype = 'none';
    s.lastwornshoenumber = 0;
    s.lastwornpursetype = 'none';
    s.lastwornpursenumber = 0;
    s.lastworncoattype = 'none';
    s.lastworncoatnumber = 0;
  } else {
    s.lastworn_backups[key] = {
      clothingtype: 'nude',
      clothingnumber: 0,
      underwear: 0,
      bodysuittype: 'none',
      bodysuitnumber: 0,
      pantytype: 'none',
      pantynumber: 0,
      bratype: 'none',
      branumber: 0,
      shoetype: 'none',
      shoenumber: 0,
      pursetype: 'none',
      pursenumber: 0,
      coattype: 'none',
      coatnumber: 0,
    };
  }
}

export function outfitRestore(s: GameState, slot?: string): void {
  const key = slot || '';
  if (!key) {
    if (s.lastwornunderwear === 2) {
      s.bodysuitworntype = s.lastwornbodysuittype;
      s.bodysuitwornnumber = s.lastwornbodysuitnumber;
    } else {
      s.pantyworntype = s.lastwornpantytype;
      s.pantywornnumber = s.lastwornpantynumber;
      s.braworntype = s.lastwornbratype;
      s.brawornnumber = s.lastwornbranumber;
    }
    s.clothingworntype = s.lastwornclothingtype;
    s.clothingwornnumber = s.lastwornclothingnumber;
    s.shoeworntype = s.lastwornshoetype;
    s.shoewornnumber = s.lastwornshoenumber;
    s.currentpursetype = s.lastwornpursetype;
    s.currentpursenumber = s.lastwornpursenumber;
    s.coatworntype = s.lastworncoattype;
    s.coatwornnumber = s.lastworncoatnumber;
  } else {
    const b = s.lastworn_backups[key];
    if (b) {
      s.clothingworntype = b['clothingtype'] as string;
      s.clothingwornnumber = b['clothingnumber'] as number;
      s.underwear['type'] = b['underwear'] as number;
      if (b['underwear'] === 2) {
        s.bodysuitworntype = b['bodysuittype'] as string;
        s.bodysuitwornnumber = b['bodysuitnumber'] as number;
      } else {
        s.pantyworntype = b['pantytype'] as string;
        s.pantywornnumber = b['pantynumber'] as number;
        s.braworntype = b['bratype'] as string;
        s.brawornnumber = b['branumber'] as number;
      }
      s.shoeworntype = b['shoetype'] as string;
      s.shoewornnumber = b['shoenumber'] as number;
      s.currentpursetype = b['pursetype'] as string;
      s.currentpursenumber = b['pursenumber'] as number;
      s.coatworntype = b['coattype'] as string;
      s.coatwornnumber = b['coatnumber'] as number;
    }
  }
  outfitSetDerivedVars(s);
}

export function outfitStripAll(s: GameState, slot?: string): void {
  outfitBackup(s, slot);
  s.clothingworntype = 'nude';
  s.clothingwornnumber = 0;
  s.underwear['type'] = 0;
  s.bodysuitworntype = 'none';
  s.bodysuitwornnumber = 0;
  s.braworntype = 'none';
  s.brawornnumber = 0;
  s.pantyworntype = 'none';
  s.pantywornnumber = 0;
  s.currentpursetype = 'none';
  s.currentpursenumber = 0;
  s.shoeworntype = 'none';
  s.shoewornnumber = 0;
  s.coatworntype = 'none';
  s.coatwornnumber = 0;
  outfitSetDerivedVars(s);
}

export function outfitUndress(s: GameState, slot?: string): void {
  outfitStripAll(s, slot || 'backup');
}

export function outfitDress(s: GameState, slot?: string): void {
  const key = slot || 'backup';
  if (key) {
    const b = s.lastworn_backups[key];
    if (b && b['clothingtype'] !== '' && b['clothingtype'] !== 'nude') {
      outfitRestore(s, key);
    } else {
      outfitRestore(s);
    }
  } else {
    outfitRestore(s);
  }
}

export function outfitGetHourlyMoodBonus(s: GameState): number {
  let result = 0;
  if (s.cheatVars['clothes_dirt']) {
    result += 0;
  } else {
    const tempDirt = (s.PCloDirt + s.PBraDirt + s.PPanDirt) / 3;
    result += Math.min(Math.max(-5, 5 * (1440 - tempDirt) / 960), 5);
  }
  if (s.pcs_mood < 60 && s.pantyworntype === 'cats') result += 2;
  if (s.pcs_mood < 60 && s.braworntype === 'cats') result += 2;
  return result;
}

export function calcClothingBonus(s: GameState): number {
  if (s.clothingworntype === 'nude') {
    if (s.pcs_bmi >= 18.5 && s.pcs_bmi < 25) return 15;
    return 0;
  }

  let tempRevealing: number;
  if (s.pcs_bmi < 18.5) {
    tempRevealing = ((400 - s.PCloThinness) + (500 - s.PXCloTopCut) + (400 - s.PXCloBottomShortness)) / 2;
  } else if (s.pcs_bmi < 30) {
    tempRevealing = (s.PCloThinness + s.PXCloTopCut + s.PXCloBottomShortness) / 2;
  } else {
    tempRevealing = ((400 - s.PCloThinness) + (500 - s.PXCloTopCut) + (400 - s.PXCloBottomShortness)) * 3 / 4;
  }

  let tempDirt: number;
  if (s.cheatVars['clothes_dirt']) {
    tempDirt = 0;
  } else {
    const cleanBonus = 9 + s.PCloQuality * 3;
    tempDirt = Math.min(Math.max(-cleanBonus, cleanBonus * (1440 - s.PCloDirt) / 960), cleanBonus);
  }

  return Math.floor(s.PCloQuality * tempRevealing / 76 + tempDirt);
}

export function calcAccessoriesBonus(s: GameState): number {
  let pantyBonus = 0;
  let braBonus = 0;
  let coatQualityBonus = 0;

  if (s.pantyworntype !== 'none') {
    pantyBonus = s.PPanQuality >= 4 ? s.PPanQuality - 2 : s.PPanQuality - 1;
  }
  if (s.braworntype !== 'none') {
    braBonus = s.PBraQuality >= 4 ? s.PBraQuality - 2 : s.PBraQuality - 1;
  }

  const locType = s.locationType || '';
  if (locType.includes('outdoors') || locType === 'secluded') {
    if (s.temper <= 0) {
      if (s.coatworntype === 'none') coatQualityBonus = 0;
      else coatQualityBonus = s.PCoatQuality - 2;
    }
  } else {
    coatQualityBonus = 0;
  }

  return coatQualityBonus + s.PShoQuality + pantyBonus + braBonus;
}

export function outfitStat(s: GameState, elapsed: number): void {
  outfitIncreaseOutfitDirt(s, elapsed);
  outfitIncreaseOutfitWear(s, elapsed);
  heelStatSkillPain(s, elapsed);
}

export function outfitIncreaseOutfitDirt(s: GameState, timeDiff: number): void {
  if (s.cheatVars['clothes_dirt']) return;

  if (s.clothingworntype === 'nude' || s.clothingworntype === '') {
    s.PCloDirt = 0;
  } else if (s.PCloBorrowed === 0) {
    if (timeDiff > 0) {
      let sweatPenal = 100;
      if (s.PCloStyle2 !== 6 && s.PSwim === 0) sweatPenal += s.pcs_sweat;

      let cumPenal = 2 * (s.sparrvol['6'] || 0) + 2 * (s.sparrvol['7'] || 0);
      if (s.pantyworntype === 'none' && s.bodysuitworntype === 'none') {
        sweatPenal += Math.max(0, s.pcs_horny - 100) / 2;
        cumPenal += (s.sparrvol['1'] || 0) + (s.sparrvol['4'] || 0);
      }
      if (s.braworntype === 'none' && s.bodysuitworntype === 'none') {
        cumPenal += s.sparrvol['15'] || 0;
      }
      if (s.bodysuitworntype === 'none' && !s.clothingworntype.includes('bikinis')) {
        cumPenal += (s.sparrvol['8'] || 0) + (s.sparrvol['14'] || 0);
      }
      cumPenal += Math.max(0, 6 - Math.max(s.PCloSkirt, s.PCloPants)) * (s.sparrvol['9'] || 0) / 6;
      cumPenal /= 2;

      const dirty = timeDiff * Math.min(sweatPenal + cumPenal, 200) / 100;
      const dirty2 = rand(0, dirty) + rand(0, dirty) + rand(0, dirty) + rand(0, dirty);
      s.PCloDirt += dirty2 / 2;
    }
  }

  if (s.inSleep === 0) {
    if (s.underwear['type'] === 2) {
      if (s.bodysuitworntype === 'none' || s.bodysuitworntype === '') {
        s.PBraDirt = 0;
        s.PPanDirt = 0;
      } else if (timeDiff > 0) {
        let sweatPenal = 100;
        if (s.PBraFun === 1 && s.PPanFun === 1) sweatPenal += s.pcs_sweat;
        sweatPenal += Math.max(0, s.pcs_horny - 100) / 2;
        const cumPenal = (s.sparrvol['2'] || 0) + (s.sparrvol['5'] || 0) + ((s.sparrvol['1'] || 0) + (s.sparrvol['4'] || 0) + (s.sparrvol['8'] || 0) + (s.sparrvol['14'] || 0) + (s.sparrvol['15'] || 0)) / 2;
        const dirty = timeDiff * Math.min(sweatPenal + cumPenal, 200) / 100;
        const dirty2 = rand(0, dirty) + rand(0, dirty) + rand(0, dirty) + rand(0, dirty);
        s.PPanDirt += dirty2 / 2;
        s.PBraDirt = s.PPanDirt;
      }
    } else {
      if (s.braworntype !== 'none' && s.braworntype !== '') {
        if (timeDiff > 0) {
          let sweatPenal = 100;
          if (s.PBraFun === 1) sweatPenal += s.pcs_sweat;
          const cumPenal = s.sparrvol['14'] || 0;
          const dirty = timeDiff * Math.min(sweatPenal + cumPenal, 200) / 100;
          const dirty2 = rand(0, dirty) + rand(0, dirty) + rand(0, dirty) + rand(0, dirty);
          s.PBraDirt += dirty2 / 2;
        }
      } else {
        s.PBraDirt = 0;
      }

      if (s.pantyworntype !== 'none' && s.pantyworntype !== '') {
        if (timeDiff > 0) {
          let sweatPenal = 100;
          if (s.PPanFun === 1) sweatPenal += s.pcs_sweat;
          sweatPenal += Math.max(0, s.pcs_horny - 100) / 2;
          const cumPenal = (s.sparrvol['2'] || 0) + (s.sparrvol['5'] || 0) + ((s.sparrvol['1'] || 0) + (s.sparrvol['4'] || 0)) / 2;
          const dirty = timeDiff * Math.min(sweatPenal + cumPenal, 200) / 100;
          const dirty2 = rand(0, dirty) + rand(0, dirty) + rand(0, dirty) + rand(0, dirty);
          s.PPanDirt += dirty2 / 2;
        }
      } else {
        s.PPanDirt = 0;
      }
    }
  }
}

export function outfitIncreaseOutfitWear(s: GameState, timeDiff: number): void {
  if (s.cheatVars['clothes_strength']) return;
  if (s.inSleep) return;

  const locType = s.locationType || '';
  const isOutdoorsRain = locType.includes('outdoors') && s.sunWeather === 0;

  if (s.shoeworntype === 'none' || s.shoeworntype === '') {
    s.PShoStrength = 0;
  } else if (s.PShoBorrowed === 0) {
    if (timeDiff > 0) {
      let cost = timeDiff;
      if (isOutdoorsRain) cost *= 2;
      s.PShoStrength -= cost;
    }
  }

  let outerLayerDone = 0;

  if (s.coatworntype === 'none' || s.coatworntype === '') {
    s.PCoatStrength = 0;
  } else if (s.PCoatBorrowed === 0) {
    if (timeDiff > 0) {
      let cost = timeDiff;
      if (outerLayerDone === 0) {
        outerLayerDone = 1;
        if (isOutdoorsRain) cost = 3 * cost / 2;
      }
      s.PCoatStrength -= cost;
    }
  }

  if (s.clothingworntype === 'nude' || s.clothingworntype === '') {
    s.PCloStrength = 0;
  } else if (s.PCloBorrowed === 0) {
    if (timeDiff > 0) {
      let cost = timeDiff;
      if (outerLayerDone === 0) {
        outerLayerDone = 1;
        cost *= 2;
        if (isOutdoorsRain) cost *= 3;
      }
      s.PCloStrength -= cost;
    }
  }

  if (s.underwear['type'] === 2) {
    if (s.bodysuitworntype === 'none' || s.bodysuitworntype === '') {
      s.PBraStrength = 0;
      s.PPanStrength = 0;
    } else if (s.PBraBorrowed === 0) {
      if (timeDiff > 0) {
        let cost = timeDiff;
        if (outerLayerDone === 0) {
          cost *= 3;
          if (isOutdoorsRain) cost *= 4;
        }
        s.PBraStrength -= cost;
        s.PPanStrength = s.PBraStrength;
      }
    }
  } else {
    if (s.braworntype === 'none' || s.braworntype === '') {
      s.PBraStrength = 0;
    } else if (s.PBraBorrowed === 0) {
      if (timeDiff > 0) {
        let cost = timeDiff;
        if (outerLayerDone === 0) {
          cost *= 3;
          if (isOutdoorsRain) cost *= 4;
        }
        s.PBraStrength -= cost;
      }
    }

    if (s.pantyworntype === 'none' || s.pantyworntype === '') {
      s.PPanStrength = 0;
    } else if (s.PPanBorrowed === 0) {
      if (timeDiff > 0) {
        let cost = timeDiff;
        if (outerLayerDone === 0) {
          cost *= 3;
          if (isOutdoorsRain) cost *= 4;
        }
        s.PPanStrength -= cost;
      }
    }
  }
}

export function heelStatSkillPain(s: GameState, _elapsed: number): void {
  if (s.totminut < s.heelsminut || s.heelsminut === 0) s.heelsminut = s.totminut;
  if (s.totminut < s.heelsminut + 30) return;

  const heelsTime = s.totminut - s.heelsminut;
  s.heelsminut = s.totminut;
  if (s.inSleep !== 0) return;

  if (s.PShoHeels <= 1) {
    const deg = rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 15));
    s.skill_levels['heels'] = Math.max(0, (s.skill_levels['heels'] || 0) - deg);
    return;
  }

  let depPain = 0;
  const heelPref = s.trait_vars['heel_preference'] || 0;
  if (heelPref >= 3) {
    if (s.PShoHeels <= 1) {
      if ((s.pain['feet'] || 0) < 80) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 7), Math.floor(heelsTime / 2)), 120);
      depPain = 1;
    } else if (s.PShoHeels === 2) {
      if ((s.pain['feet'] || 0) < 60) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 15), Math.floor(heelsTime / 5)), 120);
      depPain = 1;
    } else if (s.PShoHeels === 3) {
      if ((s.pain['feet'] || 0) < 40) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 10)), 120);
      depPain = 1;
    }
  } else if (heelPref >= 2) {
    if (s.PShoHeels <= 1) {
      if ((s.pain['feet'] || 0) < 60) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 15), Math.floor(heelsTime / 5)), 120);
      depPain = 1;
    } else if (s.PShoHeels === 2) {
      if ((s.pain['feet'] || 0) < 40) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 10)), 120);
      depPain = 1;
    }
  } else if (heelPref === 1) {
    if (s.PShoHeels <= 1) {
      if ((s.pain['feet'] || 0) < 40) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 10)), 120);
      depPain = 1;
    }
  }

  if (s.PShoHeels <= 1 || depPain === 1) return;

  const pcsHeels = s.skill_levels['heels'] || 0;
  const severe = s.PShoPain['severe'] || 80;
  const medium = s.PShoPain['medium'] || 60;
  const mild = s.PShoPain['mild'] || 40;

  let expGain = 0;
  if (pcsHeels < severe) {
    const t = Math.min(Math.max(5, rand(Math.floor(heelsTime / 20), Math.floor(heelsTime / 10))), 10);
    if ((s.pain['feet'] || 0) < 80) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(t / 5), Math.floor(t / 2)), 120);
    expGain = t;
  } else if (pcsHeels < medium) {
    const t = Math.min(Math.max(7, rand(Math.floor(heelsTime / 15), Math.floor(heelsTime / 8))), 12);
    if ((s.pain['feet'] || 0) < 60) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(t / 10), Math.floor(t / 5)), 120);
    expGain = t;
  } else if (pcsHeels < mild) {
    const t = Math.min(Math.max(3, rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 15))), 6);
    if ((s.pain['feet'] || 0) < 40) s.pain['feet'] = Math.min((s.pain['feet'] || 0) + rand(Math.floor(t / 20), Math.floor(t / 10)), 120);
    expGain = t;
  } else if (pcsHeels < mild + 10) {
    expGain = rand(-3, 0) + Math.min(Math.max(6, rand(Math.floor(heelsTime / 10), Math.floor(heelsTime / 5))), 9);
  } else if (pcsHeels < mild + 20) {
    expGain = rand(-5, 0) + Math.min(Math.max(4, rand(Math.floor(heelsTime / 20), Math.floor(heelsTime / 15))), 6);
  } else {
    expGain = rand(-7, 0) + Math.min(Math.max(3, rand(Math.floor(heelsTime / 30), Math.floor(heelsTime / 20))), 4);
  }

  if (expGain < 0) {
    s.skill_levels['heels'] = Math.max(0, (s.skill_levels['heels'] || 0) + expGain);
  } else if (expGain > 0) {
    s.skill_levels['heels'] = (s.skill_levels['heels'] || 0) + expGain;
  }
}
