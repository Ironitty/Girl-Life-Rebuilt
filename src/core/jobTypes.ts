export type JobStatus = '' | 'employed' | 'preemployed' | 'terminated' | 'fired';
export type ScheduleMode = 'fixed' | 'windowed' | 'on_demand' | 'booking';
export type PayInterval = 'shift' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'none';

export interface JobSchedule {
  workDays: string;
  arrival: number;
  start: number;
  shift: number;
}

export interface BookingSlot {
  arrival: number;
  start: number;
  shift: number;
}

export interface JobDefinition {
  id: string;
  title: string;
  location: string;
  scheduleMode: ScheduleMode;
  desc: string;
  hireHints: string[];
  cardHidden: boolean;
  schedules: JobSchedule[];
  workDates?: string;
  availableDays?: string;
  availableStart?: number;
  availableEnd?: number;
  bookingWindowDays?: number;
  bookingSlotsPerDay?: number;
  bookingMaxConcurrent?: number;
  bookingMinGapDays?: number;
  bookingSlots?: BookingSlot[];
  payInterval: PayInterval;
  payRate: number;
  penaltyPerMiss: number;
  penaltyMaxDebt: number;
  blocking: boolean;
  addToCalendar: boolean;
  showStatIcon: boolean;
  scheduleSwitchable: boolean;
  refreshDesc: boolean;
  createAvailabilityEvents: boolean;
  onMissHandler?: string;
  onMissHandlerFunc?: string;
}

export interface JobState {
  status: JobStatus;
  added: number;
  payRate: number;
  payInterval: PayInterval;
  workedCount: number;
  bonusPay: number;
  dockedPay: number;
  shiftsTotal: number;
  lastWorkDay: number;
  clockedIn: number;
  missedTotal: number;
  missAcknowledged: number;
  paidTotal: number;
  shiftsThisPeriod: number;
  suspended: number;
  eventId: number;
  activeSchedule: number;
  bookingDebt: number;
  rank: number;
  hiringStep: number;
}

export function defaultJobState(def: JobDefinition): JobState {
  return {
    status: '',
    added: 0,
    payRate: def.payRate,
    payInterval: def.payInterval,
    workedCount: 0,
    bonusPay: 0,
    dockedPay: 0,
    shiftsTotal: 0,
    lastWorkDay: 0,
    clockedIn: 0,
    missedTotal: 0,
    missAcknowledged: 0,
    paidTotal: 0,
    shiftsThisPeriod: 0,
    suspended: 0,
    eventId: 0,
    activeSchedule: 0,
    bookingDebt: 0,
    rank: 1,
    hiringStep: 0,
  };
}
