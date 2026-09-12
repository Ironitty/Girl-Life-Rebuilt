import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('After the bell rings and you see the boys leave their bathroom, you slip inside and hurry into one of the stalls. Your heart is pounding with a mixture of fear and excitement - you know you shouldn\'t be in here but that\'s part of the thrill. You can\'t lock the stall without making it obvious you\'re here, so you simply sit on the toilet with your feet pulled up. Hopefully that\'s enough to keep you hidden should someone else enter the bathroom.');
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Have a smoke', handler: (st: GameState) => {
    (s as any).school_bunk = 1;
    qspCall(s, 'drugs', 'smoke');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/smoke1.jpg');
    scene.text('You pull out a cigarette, light it and take a long drag, holding it in for a bit. A sense of calmness overtakes you as the smoke slowly fills your lungs. This is definitely better than going to class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boys'] }]);
    } else {
      if (((s as any).i ?? 0) <= 40) {
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb'] }]);
      } else {
        if (((s as any).i ?? 0) <= 65) {
          (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb'] }]);
        } else {
          (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.actions([
            { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Play on your phone', handler: (st: GameState) => {
    (s as any).school_bunk = 0;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/usephone1.jpg');
    scene.text('You pull out your phone, looking for something to do. You can\'t really text anyone right now and the games you can play aren\'t very good, but it sure as hell beats sitting through another boring class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boys'] }]);
    } else {
      if (((s as any).i ?? 0) <= 40) {
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb'] }]);
      } else {
        if (((s as any).i ?? 0) <= 65) {
          (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb'] }]);
        } else {
          (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
          scene.actions([
            { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBathroom2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', Math.floor(Math.random() * 21) + 10);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  if ((!((s as any).school_bunk ?? 0))) {
    scene.img('images/locations/pavlovsk/school/bathroom/usephone2.jpg');
    scene.text('For the rest of the period, you play on your phone and find it very relaxing. By the time the bell rings, you are in a far better mood.');
  } else {
    scene.img('images/locations/pavlovsk/school/bathroom/smoke2.jpg');
    scene.text('For the rest of the period, you play on your phone while having another cigarette or two. You find it very relaxing and by the time the bell rings, you are in a far better mood.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).i = Math.floor(Math.random() * 140) + 1;
  if (((s as any).i ?? 0) <= 10  &&  ((s as any).kotovLoveQW ?? 0) < 1) {
    scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy6'] }]);
  } else {
    if (((s as any).i ?? 0) <= 25  &&  ((s as any).fedorKozlovQW ?? 0) > -10) {
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy5'] }]);
    } else {
      if (((s as any).i ?? 0) <= 45) {
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy4'] }]);
      } else {
        if (((s as any).i ?? 0) <= 65) {
          scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy3'] }]);
        } else {
          if (((s as any).i ?? 0) <= 85) {
            scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy2'] }]);
          } else {
            if (((s as any).i ?? 0) <= 100) {
              scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy1'] }]);
            } else {
              if (((s as any).i ?? 0) <= 120) {
                scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boy7'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boys'] }]);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoy1(s: GameState, scene: SceneBuilder): void {
  (s as any).boyrand = Math.floor(Math.random() * 8) + 1;
  if (((s as any).boyrand ?? 0) === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A147', 1);
  } else {
    if (((s as any).boyrand ?? 0) === 2) {
      qspCall(s, 'npc_relationship', 'modify', 'A148', 1);
    } else {
      if (((s as any).boyrand ?? 0) === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A5', 1);
      } else {
        if (((s as any).boyrand ?? 0) === 4) {
          qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
        } else {
          if (((s as any).boyrand ?? 0) === 5) {
            qspCall(s, 'npc_relationship', 'modify', 'A150', 1);
          } else {
            if (((s as any).boyrand ?? 0) === 6) {
              qspCall(s, 'npc_relationship', 'modify', 'A152', 1);
            } else {
              if (((s as any).boyrand ?? 0) === 7) {
                qspCall(s, 'npc_relationship', 'modify', 'A3', 1);
              } else {
                if (((s as any).boyrand ?? 0) === 8) {
                  qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  // TODO-QSP: dynamic text: After a few minutes, you hear someone else in the bathroom with you and peek out...
  scene.text(`After a few minutes, you hear someone else in the bathroom with you and peek out to see ${((s as any).rand_boy ?? 0)}. Smiling, you exit the stall and call his name. He whirls around, visibly startled, but then breaks into a smile when he sees you. "You scared the shit out of me!"`);
  scene.text('Within seconds, the two of you are chatting away about school, movies, sports, music and before you know it, the bell rings. You both gather your things before bidding each other farewell and heading to your next class.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterBoy2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/stall.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You move slightly to make sure you are hidden, but that causes the toilet seat under you to creak noticeably.');
  // TODO-QSP: dynamic text: "Who's in here?" you hear a gruff voice ask. You don't answer and hope he, whoev...
  scene.text(`"Who's in here?" you hear a gruff voice ask. You don't answer and hope he, whoever it is, will just let it go. Unfortunately, he doesn't. "Hey, don't fuck with me! I know you're here." The next thing you hear is a stall door at the far end of the bathroom slam, audibly opened with a hard push. The sound repeats, again and again, and is slowly working its way towards you. Having little choice, you sit and wait until it's your stall's turn. The boy turns out to be Radomir, looking angry at first but his expression changes into a half-grin when he sees who it is. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?"`);
  scene.text('You look up at him and smile. "Hey Radomir, just cutting class. Needed a break, you know?"');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('He nods his head. "Sure, sure. Glad to find you here, I was afraid I might get bored," he says as he moves into the stall with you, grabs your wrist tightly and pulls you up. You haven\'t even processed what he\'s doing when you feel his lips on yours as he drags you out of the stall with him.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You turn your head, but he just takes it as an invitation to nuzzle your neck instead. You try and push him off, but he\'s far stronger than you are. "Radomir, no! I don\'t want to!" you protest.');
    scene.text('He starts pulling your clothes off. "Sure you do, every girl wants a strong man to fuck her."');
    scene.text('You struggle and do your best to break free, but his grip is too tight. He pushes you up against the sinks and slips his hand up your skirt.');
    if (((s as any).grupTipe ?? 0) === 4) {
      // TODO-QSP: dynamic text: As he finds and rubs your clit '+iif($pantyworntype ! 'none', 'through your pant...
      scene.text('As he finds and rubs your clit \'+iif($pantyworntype ! \'none\', \'through your panties\', \')+\', he whispers: "If you\'re an obedient little bitch, I will put in a good word with the rest. Who knows, maybe I could get you fully accepted."');
    }
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Slap him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', (-5));
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'end');
    scene.text('You push him away again and this time, you gain just enough room to slap him. He stops, a bit surprised at first, before slapping you back. "What the fuck?! Don\'t you dare slap me, bitch!"');
    scene.text('Your hand goes to your cheek and you work your jaw. It hurts and you can already feel the side of your face going red - you don\'t think he hit you nearly as hard as he could have. "You wouldn\'t stop! I don\'t want to fuck you."');
    scene.text('He backs up a step, his expression furious once more, and shoves you towards the door. "Fine, then get the fuck out of here. Fucking cock tease."');
    scene.text('Glad he at least backed off, you gather your stuff and quickly leave before he can change his mind. You spend the rest of the period hiding in the stairwell, trying not to get spotted. Maybe skipping class isn\'t such a good idea after all, but then again, this probably could have gone worse. Much worse.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.actions([
        { label: 'Back the fuck off', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You turn, spinning you both around, before you shove him hard against the counter. "Back the fuck off or I\'ll be wearing your balls as earrings!" you snarl and he raises his hands up, as if to surrender.');
    // TODO-QSP: dynamic text: "I was just playing girl, no need to get all bitchy! If you don't want to play, ...
    scene.text(`"I was just playing girl, no need to get all bitchy! If you don't want to play, there are other bitches dying to take a ride. Catch you later, ${((s as any).pcs_nickname ?? 0)}." He pauses to check himself in the mirror and straighten up his hair before walking out like nothing happened.`);
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'I said no', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You shove him back a step. "I said no, so please stop." He backs up a step and puts his hands up. "Fine, what-the fuck-ever. Why the fuck are you in the boys bathroom, if not to get fucked like a slut?"');
    scene.text('"Girls can be bitchy and I didn\'t feel like dealing with it," you reply and he calms down a little before shrugging.');
    scene.text('"Yeah okay, I guess. Anyways, I got more important things to do." With that, he walks out.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      { label: 'Submit to him', goto: ['gschool_boys_bathroom', 'boy2_sub'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Have fun', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/school/boy1.jpg');
    scene.text('You\'ve been itching for a good fuck and he\'s as good as any other dick. You caress his crotch through his pants as you fiercely kiss him back. He seems to get more excited as he feels your eagerness, reaching down with one hand and fingering you while his other hand grips you by the back of the neck as he kisses you. He has you wet in no time.');
    scene.text('You unbutton his pants and reach inside, quickly feeling his huge dick growing hard in your hand. He lifts you up and sits you on the counter, then pulls down his pants and sits next to you.');
    scene.actions([
      { label: 'Suck his cock', goto: ['gschool_boys_bathroom', 'boy2_sub'] },
    ]);
  } },
    ]);
  } else {
    scene.text('He nods his head. "Sure, sure. Hey, do you have a smoke?" he asks as he seems to search his pockets for a pack of cigarettes.');
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'smoke');
    qspCall(s, 'npc_relationship', 'modify', 'A154', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You pull out your pack of cigarettes and offer him one. He reaches for one while pulling out a lighter. He takes a long, slow drag. "Thanks, I needed that."');
    scene.text('He takes another drag. "You know, you\'re not so bad, I mean other than…" he motions at your body. "You know."');
    scene.text('You\'re so insulted, you don\'t even know how to respond.');
    scene.text('"If you worked on that, you might not be so bad looking. Hell, you might even become a looker. Anyways, thanks for the smoke." He talks as if he was just making conversation and not insulting you. Perhaps he wasn\'t trying to be mean? You\'re still pondering this as he leaves.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', (-1));
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You shake your head. "No, sorry."');
    scene.text('He looks a little annoyed and heads for the door, kicking the trash can as he goes. "Fuck! What a fucked up day."');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoy2Sub(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A154');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/radomir/sex/school/boy1bj.jpg');
  // TODO-QSP: dynamic text: He reaches over, grabs you by the hair and pulls your head down to his dick. You...
  scene.text(`He reaches over, grabs you by the hair and pulls your head down to his dick. You open your mouth and take the tip of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your mouth. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips tightly around his shaft, your tongue moving wildly around it, and start bobbing your head up and down, blowing him for all you're worth.`);
  scene.text('One of your hands goes to his balls to fondle and play with them as you suck him off, supporting yourself with your other hand. You feel like you\'re getting into a good rhythm when he suddenly places his hand on the back of your head to \'help\' you take his dick deeper into your mouth by shoving your head down and forcing you to deepthroat him. The pace he sets and his thrusts upwards into your throat cause you to gag a few times, but he only lets you come up for air very briefly before pushing you back down.');
  scene.text('Eventually, he tells you to spread your legs for him. You comply and feel his fingers push into your pussy again.');
  qspCall(s, 'arousal', 'bj', 6, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'arousal', 'vaginal_finger', 2, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/school/boy1vag.jpg');
    scene.text('After a little finger fucking, he pulls your mouth off his cock and slides off the counter. He grabs and turns you over so you\'re laying on your back, sprawled out on the counter. His eyes burning with passion, he pulls your skirt up, followed by your top to expose your breasts.');
    // TODO-QSP: dynamic text: Pulling your legs apart, he steps between them and lines his <<dick>>cm <<$dick_...
    scene.text(`Pulling your legs apart, he steps between them and lines his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick up, rubbing it against the slit of your pussy, covering it in your secretions before shoving it in and sliding himself balls deep into you in one thrust. You groan in pain - you were not completely wet and ready for his thick cock - but also in pleasure. One of his hands holds your leg up as the other wraps around your throat and squeezes, choking you slightly. After a few seconds, he eases up just enough to allow you to catch your breath before he does it again, all while pounding your pussy violently.`);
    qspCall(s, 'arousal', 'vaginal', 6, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/school/boy1anal.jpg');
    scene.text('He slows down and thrusts into your pussy a few more times before he suddenly pulls out and shoves it up your ass instead, without warning or preparation. You groan in pain and instinctively want to pull away, but he tightens his gripon your throat. He doesn\'t wait for you to adjust to his cock being shoved up your ass either; he just drives it all the way in, ignoring your pained noises until his balls are touching your cheeks and starts hammering at your puckered hole.');
    scene.text('You do what you can to relax and it eventually starts starts feeling a little good. You hold onto the counter, moaning lustfully as Radomir starts panting, quietly at first but getting louder; he\'s close.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 6, 'sub', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/radomir/sex/school/boy1cum.jpg');
    scene.text('He thrusts deeply into your ass and you soon feel a hot jet of sperm shoot into your bowels. He jerks out of you as he\'s cumming, the last few spurts of cum landing on your inner thighs and pussy. He strokes his dick to get the last few drops out, his heavy breathing still echoing in the bathroom as he wipes them off on your thigh.');
    // TODO-QSP: dynamic text: He lets out a relaxed sigh. "Fuck, I needed that. You're a great lay, <<$pcs_nic...
    scene.text(`He lets out a relaxed sigh. "Fuck, I needed that. You're a great lay, ${((s as any).pcs_nickname ?? 0)}." He steps over to the sink and cleans himself up, wiping off the sweat and giving his cock a good wash. You climb down from the counter, his cum flowing from your gaping asshole and running down your thigh, and do the same.`);
    scene.text('When he\'s finished cleaning up and his uniform is back in place, he heads for the door, but pauses on his way out. "I look forward to next time, but maybe do some exercises to tighten up that pussy, " he says as he walks out the door, leaving you standing there with his cum leaking out of you.');
    scene.text('Luckily for you, no one else enters the bathroom while you clean yourself and get dressed. You leave the bathroom just before the bell rings, hoping no one spots you. You can\'t help but wonder if Radomir was serious about those exercises…');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoy3(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You peek out, but don\'t see anyone. Confused and a little curious, you leave the stall and take a look around. The next stall door is open and you see Lazar using the toilet as a chair, with a folder in his lap. "Hey Lazar, what\'s up?" you ask.');
  // TODO-QSP: dynamic text: He looks up in surprise. "Oh hi, <<$pcs_nickname>>. You cutting class?" he asks ...
  scene.text(`He looks up in surprise. "Oh hi, ${((s as any).pcs_nickname ?? 0)}. You cutting class?" he asks in reply.`);
  scene.text('"Yeah, I couldn\'t take another boring lesson," you tell him with a smile. "I needed a little fun. You?"');
  if (((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('Lazar sets the folder aside. "I was studying the playbook for this week\'s game, but I\'d be up for some fun and stress relief…" he says with a lustful grin. You\'re wondering what he means by \'stress relief\' when he suddenly moves towards you. He quickly starts kissing you and grabbing at your breasts and ass.');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stop him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You pry him off of you and step back. "Sorry Lazar, but that\'s not what I meant."');
    scene.text('He frowns. "So, what did you have in mind?" he asks.');
    scene.text('"We could, you know, just talk? I mean, how have you been?" you ask as you lean against the stall.');
    scene.text('"Talk?" He raises his eyebrows. "Really? I mean, if you weren\'t looking for some action, then why are you in the men\'s room?" he inquires.');
    scene.text('"I…" It\'s a good question that\'s caught you off guard. "Look, girls can really be catty at times, like super-annoying and bitchy, and I just wasn\'t in the mood for that. So, I thought hiding in here would be more peaceful."');
    scene.text('He grins and steps close again, so close that you can feel his breath on your cheeks. "I know a great way to relax, and it sure beats talking…" There\'s something appealing about him, a charm that\'s hard to resist, and you notice that he\'s leaning in for another kiss…');
    scene.actions([
      { label: 'I said no', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You put your hand up and stop him again. "Look, seriously, I just wanted to talk, but if you\'d rather not…" You trail off and make telling motions towards your things in the stall and the bathroom door.');
    scene.text('He sighs loudly; clearly he wanted more, but he\'s not pushing the issue. "Okay, alright, I get it. Sure, we can talk for a bit." He shrugs a half-assed apology. "I just thought you wanted more is all."');
    scene.text('The two of you spend the next few minutes talking about pretty much anything: school, music, movies, Lazar\'s previous games and the upcoming ones. Before you know it, the bell rings and you gather your things before bidding Lazar farewell and heading to your next class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Return the kiss', goto: ['gschool_boys_bathroom', 'boy3_kiss'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return the kiss', goto: ['gschool_boys_bathroom', 'boy3_kiss'] },
    ]);
  } else {
    scene.text('Lazar takes a seat on one of the sinks and lies the folder across his lap. "I was studying the playbook for this week\'s game. Sorry, can\'t help you with the fun; I really need to study this." He then turns his attention away from you and to the book.');
    scene.text('You nod a little and decide to let him study his book. "Sure, I won\'t bother you." With that, you go back to quietly doing what you were doing.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoy3Kiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A149');
  qspCall(s, 'npc_relationship', 'modify', 'A149', 3);
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A149'] = 1;
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/boy2bj.jpg');
  // TODO-QSP: dynamic text: You can't resist and kiss him back passionately as his hands continue roaming yo...
  scene.text(`You can't resist and kiss him back passionately as his hands continue roaming your body. You make out for several minutes, tightly embraced, before he breaks the kiss and pushes you down to your knees. You don't know when he undid his pants, but you find his erect cock out and waiting for you when your knees touch the floor. Wasting no time, you take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth and start sucking it.`);
  qspCall(s, 'arousal', 'kiss', 6);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/boy2vag.jpg');
    scene.text('You place your hands on his thighs for support and then slowly, perhaps agonizingly slow for him, take a little more of his dick in your mouth. You teasingly push further along, then begin moving back and forth while flicking your tongue along his shaft. You look up at him to see what effect your oral torture is having and smile around his cock when he groans. His hand is resting at the back of your head, but he\'s only stroking your hair. You\'re in complete control, but you know you don\'t have too long to play with him like this, so you quicken your movements, taking him even deeper into your mouth with each bob of your head. He\'s groaning even louder now, louder than you knew was possible for a guy.');
    scene.text('There\'s no doubt that you were giving him exactly what he wanted, but after a few minutes, he reaches down and pulls you to your feet. Rather than kissing you like you were expecting, he pushes you over to the sinks and bends you over, pressing your face against the mirror. You thought he was putty in your hands, but now he\'s firmly in control; not that you\'re complaining. In an instant, he pulls your skirt off and tosses it aside.');
    // TODO-QSP: dynamic text: Your pussy is immediately filled with his <<dick>>cm <<$dick_girth>> cock, aided...
    scene.text(`Your pussy is immediately filled with his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock, aided by your wetness. You moan loudly as he begins pounding away at your wanting twat, the bathroom walls echoing with the sounds of flesh slapping against flesh. Every now and then, his thrusts cause you to bump your head into the wall or jab your thighs into the sink. He seems blissfully unaware of your minor discomfort though, as his hands slide up under your shirt and around your breasts. Once he's settled into a rhythm, he releases his grip on your chest and instead moves to the back of your head, pulling you by your hair. The pain only aids your excitement, as you revel in being an easy fuck-toy for some guy in the men's bathroom.`);
    qspCall(s, 'arousal', 'bj', 6);
    qspCall(s, 'arousal', 'vaginal', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Surprise anal', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/boy2anal.jpg');
    scene.text('You don\'t know if it was an accident or not, but mid thrust, he pulls out of you and penetrates your ass instead of your pussy, sliding all the way in one single thrust. You cry out in surprised pain and grip the sink tightly - you definitely weren\'t prepared for this, but at least Lazar reads your reaction right and slows down to a crawl, giving you time to adjust.');
    scene.text('He doesn\'t stop his movements though; with how excited he must be, it\'d probably be close to impossible for him to do that. He has adjusted the depth and speed of his penetration, but doesn\'t say a word. Still, it helps, and after a while, the pain recedes and you can feel pleasure taking the upper hand again. He chooses that moment to pull out of you and get you on your back across the sink. He spreads your legs and steps between them before he slips his cock back into your ass. This time, you can appreciate the feeling of him entering your backdoor and moan in satisfaction. He takes advantage of the new position and occasionally squeezes your breasts; you follow his example and rub your clit, making this steamy encounter even more enjoyable for you.');
    scene.text('Minutes go by and he keeps speeding up, eventually fucking your asshole as fast as he can, the shockwaves traveling to your clit and up your spine, adding to the building orgasm. That\'s when you notice that his panting changes and he has a look of intense concentration on his face - he\'s about to shoot his load.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 6);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'labia', ((s as any).boy ?? 0), 1, '', '', 20);
    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, '', '', 20);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/lazar/sex/school/boy2cum.jpg');
    scene.text('Knowing you don\'t have much time, you rub your pussy furiously and your climax hits you just as he pulls out of you.');
    qspCall(s, 'arousal', 'clit_finger', 5);
    qspCall(s, 'arousal', 'end');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('His dick barely exits your ass before the first jet of cum lands on your inner thigh, another lands on your pubic area and a third hits your wet cunt and fingers. He looks at you and smiles, giving you a quick kiss while he helps you down from the sink. "That was amazing," he comments and you\'re inclined to agree.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You use the sinks to clean yourselves up, exchanging remarks on the sex you just had while you\'re coming down from that post-coital high. As you get cleaned up in the sink, he gets dressed. After cleaning yourself up, you get dressed as well.');
    } else {
      qspCall(s, 'panties', 'dispose');
      scene.text('You use the sinks to clean yourselves up, exchanging remarks on the sex you just had while you\'re coming down from that post-coital high. As you get cleaned up in the sink, he gets dressed. When you start to get dressed, you see him grab your panties. You expect him to give them to you, but he sticks them in his pocket instead. "Um, Lazar. Those are mine," you say, indicating the pocket he just stuck your panties in.');
      scene.text('He just grins at you. "Not anymore." Seeing the look on your face he adds, "Hey, I play for trophies. The more gratifying the challenge, the more I deserve a trophy and fucking you is very gratifying. So I think I earned these."');
      scene.text('"Yeah, well this isn\'t a game; we shared something intimate."');
      scene.text('He laughs slightly. "Everything in life is just a game and trust me, every guy in school wishes he had been me a few minutes ago. Yet it was me, so I earned them."');
      scene.text('You roll your eyes and shake your head as you finish getting dressed.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, did you do the math homework?" he suddenly asks. You're ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, did you do the math homework?" he suddenly asks. You're taken off-guard by the unexpected question - it just doesn't seem to fit in with everything that's just happened - and it takes you a moment to reply. "Yeah, why?"`);
    scene.text('"Mind if I borrow it to fill mine in real quick? I was busy with practice and didn\'t have time." You grin and nod - what\'s a little homework cheating between friends after you just let him fuck you in the ass? The two of you spend the rest of the period talking while he copies your homework.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
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

function enterBoy4(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You peek out, but don\'t see anyone. Confused and a little curious, you leave the stall and take a look around. The next stall door is open and you see Marcus standing there. His pants and underwear are pulled down to his knees and his large, black cock is standing at attention. "Uh… Hey Marcus, did I catch you at a bad time?" you ask carefully.');
  // TODO-QSP: dynamic text: He looks up in startled surprise. He quickly tries to cover up but stops, appare...
  scene.text(`He looks up in startled surprise. He quickly tries to cover up but stops, apparently thinking it's moot since you already saw his erection. Still, his reply is a little awkward. "Oh, uh… Hi ${((s as any).pcs_nickname ?? 0)}. Is there something I can help you with or have you just come to tease me too?"`);
  scene.text('You immediately understand what he\'s playing at: You\'ve heard some of the girls talking about teasing Marcus until he had a hard-on, but didn\'t know they were actually doing it. Still, you feel it\'s better to see if he wants to explain it himself, so you feign ignorance. "What do you mean?"');
  scene.text('"Look, it\'s cool, I get it: \'Tease the American - let\'s see how big a black dick really is.\' It\'s not like girls in the States aren\'t playing games like that, but… Shit, it can be pretty frustrating, you know?" He doesn\'t seem angry, just… annoyed.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Just talk to him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A146', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('"I\'m sorry, Marcus. The other girls can be pretty mean sometimes," you shrug apologetically and turn to give him some privacy. "But if you\'d like to talk, then I have some free time on my hands right now. How about you pull up your pants first, though?"');
    scene.text('"Oh, right. Sorry." You\'re not sure if he blushed or not - his complexion makes it a little difficult to tell. A few seconds later, he steps out of the stall with his pants back on. You can still clearly see the bulge, but you choose to ignore it.');
    scene.text('The two of you talk about Russia and its culture, about America, what he thinks about living here, about movies, music and anything else that strikes your fancy. Before you know it, the bell rings and you gather your things and bid each other farewell before heading to your next class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: 'Help him out', handler: (st: GameState) => {
    if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex['A146'] = 1;
    qspCall(s, 'npcStat', 'A146');
    qspCall(s, 'npc_relationship', 'modify', 'A146', 3);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc0.jpg');
    scene.text('You bite your lower lip in a touch of excitement and, being the selfless girl you are, decide to help him relieve his tension and frustration. You wordlessly step up close to him and start slowly stroking his cock in your hand. He only hesitates for a second before he starts to nuzzle your neck as he pushes your shirt up, exposing your breasts.');
    scene.text('He switches to sucking on your nipples as one of his hands slides up your skirt to rub your pussy. In response, you start stroking his cock faster and feel it practically pulsing in your hand.');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A146');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc1.jpg');
    // TODO-QSP: dynamic text: Looking down at his large black dick, you bite your lower lip in excitement and ...
    scene.text(`Looking down at his large black dick, you bite your lower lip in excitement and wordlessly drop to your knees in front of him. You wrap your lips around the shaft of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock as Marcus looks down at you incredulously, but judging by the moan that escapes him as you take his cock into your mouth, he has no objections.`);
    // TODO-QSP: dynamic text: He just lets you do the work, leaning back against the stall wall and closing hi...
    scene.text(`He just lets you do the work, leaning back against the stall wall and closing his eyes to enjoy you sucking him off. "God damn, you Russian girls know how to suck dick." You take that as a compliment and redouble your efforts, bobbing your head up and down his length. His impressive size doesn't make his manhood easy to handle, but it certainly makes it more exciting to you. For a few minutes, he just lets you do your thing as he observes and savors your blowjob, but he eventually breaks the silence. "Hey ${((s as any).pcs_nickname ?? 0)}? How about you take off your clothes and let me give you the fuck of your life?"`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep sucking [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep sucking [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc2.jpg');
    scene.text('As much as you\'ve enjoyed giving him a blowjob, you don\'t want to have sex with him here in the bathroom, so you continue to suck on his cock. Marcus takes the hint and doesn\'t ask twice; he does, however, place his hand on the top of your head and start thrusting his hips, fucking your mouth. Although he\'s gotten a little rough, he\'s still considerate enough not to force too much of his dick into your mouth.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc4.mp4');
    scene.text('You take him as deep as you can, and hold him there. You\'re sure that whatever thought he had a second ago is all but wiped from memory, ejected along with the groan you hear. You come up for air but go right back down again, deepthroating him and holding him there as if your life depended on it, as if pleasuring him was the only thing that mattered. He starts moaning loudly and the hand on the back of your head suddenly comes to life; it tilts your head back as he murmurs: "Open your mouth and stick out your tongue."');
    scene.text('As you do, he starts jerking off, holding the tip directly over your tongue as spurts of cum start flying onto your tongue and into your mouth. Jet after jet shoots out, more than you\'ve ever seen before, and you wonder if he\'s going to stop at all. He must have had a serious amount saved up; not only is the amount exceptional, but it seems thicker than any sperm you\'re familiar with. He completely coats your tongue in white liquid and more of it runs into your mouth, filling it.');
    scene.text('Letting out one last loud sigh, he steps back and leans against the stall wall, taking a long look at you sitting on your knees with his cum on your tongue. You\'re strangely proud of yourself and let him take one last look at you before you pull your tongue back into your mouth and swallow, feeling it go down your throat like glue, then open wide again to show him you gulped it all down.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.text('He grins as he watches your little display and says, more to himself than you, "Fuck, I love Russian girls…" He pulls up his pants and bends over to give you a quick kiss on the forehead before he finishes getting dressed. You get up and make yourself presentable as well.');
    scene.actions([
      { label: 'Finish', goto: ['gschool_boys_bathroom', 'boy4_end'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to fuck', handler: (st: GameState) => {
    (s as any).Marcus_sextype = 1;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc3.jpg');
    scene.text('You can\'t deny that you want Marcus, and continue to deepthroat his cock as best as you can as you remove your top. You then stand up and remove your skirt as Marcus admires your nude body before grabbing you, pulling you in close and kissing you passionately on the lips. "Your tits are awesome!" he compliments as he squeezes them and gives your nipples a few licks.');
    scene.text('The teasing he\'s endured and your blowjob haven\'t done anything to make him patient, so even though he visibly appreciates your rack, he still turns you around and bends you over. You expect him to go straight for the prize and are already mentally prepared for penetration… except he doesn\'t: He gets down on his knees behind you and starts licking your pussy.');
    scene.text('The sensation is so unexpected and yet so overwhelmingly pleasant that you moan long and loud. "You Americans know how to eat pussy…" you whisper to yourself, but the chuckle that vibrates through your clit tells you that he heard you. You place one foot up on the toilet to help spread your legs as he eats you out and enjoy the simple yet amazing fact that he reciprocates what you did for him.');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    (s as any).Marcus_sextype = 1;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc5.jpg');
    // TODO-QSP: dynamic text: Once he has your pussy good and wet with your juices and his saliva, he stands b...
    scene.text(`Once he has your pussy good and wet with your juices and his saliva, he stands back up and rubs the tip of his cock against your slit. Getting the head of his dick nice and lubed up, he finally slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your pussy, filling you entirely. You expected this fullness in your vagina to be painful, but it's everything but that. He starts pumping into you, slowly working his way deeper into your pussy with each thrust, and each time you expect it to hurt, but it doesn't; he seems to fit you perfectly, even though his size is well above average.`);
    // TODO-QSP: dynamic text: All you can feel is intense, mind-dissolving pleasure that shoots up your spine ...
    scene.text(`All you can feel is intense, mind-dissolving pleasure that shoots up your spine like lightning and grows stronger with every inch of depth he gains. You didn't think he could fit his entire cock inside you and yet, eventually, you feel his balls brushing against your pussy and feel so wonderfully, desperately full. That's when you hear him whisper "I want to fuck your ass, ${((s as any).pcs_nickname ?? 0)}."`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Just keep fucking my pussy" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Just keep fucking my pussy" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).Marcus_sextype = 1;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc6.jpg');
    scene.text('You shake your head. "Please, just keep fucking my pussy…" He starts fucking you deeply and it\'s everything you could want or hope for. Once your moans start getting so loud that they could easily be heard in the hall, he picks up the pace and starts hammering into your pussy, his balls slapping against your clit with each powerful thrust. You feel your need for release grow with every thrust and everything he does only seems to make it better. He leans forward, kisses your neck just below your ear, then unexpectedly whispers "I\'m about to cum."');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc4.mp4');
    scene.text('You pull away slightly and he takes the hint and pulls out of you. You turn around, drop to your knees and immediately go down on him, as if your mouth was drawn to his black cock and enjoy the taste of yourself on him. He starts moaning loudly and the hand on the back of your head suddenly comes to life; it tilts your head back as he murmurs: "Open your mouth and stick out your tongue."');
    scene.text('As you do, he starts jerking off, holding the tip directly over your tongue as spurts of cum start flying onto your tongue and into your mouth. Jet after jet shoots out, more than you\'ve ever seen before, and you wonder if he\'s going to stop at all. He must have had a serious amount saved up; not only is the amount exceptional, but it seems thicker than any cum you\'re familiar with. He completely coats your tongue in white liquid and more of it runs into your mouth, filling it.');
    scene.text('Letting out one last loud sigh, he steps back and leans against the stall wall, taking a long look at you sitting on your knees with his cum on your tongue. You\'re strangely proud of yourself and let him take one last look at you before you pull your tongue back into your mouth and swallow, feeling it go down your throat like glue, then open wide again to show him you gulped it all down.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.text('He grins as he watches your little display and says, more to himself than you, "Fuck, I love Russian girls…" He pulls up his pants and bends over to give you a quick kiss on the forehead before he finishes getting dressed. You get up and make yourself presentable as well.');
    scene.actions([
      { label: 'Finish', goto: ['gschool_boys_bathroom', 'boy4_end'] },
    ]);
  } },
      { label: 'Let him cum inside you', handler: (st: GameState) => {
    (s as any).Marcus_sextype = 1;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc7.jpg');
    scene.text('You glance back at him and grin. He gets the idea and redoubles his efforts to fuck you, his balls slapping against your clit with each powerful thrust. You feel your need for release grow with every thrust and everything he does only seems to make it better. Finally, you feel his dick pulsing inside you as he fills your pussy with his huge load. When he pulls out, you can feel his thick cum slowly leaking out and running down your inner leg.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gschool_boys_bathroom', 'boy4_end'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him fuck your ass', handler: (st: GameState) => {
    (s as any).Marcus_sextype = 2;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc3.jpg');
    scene.text('You can\'t even answer. All you do is give him an almost incoherent \'yes\' - you would let him do anything to you right now as long he just fucks you. He pulls out of you and several of his fingers rub your wet pussy; he teases you a little before rubbing them against your rosebud, lubing it up with your own fluids. He does this several times, even sliding a few fingers into your ass to prepare it as best he can.');
    // TODO-QSP: dynamic text: By the time he pulls his fingers out, you're more than ready for him and feeling...
    scene.text(`By the time he pulls his fingers out, you're more than ready for him and feeling the head of his cock pushing against your asshole is anything but unexpected. He gently eases the tip into your ass, causing you to gasp a little in pain - you were ready, but that doesn't change the fact that he's big. He stops moving and waits before pushing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside a little more.`);
    scene.text('He starts slowly moving back and forth inside your ass, working his way deeper into your bowels as carefully as possible, slowing down whenever he hears a groan of pain or sees you flinch. He may be considerate, but the twitching and screaming tells him everything he needs to know.');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cumshot', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/marcus/sex/school/marc4.mp4');
    scene.text('He suddenly pulls out of your ass and pulls you around and down to your knees - or maybe your legs just gave away - before he tilts your head back as he murmurs: "Open your mouth and stick out your tongue."');
    scene.text('As you do, he starts jerking off, holding the tip directly over your tongue as spurts of cum start flying onto your tongue and into your mouth. Jet after jet shoots out, more than you\'ve ever seen before, and you wonder if he\'s going to stop at all. He must have had a serious amount saved up; not only is the amount exceptional, but it seems thicker than any cum you\'re familiar with. He completely coats your tongue in white liquid and more of it runs into your mouth, filling it.');
    scene.text('Letting out one last loud sigh, he steps back and leans against the stall wall, taking a long look at you sitting on your knees with his cum on your tongue. You\'re strangely proud of yourself and let him take one last look at you before you pull your tongue back into your mouth and swallow, feeling it go down your throat like glue, then open wide again to show him you gulped it all down.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.text('He grins as he watches your little display and says, more to himself than you, "Fuck, I love Russian girls…" He pulls up his pants and bends over to give you a quick kiss on the forehead before he finishes getting dressed. You get up and make yourself presentable as well.');
    scene.actions([
      { label: 'Finish', goto: ['gschool_boys_bathroom', 'boy4_end'] },
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
  scene.build();
}

function enterBoy4End(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/shared/headshots_main/big146.jpg');
  scene.text('"I hope you don\'t think we\'re all teases anymore. Even if we do tease, there\'s normally a big pay off in the end," you tell him as you finish getting the last of your clothes back in place and suggestively wiggle your tongue at him.');
  // TODO-QSP: dynamic text: He laughs. "Well, if that's the case, feel free to tease me any time you want, <...
  scene.text(`He laughs. "Well, if that's the case, feel free to tease me any time you want, ${((s as any).pcs_nickname ?? 0)}. I should get back to class before they start wondering where I went. Talk to you later, okay?" He gives you a final smile and wave as he heads out of the bathroom, leaving you to kill time until the bell rings, but this was definitely a better use of the period.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterBoy5(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/boys.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. Within seconds, you hear a guy\'s voice - you recognize it as Ivan\'s: "Hey, can you smell that?"');
  scene.text('Another guy - you\'re fairly sure it\'s Fedor - replies: "What do you mean, the shit and piss?"');
  scene.text('You hear a muffled smack, as if Ivan had hit his shoulder or something. "No, you idiot. Perfume. I think we have a girl in here…"');
  // TODO-QSP: dynamic text: Not sure what to do, you stay quiet, but hear them opening the stall doors, one ...
  scene.text(`Not sure what to do, you stay quiet, but hear them opening the stall doors, one after the other, working their way down to the one you are in. Finally, your own stall door opens and you see Ivan and Fedor smirking at you, each leaning on the stall on either side of the door. Ivan is the one to greet you. "Hey ${((s as any).pcs_nickname ?? 0)}. What are you doing?"`);
  scene.text('You bite you lower lip before answering. "Cutting class. I needed a break. What about you guys?"');
  if (((s as any).pcs_hotcat ?? 0) >= 5) {
    scene.text('They glance at each other and grin at you before Ivan answers. "We needed a break too, and wanted to have a little fun. What about you? You feel up for a little <i>fun</i>?" The way he says it leaves no doubt in your mind what kind of \'fun\' they have in mind.');
    scene.actions([
      { label: 'Suggest chatting', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A5', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('"We could, you know, just talk? I mean, how have you guys been?" you say, playing dumb with regards to the innuendo and making no move to leave your stall.');
    scene.text('They both audibly sigh in disappointment. "You sure you don\'t want to have some fun?" Fedor asks, but after seeing your expression at his insistence, Ivan thumps him lightly in the chest and whispers "Let it go, man."');
    scene.text('He smiles reassuringly at you. "Yeah sure. We can talk."');
    scene.text('You give Ivan a grateful smile in return and engage the two boys in conversation. The three of you are soon talking about their sparring, fights and training, but also about recently released movies, your favorite music and anything else that strikes your fancy. Before you know it, the bell rings and all of you stop and bid each other farewell, your eyes locking with Ivan\'s for a second as you share another smile before you head to your next class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: '"<i>Fun</i> sounds like fun"', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 3);
    qspCall(s, 'npc_relationship', 'modify', 'A5', 3);
    qspCall(s, 'npcStat', 'A5');
    qspCall(s, 'npcStat', 'A3', 'a');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/boysbj.jpg');
    scene.text('You grin at them - although this was unexpected, you wouldn\'t mind passing the time with them. "What did you boys have in mind?" you ask them in a sultry tone, almost purring out the words.');
    scene.text('Seeing your reaction to Fedor\'s suggestion of fun, they both waste no time in pulling their dicks out of their pants. As if it wasn\'t obvious enough, Fedor feels the need to suggest "Why don\'t you come over here and suck our dicks? That\'ll be fun." Ivan might have punched him for his stupid remark if his gaze wasn\'t completely focused on you.');
    // TODO-QSP: dynamic text: You slide off the toilet, down onto all fours, and crawl over to them on your ha...
    scene.text(`You slide off the toilet, down onto all fours, and crawl over to them on your hands and knees, sitting up once you're between the two. You take Fedor's ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth first and start sucking on it while you use your hand to stroke Ivan's dick.`);
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID ?? 0), 'group');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: After about a minute of licking and blowing Fedor, you switch and start sucking ...
      scene.text(`After about a minute of licking and blowing Fedor, you switch and start sucking Ivan's ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock while stroking Fedor's. He doesn't seem content with just that, so Fedor reaches down and grabs you by the hips to pull you up. You don't resist, following his silent suggestion, but you don't take your mouth off Ivan's cock as you move, your eyes locked with his as you bob up and down his length. Now standing and bent over, Fedor pulls up your skirt and starts rubbing your pussy with his fingers; he may not be the sharpest tool in the shed, but you have to admit, he knows how to hit the right spots. You can't see what he's doing to your pussy, but Ivan can feel the vibrations of your muffled moans.`);
    } else {
      // TODO-QSP: dynamic text: After about a minute of licking and blowing Fedor, you switch and start sucking ...
      scene.text(`After about a minute of licking and blowing Fedor, you switch and start sucking Ivan's ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock while stroking Fedor's. He doesn't seem content with just that, so Fedor reaches down and grabs you by the hips to pull you up. You don't resist, following his silent suggestion, but you don't take your mouth off Ivan's cock as you move, your eyes locked with his as you bob up and down his length. Now standing and bent over, Fedor pulls down your panties and starts rubbing your pussy with his fingers; he may not be the sharpest tool in the shed, but you have to admit, he knows how to hit the right spots. You can't see what he's doing to your pussy, but Ivan can feel the vibrations of your muffled moans.`);
    }
    scene.text('Once you\'re wet, Fedor starts rubbing the tip of his dick against your pussy lips.');
    qspCall(s, 'arousal', 'bj', 3, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/boysfuck.jpg');
    // TODO-QSP: dynamic text: Fedor places one hand on your hip and the other grabs your thigh. He then lifts ...
    scene.text(`Fedor places one hand on your hip and the other grabs your thigh. He then lifts your leg off the ground while Ivan places his hand on the back of your head, both of them helping you to keep your balance as you stand on one leg - having sex with two jocks definitely has its perks. Fedor slips his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your pussy and starts fucking you hard, but his handiwork more than prepared you for it. You moan as he fucks you, but your moans are muffled by Ivan's cock and Fedor's thrusts push you forward, shoving the dick in your mouth deep into your throat.`);
    scene.text('After several minutes, they turn you around so they can switch, and sometime later, they switch again. About the time you expect them to switch once more, Ivan suggests "Hey Fedor, how about you get on the floor so we can both fuck her?"');
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/boysdp.jpg');
    scene.text('Fedor pulls his dick out of you and gets down on his back. You\'ve barely even taken his cock out of your mouth when Ivan lifts you off your feet as if you weighed nothing and starts to lower you down on top of Fedor. Fedor, in turn, grabs your legs and spreads them before he looks for a good spot to hold you. You straddle Fedor, just as they intended, and as the boys lower you down, you feel Fedor\'s dick slip back inside you, causing you to moan softly.');
    // TODO-QSP: dynamic text: Once you're settled after their impressive, if strange, display of strength, Iva...
    scene.text(`Once you're settled after their impressive, if strange, display of strength, Ivan kneels behind you and starts rubbing the tip of his wet dick against your anus. It doesn't take much guesswork to figure out what he has in mind, so you try to relax as he coats your asshole with the saliva you left on him. When he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass, your moan is loud, a mixture of pain and pleasure; You take a moment to relish the tightness and adjust to it before both boys start fucking you, leaving you feeling completely filled. You moan loudly as they both pound you in tandem, your pleasure overtaking your pain.`);
    qspCall(s, 'arousal', 'vaginal', 5, ((s as any).npcID ?? 0), 'group');
    (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
    qspCall(s, 'arousal', 'anal', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Now that was fun', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/boyscum.jpg');
    scene.text('You don\'t know how much time passes, but after a while of blissful ignorance, Fedor starts groaning and lifts you off him so he can pull out of you. He slides out from under you, leaving you on all fours as Ivan continues to pound your ass, who now fucks you twice as hard. You almost want to ask Fedor to get back inside you, but a particularly deep thrust from Ivan causes you to moan and eliminates that thought. Fedor kneels by your face, grabs your head and shoves his cock into your mouth, your tongue working him over at a furious speed as Ivan hammers your ass.');
    qspCall(s, 'arousal', 'anal', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0));
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Shortly after this, Fedor tenses up and holds your head still, his dick buried d...
    scene.text(`Shortly after this, Fedor tenses up and holds your head still, his dick buried deep in your mouth. He shoots his cum deep inside, most of it hitting the back of your throat and getting swallowed instantly, and pumps his manhood even deeper into your mouth a few more times before pulling out and standing up to watch Ivan, who's still pounding your ass. A few seconds later, Ivan groans loudly and buries his dick deep in your ass. You feel a warmth flood inside you as he starts cumming. When his dick leaves your ass, which gapes after his enthusiastic fuck, you feel some of the cum running out. Ivan stands up and smiles. "Fuck, that was great. You're the best ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('Fedor is already washing up at the sink. "Yeah, you\'re one amazing bitch. Uh… I mean that in a good way." You get up as well and go to the sink to get cleaned up as best you can. You look over at them and grin when you find them watching you. "You guys were right: That was fun." They laugh and you keep chatting while you all get dressed and talk about a variety of things in the little bit of time you have left before the bell rings.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('They glance at each other, looking almost disappointed about something before Ivan answers. "So what have you been up to then?"');
    scene.actions([
      { label: 'Chat', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A3', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A5', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
    scene.text('You start talking about your recent class and things you have dealt with and the three of you are soon talking about their sparring, fights and training, but also about recently released movies, your favorite music and anything else that strikes your fancy. Before you know it, the bell rings and all of you stop and bid each other farewell, your eyes locking with Ivan\'s for a second as you share another smile before you head to your next class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoy6(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/stall.jpg');
  if (((s as any).grupTipe ?? 0) !== 4  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
    scene.text('After a few minutes, you hear several boy\'s voices and recognize several of them as gopniks from your class. Several stall doors slam open, their echo loud as thunder and just as startling, and one of them says "Man, you sure?" There is a pause in the noise as another answers "I\'m telling you, I saw her come in here just after the bell rang." A few more doors slam open until, suddenly, your door is the one to slam. You see Dan standing there, grinning at you. "Found her." He steps in and grabs you around the waist, dragging you out of the stall.');
    scene.text('The other boys quickly move over. Within seconds, you find yourself in the middle of five of your gopnik classmates, all leering at you lustfully. You know exactly what they\'re thinking and what they want. You doubt you can reason with them, but perhaps you could scream? You could also try and make a run for it…');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Run out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Run out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).runout = Math.floor(Math.random() * 4) + 1;
    if (((s as any).runout ?? 0) === 1) {
      scene.text('<center><b>School Hall</b></center>');
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      // TODO-QSP: dynamic text: Afraid of what they might do, you use the element of surprise, break through the...
      scene.text(`Afraid of what they might do, you use the element of surprise, break through their circle and run out of the bathroom, hearing them curse behind you. You run down the hall, past several classrooms; you don't even really know where you're going, you just want to put some distance between them and you. You think you're almost in the clear when you hear a loud, commanding voice in the hall behind you. "Where do you think you're going in such a hurry, Miss ${((s as any).pcs_lastname ?? 0)}?" Busted. Sighing, you turn around and see a teacher glaring at you.`);
      // TODO-QSP: dynamic text: "Well, you see, I…" They interrupt you before you can even properly begin an exc...
      scene.text(`"Well, you see, I…" They interrupt you before you can even properly begin an excuse. "I know you have class this period and you're late, Miss ${((s as any).pcs_lastname ?? 0)}. You aren't cutting class now, are you?"`);
      scene.text('You know he already knows the answer, but maybe you can get out of this? "Yes! Uh, I mean, no… I- I mean, yes, I have a class, but I wasn\'t cutting! I was just running late, I, uh, had stuff to do and…" you trail off lamely; you can tell they\'re not buying it for one second.');
      // TODO-QSP: dynamic text: "Be that as it may, Miss <<$pcs_lastname>>, that's no excuse. Now get to the pri...
      scene.text(`"Be that as it may, Miss ${((s as any).pcs_lastname ?? 0)}, that's no excuse. Now get to the principal's office. I'll let her know you're on your way." With that, they point down the hall and wait until you start heading toward the office before returning to their class. With a sigh, and without a choice, you go to the principal's office.`);
      scene.text('The only good thing about this is that you got away from the horny gopniks.');
      scene.actions([
        { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (st as any).demerit = ((st as any).demerit ?? 0) + (10);
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      scene.text('<center><b>School Hall</b></center>');
      scene.img('images/locations/pavlovsk/school/building/gschool_hall02.jpg');
      scene.text('Afraid of what they might do, you use the element of surprise, break through their circle and run out of the bathroom, hearing them curse behind you. You run down the hall, past several classrooms; you don\'t even really know where you\'re going, you just want to put some distance between them and you. Finally, you stop and lean against some lockers - looking back, you don\'t see them and it seems no one noticed you. Sighing, you spend the rest of the period trying not to be spotted.');
      scene.actions([
        { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', goto: ['gschool_boys_bathroom', 'boy6_sub'] },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.text('After a few minutes, you hear several boy\'s voices and recognize several of them as gopniks from your class. Several stall doors slam open, their echo loud as thunder and just as startling, and one of them says "Man, you sure?" There is a pause in the noise as another answers. "I\'m telling you, I saw her come in here just after the bell rang." A few more doors slam open until, suddenly, your door is the one to slam. You see Dan standing there, grinning at you. "Found her." He steps in and grabs you around the waist, dragging you out of the stall.');
      // TODO-QSP: dynamic text: The other boys quickly move over. Within seconds, you find yourself in the middl...
      scene.text(`The other boys quickly move over. Within seconds, you find yourself in the middle of five of your gopnik classmates, all leering at you lustfully. Vitek roughly grabs and squeezes one of your tits. "Come on ${((s as any).pcs_nickname ?? 0)}, let's have some fun. You know you want to… and so do we. Isn't that right?" he asks the others, who nod their heads and start pawing at you as well. You could still get out of this and make them stop - the gopniks are a rowdy bunch, but they're not complete assholes or rapists - but if you make them stop, they'll become angry. That makes giving in and seeing where this goes an option you seriously consider; it could genuinely be fun and would certainly make them like you more if you submitted to their desires. That's how it works, right?`);
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['gschool_boys_bathroom', 'boy6_not'] },
        ]);
      }
      scene.actions([
        { label: 'Submit', goto: ['gschool_boys_bathroom', 'boy6_sub'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).pcs_hotcat ?? 0) < 5) {
        scene.text('After a few minutes, you hear several boy\'s voices and recognize several of them as gopniks from your class. Several stall doors slam open, their echo loud as thunder and just as startling, and one of them says "Man, you sure?" There is a pause in the noise as another answers. "I\'m telling you, I saw her come in here just after the bell rang." A few more doors slam open until, suddenly, your door is the one to slam. You see Dan standing there, grinning at you. "Found her." He steps in and grabs you around the waist, dragging you out of the stall.');
        scene.text('When they see it\'s you, they all look disappointed. They let go of you and walk away, back towards the door, when you hear one say "Well, what the fuck are we going to do now?" and Vitek speaks up. "Shut up, I\'ve got an idea." With that, they leave without another word to you.');
        if ((!((s as any).school_bunk ?? 0))) {
          scene.actions([
            { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
          ]);
        } else {
          scene.actions([
            { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
          ]);
        }
      } else {
        if (((s as any).grupTipe ?? 0) !== 4  &&  ((s as any).pcs_hotcat ?? 0) < 5) {
          qspCall(s, 'mood', 'lower', 'medium');
          qspCall(s, 'stat', '');
          scene.text('After a few minutes, you hear several boy\'s voices and recognize several of them as gopniks from your class. Several stall doors slam open, their echo loud as thunder and just as startling, and one of them says "Man, you sure?" There is a pause in the noise as another answers. "I\'m telling you, I saw her come in here just after the bell rang." A few more doors slam open until, suddenly, your door is the one to slam. You see Dan standing there, staring at you, "Found her. You were right." He steps in and grabs you by the arm, dragging you out of the stall.');
          scene.text('Once they see it\'s you, they look visibly disappointed and somewhat angry. "What the fuck is your ugly ass doing in the guys\' bathroom?" Vitek asks, but before you can even respond Dan speaks up. "Maybe she forgot she was a girl; with a body like that, who could blame her?" The rest all bust out laughing.');
          scene.text('Blushing as the boys laugh at you, you don\'t know what to say before Vitek roughly grabs your arm and shoves you towards the door. "Get your ugly face out of here before you make us sick." The others laugh some more, and not sure what else to do, you leave. You spend the rest of the period roaming the hall, trying not to be seen while wishing you were better looking.');
          scene.actions([
            { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoy6Not(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('You decide to shake your head and try to fend them off. "Not today boys." They don\'t relent and keep pawing at you, one or two even try to push their luck and see if all it takes to sway you is one good squeeze. Vitek and Dan aren\'t as handsy as the others, but aren\'t coming to your aid either. You\'re trying to push through the others, towards the door, and you know that if they really don\'t want to let you leave, there\'s no way you could force your way past them. You push a few of them away and they back off, but by the time you push another off, another moves back in. They seem to be enjoying the game.');
  scene.text('Once near the door, you finally manage break out of the circle, your clothes half pulled off, but you\'re getting a little annoyed with them now and they can clearly hear that when you cry out "I said enough! Back the fuck up! All of you! Now!" All of them stop and Vitek, who has been silently watching you struggle for the last minute or two, shoves you towards the door, his eyes hard. "Then get the fuck out of here, and don\'t come trying to hang out with us." You look at him incredulity - he seriously would \'cast you out\', just because you wouldn\'t have sex with all of them? He couldn\'t possibly be serious…');
  scene.text('It\'s not too late; you could still submit to their desires, if you wanted to… or you could stand your ground and leave. After all, Vitek might not mean that. It\'s always hard to tell with gopniks.');
  qspCall(s, 'willpower', 'sex', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    scene.text('<center><b>School Hall</b></center>');
    scene.img('images/locations/pavlovsk/school/building/gschool_hall02.jpg');
    scene.text('Without another word, you walk out the door. You hear the guys grumbling and calling you names, but you don\'t listen. You manage to sneak into the girls\' bathroom and the rest of the period passes with you trying not to think about how the gopniks might treat you now. You\'ll find out the next time you run into them.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give in', goto: ['gschool_boys_bathroom', 'boy6_sub'] },
  ]);
  scene.build();
}

function enterBoy6Sub(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (3);
  if (((s as any).grupTipe ?? 0) === 4) {
    qspCall(s, 'fame', 'pav', 'sex', 2);
  } else {
    qspCall(s, 'fame', 'pav', 'sex', 5);
  }
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/gang.jpg');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.text('When you don\'t resist, they seem to take that as consent. A few of them grab your arms and hold them tight while the others start roughly pulling your clothes off. They don\'t actually manage to rip them, but they aren\'t treating them with care either and at least one button is torn free in the process. They\'re so rough with you while they do this that you\'re sure they\'ll leave bruises on your body.');
  } else {
    qspCall(s, 'panties', 'dispose');
    qspCall(s, 'stat', '');
    scene.text('When you don\'t resist, they seem to take that as consent. A few of them grab your arms and hold them tight while the others start roughly pulling your clothes off. They don\'t actually manage to rip them, but they aren\'t treating it with care either and at least one button is torn free in the process. Your panties and bra are ripped off of you - in the case of your panties, they literally manage to tear them apart. They\'re so rough with you while they do this that you\'re sure they\'ll leave bruises on your body.');
  }
  scene.text('When you start making too much noise, one of them clamps his hand over your mouth. "Shut up, slut! You\'ll only open your mouth to service our cocks, got it? If you make any noise and get us caught, we\'ll make sure you regret it!"');
  scene.text('You nod your head in understanding and do your best to stay as quiet as you can.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Rough start', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'npcStat', 'A10', 1);
    qspCall(s, 'npcStat', 'A9', 2);
    qspCall(s, 'npcStat', 'A157', 3);
    // TODO-QSP: gs 'npcgeneratec', 0, 'unknown guy', (year - pcs_dob / 10000)
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 4);
    // TODO-QSP: gs 'npcgeneratec', 0, 'unknown guy', (year - pcs_dob / 10000)
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 5);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/gangvag.jpg');
    scene.text('Once your clothes are removed, or at least moved out of the way, one of them bends you over with a shove. Another grabs your hair and twists it painfully, then drags your head over to his crotch where he\'s already stroking his dick. You feel a cock getting shoved into your dry pussy and whoever it is drives it in as deep as it will go, trying to go for balls deep on the first thrust and, failing that, hammering into you with a vengeance. It\'s so painful that you can\'t stay silent, but just as you cry out over the rough treatment, the guy holding you by the hair shoves his dick into your mouth, tightening his grip around your head so much hurts, but he doesn\'t care - all he cares about is fucking your throat.');
    scene.text('They take turns, mostly switching out who is getting to fuck your pussy, but eventually exchanging who gets to fuck your mouth as well. The ones not currently fucking you often smack your ass hard, roughly squeeze one of your breasts or painfully pinch one of your nipples while they wait for their turn.');
    qspCall(s, 'pain', '', 1, 'vaginal', 'stretch');
    // TODO-QSP: gs 'arousal', 'vaginal', 2, $npcID[4], 'group'
    // TODO-QSP: gs 'arousal', 'bj', 2, $npcID[4], 'group'
    // TODO-QSP: gs 'arousal', 'vaginal', 2, $npcID[5], 'group'
    // TODO-QSP: gs 'arousal', 'bj', 2, $npcID[5], 'group'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ganganal1.jpg');
    scene.text('Your uncomfortable spit roasting is interrupted by Roman saying "Lift the bitch up, I want to fuck her ass." Before you even know what\'s going on, one of them on each side of you grabs you, lifting you off the ground. Holding you in a sitting position mid air, they spread your legs and you instinctively wrap your arm around one of their necks. Just as it dawns on you why they lifted you, you feel a cock painfully entering your ass.');
    scene.text('The sudden surge of agony causes you to cry out, the threat about keeping quiet momentarily forgotten, but it gets even worse: As soon as Roman has forced himself all the way in, he starts hammering away at your ass. You do your best to make as little noise as you can while tears run down your face, but it is difficult - the pain only seems to get worse. Before long, the dick is pulled out of your ass and you sigh in relief, but too soon: Another takes its place a few seconds later, and so it continues - the guys take turns fucking your ass or holding you up.');
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    // TODO-QSP: gs 'arousal', 'anal', 6, $npcID[4], 'group'
    // TODO-QSP: gs 'arousal', 'bj', -6, $npcID[5], 'group'
    // TODO-QSP: gs 'arousal', 'anal', 1, $npcID[3], 'group'
    qspCall(s, 'arousal', 'anal', 1, ((s as any).npcID ?? 0), 'group');
    // TODO-QSP: gs 'arousal', 'anal', 1, $npcID[1], 'group'
    // TODO-QSP: gs 'arousal', 'anal', 1, $npcID[2], 'group'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/ganganal2.jpg');
    scene.text('Eventually, one of them complains about holding you up and they let you down, bending you over the instant your feet touch the floor. One cock is shoved back into your ass again while another is shoved into your mouth. They both fall into a jackhammer rhythm, both guys trying to shove their cocks as deep into your holes as they physically can. Someone, either the one fucking your throat or one of the others who\'s feeling sadistic, grabs your hair and twists it painfully, holding your head in place so you can\'t pull away when your gag reflex acts up.');
    scene.text('You\'re so dazed by your suffering that you\'re barely even aware that they\'re talking, let alone that they\'re talking and joking about you. As they switch places, they start arguing about whose turn it is to fuck you where or who is taking too long on his turn.');
    (s as any).temp_i = 0;
    // TODO-QSP: :boy6_sub_loop1
    // TODO-QSP: gs 'arousal', 'anal', 1, $npcID[temp_i], 'group'
    // TODO-QSP: gs 'arousal', 'bj', -1, $npcID[temp_i], 'group'
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < 6) {
      // TODO-QSP: jump 'boy6_sub_loop1'
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/gangdp.jpg');
    scene.text('It\'s up to Vitek to interrupt them and mediate. "Hey, no need to fight guys. Our whore knows her place: She\'s a totally obedient little slut, with three holes and two hands. Watch." He drags you by your hair into one of the stalls and dunks your hair into the toilet bowl several times, laughing when you don\'t protest, scared of how he might react if you did. He then drags you back out and shoves you back to the others. "What are you waiting for? Fill her up, boys!"');
    scene.text('They laugh, and you soon find yourself pulled down on top of one of them, straddling him as he enters your pussy. Another shoves his dick into your ass while a third shoves his cock down your throat. All three of them start roughly fucking you while the last two grab your arms and put your hands on their dicks. With the toilet water dripping down your back and your pussy, ass and throat burning and hurting from getting violated, you know that it will be over faster if you play along, so you start jerking both of them off, almost grateful for the dick you have to suck because it muffles the cries you wouldn\'t be able to contain.');
    scene.text('At the very least, the guys seem to be much happier now that they\'re all getting some at the same time. They\'re not quite considerate of you but at least they have less frustrations to take out on you, making what could be utter torture almost tolerable. You lose track of time, and they trade positions so often you aren\'t even sure who is fucking you where.');
    (s as any).temp_i = 0;
    // TODO-QSP: :boy6_sub_loop2
    // TODO-QSP: gs 'arousal', 'hj', 1, $npcID[temp_i], 'group'
    // TODO-QSP: gs 'arousal', 'bj', 1, $npcID[temp_i], 'group'
    // TODO-QSP: gs 'arousal', 'vaginal', 1, $npcID[temp_i], 'group'
    // TODO-QSP: gs 'arousal', 'anal', -1, $npcID[temp_i], 'group'
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < 6) {
      // TODO-QSP: jump 'boy6_sub_loop2'
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum dumpster', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/gangcum.jpg');
    scene.text('The bell hasn\'t rang yet, even though it feels like they\'ve been doing this for hours. All three of your holes are raw from the dry insertions and all the rough fucking they had to withstand. You\'re reaching your breaking point where even the pain you thought was tolerable is getting so overbearing you might pass out. Luckily, by the sounds of it, the guys are finally getting close to finishing.');
    scene.text('They withdraw from your holes, one by one, and roughly drag you off the guy you were straddling. You\'re forced to sit on the floor as all of them gather around you, jerking themselves off like there\'s no tomorrow. One by one, they shower you in spurts and drops of cum; it coats your face, lips, hair, breasts, arms, runs down to your stomach, your ass, your pussy, your legs… By the time they\'re done, it feels like all of you is covered in cum.');
    scene.text('Once they\'re done, Dan says "Now THAT is one well-trained slut." He laughs at you, still sitting on the ground, and the boys gather up their things and leave.');
    (s as any).temp_i = 0;
    (s as any).temp_is_known = 1;
    // TODO-QSP: :boy6_sub_loop3
    if (((s as any).temp_i ?? 0) >= 4) {
      (s as any).temp_is_known = 0;
    }
    // TODO-QSP: gs 'cum_call', 'labia', $npcID[temp_i], temp_is_known, '', '', 8
    // TODO-QSP: gs 'cum_call', 'butt', $npcID[temp_i], temp_is_known, '', '', 8
    // TODO-QSP: gs 'cum_call', 'face', $npcID[temp_i], temp_is_known, '', '', 8
    // TODO-QSP: gs 'cum_call', 'breasts', $npcID[temp_i], temp_is_known, '', '', 8
    // TODO-QSP: gs 'cum_call', 'hair', $npcID[temp_i], temp_is_known, '', '', 8
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < 6) {
      // TODO-QSP: jump 'boy6_sub_loop3'
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/gangaftermath.jpg');
    scene.text('You stand up, wobbly, your tears doing nothing to wash off the cum. You go to the sink and clean yourself up as best you can, which is a lot more than you expected but not enough to <i>feel</i> clean. When you think you\'ve done everything you can and have cried enough to pull yourself back together, you gather your clothes and get dressed. The bell rings as you button up your shirt and remember the ripped-off button. You hurriedly search, find and pocket it and check yourself in the mirror to make sure there\'s no obvious bruises or cum stains and that it isn\'t too obvious you\'ve been crying. Then, with one last deep breath, you head to class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
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
  scene.build();
}

function enterCompanyb(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gschool_randperson', 'couple_generator');
  (s as any).btoilet_rand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).btoilet_rand ?? 0) <= 30) {
    scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb1'] }]);
  } else {
    if (((s as any).btoilet_rand ?? 0) <= 60) {
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb2'] }]);
    } else {
      if (((s as any).btoilet_rand ?? 0) <= 80) {
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb3'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb4'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCompanyb1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/voyvag.mp4');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. Soft murmured voices echo in the room, one male, the other female; you can\'t quite make out what they\'re saying, but there\'s some rustling of clothes, shortly followed by female moans. You creep up to the stall door, crack it open, and peek outside.');
  // TODO-QSP: dynamic text: The couple has their backs turned to you, but you can see that her skirt is flip...
  scene.text(`The couple has their backs turned to you, but you can see that her skirt is flipped up and his pants are pulled down - you can't tell if the guy is a student or a teacher at first, then you catch a glimpse of ${((s as any).rand_boy ?? 0)}'s face in the mirror. He has ${((s as any).rand_girl ?? 0)} up against the sinks, partially bent over them, and is fucking her from behind. Her face is nearly touching the mirror as he pounds her pussy doggystyle and she seems to be loving every second of it.`);
  scene.text('Afraid you might get caught, you close the door and move back to sit on the toilet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait them out', handler: (st: GameState) => {
    scene.text('You decide to keep quiet and wait until they\'re done. She gets very loud after a while, obviously having an orgasm, and moans obscenities, encouraging him to fuck her harder. A few minutes later, he grunts as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/masturbate\' + rand(1, 2) + \'.mp4');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: Listening to <<$rand_girl>> getting her pussy violated, the constant slapping so...
      scene.text(`Listening to ${((s as any).rand_girl ?? 0)} getting her pussy violated, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn't, you know it's risky, but you just can't resist: You hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.`);
      // TODO-QSP: dynamic text: You rub your sensitive little nub carefully to ease yourself into the pleasure; ...
      scene.text(`You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don't stay in control, you're going to make sounds and you don't want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck ${((s as any).rand_boy ?? 0)} is giving a girl you don't know. You add your other hand to the mix, rubbing your clit while you're finger fucking yourself, faster and faster as they get louder and louder, and even play with your asshole a little bit, encouraged by the girl's audible pleasure.`);
    } else {
      // TODO-QSP: dynamic text: Listening to <<$rand_girl>> getting her pussy violated, the constant slapping so...
      scene.text(`Listening to ${((s as any).rand_girl ?? 0)} getting her pussy violated, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn't, you know it's risky, but you just can't resist: You pull your panties off, hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.`);
      // TODO-QSP: dynamic text: You rub your sensitive little nub carefully to ease yourself into the pleasure; ...
      scene.text(`You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don't stay in control, you're going to make sounds and you don't want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck ${((s as any).rand_boy ?? 0)} is giving a girl you don't know. You add your other hand to the mix, rubbing your clit while you're finger fucking yourself, faster and faster as they get louder and louder, and even play with your asshole a little bit, encouraged by the girl's audible pleasure.`);
    }
    qspCall(s, 'arousal', 'clit_finger', 20, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.text('By the sound of it, you came in perfect unison with her and only a few seconds later, you hear him grunt as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCompanyb2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/voyanal.mp4');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. Soft murmured voices echo in the room, one male, the other female; you can\'t quite make out what they\'re saying, but there\'s some rustling of clothes, shortly followed by female moans. You creep up to the stall door, crack it open, and peek outside.');
  // TODO-QSP: dynamic text: The couple has their backs turned to you, but you can see that her skirt is flip...
  scene.text(`The couple has their backs turned to you, but you can see that her skirt is flipped up and his pants are pulled down - you can't tell if the guy is a student or a teacher, but you soon catch sight of ${((s as any).rand_boy ?? 0)}'s face. He has ${((s as any).rand_girl ?? 0)} bent over near the bathroom window and she's looking back at him and in your direction - or at least she would be if she didn't have her eyes closed. You can tell that he's fucking her ass and she seems to be loving it. Her soft moans of pleasure echo in the room and the sight is entrancing, but if she opened her eyes right now, you're pretty sure she'd see you.`);
  scene.text('Afraid you might get caught, you close the door and move back to sit on the toilet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    scene.text('You decide to keep quiet and wait until they\'re done. She gets very loud after a while, obviously having an orgasm, and moans obscenities, encouraging him to fuck her ass harder. A few minutes later, he grunts as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/masturbate\' + rand(1, 2) + \'.mp4');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: dynamic text: Listening to <<$rand_girl>> getting her ass violated, the constant slapping soun...
      scene.text(`Listening to ${((s as any).rand_girl ?? 0)} getting her ass violated, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn't, you know it's risky, but you just can't resist: You hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.`);
      // TODO-QSP: dynamic text: You rub your sensitive little nub carefully to ease yourself into the pleasure; ...
      scene.text(`You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don't stay in control, you're going to make sounds and you don't want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck ${((s as any).rand_boy ?? 0)} is giving a girl you don't know. You add your other hand to the mix, rubbing your clit while you're finger fucking yourself, faster and faster as they get louder and louder, and even play with your asshole a little bit, encouraged by the girl's audible pleasure.`);
    } else {
      // TODO-QSP: dynamic text: Listening to <<$rand_girl>> getting her ass violated, the constant slapping soun...
      scene.text(`Listening to ${((s as any).rand_girl ?? 0)} getting her ass violated, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn't, you know it's risky, but you just can't resist: You pull your panties off, hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.`);
      // TODO-QSP: dynamic text: You rub your sensitive little nub carefully to ease yourself into the pleasure; ...
      scene.text(`You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don't stay in control, you're going to make sounds and you don't want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck ${((s as any).rand_boy ?? 0)} is giving a girl you don't know. You add your other hand to the mix, rubbing your clit while you're finger fucking yourself, faster and faster as they get louder and louder, and even play with your asshole a little bit, encouraged by the girl's audible pleasure.`);
    }
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'masturbate');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.text('By the sound of it, you came in perfect unison with her and only a few seconds later, you hear him grunt as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCompanyb3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplesuck.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. Soft murmured voices echo in the room, one male, the other female; you can\'t quite make out what they\'re saying, but there\'s some rustling of clothes, shortly followed by female moans. You creep up to the stall door, crack it open, and peek outside.');
  scene.text('You see Arkadi with his pants around his ankles, Anushka squatting in front of him and sucking his dick. You watch for a few seconds and you\'d like to watch even longer, but Arkadi keeps looking around, and in your direction. You duck back into the stall before you get spotted… and feel yourself getting very aroused from watching them, listening to them, even just knowing what they are doing. The sucking sounds soon stop and are quickly replaced by soft female moans of pleasure.');
  if (((s as any).pcs_horny ?? 0) < 70) {
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.text('You banish these thoughts from your mind - with great effort - and decide to keep quiet and wait until they\'re done fucking. She gets very loud after a while, obviously having an orgasm, and moans obscenities, encouraging him to fuck her harder. A few minutes later, he grunts as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    ]);
  } else {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Wait and resist masturbating [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Wait and resist masturbating [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'end');
    scene.text('You banish these thoughts from your mind - with great effort - and decide to keep quiet and wait until they\'re done. She gets very loud after a while, obviously having an orgasm, and moans obscenities, encouraging him to fuck her ass harder. A few minutes later, he grunts as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_girls_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_girls_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/masturbate\' + rand(1, 2) + \'.mp4');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('Listening to Anushka getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
      scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don\'t stay in control, you\'re going to make sounds and you don\'t want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Arkadi is giving Anushka. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
    } else {
      scene.text('Listening to Anushka getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You pull your panties off, hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
      scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don\'t stay in control, you\'re going to make sounds and you don\'t want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Arkadi is giving Anushka. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
    }
    qspCall(s, 'arousal', 'vaginal_finger', 20, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.text('By the sound of it, you came in perfect unison with her and only a few seconds later, you hear him grunt as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    { label: 'Join them', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
  }, goto: ['gschool_boys_bathroom', 'Join them'] },
  ]);
  scene.build();
}

function enterJoinThem(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplefuck.jpg');
  scene.text('You step out of the stall and see Arkadi has Anushka bent over, up against one of the stalls, and is fucking her hard and fast. He may have been looking around before but he seems completely oblivious to you now; she, on the other hand, is looking right at you and smiling, as if she had been expecting you.');
  if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).anushkaQW ?? 0)?.['sex'] >= 10  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
    scene.text('Between her moans of pleasure, she asks "What are you waiting for? Oh… Take your clothes off and join us!" Arkadi looks confused for a second, his blood-deprived brain having trouble assessing what Anushka has said, and to whom. It takes him another second or so to finally notice you, but when he does, he grunts his agreement and motions his head for you to come over.');
    scene.text('You strip off your clothes as you watch them fuck, locking eyes with Anushka and unconsciously lingering on your nipples and pussy as you remove your underwear. Once you\'re naked, your hands begin exploring your body, finding your clit with ease, but Anushka moans for you to come closer, and when you do she starts rubbing your pussy and sucking on your nipple, eliciting the highest moans from you. You return the favor, squeezing her tits, stroking her clit and brushing against Arkadi\'s balls every time he thrusts back into her, and after only a few seconds of this, Anushka cries out, partially muffled by your breast in her mouth. Her body shakes as she orgasms and you can see the tension in her body, feel how much she has to focus not to bite down on your nipple and to keep masturbating you. Once she settles down, he pulls out of her, shoves her aside and grabs your hand, pulling you over to him.');
    qspCall(s, 'arousal', 'foreplay', 5, 'group');
    scene.actions([
      { label: 'Your turn', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['toilet'] = 1;
    qspCall(s, 'npcStat', 'A156');
    qspCall(s, 'npcStat', 'A144', 'a');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/coupleturn.jpg');
    // TODO-QSP: dynamic text: He lifts one of your legs off the ground and turns you sideways from him. Your l...
    scene.text(`He lifts one of your legs off the ground and turns you sideways from him. Your leg is barely up in the air when you feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock penetrate your pussy. His dick is already wet and lubed up from Anushka's pussy, but your own slit is absolutely soaked by now and it slides right in, all the way until you feel his balls come to rest against your lower lips. Your moans and the pleasure you're feeling increase tenfold when he starts fucking you as hard and fast as he can, just like he was doing to Anushka, and you would be impressed with his stamina if you weren't so occupied with enjoying this.`);
    scene.text('Anushka recovers in the meantime and steps up to you, kissing you, her tongue darting into your mouth while her hands squeezes your breast or slides down to rub your clit. Her passion is infectious - she seems to be still just as turned on as she was before her orgasm.');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['sex'] = ((s as any).anushkaQW['sex'] ?? 0) + (1);
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'kiss', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/couplecum.jpg');
    scene.text('He keeps going through your orgasm for some time before he suddenly reaches out, grabs Anushka by the hair and pulls her down. She drops to her knees and he instantly pulls his cock out of your pussy and shoves it straight into her mouth. She doesn\'t seem to mind - on the contrary, she\'s blowing him like nothing makes her happier. Arkadi places a hand on your shoulder, pushing you down, and Anushka seems to concur, grabbing your arm and encouraging you to join her. You sink down to your knees beside her, and as soon as they touch the ground, he pulls out of her mouth and shoves his cock straight into yours. You do your best to follow Anushka\'s example and give him the best blowjob you can while she sucks his balls, and after a minute or so, you switch roles.');
    scene.text('When he pulls his dick out of her mouth again and you\'ve already half-opened yours to take his cock back into it, he grunts and starts jerking himself rapidly. Only a few strokes later, spurts of hot cum land on both you and Anushka, covering your lips, face and even splattering over your breasts. Once he\'s finished cumming, he sticks his dick between Anushka\'s lips and she enthusiastically cleans him up. "Fuck, that was great. You two are some fine grade-A sluts." When his dick is sufficiently cleaned, Anushka starts licking the cum off your face and body, and you return the favor. Once you\'ve both lapped it all up, she starts kissing you again, as deep as before, swapping his cum back and forth between your mouths.');
    scene.text('He lights up a cigarette as he watches the two of you and gives his mostly limp cock a few rubs. "Shit, if you two keep that up, I\'ll need another round!" he laughs, and the two of you smile as you continue making out. Finally, Anushka breaks the kiss and gets up, swallowing most of his sperm herself. You swallow the bit that is left in your mouth, then get up as well and, along with the others, start cleaning up and getting dressed. Just about the time you finish dressing, the bell rings. As Arkadi walks out without another word, Anushka grabs you roughly by the chin. "We\'re going to have to do this again sometime, bitch. That was just too much fun." Before you can even respond to her comment, she kisses you deeply before she walks out as well, shooting you a smoldering look over her shoulder while licking her lips. Her words and actions leave you breathless; that girl is a maelstrom of lust and passion and it\'s hard not to get caught in it. You then remember the bell, hurry to straighten out your clothes and head to class, still feeling her lips on you.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('Between her moans of pleasure, she asks "You like watching? Well enjoy the show!" Arkadi looks confused for a second, his blood-deprived brain having trouble assessing what Anushka has said, and to whom. It takes him another second or so to finally notice you, but when he does, he grunts his agreement.');
    scene.text('You watch as he fucks her from behind. He hammers her hard as she hangs onto one of the stall door frames to keep her balance, moaning and crying out in pleasure.');
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'group');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/masturbate\' + rand(1, 2) + \'.mp4');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('Listening to Anushka getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
      scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Arkadi is giving Anushka. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
    } else {
      scene.text('Listening to Anushka getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You pull your panties off, hike up your skirt and spread your legs. Your hand slides down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
      scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure, After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Arkadi is giving Anushka. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
    }
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.text('Anushka starts to scream as her body is rocked by muscle spasms as she has an orgasm. Arkadi just fucks her right through her orgasm before pulling out and pushing her down. She quickly turns around and drops to her knees, opening her mouth and sticking out her tongue. He gives his cock a few jerks before his cum starts flying all over her face and into her mouth. Once he finishes, she sucks his dick, sucking out the last few drops of cum from him. Afterwards, as he gets dressed, she uses her fingers to clean her face, sucking the cum from her fingers before she gets dressed as well. As she finishes getting dressed, she looks over at you and winks. "Hope you enjoyed the show." The two of them then leave.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Just watch', handler: (st: GameState) => {
    if (!(s as any).anushkaQW) (s as any).anushkaQW = {}; (s as any).anushkaQW['toilet'] = 1;
    qspCall(s, 'npcStat', 'A156');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/coupleturn.jpg');
    // TODO-QSP: dynamic text: He lifts one of her legs off the ground and turns her sideways. Her leg is barel...
    scene.text(`He lifts one of her legs off the ground and turns her sideways. Her leg is barely up in the air when his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock penetrates her pussy. You would be impressed with his stamina if you weren't so occupied with enjoying this.`);
    scene.text('Anushka starts to scream as her body is rocked by muscle spasms as she has an orgasm. Arkadi just fucks her right through her orgasm before pulling out and pushing her down. She quickly turns around and drops to her knees, opening her mouth and sticking out her tongue. He gives his cock a few jerks before his cum starts flying all over her face and into her mouth. Once he finishes, she sucks his dick, sucking out the last few drops of cum from him. Afterwards, as he gets dressed, she uses her fingers to clean her face, sucking the cum from her fingers before she gets dressed as well. As she finishes getting dressed, she looks over at you and winks. "Hope you enjoyed the show." The two of them then leave.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCompanyb4(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/teachers1.mp4');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. Soft murmured voices echo in the room, one male, the other female; you can\'t quite make out what they\'re saying, but there\'s some rustling of clothes, shortly followed by female moans. You creep up to the stall door, crack it open, and peek outside.');
  scene.text('You see Mr. Kuznetsov standing near the sinks with his pants around his ankles while Miss Orlov is down on her knees with her top pulled down. She has his cock in her mouth, sucking it for all she is worth. They both seem to be greatly enjoying themselves. You know you should stop watching in case you get caught, but how often do you get to see two of your teachers go at it?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/teachers2.mp4');
    scene.text('You decide to keep watching them. She sucks his cock for a while and neither seem to be aware of your presence as they are too engrossed in each other. He pulls her up, turns her around and bends her over the sinks, pulling her panties down as she hikes up her skirt. He moves up and starts fucking her, slow but passionate at first but as she begins to moan louder, he picks up his pace and before long, he\'s pounding her like crazy.');
    scene.text('It doesn\'t take much longer until Miss Orlov is having a screaming orgasm and Mr. Kuznetsov is forced to put his hand over her mouth to muffle her cries of ecstasy. Some time after she finishes, he pulls out of her and she gets back on her knees and starts sucking his cock again. Seconds later he starts grunting, obviously cumming in her mouth. Not a single drop escapes her mouth; she milks his cock of every last drop before removing it from her mouth.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue playing on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
    scene.actions([
      { label: 'Masturbate', goto: ['gschool_boys_bathroom', 'masturbateb4'] },
    ]);
  } },
    { label: 'Wait them out', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'stat', '');
    scene.text('You decide to keep quiet and wait until they\'re done. She gets very loud after a while, obviously having an orgasm, and moans obscenities, encouraging him to fuck her harder. A few minutes later, he grunts as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue playing on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    { label: 'Masturbate', goto: ['gschool_boys_bathroom', 'masturbateb4'] },
  ]);
  scene.build();
}

function enterMasturbateb4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  }
  qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
  qspCall(s, 'arousal', 'end');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/masturbate\'+ rand(1, 2) +\'.mp4');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.text('Listening to Miss Orlov getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You pull your panties off, hike up your skirt and spread your legs. Your hands slide down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
    scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don\'t stay in control, you\'re going to make sounds and you don\'t want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Mr. Kuznetsov is giving Miss Orlov. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
  } else {
    scene.text('Listening to Miss Orlov getting pounded, the constant slapping sounds of flesh and her moans of pleasure is exciting - too exciting for you. You know you shouldn\'t, you know it\'s risky, but you just can\'t resist: You hike up your skirt and spread your legs. Your hands slide down your thigh, then back up towards your crotch. Your pussy lips are already swollen and starting to get wet, and your clit stands out as if to make it easier for you to find it.');
    scene.text('You rub your sensitive little nub carefully to ease yourself into the pleasure; if you don\'t stay in control, you\'re going to make sounds and you don\'t want them to notice you. After teasing yourself for a bit, you sink two of your fingers into your wet hole, gasping soundlessly, and mimic the fuck Mr. Kuznetsov is giving Miss Orlov. You add your other hand to the mix, rubbing your clit while you\'re fingerfucking yourself, faster and faster as they get louder and louder.');
  }
  scene.text('By the sound of it, you came in perfect unison with her and only a few seconds later, you hear him grunt as well. You then hear the water running and they talk in low voices before you hear the door open and close, and all is quiet once more.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterCaughtb(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 1) <= 50) {
    scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb2'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCaughtb1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/caught1.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You peek out and see one of your teachers, Mr. Vasilyev, standing at the mirror. You duck back into the stall, close the door as quietly as you can and sit down on the toilet, your heart beating like crazy, hoping he didn\'t notice you. You hear his footsteps coming closer, closer… and stop, right outside your stall door.');
  scene.text('"I saw you in the mirror, young lady!" he says sternly as he pushes the door open. "What do you think you\'re doing in the boy\'s room anyway? Skipping class?"');
  if (((s as any).school_bunk ?? 0) === 1) {
    // TODO-QSP: dynamic text: His eyes fall on the smoldering cigarette on the ground and his eyes narrow. "Sm...
    scene.text(`His eyes fall on the smoldering cigarette on the ground and his eyes narrow. "Smoking in school, I see. I really thought you were smarter than that, Miss ${((s as any).pcs_lastname ?? 0)}."`);
  }
  scene.text('Mr. Vasilyev shakes his head. He looks more disappointed than angry. "Well come on, young lady. Get down to the principal\'s office." He points in the direction of the bathroom door.');
  scene.text('You don\'t know if or how you could get out of this mess. He knows you\'re supposed to be in class, so there\'s no point in trying to lie to him about that, but maybe you can convince him to let you off with a warning or something?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
    { label: 'Sweet talk him', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    qspCall(s, 'gschool_events', 'sweet', 'normal');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('You hang your head and feign shame as best you can. "I know, and I\'m sorry Mr. Vasilyev, but I was feeling stressed out and I just needed a break, just a few minutes alone. I know I shouldn\'t have, but I couldn\'t help it." You give him a pleading look. "Please, please don\'t report me. I promise I won\'t do it again."');
      scene.text('Mr. Vasilyev looks at you and snorts. "Do you really think I\'m dumb enough to fall for that?" He doesn\'t wait for your reply and reaches out, grabs you by the arm and pulls you out of the stall before leading you out of the bathroom. "Come on, I\'m taking you to the principal\'s office."');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to Principal\'s Office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/bathroom/sweettalk\'+rand(1, 2)+\'.jpg');
      scene.text('You hang your head and feign shame as best you can. "I know, and I\'m sorry Mr. Vasilyev, but I was feeling stressed out and I just needed a break, just a few minutes alone. I know I shouldn\'t have, but I couldn\'t help it." You give him a pleading look. "Please, please don\'t report me. I promise I won\'t do it again."');
      scene.text('Mr. Vasilyev looks at you and sighs. You think you can see pity in his eyes. "Okay. I\'ll let you off with a warning and you take some time to collect yourself, but no more cutting class, you hear me?" You nod that you understand, then he shakes his head, mumbles something that sounds like "my good nature be damned" and goes about his business. A few seconds later, the bathroom is quiet again.');
      if ((!((s as any).school_bunk ?? 0))) {
        scene.actions([
          { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      }
    }
  } },
    { label: 'Suggest a blowjob', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/seduction.jpg');
    scene.text('You get down on your knees in front of him and hike up your skirt a little to reveal your legs. When you\'re sure you have his eyes on you, you look up at him and suggestively lick your lips. "You seem tense, sir. How about I help you relax a little and you just pretend you didn\'t see me here?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'gschool_events', 'sweet', 'sex');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('Mr. Vasilyev looks at you and snorts. "Please don\'t embarrass yourself, or me, with such juvenile attempts at seduction. Did you really think that would work on me?" He doesn\'t wait for your reply but reaches out, grabs you by the arm and pulls you out of the stall before leading you out of the bathroom. "Come on, I\'m taking you to the principal\'s office."');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      qspCall(s, 'npcStat', 'A128');
      scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtbj.jpg');
      scene.text('He looks down at you and seems to freeze. He doesn\'t say anything, doesn\'t move away either - all he does is look at you, transfixed with your lips. You decide to take that as a yes and reach out to unzip his pants. You reach inside and feel that his dick is almost hard already.');
      // TODO-QSP: dynamic text: He pulls his pants down just enough to release his manhood and make it easier fo...
      scene.text(`He pulls his pants down just enough to release his manhood and make it easier for you. You give him an appreciative look and stroke his dick a few times until it's fully erect, then lean forward and start licking it; you lick up and down the shaft and run your tongue around the head, your eyes locked with his before you smile at him and take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips tightly around his dick and start bobbing your head, stroking his cock with your lips as your tongue continues making its rounds. He rests one hand on the top of your head, but he lets you completely control the action.`);
      scene.text('You caress and fondle his balls with one of your hands while the other strokes him in unison with your head\'s movement. You increase your speed over time and take him as deep into your mouth as you can without gagging. He starts moaning and you feel his hand dig into your hair, telling you that he\'s getting close.');
      qspCall(s, 'arousal', 'bj', 10, 'dom');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtcum.jpg');
    scene.text('You pick up the pace even more since you want him finish soon. "I\'m about to cum!" he mutters weakly, as if trying to warn you, but you don\'t care and suck him even harder. He starts grunting and you feel his dick throbbing in your mouth before he suddenly pulls your head away, his hand in your hair firmly gripping you.');
    scene.text('As soon his dick loudly pops out of your mouth, he jerks it a few times while pointing it at you. It soon starts spurting warm cum all over your face, mostly around your mouth. When he finishes, he rubs the tip of his dick against your lips and then shoves it back into your mouth, the sight of you covered in his cum emboldening him. You look up at him while you suck his cock clean, smiling around him as you feel him getting soft in your mouth. He then pulls out of your mouth and tucks his dick back into his pants.');
    // TODO-QSP: dynamic text: Without a word, he walks over to one of the sinks and washes his hands; he seems...
    scene.text(`Without a word, he walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see that he's looking at you in the mirror. Finally, he smiles. "Feel free to cut class any time you like, ${((s as any).pcs_firstname ?? 0)}. I'll happily keep your secret." With a chuckle, he leaves - in fact, you think you can hear him whistling outside as he walks away.`);
    scene.text('You go to the mirror yourself, clean yourself up and fix your hair. That wasn\'t too bad, you think, and at least you have the rest of the period to yourself.');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Offer sex', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/bendover.jpg');
    scene.text('You get up and walk past him, out of the stall, then bend over against the wall. One of your hands runs down to your ass and you slowly hike your skirt enough for him to see a hint of your crotch. "I know I\'ve been a bad, bad girl… and I don\'t want any demerits. If you don\'t report me, then I\'ll let you fuck me, sir." You follow your offer up with an inviting wiggle of your ass.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'gschool_events', 'sweet', 'sex');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('Mr. Vasilyev looks at you and snorts. "Please don\'t embarrass yourself, or me, with such juvenile attempts at seduction. Did you really think that would work on me?" He doesn\'t wait for your reply but reaches out, grabs you by the arm and pulls you out of the stall before leading you out of the bathroom. "Come on, I\'m taking you to the principal\'s office."');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/bathroom/seduction.jpg');
      scene.text('Mr. Vasilyev stares at you for a long time, seemingly considering his options; you can see one of those \'options\' getting hard in his pants while he stares at your ass. You smile and tug at your skirt, causing it to rise and fall just a tiny bit every time. Only a few seconds later, he walks towards you while pulling out his dick and stroking it. When he reaches you, he pushes you down. "Get on your knees and give me a blowjob."');
      scene.text('You do as he says and reach out for his cock.');
      scene.actions([
        { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A128');
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtbj.jpg');
    // TODO-QSP: dynamic text: You stroke his dick a few times until it's fully erect, then lean forward and st...
    scene.text(`You stroke his dick a few times until it's fully erect, then lean forward and start licking it; you lick up and down the shaft and run your tongue around the head, your eyes locked with his before you smile at him and take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips tightly around his dick and start bobbing your head, stroking his cock with your lips as your tongue continues making its rounds. He rests one hand on the top of your head, but he lets you completely control the action.`);
    scene.text('You caress and fondle his balls with one of your hands while the other strokes him in unison with your head\'s movement. You increase your speed over time and take him as deep into your mouth as you can without gagging.');
    qspCall(s, 'arousal', 'bj', 5, 'dom');
    qspCall(s, 'stat', '');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtcum.jpg');
    scene.text('You suck him for a little longer until he starts groaning and pulls his dick out of your mouth. He holds it right in front of your mouth and jerks it a few times. It starts spurting warm all over your face, mostly around your mouth. When he finishes, he rubs the tip of his dick against your lips and then shoves it back into your mouth, the sight of you covered in his cum emboldening him. You look up at him while you suck his cock clean, smiling around him as you feel him getting soft in your mouth. He pulls out of your mouth and tucks his dick back into his pants.');
    // TODO-QSP: dynamic text: Without a word, he walks over to one of the sinks and washes his hands; he seems...
    scene.text(`Without a word, he walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see that he's giving you sideways glances. Finally, he smiles. "Feel free to cut class any time you like, ${((s as any).pcs_firstname ?? 0)}. I'll happily keep your secret."`);
    scene.text('You smile back. "If I get \'punished\' like that every time I skip class, I will." He chuckles at that, shakes his head, then leaves the bathroom - you think you can hear him whistling outside as he walks away. That was amazing and you also have the rest of the period to yourself, even if you have his cum dripping down your face.');
    qspCall(s, 'cum_call', 'face', 'A128', 1);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughteat.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('He manhandles you until you\'re laying on your back on top of the toilet seat and pushes your skirt up. His fingers soon find your pussy and he rubs your clit before he gets down on his knees and starts eating you out. He\'s fairly talented and you just moan as you lay back and enjoy it. Just as it starts to really feel good, he stops and you see a condom in his hand before he puts it on. As he does that, you try to get comfortable.');
    } else {
      scene.text('He manhandles you until you\'re laying on your back on top of the toilet seat and pushes up your skirt before pulling your panties off and tossing them aside. His fingers soon find your pussy and he rubs your clit before he gets down on his knees and starts eating you out. He\'s fairly talented and you just moan as you lay back and enjoy it. Just as it starts to really feel good, he stops and you see a condom in his hand before he puts it on. As he does that, you try to get comfortable.');
    }
    qspCall(s, 'arousal', 'cuni', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtvag1.jpg');
    // TODO-QSP: dynamic text: Once the condom is in place, he rubs the tip of his dick against your pussy lips...
    scene.text(`Once the condom is in place, he rubs the tip of his dick against your pussy lips, making sure it's well lubricated, then gently pushes his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock inside you, causing you to gasp. His movements are slow and he takes all the time in the world to work his way deeper into you as one of his hands rubs your clit, causing you to moan in pleasure.`);
    scene.text('He might have been slow at first, but he\'s steadily picking up the pace now that he\'s balls deep inside you, but he\'s gentle with you and keeps stimulating your clit and occasionally kneads your breasts as well. You didn\'t expect this to feel so good and cry out: "Oh God! Fuck me, sir! Fuck me harder!"');
    scene.text('He stops and pulls out of you. "Get up and bend over."');
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtvag2.jpg');
    scene.text('You get up and place one knee on the toilet seat and the other foot on the floor. He smiles and slides his dick back into your wet pussy; indeed he gets a little rougher with you. Once or twice, he even smacks your ass as he fucks you doggy style over the toilet.');
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep getting fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtvag3.jpg');
    scene.text('He keeps fucking you, not too hard or fast, but at a nice steady pace. It seems he wants you to enjoy this as much as he is. He fucks you like this for several more minutes until he starts moaning loudly.');
    qspCall(s, 'arousal', 'vaginal', 10, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/makar/sex/school/caughtcum.jpg');
    scene.text('He pulls out of you and gently pushes you down on your knees while he gets rid of the condom. He holds his dick in your face and jerks it a few times. It starts spurting warm cum all over your face, mostly around your mouth. When he finishes, he rubs the tip of his dick against your lips and then shoves it back into your mouth, the sight of you covered in his cum emboldening him. You look up at him while you suck his cock clean, smiling around him as you feel him getting soft in your mouth. He pulls out of your mouth and tucks his dick back into his pants.');
    // TODO-QSP: dynamic text: Without a word, he walks over to one of the sinks and washes his hands; he seems...
    scene.text(`Without a word, he walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see that he's giving you sideways glances. Finally, he smiles. "Feel free to cut class any time you like, ${((s as any).pcs_firstname ?? 0)}. I'll happily keep your secret."`);
    scene.text('You smile back. "If I get \'punished\' like that every time I skip class, I will." He chuckles at that, shakes his head, then leaves the bathroom - you think you can hear him whistling outside as he walks away. That was amazing and you also have the rest of the period to yourself, even if you have his cum dripping down your face.');
    qspCall(s, 'cum_call', 'face', 'A128', 1);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
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
  } },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCaughtb2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/caught1.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You peek out and see one of your teachers, Mr. Ivanov, standing at the mirror. You duck back into the stall, close the door as quietly as you can and sit down on the toilet, your heart beating like crazy, hoping he didn\'t notice you. You hear his footsteps coming closer, closer… and stop, right outside your stall door.');
  if (((s as any).Ivanov_toilet ?? 0) === 1) {
    scene.text('"I saw you in the mirror, girl!" he says menacingly as he pushes the door open, the menacing look soon replaced with a hungry, lustful one. "Well well well, what do we have here? My new little slut. You know the drill. Strip! Now!"');
    scene.actions([
      { label: 'Strip', goto: ['gschool_boys_bathroom', 'caughtb2_slut'] },
      { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('His eye glint in anger. "You either do what I tell you like a good little slut, or I will haul you to the principal\'s office and tell her how I caught you taking drugs, but you flushed them before I could take them from you."');
    scene.text('You look at him shocked. "I wasn\'t doing drugs."');
    scene.text('He laughs. "Who is she going to believe? Someone with your reputation or me? You\'ll be suspended; is that what you want?"');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No! I\'m not your whore."');
    scene.text('He laughs. "Suit yourself, maybe next time you\'ll reconsider my kind offer." He proceeds to drag you by the arm to the principal\'s office.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'ivanov_revenge'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip', goto: ['gschool_boys_bathroom', 'caughtb2_slut'] },
    ]);
  } },
    ]);
  } else {
    if ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 150)) {
      scene.text('"I saw you in the mirror, girl!" he says menacingly as he pushes the door open, the menacing look soon replaced with a hungry, lustful one. "Well well well, what do we have here? I remember girls like you, always spreading those legs for any boy that would look your way." He waits a few seconds and snarls at you when you don\'t move. "Strip! Now!"');
      scene.actions([
        { label: 'Strip', goto: ['gschool_boys_bathroom', 'caughtb2_slut'] },
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
    scene.text('His eye glint in anger. "You either do what I tell you like a good little slut, or I will haul you to the principal\'s office and tell her how I caught you taking drugs, but you flushed them before I could take them from you."');
    scene.text('You look at him shocked. "I wasn\'t doing drugs."');
    scene.text('He laughs. "Who is she going to believe? Someone with your rep or me? You\'ll be suspended; is that what you want?"');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No! I\'m not your whore."');
    scene.text('He laughs. "Suit yourself, maybe next time you\'ll reconsider my kind offer." He proceeds to drag you by the arm to the principal\'s office.');
    scene.actions([
      { label: 'Go to the principal\'s office', goto: ['gschool_office', 'ivanov_revenge'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip', goto: ['gschool_boys_bathroom', 'caughtb2_slut'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"I saw you in the mirror, girl!" he says menacingly as he pushes the door open. "What do you think you\'re doing in the boy\'s room? Skipping class, I presume?"');
      if (((s as any).school_bunk ?? 0) === 1) {
        scene.text('His eyes fall on the smoldering cigarette on the ground and his eyes narrow. "And smoking in school too, huh? I shouldn\'t be surprised."');
      }
      scene.text('Mr. Ivanov looks at you disgustedly. "Well, what are you waiting for, an invitation?! Get your ass out of here and over to the principal\'s office!" He points at the bathroom door.');
      scene.text('You don\'t know if or how you could get out of this mess. He never really liked you and of course he knows you\'re supposed to be in class, so there\'s no point in trying to lie to him about that, but maybe you can convince him to let you off with a warning or something?');
      scene.actions([
        { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
        { label: 'Sweet talk him', handler: (st: GameState) => {
    qspCall(s, 'gschool_events', 'sweet', 'normal');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('You hang your head and feign shame as best you can. "I know, and I\'m sorry Mr. Ivanov, but I was feeling stressed out and I just needed a break, just a few minutes alone. I know I shouldn\'t have, but I couldn\'t help it." You give him a pleading look. "Please, please don\'t report me. I promise I won\'t do it again."');
      scene.text('Mr. Ivanov snorts. "Do you think I\'m stupid, girl?" He doesn\'t wait for your reply but reaches out, grabs you by the arm and pulls you out of the stall before leading you out of the bathroom. "We\'re going to the principal\'s office, right now!"');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/bathroom/sweettalk\'+rand(1, 2)+\'.jpg');
      scene.text('You hang your head and feign shame as best you can. "I know, and I\'m sorry Mr. Ivanov, but I was feeling stressed out and I just needed a break, just a few minutes alone. I know I shouldn\'t have but I couldn\'t help it." You give him a pleading look. "Please, please don\'t report me. I promise I won\'t do it again."');
      // TODO-QSP: dynamic text: Mr. Ivanov gives you a long, hard stare. You can see a vein twitch at his temple...
      scene.text(`Mr. Ivanov gives you a long, hard stare. You can see a vein twitch at his temple and he seems to be struggling with himself but, eventually, he nods curtly. "Okay," he hisses."I'll let you off with a warning today, Miss ${((s as any).pcs_lastname ?? 0)}, but I expect you to be at the top of my class and, so help me god, if I find out you're cutting class again…" he trails off meaningfully. "Do we understand each other?"`);
      scene.text('You nod vehemently - you definitely don\'t want to get caught by him again. Without another word, he turns and walks out of sight. You think you can hear him mutter and curse under his breath but a few seconds later, the bathroom door closes and the room is quiet again.');
      if ((!((s as any).school_bunk ?? 0))) {
        scene.actions([
          { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      }
    }
  } },
        { label: 'Suggest a blowjob', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/seduction.jpg');
    scene.text('You get down on your knees in front of him and hike up your skirt a little to reveal your legs. When you\'re sure you have his eyes on you, you look up at him and suggestively lick your lips. "You seem tense, sir. How about I help you relax a little and you just pretend you didn\'t see me here?"');
    qspCall(s, 'gschool_events', 'sweet', 'sex');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('Mr. Ivanov snorts. "Don\'t embarrass yourself, girl. Do you really think that acting like a prostitute would work on me?" He doesn\'t wait for your reply but reaches out, grabs you by the arm and pulls you out of the stall before leading you out of the bathroom. "We\'re going to the principal\'s office, right now!"');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      (s as any).Ivanov_toilet = 1;
      qspCall(s, 'npcStat', 'A129');
      scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtbj.jpg');
      // TODO-QSP: dynamic text: He looks down at you before silently unzipping his pants and pulling his dick ou...
      scene.text(`He looks down at you before silently unzipping his pants and pulling his dick out. It's not even hard yet, but he seems to have made his choice and so you stroke his dick a few times until it's erect, then lean forward and start licking it; you lick up and down the shaft and run your tongue around the head while looking up at him to gauge his nonexistent reaction before you take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips tightly around his dick when you feel him grab the back of your head and shove your head down, forcing his dick deep into your mouth and down your throat. You start gagging, but he doesn't relent - he pulls out briefly, only to shove his cock right back in.`);
      qspCall(s, 'arousal', 'bj', 10, 'deepthroat');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtbj2.jpg');
    scene.text('You have no control over what is happening and so, in the hopes of speeding this up, caress and fondle his balls with one of your hands while he fucks your throat. "That\'s right, you dirty little slut. Take my cock! Gag on it!" He continues to say demeaning things like that as he jams his cock down your throat over and over again. Making you gag seems to be what he enjoys the most.');
    scene.text('He picks up the pace even more, barely even giving you a second to catch your breath. Drool leaks out of your mouth, dripping down your chin and tears are running down your cheeks. Without warning, he starts grunting and you feel his dick throbbing in your mouth before he suddenly jerks your head away, pulling your hair painfully in the process and twisting your neck slightly.');
    qspCall(s, 'arousal', 'bj', 10, 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/teachercum.jpg');
    scene.text('As soon his dick is out of your mouth, he jerks it a few times while pointing it at you. It starts spurting cum all over your face, mostly around your mouth. Once he\'s finished, he shoves his cock back into your mouth and you dutifully lick him clean, feeling him go limp in your mouth. He pulls out of your mouth and tucks his dick back into his pants.');
    // TODO-QSP: dynamic text: Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he s...
    scene.text(`Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see that he's looking at you in the mirror. He gives you a cold smile. "Don't think this will get me to cut you any slack in my class, ${((s as any).pcs_lastname ?? 0)}. And don't you <i>dare</i> skip my lessons. I'll be seeing you soon." With that, he walks out of the bathroom.`);
    scene.text('Your throat is burning and you like Mr. Ivanov even less than ever before. You watch him walk out as droplets of his cum run down your face.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'face', 'A129', 1);
    qspCall(s, 'stat', '');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
  } },
        { label: 'Offer sex', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/bendover.jpg');
    scene.text('You get up and walk past him, out of the stall, then bend over against the wall. One of your hands runs down to your ass and you slowly hike your skirt enough for him to see a hint of your crotch. "I know I\'ve been a bad, bad girl… and I don\'t want any demerits. If you don\'t report me, then I\'ll let you fuck me, sir." You follow your offer up with an inviting wiggle of your ass.');
    qspCall(s, 'gschool_events', 'sweet', 'sex');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).sweet_talk ?? 0)) {
      scene.img('images/locations/pavlovsk/school/bathroom/angryteacher.jpg');
      scene.text('Mr. Ivanov snorts. "Don\'t embarrass yourself, girl. Do you really think that acting like a prostitute would work on me?" He doesn\'t wait for your reply and reaches out, grabs you by the arm and pulls you out of the stall and leads you out of the bathroom. "We\'re going to the principal\'s office, right now!"');
      scene.text('He\'s nothing if not a man of his word, and he drags you down the hall by your arm until you\'re standing in front of the principal\'s office.');
      scene.actions([
        { label: 'Go to the principal\'s office', handler: (st: GameState) => {
    (s as any).demerit = ((s as any).demerit ?? 0) + (10);
    if (((s as any).school_bunk ?? 0) === 1) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (5);
    }
  }, goto: ['gschool_office', 'principal'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/school/bathroom/seduction.jpg');
      scene.text('Mr. Ivanov looks at you for a long time, seemingly considering his options; you can see one of those \'options\' getting hard in his pants while he stares at your ass. You smile and tug at your skirt, causing it to rise and fall just a tiny bit every time. Only a few seconds later, he walks towards you while pulling out his dick and stroking it. When he reaches you, he roughly rips off your skirt and undresses you, tossing your clothes haphazardly around the bathroom. Once you\'re naked, he pushes you down.');
      scene.text('"Get on your knees and suck my cock, like the good little slut you are," he commands as he pulls his dick out in front of your face.');
      scene.actions([
        { label: 'Blow him', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A129');
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtbj.jpg');
    // TODO-QSP: dynamic text: You do as you're told and stroke his dick a few times until it's fully hard, the...
    scene.text(`You do as you're told and stroke his dick a few times until it's fully hard, then lean forward and start licking it; you lick up and down the shaft and run your tongue around the head while looking up at him to gauge his nonexistent reaction, before you take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your mouth. You wrap your ${((s as any).pc_desc ?? 0)?.['lips']} lips tightly around his dick and start bobbing your head, stroking his cock with your lips, your tongue still making its rounds. He rests one hand on the top of your head, but he lets you control the action.`);
    scene.text('You caress and fondle his balls with one of your hands while the other strokes him in unison with your head\'s movement. You increase your speed over time and take him as deep into your mouth as you can without gagging. He enjoys your blowjob in silence and after several minutes of this, he grabs you by the hair and roughly pulls you up and bends you over.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    (s as any).Ivanov_toilet = 1;
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal.jpg');
    scene.text('Once you\'re bent over in the stall, Mr. Ivanov rubs his fingers against your pussy. When he notices that you\'re relatively wet, he slips them inside, finger fucking you to lubricate his fingers with your juices. When he pulls his fingers out of you, he rubs them against your asshole and slips one of them inside your puckered hole. You moan in pleasure, with a little bit of pain mixed in, then louder when he adds a second finger; You have to bite your lip and flinch a little when he shoves the third one. Mr. Ivanov gets your asshole lubed up and stretches it out, and you doubt he\'s doing it for the fun of it.');
    // TODO-QSP: dynamic text: When he feels you're sufficiently prepared, he rubs the tip of his dick against ...
    scene.text(`When he feels you're sufficiently prepared, he rubs the tip of his dick against your backdoor and uses one of his hands to spread your ass cheeks wide. Once he has your ass cheeks spread wide and his cock lined up, he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass. You groan loudly in pleasure and pain. In a few uncomfortable thrusts, he shoves his cock all the way into your bowels until he's balls deep inside. You cry out, the pain too intense to keep quiet, and he doesn't pause to give your ass a little time to adjust; he just starts giving you a proper hard fucking.`);
    qspCall(s, 'arousal', 'vaginal_finger', 4);
    qspCall(s, 'arousal', 'anal_finger', 1, 'lube');
    qspCall(s, 'arousal', 'anal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal.jpg');
    scene.text('He quickly works up the speed of his thrusts and is soon pounding your ass balls deep, slamming your shoulders against the mirror with each hard thrust. He grunts, clearly taking pleasure from violating your ass like this, and you too can\'t deny that a part of you loves being pounded like this as you rub your clit.');
    qspCall(s, 'arousal', 'anal', 10, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtcum.jpg');
    scene.text('Next thing you know, he lets out a loud groan and buries his cock balls deep up your ass; you feel his dick twitching as he blows his load deep inside you. When he pulls out of your gaping ass, you feel his cum leaking out of you as he tucks his dick back into his pants.');
    // TODO-QSP: dynamic text: Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he s...
    scene.text(`Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see him giving you sideways glances. He breaks his silence with a cruel smile. "We'll be doing this again, ${((s as any).pcs_lastname ?? 0)}. Next time I feel like it, I'll keep you back after class and fuck that cute little ass of yours," he laughs and, without waiting for a reply from you, walks out of the bathroom.`);
    scene.text('You go to the mirror yourself and clean yourself up and fix your hair. Your ass and throat are burning and his \'promise\' still rings in your ears.');
    qspCall(s, 'cum_call', 'anus', 'A129', 1);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
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
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCaughtb2Slut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A129');
  scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtbj.jpg');
  scene.text('You strip out of your clothes like he demands. Once you\'re completely naked, he roughly shoves you down to your knees and pulls his cock out. He rubs his cock against your lips and the pushes it between them, you open your mouth and let him stick his cock in your mouth. At this point there\'s no point fighting it; you start sucking his dick, but before long he just starts fucking your mouth instead.');
  qspCall(s, 'arousal', 'bj', 5, 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get mouth fucked', handler: (st: GameState) => {
    (s as any).Ivanov_toilet = 1;
    qspCall(s, 'npcStat', 'A129');
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtbj2.jpg');
    // TODO-QSP: dynamic text: He places his hand at the back of your head to keep you from pulling away as he ...
    scene.text(`He places his hand at the back of your head to keep you from pulling away as he jams his dick down your throat. As you gag on his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick, you feel his balls slap against your chin and your slobber running out of your mouth as he gags you over and over, violently deepthroating you before he finally pulls his dick out of your mouth and pulls you up to your feet by your hair. His slips one hand between your legs to your pussy and slides his fingers inside you.`);
    if (((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('He snorts in surprise. "I can\'t believe a slut like you is still a virgin. That\'s okay, you have another hole for fucking. Isn\'t that right?" he asks rhetorically. Still holding you by the hair, he turns you around and bends you over in the stall. You feel him spit between your ass cheeks and his fingers work his spit into your asshole. Before you realize it, you feel the tip of his dick pressed up against your anus.');
      qspCall(s, 'arousal', 'bj', 5, 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal1.jpg');
    scene.text('He holds onto your hip with one hand while the other grabs your ass cheek and spreads it wide. He forces his dick painfully into your ass. The spit on your ass and your slobber on his dick helps somewhat, but not enough. He soon forces his cock balls deep up your ass and starts fucking it without mercy. With each thrust, you feel his balls slap against your slit. You grit your teeth against the pain and do your best to bear it.');
    qspCall(s, 'arousal', 'anal', 10, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal2.jpg');
    scene.text('He grabs both of your hips and starts grunting with effort as he hammers away at your ass with no regard for your feelings at all; in fact the more you groan in pain, or make any other noise that shows you\'re not enjoying it, the harder he hammers himself into your butt. He seems to be getting off on your pain. Not wanting to give him the satisfaction, you bite your lower lip and do your best to not make any noise at all.');
    qspCall(s, 'arousal', 'anal', 10, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum filled', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtcum.jpg');
    scene.text('After what feels like forever, he finally gives one more thrust burying himself balls deep in your ass. You feel his dick start twitching, followed by the sensation of his hot cum filling your bowels. Once the last squirt of cum fills you, he pulls his dick out of you. You feel his hot cum leaking out of your gaping asshole as he puts his dick away.');
    // TODO-QSP: dynamic text: Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he s...
    scene.text(`Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see him giving you sideways glances. He breaks his silence with a cruel smile. "We'll be doing this again, ${((s as any).pcs_lastname ?? 0)}. Next time I feel like it, I'll keep you after class and fuck that cute little ass of yours," he laughs and, without waiting for a reply from you, walks out of the bathroom.`);
    scene.text('You go to the mirror yourself and clean yourself up and fix your hair. Your ass and throat are burning and his \'promise\' still rings in your ears.');
    qspCall(s, 'cum_call', 'anus', 'A129', 1);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('He digs his fingers deep inside your pussy. "I\'m not surprised at how loose you feel, whore!" he says while still holding you by the hair. He then turns you around and bends you over in the bathroom stall. You feel the tip of his dick rubbing up and down against your slit, making you wet as he does.');
      qspCall(s, 'arousal', 'bj', 5, 'rough', 'deepthroat');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtvag1.jpg');
    scene.text('He slides his dick into your wet pussy and starts fucking you hard and deep, not caring about your comfort. He doesn\'t let you get warmed up before he starts hammering your cunt. His balls slap against your clit with each thrust, causing you to moan in pleasure, which only encourages him to get harder and rougher with you.');
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pussy pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtvag2.jpg');
    scene.text('He grunts with each thrust, seemingly enjoying himself a great deal. He doesn\'t say anything and just pounds you. The only sounds are his grunts, your moans and the slapping of his flesh against yours with each thrust. Just as it\'s really starting to feel good, he pulls out of you. "Let\'s see if your other hole is any tighter."');
    qspCall(s, 'arousal', 'vaginal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get butt fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal1.jpg');
    scene.text('He holds onto your hip with one hand while the other grabs your ass cheek and spreads it wide. He spits on your asshole and uses his fingers to work the spit in before you feel the tip of his cock pressed against your asshole. He shoves his dick painfully into your ass, the spit on your ass and your pussy juices on his dick helping somewhat, forcing his cock balls deep up your ass before he starts fucking you without mercy. "That\'s better! At least your ass isn\'t completely worn out. Not yet anyway," he says with a laugh. With each thrust, you feel his balls slap against your slit. You grit your teeth against the pain and do your best to bear it.');
    qspCall(s, 'arousal', 'anal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Anal pounding', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtanal2.jpg');
    scene.text('He grabs both of your hips and starts grunting with effort as he hammers away at your asshole with no regard for your feelings at all; in fact, the more you groan in pain or make any other noise that shows you\'re not enjoying it, the harder he fucks you. He seems to be getting off on your pain. Not wanting to give him the satisfaction, you bite your lower lip and do your best to not make any noise at all.');
    qspCall(s, 'arousal', 'anal', 5, 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum filled', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/serafim/sex/school/caughtcum.jpg');
    scene.text('After what feels like an eternity, he finally gives one more thrust and buries himself balls deep in your ass. You feel his dick start twitching, followed by the sensation of his hot cum filling your bowels. Once the last squirt of cum fills you, he pulls his dick out of you. You feel his hot cum leaking out of your gaping asshole as he puts his dick away.');
    // TODO-QSP: dynamic text: Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he s...
    scene.text(`Wordlessly, Mr. Ivanov walks over to one of the sinks and washes his hands; he seems to be ignoring you, but you can see him giving you sideways glances. He breaks his silence with a cruel smile. "We'll be doing this again, ${((s as any).pcs_lastname ?? 0)}. Next time I feel like it, I'll keep you back after class and fuck that cute little ass of yours." He laughs and, without waiting for a reply from you, walks out of the bathroom.`);
    scene.text('You go to the mirror yourself and clean yourself up and fix your hair. Your ass and throat are burning and his \'promise\' still rings in your ears.');
    qspCall(s, 'cum_call', 'anus', 'A129', 1);
    qspCall(s, 'arousal', 'end');
    if ((!((s as any).school_bunk ?? 0))) {
      scene.actions([
        { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
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
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBoy7(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom1.jpg');
  scene.text('After a few minutes, you hear someone else in the bathroom with you. You peek out and see Igor at the sink washing his hands. Smiling, you exit the stall and call his name. "Hey Igor, what are you up to?"');
  scene.text('He whirls around, visibly startled, but then breaks into a smile when he sees you. "You scared the hell out of me! Actually, what are you doing in the boys room anyway?"');
  scene.text('You smile at him. "Sorry, didn\'t mean to scare you. I was just tired of class and needed a break."');
  scene.text('He nods in understanding. "Yeah, it can get boring."');
  scene.text('"So you want to entertain me this period?" you ask.');
  scene.text('He pauses. "What do you have in mind?"');
  if (((s as any).IgorQW ?? 0)?.['strap'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['strapon'] > 0  &&  ((s as any).strapNumber ?? 0) > 0) {
    scene.actions([
      { label: 'I brought my strapon…', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom2.jpg');
    scene.text('You pull your strapon out of your purse. "I thought I might fuck you with this…"');
    scene.text('His eyes grow big, but you can also see the little bulge in his pants. "Um, I don\'t know…"');
    scene.text('You attach the dildo to the harness and start to slide it up your legs, under your skirt. "Come on, you know you want to… You\'ll love it."');
    scene.text('He watches the strapon slide up your thighs, then glances at the door. "What if someone comes in?"');
    scene.text('You finish pulling the straps tight on the harness before you grab him by the shirt and pull him into the largest stall. "No one will know what\'s happening in here. Now down on your knees and suck my dick."');
    scene.text('He looks down at your dildo and you can tell he wants to, but then he glances at the door, afraid of getting caught.');
    qspCall(s, 'willpower', 'anal', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make him take it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make him take it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'npcStat', 'D<<strapNumber>>');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom3.jpg');
    scene.text('He hesitates for a second before he drops down to his knees and starts sucking your dildo. After he sucks on it for a while, you look down at him. "Stand up, turn around and pull your pants down."');
    if (((s as any).lube ?? 0) > 0) {
      scene.text('You take some lube out of your purse and squirt a little on the dildo. You rub the lube all over the dildo, getting it nice and slick before you wipe the rest of the lube off your fingers on his ass.');
    }
    // TODO-QSP: dynamic text: He does what you ask without hesitation. Once his pants are halfway down his thi...
    scene.text(`He does what you ask without hesitation. Once his pants are halfway down his thighs, you grab him by the hips and pull him back towards you. Once he's close enough, you reach down and line up the dildo against his asshole. Using one hand, you pull his hips back while the other guides your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo into his ass. He moans in pleasure and pain as your dildo slides into his ass and you slowly start fucking him.`);
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom4.jpg');
    scene.text('Once he\'s down on his knees, you push him forward so he\'s on all fours before you kneel behind him and push the dildo back into his ass. It easily slides in and you start fucking him again. He moans in pleasure and starts to buck back against you, encouraging you to fuck him harder and deeper as he starts jerking himself off.');
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom5.jpg');
    scene.text('He rises up slightly and you pull him up until he\'s kneeling upright, his moans getting louder and louder as you keep fucking his ass. You wrap one of your arms around him while the other holds onto his hip, giving you good leverage to fuck him hard and fast. You can feel his body tensing up, you know he is about to cum.');
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom6.jpg');
    scene.text('He finally lets out a loud moan and his body shudders. You fuck him through his orgasm, and once he sighs in relief, you pull out and stand up. As you do, you glance down to see his hand covered in his own cum. "Go on, lick it up," you tell him as you start to remove the strapon harness.');
    scene.text('He gives you a surprised look, but then does as you ask. You\'re not sure if he likes it or not, but it\'s hot to watch. The two of you spend the next few minutes getting cleaned up before he finally speaks up. "I still can\'t believe I let you do that. We could have been caught!"');
    scene.text('You shake your head slightly, knowing he loved it it as much as you did. "Oh you loved it and you know it. Next time I might even have you eat me so I can get off." Before he can reply, the bell rings and you both hurry out.');
    qspCall(s, 'arousal', 'anal_strap_give', 5, 'dom', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
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
    scene.actions([
      { label: 'Don\'t make him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom2.jpg');
    scene.text('You sigh. While it would be fun, you don\'t want to make him do something he doesn\'t want to do. "Okay, if you really don\'t want to, we don\'t have to."');
    // TODO-QSP: dynamic text: He lets out a slight sigh of relief. "Thanks, <<$pcs_firstname>>. I just don't w...
    scene.text(`He lets out a slight sigh of relief. "Thanks, ${((s as any).pcs_firstname ?? 0)}. I just don't want anyone to know…"`);
    scene.text('You nod in understanding as you take your harness off. After you put it away, the two of you spend the rest of the period talking about various topics until the bell rings and you both leave.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Just talk', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A4', 1);
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/characters/pavlovsk/school/boy/igor/sex/school/boysroom1.jpg');
    scene.text('Within seconds, the two of you are chatting away about school, movies, sports, music and anything else that strikes your fancy. Before you know it, the bell rings amd you both stop and gather your things before bidding each other farewell and heading to your next class.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
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
    case 'bathroom2':
      enterBathroom2(s, scene);
      break;
    case 'boys':
      enterBoys(s, scene);
      break;
    case 'boy1':
      enterBoy1(s, scene);
      break;
    case 'boy2':
      enterBoy2(s, scene);
      break;
    case 'boy2_sub':
      enterBoy2Sub(s, scene);
      break;
    case 'boy3':
      enterBoy3(s, scene);
      break;
    case 'boy3_kiss':
      enterBoy3Kiss(s, scene);
      break;
    case 'boy4':
      enterBoy4(s, scene);
      break;
    case 'boy4_end':
      enterBoy4End(s, scene);
      break;
    case 'boy5':
      enterBoy5(s, scene);
      break;
    case 'boy6':
      enterBoy6(s, scene);
      break;
    case 'boy6_not':
      enterBoy6Not(s, scene);
      break;
    case 'boy6_sub':
      enterBoy6Sub(s, scene);
      break;
    case 'companyb':
      enterCompanyb(s, scene);
      break;
    case 'companyb1':
      enterCompanyb1(s, scene);
      break;
    case 'companyb2':
      enterCompanyb2(s, scene);
      break;
    case 'companyb3':
      enterCompanyb3(s, scene);
      break;
    case 'Join them':
      enterJoinThem(s, scene);
      break;
    case 'companyb4':
      enterCompanyb4(s, scene);
      break;
    case 'masturbateb4':
      enterMasturbateb4(s, scene);
      break;
    case 'caughtb':
      enterCaughtb(s, scene);
      break;
    case 'caughtb1':
      enterCaughtb1(s, scene);
      break;
    case 'caughtb2':
      enterCaughtb2(s, scene);
      break;
    case 'caughtb2_slut':
      enterCaughtb2Slut(s, scene);
      break;
    case 'boy7':
      enterBoy7(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_boys_bathroom: LocationDef = {
  name: 'gschool_boys_bathroom',
  title: 'Boy\'s bathroom',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
