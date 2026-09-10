import type { GameState } from './types';

function g(s: GameState, key: string): number {
  return s.class_data[key] || 0;
}

function gs(s: GameState, key: string, val: number): void {
  s.class_data[key] = val;
}

function gadd(s: GameState, key: string, val: number): void {
  s.class_data[key] = (s.class_data[key] || 0) + val;
}

export function gradesCreateClass(
  s: GameState,
  institution: string,
  name: string,
  numClasses: number,
  numOptional: number,
  obligatory: string,
  useHomework: string,
  useComputer: number,
  numOutOfClass: number
): void {
  const prefix = `${institution}_${name}`;
  let maxGain = 10 * (numClasses * (1 + numOptional) + numOutOfClass);
  if (useHomework === 'yes') maxGain += 50;
  gs(s, `${prefix}_weekly_grade_gain_max`, maxGain);

  let breakeven: number;
  if (obligatory === 'yes') {
    if (useHomework === 'yes') {
      breakeven = Math.min(10 * numClasses + 25, 5 * numClasses + 50);
    } else {
      breakeven = 10 * numClasses;
    }
  } else if (useHomework === 'yes') {
    breakeven = 50;
  } else {
    breakeven = 5 * numOutOfClass;
  }
  gs(s, `${prefix}_weekly_grade_gain_breakeven_point`, breakeven);

  gs(s, `${prefix}_homework`, useHomework === 'yes' ? 1 : 0);
  gs(s, `${prefix}_optional_weekly_max`, 10 * numOutOfClass);
  gs(s, `${prefix}_use_computer`, useComputer);
  gs(s, `${prefix}_grade_cap`, 100);

  s.class_list_institution.push(institution);
  s.class_list_name.push(name);
}

export function gradesSetCap(s: GameState, institution: string, name: string, cap: number): void {
  const key = `${institution}_${name}`;
  gs(s, `${key}_grade_cap`, cap);
  if (g(s, `${key}_grade`) > cap) {
    gs(s, `${key}_grade`, cap);
  }
}

export function gradesRemoveCap(s: GameState, institution: string, name: string): void {
  gs(s, `${institution}_${name}_grade_cap`, 100);
}

export function gradesAttendClass(s: GameState, institution: string, name: string): void {
  const key = `${institution}_${name}`;
  gs(s, `${key}_class_day_${s.week}`, 1);
  gadd(s, `${key}_weekly_grade_gain`, 10);
}

function getSleepMult(s: GameState): number {
  const los = s.pcs_condition['lack_of_sleep'] || 0;
  if (los < 2) return 10;
  if (los < 5) return 9;
  if (los < 10) return 7;
  if (los < 20) return 5;
  return 2;
}

function getStamMult(s: GameState): number {
  if (s.pcs_stam <= 0) return 2;
  if (s.pcs_stam < s.stammax / 5) return 3;
  return 4;
}

export function gradesClassActivity(s: GameState, institution: string, name: string): void {
  const key = `${institution}_${name}`;
  let base: number;
  if (s.pcs_stam <= 0) {
    const los = s.pcs_condition['lack_of_sleep'] || 0;
    if (los < 2) base = 5;
    else if (los < 5) base = 5;
    else if (los < 10) base = 3;
    else if (los < 20) base = 2;
    else base = 1;
  } else if (s.pcs_stam < s.stammax / 5) {
    const los = s.pcs_condition['lack_of_sleep'] || 0;
    if (los < 2) base = 9;
    else if (los < 5) base = 8;
    else if (los < 10) base = 6;
    else if (los < 20) base = 4;
    else base = 2;
  } else {
    const los = s.pcs_condition['lack_of_sleep'] || 0;
    if (los < 2) base = 10;
    else if (los < 5) base = 9;
    else if (los < 10) base = 7;
    else if (los < 20) base = 5;
    else base = 2;
  }
  gadd(s, `${key}_weekly_grade_gain`, base);
}

export function gradesClassActivitySkill(s: GameState, institution: string, name: string, skill: number): void {
  const key = `${institution}_${name}`;
  const multFact = getStamMult(s);
  const sleepMult = getSleepMult(s);
  gadd(s, `${key}_weekly_grade_gain`, sleepMult * multFact * (85 + skill) / 400);
}

export function gradesClassActivityAttribute(s: GameState, institution: string, name: string, attr: number): void {
  const key = `${institution}_${name}`;
  const multFact = getStamMult(s);
  const sleepMult = getSleepMult(s);
  gadd(s, `${key}_weekly_grade_gain`, sleepMult * multFact * (50 + attr) / 400);
}

export function gradesOptionalActivity(s: GameState, institution: string, name: string, useComputer: string): void {
  const key = `${institution}_${name}`;
  const classUseComp = g(s, `${key}_use_computer`);
  let base: number;

  if (classUseComp === 0 || useComputer === 'yes') {
    if (s.pcs_stam <= 0) {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 5;
      else if (los < 5) base = 4;
      else if (los < 10) base = 3;
      else if (los < 20) base = 2;
      else base = 1;
    } else if (s.pcs_stam < s.stammax / 5) {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 9;
      else if (los < 5) base = 8;
      else if (los < 10) base = 6;
      else if (los < 20) base = 4;
      else base = 2;
    } else {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 10;
      else if (los < 5) base = 9;
      else if (los < 10) base = 7;
      else if (los < 20) base = 5;
      else base = 2;
    }
  } else if (classUseComp === 1) {
    if (s.pcs_stam <= 0) {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 3;
      else if (los < 5) base = 2;
      else if (los < 10) base = 2;
      else if (los < 20) base = 1;
      else base = 1;
    } else if (s.pcs_stam < s.stammax / 5) {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 4;
      else if (los < 5) base = 3;
      else if (los < 10) base = 2;
      else if (los < 20) base = 2;
      else base = 1;
    } else {
      const los = s.pcs_condition['lack_of_sleep'] || 0;
      if (los < 2) base = 5;
      else if (los < 5) base = 4;
      else if (los < 10) base = 3;
      else if (los < 20) base = 2;
      else base = 1;
    }
  } else {
    return;
  }

  gadd(s, `${key}_optional_weekly_grade_gain`, base);
  const maxOpt = g(s, `${key}_optional_weekly_max`);
  if (g(s, `${key}_optional_weekly_grade_gain`) > maxOpt) {
    gs(s, `${key}_optional_weekly_grade_gain`, maxOpt);
  }
}

export function gradesOptionalActivitySkill(s: GameState, institution: string, name: string, useComputer: string, skill: number): void {
  const key = `${institution}_${name}`;
  const classUseComp = g(s, `${key}_use_computer`);
  const multFact = getStamMult(s);
  let base: number;

  if (classUseComp === 0 || useComputer === 'yes') {
    const sleepMult = getSleepMult(s);
    base = sleepMult * multFact * (85 + skill) / 400;
  } else if (classUseComp === 1) {
    const los = s.pcs_condition['lack_of_sleep'] || 0;
    if (los < 2) base = 5 * multFact * (85 + skill) / 400;
    else if (los < 5) base = 4 * multFact * (85 + skill) / 400;
    else if (los < 10) base = 3 * multFact * (85 + skill) / 400;
    else if (los < 20) base = 2 * multFact * (85 + skill) / 400;
    else base = 1 * multFact * (85 + skill) / 400;
  } else {
    return;
  }

  gadd(s, `${key}_optional_weekly_grade_gain`, base);
  const maxOpt = g(s, `${key}_optional_weekly_max`);
  if (g(s, `${key}_optional_weekly_grade_gain`) > maxOpt) {
    gs(s, `${key}_optional_weekly_grade_gain`, maxOpt);
  }
}

export function gradesOptionalActivityAttribute(s: GameState, institution: string, name: string, useComputer: string, attr: number): void {
  const key = `${institution}_${name}`;
  const classUseComp = g(s, `${key}_use_computer`);
  const multFact = getStamMult(s);
  let base: number;

  if (classUseComp === 0 || useComputer === 'yes') {
    const sleepMult = getSleepMult(s);
    base = sleepMult * multFact * (50 + attr) / 400;
  } else if (classUseComp === 1) {
    const los = s.pcs_condition['lack_of_sleep'] || 0;
    if (los < 2) base = 5 * multFact * (50 + attr) / 400;
    else if (los < 5) base = 4 * multFact * (50 + attr) / 400;
    else if (los < 10) base = 3 * multFact * (50 + attr) / 400;
    else if (los < 20) base = 2 * multFact * (50 + attr) / 400;
    else base = 1 * multFact * (50 + attr) / 400;
  } else {
    return;
  }

  gadd(s, `${key}_optional_weekly_grade_gain`, base);
  const maxOpt = g(s, `${key}_optional_weekly_max`);
  if (g(s, `${key}_optional_weekly_grade_gain`) > maxOpt) {
    gs(s, `${key}_optional_weekly_grade_gain`, maxOpt);
  }
}

export function gradesHomework(
  s: GameState,
  institution: string,
  computerAvailable: string,
  numHomeworks: number,
  joint: number,
  npcId: string
): void {
  s.lernHome -= numHomeworks;
  const multFact = getStamMult(s);
  let modifier: number;

  if (joint === 2) {
    modifier = Math.max(s.npc_intel[npcId] || 0, 50);
  } else if (joint === 1) {
    const npcIntel = s.npc_intel[npcId] || 0;
    modifier = Math.max(npcIntel, s.pcs_intel) + Math.max(10 + Math.min(npcIntel - s.pcs_intel, s.pcs_intel - npcIntel), 0) * (100 - Math.max(npcIntel, s.pcs_intel)) / 50;
  } else if (joint === 3) {
    modifier = parseInt(npcId) || s.pcs_intel;
  } else {
    modifier = s.pcs_intel;
  }

  for (let i = 0; i < s.class_list_institution.length; i++) {
    if (s.class_list_institution[i] === institution) {
      const name = s.class_list_name[i];
      const key = `${institution}_${name}`;
      if (g(s, `${key}_homework`) === 1) {
        const useComp = g(s, `${key}_use_computer`);
        const compMult = computerAvailable === 'no' ? (2 - useComp) : 1;
        const sleepMult = getSleepMult(s);
        gadd(s, `${key}_weekly_grade_gain`, sleepMult * multFact * numHomeworks * compMult * (50 + modifier) / 400);
      }
    }
  }
}

export function gradesAward(s: GameState, institution: string, name: string, amount: number): void {
  const key = `${institution}_${name}`;
  gadd(s, `${key}_grade`, amount);
  if (g(s, `${key}_grade`) < 0) gs(s, `${key}_grade`, 0);
  const cap = g(s, `${key}_grade_cap`);
  if (g(s, `${key}_grade`) > cap) gs(s, `${key}_grade`, cap);

  let sum = 0;
  let n = 0;
  for (let i = 0; i < s.class_list_institution.length; i++) {
    if (s.class_list_institution[i] === institution) {
      const nm = s.class_list_name[i];
      sum += g(s, `${institution}_${nm}_grade`);
      n += 1;
    }
  }
  gs(s, `${institution}_grade_average`, sum / Math.max(1, n));
}

export function gradesCalculate(s: GameState, institution: string): void {
  let sum = 0;
  let n = 0;

  for (let i = 0; i < s.class_list_institution.length; i++) {
    if (s.class_list_institution[i] === institution) {
      const name = s.class_list_name[i];
      const key = `${institution}_${name}`;

      gadd(s, `${key}_weekly_grade_gain`, g(s, `${key}_optional_weekly_grade_gain`));
      gs(s, `${key}_optional_weekly_grade_gain`, 0);

      const gain = g(s, `${key}_weekly_grade_gain`);
      const breakeven = g(s, `${key}_weekly_grade_gain_breakeven_point`);
      const maxGain = g(s, `${key}_weekly_grade_gain_max`);

      if (gain < breakeven) {
        gadd(s, `${key}_grade`, -(5 - 5 * gain / breakeven));
      } else {
        gadd(s, `${key}_grade`, 3 * (gain - breakeven) / (maxGain - breakeven));
      }

      const cap = g(s, `${key}_grade_cap`);
      if (g(s, `${key}_grade`) > cap) gs(s, `${key}_grade`, cap);

      sum += g(s, `${key}_grade`);
      n += 1;
      gs(s, `${key}_weekly_grade_gain`, 0);
    }
  }
  gs(s, `${institution}_grade_average`, sum / Math.max(1, n));
}

export function gradesAssignDescription(s: GameState, institution: string): void {
  for (let i = 0; i < s.class_list_institution.length; i++) {
    if (s.class_list_institution[i] === institution) {
      const name = s.class_list_name[i];
      const key = `${institution}_${name}`;
      const grade = g(s, `${key}_grade`);
      let desc: string;
      if (grade < 10) desc = '1';
      else if (grade < 20) desc = '2-';
      else if (grade < 35) desc = '2';
      else if (grade < 40) desc = '2+';
      else if (grade < 50) desc = '3-';
      else if (grade < 65) desc = '3';
      else if (grade < 70) desc = '3+';
      else if (grade < 75) desc = '4-';
      else if (grade < 86) desc = '4';
      else if (grade < 90) desc = '4+';
      else if (grade < 92) desc = '5-';
      else if (grade < 97) desc = '5';
      else desc = '5+';
      s.class_grade_desc[key] = desc;
    }
  }
}

export function gradesAbove(s: GameState, institution: string, threshold: number): number {
  const key = `${institution}_grades_above_${threshold}`;
  let count = 0;
  for (let i = 0; i < s.class_list_institution.length; i++) {
    if (s.class_list_institution[i] === institution) {
      const name = s.class_list_name[i];
      if (g(s, `${institution}_${name}_grade`) >= threshold) {
        count += 1;
      }
    }
  }
  s.class_data[key] = count;
  return count;
}
