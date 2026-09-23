import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'qwBarPolet';
  (s as any).loc_arg = '';
  (s as any).menu_loc = 'qwBarPolet';
  (s as any).menu_arg = '';
  (s as any).location_type = 'public_indoors';
  (s as any).alko_temp = ((s as any).alko ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'qwBarPolet', 'intro');
  (s as any).orderDrink = ((s as any).pcs_drank ?? 0);
  if (((s as any).MartinTalkDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinTalkDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinTalkDay = 0;
  }
  if (((s as any).MartinSexDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinSexDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinSexDay = 0;
  }
  if (((s as any).MartinPrezikDaystart ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).MartinPrezikDaystart = ((s as any).daystart ?? 0);
    (s as any).MartinPrezik = 0;
  }
  if (((s as any).BillHourDay ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).BillHourDay = ((s as any).daystart ?? 0);
    (s as any).VicArt_BillDay = 0;
    (s as any).temp = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).temp ?? 0) === 1) {
      (s as any).PBB_BillDay = 0;
    }
  }
  if (((s as any).knowMartin ?? 0) === 0  &&  (!((s as any).RabotnikFirst ?? 0))) {
    (s as any).RabotnikFirst = 1;
  }
  scene.text('<center><b>Bar "Rabotnik"</b></center>');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  scene.text('As you enter the bar, you see that about a dozen regular tables and stools take up most of the room. A bar counter, right in front of you, dominates the center of the establishment. At the far end of it, near a door leading to the toilet, a doorway with a curtain leads to the obligatory pool table that rounds off the furniture.');
  // TODO-QSP: dynamic text: 'This place has a rowdy air about it: The smell of spilled beer, schnaps, and a ...
  scene.text('This place has a rowdy air about it: The smell of spilled beer, schnaps, and a hint of vomit and blood are hard to miss, and some of the stools and billiard cues look like they\'ve been used in fights before. It is obviously a worker pub and not trying to be anything fancier than that, but that gives it an odd charm and coziness of its own' + ((((s as any).hour ?? 0) >= 16) ? (', and despite the hints of shadiness, you can hear plenty of laughter and friendly conversation') : ('')) + '. You doubt you\'ll get a fancy cocktail in here, though.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit to the street', goto: ['city_industrial', ''] },
    { label: 'Approach the bar', goto: ['qwBarPolet', 'bar'] },
    { label: 'Go to the toilet', goto: ['qwBarPoletToilet', ''] },
  ]);
  scene.build();
}

function enterBar(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'qwBarPolet';
  (s as any).loc_arg = 'bar';
  (s as any).menu_loc = 'qwBarPolet';
  (s as any).menu_arg = 'bar';
  if (((s as any).orderDrink ?? 0) < ((s as any).pcs_drank ?? 0)) {
    (s as any).orderDrink = ((s as any).pcs_drank ?? 0);
    qspGoto(s, 'qwbarPolet', 'DrinkingBooze');
  }
  scene.text('<center><b>Bar "Rabotnik"</b></center>');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  if (((s as any).BillHour ?? 0) !== ((s as any).hour ?? 0)) {
    (s as any).BillHour = ((s as any).hour ?? 0);
    // TODO-QSP: :bill_loop
    (s as any).bill_rand = (Math.floor(Math.random() * 6) + 1);
    if (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).VicArt_BillDay ?? 0) === 1) {
      // TODO-QSP: jump 'bill_loop'
    }
    if (((s as any).bill_rand ?? 0) === 1  &&  ((s as any).PBB_BillDay ?? 0) === 1) {
      // TODO-QSP: jump 'bill_loop'
    }
  }
  scene.text('Your eyes wander towards the backroom with the billiard table.');
  if (((s as any).bill_rand ?? 0) === 0  &&  (!((s as any).Jaska_Ev ?? 0))) {
    scene.text('You notice some guys are playing billiards in the backroom. They seem know each other well and are playing for quite a bit of money, from what you can tell, so you don\'t want to interrupt right now.');
  } else {
    if (((s as any).bill_rand ?? 0) === 0  &&  (!((s as any).Jaska_Friend_Bill ?? 0))) {
      scene.text('You notice the guys Jaska played against are in the backroom with the billiard table, having a friendly match. Maybe you could play a round with them?');
    } else {
      if (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).Jaska_Friend_Bill ?? 0) < 4) {
        scene.text('You notice that Jaska\'s friends, Victor and Artyom, are in the backroom with the billiard table, having a friendly match. You could join them, if you wanted to.');
      } else {
        if ((!((s as any).bill_rand ?? 0))) {
          (s as any).temp = (Math.floor(Math.random() * 4) + 1);
          if (((s as any).temp ?? 0) === 1) {
            scene.text('You notice that Jaska\'s friends, Victor and Artyom, are in the backroom with the billiard table, but they don\'t seem to be alone: A woman you don\'t know is with them, and judging by the looks Artyom is giving her, she has offered them something other than money as a wager…');
          } else {
            scene.text('You notice that Jaska\'s friends, Victor and Artyom, are alone in the backroom with the billiard table, having a friendly match. You could join them, if you wanted to.');
          }
        } else {
          if (((s as any).PBB_Met ?? 0) !== 0  &&  ((s as any).bill_rand ?? 0) === 1) {
            (s as any).PBB_BillDay = 1;
            scene.text('The guy you played billiards with before seems to be playing against a pair of women who are looking increasingly distressed as he pockets one ball after the other. You can see quite a bit of money sitting on the side of the table and you are pretty sure he is about to win it all.');
            if (((s as any).PBB_Met ?? 0) === 2) {
              scene.text('You wonder if he offered them the same \'money or blowjob\' deal he offered you…');
            }
          } else {
            if (((s as any).bill_rand ?? 0) === 1) {
              (s as any).PBB_BillDay = 1;
              scene.text('A stranger seems to be playing billiards with a pair of women who are looking increasingly distressed as he pockets one ball after the other. You can see quite a bit of money sitting on the side of the table and you are pretty sure he is about to win it all.');
            } else {
              if (((s as any).bill_rand ?? 0) === 2) {
                scene.text('The backroom seems to be empty at the moment, the billiard table deserted. Looks like there\'s nobody you could play with.');
              } else {
                if (((s as any).bill_rand ?? 0) > 2) {
                  scene.text('You notice that some people are playing some billiards. Maybe you could join them?');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).bill_rand ?? 0) > 2  ||  (((s as any).bill_rand ?? 0) === 0  &&  ((s as any).Jaska_Ev ?? 0) !== 0  &&  (((s as any).Jaska_Friend_Bill ?? 0) < 4  ||  ((s as any).temp ?? 0) !== 1))) {
    scene.actions([
      { label: 'Go play billiards', handler: (st: GameState) => {
    if ((!((st as any).bill_rand ?? 0))) {
      (st as any).VicArt_BillDay = 1;
    }
    qspGoto(st, 'qwBarBilliard', 'billiard_ev2');
  } },
    ]);
  }
  if ((((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)  &&  ((((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) >= 45))) {
    scene.text('The bar is emptying quickly as its owner is telling the few patrons who are left that he\'s closing for the night. Within minutes, even those who you thought were too drunk to even understand what "leaving" means are gone and only the bartender himself remains.');
    if (((s as any).npc_rel ?? 0)?.['A216'] < 20) {
      scene.text('Guess you had better head out, too.');
    }
  } else {
    if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((((s as any).hour ?? 0) < 16)  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) >= 45))) {
      scene.text('It\'s no small feat to get people to leave a bar when they don\'t have to work the next day, but this bartender seems used to the hassle, exchanging friendly words with some, being a little more curt with others, and helping the drunks who would have slept through the night on one of the tables out the door, until only the barman himself remains.');
      if (((s as any).npc_rel ?? 0)?.['A216'] < 20) {
        scene.text('Guess you had better head out, too.');
      }
    } else {
      if (((s as any).hour ?? 0) < 21  &&  ((s as any).week ?? 0) < 7) {
        scene.text('Far from empty already, the bar keeps filling at an astounding rate as people get off work in the various surrounding factories, looking to have a beer with their friends before heading home, or to get piss drunk to take their mind off their problems.');
      } else {
        if (((s as any).hour ?? 0) < 21  &&  ((s as any).week ?? 0) === 7) {
          scene.text('Far from empty already, the bar keeps filling at an astounding rate as people look to spend their day off in the familiar comfort of the bar they visit every other day of the week, where the barman is burly, the men rowdy and the women ugly, but at least the beer tastes less like piss than it does in most other bars in the area.');
        } else {
          if (((s as any).hour ?? 0) >= 21  &&  (((s as any).hour ?? 0) <=23  &&  ((s as any).minut ?? 0) < 45)  &&  (((s as any).week ?? 0) < 5  ||  ((s as any).week ?? 0) === 7)) {
            scene.text('With the hour getting late and tomorrow being a workday, you are not surprised to see people trickle out of the bar, some walking straight, some stumbling, but all heading home. Still, what people are left manage to be fairly loud. A group of men playing billiards seems to be mainly responsible for it, but among the men who are quietly drinking and talking among themselves, there are some louder, less inhibited and supposedly drunker specimens.');
          } else {
            if (((s as any).hour ?? 0) >= 21  &&  (((s as any).hour ?? 0) <=23  &&  ((s as any).minut ?? 0) < 45)  &&  (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)) {
              scene.text('The hour may be getting late, but few of the people here seem concerned with going home anytime soon, enjoying the weekend the best way they can: With friends, at a bar, and well on their way to getting shitfaced, so it doesn\'t come as a surprise that the bar is one of the noisiest places on the block right now. A group of men playing billiards seems to be mainly responsible for the racket, but even in the main room, the men who are quietly drinking and talking among themselves are in the minority tonight.');
            }
          }
        }
      }
      scene.text('The bartender, a tough-looking guy with a scarred face and more tattoos than you can count, greets most of the men by name as they come in and prepares their usual drinks before they have even reached the counter.');
      if ((!((s as any).knowMartin ?? 0))) {
        scene.text('He, along with some of the regulars, shoot you a quick glance and you realize that young women are probably a rare sight around here. You spot a handful of women, spread out over all the occupied tables, but judging by how they are treated, most of the men they\'re with seem to see them as "one of the guys", and judging by the muscular build some of them have, you can see why.');
      }
    }
  }
  if (((s as any).hour ?? 0) >= 16) {
    if (((s as any).MartinSexTalk ?? 0) === 1) {
      scene.text('After how things went with Martin the other night, you are really not in the mood to talk to him with people around. It would be best to wait until he closes the bar, so you can talk to him in private and sort this out.');
      if (((s as any).MartinSexTalkDay ?? 0) < (((s as any).daystart ?? 0) - 7)) {
        scene.text('But honestly, you don\'t want to talk to him at all right now - you are still too angry for that.');
      }
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A216'] > 20  &&  (((s as any).hour ?? 0) < 16  ||  (((s as any).hour ?? 0) === 23  &&  ((s as any).minut ?? 0) >= 45))  &&  ((s as any).MartinTalkVar ?? 0) > 3  &&  (!((s as any).MartinSexDay ?? 0))) {
    scene.img('images/locations/city/industrial/bar/emptybar.jpg');
    scene.text('With the bar closing, Martin is cleaning up, taking stock and doing whatever else he has to do to keep the place running smoothly. Since you are more or less alone with him, now might be the perfect time to talk to him in private…');
    if (((s as any).MartinSexTalk ?? 0) !== 1) {
      scene.actions([
        { label: 'Have a private chat with Martin', goto: ['MartinSex', ''] },
      ]);
    } else {
      if (((s as any).MartinSexTalkDay ?? 0) > (((s as any).daystart ?? 0) - 7)) {
        scene.text('But you are still too angry at him to even think about talking to him. He\'s wrong! Maybe he\'ll see that if you give it a few more days.');
      } else {
        scene.text('Now that some time has passed, maybe you can talk to Martin. Surely, you could convince him of your point of view. Unless… unless you want to apologize?');
        scene.actions([
          { label: 'Have a private chat with Martin', goto: ['MartinSex', ''] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Order from the bar (0:05)', goto: ['qwBarPolet', 'Ordering'] },
    { label: 'Leave the bar', goto: ['qwBarPolet', ''] },
  ]);
  scene.build();
}

function enterDrinkingBooze(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  if (((s as any).MartinSexTalk ?? 0) === 1) {
    scene.text('Martin brought you your drink as always, but you barely even looked at him - all you do is hand him the money and stare at what he brought you.');
    scene.text('And you pretty much stay like that for the next 15 minutes or so, absorbed in your own little bubble of anger, more or less oblivious to what is going on around you, the beverage you\'re nursing on your only link to the outside world.');
    scene.text('When you\'re finally finished with it, you are both angry and glad at the sight of the empty glass and the thought of ordering another crosses your mind.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } else {
    if (((s as any).knowMartin ?? 0) !== 1) {
      (s as any).knowMartin = 1;
      qspCall(s, 'npc_relationship', 'set', 'A216', 10);
      scene.text('The bartender brings your drink and looks at you. "What\'s your name, girl?", he asks. You raise your eyebrow - didn\'t he just read it on your ID?');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>", you reply truthfully, taking a small sip from your beverag...
      scene.text(`"${((s as any).pcs_firstname ?? '')}", you reply truthfully, taking a small sip from your beverage.`);
      // TODO-QSP: dynamic text: "Okay, <<$pcs_firstname>>. My name is Martin. This is my bar, and I don''t want ...
      scene.text(`"Okay, ${((s as any).pcs_firstname ?? '')}. My name is Martin. This is my bar, and I don't want any trouble here." You notice a faint accent you cannot quite place - maybe Spanish? "I know most people who come here by name, and most of them are good, honest men and women, but we are a rowdy bunch and tend to act more stupid than usual when pretty young girls are around."`);
      scene.text('You consider his words and look around the room. He\'s right: Several men seem to be eying you.');
      scene.text('"So… you don\'t want me to come here again?", you ask carefully.');
      scene.text('"No, it means that, if you want to spend time here, I don\'t want you doing anything stupid so I don\'t have to step in." His words and look almost make you feel like a daughter getting peptalked by her father before a night out with friends, and just like a good dad\'s, his voice and features soften when he adds: "But if any of the guys gives you trouble, you just let me know. Got it?"');
      scene.text('"Got it", you nod, and Martin gives you a hint of a smile - amazing how that can light up a face as gruff as his - before he returns to the regulars he had been talking to.');
      scene.text('You spend the next 15 minutes pondering his words and the impression he has left on you, absentmindedly sipping your drink until you finally notice that your glass is empty.');
      scene.actions([
        { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
      ]);
    } else {
      if ((!((s as any).MartinTalkDay ?? 0))) {
        scene.actions([
          { label: 'Order the drink and chat with Martin', handler: (st: GameState) => {
    (st as any).MartinTalkDay = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A216', (Math.floor(Math.random() * 2) + 1));
    qspGoto(st, 'MartinTalk', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Enjoy your drink alone', handler: (st: GameState) => {
    (st as any).MartinRand = (Math.floor(Math.random() * 7) + 1);
    if (((st as any).MartinRand ?? 0) <= 2) {
      qspGoto(st, 'qwBarPolet', 'RandomDrinkEvents');
    } else {
      if (((st as any).MartinRand ?? 0) <= 4) {
        qspGoto(st, 'qwBarEncounters', '');
      } else {
        scene.text('Safe from the friendly smile and words of gratitude you exchange with Martin, you were quickly left alone with your drink and nothing interesting seemed to be happening around the bar.');
        scene.text('You therefore spent the last 15 minutes in peace, taking the occasional sip from your glass as you reflect the events of the day, think about your life and the people in it. You barely notice how your glass gets emptier and emptier until, finally, you notice that you have nothing left to drink.');
        scene.actions([
          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterOrdering(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/bar/bar.jpg');
  scene.text('You go to the counter, sit down on one of the stools and, when the bartender notices you, ask: "Hey, could you bring me something to drink?"');
  if (((s as any).cumloc ?? 0)[7] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0) {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 2) {
      qspCall(s, 'mood', 'lower', (Math.floor(Math.random() * 4) + 2));
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    }
    qspCall(s, 'npc_relationship', 'modify', 'A216', (-2));
    scene.text('Martin gives a stern look. "Don\'t you think you should clean yourself up first?"');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] < 2  &&  ((s as any).pcs_inhib ?? 0) < 70) {
      scene.text('You are visibly covered in cum and Martin noticed it!');
      scene.text('How embarrassing…');
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 70  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] < 2) {
        scene.text('"Huh?" You look over to the mirror behind the bar and realize that you still have cum on your face.');
        scene.text('"Oh! Didn\'t notice that. Yeah you\'re right, I should go wash that off," you say before excusing yourself.');
      } else {
        scene.text('You are visibly covered in cum and Martin noticed it!');
        scene.text('It\'s kinda sexy to know that he noticed it. Your belly tingles at the thought that seeing the sperm must have made Martin imagine you having sex.');
        scene.text('Still… You should probably go to the bathroom and wash it off.');
      }
    }
    scene.actions([
      { label: 'Step away from the counter', goto: ['qwBarPolet', ''] },
    ]);
  } else {
    if (((s as any).alko ?? 0) >= 6) {
      // TODO-QSP: iif(knowMartin=1, 'Martin', 'The burly barman') + ' musters you. "I think you''ve had enough."'
      scene.text('"I\'m fine", you assure him with a hint of a slur, "Just gimme one."');
      // TODO-QSP: dynamic text: '"You can barely stand-up straight, ' + iif(knowMartin=1, '<<$pcs_firstname>>', ...
      scene.text('"You can barely stand-up straight, ' + ((((s as any).knowMartin ?? 0)===1) ? ('' + ((s as any).pcs_firstname ?? '') + '') : ('girl')) + '. And I sure as hell don\'t want a young woman like yourself to pass out in my bar. Go home, or at least sober up a bit."');
      scene.actions([
        { label: 'Can I have some water?', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 35) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('"Can I at least have some water?" You ask.');
      scene.text('Martin nods and, after a few seconds, puts down a glass of water in front of you.');
      qspCall(st, 'beverage', 'water');
    }
  } },
        { label: 'I\'m not that drunk', handler: (st: GameState) => {
    scene.text('"Come on, I\'m not that drunk!" You insist. Unfortunately, instead of telling Martin, you were addressing the beer taps next to him. Oops.');
    scene.text('"Well, I\'m convinced," he replies sarcastically.');
    scene.text('With that, he turns and walks off to serve somebody else. Looks like he won\'t let you drink yourself into a coma.');
    scene.text('Bastard!');
    scene.actions([
      { label: 'Give up for now', goto: ['qwBarPolet', 'bar'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).knowMartin ?? 0) !== 1) {
        scene.text('The bartender comes over and musters you. "Sure. If you are old enough."');
        if ((!((s as any).knowMartin ?? 0))) {
          scene.text('You are surprised that someone in a bar like this seems interested in your age, and it must have shown in your face, because he adds: "I have enough things to worry about as is. I don\'t need somebody spreading the word that I\'m selling alcohol to kids."');
        } else {
          scene.text('You know exactly what he means. After all, he told you not to come back unless you really turned 18, and judging by the look he gives you, his opinion probably hasn\'t changed.');
        }
        if (((s as any).knowMartin ?? 0) === 2  &&  ((s as any).age ?? 0) < 18) {
          scene.text('"I… I just wanted to come by and talk," you say, trying to avoid the fact you still aren\'t 18.');
          scene.text('But the barman is having none of it. "If you aren\'t old enough to drink, I suggest you leave."');
          scene.text('And without another look, Martin turns and walks off.');
          scene.text('Guess you really have to be 18 to even think about restoring your relationship with him.');
          scene.actions([
            { label: 'Can I have some water?', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 35) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('"Can I at least have some water?" You ask.');
      scene.text('Martin stops, ponders your order for a moment, then nods and, after a few seconds, puts down a glass of water in front of you.');
      qspCall(st, 'beverage', 'water');
    }
  } },
            { label: 'Leave the bar', goto: ['city_industrial', ''] },
          ]);
        } else {
          if (((s as any).knowMartin ?? 0) === 2  &&  ((s as any).age ?? 0) >= 18) {
            (s as any).knowMartin = 1;
            qspCall(s, 'npc_relationship', 'modify', 'A216', 10);
            scene.text('"Here," you hand him your new, genuine ID.');
            scene.text('"Not a fake one again, I hope," he growls and examines it closely.');
            scene.text('"No, I learned my lesson." More quietly, you add: "I missed talking to you."');
            scene.text('Martin looks up from your ID. He is visibly surprised by your words, but quickly returns to his close examination. When he finds no flaw or telltale sign of manipulation, he hands it back, gives you a firm nod. "Alright, I guess you can come by every now and then again."');
            scene.text('You give a sigh of relief and smile at him. "Thank you."');
            scene.text('Martin isn\'t quite so enthusiastic. "Do you understand why I threw you out?"');
            scene.text('The smile vanishes as quickly as it appeared. "Because I lied to you. I betrayed you." You pause for a second. "But I\'m not gonna do that again."');
            scene.text('"Good. Cause I don\'t appreciate dishonesty like that. Friends don\'t lie to each other\'s face."');
            scene.text('He\'s right, of course. You\'re not sure if friends is what you and Martin are anymore, but you certainly were on friendly terms with each other before you let it slip that you were underage.');
            scene.text('At the very least, it seems like Martin is willing to return to that, because he says, "Welcome back."');
            scene.text('It\'s probably going to take a while to recover from this, but the first big step is done.');
            scene.text('"Now, what shall I bring you?" The bartender asks.');
            qspCall(s, 'food_menu', '');
          } else {
            if (((s as any).fakepassport ?? 0) === 1  ||  ((s as any).age ?? 0) >= 18) {
              scene.text('Nodding, you take out your ID and show it to him. He eyes it suspiciously and gives you a stern look… but then nods and hands it back to you.');
              scene.text('"What can I bring you?"');
              qspCall(s, 'food_menu', '');
            } else {
              scene.text('"Um…", you try to maintain eye contact with him but eventually look down, "I, uh, must have forgotten my ID at home. Couldn\'t you-"');
              scene.text('"No, I can\'t", he cuts you off. "No ID, no service."');
              scene.text('Guess you\'ll have to come back with an ID, or come up with another way to get a drink.');
              scene.actions([
                { label: 'Nod and give up', goto: ['qwBarPolet', 'bar'] },
              ]);
            }
          }
        }
      } else {
        scene.text('Martin nods. "Sure. What are you having?"');
        qspCall(s, 'food_menu', '');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandomDrinkEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).DrinkingRand = (Math.floor(Math.random() * 14) + 1);
  (s as any).pic_rand = (Math.floor(Math.random() * 6) + 1);
  qspCall(s, 'exp_gain', 'observ', (Math.floor(Math.random() * 3) + 0));
  if (((s as any).DrinkingRand ?? 0) === 1) {
    scene.img('images/locations/city/industrial/bar/event7.jpg');
    scene.text('Martin nods and prepares your beverage. While he does, you hear voices swell behind you and turn to find their source. It would seem that two other patrons - workmates, if their identical, dusty work overalls are any indication - have had a little too much too drink and are now arguing loudly over who has been bumming more cigarettes off whom.');
    scene.text('They get on their feet and are grabbing each other by the collar, apparently looking to settle the matter their alcohol-addled brains brought up once and for all; their friends are trying to hold them back, just as Martin puts the glass with your beverage down in front of you.');
    scene.text('He seems completely unfazed by this disruption of the bar\'s peace as he steps out from behind the counter, his burly, muscular build even more impressive out in the open room, and you don\'t seem to be alone with that assessment: The few whose attention hadn\'t been captured by the loud voices now cease whatever they are doing, the room eerily silent except for Martin\'s voice: "Artur, Grisha," he calls the two.');
    scene.text('They slowly turn their heads toward him and it seems to dawn on them who is speaking to them.');
    scene.text('It\'s astonishing, really: One moment, they are pumped up and ready to go at each other, and the next, they seem to physically deflate, letting go of each other almost unconsciously.');
    scene.text('Martin doesn\'t utter another word at them - he doesn\'t have to. The two slowly sit back down, careful to avoid the bartender\'s gaze as much as each other\'s.');
    scene.text('Satisfied with this outcome, Martin nods. "No more drinks for the two of you tonight," he declares before turning around to resume his post.');
    scene.text('Within seconds, the bar\'s volume is back to its normal level, laughter and dirty jokes filling the air.');
    scene.text('While you enjoy your drink, you briefly wonder why Martin didn\'t just throw them out, but then you notice that the Artur and Grigori are talking to each other again and then burst into laughter as if nothing happened.');
    scene.text('Looks like the bartender knows his regulars.');
    scene.actions([
      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
    ]);
  } else {
    if (((s as any).DrinkingRand ?? 0) === 2) {
      scene.img('images/locations/city/industrial/bar/event6.jpg');
      scene.text('Martin nods and prepares your beverage, then places it in front of you.');
      scene.text('"Thank you," you smile at him and earn a half-smile in return before he leaves you to yourself.');
      scene.text('With nobody to talk to, your eyes drift around the bar until they come to rest on a nearby table where the patrons are playing poker. That alone would be boring to watch from afar, but you are looking right into the hand of one of the players, and he seems to have four jacks.');
      // TODO-QSP: dynamic text: Curious as to how this is going to turn out (or maybe just for lack of better en...
      scene.text(`Curious as to how this is going to turn out (or maybe just for lack of better entertainment), you watch as one of the other players folds while the remaining three raise each other until their pot contains some ${qspFunc(s, 'money', 'format', 1000)} - not a very impressive win to some, but enough for a couple of rounds of beer, or a decent bottle of vodka.`);
      scene.text('The other two look confident.');
      scene.text('One reveals three queens… and curses loudly when the second puts down a full house, a smug grin on his face.');
      scene.text('You don\'t know what expression \'your\' guy had when he placed his four jacks on the table, but seeing the grin wiped off the second player\'s face almost makes it feel like you sat at the table with them.');
      scene.text('Feeling victorious (and a little lonely), you focus your attention on your beverage again while the card players set up their next round.');
      scene.actions([
        { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
      ]);
    } else {
      if (((s as any).DrinkingRand ?? 0) === 3) {
        scene.img('images/locations/city/industrial/bar/event5.mp4');
        scene.text('"Sure," Martin nods and a few seconds later, your beverage sits in front of you. You give him a grateful smile as he directs his attention at the other patrons and, since you lack a partner to converse with, focus on your drink and let your mind wander.');
        scene.text('A movement at the edge of your sight catches your eye; at first, you think your bored mind conjured up sexy images to distract you, but no, even while you\'re consciously looking at it, the scene doesn\'t vanish:');
        scene.text('In a corner of the bar, a woman is on her knees, her tits exposed to the world, giving some guy a blowjob.');
        scene.text('The boldness of this display causes you to give Martin a quick glance - he\'d probably throw them out if he noticed - but he seems occupied with one of his regulars, and it works in the couple\'s favor that they\'re getting busy in a dead angle of the room, which means that Martin can\'t readily see them from behind the counter… but everybody else can.');
        scene.text('And sure enough, as the probably drunk girl fellates her obviously drunk partner, some of the guys around them get restless. One or two even pull out their own dicks and wave it at the woman, but their subtle advances are quickly shot down by the lovebirds.');
        scene.text('They don\'t seem to mind the attention, though: He makes a point of grabbing her head and driving his dick almost balls deep into the pretty woman\'s mouth while giving the bystanders superior looks; and she seems to be getting off on the exposure and his displays of dominance, since the hand under her skirt is visibly busy while she\'s taking his shaft deep down her throat.');
        scene.text('Either you missed most of it or he\'s not one to last very long, but before you know it, the bobs of her head and work of her tongue cause him to tense up and shiver, suppressed groans reaching your ear as he blasts hot cum into her waiting mouth, causing the hand on her cunt to go crazy. She releases him and gulps visibly… and cheer breaks out among the people around them. The two of them smile at their audience without even a hint of embarrassment.');
        scene.text('The woman\'s smile is quickly replaced by lust and determination, though, and as soon as she\'s buttoned her blouse up and is back on her feet, she grabs her man\'s hand and drags him out of the bar, probably off to get hers.');
        qspCall(s, 'arousal', 'voyeur_sex', 5, 'exhibitionism');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
        ]);
      } else {
        if (((s as any).DrinkingRand ?? 0) === 4) {
          if (((s as any).pcs_horny ?? 0) < 90) {
            (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
          }
          scene.img(`images/locations/city/industrial/bar/bartalk${((s as any).pic_rand ?? '')}.jpg`);
          scene.text('"Coming right up." Only seconds later, Martin puts down a full glass in front of you before directing his attention elsewhere.');
          scene.text('As you forlornly muster the liquid, one of the many conversations in the bar piques your interest.');
          scene.text('"-and then the guy just straight-up fingered that women, right there in the metro," one man narrates.');
          scene.text('His friend seems more than a little skeptical. "You\'re fucking with me!"');
          scene.text('"No, and they didn\'t fuck either, but the guy <i>did</i> push her down on her knees and got her to blow him."');
          scene.text('"Come on, shit like that doesn\'t really happen here."');
          scene.text('"Oh no, it does," a third one confirms. "The metro\'s full of perverts these days. And so are the trains: I caught a glimpse of a couple fucking in one of the compartments."');
          scene.text('"Damn… I wish my girl would let me do something like that with her."');
          scene.text('"Yeah, mine doesn\'t want to, either," the first one laughs, "but at least this way the sluts around town are making my way home more interesting."');
          scene.text('The third one raises his glass. "To sluts!" The other two join in, down their drinks and order another round while the first describes another public exposure he has witnessed.');
          scene.text('Only now that their storytime is over do you notice how enthralled you were by it, how you pictured that woman being molested in public… and that the thought aroused you a little.');
          // TODO-QSP: $OpenInnerThought + 'Maybe I should ride the metro more often.' + $CloseInnerThought
          scene.actions([
            { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
          ]);
        } else {
          if (((s as any).DrinkingRand ?? 0) === 5) {
            if (((s as any).pcs_horny ?? 0) < 90) {
              (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 3));
            }
            scene.img('images/locations/city/industrial/bar/event1.jpg');
            scene.text('"Coming right up." Only seconds later, Martin puts down a full glass in front of you before directing his attention elsewhere.');
            scene.text('While sitting at the bar drinking, something catches your eye: A couple getting hot and heavy near you, whispering and fondling with little concern for possible onlookers; another girl you see nearby seems to have noticed them as well.');
            scene.text('After observing the two for only a few moments, you watch with arousal as the man shoves his hand down the pants of the woman, obviously stroking her pussy or finger-banging her - you can\'t tell which one but the circumstances make it exciting nonetheless.');
            scene.text('Meanwhile, she is all smiles and coos, and melts into him as he plays with her, enjoying the explicit PDA. You might have thought she\'d forgotten all about where she was if she hadn\'t, at one point, met your eyes and subsequently bucked against her man\'s hand and bit her lip to hold back moans as her lust overtook her.');
            scene.text('But as time goes by, more and more patrons notice the couple and it borders on a miracle that Martin hasn\'t seen them yet, so after a while, she whispers something into his ear - something that puts a shit-eating grin on his face - and they both hurry to the restroom…');
            scene.text('At least somebody\'s having fun.');
            scene.actions([
              { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
            ]);
          } else {
            if (((s as any).DrinkingRand ?? 0) === 6) {
              if (((s as any).pcs_horny ?? 0) < 90) {
                (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 3));
              }
              scene.img('images/locations/city/industrial/bar/event2.jpg');
              scene.text('Martin nods and prepares your beverage, then places it in front of you.');
              scene.text('"Thank you," you smile at him and earn a half-smile in return before he leaves you to yourself.');
              scene.text('While sitting at the bar drinking, you notice a woman flirting with three men. She is obviously fairly drunk but loving the attention she is getting… and getting bold, too: As you watch, she flashes her tits to them, then breaks into a giggle and goes back to teasing whispers.');
              scene.text('But not a minute later, she flashes them again, exposing herself longer this time, reveling in the hungry looks they are giving her, then chuckles and continues whatever sexually charged conversation she\'s having with them.');
              scene.text('They continue this game for a while, and after getting flashed a few more times, they seem to have reached the limits of their self-control, pawing at her and pulling her clothes aside to show everything she has to the world.');
              scene.text('But neither she, nor the other patrons seem to have a problem with that.');
              scene.text('Not long after, the four of them leave together, the woman flanked by two of the man, each of them possessively grabbing one of her ass cheeks.');
              scene.text('That woman has a long night ahead of her, you\'d wager, and the image of their impending foursame makes your belly tingle.');
              scene.actions([
                { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
              ]);
            } else {
              if (((s as any).DrinkingRand ?? 0) === 7) {
                qspCall(s, 'mood', 'lower', 'tiny');
                scene.img('images/locations/city/industrial/bar/event8.jpg');
                scene.text('"Sure," Martin nods and a few seconds later, your beverage sits in front of you. You give him a grateful smile as he directs his attention at the other patrons and, since you lack a partner to converse with, focus on your drink and let your mind wander.');
                scene.text('You are shaken from your reverie when an older man sits down next to you.');
                scene.text('"Drunk" isn\'t quite strong enough to describe the state he\'s in - it looks like he has to actively keep himself from falling asleep right there and then - and you fully expect him to start hitting on you, but he doesn\'t.');
                scene.text('Instead, he starts telling you a tale of woe: His "bitch wife" finally left him last week, his "ungrateful kids" refuse to talk to him anymore and he just lost his job today "because of that fuckin\' asshole of a boss". He\'s slurring most of his story, but all the curses come out clearly articulated.');
                scene.text('He talks about how the world has gone to shit and how a man can no longer be a man without someone stepping on him… then more or less starts over, apparently not remembering that he already told you about his "bitch wife".');
                scene.text('You are feeling genuinely sympathetic towards him… but you are quite happy nonetheless when he finally falls unconscious right in the middle of the sentence and starts drooling on the counter.');
                // TODO-QSP: $OpenInnerThought + 'They can take his job, but they can never take his dignity,' + $CloseInnerThoug...
                scene.actions([
                  { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                ]);
              } else {
                if (((s as any).DrinkingRand ?? 0) === 8) {
                  scene.img('images/locations/city/industrial/bar/event10.jpg');
                  qspCall(s, 'npc_relationship', 'modify', 'A216', 1);
                  scene.text('Martin nods and prepares your beverage. While he does, you hear voices swell behind you and turn to find their source.');
                  scene.text('A group of drunk men sitting at one of the nearby tables are joking loudly and discussing this and that at the top of their voices. Just then, a pretty woman walks by the table and one of the men grabs her and pulls her into his lap. His friends laugh as she struggles to get free.');
                  scene.text('"Finally found a woman that\'s less ugly than your wife, Egor?"');
                  scene.text('Eventually, she slaps him across the face, which gets his friends laughing even more: "Haha, she likes you about as much as your wife, though!"');
                  scene.text('Egor doesn\'t seem to be in a joking mood, though - he raises his hand to slap her back, but before he can, Martin, appearing seemingly out of nowhere, has his wrist in a vice grip and twists the drunk\'s arm until he lets the woman go, who quickly hurries away.');
                  scene.text('Egor\'s friends start to get up, but Martin gives them a piercing look and that seems to be all it takes to make them falter.');
                  scene.text('"Do you want to walk out", the barman asks menacingly, "or be thrown out?"');
                  scene.text('You\'re not entirely sure if they are scared of him - though he is undoubtedly very scary - or if they are sober enough to realize that half the men in the suddenly very silent bar would rush to his aid if he needed it.');
                  scene.text('Whichever it is, they wisely choose to walk out while they still can.');
                  scene.text('Shortly after, the bar returns to normal, and after taking a moment to check up on the woman he saved, Martin brings you that drink you\'d all but forgotten about. Say what you will about his appearance but he seems to have his heart in the right place.');
                  scene.actions([
                    { label: 'Enjoy your drink', goto: ['qwBarPolet', 'bar'] },
                  ]);
                } else {
                  if (((s as any).DrinkingRand ?? 0) === 9) {
                    if (((s as any).pcs_horny ?? 0) < 90) {
                      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                    }
                    scene.img('images/locations/city/industrial/bar/event3.jpg');
                    scene.text('"Sure," Martin nods and a few seconds later, your beverage sits in front of you. You give him a grateful smile as he directs his attention at the other patrons and, since you lack a partner to converse with, focus on your drink and let your mind and your eyes wander.');
                    scene.text('You notice an older woman - well, older than you, but she\'s probably only in her early thirties - who, as you quickly realize, flashes and keeps on flashing her tits to Martin whenever he looks her way.');
                    scene.text('But other than the occasional smile, he gives no hint of even being aware of her antics. She does catch the attention of several other men, though, and they move over to talk to her.');
                    scene.text('She evidently has no interest in them but they don\'t take the hint until Martin gives them one of his scary looks.');
                    scene.text('Coincidentally, the moment they notice, they all suddenly remember some very important business they have to take care of elsewhere immediately, and the woman\'s fan club scatters in seconds.');
                    scene.text('Of course, this only encourages her to redouble her efforts in flirting with Martin, and when Martin\'s eyes meet yours, you share a shrug and a knowing smile with him and focus on your beverage.');
                    scene.actions([
                      { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                    ]);
                  } else {
                    if (((s as any).DrinkingRand ?? 0) === 10) {
                      if (((s as any).pcs_horny ?? 0) < 90) {
                        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                      }
                      scene.img('images/locations/city/industrial/bar/event4.jpg');
                      // TODO-QSP: '"Right away," Martin says. With practiced ease, he pours you a beverage and sets it in front of you...
                      scene.text('As you sip on your drink, you let your mind and your eyes wander and- wait, what was that?');
                      scene.text('Your eyes focus on a woman, not too far from you. At first you thought you were seeing things but now you\'re sure: She is sitting there, her legs spread just enough to reveal that she has no panties on under her dress!');
                      scene.text('And she doesn\'t seem embarrassed about it, either - on the contrary: She is biting her finger lasciviously as she\'s looking around the bar, daring fate to make somebody notice her lack of underwear. It doesn\'t take much of a detective to realize that she enjoys the risk of public exposure.');
                      scene.text('Then you realize something else: She is looking here and there, but she seems to be deliberately avoiding to look in your direction - could she be aware of your looking at her?');
                      scene.text('You quickly turn your face straight ahead again and focus so hard on your drink that it\'s should be catching fire any second now.');
                      scene.text('The image in your head, however, is that of the exhibitionist and her smooth, exposed pussy…');
                      scene.actions([
                        { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                      ]);
                    } else {
                      if (((s as any).DrinkingRand ?? 0) === 11) {
                        if (((s as any).pcs_horny ?? 0) < 90) {
                          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 1));
                        }
                        scene.img('images/locations/city/industrial/bar/event9.jpg');
                        scene.text('"Coming right up." Only seconds later, Martin puts down a full glass in front of you before directing his attention elsewhere.');
                        scene.text('Lacking somebody to talk to, you prick your ears to catch an interesting conversation to eavesdrop on, but you are all out of luck. Bored, you look around the room, but all you see are people talking, people drinking, a couple walking towards the bathroom door, somebody trying to chew his initials into- wait, what?');
                        scene.text('Your eyes move back to the bathroom door, just in time to see the shy-looking woman disappear and the man closing the door behind them; but just before it does, your eyes and his meet briefly. Was that a grin?');
                        scene.text('You stare at the door intently, but no matter how much willpower you conjure up, you cannot look through solid matter. All you can do is use your imagination, but it provides no shortage of possible positions and practices they might be trying out in the public toilet.');
                        scene.text('Seconds pass and turn into minutes. Frankly, you\'re not sure how long they\'ve been in there, and even though you think you can hear a moan or another telltale noise every now and then, nobody in the room seems to look around or pay any attention. But you didn\'t just imagine that couple going in there… did you?');
                        scene.text('No, sure enough, the bathroom door opens and a disheveled brunette steps out, her eyes glued to the ground, beads of sweat on her forehead and her face as red as it gets.');
                        scene.text('Two seconds later, a man follows, and his eyes immediately find yours, his lips parting to a self-satisfied, lewd smile.');
                        scene.text('He knew you had noticed them. He was aware that you would be waiting for them to come out again. And, looking at how ashamed the woman seems to be, maybe he told her too…');
                        scene.actions([
                          { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                        ]);
                      } else {
                        if (((s as any).DrinkingRand ?? 0) === 12) {
                          scene.img(`images/locations/city/industrial/bar/bartalk${((s as any).pic_rand ?? '')}.jpg`);
                          scene.text('"Alright." Martin nods and prepares your beverage, then places it in front of you.');
                          scene.text('"Thank you," you smile at him and earn a half-smile in return before he leaves you to yourself.');
                          scene.text('"Well, I guess this place is okay, but I don\'t get why you insisted on bringing me here," you hear a male voice from nearby table.');
                          scene.text('"Are you kidding? This place is the most homely bar in the whole city," a second one declares. "Being here is like sitting in your living room, except without your wife nagging all the time."');
                          scene.text('"True, not many women here who could start whining," the first comments dryly. After a pause, he continues: "Hey, is the barman Cuban or something?"');
                          scene.text('"He\'s Colombian."');
                          scene.text('"What the difference?"');
                          scene.text('"More drugs, less communism."');
                          scene.text('"Is that why he looks like he could murder everybody in the room?"');
                          scene.text('"Martin is great. I definitely wouldn\'t piss him off, though," the second one explains. "I just wish he didn\'t close the bar so early. What bar closes at midnight?"');
                          scene.text('"Most of them do. Have you ever actually been to another bar?" The other male asks.');
                          scene.text('"Why bother? The beer tastes like piss everywhere," his friend remarks, and they both laugh and raise their glasses to that.');
                          scene.actions([
                            { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                          ]);
                        } else {
                          if (((s as any).DrinkingRand ?? 0) === 13) {
                            scene.img(`images/locations/city/industrial/bar/bartalk${((s as any).pic_rand ?? '')}.jpg`);
                            scene.text('"Coming right up." Only seconds later, Martin puts down a full glass in front of you before directing his attention elsewhere.');
                            scene.text('As you muster the liquid that can only do so much to cure your boredom, you start listening in on a nearby conversation.');
                            scene.text('"…and the guy yelled at me for ten minutes! \'What do you mean, I can\'t buy a second car?! I demand to see your manager!\' It\'s good my boss showed up when he did, because I was about to punch him."');
                            scene.text('"I don\'t get it. Why couldn\'t he just buy that car?"');
                            scene.text('"Because the governor\'s wife was caught having an affair with her driver and the governor doesn\'t want her to leave the house on her own anymore, so he had the assembly pass that law for him."');
                            scene.text('"… really?"');
                            scene.text('"<b>No, you idiot!</b> I don\'t have a fucking clue why you can\'t buy a second car. How am I supposed to know? I can\'t even afford <b>one</b>!"');
                            scene.actions([
                              { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
                            ]);
                          } else {
                            if (((s as any).DrinkingRand ?? 0) === 14) {
                              scene.img(`images/locations/city/industrial/bar/bartalk${((s as any).pic_rand ?? '')}.jpg`);
                              scene.text('"Of course." With practiced ease, Martin prepares your beverage and puts down a full glass in front of you before another patron draws his attention.');
                              scene.text('While you enjoy your drink in solitude, you pick up a nearby conversation.');
                              scene.text('"… Speaking of which, I heard somebody got hurt at your plant last week."');
                              scene.text('The other man nods gravely. "Last Wednesday was a complete mess. Vanya got his hand stuck in the conveyor belt."');
                              scene.text('"Really, Vanya? Fuck… Is he alright?"');
                              scene.text('The man shrugs. "He\'s probably gonna lose the hand, but the paramedics said he got lucky we shut it down when we did. Anyway, after that, the militia showed up and shut down the entire plant. By the time we were free to leave, there were photographers everywhere."');
                              scene.text('"They\'re gonna tear your boss a new one over work safety."');
                              scene.text('"Meh, maybe. You know how things are: They talk about it for a week or two, somebody gets a \'small donation\' and it\'s all back to normal."');
                              scene.text('"Yeah, I guess you\'re right. Poor Vanya."');
                              scene.text('"No kidding. We came over to the bar to drink to his health, but Martin had it closed."');
                              scene.text('"Yeah, he always closes the bar on Wednesdays. Everyone needs a day off, even him."');
                              scene.text('"Why Wednesdays of all days, though?"');
                              scene.text('"I asked him that once, actually. He said: \'If you\'ve made it through Monday and Tuesday, you can make it to Thursday, with or without a drink.\'"');
                              scene.text('"Easy for him to say. He\'d probably change his mind if he had been there with us…"');
                              scene.text('Whoever this Vanya is, his fate makes you think that you should probably aim higher than assembly-line work.');
                              scene.actions([
                                { label: 'Finish your drink', goto: ['qwBarPolet', 'bar'] },
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  const arg = s.locArg;
  switch (arg) {
    case 'bar':
      enterBar(s, scene);
      break;
    case 'DrinkingBooze':
      enterDrinkingBooze(s, scene);
      break;
    case 'Ordering':
      enterOrdering(s, scene);
      break;
    case 'RandomDrinkEvents':
      enterRandomDrinkEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const qwBarPolet: LocationDef = {
  name: 'qwBarPolet',
  title: 'Bar "Rabotnik"',
  region: 'other',
  locationType: 'public_indoors',
  description: ['As you enter the bar, you see that about a dozen regular tables and stools take up most of the room. A bar counter, right in front of you, dominates the center of the establishment. At the far end of it, near a door leading to the toilet, a doorway with a curtain leads to the obligatory pool table that rounds off the furniture.'],
  enter: enter,
};
