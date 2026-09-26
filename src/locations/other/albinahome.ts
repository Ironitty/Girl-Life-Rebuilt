import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDoorBell(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'schedule', 'A23');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinahome.jpg');
  if (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) <= 9) {
    scene.text('There are better times for a house call than right now!');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You walk up the long driveway to the front door of Albina\'s house and ring the doorbell.');
    if (((s as any).locat ?? 0)?.['A23'] === 35) {
      scene.text('You wait for a few minutes, but not even the maid comes to answer the door. It seems like nobody is home.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      if ((((s as any).week ?? 0) === 6  ||  ((s as any).week ?? 0) === 7)  &&  ((s as any).locat ?? 0)?.['A23'] === 1  &&  ((s as any).AlbinaQW ?? 0)?.['meet_zoya'] === 0) {
        qspGoto(s, 'albina_mother_events', 'zoya_meet');
      } else {
        if (((s as any).locat ?? 0)?.['zoya'] === 8  ||  ((s as any).locat ?? 0)?.['zoya'] === 9) {
          scene.text('You hear the latch unlocking before the door is opened by the maid.');
          scene.text(`"Hello Miss ${((s as any).pcs_firstname ?? '')}," she smiles. "Miss Albina isn't home right now, but should return by 5pm. Ms. Zoya said that you're free to come in and wait for her if you wish."`);
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    scene.text('You shake your head. "No, that\'s okay. I\'ll just come back later."');
    scene.text('She nods. "As I said, Miss Albina is usually home by 5pm if you wish to return then."');
    scene.text('You nod back before she closes the door and you head back down the driveway.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
            { label: 'Wait for Albina inside', handler: (st: GameState) => {
    scene.text('"I\'ll come in and wait then, if that\'s okay?" you reply.');
    scene.text('The maid smiles and stands aside to let you enter.');
    scene.text(`"Please follow me, Miss ${((st as any).pcs_firstname ?? '')}."`);
    if (((st as any).locat ?? 0)?.['zoya'] === 8) {
      qspGoto(st, 'albina_mother_events', 'zoya_sunbathing_solo1');
    } else {
      qspGoto(st, 'albina_mother_events', 'zoya_workout_solo');
    }
  } },
          ]);
        } else {
          if (((s as any).locat ?? 0)?.['zoya'] === 10) {
            qspGoto(s, 'albina_mother_events', 'zoya_sunbathing_albina');
          } else {
            if (((s as any).locat ?? 0)?.['zoya'] === 11) {
              qspGoto(s, 'albina_mother_events', 'zoya_yoga_albina');
            } else {
              scene.text('A few seconds later, you hear the click of the latch unlocking before the door opens to reveal the maid.');
              scene.text(`"Hello Miss ${((s as any).pcs_firstname ?? '')}," she says with a polite smile.`);
              scene.text('"Hi. Is Albina home?" you politely ask.');
              if (((s as any).locat ?? 0)?.['A23'] !== 1) {
                if (((s as any).locat ?? 0)?.['A23'] === 2) {
                  scene.text('"Miss Albina is at school," she replies with a frown. "Shouldn\'t you also be there?"');
                  scene.text('You just awkwardly mumble under your breath and turn around, hearing the door close behind you as you walk away.');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
                  ]);
                } else {
                  scene.text('She shakes her head while offering another polite smile. "I\'m sorry, but Miss Albina is not available right now."');
                  scene.text('"Oh. Okay. I\'ll come back later then," you reply.');
                  if (((s as any).locat ?? 0)?.['A23'] === 6) {
                    scene.text('"I believe she is at the beach with your other friends if you want to try there?" she says before closing the door.');
                  } else {
                    scene.text('She just nods before closing the door.');
                  }
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
                  ]);
                }
              } else {
                scene.text('She nods and stands aside to let you enter.');
                scene.actions([
                  { label: 'Enter', goto: ['albinahome', 'maid_greet'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterMaidGreet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) <= ((s as any).AlbinaQW ?? 0)?.['visiting']) {
    qspGoto(s, 'albinahome', 'hallway');
  }
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['visiting'] = ((s as any).daystart ?? 0);
  (s as any).temp_rand = (Math.floor(Math.random() * 5) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).temp_rand = undefined;
    qspGoto(s, 'albina_house_events', 'alb_yoga_start');
  } else {
    if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).daystart ?? 0) > ((s as any).AlbinaQW ?? 0)?.['daily_event']) {
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['daily_event'] = ((s as any).daystart ?? 0);
      (s as any).temp_rand = undefined;
      qspGoto(s, 'albina_sex_scenes', 'lazar_start');
    } else {
      if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
        (s as any).temp_rand = undefined;
        qspGoto(s, 'albina_house_events', 'albina_sunbathe_solo');
      } else {
        scene.img('images/locations/pavlovsk/resident/albinahome/maid.jpg');
        scene.text(`"Please make yourself at home, Miss ${((s as any).pcs_firstname ?? '')}. I will let Miss Albina know that you have arrived," she says before excusing herself.`);
        scene.actions([
          { label: 'Continue', goto: ['albinahome', 'hallway'] },
        ]);
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/albinahome/hallway.jpg');
  scene.text('The foyer is well-appointed with hardwood flooring, numerous arches and tasteful decor. Lighting is sunk into the exquisite staircase with wraparound balconies on either side.');
  scene.text('You have been asked not to wander around the house alone, so you\'re limited in where you can go.');
  if (((s as any).hour ?? 0) >= 21) {
    scene.text(`The maid approaches with a polite smile. "My apologies Miss ${((s as any).pcs_firstname ?? '')}, but it is time for you to leave. You may visit again tomorrow."`);
    scene.text('You nod and gather your belongings before the maid shows you to the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspGoto(st, 'pav_residential', '');
  } },
      { label: 'Go to Albina\'s bedroom', goto: ['albinahome', 'bedroom'] },
      { label: 'Go to Zoya\'s bedroom', goto: ['albinahome', 'zoya_room'] },
      { label: 'Go to the living room', goto: ['albinahome', 'living_room'] },
      { label: 'Go to the bathroom', goto: ['albinahome', 'downstairs_bathroom'] },
      { label: 'Go to the kitchen', goto: ['albinahome', 'kitchen'] },
      { label: 'Go to the pool', goto: ['albinahome', 'pool_side'] },
    ]);
  }
  scene.build();
}

function enterDownstairsBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'bathroom';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/albinahome/bathroom.jpg');
  scene.text('The bathroom is just as well appointed as the rest of the house, with polished marble used throughout its furnishings.');
  scene.text('There is a shower, toilet, sink, <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a>, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027brush\u0027); return false;">brush</a>') : ('brush')) + ' your hair, and even a separate bathtub.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
    if (((s as any).pain ?? 0)?.['total'] > 0) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'drugs', 'painkiller_act_str') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'drugs', 'painkiller');
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    qspCall(st, 'stat', '');
    scene.text('You take a painkiller and gulp it down with a glass of water.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Return to the hallway', goto: ['albinahome', 'hallway'] },
  ]);
  scene.build();
}

function enterBedroomEventRandom(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).temp_rand = undefined;
    qspGoto(s, 'albina_sex_scenes', 'lazar_start');
  } else {
    if (((s as any).temp_rand ?? 0) === 1) {
      (s as any).temp_rand = undefined;
      qspGoto(s, 'albina_house_events', 'hot_tub1');
    } else {
      if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).temper ?? 0) < 10) {
        (s as any).temp_rand = undefined;
        qspGoto(s, 'albina_house_events', 'swim_winter1');
      } else {
        if (((s as any).temp_rand ?? 0) === 3  &&  ((s as any).AlbinaQW ?? 0)?.['studylock'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['flashdrive'] === 0) {
          (s as any).temp_rand = undefined;
          qspGoto(s, 'albina_events', 'study_door');
        } else {
          if (((s as any).temp_rand ?? 0) === 4) {
            (s as any).temp_rand = undefined;
            qspGoto(s, 'albina_house_events', 'alb_bedroom_shower');
          } else {
            if (((s as any).temp_rand ?? 0) === 5) {
              (s as any).temp_rand = undefined;
              qspGoto(s, 'albinahome', 'dancing');
            }
          }
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterBedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  if (((s as any).daystart ?? 0) > ((s as any).AlbinaQW ?? 0)?.['daily_event']) {
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['daily_event'] = ((s as any).daystart ?? 0);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBedroomEventRandom(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).daystart ?? 0) !== ((s as any).AlbinaQW ?? 0)?.['extra_event']) {
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['extra_event'] = ((s as any).daystart ?? 0);
      (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).temp_rand ?? 0))) {
        qspCall(s, 'albina_house_events', 'dancing');
      } else {
        if (((s as any).temp_rand ?? 0) === 1) {
          qspCall(s, 'albina_house_events', 'ass_too_big');
        }
      }
      (s as any).temp_rand = undefined;
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).AlbinaQW ?? 0)?.['albride'] === 3) {
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['albride'] = 4;
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('You head up to Albina\'s room, and she smiles at you when you walk in. "So you met my mother then? Don\'t worry. She\'s <i>mostly</i> harmless and actually likes you. So what do you want to do?"');
    scene.actions([
      { label: 'Hang out', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
    if (((s as any).hour ?? 0) >= 21) {
      scene.text(`"It's getting pretty late, ${((s as any).pcs_nickname ?? '')}," Albina says. "You should probably get going."`);
      scene.text('You check the time on your phone and sigh. "Yeah, I probably should…"');
      scene.text('You give Albina a hug goodbye before leaving.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      if ((((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6)  &&  ((s as any).hour ?? 0) >= 20) {
        scene.text('Albina suddenly starts undressing before pulling a skimpy black dress out of her wardrobe and sliding into it.');
        scene.text('"I\'m heading to the disco," she says as she pulls a pair of heels on. "Want to come with me? I know it\'s not much, but I\'ll pay the entry fee for you."');
        scene.actions([
          { label: 'Sure', handler: (st: GameState) => {
    scene.text('You nod. "I\'d love to go dancing with you!"');
    scene.text('Once she finishes her make-up and hair, the two of you head downstairs and make your way to the community center.');
    scene.actions([
      { label: 'Go to the disco', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_disco', ''] },
    ]);
  } },
          { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"No thanks," you reply. "I should probably get heading anyway."');
    scene.text('"Oh. Okay. Well at least walk me into town?" she replies.');
    scene.text('You nod and wait for her to finish getting ready before you head downstairs and make your way to the residential area.');
    scene.text('"Enjoy your night, Albina," you tell her before giving her a hug goodbye.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    ]);
  } },
        ]);
      } else {
        scene.text('Albina\'s bedroom is, in a word, <i>extravagant</i>. The centrepiece is a large double bed covered in soft pillows and a door at the back of the room leads to her en-suite <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027albinahome\u0027, \u0027albina_bathroom\u0027); return false;">bathroom</a>. There\'s even a sliding door leading to a balcony that overlooks the pool. A closet full of expensive-looking clothes is built into one of the walls.');
        scene.text('Her <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027albina_house_events\u0027, \u0027computer\u0027); return false;">laptop</a> is sitting on the nearby desk.');
        if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).hour ?? 0) < 19) {
          scene.actions([
            { label: 'Ask if she wants to swim in the pool', goto: ['albina_house_events', 'naked_swim'] },
          ]);
        }
        if (((s as any).photographyEv ?? 0) === 2  &&  ((s as any).portfolio_people ?? 0)[7] === 0) {
          scene.actions([
            { label: 'Ask if you can photograph her', goto: ['albina_house_events', 'albina_photos'] },
          ]);
        }
        if (((s as any).AlbinaQW ?? 0)?.['SportDay'] !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Ask about dancing', goto: ['albinahome', 'dancing1'] },
          ]);
        }
        scene.actions([
          { label: '<b>Go out to the hallway</b>', goto: ['albinahome', 'hallway'] },
          { label: '<b>Say goodbye and leave</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['pav_residential', ''] },
          { label: 'Chat with Albina', goto: ['albina_chat', 'chat'] },
          { label: 'Talk about video games', goto: ['albina_house_events', 'tekken_game'] },
          { label: 'Talk about clothes', goto: ['albinahome', 'dressing'] },
          { label: 'Ask if she wants to relax in the hot tub', goto: ['albina_house_events', 'hot_tub_ask'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterAlbinaBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'bathroom';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/albinahome/bathroom.jpg');
  scene.text('Much like the other bathrooms in the house, Albina\'s en-suite is extravagantly decorated with polished marble and glossy tiles.');
  scene.text('There is a large shower, toilet, sink, <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirror</a>, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027brush\u0027); return false;">brush</a>') : ('brush')) + ' your hair, and a huge marble bathtub that looks big enough to fit two people.');
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    scene.text('As you glance around the room, you notice the large suction dildo stuck to the edge of the bathtub. Albina could have absent-mindedly left it here by mistake, but knowing your friend, it\'s also likely that she done it deliberately.');
    scene.actions([
      { label: 'Leave it alone', goto: ['albinahome', 'albina_bathroom'] },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  if (((s as any).mc_inventory ?? 0)?.['painkillers'] > 0) {
    if (((s as any).pain ?? 0)?.['total'] > 0) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'drugs', 'painkiller_act_str') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'drugs', 'painkiller');
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    qspCall(st, 'stat', '');
    scene.text('You take a painkiller and gulp it down with a glass of water.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  }
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Return to Albina\'s room', goto: ['albinahome', 'bedroom'] },
  ]);
  scene.build();
}

function enterLivingRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/livingroom.jpg');
  scene.text('The living room is very well appointed, with polished wood flooring and expensive looking furniture used throughout the room.');
  scene.text('Your attention is drawn to some sort of decortative fixture made of glass and metal that\'s probably worth more than your entire apartment.');
  if (((s as any).locat ?? 0)?.['zoya'] === 5) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027zoya_chat\u0027, \u0027lounge_chat\u0027); return false;">Zoya</a> is here, relaxing on the sofa with a glass of wine while looking over what appears to be various work related papers.');
    scene.text('You could sit and chat with her.');
  } else {
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).hour ?? 0) < 17) {
      scene.text('The maid is busy dusting and polishing the room. She doesn\'t appear to have noticed your presence.');
    } else {
      scene.text('There\'s currently nobody here.');
    }
  }
  scene.actions([
    { label: 'Go to the hallway', goto: ['albinahome', 'hallway'] },
    { label: 'Go to Albina\'s bedroom', goto: ['albinahome', 'bedroom'] },
    { label: 'Go to Zoya\'s bedroom', goto: ['albinahome', 'zoya_room'] },
    { label: 'Go to the bathroom', goto: ['albinahome', 'downstairs_bathroom'] },
    { label: 'Go to the kitchen', goto: ['albinahome', 'kitchen'] },
    { label: 'Go to the pool', goto: ['albinahome', 'pool_side'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  (s as any).locclass = 'kitr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/kitchen.jpg');
  scene.text('The well equipped kitchen is just as well appointed as the rest of the house, with shiny varnished wood used throughout its furnishings.');
  if (((s as any).hour ?? 0) >= 21) {
    scene.text(`The maid approaches with a polite smile. "My apologies Miss ${((s as any).pcs_firstname ?? '')}, but it is time for you to leave. You may visit again tomorrow."`);
    scene.text('You nod and gather your belongings before the maid shows you to the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['zoya'] === 3) {
      if (((s as any).hour ?? 0) < 7) {
        scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027zoya_chat\u0027, \u0027breakfast_chat\u0027); return false;">Zoya</a> is here, eating her breakfast at the table.');
        scene.text('You could sit and chat with her.');
      } else {
        scene.text('Zoya is here, eating her dinner at the table while looking over what appears to be various work related papers. You probably shouldn\'t disturb her.');
      }
    } else {
      scene.text('There\'s currently nobody here.');
    }
  }
  qspCall(s, 'kit_din', '');
  qspCall(s, 'kit_din', 'fill_bottle');
  qspCall(s, 'kit_din', 'driwater');
  scene.actions([
    { label: 'Go to the hallway', goto: ['albinahome', 'hallway'] },
    { label: 'Go to Albina\'s bedroom', goto: ['albinahome', 'bedroom'] },
    { label: 'Go to Zoya\'s bedroom', goto: ['albinahome', 'zoya_room'] },
    { label: 'Go to the living room', goto: ['albinahome', 'living_room'] },
    { label: 'Go to the bathroom', goto: ['albinahome', 'downstairs_bathroom'] },
    { label: 'Go to the pool', goto: ['albinahome', 'pool_side'] },
  ]);
  scene.build();
}

function enterPoolSide(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool_winter.jpg');
    scene.text('The small pool takes up most of the space in the center of the backyard, with a separate hot tub built next to it. Multiple loungers and deck chairs line the edge of the pool.');
    scene.text('Given the current weather, you doubt it\'s a good idea to jump in.');
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/pool.jpg');
    scene.text('The small pool takes up most of the space in the center of the backyard, with a separate hot tub built next to it. Multiple loungers and deck chairs line the edge of the pool.');
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.text('Given the heat, you almost want to jump into the crystal clear water to cool off. You wonder if Albina would be up for a dip?');
    } else {
      scene.text('The crystal clear water looks rather inviting. You wonder if Albina would be up for a dip?');
    }
  }
  if (((s as any).locat ?? 0)?.['zoya'] === 8) {
    scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027albina_mother_events\u0027, \u0027zoya_sunbathing_solo2\u0027); return false;">Zoya</a> is sunbathing topless on a floatie in the middle of the pool.');
    scene.text('You wonder if you should disturb her. She looks rather relaxed right now and might not be looking for company.');
  } else {
    if (((s as any).hour ?? 0) >= 21) {
      scene.text(`The maid approaches with a polite smile. "My apologies Miss ${((s as any).pcs_firstname ?? '')}, but it is time for you to leave. You may visit again tomorrow."`);
      scene.text('You nod and gather your belongings before the maid shows you to the door.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
      ]);
    } else {
      scene.text('There\'s nobody out here right now.');
    }
  }
  scene.actions([
    { label: 'Go to the hallway', goto: ['albinahome', 'hallway'] },
    { label: 'Go to Albina\'s bedroom', goto: ['albinahome', 'bedroom'] },
    { label: 'Go to the living room', goto: ['albinahome', 'living_room'] },
    { label: 'Go to Zoya\'s bedroom', goto: ['albinahome', 'zoya_room'] },
    { label: 'Go to the bathroom', goto: ['albinahome', 'downstairs_bathroom'] },
    { label: 'Go to the kitchen', goto: ['albinahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterZoyaRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'albinahome', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterZoyaSchedule(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).locat ?? 0)?.['zoya'] === 1) {
    scene.img('images/locations/pavlovsk/resident/albinahome/zoyaroom.jpg');
    scene.text('You walk down the hallway until you reach Zoya\'s bedroom. Reaching for the handle, you crack the door open and take a peek inside.');
    scene.text('The room is in darkness and you see Zoya sleeping in her bed. Deciding not to disturb her, you quietly close the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albinahome', 'hallway'] },
    ]);
  } else {
    if (((s as any).locat ?? 0)?.['zoya'] === 2) {
      qspGoto(s, 'albina_mother_events', 'peep2');
    } else {
      scene.img('images/locations/pavlovsk/resident/albinahome/zoyaroom.jpg');
      scene.text('You walk down the hallway until you reach Zoya\'s bedroom. Reaching for the handle, you crack the door open and take a peek inside.');
      scene.text('You gasp at how well appointed the room is, with a large bed in the middle of the room drawing your attention. A desk sits against one wall while the other is made up almost entirely of sliding panels that conceal the en-suite bathroom.');
      scene.text('The room itself is immaculate, with not a single speck of dust to be seen anywhere. Other than that, there doesn\'t appear to be anything else of interest.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['albinahome', 'hallway'] },
      ]);
    }
  }
  scene.build();
}

function enterDancing(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['SportHome'] === 0) {
    scene.img('images/locations/pavlovsk/resident/albinahome/train.mp4');
    scene.text('Albina is training in her room, doing some stretching exercises.');
    scene.text('She\'s wearing skin-tight yoga pants that show off her toned body quite well.');
    scene.text(`Oh hey ${((s as any).pcs_nickname ?? '')}!" she says with a smile when she sees you.`);
    scene.actions([
      { label: 'Ask why she doesn\'t train at a gym', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['SportHome'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('"Why would I waste time going to a gym when I have one in my own house?" she says and you blush slightly at what you realize was a dumb question.');
    scene.text('"I was about to go down there and do some dancing exercises. I could teach you some things about stripping and pole dancing if you want?"');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['SportDay'] = ((st as any).daystart ?? 0);
    scene.text('"No thanks," you reply. "I\'m good."');
    scene.text('"Okay, just give me a minute to finish up here and freshen up."');
    scene.text('She finishes her exercises before heading into her en-suite to shower. She returns a few minutes later and gets dressed before sitting on the bed.');
    scene.text('"So… What do you want to do?"');
    scene.actions([
      { label: 'Find something to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Teach me stripping', goto: ['albinahome', 'stripping'] },
      { label: 'Teach me poledancing', goto: ['albinahome', 'poledancing'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/resident/albinahome/train.mp4');
    scene.text('You enter the room to find Albina doing some stretching exercises in her yoga pants.');
    scene.text(`She smiles at you. "Hey ${((s as any).pcs_nickname ?? '')}! I was just about to head down to the gym to do my dancing exercises. Want me to teach you some things?"`);
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    ((st as any).AlbinaQW = (st as any).AlbinaQW ?? {})['SportDay'] = ((st as any).daystart ?? 0);
    scene.text('"No thanks," you reply. "I\'m good."');
    scene.text('"Okay, just give me a minute to finish up here and freshen up."');
    scene.text('She finishes her exercises before heading into her en-suite to shower. She returns a few minutes later and gets dressed before sitting on the bed.');
    scene.text('"So… What do you want to do?"');
    scene.actions([
      { label: 'Find something to do', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      { label: 'Teach me stripping', goto: ['albinahome', 'stripping'] },
      { label: 'Teach me poledancing', goto: ['albinahome', 'poledancing'] },
    ]);
  }
  scene.build();
}

function enterDancing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('"Can we practice dancing together?" you ask.');
  scene.text('She smiles and nods. "Sure! Did you want to do stripping or poledancing?"');
  scene.actions([
    { label: 'Teach me stripping', goto: ['albinahome', 'stripping'] },
    { label: 'Teach me poledancing', goto: ['albinahome', 'poledancing'] },
  ]);
  scene.build();
}

function enterStripping(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['SportDay'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  scene.img('images/locations/pavlovsk/resident/albinahome/stripdance.jpg');
  if (((s as any).pcs_inhib ?? 0) < 60) {
    qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 2));
  }
  if (((s as any).pcs_danc ?? 0) >= 40) {
    qspCall(s, 'exercise', 'tier2', 120, 'agil', 'dancero');
    qspCall(s, 'stat', '');
    scene.text('"Okay, we need some space. Follow me."');
    scene.text('She leads you down to the home gym, where she teaches you how to passionately dance to the music while stripping.');
    if (((s as any).pcs_dancero ?? 0) >= 100) {
      scene.text('You don\'t learn anything new since you already know everything she can teach you.');
    }
  } else {
    qspCall(s, 'exercise', 'tier3', 120, 'agil', 'danc');
    qspCall(s, 'stat', '');
    scene.text('A striptease is too complex for you. You\'re not able to dance and strip at the same time. Albina recommends that you start with learning to dance first.');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPostWorkoutShower(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Rest', goto: ['albinahome', 'bedroom'] },
  ]);
  scene.build();
}

function enterPoledancing(s: GameState, scene: SceneBuilder): void {
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['SportDay'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A23', 1);
  if (((s as any).pcs_stren ?? 0) >= 40  &&  ((s as any).pcs_dancero ?? 0) >= 40) {
    if (((s as any).pcs_inhib ?? 0) < 60) {
      qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 2));
    }
    qspCall(s, 'exercise', 'tier2', 120, 'stren', 'vital', 'dancpol');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/poledance.jpg');
    scene.text('Albina leads you to the home gym, where she teaches various acrobatic moves on the pole. The two of you greatly enjoy yourselves.');
    if (((s as any).pcs_dancpol ?? 0) >= 100) {
      scene.text('You didn\'t learn anything new since you already know everything she can teach you.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPostWorkoutShower(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Rest', goto: ['albinahome', 'bedroom'] },
    ]);
  } else {
    if (((s as any).pcs_stren ?? 0) < 40  &&  ((s as any).pcs_dancero ?? 0) >= 40) {
      scene.text('You try your best to follow Albina\'s instructions, but end up smacking your head on the pole instead and falling to the floor.');
      scene.text(`You're flat on your back and see Albina kneeling over you. "Are you okay, ${((s as any).pcs_nickname ?? '')}? It looks like you're still too weak for pole dancing, so we need to develop your strength instead."`);
      scene.text('You nod at her, and she pulls you to your feet before checking your head. "It might bruise, but otherwise, you look fine."');
      scene.actions([
        { label: 'Develop strength (2:00)', handler: (st: GameState) => {
    qspCall(st, 'exercise', 'tier2', 120, 'stren', 'vital');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/stren.jpg');
    scene.text('Albina shows you how to develop your strength using various exercises.');
    scene.text('You wonder if these exercises are how she has such a great-looking ass.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostWorkoutShower(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Rest', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/albinahome/stripdance.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        qspCall(s, 'exp_gain', 'inhib', (Math.floor(Math.random() * 2) + 2));
      }
      scene.text('Albina grins. "You still can\'t strip well enough for pole dancing. We should practice that first."');
      if (((s as any).pcs_danc ?? 0) >= 40) {
        qspCall(s, 'exercise', 'tier2', 120, 'agil', 'dancero');
        qspCall(s, 'stat', '');
        scene.text('She teaches you how to passionately dance to the music while stripping.');
        if (((s as any).pcs_dancero ?? 0) >= 100) {
          scene.text('You don\'t learn anything new since you already know everything she can teach you.');
        }
      } else {
        qspCall(s, 'exercise', 'tier3', 120, 'agil', 'danc');
        qspCall(s, 'stat', '');
        scene.text('A striptease is too complex for you. You\'re not able to dance and strip at the same time. Albina recommends that you start with learning to dance first.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPostWorkoutShower(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Rest', goto: ['albinahome', 'bedroom'] },
      ]);
    }
  }
  scene.build();
}

function enterPostWorkoutShower(s: GameState, scene: SceneBuilder): void {
  scene.text(`"You're looking a little sweaty there, ${((s as any).pcs_nickname ?? '')}. You should go and have a shower. Mama wouldn't like it if you got sweat marks all over the furniture. Meet me in my bedroom when you're done."`);
  qspCall(s, 'din_van', 'shower');
  scene.build();
}

function enterDressing(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/resident/albinahome/albinaroom.jpg');
  scene.text('You talk about the clothes you have and how to combine them for the community center dance before Albina invites you to try some of her clothes.');
  scene.actions([
    { label: 'Try on some clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/albinahome/dressing.jpg');
    scene.text('You and Albina open her vast wardrobe and start digging into her various clothes.');
    scene.text('As you rummage around in her wardrobe, you\'re amazed by how many different clothes she owns. Her wardrobe seems like a bottomless pit filled with dresses, skirts, leggings, jeans and other expensive-looking clothes.');
    scene.text('The two of you end up spending an hour trying on various different outfits.');
    scene.actions([
      { label: 'Finish', goto: ['albinahome', 'bedroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterZoyaSchedule(s: GameState, scene: SceneBuilder): void {
  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 0;
  if (((s as any).week ?? 0) < 5) {
    if (((s as any).hour ?? 0) < 6) {
      ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
    } else {
      if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 30) {
        ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
      } else {
        if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) > 30) {
          ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
        } else {
          if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 19) {
            ((s as any).locat = (s as any).locat ?? {})['zoya'] = 4;
          } else {
            if (((s as any).hour ?? 0) === 19) {
              ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
            } else {
              if (((s as any).hour ?? 0) === 20) {
                ((s as any).locat = (s as any).locat ?? {})['zoya'] = 5;
              } else {
                if (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30) {
                  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
                } else {
                  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).week ?? 0) === 5) {
      if (((s as any).hour ?? 0) < 6) {
        ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
      } else {
        if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) < 30) {
          ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
        } else {
          if (((s as any).hour ?? 0) === 6  &&  ((s as any).minut ?? 0) > 30) {
            ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
          } else {
            if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 18) {
              ((s as any).locat = (s as any).locat ?? {})['zoya'] = 4;
            } else {
              if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) < 30) {
                ((s as any).locat = (s as any).locat ?? {})['zoya'] = 6;
              } else {
                if (((s as any).hour ?? 0) === 18  &&  ((s as any).minut ?? 0) > 30) {
                  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
                } else {
                  if (((s as any).hour ?? 0) === 19) {
                    ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
                  } else {
                    if (((s as any).hour ?? 0) === 20  ||  ((s as any).hour ?? 0) === 21) {
                      ((s as any).locat = (s as any).locat ?? {})['zoya'] = 5;
                    } else {
                      ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).hour ?? 0) < 8) {
        ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
      } else {
        if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 30) {
          ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
        } else {
          if (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) > 30) {
            ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
          } else {
            if (((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 16) {
              ((s as any).locat = (s as any).locat ?? {})['zoya'] = 7;
            } else {
              if (((s as any).hour ?? 0) === 16) {
                if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
                  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 8;
                } else {
                  ((s as any).locat = (s as any).locat ?? {})['zoya'] = 9;
                }
              } else {
                if (((s as any).hour ?? 0) === 17) {
                  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
                    ((s as any).locat = (s as any).locat ?? {})['zoya'] = 10;
                  } else {
                    ((s as any).locat = (s as any).locat ?? {})['zoya'] = 11;
                  }
                } else {
                  if (((s as any).hour ?? 0) === 18) {
                    ((s as any).locat = (s as any).locat ?? {})['zoya'] = 3;
                  } else {
                    if (((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) < 30) {
                      ((s as any).locat = (s as any).locat ?? {})['zoya'] = 2;
                    } else {
                      if ((((s as any).hour ?? 0) === 19  &&  ((s as any).minut ?? 0) > 30)  &&  ((s as any).hour ?? 0) < 22) {
                        ((s as any).locat = (s as any).locat ?? {})['zoya'] = 5;
                      } else {
                        ((s as any).locat = (s as any).locat ?? {})['zoya'] = 1;
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'door_bell':
      enterDoorBell(s, scene);
      break;
    case 'maid_greet':
      enterMaidGreet(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'downstairs_bathroom':
      enterDownstairsBathroom(s, scene);
      break;
    case 'bedroom_event_random':
      enterBedroomEventRandom(s, scene);
      break;
    case 'bedroom':
      enterBedroom(s, scene);
      break;
    case 'albina_bathroom':
      enterAlbinaBathroom(s, scene);
      break;
    case 'living_room':
      enterLivingRoom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'pool_side':
      enterPoolSide(s, scene);
      break;
    case 'zoya_room':
      enterZoyaRoom(s, scene);
      break;
    case 'dancing':
      enterDancing(s, scene);
      break;
    case 'dancing1':
      enterDancing1(s, scene);
      break;
    case 'stripping':
      enterStripping(s, scene);
      break;
    case 'poledancing':
      enterPoledancing(s, scene);
      break;
    case 'post_workout_shower':
      enterPostWorkoutShower(s, scene);
      break;
    case 'dressing':
      enterDressing(s, scene);
      break;
    case 'zoya_schedule':
      enterZoyaSchedule(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const albinahome: LocationDef = {
  name: 'albinahome',
  title: 'There are better times for a house call than right now!',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
