import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start') {
    (s as any).phone_off = 0;
    (s as any).music_loop = 0;
    qspCall(s, 'core_library', 'setloc', 'pav_residential', '');
    (s as any).alkoblock = 0;
    (s as any).boynumBlock = 0;
    qspCall(s, 'schedule', 'A23');
    qspCall(s, 'stat', '');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).hour ?? 0) >= 8  ||  ((s as any).hour ?? 0) < 23)  &&  ((s as any).cumloc ?? 0)[11] === 1  &&  Math.floor(Math.random() * 4) + 0 === 0  &&  ((s as any).npcdaycheck ?? 0)[54] !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['pav_residential', 'meet_misha_street_events'] }]);
    }
    if (((s as any).pcs_magik ?? 0) >= 1  &&  ((s as any).mainQW ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      scene.actions([{ label: 'Continue', goto: ['pav_residential', 'meet_tatiana_mainQW'] }]);
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).AndRev ?? 0) === 1  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 2)  &&  Math.floor(Math.random() * 100) + 1 >= 90  &&  ((s as any).AndRevstart ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['pav_residential', 'boilerroom_revenge_event'] }]);
    }
    if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).daybelisex ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 9) {
      if (((s as any).week ?? 0) === 7) {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', 'bely_payday_event'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['pav_residential', 'bely_workofdebt_event'] }]);
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
        scene.img('images/locations/pavlovsk/pavresn_\'+ rand(1, 2) +\'.jpg');
      }
    }
    scene.text('<br>The residential area of the town. This area is suburban with more modern houses, dusty roads and pockets of overgrown vegetation stretching out far and wide, but some would say that just adds to the town\'s rustic charm. Apart from the old <a href="exec:view\'images/locations/pavlovsk/palace/pav_palace.jpg\'">Imperial palace</a> built by Catherine the Great, with its surrounding gardens and forest, and the recently remodeled <a href="exec:view\'images/locations/pavlovsk/fortress/bip_hotel.jpg\'">Bip fortress</a>, everything else is relatively modern.');
    // TODO-QSP: dynamic text: <br>Even from here, you can see the <a href="exec:minut += 1 & gt 'pav_church','...
    scene.text('<br>Even from here, you can see the <a href="exec:minut += 1 & gt \'pav_church\',\'start\'">Church of St. Nikolas</a>, the tallest building in town.');
    if (((s as any).flag_rape_1 ?? 0) === 1) {
      (s as any).flag_rape_1 = 0;
      (s as any).rape_count = ((s as any).stat ?? 0)?.['rape_count'];
      (s as any).rape_day = ((s as any).daystart ?? 0);
      scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
    } else {
      (s as any).flag_rape_1 = 0;
      (s as any).rape_count = ((s as any).stat ?? 0)?.['rape_count'];
      (s as any).rape_day = ((s as any).daystart ?? 0);
      scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually enjoyed it a little. All in all, you\'re not too worried about what happened.');
      if (((s as any).stat ?? 0)?.['rape_count'] > ((s as any).rape_count ?? 0)) {
        (s as any).rape_count = ((s as any).stat ?? 0)?.['rape_count'];
        (s as any).rape_day = ((s as any).daystart ?? 0);
        if (qspFunc(s, 'archetypes', 'get_lvl', 'bimbo') > 2) {
          scene.text('You feel great after having sex, and don\'t understand why they didn\'t just ask. Silly man.');
        } else {
          scene.text('Coming out of your daze, you find you\'ve walked into the center of town without even realizing it. You feel a bit strange as you stop to think about why you aren\'t upset about having been raped. Replaying the encounter in your head, you realize you actually had fun and enjoyed it. All in all, you\'re not too worried about what happened. ');
          scene.text('You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.');
        }
      }
      if (((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) > 16)  ||  ((s as any).month ?? 0) >= 10)  &&  (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  ||  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0)) {
        scene.text('You see various posters for the mayoral candidates plastered almost everywhere. The ones that stand out to you urge you to vote for Boris Barlovskay, Albina\'s father.');
      }
      if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['Chernov'] === 0  &&  ((((s as any).month ?? 0) === 11  &&  ((s as any).day ?? 0) > 18)  ||  ((s as any).month ?? 0) === 12)  &&  ((s as any).hour ?? 0) >= 14) {
        scene.actions([{ label: 'Continue', goto: ['albina_election_events', 'start'] }]);
      }
      if (((s as any).locat ?? 0)?.['A23'] === 37) {
        (s as any).locat['A23_save1'] = 1;
        if (Math.floor(Math.random() * 3) + 0 === 0  &&  ((s as any).AlbinaQW ?? 0)?.['walk_of_shame'] !== ((s as any).daystart ?? 0)) {
          (s as any).AlbinaQW['walk_of_shame'] = ((s as any).daystart ?? 0);
          // TODO-QSP: dynamic text: As you walk down the street, you spot a rather disheveled looking <a href="exec:...
          scene.text('As you walk down the street, you spot a rather disheveled looking <a href="exec:minut += 5 & gt \'albina_events\',\'walk_of_shame\'">Albina</a> ducking down an alleyway, as if she doesn\'t want to be seen.');
        }
      }
      if (Math.floor(Math.random() * 5) + 1 >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
        if (((s as any).fame ?? 0)?.['pav_slut'] < 200) {
          scene.text('<br>You catch people staring at you intently, as if they\'re supposed to know who you are but can\'t quite place you. You sincerely hope they don\'t realize your promiscuous adventures are the reason why they recognize you, but the occasional person chuckling and pointing at you crushes those hopes, and you quickly keep walking before they get a chance to say anything.');
        } else {
          scene.text('<br>People look at you with lewd grins on their faces, some of them even making vulgar gestures. Your reputation appears to be the talk of the town.');
          scene.text('<br>Everywhere you go, people recognize you as a whore. Some even come over and slap you on the ass, claiming they know you like it or asking to \'sample your goods\'. An elderly woman sitting on a bench calls out to you, loudly calling you a slut and a whore. You hide your face and run away as fast as you can before she can draw too much attention to you.');
        }
      }
      if (qspFunc(s, 'car_funcs', 'is_here')) {
        // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> is parked in the str...
        scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked in the street.`);
      }
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22) {
        scene.text('<br>At the end of the street is a small <a href="exec:$loc = \'pav_residential\'');
        // TODO-QSP: gt ''kiosk'', ''start''">kiosk</a> selling a variety of items such as cigarettes, magazines, snacks,...
      }
      if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
        (s as any).minut = ((s as any).minut ?? 0) + 2;
      }
      // TODO-QSP: dynamic text: <br>In the center of Pavlovsk is the town square, which features the <a href="ex...
      scene.text(`<br>In the center of Pavlovsk is the town square, which features the <a href="exec: minut += 2 & gt 'pav_commcenter'">community center</a>, a popular hotspot for local teenagers to hang out after a long day at ${((s as any).schoolname ?? 0)} Also nearby is the drab grey building of Pavlovsk's dilapidated public <a href="exec: minut += 4 & gt 'pav_pool','building'">swimming pool</a>.`);
      // TODO-QSP: dynamic text: Connected to the town center is the old palace grounds, which have been turned i...
      scene.text('Connected to the town center is the old palace grounds, which have been turned into a large <a href="exec:minut += 5 & gt \'pav_park\', \'start\'">public park</a>.');
      // TODO-QSP: dynamic text: The <a href="exec: minut += 5 & gt 'pav_lake'">lake</a> is also nearby, which me...
      scene.text('The <a href="exec: minut += 5 & gt \'pav_lake\'">lake</a> is also nearby, which means the area can get quite busy with people coming to swim in the summer or skate in the winter.');
      if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
        if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0) {
          // TODO-QSP: '<a href="exec:minut += 10
          // TODO-QSP: gt ''dimaHome'', ''home''">Dimka</a> lives in one of the fancier houses in town.'
        }
        if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
          // TODO-QSP: '<br><a href="exec: minut += 1
          // TODO-QSP: gt ''FedorEv4'', ''Home Entrance''">Fedor</a> lives in a house nearby.'
        }
        if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
          // TODO-QSP: '<a href="exec:minut += 10
          // TODO-QSP: gt ''IgorHome'', ''home''">Igor</a> lives in one of the fancier houses in town.'
        }
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
          // TODO-QSP: 'Nearby is a large house where the <a href="exec:minut += 10
          // TODO-QSP: gt''mey_home'', ''door''">Meynold twins</a> live.'
        }
        if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
          // TODO-QSP: '<a href="exec:minut += 10
          // TODO-QSP: gt ''LariskaHome'', ''front_door''">Lariska</a> lives about 10 minutes away from here.'
        }
        if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
          scene.text('<a href="exec: gt \'Zvereva_house\', \'front_door\'">Christina</a> lives in an expensive house near here.');
        }
        if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
          // TODO-QSP: '<a href="exec:minut += 10
          // TODO-QSP: gt ''albinahome'',''door_bell''">Albina</a> lives in one of the few luxurious mansions Pavlovsk has ...
        }
        if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
          // TODO-QSP: '<a href="exec:minut += 10
          // TODO-QSP: gt ''soniahome'',''home''">Sonia''s</a> house is up through a garden pathway to a well cared for gre...
        }
      } else {
        (s as any).st_count = 0;
        (s as any).show_table = '';
        if (((s as any).DimaBeHomeOnce ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0) {
          // TODO-QSP: gs 'show_table', 'Fancier house of <a href="exec:minut += 10
          // TODO-QSP: gt ''dimaHome'', ''home''">Dimka Nosov</a>', '3'
        }
        if (((s as any).fedorKozlovQW ?? 0) >= 20  &&  ((s as any).FedorKozHome ?? 0) === 1  ||  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).FedorKozHome ?? 0) === 1) {
          // TODO-QSP: gs 'show_table', 'A nearby house of <a href="exec: minut += 1
          // TODO-QSP: gt ''FedorEv4'', ''Home Entrance''">Fedor</a>', '3'
        }
        if ((((s as any).IgorQW ?? 0)?.['history'] === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] > 0  ||  ((s as any).IgorQW ?? 0)?.['house_open'] === 1)  &&  ((s as any).IgorQW ?? 0)?.['block'] === 0) {
          // TODO-QSP: gs 'show_table', 'Fancier house of <a href="exec:minut += 10
          // TODO-QSP: gt ''IgorHome'', ''home''">Igor Kruglov</a>', '3'
        }
        if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 2  ||  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 27  ||  ((s as any).mey_vika ?? 0)?.['key'] === 1) {
          // TODO-QSP: gs 'show_table', 'The house of the <a href="exec:minut += 10
          // TODO-QSP: gt''mey_home'', ''door''">Meynold twins</a>', '3'
        }
        if (((s as any).LariskaQW ?? 0)?.['story'] >= 6) {
          // TODO-QSP: gs 'show_table', 'House of <a href="exec:minut += 10
          // TODO-QSP: gt ''LariskaHome'', ''front_door''" >Lariska Gruzdev</a> in the richer part of town', '3'
        }
        if (((s as any).christinaQW ?? 0)?.['subpath'] >= 5) {
          qspCall(s, 'show_table', '', '<br><a href="exec: gt \'Zvereva_house\', \'front_door\'">Christina</a> lives in an expensive house near here.', '3');
        }
        if (((s as any).AlbinaQW ?? 0)?.['KnowsHouse'] === 1) {
          // TODO-QSP: gs 'show_table', 'A luxurious mansion that''s home to <a href="exec:minut += 10
          // TODO-QSP: gt ''albinahome'',''door_bell''">Albina Barlovskaya</a>', '3'
        }
        if (((s as any).soniaQW ?? 0)?.['homeinvite'] === 1) {
          // TODO-QSP: gs 'show_table', 'A grey wooden-clad house that''s home to <a href="exec:minut += 10
          // TODO-QSP: gt ''soniahome'',''home''">Sonia Ivanko</a>', '3'
        }
        if (((s as any).st_count ?? 0) > 0) {
          // TODO-QSP: dynamic text: <table BORDER=1><<$show_table>></tr></table>
          scene.text(`<table BORDER=1>${((s as any).show_table ?? 0)}</tr></table>`);
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
    // TODO-QSP: killvar 'InvitationToDimkaNYparty'
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['sny', '3'] },
        ]);
      }
      if ((((s as any).hour ?? 0) > 20  ||  ((s as any).hour ?? 0) < 4)  &&  ((s as any).succubusQW ?? 0) === 14  &&  ((s as any).suchuntday ?? 0) !== ((s as any).daystart ?? 0)) {
        qspCall(s, 'pav_residential', 'set_succubus_hunt_act');
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
    }
  }
  scene.build();
}

export const pav_residential: LocationDef = {
  name: 'pav_residential',
  title: '<center><h2>Pavlovsk</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['You stop under the dim light of a streetlight. Breathing heavy, you occasionally stop to wince from the pain coming from your pussy. You convince yourself not to tell anyone, and to just get home, clean up and go to bed as soon as possible. The sooner you do that, the sooner you can forget this ever happened.'],
  enter: enter,
};
