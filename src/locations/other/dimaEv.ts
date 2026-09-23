import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAfterSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimarudorient ?? 0) === 1) {
    qspGoto(s, 'dimaHome', 'dimkaroom');
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A1'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('Dimka seeing you, walks up and says quietly, "Come here slut, we\'re going to go have some fun at my place." Your cheeks redden at the gross nickname');
  if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).FedorvsDimka ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15) {
    qspGoto(s, 'FedorMisc', 'Fedor Vs Dimka');
  } else {
    if (((s as any).fedorKozlovQW ?? 0) >= 10  ||  ((s as any).fedorKozlovQW ?? 0) === -15) {
      // TODO-QSP: dynamic text: Fedor walks up to you. "Hey <<$pcs_nickname>>, shall we go?" Dimka turns to Fedo...
      scene.text(`Fedor walks up to you. "Hey ${((s as any).pcs_nickname ?? '')}, shall we go?" Dimka turns to Fedor. "Fedor, what are you doing here? ${((s as any).pcs_firstname ?? '')} is my girl." Fedor raises his eyebrow. "What are you talking about? ${((s as any).pcs_firstname ?? '')} is with me." Dimka grins at Fedor. "So let's ask her who she is dating?". You stand there fidgeting nervously`);
      scene.actions([
{ label: 'Sorry Fedor, but I\'m with Dimka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).fedorKozlovQW = (-1);
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('You say to Fedor "Fedor, I\'m sorry, but I\'m with Dimka." Fedor clenches his fist and he responds, "How could you use me like this? You…" then before you have a chance to respond, Fedor turns away and storms off. You want to say something, but the words stop in your troath. With a shit eating smile, Dimka take your hand and drag you away.');
    scene.actions([
      { label: 'Go to Dimka\'s room', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
{ label: 'I\'m with Fedor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.text(`<center><b>${'Dimka Nosov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You say to Dimka "I have no interest in being with you." Dimka with a malicious grin on his face, turns to the Fedor and says, "Fedor, why are you dating this cocksucker anyways? The only reason I spend time with her is because she sucks my cock whenever I want her to do." Fedor scowls and clenches his fists, "Are you looking for an ass kicking? You better explain yourself quickly." Your heart jumps a beat fearing what can happen next');
    if (((st as any).dimaFilm ?? 0) === 1) {
      (st as any).fedorKozlovQW = (-1);
      if (((st as any).GorSlut ?? 0) < 2) {
        (st as any).GorSlut = 2;
      }
      scene.text('Dimka looks at Fedor with a sinister grin, then at you. "If I have proof that she is nothing but dirty cocksucker, what would you say then?"');
      scene.text('Fedor recoils in shock, but firmly say, "You\'re lying!"');
      scene.text('Dimka\'s grin widens, "Lying huh? Check this out."');
      scene.text('Dimka take out his phone with an overly dramatic gesture, then plays a video as he holds it in front of Fedor. You began blushing when you realized which video it is. As the film progress, you see who the expression of Fedor change through a series of emotions. Rage, disbelieve, sadness and betrayal.');
      scene.text('Fedor with his face flushed turns to you, "Oh, you two-faced bitch! I never want to see you again!" He turns away from you, then stormed away. You try to stop him, but when your hand grab his arm, he slap it and push you.');
      scene.text('Dimka glares at you, "I am done with you slut, today everyone will know what a dirty cocksucker you are." Dimka laughs as he walked away from you. You remain in shock, knowing that everyone will now judge you harshly after watching that video. "Fuck, what have I done?"');
      scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
      scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
      scene.actions([
        { label: 'Leave', goto: ['pav_residential', ''] },
      ]);
    } else {
      if ((!((st as any).dimaFilm ?? 0))) {
        scene.text('Dimka says, "Yes, I had her in the bushes near the community center, she sucked my dick and swallowed my cum like a total pro."');
        scene.text('Fedor scowls, rage flashing in his face. Then walks right up to Dimka. "What did you just say punk?"');
        scene.text('Dimka downcasts his eyes nervously, obviously afraid of Fedor, and looking around for some type of escape, but he doesn\'t know who to shut up "Yes, it\'s true, she sucked me off outside the community center."');
        scene.text('Fedor shoves Dimka to the ground and raise his fists. Dimka begin to panic as he remembers that Fedor is a boxer, "Keep your hands off me! Why would you want to date a cocksucker like her anyway?"');
        // TODO-QSP: dynamic text: Fedor grabs Dimka by the lapels and lifts him off the ground, then rams his fist...
        scene.text(`Fedor grabs Dimka by the lapels and lifts him off the ground, then rams his fist into Dimka's stomach. "You talk shit about ${((st as any).pcs_firstname ?? '')} again and I'll start collecting teeth."`);
        scene.text('Dimka falls to the ground, trying to catch his breath and escape from Fedor as he crawls back. "Come on… cough… calm down… augh… I won\'t, I won\'t…"');
        scene.text('Fedor turns, leaving Dimka on the ground, then grabs your hand and leads you away. You don\'t know what is going to happen, but Fedor doesn\'t seem happy. Looking over your shoulder to the fallen form of Dimka, you suddenly realize the hotness and wetness between your legs.');
        scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
        scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
        scene.actions([
          { label: 'Go with Fedor', handler: (st: GameState) => {
    (st as any).DimaRudeBlock = 1;
  }, goto: ['FedorEv', 'Start'] },
        ]);
      }
    }
  } },
]);
      return;
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Dimka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('<center><b>Dimka\'s parent\'s house</b></center>');
    scene.img('images/locations/pavlovsk/resident/dimkahome/house.jpg');
    scene.text('You go with Dimka to his parents home, a large two-story house with a manicured lawn and a large garden. The two of you walk and chat along the way, but he seems not really interested in small talk. Once there he leads you inside and up to his room.');
    scene.actions([
      { label: 'Go to Dimka\'s room', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', 'main');
  } },
  ]);
  scene.build();
}

function enterDrugged(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'drugs', 'cocaine', 1);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A1'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('You take several sips as you talk with Dimka. Again he doesn\'t seem to want to chat, and appears to be waiting for something. After a while you start to feel funny. For a moment you just feel numb, then you feel yourself get aroused. The heat coming from your pussy intensifying as it soaks itself. You gasp. It is almost too much to take. You desperately need someone to fuck you. "Oh, fuck". You don\'t think this is normal. He must have laced it with something. You blink a few times trying to clear your head, but soon your thoughts grow murky.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['dimaEv', 'firstvisitsex'] },
  ]);
  scene.build();
}

function enterCocaine(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'drugs', 'cocaine', 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/drugs/dur.jpg');
  scene.text('You sniff up the dose of powder. For a moment you just feel numb, then you feel yourself get aroused. The heat coming from your pussy intensifying as it soaks itself. You gasp. It is almost too much to take. You desperately need someone to fuck you. "Oh, fuck". You don\'t think this is normal. He must have laced it with something. You blink a few times trying to clear your head, but soon your thoughts grow murky.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['dimaEv', 'firstvisitsex'] },
  ]);
  scene.build();
}

function enterFirstvisitsex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/pre.jpg');
  scene.text('You hear Dimka chuckling. It takes and eternity to turn your head and center your eyes on him. You see him looking at you intently, examining whatever has affected your brain. "Well, it looks like the drugs have taken full effect on you already." He stands up, unbuttons his pants and pulls out his dick, giving it a couple of strokes to get it hard for you. "Come here, baby, and suck on this." You stand there looking stupidly at his cock. He then sighs and, tapping it, says "Come on slut, here, take your bone."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck him', handler: (st: GameState) => {
    (st as any).bja = ((st as any).bja ?? 0) + (1);
    if ((!((st as any).maxdra ?? 0))) {
      (st as any).maxdra = 1;
    }
    if (((st as any).maxdra ?? 0) === 6) {
      (st as any).maxdra = 5;
    }
    qspCall(st, 'boyStat', 'A1');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/minet.jpg');
    // TODO-QSP: dynamic text: Seeing his hard dick, you almost feel your mouth water. You don''t understand wh...
    scene.text(`Seeing his hard dick, you almost feel your mouth water. You don't understand what is happening anymore, but you want to suck his cock so much right now. You walk, stumbling over, to Dimka and settle comfortably in front of him, taking his hard, hot dick in your mouth. Your lips slide down the shaft of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock and you start bobbing your head on his rod while one hand strokes his shaft and the other massages his balls. Your mind is too drugged to have any will or thought anymore.`);
    (st as any).dimadalrand = (Math.floor(Math.random() * (((st as any).maxdra ?? 0) - 0 + 1)) + (0));
    qspCall(st, 'arousal', 'bj', 15, 'sub');
    qspCall(st, 'stat', '');
    if ((!((st as any).dimadalrand ?? 0))) {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/bjcum.mp4');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Suddenly, Dimka\'s cock spurts cum in your mouth and you continue sucking without care, adding spit to the mess. Finally, Dimka ceases to ejaculate and you instinctively swallow his cum.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).dimadalrand ?? 0) === 1) {
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    if (((st as any).maxdra ?? 0) === 1) {
      (st as any).maxdra = 2;
    }
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/face.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka suddenly pulls his dick out of your mouth and starts cumming on your face. Hot ropes of sperm land on your cheeks, nose and lips. Soon almost all of your face is covered with warm and sticky cum. You sit there confused, with a gaping mouth, trying to understand what just happen.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).dimadalrand ?? 0) === 2) {
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    if (((st as any).pcs_throat ?? 0) < 16) {
      qspCall(st, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    if (((st as any).maxdra ?? 0) === 2) {
      (st as any).maxdra = 3;
    }
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/facefuck0.jpg');
    if (((st as any).pcs_throat ?? 0) < 16) {
      // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn''t seem to be impor...
      scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as if it is the only thing in your little world. Dimka grabs you by the hair and pulls you onto his member. His hard ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock enters your throat, you choke but are too confused to really do anything about it. Dimka doesn't pay any attention to your distress, and in fact, seems to enjoy your gagging sounds. He just fucks your mouth with his hard cock. Finally the torture ends and he fills your mouth with his hot slimy sperm that you instinctively swallow.`);
    } else {
      // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn''t seem to be impor...
      scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as if it is the only thing in your little world. Dimka grabs you by the hair and pulls you onto his member. His hard ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock enters your throat, you resist gagging, but are too confused to really understand what he is doing. Dimka enjoys the fact that he can push his hard cock to the back of your throat and relentlessly fucks your mouth. Finally the torture ends and he cums his hot slimy sperm that you instinctively swallow.`);
    }
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'pain', '', 2, 'throat', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
          ]);
        } else {
          if (((st as any).dimadalrand ?? 0) === 3) {
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    if (((st as any).maxdra ?? 0) === 3) {
      (st as any).maxdra = 4;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/sit.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka takes his dick out of your mouth and makes you get on the bed. He straddles your chest, making you suffocate under the added weight. Then, he puts his cock in your face and begins giving you little dick slaps. "Come on slut, suck like a porn star". You start to lick his balls while Dimka masturbates in your face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/sitcum.jpg');
    scene.text('Suddenly, Dimka\'s cock starts spurting out jets of hot cum that splatter on your face, covering it in thick, viscous slime. He sighs with relief and falls on the bed, relieving the pressure in your chest and letting you breathe. With a contented smile he spreads his cum all over your confused face.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((st as any).dimadalrand ?? 0) === 4) {
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    if (((st as any).maxdra ?? 0) === 4) {
      (st as any).maxdra = 5;
    }
    (st as any).sexa = ((st as any).sexa ?? 0) + (1);
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    scene.img('images/shared/sex/vag/miss/sex2.jpg');
    // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn''t seem to be impor...
    scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka puts you on the sofa on your back, your head against the back and your ass nearly hanging off. He lifts your legs up and pushes them forward until they are resting against your body. You try to get up from the awkward position, but he gives your exposed ass a slap. "Come on slut, fuck like a porn star". Grabbing your legs you complain. He presses the head of his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick against the slit of your pussy and with a triumphant smile pushes himself inside.`);
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
              ]);
            } else {
              if (((st as any).dimadalrand ?? 0) === 5) {
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    (st as any).anala = ((st as any).anala ?? 0) + (1);
    (st as any).dimasexday = ((st as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/anal.jpg');
    // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn''t seem to be impor...
    scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka puts you on the sofa on your knees and forces your head down against the cushion. You try to get up, but he pushes his hand against your head, stopping you from moving. Then, without caring he shoves his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock against your asshole. Something sparks in your murky mind, and you reflexively move your hand between your legs. Dimka slap your hand away, stopping you. "Come on slut, show me that you like it".`);
    qspCall(st, 'dinSex', '', 'boy_wants_anal\' & gs \'dinsex', 'analsex');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).dimadalrand ?? 0) === 6) {
                  scene.actions([
                    { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/cum.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. He finally pulls out of your mouth. "Open your mouth bitch." You do as he says. He starts jerking off and soon fills your mouth with his sperm, spurt after spurt landing on your tongue. With the last spurt he wipes the tip of his dick on your lips.');
    scene.text('Now open your mouth and stick out your tongue, show me my cum on your tongue. You do as you are told and sit there holding that position for some time. Finally, he nods. "Good girl, now swallow." He talks to you as if he was talking to a dog, but you do as he tells you.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterCleanup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).dimaFilm = 1;
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/pc/reactions/seeporn.jpg');
  scene.text('As your thoughts get more clear and you begin to get cleaned up, it seems that he is checking something on his computer. As you finish dressing he smirks at you. "Now you\'re mine, you little fucking slut. I own your ass, you got it!"');
  scene.text('At first you think he might just be joking, but then you realize he is serious. "What are you talking about?"');
  scene.text('An evil grin plays across his face. "I\'m glad you asked." Then he picks up a remote and turns on the tv. And before you know it, you see Dimka and you on the tv, he has recorded everything that happened.');
  if ((!((s as any).dimadalrand ?? 0))) {
    scene.text('How you sucked him off and drank his cum making a mess in the process. With a dopey smile in your face the entire time.');
  } else {
    if (((s as any).dimadalrand ?? 0) === 1) {
      scene.text('How you sucked him off and were drenched in his cum, making a mess in the process. With a dopey smile in your face the entire time.');
    } else {
      if (((s as any).dimadalrand ?? 0) === 2) {
        scene.text('How you were skullfucked and drank all his cum making a mess in the process. With a dopey smile in your face the entire time.');
      } else {
        if (((s as any).dimadalrand ?? 0) === 3) {
          scene.text('How you licked his balls and let him cum in your face, making a mess in the process. With a dopey smile in your face the entire time.');
        } else {
          if (((s as any).dimadalrand ?? 0) === 4) {
            scene.text('How you grabbed your legs and let him fuck you. With a dopey smile in your face the entire time.');
          } else {
            if (((s as any).dimadalrand ?? 0) === 5) {
              scene.text('How you let him assfuck you. With a dopey smile in your face the entire time.');
            } else {
              if (((s as any).dimadalrand ?? 0) === 6) {
                scene.text('How you sucked him off and showed his cum before drinking it. With a dopey smile in your face the entire time.');
              }
            }
          }
        }
      }
    }
  }
  scene.text('You are shocked. Once he sees that you understand he adds, "If you don\'t do as I say and come by here once a week to see to my needs, I will make sure everyone in school and your house gets this video."');
  scene.text('At his threat, your blood runs cold and you go pale, you know what this would mean to your reputation, not counting how your mother would react.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Run out of his house', goto: ['pav_residential', ''] },
    { label: 'Plead', goto: ['dimaEv', 'plead'] },
  ]);
  scene.build();
}

function enterPlead(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.text('<center><b>Dimka\'s Room</b></center>');
  scene.img('images/pc/reactions/tears1.jpg');
  scene.text('You start begging and pleading him not to do this and to give you the video. But laughter is all the confirmation you need that, no matter what you say he won\'t give it to you. Tears begin to spill from your eyes, as you realize you\'re trapped and powerless, a plaything for him, as long as that video exists. Not knowing what else to do, you gather your stuff and run out of his house, his laughter echoes in your ears.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Run out of his house', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterBlackmail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A1'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  (s as any).nodimkaK = 0;
  if (((s as any).dimkaWarn ?? 0) === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).dimkaWarn = 0;
    qspCall(s, 'pain', '', 2, 'neck', 'bind');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/choke.jpg');
    scene.text('After avoiding Dimka for more than a week, you finally show up at his home. You enter his room nervously, but he actually seems happy and relaxed.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, it is so good to see you. How have you been?" Dimka says jov...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, it is so good to see you. How have you been?" Dimka says jovially as he ushers you into his room and closes the door behind you. You start to relax, thinking that everything will be fine when he suddenly grabs your throat from behind.`);
    scene.text('"I told you that you belong to me and you fucking decide to avoid me, you bitch!" he snarls as he grabs your hair with his free hand and bends your neck painfully sideways, "You piece of trash. I should snap your neck right now."');
    // TODO-QSP: dynamic text: His voice changes, suddenly becoming pensive and quiet, "I could, you know, just...
    scene.text(`His voice changes, suddenly becoming pensive and quiet, "I could, you know, just add a little more pressure and, Snap! No more little ${((s as any).pcs_nickname ?? '')}." Fighting fear and suffocation you plead, "No, please Dimka, I…" `);
    scene.text('His hand on your throat tightens and you see spots in front of your eyes. Without warning, he lets go and throws you to the floor. As you lay there gasping for breath, he comes to stand over you. You recoil frightened.');
    // TODO-QSP: dynamic text: "I missed you, <<$pcs_nickname>>, you need to come see me more often." Dimka say...
    scene.text(`"I missed you, ${((s as any).pcs_nickname ?? '')}, you need to come see me more often." Dimka says gently as he helps you to your feet, "Now let's forget all this unpleasantness, shall we?"`);
    scene.text('You nod your agreement and Dimka is all smiles again, as he undresses you, you can\'t stop shaking in fear.');
    scene.actions([
      { label: 'Continue', goto: ['dimaEv', 'dimkaplays'] },
    ]);
  } else {
    if (((s as any).dimkaWarn ?? 0) >= 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).dimkaWarn = 0;
      qspCall(s, 'pain', '', 4, 'cheeks', 'hit');
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/boy/dimka/dimadrinks.jpg');
      scene.text('You enter Dimka\'s room hesitantly, unsure how he will react to your avoidance. Dimka is sitting at his desk with his back to you as you close the door behind you. You can see a half bottle of vodka on the desk along with a nearly empty glass.');
      scene.text('"Hello, Dimka." you say softly, then stand waiting.');
      scene.text('"Hello, Dimka? That is what you say?" Dimka says in a low, menacing tone, "After all I\'ve done for you? Let you into my world? Hello, Dimka?"');
      scene.text('"You fucking whore!" he roars, standing quickly and flinging his chair halfway across the room, "You useless fucking whore. You think you can come prancing in here just like that and all is forgiven?"');
      scene.text('You barely have time to register that he is moving before he grabs your lower jaw with bruising force. He spits in your face violently. "You… you… fucking whore." he screams in your face.');
      scene.text('You never felt the blow, but he must have hit you as you curl now on the floor into a ball. He grabs you by the hair and forces you into a chair.');
      scene.actions([
        { label: 'Continue', goto: ['dimaEv', 'dimkawarns'] },
      ]);
    } else {
      scene.text('The room is surprisingly clean and organized for a boys room. It is fairly tastefully decorated. Along one wall next to the bed is a wardrobe with mirrored doors, a small zebra pattern love seat sits along a wall near the bed. Next to the love seat is a mini fridge and just above that on a shelf is a stereo system. There is also a desk with a desktop computer setup on it and a laptop laying nearby as well. All in the room seems pretty expensive. Sitting at the desk is Dimka, he apparently heard you open the door as he turns to face you as you walk in.');
      scene.text('As he sees you, an evil smile spreads across his face. "So good of you to join me. Now take off your clothes. Slut."');
      scene.actions([
        { label: 'Continue', goto: ['dimaEv', 'dimkaplays'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDimkawarns(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'boyStat', 'A1');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/tiedinchair.jpg');
  // TODO-QSP: dynamic text: Dimka strips you of all your clothes, ties you securely to the chair and forces ...
  scene.text(`Dimka strips you of all your clothes, ties you securely to the chair and forces a ball gag into your mouth. He pours himself another glass of vodka and drinks it as he stares at you. You want to beg him for forgiveness, but you can only moan fearfully through the gag. Finishing his drink, he unfastens his trousers and allows them to fall to the floor. He is not wearing underwear and his dick is already hard and leaking precum as he approaches you. "I loved you, you know, but you had to ruin it." He rubs the slippery head of his cock against your vagina until he finds your entrance. "You are still mine!" he hisses as he forces his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} dick into your dry vagina. You can only cry at the sudden intrusion.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'rough', 'rape');
  qspCall(s, 'pain', '', 3, 'vaginal', 'tear');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', handler: (st: GameState) => {
    (st as any).face_write = 1;
    scene.img('images/shared/sex/dom/blowbang4.jpg');
    scene.text('The brutal rape seems to go on forever before Dimka finally achieves release. He stands panting over you then grabs hold of his mostly limp cock, points it at you, and then with a grunt, begins to empty his bladder. He directs the stream of hot piss all over your body, soaking your face and hair. You close your eyes, but the stinging liquid seeps in. Eventually, he runs out of piss and staggers away from you. Opening your eyes, you can see him rummaging through the desk. He comes back with an eyeliner pencil and uses it to write something on your forehead.');
    scene.text('"There. He says with satisfaction. All is forgiven. I will see you soon, dearest." Dimka unties you and leaves the room to take a shower. You waste no time gathering your clothes and escaping from him. You manage to make your way home and into your bathroom unseen. Criying you read between tears "Whore"');
    qspCall(st, 'arousal', 'vaginal', 10, 'rough', 'rape');
    qspCall(st, 'arousal', 'pee', 5, 'sub', 'humiliation');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'pain', '', 2, 'vaginal', 'tear');
    qspCall(st, 'pain', '', 1, 'eyes', 'burn');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaplays(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).dimarudorient = 1;
  scene.text('Dimka takes some white powder from his desk and a small straw. "Here, sniff this." He offers with a cocky smile, "It\'s really cool! Excellent for relaxing!" Knowing the blackmail he has on you, you know you don\'t really have a choice. So you do as he commands.');
  qspCall(s, 'willpower', 'drugs', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/pre.jpg');
    scene.text('You refuse to use the powder. Dimka chuckles and puts it away. "Well, okay, but you\'re missing something really cool." You sigh with relief, as seems that he doesn\'t consider this an insult and look meekly at him.');
    scene.actions([
      { label: 'Continue', goto: ['dimaEv', 'dimkaplays2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Snort', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'cocaine', 1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You sniff up the dose of powder. For a moment, you just feel numb, then you feel yourself get aroused, the heat coming from your pussy as it soaks itself, you gasp, it is almost too much to take, you desperately need someone to fuck you. "Oh, fuck". You don\'t think this is normal, he must have laced it with something. You blink a few times trying to clear your head, but soon your thoughts grow murky');
    scene.actions([
      { label: 'Continue', goto: ['dimaEv', 'dimkaplays2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaplays2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A1');
  (s as any).dimasexday = ((s as any).daystart ?? 0);
  (s as any).dimadalrand = (Math.floor(Math.random() * 13) + 0);
  qspGoto(s, 'dimaEv', 'dimkaabuse' + ((s as any).dimadalrand ?? 0) + '');
  // TODO-QSP: end
  scene.build();
}

function enterDimkaabuse0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 2, 'armR', 'bind');
  qspCall(s, 'pain', '', 2, 'armL', 'bind');
  qspCall(s, 'stat', '');
  scene.text('Dimka looks at you with an indifferent grin as he examines your body. He walked over to the closer and rummages in it, taking out a few things. He comes up to you and roughly pulls your hands behind your back. You hear the distinctive clicking of handcuffs and you feel the cold steel tighten on your wrists. He comes up to you from behind and shoves a metal ring that has leather straps attached to it into your mouth. He quickly buckles the belt tightly behind your head before you can attempt to spit out the ring.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'pain', '', 2, 'mouth', 'stretch');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/ogag.jpg');
    // TODO-QSP: dynamic text: Your mouth is being held widely open by the ring and Dimka seems a little blurry...
    scene.text(`Your mouth is being held widely open by the ring and Dimka seems a little blurry due to your eyes watering. It tastes like the ring in your mouth was dipped in lemon juice and your saliva begins streaming from your mouth. Dimka takes a moment to admire you then he takes out his iron hard ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} cock and shoves it into your mouth.`);
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    if (((st as any).pcs_makeup ?? 0) > ((st as any).makeup ?? 0)?.['base']) {
      (st as any).pcs_makeup = 0;
    }
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/gagbj.jpg');
    scene.text('Dimka\'s cock enters your mouth through the ring and drives it to the entrance to your throat. The ring prevents you from doing anything to stop him except to try to use your tongue to force him out. The actions of your tongue on his cock only seem to excite him further. You gag as the head of his dick presses up against the soft palate at the back of your mouth. Dimka pulls his cock back then with all his strength drives it deep into your throat. You choke and gag as drool flows from your mouth, mixing with your tears and snot on your face as you struggle to breath through your nose. Dimka fiercely drives his penis in your mouth, fucking your throat until it burns like fire. You almost faint from suffocation as you choke on the cock jammed deeply inside of you as it spews its slimy load down your throat. To your relief, Dimka\'s cock begins to soften and he pulls it out of you. He then takes the gag out of your mouth and uncuffs your wrists.');
    qspCall(st, 'arousal', 'bj', 15, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'pain', '', 2, 'throat', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaabuse1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).maxdradrug ?? 0) === 1) {
    (s as any).maxdradrug = 2;
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/ab.jpg');
  // TODO-QSP: dynamic text: Dimka roughly pulls off your panties and puts them on your head. He inserts his ...
  scene.text(`Dimka roughly pulls off your panties and puts them on your head. He inserts his penis into your mouth and begins to fuck you hard in the mouth. Your throat is burning with fire from the fact that his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock penetrates you nearly to the balls on every thrust. Dimka growls at you "A cocksucker's mouth is her second pussy, and what should be done with a pussy? Fuck it hard, right to the uterus!" Dimka slaps you on the cheek with his hand "Take it in your mouth pussy!" The dick in your mouth starts to cum and fills your mouth with sperm, you swallow.`);
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 2, 'throat', 'stretch');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse2(s: GameState, scene: SceneBuilder): void {
  (s as any).sexa = ((s as any).sexa ?? 0) + (1);
  if (((s as any).maxdradrug ?? 0) === 2) {
    (s as any).maxdradrug = 3;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/car.jpg');
  scene.text('Dimka binds and ties your knees with a pair of little carts, tie you up with rope, attach a steering wheel to your back, covers your face in blue clown makeup and finally, puts a clown horn in your mouth and tapes it in place. "You know. I have been asking my father for a car. He says no. That I must wait until eighteen. So… I will comfort with you." Smilling, he put himself in position to shove his dick.');
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  // TODO-QSP: dynamic text: Ignoring foreplay, Dimka push his <<dick>>cm <<$dick_girth>> cock through your v...
  scene.text(`Ignoring foreplay, Dimka push his ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock through your vaginal lips. Pain from the rape, bondage, forced position and, especially, the humiliation make you cry. "Peee." That stupid sound is the only thing that you can make. Dimka seems to enjoy it, and his laughs are probably the worst. "Peee". He tries to fuck you hard, but the wheel makes you drive away. Eventually he forces you against the wall pounding himself balls deep into your pussy, instead of moaning, you make funny clown sounds."Peee."`);
  qspCall(s, 'dinsex', 'sexcum');
  scene.text('At last he bends over you, nailing the steering wheel with his weight on your back. Pain rises all over your body. He is cumming. Then, slowly, Dimka get up, and without a word go to take a shower. You are left crying and sore. It takes a while to slowly undo all the stupid set, all the time sobbing in a corner of the room. Once Dimka end showering he walk over to you "What the fuck are you doing here".');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse3(s: GameState, scene: SceneBuilder): void {
  (s as any).anala = ((s as any).anala ?? 0) + (1);
  if (((s as any).maxdradrug ?? 0) === 3) {
    (s as any).maxdradrug = 4;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/car.jpg');
  scene.text('Dimka binds and ties your knees with a pair of little carts, tie you up with rope, attach a steering wheel to your back, covers your face in blue clown makeup and finally, puts a clown horn in your mouth and tapes it in place. "You know. I have been asking my father for a car. He says no. That I must wait until eighteen. So… I will comfort with you." Smilling, he put himself in position to shove his dick.');
  qspCall(s, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  if (((s as any).pcs_throat ?? 0) < 26) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 5);
  } else {
    if (((s as any).pcs_throat ?? 0) < 30) {
      (s as any).pcs_throat = 30;
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).maxdradrug ?? 0) === 4) {
    (s as any).maxdradrug = 5;
  }
  qspCall(s, 'pain', '', 2, 'throat', 'stretch');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/nar.jpg');
  scene.text('Dimka ties your hands tightly behind your back, then ties your legs so that they are fully folder under you. He puts a collar on you and drags you to a post where a dildo has been taped in place. Dimka makes you take the dildo in your mouth, then he ties the collar to the post so that you can not get the dildo out of your mouth. Just when you think Dimka has finished with you, he pulls the rope on your collar forcing the dildo down your throat. Dimka begins to enjoy the sight of your face reddened by suffocation, while streams of snot, saliva and tears run down your face. You choke with the dildo in your throat and you can feel that your body keeps trying to vomit. You start to fear that this is how you will die, choked with a dildo down your throat. As you start to lose consciousness, Dimka finally frees you and you are able to finally breathe freely.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse5(s: GameState, scene: SceneBuilder): void {
  (s as any).spank = ((s as any).spank ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).maxdradrug ?? 0) === 5) {
    (s as any).maxdradrug = 6;
  }
  if (((s as any).pcs_makeup ?? 0) !== 1) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/spank.jpg');
  scene.text('Dimka ties you to a pole. Then he shows you a leather whip. "You know slut. I am really am understanding individual. And what I think you need, is a little of discipline. So… Let see if I can help you." He begins to whip your ass. "One." Sharp flashes of pain burn through your drug induced euphoria and you begin screaming. "Two." You beg Dimka to stop. "Three." You sob and fight against the bonds. "Four." You understand that this is only the beginning. After several more, Dimka is satisfied and releases you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).maxdradrug ?? 0) === 6) {
    (s as any).maxdradrug = 7;
  }
  if (((s as any).pcs_makeup ?? 0) !== 1) {
    (s as any).pcs_makeup = 0;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/nip.jpg');
  scene.text('Dimka make you lie down, and binds you until you are fully immobilized. He looks at you with a pensive expression. "Ok… Hm… I think that you don\'t understand your position… Hmm, let\'s see if you can learn something" then he clamps your nipples in small vices and tightens the jaws. It hurts, but then you see what he has prepared, and cry in terror. Suddenly he stabs a needle through your nipple. You howl in pain, but Dimka spits on you as you cry and sticks in another needle forcing you to howl again. You yell and swear at this fucking sadist, but Dimka coldly continues and to your ever growing horror, connect them to a battery. Little shocks run through your body, enhancing the sensation of helplessness. After an eternity of sobbing, pain and pleading. He releases you.');
  if (((s as any).pcs_piercings ?? 0)?.['nipple'] > 0) {
    scene.text('When he gets bored of watching you in pain, Dimka pulls the needles out of your nipples and sets you free.');
    qspCall(s, 'pain', '', 7, 'nipples', 'pierce');
  } else {
    qspCall(s, 'pain', '', 9, 'nipples', 'pierce');
    qspCall(s, 'piercing_management', 'add', 'nipples', 1);
    scene.text('When he finally gets bored, Dimka pierces your nipples with metal bars, then sets you free.');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 9, 'pierce', 'tongue');
  if (((s as any).maxdradrug ?? 0) === 7) {
    (s as any).maxdradrug = 8;
  }
  if (((s as any).pcs_makeup ?? 0) !== 1) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/ton.jpg');
  scene.text('Dimka binds you until you are fully immobilized. "As a slut, you have a dirty tongue. That can\'t be, you must be clean for me. So… I am going to teach you a lesson in personal hygiene." You try to recoil in horror at the needles in his hands, but you are trapped. He grabs hold of your tongue and suddenly pushes a needle through it. You squeal and twitch from the sharp pain. Dimka amuses himself by sticking needles through your tongue, lips and cheeks. The more you howl in pain, the more excited he gets.');
  if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
    scene.text('When he gets bored of watching you in pain, Dimka pulls the needles out of your tongue and sets you free.');
  } else {
    qspCall(s, 'piercing_management', 'add', 'tongue', 1);
    scene.text('When he gets bored of watching you in pain, Dimka pulls the needles, pierces your tongue with a metal bar, then sets you free');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pain', '', 9, 'pierce', 'labia');
  if (((s as any).pcs_makeup ?? 0) !== 1) {
    (s as any).pcs_makeup = 0;
  }
  (s as any).sub = ((s as any).sub ?? 0) + (5);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/vag.jpg');
  scene.text('Dimka binds you until you are fully immobilized. "You know, a lot of people think that a piercing in the cunt enhances the pleasure during sex… Something about more blood flow… So… I was thinking, that you as my personal fucktoy need a little encouragement to come here… So let\'s begin." Then he picks up a safety pin and pricks your labia. You howled at the sharp unbearable pain, struggling against your bonds, but Dimka does not calm down until he has sealed your entire vagina with safety pins.');
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
    scene.text('When he gets bored of watching you in pain, Dimka takes the pins out of your pussy and sets you free.');
  } else {
    qspCall(s, 'piercing_management', 'add', 'pussy', 1);
    scene.text('When he gets bored of watching you in pain, Dimka takes the pins out of your pussy, pierces your clitoris, then sets you free');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse9(s: GameState, scene: SceneBuilder): void {
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  (s as any).dimaFilm = 1;
  scene.img('images/characters/pavlovsk/school/boy/dimka/sex/filming.jpg');
  scene.text('Your head is swimming at first, then you seem to be flying above the floor. Dimka smiles at you and unbuttons his pants, taking out his flaccid penis. "Crawl here bitch!" he commands. You do as he says and crawl over on your hands and knees to him.');
  // TODO-QSP: dynamic text: You sit in front of Dimka and kiss his dick, then you start to lick it carefully...
  scene.text(`You sit in front of Dimka and kiss his dick, then you start to lick it carefully with your tongue as it thickens. Finally, his member is completely erect and glistens with your saliva. You take the head of Dimka's ${((s as any).dick ?? '')}cm ${((s as any).dick_girth ?? '')} cock between your lips and slowly let it slide into your mouth.`);
  scene.text('When you look up, you see that Dimka is recording you with his camera. You giggle and make a silly face with his cock in your mouth. You begin to erotically lick his cock and began to suck it in front of the camera, trying to act as sexily as you can, pretending to be a porn star.');
  scene.text('Dimka soon groans slightly and your mouth fills with spurting jets of sperm. You immediately start to swallow the hot thick liquid. Dimka turns off the camera and puts it aside. "That was awesome. You\'re a great cocksucker."');
  qspCall(s, 'arousal', 'bj', 15, 'humiliation', 'sub');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enterDimkaabuse10(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('Dimka closed the door to his room and turned to you, "Take off your clothes."');
  scene.text('He smirks indifferently as he examines your body, then goes to the closet and rummages around in it before taking something out. He walks up to you and turns you around roughly, pulling your hands behind your back. You hear the click of handcuffs locking and you feel the cold steel on your wrists. He walks up to you and pushes a ring into your mouth before buckling the attached straps behind your head, holding it firmly in place.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A1');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/ogag.jpg');
    scene.text('Your mouth is held wide open by the ring-gag, Dimka apparently coated the ring with lemon juice, causing saliva to flow from your mouth, and there is no way to stop it.');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/gagbj.jpg');
    // TODO-QSP: dynamic text: Dimka slips his <<dick>>cm <<$dick_girth>> dick through the ring in your mouth a...
    scene.text(`Dimka slips his ${((st as any).dick ?? '')}cm ${((st as any).dick_girth ?? '')} dick through the ring in your mouth and rams it down your throat. You're choking a bit, Dimka then drives his dick as far down your throat as it will go. Drool flows from your mouth, tears from your eyes and snot from your nose. Dimka furiously drives his penis in your mouth, causing your throat to feel like it is burning.`);
    scene.text('Finally, he groans and with his cock balls deep in your mouth, he begins to cum in your throat. You almost faint from suffocation. Finally Dimka pulls his dick out of your mouth, then he takes the ring-gag out of your mouth and uncuff your hands.');
    scene.text('"Come visit me anytime."');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'humiliation', 'deepthroat', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimkaabuse11(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'dimalina', 'dimkalina0');
  // TODO-QSP: end
  scene.build();
}

function enterDimkaabuse12(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'dimalina', 'dimkalina0');
  // TODO-QSP: end
  scene.build();
}

function enterDimkaWarning(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).DimaBeHomeOnce ?? 0))) {
    (s as any).DimaBeHomeOnce = 1;
  }
  if ((!((s as any).dimkaWarn ?? 0))) {
    qspCall(s, 'mood', 'lower', 'medium');
    (s as any).DimkaWarnedToday = 1;
    (s as any).dimkaWarn = ((s as any).dimkaWarn ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big7.jpg');
    scene.text('There is a knock at your door. You open the door and are shocked to see Lesco Tsarev.');
    scene.text('"What do you want?" you ask rather more sharply than you intended.');
    scene.text('"I was told to bring this to you." Lesco replies, never taking his gaze off your chest and he hands you an envelope.');
    scene.text('"Who is it from?" you ask with a puzzled frown.');
    scene.text('"He said you\'ll know when you open it." Lesco replied, then after taking another long look at your breasts, he leaves.');
    scene.text('You turn the envelope over in your hands. It only has your name written on the front with the word "Private". You open it and find pictures of you sucking a dick. You realize these are from the video that Dimka made that first time you went to his house.');
    // TODO-QSP: dynamic text: On the back of one of the pictures you find a note. "<<$pcs_nickname>>, come see...
    scene.text(`On the back of one of the pictures you find a note. "${((s as any).pcs_nickname ?? '')}, come see me or the next envelope will be for your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}." There is no signature.`);
    scene.actions([
      { label: 'Move away', goto: ['korrPar', ''] },
    ]);
  } else {
    if (((s as any).dimkaWarn ?? 0) >= 1) {
      qspCall(s, 'mood', 'lower', 'medium');
      (s as any).DimkaWarnedToday = 1;
      (s as any).dimkaWarn = ((s as any).dimkaWarn ?? 0) + (1);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/shared/mail/package_receive2.jpg');
      scene.text('You go into the hallway and see a package on the cabinet near the mirror. Curious, you look to see who it is from and see that it is addressed to your mother. You feel horror wash over you as you recognize the handwriting as well as the "Private" written on the box as being Dimka\'s.');
      scene.text('Grabbing the package, you take it into the bathroom and carefully open it, trying not to damage the wrapping. Fortunately, Dimka only used very small pieces of tape to seal the box so you were able to open it. As you feared, the box contains copies of the pictures from the video, only this time your face is blacked out as is the background, making it impossible to tell who it is in the picture. You rip up the pictures into very small pieces and flush them down the toilet. Taking some sample shampoo bottles you got at the market the other day, you put them in the box and reseal it.');
      scene.text('Taking the resealed package, you put it back on the cabinet before returning to the corridor.');
      scene.actions([
        { label: 'Leave', goto: ['korrPar', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'after_school':
      enterAfterSchool(s, scene);
      break;
    case 'drugged':
      enterDrugged(s, scene);
      break;
    case 'cocaine':
      enterCocaine(s, scene);
      break;
    case 'firstvisitsex':
      enterFirstvisitsex(s, scene);
      break;
    case 'cleanup':
      enterCleanup(s, scene);
      break;
    case 'plead':
      enterPlead(s, scene);
      break;
    case 'blackmail':
      enterBlackmail(s, scene);
      break;
    case 'dimkawarns':
      enterDimkawarns(s, scene);
      break;
    case 'dimkaplays':
      enterDimkaplays(s, scene);
      break;
    case 'dimkaplays2':
      enterDimkaplays2(s, scene);
      break;
    case 'dimkaabuse0':
      enterDimkaabuse0(s, scene);
      break;
    case 'dimkaabuse1':
      enterDimkaabuse1(s, scene);
      break;
    case 'dimkaabuse2':
      enterDimkaabuse2(s, scene);
      break;
    case 'dimkaabuse3':
      enterDimkaabuse3(s, scene);
      break;
    case 'dimkaabuse4':
      enterDimkaabuse4(s, scene);
      break;
    case 'dimkaabuse5':
      enterDimkaabuse5(s, scene);
      break;
    case 'dimkaabuse6':
      enterDimkaabuse6(s, scene);
      break;
    case 'dimkaabuse7':
      enterDimkaabuse7(s, scene);
      break;
    case 'dimkaabuse8':
      enterDimkaabuse8(s, scene);
      break;
    case 'dimkaabuse9':
      enterDimkaabuse9(s, scene);
      break;
    case 'dimkaabuse10':
      enterDimkaabuse10(s, scene);
      break;
    case 'dimkaabuse11':
      enterDimkaabuse11(s, scene);
      break;
    case 'dimkaabuse12':
      enterDimkaabuse12(s, scene);
      break;
    case 'Dimka_warning':
      enterDimkaWarning(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dimaEv: LocationDef = {
  name: 'dimaEv',
  region: 'other',
  enter: enter,
};
