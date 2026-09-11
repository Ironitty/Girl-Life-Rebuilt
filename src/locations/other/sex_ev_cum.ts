import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGirlCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
      ((s as any).sex_ev ?? {})['rough_cum'] = (((s as any).sex_ev ?? {})['rough_cum'] ?? 0) + (1);
    }
    ((s as any).sex_ev ?? {})['consecutive_orgasm'] = (((s as any).sex_ev ?? {})['consecutive_orgasm'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((s as any).pcs_horny ?? 0)/3);
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      ((s as any).sex_ev ?? {})['consecutive_orgasm_desc'] = 'Come again!';
    } else {
      ((s as any).sex_ev ?? {})['consecutive_orgasm_desc'] = 'Come!';
    }
    scene.actions([
      { label: '<<$sex_ev[\'consecutive_orgasm_desc\']>>', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'miss_cum'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'doggy_cum'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cowgirl_cum'] }]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_doggy_cum'] }]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] !== 'creampie_surprise'  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] < 1) {
      scene.actions([
        { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fake_orgasm_count'] = (((s as any).sex_ev ?? {})['fake_orgasm_count'] ?? 0) + (1);
    (s as any).fake_orgasm = ((s as any).fake_orgasm ?? 0) + (1);
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/vag/${((s as any).sex_ev ?? 0)?.['position']}/slow2.mp4`);
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    if (((s as any).pcs_horny ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is doing a good job, even if he's not quite getting you off. You do...
      scene.text(`${((s as any).npcdesc ?? 0)} is doing a good job, even if he's not quite getting you off. You don't think you'll manage to come this time, but you don't want him to feel bad about it either. So...`);
    } else {
      if (((s as any).pcs_horny ?? 0) >= 40) {
        // TODO-QSP: dynamic text: <<$npcdesc>> isn't doing bad, but he's nowhere near to really getting you off. B...
        scene.text(`${((s as any).npcdesc ?? 0)} isn't doing bad, but he's nowhere near to really getting you off. But you also don't want him to feel bad, so...`);
      }
    }
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((s as any).npcdesc ?? 0)}'s cock with your pussy as hard as you can, dramatically tensing all your muscles as hard as you can, forcing your body to quiver.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((s as any).npcdesc ?? 0)} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant with feigned breathlessness and smile at him. "You\'re incredible."');
    scene.text('He smiles back and gets right on back to fucking you.');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
  } },
      ]);
    }
  }
  scene.build();
}

function enterMissCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss3') {
    scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking you through your last orgasm and is still fucking you straight through another one, magic bursts continuing inside you like nuclear bombs and your uncontrollable shudders their aftershocks.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking you through your last orgasm and is still fucking you straight through another one.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? 0)}'s hand as the barrage of orgasmic magic continues exploding inside you.`);
        } else {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? 0)}'s hand.`);
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cock pounding your insides is too good and you find yourself comi...
      scene.text(`${((s as any).npcdesc ?? 0)}'s cock pounding your insides is too good and you find yourself coming. <i>Hard</i>.`);
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: Your pussy clenches down on the cock inside it and your body goes into spasms as...
        scene.text(`Your pussy clenches down on the cock inside it and your body goes into spasms as orgasmic magic floods your system. Reality wobbles and suddenly it's like experiencing your orgasm in slow motion, dragging the pleasure out so long it's painful. You try to let out a moan but ${((s as any).npcdesc ?? 0)} clamps his hand over your mouth, holding your head down. It drives you crazy and your eyes roll back in your head, unable to do anything but quiver and give muffled groans that feel to you like they last a lifetime.`);
      } else {
        // TODO-QSP: dynamic text: Your pussy clenches down on the cock inside it as your body goes into orgasmic s...
        scene.text(`Your pussy clenches down on the cock inside it as your body goes into orgasmic spasms. You try to let out a moan but ${((s as any).npcdesc ?? 0)} clamps his hand over your mouth, holding your head down. It drives you crazy and your eyes roll back in your head, unable to do anything but quiver and give muffled groans.`);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
      scene.img('images/shared/sex/vag/miss/kiss1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
        scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
      } else {
        scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
      }
    }
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
        // TODO-QSP: dynamic text: <<$npcdesc>> keeps hitting all the right spots inside you and you can't help but...
        scene.text(`${((s as any).npcdesc ?? 0)} keeps hitting all the right spots inside you and you can't help but giggle in delight as he forces your orgasm to keep going, refusing to stop fucking you for even a second.`);
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          scene.text('Bursts of magic pop inside you like firecrackers with every new climax, fueling the fire as you feel the energy course through your entire body, from your womb to the tips of your nipples.');
        }
      } else {
        scene.text('You\'ve been coming for so long now, you think you might be going insane. Or having a stroke. Or maybe a heart attack. All you know is that the pleasure is so intense that it <i>hurts</i>.');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          scene.text('<i>I wonder if a witch has ever literally exploded from their own magic?</i> the last thought of your delirious mind wonders...');
        } else {
          scene.text('<i>I wonder if I\'m going to die?</i> the last conscious part of your mind wonders...');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
        scene.text('"<i>Mmmph~! Mmm~! Mmmm!</i>"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: Magic erupts from your womb as you come, but it doesn't stop you from kissing <<...
          scene.text(`Magic erupts from your womb as you come, but it doesn't stop you from kissing ${((s as any).npcdesc ?? 0)}, forcing your face against his as wave after wave of magical energy washes through you, burning like fire inside your veins. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry directly into ${((s as any).npcdesc ?? 0)}'s mouth as you are finally forced to break the kiss and carnal magic <i>explodes</i> from your body. ${((s as any).npcdesc ?? 0)} remains oblivious, fucking you straight through your witchy orgasm.`);
        } else {
          // TODO-QSP: dynamic text: You keep kissing <<$npcdesc>> even as you come, forcing your face against his as...
          scene.text(`You keep kissing ${((s as any).npcdesc ?? 0)} even as you come, forcing your face against his as wave after wave of orgasm washes over you. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry directly into ${((s as any).npcdesc ?? 0)}'s mouth as you are finally forced to break the kiss and the release of climax courses through your entire body, quivering around the cock inside you.`);
        }
      } else {
        scene.text('"<i>Ah~!</i> I\'m-! I\'m gonna-"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come, magic erupting from your wom...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, burning like fire inside your veins. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry as carnal magic <i>explodes</i> from your body. ${((s as any).npcdesc ?? 0)} remains oblivious, fucking you straight through your witchy orgasm.`);
        } else {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come. Your abs go taut and your pu...
          scene.text(`You can't even finish the sentence before you come. Your abs go taut and your pussy clenches down on ${((s as any).npcdesc ?? 0)}. Your toes curl in pleasure as your back arches, and you let out a wordless cry as the release of climax courses through your entire body that quivers around the cock inside you.`);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      qspCall(s, 'sex_ev_cum', 'surprise_cum_together');
    } else {
      qspCall(s, 'sex_ev_cum', 'fuck_cum2');
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  scene.build();
}

function enterDoggyCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'doggy3') {
    scene.img('images/shared/sex/vag/doggy/orgasm_rough1.mp4');
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking you through your last orgasm and is still fucking you straight through another one, the magic continuing to burst inside you like nuclear bombs and your uncontrollable shudders their aftershocks.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking you through your last orgasm and is still fucking you straight through another one.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? 0)}'s hand as the barrage of orgasmic magic continues exploding inside you.`);
        } else {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? 0)}'s hand.`);
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
      scene.text(`${((s as any).npcdesc ?? 0)} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? 0)} shoves your head down into the mattress.`);
        scene.text('At that moment, magic bursts from your womb.');
        // TODO-QSP: dynamic text: Reality wobbles, and everything slows down. Your orgasm feels like it's being dr...
        scene.text(`Reality wobbles, and everything slows down. Your orgasm feels like it's being dragged on for minutes, so intense it's painful. You give a muffled scream into the mattress that lasts a lifetime and ${((s as any).npcdesc ?? 0)} obliviously keeps pounding you through the entirety of your magical climax.`);
      } else {
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? 0)} shoves your head down into the mattress, fucking you head down, ass up, through the entirety of your orgasm.`);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          scene.text('Bursts of magic pop inside you like firecrackers with every new climax, fueling the fire as you feel the energy course through your entire body, from your womb to the tips of your nipples.');
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> keeps hitting all the right spots inside you, forcing your orgasm t...
        scene.text(`${((s as any).npcdesc ?? 0)} keeps hitting all the right spots inside you, forcing your orgasm to keep going. You give a wordless groan, struggling to stay upright as he continues to fuck you from behind.`);
      } else {
        scene.img('images/shared/sex/vag/doggy/orgasm_rough1.mp4');
        scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
        scene.text('You\'ve been coming for so long now, it\'s a wonder how you\'re still managing to stay on your kne-');
        scene.text('Oh. That\'s funny.');
        // TODO-QSP: dynamic text: Seems your knees gave out some time ago. But <<$npcdesc>> never stopped fucking ...
        scene.text(`Seems your knees gave out some time ago. But ${((s as any).npcdesc ?? 0)} never stopped fucking you, so you never stopped coming.`);
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          scene.text('<i>I wonder if a witch has ever literally exploded from their own magic?</i> the last thought of your delirious mind wonders...');
        } else {
          scene.text('<i>I wonder if I might</i> actually <i>die?</i> the last conscious part of your mind wonders...');
        }
      }
    } else {
      if (((s as any).npc_spanker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).sex_ev ?? {})['spank'] = (((s as any).sex_ev ?? {})['spank'] ?? 0) + (1);
        scene.img('images/shared/sex/vag/doggy/orgasm_spank1.mp4');
        scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come, magic erupting from your wom...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as your pussy clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock. Even as you shudder, ${((s as any).npcdesc ?? 0)} mercilessly spanks your ass, drawing cries from your lips as magic amplifies the hard slaps to searing flashes of fire. It's impossible to tell whether they're flashes of pain or pleasure.`);
        } else {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come. Your entire body convulses, ...
          scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as your pussy clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock. Even as you shudder in orgasm, ${((s as any).npcdesc ?? 0)} mercilessly spanks your ass, drawing cries of pain or pleasure from your lips. Which one, even you're not completely sure.`);
        }
      } else {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come, magic erupting from your wom...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your pussy clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock.`);
        } else {
          // TODO-QSP: dynamic text: You can't even finish the sentence before you come. Your entire body convulses, ...
          scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your pussy clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock.`);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      qspCall(s, 'sex_ev_cum', 'surprise_cum_together');
    } else {
      qspCall(s, 'sex_ev_cum', 'fuck_cum2');
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  scene.build();
}

function enterCowgirlCum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
  if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.text('Bursts of magic pop inside you like firecrackers with every new climax, fueling the fire as you feel the energy course through your entire body, from your womb to the tips of your nipples.');
      }
      // TODO-QSP: dynamic text: Your body won't stop moving, hips won't stop rolling, pussy won't stop tightenin...
      scene.text(`Your body won't stop moving, hips won't stop rolling, pussy won't stop tightening. Even as you convulse on top of ${((s as any).npcdesc ?? 0)} for what seems like the hundredth time, you can't seem to stop grinding yourself on top of his cock and you continue to come.`);
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.text('Saliva runs down your chin in waterfalls, streaming down your neck and glistening on your breasts. Your breathing comes in desperate gasps. Magic continuously explodes inside you like nuclear bombs, filling you with heat and passion, coming so hard in a never-ending cycle of orgasmic spasms it <i>hurts</i>.');
        scene.text('<i>I wonder if a witch has ever literally exploded from their own magic?</i> the last thought of your delirious mind wonders...');
      } else {
        // TODO-QSP: dynamic text: Saliva runs down your chin in waterfalls, streaming down your neck and glistenin...
        scene.text(`Saliva runs down your chin in waterfalls, streaming down your neck and glistening on your breasts. Your breathing comes in desperate gasps. Your body is caught in a never-ending cycle of orgasmic spasms, coming on ${((s as any).npcdesc ?? 0)}'s cock so hard it <i>hurts</i>.`);
        scene.text('<i>I wonder if it\'s possible to fuck myself to death?</i> the last conscious part of your mind wonders...');
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
      // TODO-QSP: dynamic text: The buildup of pressure inside you pops like a bubble. Waves of magic and pleasu...
      scene.text(`The buildup of pressure inside you pops like a bubble. Waves of magic and pleasure come crashing through you. Your muscles goes taut, your pussy clenches tight, and you quiver on top of ${((s as any).npcdesc ?? 0)}'s cock as magic explodes from your womb. It pours out of your every pore and orifice, carnal energy overflowing from your body that drives you into a realm of hypersensitive pleasure so intense it hurts.`);
    } else {
      // TODO-QSP: dynamic text: The buildup of pressure inside you crashes over the edge. Your body goes taut, y...
      scene.text(`The buildup of pressure inside you crashes over the edge. Your body goes taut, your pussy clenches tight, and you quiver on top of ${((s as any).npcdesc ?? 0)}'s cock as waves of orgasm wash over you.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      qspCall(s, 'sex_ev_cum', 'surprise_cum_together');
    } else {
      qspCall(s, 'sex_ev_cum', 'fuck_cum2');
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  scene.build();
}

function enterAnalDoggyCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'anal3') {
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      scene.img('images/shared/sex/anal/doggy/squirt1.mp4');
      scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking your ass through one orgasm into the next...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking your ass through one orgasm into the next. Magic continues bursting inside you like nuclear bombs and you lose control of your pussy, squirting all over the bed.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking your ass through one orgasm into the next...
          scene.text(`${((s as any).npcdesc ?? 0)} never slows down, fucking your ass through one orgasm into the next. Your pussy spasms, squirting girl cum all over the bed.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? 0)}'s hand as the barrage of orgasmic magic continues exploding inside you and you lose control of your pussy, squirting all over the bed.`);
        } else {
          // TODO-QSP: dynamic text: You've lost all conscious thought at this point and can do nothing more than spa...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on ${((s as any).npcdesc ?? 0)}'s cock, squirting your girlcum all over the bed.`);
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.img('images/shared/sex/anal/doggy/squirt1.mp4');
        // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
        scene.text(`${((s as any).npcdesc ?? 0)} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? 0)} shoves your head down into the mattress.`);
        scene.text('At that moment, magic bursts from your inside your ass.');
        // TODO-QSP: dynamic text: Reality wobbles, and everything slows down. You feel another burst inside your w...
        scene.text(`Reality wobbles, and everything slows down. You feel another burst inside your womb and suddenly you feel waterfalls of your juices gush from your pussy. Your orgasm feels like it's being dragged on for minutes, so intense it's painful. You give a muffled scream into the mattress that lasts a lifetime and ${((s as any).npcdesc ?? 0)} obliviously keeps pounding you through the entirety of your magical climax.`);
      } else {
        scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
        // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
        scene.text(`${((s as any).npcdesc ?? 0)} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
        // TODO-QSP: dynamic text: You groan loudly as your whole body clamps up and you can feel your asshole sque...
        scene.text(`You groan loudly as your whole body clamps up and you can feel your asshole squeezing tight around ${((s as any).npcdesc ?? 0)}'s cock. It's like you can feel the entire shape of him through your ass.`);
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.text('Bursts of magic pop inside you like firecrackers with every new climax, fueling the fire as you feel the energy course through your entire body, from your womb to the tips of your nipples.');
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> keeps hitting all the right spots inside you, forcing your orgasm t...
      scene.text(`${((s as any).npcdesc ?? 0)} keeps hitting all the right spots inside you, forcing your orgasm to keep going. You give a wordless groan, struggling to stay upright as he continues to fuck you from behind.`);
    } else {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: You can't even finish the sentence before you come, magic erupting from your wom...
        scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your asshole clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock.`);
      } else {
        // TODO-QSP: dynamic text: You can't even finish the sentence before you come. Your entire body convulses, ...
        scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your asshole clamps down on ${((s as any).npcdesc ?? 0)}'s ${((s as any).dick_desc ?? 0)} cock.`);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      qspCall(s, 'sex_ev_cum', 'surprise_cum_together');
    } else {
      qspCall(s, 'sex_ev_cum', 'fuck_cum2');
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  scene.build();
}

function enterFuckCumRandom(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['his_choice'] = 0;
  ((s as any).sex_ev ?? {})['cum_choice_int'] = Math.floor(Math.random() * 10) + 1;
  ((s as any).sex_ev ?? {})['fuck_count'] = (((s as any).sex_ev ?? {})['fuck_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] > 0) {
    qspCall(s, 'sex_ev_cum', 'cum_decider');
  } else {
    ((s as any).sex_ev ?? {})['his_choice'] = 1;
    if ((Math.floor(Math.random() * 10) + 1) >= 9) {
      qspCall(s, 'sex_ev_cum', 'cum_mouth');
    } else {
      if ((Math.floor(Math.random() * 8) + 1) >= 7) {
        qspCall(s, 'sex_ev_cum', 'cum_facial');
      } else {
        if ((Math.floor(Math.random() * 6) + 1) >= 5) {
          qspCall(s, 'sex_ev_cum', 'cum_tits3');
        } else {
          if ((Math.floor(Math.random() * 4) + 1) >= 3) {
            qspCall(s, 'sex_ev_cum', 'cum_facial');
          } else {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumDecider(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cum_choice_int'] = Math.floor(Math.random() * 10) + 1;
  if (((s as any).sex_ev ?? 0)?.['cycle_limit'] < ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
    ((s as any).sex_ev ?? {})['cum_choice_int'] = 10;
  }
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    ((s as any).sex_ev ?? {})['extra_caution'] = 0;
  } else {
    if ((((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  ||  (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'))  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      ((s as any).sex_ev ?? {})['extra_caution'] = ((s as any).rand ?? 0)(0, (1+((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)]));
    }
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    ((s as any).sex_ev ?? {})['extra_caution'] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] > 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice_int'] < 10) {
    ((s as any).sex_ev ?? {})['cum_warn'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] === 10  ||  ((s as any).sex_ev ?? 0)?.['2pump'] === 1  ||  ((s as any).sex_ev ?? 0)?.['cant_hold_cum'] === 1) {
    ((s as any).sex_ev ?? {})['cum_warn'] = 0;
    if (((s as any).sex_ev ?? 0)?.['extra_caution'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      ((s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
        ((s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
      } else {
        ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      ((s as any).sex_ev ?? {})['cum_warn'] = 1;
      ((s as any).sex_ev ?? {})['cum_where'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] + ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] >= 7) {
        ((s as any).sex_ev ?? {})['cum_warn'] = 1;
        ((s as any).sex_ev ?? {})['cum_where'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 4) {
          ((s as any).sex_ev ?? {})['cum_choice'] = ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)];
          if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
            ((s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
          }
          if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  (Math.floor(Math.random() * 150) + 1) < ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1)  &&  (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
            if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              ((s as any).sex_ev ?? {})['cum_warn'] = 0;
              ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
            } else {
              ((s as any).sex_ev ?? {})['cum_warn'] = 1;
              ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1)) {
              if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                ((s as any).sex_ev ?? {})['cum_warn'] = 0;
                ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
              } else {
                ((s as any).sex_ev ?? {})['cum_warn'] = 1;
                ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
              }
            } else {
              if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
                ((s as any).sex_ev ?? {})['cum_warn'] = 1;
                ((s as any).sex_ev ?? {})['cum_choice'] = '';
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 1) {
            if ((Math.floor(Math.random() * 5) + 1) === 1  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
              if ((((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                ((s as any).sex_ev ?? {})['cum_warn'] = 0;
                ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
              } else {
                if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
                  ((s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
                } else {
                  ((s as any).sex_ev ?? {})['cum_warn'] = 1;
                }
              }
            } else {
              if ((Math.floor(Math.random() * 4) + 1) === 1) {
                ((s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
              } else {
                if ((Math.floor(Math.random() * 3) + 1) === 1  &&  (((s as any).npc_know_hate_facials ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
                  ((s as any).sex_ev ?? {})['cum_choice'] = 'facial';
                } else {
                  if ((Math.floor(Math.random() * 2) + 1) === 1) {
                    ((s as any).sex_ev ?? {})['cum_choice'] = 'tits';
                  } else {
                    ((s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
                  }
                }
              }
            }
          } else {
            ((s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
      ((s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie';
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        ((s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie_surprise';
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'pullout') {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie';
          } else {
            ((s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie_surprise';
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cum_check'] = ((s as any).totminut ?? 0);
  if ((Math.floor(Math.random() * 25) + 1) === ((s as any).sex_ev ?? 0)?.['sex_stamina']  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 0) {
    ((s as any).sex_ev ?? {})['cant_hold_cum'] = 1;
    ((s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if ((((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] > ((s as any).sex_ev ?? 0)?.['sex_stamina']  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 0  &&  (Math.floor(Math.random() * 10) + 1) <= ((s as any).sex_ev ?? 0)?.['sex_stamina'])  ||  (((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] === 10)) {
    ((s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if (((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['2pump'] === 0) {
    ((s as any).sex_ev ?? {})['2pump'] = 1;
    ((s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['stop_orgasm'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    ((s as any).sex_ev ?? {})['girl_orgasm'] = 1;
  }
  scene.build();
}

function enterFuckCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_check'] < ((s as any).totminut ?? 0)) {
    qspCall(s, 'sex_ev_cum', 'cum_check');
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
  }
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1) {
    ((s as any).sex_ev ?? {})['morning_fuck'] = 1;
  }
  ((s as any).sex_ev ?? {})['fuck'] = 1;
  ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev ?? {})['no_sex'] = 0;
  ((s as any).sex_ev ?? {})['fuck_again'] = 0;
  ((s as any).sex_ev ?? {})['must_fuck'] = 0;
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    ((s as any).sex_ev ?? {})['gentle_fuck'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
    ((s as any).sex_ev ?? {})['steady_fuck'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
    ((s as any).sex_ev ?? {})['rough_fuck'] = 1;
  }
  qspCall(s, 'sex_ev_sex', 'pain_tracking');
  if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
    ((s as any).sex_ev ?? {})['dirty_talk_talk'] = 1;
  }
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['total_cycles'] = (((s as any).sex_ev ?? {})['total_cycles'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] >= 1  &&  (((s as any).sex_ev ?? 0)?.['cycle_limit'] > 1  ||  ((s as any).sex_ev ?? 0)?.['2pump'] === 1)) {
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'sex_ev_cum', 'cum_decider');
  }
  if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', '2pumpchump'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] <= ((s as any).sex_ev ?? 0)?.['sex_stamina'] + 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'girl_cum'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'fuck_cum2'] }]);
      } else {
        ((s as any).sex_ev ?? {})['consecutive_orgasm'] = 0;
        ((s as any).sex_ev ?? {})['kiss'] = 0;
      }
    }
  }
  scene.build();
}

function enterCumDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
      // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
      scene.text(`A short while later, ${((s as any).npcdesc ?? 0)} reaches his limit.`);
      scene.text('"I\'m-! Almost there!" he grunts, breaking away from your lips, panting heavily.');
    } else {
      // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
      scene.text(`A short while later, ${((s as any).npcdesc ?? 0)} reaches his limit.`);
      scene.text('"I\'m-! Almost there!" he grunts.');
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('"Me too," you moan back.');
    } else {
      if (((s as any).pcs_horny ?? 0) > 90) {
        scene.text('"I think I\'m close too," you moan back.');
      } else {
        scene.text('"Yeah?" you moan back.');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1  &&  ((s as any).sex_ev ?? 0)?.['his_choice'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
      // TODO-QSP: dynamic text: "What should I do?" <<$npcdesc>> asks.
      scene.text(`"What should I do?" ${((s as any).npcdesc ?? 0)} asks.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
        ((s as any).sex_ev ?? {})['he_ask'] = 1;
        ((s as any).sex_ev ?? {})['he_ask_creampie'] = 1;
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).mesec ?? 0) <= 0  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
          // TODO-QSP: dynamic text: "Can I come inside you? Is it safe today?" <<$npcdesc>> whimpers almost pleading...
          scene.text(`"Can I come inside you? Is it safe today?" ${((s as any).npcdesc ?? 0)} whimpers almost pleadingly.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            // TODO-QSP: dynamic text: "Let's come together," <<$npcdesc>> moans.
            scene.text(`"Let's come together," ${((s as any).npcdesc ?? 0)} moans.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>-!" <<$npcdesc>> grunts. "I'm gonna come in your pussy-!"
              scene.text(`"${((s as any).pcs_nickname ?? 0)}-!" ${((s as any).npcdesc ?? 0)} grunts. "I'm gonna come in your pussy-!"`);
            } else {
              // TODO-QSP: dynamic text: "I wanna come inside you so bad," <<$npcdesc>> says.
              scene.text(`"I wanna come inside you so bad," ${((s as any).npcdesc ?? 0)} says.`);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'anal_creampie') {
          ((s as any).sex_ev ?? {})['he_ask'] = 1;
          ((s as any).sex_ev ?? {})['he_ask_creampie'] = 1;
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            // TODO-QSP: dynamic text: "Let's come together," <<$npcdesc>> moans.
            scene.text(`"Let's come together," ${((s as any).npcdesc ?? 0)} moans.`);
          } else {
            // TODO-QSP: dynamic text: "I wanna come in your ass so bad," <<$npcdesc>> says.
            scene.text(`"I wanna come in your ass so bad," ${((s as any).npcdesc ?? 0)} says.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
            ((s as any).sex_ev ?? {})['he_ask'] = 1;
            ((s as any).sex_ev ?? {})['he_ask_mouth'] = 1;
            // TODO-QSP: dynamic text: "Let me come in your mouth," <<$npcdesc>> says.
            scene.text(`"Let me come in your mouth," ${((s as any).npcdesc ?? 0)} says.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
              ((s as any).sex_ev ?? {})['he_ask'] = 1;
              ((s as any).sex_ev ?? {})['he_ask_facial'] = 1;
              // TODO-QSP: dynamic text: "Let me finish on your face," <<$npcdesc>> says. "I want to see you covered in i...
              scene.text(`"Let me finish on your face," ${((s as any).npcdesc ?? 0)} says. "I want to see you covered in it."`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
                ((s as any).sex_ev ?? {})['he_ask'] = 1;
                ((s as any).sex_ev ?? {})['he_ask_tits'] = 1;
                // TODO-QSP: dynamic text: "I wanna come on your tits," <<$npcdesc>> says.
                scene.text(`"I wanna come on your tits," ${((s as any).npcdesc ?? 0)} says.`);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterFuckCum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_cum', 'cum_dialogue');
  if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1  &&  ((s as any).sex_ev ?? 0)?.['his_choice'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['he_ask_facial'] === 1) {
      scene.actions([
        { label: 'You can come on my face', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_facial');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'On my face!', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
      ((s as any).sex_ev ?? {})['facial_ask'] = 1;
    }
    qspCall(s, 'sex_ev_cum', 'cum_facial');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
      scene.actions([
        { label: 'Let him come in your mouth', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_mouth');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'In my mouth!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['his_choice'] = 0
    // TODO-QSP: sex_ev['mouth_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_mouth');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
      scene.actions([
        { label: 'Let him come on your tits', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_tits1');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'On my tits!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['tits_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_tits1');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      scene.actions([
        { label: 'Let him come in the condom', goto: ['sex_ev_cum', 'cum_condom'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_cum', 'creampie_menu');
      if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== 'at_will'  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
        scene.actions([
          { label: 'Not inside me!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['not_inside'] = 1
  }, goto: ['sex_ev_cum', 'cum_not_inside'] },
        ]);
      }
      scene.actions([
        { label: 'Pull out!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['pullout_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_pullout'] },
        { label: 'Not yet!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['not_yet_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_not_yet'] },
      ]);
    }
    scene.actions([
      { label: 'Come wherever you want', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_wherever'] = 1;
    if (((s as any).sex_ev ?? 0)?.['he_ask'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('"Come~! Wherever~! You~! Want~!" you whimper pathetically, squeaking in pain with every thrust.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_feel_good'] !== 1) {
          scene.text('"Come~! Wherever~! You~! Want~!" you grunt uncomfortably with every thrust.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
            if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
              scene.text('"Come wherever you want," you squeak painfully.');
            } else {
              if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                scene.text('"Come wherever you want," you grunt stiffly.');
              } else {
                scene.text('"Come wherever you want," you smile sweetly.');
              }
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
              if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
                scene.text('"Come wherever you want," you squeak painfully.');
              } else {
                if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                  scene.text('"Come wherever you want," you grunt stiffly.');
                } else {
                  scene.text('"Come wherever you want!" you moan loudly.');
                }
              }
            } else {
              if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
                if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
                  scene.text('"Come-! Wherever-! You want-!" you squeak painfully, barely able to keep from crying.');
                } else {
                  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                    scene.text('"Come-! Wherever-! You want-!" you manage to grunt out stiffly.');
                  } else {
                    // TODO-QSP: dynamic text: "Come wherever you want!" you scream as <<$npcdesc>>'s cock keeps pounding into ...
                    scene.text(`"Come wherever you want!" you scream as ${((s as any).npcdesc ?? 0)}'s cock keeps pounding into you.`);
                  }
                }
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['his_choice'] = 2
    qspCall(st, 'sex_ev_cum', 'cum_wherever');
  } },
      ]);
    } else {
      ((s as any).sex_ev ?? {})['his_choice'] = 2;
      qspCall(s, 'sex_ev_cum', 'cum_wherever');
    }
  } },
      { label: 'Finish him with your hand', goto: ['sex_ev_cum', 'cum_jerkoff'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'pullout') {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_pullout');
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['his_choice'] === 2) {
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_his_choice');
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['boy_cum'] < 1) {
            qspCall(s, 'sex_ev_cum', 'girl_cum');
          } else {
            if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cum', 'cum_his_choice2'
  } },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumHisChoice(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 5) + 1) === 5  ||  ((s as any).sex_ev ?? 0)?.['his_choice'] === 2) {
    qspCall(s, 'sex_ev_cum', 'cum_his_choice2');
  }
  if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
      }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        qspCall(s, 'sex_ev_cum', 'cum_mouth');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          qspCall(s, 'sex_ev_cum', 'cum_facial');
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            qspCall(s, 'sex_ev_cum', 'cum_tits1');
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise'] }]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
                }
              }
            } else {
              qspCall(s, 'sex_ev_cum', 'cum_his_choice2');
            }
          }
        }
      }
    }
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        qspCall(s, 'sex_ev_cum', 'cum_mouth');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          qspCall(s, 'sex_ev_cum', 'cum_facial');
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            qspCall(s, 'sex_ev_cum', 'cum_tits3');
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise'] }]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
                }
              }
            } else {
              qspCall(s, 'sex_ev_cum', 'cum_his_choice2');
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumHisChoice2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['his_choice'] = 2;
  qspCall(s, 'sex_ev_cum', 'cum_decider');
  if (((s as any).sex_ev ?? 0)?.['where'] === 1) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        qspCall(s, 'sex_ev_cum', 'cum_mouth');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          qspCall(s, 'sex_ev_cum', 'facial_he_jerks');
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            qspCall(s, 'sex_ev_cum', 'cum_tits1');
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
              }
            }
          }
        }
      }
    }
  } else {
    qspCall(s, 'sex_ev_cum', 'cum_wherever');
  }
  scene.build();
}

function enterCumWherever(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
      qspCall(s, 'sex_ev_cum', 'cum_mouth');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
        qspCall(s, 'sex_ev_cum', 'facial_he_jerks');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
          qspCall(s, 'sex_ev_cum', 'cum_tits1');
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['extra_caution'] === 0)) {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
              ((s as any).sex_ev ?? {})['mouth_cum_count'] = (((s as any).sex_ev ?? {})['mouth_cum_count'] ?? 0) + (1);
              qspCall(s, 'sex_ev_cum', 'cum_mouth');
            } else {
              if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
                ((s as any).sex_ev ?? {})['facial_count'] = (((s as any).sex_ev ?? {})['facial_count'] ?? 0) + (1);
                qspCall(s, 'sex_ev_cum', 'facial_he_jerks');
              } else {
                if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
                  ((s as any).sex_ev ?? {})['cum_tits'] = (((s as any).sex_ev ?? {})['cum_tits'] ?? 0) + (1);
                  qspCall(s, 'sex_ev_cum', 'cum_tits3');
                } else {
                  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
                    if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
                    } else {
                      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
                    }
                  } else {
                    if ((Math.floor(Math.random() * 10) + 1) >= 9) {
                      qspCall(s, 'sex_ev_cum', 'cum_mouth');
                    } else {
                      if ((Math.floor(Math.random() * 8) + 1) >= 7) {
                        qspCall(s, 'sex_ev_cum', 'cum_facial');
                      } else {
                        if ((Math.floor(Math.random() * 6) + 1) >= 5) {
                          qspCall(s, 'sex_ev_cum', 'cum_tits1');
                        } else {
                          if ((Math.floor(Math.random() * 4) + 1) >= 3) {
                            qspCall(s, 'sex_ev_cum', 'facial_he_jerks');
                          } else {
                            scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_pullout'] }]);
                          }
                        }
                      }
                    }
                  }
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

function enterCumJerkoff(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  ((s as any).sex_ev ?? {})['cum_describe2'] = 'looking down at the strands of cum coating your fingers';
  ((s as any).sex_ev ?? {})['last_cum'] = 'hand';
  ((s as any).sex_ev ?? {})['cum_hand'] = (((s as any).sex_ev ?? {})['cum_hand'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/handjob/bossbjcum.jpg');
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips out from between your legs and you grab hold of his cock, rip...
      scene.text(`${((s as any).npcdesc ?? 0)} slips out from between your legs and you grab hold of his cock, ripping off the condom and fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips out from behind you and you grab hold of his cock, ripping of...
        scene.text(`${((s as any).npcdesc ?? 0)} slips out from behind you and you grab hold of his cock, ripping off the condom and fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>'s cock and rip off the condom, fervently jerking hi...
          scene.text(`You jump off of ${((s as any).npcdesc ?? 0)}'s cock and rip off the condom, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips out from between your legs and you grab hold of his cock, fer...
      scene.text(`${((s as any).npcdesc ?? 0)} slips out from between your legs and you grab hold of his cock, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips out from behind you and you grab hold of his cock, fervently ...
        scene.text(`${((s as any).npcdesc ?? 0)} slips out from behind you and you grab hold of his cock, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>'s cock and fervently jerk him until a fountain of w...
          scene.text(`You jump off of ${((s as any).npcdesc ?? 0)}'s cock and fervently jerk him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
        }
      }
    }
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  scene.build();
}

function enterCumFacial(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cock/jerk.jpg');
  if (((s as any).sex_ev ?? 0)?.['where'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_wherever'] !== 1) {
    scene.text('"Come on my face!"');
  } else {
    if (((s as any).sex_ev ?? 0)?.['he_ask_facial'] === 1) {
      scene.text('"Okay," you say. "Go ahead."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
        scene.text('"Not inside me!" you yelp frantically.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_facial'] !== 1) {
          scene.text('"Come on my face instead!"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_warn'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
            // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls his cock from inside you and moves up to your face, ...
            scene.text(`${((s as any).npcdesc ?? 0)} suddenly pulls his cock from inside you and moves up to your face, tearing off the condom. He starts rapidly jerking himself and you realize he's about to blow. In response, you...`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_warn'] !== 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls his cock from inside you and moves up to your face. ...
              scene.text(`${((s as any).npcdesc ?? 0)} suddenly pulls his cock from inside you and moves up to your face. He starts rapidly jerking himself and you realize he's about to blow. In response, you...`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
                // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and kneel down in front of him. He tears the con...
                scene.text(`You pull away from ${((s as any).npcdesc ?? 0)} and kneel down in front of him. He tears the condom off and jerks off over your face. Just before he comes, you...`);
              } else {
                // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and kneel down in front of him. He starts rapidl...
                scene.text(`You pull away from ${((s as any).npcdesc ?? 0)} and kneel down in front of him. He starts rapidly working his cock above your face and just before he comes, you...`);
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'facial_close_eyes');
  qspCall(s, 'sex_ev_cum', 'facial_tongue_cum');
  qspCall(s, 'sex_ev_cum', 'facial_tongue_spit');
  qspCall(s, 'sex_ev_cum', 'facial_brace');
  scene.actions([
    { label: 'Jerk him yourself', goto: ['sex_ev_cum', 'facial_jerk_him'] },
    { label: 'Jerk him into your mouth', goto: ['sex_ev_cum', 'facial_jerk_mouth'] },
  ]);
  scene.build();
}

function enterFacialJerkHim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_facial', 'pc_jerk');
  ((s as any).sex_ev ?? {})['last_cum'] = 'facial';
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  } else {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
  }
  ((s as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum from your eyes';
  scene.img('images/shared/sex/cum/facial/jerk_him1.mp4');
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and tears off the condom as h...
      scene.text(`${((s as any).npcdesc ?? 0)} slips his cock from between your legs and tears off the condom as he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and moves to straddle your ch...
        scene.text(`${((s as any).npcdesc ?? 0)} slips his cock from between your legs and moves to straddle your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you and tears off the condom as you ...
          scene.text(`${((s as any).npcdesc ?? 0)} slips his cock out from behind you and tears off the condom as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you as you flip over onto your back ...
            scene.text(`${((s as any).npcdesc ?? 0)} slips his cock out from behind you as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he's s...
                scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Climax breaks inside you just as hot cum erupts from <<$npcdesc>>'s cock, spatte...
    scene.text(`Climax breaks inside you just as hot cum erupts from ${((s as any).npcdesc ?? 0)}'s cock, spattering across your O-face.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you. He te...
      scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? 0)} slip his cock from inside you. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you, and y...
        scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? 0)} slip his cock from inside you, and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. He tear...
          scene.text(`You pull away from ${((s as any).npcdesc ?? 0)} and turn around, laying down on the bed. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. Pulling...
            scene.text(`You pull away from ${((s as any).npcdesc ?? 0)} and turn around, laying down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he's s...
                scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
    scene.text('The warm liquid making contact with your skin is the only thing left you need and you come with him, getting caught in the throes of orgasm as you keep working his shaft, emptying his balls all over your face.');
  }
  qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  scene.build();
}

function enterFacialJerkMouth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_facial', 'pc_jerk');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  } else {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
  }
  ((s as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum from your eyes';
  scene.img('images/shared/sex/cum/mouth/cum15.mp4');
  if (((s as any).sex_ev ?? 0)?.['his_choice'] !== 2) {
    if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
      scene.text('"In my mouth!"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
        scene.text('"Okay," you say.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_facial'] !== 1) {
          scene.text('"Cum in my mouth instead!"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
            scene.text('"Not inside me!" you yelp frantically.');
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and tears off the condom as h...
      scene.text(`${((s as any).npcdesc ?? 0)} slips his cock from between your legs and tears off the condom as he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and moves to straddle your ch...
        scene.text(`${((s as any).npcdesc ?? 0)} slips his cock from between your legs and moves to straddle your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you and tears off the condom as you ...
          scene.text(`${((s as any).npcdesc ?? 0)} slips his cock out from behind you and tears off the condom as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you as you flip over onto your back ...
            scene.text(`${((s as any).npcdesc ?? 0)} slips his cock out from behind you as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he's s...
                scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Climax breaks inside you just as hot cum erupts from <<$npcdesc>>'s cock, spatte...
    scene.text(`Climax breaks inside you just as hot cum erupts from ${((s as any).npcdesc ?? 0)}'s cock, spattering all over your tongue and across your cheeks.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you. He te...
      scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? 0)} slip his cock from inside you. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you, and y...
        scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? 0)} slip his cock from inside you, and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. He tear...
          scene.text(`You pull away from ${((s as any).npcdesc ?? 0)} and turn around, laying down on the bed. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
            // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
            scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he's s...
              scene.text(`You hop off of ${((s as any).npcdesc ?? 0)} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
            }
          }
        }
      }
    }
  }
  if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
    scene.text('The warm liquid making contact with your skin is the only thing left you need and you come with him, getting caught in the throes of orgasm as you keep working his shaft, emptying his balls all over your face.');
  }
  qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  scene.build();
}

function enterFacialHeJerks(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  qspCall(s, 'sex_ev_cum', 'facial_close_eyes');
  qspCall(s, 'sex_ev_cum', 'facial_tongue_cum');
  qspCall(s, 'sex_ev_cum', 'facial_tongue_spit');
  qspCall(s, 'sex_ev_cum', 'facial_brace');
  scene.build();
}

function enterCumCannonFacial(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFacialWipeEyes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions', 'bask_satisfaction');
  scene.actions([
    { label: 'Wipe your eyes', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial31.jpg');
    // TODO-QSP: dynamic text: You carefully wipe the cum away from your eyes and open them. The edges of your ...
    scene.text(`You carefully wipe the cum away from your eyes and open them. The edges of your vision are still blurry with sticky liquid, but you can still see ${((s as any).npcdesc ?? 0)}, his cock hanging above you.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterFacialCloseEyes(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Close your eyes', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_facial');
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'wiping the cum from your eyes';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('You close your eyes and moments later hot liquid splashes across your face, the sensation making you flinch involuntarily.');
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your skin is the only thing left you need and you come with him, quivering in orgasm as he empties his balls all over your face.');
    }
    qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
  } },
  ]);
  scene.build();
}

function enterFacialTongueCum(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stick out your tongue', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'licking your lips';
    qspCall(s, 'sex_ev_stats', 'cum_mouth_facial');
    qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'face_mouth';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial25.mp4');
    if (((s as any).sex_ev ?? 0)?.['his_choice'] !== 2) {
      if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
        scene.text('"In my mouth!"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
          scene.text('"Okay," you say.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1  &&  ((s as any).sex_ev ?? 0)?.['he_ask_facial'] !== 1) {
            scene.text('"Cum in my mouth instead!"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
              scene.text('"Not inside me!" you yelp frantically.');
            }
          }
        }
      }
    }
    scene.text('You hop off the bed and kneel down, opening your mouth wide and sticking out your tongue as far as it can go. Moments later, a hot glob of salty liquid lands directly on your tongue, followed by more that spatters across your face, running down your cheek and dripping onto your breasts.');
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your tongue is the only thing left you need and you come with him, struggling to catch the rest of his load as you quiver in orgasm.');
    }
    qspCall(s, 'sex_ev_cum', 'cum_mouth2');
    scene.actions([
      { label: 'Gulp', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_swallow');
    scene.img('images/shared/sex/cum/facial/facial26.mp4');
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you close your mout...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you close your mouth and swallow, gulping down the entire load. You pant heavily in the aftershocks of your orgasm, looking up at ${((s as any).npcdesc ?? 0)} through cum-glazed eyes.`);
    } else {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you close your mout...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you close your mouth and swallow, gulping down the entire load. You open your mouth again afterwards to pick up any stray shots, but it seems ${((s as any).npcdesc ?? 0)} is finished so you open your eyes to look at him.`);
    }
    if (((s as any).npc_seen_swallow ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).sex_ev ?? 0)?.['swallow_comment'] !== ((s as any).daystart ?? 0)) {
      ((s as any).sex_ev ?? {})['swallow_comment'] = ((s as any).daystart ?? 0);
      scene.text('"I love watching you swallow," he says affectionately, smiling down at you.');
    } else {
      if (((s as any).npc_seen_swallow ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        scene.text('"You\'re the best," he says affectionately, smiling down at you.');
      } else {
        scene.text('"That\'s fucking hot," he grins down at you.');
      }
    }
    ((s as any).npc_seen_swallow ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
  } },
      { label: 'Force it down (hide your disgust)', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'sex_ev_stats', 'cum_swallow', 'disgust');
    scene.img('images/shared/sex/cum/mouth/swallow6.mp4');
    // TODO-QSP: dynamic text: You can't take it anymore and close your mouth, continuing to look up at <<$npcd...
    scene.text(`You can't take it anymore and close your mouth, continuing to look up at ${((s as any).npcdesc ?? 0)} as he releases the rest of his load all over your lips and the revulsion and nausea wells up in your throat. Your eyes water with the effort but you manage to gulp, forcing the vile liquid down, and give ${((s as any).npcdesc ?? 0)} what feels like one of the fakest smiles you've ever put on.`);
    scene.text('But hopefully he doesn\'t notice...');
    if (((s as any).npc_seen_swallow ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).sex_ev ?? 0)?.['swallow_comment'] !== ((s as any).daystart ?? 0)) {
      ((s as any).sex_ev ?? {})['swallow_comment'] = ((s as any).daystart ?? 0);
      scene.text('"I love watching you swallow," he says affectionately, smiling down at you.');
    } else {
      if (((s as any).npc_seen_swallow ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        scene.text('"You\'re the best," he says affectionately, smiling down at you.');
      } else {
        scene.text('"That\'s fucking hot," he grins down at you.');
      }
    }
    ((s as any).npc_seen_swallow ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFacialTongueSpit(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stick out your tongue (spit)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['next_act1'] = 'sex_ev_after';
    ((s as any).sex_ev ?? {})['next_act2'] = 'pre';
    qspCall(s, 'sex_ev_stats', 'cum_mouth_facial', 'spit');
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'letting the rest of his cum dribble from your lips';
    ((s as any).sex_ev ?? {})['bj_cum'] = 2;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial29.mp4');
    // TODO-QSP: dynamic text: You open your mouth wide and stick your tongue out, waiting for the shot to come...
    scene.text(`You open your mouth wide and stick your tongue out, waiting for the shot to come. ${((s as any).npcdesc ?? 0)} grins, continuing to jack off with one hand and grabbing you by the hair with the other, positioning your face right in front of his cock. Moments later, spurts of semen erupt from it, spattering across your face and covering your tongue. You quickly spit the bitter liquid out over your lips as he continues to cum, a couple stray shots flying into your hair. A few seconds later, he stops ejaculating and releases your hair, stepping back from you.`);
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your tongue is the only thing left you need and you come with him, even as more cum continues to splash against your cheeks and dribble down your chin.');
    }
    qspCall(s, 'sex_ev_cum', 'facial_wipe_eyes');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
  } },
  ]);
  scene.build();
}

function enterFacialBrace(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Brace yourself (disgust)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_facial');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial30.mp4');
    scene.text('The first shot of cum hits you directly in the eye, and you squeeze both of them shut as you to cringe in disgust. More and more spurts come out, spraying across your face and completely covering your eyes. By the time he\'s finished orgasming, your visage is absolutely plastered with semen and your expression is stuck in an involuntary grimace.');
    scene.text('"Oh my god! That\'s so gross!" you cringe.');
    // TODO-QSP: dynamic text: Carefully wiping the cum from your eyes, you blink them open, vision ringed with...
    scene.text(`Carefully wiping the cum from your eyes, you blink them open, vision ringed with blurry white edges, and the first sight you're greeted with is ${((s as any).npcdesc ?? 0)} wearing a shit eating grin, looking at your plastered face.`);
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  &&  ((s as any).sex_ev ?? 0)?.['facial_ask'] === 1  &&  ((s as any).sex_ev ?? 0)?.['facial_hate_comment'] !== ((s as any).daystart ?? 0)) {
      scene.text('"You hate it so much," he says "But you still asked me to do it?"');
      scene.actions([
        { label: 'I know you like it', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"I did it for you. I know you like it," you say, giving him a dirty look. "I don\'t know why I let you. What was I thinking?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> just laughs at your reaction.
    scene.text(`${((s as any).npcdesc ?? 0)} just laughs at your reaction.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['he_ask_facial'] === 1) {
        scene.actions([
          { label: 'I can\'t believe I let you do this', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"I can\'t <i>believe</i> I let you do this," you grimace, spitting away the disgusting fluid from where it seeps past your lips.');
    scene.text('"You look great," he says back, smiling smugly.');
    scene.text('"Yeah, yeah, whatever," you say, digust deepening as you feel another glob dribble down your cheek.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You better be thankful', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"You better be thankful I let you do this," you grumble. "This is <i>vile</i>."');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>," he smiles back, patting you on the head. "I apprecia...
    scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}," he smiles back, patting you on the head. "I appreciate it. You look great by the way."`);
    scene.text('You roll your eyes, but at least he appreciates what you go through for him.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You\'re the worst', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"You\'re the worst," you grumble.');
    scene.text('"You\'re the best," he says back, patting you gently on the head. "I really enjoyed it."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1) {
          ((s as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum away from your eyes';
          scene.text('"You asked me to do it."');
          if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
            ((s as any).sex_ev ?? {})['cum_describe1'] = 'Because,';
            qspCall(s, 'sex_ev_reactions', 'no_cum_inside');
          } else {
            if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
              scene.actions([
                { label: 'Swallowing is gross', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Better this than in my mouth," you grimace, <<$sex_ev['cum_describe2']>>. "Like...
    scene.text(`"Better this than in my mouth," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2']}. "Like I'd ever want to swallow <i>this</i>." You gag at the thought of it.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                { label: 'I don\'t like you enough for that', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don't like you enough to let you do that," you grimace, <<$sex_ev['cum_descri...
    scene.text(`"I don't like you enough to let you do that," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2']}. "God, I wish I did though. This is awful."`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
                scene.actions([
                  { label: 'Feels weird', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don't like the feeling of that on my skin," you grimace, <<$sex_ev['cum_descr...
    scene.text(`"I don't like the feeling of that on my skin," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2']}.`);
    scene.text('"So you had me come onyour face instead?"');
    scene.text('"... Shut up!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'I should\'ve let you come on my tits', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I should've let you come on my tits," you grimace, <<$sex_ev['cum_describe2']>>...
    scene.text(`"I should've let you come on my tits," you grimace, ${((s as any).sex_ev ?? 0)?.['cum_describe2']}. "This was a mistake!"`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
                ]);
              } else {
                scene.text('You grin at him as he comes all over your hand, continuing to jerk him until his cock stops twitching and nothing else comes out. After a couple more tugs for good measure, you pull back.');
                qspCall(s, 'sex_ev_sex', 'sex_end');
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Why do boys like this?', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial34.jpg');
    // TODO-QSP: dynamic text: "Why do boys even like this?" you grimace, while <<$npcdesc>> keeps leering at y...
    scene.text(`"Why do boys even like this?" you grimace, while ${((s as any).npcdesc ?? 0)} keeps leering at you. "What on earth is so hot about plastering a girl's face with <i>this</i>?"`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I hate you', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['mad'] = 1;
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    // TODO-QSP: dynamic text: "I hate you," you grumble, spitting the disgusting fluid away from your lips as ...
    scene.text(`"I hate you," you grumble, spitting the disgusting fluid away from your lips as ${((s as any).npcdesc ?? 0)} laughs out loud.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumMouth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['his_choice'] === 1) {
    // TODO-QSP: dynamic text: "I'm gonna come in your mouth!" is the only warning your receive before <<$npcde...
    scene.text(`"I'm gonna come in your mouth!" is the only warning your receive before ${((s as any).npcdesc ?? 0)} yanks his cock from your pussy and shoves it between your lips.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_mouth1'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['mouth_ask'] === 1) {
      scene.text('"In my mouth!"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
          scene.text('"<i>Mm-kaahh</i>," you mumble around his cock, continuing to suck.');
        } else {
          scene.text('"Okay," you say.');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1) {
          scene.text('"Come in my mouth instead!"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
            // TODO-QSP: dynamic text: "Not inside me!" you yelp frantically. In response, <<$npcdesc>> yanks his cock ...
            scene.text(`"Not inside me!" you yelp frantically. In response, ${((s as any).npcdesc ?? 0)} yanks his cock from your pussy and moves it towards your mouth.`);
          } else {
            // TODO-QSP: dynamic text: "Let me come in your mouth!" <<$npcdesc>> says as he yanks his cock from your pu...
            scene.text(`"Let me come in your mouth!" ${((s as any).npcdesc ?? 0)} says as he yanks his cock from your pussy.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
      scene.actions([
        { label: 'Keep sucking', goto: ['sex_ev_cum', 'cum_mouth1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Put his cock in your mouth', goto: ['sex_ev_cum', 'cum_mouth1'] },
      ]);
    }
    qspCall(s, 'sex_ev_cum', 'facial_tongue_cum');
  }
  scene.build();
}

function enterCumMouth1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/swallow5.mp4');
  if (((s as any).sex_ev ?? 0)?.['his_choice'] === 2  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. He pulls out of your pussy ...
      scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. He pulls out of your pussy and you crawl forward, ripping off the condom and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You feel <<$npcdesc>>'s coc...
        scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. You feel ${((s as any).npcdesc ?? 0)}'s cock pull out of your pussy and you quickly turn around, ripping off the condom and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You jump off <<$npcdesc>>'s...
          scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. You jump off ${((s as any).npcdesc ?? 0)}'s cock and turn around, ripping the condom off and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['his_choice'] === 2) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. He pulls out of you and you...
        scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. He pulls out of you and you lunge forward, replacing your pussy with your lips. You taste yourself on his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You feel <<$npcdesc>>'s coc...
          scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. You feel ${((s as any).npcdesc ?? 0)}'s cock pull out of you and you quickly turn around, ripping off the condom and replacing your pussy with your lips, bobbing your head up and down his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You jump off <<$npcdesc>> a...
            scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? 0)} grunts. You jump off ${((s as any).npcdesc ?? 0)} and turn around, replacing your pussy with your lips, bobbing your head up and down his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and rips the condom off. You kneel forward, wrapp...
          scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you and rips the condom off. You kneel forward, wrapping your lips around his cock and begin sucking him off until you feel hot globs of liquid spurt into your mouth.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: You feel <<$npcdesc>>'s cock pull out of you and you quickly turn around, pushin...
            scene.text(`You feel ${((s as any).npcdesc ?? 0)}'s cock pull out of you and you quickly turn around, pushing him onto his back and rip the condom off. Wrapping your lips around his girth, you suck him off until you feel hot globs of liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: You jump off <<$npcdesc>>'s cock and turn around, ripping the condom off. Wrappi...
              scene.text(`You jump off ${((s as any).npcdesc ?? 0)}'s cock and turn around, ripping the condom off. Wrapping your lips around his girth, you begin sucking him off, you begin sucking him off until you feel hot globs of liquid spurt into your mouth.`);
            }
          }
        }
      } else {
        if (((s as any).mesec ?? 0) > 0) {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of you and flops onto his back and you dive between his l...
            scene.text(`${((s as any).npcdesc ?? 0)} pulls out of you and flops onto his back and you dive between his legs, wrapping your lips around his girth. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              // TODO-QSP: dynamic text: <<$npcdesc>>'s cock slips from your pussy and you spin around, wrap your lips ar...
              scene.text(`${((s as any).npcdesc ?? 0)}'s cock slips from your pussy and you spin around, wrap your lips around him. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You jump off <<$npcdesc>>'s cock and dive between his legs, wrap your lips aroun...
                scene.text(`You jump off ${((s as any).npcdesc ?? 0)}'s cock and dive between his legs, wrap your lips around him. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of you and flops onto his back and you dive between his l...
            scene.text(`${((s as any).npcdesc ?? 0)} pulls out of you and flops onto his back and you dive between his legs, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              // TODO-QSP: dynamic text: <<$npcdesc>>'s cock slips from your pussy and you spin around, wrap your lips ar...
              scene.text(`${((s as any).npcdesc ?? 0)}'s cock slips from your pussy and you spin around, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You jump off <<$npcdesc>>'s cock and dive between his legs, wrap your lips aroun...
                scene.text(`You jump off ${((s as any).npcdesc ?? 0)}'s cock and dive between his legs, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'cum_mouth2');
  scene.build();
}

function enterCumMouth2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
    scene.actions([
      { label: 'Suck it down', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'swallow');
    // TODO-QSP: dynamic text: Taking it in stride, you keep your lips wrapped around <<$npc_usedname[$npcID]>>...
    scene.text(`Taking it in stride, you keep your lips wrapped around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock, swallowing each glob of sperm as it comes into your mouth. His hips buck beneath you but you don't stop sucking until he's shooting blanks.`);
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
    scene.actions([
      { label: 'Choke it down', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'swallow');
    scene.img('images/shared/sex/cum/mouth/gag3.mp4');
    scene.text('The sensation of cum shooting into the back of your throat is almost enough to make you vomit, it\'s certainly enough to make you gag, but you soldier through and choke it down as best you can until his hip stop shaking.');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_like_cum_taste ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    scene.actions([
      { label: 'Gag', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'spit', 'gag');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/mouth/gag2.mp4');
    scene.text('The intensity of the bitter flavor is far more than you expect and you immediately pull your mouth off, spitting out the first load. You stick your tongue out, trying to soldier through and at least take the rest of it but as soon as the next shot hits your tongue your gag reflex kicks in instead, causing you to retch.');
    // TODO-QSP: dynamic text: Still holding onto <<$npcdesc>>'s cock with one hand, you clamp your other hand ...
    scene.text(`Still holding onto ${((s as any).npcdesc ?? 0)}'s cock with one hand, you clamp your other hand over your mouth, throat convulsing. It smears the cum on your lips all over your face, but you somehow manage to stop yourself from throwing up all over the bed.`);
    if (((s as any).npc_cum_gag ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Uhh, you okay?"');
      scene.actions([
        { label: 'Wrong pipe', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum112.jpg');
    scene.text('"I- uhh, it went down the wrong pipe," you wheeze, covering your lie up with a cough.');
    scene.text('"Careful girl, that\'s not usually what a guy means when he says he wants to see you choke on his cock."');
    scene.text('He laughs at his own joke and you give a weak smile, eyes still watering from how bad his cum tasted.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'You taste awful!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum52.jpg');
    scene.text('"That- <i>cough</i> tastes awful!" you wheeze, eyes watering.');
    scene.text('"Wait, is this the first time someone\'s cum in your mouth?"');
    if (((s as any).stat ?? 0)?.['swallow'] > 0) {
      scene.text('"No," you look at him accusingly. "You just taste terrible! Yech!"');
    } else {
      scene.text('"Yeah," you say, eyes watering.');
      scene.text('"Don\'t worry, you\'ll get used to it eventually," he grins.');
      scene.text('<i>You mean all cum tastes like this...?</i>');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).npc_cum_gag ?? 0)?.[String((s as any).npcID ?? 0)] > 1) {
        if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
          scene.text('"You know, you don\'t have to keep trying if it\'s that bad for you," he says, looking at you with concern.');
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
            scene.actions([
              { label: 'I want to do it for you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I want to do it," you say, looking up at him with tender eyes. "For you. I know you like it when girls swallow. So that makes me want to do it too."');
    scene.text('He puts his hand on your head, smiling warmly at you, sending a spark of thrill through your chest. If he can look at you like that after, maybe this is worth it...');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            ]);
          }
          scene.actions([
            { label: 'Now you tell me!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['mad'] = 1;
    // TODO-QSP: dynamic text: "Now you tell me!" you say, sticking your tongue out in disgust. <<$npcdesc>> bu...
    scene.text(`"Now you tell me!" you say, sticking your tongue out in disgust. ${((s as any).npcdesc ?? 0)} bursts into laughter and you scowl at him. "It's not funny!" you protest, but that just makes him laugh even more.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'No, I want to', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No," you say slowly, choking your way through the words. "I want to. I just... need to get used to it. Right...?"');
    // TODO-QSP: dynamic text: "Well, just don't get sick, okay?" <<$npcdesc>> says, looking at you with concer...
    scene.text(`"Well, just don't get sick, okay?" ${((s as any).npcdesc ?? 0)} says, looking at you with concern.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Come on, is it really that hard to just swallow?" <<$npcdesc>> says, looking at...
          scene.text(`"Come on, is it really that hard to just swallow?" ${((s as any).npcdesc ?? 0)} says, looking at you with disgust.`);
          scene.actions([
            { label: 'I\'m sorry', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m sorry," you say, submissively looking up at him. "I\'ll try harder next time, I promise."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'It is!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Yes! It is!" you grimace. "It tastes- <i>ugh!</i> I literally can\'t even keep it down!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'You try it!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['mad'] = 1;
    scene.text('"I\'d like to see <i>you</i> try!" you scowl, wiping your lips with the back of your hand. "Jack that vile shit into your own mouth and see how you like it!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          ]);
        }
      } else {
        scene.text('"Uhh, you okay?"');
        scene.actions([
          { label: 'Wrong pipe', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum112.jpg');
    scene.text('"I- uhh, it went down the wrong pipe," you wheeze, covering your lie up with a cough.');
    scene.text('"Careful girl, that\'s not usually what a guy means when he says he wants to see you choke on his cock."');
    scene.text('He laughs at his own joke and you give a weak smile, eyes still watering from how bad his cum tasted.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You taste awful!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum52.jpg');
    scene.text('"That- <i>cough</i> tastes awful!" you wheeze, eyes watering.');
    scene.text('"Wait, is this the first time someone\'s cum in your mouth?"');
    if (((s as any).stat ?? 0)?.['swallow'] > 0) {
      scene.text('"No," you look at him accusingly. "You just taste terrible! Blech!"');
    } else {
      scene.text('"Yeah," you say, eyes watering.');
      scene.text('"Don\'t worry, you\'ll get used to it eventually," he grins.');
      scene.text('<i>You mean all cum tastes like this...?</i>');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Gather it in your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum53.jpg');
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you open your eyes ...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you open your eyes to look up at ${((s as any).npcdesc ?? 0)} with his load still filling your mouth. Seeing him looking down at you, you playfully use your tongue to gather it between your lips.`);
    } else {
      // TODO-QSP: dynamic text: You keep your lips wrapped tight around the tip of <<$npcdesc>>'s cock while he ...
      scene.text(`You keep your lips wrapped tight around the tip of ${((s as any).npcdesc ?? 0)}'s cock while he comes, sucking every last drop of spunk from it until it stops twitching and you think his orgasm if finished. Looking up at him, you stick out your tongue, showing him the entire load you gathered in your mouth.`);
    }
    scene.actions([
      { label: 'Spit', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'spit');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit1.mp4');
    scene.text('Pulling back you play with the cum in your mouth a little, giggling as you show it off until you spit it out, letting it dribble over the edge of your lips.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Swallow', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((s as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'swallow');
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    // TODO-QSP: dynamic text: Taking a step back, you open your mouth again to show <<$npcdesc>> how much cum ...
    scene.text(`Taking a step back, you open your mouth again to show ${((s as any).npcdesc ?? 0)} how much cum is still inside before taking a deep breath and swallowing his entire load in one gulp. Afterwards, you stick your tongue back out to show him a clean mouth that swallowed every last drop.`);
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Spit', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'cum_mouth', 'spit');
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
      scene.img('images/shared/sex/cum/mouth/spit6.mp4');
      // TODO-QSP: dynamic text: You draw yourself back up <<$npcdesc>>'s cock, keeping your lips tightly sealed,...
      scene.text(`You draw yourself back up ${((s as any).npcdesc ?? 0)}'s cock, keeping your lips tightly sealed, allowing the cum to pool at the front of your mouth. You hold it there for a few moments and then unpurse your lips, and letting all his cum dribble out of your mouth and down your chin.`);
    } else {
      scene.img('images/shared/sex/cum/mouth/spit1.mp4');
      scene.text('Pulling back you play with the cum in your mouth a little, giggling as you show it off until you spit it out, letting it dribble over the edge of your lips.');
    }
    ((s as any).sex_ev ?? {})['last_cum'] = 'spit';
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCumMouthAfter(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCumTits1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['tits_ask'] === 1) {
    scene.text('"Come on my tits!"');
  } else {
    if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
      scene.text('"Go ahead," you say.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['he_ask'] === 1) {
        scene.text('"Come on my tits instead!"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
          scene.text('"Not inside me!" you yelp frantically.');
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> jumps from between your legs and tears off the condom, preparing to...
      scene.text(`${((s as any).npcdesc ?? 0)} jumps from between your legs and tears off the condom, preparing to come on your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You feel him withdraw from your pussy and quickly turn around, flopping down ont...
        scene.text(`You feel him withdraw from your pussy and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? 0)} tears off the condom, preparing to come on your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>'s cock, falling backwards onto the bed as he tears ...
          scene.text(`You jump off of ${((s as any).npcdesc ?? 0)}'s cock, falling backwards onto the bed as he tears off the condom, preparing to come on your tits.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            // TODO-QSP: dynamic text: You feel him withdraw from your ass and quickly turn around, flopping down onto ...
            scene.text(`You feel him withdraw from your ass and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? 0)} tears off the condom, preparing to come on your tits.`);
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> jumps from between your legs and prepares to come on your tits.
      scene.text(`${((s as any).npcdesc ?? 0)} jumps from between your legs and prepares to come on your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You feel him withdraw from your pussy and quickly turn around, flopping down ont...
        scene.text(`You feel him withdraw from your pussy and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? 0)} prepares to come on your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>'s cock, falling backwards onto the bed as he prepar...
          scene.text(`You jump off of ${((s as any).npcdesc ?? 0)}'s cock, falling backwards onto the bed as he prepares to come on your tits.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            // TODO-QSP: dynamic text: You feel him withdraw from your asshole and quickly turn around, flopping down o...
            scene.text(`You feel him withdraw from your asshole and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? 0)} prepares to come on your tits.`);
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_tits3'] },
    ]);
  } else {
    if (((s as any).tits ?? 0) > 1) {
      scene.actions([
        { label: 'Finish him with your tits', goto: ['sex_ev_cum', 'cum_tits4'] },
      ]);
    }
    scene.actions([
      { label: 'Let him do it', goto: ['sex_ev_cum', 'cum_tits3'] },
      { label: 'Finish him yourself', goto: ['sex_ev_cum', 'cum_tits2'] },
    ]);
  }
  scene.build();
}

function enterCumTits2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_tits', 'pc_jerk');
  scene.img('images/shared/sex/cum/chest/tits2.mp4');
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    // TODO-QSP: dynamic text: Beckoning <<$npcdesc>> towards you, he moves forward, straddling your stomach wi...
    scene.text(`Beckoning ${((s as any).npcdesc ?? 0)} towards you, he moves forward, straddling your stomach with his legs. You take hold of his member with your hand and immediately start working it. Within two pumps, cum spurts from the tip of his cock, the thick white liquid spattering across your chest, hot against your skin.`);
  } else {
    // TODO-QSP: dynamic text: Beckoning <<$npcdesc>> towards you, he moves forward, straddling your stomach wi...
    scene.text(`Beckoning ${((s as any).npcdesc ?? 0)} towards you, he moves forward, straddling your stomach with his legs. You take hold of his member with your hand and immediately start working it, its shaft still slick with your juices. Within two pumps, cum spurts from the tip of his cock, the thick white liquid spattering across your chest, hot against your skin.`);
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  scene.build();
}

function enterCumTits3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  qspCall(s, 'sex_ev_stats', 'cum_tits');
  scene.img('images/shared/sex/cum/chest/tits4.mp4');
  if (((s as any).sex_ev ?? 0)?.['he_ask'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls himself from between your legs and quickly moves ove...
        scene.text(`${((s as any).npcdesc ?? 0)} suddenly pulls himself from between your legs and quickly moves over to you, ripping the condom off as he does. No sooner is the rubber sleeve free from his shaft than cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? 0)} comes all over them.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: You feel <<$npcdesc>> suddenly pull his cock out of your pussy just before he su...
          scene.text(`You feel ${((s as any).npcdesc ?? 0)} suddenly pull his cock out of your pussy just before he suddenly flips you onto your back. You try to sit up as he rips the condom off and no sooner is the rubber sleeve free from his shaft than cum bursts from the tip of his cock, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? 0)} comes all over them.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: In a sudden movement, <<$npcdesc>> lifts you off of his cock by the hips, pushin...
            scene.text(`In a sudden movement, ${((s as any).npcdesc ?? 0)} lifts you off of his cock by the hips, pushing you backwards onto your back. You try to sit up as he rips the condom off and no sooner is the rubber sleeve free from his shaft than cum bursts from the tip of his cock, thick white droplets of it spattering across your breasts as ${((s as any).npcdesc ?? 0)} comes all over them.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls himself from between your legs and quickly moves ove...
        scene.text(`${((s as any).npcdesc ?? 0)} suddenly pulls himself from between your legs and quickly moves over to you, holding his cock in his hand. As you sit up, cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? 0)} shudders in pleasure.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: You feel <<$npcdesc>> suddenly pull his cock out of your pussy just before he su...
          scene.text(`You feel ${((s as any).npcdesc ?? 0)} suddenly pull his cock out of your pussy just before he suddenly flips you onto your back. You try to sit up just as he scoots over and cum bursts from the tip of his cock, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? 0)} comes all over them.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: In a sudden movement, <<$npcdesc>> lifts you off of his cock by the hips, pushin...
            scene.text(`In a sudden movement, ${((s as any).npcdesc ?? 0)} lifts you off of his cock by the hips, pushing you backwards onto your back. You try to sit up as he scoots over, working his shaft with his hand and cum bursts from the tip, thick white droplets of it spattering across your breasts as ${((s as any).npcdesc ?? 0)} comes all over them.`);
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You open up your legs to let him out and he scooches forward. After just a few p...
      scene.text(`You open up your legs to let him out and he scooches forward. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? 0)} blows his load all over your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You hurriedly pull yourself off of him, turning around and laying down on the be...
        scene.text(`You hurriedly pull yourself off of him, turning around and laying down on the bed. He scooches forward. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? 0)} blows his load all over your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You hurriedly jump off of him, laying down on the bed. After just a few pumps fr...
          scene.text(`You hurriedly jump off of him, laying down on the bed. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? 0)} blows his load all over your tits.`);
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> quickly moves over to you, holding his cock in his hand. As you sit...
  scene.text(`${((s as any).npcdesc ?? 0)} quickly moves over to you, holding his cock in his hand. As you sit up, cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? 0)} shudders in pleasure.`);
  qspCall(s, 'sex_ev_sex', 'sex_end');
  scene.build();
}

function enterCumTits4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_tits', 'tits');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/cum/chest/tits1.mp4');
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
    scene.text('"I can do you one better than that," you grin.');
  } else {
    scene.text('"I\'ve got an even better idea," you grin.');
  }
  if (((s as any).sex_ev ?? 0)?.['fuck'] === 1) {
    scene.text('You jump off his cock and kneel between his legs, smooshing your breasts together around his cock and start working them up and down his shaft. Within seconds, cum erupts from the tip, smearing it across your still bouncing tits and all over your fingers.');
  } else {
    scene.text('You kneel between his legs, smooshing your breasts together around his cock and start working them up and down his shaft. Within seconds, cum erupts from the tip, smearing it across your still bouncing tits and all over your fingers.');
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  qspCall(s, 'sex_ev_after', 'wipe_tits');
  scene.build();
}

function enterCumTitsEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  scene.build();
}

function enterCreampieMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_restrict'] === 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).npc_rule_no_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
    scene.actions([
      { label: 'Creampies cost extra', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['p_creampie_bonus'] = 1;
    ((s as any).sex_ev ?? {})['prostitution_bonus'] = (((s as any).sex_ev ?? {})['prostitution_bonus'] ?? 0) + (1000);
    scene.text('"Finishing inside costs extra," you smirk teasingly.');
    scene.text('"Ungh~! Done!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn't even hesitate and thrusts balls deep into you with a loud g...
    scene.text(`${((s as any).npcdesc ?? 0)} doesn't even hesitate and thrusts balls deep into you with a loud groan.`);
    scene.actions([
      { label: 'Get creampied', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Creampie', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  ||  ((s as any).pcs_horny ?? 0) > 90) {
      if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        scene.actions([
          { label: 'Come together', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['he_ask_creampie_yes'] = 1;
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.text('"I\'m on the shot now," you smile at him. "Go ahead."');
    } else {
      scene.text('"I\'m on the pill now," you smile at him. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
              scene.actions([
                { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
                scene.actions([
                  { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"It\'s probably fine today," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['preg_risk'] === '') {
                  scene.actions([
                    { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you say with a deceitful smile. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
        scene.actions([
          { label: 'Go ahead', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Okay," you nod. "Go ahead."');
    } else {
      scene.text('"Okay," you manage to grunt out. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (reluctant)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_creampie'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"If you really want to I guess," you say somewhat hesitantly.');
    } else {
      scene.text('"If you really want to I guess," you grunt out between thrusts.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (disgust)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['unhappy_creampie'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Ugh," you grimace in disgust. "I guess if you <i>have</i> to."');
    } else {
      scene.text('"Ugh," you grunt between thrusts, grimacing in disgust. "I guess if you <i>have</i> to."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
          if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
            if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
              scene.actions([
                { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.text('"I\'m on the shot now," you smile at him. "Go ahead."');
    } else {
      scene.text('"I\'m on the pill now," you smile at him. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
                scene.actions([
                  { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"You can come inside me," you pant. "It\'s a safe day."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
                  scene.actions([
                    { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"You can come inside me," you pant. "It should be safe today."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
                    scene.actions([
                      { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you say with a deceitful smile. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                      { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    scene.text('"I\'m on birth control," you say, telling a barefaced lie. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
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
      scene.actions([
        { label: '"You can come inside"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can come inside."');
      } else {
        scene.text('"It\'s-! Okay-!" you grunt out between poundings. "You can-! Come inside-!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can just come inside."');
      } else {
        scene.text('"It\'s-! Okay-!" you grunt out between poundings. "You can just-! Come inside-!"');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
        { label: '"Fill me up"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Do it," you smile. "Fill me up."');
      } else {
        scene.text('"Do it!" you scream. "Fill me up!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Come inside me," you smile. "Fill me up."');
      } else {
        scene.text('"Come inside me!" you scream. "Fill me up!"');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
        { label: 'Fake a simultaneous orgasm', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_cum', 'cum_together_fake'
  } },
      ]);
    }
    if ((((s as any).pcs_horny ?? 0) > 90  ||  ((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0))  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 0) {
      scene.actions([
        { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.actions([
        { label: 'Make him come inside you', goto: ['sex_ev_cum', 'cum_force'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCumInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_condom'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      qspCall(s, 'sex_ev_stats', 'creampie_code');
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'miss_creampie'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'doggy_creampie'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cowgirl_creampie'] }]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_doggy_creampie'] }]);
          qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
          qspCall(s, 'stat', '');
          ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
          ((s as any).sex_ev ?? {})['came_together'] = 2;
          ((s as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['anal_creampie_orgasm_count'] ?? 0) + (1);
          ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
          scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
          // TODO-QSP: dynamic text: <<$npcdesc>> grunts and you feel him come, cock pulsing inside you. The sensatio...
          scene.text(`${((s as any).npcdesc ?? 0)} grunts and you feel him come, cock pulsing inside you. The sensation pushes you over the edge, and you groan, tensing as waves of orgasm wash through you. The two of come together, both of your orgasms fueling the other's until eventually they both end.`);
          qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
          qspCall(s, 'sex_ev_reactions', 'react_menu');
          // TODO-QSP: else !}
        }
      }
    }
  }
  scene.build();
}

function enterMissCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself into your pussy, grunting. His cock pulses and a sud...
  scene.text(`${((s as any).npcdesc ?? 0)} drives himself into your pussy, grunting. His cock pulses and a sudden warmth floods through your insides.`);
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You lay there patiently, letting <<$npcdesc>> empty himself into your womb, wait...
    scene.text(`You lay there patiently, letting ${((s as any).npcdesc ?? 0)} empty himself into your womb, waiting until you no longer feel him twitching inside you.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    { label: 'Come together', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(s, 'stat', '');
      ((s as any).sex_ev ?? {})['came_together'] = 2;
      ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['creampie_orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cum pours into you and you gasp as you get sent over the edge and...
      scene.text(`${((s as any).npcdesc ?? 0)}'s cum pours into you and you gasp as you get sent over the edge and trigger your own climax. The two of come together, each of your orgasms fueling the other's until eventually they've run their course and both of you lay there panting.`);
      qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
      qspCall(s, 'sex_ev_reactions', 'react_menu');
    } else {
      qspCall(s, 'sex_ev_cum', 'hypno_creampie_orgasm_fail');
    }
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You lay there, trying not to squirm as <<$npcdesc>> orgasm pumps load after load...
    scene.text(`You lay there, trying not to squirm as ${((s as any).npcdesc ?? 0)} orgasm pumps load after load into your womb. Despite your disgust, you don't move, waiting until you no longer feel him twitching inside you.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/doggy4.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself into your pussy with a grunt. His cock pulses and a ...
  scene.text(`${((s as any).npcdesc ?? 0)} drives himself into your pussy with a grunt. His cock pulses and a sudden warmth floods through your insides.`);
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there patiently, letting <<$npcdesc>> empty himself into your womb, wai...
    scene.text(`You stay there patiently, letting ${((s as any).npcdesc ?? 0)} empty himself into your womb, waiting until you no longer feel him twitching inside you.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(s, 'stat', '');
      ((s as any).sex_ev ?? {})['came_together'] = 2;
      ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['creampie_orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cum pours into you and you gasp as you get sent over the edge you...
      scene.text(`${((s as any).npcdesc ?? 0)}'s cum pours into you and you gasp as you get sent over the edge yourself and trigger your own climax. The two of come together, each of your orgasms fueling the other's until eventually they've run their course and both of you collapse.`);
    } else {
      qspCall(s, 'sex_ev_cum', 'hypno_creampie_orgasm_fail');
    }
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there, trying not to squirm in discomfort, feeling <<$npcdesc>>'s spunk...
    scene.text(`You stay there, trying not to squirm in discomfort, feeling ${((s as any).npcdesc ?? 0)}'s spunk fill your womb. Despite your disgust, you don't move, waiting until you no longer feel him twitching inside you.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
  ]);
  scene.build();
}

function enterCowgirlCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1) {
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['creampie_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['came_together'] = 2;
    scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
    // TODO-QSP: dynamic text: You drop your hips, impaling yourself on <<$npcdesc>>'s cock. He thrusts his hip...
    scene.text(`You drop your hips, impaling yourself on ${((s as any).npcdesc ?? 0)}'s cock. He thrusts his hips upward, driving himself deep inside you and you feel cum spurt out inside you. The sensation pushes you over the edge, causing your pussy to clamp down onto his cock even more and your body to spasm uncontrollably. The two of come together, holding each other tight, both of your orgasms fueling the other's. After some time, your orgasm fades, leaving both of you panting.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
    // TODO-QSP: else !}
    scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
    // TODO-QSP: dynamic text: You drop your hips, impaling yourself on <<$npcdesc>>'s cock. He grabs you and h...
    scene.text(`You drop your hips, impaling yourself on ${((s as any).npcdesc ?? 0)}'s cock. He grabs you and holds you tight, thrusting humself upward, driving his cock in deep into you as he can manage and groans. His cock stiffens. And then a sudden warmth floods through your insides.`);
  } else {
    scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and pulls you down onto his cock. He holds you tight, thr...
    scene.text(`${((s as any).npcdesc ?? 0)} grabs you and pulls you down onto his cock. He holds you tight, thrusting humself upward, driving his cock in deep into you as he can manage. As he does, you feel him stiffen up and groan, and his cock pulses inside you.`);
  }
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You ride out his orgasm, gently rock your hips and squeezing <<$npcdesc>>'s cock...
    scene.text(`You ride out his orgasm, gently rock your hips and squeezing ${((s as any).npcdesc ?? 0)}'s cock with your pussy as he empties himself into your womb until eventually, you no longer feel him twitching inside you.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
      qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(s, 'stat', '');
      ((s as any).sex_ev ?? {})['came_together'] = 2;
      ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['creampie_orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cum pours into you and you gasp as you get sent over the edge and...
      scene.text(`${((s as any).npcdesc ?? 0)}'s cum pours into you and you gasp as you get sent over the edge and trigger your own climax. Your body convulses as electric shocks of orgasm rock through you and you come together, each of your orgasms fueling the other's until eventually they've run their course and both of you lay there panting.`);
      qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
      qspCall(s, 'sex_ev_reactions', 'react_menu');
    } else {
      qspCall(s, 'sex_ev_cum', 'hypno_creampie_orgasm_fail');
    }
  } },
  ]);
  scene.build();
}

function enterAnalDoggyCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  scene.img('images/shared/sex/cum/analcreampie/doggy1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself into your asshole with a grunt. His cock pulses and ...
  scene.text(`${((s as any).npcdesc ?? 0)} drives himself into your asshole with a grunt. His cock pulses and a sudden warmth floods through your intestines.`);
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there patiently, letting <<$npcdesc>> empty himself into your ass, wait...
    scene.text(`You stay there patiently, letting ${((s as any).npcdesc ?? 0)} empty himself into your ass, waiting until you no longer feel him twitching between your cheeks.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(s, 'stat', '');
      ((s as any).sex_ev ?? {})['came_together'] = 2;
      ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['anal_creampie_orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cum pours into you and you choke up, every muscle in your body go...
      scene.text(`${((s as any).npcdesc ?? 0)}'s cum pours into you and you choke up, every muscle in your body going taut as you get sent over the edge into orgasm yourself. The two of come together, each of your climaxes fueling the other's until eventually they've run their course and both of you collapse.`);
    } else {
      qspCall(s, 'sex_ev_cum', 'hypno_creampie_orgasm_fail');
    }
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there, trying not to squirm in discomfort at the feeling of <<$npcdesc>...
    scene.text(`You stay there, trying not to squirm in discomfort at the feeling of ${((s as any).npcdesc ?? 0)}'s spunk filling your intestines. Despite your disgust, you don't move, waiting until you no longer feel him twitching between your cheeks.`);
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
  ]);
  scene.build();
}

function enterCumInsidePullAway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
      scene.text('A few moments later he withdraws his cock from your pussy and you feel a stream of cum gush out after it.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
        scene.text('A few moments later he pulls his cock from your pussy and you feel a thick liquid immediately dribble out after it.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
          // TODO-QSP: dynamic text: Carefully, you raise yourself off of <<$npc_firstname[$npclastsaved]>>. The mome...
          scene.text(`Carefully, you raise yourself off of ${((s as any).npc_firstname ?? 0)?.[String((s as any).npclastsaved ?? 0)]}. The moment his cock is free of your pussy, you feel a thick glob of cum begin to leak out of you.`);
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
    // TODO-QSP: end !}
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cum_inside_pull_away_anal'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
          if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
            // TODO-QSP: dynamic text: You carefully scooch backwards and <<$npcdesc>>'s cock <i>pops</i> from your pus...
            scene.text(`You carefully scooch backwards and ${((s as any).npcdesc ?? 0)}'s cock <i>pops</i> from your pussy. A second later, a stream of milky liquid streams out of your snatch, running down your ass and into the bedsheets.`);
          } else {
            // TODO-QSP: dynamic text: You carefully scooch backwards, allowing <<$npcdesc>> to remove his cock from yo...
            scene.text(`You carefully scooch backwards, allowing ${((s as any).npcdesc ?? 0)} to remove his cock from your pussy. It slips from your snatch with a <i>pop</i>, a slurry of cum streaming out after it, running down your ass and into the bedsheets.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
            if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
              // TODO-QSP: dynamic text: You lean forward, letting and <<$npcdesc>>'s cock <i>pops</i> from your pussy. A...
              scene.text(`You lean forward, letting and ${((s as any).npcdesc ?? 0)}'s cock <i>pops</i> from your pussy. A second later, you feel a thick stream of liquid dribble from your snatch and trickle down your thigh.`);
            } else {
              // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>'s cock slip from your snatch and roll ont...
              scene.text(`You lean forward, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your snatch and roll onto your back breathing hard. As you do, you feel a slurry of liquid stream from your pussy, running down your ass and into the bedsheets.`);
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
              if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
                // TODO-QSP: dynamic text: You raise your hips a bit and pull back, causing <<$npcdesc>>'s cock to suddenly...
                scene.text(`You raise your hips a bit and pull back, causing ${((s as any).npcdesc ?? 0)}'s cock to suddenly flop from your pussy as it slips out. As you look down, you can see a milky white fluid leaking from your snatch.`);
              } else {
                // TODO-QSP: dynamic text: Raising your hips up, you pull yourself off <<$npcdesc>>'s cock. It flops from y...
                scene.text(`Raising your hips up, you pull yourself off ${((s as any).npcdesc ?? 0)}'s cock. It flops from your pussy and you feel a thick glob of cum immediately begin to leak from your snatch.`);
              }
            }
          }
        }
        if (((s as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1  &&  ((s as any).sex_ev ?? 0)?.['came_together'] < 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>>'s cum.
          scene.text(`${((s as any).npcdesc ?? 0)}'s cum.`);
          qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
        } else {
          qspCall(s, 'sex_ev_sex', 'sex_end');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/condom1.jpg');
          // TODO-QSP: dynamic text: You spread your legs a little wider as <<$npcdesc>> pulls his hips back, vacatin...
          scene.text(`You spread your legs a little wider as ${((s as any).npcdesc ?? 0)} pulls his hips back, vacating his manhood from your pussy. As you look down, you can see a milky white fluid filling the rubber casing around his cock.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/condom1.jpg');
            // TODO-QSP: dynamic text: You lean forward as <<$npcdesc>> pulls his hips back, feeling his manhood slip f...
            scene.text(`You lean forward as ${((s as any).npcdesc ?? 0)} pulls his hips back, feeling his manhood slip from your pussy. As you lay down on the bed and look back, you can see a milky white fluid filling the rubber casing around his cock.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/cum81.jpg');
              // TODO-QSP: dynamic text: You raise your hips a bit and pull back, causing <<$npcdesc>>'s cock to suddenly...
              scene.text(`You raise your hips a bit and pull back, causing ${((s as any).npcdesc ?? 0)}'s cock to suddenly flop from your pussy as it slips out. As you look down, you can see a milky white fluid filling the rubber casing around his cock.`);
            }
          }
        }
        // TODO-QSP: dynamic text: <<$npcdesc>>'s cum.
        scene.text(`${((s as any).npcdesc ?? 0)}'s cum.`);
        if (((s as any).sex_ev ?? 0)?.['came_together'] === 2) {
          qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
        } else {
          qspCall(s, 'sex_ev_sex', 'sex_end');
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterCumInsidePullAwayAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/analcreampie/doggy_drip1.mp4');
  // TODO-QSP: dynamic text: You lean forward, letting and <<$npcdesc>>'s cock <i>pops</i> from your asshole....
  scene.text(`You lean forward, letting and ${((s as any).npcdesc ?? 0)}'s cock <i>pops</i> from your asshole. A second later, you feel a thick stream of liquid dribble from your sphincter and trickle down the lips of your pussy.`);
  if (((s as any).sex_ev ?? 0)?.['came_together'] === 2) {
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  scene.build();
}

function enterCumTogether(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_cum_together'] }]);
  }
  ((s as any).sex_ev ?? {})['came_together'] = 1;
  qspCall(s, 'sex_ev_stats', 'creampie_code');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
      scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
        scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You just nod, unable to say anything and grab hold of him tightly. You can feel ...
          scene.text(`You just nod, unable to say anything and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
        }
      }
    }
  } else {
    if ((((s as any).sex_ev ?? 0)?.['cum_where'] === 1  ||  ((s as any).sex_ev ?? 0)?.['he_ask'] === 0)) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, smiling war...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, smiling warmly into his eyes.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, giving him ...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, giving him a warm smile over your shoulder.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, leaning dow...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, leaning down to smile warmly into his eyes.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, smi...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, smiling warmly into his eyes.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, giv...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, lea...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, leaning down to smile warmly into his eyes.`);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Orgasm', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['creampie_orgasm_count'] = (((s as any).sex_ev ?? {})['creampie_orgasm_count'] ?? 0) + (1);
      ((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = (((s as any).sex_ev ?? {})['simultaneous_orgasm_count'] ?? 0) + (1);
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
          }
        }
      }
      // TODO-QSP: dynamic text: <<$npcdesc>>'s cock pulses inside you and something warm spills into your pussy....
      scene.text(`${((s as any).npcdesc ?? 0)}'s cock pulses inside you and something warm spills into your pussy. His hot cum filling you up is the last thing you need to get off and suddenly you're right there with him, muscles going taut and quivering uncontrollably as the two of you come together.`);
      qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
      qspCall(s, 'sex_ev_reactions', 'react_menu');
    } else {
      qspCall(s, 'sex_ev_cum', 'hypno_creampie_orgasm_fail');
    }
  } },
  ]);
  scene.build();
}

function enterAnalCumTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['came_together'] = 1;
  ((s as any).sex_ev ?? {})['last_cum'] = 'anal_creampie';
  qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] === 1) {
    // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
    scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
      scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: You just nod, unable to say anything and grab hold of him tightly. You can feel ...
        scene.text(`You just nod, unable to say anything and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
        // TODO-QSP: end !}
        // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
        scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
      } else {
        if ((((s as any).sex_ev ?? 0)?.['cum_where'] === 1  ||  ((s as any).sex_ev ?? 0)?.['he_ask'] === 0)) {
          // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, smiling war...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, smiling warmly into his eyes.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, giving him ...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, giving him a warm smile over your shoulder.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, leaning dow...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, leaning down to smile warmly into his eyes.`);
              // TODO-QSP: end !}
              // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together," you say, giving him ...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together," you say, giving him a warm smile over your shoulder.`);
            } else {
              // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, smi...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, smiling warmly into his eyes.`);
            }
          }
        }
        // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, giv...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
      }
    }
  }
  // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, lea...
  scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, leaning down to smile warmly into his eyes.`);
  // TODO-QSP: end !}
  // TODO-QSP: dynamic text: "<<$sex_ev['cum_together_dialogue1']>>Let's come together instead," you say, giv...
  scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1']}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'girl_cum':
      enterGirlCum(s, scene);
      break;
    case 'miss_cum':
      enterMissCum(s, scene);
      break;
    case 'doggy_cum':
      enterDoggyCum(s, scene);
      break;
    case 'cowgirl_cum':
      enterCowgirlCum(s, scene);
      break;
    case 'anal_doggy_cum':
      enterAnalDoggyCum(s, scene);
      break;
    case 'fuck_cum_random':
      enterFuckCumRandom(s, scene);
      break;
    case 'cum_decider':
      enterCumDecider(s, scene);
      break;
    case 'cum_check':
      enterCumCheck(s, scene);
      break;
    case 'fuck_cum':
      enterFuckCum(s, scene);
      break;
    case 'cum_dialogue':
      enterCumDialogue(s, scene);
      break;
    case 'fuck_cum2':
      enterFuckCum2(s, scene);
      break;
    case 'cum_his_choice':
      enterCumHisChoice(s, scene);
      break;
    case 'cum_his_choice2':
      enterCumHisChoice2(s, scene);
      break;
    case 'cum_wherever':
      enterCumWherever(s, scene);
      break;
    case 'cum_jerkoff':
      enterCumJerkoff(s, scene);
      break;
    case 'cum_facial':
      enterCumFacial(s, scene);
      break;
    case 'facial_jerk_him':
      enterFacialJerkHim(s, scene);
      break;
    case 'facial_jerk_mouth':
      enterFacialJerkMouth(s, scene);
      break;
    case 'facial_he_jerks':
      enterFacialHeJerks(s, scene);
      break;
    case 'cum_cannon_facial':
      enterCumCannonFacial(s, scene);
      break;
    case 'facial_wipe_eyes':
      enterFacialWipeEyes(s, scene);
      break;
    case 'facial_close_eyes':
      enterFacialCloseEyes(s, scene);
      break;
    case 'facial_tongue_cum':
      enterFacialTongueCum(s, scene);
      break;
    case 'facial_tongue_spit':
      enterFacialTongueSpit(s, scene);
      break;
    case 'facial_brace':
      enterFacialBrace(s, scene);
      break;
    case 'cum_mouth':
      enterCumMouth(s, scene);
      break;
    case 'cum_mouth1':
      enterCumMouth1(s, scene);
      break;
    case 'cum_mouth2':
      enterCumMouth2(s, scene);
      break;
    case 'cum_mouth_after':
      enterCumMouthAfter(s, scene);
      break;
    case 'cum_tits1':
      enterCumTits1(s, scene);
      break;
    case 'cum_tits2':
      enterCumTits2(s, scene);
      break;
    case 'cum_tits3':
      enterCumTits3(s, scene);
      break;
    case 'cum_tits4':
      enterCumTits4(s, scene);
      break;
    case 'cum_tits_end':
      enterCumTitsEnd(s, scene);
      break;
    case 'creampie_menu':
      enterCreampieMenu(s, scene);
      break;
    case 'cum_inside':
      enterCumInside(s, scene);
      break;
    case 'miss_creampie':
      enterMissCreampie(s, scene);
      break;
    case 'doggy_creampie':
      enterDoggyCreampie(s, scene);
      break;
    case 'cowgirl_creampie':
      enterCowgirlCreampie(s, scene);
      break;
    case 'anal_doggy_creampie':
      enterAnalDoggyCreampie(s, scene);
      break;
    case 'cum_inside_pull_away':
      enterCumInsidePullAway(s, scene);
      break;
    case 'cum_inside_pull_away_anal':
      enterCumInsidePullAwayAnal(s, scene);
      break;
    case 'cum_together':
      enterCumTogether(s, scene);
      break;
    case 'anal_cum_together':
      enterAnalCumTogether(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_cum: LocationDef = {
  name: 'sex_ev_cum',
  title: '"<i>Nmmnnghhhaaaaaaaaaa!</i>"',
  region: 'other',
  enter: enter,
};
