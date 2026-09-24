import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMorningEventCheck(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_event_check'] = 1;
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (((s as any).hour ?? 0) < 11) {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) < 4  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_make_breakfast'] = 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_event_go'] = 1;
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  &&  ((s as any).npc_selfish ?? 0) < 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['room_service'] = 1;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_event_go'] = 1;
        }
      }
    }
  } else {
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['wake_fuck'] !== 1) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 1;
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 1;
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_morning_shower'] = 1;
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['morning_event_go'] === 1) {
    qspGoto(s, 'sex_ev_morning', 'morning_events');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1) {
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go find ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Finish waking up', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        // TODO-QSP: dynamic text: "Can I cook you breakfast?" <<$npcdesc>> asks. "Least I can do for letting me st...
        scene.text(`"Can I cook you breakfast?" ${((s as any).npcdesc ?? '')} asks. "Least I can do for letting me stay over."`);
      } else {
        // TODO-QSP: dynamic text: "Want some breakfast?" <<$npcdesc>> asks. "It''ll just take me a few minutes."
        scene.text(`"Want some breakfast?" ${((s as any).npcdesc ?? '')} asks. "It'll just take me a few minutes."`);
      }
      qspGoto(s, 'sex_ev_morning', 'boy_breakfast_offer');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['room_service'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['wake_fuck'] === 0) {
        scene.text('"Hey," he smiles at you sleepily. "You feel like breakfast? We can order some room service."');
      } else {
        // TODO-QSP: dynamic text: "I could use some breakfast after such an energetic start to the day," <<$npcdes...
        scene.text(`"I could use some breakfast after such an energetic start to the day," ${((s as any).npcdesc ?? '')} grins at you. "Want to order room service with me?"`);
      }
      qspGoto(s, 'sex_ev_morning', 'boy_breakfast_offer');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcMorningShowerDesc(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_morning_shower'] = 1;
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    scene.text('The bed next to you is empty and the bathroom door is closed. You can hear the water running behind it.');
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
      // TODO-QSP: dynamic text: The bed next to you is empty but you can hear water running through the wall. <<...
      scene.text(`The bed next to you is empty but you can hear water running through the wall. ${((s as any).npcdesc ?? '')} must be in the shower.`);
    } else {
      // TODO-QSP: dynamic text: The bed next to you is empty. <<$npcdesc>> is nowhere to be seen.
      scene.text(`The bed next to you is empty. ${((s as any).npcdesc ?? '')} is nowhere to be seen.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCleanSleepVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_vagina'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_face'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_hair'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_tits'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_stomach'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_back'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_cum_butt'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterMorningMenu1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCleanSleepVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['morning_event_check'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningEventCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
    scene.text('event ends in location');
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      qspCall(s, 'sex_ev_leave', 'npc_leave');
    } else {
      scene.actions([
        { label: 'Prepare to leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
      ]);
    }
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(st, 'sex_ev_leave', 'dressing1');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1  &&  ((s as any).sex_ev ?? 0)?.['morning_shower'] === 0) {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Join ' + String(((s as any).npcdesc ?? '') ?? '') + ' in the shower', goto: ['sex_ev_shower', 'shower_join1'] },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Look for ' + String(((s as any).npcdesc ?? '') ?? ''), goto: ['sex_ev_shower', 'morning_look1'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Relax on the bed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'relax_together'
  } },
      { label: 'Use the bathroom', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['boy_asleep'] !== 1  &&  ((st as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 1  &&  ((st as any).sex_ev ?? 0)?.['bathroom_check'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['bathroom_check'] = 1;
      // TODO-QSP: $npc_bedroom[$npcID]
      // TODO-QSP: dynamic text: You get up to pad your way towards <<$npcdesc>>''s bathroom and he calls from be...
      scene.text(`You get up to pad your way towards ${((st as any).npcdesc ?? '')}'s bathroom and he calls from behind you.`);
      scene.text('"Hey, where you going?"');
      if (((st as any).cum_loc ?? 0) > 0) {
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
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
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
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['bathroom_check'] = 1;
      qspGoto(st, 'sex_ev_after', 'bathroom_after');
    }
  } },
    ]);
  }
  if (((s as any).hour ?? 0) < 11  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWantBreakfast(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).hour ?? 0) < 11  &&  ((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
      scene.actions([
        { label: 'Make breakfast', goto: ['sex_ev_morning', 'pc_make_breakfast'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_leave', 'go_out_after');
    }
  }
  qspCall(s, 'sex_ev_pillow_talk2', 'forgot_bc_talk1');
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'Take a morning after pill', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      scene.text('You reach down to your purse and pull out the morning after pill Luda gave you, popping it from the packaging and swallowing it dry.');
    } else {
      scene.text('You reach down to your purse and pull out the morning after pill you keep inside, popping it from the packaging and swallowing it dry.');
    }
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  ((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Wake ' + String(((s as any).npcdesc ?? '') ?? '') + ' with a blowjob', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    // TODO-QSP: dynamic text: You slither under the covers and wrap your lips around <<$npcdesc>>''s already h...
    scene.text(`You slither under the covers and wrap your lips around ${((st as any).npcdesc ?? '')}'s already hard cock.`);
    qspCall(st, 'sex_ev_wakeup', 'bj_wake');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningMenu2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    // TODO-QSP: dynamic text: You are in <<$npcdesc>>''s room.
    scene.text(`You are in ${((s as any).npcdesc ?? '')}'s room.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
      // TODO-QSP: dynamic text: You are in <<$npcdesc>>''s hotel room.
      scene.text(`You are in ${((s as any).npcdesc ?? '')}'s hotel room.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_shower'] = 1;
  // TODO-QSP: $sex_ev['bath_room']
  if (((s as any).sex_ev ?? 0)?.['out_of_bed'] === 0) {
    scene.text('You pull yourself out of bed and pad your way over to the bathroom, yawning again along the way.');
  } else {
    scene.text('You pad your way over to the bathroom and climb into the shower.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn on the water', goto: ['sex_ev_morning', 'shower2'] },
  ]);
  scene.build();
}

function enterShower2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_shower'] = 1;
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['shampoo'] = ((s as any).mc_inventory['shampoo'] ?? 0) + (1);
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.text('You twist the faucet and hot water comes rushing out, pouring over you, soaking into your skin. Slowly over time, your sleepiness washes away and clarity comes back.');
  scene.text('Feeling sufficiently awake, you turn off the tap and step out of the shower.');
  // TODO-QSP: end
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
  scene.text(`"I need another shower because of you," you say, giving ${((s as any).npcdesc ?? '')} a look as you swagger your way to the bathroom.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Shower', handler: (st: GameState) => {
    scene.img('images/shared/home/bathroom/dush.mp4');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['shampoo'] = ((st as any).mc_inventory['shampoo'] ?? 0) + (1);
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You get into <<$npcdesc>>''s shower for the <i>second</i> time this morning, was...
    scene.text(`You get into ${((st as any).npcdesc ?? '')}'s shower for the <i>second</i> time this morning, washing the sex sweat from your body.`);
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
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['out_of_bed'] = 1;
  if (((s as any).sex_ev ?? 0)?.['morning_shower'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_shower'] = 3;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['towel'] = 1;
    scene.img('images/shared/home/bathroom/towel_wet.jpg');
    scene.text('You leave the bathroom wrapped in a towel.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['morning_shower'] === 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['towel'] = 0;
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('You leave the bathroom naked.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['morning_shower'] === 3) {
        // TODO-QSP: $sex_ev['bed_room']
        scene.text('Hair still wet from the shower, you consider what to do next.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHeadOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'gotta_go');
    } else {
      qspGoto(s, 'sex_ev_leave', 'dressing1');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
      qspCall(s, 'sex_ev_leave', 'sneak_out1');
    } else {
      qspCall(s, 'sex_ev_leave', 'leaving_dialogue');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDressImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['CloDress'] === 1) {
    scene.img('images/shared/romance/lovers/misc/bed_dress.jpg');
  } else {
    scene.img('images/pc/activities/misc/dress_1.mp4');
  }
  // TODO-QSP: end
  scene.build();
}

function enterEndMorning(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You finish <<$sex_ev[''dress_describe'']>>.
    scene.text(`You finish ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).sex_ev ?? 0)?.['sleepover'] === 1  &&  ((st as any).npc_latesleeper ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).sex_ev ?? 0)?.['boy_asleep'] !== 0  &&  ((st as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
      qspCall(st, 'sex_ev_leave', 'sneak_out1');
    } else {
      qspCall(st, 'sex_ev_after', 'after_sex_dressed');
    }
  } },
    { label: 'Talk while you dress', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', '');
  } },
  ]);
  scene.build();
}

function enterBoyBreakfastOffer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
    scene.actions([
      { label: 'Let me cook instead', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.text('"Please, allow me," you smile, moving to get out of bed. "It\'s the least I can do for letting me sleep over."');
    } else {
      scene.text('"Please, allow me," you smile. "It\'s the least I can do for letting me sleep over."');
    }
    scene.actions([
      { label: 'Make breakfast', goto: ['sex_ev_morning', 'pc_make_breakfast'] },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
    scene.actions([
      { label: 'Different kind of breakfast (sex)', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    scene.text('"Yeah," you say crawling over to him. "I could really use some <i>meat</i> right now."');
    scene.text('You slink down between his legs, wrapping your lips around his cock and slurp hard.');
    // TODO-QSP: dynamic text: "Nngh, fuck..." <<$npcdesc>> grunts, getting harder by the second. "Not what I h...
    scene.text(`"Nngh, fuck..." ${((st as any).npcdesc ?? '')} grunts, getting harder by the second. "Not what I had in mind but..." You cut him off as you plunge your lips back down his shaft.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['breakfast_finished'] = (-1);
    scene.actions([
      { label: 'No time', handler: (st: GameState) => {
    scene.text('"Sorry, I don\'t have time," you say. "I wish I could but I really need to get going."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Not hungry', handler: (st: GameState) => {
    scene.text('"I\'ll pass," you say. "I\'m not all that hungry right now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Don\'t eat breakfast', handler: (st: GameState) => {
    scene.text('"I\'ll pass," you say. "I don\'t really eat breakfast."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'On a diet', handler: (st: GameState) => {
    scene.text('"I\'m on a diet," you say ruefully. "Gotta keep the calories down."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Yes please (15 minutes)', handler: (st: GameState) => {
    scene.text('"That sounds nice," you smile.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_morning', 'wait_for_breakfast1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterWaitForBreakfast1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['find_boy'] = 1;
  // TODO-QSP: $sex_ev[] = 'coffee_make'
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['room_service_breakfast'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You wait patiently in bed as <<$npcdesc>> rings up the hotel staff and orders br...
    scene.text(`You wait patiently in bed as ${((s as any).npcdesc ?? '')} rings up the hotel staff and orders breakfast for two delivered to the room. Soon enough, there is a knock on the door with the announcement your meal has arrived and ${((s as any).npcdesc ?? '')} retrieves it after donning a bathrobe.`);
    scene.text('He smiles at you as he brings a tray back to the bed, laden with classic Russian breakfast items.');
    scene.text('"So, where do you want to start?"');
  } else {
    // TODO-QSP: $sex_ev['kitchen_room']
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] < 3) {
      // TODO-QSP: dynamic text: You wait patiently in bed while <<$npcdesc>> whips up a full breakfast with coff...
      scene.text(`You wait patiently in bed while ${((s as any).npcdesc ?? '')} whips up a full breakfast with coffee to drink and brings the tray back to you.`);
      scene.text('"What can I help you with first?" he asks.');
    } else {
      // TODO-QSP: dynamic text: You follow <<$npcdesc>> into the kitchen and wait patiently while he whips up a ...
      scene.text(`You follow ${((s as any).npcdesc ?? '')} into the kitchen and wait patiently while he whips up a full breakfast with coffee to drink, putting all the plates on his kitchen table.`);
      scene.text('"So," he smiles. "Where do you want to start?"');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastInBedMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBreakfastSearch(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['find_boy'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/shared/romance/misc/nude_walk1.mp4');
  // TODO-QSP: dynamic text: You climb out of bed and leave the bedroom, walking through the halls of <<$npcd...
  scene.text(`You climb out of bed and leave the bedroom, walking through the halls of ${((s as any).npcdesc ?? '')}'s apartment naked as you peek into various rooms searching for him.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['kitchen_room']
    scene.text('You follow the smell of food and find him in the kitchen cooking breakfast.');
    scene.text('"Hey," he smiles. "I just finished. Was going to bring it to you in bed. Saves me a trip I guess. Go ahead, dig in."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastInBedMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBreakfastInBed(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['b_i_b'] = 1;
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    // TODO-QSP: dynamic text: "Hey sleepyhead," <<$npcdesc>> says as you finish rubbing the sleep from your ey...
    scene.text(`"Hey sleepyhead," ${((s as any).npcdesc ?? '')} says as you finish rubbing the sleep from your eyes. "I just finished making breakfast."`);
  } else {
    // TODO-QSP: dynamic text: As you finish rubbing the sleep from your eyes <<$npcdesc>> comes in through the...
    scene.text(`As you finish rubbing the sleep from your eyes ${((s as any).npcdesc ?? '')} comes in through the doorway carrying a tray.`);
    scene.text('"Hey," he smiles. "I didn\'t want to wake you, so I thought I\'d make breakfast and bring it to you."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'How sweet', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"That\'s sweet of you," you smile back, genuinely a little touched that he would do this for you.');
    scene.text('"It\'s no big deal," he shrugs. "Anything I can help you with first?"');
    scene.text('He shows you the tray which is filled with quite a spread.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastInBedMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBreakfastImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['b_i_b'] === 1  ||  ((s as any).npc_apt_type ?? 0) < 3  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    scene.img('images/shared/romance/activities/apartment/breakfast/nude_bedroom1.jpg');
  } else {
    scene.img('images/shared/romance/activities/apartment/breakfast/nude_kitchen1.jpg');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakfastInBedMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Coffee', handler: (st: GameState) => {
    scene.actions([
      { label: 'Coffee first', handler: (st: GameState) => {
    scene.text('"Coffee first," you say. "Definitely the coffee first."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCoffeeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Just coffee (no food)', handler: (st: GameState) => {
    scene.text('"Coffee," you say. "Give me coffee."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCoffeeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Toast', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "That toast looks good," you smile and <<$npcdesc>> hands it over.
    scene.text(`"That toast looks good," you smile and ${((st as any).npcdesc ?? '')} hands it over.`);
    scene.actions([
      { label: 'Plain', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastImage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You grab the toast not bothering to put on any additional spreads or condiments and bite in. The crispy crust crunches under your teeth, the nice cooked but not burnt flavour fills your mouth.');
    scene.text('"Mmmm," you smile with a full mouth. "That\'s good toast."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Butter', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastImage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You grab the toast and spread a pat of butter across it before biting in. The crispy crust crunches under your teeth, the nice cooked but not burnt flavour fills your mouth, the butter providing a salty sweetness to it.');
    scene.text('"Mmmm," you smile with a full mouth. "That\'s good toast."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Jam', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastImage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You grab the toast and slather raspberry jam across it before biting in. The crispy crust crunches under your teeth, the nice cooked but not burnt flavour fills your mouth, the jam providing a sour sweetness to it.');
    scene.text('"Mmmm," you smile with a full mouth. "That\'s good toast."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Sour cream', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBreakfastImage(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('You grab the toast and slather sour cream across its surface before biting in. The crispy crust crunches under your teeth, the nice cooked but not burnt flavour fills your mouth, supplemented by the creaminess of your chosen condiment.');
    // TODO-QSP: dynamic text: "Isn''t sour cream normally for the pancakes?" <<$npcdesc>> asks amused.
    scene.text(`"Isn't sour cream normally for the pancakes?" ${((st as any).npcdesc ?? '')} asks amused.`);
    scene.text('"Isn\'t toast just a crispy pancake?" you shrug back, grinning at him with a full mouth.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Eggs', handler: (st: GameState) => {
    scene.text('"A bit of protein sounds good right now," you smile, reaching for the plate with fried eggs on it.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: <<$npcdesc>> snickers, giving you a dirty smirk, saying, "I got some protein for...
      scene.text(`${((st as any).npcdesc ?? '')} snickers, giving you a dirty smirk, saying, "I got some protein for you to swallow if you really want some."`);
      scene.actions([
        { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('You sigh deeply, rolling your eyes to the heavens as you ignore his vulgar remarks and take your first bite of egg. It\'s perfectly fried, the edges crispy but the yolk is runny and delicious.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Giggle', handler: (st: GameState) => {
    scene.text('You giggle at the dirty joke, struggling to fit the fork into your mouth as you take your first bite of egg. It\'s perfectly fried, the edges crispy but the yolk is runny and delicious.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Maybe later', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sex_after_breakfast'] = 1;
    scene.text('"Maybe after breakfast," you say, twisting your mouth in a smirk before taking your first bite of egg. It\'s perfectly fried, the edges crispy but the yolk is runny and delicious.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> provides you with a plate and you eagerly cut it up and stab it wit...
      scene.text(`${((st as any).npcdesc ?? '')} provides you with a plate and you eagerly cut it up and stab it with your fork to take your first bite of egg. It's perfectly fried, the edges crispy but the the yolk is runny and delicious.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Kolbasa', handler: (st: GameState) => {
    scene.text('"A bit of protein sounds good right now," you smile, reaching for the sandwiches, the slice of bread with cheese and kolbasa.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "If it''s protein you want, I got some for you..." <<$npcdesc>> snickers.
      scene.text(`"If it's protein you want, I got some for you..." ${((st as any).npcdesc ?? '')} snickers.`);
      scene.actions([
        { label: 'Roll your eyes', handler: (st: GameState) => {
    scene.text('You sigh deeply, rolling your eyes to the heavens as you ignore his vulgar euphemisms and bite into the sandwich. The bread is nice and soft, the cheese creamy, and the kolbasa salty and cheap but full of familiar comfort.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Giggle', handler: (st: GameState) => {
    scene.text('You giggle at the dirty joke, struggling to fit the fork into your mouth as you bite into the sandwich. The bread is nice and soft, the cheese creamy, and the kolbasa salty and cheap but full of familiar comfort.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Maybe later', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sex_after_breakfast'] = 1;
    scene.text('"Maybe after breakfast," you say, twisting your mouth in a smirk before biting into the sandwich. The bread is nice and soft, the cheese creamy, and the kolbasa salty and cheap but full of familiar comfort.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> provides you with a plate and you eagerly bite into the sandwich. T...
      scene.text(`${((st as any).npcdesc ?? '')} provides you with a plate and you eagerly bite into the sandwich. The bread is nice and soft, the cheese creamy, and the kolbasa salty and cheap but full of familiar comfort.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Pancakes', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Those <i>blini</i> look good," you smile. <<$npcdesc>> hands you a plate stacke...
    scene.text(`"Those <i>blini</i> look good," you smile. ${((st as any).npcdesc ?? '')} hands you a plate stacked with millimeter thin pancakes and you spread raspberry jam and sour cream across them before folding them up for consumption. You take your first bite and close your eyes, savouring the sweet, sour, creamy deliciousness before opening them to grin at ${((st as any).npcdesc ?? '')}.`);
    scene.text('"Taste good too," you say with your mouth full.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWantBreakfast(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['breakfast_finished'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room'  &&  ((s as any).sex_ev ?? 0)?.['late_for_school'] === 0) {
    scene.actions([
      { label: 'Breakfast?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Offer to cook', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add');
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
    scene.text('"Hungry?" you ask. "How about I make us some breakfast?"');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "You don''t have to do that," <<$npcdesc>> says.
      scene.text(`"You don't have to do that," ${((st as any).npcdesc ?? '')} says.`);
      scene.text('"I want to," you smile back and haul yourself out of bed.');
    } else {
      // TODO-QSP: dynamic text: "That''d be great," <<$npcdesc>> smiles. You smile back and haul yourself out of...
      scene.text(`"That'd be great," ${((st as any).npcdesc ?? '')} smiles. You smile back and haul yourself out of bed.`);
    }
    scene.actions([
      { label: 'Make breakfast', goto: ['sex_ev_morning', 'pc_make_breakfast'] },
    ]);
  } },
      { label: 'You want coffee', handler: (st: GameState) => {
    scene.actions([
      { label: 'Got any coffee?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Any chance I could get some coffee?" you ask <<$npcdesc>>.
    scene.text(`"Any chance I could get some coffee?" you ask ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantCoffeeResponse(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Would kill for some coffee', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I would <i>kill</i> for a cup of coffee right now," you say, looking suggestive...
    scene.text(`"I would <i>kill</i> for a cup of coffee right now," you say, looking suggestively at ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantCoffeeResponse(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Would suck cock for some coffee', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I would suck your cock for a cup of coffee right now," you say, smirking sugges...
    scene.text(`"I would suck your cock for a cup of coffee right now," you say, smirking suggestively at ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantCoffeeResponse(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWantCoffeeResponse(s: GameState, scene: SceneBuilder): void {
  scene.text('He glances over at the clock.');
  if (((s as any).npc_end_free_time ?? 0) <= ((s as any).hour ?? 0) + 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_late_work'] = 1;
    // TODO-QSP: dynamic text: "I don''t have time," <<$npcdesc>> says, shaking his head. "I gotta get to work....
    scene.text(`"I don't have time," ${((s as any).npcdesc ?? '')} says, shaking his head. "I gotta get to work."`);
    scene.text('You sigh in disappointment.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      // TODO-QSP: dynamic text: "Sure, I wouldn''t mind some coffee," <<$npcdesc>> says and gets up to make some...
      scene.text(`"Sure, I wouldn't mind some coffee," ${((s as any).npcdesc ?? '')} says and gets up to make some.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNpcCoffeMake(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "I''ve got some time," <<$npcdesc>> says. "How about breakfast instead?"
      scene.text(`"I've got some time," ${((s as any).npcdesc ?? '')} says. "How about breakfast instead?"`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyBreakfastOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcMakeBreakfast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    // TODO-QSP: dynamic text: You head over to <<$npcdesc>>''s kitchen area and look through his fridge. Openi...
    scene.text(`You head over to ${((s as any).npcdesc ?? '')}'s kitchen area and look through his fridge. Opening it, you take a look inside, mulling over what you can make with what he's got...`);
  } else {
    // TODO-QSP: dynamic text: You head over to the kitchen and look through <<$npcdesc>> fridge. Opening it, y...
    scene.text(`You head over to the kitchen and look through ${((s as any).npcdesc ?? '')} fridge. Opening it, you take a look inside, mulling over what you can make with what he's got...`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterPcMakeBreakfastChoices(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['out_of_bed'] = 1;
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) < 0) {
    scene.actions([
      { label: 'Coffee', handler: (st: GameState) => {
    scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
    scene.text('He\'s got a coffee pot.');
    scene.actions([
      { label: 'Nah', handler: (st: GameState) => {
    scene.text('A little too basic. Maybe not.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Yes (2 minutes)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_time'] = ((st as any).sex_ev['cooking_time'] ?? 0) + (2);
    // TODO-QSP: $sex_ev[] = 'coffee_make'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_total'] = ((st as any).sex_ev['cooking_total'] ?? 0) + (1);
    scene.text('It\'s as simple as throwing it in a toaster. Might as well.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('toast_make') : -1) < 0) {
    scene.actions([
      { label: 'Toast', handler: (st: GameState) => {
    scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
    scene.text('He\'s got bread. You could make toast?');
    scene.actions([
      { label: 'Nah', handler: (st: GameState) => {
    scene.text('A little too basic. Maybe not.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Yes (2 minutes)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_time'] = ((st as any).sex_ev['cooking_time'] ?? 0) + (2);
    // TODO-QSP: $sex_ev[] = 'toast_make'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_total'] = ((st as any).sex_ev['cooking_total'] ?? 0) + (1);
    scene.text('It\'s as simple as throwing it in a toaster. Might as well.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('eggs_make') : -1) < 0) {
    scene.actions([
      { label: 'Fried eggs', handler: (st: GameState) => {
    scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
    scene.text('He\'s got eggs. Fried eggs?');
    scene.actions([
      { label: 'Nah', handler: (st: GameState) => {
    scene.text('Not really in the mood. Maybe skip the eggs.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Yes (5 minutes)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_time'] = ((st as any).sex_ev['cooking_time'] ?? 0) + (5);
    // TODO-QSP: $sex_ev[] = 'eggs_make'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_total'] = ((st as any).sex_ev['cooking_total'] ?? 0) + (1);
    scene.text('Eggs are basic. Easy as throwing them into a pan. You\'ll do it.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('kolbasa_make') : -1) < 0) {
    scene.actions([
      { label: 'Kolbasa', handler: (st: GameState) => {
    scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
    scene.text('He\'s got some kolbasa sausage.');
    scene.actions([
      { label: 'Nah', handler: (st: GameState) => {
    scene.text('A little simple. A little boring.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Yes (10 minutes)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_time'] = ((st as any).sex_ev['cooking_time'] ?? 0) + (10);
    // TODO-QSP: $sex_ev[] = 'kolbasa_make'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_total'] = ((st as any).sex_ev['cooking_total'] ?? 0) + (1);
    scene.text('It\'s quick and simple. Might as well.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('pancakes_make') : -1) < 0) {
    scene.actions([
      { label: 'Pancakes', handler: (st: GameState) => {
    scene.img('images/pc/activities/cooking/nude_fridge1.jpg');
    scene.text('Flour? Eggs? Milk? Butter That\'s everything you need to whip up some pancakes.');
    scene.actions([
      { label: 'Nah', handler: (st: GameState) => {
    scene.text('Too much work. Better do something else.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Yes (15 minutes)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_time'] = ((st as any).sex_ev['cooking_time'] ?? 0) + (15);
    // TODO-QSP: $sex_ev[] = 'pancakes_make'
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cooking_total'] = ((st as any).sex_ev['cooking_total'] ?? 0) + (1);
    scene.text('Who doesn\'t love pancakes in the morning? You <i>have</i> to make them!');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcMakeBreakfastChoices(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start cooking', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['cooking_total'] === 0) {
      // TODO-QSP: msg'You haven''t chosen anything to cook!'
    } else {
      qspGoto(st, 'sex_ev_morning', 'pc_make_breakfast_cooking');
    }
  } },
  ]);
  scene.build();
}

function enterPcMakeBreakfastCooking(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (((s as any).sex_ev ?? 0)?.['cooking_time']);
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['cooking_total'] === 1) {
    if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
      scene.img('images/pc/activities/drinking/nude_coffee2.jpg');
      scene.text('You put the coffee into the machine and wait, drumming your fingers on the counter until the dark liquid is brewed.');
    } else {
      if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('toast_make') : -1) >= 0) {
        scene.img('images/pc/activities/cooking/nude_misc1.jpg');
        // TODO-QSP: dynamic text: You grab a couple slices of bread and toss them in the toaster. While the bread ...
        scene.text(`You grab a couple slices of bread and toss them in the toaster. While the bread browns, you rifle through ${((s as any).npcdesc ?? '')}'s fridge and pantry, pulling out plates and butter and raspberry jam to spread.`);
      } else {
        if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('eggs_make') : -1) >= 0) {
          scene.img(`images/pc/activities/cooking/nude_stove${(Math.floor(Math.random() * 3) + 1)}.jpg`);
          scene.text('You crack eggs into the pan, sending sputters and sizzles the moment it makes contact with the hot metal. A couple minutes later, they\'re plated and ready to eat.');
        } else {
          if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('kolbasa_make') : -1) >= 0) {
            scene.img('images/pc/activities/cooking/nude_misc2.jpg');
            scene.text('You set out some pieces of bread and take a knife to the kolbasa, cutting some decent slices');
          } else {
            if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('pancakes_make') : -1) >= 0) {
              scene.img('images/pc/activities/cooking/nude_pancakes1.jpg');
              scene.text('You start mixing batter while the pan heats up. Once hot, you spread thin layers across its surface, flipping to the other side once browned. After a short while, you have a nice stack of perfectly thin pancakes with crispy edges, taking one last stop at the fridge to pull out some butter, raspberry jam, and of course, sour cream.');
            }
          }
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['cooking_total'] === 5) {
      if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('pancakes_make') : -1) >= 0) {
        scene.img('images/pc/activities/cooking/nude_pancakes1.jpg');
      } else {
        scene.img('images/pc/activities/cooking/nude_misc1.jpg');
      }
      scene.text('With a lot to do, you start quickly, spending the next half hour or so preparing your bonanza of breakfast goodies.');
    } else {
      if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('pancakes_make') : -1) >= 0) {
        scene.img('images/pc/activities/cooking/nude_pancakes1.jpg');
      } else {
        scene.img(`images/pc/activities/cooking/nude_stove${(Math.floor(Math.random() * 3) + 1)}.jpg`);
      }
      scene.text('You get to work preparing all of the things you planned for breakfast and a short while later, you have a nice but simple variety of things to eat.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_morning', 'pc_make_breakfast_done'] },
  ]);
  scene.build();
}

function enterPcMakeBreakfastDone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['cooking_total'] === 1  &&  (Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
      if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> begins to stir in bed, blearily blinking at you.
        scene.text(`${((s as any).npcdesc ?? '')} begins to stir in bed, blearily blinking at you.`);
        scene.text('"Hey sleepyhead," you smile, turning to face him with two steaming mugs. "I made coffee."');
      } else {
        // TODO-QSP: dynamic text: "Coffee''s ready," you say, turning around to walk two steaming mugs back to <<$...
        scene.text(`"Coffee's ready," you say, turning around to walk two steaming mugs back to ${((s as any).npcdesc ?? '')}.`);
      }
      scene.actions([
        { label: 'Drink your coffee', goto: ['sex_ev_morning', 'coffee_together'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  ((s as any).sex_ev ?? 0)?.['wake_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> begins to stir in bed, blearily blinking at you.
        scene.text(`${((s as any).npcdesc ?? '')} begins to stir in bed, blearily blinking at you.`);
        scene.text('"Hey sleepyhead," you say, turning to smile at him with plates in each hand. "I made breakfast."');
      } else {
        // TODO-QSP: dynamic text: "Food''s done," you tell <<$npcdesc>>, carefully carrying a few plates over to h...
        scene.text(`"Food's done," you tell ${((s as any).npcdesc ?? '')}, carefully carrying a few plates over to his table.`);
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEatBreakfast1(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    // TODO-QSP: $sex_ev['kitchen_room']
    if (((s as any).sex_ev ?? 0)?.['cooking_total'] === 1  &&  (Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
      if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wake_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes in right as you''re pouring it out, letting out a mighty yawn...
        scene.text(`${((s as any).npcdesc ?? '')} comes in right as you're pouring it out, letting out a mighty yawn.`);
        scene.text('"Hey sleepyhead," you smile. "I made coffee."');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes in right as you''re pouring it out.
        scene.text(`${((s as any).npcdesc ?? '')} comes in right as you're pouring it out.`);
        scene.text('"Hey. Just finished brewing," you smile, handing him a steaming mug.');
      }
      scene.actions([
        { label: 'Drink your coffee', goto: ['sex_ev_morning', 'coffee_together'] },
      ]);
    } else {
      if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes in right as you''re pouring it out, letting out a mighty yawn...
        scene.text(`${((s as any).npcdesc ?? '')} comes in right as you're pouring it out, letting out a mighty yawn.`);
        scene.text('"Hey sleepyhead," you smile. "I made breakfast."');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> comes in right as you start setting the table.
        scene.text(`${((s as any).npcdesc ?? '')} comes in right as you start setting the table.`);
        scene.text('"Hey," you smile at him. "Just finished up. Help yourself."');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEatBreakfast1(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcCoffeMake(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cooking_total'] = 1;
  // TODO-QSP: $sex_ev[] = 'coffee_make'
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You wait patiently on the bed as <<$npcdesc>> turns on the kettle provided in th...
    scene.text(`You wait patiently on the bed as ${((s as any).npcdesc ?? '')} turns on the kettle provided in the hotel room. He dumps in some packets of instant coffee into the two mugs and waits for it to come to a boil before pouring the steaming water in.`);
  } else {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('You wait patiently on the bed while he brews some coffee in the little kitchenette in the corner of his room before bringing back two steaming mugs.');
    } else {
      // TODO-QSP: $sex_ev['kitchen_room']
      // TODO-QSP: dynamic text: You follow <<$npcdesc>> to his kitchen where he turns on the kettle and wait pat...
      scene.text(`You follow ${((s as any).npcdesc ?? '')} to his kitchen where he turns on the kettle and wait patiently for it to come to a boil to brew some coffee into two steaming mugs.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCoffeeMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCoffeeMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "How do you take your coffee?" <<$npcdesc>> asks.
  scene.text(`"How do you take your coffee?" ${((s as any).npcdesc ?? '')} asks.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Black', handler: (st: GameState) => {
    scene.actions([
      { label: 'Coffee snob', handler: (st: GameState) => {
    scene.text('"Black obviously," you sniff as he hands a mug to you. "Milk and sugar is a waste of good coffee."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '... like my men (joke)', handler: (st: GameState) => {
    scene.text('"Black," you say as he hands you the mug. "Like my men," you add, smirking as you take a sip.');
    if (((st as any).npc_fav_date ?? 0)?.[String((st as any).npcID ?? 0)] === 'movie_date') {
      scene.text('"I love that movie," he chuckles.');
      scene.actions([
        { label: 'What movie?', handler: (st: GameState) => {
    scene.text('"Huh?" You furrow your brow in confusion. "Movie? What movie?"');
    // TODO-QSP: dynamic text: "Airplane?" <<$npcdesc>> asks, looking equally confused. "The movie that joke is...
    scene.text(`"Airplane?" ${((st as any).npcdesc ?? '')} asks, looking equally confused. "The movie that joke is from?"`);
    scene.text('"Oh. I thought it was just a meme," you blink.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'He\'s seen it?', handler: (st: GameState) => {
    scene.text('"You\'ve seen Airplane?" you ask excitedly.');
    scene.text('"Of course! It\'s such a funny movie! Who hasn\'t seen it?"');
    scene.text('"A lot of people my age haven\'t. Kids these days, right?" you grin.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Knew he\'d like that reference', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"I thought you\'d like that reference," you say, grinning into your mug of coffee. "You\'re such a nerd."');
    scene.text('"It\'s a funny movie," he grins back. "What can I say?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    { label: 'With sugar', handler: (st: GameState) => {
    scene.actions([
      { label: 'Please', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sugar please," you smile and <<$npcdesc>> stirs some into a mug for you before ...
    scene.text(`"Sugar please," you smile and ${((st as any).npcdesc ?? '')} stirs some into a mug for you before handing it over. "Thanks."`);
    scene.text('"No problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Like it sweet', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "With lots of sugar. I like it sweet," you say and <<$npcdesc>> stirs some into ...
    scene.text(`"With lots of sugar. I like it sweet," you say and ${((st as any).npcdesc ?? '')} stirs some into a mug for you. You can't help but smile as he hands it to you and you take your first sip.`);
    scene.text('"No problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: '"Sweet like me"', handler: (st: GameState) => {
    scene.text('"With sugar," you smile. "I like it sweet. Just like me."');
    scene.text('You give him a cute wink as he hands the mug over to you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'With milk', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Just milk please," you smile and <<$npcdesc>> stirs some into a mug for you bef...
    scene.text(`"Just milk please," you smile and ${((st as any).npcdesc ?? '')} stirs some into a mug for you before handing it over. "Thanks."`);
    scene.text('"No problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Milk and sugar', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Milk and sugar please," you smile and <<$npcdesc>> stirs some into a mug for yo...
    scene.text(`"Milk and sugar please," you smile and ${((st as any).npcdesc ?? '')} stirs some into a mug for you obligingly before handing it over. "Thanks."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterEatBreakfast1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCoffeeTogether(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beverage', 'coffee_stats');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['breakfast_finished'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: dynamic text: The two of you settle down at <<$npcdesc>>''s table and sip away at your coffee,...
  scene.text(`The two of you settle down at ${((s as any).npcdesc ?? '')}'s table and sip away at your coffee, casually chit-chatting with each other until there's nothing but dregs left.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash your mugs', goto: ['sex_ev_morning', 'breakfast_dishes'] },
  ]);
  scene.build();
}

function enterEatBreakfast1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cooking_total'] === 1  &&  (Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
    qspGoto(s, 'sex_ev_morning', 'coffee_together');
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['breakfast_finished'] = 1;
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_asleep'] = 0;
  }
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 1  ||  ((s as any).sex_ev ?? 0)?.['room_service_breakfast'] === 1) {
    if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
      scene.actions([
        { label: 'Just drink coffee', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Eat a small portion', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
    { label: 'Eat a medium portion', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
    { label: 'Eat a lot', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
  ]);
  scene.build();
}

function enterEatBreakfast2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['light_breakfast'] = 1;
  qspCall(s, 'food', 'small_meal_stats');
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
    qspCall(s, 'beverage', 'coffee_stats');
  }
  qspCall(s, 'stat', '');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s bed while he pulls up a chair, nibbling on sm...
    scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s bed while he pulls up a chair, nibbling on small bits of food.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1  &&  ((s as any).sex_ev ?? 0)?.['find_boy'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: You sit up in <<$npcdesc>>''s bed and start taking small bites of food as <<$npc...
      scene.text(`You sit up in ${((s as any).npcdesc ?? '')}'s bed and start taking small bites of food as ${((s as any).npcdesc ?? '')} while he pulls up a chair.`);
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
      // TODO-QSP: dynamic text: The two of you settle down at <<$npcdesc>>''s table. You nibble at small bits of...
      scene.text(`The two of you settle down at ${((s as any).npcdesc ?? '')}'s table. You nibble at small bits of food while he digs in.`);
    }
  }
  scene.text('"Not hungry?" he asks curiously.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Not really', handler: (st: GameState) => {
    scene.text('"Not really," you shake your head. "Mornings I guess. But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Keep it light', handler: (st: GameState) => {
    scene.text('"I just like to keep my portions light," you smile. "But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Not into breakfast', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1) {
      scene.text('"I\'m not much into breakfast," you admit. "But I appreciate it. Don\'t hold back because of me."');
      scene.text('He nods but seems to be a little disappointed despite what you said.');
    } else {
      scene.text('"I\'m not much into breakfast," you admit. "But this is for you more than me. Enjoy it."');
      scene.text('He smiles, continuing to help himself as you casually chit chat over the food.');
    }
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Dieting', handler: (st: GameState) => {
    scene.text('"I\'m on a diet so I\'m trying not to eat much," you reply. "But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEatBreakfast3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['medium_breakfast'] = 1;
  qspCall(s, 'food', 'medium_meal_stats');
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
    qspCall(s, 'beverage', 'coffee_stats');
  }
  qspCall(s, 'stat', '');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s bed while he pulls up a chair and you both di...
    scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s bed while he pulls up a chair and you both dig in, casually chatting away until you've cleared your plates.`);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: The two of you settle down at <<$npcdesc>>''s table and dig in, casually chattin...
    scene.text(`The two of you settle down at ${((s as any).npcdesc ?? '')}'s table and dig in, casually chatting away until you've cleared your plates.`);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
  ]);
  scene.build();
}

function enterEatBreakfast4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['big_breakfast'] = 1;
  qspCall(s, 'food', 'large_meal_stats');
  if ((Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0) {
    qspCall(s, 'beverage', 'coffee_stats');
  }
  qspCall(s, 'stat', '');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s bed while he pulls up a chair and you both di...
    scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s bed while he pulls up a chair and you both dig in, you especially, happily stuffing your face as the two of you casually chat away until you've cleared your plates.`);
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: The two of you settle down at <<$npcdesc>>''s table and dig in, you especially, ...
    scene.text(`The two of you settle down at ${((s as any).npcdesc ?? '')}'s table and dig in, you especially, happily stuffing your face as the two of you casually chat away until you've cleared your plates.`);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
  ]);
  scene.build();
}

function enterEatBreakfastCoffee(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['coffee_only'] = 1;
  qspCall(s, 'beverage', 'coffee_stats');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1  &&  ((s as any).sex_ev ?? 0)?.['find_boy'] === 0) {
      // TODO-QSP: dynamic text: You sit up in <<$npcdesc>>''s bed while he pulls up a chair, sipping on your cof...
      scene.text(`You sit up in ${((s as any).npcdesc ?? '')}'s bed while he pulls up a chair, sipping on your coffee as he digs in.`);
    } else {
      // TODO-QSP: dynamic text: You settle down on <<$npcdesc>>''s bed while he pulls up a chair, sipping on you...
      scene.text(`You settle down on ${((s as any).npcdesc ?? '')}'s bed while he pulls up a chair, sipping on your coffee as he digs in.`);
    }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBreakfastImage(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: The two of you settle down at <<$npcdesc>>''s table. You sip at your coffee whil...
    scene.text(`The two of you settle down at ${((s as any).npcdesc ?? '')}'s table. You sip at your coffee while he digs in.`);
  }
  scene.text('"Not going to eat?" he asks curiously.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Coffee\'s all I need', handler: (st: GameState) => {
    scene.text('"Coffee\'s all I need," you grin. "But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Not that hungry', handler: (st: GameState) => {
    scene.text('"I\'m just not very hungry right now," you reply. "But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Not into breakfast', handler: (st: GameState) => {
    scene.text('"I\'m not much into breakfast," you admit. "But this is for you more than me. Enjoy it."');
    scene.text('He smiles, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Dieting', handler: (st: GameState) => {
    scene.text('"I\'m on a diet," you reply. "Caffeine is an appetite suppressant. But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
    { label: 'Can\'t eat in the morning', handler: (st: GameState) => {
    scene.text('"My stomach can\'t really handle food in the morning," you reply. "I mostly just stick to coffee. But you go ahead. Don\'t hold back on account of me."');
    scene.text('He nods, continuing to help himself as you casually chit chat over the food.');
    scene.actions([
      { label: 'Clear your dishes', goto: ['sex_ev_morning', 'breakfast_dishes'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBreakfastDishes(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_asleep'] = 0;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['breakfast_finished'] = 1;
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['coffee_only'] === 1) {
      scene.text('"Just what I needed," you sigh, setting your mug aside on the room service tray.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['light_breakfast'] === 1  ||  ((s as any).sex_ev ?? 0)?.['medium_breakfast'] === 1) {
        scene.text('"That was nice," you hum happily, setting your dishes aside onto the room service tray.');
        if (((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0))  ||  ((s as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
          scene.text('"I can think of something nicer," he says, stepping up behind you, hands caressing your hips and something hard poking you in the back.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterBreakfastSex(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 0) {
            scene.text('"Thanks for breakfast," he smiles back, piling up the rest.');
          } else {
            scene.text('"Glad you enjoyed it," he smiles back, piling up the rest.');
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['big_breakfast'] === 1) {
          scene.text('"I\'m stuffed," you sigh, setting your dishes aside onto the room service tray.');
          if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - ((5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) / 2)  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
            scene.text('"Not yet you\'re not," he says, stepping up behind you, hands caressing your hips and something hard poking you in the back.');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterBreakfastSex(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 0) {
              scene.text('"Thanks for breakfast," he smiles back, piling up the rest.');
            } else {
              scene.text('"Glad you enjoyed it," he smiles back, piling up the rest.');
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  } else {
    scene.img('images/pc/activities/cooking/nude_misc3.jpg');
    if ((((s as any).sex_ev ?? 0)?.['cooking_total'] === 1  &&  (Array.isArray((s as any).sex_ev) ? ((s as any).sex_ev as any[]).indexOf('coffee_make') : -1) >= 0)  ||  ((s as any).sex_ev ?? 0)?.['coffee_only'] === 1) {
      scene.text('"Just what I needed," you sigh, taking your used mug over to the sink.');
      if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - ((5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) / 2)  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
        scene.text('"I could use something a little stronger than coffee," he says, stepping up behind you. His hands caress your hips and you can feel something hard hovering between your cheeks.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterBreakfastSex(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 1) {
          scene.text('"Thanks for breakfast," he smiles, piling up the rest.');
        } else {
          scene.text('"Me too," he agrees, tilting his head back to drain the last drops of his cup.');
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['light_breakfast'] === 1  ||  ((s as any).sex_ev ?? 0)?.['medium_breakfast'] === 1) {
        scene.text('"That was nice," you hum happily, taking your dirty dishes over to the kitchen area.');
        if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - ((5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) / 2)  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
          scene.text('"I can think of something nicer," he says, stepping up behind you, hands caressing your hips and something hard poking you in the back.');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterBreakfastSex(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 0) {
            scene.text('"Thanks for breakfast," he smiles back, piling up the rest.');
          } else {
            scene.text('"Glad you enjoyed it," he smiles back, piling up the rest.');
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['big_breakfast'] === 1) {
          scene.text('"I\'m stuffed," you sigh, taking your dirty dishes over to the kitchen area.');
          if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - ((5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) / 2)  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
            scene.text('"Not yet you\'re not," he says, stepping up behind you, hands caressing your hips and something hard poking you in the back.');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterBreakfastSex(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['cooking_total'] > 0) {
              scene.text('"Thanks for breakfast," he smiles back, piling up the rest.');
            } else {
              scene.text('"Glad you enjoyed it," he smiles back, piling up the rest.');
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningMenu1(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterBreakfastSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cooking_total'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['coffee_make'] !== 1) {
    scene.actions([
      { label: 'Not after eating', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    }
    // TODO-QSP: dynamic text: "Ugh!" you groan, giving <<$npcdesc>> a look of disgust and forcibly pulling his...
    scene.text(`"Ugh!" you groan, giving ${((st as any).npcdesc ?? '')} a look of disgust and forcibly pulling his hands off your body. "Right when I feel all gross after eating? How can you even <i>think</i> about that right now?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"Down boy"', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sex_after_breakfast'] === 1) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    }
    scene.actions([
      { label: 'Don\'t have time', handler: (st: GameState) => {
    scene.text('"Tsk! Down boy!" you chide, rolling your eyes and taking his hands to forcibly pull them off your body. "I don\'t have time for this."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Not in the mood', handler: (st: GameState) => {
    scene.text('"Tsk! Down boy!" you chide, rolling your eyes and taking his hands to forcibly pull them off your body. "I had fun earlier but I\'m not in the mood right now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningMenu1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    { label: 'Giggle', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    if (((st as any).sex_ev ?? 0)?.['wake_fuck'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (5);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (5);
    }
    if (((st as any).sex_ev ?? 0)?.['wake_fuck'] === 1  ||  ((st as any).sex_ev ?? 0)?.['morning_fuck'] === 1) {
      scene.actions([
        { label: 'Again?!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Again?!" you giggle as <<$npcdesc>> begins groping your breast and fingering yo...
    scene.text(`"Again?!" you giggle as ${((st as any).npcdesc ?? '')} begins groping your breast and fingering your clit. "You're insatiable!"`);
    // TODO-QSP: dynamic text: But you don''t protest and let <<$npcdesc>> drag you back to the bed to do what ...
    scene.text(`But you don't protest and let ${((st as any).npcdesc ?? '')} drag you back to the bed to do what he wants to you.`);
    qspCall(st, 'sex_ev_foreplay', 'bed_start');
  } },
      ]);
    }
    scene.actions([
      { label: 'You\'re gonna make me late', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You''re gonna make me late," you giggle uncontrollably as <<$npcdesc>> gets fri...
    scene.text(`"You're gonna make me late," you giggle uncontrollably as ${((st as any).npcdesc ?? '')} gets friskier, dragging you back to bed to do what he wants to you.`);
    qspCall(st, 'sex_ev_foreplay', 'bed_start');
  } },
      { label: 'Let him do what he wants', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You giggle uncontrollably, giving <<$npcdesc>> the non-verbal go ahead and you l...
    scene.text(`You giggle uncontrollably, giving ${((st as any).npcdesc ?? '')} the non-verbal go ahead and you let him drag you back to the bed to do what he wants to you.`);
    qspCall(st, 'sex_ev_foreplay', 'bed_start');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGiveLift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'city') {
    (s as any).minut = ((s as any).minut ?? 0) + 45;
  } else {
    if (((s as any).region ?? 0) === 'pav') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['give_lift'] === 2) {
    scene.text('<center><b>Outside School</b></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['drop_off_image'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/school/building/schoolwinter.jpg"></center>';
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['drop_off_image'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/school/building/gschool.jpg"></center>';
    }
    // TODO-QSP: $sex_ev['drop_off_image']
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives you the short distance to school, stopping right outside the...
      scene.text(`${((s as any).npcdesc ?? '')} drives you the short distance to school, stopping right outside the gates. You probably could have just walked, but it's nice to spend a little more time with him.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives you from the city back to Pavlovsk, stopping right outside t...
      scene.text(`${((s as any).npcdesc ?? '')} drives you from the city back to Pavlovsk, stopping right outside the school gates.`);
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
          }
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Thanks for the ride', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'ending');
    // TODO-QSP: $sex_ev['drop_off_image']
    scene.text('"Thanks for the ride," you say, giving him a quick smile and open up the passenger door.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClassmatesSee(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Kiss him goodbye (cheek)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'ending');
    // TODO-QSP: $sex_ev['drop_off_image']
    scene.text('"Thanks for the ride," you say, leaning over and giving him a quick peck on the cheek before opening up the passenger door.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClassmatesSee(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Kiss him goodbye (mouth)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'ending');
    // TODO-QSP: $sex_ev['drop_off_image']
    scene.text('"Thanks for the ride," you say, leaning over and giving him a quick peck on the lips before opening up the passenger door.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClassmatesSee(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Kiss him goodbye (tongue)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['drop_off_image']
    qspCall(st, 'arousal', 'kiss', (-5));
    qspCall(st, 'sex_ev_after', 'ending');
    scene.text('"Thanks for the ride," you say. You lean over and give him a deep kiss, forcing your tongue past his lips and enjoying the feeling of his tongue pushing past into yours. You hold the kiss for a good ten seconds before pulling away, saliva trailing with you. You wipe your mouth with a lusty grin before opening the passenger door.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClassmatesSee(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Continue', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    } else {
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      } else {
        if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
        } else {
          if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 4) {
          }
        }
      }
    }
    qspGoto(s, 'pav_complex', 'start');
  }
  // TODO-QSP: end
  scene.build();
}

function enterClassmatesSee(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 6  &&  (Math.floor(Math.random() * 20) + 1) > (Math.floor(Math.random() * 4) + 3)) {
    // TODO-QSP: dynamic text: You step out of the car, looking around and don''t see anybody who would recogni...
    scene.text(`You step out of the car, looking around and don't see anybody who would recognize you. ${((s as any).npcdesc ?? '')} gives you a wave and you wave back as he drives off.`);
  } else {
    scene.text('As you exit the vehicle, some of your classmates are walking by and they glance at you stepping out of a stranger\'s car. Some of them immediately look away. Others wear a look of disgust. Judging by the reactions, they must have clocked you.');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a small wave and drives off.
    scene.text(`${((s as any).npcdesc ?? '')} gives you a small wave and drives off.`);
  }
  // TODO-QSP: end
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
    case 'head_out':
      enterHeadOut(s, scene);
      break;
    case 'dress_image':
      enterDressImage(s, scene);
      break;
    case 'end_morning':
      enterEndMorning(s, scene);
      break;
    case 'boy_breakfast_offer':
      enterBoyBreakfastOffer(s, scene);
      break;
    case 'wait_for_breakfast1':
      enterWaitForBreakfast1(s, scene);
      break;
    case 'breakfast_search':
      enterBreakfastSearch(s, scene);
      break;
    case 'breakfast_in_bed':
      enterBreakfastInBed(s, scene);
      break;
    case 'breakfast_image':
      enterBreakfastImage(s, scene);
      break;
    case 'breakfast_in_bed_menu':
      enterBreakfastInBedMenu(s, scene);
      break;
    case 'want_breakfast':
      enterWantBreakfast(s, scene);
      break;
    case 'want_coffee_response':
      enterWantCoffeeResponse(s, scene);
      break;
    case 'pc_make_breakfast':
      enterPcMakeBreakfast(s, scene);
      break;
    case 'pc_make_breakfast_choices':
      enterPcMakeBreakfastChoices(s, scene);
      break;
    case 'pc_make_breakfast_cooking':
      enterPcMakeBreakfastCooking(s, scene);
      break;
    case 'pc_make_breakfast_done':
      enterPcMakeBreakfastDone(s, scene);
      break;
    case 'npc_coffe_make':
      enterNpcCoffeMake(s, scene);
      break;
    case 'coffee_menu':
      enterCoffeeMenu(s, scene);
      break;
    case 'coffee_together':
      enterCoffeeTogether(s, scene);
      break;
    case 'eat_breakfast1':
      enterEatBreakfast1(s, scene);
      break;
    case 'eat_breakfast2':
      enterEatBreakfast2(s, scene);
      break;
    case 'eat_breakfast3':
      enterEatBreakfast3(s, scene);
      break;
    case 'eat_breakfast4':
      enterEatBreakfast4(s, scene);
      break;
    case 'eat_breakfast_coffee':
      enterEatBreakfastCoffee(s, scene);
      break;
    case 'breakfast_dishes':
      enterBreakfastDishes(s, scene);
      break;
    case 'after_breakfast_sex':
      enterAfterBreakfastSex(s, scene);
      break;
    case 'give_lift':
      enterGiveLift(s, scene);
      break;
    case 'classmates_see':
      enterClassmatesSee(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_morning: LocationDef = {
  name: 'sex_ev_morning',
  title: 'Outside School',
  region: 'other',
  enter: enter,
};
