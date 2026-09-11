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
    if ((!((s as any).jobhosprand ?? 0))) {
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
    if ((!((s as any).jobhosprand ?? 0))) {
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
    if ((!((s as any).mastrrand ?? 0))) {
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
    if (((s as any).npc_rel ?? 0)?.['A219'] > 60  &&  (!((s as any).military ?? 0))) {
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
  if ((!((s as any).katprorand ?? 0))) {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).picrand = 11;
    // TODO-QSP: xgt 'lezbsex', 'var'
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
    } else {
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
      (s as any).docfuck[String((s as any).randdoc ?? 0)] = ((s as any).docfuck[String((s as any).randdoc ?? 0)] ?? 0) - (1);
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
    }
  }
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).mastrrand = Math.floor(Math.random() * 2) + 0;
  if ((!((s as any).mastrrand ?? 0))) {
    scene.img('images/locations/city/residential/clinic/sex/hospsex9.jpg');
    scene.text('As you masturbate, you totally abandon yourself to the pleasure of your coming orgasm. A doctor enters the room, but you\'re so absorbed in your own pleasure that you only notice him when his hand starts to guide your head to his erect cock.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break and run [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break and run [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['WorkHosp', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Go along with it', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).picrand = 12;
    qspCall(s, 'WorkHosp', 'randdoc');
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }, goto: ['sex', 'minet'] },
    ]);
  } else {
    (s as any).picrand = Math.floor(Math.random() * 2) + 12;
    scene.img('images/locations/city/residential/clinic/sex/hospsex10.jpg');
    scene.text('As you lose yourself in pleasure, two doctors come into the room. You\'re so distracted that you only notice them when they start to openly masturbate in front of you.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Play with them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Play with them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).sexpartkno = 1;
    qspCall(s, 'WorkHosp', 'randdoc');
    // TODO-QSP: $boy[1] = $boy
    // TODO-QSP: $boydesc[1] = $boydesc
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    // TODO-QSP: :docloop2
    qspCall(s, 'WorkHosp', 'randdoc');
    if (((s as any).boydesc ?? 0) === ((s as any).boydesc ?? 0)[1]) {
      (s as any).docfuck[String((s as any).randdoc ?? 0)] = ((s as any).docfuck[String((s as any).randdoc ?? 0)] ?? 0) - (1);
      // TODO-QSP: jump 'docloop2'
    }
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'bj', 10, 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), 'group');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: xgt 'sexdvoe', 'var'
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['WorkHosp', 'start'] },
    ]);
  }
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).picrand = Math.floor(Math.random() * 3) + 13;
  scene.img('images/locations/city/residential/clinic/sex/hospsex11.jpg');
  scene.text('A patient comes through the door and takes off his pants to show you his flaccid penis. He asks you to help him as he can\'t seem to get an erection and it\'s causing him depression. You realize that it\'s all just a silly game and that he hopes to fuck you, but you still feel sorry for him. You wonder what caused him to come up with this plan and decide it might just be that he has no luck with girls, and if today is not his lucky day, he may jump out of the window.');
  qspCall(s, 'willpower', 'sex', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Give him what he wants [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Give him what he wants [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['sex', 'minet'] },
    ]);
  }
  scene.actions([
    { label: 'Oust him', handler: (st: GameState) => {
    // TODO-QSP: gs 'exp_gain', 'medcn', rand (0, 1)
  }, goto: ['WorkHosp', 'start'] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/sex/hospsex12.jpg');
  scene.text('A pretty patient comes into the room and the doctor tries to examine her. She touches him near his poorly hidden erection and the doctor glances at you with a question in his eyes.');
  qspCall(s, 'willpower', 'sex', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Play along [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Play along [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 1, 'Patient', 0, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).stat['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
    (s as any).picrand = 13;
    (s as any).sexpartkno = 1;
    qspCall(s, 'WorkHosp', 'randdoc');
    if (((s as any).docfuck ?? 0)?.[String((s as any).randdoc ?? 0)] === 1) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'arousal', 'cuni_give', 10, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'vaginal', (-10), 'group');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['podrsex', 'suck'] },
    ]);
  }
  scene.actions([
    { label: 'Ask if she actually needs treatment', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'medcn', 0);
  }, goto: ['WorkHosp', 'start'] },
  ]);
  scene.build();
}

function enterRanddoc(s: GameState, scene: SceneBuilder): void {
  (s as any).randdoc = Math.floor(Math.random() * 20) + 0;
  if ((!((s as any).randdoc ?? 0))) {
    qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
    // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Ivanov'
    // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Ivanov'
    qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
  } else {
    if (((s as any).randdoc ?? 0) === 1) {
      qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
      // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Smirnov'
      // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Smirnov'
      qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
    } else {
      if (((s as any).randdoc ?? 0) === 2) {
        qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
        // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Kuznetsov'
        // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Kuznetsov'
        qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
      } else {
        if (((s as any).randdoc ?? 0) === 3) {
          qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
          // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Popov'
          // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Popov'
          qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
        } else {
          if (((s as any).randdoc ?? 0) === 4) {
            qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
            // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Vasiliev'
            // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Vasiliev'
            qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
          } else {
            if (((s as any).randdoc ?? 0) === 5) {
              qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
              // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Petrov'
              // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Petrov'
              qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
            } else {
              if (((s as any).randdoc ?? 0) === 6) {
                qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Sokolov'
                // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Sokolov'
                qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
              } else {
                if (((s as any).randdoc ?? 0) === 7) {
                  qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                  // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Mikhailov'
                  // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Mikhailov'
                  qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                } else {
                  if (((s as any).randdoc ?? 0) === 8) {
                    qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                    // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Fedorov'
                    // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Fedorov'
                    qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                  } else {
                    if (((s as any).randdoc ?? 0) === 9) {
                      qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                      // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Morozov'
                      // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Morozov'
                      qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                    } else {
                      if (((s as any).randdoc ?? 0) === 10) {
                        qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                        // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Volkov'
                        // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Volkov'
                        qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                      } else {
                        if (((s as any).randdoc ?? 0) === 11) {
                          qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                          // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Alexeev'
                          // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Alexeev'
                          qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                        } else {
                          if (((s as any).randdoc ?? 0) === 12) {
                            qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                            // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Lebedev'
                            // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Lebedev'
                            qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                          } else {
                            if (((s as any).randdoc ?? 0) === 13) {
                              qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                              // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Semenov'
                              // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Semenov'
                              qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                            } else {
                              if (((s as any).randdoc ?? 0) === 14) {
                                qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Egerov'
                                // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Egerov'
                                qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                              } else {
                                if (((s as any).randdoc ?? 0) === 15) {
                                  qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                  // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Pavlov'
                                  // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Pavlov'
                                  qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                                } else {
                                  if (((s as any).randdoc ?? 0) === 16) {
                                    qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                    // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Kozlov'
                                    // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Kozlov'
                                    qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                                  } else {
                                    if (((s as any).randdoc ?? 0) === 17) {
                                      qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                      // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Stepanov'
                                      // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Stepanov'
                                      qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                                    } else {
                                      if (((s as any).randdoc ?? 0) === 18) {
                                        qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                        // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Nikolaev'
                                        // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Nikolaev'
                                        qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
                                      } else {
                                        if (((s as any).randdoc ?? 0) === 19) {
                                          qspCall(s, 'npcgeneratec', '', 0, 'Doctor', Math.floor(Math.random() * 21) + 28);
                                          // TODO-QSP: $npc_usedname[$npclastgenerated] = 'Dr. Orlov'
                                          // TODO-QSP: $npc_lastname[$npclastgenerated] = 'Orlov'
                                          qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
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
  qspCall(s, 'boyStat', '', ((s as any).npclastsaved ?? 0));
  (s as any).docfuck[String((s as any).randdoc ?? 0)] = ((s as any).docfuck[String((s as any).randdoc ?? 0)] ?? 0) + (1);
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
