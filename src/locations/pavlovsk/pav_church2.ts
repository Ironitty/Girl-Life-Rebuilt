import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
      scene.text('"Thank you for taking the time to speak with me Father. I admit I really don\'t think I have anything to confess, but I felt like I should come see you."');
      scene.text('"I always have time for God\'s children." he replies. "Perhaps God wants you to speak to me."');
      if (((s as any).church_moral ?? 0) <= 25) {
        scene.text('"I doubt God is interested in a schoolgirl in a nowhere town like this." you quip. "At least He didn\'t leave me any notes under my pillow."');
      } else {
        scene.text('"I don\'t know. It\'s not like I had a dream or something telling me to come." you say thoughtfully as you follow the priest.');
        if (((s as any).church_moral ?? 0) > 75) {
          scene.text('"You may be right Father." you reply happily. "I know God will speak to all of us if we are willing to listen."');
        }
        if (((s as any).godslut ?? 0) === 1) {
          scene.text('"I\'m sure he did, Father." you gush. "His love is like a guiding light and He often turns my thoughts to you."');
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
      (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
      scene.text('"I wouldn\'t call it sinful." Father Kirill replies thoughtfully. "Such behavior is allowable for women so long as the husband\'s marital rights are respected. In fact, I imagine such activities were commonplace in the days when men were expected to have many wives. Perhaps you should tell me how you have acted on these feelings?"');
      (s as any).Kirill_Crpt = ((s as any).Kirill_Crpt ?? 0) + (1);
      scene.text('"No, not at all." Father Kirill quickly assures you. "Who better for you to learn what pleases you than another girl? A boy can\'t begin to understand a girl\'s needs and feelings. Please, tell me, how much experimentation have you done?"');
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
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've jerked off <<$func('string', 'parse_nu...
    scene.text(`You hesitantly tell the priest how you've jerked off ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_jerked'])} ${((((s as any).stat ?? 0)?.['men_jerked'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. As long as the act of foreplay leads to sexual intercourse where the male climaxes into the female, then genital stimulation is certainly permissible. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
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
          { label: 'Refuse to give the father a handjob', handler: (st: GameState) => {
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
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you performed oral sex on <<$func('string', '...
    scene.text(`You hesitantly tell the priest how you performed oral sex on ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_blown'])} ${((((s as any).stat ?? 0)?.['men_blown'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. As long as the act of foreplay leads to sexual intercourse where the male climaxes into the female, then oral stimulation is certainly permissible. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
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
          { label: 'Refuse to give the father a blowjob', handler: (st: GameState) => {
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
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've had anal sex <<$func('string', 'parse_...
    scene.text(`You hesitantly tell the priest how you've had anal sex ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['anal'])} ${((((s as any).stat ?? 0)?.['anal'] === 1) ? ('time') : ('times'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for procreation, child. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
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
          { label: 'Refuse to let the father fuck your ass', handler: (st: GameState) => {
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
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you've had sex with <<$func('string', 'parse_...
    scene.text(`You hesitantly tell the priest how you've had sex with ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['men_fucked'])} ${((((s as any).stat ?? 0)?.['men_fucked'] === 1) ? ('guy') : ('guys'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for the marital bed, child. Make sure that the male climaxes into the female, in order to comply with church. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
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
          { label: 'Refuse to let the father fuck you', handler: (st: GameState) => {
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
    // TODO-QSP: dynamic text: "Hmm. Anyway, my child, is there anything you wanted to share with me? Something...
    scene.text(`"Hmm. Anyway, my child, is there anything you wanted to share with me? Something that makes you feel better?" he inquires as you ${((s as any).confstring ?? 0)}.`);
    scene.text('"Maybe… I\'ve done something that maybe I shouldn\'t have…"');
    scene.text('"And what was that thing, my child?" the priest encourages you gently. "Remember, Jesus already knows. You merely need to acknowledge your sins in His presence to be forgiven."');
    // TODO-QSP: dynamic text: You hesitantly tell the priest how you have masturbated <<$func('string', 'parse...
    scene.text(`You hesitantly tell the priest how you have masturbated ${qspFunc(s, 'string', 'parse_number', ((s as any).stat ?? 0)?.['mast'])} ${((((s as any).stat ?? 0)?.['mast'] === 1) ? ('time') : ('times'))}. It was difficult at first, but you feel better almost right away.`);
    if (((s as any).Kirill_Crpt ?? 0) <= 20) {
      scene.text('"Such acts should be reserved for your husband, child. Do not fear that your soul has been stained by your actions. However, such behavior may lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
    } else {
      scene.text('"Such experimentation is to be expected, child. Do not fear that your soul has been stained by your actions. However, you must be sure to inform me of such acts lest they lead to greater sins in the future." the priest scolds you as he drapes his stole over your head and begins the Prayer of Absolution.');
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
          { label: 'Refuse to masturbate in front of the father', handler: (st: GameState) => {
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
  } },
  ]);
  scene.build();
}

export const pav_church2: LocationDef = {
  name: 'pav_church2',
  title: 'You wait for the priest to finish listening to an old woman,',
  region: 'pavlovsk',
  description: ['You wait for the priest to finish listening to an old woman, then approach him.'],
  enter: enter,
};
