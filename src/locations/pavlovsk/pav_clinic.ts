import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_clinic', '');
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('The entrance hall of Pavlovsk Poliklinik is a modest, well-worn space typical of a small town. Natural daylight filters through front windows onto pale turquise walls and scuffed light-gray floor tiles.');
  scene.text('A simple wooden reception desk sits on the left, where two nurses in white coats manage registrations. Blue plastic chairs line the right wall, occupied by a mix of elderly residents, young mothers, and workers waiting quietly.');
  scene.text('A central notice board is layered with schedules for specialists, vaccination reminders, and local health announcements.');
  // TODO-QSP: "The air carries a faint scent of disinfectant and fresh pine cleaner. Straight ahead, a corridor br...
  if (((s as any).preg ?? 0) === 2  ||  ((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0) / 2  ||  ((s as any).pain ?? 0)?.['total'] >= 70) {
    if (((s as any).hour ?? 0) < 6  &&  ((s as any).hour ?? 0) > 21) {
      scene.text('At this time the hospital is only staffed with emergency personell.');
    }
    scene.text('As soon as the Nurse at the counter sees you coming in, she rushes over to you."My dear, you really don\'t look good." she exclaims.');
    if (((s as any).preg ?? 0) === 2) {
      if (((s as any).kid ?? 0) < 1) {
        scene.text('"My water broke!" you nearly yell in a paniced state, just as another contraction hits you hard. "My Baby is coming!"');
        scene.text('"Yeah, calm down. We do this nearly every day here. Don\'t panick. Sit down, take deep, regluar breaths." the Nurse tells you in a soothing and experienced way as she sits you down on one of the chairs in the waiting area.');
        scene.text('"Somebody will bring you a wheelchair and then we get that baby delivered safe and sound. Don\'t worry." she holds your hand and guides you through the regular breathing while you wait.');
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
        qspCall(s, 'stat', '');
        scene.text('Soon another Nurse comes with a wheelchair and brings you to the delivery room in the maternity ward.');
        (s as any).pcs_know_mward = 1;
      } else {
        if (((s as any).kid ?? 0) < 2) {
          scene.text('"My Baby is coming!" you tell the nurse in between two contractions with clenched jaws.');
          scene.text('"Calm down. Sit down, take deep, regluar breaths." the Nurse tells you in a soothing and experienced way as she sits you down on one of the chairs in the waiting area.');
          scene.text('"Somebody will bring you a wheelchair and then we get that baby delivered safe and sound. Don\'t worry."');
          scene.text('"Thank you", you manage to murmur even with a bit of a forced smile as your womb sends a new wave of pain through your body.');
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
          qspCall(s, 'stat', '');
          scene.text('Soon another Nurse comes with a wheelchair and brings you to the delivery room in the maternity ward.');
          (s as any).pcs_know_mward = 1;
        } else {
          scene.text('"Yeah, my water broke". you tell her in between the waves of pain coursing through your abdomen. You take deep, regular breaths and sit down in the next available chair.');
          scene.text('"Could you get me a wheelchair?" you ask. "Of course, one is comming right up." the Nurse answers.');
          // TODO-QSP: dynamic text: "Thanks" you say. "This is not your first one." the nurse states more as a fact ...
          scene.text(`"Thanks" you say. "This is not your first one." the nurse states more as a fact than as a question. "No, it's actually my ${qspFunc(s, 'string', 'parse_number', ((s as any).kid ?? 0), 'rank')}." you say with a little smile, placing your hand on your bulging belly. Just the thought of holding another baby in your arms soon makes you happy.`);
          (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
          qspCall(s, 'stat', '');
          scene.text('Soon another Nurse comes with a wheelchair and brings you to the delivery room in the maternity ward.');
          (s as any).pcs_know_mward = 1;
        }
      }
      scene.actions([
        { label: 'Give birth', handler: (st: GameState) => {
    qspCall(s, 'medical_din', 'give_birth');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
      ]);
    } else {
      if ((((s as any).pcs_health ?? 0) < ((s as any).healthmax ?? 0) / 2  ||  ((s as any).pain ?? 0)?.['total'] >= 70)  &&  ((s as any).clinic ?? 0)?.['docheal'] !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Get urgent treatment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    ((s as any).clinic ?? {})['docheal'] = ((s as any).daystart ?? 0);
    qspCall(s, 'medical_din', 'healthTreatment');
    qspCall(s, 'stat', '');
    scene.text('The doctor guides you to a bed and tells you to lie down, after which she gives you a combined painkiller, steroid and vitamin shot.');
    scene.text('You feel drowsy for a little while, but afterwards you feel a lot better. The shot sped up your aching body\'s recovery a lot, meaning the pain probably won\'t come back as strongly when the shot wears off, and should aid your health recovery over the coming days.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
        ]);
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 21) {
      scene.text('You step up to the Nurses on the reception table. After a minute one of them looks up to you.');
      scene.text('"How can I help you, my dear?" she asks.');
      qspCall(s, 'pav_clinic', 'reception');
      if ((((s as any).lactation ?? 0)?.['active'] > 0  ||  ((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1)  &&  ((s as any).pcs_know_mward ?? 0) <= 0) {
        // TODO-QSP: dynamic text: A sign on the notice board catches your attention. It reads <a href="exec: minut...
        scene.text('A sign on the notice board catches your attention. It reads <a href="exec: minut += 5 & gt \'pav_clinic\', \'maternity_ward\'">"Maternity ward"</a>.');
      }
      if (((s as any).pcs_know_mward ?? 0) > 0) {
        // TODO-QSP: act 'Visit the maternity ward (0:05)': gt 'pav_clinic', 'maternity_ward'
      }
    } else {
      // TODO-QSP: dynamic text: The clinic is closed. It's open every day between '+func('time', 'get_time_strin...
      scene.text('The clinic is closed. It\'s open every day between \'+func(\'time\', \'get_time_string\', 6, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
      ]);
    }
    qspCall(s, 'jobs', 'get_job_definition', 'pav_clinic_cleaner');
    if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === '') {
      if (((s as any).job_hiring_step ?? 0)?.['pav_clinic_cleaner'] === 0) {
        scene.actions([
          { label: 'Read the job listing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).job_hiring_step ?? {})['pav_clinic_cleaner'] = 1;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You notice a piece of paper on the wall near the entrance to the clinic - it's a...
    scene.text('You notice a piece of paper on the wall near the entrance to the clinic - it\'s a job listing which reads: "Cleaner wanted! One hour per day, any time between \'+func(\'time\', \'get_time_string\', 14, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'. Payment: \'+$func(\'money\', \'string_profit\', 100)+\'."');
    scene.actions([
      { label: 'Move away', goto: ['pav_clinic', ''] },
    ]);
  } },
        ]);
      } else {
        if (qspFunc(s, 'jobs', 'is_work_time', 'pav_clinic_cleaner') === 1) {
          scene.actions([
            { label: 'Ask the head doctor about the job', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).job_hiring_step ?? {})['pav_clinic_cleaner'] = 2;
    qspCall(s, 'jobs', 'set_employed', 'pav_clinic_cleaner');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('Since the door is opened, you assume you\'re allowed to enter the head doctor\'s office. When you knock on the wooden door frame, the doctor looks up from his work. He\'s wearing a white coat, and looks at you sternly through his glasses. "Yes, can I help you?"');
    scene.text('"Hello sir," you answer. "I see you\'re looking for a cleaner, and I would like to apply."');
    scene.text('He looks at you, thinking for a second before he opens a desk drawer and pulls out a form. "I see. Fill this out, please."');
    // TODO-QSP: dynamic text: You nod and fill out the form, indicating that you're applying for the part-time...
    scene.text(`You nod and fill out the form, indicating that you're applying for the part-time cleaning job vacancy. He quickly checks to make sure you filled everything out correctly, then gives you a satisfied smile. "It looks like everything in order, Miss ${((s as any).pcs_lastname ?? 0)}. Please follow me and I'll show you where we keep our cleaning supplies."`);
    scene.text('You follow him to the maintenance closet, where he shows you the cleaning supplies you will need. He shakes your hand and wishes you a good day before returning to his office, assuming you will find your own way out.');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
          ]);
        }
      }
    } else {
      if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
        if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_clinic_cleaner') === 1  &&  ((s as any).job_last_work_day ?? 0)?.['pav_clinic_cleaner'] !== ((s as any).daystart ?? 0)) {
          (s as any).minut = ((s as any).minut ?? 0) + 60;
          qspCall(s, 'jobs', 'clock', 'pav_clinic_cleaner');
          qspCall(s, 'exp_gain', 'cleaning', Math.floor(Math.random() * 3) + 1);
          qspCall(s, 'mood', 'lower', 'medium');
          qspCall(s, 'sweat', 'add', 10);
          qspCall(s, 'stat', '');
          scene.img('images/locations/city/residential/office/clener1.jpg');
          scene.text('As instructed, you take a mop and a bucket from the maintenance closet and begin by cleaning the corridors throughout the clinic. Once you\'re done with that, you enter the examination rooms and offices one by one, occasionally hearing a softly muttered curse from a doctor when you interrupt their work. Nevertheless, you work quickly and the doctors don\'t give you any trouble while you clean the floors of the rooms.');
          (s as any).ginrand = Math.floor(Math.random() * 2) + 0;
          if (((s as any).Gspravka ?? 0) < 10  &&  (!((s as any).ginrand ?? 0))) {
            scene.text('When you clean the floor of the gynecologist\'s examination room, he leaves the room to let you do your work in peace. You\'re alone now.');
            if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
              scene.actions([
                { label: 'Forge a referral to give to your mother', handler: (st: GameState) => {
    (s as any).Gspravka = 30;
    (s as any).GspravkaT = 1;
    (s as any).Gspassed = 1;
    (s as any).forge_referral = 1;
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You see a pile of unused referral forms and think to yourself: "I may not be a v...
    scene.text(`You see a pile of unused referral forms and think to yourself: "I may not be a virgin any more, but ${((s as any).npc_nickname ?? 0)?.['A29']} doesn't need to know that!"`);
    scene.text('After you make sure no one is in the corridor, you quickly walk to the desk, take one of the empty referral forms and press his stamp onto it. You can do the rest later. You quickly hide it under your clothes and get back to cleaning after carefully putting everything back the way you found it.');
    // TODO-QSP: dynamic text: Later, when you're cleaning the office of a doctor who you know isn't in today, ...
    scene.text(`Later, when you're cleaning the office of a doctor who you know isn't in today, you lock the door and carefully fill out the form. You take your time, doing your best to mimic your gynecologist's handwriting. You nod happily and mutter to yourself: "This looks good. ${((s as any).npc_nickname ?? 0)?.['A29']} will have no clue it's forged! That'll get me off the hook for at least another month…"`);
    scene.actions([
      { label: 'Finish cleaning', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'paycheck', 'pav_clinic_cleaner');
  }, goto: ['pav_clinic', ''] },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Work as a cleaner for  [+$func(\'money\', \'string_profit\', 100)+\' (...]', handler: (st: GameState) => {
    // TODO-QSP: 00)':
  } },
            { label: 'Finish cleaning', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'paycheck', 'pav_clinic_cleaner');
  }, goto: ['pav_clinic', ''] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'General practitioner', 'a doctor'):
  scene.img('images/locations/shared/clinic/poli.jpg');
  if (qspFunc(s, 'appointments', 'get_state', 'General practitioner', '') === 'none') {
    scene.text('"I would like to book an appointment with a doctor, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with a doctor," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Petrovich', 'Dr. Petrovich, the gynecologis...
  scene.img('images/locations/shared/clinic/poli.jpg');
  if (qspFunc(s, 'appointments', 'get_state', 'Petrovich', '') === 'none') {
    scene.text('"I would like to book an appointment with Dr. Petrovich, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with Dr. Petrovich," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).Gspravka ?? 0) < 3  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: 'Ask for a referral from Dr. Petrovich', goto: ['pav_clinic', 'Petrovich1', 'referral_only'] },
    ]);
  }
  if (((s as any).therapistQW ?? 0)?.['met'] > 0) {
    // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Pavlov', 'Dr. Pavlov, the therapist'):
    scene.img('images/locations/shared/clinic/poli.jpg');
    if (qspFunc(s, 'appointments', 'get_state', 'Pavlov', ((s as any).temp_rcp_recur ?? 0)) === 'none') {
      scene.text('"I would like to book an appointment with Dr. Pavlov, please," you tell the receptionist.');
      scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
    } else {
      scene.text('"I have an appointment with Dr. Pavlov," you tell the receptionist.');
      scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
    }
    qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  }
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Therapist', 'a therapist'):
  scene.img('images/locations/shared/clinic/poli.jpg');
  if (qspFunc(s, 'appointments', 'get_state', 'Therapist', '') === 'none') {
    scene.text('"I would like to book an appointment with a therapist, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with a therapist," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Dentist', 'a dentist'):
  scene.img('images/locations/shared/clinic/poli.jpg');
  if (qspFunc(s, 'appointments', 'get_state', 'Dentist', '') === 'none') {
    scene.text('"I would like to book an appointment with a dentist, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with a dentist," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Optometrist', 'an optometrist'):
  scene.img('images/locations/shared/clinic/poli.jpg');
  if (qspFunc(s, 'appointments', 'get_state', 'Optometrist', '') === 'none') {
    scene.text('"I would like to book an appointment with an optometrist, please," you tell the receptionist.');
    scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
  } else {
    scene.text('"I have an appointment with an optometrist," you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
  }
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  // TODO-QSP: end
  if (((s as any).kid ?? 0) > 0) {
    // TODO-QSP: act $func('clinic_functions', 'reception_option_label', 'Pediatrician', 'a pediatrician'):
    scene.img('images/locations/shared/clinic/poli.jpg');
    if (qspFunc(s, 'appointments', 'get_state', 'Pediatrician', '') === 'none') {
      scene.text('"I would like to book an appointment with a pediatrician, please," you tell the receptionist.');
      scene.text('"Of course, let me check what we have available," she replies, flipping through the appointment book.');
    } else {
      scene.text('"I have an appointment with a pediatrician," you tell the receptionist.');
      scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
    }
    qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  }
  // TODO-QSP: end
  if (((s as any).pcs_ask_mward_help ?? 0) >= 1  &&  ((s as any).pcs_know_mward ?? 0) <= 0) {
    scene.actions([
      { label: 'Ask at reception for help with your breasts.', handler: (st: GameState) => {
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('The receptionist looks you up and down and tells you to visit the maternity ward. Someone over there will be able to help you.');
    (s as any).pcs_know_mward = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_clinic', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).GerpesNapr ?? 0) > 0  &&  ((s as any).GerpesUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: '<b>Go to your herpes treatment</b>', handler: (st: GameState) => {
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('"I have an appointment for a treatment" you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
    scene.text('"Ok, you can get right through", the nurse says and marks something in her book.');
    qspCall(s, 'clinic_functions', 'set_std_herpes_shot_act');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).TriperNapr ?? 0) > 0  &&  ((s as any).TriperUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: '<b>Go to your gonorrhea treatment</b>', handler: (st: GameState) => {
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('"I have an appointment for a treatment" you tell the receptionist.');
    scene.text('"Let me check on that for you," she replies, flipping through the appointment book.');
    scene.text('"Ok, you can get right through", the nurse says and marks something in her book.');
    qspCall(s, 'clinic_functions', 'set_std_gonorrhea_shot_act');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterPetrovich1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
  if ((((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_prostitute'] >= 125  ||  ((s as any).stat ?? 0)?.['men_fucked'] > 10  ||  ((s as any).unprotfilm ?? 0)  ||  ((s as any).whoreQW ?? 0) > 1  ||  ((s as any).bordelslutty ?? 0) > 0  ||  ((s as any).cumcondslip_aware ?? 0) > 0  ||  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 42)  ||  ((s as any).Triper ?? 0) > 2  ||  ((s as any).Gerpes ?? 0) >= 3  ||  ((s as any).Sifilis ?? 0) >= 21  ||  ((s as any).Kandidoz ?? 0) > 30)  &&  ((s as any).gynodaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('You decide to have a check-up with your gynecologist. Given your sexual history, you can\'t be too careful.');
    if ((!((s as any).docKnow ?? 0))) {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).fame ?? 0)?.['pav_prostitute'] < 125) {
      } else {
        if (((s as any).unprotfilm ?? 0)) {
        } else {
          if (((s as any).whoreQW ?? 0) > 1  ||  ((s as any).bordelslutty ?? 0) > 0  ||  ((s as any).fame ?? 0)?.['pav_prostitute'] >= 125) {
          }
        }
      }
      // TODO-QSP: dynamic text: He looks up from his desk when you enter his office and recognizes you immediate...
      scene.text(`He looks up from his desk when you enter his office and recognizes you immediately. "Ah, hello ${((s as any).pcs_nickname ?? 0)}. Did you come for a check-up?"`);
      scene.text('You nod and take a seat. "Hello, Dr. Petrovich. Yes, I\'m here for a check-up."');
      // TODO-QSP: $gyn1
      scene.text('You smile at him. "It\'s true, Dr. Petrovich. I am."');
      scene.text('He rubs his hand over his chin and continues. "Does your mother know?"');
      // TODO-QSP: $gyn2
      scene.text('The gynecologist nods, and motions for you to stand up. "Very well, let\'s see how you\'re doing then. Undress for me, please."');
    } else {
      if (((s as any).docKnow ?? 0) === 1) {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 25  ||  ((s as any).unprotfilm ?? 0)  ||  ((s as any).whoreQW ?? 0) > 1  ||  ((s as any).bordelslutty ?? 0) > 0  ||  ((s as any).fame ?? 0)?.['pav_prostitute'] >= 125) {
        }
        // TODO-QSP: dynamic text: He looks up from his desk when you enter his office and recognizes you immediate...
        scene.text(`He looks up from his desk when you enter his office and recognizes you immediately. "Ah, hello ${((s as any).pcs_nickname ?? 0)}. Back for another check-up?"`);
        scene.text('You nod and take a seat. "Hello, Dr. Petrovich. Yes, I\'m here for a check-up."');
        // TODO-QSP: $gyn1
        scene.text('"Yes, doctor. I am," you tell him.');
        scene.text('He rubs his hand over his chin and continues. "If I may be so bold… Why?"');
        // TODO-QSP: $gyn2
        scene.text('He smirks, but nods. "I understand. It\'s not my place to judge anyway. Let\'s see how you\'re doing. Undress for me, please."');
      }
    }
  } else {
    if (((s as any).gpoli_doctorhavesex ?? 0) !== 1) {
      scene.text('"Hello, young lady. I\'m Dr. Petrovich. Do you have specific complaints, or are you simply here for a check-up?" he asks asks as he walks into the examination room.');
    } else {
      // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. What brings you in today?" Dr. Petrovich says with a smil...
      scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}. What brings you in today?" Dr. Petrovich says with a smile.`);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 'referral_only') {
    if (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([
        { label: 'Seek help for your weakness and pain', goto: ['pav_clinic', 'Petrovich_drug'] },
      ]);
    }
    if ((((s as any).fame ?? 0)?.['pav_slut'] >= 250  ||  ((s as any).fame ?? 0)?.['pav_prostitute'] >= 125  ||  ((s as any).stat ?? 0)?.['men_fucked'] > 10  ||  ((s as any).unprotfilm ?? 0)  ||  ((s as any).whoreQW ?? 0) > 1  ||  ((s as any).bordelslutty ?? 0) > 0  ||  ((s as any).cumcondslip_aware ?? 0) > 0  ||  (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 42)  ||  ((s as any).Triper ?? 0) > 2  ||  ((s as any).Gerpes ?? 0) >= 3  ||  ((s as any).Sifilis ?? 0) >= 21  ||  ((s as any).Kandidoz ?? 0) > 30)  &&  ((s as any).gynodaystart ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Request a general checkup', goto: ['pav_clinic', 'Petrovich_checkup_prost'] },
      ]);
    } else {
      scene.actions([
        { label: 'Request a general checkup', goto: ['pav_clinic', 'Petrovich_checkup'] },
      ]);
    }
    scene.actions([
      { label: 'Get tested for STDs [+$func(\'money\', \'get_cost_string\', 1000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000);
      qspCall(s, 'pav_clinic', 'std_test');
      qspCall(s, 'clinic_functions', 'set_std_herpes_shot_act');
      qspCall(s, 'clinic_functions', 'set_std_gonorrhea_shot_act');
      qspCall(s, 'clinic_functions', 'set_std_syphilis_shot_act');
    }
  } },
      { label: 'Ask about long-term birth control', goto: ['pav_clinic', 'Petrovich_birth_control'] },
    ]);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).Gspravka ?? 0) < 3  &&  ((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).motherKnowRaped ?? 0) === 0  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: 'Ask for a referral', goto: ['pav_clinic', 'referral'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_clinic', ''] },
  ]);
  scene.build();
}

function enterPetrovichBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['implant_status'] > 0  ||  ((s as any).tabletkicheck ?? 0) === 2) {
    scene.actions([{ label: 'Continue', goto: ['pav_clinic', 'Petrovich_birth_control3'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
  if (((s as any).gpoli_doctorhavesex ?? 0) === 1) {
    scene.text('He looks at you with a raised eyebrow. "Given our previous interactions I would certainly hope so. For your sake."');
  } else {
    if (((s as any).docKnow ?? 0) === 1) {
      scene.text('"Give your activities that would be wise."');
    }
  }
  scene.text('"Ok, are you familiar with the different kinds of birth control for women or should I give you a brief explanation?" he asks.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Please explain them to me"', goto: ['pav_clinic', 'Petrovich_birth_control2'] },
    { label: '"No need for that"', handler: (st: GameState) => {
    qspCall(st, 'pav_clinic', 'Petrovich_birth_control3');
  } },
  ]);
  scene.build();
}

function enterPetrovichBirthControl2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
  scene.text('"Please explain them to me." you say');
  scene.text('You sit in the consultation room as Dr. Petrovich, closes the patient\'s chart and looks across the desk with a professional, steady expression.');
  scene.text('“Let\'s go through the hormonal options you asked about,” he says clearly. “I\'ll explain how each one works and the most common side effects so you have a full picture.”');
  scene.text('He holds up one finger.');
  scene.text('“First is the birth control implant. It\'s a small flexible rod inserted under the skin of your upper arm. It releases progestin continuously and prevents pregnancy for up to three years. After that it must be removed or replaced."');
  scene.text('"Common side effects include irregular or prolonged bleeding in the first months, headaches, mood changes, breast tenderness, acne, and possible weight gain. Some women experience reduced bleeding or no periods after the first year. Rare risks include infection or scarring at the insertion site, and very rarely the implant can move or be difficult to remove.”');
  scene.text('He raises a second finger.');
  scene.text('“Second is the birth control shot, given every three months. It is highly effective when received on schedule."');
  scene.text('"Side effects often include irregular bleeding or spotting that may later stop completely, weight gain, headaches, mood changes, and decreased bone mineral density with long-term use. Some women notice reduced libido or delayed return of fertility after stopping the injections.”');
  scene.text('Third finger.');
  scene.text('“Third are the daily birth control pills. You take one tablet at the same time every day for best effectiveness."');
  scene.text('"Common side effects are nausea, especially in the first weeks, breast tenderness, headaches, mood swings, and breakthrough spotting. Combined pills carry a small increased risk of blood clots, stroke, or heart attack, particularly in smokers over 35 or those with certain medical conditions.”');
  scene.text('Finally he lifts a fourth finger.');
  scene.text('“Last is the morning-after pill, or emergency contraception. This is not a regular method of birth control. It is a higher-dose hormone taken after unprotected sex, ideally within 72 hours."');
  scene.text('"Side effects commonly include nausea, vomiting, fatigue, headache, dizziness, breast tenderness, and changes in the next menstrual period. It is less effective than ongoing methods and is not recommended for repeated use.”');
  scene.text('Dr. Petrovich rests his hands on the desk.');
  scene.text('“None of these methods protect against sexually transmitted infections. Side effects vary from person to person, and some may lessen over time.”');
  scene.text('"The Implant and birth control shot you can get here at the hospital, the daily pill and emergency pill you can get at the pharmacy."');
  scene.text('"Please be aware, that all of these hormonal options do not guarantee 100% safety. It\'s best to combine them with other, non hormonal birth control methods like condoms and beeing aware of your cycle."');
  scene.text('"Additionally, there are certain combinations of drugs which might significantly reduce the effectiveness of hormonal birth control. Especially regular usage of anti-biotics, weigth-loss medication, anti-fungal treatments, anti-seizure drugs and certain herbal remedies."');
  qspCall(s, 'pav_clinic', 'Petrovich_birth_control3');
  // TODO-QSP: end
  scene.build();
}

function enterPetrovichBirthControl3(s: GameState, scene: SceneBuilder): void {
  scene.text('"So, after all that, what can I get you?" he asks.');
  qspCall(s, 'medical_din', 'birth_control');
  // TODO-QSP: end
  scene.actions([
    { label: '"Please, could you explain my options again?"', goto: ['pav_clinic', 'Petrovich_birth_control2'] },
    { label: '"I need something else"', goto: ['pav_clinic', 'Petrovich1'] },
    { label: '"Thanks, thats all" (Leave)', goto: ['pav_clinic', ''] },
  ]);
  scene.build();
}

function enterPetrovichCheckup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_2.jpg');
  scene.text('The doctor checks your temperature, blood pressure and pulse.');
  scene.text('"Lift your shirt so we can have a listen," he tells you as he warms his stethoscope by breathing on it.');
  scene.text('You lift your shirt and bra above your breasts as instructed and the doctor presses the stethoscope to various places on your chest. He places his left hand on your stomach to steady you as he listens to your heart and breathing, occasionally bringing the stethescope to his mouth to rewarm it. The hand on your stomach moves in small circles that slip steadily lower until his finger tips slip just below the waistband of your clothes. Unlike any other doctor you\'ve seen before, Dr. Petrovich listens by pressing the stethescope against your breasts. Does that even work?');
  scene.text('He also warms it more often now, and it feels moist and warm on your nipples. To your embarrassment, you can feel your nipples starting to get hard. You\'re not quite sure, but you\'re fairly sure Dr. Petrovich was just having fun for the last few minutes of the examination.');
  scene.text('He nods. "Well, so far everything is okay."');
  // TODO-QSP: dynamic text: You notice that there's a certain sparkle in his eyes when he looks at your <<$t...
  scene.text(`You notice that there's a certain sparkle in his eyes when he looks at your ${((s as any).titsize ?? 0)} breasts with interest. You feel embarrassed at your nipples hardening even further, and try to think of bad things.`);
  scene.text('To your relief, the tingle you started to feel in your pussy goes away.');
  scene.text('"Please undress and sit in that chair. I will be back momentarily," he tells you as he steps towards the door and leaves.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Reluctantly take your clothes off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_3.jpg');
    scene.text('You sigh. Is this guy even a doctor? He was way too eager with your breasts and you suspect he has other reasons to want you naked.');
    scene.text('Nevertheless, you feel terrible and really need this check-up, so you reluctantly start taking your clothes off.');
    scene.actions([
      { label: 'Sit in the chair', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_4.jpg');
    scene.text('You quickly undress and climb into the chair. The leather-like surface feels strangely warm on your bottom, and it takes you a second to realize that it\'s heated. You fidget nervously as you wait for the doctor to return.');
    scene.text('After what seems like hours, the doctor comes back into the room. You notice his face seems redder than it was and his hair seems to be a little damp. He\'s also taken off the apron-like smock he had on before. He continues with his examination, taking your hands and arms and massaging the joints and flexing them. He does the same with your feet and legs. To your surprise, he also examines your ass and pussy, easing his gloved fingers into your pussy and then your asshole. He even spreads your lips apart and pushes the hood back to expose your clitoris, which he gently massages for a second before suddenly getting to his feet with a deep sigh, his eyes lingering on your exposed pussy for a moment too long before he seems to give himself a little shake.');
    if (((s as any).cumcondslip ?? 0) > 0) {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    if (((s as any).preg ?? 0) > 0) {
      (s as any).thinkpreg = 1;
      (s as any).knowpreg = 1;
    }
    if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
      if (((s as any).gpoli_sick ?? 0) !== '') {
        // TODO-QSP: $gpoli_sick += ', and you '
      }
      // TODO-QSP: $gpoli_sick += 'have a sexually transmitted disease'
    }
    if (((s as any).gpoli_sick ?? 0) === '') {
      scene.text('The doctor smiles when he gives you the good news. "You\'re perfectly healthy."');
      scene.text('You feel very relieved, and thank him profusely. "Thank you doctor, that\'s great news. Thanks again for the check-up."');
    } else {
      // TODO-QSP: dynamic text: The doctor frowns when he gives you the bad news. "I'm afraid I found something ...
      scene.text(`The doctor frowns when he gives you the bad news. "I'm afraid I found something irregular. You ${((s as any).gpoli_sick ?? 0)}."`);
      if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
        qspCall(s, 'pav_clinic', 'std_check');
      }
    }
    scene.actions([
      { label: 'Offer him money', goto: ['pav_clinic', 'spravka_money_pale'] },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange_pale'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetrovichCheckupProst(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take off your clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_3.jpg');
    scene.text('You quickly take off your clothes and neatly fold them before putting them aside.');
    scene.actions([
      { label: 'Sit in the chair', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).docKnow = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_4.jpg');
    scene.text('Once you\'re naked, you take a seat in the gynecologist\'s chair and spread your legs in the stirrups before the doctor gives you a thorough check-up. He spends a bit more time on your asshole than he probably should, but maybe he\'s just being thorough.');
    if (((s as any).cumcondslip ?? 0) > 0) {
      (s as any).cumcondslip = 0;
      qspCall(s, 'cum_cleanup', 'cleanloc', 17);
    }
    if (((s as any).preg ?? 0) > 0) {
      (s as any).thinkpreg = 1;
      (s as any).knowpreg = 1;
    }
    if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
      if (((s as any).gpoli_sick ?? 0) !== '') {
      }
      if (((s as any).gpoli_sick ?? 0) === '') {
      }
    }
    if (((s as any).gpoli_sick ?? 0) === '') {
      scene.text('The doctor smiles when he gives you the good news. "You\'re perfectly healthy."');
      scene.text('You feel very relieved, and thank him profusely. "Thank you doctor, that\'s great news. Thanks again for the check-up."');
      scene.text('He nods and waves his hand. "It\'s all good. Just don\'t forget to use protection. It\'s still dangerous out there."');
    } else {
      // TODO-QSP: dynamic text: The doctor frowns when he gives you the bad news. "I'm afraid I found something ...
      scene.text(`The doctor frowns when he gives you the bad news. "I'm afraid I found something irregular. You ${((s as any).gpoli_sick ?? 0)}."`);
      if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
        qspCall(s, 'pav_clinic', 'std_check');
      }
    }
    scene.text('The doctor stands beside you while he helps you move your legs from the stirrups. "So… How are you going to repay me for the examination?" he asks with a confident smile.');
    scene.actions([
      { label: 'Offer him money [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You smile, knowing this question would come. "I can pay. How much do I owe you?"');
      // TODO-QSP: dynamic text: He returns your smile. "For you? ' + $func('money', 'string_price', 1000) + '."
      scene.text('He returns your smile. "For you? \' + $func(\'money\', \'string_price\', 1000) + \'."');
      scene.actions([
        { label: 'Pay him ( [+$func(\'money\', \'string_price\', 1000) + \'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'money', 'pay', 1000, 'cash');
    // TODO-QSP: dynamic text: You gladly pay him the ' + $func('money', 'string_price', 1000) + ' and thank hi...
    scene.text('You gladly pay him the \' + $func(\'money\', \'string_price\', 1000) + \' and thank him again.');
    // TODO-QSP: dynamic text: He counts out the money and puts it away. "Anytime, <<$pcs_nickname>>. Make sure...
    scene.text(`He counts out the money and puts it away. "Anytime, ${((s as any).pcs_nickname ?? 0)}. Make sure you tell your friends about me if they need a check-up!"`);
    scene.actions([
      { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Offer him your body', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_6.jpg');
    scene.text('You slowly put your hands on his groin with a cheeky grin, and to your surprise feel that his cock is already fully erect. You massage it through his pants and when you notice no objections from him, you drop to your knees. He pulls his erection free from his pants, and you guide his stiff cock to your mouth with your hand. The look in his eyes is one you recognize from some of your customers - it\'s the look of a man who\'s going to demand a lot from you to get his money\'s worth.');
    scene.text('You lick the tip of his cock teasingly. It\'s a nice cock for sure, and the thought of servicing it even turns you on a little. Just because you\'re repaying him for something he did for you doesn\'t mean you can\'t enjoy yourself too…');
    scene.text('You slowly envelop his cock with your mouth and start sucking the head. After a minute or two, you feel his hand at the back of your head. You want him ask him what he wants, but he forces you to stay where you are and slowly pushes his hips forward, making you take more and more of his rod inside your mouth.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    if (((s as any).Venera ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_clinic', 'gynoblow'] }]);
    }
    if ((!((s as any).gpoli_doctorhavesex ?? 0))) {
      (s as any).gpoli_doctorhavesex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_7.jpg');
    scene.text('When you try to move your head, it has nowhere to go. The doctor\'s erection is about halfway in your mouth now and his powerful arm is keeping you in place. You decide to give him what he wants and stop resisting, slowly feeling him thrust his cock further and further into your mouth. At first it\'s easy, but his thick cock makes breathing more difficult the further it goes down.');
    scene.text('At one point, it feels like he\'s just fucking your throat carelessly and you nearly gag when he pushes his dick all the way down your throat and holds it there for a few seconds. When he pulls back, it\'s fully coated with your saliva.');
    scene.text('You gasp for breath while he pulls you up. "Should be slick enough. It\'s time to go deeper," he says with a grin.');
    scene.text('You wonder what he means by that as he turns you around and has you lean over against his chair. Once he\'s certain you\'re stable, he lets go of you and rubs the tip of his cock against your clitoris. It feels… quite nice, actually.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_8.jpg');
    scene.text('You moan, feeling some of your wetness running down your leg as Dr. Petrovich keeps rubbing his cock against your clit. He sure knows his way around a woman\'s body!');
    scene.text('You close your eyes and just give in to the pleasure as you feel something push against your labia and your vaginal walls are stretched by his thick dick entering you. It\'s still very slick from the blowjob you gave him earlier, and you can\'t help but groan loudly when it slides in.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have sex with him', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'boyStat', 'A68');
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_9.jpg');
    scene.text('You feel like you\'re in heat when he slowly starts thrusting his cock in and out of you. When he realizes you can take him easily, he steadily increases the pace and fucks you harder. You involuntarily moan with his thrusts, fully giving yourself to him.');
    scene.text('Dr. Petrovich lightly slaps your ass a few times and you moan louder. He\'s making you feel so good! After a few minutes, you can\'t take it any more and try to stifle your moans so you don\'t scream the whole clinic down while you have a thunderous orgasm. Your legs buckle under your weight and give way, but fortunately he pulled his dick out of you on time and catches you in his powerful arms. He carries you to a table and puts you down on top of it with your legs spread towards him.');
    scene.text('He immediately guides his cock back into you while your body quivers, still not fully recovered from the orgasm you just had.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the table', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_10.jpg');
    scene.text('He picks up the pace again and fucks you hard and fast like before. Your body no longer listens to you, and you find yourself eagerly bucking your hips against his thrusts. You feel that tingle starting up inside you again… If he keeps this up, you\'re going to cum all over his cock again.');
    scene.text('The doctor smiles at you while he pulls his dick out. "I bet I could give you another type of orgasm, one that you maybe never had before. Wait here, I\'ll be right back."');
    scene.text('You kind of hear him say something, but at the same time you\'re still too stuck in your own world to realize what he just said. When the high from your orgasm wears off, you look around the room. Where did he go?');
    scene.text('Just as you\'re about to get off the table, he returns with a jar of lubricant in his hand and a latex glove on one hand. He motions for you to turn around, which you obediently do.');
    scene.text('Several of his gloved fingers dip inside the jar, and when he pulls it up you see the lubricant slowly dripping from them. He puts them against your tight sphincter and spreads some of the lube over it before thrusting three fingers in.');
    scene.text('"Ouch!" you cry out when you feel his fingers stretch out your asshole. It hurts a little, and you feel a bit uncomfortable when he pulls his fingers away and spreads more lubricant over his cock. Before you can object, you feel the thick head of his cock pushing past your sphincter, stretching you out even further.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'arousal', 'anal_finger', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal sex', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_11.jpg');
    scene.text('You want to pull away from him, but you\'re trapped between Dr. Petrovich and a wall. He slowly moves his hips, letting you get used to the size of his thick rod inside your ass. Despite your best efforts you can\'t relax your anus, only slowly getting used to the size of him.');
    scene.text('When he starts to speed up, you nearly cry and groan loudly with every thrust.');
    scene.text('"This won\'t do. You\'re going to alert the entire clinic if you keep screaming like that!" he mutters and takes his dick out of your ass.');
    scene.text('"Come on, get on the floor," he orders after he throws his coat down. He spreads some more lubricant over his gloved fingers and smears it over your throbbing asshole.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the floor', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_12.jpg');
    scene.text('To your surprise, he ignores your ass and drives his dick back into your pussy instead. He fucks you with short, rough thrusts, almost as if he\'s fucking the annoyance out of his system. It doesn\'t feel very pleasant at first, but you soon moan and start enjoying the feeling again when your body relaxes.');
    scene.text('When he notices you\'re gasping faster, he quickly pulls his cock out of your pussy and rams it inside your asshole in one fluent motion. You cry out loud, partially from the pain and partially because you\'re frustrated… You were so close! Despite the discomfort and pain you\'re experiencing, you rub your clitoris, hoping it will take your mind off the pain and hopefully getting that orgasm you\'re craving.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_13.jpg');
    scene.text('Now that you\'re so aroused, the anal sex doesn\'t hurt quite as much. You furiously rub your clit while he roughly pounds your stretched asshole, slowly losing your mind when a second orgasm hits you. Dr. Petrovich must feel your anus contracting around his cock when you cum with it inside you.');
    scene.text('He was close as well, and after you ride out your orgasm he gives it a few more thrusts before he pulls out and moves his hips towards your face. He grabs you by the hair and guides his cock towards your mouth, and you obediently open your mouth to let it in.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'boyStat', 'A68');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_14.jpg');
    scene.text('You feel too tired to object, even if you wanted to, and have no choice but to take his load in your mouth. You obediently show it to him before swallowing it and licking your lips. He moves his slowly softening dick towards your mouth once more, letting you suck and lick it clean.');
    scene.text('He lets out a satisfied sigh and starts putting his clothes back on as if nothing happened.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_15.jpg');
    scene.text('You follow his example and also put your clothes back on.');
    scene.text('When you\'re both fully dressed again, he has a wide grin on his face. "Well now, one good turn deserves another. Considering your line of work, I suggest you come visit me at least once a week."');
    scene.text('You happily agree with him. "That\'s true. Thank you doctor, I\'ll make sure to refer my friends to you if they ever need a check-up too."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPetrovichDrug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
  if (((s as any).gpoli_doctorhavesex ?? 0) === 1) {
    scene.text('"Hello doctor. I\'m feeling weak and I hurt all over," you reply.');
    scene.text('"Well, let\'s take a look, shall we?" he replies as you get up to stand by the examination table.');
  } else {
    scene.text('"Hello sir. I\'m feeling really weak and shaky and I hurt all over," you explain.');
    scene.text('"Let\'s take a look, shall we?" he replies and gestures for you to stand next to the examination table.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_2.jpg');
    scene.text('You tell the doctor about the white powder you\'ve been sniffing while he checks your temperature, blood pressure and pulse.');
    scene.text('"Lift your shirt so we can have a listen," he tells you as he warms his stethoscope by breathing on it.');
    scene.text('You lift your shirt and bra above your breasts as instructed and the doctor presses the stethoscope to various places on your chest. He places his left hand on your stomach to steady you as he listens to your heart and breathing, occasionally bringing the stethescope to his mouth to rewarm it. The hand on your stomach moves in small circles that slip steadily lower until his finger tips slip just below the waistband of your clothes. Unlike any other doctor you\'ve seen before, Dr. Petrovich listens by pressing the stethescope against your breasts. Does that even work?');
    scene.text('He also warms it more often now, and it feels moist and warm on your nipples. To your embarrassment, you can feel your nipples starting to get hard. You\'re not quite sure, but you\'re fairly sure Dr. Petrovich was just having fun for the last few minutes of the examination.');
    scene.text('He nods. "Well, so far everything is okay."');
    // TODO-QSP: dynamic text: You notice that there's a certain sparkle in his eyes when he looks at your <<$t...
    scene.text(`You notice that there's a certain sparkle in his eyes when he looks at your ${((s as any).titsize ?? 0)} breasts with interest. You feel embarrassed at your nipples hardening even further, and try to think of bad things.`);
    scene.text('To your relief, the tingle you started to feel in your pussy goes away.');
    scene.text('"Please undress and sit in that chair. I will be back momentarily," he tells you as he steps towards the door and leaves.');
    scene.actions([
      { label: 'Reluctantly take your clothes off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_3.jpg');
    scene.text('You sigh. Is this guy even a doctor? He was way too eager with your breasts and you suspect he has other reasons to want you naked.');
    scene.text('Nevertheless, you feel terrible and really need this check-up, so you reluctantly start taking your clothes off.');
    scene.actions([
      { label: 'Sit in the chair', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_4.jpg');
    scene.text('You quickly undress and climb into the chair. The leather-like surface feels strangely warm on your bottom, and it takes you a second to realize that it\'s heated. You fidget nervously as you wait for the doctor to return.');
    scene.text('After what seems like hours, the doctor comes back into the room. You notice his face seems redder than it was and his hair seems to be a little damp. He\'s also taken off the apron-like smock he had on before. He continues with his examination, taking your hands and arms and massaging the joints and flexing them. He does the same with your feet and legs. To your surprise, he also examines your ass and pussy, easing his gloved fingers into your pussy and then your asshole. He even spreads your lips apart and pushes the hood back to expose your clitoris, which he gently massages for a second before suddenly getting to his feet with a deep sigh, his eyes lingering on your exposed pussy for a moment too long before he seems to give himself a little shake.');
    if (((s as any).cumcondslip ?? 0) > 0) {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    if (((s as any).preg ?? 0) > 0) {
      (s as any).thinkpreg = 1;
      (s as any).knowpreg = 1;
    }
    if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
      if (((s as any).gpoli_sick ?? 0) !== '') {
        // TODO-QSP: $gpoli_sick += ', and you '
      }
      // TODO-QSP: $gpoli_sick += 'have a sexually transmitted disease'
    }
    if (((s as any).gpoli_sick ?? 0) === '') {
      scene.text('"Other than the fact that you\'re addicted to cocaine, you\'re otherwise completely healthy. Truth be told, you have a very mature body for a girl your age." You see the corners of his mouth twitch and think his pants look a little tighter in his crotch area than before. "But that\'s not what you\'re here for. Now please get dressed while I write a note for your mother. I\'m not allowed to give you the cure to your addiction without her permission."');
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! She would kill you!');
      scene.text('"Wait!" you quickly blurt out. "Could you please just give me the shot without telling her? Please?"');
      // TODO-QSP: dynamic text: He looks at you sternly and shakes his head. "I'm sorry <<$pcs_nickname>>, but y...
      scene.text(`He looks at you sternly and shakes his head. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, but you're not an adult. I need her permission to treat you, those are the rules."`);
    } else {
      // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, you have a problem. You <<$gpoli_sick>> as well as bein...
      scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}, you have a problem. You ${((s as any).gpoli_sick ?? 0)} as well as being addicted to cocaine. I'll have to write a note for your mother. I can't treat you without her permission."`);
      if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
        qspCall(s, 'pav_clinic', 'std_check');
      }
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! She would kill you!');
      scene.text('"Wait!" you quickly blurt out. "Could you please just give me the cure without telling her? Please?"');
      // TODO-QSP: dynamic text: He looks at you sternly and shakes his head. "I'm sorry <<$pcs_nickname>>, but y...
      scene.text(`He looks at you sternly and shakes his head. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, but you're not an adult. I need her permission to treat you. You've been a very bad girl, you know…"`);
    }
    scene.actions([
      { label: 'Offer him money', goto: ['pav_clinic', 'spravka_money_pale'] },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange_pale'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStdTest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text('The doctor has you provide some blood and urine samples before examining you. He then sends you out to the waiting room while you wait for the test results to come back.');
  if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
    scene.text('The doctor calls you back to his office after a while. "I\'m afraid I have some bad news," he says with a frown.');
    qspCall(s, 'pav_clinic', 'std_check');
  } else {
    scene.text('The doctor is pleased to announce that you don\'t have a sexually transmitted disease.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_clinic', ''] },
  ]);
  scene.build();
}

function enterReferral(s: GameState, scene: SceneBuilder): void {
  if (((s as any).motherKnowRaped ?? 0) > 0) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
    scene.text('Your mother already knows what happened to you and no longer requires a referral.');
    scene.actions([
      { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
    ]);
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (s as any).minut = ((s as any).minut ?? 0) + 15;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/clinic/gyno/gin.jpg');
      scene.text('You quickly undress and climb into the chair, spreading your legs and resting them in the stirrups. The leather-like surface feels strangely warm on your bottom, and it takes you a second to realize that it\'s heated. The gynecologist examines your vagina carefully with a speculum, and silently mumbles something to himself.');
      (s as any).Gspravka = 30;
      (s as any).GspravkaT = 1;
      (s as any).Gspassed = 1;
      scene.text('He confirms that you\'re still a virgin and tells you to get dressed while he prepares your referral. While you put your clothes back on, he fills out the form at his desk and stamps it before handing it to you. This should keep your mother happy for another month…');
      scene.actions([
        { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.text('You quickly undress and climb into the chair, spreading your legs and resting them in the stirrups. The leather-like surface feels strangely warm on your bottom, and it takes you a second to realize that it\'s heated. The gynecologist examines your vagina carefully with a speculum, and silently mumbles something to himself.');
        scene.actions([
          { label: 'Have the check-up', goto: ['pav_clinic', 'referral2'] },
        ]);
      } else {
        scene.text('You\'re a bit nervous as you enter the gynecologist\'s office. Your mother expects you to get a referral from him that states you\'re still a virgin, except there\'s one small problem… you\'re not a virgin any more! Maybe you can work something out with him?');
        if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
          // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>. What brings you in today?" Dr. Petrovich asks with a s...
          scene.text(`"Hello ${((s as any).pcs_nickname ?? 0)}. What brings you in today?" Dr. Petrovich asks with a smile.`);
          scene.text('"Hello, doctor. It\'s time for my monthly check-up again. My mother needs a referral from you to make sure I\'m still a virgin," you reply.');
          scene.text('"Ah, yes. For… school, right? Let\'s take a look," he replies with a chuckle.');
        } else {
          scene.text('"Hello, young lady. I\'m Dr. Petrovich. Do you have specific complaints, or are you simply here for a check-up?" the doctor asks as he walks into the examination room.');
          scene.text('"Hello sir. I\'m here for my monthly referral. My mother needs one from you to establish I\'m still a virgin. It\'s for school," you explain.');
          scene.text('"For… school?" he asks, a little confused. "Okay, let\'s take a look, shall we?" He gestures for you to stand next to the examination table.');
        }
        scene.actions([
          { label: 'Have the check-up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_2.jpg');
    scene.text('The doctor breathes on his stethoscope to warm it up. "Lift your shirt, please."');
    scene.text('He sees your hesitation, and reassures you. "I\'m just doing some basic check-ups while you\'re here. Now… your shirt, please?"');
    // TODO-QSP: dynamic text: You expose your <<$titsize>> breasts to him when you lift your shirt up. You're ...
    scene.text(`You expose your ${((s as any).titsize ?? 0)} breasts to him when you lift your shirt up. You're no medical professional, but you're fairly certain that he's not supposed to put the stethoscope on your breast like that!`);
    scene.text('You decide to humour him and just let him play with your breasts for several minutes, after which he happily nods. "Everything seems to be in order."');
    scene.text('There\'s an eager sparkle in his eyes when he looks at your bare breasts. "Now get undressed and have a seat in the chair, please. You can put your feet in the stirrups."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_3.jpg');
    scene.text('You reluctantly take your clothes off, trying to put the moment off as long as you can. You know he\'ll find out about your secret, but you don\'t have any other option.');
    scene.actions([
      { label: 'Sit in the chair', goto: ['pav_clinic', 'referral2'] },
    ]);
  } },
    ]);
  } },
          { label: 'Admit that you\'re no longer a virgin', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
    if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
      scene.text('You pause for a second, and then decide to just confess. He\'s going to find out anyway.');
      scene.text('"Doctor Petrovich, I have something to ask of you…" you hesitantly say. "You see, I… I\'m no longer a virgin."');
      scene.text('He nods understandingly. "I see." This likely isn\'t the first time one of his patients has told him that.');
      scene.text('You continue. "But… My mother thinks I\'m still a virgin, and I\'d really like to keep it that way. Could you please help me?"');
      scene.text('He looks puzzled for a second, and his eyes widen when he realizes what you\'re asking of him. "You mean… Fake your referral? That\'s fraud! Do you have any idea how much trouble I could end up in if I do that?"');
    } else {
      scene.text('You pause for a second, and then decide to just confess. He\'s going to find out anyway.');
      scene.text('"Doctor Petrovich, I have something to ask of you…" you hesitantly say. "You see, I… I\'m no longer a virgin."');
      scene.text('He nods understandingly. "I see." This likely isn\'t the first time one of his patients has told him that.');
      scene.text('You continue. "But… My mother thinks I\'m still a virgin, and I\'d really like to keep it that way. Could you please help me?"');
      scene.text('He nods again. "I see what you\'re getting at. I might be able to help you, but I\'m running a big risk by doing that. What\'s in it for me?"');
    }
    scene.actions([
      { label: 'Offer him money', goto: ['pav_clinic', 'spravka_money'] },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange'] },
      { label: 'Just accept the referral as is', goto: ['pav_clinic', 'badend'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReferral2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_4.jpg');
  scene.text('Once you\'re naked, you have a seat in the gynecologist\'s chair and spread your legs in the stirrups before the doctor gives you a thorough check-up. He spends a bit more time on your asshole than he probably should, but maybe he\'s just being thorough.');
  if (((s as any).preg ?? 0) > 0) {
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
    if (((s as any).gpoli_sick ?? 0) !== '') {
      // TODO-QSP: $gpoli_sick += ', and you '
    }
    // TODO-QSP: $gpoli_sick += 'have a sexually transmitted disease'
  }
  if (((s as any).gpoli_sick ?? 0) === '') {
    scene.text('"Well, you\'re completely healthy. However, you\'re also no longer a virgin." You see the corners of his mouth twitch and his pants look a little tighter in his crotch area than before. "Please get dressed while I write out the referral for your mother."');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! How could this have happened? You\'ve never even had sex!');
    } else {
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! She would kill you if she finds out!');
    }
    scene.text('"Wait!" you quickly blurt out. "Could you please just write down that I\'m still a virgin so I don\'t get in trouble? Please?"');
    // TODO-QSP: dynamic text: He looks at you sternly and shakes his head. "I'm sorry <<$pcs_nickname>>, I can...
    scene.text(`He looks at you sternly and shakes his head. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, I can't do that, that's fraud! Do you have any idea how much trouble I could get into?"`);
  } else {
    // TODO-QSP: dynamic text: The doctor frowns when he gives you the results. "I'm afraid I have some bad new...
    scene.text(`The doctor frowns when he gives you the results. "I'm afraid I have some bad news, ${((s as any).pcs_nickname ?? 0)}. You ${((s as any).gpoli_sick ?? 0)}.`);
    if (((s as any).Venera ?? 0) > 0  ||  ((s as any).Kandidoz ?? 0) > 10) {
      qspCall(s, 'pav_clinic', 'std_check');
    }
    scene.text('You\'re also not a virgin any more, obviously."');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! How could this have happened? You\'ve never even had sex!');
    } else {
      scene.text('Your heart begins to race when you hear that. Your mother can\'t find out! She would kill you!');
    }
    scene.text('"Wait!" you quickly blurt out. "Could you please just write down that I\'m still a virgin so I don\'t get in trouble? Please?"');
    // TODO-QSP: dynamic text: He looks at you sternly and shakes his head. "I'm sorry <<$pcs_nickname>>, but y...
    scene.text(`He looks at you sternly and shakes his head. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, but you're not an adult. I need her permission to treat you. And I can't lie on a referral, that's fraud! Do you have any idea how much trouble I could get into?"`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Offer him money', goto: ['pav_clinic', 'spravka_money'] },
    { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange'] },
    { label: 'Just accept the referral as is', goto: ['pav_clinic', 'badend'] },
  ]);
  scene.build();
}

function enterGynoblow(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).gpoli_doctorhavesex ?? 0))) {
    (s as any).gpoli_doctorhavesex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'referral_blow') {
    (s as any).Gspravka = 30;
    (s as any).GspravkaT = 1;
    (s as any).Gspassed = 1;
    (s as any).forge_referral = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_7.jpg');
  scene.text('When you try to move your head, it has nowhere to go. The doctor\'s erection is in front of you, about half-way in your mouth now. Behind you, his powerful arm is keeping you in place. You decide to give him what he wants and stop resisting, slowly feeling him thrust his cock further and further into your mouth. At first it\'s easy, but his thick cock makes breathing more difficult the further it goes down.');
  scene.text('At one point it feels like he\'s just fucking your throat carelessly, and you nearly gag when he pushes his dick all the way down your throat and holds it there for a few seconds. When he pulls back, it\'s fully coated with your saliva.');
  scene.text('You gasp for breath while he pulls you up. "That\'s it, take it all!"');
  scene.text('He carries on roughly pleasuring himself with your mouth until you realize he\'s about to cum.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'boyStat', 'A68');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_14.jpg');
    scene.text('You feel too tired to object and have no choice but to take his load in your mouth. You obediently show it to him before swallowing it and licking your lips. He moves his slowly softening dick towards your mouth once more, letting you suck and lick it clean.');
    scene.text('He lets out a satisfied sigh and starts putting his clothes back on as if nothing happened.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_15.jpg');
    scene.text('You follow his example and also put your clothes back on.');
    scene.text('When you\'re both fully dressed again, he has a wide grin on his face. "Well now, one good turn deserves another. Considering your line of work, I suggest you come visit me at least once a week, but first go and see my colleague to get yourself cured."');
    scene.text('You happily agree with him. "Thank you doctor!  I\'ll make sure to refer my friends to you if they ever need a check-up too."');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBadend(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).Gspravka = 30;
  (s as any).GspravkaT = 2;
  if (((s as any).dildo_gyno_check ?? 0) === 1) {
    (s as any).dildo_gyno_fail = 1;
  }
  scene.img('images/locations/pavlovsk/clinic/gyno/gin.jpg');
  scene.text('You sigh, understanding that there\'s nothing you can do to change his mind. Your gynecologist takes an empty form from the pile and fills it out, stating that you\'re not a virgin. He presses his stamp onto it and offers it to you with a disappointed look in his eyes.');
  scene.text('Dejectedly, you take it from him and get ready to leave. How are you going to tell your mother?');
  if (((s as any).loc ?? 0) === 'kuhrPar') {
    scene.actions([
      { label: 'Leave', goto: ['mother', 'referral'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpravkaArrange(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_1.jpg');
  if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
    scene.text('You really need this, but you understand you\'re not in a good position to negotiate. Nevertheless, you try to plead your case. "Please, Dr. Petrovich," you beg. "I don\'t have any money to offer you, but I really need that referral! My mother would kill me! Please?"');
    scene.text('He has a wolfish grin on his face as he gets up from his chair and walks over to you, putting his hands on your shoulders. "Well, if you really need it that badly… I think we can work out a deal. It\'d just be between us, no one else has to know…" he says softly in a soothing voice.');
    scene.text('You become hopeful, even though you feel a bit uncomfortable. "Erm… Okay, that\'s great! What kind of deal are you thinking of?"');
    scene.text('He continues in his soothing voice. "You see, my wife is away on a business trip and won\'t be home for weeks. I\'m a man with needs, and my job is very stressful as you can imagine. I need you to help me relax, relieve the tension, so to speak. Do you think you can help me with that?"');
    scene.text('His grip on your shoulders intensifies a little, and he massages you while you think it over. You\'re perfectly clear on what he wants from you, but is it really worth it?');
  } else {
    scene.text('You really need this, but you understand you\'re not in a good position to negotiate. Nevertheless, you try to plea your case and beg: "Please, Dr. Petrovich. I really need that referral! My mother would kill me! Please?"');
    scene.text('He has a wolfish grin on his face as he gets up from his chair and walks over to you. "Well, if you really need it that badly… We all have needs. I bet we could work something out…" he says softly.');
    scene.text('"But… what if…" you softly mutter.');
    scene.text('He playfully looks at you. "What if what?"');
    scene.text('"What if I have no money?" you continue.');
    scene.text('He smiles jovially at you as he reaches out for you. He puts his hands on your shoulders and you automatically give in to him, slowly letting him push you down to your knees.');
    scene.text('He smirks at you. "I understand why you\'re no longer a virgin, you little minx! So eager to please…"');
    scene.text('Your face is at the same level as his crotch, and he slowly undoes his pants and drops them to his ankles. His erect cock is pointing at you eagerly, a bead of precum slowly dripping down from it. You can tell he wants you badly.');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Grab a referral form and run out of the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Grab a referral form and run out of the room [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).Gspravka = 30;
    (s as any).GspravkaT = 1;
    (s as any).Gspassed = 1;
    (s as any).forge_referral = 1;
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('This is your chance! You quickly grab a nearly filled out form from his desk and run out of his examination room. Dr. Petrovich pulls up his pants again but doesn\'t even follow you, knowing this would be way too awkward to explain to anyone else in the clinic. Looks like you win this one!');
    // TODO-QSP: dynamic text: A while later, you fill out the rest of the form and nod to yourself. <i>This sh...
    scene.text(`A while later, you fill out the rest of the form and nod to yourself. <i>This should get ${((s as any).npc_nickname ?? 0)?.['A29']} off my back for another month…</i>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', 'Petrovich1'] },
    ]);
  } },
      ]);
    }
  }
  qspCall(s, 'willpower', 'bj', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'You can\'t do that [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You can\'t do that [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You frown. You really don't want to have sex with him and decide to try one more...
    scene.text(`You frown. You really don't want to have sex with him and decide to try one more time. "I can't do that, doctor. Please, show some compassion… Could you give me a break, just this once? I just need some time to figure out how to tell my ${((s as any).npc_nickname ?? 0)?.['A29']} about all this!"`);
    // TODO-QSP: dynamic text: His gaze is stone cold, without any sign of compassion. "So be it. Sorry <<$pcs_...
    scene.text(`His gaze is stone cold, without any sign of compassion. "So be it. Sorry ${((s as any).pcs_nickname ?? 0)}, but that's not how it works. I'm running a big enough risk as it is. If you're not helping me, I'm not helping you."`);
    scene.actions([
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange'] },
      { label: 'Just accept the referral as is', goto: ['pav_clinic', 'badend'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You really don\'t want your mother to find out…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_6.jpg');
    scene.text('You take another deep breath and slowly put your hands on his groin and guide his stiff cock to your mouth.');
    scene.text('You lick the tip teasingly before you slowly envelop his cock with your mouth and start sucking the head.');
    scene.text('After a minute or two, you feel his hand at the back of your head. You want to raise your head and ask him what he wants, but he forces you to stay where you are and slowly pushes his hips forward, making you take more and more of his rod inside your mouth.');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    if (((s as any).Venera ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_clinic', 'gynoblow', 'referral_blow'] }]);
    }
    if ((!((s as any).gpoli_doctorhavesex ?? 0))) {
      (s as any).gpoli_doctorhavesex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_7.jpg');
    scene.text('You want to move back, but there\'s nowhere to go. His stiff cock is in front of you, and his powerful hand on the back of your head pulling you in closer. The masculine smell of his throbbing cock fills your nose as you breathe and you have to admit, it excites you!');
    scene.text('He begins to relax a little, letting you pull back until just the tip of his cock is between your lips before he pulls your head closer again, forcing his cock deeper each time. At first you\'re okay, but at a certain point you can\'t keep up any more and gag on his cock when he thrusts it in deep again. You can tell he\'s enjoying this from the sadistic grin on his face. "Try breathing through your nose."');
    scene.text('You do as he says, and it does indeed make things a bit easier as he starts fucking your mouth, your saliva drooling down his shaft and over his hairy balls. The air of the office is filled with wet slurps and snorts as he pounds his cock into your mouth deeper and deeper, sometimes making you gag involuntarily as the head of his cock slips down your throat. With a sudden thrust, you can feel his curly pubic hair against your lips as he forces his cock down your throat as far as it\'ll go. You panic as you can\'t breathe, but he just as suddenly pulls his dick out of your mouth again. Thankfully, you get a chance to catch your breath.');
    scene.text('"I think that got me lubed up properly," he says with a lusty voice. You can tell he\'s very excited now, and aren\'t sure you want to find out what happens next. Nevertheless, you\'re too far in to back down now. "Come on, now it\'s time to go deep."');
    scene.text('"What do you mean?" you start to ask, but get your answer almost immediately as Dr. Petrovich pulls you up from the floor and bends you over the chair. You can\'t help but let out a moan as he rubs the head of his slippery cock against your engorged clitoris.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_8.jpg');
    scene.text('You can feel your arousal rising when his body touches yours. As Dr. Petrovich keeps massaging your clitoris with his cock, you can feel your juices start leaking from your swollen pussy and run down your quivering thighs. You can hear the wet squelching sounds as he plows his throbbing cock between your soaking wet pussy lips.');
    scene.text('Your tender flesh resists for a moment, but then surrenders. You feel the walls of your vagina stretch open, letting the invader in as you let out a passionate groan.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'boyStat', 'A68');
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_9.jpg');
    scene.text('Your body feels like it\'s getting hotter and hotter as beads of sweat form on your forehead. With every thrust Dr. Petrovich fucks you faster and harder, and you can feel your excitement growing too. You start involuntarily moaning as his hard hot member penetrates you ever deeper without giving you any pause.');
    scene.text('You can no longer control yourself and have a thunderous orgasm as the doctor keeps fucking you relentlessly. Waves of bliss sear your nerves and your mouth opens in a silent scream as you\'re consumed with pleasure.');
    scene.text('He suddenly pulls his dick out of you and you almost fall to the floor, but he catches you with his powerful arms and lowers you onto a table where you feel his cock slide back into your quivering pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the table', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_10.jpg');
    scene.text('He picks up the pace again and fucks you hard and fast like before. Your body no longer listens to you, and you find yourself eagerly bucking your hips against his thrusts. You feel that tingle starting up inside you again… If he keeps this up, you\'re going to cum all over his cock again.');
    scene.text('The doctor smiles at you while he pulls his dick out. "I bet I could give you another type of orgasm, one that you maybe never had before. Wait here, I\'ll be right back."');
    scene.text('You kind of hear him say something, but at the same time you\'re still too stuck in your own world to realize what he just said. When the high from your orgasm wears off, you look around the room. Where did he go?');
    scene.text('Just as you\'re about to get off the table, he returns with a jar of lubricant in his hand and a latex glove on one hand. He motions for you to turn around, which you obediently do.');
    scene.text('Several of his gloved fingers dip inside the jar, and when he pulls it up you see the lubricant slowly dripping from them. He puts them against your tight sphincter and spreads some of the lube over it before thrusting three fingers in.');
    scene.text('"Ouch!" you cry out when you feel his fingers stretch out your asshole. It hurts a little, and you feel a bit uncomfortable when he pulls his fingers away and spreads more lubricant over his cock. Before you can object, you feel the thick head of his cock pushing past your sphincter, stretching you out even further.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'arousal', 'anal_finger', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal sex', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_11.jpg');
    scene.text('You want to pull away from him, but you\'re trapped between Dr. Petrovich and a wall. He slowly moves his hips, letting you get used to the size of his thick rod inside your ass. Despite your best efforts you can\'t relax your anus, only slowly getting used to the size of him.');
    scene.text('When he starts to speed up, you nearly cry and groan loudly with every thrust.');
    scene.text('"This won\'t do. You\'re going to alert the entire clinic if you keep screaming like that!" he mutters and takes his dick out of your ass.');
    scene.text('"Come on, get on the floor," he orders after he throws his coat down. He spreads some more lubricant over his gloved fingers and smears it over your throbbing asshole.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_12.jpg');
    scene.text('To your surprise, he ignores your ass and drives his dick back into your pussy instead. He fucks you with short, rough thrusts, almost as if he\'s fucking the annoyance out of his system. It doesn\'t feel very pleasant at first, but you soon moan and start enjoying the feeling again when your body relaxes.');
    scene.text('When he notices you\'re gasping faster, he quickly pulls his cock out of your pussy and rams it inside your asshole in one fluent motion. You cry out loud, partially from the pain and partially because you\'re frustrated… You were so close! Despite the discomfort and pain you\'re experiencing, you rub your clitoris, hoping it will take your mind off the pain and hopefully getting that orgasm you\'re craving.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_13.jpg');
    scene.text('Now that you\'re so aroused, the anal sex doesn\'t hurt quite as much. You furiously rub your clit while he roughly pounds your stretched asshole, slowly losing your mind when a second orgasm hits you. Dr. Petrovich must feel your anus contracting around his cock when you cum with it inside you.');
    scene.text('He was close as well, and after you ride out your orgasm he gives it a few more thrusts before he pulls out and moves his hips towards your face. He grabs you by the hair and guides his cock towards your mouth, and you obediently open your mouth to let it in.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'boyStat', 'A68');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_14.jpg');
    scene.text('You feel too tired to object, even if you wanted to, and have no choice but to take his load in your mouth. You obediently show it to him before swallowing it and licking your lips. He moves his slowly softening dick towards your mouth once more, letting you suck and lick it clean.');
    scene.text('He lets out a satisfied sigh and starts putting his clothes back on as if nothing happened.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_15.jpg');
    scene.text('You follow his example, and also put your clothes back on.');
    scene.text('When you\'re both fully dressed again, he has a wide grin on his face. "Well now, one good turn deserves another."');
    scene.text('He takes place behind his desk and quickly writes out your referral, stating that you\'re still a virgin. He offers it to you: "I believe this is yours. Now if you don\'t mind, I have other patients to attend to."');
    scene.text('You feel cheap for a moment, when you accept the referral. Nevertheless, you\'re off the hook for another month… that\'s worth something, right?');
    (s as any).Gspravka = 30;
    (s as any).GspravkaT = 1;
    (s as any).Gspassed = 1;
    (s as any).forge_referral = 1;
    qspCall(s, 'arousal', 'end');
    if (((s as any).loc ?? 0) === 'kuhrPar') {
      scene.actions([
        { label: 'Leave', goto: ['mother', 'referral'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['pav_clinic', ''] },
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

function enterSpravkaMoney(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).job_status ?? 0)?.['pav_clinic_cleaner'] === 'employed') {
    scene.text('You don\'t want to have sex with him. Sex is what got you into this mess in the first place!');
    scene.text('You think fast. "I can pay!" you blurt out. "Would that referral be the same if I were to pay you for your time? I can pay you well!"');
    // TODO-QSP: dynamic text: The doctor strokes his chin as he thinks. "I don't know… I'm not here for the mo...
    scene.text('The doctor strokes his chin as he thinks. "I don\'t know… I\'m not here for the money. However, a private patient wouldn\'t count as a minor, so I would have no obligation to tell your mother. The standard consultancy fee is \' + $func(\'money\', \'string_price\', 2000) + \'."');
    scene.actions([
      { label: 'Pay him the fee [+$func(\'money\', \'get_cost_string\', 2000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 2000);
      qspCall(s, 'stat', '');
      (s as any).Gspravka = 30;
      (s as any).GspravkaT = 1;
      (s as any).Gspassed = 1;
      (s as any).forge_referral = 1;
      scene.text('"Deal!" you reply without giving it much thought.');
      scene.text('It\'s not cheap, but this way you get another month to think of a solution before your mother finds out you\'re no longer a virgin. Dr. Petrovich takes your money and fills out a form before stamping it and handing it over. You carefully put it in your pocket while thanking him.');
      scene.actions([
        { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
      ]);
    }
  } },
      { label: 'Just accept the referral as is', goto: ['pav_clinic', 'badend'] },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_5.jpg');
    scene.text('"Well, what if I give you money?" you suggest.');
    scene.text('Dr. Petrovich seems insulted by this suggestion. "Enough! I\'m a professional doctor who swore an oath! You can\'t bribe me! It would go against everything I stand for!"');
    scene.text('"Please? I could really use your help… Please…" you beg as tears fill your eyes. "I don\'t know what else to do…" you sob.');
    scene.text('He shakes his head resolutely and eyes you up and down. "I would like to help a pretty young girl in need, but taking a bribe could get me struck off the Medical Register."');
    scene.text('He lets those words linger in the air for a while, talking in a tone as if he\'s not opposed to helping you. He\'s resolute about not accepting money though, and is pausing to see if you\'ll suggest something else instead.');
    scene.actions([
      { label: 'Just accept the referral as is', goto: ['pav_clinic', 'badend'] },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpravkaMoneyPale(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!((s as any).gpoli_doctorhavesex ?? 0))) {
    scene.text('"Could you overlook my age if I were to pay you for your time?" you suggest.');
    scene.text('He tries to reject you, but doesn\'t sound very convincing. "I don\'t know… I didn\'t become a doctor for the money."');
    // TODO-QSP: dynamic text: A gleam of greed appears in his eyes - you definitely have his attention. "Howev...
    scene.text('A gleam of greed appears in his eyes - you definitely have his attention. "However, a private patient wouldn\'t count as a minor, so I would have no obligation to tell anyone anything. It would be like you were never here! The normal consultancy fee is \' + $func(\'money\', \'string_price\', 2000) + \'."');
    scene.actions([
      { label: 'Pay him the fee [+$func(\'money\', \'get_cost_string\', 2000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 2000);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'stat', '');
      scene.text('The doctor carefully counts the money before preparing an injection from a bottle marked "0.45% Sodium Chloride Injection USP". You swallow nervously as he fills a rather large looking needle with the unfamiliar chemical.');
      qspCall(s, 'pav_clinic', 'spravka_money_pale2');
    }
  } },
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange_pale'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/clinic/gyno/gpoli_5.jpg');
    scene.text('"Well, what if I give you money? I can pay you!" you suggest in desperation.');
    scene.text('Dr. Petrovich seems insulted by this suggestion. "Enough! I\'m a medical professional who swore an oath! You can\'t bribe me! That would go against everything I stand for!"');
    scene.text('"Please? I could really use your help… Please…" you beg as tears fill your eyes. "I don\'t know what else to do!" you sob.');
    scene.text('He shakes his head resolutely and eyes you up and down. "I would like to help a pretty young girl in need, but taking a bribe could get me struck off the Medical Register."');
    scene.text('He lets those words linger in the air for a while, talking in a tone as if he\'s not opposed to helping you. He\'s resolute about not accepting money though, and is pausing to see if you\'ll suggest something else.');
    scene.actions([
      { label: 'Try to negotiate', goto: ['pav_clinic', 'spravka_arrange_pale'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpravkaMoneyPale2(s: GameState, scene: SceneBuilder): void {
  scene.text('He tells you to bend over, but seems to have some problems finding the correct spot for the shot as you feel his hand squeezing your ass cheeks in several spots.');
  scene.text('You\'re afraid he might stick the needle in your asshole before he finally settles on a location and swabs it with some disinfectant.');
  scene.text('You feel a sharp pinch, then the feeling of a cold liquid being injected into your ass cheek. It isn\'t as bad as you thought it was going to be, but you\'re still relieved when it\'s over.');
  scene.text('"There, all done," he says with a satisfied tone. "It could take up to 30 days for the symptoms to fully disappear. Just be sure not to snort any more or the cure won\'t work."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_clinic', 'Petrovich1'] },
  ]);
  scene.build();
}

function enterSpravkaArrangePale(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).gpoli_doctorhavesex ?? 0) === 1) {
    scene.text('"Can I, I mean… Can we, er… How… Is there something I can do for you? My mother really can\'t find out!" you sob in desperation. You\'re terrified at the thought of what your mother would do if she knew.');
    scene.text('The doctor knows he has you cornered, and drives his point home. "Well, you really need this treatment. I think I can offer you a different option. It would stay between us, of course," he says as he puts his hand on your shoulder.');
    scene.text('"What do I have to do?" you ask. Deep down inside, you feel like you already know the answer.');
    scene.text('He decides to be straight with you. "You see, my wife is away on a business trip as usual and won\'t be home for weeks. I\'m a man with needs and my job is very stressful as you can imagine. I need you to help me relax, relieve the tension, so to speak. So, I\'m going to fuck you. I\'m going to fuck you any way I want. If you do good, you\'ll get your medicine and I won\'t tell your mother. Deal?"');
    scene.text('You knew it was coming, but you\'re baffled by his audacity. He stares you down while several thoughts race through your mind. You really need this treatment, but is it worth it?');
  } else {
    scene.text('"Can I, I mean… Can we, er… How… Is there something I can do for you? My mother really can\'t find out!" you sob in desperation. You\'re terrified at the thought of what your mother would do if she knew.');
    // TODO-QSP: dynamic text: The doctor knows he has you cornered. "We all need things, <<$pcs_nickname>>. If...
    scene.text(`The doctor knows he has you cornered. "We all need things, ${((s as any).pcs_nickname ?? 0)}. If you help me with my needs, I can help you with yours."`);
    scene.text('He continues: "My wife is away on a business trip and won\'t be home for weeks. I\'m a man with needs and my job is very stressful as you can imagine. I need you to help me relax, relieve the tension, so to speak. What do you say?"');
    scene.text('"What do you…" you hesitate. You know exactly what he\'s suggesting, but you can\'t say it.');
    scene.text('The doctor puts his hands on your hips and smiles at you confidently. "A beautiful girl like you always has other options."');
    // TODO-QSP: dynamic text: He gropes your <<$titsize>> breasts for a while before he undoes his belt.
    scene.text(`He gropes your ${((s as any).titsize ?? 0)} breasts for a while before he undoes his belt.`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run out of the office [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run out of the office [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('In a panic, you grab your clothes and run out of the office. You know you can\'t talk about this with anyone. If you say anything, Dr. Petrovich would tell your mother about your addiction. You quickly get dressed in an empty examination room, wondering how you\'re going to get out of this mess now.');
    if (((s as any).loc ?? 0) === 'kuhrPar') {
      scene.actions([
        { label: 'Leave', goto: ['mother', 'referral'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back', goto: ['pav_clinic', 'Petrovich1'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Do what you have to do', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_6.jpg');
    scene.text('You sigh and slowly slide down from the chair, kneeling in front of the doctor as he pulls out his semi-hard cock. You grasp it in your hand and reluctantly start licking it while rubbing your hand up and down the shaft. As his cock begins to get harder, you become fascinated by the changes to his manhood. You find yourself starting to get involved in pleasuring him… maybe this won\'t be so bad after all. To your surprise, you think you might even be starting to enjoy the feel and taste of his hot flesh. You move your hand faster, still licking his now fully erect cock and his breathing slightly accelerates. You think maybe that\'s it, maybe he\'s about to come…');
    // TODO-QSP: dynamic text: But, no. Instead the doctor lays his hand on the back of your head. You want to ...
    scene.text(`But, no. Instead the doctor lays his hand on the back of your head. You want to raise your head to see what he wants, but instead he pulls you towards his groin and your ${((s as any).pc_desc ?? 0)?.['lips']} lips begin to stretch over his slippery cockhead.`);
    qspCall(s, 'arousal', 'hj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    if (((s as any).Venera ?? 0) > 0) {
      scene.actions([{ label: 'Continue', goto: ['pav_clinic', 'gynoblow'] }]);
    }
    if ((!((s as any).gpoli_doctorhavesex ?? 0))) {
      (s as any).gpoli_doctorhavesex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_7.jpg');
    scene.text('You want to move back, but there\'s nowhere to go. His stiff cock is in front of you, and his powerful hand on the back of your head pulling you in closer. The masculine smell of his throbbing cock fills your nose as you breathe and you have to admit, it excites you!');
    scene.text('He begins to relax a little, letting you pull back until just the tip of his cock is between your lips before he pulls your head closer again, forcing his cock deeper each time. At first you\'re okay, but at a certain point you can\'t keep up any more and gag on his cock when he thrusts it in deep again. You can tell he\'s enjoying this from the sadistic grin on his face. "Try breathing through your nose."');
    scene.text('You do as he says, and it does indeed make things a bit easier as he starts fucking your mouth, your saliva drooling down his shaft and over his hairy balls. The air of the office is filled with wet slurps and snorts as he pounds his cock into your mouth deeper and deeper, sometimes making you gag involuntarily as the head of his cock slips down your throat. With a sudden thrust, you can feel his curly pubic hair against your lips as he forces his cock down your throat as far as it\'ll go. You panic as you can\'t breathe, but he just as suddenly pulls his dick out of your mouth again. Thankfully, you get a chance to catch your breath.');
    scene.text('"I think that got me lubed up properly," he says with a lusty voice. You can tell he\'s very excited now, and aren\'t sure you want to find out what happens next. Nevertheless, you\'re too far in to back down now. "Come on, now it\'s time to go deep."');
    scene.text('"What do you mean?" you start to ask, but get your answer almost immediately as Dr. Petrovich pulls you up from the floor and bends you over the chair. You can\'t help but let out a moan as he rubs the head of his slippery cock against your engorged clitoris.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_8.jpg');
    scene.text('You can feel your arousal rising when his body touches yours. As Dr. Petrovich keeps massaging your clitoris with his cock, you can feel your juices start leaking from your swollen pussy and run down your quivering thighs. You can hear the wet squelching sounds as he plows his throbbing cock between your soaking wet pussy lips.');
    scene.text('Your tender flesh resists for a moment, but then surrenders. You feel the walls of your vagina stretch open, letting the invader in as you let out a passionate groan.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'boyStat', 'A68');
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_9.jpg');
    scene.text('Your body feels like it\'s getting hotter and hotter as beads of sweat form on your forehead. With every thrust Dr. Petrovich fucks you faster and harder, and you can feel your excitement growing too. You start involuntarily moaning as his hard hot member penetrates you ever deeper without giving you any pause.');
    scene.text('You can no longer control yourself and have a thunderous orgasm as the doctor keeps fucking you relentlessly. Waves of bliss sear your nerves and your mouth opens in a silent scream as you\'re consumed with pleasure.');
    scene.text('He suddenly pulls his dick out of you and you almost fall to the floor, but he catches you with his powerful arms and lowers you onto a table where you feel his cock slide back into your quivering pussy.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the table', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_10.jpg');
    scene.text('He picks up the pace again and fucks you hard and fast like before. Your body no longer listens to you, and you find yourself eagerly bucking your hips against his thrusts. You feel that tingle starting up inside you again… If he keeps this up, you\'re going to cum all over his cock again.');
    scene.text('The doctor smiles at you while he pulls his dick out. "I bet I could give you another type of orgasm, one that you maybe never had before. Wait here, I\'ll be right back."');
    scene.text('You kind of hear him say something, but at the same time you\'re still too stuck in your own world to realize what he just said. When the high from your orgasm wears off, you look around the room. Where did he go?');
    scene.text('Just as you\'re about to get off the table, he returns with a jar of lubricant in his hand and a latex glove on one hand. He motions for you to turn around, which you obediently do.');
    scene.text('Several of his gloved fingers dip inside the jar, and when he pulls it up you see the lubricant slowly dripping from them. He puts them against your tight sphincter and spreads some of the lube over it before thrusting three fingers in.');
    scene.text('"Ouch!" you cry out when you feel his fingers stretch out your asshole. It hurts a little, and you feel a bit uncomfortable when he pulls his fingers away and spreads more lubricant over his cock. Before you can object, you feel the thick head of his cock pushing past your sphincter, stretching you out even further.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub');
    qspCall(s, 'arousal', 'anal_finger', (-5), 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal sex', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_11.jpg');
    scene.text('You want to pull away from him, but you\'re trapped between Dr. Petrovich and a wall. He slowly moves his hips, letting you get used to the size of his thick rod inside your ass. Despite your best efforts you can\'t relax your anus, only slowly getting used to the size of him.');
    scene.text('When he starts to speed up, you nearly cry and groan loudly with every thrust.');
    scene.text('"This won\'t do. You\'re going to alert the entire clinic if you keep screaming like that!" he mutters and takes his dick out of your ass.');
    scene.text('"Come on, get on the floor," he orders after he throws his coat down. He spreads some more lubricant over his gloved fingers and smears it over your throbbing asshole.');
    qspCall(s, 'arousal', 'anal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sex on the floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_12.jpg');
    scene.text('To your surprise, he ignores your ass and drives his dick back into your pussy instead. He fucks you with short, rough thrusts, almost as if he\'s fucking the annoyance out of his system. It doesn\'t feel very pleasant at first, but you soon moan and start enjoying the feeling again when your body relaxes.');
    scene.text('When he notices you\'re gasping faster, he quickly pulls his cock out of your pussy and rams it inside your asshole in one fluent motion. You cry out loud, partially from the pain and partially because you\'re frustrated… You were so close! Despite the discomfort and pain you\'re experiencing, you rub your clitoris, hoping it will take your mind off the pain and hopefully getting that orgasm you\'re craving.');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_13.jpg');
    scene.text('Now that you\'re so aroused, the anal sex doesn\'t hurt quite as much. You furiously rub your clit while he roughly pounds your stretched asshole, slowly losing your mind when a second orgasm hits you. Dr. Petrovich must feel your anus contracting around his cock when you cum with it inside you.');
    scene.text('He was close as well, and after you ride out your orgasm he gives it a few more thrusts before he pulls out and moves his hips towards your face. He grabs you by the hair and guides his cock towards your mouth, and you obediently open your mouth to let it in.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'boyStat', 'A68');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_14.jpg');
    scene.text('You feel too tired to object, even if you wanted to, and have no choice but to take his load in your mouth. You obediently show it to him before swallowing it and licking your lips. He moves his slowly softening dick towards your mouth once more, letting you suck and lick it clean.');
    scene.text('He lets out a satisfied sigh and starts putting his clothes back on as if nothing happened.');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/gyno/sex/gpoli_15.jpg');
    scene.text('You follow his example, and also put your clothes back on.');
    scene.text('When you\'re both fully dressed, he has a wide grin on his face. "Well now, one good turn deserves another. Wait here, I\'ll go get your shot."');
    scene.text('He prepares an injection from a bottle marked "0.45% Sodium Chloride Injection USP" and you swallow nervously as he fills a rather large looking syringe with the unfamiliar chemical.');
    scene.text('He tells you to bend over, but seems to have some problems finding the correct spot for the shot as you feel his hand squeezing your ass cheeks in several spots.');
    scene.text('You\'re afraid he\'s going to stick the needle in your used asshole before he finally decides on a spot on your ass cheek and he swabs it with disinfectant before aiming the syringe at it.');
    scene.text('You feel a sharp pinch, then the feeling of a cold liquid being injected into your ass cheek. It isn\'t as bad as you thought it was going to be, but you\'re still relieved when it\'s over.');
    scene.text('"There, all done," he says with a satisfied tone. "It could take up to 30 days for the symptoms to fully disappear. Just be sure not to snort any more or the cure won\'t work."');
    scene.text('"Thank you doctor," you quietly mumble as you straighten your clothes.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
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

function enterMaternityWard(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_know_mward = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).lact_ev ?? {})['gpoli_temp_var'] = 0;
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    scene.img('images/locations/pavlovsk/clinic/mward/mward.jpg');
    scene.text('You\'re in the maternity ward, which contains a lot of babies and nurses taking care of them.');
    if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pcs_gpolimilkdonation ?? 0) === 3) {
      scene.actions([
        { label: 'Talk to the nurse (0:05)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/clinic/mward/old_nurse.jpg');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>, how can I help you?" the nurse asks with a smile.
    scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}, how can I help you?" the nurse asks with a smile.`);
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', 'maternity_ward'] },
      { label: 'Donate your breast milk (0:15)', handler: (st: GameState) => {
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = 0;
    (s as any).pcs_gpoli_donationsessioncount = 0;
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('You talk to the nurse and she leads you into the quiet room.');
    scene.actions([
      { label: 'Have your breasts pumped', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('You sit down and take off your top.');
    if (((s as any).lactation ?? 0)?.['breastmv'] > ((s as any).lactation ?? 0)?.['breastmm']*8/10) {
      scene.text('The nurse looks surprised at your engorged breasts.');
      scene.text('"Oh dearie, those look painfully full! I hope the pumping will make you feel better."');
    }
    if (((s as any).pain ?? 0)?.['nipples'] >= 60) {
      scene.img('images/pc/body/nipples/sore_nipple.jpg');
      scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit more of the yellowish cream from it.');
      scene.text('She applies the cream to your nipples and they start hurting less as a soothing sensation tingles through your breasts.');
      ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
    } else {
      scene.text('The nurse grabs the nipple balm and applies it to your nipples. It feels nice as she rubs it in.');
    }
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.actions([
      { label: 'Continue', goto: ['pav_clinic', 'maternity_ward_donation'] },
    ]);
  } },
    ]);
  } },
      { label: 'Check your file (0:05)', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/mward/formular.jpg');
    scene.text('The nurse hands you a file on how much you have donated so far.');
    scene.text('<br>----------------------------------------');
    scene.text('Analyzed milksample measurements');
    // TODO-QSP: dynamic text: Volume in ml: <<mward_donatesv/10>>ml
    scene.text(`Volume in ml: ${((s as any).mward_donatesv ?? 0)/10}ml`);
    // TODO-QSP: dynamic text: Fat in %: <<mward_donatesf/10>>.<<mward_donatesf mod 10>>%
    scene.text(`Fat in %: ${((s as any).mward_donatesf ?? 0)/10}.${((s as any).mward_donatesf ?? 0) % 10}%`);
    // TODO-QSP: dynamic text: Lactose in %: <<mward_donatess/10>>.<<mward_donatess mod 10>>%
    scene.text(`Lactose in %: ${((s as any).mward_donatess ?? 0)/10}.${((s as any).mward_donatess ?? 0) % 10}%`);
    scene.text('<br>----------------------------------------');
    if (((s as any).pcs_gpoli_totalmilkdonation_count ?? 0) > 0) {
      scene.text('Total breast milk donation statistics');
      if (((s as any).pcs_gpoli_totalmilkdonation ?? 0) < 100) {
        // TODO-QSP: dynamic text: Donated milk volume in liter: <<pcs_gpoli_totalmilkdonation/1000>>.0<<pcs_gpoli_...
        scene.text(`Donated milk volume in liter: ${((s as any).pcs_gpoli_totalmilkdonation ?? 0)/1000}.0${((s as any).pcs_gpoli_totalmilkdonation ?? 0) % 1000}l`);
      } else {
        // TODO-QSP: dynamic text: Donated milk volume in liter: <<pcs_gpoli_totalmilkdonation/1000>>.<<pcs_gpoli_t...
        scene.text(`Donated milk volume in liter: ${((s as any).pcs_gpoli_totalmilkdonation ?? 0)/1000}.${((s as any).pcs_gpoli_totalmilkdonation ?? 0) % 1000}l`);
      }
      // TODO-QSP: dynamic text: Donation count: <<pcs_gpoli_totalmilkdonation_count>>
      scene.text(`Donation count: ${((s as any).pcs_gpoli_totalmilkdonation_count ?? 0)}`);
      // TODO-QSP: dynamic text: Average milk volume per donation in ml: <<pcs_gpoli_totalmilkdonation/pcs_gpoli_...
      scene.text(`Average milk volume per donation in ml: ${((s as any).pcs_gpoli_totalmilkdonation ?? 0)/((s as any).pcs_gpoli_totalmilkdonation_count ?? 0)}`);
      // TODO-QSP: 'Paid money: '+$func('money', 'string_profit', (pcs_gpoli_totalmilkdonation/50)*100)
      scene.text('<br>----------------------------------------');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', 'maternity_ward'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['breastmv'] > ((s as any).lactation ?? 0)?.['breastmm']/8  &&  ((s as any).pcs_gpolimilkdonation ?? 0) <= 2) {
      scene.text('<br><br><center>One of the nurses looks at you suspiciously.<center>');
      scene.actions([
        { label: 'Talk to the nurse (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/clinic/mward/old_nurse.jpg');
    if (((s as any).preg ?? 0) >= 0  &&  ((s as any).pregtimes ?? 0) > 0  &&  ((s as any).pcs_gpolimilkdonation ?? 0) <= 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
      scene.text('You walk up to the nurse. "Uhmmm… Hello?"');
      scene.text('"Which one is yours?" she asks.');
      scene.text('"Mine? I don\'t understand…"');
      scene.text('The nurse looks at you, then down at your breasts and then back at you. "Well, you\'re obviously lactating. Have you come to breastfeed your child?"');
    } else {
      if (((s as any).preg ?? 0) === 0  &&  ((s as any).pregtimes ?? 0) === 0  &&  ((s as any).pcs_gpolimilkdonation ?? 0) <= 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
        scene.text('You walk up to the nurse. "Uhmmm… Hello?"');
        scene.text('The nurse looks you up and down while raising an eyebrow. "You don\'t look like you\'ve ever had a child. How are you lactating?"');
        scene.text('You\'re surprised by the sudden and precise analysis. "How… How do you know?"');
        scene.text('"I\'ve been working here for years. Trust me, I can tell by the smell. Now why are you lactating?" she asks again.');
      } else {
        if (((s as any).preg ?? 0) === 0  &&  ((s as any).pregtimes ?? 0) === 0  &&  ((s as any).pcs_gpolimilkdonation ?? 0) <= 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
          scene.text('You walk up to the nurse. "Uhmmm… Hello?"');
          scene.text('The nurse looks you up and down while raising an eyebrow. "You don\'t look like you\'ve ever had a child. How are you lactating?"');
          scene.text('You\'re confused by her comment and tilt your head. "Huh? What are you talking about?"');
          scene.text('The nurse points at your breasts, circling around the pen in her hand. "Your breasts… You obviously have milk in them. Trust me, I\'ve been working here for years and know what lactating breasts look like."');
          scene.text('You look at her in shock, then down at your cleavage. "This can\'t be! I\'ve never been pregnant… I mean… Why should I be lactating?"');
          scene.text('The nurse eyes you up and down again while frowning before standing up. "Come with me and we\'ll have this checked out."');
        } else {
          if (((s as any).preg ?? 0) >= 0  &&  ((s as any).pregtimes ?? 0) > 0  &&  ((s as any).pcs_gpolimilkdonation ?? 0) <= 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
            scene.text('You walk up to the nurse. "Uhmmm.. Hello?"');
            scene.text('"Which one is yours?" she asks.');
            scene.text('"Mine? I don\'t understand…"');
            scene.text('The nurse looks at you, then down at your breasts and then back at you. "Well, you\'re obviously lactating. Have you come to breastfeed your child?"');
            scene.text('You look at her, then down at your cleavage. "This can\'t be! I mean… Why should I be lactating?"');
            scene.text('The nurse eyes you up and down again while frowning before standing up. "Come with me and we\'ll have this checked out."');
          } else {
            if (((s as any).pcs_gpolimilkdonation ?? 0) <= 0) {
              scene.text('You walk up to the nurse. "Uhmmm… Hello?"');
              scene.text('"Which one is yours?" she asks.');
              scene.text('"Mine? I don\'t understand…"');
              scene.text('The nurse looks at you, then down at your breasts and then back at you. "Well, you\'re obviously lactating. Have you come to breastfeed your child?"');
            } else {
              scene.text('You walk up to the nurse. "Hello…"');
              scene.text('"Ah, it\'s you again," she says as she looks you up and down.');
              if (((s as any).pcs_gpolimilkdonation ?? 0) === 1  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).pregtimes ?? 0) === 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
                scene.text('"Changed your mind and want me to have you checked out?"');
              } else {
                if (((s as any).pcs_gpolimilkdonation ?? 0) === 1  &&  ((s as any).preg ?? 0) === 0  &&  ((s as any).pregtimes ?? 0) === 0  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
                  scene.text('"Are you going to tell me how you\'re lactating?"');
                } else {
                  if (((s as any).pcs_gpolimilkdonation ?? 0) === 2) {
                    scene.text('"Did you clear your mind up and want donate your breast milk?"');
                  } else {
                    scene.text('"What do you want?"');
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).pcs_gpolimilkdonation ?? 0) < 1) {
      (s as any).pcs_gpolimilkdonation = 1;
    }
    if (((s as any).pcs_gpolimilkdonation ?? 0) < 2) {
      if (((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
        scene.actions([
          { label: 'Accept her offer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_gpolimilkdonation = 2;
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = (qspFunc(s, 'lact_lib', '$get_breastmilk', 5, 1))/100;
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = 0;
    ((s as any).lactation ?? {})['pc_aware'] = 1;
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('The nurse leads you into a quiet room containing a chair, a table and a breast pump.');
    scene.text('The nurse invites you to sit down and you reluctantly pull up your shirt and present your breasts to her.');
    scene.text('She presses down on your areola and to your surprise, white drops start to develop on your nipples. The nurse gives them another squeeze and streams of white liquid suddenly squirt out of you.');
    scene.text('"Oh my god!" you exclaim in shock.');
    scene.text('The nurse looks up at you with a caring expression. "No worries, this can happen from time to time."');
    scene.text('You\'re still surprised and perplexed by what you\'re seeing. "I\'m lactating!"');
    scene.text('The nurse takes a small wet wipe and cleans your breasts, then signals that you can cover yourself up.');
    scene.text('"We always need breast milk here. You should think about donating your milk. We will even compensate you for your efforts."');
    scene.text('She cleans her hands. "But I think you should leave for now, so you can get used to your new ability."');
    scene.text('She opens the door to let you out of the room.');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Explain yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/mward/old_nurse.jpg');
    if ((!((s as any).knowpreg ?? 0))) {
      (s as any).pcs_gpolimilkdonation = 2;
      if (((s as any).lactation ?? 0)?.['induced'] === 1) {
        scene.text('"Erm… I used a breast pump on myself…" you blush in embarresment.');
      } else {
        scene.text('"I don\'t really know… It just started one day…" you explain, blushing from embarresment.');
      }
      scene.text('The nurse nods at you professionally and pulls some papers together.');
      scene.text('"Have you ever thought of donating your breast milk?" she asks.');
      scene.text('"Donating?" you ask in response.');
      scene.text('"Yes, donating. We pump your breasts and collect the milk to give to the mothers that aren\'t able to breastfeed yet. We also offer a bit of money for your donation. Interested?"');
      (s as any).pcs_gpolimilkdonation = 2;
      scene.actions([
        { label: 'Give it a try (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_gpolimilkdonation = 3;
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('The nurse leads you into a room. It is quiet in here. There is a chair a table and a breast pump.');
    scene.text('You sit down and the nurse invites you to take off your top.');
    if (((s as any).pain ?? 0)?.['nipples'] >= 60  &&  ((s as any).pcs_knows_nipplecream ?? 0) <= 0) {
      scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
      scene.text('"What\'s that?" you ask.');
      scene.text('The nurse looks up at you. "This is nipple balm. It helps with sore nipples during pumping. Don\'t you know this?"');
      scene.text('You shake your head and watch as the nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
      ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      scene.text('"Where do I get this stuff?" you ask.');
      scene.text('"You can buy it in the pharmacy," she replies.');
      (s as any).pcs_knows_nipplecream = 1;
      scene.text('The nurse finishes rubbing you nipples with the nipple balm.');
    } else {
      if (((s as any).pain ?? 0)?.['nipples'] >= 60  &&  ((s as any).pcs_knows_nipplecream ?? 0) > 0) {
        scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
        scene.text('The nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
        ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      } else {
        scene.text('The nurse grabs the nipple balm and applies it to your nipples. It feels nice on your nipples as she rubs it in.');
      }
    }
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.text('"Okay, I\'m going to pump a sample first to check the quality and see if you\'re able to donate enough. You won\'t get paid this time."');
    scene.text('You nod and pull up your shirt as the nurse takes the pumps and puts them on your breasts. She flicks a switch and you can feel your nipples being sucked in with force as it slowly starts working your nipples.');
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = (qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15))/100;
    ((s as any).lactation ?? {})['breastpumped'] = 1;
    (s as any).pcs_orphanfeed = 0;
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 1000) {
      scene.text('Your breasts are able to fill both small bottles easily and the nurse nods at you.');
      scene.text('"You\'re able to produce a good amount of milk. You could breastfeed a baby with no issue."');
    } else {
      if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 500  &&  ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] < 1000) {
        scene.text('Your breasts aren\'t able to fill both small bottles and the nurse raises an eyebrow at you.');
        scene.text('"You\'re able to produce enough milk for a 50ml donation, but you might have trouble breastfeeding a baby properly."');
      } else {
        scene.text('You have trouble filling the bottles to the first mark and the nurse shakes her head.');
        scene.text('"Mhmm… Your breasts don\'t seem to produce enough milk. You can still come here and get yourself pumped, but we need at least 50ml for a valid donation."');
      }
    }
    scene.text('The nurse detaches the pump and allows you to redress.');
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] > 500) {
      (s as any).mward_donatesv = 500;
    } else {
      (s as any).mward_donatesv = ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'];
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 30) {
      (s as any).mward_donatesf = 60;
    } else {
      if (((s as any).pcs_mass ?? 0)?.['body'] > 20) {
        (s as any).mward_donatesf = 45;
      } else {
        if (((s as any).pcs_mass ?? 0)?.['body'] > 15) {
          (s as any).mward_donatesf = 20;
        } else {
          (s as any).mward_donatesf = 10;
        }
      }
    }
    if (((s as any).pcs_energy ?? 0) > 30) {
      (s as any).mward_donatess = Math.floor(Math.random() * 12) + 69;
    } else {
      if (((s as any).sick ?? 0) > 1) {
        (s as any).mward_donatess = Math.floor(Math.random() * 46) + 0;
      } else {
        (s as any).mward_donatess = Math.floor(Math.random() * 25) + 45;
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
        { label: 'Refuse to donate', handler: (st: GameState) => {
    scene.text('You refuse to donate your breast milk. The nurse looks disappointed in you as you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
      ]);
    } else {
      (s as any).pcs_gpolimilkdonation = 2;
      scene.text('"I don\'t have a kid here. I was just looking around," you explain.');
      scene.text('You look awkwardly at the nurse, who just nods at you professionally and pulls some papers together.');
      scene.text('"Have you ever thought of donating your breast milk?" she asks.');
      scene.text('"Donating?" you ask in response.');
      scene.text('"Yes, donating. We pump your breasts and collect the milk to give to the mothers that aren\'t able to breastfeed yet. We also offer a bit of money for your donation. Interested?"');
      (s as any).pcs_gpolimilkdonation = 2;
      scene.actions([
        { label: 'Give it a try (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_gpolimilkdonation = 3;
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('The nurse leads you into a quiet room containing a chair, a table and a breast pump.');
    scene.text('You sit down and the nurse invites you to take off your top.');
    if (((s as any).pain ?? 0)?.['nipples'] >= 60  &&  ((s as any).pcs_knows_nipplecream ?? 0) <= 0) {
      scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
      scene.text('"What\'s that?" you ask.');
      scene.text('The nurse looks up at you. "This is nipple balm. It helps with sore nipples during pumping. Don\'t you know this?"');
      scene.text('You shake your head and watch as the nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
      ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      scene.text('"Where do I get this stuff?" you ask.');
      scene.text('"You can buy it in the pharmacy," she replies.');
      (s as any).pcs_knows_nipplecream = 1;
      scene.text('The nurse finishes rubbing you nipples with the nipple balm.');
    } else {
      if (((s as any).pain ?? 0)?.['nipples'] >= 60  &&  ((s as any).pcs_knows_nipplecream ?? 0) > 0) {
        scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
        scene.text('The nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
        ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      } else {
        scene.text('The nurse grabs the nipple balm and applies it to your nipples. It feels nice on your nipples as she rubs it in.');
      }
    }
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.text('"Okay, I\'m going to pump a sample first to check the quality and see if you\'re able to donate enough. You won\'t get paid this time."');
    scene.text('You nod and pull up your shirt as the nurse takes the pumps and puts them on your breasts. She flicks a switch and you can feel your nipples being sucked in with force as it slowly starts working your nipples.');
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = (qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15))/100;
    ((s as any).lactation ?? {})['breastpumped'] = 1;
    (s as any).pcs_orphanfeed = 0;
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 1000) {
      scene.text('Your breasts are able to fill both small bottles easily and the nurse nods at you.');
      scene.text('"You\'re able to produce a good amount of milk. You could breastfeed a baby with no issue."');
    } else {
      if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 500  &&  ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] < 1000) {
        scene.text('Your breasts aren\'t able to fill both small bottles and the nurse raises an eyebrow at you.');
        scene.text('"You\'re able to produce enough milk for a 50ml donation, but you might have trouble breastfeeding a baby properly."');
      } else {
        scene.text('You have trouble filling the bottles to the first mark and the nurse shakes her head.');
        scene.text('"Mhmm… Your breasts don\'t seem to produce enough milk. You can still come here and get yourself pumped, but we need at least 50ml for a valid donation."');
      }
    }
    scene.text('The nurse detaches the pump and allows you to redress.');
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] > 500) {
      (s as any).mward_donatesv = 500;
    } else {
      (s as any).mward_donatesv = ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'];
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 40) {
      (s as any).mward_donatesf = 60;
    } else {
      if (((s as any).pcs_mass ?? 0)?.['body'] > 20) {
        (s as any).mward_donatesf = 45;
      } else {
        if (((s as any).pcs_mass ?? 0)?.['body'] > 15) {
          (s as any).mward_donatesf = 20;
        } else {
          (s as any).mward_donatesf = 10;
        }
      }
    }
    if (((s as any).pcs_energy ?? 0) > 30) {
      (s as any).mward_donatess = Math.floor(Math.random() * 12) + 69;
    } else {
      if (((s as any).sick ?? 0) > 1) {
        (s as any).mward_donatess = Math.floor(Math.random() * 46) + 0;
      } else {
        (s as any).mward_donatess = Math.floor(Math.random() * 25) + 45;
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
        { label: 'Refuse to donate', handler: (st: GameState) => {
    scene.text('You refuse to donate your breast milk. The nurse looks disappointed in you as you leave.');
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    } else {
      if (((s as any).pcs_gpolimilkdonation ?? 0) === 2) {
        scene.actions([
          { label: 'Offer to donate your breast milk (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_gpolimilkdonation = 3;
    scene.img('images/locations/pavlovsk/clinic/mward/pump_room.jpg');
    scene.text('The nurse smiles and gets up, leading you into a quiet room that contains a chair, a table and a breast pump.');
    scene.text('You sit down and the nurse invites you to take off your top.');
    if (((s as any).pain ?? 0)?.['nipples'] >= 60  &&  ((s as any).pcs_knows_nipplecream ?? 0) <= 0) {
      scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
      scene.text('"What\'s that?" you ask.');
      scene.text('The nurse looks up at you. "This is nipple balm. It helps with sore nipples during pumping. Don\'t you know this?"');
      scene.text('You shake your head and watch as the nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
      ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      scene.text('"Where do I get this stuff?" you ask.');
      scene.text('"You can buy it in the pharmacy," she replies.');
      (s as any).pcs_knows_nipplecream = 1;
      scene.text('The nurse finishes rubbing you nipples with the nipple balm.');
    } else {
      if (((s as any).pain ?? 0)?.['nipples'] >= 60) {
        scene.text('The nurse looks at your sore nipples and frowns before she grabs a small tin and takes a bit of the yellowish cream from it.');
        scene.text('She applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
        ((s as any).pain ?? {})['nipples'] = (((s as any).pain ?? {})['nipples'] ?? 0) - (20);
      } else {
        if (((s as any).pcs_knows_nipplecream ?? 0) <= 0) {
          scene.text('The nurse grabs a small tin and takes a bit of yellowish cream from it.');
          scene.text('"What\'s that?" you ask.');
          scene.text('The nurse looks up at you. "This is nipple balm. It helps during pumping and prevents nipple soreness. Don\'t you know this?"');
          scene.text('You shake your head and watch as the nurse applies the cream to your nipples. It feels nice and your nipples start hurting less as a soothing sensation tingles through your breasts.');
          scene.text('"Where do I get this stuff?" you ask.');
          scene.text('"You can buy it in the pharmacy," she replies.');
          (s as any).pcs_knows_nipplecream = 1;
          scene.text('The nurse finishes rubbing you nipples with the nipple balm.');
        } else {
          scene.text('The nurse grabs the nipple balm and applies it to your nipples. It feels nice as she rubs it in.');
        }
      }
    }
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.text('"Okay, I\'m going to pump a sample first to check the quality and see if you\'re able to donate enough. You won\'t get paid this time."');
    scene.text('You nod and pull up your shirt as the nurse takes the pumps and puts them on your breasts. She flicks a switch and you can feel your nipples being sucked in with force as it slowly starts working your nipples.');
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = (qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15))/100;
    ((s as any).lactation ?? {})['breastpumped'] = 1;
    (s as any).pcs_orphanfeed = 0;
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 1000) {
      scene.text('Your breasts are able to fill both small bottles easily and the nurse nods at you.');
      scene.text('"You\'re able to produce a good amount of milk. You could breastfeed a baby with no issue."');
    } else {
      if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 50  &&  ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] < 1000) {
        scene.text('Your breasts aren\'t able to fill both small bottles and the nurse raises an eyebrow at you.');
        scene.text('"You\'re able to produce enough milk for a 50ml donation, but you might have trouble breastfeeding a baby properly."');
      } else {
        scene.text('You have trouble filling the bottles to the first mark and the nurse shakes her head.');
        scene.text('"Mhmm… Your breasts don\'t seem to produce enough milk. You can still come here and get yourself pumped, but we need at least 50ml for a valid donation."');
      }
    }
    scene.text('The nurse detaches the pump and allows you to redress.');
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] > 500) {
      (s as any).mward_donatesv = 500;
    } else {
      (s as any).mward_donatesv = ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'];
    }
    if (((s as any).pcs_mass ?? 0)?.['body'] > 40) {
      (s as any).mward_donatesf = 60;
    } else {
      if (((s as any).pcs_mass ?? 0)?.['body'] > 20) {
        (s as any).mward_donatesf = 45;
      } else {
        if (((s as any).pcs_mass ?? 0)?.['body'] > 15) {
          (s as any).mward_donatesf = 20;
        } else {
          (s as any).mward_donatesf = 10;
        }
      }
    }
    if (((s as any).pcs_energy ?? 0) > 30) {
      (s as any).mward_donatess = Math.floor(Math.random() * 12) + 69;
    } else {
      if (((s as any).sick ?? 0) > 1) {
        (s as any).mward_donatess = Math.floor(Math.random() * 46) + 0;
      } else {
        (s as any).mward_donatess = Math.floor(Math.random() * 25) + 45;
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
    ]);
  } else {
    // TODO-QSP: dynamic text: The clinic is closed. It's open every day between '+func('time', 'get_time_strin...
    scene.text('The clinic is closed. It\'s open every day between \'+func(\'time\', \'get_time_string\', 6, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMaternityWardDonation(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 1;
    scene.img('images/locations/pavlovsk/clinic/mward/pumping.jpg');
    scene.text('The nurse attaches the pumps and switches them on.');
    if (((s as any).lactation ?? 0)?.['breastmv'] >= 0) {
      scene.text('Your nipples are worked by the pumps and you feel the pressure in your breasts easing as the pumps drain you of your milk.');
    } else {
      scene.text('Your nipples are worked by the pumps and you feel the pressure in your breasts easing as the pumps drain you. Your breasts tingle from the milk production as the pump demands more of your milk.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = qspFunc(s, 'lact_lib', '$get_breastmilk', 4, 15);
    ((s as any).lactation ?? {})['breastpumped'] = 1;
    scene.text('After 15 minutes, the nurse detaches the pumps from your breasts.');
    if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] >= 50000) {
      (s as any).pcs_gpoli_donationsessioncount = ((s as any).pcs_gpoli_donationsessioncount ?? 0) + (((s as any).lact_ev ?? {})?.['gpoli_milkedvolume']/10000);
      ((s as any).lact_ev ?? {})['gpoli_temp_var'] = (((s as any).lact_ev ?? {})?.['gpoli_milkedvolume']/50000);
      (s as any).pcs_gpoli_totalmilkdonation_count = ((s as any).pcs_gpoli_totalmilkdonation_count ?? 0) + (1);
      (s as any).pcs_gpoli_totalmilkdonation = ((s as any).pcs_gpoli_totalmilkdonation ?? 0) + ((((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50));
      if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 12) {
        // TODO-QSP: dynamic text: She looks astonished at the marvelous amounts of milk you've produced as she sto...
        scene.text(`She looks astonished at the marvelous amounts of milk you've produced as she stores away ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
        scene.text('"I can\'t believe you had that much inside you! I think a cow would be jealous!" she laughts heartily and you blush a little.');
      } else {
        if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 10) {
          // TODO-QSP: dynamic text: She looks amazed at the copious amounts of milk you've produced as she stores aw...
          scene.text(`She looks amazed at the copious amounts of milk you've produced as she stores away ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
          scene.text('"Dear lord, where do you store all this?!"');
        } else {
          if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 8) {
            // TODO-QSP: dynamic text: She looks surprised at the large amount of milk you've produced as she stores aw...
            scene.text(`She looks surprised at the large amount of milk you've produced as she stores away the ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
          } else {
            if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 6) {
              // TODO-QSP: dynamic text: She looks pleasantly satisfied at you as she stores away <<lact_ev['gpoli_temp_v...
              scene.text(`She looks pleasantly satisfied at you as she stores away ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
            } else {
              if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 4) {
                // TODO-QSP: dynamic text: She looks satisfied at you as she stores away <<lact_ev['gpoli_temp_var']*50>>ml...
                scene.text(`She looks satisfied at you as she stores away ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
              } else {
                if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] >= 2) {
                  // TODO-QSP: dynamic text: She looks satisfied at you as she stores away <<lact_ev['gpoli_temp_var']*50>>ml...
                  scene.text(`She looks satisfied at you as she stores away ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
                } else {
                  if (((s as any).lact_ev ?? 0)?.['gpoli_temp_var'] === 1) {
                    scene.text('She looks satisfied at you as she stores away one bottle with 50ml of your breast milk.');
                  } else {
                    // TODO-QSP: dynamic text: She looks satisfied at you as she stores away the <<lact_ev['gpoli_temp_var']*50...
                    scene.text(`She looks satisfied at you as she stores away the ${((s as any).lact_ev ?? {})?.['gpoli_temp_var']*50}ml of your breast milk in ${((s as any).lact_ev ?? 0)?.['gpoli_temp_var']} bottles.`);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] < 50000  &&  ((s as any).lact_ev ?? 0)?.['gpoli_milkedvolume'] > 0) {
        scene.text('She looks at you in disappointment.');
        // TODO-QSP: dynamic text: "Mhmm… I'm sorry, but this isn't enough milk for a valid donation. You only prov...
        scene.text(`"Mhmm… I'm sorry, but this isn't enough milk for a valid donation. You only provided ${((s as any).lact_ev ?? {})?.['gpoli_milkedvolume']/1000}ml of breast milk."`);
      } else {
        scene.text('She looks at you in disappointment.');
        scene.text('"Mhmm… I\'m sorry, but this isn\'t enough milk for a valid donation. You provided no breast milk at all."');
      }
    }
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = 0;
    if (((s as any).pcs_gpoli_donationsessioncount ?? 0) > 0) {
      (s as any).mward_donatemoney = (((s as any).pcs_gpoli_donationsessioncount ?? 0) * 3) / 10 * 10;
    } else {
      (s as any).mward_donatemoney = 0;
    }
    ((s as any).lactation ?? {})['nipple_cream_applied'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    if (((s as any).lactation ?? 0)?.['breastmv'] > ((s as any).lactation ?? 0)?.['breastmm']/2  &&  ((s as any).lactation ?? 0)?.['breastmv'] >= 100000) {
      scene.text('The nurse looks at your breasts.');
      scene.text('"Looks like you could go for another pumping. Shall we?"');
      scene.actions([
        { label: 'Have your breasts pumped again', goto: ['pav_clinic', 'maternity_ward_donation'] },
      ]);
    } else {
      scene.actions([
        { label: 'Ask to donate more', goto: ['pav_clinic', 'maternity_ward_donation'] },
      ]);
    }
    scene.actions([
      { label: 'Enough for today', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).pcs_gpoli_donationsessioncount ?? 0) > 0) {
      qspCall(s, 'money', 'earn', ((s as any).mward_donatemoney ?? 0));
      // TODO-QSP: dynamic text: You put your top back on and the nurse hands you '+$func('money', 'string_profit...
      scene.text('You put your top back on and the nurse hands you \'+$func(\'money\', \'string_profit\', mward_donatemoney)+\' for your donated breast milk.');
    } else {
      scene.text('You put your top back on.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    ((s as any).lact_ev ?? {})['gpoli_milkedvolume'] = 0;
  }, goto: ['pav_clinic', 'maternity_ward'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pcs_gpoli_donationsessioncount ?? 0) > 0) {
      // TODO-QSP: dynamic text: Sorry <<$pcs_firstname>>, we are closing now.
      scene.text(`Sorry ${((s as any).pcs_firstname ?? 0)}, we are closing now.`);
      // TODO-QSP: dynamic text: You put your top back on and the nurse hands you '+$func('money', 'string_profit...
      scene.text('You put your top back on and the nurse hands you \'+$func(\'money\', \'string_profit\', mward_donatemoney)+\' for your donated breast milk.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
      ]);
    } else {
      // TODO-QSP: dynamic text: The clinic is closed. It's open every day between '+func('time', 'get_time_strin...
      scene.text('The clinic is closed. It\'s open every day between \'+func(\'time\', \'get_time_string\', 6, 0)+\' and \'+func(\'time\', \'get_time_string\', 21, 0)+\'.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStdCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).GerpesOnce ?? 0) === 1) {
    scene.text('"You have genital herpes. Unfortunately, the complete cure for this disease is very expensive and we can\'t cure it here. On the upside, herpes is dormant most of the time and is quite manageable if you take good care of your body. When it\'s dormant, taking vitamins regularly will make sure it won\'t show itself."');
    if (((s as any).Gerpes ?? 0) >= 3) {
      if ((!((s as any).GerpesNapr ?? 0))) {
        (s as any).GerpesNapr = 3;
      } else {
        if (((s as any).GerpesNapr ?? 0) > 0) {
          scene.text('You need to see the nurse for your herpes drug injection.');
        }
      }
    } else {
      scene.text('Your herpes is currently in a dormant state.');
    }
  }
  if (((s as any).SifacOnce ?? 0) === 1) {
    (s as any).sifNapr = 1;
    // TODO-QSP: dynamic text: "You have syphilis. The cure for this disease used to be expensive. However, thi...
    scene.text('"You have syphilis. The cure for this disease used to be expensive. However, this deadly disease can now be with a single shot. The injection will cost \'+$func(\'money\', \'string_price\', 1000)+\'."');
  }
  if (((s as any).TriperOnce ?? 0) === 1) {
    scene.text('"We found gonorrhea. Fortunately, we can cure this disease."');
    if ((!((s as any).TriperNapr ?? 0))) {
      (s as any).TriperNapr = 5;
    } else {
      if (((s as any).TriperNapr ?? 0) > 0) {
        scene.text('You need to see the nurse for your gonorrhea injections.');
      }
    }
  }
  if (((s as any).KandidozOnce ?? 0) === 1) {
    scene.text('"You have a yeast infection. Unfortunately, the complete cure for this disease is very expensive and we can\'t cure it here. On the upside, it\'s not that harmful and can be treated easily to the point where it won\'t trouble you. When it\'s dormant, taking vitamins regularly will make sure it won\'t show itself."');
    if ((!((s as any).KandidNapr ?? 0))) {
      (s as any).KandidNapr = 1;
      scene.text('"The pills are available at the pharmacy across the street."');
    }
    if (((s as any).Kandidoz ?? 0) < 30) {
      scene.text('Your yeast infection is currently in remission. If you take vitamins daily, it will stay that way.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'reception':
      enterReception(s, scene);
      break;
    case 'Petrovich1':
      enterPetrovich1(s, scene);
      break;
    case 'Petrovich_birth_control':
      enterPetrovichBirthControl(s, scene);
      break;
    case 'Petrovich_birth_control2':
      enterPetrovichBirthControl2(s, scene);
      break;
    case 'Petrovich_birth_control3':
      enterPetrovichBirthControl3(s, scene);
      break;
    case 'Petrovich_checkup':
      enterPetrovichCheckup(s, scene);
      break;
    case 'Petrovich_checkup_prost':
      enterPetrovichCheckupProst(s, scene);
      break;
    case 'Petrovich_drug':
      enterPetrovichDrug(s, scene);
      break;
    case 'std_test':
      enterStdTest(s, scene);
      break;
    case 'referral':
      enterReferral(s, scene);
      break;
    case 'referral2':
      enterReferral2(s, scene);
      break;
    case 'gynoblow':
      enterGynoblow(s, scene);
      break;
    case 'badend':
      enterBadend(s, scene);
      break;
    case 'spravka_arrange':
      enterSpravkaArrange(s, scene);
      break;
    case 'spravka_money':
      enterSpravkaMoney(s, scene);
      break;
    case 'spravka_money_pale':
      enterSpravkaMoneyPale(s, scene);
      break;
    case 'spravka_money_pale2':
      enterSpravkaMoneyPale2(s, scene);
      break;
    case 'spravka_arrange_pale':
      enterSpravkaArrangePale(s, scene);
      break;
    case 'maternity_ward':
      enterMaternityWard(s, scene);
      break;
    case 'maternity_ward_donation':
      enterMaternityWardDonation(s, scene);
      break;
    case 'std_check':
      enterStdCheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_clinic: LocationDef = {
  name: 'pav_clinic',
  title: 'Clinic',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The entrance hall of Pavlovsk Poliklinik is a modest, well-worn space typical of a small town. Natural daylight filters through front windows onto pale turquise walls and scuffed light-gray floor tiles.'],
  enter: enter,
};
