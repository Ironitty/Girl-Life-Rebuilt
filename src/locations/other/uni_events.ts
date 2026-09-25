import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLectureHallEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/locations/city/island/university/lecture_hall/events/4girls_makeout.jpg');
    scene.text('As you walk down the hall, you spot a small group of boys watching two groups of girls making out. The girls either don\'t care or are loving the attention.');
    qspCall(s, 'arousal', 'voyeur', 2);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/locations/city/island/university/lecture_hall/events/balloons.jpg');
      scene.text('As you enter the lecture hall\'s hallway, you stop as it\'s completely full of balloons. Most of the students are laughing and wading through the balloons. You smile and wonder just how many balloons there are and how long it took to blow them all up as you wade through them yourself.');
      qspCall(s, 'uni_lessons', 'schedule');
      scene.actions([
        { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/island/university/lecture_hall/events/bra_flash.jpg');
        scene.text('As you walk down the hall, you spot a girl leaning against the wall. She seems to be watching a boy that\'s staring at her before she lifts up her shirt and flashes her bra at him. He only stares for a second before he blushes and looks away, which seems to amuse her. Once he walks away, she lowers her shirt and walks away herself.');
        qspCall(s, 'arousal', 'voyeur', 2);
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'uni_lessons', 'schedule');
        scene.actions([
          { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/locations/city/island/university/lecture_hall/lecture_hall.jpg');
          scene.text('The hall is almost completely empty as you walk along. You then hear noise coming from one of the doors. It almost sounds like someone is moaning…');
          qspCall(s, 'arousal', 'voyeur_sex', 2);
          qspCall(s, 'arousal', 'end');
          qspCall(s, 'uni_lessons', 'schedule');
          scene.actions([
            { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
            { label: 'Peek', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/island/university/lecture_hall/sex/spy/female_pro_sex` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You crack the door slightly and peek inside. You see one of the female professors on her desk getting railed by one of the male students. She is fairly pretty for her age. After a few seconds, you close the door and move away, afraid of getting caught.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.img('images/locations/city/island/university/lecture_hall/events/pull_up_skirt.jpg');
            scene.text('As you walk down the hallway, you see a guy just ahead of you reach over and pull up a girl\'s skirt, showing off her panty-clad ass. She jerks away from him and pulls her skirt back down as he and his friends laugh. She and her friends give them dirty looks in return. You thought the university would be more mature than school, but it seems boys will be boys no matter how old they are.');
            qspCall(s, 'arousal', 'voyeur', 2);
            qspCall(s, 'arousal', 'end');
            qspCall(s, 'uni_lessons', 'schedule');
            scene.actions([
              { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/city/island/university/lecture_hall/events/nakedrun` + (Math.floor(Math.random() * 7) + 1) + '.jpg"></center>');
              scene.text('Your walk through the lecture hall is interrupted when you hear laughing and amused yelling. Moments later, a group come running down the hall, all of them completely naked. You stand against the wall to let them all past before continuing on your way.');
              qspCall(s, 'arousal', 'voyeur', 2);
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'uni_lessons', 'schedule');
              scene.actions([
                { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
              ]);
            } else {
              scene.img('images/locations/city/island/university/lecture_hall/events/peek1.jpg');
              scene.text('As you round a corner, you notice a guy peeking through one of the doors, who seems very intent on whatever it is he\'s looking at. You could mind your own business and continue on your way, walk up to him and see what he\'s looking at or just watch him and see what he does next.');
              qspCall(s, 'uni_lessons', 'schedule');
              scene.actions([
                { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
                { label: 'Walk up to him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/events/peek1.jpg');
    scene.text('You walk up behind him. "Hey, what are you looking at?"');
    scene.text('He jumps and spins around. His face is flushed and you notice the bulge in his pants. "Shit, you scared me half to death!"');
    scene.text('You smirk and repeat your question. "So? What were you looking at?"');
    scene.text('He grins. "Professor Cougar has claimed her next victim. Want to see?"');
    scene.text('You heard some of the professors get… extra friendly with some of the students, but do you really want to see this?');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
      { label: 'Peek', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/island/university/lecture_hall/sex/spy/female_pro_sex` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You peek inside and see one of the female professors on her desk getting railed by one of the male students. She\'s fairly pretty for her age. After a few seconds, you step away and notice the guy staring at you with a lustful look in his eyes. You roll your eyes and walk away while shaking your head.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } },
    ]);
  } },
                { label: 'Spy on him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/events/peek2.jpg');
    scene.text('As you keep watching him, he looks around, but you\'re able to duck back around the corner before he sees you. After a few seconds, you peek back around the corner and see that he has his pants pulled down and is jerking himself off as he keeps peeking in the room.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
      { label: 'Keep spying', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/events/peek2.jpg');
    scene.text('You\'re shocked and a little turned on at this guy jerking off in the hallway as you keep watching him. You know you should stop and move on, but you can\'t help but watch. A few minutes later, he groans and his whole body jerks before he pulls up his pants and hurries off. Looking at where he was, you can see the cum splattered on the door and running down it. You shake your head and wonder what\'s wrong with boys as you continue on your way.');
    qspCall(st, 'arousal', 'voyeur_sex', 3);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
    ]);
  } },
      { label: 'Walk up to him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/events/peek3.jpg');
    scene.text('You walk up behind him and get so close that you can hear the slapping of flesh as he jerks himself off furiously. You\'re amazed he hasn\'t noticed you, but he seems completely consumed in whatever he\'s watching. Now that you\'re closer, you can hear moans coming from inside the room.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'stat', '');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Walk away', goto: ['uni_grounds', ''] },
      { label: 'Surprise him', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/lecture_hall/events/peek3.jpg');
    scene.text('After a few more minutes of him not noticing you, you clear your throat. "What are you looking at?"');
    scene.text('He jumps and spins around. His face is flushed and his hard cock is pointing right at you, the tip glistening with precum. "Christ, you scared the shit out of me!"');
    scene.text('You smirk and repeat your question. "So? What were you looking at?"');
    scene.text('He pulls up his pants but doesn\'t button them. "Professor Cougar has claimed her next victim. Want to see?"');
    scene.text('You heard some of the professors get… extra friendly with some of the students, but do you really want to see this?');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
      { label: 'Peek', handler: (st: GameState) => {
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/island/university/lecture_hall/sex/spy/female_pro_sex` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You peek inside and see one of the female professors on her desk getting railed by one of the male students. She\'s fairly pretty for her age. After a few seconds, you step away and notice the guy staring at you with a lustful look in his eyes. You roll your eyes and walk away while shaking your head.');
    qspCall(st, 'arousal', 'voyeur_sex', 2);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'uni_lessons', 'schedule');
    scene.actions([
      { label: 'Go to the university plaza', goto: ['uni_grounds', ''] },
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
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lecture_hall_events':
      enterLectureHallEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const uni_events: LocationDef = {
  name: 'uni_events',
  title: 'As you walk down the hall, you spot a small group of boys wa',
  region: 'other',
  enter: enter,
};
