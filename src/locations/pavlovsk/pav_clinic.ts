import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

export const pav_clinic: LocationDef = {
  name: 'pav_clinic',
  title: 'Clinic',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The entrance hall of Pavlovsk Poliklinik is a modest, well-worn space typical of a small town. Natural daylight filters through front windows onto pale turquise walls and scuffed light-gray floor tiles.'],
  enter: enter,
};
