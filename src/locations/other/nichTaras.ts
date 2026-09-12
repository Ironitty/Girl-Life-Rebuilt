import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).stat_cfg) (s as any).stat_cfg = {}; (s as any).stat_cfg['time_hidden'] = 0;
  scene.build();
}

function enterAbdIntro(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nichAbdStage ?? 0))) {
    (s as any).inSleep = 0;
    if (!(s as any).stat_cfg) (s as any).stat_cfg = {}; (s as any).stat_cfg['time_hidden'] = 1;
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/taras/intro1.jpg');
    scene.text('You don\'t know how much time has passed when you finally regain consciousness. Maybe minutes? Hours? A whole day?');
    scene.text('Your limbs hurt and you try to stretch them. To no avail. Your feet and wrists are chained to the floor while something in your back pushes your belly up, forcing you into an awkward backwards bent position. The worst thing is that you are apparently naked.');
    scene.text('You open your eyes. Your position forces you to look upward and you can only turn your head a little bit. The only thing you can figure out is that you are in a basement.');
    scene.actions([
      { label: 'Call for help', handler: (st: GameState) => {
    scene.text('You scream for help as loud as you possibly can. Nothing happens. Did anybody hear you at all?');
  } },
      { label: 'Try to free yourself', handler: (st: GameState) => {
    scene.text('You try to wiggle yourself out of your metal bounds. It\'s no use. The metal doesn\'t move a tiny bit and your wrists and ankles can\'t fit through the openings. There is no way you could possibly get free.');
  } },
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichAbdStage = 10;
  }, goto: ['nichTaras', 'abdIntro'] },
    ]);
  } else {
    if (((s as any).nichAbdStage ?? 0) === 10) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'pain', 'back', 'bind');
      qspCall(s, 'pain', 'shoulders', 'bind');
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/taras/intro2.jpg');
      scene.text('You wait for what appears to be an eternity.');
      scene.text('Your back starts to hurt and you try shift into a more comfortable position. You once again realize that that\'s futile. You are forced into this painful position until anybody frees you.');
      if (((s as any).pcs_sleep ?? 0) <= 40  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0) {
        scene.actions([
          { label: 'Try to sleep', handler: (st: GameState) => {
    (s as any).nichAbdStage = 20;
  }, goto: ['nichTaras', 'abdIntro'] },
        ]);
      }
      scene.actions([
        { label: 'Call for help', handler: (st: GameState) => {
    scene.text('You scream for help as loud as you possibly can. Nothing happens. Did anybody hear you at all?');
  } },
        { label: 'Wait', handler: (st: GameState) => {
    (s as any).nichAbdStage = 21;
  }, goto: ['nichTaras', 'abdIntro'] },
      ]);
    } else {
      if (((s as any).nichAbdStage ?? 0) === 20) {
        qspCall(s, 'pain', 'pubic', 'spank');
        qspCall(s, 'sleep_simple', 'forced', 120);
        scene.img('images/characters/city/taras/intro3.jpg');
        scene.text('You are just too exhausted to stay awake any longer. You fall into an uneasy sleep.');
        scene.text('You suddenly awake from a sharp pain in your pubic area. Instinctively you try to jump up, only to be painfully reminded that you can\'t move at all. So the only thing you can do is letting out an agonized scream.');
        scene.text('"Look who decided to wake up." the male voice sounds familiar. "Just to make sure you don\'t fall asleep again."');
        scene.text('You hear a swishing sound and your vagina feels like it is on fire. Apparently you got whipped.');
        if (((s as any).nichTarasAbduction ?? 0) === 10) {
          scene.text('Your eyes widen as the man torturing you steps into your field of view. It\'s Taras, Gala\'s bodyguard.');
        } else {
          scene.text('Your eyes widen as the man torturing you steps into your field of view. It\'s Taras!');
        }
        scene.text('"Please sir…" another hit from the whip immediately turns your plea into a scream.');
        scene.text('"Shut up, slut! I am sure you have a lot of questions right now. But there are only a few things you need to know."');
        scene.actions([
          { label: 'Object', handler: (st: GameState) => {
    scene.text('Just as you open your mouth you feel the whip once more. Taras obviously doesn\'t want you to speak right now.');
  } },
          { label: 'Listen', handler: (st: GameState) => {
    (s as any).nichAbdStage = 30;
  }, goto: ['nichTaras', 'abdIntro'] },
        ]);
      } else {
        if (((s as any).nichAbdStage ?? 0) === 21) {
          (s as any).minut = ((s as any).minut ?? 0) + 120;
          qspCall(s, 'pain', '', 5, 'pubic', 'hit');
          qspCall(s, 'stat', '');
          scene.img('images/characters/city/taras/intro3.jpg');
          scene.text('Locked down like this there is nothing you can do than continue waiting.');
          scene.text('After another eternity you hear heavy steps from a man coming down a stairway.');
          scene.text('"Good, you are awake." the male voice sounds familiar. "Just to make sure you don\'t fall asleep."');
          scene.text('You hear a swishing sound and your vagina feels like being on fire. Apparently you got whipped.');
          if (((s as any).nichTarasAbduction ?? 0) === 10) {
            scene.text('Your eyes widen as the man torturing you steps into your field of view. It\'s Taras, Gala\'s bodyguard.');
          } else {
            scene.text('Your eyes widen as the man torturing you steps into your field of view. It\'s Taras!');
          }
          scene.text('"Please sir…" another hit from the whip immediately turns your plea into a scream.');
          scene.text('"Shut up, slut! I am sure you have a lot of questions right now. But there are only a few things you need to know."');
          scene.actions([
            { label: 'Object', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'pubic', 'hit');
    qspCall(s, 'stat', '');
    scene.text('Just as you open your mouth you feel the whip once more. Taras obviously doesn\'t want you to speak right now.');
  } },
            { label: 'Listen', handler: (st: GameState) => {
    (s as any).nichAbdStage = 30;
  }, goto: ['nichTaras', 'abdIntro'] },
          ]);
        } else {
          if (((s as any).nichAbdStage ?? 0) === 30) {
            qspCall(s, 'pain', 'breasts', 'twist');
            qspCall(s, 'stat', '');
            scene.img('images/characters/city/taras/intro4.jpg');
            if (((s as any).nichTarasAbduction ?? 0) === 10) {
              scene.text('"I bet you\'re wondering how you got here. You see, you annoyed Mistress Gala. Being the classy woman she is she can\'t tolerate skanks like yourself in her household."');
              scene.text('"That\'s why she ordered me to get rid of you. She didn\'t specify how you should vanish. At first I thought about disposing you in the wilderness. But then I thought you might make a nice addition to my collection of toys."');
            } else {
              scene.text('"I bet you\'re wondering why I brought you here. It really is your own fault. I wanted Mistress Gala to come here with me. But thanks to you she is out of reach for me now."');
              scene.text('"Of course I won\'t treat you the way I would treat her. You are nothing but a dirty slut. For a short time I thought you could be something more, but you really proved me wrong. You are nothing but some holes which I can use for a little entertainment."');
            }
            scene.text('He knees down next to you and starts painfully squeezing your breasts.');
            scene.text('"Do you understand, slut? You are my possession now. You will do anything I tell you to do. You will never speak unless spoken to. Your sole purpose of existence is to please me. If you ever fail to do so I will toss you. I have no use for a broken toy."');
            scene.text('"Do you understand?"');
            scene.actions([
              { label: 'Yes sir', handler: (st: GameState) => {
    (s as any).nichAbdStage = 40;
  }, goto: ['nichTaras', 'abdIntro'] },
              { label: 'No way!', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 6, 'nipples', 'twist');
    qspCall(s, 'stat', '');
    scene.text('"No! You can\'t…" you are interrupted by him painfully twisting your nipples.');
    scene.text('"I\'m asking again: do you understand?"');
  } },
            ]);
          } else {
            if (((s as any).nichAbdStage ?? 0) === 40) {
              qspCall(s, 'pain', 'clitoris', 'twist');
              qspCall(s, 'stat', '');
              scene.img('images/characters/city/taras/intro5.jpg');
              scene.text('There is no use in resistance right now. This man will punish you until you say what he wants to hear.');
              scene.text('"Yes sir, I understand."');
              scene.text('"Good. I really hate to hurt my little toys." while still firmly holding one of your breasts he slips two fingers into your vagina.');
              scene.text('"Sadly stupid cunts like you don\'t understand the importance of obedience without a tiny bit of pain."');
              scene.text('With these words he starts to twist your clit painfully. The pain is so intense you can\'t help but scream in pain and spasm uncontrollably while still being locked firmly in place.');
              scene.text('Just as you think you pass out he removes his hand. The pain is still present on only fades very slowly.');
              scene.text('"Obedience. Now that your starting to grasp the importance of it let me show you the rewards you can earn when you are an obedient little toy."');
              scene.text('He unbottons his pants and pulls them down along with his underpants. He clearly wants you to see his erect penis. Does he really expect you to suck it?');
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    (s as any).nichAbdStage = 50;
  }, goto: ['nichTaras', 'abdIntro'] },
              ]);
            } else {
              if (((s as any).nichAbdStage ?? 0) === 50) {
                (s as any).nichKatinkaPresent = 1;
                scene.img('images/characters/city/taras/intro6.jpg');
                scene.text('Maybe Taras saw the distgusted look on your face. Or he just figured out what you were thinking.');
                scene.text('"Don\'t flatter yourself, slut. You didn\'t earn the privilege to taste my cock."');
                scene.text('He stands up and goes to a place in the basement you can\'t see from your position. You hear the sound of a lock being unlocked and some chains rattling.');
                scene.text('He returns into your field of view. In his hand he holds a metal chain which is connected to a collar around the neck of a naked young woman. She appears to be about your age. Has she been in the basement all along?');
                scene.text('The girl has a terrified look on her face. When Taras points at the ground she hastily drops on her knees and obediently starts to sucking him off.');
                scene.text('It doesn\'t take long for Taras to cum. When he does he grabs the girls head with both hands and forces his dick as deeply inside her throat as he can. You see the panic in the girls eyes as she struggles to breath. With a loud moan Taras unloads his cum into her throat.');
                scene.text('You see tears rolling down the girls cheeks as she starts to diligently lick his penis clean.');
                scene.text('Once she is done Taras kicks her into the belly. "Get up, lazy slut!"');
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    (s as any).nichAbdStage = 60;
  }, goto: ['nichTaras', 'abdIntro'] },
                ]);
              } else {
                if (((s as any).nichAbdStage ?? 0) === 60) {
                  scene.img('images/characters/city/taras/hogtie1.jpg');
                  scene.text('He shifts his attention back to you.');
                  scene.text('"I am sure you enjoy your current position. But you can\'t hang around like this all day."');
                  scene.text('He takes a rope and connects your ankles, your ellbows your knees and your neck. Once he is finished he finally unlocks you from your metal bondage.');
                  scene.text('He gives you a push and you land on your belly. You realize that you are now tied in a hogtie. At least you can move a tiny bit more now. You assume that you could slowly crawl around the basement like this.');
                  if (((s as any).nichTarasAbduction ?? 0) === 10) {
                    scene.text('"I have to go now. I need to get ready for work."');
                  }
                  scene.text('Directed at the other girl he says "Give this skank a wash. She stinks horribly. And make sure she doesn\'t starve. I have way more fun planned for her."');
                  scene.text('"Yes, sir."');
                  scene.text('Taras nods and leaves the basement. You hear an heavy door closing and three locks being closed.');
                  scene.actions([
                    { label: 'Further', handler: (st: GameState) => {
    (s as any).nichAbdStage = 100;
    (s as any).nichTarasLeave = ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) + 20;
    (s as any).nichTarasReturn = Math.floor(Math.random() * 5) + 19;
    scene.actions([{ label: 'Continue', goto: ['nichTaras', 'katinka', '\'wash\''] }]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterKatinka(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'desc') {
    scene.img('images/characters/city/taras/katinka1.jpg');
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    if (((s as any).nichKatinkaTopics ?? 0) === 0  &&  ((s as any).nichKatinkaTopic ?? 0)[1] === 0) {
      scene.actions([
        { label: 'Who are you?', handler: (st: GameState) => {
    (s as any).nichKatinkaTopics = ((s as any).nichKatinkaTopics ?? 0) + (1);
    if (!(s as any).nichKatinkaTopic) (s as any).nichKatinkaTopic = {}; (s as any).nichKatinkaTopic[1] = 1;
    scene.text('"Excuse me?"');
    scene.text('"Psssst. Please talk quietly. Master will be mad when he finds out you were talking to me." she looks and sounds terrified.');
    scene.text('"Who are you? Why are you here?"');
    scene.text('"I… I… I am nothing but my Masters little slut. I am here to serve him." a tear rolls down her cheek as she says these lines which are obviously not her own thoughts.');
    scene.text('<i>She doesn\'t seem to be ready to talk about this topic. Maybe you should ask her again at another time.</i>');
    scene.actions([{ label: 'Continue', goto: ['nichTaras', 'katinka', '\'talkEnd\''] }]);
  } },
      ]);
    }
  } },
      { label: 'Back', goto: ['nichTaras', 'dungeon'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'talkEnd') {
      scene.text('As you think about what you could say next you hear Taras returning from upstairs. He is dressed for his job.');
      // TODO-QSP: dynamic text: "Time to get you back to your own room." he grabs <<$nichKatinkaName>> by her ha...
      scene.text(`"Time to get you back to your own room." he grabs ${((s as any).nichKatinkaName ?? 0)} by her hair and pulls her back upstairs. You hear the locks once again being locked.`);
      (s as any).nichKatinkaPresent = 0;
      scene.actions([
        { label: 'Alone', goto: ['nichTaras', 'dungeon'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'wash') {
        scene.img('images/characters/city/taras/washing1.jpg');
        // TODO-QSP: dynamic text: <<$nichKatinkaNameUC>> takes a bottle of shower gel and covers you in it. Being ...
        scene.text(`${((s as any).nichKatinkaNameUC ?? 0)} takes a bottle of shower gel and covers you in it. Being all tied up there is nothing you can do to prevent it. Her touch feels soft on your skin. Then she uses a hose to clean you. The water is ice cold. She gently dries you with a towel before combing your hair.`);
        if (((s as any).deodorant_on ?? 0) === 1) {
          qspCall(s, 'sweat', 'remove_deo');
          scene.text('<br>Your deodorant gets washed away in the shower.');
        }
        (s as any).noshampoo = 1;
        qspCall(s, 'din_van', 'showerdin');
        (s as any).pcs_hairbsh = 1;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Finished', goto: ['nichTaras', 'dungeon'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterDungeon(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichTarasLeave ?? 0) <= ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)  &&  ((s as any).nichKatinkaPresent ?? 0) !== 0) {
    scene.text('You hear Taras returning from upstairs. He is dressed for his job.');
    // TODO-QSP: dynamic text: "Time to get you back to your own room." he grabs <<$nichKatinkaName>> by her ha...
    scene.text(`"Time to get you back to your own room." he grabs ${((s as any).nichKatinkaName ?? 0)} by her hair and pulls her back upstairs. You hear the locks once again being locked.`);
    (s as any).nichKatinkaPresent = 0;
  }
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    qspCall(s, 'stat', '');
    if (((s as any).nichTarasReturn ?? 0) <= ((s as any).hour ?? 0)) {
      scene.text('You hear the locks of the door upstairs being opened again. Then heavy steps. Taras has returned.');
      scene.text('"There is my slut, just where I left her. Good."');
      scene.text('He comes over to you and grabs you by the hair.');
      scene.actions([
        { label: 'Get dragged', goto: ['nichTaras', 'session'] },
      ]);
    } else {
      scene.text('<center><b>Basement</b></center>');
      scene.img('images/characters/city/taras/dungeon.jpg');
      scene.text('You are in a basement. There are several metal objects bolted to the ground and to the walls. They are used for chaining up prisoners. There is also a hose for cleaning.');
      // TODO-QSP: dynamic text: In one corner of the room stands an <a href="exec:minut += 10&gt 'nichTaras', 'd...
      scene.text('In one corner of the room stands an <a href="exec:minut += 10&gt \'nichTaras\', \'dungeon\', \'bed\'">old bed</a> with a dirty mattress on it.');
      scene.text('There is also a bucket with water and another one with some kind of bad tasting food. You could <a href="exec:gt \'nichTaras\', \'dungeon\', \'eat\'">eat and drink</a> from them.');
      if ((!((s as any).nichTarasMirror ?? 0))) {
        scene.text('In another corner of the room is an <a href="exec:gt \'nichTaras\', \'dungeon\', \'mirror\'">old mirror</a>.');
      } else {
        scene.text('The mirror you threw over lies in one corner of the room.');
      }
      if (((s as any).nichKatinkaPresent ?? 0) === 1) {
        scene.text('<a href="exec:gt \'nichTaras\', \'katinka\', \'desc\'">The other girl</a> Taras owns is also here cleaning the floor and refilling your food.');
      }
      scene.actions([
        { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['nichTaras', 'dungeon'] },
      ]);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'bed') {
      qspCall(s, 'stat', '');
      if (((s as any).locArgs?.[2] ?? 0) === '') {
        scene.img('images/characters/city/taras/dungeonBed.jpg');
        scene.text('You crawl over to the bed. Being tied up you have a hard time climbing on the mattress. It isn\'t very comfortable but still better than the cold ground.');
        if (((s as any).pcs_sleep ?? 0) < 80  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0) {
          scene.actions([
            { label: 'Sleep', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichTaras', 'dungeon', 'bed', 'sleep'
  } },
          ]);
        }
        scene.actions([
          { label: 'Return', goto: ['nichTaras', 'dungeon'] },
        ]);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) === 'sleep') {
          scene.text('The bed is extremely uncomfortable and smells of old sweat. You try to get into a comfortable position but your bondage would\'t allow that.');
          scene.text('Giving up you decide to try to sleep like this. It takes a while but finally you manage to fall asleep.');
          if (((s as any).hour ?? 0) + 4 >= ((s as any).nichTarasReturn ?? 0)) {
            qspCall(s, 'sleep_simple', 'sleep_until', ((s as any).nichTarasReturn ?? 0), 0);
            scene.text('You wake up by a sharp pain in your side. Taras has returned and woke you up by giving you a kick.');
            scene.text('"Enough lazing, slut."');
            scene.text('He grabs your hair and pulls you up.');
            scene.actions([
              { label: 'Get dragged', goto: ['nichTaras', 'session'] },
            ]);
          } else {
            scene.text('You wake up after a few hour. Apparently you are still alone in the basement.');
            qspCall(s, 'sleep_simple', 'forced', 240);
            if (((s as any).pcs_sleep ?? 0) < 80  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0) {
              scene.actions([
                { label: 'Sleep', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichTaras', 'dungeon', 'bed', 'sleep'
  } },
              ]);
            }
            scene.actions([
              { label: 'Return', goto: ['nichTaras', 'dungeon'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'eat') {
        (s as any).minut = ((s as any).minut ?? 0) + 10;
        (s as any).pcs_hydra = 0;
        (s as any).pcs_energy = 0;
        qspCall(s, 'stat', '');
        scene.img('images/characters/city/taras/eat.jpg');
        scene.text('You force yourself to eat a little bit of the distgusting tasting food in the bucket. At least the water is tastless.');
        scene.actions([
          { label: 'Return', goto: ['nichTaras', 'dungeon'] },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'mirror') {
          scene.img('images/characters/city/taras/mirror.jpg');
          scene.text('This is a dirty old mirror standing on the ground.');
          if ((!((s as any).nichTarasMirror ?? 0))) {
            scene.actions([
              { label: 'Throw over', handler: (st: GameState) => {
    (s as any).nichTarasMirror = 1;
    (s as any).nichTarasMirrorCount = ((s as any).nichTarasMirrorCount ?? 0) + (1);
    scene.text('It takes quit some effort by finally you manage to use your shoulder to throw the mirror over. The frame took some damage but the glass seems to be still intact.');
    scene.actions([
      { label: 'Back', goto: ['nichTaras', 'dungeon'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Inspect yourself', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/hogtie1.jpg');
    scene.text('You see the reflection of your bound self in the mirror.');
  } },
            { label: 'Back', goto: ['nichTaras', 'dungeon'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterSession(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).nichTarasSession ?? 0))) {
    if (((s as any).nichTarasMirror ?? 0) === 1  &&  ((s as any).nichTarasMirrorCount ?? 0) === 1) {
      (s as any).nichTarasSession = (-1);
      (s as any).nichTarasMirror = 0;
    } else {
      (s as any).nichTarasSessions = ((s as any).nichTarasSessions ?? 0) + (1);
      if (((s as any).nichTarasSessionComplete ?? 0)[1] === 0) {
        (s as any).nichTarasSession = 1;
      }
    }
  }
  if (((s as any).nichTarasSession ?? 0) === -1) {
    if ((!((s as any).nichTarasSessionStage ?? 0))) {
      scene.text('Of course Taras can\'t miss the fact that you threw over his mirror.');
      scene.text('"What the hell, bitch? Did you seriously throw my mirror over?"');
      scene.text('He walks over to it and places it back up.');
      scene.text('"Oh, I understand. You don\'t like the way you are looking now." he grabs you by the hair and pulls you to the mirror, forcing you to look at your reflection.');
      scene.text('"This is what you truly are. A dirty little slut, nothing but I toy for finer people."');
      scene.text('"I will make sure you understand and accept that."');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1a.jpg');
    scene.text('He places you back on your belly and collects some items from a chest in the back of the room.');
    scene.text('You don\'t see what happens as he steps over you. Suddenly you feel an intense pain. As you open your mouth to let out a scream you feel that something is pushed into it.');
    scene.text('You try to struggle away from it, but there is no use. Taras pushes what appears to be a dildo gag into your mouth and secures it in position with a few straps. The dildo is long enough to cause you discomfort as it nearly reaches your throat. You are forced to breath through your nose and even then you feel like being constantly at the edge of suffocation.');
    scene.text('While you are desperately trying to push out the rubber invader in your mouth Taras expertly replaces your restraints with wrist cuffs and beltlike straps.');
    scene.text('Next he forces you to your feet and connects your wrist cuffs to a chain hanging from the ceiling. You are forced to stand on tiptoes, unable to move.');
    scene.text('Your wrists already start to hurt, but Taras is not done yet. He takes out wooden clothes pegs and starts placing them all over your body. You try to protest but all you can produce is a gargle.');
    scene.text('Lastly Taras places the mirror directly in front of you.');
    scene.text('"I call this lesson \'Acceptance of your role in life\'. The rules are simple: I will remove the pegs and by one. And you will watch it happen in the mirror. If you look away you get punished. If you close your eyes you get punished. If you pass you get rewarded."');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1b.jpg');
    scene.text('He steps behind you. You hear a swishing sound in the air and one moment later you feel a burning pain on your back.');
    scene.text('Apparently Taras wants to remove the pegs by whipping them away.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1c.jpg');
    scene.text('You feel the whip on your body again and again. The pain is almost too much to bare.');
    scene.text('You try to keep your eyes on your reflection. You can\'t believe the girl in the mirror who gets abused so horribly is actually you.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1d.jpg');
    scene.text('Focussing on the mirror gets harder with each stroke. You really want to close your eyes but what if you got punished even worse then?');
    scene.actions([
      { label: 'Close eyes', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 10;
  }, goto: ['nichTaras', 'session'] },
      { label: 'Focus', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1e.jpg');
    scene.text('Taras has spared your most sensitive parts for the finish. Your pussy feels like being on fire as the whip hits it mercilessly several times.');
    scene.actions([
      { label: 'Close eyes', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 10;
  }, goto: ['nichTaras', 'session'] },
      { label: 'Focus', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 20;
  }, goto: ['nichTaras', 'session'] },
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
    } else {
      if (((s as any).nichTarasSessionStage ?? 0) === 10) {
        scene.img('images/characters/city/taras/mirrorEvent1d.jpg');
        scene.text('The pain is too intense. You just have to close your eyes.');
        scene.text('"What did I say, slut?! Don\'t close your eyes! I will teach you to listen to my words."');
        scene.text('Taras whips you even harder now. Your skin feels on fire and you scream as loud as you can. But the gag prevents you from making anything but muffled sounds.');
        scene.text('Once Taras is done you are reduced to a sobbing mess.');
        scene.text('"Since you missed the central aspect of this lesson I think you could use some extra time to finally get the point."');
        scene.text('With these words he leaves the basement, leaving you hanging from the ceiling with the vile dildo in your mouth and your whole body covered in bruises.');
        if (((s as any).pcs_sleep ?? 0) < 80  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0) {
          scene.actions([
            { label: 'Sleep', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 11;
  }, goto: ['nichTaras', 'session'] },
          ]);
        }
        scene.actions([
          { label: 'Try to break free', handler: (st: GameState) => {
    scene.text('You pull on your restraints the best you can, but they don\'t give in. You are tightly locked.');
  } },
          { label: 'Wait', handler: (st: GameState) => {
    if (((s as any).pcs_sleep ?? 0) <= 20  ||  (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) <= 6)) {
      scene.img('images/characters/city/taras/mirrorEvent1d.jpg');
      scene.text('You are too tired to stay awake any longer.');
      scene.actions([
        { label: 'Fall asleep', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 11;
  }, goto: ['nichTaras', 'session'] },
      ]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
  } },
        ]);
      } else {
        if (((s as any).nichTarasSessionStage ?? 0) === 11) {
          scene.img('images/characters/city/taras/mirrorEvent1d.jpg');
          scene.text('Despite your position being very uncomfortable you finally manage to fall asleep.');
          qspCall(s, 'sleep_simple', 'sleep_until', 6, 0);
          scene.text('You don\'t know for how long you slept when a dash of cold water pulls you out of your dreams.');
          scene.text('You immediately realize that you or no longer bolted to the ground. Instead you have already bound in an hogite again.');
          // TODO-QSP: dynamic text: <<$nichKatinkaNameUC>> is the one washing you. Taras is nowhere to be seen for n...
          scene.text(`${((s as any).nichKatinkaNameUC ?? 0)} is the one washing you. Taras is nowhere to be seen for now.`);
          (s as any).nichKatinkaPresent = 1;
          scene.actions([
            { label: 'Get washed', handler: (st: GameState) => {
    scene.actions([{ label: 'Continue', goto: ['nichTaras', 'katinka', '\'wash\''] }]);
  } },
          ]);
        } else {
          if (((s as any).nichTarasSessionStage ?? 0) === 20) {
            scene.img('images/characters/city/taras/mirrorEvent1e.jpg');
            scene.text('Taras whips off the last pegs. Then he takes your chin and forces you to look him into the eyes.');
            scene.text('"You passed this test. Of course that\'s not your accomplishment. A pupil can only be as good as her teacher."');
            scene.text('He disconnects your wrist cuffs from the ceiling. Only now you realize that your arms started to feel numb from the constant pull on them. feel numb from the constant pull on them. Unable to resist he pushes you to the ground and locks your wrists and ankles to metal rings bolted there.');
            scene.text('"Nevertheless I promised you a reward."');
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1f.jpg');
    scene.text('He takes a vibrator and starts working your clit.');
    scene.text('It doesn\'t take long before you feel an orgasm build up.');
    scene.text('Your breath quickens while your gag still makes breathing difficult. Just as you are about to cum, Taras holds your nose shut.');
    scene.text('You feel your intense orgasm with every nerve. You try to move, to give into it, but you are tightly hold in place.');
    scene.text('Finally Taras removes his hand from your nose also removes the horrible gag.');
    scene.text('"I am done with you for today. You can rest now, slut."');
    scene.text('Leaving you locked to the ground he leaves the basement.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/mirrorEvent1g.jpg');
    scene.text('You lie on the ground. Being restrained like this there is not much you can do.');
    if (((s as any).pcs_sleep ?? 0) < 80  ||  ((s as any).cheatVars ?? 0)?.['sleep'] !== 0) {
      scene.actions([
        { label: 'Sleep', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 21;
  }, goto: ['nichTaras', 'session'] },
      ]);
    }
    scene.actions([
      { label: 'Try to break free', handler: (st: GameState) => {
    scene.text('You pull on your restraints the best you can, but they don\'t give in. You are tightly locked.');
  } },
      { label: 'Wait', handler: (st: GameState) => {
    if (((s as any).pcs_sleep ?? 0) <= 20  ||  (((s as any).hour ?? 0) >= 4  &&  ((s as any).hour ?? 0) <= 6)) {
      scene.img('images/characters/city/taras/mirrorEvent1g.jpg');
      scene.text('You are too tired to stay awake any longer.');
      scene.actions([
        { label: 'Fall asleep', handler: (st: GameState) => {
    (s as any).nichTarasSessionStage = 21;
  }, goto: ['nichTaras', 'session'] },
      ]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).nichTarasSessionStage ?? 0) === 21) {
              scene.img('images/characters/city/taras/mirrorEvent1g.jpg');
              scene.text('Despite the hard cold floor being very uncomfortable to lie on you finally manage to fall asleep.');
              qspCall(s, 'sleep_simple', 'sleep_until', 6, 0);
              scene.text('You don\'t know for how long you slept when a dash of cold water pulls you out of your dreams.');
              scene.text('You immediately realize that you are no longer bolted to the ground. Instead you have already bound in an hogite again.');
              // TODO-QSP: dynamic text: <<$nichKatinkaNameUC>> is the one washing you. Taras is nowhere to be seen for n...
              scene.text(`${((s as any).nichKatinkaNameUC ?? 0)} is the one washing you. Taras is nowhere to be seen for now.`);
              (s as any).nichKatinkaPresent = 1;
              scene.actions([
                { label: 'Get washed', handler: (st: GameState) => {
    scene.actions([{ label: 'Continue', goto: ['nichTaras', 'katinka', '\'wash\''] }]);
  } },
              ]);
            }
          }
        }
      }
    }
  } else {
    if (((s as any).nichTarasSession ?? 0) === 1) {
      if ((!((s as any).nichTarasSessionStage ?? 0))) {
        scene.img('images/characters/city/taras/rope1a.jpg');
        scene.text('Taras holds your nose shut until you are forced to open your mouth to breath. Then he forces a dildo gag into your mouth. The fake member is so long it almost reaches your throat, making it difficult to breath.');
        scene.text('Taras lets go of you and takes out a rope with many knots in it, which he places between two poles at hip height.');
        scene.text('Afterwards he repeats this with another rope and two other poles. When he is done he has two taut ropes. They are about 5 meters long.');
        // TODO-QSP: dynamic text: You see <<$nichKatinkaName>> standing next to one poles. She wears the same kind...
        scene.text(`You see ${((s as any).nichKatinkaName ?? 0)} standing next to one poles. She wears the same kind of gag you are wearing. Her hands are boung behind her back with some ropes.`);
        scene.text('Taras walks over to her, takes her upper leg and forces it over the rope. The rope is now between legs. It is so high she is forced to stand on tiptoes.');
        // TODO-QSP: dynamic text: You assume that the other rope is meant for you. And you are not wrong. Before l...
        scene.text(`You assume that the other rope is meant for you. And you are not wrong. Before long you find yourself in exactly the same position on the other rope, less than half a meter away from ${((s as any).nichKatinkaName ?? 0)}. If you were not bound you could easily touch her. But with your hands being secured behind your back there is no way you could reach her.`);
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/rope1a.jpg');
    scene.text('Taras steps on the other side of the two ropes.');
    scene.text('"Now that I have two sluts I want to know which one of you is more eager to please her owner."');
    scene.text('"Here is a little competition. The first one who reaches the end of her rope gets a reward. And you really don\'t want to disappoint me."');
    scene.text('"Three, two, one, <b>start</b>!"');
    scene.actions([
      { label: 'Move forward' }, // TODO-QSP: empty action body
      { label: 'Don\'t move', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/rope1a.jpg');
    // TODO-QSP: dynamic text: You notice that <<$nichKatinkaName>> started to move forward. But you have no in...
    scene.text(`You notice that ${((s as any).nichKatinkaName ?? 0)} started to move forward. But you have no interest in participating in this humiliating race.`);
    // TODO-QSP: dynamic text: <<$nichKatinkaNameUC>> has advanced two knots when Taras comes over to you.
    scene.text(`${((s as any).nichKatinkaNameUC ?? 0)} has advanced two knots when Taras comes over to you.`);
    scene.text('"You don\'t want to get me angry, slut. Get moving or you will regret it."');
    scene.actions([
      { label: 'Move forward' }, // TODO-QSP: empty action body
      { label: 'Stand still', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/rope1a.jpg');
    // TODO-QSP: dynamic text: You decide that you won't let his threat impress you. You watch as <<$nichKatink...
    scene.text(`You decide that you won't let his threat impress you. You watch as ${((s as any).nichKatinkaName ?? 0)} slowly approaches the end of her rope knot by knot.`);
    scene.text('When she reaches the end Taras pets her head. "Well done, slut. Too bad your competitor didn\'t show the same ambition. Just stay here while I lecture her the importance of good sportsmanship."');
    scene.text('He grabs the bucket where you usually have to drink from. He opens his pants and starts urinating in the bucket.');
    scene.text('Afterwards he unties you, only to push you inside a crate which is barely big enough for you to fit in. At the end is a hole where your head fits through.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/punishment1a.jpg');
    scene.text('Taras tightly ties you in the crate, then he pushes it on a small metal podium and turns it so your head faces downward.');
    scene.text('Then he places the bucket under your face. You can smell the urine. It\'s distgusting.');
    // TODO-QSP: dynamic text: But Taras isn't done yet. From the corner of your eyes you see that he is draggi...
    scene.text(`But Taras isn't done yet. From the corner of your eyes you see that he is dragging ${((s as any).nichKatinkaName ?? 0)} over to you.`);
    scene.text('"Piss!" he commands. Nothing happens. Does she hesitate to follow his order? "I said piss!". It only take a few moments longer before you feel a warm liquid on the back of your head, slowly running down your hair and into your face. She is actually pissing on your head!');
    scene.text('When she is done the bucket is almost have full and the urine is even closer to your face now. But Taras is not satisfied yet. He returns with the water hose and while holding you back by your hair he fills the bucket with water until it reaches your chin.');
    scene.text('When he lets go your face drops into the foul smelling liquid. In order to breath you have to pull it back and hold it in an awkward position.');
    scene.text('"That\'s what happens to bad sportsmen. You better keep your head up while I reward this little skank here."');
    qspCall(s, 'arousal', 'pee', (-5), 'sub', 'humiliation', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/punishment1b.jpg');
    scene.text('You try to keep your head up the best you can. But it is just too exhausting. So you limit yourself on taking a deep breath every few seconds, let your head drop into the liquid and to surface a few seconds later.');
    // TODO-QSP: dynamic text: While you're busy not drowning you hear the reward Taras was speaking of. It sou...
    scene.text(`While you're busy not drowning you hear the reward Taras was speaking of. It sounds like a mixture of spanking, rape and whipping. Even being in a dire situation you can't tell for sure if ${((s as any).nichKatinkaName ?? 0)} is better of right now.`);
    scene.text('After what appears to be an eternity you hear Taras stepping next to your bucket again.');
    scene.text('"It looks like you are having fun. I think I will leave you like this for the night."');
    scene.text('"Oh, and before I forget: if you drink a little water you can drop your head without drowning."');
    scene.text('With these words he leaves you alone once again.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/characters/city/taras/punishment1a.jpg');
    scene.text('You can\'t believe what you just heard. How can he expect you to drink this revolting smelling liquid?');
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    if (((s as any).nichTarasSessionStage ?? 0) < 201) {
      scene.text('You have to bring up all your willpower to force this distgusting liquid down your throat.');
      scene.text('You feel your stomach revolting and press your lips together. Barfing would only make matters way worse right now.');
      scene.text('Just as you are about to finish drinking you realize, that you can\'t drop your head safely yet. You are only halfway done.');
      (s as any).nichTarasSessionStage = 201;
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (Math.floor(Math.random() * 21) + 80);
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).nichTarasSessionStage ?? 0) === 201) {
        scene.text('Again you convince yourself to drink the liquid. It didn\'t become easier since last time and your stomach already feels like bursting from all the liquid you forced into it.');
        (s as any).nichTarasSessionStage = 202;
        (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (Math.floor(Math.random() * 21) + 80);
        qspCall(s, 'stat', '');
      } else {
        scene.text('There is no reason to drink any more liquid.');
      }
    }
  } },
      { label: 'Wait', handler: (st: GameState) => {
    if (((s as any).nichTarasSessionStage ?? 0) < 202) {
      scene.text('You wait for a few minutes. There is no way you will make it through the night like this.');
    } else {
      scene.text('You wait for a few minutes. You still have an uneasy feeling in your stomach, but at least you could sleep now.');
    }
  } },
      { label: 'Sleep', handler: (st: GameState) => {
    if (((s as any).nichTarasSessionStage ?? 0) < 202) {
      scene.text('If you would fall asleep right now you would drown for sure.');
    } else {
      scene.img('images/characters/city/taras/punishment1a.jpg');
      scene.text('Being placed in this crate and all most of your weight resting on your shoulders while foul smelling urine is slowly drying on your head is a bad position to sleep in. But your need for sleep is too strong and so you fall asleep soon.');
      qspCall(s, 'sleep_simple', 'sleep_until', 6, 0);
      scene.text('You don\'t know for how long you slept when a dash of cold water pulls you out of your dreams.');
      scene.text('You immediately realize that you are no longer tied in the create. Instead you have already bound in an hogite again.');
      // TODO-QSP: dynamic text: <<$nichKatinkaNameUC>> is the one washing you. Taras is nowhere to be seen for n...
      scene.text(`${((s as any).nichKatinkaNameUC ?? 0)} is the one washing you. Taras is nowhere to be seen for now.`);
      (s as any).nichKatinkaPresent = 1;
      scene.actions([
        { label: 'Get washed', handler: (st: GameState) => {
    scene.actions([{ label: 'Continue', goto: ['nichTaras', 'katinka', '\'wash\''] }]);
  } },
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
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterVan(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/taras/van.jpg');
  scene.text('You see a suspicious looking van a little down the street. It\'s the type of van typically used for abductions in movies. But that won\'t happen in real life, right?');
  scene.text('');
  scene.text('You can walk past the van or take a longer way to avoid it.');
  (s as any).nichGalaTarasPlan = ((s as any).nichGalaTarasPlan ?? 0) + (1);
  scene.actions([
    { label: 'Walk past it', handler: (st: GameState) => {
    if (((s as any).nichGalaTarasPlan ?? 0) >= 113) {
      scene.actions([{ label: 'Continue', goto: ['nichTaras', 'vanAbduct'] }]);
    }
    dynamicGoto(st, 'loc');
  } },
    { label: 'Avoid it (10 minutes)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterVanAbduct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.img('images/characters/city/taras/abduction.jpg');
    scene.text('As you pass the van the back door is suddenly opened. You have no time to react before a piece of cloth is pressed against your face.');
    scene.text('It smells sweetish… and you begin to black out.');
    (s as any).nichTarasAbduction = 50;
    scene.actions([
      { label: 'Continue', goto: ['nichTaras', 'vanAbduct', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.img('images/characters/city/taras/abductionVan.jpg');
      scene.text('You slowly come back to your senses. The first thing you realize is that you are completely tied up. You can\'t move at all.');
      scene.text('You open your eyes in panic. You are in the back area of the van and it is moving. You try to scream, but your mouth is taped shut.');
      scene.text('Your eyes are still a little blurred. You can\'t see where you are or who the driver is.');
      scene.text('But he must have watched you, because he stops the car, climbs back to you and presses the piece of cloth at your face again. You are falling unconscious once more.');
      scene.actions([
        { label: 'Continue', goto: ['nichTaras', 'abdIntro'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'abdIntro':
      enterAbdIntro(s, scene);
      break;
    case 'katinka':
      enterKatinka(s, scene);
      break;
    case 'dungeon':
      enterDungeon(s, scene);
      break;
    case 'session':
      enterSession(s, scene);
      break;
    case 'van':
      enterVan(s, scene);
      break;
    case 'vanAbduct':
      enterVanAbduct(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichTaras: LocationDef = {
  name: 'nichTaras',
  title: 'You don\'t know how much time has passed when you finally reg',
  region: 'other',
  enter: enter,
};
