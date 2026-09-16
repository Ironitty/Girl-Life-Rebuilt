import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStartDoor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'Peterroom', 'start_door');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Peter\'s Apartment</b></center>');
  scene.img('images/characters/city/peter/peterdoor.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspGoto(s, 'city_center', '');
  } },
    { label: 'Ring the doorbell', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).petersexday ?? 0) < 1) {
      (s as any).petersexday = ((s as any).petersexday ?? 0) + (1);
      scene.text('You ring the doorbell and wait. After a few seconds, Peter opens the door and smiles. "Come in and get changed."');
      scene.actions([
        { label: 'Enter the apartment', goto: ['peterroom', 'start'] },
      ]);
    } else {
      scene.text('You ring the doorbell a few times, but no one answers.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspGoto(s, 'city_center', '');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).peter ?? 0) > 0) {
    (s as any).peterrand = Math.floor(Math.random() * 2) + 1;
    scene.img('images/characters/city/peter/9.jpg');
    scene.text('You get undressed and fasten your collar around your neck.');
    scene.text('"Who\'s my good bitch?" you hear Peter ask from the next room.');
    scene.actions([
      { label: 'I am, Master', handler: (st: GameState) => {
    (s as any).petersex = ((s as any).petersex ?? 0) + 1;
    if (((s as any).analPlugIn ?? 0) === 1) {
      qspGoto(s, 'peterroom', 'klap');
    }
    if (((s as any).peterrand ?? 0) < 2) {
      qspGoto(s, 'peterroom', 'd1');
    }
    if (((s as any).peterrand ?? 0) > 1) {
      qspGoto(s, 'peterroom', 'd2');
    }
  } },
    ]);
  } else {
    if (((s as any).peter ?? 0) < 1) {
      (s as any).petersexday = ((s as any).petersexday ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      scene.img('images/characters/city/peter/1.jpg');
      scene.text('As you start to undress, Peter walks into the room with a multi-tailed whip in one hand and a collar in the other.');
      scene.text('He puts the collar down in front of you. It\'s a broad strip of leather with a ring at the front where a leash can be attached.');
      scene.actions([
        { label: 'Put it on', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/2.jpg');
    scene.text('You eagerly put the collar on and Peter strokes you gently on the cheek, but then suddenly pulls his hand back and slaps you.');
    scene.text('"Lustful girl! Stand up and turn around, hands behind your back!"');
    scene.text('You do as he says and feel leather cuffs being tightly fastened around your wrists.');
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('"What do we have here?" he asks as he grips the end of your butt plug and eases it out.');
    }
    scene.actions([
      { label: 'Smile', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/peter/3.jpg');
    scene.text('Peter pulls you by the collar and forces you onto your knees in front of him. "Open your mouth, bitch!" he sternly orders.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 8, 'asscheeks', 'spank');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/peter/4_1.jpg');
    scene.text('You remain where you are and refuse to move. Peter scowls with disappointment.');
    scene.text('"A disobidient bitch like you needs to be punished!" he says as he rounds the table and forces you onto your knees before pulling your ass high in the air. You squeal when he shoves a butt plug deep into your ass, but it gets worse. He reaches for his whip and starts flogging your ass. He counts the strikes aloud, ignoring your sobs as the leather tails burn across your raw, stinging ass.');
    scene.text('"Beg me to fuck you, whore!" he snarls as he whips you extra hard.');
    scene.text('"Please fuck me, Master! Fuck me like the dirty little whore I am!" you beg through your tears and you see a faint smile on his face.');
    scene.actions([
      { label: 'Continue', goto: ['peterroom', 'klap'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Please him', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/4.jpg');
    scene.text('Peter unbuttons his pants and pulls out his cock before grabbing you by the hair and shoving it into your mouth. You obediently wrap your lips around it and start sucking it, feeling it grow and strain inside your mouth.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/5.jpg');
    scene.text('After a few minutes, Peter slides his dick out of your mouth, pulls you to your feet and pushes you onto the bed. He pushes your legs up to your chest before binding your handcuffs behind them.');
    scene.text('He climbs onto the bed and thrusts his dick into your pussy before he starts fucking you hard and fast. After a few minutes, he stops and pulls out, unties you and shoves you on the floor.');
    scene.text('He walks across the room before turning back to you. "Crawl to me, bitch!"');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Crawl', goto: ['peterroom', 'klap'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        { label: 'Leave', goto: ['city_center', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKlap(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/peter/6.jpg');
  scene.text('Peter puts you on a leash and leads you into the bedroom. He pushes you onto the bed and ties your hands and feet to the headboard before fastening a ball gag into your mouth.');
  // TODO-QSP: dynamic text: "I love it when you moan <<$pcs_nickname>>, but I think you're better off gagged...
  scene.text(`"I love it when you moan ${((s as any).pcs_nickname || '')}, but I think you're better off gagged."`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'bound');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/7.jpg');
    (s as any).temp = 'Your moans are muffled by the gag as Peter bears down on you from above. "Let\'s see how well your sweet ass takes me…" he says ';
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      // TODO-QSP: $temp += ', as he pulls out your butt plug '
    }
    // TODO-QSP: $temp
    scene.text('and starts pushing his dick against your asshole. After a few seconds, the tip pops into you and you moan into the gag. You can\'t wait for him to bury himself in your ass completely. Peter sees your reaction and starts fucking your ass, penetrating deeper with each thrust until his dick is completely buried inside you. He fucks you so hard that your knees start to shake and pussy juices trickle down your leg.');
    qspCall(s, 'arousal', 'anal', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan again', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/8.jpg');
    scene.text('He continues to fuck you hard and fast, then slows the rhythm, finishing with several sharp uneven thrusts that fill your insides with a hot stream of cum.');
    qspCall(s, 'arousal', 'anal', 10, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_ass ?? 0) < 25) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    if (((s as any).pcs_horny ?? 0) >= 100) {
      (s as any).orgasm_or = 'yes';
      qspCall(s, 'arousal', 'anal', (-10), 'sub');
      (s as any).orgasm_txt = 'A pleasant sensation surges within you and an orgasm washes over you, juices spraying from your pussy as you moan loudly into the gag.';
    }
    scene.text('Your ass makes a loud squelching noise when he pulls his dick out. Peter sits on the bed, breathing heavily while you remain bound, his cum slowly leaking from your asshole.');
    scene.actions([
      { label: 'Relax', goto: ['peterroom', 'end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  scene.img('images/characters/city/peter/vanroom.jpg');
  scene.text('"You were great," he says as he smacks your ass. He then picks you up and carries you to the bathroom, where you take a bath together.');
  scene.text('He greatly enjoys "washing" you, his hands paying special attention to your breasts and pussy as you lean back and make out with him.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).peter = ((s as any).peter ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    scene.img('images/characters/city/peter/mash.jpg');
    scene.text('You relax in the bath together for a while until Peter states that he has business to attend to elsewhere. You climb out of the bath and dry off before getting dressed. Peter then grabs his keys and locks up before you walk outside together. When you reach his car, he leans in to kiss you.');
    // TODO-QSP: dynamic text: "You're a breath of fresh air, <<$pcs_nickname>>. You never fail to brighten my ...
    scene.text(`"You're a breath of fresh air, ${((s as any).pcs_nickname || '')}. You never fail to brighten my day," he says while gently stroking your cheek. "I hope I can see you again soon."`);
    scene.text('He climbs into his car and starts the engine, but just as he\'s about to drive off, he suddenly calls out to you. "Do you need a lift?"');
    if (qspFunc(s, 'homes_properties', 'has_access', 'city_house')) {
      scene.actions([
        { label: 'To your apartment', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('You nod and get into the car next to him, giving him directions to your apartment complex.');
    // TODO-QSP: dynamic text: You spend the journey talking about the sex you just had and you eventually reac...
    scene.text(`You spend the journey talking about the sex you just had and you eventually reach your apartment building. Peter leans over and gives your ass a firm squeeze as you climb out of the car. "Until next time, ${((s as any).pcs_nickname || '')}." You smile at him and close the door before he drives off.`);
    qspGoto(s, 'city_residential', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'To the city center', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('You nod and get into the car next to him. "Just into the city center is fine, thanks."');
    // TODO-QSP: dynamic text: You spend the journey talking about the sex you just had and you reach the city ...
    scene.text(`You spend the journey talking about the sex you just had and you reach the city center a few minutes later. Peter leans over and gives your ass a firm squeeze as you climb out of the car. "Until next time, ${((s as any).pcs_nickname || '')}." You smile at him and close the door before he drives off.`);
    qspGoto(s, 'city_center', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterD1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_ass ?? 0) < 25) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  scene.img('images/characters/city/peter/d1-1.jpg');
  scene.text('Peter binds your torso and hands before he lifts you up and hangs you from a hook.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck his fingers', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d1-2.jpg');
    scene.text('Peter grabs your head and shoves all of his fingers into your mouth, forcing you to suck on them.');
    scene.text('After a few seconds of you sucking and gagging on his fingers, he withdraws them and moves around behind you.');
    qspCall(s, 'arousal', 'anal', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Penetration', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d1-3.jpg');
    scene.text('You think he is about to finger your ass, but squeal in surprise when he shoves his dick into you instead.');
    scene.text('You moan in a mix of pleasure and pain as he starts thrusting, quickly picking up the pace.');
    qspCall(s, 'arousal', 'anal', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d1-4.jpg');
    scene.text('He continues to fuck you hard and you submit yourself to the pleasure of your ass being hammered as your pussy juices run down your legs.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      (s as any).orgasm_or = 'yes';
      qspCall(s, 'arousal', 'anal', (-10), 'sub');
      scene.text('He continues to fuck you hard and fast and you soon feel an intense orgasm washing over you, juices squirting from your pussy as his warm cum fills your ass.');
    } else {
      if (((s as any).pcs_horny ?? 0) < 100) {
        (s as any).orgasm_or = 'no';
        scene.text('He suddenly slows the rhythm, finishing with several sharp uneven thrusts that fill your ass with a hot load of cum.');
      }
    }
    scene.text('Your ass makes a loud squelching noise when he pulls his dick out. Peter sits on the bed, breathing heavily while you remain kneeling with your ass in the air, his cum trickling down your leg.');
    scene.actions([
      { label: 'Further', goto: ['peterroom', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterD2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/peter/sex/d2-1.jpg');
  scene.text('Peter forces you on your knees, then lifts your head and thrusts his cock into your mouth. The head of his cock goes down your throat, but he continues to thrust, forcing more of it inside.');
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d2-2.jpg');
    scene.text('He thrusts mercilessly, fucking deeper into your mouth. Eventually, you feel his balls slap your chin, and realize that he\'s bottomed out.');
    scene.text('You feel a sense of pride in managing to take it all, but the feeling melts away as he starts to fuck your throat.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d2-3.jpg');
    scene.text('Tears stream from your eyes and you desperately grab onto him, trembling as you let him use you in such a depraved manner.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.img('images/characters/city/peter/sex/d2-4.jpg');
    scene.text('Peter is nearing climax, his thrusts becoming ragged, when he suddenly stops and pushes in deep. His balls draw up, coated with your saliva, and you feel his cum shooting down your throat.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      (s as any).orgasm_or = 'yes';
      scene.text('Your orgasm suddenly hits you. Waves of pleasure ripple through your body, and you moan and shudder with release, but Peter holds you in place and refuses to allow his cock out of your mouth.');
    }
    scene.actions([
      { label: 'Swallow', goto: ['peterroom', 'end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start_door':
      enterStartDoor(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'klap':
      enterKlap(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'd1':
      enterD1(s, scene);
      break;
    case 'd2':
      enterD2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Peterroom: LocationDef = {
  name: 'Peterroom',
  title: 'Peter\'s Apartment',
  region: 'other',
  enter: enter,
};
