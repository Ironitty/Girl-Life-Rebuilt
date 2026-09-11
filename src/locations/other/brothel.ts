import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).dbg = 0;
  if (((s as any).dbg ?? 0) === 1) {
    // TODO-QSP: 'loc: ' + $loc
    // TODO-QSP: 'args: ' + $ARGS[0]
    // TODO-QSP: 'session: ' + $sessionB
    // TODO-QSP: 'stage: ' + stage
    // TODO-QSP: 'pain: ' + pain['total']
    // TODO-QSP: 'step: ' + brothel['step']
    // TODO-QSP: 'caneFeetCount: ' + caneFeetCount
  }
  scene.build();
}

function enterLobby(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Hotel Lobby</h3>');
  scene.img('images/locations/shared/brothel/hotellobby.jpg');
  scene.text('You are in a lobby of a middle-class Hotel.');
  scene.text('There is a large restaurant hall, and a long <a href="exec:gt \'brothel\', \'bar\'">wooden bar</a> with many high chairs.');
  scene.text('Next to the bar are doors leading to a <a href="exec:gt \'brothel\', \'toilet\'">toilet</a>.');
  scene.text('Alongside the windows are tables, each for about four to six people.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the hotel', goto: ['road', '20'] },
    { label: 'Visit the hotel bar', goto: ['brothel', 'bar'] },
    { label: 'Visit the bathroom', goto: ['brothel', 'toilet'] },
  ]);
  scene.build();
}

function enterToilet(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'toilet');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text('<h3>Lobby Toilet</h3>');
  scene.img('images/locations/shared/brothel/hoteltoilet.jpg');
  if (((s as any).pcs_hairbsh ?? 0) < 1) {
    // TODO-QSP: act 'Brush your hair': gt 'mirror', 'brush'
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the lobby', goto: ['brothel', 'lobby'] },
    { label: 'Look into the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterBar(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Hotel Bar</h3>');
  if (((s as any).alko ?? 0) <= 3) {
    scene.img('images/locations/shared/brothel/bar.jpg');
    scene.text('A cozy bar made of fine hard wood. There are a few patrons here, but no one you can recognize. Probably travelling guests.');
    scene.text('The barman is cleaning some glasses, occasionally looking your way, probably checking if you want to order something.');
  } else {
    if (((s as any).alko ?? 0) < 6) {
      scene.img('images/locations/shared/brothel/bardrunk.jpg');
      scene.text('A cozy bar made of fine hard wood. There are a few patrons here, but no one you can recognize. Probably travelling guests.');
      scene.text('You are drunk and the barman is obviously enjoying the presence of a nice girl in such a state, often flirting with you and enjoying your looks.');
    } else {
      scene.img('images/locations/shared/brothel/barwasted.jpg');
      scene.text('A cozy bar made of fine hard wood. There are a few patrons here, but no one you can recognize. Probably travelling guests.');
      scene.text('You are wasted, lying with your head on the bar, barely keeping awake. The barman starts to be nervous, probably afraid of scaring away the regular guests.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bar', goto: ['brothel', 'lobby'] },
    { label: 'Order something', goto: ['brothel', 'order'] },
    { label: 'Just sit here', goto: ['brothel', 'sit'] },
  ]);
  scene.build();
}

function enterSit(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Hotel Bar</h3>');
  scene.img('images/locations/shared/brothel/bar.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if (((s as any).alko ?? 0) >= 6  &&  (Math.floor(Math.random() * 100) + 1) <= 30  &&  ((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === '') {
    scene.text('You try to take a seat behind the bar, but you\'re too drunk to sit up straight. Instead, you rest your head on the bar, mumbling incoherently');
    qspCall(s, 'brothel', 'abduction_start');
  } else {
    scene.text('You take a seat behind the bar, looking around at the few guests sitting around the dining room.');
    scene.text('There\'s nothing of importance, as far as you can see.');
    scene.actions([
      { label: 'Continue', goto: ['brothel', 'bar'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterOrder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h3>Hotel Bar</h3></center>');
  scene.text('<center><h5>Ordering a drink</h5></center>');
  if (((s as any).alko ?? 0) <= 3) {
    scene.img('images/locations/shared/brothel/barorder.jpg');
  } else {
    if (((s as any).alko ?? 0) < 6) {
      scene.img('images/locations/shared/brothel/bardrunk.jpg');
    } else {
      scene.img('images/locations/shared/brothel/barwasted.jpg');
    }
  }
  scene.text('You signal to the barman that you want something.');
  scene.text('"What would you like miss?"');
  qspCall(s, 'jobs', 'get_job_definition', 'highway_brothel_prostitute');
  if (((s as any).alko ?? 0) >= 6  &&  (Math.floor(Math.random() * 100) + 1) <= 30  &&  ((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === '') {
    scene.text('You try to order another drink, but as you faint all that gets out of your mouth is some drunken babble…');
    qspCall(s, 'brothel', 'abduction_start');
  } else {
    scene.actions([
      { label: 'Cancel order', goto: ['brothel', 'bar'] },
      { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['highway_brothel_prostitute'] === 'employed') {
    scene.actions([
      { label: 'Order The Blue-Blooded Russian (0:05)', goto: ['brothel', 'password'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbductionStart(s: GameState, scene: SceneBuilder): void {
  scene.text('The barman was obviously waiting for this moment.');
  scene.text('He walks out of the bar, taking you in his arms and carrying you away.');
  scene.text('On the way, you briefly regain consciousness from time to time, realizing that you are carried somewhere upstairs to what seems to be one of the hotel rooms.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted'] },
  ]);
  scene.build();
}

function enterAbducted(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 3, 'armL', 'bind');
  qspCall(s, 'pain', '', 3, 'armR', 'bind');
  qspCall(s, 'pain', '', 3, 'legL', 'bind');
  qspCall(s, 'pain', '', 3, 'legR', 'bind');
  qspCall(s, 'stat', '');
  scene.text('<h3>Hotel Room</h3>');
  scene.text('You wasted yourself in the bar and now you suffer the consequences.');
  scene.img('images/locations/shared/brothel/roombedtied.jpg');
  scene.text('The barman dropped you on the bed face down, stripped you and tied your hands and feet to the corners of the bed.');
  scene.text('You are barely able to resist, giving minimal resistance to your aggressor.');
  scene.text('"Hah, slut! Now you will get another drink from me, the freshest one!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted1'] },
  ]);
  scene.build();
}

function enterAbducted1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 4, 'asshole', 'pinch');
  qspCall(s, 'arousal', 'vaginal_finger', 5, 'bound', 'rape');
  qspCall(s, 'arousal', 'anal_finger', 5, 'bound', 'rape');
  scene.img('images/locations/shared/brothel/pinchandfingertiedtobed.jpg');
  scene.text('He jumps on to you, grabbing your ass and pinching your cheeks.');
  scene.text('<center><b>"Ouch! It… hurts… Ouch!"</b></center>');
  scene.text('Aroused with your reaction, he pushes his finger into your pussy, one by one until there are four of them inside.');
  scene.text('"What a whore! She\'s already wet!"');
  scene.text('He uses the juiced fingers and thrusts them into your anus, once again forcing you back to the living world.');
  scene.text('<center><b>"Auuuuuuu!"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted2'] },
  ]);
  scene.build();
}

function enterAbducted2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 7, 'asshole', 'stretch');
  qspCall(s, 'arousal', 'anal_dildo', 5, 'bound', 'rape');
  scene.img('images/locations/shared/brothel/openchampagne.mp4');
  scene.text('"Now slut, let\'s get you your drink!"');
  scene.text('He reaches for a bottle of champagne from the minibar.');
  scene.text('All you can hear in that moment is a popping sound as the bottle plug shoots out… The barman covers the neck of the bottle with his thumb and shakes it to build up pressure…');
  scene.text('…and then forces it into your anus as far as it goes, while the sparkling wine gushes out deep into your intestines.');
  scene.text('<center><b>"Ayyyieeee!"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted3'] },
  ]);
  scene.build();
}

function enterAbducted3(s: GameState, scene: SceneBuilder): void {
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'pain', '', 7, 'asshole', 'stretch');
  (s as any).guy = ((s as any).guy ?? 0) + (4);
  (s as any).temp = 4;
  (s as any).sexpartkno = 0;
  // TODO-QSP: :abdrapeloop
  qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 16) + 35);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'arousal', 'vaginal', 5, 'bound', 'rape');
  qspCall(s, 'arousal', 'anal', 10, 'bound', 'rape');
  (s as any).cumarrcon = 0;
  qspCall(s, 'cum_call', 'anus', 'Rapist', 2);
  (s as any).temp = ((s as any).temp ?? 0) - (1);
  if (((s as any).temp ?? 0) > 0) {
    // TODO-QSP: jump 'abdrapeloop'
  }
  qspCall(s, 'arousal', 'end');
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
  ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/tiedtobedfuck.mp4');
  scene.text('The champagne bottle is still inside your anus like a giant buttplug, but the flow has stopped.');
  scene.text('He takes it and pulls it out. The wine slowly leaks out of your wrecked anus…');
  scene.text('"Well, now that the drink is taken care of, we have also got you an expensive enema, so now we can finally get to business!"');
  scene.text('He cleans your ass from the remains of whatever little was inside.');
  scene.text('His dick is not the biggest one, but it is quite thick.');
  scene.text('Your pussy is the first victim of his phallus, and after a short while he moves to your anus.');
  scene.text('Another jolt of pain runs through your bottom, but this time you fade away for sure…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted4'] },
  ]);
  scene.build();
}

function enterAbducted4(s: GameState, scene: SceneBuilder): void {
  (s as any).hadOwnanalPlugIn = ((s as any).analPlugIn ?? 0);
  (s as any).analPlugIn = 1;
  (s as any).pcs_hairbsh = (-1);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    ((s as any).sleepVars ?? {})['notathomesleep'] = (((s as any).sleepVars ?? {})['notathomesleep'] ?? 0) + (1);
  }
  qspCall(s, 'sleep_simple', 'sleep_until', 10, 0);
  qspCall(s, 'pain', '', 3, 'armL', 'bind');
  qspCall(s, 'pain', '', 3, 'armR', 'bind');
  qspCall(s, 'pain', '', 3, 'legL', 'bind');
  qspCall(s, 'pain', '', 3, 'legR', 'bind');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/wakeupboundonbedanalplug.jpg');
  scene.text('You wake up, still bound to the bed. Behind the curtains you can see that it is late morning.');
  scene.text('Your head is in pain and spinning, your whole body is aching along with it.');
  scene.text('You feel a strange fullness in your abdomen and your pussy and anus itch.');
  scene.text('As you try to struggle out of the bounds you realize what has happened… and what is left as a reminder…');
  scene.text('You desperately try to push the plug out of your ass, but its rim is too wide and it rests well inside you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Desperately wait', goto: ['brothel', 'abducted5'] },
  ]);
  scene.build();
}

function enterAbducted5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/brothel/wakeupboundonbedanalplug2.jpg');
  scene.text('Finally you hear the door open, someone is coming in.');
  scene.text('"So girl, how was your night?"');
  scene.text('<center><b>"What? Who are you? Untie me!"</b></center>');
  scene.text('"I will, but first you will tell me how your night was."');
  scene.text('<center><b>"Wh… How could it have been? I don\'t remember most of it, I\'m tied naked to a bed with something stuck in my anus I do not even know what it is! My pussy and anus hurt and I was probably raped the whole night, while I was unconscious!"</b></center>');
  scene.text('"Well, you mostly covered it all. But you still didn\'t tell me how, you liked it."');
  scene.text('<center><b>"Please just untie me! Everything hurts like hell! Please!"</b></center>');
  scene.text('"OK, but then you will answer me. And first we need to get rid of the plug, don\'t we?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'abducted6'] },
  ]);
  scene.build();
}

function enterAbducted6(s: GameState, scene: SceneBuilder): void {
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
  qspCall(s, 'pain', '', 5, 'asshole', 'stretch');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/pullplugfromass.mp4');
  scene.text('He leans to your ass and reaches for the top of the plug.');
  scene.text('"Quick or slow, girl?"');
  scene.text('<center><b>"What?! No, don\'t touch it!"</b></center>');
  scene.text('"Haha, they say do it swift, it hurts less! Let\'s try it!"');
  scene.text('With those words he pulls the plug out, leaving your anus as a huge gaping hole…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sob from pain', goto: ['brothel', 'abducted7'] },
  ]);
  scene.build();
}

function enterAbducted7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  scene.img('images/locations/shared/brothel/abusedface.jpg');
  scene.text('"Now tell me how did you like all of this. Answer me honestly and you will be free to go."');
  scene.text('<center><b>"Well…"</b></center>');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Admit that you somehow liked it as you fancy to be dominated [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Admit that you somehow liked it as you fancy to be dominated [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['brothel', 'abducted_like'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yell at him that it was horrible', goto: ['brothel', 'abducted_hate'] },
  ]);
  scene.build();
}

function enterAbductedLike(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_employed', 'highway_brothel_prostitute');
  qspCall(s, 'mood', 'lower', 'small');
  qspCall(s, 'mood', 'lower_disposition', 'tiny');
  scene.img('images/locations/shared/brothel/abusedface.jpg');
  scene.text('You just admitted to a complete stranger, who abducted, tied and raped you for a whole night, that you actually liked the experience…');
  scene.text('"I thought so. What a nice submissive slut you are. I have an offer for you…"');
  scene.text('<center><b>"An offer?"</b></center>');
  scene.text('"Yes. You know, this is not just a hotel. This is something more."');
  scene.text('<center><b>"What do you mean?"</b></center>');
  scene.text('"We have use for girls like you. Our main business is downstairs, below the hotel in an old bunker."');
  scene.text('"It is a brothel."');
  scene.text('<center><b>"A whorehouse? Really?"</b></center>');
  scene.text('"Not a common brothel like the many others. This one is special."');
  scene.text('<center><b>"How?"</b></center>');
  scene.text('"It is a sado maso brothel. Whores get used by dominant males and vice versa."');
  scene.text('<center><b>"Oh… OK. And the offer?"</b></center>');
  scene.text('"Well you have just proven you like to be bound, abused, raped and humiliated. You\'ve got the perfect CV. I want you to be one of our girls."');
  scene.text('<center><b>"Uhm… I, I need to think about it. I don\'t know if I like it THAT much."</b></center>');
  scene.text('"That\'s OK. We don\'t force our girls to work here. Most of the time at least… But the pay is above anything you can get anywhere these days!"');
  scene.text('<center><b>"OK, I understand. I\'ll think it through…"</b></center>');
  scene.text('He looks at you as if he\'s trying to read you:');
  scene.text('"Oh I think you will come soon enough. When you do so, go to whoever is behind the bar and tell him that you want a special drink. The Blue Blooded Russian. Everything else will be taken care of."');
  scene.text('He seems to be finished talking to you. On his way back to the door he tosses a pile of your clothes your way. Without a word he shuts the door and is gone.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'lobby'] },
  ]);
  scene.build();
}

function enterAbductedHate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_fired', 'highway_brothel_prostitute');
  qspCall(s, 'mood', 'lower', 'large');
  qspCall(s, 'mood', 'lower_disposition', 'small');
  scene.img('images/locations/shared/brothel/abusedface.jpg');
  scene.text('"Well bitch then you should not get wasted in a bar in the middle of nowhere, full of strangers you don\'t know!"');
  scene.text('<center><b>"You moron! Rapist! Idiot!"</b></center>');
  scene.text('"Fuck off you slut. Take your clothes and begone!"');
  scene.text('You furiously take your clothes, put them on and run away through the door back to the lobby.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel', 'lobby'] },
  ]);
  scene.build();
}

function enterPassword(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel ?? {})['step'] = 0;
  scene.text('<h3>Hotel Bar</h3>');
  scene.text('<h5>Ordering a drink: The Blue Blooded Russian</h5>');
  scene.img('images/locations/shared/brothel/whisper.jpg');
  scene.text('"Oh I see. Come with me please." he leads you to the lobby, looking for the Errand Boy. He finds him leaning on a wall near the elevator.');
  scene.text('"This young miss is here for the special drink. The Blue Blooded Russian."');
  scene.text('The boy just nods and, saying not a word, leads you to the elevator. "Please look the other way, I now have to enter the combination."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around and don\'t look', goto: ['brothel', 'elevator'] },
  ]);
  scene.build();
}

function enterElevator(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Elevator</h3>');
  scene.img('images/locations/shared/brothel/hotelelevator.jpg');
  scene.text('You arrive to a level which you can just guess is underground, beneath the Hotel. Looking at the surroundings it probably was an underground shelter during the Cold War.');
  scene.text('"Go through the hall to the reception, they will give you instructions." the boy says.');
  scene.text('Leaving the elevator you faintly hear him murmuring "Have fun, slut". But maybe it\'s just your imagination…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to reception', goto: ['brothel', 'reception'] },
  ]);
  scene.build();
}

function enterReception(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'reception');
  scene.text('<h3>Brothel Reception</h3>');
  scene.img('images/locations/shared/brothel/receptionist.jpg');
  scene.text('Behind the desk sits an older, grey haired man. "Ah, just in time. We lack several girls right now. Which section do you want to attend this time? Just choose one and go to the lobby."');
  if (((s as any).job_worked_count ?? 0)?.['highway_brothel_prostitute'] > 0) {
    scene.actions([
      { label: 'Ask to get your hard earned wage', goto: ['brothel', 'get_paid'] },
    ]);
  }
  if ((!((s as any).section_warn ?? 0))) {
    scene.actions([
      { label: 'Second section', goto: ['brothel', 'section2_warning'] },
    ]);
  } else {
    scene.actions([
      { label: 'Second section', goto: ['brothel', 'section2_lobby'] },
    ]);
  }
  if (((s as any).brothelCredit ?? 0) < -4  &&  ((s as any).pcs_health ?? 0) > 200) {
    scene.actions([
      { label: 'Ask him to let you out', goto: ['brothel_section1', 'section1_force_work'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ask him to let you out', goto: ['brothel', 'leave'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'First section', goto: ['brothel', 'section1_lobby'] },
  ]);
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'leave');
  scene.text('<h3>Brothel Reception</h3>');
  scene.img('images/locations/shared/brothel/receptionist.jpg');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: 'The Receptionist looks up from his desk and gazes upon you: ' + $func('wrap', 'pos', '"Didn''t you ...
    // TODO-QSP: 'It takes you few seconds to realize that you are naked! ' + $func('wrap', 'bimbo', '"Oops… let me g...
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.img('images/pc/body/nude.jpg');
    } else {
      scene.img('images/pc/body/nude1.jpg');
    }
    scene.actions([
      { label: 'Go back to suit up', goto: ['brothel', 'brothel_dressingroom'] },
    ]);
  } else {
    scene.text('The Receptionist pushes a hidden button, probably signaling the errand boy, because after a minute he arrives with the elevator.');
    scene.text(`"Go ${((s as any).pcs_firstname ?? 0)}, you are free to leave."`);
    ((s as any).brothel_vars ?? {})['receptionist_annoy'] = 0;
    if (((s as any).job_last_work_day ?? 0)?.['highway_brothel_prostitute'] < ((s as any).daystart ?? 0)) {
      (s as any).brothelCredit = ((s as any).brothelCredit ?? 0) - (1);
    }
    scene.actions([
      { label: 'Go to the elevator', goto: ['brothel', 'lobby'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetPaid(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_minutes = ((s as any).job_worked_count ?? 0)?.['highway_brothel_prostitute'];
  (s as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'highway_brothel_prostitute');
  qspCall(s, 'stat', '');
  scene.text('<h3>Brothel Reception</h3>');
  scene.text('The Receptionist checks something in his book. Probably counting the time you spent working.');
  // TODO-QSP: 'He looks up, smiles at you and says ' + $func('wrap', 'pos', '"So, <<$pcs_firstname>>, you have who...
  scene.text('He hands you the money.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him and leave', goto: ['brothel', 'reception'] },
  ]);
  scene.build();
}

function enterSection1Lobby(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'section1_lobby');
  scene.text('<h3>Brothel Section 1 Lobby</h3>');
  scene.img('images/locations/shared/brothel/lobby.jpg');
  scene.text('The section 1 lobby. A spacy hall-like room, leading to several smaller rooms.');
  scene.text('A comfortable couch is in the middle of the lobby. Next to it are several cages sized just for a smaller person.');
  scene.text('One of the doors also leads to a <a href="exec:gt \'brothel\', \'brothel_dressingroom\'">room</a> made for the girls. ');
  if (((s as any).pcs_sweat ?? 0) >= 40) {
    // TODO-QSP: $temp_text[] = '- have a shower.'
  }
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).cheatVars ?? 0)?.['enema'] === 1) {
    // TODO-QSP: $temp_text[] = '- get an enema.'
  }
  if ((((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0  ||  ((s as any).cumloc ?? 0)[8] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[17] > 0)) {
    // TODO-QSP: $temp_text[] = '- wash yourself.'
  }
  if (((s as any).cumloc ?? 0)[11] > 0) {
    // TODO-QSP: $temp_text[] = '- wash your face'
  }
  if ((((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3)) {
    // TODO-QSP: $temp_text[] = '- shave your pubes and legs.'
  }
  if (((s as any).pcs_hairbsh ?? 0) !== 1) {
    // TODO-QSP: $temp_text[] = '- brush your hair.'
  }
  if (((s as any).pcs_makeup ?? 0) < 3) {
    // TODO-QSP: $temp_text[] = '- put on some makeup.'
  }
  if (((s as any).pcs_lipbalm ?? 0) < 1) {
    // TODO-QSP: $temp_text[] = '- apply some lipbalm.'
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    // TODO-QSP: $temp_text[] = '- strip off your clothes.'
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    // TODO-QSP: $temp_text[] = '- remove your panties.'
  }
  if (Object.keys((s as any).temp_text ?? {}).length === 0) {
    scene.actions([
      { label: 'Get in a cage', goto: ['brothel_section1', 'section1_cage'] },
    ]);
  } else {
    scene.text('To be able to get working, you need to:');
    (s as any).temp_i = 0;
    // TODO-QSP: :lobby1_loop
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < Object.keys((s as any).temp_text ?? {}).length) {
      // TODO-QSP: jump 'lobby1_loop'
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the girl\'s room', goto: ['brothel', 'brothel_dressingroom'] },
    { label: 'Go to the reception', goto: ['brothel', 'reception'] },
  ]);
  scene.build();
}

function enterBrothelDressingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'brothel_dressingroom');
  qspCall(s, 'stat', '');
  scene.text('<h3>Girl room</h3>');
  scene.img('images/locations/shared/brothel/brothelroom.jpg');
  scene.text('A room made for the working girls, like yourself.');
  scene.text('It is equipped with a shower, almost on every wall hangs a large <a href="exec:gt \'mirror\', \'start\'">mirror</a>. There is a water cooler beside the door, and some light snacks on the table, in case the girls get hungry or thirsty between sessions.');
  // TODO-QSP: *p 'From a box beneath a table you can take some '
  // TODO-QSP: *p iif(mc_inventory['cosmetics'] < 2, '<a href="exec: mc_inventory[''cosmetics''] += 5 & gt ''brothe...
  // TODO-QSP: *p ' (you have '+mc_inventory['cosmetics']+'), '
  // TODO-QSP: *p iif(mc_inventory['shampoo'] < 1, '<a href="exec: mc_inventory[''shampoo''] += 5 & gt ''brothel'',...
  // TODO-QSP: *p ' (you have '+mc_inventory['shampoo']+'), '
  // TODO-QSP: *p iif(mc_inventory['lipbalm'] < 1, '<a href="exec: mc_inventory[''lipbalm''] += 5 & gt ''brothel'',...
  // TODO-QSP: *p ' (you have '+mc_inventory['lipbalm'] + '), or '
  // TODO-QSP: *p iif(mc_inventory['razor'] < 3, '<a href="exec: mc_inventory[''razor''] += 5 & gt ''brothel'', $lo...
  // TODO-QSP: *p 'For obvious reasons there is also a box with an '
  // TODO-QSP: *p iif(mc_inventory['enema_kit'] < 1, '<a href="exec: mc_inventory[''enema_kit''] += 1 & gt ''brothe...
  // TODO-QSP: *p '. A box with some '
  // TODO-QSP: *p iif(mc_inventory['painkillers'] < 1 and brothel_vars['painkillers_day'] < daystart, '<a href="exe...
  // TODO-QSP: *p ' (you have '+mc_inventory['painkillers']+') is there, in case someone needs pain relief.'
  scene.text('-------------------------------------------------------------------------------------');
  scene.text(' 1) You are the Slave.');
  scene.text(' 2) The Client is the Master and can do any practice with the Slave, except specifically named practices in point 3.');
  scene.text(' 3) The Slave will not be injured in such way that requires hospitalisation or leaves a lasting injury, unless the Slave agrees to such a practice voluntarily.');
  scene.text(' 4) Each session is for safety purposes recorded by a camera. The record is ownership of the Organization.');
  scene.text(' 5) The Master can hide his/her identity by wearing a mask.');
  // TODO-QSP: dynamic text:  6) The Slave earns a pay of <<$func('money', 'string_profit', job_pay_rate_def[...
  scene.text(` 6) The Slave earns a pay of ${qspFunc(s, 'money', 'string_profit', ((s as any).job_pay_rate_def ?? 0)?.['highway_brothel_prostitute'])} for every hour of a session.`);
  scene.text('To begin your work, clean yourself, put on at least vibrant makeup, lip balm, brush your hair and strip of all clothes, then go to the lobby and lock yourself in a cage.');
  scene.text('-------------------------------------------------------------------------------------');
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
    scene.actions([
      { label: 'Have a shower', handler: (st: GameState) => {
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<h3>Girl room</h3>');
    scene.text('<h5>Shower</h5>');
    scene.img('images/locations/shared/brothel/brothelshower.jpg');
    scene.text('');
    scene.text('After taking off all of your clothes, you gather up your towel, washcloth and soap, then head to the shower. You wash yourself thoroughly to be as clean as possible to potential clients.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(s, 'din_van', 'dryOff');
    if (((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
      qspCall(s, 'din_van', 'brit');
    }
  } },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to grab some more from the box before you can wash yourself.');
  }
  qspCall(s, 'din_van', 'prvt_pee');
  qspCall(s, 'din_van', 'toymanage');
  qspCall(s, 'din_van', 'enema');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  if (((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
    qspCall(s, 'din_van', 'brit');
  }
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0  &&  ((s as any).pain ?? 0)?.['total'] > 0) {
    // TODO-QSP: act $func('drugs', 'painkiller_act_str'):
    qspCall(s, 'drugs', 'painkiller');
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    scene.actions([{ label: 'Continue', goto: ['brothel', 'brothel_dressingroom'] }]);
  }
  // TODO-QSP: end
  if (((s as any).sect ?? 0) === 'section2') {
    scene.actions([
      { label: 'Go back to lobby', goto: ['brothel', 'section2_lobby'] },
    ]);
  } else {
    if (((s as any).sect ?? 0) === 'reception') {
      scene.actions([
        { label: 'Go back to the reception', goto: ['brothel', 'reception'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back to lobby', goto: ['brothel', 'section1_lobby'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a snack (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'snack');
  } },
    { label: 'Have a glass of water (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water');
  } },
    { label: 'Change your clothes', goto: ['wardrobe', 'start'] },
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
  ]);
  scene.build();
}

function enterSection2Warning(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/brothel/receptionist.jpg');
  (s as any).section_warn = 1;
  // TODO-QSP: 'As you walk toward the second Section, the receptionist suddenly speaks up: ' + $func('wrap', 'pos'...
  // TODO-QSP: 'You stop, looking at him and shake your head. ' + $func('wrap', 'bimbo', '"No, so far not. Anything...
  scene.text('"Yes, clients in there are usually very rich and have their own ideas of fun. So, if you want to get paid well, do what they order you to do. That also means you are on your own if anything… problematic happens to you. We have our rules, but with those clients, management is much more accommodating."');
  scene.text('Slowly nodding to yourself, you give him a quick thanks, and resume your way towards the Section.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Proceed to the second section', goto: ['brothel', 'section2_lobby'] },
  ]);
  scene.build();
}

function enterSection2Lobby(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'brothel', 'section2_lobby');
  scene.text('<h3>Brothel Section 2 Lobby</h3>');
  scene.img('images/locations/shared/brothel/lobby.jpg');
  scene.text('The section 2 lobby. This lobby is quite small, offering only enough room for a couch and a small table.');
  scene.text('Only a single room is attached to the lobby by a wide door.Judging by the state of the floor, a lot of heavy equipment is regularly dragged in and out.');
  scene.text('One of the doors also leads to a <a href="exec:gt \'brothel\', \'brothel_dressingroom\'">room</a> made for the girls. ');
  if (((s as any).pcs_sweat ?? 0) >= 40) {
    // TODO-QSP: $temp_text[] = '- have a shower.'
  }
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).cheatVars ?? 0)?.['enema'] === 1) {
    // TODO-QSP: $temp_text[] = '- get an enema.'
  }
  if ((((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0  ||  ((s as any).cumloc ?? 0)[8] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[17] > 0)) {
    // TODO-QSP: $temp_text[] = '- wash yourself.'
  }
  if (((s as any).cumloc ?? 0)[11] > 0) {
    // TODO-QSP: $temp_text[] = '- wash your face'
  }
  if ((((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3)) {
    // TODO-QSP: $temp_text[] = '- shave your pubes and legs.'
  }
  if (((s as any).pcs_hairbsh ?? 0) !== 1) {
    // TODO-QSP: $temp_text[] = '- brush your hair.'
  }
  if (((s as any).pcs_makeup ?? 0) < 3) {
    // TODO-QSP: $temp_text[] = '- put on some makeup.'
  }
  if (((s as any).pcs_lipbalm ?? 0) < 1) {
    // TODO-QSP: $temp_text[] = '- apply some lipbalm.'
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    // TODO-QSP: $temp_text[] = '- remove your panties.'
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    // TODO-QSP: $temp_text[] = '- strip off your clothes.'
  }
  if (((s as any).alko ?? 0) > 3) {
    // TODO-QSP: $temp_text[] = '- be not drunk'
  }
  if (((s as any).drugVars ?? 0)?.['heroin_high'] > 0  ||  ((s as any).drugVars ?? 0)?.['weed_high'] > 0) {
    // TODO-QSP: $temp_text[] = '- be sober'
  }
  if (Object.keys((s as any).temp_text ?? {}).length === 0) {
    scene.text('Nothing seems to be going on here (unfinished content)');
  } else {
    scene.text('To be able to get working, you need to:');
    (s as any).temp_i = 0;
    // TODO-QSP: :lobby2_loop
    (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
    if (((s as any).temp_i ?? 0) < Object.keys((s as any).temp_text ?? {}).length) {
      // TODO-QSP: jump 'lobby2_loop'
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the girl\'s room', goto: ['brothel', 'brothel_dressingroom'] },
    { label: 'Go to the reception', goto: ['brothel', 'reception'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lobby':
      enterLobby(s, scene);
      break;
    case 'toilet':
      enterToilet(s, scene);
      break;
    case 'bar':
      enterBar(s, scene);
      break;
    case 'sit':
      enterSit(s, scene);
      break;
    case 'order':
      enterOrder(s, scene);
      break;
    case 'abduction_start':
      enterAbductionStart(s, scene);
      break;
    case 'abducted':
      enterAbducted(s, scene);
      break;
    case 'abducted1':
      enterAbducted1(s, scene);
      break;
    case 'abducted2':
      enterAbducted2(s, scene);
      break;
    case 'abducted3':
      enterAbducted3(s, scene);
      break;
    case 'abducted4':
      enterAbducted4(s, scene);
      break;
    case 'abducted5':
      enterAbducted5(s, scene);
      break;
    case 'abducted6':
      enterAbducted6(s, scene);
      break;
    case 'abducted7':
      enterAbducted7(s, scene);
      break;
    case 'abducted_like':
      enterAbductedLike(s, scene);
      break;
    case 'abducted_hate':
      enterAbductedHate(s, scene);
      break;
    case 'password':
      enterPassword(s, scene);
      break;
    case 'elevator':
      enterElevator(s, scene);
      break;
    case 'reception':
      enterReception(s, scene);
      break;
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'get_paid':
      enterGetPaid(s, scene);
      break;
    case 'section1_lobby':
      enterSection1Lobby(s, scene);
      break;
    case 'brothel_dressingroom':
      enterBrothelDressingroom(s, scene);
      break;
    case 'section2_warning':
      enterSection2Warning(s, scene);
      break;
    case 'section2_lobby':
      enterSection2Lobby(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brothel: LocationDef = {
  name: 'brothel',
  title: 'You are drunk and the barman is obviously enjoying the presence of a nice girl in such a state, often flirting with you and enjoying your looks.',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
