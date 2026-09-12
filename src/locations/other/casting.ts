import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCallboard(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/callboard.jpg');
  scene.text('<b>Calls For Extras</b>');
  if (((s as any).casting_extra1 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'BackShowerGirl\'">Background Shower Girl</a>');
  }
  if (((s as any).casting_extra2 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'SpringBreakFlasher\'">Spring Break Flasher</a>');
  }
  if (((s as any).casting_extra3 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'cadaver\'">  </a>');
  }
  if (((s as any).casting_extra4 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'DildoGirl\'">Dildo Girl</a>');
  }
  if (((s as any).casting_extra5 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'NakedLockerGirl\'">Naked Locker Girl</a>');
  }
  if (((s as any).casting_extra6 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'UndressingLockerGirl\'">Undressing Locker Girl</a>');
  }
  if (((s as any).casting_extra7 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'ToplessCheerleader\'">Topless Cheerleader</a>');
  }
  if (((s as any).casting_extra8 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'HotShowerGirl\'">Hot Shower Girl</a>');
  }
  if (((s as any).casting_extra9 ?? 0) <= 40) {
    scene.text('<a href="exec:gt \'casting\',\'WerewolfGirl\'">Werewolf Victim</a>');
  }
  scene.text('<b>Calls For Day Players</b>');
  if (((s as any).casting_minor1 ?? 0) <= 25) {
    scene.text('<a href="exec:gt \'casting\',\'DinerWaitress\'">Diner Waitress</a>');
  }
  if (((s as any).casting_minor2 ?? 0) <= 25) {
    scene.text('<a href="exec:gt \'casting\',\'SluttyClubGirl\'">Slutty Club Girl</a>');
  }
  scene.text('<b>Calls For Supporting Actress</b>');
  scene.text('<b>Calls For Lead Actress</b>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['talent_agency', ''] },
  ]);
  scene.build();
}

function enterCallboardExtrasUpdate(s: GameState, scene: SceneBuilder): void {
  (s as any).casting_extra1 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra2 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra3 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra4 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra5 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra6 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra7 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra8 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_extra9 = Math.floor(Math.random() * 100) + 1;
  // TODO-QSP: end
  scene.build();
}

function enterCallboardUpdate(s: GameState, scene: SceneBuilder): void {
  (s as any).casting_minor1 = Math.floor(Math.random() * 100) + 1;
  (s as any).casting_minor2 = Math.floor(Math.random() * 100) + 1;
  // TODO-QSP: end
  scene.build();
}

function enterAuditionSchedule(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['week'] = Math.floor(Math.random() * 7) + 1;
  if (((s as any).month ?? 0) === 2  &&  (((s as any).audition ?? 0)?.['week'] + ((s as any).day ?? 0)) > 28) {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 28 + ((s as any).audition ?? {})?.['week'];
  } else {
    if ((((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 11)  &&  (((s as any).audition ?? 0)?.['week'] + ((s as any).day ?? 0)) > 30) {
      if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
      if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 30 + ((s as any).audition ?? {})?.['week'];
    } else {
      if ((((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 5  ||  ((s as any).month ?? 0) === 7  ||  ((s as any).month ?? 0) === 8  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 12)  &&  (((s as any).audition ?? 0)?.['week'] + ((s as any).day ?? 0)) > 31) {
        if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['month'] = ((s as any).next_month_name ?? 0);
        if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['calendar_day'] = ((s as any).day ?? 0) - 31 + ((s as any).audition ?? {})?.['week'];
      } else {
        if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['calendar_day'] = ((s as any).day ?? 0) + ((s as any).audition ?? {})?.['week'];
        if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['month'] = ((s as any).monthName ?? 0);
      }
    }
  }
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['day'] = ((s as any).daystart ?? 0) + ((s as any).audition ?? {})?.['week'];
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['shoot_day'] = ((s as any).daystart ?? 0) + (Math.floor(Math.random() * (((s as any).audition ?? {})?.['day'] + (Math.floor(Math.random() * 6) + 2) + 1)));
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['shoot_time'] = Math.floor(Math.random() * 17) + 6;
  // TODO-QSP: end
  scene.build();
}

function enterClearcasting(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterTryout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/front.jpg');
  scene.text('You decide to try for this one and go to the front desk to schedule the audition. The lady at the desk quickly puts your information into her computer and rummages through a file cabinet to pull out a script for you.');
  scene.text('"Okay! You\'re all set! Don\'t be late!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the script and leave', goto: ['talent_agency', ''] },
  ]);
  scene.build();
}

function enterGeneralTryout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/aurora/front.jpg');
  scene.text('You walk over to the receptionist.');
  // TODO-QSP: dynamic text: "Hi, I was just looking at the callboard and saw that they were holding audition...
  scene.text(`"Hi, I was just looking at the callboard and saw that they were holding auditions for ${((s as any).audition ?? 0)?.['role']} today?"`);
  scene.text('"Yes! They are! Just go to the general audition room at the end of the hall. If the door is open, you\'re free to go in."');
  scene.text('"Thanks," you nod.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['talent_agency', ''] },
  ]);
  scene.build();
}

function enterDetails(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casting', 'audition_schedule');
  // TODO-QSP: dynamic text: Pay: <<$func('money', 'string_profit', acting['pay'])>>
  scene.text(`Pay: ${qspFunc(s, 'money', 'string_profit', ((s as any).acting ?? 0)?.['pay'])}`);
  // TODO-QSP: dynamic text: Audition time: '+func('time', 'get_time_string', 16, 0)+'-'+func('time', 'get_ti...
  scene.text(`Audition time: '+func('time', 'get_time_string', 16, 0)+'-'+func('time', 'get_time_string', 18, 0)+', ${qspUntranslated(s, "weekName[audition['week']]", { location: "casting" })}, ${((s as any).audition ?? 0)?.['calendar_day']} of ${((s as any).audition ?? 0)?.['month']}.`);
  // TODO-QSP: end
  scene.build();
}

function enterGeneralDetails(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'casting', 'audition_schedule');
  // TODO-QSP: dynamic text: Pay: <<$func('money', 'string_profit', acting['pay'])>>
  scene.text(`Pay: ${qspFunc(s, 'money', 'string_profit', ((s as any).acting ?? 0)?.['pay'])}`);
  scene.text('Walk in auditions today. Ask receptionist for details.');
  // TODO-QSP: end
  scene.build();
}

function enterBackShowerGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'nude';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15 * (Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Uninhibited girls wanted for the role of <b>Background Shower Girl.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Background Shower Girl';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterSpringBreakFlasher(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletits'] = 4;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Big boobed girl wanted for the role of <b>Spring Break Flasher.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Spring Break Flasher';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterCadaver(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'nude';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  qspCall(s, 'casting', 'audition_schedule');
  scene.text('Young pretty girl wanted for the role of <b>Dead Girl 2</b>');
  qspCall(s, 'casting', 'details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'cadaver';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterDildoGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['type'] = 'panties';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['panties'] = 'gm';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantynumber'] = 31;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Big boobed girl wanted for the role of <b>Dildo Girl.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Dildo Girl';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterNakedLockerGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'nude';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Young pretty girl wanted for the role of <b>Naked Locker Girl.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Naked Locker Girl';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterUndressingLockerGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['type'] = 'normal';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'panties';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['panties'] = 'fashionista';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantynumber'] = 13;
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantytype'] = 'thong';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantydrawer'] = 'filled with thongs. She picks one out and';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15 * (Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Big boobed girls wanted for the role of <b>Undressing Locker Girl.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Undressing Locker Girl';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterModestCheerleader(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 1;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'face_check';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['type'] = 'normal';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'cheerleader';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15 * (Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Pretty girls wanted for the role of <b>Modest Cheerleader.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Modest Cheerleader';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterUnderwearCheerleader(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 2;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'body_check';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['type'] = 'normal';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'underwear';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['underwear'] = 'cats';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15 * (Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Pretty girls wanted for the role of <b>Underwear Cheerleader.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Underwear Cheerleader';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterToplessCheerleader(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'panties';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['panties'] = 'cats';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantytype'] = 'normal';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['pantydrawer'] = 'to pull out a random pair of panties';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Young pretty girl wanted for the role of <b>Topless Cheerleader 3.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Topless Cheerleader 3';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterHotShowerGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'nude';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  scene.text('Young pretty girl wanted for the role of <b>Hot Shower Girl.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Hot Shower Girl';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterWerewolfGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 3;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['type'] = 'titty';
  if (!(s as any).costuming) (s as any).costuming = {}; (s as any).costuming['outfit'] = 'nude';
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletits'] = 4;
  scene.text('Big boobed girl wanted for the role of <b>Werewolf Victim.</b>');
  qspCall(s, 'casting', 'general_details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Talk to the receptionist', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Werewolf Victim';
  }, goto: ['casting', 'general_tryout'] },
  ]);
  scene.build();
}

function enterDinerWaitress(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 5;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['room'] = Math.floor(Math.random() * 5) + 1;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['requirement'] = 50;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['scenecount'] = 2;
  qspCall(s, 'casting', 'audition_schedule');
  scene.text('Casting season two of "The Line", a television police drama. Pretty girls wanted for the role of <b>Diner Waitress.</b>');
  scene.text('Description: A diner waitress meets a main character at her workplace before having a one night stand with him.');
  scene.text('Requires nudity: Yes');
  scene.text('Must be comfortable with simulated sex scenes');
  // TODO-QSP: dynamic text: Number of scenes: <<acting['scenecount']>>
  scene.text(`Number of scenes: ${((s as any).acting ?? 0)?.['scenecount']}`);
  scene.text('One dialogue scene, one sex scene.');
  qspCall(s, 'casting', 'details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Try out for this role', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Diner Waitress';
    qspCall(s, 'casting', 'tryout');
  } },
  ]);
  scene.build();
}

function enterHotBartender(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 5;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['room'] = Math.floor(Math.random() * 5) + 1;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['requirement'] = 50;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['scenecount'] = 3;
  qspCall(s, 'casting', 'audition_schedule');
  scene.text('Casting for the role of <b>Vera:</b> Female, 18-25');
  scene.text('Description: Vera is an attractive bartender who hooks up with the main character after his girlfriend has just broken up with him. She appears again to talk to him when he shows up at the bar later.');
  scene.text('Requires nudity: Yes');
  scene.text('Must be comfortable with simulated sex scenes');
  // TODO-QSP: dynamic text: Number of scenes: <<acting['scenecount']>>
  scene.text(`Number of scenes: ${((s as any).acting ?? 0)?.['scenecount']}`);
  scene.text('Three dialogue scenes, including one sex scene.');
  qspCall(s, 'casting', 'details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Try out for this role', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Vera';
    qspCall(s, 'casting', 'tryout');
  } },
  ]);
  scene.build();
}

function enterSluttyClubGirl(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 5;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['room'] = Math.floor(Math.random() * 5) + 1;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['requirement'] = 60;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['unique'] = 1;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['scenecount'] = 1;
  qspCall(s, 'casting', 'audition_schedule');
  scene.text('Casting "Snare: The Seventh Seduction", a feature length horror film. Pretty girls wanted for the role of <b>Slutty Club Girl (Day Player):</b> Female, 18-30');
  scene.text('Role Description: A party girl the main character meets at a club and unsuccessfully tries to flirt with.');
  scene.text('Requires nudity: Yes');
  // TODO-QSP: dynamic text: Number of scenes: <<acting['scenecount']>>
  scene.text(`Number of scenes: ${((s as any).acting ?? 0)?.['scenecount']}`);
  qspCall(s, 'casting', 'details');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Try out for this role', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Slutty Club Girl';
    qspCall(s, 'casting', 'tryout');
  } },
  ]);
  scene.build();
}

function enterYulyaGavrikov(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['roletype'] = 9;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'YulyaGavrikov';
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['number'] = 1;
  if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['room'] = Math.floor(Math.random() * 5) + 1;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['filmdays'] = 40;
  if (!(s as any).acting) (s as any).acting = {}; (s as any).acting['pay'] = (((s as any).audition ?? {})?.['roletype'] + 1) * 800 + (15*(Math.floor(Math.random() * (roletype - 0 + 1)) + (0)));
  qspCall(s, 'casting', 'audition_schedule');
  scene.text('Casting "Unashamed,"for the lead female role of <b>Yulya Gavrikov (Lead):</b> Female, 18-25');
  scene.text('Synopsis: Unashamed is a comedic drama that follows the Gavrikov family as they struggle through their problems of self image, romance, sexual identity, work and life balance, and most of all what it means to stick together as a family and be able to love each other without shame.');
  scene.text('Role Description: Yulya is a sexually free and uninhibited university student who is constantly getting into trouble with her many hookups. Though constantly getting together with people and desperately wanting some kind of genuine attachment, Yulya fears commitment and tries to cover up the fact by keeping her partners at an emotional arms length through sex and physicality.');
  // TODO-QSP: dynamic text: Audition: Room <<audition['room']>> - '+func('time', 'get_time_string', 16, 0)+'...
  scene.text(`Audition: Room ${((s as any).audition ?? 0)?.['room']} - '+func('time', 'get_time_string', 16, 0)+'-'+func('time', 'get_time_string', 18, 0)+', ${qspUntranslated(s, "weekName[audition['week']]", { location: "casting" })}, ${((s as any).audition ?? 0)?.['calendar_day']} of ${((s as any).audition ?? 0)?.['month']}.`);
  scene.text('Filming duration: 2 months');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(s, 'casting', 'clearcasting');
  }, goto: ['casting', 'callboard'] },
    { label: 'Try out for this role', handler: (st: GameState) => {
    if (!(s as any).audition) (s as any).audition = {}; (s as any).audition['role'] = 'Yulya Gavrikov';
    qspCall(s, 'casting', 'tryout');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'callboard':
      enterCallboard(s, scene);
      break;
    case 'callboard_extras_update':
      enterCallboardExtrasUpdate(s, scene);
      break;
    case 'callboard_update':
      enterCallboardUpdate(s, scene);
      break;
    case 'audition_schedule':
      enterAuditionSchedule(s, scene);
      break;
    case 'clearcasting':
      enterClearcasting(s, scene);
      break;
    case 'tryout':
      enterTryout(s, scene);
      break;
    case 'general_tryout':
      enterGeneralTryout(s, scene);
      break;
    case 'details':
      enterDetails(s, scene);
      break;
    case 'general_details':
      enterGeneralDetails(s, scene);
      break;
    case 'BackShowerGirl':
      enterBackShowerGirl(s, scene);
      break;
    case 'SpringBreakFlasher':
      enterSpringBreakFlasher(s, scene);
      break;
    case 'Cadaver':
      enterCadaver(s, scene);
      break;
    case 'DildoGirl':
      enterDildoGirl(s, scene);
      break;
    case 'NakedLockerGirl':
      enterNakedLockerGirl(s, scene);
      break;
    case 'UndressingLockerGirl':
      enterUndressingLockerGirl(s, scene);
      break;
    case 'ModestCheerleader':
      enterModestCheerleader(s, scene);
      break;
    case 'UnderwearCheerleader':
      enterUnderwearCheerleader(s, scene);
      break;
    case 'ToplessCheerleader':
      enterToplessCheerleader(s, scene);
      break;
    case 'HotShowerGirl':
      enterHotShowerGirl(s, scene);
      break;
    case 'WerewolfGirl':
      enterWerewolfGirl(s, scene);
      break;
    case 'DinerWaitress':
      enterDinerWaitress(s, scene);
      break;
    case 'HotBartender':
      enterHotBartender(s, scene);
      break;
    case 'SluttyClubGirl':
      enterSluttyClubGirl(s, scene);
      break;
    case 'YulyaGavrikov':
      enterYulyaGavrikov(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const casting: LocationDef = {
  name: 'casting',
  title: '<b>Calls For Extras</b>',
  region: 'other',
  enter: enter,
};
