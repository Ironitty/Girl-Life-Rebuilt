import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'foto', 'start');
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
    scene.actions([{ label: 'Continue', goto: ['foto', 'studio'] }]);
  }
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if ((!((s as any).studio_strip ?? 0))) {
    scene.text('Apparently there\'s a "dress code" here and all models are required to be naked in the studio, even if they never do nude shoots. Supposedly, it\'s primarily to save time when dressing up and the wardrobe department has an easier time fitting the clothing properly if you\'re already naked. And if it\'s a nude shoot, it saves even more time because then you can walk right on set. Makes sense you suppose… Kinda…');
  } else {
    scene.text('Entering the studio, you head to the back room to strip down.');
  }
  (s as any).special_model['roll'] = Math.floor(Math.random() * 1371) + 30;
  (s as any).special_skill_model['roll'] = Math.floor(Math.random() * 500) + 1;
  (s as any).foto['documentary'] = Math.floor(Math.random() * 100) + 1;
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
    { label: 'Strip down', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fullstrip.mp4');
    (s as any).studio_strip = ((s as any).studio_strip ?? 0) + (1);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (3);
    if (((s as any).pcs_inhib ?? 0) >= 60) {
      if (((s as any).studio_inhib ?? 0) === 3) {
        scene.text('As soon as you walk in the room, your clothes start to come off almost automatically. You\'re so used to being naked in the studio that you\'ve practically forgotten that you were ever shy about your body or had problems with the studio\'s policies.');
        scene.text('Banging the locker door shut, you head out to get to work.');
      } else {
        scene.text('You walk into the back room and strip down without hesitation, completely comfortable with your own body.');
        scene.text('You throw your clothes into a locker and bang it shut, heading back into the studio to do some work.');
      }
    } else {
      if (((s as any).pcs_inhib ?? 0) < 20) {
        (s as any).studio_inhib = 1;
        scene.text('You squirm with discomfort as you drop the last of your clothing and stand completely naked. You feel cold, your skin tingling with discomfort and your hands immediately covering yourself up as you look around shivering in self-consciousness. You really don\'t like being naked like this, especially in front of strangers, but rules are rules. What are you supposed to do about <i>this??</i>');
      } else {
        (s as any).studio_inhib = 2;
        scene.text('You take a deep breath as you pull off the last of your clothing and shove it in your locker. You can\'t help but notice your hardening nipples in response to the cool air and rub your arm in discomfort. You\'re getting a little more used to this "dress code" policy, but you still don\'t like it.');
        if (((s as any).pcs_inhib ?? 0) < 30) {
          (s as any).studio_inhib = 2;
          scene.text('You take a deep breath as you pull off the last of your clothing and shove it in your locker. You can\'t help but notice your hardening nipples in response to the cool air and rub your arm in discomfort. You\'re getting a little more used to this "dress code" policy, but you still don\'t like it.');
        } else {
          (s as any).studio_inhib = 3;
          scene.text('As you bang your locker door closed with your clothes locked behind it, you notice that you don\'t feel as much of the apprehension that you used to. You still feel nervous and you still have some suspicions about the motivations of the "no clothes" policy, but you have to admit that it\'s been slowly helping you become more confident in yourself and your body. Maybe it\'s not such a bad thing after all, you think while another nervous tingle passes through your chest.');
          if (((s as any).pcs_inhib ?? 0) < 40) {
            scene.text('Nervous tingles passing through your body, you remove the last of your clothes and place them in your locker. Being naked in front of other people still makes you shiver but it\'s not like you have any other options other than to stop working here.');
          } else {
            scene.text('You strip out of your clothing and put it in your locker, the skin of your exposed body tingling in contact with the cool air. Uncomfortable as you are, you\'re more or less used to the "no-dress code" policy at this point, even if it doesn\'t exactly make you happy.');
            if (((s as any).pcs_inhib ?? 0) < 60) {
              scene.text('You strip out of your clothing and put it in your locker, the skin of your exposed body tingling in contact with the cool air. You\'re not terribly happy with this "no-dress code" policy, but it\'s not like you\'re shy enough to make excuses. You work at a nude modelling agency after all.');
            } else {
              scene.text('You walk into the back room and strip down without hesitation, completely comfortable with your own body.');
            }
            scene.text('Banging the locker door shut, you head out to get to work.');
          }
          if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).pcs_inhib ?? 0) < 30  &&  ((s as any).daystart ?? 0) < ((s as any).studio_underwear ?? 0)) {
            scene.text('You really wish you had brought panties today…');
          }
          if (((s as any).mesec ?? 0) > 0  &&  (!((s as any).isprok ?? 0))) {
            // TODO-QSP: msg 'As your panties come off you realize you''re going to have a problem when your pad goes with it...
          }
          qspCall(s, 'outfit', 'backup', 'foto');
          if (((s as any).clothingworntype ?? 0) !== 'nude') {
            qspCall(s, 'shortgs', 'undress');
          }
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
          ]);
        }
        if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).pcs_inhib ?? 0) < 60  &&  ((s as any).studio_strip ?? 0) <= 1  &&  ((s as any).underwear ?? 0)?.['type'] !== 2) {
          if (((s as any).studio_strip_talk ?? 0) < 3) {
            scene.actions([
              { label: 'Just strip to your panties', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'clothing', 'strip');
    }
    (s as any).lastwornpantytype['foto'] = ((s as any).pantyworntype ?? 0);
    (s as any).lastwornpantynumber['foto'] = ((s as any).pantywornnumber ?? 0);
    (s as any).lastwornbratype['foto'] = ((s as any).braworntype ?? 0);
    (s as any).lastwornbranumber['foto'] = ((s as any).brawornnumber ?? 0);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    if ((!((s as any).studio_strip_talk ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'studio_strip_talk1'] }]);
    } else {
      if (((s as any).braworntype ?? 0) !== 'none') {
        qspCall(s, 'bras', 'remove');
      }
      scene.img('images/locations/city/citycenter/photo/strip1.mp4');
      scene.text('As you drop your clothes into the locker, you can\'t help but take small comfort in the warmth of the panties you still wear. It\'s not much, but as long as you have time to put this off, you\'ll take solace in what little coverage they provide.');
      scene.actions([
        { label: 'Go to the main floor', handler: (st: GameState) => {
    if (((s as any).studio_strip_talk ?? 0) === 1  &&  ((s as any).studio_underwear ?? 0) <= ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'studio_strip_talk2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'studio_strip_talk3'] }]);
      scene.actions([{ label: 'Continue', goto: ['foto', 'studio'] }]);
    }
  } },
      ]);
    }
  } },
            ]);
          }
          if (((s as any).studio_strip_talk ?? 0) < 2  &&  (((s as any).braworntype ?? 0) !== 'none'  ||  ((s as any).underwear ?? 0)?.['type'] === 2)) {
            scene.actions([
              { label: 'Just strip to your underwear', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'backup', 'foto');
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'clothing', 'strip');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip3.mp4');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    if ((!((s as any).studio_strip_talk ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'studio_strip_talk1'] }]);
    } else {
      if (((s as any).underwear ?? 0)?.['type'] === 2) {
        scene.text('You just strip down to your bodysuit, putting the rest of your belongings into your locker. You know that you need to get over this eventually but you\'re still not confident enough yet.');
      } else {
        scene.text('You just strip down to your underwear, putting the rest of your belongings into your locker. You know that you need to get over this eventually but you\'re still not confident enough yet.');
      }
      scene.text('You bang your locker shut and go to get to work.');
      scene.actions([
        { label: 'Go to the main floor', handler: (st: GameState) => {
    if (((s as any).studio_underwear ?? 0) <= ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['foto_events', 'studio_strip_talk2'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['foto', 'studio'] }]);
    }
  } },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const foto: LocationDef = {
  name: 'foto',
  title: 'Photography studio',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Apparently there\'s a "dress code" here and all models are required to be naked in the studio, even if they never do nude shoots. Supposedly, it\'s primarily to save time when dressing up and the wardrobe department has an easier time fitting the clothing properly if you\'re already naked. And if it\'s a nude shoot, it saves even more time because then you can walk right on set. Makes sense you suppose… Kinda…'],
  enter: enter,
};
