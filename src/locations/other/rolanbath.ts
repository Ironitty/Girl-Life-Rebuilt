import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'rolanbath', 'start');
  (s as any).location_type = 'bathroom';
  qspCall(s, 'stat', '');
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 7) {
    scene.text('Rolan is here.');
    if ((Math.floor(Math.random() * 101) + 0) >= 30) {
      qspGoto(s, 'rolanbath', 'ev');
    } else {
      qspGoto(s, 'rolanbath', 'sexev');
    }
  }
  scene.text('<center><b>Bathroom</b></center>');
  if (((s as any).newbath ?? 0) !== 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroom.jpg');
    scene.text('The bathroom has seen better days. There\'s some mold in the corners and floor. A big crack in the wall. This place probably hasn\'t been cleaned for quite some time.');
    scene.text('The toilet sits along the far wall. There\'s also a bathtub, with an old plastic shower curtain hanging from a rod above it. It also seems that the latch on the door is broken.');
  } else {
    if (((s as any).newbath ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroomnew.jpg');
      scene.text('The bathroom is in much better shape since you worked on it.');
    }
  }
  scene.text('A <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a>, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027brush\u0027); return false;">brush</a>') : ('brush')) + ' your hair hangs over the sink.');
  if (((s as any).rolanworker ?? 0) === 2  &&  (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 9  ||  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 10)) {
    if ((!((s as any).workertool ?? 0))) {
      scene.actions([
        { label: 'Get some tools', goto: ['rolanbath', 'tools'] },
      ]);
    } else {
      if (((s as any).workertool ?? 0) === 1) {
        scene.actions([
          { label: 'Look for concrete mix', goto: ['rolanapt', 'hallway'] },
        ]);
      } else {
        if (((s as any).workertool ?? 0) === 2) {
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/girlpow.jpg');
          scene.text('"Now I\'ll show Rolan what girl power can do!"');
          scene.actions([
            { label: 'Get to work', goto: ['rolanapt', 'worker'] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'piercing_management', 'set_manage_string');
  if (((s as any).fillimplant ?? 0) === 1  &&  ((s as any).siliconeBag ?? 0) >= 1) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => {  s.siliconeBag -=1; (s.bodyVars ??= {})\u0027bust_silicone\u0027 +=10; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">Inject silicone into breast implants.</a>');
  }
  if (((s as any).fillimplant ?? 0) === 1  &&  ((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 20) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => {  (s.bodyVars ??= {})\u0027bust_silicone\u0027 -=10; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">Drain silicone from breast implants.</a>');
  }
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  if (((s as any).knowpreg ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['pregnancy_test'] > 0  &&  (((s as any).abortionbirthdate ?? 0) === 0  ||  ((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) > 100)) {
    scene.actions([
      { label: 'Do a pregnancy test', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['pregnancy_test'] = ((st as any).mc_inventory['pregnancy_test'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    if (((st as any).pregChem ?? 0) > 120) {
      (st as any).knowpreg = 1;
      (st as any).thinkpreg = 1;
      scene.text('The test shows the two strips: you\'re pregnant!');
    } else {
      (st as any).knowpreg = 0;
      scene.text('The test shows one band: you\'re not pregnant.');
    }
    scene.actions([
      { label: 'Finish', goto: ['rolanbath', 'start'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'prvt_pee');
  qspCall(s, 'din_van', 'toymanage');
  qspCall(s, 'din_van', 'enema');
  scene.actions([
    { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
    { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/wash3.jpg');
    scene.text('You undress and turn on the water in the shower. When it hits the right temperature you enter the shower and let the warm water rain down on you. You carefully soap yourself trying not to miss any spots and then rinse off.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
    }
    if (((st as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
        (st as any).weightwarn = 'losing';
      }
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
        (st as any).weightwarn = 'gaining';
      }
      scene.text(`<center><b>You seem to be ${((st as any).weightwarn ?? '')} weight.</b></center>`);
      (st as any).weightwarn = undefined;
    }
    if (((st as any).normbuffpick ?? 0) === 1) {
      scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
      scene.actions([
        { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
      ]);
    }
    if (((st as any).RolanLoc ?? 0)?.[String((st as any).hour ?? 0)] !== 0  &&  ((st as any).RolanLoc ?? 0)?.[String((st as any).hour ?? 0)] !== 1) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      scene.text('You try to forget that Rolan\'s bathroom door doesn\'t have a latch.');
      scene.text('The idea that the door is open occupies your mind while you are showering. It would be very embarrassing if Rolan was to enter at the wrong time.');
      (st as any).rolan_act = (Math.floor(Math.random() * 4) + 0);
      if ((!((st as any).rolan_act ?? 0))) {
        scene.actions([
          { label: 'Sing in the shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathsing` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
    scene.text('The warm water feels amazing against you. You forget for a moment that Rolan could enter the bathroom at any moment. The shower is so relaxing that you begin to sing under the water, imagining that you\'re a famous rockstar performing for your thousands of fans.');
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).rolan_act ?? 0) === 1) {
          scene.actions([
            { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathpeek.jpg');
    scene.text('As the jet of warm water begins to caress you, you hear a noise. You call out, "Rolan, is that you?" You don\'t hear a response. "Bah! Probably just me being paranoid."');
    (st as any).cumspclnt = 8;
    qspCall(st, 'cum_cleanup', '');
    if (((st as any).pantyworntype ?? 0) !== 'none'  &&  ((st as any).rolan_steal_day ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).underwear ?? 0)?.['type'] !== 2) {
      qspCall(st, 'panties', 'dispose');
      (st as any).rolan_panty_day = ((st as any).daystart ?? 0);
      (st as any).rolan_panty_count = ((st as any).rolan_panty_count ?? 0) - (1);
      if (((st as any).rolanpantyQW ?? 0) <= 1) {
        (st as any).rolanpantyQW = 1;
      }
    }
    scene.actions([
      { label: 'Finish showering', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathcold.jpg');
    scene.text('The water is suddenly ice cold, "Ahhh! I must have used up all the hot water!"');
    scene.actions([
      { label: 'Dry yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathtowel1.jpg');
    scene.text('You wrap yourself with a towel before exiting the shower, just to be cautious.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Quickly get dressed', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).rolan_act ?? 0) === 2) {
            scene.actions([
              { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathaware` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
    scene.text('You think you hear a noise. "Rolan, is that you?"');
    scene.actions([
      { label: 'What the f…?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathwhat.jpg');
    scene.text('Shit! Rolan is in here… masturbating!?');
    scene.actions([
      { label: 'Look', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanmazt0.mp4');
    scene.text('Rolan is furiously stroking his cock a few meters away from you while you are showering… You can\'t believe it!');
    scene.actions([
      { label: 'Close the curtain (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathhide0.jpg');
    scene.text('You think to yourself, "<i>Better let him finish, don\'t want him seeing me naked while he\'s pleasuring himself…</i>"');
    scene.actions([
      { label: 'Wait', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Clean yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('No, Rolan is a good guy, he wouldn\'t come into the bathroom while you\'re showering.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      if (((st as any).pcs_horny ?? 0) >= 40) {
        scene.actions([
          { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('You know Rolan isn\'t in here.');
    scene.text('You place the showerhead onto your pussy and a powerful jet of warm water begins to caress you.');
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue washing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You know Rolan isn\'t in here.');
    scene.text('No, Rolan is a good guy, he wouldn\'t come into the bathroom while you\'re showering.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
    ]);
  } },
        ]);
      }
    }
    qspCall(st, 'din_van', 'brit');
  } },
    { label: 'Have a bath (0:30)', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_sweat = 7 + (Math.floor(Math.random() * 5) + 0);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/wash4.jpg');
    scene.text('While the bathtub fills up you get undressed and then dip a toe into the water. It\'s just the right temperature so you climb in and let yourself sink into the warm water.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the bath.');
    }
    if (((st as any).sh_rolan_bazar ?? 0) < 4) {
      scene.text('You\'re not used to having Rolan wandering around, especially with a broken door.');
    } else {
      if (((st as any).sh_rolan_bazar ?? 0) <= 15) {
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
        scene.text('You\'re still not used to having Rolan wandering around, especially with a broken door.');
        scene.text('Starting to soap yourself you unwittingly turn your attention to your breasts…');
      } else {
        if (((st as any).sh_rolan_bazar ?? 0) <= 25) {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 0));
          scene.text('You have become a little bit accustomed to washing yourself in Rolan\'s bath and casually you pinch your nipple as if this situation arouses you.');
        } else {
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 2));
          scene.text('You lean back and relax for a while. Then you begin to lather your body, gently gliding your soft hands over your smooth curves, and wash yourself thoroughly.');
        }
      }
    }
    if (((st as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
        (st as any).weightwarn = 'losing';
      }
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
        (st as any).weightwarn = 'gaining';
      }
      scene.text(`<center><b>You seem to be ${((st as any).weightwarn ?? '')} weight.</b></center>`);
      (st as any).weightwarn = undefined;
    }
    if (((st as any).normbuffpick ?? 0) === 1) {
      scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
      scene.actions([
        { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
      ]);
    }
    if (((st as any).RolanLoc ?? 0)?.[String((st as any).hour ?? 0)] !== 0  &&  ((st as any).RolanLoc ?? 0)?.[String((st as any).hour ?? 0)] !== 1) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      scene.text('You try to forget that Rolan\'s bathroom door doesn\'t latch.');
      scene.text('The idea that the door is open occupies your mind while you are bathing. It would be very embarrassing if Rolan entered at the wrong time.');
      (st as any).rolan_act = (Math.floor(Math.random() * 4) + 0);
      if ((!((st as any).rolan_act ?? 0))) {
        scene.actions([
          { label: 'Sing in the bath', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathsing1.jpg');
    scene.text('The warm water feels amazing against you. You forget for a moment that Rolan could enter the bathroom at any moment. The bath is so relaxing that you begin to sing under the water, imagining that you\'re a famous rockstar performing for your thousands of fans.');
    qspCall(st, 'mood', 'raise', 'tiny');
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).rolan_act ?? 0) === 1) {
          scene.actions([
            { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathpeek.jpg');
    scene.text('As the jet of warm water begins to caress you, you hear a noise. You call out, "Rolan, is that you?" You don\'t hear a response. "Bah! Probably just me being paranoid."');
    qspCall(st, 'cum_cleanup', '');
    if (((st as any).pantyworntype ?? 0) !== 'none'  &&  ((st as any).rolan_steal_day ?? 0) !== ((st as any).daystart ?? 0)) {
      qspCall(st, 'panties', 'dispose');
      (st as any).rolan_panty_day = ((st as any).daystart ?? 0);
      (st as any).rolan_panty_count = ((st as any).rolan_panty_count ?? 0) - (1);
      if (((st as any).rolanpantyQW ?? 0) < 1) {
        (st as any).rolanpantyQW = 1;
      }
    }
    scene.actions([
      { label: 'Finish showering', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathcold.jpg');
    scene.text('The water is suddenly ice cold, "Ahhh! I must have used up all the hot water!"');
    scene.actions([
      { label: 'Dry yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathtowel1.jpg');
    scene.text('You wrap yourself with a towel before exiting the shower, just to be cautious.');
    scene.actions([
      { label: 'Quick dressing', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).rolan_act ?? 0) === 2) {
            scene.actions([
              { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathaware` + (Math.floor(Math.random() * 3) + 3) + '.jpg"></center>');
    scene.text('You think you hear a noise. "Rolan, is that you?"');
    scene.actions([
      { label: 'What the f…?', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathwhat.jpg');
    scene.text('Shit, Rolan is in here… masturbating!?');
    scene.actions([
      { label: 'look', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanmazt1.mp4');
    scene.text('Wait… he\'s not masturbating… What the fuck is he doing? You can\'t believe what are you seeing.');
    scene.actions([
      { label: 'Close curtain (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathhide0.jpg');
    scene.text('You think to yourself, "<i>Better let him finish, don\'t want him seeing me naked…</i>"');
    scene.actions([
      { label: 'Wait', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Clean yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathtub28.mp4');
    scene.text('No, Rolan is a good guy. You are sure he wouldn\'t come into the bathroom while you\'re showering.');
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      if (((st as any).pcs_horny ?? 0) >= 40) {
        scene.actions([
          { label: 'Relief yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash7.mp4');
    scene.text('You know Rolan isn\'t here.');
    scene.text('You turn on the faucet, lift your legs and scoot your ass over to align your pussy with the jet of warm water.');
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Wash', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathtub28.mp4');
    scene.text('You know Rolan isn\'t here.');
    scene.text('He wouldn\'t come into the bathroom knowing you were in here.');
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
    ]);
  } },
        ]);
      }
    }
    qspCall(st, 'din_van', 'brit');
  } },
  ]);
  scene.build();
}

function enterSexev(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 101) + 0) < 50) {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/caught0.jpg');
    scene.text('…oops… better leave him be.');
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave him alone', goto: ['rolanapt', 'hallway'] },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/caught1.mp4');
    scene.text('…it\'s difficult to turn away, but you know you should leave him be.');
    qspCall(s, 'arousal', 'voyeur', 5);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave him alone', goto: ['rolanapt', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterEv(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 101) + 0) <= 90) {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanselfcare` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}, is there something you want to talk about?"`);
    scene.actions([
      { label: 'Chat with Rolan', goto: ['rolanbath', 'bazar'] },
      { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbusy` + (Math.floor(Math.random() * 3) + 0) + '.jpg"></center>');
    scene.text('When you go to the bathroom, you find Rolan already in there. "Hey!" he shouts indignantly. Oops, he\'s on the toilet!');
    scene.text('"Sorry, sorry!" you apologize, quickly leaving the bathroom.');
    scene.actions([
      { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
    ]);
  }
  scene.build();
}

function enterBazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if ((!((s as any).rolan_bazar_count ?? 0))) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanselfcare0.jpg');
    scene.text(`"Sorry Miss ${((s as any).pcs_lastname ?? '')}, I have to go. Maybe we can chat some more later?"`);
    scene.actions([
      { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
    ]);
  } else {
    qspCall(s, 'stat', '');
    (s as any).rolan_bazar_day = ((s as any).daystart ?? 0);
    (s as any).rolan_bazar_count = ((s as any).rolan_bazar_count ?? 0) - (1);
    (s as any).sh_rolan_bazar = ((s as any).sh_rolan_bazar ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).temp_rand = (Math.floor(Math.random() * 8) + 1);
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroom.jpg');
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that he doesn\'t mind if you take a shower here.';
    }
    if (((s as any).temp_rand ?? 0) === 2) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that he see often sees some of your classmates buying clothes at G&M Stores, though he doesn\'t know how it\'s possible for young girls to have so much money.';
    }
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that he wants to run for mayor and end the discrimination he sees in Pavlovsk.';
    }
    if (((s as any).temp_rand ?? 0) === 4) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that the day before Ms. Sokoloff stopped to chat with him as he was coming back from the supermarket.';
    }
    if (((s as any).temp_rand ?? 0) === 5) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that he saw two of your classmates arguing outside.';
    }
    if (((s as any).temp_rand ?? 0) === 6) {
      (s as any).rolan_textb_vanna = 'Rolan tells you that the courtyard is dangerous at night.';
    }
    if (((s as any).temp_rand ?? 0) === 7) {
      (s as any).rolan_textb_kuh = 'Rolan tells you he saw two girls walking in the park, hand in hand, like they were in love. He wonders what is wrong with people these days. Girls need a man after all.';
    }
    if (((s as any).temp_rand ?? 0) === 8) {
      (s as any).rolan_textb_kuh = 'Rolan tells you he saw Anushka and Alyona kissing on the playground, in the apartment courtyard. He thinks it is very unbecoming of them, they should be with men.';
    }
    (s as any).temp_rand = undefined;
    scene.text(`<br>${((s as any).rolan_imgb_vanna ?? '')}<br>`);
    scene.text(`<br>${((s as any).rolan_textb_vanna ?? '')}<br>`);
    scene.text(`"Sure Miss ${((s as any).pcs_lastname ?? '')}, tell me!"`);
    if (((s as any).sh_rolan_bazar ?? 0) > 5  &&  ((s as any).mesec ?? 0) <=0) {
      qspCall(s, 'stat', '');
      scene.text(`<br>${((s as any).rolan_imgb_vanna ?? '')}<br>`);
      scene.text(`<br>${((s as any).rolan_textb_vanna ?? '')}<br>`);
      scene.actions([
        { label: 'Chat some more', goto: ['rolanbath', 'bazar'] },
        { label: 'Ask to take a shower', goto: ['rolanbath', 'pervshower'] },
      ]);
    }
    if (((s as any).sh_rolan_bazar ?? 0) >= 25  &&  ((s as any).npc_rel ?? 0)?.['A133'] >= 50  &&  ((s as any).rolan_bazar_count ?? 0) >= 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.actions([
        { label: 'Suggest bathing together', goto: ['rolanbath', 'bonershower'] },
      ]);
    }
    scene.actions([
      { label: 'Chat some more', goto: ['rolanbath', 'bazar'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
  ]);
  scene.build();
}

function enterPervshower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanselfcare0.jpg');
  scene.text(`"Sure Miss ${((s as any).pcs_lastname ?? '')}, tell me!"`);
  scene.actions([
    { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    if (((st as any).frost ?? 0) > 0) {
      (st as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/wash3.jpg');
    scene.text('You carefully undress behind the curtain and turn on the water. When it hits the right temperature you enter the shower and let the warm water rain down on you. You carefully soap yourself trying not to miss any spot and then wash off.');
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'din_van', 'brit');
    scene.text('You try to forget that Rolan\'s is here.');
    scene.text('The idea of him opening the curtain occupies your mind while you are showering. It would be really embarrassing if Rolan opened the curtain now.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
    }
    if (((st as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
        (st as any).weightwarn = 'losing';
      }
      if (((st as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
        (st as any).weightwarn = 'gaining';
      }
      scene.text(`<center><b>You seem to be ${((st as any).weightwarn ?? '')} weight.</b></center>`);
      (st as any).weightwarn = undefined;
    }
    if (((st as any).normbuffpick ?? 0) === 1) {
      scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
      scene.actions([
        { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
      ]);
    }
    if (((st as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('You place the showerhead onto your pussy and a powerful jet of warm water begins to caress you.');
    qspCall(st, 'arousal', 'clit_finger', 10, 'masturbate');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        { label: 'Continue washing', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('No, Rolan is a good guy, he wouldn\'t peek on you while you\'re showering.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
      ]);
    } else {
      if ((Math.floor(Math.random() * 4) + 0) <= 2) {
        scene.actions([
          { label: 'Sing in the shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathsing` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
    scene.text('The warm water feels amazing against you. As you relax you begin to sing under the water completely forgetting that Rolan is there and can hear you. You imagine that you\'re a famous rockstar performing for your thousands of fans.');
    qspCall(st, 'mood', 'raise', 'tiny');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Clean yourself', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('No, Rolan is a good guy, he wouldn\'t peek on you while you\'re showering.');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBonershower(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).noshampoo = 1;
  qspCall(s, 'din_van', 'showerdin');
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanboner1.jpg');
  scene.text('"Rolan, I see you\'re getting ready to bathe. Do you mind if I join you?"');
  scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}, w-w-what do you mean?"`);
  scene.text('"I mean, we could both save some time and water if we bathed together!"');
  scene.text('Rolan can only stutter and stammer.');
  scene.actions([
    { label: 'Bra', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanboner0.jpg');
    scene.text('You try to snap Rolan out of his stupor, "Come on, Rolan, we don\'t have all day!"');
    scene.text('Rolan has quickly stripped out of his clothes, while you\'ve only managed to get your shirt off.');
    scene.text('"Here, help me with my bra…"');
    scene.actions([
      { label: 'Shoes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanshoes.jpg');
    scene.text('You ask Rolan to help you remove your shoes.');
    scene.text('Rolan reaches down and starts to remove your shoes, his eyes darting between your feet and your panties.');
    scene.text('You wonder, "<i>Could Rolan have a foot fetish, in addition to his panties addiction?</i>"');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Bathe together', handler: (st: GameState) => {
    (st as any).pcs_hairbsh = 0;
    (st as any).pcs_makeup = 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanhair0.jpg');
    scene.text('"Rolan, could you please wash my hair. It\'s so nice not having to do it myself!"');
    scene.text(`"O-o-of course, Miss ${((st as any).pcs_lastname ?? '')}…"`);
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the bath.');
    }
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 3));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanboner3.jpg');
    scene.text('You stand up and help Rolan up too, you are ready to continue when you notice he has a hard-on…');
    scene.text(`"I'm sorry, Miss ${((st as any).pcs_lastname ?? '')}… I shouldn't… I haven't… it's jus-" `);
    scene.text('You cut him off, "It\'s alright, Rolan. It\'s perfectly normal for a healthy man to get an erection when around a <i>beautiful</i> woman."');
    scene.text('You continue to stare at his rock-hard cock, "And you certainly are <i>healthy</i>."');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 3));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanhelp.jpg');
    scene.text('You continue to wash each other\'s bodies, Rolan\'s erection slowly subsiding. Whether he\'s adjusted to bathing with you or he\'s just nervous being on display, you\'re not sure.');
    scene.text('"Thank you, Rolan, we\'re almost done!"');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 4));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolancheek.jpg');
    scene.text('You give Rolan a peck on the cheek, "You see, wasn\'t that quicker than a solo bath?"');
    scene.text('Rolan does not respond. Instead he grabs a towel and quickly exits the bathroom. You wonder how worked up this bath got him. Maybe next time you\'ll take it upon yourself to find out…');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 4) + 3));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['rolanapt', 'hallway'] },
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

function enterDryOff(s: GameState, scene: SceneBuilder): void {
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 0) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathtowel` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
    scene.text('You know Rolan isn\'t here.');
    scene.actions([
      { label: 'Get out and dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
    ]);
  } else {
    if ((Math.floor(Math.random() * 4) + 0) === 3) {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbusy1.jpg');
      scene.text('Shit! It\'s Rolan…! when did he enter?');
      scene.actions([
        { label: 'Close curtain (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathhide0.jpg');
    scene.text('It would be very embarrassing if Rolan sees you like this. You\'d better wait until he\'s done.');
    scene.actions([
      { label: 'Wait', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Bathroom</b></center>');
      if (((s as any).newbath ?? 0) !== 1) {
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroom.jpg');
        scene.text('The bathroom has seen better days. There\'s some mold in the corners and floor. A big crack in the wall. This place probably hasn\'t been cleaned for quite some time.');
        scene.text('The toilet sits along the far wall. There\'s also a bathtub, with an old plastic shower curtain hanging from a rod above it. It also seems that the latch on the door is broken.');
      } else {
        if (((s as any).newbath ?? 0) === 1) {
          scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroomnew.jpg');
          scene.text('The bathroom is in much better shape since you worked on it.');
        }
      }
      scene.text('Phew! Rolan isn\'t here.');
      scene.actions([
        { label: 'Dry off and dress', handler: (st: GameState) => {
    if (((st as any).rolan_panty_count ?? 0) === 0  &&  ((st as any).rolan_panty_day ?? 0) === ((st as any).daystart ?? 0)  &&  (!((st as any).rolan_steal_count ?? 0))) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      (st as any).rolan_steal_count = ((st as any).rolan_steal_count ?? 0) + (1);
      (st as any).rolan_steal_day = ((st as any).daystart ?? 0);
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/headrol.jpg');
      if (((st as any).rolanpantyQW ?? 0) <= 1) {
        (st as any).rolanpantyQW = ((st as any).rolanpantyQW ?? 0) + (1);
        scene.text('You dress up… but can\'t find your panties anywhere.');
        scene.text('"Damn! Rolan really is a panty thief!"');
      } else {
        (st as any).rolanpantyQW = ((st as any).rolanpantyQW ?? 0) + (1);
        scene.text('You dress up… but can\'t find your panties anywhere.');
        scene.text('"I knew he would do it again!"');
      }
      scene.actions([
        { label: 'Exit', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathdry` + (Math.floor(Math.random() * 2) + 0) + '.jpg"></center>');
      scene.text('Better hurry and dry off. You never know…');
      scene.actions([
        { label: 'Exit', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'start');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterTools(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).workertool ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).workertool = ((s as any).workertool ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Tools</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/garages.jpg');
    scene.text('You quickly run to your stepfather\'s garage to grab some tools. Rolan said he already has the paint so you won\'t need to bring that. You start to rummaging in search of the tools.');
    scene.text('You spend several minutes gathering the appropriate tools from your stepfather\'s garage. However, you are unable to find any concrete mix. Perhaps Rolan has some back at the apartment.');
    scene.actions([
      { label: 'Back to Rolan\'s', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('<center><b>Tools</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/worker0.jpg');
    scene.text('You search the apartment from top to bottom but don\'t find any concrete mix. The only room left is…');
    scene.actions([
      { label: 'Only one room left…', goto: ['rolanapt', 'grandmaroom'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterSurprise(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).rolanworker = ((s as any).rolanworker ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Surprise</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanwelcome.jpg');
  scene.text('"Hi, Rolan! What do you think of your new bathroom?"');
  scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}… I-I am speechless…"`);
  scene.text('"Which part do you like best?"');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text('<center><b>Surprise</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroomnew.jpg');
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, the lighting is better, the mold and the smell are gone. All I had done was buy some paint, how…"`);
    scene.text('"Yes, I did use some of the paint, but there\'s still left if you need to do any tounching up."');
    scene.text('"I really don\'t know what to say."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    scene.text('<center><b>Surprise</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanheadbath0.jpg');
    scene.text(`"This must have cost you a lot of money, Miss ${((st as any).pcs_lastname ?? '')}. I don't have much but I have to repay y-"`);
    scene.text('You interrupt him, "No, Rolan, I didn\'t do this for the money. It didn\'t cost me anything, actually."');
    scene.text('"Did you do all this work by yourself?"');
    scene.text('"Yes, well, I borrowed all the tools I used from my stepfather."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).rolanknow = 1;
    ((st as any).RolanLoc = (st as any).RolanLoc ?? {})[String((st as any).hour ?? 0)] = 6;
    scene.text('<center><b>Surprise</b></center>');
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanheadbath1.jpg');
    scene.text('"Ah I see, your stepfather. That would make sense. He seems like a man who take cares of his property. But did he have the concrete, as well? I didn\'t have time to get any. But you fixed that crack in the wall?"');
    scene.text('"No, I didn\'t get the concrete from my stepfather," You raise an eyebrow, "I found that container of concrete powder in that one bedroom you actually keep clean."');
    scene.text('Without saying another word, Rolan runs out of the room…');
    scene.actions([
      { label: 'Follow Rolan', goto: ['rolanapt', 'hallway'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'sexev':
      enterSexev(s, scene);
      break;
    case 'ev':
      enterEv(s, scene);
      break;
    case 'bazar':
      enterBazar(s, scene);
      break;
    case 'pervshower':
      enterPervshower(s, scene);
      break;
    case 'bonershower':
      enterBonershower(s, scene);
      break;
    case 'dryOff':
      enterDryOff(s, scene);
      break;
    case 'tools':
      enterTools(s, scene);
      break;
    case 'surprise':
      enterSurprise(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rolanbath: LocationDef = {
  name: 'rolanbath',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
