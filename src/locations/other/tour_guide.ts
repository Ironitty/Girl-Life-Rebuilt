import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterApplyForJob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'tour_guide', 'tourstart');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/palace/office/tour_office.jpg');
  scene.text('You see an ad posted in the park for summer only tour guides needed and decide to inquire about it at an office outside the old Imperial Palace.');
  // TODO-QSP: dynamic text: You answer a few questions the management team asks you and are offered a summer...
  scene.text(`You answer a few questions the management team asks you and are offered a summer position at ${qspFunc(s, 'money', 'string_price', 1000)} per shift of 8 hours during day time. Fresh uniforms are provided daily and training will be you shadowing another guide for the first couple of days to make sure you know the details required to lead your groups.`);
  scene.text('Like any teenager your only questions are about breaks and days off. The manager smiles, not surprised, and tells you that working is voluntary. If you do not show up then obviously you will not make any money that day, but otherwise no daily commitment is required from you. Breaks will be allowed if there are no groups to lead at that time and you will be given a small lunch everyday that you choose to work.');
  scene.actions([
    { label: 'Accept the position', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'pav_tour_guide');
  }, goto: ['pav_park', 'start'] },
    { label: 'Change your mind', goto: ['pav_park', 'start'] },
  ]);
  scene.build();
}

function enterTourstart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'tour_guide', 'tourstart');
  qspCall(s, 'jobs', 'clock', 'pav_tour_guide');
  (s as any).minut = ((s as any).minut ?? 0) + 240;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'humint', Math.floor(Math.random() * 3) + 0);
  qspCall(s, 'stat', '');
  scene.text('<center><h2>Imperial Palace</h2></center>');
  scene.img('images/locations/pavlovsk/palace/pav_palace.jpg');
  scene.text('You spend the first part of your day walking tourists around the more famous parts of the park and museums on the grounds.');
  scene.actions([
    { label: 'Eat lunch and get back to work', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 240;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (100);
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'tour_guide', 'tourran' + rand(1, 8)
  } },
  ]);
  scene.build();
}

function enterTourran1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Imperial Palace</h2></center>');
  scene.img('images/locations/pavlovsk/palace/pav_palace.jpg');
  scene.text('Today was pretty boring, nothing interesting happened. You spent most of the time wishing you had gone to the beach or done something else, anything really.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue with the tours', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Imperial Palace</h2></center>');
  scene.img('images/locations/pavlovsk/palace/pav_palace.jpg');
  scene.text('Your group this time is a bunch of jocks who do not seem all that interested in the tour. They spend a lot of their time talking to each other and mostly ignoring your comments on the history they were supposed to be there to learn about.');
  scene.text('You get really tired of being ignored and finally ask them why they came. "Coach made us," one of them says. "Then he bailed and went back to the hotel to chase maids, probably. As soon as this is done we are going to the beach." The rest of them cheer, obviously looking forward to it.');
  scene.text('You think about it a minute, and realize that since there are so many groups and a lot of tour guides employed nobody would actually miss your group if it went missing for an hour or two. You also know a quiet, out of sight stretch of river nobody would find you.');
  scene.text('Should you suggest slipping away for a swim or just try and finish the tour quickly so they can get to the beach sooner and let you get back to work?');
  if (((s as any).pcs_horny ?? 0) >= 40) {
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Slip away to the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Slip away to the beach', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'exp_gain', 'persuas', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
    scene.text('You tell the group to follow you as you slip into the trees and down to the river spot you decided would be a good place to swim without interruption. Since they planned to go swimming after the tour they already have swim trunks on and jump straight in once you get there.');
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.text('As you watch them jump around, half-naked, you feel a strong desire to join them. Since you are wearing your tour guide outfit, doing so will mean going in completely nude, just going in your underwear would mean wet spots on your uniform. Management would definitely notice and question you about it. You could even have some fun with the boys, if you wanted to.');
      scene.actions([
        { label: 'Hang out nude', goto: ['tour_guide', 'rivernude'] },
      ]);
    } else {
      scene.text('Since you are wearing your tour guide uniform you just lean up against a tree and watch them have fun splashing around, content that at least you can take a break from all that walking and talking. They try and talk you into joining them but you are not comfortable with the idea of swimming in your underwear or naked with a bunch of jocks you do not know while working.');
    }
    scene.actions([
      { label: 'Alright boys, I have to go back to work', goto: ['tour_guide', 'toursdone'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Just finish the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/palace/palace_garden.jpg');
  scene.text('You end up with a group that has several small children. When taking them through some of the gardens a couple kids break loose from their parents and run through some of the flower beds. The parents run after them, grab them, and bring them back to the group, faces red with embarrassment.');
  qspCall(s, 'exp_gain', 'observ', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue with the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran4(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Imperial Palace</h2></center>');
  scene.img('images/locations/pavlovsk/palace/events/tour_bus.jpg');
  // TODO-QSP: dynamic text: Your manager paces all over the place, "I just got word that several buses with ...
  scene.text(`Your manager paces all over the place, "I just got word that several buses with important foreign tourists are coming here in a few minutes. It's very important that we show ourselves from our best side. I'm looking specially at you, Miss ${((s as any).pcs_lastname ?? 0)}"`);
  scene.text('"Why am I being singled out?" you blurt out, confounded.');
  // TODO-QSP: dynamic text: "I really don't have time for this, you're in charge of the second bus, don't di...
  scene.text(`"I really don't have time for this, you're in charge of the second bus, don't disappoint me, Miss ${((s as any).pcs_lastname ?? 0)}!" he shrugs you off.`);
  scene.text('Several buses stop in front of the Palace and a lot of tourists pour out of them. Suddenly you\'re approached by an important looking man, "Young lady, I\'ve understood that you\'ll be our guide today. Aren\'t you a bit too young to be doing this important job?"');
  scene.text('You shrug your shoulders not really caring about his comments too much and tell him to tell the tour group to scurry along.');
  scene.text('The tour follows closely behind only stopping as you explain the nooks and crannies within the Palace, you\'re not really sure why the tourists are laughing at the translations as you\'re taking this as serious as you can.');
  scene.text('As the tour finishes you yank the translator by the arm and lead him a bit aside, "Why were they laughing every time you translated something from what I said?" you ask him.');
  scene.text('The translator pats you on the head, "You\'re far too young to be doing this kind of work. I didn\'t actually translate anything you said, I was just making stuff up as we went on…"');
  scene.text('You somehow maintain your posture not wanting to make a scene, turning around without saying anything and hurry away before changing your mind.');
  scene.actions([
    { label: 'Finish the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran5(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Imperial Palace</h2></center>');
  scene.img('images/locations/pavlovsk/palace/pav_palace.jpg');
  scene.text('There is a smaller group joining you today, some older people, a family and a couple. The tour is going quite routinely without much excitement. As the tour is nearing the end, you start counting the group since you\'re responsible for them during the tour, noticing that the couple missing.');
  scene.text('Getting worried and annoyed, you start looking for them, only stopping by a closed door, hearing some faint sounds behind it.');
  qspCall(s, 'willpower', 'voyeur', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Peek [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Peek', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/palace/events/tour_bj.jpg');
    scene.text('You can\'t resist the urge and peek inside the room, and almost giving yourself up as you gasp seeing the woman sucking her boyfriend off. She\'s clearly experienced, as she easily fits his member inside her mouth, all the way down his shaft.');
    scene.text('The boyfriend switches between looking worryingly around, not wanting to get caught and giving himself up into pure indulgence, "That\'s it babe, you\'re so fucking good with…" you barely hear him.');
    scene.text('All of a sudden, you feel someone creeping behind you…');
    // TODO-QSP: dynamic text: As you turn around, it's the manager, "What are you doing <<$pcs_firstname>>?"
    scene.text(`As you turn around, it's the manager, "What are you doing ${((s as any).pcs_firstname ?? 0)}?"`);
    scene.text('Knowing the couple would get in trouble and get the cops called on them, you turn around making as much sound as possible to warn them, "N-Nothing sir, I thought I heard a sound, but I was wrong, so I was just making my way back to my tour group."');
    // TODO-QSP: dynamic text: The manager sighs, clearly annoyed by your answer, "What do you mean you left yo...
    scene.text(`The manager sighs, clearly annoyed by your answer, "What do you mean you left your tour group alone?! Let me take a look! W-What is happening here?! Why is your penis out in the open?! And why is this girl kneeling on the floor?! ${((s as any).pcs_firstname ?? 0)}!"`);
    scene.text('Not wanting to get involved with this situation, you quietly slip away to the rest of the group awaiting your return. It doesn\'t take long before you see the man gunning for the door with his pants down while his girlfriend is trailing closely behind, chased by your manager.');
    scene.actions([
      { label: 'Finish the tour', goto: ['tour_guide', 'toursdone'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/palace/pav_palace.jpg');
    scene.text('Not wanting to deal with whatever is happening in there, you decide to head back to the main group and await the couple to show up again. After a couple of minutes, they reunite with the group again, making some half-hearted excuses about them getting lost.');
    scene.actions([
      { label: 'Finish the tour', goto: ['tour_guide', 'toursdone'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTourran6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/palace/palace_garden.jpg');
  scene.text('It seems that it will be another uneventful tour, as you look around at the gathered group today. As you are halfway through the tour, a rancid smell suddenly reaches your nostrils, making it hard to keep a straight face. You look around and notice one person standing out, as the others have distanced themselves from this person. You keep on being professional throughout the tour, ignoring the rancid smell that just intensifies.');
  scene.text('As the tour ends, thinking you\'ve finally managed to escape, the person comes over to you and starts up a conversation. You try to be polite, but eventually make an excuse about the next group and flee.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 150, 'cash');
  qspCall(s, 'mood', 'raise', 'small');
  scene.img('images/locations/pavlovsk/palace/palace_garden.jpg');
  scene.text('This is one of the quieter and slower days working, you only need to take a sweet old couple on the tour. You take your sweet time, patiently answering all their questions, slowly going room for room. While you\'re explaining the different knick-knacks, they attentively listen and sometimes whisper to each other, so they don\'t bother you.');
  // TODO-QSP: dynamic text: At the end of the tour they thank you for being such a kind guide for putting up...
  scene.text(`At the end of the tour they thank you for being such a kind guide for putting up with them, and hand you some money. You tell them that it is not necessary, but they insist saying "Don't dare make us upset, now take the money and enjoy it, you've deserved it!" and pressing the ${qspFunc(s, 'money', 'string_profit', 150)} into your hand.`);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterTourran8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'tiny');
  scene.img('images/locations/pavlovsk/palace/palace_garden.jpg');
  scene.text('You end up with a group that has an annoying visitor. While talking to the group, you constantly get cut off by the show-off visitor that is contradicting every word you\'re saying and gives some of their own takes, which no one asked for. You notice that the rest of the group is also annoyed by this person and are rolling their eyes as soon as they open their mouth.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue with the tour', goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterRivernude(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcgeneratec', '', 0, 'Beach boys', Math.floor(Math.random() * 13) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.img(`images/locations/pavlovsk/palace/river/river${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('The boys are too busy playing water games with each other to realize you have removed your clothes until you wade into the water with them. When they do notice, jaws drop, and you notice several of them have bulges in their shorts. A few whistle, and a couple of them start sliding closer to you.');
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
  qspCall(s, 'arousal', 'flash', 3, 'exhibitionism');
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Give them a show', goto: ['tour_guide', 'riverbate'] },
    { label: 'Seduce one of the cute boys', goto: ['tour_guide', 'riverseduce1'] },
    { label: 'Alright boys, I have to go back to work', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
  }, goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterRiverbate(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/palace/river/river_bate1.jpg');
  scene.text('"No touching," you giggle, before heading back to the riverbank. Going down on your knees facing away, you push your butt into the air to give them a good view. Reaching between your legs, you start rubbing yourself, while looking over your shoulder at the guys.');
  scene.text('Most of them have pulled out their dicks and are stroking themselves, watching you intently. They unconsciously move closer to the riverbank, for a better view, and stop pretty close to you.');
  scene.text('The sight of that many guys masturbating as they watch you gets you very wet, and it isn\'t long before you\'re moaning and grinding against your hand. The boys are jerking themselves faster now, a few are starting to make funny faces as they reach their limits.');
  scene.text('"You can cum on me, just keep it away from my face," you say sweetly. It does not take long before the first guy pops, shooting his cum onto your back. Several more erupt, and your back and butt get really warm.');
  qspCall(s, 'arousal', 'clit_finger', 3, 'masturbate', 'exhibitionism');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  qspCall(s, 'stat', '');
  scene.text('Once your body settles down, you slip back into the water and wipe the cum off. Most of the guys have pulled their shorts up and are back to splashing around in the water, though a few are still hanging out nearby, hoping you will let them do more.');
  scene.text('You know you have been gone from work too long, any longer and someone will most likely realize you\'re missing. The thought of letting them have their way with you is pretty damn tempting, though.');
  scene.actions([
    { label: 'Give in to your desires', goto: ['tour_guide', 'riverseduce2'] },
    { label: 'Alright boys, I have to get back to work', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'arousal', 'end');
  }, goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterRiverseduce1(s: GameState, scene: SceneBuilder): void {
  (s as any).rivermissed = 0;
  scene.img(`images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event_${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You wait until the one you think is cute looks at you, then subtly motion him to follow. You casually walk around a bend in the river, out of sight of the others, and wait for him. He follows casually, unnoticed by the others.');
  scene.text('He walks up to you and starts to kiss you, making you melt, hungry for more. He drops his shorts and lies in the sand, while you start kissing your way down his body, until you reach his dick. You start by licking the tip, drawing out a few soft moans from him, before taking his head into your mouth.');
  scene.text('You take your time, sucking softly and working your tongue around, slowly bobbing your head lower and lower, until you get about halfway. Taking a deep breath through your nose, you shove the cock down your throat as much as you can.');
  scene.text('Gagging on his cock, drool escaping your lips, you keep bobbing up and down until you decide it is time to mount him. Letting his cock out of your mouth with a POP, you tell him your almost ready for a pounding.');
  if (((s as any).vibratorIN ?? 0) === 1) {
    (s as any).vibratorIN = 0;
    (s as any).vibratorOUT = 1;
    scene.text('You spread your legs and take the vibrator out of your pussy, letting out a slight moan as you do so. You feel somewhat empty now, though that\'s about to change.');
  }
  if (((s as any).vaginal_slip ?? 0) < 4) {
    qspCall(s, 'arousal', 'auto_lube', 'vag');
  }
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'arousal', 'bj', 5, 'deepthroat');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Mount him', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event_${Math.floor(Math.random() * 11) + 5}.jpg`);
    scene.text('You slide up until his dick is against your pussy, and start rubbing, coating it with your juices. You reach down and line his dick up, and start to slide down.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('As he pushes in you feel something inside of you rip. You know it was your hymen, you are no longer a virgin.');
    }
    scene.text('You ride his cock, enjoying the feel of the tip rubbing your inner walls. His hands reach up, and start tweaking your nipples, making you gasp. Sliding off, you shake your ass at him. He takes the hint and sits up, mounting you from behind.');
    scene.text('As he fucks you, he reaches between your legs and rubs your clit, causing the pleasure to surge through you in waves. Rolling you onto your back, he plunges back in, hardly slowing. Throwing your legs into the air, you moan your approval, loudly.');
    scene.actions([
      { label: 'Cum', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event_${Math.floor(Math.random() * 2) + 16}.jpg`);
    scene.text('Cupping your breasts, you massage them for a bit, stopping occasionally to pinch and twist your rock-hard nipples. Still rubbing your clit, he speeds up his thrusting, until you begin to see stars.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'vaginal', 10);
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['tour_guide', 'riverclean'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRiverseduce2(s: GameState, scene: SceneBuilder): void {
  (s as any).rivermissed = 0;
  scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex16.jpg');
  // TODO-QSP: $OpenInnerThought + '"Fuck it, I will just say I was in the restroom, or something,"' + $CloseInnerT...
  if (((s as any).vibratorIN ?? 0) === 1) {
    (s as any).vibratorIN = 0;
    (s as any).vibratorOUT = 1;
    scene.text('You spread your legs and take the vibrator out of your pussy, letting out a slight moan as you do so. You feel somewhat empty now, though that\'s about to change.');
  }
  if (((s as any).vaginal_slip ?? 0) < 4) {
    qspCall(s, 'arousal', 'auto_lube', 'vag');
  }
  scene.text('The guys are all hard again, and closing in on you, eager looks on their faces. The guy you motioned to first is already between your legs, promising not to cum inside you as he starts to slide into your still wet snatch.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    scene.text('As he pushes in you feel something inside of you rip. You know it was your hymen, you are no longer a virgin.');
  }
  scene.text('He starts pumping as the next guy reaches you, you motion him closer and wrap your lips around his dick, as the rest of them crowd around you. He doesn\'t last long though, and shoots his seed down your throat before jumping out of the way.');
  scene.text('The guy between your legs stands up and pushes his cock in between your lips, as another one dives between your legs. He was already close, so he cums almost right away, giving you a moment to breathe and swallow before the next guy jumps in.');
  qspCall(s, 'arousal', 'vaginal', 10, 'rough', 'gangbang');
  qspCall(s, 'arousal', 'bj', (-10), 'deepthroat', 'gangbang');
  qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'cum_call', 'mouth_swallow');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Keep going', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'stomach');
    qspCall(s, 'npcgeneratec', '', 0, 'Rowdy guy', Math.floor(Math.random() * 13) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'breasts');
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex14.jpg');
    scene.text('The guys take turns rotating, you have long since lost count of how many loads you have swallowed. Some have splattered on your breasts or stomach, but thankfully nobody has tried to give you a facial yet.');
    scene.text('You get lost in the moment, the only thing on your mind now is where the next dick is coming from. The boys are having a great time, tossing jokes back and forth as you are twisted, bent, held down, or picked up to be in a position they want to fuck you in.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
    if (((s as any).pcs_horny ?? 0) >= 90) {
      qspCall(s, 'mood', 'raise', 'small');
    }
    qspCall(s, 'arousal', 'vaginal', 10, 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['tour_guide', 'riverclean'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRiverclean(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/pavlovsk/palace/river/river${Math.floor(Math.random() * 3) + 1}.jpg`);
  if (((s as any).riverbusted ?? 0) === 2) {
  }
  scene.text('You go back into the water again to wash off the cum, feeling guilty, certain if you don\'t hurry someone will decide to come looking for you.');
  // TODO-QSP: dynamic text: The palace grounds are big, but you would rather avoid that situation entirely. ...
  scene.text(`The palace grounds are big, but you would rather avoid that situation entirely. ${((s as any).start_text ?? 0)}`);
  if (((s as any).vibratorOUT ?? 0) === 1) {
    (s as any).vibratorIN = 1;
    (s as any).vibratorOUT = 0;
    scene.text('You slowly push the vibrator back into your pussy, feeling full again.');
  }
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'outfit', 'wear_last_worn');
  scene.actions([
    { label: 'Alright boys, I have to get back to work', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['tour_guide', 'toursdone'] },
  ]);
  scene.build();
}

function enterToursdone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/palace/office/tour_office.jpg');
  qspCall(s, 'jobs', 'paycheck', 'pav_tour_guide');
  qspCall(s, 'stat', '');
  scene.text('As the day goes on the flood of tourists wanting to see the Palace slows to a crawl. Eventually you hit your eight hour mark and head back to the office to change into your own clothes and collect your pay.');
  if (((s as any).rivermissed ?? 0) >= 4  &&  ((s as any).riverbusted ?? 0) >= 1) {
    scene.text('As you walk into the office, your boss is waiting for you. One look at his face and your heart sinks, you were noticed missing again. He motions you to follow him into the back room.');
    scene.actions([
      { label: 'Follow him', goto: ['tour_guide', 'backroom'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: Walking into the tour office, you find your boss waiting for you. "Follow me, <<...
    scene.text(`Walking into the tour office, you find your boss waiting for you. "Follow me, ${((s as any).pcs_firstname ?? 0)}," he says with an unpleasant look on his face, and heads to a room way in the back.`);
    if (((s as any).rivermissed ?? 0) >= 8  &&  ((s as any).riverbusted ?? 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 100) {
      // TODO-QSP: dynamic text: Walking into the tour office, you find your boss waiting for you. "Follow me, <<...
      scene.text(`Walking into the tour office, you find your boss waiting for you. "Follow me, ${((s as any).pcs_firstname ?? 0)}," he says with an unpleasant look on his face, and heads to a room way in the back.`);
      scene.actions([
        { label: 'Follow him', goto: ['tour_guide', 'backroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Done for the day', goto: ['pav_park', 'start'] },
        { label: 'Resign from your job', goto: ['tour_guide', 'resign'] },
      ]);
    }
    scene.actions([
      { label: 'Follow him', goto: ['tour_guide', 'backroom'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'apply_for_job':
      enterApplyForJob(s, scene);
      break;
    case 'tourstart':
      enterTourstart(s, scene);
      break;
    case 'tourran1':
      enterTourran1(s, scene);
      break;
    case 'tourran2':
      enterTourran2(s, scene);
      break;
    case 'tourran3':
      enterTourran3(s, scene);
      break;
    case 'tourran4':
      enterTourran4(s, scene);
      break;
    case 'tourran5':
      enterTourran5(s, scene);
      break;
    case 'tourran6':
      enterTourran6(s, scene);
      break;
    case 'tourran7':
      enterTourran7(s, scene);
      break;
    case 'tourran8':
      enterTourran8(s, scene);
      break;
    case 'rivernude':
      enterRivernude(s, scene);
      break;
    case 'riverbate':
      enterRiverbate(s, scene);
      break;
    case 'riverseduce1':
      enterRiverseduce1(s, scene);
      break;
    case 'riverseduce2':
      enterRiverseduce2(s, scene);
      break;
    case 'riverclean':
      enterRiverclean(s, scene);
      break;
    case 'toursdone':
      enterToursdone(s, scene);
      break;
    default:
      enterApplyForJob(s, scene);
      break;
  }
}

export const tour_guide: LocationDef = {
  name: 'tour_guide',
  title: 'You see an ad posted in the park for summer only tour guides',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You see an ad posted in the park for summer only tour guides needed and decide to inquire about it at an office outside the old Imperial Palace.'],
  enter: enter,
};
