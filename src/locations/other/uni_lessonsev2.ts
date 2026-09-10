import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if (((s as any).temp ?? 0) === 0) {
    scene.img('images/locations/city/island/university/classroom/general_education/banana.jpg');
    scene.text('As Professor Kovalyov continues his lecture, you can\'t help but notice how attractive he is. He has a mesmerizing smile while he talks and this seems to have an effect on the other girls, even the shy Katja. You remember she used to be quite the shy girl in school, always resisting any charm. But now… She\'s half finished eating her banana while listening to Professor Kovalyov and is almost deepthroating it. Her mind is likely wandering somewhere else…');
  } else {
    scene.img('images/locations/city/island/university/classroom/general_education/upskirt_pussy.jpg');
    scene.text('It\'s nearly the end of the class when you can\'t help but notice that some of the boys are twitching and whispering at each other. You curiously try to find out what the commotion could be about when you turn your head and see the reason. It\'s Liliya causing some trouble again as she innocently spreads her legs just enough to tease the boys with her naked pussy.');
    if (((s as any).PCloSkirt ?? 0) === 0  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.text('You wonder if you should try the same thing one day…');
    } else {
      if (((s as any).pantyworntype ?? 0) === 'none') {
        scene.actions([
          { label: 'Spread your legs', handler: (st: GameState) => {
    qspCall(s, 'flash', 'pussy', 'inside', (-5), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/general_education/no_panties.jpg');
    scene.text('You turn your lower body to face the boys and lift up your skirt a little. Spreading your legs, you let the boys take a good look at your pussy, feeling a thrill of excitement from the act.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Show your pussy', handler: (st: GameState) => {
    qspCall(s, 'flash', 'pussy', 'inside', (-5), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/island/university/classroom/general_education/panties.jpg');
    scene.text('You turn your lower body to face the boys and lift up your skirt a little. Spreading your legs, you pull your underwear to the side, flashing your pussy at the boys.');
    scene.actions([
      { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/locations/city/island/university/classroom/general_education/girls_dryhump.jpg');
      scene.text('During the halftime break, you relax as the class was pretty mentally exhausting and look around to see how others are handling all the information you\'re getting bombarded with. Two girls notice some of the boys checking them out and start whispering back and forth while giggling before one of them grabs her friend, bends her over the table and starts humping her hard and rough.');
      scene.text('The second girl plays along, moaning and pretending she\'s getting fucked hard and rough, but the noise quickly draws Professor Kovalyov\'s attention, who walks over and gives the humping girl some pointers with her technique, which makes her blush. The two girls share a grin at his comments and burst out laughing before they quickly stop and retake their seats as Professor Kovalyov walks away back to the front of the classroom with an amused smile on his face.');
    } else {
      scene.img('images/locations/city/island/university/classroom/general_education/air_bj.jpg');
      scene.text('You notice some of the boys whispering at each other and winking. Two girls seems to be bored and have decided to tease the boys with some blowjob imitation. Everything goes smoothly and according to the girl\'s plans until Professor Kovalyov nervously starts to laugh and interrupts them. "Come on girls, you two are adults now. Stop acting like you\'re in high school!" He then goes back to his lecture and everyone returns their attention to him.');
      if (((s as any).temp ?? 0) === 4) {
        scene.img('images/locations/city/island/university/classroom/general_education/girls_bj.jpg');
        scene.text('When a teacher leaves a classroom at school, chaos strikes and everybody starts to act like a child. It seems university is no different. As soon as Professor Kovalyov leaves the classroom, you see different students talking to each other and taking selfies. However, Maya and Dasha are on top of their desks, one kneeling before the other. Dasha takes the lead and starts to shove her imaginary dick down Maya\'s throat.');
        scene.text('This goes on for nearly a minute before the door opens and Professor Kovalyov returns. Everyone quickly returns to their seats and the class quietens down.');
      } else {
        scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
        scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
      }
      scene.actions([
        { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
      ]);
    }
  }
  scene.build();
}

export const uni_lessonsev2: LocationDef = {
  name: 'uni_lessonsev2',
  title: 'As Professor Kovalyov continues his lecture, you can\'t help ',
  region: 'other',
  description: ['As Professor Kovalyov continues his lecture, you can\'t help but notice how attractive he is. He has a mesmerizing smile while he talks and this seems to have an effect on the other girls, even the shy Katja. You remember she used to be quite the shy girl in school, always resisting any charm. But now… She\'s half finished eating her banana while listening to Professor Kovalyov and is almost deepthroating it. Her mind is likely wandering somewhere else…'],
  enter: enter,
};
