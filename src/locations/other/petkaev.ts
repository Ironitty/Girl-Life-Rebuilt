import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
      scene.text('He blushes and looks around nervously. "Again?! Here?"');
      scene.text('You smile confidently at him. "Yes, again. Remember, you\'re my little butt slut. Unless you want me to tell everyone what you get up to in the girls\' locker room?"');
      scene.text('He shakes his head, letting his shoulder sag in defeat. "Okay, okay! Just… Don\'t be so rough this time, please. My ass was sore last time!"');
      scene.text('You just keep smiling. "Oh, please! You moaned like a whore last time! Besides, after I stretch out your asshole a few more times with my dick, it will stop hurting. Now turn around and get those pants off."');
      scene.text('He blushes harder, which you didn\'t think was possible, but he does as you ask. He turns around, facing away from you, and starts to unbutton his pants.');
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
      scene.actions([
        { label: 'Put the harness on', goto: ['petkaev', 'school_restroom_strap'] },
      ]);
    }
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Threaten his reputation', handler: (st: GameState) => {
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
        qspCall(s, 'willpower', 'misc', 'force', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Give him a swirly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Give him a swirly', handler: (st: GameState) => {
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
      qspCall(s, 'willpower', 'sex', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Bribe him with sex [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Bribe him with sex', handler: (st: GameState) => {
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
  } },
    ]);
  }
  scene.build();
}

export const petkaev: LocationDef = {
  name: 'petkaev',
  title: 'You follow Petka into the bathroom. He quickly turns around,',
  region: 'other',
  description: ['You follow Petka into the bathroom. He quickly turns around, looking very eager.'],
  enter: enter,
};
