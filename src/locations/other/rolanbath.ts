import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'rolanbath', 'start');
  qspCall(s, 'stat', '');
  if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 7) {
    scene.text('Rolan is here.');
    if ((Math.floor(Math.random() * 101) + 0) >= 30) {
      scene.actions([{ label: 'Continue', goto: ['rolanbath', 'ev'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['rolanbath', 'sexev'] }]);
    }
  }
  scene.text('<center><b>Bathroom</b></center>');
  if (((s as any).newbath ?? 0) !== 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroom.jpg');
    scene.text('The bathroom has seen better days. There\'s some mold in the corners and floor. A big crack in the wall. This place probably hasn\'t been cleaned for quite some time.');
    scene.text('The toilet sits along the far wall. There\'s also a bathtub, with an old plastic shower curtain hanging from a rod above it. It also seems that the latch on the door is broken.');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathroomnew.jpg');
    scene.text('The bathroom is in much better shape since you worked on it.');
  }
  // TODO-QSP: dynamic text: A <a href="exec:gt 'mirror','start'">mirror</a>, where you can ' + iif(pcs_hairb...
  scene.text('A <a href="exec:gt \'mirror\',\'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair hangs over the sink.');
  if (((s as any).rolanworker ?? 0) === 2  &&  (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 9  ||  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] === 10)) {
    if ((!((s as any).workertool ?? 0))) {
      scene.actions([
        { label: 'Get some tools', goto: ['rolanbath', 'tools'] },
      ]);
    } else {
      if (((s as any).workertool ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathchat/builder/girlpow.jpg');
        scene.text('"Now I\'ll show Rolan what girl power can do!"');
        scene.actions([
          { label: 'Get to work', goto: ['rolanapt', 'worker'] },
        ]);
      }
      scene.actions([
        { label: 'Look for concrete mix', goto: ['rolanapt', 'hallway'] },
      ]);
    }
    scene.actions([
      { label: 'Return to the hallway', goto: ['rolanapt', 'hallway'] },
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/wash3.jpg');
    scene.text('You undress and turn on the water in the shower. When it hits the right temperature you enter the shower and let the warm water rain down on you. You carefully soap yourself trying not to miss any spots and then rinse off.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
    }
    if (((s as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
      if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
      }
      if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
      }
      scene.text(`<center><b>You seem to be ${((s as any).weightwarn ?? 0)} weight.</b></center>`);
    }
    if (((s as any).normbuffpick ?? 0) === 1) {
      scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
      scene.actions([
        { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
      ]);
    }
    if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 0  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 1) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
      scene.text('You try to forget that Rolan\'s bathroom door doesn\'t have a latch.');
      scene.text('The idea that the door is open occupies your mind while you are showering. It would be very embarrassing if Rolan was to enter at the wrong time.');
      (s as any).rolan_act = Math.floor(Math.random() * 4) + 0;
      if ((!((s as any).rolan_act ?? 0))) {
        scene.actions([
          { label: 'Sing in the shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathsing\'+rand(0, 1)+\'.jpg');
    scene.text('The warm water feels amazing against you. You forget for a moment that Rolan could enter the bathroom at any moment. The shower is so relaxing that you begin to sing under the water, imagining that you\'re a famous rockstar performing for your thousands of fans.');
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).rolan_act ?? 0) === 2) {
          scene.actions([
            { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathaware\'+rand(0, 2)+\'.jpg');
    scene.text('You think you hear a noise. "Rolan, is that you?"');
    scene.actions([
      { label: 'What the f…?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathwhat.jpg');
    scene.text('Shit! Rolan is in here… masturbating!?');
    scene.actions([
      { label: 'Look', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanmazt0.mp4');
    scene.text('Rolan is furiously stroking his cock a few meters away from you while you are showering… You can\'t believe it!');
    scene.actions([
      { label: 'Close the curtain (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
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
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('No, Rolan is a good guy, he wouldn\'t come into the bathroom while you\'re showering.');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
          ]);
        }
        if (((s as any).pcs_horny ?? 0) >= 40) {
          scene.actions([
            { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('You know Rolan isn\'t in here.');
    scene.text('You place the showerhead onto your pussy and a powerful jet of warm water begins to caress you.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'start');
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Continue washing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You know Rolan isn\'t in here.');
    scene.text('No, Rolan is a good guy, he wouldn\'t come into the bathroom while you\'re showering.');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'start');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathpeek.jpg');
    scene.text('As the jet of warm water begins to caress you, you hear a noise. You call out, "Rolan, is that you?" You don\'t hear a response. "Bah! Probably just me being paranoid."');
    (s as any).cumspclnt = 8;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).rolan_steal_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).underwear ?? 0)?.['type'] !== 2) {
      qspCall(s, 'panties', 'dispose');
      (s as any).rolan_panty_day = ((s as any).daystart ?? 0);
      (s as any).rolan_panty_count = ((s as any).rolan_panty_count ?? 0) - (1);
      if (((s as any).rolanpantyQW ?? 0) <= 1) {
        (s as any).rolanpantyQW = 1;
      }
    }
    scene.actions([
      { label: 'Finish showering', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathcold.jpg');
    scene.text('The water is suddenly ice cold, "Ahhh! I must have used up all the hot water!"');
    scene.actions([
      { label: 'Dry yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathtowel1.jpg');
    scene.text('You wrap yourself with a towel before exiting the shower, just to be cautious.');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
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
      }
      qspCall(s, 'din_van', 'brit');
    }
    scene.actions([
      { label: 'Have a bath (0:30)', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_sweat = 7 + ((s as any).rand ?? 0)(0, 4);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.img('images/shared/home/bathroom/wash4.jpg');
    scene.text('While the bathtub fills up you get undressed and then dip a toe into the water. It\'s just the right temperature so you climb in and let yourself sink into the warm water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the bath.');
    }
    if (((s as any).sh_rolan_bazar ?? 0) < 4) {
      scene.text('You\'re not used to having Rolan wandering around, especially with a broken door.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
      scene.text('You\'re still not used to having Rolan wandering around, especially with a broken door.');
      scene.text('Starting to soap yourself you unwittingly turn your attention to your breasts…');
      if (((s as any).sh_rolan_bazar ?? 0) <= 25) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 0);
        scene.text('You have become a little bit accustomed to washing yourself in Rolan\'s bath and casually you pinch your nipple as if this situation arouses you.');
      } else {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 2);
        scene.text('You lean back and relax for a while. Then you begin to lather your body, gently gliding your soft hands over your smooth curves, and wash yourself thoroughly.');
      }
      if (((s as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
        if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
        }
        if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
        }
        scene.text(`<center><b>You seem to be ${((s as any).weightwarn ?? 0)} weight.</b></center>`);
      }
      if (((s as any).normbuffpick ?? 0) === 1) {
        scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
        scene.actions([
          { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
        ]);
      }
      if (((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 0  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] !== 1) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
        scene.text('You try to forget that Rolan\'s bathroom door doesn\'t latch.');
        scene.text('The idea that the door is open occupies your mind while you are bathing. It would be very embarrassing if Rolan entered at the wrong time.');
        (s as any).rolan_act = Math.floor(Math.random() * 4) + 0;
        if ((!((s as any).rolan_act ?? 0))) {
          scene.actions([
            { label: 'Sing in the bath', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathsing1.jpg');
    scene.text('The warm water feels amazing against you. You forget for a moment that Rolan could enter the bathroom at any moment. The bath is so relaxing that you begin to sing under the water, imagining that you\'re a famous rockstar performing for your thousands of fans.');
    qspCall(s, 'mood', 'raise', 'tiny');
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).rolan_act ?? 0) === 2) {
            scene.actions([
              { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathaware\'+rand(3, 5)+\'.jpg');
    scene.text('You think you hear a noise. "Rolan, is that you?"');
    scene.actions([
      { label: 'What the f…?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathwhat.jpg');
    scene.text('Shit, Rolan is in here… masturbating!?');
    scene.actions([
      { label: 'look', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanmazt1.mp4');
    scene.text('Wait… he\'s not masturbating… What the fuck is he doing? You can\'t believe what are you seeing.');
    scene.actions([
      { label: 'Close curtain (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
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
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathtub28.mp4');
    scene.text('No, Rolan is a good guy. You are sure he wouldn\'t come into the bathroom while you\'re showering.');
    scene.actions([
      { label: 'Dry off', goto: ['rolanbath', 'dryOff'] },
    ]);
  } },
            ]);
          }
          if (((s as any).pcs_horny ?? 0) >= 40) {
            scene.actions([
              { label: 'Relief yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash7.mp4');
    scene.text('You know Rolan isn\'t here.');
    scene.text('You turn on the faucet, lift your legs and scoot your ass over to align your pussy with the jet of warm water.');
    qspCall(s, 'arousal', 'clit_finger', 10, 'masturbate');
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'start');
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Wash', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/bathtub28.mp4');
    scene.text('You know Rolan isn\'t here.');
    scene.text('He wouldn\'t come into the bathroom knowing you were in here.');
    scene.actions([
      { label: 'Dry off', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'start');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Uh…? Is someone there?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathpeek.jpg');
    scene.text('As the jet of warm water begins to caress you, you hear a noise. You call out, "Rolan, is that you?" You don\'t hear a response. "Bah! Probably just me being paranoid."');
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).rolan_steal_day ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'panties', 'dispose');
      (s as any).rolan_panty_day = ((s as any).daystart ?? 0);
      (s as any).rolan_panty_count = ((s as any).rolan_panty_count ?? 0) - (1);
      if (((s as any).rolanpantyQW ?? 0) < 1) {
        (s as any).rolanpantyQW = 1;
      }
    }
    scene.actions([
      { label: 'Finish showering', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanbathcold.jpg');
    scene.text('The water is suddenly ice cold, "Ahhh! I must have used up all the hot water!"');
    scene.actions([
      { label: 'Dry yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
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
        }
        qspCall(s, 'din_van', 'brit');
      }
      qspCall(s, 'piercing_management', 'set_manage_string');
      if (((s as any).fillimplant ?? 0) === 1  &&  ((s as any).siliconeBag ?? 0) >= 1) {
        // TODO-QSP: '<a href="exec:cls
        (s as any).siliconeBag = ((s as any).siliconeBag ?? 0) - (1);
        // TODO-QSP: bodyVars[''bust_silicone''] += 10
        // TODO-QSP: gt $loc, $loc_arg">Inject silicone into breast implants.</a>'
      }
      if (((s as any).fillimplant ?? 0) === 1  &&  ((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 20) {
        // TODO-QSP: '<a href="exec:cls
        // TODO-QSP: bodyVars[''bust_silicone''] -= 10
        // TODO-QSP: gt $loc, $loc_arg">Drain silicone from breast implants.</a>'
      }
      qspCall(s, 'din_van', 'bteeth');
      qspCall(s, 'din_van', 'tampon');
      qspCall(s, 'din_van', 'basin');
      qspCall(s, 'din_van', 'publicpan');
      if (((s as any).knowpreg ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['pregnancy_test'] > 0  &&  (((s as any).abortionbirthdate ?? 0) === 0  ||  ((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) > 100)) {
        scene.actions([
          { label: 'Do a pregnancy test', handler: (st: GameState) => {
    (s as any).mc_inventory['pregnancy_test'] = ((s as any).mc_inventory['pregnancy_test'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    if (((s as any).pregChem ?? 0) > 120) {
      (s as any).knowpreg = 1;
      (s as any).thinkpreg = 1;
      scene.text('The test shows the two strips: you\'re pregnant!');
    } else {
      (s as any).knowpreg = 0;
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
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const rolanbath: LocationDef = {
  name: 'rolanbath',
  title: 'Bathroom',
  region: 'other',
  locationType: 'bathroom',
  description: ['Rolan is here.'],
  enter: enter,
};
