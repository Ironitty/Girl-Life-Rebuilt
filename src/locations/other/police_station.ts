import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'police_station', 'start');
  (s as any).region = 'city';
  scene.text('<center><b>Police Station Entrance</b></center>');
  scene.img('images/locations/city/citycenter/police/cityext.jpg');
  scene.text('The St. Petersburg police station has definitely seen better days, but continues to stand the test of time. While not as large as other police stations, it still strikes fear into any criminal that passes through its doors.');
  scene.actions([
    { label: 'Return to the city center', goto: ['city_center', ''] },
    { label: 'Go to the reception desk', goto: ['police_station', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'police_station', 'reception');
  (s as any).region = 'city';
  scene.img('images/locations/city/citycenter/police/cityrec.jpg');
  scene.text('Upon entering the station, you\'re welcomed by a reception desk. The officers sitting here are protected by thick glass and you see several monitors and computers keeping an eye on everything that\'s happening inside and outside the building.');
  if (((s as any).rape_count ?? 0) > 0  &&  ((s as any).daystart ?? 0) < ((s as any).rape_day ?? 0) + 2) {
    scene.actions([
      { label: 'Report a rape', goto: ['police_station', 'rape_report'] },
    ]);
  }
  qspCall(s, 'blackmailer', 'set_police_act');
  scene.actions([
    { label: 'Return to the center', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterRapeReport(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/police/cityrec.jpg');
  scene.text('One step after another, you trudge through town until you suddenly find yourself standing inside the police station. On the other side of a plexiglass reception, you can see several officers milling about, though none pay attention to you. Stepping up to the window, you pick up the phone and hear a buzzer sound on the other side. One of the officers picks it up without hesitation and looks at you.');
  scene.text('"Can I help you?"');
  scene.text('"I- I\'d like t-to report a r-rape…" you stammer out.');
  scene.text('The officer nods, but his expression doesn\'t change in the slightest. "Someone will come out to meet you. Follow them and they\'ll take your statement in the back."');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('As promised, someone comes out and takes you into their office space behind. You sit down at a shoddy looking desk and the officer takes his place on the other side of it.');
    scene.text('"Alright ma\'am, tell me what happened to you."');
    scene.text('You explain to the officer as best as you can what happened to you while he takes notes. How you were randomly attacked, how you were violated.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('"And where did the attack occur?"');
    if (((st as any).loc ?? 0) === 'city_center') {
      scene.text('"Here, i-in the city center. But he pulled me away. I… I don\'t remember how far…"');
    } else {
      if (((st as any).loc ?? 0) === 'city_residential') {
        scene.text('"In th-the residential district. But he pulled me away. I… I don\'t remember how far…"');
      } else {
        if (((st as any).loc ?? 0) === 'city_industrial') {
          scene.text('"In th-the industrial district. But he pulled me away. I… I don\'t remember how far…"');
        } else {
          if (((st as any).loc ?? 0) === 'city_island') {
            scene.text('"On th-the island, Vasilyevsky Island. But he pulled me away. I… I don\'t remember how far…"');
          } else {
            if (((st as any).loc ?? 0) === 'city_park') {
              scene.text('"In th-the park. But he pulled me away. I… I don\'t remember how far…"');
            }
          }
        }
      }
    }
    scene.text('"Can you describe what he looked like?"');
    scene.text('The blood drains from your face. "I… I-!"');
    scene.text('"Anything about him will be helpful. Height? Build? Hair color? Eye color?"');
    scene.actions([
      { label: 'I… can\'t…', handler: (st: GameState) => {
    scene.img('images/locations/shared/police/interrogation1.jpg');
    scene.text('"He was… I don\'t remember how tall he was… And… he was wearing a nondescript hoody. I couldn\'t tell what his body type was… And-! And… I don\'t know what he looks like… he was behind me during… the event…"');
    scene.text('The officer doesn\'t say anything, but you see him slightly shake his head. You realize that the information you gave him is going to be of little to no use at all. A rape in town and nothing else to go off of? You might as well have told him a pigeon did it.');
    scene.text('For a moment, you wonder how many other girls like you have sat at this desk filing a report just like this one only for it to go nowhere. You wonder if any of them were been raped by the same man who raped you…');
    if (((st as any).cumsumvag ?? 0)+((st as any).cumsumass ?? 0) > 0) {
      scene.actions([
        { label: 'Can I get a rape kit?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cubicle.jpg');
    scene.text('"C-can I get a… a rape kit…?" you mumble.');
    scene.text('The officer nods at you and pulls a small box out of a drawer in his desk. "If you just come this way ma\'am."');
    scene.text('The two of you get up and he leads you through the office area to the bathroom where he hands you the box. Looking down at it, you read the label on it.');
    scene.text('<i><b>SEXUAL ASSAULT EVIDENCE COLLECTION KIT</b></i>');
    scene.text('You take it from him, cradling it in your hands. "This will let you catch him, right?"');
    scene.text('The officer shrugs in return. "It depends. DNA evidence is only useful if we can match it to the person it came from."');
    scene.text('"So you\'re saying this might not do anything?"');
    scene.text('He shrugs again. "It\'s better than nothing."');
    scene.actions([
      { label: 'Use the rape kit', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityext.jpg');
    scene.text('Closing the bathroom door, you open the kit and swab your insides, feeling humiliated and disgusted when it comes back covered in semen. Packaging it up, you re-open the door and hand the evidence to the officer.');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you alone with your thoughts and memories of your rape…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish the interview', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 4) + 2));
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityrec.jpg');
    scene.text('With that, you conclude the interview and are led to the front door.');
    scene.text('"We\'ll take this information into consideration. Again, we\'re very sorry for what happened to you."');
    scene.text('He then walks away, leaving you so very alone…');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
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

function enterEntrance(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Reception area</b></center>');
  scene.img('images/locations/city/citycenter/police/cityrec.jpg');
  scene.text('The officer drags you in by the arm, his grip tightening whenever he feels the slightest bit of resistance from you. You expect him to take you straight in to be booked, but to your dismay he stops at the front desk to put you on display to the other officers as he gloats.');
  qspCall(s, 'court_arrest_events', 'booking_start', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterBooking(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'court_functions', 'get_total_arrests') === 1) {
    qspGoto(s, 'police_station', 'booking1');
  } else {
    qspGoto(s, 'police_station', 'booking2');
  }
  scene.build();
}

function enterBooking1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/holdingarea.jpg');
  scene.text('As you\'re taken through the station, the officer leads you into a large area with lots of chairs. It looks like a large reception area.');
  scene.text('"Sit over there," he commands, pointing to the area for booking criminals. You take a seat as ordered, and the officer walks away towards the front desk to talk to the staff there.');
  scene.text('You sit in silence, trying to overhear what\'s being said, but you can\'t hear them. After a few minutes, the officer returns with another officer.');
  scene.text(`"Alright, ${((s as any).pcs_lastname ?? '')}, I'll be leaving you here with my colleague. He'll sort you out," the first officer says as they turn to their colleague. "I've already checked her pockets, there was nothing of interest."`);
  scene.text(`The other officer looks you up and down, evaluating you at a glance. "${((s as any).pcs_lastname ?? '')} was it, right?"`);
  scene.actions([
    { label: 'Play along', goto: ['police_station', 'booking1_play_along'] },
    { label: 'Answer brashly', goto: ['police_station', 'booking1_brash'] },
    { label: 'Try to weasel your way out', goto: ['police_station', 'booking1_weasel'] },
  ]);
  scene.build();
}

function enterBooking1PlayAlong(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) + (2);
  (s as any).book_response = 1;
  qspCall(s, 'stat', '');
  scene.text(`"That's right… ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}," you cautiously answer.`);
  scene.text('"Good, good. I hope we can continue to keep it civil like this," he smiles halfheartedly. "Now, let me tell you how this is gonna go: I\'ll ask you some questions and you\'ll answer them - <i>truthfully</i>," he emphasizes with a pointed look. "Then I\'ll take your fingerprints and mugshot. Understood?"');
  scene.text('Dispirited, you nod weakly. "Good. Now follow me," he orders. He opens the door and signals you to walk through after him.');
  scene.actions([
    { label: 'Follow him to the desk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('The officer walks briskly to the front desk and you follow obediently behind.');
    scene.text('"Well, we already know your name," he mumbles as he shuffles some paperwork around. After finding the correct sheet, the officer proceeds to ask you several questions. Not wanting to cause any more trouble for yourself, you answer them as instructed.');
    scene.text('"All right, we\'re done with that," he sighs. "Now we take your fingerprints and mugshot. Follow me," he adds before leading you toward a different area.');
    scene.actions([
      { label: 'Take fingerprints', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/fingerprint.jpg');
    scene.text('The officer takes you to a small private room where you can see a desk with lots of papers and a photo camera pointed at a wall. You assume that\'s where they take the mugshots.');
    scene.text('As you\'re about to begin the process, you feel a bit nervous, but the officer speaks up. "No need to worry. Fingerprints are a standard part of a booking record. We need them so we can add you to the nationwide database, saving us the trouble of going through this again to identify you if you commit another crime."');
    scene.text('You nod and quickly dip your fingers into the ink before pressing them against the paper. Soon after, the officer points at the wall with the camera pointed at it, silently ordering you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('You walk over and stand next to the wall as the officer takes your mugshot.');
    scene.text('"That\'s all," he says. "Time to take you to the holding cell while we wait for a detective to come and interrogate you."');
    scene.text('"Can\'t I stay in the holding area?" you ask nervously.');
    scene.text('The officer lets out a laugh as he ushers you out of the room. You feel his large hand pat you on the ass.');
    scene.text('"You have a nice ass," he whispers as he\'s about to lock the cell door. You hear the door slam and reality hits you like a truck. You\'re all alone and are about to be interrogated.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBooking1Brash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) - (2);
  (s as any).book_response = 2;
  qspCall(s, 'stat', '');
  scene.text('"My name is <i>go fuck yourself, pig</i>," you brashly answer.');
  scene.text('"Well, that\'s not nice!" he scowls. "I guess we can do the process later and put you into a holding cell to calm down and think about what you\'ve said."');
  scene.text('The officer forcefully yanks you up from the chair and drags you to a holding cell. You try to resist, but they\'re too strong. Before you know it, the door slams behind you and the only thing you can do is slam your fists against it.');
  scene.actions([
    { label: 'Inside the holding cell', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/holdingarea.jpg');
    scene.text('You don\'t know how much time passes before the door suddenly opens. The same officer standing there, a smug smile on his face. "You plan to cooperate now, girl?"');
    scene.text('All you want to do is kick him in the nuts and wipe that smile off his face, but knowing that will only make things worse, you simply nod.');
    scene.text('"Good. Now follow me so I can finally process you."');
    scene.actions([
      { label: 'Follow him to the desk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.text('You tag along as the officer walks quickly up to the desk. "I don\'t have time to deal with your lip service, so just answer the questions, understand?" He then proceeds to ask you several questions and writes every answer carefully down.');
    scene.text('You try your best to draw out every answer as long as you reasonably can, and it makes you smile when you can clearly see him getting more and more annoyed by your actions.');
    scene.text('When you finally finish with all the questions, the officer glares down at you. "Time for your fingerprints and the mugshot," he says gruffly before leading you to private room where you can see a desk with lots of papers and a photo camera pointed at a wall.');
    scene.actions([
      { label: 'Take fingerprints', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/fingerprint.jpg');
    scene.text('As you\'re about to begin the process, the officer speaks up. "Good thing we\'ll get your fingerprints into the database. I\'m sure it won\'t take long before you commit another crime."');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('You drag yourself to the wall and stand there as the officer takes your mugshot.');
    scene.text('"That\'s all," he says. "Now that we\'re done, time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as the officer steps behind you and pats you on the ass.');
    scene.text('"You have a nice ass," he comments as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
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

function enterBooking1Weasel(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) + (5);
  (s as any).book_response = 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/booking0.jpg');
  scene.text('"Sure is," you answer with a wink.');
  scene.text('The officer tells you to stand up and follow him so he can process you. You nod and sensually stand up, trying to show as much skin as possible while trying to catch his attention.');
  scene.text('He just looks at you, not really picking up on your signals. "Follow me over to the desk please," he says monotonously.');
  scene.text('As he starts asking your personal details, you make sure to give him a good view of your breasts as you hunch over the desk as much as possible.');
  scene.text('After a while, you\'re done with the form and he tells you to follow him to a small room to take your fingerprints and mugshot.');
  scene.actions([
    { label: 'Follow him inside the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('As you step inside the room, he closes the door.');
    scene.text('"Why did you close the door?" you ask.');
    scene.text('He shrugs his shoulders and answers in the same monotonous voice. "Thought you might want some privacy…"');
    scene.text('You look around the room as you await further instructions.');
    scene.text('"Take off your clothes," he orders in the same monotone voice.');
    scene.text('You look at him in shock. "What did you say?"');
    scene.text('"You\'ve been teasing me this whole time. Think I didn\'t notice?" he answers.');
    scene.text('As the initial surprise vanishes, you start to undress. You\'re still confused, but at the same time feel a little turned on as you might get caught at any moment.');
    scene.actions([
      { label: 'Stand naked in front of him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking2.jpg');
    scene.text('"What now?" you ask as you try to cover up your body as much as you can.');
    scene.text('"Well, usually we do a cavity search to make sure you aren\'t carrying any contraband…" he smiles.');
    scene.text('"But…" you begin to speak before he interrupts you.');
    scene.text('"No excuses. You were awfully upfront with exposing yourself to me, so you must be hiding something…" he smirks.');
    scene.text('You try explaining why you were behaving the way you were, but the only response you get is a finger pointing at the desk for you to bend over.');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 3) + 1);
    scene.img(`images/locations/city/citycenter/police/bookingcav${((st as any).picrand ?? '')}.jpg`);
    scene.text('You comply and bend over the desk. "Is this really necessary?" you ask once again.');
    scene.text('He sighs as he snaps on a pair of gloves. "Haven\'t I already explained that we need to do this check? It\'s procedure."');
    scene.text('You suddenly feel the latex gloves sliding between your legs. He\'s careful at first, just rubbing your lips before he parts them and gently brushes your clit. The sensation is so unexpected that you can\'t keep quiet anymore and let out a little moan.');
    scene.text('"I see. Good, you\'re almost ready…" he whispers. "I know what you\'re up to and today is your lucky day. You\'ll get to please me and depending on how you perform, I might help you out…" he continues as he presses a finger inside you.');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Reject him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Reject him', handler: (st: GameState) => {
    (st as any).book_response = 5;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking7.jpg');
    scene.text('You shake your head. "No, stop!"');
    scene.text('"What\'s wrong? I thought you wanted this? You\'ve been teasing me this whole time!" he hisses.');
    scene.text('"I don\'t want this, so please let me go or… or I\'ll scream!" you threaten him.');
    scene.text('"Fine, have it your way…" he mutters. "Get dressed and we\'ll continue."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('As you\'re about to begin the process, the officer speaks up. "You know… I really would\'ve helped you. Think about it the next time."');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('You drag your feet as you walk over to the wall. You stand still as he takes your picture.');
    scene.text('"That\'s all," he says. "Time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You nod slowly as the officer ushers you out of the room. As you step out, he moves behind you and you feel his large hand groping your ass.');
    scene.text('"You\'ll regret that you rejected me," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Comply', handler: (st: GameState) => {
    (st as any).book_response = 4;
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingbj1.jpg');
    scene.text('You nod willingly as he leads you to the mugshot wall and makes you squat as he unzips his pants and exposes his hard cock to you. It pulses in front of your face as it eagerly awaits to enter your mouth.');
    scene.text('"Let\'s see how good you are with your mouth," he says. "Remember to be quiet or else you\'ll get in even more trouble."');
    scene.text('He grabs his cock and shoves it into your mouth in one thrust. As you eagerly start to suck, you can feel his cock growing inside your mouth, a sign that you\'re doing well.');
    scene.text('After a while, he grabs and holds your wrists while he pushes himself deeper down your throat. "Swallow my whole cock, whore!" he growls.');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth');
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingcum.jpg');
    scene.text('You continue sucking him, pleasing him in any way possible before you suddenly hear him panting heavily as his cock twitches.');
    scene.text('He pulls out of your mouth and tells you to open wide as he gives his cock a few jerks and cums into your mouth.');
    scene.text('Your mouth is quickly filled and you try your best to keep his enormous load from spilling out. Your first instinct is to spit it out, but the officer stares down at you expectantly. With a grimace, you swallow it all.');
    scene.text('After a while, he pulls his cock away and zips his pants up before walking over to the desk again. "Get dressed so we can finish the process."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You make sure that there\'s no cum on your clothes and quickly get dressed as the officer prepares the fingerprint process.');
    scene.text('As you\'re about to begin the process, the officer speaks up. "Good thing you complied. Now I can help you out. It will all be fine…"');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. The officer then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'arousal', 'end');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('You drag your feet as you walk over to the wall and stand still for the mugshot.');
    scene.text('"That\'s all," he says. "Now that we\'re done, time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as the officer steps behind you and pats you on the ass.');
    scene.text('"The name is Lev by the way. You\'ll thank me for this," he comments as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
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
  scene.build();
}

function enterBooking2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Holding area</b></center>');
  scene.img('images/locations/city/citycenter/police/holdingarea.jpg');
  scene.text('You walk into a familiar settings. Not much has changed since last time and you already know what awaits you. The officer points to one of the chairs and you sit while he walks over to the reception area. You take a seat and observe what\'s happening around you.');
  scene.text('After what feels like an eternity, the officer returns with a colleague.');
  scene.text(`"Alright ${((s as any).pcs_lastname ?? '')}, you know the drill. My colleague will sort you out," he says as he turns to the other officer. "I've already checked her pockets. There was nothing of interest."`);
  scene.text(`The officer observes you with a smile. "${((s as any).pcs_lastname ?? '')}, hmm? I remember you from last time."`);
  scene.text('You sigh as you recall the last time you were with him…');
  scene.actions([
    { label: 'Follow him to the desk', goto: ['police_station', 'booking2_follow'] },
    { label: 'Answer brashly', goto: ['police_station', 'booking2_brash'] },
    { label: 'Flirt', goto: ['police_station', 'booking2_flirt'] },
  ]);
  scene.build();
}

function enterBooking2Follow(s: GameState, scene: SceneBuilder): void {
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) + (2);
  (s as any).book_response = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/booking0.jpg');
  scene.text(`The officer walks briskly and you struggle to keep up, but you manage. "We just need to update some information since the last time you were here, ${((s as any).pcs_lastname ?? '')}" The officer then proceeds to ask you several questions and writes every answer carefully down.`);
  scene.text('You answer every question quickly as you know making trouble won\'t lead to anything good, and if you cooperate they might go easier on you.');
  scene.text('As you finish with the questioning the officer doesn\'t even look your way as he says, "Over there is where we take your fingerprints and the mugshot."');
  scene.actions([
    { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('The officer takes you to the small room and points at the wall and tells you to stand there.');
    scene.text('"What? No need to take my fingerprints?" you ask as you\'re walking towards the wall.');
    scene.text('The officer shakes his head. "No need for that anymore. You\'re already in the database," he informs as he takes your mugshot.');
    scene.text('"And we\'re done," he says. "Time to take you to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You nod and the two of you walk back in silence to the holding cell. The officer opens the door and pushes you inside before you hear the door slam and it suddenly hits that you\'re back here again.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBooking2Brash(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) - (2);
  (s as any).book_response = 2;
  qspCall(s, 'stat', '');
  scene.text('"You again?" you ask rudely.');
  scene.text('"Don\'t act all surprised," the officer answers. "Are you going to cooperate or do I need to put you in the holding cell again?"');
  scene.text('Your eyes narrow as your lips curl into a grimace. The officer is staring you down, and something in you snaps. Without warning, you spit in his face, taking him by surprise.');
  scene.text('The officer forcefully grabs hold of you and drags you to a holding cell. "Disgusting bitch!"');
  scene.text('Before you know it, the door slams behind you and the only thing you can do is slam your fists against the door.');
  scene.actions([
    { label: 'Inside the holding cell', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('You don\'t know how much time passes before the door sudenly opens and you see the officer standing there. "Have you calmed down?"');
    scene.text('All you want to do is to spit in his face again, but you know that will get you nowhere, and possibly even a beating, so you simply nod.');
    scene.text('"Good. Now follow me so I can finally process you."');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('This time you\'re taken straight to take a mugshot. You drag your feet as you walk over to the wall and stand perfectly still as the officer takes your mugshot.');
    scene.text('"That\'s all," he says. "Now that we\'re done, time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as the officer steps behind you and pats you on the ass.');
    scene.text('"You have a nice ass," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBooking2Flirt(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).policeQW = (s as any).policeQW ?? {})['bookingofficer_rel'] = ((s as any).policeQW['bookingofficer_rel'] ?? 0) + (5);
  (s as any).book_response = 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/booking0.jpg');
  scene.text('"Oh, it\'s you again," you smile and give him a little wink as you answer.');
  scene.text('Lev tells you to stand up and follow him so he can process you. You nod and put some extra sway in your hips to tease him as you walk to the room.');
  scene.text('He looks at you, seemingly not paying attention. "This way, please," he says monotonously.');
  scene.text('As he\'s gathering your personal details, you again make sure to give him a view of your breasts as you hunch over the desk as much as possible.');
  scene.text('After a while, you\'re done with the form and he tells you to follow him to a small room where you will continue the process.');
  scene.actions([
    { label: 'Follow him inside the room', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('As you step inside the room, he closes the door.');
    scene.text('"Uh, Lev?" you ask nervously.');
    scene.text('He shrugs his shoulders, but you see a small smile as he moves closer to you. "Take off your clothes," he orders.');
    scene.text('Surprised, you stare at him for a moment. "Again? But… but I thought the last time was enough?"');
    scene.text('"I was hoping you\'d be back because I wasn\'t finished with you yet," he answers.');
    scene.text('As the initial shock vanishes, you start taking off your clothes. You\'re still confused how he can get away with this, but you\'re also a little turned on at the same time by how risky and forbidden it is.');
    scene.actions([
      { label: 'Stand naked in front of him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking2.jpg');
    scene.text('"What now?" you ask as you try to cover up your body as much as you can.');
    scene.text('"Just like last time, we need to do a cavity search to make sure you aren\'t carrying any contraband," he smiles.');
    scene.text('"But…" you begin to speak before Lev interrupts you.');
    scene.text('"No excuses. You were awfully upfront with exposing yourself to me. Were you trying to distract me so you could get away with hiding something?"');
    scene.text('You try to explain why you were behaving the way you were, but the only response you get is a finger pointing at the desk for you to bend over.');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 3) + 1);
    scene.img(`images/locations/city/citycenter/police/bookingcav${((st as any).picrand ?? '')}.jpg`);
    scene.text('You comply and bend over the desk. "Is this really necessary?" you ask once again.');
    scene.text('He sighs as he snaps on a pair of gloves. "How many times do I need to explain myself? You should be used to this by now!"');
    scene.text('You suddenly feel his rubbery fingers between your thighs. He\'s slow at first, just rubbing your pussy, but soon spreads your lips and gently touches your clit. It\'s unexpected, and you let a soft moan escape your lips.');
    scene.text('"Good you\'re almost ready…" he whispers as he presses his finger inside you. "I know what you\'re up to and today is your lucky day. You\'ll get to please me and depending on how you perform I might help you out…" ');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).policeQW = (st as any).policeQW ?? {})['bookingofficer_rel'] = ((st as any).policeQW['bookingofficer_rel'] ?? 0) - (5);
    (st as any).book_response = 5;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking7.jpg');
    scene.text('You shake your head. "No, stop!"');
    scene.text('"What\'s wrong? I thought you wanted this… God knows you\'ve been teasing me…" he says.');
    scene.text('"I don\'t want to so please let me go or I\'ll… I\'ll begin to shout!" you threaten.');
    scene.text('"Fine, have it your way," he answers in his signature monotone voice. "Get dressed and we\'ll continue."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You quickly get dressed as Lev prepares the fingerprint process.');
    scene.text('As you\'re about to begin the process, Lev speaks up. "Too bad you didn\'t want to do it. I really would\'ve helped you. Think about it the next time…"');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('Lev then points at the wall and tells you to stand there.');
    scene.text('You drag over your feet and stand next to the wall as he takes your mugshot.');
    scene.text('"That\'s all," he says. "Now that we\'re done, time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as he steps behind you and pats you on the ass.');
    scene.text('"You\'ll regret that you rejected me," he comments as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Offer him a blowjob', handler: (st: GameState) => {
    ((st as any).policeQW = (st as any).policeQW ?? {})['bookingofficer_rel'] = ((st as any).policeQW['bookingofficer_rel'] ?? 0) + (2);
    qspCall(st, 'arousal', 'bj', 5, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 4) + 2);
    scene.img(`images/locations/city/citycenter/police/bookingbj${((st as any).picrand ?? '')}.jpg`);
    scene.text('You nod willingly as he leads you to the mugshot wall. He makes you squat as he unzips his pants and exposes his hard cock to you. It pulses in front of your face as it eagerly awaits to enter your mouth.');
    scene.text('"Don\'t be shy…" he tells you. "And remember to be quiet or else you\'ll get us in trouble."');
    scene.text('He grabs his cock and has you lick it for a few minutes before you move on to sucking it. You can feel his cock growing inside your mouth, a sign that you\'re doing well at pleasing him.');
    scene.text('After a while, he grabs and holds your wrists while he pushes himself deeper down your throat. "Swallow my whole cock, whore!" he demands.');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth');
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingcum.jpg');
    scene.text('You continue sucking him, pleasing him in any way possible before you suddenly hear him panting heavily as his cock twitches.');
    scene.text('He pulls out of your mouth and tells you to open wide as he gives his cock a few jerks and cums into your mouth.');
    scene.text('Your mouth gets quickly filled and you try your best to swallow his large load.');
    scene.text('After a while, he pulls his cock away and zips his pants before walking over to the desk again. "Get dressed so we can finish the process."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You make sure that there\'s no cum on you or your clothes before you quickly get dressed as Lev prepares the fingerprint process.');
    scene.text('As you\'re about to begin, the process he speaks up. "Good thing you complied. Now I can help you out. Trust me, it will all be fine…"');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper. He then points at the wall and tells you to stand there.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'arousal', 'end');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('You drag your feet as you walk over to the wall. You stand perfectly still as he takes your mugshot.');
    scene.text('"That\'s all," he says, "Now that we\'re done, it\'s time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as the officer steps behind you and pats you on the ass.');
    scene.text('"You\'ll thank me for this," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Offer him your pussy', handler: (st: GameState) => {
    ((st as any).policeQW = (st as any).policeQW ?? {})['bookingofficer_rel'] = ((st as any).policeQW['bookingofficer_rel'] ?? 0) + (2);
    qspCall(st, 'arousal', 'vaginal', 10, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    (st as any).picrand = (Math.floor(Math.random() * 3) + 1);
    scene.img(`images/locations/city/citycenter/police/bookingvag${((st as any).picrand ?? '')}.jpg`);
    scene.text('You stand up and face the wall, pushing your ass out to offer him your pussy. He doesn\'t hesitate, but not before warning you. "Listen carefully. You really need to keep quiet now. If anyone catches us like this, we\'re done for."');
    scene.text('Your pussy is dripping wet and ready for his cock. Lev begins teasing your slit with his tip before he thrusts his cock inside you.');
    scene.text('His penetrating cock causes you moan loudly, almost exposing you.');
    scene.text('"I told you to be quiet!" he whispers as he pants.');
    scene.text('As your pussy adjusts to his cock, he picks up the pace and before you know it you can feel him grunting as he\'s edging.');
    scene.text('"Get on your knees," he orders.');
    scene.actions([
      { label: 'Get down on your knees', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth');
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/bookingcum.jpg');
    scene.text('You quickly get down on your knees and open your mouth as he gives his cock a few jerks and cums into your mouth.');
    scene.text('Your mouth is quickly filled and you try your best to swallow his thick load.');
    scene.text('After a while, he removes his cock from your mouth, zips his pants and walks over to the desk again. "Get dressed so we can finish the process."');
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/booking1.jpg');
    scene.text('You make sure that there\'s no trace of his cum to be found on you or your clothes before quickly getting dressed as the officer prepares the fingerprint process.');
    scene.text('"Good thing you complied. Now I can help you out. It will all be fine…" he says with a small smile.');
    scene.text('You sigh and hesitantly dip your finger one by one into the ink and take your time to press them against the paper.');
    scene.actions([
      { label: 'Take the mugshot', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'arousal', 'end');
    (st as any).picrand = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/locations/shared/police/mugshot${((st as any).picrand ?? '')}.jpg`);
    scene.text('Lev then points at the wall and tells you to stand there.');
    scene.text('You drag your feet as you walk over to the wall and stand perfectly still as he takes your picture.');
    scene.text('"That\'s all," he says. "Now that we\'re done, time for you to head over to the holding cell while we await a detective to come and interrogate you."');
    scene.text('You shrug your shoulders as he steps behind you and pats you on the ass.');
    scene.text('"You\'ll thank me for this," he comments quietly as he\'s about to lock the cell door. You hear the door slam and it suddenly hits you that you\'re all alone and locked up.');
    scene.actions([
      { label: 'Inside the holding cell', goto: ['police_station', 'holdingcell'] },
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
  scene.build();
}

function enterHoldingcell(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/cityhold.jpg');
  scene.text('You find a clean spot in one of the corners of the holding cell which you sit down on. As you sit, the cold concrete bench causes you to shiver.');
  scene.text('As you wait in silence for someone to come and pick you up, another woman enters the holding cell. She\'s sobbing uncontrollably, clearly shaken over being locked up.');
  scene.text('You keep to yourself as she keeps hitting the cell door. Deep in your own thoughts of what she could have done to get locked up, you don\'t notice her staring at you. When you finally look up, she\'s staring you down…');
  scene.actions([
    { label: 'Stare back', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('"They can\'t keep me locked up like this," she says frantically. She looks desperate, and her eyes seem to be searching for some reassurance from you.');
    scene.text('You shrink back, unsure of what to say for fear of getting pulled into something. She\'s clearly out of it right now.');
    scene.text('"Listen, I need to get home! My kid is waiting for me! All I\'m guilty of is talking back to an officer! They can\'t keep me locked up!" she wails, tears running down her cheeks.');
    scene.text('You shrug your shoulders. When the woman realizes you won\'t offer her any sympathy, she turns her back to you and starts banging on the cell door again.');
    scene.actions([
      { label: 'Look away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('You quickly avert your gaze, looking at your feet as you ignore the cries of the woman. After some time, an officer opens the door and both you and the other woman in the holding cell look up, hoping you\'re the one to be called out.');
    scene.text(`"${((st as any).pcs_lastname ?? '')}!" the officer yells out.`);
    scene.text('You\'re surprised, but relieved. "Yes, that\'s me!"');
    scene.text('"The detective finally has time to question you. Come on, get off your ass and follow me!" he orders with a frown.');
    scene.text('You quickly jump up and hurry out from the holding cell.');
    scene.text('"When will it be my turn?!" the woman yells behind you.');
    scene.actions([
      { label: 'Follow the officer', goto: ['police_station', 'interrogation'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterInterrogation(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).detecrand = (Math.floor(Math.random() * 100) + 1);
  if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 25) {
    (s as any).detecrand = ((s as any).detecrand ?? 0) - (10);
  } else {
    if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 50) {
      (s as any).detecrand = ((s as any).detecrand ?? 0) + (0);
    } else {
      if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 60) {
        (s as any).detecrand = ((s as any).detecrand ?? 0) + (2);
      } else {
        if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 70) {
          (s as any).detecrand = ((s as any).detecrand ?? 0) + (4);
        } else {
          if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 80) {
            (s as any).detecrand = ((s as any).detecrand ?? 0) + (6);
          } else {
            if (((s as any).policeQW ?? 0)?.['bookingofficer_rel'] < 90) {
              (s as any).detecrand = ((s as any).detecrand ?? 0) + (8);
            } else {
              (s as any).detecrand = ((s as any).detecrand ?? 0) + (10);
            }
          }
        }
      }
    }
  }
  scene.img('images/locations/city/citycenter/police/interrogationroom.jpg');
  scene.text('The detective leads you to a small private room with only some chairs and a table. He shoves you in and closes the door behind him.');
  scene.text('He tells you to take a seat and you quietly comply.');
  scene.text('"I\'ll be right back. I need to get something…" he says.');
  scene.text('You take a seat on the chair and look around anxiously while waiting for the detective to return. When he returns, you see him holding a paper.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).book_response ?? 0) === 1) {
      if (((st as any).detecrand ?? 0) >= 86) {
        ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'easy';
        qspGoto(st, 'court_arrest_events', 'interrogation_start', 'easy');
      } else {
        if (((st as any).detecrand ?? 0) >= 16) {
          ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'norm';
          qspGoto(st, 'court_arrest_events', 'interrogation_start', 'text');
        } else {
          ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'hard';
          qspGoto(st, 'court_arrest_events', 'interrogation_start', 'hard');
        }
      }
    } else {
      if (((st as any).book_response ?? 0) === 2) {
        if (((st as any).detecrand ?? 0) >= 91) {
          ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'easy';
          qspGoto(st, 'court_arrest_events', 'interrogation_start', 'easy');
        } else {
          if (((st as any).detecrand ?? 0) >= 71) {
            ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'norm';
            qspGoto(st, 'court_arrest_events', 'interrogation_start', 'text');
          } else {
            ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'hard';
            qspGoto(st, 'court_arrest_events', 'interrogation_start', 'hard');
          }
        }
      } else {
        if (((st as any).book_response ?? 0) === 3) {
          if (((st as any).detecrand ?? 0) >= 31) {
            ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'easy';
            qspGoto(st, 'court_arrest_events', 'interrogation_start', 'easy');
          } else {
            if (((st as any).detecrand ?? 0) >= 11) {
              ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'norm';
              qspGoto(st, 'court_arrest_events', 'interrogation_start', 'text');
            } else {
              ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'hard';
              qspGoto(st, 'court_arrest_events', 'interrogation_start', 'hard');
            }
          }
        } else {
          if (((st as any).book_response ?? 0) === 4) {
            ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'easy';
            qspGoto(st, 'court_arrest_events', 'interrogation_start', 'easy');
          } else {
            if (((st as any).book_response ?? 0) === 5) {
              ((st as any).policeQW = (st as any).policeQW ?? {})['detective_type'] = 'hard';
              qspGoto(st, 'court_arrest_events', 'interrogation_start', 'hard');
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterReturncell(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  (s as any).policeQW_courtletter_dates = [...((s as any).policeQW_courtletter_dates ?? []), ((s as any).daystart ?? 0) + 7];
  (s as any).policeQW_courtletter_subjects = [...((s as any).policeQW_courtletter_subjects ?? []), '' + (((s as any).policeQW ?? 0)?.['crime_flag']) + '_' + (((s as any).policeQW ?? 0)?.['detective_type']) + ''];
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/police/cityhold.jpg');
  scene.text('As you\'re brought back to the holding cell by the detective, you notice that the sobbing woman is gone and has been replaced by a dangerous looking woman.');
  scene.text('"You\'ll be released soon, just let me take care of the paperwork. As soon it\'s done, you\'ll be out of this place." the detective tells you.');
  scene.text('You nod and he closes the cell door. As soon you turn around, the woman walks up to you. "What are you locked up for?"');
  scene.actions([
    { label: 'Answer her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'court_arrest_events', 'cellmate_story');
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('The two of you keep talking before you\'re suddenly interrupted by an officer opening the cell door.');
    scene.text(`"${((st as any).pcs_lastname ?? '')}, come with me. You're about to get released," he says.`);
    scene.text('You look at him in surprise. "Already? Time really flew by while we were talking," you say to the woman.');
    scene.text('"Go on before they change their mind," she smiles.');
    scene.text('You say goodbye to each other and the officer leads you towards the entrance. As the doors open, you feel the fresh wind breeze against your face.');
    scene.actions([
      { label: 'Walk outside', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Ignore her', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/police/cityhold.jpg');
    scene.text('You let out a sigh. "I don\'t want to talk about it. I\'m sick and tired of this shit."');
    scene.text('"Fine then! Be that way," she sourly answers. "I was just trying to make conversation. Fucking bitch…"');
    scene.text(`You ignore her and some time passes by before the cell door opens. "${((st as any).pcs_lastname ?? '')}, it's your time to get released."`);
    scene.text('You quickly jump up and hurry out from the holding cell. The officer leads you towards the entrance and as the doors open, you feel the fresh wind breeze against your face.');
    scene.actions([
      { label: 'Walk outside', goto: ['city_center', ''] },
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
    case 'reception':
      enterReception(s, scene);
      break;
    case 'rape_report':
      enterRapeReport(s, scene);
      break;
    case 'entrance':
      enterEntrance(s, scene);
      break;
    case 'booking':
      enterBooking(s, scene);
      break;
    case 'booking1':
      enterBooking1(s, scene);
      break;
    case 'booking1_play_along':
      enterBooking1PlayAlong(s, scene);
      break;
    case 'booking1_brash':
      enterBooking1Brash(s, scene);
      break;
    case 'booking1_weasel':
      enterBooking1Weasel(s, scene);
      break;
    case 'booking2':
      enterBooking2(s, scene);
      break;
    case 'booking2_follow':
      enterBooking2Follow(s, scene);
      break;
    case 'booking2_brash':
      enterBooking2Brash(s, scene);
      break;
    case 'booking2_flirt':
      enterBooking2Flirt(s, scene);
      break;
    case 'holdingcell':
      enterHoldingcell(s, scene);
      break;
    case 'interrogation':
      enterInterrogation(s, scene);
      break;
    case 'returncell':
      enterReturncell(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const police_station: LocationDef = {
  name: 'police_station',
  title: 'Police Station Entrance',
  region: 'other',
  enter: enter,
};
