import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGeneralEducation(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/general_education/banana.jpg');
    scene.text('As Professor Kovalyov continues his lecture, you can\'t help but notice how attractive he is. He has a mesmerizing smile while he talks and this seems to have an effect on the other girls, even the shy Katja. You remember she used to be quite the shy girl in school, always resisting any charm. But now… She\'s half finished eating her banana while listening to Professor Kovalyov and is almost deepthroating it. Her mind is likely wandering somewhere else…');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/general_education/upskirt_pussy.jpg');
      scene.text('It\'s nearly the end of the class when you can\'t help but notice that some of the boys are twitching and whispering at each other. You curiously try to find out what the commotion could be about when you turn your head and see the reason. It\'s Liliya causing some trouble again as she innocently spreads her legs just enough to tease the boys with her naked pussy.');
      if (((s as any).PCloSkirt ?? 0) === 0  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
        scene.text('You wonder if you should try the same thing one day…');
      } else {
        if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
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
      }
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/general_education/girls_dryhump.jpg');
        scene.text('During the halftime break, you relax as the class was pretty mentally exhausting and look around to see how others are handling all the information you\'re getting bombarded with. Two girls notice some of the boys checking them out and start whispering back and forth while giggling before one of them grabs her friend, bends her over the table and starts humping her hard and rough.');
        scene.text('The second girl plays along, moaning and pretending she\'s getting fucked hard and rough, but the noise quickly draws Professor Kovalyov\'s attention, who walks over and gives the humping girl some pointers with her technique, which makes her blush. The two girls share a grin at his comments and burst out laughing before they quickly stop and retake their seats as Professor Kovalyov walks away back to the front of the classroom with an amused smile on his face.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/general_education/air_bj.jpg');
          scene.text('You notice some of the boys whispering at each other and winking. Two girls seems to be bored and have decided to tease the boys with some blowjob imitation. Everything goes smoothly and according to the girl\'s plans until Professor Kovalyov nervously starts to laugh and interrupts them. "Come on girls, you two are adults now. Stop acting like you\'re in high school!" He then goes back to his lecture and everyone returns their attention to him.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/general_education/girls_bj.jpg');
            scene.text('When a teacher leaves a classroom at school, chaos strikes and everybody starts to act like a child. It seems university is no different. As soon as Professor Kovalyov leaves the classroom, you see different students talking to each other and taking selfies. However, Maya and Dasha are on top of their desks, one kneeling before the other. Dasha takes the lead and starts to shove her imaginary dick down Maya\'s throat.');
            scene.text('This goes on for nearly a minute before the door opens and Professor Kovalyov returns. Everyone quickly returns to their seats and the class quietens down.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAssessment(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/teaching_methods/girl_goofing.jpg');
    scene.text('Professor Pasternak\'s lecture is rather boring with his strict tone of teaching. In your boredom, you look around to see if anything exciting is happening, but all you see is one of your classmates making a funny face at you.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/teaching_methods/girls_dryhump.jpg');
      scene.text('During the halftime break, you relax as the class was pretty mentally exhausting and look around to see how others are handling all the information you\'re getting bombarded with. Two girls notice some of the boys checking them out and start whispering back and forth while giggling before one of them grabs her friend, bends her over the table and starts humping her hard and rough.');
      scene.text('The second girl plays along, moaning and pretending she\'s getting fucked hard and rough, but the noise quickly draws Professor Pasternak\'s attention, who loudly clears his throat. The girls giggle but stop what they\'re doing and take their seats again.');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/teaching_methods/sleeping.jpg');
        scene.text('It\'s hard to stay awake during the class and you\'re not alone with this thought. You see someone has already fallen asleep on their desk.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/teaching_methods/upskirt_panties.jpg');
          scene.text('Everybody knows that Professor Pasternak requires you to fully pay attention to his class, and that he doesn\'t allow any type of goofing off. His teaching methods are rather boring and monotone, yet it\'s rare to see anyone make a scene. Today is no different, but you can\'t help but notice that Liliya doesn\'t give up that easily. She seems eager to disturb or charm Professor Pasternak with her pose, sitting in a way that Professor Pasternak could easily see her legs spreading under the desk.');
          scene.text('As you take a sneak peek, you can see it\'s a special day because she decided to wear panties this time.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/teaching_methods/whaletail.jpg');
            if (((s as any).christinaQW ?? 0)?.['subpath'] >= 3) {
              scene.text('You try to rest your head on the desk in front of you while looking around to see what the other students are doing. You quickly notice that somebody is watching you, and it\'s none other than Christina! You see her looking at you in disgust as a huge whaletail peeks out of her pants. You quickly shiver at the memories of when she bullied you. Luckily for you, those times are done.');
              scene.text('You quickly take another look at her enormous whaletail and decide to continue paying attention to the lecture before you anger her.');
            } else {
              if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
                scene.text('You try to rest your head on the desk in front of you while looking around to see what the other students are doing. You quickly notice that somebody is watching you, and it\'s none other than Christina! You see her taunting you with a bratty face as a huge whaletail peeks out of her pants. You remember beating her up at school and smile at the memory.');
              } else {
                if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
                  scene.text('You try to rest your head on the desk in front of you while looking around to see what the other students are doing. You quickly notice that somebody is watching you, and it\'s none other than Christina! You see her taunting you with a bratty face as a huge whaletail peeks out of her pants. You remember blackmailing her at school and smile at the memory.');
                } else {
                  scene.text('You try to rest your head on the desk in front of you while looking around to see what the other students are doing. You quickly notice that somebody is watching you, and it\'s none other than Christina! You remember her being a domineering bully in school. She has a huge whaletail peeking out of her pants, probably to gain attention from all the boys around.');
                  scene.text('Even you can hardly take your eyes off her thong slipping out like that. You can\'t tell why, but something in her eyes and her pose intimidates you.');
                }
              }
            }
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLearningTheories(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/learning_theories/girls_goofing.jpg');
    scene.text('Professor Kovalchuk\'s lessons are usually pretty interesting as she often interrupts herself and goes off topic talking about sci-fi or superhero movies. Sometimes a little spark of this is enough to lead the whole lecture into a discussion about her interests and everything nerdy or geeky in general. Today is no different and she speaks with a few students about the latest movie and how it could be connected to the subject. You\'re free to do as you wish and a group of girls are doing just that, goofing around like they\'re in high school.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/learning_theories/girls_kissing.jpg');
      scene.text('During the break, most of the students just relax, but a few quietly fool around so as not to draw too much attention. A pair of girls, perhaps feeling extra brave and cheeky, start slowly but passionately kissing near the front of the class and a number of both boys and girls enjoy the show. They keep kissing until Professor Kovalchuk walks up to them and asks them to take their seats as she starts the second part of the class.');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/learning_theories/sleep_selfie.jpg');
        scene.text('It\'s a normal lecture about learning theories today. They\'re often quite fun and interesting, but today is very dry and slow. You nearly fall asleep when you see Eva taking a picture of Liliya sleeping on her desk, nearly drooling as she dreams. You wonder if it\'s because the class is so boring, or if she had an interesting and exhausting night.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/learning_theories/feelup_teacher.jpg');
          scene.text('Professor Kovalchuk goes off topic more than usual today, talking about her latest cosplay outfit after one of the other students asks her about her latest project. She describes the outfit and the character she\'s going to play in great detail and one of the boys uses the opportunity to get up and join her. After asking many questions and discussing the costume, the boy comments that only fairly large and natural breasts that are still very firm could pull it off. She assures him that her breasts are real and are very firm.');
          scene.text('He takes this as an invite to reach out and give her breasts a squeeze. She seems shocked at first, but doesn\'t stop him. After a few squeezes, he seems rather impressed and nods in agreement, which gets most of the class laughing. She scolds him and sends him back to his seat before returning to her lesson.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/learning_theories/upskirt_no_panties.jpg');
            scene.text('"May I use the bathroom, Professor Kovalchuk?" you hear a girl ask and glance up to see Liliya walking towards the door to leave the classroom. Several eyes are fixated on her and she clearly enjoys the attention. With a wink and a huge smile on her face, she then lets out an innocent sounding "Oops, what\'s that?" She stops and acts like she dropped something before getting down on all fours and crawling under Professor Kovalchuk\'s desk, clearly exposing her naked ass and pussy as she does. Everybody in the classroom goes crazy and the boys start to whistle and holler. Professor Kovalchuk has no clue what\'s going on as Liliya climbs out, fixes her dress and leaves the classroom with an even bigger smile on her face.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterPsychologyOfAStudent_201(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/learning_theories/girls_goofing.jpg');
    scene.text('Professor Kovalchuk\'s lessons are usually pretty interesting as she often interrupts herself and goes off topic talking about sci-fi or superhero movies. Sometimes a little spark of this is enough to lead the whole lecture into a discussion about her interests and everything nerdy or geeky in general. Today is no different and she speaks with a few students about the latest movie and how it could be connected to the subject. You\'re free to do as you wish and a group of girls are doing just that, goofing around like they\'re in high school.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/learning_theories/girls_kissing.jpg');
      scene.text('During the break, most of the students just relax, but a few quietly fool around so as not to draw too much attention. A pair of girls, perhaps feeling extra brave and cheeky, start slowly but passionately kissing near the front of the class and a number of both boys and girls enjoy the show. They keep kissing until Professor Kovalchuk walks up to them and asks them to take their seats as she starts the second part of the class.');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/learning_theories/sleep_selfie.jpg');
        scene.text('It\'s a normal lecture about learning theories today. They\'re often quite fun and interesting, but today is very dry and slow. You nearly fall asleep when you see Eva taking a picture of Liliya sleeping on her desk, nearly drooling as she dreams. You wonder if it\'s because the class is so boring, or if she had an interesting and exhausting night.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/learning_theories/feelup_teacher.jpg');
          scene.text('Professor Kovalchuk goes off topic more than usual today, talking about her latest cosplay outfit after one of the other students asks her about her latest project. She describes the outfit and the character she\'s going to play in great detail and one of the boys uses the opportunity to get up and join her. After asking many questions and discussing the costume, the boy comments that only fairly large and natural breasts that are still very firm could pull it off. She assures him that her breasts are real and are very firm.');
          scene.text('He takes this as an invite to reach out and give her breasts a squeeze. She seems shocked at first, but doesn\'t stop him. After a few squeezes, he seems rather impressed and nods in agreement, which gets most of the class laughing. She scolds him and sends him back to his seat before returning to her lesson.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/learning_theories/upskirt_no_panties.jpg');
            scene.text('"May I use the bathroom, Professor Kovalchuk?" you hear a girl ask and glance up to see Liliya walking towards the door to leave the classroom. Several eyes are fixated on her and she clearly enjoys the attention. With a wink and a huge smile on her face, she then lets out an innocent sounding "Oops, what\'s that?"');
            scene.text('She stops and acts like she dropped something before getting down on all fours and crawling under Professor Kovalchuk\'s desk, clearly exposing her naked ass and pussy as she does. Everybody in the classroom goes crazy and the boys start to whistle and holler. Professor Kovalchuk has no clue what\'s going on as Liliya climbs out, fixes her dress and leaves the classroom with an even bigger smile on her face.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterPatientCare(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/teaching_methods/sleeping.jpg');
    scene.text('It\'s hard to stay awake during the class and you\'re not alone with this thought. You see someone has already fallen asleep on their desk.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/teaching_methods/girl_goofing.jpg');
      scene.text('Today\'s lecture is rather boring, so you look around to see if anything exciting is happening. All you see is Vicky making a funny face at you when you glance in her direction.');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/general_education/girls_dryhump.jpg');
        scene.text('During the halftime break, you relax as the class was pretty mentally exhausting and look around to see how others are handling all the information you\'re getting bombarded with. The twins start giggling before one of them grabs the other, bends her over the table and starts humping her hard and rough.');
        scene.text('They both start moaning and pretending they\'re fucking, but the noise quickly draws Professor Kudelina\'s attention, who walks over and scoffs at them in disgust. "If you two want to act like whores, then get out of my classroom and onto a street corner!"');
        scene.text('The two girls burst out laughing, but a stern glare from Professor Kudelina quickly has them back in their seats before she walks back to the front of the classroom with a disgusted scowl on her face.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/general_education/air_bj.jpg');
          scene.text('Two girls seem to be bored and have decided to amuse themselves with some blowjob imitation until Professor Kudelina storms over and interrupts them. "Can\'t help what comes naturally, can you? Stop being a pair of good for nothing sluts and pay attention!"');
          scene.text('She then goes back to her lecture and everyone returns their attention to the front of the room.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/learning_theories/girls_kissing.jpg');
            scene.text('During the break, most of the students just relax, but a few quietly fool around so as not to draw too much attention. A pair of girls, perhaps feeling extra brave and cheeky, start slowly but passionately kissing near the front of the class and a number of girls enjoy the show. They keep kissing until Professor Kudelina walks up to them and tells them to knock it off as she starts the second part of the class.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAnatomyAndPhysiology(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/locations/city/island/university/classroom/learning_theories/girls_goofing.jpg');
    scene.text('Professor Marinova often goes off topic and starts gossiping during her lectures. Today is no different and she speaks with a few students about the latest rumors and tidbits. You\'re free to do as you wish and a group of girls are doing just that, goofing around like they\'re in high school.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/learning_theories/upskirt_no_panties.jpg');
      scene.text('"May I use the bathroom, Professor Marinova?" you hear a girl ask and glance up to see either Mia or Yana walking towards the door to leave the classroom. She winks at her twin, then stops and acts like she dropped something before getting down on all fours and crawling under Professor Marinova\'s desk, clearly exposing her naked ass and pussy as she does.');
      scene.text('Everybody in the classroom gasps or giggles, but Professor Marinova has no clue what\'s going on as she climbs out, smiles at her sister and leaves the classroom.');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/learning_theories/sleep_selfie.jpg');
        scene.text('Today\'s lecture is very dry and slow. You nearly fall asleep when you see someone taking a picture of a girl sleeping on her desk, nearly drooling as she dreams. You wonder if it\'s because the class is so boring, or if she had an interesting and exhausting night.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/general_education/girls_bj.jpg');
          scene.text('When a teacher leaves a classroom at school, chaos strikes and everybody starts to act like a child. It seems university is no different. As soon as Professor Marinova leaves the classroom, you see different students talking to each other and taking selfies. However, Mia and Yana are on top of their desks, one kneeling before the other. One of them takes the lead and starts to shove her imaginary dick down the other\'s throat.');
          scene.text('This goes on for nearly a minute before the door opens and Professor Marinova returns. Everyone quickly returns to their seats and the class quietens down.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/teaching_methods/sleeping.jpg');
            scene.text('It\'s hard to stay awake during the class and you\'re not alone with this thought. You see someone has already fallen asleep on their desk.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterDosagesAndPharmaceuticals(s: GameState, scene: SceneBuilder): void {
  (s as any).uni_event_hour = 1;
  (s as any).temp = Math.floor(Math.random() * 10) + 0;
  if ((!((s as any).temp ?? 0))) {
    scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
    scene.text('As per usual, Professor Borisov drones on and on in excessive detail and you see the majority of the class struggling to pay any attention to him as he faces away from you and writes things down on his board. He continues his dry and extremely boring lecture for what feels like an eternity, making no effort to engage the class with what he\'s teaching.');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/island/university/classroom/teaching_methods/upskirt_panties.jpg');
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_had_sex ?? 0)?.['A23']) {
        scene.text('Professor Borisov\'s teaching methods are rather boring and monotone, and today is no different. You look around to see if something more interesting is happening and spot Albina sitting in a way that someone could easily see her legs spreading under the desk. She notices you staring and winks at you before closing her legs.');
      } else {
        scene.text('Professor Borisov\'s teaching methods are rather boring and monotone, and today is no different. You look around to see if something more interesting is happening and spot Albina sitting in a way that someone could easily see her legs spreading under the desk. She notices you staring and quickly closes her legs while frowning at you.');
      }
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/island/university/classroom/teaching_methods/sleeping.jpg');
        scene.text('It\'s hard to stay awake during the class and you\'re not alone with this thought. You see someone has already fallen asleep on their desk.');
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/island/university/classroom/learning_theories/girls_kissing.jpg');
          scene.text('During the break, most of the students just relax, but a few quietly fool around so as not to draw too much attention. A pair of girls, perhaps feeling extra brave and cheeky, start slowly but passionately kissing near the front of the class and a number of girls enjoy the show.');
          scene.text('They keep kissing until Professor Borisov walks up to them and awkwardly asks them to stop. The two girls ignore him and, unsure what to do, he stands in silence as the two girls continue making out before giggling and taking their seats. A rather flustered looking Professor Borisov then starts the second part of the class.');
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/island/university/classroom/general_education/girls_dryhump.jpg');
            scene.text('During the halftime break, you relax as the class was pretty mentally exhausting and look around to see how others are handling all the information you\'re getting bombarded with. The twins start giggling before one of them grabs the other, bends her over the table and starts humping her hard and rough.');
            scene.text('They both start moaning and pretending they\'re fucking, but the noise quickly draws Professor Borisov\'s attention, who slowly walks over and quietly clears his throat. "Uhm, girls. Please stop that. Girls?"');
            scene.text('The two girls start giggling. "Come on Professor Borisov, surely you know who is who?" one of them asks as they stop humping the other.');
            scene.text('"Yeah, I wear black panties with white stripes, she wears white panties with black stripes. Want to see?" the other adds and they both start laughing, as do some of the class.');
            scene.text('Professor Borisov\'s face turns bright red and he clears his throat before quickly walking back to the front of the class. The twins high five each other and giggle as they take their seats.');
          } else {
            scene.img(`images/locations/city/island/university/classroom/lecture${Math.floor(Math.random() * 5) + 1}.jpg`);
            scene.text('As you sit listening to the lesson, you look around hoping something interesting will happen, but nothing does.');
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Wait for the end of the lesson', goto: ['uni_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'general_education':
      enterGeneralEducation(s, scene);
      break;
    case 'assessment':
      enterAssessment(s, scene);
      break;
    case 'learning_theories':
      enterLearningTheories(s, scene);
      break;
    case 'psychology_of_a_student_201':
      enterPsychologyOfAStudent_201(s, scene);
      break;
    case 'patient_care':
      enterPatientCare(s, scene);
      break;
    case 'anatomy_and_physiology':
      enterAnatomyAndPhysiology(s, scene);
      break;
    case 'dosages_and_pharmaceuticals':
      enterDosagesAndPharmaceuticals(s, scene);
      break;
    default:
      enterGeneralEducation(s, scene);
      break;
  }
}

export const uni_lessonsev2: LocationDef = {
  name: 'uni_lessonsev2',
  title: 'As Professor Kovalyov continues his lecture, you can\'t help ',
  region: 'other',
  description: ['As Professor Kovalyov continues his lecture, you can\'t help but notice how attractive he is. He has a mesmerizing smile while he talks and this seems to have an effect on the other girls, even the shy Katja. You remember she used to be quite the shy girl in school, always resisting any charm. But now… She\'s half finished eating her banana while listening to Professor Kovalyov and is almost deepthroating it. Her mind is likely wandering somewhere else…'],
  enter: enter,
};
