import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterShowerdin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
    qspCall(s, 'cum_cleanup', '', 1);
  } else {
    qspCall(s, 'cum_cleanup', '', 18);
  }
  (s as any).body_write = 0;
  (s as any).face_write = 0;
  (s as any).pcs_makeup = 1;
  (s as any).pcs_hairbsh = 0;
  (s as any).hscrunchw = 0;
  (s as any).hpingripw = 0;
  (s as any).hpigtail = 0;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  (s as any).lactation['lactmess'] = 0;
  qspCall(s, 'sweat', 'shower');
  if ((!((s as any).noshampoo ?? 0))) {
    (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) - (1);
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] < 0) {
    (s as any).mc_inventory['shampoo'] = 0;
  }
  qspCall(s, 'body', 'SkinGain', 'CleanSelf');
  qspCall(s, 'stat', '');
  if (((s as any).false_lashes ?? 0) >= 1) {
    if ((Math.floor(Math.random() * 5) + 0) < 3) {
      scene.text('You\'re careful enough that your false lashes make it through relatively unscathed.');
    } else {
      scene.text('Unfortunately, your false lashes don\'t make it through the shower.');
      (s as any).false_lashes = 0;
      (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
      qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
    }
  }
  scene.build();
}

function enterBteeth(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_bteeth')) {
    scene.actions([
      { label: 'Brush your teeth (0:03)', goto: ['din_van', 'bteeth_do'] },
    ]);
  }
  scene.build();
}

function enterCanBteeth(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pcs_breath ?? 0) !== 1  ||  ((s as any).cumloc ?? 0)[12] === 1);
  scene.build();
}

function enterBteethDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'din_van', 'brush_teeth');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    scene.img('images/shared/home/bathroom/brushteeth.mp4');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    scene.img('images/shared/home/bathroom/brushteeth.jpg');
  }
  scene.text('You brush your teeth and now they are clean and minty fresh.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterBrushTeeth(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_cleanup', '', 2);
  (s as any).pcs_breath = 1;
  (s as any).teeth['brushed'] = ((s as any).teeth['brushed'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.build();
}

function enterDryOff(s: GameState, scene: SceneBuilder): void {
  (s as any).mirror_steam = ((s as any).hour ?? 0);
  scene.actions([
    { label: 'Get out and dry off', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take a shower (0:15)', goto: ['din_van', 'shower_do'] },
  ]);
  scene.build();
}

function enterCanShower(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1;
  scene.build();
}

function enterShowerDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'tanvanr'  ||  ((s as any).loc ?? 0) === 'albinahome'  ||  ((s as any).loc ?? 0) === 'LariskaHome'  ||  ((s as any).hotelmc_inventory ?? 0)?.['shampoo'] === 1) {
    (s as any).noshampoo = 1;
  }
  (s as any).noshampoo_tmp = ((s as any).noshampoo ?? 0);
  (s as any).deodorant_on_tmp = ((s as any).deodorant_on ?? 0);
  qspCall(s, 'din_van', 'showerdin');
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You undress and turn on the water in the shower. When it hits the right temperature, you step into the shower and let the warm water rain down on you.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 6);
    scene.text('It\'s really arousing to see your new body with all its smooth curves, breasts with large nipples, wide hips and smooth legs. You begin to lather your body, noticing how soft and tender it feels. Once you\'re sure you haven\'t missed a single spot, you begin to wash yourself off, continuing to experience new and strange sensations.');
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 2);
      scene.text('You\'ve already gotten used to your feminine body and its softness doesn\'t surprise you very much anymore, but you still let your hands wander a bit over your soft curves before you begin to wash yourself in earnest.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
      // TODO-QSP: dynamic text: '+iif(noshampoo_tmp = 1, 'It's not your shampoo, so you use a little more than y...
      scene.text('\'+iif(noshampoo_tmp = 1, \'It\'s not your shampoo, so you use a little more than you normally would; with a tinge of guilt you \', \'Using your own shampoo, you carefully \')+\'lather yourself up, trying not to miss any spots, and then wash off.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0  &&  ((s as any).noshampoo_tmp ?? 0) === 1) {
    scene.text('When you get a chance, you should stop by the supermarket and buy some shampoo.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 5) {
      // TODO-QSP: dynamic text: You are getting low on shampoo, with only <<mc_inventory['shampoo']>> remaining....
      scene.text(`You are getting low on shampoo, with only ${((s as any).mc_inventory ?? 0)?.['shampoo']} remaining. When you get a chance, you should stop by the supermarket and buy some more.`);
    }
  }
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
    scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
  }
  if (((s as any).deodorant_on_tmp ?? 0) === 1) {
    scene.text('Your deodorant gets washed away in the shower.');
  }
  (s as any).showerbaths_taken_today = ((s as any).showerbaths_taken_today ?? 0) + (1);
  if (((s as any).showerbaths_taken_today ?? 0) >= 10) {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (8);
    scene.text('<center><b>Your skin is pruning excessively, maybe you shouldn\'t shower this often</b></center>');
  } else {
    if (((s as any).showerbaths_taken_today ?? 0) >= 5) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (2);
      scene.text('Your skin is starting to prune, maybe you shouldn\'t shower this often');
    }
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
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).pain ?? 0)?.['nipples'] < 60  &&  ((s as any).lactation ?? 0)?.['pc_aware'] <= 0) {
    if (((s as any).pcs_usedbreastpumponherself ?? 0) > 0  &&  ((s as any).pcs_massagedherbreasts ?? 0) <= 0) {
      scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk.<br>Using the breast pump regularly probably made you lactate!');
      (s as any).lactation['induced'] = 1;
    } else {
      if (((s as any).pcs_usedbreastpumponherself ?? 0) <= 0  &&  ((s as any).pcs_massagedherbreasts ?? 0) > 0) {
        scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk. Regularly massaging your breasts probably made you lactate!<br>');
        (s as any).lactation['induced'] = 1;
      } else {
        if (((s as any).pcs_usedbreastpumponherself ?? 0) > 0  &&  ((s as any).pcs_massagedherbreasts ?? 0) > 0) {
          scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk. All that pumping and massaging your breasts probably caused you to lactate!<br>');
          (s as any).lactation['induced'] = 1;
        } else {
          scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. You find, to your surprise, that it is milk. You have started lactating!<br>');
          if (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
            scene.text('This is probably happening because you are pregnant.');
          } else {
            scene.text('You should have this checked out by a doctor. You could be pregnant.');
          }
          (s as any).lactation['induced'] = 0;
        }
      }
    }
    (s as any).pcs_usedbreastpumponherself = 0;
    (s as any).pcs_massagedherbreasts = 0;
    (s as any).lactation['pc_aware'] = 1;
  }
  qspCall(s, 'din_van', 'dryOff');
  if (((s as any).rapeday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).rape_shower ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Cry (react to rape)', handler: (st: GameState) => {
    (s as any).rape_shower = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 10);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/cry.jpg');
    scene.text('The last of the suds run off of you, but you can still <i>feel it</i>.');
    scene.text('Your rapist\'s cock <i>inside</i> you.');
    scene.text('His cum <i>leaking</i> out of you.');
    scene.text('You grab the soap again and scrub yourself again, but it still feels like something is there, coating your skin. You scrub and scrub and scrub but it just won\'t go away until you finally cry out, throwing it into the corner. Tremors begin coursing through your body and you slowly sink down onto the shower floor, where you remain, sobbing while the water continues raining down on you.');
    qspCall(s, 'din_van', 'dryOff');
  } },
    ]);
  } else {
    if (((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 6) + 0) === 0  &&  ((s as any).locM ?? 0) === 'uni_dorm') {
      scene.actions([{ label: 'Continue', goto: ['vann', 'v4'] }]);
    }
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('You place the showerhead onto your pussy and a powerful jet of warm water begins to caress you.');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'clit_vibe', (-10), 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', (-10), 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (s as any).cumspclnt = 8;
      qspCall(s, 'cum_cleanup', '');
    }
    qspCall(s, 'din_van', 'dryOff');
  } },
      ]);
    }
  }
  qspCall(s, 'selfplay', 'shower_dildo_check');
  qspCall(s, 'din_van', 'brit');
  if (((s as any).vanr_lock ?? 0) === 0  &&  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
    scene.text('In your absentmindedness, you have forgotten to close the door.');
    scene.text('The idea that the door is open occupies your mind while you are showering. It would be very embarrassing if your brother or stepfather looked in at the wrong time.');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      qspCall(s, 'vanrPar', 'peek');
    }
  }
  scene.actions([
    { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(s, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
  ]);
  scene.build();
}

function enterBath(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Soak in the bath (0:30)', goto: ['din_van', 'bath_do'] },
  ]);
  scene.build();
}

function enterCanBath(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1;
  scene.build();
}

function enterBathDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_sweat = 7 + ((s as any).rand ?? 0)(0, 4);
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'tanvanr'  ||  ((s as any).loc ?? 0) === 'LariskaHome'  ||  ((s as any).hotelmc_inventory ?? 0)?.['shampoo'] === 1) {
    (s as any).noshampoo = 1;
  }
  (s as any).noshampoo_tmp = ((s as any).noshampoo ?? 0);
  (s as any).deodorant_on_tmp = ((s as any).deodorant_on ?? 0);
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/wash4.jpg');
  scene.text('You undress while the bathtub fills up and dip a toe into the water. It is just the right temperature, so you climb in and let yourself sink into the warm water, moaning softly as you feel your muscles start to relax.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 6);
    scene.text('You stare at the smooth, soft legs sticking out of the water. You\'re still not used to this new body and the look of all this roundness.');
    scene.text('As you start to soap yourself, you unwittingly turn your attention to your breasts. They\'re so soft and big, and when you touch them you feel an unfamiliar but pleasant sensation. You take your time getting familiar with your new body, then you begin to wash yourself in earnest.');
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 2);
      scene.text('You have become a little accustomed to your female body and casually soap up all these soft curves and rinse yourself off, rubbing your hands all over your feminine body to make sure you didn\'t miss a spot.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
      // TODO-QSP: dynamic text: You lean back and relax for a while. '+iif(noshampoo_tmp = 1, 'It's not your sha...
      scene.text('You lean back and relax for a while. \'+iif(noshampoo_tmp = 1, \'It\'s not your shampoo, so you use a little more than you normally would; with a tinge of guilt you \', \'Using your own shampoo, you carefully \')+\'begin to lather your body, gently gliding your soft hands over your smooth curves, and wash yourself thoroughly.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0  &&  ((s as any).noshampoo_tmp ?? 0) === 1) {
    scene.text('When you get a chance, you should stop by the supermarket and buy some shampoo.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 5) {
      // TODO-QSP: dynamic text: You are getting low on shampoo, with only <<mc_inventory['shampoo']>> remaining....
      scene.text(`You are getting low on shampoo, with only ${((s as any).mc_inventory ?? 0)?.['shampoo']} remaining. When you get a chance, you should stop by the supermarket and buy some more.`);
    }
  }
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
    scene.text('You have no reason to, but you carefully avoid cleaning out your pussy and ass.');
  }
  if (((s as any).deodorant_on_tmp ?? 0) === 1) {
    scene.text('Your deodorant gets washed away in the bath.');
  }
  (s as any).showerbaths_taken_today = ((s as any).showerbaths_taken_today ?? 0) + (1);
  if (((s as any).showerbaths_taken_today ?? 0) >= 10) {
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (8);
    scene.text('<center><b>Your skin is pruning excessively, maybe you shouldn\'t shower this often</b></center>');
  } else {
    if (((s as any).showerbaths_taken_today ?? 0) >= 5) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (2);
      scene.text('Your skin is starting to prune, maybe you shouldn\'t shower this often');
    }
  }
  if (((s as any).bodyVars ?? 0)?.['weight_warning'] > 0) {
    if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 1) {
    }
    if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
    }
    scene.text(`<center><b>You seem to be ${((s as any).weightwarn ?? 0)} weight.</b></center>`);
  }
  if (((s as any).normbuffpick ?? 0) === 1) {
    scene.text('');
    scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
    scene.actions([
      { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
    ]);
  }
  qspCall(s, 'din_van', 'dryOff');
  qspCall(s, 'selfplay', 'bathtub_dildo_check');
  qspCall(s, 'din_van', 'brit');
  if (((s as any).vanr_lock ?? 0) === 0  &&  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
    scene.text('In your absentmindedness, you have forgotten to close the door.');
    scene.text('The idea that the door is open occupies your mind while you are bathing. It would be very embarrassing if your brother or stepfather looked in at the wrong time.');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      qspCall(s, 'vanrPar', 'peek');
    }
  }
  scene.actions([
    { label: '"Wash" your pussy', handler: (st: GameState) => {
    if (((s as any).locM ?? 0) === 'uni_dorm'  &&  ((s as any).loc ?? 0) ==='vann'  &&  (Math.floor(Math.random() * 6) + 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['vann', 'v4'] }]);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash7.mp4');
    scene.text('You turn on the faucet, lift your legs and scoot your ass over to align your pussy with the jet of warm water. It feels really good and soon a warmth begins to grow in your abdomen.');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'arousal', 'clit_vibe', (-10), 'masturbate');
    qspCall(s, 'arousal', 'clit_vibe', 10, 'masturbate');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'din_van', 'dryOff');
  } },
    { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(s, 'telefon', 'Phone_selfie_image_bathing', 'bath');
  } },
  ]);
  scene.build();
}

function enterSkinCare(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_skincare')) {
    scene.actions([
      { label: 'Apply Moisturizer (0:05)', goto: ['din_van', 'skincare_do'] },
    ]);
  }
  scene.build();
}

function enterCanSkincare(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['moisturiser'] > 0  &&  ((s as any).moisturiser_time ?? 0) <= ((s as any).totminut ?? 0));
  scene.build();
}

function enterSkincareDo(s: GameState, scene: SceneBuilder): void {
  (s as any).mc_inventory['moisturiser'] = ((s as any).mc_inventory['moisturiser'] ?? 0) - (1);
  (s as any).moisturiser_time = ((s as any).totminut ?? 0) + 10 * 60;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/shared/home/bathroom/skincare.jpg');
  scene.text('You get out your skin care products and apply them, the creams feel cool and nice against your skin. You sometimes wonder if all this effort and money is worth it, but one look in the mirror at your skin and you figure it is.');
  qspCall(s, 'body', 'SkinGain', 'Moisturizer');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterBrit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lashair ?? 0) === 1) {
    (s as any).pcs_pubes = 0;
    (s as any).pcs_leghair = 0;
    return;
  }
  if (((s as any).pcs_shave ?? 0)?.['free_razor'] + ((s as any).mc_inventory ?? 0)?.['razor'] <= 0) {
    return;
  }
  if (((s as any).shave_menu ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['all']) {
    if (((s as any).pcs_leghair ?? 0) < 4  ||  ((s as any).pubestyle ?? 0) <= 0  ||  ((s as any).pcs_pubes ?? 0) < ((s as any).shave_trigger ?? 0)) {
      scene.text('<br>You don\'t need to shave.');
    } else {
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
          qspCall(s, 'mood', 'raise', 'tiny');
        } else {
          if (((s as any).pubestyle ?? 0) === 1) {
            if (((s as any).pcs_pubes ?? 0) > 10) {
            }
          } else {
            if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
              if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0) + 5) {
              }
            } else {
              if (((s as any).pubestyle ?? 0) === 9) {
                if (((s as any).pcs_pubes ?? 0) >= 26) {
                }
              } else {
                if (((s as any).pubestyle ?? 0) === 10) {
                  if (((s as any).pcs_pubes ?? 0) >= 40) {
                  }
                } else {
                  if (((s as any).pubestyle ?? 0) === 11) {
                    if (((s as any).pcs_pubes ?? 0) <= 10) {
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
  if (((s as any).shave_act ?? 0) !== '') {
    scene.actions([
      { label: '<<$shave_act>> (0:15)', handler: (st: GameState) => {
    if (((s as any).shave_length ?? 0) < 2) {
      if (((s as any).pcs_pubes ?? 0) <= 10) {
        scene.img('images/shared/home/bathroom/shave_stubble.mp4');
      } else {
        scene.img('images/shared/home/bathroom/shave_bush.mp4');
      }
    } else {
      scene.img('images/shared/home/bathroom/trim_bush.mp4');
    }
    // TODO-QSP: dynamic text: <<$shave_txt11>>
    scene.text(`${((s as any).shave_txt11 ?? 0)}`);
    // TODO-QSP: dynamic text: <<$shave_txt12>>
    scene.text(`${((s as any).shave_txt12 ?? 0)}`);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_leghair = 0;
    (s as any).stat['leg_hair_growth_timer'] = ((s as any).totminut ?? 0);
    (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    (s as any).stat['pube_growth_timer'] = ((s as any).totminut ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    if (((s as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      (s as any).pcs_shave['free_razor'] = 0;
    } else {
      (s as any).mc_inventory['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['all']);
    }
    qspCall(s, 'traits', 'body_hair_attitude', 'on_shave');
    qspCall(s, 'din_van', 'dryOff', 'shave');
    qspCall(s, 'selfplay', 'bathtub_dildo_check');
    qspCall(s, 'selfplay', 'shower_dildo_check');
  } },
    ]);
  }
  if ((((s as any).shave_menu ?? 0) === 2  ||  ((s as any).shave_menu ?? 0) === 1)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']) {
    if (((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)) {
      if (((s as any).pubestyle ?? 0) === 1) {
        if (((s as any).pcs_pubes ?? 0) <= 10) {
        }
      } else {
        if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
          if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0) + 5) {
          }
        } else {
          if (((s as any).pubestyle ?? 0) === 9) {
            if (((s as any).pcs_pubes ?? 0) >= 26) {
            }
          } else {
            if (((s as any).pubestyle ?? 0) === 10) {
              if (((s as any).pcs_pubes ?? 0) >= 40) {
              }
            } else {
              if (((s as any).pubestyle ?? 0) === 11) {
                if (((s as any).pcs_pubes ?? 0) <= 10) {
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).shave_act ?? 0) !== '') {
    scene.actions([
      { label: '<<$shave_act>> (0:10)', handler: (st: GameState) => {
    if (((s as any).shave_length ?? 0) < 2) {
      if (((s as any).pcs_pubes ?? 0) <= 10) {
        scene.img('images/shared/home/bathroom/shave_stubble.mp4');
      } else {
        scene.img('images/shared/home/bathroom/shave_bush.mp4');
      }
    } else {
      scene.img('images/shared/home/bathroom/trim_bush.mp4');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_pubes = ((s as any).shave_length ?? 0);
    (s as any).stat['pube_growth_timer'] = ((s as any).totminut ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    if (((s as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      (s as any).pcs_shave['free_razor'] = 0;
    } else {
      (s as any).mc_inventory['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['pussy']);
    }
    // TODO-QSP: dynamic text: <<$shave_txt21>>
    scene.text(`${((s as any).shave_txt21 ?? 0)}`);
    // TODO-QSP: dynamic text: <<$shave_txt22>>
    scene.text(`${((s as any).shave_txt22 ?? 0)}`);
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      qspCall(s, 'traits', 'body_hair_attitude', 'on_shave');
    }
    qspCall(s, 'din_van', 'dryOff', 'shave');
    qspCall(s, 'selfplay', 'bathtub_dildo_check');
    qspCall(s, 'selfplay', 'shower_dildo_check');
  } },
    ]);
  }
  if ((((s as any).shave_menu ?? 0) === 3  ||  ((s as any).shave_menu ?? 0) === 1)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']) {
    if (((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Shave your legs (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_leghair = 0;
    (s as any).stat['leg_hair_growth_timer'] = ((s as any).totminut ?? 0);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'traits', 'body_hair_attitude', 'on_shave');
    if (((s as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      (s as any).pcs_shave['free_razor'] = 0;
    } else {
      (s as any).mc_inventory['razor'] = ((s as any).mc_inventory['razor'] ?? 0) - (((s as any).razors_to_use ?? 0)?.['legs']);
    }
    scene.img('images/shared/home/bathroom/shave.jpg');
    if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.text('You can\'t shake off the fact that you\'re a girl now, so you decide it\'d be best to shave your legs. You begin to lather your legs, still marveling at how soft and round they are. Then you take the razor in your hand and begin to shave your legs.');
      scene.text('You feel really awkward, never having done this before as a guy. Luckily, you had more than enough experience with shaving your face and technically this isn\'t really all that different. In the end, you get a pretty decent job done.');
    } else {
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('With a newfound routine you lather up your legs and start shaving, careful not to miss a spot. After washing away the foam you softly glide your hands over your smooth legs, feeling good to know that you don\'t need to hide your legs in pants. Maybe you should wear a skirt tomorrow?');
      } else {
        scene.text('You lather your legs up with some soapy water and shave your legs. After a few swift movements, your legs are smooth as silk. The feeling of your smooth legs turns you on a little.');
      }
    }
    qspCall(s, 'din_van', 'dryOff', 'shave');
    qspCall(s, 'selfplay', 'bathtub_dildo_check');
    qspCall(s, 'selfplay', 'shower_dildo_check');
  } },
      ]);
    }
  }
  scene.build();
}

function enterCanShave(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).lashair ?? 0) !== 1  &&  ((s as any).pcs_shave ?? 0)?.['free_razor'] + ((s as any).mc_inventory ?? 0)?.['razor'] > 0  &&  (((((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 3)  &&  ((s as any).pcs_leghair ?? 0) >= 4  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs'])  ||  ((((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 2)  &&  ((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy'])));
  scene.build();
}

function enterTampon(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_tampon_pad')) {
    scene.actions([
      { label: 'Use a sanitary pad (0:02)', goto: ['din_van', 'tampon_pad_do'] },
    ]);
  }
  if (qspFunc(s, 'din_van', 'can_tampon_tampon')) {
    scene.actions([
      { label: 'Use a tampon (0:02)', goto: ['din_van', 'tampon_tampon_do'] },
    ]);
  }
  scene.build();
}

function enterCanTamponPad(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) !== 'none');
  scene.build();
}

function enterCanTamponTampon(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0)));
  scene.build();
}

function enterCanTampon(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (qspFunc(s, 'din_van', 'can_tampon_pad')  ||  qspFunc(s, 'din_van', 'can_tampon_tampon'));
  scene.build();
}

function enterTamponPadDo(s: GameState, scene: SceneBuilder): void {
  (s as any).mc_inventory['sanitary_pads'] = ((s as any).mc_inventory['sanitary_pads'] ?? 0) - (1);
  (s as any).isprokp = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img(`images/pc/body/pee/period/pad/${Math.floor(Math.random() * 2) + 2}.jpg`);
  scene.text('You use a sanitary pad.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterTamponTamponDo(s: GameState, scene: SceneBuilder): void {
  (s as any).mc_inventory['tampons'] = ((s as any).mc_inventory['tampons'] ?? 0) - (1);
  (s as any).isprok = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/pee/period/tampon/6.jpg');
  scene.text('You use a tampon.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterTamponDo(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_tampon_tampon')) {
    scene.actions([{ label: 'Continue', goto: ['din_van', 'tampon_tampon_do'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['din_van', 'tampon_pad_do'] }]);
  }
  scene.build();
}

function enterCanQuickwash(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > 0);
  scene.build();
}

function enterQuickwashDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + ((s as any).rand ?? 0)(0, 4);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + ((s as any).rand ?? 0)(0, 4));
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/wash5.jpg');
  scene.text('You give yourself a catlick, thus removing any traces of cum.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterQuickwash(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_quickwash')) {
    scene.actions([
      { label: 'Quick wash (0:15)', goto: ['din_van', 'quickwash_do'] },
    ]);
  }
  if (((s as any).cumloc ?? 0)[0]+((s as any).cumloc ?? 0)[3] > 0) {
    if (qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
        scene.actions([
          { label: 'Let the cum drain from you (0:10)', handler: (st: GameState) => {
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${Math.floor(Math.random() * 2) + 3}.jpg`);
    scene.text('You spend minutes waiting between the sudden gushes of semen pouring out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
          qspCall(s, 'willpower', 'misc', 'self', 'hard');
        } else {
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Let the cum drain from you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Let the cum drain from you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${Math.floor(Math.random() * 2) + 3}.jpg`);
    scene.text('You fight the irrational urge to keep it inside you, and spend several minutes waiting between the sudden gushes draining out.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  qspCall(s, 'din_van', 'pblc_pee');
  scene.build();
}

function enterWearpan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Wear panties (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'panty_view', 'view_grid', 'bathroom'
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Wear a bra (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'bra_view', 'view_grid', 'bathroom'
  } },
    ]);
  }
  scene.build();
}

function enterRemovepan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove underwear (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'underwear', 'remove');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove panties (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'remove');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove bra (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'bras', 'remove');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterPublicpan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
      (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
    }
    qspCall(s, 'underwear', 'remove');
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    scene.actions([
      { label: 'Remove underwear [+iif(bag = 1, \' and put it in your purse ...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pursepantytype ?? 0) !== ''  &&  ((s as any).pursebratype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your underwear back on (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'wear', ((s as any).pursepantytype ?? 0), ((s as any).pursepantynumber ?? 0));
    qspCall(s, 'bras', 'wear', ((s as any).pursebratype ?? 0), ((s as any).pursebranumber ?? 0));
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
    }
    qspCall(s, 'panties', 'remove');
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    scene.actions([
      { label: 'Remove panties [+iif(bag = 1, \' and put them in your purs...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).pursepantytype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your panties back on (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'panties', 'wear', ((s as any).pursepantytype ?? 0), ((s as any).pursepantynumber ?? 0));
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
    }
    qspCall(s, 'bras', 'remove');
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    scene.actions([
      { label: 'Remove bra [+iif(bag = 1, \' and put it in your purse ...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pursebratype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your bra back on (0:02)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    qspCall(s, 'bras', 'wear', ((s as any).pursebratype ?? 0), ((s as any).pursebranumber ?? 0));
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).prostitute ?? 0)?.['active'] === 1  &&  ((s as any).locArgs?.[1] ?? 0) !== 'no_prost'  &&  ((s as any).loc ?? 0) !== 'gschool_break') {
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
      scene.actions([
        { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_to_work', 'restroom'
  } },
      ]);
    } else {
      if (((s as any).prostitute ?? 0)?.['work_clothes']  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
        scene.actions([
          { label: 'Change into your regular clothes', handler: (st: GameState) => {
    // TODO-QSP: gt 'prostitution_functions', 'change_back', 'restroom'
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterBasin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cumloc ?? 0)[12] === 1) {
    scene.actions([
      { label: 'Rinse your mouth (0:05)', handler: (st: GameState) => {
    qspCall(s, 'cum_cleanup', '', 2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You rinse your mouth and get rid of the taste of cum.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).cumloc ?? 0)[13] === 1) {
    scene.actions([
      { label: 'Wash the cum from your hands (0:05)', handler: (st: GameState) => {
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You wash your hands and get rid of any trace of cum.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).cumloc ?? 0)[11] === 1  &&  ((s as any).cumloc ?? 0)[16] === 1) {
    scene.actions([
      { label: 'Wash the cum from your face and hair (0:10)', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 12;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_hairbsh = 0;
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/facewash.jpg');
    scene.text('You clean your face and hair and get rid of any trace of cum.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).cumloc ?? 0)[11] === 1  &&  ((s as any).cumloc ?? 0)[16] === 0) {
      scene.actions([
        { label: 'Wash the cum from your face (0:05)', handler: (st: GameState) => {
    (s as any).pcs_makeup = 1;
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 11;
    qspCall(s, 'cum_cleanup', '');
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/facewash.jpg');
    scene.text('You clean your face and get rid of any trace of cum.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).cumloc ?? 0)[11] === 0  &&  ((s as any).cumloc ?? 0)[16] === 1) {
        scene.actions([
          { label: 'Wash the cum out of your hair (0:10)', handler: (st: GameState) => {
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 5;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_hairbsh = 0;
    if (((s as any).pcs_sweat ?? 0) > 19) {
      (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (5);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.text('You clean your hair and get rid of any trace of cum.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).cumloc ?? 0)[2] === 1  ||  ((s as any).cumloc ?? 0)[5] === 1  ||  ((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
    scene.actions([
      { label: 'Wash the cum off your clothes (0:10)', handler: (st: GameState) => {
    (s as any).cumspclnt = 9;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 6;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/frotsp.jpg');
    scene.text('You spend ten minutes wiping and rinsing the cum stains out of your clothes. In the end, all that remains of the stains are some damp spots that should dry up in a few minutes.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).cumloc ?? 0)[0]+((s as any).cumloc ?? 0)[3] > 0) {
    if (qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
        scene.actions([
          { label: 'Let the cum drain from you (0:10)', handler: (st: GameState) => {
    (s as any).cumspclnt = 15;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${Math.floor(Math.random() * 2) + 3}.jpg`);
    scene.text('You spend minutes waiting between the sudden gushes of semen pouring out of you.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
          qspCall(s, 'willpower', 'misc', 'self', 'hard');
        } else {
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Let the cum drain from you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Let the cum drain from you [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).cumspclnt = 15;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${Math.floor(Math.random() * 2) + 3}.jpg`);
    scene.text('You fight the irrational urge to keep it inside you, and spend several minutes waiting between the sudden gushes draining out.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).body_write ?? 0) > 0  ||  ((s as any).face_write ?? 0) > 0) {
    scene.actions([
      { label: 'Wash the writings off your body (0:10)', handler: (st: GameState) => {
    (s as any).body_write = 0;
    (s as any).face_write = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/wash1.jpg');
    scene.text('You wash off the indecent inscriptions on your body.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, 'din_van', 'can_removemakeup')) {
    scene.actions([
      { label: 'Wash off cosmetics (0:05)', goto: ['din_van', 'removemakeup_do'] },
    ]);
  }
  if (qspFunc(s, 'din_van', 'can_removelashes')) {
    scene.actions([
      { label: 'Remove false lashes (0:05)', goto: ['din_van', 'removelashes_do'] },
    ]);
  }
  if (qspFunc(s, 'din_van', 'can_deodorant')) {
    scene.actions([
      { label: 'Apply deodorant (0:01)', goto: ['din_van', 'deodorant_do'] },
    ]);
  }
  if (((s as any).KandidozOnce ?? 0) === 1  &&  ((s as any).KandidNapr ?? 0) > 0) {
    scene.actions([
      { label: 'Use antifungal Medication', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).KandidNapr = ((s as any).KandidNapr ?? 0) - (1);
    (s as any).Kandidoz = ((s as any).Kandidoz ?? 0) - (5);
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/kitchen/lekr2.jpg');
    scene.text('You take the large pill with some water, this should help you infection.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterCanRemovemakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0)));
  scene.build();
}

function enterRemovemakeupDo(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 9;
  qspCall(s, 'cum_cleanup', '');
  (s as any).cumspclnt = 11;
  qspCall(s, 'cum_cleanup', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You wash off your makeup.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanRemovelashes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).false_lashes ?? 0) >= 1);
  scene.build();
}

function enterRemovelashesDo(s: GameState, scene: SceneBuilder): void {
  scene.text('You carefully peel off the glued-on strip, careful to protect your natural lashes.');
  (s as any).lashsavechance = Math.floor(Math.random() * 5) + 0;
  if (((s as any).lashsavechance ?? 0) === 4) {
    scene.text('These lashes still look to be in pretty good shape; you could probably use them again.');
    if (((s as any).pcs_lashes ?? 0) === 4) {
      (s as any).fakelashesmink = ((s as any).fakelashesmink ?? 0) + (1);
    }
    if (((s as any).pcs_lashes ?? 0) === 3) {
      (s as any).fakelashesplain = ((s as any).fakelashesplain ?? 0) + (1);
    }
  }
  (s as any).pcs_lashes = ((s as any).pcs_naturallashes ?? 0);
  (s as any).false_lashes = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'AppearanceSystem', 'UpdateBaseAppearance');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanDeodorant(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0)));
  scene.build();
}

function enterDeodorantDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
  qspCall(s, 'sweat', 'deo');
  qspCall(s, 'stat', '');
  // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
  scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanEnema(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  ||  (Array.isArray((s as any).sparrloc) ? ((s as any).sparrloc as any[]).indexOf(3) : -1) > 0));
  scene.build();
}

function enterEnemaDo(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 7;
  qspCall(s, 'cum_cleanup', '');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).klismaday = ((s as any).daystart ?? 0);
  (s as any).klismaday1 = 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/klisma.jpg');
  scene.text('You give yourself an enema, feeling clean down there. Your ass is now ready for anal sex without any awkward surprises.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterEnema(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_enema')) {
    scene.actions([
      { label: 'Give yourself an enema (0:05)', goto: ['din_van', 'enema_do'] },
    ]);
  }
  if (((s as any).cumloc ?? 0)[0]+((s as any).cumloc ?? 0)[3] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1) {
      if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
        scene.actions([
          { label: 'Wash up cum from your insides (0:05)', handler: (st: GameState) => {
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 3;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/klisma.jpg');
    scene.text('You give yourself a quick enema, feeling clean down there.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
          qspCall(s, 'willpower', 'misc', 'self', 'hard');
        } else {
          qspCall(s, 'willpower', 'misc', 'self', 'medium');
        }
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Wash up cum from your insides [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Wash up cum from your insides [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(s, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).cumspclnt = 15;
    qspCall(s, 'cum_cleanup', '');
    (s as any).cumspclnt = 3;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/shared/home/bathroom/klisma.jpg');
    scene.text('You fight the irrational urge to keep it inside you, and give yourself a quick enema, feeling clean down there.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterToymanage(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_buttplug_out')) {
    scene.actions([
      { label: 'Remove your butt plug (0:05)', goto: ['din_van', 'buttplug_out_do'] },
    ]);
  } else {
    if (qspFunc(s, 'din_van', 'can_buttplug_in')) {
      scene.actions([
        { label: 'Insert your butt plug (0:05)', goto: ['din_van', 'buttplug_in_do'] },
      ]);
    }
  }
  if (qspFunc(s, 'din_van', 'can_vibe_out')) {
    scene.actions([
      { label: 'Remove the vibrator (0:05)', goto: ['din_van', 'vibe_out_do'] },
    ]);
  } else {
    if (qspFunc(s, 'din_van', 'can_vibe_in')) {
      scene.actions([
        { label: 'Insert the vibrator in your vagina (0:05)', goto: ['din_van', 'vibe_in_do'] },
      ]);
    }
  }
  scene.build();
}

function enterCanButtplugOut(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  ((s as any).analPlugIn ?? 0) === 1);
  scene.build();
}

function enterButtplugOutDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = 0;
  if (((s as any).pcs_ass ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/analplug.jpg');
  // TODO-QSP: 'You squat and tug gently at the butt plug, gasping as you push it out. You can''t help but feel a b...
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanButtplugIn(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  (!((s as any).analPlugIn ?? 0)));
  scene.build();
}

function enterButtplugInDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).analPlugIn = 1;
  (s as any).analPlugOut = 0;
  if (((s as any).pcs_ass ?? 0) < 10) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 5);
  }
  if (((s as any).pcs_ass ?? 0) >= 10  &&  ((s as any).pcs_ass ?? 0) < 20) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', Math.floor(Math.random() * 2) + 1);
  }
  if (((s as any).pcs_ass ?? 0) >= 20  &&  ((s as any).pcs_ass ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', Math.floor(Math.random() * 2) + 0);
  }
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/analplug.jpg');
  if ((!((s as any).butpluguse ?? 0))) {
    (s as any).butpluguse = 1;
    scene.text('"If I\'m not going to use it, then why did I buy it?" you ask yourself. You look at the butt plug for a while, thinking "It is necessary to start developing my ass so I can have great adventures someday… You could even say huge and thick adventures with crimson heads…" You\'re slightly embarrassed at the thought for a second, but are then overcome by your horny fantasies. Determined to get the plug all the way in, you lubricate your anus with your saliva and push the butt plug against it. It hurts a bit at first, but once the thickest part is in the rest follows rather easily. Patting yourself on your ass once it\'s in, you wonder if anyone will notice you\'re wearing it and then immediately feel naughty for even having thought that.');
  } else {
    scene.text('You squat and gently rub the butt plug against your anus after lubricating it with a bit of saliva. After a few minutes, you\'ve relaxed enough to be able to push it in. Once it\'s in, you give it a few gentle tugs, wondering if anyone will catch you wearing it today.');
  }
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanVibeOut(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['vibe'] === 1  &&  ((s as any).vibratorIN ?? 0) === 1);
  scene.build();
}

function enterVibeOutDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).vibratorIN = 0;
  if (((s as any).pcs_vag ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/sextoys/vibrator.jpg');
  scene.text('You spread your legs and take the vibrator out of your pussy, letting out a slight moan as you do so. You feel somewhat empty now.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanVibeIn(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['vibe'] === 1  &&  ((s as any).vibratorIN ?? 0) === 0  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0);
  scene.build();
}

function enterVibeInDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).vibratorIN = 1;
  if (((s as any).pcs_vag ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  }
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/sextoys/vibrator.jpg');
  scene.text('You spread your legs and slowly insert the vibrator in your pussy, wondering if anyone will notice you wearing it today.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterPalelady(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    // TODO-QSP: 'You have enough cocaine for <<mc_inventory[''cocaine'']>> ' + iif(mc_inventory['cocaine'] = 1, ' li...
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Do a line of cocaine (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine');
    qspCall(s, 'stat', '');
    if (((s as any).locclass ?? 0) === 'restroom'  ||  ((s as any).location_type ?? 0) === 'restroom') {
      scene.img('images/shared/drugs/public_rr_coke.jpg');
      scene.text('You go into a stall sit down and snort some cocaine, feeling dizzy for just a moment. After that you feel fantastic, and incredibly horny.');
    } else {
      scene.img('images/shared/drugs/dur.jpg');
      scene.text('You snort some cocaine, feeling dizzy for just a moment. After that you feel fantastic, and incredibly horny.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterPrivate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lashair ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
    // TODO-QSP: dynamic text: Your disposable razors are good for <b><<mc_inventory['razor']>></b> more shaves...
    scene.text(`Your disposable razors are good for <b>${((s as any).mc_inventory ?? 0)?.['razor']}</b> more shaves. <a href="exec:gs 'din_van', 'shave_options'">Shave Options</a>`);
    if (((s as any).mc_inventory ?? 0)?.['razor'] <= 2  &&  ((s as any).razor ?? 0)?.['warning'] < ((s as any).daystart ?? 0)) {
      (s as any).razor['warning'] = ((s as any).daystart ?? 0) + 5;
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['chafing_cream'] > 0) {
    // TODO-QSP: dynamic text: On a shelf is a tube of ointment for chafing, which will be enough for <b><<mc_i...
    scene.text(`On a shelf is a tube of ointment for chafing, which will be enough for <b>${((s as any).mc_inventory ?? 0)?.['chafing_cream']}</b> applications.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['moisturiser'] > 0) {
    // TODO-QSP: dynamic text: You look at your moisturiser and think you have about <b><<mc_inventory['moistur...
    scene.text(`You look at your moisturiser and think you have about <b>${((s as any).mc_inventory ?? 0)?.['moisturiser']}</b> applications left.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
    scene.text('<center><b>You have no feminine hygiene products left.</b></center>');
  } else {
    if (((s as any).tampon ?? 0)?.['warning'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).mc_inventory ?? 0)?.['tampons'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
        (s as any).tampon['warning'] = ((s as any).daystart ?? 0);
        // TODO-QSP: $temp_tamp_text
      } else {
        if (((s as any).mc_inventory ?? 0)?.['tampons'] === 1) {
          (s as any).tampon['warning'] = ((s as any).daystart ?? 0);
        } else {
          if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
            (s as any).tampon['warning'] = ((s as any).daystart ?? 0);
          }
        }
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['tampons'] === 0) {
      scene.text('You have <b>no</b> tampons left.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['tampons'] === 1) {
        scene.text('You only have <b>1</b> tampon left.');
      } else {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory['tampons']>></b> tampons.
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['tampons']}</b> tampons.`);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
      scene.text('You have <b>no</b> pads left.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
        scene.text('You have only <b>1</b> pads left.');
      } else {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory['sanitary_pads']>></b> pads.
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['sanitary_pads']}</b> pads.`);
      }
    }
  }
  // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['de...
  if (((s as any).locArgs?.[1] ?? 0) === 'HotelRoom') {
    qspCall(s, 'din_van', 'shower');
    if (((s as any).locArgs?.[2] ?? 0) === 'bath') {
      qspCall(s, 'din_van', 'bath');
    }
  } else {
    if (((s as any).loc ?? 0) === 'vanrPar') {
      scene.text('You can use your parent\'s shampoo.');
      qspCall(s, 'din_van', 'shower');
      qspCall(s, 'din_van', 'bath');
    } else {
      if (((s as any).loc ?? 0) === 'LariskaHome') {
        scene.text('You can use Lariska\'s shampoo.');
        qspCall(s, 'din_van', 'shower');
        qspCall(s, 'din_van', 'bath');
      } else {
        if (((s as any).loc ?? 0) === 'tanvanr') {
          scene.text('You can use Tanya\'s shampoo.');
          qspCall(s, 'din_van', 'shower');
          qspCall(s, 'din_van', 'bath');
        } else {
          if (((s as any).loc ?? 0) === 'uni_dorm'  &&  ((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
            // TODO-QSP: dynamic text: You have enough shampoo for <b><<mc_inventory['shampoo']>></b> uses.
            scene.text(`You have enough shampoo for <b>${((s as any).mc_inventory ?? 0)?.['shampoo']}</b> uses.`);
            qspCall(s, 'din_van', 'shower');
          } else {
            if (((s as any).loc ?? 0) === 'gad_gpbath') {
            } else {
              if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
                // TODO-QSP: dynamic text: You have enough shampoo for <b><<mc_inventory['shampoo']>></b> uses.
                scene.text(`You have enough shampoo for <b>${((s as any).mc_inventory ?? 0)?.['shampoo']}</b> uses.`);
                qspCall(s, 'din_van', 'shower');
                qspCall(s, 'din_van', 'bath');
              } else {
                scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'din_van', 'SkinCare');
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
    // TODO-QSP: 'You have <b><<mc_inventory[''painkillers'']>></b> painkiller'+iif(mc_inventory['painkillers'] > 1, ...
    if (((s as any).pain ?? 0)?.['total'] > 0) {
      // TODO-QSP: act $func('drugs', 'painkiller_act_str'):
      qspCall(s, 'drugs', 'painkiller');
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
      qspCall(s, 'stat', '');
      scene.text('You take a painkiller and gulp it down with a glass of water.');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'showerdin':
      enterShowerdin(s, scene);
      break;
    case 'bteeth':
      enterBteeth(s, scene);
      break;
    case 'can_bteeth':
      enterCanBteeth(s, scene);
      break;
    case 'bteeth_do':
      enterBteethDo(s, scene);
      break;
    case 'brush_teeth':
      enterBrushTeeth(s, scene);
      break;
    case 'dryOff':
      enterDryOff(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'can_shower':
      enterCanShower(s, scene);
      break;
    case 'shower_do':
      enterShowerDo(s, scene);
      break;
    case 'bath':
      enterBath(s, scene);
      break;
    case 'can_bath':
      enterCanBath(s, scene);
      break;
    case 'bath_do':
      enterBathDo(s, scene);
      break;
    case 'SkinCare':
      enterSkinCare(s, scene);
      break;
    case 'can_skincare':
      enterCanSkincare(s, scene);
      break;
    case 'skincare_do':
      enterSkincareDo(s, scene);
      break;
    case 'brit':
      enterBrit(s, scene);
      break;
    case 'can_shave':
      enterCanShave(s, scene);
      break;
    case 'tampon':
      enterTampon(s, scene);
      break;
    case 'can_tampon_pad':
      enterCanTamponPad(s, scene);
      break;
    case 'can_tampon_tampon':
      enterCanTamponTampon(s, scene);
      break;
    case 'can_tampon':
      enterCanTampon(s, scene);
      break;
    case 'tampon_pad_do':
      enterTamponPadDo(s, scene);
      break;
    case 'tampon_tampon_do':
      enterTamponTamponDo(s, scene);
      break;
    case 'tampon_do':
      enterTamponDo(s, scene);
      break;
    case 'can_quickwash':
      enterCanQuickwash(s, scene);
      break;
    case 'quickwash_do':
      enterQuickwashDo(s, scene);
      break;
    case 'quickwash':
      enterQuickwash(s, scene);
      break;
    case 'wearpan':
      enterWearpan(s, scene);
      break;
    case 'removepan':
      enterRemovepan(s, scene);
      break;
    case 'publicpan':
      enterPublicpan(s, scene);
      break;
    case 'basin':
      enterBasin(s, scene);
      break;
    case 'can_removemakeup':
      enterCanRemovemakeup(s, scene);
      break;
    case 'removemakeup_do':
      enterRemovemakeupDo(s, scene);
      break;
    case 'can_removelashes':
      enterCanRemovelashes(s, scene);
      break;
    case 'removelashes_do':
      enterRemovelashesDo(s, scene);
      break;
    case 'can_deodorant':
      enterCanDeodorant(s, scene);
      break;
    case 'deodorant_do':
      enterDeodorantDo(s, scene);
      break;
    case 'can_enema':
      enterCanEnema(s, scene);
      break;
    case 'enema_do':
      enterEnemaDo(s, scene);
      break;
    case 'enema':
      enterEnema(s, scene);
      break;
    case 'toymanage':
      enterToymanage(s, scene);
      break;
    case 'can_buttplug_out':
      enterCanButtplugOut(s, scene);
      break;
    case 'buttplug_out_do':
      enterButtplugOutDo(s, scene);
      break;
    case 'can_buttplug_in':
      enterCanButtplugIn(s, scene);
      break;
    case 'buttplug_in_do':
      enterButtplugInDo(s, scene);
      break;
    case 'can_vibe_out':
      enterCanVibeOut(s, scene);
      break;
    case 'vibe_out_do':
      enterVibeOutDo(s, scene);
      break;
    case 'can_vibe_in':
      enterCanVibeIn(s, scene);
      break;
    case 'vibe_in_do':
      enterVibeInDo(s, scene);
      break;
    case 'palelady':
      enterPalelady(s, scene);
      break;
    case 'private':
      enterPrivate(s, scene);
      break;
    default:
      enterShowerdin(s, scene);
      break;
  }
}

export const din_van: LocationDef = {
  name: 'din_van',
  title: 'Your skin is pruning excessively, maybe you shouldn\'t shower this often',
  region: 'other',
  locationType: 'restroom',
  description: ['You\'re careful enough that your false lashes make it through relatively unscathed.'],
  enter: enter,
};
