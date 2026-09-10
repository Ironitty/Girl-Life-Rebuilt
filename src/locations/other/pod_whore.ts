import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
      scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door_glamur.jpg');
      scene.img('images/locations/pavlovsk/resident/apartment/home/event/whore/door.jpg');
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
        { label: '"Nope, never heard of her!"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'pod_whore', 'hide', 'pod_client_talk_no'
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
        { label: 'Decline, you\'re too tired', handler: (st: GameState) => {
    // TODO-QSP: gt 'pod_whore', 'hide', 'pod_client_talk_noson'
  } },
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
          { label: 'Decline, you don\'t want to fuck him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'pod_whore', 'hide', 'pod_whore_no'
  } },
        ]);
      }
      scene.actions([
        { label: 'Give him your price list', handler: (st: GameState) => {
    // TODO-QSP: gt 'pod_whore', 'hide', 'pod_whore_price'
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pod_whore_countQW ?? 0) <= 15) {
    if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).pod_whore_client_count = Math.floor(Math.random() * 5) + 4;
    }
  } else {
    if (((s as any).pod_whore_client_day ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).pod_whore_client_count = Math.floor(Math.random() * 9) + 8;
    }
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 20) {
    (s as any).money_silicone = 0;
  } else {
    (s as any).money_silicone = 50;
    if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 40) {
      (s as any).money_silicone = 100;
    } else {
      (s as any).money_silicone = 150;
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
    default:
      enterClientTalk(s, scene);
      break;
  }
}

export const pod_whore: LocationDef = {
  name: 'pod_whore',
  title: 'You open the door and look at a strange man who looks quite ',
  region: 'other',
  description: ['You open the door and look at a strange man who looks quite surprised. He accidentally mutters: "Holy shit, she looks terrible!", just loud enough for you to hear.'],
  enter: enter,
};
