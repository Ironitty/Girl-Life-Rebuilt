import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFrontDesk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 4) + 0;
  if (((s as any).temp_rand ?? 0) <= 1  ||  ((s as any).experimentQW ?? 0)?.['signed'] === 0) {
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\desk1.jpg');
    scene.text('A young woman, dressed in office clothes and wearing glasses, is sitting behind a desk.');
  } else {
    if (((s as any).temp_rand ?? 0) <= 2) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\nurse1.jpg');
      scene.text('A young nurse is sitting behind a desk.');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\nurse2.jpg');
      scene.text('An elderly nurse is sitting behind a desk.');
    }
  }
  if (((s as any).experimentQW ?? 0)?.['signed'] !== 0) {
    // TODO-QSP: dynamic text: She looks up as you walk in and warmly welcomes you inside. "Hello Miss <<$pcs_l...
    scene.text(`She looks up as you walk in and warmly welcomes you inside. "Hello Miss ${((s as any).pcs_lastname ?? 0)}, how can I help you today?"`);
    if (((s as any).experimentQW ?? 0)?.['trial_active'] === '') {
      scene.actions([
        { label: 'Ask which clinical trials are available', goto: ['city_experimental_trials_list', 'see_trials'] },
      ]);
    } else {
      if (((s as any).experimentQW ?? 0)?.['trial_duration'] > 0) {
        scene.text('You are already taking part in a clinical trial.');
      } else {
        scene.actions([
          { label: 'Report your findings', handler: (st: GameState) => {
    if (((s as any).pcs_intel ?? 0) < 50) {
      scene.text('You report your experience in as much detail as you can.');
      scene.text('"Thank you for your participation, it is invaluable to our research."');
    } else {
      scene.text('You report your experience in great detail, noting the various side effects that you\'ve noticed.');
      scene.text('"Thank you so much for your help! You\'ve helped us advance our research greatly!"');
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        (s as any).temp_tip = 10 * (((s as any).pcs_intel ?? 0) * (Math.floor(Math.random() * 3) + 1) / 10);
        // TODO-QSP: dynamic text: "I think your dedication should be rewarded," she adds and hands you various not...
        scene.text(`"I think your dedication should be rewarded," she adds and hands you various notes adding up to ${qspFunc(s, 'money', 'string_profit', ((s as any).temp_tip ?? 0))}.`);
        qspCall(s, 'money', 'earn', ((s as any).temp_tip ?? 0));
      }
    }
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = '';
    scene.actions([
      { label: 'Continue', goto: ['city_experimental_trials', 'front_desk'] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).experimentQW ?? 0)?.['times_participated_0'] >= 2  ||  ((s as any).experimentQW ?? 0)?.['times_participated_1'] !== 0  ||  ((s as any).experimentQW ?? 0)?.['times_participated_2'] !== 0  ||  ((s as any).experimentQW ?? 0)?.['times_participated_3'] !== 0  ||  ((s as any).experimentQW ?? 0)?.['times_participated_4'] !== 0) {
      scene.text('You also spot a small pharmaceutical stand to the side.');
      scene.actions([
        { label: 'Go to the experimental pharmacy', goto: ['city_experimental_trials_pharmacy', 'counter'] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['city_clinic', 'start'] },
    ]);
  } else {
    scene.text('She looks up as you walk in and warmely welcomes you inside. "Hello miss, how can I help you?"');
    scene.text('"I read an advert that you\'re looking for people to test new treatments? And that you compensate the subjects for it?" you reply.');
    scene.text('"We are at the forefront of medical research, and you could help us push the boundaries of modern medicine. Your contribution will help save countless lives. If you want to apply, please read and fill in this form."');
    scene.text('She hands over a clipboard.');
    if (((s as any).pcs_intel ?? 0) < 10) {
      scene.text('The form is filled with legal jargon, but you\'re pretty sure that you\'ll be paid to be experimented on and that these trials won\'t harm your health.');
    } else {
      if (((s as any).pcs_intel ?? 0) < 50) {
        scene.text('The form is filled with a lot of legal jargon, but you manage to grasp the important parts.');
        scene.text('The clinic will pay you to take an experimental treatment and any consequences are yours to bear, but they do guarantee your safety.');
      } else {
        if (((s as any).pcs_intel ?? 0) < 90) {
          scene.text('The form explains that you\'ll get paid to take part in testing experimental treatments.');
          scene.text('The clinic is not liable for any of the consequences, but they will not jeopardize your general health.');
          scene.text('Finally you are prohibited from disclosing the methods and results of the treatments to anybody not affiliated with the clinic.');
        } else {
          scene.text('The form is filled with complicated legal jargon intended to confuse the reader, but your sharp mind pierces the veil.');
          scene.text('You will get paid when you take part in testing experimental treatments which can result in permanent changes to your body and mind.');
          scene.text('You are solely responsible in dealing with those consequences and you may not reveal the contents nor results of the treatments. If you do so, then you can be sued for an exorbitant amount of money.');
          scene.text('Finally, reading between the lines, you also manage to grasp that some of these experiments aren\'t fully ethical.');
        }
      }
    }
    scene.text('At the bottom of the document is an area where you need to write down your full name, age and add your signature.');
    scene.actions([
      { label: 'Sign the document', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['signed'] = 1;
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\desk1.jpg');
    scene.text('You hand the signed document back to the woman.');
    // TODO-QSP: dynamic text: "Thank you Miss… <<$pcs_lastname>>," she says as she looks it over. "We'll add y...
    scene.text(`"Thank you Miss… ${((s as any).pcs_lastname ?? 0)}," she says as she looks it over. "We'll add you to our database and you can enter our various trials. The contract you signed is legally binding, so you're not allowed to discuss your experiences with anybody outside of this clinic."`);
    scene.text('"It\'s to protect our proprietary technology," she adds, seemingly having noticed the look on your face. "If you talk about what happens here, then you can leak our discoveries. Everything will be fine so long as you keep this to yourself."');
    scene.actions([
      { label: 'Return to the front desk', goto: ['city_experimental_trials', 'front_desk'] },
    ]);
  } },
      { label: 'Put the contract down and leave', goto: ['city_clinic', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'front_desk':
      enterFrontDesk(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_experimental_trials: LocationDef = {
  name: 'city_experimental_trials',
  title: 'A young woman, dressed in office clothes and wearing glasses',
  region: 'city',
  locationType: 'private',
  enter: enter,
};
