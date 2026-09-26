import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMobileCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).menu_off ?? 0) === 1) {
    return;
  }
  if (((s as any).phone_off ?? 0) === 1) {
    return;
  }
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'jobs', 'has_booking_for_day', 'pav_leonid_slave', ((s as any).daystart ?? 0)) === 1  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 10  &&  (!((s as any).leonidVisit ?? 0))) {
    scene.text('<center><b>Your phone is ringing</b></center>');
    (s as any).caller = 'Leonid Vostov';
    (s as any).callerid = 'images/characters/pavlovsk/resident/leonid/leonidphone.jpg';
    qspCall(s, 'telefon', 'phone_ring');
    scene.text('<center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027leonid\u0027, \u0027call\u0027); return false;"><img src="images/system/phone/call_accept.png"></a>    <a href="#" onclick="window.__gameStore.getState().doGoto(window.__gameStore.getState().prevLoc, window.__gameStore.getState().prevArg); return false;"><img src="images/system/phone/decline.png"></a></center>');
  }
  if (((s as any).QWdogreiqTimer ?? 0) === 0  &&  ((s as any).QWdogReiq ?? 0) === 2  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).qwdogiventday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 12) {
    scene.text('<center><b>Your phone is ringing</b></center>');
    (s as any).caller = 'Margaret';
    (s as any).callerid = '';
    qspCall(s, 'telefon', 'phone_ring');
    scene.img('images/system/phone/call_accept.png');
  }
  scene.build();
}

function enterDSalf(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Tissues</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 12; s.cumspclnt = 9; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & cumspclnt = 9 & gs \u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Wipe your face and hands clean</b></a>');
  }
  if (((s as any).cumloc ?? 0)[14] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 14; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Wipe your belly clean</b></a>');
  }
  if (qspFunc(s, 'cum_manage', 'check_private', 15) === 1  &&  ((s as any).cumloc ?? 0)[15] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 16; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Wipe your breasts clean</b></a>');
  }
  if (qspFunc(s, 'cum_manage', 'check_private') === 1  &&  (((s as any).cumloc ?? 0)[1] + ((s as any).cumloc ?? 0)[4] > 0  ||  qspFunc(s, 'cum_manage', 'check_inner_overflow', (-1)) === 1)) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 15; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Wipe your ass and pussy clean</b></a>');
  }
  if (((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 17; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Wipe your arms and legs clean</b></a>');
  }
  if (((s as any).cumloc ?? 0)[2] > 0  ||  ((s as any).cumloc ?? 0)[5] > 0  ||  ((s as any).cumloc ?? 0)[6] > 0  ||  ((s as any).cumloc ?? 0)[7] > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.cumspclnt = 6; s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & minut += 2 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Clean your clothing</b></a>');
  }
  if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027makeup_wipes\u0027 -=1; s.pcs_makeup = 1; s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><b>Remove your makeup</b></a>');
  }
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;"><br><b>Put tissues away</b></a>');
  scene.text('</td></tr></table></center>');
  scene.build();
}

function enterDMouthwash(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Mouth Wash</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 1;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mouthwash'] = ((s as any).mc_inventory['mouthwash'] ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('Your breath smells minty fresh.');
  scene.text('');
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    qspCall(st, 'din_bad', '');
  } },
  ]);
  scene.build();
}

function enterDBag(s: GameState, scene: SceneBuilder): void {
  (s as any).BACKIMAGE = '';
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Purse</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
    scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['makeup_wipes'] ?? '')}</b> wet wipes left in your purse. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_salf/u0027); return false;">Use a tissue</a>`);
  }
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0  &&  ((s as any).pain ?? 0)?.['total'] > 0) {
    scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['painkillers'] ?? '')}</b> painkiller` + ((((s as any).mc_inventory ?? 0)?.['painkillers'] > 1) ? ('s ') : (' ')) + `left in your purse. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027painkiller/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027); return false;">${qspFunc(s, 'drugs', 'painkiller_act_str')}</a>`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
      scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['painkillers'] ?? '')}</b> painkiller` + ((((s as any).mc_inventory ?? 0)?.['painkillers'] > 1) ? ('s ') : (' ')) + 'left in your purse.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['mouthwash'] > 0  &&  (((s as any).pcs_breath ?? 0) === 0  ||  ((s as any).cumloc ?? 0)[12] === 1)) {
    scene.text(`There's mouthwash in your purse. <b>${(((s as any).mc_inventory ?? 0)?.['mouthwash'] ?? '')}</b> uses remaining. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_mouthwash/u0027); return false;">Use mouthwash</a>`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['mouthwash'] > 0  &&  ((s as any).pcs_breath ?? 0) === 1  &&  ((s as any).cumloc ?? 0)[12] === 0) {
      scene.text(`There's mouthwash in your purse. <b>${(((s as any).mc_inventory ?? 0)?.['mouthwash'] ?? '')}</b> uses remaining.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['travel_mirror'] === 1) {
    scene.text('You have a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027d_bag_mirror\u0027); return false;">compact mirror</a> in your purse' + ((((s as any).mc_inventory ?? 0)?.['travel_makeup'] >0) ? (' and some portable makeup.') : ('.')));
    if (((s as any).mc_inventory ?? 0)?.['lipbalm'] > 0  &&  ((s as any).pcs_lipbalm ?? 0) <= 0) {
      scene.text('You can apply some <a href="#" onclick="window.__gameStore.setState((s) => {  /* TODO-QSP: act \u0027Return\u0027:gs \u0027din_bad\u0027, \u0027d_bag\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027applyLipbalm\u0027 & act \u0027Return\u0027:gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">lip balm</a>');
    }
  } else {
    if (((s as any).mc_inventory ?? 0)?.['travel_mirror'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['travel_makeup'] >0) {
      scene.text('You have some portable makeup in your purse, but you need a compact mirror to apply it.');
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    scene.text(`There's <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027p_deodorant/u0027); return false;">deodorant</a> in your purse. <b>${(((s as any).mc_inventory ?? 0)?.['deodorant'] ?? '')}</b> uses remaining.`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  ((s as any).deodorant_on ?? 0) === 1) {
      scene.text(`You are already wearing deodorant. <b>${(((s as any).mc_inventory ?? 0)?.['deodorant'] ?? '')}</b> uses remaining.`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['deodorant'] === 0  &&  (!((s as any).deodorant_on ?? 0))) {
        scene.text(`You are not wearing deodorant. <b>${(((s as any).mc_inventory ?? 0)?.['deodorant'] ?? '')}</b> uses remaining.`);
      } else {
        if (((s as any).mc_inventory ?? 0)?.['deodorant'] === 0  &&  ((s as any).deodorant_on ?? 0) === 1) {
          scene.text(`You are already wearing deodorant. <b>${(((s as any).mc_inventory ?? 0)?.['deodorant'] ?? '')}</b> uses remaining.`);
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['travel_mirror'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['comb'] === 1) {
    if ((!((s as any).pcs_hairbsh ?? 0))) {
      scene.text('There\'s a hairbrush in your purse. <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=min(15, max(1, pcs_hairlng / 80)); s.pcs_hairbsh = 1; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Brush your hair</a>');
    } else {
      scene.text('There\'s a hairbrush in your purse. Your hair doesn\'t need brushing right now.');
    }
  }
  if (((s as any).pcs_hairbsh ?? 0) > 0  &&  ((s as any).pcs_hairlng ?? 0) > 80  &&  (!((s as any).hbraids ?? 0))) {
    if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
      scene.text(`As you have a scrunchy, you can arrange your hair into a <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 1; return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_bag/u0027); return false;">ponytail</a>. You have ${(((s as any).mc_inventory ?? 0)?.['scrunchies'] ?? '')} scrunchies left.`);
    }
    if (((s as any).pcs_hairlng ?? 0) <= 400  &&  ((s as any).mc_inventory ?? 0)?.['kirbygrips'] >= 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
      scene.text(`You have several clips, pins and grips for you hair. Hence, you can <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 1; return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_bag/u0027); return false;">updo your hair</a>. You have ${(((s as any).mc_inventory ?? 0)?.['kirbygrips'] ?? '')} hair accessories at your disposal.`);
    }
    if (((s as any).pcs_hairlng ?? 0) <= 800  &&  ((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 1) {
      if (((s as any).mc_inventory ?? 0)?.['scrunchies'] >= 2  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) === 0) {
        scene.text('You can use two hair ties to make yourself some <a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 1; s.hscrunchw = 2; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_bag\u0027); return false;">pigtails</a>.');
      }
      if (((s as any).canBraidHair ?? 0) === 1  &&  ((s as any).hscrunchw ?? 0) + ((s as any).hpingripw ?? 0) + ((s as any).hpigtail ?? 0) === 0) {
        scene.text(`You can spend ${((s as any).pcs_hairlng ?? '')/10} minutes <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=pcs_hairlng/10; s.hbraids = 15; return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_bag/u0027); return false;">braiding</a> your hair, just the way your sister taught you.`);
      }
    }
  }
  if (((s as any).hscrunchw ?? 0) === 1) {
    scene.text('Remove the <a href="#" onclick="window.__gameStore.setState((s) => { s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_bag\u0027); return false;">scrunchie</a> to get rid of the ponytail.');
  }
  if (((s as any).hscrunchw ?? 0) === 2) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.hpigtail = 0; s.hscrunchw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Remove</a> your scrunchies and let your hair flow free again.');
  }
  if (((s as any).hpingripw ?? 0) === 1) {
    scene.text('Let your hair <a href="#" onclick="window.__gameStore.setState((s) => { s.hpingripw = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_bag\u0027); return false;">flow free</a>.');
  }
  if (((s as any).hbraids ?? 0) > 0) {
    scene.text(`Take ${((s as any).hbraids ?? '')*2+((s as any).pcs_hairlng ?? '')/50} minutes removing your <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=hbraids*2+pcs_hairlng/50; s.hbraids = 0; return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_bag/u0027); return false;">braid</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    if (((s as any).preziktype ?? 0) === 2  ||  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
      scene.text(`You have <b>${((((s as any).preziktype ?? 0) === 2) ? ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '')) : ((((s as any).mc_inventory ?? {})?.['normal_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)))}</b> normal condoms left, and <b>${((((s as any).preziktype ?? 0) === 2) ? ((((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['sabotaged_condoms'] ?? 0)) : ((((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] ?? '')))}</b> sabotaged <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027din_Switch_Condom_Menu/u0027); return false;">condoms left in your purse.</a>`);
    } else {
      if (((s as any).preziktype ?? 0) < 2  &&  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] === 0) {
        scene.text(`You have <b>${(((s as any).mc_inventory ?? {})?.['normal_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)}</b> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027din_Switch_Condom_Menu/u0027); return false;">condoms left in your purse.</a>`);
      }
    }
  } else {
    scene.text('You are out of condoms.');
  }
  if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
    scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['lubricant'] ?? '')}</b> squirts of lubricant available`);
    if ((!((s as any).auto_anal_lube ?? 0))) {
      scene.text('Automatically use for anal sex: <a href="#" onclick="window.__gameStore.setState((s) => { s.auto_anal_lube = 1; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">No</a>');
    } else {
      scene.text('Automatically use for anal sex: <a href="#" onclick="window.__gameStore.setState((s) => { s.auto_anal_lube = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Yes</a>');
    }
    if ((!((s as any).auto_vag_lube ?? 0))) {
      scene.text('Automatically use for vaginal sex: <a href="#" onclick="window.__gameStore.setState((s) => { s.auto_vag_lube = 1; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">No</a>');
    } else {
      scene.text('Automatically use for vaginal sex: <a href="#" onclick="window.__gameStore.setState((s) => { s.auto_vag_lube = 0; return s; }); window.__gameStore.getState().doGoto(\u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Yes</a>');
    }
  }
  if (qspFunc(s, 'cum_manage', 'is_private_location') === 1) {
    qspCall(s, 'din_van', 'toymanage');
    qspCall(s, 'piercing_management', 'set_manage_act');
  }
  if (((s as any).mc_inventory ?? 0)?.['amphetamine'] > 0) {
    scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['amphetamine'] ?? '')}</b> tablets of amphetamine left in your purse. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027amphetamine/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027); return false;">Take One</a>`);
  }
  if (((s as any).mc_inventory ?? 0)?.['joints'] > 0) {
    scene.text(`You have enough weed for <b>${(((s as any).mc_inventory ?? 0)?.['joints'] ?? '')}</b> joints.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
    scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')}</b> unopened packages of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_tabletkied/u0027); return false;">birth control pills</a> and <b>${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')}</b> pills left in your opened package.`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill']  === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
      scene.text(`You have <b>${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')}</b> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_tabletkied/u0027); return false;">birth control pills</a> left in your purse.`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
        scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')}</b> unopened packages of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_tabletkied/u0027); return false;">birth control pills</a> in your purse.`);
      } else {
        scene.text('You are out of <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkied\u0027); return false;">birth control pills</a>.');
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
      scene.text('You have one <a href="exec:gs\'medical_din\',\'morning_after_pill\'">morning after pill</a>.');
    } else {
      scene.text(`You have <b>${(((s as any).mc_inventory ?? 0)?.['morning_after_pill'] ?? '')}</b> <a href="exec:gs'medical_din','morning_after_pill'">morning after pills</a>.`);
    }
  } else {
    scene.text('You have no morning after pills.');
  }
  if (((s as any).mc_inventory ?? 0)?.['mentats'] > 0  &&  ((s as any).drugVars ?? 0)?.['mentats_dose'] < 3) {
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: *pl /u0027/u003cfont color = green>/u003cbr>You swallow the neurobooster pill./u003c/font>/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027mentats/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027 & *pl /u0027<font color = green><br>You swallow the neurobooster pill.</font>/u0027); return false;">Use a neurobooster pill in your purse.</a> There are <b>${(((s as any).mc_inventory ?? 0)?.['mentats'] ?? '')}</b> pills left. The warning label says not to take more than one per day.`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['mentats'] > 0) {
      scene.text(`There are <b>${(((s as any).mc_inventory ?? 0)?.['mentats'] ?? '')}</b> neurobooster pills left. You really shouldn't take any more pills today.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['steroids'] > 0) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027steroids/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027); return false;">Use steroids.</a> You have <b>${(((s as any).mc_inventory ?? 0)?.['steroids'] ?? '')}</b> steroids left in your purse.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['breastcream'] > 0) {
    scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027breastcream/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027); return false;">Apply breast cream.</a> You have <b>${(((s as any).mc_inventory ?? 0)?.['breastcream'] ?? '')}</b> cream left in your purse.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['aphrodisiac'] > 0) {
    scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: *pl $drugVars[/u0027aphrodisiac_msg/u0027] */ /* TODO-QSP: *pl $min_arousal_msg */ delete (s as any).min_arousal_msg; return s; }); window.__gameStore.getState().doGoto(/u0027drugs/u0027, /u0027aphrodisiac/u0027 & gs /u0027din_bad/u0027, /u0027d_bag/u0027 & *pl $drugVars[/u0027aphrodisiac_msg/u0027] & *pl $min_arousal_msg & killvar /u0027$min_arousal_msg/u0027); return false;">Chew aphrodisiac gum.</a> You have <b>${(((s as any).mc_inventory ?? 0)?.['aphrodisiac'] ?? '')}</b> gum left in your purse.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 4  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
    scene.text('You carry your sports water bottle in your purse. It\'s still completely full. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027refill_bottle_water\u0027 = 3; s.pcs_hydra +=75; s.cumspclnt = 2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Drink</a>');
  } else {
    if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 3  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
      scene.text('You carry your sports water bottle in your purse. It\'s almost full. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027refill_bottle_water\u0027 = 2; s.pcs_hydra +=75; s.cumspclnt = 2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Drink</a>');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 2  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
        scene.text('You carry your sports water bottle in your purse. It\'s half full. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027refill_bottle_water\u0027 = 1; s.pcs_hydra +=75; s.cumspclnt = 2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Drink</a>');
      } else {
        if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 1  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
          scene.text('You carry your sports water bottle in your purse. It\'s almost empty. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027refill_bottle_water\u0027 = 0; s.pcs_hydra +=75; s.cumspclnt = 2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Drink</a>');
        } else {
          if (((s as any).mc_inventory ?? 0)?.['refill_bottle_water'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['refill_bottle'] >= 1) {
            scene.text('You carry your sports water bottle in your purse. It\'s empty.');
          }
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['food_water'] > 0) {
    scene.text('There\'s a bottle of water in your purse. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027food_water\u0027 = 0; s.pcs_hydra +=100; s.cumspclnt = 2; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Drink</a>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_sandwich'] > 0) {
    scene.text('There\'s a sandwich in your purse. <a href="#" onclick="window.__gameStore.setState((s) => { (s.mc_inventory ??= {})\u0027food_sandwich\u0027 = 0; s.pcs_energy +=40; s.cumspclnt = 2; s.fat +=1; return s; }); window.__gameStore.getState().doGoto(\u0027cum_cleanup\u0027 & fat += 1 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_bag\u0027); return false;">Eat</a>');
  }
  if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  (!((s as any).strapNumber ?? 0))) {
    scene.text('You have a strapon harness in your purse, but you don\'t have a dildo attached to it' + ((((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 0) ? ('. You keep your dildos in your desk at home.') : (', because you don\'t own one.')));
  } else {
    if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) !== 0) {
      scene.text(`You have a strapon harness in your purse and a ${(((s as any).strapNumber ?? '') +1)*5}cm attached to it.`);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 1  &&  (!((s as any).alkowine ?? 0))) {
    scene.text('There\'s a bottle of <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027dinalkowin1\u0027); return false;">wine</a> in your purse.');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_wine'] === 1  &&  ((s as any).alkowine ?? 0) === 1) {
    scene.text('There\'s a half-bottle of <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027dinalkowin2\u0027); return false;">wine</a> in your purse.');
  }
  if (((s as any).foto ?? 0) === 1) {
    scene.text('Your purse contains a strange photo');
  }
  if (((s as any).pattest ?? 0) > 0) {
    scene.text(`You have <b>${((s as any).pattest ?? '')}</b> unused paternity test` + ((((s as any).pattest ?? 0) > 1) ? ('s ') : (' ')) + 'in your purse.');
  }
  if (((s as any).used_pattest ?? 0) > 0) {
    scene.text(`You have <b>${((s as any).used_pattest ?? '')}</b> <a href="#" onclick="window.__gameStore.setState((s) => { dynamicGoto(s, String((s as any).test_purse || /u0027/u0027)); return s; }); return false;">used</a> paternity test` + ((((s as any).used_pattest ?? 0) > 1) ? ('s ') : (' ')) + 'in your purse.');
  }
  if (((s as any).pursepantytype ?? 0) !== ''  ||  ((s as any).pursebratype ?? 0) !== '') {
    scene.text('You also have ' + ((((s as any).pursepantytype ?? 0) !== '') ? ('<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027__qspDyn\u0027; return s; }); return false;">a pair of panties</a>') : ('')) + ((((s as any).pursepantytype ?? 0) !== ''  &&  ((s as any).pursebratype ?? 0) !== '') ? (' and ') : ('')) + ((((s as any).pursebratype ?? 0) !== '') ? ('<a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027__qspDyn\u0027; return s; }); return false;">a bra</a>') : ('')) + ' in your purse, which you can put on in the nearest bathroom.');
  }
  if (((s as any).photographyEv ?? 0) >= 2) {
    scene.text('You have <a href="exec:gt\'camera\',\'start\'">a camera</a> in your purse.');
  }
  if (((s as any).mc_inventory ?? 0)?.['newspaper'] === 1) {
    qspGoto(s, 'newspaper', 'start');
    scene.actions([
      { label: 'Read your newspaper', handler: (st: GameState) => {
    ((st as any).newspaperVars = (st as any).newspaperVars ?? {})['dbag'] = 1;
  } },
    ]);
  }
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'obj_din', '');
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterDinalkowin1(s: GameState, scene: SceneBuilder): void {
  (s as any).alkowine = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'wine');
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/alkowin.jpg');
  scene.text('You take the wine bottle out of your purse and slowly drink half of it. You struggle quite a lot to put the cork back before being able to make it.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
  ]);
  scene.build();
}

function enterDinalkowin2(s: GameState, scene: SceneBuilder): void {
  (s as any).alkowine = 0;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['food_wine'] = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'wine');
  qspCall(s, 'stat', '');
  scene.img('images/shared/food/alkowin.jpg');
  scene.text('You take out the remaining half wine bottle out of your purse, slowly drinking the rest of it. As you finish you throw the empty bottle away.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
  ]);
  scene.build();
}

function enterDin_Switch_Condom_Menu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDin_Update_Condom_Counts(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Condoms</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  (s as any).i = 0;
  scene.text(`You have ${((((s as any).preziktype ?? 0) < 2) ? ((((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['normal_condoms'] ?? 0)) : ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '')))} normal condoms left and ${((((s as any).preziktype ?? 0) === 2) ? ((((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['sabotaged_condoms'] ?? 0)) : ((((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] ?? '')))} sabotaged condoms left.`);
  if (((s as any).preziktype ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().1 ?? \u0027\u0027)); return false;">Switch to using normal condoms</a>.');
  }
  if (((s as any).preziktype ?? 0) !== 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().2 ?? \u0027\u0027)); return false;">Stop using condoms</a>.');
  }
  if (((s as any).preziktype ?? 0) !== 2) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().3 ?? \u0027\u0027)); return false;">Switch to using sabotaged condoms</a>.');
  }
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (!((s as any).preziktype ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">Sabotage a condom</a>.');
  }
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
  ]);
  scene.build();
}

function enterDin_Table_Condom_Menu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDin_Update_Condom_Counts(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h1>Condoms</h1></center>');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    scene.img('images/shared/home/bedroom/stol.jpg');
  } else {
    scene.img('images/shared/home/bedroom/stol1.jpg');
  }
  (s as any).i = 1;
  scene.text(`You have ${((((s as any).preziktype ?? 0) < 2) ? ((((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['normal_condoms'] ?? 0)) : ((((s as any).mc_inventory ?? 0)?.['normal_condoms'] ?? '')))} normal condoms left and  ${((((s as any).preziktype ?? 0) === 2) ? ((((s as any).mc_inventory ?? {})?.['equipped_condoms'] ?? 0)+(((s as any).mc_inventory ?? {})?.['sabotaged_condoms'] ?? 0)) : ((((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] ?? '')))} sabotaged condoms left.`);
  if (((s as any).preziktype ?? 0) > 0) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().1 ?? \u0027\u0027)); return false;">Switch to using normal condoms</a>.');
  }
  if (((s as any).preziktype ?? 0) !== 1) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().2 ?? \u0027\u0027)); return false;">Stop using condoms</a>.');
  }
  if (((s as any).preziktype ?? 0) !== 2) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().3 ?? \u0027\u0027)); return false;">Switch to using sabotaged condoms</a>.');
  }
  if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  ||  (!((s as any).preziktype ?? 0))) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027din_Do_Condom_Counts\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">Sabotage a condom</a>.');
  }
  scene.actions([
    { label: 'Return', goto: ['stol', 'bc'] },
  ]);
  scene.build();
}

function enterDin_Do_Condom_Counts(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Condoms</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    scene.text('Use a condom the next time you have sex.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'normal']; enterSetCondomUsed(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      scene.text('You will not use a condom the next time you have sex.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'none']; enterSetCondomUsed(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        scene.text('Use your sabotaged condom the next time you have sex.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sabotaged']; enterSetCondomUsed(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 4) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSabotageACondom(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  if ((!((s as any).i ?? 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDin_Switch_Condom_Menu(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDin_Table_Condom_Menu(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.text('</td></tr></table></center>');
  scene.build();
}

function enterSetCondomUsed(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).preziktype ?? 0))) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? 0)?.['equipped_condoms']);
  }
  if (((s as any).preziktype ?? 0) === 2) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = (((s as any).mc_inventory ?? 0)?.['equipped_condoms']);
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'normal') {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? 0)?.['normal_condoms']);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
    (s as any).preziktype = 0;
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'none') {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
      (s as any).preziktype = 1;
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'sabotaged') {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']);
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = 0;
        (s as any).preziktype = 2;
      }
    }
  }
  scene.build();
}

function enterSabotageACondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).preziktype ?? 0) !== 0  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = ((s as any).mc_inventory['sabotaged_condoms'] ?? 0) + (1);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = ((s as any).mc_inventory['normal_condoms'] ?? 0) - (1);
    if (String((s as any).locArgs?.[1] ?? '') === '') {
      scene.text('You use a needle to punch holes in one of the condoms.');
    }
  } else {
    if (((s as any).preziktype ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = ((s as any).mc_inventory['sabotaged_condoms'] ?? 0) + (1);
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
      if (String((s as any).locArgs?.[1] ?? '') === '') {
        scene.text('You use a needle to punch holes in one of the condoms.');
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === '') {
        scene.text('You do not have any condoms to sabotage.');
      }
    }
  }
  scene.build();
}

function enterDin_Update_Condom_Counts(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    (s as any).prezikmsg = 1;
  }
  if ((!((s as any).preziktype ?? 0))) {
    if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) + ((((s as any).mc_inventory ?? 0)?.['normal_condoms']));
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] <= 0) {
      scene.text('You are out of condoms.');
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
      (s as any).preziktype = 1;
    }
  } else {
    if (((s as any).preziktype ?? 0) === 1) {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = ((s as any).mc_inventory['normal_condoms'] ?? 0) + ((((s as any).mc_inventory ?? 0)?.['equipped_condoms']));
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
      }
    } else {
      if (((s as any).preziktype ?? 0) === 2) {
        if (((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) + ((((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']));
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = 0;
        }
        if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] <= 0  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] <= 0) {
          if (((s as any).prezikmsg ?? 0) === 1) {
            (s as any).prezikmsg = 2;
          }
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = 0;
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['sabotaged_condoms'] = 0;
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
          (s as any).preziktype = 1;
        } else {
          if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] <= 0  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
            scene.text('You have run out of sabotaged condoms so you will have to use normal condoms.');
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? 0)?.['normal_condoms']);
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['normal_condoms'] = 0;
            (s as any).preziktype = 0;
          }
        }
      }
    }
  }
  scene.build();
}

function enterDTabletkied(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Birth Control</h1></center>');
  scene.img(`${qspFunc(s, '$purse_image', ((s as any).currentpursetype ?? ''), ((s as any).currentpursenumber ?? ''))}`);
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td cellspacing="0" cellpadding="0" valign="top">');
  (s as any).tabloc = 0;
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  ||  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
      scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')} unopened packages of birth control pills and ${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')} pills left in your opened package.`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
        scene.text(`You have ${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')} birth control pills left.`);
      } else {
        if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
          scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')} unopened packages of birth control pills.`);
        }
      }
    }
    if (((s as any).tabletkicheck ?? 0) === 2) {
      scene.text('You are currently on birth control shots. (Note: This deactivates reminder and automatically taking birth control pills.)');
    }
    if (((s as any).thinkpreg ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
      if (((s as any).tabletkiday ?? 0) < ((s as any).daystart ?? 0)) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00271 & gs \u0027din_bad\u0027\u0027); return false;">Take the birth control pill now.</a>');
      }
      if ((!((s as any).tabletkicheck ?? 0))) {
        if (((s as any).birth_control ?? 0)?.['remind_hour'] === 0) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Set a reminder to take your birth control pills.</a>');
        } else {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Change your birth control reminder.</a>');
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027turn_off_bc_reminder\u0027); return false;">Turn off your birth control reminder.</a>');
        }
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, String(window.__gameStore.getState().2 ?? \u0027\u0027)); return false;">Automatically take your birth control pills.</a>');
      } else {
        if (((s as any).tabletkicheck ?? 0) === 1  &&  ((s as any).therapistFuckedPussyStage ?? 0) < 2) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00273 & gs \u0027din_bad\u0027\u0027); return false;">Stop automatically taking your birth control pills.</a>');
        }
      }
    }
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">Examine the birth control pills.</a>');
    if (((s as any).tabletkioddk ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00275 & gs \u0027din_bad\u0027\u0027); return false;">Dump the strange pills.</a>');
    }
    if (((s as any).birth_control ?? 0)?.['placebo_skip'] === 0) {
      scene.text('Skip your <a href="#" onclick="window.__gameStore.setState((s) => {  (s.birth_control ??= {})\u0027placebo_skip\u0027 = 1; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkied\u0027); return false;">placebo pills.</a>');
      scene.text('(Will cause you to no longer menstruate)');
    } else {
      scene.text('Start taking your <a href="#" onclick="window.__gameStore.setState((s) => {  (s.birth_control ??= {})\u0027placebo_skip\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkied\u0027); return false;">placebo pills</a> again.');
      scene.text('(Will cause periods to start back up again in your menstrual cycle)');
    }
  } else {
    scene.text('You are out of birth control pills.');
    if (((s as any).tabletkicheck ?? 0) === 2) {
      scene.text('You are currently on birth control shots. (Note: This deactivates reminder and automatically taking birth control pills.)');
    }
    if (((s as any).thinkpreg ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
      if ((!((s as any).tabletkicheck ?? 0))) {
        if (((s as any).birth_control ?? 0)?.['remind_hour'] === 0) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Set a reminder to take your birth control pills.</a>');
        } else {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Change your birth control reminder.</a>');
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027turn_off_bc_reminder\u0027); return false;">Turn off your birth control reminder.</a>');
        }
      }
    }
  }
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
  ]);
  scene.build();
}

function enterDTabletkiedt(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Birth Control</h1></center>');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    scene.img('images/shared/home/bedroom/stol.jpg');
  } else {
    scene.img('images/shared/home/bedroom/stol1.jpg');
  }
  (s as any).tabloc = 1;
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  ||  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
      scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')} unopened packages of birth control pills and ${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')} pills left in your opened package.`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
        scene.text(`You have ${(((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] ?? '')} birth control pills left.`);
      } else {
        if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
          scene.text(`You have ${(((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] ?? '')} unopened packages of birth control pills.`);
        }
      }
    }
    if (((s as any).tabletkicheck ?? 0) === 2) {
      scene.text('You are currently on birth control shots. (Note: This deactivates reminder and automatically taking birth control pills.)');
    }
    if (((s as any).thinkpreg ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
      if (((s as any).tabletkiday ?? 0) < ((s as any).daystart ?? 0)) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00271 & gs \u0027din_bad\u0027\u0027); return false;">Take the birth control pill now.</a>');
      }
      if ((!((s as any).tabletkicheck ?? 0))) {
        if (((s as any).birth_control ?? 0)?.['remind_hour'] === 0) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Set a reminder to take your birth control pills.</a>');
        } else {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Change your birth control reminder.</a>');
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027turn_off_bc_reminder\u0027); return false;">Turn off your birth control reminder.</a>');
        }
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, String(window.__gameStore.getState().2 ?? \u0027\u0027)); return false;">Automatically take your birth control pills.</a>');
      } else {
        if (((s as any).tabletkicheck ?? 0) === 1  &&  ((s as any).therapistFuckedPussyStage ?? 0) < 2) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00273 & gs \u0027din_bad\u0027\u0027); return false;">Stop automatically taking your birth control pills.</a>');
        }
      }
    }
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">Examine the birth control pills.</a>');
    if (((s as any).tabletkioddk ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_tabletkieda\u0027, \u00275 & gs \u0027din_bad\u0027\u0027); return false;">Dump the strange pills.</a>');
    }
  } else {
    scene.text('You are out of birth control pills.');
    if (((s as any).tabletkicheck ?? 0) === 2) {
      scene.text('You are currently on birth control shots. (Note: This deactivates reminder and automatically taking birth control pills.)');
    }
    if (((s as any).thinkpreg ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
      if ((!((s as any).tabletkicheck ?? 0))) {
        if (((s as any).birth_control ?? 0)?.['remind_hour'] === 0) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Set a reminder to take your birth control pills.</a>');
        } else {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027set_bc_reminder\u0027); return false;">Change your birth control reminder.</a>');
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027turn_off_bc_reminder\u0027); return false;">Turn off your birth control reminder.</a>');
        }
      }
    }
  }
  scene.actions([
    { label: 'Return', goto: ['stol', 'bc'] },
  ]);
  scene.build();
}

function enterDTabletkieda(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (((s as any).tabletkipt ?? 0));
    if (((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTakepill(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).tabletkiday = ((s as any).daystart ?? 0);
      (s as any).tabletkipt = 0;
      (s as any).tabletkipi = 0;
    } else {
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (1);
    }
    (s as any).pilldaychk = ((s as any).daystart ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkied(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.text('You take your birth control pill.');
    qspCall(s, 'stat', '');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      ((s as any).birth_control = (s as any).birth_control ?? {})['remind_hour'] = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetAutoBc(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.text('You will do your best to remember to take your birth control pills every day.');
      qspCall(s, 'stat', '');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        scene.text('You will take your birth control pills as you desire.');
        (s as any).tabletkicheck = 0;
        qspCall(s, 'stat', '');
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 4) {
          if (((s as any).pcs_intel ?? 0) + ((s as any).pilldays ?? 0) <= (Math.floor(Math.random() * 66) + 30)  ||  ((s as any).therapistFuckedPussyStage ?? 0) > 1) {
            scene.text('These pills appear to be normal birth control pills.');
            (s as any).tabletkioddk = 0;
            qspCall(s, 'stat', '');
          } else {
            if ((!((s as any).ptype ?? 0))) {
              (s as any).pillprob = 'nothing unusual about them.';
            }
            if (((s as any).ptype ?? 0) === 1) {
              (s as any).pillprob = 'that the pills have expired months ago.';
            }
            if (((s as any).ptype ?? 0) === 2) {
              (s as any).pillprob = 'that the label has spelling mistakes and the logo is backwards.';
            }
            if (((s as any).ptype ?? 0) === 3) {
              (s as any).pillprob = 'that the pills are discolored and there is no expiry date.';
            }
            if (((s as any).ptype ?? 0) === 4) {
              (s as any).pillprob = 'that the pills are all the same color.';
            }
            if (((s as any).ptype ?? 0) === 5) {
              (s as any).pillprob = 'that the pills seem to be smaller than normal.';
            }
            scene.text(`Upon taking a closer look at your birth control pills, you notice ${((s as any).pillprob ?? '')}`);
            if (((s as any).ptype ?? 0) > 0) {
              (s as any).tabletkioddk = 1;
            }
            qspCall(s, 'stat', '');
            if ((!((s as any).tabloc ?? 0))) {
              scene.actions([
                { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Return', goto: ['stol', 'bc'] },
              ]);
            }
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 5) {
            scene.text('You get rid of the strange pills.');
            (s as any).tabletkioddk = 0;
            ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 0;
            (s as any).tabletkioddp = 0;
            qspCall(s, 'stat', '');
          }
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
    alert('That was your last birth control pill. You need to buy some more.');
  }
  if ((!((s as any).tabloc ?? 0))) {
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Return', goto: ['stol', 'bc'] },
    ]);
  }
  scene.build();
}

function enterSetAutoBc(s: GameState, scene: SceneBuilder): void {
  while (true) {
    ((s as any).birth_control = (s as any).birth_control ?? {})['auto_hour'] = window.prompt("When do you want to take your pill? (Pick an hour 1 - 23. At that hour, you will automatically take your birth control pill. If you are asleep during the hour you set, you will not take it.)") ?? '';
    if (((s as any).birth_control ?? 0)?.['auto_hour'] < 1  ||  ((s as any).birth_control ?? 0)?.['auto_hour'] > 23) {
      alert('Invalid input. Pick an hour between 1 and 23.');
      break;
    } else {
      (s as any).tabletkicheck = 1;
      alert('You set a reminder on your phone to take your birth control pill at ' + (((s as any).birth_control ?? 0)?.['auto_hour']) + '.');
      if ((!((s as any).tabloc ?? 0))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkied(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkiedt(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterSetBcReminder(s: GameState, scene: SceneBuilder): void {
  while (true) {
    ((s as any).birth_control = (s as any).birth_control ?? {})['remind_hour'] = window.prompt("When do you want to set your reminder? (Pick an hour 1 - 22. An icon will appear in the stat display during that hour to remind you to take your pill.)") ?? '';
    if (((s as any).birth_control ?? 0)?.['remind_hour'] < 1  ||  ((s as any).birth_control ?? 0)?.['remind_hour'] > 22) {
      alert('Invalid reminder input. Pick an hour between 1 and 22.');
      break;
    } else {
      alert('You set a reminder on your phone to take your birth control pill at ' + (((s as any).birth_control ?? 0)?.['remind_hour']) + '.');
      if ((!((s as any).tabloc ?? 0))) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkied(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkiedt(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterTurnOffBcReminder(s: GameState, scene: SceneBuilder): void {
  ((s as any).birth_control = (s as any).birth_control ?? {})['remind_hour'] = 0;
  alert('You turn off your reminder to take your birth control pills.');
  if ((!((s as any).tabloc ?? 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkied(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDTabletkiedt(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterDCycreportChoice(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Fertility Cycle</h1></center>');
  scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
  scene.text('<td width="800" cellspacing="0" cellpadding="0" valign="top">');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><b>Current Status:</b></center>');
  scene.text(`<center>${((s as any).cycreport_txt ?? '')}</center>`);
  scene.text('</td></tr></table></center><center><table cellspacing="0" cellpadding="20" valign="top"><tr><td width="250" valign="top">');
  if (((s as any).cycreport_txt ?? 0) !== 'In labour'  &&  (!((s as any).succubusflag ?? 0))) {
    scene.text('<center><b>Change Status because:</b></center>');
    if ((!((s as any).thinkpreg ?? 0))) {
      if (((s as any).knowpreg ?? 0) === 1) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, \u00272 & gs \u0027stat\u0027\u0027); return false;">I\'m pregnant.</a>');
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, \u00271 & gs \u0027stat\u0027\u0027); return false;">I can\'t be pregnant no matter the evidence.</a>');
      } else {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, \u00272 & gs \u0027stat\u0027\u0027); return false;">I think I\'m pregnant.</a>');
      }
    } else {
      if (((s as any).thinkpreg ?? 0) === 1) {
        if (((s as any).knowpreg ?? 0) === 1) {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, \u00271 & gs \u0027stat\u0027\u0027); return false;">I can\'t be pregnant no matter the evidence.</a>');
        } else {
          scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, \u00271 & gs \u0027stat\u0027\u0027); return false;">I\'m not pregnant.</a>');
        }
      }
    }
    if (((s as any).mesec ?? 0) > 0  &&  ((s as any).thinkpreg ?? 0) !== 1  &&  ((s as any).knowpreg ?? 0) !== 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().3 ?? \u0027\u0027)); return false;">I\'m menstruating.</a>');
    } else {
      if (((s as any).thinkpreg ?? 0) !== 1) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">I just recently menstruated.</a>');
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().5 ?? \u0027\u0027)); return false;">I think my menstrual cycle has stopped.</a>');
      }
    }
    if (((s as any).thinkpreg ?? 0) === 1  ||  ((s as any).knowpreg ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().6 ?? \u0027\u0027)); return false;">I think my due date is…</a>');
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().7 ?? \u0027\u0027)); return false;">I think the father is…</a>');
    }
    if (((s as any).knowpregloss ?? 0) === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().8 ?? \u0027\u0027)); return false;">I just had an abortion.</a>');
    } else {
      if (((s as any).knowpregloss ?? 0) > 1  ||  ((s as any).thinkpreg ?? 0) === 1) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().8 ?? \u0027\u0027)); return false;">I think I lost a baby.</a>');
      }
    }
  } else {
    if (((s as any).cycle ?? 0) === 5) {
      scene.text('Broken water and contractions, it\'s pretty clear what is going on. You need to get to a hospital ASAP.');
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 10]; enterDCycreportActor(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.text('</td></tr></table></center>');
  scene.actions([
    { label: 'Exit', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterDCycreportActor(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    if (((s as any).knowpreg ?? 0) === 1) {
      (s as any).denypreg = 1;
      (s as any).thinkpreg = 0;
    } else {
      (s as any).denypreg = 0;
      (s as any).thinkpreg = 0;
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportChoice(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      (s as any).thinkpreg = 1;
      (s as any).denypreg = 0;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspCall(s, 'stat', '');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportChoice(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        (s as any).thinkpreg = 0;
        (s as any).denypreg = 0;
        (s as any).daylastperiod = ((s as any).daystart ?? 0);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
        qspCall(s, 'stat', '');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportChoice(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 4) {
          (s as any).thinkpreg = 0;
          (s as any).denypreg = 0;
          scene.text('<center><h1>Fertility Cycle</h1></center>');
          scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
          scene.text('<td width="250" cellspacing="0" cellpadding="0" valign="top">');
          scene.text('How many days ago was it you had your last period?');
          scene.text(`Currently: ${((s as any).pertemp ?? '')}`);
          scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=1; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">+1</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=5; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=10; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">+10</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().4 ?? \u0027\u0027)); return false;">Reset</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.daylastperiod = (daystart - pertemp); return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_update\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_cycreport_choice\u0027); return false;">Accept</a>');
          scene.text('</td></tr></table></center>');
          scene.actions([
            { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
            { label: 'Exit', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          ]);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 5) {
            if (((s as any).knowpreg ?? 0) === 1) {
              (s as any).denypreg = 1;
            } else {
              (s as any).denypreg = 0;
            }
            (s as any).thinkpreg = 0;
            (s as any).cycreport_txt = 'You do not believe you have periods any more.';
            qspCall(s, 'stat', '');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportChoice(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 6) {
              scene.text('<center><h1>Fertility Cycle</h1></center>');
              scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
              scene.text('<td width="250" cellspacing="0" cellpadding="0" valign="top">');
              scene.text('How many days ago was it you had your last period?');
              scene.text(`Currently: ${((s as any).pertemp ?? '')}`);
              scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=1; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().6 ?? \u0027\u0027)); return false;">+1</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=5; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().6 ?? \u0027\u0027)); return false;">+5</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp +=10; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().6 ?? \u0027\u0027)); return false;">+10</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.pertemp = 0; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_actor\u0027, String(window.__gameStore.getState().6 ?? \u0027\u0027)); return false;">Reset</a> <a href="#" onclick="window.__gameStore.setState((s) => { s.daylastperiod = daystart - pertemp; return s; }); window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_update\u0027 & gs \u0027stat\u0027 & gs \u0027din_bad\u0027, \u0027d_cycreport_choice\u0027); return false;">Accept</a>');
              scene.text('</td></tr></table></center>');
              scene.actions([
                { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
                { label: 'Exit', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
              ]);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 7) {
                scene.text('<center><h1>Fertility Cycle</h1></center>');
                scene.text('<center><table cellspacing="0" cellpadding="20" valign="top"><tr>');
                scene.text('<td width="500" cellspacing="0" cellpadding="0" valign="top">');
                ((s as any).potfather_temp = (s as any).potfather_temp ?? {})[1] = 0;
                if (((s as any).potfather_temp ?? 0)[1] > 0) {
                  (s as any).potfather_counter = 0;
                  scene.text('List of potential fathers:');
                  do {
                    if (((s as any).wombpotfath ?? 0)?.[String((s as any).potfather_counter ?? 0)] !== 'unknown') {
                      // TODO-QSP: $potfather_temp[2] = '<a href="exec: $wombthfath = ''<<$npc_usedname[$wombpotfath[potfather_counter]]>>'' & $wombthfathID = ''<<$wombpotfath[potfather_counter]>>'' & gs ''din_bad'', ''d_cycreport_actor'', 7 & gs ''stat''"><<$npc_usedname[$wombpotfath[potfather_counter]]>> (<<$wombpotfath[potfather_counter]>>)</a>'
                    } else {
                      // TODO-QSP: $potfather_temp[2] = '<a href="exec: $wombthfath = ''<<$npc_usedname[$wombpotfath[potfather_counter]]>>'' & $wombthfathID = ''<<$wombpotfath[potfather_counter]>>'' & gs ''din_bad'', ''d_cycreport_actor'', 7 & gs ''stat''">Unknown (-)</a>'
                    }
                    scene.text(`Potential father (${((s as any).potfather_counter ?? '') + 1}): ${(((s as any).potfather_temp ?? 0)?.[2] ?? '')}`);
                    (s as any).potfather_counter = ((s as any).potfather_counter ?? 0) + (1);
                  } while (((s as any).potfather_counter ?? 0) < Object.keys((s as any).wombpotfath ?? {}).length);
                } else {
                  scene.text('There are no potential fathers.');
                }
                (s as any).potfather_counter = undefined;
                (s as any).potfather_temp = undefined;
                scene.text('<br><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027din_bad\u0027, \u0027d_cycreport_choice\u0027 & gs \u0027stat\u0027); return false;">Accept</a>');
                scene.text('</td></tr></table></center>');
                (s as any).tempmax = 0;
                (s as any).tempcurr = 0;
                (s as any).sumcum = 0;
                while (true) {
                  if (((s as any).cumtime ?? 0)?.[String((s as any).tempcurr ?? 0)] > 1) {
                    (s as any).cum = 'cumshots';
                  } else {
                    (s as any).cum = 'cumshot';
                  }
                  if (((s as any).cumtime ?? 0)?.[String((s as any).tempcurr ?? 0)] > 0) {
                    scene.text(`${(((s as any).npc_usedname ?? 0)?.[(((s as any).cumfthname ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? '')] ?? '')} (${(((s as any).cumfthname ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? '')}) - ${(((s as any).cumtime ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? '')} ${((s as any).cum ?? '')}`);
                    (s as any).sumcum = ((s as any).sumcum ?? 0) + ((((s as any).cumtime ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? 0));
                  }
                  if (((s as any).tempcurr ?? 0) < ((s as any).tempmax ?? 0)) {
                    (s as any).tempcurr = ((s as any).tempcurr ?? 0) + (1);
                    break;
                  }
                  if (((s as any).sumcum ?? 0) > 1) {
                    (s as any).cum = 's';
                  } else {
                    (s as any).cum = '';
                  }
                  scene.text(`<br>You think you have had ${((s as any).sumcum ?? '')} load${((s as any).cum ?? '')} of cum shot${((s as any).cum ?? '')} in your womb altogether that could have gotten you pregnant.`);
                  scene.text(`You suspect the father being: ${((s as any).wombthfath ?? '')}<br>`);
                  (s as any).tempcurr = 0;
                  while (true) {
                    if (((s as any).cumtime ?? 0)?.[String((s as any).tempcurr ?? 0)] > 0) {
                      if (((s as any).npc_usedname ?? 0)[((s as any).cumfthname ?? 0)?.[String((s as any).tempcurr ?? 0)]] !== '') {
                        scene.text(`<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wombthfath = /u0027/u003c/u003c$npc_usedname[$cumfthname[tempcurr]]>>/u0027 */ /* TODO-QSP: $wombthfathID = /u0027/u003c/u003c$cumfthname[tempcurr]>>/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_cycreport_actor/u0027, /u00277 & gs /u0027stat/u0027/u0027); return false;">${(((s as any).npc_usedname ?? 0)?.[(((s as any).cumfthname ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? '')] ?? '')} (${(((s as any).cumfthname ?? 0)?.[String((s as any).tempcurr ?? 0)] ?? '')})</a>`);
                      } else {
                        scene.text(` <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $wombthfath = /u0027/u003c/u003c$npc_usedname[$cumfthname[tempcurr]]>>/u0027 */ /* TODO-QSP: $wombthfathID = /u0027/u003c/u003c$cumfthname[tempcurr]>>/u0027 */ return s; }); window.__gameStore.getState().doGoto(/u0027din_bad/u0027, /u0027d_cycreport_actor/u0027, /u00277 & gs /u0027stat/u0027/u0027); return false;">Unknown (-)</a>`);
                      }
                    }
                    if (((s as any).tempcurr ?? 0) < ((s as any).tempmax ?? 0)) {
                      (s as any).tempcurr = ((s as any).tempcurr ?? 0) + (1);
                      break;
                    }
                    (s as any).sumcum = undefined;
                    (s as any).cum = undefined;
                    (s as any).tempmax = undefined;
                    (s as any).tempcurr = undefined;
                  }
                }
                scene.actions([
                  { label: 'Return', handler: (st: GameState) => {
    qspCall(st, 'din_bad', '');
  } },
                  { label: 'Exit', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                ]);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 8) {
                  (s as any).thinkpreg = 0;
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
                  qspCall(s, 'stat', '');
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportChoice(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (String((s as any).locArgs?.[1] ?? '') === 10) {
                    (s as any).temp = 0;
                    (s as any).temp = ((s as any).temp ?? 0) - (1);
                    (s as any).cycreport_txt = 'You are currently recovering from childbirth. You gave birth on ' + (((s as any).monthkid ?? 0)?.[String((s as any).temp ?? 0)] ?? 0) + ' / ' + (((s as any).daykid ?? 0)?.[String((s as any).temp ?? 0)] ?? 0) + ' / ' + (((s as any).yearkid ?? 0)?.[String((s as any).temp ?? 0)] ?? 0) + '.';
                    qspCall(s, 'stat', '');
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

function enterDCycreportUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cycreport_txt ?? 0) === 'In labour') {
    return;
  }
  if (((s as any).succubusflag ?? 0) === 1  &&  (!((s as any).preg ?? 0))) {
    (s as any).cycreport_txt = 'As a succubus you no longer menstruate.';
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterComputeCycleState(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterComputeBcStatus(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).cycreport_txt = (((s as any).stat_texts ?? 0)?.['cycle_state']);
  if (((s as any).stat_texts ?? 0)?.['bc_status'] !== '') {
    (s as any).cycreport_txt = ((s as any).cycreport_txt ?? 0) + (' ' + (((s as any).stat_texts ?? 0)?.['bc_status']));
  }
  scene.build();
}

function enterDCycreportUpduedate(s: GameState, scene: SceneBuilder): void {
  (s as any).implant_calc = ((s as any).daystart ?? 0) - ((s as any).lastovulation ?? 0) + 5;
  (s as any).gastation_time = (280 * 100) / Math.max(1, qspFunc(s, '_difficulty', 'get_multiplied', (((s as any).cheatVars ?? 0)?.['preg_speed']), 100, (((s as any).cheatVars ?? 0)?.['preg_speed_custom'])));
  qspCall(s, 'time', 'to_date', ((s as any).daystart ?? 0) + ((s as any).gastation_time ?? 0) - ((s as any).implant_calc ?? 0));
  (s as any).pregduedate = '' + (((s as any).dateVars ?? 0)?.['day']) + ' ' + (String((((s as any).dateVars ?? 0)?.['monthName'])).slice((1)-1, ((1)-1)+(3))) + ' ' + (((s as any).dateVars ?? 0)?.['year']) + '';
  return;
  scene.build();
}

function enterDPregmovement(s: GameState, scene: SceneBuilder): void {
  if (((s as any).denypreg ?? 0) === 0  &&  ((s as any).pregChem ?? 0) > 0) {
    if (((s as any).thinkpreg ?? 0) > 0  &&  (!((s as any).knowpreg ?? 0))) {
      (s as any).knowpreg = 1;
      if (((s as any).kid ?? 0) <= 0) {
        scene.text('Your heart flutters as you feel a baby moving around inside you for the first time.');
      } else {
        scene.text('The movement inside you confirms what you already suspected. You are pregnant once again.');
      }
    } else {
      if (((s as any).knowpreg ?? 0) > 0) {
        (s as any).temprand = (Math.floor(Math.random() * 3) + 0);
        if ((!((s as any).temprand ?? 0))) {
          if (((s as any).pregChem ?? 0) > 5000) {
            scene.text('Your baby visibly moves around inside you.');
          } else {
            scene.text('You feel movement deep inside you as your baby shifts around.');
          }
        } else {
          if (((s as any).temprand ?? 0) === 1) {
            if (((s as any).pregChem ?? 0) > 5000) {
              scene.text('You wince as your baby delivers a vicious kick to your insides.');
            } else {
              scene.text('You feel your baby kicking.');
            }
          } else {
            if (((s as any).temprand ?? 0) === 2) {
              if (((s as any).pregChem ?? 0) > 5000) {
                scene.text('You feel your baby kicking, look down, and see your belly twitching from it\'s movements.');
              } else {
                scene.text('You feel your baby kicking.');
              }
            }
          }
        }
      } else {
        if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
          if (((s as any).pregChem ?? 0) < 4000) {
            if (((s as any).kid ?? 0) <= 0) {
              scene.text('You feel a weird and strange fluttering sensation around inside your stomach. Perhaps you should see the doctor?');
            } else {
              scene.text('It feels as if a baby is moving inside you. Are you pregnant?');
            }
          } else {
            (s as any).knowpreg = 1;
            if (((s as any).kid ?? 0) <= 0) {
              scene.text('It\'s become pretty obvious. You are pregnant.');
            } else {
              scene.text('It\'s become pretty obvious. You are pregnant once again.');
            }
          }
        }
      }
    }
  } else {
    if (((s as any).pregChem ?? 0) > 0) {
      if (((s as any).kid ?? 0) > 0  &&  ((s as any).pregChem ?? 0) > 3903) {
        scene.text('You try to deny it, but you just can\'t any more. The large belly, the movement, you are pregnant once again.');
        (s as any).denypreg = 0;
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpduedate(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).cycreport_txt = 'You are pregnant.';
      } else {
        scene.text('You feel movement deep inside you. It\'s probably just gas.');
      }
    }
  }
  scene.build();
}

function enterTakepill(s: GameState, scene: SceneBuilder): void {
  ((s as any).birth_control = (s as any).birth_control ?? {})['using_bc'] = 3;
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
    (s as any).tabletkirand = (Math.floor(Math.random() * ((((s as any).mc_inventory ?? 0)?.['contraceptive_pill']) - 1 + 1)) + (1));
    if (((s as any).tabletkirand ?? 0) <= ((s as any).tabletkiold ?? 0)) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
      (s as any).tabletkiold = ((s as any).tabletkiold ?? 0) - (1);
      (s as any).ptype = 1;
      ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
    } else {
      if (((s as any).tabletkirand ?? 0) <= ((s as any).tabletkiold ?? 0) + ((s as any).tabletkifake ?? 0)) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
        (s as any).tabletkifake = ((s as any).tabletkifake ?? 0) - (1);
        (s as any).ptype = 2;
        ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
      } else {
        if (((s as any).tabletkirand ?? 0) <= ((s as any).tabletkiold ?? 0) + ((s as any).tabletkifake ?? 0) + ((s as any).tabletkirej ?? 0)) {
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
          (s as any).tabletkirej = ((s as any).tabletkirej ?? 0) - (1);
          (s as any).ptype = 3;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
        } else {
          if (((s as any).tabletkirand ?? 0) <= ((s as any).tabletkiold ?? 0) + ((s as any).tabletkifake ?? 0) + ((s as any).tabletkirej ?? 0) + ((s as any).tabletkisug ?? 0)) {
            ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
            (s as any).tabletkisug = ((s as any).tabletkisug ?? 0) - (1);
            (s as any).ptype = 4;
            ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
          } else {
            if (((s as any).tabletkirand ?? 0) <= ((s as any).tabletkiold ?? 0) + ((s as any).tabletkifake ?? 0) + ((s as any).tabletkirej ?? 0) + ((s as any).tabletkisug ?? 0) + ((s as any).tabletkifert ?? 0)) {
              ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
              (s as any).tabletkifert = ((s as any).tabletkifert ?? 0) - (1);
              (s as any).ptype = 5;
              ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
            } else {
              ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = ((s as any).mc_inventory['contraceptive_pill'] ?? 0) - (1);
              (s as any).ptype = 0;
              ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = 28;
            }
          }
        }
      }
    }
    (s as any).tabletkirand = undefined;
  }
  if (((s as any).placebopart ?? 0) <= 0  ||  ((s as any).birth_control ?? 0)?.['placebo_skip'] === 1) {
    if ((!((s as any).ptype ?? 0))) {
      ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (1);
      (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
    } else {
      if (((s as any).ptype ?? 0) === 1) {
        ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        (s as any).pillcon = ((s as any).pillcon ?? 0) + ((( ((s as any).pillcon ?? 0)+ 15000) / 25)+ (Math.floor(Math.random() * 2001) + 2000));
      } else {
        if (((s as any).ptype ?? 0) === 2) {
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
          (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25)+ (Math.floor(Math.random() * 1501) + 500));
        } else {
          if (((s as any).ptype ?? 0) === 3) {
            ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
            (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 2) + 0));
            if ((!(Math.floor(Math.random() * 5) + 0))) {
              ((s as any).pain = (s as any).pain ?? {})['tummy'] = ((s as any).pain['tummy'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            }
            (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25)+ (Math.floor(Math.random() * 4001) + 2000));
          } else {
            if (((s as any).ptype ?? 0) === 4) {
              ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
            } else {
              if (((s as any).ptype ?? 0) === 5) {
                ((s as any).pillsleft = (s as any).pillsleft ?? {})[String((s as any).ptype ?? 0)] = ((s as any).pillsleft[String((s as any).ptype ?? 0)] ?? 0) - (1);
                (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (1);
                if (((s as any).pillcon ?? 0) > 0) {
                  if (((s as any).pillcon ?? 0) > 5000) {
                    (s as any).pillcon = ((s as any).pillcon ?? 0) - (5000);
                  } else {
                    if (((s as any).pillcon ?? 0) > 0) {
                      (s as any).pillcon = 0;
                    }
                  }
                } else {
                  (s as any).EggRH = ((s as any).EggRH ?? 0) + ((Math.floor(Math.random() * ((((s as any).trait_vars ?? {})?.['fertility_bc_conditioning'] ?? 0) + 30 - (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning']) + 1)) + ((((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning']))));
                  if (((s as any).trait_vars ?? 0)?.['fertility_bc_conditioning'] < 50) {
                    ((s as any).trait_vars = (s as any).trait_vars ?? {})['fertility_bc_conditioning'] = ((s as any).trait_vars['fertility_bc_conditioning'] ?? 0) + (1);
                  }
                }
              }
            }
          }
        }
      }
    }
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
    if (((s as any).pillcon2 ?? 0) > 40000) {
      (s as any).pillcon2 = 40000;
    }
    if (((s as any).pillcon ?? 0) > 40000) {
      (s as any).pillcon = 40000;
    }
    qspCall(s, 'fertility', 'birth_control_status_update');
  }
  scene.build();
}

function enterQuickTakepill(s: GameState, scene: SceneBuilder): void {
  (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (((s as any).tabletkipt ?? 0));
  if (((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTakepill(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).tabletkiday = ((s as any).daystart ?? 0);
    (s as any).tabletkipt = 0;
    (s as any).tabletkipi = 0;
  } else {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (1);
  }
  (s as any).pilldaychk = ((s as any).daystart ?? 0);
  if (((s as any).birth_control ?? 0)?.['message_skip'] !== ((s as any).daystart ?? 0)) {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
      alert('That was your last birth control pill. You need to buy some more.');
    } else {
      alert('You take your birth control pill.');
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterPDeodorant(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
  qspCall(s, 'sweat', 'deo');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDBag(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterCanMouthwash(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).mc_inventory ?? 0)?.['mouthwash'] > 0  &&  (((s as any).pcs_breath ?? 0) === 0  ||  ((s as any).cumloc ?? 0)[12] === 1));
  scene.build();
}

function enterDMouthwashDo(s: GameState, scene: SceneBuilder): void {
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 1;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['mouthwash'] = ((s as any).mc_inventory['mouthwash'] ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('Your breath smells minty fresh.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', '');
  } },
  ]);
  scene.build();
}

function enterCanQuickTakepill(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  ||  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0)  &&  ((s as any).pilldaychk ?? 0) !== ((s as any).daystart ?? 0));
  scene.build();
}

function enterQuickTakepillDo(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterQuickTakepill(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('You take your daily birth control pill.');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'daily_routine', '');
  } },
  ]);
  scene.build();
}

function enterComputeBcStatus(s: GameState, scene: SceneBuilder): void {
  (s as any).bc_protected = 0;
  (s as any).bc_icon = '';
  (s as any).bc_color = '';
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = '';
  if (((s as any).birth_control ?? 0)?.['remind_icon'] === 1) {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You\'re out of birth control pills!';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'bc_status', 'v_neg', 'status/cycle/bc_pills_reminder', 3);
      qspCall(s, 'stat_display_compute', 'queue_alert', 'You are out of birth control pills.', 'v_neg');
    } else {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'It\'s time to take your birth control pill!';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'bc_status', 'neg', 'status/cycle/bc_pills_reminder', 3, 'gs \'din_bad\', \'quick_takepill\'');
      qspCall(s, 'stat_display_compute', 'queue_alert', 'Time to take your birth control pill.', 'neg');
    }
    (s as any).bc_protected = undefined;
    (s as any).bc_icon = undefined;
    (s as any).bc_color = undefined;
    return;
  }
  if (((s as any).tabletkishot ?? 0) > 0) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You are currently protected by a birth control shot.';
    (s as any).bc_icon = 'status/cycle/bc_shot_effective';
    (s as any).bc_color = 'v_pos';
    (s as any).bc_protected = 1;
  } else {
    if (((s as any).birth_control ?? 0)?.['implant_status'] >= 1) {
      if (((s as any).birth_control ?? 0)?.['implant_status'] === 1) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'Your implant has stopped working. You need a new one.';
        (s as any).bc_icon = 'status/cycle/bc_iud_ineffective';
        (s as any).bc_color = 'v_neg';
      } else {
        if (((s as any).pillcon2 ?? 0) >= 30000) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'Your implant is protecting you from getting pregnant.';
          (s as any).bc_icon = 'status/cycle/bc_iud_effective';
          (s as any).bc_color = 'v_pos';
          (s as any).bc_protected = 1;
        } else {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'Your implant is not yet effective.';
          (s as any).bc_icon = 'status/cycle/bc_iud_ineffective';
          (s as any).bc_color = 'neg';
        }
      }
    } else {
      if (((s as any).pillcon2 ?? 0) > 0) {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          if (((s as any).tabletkiday ?? 0) >= ((s as any).daystart ?? 0) - 1) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You are currently on the birth control pill.';
            (s as any).bc_icon = 'status/cycle/bc_pills_effective';
            (s as any).bc_color = 'v_pos';
            (s as any).bc_protected = 1;
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You have recently stopped taking the pill. You are still safe for now, but the protection will fade soon.';
            (s as any).bc_icon = 'status/cycle/bc_pills_effective';
            (s as any).bc_color = 'neutral';
            (s as any).bc_protected = 1;
          }
        } else {
          if (((s as any).tabletkiday ?? 0) >= ((s as any).daystart ?? 0) - 1) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You are taking the pill, but it is not yet effective.';
            (s as any).bc_icon = 'status/cycle/bc_pills_ineffective';
            (s as any).bc_color = 'neutral';
          }
        }
      } else {
        if (((s as any).daystart ?? 0) === ((s as any).tabletkiday ?? 0)) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = 'You\'ve taken the pill today, but it will be a while before it is effective.';
          (s as any).bc_icon = 'status/cycle/bc_pills_ineffective';
          (s as any).bc_color = 'neutral';
        }
      }
    }
  }
  if ((!((s as any).bc_protected ?? 0))) {
    if (((s as any).stat_texts ?? 0)?.['bc_status'] !== '') {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + (' ');
    }
    if (((s as any).knowpreg ?? 0) === 1) {
      if (((s as any).bc_icon ?? 0) !== '') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You are already pregnant.');
      }
    } else {
      if (((s as any).thinkpreg ?? 0) === 1) {
        if (((s as any).bc_icon ?? 0) !== '') {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you may already be pregnant.');
        }
      } else {
        if (((s as any).trait_vars ?? 0)?.['fertility'] === -2) {
        } else {
          if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 35) {
            if (((s as any).bc_icon ?? 0) !== '') {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Your cycle is irregular right now. It\'s hard to say where you are on it.');
            }
          } else {
            if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
              if ((((s as any).focH ?? 0) > ((s as any).focH_max ?? 0) - 96)  ||  ((s as any).ovulate ?? 0) > 0) {
                if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You are in your fertile stage. Unprotected sex carries some risk, though your body is less likely to conceive than most.');
                } else {
                  if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You are in your fertile stage, and your body is hyperfertile!');
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You are in your fertile stage.');
                  }
                }
                if (((s as any).bc_icon ?? 0) === '') {
                  (s as any).bc_icon = 'status/cycle/ovule';
                }
                (s as any).bc_color = 'v_neg';
              } else {
                if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
                  if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is a risky day for unprotected sex, though your body is less likely to conceive than most.');
                  } else {
                    if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is a dangerous day to have unprotected sex, and your body is hyperfertile!');
                    } else {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is a dangerous day to have unprotected sex.');
                    }
                  }
                  if (((s as any).bc_icon ?? 0) === '') {
                    (s as any).bc_icon = 'status/cycle/ovule';
                  }
                  (s as any).bc_color = 'v_neg';
                } else {
                  if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
                    if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is probably a safe day, and the risk is lower than usual given your fertility.');
                    } else {
                      if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today should probably be a safe day, but your body is hyperfertile!');
                      } else {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is probably a safe day to have unprotected sex.');
                      }
                    }
                    if (((s as any).bc_icon ?? 0) === '') {
                      (s as any).bc_icon = 'status/cycle/ovule';
                    }
                    if (((s as any).bc_color ?? 0) !== 'v_neg') {
                      (s as any).bc_color = 'neg';
                    }
                  } else {
                    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
                      if (((s as any).bc_icon ?? 0) !== '') {
                        ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('Today is a safe day to have unprotected sex.');
                      }
                    }
                  }
                }
              }
            } else {
              if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
                if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you might be in your fertile window. The risk is lower than usual given your fertility, but some remains.');
                } else {
                  if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you might be in your fertile window, and your body is hyperfertile!');
                  } else {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you might be in your fertile window.');
                  }
                }
                if (((s as any).bc_icon ?? 0) === '') {
                  (s as any).bc_icon = 'status/cycle/ovule';
                }
                (s as any).bc_color = 'v_neg';
              } else {
                if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
                  if (((s as any).trait_vars ?? 0)?.['fertility'] === -1) {
                    ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you\'re probably outside your fertile window, and the risk is lower than usual given your fertility.');
                  } else {
                    if (((s as any).trait_vars ?? 0)?.['fertility'] === 1) {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you\'re probably outside your fertile window, but your body is hyperfertile.');
                    } else {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think you\'re probably outside your fertile window, but you can\'t be certain.');
                    }
                  }
                  if (((s as any).bc_icon ?? 0) === '') {
                    (s as any).bc_icon = 'status/cycle/ovule';
                  }
                  if (((s as any).bc_color ?? 0) !== 'v_neg') {
                    (s as any).bc_color = 'neg';
                  }
                } else {
                  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
                    if (((s as any).bc_icon ?? 0) !== '') {
                      ((s as any).stat_texts = (s as any).stat_texts ?? {})['bc_status'] = ((s as any).stat_texts['bc_status'] ?? 0) + ('You think it\'s a safe time in your cycle.');
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
  if (((s as any).bc_icon ?? 0) === '') {
    (s as any).bc_protected = undefined;
    (s as any).bc_icon = undefined;
    (s as any).bc_color = undefined;
    return;
  }
  qspCall(s, 'stat_display_compute', 'queue_msg', 'bc_status', ((s as any).bc_color ?? 0), ((s as any).bc_icon ?? 0), 3);
  (s as any).bc_protected = undefined;
  (s as any).bc_icon = undefined;
  (s as any).bc_color = undefined;
  scene.build();
}

function enterComputeCycleState(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = '';
  if (((s as any).succubusflag ?? 0) === 1  &&  (!((s as any).preg ?? 0))) {
    return;
  }
  if (((s as any).cheatVars ?? 0)?.['no_periods'] === 1  &&  ((s as any).preg ?? 0) !== 2  &&  ((s as any).knowpreg ?? 0) === 0  &&  (!((s as any).thinkpreg ?? 0))) {
    return;
  }
  if (((s as any).preg ?? 0) === 2) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Get to the hospital, ASAP! You\'re in labour!';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'v_neg', 'status/cycle/labour', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    qspCall(s, 'stat_display_compute', 'queue_alert', 'You are in labour! Get to a hospital, now!', 'v_neg');
    return;
  }
  if (((s as any).knowpreg ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpduedate(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are pregnant. Your due date is around ' + ((s as any).pregduedate ?? 0) + '.';
      if (((s as any).wombthfath ?? 0) !== 'unknown'  &&  ((s as any).wombthfath ?? 0) !== '') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = ((s as any).stat_texts['cycle_state'] ?? 0) + (' You suspect the father is ' + ((s as any).wombthfath ?? 0) + '.');
      }
    } else {
      if (((s as any).wombthfath ?? 0) === 'unknown'  ||  ((s as any).wombthfath ?? 0) === '') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are pregnant. Based on the last period you remember, your due date is probably around ' + ((s as any).pregduedate ?? 0) + '.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are pregnant with ' + ((s as any).wombthfath ?? 0) + '\'s baby. Based on the last period you remember, your due date is probably around ' + ((s as any).pregduedate ?? 0) + '.';
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/know_pregnant', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  if (((s as any).thinkpreg ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDCycreportUpduedate(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You think you might be pregnant, but aren\'t sure.';
    } else {
      if (((s as any).wombthfath ?? 0) === 'unknown'  ||  ((s as any).wombthfath ?? 0) === '') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You think you might be pregnant. Based on the last period you remember, your due date would be around ' + ((s as any).pregduedate ?? 0) + '.';
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You think you might be pregnant with ' + ((s as any).wombthfath ?? 0) + '\'s baby. Based on the last period you remember, your due date would be around ' + ((s as any).pregduedate ?? 0) + '.';
      }
    }
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/think_pregnant', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  if (((s as any).denypreg ?? 0) === 1) {
    if (((s as any).pregChem ?? 0) < 525) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'There is nothing wrong, your cycle is just irregular.';
    } else {
      if (((s as any).pregChem ?? 0) < 1863) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You have a strange flu making you feel ill.';
      } else {
        if (((s as any).pregChem ?? 0) < 4000) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your strange flu still hasn\'t gone away. As soon as it does you plan to exercise and lose the excess fat you\'ve been building up.';
        } else {
          if (((s as any).pregChem ?? 0) < 6000) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your weight just won\'t come off…';
          } else {
            if (((s as any).pregChem ?? 0) < 7500) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'People are rude, constantly asking you when you are due. You are not pregnant!';
            } else {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Surely if you were pregnant, you\'d have had the baby by now, so you can\'t possibly be pregnant.';
            }
          }
        }
      }
    }
    ((s as any).temp = (s as any).temp ?? {})[1] = ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0);
    if (((s as any).temp ?? 0)[1] > 0  &&  ((s as any).temp ?? 0)[1] <= 35) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = ((s as any).stat_texts['cycle_state'] ?? 0) + (' Your cycle seems a little off lately.');
    } else {
      if (((s as any).temp ?? 0)[1] > 35) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = ((s as any).stat_texts['cycle_state'] ?? 0) + (' You\'re not sure when you last had a period.');
      }
    }
    (s as any).temp = undefined;
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/womb', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  if (((s as any).menoage ?? 0) <= ((s as any).age ?? 0)  &&  ((s as any).cycle ?? 0) === 6) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You have gone through menopause.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/menopause', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  if (((s as any).mesec ?? 0) > 0) {
    if (((s as any).isprokp ?? 0) > 0) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are on your period and using a pad.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/period_pad', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    } else {
      if (((s as any).isprok ?? 0) > 0) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are on your period and using a tampon.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/period_tampon', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
      } else {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You are on your period. You need to use your feminine hygiene products.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'v_neg', 'status/cycle/period_now', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
      }
    }
    return;
  }
  if (((s as any).abortionbirthdate ?? 0) !== 0  &&  ((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) <= 24) {
    (s as any).temp = ((((s as any).knowpregloss ?? 0) === 2) ? ('miscarriage') : ('abortion'));
    if (((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) <= 13) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You\'re still in your recovery period after your ' + ((s as any).temp ?? 0) + '. Nothing to worry about.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    } else {
      if (((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) <= 16) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You could still be in your recovery period after your ' + ((s as any).temp ?? 0) + ', but there might be a risk.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).abortionbirthdate ?? 0) <= 21) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You should have recovered from your ' + ((s as any).temp ?? 0) + ' by now, right?';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'neg', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
        } else {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You should have definitely recovered from your ' + ((s as any).temp ?? 0) + ' by now.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'v_neg', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
        }
      }
    }
    (s as any).temp = undefined;
    return;
  }
  if (((s as any).pregbirthdate ?? 0) !== 0  &&  ((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) <= 73) {
    if (((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) <= 41) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You\'re still in your recovery period after giving birth. Nothing to worry about.';
      qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    } else {
      if (((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) <= 48) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You\'re probably still in your recovery period after giving birth.';
        qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
      } else {
        if (((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) <= 55) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You could still be in your recovery period after giving birth, but there might be a risk.';
          qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
        } else {
          if (((s as any).daystart ?? 0) - ((s as any).pregbirthdate ?? 0) <= 70) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You should have recovered from giving birth by now, right?';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'neg', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You should have definitely recovered from giving birth by now.';
            qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'v_neg', 'status/cycle/stretch_marks', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
          }
        }
      }
    }
    return;
  }
  if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  (!((s as any).knowpreg ?? 0))) {
    ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your period is due to start soon.';
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/period_soon', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  if (((s as any).thinkpreg ?? 0) === 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).cycle ?? 0) !== 6  &&  ((s as any).pillcon2 ?? 0) <= 30000  &&  ((s as any).succubusflag ?? 0) !== 1  &&  ((s as any).cheatVars ?? 0)?.['no_periods'] === 0  &&  ((s as any).abortionbirthdate ?? 0) === 0  &&  ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28) {
    ((s as any).temp = (s as any).temp ?? {})[1] = ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) - 28;
    if (((s as any).temp ?? 0)[1] <= 7) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your period is ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' ' + ((((s as any).temp ?? 0)[1] === 1) ? ('day') : ('days')) + ' late.';
    } else {
      if (((s as any).temp ?? 0)[1] <= 14) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your period is over a week late.';
      } else {
        if (((s as any).temp ?? 0)[1] <= 28) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your period is over two weeks late.';
        } else {
          if (((s as any).temp ?? 0)[1] <= 56) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'Your period is a month or more late.';
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'You haven\'t had a period in months.';
          }
        }
      }
    }
    (s as any).temp = undefined;
    qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', 'v_neg', 'status/cycle/period_late', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
    return;
  }
  ((s as any).temp = (s as any).temp ?? {})[1] = ((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0);
  if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
    ((s as any).stat = (s as any).stat ?? {})['cycphase_symptom_rand'] = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).bodyVars ?? 0)?.['bust_menst'] > 0) {
      if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'pain', '2', 'breasts', 'ache');
      }
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' Your breasts feel a little swollen today.';
    } else {
      if (((s as any).stat ?? 0)?.['cycle_phase'] === 'follicular') {
        if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 1) {
          if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
            (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
          }
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You\'re feeling pretty good today.';
        } else {
          if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 2) {
            if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
              (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + (10);
            }
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You feel a little extra pep in your step.';
          } else {
            if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 3) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You feel focused.';
            }
          }
        }
      } else {
        if (((s as any).stat ?? 0)?.['cycle_phase'] === 'ovulation') {
          if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 1) {
            if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
              qspCall(s, 'pain', '2', 'breasts', 'ache');
            }
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' Your breasts feel a little sore.';
          } else {
            if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 2) {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' Your body feels a little warmer than usual today. ';
            } else {
              if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 3) {
                if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
                  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (15);
                }
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You\'re feeling easily aroused today.';
              }
            }
          }
        } else {
          if (((s as any).stat ?? 0)?.['cycle_phase'] === 'luteal') {
            if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 1) {
              if (((s as any).stat ?? 0)?.['cycphase_symptoms'] !== ((s as any).daystart ?? 0)) {
                qspCall(s, 'pain', '2', 'breasts', 'ache');
              }
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' Your breasts feel tender today.';
            } else {
              if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 2) {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You feel bloated today.';
              } else {
                if (((s as any).stat ?? 0)?.['cycphase_symptom_rand'] === 3) {
                  ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_feel'] = ' You\'re feeling irritable today.';
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).cheatVars ?? 0)?.['track_period'] === 1) {
    if (((s as any).cycle ?? 0) === 2) {
      ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since the start of your last period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You are ovulating.';
    } else {
      if (((s as any).cycle ?? 0) === 1  &&  ((s as any).focH ?? 0) > ((s as any).focH_max ?? 0) - 96) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since the start of your last period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You are approaching ovulation.';
      } else {
        if (((s as any).cycle ?? 0) === 1) {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since the start of your last period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You are in your follicular phase.';
        } else {
          if (((s as any).cycle ?? 0) === 3) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since the start of your last period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You are in your luteal phase.';
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since the start of your last period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + '';
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_intel ?? 0) >= 50) {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe'  &&  ((s as any).temp ?? 0)[1] < 6) {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are in your follicular phase, early in your cycle.';
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are in your luteal phase.';
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe'  &&  ((s as any).temp ?? 0)[1] < 8) {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are approaching your fertile window.';
          } else {
            if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
              ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are leaving your fertile window.';
            } else {
              if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are in your fertile window.';
              } else {
                ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.';
              }
            }
          }
        }
      }
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
        ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' It should be safe to have unprotected sex.';
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
          ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' It might be a little risky to have unprotected sex.';
        } else {
          if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + ' You think you are in your fertile window.';
          } else {
            ((s as any).stat_texts = (s as any).stat_texts ?? {})['cycle_state'] = 'It has been ' + (((s as any).temp ?? 0)?.[1] ?? 0) + ' days since you last remember having a period.' + (((s as any).stat_texts ?? 0)?.['cycle_feel']) + '';
          }
        }
      }
    }
  }
  ((s as any).stat = (s as any).stat ?? {})['cycphase_symptoms'] = ((s as any).daystart ?? 0);
  (s as any).temp = undefined;
  qspCall(s, 'stat_display_compute', 'queue_msg', 'cycle_state', '', 'status/cycle/womb', 3, 'gs \'din_bad\', \'d_cycreport_choice\'');
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
    case 'dinalkowin1':
      enterDinalkowin1(s, scene);
      break;
    case 'dinalkowin2':
      enterDinalkowin2(s, scene);
      break;
    case 'din_Switch_Condom_Menu':
      enterDin_Switch_Condom_Menu(s, scene);
      break;
    case 'din_Table_Condom_Menu':
      enterDin_Table_Condom_Menu(s, scene);
      break;
    case 'din_Do_Condom_Counts':
      enterDin_Do_Condom_Counts(s, scene);
      break;
    case 'set_condom_used':
      enterSetCondomUsed(s, scene);
      break;
    case 'sabotage_a_condom':
      enterSabotageACondom(s, scene);
      break;
    case 'din_Update_Condom_Counts':
      enterDin_Update_Condom_Counts(s, scene);
      break;
    case 'd_tabletkied':
      enterDTabletkied(s, scene);
      break;
    case 'd_tabletkiedt':
      enterDTabletkiedt(s, scene);
      break;
    case 'd_tabletkieda':
      enterDTabletkieda(s, scene);
      break;
    case 'set_auto_bc':
      enterSetAutoBc(s, scene);
      break;
    case 'set_bc_reminder':
      enterSetBcReminder(s, scene);
      break;
    case 'turn_off_bc_reminder':
      enterTurnOffBcReminder(s, scene);
      break;
    case 'd_cycreport_choice':
      enterDCycreportChoice(s, scene);
      break;
    case 'd_cycreport_actor':
      enterDCycreportActor(s, scene);
      break;
    case 'd_cycreport_update':
      enterDCycreportUpdate(s, scene);
      break;
    case 'd_cycreport_upduedate':
      enterDCycreportUpduedate(s, scene);
      break;
    case 'd_pregmovement':
      enterDPregmovement(s, scene);
      break;
    case 'takepill':
      enterTakepill(s, scene);
      break;
    case 'quick_takepill':
      enterQuickTakepill(s, scene);
      break;
    case 'p_deodorant':
      enterPDeodorant(s, scene);
      break;
    case 'can_mouthwash':
      enterCanMouthwash(s, scene);
      break;
    case 'd_mouthwash_do':
      enterDMouthwashDo(s, scene);
      break;
    case 'can_quick_takepill':
      enterCanQuickTakepill(s, scene);
      break;
    case 'quick_takepill_do':
      enterQuickTakepillDo(s, scene);
      break;
    case 'compute_bc_status':
      enterComputeBcStatus(s, scene);
      break;
    case 'compute_cycle_state':
      enterComputeCycleState(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const din_bad: LocationDef = {
  name: 'din_bad',
  title: 'Your phone is ringing',
  region: 'other',
  enter: enter,
};
