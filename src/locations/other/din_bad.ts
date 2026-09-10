import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMobileCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).menu_off ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).phone_off ?? 0) === 1) {
    // TODO-QSP: exit
  }
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'jobs', 'has_booking_for_day', 'pav_leonid_slave', ((s as any).daystart ?? 0)) === 1  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 10  &&  (!((s as any).leonidVisit ?? 0))) {
    scene.text('<center><b>Your phone is ringing</b></center>');
    qspCall(s, 'telefon', 'phone_ring');
    // TODO-QSP: pl '<center><a href="exec:gt ''leonid'', ''call''"><img src="images/system/phone/call_accept.png"></...
  }
  if (((s as any).QWdogreiqTimer ?? 0) === 0  &&  ((s as any).QWdogReiq ?? 0) === 2  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).qwdogiventday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 12) {
    scene.text('<center><b>Your phone is ringing</b></center>');
    qspCall(s, 'telefon', 'phone_ring');
    scene.img('images/system/phone/call_accept.png');
  }
  scene.build();
}

function enterDSalf(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Tissues</h1></center>');
  scene.img(`${qspUntranslated(s, "FUNC(''purse_image'',  currentpursetype, currentpursenumber)", { location: "din_bad" })}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 12;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).cumspclnt = 9;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Wipe your face and hands clean</b></a>'
  }
  if (((s as any).cumloc ?? 0)[14] > 0) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 14;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Wipe your belly clean</b></a>'
  }
  if (qspFunc(s, 'cum_manage', 'check_private', 15) === 1  &&  ((s as any).cumloc ?? 0)[15] > 0) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 16;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Wipe your breasts clean</b></a>'
  }
  if (qspFunc(s, 'cum_manage', 'check_private') === 1  &&  (((s as any).cumloc ?? 0)[1] + ((s as any).cumloc ?? 0)[4] > 0  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1)) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 15;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Wipe your ass and pussy clean</b></a>'
  }
  if (((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 17;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Wipe your arms and legs clean</b></a>'
  }
  if (((s as any).cumloc ?? 0)[2] > 0  ||  ((s as any).cumloc ?? 0)[5] > 0  ||  ((s as any).cumloc ?? 0)[6] > 0  ||  ((s as any).cumloc ?? 0)[7] > 0) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).cumspclnt = 6;
    // TODO-QSP: gs ''cum_cleanup''
    (s as any).minut = ((s as any).minut ?? 0) + (2);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Clean your clothing</b></a>'
  }
  if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    // TODO-QSP: '<a href="exec:mc_inventory[''makeup_wipes''] -= 1
    (s as any).pcs_makeup = 1;
    (s as any).minut = ((s as any).minut ?? 0) + (5);
    // TODO-QSP: gs ''stat''
    // TODO-QSP: gs ''din_bad'', ''d_bag''"><b>Remove your makeup</b></a>'
  }
  scene.text('<a href="exec:gs \'stat\' & gs \'din_bad\', \'d_bag\'"><br><b>Put tissues away</b></a>');
  scene.text('</td></tr></table></center>');
  scene.build();
}

function enterDMouthwash(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Mouth Wash</h1></center>');
  scene.img(`${qspUntranslated(s, "FUNC(''purse_image'',  currentpursetype, currentpursenumber)", { location: "din_bad" })}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 1;
  (s as any).mc_inventory['mouthwash'] = ((s as any).mc_inventory['mouthwash'] ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('Your breath smells minty fresh.');
  scene.text('');
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    // TODO-QSP: gs 'stat'
    qspCall(st, 'din_bad', 'd_bag');
  } },
  ]);
  scene.build();
}

function enterDBag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Purse</h1></center>');
  scene.img(`${qspUntranslated(s, "FUNC(''purse_image'', currentpursetype, currentpursenumber)", { location: "din_bad" })}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['makeup_wipes']>></b> wet wipes left in your purse. <...
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['makeup_wipes']}</b> wet wipes left in your purse. <a href="exec:gs 'din_bad', 'd_salf'">Use a tissue</a>`);
  }
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0  &&  ((s as any).pain ?? 0)?.['total'] > 0) {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['painkillers']>></b> painkiller'+iif(mc_inventory['pa...
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['painkillers']}</b> painkiller'+iif(mc_inventory['painkillers'] > 1, 's ', ' ')+'left in your purse. <a href="exec: gs 'drugs', 'painkiller' & gs 'din_bad', 'd_bag'">${qspFunc(s, 'drugs', 'painkiller_act_str')}</a>`);
  } else {
    // TODO-QSP: dynamic text: You have <b><<mc_inventory['painkillers']>></b> painkiller'+iif(mc_inventory['pa...
    scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['painkillers']}</b> painkiller'+iif(mc_inventory['painkillers'] > 1, 's ', ' ')+'left in your purse.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['mouthwash'] > 0  &&  (((s as any).pcs_breath ?? 0) === 0  ||  ((s as any).cumloc ?? 0)[12] === 1)) {
    // TODO-QSP: dynamic text: There's mouthwash in your purse. <b><<mc_inventory['mouthwash']>></b> uses remai...
    scene.text(`There's mouthwash in your purse. <b>${((s as any).mc_inventory ?? 0)?.['mouthwash']}</b> uses remaining. <a href="exec:gs 'din_bad', 'd_mouthwash'">Use mouthwash</a>`);
  } else {
    // TODO-QSP: dynamic text: There's mouthwash in your purse. <b><<mc_inventory['mouthwash']>></b> uses remai...
    scene.text(`There's mouthwash in your purse. <b>${((s as any).mc_inventory ?? 0)?.['mouthwash']}</b> uses remaining.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['travel_mirror'] === 1) {
    // TODO-QSP: 'You have a <a href="exec: cla & gt ''mirror'', ''d_bag_mirror''">compact mirror</a> in your purse'+...
    if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
      scene.text('You can apply some <a href="exec: cls & gs \'mirror\', \'applyLipbalm\' & act \'Return\':gs \'din_bad\', \'d_bag\'">lip balm</a>');
    }
  } else {
    scene.text('You have some portable makeup in your purse, but you need a compact mirror to apply it.');
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: dynamic text: There's <a href="exec:hscrunchw = 0 & gs 'din_bad', 'p_deodorant'">deodorant</a>...
    scene.text(`There's <a href="exec:hscrunchw = 0 & gs 'din_bad', 'p_deodorant'">deodorant</a> in your purse. <b>${((s as any).mc_inventory ?? 0)?.['deodorant']}</b> uses remaining.`);
  } else {
    // TODO-QSP: dynamic text: You are already wearing deodorant. <b><<mc_inventory['deodorant']>></b> uses rem...
    scene.text(`You are already wearing deodorant. <b>${((s as any).mc_inventory ?? 0)?.['deodorant']}</b> uses remaining.`);
    if (((s as any).mc_inventory ?? 0)?.['deodorant'] === 0  &&  (!((s as any).deodorant_on ?? 0))) {
      // TODO-QSP: dynamic text: You are not wearing deodorant. <b><<mc_inventory['deodorant']>></b> uses remaini...
      scene.text(`You are not wearing deodorant. <b>${((s as any).mc_inventory ?? 0)?.['deodorant']}</b> uses remaining.`);
    } else {
      // TODO-QSP: dynamic text: You are already wearing deodorant. <b><<mc_inventory['deodorant']>></b> uses rem...
      scene.text(`You are already wearing deodorant. <b>${((s as any).mc_inventory ?? 0)?.['deodorant']}</b> uses remaining.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['travel_mirror'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['comb'] === 1) {
      if ((!((s as any).pcs_hairbsh ?? 0))) {
        // TODO-QSP: dynamic text: There's a hairbrush in your purse. <a href="exec: minut += min(15, max(1, pcs_ha...
        scene.text('There\'s a hairbrush in your purse. <a href="exec: minut += min(15, max(1, pcs_hairlng / 80)) & pcs_hairbsh = 1 & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Brush your hair</a>');
      } else {
        scene.text('There\'s a hairbrush in your purse. Your hair doesn\'t need brushing right now.');
      }
    }
    if (((s as any).pcs_hairbsh ?? 0) > 0  &&  ((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
      if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        // TODO-QSP: dynamic text: As you have a scrunchy, you can arrange your hair into a <a href="exec:hscrunchw...
        scene.text(`As you have a scrunchy, you can arrange your hair into a <a href="exec:hscrunchw = 1 & gs 'din_bad', 'd_bag'">ponytail</a>. You have ${((s as any).mc_inventory ?? 0)?.['scrunchies']} scrunchies left.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        // TODO-QSP: dynamic text: You have several clips, pins and grips for you hair. Hence, you can <a href="exe...
        scene.text(`You have several clips, pins and grips for you hair. Hence, you can <a href="exec:hpingripw = 1 & gs 'din_bad', 'd_bag'">updo your hair</a>. You have ${((s as any).mc_inventory ?? 0)?.['kirbygrips']} hair accessories at your disposal.`);
      }
      if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
        if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
          scene.text('You can use two hair ties to make yourself some <a href="exec:hpigtail = 1 & hscrunchw = 2 & gs \'din_bad\', \'d_bag\'">pigtails</a>.');
        }
        if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
          // TODO-QSP: dynamic text: You can spend <<pcs_hairlng/10>> minutes <a href="exec:minut += pcs_hairlng/10 &...
          scene.text(`You can spend ${((s as any).pcs_hairlng ?? 0)/10} minutes <a href="exec:minut += pcs_hairlng/10 & hbraids = 15 & gs 'din_bad', 'd_bag'">braiding</a> your hair, just the way your sister taught you.`);
        }
      }
    }
    if (((s as any).hscrunchw ?? 0) === 1) {
      // TODO-QSP: 'Remove the <a href="exec:hscrunchw = 0
      // TODO-QSP: gs ''din_bad'', ''d_bag''">scrunchie</a> to get rid of the ponytail.'
    }
    if (((s as any).hscrunchw ?? 0) === 2) {
      // TODO-QSP: '<a href="exec:hpigtail = 0
      (s as any).hscrunchw = 0;
      // TODO-QSP: gs ''din_bad'', ''d_bag''">Remove</a> your scrunchies and let your hair flow free again.'
    }
    if (((s as any).hpingripw ?? 0) === 1) {
      // TODO-QSP: 'Let your hair <a href="exec:hpingripw = 0
      // TODO-QSP: gs ''din_bad'', ''d_bag''">flow free</a>.'
    }
    if (((s as any).hbraids ?? 0) > 0) {
      // TODO-QSP: 'Take <<hbraids*2+pcs_hairlng/50>> minutes removing your <a href="exec:minut += hbraids*2+pcs_hairln...
      (s as any).hbraids = 0;
      // TODO-QSP: gs ''din_bad'', ''d_bag''">braid</a>.'
    }
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
      if (((s as any).preziktype ?? 0) === 2  ||  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
        // TODO-QSP: dynamic text: You have <b><<iif(preziktype = 2, mc_inventory['normal_condoms'], mc_inventory['...
        scene.text(`You have <b>${((((s as any).preziktype ?? 0) === 2) ? (((s as any).mc_inventory ?? 0)?.['normal_condoms']) : (((s as any).mc_inventory ?? 0)?.['normal_condoms']+((s as any).mc_inventory ?? 0)?.['equipped_condoms']))}</b> normal condoms left, and <b>${((((s as any).preziktype ?? 0) === 2) ? (((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']) : (((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']))}</b> sabotaged <a href="exec:gs 'din_bad', 'din_Switch_Condom_Menu'">condoms left in your purse.</a>`);
      } else {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory['normal_condoms']+mc_inventory['equipped_condoms']>><...
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['normal_condoms']+((s as any).mc_inventory ?? 0)?.['equipped_condoms']}</b> <a href="exec:gs 'din_bad', 'din_Switch_Condom_Menu'">condoms left in your purse.</a>`);
      }
    } else {
      scene.text('You are out of condoms.');
    }
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      // TODO-QSP: dynamic text: You have <b><<mc_inventory['lubricant']>></b> squirts of lubricant available
      scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['lubricant']}</b> squirts of lubricant available`);
      if ((!((s as any).auto_anal_lube ?? 0))) {
        scene.text('Automatically use for anal sex: <a href="exec:auto_anal_lube = 1 & gs \'stat\' & gs \'din_bad\', \'d_bag\'">No</a>');
      } else {
        scene.text('Automatically use for anal sex: <a href="exec:auto_anal_lube = 0 & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Yes</a>');
      }
      if ((!((s as any).auto_vag_lube ?? 0))) {
        scene.text('Automatically use for vaginal sex: <a href="exec:auto_vag_lube = 1 & gs \'stat\' & gs \'din_bad\', \'d_bag\'">No</a>');
      } else {
        scene.text('Automatically use for vaginal sex: <a href="exec:auto_vag_lube = 0 & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Yes</a>');
      }
    }
    if (qspFunc(s, 'cum_manage', 'is_private_location') === 1) {
      qspCall(s, 'din_van', 'toymanage');
      qspCall(s, 'piercing_management', 'set_manage_act');
    }
    if (((s as any).mc_inventory ?? 0)?.['amphetamine'] > 0) {
      // TODO-QSP: dynamic text: You have <b><<mc_inventory['amphetamine']>></b> tablets of amphetamine left in y...
      scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['amphetamine']}</b> tablets of amphetamine left in your purse. <a href="exec: gs 'drugs', 'amphetamine'`);
      // TODO-QSP: gs ''din_bad'', ''d_bag''">Take One</a>'
    }
    if (((s as any).mc_inventory ?? 0)?.['joints'] > 0) {
      // TODO-QSP: dynamic text: You have enough weed for <b><<mc_inventory['joints']>></b> joints.
      scene.text(`You have enough weed for <b>${((s as any).mc_inventory ?? 0)?.['joints']}</b> joints.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
      // TODO-QSP: dynamic text: You have <b><<mc_inventory['contraceptive_pill']>></b> unopened packages of <a h...
      scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['contraceptive_pill']}</b> unopened packages of <a href="exec:gs 'din_bad', 'd_tabletkied'">birth control pills</a> and <b>${((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)]}</b> pills left in your opened package.`);
    } else {
      // TODO-QSP: dynamic text: You have <b><<pillsleft[ptype]>></b> <a href="exec:gs 'din_bad', 'd_tabletkied'"...
      scene.text(`You have <b>${((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)]}</b> <a href="exec:gs 'din_bad', 'd_tabletkied'">birth control pills</a> left in your purse.`);
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory['contraceptive_pill']>></b> unopened packages of <a h...
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['contraceptive_pill']}</b> unopened packages of <a href="exec:gs 'din_bad', 'd_tabletkied'">birth control pills</a> in your purse.`);
      } else {
        scene.text('You are out of <a href="exec:gs \'din_bad\', \'d_tabletkied\'">birth control pills</a>.');
      }
      if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
        if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
          scene.text('You have one <a href="exec:gs\'medical_din\',\'morning_after_pill\'">morning after pill</a>.');
        } else {
          // TODO-QSP: dynamic text: You have <b><<mc_inventory['morning_after_pill']>></b> <a href="exec:gs'medical_...
          scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['morning_after_pill']}</b> <a href="exec:gs'medical_din','morning_after_pill'">morning after pills</a>.`);
        }
      } else {
        scene.text('You have no morning after pills.');
      }
      if (((s as any).mc_inventory ?? 0)?.['mentats'] > 0  &&  ((s as any).drugVars ?? 0)?.['mentats_dose'] < 3) {
        // TODO-QSP: dynamic text: <a href="exec: gs 'drugs', 'mentats' & gs 'din_bad', 'd_bag' & *pl '<font color ...
        scene.text(`<a href="exec: gs 'drugs', 'mentats' & gs 'din_bad', 'd_bag' & *pl '<font color = green><br>You swallow the neurobooster pill.</font>'">Use a neurobooster pill in your purse.</a> There are <b>${((s as any).mc_inventory ?? 0)?.['mentats']}</b> pills left. The warning label says not to take more than one per day.`);
      } else {
        // TODO-QSP: dynamic text: There are <b><<mc_inventory['mentats']>></b> neurobooster pills left. You really...
        scene.text(`There are <b>${((s as any).mc_inventory ?? 0)?.['mentats']}</b> neurobooster pills left. You really shouldn't take any more pills today.`);
      }
      if (((s as any).mc_inventory ?? 0)?.['steroids'] > 0) {
        scene.text('<a href="exec: gs \'drugs\', \'steroids\'');
        // TODO-QSP: gs ''din_bad'', ''d_bag''">Use steroids.</a> You have <b><<mc_inventory[''steroids'']>></b> steroids...
      }
      if (((s as any).mc_inventory ?? 0)?.['breastcream'] > 0) {
        scene.text('<a href="exec: gs \'drugs\', \'breastcream\'');
        // TODO-QSP: gs ''din_bad'', ''d_bag''">Apply breast cream.</a> You have <b><<mc_inventory[''breastcream'']>></b>...
      }
      if (((s as any).mc_inventory ?? 0)?.['aphrodisiac'] > 0) {
        scene.text('<a href="exec: gs \'drugs\', \'aphrodisiac\'');
        // TODO-QSP: gs ''din_bad'', ''d_bag''
        // TODO-QSP: *pl $drugVars[''aphrodisiac_msg'']
        // TODO-QSP: *pl $min_arousal_msg
        // TODO-QSP: killvar ''$min_arousal_msg''">Chew aphrodisiac gum.</a> You have <b><<mc_inventory[''aphrodisiac'']>...
      }
      if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 4  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
        // TODO-QSP: dynamic text: You carry your sports water bottle in your purse. It's still completely full. <a...
        scene.text('You carry your sports water bottle in your purse. It\'s still completely full. <a href="exec: mc_inventory[\'refill_bottle_water\'] = 3 & pcs_hydra += 75 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Drink</a>');
      } else {
        // TODO-QSP: dynamic text: You carry your sports water bottle in your purse. It's almost full. <a href="exe...
        scene.text('You carry your sports water bottle in your purse. It\'s almost full. <a href="exec: mc_inventory[\'refill_bottle_water\'] = 2 & pcs_hydra += 75 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Drink</a>');
        if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
          // TODO-QSP: dynamic text: You carry your sports water bottle in your purse. It's half full. <a href="exec:...
          scene.text('You carry your sports water bottle in your purse. It\'s half full. <a href="exec: mc_inventory[\'refill_bottle_water\'] = 1 & pcs_hydra += 75 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Drink</a>');
        } else {
          // TODO-QSP: dynamic text: You carry your sports water bottle in your purse. It's almost empty. <a href="ex...
          scene.text('You carry your sports water bottle in your purse. It\'s almost empty. <a href="exec: mc_inventory[\'refill_bottle_water\'] = 0 & pcs_hydra += 75 & cumspclnt = 2 & gs \'cum_cleanup\' & gs \'stat\' & gs \'din_bad\', \'d_bag\'">Drink</a>');
          if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
            scene.text('You carry your sports water bottle in your purse. It\'s empty.');
          }
          if (((s as any).mc_inventory ?? 0)?.['food_water'] > 0) {
            // TODO-QSP: 'There''s a bottle of water in your purse. <a href="exec:mc_inventory[''food_water''] = 0
            (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (100);
            (s as any).cumspclnt = 2;
            // TODO-QSP: gs ''cum_cleanup''
            // TODO-QSP: gs ''stat''
            // TODO-QSP: gs ''din_bad'', ''d_bag''">Drink</a>'
          }
          if (((s as any).mc_inventory ?? 0)?.['food_sandwich'] > 0) {
            // TODO-QSP: 'There''s a sandwich in your purse. <a href="exec:mc_inventory[''food_sandwich''] = 0
            (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
            (s as any).cumspclnt = 2;
            // TODO-QSP: gs ''cum_cleanup''
            (s as any).fat = ((s as any).fat ?? 0) + (1);
            // TODO-QSP: gs ''stat''
            // TODO-QSP: gs ''din_bad'', ''d_bag''">Eat</a>'
          }
          if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  (!((s as any).strapNumber ?? 0))) {
            // TODO-QSP: 'You have a strapon harness in your purse, but you don''t have a dildo attached to it'+iif(mc_invent...
          } else {
            // TODO-QSP: dynamic text: You have a strapon harness in your purse and a <<(strapNumber +1)*5>>cm attached...
            scene.text(`You have a strapon harness in your purse and a ${(((s as any).strapNumber ?? 0) +1)*5}cm attached to it.`);
          }
          if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 1  &&  (!((s as any).alkowine ?? 0))) {
            scene.text('There\'s a bottle of <a href="exec:gs \'din_bad\', \'dinalkowin1\'">wine</a> in your purse.');
          }
          if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 1  &&  ((s as any).alkowine ?? 0) === 1) {
            scene.text('There\'s a half-bottle of <a href="exec:gs \'din_bad\', \'dinalkowin2\'">wine</a> in your purse.');
          }
          if (((s as any).foto ?? 0) === 1) {
            scene.text('Your purse contains a strange photo');
          }
          if (((s as any).pattest ?? 0) > 0) {
            // TODO-QSP: dynamic text: You have <b><<pattest>></b> unused paternity test'+iif(pattest > 1, 's ', ' ')+'...
            scene.text(`You have <b>${((s as any).pattest ?? 0)}</b> unused paternity test'+iif(pattest > 1, 's ', ' ')+'in your purse.`);
          }
          if (((s as any).used_pattest ?? 0) > 0) {
            // TODO-QSP: dynamic text: You have <b><<used_pattest>></b> <a href="exec:dynamic $test_purse">used</a> pat...
            scene.text(`You have <b>${((s as any).used_pattest ?? 0)}</b> <a href="exec:dynamic $test_purse">used</a> paternity test'+iif(used_pattest > 1, 's ', ' ')+'in your purse.`);
          }
          if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
            // TODO-QSP: dynamic text: You also have '+iif($pursepantytype ! ', '<a href="exec:view'<<func('$panty_imag...
            scene.text(`You also have '+iif($pursepantytype ! ', '<a href="exec:view'${qspFunc(s, '$panty_image', '$pursepantytype', ((s as any).pursepantynumber ?? 0))}'">a pair of panties</a>', ')+iif($pursepantytype ! ' and $pursebratype ! ', ' and ', ')+iif($pursebratype ! ', '<a href="exec:view'${qspFunc(s, '$bra_image', '$pursebratype', ((s as any).pursebranumber ?? 0))}'">a bra</a>', ')+' in your purse, which you can put on in the nearest bathroom.`);
          }
          if (((s as any).photographyEv ?? 0) >= 2) {
            scene.text('You have <a href="exec:gt\'camera\',\'start\'">a camera</a> in your purse.');
          }
          if (((s as any).mc_inventory ?? 0)?.['newspaper'] === 1) {
            // TODO-QSP: act 'Read your newspaper': newspaperVars['dbag'] = 1
            scene.actions([{ label: 'Continue', goto: ['newspaper', 'start'] }]);
          }
          scene.text('</td></tr></table></center>');
          scene.actions([
            { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'obj_din', 'menu_exit');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'mobile_check':
      enterMobileCheck(s, scene);
      break;
    case 'd_salf':
      enterDSalf(s, scene);
      break;
    case 'd_mouthwash':
      enterDMouthwash(s, scene);
      break;
    case 'd_bag':
      enterDBag(s, scene);
      break;
    default:
      enterMobileCheck(s, scene);
      break;
  }
}

export const din_bad: LocationDef = {
  name: 'din_bad',
  title: 'Your phone is ringing',
  region: 'other',
  enter: enter,
};
