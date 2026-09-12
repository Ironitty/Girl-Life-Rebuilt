import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === "((s as any).evt_stage ?? 0)"  ||  ((s as any).locArgs?.[0] ?? 0) === '') {
    if (!(s as any).photography) (s as any).photography = {}; (s as any).photography['experience'] = ((s as any).photography['experience'] ?? 0) + (1);
    // TODO-QSP: gs 'money', 'earn', evtVars['wage']
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'photography_work', 'stage_' + evtVars['event_sub']
  }
  scene.build();
}

function enterStage_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_generic/37.jpg');
  scene.text('You head over to the industrial region where you quickly meet up with your contact at the Experience Center.');
  // TODO-QSP: dynamic text: "Hi there; you must be <<$pcs_firstname>>. The group is already on their way to ...
  scene.text(`"Hi there; you must be ${((s as any).pcs_firstname ?? 0)}. The group is already on their way to the site, so I'll take you up there in my car. I'm sure you know everything you need to do, but feel free to ask if you have any questions."`);
  scene.text('You get in the car and drive for nearly half an hour until you reach the Experience Center. Once there, the representative parks the car and you get out and head inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Experience Center', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 120);
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 5) + 6);
    qspCall(s, 'stat', '');
    qspCall(s, 'photography_work', 'photojob_pay');
    scene.img('images/pc/activities/photography/job/tank.jpg');
    scene.text('You arrive at the Experience Center and spend the next two hours taking as many pictures of the experience as you can. The group is clearly enjoying the event; They get to ride in military vehicles across rough terrain and fire weapons at the shooting range.');
    // TODO-QSP: dynamic text: Once the day is over, you remove your SD card and hand it to the representative,...
    scene.text(`Once the day is over, you remove your SD card and hand it to the representative, who shows the photos to the group. Once they've sorted out whether any of the customers want additional copies, your contact takes you back to the city's industrial region. When you check your account, you see that you have been paid ${((s as any).evtVars ?? 0)?.['wage']}.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStage_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 60);
  qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 3) + 3);
  qspCall(s, 'stat', '');
  qspCall(s, 'photography_work', 'photojob_pay');
  scene.img(`images/pc/activities/photography/job/model${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You go to the Petrovskaya Akvatoria Model Museum to take pictures of the various exhibits on behalf of an international newspaper.');
  scene.text('After a brief introduction to a member of staff to confirm your activities, you walk around the exhibit, taking a large number of photographs so that the article has a wealth to choose from.');
  // TODO-QSP: dynamic text: Once you're finished, you return to the shop and hand the SD card to Branko, who...
  scene.text(`Once you're finished, you return to the shop and hand the SD card to Branko, who gives you your fee of ${qspFunc(s, 'money', 'string_profit', ((s as any).evtVars ?? 0)?.['wage'])}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterStage_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 9) + 10);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_generic/18.jpg');
  scene.text('You head over to the residential district where you meet one of the family members of the betrothed.');
  scene.text('"Hello, you must be the photographer! If you follow me, I\'ll take you to the happy couple to take the pictures of them."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 90);
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 5) + 6);
    qspCall(s, 'stat', '');
    qspCall(s, 'photography_work', 'photojob_pay');
    scene.img('images/pc/activities/photography/job/wedding.jpg');
    scene.text('You meet the bride and groom and help direct them into a number of framed situations for you to take some beautiful photos of them together.');
    scene.text('Once you have enough, you spend the rest of the day in the background taking a number of photos of the wedding. Once it\'s over, you meet back up with the relative who takes the SD card from you.');
    // TODO-QSP: dynamic text: Leaving them to close up the venue, you walk out back into the residential distr...
    scene.text(`Leaving them to close up the venue, you walk out back into the residential district. When you check your account, you see that you have been paid ${qspFunc(s, 'money', 'string_profit', ((s as any).evtVars ?? 0)?.['wage'])}.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStage_4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 15);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_generic/11.jpg');
  scene.text('You head over to the industrial region and meet a representative of the Autodrome. You will be expected to take pictures of the event and deliver them to your contact.');
  scene.text('"Why hello there, you must be the person Branko sent. I\'m sure you already know everything you have to do at the track, so I\'ll give you this press pass and take you to the Autodrome."');
  scene.text('You look at the pass they gave you before getting in their car to be taken to the track.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Autodrome', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 61) + 180);
    qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 7) + 9);
    qspCall(s, 'stat', '');
    qspCall(s, 'photography_work', 'photojob_pay');
    scene.img('images/pc/activities/photography/job/motorsport.jpg');
    scene.text('You\'re dropped off at the employee entrance and directed to the pit area as the teams get their vehicles prepared.');
    scene.text('You start off by getting shots of the teams in the build-up to the race, showcasing the tension and focus as the countdown approaches zero.');
    scene.text('When the race itself starts you roam the track, taking pictures of any event as it happens, getting high intensity shots of fast paced action, as well as the smooth professionalism of the leading drivers. It is a fantastic experience.');
    scene.text('With your job done, you find your contact again and hand them a full SD card for which they are gratified.');
    // TODO-QSP: dynamic text: Your contact then takes you back to the city's industrial region. When you check...
    scene.text(`Your contact then takes you back to the city's industrial region. When you check your account, you see that you have been paid ${qspFunc(s, 'money', 'string_profit', ((s as any).evtVars ?? 0)?.['wage'])}.`);
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStage_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'exp_gain', 'photoskl', Math.floor(Math.random() * 3) + 3);
  qspCall(s, 'stat', '');
  qspCall(s, 'photography_work', 'photojob_pay');
  scene.img('images/pc/activities/photography/job/court.jpg');
  scene.text('"You need to go to the courthouse to take publicity photographs of the completed court session as they leave the building, then deliver them back to me to give you your commission."');
  scene.text('You head into the City Center and straight to the courthouse, which has already seen a number of people turn up.');
  scene.text('Once you\'ve ingratiated yourself into the crowd, you position yourself to take some good shots of the plaintiff accompanied by their lawyers and representatives.');
  scene.text('With the verdict read, you quickly make your way outside to the front of the courthouse to take photos of him leaving.');
  // TODO-QSP: dynamic text: Once you're finished, you return to the shop and hand the SD card to Branko, who...
  scene.text(`Once you're finished, you return to the shop and hand the SD card to Branko, who gives you your fee of ${qspFunc(s, 'money', 'string_profit', ((s as any).evtVars ?? 0)?.['wage'])}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterJobInit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'photography_work', 'job_' + rand(1, 5)
  qspCall(s, 'photography_work', 'photojob_pay');
  // TODO-QSP: gs 'jobs_gigs', 'generate_event_schedule', '6', rand(4, 8) * 30
  // TODO-QSP: end
  scene.build();
}

function enterPhotojobPay(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_photoskl ?? 0) <= 50) {
    qspCall(s, 'jobs_gigs', 'set_wage_scale', 5, 100);
  } else {
    if (((s as any).pcs_photoskl ?? 0) <= 75) {
      qspCall(s, 'jobs_gigs', 'set_wage_scale', 1);
    } else {
      if (((s as any).pcs_photoskl ?? 0) <= 100) {
        qspCall(s, 'jobs_gigs', 'set_wage_scale', 2);
      } else {
        if (((s as any).pcs_photoskl ?? 0) <= 125) {
          qspCall(s, 'jobs_gigs', 'set_wage_scale', 3);
        } else {
          qspCall(s, 'jobs_gigs', 'set_wage_scale', 4);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterJob_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'set_event', 1, 1, ((s as any).temp_job_desc ?? 0), ((s as any).temp_journal_desc ?? 0), 1);
  // TODO-QSP: gs 'jobs_gigs', 'set_loc_code', 'city_industrial', '', "gt 'photography_work', 'evt_stage'"
  // TODO-QSP: end
  scene.build();
}

function enterJob_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'set_event', 1, 2, ((s as any).temp_job_desc ?? 0), ((s as any).temp_journal_desc ?? 0), 1);
  // TODO-QSP: gs 'jobs_gigs', 'set_loc_code', 'shop_photography', 'start', "gt 'photography_work', 'evt_stage'"
  // TODO-QSP: end
  scene.build();
}

function enterJob_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'set_event', 1, 3, ((s as any).temp_job_desc ?? 0), ((s as any).temp_journal_desc ?? 0), 1);
  // TODO-QSP: gs 'jobs_gigs', 'set_loc_code', 'city_residential', '', "gt 'photography_work', 'evt_stage'"
  // TODO-QSP: end
  scene.build();
}

function enterJob_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'set_event', 1, 4, ((s as any).temp_job_desc ?? 0), ((s as any).temp_journal_desc ?? 0), 1);
  // TODO-QSP: gs 'jobs_gigs', 'set_loc_code', 'city_industrial', '', "gt 'photography_work', 'evt_stage'"
  // TODO-QSP: end
  scene.build();
}

function enterJob_5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs_gigs', 'set_event', 1, 5, ((s as any).temp_job_desc ?? 0), ((s as any).temp_journal_desc ?? 0), 1);
  // TODO-QSP: gs 'jobs_gigs', 'set_loc_code', 'shop_photography', 'start', "gt 'photography_work', 'evt_stage'"
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stage_1':
      enterStage_1(s, scene);
      break;
    case 'stage_2':
      enterStage_2(s, scene);
      break;
    case 'stage_3':
      enterStage_3(s, scene);
      break;
    case 'stage_4':
      enterStage_4(s, scene);
      break;
    case 'stage_5':
      enterStage_5(s, scene);
      break;
    case 'job_init':
      enterJobInit(s, scene);
      break;
    case 'photojob_pay':
      enterPhotojobPay(s, scene);
      break;
    case 'job_1':
      enterJob_1(s, scene);
      break;
    case 'job_2':
      enterJob_2(s, scene);
      break;
    case 'job_3':
      enterJob_3(s, scene);
      break;
    case 'job_4':
      enterJob_4(s, scene);
      break;
    case 'job_5':
      enterJob_5(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const photography_work: LocationDef = {
  name: 'photography_work',
  title: 'You head over to the industrial region where you quickly mee',
  region: 'other',
  enter: enter,
};
