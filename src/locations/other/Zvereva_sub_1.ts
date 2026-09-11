import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChrisSub(s: GameState, scene: SceneBuilder): void {
  ((s as any).socialchg ?? {})['tChristina_day'] = ((s as any).daystart ?? 0);
  if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.img('images/characters/shared/headshots_main/big18.jpg');
      scene.text('"Hey Christina, can I talk to you about something?"');
      // TODO-QSP: dynamic text: She turns and looks at you, apparently annoyed. "What do you want <<$pcs_nicknam...
      scene.text(`She turns and looks at you, apparently annoyed. "What do you want ${((s as any).pcs_nickname ?? 0)}? Can't you see I'm busy trying to get this lazy ass sloth to perform better?" Christina sourly answers. "We lost the last relay race thanks to her and now I've got to whip her into shape before the next one."`);
      scene.text('"I asked Lariska if she wanted to hang out with me outside of school, but she said only if you approved it."');
      scene.text('"Now why would I do that? I have her trained good and spending time with you would just corrupt her."');
      scene.text('You take a submissive posture and tone. "Please? If there is anything I can do to change your mind, I will."');
      scene.text('A bit surprised by your response, she carefully looks you up and down before replying. "Get naked. Right here, right now. Prove to me you really want this!"');
      scene.text('Startled, you look up to see if she was serious, and you can tell with just a glance that she most definitely is.');
      scene.text('"Now bitch, or get lost!"');
      scene.actions([
        { label: 'Run away', goto: ['pav_lake', ''] },
        { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/strip.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('You hesitantly start taking your clothes off as Christina watches you impassively while Lina stands behind her, looking at you in shock.');
    scene.text('When you stand before completely naked, she pulls out her phone and starts taking pictures.');
    scene.text('"You don\'t mind if I take some pictures and send them to everyone, right? They\'re going to love seeing these."');
    scene.text('You panic when you realize what this means. This could ruin your reputation!');
    if (((s as any).pcs_inhib ?? 0) > 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 3);
    } else {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    ((s as any).LariskaQW ?? {})['story'] = 4;
    (s as any).sauna_stripped = 0;
    qspCall(s, 'outfit', 'strip_all');
    ((s as any).christinaQW ?? {})['subpath'] = 2;
    ((s as any).christinaQW ?? {})['submit'] = 1;
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Beg her not to', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/coverupnaked.jpg');
    scene.text('Panic sets in as you try and cover yourself as best as you can. "Please Christina, don\'t send those pictures to anyone!" you beg.');
    scene.text('Christina laughs and looks at Lina. "Can you believe this whiny little bitch? She asks for my approval and now she\'s begging for help."');
    scene.text('Lina starts laughing too before Christina looks back at you. "I might be persuaded not to share these. But if I agree, then I own you, you understand?"');
    scene.text('"O-Own me?" you ask, a little confused.');
    scene.text('"Yeah that\'s right bitch, I\'ll own you!" she snarls. "If tell you to do my homework, you will. If I tell you to lick my shoes clean, you will. If I tell you to stick a bottle up your ass, you will. Got it?"');
    scene.text('You feel the blood drain from your face as you realize she\'s serious, and will likely torment you for the rest of the school year. It will save your reputation though, and Lariska will be allowed to hang out with you.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'pain', '', 1, 'labia', 'kick');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/christina/beach/onall4s.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('"That\'s right bitch, from now on I own your ass. Turn around and get on your hands and knees." You reluctantly do as you\'re told.');
    scene.text('She walks up behind you. "Now spread those legs so we can get a nice shot of that disgusting pussy and dirty ass of yours." You blush with shame as she takes several more pictures, laughing the whole time. "You\'re going to do anything I want, whenever I want, or everyone in school will see these pictures." You meekly nod, on the verge of tears.');
    scene.text('You cry out when Christina suddenly kicks you hard in the crotch. Tears start running down your cheeks as you grab your crotch and roll onto your side with your legs squeezed closed. "Then say it! Say you\'re a little cunt and will do anything I say, anytime I say it!" she demands as she towers over you.');
    scene.text('"I\'m a little cunt… that will do anything you say… anytime you say it…" you croak out and Christina laughs mockingly. She seems to be enjoying herself a lot. She and Lina then walk off, leaving you lying on the beach, naked and in pain. Once they\'re gone, you dry your tears as best as you can before get up and get dressed.');
    if (((s as any).cheatVars ?? 0)?.['doormat_disabled'] === 0) {
      ((s as any).trait_vars ?? {})['doormat_exp'] = (((s as any).trait_vars ?? {})['doormat_exp'] ?? 0) + (2);
      if (((s as any).trait_vars ?? 0)?.['doormat'] < 1) {
        qspCall(s, 'traits', 'level', 'doormat', 1);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
  }, goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/lake/event/talknaked.jpg');
      scene.text('"Hey Christina, can I talk to you about something?"');
      scene.text('She turns and opens her mouth, but noticing you are naked, she seems too surprised to form the words she was going to say.');
      scene.text('She bursts out laughing and walks towards you. Lina is confused until she realizes what Christina is laughing at, then joins in as she follows Christina over. "Don\'t you have any shame, you fucking slut?"');
      scene.text('"Yeah." Lina adds half heartedly. You think she\'s just doing it to make Christina happy.');
      scene.text('Christina looks you over head to toe with a look of disgust on her face. "Maybe this is the only way you can get guys to even look at you, hag."');
      scene.text('She then pulls out her phone and starts taking pictures. "You don\'t mind if I take some pictures and send them to everyone, right? They\'re going to love seeing these."');
      scene.text('You panic when you realize what this means. This could ruin your reputation!');
      qspCall(s, 'fame', 'pav', 'sex', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Run away', goto: ['pav_lake', ''] },
        { label: 'Submit and beg', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/coverupnaked.jpg');
    scene.text('Panic sets in as you try and cover yourself as best as you can. "Please Christina, don\'t send those pictures to anyone!" you beg.');
    scene.text('Christina laughs and looks at Lina. "Can you believe this whiny little bitch? She asks for my approval and now she\'s begging for help."');
    scene.text('Lina starts laughing too before Christina looks back at you. "I might be persuaded not to share these. But if I agree, then I own you, you understand?"');
    scene.text('"O-Own me?" you ask, a little confused.');
    scene.text('"Yeah that\'s right bitch, I\'ll own you!" she snarls. "If tell you to do my homework, you will. If I tell you to lick my shoes clean, you will. If I tell you to stick a bottle up your ass, you will. Got it?"');
    scene.text('You feel the blood drain from your face as you realize she\'s serious, and will likely torment you for the rest of the school year. It will save your reputation though.');
    scene.text('"Will you tell Lariska she can hang out with me outside of school if I do?"');
    scene.text('"Sure, she can help train you…" she says evilly.');
    ((s as any).christinaQW ?? {})['submit'] = 1;
    ((s as any).christinaQW ?? {})['subpath'] = 2;
    ((s as any).LariskaQW ?? {})['story'] = 4;
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'pain', '', 1, 'labia', 'kick');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/christina/beach/onall4s.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('"That\'s right bitch, from now on I own your ass. Turn around and get on your hands and knees." You reluctantly do as you\'re told.');
    scene.text('She walks up behind you. "Now spread those legs so we can get a nice shot of that disgusting pussy and dirty ass of yours." You blush with shame as she takes several more pictures, laughing the whole time. "You\'re going to do anything I want, whenever I want, or everyone in school will see these pictures." You meekly nod, on the verge of tears.');
    scene.text('You cry out when Christina suddenly kicks you hard in the crotch. Tears start running down your cheeks as you grab your crotch and roll onto your side with your legs squeezed closed. "Then say it! Say you\'re a little cunt and will do anything I say, anytime I say it!" she demands as she towers over you.');
    scene.text('"I\'m a little cunt… that will do anything you say… anytime you say it…" you croak out and Christina laughs mockingly. She seems to be enjoying herself a lot. She and Lina then walk off, leaving you lying on the beach, naked and in pain. Once they\'re gone, you dry your tears as best as you can before get up and get dressed.');
    if (((s as any).cheatVars ?? 0)?.['doormat_disabled'] === 0) {
      ((s as any).trait_vars ?? {})['doormat_exp'] = (((s as any).trait_vars ?? {})['doormat_exp'] ?? 0) + (2);
      if (((s as any).trait_vars ?? 0)?.['doormat'] < 1) {
        qspCall(s, 'traits', 'level', 'doormat', 1);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      scene.img('images/characters/shared/headshots_main/big18.jpg');
      scene.text('"Hey Christina, what are you two up to?"');
      // TODO-QSP: dynamic text: She turns and looks at you, apparently annoyed. "What do you want <<$pcs_nicknam...
      scene.text(`She turns and looks at you, apparently annoyed. "What do you want ${((s as any).pcs_nickname ?? 0)}? Can't you see I'm busy trying to get this lazy ass sloth to perform better?" Christina sourly answers. "We lost the last relay race thanks to her and now I've got to whip her into shape before the next one."`);
      scene.text('"You\'re lucky she spends so much time working with you, Lina. Pay attention to what she says and you could be a great runner someday," you suck up, trying to draw Christina\'s attention.');
      // TODO-QSP: dynamic text: Christina looks at you in surprise, not expecting you to compliment her. "No <<$...
      scene.text(`Christina looks at you in surprise, not expecting you to compliment her. "No ${((s as any).pcs_nickname ?? 0)}, I won't train you too. I have my hands full with this one."`);
      scene.text('"Please? I would train hard, and listen to anything you say," you beg.');
      scene.text('"Grovel, and maybe I\'ll consider it. Maybe," she says with a sinister look on her face.');
      scene.text('"Oh, I… uh… okay." Dropping to your knees in the sand, you look up at her with a pleading expression on your face. "Please train me to be a fast runner, mistress."');
      scene.text('"You call that groveling? Pathetic. Apparently I\'ll have to teach you how to beg too. Remove your clothes."');
      scene.actions([
        { label: 'Change your mind', goto: ['pav_lake', ''] },
        { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/strip.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('You hesitantly start taking your clothes off as Christina watches you impassively while Lina stands behind her, looking at you in shock.');
    scene.text('When you stand before completely naked, she pulls out her phone and starts taking pictures.');
    scene.text('"You don\'t mind if I take some pictures and send them to everyone, right? They\'re going to love seeing these."');
    scene.text('You panic as you realize she\'s tricked you, and will probably ruin your reputation too.');
    if (((s as any).pcs_inhib ?? 0) > 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 3);
    } else {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    (s as any).sauna_stripped = 0;
    qspCall(s, 'outfit', 'strip_all');
    ((s as any).christinaQW ?? {})['subpath'] = 2;
    ((s as any).christinaQW ?? {})['submit'] = 1;
    qspCall(s, 'fame', 'pav', 'sex', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Beg her not to', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/coverupnaked.jpg');
    scene.text('Panic sets in as you try and cover yourself as best as you can. "Please Christina, don\'t send those pictures to anyone!" you beg.');
    scene.text('Christina laughs and looks at Lina. "Can you believe this whiny little bitch? She asks for my approval and now she\'s begging for help."');
    scene.text('Lina starts laughing too before Christina looks back at you. "I might be persuaded not to share these. But if I agree, then I own you, you understand?"');
    scene.text('"O-Own me?" you ask, a little confused.');
    scene.text('"Yeah that\'s right bitch, I\'ll own you!" she snarls. "If tell you to do my homework, you will. If I tell you to lick my shoes clean, you will. If I tell you to stick a bottle up your ass, you will. Got it?"');
    scene.text('You feel the blood drain from your face as you realize she\'s serious, and will likely torment you for the rest of the school year. It will save your reputation though.');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'pain', '', 1, 'labia', 'kick');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/christina/beach/onall4s.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('"That\'s right bitch, from now on I own your ass. Turn around and get on your hands and knees." You reluctantly do as you\'re told.');
    scene.text('She walks up behind you. "Now spread those legs so we can get a nice shot of that disgusting pussy and dirty ass of yours." You blush with shame as she takes several more pictures, laughing the whole time. "You\'re going to do anything I want, whenever I want, or everyone in school will see these pictures." You meekly nod, on the verge of tears.');
    scene.text('You cry out when Christina suddenly kicks you hard in the crotch. Tears start running down your cheeks as you grab your crotch and roll onto your side with your legs squeezed closed. "Then say it! Say you\'re a little cunt and will do anything I say, anytime I say it!" she demands as she towers over you.');
    scene.text('"I\'m a little cunt… that will do anything you say… anytime you say it…" you croak out and Christina laughs mockingly. She seems to be enjoying herself a lot.');
    scene.text('"Oh, I\'m going to train you, but not to be a runner. You\'re going to be my new pet instead." She laughs before her and Lina walk off, leaving you lying on the beach, naked and in pain. Once they\'re gone, you dry your tears as best as you can, get up and get dressed.');
    if (((s as any).cheatVars ?? 0)?.['doormat_disabled'] === 0) {
      ((s as any).trait_vars ?? {})['doormat_exp'] = (((s as any).trait_vars ?? {})['doormat_exp'] ?? 0) + (2);
      if (((s as any).trait_vars ?? 0)?.['doormat'] < 1) {
        qspCall(s, 'traits', 'level', 'doormat', 1);
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'outfit', 'wear_last_worn');
  }, goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/lake/event/talknaked.jpg');
      scene.text('"Hey Christina, what are you two doing?"');
      scene.text('She turns and opens her mouth, but noticing you are naked, she seems too surprised to form the words she was going to say.');
      scene.text('She bursts out laughing and walks towards you. Lina is confused until she realizes what Christina is laughing at, then joins in as she follows Christina over. "Don\'t you have any shame, you fucking slut?"');
      scene.text('"Yeah." Lina adds half heartedly. You think she\'s just doing it to make Christina happy.');
      scene.text('Christina looks you over head to toe with a look of disgust on her face. "Maybe this is the only way you can get guys to even look at you, hag."');
      scene.text('She then pulls out her phone and starts taking pictures. "You don\'t mind if I take some pictures and send them to everyone, right? They\'re going to love seeing these."');
      scene.text('You panic when you realize what this means. This could ruin your reputation!');
      qspCall(s, 'fame', 'pav', 'sex', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Run away', goto: ['pav_lake', ''] },
        { label: 'Submit and beg', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/coverupnaked.jpg');
    scene.text('Panic sets in as you try and cover yourself as best as you can. "Please Christina, don\'t send those pictures to anyone!" you beg.');
    scene.text('Christina laughs and looks at Lina. "Can you believe this whiny little bitch? She asks for my approval and now she\'s begging for help."');
    scene.text('Lina starts laughing too before Christina looks back at you. "I might be persuaded not to share these. But if I agree, then I own you, you understand?"');
    scene.text('"O-Own me?" you ask, a little confused.');
    scene.text('"Yeah that\'s right bitch, I\'ll own you!" she snarls. "If tell you to do my homework, you will. If I tell you to lick my shoes clean, you will. If I tell you to stick a bottle up your ass, you will. Got it?"');
    scene.text('You feel the blood drain from your face as you realize she\'s serious, and will likely torment you for the rest of the school year. It will save your reputation though.');
    scene.text('"Will you tell Lariska she can hang out with me outside of school if I do?"');
    scene.text('"Sure, she can help train you…" she says evilly.');
    ((s as any).christinaQW ?? {})['submit'] = 1;
    ((s as any).christinaQW ?? {})['subpath'] = 2;
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'small');
    qspCall(s, 'pain', '', 1, 'labia', 'kick');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/christina/beach/onall4s.jpg');
    scene.text('You reluctantly nod your head and meekly agree. "Okay…"');
    scene.text('"That\'s right bitch, from now on I own your ass. Turn around and get on your hands and knees." You reluctantly do as you\'re told.');
    scene.text('She walks up behind you. "Now spread those legs so we can get a nice shot of that disgusting pussy and dirty ass of yours." You blush with shame as she takes several more pictures, laughing the whole time. "You\'re going to do anything I want, whenever I want, or everyone in school will see these pictures." You meekly nod, on the verge of tears.');
    scene.text('You cry out when Christina suddenly kicks you hard in the crotch. Tears start running down your cheeks as you grab your crotch and roll onto your side with your legs squeezed closed. "Then say it! Say you\'re a little cunt and will do anything I say, anytime I say it!" she demands as she towers over you.');
    scene.text('"I\'m a little cunt… that will do anything you say… anytime you say it…" you croak out and Christina laughs mockingly. She seems to be enjoying herself a lot. She and Lina then walk off, leaving you lying on the beach, naked and in pain. Once they\'re gone, you dry your tears as best as you can before get up and get dressed.');
    if (((s as any).cheatVars ?? 0)?.['doormat_disabled'] === 0) {
      ((s as any).trait_vars ?? {})['doormat_exp'] = (((s as any).trait_vars ?? {})['doormat_exp'] ?? 0) + (2);
      if (((s as any).trait_vars ?? 0)?.['doormat'] < 1) {
        qspCall(s, 'traits', 'level', 'doormat', 1);
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('"Well, Bitch. Since you get into trouble with your mouth so much, I brought you a present to keep it occupied. You can thank me later."');
    // TODO-QSP: dynamic text: Christina pulls a dildo out of her sports bag, and sticks it on the shower wall ...
    scene.text(`Christina pulls a dildo out of her sports bag, and sticks it on the shower wall at groin level. "Start sucking, ${((s as any).pcs_nickname ?? 0)}, if you do a good job maybe I'll forgive you. Or do you want me to kick your face in again?"`);
  } else {
    scene.text('"Well, Bitch. Since I own you now, it\'s time to start training you."');
    // TODO-QSP: dynamic text: Christina pulls a dildo out of her sports bag, and sticks it on the shower wall ...
    scene.text(`Christina pulls a dildo out of her sports bag, and sticks it on the shower wall at groin level. "Start sucking, ${((s as any).pcs_nickname ?? 0)}, if you do a good job maybe I'll reward you.`);
  }
  scene.actions([
    { label: 'Suck on the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj.jpg');
    if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('You stare at her a moment, but the memory of her beating your ass is too fresh for you to resist. You squat down in front of the dildo, and take it in your hands before carefully licking it and closing your lips around it. You expected an awful rubber taste, but it\'s actually not that bad. You give the dildo a blowjob as all the girls in your class watch you, while Christina laughs. After a few minutes, she has seen enough and allows you to change.');
    } else {
      scene.text('You nod obediently, not wanting to anger her. You squat down in front of the dildo, and take it in your hands before carefully licking it and closing your lips around it. You expected an awful rubber taste, but it\'s actually not that bad. You give the dildo a blowjob as all the girls in your class watch you, while Christina laughs. After a few minutes, she has seen enough and allows you to change.');
    }
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 1;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('"Bitch, it\'s no wonder I kicked your ass so easily. Your body looks like you only do girly sports, you should bulk up a bit."');
  } else {
    scene.text('"Bitch, since I own your wimpy little body, it\'s time I bulked it up a bit."');
  }
  // TODO-QSP: dynamic text: Christina pulls a dildo out of her sports bag, puts a stone on the floor and sti...
  scene.text(`Christina pulls a dildo out of her sports bag, puts a stone on the floor and sticks the dildo on top of it. "Get down there, ${((s as any).pcs_nickname ?? 0)}. Do some push-ups while you suck on it, you could use the workout."`);
  scene.actions([
    { label: 'Suck on the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj2.jpg');
    scene.text('You nod obediently, not wanting to anger her. You kneel down in front of the dildo, and take it in your hands before carefully licking it and closing your lips around it. Then you stretch your body and rest your hands next to the stone before pushing yourself up. The dildo makes you have to push up higher than you normally would, and after only a few your arms get tired. As you struggle to keep your weight up, the dildo is driven further and further down your throat.');
    scene.text('All of the girls in your class watch you do your best to not choke on the dildo while Christina laughs evilly, and after a few more push-ups Christina has seen enough and allows you to stop and change.');
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation', 'deepthroat');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 2;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  if (((s as any).christinaQW ?? 0)?.['fight'] === -1) {
    scene.text('Christina takes the by now familiar dildo out of her sports bag again, and tells you to squat. Afraid to stand up against her after what happened last time, you do as she says.');
  } else {
    scene.text('Christina takes the by now familiar dildo out of her sports bag again, and tells you to squat. Afraid to disappoint her, you do as she says.');
  }
  scene.text('She sticks the dildo right in front of you and says "Don\'t move your feet, bitch. Those stay where they are. I don\'t care how you do it, but I want to see your lips around that dildo. Someone, help her out."');
  scene.actions([
    { label: 'Suck on the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj3.jpg');
    scene.text('No moving your feet… this is going to be tricky. You spread your legs and awkwardly bend over, while one of the girls in your class holds the dildo up straight to help you out a little. Once you close your lips around it she pulls away, while you do your best to give the dildo a blowjob in this awkward position.');
    scene.text('After a while, Christina nods approvingly. "Not bad, bitch. You\'re getting good at this. Go get changed, I\'ll have to think of something more challenging for you for next time."');
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 3;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina smiles at you when she reaches into her bag. "You\'ve been doing such a good job, bitch. I feel like you need a bigger challenge."');
  // TODO-QSP: dynamic text: She pulls out not one, but three dildos and sticks them all on a large mirror at...
  scene.text(`She pulls out not one, but three dildos and sticks them all on a large mirror at groin level. "Go ahead ${((s as any).pcs_nickname ?? 0)}, get to work. Make sure none of them feel left out."`);
  scene.actions([
    { label: 'Suck on the dildos', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj4.jpg');
    scene.text('You get down on your knees in front of the middle dildo, and take it in your mouth. You close your lips around it and begin to suck it off, while rhythmically stroking the other two with your hands. You hear the girls of your class quietly whisper things amongst each other while you do what you\'re told, and while Christina applauds you. "Very nice, bitch! Very nice! You\'re a natural! Or is this just something you do on a regular basis?"');
    scene.text('After a few minutes, she allows you to get changed.');
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 4;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina laughs at you. "I see that worried look in your eyes! Don\'t worry bitch, I didn\'t forget about your big friend."');
  scene.text('She pulls the familiar dildo out of her bag, and sticks it against the large mirror in the locker room with an evil grin.');
  // TODO-QSP: dynamic text: She taunts you, saying "Do you even know how big of a slut you are, <<$pcs_nickn...
  scene.text(`She taunts you, saying "Do you even know how big of a slut you are, ${((s as any).pcs_nickname ?? 0)}? Of course you don't… so I will show you. I want you to look yourself in the eye as you suck it off. Get to it."`);
  scene.actions([
    { label: 'Suck on the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj5.jpg');
    scene.text('You get down on your haunches, and obediently lick the dildo before taking it in your mouth. You look yourself in the eye the whole time as instructed, and are intrigued by the look… this must be what you look like when you suck a guy off. Rather fascinated by the concept, you try to do some different things with your lips, and test out a few facial expressions.');
    scene.text('Hearing the whispers of your classmates suddenly remind you that you\'re not alone here, there are a dozen girls watching you! Your face turns crimson red, and when Christina tells you can stop, you do so immediately, feeling deeply embarrassed.');
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 5;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina stands in the middle of the locker room and says "Bitch, come over here."');
  scene.text('Expecting her to stick a dildo on a wall or mirror or something, you\'re confused. As you walk over to her, she gives you a larger dildo than before. "Take it and start sucking." Christina steps back as you take the dildo from her hands, while all the girls look at you expectantly.');
  scene.actions([
    { label: 'Suck on the large dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj6.jpg');
    scene.text('You move the dildo to your mouth, and slowly lick the head a few times. Urgh, this one tastes awful. Nevertheless, you don\'t want to face the consequences for refusing so you open your mouth as wide as you can, and barely manage to get the dildo past your lips. It\'s too big to go down your throat, so you spend the next few minutes licking it and sucking on the tip, while the girls encourage you. After a few minutes, Christina says you can stop.');
    qspCall(s, 'arousal', 'dildo_suck', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    (s as any).zverhumiliation = 6;
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina stops right in front of you. You notice she doesn\'t have her sports bag in her hands like usual.');
  scene.text('"Alright, bitch. We\'re doing something a little different today. Show us your smelly pussy. Now!"');
  scene.actions([
    { label: 'Obey', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj7.jpg');
    scene.text('Knowing better than to disobey, you obediently sit down on the floor and spreads your legs wide. Then you move your fingers to your pussy lips and pull them aside, opening your pussy for Christina and the rest of the girls to see.');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"I\'m a virgin," you say softly.');
      scene.text('Christina looks surprised. "Still a virgin? How unexpected. Alright, I\'m nothing if not flexible. We\'ll work on your ass skills instead then. You will need them later…"');
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).zverhumiliation = 7;
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
      if (((s as any).pcs_ass ?? 0) < 15) {
        if (((s as any).pcs_ass ?? 0) < 5) {
          (s as any).agape = 1;
        }
        scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj9.jpg');
        // TODO-QSP: 'She grabs her bag and throws a dildo your way. ' + $OpenInnerThought + 'Wait. She expects me to put...
        scene.text('You try for a minute, but your suspicions were right… it doesn\'t fit. Christina sees your helpless look and says "Fine, use your fingers instead. But you better make a good show of it, or else!"');
        // TODO-QSP: dynamic text: You do as she says, slowly licking your fingers before slowly sliding one up you...
        scene.text(`You do as she says, slowly licking your fingers before slowly sliding one up your butthole. Once you get used to it you add a second, but Christina is already bored by then. She tells you to get dressed, and then threatens you. "That was weak, ${((s as any).pcs_lastname ?? 0)}. I'll definitely be expecting a better effort from you next time."`);
        qspCall(s, 'arousal', 'anal_finger', 10, 'sub', 'humiliation');
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).pcs_ass ?? 0) >= 15  &&  ((s as any).pcs_ass ?? 0) < 25) {
          scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj10.jpg');
          scene.text('She grabs her bag and throws a dildo your way. You\'re relieved to see it\'s not the huge one, this one should fit okay.');
          // TODO-QSP: dynamic text: You lean backwards and after you spit on the dildo a few times, move it against ...
          scene.text(`You lean backwards and after you spit on the dildo a few times, move it against your backside. All of the girls from your class watch you attentively as you slowly work the head in, and then begin to fuck your ass with it. Christina smiles and says "You're quite good at taking stuff up your butt, ${((s as any).pcs_nickname ?? 0)}. How is this so easy for you? Do you practice on a daily basis or something?"`);
          scene.text('After a while Christina has seen enough, and allows you to change.');
          qspCall(s, 'arousal', 'anal_dildo', 10, 'sub', 'humiliation');
          qspCall(s, 'arousal', 'end');
        } else {
          scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj11.jpg');
          scene.text('She grabs her bag and throws a dildo your way. By now you\'ve had bigger things up there, this shouldn\'t be too hard.');
          scene.text('You do as you\'re told and ease the dildo into your ass. As you thought, it\'s no challenge and it slides in rather easily.');
          scene.text('Christina notices, and says "Too easy, bitch! That dildo is too small for your broken ass. Give it back and use your hand instead!"');
          scene.text('You meekly obey and give the dildo back, before you slowly begin to work your entire hand into your asshole. The other girls in your class are stunned by your performance, but Christina indifferently moves up to you and gives your wrists a few light tugs, watching your sphincter stretch to its limits around it. "Very nice, bitch. Much better."');
          scene.text('She then allows you to get dressed and leave.');
          qspCall(s, 'arousal', 'anal_fist', 10, 'sub', 'humiliation');
          qspCall(s, 'arousal', 'end');
        }
      }
    } else {
      scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj12.jpg');
      scene.text('After Christina invites some of the other girls over to have a closer look as well, she nods contently as she tosses you her dildo.');
      scene.text('"Good bitch. Now show us what you can do with it".');
      scene.text('You nod obediently and stick the dildo onto the tiled floor. Then you squat over it, guiding its head to your snatch. You sink yourself down on it until it\'s mostly inside you, and begin to ride it. The other girls watch you intently as you slowly increase the tempo… you can see one or two of them squirming in their seats.');
      if (((s as any).pcs_horny ?? 0) >= 100) {
        qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
        qspCall(s, 'pain', '', 2, 'face', 'slap');
        scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "Bad bitch! Whores don\'t get to cum on my dildo!"');
      }
      scene.text('After a few minutes, Christina tells you to stop and wash the dildo before handing it back to her. With your tongue. You quickly lick your juices off and hand it back, and she then allows you to get changed. Some girls avoid your gaze, the blush on their faces telling you that they definitely enjoyed today\'s show.');
      qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina walks towards the showers, and sticks a dildo to the wall at groin level. When you automatically walk up to it and move to kneel, she stops you. "No no, bitch. No mouth today, you ride it." You can tell your classmates are getting restless, obviously they are expecting today\'s show to be good.');
  scene.actions([
    { label: 'Fuck your pussy with it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj13.jpg');
    scene.text('Ride it… hmm. After you take a second to see how you could best approach this, Christina slaps your ass with a towel. "Today, bitch."');
    scene.text('Okay, okay. You turn your back towards the dildo, letting it rest in your ass crack before you bend over. One of the other girls quickly moves a bench over for you to rest your hands on, and you give her a grateful smile as you bend over further and guide the dildo into your pussy. You can feel your pussy getting wetter and wetter from the sensations, and within minutes the showers are filled with the squishy sound of your pussy getting filled by the dildo over and over.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "Bad bitch! Whores don\'t get to cum on my dildo!"');
    }
    scene.text('After a few minutes, Christina tells you to stop and to wash the dildo before giving it back to her. With your tongue. You quickly lick your juices off and hand it back, and then you\'re allowed to get changed.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina grabs your face with her hand, squishing your cheeks together: "What\'s that, bitch? You\'re scared I forgot about your best rubber buddy? Don\'t worry, it\'s right here!"');
  scene.text('She pulls the dildo out of her bag and sticks it onto the floor. With an evil grin she says "Go ahead bitch, hop on. I know you want to."');
  scene.actions([
    { label: 'Ride the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj14.jpg');
    scene.text('You try to hide your smile. You have gotten used to the idea that this is how gym class will be from now on, and today\'s assignment looks like it could even be fun. You stand directly over the dildo before you squat down and guide it inside you. You begin slowly, but soon enough you pick up the pace and need to support your weight with your arms as you grind your hips down on it.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "You know the rules, bitch! Whores don\'t get to cum on my dildo!"');
    }
    scene.text('You ride the dildo as Christina gets ready for her shower, and you close your eyes and pretend there aren\'t a dozen girls watching while you continue your task. Christina notices and puts a halt to that. "Eyes open, bitch. I want you to look everyone in the eye when you ride it."');
    scene.text('You open your eyes as you\'re told and look all the girls in the eye, one by one. Some avoid your look, while others return it eagerly. One of them is even discretely rubbing her thighs together, clearly turned on by your show. After a while, she finally says you can stop.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina grabs your face with her hand, squishing your cheeks together. "What\'s that, bitch? You\'re scared I forgot about your best rubber buddy? Don\'t worry, it\'s right here!"');
  scene.text('She pulls the dildo out of her bag and sticks it onto the floor. With an evil grin she says "Go on bitch, hop on. You know you want to."');
  scene.actions([
    { label: 'Ride the dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj15.jpg');
    scene.text('You sit down in front of the dildo and raise your hips to lower yourself down on it. Not fast enough for Christina\'s tastes however, and she slaps your inner thigh with a towel. "Faster, bitch! We all have other places to be today!"');
    scene.text('The other girls giggle as you slam your hips down on the rubber dong, and ride it. Christina instructs you to keep your legs spread while you ride the dildo, and keeps slapping you with her towel as you move your hips up and down. Your yelps of pain whenever the towel lands on your thighs put an evil grin on her face.');
    qspCall(s, 'pain', '', 2, 'thigh', 'slap');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says: "You know the rules, bitch! Whores don\'t get to cum on my dildo!"');
    }
    scene.text('After a while, Christina stops whipping you with her towel and begins to get ready for her shower. As you try to move up she snarks "I didn\'t say you could stop, bitch. Keep going!" You mumble an apology and keep riding it until she finally says you can stop. You gently rub your thighs as you give her the dildo back, after licking it clean as always.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina smiles at you and says "You\'ve been doing such a good job, bitch… it\'s about time I reward you."');
  scene.text('She pulls an extra large dildo out of her backpack and grins. "Oh yes, I can see that greedy look in your eyes. It\'s all yours today. Girls, you can help her out if you want," she says as she sticks it to the floor.');
  scene.actions([
    { label: 'Ride the large dildo', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj16.jpg');
    scene.text('Several of the girls walk towards the dong and spit on it, and you gratefully nod at them as you spread the saliva over it with your fingers, adding some of your own. Then you squat directly over the dildo and slowly rub it against your pussy lips. You can feel your snatch being stretched to its limits when you lower yourself down on it, and when you begin to move your hips you feel your pussy lips gripping the dildo tightly.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "You know the rules, bitch! Whores don\'t get to cum on my dildo!"');
    }
    // TODO-QSP: dynamic text: Christina spends some time watching you, and asks the girls if they have any mor...
    scene.text(`Christina spends some time watching you, and asks the girls if they have any more fun ideas for next time. While some of them have grown to like the locker room entertainment, no one really suggests anything. "Hmm, sounds like it's all up to me then. ${((s as any).pcs_nickname ?? 0)}, you can stop," she mutters.`);
    scene.text('When you pull the dildo out, your pussy gapes widely for a moment before slowly closing again.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina fakes sympathy as she says "Oh no! Bad news, bitch… I forgot your rubber friend! Let\'s see what else I have for you…"');
  scene.text('She digs through her purse, and pulls out her hairbrush. "Here you go, bitch. You can use this today… I expect you to clean it properly before you give it back, I don\'t want your pussy stinking up my purse."');
  scene.actions([
    { label: 'Use the handle on yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj17.jpg');
    scene.text('You accept the brush obediently and lie down on the ground, spreading your legs. You poke the handle between your legs and slowly spread your pussy lips with it before pushing it in. It doesn\'t quite feel as good as the dildos Christina usually has for you, and is not quite as big either. Nevertheless, the sloshing of your pussy is quite audible in the locker room while the girls in your class are changing or stripping for their showers. You do notice one of them glancing at her hairbrush with a dreamy look in her eyes.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and moan softly. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "The rules didn\'t change, bitch! Just because you don\'t have a dildo today doesn\'t mean you can cum all over my brush!"');
    }
    scene.text('After a few minutes Christina yanks her brush out of you and, noticing how wet the handle is, wipes it on your clothes leaving several wet strains on them. Then she holds it to your mouth with an expectant look on her face. You obediently open your mouth and take it in, sucking and licking the handle clean. After giving it an affirmatory sniff, she slips it back in her bag and heads into the showers without saying a word.');
    qspCall(s, 'arousal', 'vaginal_dildo', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('You notice all the girls from your class gathering around, wondering what Christina has in store for you today. Christina looks through her sports bag and shrugs. "Bad news, bitch. I forgot to pack your friends this morning. Use your own hands today."');
  scene.actions([
    { label: 'Masturbate in front of them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj18.jpg');
    scene.text('Knowing she expects a show, you lean back against the wall with your legs spread wide. You rub your fingers over your pussy lips, and then begin to slide your fingers in, one by one, with a questioning look in your eyes. At three, Christina says "Stop. Three will do for today, bitch. Start fucking yourself with them."');
    scene.text('You slowly move your hand, and can\'t help but moan when you feel your pussy grasping around your fingers.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('When you are close to reaching orgasm, you close your eyes and try to hide it from Christina. Suddenly you feel a sharp pain in your nipples! It\'s Christina, pinching them hard. She slaps you in the face and says "Nice try, bitch. You know the rules… do that again and I\'ll have to punish you."');
    }
    scene.text('As you pick up the tempo your moans grow louder, and you can tell that your show is having an impact on more than a few girls in the room. Christina notices you looking and says "Not today, bitch. Maybe I\'ll allow one of them to play with you some day."');
    // TODO-QSP: dynamic text: After a while, Christina nods. "Alright, that's enough. You're turning into a gr...
    scene.text(`After a while, Christina nods. "Alright, that's enough. You're turning into a great little locker room whore, ${((s as any).pcs_nickname ?? 0)}. Maybe I should take you to the guys' locker room next time."`);
    qspCall(s, 'arousal', 'vaginal_finger', 10, 'sub', 'humiliation', 'masturbate');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('After you take your clothes off, Christina whips your ass with her towel: "We\'re doing something a bit more interactive today, bitch. But first, you\'re fisting yourself. I want to see your whole hand disappear between those stinking folds. Girls, spit."');
  scene.actions([
    { label: 'Fist yourself', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj19,\'+rand(0, 1)+\'.jpg');
    scene.text('You nod and get comfortable, before squeezing your fingers together tightly. Several girls spit on your fingers for you and you push them against your vagina, slowly rotating your wrist as you work them in deeper and deeper. Taking deep breaths, you eventually manage to get your entire hand inside your snatch.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      // TODO-QSP: dynamic text: When you are close to reaching orgasm, you close your eyes and try to hide it fr...
      scene.text(`When you are close to reaching orgasm, you close your eyes and try to hide it from Christina. Suddenly you feel a sharp pain in your nipples! It's Christina, pinching them hard. She slaps you in the face and says "Orgasming on your own fist… you're such a nasty whore, ${((s as any).pcs_nickname ?? 0)}. Good thing I was there to stop you."`);
    }
    scene.text('After about a minute of you slowly moving your hand inside your pussy, Christina drapes her towel over your head and everything goes dark. You hear her say "Alright, girls… does anyone want to play with my pet?"');
    scene.text('Several excited voices reply. You don\'t know who it is, but several seconds later you feel some slender fingers close around your wrist, giving it some gentle tugs. You don\'t recognize the voice as someone says "Wow, it\'s sure lodged up tight in there!"');
    scene.text('They disappear, and soon a second set of fingers does the same thing. They stay there, while more fingers run over your stretched pussy lips. One girl even tries to slip a finger in, alongside your wrist. You moan uncontrollably, and after about a minute Christina says: "Okay girls, fun\'s over."');
    scene.text('You feel the hands retreat, and a few seconds later the towel over your head is removed just as you pull your hand out of your vagina. It stays wide open for a while, longing to be filled again.');
    scene.text('"You\'re soaked… you liked that, didn\'t you bitch," she says, smirking. Before you can say anything, she heads into the showers. You look around the locker room to try and figure out who just touched you, but their faces don\'t give anything away as the girls proceed like nothing happened.');
    qspCall(s, 'arousal', 'vaginal_fist', 10, 'sub', 'humiliation');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), 'sub', 'humiliation', 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enter14(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina laughs haughtily as she takes off her clothes. "You know what, bitch? I just realized… I do so many nice things for you, and you never do anything for me in return. So rude. Today, you\'re pleasing me. Get on your knees and crawl over to me, you\'re going to lick me to orgasm today."');
  scene.actions([
    { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj20,\'+rand(0, 1)+\'.jpg');
    scene.text('It\'s been so long, you barely even remember why you\'re doing this any more. Obeying Christina in front of the other girls after gym class has become your second nature, it\'s just part of your daily duties… and you wouldn\'t have it any other way. You quickly drop to your knees and crawl your way over to her, sexily waving your ass back and forth to the girls behind you. When you arrive at Christina\'s feet, you rise up and obediently run your tongue over her folds, tasting her sweet juices as you begin to lick away at her snatch.');
    if (((s as any).pcs_horny ?? 0) >= 100) {
      qspCall(s, 'pain', '', 2, 'nipples', 'pinch');
      qspCall(s, 'pain', '', 2, 'face', 'slap');
      scene.text('While you do your best to give Christina a good licking, you feel your own orgasm encroaching upon you as well. Just when it\'s about to hit, Christina yanks your head back by the hair and slaps your face. She pinches your nipples hard for good measure and as you feel your arousal drop, she snarks "You\'re supposed to be focused on me, bitch. Don\'t make me remind you."');
    }
    scene.text('As you happily grind your face into Christina\'s pussy, you don\'t even notice the enthusiastic cheers of the other girls anymore. After you find her clit and give it a few good licks, Christina\'s body begins to shiver and a few drops of squirt land on your face as she orgasms, moaning loudly.');
    scene.text('She takes a second to catch her breath, and slaps your hand away when you reach for your face. "No no, bitch. Leave that on there until I\'m gone." You obediently nod and lick your lips while you wait, making sure to not accidentally wipe her juices off your face until after she heads into the showers.');
    qspCall(s, 'arousal', 'cuni_give', 20, 'sub', 'humiliation', 'lesbian');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'Zvereva_sub_1', 'finished');
  } },
  ]);
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  if (((s as any).christinaQW ?? 0)?.['subpath'] === 3) {
    ((s as any).christinaQW ?? {})['subpath'] = 4;
    scene.text('Christina grins as you walk up to her meekly, expecting your punishment. "Sorry bitch, I\'m busy right now. Meet me after school, we will continue this at my house."');
    scene.text('She quickly heads into the showers, and for a second you feel unsure as to what to do. The other girls in the room smirk at your behaviour; you\'d gotten so used to Christina\'s abuse that you have no idea how to posture yourself when she\'s not here. You\'re deeply embarrassed when you try to imagine what they must think of you, and you do your best to ignore them.');
  } else {
    scene.text('Christina grins as you walk up to her meekly, expecting your punishment. "Sorry bitch, I\'m busy today. You\'ll have to do without punishment this time."');
    scene.text('She quickly heads into the showers, and for a second you feel unsure as to what to do. The other girls of your class smirk at your behaviour; you\'d gotten so used to Christina\'s abuse that you have no idea how to posture yourself when she\'s not here. You\'re deeply embarrassed when you try to imagine what they must think of you, and you do your best to ignore them.');
  }
  qspCall(s, 'Zvereva_sub_1', 'finished');
  scene.build();
}

function enterFinished(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', goto: ['gschool_lessons4', 'postphys2'] },
  ]);
  scene.build();
}

function enterWs_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/gym/locker/chrispeek.jpg');
  scene.text('Christina mutters about having to go to the bathroom, but then an idea strikes her when she sees you. "Excellent, just when I thought there was no toilet nearby. Bitch, come here. Get on your knees and open your mouth… and make it quick, I\'m ready to burst!"');
  scene.actions([
    { label: 'Obey and open your mouth', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      (s as any).pcs_makeup = 0;
    }
    scene.img('images/locations/pavlovsk/school/gym/sex/christina/dildobj21.jpg');
    scene.text('Well, if Christina says so…');
    scene.text('You crawl over to her and open your mouth while closing your eyes. Within seconds you feel a hot liquid landing on your tongue: she\'s peeing! The stream steadily increases, and you have to do your best to drink it all down to prevent making a mess. Christina doesn\'t care about you making a mess, and slowly moves her hips away from your mouth and pees all over your face anyway. The urine burns a bit in your eyes as some seeps in, despite your best efforts to keep your eyes closed.');
    scene.text('You notice the stream getting smaller, and Christina pushes your face away and tells you to gather the last of it in your hands. You open your eyes so you can see where to put your hand, and cup one to try to catch some. Most of it just trickles down your wrist or between your fingers and falls on the ground. Then the stream dries up completely.');
    // TODO-QSP: dynamic text: The quiet murmurs of your classmates make you realize that all the other girls i...
    scene.text(`The quiet murmurs of your classmates make you realize that all the other girls in your class had been watching the whole time! Christina notices them too and asks: "Does anyone else need to go? No one? Okay… ${((s as any).pcs_nickname ?? 0)}, you can get dressed then. See you next time."`);
    qspCall(s, 'arousal', 'pee', 5, 'sub', 'humiliation', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'Zvereva_sub_1', 'finished');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chris_sub':
      enterChrisSub(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '14':
      enter14(s, scene);
      break;
    case 'default':
      enterDefault(s, scene);
      break;
    case 'finished':
      enterFinished(s, scene);
      break;
    case 'ws_1':
      enterWs_1(s, scene);
      break;
    default:
      enterChrisSub(s, scene);
      break;
  }
}

export const Zvereva_sub_1: LocationDef = {
  name: 'Zvereva_sub_1',
  title: '"Hey Christina, can I talk to you about something?"',
  region: 'other',
  description: ['"Hey Christina, can I talk to you about something?"'],
  enter: enter,
};
