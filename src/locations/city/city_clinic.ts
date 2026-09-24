import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_clinic', 'start');
  (s as any).location_type = 'public_indoors';
  (s as any).sexloc = 'city_clinic';
  (s as any).hosprand = (Math.floor(Math.random() * 11) + 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('A sign inside the clinic lists some of the services the clinic has to offer:');
  scene.text('<i>General practitioner: currently available');
  scene.text('Psychotherapist: currently available');
  // TODO-QSP: dynamic text: 'STD testing - ' + $func('money', 'string_price', 1000) + '.'
  scene.text('STD testing - 1000₽.');
  scene.text('For hospital admissions, visit us on a Monday before the 10th of the month.');
  // TODO-QSP: dynamic text: 'An abortion at the woman''s request can be performed up until the 84th day of p...
  scene.text('An abortion at the woman\'s request can be performed up until the 84th day of pregnancy - 15000₽.');
  scene.text('Be warned, improperly performed abortions can be dangerous to your health. There is a risk of complications and the possibility of damage to your uterus.</i>');
  scene.text('At first, you thought the warning was only health department boiler-plate. However, no sooner do you finish thinking that then you notice a nurse pushing a cart of freshly sterilized coat hangers down the hallway and begin to wonder how competent this facility really is in terms of women\'s health…');
  scene.text('One area of the clinic is devoted to cosmetic surgery. A sign with directions on the wall point you to the surgeon\'s office.');
  if (((s as any).pcs_gpolimilkdonation ?? 0) >= 2  &&  ((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] < 1  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec: minut += 5 & gt ''city_clinic'', ''milk_reception''">Ask</a> at t...
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027city_clinic/u0027, /u0027milk_reception/u0027); return false;">Ask</a> at the reception if there is the possibility for breast milk donation');
  } else {
    if (((s as any).pcs_gpolimilkdonation ?? 0) < 2  &&  ((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] < 1  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
      // TODO-QSP: dynamic text: A small <a href="exec: minut += 5 & gt ''city_clinic'', ''milk_advertisement''">...
      scene.text('A small <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=s.5; return s; }); window.__gameStore.getState().doGoto(/u0027city_clinic/u0027, /u0027milk_advertisement/u0027); return false;">advertisement</a> at reception catches your eye.');
    }
  }
  if (((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_hospital_nurse') === 1) {
    scene.actions([
      { label: 'Begin your work day', goto: ['city_clinic', 'beginwork'] },
    ]);
  }
  if (((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] >= 1) {
    scene.actions([
      { label: 'Go to the breast milk donation office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  }
  if ((((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0) / 2  ||  ((s as any).pain ?? 0)?.['total'] >= 70)  &&  ((s as any).clinic ?? 0)?.['docheal'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'See a doctor now (urgent)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    ((st as any).clinic = (st as any).clinic ?? {})['docheal'] = ((st as any).daystart ?? 0);
    qspCall(st, 'medical_din', 'healthTreatment');
    qspCall(st, 'stat', '');
    scene.text('The doctor guides you to a bed and tells you to lie down, after which he gives you a combined painkiller, steroid and vitamin shot.');
    scene.text('You feel drowsy for a little while, but afterwards you feel a lot better. The shot sped up your aching body\'s recovery a lot, meaning the pain probably won\'t come back as strongly when the shot wears off, and should aid your health recovery over the coming days.');
    scene.actions([
      { label: 'Return to the entrance', goto: ['city_clinic', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'City General practitioner', 'a doctor'):
  if (qspFunc(s, 'appointments', 'get_state', 'City General practitioner', '') === 'none') {
    scene.text('"I would like to book an appointment with a doctor, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with a doctor," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  (s as any).reception_category = 'City General practitioner';
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  if (((s as any).pcs_mood ?? 0) < 10) {
    scene.actions([
      { label: 'See a therapist (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'medium');
    if ((!((st as any).hosprand ?? 0))) {
      qspGoto(st, 'city_clinic', '0');
    }
    if (((st as any).hosprand ?? 0) === 1) {
      qspGoto(st, 'city_clinic', '1');
    }
    if (((st as any).hosprand ?? 0) === 2) {
      qspGoto(st, 'city_clinic', '2');
    }
    scene.img('images/locations/pavlovsk/clinic/therapist/therapy1.jpg');
    scene.text('You lie down on the therapist\'s couch and tell him about your troubles. You immediately feel much better, but the therapist seems to be in a state of shock.');
    scene.actions([
      { label: 'Return to the entrance', goto: ['city_clinic', 'start'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'medical_din', 'birth_control');
  qspCall(s, 'clinic_functions', 'set_abortion_act');
  if (((s as any).experimentQW ?? 0)?.['discovered'] === 1) {
    scene.text('In the far corner you spot the entrance to a signup area for <a href="#" onclick="window.__gameStore.setState((s) => { (s.experimentQW ??= {})/u0027discovered/u0027 = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027city_experimental_trials/u0027, /u0027front_desk/u0027); return false;">experimental trials</a>.');
  } else {
    if (((s as any).experimentQW ?? 0)?.['discovered'] === 10) {
      scene.text('In the far corner you spot the entrance to a signup area for <a href="#" onclick="window.__gameStore.setState((s) => { (s.experimentQW ??= {})/u0027discovered/u0027 = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027city_experimental_trials/u0027, /u0027front_desk/u0027); return false;">experimental trials</a>. That must be the place your <i>husband</i> told you about.');
    } else {
      if (((s as any).experimentQW ?? 0)?.['discovered'] === 2) {
        scene.actions([
          { label: 'Go to the medical trials reception desk', goto: ['city_experimental_trials', 'front_desk'] },
        ]);
      }
    }
  }
  if (((s as any).preg ?? 0) === 2) {
    scene.actions([
      { label: 'Give birth', handler: (st: GameState) => {
    qspCall(st, 'medical_din', 'give_birth');
    scene.actions([
      { label: 'Return to the entrance', goto: ['city_clinic', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).sick ?? 0) <= 0  &&  ((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).ninelsex ?? 0) >= 1  &&  ((s as any).ninelday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Look for Dr. Ninel', handler: (st: GameState) => {
    (st as any).ninelday = ((st as any).daystart ?? 0);
    (st as any).ninelrand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).ninelrand ?? 0))) {
      scene.text('Reception informs you that Dr. Ninel is in her office.');
      scene.actions([
        { label: 'Go to Dr. Ninel', goto: ['city_clinic', 'ninel3'] },
      ]);
    } else {
      if (((st as any).ninelrand ?? 0) === 1) {
        scene.text('Reception informs you that Dr. Ninel can\'t see you today.');
        scene.actions([
          { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
        ]);
      } else {
        if (((st as any).ninelrand ?? 0) === 2) {
          scene.text('Reception informs you that Dr. Ninel is making house calls today.');
          scene.actions([
            { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  if (((s as any).cumcondslip ?? 0) > 0  &&  ((s as any).cumcondslip_aware ?? 0) > 0) {
    scene.actions([
      { label: 'See a doctor now (urgent)', handler: (st: GameState) => {
    qspGoto(st, 'city_clinic', 'drPP');
  } },
    ]);
  }
  if (((s as any).katjob ?? 0) > 0) {
    scene.actions([
      { label: 'Visit the chief doctor', goto: ['city_clinic', 'glavdoc'] },
    ]);
  }
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'City Dentist', 'a dentist'):
  if (qspFunc(s, 'appointments', 'get_state', 'City Dentist', '') === 'none') {
    scene.text('"I would like to book an appointment with a dentist, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with a dentist," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  (s as any).reception_category = 'City Dentist';
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'City Optometrist', 'an optometrist'):
  if (qspFunc(s, 'appointments', 'get_state', 'City Optometrist', '') === 'none') {
    scene.text('"I would like to book an appointment with an optometrist, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with an optometrist," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  (s as any).reception_category = 'City Optometrist';
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'See a cosmetic surgeon', goto: ['city_clinic', 'cosmetic1'] },
    { label: 'Go to the STD clinic', goto: ['city_clinic', 'stdclinic'] },
  ]);
  scene.build();
}

function enterStdclinic(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_arg = ((s as any).locArgs?.[0] ?? 0);
  scene.text('<center>The STD Clinic</center>');
  scene.text('You notice an advertisement In the waiting room.');
  scene.text('  Private Sexually Transmitted Disease Clinic provides the following test and treatments.');
  // TODO-QSP: '    STD test - ' + $func('money', 'string_price', 1000)
  // TODO-QSP: dynamic text: '    Complete cure for herpes - ' + $func('money', 'string_price', 45000) + '.'
  scene.text('    Complete cure for herpes - 45000₽.');
  // TODO-QSP: dynamic text: '    Complete cure of syphilis - ' + $func('money', 'string_price', 1000) + '.'
  scene.text('    Complete cure of syphilis - 1000₽.');
  // TODO-QSP: dynamic text: '    Complete cure for yeast infection - ' + $func('money', 'string_price', 1500...
  scene.text('    Complete cure for yeast infection - 15000₽.');
  scene.text('  Treatment requires hospitalization on first Monday of each month.');
  qspCall(s, 'clinic_functions', 'set_std_herpes_shot_act');
  qspCall(s, 'clinic_functions', 'set_std_gonorrhea_shot_act');
  qspCall(s, 'clinic_functions', 'set_std_syphilis_shot_act');
  if (((s as any).week ?? 0) === 1  &&  ((s as any).day ?? 0) <= 10) {
    qspCall(s, 'clinic_functions', 'set_std_herpes_cure_act');
    qspCall(s, 'clinic_functions', 'set_std_yeast_cure_act');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_clinic', 'start'] },
    { label: 'Get tested for STDs', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 1000);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStdcheck(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterStdcheck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/bg28qy97.jpg');
  scene.text('After waiting for some time, you get to see the doctor, who asks you to undress.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/cj53ti24.jpg');
    scene.text('You undress and the doctor asks you lie on the table.');
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/gy93cr29.jpg');
    scene.text('You lie on the table and wait as the doctor makes his preparations for the tests.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/zw61kh75.jpg');
    scene.text('The doctor first monitors your heart rate, then checks your breasts for lumps.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/bn72qy99.jpg');
    scene.text('The doctor examines your genitals externally and internally, carrying out several tests.');
    if (qspFunc(s, 'money', 'can_afford', 10000) === 1  &&  (Math.floor(Math.random() * 100) + 1) >= 97) {
      scene.img('images/locations/city/residential/clinic/gy93cr29.jpg');
      scene.text('While you\'re lying on the examination table staring at the ceiling, you notice the hidden camera in the corner.');
      scene.actions([
        { label: 'Ask him why he\'s filming your examination', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/bg28qy97.jpg');
    scene.text('The doctor, unfazed, speaks in a calm voice. "Oh, you noticed that, huh? The camera is there for your safety as well as mine, miss. I\'ve been accused of molestation before. Then it hit me: people on the internet pay good money to see my examinations! Two birds with one stone, right?"');
    // TODO-QSP: dynamic text: 'After a moment of silence, he grins. "Okay… Since you spotted the camera, I''ll...
    scene.text('After a moment of silence, he grins. "Okay… Since you spotted the camera, I\'ll offer you a choice. If you give me 10000₽, I\'ll delete the footage as if you were never here. I\'d be losing a lot of income, so that\'s only fair."');
    // TODO-QSP: dynamic text: 'Before you can reply, he continues. "Or if you don''t mind being watched by a f...
    scene.text('Before you can reply, he continues. "Or if you don\'t mind being watched by a few thousand people who you\'ll probably never meet anyway, I can give you… 3000₽ to keep quiet. It\'s your call."');
    scene.actions([
      { label: 'Pay him to delete the footage', goto: ['city_clinic', 'ven1'] },
      { label: 'Take the bribe', goto: ['city_clinic', 'ven2'] },
      { label: 'Threaten to report him', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/bg28qy97.jpg');
    scene.text('The doctor brings his face very close to yours. "Look at where you are, bitch!" he hisses. "You better shut your fucking mouth right now! I can make you disappear just like THAT and everyone would be none the wiser!" He snaps his fingers for emphasis. "I made you a very generous offer, so don\'t make me regret it. An unfortunate \'complication\' is easy to arrange…"');
    scene.text('He then sighs. "Anyway, let\'s forget what you just said and start over. Are you going to compensate me for having to delete the footage?"');
    scene.actions([
      { label: 'Pay him to delete the footage', goto: ['city_clinic', 'ven1'] },
      { label: 'Take the bribe', goto: ['city_clinic', 'ven2'] },
      { label: 'Try to escape', goto: ['city_clinic', 'ven3'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).Venera ?? 0) > 0  ||  ((st as any).Kandidoz ?? 0) > 10) {
        scene.text('The doctor frowns and tells you that the test did not go well.');
        if (((st as any).GerpesOnce ?? 0) === 1) {
          scene.text('"You have genital herpes. The cure for this disease is very expensive, but it\'s only active some of the time."');
          if (((st as any).Gerpes ?? 0) >= 3) {
            if ((!((st as any).GerpesNapr ?? 0))) {
              (st as any).GerpesNapr = 3 + qspFunc(s, 'money', 'string_price', 450) + '."';
            } else {
              if (((st as any).GerpesNapr ?? 0) > 0) {
                scene.text('"You need to see the nurse for your herpes injections."');
              }
            }
          } else {
            scene.text('"Your herpes are in an inactive stage. Take vitamins and it won\'t show itself."');
          }
        }
        if (((st as any).SifacOnce ?? 0) === 1) {
          (st as any).sifNapr = 1;
          // TODO-QSP: dynamic text: '"You have syphilis. The cure for this disease used to be expensive. However, th...
          scene.text('"You have syphilis. The cure for this disease used to be expensive. However, this deadly disease can now be with a single shot. The injection will cost 1000₽."');
        }
        if (((st as any).TriperOnce ?? 0) === 1) {
          scene.text('"We found gonorrhea. In principle, this disease is curable."');
          if ((!((st as any).TriperNapr ?? 0))) {
            (st as any).TriperNapr = 5 + qspFunc(s, 'money', 'string_price', 750) + '."';
          } else {
            if (((st as any).TriperNapr ?? 0) > 0) {
              scene.text('"You need to see the nurse for your gonorrhea injections."');
            }
          }
        }
        if (((st as any).KandidozOnce ?? 0) === 1) {
          scene.text('"You have a yeast infection. The cure for this disease is very expensive, but it\'s not that harmful and can easily be suppressed."');
          if ((!((st as any).KandidNapr ?? 0))) {
            (st as any).KandidNapr = 1;
            scene.text('"You can buy pills in the pharmacy."');
          }
          if (((st as any).Kandidoz ?? 0) < 30) {
            scene.text('"Your yeast infection is currently in remission, so take vitamins and it will stay that way."');
          }
        }
      } else {
        scene.text('The doctor is pleased to inform you that you don\'t have a sexually transmitted disease.');
      }
      scene.actions([
        { label: 'Leave', goto: ['city_clinic', 'stdclinic'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterYeastCure(s: GameState, scene: SceneBuilder): void {
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).KandidozOnce = 0;
  (s as any).Kandidoz = 0;
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your yeast infection.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterHerpesCure(s: GameState, scene: SceneBuilder): void {
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).GerpesOnce = 0;
  (s as any).Gerpes = 0;
  (s as any).OrHerpes = 0;
  (s as any).GenHerpes = 0;
  (s as any).Venera = ((s as any).Venera ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your herpes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterVen1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 10000);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/gy93cr29.jpg');
  scene.text('You lie down, almost crying, mulling over the doctor\'s words again and again in your head. You know it\'s not fair, but you can\'t allow these images to go public and decide to pay him to delete the footage.');
  scene.text('You pull the money from your purse and give it to him, hoping he\'ll stay true to his word…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterVen2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 3000, 'cash');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/gy93cr29.jpg');
  scene.text('You lie down, almost crying, mulling over the doctor\'s words again and again in your head. After a while, you decide that you want the money. You probably won\'t be recognized, and even if you are, you can always pretend you didn\'t know you were being filmed.');
  scene.text('The doctor seems somewhat surprised to hear your answer, but gives you the money as promised. "Don\'t worry," he grins. "Most of my subscribers don\'t live in the city. Maybe a hundred, tops. What are the odds of you running into one of them over the coming weeks?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave his office', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterVen3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('The only thing you want to do now is get out of here! You can file a complaint later…');
  scene.text('"Stop her! Stop her right now, she\'s dangerous!" the doctor yells as you head for the door, trying to escape. Unfortunately for you, several staff members happened to be in the hallway as you tried to make your escape, who instantly spring to their colleague\'s aid.');
  scene.text('The doctor is only a few steps behind you, planting a syringe in your neck and injecting you before you can tell them what\'s happening. As your vision goes blurry and your body goes limp, you can hear the doctor. "That was close… Not well in the head… Has fits of violent rage… Drug addiction! I can take it from here."');
  scene.text('He scoops you up in his arms and carries your limp body back to his office. "Yet another overdose victim, so sad…" he mumbles to himself once the door is closed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gameover', 'force', '9'] },
  ]);
  scene.build();
}

function enterDrPP(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 8) + 3));
  qspCall(s, 'stat', '');
  scene.text('You sit in the corridor with coughing and sick old women, waiting for your appointment.');
  scene.text('Finally, it\'s your turn.');
  // TODO-QSP: end
  scene.actions([
    { label: 'See the doctor', handler: (st: GameState) => {
    // TODO-QSP: $ImageNeededPlacholder
    if ((!((st as any).drPP ?? 0))) {
      scene.text('A timely, old bald man sits at the desk. "What seems to be the problem, dear?" he asks while adjusting his glasses.');
    }
    if (((st as any).drPP ?? 0) === 1) {
      scene.text('The doctor is sitting at his desk. He smiles at you. "Hello, are you unwell?"');
    }
    (st as any).drPP = 1;
    scene.text('"Hello, doctor," you reply.');
    scene.text('"What are the symptoms?" he asks.');
    if (((st as any).cumcondslip ?? 0) > 0  &&  ((st as any).cumcondslip_aware ?? 0) > 0) {
      scene.actions([
        { label: 'Explain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"Well, Doctor, I feel nauseous during the day."');
    scene.text('"Do you have a ghostly sensation deep inside?"');
    scene.text('"Yes, a little."');
    scene.text('"Well, let\'s take a look at you."');
    scene.actions([
      { label: 'Get examined', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'cum_cleanup', 'cleanloc', 17);
    (st as any).cumcondslip = 0;
    qspCall(st, 'stat', '');
    scene.text('The doctor quickly examines you, and establishes that you\'re suffering from toxic shock from a spent condom in your body.');
    scene.text('"I removed the condom as soon as I found it. You might still feel sick for some time, but the feeling should slowly subside," he explains.');
    scene.text('You thank the doctor before leaving.');
    scene.actions([
      { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Explain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('"I think it\'s a cold since I have a blocked nose, sore throat and a cough."');
    scene.text('"Do you have a temperature?"');
    scene.text('"Yes, I\'m a little hot."');
    scene.text('"Well, let\'s take a look at you."');
    scene.actions([
      { label: 'Get examined', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.img('images/locations/shared/apartment/event/sick/ninel03.jpg');
    scene.text('The doctor listens to your lungs, looks down your throat and sticks a thermometer in your mouth.');
    scene.text('"Don\'t worry, it\'s just the common cold. Get some vitamins at the drug store, have a couple days of bed rest and everything will be fine. Make sure to keep warm!"');
    scene.text('You thank the doctor before leaving.');
    scene.actions([
      { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNinel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 13) + 3));
  qspCall(s, 'stat', '');
  scene.text('You sit in the corridor with sick old women who are coughing, waiting for your appointment.');
  scene.text('Finally, it\'s your turn.');
  // TODO-QSP: end
  scene.actions([
    { label: 'See the doctor', handler: (st: GameState) => {
    if ((!((st as any).ninelmet ?? 0))) {
      scene.text('A pretty young girl, in a light robe, sits at the desk. The robe is unbuttoned so that it does not hide her breasts. "Hello, my name is Ninel Pavlovna. I\'m replacing your local physician," she says while scrutinizing you.');
    }
    if (((st as any).ninelmet ?? 0) === 1) {
      scene.text('Ninel is sitting at her desk. She smiles at you. "Hello, dear."');
    }
    if (((st as any).pcs_horny ?? 0) < 30) {
      scene.actions([
        { label: 'Greet doctor', handler: (st: GameState) => {
    (st as any).ninelmet = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/residential/clinic/sex/exam00.jpg');
    scene.text('"Good afternoon. What are the symptoms?"');
    scene.text('"I think it\'s a cold since I have a blocked nose, sore throat and a cough."');
    scene.text('"Do you have a temperature?');
    scene.text('"Yes, I\'m a little hot."');
    scene.text('"I\'ll need to examine you. Undress."');
    scene.actions([
      { label: 'Get examined', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.img('images/locations/city/residential/clinic/sex/exam01.jpg');
    scene.text('The doctor listens to your lungs, looks down your throat and sticks a thermometer in your mouth.');
    scene.text('"Don\'t worry, it\'s just a common cold. Buy some vitamins at the drug store, have a couple days of bed rest and everything will be fine. Make sure to keep warm."');
    scene.text('You thank the doctor before leaving.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hello, Doctor', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam10.jpg');
    scene.text('"Good afternoon. What are the symptoms?"');
    scene.text('"I think it\'s a cold since I have a blocked nose, sore throat and a cough."');
    scene.text('"Do you have a temperature?"');
    scene.text('"Yes, I\'m very hot."');
    scene.text('"Undress. Fully."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/residential/clinic/sex/exam12.jpg');
    scene.text('You stand before the doctor completely naked and try to cover yourself with your hands.');
    scene.text('The doctor looks at you and gently places her hands on your shoulders.');
    scene.text('"No need to be shy. I\'m a doctor. What\'s your name?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>…"
    scene.text(`"${((st as any).pcs_nickname ?? '')}…"`);
    // TODO-QSP: dynamic text: "Trust me, <<$pcs_nickname>>. I will heal you. First, you need to breathe deeply...
    scene.text(`"Trust me, ${((st as any).pcs_nickname ?? '')}. I will heal you. First, you need to breathe deeply…"`);
    scene.actions([
      { label: 'Breathe', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '1', 'Doctor Ninel', 32);
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam13.jpg');
    scene.text('Dr. Ninel listens to your lungs. Her hands are light and gentle, pressing the stethoscope against your chest.');
    scene.text('To your surprise, this is quite erotic.');
    scene.text('"There we go. Now open your mouth and say ah…"');
    scene.actions([
      { label: 'Ah', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam14.jpg');
    scene.text('You open your mouth and the doctor examines your throat. Did she stick her tongue out at you?');
    scene.text('"Okay. Now let\'s take your temperature. Sit on the couch and spread your legs."');
    scene.text('"Why?"');
    scene.text('"I need to measure rectally as your throat is inflamed."');
    scene.text('The fear on your face is palpable.');
    scene.text('"Don\'t worry, it doesn\'t hurt."');
    scene.actions([
      { label: 'Sit on couch', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam15.jpg');
    scene.text('The doctor arranges your position on the couch, much to your embarrassment. She smears lubricant between your legs and gently sticks a thermometer into your ass. It doesn\'t hurt: in fact, it\'s actually quite pleasant.');
    scene.text('The doctor slowly move the thermometer back and forth in your ass while her other hand appears to stroke your pussy. Thanks to her dexterous fingers, her touch is so gentle you aren\'t sure if she\'s actually doing it.');
    scene.text('Either way, you\'re getting more excited. Your nipples harden and your pussy is getting wet…');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'sub');
    qspCall(st, 'arousal', 'anal_dildo', (-10), 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'This doesn\'t seem normal', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam16.jpg');
    scene.text('The doctor takes the thermometer out of your ass and starts to openly caress your pussy.');
    scene.text('You\'re confused and horrified by her behavior, but she\'s so gentle and you\'re so excited that you simply can\'t resist.');
    scene.text('"Doctor, what are you doing? What\'s going on?" you just about manage to stutter.');
    scene.text('"There it is! I knew immediately that you were one of us, and therefore I can use my healing powers on you."');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, my special magic is tantric. Heard of it?"');
    scene.text('"No, I\'ve never heard of…"');
    scene.text('"It\'s magic based on sensuality and sex. Roughly speaking, I can cast only when extremely aroused."');
    scene.text('"So…?"');
    scene.text('"Basically, if we have sex, I can heal you. So, can I heal you?"');
    scene.text('"Depends what you want in return."');
    scene.text('"Nothing. Well, not exactly nothing. My gift has a pretty big drawback: I can only have orgasms when I conjure."');
    scene.text('"Then of course I agree."');
    scene.text('"Good. Kneel on the couch."');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Kneel on couch', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam17.jpg');
    scene.text('You kneel down and face away from Ninel as she takes off her robe, revealing her stockings and strap-on.');
    scene.text('Dr. Ninel lubes the dildo up before grinning. "It\'s curing time!"');
    scene.actions([
      { label: 'Brace yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = Math.max(100, ((st as any).pcs_horny ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam18.jpg');
    scene.text('Shes drives the dildo into your pussy with an unnatural amount of strength, causing you to gasp in surprise.');
    scene.text('Ninel starts fucking you confidently, moaning with every jolt. The unusual situation and Ninel\'s skill quickly brings you to your peak.');
    qspCall(st, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride the wave!', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam19.jpg');
    scene.text('"I\'m going to cum!" you shout. "Don\'t stop!"');
    scene.text('Ninel rolls onto the couch, pulling you with her. You find yourself on top and start frantically bouncing on her fake cock, screaming and grinding in almost unbearable pleasure.');
    scene.text('You soon cum, screaming and twitching in an incredibly long orgasm.');
    scene.text('"Now it\'s my turn," Ninel says beneath you.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return the favor', handler: (st: GameState) => {
    (st as any).ninelsex = ((st as any).ninelsex ?? 0) + (1);
    if (((st as any).ninelsex ?? 0) === 1) {
      (st as any).girl = ((st as any).girl ?? 0) + (1);
    }
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).sick = 0;
    (st as any).pcs_health = ((st as any).pcs_vital ?? 0) * 10 + ((st as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam19a.jpg');
    scene.text('Ninel removes the strap-on and you press your face to her soaking wet pussy. It doesn\'t take long for your efforts to bring Ninel to orgasm. She screams and digs her nails into her knees as your face is covered by her squirting orgasm.');
    qspCall(st, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam11.jpg');
    scene.text('With trembling hands, you start to pull on your panties. Ninel has already slipped her robe back on, only her flushed face betraying her apparent innocence.');
    scene.text('"So? How do you feel?"');
    scene.text('"Ooh… just perfect," you answer and only then realize how right you are. The sickness has disappeared and you\'re fully healthy and in good spirits. Even your mood has improved.');
    scene.text('"Well, you see. It\'s magic, baby. Mm-m… You\'re especially full of it, I don\'t normally get so much pleasure. If you get sick again, please do come and see me again."');
    scene.text('You clean up and leave, Ninel smiling at you as you leave.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterNinel2(s: GameState, scene: SceneBuilder): void {
  scene.text('You go to the waiting room and Ninel contemptuously ignores the old ladies sitting in the hallway, "No line, come into the office."');
  // TODO-QSP: end
  scene.actions([
    { label: 'See Dr. Ninel', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam00.jpg');
    scene.text('Ninel looks up from some medical notes and smiles,');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>. Are you sick again?"
    scene.text(`"Hello ${((st as any).pcs_nickname ?? '')}. Are you sick again?"`);
    scene.text('You cough. "Yeah. Shall we?"');
    scene.text('"Sure. Undress, I need to examine you first."');
    scene.text('"Why? You\'re magic."');
    scene.text('"Silly. How can you know so little about magic? I have to know what I\'m treating, or I\'m just as likely to do more harm than good. Magic has a very focused effect."');
    scene.text('"Well, in that case…" you respond.');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    scene.img('images/locations/city/residential/clinic/sex/exam02.jpg');
    scene.text('You undress and Ninel listens to your lungs. As usual, her arms are light and tender and her stethoscope on your chest has you feeling hot.');
    scene.text('"Yeah, you\'re wheezing alright. Say \'aaah\'."');
    scene.actions([
      { label: 'Ah', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam03.jpg');
    scene.text('You open your mouth and Ninel inspects inspects your sore throat.');
    scene.text('"This looks familiar. It\'s a cold, no question about it. Do you have a temperature?"');
    scene.text('You smile. "Hot."');
    scene.text('"You\'ll like this." Ninel rolls you onto your side and tells you to pull your knees up to your chest.');
    scene.actions([
      { label: 'Hug your knees', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '1', 'Doctor Ninel', 32);
    scene.img('images/locations/city/residential/clinic/sex/exam04.jpg');
    scene.text('You assume the position and Ninel starts fucking your ass with her thermometer. You get excited and moan softly as your pussy gets wet.');
    scene.text('"Oh, does baby like it? Come on, let\'s see how much."');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'anal_dildo', (-10), 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Roll over', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam06.jpg');
    scene.text('You roll over onto your back and hold your the legs. Ninel gets a speculum and gently slides it into your vagina. You quietly groan from the stimulation and Ninel echoes your passionate with a heavy sigh.');
    scene.text('It looks like your wide-open vulva is massively turning her on.');
    qspCall(st, 'arousal', 'vaginal_dildo', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Oh-h…!', handler: (st: GameState) => {
    (st as any).pcs_horny = Math.max(100, ((st as any).pcs_horny ?? 0));
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam05.jpg');
    scene.text('Overcome with passion, Ninel quickly takes off her robe, pulls out her strap-on from her desk and brings it to your lips.');
    scene.text('You eagerly suck it while Ninel\'s skilled fingers play with your clit, causing warm waves of pleasure to run through your body.');
    scene.text('"Fuck me! Now!" you cry out and Ninel grins, continuing to tease your clitoris with her hand.');
    scene.text('"Ask nicely."');
    scene.text('"Fuck me. I mean, please fuck me."');
    scene.text('"I\'m not convinced. Politely beg for it."');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', (-15), 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Beg for it', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam07.jpg');
    scene.text('"Please, please! Fuck me! Do with me what you want with me, Dr. Ninel! I\'m all yours! Just please fuck me!"');
    scene.text('Ninel puts on the strap-on and aggressively drives it home, your bosom blazes with lust as you cry out and lift your feet up, trying to take as much of the dildo as possible.');
    scene.text('Ninel fucks you faster, moaning and groaning with every jolt, and you moan and clearly struggle.');
    scene.text('"On your knees! Turn around!" she orders.');
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'sub', 'lesbian', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    (st as any).sick = 0;
    (st as any).pcs_health = ((st as any).pcs_vital ?? 0) * 10 + ((st as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/exam08.jpg');
    scene.text('Moaning with excitement, you get on your knees and lift your ass to Ninel, but she\'s in no hurry.');
    scene.text('"Come on, take me! Please, I\'m almost there!"');
    scene.text('"Beg!" she orders. "You need to convince me!"');
    scene.text('"Please fuck me" you cry. "Fuck me! I want to cum! Yes, I\'m a whore, your little girl, but please, please, let me finish!"');
    scene.text('The strap-on pushes into your pussy and Ninel goes at it like a jackhammer. You quickly explode in a wild orgasm, screaming in ecstasy.');
    scene.text('Your knees buckle and you fall to the floor, shuddering in the throes of sensual release. Ninel just watches as your orgasm seems to last forever…');
    scene.text('"Now you will appease me, my little slut. Come on, you know how!" Ninel commands.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Oblige', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam09.jpg');
    scene.text('She helps you up, then pushes you backwards on to the couch. Removing the strap-on, Ninel climbs over you and sits on your face.');
    scene.text('You diligently use your tongue and lips to serve her wide-open pussy and swollen clit. She is screaming and sobbing, rubbing her crotch all across your face, until she finally cums.');
    scene.text('She cums with a long, yelling, shaking fervor and abundantly fills your face with her juices.');
    qspCall(st, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wow', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam09a.jpg');
    scene.text('When she finishes, Ninel slowly dresses, showing you her perky body. You can feel your excitement returning…');
    scene.text('Ninel sees this and smiles. "Oh, no. Enough is enough, but you come in another time for something else and we\'ll have some fun…"');
    scene.text('You\'re healthy and satisfied, thanks to Ninel.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Thank her and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNinel3(s: GameState, scene: SceneBuilder): void {
  scene.text('You go to the waiting room and Ninel contemptuously ignores the old ladies sitting in the hallway, "No line, come into the office."');
  // TODO-QSP: end
  scene.actions([
    { label: 'See Dr. Ninel', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/exam10.jpg');
    scene.text('Ninel looks up from some medical notes and smiles.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>. Sick again?"
    scene.text(`"Hello ${((st as any).pcs_nickname ?? '')}. Sick again?"`);
    scene.text('"Oh doctor, my pussy is burning and leaking juices! Perhaps I\'m seriously ill…"');
    scene.text('"My poor child. Whatever are we going to do?"');
    scene.actions([
      { label: 'Tear off your clothes', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/polsex01.jpg');
    scene.text('Groaning with impatience, you tear off your clothes and Ninel takes off her robe. Her strap-on hangs in your face.');
    scene.text('"Suck it. Make it hot and wet, just like you."');
    scene.text('You wrap your lips around the dildo and start sucking, exciting Ninel.');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck me!', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/polsex02.jpg');
    scene.text('Remembering that Ninel loves to hear you beg her to fuck you, you don\'t even need to pretend the desire is literally burnt into you. You beg and plead and Ninel finally heeds your request.');
    scene.text('She shoves you onto your knees and starts driving the strap-on firmly into your eager pussy. You let out screams of pleasure as you feel your legs weakening.');
    qspCall(st, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fall on the couch', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/polsex03.jpg');
    scene.text('You fall on the couch, but Ninel pulls you on your side and continues. You loudly moan as a deep and bestial growl escapes from her lungs.');
    scene.text('"My God, you as well."');
    scene.text('"I can\'t… It\'s too much…"');
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride her', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/sex/polsex04.jpg');
    scene.text('You obediently change position and Ninel lies back on the couch as you straddle her and slide back down onto her strap-on.');
    scene.text('You bounce up and down on the strap-on, squealing and fingering your clit while Ninel starts to twitch and moan.');
    scene.text('For a few seconds, you\'re competing with Ninel in screams of passion before you fall back on the couch, exhausted.');
    scene.text('"Thanks doc. That was great…"');
    // TODO-QSP: dynamic text: "Do come again, <<$pcs_nickname>>."
    scene.text(`"Do come again, ${((st as any).pcs_nickname ?? '')}."`);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 10, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Freshen up and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGlavdoc(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).job_status ?? 0)?.['city_hospital_nurse'] === '') {
    scene.text('You enter the chief of staff\'s office and ask him about the job.');
    scene.text('The chief of staff looks at you. "Oh, you must be the girl Kat was talking about. I don\'t have much time, so I\'ll keep it short and take her word that you have the necessary experience."');
    // TODO-QSP: dynamic text: 'He continues. "You''ll work five days per week, Mondays to Fridays. Your shift ...
    scene.text('He continues. "You\'ll work five days per week, Mondays to Fridays. Your shift begins between 8:00 and 9:00, and finishes around 16:00. Miss a day and you don\'t get paid. You\'ll get \' + $func(\'money\', \'string_profit\', 1500) + \' per shift, and your salary will be deposited onto your back account on the 25th of the month."');
    scene.text('He looks at his watch again and shrugs. "You can sort out the rest of the details with the personnel department later. Do you want the job?"');
  } else {
    scene.text('You step into the office of the chief of staff.');
    // TODO-QSP: dynamic text: He looks up at you from his paperwork and smiles. "Ah, Ms. <<$pcs_lastname>>, ni...
    scene.text(`He looks up at you from his paperwork and smiles. "Ah, Ms. ${((s as any).pcs_lastname ?? '')}, nice to see you! To what do I owe the pleasure?"`);
  }
  if (((s as any).job_status ?? 0)?.['city_hospital_nurse'] === '') {
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_hospital_nurse') === 1) {
      scene.actions([
        { label: 'Take the job', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'city_hospital_nurse');
    scene.text('You shake his hand and sort out the paperwork with the personnel department afterwards. Whatever Kat told them must\'ve worked since none of them ask any questions about your credentials.');
    scene.text('When you leave the office, you\'re holding a shiny new employee pass and a booklet with the relevant information.');
    scene.actions([
      { label: 'Return to the lobby', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Unfortunately, the shift times conflict with your existing schedule.');
    }
  }
  if (((s as any).job_status ?? 0)?.['city_hospital_nurse'] === 'employed') {
    scene.actions([
      { label: 'Quit your job', goto: ['city_clinic', 'discharge'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterBeginwork(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/city/residential/clinic/hospital.jpg');
  scene.text('You enter the clinic and get ready for a new work day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start work', handler: (st: GameState) => {
    if (((st as any).job_last_work_day ?? 0)?.['city_hospital_nurse'] === ((st as any).daystart ?? 0)) {
      scene.text('You have already worked your shift today.');
      scene.actions([
        { label: 'Return to the lobby', goto: ['city_clinic', 'start'] },
      ]);
    } else {
      qspCall(st, 'jobs', 'clock', 'city_hospital_nurse');
      qspGoto(st, 'WorkHosp', 'start');
    }
  } },
    { label: 'Quit your job', goto: ['city_clinic', 'discharge'] },
  ]);
  scene.build();
}

function enterDischarge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_hospital_nurse', 'bank');
  qspCall(s, 'jobs', 'set_terminated', 'city_hospital_nurse');
  scene.text('The chief of staff looks disappointed. "So you\'re leaving us, huh? That\'s a shame. Here is your outstanding pay and your employment history. Take care."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/sex/hospsex1.jpg');
  scene.text('During the examination, the doctor starts to flirt with you and touch you longer than is necessary, clearly trying to start something intimate.');
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_clinic', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have some fun', handler: (st: GameState) => {
    (st as any).picrand = 11;
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    qspCall(st, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspGoto(st, 'sex', 'var');
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/sex/hospsex2.jpg');
  scene.text('You\'re examined by two doctors who touch you everywhere, clearly going beyond what is permitted.');
  qspCall(s, 'willpower', 'sex', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Storm out', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Storm out', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_clinic', 'start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have some fun with them', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
    // TODO-QSP: $boy[0] = $npclastgenerated
    qspCall(st, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
    // TODO-QSP: $boy[1] = $npclastgenerated
    (st as any).picrand = 11;
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspGoto(st, 'sexdvoe', 'var');
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/sex/hospsex3.jpg');
  scene.text('Heading into the office, you catch a nurse kneeling before the doctor with his cock in her mouth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_clinic', 'start'] },
    { label: 'Walk in', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/hospsex4.jpg');
    scene.text('As you walk in, the doctor runs out and the startled nurse glares at you. After a moment, her eyes light up and she removes her robe before walking over to you and grabbing your ass and breast.');
    qspCall(st, 'willpower', 'cuni', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_clinic', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0', 'Doctor', (Math.floor(Math.random() * 21) + 28));
    qspCall(st, 'npcStat', '$npclastgenerated');
    qspCall(st, 'npcgeneratec', '1', 'Nurse', (Math.floor(Math.random() * 21) + 28));
    qspCall(st, 'npcStat', '$npclastgenerated', 'a');
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    scene.img('images/locations/city/residential/clinic/sex/hospsex5.jpg');
    scene.text('She pulls down your clothes and bends you over the couch before she starts pleasuring your pussy with her tongue.');
    qspCall(st, 'arousal', 'cuni', 10, ((st as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/clinic/sex/hospsex6.jpg');
    scene.text('You lay her on the couch and sink your lips into her pussy, the smell of it driving you crazy. You\'re found in this state by the returning doctor.');
    qspCall(st, 'arousal', 'cuni_give', 10, ((st as any).npcID1 ?? 0), 'lesbian', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Threesome', handler: (st: GameState) => {
    (st as any).picrand = 11;
  }, goto: ['podrsex', 'suck'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCosmetic1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_clinic', 'cosmetic1');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmetic1.jpg');
  scene.text('You\'re greeted by a nurse who explains what procedures are available.');
  scene.text('"Electrolysis will remove your body hair and stop it from growing."');
  scene.text('"Fillable breast implants allow you to fill them after the surgery. We stock silicone you use to fill them."');
  scene.text('"String implants slowly absorb your body fluids and grow larger over time. We can also drain it for you if it becomes too large."');
  qspCall(s, 'clinic_functions', 'set_electrolysis_act');
  qspCall(s, 'clinic_functions', 'set_lip_enlargement_act');
  qspCall(s, 'clinic_functions', 'set_lip_reduction_act');
  qspCall(s, 'clinic_functions', 'set_eye_enlargement_act');
  qspCall(s, 'clinic_functions', 'set_eye_reduction_act');
  qspCall(s, 'clinic_functions', 'set_liposuction_act');
  qspCall(s, 'clinic_functions', 'set_remove_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_small_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_medium_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_large_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_XXL_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_fillable_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_get_string_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_drain_string_breast_implant_act');
  qspCall(s, 'clinic_functions', 'set_buy_silicone_bag_act');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkAdvertisement(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/milkbank/milk_advertisement.jpg');
  scene.text('The advertisement says that a breast milk bank has opened.');
  scene.text('You go through the brochure for a moment and see that they\'re paying money for breast milk. It looks like this clinic is accepting donations.');
  if (((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    scene.text('Maybe you should consider donating your breast milk?');
  } else {
    scene.text('You\'re not sure why this caught your attention.');
  }
  if (((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] < 1) {
    ((s as any).lact_ev = (s as any).lact_ev ?? {})['pcs_knows_milkbank'] = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkReception(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/clinic/milkbank/milk_reception.jpg');
  scene.text('The woman at the reception looks at you with an annoyed glare and stands up. "Yes, yes… Go this way."');
  scene.text('She waves into a general direction down the hallway. "There should be a sign on the door. It\'s only a small room."');
  if (((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] < 1) {
    ((s as any).lact_ev = (s as any).lact_ev ?? {})['pcs_knows_milkbank'] = 1;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkDonationRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/milkbank/milkbank_door.jpg');
  scene.text('There\'s a door with a sign on it, indicating this is the office for milk donation.');
  if (((s as any).lactation ?? 0)?.['pc_aware'] > 0  &&  ((s as any).hour ?? 0) < 10  ||  ((s as any).hour ?? 0) > 19) {
    scene.text('The door seems to be locked and nobody is here.');
    // TODO-QSP: dynamic text: 'A sign reads "Opening hours '+func('time', 'get_time_string', 10, 0)+' to '+fun...
    scene.text('A sign reads "Opening hours 10:00 to 19:00 daily.');
  } else {
    if (((s as any).lactation ?? 0)?.['pc_aware'] > 0  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 19) {
      scene.text('The door is open and someone is talking inside.');
      scene.actions([
        { label: 'Go inside', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).lact_ev ?? 0)?.['pcs_milkbank_firsttime'] < 1) {
      scene.img('images/locations/city/residential/clinic/milkbank/milk_nurse.jpg');
      scene.text('As you enter, you see a women sorting small bottles and bags into a fridge.');
      scene.text('"Hello?" you say to get her attention.');
      scene.text('The woman turns around. "Oh hello! I didn\'t notice you there!"');
      scene.text('She smiles happily at you and walks over to a chair, sitting down and signaling you to sit down too.');
      if (((st as any).lactation ?? 0)?.['breastmv'] > ((st as any).lactation ?? 0)?.['breastmm']*6/10) {
        scene.text('She looks you up and down. "Seems like you\'re here for a donation, right?');
        scene.text('You blush, knowing that your breasts feel a bit full today, and answer with a short nod.');
      } else {
        scene.text('"Are you here for a donation?" she asks.');
        scene.text('"Uhm… Yes," you reply.');
      }
      scene.text('The woman nods happily and takes some papers and a pen out of her desk "First of all, you have to sign this. Then we\'re going to take a sample from you."');
      if (((st as any).pcs_gpolimilkdonation ?? 0) >= 2) {
        scene.text('"Ah yes, okay. I already donated in the Pavlovsk clinic. They did that too."');
        scene.text('"Okay, then you already know what\'s going to happen," the woman replies.');
      } else {
        scene.text('"Sample?" you ask.');
        scene.text('"Yes. We need to pump some milk from your breast to have it analyzed. It\'s not much. Maybe about 50ml."');
        scene.text('You nod at her explanations.');
      }
      scene.text('She gets up and leads you to another room.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/clinic/milkbank/pumping_room.jpg');
    scene.text('"Sit down here. I\'ll prepare the pump and you can prepare yourself."');
    scene.text('You uncover your breasts and the woman puts the suction cups over your nipples.');
    scene.text('She starts the pump up and it starts drawing milk from your breasts.');
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_pumptime'] = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 4, 50);
    if (((st as any).lact_ev ?? 0)?.['poli_pumptime'] > 15) {
      scene.text('After 15 minutes, the woman detaches the pump and tilts her head disappointment.');
      scene.text('"Hmmm… This isn\'t as much as we expected, but it should do."');
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15);
    } else {
      // TODO-QSP: dynamic text: After <<lact_ev[''poli_pumptime'']>> minutes, the woman detaches the pump with a...
      scene.text(`After ${(((st as any).lact_ev ?? 0)?.['poli_pumptime'] ?? '')} minutes, the woman detaches the pump with a smile.`);
      scene.text('"This should be enough."');
      scene.text('She nods and smiles at you.');
      (st as any).minut = ((st as any).minut ?? 0) + ((((st as any).lact_ev ?? 0)?.['poli_pumptime']));
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = qspFunc(s, 'lact_lib', '$get_breastmilk', 4, (((st as any).lact_ev ?? 0)?.['poli_pumptime']));
    }
    scene.img('images/locations/city/residential/clinic/milkbank/small_sample.jpg');
    scene.text('The woman takes your pumped milk and signals you to cover up.');
    scene.text('"Okay, we\'ll have this sample checked and you can come back later."');
    if (((st as any).pcs_mass ?? 0)?.['body'] > 40) {
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_fat'] = (60 + (Math.floor(Math.random() * 10) + 0));
    } else {
      if (((st as any).pcs_mass ?? 0)?.['body'] > 20) {
        ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_fat'] = (45 + (Math.floor(Math.random() * 10) + 0));
      } else {
        if (((st as any).pcs_mass ?? 0)?.['body'] > 15) {
          ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_fat'] = (20 + (Math.floor(Math.random() * 10) + 0));
        } else {
          ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_fat'] = (10 + (Math.floor(Math.random() * 10) + 0));
        }
      }
    }
    if (((st as any).pcs_energy ?? 0) > 30) {
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_sugar'] = (Math.floor(Math.random() * 12) + 69);
    } else {
      if (((st as any).sick ?? 0) > 1) {
        ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_sugar'] = (Math.floor(Math.random() * 46) + 0);
      } else {
        ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_sugar'] = (Math.floor(Math.random() * 25) + 45);
      }
    }
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_sample_vol'] = (((st as any).lact_ev ?? 0)?.['poli_milkedvolume']);
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = 0;
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['pcs_milkbank_firsttime'] = 1;
    scene.actions([
      { label: 'Leave', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    } else {
      qspGoto(st, 'city_clinic', 'milk_bank');
    }
  } },
      ]);
    } else {
      scene.text('You\'re not sure what you want to do here.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkBankGuy(s: GameState, scene: SceneBuilder): void {
  scene.text('content not finished yet');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkBank(s: GameState, scene: SceneBuilder): void {
  scene.text('You walk and see one of the milk donation service employees sitting at the desk.');
  if (((s as any).lactation ?? 0)?.['breastmv'] > ((s as any).lactation ?? 0)?.['breastmm']*6/10) {
    scene.text('"Oh hi! Do you want to donate your breast milk?"');
  } else {
    scene.text('"Oh hi! How can I help you?"');
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    scene.actions([
      { label: 'Donate breast milk', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Of course. Please follow me."');
    scene.actions([
      { label: 'Follow them', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_donatemoney'] = 0;
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_donationsessioncount'] = 0;
    scene.img('images/locations/city/residential/clinic/milkbank/pumping_room.jpg');
    scene.text('The employee leads you into one of the free rooms and invites you to sit down.');
    scene.text('She prepares the breast pump and signals you to prepare yourself.');
    scene.actions([
      { label: 'continue', goto: ['city_clinic', 'milk_donation'] },
    ]);
  } },
      { label: 'Don\'t follow her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Ah sorry! I forgot something and can\'t donate now," you reply.');
    scene.actions([
      { label: 'Leave', goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  (s as any).vmb_i = 0;
  // TODO-QSP: :vmbloop
  if (((s as any).vmb_i ?? 0) <= ((s as any).temp_var ?? 0)) {
    if (((s as any).mbarrloca ?? 0)?.[String((s as any).vmb_i ?? 0)] === 2  ||  ((s as any).mbarrloca ?? 0)?.[String((s as any).vmb_i ?? 0)] === 1) {
      qspCall(s, 'lact_bp', 'update_mbottle', ((s as any).vmb_i ?? 0));
      if (((s as any).mbarrstat ?? 0)?.[String((s as any).vmb_i ?? 0)] === 'fresh'  ||  ((s as any).mbarrstat ?? 0)?.[String((s as any).vmb_i ?? 0)] === 'normal') {
        if (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)] > 0) {
          if (((s as any).mbarrfill ?? 0)?.[String((s as any).vmb_i ?? 0)] <= 1500) {
            // TODO-QSP: temp_small_mbottle_ids[] = vmb_i
          } else {
            // TODO-QSP: temp_medium_mbottle_ids[] = vmb_i
          }
        }
      }
    }
    (s as any).vmb_i = ((s as any).vmb_i ?? 0) + (1);
    // TODO-QSP: jump 'vmbloop'
  }
  if (Object.keys((s as any).temp_small_mbottle_ids ?? {}).length > 0) {
    scene.actions([
      { label: 'Donate a small bottle of milk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).temp_total_pay = 0;
    (st as any).temp_total_milk = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You donated a <<temp_total_milk>> ml of milk and got paid <<$func(''money'', ''s...
    scene.text(`You donated a ${((st as any).temp_total_milk ?? '')} ml of milk and got paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_total_pay ?? ''))}.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    ]);
  }
  if (Object.keys((s as any).temp_small_mbottle_ids ?? {}).length > 4) {
    scene.actions([
      { label: 'Donate 5 small bottles of milk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).temp_total_pay = 0;
    (st as any).temp_total_milk = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'small']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You donated a <<temp_total_milk>> ml of milk and got paid <<$func(''money'', ''s...
    scene.text(`You donated a ${((st as any).temp_total_milk ?? '')} ml of milk and got paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_total_pay ?? ''))}.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    ]);
  }
  if (Object.keys((s as any).temp_medium_mbottle_ids ?? {}).length > 0) {
    scene.actions([
      { label: 'Donate a medium bottle of milk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).temp_total_pay = 0;
    (st as any).temp_total_milk = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You donated a <<temp_total_milk>> ml of milk and got paid <<$func(''money'', ''s...
    scene.text(`You donated a ${((st as any).temp_total_milk ?? '')} ml of milk and got paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_total_pay ?? ''))}.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    ]);
  }
  if (Object.keys((s as any).temp_medium_mbottle_ids ?? {}).length > 4) {
    scene.actions([
      { label: 'Donate 5 medium bottles of milk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).temp_total_pay = 0;
    (st as any).temp_total_milk = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'medium']; enterDonateMilkBottle(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You donated a <<temp_total_milk>> ml of milk and got paid <<$func(''money'', ''s...
    scene.text(`You donated a ${((st as any).temp_total_milk ?? '')} ml of milk and got paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_total_pay ?? ''))}.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Check your file', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/mward/formular.jpg');
    scene.text('The employee hands you a file on how much you have donated so far.');
    scene.text('<br>----------------------------------------');
    scene.text('Analyzed milksample measurements');
    // TODO-QSP: dynamic text: Volume in ml: <<lact_ev[''poli_sample_vol'']/1000>>ml
    scene.text(`Volume in ml: ${(((st as any).lact_ev ?? {})?.['poli_sample_vol'] ?? 0)/1000}ml`);
    // TODO-QSP: dynamic text: Fat in %: <<lact_ev[''poli_sample_fat'']/10>>.<<lact_ev[''poli_sample_fat''] mod...
    scene.text(`Fat in %: ${(((st as any).lact_ev ?? {})?.['poli_sample_fat'] ?? 0)/10}.${(((st as any).lact_ev ?? {})?.['poli_sample_fat'] ?? 0) % 10}%`);
    // TODO-QSP: dynamic text: Lactose in %: <<lact_ev[''poli_sample_sugar'']/10>>.<<lact_ev[''poli_sample_suga...
    scene.text(`Lactose in %: ${(((st as any).lact_ev ?? {})?.['poli_sample_sugar'] ?? 0)/10}.${(((st as any).lact_ev ?? {})?.['poli_sample_sugar'] ?? 0) % 10}%`);
    scene.text('<br>----------------------------------------');
    if (((st as any).lact_ev ?? 0)?.['poli_totalmilkdonation_count'] > 0) {
      scene.text('Total breast milk donation statistics');
      // TODO-QSP: dynamic text: Donated milk volume in liter: <<lact_ev[''poli_totalmilkdonated'']/1000>>.<<$mid...
      scene.text(`Donated milk volume in liter: ${(((st as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0)/1000}.${(String(1000 + ((((st as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0) % 1000)).slice((2)-1, ((2)-1)+(3)))}l`);
      // TODO-QSP: dynamic text: Donation count: <<lact_ev[''poli_totalmilkdonation_count'']>>
      scene.text(`Donation count: ${(((st as any).lact_ev ?? 0)?.['poli_totalmilkdonation_count'] ?? '')}`);
      // TODO-QSP: dynamic text: Average milk volume per donation in ml: <<lact_ev[''poli_totalmilkdonated'']/lac...
      scene.text(`Average milk volume per donation in ml: ${(((st as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0)/(((st as any).lact_ev ?? {})?.['poli_totalmilkdonation_count'] ?? 0)}.${(String(100 + ((100 * (((st as any).lact_ev ?? {})?.['poli_totalmilkdonated'] ?? 0) / (((st as any).lact_ev ?? {})?.['poli_totalmilkdonation_count'] ?? 0)) % 100)).slice((2)-1, ((2)-1)+(2)))}`);
      // TODO-QSP: dynamic text: Paid money: <<$func(''money'', ''string_profit'', lact_ev[''poli_totaldonatemone...
      scene.text(`Paid money: ${qspFunc(s, 'money', 'string_profit', (((st as any).lact_ev ?? 0)?.['poli_totaldonatemoney'] ?? ''))}`);
      scene.text('<br>----------------------------------------');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_clinic', 'milk_donation_room'] },
    ]);
  } },
    { label: 'Leave', goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterMilkDonation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 19) {
    ((s as any).lactation = (s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.img('images/locations/pavlovsk/clinic/mward/pumping.jpg');
    scene.text('The employee attaches the pumps and switches them on.');
    if (((s as any).lactation ?? 0)?.['breastmv'] >= 0) {
      scene.text('Your nipples are worked by the pumps and you feel the pressure in your breasts easing as the pumps drain you of your milk.');
    } else {
      scene.text('Your nipples are worked by the pumps and you feel the pressure in your breasts easing as the pumps drain you. Your breasts tingle from the milk production as the pump demands more of your milk.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15);
    ((st as any).lactation = (st as any).lactation ?? {})['breastpumped'] = 1;
    scene.text('After 15 minutes, the employee detaches the pumps from your breasts.');
    if (((st as any).lact_ev ?? 0)?.['poli_milkedvolume'] >= 50000) {
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_donationsessioncount'] = ((st as any).lact_ev['poli_donationsessioncount'] ?? 0) + ((((st as any).lact_ev ?? {})?.['poli_milkedvolume'] ?? 0)/10000);
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_temp_var'] = ((((st as any).lact_ev ?? {})?.['poli_milkedvolume'] ?? 0)/50000);
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_totalmilkdonation_count'] = ((st as any).lact_ev['poli_totalmilkdonation_count'] ?? 0) + (1);
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_totalmilkdonated'] = ((st as any).lact_ev['poli_totalmilkdonated'] ?? 0) + (((((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50));
      if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 12) {
        // TODO-QSP: dynamic text: She looks astonished at the generous amount of milk as she stores away <<lact_ev...
        scene.text(`She looks astonished at the generous amount of milk as she stores away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
        // TODO-QSP: dynamic text: "I can''t believe you had that much inside you, Ms. <<$pcs_lastname>>!" she laug...
        scene.text(`"I can't believe you had that much inside you, Ms. ${((st as any).pcs_lastname ?? '')}!" she laughs heartily and you feel yourself blushing.`);
      } else {
        if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 10) {
          // TODO-QSP: dynamic text: She looks amazed at the copious amounts of milk as she stores away <<lact_ev[''p...
          scene.text(`She looks amazed at the copious amounts of milk as she stores away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
          scene.text('"Oh my, where do you store all this?"');
        } else {
          if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 8) {
            // TODO-QSP: dynamic text: She looks surprised at the large amount of milk as she stores away <<lact_ev[''p...
            scene.text(`She looks surprised at the large amount of milk as she stores away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
          } else {
            if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 6) {
              // TODO-QSP: dynamic text: She looks pleasantly satisfied at you as she stores away <<lact_ev[''poli_temp_v...
              scene.text(`She looks pleasantly satisfied at you as she stores away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
              // TODO-QSP: dynamic text: "A very generous donation, Ms. <<$pcs_lastname>>."
              scene.text(`"A very generous donation, Ms. ${((st as any).pcs_lastname ?? '')}."`);
            } else {
              if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 4) {
                // TODO-QSP: dynamic text: She looks satisfied at you as she stores away <<lact_ev[''poli_temp_var'']*50>>m...
                scene.text(`She looks satisfied at you as she stores away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
              } else {
                if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] >= 2) {
                  // TODO-QSP: dynamic text: She looks satisfied at you as she puts away <<lact_ev[''poli_temp_var'']*50>>ml ...
                  scene.text(`She looks satisfied at you as she puts away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
                } else {
                  if (((st as any).lact_ev ?? 0)?.['poli_temp_var'] === 1) {
                    scene.text('She looks satisfied at you as she puts away one bottle with 50ml of your breast milk.');
                  } else {
                    // TODO-QSP: dynamic text: She looks satisfied at you as she puts away <<lact_ev[''poli_temp_var'']*50>>ml ...
                    scene.text(`She looks satisfied at you as she puts away ${(((st as any).lact_ev ?? {})?.['poli_temp_var'] ?? 0)*50}ml of your breast milk in ${(((st as any).lact_ev ?? 0)?.['poli_temp_var'] ?? '')} bottles.`);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((st as any).lact_ev ?? 0)?.['poli_milkedvolume'] < 50000  &&  ((st as any).lact_ev ?? 0)?.['poli_milkedvolume'] > 0) {
        scene.text('She looks at you in disappointment.');
        // TODO-QSP: dynamic text: "Mhmm… I''m sorry, but this isn''t enough milk for a valid donation. You only pr...
        scene.text(`"Mhmm… I'm sorry, but this isn't enough milk for a valid donation. You only provided ${(((st as any).lact_ev ?? {})?.['poli_milkedvolume'] ?? 0)/1000}ml of breast milk."`);
      } else {
        scene.text('She looks at you in disappointment.');
        scene.text('"Mhmm… I\'m sorry, but this isn\'t enough milk for a valid donation. You provided no breast milk at all."');
      }
    }
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = 0;
    if (((st as any).lact_ev ?? 0)?.['poli_donationsessioncount'] > 0) {
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_donatemoney'] = ((((st as any).lact_ev ?? {})?.['poli_donationsessioncount'] ?? 0) / 2) * 10;
    } else {
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_donatemoney'] = 0;
    }
    ((st as any).lactation = (st as any).lactation ?? {})['nipple_cream_applied'] = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).lactation ?? 0)?.['breastmv'] > ((st as any).lactation ?? 0)?.['breastmm']/2  &&  ((st as any).lactation ?? 0)?.['breastmv'] >= 100000) {
      scene.text('The employee looks at your breasts.');
      scene.text('"It seems there\'s still some milk left. Do you want to donate more?"');
      scene.actions([
        { label: 'Have your breasts pumped again', goto: ['city_clinic', 'milk_donation'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ask to donate more', goto: ['city_clinic', 'milk_donation'] },
      ]);
    }
    scene.actions([
      { label: 'Enough for today', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).lact_ev ?? 0)?.['poli_donationsessioncount'] > 0) {
      qspCall(st, 'money', 'earn', (((st as any).lact_ev ?? 0)?.['poli_donatemoney']), 'cash');
      ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_totaldonatemoney'] = ((st as any).lact_ev['poli_totaldonatemoney'] ?? 0) + ((((st as any).lact_ev ?? 0)?.['poli_donatemoney']));
      // TODO-QSP: dynamic text: You put your top back on and the employee hands you <<$func(''money'', ''string_...
      scene.text(`You put your top back on and the employee hands you ${qspFunc(s, 'money', 'string_profit', (((st as any).lact_ev ?? 0)?.['poli_donatemoney'] ?? ''))} for your donated breast milk.`);
    } else {
      scene.text('You put your top back on.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    ((st as any).lact_ev = (st as any).lact_ev ?? {})['poli_milkedvolume'] = 0;
    qspGoto(st, 'city_clinic', 'milk_donation_room');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).lact_ev ?? 0)?.['poli_donationsessioncount'] > 0) {
      // TODO-QSP: dynamic text: "Sorry Ms. <<$pcs_lastname>>, but we''re closing now."
      scene.text(`"Sorry Ms. ${((s as any).pcs_lastname ?? '')}, but we're closing now."`);
      // TODO-QSP: dynamic text: You put your top back on and the employee hands you <<$func(''money'', ''string_...
      scene.text(`You put your top back on and the employee hands you ${qspFunc(s, 'money', 'string_profit', (((s as any).lact_ev ?? 0)?.['poli_donatemoney'] ?? ''))} for your donated breast milk.`);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: 'The milk donation service is closed. It''s open every day between '+func('time'...
      scene.text('The milk donation service is closed. It\'s open every day between 10:00 and 19:00.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_clinic', 'milk_donation_room'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDonateMilkBottle(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'small') {
    (s as any).temp_id = (((s as any).temp_small_mbottle_ids ?? 0)?.[0] ?? 0);
  } else {
    (s as any).temp_id = (((s as any).temp_medium_mbottle_ids ?? 0)?.[0] ?? 0);
  }
  (s as any).temp_pay = (((s as any).mbarrfill ?? 0)?.[String((s as any).temp_id ?? 0)] ?? 0) / 10;
  if (((s as any).mbarrstat ?? 0)?.[String((s as any).temp_id ?? 0)] === 'normal') {
    (s as any).temp_pay = ((s as any).temp_pay ?? 0) / 2;
    // TODO-QSP: !! And 0.5 rbl / ml for normal milk
  }
  (s as any).temp_total_pay = ((s as any).temp_total_pay ?? 0) + (((s as any).temp_pay ?? 0));
  qspCall(s, 'money', 'earn', ((s as any).temp_pay ?? 0), 'cash');
  ((s as any).lact_ev = (s as any).lact_ev ?? {})['poli_totaldonatemoney'] = ((s as any).lact_ev['poli_totaldonatemoney'] ?? 0) + (((s as any).temp_pay ?? 0));
  (s as any).temp_total_milk = ((s as any).temp_total_milk ?? 0) + ((((s as any).mbarrfill ?? 0)?.[String((s as any).temp_id ?? 0)] ?? 0));
  ((s as any).lact_ev = (s as any).lact_ev ?? {})['poli_totalmilkdonated'] = ((s as any).lact_ev['poli_totalmilkdonated'] ?? 0) + ((((s as any).mbarrfill ?? 0)?.[String((s as any).temp_id ?? 0)] ?? 0));
  qspCall(s, 'lact_bp', 'empty_milk_bottle', ((s as any).temp_id ?? 0));
  if (String((s as any).locArgs?.[1] ?? '') === 'small') {
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'stdclinic':
      enterStdclinic(s, scene);
      break;
    case 'stdcheck':
      enterStdcheck(s, scene);
      break;
    case 'yeast_cure':
      enterYeastCure(s, scene);
      break;
    case 'herpes_cure':
      enterHerpesCure(s, scene);
      break;
    case 'ven1':
      enterVen1(s, scene);
      break;
    case 'ven2':
      enterVen2(s, scene);
      break;
    case 'ven3':
      enterVen3(s, scene);
      break;
    case 'drPP':
      enterDrPP(s, scene);
      break;
    case 'ninel':
      enterNinel(s, scene);
      break;
    case 'ninel2':
      enterNinel2(s, scene);
      break;
    case 'ninel3':
      enterNinel3(s, scene);
      break;
    case 'glavdoc':
      enterGlavdoc(s, scene);
      break;
    case 'beginwork':
      enterBeginwork(s, scene);
      break;
    case 'discharge':
      enterDischarge(s, scene);
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
    case 'cosmetic1':
      enterCosmetic1(s, scene);
      break;
    case 'milk_advertisement':
      enterMilkAdvertisement(s, scene);
      break;
    case 'milk_reception':
      enterMilkReception(s, scene);
      break;
    case 'milk_donation_room':
      enterMilkDonationRoom(s, scene);
      break;
    case 'milk_bank_guy':
      enterMilkBankGuy(s, scene);
      break;
    case 'milk_bank':
      enterMilkBank(s, scene);
      break;
    case 'milk_donation':
      enterMilkDonation(s, scene);
      break;
    case 'donate_milk_bottle':
      enterDonateMilkBottle(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_clinic: LocationDef = {
  name: 'city_clinic',
  title: 'Clinic',
  region: 'city',
  locationType: 'public_indoors',
  enter: enter,
};
