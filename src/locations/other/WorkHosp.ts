import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'WorkHosp', 'start');
  (s as any).sexloc = 'WorkHosp';
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/city/residential/clinic/hospital.jpg');
  scene.text('The hospital staff are hard at work, with many patients waiting in the lobbies. Doctors and nurses rush from office to office trying to keep the flow of patients going as quickly as possible.');
  (s as any).jobhosprand = (Math.floor(Math.random() * 10) + 0);
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
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'exp_gain', 'medcn', 0);
    if ((!((st as any).jobhosprand ?? 0))) {
      qspGoto(st, 'WorkHosp', '2');
    }
    scene.text('You work as part of the operating team, helping the doctors with whatever tasks they request of you.');
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
    { label: 'Help the doctors in the emergency room (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'exp_gain', 'medcn', 0);
    if ((!((st as any).jobhosprand ?? 0))) {
      qspGoto(st, 'WorkHosp', '3');
    }
    scene.text('You spend a frenzied hour helping patients that come into the emergency room.');
    scene.actions([
      { label: 'Move away', goto: ['WorkHosp', 'start'] },
    ]);
  } },
    { label: 'Relax in the nurse station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('You relax a little while pretending to be busy.');
    if (((st as any).pcs_inhib ?? 0) > 20) {
      scene.actions([
        { label: 'Masturbate (0:15)', handler: (st: GameState) => {
    (st as any).mastrrand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).mastrrand ?? 0))) {
      qspGoto(st, 'WorkHosp', '1');
    } else {
      (st as any).picrand = 11;
      scene.img('images/locations/shared/apartment/event/sick/mastr11.jpg');
      scene.text('You secretly masturbate whenever nobody is watching.');
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'Gradually, a pleasant warmth and sensation radiates from your needy pussy, culminating in a powerful orgasm that sends waves of pleasure through your entire body.';
      qspCall(st, 'arousal', 'clit_finger', 15, 'masturbate');
      qspCall(st, 'stat', '');
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
    qspCall(st, 'food', '');
  } },
    { label: 'Chat with Kat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).kat = ((st as any).kat ?? 0) + (1);
    if (((st as any).npc_rel ?? 0)?.['A219'] > 60  &&  (!((st as any).military ?? 0))) {
      qspGoto(st, 'WorkHosp', 'milit');
    }
    scene.text('You spend some time chatting with Kat.');
    if (((st as any).npc_rel ?? 0)?.['A219'] > 50) {
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
  scene.text(`'She notices your reaction. "Don't worry, you'll have a doctor with you, so the most you'll need to do is apply some bandages. If you feel up to it, you can catch a bus at the clinic on Saturday between 6:00 and 9:00. Oh yeah, I almost forgot! The pay for two days is ${qspFunc(s, 'money', 'string_profit', 5000)}. So what do you say?"'`);
  scene.actions([
    { label: 'Move away', goto: ['WorkHosp', 'start'] },
  ]);
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).katprorand = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).katprorand ?? 0))) {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).picrand = 11;
    qspGoto(s, 'lezbsex', 'var');
  } else {
    if (((s as any).katprorand ?? 0) === 1) {
      scene.img('images/locations/city/residential/clinic/sex/hospsex7.jpg');
      scene.text('You and Kat have just begun to fondle each other when a patient enters the room. You back away from her, trying to pretend that nothing was happening. In contrast, Kat doesn\'t hesitate and lies down on the couch with her legs spread wide, proudly showing off her wet pussy.');
      scene.text('She guides you back down to her pussy, leaving no doubt what she expects your tongue to be doing while looking hungrily at the guy and inviting him to join in the fun.');
      qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Leave', goto: ['WorkHosp', 'start'] },
        { label: 'Sounds like fun', handler: (st: GameState) => {
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).picrand = 12;
    (st as any).sexpartkno = 1;
    qspCall(st, 'npcgeneratec', '0', 'Patient', (Math.floor(Math.random() * 31) + 18));
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspCall(st, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(st, 'arousal', 'vaginal', (-10), 'unknown');
    qspGoto(st, 'podrsex', 'suck');
  } },
      ]);
    } else {
      if (((s as any).katprorand ?? 0) === 2) {
        scene.img('images/locations/city/residential/clinic/sex/hospsex8.jpg');
        scene.text('While you and Kat are in full swing, two doctors enter the room. You are both so engrossed with each other that you don\'t even notice them until they start caressing you. You both spread your legs wider, inviting them to join the fun.');
        scene.actions([
          { label: 'Entertain them', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    (st as any).picrand = 11;
    (st as any).sexpartkno = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).boy = (st as any).boy ?? {})[1] = ((st as any).boy ?? 0);
    ((st as any).boydesc = (st as any).boydesc ?? {})[1] = ((st as any).boydesc ?? 0);
    if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    while (true) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
      if (((st as any).boydesc ?? 0) === ((st as any).boydesc ?? 0)[1]) {
        ((st as any).docfuck = (st as any).docfuck ?? {})[String((st as any).randdoc ?? 0)] = ((st as any).docfuck[String((st as any).randdoc ?? 0)] ?? 0) - (1);
        break;
      }
      if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
        (st as any).guy = ((st as any).guy ?? 0) + (1);
      }
      qspCall(st, 'arousal', 'bj', 10, 'group');
      qspCall(st, 'arousal', 'vaginal', (-10), 'group');
      qspCall(st, 'arousal', 'end');
      qspGoto(st, 'sexdvanadva', 'var');
    }
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).mastrrand = (Math.floor(Math.random() * 2) + 0);
  if ((!((s as any).mastrrand ?? 0))) {
    scene.img('images/locations/city/residential/clinic/sex/hospsex9.jpg');
    scene.text('As you masturbate, you totally abandon yourself to the pleasure of your coming orgasm. A doctor enters the room, but you\'re so absorbed in your own pleasure that you only notice him when his hand starts to guide your head to his erect cock.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break and run', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break and run', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'WorkHosp', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Go along with it', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).picrand = 12;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspGoto(st, 'sex', 'minet');
  } },
    ]);
  } else {
    (s as any).picrand = (Math.floor(Math.random() * 2) + 12);
    scene.img('images/locations/city/residential/clinic/sex/hospsex10.jpg');
    scene.text('As you lose yourself in pleasure, two doctors come into the room. You\'re so distracted that you only notice them when they start to openly masturbate in front of you.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Play with them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Play with them', handler: (st: GameState) => {
    (st as any).sexpartkno = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).boy = (st as any).boy ?? {})[1] = ((st as any).boy ?? 0);
    ((st as any).boydesc = (st as any).boydesc ?? {})[1] = ((st as any).boydesc ?? 0);
    if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    while (true) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
      if (((st as any).boydesc ?? 0) === ((st as any).boydesc ?? 0)[1]) {
        ((st as any).docfuck = (st as any).docfuck ?? {})[String((st as any).randdoc ?? 0)] = ((st as any).docfuck[String((st as any).randdoc ?? 0)] ?? 0) - (1);
        break;
      }
      if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
        (st as any).guy = ((st as any).guy ?? 0) + (1);
      }
      qspCall(st, 'arousal', 'bj', 10, 'group');
      qspCall(st, 'arousal', 'vaginal', (-10), 'group');
      qspCall(st, 'willpower', 'pay', 'self');
      qspCall(st, 'arousal', 'end');
      qspGoto(st, 'sexdvoe', 'var');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'WorkHosp', 'start');
  } },
    ]);
  }
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).picrand = (Math.floor(Math.random() * 3) + 13);
  scene.img('images/locations/city/residential/clinic/sex/hospsex11.jpg');
  scene.text('A patient comes through the door and takes off his pants to show you his flaccid penis. He asks you to help him as he can\'t seem to get an erection and it\'s causing him depression. You realize that it\'s all just a silly game and that he hopes to fuck you, but you still feel sorry for him. You wonder what caused him to come up with this plan and decide it might just be that he has no luck with girls, and if today is not his lucky day, he may jump out of the window.');
  qspCall(s, 'willpower', 'sex', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Give him what he wants', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Give him what he wants', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'sex', 'minet');
  } },
    ]);
  }
  scene.actions([
    { label: 'Oust him', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'medcn', 0);
    qspGoto(st, 'WorkHosp', 'start');
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/sex/hospsex12.jpg');
  scene.text('A pretty patient comes into the room and the doctor tries to examine her. She touches him near his poorly hidden erection and the doctor glances at you with a question in his eyes.');
  qspCall(s, 'willpower', 'sex', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Play along', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Play along', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '1', 'Patient', 0, 0, 1);
    qspCall(st, 'npcStat', '$npclastgenerated', 'a');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    ((st as any).stat = (st as any).stat ?? {})['lesbian_count'] = ((st as any).stat['lesbian_count'] ?? 0) + (1);
    (st as any).picrand = 13;
    (st as any).sexpartkno = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRanddoc(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).docfuck ?? 0)?.[String((st as any).randdoc ?? 0)] === 1) {
      (st as any).guy = ((st as any).guy ?? 0) + (1);
    }
    qspCall(st, 'arousal', 'cuni_give', 10, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'vaginal', (-10), 'group');
    qspCall(st, 'willpower', 'pay', 'self');
    qspGoto(st, 'podrsex', 'suck');
  } },
    ]);
  }
  scene.actions([
    { label: 'Ask if she actually needs treatment', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', '');
  }, goto: ['WorkHosp', 'start'] },
  ]);
  scene.build();
}

function enterRanddoc(s: GameState, scene: SceneBuilder): void {
  (s as any).randdoc = (Math.floor(Math.random() * 20) + 0);
  if ((!((s as any).randdoc ?? 0))) {
    qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Ivanov';
    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Ivanov';
    qspCall(s, 'npcpreservec', '$npclastgenerated');
  } else {
    if (((s as any).randdoc ?? 0) === 1) {
      qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
      ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Smirnov';
      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Smirnov';
      qspCall(s, 'npcpreservec', '$npclastgenerated');
    } else {
      if (((s as any).randdoc ?? 0) === 2) {
        qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Kuznetsov';
        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Kuznetsov';
        qspCall(s, 'npcpreservec', '$npclastgenerated');
      } else {
        if (((s as any).randdoc ?? 0) === 3) {
          qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
          ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Popov';
          ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Popov';
          qspCall(s, 'npcpreservec', '$npclastgenerated');
        } else {
          if (((s as any).randdoc ?? 0) === 4) {
            qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
            ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Vasiliev';
            ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Vasiliev';
            qspCall(s, 'npcpreservec', '$npclastgenerated');
          } else {
            if (((s as any).randdoc ?? 0) === 5) {
              qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
              ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Petrov';
              ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Petrov';
              qspCall(s, 'npcpreservec', '$npclastgenerated');
            } else {
              if (((s as any).randdoc ?? 0) === 6) {
                qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Sokolov';
                ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Sokolov';
                qspCall(s, 'npcpreservec', '$npclastgenerated');
              } else {
                if (((s as any).randdoc ?? 0) === 7) {
                  qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                  ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Mikhailov';
                  ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Mikhailov';
                  qspCall(s, 'npcpreservec', '$npclastgenerated');
                } else {
                  if (((s as any).randdoc ?? 0) === 8) {
                    qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Fedorov';
                    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Fedorov';
                    qspCall(s, 'npcpreservec', '$npclastgenerated');
                  } else {
                    if (((s as any).randdoc ?? 0) === 9) {
                      qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                      ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Morozov';
                      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Morozov';
                      qspCall(s, 'npcpreservec', '$npclastgenerated');
                    } else {
                      if (((s as any).randdoc ?? 0) === 10) {
                        qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Volkov';
                        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Volkov';
                        qspCall(s, 'npcpreservec', '$npclastgenerated');
                      } else {
                        if (((s as any).randdoc ?? 0) === 11) {
                          qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                          ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Alexeev';
                          ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Alexeev';
                          qspCall(s, 'npcpreservec', '$npclastgenerated');
                        } else {
                          if (((s as any).randdoc ?? 0) === 12) {
                            qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                            ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Lebedev';
                            ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Lebedev';
                            qspCall(s, 'npcpreservec', '$npclastgenerated');
                          } else {
                            if (((s as any).randdoc ?? 0) === 13) {
                              qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                              ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Semenov';
                              ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Semenov';
                              qspCall(s, 'npcpreservec', '$npclastgenerated');
                            } else {
                              if (((s as any).randdoc ?? 0) === 14) {
                                qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Egerov';
                                ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Egerov';
                                qspCall(s, 'npcpreservec', '$npclastgenerated');
                              } else {
                                if (((s as any).randdoc ?? 0) === 15) {
                                  qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                  ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Pavlov';
                                  ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Pavlov';
                                  qspCall(s, 'npcpreservec', '$npclastgenerated');
                                } else {
                                  if (((s as any).randdoc ?? 0) === 16) {
                                    qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                    ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Kozlov';
                                    ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Kozlov';
                                    qspCall(s, 'npcpreservec', '$npclastgenerated');
                                  } else {
                                    if (((s as any).randdoc ?? 0) === 17) {
                                      qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                      ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Stepanov';
                                      ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Stepanov';
                                      qspCall(s, 'npcpreservec', '$npclastgenerated');
                                    } else {
                                      if (((s as any).randdoc ?? 0) === 18) {
                                        qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                        ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Nikolaev';
                                        ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Nikolaev';
                                        qspCall(s, 'npcpreservec', '$npclastgenerated');
                                      } else {
                                        if (((s as any).randdoc ?? 0) === 19) {
                                          qspCall(s, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
                                          ((s as any).npc_usedname = (s as any).npc_usedname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Dr. Orlov';
                                          ((s as any).npc_lastname = (s as any).npc_lastname ?? {})[String((s as any).npclastgenerated ?? 0)] = 'Orlov';
                                          qspCall(s, 'npcpreservec', '$npclastgenerated');
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'boyStat', '$npclastsaved');
  ((s as any).docfuck = (s as any).docfuck ?? {})[String((s as any).randdoc ?? 0)] = ((s as any).docfuck[String((s as any).randdoc ?? 0)] ?? 0) + (1);
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
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case 'randdoc':
      enterRanddoc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const WorkHosp: LocationDef = {
  name: 'WorkHosp',
  title: 'Clinic',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
