import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRexRep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A57'] < 20) {
    scene.text('You and Rex get along terribly.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A57'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A57'] < 40) {
      scene.text('You and Rex have some tension.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A57'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A57'] < 60) {
        scene.text('You and Rex have a normal relationship.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A57'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A57'] < 80) {
          scene.text('You and Rex have a good relationship.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A57'] >= 80) {
            scene.text('You and Rex have a great relationship.');
          }
        }
      }
    }
  }
  scene.text('');
  scene.build();
}

function enterRexGdkTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A57'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A57'] < 60) {
    qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
    (s as any).rexTalk = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).rexTalk ?? 0) <= 5) {
      scene.text('You talk with Rex about different topics.');
    } else {
      if (((s as any).rexTalk ?? 0) === 6) {
        scene.text('You talk with Rex, and he tells you that last summer he went to Abkhazia with his parents.');
      } else {
        if (((s as any).rexTalk ?? 0) === 7) {
          scene.text('You talk with Rex and find out he loves photography and wants to become a photographer.');
        } else {
          if (((s as any).rexTalk ?? 0) === 8) {
            scene.text('You talk with Rex. He says that his dad has a garage, and he sometimes moonlights there. He\'s not too bad.');
          } else {
            if (((s as any).rexTalk ?? 0) === 9) {
              scene.text('You talk with Rex. He tells you about how he got into an accident.');
            } else {
              if (((s as any).rexTalk ?? 0) === 10) {
                scene.text('You talk with Rex. He says that his name is actually Egor. "Rex" is just his street name.');
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A57'] >= 60) {
      (s as any).rexTalk = (Math.floor(Math.random() * 10) + 1);
      if (((s as any).rexTalk ?? 0) === 10  &&  ((s as any).npc_rel ?? 0)?.['A57'] >= 80) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/resident/reks/event/rexhistory1.jpg');
        scene.text('You talk with Rex. He says "My friend, the bride, was so drunk, that after the party when everyone went to sleep she plopped down in the wrong bed! In the dark she thought she was in bed with her new husband, so she began to fuck the guy, not realizing it was actually a friend of the groom, though clearly not the best! Well, he wasn\'t going to turn her down! You don\'t even want to know how that went over in the morning… Needless to say, they didn\'t stay married" Rex is now laughing.');
        scene.text('You find yourself getting a bit horny at the idea. ');
      } else {
        if (((s as any).rexTalk ?? 0) < 5  &&  ((s as any).npc_rel ?? 0)?.['A57'] >= 80  &&  ((s as any).rexSisTalk ?? 0) < 4) {
          if ((!((s as any).rexSisTalk ?? 0))) {
            scene.text('You talk with Rex. He says he also has an older sister Diana, who is studying to become a teacher in the city. She lives with the other students in the Dorm, but sometimes comes here on the weekends for vacation; the benefit of the city being only a day\'s drive away.');
            (s as any).rexSisTalk = ((s as any).rexSisTalk ?? 0) + (1);
          } else {
            if (((s as any).rexSisTalk ?? 0) === 1) {
              scene.text('You talk with Rex. He says that he loves his sister. He once broke the nose of a local guy who had broken her heart by leaving her for another woman. Even after that, though, he still hasn\'t seen her with other guys. When she comes to visit, she mainly just walks with friends. Although, he suspects, she may have a different kind of \'friend\' in town…');
              (s as any).rexSisTalk = ((s as any).rexSisTalk ?? 0) + (1);
            } else {
              if (((s as any).rexSisTalk ?? 0) === 2) {
                scene.text('You talk with Rex.');
                scene.text(`${((s as any).pcs_nickname ?? '')}, remember how I told you that my folks gave me an awesome new camera for my birthday? How about we go for a walk in the Park tomorrow? I want to take some photos there to show you how great its pictures are!`);
                scene.actions([
{ label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    scene.text('\'That sounds like fun, let\'s head out there at 16:00.\'');
    scene.text('\'Cool, then tomorrow at 16:00 it is!\'');
    (st as any).rexPark = 1;
    (st as any).rexParkDay = ((st as any).daystart ?? 0) + 1;
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
{ label: 'Bail', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'dislike');
    scene.text('Tomorrow I\'m a bit busy…, maybe another time.');
    scene.text('Ah, OK…');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
]);
                return;
              } else {
                if (((s as any).rexSisTalk ?? 0) === 3) {
                  scene.text('You talk with Rex.');
                  scene.text(`'${((s as any).pcs_nickname ?? '')} remember, how I told you I've been stealing my father's car keys while he's not home? Tomorrow my folks are going to the city for their anniversary and it's likely they will stay for the night. My father is going to be leaving his keys at home. Maybe we could go for a little ride around 21:00?'`);
                  scene.actions([
{ label: 'Bail', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'dislike');
    scene.text('Maybe another time.');
    scene.text('Ah… bummer, replied Rex.');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
{ label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    scene.text('Sure! Why not?');
    scene.text('\'Alright! Then tomorrow I\'ll pick you up at your door around 21:00.\'');
    (st as any).rexCar = 1;
    (st as any).rexCarDay = ((st as any).daystart ?? 0) + 1;
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
]);
                  return;
                }
              }
            }
          }
        } else {
          if (((s as any).rexTalk ?? 0) < 5  &&  ((s as any).npc_rel ?? 0)?.['A57'] >= 80  &&  ((s as any).rexSisTalk ?? 0) >= 4  &&  ((s as any).rexCar ?? 0) !== 1) {
            scene.text('\'Rex offers to take you for a drive around 21:00 tonight.\'');
            scene.actions([
{ label: 'Bail', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'dislike');
    scene.text('Maybe another time.');
    scene.text('Well, maybe next time…');
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
{ label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'love');
    scene.text('Yeah, let\'s do it.');
    scene.text('\'Great! I\'ll be on your porch at 21:00 smiled Rex.\'');
    (st as any).rexCar = 1;
    (st as any).rexCarDay = ((st as any).daystart ?? 0);
    scene.actions([
      { label: 'Continue to drink beer', goto: ['sister', 'scene2'] },
    ]);
  } },
]);
            return;
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
            (s as any).rexTalk = (Math.floor(Math.random() * 6) + 1);
          }
        }
      }
      if (((s as any).rexTalk ?? 0) === 1) {
        scene.text('You talk with Rex. He tells you that some nights he "borrows" the keys to his dad\'s car while his parents aren\'t home and goes driving without a license.');
      } else {
        if (((s as any).rexTalk ?? 0) === 2) {
          scene.text('You talk with Rex about various topics, and he sometimes gives you compliments in between.');
        } else {
          if (((s as any).rexTalk ?? 0) === 3) {
            scene.text('You talk with Rex. He tells you about the awesome camera his parents gave him for his birthday.');
          } else {
            if (((s as any).rexTalk ?? 0) === 4) {
              scene.text('You talk with Rex, "You know, my sister\'s away at the University, but I think you two definitely have a lot in common…"');
            } else {
              if (((s as any).rexTalk ?? 0) === 5) {
                scene.text('You talk with Rex. He says, that he\'s taking classes at a driving school and, if he\'s lucky, he\'ll get his license soon.');
              } else {
                if (((s as any).rexTalk ?? 0) === 6) {
                  scene.text('You talk with Rex, and each time you find yourself liking him a little more. It turns out he isn\'t so strange.');
                }
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Continue to drink beer', handler: (st: GameState) => {
    (st as any).rexTalk = undefined;
    qspGoto(st, 'sister', 'scene2');
  } },
      ]);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
      (s as any).rexTalk = (Math.floor(Math.random() * 6) + 1);
      if (((s as any).rexTalk ?? 0) === 1) {
        scene.text('You talk with Rex. He tells you that some nights he "borrows" the keys to his dad\'s car while his parents aren\'t home and goes driving without a license.');
      } else {
        if (((s as any).rexTalk ?? 0) === 2) {
          scene.text('You talk with Rex about various topics, and he sometimes gives you compliments in between.');
        } else {
          if (((s as any).rexTalk ?? 0) === 3) {
            scene.text('You talk with Rex. He tells you about the awesome camera his parents gave him for his birthday.');
          } else {
            if (((s as any).rexTalk ?? 0) === 4) {
              scene.text('You talk with Rex, "You know, my sister\'s away at the University, but I think you two definitely have a lot in common…"');
            } else {
              if (((s as any).rexTalk ?? 0) === 5) {
                scene.text('You talk with Rex. He says, that he\'s taking classes at a driving school and, if he\'s lucky, he\'ll get his license soon.');
              } else {
                if (((s as any).rexTalk ?? 0) === 6) {
                  scene.text('You talk with Rex, and each time you find yourself liking him a little more. It turns out he isn\'t so strange.');
                }
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Continue to drink beer', handler: (st: GameState) => {
    (st as any).rexTalk = undefined;
    qspGoto(st, 'sister', 'scene2');
  } },
      ]);
    }
  }
  (s as any).rexTalk = undefined;
  scene.build();
}

function enterSkver(s: GameState, scene: SceneBuilder): void {
  (s as any).rexPark = 2;
  (s as any).rexSisTalk = ((s as any).rexSisTalk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A57', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big57.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRexRep(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('Rex is standing at the bench with his hands behind his back. Just as you walk up to him you see him smiling and then he pulls out from behind his back a little, but very beautiful, bouquet of flowers and hands it to you.');
  scene.text('You don\'t know what to say – "Wow…" you take the bouquet, inhaling the aroma, and on the exhale, keeping the smile hidden from your face, say: "Thank you, Rex…!"');
  scene.actions([
    { label: 'Walk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/progulpark.jpg');
    scene.text('You wander through the Park together, talking about different topics. Rex periodically takes photos of the landscape with his new camera and you must admit, the pictures are very nice.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rexozero.jpg');
    scene.text('When you reach the lake, Rex takes a picture with you.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    (st as any).numrand = 137;
    while (true) {
      if (((st as any).fashionista_dress ?? 0)?.[String((st as any).numrand ?? 0)] !== 0) {
        (st as any).numrand = (Math.floor(Math.random() * 183) + 16);
        break;
      }
      scene.img(`images/pc/items/fashionista/dress/${((st as any).numrand ?? '')}.jpg`);
      scene.text(`You have wandered all the way to the market. At one of the shops there you see a beautiful dress hanging beneath an "On sale" sign. The price is only ${qspFunc(s, 'money', 'string_price', 1500)}! Rex sees that this dress has caught your attention.`);
      scene.actions([
        { label: 'Look at Rex', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big57.jpg');
    scene.text('Rex looks into your eyes, smiling: ');
    scene.text(`${((st as any).pcs_nickname ?? '')}, if you want, I can buy this dress. But only if I can take a few shots of you wearing it. Deal?`);
    scene.actions([
      { label: 'Back out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    scene.text('There\'s no need to spend the money.');
    scene.text('You wandered a little more and parted ways.');
    scene.actions([
      { label: 'In town', goto: ['pav_commercial', ''] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (qspFunc(s, 'clothing', 'is_owned', 'fashionista_dress', 137) === 0) {
      qspCall(st, 'clothing', 'add_item', 'fashionista_dress', 137);
      scene.text('Rex buys you the dress.');
    } else {
      qspCall(st, 'clothing', 'add_item', 'fashionista_dress', ((st as any).numrand ?? 0));
    }
    qspCall(st, 'npc_relationship', 'modify', 'A57', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big57.jpg');
    scene.text('Rex wants to see you in the dress, so you go home and change into it.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'wear', 'fashionista_dress', ((st as any).numrand ?? 0));
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/newclothes/fpr4.jpg');
    scene.text('You come out of the entrance: ');
    scene.text('-Well? You ask.');
    scene.text('Rex, practically devouring you with his eyes, mumbles: ');
    scene.text('Gorgeous!!!');
    scene.actions([
      { label: 'Go to the park', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/newclothes/fpr1.jpg');
    scene.text('You\'ve come to the square: ');
    scene.text(`${((st as any).pcs_nickname ?? '')}, let's take a photo of you with your bouquet.`);
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/newclothes/fpr2.jpg');
    scene.text('This would be a great place to frame the shot, Rex says. You sit on a huge rock and strike a pose. From the corner of your eye you notice how Rex\'s crotch is bulging.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/newclothes/fpr3.jpg');
    scene.text('You pose for another shot on the stone with your legs crossed and then go wandering the Park in search of new places for photos. After taking a few more photos, you go to sit on a bench.');
    scene.text('Rex pulls out his smartphone and shows you some pictures of his sister.');
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr1.jpg');
    scene.text('Look what she got me! True beauty, right?');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr2.jpg');
    scene.text('This is her at my uncle\'s wedding.');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr3.jpg');
    scene.text(`She loves all sorts of beautiful clothes. But I guess that's true for all women. No offense ${((st as any).pcs_nickname ?? '')}, he smiled.`);
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr4.jpg');
    scene.text('This is us in the square');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr5.jpg');
    scene.text('This is at our bathhouse');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr6.jpg');
    scene.text('That\'s father\'s car she is sitting in. I took this one when I only had my phone for pictures. She asked me to take a shot to capture her legs. Beautiful, no?');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr7.jpg');
    scene.text('And this is at our house.');
    scene.actions([
      { label: 'View more', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/fsr8.jpg');
    scene.text('Oh…! Fuck!!! Uhhh… mumbled Rex. You go wide-eyed looking at this one, wondering why Rex kept a photo of his sister like this. You can\'t help but blurt out, "Whose cock is that in her mouth!?" Rex blushes deeply and quickly turns off his phone. You begin to suspect that it might have been his cock; otherwise he probably wouldn\'t be so embarrassed. Rex immediately begins to make excuses, first supposedly not knowing how this picture ended up in his phone, and then he tries to say it\'s not even his sister, thinking that you couldn\'t see her well enough with that much dick in her face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big57.jpg');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexRep(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You laugh a little and try to change the subject. But you can\'t shake the thought of what you just saw… And your opinion of Rex changed dramatically.');
    scene.text('Well, Rex, I have to go. Can you take me home now, you ask him Thank you for the dress and I\'ll talk to you soon.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAvto(s: GameState, scene: SceneBuilder): void {
  (s as any).rexCar = 0;
  (s as any).rexSisTalk = ((s as any).rexSisTalk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/reks/event/car/skoda.jpg');
  scene.text('You stepped into the new foreign car and went for a ride. Rex was swerving on the road. You noticed, he was already a little drunk. Rex stopped at a little place overlooking the lake.');
  scene.text('He pulled from the back seat 2 cans of beer and offered you one.');
  qspCall(s, 'willpower', 'drink', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big57.jpg');
    scene.text('You pretty much sit around waiting for an already tipsy Rex to finish the beer.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexStory(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big57.jpg');
    scene.text('You sit around drinking for quite a long time, thinking this beer is too bitter to take big gulps. Rex, however, who was already tipsy, manages to finish most of the bottle.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexStory(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterRexStory(s: GameState, scene: SceneBuilder): void {
  scene.text('Rex is already pretty drunk.');
  scene.text(`${((s as any).pcs_nickname ?? '')}, I would like to share something with you… It is very important for me to tell you everything as it is. I hope you will listen to me until the end…`);
  scene.text('In general…, what you saw on my phone… Yeah… that\'s my sister… So it was…');
  scene.text('Forgive me for the bluntness. So we had a good time! Moreover, this has happened more than once. It actually happened several times. One day I asked her if I could take a picture while she was blowing me. Diana was a little surprised by my request but she eventually agreed and continued to suck This really turned me on. A few days later she asked me to remove the pictures. I told her I removed them all and she believed me.');
  scene.text(`You have to understand, ${((s as any).pcs_nickname ?? '')}… I have a weakness for women's legs. They…, they really turn me on! And she gets really turned on at the sight of the male penis. And we both adore oral sex! I guess it runs in the family… -it just happened, we understood each other. You shouldn't think I actually had sex with my sister! We only had oral sex!`);
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/utrmin.jpg');
    scene.text('One night Diana came home very drunk. Actually it was already almost morning. At that time my bedroom was being repaired so I was sleeping on a folding chair in the hall. I had dropped my blanket. So that night I thought I was having a wet dream. It felt great but then I sensed something was wrong… I Opened my eyes, and there I saw… Diana sucking on my dick! I quickly closed my eyes, lay very still and tried to figure out whether it was a dream or reality? Of course she already knew I woke up, but she did not stop She continued to suck slowly.');
    scene.actions([
      { label: 'Keep listening', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/minrex.mp4');
    scene.text('Soon after I finally opened my eyes but I did not move or say anything. I just lay there and fully enjoyed the feeling as my elder sister was blowing me! This was the first time I had an experience like this. This was the first blowjob I ever received in my life');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/rekssister/minrex2.mp4');
    scene.text('I couldn\'t take it very long. She was sucking very slowly, it was like she wanted me to last a little longer. It didn\'t help much and soon my cock was spurting streams of cum and her mouth was completely filled with my sperm! She didn\'t even flinch and swallowed every last drop. Then she carefully removed my, still rock-hard, cock from her mouth. She went to lie down on her own bed and it didn\'t take her long to fall asleep.');
    scene.text('For the next hour I was just twisting and turning in my chair and could not sleep. I kept thinking about what happened…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.text('The next day she just avoided me the whole day. In the evening, she acted like nothing happened and she sat down with me on the sofa. Together we watched TV, from time to time commenting on what was happening on the screen.');
    scene.text('A few days later it happened again, only this time it was different, she was much more forceful and I also helped her to relax. We had such a great time. After this second time we found the courage to discuss what was happening between us. That\'s when I learned about her weaknesses and I spoke about mine. I justified it by the fact, that it would be better to release some steam with me then to go running or something.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).pcs_horny ?? 0) < 95) {
      (st as any).pcs_horny = 95;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/rudivl.jpg');
    scene.text('You sat there silently and listened to the words of Rex. You though about some small details you noticed before, now you realize why he seemed so strange. But he liked you terribly.');
    scene.text('Rex stared at you waiting for your words.');
    scene.text(`-${((st as any).pcs_nickname ?? '')}, are you okay?`);
    scene.text('5 Seconds later you have gathered your thoughts. The first thing you say is: ');
    scene.text('– Woow…! I don\'t even know what to say… On your face you have a mixture of surprise and a smile.');
    scene.text('"At least answer me this : after this confession do you still want to talk with me or did I blow up our relation ?" Rex asked with a desperate voice');
    scene.text('Well do you take pictures like that of all the girls that blow you ? I… Well… I don\'t want to be part of your personal collection, for now… you said. Then an awkward silence followed. So you said : "just messing with you Egor", while giving him a little bump on the shoulder.');
    scene.text('Rex slightly relaxed, laughing at your ambiguous joke, he understood that all is not lost. Gradually the conversation turned in a different direction. You sat there while Rex finished his beer. Then he threw the empty bottle out the window and asked: ');
    scene.text(`Well, ${((st as any).pcs_nickname ?? '')}, can we go?`);
    scene.text('No, no, no… you are not driving drunk. Come walk with me, we don\'t have to walk very far…');
    scene.text('Rex turned on the car indicators and you moved towards the house. Rex was walking with you but staggering and he did not have the courage to take you by the hand. The only thing he could think about now was what you thought of him now.');
    scene.text('Suddenly you felt something between you legs. It looks like the conversation got you very excited and you have become very wet between your legs. The entire way home you\'ve run the conversation you just had in you head and started pondering… Why the hell did I say that…? "For now"… Why "for now"?… I wonder what he thinks of me now…');
    scene.text('Soon you arrive at the house. You exchanged a few words, said your goodbyes and parted ways.');
    scene.actions([
      { label: 'Home', goto: ['pav_residential', ''] },
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
  scene.build();
}

function enterAvto2(s: GameState, scene: SceneBuilder): void {
  (s as any).rexCar = 0;
  (s as any).rexCarCount = ((s as any).rexCarCount ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex1.jpg');
  if (((s as any).rexCarCount ?? 0) <= 3) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    (s as any).rexTalk = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).rexTalk ?? 0) === 1) {
      scene.text('You ride with Rex. He says, he finally learned how to pass cars from the right side and now his father sometimes allows him to take the car. ');
    }
    if (((s as any).rexTalk ?? 0) === 2) {
      scene.text('You ride with Rex. He tells you various funny stories.');
    }
    if (((s as any).rexTalk ?? 0) === 3) {
      scene.text('You ride with Rex, and he tells you that all he remembers about his birthday party was being drunk.');
    }
    if (((s as any).rexTalk ?? 0) === 4) {
      scene.text('You ride with Rex, and he shares his dream of one day opening up his own studio.');
    }
    (s as any).rexTalk = undefined;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRexCarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).rexCarCount ?? 0) > 3  &&  ((s as any).rexCarCount ?? 0) <= 6) {
      scene.text('You ride with Rex. During the conversation, he takes your hand.');
      qspCall(s, 'willpower', 'misc', 'resist', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Pull your hand away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).rexCarCount = ((st as any).rexCarCount ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex4.jpg');
    scene.text('You gently remove his arm. Rex lets out a little sigh and continued the conversation.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Let him', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex2.jpg');
    scene.text('Rex holds you by the hand. He is surprised that you don\'t mind. You notice he is a little nervous.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((s as any).rexCarCount ?? 0) >= 7) {
        scene.text('You ride with Rex, during the ride, he puts his hand on your knee.');
        qspCall(s, 'willpower', 'foreplay', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Pull your hand away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).rexCarCount = ((st as any).rexCarCount ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex4.jpg');
    scene.text('You gently remove his arm. Rex lets out a little sigh and continued the conversation.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex3.jpg');
    scene.text('Rex keeps his hand on your leg just above the knee, you continued to talk.');
    qspCall(st, 'willpower', 'foreplay', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).rexCarCount = ((st as any).rexCarCount ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex4.jpg');
    scene.text('You gently remove his arm. Rex lets out a little sigh and continued the conversation.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex5.jpg');
    scene.text('During the conversation, Rex \'accidentally\' raises his hand a little higher up your leg.');
    qspCall(st, 'willpower', 'foreplay', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pull your hand away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).rexCarCount = ((st as any).rexCarCount ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex4.jpg');
    scene.text('You gently remove his arm. Rex lets out a little sigh and continued the conversation.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex8.jpg');
    scene.text('Rex\' hand is now very close to your underpants. He is almost touching them. You are getting horny and starting to doubt if this is something you really want to do. You are still a little bit afraid of his oddities but still you put your hand on his, implying that he can continue to move a little further.');
    scene.text('Obviously Rex could not resist and touched your pussy through your panties.');
    qspCall(st, 'arousal', 'foreplay', 10);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/car/carrex9.jpg');
    scene.text('You abruptly stick your hand between your legs, not giving him the opportunity to continue. Rex was already getting very excited and really had to force himself to remove his hand from your legs…');
    scene.text('You talked for a long time, Rex talked a lot about his sister. He misses her. He tells you that in the past she would often send him photos and she came home on the weekend. These things don\'t happen that often now…');
    scene.text('Rex says: ');
    scene.text(`${((st as any).pcs_nickname ?? '')}, it's a pity that you share a room with your sister, we could have talked on the phone at night.`);
    scene.text('"Sorry… Anya would hear us and she needs to sleep since she works in the shop. If I wake her up she goes crazy and I can\'t deal with her when she\'s like that… she does sleep quite deeply though. I could text you goodnight on my phone." You smile.');
    scene.text('Would be cool! said Rex while smiling back at you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRexCarEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
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
  scene.build();
}

function enterRexCarEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('');
  scene.text('You have to go. You had fun, but it is time to go home now.');
  scene.actions([
    { label: 'Home', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterSms(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
  (s as any).rexSmsDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/reks/event/phone/smartsist.jpg');
  if (((s as any).pcs_horny ?? 0) < 50) {
    scene.text('You pick up the phone and text Rex.');
    scene.text('"Good night, babe!"');
    scene.actions([
      { label: 'Put the phone down', goto: ['bedrPar', ''] },
    ]);
  } else {
    if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).smsForRex ?? 0) < 4) {
      scene.text('You pick up the phone to send Rex a text. Suddenly, you come up with a great idea: You take a photo of your legs and send it to Rex.');
      (s as any).smsForRex = ((s as any).smsForRex ?? 0) + (1);
      if (((s as any).smsForRex ?? 0) === 1) {
        qspCall(s, 'exp_gain', 'photoskl', 1);
        scene.actions([
          { label: 'Photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex1.jpg');
    scene.text('You exposed your legs and took a picture.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end1'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).smsForRex ?? 0) === 2) {
          scene.actions([
            { label: 'Photos in stockings ', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex2.jpg');
    scene.text('You decided to try on some of your sisters\'s sexy stockings and took a picture.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end1'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).smsForRex ?? 0) === 3) {
            scene.actions([
              { label: 'Photo with inscription', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex3.jpg');
    scene.text('You decided to write something on your leg to wish him a good night and you take a picture.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end1'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).smsForRex ?? 0) === 4) {
              scene.actions([
                { label: 'Photos in stockings ', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex4.jpg');
    scene.text('You decided to try on some of your sisters\'s sexy stockings and took a picture.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end1'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).smsForRex ?? 0) >= 4  &&  ((s as any).smsForRex ?? 0) < 13) {
        scene.text('You pick up your phone to send Rex another picture. You think you should show him a bit more this time');
        (s as any).smsForRex = ((s as any).smsForRex ?? 0) + (1);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        qspCall(s, 'exp_gain', 'photoskl', 1);
        if (((s as any).smsForRex ?? 0) === 5) {
          scene.actions([
            { label: 'Photo', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex5.jpg');
    scene.text('You took off your clothes and took a picture in front of the mirror in your underwear.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).smsForRex ?? 0) === 6) {
            scene.actions([
              { label: 'Photo_ 2', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex6.jpg');
    scene.text('You took off your clothes and took a picture in front of the mirror in your underwear.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).smsForRex ?? 0) === 7) {
              scene.actions([
                { label: 'Photo_ 3', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex7.jpg');
    scene.text('you took off your clothes and took a picture wearing little panties');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).smsForRex ?? 0) === 8) {
                scene.actions([
                  { label: 'Photo_ 4', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex8.jpg');
    scene.text('You took off your clothes and put on your sister\'s sexy stockings. You adopted a pose in front of the mirror and took a picture.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).smsForRex ?? 0) === 9) {
                  scene.actions([
                    { label: 'Photo_ 5', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex9.jpg');
    scene.text('You took off your clothes and posed in front of the mirror. You lift your top a little so that the underside of your boobs is a little bit exposed.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).smsForRex ?? 0) === 10) {
                    scene.actions([
                      { label: 'Photo_ 6', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex10.jpg');
    scene.text('You took off your clothes and laid down on your bed while wearing some stockings ');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).smsForRex ?? 0) === 11) {
                      scene.actions([
                        { label: 'Photo_ 7', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex11.jpg');
    scene.text('You stood in front of the mirror and took a picture in shorts and a t-shirt.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).smsForRex ?? 0) === 12) {
                        scene.actions([
                          { label: 'Photo_ 8', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex12.jpg');
    scene.text('You stood in front of the mirror in panties. You lifted your shirt up to your chest and took a picture of your belly button.');
    scene.actions([
      { label: 'Send', goto: ['rex_events', 'sms_end2'] },
    ]);
  } },
                        ]);
                      } else {
                        if (((s as any).smsForRex ?? 0) === 13) {
                          scene.actions([
                            { label: 'Photo_ 9', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex13.jpg');
    scene.text('You take off your clothes, only leaving your underwear and stockings. You then take a seductive pose and take the picture.');
    scene.actions([
      { label: 'Send', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex14.jpg');
    scene.text('5 Minutes after you sent your latest foto you receive an MMS from Rex.');
    scene.text('OH MY GOD!!! you suddenly exclaimed. With wide open eyes, you are looking at a pretty picture of a big dick!');
    scene.text('Is he courageous enough to send me a picture of his dick? Looking at Rex\' penis gets you more excited.');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Answer', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex17.jpg');
    scene.text('You lie back in front of the mirror. You lift your legs up in the air and slide your panties to the side. You then take a picture of your exposed pussy and send it to Rex.');
    qspCall(st, 'arousal', 'foreplay', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex18.jpg');
    scene.text('You waited a long time for him to answer. Just when you wanted to put your phone away you received a new SMS. You are stunned by what you see! Rex took a shot of his penis while cumming. The cum was flowing heavily in the picture.');
    qspCall(st, 'arousal', 'foreplay', 10);
    qspCall(st, 'stat', '');
    if (((st as any).pcs_horny ?? 0) >= 100) {
      scene.actions([
        { label: 'Masturbate', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex15.jpg');
    scene.text('You can\'t hold back any longer and you start masturbating while looking at your phone, until you finally explode with an earth-shattering orgasm.');
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Answer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smsrex16.jpg');
    scene.text('You took a new picture of your pussy, still wet with your juices after your orgasm and send it to Rex. A moment later, he replied via SMS with the words "You are super!!!".');
    scene.text('You don\'t want to send a reply and after a short while, once you are convinced that Rex won\'t send any more messages, you place the phone back in its spot.');
    scene.actions([
      { label: 'Put the phone on the spot', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['bedrPar', ''] },
    ]);
  } },
      { label: 'Don\'t answer', handler: (st: GameState) => {
    scene.text('You don\'t want to send a reply and after a short while, once you are convinced that Rex won\'t send any more messages, you place the phone back in its spot.');
    scene.actions([
      { label: 'Put the phone away', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Put the phone away', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['bedrPar', ''] },
      ]);
    }
  } },
    ]);
  } },
      { label: 'Put the phone away', handler: (st: GameState) => {
    qspCall(st, 'arousal', '');
  }, goto: ['bedrPar', ''] },
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
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterSmsEnd1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A57', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/reks/event/phone/smartsist.jpg');
  scene.text('Looking through the contacts on the phone you found Rex\' phone number and you sent a message. You received the report that the message was delivered. A little later, just when you were about to put the phone back and go to sleep, you received an answer.');
  scene.actions([
    { label: 'See', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text('');
    scene.text(`Thank you ${((st as any).pcs_firstname ?? '')}, you have no idea how pleased I am :*.`);
    scene.actions([
      { label: 'Put the phone away', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSmsEnd2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Send', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A57', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/reks/event/phone/smartsist.jpg');
    scene.text('You sent the message with the picture. 5 minutes later you already get a message back.');
    scene.text('Baby you are super:*!!! Want more of those pics!!!');
    scene.actions([
      { label: 'Put the phone away', goto: ['bedrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rexRep':
      enterRexRep(s, scene);
      break;
    case 'rexGdkTalk':
      enterRexGdkTalk(s, scene);
      break;
    case 'skver':
      enterSkver(s, scene);
      break;
    case 'avto':
      enterAvto(s, scene);
      break;
    case 'rex_story':
      enterRexStory(s, scene);
      break;
    case 'avto2':
      enterAvto2(s, scene);
      break;
    case 'rex_car_end':
      enterRexCarEnd(s, scene);
      break;
    case 'sms':
      enterSms(s, scene);
      break;
    case 'sms_end1':
      enterSmsEnd1(s, scene);
      break;
    case 'sms_end2':
      enterSmsEnd2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rex_events: LocationDef = {
  name: 'rex_events',
  title: 'You and Rex get along terribly.',
  region: 'other',
  enter: enter,
};
