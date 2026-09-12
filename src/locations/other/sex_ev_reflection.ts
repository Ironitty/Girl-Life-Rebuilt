import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['thought_mood'] === '') {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  } else {
    if (((s as any).sex_ev ?? 0)?.['thought_mood'] === 'sad') {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
      } else {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'upset1', 'jpg');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['thought_mood'] === 'happy') {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy1', 'jpg');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    // TODO-QSP: dynamic text: A quiet lapses between you and <<$npcdesc>>. In the silence, you find your thoug...
    scene.text(`A quiet lapses between you and ${((s as any).npcdesc ?? 0)}. In the silence, you find your thoughts wandering...`);
  } else {
    // TODO-QSP: dynamic text: With <<$npcdesc>> snoring to your side, you find yourself suddenly alone with yo...
    scene.text(`With ${((s as any).npcdesc ?? 0)} snoring to your side, you find yourself suddenly alone with your thoughts...`);
  }
  qspCall(s, 'sex_ev_reflection', 'top_menu');
  // TODO-QSP: end
  scene.build();
}

function enterTopMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['starting_mood'] === 'reluctant') {
    scene.actions([
      { label: 'What did you do...? (regret)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reflection', 'what_did_i_do'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['prostitution_paid'] > 0) {
      scene.actions([
        { label: 'You sold your virginity', handler: (st: GameState) => {
    scene.text('<i>I sold my virginity tonight,</i> you think to yourself.');
  }, goto: ['sex_ev_reflection', 'virgin_whore'] },
      ]);
    } else {
      scene.actions([
        { label: 'You lost your virginity', handler: (st: GameState) => {
    scene.text('<i>I lost my virginity tonight,</i> you think to yourself.');
  }, goto: ['sex_ev_reflection', 'lost_virgin'] },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['unsafe_creampie'] > 0) {
      scene.actions([
        { label: 'Pregnancy...', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reflection', 'pregnancy_menu'
  } },
      ]);
    }
    scene.actions([
      { label: '<<$npcdesc>> came inside you...', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Thoughts drift to when <<$npcdesc>> came inside you...
    scene.text(`Thoughts drift to when ${((s as any).npcdesc ?? 0)} came inside you...`);
  }, goto: ['sex_ev_reflection', 'creampie_menu'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop reflecting', goto: ['sex_ev_after', 'relax_together'] },
  ]);
  scene.build();
}

function enterWhatDidIDo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  scene.text('<i>What did I do...?</i>');
  scene.text('The thought circles through your head relentlessly, bouncing off every wall in your brain.');
  if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1) {
    // TODO-QSP: dynamic text: This went further with <<$npcdesc>> ' + iif(daystage < 4, 'today', 'tonight') + ...
    scene.text(`This went further with ${((s as any).npcdesc ?? 0)} ' + iif(daystage < 4, 'today', 'tonight') + ' than you ever meant it to. However it turned out, you never planned on doing anything like this with ${((s as any).npcdesc ?? 0)}. You certainly didn't plan on losing your virginity to him! The pulsing ache in your pussy that is all that remains of your torn hymen leaves an echoing ache in your chest that you can only describe as regret...`);
  } else {
    // TODO-QSP: dynamic text: This went further with <<$npcdesc>> ' + iif(daystage < 4, 'today', 'tonight') + ...
    scene.text(`This went further with ${((s as any).npcdesc ?? 0)} ' + iif(daystage < 4, 'today', 'tonight') + ' than you ever meant it to. However it turned out, you never planned on doing anything like this with ${((s as any).npcdesc ?? 0)}. The pulsing ache in your pussy that is all that remains of your torn hymen leaves an echoing ache in your chest that you can only describe as regret...`);
  }
  scene.text('What happened?');
  scene.text('Did you lead him on? Give him the wrong idea? Should you just have spoken up more?');
  scene.text('<i>What did I do...?</i> you think again.');
  scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'top_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterLostVirgin(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You don\'t know how to feel', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('Emotions roil inside of you, a tumult of conflict storming through your head.');
    if (((s as any).sex_ev ?? 0)?.['starting_mood'] === 'reluctant'  ||  ((s as any).sex_ev ?? 0)?.['virgin_pushed'] === 1) {
      scene.text('You were pressured into it, which didn\'t feel good. There was little to no account for your feelings on it, it just happened.');
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
        // TODO-QSP: dynamic text: But it also felt good.' + iif(sex_ev['orgasm_count'] > 0, ' Hell, you even came....
        scene.text('But it also felt good.\' + iif(sex_ev[\'orgasm_count\'] > 0, \' Hell, you even came. \', \' \') + \'Does that make up for how it started? Does it even matter either way?');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          // TODO-QSP: 'After the first minute or so, didn''t really hurt anymore. But it didn''t feel amazing either.' + i...
        } else {
          scene.text('Not only that, it <i>hurt</i>. Even the word "hurt" doesn\'t seem to come close to the pain you experienced.');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
        // TODO-QSP: dynamic text: It felt so good.' + iif(sex_ev['orgasm_count'] > 0, ' You even orgasmed. ', ' Yo...
        scene.text('It felt so good.\' + iif(sex_ev[\'orgasm_count\'] > 0, \' You even orgasmed. \', \' You didn\'t cum, but it was still extremely satisfying to have a dick inside you like that. \') + \'So why are you having second thoughts now? Is this that thing guys call "post nut clarity?"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          // TODO-QSP: 'It stopped hurting after he put it in, after the first minute or so. But it didn''t feel amazing ei...
        } else {
          scene.text('This <i>hurt</i>. The word "hurt" doesn\'t seem to even come close to what you experienced. Is this what sex is? Is this what it\'s always going to be?"');
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text('A sudden glob of spunk gushes out of your throbbing cunt, adding yet another factor of the night.');
      } else {
        scene.text('A throb in your pussy brings with it the phantom sensation of something trickling out, reminding you of another factor of the night.');
      }
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
        scene.text('You aren\'t on birth control.');
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          // TODO-QSP: dynamic text: It ought to be a safe time in your cycle, but the unprotected nut <<$npcdesc>> b...
          scene.text(`It ought to be a safe time in your cycle, but the unprotected nut ${((s as any).npcdesc ?? 0)} bust inside you weighs heavy on your mind anyways.`);
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
            scene.text('You aren\'t sure exactly where you are at in your cycle, but you know you\'re coming up on your fertile window soon. This adds even more weight to your already heavy thoughts.');
          } else {
            if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
              scene.text('You\'re firmly in the middle of your fertile window. You could get pregnant!');
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: You let <<$npcdesc>> cum inside you.
        scene.text(`You let ${((s as any).npcdesc ?? 0)} cum inside you.`);
        scene.text('Thankfully, you came prepared on birth control, but there are other things that can hurt you without getting you pregnant. Birth control is only half of safe sex...');
      }
    }
    scene.text('Thoughts swim around and around in your head until you feel you\'re going to be dizzy. But they don\'t help you figure out how you feel...');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
  ]);
  scene.build();
}

function enterGladDeflowered(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['thought_mood'] = 'happy';
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy2', 'jpg');
  scene.text('Searching your heart you are startled to realize... you\'re <i>glad</i> this happened.');
  // TODO-QSP: dynamic text: As reluctant as you were at the start, you're actually happy that <<$npcdesc>> p...
  scene.text(`As reluctant as you were at the start, you're actually happy that ${((s as any).npcdesc ?? 0)} pushed you into sleeping with him. How it happened doesn't matter as much as <i>that</i> it happened. You're not a virgin anymore and that's news!`);
  scene.text('The full meaning of that didn\'t hit you until now and fills you with an odd sense of giddiness.');
  scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'top_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterVirginWhore(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Happy with it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['thought_mood'] = 'happy';
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy2', 'jpg');
    scene.text('<i>I sold my virginity tonight,</i> you think to yourself.');
    scene.text('An uncontrollable smile cracks across your face as a giddy rush goes through you.');
    scene.text('<i>... and I\'m happy with that!</i>');
    // TODO-QSP: dynamic text: You got your cherry popped! You're a woman now! And not just that, but you got <...
    scene.text(`You got your cherry popped! You're a woman now! And not just that, but you got ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_paid'])} on top of that? What a night!`);
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    { label: 'Glad you got something for it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['thought_mood'] = 'happy';
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy1', 'jpg');
    scene.text('<i>I sold my virginity tonight,</i> you think to yourself.');
    scene.text('<i>... and I actually got paid for it.</i>');
    scene.text('The whole idea of virginity feels over emphasized to you. Everyone wants to lose theirs or take somebody else\'s and every girl gets the same thing for it: a sore pussy.');
    scene.text('But not you.');
    // TODO-QSP: dynamic text: You got paid for it. Your virginity was <i>worth</i> something. More than someth...
    scene.text(`You got paid for it. Your virginity was <i>worth</i> something. More than something, a lot of somethings. About ${((s as any).sex_ev ?? 0)?.['prostitution_paid']} somethings.`);
    scene.text('And the thought of that can\'t help but make you smile a little.');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    { label: 'You feel dirty', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'upset1', 'jpg');
    ((s as any).sex_ev ?? {})['thought_mood'] = 'sad';
    scene.text('<i>I sold my virginity tonight,</i> you think to yourself.');
    scene.text('<i>Whore.</i>');
    scene.text('The word flashes through your mind unbidden. Suddenly, it\'s as if you can feel every microscopic piece of bacteria in the room.');
    scene.text('Every drop of sweat on the bed.');
    scene.text('Every hair out of place.');
    scene.text('Filth crawling across your skin.');
    scene.text('Your arms, your thighs, your breasts, your cunt.');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('Individual sperm writhing on your face.');
    }
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.text('Globs of cum oozing from your pussy.');
    }
    scene.text('It covers you like oil and you know exactly why:');
    scene.text('Because you sold your virginity. The knowledge that whatever else happens, you sold yourself from the very first time you had sex. Whatever happens, you\'ll always have been a whore from the start.');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    { label: 'You feel... <i>turned on</i>', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['thought_mood'] = 'happy';
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'happy2', 'jpg');
    scene.text('<i>I sold my virginity tonight,</i> you think to yourself.');
    scene.text('And immediately a heat blossoms in your womb. Your nipples perk up, warm and swollen, and you feel moisture pooling on the lips of your labia.');
    scene.text('<i>I let a guy <b>pay</b> to fuck me...</i>');
    scene.text('You squirm at the thought, the idea that you sold yourself like a whore. No, not <i>like</i> a whore, <i>as</i> a whore. Because that\'s what whores do: they trade cash for sex. And it\'s driving you crazy right now!');
    scene.text('Is it that you feel degraded? Dirty? Used? Like a fleshlite to be paid for and pumped with cum until satisfaction and then thrown away?');
    scene.text('Or do you feel powerful? That your smile and your breasts and your pussy have the power to make men open their wallets? To pay for the <i>privilege</i> of being allowed inside you?');
    scene.text('A rush of giggles threatens to erupt from you and you have to clamp down to not seem like a crazy-girl. As the wetness starts to drip out of you and down the curve of your thigh, you realize you\'re going to have to figure this out...');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
  ]);
  scene.build();
}

function enterCatchingFeelings(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    // TODO-QSP: dynamic text: As you lay there next to <<$npcdesc>> looking at him, his cum dripping from your...
    scene.text(`As you lay there next to ${((s as any).npcdesc ?? 0)} looking at him, his cum dripping from your pussy, your heart flutters inside your chest. It makes you realize with a start-`);
  }
  scene.text('<i>I think I\'m falling for him...</i>');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_creampie'] === 1) {
    scene.actions([
      { label: 'Your first creampie', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    // TODO-QSP: dynamic text: <i><<$npcdesc>> came inside me...</i> you think to yourself. <i>Nobody's ever cu...
    scene.text(`<i>${((s as any).npcdesc ?? 0)} came inside me...</i> you think to yourself. <i>Nobody's ever cum inside you before...</i>`);
  }, goto: ['sex_ev_reflection', 'first_creampie_reflect'] },
    ]);
  } else {
    scene.actions([
      { label: 'It felt...', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reflection', 'general_creampie_reflect'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reflection', 'top_menu'
  } },
  ]);
  scene.build();
}

function enterFirstCreampieReflect(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['night_of_firsts'] === 0) {
      scene.actions([
        { label: 'A night of firsts...', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['night_of_firsts'] = 1;
    scene.text('Then again, nobody\'s ever fucked you either. Your first time getting fucked was also your first time getting filled.');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
      ]);
    }
    scene.actions([
      { label: 'It was...', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_feel'] = 1;
    scene.actions([
      { label: 'Gross', handler: (st: GameState) => {
    scene.text('It was... <i>so gross...</i>');
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
      // TODO-QSP: dynamic text: Sure, you came when it happened, but now with the benefit of hindsight and post-...
      scene.text('Sure, you came when it happened, but now with the benefit of hindsight and post-nut clarity, \' + iif(cum_loc[\'vagina\'] > 0, \'the sensation of his cum leaking out of you gives you shivers. \', \'the memory of his cum leaking out of you gives you shivers. \') + \'All <i>sticky</i> and <i>slimy</i>. You shudder just thinking about it.');
    } else {
      // TODO-QSP: iif(cum_loc['vagina'] > 0, 'You grimace as you feel another glob of the slimy white stuff ooze out o...
      scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'top_menu'] }]);
    }
  } },
      { label: 'Warm', handler: (st: GameState) => {
    scene.text('It was... <i>warm...</i>');
    // TODO-QSP: dynamic text: That's the thing that stuck with you the most. How you felt <<$npcdesc>>'s cock ...
    scene.text(`That's the thing that stuck with you the most. How you felt ${((s as any).npcdesc ?? 0)}'s cock throb inside you and then all of a sudden you felt that heat spreading through the inside of your hips. And how it drained from you the moment he pulled out, that warmth trickling from your snatch down your thighs...`);
  }, goto: ['sex_ev_reflection', 'top_menu'] },
      { label: 'Amazing', handler: (st: GameState) => {
    scene.text('It was... <i>incredible!</i>');
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
      // TODO-QSP: 'You remember how you <i>came</i> as <<$npcdesc>>''s cum filled your womb to the brim, ' + iif(cum_l...
    } else {
      // TODO-QSP: 'You remember the feeling of how it <i>filled</i> you as <<$npcdesc>> came, the pulsing of his cock ...
    }
  }, goto: ['sex_ev_reflection', 'top_menu'] },
      { label: '<i>Interesting</i>', handler: (st: GameState) => {
    scene.text('It was... <i>interesting...</i>');
    // TODO-QSP: dynamic text: You find it hard to describe how it made you feel. One second, <<$npcdesc>> was ...
    scene.text(`You find it hard to describe how it made you feel. One second, ${((s as any).npcdesc ?? 0)} was pulsing inside you, the next you felt yourself getting <i>filled</i> by something. Almost like you were getting... <i>inflated?</i>`);
    scene.text('Thinking about it those terms makes it really hard to decide if you found it pleasurable or not. If nothing else, your first creampie was certainly <i>a</i> feeling...');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reflection', 'creampie_menu'
  } },
  ]);
  scene.build();
}

function enterGeneralCreampieReflect(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['creampie_feel'] = 1;
  if (((s as any).pcs_traits ?? 0)?.['creampie_fetish'] === 0) {
    scene.actions([
      { label: 'Gross', handler: (st: GameState) => {
    scene.text('It was... <i>so gross...</i>');
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
      // TODO-QSP: dynamic text: Sure, you came when it happened, but now with the benefit of hindsight and post-...
      scene.text('Sure, you came when it happened, but now with the benefit of hindsight and post-nut clarity, \' + iif(cum_loc[\'vagina\'] > 0, \'the sensation of his cum leaking out of you gives you shivers. \', \'the memory of his cum leaking out of you gives you shivers. \') + \'All <i>sticky</i> and <i>slimy</i>. You shudder just thinking about it.');
    } else {
      // TODO-QSP: iif(cum_loc['vagina'] > 0, 'You grimace as you feel another glob of the slimy white stuff ooze out o...
      scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'top_menu'] }]);
    }
  } },
      { label: 'Weird', handler: (st: GameState) => {
    scene.text('It was... <i>weird...</i>');
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
      scene.text('Sure, you came when it happened, but it might have been <i>despite</i> that rather than because of it. It just feels so strange, to have a guy throbbing inside of you, releasing his goo into your body. It doesn\'t feel bad exactly, just <i>weird.</i>');
    } else {
      scene.text('The feeling of another person <i>throbbing</i> inside you and then unloading warm goo into your body is decidedly strange. Not bad exactly, just <i>weird.</i>');
    }
    if (((s as any).stat ?? 0)?.['total_creampies'] > 10) {
      // TODO-QSP: '<i>I don''t think I''ll ever get used to this...</i> you think' + iif(cum_loc['vagina'] = 0, '.', '...
    } else {
      // TODO-QSP: '<i>I don''t know if I''ll ever get used to this...</i> you think' + iif(cum_loc['vagina'] = 0, '.',...
    }
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Warm', handler: (st: GameState) => {
    scene.text('It was... <i>warm...</i>');
    // TODO-QSP: dynamic text: That's the thing that stuck with you the most. How you felt <<$npcdesc>>'s cock ...
    scene.text(`That's the thing that stuck with you the most. How you felt ${((s as any).npcdesc ?? 0)}'s cock throb inside you and then all of a sudden you felt that heat spreading through the inside of your hips. And how it drained from you the moment he pulled out, that warmth trickling from your snatch down your thighs...`);
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    { label: 'Amazing', handler: (st: GameState) => {
    scene.text('It felt... <i>incredible!</i>');
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] > 0) {
      // TODO-QSP: 'You remember how you <i>came</i> as <<$npcdesc>>''s cum filled your womb to the brim, ' + iif(cum_l...
    } else {
      // TODO-QSP: 'You remember the feeling of how it <i>filled</i> you as <<$npcdesc>> came, the pulsing of his cock ...
    }
  }, goto: ['sex_ev_reflection', 'top_menu'] },
    { label: '<i>Interesting</i>', handler: (st: GameState) => {
    scene.text('It was... <i>interesting...</i>');
    // TODO-QSP: dynamic text: You find it hard to describe how it made you feel. One second, <<$npcdesc>> was ...
    scene.text(`You find it hard to describe how it made you feel. One second, ${((s as any).npcdesc ?? 0)} was pulsing inside you, the next you felt yourself getting <i>filled</i> by something. Almost like you were getting... <i>inflated?</i>`);
    scene.text('Thinking about it those terms makes it really hard to decide if you found it pleasurable or not. But it certainly was <i>a</i> feeling...');
  }, goto: ['sex_ev_reflection', 'top_menu'] },
  ]);
  scene.build();
}

function enterPregnancyMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['pregnant_thoughts'] === 0) {
      scene.actions([
        { label: 'Pregnancy wondering', goto: ['sex_ev_reflection', 'pregnancy_wonder'] },
        { label: 'Pregnancy worries', goto: ['sex_ev_reflection', 'pregnancy_worries'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_reflection', 'top_menu');
  } },
  ]);
  scene.build();
}

function enterPregnancyHopes(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['pregnant_thoughts'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  ((s as any).sex_ev ?? {})['pregnant_thoughts'] = 1;
  scene.text('<i>I wonder if I\'ll get pregnant?</i> you think idly.');
  if (((s as any).sex_ev ?? 0)?.['broken_condom'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'That the condom broke in the first place is proof of that. Although you <i>also</i> kept going after it broke so maybe that one isn\'t to blame...';
    } else {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'That the condom broke in the first place is proof of that.';
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] > 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'You weren\'t being particularly safe, going without a condom.';
    }
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    // TODO-QSP: 'It''s a safe time in your cycle, but still... It''s not like you''re on birth control. ' + iif(cum_...
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      // TODO-QSP: 'You''re not exactly ovulating right now, but it''s not like you''re on birth control either. ' + ii...
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        // TODO-QSP: 'This is the most fertile part of your cycle right now. If you were going to get pregnant, this woul...
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'pregnancy_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPregnancyWonder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  ((s as any).sex_ev ?? {})['pregnant_thoughts'] = 1;
  scene.text('<i>I wonder if I\'ll get pregnant?</i> you think idly.');
  if (((s as any).sex_ev ?? 0)?.['broken_condom'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'That the condom broke in the first place is proof of that. Although you <i>also</i> kept going after it broke so maybe that one isn\'t to blame...';
    } else {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'That the condom broke in the first place is proof of that.';
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] > 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'You weren\'t being particularly safe, going without a condom.';
    }
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    // TODO-QSP: 'It''s a safe time in your cycle, but still... It''s not like you''re on birth control. ' + iif(cum_...
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      // TODO-QSP: 'You''re not exactly ovulating right now, but it''s not like you''re on birth control either. ' + ii...
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        // TODO-QSP: 'This is the most fertile part of your cycle right now. If you were going to get pregnant, this woul...
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'pregnancy_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPregnancyWorries(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
  ((s as any).sex_ev ?? {})['pregnant_thoughts'] = 1;
  scene.text('<i>I hope I don\'t get pregnant...</i> you think nervously to yourself.');
  if (((s as any).sex_ev ?? 0)?.['broken_condom'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'It\'s not your fault that the condom broke. But that still doesn\'t help you feel any safer.';
    } else {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'It\'s not your fault that the condom broke. But that still doesn\'t help you feel any safer. And then you kept going bareback afterwards! What were you thinking?!';
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] > 0) {
      ((s as any).sex_ev ?? {})['condom_thoughts'] = 'You really shouldn\'t have done it without a condom... What were you thinking?!';
    }
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    // TODO-QSP: 'It''s a safe time in your cycle, but still... ' + iif(cum_loc['vagina'] > 0, 'The sticky semen seep...
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      // TODO-QSP: 'You''re not in the most fertile part of your cycle, but still... ' + iif(cum_loc['vagina'] > 0, 'Th...
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        // TODO-QSP: 'You''re in the <i>most fertile</i> part of your cycle right now... ' + iif(cum_loc['vagina'] > 0, '...
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_reflection', 'pregnancy_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterPregnancyDaydream(s: GameState, scene: SceneBuilder): void {
  scene.text('Thoughts drift into daydreams about what might happen for you if motherhood is imminent...');
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_reflection ---------------------------------
  scene.actions([
    { label: 'Boy or girl?', handler: (st: GameState) => {
    scene.text('<i>Would I want it to be a boy or a girl?</i>');
    scene.actions([
      { label: 'A boy would be nice', handler: (st: GameState) => {
    scene.text('A boy would be nice...');
    scene.text('You could take him to the field and play football with him like Kolka. Maybe he could learn some mechanical skills from his granddaddy.');
  } },
      { label: 'A girl would be nice', handler: (st: GameState) => {
    scene.text('A girl would be nice...');
    // TODO-QSP: 'You could go shopping with her, do her hair. Her aunty Anya would love to teach her to use makeup. ...
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'top_menu':
      enterTopMenu(s, scene);
      break;
    case 'what_did_i_do':
      enterWhatDidIDo(s, scene);
      break;
    case 'lost_virgin':
      enterLostVirgin(s, scene);
      break;
    case 'glad_deflowered':
      enterGladDeflowered(s, scene);
      break;
    case 'virgin_whore':
      enterVirginWhore(s, scene);
      break;
    case 'catching_feelings':
      enterCatchingFeelings(s, scene);
      break;
    case 'creampie_menu':
      enterCreampieMenu(s, scene);
      break;
    case 'first_creampie_reflect':
      enterFirstCreampieReflect(s, scene);
      break;
    case 'general_creampie_reflect':
      enterGeneralCreampieReflect(s, scene);
      break;
    case 'pregnancy_menu':
      enterPregnancyMenu(s, scene);
      break;
    case 'pregnancy_hopes':
      enterPregnancyHopes(s, scene);
      break;
    case 'pregnancy_wonder':
      enterPregnancyWonder(s, scene);
      break;
    case 'pregnancy_worries':
      enterPregnancyWorries(s, scene);
      break;
    case 'pregnancy_daydream':
      enterPregnancyDaydream(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_reflection: LocationDef = {
  name: 'sex_ev_reflection',
  title: '<i>What did I do...?</i>',
  region: 'other',
  enter: enter,
};
