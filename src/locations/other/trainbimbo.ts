import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPos1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  if (((s as any).cumloc ?? 0)[6]+((s as any).cumloc ?? 0)[7] === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/locations/pavlovsk/trainstation/vokbimbo1.jpg');
    scene.text('You are now standing in the middle of the station\'s men\'s room in a rather revealing outfit. What are you thinking, or are you even thinking?');
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > 0) {
      scene.img('images/locations/pavlovsk/trainstation/vokbimbo11.jpg');
      scene.text('You are standing in the middle of the stations men\'s room naked and covered in sperm.');
    } else {
      scene.img('images/locations/shared/bathroom/publictoilet.jpg');
    }
  }
  (s as any).bimbo_temp = Math.floor(Math.random() * 10) + 1;
  (s as any).bimbo_rand1 = Math.floor(Math.random() * 101) + 0;
  if (((s as any).bimbo_temp ?? 0) > 8) {
    scene.text('The restroom door opens, and a young man comes in. He is taken aback when he see\'s you in the men\'s room.');
    if (((s as any).pcs_horny ?? 0) > 50) {
      scene.actions([
        { label: 'Look at him and smile', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'young man', Math.floor(Math.random() * 8) + 18, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  }, goto: ['trainbimbo', 'pos2'] },
      ]);
    }
    scene.actions([
      { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
    ]);
  } else {
    if (((s as any).bimbo_temp ?? 0) < 3) {
      scene.text('The restroom door opens, and an older man in his fifties comes in. He is taken aback when he see\'s you in the men\'s room.');
      if (((s as any).pcs_horny ?? 0) > 50) {
        scene.actions([
          { label: 'Look at him and smile', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'fifty year old man', Math.floor(Math.random() * 10) + 50, 0, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  }, goto: ['trainbimbo', 'pos3'] },
        ]);
      }
      scene.actions([
        { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
      ]);
    } else {
      if (((s as any).bimbo_temp ?? 0) === 5) {
        scene.text('The restroom door opens, and a group of drunk guys come in. They are taken aback when they see you in the men\'s room.');
        if (((s as any).pcs_horny ?? 0) > 70) {
          scene.actions([
            { label: 'Look at them and smile', goto: ['trainbimbo', 'pos6'] },
          ]);
        }
        scene.actions([
          { label: 'Pretend to straighten your hair', goto: ['trainbimbo', 'pos4'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Wait for men', goto: ['trainbimbo', 'pos1'] },
    { label: 'Leave', goto: ['pav_train_hall', 'male'] },
  ]);
  scene.build();
}

function enterPos2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokbimbo2.jpg');
  scene.text('An unfamiliar man blushes and goes into a stall.');
  scene.actions([
    { label: 'Follow him into the stall', goto: ['trainbimbo', 'pos22'] },
    { label: 'Leave', goto: ['pav_train_hall', 'male'] },
  ]);
  scene.build();
}

function enterPos22(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).bimbo_rand1 ?? 0) < 40) {
    scene.img('images/locations/pavlovsk/trainstation/bimbo.boy0.jpg');
  } else {
    scene.img('images/shared/sex/blowjob/bimbo.knees\'+rand(0, 6)+\'.jpg');
  }
  scene.text('You burst into the stall without knocking. The man is standing there with his pants unbuttoned, dick hanging out, and looking at you with surprise. You get down on your knees and wrap your lips around his cock.');
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 9);
    qspCall(s, 'fame', 'pav', 'sex', 'tiny', 'local');
    qspCall(s, 'stat', '');
    (s as any).stat['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
    if (((s as any).bimbo_rand1 ?? 0) < 10) {
      scene.img('images/locations/pavlovsk/trainstation/sex/vokbimbo22.jpg');
    } else {
      if (((s as any).bimbo_rand1 ?? 0) < 40) {
        scene.img('images/locations/pavlovsk/trainstation/sex/bimbo.boy0,\'+rand(0, 5)+\'.jpg');
      } else {
        scene.img('images/locations/pavlovsk/trainstation/sex/bimbo0,\'+rand(0, 13)+\'.mp4');
      }
    }
    scene.text('As you are sucking his dick, it quickly gets hard. Work his shaft with your lips and bobbing head, you fondle his balls with your hand. It doesn\'t take too long before he starts moaning and places his hands on your head.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum1,\'+rand(0, 10)+\'.mp4');
    scene.text('You keep sucking his dick, and you are rewarded with hot spurts of cum shooting into your mouth and filling it. There is so much sperm that some of it leaks from the corners of your lips.');
    scene.text('Once he finally stops spurting sperm in your mouth, you stand up, swallowing his cum. You wipe the cum off your lips and suck your fingers clean as you smile at him.');
    scene.actions([
      { label: 'Leave the stall', goto: ['trainbimbo', 'pos1'] },
    ]);
  } },
      { label: 'Jerk him off', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,\'+rand(0, 8)+\'.jpg');
    scene.text('You pull your mouth off his cock and sit back with your face tilted up. He gets the idea and starts jerking off.');
    scene.text('Soon, hot spurts of cum are splashing across your face and into your hair. You squeeze your eyes shut to keep the sperm out of your eyes as you feel another jet of hot cum land on your face.');
    scene.actions([
      { label: 'Leave the stall', goto: ['trainbimbo', 'pos1'] },
    ]);
  } },
    ]);
  } },
    { label: 'Give', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    qspCall(s, 'fame', 'pav', 'sex', 'tiny', 'local');
    if (((s as any).bimbo_rand1 ?? 0) < 30) {
      scene.img('images/locations/pavlovsk/trainstation/sex/bimbo.boy1,\'+rand(0, 5)+\'.jpg');
    } else {
      scene.img('images/locations/pavlovsk/trainstation/sex/bimbo.boy1,\'+rand(0, 8)+\'.mp4');
    }
    qspCall(s, 'dinSex', 'wear_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    (s as any).horand = Math.floor(Math.random() * 100) + 1;
    if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
      scene.text('You have not managed to cum.');
    } else {
      scene.text('When you feel him cumming, your own orgasm sweeps through you.');
    }
    qspCall(s, 'arousal', 'vaginal', (-1), 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the stall', goto: ['trainbimbo', 'pos1'] },
    ]);
  } },
    { label: 'Leave', goto: ['pav_train_hall', 'male'] },
  ]);
  scene.build();
}

function enterPos3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'arousal', 'bj', 2, 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokbimbo2.jpg');
  scene.text('The guy smiles to you and walks over to you, unbuttoning his pants. You make a rude gesture with your tongue.');
  scene.actions([
    { label: 'Kneel down', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bimbo.knees\'+rand(0, 6)+\'.jpg');
    scene.text('You get down on your knees and open your mouth to suck his cock.');
    scene.actions([
      { label: 'Suck', goto: ['trainbimbo', 'pos33'] },
      { label: 'Run out of the bathroom', goto: ['pav_train_hall', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPos33(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  if (((s as any).bimbo_rand1 ?? 0) < 10) {
    scene.img('images/locations/pavlovsk/trainstation/sex/vokbimbo33.jpg');
  } else {
    scene.img('images/locations/pavlovsk/trainstation/sex/bimbo0,\'+rand(0, 13)+\'.mp4');
  }
  scene.text('As you open your mouth to start sucking the guy, he grabs you by your hair, and before you can react, he shoves his dick into your mouth and down your throat.');
  scene.text('You start gagging and struggling to breath. After a bit, he stops forcing himself so deep in your mouth, giving you time to recover.');
  scene.text('He repeats these actions several times, while you start taking off your clothes.');
  scene.actions([
    { label: 'Pull your panties off and masturbate', goto: ['trainbimbo', 'pos333'] },
  ]);
  scene.build();
}

function enterPos333(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, 'rough', 'deepthroat');
  qspCall(s, 'arousal', 'clit_finger', (-5), 'masturbation');
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 0, 0, 1, 1);
  (s as any).stat['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/bimbo.strip\'+rand(0, 6)+\'.mp4');
  scene.text('You start rubbing your clit as the guy fucks your mouth and throat. After a bit, you are completely naked. He pulls you up and pushes you down on the floor where you sprawl before him, your clothes lying around you.');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('"You\'re hot and give great head, but I think I want to try that tight little ass of yours."');
    scene.actions([
      { label: 'Next', goto: ['trainbimbo', 'pos3333'] },
    ]);
  } else {
    scene.text('"You\'re hot and give great head, but I think I want to try that tight little pussy of yours."');
    scene.actions([
      { label: 'Next', goto: ['trainbimbo', 'pos3334'] },
    ]);
  }
  scene.build();
}

function enterPos3333(s: GameState, scene: SceneBuilder): void {
  (s as any).horand = 0;
  scene.img('images/locations/pavlovsk/trainstation/sex/bimbo3,\'+rand(0, 7)+\'.mp4');
  scene.text('He turns your face to the wall and enters your ass from behind. You are not prepared for this. With no lubrication on your ass and only your saliva on his dick, the pain is sharp. You wince and tear up. You try to pull away, but strong hands hold you firm. As you struggle more, he pushes you tight up against the wall, leaving you nowhere to go.');
  scene.text('He pounds your ass furiously, balls deep with out mercy. The more you whimper the harder he pounds you. He seems to have supernatural stamina as he ravishes your ass. You completely lose track of time as tears start to stream down your face.');
  scene.text('"Like that girl? Yeah I know a little slut like you loves having your ass tore up. You can be my ass whore anytime, ha ha!" With these words, his cock begins to twitch, and you feel spurts of hot sperm shooting deep into your ass. Once he has finished cumming, he pushes your head against the wall while he pulls his dick out of you and wipes it off on your butt cheeks.');
  qspCall(s, 'arousal', 'anal', 10, 'lube');
  qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Next', goto: ['trainbimbo', 'pos33333'] },
  ]);
  scene.build();
}

function enterPos3334(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).horand = 0;
  if (((s as any).bimbo_rand1 ?? 0) < 10) {
    scene.img('images/locations/pavlovsk/trainstation/sex/toiletvag1.jpg');
  } else {
    scene.img('images/locations/pavlovsk/trainstation/sex/toiletvag3.mp4');
  }
  scene.text('He turns your face to the wall and enters your pussy from behind. You are not prepared for this. It hurts as he forces himself into you. You try to pull away, but his quite strong hands hold you in place. Unable to pull away, you start rubbing your clit and getting yourself wet.');
  scene.text('He abuses your poor vagina while he lets loose various vulgar comments at you. He uses you for a long time, and to your surprise, once you get yourself wet, the pain gradually starts to recede. You begin to enjoy his rough handling of your body, and you begin to moan softly.');
  scene.text('"So, you actually like it slut? If you visit here again, you can be a my toilet whore any time, ha ha!" With these words, his cock begins to twitch, and you can feel spurts of hot sperm shooting deep into your pussy. Once he has finished cumming, he pushes your head against the wall while he pulls his dick out of you and wipes it off on your butt cheeks.');
  qspCall(s, 'arousal', 'vaginal', 10);
  // TODO-QSP: gs 'cum_call', '', $npcID, 0, 0, 500*rand(16, 24), rand(30, 50)
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Next', goto: ['trainbimbo', 'pos33333'] },
  ]);
  scene.build();
}

function enterPos33333(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).body_write = 1;
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/sex/bimbo.cum.body0.mp4');
  scene.text('He pulls out a marker and writes on your chest Pussy Whore. "This way it will be clear to everyone what you really are, ha ha ha!" He pulls up his pants and leaves you there, lying on the floor covered in cum.');
  scene.actions([
    { label: 'Dress', goto: ['trainbimbo', 'pos1'] },
  ]);
  scene.build();
}

function enterPos4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokbimbo4.jpg');
  scene.text('You pretend not to notice anything. Maybe they will just think you are so stupid that you mixed up the women\'s room with the mens room.');
  scene.actions([
    { label: 'Wait', goto: ['trainbimbo', 'pos1'] },
    { label: 'Leave', goto: ['pav_train_hall', 'male'] },
  ]);
  scene.build();
}

function enterPos5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokbimbo1.jpg');
  scene.text('You run into a toilet stall and close the door. You feel shame at the thought of anyone catching you in here. Your heart pounds in your chest.');
  scene.actions([
    { label: 'Leave the stall', goto: ['pav_train_hall', 'male'] },
  ]);
  scene.build();
}

function enterPos6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/trainstation/vokbimbo2.jpg');
  scene.text('"Come on, who is in here with us?" You hear a drunken guy shout.');
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/trainstation/bimbo.strip\'+rand(0, 6)+\'.mp4');
    scene.text('You strip out of your clothes.');
    scene.actions([
      { label: 'Further', goto: ['trainbimbo', 'pos66'] },
    ]);
  } },
    { label: 'Run out of the bathroom', goto: ['pav_train_hall', ''] },
  ]);
  scene.build();
}

function enterPos66(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_makeup = 0;
  qspCall(s, 'fame', 'pav', 'sex', 'medium', 'local');
  scene.img('images/locations/pavlovsk/trainstation/sex/vokbimbo66.jpg');
  scene.text('The group of local drunks fuck you in all of your holes while commenting about you with vulgar jokes. They pinch and poke your anus, nipples, clit and vagina with their dirty hands.');
  scene.text('One of them says, "I haven\'t fucked a girl as hot as this one in ages!"');
  scene.text('Another one says, "Oooh, I\'m so going to fuck her pussy. The last time I got to fuck anything was almost five years ago, and that was some guys ass!"');
  scene.text('Yet another says laughing, "Not me boys. I am going to rip her pretty little ass up. When I am done, she won\'t be able to sit for a week."');
  scene.text('They crowd around and before long start using all of your holes, sometimes one at a time and sometimes all of them at once. As some men leave, it seems more enter and stand in line to wait their turn to fuck you. After a while, you completely lose count of the number of men that have used your body.');
  scene.text('Finally, the last one finishes, and no new ones come in. You have no idea how much time has passed or how many men have fucked your holes. All you know is every hole you have is sore and leaking cum, your face and hair are covered in sperm, and there are splatters of drying cum all over you body.');
  (s as any).randpeople = Math.floor(Math.random() * 10) + 3;
  (s as any).fucker = 1;
  (s as any).iscumvag = 0;
  // TODO-QSP: :currentgangbang
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'drunk guy in the train station toilet', Math.floor(Math.random() * 29) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).svol = Math.floor(Math.random() * 21) + 30;
  (s as any).spot = 500*((s as any).rand ?? 0)(16, 24);
  (s as any).tiprand = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).tiprand ?? 0))) {
    qspCall(s, 'arousal', 'vaginal', 4, 'gangbang', 'humiliation', 'rough');
    (s as any).toiletrand = Math.floor(Math.random() * 12) + 0;
    if ((!((s as any).toiletrand ?? 0))) {
      qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) === 1) {
      qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) === 2) {
      qspCall(s, 'arousal', 'bj', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) === 3) {
      qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) === 4) {
      qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) === 5) {
      qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', 'labia', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
    }
    if (((s as any).toiletrand ?? 0) > 5) {
      qspCall(s, 'arousal', 'vaginal', 1, 'gangbang', 'humiliation', 'rough');
      qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      (s as any).iscumvag = ((s as any).iscumvag ?? 0) + (1);
      (s as any).sck = ((s as any).sexcontra ?? 0);
    }
  } else {
    if (((s as any).tiprand ?? 0) === 1) {
      qspCall(s, 'arousal', 'anal', 4, 'gangbang', 'humiliation', 'rough');
      (s as any).toiletrand = Math.floor(Math.random() * 12) + 0;
      if ((!((s as any).toiletrand ?? 0))) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 1) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 2) {
        qspCall(s, 'arousal', 'bj', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 3) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 4) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 5) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'labia', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) > 5) {
        qspCall(s, 'arousal', 'anal', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
    } else {
      qspCall(s, 'arousal', 'bj', 4, 'gangbang', 'humiliation', 'rough');
      (s as any).toiletrand = Math.floor(Math.random() * 6) + 0;
      if ((!((s as any).toiletrand ?? 0))) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 1) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) === 2) {
        qspCall(s, 'arousal', 'facial', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
      if (((s as any).toiletrand ?? 0) > 3) {
        qspCall(s, 'arousal', 'bj', 1, 'gangbang', 'humiliation', 'rough');
        qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 0, 0, ((s as any).spot ?? 0), ((s as any).svol ?? 0));
      }
    }
  }
  (s as any).fucker = ((s as any).fucker ?? 0) + (1);
  if (((s as any).fucker ?? 0) <= ((s as any).randpeople ?? 0)) {
    // TODO-QSP: jump 'currentgangbang'
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).iscumvag ?? 0) > 0) {
    qspCall(s, 'cuminsidereact', '', 'some drunk guy whom you likely won\'t even remember tomorrow', ((s as any).sck ?? 0));
  }
  scene.text('After taking a few breaths, you stand up with some difficulty and gather your scattered stuff from the bathroom floor.');
  scene.actions([
    { label: 'dress', goto: ['trainbimbo', 'pos1'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pos1':
      enterPos1(s, scene);
      break;
    case 'pos2':
      enterPos2(s, scene);
      break;
    case 'pos22':
      enterPos22(s, scene);
      break;
    case 'pos3':
      enterPos3(s, scene);
      break;
    case 'pos33':
      enterPos33(s, scene);
      break;
    case 'pos333':
      enterPos333(s, scene);
      break;
    case 'pos3333':
      enterPos3333(s, scene);
      break;
    case 'pos3334':
      enterPos3334(s, scene);
      break;
    case 'pos33333':
      enterPos33333(s, scene);
      break;
    case 'pos4':
      enterPos4(s, scene);
      break;
    case 'pos5':
      enterPos5(s, scene);
      break;
    case 'pos6':
      enterPos6(s, scene);
      break;
    case 'pos66':
      enterPos66(s, scene);
      break;
    default:
      enterPos1(s, scene);
      break;
  }
}

export const trainbimbo: LocationDef = {
  name: 'trainbimbo',
  title: 'You are now standing in the middle of the station\'s men\'s ro',
  region: 'other',
  description: ['You are now standing in the middle of the station\'s men\'s room in a rather revealing outfit. What are you thinking, or are you even thinking?'],
  enter: enter,
};
