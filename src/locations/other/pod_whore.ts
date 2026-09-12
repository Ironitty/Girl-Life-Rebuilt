import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterClientTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pod_whore', 'setup');
  qspCall(s, 'stat', '');
  if (((s as any).whore_money_bjsex ?? 0) < 50) {
    scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/fear.jpg');
    scene.text('You open the door and look at a strange man who looks quite surprised. He accidentally mutters: "Holy shit, she looks terrible!", just loud enough for you to hear.');
    scene.text('He quickly pulls himself together and apologizes: "Erm… my apologies miss, I must be at the wrong apartment. Have a nice day."');
    scene.text('You open your mouth to tell him he is at the right place, but he\'s gone before you can speak up. Maybe you should try to look a bit nicer before you open the door, if you want to receive clients here.');
    scene.actions([
      { label: 'Close the door', goto: ['korrPar', ''] },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door_nude\' + rand(1, 3) + \'.jpg');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress') {
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door_glamur.jpg');
      } else {
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door.jpg');
      }
    }
    // TODO-QSP: dynamic text: When you open the door, you see a stranger quickly eyeing you up and down. He sm...
    scene.text(`When you open the door, you see a stranger quickly eyeing you up and down. He smiles and asks: "Excuse me, are you ${((s as any).pcs_nickname ?? 0)}?"`);
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '"Nope, never heard of her!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Nope, never heard of her!" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_client_talk_no'] }]);
  } },
      ]);
    }
    scene.actions([
      { label: '"Yes, that\'s me!"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You give him a sweet smile and say: "Yes, that\'s me. Why are you asking?"');
    scene.text('The man looks a tad embarrassed to bring it up, but he\'s too horny to back down now: "I hear you\'re a prostitute, who services men in the stairwell here. Is that right?"');
    if (((s as any).pcs_sleep ?? 0) < 10  ||  (!((s as any).pod_whore_client_count ?? 0))) {
      scene.actions([
        { label: 'Decline, you\'re too tired', goto: ['pod_whore', 'hide', 'pod_client_talk_noson'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Decline, you don\'t want to fuck him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Decline, you don\'t want to fuck him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_no'] }]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pod_whore_countQW ?? 0) <= 15) {
    if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).pod_whore_client_count = Math.floor(Math.random() * 5) + 4;
    }
  } else {
    if (((s as any).pod_whore_countQW ?? 0) > 15) {
      if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).pod_whore_client_count = Math.floor(Math.random() * 9) + 8;
      }
    }
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 20) {
    (s as any).money_silicone = 0;
  } else {
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 30) {
      (s as any).money_silicone = 50;
    } else {
      if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 40) {
        (s as any).money_silicone = 100;
      } else {
        (s as any).money_silicone = 150;
      }
    }
  }
  (s as any).money_mop = 0;
  if (((s as any).pcs_makeup ?? 0) >= 2) {
    (s as any).money_mop = 50;
  }
  (s as any).money_hapri = 0;
  if (((s as any).pcs_hairbsh ?? 0) === 1) {
    (s as any).money_hapri = 50;
  }
  (s as any).money_glamur = 0;
  if (((s as any).clothingworntype ?? 0) === 'moncheri_dress'  ||  ((s as any).clothingworntype ?? 0) === 'moncheri_gown'  ||  ((s as any).clothingworntype ?? 0) === 'fashionista_dress') {
    (s as any).money_glamur = 150;
  }
  (s as any).money_odethooker = 0;
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    (s as any).money_odethooker = 50;
  }
  (s as any).money_skin = 0;
  if (((s as any).pcs_skin ?? 0) >= 600) {
    (s as any).money_skin = 50;
  }
  (s as any).money_skin_tan = 0;
  if (((s as any).pcs_tan ?? 0) > 0) {
    (s as any).money_skin_tan = 50;
  }
  (s as any).money_leghair = 0;
  if (((s as any).pcs_leghair ?? 0) <= 0) {
    (s as any).money_leghair = 50;
  }
  (s as any).money_resnic = 0;
  if (((s as any).pcs_lashes ?? 0) === 2) {
    (s as any).money_resnic = 50;
  }
  if (((s as any).pcs_lashes ?? 0) > 2) {
    (s as any).money_resnic = 100;
  }
  (s as any).money_pcs_lipbalm = 0;
  if (((s as any).pcs_lipbalm ?? 0) >= 1) {
    (s as any).money_pcs_lipbalm = 50;
  }
  (s as any).money_throat = 0;
  if (((s as any).pcs_throat ?? 0) >= 20) {
    (s as any).money_throat = 50;
  }
  (s as any).money_vagina = 0;
  if (((s as any).pcs_vag ?? 0) >= 20) {
    (s as any).money_vagina = 50;
  }
  (s as any).money_anus = 0;
  if (((s as any).pcs_ass ?? 0) >= 20) {
    (s as any).money_anus = 50;
  }
  (s as any).money_horny = 0;
  if (((s as any).pcs_horny ?? 0) > 70) {
    (s as any).money_horny = 50;
  }
  (s as any).money_vnesh = 0;
  if (((s as any).pcs_apprnc ?? 0) === -10) {
    (s as any).money_vnesh = 150;
  }
  (s as any).money_cumfrot = 0;
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
    (s as any).money_cumfrot = 50;
  }
  (s as any).money_sweat = 0;
  if (((s as any).pcs_sweat ?? 0) >= 20  &&  ((s as any).pcs_sweat ?? 0) <= 39) {
    (s as any).money_sweat = 50;
  }
  if (((s as any).pcs_sweat ?? 0) > 39) {
    (s as any).money_sweat = 100;
  }
  (s as any).money_cumlip = 0;
  if (((s as any).cumloc ?? 0)[12] === 1) {
    (s as any).money_cumlip = 50;
  }
  (s as any).money_cumface = 0;
  if (((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).money_cumface = 50;
  }
  (s as any).money_cumbelly = 0;
  if (((s as any).cumloc ?? 0)[14] === 1) {
    (s as any).money_cumbelly = 50;
  }
  (s as any).money_cumass = 0;
  if (((s as any).cumloc ?? 0)[4] === 1) {
    (s as any).money_cumass = 50;
  }
  (s as any).money_cumpussy = 0;
  if (((s as any).cumloc ?? 0)[0] > 0) {
    (s as any).money_cumpussy = 20;
  }
  if (((s as any).cumsumvag ?? 0) > 20) {
    (s as any).money_cumpussy = ((s as any).money_cumpussy ?? 0) + (30);
  }
  (s as any).money_cumanus = 0;
  if (((s as any).cumloc ?? 0)[3] > 0) {
    (s as any).money_cumanus = 20;
  }
  if (((s as any).cumsumass ?? 0) > 20) {
    (s as any).money_cumanus = ((s as any).money_cumanus ?? 0) + (30);
  }
  (s as any).money_son = 0;
  if (((s as any).pcs_sleep ?? 0) < 25) {
    (s as any).money_son = 50;
  }
  (s as any).whore_money_rnd = Math.floor(Math.random() * 51) + 50;
  (s as any).whore_dopmoney = ((s as any).whore_money_rnd ?? 0);
  (s as any).whore_money_bjsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 50 + ((s as any).money_throat ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_clsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 150 - ((s as any).money_vagina ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_analsex = ((s as any).money_silicone ?? 0) + ((s as any).money_mop ?? 0) + ((s as any).money_hapri ?? 0) + ((s as any).money_glamur ?? 0) + ((s as any).money_odethooker ?? 0) + ((s as any).money_skin ?? 0) + ((s as any).money_skin_tan ?? 0) + ((s as any).money_leghair ?? 0) + ((s as any).money_resnic ?? 0) + ((s as any).money_pcs_lipbalm ?? 0) + ((s as any).whore_dopmoney ?? 0) + 200 - ((s as any).money_anus ?? 0) - ((s as any).money_vnesh ?? 0) - ((s as any).money_horny ?? 0) - ((s as any).money_cumfrot ?? 0) - ((s as any).money_sweat ?? 0) - ((s as any).money_cumlip ?? 0) - ((s as any).money_cumface ?? 0) - ((s as any).money_cumbelly ?? 0) - ((s as any).money_cumpussy ?? 0) - ((s as any).money_cumanus ?? 0) - ((s as any).money_cumass ?? 0) - ((s as any).money_son ?? 0);
  (s as any).whore_money_allsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0) + 50;
  (s as any).whore_money_groupsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0) + ((s as any).whore_money_clsex ?? 0) + ((s as any).whore_dopmoney ?? 0);
  (s as any).whore_money_bjvagsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_clsex ?? 0);
  (s as any).whore_money_bjanalsex = ((s as any).whore_money_bjsex ?? 0) + ((s as any).whore_money_analsex ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterHide(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_analPlugIn') {
    if (((s as any).analPlugIn ?? 0) === 1) {
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.text('The guy asks in surprise: "There\'s a plug in your ass?"');
      scene.text('You blush and confess: "I like to be prepared…"');
      scene.text('He slowly pulls it out of your ass with a lewd grin: "In that case, you didn\'t prepare for nothing. I\'ll see to filling that hole again real soon."');
    }
    // TODO-QSP: end & !! --- pod_whore_analPlugIn ---
    if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_lubri') {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        ((s as any).mc_inventory ?? {})['lubricant'] = (((s as any).mc_inventory ?? {})['lubricant'] ?? 0) - (1);
        (s as any).agape = 1;
        qspCall(s, 'arousal', 'anal_finger', 1);
      } else {
        if (((s as any).mc_inventory ?? 0)?.['lubricant'] === 0) {
          (s as any).agape = 2;
          (s as any).pcs_horny = 0;
        }
      }
      // TODO-QSP: end & !! --- pod_whore_lubri ---
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_bj') {
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_vag') {
        (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_anal') {
        qspCall(s, 'pod_whore', 'hide', 'pod_whore_lubri');
        (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        qspCall(s, 'pod_whore', 'hide', 'pod_whore_analPlugIn');
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_cum') {
        (s as any).temp_rand = Math.floor(Math.random() * 4) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_bj') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_vag') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_anal') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_all') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_group') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_bj_vag') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_text_bj_anal') {
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
        if (((s as any).temp_rand ?? 0) === 8) {
        }
        if (((s as any).temp_rand ?? 0) === 9) {
        }
        if (((s as any).temp_rand ?? 0) === 10) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_torgtext1') {
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_torgtext2') {
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_torgtext3') {
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_torgtext4') {
        (s as any).temp_rand = Math.floor(Math.random() * 7) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
        if (((s as any).temp_rand ?? 0) === 6) {
        }
        if (((s as any).temp_rand ?? 0) === 7) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'rnd_client_torgtext5') {
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
        if (((s as any).temp_rand ?? 0) === 5) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_no') {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/no2.jpg');
        scene.text('"Sorry, I\'m a little busy right now. Perhaps you could come back later?"');
        scene.actions([
          { label: 'Close the door', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_noprice') {
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/no1.jpg');
        scene.text('"I\'m sorry, but I think my rates are more than reasonable. No deal."');
        scene.actions([
          { label: 'Close the door on him', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_price') {
        scene.text('You smile and give him a list of your services:');
        if (((s as any).whore_money_rnd ?? 0) <= 0) {
          scene.text('You give him a seductive smile: "You know what, you\'re cute. I\'ll give you a special deal on my prices."');
        }
        // TODO-QSP: dynamic text: "A blowjob will cost you <<$func('money', 'string_profit', whore_money_bjsex)>><...
        scene.text(`"A blowjob will cost you ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_bjsex ?? 0))}<br>fucking my pussy is ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_clsex ?? 0))}<br>or you can fuck my ass for ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_analsex ?? 0))}.<br>You can also just give me ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_allsex ?? 0))}, you can fuck me any way you like then for as long as you want… no holes barred.<br>If you are with your friends, I'll be happy to take all of you on at once for ${qspFunc(s, 'money', 'string_profit', ((s as any).whore_money_groupsex ?? 0))}.`);
        (s as any).rnd_client_event = Math.floor(Math.random() * 7) + 1;
        if (((s as any).rnd_client_event ?? 0) === 1) {
          (s as any).total_money = ((s as any).whore_money_bjsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 2) {
          (s as any).total_money = ((s as any).whore_money_clsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 3) {
          (s as any).total_money = ((s as any).whore_money_analsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 4) {
          (s as any).total_money = ((s as any).whore_money_allsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 5) {
          (s as any).total_money = ((s as any).whore_money_groupsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 6) {
          (s as any).total_money = ((s as any).whore_money_bjvagsex ?? 0);
        }
        if (((s as any).rnd_client_event ?? 0) === 7) {
          (s as any).total_money = ((s as any).whore_money_bjanalsex ?? 0);
        }
        (s as any).rnd_client_money = Math.floor(Math.random() * 96) + 150;
        (s as any).rnd_client_money2 = Math.floor(Math.random() * 146) + 450;
        (s as any).rnd_client_money3 = Math.floor(Math.random() * 146) + 300;
        (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        } else {
          if (((s as any).temp_rand ?? 0) === 2) {
            if (((s as any).total_money ?? 0) >= 250) {
              (s as any).total_money = ((s as any).total_money ?? 0) - (100);
            } else {
              if (((s as any).total_money ?? 0) < 250) {
              }
            }
          } else {
            if (((s as any).temp_rand ?? 0) === 3) {
              if (((s as any).total_money ?? 0) >= 150) {
                (s as any).total_money = ((s as any).total_money ?? 0) - (50);
              } else {
                if (((s as any).total_money ?? 0) < 150) {
                }
              }
            } else {
              if (((s as any).temp_rand ?? 0) === 4) {
                if (((s as any).rnd_client_event ?? 0) < 4  &&  ((s as any).total_money ?? 0) >= 250) {
                  (s as any).total_money = ((s as any).rnd_client_money ?? 0);
                } else {
                  if (((s as any).rnd_client_event ?? 0) < 4  &&  ((s as any).total_money ?? 0) < 250) {
                  }
                }
                if (((s as any).rnd_client_event ?? 0) >= 4  &&  ((s as any).rnd_client_event ?? 0) <= 5  &&  ((s as any).total_money ?? 0) >= 600) {
                  (s as any).total_money = ((s as any).rnd_client_money2 ?? 0);
                } else {
                  if (((s as any).rnd_client_event ?? 0) >= 4  &&  ((s as any).total_money ?? 0) < 600) {
                  }
                }
                if (((s as any).rnd_client_event ?? 0) >= 6  &&  ((s as any).total_money ?? 0) >= 450) {
                  (s as any).total_money = ((s as any).rnd_client_money3 ?? 0);
                } else {
                  if (((s as any).rnd_client_event ?? 0) >= 6  &&  ((s as any).total_money ?? 0) < 450) {
                  }
                }
              } else {
                if (((s as any).temp_rand ?? 0) === 5) {
                }
              }
            }
          }
        }
        if (((s as any).temp_rand ?? 0) >= 2  &&  ((s as any).temp_rand ?? 0) <= 4) {
          scene.actions([
            { label: 'Decline and shut the door', goto: ['pod_whore', 'hide', 'pod_whore_noprice'] },
          ]);
        }
        scene.actions([
          { label: 'Accept and go with him', handler: (st: GameState) => {
    // TODO-QSP: dynamic $goto_rnd_client_event
  } },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar1') {
        scene.text('You simply give the man a questioning look, and he continues: "Some friends of mine gave me this address. They said a beautiful girl lives here, that took care of both their bodies and minds. You sure look beautiful… I thought you were the one they were talking about."');
        scene.actions([
          { label: 'Object', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar2'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar2') {
        scene.text('You pretend to be insulted: "So you\'re saying I look like a whore!?"');
        if (((s as any).pod_whore_countQW ?? 0) <= 15) {
          scene.text('The man apologizes again: "I\'m so sorry, I must\'ve gotten the wrong address."');
          scene.text('He turns around and leaves before you can tell him otherwise.');
          scene.actions([
            { label: 'Close the door', goto: ['korrPar', ''] },
          ]);
        } else {
          scene.text('He looks at you defiantly and says: "Look, girl. You can\'t blame me for being confused… it even says so right there on the wall! A whore lives here!"');
          scene.actions([
            { label: 'Scold him', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar3'] },
            { label: 'Back down a little', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar5'] },
          ]);
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar3') {
        qspCall(s, 'stat', '');
        scene.text('You act insulted and shout at him: "Any idiot can write down that crap on someone\'s wall, that doesn\'t make it true!"');
        scene.text('The man raises his hands in defense and mutters: "Alright alright, I get it… she\'s not here. I\'m sorry, I should go."');
        qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Close the door [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Close the door [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['korrPar', ''] },
          ]);
        }
        scene.actions([
          { label: '"Are you sure?"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar9'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar4') {
        scene.text('You\'re not sure whether to be insulted or not. You simply tell him: "I\'m sorry sir, I don\'t know any prostitutes. You should leave."');
        scene.actions([
          { label: 'Close the door', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar5') {
        scene.text('You smirk at him: "Just because someone wrote it there, that doesn\'t make it true… for all I know, you were the one who put that there!"');
        scene.text('He goes in full defensive mode now: "Wait, what? I didn\'t do anything!"');
        qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'End the conversation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'End the conversation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar7'] }]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Keep teasing him', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar6'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar6') {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: You keep teasing him: "Well, you could always just go from door to door, trying ...
        scene.text(`You keep teasing him: "Well, you could always just go from door to door, trying to find a girl named ${((s as any).pcs_nickname ?? 0)}…", while you do your best not to laugh.`);
        scene.text('The guy is clearly taken aback, his face deeply red with embarrassment.');
        qspCall(s, 'willpower', 'prostitution', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'End the conversation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'End the conversation [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar7'] }]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Confess you\'re <<$pcs_nickname>>', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar8'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar7') {
        qspCall(s, 'stat', '');
        scene.text('You sigh and tell him: "This conversation is over. Good day, sir", and close the door in his face. Mere seconds later, you already feel bad about how you treated him.');
        scene.actions([
          { label: 'Close the door', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar8') {
        // TODO-QSP: dynamic text: You feel bad for the guy, and confess: "I'm sorry babe, I was just teasing you. ...
        scene.text(`You feel bad for the guy, and confess: "I'm sorry babe, I was just teasing you. I'm ${((s as any).pcs_nickname ?? 0)}. How can I make it up to you? All of my holes are at your disposal, I'll even give you a discount…"`);
        scene.text('He looks relieved, and it takes him a second to realize why he\'s here. Then it hits him, and he says: "Right… how much do you charge?"');
        scene.actions([
          { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar9') {
        // TODO-QSP: dynamic text: You can barely hide your smile when you say: "Is that all you have to say for yo...
        scene.text(`You can barely hide your smile when you say: "Is that all you have to say for yourself? You know, my name also happens to be ${((s as any).pcs_nickname ?? 0)}…"`);
        // TODO-QSP: dynamic text: The man looks at you with a somewhat confused look on his face: "Wait… so you're...
        scene.text(`The man looks at you with a somewhat confused look on his face: "Wait… so you're not the ${((s as any).pcs_nickname ?? 0)} that's being advertised on the walls? Are you also in the business or not?"`);
        scene.actions([
          { label: '"Maybe…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar10'] },
          { label: '"Just kidding!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar11'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar10') {
        scene.text('You show the effort of quickly eyeing him top to bottom, and then smile mysteriously: "For you, sweetie? Maybe… do you like me?"');
        scene.text('The man really doesn\'t know what\'s happening any more: "Erm, do I like you? Heck yea, you\'re pretty cute… why, do you want to go out some time?"');
        scene.actions([
          { label: '"You do look cute…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar12'] },
          { label: '"No, I was joking!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar13'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar11') {
        // TODO-QSP: dynamic text: You decide to let him off easy, and just admit it: "I was just kidding, babe. I'...
        scene.text(`You decide to let him off easy, and just admit it: "I was just kidding, babe. I'm ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('The guy looks at you, not quite sure what to think: "Wait… so you were just leading me on?"');
        scene.text('You give him a friendly smile and say: "I\'m sorry, babe. Maybe I can make it up to you? I bet I could make you feel good…"');
        scene.text('You see the greedy look in his eyes, you can tell he wants you. After a second, he says: "Alright, you got me. How much do you charge?"');
        scene.actions([
          { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar12') {
        scene.text('You keep smiling mysteriously at him, chuckling internally. You love messing with guys! You tell him: "Well, you do look cute… what did you have in mind?"');
        scene.text('He\'s half blubbering now, and you can tell he\'s doing his best to find a way out of this conversation: "Erm… I don\'t know, maybe I could take you some place nice?"');
        scene.text('You simply smile: "Oh? Where would you take me?"');
        scene.text('The man feels encouraged by you not blowing him off immediately, and suggests: "Maybe we could go for a walk? Or we could go have a drink in a cafe, or go see a movie?"');
        scene.actions([
          { label: '"Sorry, sweetie…"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar14'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar13') {
        qspCall(s, 'stat', '');
        scene.text('You chuckle and shake your head: "Of course not! What kind of girl do you think I am?"');
        scene.text('The man is obviously insulted, and sneers: "A bitch, to be honest."');
        scene.text('You feel you may have crossed a line, and try to respond: "How would you feel if some guy was at your door, hoping to find a prostitute?"');
        scene.text('He\'s not buying it, and angrily says: "I would feel like this is a huge fucking waste of time. Thanks for nothing, bitch."');
        scene.text('He turns around and leaves before you can get another word in, and you feel a tinge of regret for hurting his feelings like that.');
        scene.actions([
          { label: 'Close the door', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_bazar14') {
        scene.text('You can\'t keep toying with this poor man! You chuckle and tell him: "I\'m sorry sweetie, I don\'t think I could take my clients to a place like that!"');
        // TODO-QSP: dynamic text: The man is silent for a moment while he connects the dots in his mind, and then ...
        scene.text(`The man is silent for a moment while he connects the dots in his mind, and then mutters: "Wait… so you are <b>the</b> ${((s as any).pcs_nickname ?? 0)} and you were messing with me the whole time!?"`);
        scene.text('You laugh out loud and tell him: "Sorry babe, I was testing you. I like you though, you\'re cute. How about I give you a discount, maybe I can make it up to you?"');
        scene.text('The man looks a tad embarrassed, but is mostly just relieved you are who he thinks you are: "Damn, you got me there! Alright then… how much do you charge?"');
        scene.actions([
          { label: 'Give him your price list', goto: ['pod_whore', 'hide', 'pod_whore_price'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_no') {
        qspCall(s, 'stat', '');
        // TODO-QSP: dynamic text: You shake your head: "I'm sorry, I don't know who this <<$pcs_nickname>> is. You...
        scene.text(`You shake your head: "I'm sorry, I don't know who this ${((s as any).pcs_nickname ?? 0)} is. You must be at the wrong number."`);
        scene.text('The man smiles and apologizes: "I\'m sorry, miss. Could you tell me where I could find a willing girl? I have more than enough money on me."');
        scene.actions([
          { label: '"I don\'t know any whores!"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar4'] },
          { label: '"Money, you say?"', goto: ['pod_whore', 'hide', 'pod_client_talk_bazar1'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_client_talk_noson') {
        qspCall(s, 'stat', '');
        scene.text('You look at the guy sympathetically and say: "I\'m sorry, babe. You\'re cute, but I\'m simply exhausted today. I wouldn\'t be able to give you the attention you deserve. Maybe come back tomorrow, I\'ll show you a good time then?"');
        scene.text('The man is a tad frustrated about coming over to your place for nothing, but you can tell your attempts to butter him up salvaged the situation a bit: "Really, you think so? Alright… maybe I\'ll come back tomorrow."');
        scene.actions([
          { label: 'Close the door', goto: ['korrPar', ''] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev_end') {
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 0, '', '', 10);
        qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 0, '', '', 30);
        if (((s as any).pcs_energy ?? 0) >= 15) {
          (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (4);
        }
        if (((s as any).pcs_hydra ?? 0) >= 20) {
          (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (6);
        }
        (s as any).pcs_hairbsh = 0;
        (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 4) + 2);
        qspCall(s, 'money', 'earn', ((s as any).total_money ?? 0), 'cash');
        (s as any).pod_whore_countQW = ((s as any).pod_whore_countQW ?? 0) + (1);
        (s as any).pod_whore_client_day = ((s as any).daystart ?? 0);
        (s as any).pod_whore_client_count = ((s as any).pod_whore_client_count ?? 0) - (1);
        qspCall(s, 'fame', 'pav', 'prostitute', Math.floor(Math.random() * 7) + 6);
        qspCall(s, 'arousal', 'end');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/cum\' + rand(1, 7) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_cum');
        // TODO-QSP: dynamic text: The man gives you <<$func('money', 'string_profit', total_money)>>, as promised.
        scene.text(`The man gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).total_money ?? 0))}, as promised.`);
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', 'hide', 'clean');
  }, goto: ['korrPar', ''] },
          ]);
        } else {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', 'hide', 'clean');
  }, goto: ['pod_ezd', 'etaj_2'] },
          ]);
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev1') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 11) + 5, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/bj\' + rand(1, 17) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_bj');
        qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
        scene.actions([
          { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev2') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 9) + 7, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(1, 7) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_vag');
        qspCall(s, 'gopsex', 'gg_sex_orgasm');
        qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
        scene.actions([
          { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev3') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 9) + 7, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(8, 14) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_anal');
        qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
        scene.actions([
          { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev4') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 10) + 3, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/bj\' + rand(1, 17) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_bj');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 9) + 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(1, 7) + \'.mp4');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_vag');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 9) + 7, 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(8, 14) + \'.mp4');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_anal');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev6') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 11) + 5, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/bj\' + rand(1, 17) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_bj');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'vaginal', Math.floor(Math.random() * 9) + 7, 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(1, 7) + \'.mp4');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_vag');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev7') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'arousal', 'bj', Math.floor(Math.random() * 11) + 5, 'prostitution');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/bj\' + rand(1, 17) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_bj');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal', Math.floor(Math.random() * 9) + 7, 'prostitution');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/sex\' + rand(8, 14) + \'.mp4');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_anal');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_ev_end'] },
    ]);
  } },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_groupbj') {
        (s as any).temp_rand = Math.floor(Math.random() * 4) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
        if (((s as any).temp_rand ?? 0) === 4) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'text_pod_whore_groupsex') {
        (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
        }
        if (((s as any).temp_rand ?? 0) === 2) {
        }
        if (((s as any).temp_rand ?? 0) === 3) {
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_ev5') {
        (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
        if (((s as any).temp_rand ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_groupsexev1'] }]);
        }
        if (((s as any).temp_rand ?? 0) === 2) {
          scene.actions([{ label: 'Continue', goto: ['pod_whore', 'hide', 'pod_whore_groupsexev2'] }]);
        }
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_groupsexev1') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '1');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'npcgeneratec', '', 0, 'client', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '2');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        // TODO-QSP: gs 'arousal', 'bj', rand(3, 5), $npcID[1], 'prostitution', 'group'
        // TODO-QSP: gs 'arousal', 'bj', rand(3, 5), $npcID[2], 'prostitution', 'group'
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/1_1_\' + rand(1, 2) + \'.jpg');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_groupbj');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', rand(5, 11), $npcID[1], 'prostitution', 'group'
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/1_2_\' + rand(1, 2) + \'.jpg');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_groupsex');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', rand(7, 12), $npcID[2], 'prostitution', 'group'
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/1_3.jpg');
    qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_groupsex');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 0, '', '', 10
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 0, '', '', 30
    // TODO-QSP: gs 'cum_call', 'face', $boy[2], 0, '', '', 10
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[2], 0, '', '', 20
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[2], 0, '', '', 10
    if (((s as any).pcs_energy ?? 0) >= 15) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (8);
    }
    if (((s as any).pcs_hydra ?? 0) >= 20) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    }
    (s as any).pcs_hairbsh = 0;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
    qspCall(s, 'money', 'earn', ((s as any).total_money ?? 0), 'cash');
    (s as any).pod_whore_countQW = ((s as any).pod_whore_countQW ?? 0) + (1);
    (s as any).pod_whore_client_day = ((s as any).daystart ?? 0);
    (s as any).pod_whore_client_count = ((s as any).pod_whore_client_count ?? 0) - (1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/1_4_\' + rand(1, 2) + \'.jpg');
    scene.text('After they fucked you in several positions and both had their turns, they tell you they want to cum on your face.');
    scene.text('You eagerly drop to your knees and stick out your tongue, inviting them to cum in your mouth while you look them deep in the eyes.');
    // TODO-QSP: dynamic text: Soon enough, the hot jets of cum splatter down on your face, mostly on your expo...
    scene.text(`Soon enough, the hot jets of cum splatter down on your face, mostly on your exposed tongue. A few drips run down your chin and drop onto your ${((s as any).titsize ?? 0)} boobs. You absent-mindedly rub them, spreading their cum all over them.`);
    scene.text('You can tell the men are truly spent, and enjoyed your services a great deal.');
    // TODO-QSP: dynamic text: One guy produces the money you were promised, and hands you the <<$func('money',...
    scene.text(`One guy produces the money you were promised, and hands you the ${qspFunc(s, 'money', 'string_profit', ((s as any).total_money ?? 0))}. He smiles happily: "You were great, girl. We'll definitely be back."`);
    scene.actions([
      { label: 'Thank them and leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', 'hide', 'clean');
  }, goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'pod_whore_groupsexev2') {
        qspCall(s, 'npcgeneratec', '', 0, 'customer', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '1');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'npcgeneratec', '', 0, 'client', Math.floor(Math.random() * 23) + 18);
        qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '2');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        // TODO-QSP: gs 'arousal', 'bj', rand(3, 5), $npcID[1], 'prostitution', 'group'
        // TODO-QSP: gs 'arousal', 'bj', rand(3, 5), $npcID[2], 'prostitution', 'group'
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_1_\' + rand(1, 2) + \'.mp4');
        qspCall(s, 'pod_whore', 'hide', 'text_pod_whore_groupbj');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_2_1.mp4');
    scene.text('The guys indicate they want to fuck you now. As soon as you lean over, the man behind you immediately grabs onto your hips and begins to fuck you with long, hard thrusts.');
    scene.text('The other guy gets in front of you and says: "Go on, whore. Put that mouth of yours to work as well, I\'m not just going to stand here and wait."');
    scene.text('You obediently open your mouth and take his dick in your mouth. It\'s a bit difficult to give him a good blowjob while your pussy is also getting pounded, especially with him moving his hips like that, but after a while they get into a steady pace and you just let the guys have their way with you.');
    // TODO-QSP: gs 'arousal', 'vaginal', rand(5, 10), $npcID[2], 'prostitution', 'group'
    // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[1], 'prostitution', 'group'
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'gopsex', 'hide', 'accview_ggsex');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_3_1.mp4');
    scene.text('Then they switch places, and you now have the other guy fucking you. You can taste your pussy juices on his dick as he makes you suck it. You\'re still not very comfortable in this position, but you steady yourself on the man\'s belt and after a while you get back into that steady pace.');
    // TODO-QSP: gs 'arousal', 'vaginal', rand(5, 10), $npcID[1], 'prostitution', 'group'
    // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[2], 'prostitution'
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 6) + 5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_2_\' + rand(2, 3) + \'.mp4');
    scene.text('Then the guy fucking you lies down on his back, his cock never leaving your pussy. He drags you with him, and you steady your hands on his chest behind you. He expects you to ride him now, while the other guy moves back up to your face and tells you to keep sucking.');
    scene.text('You don\'t give it any more thought and just open your mouth as he says, and close your lips around it again.');
    scene.text('Getting fucked by two guys at once really makes you feel like a dirty slut. The guys probably think that getting fucked is all that you are good for, and treat you like a slab of meat.');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', rand(5, 10), $npcID[2], 'prostitution', 'group'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'prostitution'
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_3_2.mp4');
    scene.text('The man you\'ve been blowing for the past 10 minutes suddenly pulls you up, and lowers himself to the ground before he tells you to get on his dick. He pulls your hips closer against him once you rub his hard cock against your pussy lips, and begins to fuck you vigorously.');
    scene.text('The other man points his cock at your mouth and grins at you: "You know what I want, whore. Start sucking."');
    scene.text('You nod and take his dick in your mouth, once again tasting yourself. You rather enjoy the way you taste, and the thought of licking your juices off someone\'s cock turns you on a lot.');
    qspCall(s, 'gopsex', 'gg_sex_orgasm');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 0, '', '', 10
    // TODO-QSP: gs 'cum_call', '', $boy[2], 0, '', '', 30
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 0, '', '', 10
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 0, '', '', 30
    if (((s as any).pcs_energy ?? 0) >= 15) {
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) - (8);
    }
    if (((s as any).pcs_hydra ?? 0) >= 20) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) - (10);
    }
    (s as any).pcs_hairbsh = 0;
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 5) + 3);
    qspCall(s, 'money', 'earn', ((s as any).total_money ?? 0), 'cash');
    (s as any).pod_whore_countQW = ((s as any).pod_whore_countQW ?? 0) + (1);
    (s as any).pod_whore_client_day = ((s as any).daystart ?? 0);
    (s as any).pod_whore_client_count = ((s as any).pod_whore_client_count ?? 0) - (1);
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/sex/2_4.jpg');
    scene.text('After a few more minutes of getting fucked, you suddenly feel the guy underneath you spasm. Seconds later you feel a warm liquid inside you, and when he pulls his cock out of you his cum slowly drips from your pussy. A few more jets of cum come out, landing on your stomach. The other guy cums inside your mouth at the same time, without any warning. You swallow his load as best you can, and only miss a few drops that end up on your chin.');
    scene.text('The guys don\'t pay much attention to you when they put their clothes back on. They\'re mostly talking to one another about how much of a good fuck you were, pretending you\'re not there.');
    // TODO-QSP: dynamic text: Then one guy turns to you and gives you the money: "You're a pretty decent fuck,...
    scene.text(`Then one guy turns to you and gives you the money: "You're a pretty decent fuck, ${((s as any).pcs_nickname ?? 0)}. Here are the ${qspFunc(s, 'money', 'string_profit', ((s as any).total_money ?? 0))} we agreed upon. See you around."`);
    scene.actions([
      { label: 'Thank them and leave', handler: (st: GameState) => {
    qspCall(st, 'pod_whore', 'hide', 'clean');
  }, goto: ['pod_ezd', 'etaj_2'] },
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
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'clean') {
      }
      // TODO-QSP: end & !! --- hide ---
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'client_talk':
      enterClientTalk(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'hide':
      enterHide(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pod_whore: LocationDef = {
  name: 'pod_whore',
  title: 'You open the door and look at a strange man who looks quite ',
  region: 'other',
  enter: enter,
};
