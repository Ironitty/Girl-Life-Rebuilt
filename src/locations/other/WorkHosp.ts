import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'WorkHosp', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/city/residential/clinic/hospital.jpg');
  scene.text('The hospital staff are hard at work, with many patients waiting in the lobbies. Doctors and nurses rush from office to office trying to keep the flow of patients going as quickly as possible.');
  (s as any).jobhosprand = Math.floor(Math.random() * 10) + 0;
  if (((s as any).hour ?? 0) >= 16) {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/city/residential/clinic/hospital.jpg');
    scene.text('Your shift has ended.');
    scene.actions([
      { label: 'Go home', goto: ['city_residential', ''] },
    ]);
  }
  scene.actions([
    { label: 'Work in the operating room (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 2)
    if (((s as any).jobhosprand ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['WorkHosp', '2'] }]);
    }
    scene.text('You work as part of the operating team, helping the doctors with whatever tasks they request of you.');
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
    { label: 'Help the doctors in the emergency room (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 2)
    if (((s as any).jobhosprand ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['WorkHosp', '3'] }]);
    }
    scene.text('You spend a frenzied hour helping patients that come into the emergency room.');
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
    { label: 'Relax in the nurse station', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('You relax a little while pretending to be busy.');
    if (((s as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Masturbate (0:15)', handler: (st: GameState) => {
    (s as any).mastrrand = Math.floor(Math.random() * 3) + 0;
    if (((s as any).mastrrand ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['WorkHosp', '1'] }]);
    } else {
      (s as any).picrand = 11;
      scene.img('images/locations/shared/apartment/event/sick/mastr11.jpg');
      scene.text('You secretly masturbate whenever nobody is watching.');
      qspCall(s, 'arousal', 'clit_finger', 15, 'masturbate');
      qspCall(s, 'stat', '');
    }
    scene.actions([
      { label: 'Leave', goto: ['WorkHosp', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
    { label: 'Eat in the cafeteria (0:30)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
    { label: 'Chat with Kat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).kat = ((s as any).kat ?? 0) + (1);
    if (((s as any).npc_rel ?? 0)?.['A219'] > 60  &&  ((s as any).military ?? 0) === 0) {
      scene.actions([{ label: 'Continue', goto: ['WorkHosp', 'milit'] }]);
    }
    scene.text('You spend some time chatting with Kat.');
    if (((s as any).npc_rel ?? 0)?.['A219'] > 50) {
      scene.actions([
        { label: 'Suggest going to an empty room together', goto: ['WorkHosp', '0'] },
      ]);
    }
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMilit(s: GameState, scene: SceneBuilder): void {
  (s as any).military = 1;
  scene.text('Kat turns to you. "Listen, I\'m scheduled to work this weekend, but I have plans. Here\'s the deal: war games are often held not far from the city and, well, according to the rules, they need doctors on site before they can begin.');
  // TODO-QSP: dynamic text: She notices your reaction. "Don't worry, you'll have a doctor with you, so the m...
  scene.text(`She notices your reaction. "Don't worry, you'll have a doctor with you, so the most you'll need to do is apply some bandages. If you feel up to it, you can catch a bus at the clinic on Saturday between '+func('time', 'get_time_string', 6, 0)+' and '+func('time', 'get_time_string', 9, 0)+'. Oh yeah, I almost forgot! The pay for two days is ${qspFunc(s, 'money', 'string_profit', 5000)}. So what do you say?"`);
  scene.actions([
    { label: 'Move away', goto: ['WorkHosp', 'start'] },
  ]);
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).katprorand = Math.floor(Math.random() * 3) + 0;
  if (((s as any).katprorand ?? 0) === 0) {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).picrand = 11;
    // TODO-QSP: xgt 'lezbsex', 'var'
  } else {
    scene.img('images/locations/city/residential/clinic/sex/hospsex7.jpg');
    scene.text('You and Kat have just begun to fondle each other when a patient enters the room. You back away from her, trying to pretend that nothing was happening. In contrast, Kat doesn\'t hesitate and lies down on the couch with her legs spread wide, proudly showing off her wet pussy.');
    scene.text('She guides you back down to her pussy, leaving no doubt what she expects your tongue to be doing while looking hungrily at the guy and inviting him to join in the fun.');
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).katprorand ?? 0) === 2) {
      scene.img('images/locations/city/residential/clinic/sex/hospsex8.jpg');
      scene.text('While you and Kat are in full swing, two doctors enter the room. You are both so engrossed with each other that you don\'t even notice them until they start caressing you. You both spread your legs wider, inviting them to join the fun.');
      scene.actions([
        { label: 'Entertain them', handler: (st: GameState) => {
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    (s as any).picrand = 11;
    (s as any).sexpartkno = 1;
    qspCall(s, 'WorkHosp', 'randdoc');
    // TODO-QSP: $boy[1] = $boy
    // TODO-QSP: $boydesc[1] = $boydesc
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    // TODO-QSP: :docloop
    qspCall(s, 'WorkHosp', 'randdoc');
    if (((s as any).boydesc ?? 0) === ((s as any).boydesc ?? 0)[1]) {
      (s as any).docfuck[randdoc] = ((s as any).docfuck[randdoc] ?? 0) - (1);
      // TODO-QSP: jump 'docloop'
    }
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 10, 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), 'group');
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: xgt 'sexdvanadva', 'var'
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['WorkHosp', 'start'] },
      { label: 'Sounds like fun', handler: (st: GameState) => {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 12;
    (s as any).sexpartkno = 1;
    qspCall(s, 'npcgeneratec', '', 0, 'Patient', Math.floor(Math.random() * 31) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(s, 'arousal', 'vaginal', (-10), 'unknown');
  }, goto: ['podrsex', 'suck'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'milit':
      enterMilit(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const WorkHosp: LocationDef = {
  name: 'WorkHosp',
  title: 'Clinic',
  region: 'other',
  locationType: 'event',
  description: ['The hospital staff are hard at work, with many patients waiting in the lobbies. Doctors and nurses rush from office to office trying to keep the flow of patients going as quickly as possible.'],
  enter: enter,
};
