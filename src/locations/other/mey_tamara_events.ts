import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).args ?? 0)[0] === 'tamara') {
    scene.text('<center><b>Tamara Meynold</b></center>');
    scene.img('images/characters/shared/headshots_main/big257.jpg');
    scene.text('Tamara Meynold, the twins\' mother, is a tall, big busted woman, quite outspoken just like a man. She\'s a very attractive woman just under "fifty" years old, redheaded just like the daughters.');
    scene.text('If it wasn\'t for the fiery hair color, no one would ever think that Katja and Vicky are her daughters. Tamara works in the city Bank holding a middle management position, even though she often complains about the work, the pay is good so she stays put.');
    if (((s as any).curloc ?? 0) === 'bank') {
      scene.actions([{ label: 'Continue', goto: ['mey_home', 'start'] }]);
      scene.actions([
        { label: 'Go home with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  } },
      ]);
    }
    if (((s as any).curloc ?? 0) === 'mey_home'  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 32  &&  ((s as any).mey_tamara ?? 0)?.['qw_end'] === 0) {
      if (((s as any).week ?? 0) >= 6  ||  ((s as any).kanikuli ?? 0) > 0) {
        scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
        scene.actions([
          { label: 'Ask to go to the city', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  } },
        ]);
      }
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).mey_tamara ?? 0)?.['reputation_qw'] === 0) {
        scene.actions([
          { label: 'To talk about the fall', goto: ['mey_tamara_events', 'reputation'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Depart', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'first_meet') {
    scene.text('<center><b>Tamara Meynold</b></center>');
    scene.img('images/characters/shared/headshots_main/big257.jpg');
    scene.text('You ring the bell for the Meynold residence and the door quickly opens. You can see Vicky and Vanya standing there with their mother.');
    scene.text('The first thing you notice is "Mom\'s" fiery mane. The twins definitely got their red locks from her. Taking in the rest of her, you realize she is a very attractive woman in her 40\'s; busty and tastefully dressed, even at home.');
    scene.text('Their mother eagerly welcomes you inside:');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2) {
      // TODO-QSP: dynamic text: "Hello guys, Vanya! Oh, and hello <<$pcs_nickname>>, nice to see you again."
      scene.text(`"Hello guys, Vanya! Oh, and hello ${((s as any).pcs_nickname ?? 0)}, nice to see you again."`);
      scene.text('"Come in, come in, don\'t be shy! I did not know you were friends with Vicky as well, what a wonderful surprise! I will be in the kitchen having some tea, if anyone would care to join me."');
    } else {
      scene.text('"Hello guys, Vanya! And would you like to introduce your girlfriend, Vicky?"');
      scene.text('You stand there a bit shyly, while Vicky introduces you to her mother.');
      scene.text('Vicky\'s mother smiles warmly before replying: "I\'m Tamara Meynold. Come in, come in, don\'t be shy! Vicky does not invite her friends over very often, so it is very nice to meet you! I will be in the kitchen having some tea if you would like to join me."');
    }
    scene.text('Vicky looks at you and nods, "I need to tidy my room a bit before we get to our \'homework\' anyways, it shouldn\'t take long." She leaves you with Tamara and grabs Vanya\'s hand before heading down the hall and disappears into a side room.');
    scene.text('Tamara smiles at you and leads you into the kitchen.');
    scene.actions([
      { label: 'In the kitchen (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 25;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Tamara Meynold</b></center>');
    scene.img('images/locations/pavlovsk/resident/meynolds/tamara_first_meet_tea.jpg');
    scene.text('You enter the kitchen as Tamara busies herself with collecting a couple cups and pours some tea in each one, "Do you like sugar or cream with your tea?", she asks.');
    scene.text('"No cream, but I\'ll take a little sugar, thanks." You reply as you sit down on a stool at the breakfast bar separating the kitchen from the lounge. You watch her as she meticulously sets up the cups on saucers with a couple biscuits and adds a slice of lemon to the lip of each cup. She then brings them all over and slides one towards you.');
    scene.text('You busy yourself with your tea; adding sugar from the bowl Tamara set between you and squeezing a bit of lemon in to finish it.');
    scene.text('Tamara settles in across the bar from you and silently fixes her own, before smiling at you over her cup of tea and blowing a few breaths over it to cool it down. "So you go to school with my darling carrots? Do you share any classes with them?"');
    scene.text('You take a sip of your tea and nod, "Yeah, a couple classes, but I see them around all the time, Kind of hard not two see the twins." you smile.');
    scene.text('"Yes, I imagine those two turn more than a few heads, But what about your own classes? Are you doing well?"');
    if (((s as any).class ?? 0)?.['school_grade_average'] < 60) {
      scene.text('You giggle and shake your head, "Not very good at all I\'m afraid; failing most my classes. I\'m not even sure it\'s worth showing up this point. But nobody in my family has gone to college, and they\'re all doing alright."');
      scene.text('Tamara purses her lips and shakes her head in that disapproving manner all mothers seem to share. "Classes are important, even if nobody in your family has gone to college, just think of how proud your parents would be if you do better than they did. My son, Roma had such an opportunity, but ultimately chose not to go to college. That choice might have caused him to leave the house, after I… well let us just say, I may have had more than a few words with him about it."');
      scene.text('"Right now he is working small jobs, getting paid minimum wage and, last I heard, was dating some trollop who works at a local grocery store barely making ends meet; and, as far as I can tell, has no plans for his future."');
      if (((s as any).npc_QW ?? 0)?.['A33'] >= 2) {
        scene.text('You try very hard not to giggle, when she mentions Anya. You briefly wonder how Tamara would feel if she knew she was talking to that \'trollop\'s\' little sister.');
      }
      scene.text('You nod thoughtfully towards Tamara and take a final sip from your tea before pushing it forward. "I\'ll think about it, Ms. Meynold." is all you can think of to say.');
    } else {
      if (((s as any).class ?? 0)?.['school_grade_average'] < 80) {
        scene.text('You shake your head and lower it slightly, "I\'m passing my classes, but only just barely. I still have a ways to go if I hope to go to college."');
        scene.text('"It is good that you are at least passing, but yes, you will have to do better if you want to get into college. Vicky had some issues keeping her grades up as well, but lately she has been catching up.');
        scene.text('She recently decided she wanted to get into a medical career. And even though she has not yet decided on any particular field of study, it was enough to motivate her to work harder at school. Maybe if you think hard on what your own goals are, that could help motivate you as well." Tamara beams you a motherly smile as she talks.');
        // TODO-QSP: dynamic text: Your own <<$npc_nickname['A29']>> could take some parenting lessons from this la...
        scene.text(`Your own ${((s as any).npc_nickname ?? 0)?.['A29']} could take some parenting lessons from this lady. All she ever did was yell and complain about how Anya isn't doing anything worthwhile; holding her up as a poster child of failure, in an attempt to 'scare' you into doing better.`);
        scene.text('"Thanks Ms. Meynold, that\'s very good advice." you reply, while nodding thoughtfully…');
        scene.text('What are your goals? Who are you? Who do you want to be? … You can\'t help but think it over as you finish the last bit of your tea.');
      } else {
        scene.text('You straighten up and smile, "Oh, I\'m doing pretty well! I\'m top of my class in a few subjects, and I\'m already getting acceptance letters to several colleges. I\'m probably just going to go to our local University though."');
        scene.text('"That sounds wonderful! I am glad you\'re doing so well. Katja is also doing extremely well in her studies, and I am so proud of her! I think she wants to be a teacher, which doesn\'t pay very well… but her passion for it is easy to see, so I am supporting her decision as best as I can!');
        scene.text('However, just because you are doing well now, you still need to follow through to the end, so don\'t start slacking off now!" Tamara says as you finish your cup of tea.');
        scene.text('"I\'m trying my best Ms. Meynold! I\'m not about to let anything stand in the way of my future!" You say with conviction.');
      }
    }
    // TODO-QSP: dynamic text: Tamara smiles and shakes her head, "You don't need to be so formal, <<$pcs_nickn...
    scene.text(`Tamara smiles and shakes her head, "You don't need to be so formal, ${((s as any).pcs_nickname ?? 0)}. We're not at work here, so you can just call me Tamara."`);
    scene.text('As if on cue, Vicky walks back into the kitchen, "Room is all tidied, if you two are done talking."');
    // TODO-QSP: dynamic text: "Vicky, your girlfriend is wonderful! You should invite <<$pcs_nickname>> over m...
    scene.text(`"Vicky, your girlfriend is wonderful! You should invite ${((s as any).pcs_nickname ?? 0)} over more often!"`);
    scene.text('"But Mom, you always talk so much, it scares all my friends off."');
    scene.text('Tamara pretend sighs and says: "So that is what I get for all that time I spent raising you?! Fine, do not worry about your lonely mother; just go play with your friend!"');
    scene.actions([
      { label: 'Go with Vicky', handler: (st: GameState) => {
    qspCall(st, 'mey_vika_events', 'first_visit');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'next_meet') {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_tamara_events" });
    ((s as any).mey_vika ?? {})['qw_day'] = ((s as any).daystart ?? 0);
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 30;
    qspCall(s, 'stat', '');
    if (((s as any).zz_stage ?? 0) < 1) {
      scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea0.jpg');
      scene.text('You ring on the bell to the Meynold residence.');
      scene.text('The door opens and you can see Katja and Vicky standing there with their mother.');
      scene.actions([
        { label: 'Ring the doorbell', goto: ['mey_tamara_events', 'next_meet', '1'] },
      ]);
    } else {
      if (((s as any).zz_stage ?? 0) < 8) {
        scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea\' + zz_stage + \'.jpg');
        if (((s as any).zz_stage ?? 0) === 1) {
          // TODO-QSP: dynamic text: "Oh hi, <<$pcs_nickname>>! I'm so glad to see you! Come in, come in, make yourse...
          scene.text(`"Oh hi, ${((s as any).pcs_nickname ?? 0)}! I'm so glad to see you! Come in, come in, make yourself at home! I'll put on a kettle right away!"`);
          scene.text('"My little carrots are somewhere in the house, while I\'m here all alone…"');
          scene.text('You shyly walk past her, passing through a spacious hall from which a staircase leads to the second floor to the kitchen. The kitchen is large, bright and spacious, tastefully furnished. From the kitchen there is access to the veranda. You sit down at the oval dining table and Tamara, wearing an apron, quickly moves over to the fridge, pulling out all sorts of jars with jam, fruit and cheese and placing them on the table.');
        } else {
          if (((s as any).zz_stage ?? 0) === 2) {
            scene.text('There\'s a large vintage nickel plated kettle on the stove boiling, it doesn\'t really fit in with the rest of the kitchen setting, but you think as long as it does what it\'s supposed to than being visually appealing. The kitchen has a lots of flowers in pots, there\'s pots hanging along the walls and pots standing on the floor. The atmosphere is cozy, peaceful and relaxed.');
          } else {
            if (((s as any).zz_stage ?? 0) === 3) {
              scene.text('Aunt Tamara asks you about school, friends, family, and your interests.');
              scene.text('Finally the tea is ready and you\'re sitting at a table, happily sipping a lemon fragrant tea, and talk about yourself. You start by telling Aunt Tamara about how your father abandoned your mother a long time ago and now you all live with your stepfather. You keep on telling how the stepfather is good to you and your sister. Next you tell her about your sister that was not able to attend the University and now works at the checkout in the supermarket instead…');
              scene.text('Tamara listens with interest, pouring tea and offering you a plate filled with croissants and toast, while on the other plate there\'s thinly sliced cheese and ham.');
            } else {
              if (((s as any).zz_stage ?? 0) === 4) {
                scene.text('Your shyness is disappearing more and more and the two of you start excitedly chatting just like old friends, sharing stories.');
                scene.text('You don\'t even notice the age difference because Aunt Tamara talks ceaselessly to you, telling you about herself. She is the daughter of a naval officer, and the family had to move around all over the country because the father served in the Baltic, Kamchatka and in the Northern Fleet.');
                scene.text('Mentioning the North her eyes tighten a bit in a dreamy haze, happily talking about the harsh beauty of those places.');
                scene.text('Tamara tells you that she enjoyed living in the North the most, and she still feels like her soul was left there…');
              } else {
                if (((s as any).zz_stage ?? 0) === 5) {
                  scene.text('You can see both Katja\'s and Vicky\'s small quirks in Aunt Tamara. She has preserved the beauty of Katja, sophisticated but not as youthfully naïve as Katja. She is calmer and more sensible than Vicky, even being more sociable and open than the cautious Katja.');
                  scene.text('Tamara gets a bottle of wine from the wine cooler and one glass:');
                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you won't mind if Aunt Tamara has a glass of wine while we h...
                  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you won't mind if Aunt Tamara has a glass of wine while we have this wonderful conversation?"`);
                  scene.text('"I have been living a reclusive life instead of just running wild. So that\'s made me very distrusting. At work, I\'m not dear Tamara, but the big bad "boss", or the strict "businesswoman", I know that the "friendly female staff" are bad mouthing me, they probably think I slept my way up to the top."');
                } else {
                  if (((s as any).zz_stage ?? 0) === 6) {
                    scene.text('You are laughing at the figurative comparison, Tamara is also smiling.');
                    scene.text('"I had a lot of friends here in Pavlovsk in my thirties, but as soon as I learned that I was pregnant the relationships started deteriorating. So I had a hard time talking to someone else but my ex-husband about becoming a mother."');
                    scene.text('"Nine months later I gave birth to them. Katja came out first. It is hard for me to bear. " says Aunt Tamara tearing up a little. "Katja had us scared for a minute or so because she didn\'t make any sounds immediately, it took two slaps from the doctor for her to start screaming."');
                    scene.text('"Vicky flew out soon after like a cork from a bottle! You know, just like you see on comedy shows on tv."');
                  } else {
                    if (((s as any).zz_stage ?? 0) === 7) {
                      scene.text('Tamara glances at the wall clock.');
                      scene.text('"Oh, look at the clock, time really flies by when you\'re enjoying yourself! "');
                      scene.text('"Look how dark it is outside!"');
                      scene.text('"You know what, you can stay the night. I don\'t want you to running around this late! "');
                      scene.text('You start making excuses, but Aunt Tamara\'s not listening:');
                      scene.text('"You never know who you might meet this late. And my little carrots will be glad. Let\'s call your parents and say you\'ll be staying here tonight!"');
                      scene.text('You insist saying you do not want to impose…');
                      scene.text('"Impose? Don\'t be silly. In this large house?!" says Aunt Tamara.');
                      scene.text('"No one will be bothered. We have a guest bedroom, it\'s always empty. And the rest of us have our own private rooms here." You longingly remember about your room, which you shared with your sister all your life… "So let\'s call your parents and let them know you\'re staying, so they don\'t worry."');
                    }
                  }
                }
              }
            }
          }
        }
        scene.actions([
          { label: 'Drink tea with Tamara', handler: (st: GameState) => {
    // TODO-QSP: gt 'mey_tamara_events', 'next_meet', zz_stage + 1
  } },
        ]);
      } else {
        (s as any).pcs_energy = 20;
        (s as any).pcs_hydra = 40;
        qspCall(s, 'mood', 'raise', 'small');
        (s as any).minut = ((s as any).minut ?? 0) + (Math.max(0, 60 * (22 - ((s as any).hour ?? 0)) - ((s as any).minut ?? 0)) + (Math.floor(Math.random() * 60) + 0));
        qspCall(s, 'stat', '');
        scene.text('"I\'m sorry, Aunt Tamara, I must go home or else I\'ll get some stern scolding…"');
        // TODO-QSP: dynamic text: "Well, I can't say I'm not disappointed <<$pcs_nickname>>. Don't stop anywhere o...
        scene.text(`"Well, I can't say I'm not disappointed ${((s as any).pcs_nickname ?? 0)}. Don't stop anywhere on your way home." said a disappointed Aunt Tamara.`);
        scene.text('"Remember this, if you change your mind and want to hang out, come visit us anytime again! You\'re always welcome here!"');
        scene.actions([
          { label: 'Go home', goto: ['pav_residential', ''] },
          { label: 'Stay the night', goto: ['mey_home', 'start'] },
        ]);
      }
    }
  }
  if (((s as any).args ?? 0)[0] === 'learning0') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning10.jpg');
    scene.text('Nervously, you ring the doorbell to the Meynold residence. Short there after you hear the lock click open and the twins\' mother stands in front of you.');
    scene.text('"Hello Tamara! I\'ve come here to study." You still don\'t dare to call her Aunt Tamara.');
    scene.text('"So you\'ve finally decided to go through with it. Come in." says Tamara.');
    scene.text('The two of you make your way to the kitchen, Tamara puts on the familiar nickel plated kettle, and she begins taking out the jars of jam of the closet.');
    scene.text('While doing her kitchen chores, Tamara is silent and not looking at you. You have a troubling feeling in the stomach, but you do not dare to start a conversation, you\'re still too shy to talk with her.');
    scene.actions([
      { label: 'Join her for tea', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning11.jpg');
    scene.text('You drink tea and talk casually with each other. You\'re sitting on needles filled with anticipation waiting for Tamara to speak up.');
    scene.text('Having finished the tea, Tamara casually says:');
    // TODO-QSP: dynamic text: "Stand up, <<$pcs_nickname>>. I want to take a look at you."
    scene.text(`"Stand up, ${((s as any).pcs_nickname ?? 0)}. I want to take a look at you."`);
    scene.text('You stand up. She carefully examines you like a bug under a microscope.');
    scene.text('"Turn around, darling."');
    scene.text('You turn, letting her to check you out from all sides.');
    // TODO-QSP: dynamic text: "Not bad, <<$pcs_nickname>>. I can work with this." said Tamara nodding. "But ri...
    scene.text(`"Not bad, ${((s as any).pcs_nickname ?? 0)}. I can work with this." said Tamara nodding. "But right now you're just raw clay, which can be formed as a sculptural masterpiece or a simple brick. And who knows it may turn out to be just a dried up worthless piece of clay. Everything depends on you."`);
    scene.text('She continues looking at you somewhat skeptical. It feels like she\'s in a store checking the quality of the item. Under her careful scrutiny, you begin to shrink, like a violet.');
    scene.text('"Walk around a little."');
    scene.text('You take a few steps in the kitchen. Tamara snorts:');
    scene.text('"No no, my dear, this will not do!"');
    scene.text('"What\'s wrong with my walk?" you ask a bit surprised.');
    scene.text('"Well my dear, to put it lightly, you walk like you just crapped your pants and you\'re afraid it will smudge." hearing this "compliment" you feel ashamed… "But don\'t worry, I\'ll teach you how to walk like a goddess."');
    scene.text('"Do you know how to dance?"');
    scene.text('"I love dancing…" you answer.');
    scene.text('"Show me."');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning10.jpg');
    if (((s as any).pcs_danc ?? 0) < 50) {
      scene.text('Tamara, clearly annoyed, answers: "Your dancing skills are exactly what I expected them to be. You dance like a skank from a rural disco."');
    } else {
      if (((s as any).pcs_dancero ?? 0) < 50) {
        scene.text('"You did okay…" nods Tamara. "But you still need to improve."');
      } else {
        // TODO-QSP: dynamic text: "Very nice, <<$pcs_nickname>>!" nods Tamara approvingly. "One less thing you nee...
        scene.text(`"Very nice, ${((s as any).pcs_nickname ?? 0)}!" nods Tamara approvingly. "One less thing you need to learn."`);
      }
    }
    scene.actions([
      { label: 'Hmm…', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning10.jpg');
    scene.text('Tamara stands up from the table, putting down her cup, which she had only taken a sip of:');
    scene.text('"Let\'s take a trip to the city, my dear, so we can get started. Consider this the beginning of your studies."');
    if (((s as any).pcs_apprnc ?? 0) < 80) {
      scene.text('"We can\'t have you looking like this… We have a lot of work in front of us."');
    } else {
      if (((s as any).pcs_apprnc ?? 0) < 120) {
        scene.text('"You\'re really cute. But only thing cuteness does is that it makes it possible to marry a regular guy. We\'re going to take it to the next level."');
      } else {
        if (((s as any).pcs_apprnc ?? 0) < 160) {
          scene.text('"You\'re quite good looking, and with such an appearance there will be many suitors asking for your hand in marriage. You might even marry some average sugar daddy, being used by them for some years, until he finds someone prettier."');
        } else {
          scene.text('"You\'re really beautiful. But even a diamond needs cutting and polishing to remove all the rough shapes. A little touch up never hurt anyone."');
        }
      }
    }
    scene.actions([
      { label: 'Go the city', goto: ['mey_tamara_events', 'learning1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'learning1') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.text('You hop into the car and the two of you drive to the city center. Tamara leads you to the shopping mall.');
    scene.actions([
      { label: 'Go shopping', handler: (st: GameState) => {
    scene.text('Under the watchful eye of your mentor, she says you can buy two outfits, one from Pussy-Cats and the other one from the expensive boutique.');
    (s as any).newdress_count = 0;
    (s as any).newdress_loop = 0;
    scene.text('<center><table><tr><td>');
    // TODO-QSP: :markbuyclotamaraaverage
    (s as any).newdress_id = Math.floor(Math.random() * 110) + 1;
    if (qspFunc(s, 'clothing', 'is_owned', 'cats_dress', ((s as any).newdress_id ?? 0)) === 0) {
      qspCall(s, 'clothing', 'add_item', 'cats_dress', ((s as any).newdress_id ?? 0));
      // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/cats/dress/<<newdress_id>>.jpg"></center>'
    } else {
      (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
      if (((s as any).newdress_loop ?? 0) > 1000) {
      } else {
        // TODO-QSP: jump 'markbuyclotamaraaverage'
      }
    }
    scene.text('</td><td>');
    // TODO-QSP: :markbuyclotamaraformal
    (s as any).newdress_id = Math.floor(Math.random() * 80) + 1;
    if (qspFunc(s, 'clothing', 'is_owned', 'moncheri_dress', ((s as any).newdress_id ?? 0)) === 0) {
      qspCall(s, 'clothing', 'add_item', 'moncheri_dress', ((s as any).newdress_id ?? 0));
      // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/moncheri/dress/<<newdress_id>>.jpg"></center>'
    } else {
      (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
      if (((s as any).newdress_loop ?? 0) > 1000) {
      } else {
        // TODO-QSP: jump 'markbuyclotamaraformal'
      }
    }
    // TODO-QSP: *P '</td></tr></table></center>'
    scene.actions([
      { label: 'Buy the clothes', handler: (st: GameState) => {
    scene.text('"This will do, it\'s the first time after all." she says, approaching the counter, pulling out her purse.');
    scene.text('"But it\'s so expensive! I can\'t…" you are taken aback by such generosity.');
    scene.text('"My dear! Don\'t see it as a gift but as an investment in a long-term project."<br>');
    scene.actions([
      { label: 'Enter the beauty salon', handler: (st: GameState) => {
    scene.text('Looks like Tamara is well-known in both of the shops. As soon as she entered, the most experienced salesperson dropped everything, walked over to you and started picking out clothes.<br>');
    (s as any).pcs_tan = 10;
    if (((s as any).pcs_lashes ?? 0) < 2) {
      (s as any).pcs_lashes = 2;
    }
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (40);
    if ((!((s as any).shorthair ?? 0))) {
      (s as any).curly = 7;
    }
    (s as any).pcs_pubes = 0;
    (s as any).pcs_lipbalm = 1;
    (s as any).pcs_makeup = 3;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.max(0, 60 * (19-((s as any).hour ?? 0)) - ((s as any).minut ?? 0)) + 40);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go further', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what do you wear to school?" she asks you as you're walking ...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, what do you wear to school?" she asks you as you're walking out from the beauty salon.`);
    scene.text('"Well, we have to wear a compulsory school uniform."<br>');
    (s as any).newdress_loop = 0;
    // TODO-QSP: :looptamaraschool
    (s as any).newdress_id = Math.floor(Math.random() * 60) + 1;
    (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
    if (((s as any).newdress_loop ?? 0) > 1000) {
    } else {
      if (((s as any).newdress_id ?? 0) === 6) {
        // TODO-QSP: jump 'looptamaraschool'
      }
      if (qspFunc(s, 'clothing', 'is_owned', 'gm_school', ((s as any).newdress_id ?? 0)) === 0) {
        qspCall(s, 'clothing_attributes', 'gm_school', ((s as any).newdress_id ?? 0));
        if (((s as any).CloInhibit ?? 0) < 30) {
          // TODO-QSP: jump 'looptamaraschool'
        }
        qspCall(s, 'clothing', 'add_item', 'gm_school', ((s as any).newdress_id ?? 0));
        // TODO-QSP: *P '<center><img height = 400 src="images/pc/items/gm/school/<<newdress_id>>.jpg"></center>'
      }
    }
    if (((s as any).newdress_id ?? 0) === 0  &&  ((s as any).newdress_loop ?? 0) <= 60) {
      // TODO-QSP: jump 'looptamaraschool'
    }
    if (((s as any).newdress_id ?? 0) > 0) {
      scene.text('"I picked a real sexy outfit, it\'s so sexy that the boys will spontaneously be cumming in their pants." you said smiling.');
      // TODO-QSP: dynamic text: "Good! Now remember it's only to be used in school. Now lets start training you ...
      scene.text(`"Good! Now remember it's only to be used in school. Now lets start training you how to walk elegantly. You can start by getting out of my car and take a walk around the city for a couple hours" Tamara hands you ${qspFunc(s, 'money', 'string_profit', 2000)}. "It's important that you take care of your health so take the money and head over to the clinic and get a health exam, within the next couple weeks. I'll be waiting for you by the Babel restaurant at '+func('time', 'get_time_string', 21, 0)+', don't be late."`);
      ((s as any).mey_vika ?? {})['mey_vika_qw'] = 36;
      qspCall(s, 'money', 'earn', 2000);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Stay in the city', goto: ['city_center', ''] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: Tamara reaches into her purse and hands you <<$func('money', 'string_profit', 20...
      scene.text(`Tamara reaches into her purse and hands you ${qspFunc(s, 'money', 'string_profit', 2000)}.`);
      scene.text('"You need to buy yourself a decent looking school uniform. And it\'s only intended to be worn in school. I don\'t want to see you wearying it somewhere else."');
      scene.text('"Where should I buy it?" you ask her.');
      scene.text('Tamara nods towards a sign. Looking up you see the luminous sign showing "Sex Shop".');
      scene.text('"I\'ll wait for you in the car."');
      scene.text('You quickly hide the money in your pocket and overcoming the shame, you walk into the sex shop. 20 minutes later you return with a brand new school uniform.<br>');
      (s as any).newdress_loop = 0;
      // TODO-QSP: :markbuyclotamaraschool
      (s as any).newdress_id = Math.floor(Math.random() * 36) + 1;
      if (qspFunc(s, 'clothing', 'is_owned', 'gm_school', ((s as any).newdress_id ?? 0)) === 0) {
        qspCall(s, 'clothing', 'add_item', 'gm_school', ((s as any).newdress_id ?? 0));
        scene.img(`images/pc/items/gm/school/${((s as any).newdress_id ?? 0)}.jpg`);
      } else {
        (s as any).newdress_loop = ((s as any).newdress_loop ?? 0) + (1);
        if (((s as any).newdress_loop ?? 0) > 1000) {
        } else {
          // TODO-QSP: jump 'markbuyclotamaraschool'
        }
      }
      scene.actions([
        { label: 'Return to the Meynolds residence', handler: (st: GameState) => {
    // TODO-QSP: mey_vika['mey_vika_qw'] = 40
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['mey_home', 'start'] },
        { label: 'Stay in the city', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No, dear. I need you to stay near here if you want I can drive you home to me o...
    scene.text('"No, dear. I need you to stay near here if you want I can drive you home to me or if you want to walk around the city. Either way you will need to kill a couple of hours. I\'m feeling hungry so I\'ll go and get something to eat." She says. "Whatever you decide, I expect you to be by the restaurant by \'+func(\'time\', \'get_time_string\', 21, 0)+\', I\'ll be waiting for you there."<br>');
    scene.actions([
      { label: 'I insist staying here in the city', handler: (st: GameState) => {
    // TODO-QSP: mey_vika['mey_vika_qw'] = 36
  }, goto: ['city_center', ''] },
      { label: 'Return to the Meynolds residence', handler: (st: GameState) => {
    // TODO-QSP: mey_vika['mey_vika_qw'] = 40
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['mey_home', 'start'] },
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
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'wait_qw') {
    scene.img('images/locations/city/citycenter/expensiverest/restoran.jpg');
    scene.text('Near the entrance, glancing at the clock, Tamara waits for you.');
    scene.actions([
      { label: 'Return to the Meynolds residence', handler: (st: GameState) => {
    // TODO-QSP: mey_vika['mey_vika_qw'] = 40
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['mey_home', 'start'] },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'rebuke') {
    scene.img('images/locations/pavlovsk/resident/meynolds/tamara_tea0.jpg');
    scene.text('You stand outside the Meynold residence. You can hear footsteps behind the door, but when you ring the bell, no one opens.');
    scene.actions([
      { label: 'Ring the doorbell', handler: (st: GameState) => {
    scene.text('You ring the bell again… Once again you hear the sound of heels, but the door stays shut. You\'re starting to get anxious.');
    scene.actions([
      { label: 'Ring the doorbell again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/learning10.jpg');
    scene.text('After some anxious waiting, the door opens. Tamara looks at you without her usual warm smile. She just stands there silently. After a few moments she slowly glides out of the doorway, reluctantly letting you enter. She seems upset.');
    scene.text('Her cold gaze is upsetting your belly and you feel the anxiety increase.');
    scene.text('You finally gather some courage and say "P-please forgive m-me, Tamara!" in a child\'s thin voice when it knows it did something bad. "I promise I\'ll never make the same mistake again! It will never happen again! Please believe me!"');
    scene.text('Tamara silently answered with a nod indicating for you to continue on inside.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/rebuke3.jpg');
    scene.text('You stand in front of her in the living room, disheartened, while she sits on the couch, legs crossed, silently staring at you.');
    scene.text('You feel a burning sensation in your ears and cheeks. All of a sudden the feeling that you need to visit the bathroom comes over you. You can barely hold it in.');
    scene.actions([
      { label: 'Have a conversation', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/rebuke4.jpg');
    scene.text('Finally Tamara ends the long drawn out silence by saying:');
    scene.text('"Listen to me very carefully, girl. What we set out to do is a very serious and difficult task. Also, very expensive might I add. I invested my hard earned money in you. A lot of money, not to mention the effort and time and expect you to be able to justify these efforts. I don\'t ask for much. But I demand complete obedience and for you to follow my instructions to the letter if you want to succeed in life. I\'m hoping you don\'t think I do this all out of pure unselfishness? You\'re not Aladdin and I\'m not a genie here to fulfill any of your whishes. I have a lot to teach you, which will help you in many ways, giving you much more than you can accomplish alone."');
    scene.text('"But don\'t be fooled, don\'t take my kindness for weakness. Otherwise we will stop this right away. I\'ll be frank with you, maybe you\'re pleased having a bland life, marrying someone ugly, working a dead end job at the local sewing factory, repeating the same thing day after day to the point of exhaustion. Do you want to end up like that?"');
    scene.text('"No, I don\'t!" You furiously shake your head, almost ripping it off. "I understand! Please, believe me! It will never happen again!"');
    scene.text('"I really hope this is the only time we need to have this conversation. Because there won\'t be a second time, my dear." Says Tamara, clicking her nails on the armrest.');
    scene.text('"Now come on, let\'s have some tea. I\'ve baked some wonderful cookies! She suddenly smiles warmly again.');
    scene.actions([
      { label: 'Drink tea with Tamara', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/rebuke5.jpg');
    scene.text('You drink tea in the kitchen and taste the most delicious cookies you\'ve ever tasted. Aunt Tamara laughs and tells all sorts of stories and the anxiety that was in your belly disappears.');
    scene.text('She\'s not the Snow Queen Tamara Meynold anymore, that frightened you as just as she takes pleasure doing the same thing to her subordinates at the Bank. Instead she\'s the fun-loving and kind Aunt Tamara again.');
    scene.text('All of a sudden Tamara puts down her cup…');
    scene.actions([
      { label: 'Listen', handler: (st: GameState) => {
    if (((s as any).class ?? 0)?.['school_grade_average'] < 80) {
      scene.text('"Listen to me very carefully. From now on, no more adventures. You will follow all my orders, no exemptions. To the letter. You\'re not even allowed to fart without my permission, understand! Don\'t worry you\'ll have lots of excitement."');
      scene.text('"Whether you like it or not, your school performance must improve. You will make a plan that you\'ll show me on how you\'ll improve. Don\'t think this is a fairy tale. You will be putting blood, sweat and tears until your grades have gone up and I\'m satisfied! You can forget about drinking and partying until your grades are good enough."');
      scene.text('You sadly nod your head, saying goodbye to the easy life…');
    } else {
      scene.text('"Listen to me very carefully, my dear. You have a good thing going on here, and I\'m happy about the progress you\'ve made. But, from now on, no more adventures. You will follow all my orders. Without any questions. You\'re not even allowed to fart without my permission, understand! Don\'t worry I have lots of exciting things planned for you."');
      scene.text('"And don\'t be afraid, I\'m not threatening you. But if you want to succeed in life you must follow the tasks I give and execute them to the letter. Without that, you\'re just a diamond in the rough."<br>');
      scene.text('"Based on your action, there seems to be a little nympho inside of you that loves sex, and with your talent and shamelessness you could easily become a career porn actress. You\'ll probably become a big star, being sought after many men but in reality, you\'ll just be lonely because all the men will think you\'re only good for one thing. But who am I to judge, you can become whatever you want, I will not interfere, if your mind is made up. But whatever you decide to become you got to put in hard work in it. You have to focus on one thing only, not straying away from the path you\'ve laid for yourself…"');
      scene.text('"Don\'t be stupid throwing away all that you\'ve learned. You can be sure I will never forgive you. Knowledge never hurt anyone, it will help you a lot in life…');
    }
    scene.actions([
      { label: 'Listen carefully', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 40;
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/rebuke10.jpg');
    scene.text('As you\'re about to leave she stops you in the doorway…');
    scene.text('"I hope you were paying attention to what I said today," and in a second the image of a smiling middle-aged housewife turns into the ice queen. "I can barely wait until our next lesson! Tamara adds warmly as she says goodbye.');
    scene.text('"Oh yeah, I forgot one thing. I called your mother and told her that the girls and I are enjoying your company so we agreed that you would be staying with us for the next two weeks. I want to keep you on a tight leash."');
    scene.actions([
      { label: 'Move away', goto: ['mey_home', 'start'] },
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
      { label: 'Go home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
  }, goto: ['pav_residential', ''] },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'party0') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party0.jpg');
    scene.text('"My dear, my company is having an office party tonight, would you like to accompany me? I would like to introduce you to some people. If you do decide to tag along, you need to make yourself presentable. As soon as we enter I want the whole room to look at you in awe."');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 50;
    scene.text('"I\'m sorry Aunt Tamara, I don\'t feel well today, I won\'t be able to accompany you…"');
    scene.text('"No worries, maybe next time."');
    scene.actions([
      { label: 'Move away', goto: ['mey_home', 'start'] },
    ]);
  } },
      { label: 'Agree', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 41;
    scene.text('"I would love to accompany you to the party, Aunt Tamara! I\'ll go and get ready right away."');
    scene.text('Tamara looks mischievously at you, but strictly instructs you to…');
    // TODO-QSP: dynamic text: "Wear your formal dress and put on normal makeup," she smiles. "Don't overdo the...
    scene.text('"Wear your formal dress and put on normal makeup," she smiles. "Don\'t overdo the makeup. You should look normal. Not too little, but don\'t put on a ton of makeup either. You\'re not a soldier, putting on war paint before battle! Be ready by \'+$func(\'time\', \'get_time_string\', 18, 0)+\'. I can\'t be bothered waiting for you. I\'ll leave without you if you\'re not on time and there might be some consequences…"');
    scene.actions([
      { label: 'Move away', goto: ['mey_home', 'start'] },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'check_look') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party0.jpg');
    if ((((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress')  &&  (((s as any).pcs_makeup ?? 0) === 3  ||  ((s as any).pcs_makeup ?? 0) === 2)  &&  ((s as any).pcs_sweat ?? 0) <= 20  &&  ((s as any).pcs_apprnc ?? 0) >= 60) {
      if (((s as any).shorthair ?? 0) === 0  &&  (!((s as any).pcs_hairbsh ?? 0))) {
        scene.img('images/characters/pavlovsk/school/girl/vicky/event/party0.jpg');
        scene.text('Tamara examines you and shakes her head in dissaproval. You\'re not ready for your great "debut"… Disappointed, you head back…');
        scene.actions([
          { label: 'Depart', goto: ['mey_home', 'start'] },
        ]);
      } else {
        scene.img('images/characters/pavlovsk/school/girl/vicky/event/party0.jpg');
        scene.text('"I\'m ready!"');
        scene.text('Tamara starts examining you.');
        scene.text('"You\'re looking great. Let\'s go!');
        scene.actions([
          { label: 'Go to the office party', goto: ['mey_tamara_events', 'party1'] },
        ]);
      }
    } else {
      scene.img('images/characters/pavlovsk/school/girl/vicky/event/party0.jpg');
      scene.text('Tamara examines you and shakes her head in dissaproval. You\'re not ready for your great "debut"… Disappointed, you head back…');
      scene.actions([
        { label: 'Depart', goto: ['mey_home', 'start'] },
      ]);
    }
  }
  if (((s as any).args ?? 0)[0] === 'party1') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.img('images/locations/city/citycenter/expensiverest/restoran.jpg');
    scene.text('Tamara stops the car in front of the restaurant.');
    // TODO-QSP: dynamic text: "Listen closely now, <<$pcs_nickname>>. It's a very formal party with some big s...
    scene.text(`"Listen closely now, ${((s as any).pcs_nickname ?? 0)}. It's a very formal party with some big shots from the city so try not to embarrass me. You should act like Cinderella at the ball, be charming and entrance them with your beauty. Don't get drunk and begin dancing naked on the table or accompany different men to the toilet, you're not a prostitute. I really hope you follow my advice. Unlike the time I let Vicky tag along…`);
    scene.text('You wisely decide not to ask Aunt Tamara what happened that time she brought Vicky with her, you\'ll ask her at the party instead.');
    scene.actions([
      { label: 'Go inside the restaurant', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party6.jpg');
    scene.text('The doorman opens the door for you. The restaurant\'s hall filled with people. The men in expensive suits and all the women in evening gowns. You hear classical music playing. The waiters, carrying drinks, are moving effortlessly among the guests. Tamara takes a glass of champagne from a tray while a waiter passes by.');
    scene.text('"Don\'t be shy, my dear. Start mingling. I\'ll call you over when I need you. Remember don\'t drink too much. And be charming!" She says while she theatrically raises her glass, smiling, and quickly moving towards someone she recognizes.');
    scene.actions([
      { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party7.jpg');
    scene.text('You look around the hall. There\'s a live string quartet playing in one of the corners. This is not some regular diner with a cheap tape recorder and karaoke. In another corner there\'s a set of tables with all sorts of appetizers. The waiters are tirelessly running around the room with their trays…');
    scene.text('You grab a glass from a waiters tray while he\'s passing by, with the same grace and elegance like your mentor. Around the room you see groups of people with glasses in their hands, mingling with each other. There\'s a lot of people, but no one catches your attention.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party8.jpg');
    scene.text('You walk down the hall with your glass, observing the people around you. You notice that you\'re the only youth there. Mainly, the guests are respectable middle-aged men and women. Most of the women are pretending to be younger than they really are. You would think that these "middle-aged" women should be classy, but they\'re all dressed tackily, showing more skin than you would expect them to. You also notice the expensive jewelry being worn by the women. There\'s enough jewelry to fill three stores!');
    scene.actions([
      { label: 'Look around', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party9.jpg');
    scene.text('In the Banquet hall you hear a light humming. The guests have split into smaller groups, speaking about something inaudibly. Tamara has left you to fend for yourself, once again spotting someone she recognizes. You, not knowing anyone else but her, feel scared approaching someone, striking up a conversation with these refined guests.');
    scene.text('Playing with your glass, you decide for yourself "Tamara said to get noticed. It\'s time to let them know who I am…" You take a big sip from the glass, and slowly start wandering around the room, trying to find someone to approach.');
    scene.actions([
      { label: 'Enter the banquet hall', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party10.jpg');
    scene.text('Some men look in your direction. But most of them are occupied with some boring business conversation. You spend about twenty minutes aimlessly wandering around, not being able to find anyone interesting.');
    scene.text('"This won\'t do, I\'m too nervous… To hell with the advice Aunt Tamara gave me!" you think to yourself. The first glass is empty, and you grab another glass from a waiters tray. You taste the expensive champagne, it has a delicate aroma and a wonderful aftertaste, making it easy to drink.');
    scene.actions([
      { label: 'Eavesdrop on the men', goto: ['mey_tamara_events', 'party2'] },
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
  if (((s as any).args ?? 0)[0] === 'party2') {
    if (((s as any).hour ?? 0) === 2) {
      scene.img('images/locations/city/citycenter/expensiverest/restoran.jpg');
      scene.text('The party finishes. The restaurant is closing. It\'s time to go home.');
      return;
      scene.actions([
        { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['mey_home', 'start'] },
      ]);
    }
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party\'+rand(8, 10)+\'.jpg');
    scene.text('"You must try the food, it\'s what the oligarchs usually eat…" someone points you in the direction of a luxurious table filled with appetizers.');
    if (((s as any).hour ?? 0) === 23  ||  ((s as any).hour ?? 0) < 2) {
      scene.actions([{ label: 'Continue', goto: ['mey_home', 'start'] }]);
      scene.actions([
        { label: 'Return to the Meynolds residence', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  } },
      ]);
    }
    scene.actions([
      { label: 'Try the food', handler: (st: GameState) => {
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party12.jpg');
    scene.text('You closely observe what the others are eating, not wanting to expose yourself by not knowing how you\'re supposed to conduct yourself. You continue sipping from your glass while tasting the exquisite appetizers.');
    scene.actions([
      { label: 'Step away from the table', goto: ['mey_tamara_events', 'party2'] },
    ]);
  } },
      { label: 'Have a glass of champagne', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'alcohol', 'champagne');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party7.jpg');
    scene.text('You take a sip of the expensive champagne, it has a delicate aroma and a wonderful aftertaste, making it easy to drink.');
    scene.actions([
      { label: 'Step away', goto: ['mey_tamara_events', 'party2'] },
    ]);
  } },
      { label: 'Walk around the room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party9.jpg');
    scene.text('By now you\'re really bored and feel left out. Tamara is too absorbed by the conversation, not paying you any attention.');
    if (((s as any).alko ?? 0) >= 3) {
      if (((s as any).mesec ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).mey_tamara ?? 0)?.['drink_qw'] === 0) {
        scene.actions([
          { label: 'Search for an adventure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 30);
    qspCall(s, 'stat', '');
  }, goto: ['mey_tamara_events', 'party4'] },
        ]);
      } else {
        scene.actions([
          { label: 'Go out to the car to sleep the buzz off', goto: ['mey_tamara_events', 'party3'] },
        ]);
      }
    } else {
      if (((s as any).mey_tamara ?? 0)?.['builder_qw'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'party5'] }]);
      }
      if (((s as any).mey_tamara ?? 0)?.['bronson_qw'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'party6'] }]);
      }
      scene.actions([{ label: 'Continue', goto: ['mey_tamara_events', 'party2'] }]);
    }
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'party3') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party15.jpg');
    scene.text('Champagne is a treacherous drink. It goes down like lemonade. But once it hits you it feels like you were hit by a sledgehammer. Towards the end of the evening you are swaying about, clearly drunk. You keep on drifting around with a glass, giggling and hiccuping. At the end, your legs are no longer able to keep you on your feet. Gathering your last remaining strength, you find a chair in the corner. You crash on it thinking "I need to take a short break. Just a few seconds and then I\'m good to go again!"');
    scene.text('…');
    scene.text('You\'re awoken by Tamara in the front yard. She deliberately slams the car door, while you were sleeping in the back seat. Your mouth tastes like crap and you have a hell of a headache.');
    scene.text('"Go to your room! We\'ll talk about this tomorrow."');
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 50;
    ((s as any).mey_tamara ?? {})['qw_end'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.max(180, (23-((s as any).hour ?? 0))*60 + 55-((s as any).minut ?? 0)));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fall asleep', goto: ['mey_home', 'guest_bedroom'] },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'party4') {
    (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_tamara_events" });
    if ((!((s as any).zz_stage ?? 0))) {
      (s as any).zz_stage = 16;
    }
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party\'+iif(zz_stage = 18, 17, zz_stage)+\'.jpg');
    if (((s as any).zz_stage ?? 0) === 16) {
      (s as any).zz_stage = ((s as any).zz_stage ?? 0) + (1);
      scene.text('The champagne silently creeps up on you. You\'re feeling more loose and finally find the strength to mingle. The alcohol is making you a bit horny and you can\'t shake off the desire, wanting to hook up with someone. You are totally forgetting the strict orders that Tamara gave you about "keeping your composure at all times, and not going looking for sexual encounters".');
      scene.text('You look around the room observing the men. The only men you notice are either ugly or they\'ve brought their wives or girlfriends with them.');
      scene.text('"Well, fuck!" you think angrily. "They\'re either ugly or taken!"');
      scene.text('All of a sudden you notice something very interesting… A man in his thirties having a rowdy discussion with his girlfriend. You can see him getting upset when his girlfriend says something quite upsetting. She starts pushing him away, wanting him to leave her alone. As he moves away she mocks him with a foul gesture. Sensing blood, you head in his direction…');
      scene.actions([
        { label: 'Approach him', goto: ['mey_tamara_events', 'party4', '17'] },
      ]);
    } else {
      if (((s as any).zz_stage ?? 0) === 17) {
        (s as any).zz_stage = ((s as any).zz_stage ?? 0) + (1);
        scene.text('You slowly approach the man, leaning close to him, glancing, not really sure how to approach the situation. He immediately notices you, and clearly signals that he doesn\'t want to be bothered right now…');
        scene.text('"I see that you\'re having some issues with your girlfriend?" You say while trying to look as flirtatious as you can.');
        scene.text('"Her? She\'s a gold-digger that doesn\'t know when to shut up. She\'s not going anywhere. She\'ll get it all out at the club with her friends, then return home and sleep in my bed. When she wakes up tomorrow, everything will be back to normal again…" Says the man. "And you see, I can do whatever I want tonight, fuck her…"');
        scene.text('"Well, if you want I could help you out so you don\'t feel lonely tonight. I find this party very boring!" You look seductively at him.');
        scene.text('"Yeah, sure why not. Come with me, I\'ll give you a grand tour of the restaurant. I\'m one the co-owners. I\'ll show you the hidden parts around here. I\'m sure you\'ll find it exciting."');
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    ((s as any).mey_tamara ?? {})['drink_qw'] = 1;
  }, goto: ['mey_tamara_events', 'party2'] },
          { label: 'Go with him', goto: ['mey_tamara_events', 'party4a'] },
        ]);
      }
    }
  }
  if (((s as any).args ?? 0)[0] === 'party4a') {
    (s as any).zz_stage = 18;
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party18.jpg');
    scene.text('The two of you get out of the Banquet hall. As you walk he feels your butt and you start getting more excited. You stop at a door, with a bronze sign showing "Employees only". He tells you that this is the first stop and opens the door. Further inside he opens another door leading you in.');
    scene.text('As soon as the door closes the two of you start kissing passionately. Riled up, you push the man on the table and seat yourself next to him, grab his tie and pull him towards you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party19.jpg');
    scene.text('Without any hesitation he slides his hand between your legs. Touching your wet pussy lips, making you moan softly. You grab him by the shoulders and push him down on his knees. He lifts your dress and starts kissing you just above your clit. You move your panties aside and he starts licking you. The sensation that hits you is indescribable and when he starts using his finger you can\'t avoid nearing the edge. Your breathing intensifies and your wet pussy is pulsating, the moaning is getting louder and louder and before you know it, you cum in his mouth…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party20.jpg');
    scene.text('Wanting to repay the favor you undo his pants and pull out his hard cock. You kneel and begin caressing it with your hands. Wanting to taste it, you switch over to enveloping his throbbing cock with your mouth. He starts groaning louder and louder and his cock grows inside your mouth. Not wanting it to end too early, you stop and take off your dress.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party21.jpg');
    scene.text('The man, overcome with lust, bends you over the table, pulls your panties off and slides a finger inside your now dripping wet pussy. Testing to see if you\'re ready. You turn your head and nod, wanting him to enter you…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party22.jpg');
    scene.text('He teases you by stroking the tip of his cock against your lips, making you wetter. Suddenly, you feel his cock penetrate you and the size of his cock makes you gasp. After a slow start he begins picking up the pace as he\'s pounding you. You start moaning louder and louder, trembling and cumming again.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party23.jpg');
    scene.text('He pulls out of you and pushes you down making you sucking his cock again. His cock starts throbbing, getting rock-hard. As he cums you clamp your lips tighter around his cock to keep his juices from running down your chin…');
    scene.text('"That was great, now clean yourself up, you need to go back to the Banquet hall."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party24.jpg');
    scene.text('As you come out from the office you stumble upon an angry Tamara. Not allowing you to go back to the party, she orders you…');
    scene.text('"Follow me!"');
    scene.text('You faintly realize that you\'ve done something wrong. But champagne is still controlling your senses, and you\'re in a great mood after the sex you just had. You try to justify yourself saying that nothing happened and that you "just went out to powder your nose and that it took a while…" However, Tamara Meynold doesn\'t even budge, she walks in front of you, now visibly upset.');
    scene.text('Approaching her car, she opens the rear passenger door…');
    scene.text('"Get in, now!"');
    scene.text('You sit down, not understanding why she\'s so upset.');
    scene.text('"Wait for me here! You can blame yourself. You have no idea what you\'ve done…" Says Tamara Mikhaylovna before returning to the restaurant.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party25.jpg');
    ((s as any).stat ?? {})['cuni'] = (((s as any).stat ?? {})['cuni'] ?? 0) + (1);
    ((s as any).stat ?? {})['bj'] = (((s as any).stat ?? {})['bj'] ?? 0) + (1);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).stat ?? {})['vaginal'] = (((s as any).stat ?? {})['vaginal'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', 'businessman at party', 0);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sleep it off', handler: (st: GameState) => {
    ((s as any).mey_vika ?? {})['mey_vika_qw'] = 50;
    ((s as any).mey_tamara ?? {})['drink_qw'] = 1;
    ((s as any).mey_tamara ?? {})['qw_end'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + ((23-((s as any).hour ?? 0)) * 60 + 55-((s as any).minut ?? 0));
    qspCall(s, 'mood', 'lower', 'medium');
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party15.jpg');
    scene.text('You\'re awoken by Tamara in the front yard. She deliberately slams the car door, while you were sleeping in the back seat. Your mouth tastes like crap and you have a hell of a headache.');
    scene.text('"Go to your room! We\'ll talk about this tomorrow."');
    scene.actions([
      { label: 'Go to your room', goto: ['mey_home', 'guest_bedroom'] },
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
  if (((s as any).args ?? 0)[0] === 'party5') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party25.jpg');
    scene.text('"Why is such a sweet young thing standing here alone?" you hear a male voice saying behind you. "Don\'t worry I\'ll keep you company…"');
    scene.text('You turn facing the direction the voice is coming from. You spot a short, bald man dressed in an expensive suit. The outfit fits him badly, mostly because of his enormous belly. You judge his looks to be those of the classic sugar-daddy.');
    scene.text('"How can it be possible that such a delicate flower is by herself, don\'t you know it\'s not good for you to be alone?" he smiles. "A delicate flower like yourself must be carefully nurtured and groomed properly, preferably by an experienced gardener. Let me buy you some champagne. I promise it\'ll taste just as heavenly as you."');
    scene.text('He extends his hand and you notice his thick hairy fingers are decorated with multiple rings. The sugar-daddy grabs another glass from a tray and brings it to you. He speaks up again…');
    scene.actions([
      { label: 'Mingle', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party26.jpg');
    scene.text('"You should try the lobster! It goes perfectly with the champagne! To be honest, I\'m not that big of a fan when it comes to champagne and lobster, I\'d rather have a glass of vodka and cabbage rolls in a modest hut by the river. Or a beer and some crayfish! I own a modest house near town. I\'m just a simple contractor. As I\'ve built the house myself, it\'s very modest. The pool is only twenty five meters long." he laughs obscenely, making his second chin shake.');
    scene.text('"So what do you say my delicate flower, I would love to take you on a date. We\'d had a great time, we can swim in the pool, grab something to eat." he says while trying to hug you by the waist.');
    scene.text('"What a disgusting pig." You think to yourself. "But a very rich pig. He\'s a simple minded buffoon that I can probably use to my advantage."');
    scene.text('"Come on gorgeous. Don\'t worry, I\'m very kind, you won\'t regret it." He pulls a big cell phone from his inside pocket and asks for your name and number.');
    scene.actions([
      { label: 'Try the lobster', handler: (st: GameState) => {
    ((s as any).mey_tamara ?? {})['builder_qw'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party27.jpg');
    scene.text('You contemplate giving him your real number. You know that this disgusting pig only wants to fuck you. It\'s written all over his face. But he can come in handy one day. You decide to give him your real phone number. He smirks and hands you a business card…');
    scene.text('"If you ever need anything just give me a call. And I really mean anything. You won\'t regret it, I love pleasing pretty girls!"');
    scene.text('You say goodbye, barely escaping from this so called man that wants to take you to his "house" to do god knows what with you. Once again you find yourself alone and decide to make another round around the room.');
    scene.actions([
      { label: 'Mingle', goto: ['mey_tamara_events', 'party2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'party6') {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party28.jpg');
    scene.text('You notice a middle-aged, short, but awe-inspiring man with a square face. He\'s rough and ugly, but there\'s something attractive about him, some sort of charisma, just like Charles Bronson. He looks in your direction very often as he assesses you. He\'s standing with an older, once very beautiful woman. She manages to keep up her good looks by paying a lot of money to maintain her appearance, but you can\'t win the battle against time…');
    scene.actions([
      { label: 'Observe the man', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/vicky/event/party29.jpg');
    scene.text('Someone taps you on the shoulder. Turning around, you see it\'s Tamara. She grabs you under her elbow and leads you over…');
    scene.text('"I noticed you were checking out that man, my dear. Well, let me introduce you to him, I\'m sure you two will hit it off."');
    scene.actions([
      { label: 'Follow Tamara', handler: (st: GameState) => {
    ((s as any).mey_tamara ?? {})['bronson_qw'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('Grabbing you by the elbow, she leads you to the very couple that had awoken your interest, "Bronson" and his lady friend.');
    scene.text('She greets the man like an old friend, kissing him on the cheek, but indifferently greets the woman by his side. "Something complicated happened between these two…" you think to yourself.');
    // TODO-QSP: dynamic text: "Let me introduce my pupil, <<$pcs_nickname>>."
    scene.text(`"Let me introduce my pupil, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('"Bronson" smiles, making you back off a bit seeing his face up close. It looks quite rough like someone has slashed his face with a razor. His missing teeth makes his smile seem off and crooked. But despite the roughly slashed face and crooked smile, he seems very sincere.');
    // TODO-QSP: dynamic text: "It's so nice meeting someone young here! The only other people here are old gob...
    scene.text(`"It's so nice meeting someone young here! The only other people here are old goblins and hags… But not you. With your youth and beauty, you're like a ray of sunshine! You have to forgive an old man for the bad compliments, ${((s as any).pcs_firstname ?? 0)}."`);
    scene.text('"My dear Tamara! You always had a great eye for talent!"');
    scene.text('"I still remember your scent, it\'s the same one when you helped me many years ago… When I had to get away from my husband…" Sighs Tamara with concealed sadness, briefly glancing at him. "There\'s definitely something going on here." You think to yourself.');
    scene.text('"Well, let\'s not dwell on the past. Let bygones be bygones! "Bronson" smiles, answering without any malice or mockery. His friend, feeling clearly undesirable in this conversation, places her half empty glass of champagne on the table, grabbing a new one from a passing waiter, silently walked away towards the musicians. She moves away without having said one word.');
    scene.text('You keep up the small talk. "Bronson" gradually looks at you like he\'s trying to read you. With some help from Tamara you don\'t get embarrassed by this prying eyes. The way the two of them behave it\'s quite obvious that they’re old friends. Though, you believe that they\'re more than friends.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, will you make an old man happy and dine with him?" He asks ...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, will you make an old man happy and dine with him?" He asks you confidently. The way he conducts himself in a conversation, despite the sloppy appearance, makes him somehow, likable and not frightening.`);
    scene.text('"I would be honoured."');
    // TODO-QSP: dynamic text: "Well, then it's settled, <<$pcs_firstname>>!" "Bronson" smiles and moves away f...
    scene.text(`"Well, then it's settled, ${((s as any).pcs_firstname ?? 0)}!" "Bronson" smiles and moves away from you and Aunt Tamara. You suddenly realize that he didn't ask you for your number. Now that you think about it, he never properly introduced himself, even though you talked for a good hour!`);
    scene.actions([
      { label: 'Mingle', goto: ['mey_tamara_events', 'party2'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'reputation') {
    (s as any).zz_stage = qspUntranslated(s, "args[1]", { location: "mey_tamara_events" });
    if (((s as any).zz_stage ?? 0)!==3) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/characters/pavlovsk/school/girl/vicky/eve...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/characters/pavlovsk/school/girl/vicky/event/reputation'+zz_stage+'.jpg"></center>`);
    }
    if ((!((s as any).zz_stage ?? 0))) {
      scene.text('You stand in front of Tamara, with your eyes tearing up.');
      scene.text('"Well, what do you want? I don\'t want you here anymore."');
    } else {
      if (((s as any).zz_stage ?? 0) === 1) {
        scene.text('You start sniffing and let out…');
        scene.text('"Please, I beg you, don\'t send me away! Please! I… I\'ll do whatever you want…" you say bursting into tears.');
        scene.text('"Oh… What am I going to do with you?" Tamara sighs after a few minutes. "I can\'t really kick you out, but I can\'t let you off the hook either… I guess I\'ll keep on mentoring you…"');
        scene.text('"Ma-m-maybe, it\'s possible to redeem myself? Some way to improve?" you sob, trying to wipe away the tears.');
        scene.text('"I really thought you were smarter than my girls. They\'ve got their brains from their daddy. Both of them."');
        scene.text('"Especially Vicky, lascivious like a cat in the spring. Not caring who she picks as a sexual partner. You being an example."');
      } else {
        if (((s as any).zz_stage ?? 0) === 2) {
          scene.text('Tamara was deep in her thoughts, biting her glasses, twisting them in her hands until…');
          scene.text('"But you should be praised that you immediately came here and confessed. So I didn\'t find it out through the "grapevine". So you\'re not completely hopeless. But you\'ve made things more complicated for yourself. There\'s a simple way to save face though. But we need something to raise your reputation all over again…"');
          scene.text('Tamara thinks out loud to herself, sucking on her glasses, not paying attention to you. The tears are still rolling down your cheeks, but you start getting back your composure! Aunt Tamara starts talking to herself again, silently pointing to the door.');
        } else {
          if (((s as any).zz_stage ?? 0) === 3) {
            scene.img('images/characters/pavlovsk/school/girl/vicky/event/reputation2.jpg');
            scene.text('Tamara pauses for a short time, continuing to nibble on the earpiece and starts clicking her nails on the armrest. A couple of minutes later, that seem like an eternity, she finally looks at you.');
            scene.text('"Listen very carefully, I will not repeat myself. I\'ve come up with a way how you can redeem yourself. But for someone like you this might be very hard!" She starts while you fully focus on her. She stands up and continues…');
            scene.text('"First and foremost. From now on, you\'re going to behave as a nun. You should avoid sex unless for education purpose… No more of that generous attitude to having sex everywhere, the disco, in parks, not even in school! You are forbidden to have sex with anyone in Pavlovsk. The only people you can even consider having sex with are the people closest to you, those who you can fully trust. You have to strictly maintain the good girl reputation in Pavlovsk."');
            scene.text('"If you really find it unbearable and have to let off some steam, go to the city. There\'s a club there. Or you can go somewhere else where you can meet someone. If nobody knows you, you can have sex however you want and without harm to your reputation. The main thing is that you don\'t forget to use protection or people will know and then not even I can help you."');
            scene.text('"And finally." Tamara claps her hands. "Time for a lesson. What\'s the quickest way to orgasm?"');
            scene.text('"By having anal sex…" you quickly answer without thinking, instantly regretting your answer.');
            scene.text('"Come here!" Tamara sternly tells you…');
          } else {
            if (((s as any).zz_stage ?? 0) === 4) {
              scene.text('She makes you take off your panties, bending you across her knees. She then proceeds slapping your butt over and over again…');
              scene.text('You try to endure because you deserve it. But Tamara doesn\'t stop after a few slaps, she continues slapping your ass harder and harder, leaving your poor butt with a burning sensation, hurting like hell. You start squealing more loudly with each slap. At the end, you can\'t handle it anymore and you start crying hard. The spanking immediately stops.');
              scene.text('"There, there, baby, don\'t cry. Come on, stop, I admit, I was filled with anger and got carried away, I may have overdone it a little."');
              scene.text('Sobbing, you try to pull the panties over your bruised ass. Tamara stops you, and pulls off your panties…');
              scene.text('"You won\'t be needing them yet. You don\'t have to be embarrassed, no one will see you here. Let\'s go to my room, I have a lotion in my room that\'ll help…" She takes you by the hand and leads you into her room.');
              scene.text('There, she grabs a bottle with some kind of lotion in it.');
              scene.text('"Now, lie down on the bed, and relax your cute little butt!" You lie down on Tamara\'s bed. Her bed is quite modest and hard compared to the enormous, luxurious bed in Vicky\'s room!');
              scene.text('Tamara carefully starts rubbing the pleasant-smelling ointment on your red, marked ass. And as she said, the burning sensation immediately begins to subside under the tender caressing hands of Aunt Tamara. You have a hard time believing these are the same hands that just severely flogged you. "How can she snap so easily?" You once again start thinking about it…');
              scene.text('Her gentle hands continue caressing your back and feet, no longer focusing only on your butt, which already feels much better. You start enjoying yourself a bit too much. Your bare pussy starts getting wet! Without thinking about it you start moaning under the skillful caresses.');
            } else {
              if (((s as any).zz_stage ?? 0) === 5) {
                scene.text('Suddenly the caresses stop abruptly. You turn your head wondering why it stopped. Sitting on the bed next to you, you notice a completely nude Tamara, awkwardly cross legged, looking away from you…');
                // TODO-QSP: dynamic text: "I'm sorry, <<$pcs_nickname>>, I think I got a little carried away again… you've...
                scene.text(`"I'm sorry, ${((s as any).pcs_nickname ?? 0)}, I think I got a little carried away again… you've never seen me naked…"`);
              } else {
                if (((s as any).zz_stage ?? 0) === 6) {
                  scene.text('An impulse makes you take off your shirt and sit next to your mentor. You start caressing her magnificent breasts, touching her pink nipples with your fingers.');
                } else {
                  if (((s as any).zz_stage ?? 0) === 7) {
                    scene.text('Tamara moans, leans towards you, grabs you at the small of your back and pulls you in closer. She arches her back and throws her head back, like a big red cat, showing her smooth skinned neck.');
                    scene.text('Your hands start gliding over her flawless skin. You kiss her exposed neck, continuing along the jaw line…');
                  } else {
                    if (((s as any).zz_stage ?? 0) === 8) {
                      scene.text('You kiss her, gently nibbling her lower lip. While you kiss, you slowly slide your hand near Tamara\'s pussy lips. You start circling your finger just inside her lips, being careful not to make contact with her clit.');
                      scene.text('Getting wetter, Tamara pushes you on the bed and spreads your legs. She slowly circles her tongue just inside your lips, right on the edge. Slowly getting closer and then moving away, and then getting closer again teasing you…');
                    } else {
                      if (((s as any).zz_stage ?? 0) === 9) {
                        scene.text('You let out a moan, and Tamara moves up your body kissing you. As she approaches your lips you move down a little, slowly making your way towards her chest. Nibbling on her breasts, you hear Tamara letting out tiny moans, wordlessly egging you on. You finally place your mouth around her nipple and gently start sucking them, making her gasp…');
                      } else {
                        if (((s as any).zz_stage ?? 0) === 10) {
                          scene.text('Tamara, panting, begins to move down again. All of a sudden you gasp involuntarily and begin moaning louder as she flicks her tongue faster over your anus. While licking your anus she slowly slides a finger inside your wet hole. Overcome with ecstasy you tighten your pussy. She devours your delicious juices and slowly introduces another finger inside of you. As you start panting she increases the speed. You shudder as you start having what feels like never ending orgasms. You sure can learn a lot from her…');
                        } else {
                          if (((s as any).zz_stage ?? 0) === 11) {
                            scene.text('Catching your breath, you thank your mentor. But there is no time for that. You slide a finger inside her feeling her pulsating pussy. Tamara pants harder and harder, you edge her several times. While sucking and nibbling on her pussy when you feel she can\'t handle it anymore. She bends her knees, screams, and cums hard. You lick her clean after she orgasms. It looks like you\'re a quick learner! She lays back after a few seconds, panting, with sweat coating her body. Tamara, satisfied, finally turns to face you saying…');
                            // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>! You have a real talent! Promise me you won't waste it...
                            scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}! You have a real talent! Promise me you won't waste it on those primates hanging out in the Park… They don't deserve you…"`);
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
    if (((s as any).zz_stage ?? 0) < 11) {
      return;
      scene.actions([
        { label: 'Pleade', handler: (st: GameState) => {
    // TODO-QSP: gt 'mey_tamara_events', 'reputation', zz_stage+1
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go inside', handler: (st: GameState) => {
    ((s as any).mey_tamara ?? {})['reputation_qw'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 20);
    (s as any).pcs_horny = 0;
    (s as any).spanked = 2;
  }, goto: ['mey_home', 'guest_bedroom'] },
      ]);
    }
  }
  scene.build();
}

export const mey_tamara_events: LocationDef = {
  name: 'mey_tamara_events',
  title: 'Tamara Meynold',
  region: 'other',
  locationType: 'event',
  locclass: 'kitr',
  description: ['Tamara Meynold, the twins\' mother, is a tall, big busted woman, quite outspoken just like a man. She\'s a very attractive woman just under "fifty" years old, redheaded just like the daughters.'],
  enter: enter,
};
