import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  gradesCreateClass, gradesSetCap, gradesRemoveCap, gradesAttendClass,
  gradesClassActivity, gradesClassActivitySkill, gradesClassActivityAttribute,
  gradesOptionalActivity,
} from '../grades';

function makeState(overrides: Partial<GameState> = {}): GameState {
  return {
    class_data: {},
    class_list_institution: [],
    class_list_name: [],
    week: 1,
    pcs_stam: 100,
    stammax: 100,
    pcs_condition: {},
    ...overrides,
  } as GameState;
}

describe('gradesCreateClass', () => {
  it('computes maxGain and breakeven for obligatory+homework', () => {
    const s = makeState();
    gradesCreateClass(s, 'uni', 'math', 5, 2, 'yes', 'yes', 0, 3);
    // maxGain = 10 * (5 * (1+2) + 3) = 10 * 18 = 180; +50 homework = 230
    expect(s.class_data['uni_math_weekly_grade_gain_max']).toBe(230);
    // breakeven = min(10*5+25, 5*5+50) = min(75, 75) = 75
    expect(s.class_data['uni_math_weekly_grade_gain_breakeven_point']).toBe(75);
    expect(s.class_data['uni_math_homework']).toBe(1);
    expect(s.class_data['uni_math_optional_weekly_max']).toBe(30);
    expect(s.class_data['uni_math_use_computer']).toBe(0);
    expect(s.class_data['uni_math_grade_cap']).toBe(100);
    expect(s.class_list_institution).toContain('uni');
    expect(s.class_list_name).toContain('math');
  });

  it('obligatory without homework', () => {
    const s = makeState();
    gradesCreateClass(s, 'school', 'phys', 4, 0, 'yes', 'no', 0, 2);
    // maxGain = 10 * (4 * 1 + 2) = 60
    expect(s.class_data['school_phys_weekly_grade_gain_max']).toBe(60);
    // breakeven = 10 * 4 = 40
    expect(s.class_data['school_phys_weekly_grade_gain_breakeven_point']).toBe(40);
    expect(s.class_data['school_phys_homework']).toBe(0);
  });

  it('non-obligatory with homework', () => {
    const s = makeState();
    gradesCreateClass(s, 'art', 'paint', 3, 1, 'no', 'yes', 1, 4);
    // breakeven = 50
    expect(s.class_data['art_paint_weekly_grade_gain_breakeven_point']).toBe(50);
    expect(s.class_data['art_paint_use_computer']).toBe(1);
  });

  it('non-obligatory without homework', () => {
    const s = makeState();
    gradesCreateClass(s, 'club', 'dance', 2, 0, 'no', 'no', 0, 5);
    // breakeven = 5 * 5 = 25
    expect(s.class_data['club_dance_weekly_grade_gain_breakeven_point']).toBe(25);
    expect(s.class_data['club_dance_optional_weekly_max']).toBe(50);
  });
});

describe('gradesSetCap / gradesRemoveCap', () => {
  it('sets cap and clamps grade', () => {
    const s = makeState();
    s.class_data['uni_math_grade'] = 90;
    gradesSetCap(s, 'uni', 'math', 80);
    expect(s.class_data['uni_math_grade_cap']).toBe(80);
    expect(s.class_data['uni_math_grade']).toBe(80);
  });

  it('does not raise grade below cap', () => {
    const s = makeState();
    s.class_data['uni_math_grade'] = 50;
    gradesSetCap(s, 'uni', 'math', 80);
    expect(s.class_data['uni_math_grade']).toBe(50);
  });

  it('remove cap resets to 100', () => {
    const s = makeState();
    s.class_data['uni_math_grade_cap'] = 80;
    gradesRemoveCap(s, 'uni', 'math');
    expect(s.class_data['uni_math_grade_cap']).toBe(100);
  });
});

describe('gradesAttendClass', () => {
  it('marks attendance and adds 10', () => {
    const s = makeState({ week: 3 });
    gradesAttendClass(s, 'uni', 'math');
    expect(s.class_data['uni_math_class_day_3']).toBe(1);
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(10);
  });
});

describe('gradesClassActivity', () => {
  it('full stam, no sleep loss gives base 10', () => {
    const s = makeState({ pcs_stam: 100, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    gradesClassActivity(s, 'uni', 'math');
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(10);
  });

  it('zero stam, no sleep loss gives base 5', () => {
    const s = makeState({ pcs_stam: 0, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    gradesClassActivity(s, 'uni', 'math');
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(5);
  });

  it('low stam, high sleep loss gives base 2', () => {
    const s = makeState({ pcs_stam: 10, stammax: 100, pcs_condition: { lack_of_sleep: 25 } });
    gradesClassActivity(s, 'uni', 'math');
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(2);
  });
});

describe('gradesClassActivitySkill / Attribute', () => {
  it('skill activity uses sleepMult * stamMult * (85+skill)/400', () => {
    const s = makeState({ pcs_stam: 100, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    gradesClassActivitySkill(s, 'uni', 'math', 15);
    // sleepMult=10, stamMult=4, (85+15)/400 = 0.25 => 10*4*0.25 = 10
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(10);
  });

  it('attribute activity uses (50+attr)/400', () => {
    const s = makeState({ pcs_stam: 100, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    gradesClassActivityAttribute(s, 'uni', 'math', 50);
    // sleepMult=10, stamMult=4, (50+50)/400 = 0.25 => 10
    expect(s.class_data['uni_math_weekly_grade_gain']).toBe(10);
  });
});

describe('gradesOptionalActivity', () => {
  it('no computer, full stam gives base 10', () => {
    const s = makeState({ pcs_stam: 100, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    s.class_data['uni_math_use_computer'] = 0;
    s.class_data['uni_math_optional_weekly_max'] = 30;
    gradesOptionalActivity(s, 'uni', 'math', 'no');
    expect(s.class_data['uni_math_optional_weekly_grade_gain']).toBe(10);
  });

  it('computer class, no use, full stam gives base 5', () => {
    const s = makeState({ pcs_stam: 100, stammax: 100, pcs_condition: { lack_of_sleep: 0 } });
    s.class_data['uni_math_use_computer'] = 1;
    s.class_data['uni_math_optional_weekly_max'] = 30;
    gradesOptionalActivity(s, 'uni', 'math', 'no');
    expect(s.class_data['uni_math_optional_weekly_grade_gain']).toBe(5);
  });
});
