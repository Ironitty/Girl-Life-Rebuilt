import type { GameState } from './types';
import type { JobDefinition, JobState, JobStatus } from './jobTypes';
import { defaultJobState } from './jobTypes';
import { JOB_DEFINITIONS } from './jobData';
import { toDate } from './time';

export function getJobDef(jobId: string): JobDefinition | undefined {
  return JOB_DEFINITIONS[jobId];
}

export function getJobState(s: GameState, jobId: string): JobState {
  if (!s.jobStates[jobId]) {
    const def = getJobDef(jobId);
    if (def) {
      s.jobStates[jobId] = defaultJobState(def);
    }
  }
  return s.jobStates[jobId]!;
}

export function bookingKey(jobId: string, day: number, slot: number): string {
  return `${jobId},${day},${slot}`;
}

export function resolveScheduleIdx(s: GameState, jobId: string): number {
  const def = getJobDef(jobId);
  if (!def) return 0;
  if (!def.scheduleSwitchable) return 0;
  const state = getJobState(s, jobId);
  return state.activeSchedule || 0;
}

export function isWorkDay(s: GameState, jobId: string, checkDay: number): boolean {
  const def = getJobDef(jobId);
  if (!def) return false;

  const date = toDate(checkDay);
  const weekday = date.week as number;

  if (def.workDates) {
    const parts = def.workDates.split('-');
    const mmdd = (date.month as number) * 100 + (date.day as number);
    const seasonStart = parseInt(parts[0]);
    const seasonEnd = parseInt(parts[1]);
    if (mmdd < seasonStart || mmdd > seasonEnd) return false;
  }

  const idx = resolveScheduleIdx(s, jobId);
  const schedule = def.schedules[idx];
  if (!schedule) return false;

  const days = schedule.workDays.split(' ').map(Number);
  return days.includes(weekday);
}

export interface ShiftResult {
  arrival: number;
  start: number;
  duration: number;
  slotCount: number;
  slotArrival: number[];
  slotStart: number[];
  slotEnd: number[];
}

export function getShiftForDay(s: GameState, jobId: string, checkDay: number): ShiftResult {
  const def = getJobDef(jobId);
  if (!def) return { arrival: 0, start: 0, duration: 0, slotCount: 0, slotArrival: [], slotStart: [], slotEnd: [] };

  if (def.scheduleMode === 'booking') {
    const maxSlot = def.bookingSlotsPerDay || 1;
    const slotArrival: number[] = [];
    const slotStart: number[] = [];
    const slotEnd: number[] = [];
    let count = 0;

    for (let slot = 0; slot < maxSlot; slot++) {
      const key = bookingKey(jobId, checkDay, slot);
      if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
        let arr: number, start: number, shift: number;
        if (def.bookingSlots && def.bookingSlots[slot]) {
          arr = def.bookingSlots[slot].arrival;
          start = def.bookingSlots[slot].start;
          shift = def.bookingSlots[slot].shift;
        } else {
          arr = def.availableStart || 0;
          start = arr + 60;
          shift = 60;
        }
        slotArrival.push(arr);
        slotStart.push(start);
        slotEnd.push(start + shift);
        count++;
      }
    }

    if (count === 0) {
      return { arrival: 0, start: 0, duration: 0, slotCount: 0, slotArrival: [], slotStart: [], slotEnd: [] };
    }

    return {
      arrival: slotArrival[0],
      start: slotStart[0],
      duration: slotEnd[0] - slotStart[0],
      slotCount: count,
      slotArrival,
      slotStart,
      slotEnd,
    };
  }

  const idx = resolveScheduleIdx(s, jobId);
  const schedule = def.schedules[idx];
  if (!schedule) return { arrival: 0, start: 0, duration: 0, slotCount: 0, slotArrival: [], slotStart: [], slotEnd: [] };

  return {
    arrival: schedule.arrival,
    start: schedule.start,
    duration: schedule.shift,
    slotCount: 1,
    slotArrival: [schedule.arrival],
    slotStart: [schedule.start],
    slotEnd: [schedule.start + schedule.shift],
  };
}

export function isAvailableNow(s: GameState, jobId: string): boolean {
  const def = getJobDef(jobId);
  if (!def) return false;
  if (def.scheduleMode !== 'on_demand') return false;

  const now = s.hour * 60 + s.minut;
  const start = def.availableStart || 0;
  const end = def.availableEnd || 1440;
  return now >= start && now < end;
}

export function setEmployed(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  state.status = 'employed';
  state.added = s.daystart;
  state.suspended = 0;
  state.missedTotal = 0;
  state.missAcknowledged = 0;
  state.workedCount = 0;
  state.bonusPay = 0;
  state.dockedPay = 0;
  state.shiftsTotal = 0;
  state.shiftsThisPeriod = 0;
  state.lastWorkDay = 0;
  state.clockedIn = 0;
  state.paidTotal = 0;
  state.bookingDebt = 0;
  state.rank = 1;
}

export function setTerminated(s: GameState, jobId: string, reason: string): void {
  const state = getJobState(s, jobId);
  state.status = 'terminated';
  state.suspended = 0;
  state.clockedIn = 0;
  state.bookingDebt = 0;
  clearAllBookings(s, jobId);
  s.misc[`job_term_reason_${jobId}`] = reason;
  s.misc[`job_term_day_${jobId}`] = s.daystart;
}

export function setFired(s: GameState, jobId: string, reason: string): void {
  const state = getJobState(s, jobId);
  state.status = 'fired';
  state.suspended = 0;
  state.clockedIn = 0;
  state.bookingDebt = 0;
  clearAllBookings(s, jobId);
  s.misc[`job_fire_reason_${jobId}`] = reason;
  s.misc[`job_fire_day_${jobId}`] = s.daystart;
}

export function suspendJob(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  if (state.status === 'employed') {
    state.suspended = 1;
    state.clockedIn = 0;
    clearAllBookings(s, jobId);
  }
}

export function resumeJob(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  if (state.status === 'employed' && state.suspended === 1) {
    state.suspended = 0;
  }
}

export function terminateAllJobs(s: GameState): void {
  for (const jobId of Object.keys(s.jobStates)) {
    const state = s.jobStates[jobId];
    if (state.status === 'employed' || state.status === 'preemployed') {
      setTerminated(s, jobId, 'All jobs terminated');
    }
  }
}

export function clockIn(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  if (state.status !== 'employed' || state.suspended === 1) return;
  state.clockedIn = s.hour * 60 + s.minut;
}

export function clockOut(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  if (state.status !== 'employed' || state.suspended === 1) return;
  if (state.clockedIn === 0) return;

  const def = getJobDef(jobId);
  if (!def) return;

  state.lastWorkDay = s.daystart;
  state.workedCount += 1;
  state.shiftsTotal += 1;
  state.shiftsThisPeriod += 1;
  state.clockedIn = 0;

  const now = s.hour * 60 + s.minut;
  const shift = getShiftForDay(s, jobId, s.daystart);
  const end = shift.start + shift.duration;

  if (def.payInterval === 'shift' || def.payInterval === 'hourly') {
    if (now >= end - 60) {
      processPaycheck(s, jobId);
    }
  }
}

export function missedShift(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  if (state.status !== 'employed' || state.suspended === 1) return;
  if (state.lastWorkDay === s.daystart) return;

  state.missedTotal += 1;
  state.missAcknowledged = 0;

  const def = getJobDef(jobId);
  if (!def) return;

  if (def.penaltyPerMiss > 0) {
    const totalDebt = state.missedTotal * def.penaltyPerMiss;
    if (def.penaltyMaxDebt > 0 && totalDebt > def.penaltyMaxDebt) {
      state.dockedPay = def.penaltyMaxDebt;
    } else {
      state.dockedPay = totalDebt;
    }
  }

  if (def.onMissHandler && def.onMissHandlerFunc) {
    s.misc[`job_miss_handler_${jobId}`] = def.onMissHandler;
    s.misc[`job_miss_func_${jobId}`] = def.onMissHandlerFunc;
  }
}

export function processPaycheck(s: GameState, jobId: string): void {
  const state = getJobState(s, jobId);
  const def = getJobDef(jobId);
  if (!def || !state) return;

  let pay = 0;

  if (def.payInterval === 'shift') {
    pay = state.payRate * state.shiftsThisPeriod;
    state.shiftsThisPeriod = 0;
  } else if (def.payInterval === 'hourly') {
    pay = state.payRate * state.shiftsThisPeriod;
    state.shiftsThisPeriod = 0;
  } else if (def.payInterval === 'daily') {
    pay = state.payRate;
  } else if (def.payInterval === 'weekly') {
    pay = state.payRate * 5;
  } else if (def.payInterval === 'monthly') {
    pay = state.payRate * 22;
  }

  pay += state.bonusPay;
  pay -= state.dockedPay;
  if (pay < 0) pay = 0;

  s.money += pay;
  state.paidTotal += pay;
  state.bonusPay = 0;
  state.dockedPay = 0;
}

export function bonusPay(s: GameState, jobId: string, amount: number): void {
  const state = getJobState(s, jobId);
  state.bonusPay += amount;
}

export function dockPay(s: GameState, jobId: string, amount: number): void {
  const state = getJobState(s, jobId);
  state.dockedPay += amount;
}

export function dailyCheck(s: GameState): void {
  for (const jobId of Object.keys(s.jobStates)) {
    const state = s.jobStates[jobId];
    if (state.status !== 'employed' || state.suspended === 1) continue;

    const def = getJobDef(jobId);
    if (!def) continue;

    if (def.scheduleMode === 'booking') {
      const hasBooking = hasBookingForDay(s, jobId, s.daystart);
      if (hasBooking && state.lastWorkDay !== s.daystart && state.workedCount === 0) {
        const shift = getShiftForDay(s, jobId, s.daystart);
        const now = s.hour * 60 + s.minut;
        const end = shift.slotCount > 0 ? shift.slotEnd[shift.slotCount - 1] : 0;
        if (end > 0 && now >= end + 60) {
          missedShift(s, jobId);
        }
      }
      continue;
    }

    if (!isWorkDay(s, jobId, s.daystart)) continue;

    const shift = getShiftForDay(s, jobId, s.daystart);
    if (shift.arrival === 0) continue;

    const now = s.hour * 60 + s.minut;
    const end = shift.start + shift.duration;

    if (state.lastWorkDay !== s.daystart && now >= end + 60) {
      missedShift(s, jobId);
    }
  }
}

export function bookSlot(s: GameState, jobId: string, targetDay: number, slotIndex: number, bookingData: string): boolean {
  const def = getJobDef(jobId);
  if (!def) return false;

  const key = bookingKey(jobId, targetDay, slotIndex);

  if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
    return false;
  }

  const maxConcurrent = def.bookingMaxConcurrent || 0;
  if (maxConcurrent > 0) {
    const active = bookingCount(s, jobId);
    if (active >= maxConcurrent) return false;
  }

  const windowDays = def.bookingWindowDays || 0;
  if (windowDays > 0) {
    if (targetDay < s.daystart || targetDay > s.daystart + windowDays) return false;
  }

  if (checkBookingGap(s, jobId, targetDay)) return false;

  s.jobBookings[key] = bookingData;
  return true;
}

export function cancelBooking(s: GameState, jobId: string, targetDay: number, slotIndex: number): void {
  const key = bookingKey(jobId, targetDay, slotIndex);
  if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
    delete s.jobBookings[key];
  }
}

export function clearAllBookings(s: GameState, jobId: string): void {
  const def = getJobDef(jobId);
  if (!def) return;

  const range = Math.max(def.bookingWindowDays || 7, 7);
  const maxSlot = def.bookingSlotsPerDay || 1;

  for (let day = s.daystart; day <= s.daystart + range; day++) {
    for (let slot = 0; slot < maxSlot; slot++) {
      const key = bookingKey(jobId, day, slot);
      if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
        delete s.jobBookings[key];
      }
    }
  }
}

export function bookingCount(s: GameState, jobId: string): number {
  let count = 0;
  const prefix = `${jobId},`;
  for (const key of Object.keys(s.jobBookings)) {
    if (key.startsWith(prefix) && s.jobBookings[key] !== '') {
      count++;
    }
  }
  return count;
}

export function hasBookingForDay(s: GameState, jobId: string, checkDay: number): boolean {
  const def = getJobDef(jobId);
  if (!def) return false;

  const maxSlot = def.bookingSlotsPerDay || 1;
  for (let slot = 0; slot < maxSlot; slot++) {
    const key = bookingKey(jobId, checkDay, slot);
    if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
      return true;
    }
  }
  return false;
}

export function getBookingDataForDay(s: GameState, jobId: string, checkDay: number): string {
  const def = getJobDef(jobId);
  if (!def) return '';

  const maxSlot = def.bookingSlotsPerDay || 1;
  for (let slot = 0; slot < maxSlot; slot++) {
    const key = bookingKey(jobId, checkDay, slot);
    if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
      return s.jobBookings[key];
    }
  }
  return '';
}

export function getNextBookingDay(s: GameState, jobId: string, startDay: number, maxDays: number): number {
  const end = (startDay || s.daystart) + (maxDays || 50);
  for (let day = startDay || s.daystart; day < end; day++) {
    if (hasBookingForDay(s, jobId, day)) {
      return day;
    }
  }
  return -1;
}

export function checkBookingGap(s: GameState, jobId: string, targetDay: number): boolean {
  const def = getJobDef(jobId);
  if (!def) return false;

  const gap = def.bookingMinGapDays || 0;
  if (gap <= 0) return false;

  const maxSlot = def.bookingSlotsPerDay || 1;
  const checkStart = targetDay - gap + 1;
  const checkEnd = targetDay + gap - 1;

  for (let day = checkStart; day <= checkEnd; day++) {
    if (day === targetDay) continue;
    for (let slot = 0; slot < maxSlot; slot++) {
      const key = bookingKey(jobId, day, slot);
      if (s.jobBookings[key] !== undefined && s.jobBookings[key] !== '') {
        return true;
      }
    }
  }
  return false;
}

export function checkEmploymentPossible(s: GameState, jobId: string, scheduleIdx?: number): { possible: boolean; reason: string } {
  const def = getJobDef(jobId);
  if (!def) return { possible: true, reason: '' };

  if (s.cheatVars['work'] !== undefined && s.cheatVars['work'] !== 0) {
    return { possible: true, reason: '' };
  }

  if (def.scheduleMode === 'on_demand' && !def.createAvailabilityEvents) {
    return { possible: true, reason: '' };
  }

  if (!def.blocking) {
    return { possible: true, reason: '' };
  }

  const idx = scheduleIdx !== undefined ? scheduleIdx : resolveScheduleIdx(s, jobId);
  const schedule = def.schedules[idx];
  if (!schedule) return { possible: true, reason: '' };

  const date = toDate(s.daystart);
  const weekday = date.week as number;
  const days = schedule.workDays.split(' ').map(Number);

  if (!days.includes(weekday)) {
    return { possible: true, reason: '' };
  }

  return { possible: true, reason: '' };
}

export function changeSchedule(s: GameState, jobId: string, newIdx: number): void {
  const state = getJobState(s, jobId);
  state.activeSchedule = newIdx;
}

export function cleanupJob(s: GameState, jobId: string): void {
  delete s.jobStates[jobId];
  const prefix = `${jobId},`;
  for (const key of Object.keys(s.jobBookings)) {
    if (key.startsWith(prefix)) {
      delete s.jobBookings[key];
    }
  }
  delete s.misc[`job_term_reason_${jobId}`];
  delete s.misc[`job_term_day_${jobId}`];
  delete s.misc[`job_fire_reason_${jobId}`];
  delete s.misc[`job_fire_day_${jobId}`];
  delete s.misc[`job_miss_handler_${jobId}`];
  delete s.misc[`job_miss_func_${jobId}`];
}

export interface JobCardInfo {
  jobId: string;
  title: string;
  location: string;
  status: JobStatus;
  isMystery: boolean;
  hireHint: string;
  scheduleText: string;
  payText: string;
  suspended: boolean;
}

export function getJobCard(s: GameState, jobId: string): JobCardInfo {
  const def = getJobDef(jobId);
  const state = getJobState(s, jobId);

  if (!def) {
    return { jobId, title: '???', location: '', status: '', isMystery: true, hireHint: '', scheduleText: '', payText: '', suspended: false };
  }

  const isMystery = def.cardHidden && state.status !== 'employed' && state.hiringStep === 0;

  let hireHint = '';
  if (!isMystery && state.hiringStep > 0 && state.hiringStep <= def.hireHints.length) {
    hireHint = def.hireHints[state.hiringStep - 1];
  }

  let scheduleText = '';
  if (def.scheduleMode === 'fixed' || def.scheduleMode === 'windowed') {
    const idx = resolveScheduleIdx(s, jobId);
    const schedule = def.schedules[idx];
    if (schedule) {
      const days = schedule.workDays.split(' ').map(Number);
      const dayNames = ['', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      const dayStr = days.map(d => dayNames[d]).join(', ');
      scheduleText = `${dayStr} ${formatMinutes(schedule.arrival)} - ${formatMinutes((schedule.start + schedule.shift) % 1440)}`;
    }
  } else if (def.scheduleMode === 'on_demand') {
    const start = def.availableStart || 0;
    const end = def.availableEnd || 1440;
    scheduleText = `Available ${formatMinutes(start)} - ${formatMinutes(end % 1440)}`;
  } else if (def.scheduleMode === 'booking') {
    scheduleText = `Bookable up to ${def.bookingWindowDays || 0} days ahead`;
  }

  let payText = '';
  if (def.payInterval === 'shift') {
    payText = `${def.payRate}₽/shift`;
  } else if (def.payInterval === 'hourly') {
    payText = `${def.payRate}₽/hour`;
  } else if (def.payInterval === 'daily') {
    payText = `${def.payRate}₽/day`;
  } else if (def.payInterval === 'weekly') {
    payText = `${def.payRate}₽/week`;
  } else if (def.payInterval === 'monthly') {
    payText = `${def.payRate}₽/month`;
  }

  return {
    jobId,
    title: def.title,
    location: def.location,
    status: state.status,
    isMystery,
    hireHint,
    scheduleText,
    payText,
    suspended: state.suspended === 1,
  };
}

export function sortJobsByStatus(s: GameState, jobIds: string[]): string[] {
  const order: Record<string, number> = {
    employed: 0,
    preemployed: 1,
    terminated: 2,
    fired: 3,
    '': 4,
  };

  return [...jobIds].sort((a, b) => {
    const sa = getJobState(s, a).status;
    const sb = getJobState(s, b).status;
    return (order[sa] ?? 5) - (order[sb] ?? 5);
  });
}

export function formatMinutes(minutes: number): string {
  const h = Math.floor(minutes / 60) % 24;
  const m = (minutes % 60).toString().padStart(2, '0');
  return `${h.toString().padStart(2, '0')}:${m}`;
}
