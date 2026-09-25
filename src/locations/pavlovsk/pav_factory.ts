import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTailor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'tailor');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('There is a small wooden counter and a sign that says, "If you can\'t wear it, we\'ll adjust it."');
  scene.text('Behind the counter, an elderly man inspects some repaired clothes. He stops and smiles gently, greeting you.');
  scene.text(`"Hello there, young lady. Do you want to adjust some of your clothing? It'll cost you ${qspFunc(s, 'money', 'string_price', 500)} per item."`);
  qspCall(s, 'tailor', 'set_tailor_acts');
  scene.actions([
    { label: 'Leave', goto: ['pav_industrial', ''] },
  ]);
  scene.build();
}

function enterEnter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'enter');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  if (((s as any).job_status ?? 0)?.['pav_factory'] === 'fired') {
    qspGoto(s, 'pav_factory', 'fired');
  }
  if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed'  &&  ((s as any).job_missed_total ?? 0)?.['pav_factory'] > ((s as any).job_miss_acknowledged ?? 0)?.['pav_factory']) {
    qspGoto(s, 'pav_factory', 'scolding');
  }
  if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed'  &&  ((s as any).age ?? 0) >= 18  &&  ((s as any).job_active_schedule ?? 0)?.['pav_factory'] === '0'  &&  (!((s as any).pav_factory_schedule_change_pending ?? 0))) {
    qspGoto(s, 'pav_factory', 'schedule_change');
  }
  scene.text('<center><b>TEXTILE FACTORY, PARIS COMMUNE</b></center>');
  scene.img('images/locations/pavlovsk/factory/pav_factory.jpg');
  scene.text('You\'re standing inside the building accommodating the biggest employer in Pavlovsk, the local textile factory.');
  scene.text('There is a work schedule hanging on the wall:');
  scene.text('\'First shift - 8:00 to 16:00.\'');
  scene.text('\'Second shift - 16:00 to 20:00.\'');
  if (((s as any).job_status ?? 0)?.['pav_factory'] === ''  &&  ((s as any).age ?? 0) < 18) {
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'pav_factory', 0) === 1) {
      scene.text('You can apply for a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(\u0027pav_factory\u0027, \u0027job_start\u0027); return false;">part-time job</a> here.');
    } else {
      scene.text('You see they\'re hiring, but the shift times conflict with your existing schedule.');
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_factory'] === ''  &&  ((s as any).age ?? 0) >= 18) {
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'pav_factory', 1) === 1) {
      scene.text('You can apply for a <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.15; return s; }); window.__gameStore.getState().doGoto(\u0027pav_factory\u0027, \u0027job_start\u0027); return false;">full-time job</a> here.');
    } else {
      scene.text('You see they\'re hiring, but the shift times conflict with your existing schedule.');
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'pav_factory') === 1) {
    scene.text('Your shift is starting now.');
    scene.actions([
      { label: 'Start shift', goto: ['pav_factory', 'job'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['pav_factory'] === 'employed') {
    scene.text('You can quit your job, but doing so will lead to a deducted wage.');
    scene.actions([
      { label: 'Quit job', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'get_shift_for_day', 'pav_factory', ((st as any).daystart ?? 0));
    (st as any).temp_dock = ((st as any).result_duration ?? 0);
    if (((st as any).job_worked_count ?? 0)?.['pav_factory'] > ((st as any).temp_dock ?? 0)) {
      ((st as any).job_worked_count = (st as any).job_worked_count ?? {})['pav_factory'] = ((st as any).job_worked_count['pav_factory'] ?? 0) - (((st as any).temp_dock ?? 0));
    } else {
      ((st as any).job_worked_count = (st as any).job_worked_count ?? {})['pav_factory'] = 0;
    }
    qspCall(st, 'jobs', 'paycheck', 'pav_factory', 'bank');
    qspCall(st, 'jobs', 'set_terminated', 'pav_factory');
    (st as any).temp_dock = undefined;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspGoto(st, 'pav_factory', 'enter');
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
  ]);
  scene.build();
}

function enterScolding(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'scolding');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>FOREMAN\'S OFFICE</b></center>');
  scene.img('images/characters/pavlovsk/resident/stepan/nachalnik.jpg');
  if (((s as any).job_booking_debt ?? 0)?.['pav_factory'] === 1) {
    scene.text('As you walk in, the foreman, Stepan Sergeyevich, waves you over to his desk. He looks up from his paperwork with a slight frown.');
    scene.text(`"${((s as any).pcs_lastname ?? '')}, I noticed you missed your shift. We all have our off days, but this is a factory — the machines don't wait. Try not to let it happen again."`);
  } else {
    if (((s as any).job_booking_debt ?? 0)?.['pav_factory'] === 2) {
      scene.text('The foreman is waiting for you as you walk in. His expression is stern, and he doesn\'t bother with pleasantries.');
      scene.text(`"${((s as any).pcs_lastname ?? '')}, this is the second time you've missed work. I warned you before. One more absence and I'll have no choice but to let you go. The factory can't run with unreliable workers."`);
      scene.text('He taps his pen on the desk, staring at you intently. "Do I make myself clear?"');
    }
  }
  ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['pav_factory'] = (((s as any).job_missed_total ?? 0)?.['pav_factory']);
  scene.actions([
    { label: 'Apologize', goto: ['pav_factory', 'enter'] },
  ]);
  scene.build();
}

function enterFired(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'scolding');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>FOREMAN\'S OFFICE</b></center>');
  scene.img('images/characters/pavlovsk/resident/stepan/nachalnik.jpg');
  if (((s as any).job_termination_reason ?? 0)?.['pav_factory'] === 'no_show') {
    scene.text('The foreman is standing behind his desk, arms crossed. He doesn\'t ask you to sit down.');
    scene.text(`"${((s as any).pcs_lastname ?? '')}, I gave you fair warning — more than once. You've missed too many shifts, and I can't keep making excuses for you to the management."`);
    scene.text('He slides a form across the desk. "You\'re terminated, effective immediately. Your outstanding wages are forfeited, as per your contract. I\'m sorry it came to this."');
  } else {
    scene.text('The foreman calls you into his office. His tone is businesslike.');
    scene.text(`"${((s as any).pcs_lastname ?? '')}, I'm afraid we have to let you go. It's nothing personal — just the way things are."`);
  }
  qspCall(s, 'jobs', 'cleanup_job', 'pav_factory');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
  ]);
  scene.build();
}

function enterScheduleChange(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'scolding');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>FOREMAN\'S OFFICE</b></center>');
  scene.img('images/characters/pavlovsk/resident/stepan/nachalnik.jpg');
  scene.text('As you walk into the factory, the foreman, Stepan Sergeyevich, intercepts you near the entrance. He\'s holding a clipboard and has a satisfied look on his face.');
  scene.text(`"${((s as any).pcs_lastname ?? '')}, just the person I wanted to see. Happy birthday — well, belated or otherwise." He glances at his clipboard. "According to our records, you're now eighteen, which means we can finally move you to the main shift."`);
  scene.text('\'He leads you to the schedule board and taps the first line. "Starting now, you\'ll be working the first shift — weekdays from 8:00 to 16:00. Full eight hours, full pay. The rate stays the same — <b>₽</b>150 per hour — but you\'ll be earning twice as much per day."\'');
  scene.text('"Don\'t be late," he adds with a slight grin, before heading back to his office.');
  if (qspFunc(s, 'jobs', 'check_employment_possible', 'pav_factory', 1) === 0) {
    scene.text('You realize that the new shift times conflict with your existing schedule. You let the foreman know that you\'re not sure if you can make the new shift work with your other commitments. He looks at you for a moment, then nods understandingly.');
    // TODO-QSP: "very well, we''ll keep you on the second shift for now. But please try to make it work with your sc...
    (s as any).pav_factory_schedule_change_pending = 1;
  } else {
    qspCall(s, 'jobs', 'change_schedule', 'pav_factory', 1);
  }
  scene.actions([
    { label: 'Continue', goto: ['pav_factory', 'enter'] },
  ]);
  scene.build();
}

function enterJobStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_factory', 'job_start');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.text('<center><b>FOREMAN\'S OFFICE</b></center>');
  scene.img('images/characters/pavlovsk/resident/stepan/nachalnik.jpg');
  scene.text('You head into the factory foreman, Stepan Sergeyevich\'s office and ask him if there\'s an available job.');
  if (((s as any).age ?? 0) < 18) {
    scene.text(`'"Sure, have a seat," he says. "Now, the work is complex and meticulous but doesn't require any special knowledge. You should catch on pretty quick. Since you are not an adult, you can only work part-time, and the pay is ${qspFunc(s, 'money', 'string_profit', 150)} per hour. Once you become an adult, we can transfer you to full-time. As this is a state-recognized company, we require all the appropriate documentation. The main shift is on weekdays from 8:00 to 16:00, but you will be working the second shift from 16:00 to 20:00.'`);
    scene.text('But beware, you will be fired if you miss more than three days of work in a single month. You will be paid at the end of the month, and getting fired before then will forfeit any pay yet to be received. So, is that okay?"');
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'pav_factory', 0) === 1) {
      scene.actions([
        { label: 'Accept the job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'jobs', 'set_employed', 'pav_factory');
    scene.text('\'You hand him over your documents, which he takes, and then he reminds you to come in every weekday at 16:00.\'');
    scene.actions([
      { label: 'Leave', goto: ['pav_factory', 'enter'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Unfortunately, the shift times conflict with your existing schedule.');
    }
  } else {
    scene.text(`'"Sure, have a seat," he says, pointing to a wooden chair in front of his desk. "Now, the work is complex and meticulous but doesn't require any special knowledge. You should catch on pretty quick. As this is a state-recognized company, we need all the appropriate documentation. The main shift is on weekdays from 8:00 to 16:00, and the pay is ${qspFunc(s, 'money', 'string_profit', 150)} per hour.'`);
    scene.text('But beware, you will be fired if you miss more than three days of work in a single month. You will be paid at the end of the month, and getting fired before then will forfeit any pay not yet received. So, is that okay?"');
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'pav_factory', 1) === 1) {
      scene.actions([
        { label: 'Accept the job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'jobs', 'set_employed', 'pav_factory');
    qspCall(st, 'jobs', 'change_schedule', 'pav_factory', 1);
    scene.text('\'You hand him your documents, which he takes, and he then reminds you to come in every weekday at 8:00.\'');
    scene.actions([
      { label: 'Leave', goto: ['pav_factory', 'enter'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Unfortunately, the shift times conflict with your existing schedule.');
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_factory', 'enter'] },
  ]);
  scene.build();
}

function enterJob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'clock', 'pav_factory');
  qspCall(s, 'jobs', 'get_shift_for_day', 'pav_factory', ((s as any).daystart ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).result_duration ?? 0));
  qspCall(s, 'stat', '');
  scene.text('<center><b>TEXTILE FACTORY, PARIS COMMUNE</b></center>');
  scene.img('images/locations/pavlovsk/factory/pav_factory.jpg');
  scene.text('You work hard throughout your shift at the factory. The foreman has you running all over the factory, performing all types of tasks. You barely even have time to rest during the shift.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'tailor':
      enterTailor(s, scene);
      break;
    case 'enter':
      enterEnter(s, scene);
      break;
    case 'scolding':
      enterScolding(s, scene);
      break;
    case 'fired':
      enterFired(s, scene);
      break;
    case 'schedule_change':
      enterScheduleChange(s, scene);
      break;
    case 'job_start':
      enterJobStart(s, scene);
      break;
    case 'job':
      enterJob(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_factory: LocationDef = {
  name: 'pav_factory',
  title: 'Unfortunately, the shift times conflict with your existing s',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  enter: enter,
};
