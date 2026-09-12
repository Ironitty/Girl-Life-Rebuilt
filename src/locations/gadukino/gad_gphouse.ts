import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'give_access', 'grandparents_house');
  qspCall(s, 'gad_gphouse', 'nudity_trouble_limit');
  qspCall(s, 'gad_gphouse', 'enter_events');
  // TODO-QSP: end
  scene.build();
}

function enterSetup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gphouse', ((s as any).locArgs?.[1] ?? 0));
  qspCall(s, 'schedule', 'A31', 'A32', 'A60');
  if (((s as any).prevloc ?? 0) !== 'gad_gphouse') {
    qspCall(s, 'gad_gphouse', 'init');
  }
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['imagepath'] = 'images/' + 'locations/gadukino/gp_dacha/';
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['StageTitle'] = ((s as any).setloc ?? 0)?.['room_title'];
  scene.img(((s as any).setloc ?? {})?.['imagepath'] + ((s as any).setloc ?? {})?.['room_image']);
  qspCall(s, 'shortgs', 'clothing_status');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'gad_gphouse', 'normal_events');
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).gp_debug ?? 0) === 1) {
    // TODO-QSP: dynamic text: <<$locat['A31_loc']>>, <<$locat['A31_arg']>>
    scene.text(`${((s as any).locat ?? 0)?.['A31_loc']}, ${((s as any).locat ?? 0)?.['A31_arg']}`);
    // TODO-QSP: dynamic text: <<$locat['A32_loc']>>, <<$locat['A32_arg']>>
    scene.text(`${((s as any).locat ?? 0)?.['A32_loc']}, ${((s as any).locat ?? 0)?.['A32_arg']}`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  (s as any).temp_rand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).locat ?? 0)?.['A31_loc'] === 'gad_gphouse'  &&  ((s as any).locat ?? 0)?.['A31_arg'] !== 'gp_room') {
    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandma_leave_event'] }]);
  } else {
    if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).locat ?? 0)?.['A32_loc'] === 'gad_gphouse'  &&  ((s as any).locat ?? 0)?.['A32_arg'] !== 'gp_room') {
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandpa_leave_event'] }]);
    }
  }
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  // TODO-QSP: end
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['room_title'] = 'Your Grandparents\' Cottage';
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['room_image'] = 'izba.jpg';
  qspCall(s, 'gad_gphouse', 'setup', 'main');
  scene.text('A fairly simple cottage in the village of Gadukino which your grandparents call home. In the main room there is a huge <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a>. You share this with your grandparents to store anything that won\'t fit in your chest.');
  scene.text('There is an old <a href="exec:gt \'TV\',\'gad\'">television</a> in the living room. It\'s positioned next to a body length <a href="exec:gt \'mirror\', \'start\'">mirror</a>.');
  scene.text('Your grandfather\'s <a href="exec: newspaperVars[\'dbag\'] = 0 & gs \'newspaper\', \'start\'">newspaper</a> is lying to the side.');
  qspCall(s, 'gad_gphouse', 'villagecat_string');
  if (((s as any).locat ?? 0)?.['A31_loc'] === ((s as any).loc ?? 0)  &&  ((s as any).locat ?? 0)?.['A31_arg'] === ((s as any).loc_arg ?? 0)) {
    if (((s as any).locat ?? 0)?.['A31_arg1'] === 'reading') {
      scene.text('You see your <a href="exec: gt \'gp_elene\', \'talk\' ">grandmother</a> relaxing on the couch reading a book.');
    } else {
      if (((s as any).locat ?? 0)?.['A31_arg1'] === 'watching_tv') {
        scene.text('You see your <a href="exec: gt \'gp_elene\', \'talk\' ">grandmother</a> relaxing on the couch watching TV.');
      } else {
        if (((s as any).locat ?? 0)?.['A31_arg1'] === 'repearing_clothes') {
          scene.text('You see your <a href="exec: gt \'gp_elene\', \'talk\' ">grandmother</a> sittinng on the couch repairing some clothes.');
        } else {
          if (((s as any).locat ?? 0)?.['A31_arg1'] === 'knitting') {
            scene.text('You see your <a href="exec: gt \'gp_elene\', \'talk\' ">grandmother</a> sitting on the couch knitting.');
          }
        }
      }
    }
  }
  if (((s as any).locat ?? 0)?.['A32_loc'] === ((s as any).loc ?? 0)  &&  ((s as any).locat ?? 0)?.['A32_arg'] === ((s as any).loc_arg ?? 0)) {
    if (((s as any).locat ?? 0)?.['A32_arg1'] === 'reading') {
      scene.text('You see your <a href="exec: gt \'gp_zlatek\', \'talk\' ">grandfather</a> relaxing on the couch reading a book.');
    } else {
      if (((s as any).locat ?? 0)?.['A32_arg1'] === 'watching_tv') {
        scene.text('You see your <a href="exec: gt \'gp_zlatek\', \'talk\' ">grandfather</a> relaxing on the couch watching TV.');
      }
    }
  }
  qspCall(s, 'gad_gphouse', 'family_trip');
  if (((s as any).locat ?? 0)?.['A60_loc'] === ((s as any).loc ?? 0)  &&  ((s as any).locat ?? 0)?.['A60_arg'] === ((s as any).loc_arg ?? 0)) {
    if (((s as any).MiraVars ?? 0)?.['guest'] === 0) {
      if (((s as any).MiraVars ?? 0)?.['follow_time'] < 1) {
        if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['follow_time'] = 1;
      }
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
    } else {
      if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['follow_time'] = 0;
      scene.text('<a href="exec: gt \'miroslava\', \'start\'">Mira</a> is sitting next to you.');
    }
  }
  if ((Math.floor(Math.random() * 3) + 0) !== 0) {
    qspCall(s, 'din_bad', 'mobile_check');
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: 'Go outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'gad_gphouse', 'exit', 'gad_gpyard', 'start');
  } },
    ]);
  }
  qspCall(s, 'gp_elene', 'check_for_chores', 'livingroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['gad_gpbarn', 'barn_room'] },
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gad_gphouse', 'kitchen'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['room_title'] = 'Your Grandparents\' Kitchenette';
  if (!(s as any).setloc) (s as any).setloc = {}; (s as any).setloc['room_image'] = 'gp_kitchen.jpg';
  qspCall(s, 'gad_gphouse', 'setup', 'kitchen');
  scene.text('A small area separated from the rest of the dacha reserved for cooking and eating meals.');
  if (((s as any).locat ?? 0)?.['A31_loc'] === ((s as any).loc ?? 0)  &&  ((s as any).locat ?? 0)?.['A31_arg'] === ((s as any).loc_arg ?? 0)) {
    if (((s as any).locat ?? 0)?.['A31_arg1'] === 'cooking') {
      scene.text('You see your <a href="exec: gt \'gp_elene\', \'talk\' ">grandmother</a> in the kitchen preparing a meal.');
    }
  }
  if (((s as any).locat ?? 0)?.['A32_loc'] === ((s as any).loc ?? 0)  &&  ((s as any).locat ?? 0)?.['A32_arg'] === ((s as any).loc_arg ?? 0)) {
    if (((s as any).locat ?? 0)?.['A32_arg1'] === 'reading') {
      scene.text('You see your <a href="exec: gt \'gp_zlatek\', \'talk\' ">grandfather</a> in the kitchen reading a newspaper.');
    }
  }
  qspCall(s, 'core_library', 'kitchen', 'full');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gphouse', 'main'] },
    { label: 'Eat a hearty meal (0:20)', handler: (st: GameState) => {
    qspCall(st, 'food', 'large_meal');
  } },
    { label: 'Eat a normal meal (0:15)', handler: (st: GameState) => {
    qspCall(st, 'food', 'medium_meal');
  } },
    { label: 'Eat a light meal (0:10)', handler: (st: GameState) => {
    qspCall(st, 'food', 'small_meal');
  } },
  ]);
  scene.build();
}

function enterFamilyTrip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) > 12  &&  ((s as any).locat ?? 0)?.['Fam_month_inGad'] !== ((s as any).month ?? 0)) {
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['Fam_inGad'] = 1;
  }
  if (((s as any).locat ?? 0)?.['Fam_inGad'] === 1) {
    scene.text('Your parents are relaxing inside.');
    qspCall(s, 'mother', 'check_workout');
    if (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['Fam_month_inGad'] = ((s as any).month ?? 0);
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['Fam_inGad'] = 0;
      if (((s as any).daystart ?? 0) > ((s as any).gadstay_day ?? 0)  &&  ((s as any).hour ?? 0) === 20  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
        if ((((s as any).kanikuli ?? 0) === 4  ||  ((s as any).kanikuli ?? 0) === 5)  &&  ((((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7)  ||  (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) <= 25))) {
          scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'family_trip_ask_go_home'] }]);
        } else {
          scene.actions([
            { label: 'Go home to Pavlovsk', goto: ['gad_gphouse', 'to_pavlovsk'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFamilyTripAskGoHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>Your mother, Natasha ${((s as any).pcs_lastname ?? 0)}</b></center>`);
  scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
  // TODO-QSP: dynamic text: <<$npc_nickname['A29']>> asks, "<<$pcs_nickname>>, are you coming home with us o...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A29']} asks, "${((s as any).pcs_nickname ?? 0)}, are you coming home with us or are you going to stay in the village with your grandparents?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay with your grandparents', handler: (st: GameState) => {
    (s as any).gadstay = 1;
    (s as any).gadstay_day = ((s as any).daystart ?? 0);
  }, goto: ['gad_gphouse', 'entry'] },
    { label: 'Go home to Pavlovsk', goto: ['gad_gphouse', 'to_pavlovsk'] },
  ]);
  scene.build();
}

function enterToPavlovsk(s: GameState, scene: SceneBuilder): void {
  (s as any).gadstay = 0;
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['Fam_inGad'] = 0;
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 15);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Your grandmother</b></center>');
  scene.img('images/locations/gadukino/village/grandmahelp.jpg');
  if (((s as any).grandmaQW ?? 0)?.['help_amount'] > 0) {
    // TODO-QSP: gs 'money', 'earn', grandmaQW['help_amount'] * 25, 'cash'
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Before leaving, your grandma hugs you and gives you <<$func('money', 'string_pro...
    scene.text(`Before leaving, your grandma hugs you and gives you ${qspFunc(s, 'money', 'string_profit', ((s as any).grandmaQW ?? {})?.['help_amount']*25)} for your help with chores.`);
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = 0;
  } else {
    scene.text('Before leaving, your grandma gives you a big hug goodbye.');
  }
  scene.text('You get into the Volga with the rest of your family, and before you know it, you\'ve arrived back in Pavlovsk.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go home', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterToGadukino(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['Fam_inGad'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 15);
  qspCall(s, 'stat', '');
  scene.text('You get into the Volga with the rest of your family, and before you know it, you\'ve arrived in Gadukino.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your grandparents house', goto: ['gad_gphouse', 'entry'] },
  ]);
  scene.build();
}

function enterEnterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 6) {
    if (((s as any).lost_girl ?? 0) === 1) {
      (s as any).lost_girl = 0;
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
    }
  } else {
    if (((s as any).gadstay ?? 0) === 1  &&  (((s as any).kanikuli ?? 0) === 4  ||  ((s as any).kanikuli ?? 0) === 5)  &&  ((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) >= 27) {
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'school_start'] }]);
    } else {
      if (((s as any).lost_girl ?? 0) === 1) {
        if (((s as any).daystart ?? 0) > ((s as any).forest_lostday ?? 0)) {
          (s as any).lost_girl = 0;
          scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'was_lost_yesterday'] }]);
        } else {
          (s as any).lost_girl = 0;
          scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
        }
      } else {
        if (((s as any).grandmaQW ?? 0)?.['nudity_trouble_limit'] === 50) {
          scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'nudity_trouble_kicked'] }]);
        } else {
          if (((s as any).grandmaQW ?? 0)?.['nudity_trouble'] === ((s as any).grandmaQW ?? 0)?.['nudity_trouble_limit']) {
            scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'nudity_trouble'] }]);
          } else {
            if (((s as any).grandpaQW ?? 0)?.['disappointment'] === 1) {
              scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandpa_disapointment'] }]);
            } else {
              if (((s as any).grandmaQW ?? 0)?.['disappointment'] === 1) {
                scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'grandma_disapointment'] }]);
              } else {
                if (((s as any).grandmaQW ?? 0)?.['first_visit'] === 0  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
                  scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'first_visit'] }]);
                } else {
                  if (((s as any).grandmaQW ?? 0)?.['last_month_paid'] !== ((s as any).month ?? 0)  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
                    scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'chores_pay'] }]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNormalEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
    if (qspFunc(s, 'miroslava_schedule', 'is_here', 'gp')  &&  ((s as any).MiraVars ?? 0)?.['guest'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'mira_visit'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNudityTroubleLimit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['nudity_trouble_base'] === 0  ||  ((s as any).grandmaQW ?? 0)?.['nudity_trouble_limit'] === 0) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_base'] = 10;
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW ?? 0)?.['nudity_trouble_base'];
  } else {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW ?? 0)?.['nudity_trouble_base'];
  }
  if (((s as any).gschoolVars ?? 0)?.['block'] === 1) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (5);
  }
  if (((s as any).momKnowsKolka ?? 0) === 1) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (10);
  }
  if (((s as any).momKnowsVladimir ?? 0) === 1) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (10);
  }
  if (((s as any).momslut ?? 0) < 2) {
    if (((s as any).motherKnowWhore ?? 0) > 0) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (3);
    }
    if (((s as any).motherKnowSpravka ?? 0) > 0) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (2);
    }
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
    if (((s as any).brotherQW ?? 0)?.['know_slut'] > 1) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (3);
    }
    if (((s as any).brotherQW ?? 0)?.['know_slut'] > 0) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (2);
    }
  }
  if (((s as any).sisterQW ?? 0)?.['roma3block'] === 1) {
    if (((s as any).sisterknowslut ?? 0) > 1  &&  ((s as any).sisboypartyQW ?? 0) > 1) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (3);
    }
    if (((s as any).sisterknowslut ?? 0) > 0) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (2);
    }
  }
  if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (5);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] >= 11) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (3);
    }
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 15) {
      if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_limit'] = ((s as any).grandmaQW['nudity_trouble_limit'] ?? 0) + (2);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSchoolStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'money', 'earn', 75, 'cash');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Your grandmother</b></center>');
  scene.img('images/locations/gadukino/village/grandmahelp.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, your mother called. School starts soon, and you must head b...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}, your mother called. School starts soon, and you must head back to Pavlovsk to get ready."`);
  scene.text('"As much as we loved having you around and seeing you more, this is it for now."');
  scene.text('"You are always welcome to come and visit on weekends or breaks from school."');
  scene.text('"And if you want to, you can always stay with us again next summer."');
  if (((s as any).grandmaQW ?? 0)?.['help_amount'] > 0) {
    // TODO-QSP: dynamic text: Before leaving, your grandma hugs you and gives you <<$func('money', 'string_pro...
    scene.text(`Before leaving, your grandma hugs you and gives you ${qspFunc(s, 'money', 'string_profit', 25 * ((s as any).grandmaQW ?? {})?.['help_amount'])} for your help with chores.`);
    // TODO-QSP: gs 'money', 'earn', 25 * grandmaQW['help_amount'], 'cash'
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = 0;
    qspCall(s, 'stat', '');
  } else {
    scene.text('Before leaving, your grandma gives you a big hug goodbye.');
  }
  // TODO-QSP: dynamic text: As you turn to leave, she stops you, "One last thing, here's <<$func('money', 's...
  scene.text(`As you turn to leave, she stops you, "One last thing, here's ${qspFunc(s, 'money', 'string_profit', 75, 'cash')} for the train ticket to get you back to Pavlovsk."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).gadstay = 0;
  }, goto: ['gad_gpyard', 'start'] },
  ]);
  scene.build();
}

function enterWasLostYesterday(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['disappointment'] = 0;
  if (!(s as any).grandpaQW) (s as any).grandpaQW = {}; (s as any).grandpaQW['disappointment'] = 0;
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['last_day_helped'] = ((s as any).daystart ?? 0);
  if (!(s as any).grandpaQW) (s as any).grandpaQW = {}; (s as any).grandpaQW['last_day_helped'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big32.jpg');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>, your grandfather and I were so worried when you didn't come...
  scene.text(`"${((s as any).pcs_firstname ?? 0)}, your grandfather and I were so worried when you didn't come home from the forest."`);
  scene.text('"We are so glad you are back safe and sound. Go have a hot meal and shower and relax."');
  scene.text('"Also, don\'t worry about any chores today. Just focus on recovering."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterNudityTroubleKicked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'block_access', 'grandparents_house');
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = 0;
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['block'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandma.jpg');
  // TODO-QSP: dynamic text: Your grandmother looks at you coldly from across the room. She is speaking softl...
  scene.text(`Your grandmother looks at you coldly from across the room. She is speaking softly, but somehow that is more unnerving than usual, "I've been more than fair to you, ${((s as any).pcs_firstname ?? 0)}, and given you more chances than maybe even your mother."`);
  scene.text('"If you won\'t at least try to act like a decent lady around here, you are no longer welcome. So take your things and leave. Come back when you\'ve learned at least some basic decency."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).gadstay = 0;
  }, goto: ['gadukino', ''] },
  ]);
  scene.build();
}

function enterNudityTrouble(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grandmaQW ?? 0)?.['nudity_trouble'] > ((s as any).grandmaQW ?? 0)?.['help_amount']) {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = 0;
  } else {
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = ((s as any).grandmaQW ?? {})?.['help_amount'] - ((s as any).grandmaQW ?? {})?.['nudity_trouble'];
  }
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble'] = 0;
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['nudity_trouble_base'] = ((s as any).grandmaQW['nudity_trouble_base'] ?? 0) + (1);
  scene.img('images/characters/shared/headshots_main/big32.jpg');
  scene.text('Suddenly your grandmother approaches you with a disappointed look on her face. "I had higher expectations of you, young lady! You should be ashamed of yourself for running around outdoors without clothes. You have embarrassed your grandfather and me! Our friends have seen you around naked, as have your grandfather and I, so don\'t even try to hide it."');
  scene.text('"This will be reflected in your allowance, don\'t act surprised at the beginning of the month."');
  scene.text('"Unlike you, we have to live in this village and get along with its people. If you keep this up, I\'ll be cutting your time here short and sending you back to your mother, and she can deal with your sinful behaviour. We better not hear any more about this!" She then walks off before you can even respond.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterGrandpaDisapointment(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandpaQW) (s as any).grandpaQW = {}; (s as any).grandpaQW['disappointment'] = 0;
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = ((s as any).grandmaQW['help_amount'] ?? 0) - (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandpa.jpg');
  scene.text('Your grandfather scowls at you as you walk by.');
  // TODO-QSP: dynamic text: <br>"<<$pcs_firstname>>. I am disappointed in you," he says flatly.
  scene.text(`<br>"${((s as any).pcs_firstname ?? 0)}. I am disappointed in you," he says flatly.`);
  scene.text('"What? Why?" you ask, taken aback a bit by his demeanour.');
  scene.text('"Yesterday, I asked you to help me, and you agreed. And here we are today, and I find that you did not."');
  scene.text('"Oh n-no, Grandpa," you stutter, "I forgot all about it! I\'m sorry!"');
  scene.text('"Quiet, child. I wasn\'t done speaking. You promised to help and did not, which means you lied."');
  scene.text('<br>You stare at him, crestfallen.');
  // TODO-QSP: dynamic text: <br>"And I don't want your apologies. A <<$pcs_lastname>> keeps their word, or t...
  scene.text(`<br>"And I don't want your apologies. A ${((s as any).pcs_lastname ?? 0)} keeps their word, or their word is worth nothing."`);
  scene.text('Your eyes tear up a bit as your grandfather berates you. "Yes, sir," you mumble quietly.');
  // TODO-QSP: dynamic text: "I would rather you tell me flat-out if you do not want to help, <<$pcs_firstnam...
  scene.text(`"I would rather you tell me flat-out if you do not want to help, ${((s as any).pcs_firstname ?? 0)}. At least that makes you honest, even if lazy."`);
  scene.text('"Grandpa, I honestly just forg-" you begin, but he cuts you off.');
  scene.text('"Hush, child. I don\'t care for excuses. Now go on. Some of us have work to do."');
  scene.text('<br>You silently turn and walk away, feeling guilty.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterGrandmaDisapointment(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['disappointment'] = 0;
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = ((s as any).grandmaQW['help_amount'] ?? 0) - (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'lower', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandma.jpg');
  // TODO-QSP: dynamic text: Grandma frowns at you as you walk by. "<<$pcs_nickname>>, you said you would hel...
  scene.text(`Grandma frowns at you as you walk by. "${((s as any).pcs_nickname ?? 0)}, you said you would help me yesterday, and you did not."`);
  scene.text('You cringe as you remember what you told her you would do. "I\'m sorry, Grandma, I forgot all about it…"');
  scene.text('"I am an old woman, child. It is difficult for me to do many things I once could. But I can still do them if I know I have to."');
  scene.text('Feeling guilty, you look at the ground as she continues, "But it is even harder for me if I expected help and did not receive it."');
  scene.text('"Sorry, Grandma," you mumble again.');
  scene.text('She softens a little, finally. "It\'s okay, child," she says. "But it makes it harder for me to give you your allowance for sweets if you cannot follow through on your promises."');
  scene.text('"Yes, ma\'am," you nod.');
  scene.text('"All right, child," she says, patting your shoulder softly. "Go on now. I am sure you have things to do."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterFirstVisit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['first_visit'] = 1;
  qspCall(s, 'money', 'earn', 3000, 'cash');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/grandmahelp.jpg');
  // TODO-QSP: dynamic text: Upon entering the house, you let out a screech as you catch sight of your grandm...
  scene.text(`Upon entering the house, you let out a screech as you catch sight of your grandmother, throwing yourself at her, wrapping your arms around her neck. She embraces you tightly. She starts by saying "Dear ${((s as any).pcs_nickname ?? 0)}, you're only skin and bones, but don't worry, a few months here and you'll be looking your usual self again."`);
  scene.text('"But look at you, you sure have grown up. A young woman." she says proudly. She continues "Grandpa and I keep getting older and older and need some help around the house. What do you say youngling? You will not have to do much. Here\'s the deal, you lend us a helping hand on the farm as much as possible, and we will pay you for each chore you do. It will be a great life lesson, you will learn about hard work. What do you say?"');
  scene.text('"Of course I\'ll help out, Grandma." you answer.');
  // TODO-QSP: dynamic text: "I'm glad to hear that <<$pcs_nickname>>, here is little something anyways just ...
  scene.text(`"I'm glad to hear that ${((s as any).pcs_nickname ?? 0)}, here is little something anyways just for visiting," Grandma says and gives you ${qspFunc(s, 'money', 'string_profit', 3000)}.`);
  scene.text('"Thanks Babushka!" you kiss her on the cheek before you head on out.');
  if ((((s as any).kanikuli ?? 0) === 4  ||  ((s as any).kanikuli ?? 0) === 5)  &&  ((((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7)  ||  (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) <= 25))) {
    scene.text('"Will you be staying with us during the summer or will you be traveling back and forth with your parents?" she asks.');
    scene.actions([
      { label: 'Stay with your grandparents', handler: (st: GameState) => {
    (st as any).gadstay = 1;
  }, goto: ['gad_gphouse', 'main'] },
      { label: 'Stay in Pavlovsk', handler: (st: GameState) => {
    (s as any).gadstay = 0;
    qspCall(s, 'homes_properties', 'give_access', 'parents_home');
    qspCall(s, 'homes_properties', 'set_home', 'parents_home');
  }, goto: ['gad_gphouse', 'main'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['gad_gphouse', 'main'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuickStart(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['first_visit'] = 1;
  qspCall(s, 'money', 'earn', 3000, 'cash');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if ((((s as any).kanikuli ?? 0) === 4  ||  ((s as any).kanikuli ?? 0) === 5)  &&  ((((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7)  ||  (((s as any).month ?? 0) === 8  &&  ((s as any).day ?? 0) <= 25))) {
    (s as any).gadstay = 1;
  }
  scene.actions([{ label: 'Continue', goto: ['gad_gphouse', 'main'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterChoresPay(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['last_month_paid'] = ((s as any).month ?? 0);
  if (((s as any).grandmaQW ?? 0)?.['help_amount'] > 0) {
    // TODO-QSP: gs 'money', 'earn', (grandmaQW['help_amount'] * 25), 'cash'
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/grandmahelp.jpg');
  scene.text('Your grandmother calls you over to her, "I imagine you\'ve spent all your allowance so lets see what we can do to give you some more pocket money, hmmmm?" she says as she opens her purse.');
  if (((s as any).grandmaQW ?? 0)?.['help_amount'] > 0) {
    // TODO-QSP: dynamic text: "You were quite helpful over the last few weeks, so here's <<$func('money', 'str...
    scene.text(`"You were quite helpful over the last few weeks, so here's ${qspFunc(s, 'money', 'string_profit', ((s as any).grandmaQW ?? {})?.['help_amount'] * 25)}." She starts to hand you the money, then lifts it away with a stern look, "But you can always do more work, young lady!" she scolds gently then smiles as she gives you the money.`);
    if (!(s as any).grandmaQW) (s as any).grandmaQW = {}; (s as any).grandmaQW['help_amount'] = 0;
  } else {
    scene.text('"We really could have used your help last month," she says mournfully as she counts out some bills. "Maybe this month you\'ll do more to help us?" She looks at you sternly as she puts her purse away.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterMiraVisit(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['guestday'] = ((s as any).daystart ?? 0) + 1;
  if (!(s as any).MiraVars) (s as any).MiraVars = {}; (s as any).MiraVars['guest'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('You notice Mira coming towards your grandparents home.');
  // TODO-QSP: dynamic text: You step out on the porch and greet Mira. She replies "Hi <<$pcs_nickname>>, I w...
  scene.text(`You step out on the porch and greet Mira. She replies "Hi ${((s as any).pcs_nickname ?? 0)}, I was really bored being all alone at home. Do you want to do something?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_gphouse', 'main'] },
  ]);
  scene.build();
}

function enterVillagecatString(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 8) {
    (s as any).temp = Math.floor(Math.random() * 10) + 0;
    if ((!((s as any).temp ?? 0))) {
      scene.text('In a box filled with scraps of cloth, <a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a>is curled up, sleeping peacefully.');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).sunWeather ?? 0) === 1) {
      (s as any).temp = Math.floor(Math.random() * 3) + 0;
      if (((s as any).temp ?? 0) === 1) {
        scene.text('<a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> is busy cleaning himself with his tongue on the table by the window.');
      }
      if (((s as any).temp ?? 0) === 2) {
        scene.text('<a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> lies lazily on the table by the window, soaking up some sunshine rays.');
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12  &&  (!((s as any).sunWeather ?? 0))) {
        (s as any).temp = Math.floor(Math.random() * 2) + 0;
        if ((!((s as any).temp ?? 0))) {
          scene.text('In a box filled with scraps of cloth, <a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> is curled up, sleeping peacefully.');
        }
        if (((s as any).temp ?? 0) === 1) {
          scene.text('On the table by the window, <a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> stares in disgust at the rain outside.');
        }
      } else {
        if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 18) {
          (s as any).temp = Math.floor(Math.random() * 6) + 0;
          if (((s as any).temp ?? 0) === 3) {
            scene.text('Next to the table by the window, <a href="exec:feedcat = 1 & gt \'gad_gphouse\',\'villagecat\'">Boniface</a> stretches and meows loudly. It\'s time for dinner.');
          }
          if (((s as any).temp ?? 0) === 4  &&  ((s as any).sunWeather ?? 0) === 1) {
            scene.text('<a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> lies lazily on the table by the window, soaking up some sunshine rays.');
          }
          if (((s as any).temp ?? 0) === 4  &&  (!((s as any).sunWeather ?? 0))) {
            scene.text('In a box filled with scraps of cloth, <a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> is curled up, sleeping peacefully.');
          }
        } else {
          if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).catout ?? 0) !== 2) {
            (s as any).temp = Math.floor(Math.random() * 4) + 0;
            if ((!((s as any).temp ?? 0))) {
              scene.text('<a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> is stalking around the main floor, looking for a nice juicy mouse to play with.');
            }
            if (((s as any).temp ?? 0) === 1  &&  (!((s as any).catout ?? 0))) {
              (s as any).catout = 1;
              scene.text('<a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> twines around your ankles, then goes to the door, meowing pitifully.');
            }
          } else {
            if (((s as any).hour ?? 0) >= 22) {
              (s as any).temp = Math.floor(Math.random() * 3) + 0;
              if (((s as any).temp ?? 0) === 1) {
                scene.text('In a box filled with scraps of cloth, <a href="exec: gt \'gad_gphouse\', \'villagecat\'">Boniface</a> is curled up, sleeping peacefully.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVillagecat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/villcat.jpg');
  scene.text('Your grandparents\' fat tomcat, Boniface, is aware of you approaching him, even though his eyes are closed. He tracks you with his ears and simply ignores you.');
  if (((s as any).feedcat ?? 0) === 1) {
    scene.actions([
      { label: 'Feed Boniface', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    (s as any).feedcat = 2;
    scene.img('images/locations/gadukino/grandparents/feedboniface.mp4');
    scene.text('When Boniface sees you moving towards the cupboard, he jumps off the table and runs to his food dish. He obviously feels that you are moving far too slowly and rattles his bowl to make sure you understand that he is starving while you dawdle.');
    scene.actions([
      { label: 'Continue', goto: ['gad_gphouse', 'entry'] },
    ]);
  } },
    ]);
  }
  if (((s as any).catout ?? 0) === 1) {
    scene.actions([
      { label: 'Let Boniface Out', handler: (st: GameState) => {
    if ((!((s as any).sunWeather ?? 0))) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      scene.text('You open the door for Boniface, who saunters around you only to stop in the doorway as he becomes aware that it is raining. He glares up at you as if the rain was your fault. He stares out into the wet for another moment, then sedately turns around and returns to his box.');
      scene.actions([
        { label: 'Continue', goto: ['gad_gphouse', 'entry'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'stat', '');
      (s as any).catout = 2;
      scene.text('You open the door for Boniface, who saunters around you only to stop in the doorway as he stops to consider if he really wants to go outside. After considering all the pros and cons, he finally decides to go out.');
      scene.actions([
        { label: 'Continue', goto: ['gad_gphouse', 'entry'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Boniface alone', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gad_gphouse', 'entry'] },
    { label: 'Pet Boniface', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/villcat1.jpg');
    scene.text('You gently pet Boniface, giving him a good scratch behind the ears. You hear him start to purr. As soon as you stop scratching him, the purring stops too. That lazy bastard… he\'s living the good life!');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gad_gphouse', 'entry'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGrandmaLeaveEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you\'re leaving the house, you grandmother gives you a big hug and tells you to be safe.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGrandpaLeaveEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you\'re leaving the house, you grandfather tells watch out for yourself and be safe.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'setup':
      enterSetup(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'family_trip':
      enterFamilyTrip(s, scene);
      break;
    case 'family_trip_ask_go_home':
      enterFamilyTripAskGoHome(s, scene);
      break;
    case 'to_pavlovsk':
      enterToPavlovsk(s, scene);
      break;
    case 'to_gadukino':
      enterToGadukino(s, scene);
      break;
    case 'enter_events':
      enterEnterEvents(s, scene);
      break;
    case 'normal_events':
      enterNormalEvents(s, scene);
      break;
    case 'nudity_trouble_limit':
      enterNudityTroubleLimit(s, scene);
      break;
    case 'school_start':
      enterSchoolStart(s, scene);
      break;
    case 'was_lost_yesterday':
      enterWasLostYesterday(s, scene);
      break;
    case 'nudity_trouble_kicked':
      enterNudityTroubleKicked(s, scene);
      break;
    case 'nudity_trouble':
      enterNudityTrouble(s, scene);
      break;
    case 'grandpa_disapointment':
      enterGrandpaDisapointment(s, scene);
      break;
    case 'grandma_disapointment':
      enterGrandmaDisapointment(s, scene);
      break;
    case 'first_visit':
      enterFirstVisit(s, scene);
      break;
    case 'quick_start':
      enterQuickStart(s, scene);
      break;
    case 'chores_pay':
      enterChoresPay(s, scene);
      break;
    case 'mira_visit':
      enterMiraVisit(s, scene);
      break;
    case 'villagecat_string':
      enterVillagecatString(s, scene);
      break;
    case 'villagecat':
      enterVillagecat(s, scene);
      break;
    case 'grandma_leave_event':
      enterGrandmaLeaveEvent(s, scene);
      break;
    case 'grandpa_leave_event':
      enterGrandpaLeaveEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_gphouse: LocationDef = {
  name: 'gad_gphouse',
  title: 'Your mother, Natasha <<$pcs_lastname>>',
  region: 'gadukino',
  locationType: 'public_indoors',
  locclass: 'kitchen',
  enter: enter,
};
