import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMorningEventCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['morning_event_check'] = 1;
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (((s as any).hour ?? 0) < 11) {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) < 4  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
        (s as any).sex_ev['boy_make_breakfast'] = 1;
        (s as any).sex_ev['boy_shower'] = 0;
        (s as any).sex_ev['morning_event_go'] = 1;
      } else {
        (s as any).sex_ev['room_service'] = 1;
        (s as any).sex_ev['morning_event_go'] = 1;
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['wake_fuck'] !== 1) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        (s as any).sex_ev['boy_in_shower'] = 1;
      } else {
        (s as any).sex_ev['boy_shower'] = 1;
        (s as any).sex_ev['npc_morning_shower'] = 1;
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['morning_event_go'] === 1) {
    // TODO-QSP: xgt 'sex_ev_morning', 'morning_events'
  }
  scene.build();
}

function enterMorningEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1) {
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
        scene.actions([
          { label: 'Go find <<$npcdesc>>', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', 'breakfast_search');
  } },
        ]);
      }
      scene.actions([
        { label: 'Finish waking up', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', 'breakfast_in_bed');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        // TODO-QSP: dynamic text: "Can I cook you breakfast?" <<$npcdesc>> asks. "Least I can do for letting me st...
        scene.text(`"Can I cook you breakfast?" ${((s as any).npcdesc ?? 0)} asks. "Least I can do for letting me stay over."`);
      } else {
        // TODO-QSP: dynamic text: "Want some breakfast?" <<$npcdesc>> asks. "It'll just take me a few minutes."
        scene.text(`"Want some breakfast?" ${((s as any).npcdesc ?? 0)} asks. "It'll just take me a few minutes."`);
      }
      // TODO-QSP: xgt 'sex_ev_morning', 'boy_breakfast_offer'
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['wake_fuck'] === 0) {
      scene.text('"Hey," he smiles at you sleepily. "You feel like breakfast? We can order some room service."');
    } else {
      // TODO-QSP: dynamic text: "I could use some breakfast after such an energetic start to the day," <<$npcdes...
      scene.text(`"I could use some breakfast after such an energetic start to the day," ${((s as any).npcdesc ?? 0)} grins at you. "Want to order room service with me?"`);
    }
    // TODO-QSP: xgt 'sex_ev_morning', 'boy_breakfast_offer'
  }
  scene.build();
}

function enterNpcMorningShowerDesc(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['npc_morning_shower'] = 1;
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    scene.text('The bed next to you is empty and the bathroom door is closed. You can hear the water running behind it.');
  } else {
    // TODO-QSP: dynamic text: The bed next to you is empty but you can hear water running through the wall. <<...
    scene.text(`The bed next to you is empty but you can hear water running through the wall. ${((s as any).npcdesc ?? 0)} must be in the shower.`);
    // TODO-QSP: dynamic text: The bed next to you is empty. <<$npcdesc>> is nowhere to be seen.
    scene.text(`The bed next to you is empty. ${((s as any).npcdesc ?? 0)} is nowhere to be seen.`);
  }
  scene.build();
}

function enterCleanSleepVars(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['sleep_cum_vagina'] = 0;
  (s as any).sex_ev['sleep_cum_face'] = 0;
  (s as any).sex_ev['sleep_cum_hair'] = 0;
  (s as any).sex_ev['sleep_cum_tits'] = 0;
  (s as any).sex_ev['sleep_cum_stomach'] = 0;
  (s as any).sex_ev['sleep_cum_back'] = 0;
  (s as any).sex_ev['sleep_cum_butt'] = 0;
  scene.build();
}

function enterMorningMenu1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_morning', 'clean_sleep_vars');
  (s as any).sex_ev['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['morning_event_check'] === 0) {
    qspCall(s, 'sex_ev_morning', 'morning_event_check');
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
    scene.text('event ends in location');
  } else {
    qspCall(s, 'sex_ev_leave', 'npc_leave');
    scene.actions([
      { label: 'Prepare to leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', 'head_out');
  } },
    ]);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(s, 'sex_ev_leave', 'dressing1');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1  &&  ((s as any).sex_ev ?? 0)?.['morning_shower'] === 0) {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
      scene.actions([
        { label: 'Join <<$npcdesc>> in the shower', goto: ['sex_ev_shower', 'shower_join1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Look for <<$npcdesc>>', goto: ['sex_ev_shower', 'morning_look1'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Relax on the bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'relax_together'
  } },
      { label: 'Use the bathroom', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 1  &&  ((s as any).sex_ev ?? 0)?.['bathroom_check'] === 0) {
      (s as any).sex_ev['bathroom_check'] = 1;
      // TODO-QSP: $npc_bedroom[$npcID]
      // TODO-QSP: dynamic text: You get up to pad your way towards <<$npcdesc>>'s bathroom and he calls from beh...
      scene.text(`You get up to pad your way towards ${((s as any).npcdesc ?? 0)}'s bathroom and he calls from behind you.`);
      scene.text('"Hey, where you going?"');
      if (((s as any).cum_loc ?? 0) > 0) {
        scene.actions([
          { label: 'Clean up', handler: (st: GameState) => {
    scene.text('"You left me with a real mess to clean up," you smirk. "I need to take care of it."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Brush my hair', handler: (st: GameState) => {
    scene.text('"I need to brush my hair," you say. "It\'s a mess from... you know."');
    scene.text('"Oh. Well have fun with that," he smiles.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
        { label: 'Take a shower', handler: (st: GameState) => {
    scene.text('"I need a shower," you say over your shoulder.');
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"Maybe I should join you," he says suggestively.');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"I could use some alone time right now," you reply shaking your head and lock the door behind you.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
        { label: 'Sure', handler: (st: GameState) => {
    scene.text('"I\'d like that," you reply taking his hand as he gets up and drag him inside with you.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go by yourself', goto: ['sex_ev_after', 'bathroom_after'] },
        { label: 'Invite him', handler: (st: GameState) => {
    scene.text('"Did you... want to join me?" you ask, a teasing smirk on your face.');
    scene.text('"That sounds nice," he smiles back, getting up and taking your hand as you drag him inside with you.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      (s as any).sex_ev['bathroom_check'] = 1;
      scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] }]);
    }
  } },
    ]);
  }
  if (((s as any).hour ?? 0) < 11  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
    qspCall(s, 'sex_ev_morning', 'want_breakfast');
  } else {
    qspCall(s, 'sex_ev_leave', 'go_out_after');
    scene.actions([
      { label: 'Make breakfast', goto: ['sex_ev_morning', 'pc_make_breakfast'] },
    ]);
  }
  qspCall(s, 'sex_ev_pillow_talk2', 'forgot_bc_talk1');
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'Take a morning after pill', handler: (st: GameState) => {
    (s as any).sex_ev['ma_pill'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      scene.text('You reach down to your purse and pull out the morning after pill Luda gave you, popping it from the packaging and swallowing it dry.');
    } else {
      scene.text('You reach down to your purse and pull out the morning after pill you keep inside, popping it from the packaging and swallowing it dry.');
    }
    qspCall(s, 'medical_din', 'morning_after_pill_function');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  ((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0) {
    scene.actions([
      { label: 'Wake <<$npcdesc>> with a blowjob', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    // TODO-QSP: dynamic text: You slither under the covers and wrap your lips around <<$npcdesc>>'s already ha...
    scene.text(`You slither under the covers and wrap your lips around ${((s as any).npcdesc ?? 0)}'s already hard cock.`);
    qspCall(s, 'sex_ev_wakeup', 'bj_wake');
  } },
    ]);
  }
  scene.build();
}

function enterMorningMenu2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    // TODO-QSP: dynamic text: You are in <<$npcdesc>>'s room.
    scene.text(`You are in ${((s as any).npcdesc ?? 0)}'s room.`);
  } else {
    // TODO-QSP: dynamic text: You are in <<$npcdesc>>'s hotel room.
    scene.text(`You are in ${((s as any).npcdesc ?? 0)}'s hotel room.`);
  }
  qspCall(s, 'sex_ev_morning', 'morning_menu1');
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['morning_shower'] = 1;
  // TODO-QSP: $sex_ev['bath_room']
  if (((s as any).sex_ev ?? 0)?.['out_of_bed'] === 0) {
    scene.text('You pull yourself out of bed and pad your way over to the bathroom, yawning again along the way.');
  } else {
    scene.text('You pad your way over to the bathroom and climb into the shower.');
  }
  scene.actions([
    { label: 'Turn on the water', goto: ['sex_ev_morning', 'shower2'] },
  ]);
  scene.build();
}

function enterShower2(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['morning_shower'] = 1;
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.text('You twist the faucet and hot water comes rushing out, pouring over you, soaking into your skin. Slowly over time, your sleepiness washes away and clarity comes back.');
  scene.text('Feeling sufficiently awake, you turn off the tap and step out of the shower.');
  scene.actions([
    { label: 'Wrap yourself in a towel', goto: ['sex_ev_morning', 'shower_leave'] },
    { label: 'Just dry off', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['morning_shower'] = 2
  }, goto: ['sex_ev_morning', 'shower_leave'] },
  ]);
  scene.build();
}

function enter2ndShower(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: "I need another shower because of you," you say, giving <<$npcdesc>> a look as y...
  scene.text(`"I need another shower because of you," you say, giving ${((s as any).npcdesc ?? 0)} a look as you swagger your way to the bathroom.`);
  scene.actions([
    { label: 'Shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mc_inventory['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You get into <<$npcdesc>>'s shower for the <i>second</i> time this morning, wash...
    scene.text(`You get into ${((s as any).npcdesc ?? 0)}'s shower for the <i>second</i> time this morning, washing the sex sweat from your body.`);
    scene.text('You take a shorter one this time, mostly just rinsing off, before shutting the water off and getting out.');
    scene.actions([
      { label: 'Wrap yourself in a towel', goto: ['sex_ev_morning', 'shower_leave'] },
      { label: 'Just dry off', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['morning_shower'] = 2
  }, goto: ['sex_ev_morning', 'shower_leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterShowerLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['out_of_bed'] = 1;
  if (((s as any).sex_ev ?? 0)?.['morning_shower'] === 1) {
    (s as any).sex_ev['morning_shower'] = 3;
    (s as any).sex_ev['towel'] = 1;
    scene.img('images/shared/home/bathroom/towel_wet.jpg');
    scene.text('You leave the bathroom wrapped in a towel.');
  } else {
    (s as any).sex_ev['towel'] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You leave the bathroom naked.');
    if (((s as any).sex_ev ?? 0)?.['morning_shower'] === 3) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('Hair still wet from the shower, you consider what to do next.');
    }
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'morning_event_check':
      enterMorningEventCheck(s, scene);
      break;
    case 'morning_events':
      enterMorningEvents(s, scene);
      break;
    case 'npc_morning_shower_desc':
      enterNpcMorningShowerDesc(s, scene);
      break;
    case 'clean_sleep_vars':
      enterCleanSleepVars(s, scene);
      break;
    case 'morning_menu1':
      enterMorningMenu1(s, scene);
      break;
    case 'morning_menu2':
      enterMorningMenu2(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'shower2':
      enterShower2(s, scene);
      break;
    case '2nd_shower':
      enter2ndShower(s, scene);
      break;
    case 'shower_leave':
      enterShowerLeave(s, scene);
      break;
    default:
      enterMorningEventCheck(s, scene);
      break;
  }
}

export const sex_ev_morning: LocationDef = {
  name: 'sex_ev_morning',
  title: 'Outside School',
  region: 'other',
  enter: enter,
};
