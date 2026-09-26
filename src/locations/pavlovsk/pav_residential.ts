import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 0;
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'pav_residential', '');
  (s as any).location_type = 'public_outdoors';
  (s as any).region = 'pav';
  (s as any).locclass = undefined;
  (s as any).alkoblock = 0;
  (s as any).boynumBlock = 0;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).hour ?? 0) >= 8  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).cumloc ?? 0)[11] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).npcdaycheck ?? 0)[54] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_residential', 'meet_misha_street_events');
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspGoto(s, 'pav_residential', 'meet_tatiana_mainQW');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).AndRev ?? 0) === 1  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 2)  &&  (Math.floor(Math.random() * 100) + 1) >= 90  &&  ((s as any).AndRevstart ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_residential', 'boilerroom_revenge_event');
  }
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9) {
    if (((s as any).week ?? 0) === 7) {
      qspGoto(s, 'pav_residential', 'bely_payday_event');
    } else {
      if (((s as any).belgangPayWeek ?? 0) >= 300  &&  ((s as any).belgangProstitute ?? 0) === 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        qspGoto(s, 'pav_residential', 'bely_workofdebt_event');
      }
    }
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) <= 3  ||  ((s as any).month ?? 0) >= 11) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>Pavlovsk</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/pavreswinter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavreswintern.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/pavres.jpg');
    } else {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'image') {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/pavreswinter.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pavreswintern.jpg');
      }
    } else {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/pavres.jpg');
      } else {
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
      }
    }
  }
  scene.text('<br>The residential area of the town. This area is suburban with more modern houses, dusty roads and pockets of overgrown vegetation stretching out far and wide, but some would say that just adds to the town\'s rustic charm. Apart from the old <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/palace/pav_palace.jpg\u0027; return s; }); return false;">Imperial palace</a> built by Catherine the Great, with its surrounding gardens and forest, and the recently remodeled <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/fortress/bip_hotel.jpg\u0027; return s; }); return false;">Bip fortress</a>, everything else is relatively modern.');
  scene.text('<br>Even from here, you can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_church\u0027, \u0027start\u0027); return false;">Church of St. Nikolas</a>, the tallest building in town.');
  if (((s as any).flag_rape_1 ?? 0) === 1) {
    (s as any).flag_rape_1 = 0;
    (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
    (s as any).rape_day = ((s as any).daystart ?? 0);
    scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
  } else {
    if (((s as any).flag_rape_1 ?? 0) === 2) {
      (s as any).flag_rape_1 = 0;
      (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
      (s as any).rape_day = ((s as any).daystart ?? 0);
      scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually enjoyed it a little. All in all, you\'re not too worried about what happened.');
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] > ((s as any).rape_count ?? 0)) {
        (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
        (s as any).rape_day = ((s as any).daystart ?? 0);
        if (qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') > 2) {
          scene.text('You feel great after having sex, and don\'t understand why they didn\'t just ask. Silly man.');
        } else {
          if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
            scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually had fun and enjoyed it. All in all, you\'re not too worried about what happened. ');
          } else {
            scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
          }
        }
      }
    }
  }
  if (((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) > 16)  ||  ((s as any).month ?? 0) >= 10)  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0)) {
    scene.text('You see various posters for the mayoral candidates plastered almost everywhere. The ones that stand out to you urge you to vote for Boris Barlovskay, Albina\'s father.');
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0  &&  ((((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) > 18)  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).hour ?? 0) >= 14) {
    qspGoto(s, 'albina_election_events', 'start');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 37) {
    ((s as any).locat = (s as any).locat ?? {})['A23_save1'] = 1;
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['walk_of_shame'] !== ((s as any).daystart ?? 0)) {
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['walk_of_shame'] = ((s as any).daystart ?? 0);
      scene.text('As you walk down the street, you spot a rather disheveled looking <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027albina_events\u0027, \u0027walk_of_shame\u0027); return false;">Albina</a> ducking down an alleyway, as if she doesn\'t want to be seen.');
    }
  }
  if ((Math.floor(Math.random() * 5) + 1) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      scene.text('<br>You catch people staring at you intently, as if they\'re supposed to know who you are but can\'t quite place you. You sincerely hope they don\'t realize your promiscuous adventures are the reason why they recognize you, but the occasional person chuckling and pointing at you crushes those hopes, and you quickly keep walking before they get a chance to say anything.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('<br>People look at you with lewd grins on their faces, some of them even making vulgar gestures. Your reputation appears to be the talk of the town.');
      } else {
        scene.text('<br>Everywhere you go, people recognize you as a whore. Some even come over and slap you on the ass, claiming they know you like it or asking to \'sample your goods\'. An elderly woman sitting on a bench calls out to you, loudly calling you a slut and a whore. You hide your face and run away as fast as you can before she can draw too much attention to you.');
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked in the street.`);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('<br>At the end of the street is a small <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027pav_residential\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a> selling a variety of items such as cigarettes, magazines, snacks, drinks and even themes for your phone.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).schoolname = 'the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027gschool_grounds\u0027, \u0027main\u0027); return false;">local school</a>.';
  } else {
    (s as any).schoolname = 'your old school.';
  }
  scene.text(`<br>In the center of Pavlovsk is the town square, which features the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(/u0027pav_commcenter/u0027, /u0027/u0027); return false;">community center</a>, a popular hotspot for local teenagers to hang out after a long day at ${((s as any).schoolname ?? '')} Also nearby is the drab grey building of Pavlovsk's dilapidated public <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=4; return s; }); window.__gameStore.getState().doGoto(/u0027pav_pool/u0027, /u0027building/u0027); return false;">swimming pool</a>.`);
  scene.text('Connected to the town center is the old palace grounds, which have been turned into a large <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pav_park\u0027, \u0027start\u0027); return false;">public park</a>.');
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pav_lake\u0027, \u0027\u0027); return false;">lake</a> is also nearby, which means the area can get quite busy with people coming to swim in the summer or skate in the winter.');
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027dimaHome\u0027, \u0027home\u0027); return false;">Dimka</a> lives in one of the fancier houses in town.');
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
      scene.text('<br><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027FedorEv4\u0027, \u0027Home Entrance\u0027); return false;">Fedor</a> lives in a house nearby.');
    }
    if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027IgorHome\u0027, \u0027home\u0027); return false;">Igor</a> lives in one of the fancier houses in town.');
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
      scene.text('Nearby is a large house where the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); return false;">Meynold twins</a> live.');
    }
    if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027LariskaHome\u0027, \u0027front_door\u0027); return false;">Lariska</a> lives about 10 minutes away from here.');
    }
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027Zvereva_house\u0027, \u0027front_door\u0027); return false;">Christina</a> lives in an expensive house near here.');
    }
    if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027albinahome\u0027, \u0027door_bell\u0027); return false;">Albina</a> lives in one of the few luxurious mansions Pavlovsk has to offer.');
    }
    if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027soniahome\u0027, \u0027home\u0027); return false;">Sonia\'s</a> house is up through a garden pathway to a well cared for grey, wooden-clad house.');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
      qspCall(s, 'show_table', 'Fancier house of <a href="exec:minut += 10 & gt \'dimaHome\', \'home\'">Dimka Nosov</a>', '3');
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
      qspCall(s, 'show_table', 'A nearby house of <a href="exec: minut += 1 & gt \'FedorEv4\', \'Home Entrance\'">Fedor</a>', '3');
    }
    if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
      qspCall(s, 'show_table', 'Fancier house of <a href="exec:minut += 10 & gt \'IgorHome\', \'home\'">Igor Kruglov</a>', '3');
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
      qspCall(s, 'show_table', 'The house of the <a href="exec:minut += 10 & gt\'mey_home\', \'door\'">Meynold twins</a>', '3');
    }
    if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
      qspCall(s, 'show_table', 'House of <a href="exec:minut += 10 & gt \'LariskaHome\', \'front_door\'" >Lariska Gruzdev</a> in the richer part of town', '3');
    }
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
      qspCall(s, 'show_table', '<br><a href="exec: gt \'Zvereva_house\', \'front_door\'">Christina</a> lives in an expensive house near here.', '3');
    }
    if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
      qspCall(s, 'show_table', 'A luxurious mansion that\'s home to <a href="exec:minut += 10 & gt \'albinahome\',\'door_bell\'">Albina Barlovskaya</a>', '3');
    }
    if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
      qspCall(s, 'show_table', 'A grey wooden-clad house that\'s home to <a href="exec:minut += 10 & gt \'soniahome\',\'home\'">Sonia Ivanko</a>', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table BORDER=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 9) {
    scene.actions([
      { label: '<b>Go to school</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  }
  if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31  &&  ((s as any).hour ?? 0) > 14  &&  ((s as any).hour ?? 0) <= 18) {
    scene.actions([
      { label: '<b>Go to the New Year\'s party at Dimka\'s house</b>', handler: (st: GameState) => {
    (st as any).InvitationToDimkaNYparty = undefined;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['sny', '3'] },
    ]);
  } else {
    if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).month ?? 0) !== 12) {
      (s as any).InvitationToDimkaNYparty = undefined;
    }
  }
  if ((((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 4)  &&  ((s as any).succubusQW ?? 0) === 14  &&  ((s as any).suchuntday ?? 0) !== ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSuccubusHuntAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'lover', 'lover_events');
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  scene.actions([
    { label: 'Walk to the Five Eight estate (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the Commercial area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Industrial region (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the park (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_park', 'start'] },
    { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'community'] },
    { label: 'Walk to the train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to Pushkin (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 0;
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'pav_residential', '');
  (s as any).location_type = 'public_outdoors';
  (s as any).region = 'pav';
  (s as any).locclass = undefined;
  (s as any).alkoblock = 0;
  (s as any).boynumBlock = 0;
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).hour ?? 0) >= 8  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).cumloc ?? 0)[11] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).npcdaycheck ?? 0)[54] !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_residential', 'meet_misha_street_events');
  }
  if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    qspGoto(s, 'pav_residential', 'meet_tatiana_mainQW');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).AndRev ?? 0) === 1  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 2)  &&  (Math.floor(Math.random() * 100) + 1) >= 90  &&  ((s as any).AndRevstart ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'pav_residential', 'boilerroom_revenge_event');
  }
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9) {
    if (((s as any).week ?? 0) === 7) {
      qspGoto(s, 'pav_residential', 'bely_payday_event');
    } else {
      if (((s as any).belgangPayWeek ?? 0) >= 300  &&  ((s as any).belgangProstitute ?? 0) === 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        qspGoto(s, 'pav_residential', 'bely_workofdebt_event');
      }
    }
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) <= 3  ||  ((s as any).month ?? 0) >= 11) {
      if (((s as any).hour ?? 0) >= 8) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8) {
      }
    }
  }
  qspCall(s, 'random_events', '');
  scene.text('<center><h2>Pavlovsk</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/pavreswinter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavreswintern.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/locations/pavlovsk/pavres.jpg');
    } else {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    }
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'image') {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/pavreswinter.jpg');
      } else {
        scene.img('images/locations/pavlovsk/pavreswintern.jpg');
      }
    } else {
      if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/pavres.jpg');
      } else {
        scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/pavresn_` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
      }
    }
  }
  scene.text('<br>The residential area of the town. This area is suburban with more modern houses, dusty roads and pockets of overgrown vegetation stretching out far and wide, but some would say that just adds to the town\'s rustic charm. Apart from the old <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/palace/pav_palace.jpg\u0027; return s; }); return false;">Imperial palace</a> built by Catherine the Great, with its surrounding gardens and forest, and the recently remodeled <a href="#" onclick="window.__gameStore.setState((s) => { s.viewImage = \u0027images/locations/pavlovsk/fortress/bip_hotel.jpg\u0027; return s; }); return false;">Bip fortress</a>, everything else is relatively modern.');
  scene.text('<br>Even from here, you can see the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027pav_church\u0027, \u0027start\u0027); return false;">Church of St. Nikolas</a>, the tallest building in town.');
  if (((s as any).flag_rape_1 ?? 0) === 1) {
    (s as any).flag_rape_1 = 0;
    (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
    (s as any).rape_day = ((s as any).daystart ?? 0);
    scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
  } else {
    if (((s as any).flag_rape_1 ?? 0) === 2) {
      (s as any).flag_rape_1 = 0;
      (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
      (s as any).rape_day = ((s as any).daystart ?? 0);
      scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually enjoyed it a little. All in all, you\'re not too worried about what happened.');
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] > ((s as any).rape_count ?? 0)) {
        (s as any).rape_count = (((s as any).stat ?? 0)?.['rape_count']);
        (s as any).rape_day = ((s as any).daystart ?? 0);
        if (qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') > 2) {
          scene.text('You feel great after having sex, and don\'t understand why they didn\'t just ask. Silly man.');
        } else {
          if (((s as any).arch_vars ?? 0)?.['main_active'] === 'bimbo') {
            scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually had fun and enjoyed it. All in all, you\'re not too worried about what happened. ');
          } else {
            scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
          }
        }
      }
    }
  }
  if (((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) > 16)  ||  ((s as any).month ?? 0) >= 10)  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0)) {
    scene.text('You see various posters for the mayoral candidates plastered almost everywhere. The ones that stand out to you urge you to vote for Boris Barlovskay, Albina\'s father.');
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0  &&  ((((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) > 18)  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).hour ?? 0) >= 14) {
    qspGoto(s, 'albina_election_events', 'start');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 37) {
    ((s as any).locat = (s as any).locat ?? {})['A23_save1'] = 1;
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['walk_of_shame'] !== ((s as any).daystart ?? 0)) {
      ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['walk_of_shame'] = ((s as any).daystart ?? 0);
      scene.text('As you walk down the street, you spot a rather disheveled looking <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027albina_events\u0027, \u0027walk_of_shame\u0027); return false;">Albina</a> ducking down an alleyway, as if she doesn\'t want to be seen.');
    }
  }
  if ((Math.floor(Math.random() * 5) + 1) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
      scene.text('<br>You catch people staring at you intently, as if they\'re supposed to know who you are but can\'t quite place you. You sincerely hope they don\'t realize your promiscuous adventures are the reason why they recognize you, but the occasional person chuckling and pointing at you crushes those hopes, and you quickly keep walking before they get a chance to say anything.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('<br>People look at you with lewd grins on their faces, some of them even making vulgar gestures. Your reputation appears to be the talk of the town.');
      } else {
        scene.text('<br>Everywhere you go, people recognize you as a whore. Some even come over and slap you on the ass, claiming they know you like it or asking to \'sample your goods\'. An elderly woman sitting on a bench calls out to you, loudly calling you a slut and a whore. You hide your face and run away as fast as you can before she can draw too much attention to you.');
      }
    }
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> is parked in the street.`);
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
    scene.text('<br>At the end of the street is a small <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: $loc = \u0027pav_residential\u0027 */ return s; }); window.__gameStore.getState().doGoto(\u0027kiosk\u0027, \u0027start\u0027); return false;">kiosk</a> selling a variety of items such as cigarettes, magazines, snacks, drinks and even themes for your phone.');
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).schoolname = 'the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(\u0027gschool_grounds\u0027, \u0027main\u0027); return false;">local school</a>.';
  } else {
    (s as any).schoolname = 'your old school.';
  }
  scene.text(`<br>In the center of Pavlovsk is the town square, which features the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=2; return s; }); window.__gameStore.getState().doGoto(/u0027pav_commcenter/u0027, /u0027/u0027); return false;">community center</a>, a popular hotspot for local teenagers to hang out after a long day at ${((s as any).schoolname ?? '')} Also nearby is the drab grey building of Pavlovsk's dilapidated public <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=4; return s; }); window.__gameStore.getState().doGoto(/u0027pav_pool/u0027, /u0027building/u0027); return false;">swimming pool</a>.`);
  scene.text('Connected to the town center is the old palace grounds, which have been turned into a large <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pav_park\u0027, \u0027start\u0027); return false;">public park</a>.');
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027pav_lake\u0027, \u0027\u0027); return false;">lake</a> is also nearby, which means the area can get quite busy with people coming to swim in the summer or skate in the winter.');
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027dimaHome\u0027, \u0027home\u0027); return false;">Dimka</a> lives in one of the fancier houses in town.');
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
      scene.text('<br><a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=1; return s; }); window.__gameStore.getState().doGoto(\u0027FedorEv4\u0027, \u0027Home Entrance\u0027); return false;">Fedor</a> lives in a house nearby.');
    }
    if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027IgorHome\u0027, \u0027home\u0027); return false;">Igor</a> lives in one of the fancier houses in town.');
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
      scene.text('Nearby is a large house where the <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); return false;">Meynold twins</a> live.');
    }
    if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027LariskaHome\u0027, \u0027front_door\u0027); return false;">Lariska</a> lives about 10 minutes away from here.');
    }
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
      scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027Zvereva_house\u0027, \u0027front_door\u0027); return false;">Christina</a> lives in an expensive house near here.');
    }
    if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027albinahome\u0027, \u0027door_bell\u0027); return false;">Albina</a> lives in one of the few luxurious mansions Pavlovsk has to offer.');
    }
    if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
      scene.text('<a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=10; return s; }); window.__gameStore.getState().doGoto(\u0027soniahome\u0027, \u0027home\u0027); return false;">Sonia\'s</a> house is up through a garden pathway to a well cared for grey, wooden-clad house.');
    }
  } else {
    (s as any).st_count = 0;
    (s as any).show_table = '';
    if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  (!((s as any).DimaRudeBlock ?? 0))) {
      qspCall(s, 'show_table', 'Fancier house of <a href="exec:minut += 10 & gt \'dimaHome\', \'home\'">Dimka Nosov</a>', '3');
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
      qspCall(s, 'show_table', 'A nearby house of <a href="exec: minut += 1 & gt \'FedorEv4\', \'Home Entrance\'">Fedor</a>', '3');
    }
    if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
      qspCall(s, 'show_table', 'Fancier house of <a href="exec:minut += 10 & gt \'IgorHome\', \'home\'">Igor Kruglov</a>', '3');
    }
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
      qspCall(s, 'show_table', 'The house of the <a href="exec:minut += 10 & gt\'mey_home\', \'door\'">Meynold twins</a>', '3');
    }
    if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
      qspCall(s, 'show_table', 'House of <a href="exec:minut += 10 & gt \'LariskaHome\', \'front_door\'" >Lariska Gruzdev</a> in the richer part of town', '3');
    }
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
      qspCall(s, 'show_table', '<br><a href="exec: gt \'Zvereva_house\', \'front_door\'">Christina</a> lives in an expensive house near here.', '3');
    }
    if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
      qspCall(s, 'show_table', 'A luxurious mansion that\'s home to <a href="exec:minut += 10 & gt \'albinahome\',\'door_bell\'">Albina Barlovskaya</a>', '3');
    }
    if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
      qspCall(s, 'show_table', 'A grey wooden-clad house that\'s home to <a href="exec:minut += 10 & gt \'soniahome\',\'home\'">Sonia Ivanko</a>', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      scene.text(`<table BORDER=1>${((s as any).show_table ?? '')}</tr></table>`);
    }
  }
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 9) {
    scene.actions([
      { label: '<b>Go to school</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  }
  if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).month ?? 0) === 12  &&  ((s as any).day ?? 0) === 31  &&  ((s as any).hour ?? 0) > 14  &&  ((s as any).hour ?? 0) <= 18) {
    scene.actions([
      { label: '<b>Go to the New Year\'s party at Dimka\'s house</b>', handler: (st: GameState) => {
    (st as any).InvitationToDimkaNYparty = undefined;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['sny', '3'] },
    ]);
  } else {
    if (((s as any).InvitationToDimkaNYparty ?? 0) === 1  &&  ((s as any).month ?? 0) !== 12) {
      (s as any).InvitationToDimkaNYparty = undefined;
    }
  }
  if ((((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 4)  &&  ((s as any).succubusQW ?? 0) === 14  &&  ((s as any).suchuntday ?? 0) !== ((s as any).daystart ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetSuccubusHuntAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  qspCall(s, 'lover', 'lover_events');
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  scene.actions([
    { label: 'Walk to the Five Eight estate (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Walk to the Commercial area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Industrial region (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the park (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_park', 'start'] },
    { label: 'Walk to the bus station (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['bus', 'community'] },
    { label: 'Walk to the train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to Pushkin (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pushkin', ''] },
  ]);
  scene.build();
}

function enterSetSuccubusHuntAct(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Go hunting near the community center (this can take a lot of time)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (40 + (Math.floor(Math.random() * 21) + 0) - 5 * ((st as any).succublvl ?? 0));
    qspCall(st, 'stat', '');
    if ((Math.floor(Math.random() * 8) + 0) - ((st as any).succublvl ?? 0) < 2) {
      qspGoto(st, 'succubus', 'pavResfeed');
    } else {
      scene.text('<center><h2>Pavlovsk</h2></center>');
      if (((st as any).month ?? 0) >= 11  ||  ((st as any).month ?? 0) <= 3) {
        if (((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) <= 21) {
          scene.img('images/locations/pavlovsk/pavreswinter.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavreswintern.jpg');
        }
      } else {
        if (((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) <= 21) {
          scene.img('images/locations/pavlovsk/pavres.jpg');
        } else {
          scene.img('images/locations/pavlovsk/pavresn.jpg');
        }
      }
      scene.text('The disco is in full swing, which means a lot of adolescents going to and from the community center. You find a spot down the street to lie in wait for your prey.');
      scene.text('You hide for a few minutes, watching groups of students pass by as you wait for a lone victim to pounce on. You lie in wait for almost thirty minutes thinking about the meal ahead, your hand finding its way between your legs a few times.');
      scene.text('You are unsuccessful and fail to find a suitable victim.');
      scene.actions([
        { label: 'Return', goto: ['pav_residential', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMeetMishaStreetEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).npcdaycheck = (s as any).npcdaycheck ?? {})[54] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/pavreswinter.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavreswintern.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/pavres.jpg');
    } else {
      scene.img('images/locations/pavlovsk/pavresn.jpg');
    }
  }
  if ((!((s as any).sosedknow ?? 0))) {
    (s as any).sosedknow = 1;
    scene.text('As you walk through Pavlovsk, someone calls out to you and you turn around and see uncle Misha, your neighbor.');
    scene.text('He looks at your face in amazement. "Your face looks like a mess! What is that?"');
    scene.text('You blush and hesitate, trying to inconspicuously wipe the sperm off your face. It\'s obviously not working; he already noticed and his eyes widen when he realizes what it is.');
    scene.text('"I see. Looks like you had fun," he grins and continues on his way.');
  } else {
    scene.text('Once again, you run into uncle Misha, your neighbor. He notices the sperm on your face.');
    scene.text('"Again? Looks like you\'ve been busy, girl. Nice look, it suits you."');
  }
  scene.actions([
{ label: 'Continue', goto: ['pav_residential', ''] },
]);
  return;
  scene.build();
}

function enterMeetTatianaMainQW(s: GameState, scene: SceneBuilder): void {
  (s as any).mainQW = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  scene.text('You see Tatiana and Gustav at the entrance to the apartment building. Tatiana adjusts her glasses and looks around, while Gustav seems to have his head in the clouds, not really paying attention to his surroundings. His tattoos are not visible.');
  scene.text('Tatiana closely looks around you. "I felt a burst of energy. Were you attacked by a mage?"');
  scene.actions([
{ label: 'No?', goto: ['mainQW', ''] },
]);
  return;
  scene.build();
}

function enterBoilerroomRevengeEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/lab/event/main.jpg');
  scene.text('It\'s late and you\'re hurrying to get home when you\'re suddenly grabbed from behind. A large hand covers your mouth and you\'re unable to scream as a powerful arm wraps around you and lifts you from your feet. You\'re dragged into an alleyway between two buildings and the arm around you loosens for just a minute.');
  scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/lab/event/main.jpg');
    scene.text('Before you can attempt to escape, you feel something sting your arm and your body relaxes against your will. Just before your eyes close and you lose consciousness, you hear a familiar voice rasp in your ear. "Now you\'ll pay for breaking my nose, you little slut."');
    scene.actions([
      { label: 'Continue', goto: ['boilerroom', 'start'] },
    ]);
  } },
]);
  return;
  scene.build();
}

function enterBelyPaydayEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).daybelisex = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
  scene.text('As you walk through Pavlovsk, Vadim Bely\'s Mitsubishi Pajero stops near you.');
  scene.actions([
{ label: 'Go to the jeep', goto: ['belgang', 'payday'] },
]);
  return;
  scene.build();
}

function enterBelyWorkofdebtEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).daybelisex = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/belyjeep.jpg');
  scene.text('You see the by now familiar old Mitsubishi Pajero driving through the streets with Vadim Bely and his gang inside. Your heart skips a beat as you notice one of them pointing at you and they pull over.');
  scene.actions([
    { label: 'Go to the jeep', goto: ['belgang', 'workofdebt'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'set_succubus_hunt_act':
      enterSetSuccubusHuntAct(s, scene);
      break;
    case 'meet_misha_street_events':
      enterMeetMishaStreetEvents(s, scene);
      break;
    case 'meet_tatiana_mainQW':
      enterMeetTatianaMainQW(s, scene);
      break;
    case 'boilerroom_revenge_event':
      enterBoilerroomRevengeEvent(s, scene);
      break;
    case 'bely_payday_event':
      enterBelyPaydayEvent(s, scene);
      break;
    case 'bely_workofdebt_event':
      enterBelyWorkofdebtEvent(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_residential: LocationDef = {
  name: 'pav_residential',
  title: '<center><h2>Pavlovsk</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.'],
  enter: enter,
};
