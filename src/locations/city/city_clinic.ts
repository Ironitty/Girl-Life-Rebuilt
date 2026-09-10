import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_clinic', 'start');
  (s as any).hosprand = Math.floor(Math.random() * 11) + 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Clinic</b></center>');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('A sign inside the clinic lists some of the services the clinic has to offer:');
  scene.text('<i>General practitioner: currently available');
  scene.text('Psychotherapist: currently available');
  // TODO-QSP: dynamic text: STD testing - ' + $func('money', 'string_price', 1000) + '.
  scene.text('STD testing - \' + $func(\'money\', \'string_price\', 1000) + \'.');
  scene.text('For hospital admissions, visit us on a Monday before the 10th of the month.');
  // TODO-QSP: dynamic text: An abortion at the woman's request can be performed up until the 84th day of pre...
  scene.text('An abortion at the woman\'s request can be performed up until the 84th day of pregnancy - \' + $func(\'money\', \'string_price\', 15000) + \'.');
  scene.text('Be warned, improperly performed abortions can be dangerous to your health. There is a risk of complications and the possibility of damage to your uterus.</i>');
  scene.text('At first, you thought the warning was only health department boiler-plate. However, no sooner do you finish thinking that then you notice a nurse pushing a cart of freshly sterilized coat hangers down the hallway and begin to wonder how competent this facility really is in terms of women\'s health…');
  scene.text('One area of the clinic is devoted to cosmetic surgery. A sign with directions on the wall point you to the surgeon\'s office.');
  if (((s as any).pcs_gpolimilkdonation ?? 0) >= 2  &&  ((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lact_ev ?? 0)?.['pcs_knows_milkbank'] < 1  &&  ((s as any).lactation ?? 0)?.['pc_aware'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec: minut += 5 & gt 'city_clinic', 'milk_reception'">Ask</a> at the r...
    scene.text('<a href="exec: minut += 5 & gt \'city_clinic\', \'milk_reception\'">Ask</a> at the reception if there is the possibility for breast milk donation');
  } else {
    // TODO-QSP: dynamic text: A small <a href="exec: minut += 5 & gt 'city_clinic', 'milk_advertisement'">adve...
    scene.text('A small <a href="exec: minut += 5 & gt \'city_clinic\', \'milk_advertisement\'">advertisement</a> at reception catches your eye.');
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
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).clinic['docheal'] = ((s as any).daystart ?? 0);
    qspCall(s, 'medical_din', 'healthTreatment');
    qspCall(s, 'stat', '');
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
  qspCall(s, 'clinic_functions', 'reception_attend', ((s as any).reception_category ?? 0));
  scene.actions([
    { label: 'Leave the clinic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'See a cosmetic surgeon', goto: ['city_clinic', 'cosmetic1'] },
  ]);
  scene.build();
}

export const city_clinic: LocationDef = {
  name: 'city_clinic',
  title: 'Clinic',
  region: 'city',
  locationType: 'public_indoors',
  description: ['A sign inside the clinic lists some of the services the clinic has to offer:'],
  enter: enter,
};
