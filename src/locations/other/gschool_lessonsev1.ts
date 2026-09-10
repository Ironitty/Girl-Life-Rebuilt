import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).fizperand = Math.floor(Math.random() * 32) + 1;
  if (((s as any).fizperand ?? 0) === 1  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/gym/fizperand2.jpg');
    scene.text('During the warm-up for gym class, Coach Pavlovich comes over to assist you with your warm-up, his groin grinding against your ass as he does. If looks could kill, Christina\'s jealous gaze would have had you dead on the ground by now.');
  } else {
    scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz2'] }]);
    if (((s as any).fizperand ?? 0) === 3) {
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/gym/fizperand4.jpg');
      scene.text('After finishing the lesson a little early, you and some of the other girls start to fool around a bit with volleyballs during the \'free play\' section of the class. The four of you show off your \'giant breasts\' to the guys, running around to make them bounce as much as you can. As the lesson ends, you all share a laugh as you put the volleyballs back where they belong.');
    } else {
      qspCall(s, 'mood', 'raise', 'small');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/gym/fizperand5.jpg');
      scene.text('Ivan offers to help you with a workout on the exercise balls. Lariska is enthusiastic about the idea and asks if she can join in. You agree and after you and Lariska each fetch a ball and get ready, Ivan has you do all sorts of stretches and exercises.');
      scene.text('After a while, you realize that in every pose Ivan suggests, you\'re showing off either your breasts or your ass. One look at his face confirms that this was his intention all along. With a lewd smile, you redouble your efforts and show off your ass as much as you can.');
      qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      if (((s as any).fizperand ?? 0) === 5) {
        qspCall(s, 'mood', 'raise', 'small');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/school/gym/fizperand6.jpg');
        if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('You\'re training with some free weights today. In the current exercise, you\'re supposed to keep your legs straight while the dumbbells are on the ground. Noticing the class has grown awfully quiet, you look between your legs and notice the majority of them gawking at your shapely ass. You hold the position for a few seconds longer than you need to, reveling in their praises as they compliment your figure.');
          qspCall(s, 'arousal', 'foreplay', 10, 'exhibitionism');
          qspCall(s, 'arousal', 'end');
        } else {
          scene.text('You\'re training with some free weights today. As you do your routine, you notice that the class has grown awfully quiet and glance over to see most of them gawking at Albina, who has bent over while also working out with weights and is showing off her toned bubble butt to everyone watching. She soon straightens back up and gives all of them a dirty look.');
        }
      } else {
        scene.img('images/locations/pavlovsk/school/gym/gymfight.jpg');
        scene.text('You hear a commotion from the other side of the room and look over to see Dan and Roman shoving each other. Roman shoves Dan again and it quickly starts escalating. A few punches are thrown and the two of them are soon down on the ground fighting. The coach rushes over and quickly pulls them apart before sending them to the principal.');
        if (((s as any).fizperand ?? 0) === 7) {
          scene.img('images/locations/pavlovsk/school/gym/tinydick.jpg');
          scene.text('During a break in gym class, you and several other girls are talking when Igor wanders over and tries to chat you all up. You find his efforts amusing at best and you can tell they aren\'t working on the other girls either, yet he seems to think he\'s oozing cool and keeps chatting up the lot of you before Vitek suddenly rushes up behind him, grabs his shorts and yanks them down to his ankles.');
          scene.text('Unfortunately for Igor, his underwear went with the shorts and now he\'s standing half naked in front of a bunch of girls. What\'s worse is that now everyone can see how tiny his dick is, making you and the others gasp and giggle, several girls even pointing and laughing loudly. The whole class is soon in stitches as Igor desperately tries to pull up his shorts and fails, all while cursing at Vitek and calling him all kinds of names. You almost feel sorry for him; not only is he a terrible flirt, but the whole class has seen his tiny dick.');
        } else {
          scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz8'] }]);
          if (((s as any).fizperand ?? 0) === 9) {
            scene.img('images/locations/pavlovsk/school/gym/hanging.jpg');
            scene.text('During class, Irina gives you a tap on the shoulder, giggling and pointing at Vitek. You look over and see the tip of his dick hanging out the leg of his shorts. You giggle as well, but you are also quite impressed and maybe just a little turned on at the sight; he\'s certainly very well endowed.');
            scene.text('It takes him a while to notice the girls giggling at him and even longer to figure out why. Once he does, he makes a show of tucking his dick away by adjusting his shorts, all with a huge smile on his face.');
            qspCall(s, 'arousal', 'erotic_nudity', 2);
            qspCall(s, 'arousal', 'end');
          } else {
            scene.actions([{ label: 'Continue', goto: ['gschool_lessonsev1', 'fiz10'] }]);
            if (((s as any).fizperand ?? 0) === 11) {
              scene.img('images/locations/pavlovsk/school/gym/bendoverff.jpg');
              scene.text('During class, Lina notices Ivan watching Lariska and moves up behind her before pushing her forward at the shoulders, making her bend over. She proceeds to pretend to hump Lariska, obviously trying to mimic Ivan\'s voice and speech. "Oh Lariska, I want to fuck your ass!" This causes several of the other students to laugh, even Ivan, but it\'s quickly broken up by Mr. Nikolaevich.');
            } else {
              scene.img('images/locations/pavlovsk/school/gym/doublebutt.jpg');
              scene.text('During class, Lina and Lariska are whispering and giggling about something. After some time, they pull down the back of their shorts to flash their panty-clad asses at several of the more popular jock boys.');
              if (((s as any).fizperand ?? 0) === 13) {
                scene.img('images/locations/pavlovsk/school/gym/dry3some.jpg');
                scene.text('Near the end of class, some girls are chatting when they notice some boys looking their way and start horsing around. One buries her face in her friend\'s breasts as the third pretends to hump her. After a few seconds, once several guys are watching, they stop and laugh as they move away.');
              } else {
                scene.img('images/locations/pavlovsk/school/gym/hardon.jpg');
                scene.text('At the end of class, everyone is allowed to do their own thing so long as they\'re doing something physical. You see Fedor using the bench press and notice that he\'s sporting a serious hardon, with several of the other girls having noticed as well and giggling about it.');
                if (((s as any).fizperand ?? 0) === 15) {
                  scene.img('images/locations/pavlovsk/school/gym/stretchhump.jpg');
                  scene.text('Lina is on the floor doing the splits when Lariska comes up behind her and lays on top of her, pretending to hump her. Lina laughs before they break it up.');
                } else {
                  scene.img('images/locations/pavlovsk/school/gym/teaseboys\' + rand(1, 2) + \'.jpg');
                  scene.text('Lena and Lera notice several of the boys watching them and start teasing them by pretending to make out in front of them. Knowing them, they\'re likely doing it for more than the laughs.');
                  scene.img('images/locations/pavlovsk/school/gym/fizperand7.jpg');
                  scene.text('Even though gym class offered a good workout today, it was kind of boring. Nothing happened that\'s worth noting.');
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const gschool_lessonsev1: LocationDef = {
  name: 'gschool_lessonsev1',
  title: 'During the warm-up for gym class, Coach Pavlovich comes over',
  region: 'other',
  description: ['During the warm-up for gym class, Coach Pavlovich comes over to assist you with your warm-up, his groin grinding against your ass as he does. If looks could kill, Christina\'s jealous gaze would have had you dead on the ground by now.'],
  enter: enter,
};
