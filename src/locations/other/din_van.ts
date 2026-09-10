import { qspCall, qspFunc } from '../_shared/qspBridge';

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
  if (((s as any).noshampoo ?? 0) === 0) {
    (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) - (1);
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] < 0) {
    (s as any).mc_inventory['shampoo'] = 0;
  }
  qspCall(s, 'body', 'SkinGain', 'CleanSelf');
  qspCall(s, 'stat', '');
  if (((s as any).false_lashes ?? 0) >= 1) {
    if (Math.floor(Math.random() * 5) + 0 < 3) {
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
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 5) + 2);
    scene.text('You\'ve already gotten used to your feminine body and its softness doesn\'t surprise you very much anymore, but you still let your hands wander a bit over your soft curves before you begin to wash yourself in earnest.');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 3) + 0);
    // TODO-QSP: dynamic text: '+iif(noshampoo_tmp = 1, 'It's not your shampoo, so you use a little more than y...
    scene.text('\'+iif(noshampoo_tmp = 1, \'It\'s not your shampoo, so you use a little more than you normally would; with a tinge of guilt you \', \'Using your own shampoo, you carefully \')+\'lather yourself up, trying not to miss any spots, and then wash off.');
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0  &&  ((s as any).noshampoo_tmp ?? 0) === 1) {
    scene.text('When you get a chance, you should stop by the supermarket and buy some shampoo.');
  } else {
    // TODO-QSP: dynamic text: You are getting low on shampoo, with only <<mc_inventory['shampoo']>> remaining....
    scene.text(`You are getting low on shampoo, with only ${((s as any).mc_inventory ?? 0)?.['shampoo']} remaining. When you get a chance, you should stop by the supermarket and buy some more.`);
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
    (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) - (2);
    scene.text('Your skin is starting to prune, maybe you shouldn\'t shower this often');
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
      scene.text('As you clean your breasts, something catches your eye. White drops come from your nipples. It is milk. Regularly massaging your breasts probably made you lactate!<br>');
      (s as any).lactation['induced'] = 1;
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
      scene.actions([
        { label: 'Use the showerhead on your pussy', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 6) + 0 === 0  &&  ((s as any).locM ?? 0) === 'uni_dorm') {
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
