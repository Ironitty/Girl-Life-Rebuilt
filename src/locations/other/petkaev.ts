import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFollowPetka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/nerdtalk.jpg');
  if (((s as any).petkaQW ?? 0)?.['bribe'] === 1) {
    scene.text('You follow Petka into the bathroom. He quickly turns around, looking very eager.');
    scene.text('"Do you need my homework again?" he asks, clearly hoping for a repeat of last time.');
    scene.text('You nod your head. "Yeah."');
    scene.text('He licks his lips and you can already see the growing bulge in his pants. "Same as last time?"');
    scene.text('You again nod your head as you walk over to him.');
    scene.actions([
      { label: 'Change your mind', goto: ['gschool_events', 'leave_break_events2'] },
      { label: 'Bribe him with sex again', goto: ['petkaev', 'homework_sex_bribe'] },
    ]);
  } else {
    if (((s as any).petkaQW ?? 0)?.['blackmail'] === 1) {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] === 0) {
        scene.text('You follow Petka into the bathroom. He quickly turns around when the door closes, looking a bit alarmed.');
        scene.text('"What do you want?" he asks with fear in his voice, obviously remembering what you did to him in the locker room when you caught him spying on you.');
        scene.text('You smile at him, feeling a rush of power at seeing him afraid of you. You could just enjoy taunting him a little. Or you could demand his homework - he is pretty smart, after all. Or maybe he needs another fucking?');
      } else {
        scene.text('You follow Petka into the bathroom. He quickly turns around, looking a bit alarmed.');
        scene.text('"What do you want?" he asks, fear in his voice as his eyes drift down to your purse, remembering what you did to him in the locker room when you caught him spying on you.');
        scene.text('You smile at him, feeling a rush of power at seeing him afraid of you. You could just enjoy taunting him a little. Or you could demand his homework - he is pretty smart, after all. Or maybe he needs another fucking?');
      }
      if (((s as any).petkaQW ?? 0)?.['homework'] === 1) {
        scene.actions([
          { label: 'Demand his homework', handler: (st: GameState) => {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 2, 'A6');
    scene.text('You hold out your hand. "Give me your homework, unless you want the teachers to know what you get up to in the girls\' locker room."');
    scene.text('He blushes bright red and shakes his head. "No… no…" he mutters, opening up his backpack before pulling out some papers and handing them over. "Here - here\'s my homework," he says with a sigh.');
    scene.text('You smile at him. "Pleasure doing business with you, perv."');
    scene.text('With his homework in hand, you turn and leave. You have just enough time to make changes to the papers to make them look like yours before the next class.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Do nothing', handler: (st: GameState) => {
    scene.text('You just smirk at him. "Just keeping you on your toes. Next time, I might not be so nice…"');
    scene.text('With that, you turn and walk out.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
        { label: 'Pull out your strap-on', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/showstrapon.jpg');
    scene.text('You reach into your bag and take out your strap-on. You let the harness dangle from your hand in clear view of him.');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] === 0) {
      scene.text('He blushes and looks around nervously. "What?! Why do you have that?!"');
      scene.text('You smile confidently at him. "This is a strap-on, which I\'m going to put it on, bend you over and fuck you with."');
      scene.text('He starts shaking his head. "What if someone comes in?"');
      scene.text('Fate seems to answer him, as the class bell rings. He looks relieved.');
      scene.text('You just grin. "See? Everyone is heading to class, so no one is going to come in. I could also just let the teachers know what you\'re doing in the girls\' locker room and get you expelled…"');
      scene.text('He suddenly looks even more panicked than before, his shoulders sagging in defeat. "Okay, okay! Just… Don\'t get me expelled."');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] < 5) {
        scene.text('He blushes and looks around nervously. "Again?! Here?"');
        scene.text('You smile confidently at him. "Yes, again. Remember, you\'re my little butt slut. Unless you want me to tell everyone what you get up to in the girls\' locker room?"');
        scene.text('He shakes his head, letting his shoulder sag in defeat. "Okay, okay! Just… Don\'t be so rough this time, please. My ass was sore last time!"');
        scene.text('You just keep smiling. "Oh, please! You moaned like a whore last time! Besides, after I stretch out your asshole a few more times with my dick, it will stop hurting. Now turn around and get those pants off."');
        scene.text('He blushes harder, which you didn\'t think was possible, but he does as you ask. He turns around, facing away from you, and starts to unbutton his pants.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] < 10) {
          scene.text('He bites his lower lip and looks at your strap-on. "Are you going to fuck me again?" he asks, sounding all too eager.');
          scene.text('You smile confidently at him. "Well, aren\'t you the eager little slut? And, yes, I am going to fuck you with my big dick again."');
          scene.text('Before you even ask, he turns around and starts unbuttoning his pants.');
        } else {
          scene.text('He blushes and looks around nervously. "What!? Why do you have that?"');
          scene.text('You smile confidently at him. "So I can bend you over and fuck your ass!"');
          scene.text('He blushes harder, which you didn\'t think was possible. "What if someone comes in and sees us?"');
          scene.text('Fate seems to answer him, as the class bell rings. He looks relieved.');
          scene.text('You just grin. "See? Everyone is heading to class, so no one is going to come in. I could also just let the teachers know what you\'re doing in the girls\' locker room and get you expelled…"');
          scene.text('He suddenly looks even more panicked than before, his shoulders sagging in defeat. "Okay. okay! Just… Don\'t get me expelled."');
        }
      }
    }
    scene.actions([
      { label: 'Put the harness on', goto: ['petkaev', 'school_restroom_strap'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).petkaQW ?? 0)?.['threaten'] === 1) {
        qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 2, 'A6');
        qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
        scene.text('You follow Petka into the bathroom, who looks a little afraid and crestfallen when he sees you.');
        scene.text('"What do you want this time?" he asks.');
        scene.text('"The same thing as last time, Petka. Or do you need a reminder?" you reply.');
        scene.text('He quickly pulls out his homework, clearly afraid of you. "Here, take it! Just please leave me alone…"');
        scene.actions([
          { label: 'Take his homework', goto: ['gschool_events', 'leave_break_events2'] },
        ]);
      } else {
        scene.text('You follow Petka into the bathroom. He quickly turns around when the door closes, looking a little alarmed and confused when he sees you. "Hey, this is the boys\' bathroom! You shouldn\'t be in here!"');
        scene.text('You just ignore him. "I was wondering if you could do me a favor, Petka. How about you give me your homework so I can copy it?"');
        scene.text('He\'s already shaking his head before you even finish. "I can\'t do that! That would be cheating and I could get expelled for helping you cheat! Sorry, but I can\'t help you."');
        if (((s as any).grupTipe ?? 0) === 1) {
          qspCall(s, 'willpower', 'misc', 'force', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Threaten his reputation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Threaten his reputation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'force', 'medium');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    (s as any).petkaQW['threaten'] = 1;
    (s as any).petkaQW['homework'] = 1;
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (5);
    (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) + (3);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'loathe');
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 2, 'A6');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You sigh. "Well, I guess I\'ll just have to tell everyone that I just caught you jerking off to upskirt pictures of the girls on your phone."');
    scene.text('He turns pale. "I never did that! The guys will make fun of me or even beat me up!"');
    scene.text('You shrug. "Sorry, but I can\'t help you," you reply in a mocking tone.');
    scene.text('He hangs his head for a moment, then nods. "Okay, you can have my homework!" he says as he pulls it out of his bag. "Just please leave me alone."');
    scene.text('You take the homework from him. "See how easy that was?"');
    scene.text('You leave with the homework to find a quiet place to copy it before class.');
    scene.actions([
      { label: 'Take the homework', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
            ]);
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
            qspCall(s, 'willpower', 'misc', 'force', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Give him a swirly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Give him a swirly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'force', 'medium');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    (s as any).petkaQW['threaten'] = 1;
    (s as any).petkaQW['homework'] = 1;
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (10);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (3);
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'loathe');
    qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 2, 'A6');
    scene.img('images/locations/pavlovsk/school/bathroom/swirlygb.jpg');
    scene.text('You look at him, a little surprised that he would turn you down, but you have a solution in mind. "Okay then…"');
    scene.text('He looks relieved, but as you step closer to him, he panics. You grab him by the ear and start pulling him into one of the stalls. He grabs your hand and starts to pry your fingers off him.');
    scene.text('You release his ear, only to knee him hard in the balls, causing him to crumple to the floor with a gasp while holding his crotch.');
    scene.text('"Get up, pussy," you say coldly before hauling him up onto his hands and knees and shove him forward until his face is over the toilet bowl. "Ready to give me your homework yet?"');
    scene.text('He pleads with you and resists by placing his hands on the toilet bowl. "No! Let me go! Please!"');
    scene.text('Maneuvering a little, you get into a position where you can push down on his head and deliver another kick to his balls. He crumples as he cries out and you place one of your knees on his upper back while using one hand to force his head into the toilet.');
    scene.text('After a few dunks and him still refusing, you use your other hand to reach down the back of his pants. Clutching his underwear, you yank on them until you hear cloth tearing.');
    scene.text('He finally relents. "Okay! Okay! Y-you can have my homework! Just, please… stop!" he pleads through what sounds like sobs.');
    scene.actions([
      { label: 'Let him up', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You let go of him and back off, letting him shakily get back on his feet.');
    scene.text('"Well?" you demand.');
    scene.text('He grabs his pack and pulls out some papers before quickly handing them over. "Here! Now please leave me alone…" he says as his voice cracks.');
    scene.text('You smile at him and pat him on the cheek, causing him to flinch. It\'s hard to tell with the toilet water on his face if he\'s crying or not. "See? That wasn\'t so hard, was it? Next time you\'ll know better," you say in a mocking tone.');
    scene.text('He\'s on the verge of tears and just nods. You leave with the homework to find a quiet place to copy it before class.');
    scene.actions([
      { label: 'Take the homework', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
        qspCall(s, 'willpower', 'sex', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Bribe him with sex [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Bribe him with sex [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).petkaQW['bribe'] = 1;
  }, goto: ['petkaev', 'homework_sex_bribe'] },
          ]);
        }
        scene.actions([
          { label: 'Admit defeat', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/nerdtalk.jpg');
    scene.text('You sigh.');
    scene.text('<i>Maybe I really will have to study to get my grades up,</i> you think to yourself as you leave the bathroom.');
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterHomeworkSexBribe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
  (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (3);
  (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
  (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (4);
  qspCall(s, 'npc_relationship', 'modify', 'A6', 'love');
  (s as any).npc_had_sex['A6'] = 1;
  qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 2, 'A6');
  qspCall(s, 'fame', 'pav', 'sex', 5);
  qspCall(s, 'npcStat', 'A6');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homework1.jpg');
  scene.text('You walk over to him and start to undo your shirt. "If you do this for me, I\'ll do something for you," you say in your most seductive tone.');
  scene.text('His eyes bulge as he looks down at your chest.');
  scene.text('"Like what?" he squeaks out.');
  scene.actions([
    { label: 'Take off your top', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homework2.jpg');
    scene.text('You pull open your shirt and show him your bare breasts. "Like you do something for me, I can make you feel real good. What do you say?"');
    scene.text('He swallows hard as he stares at your breasts and nods vigorously. You can see the growing bulge in his pants.');
    scene.text('"Well, you need to get me ready," you tell him as you walk over to the stall with your back turned to him. "Why don\'t you use that tongue to get me all wet?"');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You pull down your panties, letting them drop to the floor around your ankles as he walks up behind you and kneels down.');
    }
    scene.actions([
      { label: 'Eat me', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homework3.jpg');
    scene.text('You lean forward, spreading your legs and asscheeks to give him easier access to your pussy. He starts eagerly licking your pussy - so eagerly, in fact, his tongue occasionally reaches your asshole. You\'re not sure if he\'s doing it intentionally or not due to inexperience, but he\'s definitely giving it his all.');
    qspCall(s, 'arousal', 'cuni', 2, 'unknown');
    qspCall(s, 'arousal', 'rimming', (-2), 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Ride him cowgirl', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworkride1.jpg');
    scene.text('Getting tired of his lackluster attempt to eat you out, you push his head away.');
    scene.text('"Get your cock out and lay on your back," you order.');
    // TODO-QSP: dynamic text: He quickly gets on his back and unbuttons his pants, his <<dick>>cm <<$dick_girt...
    scene.text(`He quickly gets on his back and unbuttons his pants, his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick springing free. You take your clothes off and walk over to him before straddling him and slowly lowering yourself down, feeling his cock slide into you.`);
    scene.text('You start off slowly riding him, picking up speed as it starts to feel better and better.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Reverse cowgirl', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworkride2.jpg');
    scene.text('It starts to feel really good, but looking into his longing eyes starts to bother you, so you turn around and start riding him reverse cowgirl style. This is even better since you can just focus on your own pleasure and not worry about him as you use him.');
    scene.text('His breathing becomes quicker and he starts to grunt louder.');
    scene.text('"I\'m about to cum!" he announces.');
    qspCall(s, 'arousal', 'vaginal', 5, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['petkaev', 'petra_homework_facial'] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck me', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworkv1.jpg');
    scene.text('Getting tired of his lackluster attempt to eat you out, you push his head away.');
    scene.text('"Get your cock out and come over here," you order.');
    // TODO-QSP: dynamic text: He quickly unbuttons his pants and his <<dick>>cm <<$dick_girth>> dick springs f...
    scene.text(`He quickly unbuttons his pants and his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick springs free. You take your clothes off and walk over to the sinks before getting into position. "Come over here and fuck my pussy."`);
    scene.text('He doesn\'t waste any time and hurries over behind you. His inexperience shows, as it takes him a few tries to get his cock inside you.');
    scene.text('Finally, with your help, he gets himself lined up and slides his cock into your pussy, moaning loudly as he does. He quickly slides himself in balls deep and starts frantically fucking you without technique, like you imagine a virgin would.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworkv2.jpg');
    scene.text('What he lacks in skill, he almost makes up for in enthusiasm, although you can tell he\'s trying to restrain himself. It doesn\'t take too long before he moans out that he\'s about to cum, though.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['petkaev', 'petra_homework_facial'] },
    ]);
  } },
      { label: 'You can fuck my ass', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworka1.jpg');
    scene.text('"I want you to fuck my ass now," you order.');
    scene.text('He nods and pulls out before trying to put his dick in your ass, failing until you grab his dick and help line it up.');
    scene.text('He finally slides his cock up your ass, which seems to really excite him; it doesn\'t take long at all until he moans out that he\'s about to cum.');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['petkaev', 'petra_homework_facial'] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck my ass', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'auto_lube', 'anal');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworka1.jpg');
    scene.text('Getting tired of his lackluster attempt to eat you out, you push his head away.');
    scene.text('"Get your cock out and fuck my ass," you order.');
    // TODO-QSP: dynamic text: He quickly unbuttons his pants and his <<dick>>cm <<$dick_girth>> dick springs f...
    scene.text(`He quickly unbuttons his pants and his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick springs free. You take your clothes off before leaning against the side of the stall, using one hand to spread your cheeks while the other guides his dick to your asshole.`);
    scene.text('With your help, he gets it lined up and slides his cock into your ass, moaning loudly as he does. He quickly slides himself in balls deep and starts frantically fucking you without technique, like you imagine a virgin would.');
    scene.actions([
      { label: 'Pound my ass', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworka2.jpg');
    scene.text('After he pulls back and slips out of you one too many times, you decide to change positions. "Stop, let me change to a better position."');
    scene.text('He stops and waits while you lay down face first on the floor. You\'re a little thrilled at the idea of laying on the dirty floor while some guy fucks your ass. You reach back with both hands and spread your ass cheeks wide, glancing back at him. "Well? What are you waiting for?"');
    scene.text('That is all the encouragement he needs and he quickly gets down on top of you. This time he doesn\'t have any trouble shoving his dick back in your ass. He starts fucking your ass again before very quickly moaning out that he\'s about to cum.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him cum on your face', goto: ['petkaev', 'petra_homework_facial'] },
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

function enterPetraHomeworkFacial(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworkcum.jpg');
  scene.text('Hearing him say he is close, you force him to pull out of you and you get down on your knees.');
  scene.text('"You can jerk off on my face," you tell him.');
  scene.text('He stands over you and starts stroking himself. A few seconds later, you feel the first splatter of cum hit your face, quickly followed by several more. Before long, half your face is covered in his cum.');
  scene.text('Once he finally finishes, you get up and start getting dressed again. Seeing this, he puts his dick away and pulls out his homework from his pack.');
  qspCall(s, 'cum_call', 'face', 'A6');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Take the homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('With his cum still on your face, you take the offered homework and smile at him. "See? I knew we could work something out. Now get lost!"');
    scene.text('He smiles at first, then looks a little alarmed when you tell him to get lost. He quickly exits the bathroom, leaving you alone.');
    scene.actions([
      { label: 'Clean your face and leave', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    qspCall(s, 'cum_cleanup', '', 9);
    qspCall(s, 'cum_cleanup', '', 11);
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    qspCall(s, 'stat', '');
  }, goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolRestroomStrap(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging1.jpg');
  scene.text('You hike up your skirt and step into the strap-on harness. You pull it up into place, pulling the straps tight until it\'s securely in place.');
  scene.text('As you look back at Petka, you see he\'s now bent over with his pants pulled down to his knees, his inviting ass facing towards you.');
  if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] === 0) {
    scene.text('You walk up behind him and give his ass a slap, which causes him to jump and yelp a little. "You ready to take my big, fat cock in your ass?"');
    scene.text('He shakes his head. "No, I don\'t want to do this!"');
    scene.text('You snort. "Too bad. This is what happens to little perverts like you."');
  } else {
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] < 5) {
      scene.text('You walk up behind him and give his ass a slap, which causes him to jump a little, but you think you detect a bit of a moan from him as well. "You ready to take my big, fat cock in your ass?"');
      scene.text('He nods his head. "Yes, but maybe not so rough this time…"');
      scene.text('You grab his hair and pull his head back. "I\'ll fuck your ass however I want! Got it?!"');
      scene.text('He nods his head a great deal. "Yes."');
      scene.text('You let go of his hair and smack his ass again. You hear him moan a little this time. "That\'s \'Yes, Mistress.\'"');
      scene.text('He pauses a moment. "Yes, Mistress…"');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] < 10) {
        scene.text('You walk up behind him and give his ass a slap, which causes him to jump a little, but you think you detect a bit of a moan from him as well. "You ready to take my big, fat cock in your ass?"');
        scene.text('He nods his head eagerly. "Yes, Mistress!"');
        scene.text('You grab his hair and pull his head back. "Look at you! You\'re turning into such an eager little butt slut." You let go of his hair. "Beg me to fuck your ass, you little slut!"');
        scene.text('He replies to your command quickly. "Please fuck my ass, Mistress!"');
        scene.text('You smack his ass again. "That\'s a good little butt slut."');
      } else {
        scene.text('You walk up behind him and give his ass a slap, which causes him to jump and yelp a little. "You ready to take my big, fat cock in your ass?"');
        scene.text('He sighs and sounds defeated, maybe even ashamed. "Okay, let\'s get this over with…"');
        scene.text('You grab his hair and pull his head back. "This is over when I say it\'s over! Got it?!"');
        scene.text('He nods his head. "Yes, Mistress…"');
      }
    }
  }
  scene.actions([
    { label: 'Get ready to fuck him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging1.jpg');
    scene.text('You check the straps to make sure they\'re good and tight.');
    (s as any).petkaQW['restroom_strapon'] = ((s as any).petkaQW['restroom_strapon'] ?? 0) + (1);
    (s as any).petkaQW['pegged'] = ((s as any).petkaQW['pegged'] ?? 0) + (1);
    if (((s as any).penisEnvyVariable ?? 0) === 1) {
      scene.actions([
        { label: 'Fuck him with your magic dick', goto: ['petkaev', 'school_restroom_pegging_magic'] },
      ]);
    } else {
      if (((s as any).spellKnown ?? 0)?.['penisenvy'] === 1) {
        scene.actions([
          { label: 'Cast Penis Envy spell', handler: (st: GameState) => {
    qspCall(s, 'castSpell', 'penisenvy');
    if (((s as any).spellSuccess ?? 0) > 0) {
      scene.actions([
        { label: 'Fuck him with your magic dick', goto: ['petkaev', 'school_restroom_pegging_magic'] },
      ]);
    } else {
      scene.actions([
        { label: 'Just peg him with your strap-on', goto: ['petkaev', 'school_restroom_pegging'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Peg him with your strap-on', goto: ['petkaev', 'school_restroom_pegging'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterSchoolRestroomPegging(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    scene.actions([
      { label: 'Use lube', handler: (st: GameState) => {
    (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging2.jpg');
    scene.text('You walk up behind him and lube up the dildo, then his ass as well. You slap the dildo against his ass before lining it up against his asshole.');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
      scene.text('You keep pushing and he tenses up before your dildo suddenly pops into his ass and he cries out in pain.');
      scene.text('You slap his ass. "Take a deep breath and release it slowly."');
      scene.text('He does as you say, but he doesn\'t relax too much. "Ow! It still hurts!"');
      scene.text('You snort. "Don\'t worry, I\'ll stretch you out soon enough."');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
        scene.text('You keep pushing as he tenses up a little. Your dildo pops into his ass more easily this time, but he still groans a little in pain.');
        scene.text('You slap his ass. "Take a deep breath and release it slowly."');
        scene.text('He does as you say and you can feel him relax. It seems like he\'s getting used to it. "It still hurts a little."');
        scene.text('You snort. "Only a little? You\'re starting to like it, aren\'t you?"');
        scene.text('You see his face turning red. "N-no!" he sputters, but you can tell he\'s starting to like it.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
          scene.text('You keep pushing and he takes a deep breath and fully relaxes, letting your dildo slowly slide into his ass, emitting a moan of pleasure from him.');
          scene.text('You slap his ass. "Someone\'s starting to love taking dick in his ass."');
          scene.text('He moans louder. "Yes… It\'s starting to feel really good."');
          scene.text('You snort. "I\'ll turn you into such a good little butt slut."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
          scene.text('You keep pushing as he tenses up before your dildo suddenly pops into his ass and he hisses in pain.');
          scene.text('You slap his ass. "Take a deep breath and release it slowly."');
          scene.text('He does as you say, but only seems to relax a little. "Ow! It still hurts!"');
          scene.text('You snort. "Don\'t worry, you\'re going to be loving it soon enough."');
        }
      }
    }
    qspCall(s, 'arousal', 'anal_strap_give', 1, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start fucking his ass', goto: ['petkaev', 'femdom_petka_doggy'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Use spit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging2.jpg');
    scene.text('You walk up behind him, spitting on your dildo a few times and rubbing the saliva along the shaft of it before slapping your dildo against his ass.');
    scene.text('"Spread your cheeks," you command and he does so as you spit in the crack of his ass a few times and watch your saliva run down to his asshole. You rub the tip of your dildo against your spit on his ass and work it in, along with his saliva on your dildo.');
    scene.text('You then line the dildo up against his asshole.');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A6', 'loathe');
      scene.text('You keep pushing as he tenses up before your dildo suddenly pops into his ass and he cries out in pain.');
      scene.text('You slap his ass. "Take a deep breath and release it slowly."');
      scene.text('He does as you say, but he doesn\'t relax too much. "Ow! Fuck, it hurts! It hurts a lot!"');
      scene.text('You snort. "Don\'t worry, I\'ll stretch you out soon enough."');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
        scene.text('You keep pushing as he tenses up a little. Though your dildo pops into his ass more easily than usual, he still groans in pain.');
        scene.text('You slap his ass. "Take a deep breath and release it slowly."');
        scene.text('He does as you say and you can feel him relax. It seems he\'s getting used to it. "It still hurts a little."');
        scene.text('You snort. "Only a little? You\'re starting to like it, aren\'t you?"');
        scene.text('You see his face turning red. "N-no!" he sputters, but you can tell he\'s starting to like it.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
          scene.text('You keep pushing and he takes a deep breath and fully relaxes. Your dildo slowly slides into his ass, and Petka emits a sound that\'s both a moan of pleasure and a groan of pain.');
          scene.text('You slap his ass. "Someone\'s starting to love taking dick up his ass."');
          scene.text('He moans louder. "Yes… It\'s starting to feel really good."');
          scene.text('You snort. "I\'ll turn you into such a good little butt slut."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
          scene.text('You keep pushing against it as he tenses up before your dildo suddenly pops into his ass and he hisses in pain.');
          scene.text('You slap his ass. "Take a deep breath and release it slowly."');
          scene.text('He does as you say, but he doesn\'t seem to relax much. "Ow! It still hurts!"');
          scene.text('You snort. "Don\'t worry, you\'re going to be loving it soon enough."');
        }
      }
    }
    qspCall(s, 'arousal', 'anal_strap_give', 1, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start fucking his ass', goto: ['petkaev', 'femdom_petka_doggy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemdomPetkaDoggy(s: GameState, scene: SceneBuilder): void {
  (s as any).petkaQW['sub'] = ((s as any).petkaQW['sub'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'D<<strapNumber>>');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging3.jpg');
  if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
    // TODO-QSP: dynamic text: As you slide your <<dick>>cm <<$dick_girth>> dildo deeper into his asshole, he g...
    scene.text(`As you slide your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo deeper into his asshole, he groans and grunts in pain.`);
    scene.text('You grin. "Tell me you like taking my cock up your ass."');
    scene.text('He groans louder. "I don\'t like it! It hurts!"');
    scene.text('You thrust your dildo all the way into his ass, causing him to loudly grunt in pain. "I said, tell me you like taking my cock up your ass!"');
    scene.text('"YES! Yes, I like it… Please, not so hard!" he responds in a panicked voice.');
    scene.text('You decide to take a little pity on him and just go back to fucking his ass normally.');
  } else {
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
      scene.text('As you fuck his ass with your strap-on, his groans of pain slowly start giving way to moans of pleasure. You notice him reach between his legs and start jerking off.');
      scene.text('You grin. "Tell me you like taking my cock up your ass."');
      scene.text('He moans in pleasure. "Yes, it\'s starting to feel good."');
      scene.text('You slap his ass and stop moving. "Beg me to fuck your ass."');
      scene.text('He glances back at you. "Please, fuck my ass!"');
      // TODO-QSP: dynamic text: Since he obeyed, you start really fucking his ass hard and fast. He both groans ...
      scene.text(`Since he obeyed, you start really fucking his ass hard and fast. He both groans in pain and moans in pleasure, but it sounds like the moans are louder, so you slide your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dildo deeper into his asshole.`);
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
        // TODO-QSP: dynamic text: As you fuck his ass with your with your <<dick>>cm <<$dick_girth>> strap-on, he ...
        scene.text(`As you fuck his ass with your with your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} strap-on, he starts really moaning in pleasure. He seems to really enjoy it now as you notice him reach between his legs and start jerking off.`);
        scene.text('You grin. "Tell me you like taking my cock up your ass."');
        scene.text('He moans in pleasure. "Yes, it feels so good."');
        scene.text('You slap his ass and start fucking him harder. "Tell me you love getting fucked in the ass."');
        scene.text('He glances back at you and bites his lower lip. "Yes, yes! I love it when you fuck my ass!"');
        scene.text('You slap his ass cheeks with your free hand a few more times as you keep pounding into him.');
      } else {
        // TODO-QSP: dynamic text: As you fuck his ass with your <<dick>>cm <<$dick_girth>> strap-on, his groans of...
        scene.text(`As you fuck his ass with your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} strap-on, his groans of pain slowly start mixing with moans of pleasure. You notice him reach between his legs and start jerking off.`);
        scene.text('You grin. "Tell me you like taking my cock up your ass."');
        scene.text('He moans in a mixture pleasure and pain as you slide your dildo deeper into his asshole. "It doesn\'t hurt as much and is starting to feel better."');
        scene.text('You slap his ass a few times as you start fucking him a little harder. "I knew you liked taking dick up your ass," you say with a laugh.');
      }
    }
  }
  qspCall(s, 'arousal', 'anal_strap_give', 2, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck your buttslut', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging4.jpg');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
      scene.text('As you keep fucking his ass with your strap-on, he starts to tense up, his groans and grunts of pain getting louder.');
      scene.text('"Please stop! I can\'t take it anymore!" he pleads.');
      scene.text('You thrust your dildo deeper into his ass one last time, causing him to cry out in pain. "Okay, bitch. I\'ll take pity on you and call it a day," you tell him and slide the dildo out of his ass, causing him to sigh in relief. "But remember - This isn\'t over."');
      scene.text('He looks back at you in fear. "Please! No more!"');
      qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Tell him to shut up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You slap his ass before sliding the harness off. "Shut up or I\'ll start fucking you again!" He goes pale and doesn\'t say a word. "You may get dressed and give me your homework," you say with a smirk.');
    scene.text('He quickly pulls up his pants before opening his backpack to pull out his homework.');
    scene.text('You take the papers from him before you start cleaning the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up as well.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
        scene.text('You pound into his slightly-experienced asshole. His moans are getting louder and he\'s frantically jerking himself off now. You pull down his pants as far as you can before he takes the initiative and steps out of them completely. You then pull his shirt up and over his head, leaving him fully naked before you pull up one of his legs, giving you better access to his ass.');
        scene.text('"Oh fuck… Oh fuck… I\'m gonna cum!" he moans out.');
        scene.text('You grin. "What a dirty, little buttslut you are."');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
          scene.text('You pound into his experienced asshole. His moans echo off the restroom walls and he\'s jerking himself off at a frantic pace. Suddenly, he stops touching himself and pulls off his pants. He raises one of his legs to give you better access to his ass before he starts masturbating again.');
          scene.text('"Yes… yes… Fuck me harder!" he cries.');
          scene.text('You grin widely and slap his ass before you grab him by the hips and pull him back, driving your dildo completely inside him. "You like that, you fucking buttslut?!"');
          scene.text('He glances back at you and bites his lower lip. "Yes, yes! I love it when you fuck my ass!"');
          scene.text('You hang onto his hips as you keep pounding his ass as hard and fast as you can.');
        } else {
          scene.text('You pound into his barely used asshole. He groans are a confused mixture of pain and pleasure. He starts to jerk himself off, but you interrupt him when you reach down to pull off his pants.');
          scene.text('"Get these off," you order and he awkwardly takes his pants off with your dildo still in his ass. You grab one of his legs and lift it up, giving you easier access to his hole and start fucking him again. He returns his hand to his cock and starts beating off some more.');
          scene.text('"Oh fuck… I think I\'m gonna cum!" he moans out.');
          scene.text('You grin. "What a dirty, little buttslut you\'re turning into."');
        }
      }
    }
    qspCall(s, 'arousal', 'anal_strap_give', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him jerk off', goto: ['petkaev', 'femdom_petka_doggy_finish'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemdomPetkaDoggyFinish(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging5.jpg');
  scene.text('As you keep fucking his ass with your strap-on, he starts to tense up, his moans start getting louder.');
  scene.text('"I\'m cumming!" he grunts loudly.');
  scene.text('You fuck him until he\'s finished shooting his load. You then slide the dildo out of his ass, causing him to sigh in relief.');
  scene.text('You look down and see his cum splattered on the floor. He starts putting his pants back on while you take your harness off and prepare to clean it in the sink.');
  scene.text('Without prompting, he opens his backpack and pulls out his homework before handing it over to you.');
  qspCall(s, 'arousal', 'anal_strap_give', 2, 'dom');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Take the homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You take the papers from him before you go back to cleaning up the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSchoolRestroomPeggingMagic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    scene.actions([
      { label: 'Use lube', handler: (st: GameState) => {
    (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging2.jpg');
    scene.text('Having cast the spell, you watch as the harness melds with your skin and feel the dildo twitching as it makes contact with your flesh. Once completed, you walk up to Petka and lube up your member and his asshole with your lubricant before you start pushing yourself into his rear entrance.');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] === 0) {
      qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
      scene.text('He tenses up before your cock suddenly pops into his ass. You can feel his tight ass gripping the shaft of your dick as he cries out in pain.');
      scene.text('You slap his ass. "Take a deep breath and release it slowly."');
      scene.text('He does as you say, but he doesn\'t relax that much. "Ow! It still hurts!"');
      scene.text('You snort. "Don\'t worry, I\'ll stretch you out soon enough."');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] > 5) {
        scene.text('He barely tenses up as your dick pops into his ass much easier than before. He still groans from time to time, and you can feel him squeezing tightly against your shaft.');
        scene.text('You slap his ass. "Take a deep breath and release it slowly."');
        scene.text('He does as you say and you can feel him relax. It seems as though he\'s finally getting used to it.');
        scene.text('"It still hurts a little," he groans.');
        scene.text('You snort. "Only a little? You\'re starting to like it, aren\'t you?"');
        scene.text('You see his face turning red. "N-no!" he stutters, but you can tell he\'s starting to like it.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] > 10) {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
          scene.text('He takes a deep breath and relaxes, allowing your dick to slowly slide into his ass without much effort. He emits a moan of pleasure as you sink in deeper. He doesn\'t feel as tight as before, but he still squeezes against your shaft.');
          scene.text('You slap his ass. "Someone\'s beginning to love taking dick up his ass."');
          scene.text('He moans louder. "Yes, it\'s starting to feel really good."');
          scene.text('You snort. "I\'ll make you into such a good little buttslut."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'dislike');
          scene.text('He tenses up and hisses in pain when your cock pops into his asshole and he tightly grips the shaft of your cock.');
          scene.text('You slap his ass. "Take a deep breath and release it slowly."');
          scene.text('He does as you say, but he only relaxes a little. "Ow! It still hurts!"');
          scene.text('You snort. "Don\'t worry, you\'re going to start loving it soon enough."');
        }
      }
    }
    qspCall(s, 'arousal', 'anal_strap_give', 1, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start fucking his ass', goto: ['petkaev', 'femdom_petka_doggy_magic'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Use spit', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging2.jpg');
    scene.text('Having cast the spell, you watch as the harness melds with your skin and feel the dildo twitching as it makes contact with your flesh. Once completed, you walk up to Petka and use your spit to lube up your member and his asshole before you start pushing yourself into his rear entrance.');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
      qspCall(s, 'npc_relationship', 'modify', 'A6', 'loathe');
      scene.text('He tenses up before your cock suddenly pops into his ass. You can feel his tight ass gripping the shaft of your dick as he cries out in pain.');
      scene.text('You slap his ass. "Take a deep breath and release it slowly."');
      scene.text('He does as you say, but he doesn\'t relax too much. "Ow! It still hurts!"');
      scene.text('You snort. "Don\'t worry, I\'ll stretch you out soon enough."');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
        scene.text('He barely tenses up as your dick pops into his ass much easier than before. He still groans from time to time, and you can feel him squeezing against your shaft tightly.');
        scene.text('You slap his ass. "Take a deep breath and release it slowly."');
        scene.text('He does as you say and you can feel him relax. It seem as though he\'s finally getting used to it.');
        scene.text('"It still hurts a little," he groans.');
        scene.text('You snort. "Only a little? You\'re starting to like it, aren\'t you?"');
        scene.text('You see the sides of his face turning red. "N-no!" he stutters, but you can tell he\'s starting to like it.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'like');
          scene.text('He takes a deep breath and relaxes, allowing your dick to slowly slide into his ass without much effort. He emits a moan of pleasure as you sink in deeper. He doesn\'t feel as tight as before, but he still squeezes against your shaft.');
          scene.text('You slap his ass. "Someone\'s beginning to love taking dick up his ass."');
          scene.text('He moans louder. "Yes, it\'s starting to feel really good."');
          scene.text('You snort. "I\'ll make you into such a good little buttslut."');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A6', 'hate');
          scene.text('He tenses up and hisses in pain when your cock pops into his asshole and he tightly grips the shaft of your cock.');
          scene.text('You slap his ass. "Take a deep breath and release it slowly."');
          scene.text('He does as you say, but he only relaxes a little bit. "Ow! It still hurts!"');
          scene.text('You snort. "Don\'t worry, you\'re going to start loving it soon enough."');
        }
      }
    }
    qspCall(s, 'arousal', 'anal_strap_give', 1, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start fucking his ass', goto: ['petkaev', 'femdom_petka_doggy_magic'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemdomPetkaDoggyMagic(s: GameState, scene: SceneBuilder): void {
  (s as any).petkaQW['sub'] = ((s as any).petkaQW['sub'] ?? 0) + (1);
  qspCall(s, 'npcStat', 'D<<strapNumber>>');
  scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging3.jpg');
  if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
    // TODO-QSP: dynamic text: He groans and grunts in pain as you slide your <<dick>>cm <<$dick_girth>> dick d...
    scene.text(`He groans and grunts in pain as you slide your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick deeper into his asshole.`);
    scene.text('You grin. "Tell me you like taking my cock up your ass."');
    scene.text('"I don\'t like it! It hurts!" he whines.');
    scene.text('You thrust your dick all the way into his ass, your magically-induced testicles slapping against his own. This causes him to loudly grunt and groan in pain.');
    scene.text('"I said, tell me you like taking my cock up your ass!" you bark out.');
    scene.text('"YES!" he cries out. "Yes, I like it, but please! Not so hard!"');
    scene.text('You decide to take a little pity on him and slow down your thrusts.');
  } else {
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
      // TODO-QSP: dynamic text: His groans of pain slowly start giving way to moans of pleasure as you slide you...
      scene.text(`His groans of pain slowly start giving way to moans of pleasure as you slide your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock in and out of him. You notice him reach between his legs and start jerking off.`);
      scene.text('You grin. "Tell me you like taking my cock up your ass."');
      scene.text('He moans in pleasure. "Yes, it\'s starting to feel good."');
      scene.text('You slap his ass and stop moving. "Beg me to fuck your ass."');
      scene.text('He glances back at you. "Please fuck my ass!"');
      scene.text('Since he obeyed, you start fucking his ass hard and fast. Your magic balls slap against his own and he both groans in pain and moans in pleasure.');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
        // TODO-QSP: dynamic text: As you fuck his ass with your <<dick>>cm <<$dick_girth>> dick, he starts really ...
        scene.text(`As you fuck his ass with your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick, he starts really moaning in pleasure. He seems to really enjoy it now and you notice him reach between his legs and start jerking off.`);
        scene.text('You grin. "Tell me you like taking my cock up your ass."');
        scene.text('He moans in pleasure. "Yes, it feels so good."');
        scene.text('You slap his ass and start fucking him harder. "Tell me you love getting fucked in the ass."');
        scene.text('He glances back at you and bites his lower lip. "Yes, yes! I love it when you fuck my ass!"');
        scene.text('You slap his ass with your free hand a few more times as you keep pounding into him.');
      } else {
        // TODO-QSP: dynamic text: As you fuck his ass with your <<dick>>cm <<$dick_girth>> dick, his groans of pai...
        scene.text(`As you fuck his ass with your ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick, his groans of pain slowly start mixing with moans of pleasure as you notice him reach between his legs and start jerking off.`);
        scene.text('You grin. "Tell me you like taking my cock up your ass."');
        scene.text('He moans in a mixture of pleasure and pain as you slide your dildo deeper into his asshole. "It doesn\'t hurt as much and is starting to feel better."');
        scene.text('You laugh and slap his ass a few times before you start fucking him a little harder. "I knew you liked taking dick up your ass."');
      }
    }
  }
  qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Fuck your buttslut', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/petka/sex/school/restroom/pegging4.jpg');
    if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
      scene.text('As you keep fucking his ass with your strap-on, he starts to tense up and his groans and grunts of pain get louder.');
      scene.text('"Please stop! I can\'t take it anymore!" he pleads.');
      scene.text('You thrust your dildo deeper into his ass one last time, causing him to cry out in pain. "Okay, bitch. I\'ll take pity on you since I\'m almost there," you tell him.');
      scene.text('His asshole is squeezing your shaft, bringing you closer to climax.');
      scene.text('He looks back at you in fear. "Please… No more…"');
    } else {
      if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 5) {
        scene.text('You pound into his slightly-experienced asshole. His moans are getting louder and he is frantically jerking himself off now. You pull down his pants as far as you can before he takes the initiative and steps out of them completely. You pull his shirt up and over his head, leaving him fully naked. You raise up one of his legs, giving you better access to his ass.');
        scene.text('"Oh fuck… Oh fuck! I\'m gonna cum!" he moans out.');
        scene.text('You grin. "What a dirty, little buttslut you are," you tell him, feeling yourself about to cum as well.');
      } else {
        if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 10) {
          scene.text('You pound into his experienced butthole as his moans echo off the restroom walls and he jerks himself off at a frantic pace.');
          scene.text('He suddenly stops touching himself and pulls off his pants before he raises up one of his legs to give you better access to his ass and he begins masturbating again.');
          scene.text('"Yes, yes… Fuck me harder!" he cries out.');
          scene.text('You grin widely and slap his ass, beginning to fuck him faster.');
          scene.text('You grab him by the hips and pull him back, driving your dildo completely inside him. "You like that, you fucking buttslut?"');
          scene.text('He glances back at you and bites his lower lip. "Yes, yes! I love it when you fuck my ass!"');
          scene.text('You can feel yourself about to cum and hang onto his hips as you keep pounding his ass as hard and fast as you can.');
        } else {
          scene.text('You pound into his barely used asshole, his groans a confused mix of pain and pleasure. He starts to jerk himself off, but you interrupt him when you reach down to pull off his pants.');
          scene.text('"Get these off," you order.');
          scene.text('He awkwardly takes his pants off with your dildo still crammed up his ass before you grab one of his legs and lift it up, giving you easier access to his hole, and start fucking him again.');
          scene.text('He returns his hand to his cock and starts beating off some more.');
          scene.text('"Oh fuck… I think I\'m gonna cum!" he moans out.');
          scene.text('You grin. "What a dirty little buttslut you\'re turning into," you tell him as you feel yourself about to cum as well.');
        }
      }
    }
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pull out', goto: ['petkaev', 'femdom_petka_pullout_magic'] },
      { label: 'Cum inside him', goto: ['petkaev', 'femdom_petka_cuminside_magic'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFemdomPetkaPulloutMagic(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/magic/penis_envy/guy_butt_cum\' + rand(1, 2) + \'.jpg');
  if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    scene.text('Once you finish, he looks back at you.');
    scene.text('"What was that?" he asks as he reaches back to feel your wet cum on his ass.');
    scene.text('"Don\'t worry about it, it\'s just fake cum. A lot of these dildos have them nowadays," you quickly reply.');
    scene.text('He looks at you in confusion, but seems to accept it. "Oh…"');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to give you his homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You slap his ass as you take the harness off, which breaks the spell. You feel your connection to the dildo fade away.');
    scene.text('"You may get dressed and give me your homework," you tell him.');
    scene.text('He quickly pulls up his pants before opening his backpack to pull out the homework.');
    scene.text('You take the papers from him before you go back to cleaning up the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } else {
    scene.text('As you keep fucking his ass hard and fast with your cock, he starts to tense up and his moans start getting louder.');
    scene.text('"I\'m cumming!" he grunts loudly.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    scene.text('Once you finish, he looks back at you.');
    scene.text('"That still feels weird," he remarks, reaching back to feel the wet cum on his ass.');
    scene.text('"Like I told you, it\'s just fake cum," you reply.');
    scene.text('He stands up and nods. "I know. It\'s just weird is all."');
    scene.text('You look down and see his cum splattered on the floor. He starts putting his pants back on while you take your harness off and prepare to clean it in the sink.');
    scene.text('Without prompting, he opens his backpack and pulls out his homework before handing it to you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take the homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You take the papers from him before you go back to cleaning up the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFemdomPetkaCuminsideMagic(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/magic/penis_envy/guy_internal_butt_cum1.jpg');
  if (((s as any).petkaQW ?? 0)?.['restroom_strapon'] <= 1) {
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    scene.text('Once you pull your dick out and step back, you can see the cum leaking out of his gaping asshole. You find yourself panting as the feeling of release makes for an amazing afterglow.');
    scene.text('Once you finish, he looks back at you.');
    scene.text('"What was that?" he asks as he reaches back to feel your cum leaking out of him.');
    scene.text('"Don\'t worry about it, it\'s just fake cum. A lot of these dildos have them nowadays," you quickly reply.');
    scene.text('He looks at you in confusion, but seems to accept it. "Oh…"');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Tell him to give you his homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You slap his ass as you take the harness off, which breaks the spell. You feel your connection to the dildo fade away.');
    scene.text('"You may get dressed and give me your homework," you tell him.');
    scene.text('He quickly pulls up his pants before opening his backpack to pull out the homework.');
    scene.text('You take the papers from him before you go back to cleaning up the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  } else {
    scene.text('As you keep fucking his ass hard and fast with your cock, he starts to tense up and his moans start getting louder.');
    scene.text('"I\'m cumming!" he grunts loudly.');
    qspCall(s, 'arousal', 'magicd_anal', 3, 'dom');
    scene.text('You pull your dick out and step back, you can see the cum leaking out of his gaping asshole. You find yourself panting as the feeling of release makes for an amazing afterglow.');
    scene.text('"That still feels weird," he says as he reaches back to feel your cum leaking out of him.');
    scene.text('"Like I told you, it\'s just fake cum," you reply.');
    scene.text('He stands up and nods. "I know. It\'s just weird."');
    scene.text('You look down and see his cum splattered on the floor. He starts putting his pants back on while you take your harness off and prepare to clean it in the sink.');
    scene.text('Without prompting, he opens his backpack and pulls out his homework before handing it to you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take the homework', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/bathroom/sex/boys/homeworksuccess.jpg');
    scene.text('You take the papers from him before you go back to cleaning up the dildo.');
    scene.text('"You may go now," you tell him dismissively without even looking at him.');
    scene.text('He quickly hurries out and you leave as soon as you finish cleaning up.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_events', 'leave_break_events2'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'follow_petka':
      enterFollowPetka(s, scene);
      break;
    case 'homework_sex_bribe':
      enterHomeworkSexBribe(s, scene);
      break;
    case 'petra_homework_facial':
      enterPetraHomeworkFacial(s, scene);
      break;
    case 'school_restroom_strap':
      enterSchoolRestroomStrap(s, scene);
      break;
    case 'school_restroom_pegging':
      enterSchoolRestroomPegging(s, scene);
      break;
    case 'femdom_petka_doggy':
      enterFemdomPetkaDoggy(s, scene);
      break;
    case 'femdom_petka_doggy_finish':
      enterFemdomPetkaDoggyFinish(s, scene);
      break;
    case 'school_restroom_pegging_magic':
      enterSchoolRestroomPeggingMagic(s, scene);
      break;
    case 'femdom_petka_doggy_magic':
      enterFemdomPetkaDoggyMagic(s, scene);
      break;
    case 'femdom_petka_pullout_magic':
      enterFemdomPetkaPulloutMagic(s, scene);
      break;
    case 'femdom_petka_cuminside_magic':
      enterFemdomPetkaCuminsideMagic(s, scene);
      break;
    default:
      enterFollowPetka(s, scene);
      break;
  }
}

export const petkaev: LocationDef = {
  name: 'petkaev',
  title: 'You follow Petka into the bathroom. He quickly turns around,',
  region: 'other',
  description: ['You follow Petka into the bathroom. He quickly turns around, looking very eager.'],
  enter: enter,
};
