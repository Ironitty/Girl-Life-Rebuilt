import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterConfession(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).confK ?? 0) !== 0) {
    (s as any).lastconf = ((s as any).daystart ?? 0) - ((s as any).confess ?? 0);
  }
  (s as any).confess = ((s as any).daystart ?? 0);
  qspCall(s, 'archetypes', 'faith_gain', 'confession', 25);
  if (((s as any).arch_vars ?? 0)?.['main_active'] === 'prude') {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'fame', 'church_reduction', 'pav', 1);
  }
  scene.img('images/locations/pavlovsk/church/confession.jpg');
  if ((!((s as any).confK ?? 0))) {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    scene.text('You wait for the priest to finish listening to an old woman, then approach him.');
    scene.text('You bow down, touching the floor with your right hand before placing it over your left hand with your palms upward and say "Bless me, Father."');
    scene.text('"May the Lord bless you," the priest answers and blesses you with the Sign of the Cross before placing his right hand in your hands.');
    scene.text('You kiss his hand and straighten up.');
    scene.text('"Hello, my child. What\'s troubling you?" he asks gently.');
    scene.text('You explain to the priest that you\'ve never confessed before and he nods in understanding before leading you to his office and gesturing for you to sit next to him on a small bench. He explains how confession works and the importance of being truthful when confessing. He also stresses that it\'s not to him that you confess, but rather to God through Jesus.');
    scene.text('He tells you that although they already know your sins, you must acknowledge them to yourself by declaring them, only then can they be forgiven. You indicate your understanding and the priest asks if you\'re ready to begin.');
  } else {
    scene.text('You wait for the priest to finish listening to an old woman, then approach him.');
    scene.text('You bow down, touching the floor with your right hand before placing it over your left hand with your palms upward and say "Bless me, Father."');
    scene.text('"May the Lord bless you," the priest answers and blesses you with the Sign of the Cross before placing his right hand in your hands.');
    scene.text('You kiss his hand and straighten up.');
    scene.text('He leads you to his office and gestures for you to sit next to him on a small bench. "Now, my child. What\'s troubling you?" he asks gently.');
    // TODO-QSP: dynamic text: "Father, it has been <<lastconf>> days since my last confession."
    scene.text(`"Father, it has been ${((s as any).lastconf ?? 0)} days since my last confession."`);
  }
  if (((s as any).sisterLesb ?? 0) > 3  ||  ((s as any).seepornofut ?? 0) !== 0) {
    // TODO-QSP: act 'Confess a secret about incest': gt 'pav_church2', 'secrets'
  }
  if (((s as any).stat ?? 0)?.['lesbian_count'] === 0) {
    scene.actions([
      { label: 'Wanting to have sex with a girl', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"I\'ve been having these feelings… Feelings about another girl." you hesitantly admit.');
    // TODO-QSP: dynamic text: "What kind of feelings, <<$pcs_firstname>>?" Father Kirill asks gently.
    scene.text(`"What kind of feelings, ${((s as any).pcs_firstname ?? 0)}?" Father Kirill asks gently.`);
    scene.text('"Sexual feelings…" you mutter softly.');
    scene.text('"I\'m sorry, my dear, I didn\'t quite catch that. Did you say \'actual feelings\'?"');
    scene.text('"No, Father, I said sexual feelings." you repeat more clearly. "As in I want to have sex with her."');
    if (((s as any).Kirill_Crpt ?? 0) < 40) {
      scene.text('"Oh, I see…" Father Kirill replies after a momentary pause. "Such feelings are regretfully normal for young women your age. However, this could just be a phase until you will be enlightened by a male."');
    } else {
      scene.text('"Oh, I see…" Father Kirill replies after a momentary pause. "As I understand it, such feelings are not uncommon among young women. So long as you do not act upon them, there is no reason to worry."');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['cuni_give'] !== 0) {
      scene.actions([
        { label: 'Tell him about having lesbian sex', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"Is it bad that I\'ve done stuff with another girl?" you ask hesitantly.');
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Well, technically it is considered a sin by most priests," Father Kirill replies. "However, there are some who believe that having sex with someone of the same gender is only a sin for men. There are a number of hints in the Bible that seem to indicate that women were permitted to please one another so long as the marriage bed was respected. Of course, it also depends on what you have done."');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
        scene.text('"I wouldn\'t call it sinful." Father Kirill replies thoughtfully. "Such behavior is allowable for women so long as the husband\'s marital rights are respected. In fact, I imagine such activities were commonplace in the days when men were expected to have many wives. Perhaps you should tell me how you have acted on these feelings?"');
      } else {
        (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
        scene.text('"No, not at all." Father Kirill quickly assures you. "Who better for you to learn what pleases you than another girl? A boy can\'t begin to understand a girl\'s needs and feelings. Please, tell me, how much experimentation have you done?"');
      }
    }
    scene.text('You describe to Father Kirill some of the things you\'ve done with other girls, but not in any great detail and being very careful to exclude any names.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).stat ?? 0)?.['hj'] !== 0) {
    scene.actions([
      { label: 'Tell him about giving handjobs', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner. "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies, "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) > 25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush, "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've jerked off <<$func('string', 'parse_nu...
    scene.text(`You hesitantly tell the priest how you've jerked off ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_jerked'])} ${((((s as any).stat ?? 0)?.['men_jerked'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. As long as the act of foreplay leads to sexual intercourse where the male climaxes into the female, then genital stimulation is certainly permissible. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
      } else {
        scene.text('"Hmmm… Such experimentation is to be expected, child. But I fear that your soul will become stained by your actions if we do not purge this sin from you body at once." Father Kirill eagerly answers.');
        scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
        scene.text('He licks his lips. "I will give of myself and absorb your lust, so that you have no desire to lay your hands upon others."');
        qspCall(s, 'willpower', 'hj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse to give the father a handjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse to give the father a handjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that\'s a good idea Father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let the father slake your lust with his body', goto: ['pav_church2', 'hj'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['bj'] !== 0) {
    scene.actions([
      { label: 'Tell him about giving blowjobs', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner, "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) >25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you performed oral sex on <<$func('string', '...
    scene.text(`You hesitantly tell the priest how you performed oral sex on ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_blown'])} ${((((s as any).stat ?? 0)?.['men_blown'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. As long as the act of foreplay leads to sexual intercourse where the male climaxes into the female, then oral stimulation is certainly permissible. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
      } else {
        scene.text('"Hmmm… Such experimentation is to be expected, child. But I fear that your soul will become stained by your actions if we do not purge this sin from you body at once." Father Kirill eagerly answers.');
        scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
        scene.text('He licks his lips. "I will give of myself and absorb your lust, so that you have no desire to take the penis of others into your mouth."');
        qspCall(s, 'willpower', 'bj', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse to give the father a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse to give the father a blowjob [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that\'s a good idea Father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of our course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let the father slake your lust with his body', goto: ['pav_church2', 'bj'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['anal'] !== 0) {
    scene.actions([
      { label: 'Tell him about having anal sex', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner. "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) > 25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've had anal sex <<$func('string', 'parse_...
    scene.text(`You hesitantly tell the priest how you've had anal sex ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['anal'])} ${((((s as any).stat ?? 0)?.['anal'] === 1) ? ('time') : ('times'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for procreation, child. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
      } else {
        scene.text('"Hmmm… Such experimentation is to be expected, child. But I fear that your soul will become stained by your actions if we do not purge this sin from you body at once." Father Kirill eagerly answers.');
        scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
        scene.text('He licks his lips. "I will give of myself and absorb your lust, so that you have no desire to let others perform sodomy upon your body."');
        qspCall(s, 'willpower', 'anal', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse to let the father fuck your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse to let the father fuck your ass [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that\'s a good idea Father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of our course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let the father slake your lust with his body', goto: ['pav_church2', 'anal'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['vaginal'] !== 0) {
    scene.actions([
      { label: 'Tell him about having sex', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner, "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) >25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've had sex with <<$func('string', 'parse_...
    scene.text(`You hesitantly tell the priest how you've had sex with ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_fucked'])} ${((((s as any).stat ?? 0)?.['men_fucked'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. Make sure that the male climaxes into the female, in order to comply with church. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
      } else {
        scene.text('"Hmmm… Such experimentation is to be expected, child. But I fear that your soul will become stained by your actions if we do not purge this sin from you body at once." Father Kirill eagerly answers.');
        scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
        scene.text('He licks his lips. "I will give of myself and absorb your lust, so that you have no desire to lay with others."');
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse to let the father fuck you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse to let the father fuck you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that is a good idea Father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of our course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let the father slake your lust with his body', goto: ['pav_church2', 'sex'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['group'] !== 0) {
    scene.actions([
      { label: 'Tell him about the sex you\'ve had', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner. "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) >25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have.."');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    scene.text('You hesitantly tell the priest how you have performed sex acts with several others at once. It was difficult at first, but you feel better almost right away.');
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, between only two people, child. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['mast'] !== 0) {
    scene.actions([
      { label: 'Tell him that you have masturbated', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it is God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father." you say as he leads you to a quiet corner. "I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        }
        if (((s as any).church_moral ?? 0) >25  &&  ((s as any).church_moral ?? 0) <= 75) {
          scene.text('I don\'t know, it\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        }
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you have masturbated <<$func('string', 'parse...
    scene.text(`You hesitantly tell the priest how you have masturbated ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['mast'])} ${((((s as any).stat ?? 0)?.['mast'] === 1) ? ('time') : ('times'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for your husband, child. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
      } else {
        scene.text('"Hmmm… Such experimentation is to be expected, child. But I fear that your soul will become stained by your actions if we do not purge this sin from your body at once." Father Kirill eagerly answers.');
        scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
        scene.text('He licks his lips. "I will pray as you slake your lust and absorb your sin, freeing you from it."');
        qspCall(s, 'willpower', 'exhib', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse to masturbate in front of the father [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse to masturbate in front of the father [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that\'s a good idea father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of our course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Do as the father commands', goto: ['pav_church2', 'mast'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Don\'t confess', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You can\'t bring yourself to open up to the priest. "Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
    scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
    scene.text('You shake your head. "No Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    scene.text('"Hmm. Anyway, is there anything you wanted to share with me, my child? Something that makes you feel better?" he inquires as you kneel together next to the analogion holding a richly decorated Gospel Book with a blessing cross upon its cover.');
    scene.text('"No, nothing, Father. My mind is going blank. I\'m not really sure why I came to see you. I\'m sorry to have wasted your time."');
    scene.text('"No, don\'t worry, child. I was glad to have spoken to you, even it was for such a short time. Please come again, and if you feel unsure, simply pray to God and He will hear you."');
    scene.text('"Thank you, Father." you say as you leave.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    { label: 'Confess your less dramatic sins', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).confK ?? 0) < 5) {
      scene.text('"Father, I don\'t really have anything important to confess, but I felt I should speak to you."');
      scene.text('"Maybe it was our Holy Father who guided you to me, to keep your soul clean, my child." the priest responds.');
      scene.text('You shake your head. "No, Father, I don\'t think that it\'s God who\'s leading me." you say with a slight smile as you look at him.');
    } else {
      if (((s as any).confK ?? 0) >= 5) {
        scene.text('"Thank you for taking the time to speak with me Father. I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
        scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
        if (((s as any).church_moral ?? 0) <= 25) {
          scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
        } else {
          if (((s as any).church_moral ?? 0) > 25  &&  ((s as any).church_moral ?? 0) <= 75) {
            scene.text('"I don\'t know. It\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
          } else {
            if (((s as any).church_moral ?? 0) > 75) {
              scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
            }
          }
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
        }
      }
    }
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    qspCall(s, 'pav_church', 'fillers');
    // TODO-QSP: dynamic text: You decide to talk to Father Kirill about some of the things going on in your li...
    scene.text(`You decide to talk to Father Kirill about some of the things going on in your life, but you don't feel comfortable being too detailed. You touch briefly on some of the feelings you've had recently, but avoid going into any details. You almost tell him about some of your sexual activities a few times, but quickly change the subject and talk about ${((s as any).safesub ?? 0)} instead.`);
    scene.text('Father Kirill listens intently and asks a few questions, trying to get you to open up a little more but he doesn\'t put any real pressure on you. In the end, Father Kirill absolves you of your sins and encourages you to put your trust in God and him.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    qspCall(s, 'archetypes', 'gain', 'prude', 'small', 'Confession', 1);
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    { label: 'Waste his time', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) - (5);
    (s as any).Kirill = ((s as any).Kirill ?? 0) - (3);
    // TODO-QSP: $conf_lie[1] = 'having seduced '+rand(1, 99)+' guys.'
    // TODO-QSP: $conf_lie[2] = 'having been raped by '+rand(1, 99)+' guys.'
    // TODO-QSP: $conf_lie[3] = 'having witnessed a murder.'
    // TODO-QSP: $conf_lie[4] = 'having committed a murder.'
    // TODO-QSP: $conf_lie[5] = 'wanting to do something blasphemous.'
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    // TODO-QSP: dynamic text: You decide to make up a wild tale about <<$conf_lie[rand(1,5)]>>. The priest see...
    scene.text(`You decide to make up a wild tale about ${qspUntranslated(s, "conf_lie[rand(1,5)]", { location: "pav_church2" })}. The priest seems to believe you at first, then realizes that you're making the story up.`);
    scene.text('"You are a wicked child!" the priest scolds you, although he seems more saddened than angry. "You should be ashamed of yourself! Telling lies is a mortal sin and to do so before God is sure to stain your soul for eternity."');
    scene.actions([
      { label: 'Say nothing but feel bad', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) - (1);
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You feel ashamed at what you\'ve done, but say nothing in response to the priest\'s condemnation.');
    scene.text('"You should leave," the priest says sternly. "Leave and think long and hard about your path in life."');
    scene.text('You turn away from the priest and leave.');
    scene.actions([
      { label: 'Leave the Church', goto: ['pav_church', 'start'] },
    ]);
  } },
      { label: 'Say nothing and regret nothing', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) - (3);
    (s as any).Kirill = ((s as any).Kirill ?? 0) - (2);
    (s as any).Churchbad = ((s as any).Churchbad ?? 0) + (1);
    (s as any).Churchbadtime = ((s as any).daystart ?? 0) + ((s as any).rand ?? 0)(1, 7);
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You stare at the priest defiantly, daring him to do something.');
    scene.text('"You should leave," the priest says sternly. "Leave and think long and hard about your path in life."');
    scene.text('You turn away from the priest and saunter towards the exit.');
    scene.actions([
      { label: 'Leave the Church', goto: ['pav_church', 'start'] },
    ]);
  } },
      { label: 'Apologize for your behavior', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You immediately regret your behavior and apologize to the priest.');
    scene.text('"I\'m sorry Father," you say sincerely. "I don\'t know why I said those things. I know it was wrong."');
    scene.text('"Some things are easier to forgive than others, child." the priest says severely. "God may forgive all, but it is harder for men to do so. Perhaps you should go now and return another day to discuss this matter."');
    scene.text('With nothing further to say, you leave the church.');
    scene.actions([
      { label: 'Leave the Church', goto: ['pav_church', 'start'] },
    ]);
  } },
    ]);
  } },
    { label: 'Complain about mother', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).KnoKirillName = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    if (((s as any).motherKnowSpravka ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You once more feel the need to speak to the priest about some of the things that have happened recently in your life.');
      // TODO-QSP: dynamic text: "I sometimes think that my <<$npc_nickname['A29']>> doesn't trust me. I'm still ...
      scene.text(`"I sometimes think that my ${((s as any).npc_nickname ?? 0)?.['A29']} doesn't trust me. I'm still a virgin, but she won't take my word for it. Every month she nags my head off about going to the gynecologist to prove it. She claims that my school needs to know, but I know that's a lie. It’s starting to irritate me."`);
      scene.text('The priest sighs. "I\'m sure she\'s just doing what she thinks is best for you."');
      scene.text('"That doesn’t make me feel less irritated." you reply sourly.');
      scene.text('"Yes, I understand," the priest chuckles. "My mother, bless her soul, was just the same. Always checking up on who I was with and never letting me be alone with a girl. I almost went crazy."');
      scene.text('"And what did you do to handle it?"');
      scene.text('"I got married. She didn’t like that." he replies with a grin.');
      scene.text('"Somehow, I don’t think that’s the solution for me, Father," you say with a small smile.');
      scene.text('"I imagine you\'re right, my child. At least not yet." he responds and leads you to the analogion.');
      scene.text('"Father…" you begin hesitantly as you kneel before the Gospel Book.');
      scene.text('"What is it, child?"');
      scene.text('"Could I ask your name?" you ask hesitantly.');
      // TODO-QSP: dynamic text: "Hmm? Of course you may, <<$pcs_firstname>>," he replies with a smile. "It is Ki...
      scene.text(`"Hmm? Of course you may, ${((s as any).pcs_firstname ?? 0)}," he replies with a smile. "It is Kirill. Father Kirill."`);
      scene.text('You kneel next to Father Kirill and recount your sins as he says the Prayer of Absolution. You leave feeling better after your little talk.');
    } else {
      scene.text('You once more feel the need to speak to the priest about some of the things that have happened recently in your life.');
      scene.text('"Every month my mother nags my head off about going to the gynecologist to prove I\'m still a virgin. She claims that my school needs to know, but I know that\'s just a lie. It’s starting to irritate me."');
      scene.text('The priest sighs. "I\'m sure she\'s just doing what she thinks is best for you."');
      scene.text('"That doesn’t make me feel less irritated." you reply sourly.');
      scene.text('"Yes, I understand," the priest chuckles. "My mother, bless her soul, was just the same. Always checking up on who I was with and never letting me be alone with a girl. I almost went crazy."');
      scene.text('"And what did you do to handle it?"');
      scene.text('"I got married. She didn’t like that." he replies with a grin.');
      scene.text('"Somehow, I don’t think that’s the solution for me, Father," you say with a small smile.');
      scene.text('"I imagine you\'re right, my child. At least not yet." he responds and leads you to the analogion.');
      scene.text('"Father…" you begin hesitantly as you kneel before the Gospel Book.');
      scene.text('"What is it, child?"');
      scene.text('"Could I ask your name?" you ask hesitantly.');
      // TODO-QSP: dynamic text: "Hmm? Of course you may, <<$pcs_firstname>>," he replies with a smile. "It is Ki...
      scene.text(`"Hmm? Of course you may, ${((s as any).pcs_firstname ?? 0)}," he replies with a smile. "It is Kirill. Father Kirill."`);
      scene.text('You knee next to Father Kirill. "Father, I\'m no longer an virgin." you confess.');
      if (((s as any).forge_referral ?? 0) === 1) {
        scene.text('"I\'ve lied to my mother about it and given her a fake note from the gynecologist saying I\'m still a virgin." you admit shamefully.');
      } else {
        // TODO-QSP: dynamic text: "<<$npc_nickname['A29']>> will make me go to the gynecologist soon and he'll rep...
        scene.text(`"${((s as any).npc_nickname ?? 0)?.['A29']} will make me go to the gynecologist soon and he'll report that I'm no longer a virgin." you say fearfully. "My ${((s as any).npc_nickname ?? 0)?.['A29']} will be so mad! I don't know what to do."`);
      }
      scene.text('"Now you must mend your ways, child. Please come again, and if you feel unsure, simply pray to God and He will hear you."');
      scene.text('"Thank you, Father." you say as you leave.');
    }
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
  ]);
  scene.build();
}

function enterSecrets(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/confession.jpg');
  scene.text('As you kneel down next to Father Kirill, you think about what you want to say to him.');
  // TODO-QSP: dynamic text: Taking a deep breath, you decid to tell him about one of your dirtier secrets as...
  scene.text(`Taking a deep breath, you decid to tell him about one of your dirtier secrets as you ${((s as any).confstring ?? 0)}.`);
  scene.text('"Father, this is very hard for me to tell you…" you began hesitantly.');
  scene.text('"Go on, my dear." Father Kirill says gently. "Remember, our Lord already knows what you have done. All you need do is acknowledge the sin by speaking it."');
  scene.text('Steeling your nerve, you decid to tell him about…');
  if (((s as any).sisterLesb ?? 0) > 3) {
    scene.actions([
      { label: 'Having sex with your sister', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You describe in detail what activities you have done with your sister.');
    scene.text('"Did you say that you\'ve been intimate with your sister?" Father Kirill interjects. "I believe we need to delve a bit more into these activities."');
    scene.text('As you recount your lesbian activities with Anya, starting with how you couldn\'t stop looking at her ass before describing what it was like to taste Anya\'s pussy.');
    if (((s as any).sisVagFucked ?? 0) === 1  &&  ((s as any).sisAssFucked ?? 0) === 1) {
      scene.text('You finish by describing Anya fucking your ass and pussy with her strap-on.');
    } else {
      if (((s as any).sisAssFucked ?? 0) === 1) {
        scene.text('You finish by describing Anya fucking your ass with her strap-on.');
      } else {
        if (((s as any).sisVagFucked ?? 0) === 1) {
          scene.text('You finish by describing Anya fucking your pussy with her strap-on.');
        }
      }
    }
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Hmmm…" Father Kirill replies after a moment. "I can understand how these things can progress, but I fear that you may be heading down a dangerous road, my dear child."');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Hmmm…" Father Kirill replies after a momentary pause. "I can understand how these things can progress. After all, it is normal for healthy young woman to explore their sexuality."');
      } else {
        scene.text('"I\'m not surprised that things progressed as they did. After all, many young people experiment with sex these days outside of wedlock. I suppose you felt safer trying them with your sister than someone else."');
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).seepornofut ?? 0) !== 0) {
    scene.actions([
      { label: 'Watching porn with your brother\'s friends', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"I\'ve been watching some… movies… with some boys I know…" you tell him hesitantly, "I\'m not even sure if doing that is a sin."');
    scene.text('"What kind of movies?" Father Kirill asks, sounding almost disappointed, "Are they illegal?"');
    scene.text('"No, at least I don\'t think they are." you reply, not having considered if porn was illegal or not. You feel yourself blushing as you clarify further. "They were, well, dirty movies."');
    scene.text('"And these boys are your age?" the priest asks gently. "Or are they older boys?"');
    scene.text('"Actually, they are younger than me." you reply. "They are my brother\'s friends. We were playing football one day and they were talking about watching porn and I ended up going with them."');
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Oh, I see…" Father Kirill replies after a momentary pause. "It is normal for young people to be curious about sex. I suppose it is better to satisfy that curiosity by watching a movie rather than experimenting with actual sex. Did you do anything else?"');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Oh, I see…" Father Kirill replies after a momentary pause. "It is normal for young people to be curious about sex, I suppose. Did you try out any of the things you saw in the movies??"');
      } else {
        scene.text('"Really?" Father Kirill answers eagerly. "I imagine that it was an educational experience then. Did you and the boys further your education in any way beyond the movies?"');
      }
    }
    if (((s as any).evgenQW ?? 0) < 3) {
      scene.text('You shake your head then realize that Father Kirill can\'t see you.');
      scene.text('"No, Father. We only watched the movies." you tell him.');
      scene.text('"Well then, no harm done then." he says, almost sounding disappointed.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
      ]);
    }
    if (((s as any).evgenQW ?? 0) === 3) {
      scene.actions([
        { label: 'Admit to jerking the boys off', handler: (st: GameState) => {
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"Well, there is a little more…" you sheepishly admit. "The boys got a little \'excited\' and I couldn\'t just leave them like that, so I \'helped\' them."');
    scene.text('"And just how did you \'help\' them?" Father Kirill probes. "Remember, it is best to be as thorough as possible when confessing."');
    scene.text('"It wasn\'t my idea, but when they asked me to, you know, jerk them, I agreed." you say quickly before you change your mind.');
    if (((s as any).godslut ?? 0) === 1) {
      scene.text('"What else could I do? They were obviously suffering and it would have been unchristian of me to not help them." you piously add.');
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).evgenQW ?? 0) >= 4) {
      scene.actions([
        { label: 'Admit to sucking the boys off', handler: (st: GameState) => {
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('Blushing fiercely, you think about the other stuff you\'ve done with your brother and his friends.');
    scene.text('"There\'s more, Father." you admit softly. "After the first few times, the boys decided that my hands weren\'t enough, so I started… sucking them."');
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Hmmm…" Father Kirill replies after a moment. "I can understand how these things can progress, but I fear that you may be heading down a dangerous road, my dear child."');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Hmmm…" Father Kirill replies after a momentary pause. "I can understand how these things can progress. After all, you are a pretty young woman and they are healthy young men."');
      } else {
        scene.text('"I\'m not surprised that things progressed as they did. After all, you are a pretty young woman and they are healthy young men. And did they cum, I mean, did they ejaculate in your mouth?"');
        scene.text('"No, they pulled out and squirted their… stuff all over my face…" you reply while recalling the feeling of the warm cum splashing on your face.');
      }
    }
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      scene.text('"And what about your brother?" Father Kirill asks. "Where was he when all this was happening? You said you had been playing football together when this all started, no?"');
      if (((s as any).brotherQW ?? 0)?.['Sex'] !== 0) {
        scene.actions([
          { label: 'Tell him about your brother', handler: (st: GameState) => {
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if ((!((s as any).Kirill_brotherBJ ?? 0))) {
      (s as any).Kirill_brotherBJ = 1;
    }
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"He was there." you confess. "He didn\'t do anything the first few times, I only jerked his friends. Then one time he just went and stuck his cock, I mean, penis into my mouth while I was jerking his friends."');
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Hmmm…" Father Kirill muses. "This is very disturbing. Incest is a sure path to hell."');
    } else {
      if (((s as any).Kirill_Crpt ?? 0) <= 60) {
        scene.text('"Hmmm…" Father Kirill muses, "You must have been very upset. That was very improper of your brother."');
      } else {
        scene.text('"Hmmm…" Father Kirill almost sounds like he is moaning. "What a naughty thing to do. And did he cum, I mean, did he ejaculate in your mouth?"');
        scene.text('"No, he pulled out and squirted his… stuff all over my face," you reply while recalling the feeling of his warm cum splashing on your face.');
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tell him about your brother', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"He was there but he only watched," you say thoughtfully. "But I think he liked it because I\'m sure he had a hard on the whole time."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Lie about your brother', handler: (st: GameState) => {
    (s as any).church_moral = ((s as any).church_moral ?? 0) - (1);
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"He, umm, wasn\'t there." you lie. "He thought it was too weird to watch porn with his sister there, so he left."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).Kirill_brotherBJ ?? 0) === 1  &&  ((s as any).Kirill_Crpt ?? 0) > 20) {
    // TODO-QSP: dynamic text: …you remember last time you told Father Kirill about sucking off your brother af...
    scene.text('…you remember last time you told Father Kirill about sucking off your brother after watching porn, he didn\'t chastise you about engaging in incest. \' + iif(Kirill_Crpt > 60, \'In fact, you\'re pretty sure he enjoyed hearing about it. \', \') + \'Maybe you could tell him about the other things you and your brother have been up to…');
    scene.actions([
      { label: 'Tell him about having sex with your brother', handler: (st: GameState) => {
    (s as any).confK = ((s as any).confK ?? 0) + (1);
    (s as any).church_moral = ((s as any).church_moral ?? 0) + (1);
    (s as any).Kirill = ((s as any).Kirill ?? 0) + (1);
    (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('"Father… I don\'t know how to say this…" you say, fidgeting in your seat, "My brother and I have grown… quite close lately…"');
    scene.text('"Why would you think that\'s a sin, child? God looks favourably upon close-knit families, especially when siblings are friends, rather than fighting."');
    scene.text('"Well we certainly haven\'t been fighting ever since…" The last part of the sentence gets caught in your throat, and you\'re suddenly all too aware of what you\'re about to confess.');
    scene.text('"Ever since what?" the priest asks gently. "What happened between your brother and you?"');
    scene.text('You blush fiercely and start telling the priest about how you caught your brother watching you shower and started showing off your naked body to him every chance you got.');
    if (((s as any).brotherQW ?? 0)?.['shower_talk'] !== 0) {
      scene.text('How that soon wasn\'t enough for you, and you started inviting him in under the pretense of wanting to talk to him, but in reality you just wanted to give him a better view.');
    }
    if (((s as any).brotherQW ?? 0)?.['shower_times'] !== 0) {
      scene.text('Eventually you wanted to feel more than just his eyes on your skin, and invited him to shower with you.');
    }
    // TODO-QSP: dynamic text: You continue describing your fall into incestual deviancy' + iif(brotherQW['last...
    scene.text('You continue describing your fall into incestual deviancy\' + iif(brotherQW[\'last_day_homework\'] > 0, \', how you let him feel you up while you help him with his homework\', \') + iif(npc_QW[\'A34\'] >= 4, \', how you\'ve used your naked body to show him the secrets of the female anatomy\', \') + iif(brotherQW[\'last_sex_day_morning\'] > 0 or brotherQW[\'last_sex_day_night\'] > 0 or brotherQW[\'last_sex_day_evening\'] > 0, \', how you regularly help each other with your sexual urges\', \') + iif(brotherQW[\'last_sex_day_morning\'] = daystart or brotherQW[\'last_sex_day_night\'] = daystart or brotherQW[\'last_sex_day_evening\'] = daystart, \', and that one of those times was just earlier today\', \') + \', all while Father Kirill sits calmly and waits for you to finish.');
    if (((s as any).Kirill_Crpt ?? 0) <= 60) {
      scene.text('He speaks up when you\'re finally done. "Hmmm. This is quite disturbing. Incest is a sure path to hell, but on the other hand it is natural for two young people who have grown close to want to explore their sexuality together."');
      scene.text('"I fear that your soul could become stained by your actions, however. You must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('His breathing has become much heavier and there\'s a clear tenting in the front of his robe.');
      scene.text('"Hmmm… Such experimentation is indeed problematic, child. I fear that your soul will become stained by your actions if we do not purge this sin from you body at once." he eagerly answers.');
      scene.text('You feel yourself growing concerned. Maybe there\'s something to this after all. "How can we do that Father?"');
      scene.text('He licks his lips. "I will give of myself and absorb your lust, so that you have no desire to lay with your brother."');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse to let the father fuck you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse to let the father fuck you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('You shake your head. "I don\'t think that\'s a good idea Father. Perhaps just a Prayer of Absolution instead?"');
    scene.text('He hesitates only a moment. "Yes, of course my child."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let the father slake your lust with his body', goto: ['pav_church2', 'sex'] },
      ]);
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/confession.jpg');
    scene.text('After confessing, Father Kirill kneels next to you and drapes the end of his stole over your head before you chant the Prayer of Absolution together. Father Kirill admonishes you to be a good girl and tells you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Return to Narthex', goto: ['pav_church', 'Narthex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterMast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'archetypes', 'gain', 'bimbo', 'small', 'Masturbating during confession', 1);
  scene.img('images/locations/pavlovsk/church/sex/mast1.jpg');
  scene.text('Father Kirill looks down at your crotch. "You must first expose your sin before God. Show me, I mean Him your vagina, so that I may pray for you."');
  scene.text('You remove your clothes and expose your pussy before the priest, his eyes intently watching as you do. "Now you must pleasure yourself so that I can pray and absolve you of the sin."');
  qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Start masturbating', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/mast2.jpg');
    scene.text('You start rubbing your clit as the priest watches and starts to pray, his eyes never leaving your pussy. The more you rub your pussy, the louder he prays.');
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep masturbating', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/mast3.jpg');
    scene.text('You get into a rhythm and begin to moan as he continues praying. "Lord forgive her of her sins, cleanse her soul with your divine love." He continues to pray as you keep masturbating.');
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'masturbate');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/mast4.jpg');
    scene.text('You feel yourself getting close to orgasm. The Father can either tell or guessed. "Yes, you must purge this lust from your body. Let it all out before God!"');
    qspCall(s, 'arousal', 'clit_finger', 5, 'exhibitionism', 'masturbate');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pray', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay1.jpg');
    scene.text('After your orgasm, Father Kirill stands next to you and drapes the end of his stole over your head. "Pray with me, now that the sin has been purged from your body." Together, you chant the Prayer of Absolution and Father Kirill admonishes you to be a good girl, telling you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
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

function enterHj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A166');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/sex/hj1.jpg');
  scene.text('He directs you to kneel on the floor and you do as you\'re told. He frees his dick from his pants and you see that it\'s already hard. "Now take my penis into your hands."');
  scene.text('You do as he asks and take his cock into your hand, feeling it twitch as you begin to stroke it.');
  qspCall(s, 'arousal', 'hj', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stroke him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/hj2.jpg');
    // TODO-QSP: dynamic text: You feel it grow slightly in your hand as you stroke the full length of his <<di...
    scene.text(`You feel it grow slightly in your hand as you stroke the full length of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock with your hand while he moans and prays. "Please Lord, release this child from the lust she is consumed by."`);
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep stroking it', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/hj3.jpg');
    scene.text('As you keep stroking him, his prayers get louder. "Yes Lord, I feel your presence! Let her lust be taken from her, leaving behind nothing but purity!"');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'On the face', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/hj4.jpg');
    scene.text('You keep stroking him as he crys out. "Forgive us, your children, for our sins." With that, cum starts spurting from his dick and hitting you in the face. You keep stroking him until it finally stops.');
    qspCall(s, 'arousal', 'hj', 5);
    qspCall(s, 'cum_call', 'face', 'A166');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pray', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay1.jpg');
    scene.text('Once the last drop of cum has fallen away, Father Kirill stands up and puts his dick away. He stands next to you and drapes the end of his stole over your head. "Pray with me, now that the sin has been purged from your body." Together, you chant the Prayer of Absolution and Father Kirill admonishes you to be a good girl, telling you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
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

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A166');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/sex/bj1.jpg');
  scene.text('He directs you to kneel on the floor and you do as you\'re told. "You say you often expose your breasts to the young men before taking them into your mouth. Please do that now."');
  scene.text('You pull your clothes aside to expose your breasts as he pulls out his dick from his pants. You can see it is already hard as he places his hand upon the top of your head. "Now open your mouth."');
  qspCall(s, 'arousal', 'foreplay', 3, 'exhibitionism');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/bj2.jpg');
    // TODO-QSP: dynamic text: You do as he tells you and open your mouth. Once your mouth is fully open he sli...
    scene.text(`You do as he tells you and open your mouth. Once your mouth is fully open he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick inside and you close your lips around it. He lets out a moan which turns into a moaning prayer. "Oh heavenly Father, forgive the sins of this child." he says as he starts to slowly and gently fuck your mouth.`);
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/bj3.jpg');
    scene.text('You feel his hand go to the back of your head as you suck his dick. You can feel his restraint as he keeps himself from forcing himself down your throat, allowing you to guide the action as he gets louder with his prayers. "Yes Lord, I feel your presence! Let her lust be taken from her, leaving behind nothing but purity!"');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/cum.jpg');
    scene.text('You keep sucking as he crys out. "Forgive us, your children, for our sins." With that, he pulls his dick out of your mouth and a stream of cum starts hitting you in the face.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'cum_call', 'face', 'A166');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pray', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay1.jpg');
    scene.text('Once the last drop of cum has fallen away, Father Kirill stands up and puts his dick away. He stands next to you and drapes the end of his stole over your head. "Pray with me, now that the sin has been purged from your body." Together, you chant the Prayer of Absolution and Father Kirill admonishes you to be a good girl, telling you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
    ]);
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

function enterSex(s: GameState, scene: SceneBuilder): void {
  (s as any).kirillsex = ((s as any).kirillsex ?? 0) + (1);
  qspCall(s, 'boyStat', 'A166');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/sex/foreplay2.jpg');
  scene.text('He stands up and gently pushes you against the wall before his hands start roaming over your body, slowly removing your clothes until your breasts are exposed and his hand is rubbing your clit. "We must purge the lust from your body and banish your sexual desires." You feel one of his fingers slide inside your wet pussy and he slowly fucks you with one finger before adding a second.');
  qspCall(s, 'arousal', 'vaginal_finger', 5);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Open to purging', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay3.jpg');
    scene.text('Once you\'re nice and wet, he drops down to his knees and places his face between your legs as you lean back against the wall. He begins to eagerly lick at your clit and pussy, causing you to moan in pleasure. After several minutes he stops and stands back up. "Kneel my child."');
    qspCall(s, 'arousal', 'cuni', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kneel', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay4.jpg');
    scene.text('As you kneel down, he pulls his dick out of his pants. It\'s already hard, but he strokes it several times as he says "Open your mouth my child."');
    qspCall(s, 'arousal', 'clit_finger', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/bj2.jpg');
    scene.text('You open your mouth and he slides his dick inside before you close your lips around his shaft. Slowly and steadily, you start to suck him off. He lets out a moan which turns into a moaning prayer. "Oh heavenly Father, forgive the sins of this child."');
    scene.text('After a few minutes, he pulls out of your mouth. "Undress and lean forward, placing your hands on the ground."');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Undress and bend over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/sex1.jpg');
    // TODO-QSP: dynamic text: You remove your clothes as he watches, stroking his dick with one hand. Once you...
    scene.text(`You remove your clothes as he watches, stroking his dick with one hand. Once you're naked on your knees, you lean forward until your hands touch the floor. Father Kirill kneels down behind you and rubs your pussy a few times with his fingers. You then feel the head of his dick rubbing against your wet slit before he gently pushes it into you. You both moan as his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick slides into you and he begins to gently fuck you, holding onto your hips with one hand.`);
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have the sin fucked out of you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/sex2.jpg');
    scene.text('He starts fucking you harder before slowing down into a steady pace. "Forgive us, your children, for our sins." he prays as he fucks you steadily. Several minutes goe by before he suddenly pulls out of you. "Rise, my child."');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Rise up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/cum.jpg');
    scene.text('You get off your hands and back into a kneeling position as he stands up with his pants still around his ankles. You turn towards him as he vigorously strokes his cock and a spurt of cum hits you in the face, followed by several more.');
    qspCall(s, 'arousal', 'vaginal', 5);
    qspCall(s, 'cum_call', 'face', 'A166');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pray', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay1.jpg');
    scene.text('Once the last drop of cum has fallen away, Father Kirill pulls up his pants up and puts his dick away. "Please get dressed, child."');
    scene.text('Once you\'ve put your clothes back on, he stands next to you and drapes the end of his stole over your head. "Pray with me, now that the sin has been purged from your body." Together, you chant the Prayer of Absolution and Father Kirill admonishes you to be a good girl, telling you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
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
  } },
  ]);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A166');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/church/sex/foreplay4.jpg');
  scene.text('He stands up and pulls his dick out of his pants. It is already rock-hard. "Kneel my child."');
  scene.text('As you kneel down, he strokes his cock while looking at you. "Please disrobe as well."');
  scene.text('Once you\'re fully naked, he speaks once more. "Open your mouth."');
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal2.jpg');
    scene.text('You do as he tells you and open your mouth. Once your mouth is fully open, he slides his dick in and you close your lips around it. He lets out a moan which turns into a moaning prayer. "Oh heavenly Father, forgive the sins of this child." he says as he starts to slowly and gently fuck your mouth.');
    qspCall(s, 'arousal', 'bj', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal1.jpg');
    scene.text('You feel his hand go to the back of your head as you suck his dick. You can feel his restraint as he keeps himself from forcing himself down your throat, allowing you to guide the action as he gets louder with his prayers. "Yes Lord, I feel your presence! Let her lust be taken from her, leaving behind nothing but purity!"');
    scene.text('After a few minutes, he pulls his dick out of your mouth and walks over to his desk. "Please bend over the bench. We must now purge the sin of sodomy from you." he says as he begins to apply lubrication to his dick as he walks back over to you. You have no idea why a priest has lubrication, but you\'re glad he does.');
    qspCall(s, 'arousal', 'bj', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal3.jpg');
    // TODO-QSP: dynamic text: Once you bend over, he applies some lube to your asshole and rubs it in with his...
    scene.text(`Once you bend over, he applies some lube to your asshole and rubs it in with his fingers. He then presses the head of his dick against your asshole and you feel the pressure build up until the tip pops into your ass, causing you to cry out slightly in both pain and pleasure. He pauses to let you adjust to it before he slowly and gently begins fucking your ass with his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick.`);
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'It\'s starting to feel good', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal4.jpg');
    scene.text('He prays as he gently fucks your ass. "Lord, help me guide this lost lamb back from the sins of sodomy and into your loving light once more." As he gets into it, he starts to fucking you a little harder and faster, but each time he notices any discomfort from you, he slows down again.');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Yes, Father', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal5.jpg');
    scene.text('It starts feeling good and you start moaning louder and louder in pleasure. "Yes, Father! Fuck my ass!" you cry out.');
    scene.text('"Lord forgive her, for she knows not what she says," he says loudly as he keeps fucking your ass with renewed vigor after hearing you moan in pleasure.');
    scene.text('After a few minutes, he suddenly pulls out of your ass. "Turn around and kneel."');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Turn around and kneel', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/anal6.jpg');
    scene.text('You turn around, kneeling and opening your mouth. Your knees barely touch the floor before spurts of cum start splattering on your face. He groans as he squeezes the last drop of cum from his cock. "God, forgive us for our sins."');
    qspCall(s, 'arousal', 'anal', 5);
    qspCall(s, 'cum_call', 'face', 'A166');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Pray', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/church/sex/foreplay1.jpg');
    scene.text('Once the last drop of cum has fallen away, Father Kirill stands up, pulls his pants up and puts his dick away. "Please get dressed, child."');
    scene.text('Once you\'ve put your clothes back on, he stands next to you and drapes the end of his stole over your head. "Pray with me, now that the sin has been purged from your body." Together, you chant the Prayer of Absolution and Father Kirill admonishes you to be a good girl, telling you to come back to see him anytime you feel the need.');
    scene.actions([
      { label: 'Leave the church', goto: ['pav_church', 'start'] },
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
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'confession':
      enterConfession(s, scene);
      break;
    case 'secrets':
      enterSecrets(s, scene);
      break;
    case 'mast':
      enterMast(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    default:
      enterConfession(s, scene);
      break;
  }
}

export const pav_church2: LocationDef = {
  name: 'pav_church2',
  title: 'You wait for the priest to finish listening to an old woman,',
  region: 'pavlovsk',
  description: ['You wait for the priest to finish listening to an old woman, then approach him.'],
  enter: enter,
};
