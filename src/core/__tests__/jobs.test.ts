import { describe, it, expect } from 'vitest';
import type { GameState } from '../types';
import {
  bookingKey, formatMinutes, getJobDef, getJobState, setEmployed, suspendJob,
  resumeJob, clockIn, clockOut, processPaycheck, bonusPay, dockPay,
  cancelBooking, bookingCount, hasBookingForDay, getBookingDataForDay,
  sortJobsByStatus,
} from '../jobs';

const WAITRESS = 'city_cafe_waitress';
const SECRETARY = 'city_office_secretary';

function makeState(overrides: Record<string, unknown> = {}): GameState {
  return {
    jobStates: {}, jobBookings: {}, misc: {}, money: 0,
    daystart: 100, hour: 10, minut: 0, cheatVars: {},
    ...overrides,
  } as unknown as GameState;
}

describe('pure helpers', () => {
  it('builds a booking key', () => {
    expect(bookingKey('j', 5, 2)).toBe('j,5,2');
  });

  it('formats minutes as HH:MM', () => {
    expect(formatMinutes(900)).toBe('15:00');
    expect(formatMinutes(905)).toBe('15:05');
    expect(formatMinutes(0)).toBe('00:00');
    expect(formatMinutes(1440)).toBe('00:00');
  });

  it('looks up a job definition', () => {
    const def = getJobDef(WAITRESS);
    expect(def?.title).toBe('Cafe Waitress');
    expect(def?.payRate).toBe(600);
  });
});

describe('job state lifecycle', () => {
  it('creates a default state on first access', () => {
    const s = makeState();
    const st = getJobState(s, WAITRESS);
    expect(st.status).toBe('');
    expect(st.payRate).toBe(600);
  });

  it('marks the job employed with a fresh counter', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    const st = s.jobStates[WAITRESS];
    expect(st.status).toBe('employed');
    expect(st.added).toBe(100);
    expect(st.rank).toBe(1);
  });

  it('suspends and resumes an employed job', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    suspendJob(s, WAITRESS);
    expect(s.jobStates[WAITRESS].suspended).toBe(1);
    resumeJob(s, WAITRESS);
    expect(s.jobStates[WAITRESS].suspended).toBe(0);
  });
});

describe('clock in / out', () => {
  it('records the clock-in time', () => {
    const s = makeState({ hour: 9, minut: 30 });
    setEmployed(s, WAITRESS);
    clockIn(s, WAITRESS);
    expect(s.jobStates[WAITRESS].clockedIn).toBe(570);
  });

  it('ignores clock-in while suspended', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    suspendJob(s, WAITRESS);
    clockIn(s, WAITRESS);
    expect(s.jobStates[WAITRESS].clockedIn).toBe(0);
  });

  it('counts a worked shift on clock-out', () => {
    const s = makeState({ hour: 10, minut: 0 });
    setEmployed(s, WAITRESS);
    clockIn(s, WAITRESS);
    clockOut(s, WAITRESS);
    const st = s.jobStates[WAITRESS];
    expect(st.workedCount).toBe(1);
    expect(st.shiftsTotal).toBe(1);
    expect(st.clockedIn).toBe(0);
  });
});

describe('paycheck', () => {
  it('pays per shift and resets the period counter', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    s.jobStates[WAITRESS].shiftsThisPeriod = 1;
    processPaycheck(s, WAITRESS);
    expect(s.money).toBe(600);
    expect(s.jobStates[WAITRESS].paidTotal).toBe(600);
    expect(s.jobStates[WAITRESS].shiftsThisPeriod).toBe(0);
  });

  it('applies bonus and docked pay, clamping at zero', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    s.jobStates[WAITRESS].shiftsThisPeriod = 1;
    bonusPay(s, WAITRESS, 100);
    dockPay(s, WAITRESS, 900);
    processPaycheck(s, WAITRESS);
    // 600 + 100 - 900 = -200 -> clamped to 0
    expect(s.money).toBe(0);
  });
});

describe('bookings', () => {
  it('cancels and counts bookings', () => {
    const s = makeState({ jobBookings: { [WAITRESS + ',100,0']: 'client' } });
    expect(bookingCount(s, WAITRESS)).toBe(1);
    expect(hasBookingForDay(s, WAITRESS, 100)).toBe(true);
    expect(getBookingDataForDay(s, WAITRESS, 100)).toBe('client');
    cancelBooking(s, WAITRESS, 100, 0);
    expect(bookingCount(s, WAITRESS)).toBe(0);
    expect(hasBookingForDay(s, WAITRESS, 100)).toBe(false);
  });
});

describe('sortJobsByStatus', () => {
  it('orders employed jobs first', () => {
    const s = makeState();
    setEmployed(s, WAITRESS);
    s.jobStates[SECRETARY] = { ...getJobState(s, SECRETARY), status: 'terminated' } as never;
    const ordered = sortJobsByStatus(s, [SECRETARY, WAITRESS]);
    expect(ordered[0]).toBe(WAITRESS);
    expect(ordered[1]).toBe(SECRETARY);
  });
});
