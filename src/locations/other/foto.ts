import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'foto', 'start');
  (s as any).location_type = 'public_indoors';
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
    qspGoto(s, 'foto', 'studio');
  }
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if ((!((s as any).studio_strip ?? 0))) {
    scene.text('Apparently there\'s a "dress code" here and all models are required to be naked in the studio, even if they never do nude shoots. Supposedly, it\'s primarily to save time when dressing up and the wardrobe department has an easier time fitting the clothing properly if you\'re already naked. And if it\'s a nude shoot, it saves even more time because then you can walk right on set. Makes sense you suppose… Kinda…');
  } else {
    scene.text('Entering the studio, you head to the back room to strip down.');
  }
  ((s as any).special_model = (s as any).special_model ?? {})['roll'] = (Math.floor(Math.random() * 1371) + 30);
  ((s as any).special_skill_model = (s as any).special_skill_model ?? {})['roll'] = (Math.floor(Math.random() * 500) + 1);
  ((s as any).foto = (s as any).foto ?? {})['documentary'] = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).pcs_inhib ?? 0) < 60  &&  ((s as any).studio_strip ?? 0) <= 1  &&  ((s as any).underwear ?? 0)?.['type'] !== 2) {
    if (((s as any).studio_strip_talk ?? 0) < 3) {
      scene.actions([
        { label: 'Just strip to your panties', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'clothing', 'strip');
    }
    ((st as any).lastwornpantytype = (st as any).lastwornpantytype ?? {})['foto'] = ((st as any).pantyworntype ?? 0);
    ((st as any).lastwornpantynumber = (st as any).lastwornpantynumber ?? {})['foto'] = ((st as any).pantywornnumber ?? 0);
    ((st as any).lastwornbratype = (st as any).lastwornbratype ?? {})['foto'] = ((st as any).braworntype ?? 0);
    ((st as any).lastwornbranumber = (st as any).lastwornbranumber ?? {})['foto'] = ((st as any).brawornnumber ?? 0);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (2);
    if ((!((st as any).studio_strip_talk ?? 0))) {
      qspGoto(st, 'foto_events', 'studio_strip_talk1');
    } else {
      if (((st as any).studio_underwear ?? 0) > 0) {
        if (((st as any).braworntype ?? 0) !== 'none') {
          qspCall(st, 'bras', 'remove');
        }
        scene.img('images/locations/city/citycenter/photo/strip1.mp4');
        scene.text('As you drop your clothes into the locker, you can\'t help but take small comfort in the warmth of the panties you still wear. It\'s not much, but as long as you have time to put this off, you\'ll take solace in what little coverage they provide.');
        scene.actions([
          { label: 'Go to the main floor', handler: (st: GameState) => {
    if (((st as any).studio_strip_talk ?? 0) === 1  &&  ((st as any).studio_underwear ?? 0) <= ((st as any).daystart ?? 0)) {
      qspGoto(st, 'foto_events', 'studio_strip_talk2');
    } else {
      if (((st as any).studio_strip_talk ?? 0) === 2  &&  ((st as any).studio_underwear ?? 0) <= ((st as any).daystart ?? 0)) {
        qspGoto(st, 'foto_events', 'studio_strip_talk3');
      } else {
        qspGoto(st, 'foto', 'studio');
      }
    }
  } },
        ]);
      }
    }
  } },
      ]);
    }
    if (((s as any).studio_strip_talk ?? 0) < 2  &&  (((s as any).braworntype ?? 0) !== 'none'  ||  ((s as any).underwear ?? 0)?.['type'] === 2)) {
      scene.actions([
        { label: 'Just strip to your underwear', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'backup', 'foto');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'clothing', 'strip');
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip3.mp4');
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    if ((!((st as any).studio_strip_talk ?? 0))) {
      qspGoto(st, 'foto_events', 'studio_strip_talk1');
    } else {
      if (((st as any).underwear ?? 0)?.['type'] === 2) {
        scene.text('You just strip down to your bodysuit, putting the rest of your belongings into your locker. You know that you need to get over this eventually but you\'re still not confident enough yet.');
      } else {
        scene.text('You just strip down to your underwear, putting the rest of your belongings into your locker. You know that you need to get over this eventually but you\'re still not confident enough yet.');
      }
      scene.text('You bang your locker shut and go to get to work.');
      scene.actions([
        { label: 'Go to the main floor', handler: (st: GameState) => {
    if (((st as any).studio_underwear ?? 0) <= ((st as any).daystart ?? 0)) {
      qspGoto(st, 'foto_events', 'studio_strip_talk2');
    } else {
      qspGoto(st, 'foto', 'studio');
    }
  } },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
    { label: 'Strip down', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fullstrip.mp4');
    (st as any).studio_strip = ((st as any).studio_strip ?? 0) + (1);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (3);
    if (((st as any).pcs_inhib ?? 0) >= 60) {
      if (((st as any).studio_inhib ?? 0) === 3) {
        scene.text('As soon as you walk in the room, your clothes start to come off almost automatically. You\'re so used to being naked in the studio that you\'ve practically forgotten that you were ever shy about your body or had problems with the studio\'s policies.');
        scene.text('Banging the locker door shut, you head out to get to work.');
      } else {
        scene.text('You walk into the back room and strip down without hesitation, completely comfortable with your own body.');
        scene.text('You throw your clothes into a locker and bang it shut, heading back into the studio to do some work.');
      }
    } else {
      if (((st as any).pcs_inhib ?? 0) < 20) {
        (st as any).studio_inhib = 1;
        scene.text('You squirm with discomfort as you drop the last of your clothing and stand completely naked. You feel cold, your skin tingling with discomfort and your hands immediately covering yourself up as you look around shivering in self-consciousness. You really don\'t like being naked like this, especially in front of strangers, but rules are rules. What are you supposed to do about <i>this??</i>');
      } else {
        if (((st as any).pcs_inhib ?? 0) < 30  &&  ((st as any).studio_inhib ?? 0) === 1) {
          (st as any).studio_inhib = 2;
          scene.text('You take a deep breath as you pull off the last of your clothing and shove it in your locker. You can\'t help but notice your hardening nipples in response to the cool air and rub your arm in discomfort. You\'re getting a little more used to this "dress code" policy, but you still don\'t like it.');
        } else {
          if (((st as any).pcs_inhib ?? 0) < 30) {
            (st as any).studio_inhib = 2;
            scene.text('You take a deep breath as you pull off the last of your clothing and shove it in your locker. You can\'t help but notice your hardening nipples in response to the cool air and rub your arm in discomfort. You\'re getting a little more used to this "dress code" policy, but you still don\'t like it.');
          } else {
            if (((st as any).pcs_inhib ?? 0) < 40  &&  ((st as any).studio_inhib ?? 0) === 2) {
              (st as any).studio_inhib = 3;
              scene.text('As you bang your locker door closed with your clothes locked behind it, you notice that you don\'t feel as much of the apprehension that you used to. You still feel nervous and you still have some suspicions about the motivations of the "no clothes" policy, but you have to admit that it\'s been slowly helping you become more confident in yourself and your body. Maybe it\'s not such a bad thing after all, you think while another nervous tingle passes through your chest.');
            } else {
              if (((st as any).pcs_inhib ?? 0) < 40) {
                scene.text('Nervous tingles passing through your body, you remove the last of your clothes and place them in your locker. Being naked in front of other people still makes you shiver but it\'s not like you have any other options other than to stop working here.');
              } else {
                if (((st as any).pcs_inhib ?? 0) < 60  &&  ((st as any).studio_inhib ?? 0) === 3) {
                  scene.text('You strip out of your clothing and put it in your locker, the skin of your exposed body tingling in contact with the cool air. Uncomfortable as you are, you\'re more or less used to the "no-dress code" policy at this point, even if it doesn\'t exactly make you happy.');
                } else {
                  if (((st as any).pcs_inhib ?? 0) < 60) {
                    scene.text('You strip out of your clothing and put it in your locker, the skin of your exposed body tingling in contact with the cool air. You\'re not terribly happy with this "no-dress code" policy, but it\'s not like you\'re shy enough to make excuses. You work at a nude modelling agency after all.');
                  } else {
                    scene.text('You walk into the back room and strip down without hesitation, completely comfortable with your own body.');
                  }
                }
              }
            }
          }
        }
      }
      scene.text('Banging the locker door shut, you head out to get to work.');
    }
    if (((st as any).pantyworntype ?? 0) !== 'none'  &&  ((st as any).pcs_inhib ?? 0) < 30  &&  ((st as any).daystart ?? 0) < ((st as any).studio_underwear ?? 0)) {
      scene.text('You really wish you had brought panties today…');
    }
    if (((st as any).mesec ?? 0) > 0  &&  (!((st as any).isprok ?? 0))) {
      // TODO-QSP: msg 'As your panties come off you realize you''re going to have a problem when your pad goes with it...
    }
    qspCall(st, 'outfit', 'backup', 'foto');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'shortgs', 'undress');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go back to the main floor', goto: ['foto', 'studio'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterStudioClosing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'restore', 'foto');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Photography studio</b></center>');
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('It\'s after midnight and the studio is closing down. You get dressed and leave before you get locked in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterStudio(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 3) {
    qspGoto(s, 'foto', 'studio_closing');
  }
  if (((s as any).krystal ?? 0)?.['porn_card_day'] > 0  &&  ((((s as any).krystal ?? 0)?.['porn_card_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= ((s as any).krystal ?? 0)?.['porn_card_hour'])  ||  ((s as any).krystal ?? 0)?.['porn_card_day'] < ((s as any).daystart ?? 0))  &&  (!((s as any).pornstudio ?? 0))) {
    qspGoto(s, 'model_krystal', 'krystal_porn_card');
  }
  qspCall(s, 'core_library', 'setloc', 'foto', 'studio');
  (s as any).location_type = 'public_indoors';
  (s as any).practice_session = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).fame ?? 0)?.['city_modelling'] < 200  ||  ((s as any).modelfoto ?? 0)?.['nude'] <= 0) {
    ((s as any).model = (s as any).model ?? {})['rank'] = 0;
  } else {
    if (((s as any).fame ?? 0)?.['city_modelling'] < 240) {
      ((s as any).model = (s as any).model ?? {})['rank'] = 1;
    } else {
      if (((s as any).fame ?? 0)?.['city_modelling'] < 280) {
        ((s as any).model = (s as any).model ?? {})['rank'] = 2;
      } else {
        if (((s as any).fame ?? 0)?.['city_modelling'] < 320) {
          ((s as any).model = (s as any).model ?? {})['rank'] = 3;
        } else {
          if (((s as any).fame ?? 0)?.['city_modelling'] < 360) {
            ((s as any).model = (s as any).model ?? {})['rank'] = 4;
          } else {
            if (((s as any).fame ?? 0)?.['city_modelling'] < 400) {
              ((s as any).model = (s as any).model ?? {})['rank'] = 5;
            } else {
              if (((s as any).fame ?? 0)?.['city_modelling'] < 440) {
                ((s as any).model = (s as any).model ?? {})['rank'] = 6;
              } else {
                if (((s as any).fame ?? 0)?.['city_modelling'] < 560) {
                  ((s as any).model = (s as any).model ?? {})['rank'] = 7;
                } else {
                  if (((s as any).fame ?? 0)?.['city_modelling'] < 620) {
                    ((s as any).model = (s as any).model ?? {})['rank'] = 8;
                  } else {
                    if (((s as any).fame ?? 0)?.['city_modelling'] < 700) {
                      ((s as any).model = (s as any).model ?? {})['rank'] = 9;
                    } else {
                      ((s as any).model = (s as any).model ?? {})['rank'] = 10;
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
  (s as any).anastasia_in = (Math.floor(Math.random() * 2) + 0);
  (s as any).emily_in = (Math.floor(Math.random() * 2) + 0);
  (s as any).krystal_in = (Math.floor(Math.random() * 2) + 0);
  (s as any).jeff_in = (Math.floor(Math.random() * 2) + 0);
  (s as any).mari_in = (Math.floor(Math.random() * 2) + 0);
  scene.text('<center><b>Photography studio</b></center>');
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
    scene.text('You step into a large warehouse. Scattered throughout, you see large lights brightening a myriad of sets designed to look like different rooms or locations. As you look farther inside, you spot people move between or on the sets. Among them are beautiful women, some wearing fancy dresses or expensive underwear, and shockingly, some of them are nude. Those that stand on sets are surrounded by crews of people wearing black with cameras and other equipment. Strangely, every single woman you see who is not on a set is completely naked.');
    scene.text('It appears you are in some kind of photography studio. Just near the door you came in is a reception desk, out of place due to the fact that it simply sits in the middle of the room. A man sits behind it in the light of a desk lamp, doing something on a computer.');
    scene.text('Farther along, you can see what appear to be <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_albums/u0027, /u0027model_portraits/u0027); return false;">photo albums</a> that sit on a shelf.');
  } else {
    scene.text('You step onto the main floor of the studio, standing amongst the various sets and photographers who are working those sets. Sitting by the door is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027shortgs/u0027, /u0027img msg/u0027, /u0027images/locations/city/citycenter/photo/dress_code.jpg/u0027); return false;">sign</a> to remind models of the dress code.');
    scene.text('Farther along are the studio\'s collection of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_albums/u0027, /u0027model_portraits/u0027); return false;">photo albums</a> of their top 10 models. ');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWanderingModels(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    scene.actions([
      { label: 'Go to the showers', goto: ['foto', 'showers'] },
      { label: 'Go to your makeup station', goto: ['foto', 'makeup'] },
      { label: 'Talk to a manager', goto: ['foto', 'manager_talk'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMicrocameraAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).parkblackmail ?? 0) === 2) {
    scene.actions([
      { label: 'Look around for the blackmailer', goto: ['foto', 'blackm'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] !== 'employed') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHiringAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
{ label: 'Leave studio', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
]);
    return;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Look for work', handler: (st: GameState) => {
    scene.text('<center><b>Floor Manager</b></center>');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    (st as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
    if (((st as any).temp_rand ?? 0) < 6) {
      (st as any).temp_name = (((st as any).model ?? 0)?.['nickname']);
    } else {
      if (((st as any).temp_rand ?? 0) < 8) {
        (st as any).temp_name = (((st as any).model ?? 0)?.['firstname']);
      } else {
        (st as any).temp_name = (((st as any).model ?? 0)?.['firstname']) + ' ' + (((st as any).model ?? 0)?.['lastname']);
      }
    }
    (st as any).temp_ok_to_shoot = 1;
    if (((st as any).Venera ?? 0) > 2) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: <<$temp_name>>! There is no way anyone is going to want to see pictures of you w...
      scene.text(`${((st as any).temp_name ?? '')}! There is no way anyone is going to want to see pictures of you while your STD is so obvious, you should see a doctor.`);
    }
    if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: "<<$temp_name>>! Who knocked you up!? Didn''t we pay you enough to use contracep...
      scene.text(`"${((st as any).temp_name ?? '')}! Who knocked you up!? Didn't we pay you enough to use contraception? Sorry, but we don't specialize in this type of shots."`);
    }
    if (((st as any).pcs_apprnc ?? 0) < 80) {
      (st as any).temp_ok_to_shoot = 0;
      scene.text('"I\'m sorry but you are going to have to work on your appearance if you want to do a shoot."');
    }
    if (((st as any).cumsumbod ?? 0) - ((st as any).cumsumvag ?? 0) - ((st as any).cumsumass ?? 0) > (Math.floor(Math.random() * 6) + 0)) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: "Ugh, <<$temp_name>>, what the hell is that?" he looks at you and the cum on you...
      scene.text(`"Ugh, ${((st as any).temp_name ?? '')}, what the hell is that?" he looks at you and the cum on you with disgust. "We don't care what your sexual habits are outside of work, but we're not shooting Japanese porn here. At least take a shower after getting laid."`);
    }
    if (((st as any).pcs_leghair ?? 0) > 3) {
      (st as any).temp_ok_to_shoot = 0;
      scene.text('"Go shave your legs, we\'re not running a nature special on gorillas."');
    }
    if (((st as any).mesec ?? 0) > 0  &&  (!((st as any).isprok ?? 0))) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: "What the hell <<$temp_name>>!"
      scene.text(`"What the hell ${((st as any).temp_name ?? '')}!"`);
      scene.text('You follow his gaze to see the blood running down your legs.');
      scene.text('"Go wash that off and put a tampon in already! There\'s a dispenser in the shower room."');
    }
    if (((st as any).pcs_sweat ?? 0) >= 20) {
      (st as any).temp_ok_to_shoot = 0;
      scene.text('"You\'re all sweaty. Go take a shower before asking for work. And don\'t forget to do your makeup after."');
    }
    if ((!((st as any).pcs_makeup ?? 0))) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: "Your makeup is smeared all over your face <<$temp_name>>. Go clean up and see t...
      scene.text(`"Your makeup is smeared all over your face ${((st as any).temp_name ?? '')}. Go clean up and see the makeup artists first."`);
    }
    if (((st as any).pcs_makeup ?? 0) === 1) {
      (st as any).temp_ok_to_shoot = 0;
      // TODO-QSP: dynamic text: "<<$temp_name>>, you forget to do your makeup. Hurry up! We don''t have all day....
      scene.text(`"${((st as any).temp_name ?? '')}, you forget to do your makeup. Hurry up! We don't have all day."`);
    }
    if (((st as any).temp_ok_to_shoot ?? 0)) {
      if (((st as any).model ?? 0)?.['spcial_job_day'] !== ((st as any).daystart ?? 0)) {
        ((st as any).model = (st as any).model ?? {})['spcial_job_day'] = ((st as any).daystart ?? 0);
        if (((st as any).special_model ?? 0)?.['roll'] < Math.min(((st as any).fame ?? 0)?.['city_modelling'], 700)  &&  ((st as any).modelfoto ?? 0)?.['topless'] > 0  &&  ((st as any).hour ?? 0) < 15) {
          qspGoto(st, 'foto_events', 'fame');
        }
        if (((st as any).special_skill_model ?? 0)?.['roll'] < ((st as any).pcs_mdlng ?? 0)  &&  ((st as any).modelfoto ?? 0)?.['nip'] > 0) {
          qspGoto(st, 'foto_events', 'skill');
        }
        if (((st as any).foto ?? 0)?.['documentary'] >= 95  &&  ((st as any).pantyworntype ?? 0) === 'none'  &&  ((st as any).modelfoto ?? 0)?.['shoots']>= ((st as any).foto ?? 0)?.['documentary_timer']) {
          qspGoto(st, 'foto_model_documentary', '1st_documentary');
        }
      }
      // TODO-QSP: dynamic text: "Hello <<$temp_name>>. Are you here to work?"
      scene.text(`"Hello ${((st as any).temp_name ?? '')}. Are you here to work?"`);
      if (((st as any).first_fame_event ?? 0) === 2) {
        scene.actions([
          { label: 'Ask if there\'s special work available', goto: ['foto_events', 'special'] },
        ]);
      }
      scene.actions([
        { label: 'Perform the shoots', handler: (st: GameState) => {
    if (((st as any).model_job_week ?? 0) >= 2) {
      qspGoto(st, 'foto_practice', 'start');
    } else {
      qspGoto(st, 'foto_shoot', 'model');
    }
  } },
        { label: 'Never mind', goto: ['foto', 'studio'] },
      ]);
    }
  } },
    { label: 'Leave studio', handler: (st: GameState) => {
    if (((st as any).studio_underwear_steal ?? 0) > 0) {
      qspCall(st, 'outfit', 'restore', 'foto');
      qspCall(st, 'stat', '');
      scene.img('images/pc/activities/misc/dress_1.mp4');
      scene.text('You go to your locker in the back room and start to throw on your clothes when you suddenly remember that one of the managers took your underwear earlier today. You\'ll have to go see him to get it back…');
      scene.actions([
        { label: 'Go see the manager', goto: ['foto_events', 'underwear_steal2'] },
      ]);
    } else {
      qspCall(st, 'outfit', 'restore', 'foto');
      qspCall(st, 'stat', '');
      scene.img('images/pc/activities/misc/dress_1.mp4');
      scene.text('You go into the back room to put on clothes and get ready to go home.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'foto', 'bathroom');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/citycenter/photo/models${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('A gaggle of models crowd the <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirrors</a> and sinks, loudly chatting, giggling, and generally gossiping about life in the city and the studio.');
  scene.text('Why they don\'t do their makeup in the back where the mirrors and the lights are better is beyond you. But it can\'t be helped you suppose. The bathroom <i>is</i> the traditional place for girls to gossip after all.');
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['deodorant'] = ((st as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).AlexandriaQW ?? 0) === 1) {
    scene.actions([
      { label: 'Listen to the gossip', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/models1.jpg');
    scene.text('You are trying to find the "McGuffin" that Tatiana told you was somewhere in the agency and that was cursing the place, but you haven\'t had much luck… until now. You feel a magic tingle and snoop on an interesting titbit.');
    scene.text('"Oh my god! You need to meet this girl! She is an incredible mass… massa… masse… Damn! She is good with her hands!"');
    scene.text('"Sorry, I don\'t swing that way. Well… except on my boyfriend\'s birthday."');
    scene.text('"Huh?! No! Well… maybe? I mean that she can help you with your boob pains!"');
    scene.text('"You mean my BACK pains? Are you feeling alright? You sound a little off today."');
    scene.text('"What? Yes! I\'m feeling great! You <i>must</i> meet her! She\'s a redhead named Tatiana! She hangs out back there, in the room where we store the… umm… the things that we use for the shoots!"');
    scene.text('"You mean the props room?"');
    scene.text('Okay, that\'s a clue! Maybe you should search the props room?');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'bathroom'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen to the gossip', goto: ['foto_models', 'model_chatter'] },
    ]);
  }
  if (((s as any).AlexandriaQW ?? 0) === 2) {
    scene.actions([
      { label: 'Search the props\' room', goto: ['tatiana_missions', 'mission2A'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the studio floor', goto: ['foto', 'studio'] },
    { label: 'Go to the showers', goto: ['foto', 'showers'] },
    { label: 'Go to your makeup station', goto: ['foto', 'makeup'] },
  ]);
  scene.build();
}

function enterShowers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'foto', 'showers');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  ((s as any).krystal = (s as any).krystal ?? {})['shower_sex'] = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).krystal ?? 0)?.['shower_sex'] === 7  &&  ((s as any).krystal ?? 0)?.['status'] >= 3) {
    qspGoto(s, 'model_krystal', 'krystalshower');
  }
  scene.img('images/locations/city/citycenter/photo/shower.jpg');
  scene.text('In the center of the studio you find the staff shower room. This is where the models go if they need to clean up. There\'s no real privacy here. Anybody walking past can see right in, the only modesty being some panes of slightly frosted glass. Still, none of the other models seem to mind very much and sometimes converse or share shower stalls with each other.');
  scene.text('A little bit away are bathroom stalls with a line of sinks and mirrors on the wall opposite as well as several tampon dispensers and a bin full of disposable razors.');
  ((s as any).pcs_shave = (s as any).pcs_shave ?? {})['free_razor'] = 1;
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 0) {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  } else {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (1);
    (st as any).pcs_hairbsh = 0;
    (st as any).pcs_makeup = 1;
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (1);
    qspCall(st, 'stat', '');
    qspCall(st, 'din_van', 'showerdin');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You go into a stall and turn on the shower. You lather your body and wash.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((st as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('Despite the openness of the shower area, you can\'t help yourself and place the showerhead between your legs, massaging your pussy with powerful jets of warm water and fingers. ');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      if (((st as any).pcs_horny ?? 0) >= 70) {
        qspCall(st, 'mood', 'raise', 'small');
        (st as any).orgasm_or = 'no';
        qspCall(st, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
        (st as any).orgasm_or = 'yes';
        if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
          (st as any).orgasm_txt = 'Soon you feel a warm wave spreading over your entire body and you shudder as an orgasm overtakes you. You quickly look around hoping no one noticed your public masturbation session.';
        } else {
          (st as any).orgasm_txt = 'You loudly groan as you shudder in orgasm, uncaring if anyone notices what you\'re up to. In fact, it kind of turns you on and makes you want to keep going…';
        }
        qspCall(st, 'arousal', 'clit_vibe', 5, 'masturbate', 'exhibitionism');
      } else {
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
        qspCall(st, 'mood', 'raise', 'tiny');
        (st as any).orgasm_or = 'no';
        qspCall(st, 'arousal', 'masturbate', 5, 'exhibitionism');
        scene.text('At first it feels very nice, but after a while you become self conscious of how long you\'ve been masturbating in the public staff showers. You think maybe it\'s time to stop.');
      }
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Dry off', goto: ['foto', 'showers'] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'din_van', 'brit');
    scene.actions([
      { label: 'Get out of the shower', goto: ['foto', 'showers'] },
    ]);
  } },
    ]);
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Shave Options</a>');
  if (((s as any).mesec ?? 0) > 0  &&  (!((s as any).isprok ?? 0))) {
    scene.actions([
      { label: 'Use a tampon', handler: (st: GameState) => {
    (st as any).modeltampon = (Math.floor(Math.random() * 2) + 0);
    (st as any).isprok = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    if (((st as any).modeltampon ?? 0) === 1) {
      scene.text('Going to one of the dispensers, you take a tampon from it and tear open the packaging and inserting it into your pussy, carefully tucking the string inside so it won\'t be visible from the outside and photographers won\'t yell at you.');
      scene.text('Your woman\'s issue taken care of, you throw the trash away and finish up.');
    } else {
      scene.text('You go over to one of the dispensers and curse when you find it empty. Trying another one, you get your tampon and tear open the packaging, inserting it into your pussy and carefully tucking the string inside so it won\'t be visible from the outside and photographers won\'t yell at you.');
      scene.text('Your woman\'s issue taken care of, you throw the trash away and finish up.');
    }
    scene.actions([
      { label: 'Finish up', goto: ['foto', 'showers'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['deodorant'] = ((st as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'brit');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the studio floor', handler: (st: GameState) => {
    // TODO-QSP: pcs_shave['free_razor'] = 0
  }, goto: ['foto', 'studio'] },
    { label: 'Go to your makeup station', handler: (st: GameState) => {
    // TODO-QSP: pcs_shave['free_razor'] = 0
  }, goto: ['foto', 'makeup'] },
    { label: 'Go to the bathroom', handler: (st: GameState) => {
    // TODO-QSP: pcs_shave['free_razor'] = 0
  }, goto: ['foto', 'bathroom'] },
  ]);
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'foto', 'makeup');
  (s as any).location_type = 'public_indoors';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/mirrors.jpg');
  scene.text('The backstage area where you and the other girls put on your makeup.');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    scene.actions([
      { label: 'Brush your hair', handler: (st: GameState) => {
    scene.img(`${qspFunc(s, '$face_image', '')}`);
    scene.text('You pick up the brush on the table of your station and work it through your hair until it shines.');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).pcs_hairbsh = 1;
    scene.actions([
      { label: 'View results', goto: ['foto', 'makeup'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairbsh ?? 0) < 1  ||  ((s as any).pcs_makeup ?? 0) === 1) {
    scene.actions([
      { label: 'Do your own makeup', handler: (st: GameState) => {
    (st as any).menu_off = 1;
  }, goto: ['mirror', 'start'] },
      { label: 'Go to the makeup artists (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 5;
    (st as any).pcs_lipbalm = ((st as any).pcs_lipbalm ?? 0) + (8);
    scene.img('images/locations/city/citycenter/photo/makeup.jpg');
    scene.text('You ask for the makeup artists and they sit you down at your station to do their job.');
    scene.text('Perfectly precise and with deft hands, they work carefully, covering up any and all of your imperfections but also coloring your face in ways that flawlessly compliment the natural hues of your body, eyes, face, and hair. The process takes ages, but you know that it\'s worth it. This is a level of makeup that you could never achieve on your own.');
    scene.text('Finally, they finish and step back. Looking at yourself in the mirror, it\'s strange. Rather than looking dolled up, overdone, and fake, it\'s almost like you aren\'t even wearing makeup. Unlike some famous models, you still look like a real person. More importantly than that, you still look like you. It\'s just the perfect version of you.');
    scene.actions([
      { label: 'Finish', goto: ['foto', 'makeup'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['deodorant'] = ((st as any).mc_inventory['deodorant'] ?? 0) - (1);
    qspCall(st, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the studio', goto: ['foto', 'studio'] },
    { label: 'Go to the showers', goto: ['foto', 'showers'] },
  ]);
  scene.build();
}

function enterManagerTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('You approach the manager\'s desk.');
  // TODO-QSP: dynamic text: "Something I can help you with <<$model[''firstname'']>>?"
  scene.text(`"Something I can help you with ${(((s as any).model ?? 0)?.['firstname'] ?? '')}?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the studio', goto: ['foto', 'studio'] },
    { label: 'Change your model name', handler: (st: GameState) => {
    ((st as any).modelfoto = (st as any).modelfoto ?? {})['change_name'] = ((st as any).modelfoto['change_name'] ?? 0) + (1);
    scene.text('"I want to change my name in the listings," you say.');
    scene.text('"Okay, what do you want to be called instead?" he replies, pulling up your profile on a computer.');
    scene.actions([
      { label: 'Call me…', goto: ['foto', 'model_name3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).practice_session ?? 0))) {
    (s as any).model_job_week = ((s as any).model_job_week ?? 0) + (1);
    (s as any).model_week = (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7;
    ((s as any).modelfoto = (s as any).modelfoto ?? {})['shoots'] = ((s as any).modelfoto['shoots'] ?? 0) + (1);
    qspCall(s, 'money', 'earn', ((s as any).modelpayfin ?? 0));
    if (((s as any).model_job_week ?? 0) >= 2) {
      qspCall(s, 'jobs', 'suspend_job', 'city_aphrodite_model');
    }
    ((s as any).modelfoto = (s as any).modelfoto ?? {})['earnings'] = ((s as any).modelfoto['earnings'] ?? 0) + (((s as any).modelpayfin ?? 0));
    ((s as any).stat = (s as any).stat ?? {})['last_model'] = ((s as any).daystart ?? 0);
  } else {
    (s as any).practice_session = 0;
  }
  qspGoto(s, 'foto', 'studio');
  // TODO-QSP: end
  scene.build();
}

function enterHiringAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask about working as a glamour model', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    if (((st as any).vidage ?? 0) >= 40) {
      scene.text('You ask about working as a model, but the photographer says to you, "I\'m sorry, but you look like a pretty mature woman, we need models with a more youthful appearance." This is his way of telling you that you look too old for this business.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
      ]);
    } else {
      if (((st as any).pcs_skin ?? 0) < 40) {
        scene.text('"Girl, your face is covered in acne unless you improve your appearance there is no chance of working here."');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
        ]);
      } else {
        if (((st as any).pcs_bmi ?? 0) >= ((st as any).foto_weight ?? 0)  &&  ((st as any).foto_weight ?? 0) > 0) {
          scene.text('You walk up to the front desk and find the same man who interviewed you previously. He looks up at you from his computer as you approach and frowns.');
          scene.text('Before you can say anything, he sternly says, "Girl, I told you to lose weight, not put it on! Now get out of here until you slim down some!"');
          scene.text('The comment turns your face bright red and you stop in your tracks. He stares at you angrily until you slowly start to back up and head towards the door.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
          ]);
        } else {
          if (((st as any).pcs_bmi ?? 0) < ((st as any).foto_weight ?? 0)  &&  ((st as any).foto_weight ?? 0) > 0) {
            qspGoto(st, 'foto', 'interview2');
          } else {
            if (((st as any).fotofakepassport ?? 0) === 1  &&  ((st as any).age ?? 0) < 18) {
              scene.text('You walk up to the front desk and find the same man who "interviewed" you previously. He looks up at you from his computer as you approach.');
              scene.text('"Hello there. Did you find your passport?"');
              if (((st as any).fakepassport ?? 0) !== 1) {
                scene.text('"Uhh… no, sorry… I just-"');
                scene.text('"Alright," he interrupts you. "No problem. Just come back when you have it." He immediately stops paying attention to you and goes back to looking at his computer.');
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    scene.text('You step away from the desk with a sigh. You hoped to work something out but it looks like it\'s no use. Damn. You really need to find a fake passport! That or just wait a few years…');
    scene.actions([
      { label: 'Leave', goto: ['foto', 'start'] },
    ]);
  } },
                  { label: 'Come clean and tell the truth', handler: (st: GameState) => {
    (st as any).fotofakepassport = 2;
    scene.text('You sigh. There\'s no point in dragging this out. You\'ll never be able to work here at this rate. Leaning over the desk, you whisper to him.');
    // TODO-QSP: dynamic text: "Okay, here''s the truth. I''m not the age I said I was. I''m <<$func(''string''...
    scene.text(`"Okay, here's the truth. I'm not the age I said I was. I'm ${qspFunc(s, 'string', 'parse_number', ((st as any).age ?? ''))}. But I still want to work here. Isn't there some way we can work this out?"`);
    scene.text('"Hmmm…" He rubs his chin thoughtfully, smiling while he looks you up and down. Just the way he stares gives you the impression that he\'s undressing you with his eyes, remembering what you look like naked. "Alright. I\'m not supposed to do this but I like your tits and I wouldn\'t mind seeing more of that around here."');
    scene.text('<i>He was thinking about me naked! I knew it!</i>');
    scene.text('"There\'s a small printing shop in the Red Light District. If you can come up with 30.000 cash, the guy there can sell you a fake passport that says you\'re 18. If you can do that, I can at least have some deniability and you can work here. Deal?"');
    scene.text('"Deal."');
    scene.text('"Good. Now don\'t come back without that passport. I don\'t like having my time wasted."');
    scene.text('He shoos you away and you leave the studio, getting ready for the next step.');
    if (qspFunc(s, 'money', 'can_afford', 30000) === 0) {
      // TODO-QSP: dynamic text: '<i>Great. Now I just need to find ' + $func('money', 'string_price', 30000) + '...
      scene.text('<i>Great. Now I just need to find 30000₽ for the fake passport. Just great. Big load of trouble this job is…</i>');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
                ]);
              } else {
                scene.text('"Yup, I\'ve got it right here."');
                scene.text('You hand over your fake passport and he inspects it, comparing it to something on his screen and occasionally clacking on his keyboard. You feel nervous that he might be looking for discrepancies and find out it\'s fake before you realize he\'s looking back and forth because he\'s copying the information into the computer. Probably for employee records or something like that.');
                scene.actions([
                  { label: 'Continue', goto: ['foto', 'model_name1'] },
                ]);
              }
            } else {
              if (((st as any).fotofakepassport ?? 0) >= 2  &&  ((st as any).age ?? 0) < 18) {
                scene.text('You walk up to the front desk and find the same man who "interviewed" you previously. He looks up from his computer and recognizing you, he gives you a lewd smile and a knowing look.');
                scene.text('"I see you\'re back. Did you, uhh, \'find\' your passport?"');
                if (((st as any).fakepassport ?? 0) !== 1) {
                  scene.text('"Not yet." He scowls at you.');
                  scene.text('"Then get out and stop wasting our time here."');
                  scene.actions([
                    { label: 'Leave the studio', goto: ['city_center', ''] },
                  ]);
                } else {
                  if (((st as any).fakepassport ?? 0) === 1  &&  ((st as any).fotofakepassport ?? 0) === 2) {
                    scene.text('"Yup," you smile back, handing him your new fake passport.');
                    scene.text('He takes it from you and begins copying the information onto his computer. As he types he occasionally glances at you, like he can\'t wait to see you naked again. Finally, he hits a key on his keyboard with an air of finality and holds up the fake passport one more time to compare the information he just typed in. Satisfied that it has been entered accurately, he nods and clicks a few more times to save the data.');
                    scene.actions([
                      { label: 'Continue', goto: ['foto', 'model_name1'] },
                    ]);
                  } else {
                    if (((st as any).fakepassport ?? 0) === 1  &&  ((st as any).fotofakepassport ?? 0) === 3) {
                      scene.text('"Yup," you smile back, handing him your new fake passport.');
                      scene.text('He takes it from you and begins copying the information onto his computer. As he types you jitter with excitement and he occasionally glances at you with a look that says he\'s staring through your clothing and he can\'t wait to see you naked again. You can\'t wait for him to see you either! Finally, he hits a key on his keyboard with an air of finality and holds up the fake passport one more time to compare the information he just typed in. Satisfied that it has been entered accurately, he nods and clicks a few more times to save the data.');
                      scene.actions([
                        { label: 'Continue', goto: ['foto', 'model_name1'] },
                      ]);
                    } else {
                      if (((st as any).fakepassport ?? 0) === 1  &&  ((st as any).fotofakepassport ?? 0) === 4) {
                        scene.text('Not playing along with his game, you flick the passport at his face.');
                        scene.text('"Here, take it pervert. Let\'s get this over with so I can make some money."');
                        scene.text('He picks it from where it fell onto his desk and begins copying the information onto his computer. As he types he occasionally glances at you, like he can\'t wait to see you naked again. You roll your eyes and give him the finger which makes him smile more but at least he goes back to focusing on typing. Finally, he hits a key on his keyboard with an air of finality and holds up the fake passport one more time to compare the information he just typed in. Satisfied that it has been entered accurately, he nods and clicks a few more times to save the data.');
                        scene.actions([
                          { label: 'Continue', goto: ['foto', 'model_name1'] },
                        ]);
                      }
                    }
                  }
                }
              } else {
                qspGoto(st, 'foto', 'interview');
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterInterview(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if (((s as any).anushkaQW ?? 0)?.['model_referral'] === 1) {
    scene.text('You walk up to the front desk and say Anushka sent you. You only have to wait a few minutes before somebody arrives to interview you.');
  }
  scene.text('"You want to work here? How old are you?"');
  if (((s as any).age ?? 0) >= 18) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'I\'m ' + String(((s as any).age ?? '') ?? ''), handler: (st: GameState) => {
    (st as any).howoldareyou = 2;
    qspGoto(st, 'foto', 'interview2');
  } },
    ]);
  } else {
    if (((s as any).fakepassport ?? 0) === 1) {
      scene.actions([
        { label: 'I\'m 18', goto: ['foto', 'interview2'] },
      ]);
    } else {
      (s as any).howoldareyou = 2;
      scene.actions([
        { label: 'Tell the truth', handler: (st: GameState) => {
    (st as any).age_truth = 1;
    qspGoto(st, 'foto', 'interview2');
  } },
        { label: 'Lie', handler: (st: GameState) => {
    (st as any).age_lie = 1;
    qspGoto(st, 'foto', 'interview2');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInterview2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  if (((s as any).pcs_bmi ?? 0) < ((s as any).foto_weight ?? 0)) {
    scene.text('You walk up to the front desk and find the same man who interviewed you previously. He looks up at you from his computer as you approach.');
    scene.text('"Hmm…" he says appraisingly. "You look like you lost some weight since the last time I saw you."');
    scene.text('"Yes I did!" You smile brightly at him.');
    scene.text('"Well, let\'s have a look then. Go ahead, undress for me."');
  } else {
    if (((s as any).fakepassport ?? 0) === 1  ||  ((s as any).age_lie ?? 0) === 1) {
      scene.text('"I\'m 18."');
      scene.text('"I see. Alright, undress. Let me take a look at you."');
    } else {
      if (((s as any).age_truth ?? 0) === 1  ||  ((s as any).age ?? 0) >= 18) {
        // TODO-QSP: dynamic text: "I''m <<age>>."
        scene.text(`"I'm ${((s as any).age ?? '')}."`);
        scene.text('"I see. Alright, undress. Let me take a look at you."');
      }
    }
  }
  if ((!((s as any).undress_ask ?? 0))) {
    scene.actions([
      { label: 'What? Why?', handler: (st: GameState) => {
    (st as any).undress_ask = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"What?? Why?"');
    scene.text('"Hmm? This is a modelling studio. That means sometimes we dress our models up in skimpy clothes and lingerie. Our studio is also popular for its nude spreads. You don\'t necessarily need to do shoots with nudity, but you need to have your body inspected to make sure you match the criteria for working here."');
  } },
    ]);
  }
  if ((!((s as any).why_here ?? 0))) {
    scene.actions([
      { label: 'Right here?', handler: (st: GameState) => {
    (st as any).why_here = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Right here?" you ask. "Shouldn\'t we be doing this in some kind of interview room or something?"');
    scene.text('"Might as well be here," he shrugs. "If you want to work here, we have a dress code policy for the models."');
    scene.text('"So? What does that have to do with me getting naked in the middle of a workplace?"');
    scene.text('"The policy is that models don\'t wear clothes while on the premises. It makes the logistics of dressing and undressing them for shoots easier. Come on. You want to work for a modelling studio that specializes in nude spreads. Don\'t get shy about showing your body to a few people here when you might be on a magazine cover showing it to the entire country. Now are you going to undress so I can do my job or are you going to keep wasting my time here?"');
  } },
    ]);
  }
  if (((s as any).pcs_inhib ?? 0) >= 40) {
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'backup', 'foto');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'shortgs', 'undress');
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip1.mp4');
    if (((st as any).pcs_bmi ?? 0) < ((st as any).foto_weight ?? 0)  &&  ((st as any).foto_weight ?? 0) > 0) {
      (st as any).foto_weight = ((st as any).pcs_bmi ?? 0);
      if (((st as any).foto_weight ?? 0) < 25) {
        (st as any).fotofit = 1;
      }
      scene.text('You strip off your clothing for the photographer once again, holding your breath and hoping that you\'ve slimmed down enough to work here now.');
      // TODO-QSP: 'Just like before, he circles you, asks you to adjust your pose for him, carefully inspecting every ...
      if (((st as any).foto_cupsize ?? 0) > ((st as any).tits ?? 0)) {
        scene.text('He pauses a moment, staring at your breasts more intently than you remember him looking last time.');
        if (((st as any).pcs_inhib ?? 0) < 50) {
          scene.text('You steel yourself to keep yourself from squirming but can\'t keep the blush off your face.');
          scene.text('"Are your breasts smaller than they were before?"');
          scene.text('"Erhm, yeah…" you mumble. "I might\'ve lost a cupsize or two when I lost the weight… Is that a problem…?" you ask awkwardly.');
        } else {
          scene.text('You look down at yourself to see if there\'s something on them, or at least a reason he\'s staring at them so much other than because he likes them.');
          scene.text('"Are your breasts smaller than they were before?"');
          scene.text('"Oh," you say, blinking. "Yeah, they\'re a little smaller now. Kind of happened when I lost weight. That\'s not a problem is it?"');
        }
        scene.text('"No, not at all," he says, shaking his head. "We don\'t tend to discriminate on breast size here. We have plenty of big tit and small tit girls, I was just wondering if it was my imagination or not."');
        scene.text('You nod in understanding.');
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).pcs_bmi ?? 0) < 25  ||  ((st as any).pcs_hotcat ?? 0) >= 6) {
      qspGoto(st, 'foto', 'job_offer');
    } else {
      qspGoto(st, 'foto', 'job_decline');
    }
  } },
      ]);
    } else {
      if (((st as any).undress_ask ?? 0) === 0  &&  (!((st as any).why_here ?? 0))) {
        scene.text('You unquestioningly take off your clothes and leave them on the floor while the photographer examines you.');
      } else {
        scene.text('You take off your clothes and leave them on the floor while the photographer examines you.');
      }
      // TODO-QSP: dynamic text: He circles you slowly, occasionally asking you to adjust your pose slightly, car...
      scene.text(`He circles you slowly, occasionally asking you to adjust your pose slightly, carefully inspecting every aspect of your nude body. Your ${((st as any).pcs_eyecolor ?? '')} eyes framed by your ${((st as any).pcs_haircolor ?? '')} hair, your ${(((st as any).pc_desc ?? 0)?.['lip size'] ?? '')} lips, your ${((st as any).titsize ?? '')} breasts, your ${(((st as any).pc_desc ?? 0)?.['skin'] ?? '')} ${((st as any).pcs_tanstate ?? '')} skin, your thighs, even your ${(((st as any).pc_desc ?? 0)?.['pubes'] ?? '')} pussy…`);
      scene.text('He spends several minutes doing this without saying anything. Several people walk by while he does, including several beautiful and nude women who glance at you, whispering to each other before moving on.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).pcs_bmi ?? 0) < 25  ||  ((st as any).pcs_hotcat ?? 0) >= 6) {
      qspGoto(st, 'foto', 'job_offer');
    } else {
      qspGoto(st, 'foto', 'job_decline');
    }
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).pcs_inhib ?? 0) > 40) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'easy');
    } else {
      if (((s as any).pcs_inhib ?? 0) > 20) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'medium');
      } else {
        qspCall(s, 'willpower', 'skill', 'inhib', 'self', 'hard');
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Reluctantly undress', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Reluctantly undress', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).reluctant_undress = 1;
    qspCall(st, 'outfit', 'backup', 'foto');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'shortgs', 'undress');
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/strip1.mp4');
    scene.text('You take a deep breath and begin to take off your clothes. As long as it\'s just this one time, you can handle it for now. You leave them on the floor while the photographer examines you.');
    // TODO-QSP: dynamic text: He circles you slowly, occasionally asking you to adjust your pose slightly, car...
    scene.text(`He circles you slowly, occasionally asking you to adjust your pose slightly, carefully inspecting every aspect of your nude body. Your ${((st as any).pcs_eyecolor ?? '')} eyes framed by your ${((st as any).pcs_haircolor ?? '')} hair, your ${(((st as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, your ${((st as any).titsize ?? '')} breasts, your ${(((st as any).pc_desc ?? 0)?.['skin'] ?? '')} ${((st as any).pcs_tanstate ?? '')} skin, your thighs, even your ${(((st as any).pc_desc ?? 0)?.['pubes'] ?? '')} pussy…`);
    scene.text('He spends several minutes doing this without saying anything. Several people walk by while he does, including several beautiful and nude women who glance at you, whispering to each other before moving on.');
    scene.text('You blush furiously at the attention, both his and the other models.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).pcs_bmi ?? 0) < 25  ||  ((st as any).pcs_hotcat ?? 0) >= 6) {
      qspGoto(st, 'foto', 'job_offer');
    } else {
      qspGoto(st, 'foto', 'job_decline');
    }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t do it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('Even if it\'s just this one time, you can\'t do it after all. It\'s simply too embarrassing to get naked in front of a total stranger. You blush, apologize, and leave the studio.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJobDecline(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if (((s as any).foto_weight ?? 0) >= 25) {
    scene.text('"I\'m sorry," he says shaking his head. "You did lose weight, I\'ll give you that, but it\'s not quite enough for our requirements. But you\'ve made progress. Give it a few more weeks of effort and come back again. We can still use you if you\'re within the limit."');
    scene.actions([
      { label: 'Sigh', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You sigh in disappointment as you pick your clothes back up and start to get dressed again. Still more weight to lose? Now what are you going to do? Keep trying or give up?');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } else {
    scene.text('"I\'m sorry to say, but you are too heavy to work here. We don\'t require girls to be stick thin, but it doesn\'t make us any money to sell magazines with overweight women in them."');
    scene.text('The man\'s words sting heavily at your confidence and you cover yourself in shame by instinct. He still continues to eye you up and down and you squirm as his gaze roams your breasts, stomach, and pussy.');
    scene.text('"That being said, I can still see that you have some potential. So go running, start working out. If you lose some weight, I could see you getting another shot at working here in the future."');
    scene.actions([
      { label: 'React solemnly', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You glumly pick your clothes up off the floor and get dressed before leaving. As you do, you stop at the door and look back in.');
    scene.text('<i>Is this it for me? Am I ever going to be able to lose enough weight to work here?</i>');
    (st as any).foto_weight = ((st as any).pcs_bmi ?? 0);
    (st as any).foto_cupsize = ((st as any).tits ?? 0);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      { label: 'React determinedly', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You nod at him, feeling a bit dejected but more determined than ever. You get dressed with purpose and head to the door. As you do, you think to yourself…');
    scene.text('<i>I will be able to do this! I\'ll get in shape and I\'ll work here one day! I\'m not going to lose my shot at this!</i>');
    (st as any).foto_weight = ((st as any).pcs_bmi ?? 0);
    (st as any).foto_cupsize = ((st as any).tits ?? 0);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if (((s as any).foto_weight ?? 0) < 25  &&  ((s as any).foto_weight ?? 0) > 0) {
    if (((s as any).age_lie ?? 0) === 1  ||  ((s as any).age ?? 0) >= 18) {
      scene.text('"Well done!" he says, with a smile. "You\'ve slimmed down to meet our requirements and you have a beautiful body. Now I just need your passport to confirm your age and put your info into our database, and you can be one of the registered models here at the studio."');
      scene.text('He holds out his hand expectantly.');
    } else {
      if (((s as any).age_truth ?? 0) === 1) {
        scene.text('"Well done!" he says, with a smile. "You\'ve slimmed down to meet our requirements and you have a beautiful body. Unfortunately… how old was it that you said you were again?"');
        // TODO-QSP: dynamic text: "<<age>>," you reply slowly.
        scene.text(`"${((s as any).age ?? '')}," you reply slowly.`);
        scene.text('"Ahuh… Well, you see, legally we can only hire girls 18 years and older, so unfortunately, you aren\'t going to be allowed to work here right now."');
      }
    }
  } else {
    if (((s as any).age ?? 0) >= 18  ||  ((s as any).fakepassport ?? 0) === 1  ||  ((s as any).age_lie ?? 0) === 1) {
      // TODO-QSP: dynamic text: 'When he''s finished, he stands in front of you and says,' + iif(pcs_mdlng >= 20...
      scene.text('When he\'s finished, he stands in front of you and says,' + ((((s as any).pcs_mdlng ?? 0) >= 20) ? ('"You\'re a natural. You already move like you\'ve been trained. ') : ('"You fit the criteria for the kind of images we want to produce. ')) + 'I just need to see your passport to confirm your age and put your info into our database," holding out his hand.');
    } else {
      if (((s as any).age_truth ?? 0) === 1) {
        // TODO-QSP: dynamic text: 'After several minutes, he stands in front of you and says,' + iif(pcs_mdlng >= ...
        scene.text('After several minutes, he stands in front of you and says,' + ((((s as any).pcs_mdlng ?? 0) >= 20) ? ('"You\'re a natural. You already move like you\'ve been trained. ') : ('"You fit the criteria for the kind of images we want to produce. ')) + 'However, you need to be 18 to work here. If you come back then, we\'ll be happy to have you." He smiles at you and starts heading back to his computer.');
      }
    }
  }
  if (((s as any).age ?? 0) >= 18) {
    scene.actions([
      { label: 'Show him your passport', handler: (st: GameState) => {
    scene.text('He takes it from you and begins copying the information onto his computer. As he types he occasionally glances at you, like he can\'t wait to see you naked again. Finally, he hits a key on his keyboard with an air of finality and holds up the passport one more time to compare the information he just typed in. Satisfied that it has been entered accurately, he nods and clicks a few more times to save the data.');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'model_name1'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fakepassport ?? 0) === 1) {
      scene.actions([
        { label: 'Show him your fake passport', handler: (st: GameState) => {
    ((st as any).model = (st as any).model ?? {})['age'] = 18;
    scene.text('He takes it from you and begins copying the information onto his computer. As he types he occasionally glances at you, like he can\'t wait to see you naked again. Finally, he hits a key on his keyboard with an air of finality and holds up the fake passport one more time to compare the information he just typed in. Satisfied that it has been entered accurately, he nods and clicks a few more times to save the data.');
    scene.actions([
      { label: 'Continue', goto: ['foto', 'model_name1'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).age_lie ?? 0) === 1) {
        scene.actions([
          { label: '"Uhh…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 1;
    scene.text('"I… I don\'t have it with me…"');
    scene.text('"That\'s fine. Just bring it back when you have time," he says casually.');
    if (((st as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Tell him the truth and tell him how horny this job makes you', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (90);
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 3;
    // TODO-QSP: dynamic text: "Oh please!" you shout abruptly. "The truth is, I''m only <<age>>. But it just m...
    scene.text(`"Oh please!" you shout abruptly. "The truth is, I'm only ${((st as any).age ?? '')}. But it just makes me so fucking horny to know that strange men I'll never meet could be out there looking at pictures of my naked body!"`);
    scene.text('You stand there trembling with tight muscles before him. You can feel your juices starting to flow from between your legs with a heightened sense of arousal in anticipation.');
    scene.text('"Hmmm…" He rubs his chin thoughtfully while continuing to look at your body, especially the fluids that have already begun to leak out of your pussy and slip down your thighs, before saying, "Alright, listen, I\'m not supposed to do this but you really do have an exceptional body so I\'m going to make an exception. There\'s a man who runs a small printing shop in the Red Light District. If you can come up with 30.000 cash, he can sell you a fake passport that says you\'re 18. If you can do that, I can at least have some deniability and you can work here. Sound good?"');
    scene.text('With wide eyes and an excited cry of relief, you rush forward and bear hug him in your naked form.');
    scene.text('"Thank you! Thank you! Thank you! Thank you!" you shout, your breasts smushing into his chest.');
    scene.text('You get dressed as quickly as you can so you can find your fake passport and get started. You barely even notice your girl cum dripping down your legs as you step outside.');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go along with it', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Umm, yeah! I\'ll just have to dig through some boxes and stuff… Uhm, could be a while if I can\'t find it!" Awkward laughter escapes your lips and you hope that your smile looks convincing.');
    scene.text('"Alright, well just bring it back with you when you do," he says as he turns back to his computer.');
    scene.text('…');
    // TODO-QSP: dynamic text: "Great, I can work here. Now all I have to do is find a passport that says I''m ...
    scene.text(`"Great, I can work here. Now all I have to do is find a passport that says I'm 18 instead of ${((st as any).age ?? '')}…" you mutter dejectedly as you get dressed.`);
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      { label: 'Tell the truth and tell him how much you need the money', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 2;
    // TODO-QSP: dynamic text: You take a deep breath and step closer to him to say, "Okay, the truth is that I...
    scene.text(`You take a deep breath and step closer to him to say, "Okay, the truth is that I'm not really 18. I'm ${((st as any).age ?? '')} okay? But I really need the money! Can't we work something out?"`);
    if (((st as any).pcs_inhib ?? 0) < 40) {
      scene.text('He studies you for a moment, still completely naked before him, not a scrap of clothing to hide your naked body. You realize it suddenly, almost as if you had forgotten and you feel your face flush with embarrassment.');
    } else {
      scene.text('He studies you for a few more moments, looking up and down your naked body and you find yourself growing impatient with all the waiting around.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Hmmm…" He rubs his chin thoughtfully while continuing to look at your body before saying, "Alright, listen, I\'m not supposed to do this but you really do have an exceptional body so I\'m going to make an exception."');
    scene.text('He leans in close and whispers into your ear, "There\'s a small printing shop in the Red Light District. If you can come up with 30.000 cash, the guy there can sell you a fake passport that says you\'re 18. If you can do that, I can at least have some deniability and you can work here. Deal?"');
    scene.text('With wide eyes and a smile of relief, you nod furiously and rush to get dressed before running out.');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).age_truth ?? 0) === 1) {
          if (((s as any).fotofit ?? 0) !== 1) {
            scene.actions([
              { label: '"Oh. Okay…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('You put your clothes back on, slightly annoyed as you get ready to leave. If he knew you were underage, why did he have you strip in the first place?!');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Plead', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 2;
    scene.text('"Oh please! Isn\'t there any way that you can hire me?" you say as you step forward holding your hands together, momentarily forgetting your nakedness in your desperation.');
    scene.text('"Hmmm…" He rubs his chin thoughtfully while continuing to look at your body before saying, "Alright, listen, I\'m not supposed to do this but you really do have an exceptional body so I\'m going to make an exception."');
    scene.text('He leans in close and whispers into your ear, "There\'s a man who runs a small printing shop in the Red Light District. If you can come up with 30.000 cash, he can sell you a fake passport that says you\'re 18. If you can do that, I can at least have some deniability and you can work here. Sound good?"');
    scene.text('With wide eyes and a smile of relief, you nod furiously and rush to get dressed before running out.');
    qspCall(st, 'outfit', 'restore', 'foto');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
            { label: 'Ask for alternatives', handler: (st: GameState) => {
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 2;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('You\'ve come this far, you can\'t turn back now.');
    if (((st as any).fotofit ?? 0) === 1) {
      scene.text('"Okay, so I\'m not 18. But I really want to earn some money right now. And worked to lose all that weight, you know what a good employee I\'ll be! Isn\'t there any way I can still work here?');
    } else {
      scene.text('"Okay, so I\'m not 18. But I really want to earn some money right now. Isn\'t there any way I can still work here?');
    }
    scene.text('He studies you for a moment, still completely naked before him, not a scrap of clothing to hide your naked body. You realize it suddenly, almost as if you had forgotten and you feel your face flush with embarrassment.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Hmmm…" He rubs his chin thoughtfully while continuing to look at your body before saying, "Alright, listen, I\'m not supposed to do this but you have an exceptional body so I\'m going to make an exception."');
    scene.text('He leans in close and whispers into your ear, "There\'s a small printing shop in the Red Light District. If you can come up with 30.000 cash, the guy there can sell you a fake passport that says you\'re 18. If you can do that, I can at least have some deniability and you can work here. Sound good?"');
    scene.text('You smile and sigh with relief. "Thanks. I\'ll do just that," you say before getting dressed and leaving.');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
            { label: 'Get angry', handler: (st: GameState) => {
    (st as any).fakepassport = 2;
    (st as any).fotofakepassport = 4;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    if (((st as any).fotofit ?? 0) === 1) {
      scene.text('Rage fills your eyes as you stomp towards him, oblivious to your beautifully bouncing breasts, practically shouting, "What the fuck?! You knew I was underage but you made me strip anyways?! I worked so hard and lost all that weight and now you\'re telling me that I can\'t even work here?! What the fuck is wrong with you?! How can you do this?!"');
    } else {
      if (((st as any).reluctant_undress ?? 0) === 1) {
        scene.text('Rage fills your eyes as you stomp towards him, oblivious to your beautifully bouncing breasts, practically shouting, "What the fuck?! You knew I wasn\'t eligible for the job and made me get naked even though I didn\'t want to?! What the fuck is wrong with you?! How can you do this?!"');
      } else {
        if ((!((st as any).reluctant_undress ?? 0))) {
          scene.text('Rage fills your eyes as you stomp towards him, oblivious to your beautifully bouncing breasts, practically shouting, "What do you mean I can\'t work here?! You knew I was underage but you made me strip anyways?! What\'s your fucking problem?! Do you expect me to just take this from you?!"');
        }
      }
    }
    scene.text('You stand defiantly in front of him, glaring with your hands on your hips.');
    if (((st as any).fotofit ?? 0) === 1) {
      scene.text('"Woah woah woah!" he says, holding up his hands but still infuriatingly smiling. "I didn\'t say all your hard work was for nothing. I just said that you wouldn\'t legally be allowed to work here. Illegally however…"');
      scene.text('"What the hell are you talking about?" you growl.');
      scene.text('"Well you see, after all your effort I feel it would be a shame to lose such a good worker. So I\'m going to let you in on a little secret. There\'s a guy who runs a small printing shop in the Red Light District. If you can scrape together 30.000 in cash, he\'ll get you a fake passport that says you\'re 18 and you can work here. You get to be employed, I get to cover my ass. How does that sound?"');
    } else {
      scene.text('He gives a short laugh. "I have to admit kid, you\'ve got spunk and that\'s real sexy," he says while reaching out his hand to gently fondle your breast before you slap his hand away.');
      scene.text('"So I\'ll tell you what, there\'s a guy who runs a small printing shop in the Red Light District. If you can scrape together 30.000 in cash, he\'ll get you a fake passport that says you\'re 18 and you can work here. Deal?"');
      scene.text('He holds his hand out for a shake.');
    }
    if (((st as any).fotofit ?? 0) !== 1) {
      scene.actions([
        { label: 'Shake', handler: (st: GameState) => {
    scene.text('You grasp his hand suspiciously and shake when he quickly reaches out and fondles your breast with his free hand.');
    scene.text('You tear your hand away and give him a look before moving back over to your clothes and getting dressed before leaving.');
    qspCall(st, 'outfit', 'restore', 'foto');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Breathe deeply', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('Holding your hands to your head you bend over to grab your hair in your hands and squeeze tightly, letting out a steaming breath as you do.');
    scene.text('"After all this, just more fucking work…" you sigh in frustration.');
    scene.text('"So? How about it?" he asks.');
    scene.text('Standing back up, you give him a glare.');
    scene.text('"Fine. I\'ll get the money for that too if that\'s what it takes to work here. But don\'t expect me to thank you for this!"');
    scene.text('You get dressed quickly, trying to shrug off your anger as you do before leaving the studio, practically slamming the door behind you.');
    qspCall(st, 'outfit', 'restore', 'foto');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell him to fuck off', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    if (((st as any).fotofit ?? 0) !== 1) {
      scene.text('You slap his hand away and give him the middle finger before walking back towards your clothes.');
      // TODO-QSP: dynamic text: "I''m not going to work for some pervert who forces <<age>> year old girls to ge...
      scene.text(`"I'm not going to work for some pervert who forces ${((st as any).age ?? '')} year old girls to get naked and jerk off to them."`);
    } else {
      scene.text('"No, fuck you!" you spit at him. "I\'m not going to work for some manipulative ass who gets off on underage girls and leading them on. I\'m done here."');
    }
    scene.text('You angrily pick up your clothes, getting dressed furiously and leave, stomping your way out the door.');
    qspCall(st, 'outfit', 'restore', 'foto');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterModelName1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  scene.text('"A few more things to fill out your profile. Did you want to have a model name or a pseudonym? Or would you prefer to use your real name?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModelName2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterModelName2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).model ?? 0)?.['ask_model_name'] === 0) {
    scene.actions([
      { label: 'Why would I?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/foto.jpg');
    scene.text('"Why would I want to use a fake name?" you ask. "Is there a reason I should?"');
    scene.text('"Not <i>should</i>," he explains. "But some girls like to have a little distance from their personal lives. Or they use it to sound more professional or to stand out more. A name like \'Elena Ivanova\' isn\'t exactly uncommon."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterModelName2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Use your real name', handler: (st: GameState) => {
    ((st as any).model = (st as any).model ?? {})['firstname'] = ((st as any).pcs_firstname ?? 0);
    ((st as any).model = (st as any).model ?? {})['nickname'] = ((st as any).pcs_nickname ?? 0);
    ((st as any).model = (st as any).model ?? {})['lastname'] = ((st as any).pcs_lastname ?? 0);
    scene.text('"My real name is fine," you say.');
    scene.text('"Fine by me," he replies, glancing between his screen and your passport to make sure he copies it down correctly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'foto', '');
  } },
    ]);
  } },
    { label: 'Use a fake name', goto: ['foto', 'model_name3'] },
  ]);
  scene.build();
}

function enterModelName3(s: GameState, scene: SceneBuilder): void {
  ((s as any).model = (s as any).model ?? {})['firstname'] = window.prompt("What is the first name of your model persona?") ?? '';
  ((s as any).model = (s as any).model ?? {})['nickname'] = window.prompt("What is the shortened version or nickname of your model persona?") ?? '';
  ((s as any).model = (s as any).model ?? {})['lastname'] = window.prompt("What is the last name of your model persona?") ?? '';
  scene.img('images/locations/city/citycenter/photo/foto.jpg');
  // TODO-QSP: dynamic text: "<<$model[''firstname'']>>…" he mutters, slowly typing. "<<$model[''lastname'']>...
  scene.text(`"${(((s as any).model ?? 0)?.['firstname'] ?? '')}…" he mutters, slowly typing. "${(((s as any).model ?? 0)?.['lastname'] ?? '')}… Okay, there. Is this correct?"`);
  scene.text('He turns the screen around so you can see what he wrote.');
  // TODO-QSP: dynamic text: <i><<$model[''firstname'']>> "<<$model[''nickname'']>>" <<$model[''lastname'']>>...
  scene.text(`<i>${(((s as any).model ?? 0)?.['firstname'] ?? '')} "${(((s as any).model ?? 0)?.['nickname'] ?? '')}" ${(((s as any).model ?? 0)?.['lastname'] ?? '')}</i>`);
  if (((s as any).modelfoto ?? 0)?.['change_name'] === 0) {
    scene.actions([
      { label: 'Correct', handler: (st: GameState) => {
    scene.text('"That\'s correct," you say.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'foto', '');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Correct', handler: (st: GameState) => {
    scene.text('"That\'s correct," you say.');
    scene.text('"Okay, it\'s all updated in the database. You\'re good to go with your new name."');
    scene.actions([
      { label: 'Finish', goto: ['foto', 'manager_talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Incorrect', goto: ['foto', 'model_name3'] },
  ]);
  scene.build();
}

function enterModelProfile(s: GameState, scene: SceneBuilder): void {
  scene.text('"We\'ll also need some additional details, so our readers can learn a little about you. Doesn\'t have to be true," ');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).model = (st as any).model ?? {})['likes1'] = window.prompt("Write one thing you like. <br>Examples: reading, rainy days, sleeping") ?? '';
    ((st as any).model = (st as any).model ?? {})['likes2'] = window.prompt("Write another thing you like.") ?? '';
    ((st as any).model = (st as any).model ?? {})['likes3'] = window.prompt("Write one last thing thing you like.") ?? '';
    ((st as any).model = (st as any).model ?? {})['dislikes1'] = window.prompt("Write one thing you dislike. <br>Example: dieting, rude boys, chores") ?? '';
    ((st as any).model = (st as any).model ?? {})['dislikes2'] = window.prompt("Write another thing you dislike.") ?? '';
    ((st as any).model = (st as any).model ?? {})['dislikes3'] = window.prompt("Write one last thing thing you dislike.") ?? '';
    scene.actions([
      { label: 'Continue', goto: ['foto', 'gave_passport'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGavePassport(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Photographer</b></center>');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('"Alright, your info\'s in the database and you\'re now registered as one of our models. Head to the back to undress. When you\'re ready, speak to a photographer about work. We work on freelance basis. For our lower level models, we can really only afford to pay you for two shoots a week, but you can still come in any time if you want to get some practice to work on your modelling skills. Those photos will be ours to keep and use, but it will help you to build your portfolio. If your popularity increases, we might have some special work and extra jobs for you so it\'s not just twice a week."');
  scene.text('He hands you back your fake passport, smiling.');
  scene.text('"Welcome to Aphrodite."');
  qspCall(s, 'jobs', 'set_employed', 'city_aphrodite_model');
  if (((s as any).age ?? 0) < 18) {
    ((s as any).model = (s as any).model ?? {})['age'] = 18;
  } else {
    ((s as any).model = (s as any).model ?? {})['age'] = ((s as any).age ?? 0);
  }
  ((s as any).model = (s as any).model ?? {})['start_year'] = ((s as any).year ?? 0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the studio', handler: (st: GameState) => {
    qspCall(st, 'outfit', '');
  }, goto: ['city_center', ''] },
    { label: 'Head to the back', goto: ['foto', 'studio'] },
  ]);
  scene.build();
}

function enterWanderingModels(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'anushka_konstantinov_schedule', '');
  if (((s as any).hour ?? 0) <= 21  &&  ((s as any).hour ?? 0) >= 7) {
    scene.text('In various parts of the studios, you can see some of the other models who work here.');
    if (((s as any).anastasia ?? 0)?.['busy_cooldown_day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).anastasia ?? 0)?.['busy_cooldown'] <= ((s as any).hour ?? 0)) {
      if (((s as any).anastasia ?? 0)?.['status'] > 0) {
        if (((s as any).anastasia_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_anastasia/u0027, /u0027anastasia1/u0027); return false;">Anastasia</a>');
        }
      } else {
        if (((s as any).anastasia_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_anastasia/u0027, /u0027anastasia1/u0027); return false;">unknown model</a>');
        }
      }
    }
    if (((s as any).emily ?? 0)?.['busy_cooldown_day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).emily ?? 0)?.['busy_cooldown'] <= ((s as any).hour ?? 0)) {
      if (((s as any).emily ?? 0)?.['status'] >= 2) {
        if (((s as any).emily_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_emily1/u0027, /u0027emily_1/u0027); return false;">Emily</a>');
        }
      } else {
        if (((s as any).emily_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_emily1/u0027, /u0027emily_1/u0027); return false;">unknown model</a>');
        }
      }
    }
    if (((s as any).jeff ?? 0)?.['busy_cooldown_day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).jeff ?? 0)?.['busy_cooldown'] <= ((s as any).hour ?? 0)) {
      if (((s as any).jeff ?? 0)?.['status'] > 0) {
        if (((s as any).jeff_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_jeff1/u0027, /u0027jeff_1/u0027); return false;">Jeff</a>');
        }
      } else {
        if (((s as any).jeff_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_jeff1/u0027, /u0027jeff_1/u0027); return false;">unknown model</a>');
        }
      }
    }
    if (((s as any).krystal ?? 0)?.['porn_card_day'] > 0  &&  ((s as any).hour ?? 0) < ((s as any).krystal ?? 0)?.['porn_card_hour']  &&  ((s as any).krystal ?? 0)?.['porn_card_day'] === ((s as any).daystart ?? 0)) {
      (s as any).krystal_in = 0;
    }
    if (((s as any).krystal ?? 0)?.['busy_cooldown_day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).krystal ?? 0)?.['busy_cooldown'] <= ((s as any).hour ?? 0)) {
      if (((s as any).krystal ?? 0)?.['status'] > 0) {
        if (((s as any).krystal_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_krystal/u0027, /u0027krystal1/u0027); return false;">Krystal</a>');
        }
      } else {
        if (((s as any).krystal_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_krystal/u0027, /u0027krystal1/u0027); return false;">unknown model</a>');
        }
      }
    }
    if ((((s as any).mari ?? 0)?.['busy_cooldown_day'] !== ((s as any).daystart ?? 0)  ||  ((s as any).mari ?? 0)?.['busy_cooldown'] <= ((s as any).hour ?? 0))  &&  ((s as any).mari ?? 0)?.['weekend_gone'] < ((s as any).daystart ?? 0)) {
      if (((s as any).mari ?? 0)?.['status'] > 0) {
        if (((s as any).mari_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_mari/u0027, /u0027mari_1/u0027); return false;">Mari</a>');
        }
      } else {
        if (((s as any).mari_in ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027model_mari/u0027, /u0027mari_1/u0027); return false;">unknown model</a>');
        }
      }
    }
    if (((s as any).locat ?? 0)?.['A144'] === 11) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027foto_models2/u0027, /u0027anushka_1/u0027); return false;">Anushka</a>');
    }
  } else {
    scene.text('The studio is fairly empty. Most of the other models have gone home for the night.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMicrocameraAsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemIzdev ?? 0) === 2  ||  ((s as any).artemIzdev ?? 0) === 3) {
    scene.actions([
      { label: 'Ask about the microcamera', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    if (((st as any).artemIzdev ?? 0) === 3) {
      scene.text('"As I said, I can arrange for a deal for this camera, but it is expensive."');
    }
    if (((st as any).artemIzdev ?? 0) === 2) {
      scene.text('"Yes, I can get you this, but it is expensive."');
      (st as any).artemIzdev = 3;
    }
    if (qspFunc(s, 'money', 'can_afford', 70000) === 0) {
      // TODO-QSP: dynamic text: 'You do not have the ' + $func('money', 'string_price', 70000) + ' required.'
      scene.text('You do not have the 70000₽ required.');
    } else {
      scene.text('"Oh, looks like you have enough money."');
      scene.actions([
        { label: 'Buy microcamera', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'money', 'pay', 70000);
    (st as any).artemIzdev = 4;
    (st as any).microcamera = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/event/microcam_1.jpg');
    scene.text('You buy the microcamera from the photographer.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'foto', '');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).parkblackmail ?? 0) === 2) {
    scene.text('An unfamiliar man appears and tells you he is Victor. "I pay good money to new actresses when I introduce them to the industry. So you have to work to repay your debt to me."');
    scene.actions([
      { label: 'What do you want?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Nothing special <<$model[''nickname'']>>. Just do what you appear to enjoy." he...
    scene.text(`"Nothing special ${(((st as any).model ?? 0)?.['nickname'] ?? '')}. Just do what you appear to enjoy." he nods at the pictures.`);
    scene.actions([
      { label: 'Getting fucked in public?', handler: (st: GameState) => {
    scene.text('Victor smiled, "Well, yes, and no. You are to get fucked but it\'s not in public but on camera." You just stare at him dumbfounded. "Today, is perfect timing, I have everything ready and waiting for a girl who cancelled."');
    scene.text('"Today?" You are quite confused, but Victor nods, and his face turns stern. You look at the pictures and stand up. Looks like you\'ve got no choice.');
    scene.actions([
      { label: 'Go into the room', handler: (st: GameState) => {
    scene.text('On the back of a chair hangs sexy lingerie and white shirt. Apparently, all of this is meant to you. You dress up and sit on the edge of the bed. Almost immediately two men enter the room - one blond and buff the other slim and brunette.');
    scene.text('"OK, a simple scenario." Directs Victor, following them with his camera. "Girl undressing. Sexy but quickly, then you get to know the boys. For the girl the actions will be a surprise." He winks at the guys and you suspect they know full well that you have no idea what to expect.');
    scene.text('You start trying to undress but your hands won\'t respond, but after the blond guy starts poking and probing your mental resistance fails. You take off your shirt and undo your bra, by then the guys are already taking matters into their own hands. The blond guy literally ripped the bra off you as the brunette pushes you back on to the bed and swiftly pulls your panties off.');
    scene.text('Foreplay is clearly not part of the scene as the blond guy flips you over on to all fours and abruptly enters you, you have no time to get in the mood and are not ready for it. It hurts, but he seems to have used a little lube as he is able to fuck you deeply with little resistance. His hands roughly grope at your chest and you feel sore and violated.');
    scene.text('The other guy having undress kneels in front of you and presents his erect cock to your mouth. You stare at it and your lack of action earns you a hard slap in the face, tears gush from your eyes with the pain.');
    qspCall(st, 'npcgeneratec', '0', 'Brunette', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'a');
    qspCall(st, 'npcgeneratec', '0', 'blond', (Math.floor(Math.random() * 27) + 19));
    qspCall(st, 'boyStat', '$npclastgenerated', 'b');
    qspCall(st, 'arousal', 'vaginal', 5, 'rough');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'boyStat', '$boy1');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy1 ?? 0));
    qspCall(st, 'boyStat', '$boy2');
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/studia.jpg');
    scene.text('You open your mouth, and he shoves his cock in as far as it will reach. You begin to choke, but you can\'t move and he just holds you there by the back of your head. Eventually he pulls back his penis trailing strings of your saliva as you gasp for breath.');
    scene.text('They settle in to a rhythm and fuck you together, all the while Victor walks around the three of you, shooting his film, shoot, shoot. In his hand was a lovely big camcorder.');
    qspCall(st, 'boyStat', '$boy1');
    qspCall(st, 'arousal', 'vaginal', 15, 'rough');
    qspCall(st, 'boyStat', '$boy2');
    qspCall(st, 'arousal', 'bj', 15, 'rough');
    scene.text('They finish together. The blonde guy pouring everything into your uterus, while brunette forces you to swallow everything he has. You fall onto the bed.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Begin to cry', handler: (st: GameState) => {
    scene.text('You lie on the bed weeping.');
    // TODO-QSP: dynamic text: "Not bad, tears always look cool." says Victor having finally finished filming y...
    scene.text(`"Not bad, tears always look cool." says Victor having finally finished filming you and with the camcorder by his side. "You should clean yourself up ${(((st as any).model ?? 0)?.['nickname'] ?? '')}, the boys really enjoyed themselves."`);
    scene.actions([
      { label: 'To the shower', handler: (st: GameState) => {
    scene.text('You follow Victor to a large shower room and clean yourself quickly. He then directs you to another room. As you walk in you see the two guys standing naked by a bed waiting for you.');
    scene.text('"This too much I\'ve done what you asked." You say turning back to Victor who is blocking the doorway.');
    scene.text('"That is for me to decide and right now I think you\'ve mange one third of you debt." he grins as you realize this is only the second of three scenes.');
    scene.actions([
      { label: 'No!', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'boyStat', '$boy1');
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '$boy2');
    (st as any).spafinloc = 12;
    (st as any).sexvolume = 5;
    qspCall(st, 'cum_manage', '');
    (st as any).spafinloc = 11;
    (st as any).sexvolume = 35;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/studia2.jpg');
    scene.text('You shout, "No!"');
    scene.text('"Yelling will not help you, good soundproofing here and even if someone hears you they will think it is part of a scene."');
    scene.text('"For this scene you\'ll be getting your arse fucked, so do not fidget and try to relax."');
    scene.text('The brunette is already pushing two fingers in your butt. You start sobbing again as you are forced to suck the blonde guy. Three fingers.');
    scene.text('At that moment, with the blonde guy pumping quicker in your mouth and was ready to cum, the brunette placed his tip against your ring and abruptly entered. You yell again, but the blonde guy quickly plugs your mouth with his sperm shouting "Swallow, swallow, bitch"');
    qspCall(st, 'boyStat', '$boy2');
    qspCall(st, 'arousal', 'bj', 15, 'rough');
    scene.text('When he finally finishes, the brunette pins you to the bed and starts to roughly fuck you in the ass. It is just crazy sick - no lubrication and hurting a great deal, but he does not finish inside you.');
    scene.text('He pulls out entirely, then abruptly enters again, the pain doubles. He carries on like this speeding up your ass feeling like it\'s on fire, until eventually his semen fills your rectum. You could not imagine anything worse.');
    qspCall(st, 'boyStat', '$boy1');
    qspCall(st, 'arousal', 'anal', 15, 'rough');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finally', handler: (st: GameState) => {
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'boyStat', '$boy1');
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '$boy2');
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/studia3.jpg');
    scene.text('After another shower you hope that Victor will let you go, it turns out that Victor has not yet finished.');
    scene.text('The guys start fingering you, a little thin dildo fucking your ass. It seemed just a trifle compared with the rough anal sex you were just subjected to.');
    scene.text('The brunette pulls you on top of him and guides his penis to your vagina. His strong arms lift you up and down making you fuck him.');
    scene.text('The blonde guy removes the dildo from your butt and replaces it with his cock. Your pain is such that you don\'t feel any more, instead you just feel the fullness of both members inside you.');
    scene.text('You can feel the rubbing of the thin layers between their penises and think this must be what is like to be a whore.');
    scene.text('You no longer have the will to fight, even your mental block has slipped and you begrudgingly enjoy the sensations not even wanting to stop when they both cum at more or less the same time pumping their seed in both of your holes.');
    qspCall(st, 'arousal', 'anal', 15, 'rough');
    qspCall(st, 'boyStat', '$boy1');
    qspCall(st, 'arousal', 'vaginal', 15, 'rough');
    qspCall(st, 'arousal', 'end');
    (st as any).parkblackmail = 4;
    (st as any).studiaday = 7;
    scene.text('"You can keep your presents from the guys." says Victor as he quickly makes you dress and leads you to the exit.');
    scene.text('"I hope you\'ve learned your lesson. I will be here to teach stupid girls like you that you cannot get away with such behaviour and if needed I will put you through this all over again."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'outfit', 'restore', 'foto');
    qspGoto(st, 'city_center', '');
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
  // TODO-QSP: end
  scene.build();
}

function enterUnderwear(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lastwornunderwear ?? 0) === 2) {
    qspCall(s, 'underwear_bodysuits', 'wear', (((s as any).lastwornbodysuittype ?? 0)?.['foto']), (((s as any).lastwornbodysuitnumber ?? 0)?.['foto']));
  } else {
    qspCall(s, 'panties', 'wear', (((s as any).lastwornpantytype ?? 0)?.['foto']), (((s as any).lastwornpantynumber ?? 0)?.['foto']));
    qspCall(s, 'bras', 'wear', (((s as any).lastwornbratype ?? 0)?.['foto']), (((s as any).lastwornbranumber ?? 0)?.['foto']));
  }
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).modelfoto ?? 0)?.['erotic'] >= 10  ||  (((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['fashion']  &&  ((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['fitness']  &&  ((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['glamour']  &&  ((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['lingerie']  &&  ((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['catalog']  &&  ((s as any).modelfoto ?? 0)?.['erotic'] > ((s as any).modelfoto ?? 0)?.['nude'])) {
    ((s as any).model = (s as any).model ?? {})['type'] = 'erotic';
  } else {
    if (((s as any).modelfoto ?? 0)?.['nude'] > ((s as any).modelfoto ?? 0)?.['fashion']  &&  ((s as any).modelfoto ?? 0)?.['nude'] > ((s as any).modelfoto ?? 0)?.['fitness']  &&  ((s as any).modelfoto ?? 0)?.['nude'] > ((s as any).modelfoto ?? 0)?.['glamour']  &&  ((s as any).modelfoto ?? 0)?.['nude'] > ((s as any).modelfoto ?? 0)?.['lingerie']  &&  ((s as any).modelfoto ?? 0)?.['nude'] > ((s as any).modelfoto ?? 0)?.['catalog']) {
      ((s as any).model = (s as any).model ?? {})['type'] = 'artistic nude';
    } else {
      if (((s as any).modelfoto ?? 0)?.['fitness'] > ((s as any).modelfoto ?? 0)?.['fashion']  &&  ((s as any).modelfoto ?? 0)?.['fitness'] > ((s as any).modelfoto ?? 0)?.['nude']  &&  ((s as any).modelfoto ?? 0)?.['fitness'] > ((s as any).modelfoto ?? 0)?.['glamour']  &&  ((s as any).modelfoto ?? 0)?.['fitness'] > ((s as any).modelfoto ?? 0)?.['lingerie']  &&  ((s as any).modelfoto ?? 0)?.['fitness'] > ((s as any).modelfoto ?? 0)?.['catalog']) {
        ((s as any).model = (s as any).model ?? {})['type'] = 'fitness';
      } else {
        if (((s as any).modelfoto ?? 0)?.['glamour'] > ((s as any).modelfoto ?? 0)?.['fashion']  &&  ((s as any).modelfoto ?? 0)?.['glamour'] > ((s as any).modelfoto ?? 0)?.['nude']  &&  ((s as any).modelfoto ?? 0)?.['glamour'] > ((s as any).modelfoto ?? 0)?.['fitness']  &&  ((s as any).modelfoto ?? 0)?.['glamour'] > ((s as any).modelfoto ?? 0)?.['lingerie']  &&  ((s as any).modelfoto ?? 0)?.['glamour'] > ((s as any).modelfoto ?? 0)?.['catalog']) {
          ((s as any).model = (s as any).model ?? {})['type'] = 'glamour';
        } else {
          if (((s as any).modelfoto ?? 0)?.['lingerie'] > ((s as any).modelfoto ?? 0)?.['fashion']  &&  ((s as any).modelfoto ?? 0)?.['lingerie'] > ((s as any).modelfoto ?? 0)?.['nude']  &&  ((s as any).modelfoto ?? 0)?.['lingerie'] > ((s as any).modelfoto ?? 0)?.['fitness']  &&  ((s as any).modelfoto ?? 0)?.['lingerie'] > ((s as any).modelfoto ?? 0)?.['glamour']  &&  ((s as any).modelfoto ?? 0)?.['lingerie'] > ((s as any).modelfoto ?? 0)?.['catalog']) {
            ((s as any).model = (s as any).model ?? {})['type'] = 'lingerie';
          } else {
            if (((s as any).modelfoto ?? 0)?.['fashion'] > ((s as any).modelfoto ?? 0)?.['lingerie']  &&  ((s as any).modelfoto ?? 0)?.['fashion'] > ((s as any).modelfoto ?? 0)?.['nude']  &&  ((s as any).modelfoto ?? 0)?.['fashion'] > ((s as any).modelfoto ?? 0)?.['fitness']  &&  ((s as any).modelfoto ?? 0)?.['fashion'] > ((s as any).modelfoto ?? 0)?.['glamour']  &&  ((s as any).modelfoto ?? 0)?.['fashion'] > ((s as any).modelfoto ?? 0)?.['catalog']) {
              ((s as any).model = (s as any).model ?? {})['type'] = 'fashion';
            } else {
              if (((s as any).modelfoto ?? 0)?.['catalog'] > 0) {
                ((s as any).model = (s as any).model ?? {})['type'] = 'catalog';
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).model_week ?? 0) !== (((s as any).daystart ?? 0) - ((s as any).week ?? 0)) / 7  &&  ((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    (s as any).model_job_week = 0;
    qspCall(s, 'jobs', 'resume_job', 'city_aphrodite_model');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'studio_closing':
      enterStudioClosing(s, scene);
      break;
    case 'studio':
      enterStudio(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'showers':
      enterShowers(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'manager_talk':
      enterManagerTalk(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'hiring_ask':
      enterHiringAsk(s, scene);
      break;
    case 'interview':
      enterInterview(s, scene);
      break;
    case 'interview2':
      enterInterview2(s, scene);
      break;
    case 'job_decline':
      enterJobDecline(s, scene);
      break;
    case 'job_offer':
      enterJobOffer(s, scene);
      break;
    case 'model_name1':
      enterModelName1(s, scene);
      break;
    case 'model_name2':
      enterModelName2(s, scene);
      break;
    case 'model_name3':
      enterModelName3(s, scene);
      break;
    case 'model_profile':
      enterModelProfile(s, scene);
      break;
    case 'gave_passport':
      enterGavePassport(s, scene);
      break;
    case 'wandering_models':
      enterWanderingModels(s, scene);
      break;
    case 'microcamera_ask':
      enterMicrocameraAsk(s, scene);
      break;
    case 'blackm':
      enterBlackm(s, scene);
      break;
    case 'underwear':
      enterUnderwear(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const foto: LocationDef = {
  name: 'foto',
  title: 'Photography studio',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
