import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_smalloffice';
  (s as any).menu_arg = 'start';
  qspCall(s, 'jobs', 'get_job_definition', 'city_office_cleaner');
  qspCall(s, 'jobs', 'get_job_definition', 'city_office_toilet_cleaner');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 17) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Office building</b></center>');
  scene.img('images/locations/city/residential/office/clener.jpg');
  scene.text('You notice several ads on one of the walls. As you look through them you see a notice that someone is searching for cleaners.');
  if (((s as any).svQW ?? 0) >= 1) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).week ?? 0) < 6) {
      scene.text('The door to the<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027city_trademission\\u0027, \\u0027\\u0027); return false;">Trade Mission</a> is open.');
    } else {
      // TODO-QSP: dynamic text: The door of the trade mission is closed. There's a note on the door, Open hours:...
      scene.text('The door of the trade mission is closed. There\'s a note on the door, Open hours: Saturday and Sunday 8:00--16:00');
    }
  }
  if (((s as any).jouryQwNo ?? 0) === 1  &&  ((s as any).hour ?? 0) === 17) {
    scene.text('You see Yuri walking down the corridor, you remember him making a move on you but you refused him. He looks at you, smiles and approaches you.');
    scene.actions([
      { label: 'Talk to Yuri', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Still smiling he says, "<<$pcs_nickname>>, want to grab a cup of coffee?"
    scene.text(`Still smiling he says, "${((s as any).pcs_nickname || '')}, want to grab a cup of coffee?"`);
    scene.actions([
      { label: 'Decline', handler: (st: GameState) => {
    (st as any).jouryQwNo = 1;
  }, goto: ['city_smalloffice', 'start'] },
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('You nod and the two of you head off to the café, where Yuri orders coffee. You sit down at the table and begin to sip on your coffee. Yuri is painfully quiet, he has no sense of humor and is very stiff.');
    scene.text('It\'s pretty clear that he likes you, but he does not know how to put a move on you. As you finish the coffee Yuri finally suggests if you want to follow him to his home.');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).jouryQwNo = 1;
  }, goto: ['city_smalloffice', 'start'] },
      { label: 'Go with Yuri', goto: ['youry', 'quest'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).borodachQW ?? 0) > 0  &&  ((s as any).borodachSex ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 19) {
    scene.text('The security guard, Sasha, greets you.');
  }
  if (((s as any).borodachQW ?? 0) > 0  &&  ((s as any).borodachSex ?? 0) > 0  &&  ((s as any).hour ?? 0) >= 19) {
    // TODO-QSP: dynamic text: The security guard, Sasha, smiles and says, "Hi <<$pcs_nickname>>!"
    scene.text(`The security guard, Sasha, smiles and says, "Hi ${((s as any).pcs_nickname || '')}!"`);
  }
  if (((s as any).borodachQW ?? 0) > 0  &&  ((s as any).hour ?? 0) >= 19) {
    scene.actions([
      { label: 'Approach Sasha', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).borodachSexDay ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('You approach the security guard and greet him. You chat with him for a while. After some time Sasha tells you that he has to go on patrol and hurries off.');
    }
    if (((s as any).borodachSexDay ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('You approach the security guard and greet him. He winks at you, "I stashed a bottle here, I\'m sure we\'ve both earned a little break."');
      scene.actions([
        { label: 'Join him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Sasha takes you to his cubbyhole and pulls out a bottle of vodka from under the table. He then reaches into a drawer and pulls out a piece of liver sausage and some cheese. He pours some of the vodka out into two glasses.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.text('You drink the shitty vodka and it burns your throat. Your throat is on fire and you quickly grab some cheese to help soothe it. Sasha casually downs the glass and doesn\'t even blink. "Ah, good one."');
    scene.text('While you are leaning over to eat the sausage, you feel a light touch as the guard pats you on the buttocks.');
    qspCall(s, 'willpower', 'hj', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Put your hand on his pants', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Put your hand on his pants', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).borodachTimes = ((s as any).borodachTimes ?? 0) + (1);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).picrand ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/office/sex/gua...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/office/sex/guard/hj.jpg"></center>`);
    }
    if (((s as any).picrand ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/office/sex/gua...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/office/sex/guard/hj1.jpg"></center>`);
    }
    if (((s as any).picrand ?? 0) === 2) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/office/sex/gua...
      scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/office/sex/guard/hj2.jpg"></center>`);
    }
    scene.text('You put your hand on his crotch and feel his erection harden. Your thin fingers slide over his hardon and find the zipper. You unzip him and get his cock out of his pants. Sasha relaxes on the couch waiting for you to continue what you started.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrhj(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrbj(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You smile and Sasha pours more vodka, not stopping his caressing of your buttocks.');
    if (((s as any).pcs_horny ?? 0) < 50) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachNo2(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachDrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_office_toilet_cleaner'] === 'employed'  &&  ((s as any).job_shifts_total ?? 0)?.['city_office_toilet_cleaner'] >= 2  &&  ((s as any).borodachQW ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 19) {
    scene.text('You see a crossword placed on a chair in front of the guard as he\'s deeply sighs. He looks up to you and asks, "I\'m looking for another word for pleasure, the second letter is u."');
    scene.actions([
      { label: 'Reply', handler: (st: GameState) => {
    (s as any).borodachQW = 1;
    scene.text('"Fulfilment?" you reply.');
    scene.text('The guard smiles, "You\'re right, the only word that came up in my head was fucking."');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
      { label: 'Laugh out loud', handler: (st: GameState) => {
    (s as any).borodachQW = 2;
    scene.text('You laugh at him, he smiles and puts aside the crossword. "You must be new, I haven\'t seen you before. Are you the new cleaning lady?"');
    scene.text('You nod, "Yes, the pay is pretty bad but I need the job…"');
    scene.text('"By the way, I\'m Sasha, and you\'re?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>." you politely answer.
    scene.text(`"${((s as any).pcs_nickname || '')}." you politely answer.`);
    scene.text('"Nice name… I was just thinking about heading on a break, would you like to join me for a drink?"');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Sorry, I have to go', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Sorry, I have to go', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_smalloffice', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Why not', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('Sasha takes you into his cubbyhole and takes out a bottle of vodka from under the table, at the same he reaches into the drawer and pulls out a piece of liver sausage and some cheese. He pours some of the vodka out into two glasses.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.text('You drink the shitty vodka and it burns your throat. Your throat is on fire and you quickly grab some cheese to help soothe it. Sasha casually downs the glass and doesn\'t even blink. "Ah, good one."');
    scene.text('While you are leaning over to eat the sausage, you feel a light touch as the guard pats you on the buttocks.');
    qspCall(s, 'willpower', 'foreplay', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.text('"Hey! What are you doing?" you ask.');
    scene.text('"Relax, it was merely an accident." Sasha starts muttering as he pours another shot, "Let\'s have a drink."');
    if (((s as any).pcs_horny ?? 0) < 50) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachNo(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachDrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Pretend not to notice', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.text('You continue on as usual, trying not to pay attention to it, since it was only a casual touch. Sasha pours more vodka and says, "The second shot always tastes better." as he takes another quaff.');
    if (((s as any).pcs_horny ?? 0) < 50) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachNo(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachDrink(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  if (((s as any).job_status ?? 0)?.['city_office_cleaner'] === 'employed'  &&  ((s as any).job_shifts_total ?? 0)?.['city_office_cleaner'] >= 8  &&  ((s as any).job_status ?? 0)?.['city_office_toilet_cleaner'] === '') {
    scene.actions([
      { label: 'Ask for more work', handler: (st: GameState) => {
    if (((s as any).job_hiring_step ?? 0)?.['city_office_toilet_cleaner'] === 0) {
      ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_toilet_cleaner'] = 1;
    }
    // TODO-QSP: dynamic text: You ask Boris Ivanovich whether he has more work for you. He says that he needs ...
    scene.text(`You ask Boris Ivanovich whether he has more work for you. He says that he needs a cleaner to clean the toilets. You'll be almost able to work every day. Cleaning toilets for an hour earns you ${qspFunc(s, 'money', 'string_profit', 65)} upfront.`);
    scene.actions([
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Accept', handler: (st: GameState) => {
    ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_toilet_cleaner'] = 2;
    qspCall(s, 'jobs', 'set_employed', 'city_office_toilet_cleaner');
    scene.text('You agree to work as a cleaner.');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_office_cleaner'] === ''  &&  ((s as any).job_hiring_step ?? 0)?.['city_office_cleaner'] === 1) {
    scene.actions([
      { label: 'Ask about available jobs', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You head into the office that advertised the job. You see a large man in a jacke...
    scene.text(`You head into the office that advertised the job. You see a large man in a jacket sitting there. He tells you can clean the Office for ${qspFunc(s, 'money', 'string_profit', 65)} per hour, paid upfront.`);
    scene.actions([
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Accept', handler: (st: GameState) => {
    ((s as any).job_hiring_step = (s as any).job_hiring_step ?? {})['city_office_cleaner'] = 2;
    qspCall(s, 'jobs', 'set_employed', 'city_office_cleaner');
    scene.text('You agree to work as a cleaner.');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_office_cleaner'] === 'employed'  &&  ((s as any).job_last_work_day ?? 0)?.['city_office_cleaner'] !== ((s as any).daystart ?? 0)  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_cleaner') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Mop the floor in the office for ' + String(qspFunc(s, 'money', 'string_profit', 65) ?? '') + ' (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'jobs', 'clock', 'city_office_cleaner');
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'jobs', 'paycheck', 'city_office_cleaner');
    qspCall(s, 'sweat', 'add', 20);
    scene.img('images/locations/city/residential/office/clener1.jpg');
    if (((s as any).job_shifts_total ?? 0)?.['city_office_cleaner'] < 3) {
      if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
        scene.text('You fill a bucket of water and head over to the office with a mop. The office staff keeps out of the way while you clean the floor.');
      }
    } else {
      if (((s as any).job_shifts_total ?? 0)?.['city_office_cleaner'] >= 3  &&  ((s as any).job_shifts_total ?? 0)?.['city_office_cleaner'] < 8) {
        if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
          (s as any).jouryQw = ((s as any).jouryQw ?? 0) + (1);
          scene.text('You fill a bucket of water and head over to the office with a mop. The office staff keeps out of the way while you clean the floor. One of the office workers, a man with blond hair and a red face looks at you and tries to hide it, but you can feel his burning gaze.');
        }
      } else {
        if (((s as any).job_shifts_total ?? 0)?.['city_office_cleaner'] >= 8) {
          if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).jouryQw ?? 0) < 7) {
            (s as any).jouryQw = ((s as any).jouryQw ?? 0) + (1);
            scene.text('You fill a bucket of water and head over to the office with a mop. The office staff keeps out of the way while you clean the floor. One of the office workers, a man with blond hair and a red face looks at you and tries to hide it, but you can feel his burning gaze.');
          } else {
            if (((s as any).jouryQw ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16) {
              qspCall(s, 'stat', '');
              (s as any).jouryQw = ((s as any).jouryQw ?? 0) + (1);
              scene.img('images/locations/city/residential/office/clener1.jpg');
              scene.text('You fill a bucket of water and head over to the office with a mop. All the staff are out of the office, except for a red faced blond man. He walks up to you visibly nervous and quietly says, "Hi. My name Yuri. And I think I\'m in love with you… Can we meet and do something after work?"');
              return;
              scene.actions([
                { label: 'No', handler: (st: GameState) => {
    (s as any).jouryQwNo = 1;
    scene.text('You look angrily at him, "No, I don\'t mix business with pleasure…" Yuri looks dejected as he moves away from you.');
    // TODO-QSP: dynamic text: As you've finished, you head over to Boris Ivanovich's office. He gives you <<$f...
    scene.text(`As you've finished, you head over to Boris Ivanovich's office. He gives you ${qspFunc(s, 'money', 'string_profit', 65)} for the work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
                { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You smile and nod. Yuri says that he\'s just about to finish and will meet you at the entrance of the building.');
    // TODO-QSP: dynamic text: As you've finished, you head over to Boris Ivanovich's office. He gives you <<$f...
    scene.text(`As you've finished, you head over to Boris Ivanovich's office. He gives you ${qspFunc(s, 'money', 'string_profit', 65)} for the work.`);
    scene.text('As you leave, you notice Yuri awiting you. He\'s pretty nervous and it seems as if he doesn\'t know what to do. Not knowing what to say, he blurts out, "How about we head over to my place, watch some movies, drink champagne and talk."');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (st as any).jouryQwNo = 1;
  }, goto: ['city_smalloffice', 'start'] },
      { label: 'Go with Yuri', goto: ['youry', 'quest'] },
    ]);
  } },
              ]);
            }
          }
          if (((s as any).jouryQw ?? 0) > 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16  &&  (!((s as any).jourySex ?? 0))) {
            scene.text('You fill a bucket of water and head over to the office with a mop. The office staff keeps out of the way while you clean the floor. Yuri looks at you studying every inch of your figure.');
          }
          if (((s as any).jouryQw ?? 0) > 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).jourySex ?? 0) > 0) {
            scene.text('You fill a bucket of water and head over to the office with a mop. The office staff keeps out of the way while you clean the floor. Yuri pretends not to notice you in the office.');
          }
        }
      }
    }
    if (((s as any).hour ?? 0) < 9  ||  ((s as any).hour ?? 0) > 16) {
      scene.text('The office is empty of people, you quietly wash the floor and wipe the floor in the office.');
    }
    // TODO-QSP: dynamic text: As you've finished, you head over to Boris Ivanovich's office. He gives you <<$f...
    scene.text(`As you've finished, you head over to Boris Ivanovich's office. He gives you ${qspFunc(s, 'money', 'string_profit', 65)} for the work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_office_toilet_cleaner'] === 'employed'  &&  ((s as any).job_last_work_day ?? 0)?.['city_office_toilet_cleaner'] !== ((s as any).daystart ?? 0)  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_toilet_cleaner') === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Clean toilets for ' + String(qspFunc(s, 'money', 'string_profit', 65) ?? '') + ' (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'exp_gain', 'cleaning', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'jobs', 'clock', 'city_office_toilet_cleaner');
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'jobs', 'paycheck', 'city_office_toilet_cleaner');
    qspCall(s, 'sweat', 'add', 30);
    scene.img('images/locations/city/residential/office/clener2.jpg');
    if (((s as any).jouryQw ?? 0) > 7  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) <= 16  &&  ((s as any).jourySex ?? 0) > 0  &&  (!((s as any).jouryResult ?? 0))) {
      // TODO-QSP: dynamic text: You enter a booth and begin scrubbing the toilet bowl. The toilet door slams as ...
      scene.text(`You enter a booth and begin scrubbing the toilet bowl. The toilet door slams as somebody comes in, you turn around and see Yuri standing there. He, quickly comes over to you, "${((s as any).pcs_nickname || '')}, don't approach me at the office, well, you know, I don't want the rest of the office to gossip about me seeing the cleaner."`);
      return;
      scene.actions([
        { label: 'You\'re ashamed of me?', handler: (st: GameState) => {
    scene.text('You let go off your cleaning stuff and look straight into Yuri\'s eyes, asking him, "Are you ashamed of me?"');
    // TODO-QSP: dynamic text: Yuri stammers, "I-I'm not embarrassed by you being a cleaner, but you must under...
    scene.text('Yuri stammers, "I-I\'m not embarrassed by you being a cleaner, but you must understand, I\'m a manager, and you\'re the cleaning lady. We must not be seen together. But I want you to keep seeing you. You know where I live, come by my place after 16:00."');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck you', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck you', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).jouryResult = 1;
    scene.text('You\'re offended by his behaviour and without any hesitation you tell Yuri to go to hell. He quickly turns and walks away.');
    // TODO-QSP: dynamic text: You continue on by mopping the floor and polish the toilets and urinals. You are...
    scene.text(`You continue on by mopping the floor and polish the toilets and urinals. You are given ${qspFunc(s, 'money', 'string_profit', 65)} for your work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Okay.', handler: (st: GameState) => {
    (s as any).jouryResult = 10;
    scene.text('Yuri only sees you as a simple fuck whore. But you\'re willing to put up with it and agree to visit him afterwards. Yuri nods in satisfaction and leaves the toilet.');
    // TODO-QSP: dynamic text: You continue on by mopping the floor and polish the toilets and urinals. You are...
    scene.text(`You continue on by mopping the floor and polish the toilets and urinals. You are given ${qspFunc(s, 'money', 'string_profit', 65)} for your work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).StasikValera ?? 0) > 0  &&  (!((s as any).svQW ?? 0))) {
      // TODO-QSP: dynamic text: You clean the toilet and all of a sudden you hear the toilet door as someone wal...
      scene.text(`You clean the toilet and all of a sudden you hear the toilet door as someone walks in, as you turn around you see a man. To your surprise, it is Stasik, with him is his friend Valera that you've met at the beach. Stasik also apparently recognizes you, walking up to you, "Hi ${((s as any).pcs_nickname || '')}, you work here as a cleaner?"`);
      return;
      scene.actions([
        { label: 'Explain', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/clener2.jpg');
    scene.text('Shrugging, you say, "I need the money. So I\'ll do whatever it takes."');
    scene.text('Stasik smiles, "Well, an attractive girl as you shouldn\'t work a job like this, I can find a decent part-time job instead."');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).svQW = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/clener2.jpg');
    scene.text('You ask him about the details. Stasik tells you, "It\'s very simple. In the northern, central and residential areas there are supermarkets. You come to our office to find out what your assignment is, then you visit all the three stores and arrange our products there, making changes according to the assignment. At the checkout you take a receipt confirming that you\'ve been to work."');
    // TODO-QSP: dynamic text: "Afterwards, you head back to our office and we will pay you. How does <<$func('...
    scene.text(`"Afterwards, you head back to our office and we will pay you. How does ${qspFunc(s, 'money', 'string_profit', 500)} sound for a few hours work? No hard labour, what do you say?"`);
    scene.actions([
      { label: 'Not interested', goto: ['city_smalloffice', 'start'] },
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).svQW = 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/clener2.jpg');
    scene.text('You grin and nod acceptingly, Stas nods confirming the deal, and after that walks out of the toilet.');
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    // TODO-QSP: dynamic text: You wash the floor and polish all the booths and urinals. You are given <<$func(...
    scene.text(`You wash the floor and polish all the booths and urinals. You are given ${qspFunc(s, 'money', 'string_profit', 65)} for your work.`);
    scene.actions([
      { label: 'Leave', goto: ['city_smalloffice', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterBorodachNo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'ve had enough', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You refuse to drink and start to leave. The guard tries to persuade you to stay with him and continue.');
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_smalloffice', 'start'] },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachDrink(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBorodachNo2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I have to go now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You gather your things and start to leave, Sasha tries to persuade you to stay with him and continue.');
    qspCall(s, 'willpower', 'sex', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
  }, goto: ['city_smalloffice', 'start'] },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachSex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBorodachDrink(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Another drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'stat', '');
    scene.text('You drink and eat some more cheese, you realize that you are happily drunk. The guard\'s hand does not stop caressing your ass.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachNo2(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorodachSex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBorodachSex(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Relax', handler: (st: GameState) => {
    if ((!((s as any).borodachSex ?? 0))) {
      (s as any).borodachSex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    scene.text('You calm down and begin to enjoy the hands caressing you. Sasha has openly embraced and started kissing you.');
    scene.text('His hands slide under your clothes, unbuttoning and removing them. Soon he has exposed your chest and begins to suck your nipples.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie down on the sofa', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).borodachSexDay = ((s as any).daystart ?? 0);
    (s as any).pose = 0;
    qspCall(s, 'boyStat', 'A39');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> lays you on the sofa, spreads your legs and pulls out his <<dick>> ...
    scene.text(`${((s as any).boydesc || '')} lays you on the sofa, spreads your legs and pulls out his ${((s as any).dick || '')} cm dick, his fingers begin to caress your pussy, preparing it for entry.`);
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    qspCall(s, 'dinsex', 'vaginal_sex', 15);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOhrhj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate him', handler: (st: GameState) => {
    scene.text('You start stroking his cock with your delicate hands. Quickly Sasha groans, "I can\'t hold on much longer."');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrbj(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrhjcum(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterOhrhjcum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate him more', handler: (st: GameState) => {
    (s as any).borodachSexDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/sex/guard/hjcum.jpg');
    scene.text('Sasha groans and his cock enthusiastically paints your hand white.');
    qspCall(s, 'arousal', 'hj', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOhrbj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck him', handler: (st: GameState) => {
    (s as any).picrand = Math.floor(Math.random() * 4) + 1;
    scene.img(`images/locations/city/residential/office/sex/guard/bj${((s as any).picrand || '')}.jpg`);
    // TODO-QSP: dynamic text: You wrap your <<$pc_desc['lips']>> lips around his strong and warm 15 cm cock an...
    scene.text(`You wrap your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips around his strong and warm 15 cm cock and quickly begin by sucking the head, caressing it with your tongue and lips. Sasha groans, "I'm going to come."`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrbjcum(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterOhrsex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterOhrbjcum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck harder', handler: (st: GameState) => {
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 4) + 1;
    scene.img(`images/locations/city/residential/office/sex/guard/bjcum${((s as any).picrand || '')}.jpg`);
    // TODO-QSP: dynamic text: You redouble your efforts, sucking his hard cock with your <<$pc_desc['lips']>> ...
    scene.text(`You redouble your efforts, sucking his hard cock with your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips. Hot sperm hits your mouth, again and again. You continue to suck, ignoring your mouth full of viscous sperm. Until he finally nothing left.`);
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Swallow sperm', handler: (st: GameState) => {
    (s as any).borodachSexDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 3) + 1;
    scene.img(`images/locations/city/residential/office/sex/guard/swallow${((s as any).picrand || '')}.jpg`);
    scene.text('You open your sperm filled mouth and show off your hard work, then swallow it.');
    qspCall(s, 'arousal', 'bj', 1, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Spit it out', handler: (st: GameState) => {
    (s as any).borodachSexDay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/sex/guard/spit.jpg');
    scene.text('You open your sperm filled mouth and show off your hard work, then quickly find the sink and spit it out.');
    qspCall(s, 'arousal', 'bj', 1, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterOhrsex(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Sex', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).borodachSexDay = ((s as any).daystart ?? 0);
    (s as any).pose = 0;
    qspCall(s, 'boyStat', 'A39');
    scene.img('images/shared/sex/vag/miss/vag.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> lays you on the sofa, spreads your legs and pulls out his <<dick>> ...
    scene.text(`${((s as any).boydesc || '')} lays you on the sofa, spreads your legs and pulls out his ${((s as any).dick || '')} centimeter dick. His fingers begin to caress your pussy, preparing it for entry.`);
    qspCall(s, 'arousal', 'vaginal_finger', 5);
    qspCall(s, 'arousal', 'vaginal', 15, 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'borodachNo':
      enterBorodachNo(s, scene);
      break;
    case 'borodachNo2':
      enterBorodachNo2(s, scene);
      break;
    case 'borodachDrink':
      enterBorodachDrink(s, scene);
      break;
    case 'borodachSex':
      enterBorodachSex(s, scene);
      break;
    case 'ohrhj':
      enterOhrhj(s, scene);
      break;
    case 'ohrhjcum':
      enterOhrhjcum(s, scene);
      break;
    case 'ohrbj':
      enterOhrbj(s, scene);
      break;
    case 'ohrbjcum':
      enterOhrbjcum(s, scene);
      break;
    case 'ohrsex':
      enterOhrsex(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_smalloffice: LocationDef = {
  name: 'city_smalloffice',
  title: 'Office building',
  region: 'city',
  enter: enter,
};
