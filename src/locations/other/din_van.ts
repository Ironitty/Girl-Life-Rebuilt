import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  ((s as any).lactation = (s as any).lactation ?? {})['lactmess'] = 0;
  qspCall(s, 'sweat', 'shower');
  if ((!((s as any).noshampoo ?? 0))) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) - (1);
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] < 0) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = 0;
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
  // TODO-QSP: end
  scene.build();
}

function enterBteeth(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_bteeth')) {
    scene.actions([
      { label: 'Brush your teeth (0:03)', goto: ['din_van', 'bteeth_do'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanBteeth(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pcs_breath ?? 0) !== 1  ||  ((s as any).cumloc ?? 0)[12] === 1);
  // TODO-QSP: end
  scene.build();
}

function enterBteethDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrushTeeth(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    scene.img('images/shared/home/bathroom/brushteeth.mp4');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    scene.img('images/shared/home/bathroom/brushteeth.jpg');
  }
  scene.text('You brush your teeth and now they are clean and minty fresh.');
  // TODO-QSP: end
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
  ((s as any).teeth = (s as any).teeth ?? {})['brushed'] = ((s as any).teeth['brushed'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterDryOff(s: GameState, scene: SceneBuilder): void {
  (s as any).mirror_steam = ((s as any).hour ?? 0);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out and dry off', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a shower (0:15)', goto: ['din_van', 'shower_do'] },
  ]);
  scene.build();
}

function enterCanShower(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1;
  // TODO-QSP: end
  scene.build();
}

function enterShowerDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'tanvanr'  ||  ((s as any).loc ?? 0) === 'albinahome'  ||  ((s as any).loc ?? 0) === 'LariskaHome'  ||  ((s as any).hotelmc_inventory ?? 0)?.['shampoo'] === 1) {
    (s as any).noshampoo = 1;
  }
  (s as any).noshampoo_tmp = ((s as any).noshampoo ?? 0);
  (s as any).deodorant_on_tmp = ((s as any).deodorant_on ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerdin(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('You undress and turn on the water in the shower. When it hits the right temperature, you step into the shower and let the warm water rain down on you.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 6));
    scene.text('It\'s really arousing to see your new body with all its smooth curves, breasts with large nipples, wide hips and smooth legs. You begin to lather your body, noticing how soft and tender it feels. Once you\'re sure you haven\'t missed a single spot, you begin to wash yourself off, continuing to experience new and strange sensations.');
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 2));
      scene.text('You\'ve already gotten used to your feminine body and its softness doesn\'t surprise you very much anymore, but you still let your hands wander a bit over your soft curves before you begin to wash yourself in earnest.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      // TODO-QSP: dynamic text: ''+iif(noshampoo_tmp = 1, 'It''s not your shampoo, so you use a little more than...
      scene.text('' + ((((s as any).noshampoo_tmp ?? 0) === 1) ? ('It\'s not your shampoo, so you use a little more than you normally would; with a tinge of guilt you ') : ('Using your own shampoo, you carefully ')) + 'lather yourself up, trying not to miss any spots, and then wash off.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0  &&  ((s as any).noshampoo_tmp ?? 0) === 1) {
    scene.text('When you get a chance, you should stop by the supermarket and buy some shampoo.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 5) {
      // TODO-QSP: dynamic text: You are getting low on shampoo, with only <<mc_inventory[''shampoo'']>> remainin...
      scene.text(`You are getting low on shampoo, with only ${((s as any).mc_inventory ?? 0)?.['shampoo'] ?? ''} remaining. When you get a chance, you should stop by the supermarket and buy some more.`);
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
      (s as any).weightwarn = 'losing';
    }
    if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
      (s as any).weightwarn = 'gaining';
    }
    scene.text(`<center><b>You seem to be ${((s as any).weightwarn ?? '')} weight.</b></center>`);
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
      ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
    } else {
      if (((s as any).pcs_usedbreastpumponherself ?? 0) <= 0  &&  ((s as any).pcs_massagedherbreasts ?? 0) > 0) {
        scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk. Regularly massaging your breasts probably made you lactate!<br>');
        ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
      } else {
        if (((s as any).pcs_usedbreastpumponherself ?? 0) > 0  &&  ((s as any).pcs_massagedherbreasts ?? 0) > 0) {
          scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk. All that pumping and massaging your breasts probably caused you to lactate!<br>');
          ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 1;
        } else {
          scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. You find, to your surprise, that it is milk. You have started lactating!<br>');
          if (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
            scene.text('This is probably happening because you are pregnant.');
          } else {
            scene.text('You should have this checked out by a doctor. You could be pregnant.');
          }
          ((s as any).lactation = (s as any).lactation ?? {})['induced'] = 0;
        }
      }
    }
    (s as any).pcs_usedbreastpumponherself = 0;
    (s as any).pcs_massagedherbreasts = 0;
    ((s as any).lactation = (s as any).lactation ?? {})['pc_aware'] = 1;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDryOff(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).rapeday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).rape_shower ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Cry (react to rape)', handler: (st: GameState) => {
    (st as any).rape_shower = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 31) + 10));
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/cry.jpg');
    scene.text('The last of the suds run off of you, but you can still <i>feel it</i>.');
    scene.text('Your rapist\'s cock <i>inside</i> you.');
    scene.text('His cum <i>leaking</i> out of you.');
    scene.text('You grab the soap again and scrub yourself again, but it still feels like something is there, coating your skin. You scrub and scrub and scrub but it just won\'t go away until you finally cry out, throwing it into the corner. Tremors begin coursing through your body and you slowly sink down onto the shower floor, where you remain, sobbing while the water continues raining down on you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).pcs_horny ?? 0) >= 40) {
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 6) + 0) === 0  &&  ((st as any).locM ?? 0) === 'uni_dorm') {
      qspGoto(st, 'vann', 'v4');
    }
    scene.img('images/shared/home/bathroom/wash2.mp4');
    scene.text('You place the showerhead onto your pussy and a powerful jet of warm water begins to caress you.');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_vibe', (-10), 'masturbate');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_vibe', (-10), 'masturbate');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'clit_vibe', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] !== 0) {
      scene.text('You unconsciously avoid spraying water into your vagina.');
    } else {
      (st as any).cumspclnt = 8;
      qspCall(st, 'cum_cleanup', '');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  qspCall(s, 'selfplay', 'shower_dildo_check');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).vanr_lock ?? 0) === 0  &&  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
    scene.text('In your absentmindedness, you have forgotten to close the door.');
    scene.text('The idea that the door is open occupies your mind while you are showering. It would be very embarrassing if your brother or stepfather looked in at the wrong time.');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      qspCall(s, 'vanrPar', 'peek');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
  ]);
  scene.build();
}

function enterBath(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Soak in the bath (0:30)', goto: ['din_van', 'bath_do'] },
  ]);
  scene.build();
}

function enterCanBath(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1;
  // TODO-QSP: end
  scene.build();
}

function enterBathDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).pcs_sweat = 7 + (Math.floor(Math.random() * 5) + 0);
  qspCall(s, 'mood', 'raise', 'small');
  if (((s as any).loc ?? 0) === 'vanrPar'  ||  ((s as any).loc ?? 0) === 'tanvanr'  ||  ((s as any).loc ?? 0) === 'LariskaHome'  ||  ((s as any).hotelmc_inventory ?? 0)?.['shampoo'] === 1) {
    (s as any).noshampoo = 1;
  }
  (s as any).noshampoo_tmp = ((s as any).noshampoo ?? 0);
  (s as any).deodorant_on_tmp = ((s as any).deodorant_on ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShowerdin(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/wash4.jpg');
  scene.text('You undress while the bathtub fills up and dip a toe into the water. It is just the right temperature, so you climb in and let yourself sink into the warm water, moaning softly as you feel your muscles start to relax.');
  if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 6));
    scene.text('You stare at the smooth, soft legs sticking out of the water. You\'re still not used to this new body and the look of all this roundness.');
    scene.text('As you start to soap yourself, you unwittingly turn your attention to your breasts. They\'re so soft and big, and when you touch them you feel an unfamiliar but pleasant sensation. You take your time getting familiar with your new body, then you begin to wash yourself in earnest.');
  } else {
    if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 5) + 2));
      scene.text('You have become a little accustomed to your female body and casually soap up all these soft curves and rinse yourself off, rubbing your hands all over your feminine body to make sure you didn\'t miss a spot.');
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((Math.floor(Math.random() * 3) + 0));
      // TODO-QSP: dynamic text: 'You lean back and relax for a while. '+iif(noshampoo_tmp = 1, 'It''s not your s...
      scene.text('You lean back and relax for a while. ' + ((((s as any).noshampoo_tmp ?? 0) === 1) ? ('It\'s not your shampoo, so you use a little more than you normally would; with a tinge of guilt you ') : ('Using your own shampoo, you carefully ')) + 'begin to lather your body, gently gliding your soft hands over your smooth curves, and wash yourself thoroughly.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0  &&  ((s as any).noshampoo_tmp ?? 0) === 1) {
    scene.text('When you get a chance, you should stop by the supermarket and buy some shampoo.');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 5) {
      // TODO-QSP: dynamic text: You are getting low on shampoo, with only <<mc_inventory[''shampoo'']>> remainin...
      scene.text(`You are getting low on shampoo, with only ${((s as any).mc_inventory ?? 0)?.['shampoo'] ?? ''} remaining. When you get a chance, you should stop by the supermarket and buy some more.`);
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
      (s as any).weightwarn = 'losing';
    }
    if (((s as any).bodyVars ?? 0)?.['weight_warning'] === 2) {
      (s as any).weightwarn = 'gaining';
    }
    scene.text(`<center><b>You seem to be ${((s as any).weightwarn ?? '')} weight.</b></center>`);
  }
  if (((s as any).normbuffpick ?? 0) === 1) {
    scene.text('');
    scene.text('<b>You notice that your muscles are starting to show through your skin.</b>');
    scene.actions([
      { label: 'Examine yourself closer while drying off and getting dressed…', goto: ['din_van', 'buffpick'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDryOff(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'selfplay', 'bathtub_dildo_check');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).vanr_lock ?? 0) === 0  &&  ((s as any).home_name ?? 0)?.[String((s as any).loc ?? 0)] === 'parents_home') {
    scene.text('In your absentmindedness, you have forgotten to close the door.');
    scene.text('The idea that the door is open occupies your mind while you are bathing. It would be very embarrassing if your brother or stepfather looked in at the wrong time.');
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
      qspCall(s, 'vanrPar', 'peek');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"Wash" your pussy', handler: (st: GameState) => {
    if (((st as any).locM ?? 0) === 'uni_dorm'  &&  ((st as any).loc ?? 0) ==='vann'  &&  (Math.floor(Math.random() * 6) + 0) === 1) {
      qspGoto(st, 'vann', 'v4');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/shared/home/bathroom/wash7.mp4');
    scene.text('You turn on the faucet, lift your legs and scoot your ass over to align your pussy with the jet of warm water. It feels really good and soon a warmth begins to grow in your abdomen.');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    }
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_vibe', (-10), 'masturbate');
    (st as any).orgasm_or = '';
    qspCall(st, 'arousal', 'clit_vibe', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'bath');
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
  // TODO-QSP: end
  scene.build();
}

function enterCanSkincare(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['moisturiser'] > 0  &&  ((s as any).moisturiser_time ?? 0) <= ((s as any).totminut ?? 0));
  // TODO-QSP: end
  scene.build();
}

function enterSkincareDo(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['moisturiser'] = ((s as any).mc_inventory['moisturiser'] ?? 0) - (1);
  (s as any).moisturiser_time = ((s as any).totminut ?? 0) + 10 * 60;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/shared/home/bathroom/skincare.jpg');
  scene.text('You get out your skin care products and apply them, the creams feel cool and nice against your skin. You sometimes wonder if all this effort and money is worth it, but one look in the mirror at your skin and you figure it is.');
  qspCall(s, 'body', 'SkinGain', 'Moisturizer');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
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
  (s as any).shave_act = '';
  if (((s as any).shave_menu ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['all']) {
    if (((s as any).pcs_leghair ?? 0) < 4  ||  ((s as any).pubestyle ?? 0) <= 0  ||  ((s as any).pcs_pubes ?? 0) < ((s as any).shave_trigger ?? 0)) {
      scene.text('<br>You don\'t need to shave.');
    } else {
      (s as any).shave_act = 'Shave your legs and pussy';
      if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 9  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        (s as any).shave_txt11 = 'You can\'t shake off the fact that you\'re a girl now, so you decide it\'d be best to shave your legs. You begin to lather your legs, still marveling at how soft and round they are. Then you take the razor in your hand and begin to shave your legs.';
        (s as any).shave_txt12 = 'You feel really awkward, never having done this before as a guy. Luckily, you had more than enough experience with shaving your face and technically this isn\'t really all that different. In the end, you get a pretty decent job done.';
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).daystart_start ?? 0) < 29  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg') {
          qspCall(s, 'mood', 'raise', 'tiny');
          (s as any).shave_txt11 = 'With a newfound routine you lather up your legs and start shaving, careful not to miss a spot. After washing away the foam you softly glide your hands over your smooth legs, feeling good to know that you don\'t need to hide your legs in pants. Maybe you should wear a skirt tomorrow?';
        } else {
          if (((s as any).pubestyle ?? 0) === 1) {
            if (((s as any).pcs_pubes ?? 0) > 10) {
              (s as any).shave_txt11 = 'You do your legs first before lathering up your crotch and taking a razor to the bush growing there. After a few minutes of shaving, you take a moment to inspect yourself, making sure you got everything.';
              (s as any).shave_txt12 = 'Satisfied there isn\'t even a single hair left, you rinse yourself off, enjoying the newfound smoothness of your pussy.';
            } else {
              (s as any).shave_txt11 = 'You lather up your legs and crotch, grabbing your razor and carefully scraping away stubble that is growing from them.';
              (s as any).shave_txt12 = 'After a few minutes of work, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble left. Satisfied, you rinse yourself off, smiling in relief that your pussy is silky smooth once again.';
            }
          } else {
            if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
              if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0) + 5) {
                (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once finished, you lather up your crotch and start shaving away the edges of your pubic hair. After a few minutes, you\'ve given your pussy a perfect hairdoo and rinse off the rest of the soap, admiring your new sexual fashion before deciding what to do next.';
              } else {
                (s as any).shave_act = 'Shave your legs and trim your bush';
                (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once finished, you spend some time cleaning up the area around your styled pubic hair, trimming back stubble and hair until it\'s neat and tidy again.';
              }
            } else {
              if (((s as any).pubestyle ?? 0) === 9) {
                (s as any).shave_act = 'Shave your legs and maintain your bush';
                if (((s as any).pcs_pubes ?? 0) >= 26) {
                  (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once you\'re finished, you spend some time maintaining your bush and your bikini lines, until it is a neat and tidy lawn of hair.';
                } else {
                  (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once you\'re finished, you spend some time maintaining your bush, keeping it short and neat.';
                }
              } else {
                if (((s as any).pubestyle ?? 0) === 10) {
                  (s as any).shave_act = 'Shave your legs and trim your bush';
                  if (((s as any).pcs_pubes ?? 0) >= 40) {
                    (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once you\'re finished, you spend some time hacking back the wild jungle covering your crotch. Soon enough, you\'re left with a sophisticated and tidy bush of hair that neatly carpets your pussy.';
                  } else {
                    (s as any).shave_txt11 = 'You lather up your legs and carefully shave them. Once you\'re finished, you spend some time maintaining your bush, keeping it neat and tidy.';
                  }
                } else {
                  if (((s as any).pubestyle ?? 0) === 11) {
                    if (((s as any).pcs_pubes ?? 0) <= 10) {
                      (s as any).shave_txt11 = 'You do your legs first before realizing that the stubble growing around your pussy is starting to become irritating and you can\'t put it off any longer. Lathering yourself up, you grab your razor and carefully scrape away the rough itchy hairs have been bothering you so.';
                      (s as any).shave_txt12 = 'After a few minutes of work, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, smiling in relief that your pussy is smooth once again.';
                    } else {
                      (s as any).shave_txt11 = 'You do your legs first before lathering up your crotch and taking a razor to the hair growing there. After a few minutes of shaving, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, enjoying the newfound smoothness of your pussy.';
                    }
                  } else {
                    (s as any).shave_act = '';
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
      { label: '', labelFn: (s: GameState) => String(((s as any).shave_act ?? '') ?? '') + ' (0:15)', handler: (st: GameState) => {
    if (((st as any).shave_length ?? 0) < 2) {
      if (((st as any).pcs_pubes ?? 0) <= 10) {
        scene.img('images/shared/home/bathroom/shave_stubble.mp4');
      } else {
        scene.img('images/shared/home/bathroom/shave_bush.mp4');
      }
    } else {
      scene.img('images/shared/home/bathroom/trim_bush.mp4');
    }
    // TODO-QSP: dynamic text: <<$shave_txt11>>
    scene.text(`${((st as any).shave_txt11 ?? '')}`);
    // TODO-QSP: dynamic text: <<$shave_txt12>>
    scene.text(`${((st as any).shave_txt12 ?? '')}`);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_leghair = 0;
    ((st as any).stat = (st as any).stat ?? {})['leg_hair_growth_timer'] = ((st as any).totminut ?? 0);
    (st as any).pcs_pubes = ((st as any).shave_length ?? 0);
    ((st as any).stat = (st as any).stat ?? {})['pube_growth_timer'] = ((st as any).totminut ?? 0);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    if (((st as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      ((st as any).pcs_shave = (st as any).pcs_shave ?? {})['free_razor'] = 0;
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['razor'] = ((st as any).mc_inventory['razor'] ?? 0) - (((st as any).razors_to_use ?? 0)?.['all']);
    }
    qspCall(st, 'traits', 'body_hair_attitude', 'on_shave');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'shave']; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'selfplay', 'bathtub_dildo_check');
    qspCall(st, 'selfplay', 'shower_dildo_check');
  } },
    ]);
  }
  (s as any).shave_act = '';
  if ((((s as any).shave_menu ?? 0) === 2  ||  ((s as any).shave_menu ?? 0) === 1)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy']) {
    if (((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)) {
      (s as any).shave_act = 'Shave your pussy';
      if (((s as any).pubestyle ?? 0) === 1) {
        if (((s as any).pcs_pubes ?? 0) <= 10) {
          (s as any).shave_txt21 = 'You lather up yourself up, and grab your razor, carefully scraping away stubble that is growing from your crotch.';
          (s as any).shave_txt22 = 'After a few minutes of work, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, smiling in relief that your pussy is silky smooth once again.';
        } else {
          (s as any).shave_txt21 = 'You lather up your crotch and take a razor to the hair growing there. After a few minutes of shaving, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, enjoying the newfound smoothness of your pussy.';
        }
      } else {
        if ((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <= 8)  ||  ((s as any).pubestyle ?? 0) >= 12) {
          if (((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0) + 5) {
            (s as any).shave_txt21 = 'You lather up your crotch and start shaving away the edges of your pubic hair. After a few minutes, you\'ve given your pussy a perfect hairdoo and rinse off the rest of the soap, admiring your new sexual fashion.';
          } else {
            (s as any).shave_act = 'Trim your bush';
            (s as any).shave_txt21 = 'You lather up your crotch and spend some time cleaning up the stubble around your pussy until your bush is neatly styled again.';
          }
        } else {
          if (((s as any).pubestyle ?? 0) === 9) {
            (s as any).shave_act = 'Trim your bush';
            if (((s as any).pcs_pubes ?? 0) >= 26) {
              (s as any).shave_txt21 = 'You spend some time trimming back your thick bush of pubic hair, until it is a neat and tidy lawn of hair instead.';
            } else {
              (s as any).shave_txt21 = 'You spend some time maintaining your bush, keeping it short and neat.';
            }
          } else {
            if (((s as any).pubestyle ?? 0) === 10) {
              if (((s as any).pcs_pubes ?? 0) >= 40) {
                (s as any).shave_act = 'Trim back your bush';
                (s as any).shave_txt21 = 'You spend some time hacking back the wild jungle covering your crotch. Soon enough, you\'re left with a sophisticated and tidy bush of hair that neatly carpets your pussy.';
              } else {
                (s as any).shave_act = 'Trim your bush';
                (s as any).shave_txt21 = 'You spend some time maintaining your bush, trimming back the edges, keeping it neat and tidy.';
              }
            } else {
              if (((s as any).pubestyle ?? 0) === 11) {
                if (((s as any).pcs_pubes ?? 0) <= 10) {
                  (s as any).shave_txt21 = 'As the water of the shower continues to roll down your body, you suddenly realize that the stubble growing around your pussy is starting to become irritating and you can\'t put it off any longer. Lathering yourself up, you grab your razor and carefully scrape away the rough itchy hairs have been bothering you so.';
                  (s as any).shave_txt22 = 'After a few minutes of work, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, smiling in relief that your pussy is smooth once again.';
                } else {
                  (s as any).shave_txt21 = 'You lather up yourself up and take a razor to the hair growing over your crotch. After a few minutes of shaving, you take a moment to inspect yourself, making sure you got every last pube and there isn\'t even a bit of stubble hiding in the folds of your crotch somewhere. Satisfied, you rinse yourself off, enjoying the newfound smoothness of your pussy.';
                }
              } else {
                (s as any).shave_act = '';
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).shave_act ?? 0) !== '') {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).shave_act ?? '') ?? '') + ' (0:10)', handler: (st: GameState) => {
    if (((st as any).shave_length ?? 0) < 2) {
      if (((st as any).pcs_pubes ?? 0) <= 10) {
        scene.img('images/shared/home/bathroom/shave_stubble.mp4');
      } else {
        scene.img('images/shared/home/bathroom/shave_bush.mp4');
      }
    } else {
      scene.img('images/shared/home/bathroom/trim_bush.mp4');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_pubes = ((st as any).shave_length ?? 0);
    ((st as any).stat = (st as any).stat ?? {})['pube_growth_timer'] = ((st as any).totminut ?? 0);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    if (((st as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      ((st as any).pcs_shave = (st as any).pcs_shave ?? {})['free_razor'] = 0;
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['razor'] = ((st as any).mc_inventory['razor'] ?? 0) - (((st as any).razors_to_use ?? 0)?.['pussy']);
    }
    // TODO-QSP: dynamic text: <<$shave_txt21>>
    scene.text(`${((st as any).shave_txt21 ?? '')}`);
    // TODO-QSP: dynamic text: <<$shave_txt22>>
    scene.text(`${((st as any).shave_txt22 ?? '')}`);
    if (((st as any).pcs_pubes ?? 0) <= 3) {
      qspCall(st, 'traits', 'body_hair_attitude', 'on_shave');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'shave']; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'selfplay', 'bathtub_dildo_check');
    qspCall(st, 'selfplay', 'shower_dildo_check');
  } },
    ]);
  }
  if ((((s as any).shave_menu ?? 0) === 3  ||  ((s as any).shave_menu ?? 0) === 1)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs']) {
    if (((s as any).pcs_leghair ?? 0) >= 4) {
      scene.actions([
        { label: 'Shave your legs (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_leghair = 0;
    ((st as any).stat = (st as any).stat ?? {})['leg_hair_growth_timer'] = ((st as any).totminut ?? 0);
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
    qspCall(st, 'traits', 'body_hair_attitude', 'on_shave');
    if (((st as any).pcs_shave ?? 0)?.['free_razor'] === 1) {
      ((st as any).pcs_shave = (st as any).pcs_shave ?? {})['free_razor'] = 0;
    } else {
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['razor'] = ((st as any).mc_inventory['razor'] ?? 0) - (((st as any).razors_to_use ?? 0)?.['legs']);
    }
    scene.img('images/shared/home/bathroom/shave.jpg');
    if (((st as any).daystart ?? 0) - ((st as any).daystart_start ?? 0) < 9  &&  ((st as any).start_type ?? 0)?.['magic'] === 'tg') {
      scene.text('You can\'t shake off the fact that you\'re a girl now, so you decide it\'d be best to shave your legs. You begin to lather your legs, still marveling at how soft and round they are. Then you take the razor in your hand and begin to shave your legs.');
      scene.text('You feel really awkward, never having done this before as a guy. Luckily, you had more than enough experience with shaving your face and technically this isn\'t really all that different. In the end, you get a pretty decent job done.');
    } else {
      if (((st as any).daystart ?? 0) - ((st as any).daystart_start ?? 0) < 29  &&  ((st as any).start_type ?? 0)?.['magic'] === 'tg') {
        qspCall(st, 'mood', 'raise', 'tiny');
        scene.text('With a newfound routine you lather up your legs and start shaving, careful not to miss a spot. After washing away the foam you softly glide your hands over your smooth legs, feeling good to know that you don\'t need to hide your legs in pants. Maybe you should wear a skirt tomorrow?');
      } else {
        scene.text('You lather your legs up with some soapy water and shave your legs. After a few swift movements, your legs are smooth as silk. The feeling of your smooth legs turns you on a little.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'shave']; enterDryOff(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'selfplay', 'bathtub_dildo_check');
    qspCall(st, 'selfplay', 'shower_dildo_check');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanShave(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).lashair ?? 0) !== 1  &&  ((s as any).pcs_shave ?? 0)?.['free_razor'] + ((s as any).mc_inventory ?? 0)?.['razor'] > 0  &&  (((((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 3)  &&  ((s as any).pcs_leghair ?? 0) >= 4  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['legs'])  ||  ((((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 2)  &&  ((s as any).pubestyle ?? 0) > 0  &&  ((s as any).pcs_pubes ?? 0) >= ((s as any).shave_trigger ?? 0)  &&  ((s as any).mc_inventory ?? 0)?.['razor'] >= ((s as any).razors_to_use ?? 0)?.['pussy'])));
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterCanTamponPad(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) !== 'none');
  // TODO-QSP: end
  scene.build();
}

function enterCanTamponTampon(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0)));
  // TODO-QSP: end
  scene.build();
}

function enterCanTampon(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (qspFunc(s, 'din_van', 'can_tampon_pad')  ||  qspFunc(s, 'din_van', 'can_tampon_tampon'));
  // TODO-QSP: end
  scene.build();
}

function enterTamponPadDo(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sanitary_pads'] = ((s as any).mc_inventory['sanitary_pads'] ?? 0) - (1);
  (s as any).isprokp = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img(`images/pc/body/pee/period/pad/${(Math.floor(Math.random() * 2) + 2)}.jpg`);
  scene.text('You use a sanitary pad.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterTamponTamponDo(s: GameState, scene: SceneBuilder): void {
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['tampons'] = ((s as any).mc_inventory['tampons'] ?? 0) - (1);
  (s as any).isprok = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/pee/period/tampon/6.jpg');
  scene.text('You use a tampon.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterTamponDo(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_tampon_tampon')) {
    qspGoto(s, 'din_van', 'tampon_tampon_do');
  } else {
    qspGoto(s, 'din_van', 'tampon_pad_do');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanQuickwash(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > 0);
  // TODO-QSP: end
  scene.build();
}

function enterQuickwashDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  if (((s as any).pcs_sweat ?? 0) < 30) {
    (s as any).pcs_sweat = 15 + (Math.floor(Math.random() * 5) + 0);
  } else {
    (s as any).pcs_sweat = ((s as any).pcs_sweat ?? 0) - (10 + (Math.floor(Math.random() * 5) + 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/wash5.jpg');
  scene.text('You give yourself a catlick, thus removing any traces of cum.');
  // TODO-QSP: end
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
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${(Math.floor(Math.random() * 2) + 3)}.jpg`);
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
            { label: 'Let the cum drain from you', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Let the cum drain from you', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(st, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${(Math.floor(Math.random() * 2) + 3)}.jpg`);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPblcPee(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWearpan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Wear panties (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'panty_view', 'view_grid', 'bathroom');
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) === 'none') {
    scene.actions([
      { label: 'Wear a bra (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspGoto(st, 'bra_view', 'view_grid', 'bathroom');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRemovepan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove underwear (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'underwear', 'remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove panties (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Remove bra (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'bras', 'remove');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPublicpan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursepantytype = ((s as any).pantyworntype ?? 0);
      (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
      (s as any).pursebratype = ((s as any).braworntype ?? 0);
      (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
    }
    qspCall(s, 'underwear', 'remove');
    dynamicGoto(s, 'prevLoc', 'prevArg');
    scene.actions([
      { label: 'Remove underwear [+iif(bag = 1, \' and put it in your purse ...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pursepantytype ?? 0) !== ''  &&  ((s as any).pursebratype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your underwear back on (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'wear', ((st as any).pursepantytype ?? 0), ((st as any).pursepantynumber ?? 0));
    qspCall(st, 'bras', 'wear', ((st as any).pursebratype ?? 0), ((st as any).pursebranumber ?? 0));
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursepantytype = ((s as any).pantyworntype ?? 0);
      (s as any).pursepantynumber = ((s as any).pantywornnumber ?? 0);
    }
    qspCall(s, 'panties', 'remove');
    dynamicGoto(s, 'prevLoc', 'prevArg');
    scene.actions([
      { label: 'Remove panties [+iif(bag = 1, \' and put them in your purs...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).pursepantytype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your panties back on (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'panties', 'wear', ((st as any).pursepantytype ?? 0), ((st as any).pursepantynumber ?? 0));
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).braworntype ?? 0) !== 'none') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).bag ?? 0) === 1) {
      (s as any).pursebratype = ((s as any).braworntype ?? 0);
      (s as any).pursebranumber = ((s as any).brawornnumber ?? 0);
    }
    qspCall(s, 'bras', 'remove');
    dynamicGoto(s, 'prevLoc', 'prevArg');
    scene.actions([
      { label: 'Remove bra [+iif(bag = 1, \' and put it in your purse ...]', handler: (st: GameState) => {
    // TODO-QSP: 02)':
  } },
    ]);
  }
  if (((s as any).bag ?? 0) === 1  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pursebratype ?? 0) !== '') {
    scene.actions([
      { label: 'Put your bra back on (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'stat', '');
    qspCall(st, 'bras', 'wear', ((st as any).pursebratype ?? 0), ((st as any).pursebranumber ?? 0));
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  if (((s as any).prostitute ?? 0)?.['active'] === 1  &&  String((s as any).locArgs?.[1] ?? '') !== 'no_prost'  &&  ((s as any).loc ?? 0) !== 'gschool_break') {
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes'] === 0  &&  ((s as any).prostitute ?? 0)?.['outfit_is_set']) {
      scene.actions([
        { label: 'Change into prostitute outfit', goto: ['prostitution_functions', 'change_to_work', 'restroom'] },
      ]);
    } else {
      if (((s as any).prostitute ?? 0)?.['work_clothes']  &&  ((s as any).prostitute ?? 0)?.['changed_for_work']) {
        scene.actions([
          { label: 'Change into your regular clothes', goto: ['prostitution_functions', 'change_back', 'restroom'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBasin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cumloc ?? 0)[12] === 1) {
    scene.actions([
      { label: 'Rinse your mouth (0:05)', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', '', 2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_hairbsh = 0;
    if (((st as any).pcs_sweat ?? 0) > 19) {
      (st as any).pcs_sweat = ((st as any).pcs_sweat ?? 0) - (5);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
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
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 11;
    qspCall(st, 'cum_cleanup', '');
    if (((st as any).pcs_sweat ?? 0) > 19) {
      (st as any).pcs_sweat = ((st as any).pcs_sweat ?? 0) - (5);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 5;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_hairbsh = 0;
    if (((st as any).pcs_sweat ?? 0) > 19) {
      (st as any).pcs_sweat = ((st as any).pcs_sweat ?? 0) - (5);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
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
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 6;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
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
    (st as any).cumspclnt = 15;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${(Math.floor(Math.random() * 2) + 3)}.jpg`);
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
            { label: 'Let the cum drain from you', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Let the cum drain from you', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(st, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).cumspclnt = 15;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/pc/body/pee/wiping/no${(Math.floor(Math.random() * 2) + 3)}.jpg`);
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
    (st as any).body_write = 0;
    (st as any).face_write = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).KandidNapr = ((st as any).KandidNapr ?? 0) - (1);
    (st as any).Kandidoz = ((st as any).Kandidoz ?? 0) - (5);
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
  scene.build();
}

function enterCanRemovemakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0)));
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanRemovelashes(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).false_lashes ?? 0) >= 1);
  // TODO-QSP: end
  scene.build();
}

function enterRemovelashesDo(s: GameState, scene: SceneBuilder): void {
  scene.text('You carefully peel off the glued-on strip, careful to protect your natural lashes.');
  (s as any).lashsavechance = (Math.floor(Math.random() * 5) + 0);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanDeodorant(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0)));
  // TODO-QSP: end
  scene.build();
}

function enterDeodorantDo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
  qspCall(s, 'sweat', 'deo');
  qspCall(s, 'stat', '');
  // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
  scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanEnema(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['enema_kit'] === 1  &&  (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  ||  (Array.isArray((s as any).sparrloc) ? ((s as any).sparrloc as any[]).indexOf(3) : -1) > 0));
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 3;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
            { label: 'Wash up cum from your insides', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>Part of you doesn''t want to let g...
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Wash up cum from your insides', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] === 2) {
      qspCall(st, 'willpower', 'misc', 'self', 'hard');
    } else {
      qspCall(st, 'willpower', 'misc', 'self', 'medium');
    }
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    (st as any).cumspclnt = 3;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterCanButtplugOut(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  ((s as any).analPlugIn ?? 0) === 1);
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanButtplugIn(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['buttplug'] === 1  &&  (!((s as any).analPlugIn ?? 0)));
  // TODO-QSP: end
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
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', (Math.floor(Math.random() * 2) + 1));
  }
  if (((s as any).pcs_ass ?? 0) >= 20  &&  ((s as any).pcs_ass ?? 0) < 30) {
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', (Math.floor(Math.random() * 2) + 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/pc/body/analplug.jpg');
  if ((!((s as any).butpluguse ?? 0))) {
    (s as any).butpluguse = 1;
    scene.text('"If I\'m not going to use it, then why did I buy it?" you ask yourself. You look at the butt plug for a while, thinking "It is necessary to start developing my ass so I can have great adventures someday… You could even say huge and thick adventures with crimson heads…" You\'re slightly embarrassed at the thought for a second, but are then overcome by your horny fantasies. Determined to get the plug all the way in, you lubricate your anus with your saliva and push the butt plug against it. It hurts a bit at first, but once the thickest part is in the rest follows rather easily. Patting yourself on your ass once it\'s in, you wonder if anyone will notice you\'re wearing it and then immediately feel naughty for even having thought that.');
  } else {
    scene.text('You squat and gently rub the butt plug against your anus after lubricating it with a bit of saliva. After a few minutes, you\'ve relaxed enough to be able to push it in. Once it\'s in, you give it a few gentle tugs, wondering if anyone will catch you wearing it today.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanVibeOut(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['vibe'] === 1  &&  ((s as any).vibratorIN ?? 0) === 1);
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterCanVibeIn(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['vibe'] === 1  &&  ((s as any).vibratorIN ?? 0) === 0  &&  qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0);
  // TODO-QSP: end
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
  // TODO-QSP: end
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
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'cocaine');
    qspCall(st, 'stat', '');
    if (((st as any).locclass ?? 0) === 'restroom'  ||  ((st as any).location_type ?? 0) === 'restroom') {
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
  // TODO-QSP: end
  scene.build();
}

function enterPrivate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lashair ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
    // TODO-QSP: dynamic text: Your disposable razors are good for <b><<mc_inventory[''razor'']>></b> more shav...
    scene.text(`Your disposable razors are good for <b>${((s as any).mc_inventory ?? 0)?.['razor'] ?? ''}</b> more shaves. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Shave Options</a>`);
    if (((s as any).mc_inventory ?? 0)?.['razor'] <= 2  &&  ((s as any).razor ?? 0)?.['warning'] < ((s as any).daystart ?? 0)) {
      ((s as any).razor = (s as any).razor ?? {})['warning'] = ((s as any).daystart ?? 0) + 5;
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['chafing_cream'] > 0) {
    // TODO-QSP: dynamic text: On a shelf is a tube of ointment for chafing, which will be enough for <b><<mc_i...
    scene.text(`On a shelf is a tube of ointment for chafing, which will be enough for <b>${((s as any).mc_inventory ?? 0)?.['chafing_cream'] ?? ''}</b> applications.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['moisturiser'] > 0) {
    // TODO-QSP: dynamic text: You look at your moisturiser and think you have about <b><<mc_inventory[''moistu...
    scene.text(`You look at your moisturiser and think you have about <b>${((s as any).mc_inventory ?? 0)?.['moisturiser'] ?? ''}</b> applications left.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['tampons'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
    scene.text('<center><b>You have no feminine hygiene products left.</b></center>');
  } else {
    if (((s as any).tampon ?? 0)?.['warning'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).mc_inventory ?? 0)?.['tampons'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
        ((s as any).tampon = (s as any).tampon ?? {})['warning'] = ((s as any).daystart ?? 0);
        // TODO-QSP: $temp_tamp_text
      } else {
        if (((s as any).mc_inventory ?? 0)?.['tampons'] === 1) {
          ((s as any).tampon = (s as any).tampon ?? {})['warning'] = ((s as any).daystart ?? 0);
        } else {
          if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
            ((s as any).tampon = (s as any).tampon ?? {})['warning'] = ((s as any).daystart ?? 0);
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
        // TODO-QSP: dynamic text: You have <b><<mc_inventory[''tampons'']>></b> tampons.
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['tampons'] ?? ''}</b> tampons.`);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 0) {
      scene.text('You have <b>no</b> pads left.');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] === 1) {
        scene.text('You have only <b>1</b> pads left.');
      } else {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory[''sanitary_pads'']>></b> pads.
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['sanitary_pads'] ?? ''}</b> pads.`);
      }
    }
  }
  // TODO-QSP: 'Your deodorant will last you for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['de...
  if (String((s as any).locArgs?.[1] ?? '') === 'HotelRoom') {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (String((s as any).locArgs?.[2] ?? '') === 'bath') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBath(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if (((s as any).loc ?? 0) === 'vanrPar') {
      scene.text('You can use your parent\'s shampoo.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBath(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).loc ?? 0) === 'LariskaHome') {
        scene.text('You can use Lariska\'s shampoo.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBath(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).loc ?? 0) === 'tanvanr') {
          scene.text('You can use Tanya\'s shampoo.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBath(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).loc ?? 0) === 'uni_dorm'  &&  ((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
            // TODO-QSP: dynamic text: You have enough shampoo for <b><<mc_inventory[''shampoo'']>></b> uses.
            scene.text(`You have enough shampoo for <b>${((s as any).mc_inventory ?? 0)?.['shampoo'] ?? ''}</b> uses.`);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).loc ?? 0) === 'gad_gpbath') {
            } else {
              if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0) {
                // TODO-QSP: dynamic text: You have enough shampoo for <b><<mc_inventory[''shampoo'']>></b> uses.
                scene.text(`You have enough shampoo for <b>${((s as any).mc_inventory ?? 0)?.['shampoo'] ?? ''}</b> uses.`);
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterShower(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBath(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSkinCare(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
  if (((s as any).mc_inventory ?? 0)?.['hair_extensioncream'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs ''drugs'', ''hair_extensioncream''">Apply hair extension shampo...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027hair_extensioncream/u0027); return false;">Apply hair extension shampoo.</a> Uses left: ${((s as any).mc_inventory ?? 0)?.['hair_extensioncream'] ?? ''}.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['butt_injection'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs ''drugs'', ''butt_injection''">Inject the KBI butt enhancement ...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027butt_injection/u0027); return false;">Inject the KBI butt enhancement shot.</a> Uses left: ${((s as any).mc_inventory ?? 0)?.['butt_injection'] ?? ''}.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['breastcream'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs ''drugs'', ''breastcream''">Apply breast cream.</a> Uses left: ...
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027breastcream/u0027); return false;">Apply breast cream.</a> Uses left: ${((s as any).mc_inventory ?? 0)?.['breastcream'] ?? ''}.`);
  }
  qspCall(s, 'piercing_management', 'set_manage_string');
  if (((s as any).fillimplant ?? 0) === 1) {
    if (((s as any).siliconeBag ?? 0) >= 1) {
      // TODO-QSP: dynamic text: <a href="exec:cls & siliconeBag -= 1 & bodyVars[''bust_silicone''] += 10 & gt $l...
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cls */ s.siliconeBag -=s.1; (s.bodyVars ??= {})/u0027bust_silicone/u0027 +=s.10; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">Inject silicone into your breast implants.</a>');
    }
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] >= 20) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: cls */ (s.bodyVars ??= {})/u0027bust_silicone/u0027 -=s.10; return s; }); window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;">Drain silicone from your breast implants.</a>');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBteeth(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTampon(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: <a href="exec:msg ''<center>Your weight is <<pcs_weight[0]>>.<<pcs_weight[1]>> k...
  scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg /u0027<center>Your weight is ${qspUntranslated(s, "pcs_weight[0]", { location: "din_van" })}.${qspUntranslated(s, "pcs_weight[1]", { location: "din_van" })} kg<br>Your body mass index (BMI) is ${qspUntranslated(s, "pcs_bmi[0]", { location: "din_van" })}.${qspUntranslated(s, "pcs_bmi[1]", { location: "din_van" })}.<br>${qspUntranslated(s, "bodyVars[\\u0027bmi_desc\\u0027]", { location: "din_van" })}</center>/u0027 */ return s; }); return false;">Check weight on the scales</a>`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrvtPee(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBasin(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBrit(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEnema(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPalelady(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).mc_inventory ?? 0)?.['chafing_cream'] > 0  &&  ((s as any).mosol ?? 0) > 0  &&  ((s as any).mosal_time ?? 0) <= ((s as any).totminut ?? 0)) {
    scene.actions([
      { label: 'Rub ointment onto your pussy (0:05)', handler: (st: GameState) => {
    (st as any).mosal_time = ((st as any).totminut ?? 0) + 600;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['chafing_cream'] = ((st as any).mc_inventory['chafing_cream'] ?? 0) - (1);
    (st as any).mosol = ((st as any).mosol ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.text('You take a tube of cream and rub it onto your itchy vulva.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).knowpreg ?? 0) !== 1  &&  ((s as any).mc_inventory ?? 0)?.['pregnancy_test'] > 0  &&  (((s as any).abortionbirthdate ?? 0) === 0  ||  ((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) > 100)  &&  ((s as any).last_pee ?? 0) + 59 < ((s as any).totminut ?? 0)) {
    scene.actions([
      { label: 'Do a pregnancy test (0:05)', handler: (st: GameState) => {
    (st as any).last_pee = ((st as any).totminut ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['pregnancy_test'] = ((st as any).mc_inventory['pregnancy_test'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/birthcontrol/preg_test.jpg');
    scene.text('You sit down on the toilet and slip the test between your legs, carefully letting loose a stream of urine from your pussy onto the tip. Following the instructions, you then re-cap it and lay it flat on the sink, spending the next five minutes nervously fidgeting, waiting out the suggested time…');
    scene.text('When the time is up, you eagerly snatch it up and yank off the cap to see the results.');
    if (((st as any).pregChem ?? 0) <= 120) {
      (st as any).knowpreg = 0;
      scene.text('The test shows one band. You are not pregnant.');
      scene.actions([
        { label: 'Sigh in relief', goto: ['din_van', 'ReliefReact'] },
        { label: 'Sigh in disappointment', goto: ['din_van', 'DisappointedReact'] },
      ]);
    } else {
      if (((st as any).hypnoTime ?? 0) >= 10) {
        (st as any).knowpreg = 0;
        scene.text('The test shows one band. You are not pregnant.');
        scene.actions([
          { label: 'Happy', goto: ['din_van', 'HappyReact'] },
          { label: 'Sigh in relief', goto: ['din_van', 'ReliefReact'] },
        ]);
      } else {
        if (((st as any).pcs_pregtalk ?? 0) === 1) {
          (st as any).knowpreg = 1;
          (st as any).thinkpreg = 1;
          scene.text('The test shows two strips. You are pregnant.');
        } else {
          (st as any).knowpreg = 1;
          (st as any).thinkpreg = 1;
          if (((st as any).husID ?? 0) !== '') {
            if ((!((st as any).kid ?? 0))) {
              qspGoto(st, 'din_van', 'WifeReact1');
            } else {
              qspGoto(st, 'din_van', 'WifeReact2');
            }
          } else {
            scene.text('The test shows two strips. You are pregnant. As you look at the test in your hand, you are…');
            if (qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') < 3  &&  ((st as any).hypnoTime ?? 0) < 10) {
              scene.actions([
                { label: 'Horrified', goto: ['din_van', 'HorrifiedReact1'] },
                { label: 'Concerned', goto: ['din_van', 'ConcernedReact1'] },
                { label: 'Excited', goto: ['din_van', 'ExcitedReact1'] },
              ]);
            } else {
              if (((st as any).pcs_horny ?? 0) >= 50  ||  qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') === 3) {
                scene.actions([
                  { label: 'Aroused', goto: ['din_van', 'ArousedReact1'] },
                ]);
              }
              scene.actions([
                { label: 'Excited', goto: ['din_van', 'ExcitedReact1'] },
              ]);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['breast_pump'] > 0  &&  ((s as any).bp_unbox ?? 0) >= 1) {
    scene.actions([
      { label: 'Use breast pump', handler: (st: GameState) => {
    qspGoto(st, 'lact_bp', 'bp_milking');
  } },
    ]);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['breast_pump'] > 0  &&  ((s as any).bp_unbox ?? 0) <= 0) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027lact_bp/u0027, /u0027bp_unbox_event/u0027); return false;">Unbox</a> your breast pump');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['breast_pump'] <= 0) {
        qspCall(s, 'lact_bp', 'massage');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change clothes and toys', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWearpan(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterRemovepan(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).curloc ?? 0) === 'vanrPar'  &&  ((st as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Wear clothes (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/pc/activities/misc/dress_1.mp4');
    scene.text('You get dressed.');
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).curloc ?? 0) === 'vanrPar'  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Remove clothes (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/pc/items/accessories/computer/webcam/undress1.mp4');
    scene.text('You remove your clothing.');
    qspCall(st, 'clothing', 'strip');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterToymanage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMisery(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['tech_washing_machine'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] < 1) {
      scene.text('You have run out of washing powder for the washing machine.');
    } else {
      if (((s as any).husID ?? 0) !== '') {
        if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).husID ?? 0), 5);
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
          ((s as any).spouseVars = (s as any).spouseVars ?? {})['wash_day'] = ((s as any).daystart ?? 0);
          scene.text('The washing machine washed your husband\'s dirty laundry.');
        }
      } else {
        if (((s as any).wifID ?? 0) !== '') {
          if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).wifID ?? 0), 5);
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['wash_day'] = ((s as any).daystart ?? 0);
            scene.text('The washing machine washed your wife\'s dirty laundry.');
          }
        }
      }
    }
  }
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']  &&  ((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 2) {
      scene.actions([
        { label: 'Wash your husband\'s clothes (2 units of washing powder) (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).husID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['wash_day'] = ((st as any).daystart ?? 0);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['laundry_soap'] = ((st as any).mc_inventory['laundry_soap'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stir.jpg');
    scene.text('You spend an hour washing your husband\'s dirty laundry.');
    scene.actions([
      { label: 'Leave the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['clean_day']) {
      scene.actions([
        { label: 'Clean the apartment (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).husID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['clean_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You take a rag and start cleaning the apartment.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']  &&  ((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 2) {
        scene.actions([
          { label: 'Wash your wife\'s clothes (2 units of washing powder) (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).wifID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['wash_day'] = ((st as any).daystart ?? 0);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['laundry_soap'] = ((st as any).mc_inventory['laundry_soap'] ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stir.jpg');
    scene.text('You spend an hour washing your wife\'s dirty laundry.');
    scene.actions([
      { label: 'Leave the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['clean_day']) {
        scene.actions([
          { label: 'Clean the apartment (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).wifID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['clean_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You take a rag and start cleaning the apartment.');
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
  // TODO-QSP: end
  scene.build();
}

function enterMisery_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['tech_washing_machine'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] < 1) {
      scene.text('You have run out of washing powder for the washing machine.');
    } else {
      if (((s as any).husID ?? 0) !== '') {
        if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']) {
          qspCall(s, 'npc_relationship', 'modify', ((s as any).husID ?? 0), 5);
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
          ((s as any).spouseVars = (s as any).spouseVars ?? {})['wash_day'] = ((s as any).daystart ?? 0);
          scene.text('The washing machine washed your husband\'s dirty laundry.');
        }
      } else {
        if (((s as any).wifID ?? 0) !== '') {
          if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).wifID ?? 0), 5);
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
            ((s as any).spouseVars = (s as any).spouseVars ?? {})['wash_day'] = ((s as any).daystart ?? 0);
            scene.text('The washing machine washed your wife\'s dirty laundry.');
          }
        }
      }
    }
  }
  if (((s as any).husID ?? 0) !== '') {
    if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']  &&  ((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 2) {
      scene.actions([
        { label: 'Wash your husband\'s clothes (2 units of washing powder) (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).husID ?? 0), 5);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['laundry_soap'] = ((st as any).mc_inventory['laundry_soap'] ?? 0) - (2);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['wash_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stir.jpg');
    scene.text('You spend an hour washing your husband\'s dirty laundry.');
    scene.actions([
      { label: 'Leave the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['clean_day']) {
      scene.actions([
        { label: 'Clean the apartment (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).husID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['clean_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You take a rag and start cleaning the apartment.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).wifID ?? 0) !== '') {
      if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['wash_day']  &&  ((s as any).mc_inventory ?? 0)?.['laundry_soap'] >= 2) {
        scene.actions([
          { label: 'Wash your wife\'s clothes (2 units of washing powder) (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).wifID ?? 0), 5);
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['laundry_soap'] = ((st as any).mc_inventory['laundry_soap'] ?? 0) - (2);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['wash_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/residential/apartment/stir.jpg');
    scene.text('You spend an hour washing your wife\'s dirty laundry.');
    scene.actions([
      { label: 'Leave the bathroom', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).daystart ?? 0) > ((s as any).spouseVars ?? 0)?.['clean_day']) {
        scene.actions([
          { label: 'Clean the apartment (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).wifID ?? 0), 5);
    ((st as any).spouseVars = (st as any).spouseVars ?? {})['clean_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.text('You take a rag and start cleaning the apartment.');
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
  // TODO-QSP: end
  scene.build();
}

function enterBuffpick(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/exercises/gym/fit2.jpg');
  scene.text('While drying off and getting dressed, you examine the sleek muscles that are showing through your skin.');
  scene.text('As you do so, you think about how you look and decide:');
  // TODO-QSP: end
  scene.actions([
    { label: 'You like how you look.', handler: (st: GameState) => {
    (st as any).normbuffpick = 2;
    (st as any).mirror_steam = ((st as any).hour ?? 0);
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'You don\'t like how you look.', handler: (st: GameState) => {
    (st as any).nrmbfpckct = ((st as any).nrmbfpckct ?? 0) + (1);
    (st as any).normbuffpick = 0;
    (st as any).mirror_steam = ((st as any).hour ?? 0);
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterReliefReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fetish', 'add_pref', 'pregnant', (-5));
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/birthcontrol/preg_test.jpg');
  scene.text('Negative.');
  scene.text('You sigh in relief, letting loose a breath that you feel like you\'ve been holding for days. You toss the used test into the trash and happily get on with your not-pregnant day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterHappyReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/birthcontrol/preg_test.jpg');
  scene.text('Negative.');
  scene.text('You smile full of joy, letting loose a breath that you feel like you\'ve been holding for days. You playfully toss the used test into the trash and happily get on with your not-pregnant day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterDisappointedReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fetish', 'add_pref', 'pregnant', 5);
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/birthcontrol/preg_test.jpg');
  scene.text('Negative.');
  scene.text('You sigh, closing your eyes in disappointment. You had really hoped that this day would be the day you found out you were expecting. But today is not that day. With not a small amount of frustration, you throw the used test into the trash and move on with your day.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterHorrifiedReact1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', (-10));
  qspCall(s, 'stat', '');
  scene.text('You stare in disbelief at the test in your hand. The two strips displayed can only mean one thing: you are pregnant. You sink to the floor, mind spinning. Tears well in your eyes. How could this happen?');
  if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
    scene.text('You don\'t even know how this is possible. You\'ve never even had sex with anyone.');
    scene.text('What did you do to deserve this? What is everyone going to think of you? Your life is ruined.');
    scene.text('After several minutes of sobbing and trying to make sense of your situation, you finally pull yourself off of the floor. You straighten your clothes and wash your face as you begin to accept the situation you\'re stuck with.');
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] >= 1) {
      qspCall(s, 'fetish', 'add_pref', 'pregnant', (-10));
      scene.text('It\'s bad enough that you were raped, but possibly getting pregnant from it as well? It\'s completely unfair!');
      scene.text('What did you do to deserve this? What is everyone going to think of you? Your life is ruined.');
      scene.text('After several minutes of sobbing and trying to make sense of your situation, you finally pull yourself off of the floor. You straighten your clothes and wash your face as you begin to accept the situation you\'re stuck with.');
    } else {
      scene.text('This is the worst possible thing that could have happened to you. You feel like you\'re going to vomit from the stress.');
      scene.text('What did you do to deserve this? What is everyone going to think of you? Your life is ruined.');
      scene.text('After several minutes of sobbing and trying to make sense of your situation, you finally pull yourself off of the floor. You straighten your clothes and wash your face as you begin to accept the situation you\'re stuck with.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterConcernedReact1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', (-5));
  qspCall(s, 'stat', '');
  scene.text('Your mind races as you gaze at the test in your hand. The two strips clearly show that you\'re pregnant. You know this isn\'t the worst thing that could happen to you, but your life is definitely going to change. Are you even ready for that kind of change?');
  if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 1) {
    scene.text('The worst part about this whole situation is that you don\'t even know how this happened. How can you get pregnant without having sex?');
    scene.text('After spending a few minutes weighing your options, you choose to get on with your day. You still have a lot to consider before you can decide what to do about this pregnancy, but you can\'t spend all day in the bathroom without drawing suspicion.');
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] > 1) {
      qspCall(s, 'fetish', 'add_pref', 'pregnant', (-10));
      scene.text('The worst part about this whole situation is that this isn\'t even your fault. This was forced on you.');
      scene.text('After spending a few minutes weighing your options, you choose to get on with your day. You still have a lot to consider before you can decide what to do about this pregnancy, but you can\'t spend all day in the bathroom without drawing suspicion.');
    } else {
      scene.text('On some level, you\'re aware that this is a consequence of your own actions, but you\'re not quite ready to come to terms with that.');
      scene.text('After spending a few minutes weighing your options, you choose to get on with your day. You still have a lot to consider before you can decide what to do about this pregnancy, but you can\'t spend all day in the bathroom without drawing suspicion.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterExcitedReact1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', 5);
  qspCall(s, 'stat', '');
  scene.text('You\'re overcome with glee as you look at the pregnancy test in your hand. Its two strips confirm that your wish has been granted: you are pregnant. You giggle as you clutch the pregnancy test, excited to share the news with everyone you know.');
  if (((s as any).stat ?? 0)?.['hidden_vaginal'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 1) {
    scene.text('You\'re not sure how this happened, but you\'re not going to complain. Who cares if a miracle made it happen?');
    scene.text('You spend several minutes fantasizing about your entry into parenthood before you remember you have places you need to be. You finally get up, still giddy as you go on with your day.');
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] > 1) {
      scene.text('You don\'t even care about the circumstances that got you pregnant. It was absolutely worth it for this moment.');
      scene.text('You spend several minutes fantasizing about your entry into parenthood before you remember you have places you need to be. You finally get up, still giddy as you go on with your day.');
    } else {
      qspCall(s, 'fetish', 'add_pref', 'pregnant', 5);
      scene.text('Every time you\'ve had sex, you hoped the act would make you into a mother.');
      scene.text('You spend several minutes fantasizing about your entry into parenthood before you remember you have places you need to be. You finally get up, still giddy as you go on with your day.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterArousedReact1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', 10);
  qspCall(s, 'stat', '');
  scene.text('You rub your thighs together as you stare at the pregnancy test in your hand. The two strips displayed confirm that you\'ve been knocked up. You excitedly recount every load of cum blasted into your fertile womb, wondering which one found purchase. You gently rub your clit in a circular motion as you think about the fact that, in a few months, everyone who sees your large, pregnant belly will know what a slut you are.');
  if (((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).stat ?? 0)?.['vaginal'] > 1  &&  qspFunc(s, 'fetish', 'get_exp', 'incest') === 0) {
    qspCall(s, 'fetish', 'add_pref', 'rape', 5);
    scene.text('You pick up speed as you recall your rapist forcefully pumping you full of his wonderful semen without any concern for your desires. You loved having your dignity stripped away as a complete stranger decided to make you a mother.');
  } else {
    if (((s as any).pcs_cp_risk_daylastincest ?? 0) !== 0  &&  (((s as any).daystart ?? 0) - ((s as any).pcs_cp_risk_daylastincest ?? 0) <= 275)  &&  (((s as any).abortionbirthdate ?? 0) < ((s as any).pcs_cp_risk_daylastincest ?? 0))) {
      qspCall(s, 'fetish', 'add_pref', 'incest', 5);
      scene.text('You pick up speed as you recall willingly allowing yourself to be pumped full of all of that wonderful semen. Knowing that you would get pregnant filled you with joy every time someone shot rope after rope of their baby batter into you.');
      scene.text('The taboo knowledge that you could have gotten pregnant from incest turns you on even more.');
    } else {
      scene.text('You pick up speed as you recall willingly allowing yourself to be pumped full of all of that wonderful semen. Knowing that you would get pregnant filled you with joy every time someone shot rope after rope of their baby batter into you.');
    }
  }
  scene.text('After several minutes of this, you orgasm hard. You spend a moment panting before cleaning up and straightening your clothes. Once you\'ve freshened up, you move on with your day, still aroused.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterWifeReact1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', 10);
  qspCall(s, 'stat', '');
  scene.text('A wide smile spreads across your face as you look down at the pregnancy test. The two strips displayed exclaim that you\'re finally starting a family. You begin to shake with excitement as you think about how you are going to tell your husband. Should you just tell him as soon as you see him, or do you want to make it an even more special occasion and tell him over a fancy dinner? Maybe you should just nonchalantly drop the test in front of him to see his reaction. Regardless of how you decide to do it, you can\'t keep the excitement to yourself any longer. You take a brief moment to freshen up before leaving the room. ');
  scene.text('You have a little time before your husband gets home and the baby\'s room isn\'t going to design itself.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterWifeReact2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_pregtalk = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'fetish', 'add_pref', 'pregnant', 10);
  qspCall(s, 'stat', '');
  scene.text('You smile warmly at the test in your hand. You are definitely pregnant again. Your chest swells with joy, knowing that your wonderful family is about to get a little bit larger. You contentedly sigh as you envision your pregnant belly swelling again, proclaiming your motherhood to the world. Having a child is the greatest thing that has ever happened to you, and you\'re thrilled at the opportunity to experience it again. You can\'t wait any longer to tell your husband. You quickly spruce yourself up before going to share the fantastic news with your spouse.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterPrvtPee(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'din_van', 'can_prvt_pee')) {
    scene.actions([
      { label: 'Go pee (0:04)', goto: ['din_van', 'prvt_pee_do'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCanPrvtPee(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).last_pee ?? 0) + 59 < ((s as any).totminut ?? 0)  &&  ((s as any).cheatVars ?? 0)?.['pee'] === 0);
  // TODO-QSP: end
  scene.build();
}

function enterPrvtPeeDo(s: GameState, scene: SceneBuilder): void {
  (s as any).last_pee = ((s as any).totminut ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/private/' + rand(1, 19) + '....
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/pc/body/pee/private/` + (Math.floor(Math.random() * 19) + 1) + '.jpg"></center>');
  (s as any).rand_pee = (Math.floor(Math.random() * 8) + 0);
  if ((!((s as any).rand_pee ?? 0))) {
    scene.text('You take a seat on the toilet and begin peeing, glad to feel the pressure released.');
  } else {
    if (((s as any).rand_pee ?? 0) === 1) {
      scene.text('After sitting on the toilet you finally release your bladder. A shiver runs down your spine as the stream flows out of you. "Wow." you think, "I had to go more than I thought."');
    } else {
      if (((s as any).rand_pee ?? 0) === 2) {
        scene.text('Settling onto the toilet seat, you pull out your phone and begin checking for messages and doing other things to occupy the time until the stream slows to a trickle and finally stops.');
      } else {
        if (((s as any).rand_pee ?? 0) === 3) {
          scene.text('You plop down onto the porcelain throne and begin to unleash a torrent of urine into the bowl. As you wait for nature to finish it\'s business, you begin to daydream a bit as your mind wanders off.');
        } else {
          if (((s as any).rand_pee ?? 0) === 4) {
            scene.text('While relaxing your bladder and beginning to pee, you decide to reflect on your recent interactions with the people in your life. "What do they think of me? Do they talk behind my back?" You continue contemplating until your body signals that the flow has ended.');
          } else {
            if (((s as any).rand_pee ?? 0) === 5) {
              scene.text('You nearly piss yourself as you rush to seat yourself on the toilet. Unable to hold back the flood anymore, your body releases a seemingly endless stream as you moan quietly in relief, thankful that you made it in time.');
            } else {
              if (((s as any).rand_pee ?? 0) === 6) {
                scene.text('After situating yourself on the toilet, you relax and begin peeing. The urine tickles your labia as it sprays out of you into the toilet bowl.');
              } else {
                scene.text('As you begin to sit down, you nearly jump back to your feet as the cold toilet seat stings your bare bottom. You shake your head and sigh before settling back onto the icy seat and doing your business.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 0  &&  ((s as any).pillcon ?? 0) < 40000))  &&  (((s as any).isprok ?? 0) === 1  ||  (((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0))  &&  (!((s as any).knowpreg ?? 0))) {
    scene.actions([
      { label: 'Change tampon (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tampons'] = ((st as any).mc_inventory['tampons'] ?? 0) - (1);
    (st as any).isprok = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/period/tampon/' + rand(1, 12...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/period/tampon/` + (Math.floor(Math.random() * 12) + 1) + '.jpg"></center>');
    scene.text('Reaching down and taking the string between your fingers, you slowly pull the used tampon from your vagina. You wrap it in toilet paper to be thrown in the trash bin. Opening your purse, you retrieve a fresh one, unpack it and carefully insert it into yourself.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrvtPeeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).isprokp ?? 0) === 1  &&  ((s as any).mc_inventory ?? 0)?.['sanitary_pads'] > 0  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
    scene.actions([
      { label: 'Change pad (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sanitary_pads'] = ((st as any).mc_inventory['sanitary_pads'] ?? 0) - (1);
    (st as any).isprokp = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/period/pad/' + rand(1, 6) + ...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/period/pad/` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
    scene.text('Checking your pad, you decide it\'s time for a new one. You carefully peel it off of your panties before folding it into thirds and setting it aside to be thrown away. Digging in your bag, you pull out a fresh pad, unpackage it, peel off the adhesive strip, and place it into your underwear. Finally, you wrap the wings around the sides of the gusset to make sure it is nice and secure.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPrvtPeeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrvtPeeEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPrvtPeeEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish and wipe', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    if (((st as any).pcs_willpwr ?? 0) < 150) {
      (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/wiping/' + rand(1, 9) + '.jp...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/wiping/` + (Math.floor(Math.random() * 9) + 1) + '.jpg"></center>');
    (st as any).rand_pee = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).rand_pee ?? 0))) {
      scene.text('Gathering some toilet paper from the roll, you reach down wipe your vagina clean from the last drops of urine leaking from you before dropping the paper into the toilet.');
    } else {
      if (((st as any).rand_pee ?? 0) === 1) {
        scene.text('Wrapping some toilet paper around your hand, you reach around and give your pussy and ass a quick wipe before letting the paper drop into the bowl.');
      } else {
        scene.text('You take a wad of toilet paper in your fist before using it to gently pat your vagina dry. You toss the used material in the toilet and flush it down.');
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPblcPee(s: GameState, scene: SceneBuilder): void {
  if (((s as any).last_pee ?? 0) + 59 < ((s as any).totminut ?? 0)  &&  ((s as any).cheatVars ?? 0)?.['pee'] === 0) {
    scene.actions([
      { label: 'Go pee (0:04)', handler: (st: GameState) => {
    (st as any).last_pee = ((st as any).totminut ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/public/' + rand(1, 11) + '.j...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/public/` + (Math.floor(Math.random() * 11) + 1) + '.jpg"></center>');
    (st as any).rand_pee = (Math.floor(Math.random() * 8) + 0);
    if ((!((st as any).rand_pee ?? 0))) {
      scene.text('Settling onto the toilet seat, you pull out your phone and begin checking for messages and doing other things to occupy the time until the stream slows to a trickle and finally stops.');
    } else {
      if (((st as any).rand_pee ?? 0) === 1) {
        scene.text('While relaxing your bladder and beginning to pee you decide to reflect on your recent interactions with the people in your life. "What do they think of me? Do they talk behind my back?" You continue contemplating until your body signals that the flow has ended.');
      } else {
        if (((st as any).rand_pee ?? 0) === 2) {
          scene.text('You nearly piss yourself as you rush to seat yourself onto the toilet. Unable to hold back the flood anymore, your body releases a seemingly endless stream as you moan quietly in relief, thankful that you made it in time.');
        } else {
          if (((st as any).rand_pee ?? 0) === 3) {
            scene.text('Immediately up entering the restroom, your nostrils are assaulted by the most heinous stench. Knowing that you have no other option, you try to suppress your gags as you sit in a stall and do your business.');
          } else {
            if (((st as any).rand_pee ?? 0) === 4) {
              // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/public/hovercraft' + rand(1,...
              scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/public/hovercraft` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
              scene.text('You enter the stall and groan in disgust at the sight of the gross facilities. Realizing that you have no choice, you decided to "hovercraft" it. Instead of sitting down on the filthy seat, you hover your ass above the bowl before letting go of the pee you\'d been holding, not caring if all of the stream gets into the toilet or elsewhere.');
            } else {
              (st as any).rand_pee = (Math.floor(Math.random() * 22) + 0);
              scene.text('As you sit down to relieve your bladder you get distracted reading some of the graffiti on the wall of the stall.');
              (st as any).rand_girl = qspFunc(s, 'gschool_randperson', '1', '', 1, 1, 1, 1, 1, 0);
              if ((!((st as any).rand_pee ?? 0))) {
                scene.text('Albina and her Starlets are a bunch of dirty whores!');
              } else {
                if (((st as any).rand_pee ?? 0) === 1) {
                  // TODO-QSP: dynamic text: <<$rand_girl>>''s vagina smells like puke!
                  scene.text(`${((st as any).rand_girl ?? '')}'s vagina smells like puke!`);
                } else {
                  if (((st as any).rand_pee ?? 0) === 2) {
                    scene.text('Beware of Dimka! He\'s not as nice as he seems!');
                  } else {
                    if (((st as any).rand_pee ?? 0) === 3) {
                      scene.text('If you\'re on the rag, check the seat when you get up and WIPE IT OFF!!! No one wants a nasty seat!');
                    } else {
                      if (((st as any).rand_pee ?? 0) === 4) {
                        scene.text('If you smell fish, it\'s probably your dirty twat! Hahaha!');
                      } else {
                        if (((st as any).rand_pee ?? 0) === 5) {
                          scene.text('Shave your punani, bitches! No one likes digging through a forest, LOL.');
                        } else {
                          if (((st as any).rand_pee ?? 0) === 6) {
                            scene.text('Shaved pussies stink and are prone to infection! Don\'t believe the lies!');
                          } else {
                            if (((st as any).rand_pee ?? 0) === 7) {
                              scene.text('Fight the Patriarchy!');
                            } else {
                              if (((st as any).rand_pee ?? 0) === 8) {
                                scene.text('Tampons vs. Pads, cast your vote! Below this text are hash marks indicating various girl\'s preference. One person also wrote "Freebleeder for life!" Ewww.');
                              } else {
                                if (((st as any).rand_pee ?? 0) === 9) {
                                  scene.text('Petka\'s cock is smaller than my lipstick tube, LOL!');
                                } else {
                                  if (((st as any).rand_pee ?? 0) === 10) {
                                    scene.text('You\'re beautiful! Believe that!');
                                  } else {
                                    if (((st as any).rand_pee ?? 0) === 11) {
                                      scene.text('Putin is a chauvinist pig!');
                                    } else {
                                      if (((st as any).rand_pee ?? 0) === 12) {
                                        scene.text('Suck dick! It\'s good for you!');
                                      } else {
                                        if (((st as any).rand_pee ?? 0) === 13) {
                                          scene.text('"I\'ll pull out, I swear! is the most dangerous lie you can believe." This text is followed by a crude drawing of a pregnant woman.');
                                        } else {
                                          if (((st as any).rand_pee ?? 0) === 14) {
                                            scene.text('Cut back on the perfume, ladies. It smells like a unicorn farted in here.');
                                          } else {
                                            if (((st as any).rand_pee ?? 0) === 15) {
                                              // TODO-QSP: dynamic text: <<$rand_girl>> is a slut and everyone knows it!
                                              scene.text(`${((st as any).rand_girl ?? '')} is a slut and everyone knows it!`);
                                            } else {
                                              if (((st as any).rand_pee ?? 0) === 16) {
                                                scene.text('Men are like pantyhose; They either run, cling, or don\'t fit right in the crotch!');
                                              } else {
                                                if (((st as any).rand_pee ?? 0) === 17) {
                                                  scene.text('Gopnik guys are SO HOT!!!');
                                                } else {
                                                  if (((st as any).rand_pee ?? 0) === 18) {
                                                    scene.text('That rumor about black guys is true! Just ask Marcus for a sneak peek.');
                                                  } else {
                                                    if (((st as any).rand_pee ?? 0) === 19) {
                                                      scene.text('Butt sex is the best sex!');
                                                    } else {
                                                      if (((st as any).rand_pee ?? 0) === 20) {
                                                        scene.text('I just wrote on the wall. Take THAT, society!');
                                                      } else {
                                                        scene.text('Never quit loving your clit.');
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
    if (((st as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((st as any).mesec ?? 0) > 0  ||  (((st as any).placebopart ?? 0) > 0  &&  ((st as any).pillcon ?? 0) < 40000))  &&  (((st as any).isprok ?? 0) === 1  ||  (((st as any).isprok ?? 0) === 0  &&  ((st as any).isprokp ?? 0) === 0))  &&  (!((st as any).knowpreg ?? 0))) {
      scene.actions([
        { label: 'Change tampon (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tampons'] = ((st as any).mc_inventory['tampons'] ?? 0) - (1);
    (st as any).isprok = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/period/tampon/' + rand(1, 12...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/period/tampon/` + (Math.floor(Math.random() * 12) + 1) + '.jpg"></center>');
    scene.text('Reaching down and taking the string between your fingers, you slowly pull the used tampon from your vagina. You wrap it in toilet paper to be thrown in the trash bin. Opening your purse, you retrieve a fresh one before unpackaging it and carefully inserting it into yourself.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPblcPeeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).mesec ?? 0) > 0  &&  (((st as any).isprokp ?? 0) === 1  ||  (((st as any).isprok ?? 0) === 0  &&  ((st as any).isprokp ?? 0) === 0))  &&  ((st as any).mc_inventory ?? 0)?.['sanitary_pads'] > 0  &&  ((st as any).bag ?? 0) === 1  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Change pad (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sanitary_pads'] = ((st as any).mc_inventory['sanitary_pads'] ?? 0) - (1);
    (st as any).isprokp = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/period/pad/' + rand(1, 6) + ...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/period/pad/` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
    scene.text('Checking your pad, you decide it\'s time for a new one. You carefully peel it off of your panties before folding it into thirds and setting it aside to be thrown away. Digging in your bag, you pull out a fresh pad, unpackage it, peel off the adhesive strip, and place it into your underwear. Finally, you wrap the wings around the sides of the gusset to make sure it is nice and secure.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPblcPeeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPblcPeeEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPblcPeeEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish and wipe', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    if (((st as any).pcs_willpwr ?? 0) < 150) {
      (st as any).pcs_willpwr = ((st as any).pcs_willpwr ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/wiping/' + rand(1, 9) + '.jp...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/wiping/` + (Math.floor(Math.random() * 9) + 1) + '.jpg"></center>');
    (st as any).rand_pee = (Math.floor(Math.random() * 7) + 0);
    if ((!((st as any).rand_pee ?? 0))) {
      scene.text('Gathering some toilet paper from the roll, you reach down wipe your vagina clean from the last drops of urine leaking from you before dropping the paper into the toilet.');
    } else {
      if (((st as any).rand_pee ?? 0) === 1) {
        scene.text('Wrapping some toilet paper around your hand, you reach around and give your pussy and ass a quick wipe before letting the paper drop into the bowl.');
      } else {
        if (((st as any).rand_pee ?? 0) === 2) {
          scene.text('You take a wad of toilet paper in your fist before using it to gently pay your vagina dry. You toss the used material in the toilet and flush it down.');
        } else {
          if (((st as any).rand_pee ?? 0) === 3) {
            scene.text('You gather some of the rough, cheap toilet paper and use it to lightly wipe yourself, not wanting to irritate your sensitive skin. You drop it into the dirty toilet and use your foot to push the handle in order to flush.');
          } else {
            if (((st as any).rand_pee ?? 0) === 4) {
              scene.text('Looking for the roll of toilet paper, you are dismayed to see that the roll has been used up. Noticing that the stall next to you seems occupied, you politely ask the stranger to help you out. The stranger chuckles a bit before kindly handing you a wad under the stall wall, which you happily use.');
            } else {
              // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/body/pee/wiping/no' + rand(1, 6) + '....
              scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/body/pee/wiping/no` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
              scene.text('Reaching out for toilet paper, you sigh as you notice that the roll is empty. Annoyed, you wiggle your ass to shake the last few drops off before pulling up your panties and walking out of the stall.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', 'finish_step', ((st as any).loc ?? 0), ((st as any).loc_arg ?? 0));
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShaveOptions(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).shave_img_hgt ?? 0))) {
    (s as any).shave_img_hgt = 100;
  }
  scene.text('<center><h3><b>Shaving Options</b></h3>');
  scene.text('Here you can choose your style for pubic hair and which body parts you wish to shave.');
  // TODO-QSP: dynamic text: Your razors will last for&nbsp;<b><<mc_inventory[''razor'']>></b>&nbsp;more shav...
  scene.text(`Your razors will last for&nbsp;<b>${((s as any).mc_inventory ?? 0)?.['razor'] ?? ''}</b>&nbsp;more shaves.`);
  scene.text('<b>Change your shaving routine:');
  scene.text('Note: Choosing to never shave, or to shave legs only, will remove your chosen shave style.');
  scene.text('You can only choose a style if you currently have enough hair to support it.</b>');
  if ((!((s as any).pubestyle ?? 0))) {
    // TODO-QSP: dynamic text: iif(shave_menu = 1, 'Everything&nbsp;|&nbsp;', '<a href="exec: msg ''You must ch...
    scene.text('iif(shave_menu = 1, \'Everything&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg /u0027You must choose a shave style before you can choose to shave everything./u0027 */ return s; }); return false;">Everything</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 2, 'Pussy only&nbsp;|&nbsp;', '<a href="exec: msg ''You must ch...
    scene.text('iif(shave_menu = 2, \'Pussy only&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: msg /u0027You must choose a shave style before you can choose to shave your pussy./u0027 */ return s; }); return false;">Pussy only</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 3, 'Legs only&nbsp;|&nbsp;', '<a href="exec:shave_menu = 3 & pu...
    scene.text('iif(shave_menu = 3, \'Legs only&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.3; s.pubestyle = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Legs only</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 0, 'Never shave', '<a href="exec:shave_menu = 0 & pubestyle = 0...
    scene.text('iif(shave_menu = 0, \'Never shave\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.0; s.pubestyle = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Never shave</a>\')');
  } else {
    // TODO-QSP: dynamic text: iif(shave_menu = 1, 'Everything&nbsp;|&nbsp;', '<a href="exec:shave_menu = 1 & g...
    scene.text('iif(shave_menu = 1, \'Everything&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.1; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Everything</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 2, 'Pussy only&nbsp;|&nbsp;', '<a href="exec:shave_menu = 2 & g...
    scene.text('iif(shave_menu = 2, \'Pussy only&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.2; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Pussy only</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 3, 'Legs only&nbsp;|&nbsp;', '<a href="exec:shave_menu = 3 & pu...
    scene.text('iif(shave_menu = 3, \'Legs only&nbsp;|&nbsp;\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.3; s.pubestyle = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Legs only</a>&nbsp;|&nbsp;\')');
    // TODO-QSP: dynamic text: iif(shave_menu = 0, 'Never shave', '<a href="exec:shave_menu = 0 & pubestyle = 0...
    scene.text('iif(shave_menu = 0, \'Never shave\', \'<a href="#" onclick="window.__gameStore.setState((s) => { s.shave_menu = s.0; s.pubestyle = s.0; return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Never shave</a>\')');
  }
  if ((!((s as any).shave_menu ?? 0))) {
    scene.text('Your current routine doesn\'t include any shaving options.');
    (s as any).temp_toggle = 'shave_menu = 2';
  } else {
    if (((s as any).shave_menu ?? 0) === 1) {
      scene.text('Your current routine involves shaving your legs and maintaining your current pubic style.');
      scene.text('It takes 15 minutes to complete this routine.');
      (s as any).temp_toggle = 'shave_menu = 1';
    } else {
      if (((s as any).shave_menu ?? 0) === 2) {
        scene.text('Your current routine involves not shaving your legs and maintaining your current pubic style.');
        scene.text('It takes 10 minutes to complete this routine.');
        (s as any).temp_toggle = 'shave_menu = 2';
      } else {
        if (((s as any).shave_menu ?? 0) === 3) {
          scene.text('Your current routine involves shaving your legs and not maintaining any chosen pubic style.');
          scene.text('It takes 5 minutes to complete this routine.');
          (s as any).temp_toggle = 'shave_menu = 1';
        }
      }
    }
  }
  // TODO-QSP: dynamic text: <table border=0 cellspacing=<<shave_img_hgt/25>> cellpadding=5>
  scene.text(`<table border=0 cellspacing=${((s as any).shave_img_hgt ?? '')/25} cellpadding=5>`);
  scene.img('images/pc/body/pussy/hair/pussy.jpg');
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 2);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 3);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 4);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 5);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  scene.text('<tr><td><center>');
  if (((s as any).pubestyle ?? 0) !== 1) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 1 & shave_length = 0 & shave_trigger = 3 & <<$temp_tog...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.1; s.shave_length = s.0; s.shave_trigger = s.3; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Clean Shave</a>`);
  } else {
    scene.text('Clean Shave');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 2  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 2 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.2; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">V-shaped</a>`);
  } else {
    scene.text('V-shaped');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 3  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 3 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.3; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Triangle-shaped</a>`);
  } else {
    scene.text('Triangle-shaped');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 4  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 4 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.4; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Landing-strip</a>`);
  } else {
    scene.text('Landing-strip');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 5  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 5 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.5; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Heart-shaped</a>`);
  } else {
    scene.text('Heart-shaped');
  }
  scene.text('</center></td></tr>');
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 6);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 7);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 8);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 9);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 26, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 10);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  scene.text('<tr><td><center>');
  if (((s as any).pubestyle ?? 0) !== 6  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 6 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.6; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Flame-shaped</a>`);
  } else {
    scene.text('Flame-shaped');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 7  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 7 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.7; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Cross-Shaped</a>`);
  } else {
    scene.text('Cross-Shaped');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 8  &&  ((s as any).pcs_pubes ?? 0) > 16) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 8 & shave_length = 16 & shave_trigger = 21 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.8; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Trimmed</a>`);
  } else {
    scene.text('Trimmed');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 9  &&  ((s as any).pcs_pubes ?? 0) > 20) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 9 & shave_length = 20 & shave_trigger = 26 & <<$temp_t...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.9; s.shave_length = s.20; s.shave_trigger = s.26; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Small Bush</a>`);
  } else {
    scene.text('Small Bush');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 10) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 10 & shave_length = 26 & shave_trigger = 31 & <<$temp_...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.10; s.shave_length = s.26; s.shave_trigger = s.31; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Full Bush</a>`);
  } else {
    scene.text('Full Bush');
  }
  scene.text('</center></td></tr>');
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 5, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 11);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  (s as any).temp_pube_image = qspFunc(s, '$body_image', '', 'pubes', 16, qspUntranslated(s, "pcs_pubecol[2]", { location: "din_van" }), 12);
  scene.img(`${((s as any).temp_pube_image ?? '')}`);
  scene.text('<tr><td><center>');
  if (((s as any).pubestyle ?? 0) !== 11  &&  ((s as any).pcs_pubes ?? 0) > 10) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 11 & shave_length = 0 & shave_trigger = 8 & <<$temp_to...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.11; s.shave_length = s.0; s.shave_trigger = s.8; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Lazy</a>`);
  } else {
    scene.text('Lazy');
  }
  scene.text('</center></td><td><center>');
  if (((s as any).pubestyle ?? 0) !== 12  &&  ((s as any).pcs_pubes ?? 0) > 15) {
    // TODO-QSP: dynamic text: <a href="exec:pubestyle = 12 & shave_length = 16 & shave_trigger = 21 & <<$temp_...
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { s.pubestyle = s.12; s.shave_length = s.16; s.shave_trigger = s.21; /* TODO-QSP: ${((s as any).temp_toggle ?? '')} */ return s; }); window.__gameStore.getState().doGoto(/u0027din_van/u0027, /u0027shave_options/u0027); return false;">Mini Bush</a>`);
  } else {
    scene.text('Mini Bush');
  }
  scene.text('</center></td></tr></table>');
  scene.text('<sub><small>Lazy - (don\'t immediately shave stubble)</small></sub></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Set image height for this view', handler: (st: GameState) => {
    (st as any).shave_img_hgt = window.prompt("Enter height in pixels you want for images on this page<br>(default 100, min 50, max 500)") ?? '';
    if (((st as any).shave_img_hgt ?? 0) < 50) {
      (st as any).shave_img_hgt = 50;
    } else {
      if (((st as any).shave_img_hgt ?? 0) > 500) {
        (st as any).shave_img_hgt = 500;
      }
    }
    qspGoto(st, 'din_van', 'shave_options');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['all'] = Math.min(3, Math.max(1, (((s as any).pcs_leghair ?? 0)*4 + Math.max(0, ((s as any).pcs_pubes ?? 0)-((s as any).shave_length ?? 0)))/20));
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['pussy'] = Math.min(2, Math.max(1, (Math.max(0, ((s as any).pcs_pubes ?? 0)-((s as any).shave_length ?? 0)))/20));
  ((s as any).razors_to_use = (s as any).razors_to_use ?? {})['legs'] = Math.min(3, Math.max(1, (((s as any).pcs_leghair ?? 0)*4)/20));
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
    case 'misery':
      enterMisery(s, scene);
      break;
    case 'misery_2':
      enterMisery_2(s, scene);
      break;
    case 'buffpick':
      enterBuffpick(s, scene);
      break;
    case 'ReliefReact':
      enterReliefReact(s, scene);
      break;
    case 'HappyReact':
      enterHappyReact(s, scene);
      break;
    case 'DisappointedReact':
      enterDisappointedReact(s, scene);
      break;
    case 'HorrifiedReact1':
      enterHorrifiedReact1(s, scene);
      break;
    case 'ConcernedReact1':
      enterConcernedReact1(s, scene);
      break;
    case 'ExcitedReact1':
      enterExcitedReact1(s, scene);
      break;
    case 'ArousedReact1':
      enterArousedReact1(s, scene);
      break;
    case 'WifeReact1':
      enterWifeReact1(s, scene);
      break;
    case 'WifeReact2':
      enterWifeReact2(s, scene);
      break;
    case 'prvt_pee':
      enterPrvtPee(s, scene);
      break;
    case 'can_prvt_pee':
      enterCanPrvtPee(s, scene);
      break;
    case 'prvt_pee_do':
      enterPrvtPeeDo(s, scene);
      break;
    case 'prvt_pee_end':
      enterPrvtPeeEnd(s, scene);
      break;
    case 'pblc_pee':
      enterPblcPee(s, scene);
      break;
    case 'pblc_pee_end':
      enterPblcPeeEnd(s, scene);
      break;
    case 'shave_options':
      enterShaveOptions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const din_van: LocationDef = {
  name: 'din_van',
  title: 'Your skin is pruning excessively, maybe you shouldn\'t shower',
  region: 'other',
  locationType: 'restroom',
  enter: enter,
};
