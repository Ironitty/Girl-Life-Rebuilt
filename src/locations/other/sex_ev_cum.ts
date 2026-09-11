import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    // TODO-QSP: xgt 'sex_ev_cum', '2pumpchump'
  } else {
    if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] <= ((s as any).sex_ev ?? 0)?.['sex_stamina'] + 1) {
      // TODO-QSP: xgt 'sex_ev_cum', 'girl_cum'
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
        // TODO-QSP: xgt 'sex_ev_cum', 'fuck_cum2'
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
  scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] }]);
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
          // TODO-QSP: end !}
        }
      }
    }
  }
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
    default:
      enterGirlCum(s, scene);
      break;
  }
}

export const sex_ev_cum: LocationDef = {
  name: 'sex_ev_cum',
  title: '"<i>Nmmnnghhhaaaaaaaaaa!</i>"',
  region: 'other',
  enter: enter,
};
