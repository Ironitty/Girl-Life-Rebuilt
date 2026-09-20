import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGirlCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_cum'] = ((s as any).sex_ev['rough_cum'] ?? 0) + (1);
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['consecutive_orgasm'] = ((s as any).sex_ev['consecutive_orgasm'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((s as any).pcs_horny ?? 0)/3);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['consecutive_orgasm_desc'] = 'Come again!';
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['consecutive_orgasm_desc'] = 'Come!';
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).sex_ev ?? 0)?.['consecutive_orgasm_desc'] ?? '' ?? ''), handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      qspGoto(st, 'sex_ev_cum', 'miss_cum');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        qspGoto(st, 'sex_ev_cum', 'doggy_cum');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          qspGoto(st, 'sex_ev_cum', 'cowgirl_cum');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            qspGoto(st, 'sex_ev_cum', 'anal_doggy_cum');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    (st as any).fake_orgasm = ((st as any).fake_orgasm ?? 0) + (1);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.img(`images/shared/sex/vag/${((st as any).sex_ev ?? 0)?.['position'] ?? ''}/slow2.mp4`);
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    if (((st as any).pcs_horny ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is doing a good job, even if he''s not quite getting you off. You d...
      scene.text(`${((st as any).npcdesc ?? '')} is doing a good job, even if he's not quite getting you off. You don't think you'll manage to come this time, but you don't want him to feel bad about it either. So...`);
    } else {
      if (((st as any).pcs_horny ?? 0) >= 40) {
        // TODO-QSP: dynamic text: <<$npcdesc>> isn''t doing bad, but he''s nowhere near to really getting you off....
        scene.text(`${((st as any).npcdesc ?? '')} isn't doing bad, but he's nowhere near to really getting you off. But you also don't want him to feel bad, so...`);
      }
    }
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((st as any).npcdesc ?? '')}'s cock with your pussy as hard as you can, dramatically tensing all your muscles as hard as you can, forcing your body to quiver.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((st as any).npcdesc ?? '')} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant with feigned breathlessness and smile at him. "You\'re incredible."');
    scene.text('He smiles back and gets right on back to fucking you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckCum(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
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
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking you through your last orgasm and is still fucking you straight through another one, magic bursts continuing inside you like nuclear bombs and your uncontrollable shudders their aftershocks.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking you through your last orgasm and is still fucking you straight through another one.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? '')}'s hand as the barrage of orgasmic magic continues exploding inside you.`);
        } else {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? '')}'s hand.`);
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock pounding your insides is too good and you find yourself com...
      scene.text(`${((s as any).npcdesc ?? '')}'s cock pounding your insides is too good and you find yourself coming. <i>Hard</i>.`);
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: Your pussy clenches down on the cock inside it and your body goes into spasms as...
        scene.text(`Your pussy clenches down on the cock inside it and your body goes into spasms as orgasmic magic floods your system. Reality wobbles and suddenly it's like experiencing your orgasm in slow motion, dragging the pleasure out so long it's painful. You try to let out a moan but ${((s as any).npcdesc ?? '')} clamps his hand over your mouth, holding your head down. It drives you crazy and your eyes roll back in your head, unable to do anything but quiver and give muffled groans that feel to you like they last a lifetime.`);
      } else {
        // TODO-QSP: dynamic text: Your pussy clenches down on the cock inside it as your body goes into orgasmic s...
        scene.text(`Your pussy clenches down on the cock inside it as your body goes into orgasmic spasms. You try to let out a moan but ${((s as any).npcdesc ?? '')} clamps his hand over your mouth, holding your head down. It drives you crazy and your eyes roll back in your head, unable to do anything but quiver and give muffled groans.`);
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
        // TODO-QSP: dynamic text: <<$npcdesc>> keeps hitting all the right spots inside you and you can''t help bu...
        scene.text(`${((s as any).npcdesc ?? '')} keeps hitting all the right spots inside you and you can't help but giggle in delight as he forces your orgasm to keep going, refusing to stop fucking you for even a second.`);
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
          // TODO-QSP: dynamic text: Magic erupts from your womb as you come, but it doesn''t stop you from kissing <...
          scene.text(`Magic erupts from your womb as you come, but it doesn't stop you from kissing ${((s as any).npcdesc ?? '')}, forcing your face against his as wave after wave of magical energy washes through you, burning like fire inside your veins. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry directly into ${((s as any).npcdesc ?? '')}'s mouth as you are finally forced to break the kiss and carnal magic <i>explodes</i> from your body. ${((s as any).npcdesc ?? '')} remains oblivious, fucking you straight through your witchy orgasm.`);
        } else {
          // TODO-QSP: dynamic text: You keep kissing <<$npcdesc>> even as you come, forcing your face against his as...
          scene.text(`You keep kissing ${((s as any).npcdesc ?? '')} even as you come, forcing your face against his as wave after wave of orgasm washes over you. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry directly into ${((s as any).npcdesc ?? '')}'s mouth as you are finally forced to break the kiss and the release of climax courses through your entire body, quivering around the cock inside you.`);
        }
      } else {
        scene.text('"<i>Ah~!</i> I\'m-! I\'m gonna-"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come, magic erupting from your wo...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, burning like fire inside your veins. Your abs go taut and your pussy clenches down on his cock. Your toes curl in pleasure as your back arches, and you let out a wordless cry as carnal magic <i>explodes</i> from your body. ${((s as any).npcdesc ?? '')} remains oblivious, fucking you straight through your witchy orgasm.`);
        } else {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come. Your abs go taut and your p...
          scene.text(`You can't even finish the sentence before you come. Your abs go taut and your pussy clenches down on ${((s as any).npcdesc ?? '')}. Your toes curl in pleasure as your back arches, and you let out a wordless cry as the release of climax courses through your entire body that quivers around the cock inside you.`);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckCum2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
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
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking you through your last orgasm and is still fucking you straight through another one, the magic continuing to burst inside you like nuclear bombs and your uncontrollable shudders their aftershocks.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking you through your last orgasm and is still...
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking you through your last orgasm and is still fucking you straight through another one.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? '')}'s hand as the barrage of orgasmic magic continues exploding inside you.`);
        } else {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? '')}'s hand.`);
        }
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
      scene.text(`${((s as any).npcdesc ?? '')} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? '')} shoves your head down into the mattress.`);
        scene.text('At that moment, magic bursts from your womb.');
        // TODO-QSP: dynamic text: Reality wobbles, and everything slows down. Your orgasm feels like it''s being d...
        scene.text(`Reality wobbles, and everything slows down. Your orgasm feels like it's being dragged on for minutes, so intense it's painful. You give a muffled scream into the mattress that lasts a lifetime and ${((s as any).npcdesc ?? '')} obliviously keeps pounding you through the entirety of your magical climax.`);
      } else {
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? '')} shoves your head down into the mattress, fucking you head down, ass up, through the entirety of your orgasm.`);
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
        scene.text(`${((s as any).npcdesc ?? '')} keeps hitting all the right spots inside you, forcing your orgasm to keep going. You give a wordless groan, struggling to stay upright as he continues to fuck you from behind.`);
      } else {
        scene.img('images/shared/sex/vag/doggy/orgasm_rough1.mp4');
        scene.text('"<i>Nmmnnghhhaaaaaaaaaa!</i>"');
        scene.text('You\'ve been coming for so long now, it\'s a wonder how you\'re still managing to stay on your kne-');
        scene.text('Oh. That\'s funny.');
        // TODO-QSP: dynamic text: Seems your knees gave out some time ago. But <<$npcdesc>> never stopped fucking ...
        scene.text(`Seems your knees gave out some time ago. But ${((s as any).npcdesc ?? '')} never stopped fucking you, so you never stopped coming.`);
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          scene.text('<i>I wonder if a witch has ever literally exploded from their own magic?</i> the last thought of your delirious mind wonders...');
        } else {
          scene.text('<i>I wonder if I might</i> actually <i>die?</i> the last conscious part of your mind wonders...');
        }
      }
    } else {
      if (((s as any).npc_spanker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['spank'] = ((s as any).sex_ev['spank'] ?? 0) + (1);
        scene.img('images/shared/sex/vag/doggy/orgasm_spank1.mp4');
        scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come, magic erupting from your wo...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as your pussy clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock. Even as you shudder, ${((s as any).npcdesc ?? '')} mercilessly spanks your ass, drawing cries from your lips as magic amplifies the hard slaps to searing flashes of fire. It's impossible to tell whether they're flashes of pain or pleasure.`);
        } else {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come. Your entire body convulses,...
          scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as your pussy clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock. Even as you shudder in orgasm, ${((s as any).npcdesc ?? '')} mercilessly spanks your ass, drawing cries of pain or pleasure from your lips. Which one, even you're not completely sure.`);
        }
      } else {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come, magic erupting from your wo...
          scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your pussy clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock.`);
        } else {
          // TODO-QSP: dynamic text: You can''t even finish the sentence before you come. Your entire body convulses,...
          scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your pussy clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock.`);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckCum2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlCum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
  if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] < 5) {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.text('Bursts of magic pop inside you like firecrackers with every new climax, fueling the fire as you feel the energy course through your entire body, from your womb to the tips of your nipples.');
      }
      // TODO-QSP: dynamic text: Your body won''t stop moving, hips won''t stop rolling, pussy won''t stop tighte...
      scene.text(`Your body won't stop moving, hips won't stop rolling, pussy won't stop tightening. Even as you convulse on top of ${((s as any).npcdesc ?? '')} for what seems like the hundredth time, you can't seem to stop grinding yourself on top of his cock and you continue to come.`);
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.text('Saliva runs down your chin in waterfalls, streaming down your neck and glistening on your breasts. Your breathing comes in desperate gasps. Magic continuously explodes inside you like nuclear bombs, filling you with heat and passion, coming so hard in a never-ending cycle of orgasmic spasms it <i>hurts</i>.');
        scene.text('<i>I wonder if a witch has ever literally exploded from their own magic?</i> the last thought of your delirious mind wonders...');
      } else {
        // TODO-QSP: dynamic text: Saliva runs down your chin in waterfalls, streaming down your neck and glistenin...
        scene.text(`Saliva runs down your chin in waterfalls, streaming down your neck and glistening on your breasts. Your breathing comes in desperate gasps. Your body is caught in a never-ending cycle of orgasmic spasms, coming on ${((s as any).npcdesc ?? '')}'s cock so hard it <i>hurts</i>.`);
        scene.text('<i>I wonder if it\'s possible to fuck myself to death?</i> the last conscious part of your mind wonders...');
      }
    }
  } else {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
      // TODO-QSP: dynamic text: The buildup of pressure inside you pops like a bubble. Waves of magic and pleasu...
      scene.text(`The buildup of pressure inside you pops like a bubble. Waves of magic and pleasure come crashing through you. Your muscles goes taut, your pussy clenches tight, and you quiver on top of ${((s as any).npcdesc ?? '')}'s cock as magic explodes from your womb. It pours out of your every pore and orifice, carnal energy overflowing from your body that drives you into a realm of hypersensitive pleasure so intense it hurts.`);
    } else {
      // TODO-QSP: dynamic text: The buildup of pressure inside you crashes over the edge. Your body goes taut, y...
      scene.text(`The buildup of pressure inside you crashes over the edge. Your body goes taut, your pussy clenches tight, and you quiver on top of ${((s as any).npcdesc ?? '')}'s cock as waves of orgasm wash over you.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckCum2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
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
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking your ass through one orgasm into the next. Magic continues bursting inside you like nuclear bombs and you lose control of your pussy, squirting all over the bed.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> never slows down, fucking your ass through one orgasm into the next...
          scene.text(`${((s as any).npcdesc ?? '')} never slows down, fucking your ass through one orgasm into the next. Your pussy spasms, squirting girl cum all over the bed.`);
        }
      } else {
        if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on cock and drool all over ${((s as any).npcdesc ?? '')}'s hand as the barrage of orgasmic magic continues exploding inside you and you lose control of your pussy, squirting all over the bed.`);
        } else {
          // TODO-QSP: dynamic text: You''ve lost all conscious thought at this point and can do nothing more than sp...
          scene.text(`You've lost all conscious thought at this point and can do nothing more than spasm on ${((s as any).npcdesc ?? '')}'s cock, squirting your girlcum all over the bed.`);
        }
      }
    } else {
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        scene.img('images/shared/sex/anal/doggy/squirt1.mp4');
        // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
        scene.text(`${((s as any).npcdesc ?? '')} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
        // TODO-QSP: dynamic text: You groan loudly as your arms give out from underneath you. Your pussy spasms ar...
        scene.text(`You groan loudly as your arms give out from underneath you. Your pussy spasms around the cock inside it ${((s as any).npcdesc ?? '')} shoves your head down into the mattress.`);
        scene.text('At that moment, magic bursts from your inside your ass.');
        // TODO-QSP: dynamic text: Reality wobbles, and everything slows down. You feel another burst inside your w...
        scene.text(`Reality wobbles, and everything slows down. You feel another burst inside your womb and suddenly you feel waterfalls of your juices gush from your pussy. Your orgasm feels like it's being dragged on for minutes, so intense it's painful. You give a muffled scream into the mattress that lasts a lifetime and ${((s as any).npcdesc ?? '')} obliviously keeps pounding you through the entirety of your magical climax.`);
      } else {
        scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
        // TODO-QSP: dynamic text: <<$npcdesc>> pounds you from behind, sending shockwaves of pleasure coursing thr...
        scene.text(`${((s as any).npcdesc ?? '')} pounds you from behind, sending shockwaves of pleasure coursing through your body. It builds and builds and builds inside you and then all of a sudden, you're coming.`);
        // TODO-QSP: dynamic text: You groan loudly as your whole body clamps up and you can feel your asshole sque...
        scene.text(`You groan loudly as your whole body clamps up and you can feel your asshole squeezing tight around ${((s as any).npcdesc ?? '')}'s cock. It's like you can feel the entire shape of him through your ass.`);
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
      scene.text(`${((s as any).npcdesc ?? '')} keeps hitting all the right spots inside you, forcing your orgasm to keep going. You give a wordless groan, struggling to stay upright as he continues to fuck you from behind.`);
    } else {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      scene.text('"<i>Ah~! Ah~!</i> I\'m-! I\'m gonna-!"');
      if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((s as any).sex_ev ?? 0)?.['magik'] < ((s as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: You can''t even finish the sentence before you come, magic erupting from your wo...
        scene.text(`You can't even finish the sentence before you come, magic erupting from your womb as your orgasm flows through you, enhancing every sensation. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your asshole clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock.`);
      } else {
        // TODO-QSP: dynamic text: You can''t even finish the sentence before you come. Your entire body convulses,...
        scene.text(`You can't even finish the sentence before you come. Your entire body convulses, barely able to breathe as you shudder uncontrollably and your asshole clamps down on ${((s as any).npcdesc ?? '')}'s ${((s as any).dick_desc ?? '')} cock.`);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckCum2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckCumRandom(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['his_choice'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice_int'] = (Math.floor(Math.random() * 10) + 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumDecider(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['his_choice'] = 1;
    if ((Math.floor(Math.random() * 10) + 1) >= 9) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 8) + 1) >= 7) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if ((Math.floor(Math.random() * 6) + 1) >= 5) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits3(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if ((Math.floor(Math.random() * 4) + 1) >= 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            qspGoto(s, 'sex_ev_cum', 'cum_pullout');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumDecider(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice_int'] = (Math.floor(Math.random() * 10) + 1);
  if (((s as any).sex_ev ?? 0)?.['cycle_limit'] < ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice_int'] = 10;
  }
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_caution'] = 0;
  } else {
    if ((((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger'  ||  (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout'))  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_caution'] = ((s as any).rand ?? 0)(0, (1+((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)]));
    }
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_caution'] = 0;
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] > 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice_int'] < 10) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] === 10  ||  ((s as any).sex_ev ?? 0)?.['2pump'] === 1  ||  ((s as any).sex_ev ?? 0)?.['cant_hold_cum'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
    if (((s as any).sex_ev ?? 0)?.['extra_caution'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['virgin_creampie_request'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_where'] = 1;
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] + ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] >= 7) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_where'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 4) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)];
          if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] !== 1) {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
          }
          if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  (Math.floor(Math.random() * 150) + 1) < ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1)  &&  (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
            if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
            } else {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
            }
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1)) {
              if (((s as any).npc_ask_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
              } else {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
              }
            } else {
              if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = '';
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 1) {
            if ((Math.floor(Math.random() * 5) + 1) === 1  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
              if ((((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe'  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe'))  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will'  ||  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 0;
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie_surprise';
              } else {
                if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'creampie';
                } else {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_warn'] = 1;
                }
              }
            } else {
              if ((Math.floor(Math.random() * 4) + 1) === 1) {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
              } else {
                if ((Math.floor(Math.random() * 3) + 1) === 1  &&  (((s as any).npc_know_hate_facials ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'facial';
                } else {
                  if ((Math.floor(Math.random() * 2) + 1) === 1) {
                    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'tits';
                  } else {
                    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
                  }
                }
              }
            }
          } else {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'pullout';
          }
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie';
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie_surprise';
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'pullout') {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie';
          } else {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_choice'] = 'anal_creampie_surprise';
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_check'] = ((s as any).totminut ?? 0);
  if ((Math.floor(Math.random() * 25) + 1) === ((s as any).sex_ev ?? 0)?.['sex_stamina']  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_hold_cum'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if ((((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] > ((s as any).sex_ev ?? 0)?.['sex_stamina']  &&  ((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 0  &&  (Math.floor(Math.random() * 10) + 1) <= ((s as any).sex_ev ?? 0)?.['sex_stamina'])  ||  (((s as any).sex_ev ?? 0)?.['boy_cocaine'] === 1  &&  ((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] === 10)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if (((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['2pump'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['2pump'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['stop_orgasm'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['girl_orgasm'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_check'] < ((s as any).totminut ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] < 3) {
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
  }
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_fuck'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_sex'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_again'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 0;
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['gentle_fuck'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['steady_fuck'] = 1;
  }
  if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_fuck'] = 1;
  }
  qspCall(s, 'sex_ev_sex', 'pain_tracking');
  if (((s as any).sex_ev ?? 0)?.['dirty_talk_count'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['dirty_talk_talk'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cycle_limit'] = ((s as any).sex_ev['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['total_cycles'] = ((s as any).sex_ev['total_cycles'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] >= 1  &&  (((s as any).sex_ev ?? 0)?.['cycle_limit'] > 1  ||  ((s as any).sex_ev ?? 0)?.['2pump'] === 1)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) + (1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumDecider(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['2pump'] === 1) {
    qspGoto(s, 'sex_ev_cum', '2pumpchump');
  } else {
    if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cycle_limit'] + ((s as any).sex_ev ?? 0)?.['extra_stim'] <= ((s as any).sex_ev ?? 0)?.['sex_stamina'] + 1) {
      qspGoto(s, 'sex_ev_cum', 'girl_cum');
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
        qspGoto(s, 'sex_ev_cum', 'fuck_cum2');
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['consecutive_orgasm'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 0;
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumDialogue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
      // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
      scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
      scene.text('"I\'m-! Almost there!" he grunts, breaking away from your lips, panting heavily.');
    } else {
      // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
      scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
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
      scene.text(`"What should I do?" ${((s as any).npcdesc ?? '')} asks.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_creampie'] = 1;
        if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((s as any).mesec ?? 0) <= 0  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
          // TODO-QSP: dynamic text: "Can I come inside you? Is it safe today?" <<$npcdesc>> whimpers almost pleading...
          scene.text(`"Can I come inside you? Is it safe today?" ${((s as any).npcdesc ?? '')} whimpers almost pleadingly.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            // TODO-QSP: dynamic text: "Let''s come together," <<$npcdesc>> moans.
            scene.text(`"Let's come together," ${((s as any).npcdesc ?? '')} moans.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>-!" <<$npcdesc>> grunts. "I''m gonna come in your pussy-!"
              scene.text(`"${((s as any).pcs_nickname ?? '')}-!" ${((s as any).npcdesc ?? '')} grunts. "I'm gonna come in your pussy-!"`);
            } else {
              // TODO-QSP: dynamic text: "I wanna come inside you so bad," <<$npcdesc>> says.
              scene.text(`"I wanna come inside you so bad," ${((s as any).npcdesc ?? '')} says.`);
            }
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'anal_creampie') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_creampie'] = 1;
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            // TODO-QSP: dynamic text: "Let''s come together," <<$npcdesc>> moans.
            scene.text(`"Let's come together," ${((s as any).npcdesc ?? '')} moans.`);
          } else {
            // TODO-QSP: dynamic text: "I wanna come in your ass so bad," <<$npcdesc>> says.
            scene.text(`"I wanna come in your ass so bad," ${((s as any).npcdesc ?? '')} says.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_mouth'] = 1;
            // TODO-QSP: dynamic text: "Let me come in your mouth," <<$npcdesc>> says.
            scene.text(`"Let me come in your mouth," ${((s as any).npcdesc ?? '')} says.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_facial'] = 1;
              // TODO-QSP: dynamic text: "Let me finish on your face," <<$npcdesc>> says. "I want to see you covered in i...
              scene.text(`"Let me finish on your face," ${((s as any).npcdesc ?? '')} says. "I want to see you covered in it."`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_tits'] = 1;
                // TODO-QSP: dynamic text: "I wanna come on your tits," <<$npcdesc>> says.
                scene.text(`"I wanna come on your tits," ${((s as any).npcdesc ?? '')} says.`);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckCum2(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumDialogue(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    if (((st as any).sex_ev ?? 0)?.['cum_where'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['facial_ask'] = 1;
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumFacial(s, scene); (st as any).locArgs = __savedLocArgs; }
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_wherever'] = 1;
    if (((st as any).sex_ev ?? 0)?.['he_ask'] !== 1  ||  ((st as any).sex_ev ?? 0)?.['cum_warn'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('"Come~! Wherever~! You~! Want~!" you whimper pathetically, squeaking in pain with every thrust.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((st as any).sex_ev ?? 0)?.['virgin_feel_good'] !== 1) {
          scene.text('"Come~! Wherever~! You~! Want~!" you grunt uncomfortably with every thrust.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['speed'] === 1) {
            if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
              scene.text('"Come wherever you want," you squeak painfully.');
            } else {
              if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                scene.text('"Come wherever you want," you grunt stiffly.');
              } else {
                scene.text('"Come wherever you want," you smile sweetly.');
              }
            }
          } else {
            if (((st as any).sex_ev ?? 0)?.['speed'] === 2) {
              if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
                scene.text('"Come wherever you want," you squeak painfully.');
              } else {
                if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                  scene.text('"Come wherever you want," you grunt stiffly.');
                } else {
                  scene.text('"Come wherever you want!" you moan loudly.');
                }
              }
            } else {
              if (((st as any).sex_ev ?? 0)?.['speed'] === 3) {
                if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
                  scene.text('"Come-! Wherever-! You want-!" you squeak painfully, barely able to keep from crying.');
                } else {
                  if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
                    scene.text('"Come-! Wherever-! You want-!" you manage to grunt out stiffly.');
                  } else {
                    // TODO-QSP: dynamic text: "Come wherever you want!" you scream as <<$npcdesc>>''s cock keeps pounding into...
                    scene.text(`"Come wherever you want!" you scream as ${((st as any).npcdesc ?? '')}'s cock keeps pounding into you.`);
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
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['his_choice'] = 2;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumWherever(s, scene); (st as any).locArgs = __savedLocArgs; }
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
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGirlCum(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  scene.build();
}

function enterCumHisChoice(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 5) + 1) === 5  ||  ((s as any).sex_ev ?? 0)?.['his_choice'] === 2) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumHisChoice2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
        qspGoto(s, 'sex_ev_cum', 'anal_creampie_surprise');
      } else {
        qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
      }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits1(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                qspGoto(s, 'sex_ev_cum', 'anal_creampie_surprise');
              } else {
                if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                  qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
                } else {
                  qspGoto(s, 'sex_ev_cum', 'cum_pullout');
                }
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumHisChoice2(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits3(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
                qspGoto(s, 'sex_ev_cum', 'anal_creampie_surprise');
              } else {
                if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                  qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
                } else {
                  qspGoto(s, 'sex_ev_cum', 'cum_pullout');
                }
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumHisChoice2(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumHisChoice2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['his_choice'] = 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumDecider(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['where'] === 1) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialHeJerks(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits1(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
              if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
              } else {
                qspGoto(s, 'sex_ev_cum', 'cum_pullout');
              }
            }
          }
        }
      }
    }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumWherever(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumWherever(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
    qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'facial') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialHeJerks(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits1(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['extra_caution'] === 0)) {
            qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['mouth_cum_count'] = ((s as any).sex_ev['mouth_cum_count'] ?? 0) + (1);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['facial_count'] = ((s as any).sex_ev['facial_count'] ?? 0) + (1);
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialHeJerks(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_tits'] = ((s as any).sex_ev['cum_tits'] ?? 0) + (1);
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits3(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
                    if (((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 1) {
                      qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
                    } else {
                      qspGoto(s, 'sex_ev_cum', 'cum_pullout');
                    }
                  } else {
                    if ((Math.floor(Math.random() * 10) + 1) >= 9) {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      if ((Math.floor(Math.random() * 8) + 1) >= 7) {
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
                      } else {
                        if ((Math.floor(Math.random() * 6) + 1) >= 5) {
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumTits1(s, scene); (s as any).locArgs = __savedLocArgs; }
                        } else {
                          if ((Math.floor(Math.random() * 4) + 1) >= 3) {
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialHeJerks(s, scene); (s as any).locArgs = __savedLocArgs; }
                          } else {
                            qspGoto(s, 'sex_ev_cum', 'cum_pullout');
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
  // TODO-QSP: end
  scene.build();
}

function enterCumJerkoff(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking down at the strands of cum coating your fingers';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'hand';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_hand'] = ((s as any).sex_ev['cum_hand'] ?? 0) + (1);
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/handjob/bossbjcum.jpg');
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips out from between your legs and you grab hold of his cock, rip...
      scene.text(`${((s as any).npcdesc ?? '')} slips out from between your legs and you grab hold of his cock, ripping off the condom and fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips out from behind you and you grab hold of his cock, ripping of...
        scene.text(`${((s as any).npcdesc ?? '')} slips out from behind you and you grab hold of his cock, ripping off the condom and fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>''s cock and rip off the condom, fervently jerking h...
          scene.text(`You jump off of ${((s as any).npcdesc ?? '')}'s cock and rip off the condom, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips out from between your legs and you grab hold of his cock, fer...
      scene.text(`${((s as any).npcdesc ?? '')} slips out from between your legs and you grab hold of his cock, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips out from behind you and you grab hold of his cock, fervently ...
        scene.text(`${((s as any).npcdesc ?? '')} slips out from behind you and you grab hold of his cock, fervently jerking him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>''s cock and fervently jerk him until a fountain of ...
          scene.text(`You jump off of ${((s as any).npcdesc ?? '')}'s cock and fervently jerk him until a fountain of white liquid erupts from his tip and spills down your fingers.`);
        }
      }
    }
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
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
            scene.text(`${((s as any).npcdesc ?? '')} suddenly pulls his cock from inside you and moves up to your face, tearing off the condom. He starts rapidly jerking himself and you realize he's about to blow. In response, you...`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['cum_warn'] !== 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls his cock from inside you and moves up to your face. ...
              scene.text(`${((s as any).npcdesc ?? '')} suddenly pulls his cock from inside you and moves up to your face. He starts rapidly jerking himself and you realize he's about to blow. In response, you...`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
                // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and kneel down in front of him. He tears the con...
                scene.text(`You pull away from ${((s as any).npcdesc ?? '')} and kneel down in front of him. He tears the condom off and jerks off over your face. Just before he comes, you...`);
              } else {
                // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and kneel down in front of him. He starts rapidl...
                scene.text(`You pull away from ${((s as any).npcdesc ?? '')} and kneel down in front of him. He starts rapidly working his cock above your face and just before he comes, you...`);
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialCloseEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialTongueCum(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialTongueSpit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialBrace(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk him yourself', goto: ['sex_ev_cum', 'facial_jerk_him'] },
    { label: 'Jerk him into your mouth', goto: ['sex_ev_cum', 'facial_jerk_mouth'] },
  ]);
  scene.build();
}

function enterFacialJerkHim(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_facial', 'pc_jerk');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'facial';
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum from your eyes';
  scene.img('images/shared/sex/cum/facial/jerk_him1.mp4');
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and tears off the condom as h...
      scene.text(`${((s as any).npcdesc ?? '')} slips his cock from between your legs and tears off the condom as he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and moves to straddle your ch...
        scene.text(`${((s as any).npcdesc ?? '')} slips his cock from between your legs and moves to straddle your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you and tears off the condom as you ...
          scene.text(`${((s as any).npcdesc ?? '')} slips his cock out from behind you and tears off the condom as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you as you flip over onto your back ...
            scene.text(`${((s as any).npcdesc ?? '')} slips his cock out from behind you as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he''s ...
                scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Climax breaks inside you just as hot cum erupts from <<$npcdesc>>''s cock, spatt...
    scene.text(`Climax breaks inside you just as hot cum erupts from ${((s as any).npcdesc ?? '')}'s cock, spattering across your O-face.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you. He te...
      scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? '')} slip his cock from inside you. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you, and y...
        scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? '')} slip his cock from inside you, and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. He tear...
          scene.text(`You pull away from ${((s as any).npcdesc ?? '')} and turn around, laying down on the bed. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. Pulling...
            scene.text(`You pull away from ${((s as any).npcdesc ?? '')} and turn around, laying down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he''s ...
                scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, coating your face.`);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  // TODO-QSP: end
  scene.build();
}

function enterFacialJerkMouth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_facial', 'pc_jerk');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe1'] = 'Sorry,';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum from your eyes';
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
      scene.text(`${((s as any).npcdesc ?? '')} slips his cock from between your legs and tears off the condom as he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock from between your legs and moves to straddle your ch...
        scene.text(`${((s as any).npcdesc ?? '')} slips his cock from between your legs and moves to straddle your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you and tears off the condom as you ...
          scene.text(`${((s as any).npcdesc ?? '')} slips his cock out from behind you and tears off the condom as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you as you flip over onto your back ...
            scene.text(`${((s as any).npcdesc ?? '')} slips his cock out from behind you as you flip over onto your back and he straddles your chest. Taking hold of his length, you pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
              scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he''s ...
                scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft while frantically working your clit at the same time. You're so close! You just need to-`);
              }
            }
          }
        }
      }
    }
    // TODO-QSP: dynamic text: Climax breaks inside you just as hot cum erupts from <<$npcdesc>>''s cock, spatt...
    scene.text(`Climax breaks inside you just as hot cum erupts from ${((s as any).npcdesc ?? '')}'s cock, spattering all over your tongue and across your cheeks.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you. He te...
      scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? '')} slip his cock from inside you. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: You open up your legs, letting <<$npcdesc>> slip his cock from inside you, and y...
        scene.text(`You open up your legs, letting ${((s as any).npcdesc ?? '')} slip his cock from inside you, and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: You pull away from <<$npcdesc>> and turn around, laying down on the bed. He tear...
          scene.text(`You pull away from ${((s as any).npcdesc ?? '')} and turn around, laying down on the bed. He tears the condom off and you pull him close so he's straddling you. Taking hold of him, you pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl'  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
            // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed while he tears off the condo...
            scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed while he tears off the condom. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: You hop off of <<$npcdesc>> and lay down on the bed. Pulling him close so he''s ...
              scene.text(`You hop off of ${((s as any).npcdesc ?? '')} and lay down on the bed. Pulling him close so he's straddling you, you take hold of his cock and pump his shaft no more than twice before thick, hot cum comes spurting out, spattering all over your tongue and across your cheeks.`);
            }
          }
        }
      }
    }
  }
  if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
    scene.text('The warm liquid making contact with your skin is the only thing left you need and you come with him, getting caught in the throes of orgasm as you keep working his shaft, emptying his balls all over your face.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  // TODO-QSP: end
  scene.build();
}

function enterFacialHeJerks(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialCloseEyes(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialTongueCum(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialTongueSpit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialBrace(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCumCannonFacial(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterFacialWipeEyes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions', 'bask_satisfaction');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wipe your eyes', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'hands', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial31.jpg');
    // TODO-QSP: dynamic text: You carefully wipe the cum away from your eyes and open them. The edges of your ...
    scene.text(`You carefully wipe the cum away from your eyes and open them. The edges of your vision are still blurry with sticky liquid, but you can still see ${((st as any).npcdesc ?? '')}, his cock hanging above you.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterFacialCloseEyes(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Close your eyes', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'cum_facial');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'wiping the cum from your eyes';
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('You close your eyes and moments later hot liquid splashes across your face, the sensation making you flinch involuntarily.');
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your skin is the only thing left you need and you come with him, quivering in orgasm as he empties his balls all over your face.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
  } },
  ]);
  scene.build();
}

function enterFacialTongueCum(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stick out your tongue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'licking your lips';
    qspCall(st, 'sex_ev_stats', 'cum_mouth_facial');
    qspCall(st, 'cum_call', 'breasts', ((st as any).npcID ?? 0), 1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['last_cum'] = 'face_mouth';
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial25.mp4');
    if (((st as any).sex_ev ?? 0)?.['his_choice'] !== 2) {
      if (((st as any).sex_ev ?? 0)?.['cum_where'] === 1) {
        scene.text('"In my mouth!"');
      } else {
        if (((st as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
          scene.text('"Okay," you say.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['he_ask'] === 1  &&  ((st as any).sex_ev ?? 0)?.['he_ask_facial'] !== 1) {
            scene.text('"Cum in my mouth instead!"');
          } else {
            if (((st as any).sex_ev ?? 0)?.['not_inside'] === 1) {
              scene.text('"Not inside me!" you yelp frantically.');
            }
          }
        }
      }
    }
    scene.text('You hop off the bed and kneel down, opening your mouth wide and sticking out your tongue as far as it can go. Moments later, a hot glob of salty liquid lands directly on your tongue, followed by more that spatters across your face, running down your cheek and dripping onto your breasts.');
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your tongue is the only thing left you need and you come with him, struggling to catch the rest of his load as you quiver in orgasm.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumMouth2(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Gulp', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'cum_swallow');
    scene.img('images/shared/sex/cum/facial/facial26.mp4');
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you close your mout...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you close your mouth and swallow, gulping down the entire load. You pant heavily in the aftershocks of your orgasm, looking up at ${((st as any).npcdesc ?? '')} through cum-glazed eyes.`);
    } else {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you close your mout...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you close your mouth and swallow, gulping down the entire load. You open your mouth again afterwards to pick up any stray shots, but it seems ${((st as any).npcdesc ?? '')} is finished so you open your eyes to look at him.`);
    }
    if (((st as any).npc_seen_swallow ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth'  &&  ((st as any).sex_ev ?? 0)?.['swallow_comment'] !== ((st as any).daystart ?? 0)) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['swallow_comment'] = ((st as any).daystart ?? 0);
      scene.text('"I love watching you swallow," he says affectionately, smiling down at you.');
    } else {
      if (((st as any).npc_seen_swallow ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
        scene.text('"You\'re the best," he says affectionately, smiling down at you.');
      } else {
        scene.text('"That\'s fucking hot," he grins down at you.');
      }
    }
    ((st as any).npc_seen_swallow = (st as any).npc_seen_swallow ?? {})[String((st as any).npcID ?? 0)] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
  } },
      { label: 'Force it down (hide your disgust)', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'sex_ev_stats', 'cum_swallow', 'disgust');
    scene.img('images/shared/sex/cum/mouth/swallow6.mp4');
    // TODO-QSP: dynamic text: You can''t take it anymore and close your mouth, continuing to look up at <<$npc...
    scene.text(`You can't take it anymore and close your mouth, continuing to look up at ${((st as any).npcdesc ?? '')} as he releases the rest of his load all over your lips and the revulsion and nausea wells up in your throat. Your eyes water with the effort but you manage to gulp, forcing the vile liquid down, and give ${((st as any).npcdesc ?? '')} what feels like one of the fakest smiles you've ever put on.`);
    scene.text('But hopefully he doesn\'t notice...');
    if (((st as any).npc_seen_swallow ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth'  &&  ((st as any).sex_ev ?? 0)?.['swallow_comment'] !== ((st as any).daystart ?? 0)) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['swallow_comment'] = ((st as any).daystart ?? 0);
      scene.text('"I love watching you swallow," he says affectionately, smiling down at you.');
    } else {
      if (((st as any).npc_seen_swallow ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
        scene.text('"You\'re the best," he says affectionately, smiling down at you.');
      } else {
        scene.text('"That\'s fucking hot," he grins down at you.');
      }
    }
    ((st as any).npc_seen_swallow = (st as any).npc_seen_swallow ?? {})[String((st as any).npcID ?? 0)] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFacialTongueSpit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stick out your tongue (spit)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['next_act1'] = 'sex_ev_after';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['next_act2'] = 'pre';
    qspCall(st, 'sex_ev_stats', 'cum_mouth_facial', 'spit');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'letting the rest of his cum dribble from your lips';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bj_cum'] = 2;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial29.mp4');
    // TODO-QSP: dynamic text: You open your mouth wide and stick your tongue out, waiting for the shot to come...
    scene.text(`You open your mouth wide and stick your tongue out, waiting for the shot to come. ${((st as any).npcdesc ?? '')} grins, continuing to jack off with one hand and grabbing you by the hair with the other, positioning your face right in front of his cock. Moments later, spurts of semen erupt from it, spattering across your face and covering your tongue. You quickly spit the bitter liquid out over your lips as he continues to cum, a couple stray shots flying into your hair. A few seconds later, he stops ejaculating and releases your hair, stepping back from you.`);
    if (((st as any).orgasm ?? 0) > ((st as any).sex_ev ?? 0)?.['orgasm']) {
      scene.text('The warm cum making contact with your tongue is the only thing left you need and you come with him, even as more cum continues to splash against your cheeks and dribble down your chin.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFacialWipeEyes(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
  } },
  ]);
  scene.build();
}

function enterFacialBrace(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Brace yourself (disgust)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'cum_facial');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial30.mp4');
    scene.text('The first shot of cum hits you directly in the eye, and you squeeze both of them shut as you to cringe in disgust. More and more spurts come out, spraying across your face and completely covering your eyes. By the time he\'s finished orgasming, your visage is absolutely plastered with semen and your expression is stuck in an involuntary grimace.');
    scene.text('"Oh my god! That\'s so gross!" you cringe.');
    // TODO-QSP: dynamic text: Carefully wiping the cum from your eyes, you blink them open, vision ringed with...
    scene.text(`Carefully wiping the cum from your eyes, you blink them open, vision ringed with blurry white edges, and the first sight you're greeted with is ${((st as any).npcdesc ?? '')} wearing a shit eating grin, looking at your plastered face.`);
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'facial'  &&  ((st as any).sex_ev ?? 0)?.['facial_ask'] === 1  &&  ((st as any).sex_ev ?? 0)?.['facial_hate_comment'] !== ((st as any).daystart ?? 0)) {
      scene.text('"You hate it so much," he says "But you still asked me to do it?"');
      scene.actions([
        { label: 'I know you like it', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"I did it for you. I know you like it," you say, giving him a dirty look. "I don\'t know why I let you. What was I thinking?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> just laughs at your reaction.
    scene.text(`${((st as any).npcdesc ?? '')} just laughs at your reaction.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['he_ask_facial'] === 1) {
        scene.actions([
          { label: 'I can\'t believe I let you do this', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"I can\'t <i>believe</i> I let you do this," you grimace, spitting away the disgusting fluid from where it seeps past your lips.');
    scene.text('"You look great," he says back, smiling smugly.');
    scene.text('"Yeah, yeah, whatever," you say, digust deepening as you feel another glob dribble down your cheek.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You better be thankful', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"You better be thankful I let you do this," you grumble. "This is <i>vile</i>."');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>," he smiles back, patting you on the head. "I apprecia...
    scene.text(`"Thanks ${((st as any).pcs_nickname ?? '')}," he smiles back, patting you on the head. "I appreciate it. You look great by the way."`);
    scene.text('You roll your eyes, but at least he appreciates what you go through for him.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You\'re the worst', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    scene.text('"You\'re the worst," you grumble.');
    scene.text('"You\'re the best," he says back, patting you gently on the head. "I really enjoyed it."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((st as any).sex_ev ?? 0)?.['he_ask'] === 1) {
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'blinking the cum away from your eyes';
          scene.text('"You asked me to do it."');
          if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
            ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Because,';
            qspCall(st, 'sex_ev_reactions', 'no_cum_inside');
          } else {
            if (((st as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
              scene.actions([
                { label: 'Swallowing is gross', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Better this than in my mouth," you grimace, <<$sex_ev[''cum_describe2'']>>. "Li...
    scene.text(`"Better this than in my mouth," you grimace, ${((st as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "Like I'd ever want to swallow <i>this</i>." You gag at the thought of it.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                { label: 'I don\'t like you enough for that', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don''t like you enough to let you do that," you grimace, <<$sex_ev[''cum_desc...
    scene.text(`"I don't like you enough to let you do that," you grimace, ${((st as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "God, I wish I did though. This is awful."`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
              ]);
            } else {
              if (((st as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
                scene.actions([
                  { label: 'Feels weird', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I don''t like the feeling of that on my skin," you grimace, <<$sex_ev[''cum_des...
    scene.text(`"I don't like the feeling of that on my skin," you grimace, ${((st as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}.`);
    scene.text('"So you had me come onyour face instead?"');
    scene.text('"... Shut up!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                  { label: 'I should\'ve let you come on my tits', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I should''ve let you come on my tits," you grimace, <<$sex_ev[''cum_describe2''...
    scene.text(`"I should've let you come on my tits," you grimace, ${((st as any).sex_ev ?? 0)?.['cum_describe2'] ?? ''}. "This was a mistake!"`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
                ]);
              } else {
                scene.text('You grin at him as he comes all over your hand, continuing to jerk him until his cock stops twitching and nothing else comes out. After a couple more tugs for good measure, you pull back.');
                qspCall(st, 'sex_ev_sex', 'sex_end');
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
    scene.text(`"Why do boys even like this?" you grimace, while ${((st as any).npcdesc ?? '')} keeps leering at you. "What on earth is so hot about plastering a girl's face with <i>this</i>?"`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I hate you', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    scene.img('images/shared/sex/cum/facial/facial_after1.mp4');
    // TODO-QSP: dynamic text: "I hate you," you grumble, spitting the disgusting fluid away from your lips as ...
    scene.text(`"I hate you," you grumble, spitting the disgusting fluid away from your lips as ${((st as any).npcdesc ?? '')} laughs out loud.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumMouth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['his_choice'] === 1) {
    // TODO-QSP: dynamic text: "I''m gonna come in your mouth!" is the only warning your receive before <<$npcd...
    scene.text(`"I'm gonna come in your mouth!" is the only warning your receive before ${((s as any).npcdesc ?? '')} yanks his cock from your pussy and shoves it between your lips.`);
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
            scene.text(`"Not inside me!" you yelp frantically. In response, ${((s as any).npcdesc ?? '')} yanks his cock from your pussy and moves it towards your mouth.`);
          } else {
            // TODO-QSP: dynamic text: "Let me come in your mouth!" <<$npcdesc>> says as he yanks his cock from your pu...
            scene.text(`"Let me come in your mouth!" ${((s as any).npcdesc ?? '')} says as he yanks his cock from your pussy.`);
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFacialTongueCum(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouth1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/swallow5.mp4');
  if (((s as any).sex_ev ?? 0)?.['his_choice'] === 2  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. He pulls out of your pussy ...
      scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. He pulls out of your pussy and you crawl forward, ripping off the condom and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You feel <<$npcdesc>>''s co...
        scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. You feel ${((s as any).npcdesc ?? '')}'s cock pull out of your pussy and you quickly turn around, ripping off the condom and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You jump off <<$npcdesc>>''...
          scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. You jump off ${((s as any).npcdesc ?? '')}'s cock and turn around, ripping the condom off and replacing it with your lips. As soon as you do, his hips buck, sending your head all the way to the base of his shaft, and hot globs of salty liquid fill your mouth.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['his_choice'] === 2) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. He pulls out of you and you...
        scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. He pulls out of you and you lunge forward, replacing your pussy with your lips. You taste yourself on his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You feel <<$npcdesc>>''s co...
          scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. You feel ${((s as any).npcdesc ?? '')}'s cock pull out of you and you quickly turn around, ripping off the condom and replacing your pussy with your lips, bobbing your head up and down his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "I want to come in your mouth," <<$npcdesc>> grunts. You jump off <<$npcdesc>> a...
            scene.text(`"I want to come in your mouth," ${((s as any).npcdesc ?? '')} grunts. You jump off ${((s as any).npcdesc ?? '')} and turn around, replacing your pussy with your lips, bobbing your head up and down his shaft and moments later, his hips buck, sending your head all the way to its base as hot globs of salty liquid spurt into your mouth, mixing flavors with your own juices.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you and rips the condom off. You kneel forward, wrapp...
          scene.text(`${((s as any).npcdesc ?? '')} climbs off of you and rips the condom off. You kneel forward, wrapping your lips around his cock and begin sucking him off until you feel hot globs of liquid spurt into your mouth.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: You feel <<$npcdesc>>''s cock pull out of you and you quickly turn around, pushi...
            scene.text(`You feel ${((s as any).npcdesc ?? '')}'s cock pull out of you and you quickly turn around, pushing him onto his back and rip the condom off. Wrapping your lips around his girth, you suck him off until you feel hot globs of liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: You jump off <<$npcdesc>>''s cock and turn around, ripping the condom off. Wrapp...
              scene.text(`You jump off ${((s as any).npcdesc ?? '')}'s cock and turn around, ripping the condom off. Wrapping your lips around his girth, you begin sucking him off, you begin sucking him off until you feel hot globs of liquid spurt into your mouth.`);
            }
          }
        }
      } else {
        if (((s as any).mesec ?? 0) > 0) {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of you and flops onto his back and you dive between his l...
            scene.text(`${((s as any).npcdesc ?? '')} pulls out of you and flops onto his back and you dive between his legs, wrapping your lips around his girth. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              // TODO-QSP: dynamic text: <<$npcdesc>>''s cock slips from your pussy and you spin around, wrap your lips a...
              scene.text(`${((s as any).npcdesc ?? '')}'s cock slips from your pussy and you spin around, wrap your lips around him. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You jump off <<$npcdesc>>''s cock and dive between his legs, wrap your lips arou...
                scene.text(`You jump off ${((s as any).npcdesc ?? '')}'s cock and dive between his legs, wrap your lips around him. You taste the coppery flavor of your period as you pump your lips up and down his shaft, and then he stiffens and groans and hot globs of sticky salty liquid spurt into your mouth.`);
              }
            }
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            // TODO-QSP: dynamic text: <<$npcdesc>> pulls out of you and flops onto his back and you dive between his l...
            scene.text(`${((s as any).npcdesc ?? '')} pulls out of you and flops onto his back and you dive between his legs, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
              // TODO-QSP: dynamic text: <<$npcdesc>>''s cock slips from your pussy and you spin around, wrap your lips a...
              scene.text(`${((s as any).npcdesc ?? '')}'s cock slips from your pussy and you spin around, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                // TODO-QSP: dynamic text: You jump off <<$npcdesc>>''s cock and dive between his legs, wrap your lips arou...
                scene.text(`You jump off ${((s as any).npcdesc ?? '')}'s cock and dive between his legs, wrap your lips around him, and pump them up and down his shaft. Soon after, he stiffens inside you and groans loudly as hot globs of sticky salty liquid spurt into your mouth.`);
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCumMouth2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
    scene.actions([
      { label: 'Suck it down', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'swallow');
    // TODO-QSP: dynamic text: Taking it in stride, you keep your lips wrapped around <<$npc_usedname[$npcID]>>...
    scene.text(`Taking it in stride, you keep your lips wrapped around ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}'s cock, swallowing each glob of sperm as it comes into your mouth. His hips buck beneath you but you don't stop sucking until he's shooting blanks.`);
    qspCall(st, 'sex_ev_reactions', 'cum_react');
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
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'swallow');
    scene.img('images/shared/sex/cum/mouth/gag3.mp4');
    scene.text('The sensation of cum shooting into the back of your throat is almost enough to make you vomit, it\'s certainly enough to make you gag, but you soldier through and choke it down as best you can until his hip stop shaking.');
    qspCall(st, 'sex_ev_reactions', 'cum_react');
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
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'spit', 'gag');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npcID ?? 0), 1);
    scene.img('images/shared/sex/cum/mouth/gag2.mp4');
    scene.text('The intensity of the bitter flavor is far more than you expect and you immediately pull your mouth off, spitting out the first load. You stick your tongue out, trying to soldier through and at least take the rest of it but as soon as the next shot hits your tongue your gag reflex kicks in instead, causing you to retch.');
    // TODO-QSP: dynamic text: Still holding onto <<$npcdesc>>''s cock with one hand, you clamp your other hand...
    scene.text(`Still holding onto ${((st as any).npcdesc ?? '')}'s cock with one hand, you clamp your other hand over your mouth, throat convulsing. It smears the cum on your lips all over your face, but you somehow manage to stop yourself from throwing up all over the bed.`);
    if (((st as any).npc_cum_gag ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Uhh, you okay?"');
      scene.actions([
        { label: 'Wrong pipe', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum112.jpg');
    scene.text('"I- uhh, it went down the wrong pipe," you wheeze, covering your lie up with a cough.');
    scene.text('"Careful girl, that\'s not usually what a guy means when he says he wants to see you choke on his cock."');
    scene.text('He laughs at his own joke and you give a weak smile, eyes still watering from how bad his cum tasted.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'You taste awful!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum52.jpg');
    scene.text('"That- <i>cough</i> tastes awful!" you wheeze, eyes watering.');
    scene.text('"Wait, is this the first time someone\'s cum in your mouth?"');
    if (((st as any).stat ?? 0)?.['swallow'] > 0) {
      scene.text('"No," you look at him accusingly. "You just taste terrible! Yech!"');
    } else {
      scene.text('"Yeah," you say, eyes watering.');
      scene.text('"Don\'t worry, you\'ll get used to it eventually," he grins.');
      scene.text('<i>You mean all cum tastes like this...?</i>');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((st as any).npc_cum_gag ?? 0)?.[String((st as any).npcID ?? 0)] > 1) {
        if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  &&  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
          scene.text('"You know, you don\'t have to keep trying if it\'s that bad for you," he says, looking at you with concern.');
          if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
            scene.actions([
              { label: 'I want to do it for you', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I want to do it," you say, looking up at him with tender eyes. "For you. I know you like it when girls swallow. So that makes me want to do it too."');
    scene.text('He puts his hand on your head, smiling warmly at you, sending a spark of thrill through your chest. If he can look at you like that after, maybe this is worth it...');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
            ]);
          }
          scene.actions([
            { label: 'Now you tell me!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    // TODO-QSP: dynamic text: "Now you tell me!" you say, sticking your tongue out in disgust. <<$npcdesc>> bu...
    scene.text(`"Now you tell me!" you say, sticking your tongue out in disgust. ${((st as any).npcdesc ?? '')} bursts into laughter and you scowl at him. "It's not funny!" you protest, but that just makes him laugh even more.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'No, I want to', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No," you say slowly, choking your way through the words. "I want to. I just... need to get used to it. Right...?"');
    // TODO-QSP: dynamic text: "Well, just don''t get sick, okay?" <<$npcdesc>> says, looking at you with conce...
    scene.text(`"Well, just don't get sick, okay?" ${((st as any).npcdesc ?? '')} says, looking at you with concern.`);
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Come on, is it really that hard to just swallow?" <<$npcdesc>> says, looking at...
          scene.text(`"Come on, is it really that hard to just swallow?" ${((st as any).npcdesc ?? '')} says, looking at you with disgust.`);
          scene.actions([
            { label: 'I\'m sorry', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m sorry," you say, submissively looking up at him. "I\'ll try harder next time, I promise."');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'It is!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Yes! It is!" you grimace. "It tastes- <i>ugh!</i> I literally can\'t even keep it down!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
            { label: 'You try it!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mad'] = 1;
    scene.text('"I\'d like to see <i>you</i> try!" you scowl, wiping your lips with the back of your hand. "Jack that vile shit into your own mouth and see how you like it!"');
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'You taste awful!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum52.jpg');
    scene.text('"That- <i>cough</i> tastes awful!" you wheeze, eyes watering.');
    scene.text('"Wait, is this the first time someone\'s cum in your mouth?"');
    if (((st as any).stat ?? 0)?.['swallow'] > 0) {
      scene.text('"No," you look at him accusingly. "You just taste terrible! Blech!"');
    } else {
      scene.text('"Yeah," you say, eyes watering.');
      scene.text('"Don\'t worry, you\'ll get used to it eventually," he grins.');
      scene.text('<i>You mean all cum tastes like this...?</i>');
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Gather it in your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/cum53.jpg');
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
      // TODO-QSP: dynamic text: A few seconds go by and no more spurts of cum land on you so you open your eyes ...
      scene.text(`A few seconds go by and no more spurts of cum land on you so you open your eyes to look up at ${((st as any).npcdesc ?? '')} with his load still filling your mouth. Seeing him looking down at you, you playfully use your tongue to gather it between your lips.`);
    } else {
      // TODO-QSP: dynamic text: You keep your lips wrapped tight around the tip of <<$npcdesc>>''s cock while he...
      scene.text(`You keep your lips wrapped tight around the tip of ${((st as any).npcdesc ?? '')}'s cock while he comes, sucking every last drop of spunk from it until it stops twitching and you think his orgasm if finished. Looking up at him, you stick out your tongue, showing him the entire load you gathered in your mouth.`);
    }
    scene.actions([
      { label: 'Spit', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'spit');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit1.mp4');
    scene.text('Pulling back you play with the cum in your mouth a little, giggling as you show it off until you spit it out, letting it dribble over the edge of your lips.');
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Swallow', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe1'] = 'Thanks,';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'wiping your mouth';
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'swallow');
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    // TODO-QSP: dynamic text: Taking a step back, you open your mouth again to show <<$npcdesc>> how much cum ...
    scene.text(`Taking a step back, you open your mouth again to show ${((st as any).npcdesc ?? '')} how much cum is still inside before taking a deep breath and swallowing his entire load in one gulp. Afterwards, you stick your tongue back out to show him a clean mouth that swallowed every last drop.`);
    qspCall(st, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Spit', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'cum_mouth', 'spit');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'mouth') {
      scene.img('images/shared/sex/cum/mouth/spit6.mp4');
      // TODO-QSP: dynamic text: You draw yourself back up <<$npcdesc>>''s cock, keeping your lips tightly sealed...
      scene.text(`You draw yourself back up ${((st as any).npcdesc ?? '')}'s cock, keeping your lips tightly sealed, allowing the cum to pool at the front of your mouth. You hold it there for a few moments and then unpurse your lips, and letting all his cum dribble out of your mouth and down your chin.`);
    } else {
      scene.img('images/shared/sex/cum/mouth/spit1.mp4');
      scene.text('Pulling back you play with the cum in your mouth a little, giggling as you show it off until you spit it out, letting it dribble over the edge of your lips.');
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['last_cum'] = 'spit';
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCumMouthAfter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
      scene.text(`${((s as any).npcdesc ?? '')} jumps from between your legs and tears off the condom, preparing to come on your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You feel him withdraw from your pussy and quickly turn around, flopping down ont...
        scene.text(`You feel him withdraw from your pussy and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? '')} tears off the condom, preparing to come on your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>''s cock, falling backwards onto the bed as he tears...
          scene.text(`You jump off of ${((s as any).npcdesc ?? '')}'s cock, falling backwards onto the bed as he tears off the condom, preparing to come on your tits.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            // TODO-QSP: dynamic text: You feel him withdraw from your ass and quickly turn around, flopping down onto ...
            scene.text(`You feel him withdraw from your ass and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? '')} tears off the condom, preparing to come on your tits.`);
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: <<$npcdesc>> jumps from between your legs and prepares to come on your tits.
      scene.text(`${((s as any).npcdesc ?? '')} jumps from between your legs and prepares to come on your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You feel him withdraw from your pussy and quickly turn around, flopping down ont...
        scene.text(`You feel him withdraw from your pussy and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? '')} prepares to come on your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You jump off of <<$npcdesc>>''s cock, falling backwards onto the bed as he prepa...
          scene.text(`You jump off of ${((s as any).npcdesc ?? '')}'s cock, falling backwards onto the bed as he prepares to come on your tits.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            // TODO-QSP: dynamic text: You feel him withdraw from your asshole and quickly turn around, flopping down o...
            scene.text(`You feel him withdraw from your asshole and quickly turn around, flopping down onto the bed as ${((s as any).npcdesc ?? '')} prepares to come on your tits.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterCumTits2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'cum_tits', 'pc_jerk');
  scene.img('images/shared/sex/cum/chest/tits2.mp4');
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    // TODO-QSP: dynamic text: Beckoning <<$npcdesc>> towards you, he moves forward, straddling your stomach wi...
    scene.text(`Beckoning ${((s as any).npcdesc ?? '')} towards you, he moves forward, straddling your stomach with his legs. You take hold of his member with your hand and immediately start working it. Within two pumps, cum spurts from the tip of his cock, the thick white liquid spattering across your chest, hot against your skin.`);
  } else {
    // TODO-QSP: dynamic text: Beckoning <<$npcdesc>> towards you, he moves forward, straddling your stomach wi...
    scene.text(`Beckoning ${((s as any).npcdesc ?? '')} towards you, he moves forward, straddling your stomach with his legs. You take hold of his member with your hand and immediately start working it, its shaft still slick with your juices. Within two pumps, cum spurts from the tip of his cock, the thick white liquid spattering across your chest, hot against your skin.`);
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterCumTits3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  qspCall(s, 'sex_ev_stats', 'cum_tits');
  scene.img('images/shared/sex/cum/chest/tits4.mp4');
  if (((s as any).sex_ev ?? 0)?.['he_ask'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls himself from between your legs and quickly moves ove...
        scene.text(`${((s as any).npcdesc ?? '')} suddenly pulls himself from between your legs and quickly moves over to you, ripping the condom off as he does. No sooner is the rubber sleeve free from his shaft than cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? '')} comes all over them.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: You feel <<$npcdesc>> suddenly pull his cock out of your pussy just before he su...
          scene.text(`You feel ${((s as any).npcdesc ?? '')} suddenly pull his cock out of your pussy just before he suddenly flips you onto your back. You try to sit up as he rips the condom off and no sooner is the rubber sleeve free from his shaft than cum bursts from the tip of his cock, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? '')} comes all over them.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: In a sudden movement, <<$npcdesc>> lifts you off of his cock by the hips, pushin...
            scene.text(`In a sudden movement, ${((s as any).npcdesc ?? '')} lifts you off of his cock by the hips, pushing you backwards onto your back. You try to sit up as he rips the condom off and no sooner is the rubber sleeve free from his shaft than cum bursts from the tip of his cock, thick white droplets of it spattering across your breasts as ${((s as any).npcdesc ?? '')} comes all over them.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: <<$npcdesc>> suddenly pulls himself from between your legs and quickly moves ove...
        scene.text(`${((s as any).npcdesc ?? '')} suddenly pulls himself from between your legs and quickly moves over to you, holding his cock in his hand. As you sit up, cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? '')} shudders in pleasure.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: You feel <<$npcdesc>> suddenly pull his cock out of your pussy just before he su...
          scene.text(`You feel ${((s as any).npcdesc ?? '')} suddenly pull his cock out of your pussy just before he suddenly flips you onto your back. You try to sit up just as he scoots over and cum bursts from the tip of his cock, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? '')} comes all over them.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: In a sudden movement, <<$npcdesc>> lifts you off of his cock by the hips, pushin...
            scene.text(`In a sudden movement, ${((s as any).npcdesc ?? '')} lifts you off of his cock by the hips, pushing you backwards onto your back. You try to sit up as he scoots over, working his shaft with his hand and cum bursts from the tip, thick white droplets of it spattering across your breasts as ${((s as any).npcdesc ?? '')} comes all over them.`);
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You open up your legs to let him out and he scooches forward. After just a few p...
      scene.text(`You open up your legs to let him out and he scooches forward. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? '')} blows his load all over your tits.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You hurriedly pull yourself off of him, turning around and laying down on the be...
        scene.text(`You hurriedly pull yourself off of him, turning around and laying down on the bed. He scooches forward. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? '')} blows his load all over your tits.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You hurriedly jump off of him, laying down on the bed. After just a few pumps fr...
          scene.text(`You hurriedly jump off of him, laying down on the bed. After just a few pumps from his fingers, cum spurts out from the tip of his cock, sending the white fluid spattering across your skin as, ${((s as any).npcdesc ?? '')} blows his load all over your tits.`);
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <<$npcdesc>> quickly moves over to you, holding his cock in his hand. As you sit...
  scene.text(`${((s as any).npcdesc ?? '')} quickly moves over to you, holding his cock in his hand. As you sit up, cum bursts from the tip, thick white droplets spattering across your breasts as ${((s as any).npcdesc ?? '')} shudders in pleasure.`);
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterCumTitsEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions', 'cum_react');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_restrict'] === 0  &&  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).npc_rule_no_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
    scene.actions([
      { label: 'Creampies cost extra', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['p_creampie_bonus'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['prostitution_bonus'] = ((st as any).sex_ev['prostitution_bonus'] ?? 0) + (1000);
    scene.text('"Finishing inside costs extra," you smirk teasingly.');
    scene.text('"Ungh~! Done!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t even hesitate and thrusts balls deep into you with a loud ...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't even hesitate and thrusts balls deep into you with a loud groan.`);
    scene.actions([
      { label: 'Get creampied', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Creampie', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)  ||  ((st as any).pcs_horny ?? 0) > 90) {
      if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        scene.actions([
          { label: 'Come together', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['he_ask_creampie_yes'] = 1;
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
      if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0  &&  ((st as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((st as any).sex_ev ?? 0)?.['position'] !== 'anal') {
          if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).tabletkishot ?? 0) > 0) {
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
            if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
              scene.actions([
                { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
              ]);
            } else {
              if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
                scene.actions([
                  { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"It\'s probably fine today," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).sex_ev ?? 0)?.['preg_risk'] === '') {
                  scene.actions([
                    { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
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
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Okay," you nod. "Go ahead."');
    } else {
      scene.text('"Okay," you manage to grunt out. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (reluctant)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['reluctant_creampie'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"If you really want to I guess," you say somewhat hesitantly.');
    } else {
      scene.text('"If you really want to I guess," you grunt out between thrusts.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (disgust)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['unhappy_creampie'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
        if (((st as any).sex_ev ?? 0)?.['cum_where'] === 1) {
          if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0  &&  ((st as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  ((st as any).sex_ev ?? 0)?.['position'] !== 'anal') {
            if (((st as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
              scene.actions([
                { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).tabletkishot ?? 0) > 0) {
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
              if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
                scene.actions([
                  { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"You can come inside me," you pant. "It\'s a safe day."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
                  scene.actions([
                    { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"You can come inside me," you pant. "It should be safe today."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                } else {
                  if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  ((st as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
                    scene.actions([
                      { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"It\'s a safe day," you say with a deceitful smile. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                      { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can come inside."');
      } else {
        scene.text('"It\'s-! Okay-!" you grunt out between poundings. "You can-! Come inside-!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Do it," you smile. "Fill me up."');
      } else {
        scene.text('"Do it!" you scream. "Fill me up!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
    if ((((st as any).pcs_horny ?? 0) > 90  ||  ((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0))  &&  ((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 0) {
      scene.actions([
        { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
      ]);
    }
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
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
    qspGoto(s, 'sex_ev_cum', 'cum_condom');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      qspCall(s, 'sex_ev_stats', 'creampie_code');
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    qspGoto(s, 'sex_ev_cum', 'miss_creampie');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      qspGoto(s, 'sex_ev_cum', 'doggy_creampie');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        qspGoto(s, 'sex_ev_cum', 'cowgirl_creampie');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          qspGoto(s, 'sex_ev_cum', 'anal_doggy_creampie');
          (s as any).orgasm_or = 'yes';
          qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
          qspCall(s, 'stat', '');
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 2;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = ((s as any).sex_ev['anal_creampie_orgasm_count'] ?? 0) + (1);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
          scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
          // TODO-QSP: dynamic text: <<$npcdesc>> grunts and you feel him come, cock pulsing inside you. The sensatio...
          scene.text(`${((s as any).npcdesc ?? '')} grunts and you feel him come, cock pulsing inside you. The sensation pushes you over the edge, and you groan, tensing as waves of orgasm wash through you. The two of come together, both of your orgasms fueling the other's until eventually they both end.`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (s as any).locArgs = __savedLocArgs; }
          qspCall(s, 'sex_ev_reactions', 'react_menu');
          // TODO-QSP: else !}
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissCreampie(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself into your pussy, grunting. His cock pulses and a sud...
  scene.text(`${((s as any).npcdesc ?? '')} drives himself into your pussy, grunting. His cock pulses and a sudden warmth floods through your insides.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You lay there patiently, letting <<$npcdesc>> empty himself into your womb, wait...
    scene.text(`You lay there patiently, letting ${((st as any).npcdesc ?? '')} empty himself into your womb, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    { label: 'Come together', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(st, 'stat', '');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum pours into you and you gasp as you get sent over the edge an...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum pours into you and you gasp as you get sent over the edge and trigger your own climax. The two of come together, each of your orgasms fueling the other's until eventually they've run their course and both of you lay there panting.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You lay there, trying not to squirm as <<$npcdesc>> orgasm pumps load after load...
    scene.text(`You lay there, trying not to squirm as ${((st as any).npcdesc ?? '')} orgasm pumps load after load into your womb. Despite your disgust, you don't move, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'cum_react');
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
  scene.text(`${((s as any).npcdesc ?? '')} drives himself into your pussy with a grunt. His cock pulses and a sudden warmth floods through your insides.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there patiently, letting <<$npcdesc>> empty himself into your womb, wai...
    scene.text(`You stay there patiently, letting ${((st as any).npcdesc ?? '')} empty himself into your womb, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(st, 'stat', '');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum pours into you and you gasp as you get sent over the edge yo...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum pours into you and you gasp as you get sent over the edge yourself and trigger your own climax. The two of come together, each of your orgasms fueling the other's until eventually they've run their course and both of you collapse.`);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there, trying not to squirm in discomfort, feeling <<$npcdesc>>''s spun...
    scene.text(`You stay there, trying not to squirm in discomfort, feeling ${((st as any).npcdesc ?? '')}'s spunk fill your womb. Despite your disgust, you don't move, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
  ]);
  scene.build();
}

function enterCowgirlCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1) {
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_orgasm_count'] = ((s as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 2;
    scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
    // TODO-QSP: dynamic text: You drop your hips, impaling yourself on <<$npcdesc>>''s cock. He thrusts his hi...
    scene.text(`You drop your hips, impaling yourself on ${((s as any).npcdesc ?? '')}'s cock. He thrusts his hips upward, driving himself deep inside you and you feel cum spurt out inside you. The sensation pushes you over the edge, causing your pussy to clamp down onto his cock even more and your body to spasm uncontrollably. The two of come together, holding each other tight, both of your orgasms fueling the other's. After some time, your orgasm fades, leaving both of you panting.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_reactions', 'react_menu');
    // TODO-QSP: else !}
    scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
    // TODO-QSP: dynamic text: You drop your hips, impaling yourself on <<$npcdesc>>''s cock. He grabs you and ...
    scene.text(`You drop your hips, impaling yourself on ${((s as any).npcdesc ?? '')}'s cock. He grabs you and holds you tight, thrusting humself upward, driving his cock in deep into you as he can manage and groans. His cock stiffens. And then a sudden warmth floods through your insides.`);
  } else {
    scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> grabs you and pulls you down onto his cock. He holds you tight, thr...
    scene.text(`${((s as any).npcdesc ?? '')} grabs you and pulls you down onto his cock. He holds you tight, thrusting humself upward, driving his cock in deep into you as he can manage. As he does, you feel him stiffen up and groan, and his cock pulses inside you.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You ride out his orgasm, gently rock your hips and squeezing <<$npcdesc>>''s coc...
    scene.text(`You ride out his orgasm, gently rock your hips and squeezing ${((st as any).npcdesc ?? '')}'s cock with your pussy as he empties himself into your womb until eventually, you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(st, 'stat', '');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum pours into you and you gasp as you get sent over the edge an...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum pours into you and you gasp as you get sent over the edge and trigger your own climax. Your body convulses as electric shocks of orgasm rock through you and you come together, each of your orgasms fueling the other's until eventually they've run their course and both of you lay there panting.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterAnalDoggyCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  scene.img('images/shared/sex/cum/analcreampie/doggy1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> drives himself into your asshole with a grunt. His cock pulses and ...
  scene.text(`${((s as any).npcdesc ?? '')} drives himself into your asshole with a grunt. His cock pulses and a sudden warmth floods through your intestines.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there patiently, letting <<$npcdesc>> empty himself into your ass, wait...
    scene.text(`You stay there patiently, letting ${((st as any).npcdesc ?? '')} empty himself into your ass, waiting until you no longer feel him twitching between your cheeks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Come with him', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(st, 'stat', '');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = ((st as any).sex_ev['anal_creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cum pours into you and you choke up, every muscle in your body g...
      scene.text(`${((st as any).npcdesc ?? '')}'s cum pours into you and you choke up, every muscle in your body going taut as you get sent over the edge into orgasm yourself. The two of come together, each of your climaxes fueling the other's until eventually they've run their course and both of you collapse.`);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there, trying not to squirm in discomfort at the feeling of <<$npcdesc>...
    scene.text(`You stay there, trying not to squirm in discomfort at the feeling of ${((st as any).npcdesc ?? '')}'s spunk filling your intestines. Despite your disgust, you don't move, waiting until you no longer feel him twitching between your cheeks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
  ]);
  scene.build();
}

function enterCumInsidePullAway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
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
          scene.text(`Carefully, you raise yourself off of ${((s as any).npc_firstname ?? 0)?.[String((s as any).npclastsaved ?? 0)] ?? ''}. The moment his cock is free of your pussy, you feel a thick glob of cum begin to leak out of you.`);
        }
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
    // TODO-QSP: end !}
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
      qspGoto(st, 'sex_ev_cum', 'cum_inside_pull_away_anal');
    } else {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.mp4');
          if (((st as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
            // TODO-QSP: dynamic text: You carefully scooch backwards and <<$npcdesc>>''s cock <i>pops</i> from your pu...
            scene.text(`You carefully scooch backwards and ${((st as any).npcdesc ?? '')}'s cock <i>pops</i> from your pussy. A second later, a stream of milky liquid streams out of your snatch, running down your ass and into the bedsheets.`);
          } else {
            // TODO-QSP: dynamic text: You carefully scooch backwards, allowing <<$npcdesc>> to remove his cock from yo...
            scene.text(`You carefully scooch backwards, allowing ${((st as any).npcdesc ?? '')} to remove his cock from your pussy. It slips from your snatch with a <i>pop</i>, a slurry of cum streaming out after it, running down your ass and into the bedsheets.`);
          }
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
            if (((st as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
              // TODO-QSP: dynamic text: You lean forward, letting and <<$npcdesc>>''s cock <i>pops</i> from your pussy. ...
              scene.text(`You lean forward, letting and ${((st as any).npcdesc ?? '')}'s cock <i>pops</i> from your pussy. A second later, you feel a thick stream of liquid dribble from your snatch and trickle down your thigh.`);
            } else {
              // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>''s cock slip from your snatch and roll on...
              scene.text(`You lean forward, letting ${((st as any).npcdesc ?? '')}'s cock slip from your snatch and roll onto your back breathing hard. As you do, you feel a slurry of liquid stream from your pussy, running down your ass and into the bedsheets.`);
            }
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
              if (((st as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1) {
                // TODO-QSP: dynamic text: You raise your hips a bit and pull back, causing <<$npcdesc>>''s cock to suddenl...
                scene.text(`You raise your hips a bit and pull back, causing ${((st as any).npcdesc ?? '')}'s cock to suddenly flop from your pussy as it slips out. As you look down, you can see a milky white fluid leaking from your snatch.`);
              } else {
                // TODO-QSP: dynamic text: Raising your hips up, you pull yourself off <<$npcdesc>>''s cock. It flops from ...
                scene.text(`Raising your hips up, you pull yourself off ${((st as any).npcdesc ?? '')}'s cock. It flops from your pussy and you feel a thick glob of cum immediately begin to leak from your snatch.`);
              }
            }
          }
        }
        if (((st as any).sex_ev ?? 0)?.['surprise_cum_together'] === 1  &&  ((st as any).sex_ev ?? 0)?.['came_together'] < 3) {
          // TODO-QSP: dynamic text: <<$npcdesc>>''s cum.
          scene.text(`${((st as any).npcdesc ?? '')}'s cum.`);
          qspCall(st, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
        } else {
          qspCall(st, 'sex_ev_sex', 'sex_end');
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/condom1.jpg');
          // TODO-QSP: dynamic text: You spread your legs a little wider as <<$npcdesc>> pulls his hips back, vacatin...
          scene.text(`You spread your legs a little wider as ${((st as any).npcdesc ?? '')} pulls his hips back, vacating his manhood from your pussy. As you look down, you can see a milky white fluid filling the rubber casing around his cock.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/condom1.jpg');
            // TODO-QSP: dynamic text: You lean forward as <<$npcdesc>> pulls his hips back, feeling his manhood slip f...
            scene.text(`You lean forward as ${((st as any).npcdesc ?? '')} pulls his hips back, feeling his manhood slip from your pussy. As you lay down on the bed and look back, you can see a milky white fluid filling the rubber casing around his cock.`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/cum81.jpg');
              // TODO-QSP: dynamic text: You raise your hips a bit and pull back, causing <<$npcdesc>>''s cock to suddenl...
              scene.text(`You raise your hips a bit and pull back, causing ${((st as any).npcdesc ?? '')}'s cock to suddenly flop from your pussy as it slips out. As you look down, you can see a milky white fluid filling the rubber casing around his cock.`);
            }
          }
        }
        // TODO-QSP: dynamic text: <<$npcdesc>>''s cum.
        scene.text(`${((st as any).npcdesc ?? '')}'s cum.`);
        if (((st as any).sex_ev ?? 0)?.['came_together'] === 2) {
          qspCall(st, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
        } else {
          qspCall(st, 'sex_ev_sex', 'sex_end');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumInsidePullAwayAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/analcreampie/doggy_drip1.mp4');
  // TODO-QSP: dynamic text: You lean forward, letting and <<$npcdesc>>''s cock <i>pops</i> from your asshole...
  scene.text(`You lean forward, letting and ${((s as any).npcdesc ?? '')}'s cock <i>pops</i> from your asshole. A second later, you feel a thick stream of liquid dribble from your sphincter and trickle down the lips of your pussy.`);
  if (((s as any).sex_ev ?? 0)?.['came_together'] === 2) {
    qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumTogether(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    qspGoto(s, 'sex_ev_cum', 'anal_cum_together');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 1;
  qspCall(s, 'sex_ev_stats', 'creampie_code');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
      scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
        scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You just nod, unable to say anything and grab hold of him tightly. You can feel ...
          scene.text(`You just nod, unable to say anything and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
        }
      }
    }
  } else {
    if ((((s as any).sex_ev ?? 0)?.['cum_where'] === 1  ||  ((s as any).sex_ev ?? 0)?.['he_ask'] === 0)) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, smiling ...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, smiling warmly into his eyes.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, giving h...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, giving him a warm smile over your shoulder.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, leaning ...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, leaning down to smile warmly into his eyes.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, smiling warmly into his eyes.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, leaning down to smile warmly into his eyes.`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Orgasm', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
          }
        }
      }
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock pulses inside you and something warm spills into your pussy...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock pulses inside you and something warm spills into your pussy. His hot cum filling you up is the last thing you need to get off and suddenly you're right there with him, muscles going taut and quivering uncontrollably as the two of you come together.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterAnalCumTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'anal_creampie';
  qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  if (((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] === 1) {
    // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
    scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
      scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: You just nod, unable to say anything and grab hold of him tightly. You can feel ...
        scene.text(`You just nod, unable to say anything and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
        // TODO-QSP: end !}
        // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
        scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? '')}'s cock swelling inside you, right on the edge of bursting. The tension in your pussy feels the same way. It feels like any moment you might just-`);
      } else {
        if ((((s as any).sex_ev ?? 0)?.['cum_where'] === 1  ||  ((s as any).sex_ev ?? 0)?.['he_ask'] === 0)) {
          // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, smiling ...
          scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, smiling warmly into his eyes.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, giving h...
            scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, giving him a warm smile over your shoulder.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, leaning ...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, leaning down to smile warmly into his eyes.`);
              // TODO-QSP: end !}
              // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together," you say, giving h...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together," you say, giving him a warm smile over your shoulder.`);
            } else {
              // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
              scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, smiling warmly into his eyes.`);
            }
          }
        }
        // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
        scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
      }
    }
  }
  // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
  scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, leaning down to smile warmly into his eyes.`);
  // TODO-QSP: end !}
  // TODO-QSP: dynamic text: "<<$sex_ev[''cum_together_dialogue1'']>>Let''s come together instead," you say, ...
  scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_together_dialogue1'] ?? ''}Let's come together instead," you say, giving him a warm smile over your shoulder.`);
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Orgasm', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = ((st as any).sex_ev['anal_creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock pulses inside you and something warm spills into your intes...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock pulses inside you and something warm spills into your intestines. His hot cum filling you up is the last thing you need to get off and suddenly you're right there with him, quivering uncontrollably, and clenching your ass around him as the two of you come together.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterSurpriseCumTogether(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    qspGoto(s, 'sex_ev_cum', 'anal_surprise_cum_together');
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/3.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      }
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 2;
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_surprise'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['surprise_cum_together'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    qspCall(s, 'sex_ev_stats', 'creampie_code');
    scene.text('As your orgasm finishes winding down, you realize with a start that you feel very... <i><b>full</b></i>...');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside');
  } else {
    // TODO-QSP: dynamic text: As your orgasm finishes winding down, you realize with a start that <<$npcdesc>>...
    scene.text(`As your orgasm finishes winding down, you realize with a start that ${((s as any).npcdesc ?? '')} isn't moving and appears to be breathing very heavily.`);
  }
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
  // TODO-QSP: end
  scene.build();
}

function enterAnalSurpriseCumTogether(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/doggy/1.jpg');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 2;
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_count'] = ((s as any).sex_ev['anal_creampie_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_surprise'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_surprise_cum_together'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'anal_creampie';
    qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
    scene.text('As your orgasm finishes winding down, you realize with a start that your ass feels very... <i><b>full</b></i>...');
    qspCall(s, 'sex_ev_reactions', 'anal_did_you_come_inside');
  } else {
    // TODO-QSP: dynamic text: As your orgasm finishes winding down, you realize with a start that <<$npcdesc>>...
    scene.text(`As your orgasm finishes winding down, you realize with a start that ${((s as any).npcdesc ?? '')} isn't moving and appears to be breathing very heavily.`);
  }
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
  // TODO-QSP: end
  scene.build();
}

function enterCumTogether2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Collapse' }, // TODO-QSP: empty action body
  ]);
  scene.build();
}

function enterCumTogetherFake(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_together_fake'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'anal') {
    qspCall(s, 'sex_ev_stats', 'creampie_code');
  } else {
    qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.text('"Let\'s come together," you say, smiling warmly into his eyes.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
      scene.text('"Let\'s come together," you say, giving him a warm smile over your shoulder.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('"Let\'s come together," you say, smiling warmly into his eyes.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Fake orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'anal') {
            scene.img('images/shared/sex/anal/doggy/orgasm3.mp4');
          }
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['position'] !== 'anal') {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock pulses inside you and something warm spills into your pussy...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock pulses inside you and something warm spills into your pussy and you moan loudly. You clench your pussy as hard as you can and shake your body, pretending that his cum is making you orgasm, keeping up the performance until you no longer feel his cock twitching inside your pussy.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>>''s cock pulses inside you and something warm spills into your ass a...
      scene.text(`${((st as any).npcdesc ?? '')}'s cock pulses inside you and something warm spills into your ass and you moan loudly. You clench your sphincter as hard as you can and shake your body, pretending that his cum is making you orgasm, keeping up the performance until you no longer feel his cock twitching inside your ass.`);
    }
    qspGoto(st, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterCumForce(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_force'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
    qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1, 3);
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      // TODO-QSP: dynamic text: Without warning, you wrap your legs around <<$npcdesc>>''s waist and pull him in...
      scene.text(`Without warning, you wrap your legs around ${((s as any).npcdesc ?? '')}'s waist and pull him in, locking your ankles behind his back and forcing his cock as deep into you as you can.`);
      scene.text('"Oh fu-!"');
      scene.text('The sudden movement breaks his concentration and you feel him pulse within you, coming inside the condom. The sensation sends you over the edge as well and you gasp, holding him tight as simultaneous orgasms rock through both your bodies.');
    } else {
      scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
      // TODO-QSP: dynamic text: With a devilish grin, you suddenly speed up your movements, riding <<$npcdesc>> ...
      scene.text(`With a devilish grin, you suddenly speed up your movements, riding ${((s as any).npcdesc ?? '')} as hard as you can. Seconds later, you feel him come inside the condom, pulsing within you, and it sends you over the edge. The two of come together, holding each other tight, both of your orgasms fueling the other's. After some time, your orgasm fades, leaving both of you panting.`);
    }
    // TODO-QSP: else !}
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      // TODO-QSP: dynamic text: Without warning, you wrap your legs around <<$npcdesc>>''s waist and pull him in...
      scene.text(`Without warning, you wrap your legs around ${((s as any).npcdesc ?? '')}'s waist and pull him in, locking your ankles behind his back and forcing his cock as deep into you as you can.`);
      scene.text('"Oh fu-!"');
      // TODO-QSP: dynamic text: The sudden movement breaks his concentration and you feel him pulse within you, ...
      scene.text(`The sudden movement breaks his concentration and you feel him pulse within you, coming inside the condom. The sensation sends only makes you wrap your legs around ${((s as any).npcdesc ?? '')} tighter, leaving no room for him to do anything but continue his orgasm inside you.`);
    } else {
      scene.img('images/shared/sex/vag/cowgirl/condom1.mp4');
      // TODO-QSP: dynamic text: With a devilish grin, you suddenly speed up your movements and seconds later, yo...
      scene.text(`With a devilish grin, you suddenly speed up your movements and seconds later, you feel ${((s as any).npcdesc ?? '')} come inside the condom, pulsing within you. You don't slow down for even a second, continuing to ride him as hard as you can until you're sure he's completely finished his orgasm. Only then do you slow down and come to a halt on top of him.`);
      // TODO-QSP: dynamic text: Judging by <<$npcdesc>>''s expression, you just rocked his world.
      scene.text(`Judging by ${((s as any).npcdesc ?? '')}'s expression, you just rocked his world.`);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumForce2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'sex_ev_stats', 'creampie_code');
    (s as any).orgasm_or = 'yes';
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((s as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_orgasm'] = 1;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      // TODO-QSP: dynamic text: Without warning, you wrap your legs around <<$npcdesc>>''s waist and pull him in...
      scene.text(`Without warning, you wrap your legs around ${((s as any).npcdesc ?? '')}'s waist and pull him in, locking your ankles behind his back and forcing his cock as deep into you as you can.`);
      scene.text('"Oh fu-!"');
      scene.text('The sudden movement breaks his concentration and you feel a pulse within you and a burst of warmth spread through your hips. The sensation sends you over the edge as well and you gasp, holding him tight as you shudder and he empties his balls into you in simultaneous orgasm.');
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/cowgirl2.mp4');
      // TODO-QSP: dynamic text: With a devilish grin, you suddenly speed up your movements, riding <<$npcdesc>> ...
      scene.text(`With a devilish grin, you suddenly speed up your movements, riding ${((s as any).npcdesc ?? '')} as hard as you can. Seconds later, you feel him pulse within you and warmth explodes through your hips. It sends you over the edge but you don't stop for a second, continuing to plunge yourself up and down even as you shudder in climax together.`);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumForce2(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: else !}
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      // TODO-QSP: dynamic text: Without warning, you wrap your legs around <<$npcdesc>>''s waist and pull him in...
      scene.text(`Without warning, you wrap your legs around ${((s as any).npcdesc ?? '')}'s waist and pull him in, crossing your ankles behind his back and forcing his cock deep inside you.`);
      scene.text('"Oh fu-!"');
      scene.text('The sudden movement breaks his concentration and you feel a pulse within you and a burst of warmth spread through your hips.');
      scene.actions([
        { label: 'Lock your legs', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Without hesitation, you lock your legs behind <<$npcdesc>> and pull him even tig...
    scene.text(`Without hesitation, you lock your legs behind ${((st as any).npcdesc ?? '')} and pull him even tighter, giving him no choice but to empty his balls into you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumForce2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/cowgirl2.mp4');
      // TODO-QSP: dynamic text: With a devilish grin, you suddenly speed up your movements and seconds later, yo...
      scene.text(`With a devilish grin, you suddenly speed up your movements and seconds later, you feel ${((s as any).npcdesc ?? '')} pulse inside you.`);
      scene.actions([
        { label: 'Milk him dry', handler: (st: GameState) => {
    scene.text('You don\'t even slow down for a second, continuing to ride him as hard as you can until you\'re sure he\'s completely finished with his orgasm. Only then do you slow down and come to a halt on top of him.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumForce2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Creampie induced orgasm', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      (st as any).orgasm_or = 'yes';
      qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(st, 'stat', '');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm'] = 1;
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        // TODO-QSP: dynamic text: It sends you over the edge too and suddenly you''re coming with <<$npcdesc>>, ev...
        scene.text(`It sends you over the edge too and suddenly you're coming with ${((st as any).npcdesc ?? '')}, every orgasmic shudder causing your legs to ratchet tighter around him until you're clutching him in a death grip of simultaneous climax.`);
      } else {
        scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        // TODO-QSP: dynamic text: With a devilish grin, you suddenly speed up your movements and seconds later, yo...
        scene.text(`With a devilish grin, you suddenly speed up your movements and seconds later, you feel ${((st as any).npcdesc ?? '')} pulse inside you.`);
        // TODO-QSP: dynamic text: Heat floods through your hips as <<$npcdesc>> comes inside you, making you come ...
        scene.text(`Heat floods through your hips as ${((st as any).npcdesc ?? '')} comes inside you, making you come as well but you don't even slow down for a second, desperately pounding your shuddering pussy with his cock until you're past the brink of insanity and your climax finally ends. Only then do you slow down, as your muscles are on the verge of giving out.`);
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumForce2(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumForce2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((st as any).sex_ev ?? 0)?.['no_condom'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/condom1.jpg');
        if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: Your orgasms finally fade and you give a tired smile as you unlock your legs fro...
          scene.text(`Your orgasms finally fade and you give a tired smile as you unlock your legs from behind his back, allowing ${((st as any).npcdesc ?? '')} to pull out. As his cock pops free of your pussy, you see that the rubber encasing it is filled with a thick white liquid.`);
        } else {
          // TODO-QSP: dynamic text: When his orgasm finally ends, you unlock your legs from behind his back, unable ...
          scene.text(`When his orgasm finally ends, you unlock your legs from behind his back, unable to keep from grinning as ${((st as any).npcdesc ?? '')} pulls out. As his cock pops free of your pussy, you see that the rubber encasing it is filled with a thick white liquid.`);
        }
      } else {
        scene.img('images/shared/sex/cum/cum81.jpg');
        if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: With a tired smile, you carefully pull yourself off of <<$npcdesc>>, removing hi...
          scene.text(`With a tired smile, you carefully pull yourself off of ${((st as any).npcdesc ?? '')}, removing his dick from your pussy. As it slides out, you see that the rubber encasing it is filled with a thick white liquid. Seeing as he still seems quite exhausted by what you put him through, you take the liberty of pulling it off, coming free with a wet slapping sound, and tossing it aside.`);
        } else {
          // TODO-QSP: dynamic text: You can''t help but grin at his state and carefully pull yourself off of <<$npcd...
          scene.text(`You can't help but grin at his state and carefully pull yourself off of ${((st as any).npcdesc ?? '')}, removing his dick from your pussy. As it slides out, you see that the rubber encasing it is filled with a thick white liquid. Seeing as he still seems quite exhausted by what you put him through, you take the liberty of pulling it off, coming free with a wet slapping sound, and tossing it aside.`);
        }
      }
      qspCall(st, 'sex_ev_sex', 'sex_end');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/3.jpg');
        if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: Finally, your orgasms end and your legs fall aside limply, releasing <<$npcdesc>...
          scene.text(`Finally, your orgasms end and your legs fall aside limply, releasing ${((st as any).npcdesc ?? '')} from your grip. You stare up into his eyes as you pant hard, both of you catching your breath after such tremendous orgasms.`);
        } else {
          // TODO-QSP: dynamic text: When it seems <<$npcdesc>>''s orgasm is finished, only then do you unlock your l...
          scene.text(`When it seems ${((st as any).npcdesc ?? '')}'s orgasm is finished, only then do you unlock your legs and allow him to pull free. He pants breathlessly as he recovers from what you did to him.`);
        }
      } else {
        scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
        if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: Finally, your orgasm fades and <<$npcdesc>>''s seems to have finished as well. S...
          scene.text(`Finally, your orgasm fades and ${((st as any).npcdesc ?? '')}'s seems to have finished as well. Still wearing your grin, you drive your hips down as far as they can go one last time and clench your pussy before drawing yourself back up, trying to milk his cock for every last drop. His cum overflows from your snatch, unable to be contained by the imperfect plug of his cock, and you can somehow even feel it dribbling down the length of his shaft.`);
        } else {
          scene.text('Still wearing your grin, you drive your hips down as far as they can go one last time and clench your pussy before drawing yourself back up, trying to milk his cock for every last drop. His cum overflows from your snatch, unable to be contained by the imperfect plug of his cock, and you can somehow even feel it dribbling down the length of his shaft.');
          // TODO-QSP: dynamic text: Judging by <<$npcdesc>>''s expression, you just rocked his world.
          scene.text(`Judging by ${((st as any).npcdesc ?? '')}'s expression, you just rocked his world.`);
        }
      }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    }
  } },
  ]);
  scene.build();
}

function enterCumPullout(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) === 10  &&  ((s as any).sex_ev ?? 0)?.['extra_caution'] === 0) {
    qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'pullout';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pullout_count'] = ((s as any).sex_ev['pullout_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_stomach'] = ((s as any).sex_ev['cum_stomach'] ?? 0) + (1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_stomach'] = ((s as any).sex_ev['cum_stomach'] ?? 0) + (1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
      qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
      scene.img(`images/shared/sex/cum/stomach/bellycum${(Math.floor(Math.random() * 2) + 3)}.mp4`);
      // TODO-QSP: '"Pull out!" ' + iif(sex_ev['speed'] < 3, 'you cry.', 'you scream.')
      // TODO-QSP: dynamic text: <<$npcdesc>> spreads your legs and yanks his cock from your pussy. After only a ...
      scene.text(`${((s as any).npcdesc ?? '')} spreads your legs and yanks his cock from your pussy. After only a couple seconds of jacking himself off, cum erupts from the tip, spattering thick white droplets across your belly and chest.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_back'] = ((s as any).sex_ev['cum_back'] ?? 0) + (1);
        qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
        qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking back at the white liquid glazing your ass';
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
        // TODO-QSP: '"Pull out!" ' + iif(sex_ev['speed'] < 3, 'you cry.', 'you scream.')
        // TODO-QSP: dynamic text: Not even a second passes between feeling <<$npcdesc>>''s cock slip from your sna...
        scene.text(`Not even a second passes between feeling ${((s as any).npcdesc ?? '')}'s cock slip from your snatch and when hot liquid spatters across your back and dribbles onto your ass.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking back at the white liquid glazing your ass';
          qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_ass'] = ((s as any).sex_ev['cum_ass'] ?? 0) + (1);
          scene.img('images/shared/sex/cum/cum4.jpg');
          // TODO-QSP: '"Pull out!" ' + iif(sex_ev['speed'] < 3, 'you cry.', 'you scream.')
          scene.text('You slip off his cock just in time, as not even a second later you feel hot liquid spatter all over your ass.');
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0), 1);
      qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_stomach'] = ((s as any).sex_ev['cum_stomach'] ?? 0) + (1);
      scene.img(`images/shared/sex/cum/stomach/bellycum${(Math.floor(Math.random() * 2) + 3)}.mp4`);
      if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
        scene.text('"Not inside me!" you yelp frantically.');
        if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls himself out of your pussy and tears off the condom, furiously...
          scene.text(`${((s as any).npcdesc ?? '')} pulls himself out of your pussy and tears off the condom, furiously jacking off over you. Moments later, he ejaculates, sending cum flying all over your body, spattering across your belly and chest.`);
        } else {
          // TODO-QSP: dynamic text: "Oh fuck!" <<$npcdesc>> barely follows your instructions in time. No sooner does...
          scene.text(`"Oh fuck!" ${((s as any).npcdesc ?? '')} barely follows your instructions in time. No sooner does his cock slip from your pussy than cum bursts from its tip, spattering all across your stomach and chest.`);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
          // TODO-QSP: dynamic text: <<$npcdesc>> pulls himself out of your pussy and tears off the condom, furiously...
          scene.text(`${((s as any).npcdesc ?? '')} pulls himself out of your pussy and tears off the condom, furiously jacking off over you. Moments later, he ejaculates, sending cum flying all over your body, spattering across your belly and chest.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> spreads your legs and yanks his cock from your pussy. After only a ...
          scene.text(`${((s as any).npcdesc ?? '')} spreads your legs and yanks his cock from your pussy. After only a couple seconds of jacking himself off, cum erupts from the tip, spattering thick white droplets across your belly and chest.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
        qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_back'] = ((s as any).sex_ev['cum_back'] ?? 0) + (1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_ass'] = ((s as any).sex_ev['cum_ass'] ?? 0) + (1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking back at the white liquid glazing your ass';
        scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
        if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
          scene.text('"Not inside me!" you yelp frantically.');
          if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> yanks himself from your pussy and you hear a <i>snap</i> as he rips...
            scene.text(`${((s as any).npcdesc ?? '')} yanks himself from your pussy and you hear a <i>snap</i> as he rips the condom off of his cock and moments later, you feel hot liquid spatter all over ass and across your back.`);
          } else {
            // TODO-QSP: dynamic text: "Oh fuck!" Not even a second passes between feeling <<$npcdesc>>''s cock vacate ...
            scene.text(`"Oh fuck!" Not even a second passes between feeling ${((s as any).npcdesc ?? '')}'s cock vacate your pussy and when hot liquid spatters across your back and dribbles onto your ass.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> yanks himself from your pussy and you hear the condom <i>snap</i> a...
            scene.text(`${((s as any).npcdesc ?? '')} yanks himself from your pussy and you hear the condom <i>snap</i> as he rips it off his cock. Moments later, you feel hot liquid spatter all over ass and across your back.`);
          } else {
            // TODO-QSP: dynamic text: "Oh fuck!" <<$npcdesc>> suddenly cries out. His cock slips from your snatch and ...
            scene.text(`"Oh fuck!" ${((s as any).npcdesc ?? '')} suddenly cries out. His cock slips from your snatch and not even a moment later do you feel hot liquid spattering across your back and dribbling onto your ass.`);
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1  ||  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
            qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
            qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_stomach'] = ((s as any).sex_ev['cum_stomach'] ?? 0) + (1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
            scene.img('images/shared/sex/cum/pullout_cowgirl1.mp4');
            if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
              scene.text('"Not inside me!" you yelp frantically.');
            }
            if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
              // TODO-QSP: dynamic text: <<$npcdesc>> slips out from inside you and you hear the condom <i>snap</i> as he...
              scene.text(`${((s as any).npcdesc ?? '')} slips out from inside you and you hear the condom <i>snap</i> as he rips it off his cock. Barely even a second later, something hot and wet spatters across your back and all over your ass.`);
            } else {
              // TODO-QSP: dynamic text: "Oh fuck!" <<$npcdesc>> suddenly cries out. He barely slips out of you in time a...
              scene.text(`"Oh fuck!" ${((s as any).npcdesc ?? '')} suddenly cries out. He barely slips out of you in time and within a split second you feel his cum spatter across your ass and back.`);
            }
          } else {
            qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
            qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_back'] = ((s as any).sex_ev['cum_back'] ?? 0) + (1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_ass'] = ((s as any).sex_ev['cum_ass'] ?? 0) + (1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
            scene.img('images/shared/sex/cum/cum4.jpg');
            // TODO-QSP: dynamic text: "Oh fuck!" <<$npcdesc>> grunts, his cock slipping from your pussy and sliding up...
            scene.text(`"Oh fuck!" ${((s as any).npcdesc ?? '')} grunts, his cock slipping from your pussy and sliding up between your ass cheeks. You reach around to put it back in when you feel something hot and wet spattering across your ass and back.`);
          }
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
            qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0), 1);
            qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0), 1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_back'] = ((s as any).sex_ev['cum_back'] ?? 0) + (1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_ass'] = ((s as any).sex_ev['cum_ass'] ?? 0) + (1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking back at the white liquid glazing your ass';
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
            // TODO-QSP: dynamic text: "Oh fuck!" <<$npcdesc>> suddenly cries out. He yanks his cock from your asshole ...
            scene.text(`"Oh fuck!" ${((s as any).npcdesc ?? '')} suddenly cries out. He yanks his cock from your asshole and not even a moment later do you feel hot liquid spattering across your back and between your cheeks.`);
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieSurprise(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'miss'  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'doggy'  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
    qspGoto(s, 'sex_ev_cum', 'anal_creampie_surprise');
  }
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
    qspGoto(s, 'sex_ev_cum', 'cum_condom');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_surprise'] = 1;
  qspCall(s, 'sex_ev_stats', 'creampie_code');
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie_count'] = ((s as any).sex_ev['accidental_creampie_count'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
      scene.text('"Not insi-!"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
        scene.text('"Pull ou-!"');
      }
    }
    // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> grabs you tight and plunges his full length into you. His...
    scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} grabs you tight and plunges his full length into you. His cock becomes even more rigid, pulsing like a second heartbeat in your cunt. And then, warmth floods your pussy.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/vagcreampie/doggy3.mp4');
      if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
        scene.text('"Not insi-!"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
          scene.text('"Pull ou-!"');
        }
      }
      // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> drives his cock into you. His cock becomes even more rigi...
      scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} drives his cock into you. His cock becomes even more rigid, pulsing like a second heartbeat in your cunt. And then, warmth floods your pussy.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
        if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
          scene.text('"Not insi-!"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
            scene.text('"Pull ou-!"');
          }
        }
        // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> grabs you tight, pulling you down against his chest and t...
        scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} grabs you tight, pulling you down against his chest and thrusting himself deep into you. His cock becomes even more rigid, pulsing like a second heartbeat in your cunt. And then, warmth floods your pussy.`);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieSurprise2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieSurprise2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions_creampie', 'take_in_stride1');
  if (((s as any).orgasm ?? 0) === ((s as any).sex_ev ?? 0)?.['orgasm']) {
    scene.actions([
      { label: 'Creampie induced orgasm', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm_count'] = ((st as any).sex_ev['creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      (st as any).orgasm_or = 'yes';
      // TODO-QSP: gs 'arousal', 'vaginal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(st, 'stat', '');
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
          }
        }
      }
      scene.text('The sensation of cum filling your pussy is too much for you to handle and sends you over the edge.');
      if (((st as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((st as any).sex_ev ?? 0)?.['magik'] < ((st as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: Right as your orgasm hits, you feel magic flood your system, ramping your senses...
        scene.text(`Right as your orgasm hits, you feel magic flood your system, ramping your senses into overdrive. You can feel every hair on your body, every bead of sweat on your skin, every single vein and contour of ${((st as any).npcdesc ?? '')}'s cock inside you. Somehow you can even feel each individual of the hundreds of millions of sperm pouring into your uterus. Energy courses from its origin in your womb to the tips of your nipples.`);
        // TODO-QSP: dynamic text: That same energy splashes off of <<$npcdesc>> and back onto you, forcing you to ...
        scene.text(`That same energy splashes off of ${((st as any).npcdesc ?? '')} and back onto you, forcing you to share in his experiences. You can <i>feel</i> his orgasm pouring into you, <i>his</i> pleasure erupting from his manhood, as if it were <i>you</i> ejaculating into your own orgasming pussy. Caught in a feedback loop between your orgasm and his, your entire body locks up, screaming a silent open-mouthed scream of ecstasy, unable to do anything but shudder uncontrollably around the cock pulsing inside you.`);
      } else {
        scene.text('Orgasmic tremors quake through your body, covering your skin in goosebumps and you moan incoherently. You tremble, unable to do anything except quiver around the pulsing cock inside you.');
      }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise_cum_together'] },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise_cum_together'] },
      ]);
    }
  } },
      { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_together_fake'] = 1;
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        }
      }
    }
    // TODO-QSP: dynamic text: As <<$npcdesc>> unloads inside you, sending cum and warmth through your pussy.
    scene.text(`As ${((st as any).npcdesc ?? '')} unloads inside you, sending cum and warmth through your pussy.`);
    scene.text('You clench your muscles and quiver, putting on your best O-face and moan loudly, pretending that you\'re coming together with him.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise_cum_together'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.actions([
        { label: 'Come with him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: As <<$npcdesc>> comes inside you, you come too. Cum and warmth floods through yo...
    scene.text(`As ${((st as any).npcdesc ?? '')} comes inside you, you come too. Cum and warmth floods through your pussy, driving you over the edge.`);
    if (((st as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((st as any).sex_ev ?? 0)?.['magik'] < ((st as any).pcs_magik ?? 0)) {
      // TODO-QSP: dynamic text: Magic floods your system, ramping your senses into overdrive. Energy courses fro...
      scene.text(`Magic floods your system, ramping your senses into overdrive. Energy courses from its origin in your womb to the tips of your nipples. You can feel every hair on your body, every bead of sweat on your skin, every single vein and contour of ${((st as any).npcdesc ?? '')}'s cock inside you. Somehow you can even feel each individual of the hundreds of millions of sperm pouring into your uterus.`);
      // TODO-QSP: dynamic text: That same energy splashes off of <<$npcdesc>> and back onto you, forcing you to ...
      scene.text(`That same energy splashes off of ${((st as any).npcdesc ?? '')} and back onto you, forcing you to share in his experiences. You can <i>feel</i> his orgasm pouring into you, <i>his</i> pleasure erupting from his manhood, as if it were <i>you</i> ejaculating into your own orgasming pussy. Caught in a feedback loop between your orgasm and his, your entire body locks up, screaming a silent open-mouthed scream of ecstasy, unable to do anything but shudder uncontrollably around the cock pulsing inside you.`);
    } else {
      scene.text('Orgasmic tremors quake through your body, covering your skin in goosebumps and you moan incoherently. You tremble, unable to do anything except quiver around the cock inside you.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise_cum_together'] },
    ]);
  } },
      ]);
    }
  }
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_pc_startled');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_wtf_instant');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_accident_oh_shit');
  qspCall(s, 'sex_ev_reactions_creampie', 'idk_you_panic_instant');
  // TODO-QSP: end
  scene.build();
}

function enterCreampieSurpriseCumTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/2.jpg');
    // TODO-QSP: dynamic text: You lay there, breathing heavily with <<$npcdesc>> on top of you.
    scene.text(`You lay there, breathing heavily with ${((s as any).npcdesc ?? '')} on top of you.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      // TODO-QSP: dynamic text: You let your knees give out underneath you, falling down to the bed with <<$npcd...
      scene.text(`You let your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc ?? '')} on top of you. Breathing heavily, you look over your shoulder at him.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/1.jpg');
        // TODO-QSP: dynamic text: You let yourself collapse on top of <<$npcdesc>>, breathing heavily, feeling you...
        scene.text(`You let yourself collapse on top of ${((s as any).npcdesc ?? '')}, breathing heavily, feeling your breasts pressed against his chest rising and falling with the same strain as your own.`);
      }
    }
  }
  if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('He stares into your eyes, smiling.');
  } else {
    if ((((s as any).sex_ev ?? 0)?.['came_together'] === 2  ||  ((s as any).sex_ev ?? 0)?.['hypno_came_together'] === 1)  &&  ((s as any).sex_ev ?? 0)?.['not_inside'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['did_we_cum_together'] = 1;
      scene.text('"Did... did we... did you...?" he pants.');
    }
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== 'enjoy'  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] > 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] > 0) {
      scene.text('<i>At least creampies always feel good...</i> you think with hazy satisfaction.');
    } else {
      scene.text('<i>At least <b>that</b> felt good...</i> you think with hazy satisfaction.');
    }
  }
  qspCall(s, 'sex_ev_reactions', 'react_menu');
  if ((((s as any).sex_ev ?? 0)?.['orgasm_count'] >= 5  ||  ((s as any).pcs_sleep ?? 0) < 20)  &&  (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 4)) {
    scene.actions([
      { label: 'Collapse', goto: ['sex_ev_after', 'black_out'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWhatNow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['accidental_creampie'] === 2  ||  (((s as any).sex_ev ?? 0)?.['last_cum'] !== 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['last_cum'] !== 'broken_condom')  ||  ((s as any).sex_ev ?? 0)?.['he_ask_creampie_yes'] > 0  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } else {
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'safe'  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] < 1) {
      scene.text('"We should, uhm, probably stop now," he mumbles awkwardly, looking worried.');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('You nod in somber agreement.');
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
        { label: 'Wanted to keep going', handler: (st: GameState) => {
    scene.text('"Aww, seriously?" you complain. "I wanted to keep going! I\'m not satisfied yet."');
    // TODO-QSP: dynamic text: <<$npcdesc>>''s brow furrows as he shakes his head.
    scene.text(`${((st as any).npcdesc ?? '')}'s brow furrows as he shakes his head.`);
    scene.text('"Sorry, the thought of you getting pregnant with my kid is too distracting."');
    scene.text('You let out a long and disappointed sigh.');
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
      ]);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 1;
          // TODO-QSP: dynamic text: "We should probably stop anyways," <<$npcdesc>> shrugs. "I think I''m pretty muc...
          scene.text(`"We should probably stop anyways," ${((s as any).npcdesc ?? '')} shrugs. "I think I'm pretty much all tapped out."`);
        } else {
          // TODO-QSP: dynamic text: "So..." <<$npcdesc>> says. "We gonna go again or...?"
          scene.text(`"So..." ${((s as any).npcdesc ?? '')} says. "We gonna go again or...?"`);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['more_creampies_dialogue'] = 'Yeah. You need to pump more cum into me,';
        }
      } else {
        if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 1;
          // TODO-QSP: '"Uhh... I think that was my last shot..." <<$npcdesc>> says awkwardly. ' + iif(sex_ev['cock_inserte...
        } else {
          // TODO-QSP: dynamic text: "Uhh..." <<$npcdesc>> says awkwardly. "So... what now?"
          scene.text(`"Uhh..." ${((s as any).npcdesc ?? '')} says awkwardly. "So... what now?"`);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['more_creampies_dialogue'] = 'Pump me full of more cum, obviously!';
        }
      }
      if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
        if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_condoms'] !== 1) {
          scene.actions([
            { label: 'Keep going (no condoms)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/misc/wait.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((st as any).daystage ?? 0) >= 3) {
      scene.text('"I guess there\'s no point in using any more condoms tonight," you grin wickedly.');
    } else {
      scene.text('"I guess there\'s no point in using any more condoms today," you grin wickedly.');
    }
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      // TODO-QSP: dynamic text: "No reason to increase the risk either," <<$npcdesc>> frowns and keeps more cond...
      scene.text(`"No reason to increase the risk either," ${((st as any).npcdesc ?? '')} frowns and keeps more condoms within arm's reach.`);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you and his cock immediately starts to stiffen again,...
      scene.text(`${((st as any).npcdesc ?? '')} grins back at you and his cock immediately starts to stiffen again, apparently getting hard just at the thought of fucking you bareback.`);
    }
    qspCall(st, 'sex_ev_sex', 'reset');
    qspCall(st, 'sex_ev_sex', 'sex_menu');
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
            scene.actions([
              { label: 'Keep going (free creampies)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.img('images/shared/sex/misc/wait.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/smile1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    }
    if (((st as any).daystage ?? 0) >= 3) {
      if (((st as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
        scene.text('"Well if I\'m already going to take a pill tomorrow, I guess there\'s no point in telling you not to come inside me tonight," you say. "Come wherever you want."');
      } else {
        scene.text('"Well I\'m already full of cum so I guess there\'s no point in telling you not to come inside me tonight," you say. "Come wherever you want."');
      }
    } else {
      scene.text('"Well I\'m already full of cum so I guess there\'s no point in telling you not to come inside me today," you say. "Come wherever you want."');
    }
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      // TODO-QSP: dynamic text: "No reason to increase the risk either," <<$npcdesc>> frowns. "I''m going to try...
      scene.text(`"No reason to increase the risk either," ${((st as any).npcdesc ?? '')} frowns. "I'm going to try to keep pulling out anyways."`);
      scene.text('"Boo," you moan. "You\'re no fun."');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
      // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you seeming to be excited he has permission.
      scene.text(`${((st as any).npcdesc ?? '')} grins back at you seeming to be excited he has permission.`);
    }
    qspCall(st, 'sex_ev_sex', 'reset');
    qspCall(st, 'sex_ev_sex', 'sex_menu');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/wait.mp4');
    scene.text('"Let\'s just keep going," you say. "I\'m not satisfied yet anyways."');
    scene.text('"Great! Gimme a minute to get hard again," he says, working his cock, concentrating hard to stiffen up again.');
    qspCall(st, 'sex_ev_sex', 'reset');
    qspCall(st, 'sex_ev_sex', 'sex_menu');
  } },
          { label: 'More creampies!', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      }
    } else {
      scene.img('images/shared/sex/misc/wait.mp4');
    }
    // TODO-QSP: dynamic text: "<<$sex_ev[''more_creampies_dialogue'']>>" you grin back at <<$npcdesc>>. "Might...
    scene.text(`"${((st as any).sex_ev ?? 0)?.['more_creampies_dialogue'] ?? ''}" you grin back at ${((st as any).npcdesc ?? '')}. "Might as well make the most of the situation."`);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    qspCall(st, 'sex_ev_sex', 'reset');
    qspCall(st, 'sex_ev_sex', 'sex_menu');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['accidental_creampie'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie'] = 2;
      }
      scene.actions([
        { label: 'Let\'s stop', handler: (st: GameState) => {
    scene.text('"Probably best if we stop here," you say.');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]/3) {
      // TODO-QSP: dynamic text: <<$npcdesc>> sighs in disappointment.
      scene.text(`${((st as any).npcdesc ?? '')} sighs in disappointment.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> nods in somber agreement.
      scene.text(`${((st as any).npcdesc ?? '')} nods in somber agreement.`);
    }
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalCreampieSurprise(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_creampie_surprise'] = 1;
  qspCall(s, 'sex_ev_stats', 'anal_creampie_code');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'anal_creampie';
  if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] < 1  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie_count'] = ((s as any).sex_ev['accidental_creampie_count'] ?? 0) + (1);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    scene.img('images/shared/sex/cum/analcreampie/doggy1.mp4');
    if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
      scene.text('"Not insi-!"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
        scene.text('"Pull ou-!"');
      }
    }
    // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> drives his cock into you. His cock becomes even more rigi...
    scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} drives his cock into you. His cock becomes even more rigid, pulsing like a second heartbeat between your ass cheeks. And then, warmth floods your intestines.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
        scene.text('"Not insi-!"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
          scene.text('"Pull ou-!"');
        }
      }
      // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> grabs you tight and plunges his full length into you. His...
      scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} grabs you tight and plunges his full length into you. His cock becomes even more rigid, pulsing like a second heartbeat between your ass cheeks. And then, warmth floods your intestines.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy3.mp4');
        if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
          scene.text('"Not insi-!"');
        } else {
          if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
            scene.text('"Pull ou-!"');
          }
        }
        // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> drives his cock into you. His cock becomes even more rigi...
        scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} drives his cock into you. His cock becomes even more rigid, pulsing like a second heartbeat between your ass cheeks. And then, warmth floods your intestines.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
          if (((s as any).sex_ev ?? 0)?.['not_inside'] === 1) {
            scene.text('"Not insi-!"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['pullout_ask'] === 1) {
              scene.text('"Pull ou-!"');
            }
          }
          // TODO-QSP: dynamic text: Suddenly, <<$npcdesc>> grabs you tight, pulling you down against his chest and t...
          scene.text(`Suddenly, ${((s as any).npcdesc ?? '')} grabs you tight, pulling you down against his chest and thrusting himself deep into you. His cock becomes even more rigid, pulsing like a second heartbeat between your ass cheeks. And then, warmth floods your intestines.`);
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalCreampieSurprise2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAnalCreampieSurprise2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orgasm ?? 0) === ((s as any).sex_ev ?? 0)?.['orgasm']) {
    scene.actions([
      { label: 'Creampie induced orgasm', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((st as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_creampie_orgasm_count'] = ((st as any).sex_ev['anal_creampie_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_orgasm'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 2;
      (st as any).orgasm_or = 'yes';
      // TODO-QSP: gs 'arousal', 'anal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
      qspCall(st, 'stat', '');
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      scene.text('The sensation of cum filling your ass is too much for you to handle and sends you over the edge.');
      if (((st as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((st as any).sex_ev ?? 0)?.['magik'] < ((st as any).pcs_magik ?? 0)) {
        // TODO-QSP: dynamic text: Right as your orgasm hits, you feel magic flood your system, ramping your senses...
        scene.text(`Right as your orgasm hits, you feel magic flood your system, ramping your senses into overdrive. You can feel every hair on your body, every bead of sweat on your skin, every single vein and contour of ${((st as any).npcdesc ?? '')}'s cock inside you. Somehow you can even feel each individual of the hundreds of millions of sperm pouring into your large intestine. Energy courses from its origin deep inside your ass to the tips of your nipples.`);
        // TODO-QSP: dynamic text: That same energy splashes off of <<$npcdesc>> and back onto you, forcing you to ...
        scene.text(`That same energy splashes off of ${((st as any).npcdesc ?? '')} and back onto you, forcing you to share in his experiences. You can <i>feel</i> his orgasm pouring into you, <i>his</i> pleasure erupting from his manhood, as if it were <i>you</i> ejaculating into your own spasming sphincter. Caught in a feedback loop between your orgasm and his, your entire body locks up, screaming a silent open-mouthed scream of ecstasy, unable to do anything but shudder uncontrollably around the cock pulsing inside you.`);
      } else {
        scene.text('Orgasmic tremors quake through your body, covering your skin in goosebumps and you moan incoherently. You tremble, unable to do anything except quiver around the pulsing cock inside you.');
      }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise_cum_together'] },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypnoCreampieOrgasmFail(s, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise_cum_together'] },
      ]);
    }
  } },
      { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_together_fake'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
    // TODO-QSP: dynamic text: As <<$npcdesc>> unloads inside you, sending cum and warmth into your large intes...
    scene.text(`As ${((st as any).npcdesc ?? '')} unloads inside you, sending cum and warmth into your large intestine.`);
    scene.text('You clench your sphincter and quiver, putting on your best O-face and moan loudly, pretending that you\'re coming together with him.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise_cum_together'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
      scene.actions([
        { label: 'Come with him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: As <<$npcdesc>> comes inside you, you come too. Cum and warmth floods into your ...
    scene.text(`As ${((st as any).npcdesc ?? '')} comes inside you, you come too. Cum and warmth floods into your asshole and drives you over the edge.`);
    if (((st as any).start_type ?? 0)?.['magic'] !== 'nomagic'  &&  ((st as any).sex_ev ?? 0)?.['magik'] < ((st as any).pcs_magik ?? 0)) {
      // TODO-QSP: dynamic text: Magic floods your system, ramping your senses into overdrive. Energy courses fro...
      scene.text(`Magic floods your system, ramping your senses into overdrive. Energy courses from its origin in your womb to the tips of your nipples. You can feel every hair on your body, every bead of sweat on your skin, every single vein and contour of ${((st as any).npcdesc ?? '')}'s cock inside you. Somehow you can even feel each individual of the hundreds of millions of sperm pouring into your large intestine.`);
      // TODO-QSP: dynamic text: That same energy splashes off of <<$npcdesc>> and back onto you, forcing you to ...
      scene.text(`That same energy splashes off of ${((st as any).npcdesc ?? '')} and back onto you, forcing you to share in his experiences. You can <i>feel</i> his orgasm pouring into you, <i>his</i> pleasure erupting from his manhood, as if it were <i>you</i> ejaculating into your own spasming asshole. Caught in a feedback loop between your orgasm and his, your entire body locks up, screaming a silent open-mouthed scream of ecstasy, unable to do anything but shudder uncontrollably around the cock pulsing inside you.`);
    } else {
      scene.text('Orgasmic tremors quake through your body, covering your skin in goosebumps and you moan incoherently. You tremble, unable to do anything except quiver around the cock inside you.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'anal_creampie_surprise_cum_together'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there patiently, letting <<$npcdesc>> empty himself into your ass, wait...
    scene.text(`You stay there patiently, letting ${((st as any).npcdesc ?? '')} empty himself into your ass, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
    { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You stay there, trying not to squirm in discomfort, feeling <<$npcdesc>>''s spun...
    scene.text(`You stay there, trying not to squirm in discomfort, feeling ${((st as any).npcdesc ?? '')}'s spunk fill your ass. Despite your disgust, you don't move, waiting until you no longer feel him twitching inside you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_reactions', 'react_menu');
  } },
  ]);
  scene.build();
}

function enterAnalCreampieSurpriseCumTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['react'] = 1;
  scene.img('images/shared/sex/vag/doggy/1.jpg');
  // TODO-QSP: dynamic text: You let your knees give out underneath you, falling down to the bed with <<$npcd...
  scene.text(`You let your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc ?? '')} on top of you. Breathing heavily, you look over your shoulder at him.`);
  if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('He stares into your eyes, smiling.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['came_together'] === 2  ||  ((s as any).sex_ev ?? 0)?.['hypno_came_together'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['did_we_cum_together'] = 1;
      scene.text('"Did... did we... did you...?" he pants.');
    }
  }
  qspCall(s, 'sex_ev_reactions', 'react_menu');
  if ((((s as any).sex_ev ?? 0)?.['orgasm_count'] >= 5  ||  ((s as any).pcs_sleep ?? 0) < 20)  &&  (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 4)) {
    scene.actions([
      { label: 'Collapse', goto: ['sex_ev_after', 'black_out'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumNotInside(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] > 9) {
    qspGoto(s, 'sex_ev_cum', 'creampie_surprise');
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 8) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumMouth(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice_int'] >= 6) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumFacial(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        qspGoto(s, 'sex_ev_cum', 'cum_pullout');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumNotYet(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'sex_ev_<<$sex_ev[''position'']>>', '<<$sex_ev[''position'']>>_vid'
  if (((s as any).sex_ev ?? 0)?.['speed'] === 1) {
    // TODO-QSP: '"Not yet!" you gasp. ' + iif(orgasm_buildup >= 100, '"I''m so close! Just a little longer!"', '"Jus...
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 2) {
      // TODO-QSP: '"Not yet!" you pant. ' + iif(orgasm_buildup >= 100, '"I''m so close! Just a little longer!"', '"Jus...
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
        // TODO-QSP: '"Not yet!" you cry. ' + iif(orgasm_buildup >= 100, '"I''m so close! Just a little longer!"', '"Just...
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['sex_stamina'] > (Math.floor(Math.random() * 10) + 1)  &&  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['cant_hold_cum'] < 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>>''s brow furrows as he concentrates intensely on fucking you without...
    scene.text(`${((s as any).npcdesc ?? '')}'s brow furrows as he concentrates intensely on fucking you without slowing down or without blowing his load. It pays off as he continues to plow you at the same pace.`);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 0;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) - (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) - (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cycle_limit'] = ((s as any).sex_ev['cycle_limit'] ?? 0) - ((Math.floor(Math.random() * 3) + 1));
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } else {
    if (((s as any).npc_diligent ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['cant_hold_cum'] < 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 0;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_count'] = ((s as any).sex_ev['cum_count'] ?? 0) - (1);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_count'] = ((s as any).sex_ev['fuck_count'] ?? 0) - (1);
      // TODO-QSP: dynamic text: "I think I need a quick break if that''s the case," <<$npcdesc>> pants back. "If...
      scene.text(`"I think I need a quick break if that's the case," ${((s as any).npcdesc ?? '')} pants back. "If we go for a second longer, I'm definitely gonna cum."`);
      scene.text('"Okay, we can take a break."');
      qspCall(s, 'sex_ev_sex', 'take_a_break');
    } else {
      // TODO-QSP: dynamic text: "I-!" <<$npcdesc>> grunts. "I can''t-!"
      scene.text(`"I-!" ${((s as any).npcdesc ?? '')} grunts. "I can't-!"`);
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
        scene.text('And then he thrusts deep inside you.');
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] },
        ]);
      } else {
        // TODO-QSP: 'And then he yanks his throbbing cock from your ' + iif($sex_ev['position'] ! 'anal', 'pussy.', 'ass...
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_his_choice2');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumCondom(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).sex_ev ?? 0)?.['position']).slice((1)-1, ((1)-1)+(4))) === 'anal') {
    qspGoto(s, 'sex_ev_cum', 'anal_doggy_creampie');
  }
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0), 1, 3);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'condom';
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking between your legs as he removes his cock, the rubber casing around it bulging with liquid';
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking over your shoulder as you let his rubber encased cock slip from your pussy';
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'settling yourself down onto his rubber encased cock';
        }
      }
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 1;
    // TODO-QSP: dynamic text: <<$npcdesc>> buries his cock inside your pussy. Even through the condom, you fee...
    scene.text(`${((s as any).npcdesc ?? '')} buries his cock inside your pussy. Even through the condom, you feel him <i>swell</i> inside you. And then, <i>release</i>.`);
    scene.text('He throbs inside you like a heartbeat and it\'s all you need to come as well. You shudder, pussy clamping down hard on his cock and milking it for every last drop of cum into the condom, as you ride out your orgasms together.');
    if (((s as any).condom_break ?? 0) > 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrokenCondom0(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_condom'] = ((s as any).sex_ev['cum_condom'] ?? 0) + (1);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking between your legs as he removes his cock, the rubber casing around it bulging with liquid';
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/cum71.jpg');
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'looking over your shoulder as you let his rubber encased cock slip from your pussy';
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_describe2'] = 'settling yourself down onto his rubber encased cock';
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> buries his cock inside your pussy and you can feel it pulse inside ...
    scene.text(`${((s as any).npcdesc ?? '')} buries his cock inside your pussy and you can feel it pulse inside you, straining against the rubber coat around it.`);
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
      scene.actions([
        { label: 'Come together', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        }
      }
    }
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    // TODO-QSP: dynamic text: <<$npcdesc>>''s pulsing cock is the final straw and a dam breaks inside you as y...
    scene.text(`${((st as any).npcdesc ?? '')}'s pulsing cock is the final straw and a dam breaks inside you as your climax erupts. The two of come together, each of your orgasms fueling the other's until eventually they've run their course and both of you lay there panting.`);
    if (((st as any).condom_break ?? 0) > 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrokenCondom0(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_condom'] = ((st as any).sex_ev['cum_condom'] ?? 0) + (1);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ride it out', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You wait patiently, letting <<$npcdesc>> empty himself into the condom, until yo...
    scene.text(`You wait patiently, letting ${((st as any).npcdesc ?? '')} empty himself into the condom, until you no longer feel him twitching inside you.`);
    if (((st as any).condom_break ?? 0) > 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrokenCondom0(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_condom'] = ((st as any).sex_ev['cum_condom'] ?? 0) + (1);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
      { label: 'Tolerate it (disgust)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You lay there, trying not to squirm as <<$npcdesc>> orgasm pumps load after load...
    scene.text(`You lay there, trying not to squirm as ${((st as any).npcdesc ?? '')} orgasm pumps load after load into your womb. Despite the condom safely encasing his cock, the idea of him filling you up is enough to fill you with disgust and you don't move, waiting until you no longer feel him twitching inside you.`);
    if (((st as any).condom_break ?? 0) > 0) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrokenCondom0(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_condom'] = ((st as any).sex_ev['cum_condom'] ?? 0) + (1);
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrokenCondom0(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_count'] = ((s as any).sex_ev['creampie_count'] ?? 0) + (1);
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).stat ?? 0)?.['preg_risk'] === 'danger'  &&  (!((s as any).knowpreg ?? 0))) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['risky_creampie'] = ((s as any).sex_ev['risky_creampie'] ?? 0) + (1);
    ((s as any).npc_risky_creampie_count = (s as any).npc_risky_creampie_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_risky_creampie_count[String((s as any).npcID ?? 0)] ?? 0) + (1);
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['last_cum'] = 'broken_condom';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['broken_condom'] = 1;
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['came_together'] = 2;
    // TODO-QSP: dynamic text: <<$npcdesc>> buries his cock inside your pussy. It throbs inside you through the...
    scene.text(`${((s as any).npcdesc ?? '')} buries his cock inside your pussy. It throbs inside you through the condom, causing you to come as well. You ride out your orgasms together, oblivious to everything except the pleasure.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrokenCondom2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> buries his cock inside your pussy and you can feel it pulse inside ...
    scene.text(`${((s as any).npcdesc ?? '')} buries his cock inside your pussy and you can feel it pulse inside you, straining against the rubber coat around it.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrokenCondom1(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrokenCondom1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Right as it seems like <<$npcdesc>>''s finished, you feel a <i>pop</i> inside yo...
    scene.text(`Right as it seems like ${((st as any).npcdesc ?? '')}'s finished, you feel a <i>pop</i> inside you and a sudden rush of warmth <i>floods</i> through your hips.`);
    scene.actions([
      { label: 'Oh shit!', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/cum111.jpg');
    scene.text('Your eyes go wide in shock and you jump off the bed, looking between your legs. As you feared, thick, white strands of cum leak from your snatch, running down your thighs. The condom must have broken.');
    qspCall(st, 'sex_ev_reactions_creampie', 'oh_shit_options');
  } },
      { label: 'Take it in stride', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.img('images/shared/sex/cum/vagcreampie/creampie2.mp4');
      scene.text('You blink in surprise and slowly raise your hips to remove yourself from his cock. The moment it slips free, cum gushes from your pussy and you visually confirm what you suspected: the condom broke.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        // TODO-QSP: dynamic text: You blink in surprise but wait patiently without making a fuss until <<$npcdesc>...
        scene.text(`You blink in surprise but wait patiently without making a fuss until ${((st as any).npcdesc ?? '')} withdraws his cock from you. The moment it slips free, cum gushes from your pussy and you visually confirm what you suspected: the condom broke.`);
      } else {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        // TODO-QSP: dynamic text: You blink in surprise but wait patiently without making a fuss until <<$npcdesc>...
        scene.text(`You blink in surprise but wait patiently without making a fuss until ${((st as any).npcdesc ?? '')} withdraws his cock from you. The moment it slips free, something wet gushes from your pussy and you turn around to visually confirm what you suspected: the condom broke.`);
      }
    }
    qspCall(st, 'sex_ev_reactions_creampie', 'oh_shit_options');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_accident_birth_control');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_safe_day');
  } },
      { label: 'Come', handler: (st: GameState) => {
    (st as any).orgasm_or = 'yes';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['broken_condom_creampie_cum'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['simultaneous_orgasm_count'] = ((st as any).sex_ev['simultaneous_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['came_together'] = 1;
    // TODO-QSP: gs 'arousal', 'vaginal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/orgasm1.mp4');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/orgasm2.mp4');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
        }
      }
    }
    // TODO-QSP: dynamic text: The sudden explosion of warmth inside you overwhelms your senses and you gasp. I...
    scene.text(`The sudden explosion of warmth inside you overwhelms your senses and you gasp. It causes you to orgasm and your whole body shudders around ${((st as any).npcdesc ?? '')}'s cock as heat fills you to the brim.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: Eventually your orgasm comes down and you look up at <<$npcdesc>>, still quiveri...
      scene.text(`Eventually your orgasm comes down and you look up at ${((st as any).npcdesc ?? '')}, still quivering with his cock inside you.`);
      scene.text('"I think... the condom... broke..." you pant.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: Eventually your orgasm comes down and your knees give out underneath you, fallin...
        scene.text(`Eventually your orgasm comes down and your knees give out underneath you, falling down to the bed with ${((st as any).npcdesc ?? '')} on top of you.`);
        scene.text('"I think... the condom... broke..." you pant from beneath him.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: Eventually your orgasm comes down and you let yourself collapse on top of <<$npc...
          scene.text(`Eventually your orgasm comes down and you let yourself collapse on top of ${((st as any).npcdesc ?? '')}, feeling your breasts pressed against his chest, which rises and falls with the same laboured breathing as your own.`);
          scene.text('"I think... the condom... broke..." you pant laying on his chest.');
        }
      }
    }
    qspCall(st, 'sex_ev_reactions_creampie', 'oh_shit_options');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_accident_birth_control');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_safe_day');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBrokenCondom2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/cum61.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/cum71.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/cum81.jpg');
      }
    }
  }
  // TODO-QSP: dynamic text: You come down from your orgasm, panting, about to smile at <<$npcdesc>> when you...
  scene.text(`You come down from your orgasm, panting, about to smile at ${((s as any).npcdesc ?? '')} when you freeze in shock.`);
  scene.text('Something feels...');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from behind you and something wet trickles out a...
      scene.text(`${((st as any).npcdesc ?? '')} slips his cock out from behind you and something wet trickles out after him.`);
      scene.text('Turning around, you look at his crotch and confirm your suspicions: the condom broke.');
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> slips his cock out from inside you and something wet trickles out a...
      scene.text(`${((st as any).npcdesc ?? '')} slips his cock out from inside you and something wet trickles out after it.`);
      scene.text('Looking down between your legs, you see his cock and confirm your suspicions: the condom broke.');
    }
    qspCall(st, 'sex_ev_reactions_creampie', 'oh_shit_options');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_accident_birth_control');
    qspCall(st, 'sex_ev_reactions_creampie', 'creampie_safe_day');
  } },
  ]);
  scene.build();
}

function enterGirlCumCondomReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter2pumpEnjoymentDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    scene.text('Not that the enjoyment lasts very long.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      scene.text('Not that the experience lasts very long.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('Thankfully, the pain doesn\'t last very long.');
      } else {
        scene.text('Though it doesn\'t last very long.');
      }
    }
  }
  scene.text('"Oh fuck! I\'m cumming!"');
  // TODO-QSP: end
  scene.build();
}

function enter2pumpchump(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['2pump'] = 2;
    if (((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise'  ||  ((st as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie'  ||  ((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      qspCall(st, 'cum_call', '', '', ((st as any).npcID ?? 0), 1, 3);
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2pumpEnjoymentDesc(s, scene); (st as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly stif...
        scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly stiffens up and thrusts his dick into you to the hilt.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy3.mp4');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2pumpEnjoymentDesc(s, scene); (st as any).locArgs = __savedLocArgs; }
          // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly stif...
          scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly stiffens up and thrusts his dick to the hilt behind you.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cumvaginal.mp4');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2pumpEnjoymentDesc(s, scene); (st as any).locArgs = __savedLocArgs; }
            // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly stif...
            scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly stiffens up, grabs your hips, and pulls you down all the way to the base of his cock.`);
          }
        }
      }
      if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['last_cum'] = 'condom';
        scene.text('His cock throbs inside you and distinct moves inside the latex of the condom.');
        if (((st as any).condom_break ?? 0) > 0) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBrokenCondom1(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_cum', '2pumpchump_condom'] },
          ]);
        }
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_surprise'] = 1;
        qspCall(st, 'sex_ev_stats', 'creampie_code');
        scene.text('His cock pulses within you and warmth floods your pussy.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2pumpchumpCreampie(s, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['last_cum'] = 'pullout';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
      if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
        qspCall(st, 'cum_call', 'stomach', ((st as any).npcID ?? 0), 1);
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_stomach'] = ((st as any).sex_ev['cum_stomach'] ?? 0) + (1);
        scene.img('images/shared/sex/cum/stomach/bellycum5.mp4');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enter2pumpEnjoymentDesc(s, scene); (st as any).locArgs = __savedLocArgs; }
        // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly pull...
        scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly pulls out.`);
        scene.text('He pumps his shaft with his hand exactly once and cum erupts from the tip, spattering across your stomach.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          qspCall(st, 'cum_call', 'butt', ((st as any).npcID ?? 0), 1);
          qspCall(st, 'cum_call', 'back', ((st as any).npcID ?? 0), 1);
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_back'] = ((st as any).sex_ev['cum_back'] ?? 0) + (1);
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_ass'] = ((st as any).sex_ev['cum_ass'] ?? 0) + (1);
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'looking back at the white liquid glazing your ass';
          scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly pull...
          scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly pulls out.`);
          scene.text('His cock slips from your snatch and not even a moment later, hot sticky liquid spatters across your ass and back.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            qspCall(st, 'cum_call', 'butt', ((st as any).npcID ?? 0), 1);
            qspCall(st, 'cum_call', 'back', ((st as any).npcID ?? 0), 1);
            ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_stomach'] = ((st as any).sex_ev['cum_stomach'] ?? 0) + (1);
            ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_describe2'] = 'looking at the white liquid glazing your stomach';
            scene.img('images/shared/sex/cum/pullout_cowgirl1.mp4');
            // TODO-QSP: dynamic text: It can''t be more than 30 seconds before <<$npc_usedname[$npcID]>> suddenly slip...
            scene.text(`It can't be more than 30 seconds before ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} suddenly slips his cock out from under you and feel something hot and wet spattering across your back.`);
          }
        }
      }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_cum', '2pumpchump_pullout'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter2pumpchumpCondom(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  scene.img('images/shared/sex/cum/condom1.jpg');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    // TODO-QSP: dynamic text: As <<$npcdesc>> withdraws his cock from your pussy, you can see that the latex c...
    scene.text(`As ${((s as any).npcdesc ?? '')} withdraws his cock from your pussy, you can see that the latex covering it is sagging and filled with white liquid. Any doubt you had that he hadn't just nutted immediately is erased by the visual evidence.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: As <<$npcdesc>> withdraws his cock from your pussy, you look over your shoulder ...
      scene.text(`As ${((s as any).npcdesc ?? '')} withdraws his cock from your pussy, you look over your shoulder and can see that the latex covering it is sagging and filled with white liquid. Any doubt you had that he hadn't just nutted immediately is erased by the visual evidence.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: As you pull yourself off of <<$npcdesc>>, his cock flops from your pussy you can...
        scene.text(`As you pull yourself off of ${((s as any).npcdesc ?? '')}, his cock flops from your pussy you can see clearly that the latex covering it is sagging and filled with white liquid. Any doubt you had that he hadn't just nutted immediately is erased by the visual evidence.`);
      }
    }
  }
  scene.text('He looks incredibly uncomfortable and embarrassed.');
  qspCall(s, 'sex_ev_reactions', '2pump_react');
  // TODO-QSP: end
  scene.build();
}

function enter2pumpchumpCreampie(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him pull out', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/cum/vagcreampie/oops.jpg');
      // TODO-QSP: dynamic text: As <<$npcdesc>> withdraws his cock from your pussy, feel a <i>pop</i> inside you...
      scene.text(`As ${((st as any).npcdesc ?? '')} withdraws his cock from your pussy, feel a <i>pop</i> inside you and milky white fluid spills out from your snatch.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy2.mp4');
        // TODO-QSP: dynamic text: As <<$npcdesc>> withdraws his cock from your pussy, feel a <i>pop</i> inside you...
        scene.text(`As ${((st as any).npcdesc ?? '')} withdraws his cock from your pussy, feel a <i>pop</i> inside you and something thick dribble out of your snatch.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/cum/vagcreampie/cowgirl3.mp4');
          // TODO-QSP: dynamic text: As you pull yourself off of <<$npcdesc>>, his cock flops from your pussy you can...
          scene.text(`As you pull yourself off of ${((st as any).npcdesc ?? '')}, his cock flops from your pussy you can see clearly that the latex covering it is sagging and filled with white liquid. Any doubt you had that he hadn't just nutted immediately is erased by the visual evidence.`);
        }
      }
    }
    scene.text('He looks incredibly uncomfortable and embarrassed.');
    qspCall(st, 'sex_ev_reactions', '2pump_react');
  } },
  ]);
  scene.build();
}

function enter2pumpchumpPullout(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/cum/stomach/bellycum2.jpg');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/pullout_cowgirl1.mp4');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.text('You look down at the cum spattered across your belly.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.text('You look over your shoulder at the cum spattered across your back.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.text('You look over your shoulder at the cum spattered across your back.');
      }
    }
  }
  scene.text('He looks incredibly uncomfortable and embarrassed.');
  qspCall(s, 'sex_ev_reactions', '2pump_react');
  // TODO-QSP: end
  scene.build();
}

function enterHypnoCreampieOrgasmFail(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    (s as any).orgasm_or = 'no';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_anti_orgasm'] = ((s as any).sex_ev['hypno_anti_orgasm'] ?? 0) + (1);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_came_together'] = 1;
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/vagcreampie/creampie1.mp4');
    if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> holds you tight and you gasp as his cum pours into you. It feels so...
      scene.text(`${((s as any).npcdesc ?? '')} holds you tight and you gasp as his cum pours into you. It feels so good! It's driving you crazy! You're gonna-!`);
      // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
      scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. ${((s as any).npcdesc ?? '')} continues pulsing inside you and the sensation is indescribably good. Your insides scream for release! Your pussy clenches, squeezes, and squirms around ${((s as any).npcdesc ?? '')}'s cock, desperately trying to orgasm!`);
    } else {
      // TODO-QSP: dynamic text: You lock your legs behind <<$npcdesc>>, holding him tight, forcing him to blow h...
      scene.text(`You lock your legs behind ${((s as any).npcdesc ?? '')}, holding him tight, forcing him to blow his load deep inside you. It feels so good! It's driving you crazy! You're gonna-!`);
      // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
      scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. our insides scream for release! Your pussy clamps down, squeezes, and squirms around ${((s as any).npcdesc ?? '')}'s cock as it continues pulsing inside you! You clench your legs harder, desperately trying achieve orgasm!`);
    }
    scene.text('But despite all your best efforts, his orgasm dies down inside you before you find yours. And you just... <i>can\'t...</i> <i><b>come...</b></i>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/cum/vagcreampie/doggy5.mp4');
      (s as any).orgasm_or = 'no';
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_anti_orgasm'] = ((s as any).sex_ev['hypno_anti_orgasm'] ?? 0) + (1);
      qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$npcdesc>> holds you tight and you gasp as his cum pours into you. It feels so...
      scene.text(`${((s as any).npcdesc ?? '')} holds you tight and you gasp as his cum pours into you. It feels so good! It's driving you crazy! You're gonna-!`);
      // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
      scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. ${((s as any).npcdesc ?? '')} continues pulsing inside you and the sensation is indescribably good. Your insides scream for release! Your pussy clenches, squeezes, and squirms around ${((s as any).npcdesc ?? '')}'s cock, trying to seek it.`);
      scene.text('But despite all your best efforts, his orgasm dies down inside you before you find yours. And you just... <i>can\'t...</i> <i><b>come...</b></i>');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspCall(s, 'sex_ev_reactions', 'react_menu');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/cum/vagcreampie/cowgirl2.mp4');
        (s as any).orgasm_or = 'no';
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_anti_orgasm'] = ((s as any).sex_ev['hypno_anti_orgasm'] ?? 0) + (1);
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_came_together'] = 1;
        qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
        qspCall(s, 'stat', '');
        if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 0) {
          // TODO-QSP: dynamic text: You grin as <<$npcdesc>>''s cum shoots into you, filling up your pussy. It feels...
          scene.text(`You grin as ${((s as any).npcdesc ?? '')}'s cum shoots into you, filling up your pussy. It feels so good! It's driving you crazy! You're gonna-!`);
          // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
          scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. You keep working your hips, pounding ${((s as any).npcdesc ?? '')}'s cock against your cervix even as it pulses inside you, pouring cum into your womb. The sensation is indescribably good.`);
          scene.text('But orgasm still won\'t come.');
          scene.text('Your insides scream for release! Your frantic riding takes on a sense of panic, squeezing him tighter and tighter and he groans loudly as your pussy clenches, milking him for every drop, desperately trying to orgasm!');
        } else {
          // TODO-QSP: dynamic text: You gasp as <<$npcdesc>>''s cum shoots into you, filling up your pussy. It feels...
          scene.text(`You gasp as ${((s as any).npcdesc ?? '')}'s cum shoots into you, filling up your pussy. It feels so good! It's driving you crazy! You're gonna-!`);
          // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
          scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. ${((s as any).npcdesc ?? '')} continues pulsing inside you and the sensation is indescribably good. Your insides scream for release! In a desperate panic, you start frantically riding ${((s as any).npcdesc ?? '')} again, even as he's still coming. He groans loudly and your pussy clenches, squeezes, and squirms around his cock, milking him for every drop, desperately trying to orgasm!`);
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
    scene.text('But no matter what you try, his orgasm dies down inside you before you find yours. His cum seeps from your pussy around his already softening shaft.');
    scene.text('And you just... <i>can\'t...</i> <i><b>come...</b></i>');
    if (((st as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    }
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/cum/analcreampie/doggy1.mp4');
          (s as any).orgasm_or = 'no';
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_anti_orgasm'] = ((s as any).sex_ev['hypno_anti_orgasm'] ?? 0) + (1);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['hypno_came_together'] = 1;
          qspCall(s, 'sex_ev_sex', 'fuck_arousal_creampie_cum_code');
          qspCall(s, 'stat', '');
          if (((s as any).sex_ev ?? 0)?.['creampie_force'] === 0) {
            // TODO-QSP: dynamic text: You grin as <<$npcdesc>>''s cum shoots into you, filling up your anus. It feels ...
            scene.text(`You grin as ${((s as any).npcdesc ?? '')}'s cum shoots into you, filling up your anus. It feels so good! It's driving you crazy! You're gonna-!`);
            // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
            scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. You keep working your hips, pounding ${((s as any).npcdesc ?? '')}'s cock in your anus even as it pulses inside you, pouring cum into your intestines. The sensation is indescribably good.`);
            scene.text('But orgasm still won\'t come.');
            scene.text('Your insides scream for release! Your frantic riding takes on a sense of panic, squeezing him tighter and tighter and he groans loudly as your anus clenches, milking him for every drop, desperately trying to orgasm!');
          } else {
            // TODO-QSP: dynamic text: You gasp as <<$npcdesc>>''s cum shoots into you, filling up your anus. It feels ...
            scene.text(`You gasp as ${((s as any).npcdesc ?? '')}'s cum shoots into you, filling up your anus. It feels so good! It's driving you crazy! You're gonna-!`);
            // TODO-QSP: dynamic text: Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantaliz...
            scene.text(`Suddenly, your arousal slams up against a brick wall. Frustratingly, <i>tantalizingly</i> close. But climax refuses to come. ${((s as any).npcdesc ?? '')} continues pulsing inside you and the sensation is indescribably good. Your insides scream for release! In a desperate panic, you start frantically riding ${((s as any).npcdesc ?? '')} again, even as he's still coming. He groans loudly and your anus clenches, squeezes, and squirms around his cock, milking him for every drop, desperately trying to orgasm!`);
          }
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/doggy_drip2.mp4');
    scene.text('But no matter what you try, his orgasm dies down inside you before you find yours. His cum seeps from your anus around his already softening shaft.');
    scene.text('And you just... <i>can\'t...</i> <i><b>come...</b></i>');
    if (((st as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampieSurpriseCumTogether(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumInsidePullAway(s, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_reactions', 'react_menu');
    }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHypnoCreampieOrgasmFail2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
    case 'surprise_cum_together':
      enterSurpriseCumTogether(s, scene);
      break;
    case 'anal_surprise_cum_together':
      enterAnalSurpriseCumTogether(s, scene);
      break;
    case 'cum_together2':
      enterCumTogether2(s, scene);
      break;
    case 'cum_together_fake':
      enterCumTogetherFake(s, scene);
      break;
    case 'cum_force':
      enterCumForce(s, scene);
      break;
    case 'cum_force2':
      enterCumForce2(s, scene);
      break;
    case 'cum_pullout':
      enterCumPullout(s, scene);
      break;
    case 'creampie_surprise':
      enterCreampieSurprise(s, scene);
      break;
    case 'creampie_surprise2':
      enterCreampieSurprise2(s, scene);
      break;
    case 'creampie_surprise_cum_together':
      enterCreampieSurpriseCumTogether(s, scene);
      break;
    case 'what_now':
      enterWhatNow(s, scene);
      break;
    case 'anal_creampie_surprise':
      enterAnalCreampieSurprise(s, scene);
      break;
    case 'anal_creampie_surprise2':
      enterAnalCreampieSurprise2(s, scene);
      break;
    case 'anal_creampie_surprise_cum_together':
      enterAnalCreampieSurpriseCumTogether(s, scene);
      break;
    case 'cum_not_inside':
      enterCumNotInside(s, scene);
      break;
    case 'cum_not_yet':
      enterCumNotYet(s, scene);
      break;
    case 'cum_condom':
      enterCumCondom(s, scene);
      break;
    case 'broken_condom0':
      enterBrokenCondom0(s, scene);
      break;
    case 'broken_condom1':
      enterBrokenCondom1(s, scene);
      break;
    case 'broken_condom2':
      enterBrokenCondom2(s, scene);
      break;
    case 'girl_cum_condom_react':
      enterGirlCumCondomReact(s, scene);
      break;
    case '2pump_enjoyment_desc':
      enter2pumpEnjoymentDesc(s, scene);
      break;
    case '2pumpchump':
      enter2pumpchump(s, scene);
      break;
    case '2pumpchump_condom':
      enter2pumpchumpCondom(s, scene);
      break;
    case '2pumpchump_creampie':
      enter2pumpchumpCreampie(s, scene);
      break;
    case '2pumpchump_pullout':
      enter2pumpchumpPullout(s, scene);
      break;
    case 'hypno_creampie_orgasm_fail':
      enterHypnoCreampieOrgasmFail(s, scene);
      break;
    case 'hypno_creampie_orgasm_fail2':
      enterHypnoCreampieOrgasmFail2(s, scene);
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
