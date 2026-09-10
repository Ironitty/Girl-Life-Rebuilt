import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).socialchg['tChristina_day'] = ((s as any).daystart ?? 0);
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
    (s as any).LariskaQW['story'] = 4;
    (s as any).sauna_stripped = 0;
    qspCall(s, 'outfit', 'strip_all');
    (s as any).christinaQW['subpath'] = 2;
    (s as any).christinaQW['submit'] = 1;
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
      (s as any).trait_vars['doormat_exp'] = ((s as any).trait_vars['doormat_exp'] ?? 0) + (2);
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
    (s as any).christinaQW['submit'] = 1;
    (s as any).christinaQW['subpath'] = 2;
    (s as any).LariskaQW['story'] = 4;
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
      (s as any).trait_vars['doormat_exp'] = ((s as any).trait_vars['doormat_exp'] ?? 0) + (2);
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
    (s as any).christinaQW['subpath'] = 2;
    (s as any).christinaQW['submit'] = 1;
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
      (s as any).trait_vars['doormat_exp'] = ((s as any).trait_vars['doormat_exp'] ?? 0) + (2);
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
    (s as any).christinaQW['submit'] = 1;
    (s as any).christinaQW['subpath'] = 2;
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
      (s as any).trait_vars['doormat_exp'] = ((s as any).trait_vars['doormat_exp'] ?? 0) + (2);
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

export const Zvereva_sub_1: LocationDef = {
  name: 'Zvereva_sub_1',
  title: '"Hey Christina, can I talk to you about something?"',
  region: 'other',
  description: ['"Hey Christina, can I talk to you about something?"'],
  enter: enter,
};
