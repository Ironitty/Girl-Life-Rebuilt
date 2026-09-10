import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAfterSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dimarudorient ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['dimaHome', 'dimkaroom'] }]);
  }
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('Dimka seeing you, walks up and says quietly, "Come here slut, we\'re going to go have some fun at my place." Your cheeks redden at the gross nickname');
  if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).FedorvsDimka ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15) {
    scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Vs Dimka'] }]);
  } else {
    // TODO-QSP: dynamic text: Fedor walks up to you. "Hey <<$pcs_nickname>>, shall we go?" Dimka turns to Fedo...
    scene.text(`Fedor walks up to you. "Hey ${((s as any).pcs_nickname ?? 0)}, shall we go?" Dimka turns to Fedor. "Fedor, what are you doing here? ${((s as any).pcs_firstname ?? 0)} is my girl." Fedor raises his eyebrow. "What are you talking about? ${((s as any).pcs_firstname ?? 0)} is with me." Dimka grins at Fedor. "So let's ask her who she is dating?". You stand there fidgeting nervously`);
    return;
    scene.actions([
      { label: 'Sorry Fedor, but I\'m with Dimka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fedorKozlovQW = (-1);
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Fyodor [Fedor] Kozlov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorangry.jpg');
    scene.text('You say to Fedor "Fedor, I\'m sorry, but I\'m with Dimka." Fedor clenches his fist and he responds, "How could you use me like this? You…" then before you have a chance to respond, Fedor turns away and storms off. You want to say something, but the words stop in your troath. With a shit eating smile, Dimka take your hand and drag you away.');
    scene.actions([
      { label: 'Go to Dimka\'s room', goto: ['dimaHome', 'dimkaroom'] },
    ]);
  } },
      { label: 'I\'m with Fedor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${'Dimka Nosov'}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big1.jpg');
    scene.text('You say to Dimka "I have no interest in being with you." Dimka with a malicious grin on his face, turns to the Fedor and says, "Fedor, why are you dating this cocksucker anyways? The only reason I spend time with her is because she sucks my cock whenever I want her to do." Fedor scowls and clenches his fists, "Are you looking for an ass kicking? You better explain yourself quickly." Your heart jumps a beat fearing what can happen next');
    if (((s as any).dimaFilm ?? 0) === 1) {
      (s as any).fedorKozlovQW = (-1);
      if (((s as any).GorSlut ?? 0) < 2) {
        (s as any).GorSlut = 2;
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
      scene.text('Dimka says, "Yes, I had her in the bushes near the community center, she sucked my dick and swallowed my cum like a total pro."');
      scene.text('Fedor scowls, rage flashing in his face. Then walks right up to Dimka. "What did you just say punk?"');
      scene.text('Dimka downcasts his eyes nervously, obviously afraid of Fedor, and looking around for some type of escape, but he doesn\'t know who to shut up "Yes, it\'s true, she sucked me off outside the community center."');
      scene.text('Fedor shoves Dimka to the ground and raise his fists. Dimka begin to panic as he remembers that Fedor is a boxer, "Keep your hands off me! Why would you want to date a cocksucker like her anyway?"');
      // TODO-QSP: dynamic text: Fedor grabs Dimka by the lapels and lifts him off the ground, then rams his fist...
      scene.text(`Fedor grabs Dimka by the lapels and lifts him off the ground, then rams his fist into Dimka's stomach. "You talk shit about ${((s as any).pcs_firstname ?? 0)} again and I'll start collecting teeth."`);
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
  } },
    ]);
  }
  scene.actions([
    { label: 'Go with Dimka', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
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
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A1']} ${((s as any).npc_lastname ?? 0)?.['A1']}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  scene.text('You take several sips as you talk with Dimka. Again he doesn\'t seem to want to chat, and appears to be waiting for something. After a while you start to feel funny. For a moment you just feel numb, then you feel yourself get aroused. The heat coming from your pussy intensifying as it soaks itself. You gasp. It is almost too much to take. You desperately need someone to fuck you. "Oh, fuck". You don\'t think this is normal. He must have laced it with something. You blink a few times trying to clear your head, but soon your thoughts grow murky.');
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
  scene.actions([
    { label: 'Suck him', handler: (st: GameState) => {
    (s as any).bja = ((s as any).bja ?? 0) + (1);
    if (((s as any).maxdra ?? 0) === 0) {
      (s as any).maxdra = 1;
    }
    if (((s as any).maxdra ?? 0) === 6) {
      (s as any).maxdra = 5;
    }
    qspCall(s, 'boyStat', 'A1');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/minet.jpg');
    // TODO-QSP: dynamic text: Seeing his hard dick, you almost feel your mouth water. You don't understand wha...
    scene.text(`Seeing his hard dick, you almost feel your mouth water. You don't understand what is happening anymore, but you want to suck his cock so much right now. You walk, stumbling over, to Dimka and settle comfortably in front of him, taking his hard, hot dick in your mouth. Your lips slide down the shaft of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock and you start bobbing your head on his rod while one hand strokes his shaft and the other massages his balls. Your mind is too drugged to have any will or thought anymore.`);
    (s as any).dimadalrand = 0;
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'stat', '');
    if (((s as any).dimadalrand ?? 0) === 0) {
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/bjcum.mp4');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Suddenly, Dimka\'s cock spurts cum in your mouth and you continue sucking without care, adding spit to the mess. Finally, Dimka ceases to ejaculate and you instinctively swallow his cum.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).dimadalrand ?? 0) === 2) {
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    if (((s as any).pcs_throat ?? 0) < 16) {
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    if (((s as any).maxdra ?? 0) === 2) {
      (s as any).maxdra = 3;
    }
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/sex/facefuck0.jpg');
    if (((s as any).pcs_throat ?? 0) < 16) {
      // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn't seem to be import...
      scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as if it is the only thing in your little world. Dimka grabs you by the hair and pulls you onto his member. His hard ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock enters your throat, you choke but are too confused to really do anything about it. Dimka doesn't pay any attention to your distress, and in fact, seems to enjoy your gagging sounds. He just fucks your mouth with his hard cock. Finally the torture ends and he fills your mouth with his hot slimy sperm that you instinctively swallow.`);
    } else {
      // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn't seem to be import...
      scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as if it is the only thing in your little world. Dimka grabs you by the hair and pulls you onto his member. His hard ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock enters your throat, you resist gagging, but are too confused to really understand what he is doing. Dimka enjoys the fact that he can push his hard cock to the back of your throat and relentlessly fucks your mouth. Finally the torture ends and he cums his hot slimy sperm that you instinctively swallow.`);
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'pain', '', 2, 'throat', 'stretch');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).dimadalrand ?? 0) === 4) {
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    if (((s as any).maxdra ?? 0) === 4) {
      (s as any).maxdra = 5;
    }
    (s as any).sexa = ((s as any).sexa ?? 0) + (1);
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    scene.img('images/shared/sex/vag/miss/sex2.jpg');
    // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn't seem to be import...
    scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka puts you on the sofa on your back, your head against the back and your ass nearly hanging off. He lifts your legs up and pushes them forward until they are resting against your body. You try to get up from the awkward position, but he gives your exposed ass a slap. "Come on slut, fuck like a porn star". Grabbing your legs you complain. He presses the head of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick against the slit of your pussy and with a triumphant smile pushes himself inside.`);
    qspCall(s, 'dinsex', 'boy_puts_condom');
    qspCall(s, 'dinsex', 'vaginal_sex', 10);
    qspCall(s, 'dinsex', 'sexcum');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).dimadalrand ?? 0) === 6) {
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/cum.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. He finally pulls out of your mouth. "Open your mouth bitch." You do as he says. He starts jerking off and soon fills your mouth with his sperm, spurt after spurt landing on your tongue. With the last spurt he wipes the tip of his dick on your lips.');
    scene.text('Now open your mouth and stick out your tongue, show me my cum on your tongue. You do as you are told and sit there holding that position for some time. Finally, he nods. "Good girl, now swallow." He talks to you as if he was talking to a dog, but you do as he tells you.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    (s as any).anala = ((s as any).anala ?? 0) + (1);
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/anal.jpg');
    // TODO-QSP: dynamic text: Your sense of time seems altered, minutes?, hours?, it doesn't seem to be import...
    scene.text(`Your sense of time seems altered, minutes?, hours?, it doesn't seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka puts you on the sofa on your knees and forces your head down against the cushion. You try to get up, but he pushes his hand against your head, stopping you from moving. Then, without caring he shoves his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock against your asshole. Something sparks in your murky mind, and you reflexively move your hand between your legs. Dimka slap your hand away, stopping you. "Come on slut, show me that you like it".`);
    qspCall(s, 'dinSex', '', 'boy_wants_anal\' & gs \'dinsex', 'analsex');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    if (((s as any).maxdra ?? 0) === 3) {
      (s as any).maxdra = 4;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/sit.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka takes his dick out of your mouth and makes you get on the bed. He straddles your chest, making you suffocate under the added weight. Then, he puts his cock in your face and begins giving you little dick slaps. "Come on slut, suck like a porn star". You start to lick his balls while Dimka masturbates in your face.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/sitcum.jpg');
    scene.text('Suddenly, Dimka\'s cock starts spurting out jets of hot cum that splatter on your face, covering it in thick, viscous slime. He sighs with relief and falls on the bed, relieving the pressure in your chest and letting you breathe. With a contented smile he spreads his cum all over your confused face.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    if (((s as any).maxdra ?? 0) === 1) {
      (s as any).maxdra = 2;
    }
    (s as any).dimasexday = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/dimka/sex/face.jpg');
    scene.text('Your sense of time seems altered, minutes?, hours?, it doesn\'t seem to be important, you just keep sucking his cock as it is the only thing in your little world. Dimka suddenly pulls his dick out of your mouth and starts cumming on your face. Hot ropes of sperm land on your cheeks, nose and lips. Soon almost all of your face is covered with warm and sticky cum. You sit there confused, with a gaping mouth, trying to understand what just happen.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Clean up', goto: ['dimaEv', 'cleanup'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
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
    default:
      enterAfterSchool(s, scene);
      break;
  }
}

export const dimaEv: LocationDef = {
  name: 'dimaEv',
  title: '<<$npc_firstname[\'A1\']>> <<$npc_lastname[\'A1\']>>',
  region: 'other',
  description: ['Dimka seeing you, walks up and says quietly, "Come here slut, we\'re going to go have some fun at my place." Your cheeks redden at the gross nickname'],
  enter: enter,
};
