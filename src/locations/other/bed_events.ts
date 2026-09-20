import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if ((((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 3)  &&  (Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).houserab ?? 0) === 1  &&  ((s as any).houserabday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pcs_sleep ?? 0) < 50  &&  ((s as any).loc ?? 0) === 'nichBedroomServant') {
      // TODO-QSP: $sleep_events[] = 'gs ''bed_events'', ''rab'' '
    }
    if ((((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 3)  &&  (Math.floor(Math.random() * 201) + 0) === 0  &&  ((String('bedr;bedr2x;korr;korr2x').indexOf(String(((s as any).loc ?? 0)))) + 1) > 0  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      // TODO-QSP: $sleep_events[] = 'gs ''bed_events'', ''vor'' '
    }
    qspGoto(s, 'bed_events', 'mod_sleepevents');
  }
  qspGoto(s, 'bed_events', 'continue');
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if ((((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 3)  &&  (Math.floor(Math.random() * 51) + 0) === 0  &&  ((s as any).houserab ?? 0) === 1  &&  ((s as any).houserabday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).pcs_sleep ?? 0) < 50  &&  ((s as any).loc ?? 0) === 'nichBedroomServant') {
      // TODO-QSP: $sleep_events[] = 'gs ''bed_events'', ''rab'' '
    }
    if ((((s as any).hour ?? 0) > 22  ||  ((s as any).hour ?? 0) < 3)  &&  (Math.floor(Math.random() * 201) + 0) === 0  &&  ((String('bedr;bedr2x;korr;korr2x').indexOf(String(((s as any).loc ?? 0)))) + 1) > 0  &&  ((s as any).husID ?? 0) === ''  &&  ((s as any).wifID ?? 0) === '') {
      // TODO-QSP: $sleep_events[] = 'gs ''bed_events'', ''vor'' '
    }
    qspGoto(s, 'bed_events', 'mod_sleepevents');
  }
  qspGoto(s, 'bed_events', 'continue');
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'bed_events', 'mod_sleepevents');
  qspGoto(s, 'bed_events', 'event_handler');
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      qspGoto(s, 'bed_events', 'event_handler2', 'priority');
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        qspGoto(s, 'bed_events', 'event_handler2');
      }
    }
  }
  qspGoto(s, 'bed_events', 'continue');
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (Number((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events_priority')-1);
    (s as any).temp_sleep_event_chosen = ((s as any).sleep_events_priority ?? 0)?.[String((s as any).temp_slev_id ?? 0)];
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events')-1);
    (s as any).temp_sleep_event_chosen = ((s as any).sleep_events ?? 0)?.[String((s as any).temp_slev_id ?? 0)];
  }
  qspGoto(s, 'bed_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'bed_events', 'event_handler');
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  (s as any).inSleep = 0;
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  qspGoto(s, 'bed2', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterRab(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'bed_events', 'rab2');
  // TODO-QSP: end
  scene.build();
}

function enterVor(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'bed_events', 'vor2');
  // TODO-QSP: end
  scene.build();
}

function enterRab2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).houserabday = ((s as any).daystart ?? 0);
  scene.img('images/characters/city/nicholas/sex/r0.jpg');
  scene.text('Once you get into bed, your mistress comes into the room. "What, my bitch is going to sleep?" she snaps from the doorway.');
  scene.text('"Yes…" you meekly reply.');
  scene.text('"Yes, who?" she continues.');
  scene.text('"Yes, mistress…" you reply and sit on the bed. She\'s drunk and barely able to stand on her feet as she drinks wine from the bottle, spilling quite a bit of it on the floor.');
  scene.text('"That\'s better, but today you have to be punished." She lifts up her skirt and out pops the strap-on. "Suck it," she commands.');
  qspCall(s, 'willpower', 'sex', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    (st as any).houserab = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/nicholas/sex/r4.jpg');
    scene.text('"No!" you reply.');
    scene.text('"You will suck now or things will get very bad for you!" she asserts.');
    scene.text('"No!" you answer again.');
    scene.text('"All right, you asked for it!" she screams and swings a fist, trying to hit you. You easily dodge the punch and kick her in the stomach.');
    scene.text('"Bitch!" she moans while doubling over. You\'ve suffered enough and jump out of bed, grabbing her head in your hands and kneeing her in the face.');
    scene.text('She flies into the corner, but you don\'t calm down. Remembering the taste of her dirty boots and sneakers, you storm up to her and start pushing a sneaker into her mouth.');
    scene.text('When you can\'t shove it in any further, you throw the sneaker aside, grab her hair and throw her onto the bed.');
    scene.text('You jump on the bed, straddle her face and push your pussy against her mouth. "Eat me, bitch!" you yell as she tries to push you away.');
    scene.text('You have her head held tight between your thighs, however, and continue yelling. You soon feel her tongue on your pussy and start moving your hips, grinding on her face and increasing the pace.');
    scene.text('She doesn\'t resist and tries to stick it in your pussy. You start enjoying her submissive nature and get more excited thinking about your dominant actions.');
    scene.text('You\'ve even thought about something to do with her strap-on and enjoying this thought when you orgasm. You wipe your crotch in her face and finish, leaving her whole face covered in your juices.');
    scene.text('She quietly gets out of bed, straightens her clothes and leaves the room. "Animal." You should be careful; who knows what she will do to you in return.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 20, 'dom', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Breathe', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck it', handler: (st: GameState) => {
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
    }
    if (((st as any).pcs_makeup ?? 0) !== 1  &&  (!((st as any).cosmetic_tattoo ?? 0))) {
      (st as any).pcs_makeup = 0;
    }
    scene.img('images/characters/city/nicholas/sex/r1.jpg');
    scene.text('You take the strap-on in your mouth and start sucking her off without much enthusiasm. Mistress, though she\'s drunk, notices that you\'re not trying and starts to thrust along with your movements, driving it deeper into your mouth and causing you to gag.');
    scene.text('"Oh, damn stubborn bitch! Lie down on the bed. Quickly." She forcefully pushes you on the bed.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    scene.img('images/characters/city/nicholas/sex/r2.jpg');
    scene.text('You lay down on the bed and she climbs on top of you and kneels over your face. She makes you open your mouth and forcefully shoves the strap-on in. You try to pull away, but her hands hold your head firmly. She continues to violate your mouth, hardly allowing you to catch a breath of air while she thrust it deeper and deeper, eventually sliding it down your throat, cutting off your breath completely. When you start to lose consciousness, she finally takes it out, allowing you to roll onto your side, wheezing and sniffling.');
    scene.text('"And now for the punishment. Get up, bitch!" she demands.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'lesbian', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/characters/city/nicholas/sex/r3.jpg');
    scene.text('You get up on all fours on the bed. "You\'re wet," she says and wipes your saliva on your ass with the strap-on, "You need to be punished, not pleasured. Spread your ass."');
    scene.text('You reach back with your hands and try to relax your ass, but you don\'t succeed before the pain pierces your body as she forces the strap-on into your anus, not giving your ass the time to get used to it before she starts fucking you at a crazy pace. You grab the blankets with your hands and teeth as tears pour from your eyes and you whine, but she still continues. Growing tired, she lowers the pace. "Well, does it hurt?" she asks.');
    scene.text('"Yes mistress, it hurts a lot!" you gasp through your tears.');
    scene.text('"Well, let\'s see how this feels," she says and starts pouring wine from her bottle onto the strap-on and your ass.');
    scene.text('"Thank you, mistress!" you say while she starts gaining momentum again. The wine starts to dry on your skin and hurts so much that you start screaming from the pain. After what feels like an eternity, she tires out, removes the strap-on and leaves the room without saying a word. You collapse on the bed and fall asleep.');
    qspCall(st, 'arousal', 'anal_strap', 5, 'sub', 'lesbian', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Sleep', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
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

function enterVor2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).rex ?? 0)?.['owned'] === 0) {
    scene.text('You\'re lying in bed when you hear sounds from the hallway. You decide to get up and as you get to the door, you see two masked men.');
    scene.actions([
      { label: 'Scream', goto: ['bed_events', 'vor3'] },
    ]);
  } else {
    if ((!((s as any).dog_bravery ?? 0))) {
      (s as any).dog_bravery = (Math.floor(Math.random() * 100) + 1);
    }
    if (((s as any).dog_bravery ?? 0) < 50) {
      // TODO-QSP: dynamic text: You''re lying in bed when you hear sounds from the hallway. You decide to get up...
      scene.text(`You're lying in bed when you hear sounds from the hallway. You decide to get up and as you get to the door you see two masked men. ${((s as any).rex ?? 0)?.['name'] ?? ''} is shivering in the corner.`);
      scene.actions([
        { label: 'Scream', goto: ['bed_events', 'vor3'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      // TODO-QSP: dynamic text: You''re lying in bed when you suddenly hear a commotion out in the hallway. You ...
      scene.text(`You're lying in bed when you suddenly hear a commotion out in the hallway. You get up to check it out and as you arrive, you see ${((s as any).rex ?? 0)?.['name'] ?? ''} chase two masked men outside. You can hear loud swearing as they run down the stairs.`);
      scene.text('You call your dog\'s name and he comes back from the stairway looking calm.');
      scene.actions([
        { label: 'Hug him', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    // TODO-QSP: dynamic text: You kneel down and hug <<$rex[''name'']>>, your heart pounding at the thought of...
    scene.text(`You kneel down and hug ${((st as any).rex ?? 0)?.['name'] ?? ''}, your heart pounding at the thought of what could have happened if he wasn't here.`);
  } },
        { label: 'Check the lock', handler: (st: GameState) => {
    scene.text('You check the lock on the door and it appears to be intact. You\'re not sure if you forgot to lock the door when you came in or if the lock was picked. Maybe you should have a second one installed…');
    scene.actions([
      { label: 'Lock the door', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExit(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'korr', '');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVor3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  scene.img('images/locations/city/residential/apartment/sex/g0.jpg');
  scene.text('You don\'t even have time to open your mouth to scream when a knife is at your throat. "Scream and I\'ll cut you, bitch!" one of them croaks.');
  scene.text('They tie your hands and one goes to search your apartment while the second guards you. He sits down and studies you, then starts running his knife across your body.');
  scene.text('"You scared?" he asks. Thinking that it\'s better to keep silent, you say nothing and look at the floor. "So you <i>are</i> scared…"');
  scene.text('He starts feeling you up and you try to pull away, but the knife is back at your throat. "Sit still or the knife might slip. Fatally…" he croaks and continues feeling you up.');
  scene.text('The other intruder finally returns. "Time we got out of here," he says. "Unless we give this juicy little morsel a treat," he adds as he sits next to you.');
  if (((s as any).pcs_apprnc ?? 0) < 120) {
    scene.text('"Gag her," one of them orders and the second one doesn\'t argue as he takes some of your clothes and stuffs them in your mouth. "If you try to leave in the next half hour, you\'re dead," he says and they leave.');
    scene.text('You don\'t wait half an hour before you start trying to break free. Fortunately, they really didn\'t know how to tie a knot and you\'re soon free.');
    scene.actions([
      { label: 'Assess the damage', goto: ['bed_events', 'vorend'] },
    ]);
  } else {
    (s as any).guy = ((s as any).guy ?? 0) + (2);
    ((s as any).stat = (s as any).stat ?? {})['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
    scene.text('"Hey, sweet cheeks. Something tells me you like to fuck," the first one says.');
    scene.actions([
      { label: 'Plead', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Rapist 1', (Math.floor(Math.random() * 23) + 18), 0, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'npcgeneratec', '', 0, 'Rapist 2', (Math.floor(Math.random() * 23) + 18), 0, 1);
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0), 1);
    scene.img('images/locations/city/residential/apartment/sex/g1.jpg');
    scene.text('You\'re struck with fear. "Kneel down and open your mouth, whore. If we so much as feel a tooth, I\'ll cut your throat from ear to ear!" the second one says while pulling his cock out.');
    scene.text('You start pleading with them, but they just push you to your knees and he jabs his dick against your lips. You reluctantly open your mouth and his cock slides into your mouth.');
    scene.text('His hands clench your head and he starts fucking your face before they start taking turns with you.');
    scene.text('"Get her on all fours," one of them eventually commands.');
    // TODO-QSP: gs 'arousal', 'bj', 15, $npcID[0], 'rough', 'sub', 'group', 'bound'
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/apartment/sex/g2.jpg');
    scene.text('You stand up and bend over as one of them stands behind you and stuffs his dick into your pussy.');
    scene.text('"Open your mouth!" the second guy growls and he inserts his dick into your mouth. They proceed to rape you from both sides before they untie your hands and get off you. "Let\'s see what she can do with her hands free," one of them says.');
    (st as any).orgasm_or = 'yes';
    // TODO-QSP: gs 'arousal', 'bj', 15, $npcID[0], 'rough', 'sub', 'group', 'bound'
    // TODO-QSP: gs 'arousal', 'vaginal', -15, $npcID[1], 'rough', 'sub', 'group', 'bound'
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).picrand = 38;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExit(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'sexdvoe', 'var');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVorend(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).remsitr ?? 0))) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/sitr...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/apartment/sitr.jpg"></center>`);
  }
  if (((s as any).remsitr ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/city/residential/apartment/sitr...
    scene.text(`<center><img ${((s as any).set_imgh || '')} src="images/locations/city/residential/apartment/sitr2.jpg"></center>`);
  }
  scene.text('Relieved that it\'s over, you check your apartment to see what\'s missing.');
  if (((s as any).stolmoney ?? 0) > 0) {
    // TODO-QSP: dynamic text: They took <<$func(''money'', ''format'', stolmoney)>> from your living room tabl...
    scene.text(`They took ${qspFunc(s, 'money', 'format', ((s as any).stolmoney || ''))} from your living room table.`);
    (s as any).stolmoney = 0;
  }
  if (((s as any).money ?? 0) > 0) {
    // TODO-QSP: dynamic text: They took the <<$func(''money'', ''format'', money)>> that you had on you.
    scene.text(`They took the ${qspFunc(s, 'money', 'format', ((s as any).money || ''))} that you had on you.`);
    qspCall(s, 'money', 'set', 0, 'cash');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    scene.text('They took your computer.');
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tech_computer'] = 0;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
  ]);
  scene.build();
}

function enterMast(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 30) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  }
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  if (((s as any).husID ?? 0) === ''  ||  ((String('bedr;bedr2x;korr;korr2x').indexOf(String(((s as any).loc ?? 0)))) + 1) <= 0  ||  ((s as any).spouseVars ?? 0)?.['drink'] === 10) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'selfplay', 'start');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 0) {
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 16) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterExit(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspGoto(s, 'selfplay', 'start');
      } else {
        scene.text('You feel the need for something inside you and think that your husband would be a better option.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 16) {
        qspGoto(s, 'bed_events', 'mast1');
      } else {
        qspGoto(s, 'bed_events', 'mast2');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMast1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'D1');
  scene.img('images/shared/sex/mast/mastr.mp4');
  scene.text('Unable to control yourself anymore, you immediately reach for your dildo so you can finally take care of your lustful desires. You waste no time and attach the suction base of the dildo onto the floor before slowly lowering yourself.');
  scene.text('Shivers run down your spine as you feel the thick head spreading your pussy lips and soon the whole length starts to slide deep inside your hole. A throaty moan overwhelms the room when it finally bottoms out inside you, sending you to the heavens and back.');
  scene.text('After shifting your legs and getting more comfortable, you start to rock your hips and bounce on it, moaning louder and louder as you keep increasing the power and pace of your thrusts. You\'re soon hammering your ass against the cold floor time and it takes you just a few minutes to reach orgasm, your toes curling tightly as a wonderful feeling run through your entire body.');
  scene.text('You\'re soon twitching on the dildo and juices drip down its length, soaking the floor beneath you. You take a few deep breaths and a smile grows along your face. That was just what you needed!');
  (s as any).orgasm_or = 'custom';
  qspCall(s, 'arousal', 'vaginal_dildo', 10, 'masturbate', 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Breathe', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
  ]);
  scene.build();
}

function enterMast2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', '', ((s as any).husID ?? 0));
  scene.img('images/characters/city/husband/sex/m21.jpg');
  scene.text('You bend over and start fucking your pussy with your dildo.');
  qspCall(s, 'arousal', 'vaginal_dildo', 15, 'D1');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 7) {
    // TODO-QSP: dynamic text: <<$boydesc>> looks at you, a little dumbfounded.
    scene.text(`${((s as any).boydesc || '')} looks at you, a little dumbfounded.`);
  } else {
    // TODO-QSP: dynamic text: Once you get into it, <<$boydesc>> enters the room.
    scene.text(`Once you get into it, ${((s as any).boydesc || '')} enters the room.`);
  }
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
    scene.text('"What are you doing?" he asks.');
    scene.text('"I\'m sorry dear, but I really need it, and you\'ve been busy," you reply without stopping.');
    scene.text('"How often do you do this?" he asks.');
    scene.text('"Quite often, sometimes in my ass. you want to see?" you ask.');
    if (((s as any).npc_pervert ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).boy ?? 0), (-1));
      scene.text('"I\'ll wait outside the door until you\'re done," he says and leaves. You continue to satisfy yourself rapidly, and soon finish.');
      (s as any).orgasm_or = 'yes';
      qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
      ]);
    } else {
      scene.text('"Oh. I don\'t know…" he stammers.');
      scene.text('"Come on," you encourage him.');
      scene.actions([
        { label: 'Show him', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m22.jpg');
    // TODO-QSP: dynamic text: You pull the dildo out of your pussy and, winking at your husband, insert it int...
    scene.text(`You pull the dildo out of your pussy and, winking at your husband, insert it into your ass. ${((st as any).boydesc || '')} watches closely as the dildo disappears into your ass.`);
    scene.text('You see how his pants swell. "Anything else you want, dear?" you ask while smiling.');
    scene.text('"Can I join?" he asks, a little embarrassed.');
    qspCall(st, 'arousal', 'anal_dildo', 5, 'masturbate');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Invite', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m23.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> gets his dick out and starts masturbating. It''s not what you expec...
    scene.text(`${((st as any).boydesc || '')} gets his dick out and starts masturbating. It's not what you expected and you feel a little sad that he isn't fucking you as you start to masturbate.`);
    scene.text('You watch your husband masturbate as he watches you, his face covered in pleasure, before you scream and fall on the table, having experienced an orgasm.');
    // TODO-QSP: dynamic text: <<$boydesc>> is still masturbating, looking at you stretched out on the table be...
    scene.text(`${((st as any).boydesc || '')} is still masturbating, looking at you stretched out on the table before you take the dildo out of your ass and start lick it while looking into his eyes.`);
    scene.text('The spectacle has him immediately cum all over the floor before you walk over to him and kiss him on the lips. He passionately kisses you back.');
    qspCall(st, 'arousal', 'anal_dildo', 5, 'masturbate');
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
      scene.text('"Are you trying to tell me that I\'m not enough to satisfy you?" He asks.');
      scene.text('"I\'m sorry dear, but I really need this, and you\'ve been busy," you reply without stopping.');
      scene.text('"Well then, show me everything now that you know I\'ll watch," he says.');
      scene.text('"Want to see me do it in the ass too?" you offer.');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).boy ?? 0), 1);
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['pervert_add'] = ((s as any).spouseVars['pervert_add'] ?? 0) + (1);
        scene.text('"No, I think this is enough," he says as he sits on a chair and starts watching you. You continue to satisfy yourself rapidly and soon finish in front of him.');
        (s as any).orgasm_or = 'yes';
        qspCall(s, 'arousal', 'clit_finger', 5, 'masturbate');
        qspCall(s, 'arousal', 'end');
        // TODO-QSP: dynamic text: <<$boydesc>> stands up and playfully claps. "Bravo! Encore?" he laughs.
        scene.text(`${((s as any).boydesc || '')} stands up and playfully claps. "Bravo! Encore?" he laughs.`);
        // TODO-QSP: dynamic text: "Anything for such a lovely audience, but first an intermission," you laugh and ...
        scene.text(`"Anything for such a lovely audience, but first an intermission," you laugh and ${((s as any).boydesc || '')} helps you down from the table.`);
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'bed_events', 'event_end');
  } },
        ]);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).boy ?? 0), 1);
        scene.text('"Well then, I think you better show me," he says.');
        scene.text('"As you wish," you reply.');
        scene.actions([
          { label: 'Show', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m22.jpg');
    // TODO-QSP: dynamic text: You pull the dildo out of your pussy and, winking at your husband, insert it int...
    scene.text(`You pull the dildo out of your pussy and, winking at your husband, insert it into your ass. ${((st as any).boydesc || '')} watches closely as you slide the dildo in and out of your ass.`);
    scene.text('You see how his pants swell. "Anything else you want, dear?" you ask while smiling.');
    scene.text('"I don\'t just want something, I\'ll do something!" he replies, unbuttoning his pants and brings his cock to your mouth.');
    qspCall(st, 'arousal', 'anal_dildo', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck him', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m24.jpg');
    scene.text('You take his flaccid penis in your mouth and start sucking while continuing to drive the dildo into your ass.');
    // TODO-QSP: dynamic text: When his cock has finally hardened, <<$boydesc>> stops you. "Now I''ll take this...
    scene.text(`When his cock has finally hardened, ${((st as any).boydesc || '')} stops you. "Now I'll take this hole."`);
    qspCall(st, 'arousal', 'clit_finger', 5);
    qspCall(st, 'arousal', 'bj', (-5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get fucked in the ass', handler: (st: GameState) => {
    (st as any).picrand = 89;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExit(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'sex', 'anal');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"Itchy hole?" he asks.');
      scene.text('"I\'m sorry dear, but I really need it, and you\'ve been busy," you reply without stopping.');
      if (((s as any).npc_pervert ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).boy ?? 0), 1);
        ((s as any).spouseVars = (s as any).spouseVars ?? {})['pervert_add'] = ((s as any).spouseVars['pervert_add'] ?? 0) + (1);
        scene.text('"You should have said something. Now open your mouth," he says while pulling out his cock and forcefully pushing it into your mouth.');
        scene.text('He holds you by the hair and fucks your mouth, telling you not to stop masturbating before he tires of your mouth. "Enough of this rubber shit! I\'m going to fuck you."');
        qspCall(s, 'arousal', 'vaginal_dildo', 10);
        qspCall(s, 'arousal', 'bj', (-10));
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Spread your legs ', handler: (st: GameState) => {
    (st as any).picrand = 89;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExit(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'sex', 'vag');
  } },
        ]);
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).boy ?? 0), 1);
        scene.text('"You\'re going to insert this stupid toy into your pussy, ass and mouth. You\'ll pulverize them for as long as I like," he says while sitting down to watch.');
        scene.text('You quickly and submissively do as you\'re told.');
        qspCall(s, 'arousal', 'vaginal_dildo', 5);
        qspCall(s, 'arousal', 'anal_dildo', (-5));
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Offer your mouth', handler: (st: GameState) => {
    scene.img('images/characters/city/husband/sex/m24.jpg');
    // TODO-QSP: dynamic text: Still using the dildo on your pussy and ass, you offer <<$boydesc>> your mouth. ...
    scene.text(`Still using the dildo on your pussy and ass, you offer ${((st as any).boydesc || '')} your mouth. He gets up and walks over to you.`);
    scene.text('You take his flaccid penis and start sucking until his cock is finally hard and he stops you. "Now I\'ll fuck your ass."');
    qspCall(st, 'arousal', 'vaginal_dildo', 5);
    qspCall(st, 'arousal', 'anal_dildo', 5);
    qspCall(st, 'arousal', 'bj', (-10));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Offer your ass', handler: (st: GameState) => {
    (st as any).picrand = 89;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterExit(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'sex', 'anal');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mod_sleepevents':
      enterModSleepevents(s, scene);
      break;
    case 'event_handler':
      enterEventHandler(s, scene);
      break;
    case 'event_handler2':
      enterEventHandler2(s, scene);
      break;
    case 'event_end':
      enterEventEnd(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'continue':
      enterContinue(s, scene);
      break;
    case 'rab':
      enterRab(s, scene);
      break;
    case 'vor':
      enterVor(s, scene);
      break;
    case 'rab2':
      enterRab2(s, scene);
      break;
    case 'vor2':
      enterVor2(s, scene);
      break;
    case 'vor3':
      enterVor3(s, scene);
      break;
    case 'vorend':
      enterVorend(s, scene);
      break;
    case 'mast':
      enterMast(s, scene);
      break;
    case 'mast1':
      enterMast1(s, scene);
      break;
    case 'mast2':
      enterMast2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bed_events: LocationDef = {
  name: 'bed_events',
  title: 'Once you get into bed, your mistress comes into the room. "W',
  region: 'other',
  enter: enter,
};
