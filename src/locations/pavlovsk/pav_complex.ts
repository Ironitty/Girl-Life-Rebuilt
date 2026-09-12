import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complex', 'start');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  (s as any).alkoblock = 0;
  (s as any).boynumBlock = 0;
  qspCall(s, 'stat', '');
  if (((s as any).complx_rand ?? 0)[1] + (Math.floor(Math.random() * 6) + 5) < ((s as any).daystart ?? 0)  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 50  &&  (((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 23)) {
    ((s as any).complx_rand ?? {})[1] = ((s as any).daystart ?? 0);
    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 100) {
      scene.actions([{ label: 'Continue', goto: ['gossips', 'complex', '\'girls_slutrep\''] }]);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 0  &&  ((s as any).hour ?? 0) < 19) {
        scene.actions([{ label: 'Continue', goto: ['gossips', 'complex', '\'old_women_slutrep\''] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gossips', 'complex', '\'boys_slutrep\''] }]);
      }
    }
  }
  qspCall(s, 'rolanapt', 'rolanroute');
  scene.text('<center><h2>Five Eight Estate</h2></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/resident/apartment/complexw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/complexwn.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 21) {
      scene.img('images/locations/pavlovsk/resident/apartment/complex.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/complexn.jpg');
    }
  }
  if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).hour ?? 0) < 5  &&  ((s as any).motherWorry ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0)  &&  (((s as any).age ?? 0) < 18  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')  &&  ((s as any).locat ?? 0)?.['Fam_inGad'] === 0)) {
    (s as any).motherWorry = 1;
  }
  if (((((s as any).minut ?? 0) + 60 * (((s as any).hour ?? 0) + ((s as any).daystart ?? 0) * 24) - ((s as any).pavcomplexevent_time ?? 0)) > 60)  ||  ((((s as any).daystart ?? 0) + 1) * 1440 < ((s as any).pavcomplexevent_time ?? 0))) {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).pavcomplexevent_time = ((s as any).minut ?? 0) + 60 * (((s as any).hour ?? 0) + ((s as any).daystart ?? 0) * 24);
      scene.actions([{ label: 'Continue', goto: ['pav_aptcourtev', 'events1'] }]);
    } else {
      if ((((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 20)  &&  (!(Math.floor(Math.random() * 4) + 0))) {
        (s as any).pavcomplexevent_time = ((s as any).minut ?? 0) + 60 * (((s as any).hour ?? 0) + ((s as any).daystart ?? 0) * 24);
        scene.actions([{ label: 'Continue', goto: ['pav_aptcourtev', 'events2'] }]);
      }
    }
  }
  if ((((s as any).week ?? 0) <= 5  &&  ((s as any).cheerleaders_on ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 18  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg')  &&  ((((s as any).LariskaQW ?? 0)?.['story'] === 0  ||  ((s as any).LariskaQW ?? 0)?.['story'] === 1)  &&  ((s as any).npc_rel ?? 0)?.['A13'] > 40  &&  ((s as any).lariska_ball ?? 0) !== ((s as any).daystart ?? 0))) {
    scene.text('Walking along the apartment complex, you hear a bouncing sound. Turning the corner, you see <a href="exec:gt \'lariska_storyline\', \'story_intro\'">Lariska</a> hitting a volleyball against a wall.');
  }
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: Your <a href="exec:gs 'carF', 'start'"><<$car['name']>></a> is parked in the str...
    scene.text(`Your <a href="exec:gs 'carF', 'start'">${((s as any).car ?? 0)?.['name']}</a> is parked in the street.`);
  }
  if (((s as any).rexCar ?? 0) === 1  &&  ((s as any).rexCarDay ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 21  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).rexSisTalk ?? 0) === 3) {
    scene.text('<br>Rex is in his car, waiting for you at the parking lot near the apartment building where your parents live.');
    scene.actions([
      { label: 'Join Rex in his car', goto: ['rex_events', 'avto'] },
    ]);
  } else {
    if (((s as any).rexCar ?? 0) === 1  &&  ((s as any).rexCarDay ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 21  &&  ((s as any).rexSisTalk ?? 0) >= 4) {
      scene.text('<br>Rex is in his car, waiting for you at the parking lot near the apartment building where your parents live.');
      scene.actions([
        { label: 'Join Rex in his car', goto: ['rex_events', 'avto2'] },
      ]);
    }
  }
  // TODO-QSP: 'Located in the old part of Pavlovsk, these Soviet era apartment blocks are the Five Eight Estate. Y...
  scene.text('Opposite you is a meager courtyard, which has changed over the years to now include a kid\'s playground, a basketball court and a small grassy area that\'s mostly used to play football.');
  scene.text('A few benches and tables surround it, and there\'s a handful of small utility sheds tucked away in the corner for tenants to use if they\'re willing to pay for the extra space.');
  // TODO-QSP: dynamic text: Behind the apartments is a row of <a href="exec:minut += 3 & gt 'pav_complex', '...
  scene.text('Behind the apartments is a row of <a href="exec:minut += 3 & gt \'pav_complex\', \'garages\'">garages</a> and storage space for tenants.');
  if ((((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0))  &&  (((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0)) {
    qspCall(s, 'mother_chats', 'reconciliation_talk');
    return;
  }
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    // TODO-QSP: dynamic text: <br>The <a href="exec:minut += 1 & gt 'pav_laundromat'">old laundromat</a> is op...
    scene.text('<br>The <a href="exec:minut += 1 & gt \'pav_laundromat\'">old laundromat</a> is open. The advertisement says: "You can wash your clothes here."');
  } else {
    // TODO-QSP: dynamic text: <br>The old laundromat is closed, it'll open again at <<func('time', 'get_time_s...
    scene.text(`<br>The old laundromat is closed, it'll open again at ${qspFunc(s, 'time', 'get_time_string', 8, 0)}. The advertisement says: "You can wash your clothes here."`);
  }
  if (((s as any).pavComplex_met_dealer ?? 0) >= 3  &&  ((s as any).hour ?? 0) > 20) {
    // TODO-QSP: dynamic text: <br>You can see the <a href="exec:minut += 3 & gt 'pav_aptcourtev', 'dealer'">bo...
    scene.text('<br>You can see the <a href="exec:minut += 3 & gt \'pav_aptcourtev\', \'dealer\'">boy</a> who sells weed in the courtyard.');
  }
  if (((s as any).cfg_vars ?? 0)?.['tablemap'] === 0) {
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 70  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 23)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 2)) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt 'vasilyhome', 'home'">The Shulgin family</a> live...
      scene.text('<a href="exec:minut += 15 & gt \'vasilyhome\', \'home\'">The Shulgin family</a> live in the apartment above your parents.');
    }
    if (((s as any).ArtemBeInHome ?? 0) > 0  &&  ((s as any).artemQW ?? 0)?.['artemblok'] === 0) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt 'artemhome', 'home'">Artem Chebotarev</a>, one of...
      scene.text('<a href="exec:minut += 15 & gt \'artemhome\', \'home\'">Artem Chebotarev</a>, one of your classmates, lives in the same apartment building as your parents, on the first floor.');
    }
    if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 1) {
      if ((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) < 6)  ||  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) >= 6)) {
        // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt 'JuliaMilHome', 'home'">Julia Milova</a>, one of ...
        scene.text('<a href="exec:minut += 15 & gt \'JuliaMilHome\', \'home\'">Julia Milova</a>, one of your classmates, lives in the same apartment building as your parents, on the third floor.');
      } else {
        scene.text('Julia Milova, one of your classmates, lives in the same apartment building as your parents. She resides on the third floor.');
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['VisitedHome'] === 1) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 15 & gt 'natbelapt', 'home'">Natasha Belova</a>, one of y...
      scene.text('<a href="exec:minut += 15 & gt \'natbelapt\', \'home\'">Natasha Belova</a>, one of your classmates, lives in the same apartment building as your parents. She resides on the fourth floor.');
    }
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] !== 0) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 10 & gt 'anushapt', 'home'">Anushka Konstantinov</a>, a c...
      scene.text('<a href="exec:minut += 10 & gt \'anushapt\', \'home\'">Anushka Konstantinov</a>, a classmate, lives in one of the other apartment blocks here.');
    }
    if (((s as any).radomirQW ?? 0)?.['first_visit'] !== 0) {
      // TODO-QSP: dynamic text: <a href="exec:minut += 10 & gt 'radapt', 'home'">Radomir Popov</a>, a classmate,...
      scene.text('<a href="exec:minut += 10 & gt \'radapt\', \'home\'">Radomir Popov</a>, a classmate, lives in one of the other apartment blocks here.');
    }
  } else {
    (s as any).st_count = 0;
    if (((s as any).npc_rel ?? 0)?.['A112'] >= 70  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 23)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 2)) {
      qspCall(s, 'show_table', '', 'Apartment of Uncle <a href="exec:minut += 15 & gt \'vasilyhome\', \'home\'" >Shulgin</a>.', '3');
    } else {
      qspCall(s, 'show_table', 'Apartment of Uncle Shulgin.', '3');
    }
    if (((s as any).ArtemBeInHome ?? 0) > 0  &&  ((s as any).artemQW ?? 0)?.['artemblok'] === 0) {
      qspCall(s, 'show_table', '', 'Apartment of <a href="exec:minut += 15 & gt \'artemhome\', \'home\'">Artem Chebotarev</a>.', '3');
    }
    if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 1) {
      if ((((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) < 6)  ||  (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).week ?? 0) >= 6)) {
        qspCall(s, 'show_table', '', 'Apartment of <a href="exec:minut += 15 & gt \'JuliaMilHome\', \'home\'">Julia Milova</a>.', '3');
      } else {
        qspCall(s, 'show_table', 'Apartment of Julia Milova.', '3');
      }
    }
    if (((s as any).NatbelQW ?? 0)?.['VisitedHome'] === 1) {
      qspCall(s, 'show_table', '', 'Apartment of <a href="exec:minut += 15 & gt \'natbelapt\', \'home\'">Natasha Belova</a>.', '3');
    }
    if (((s as any).anushkaQW ?? 0)?.['first_visit'] !== 0) {
      qspCall(s, 'show_table', '', 'Messy home of <a href="exec:minut += 10 & gt \'anushapt\', \'home\'">Anushka Konstantinov</a>.', '3');
    }
    if (((s as any).st_count ?? 0) > 0) {
      // TODO-QSP: dynamic text: <table BORDER=1><<$show_table>></tr></table>
      scene.text(`<table BORDER=1>${((s as any).show_table ?? 0)}</tr></table>`);
    }
  }
  if (((s as any).shared_apt ?? 0)?.['seenAd'] === 1  &&  ((s as any).shared_apt ?? 0)?.['enabled'] === 0) {
    // TODO-QSP: dynamic text: <br>Some guys in one of the <a href="exec:minut += 5 & gt 'pav_shared_apt','door...
    scene.text('<br>Some guys in one of the <a href="exec:minut += 5 & gt \'pav_shared_apt\',\'doorNo30\'">apartments</a> are looking for a roommate.');
  }
  if (((s as any).rolanmeet ?? 0) === 8  &&  ((s as any).rolanblockhome ?? 0) !== 1) {
    // TODO-QSP: dynamic text: <br>Mr. Matveev's is living in an <a href="exec:minut += 5 & gt 'rolanapt','home...
    scene.text('<br>Mr. Matveev\'s is living in an <a href="exec:minut += 5 & gt \'rolanapt\',\'home\'">apartment</a> in the Five Eight Estate.');
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: '<b>Go Home</b> (Parents\' Apartment)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    (s as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
  }
  if (((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
    // TODO-QSP: act '<b>Go Home</b> (Shared Apartment)': minut += 5
    scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'start'] }]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: 'Go to your apartment building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } else {
    if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0  ||  ((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
      scene.actions([
        { label: 'Go to your parent\'s apartment building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_1'] },
      ]);
    }
  }
  qspCall(s, 'camera', 'check_location');
  qspCall(s, 'prostitution_functions', 'check_solicitation_event');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the Residential area (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_residential', ''] },
    { label: 'Walk to the Commercial area (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_commercial', ''] },
    { label: 'Walk to the Industrial region (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_industrial', ''] },
    { label: 'Walk to the Market (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_market', ''] },
    { label: 'Walk to the train station (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_train_hall', ''] },
    { label: 'Walk to Pushkin (0:30)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
  }, goto: ['pushkin', ''] },
    { label: 'Sit on a bench', goto: ['pav_aptcourtev', 'bench'] },
  ]);
  scene.build();
}

function enterGarages(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complex', 'garages');
  scene.text('<center>Five Eight Estate - Garages</center>');
  scene.img('images/locations/pavlovsk/resident/apartment/garage/garages.jpg');
  scene.text('Along the back street is a row of garages available for the residents of the apartments to rent. The weather in Pavlovsk can be brutal, especially in the winter, so people who own a car often have a garage to put it away safely. Between the garages and the courtyard is a series of smaller storage buildings that can be rented, as well as the complex\'s maintenance and laundry buildings. The layout of the buildings leaves a maze of walkways between them, which are a popular place for kids to play or for teenagers to hang out.');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    // TODO-QSP: dynamic text: Your <a href="exec:minut += 5 & gt 'gargazel'">stepfather's garage</a> is around...
    scene.text('Your <a href="exec:minut += 5 & gt \'gargazel\'">stepfather\'s garage</a> is around here somewhere.');
  }
  if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 1) {
    // TODO-QSP: dynamic text: The converted <a href="exec:minut += 5 & gt 'praiders_garage', 'band_garage'">ga...
    scene.text('The converted <a href="exec:minut += 5 & gt \'praiders_garage\', \'band_garage\'">garage</a> the band uses to practice in is around here.');
  }
  if (((s as any).gopnik_initiation ?? 0) === 1  &&  ((s as any).gopnik_initiation_day ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 20) {
    // TODO-QSP: act '<b>Meet Lena and Lera</b>': gt 'gopnik_initiation', 'initiation'
  }
  if (((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 22)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 22))  &&  (((s as any).ed_event_day ?? 0) !== ((s as any).daystart ?? 0))) {
    if (((s as any).anushkaQW ?? 0)?.['seen_ed'] === 0) {
      if ((Math.floor(Math.random() * 6) + 0) === 1) {
        scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed4.jpg');
        scene.text('As you\'re walking around the garages, you notice an open garage door. You see a tattooed man inside working on a motorcycle. He looks really rough and dangerous - he must be one of the bikers that live around the area. You have heard your mother warn you about them before.');
        scene.text('As you pass by, you can hear the man talking to someone else. You throw a quick glance towards them, and you see the man showing something off to a younger man sitting on a motorcycle. Looking closer, you realize that the younger man is Valentin. They seem really into it and you quickly move on before they can turn their attention to you.');
        ((s as any).anushkaQW ?? {})['seen_ed'] = 1;
        (s as any).ed_event_day = ((s as any).daystart ?? 0);
      }
    } else {
      qspCall(s, 'valentin_bogdanov_schedule', '');
      if (((s as any).anushkaQW ?? 0)?.['first_visit'] >= 1) {
        if ((!(Math.floor(Math.random() * 5) + 0))) {
          (s as any).ed_event_day = ((s as any).daystart ?? 0);
          (s as any).garageedevent = Math.floor(Math.random() * 5) + 1;
          if (((s as any).garageedevent ?? 0) === 1) {
            scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed1.jpg');
            scene.text('As you walk past Eduard\'s garage, you notice him working on his motorcycle as usual. You carefully approach the entrance and peek in, he has his back towards you and seems completely engrossed on whatever he is doing with the motorcycle.');
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Be on your way', goto: ['pav_complex', 'garages'] },
              { label: 'Say hi', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed1.jpg');
    scene.text('You step into the garage and walk up behind him. "Hello Mr. Konstantinov."');
    scene.text('A little startled, he quickly turns towards you, gripping his wrench tight. Frightened by his actions, you instinctively take a step back, ready to quickly run away.');
    // TODO-QSP: dynamic text: It feels like an eternity before Eduard finally relaxes, letting the wrench hang...
    scene.text(`It feels like an eternity before Eduard finally relaxes, letting the wrench hang loosely in his hand, and breaks out in a small smile. "You should be careful when approaching someone from behind ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You nod, still a little frightened, "I\'m really sorry! I didn\'t mean to frighten you."');
    scene.text('"Well you didn\'t frighten me, but you did startle me. You never know who it might be. My past could come back to haunt me…" he says, smiling.');
    scene.text('"I was just passing by and wanted to say hi… I should let you get back to work…" you say as you quickly leave. You don\'t notice him nod, or the slight frown when he sees you scurry away.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).garageedevent ?? 0) === 2  &&  ((s as any).locat ?? 0)?.['A158'] === 23) {
              scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed2.jpg');
              scene.text('As you walk past Eduard\'s garage, you overhear some loud voices coming from his garage. You carefully approach the entrance and notice Eduard and Valentin working on the motorcycle. You greet them, but they barely acknowledge you as they\'re focused on working on the motorcycle.');
              scene.text('Feeling rejected, you turn around and move on.');
              (s as any).minut = ((s as any).minut ?? 0) + 5;
              qspCall(s, 'stat', '');
              scene.actions([
                { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
                { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
              ]);
            } else {
              if (((s as any).garageedevent ?? 0) === 3  &&  ((s as any).locat ?? 0)?.['A158'] === 23) {
                scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed2.jpg');
                scene.text('As you walk past Eduard\'s garage, you overhear some loud voices coming from his garage. You carefully approach the entrance and notice Eduard and Valentin standing around the motorcycle talking, perhaps taking a break or discussing options.');
                (s as any).minut = ((s as any).minut ?? 0) + 5;
                qspCall(s, 'stat', '');
                scene.actions([
                  { label: 'Approach them', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed3.jpg');
    scene.text('You approach and greet them and they look up and greet you back. You spend some time small talking with them about what they\'re doing and they try their best to answer in the most interesting way they can.');
    scene.text('Despite their best efforts to explain, you don\'t really follow it all that well. They are way more technically adept than you can easily follow, so you just smile and nod, humoring them and maybe learning a thing or two.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_complex', 'garages'] },
      { label: 'Talk to Valentin', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed7.jpg');
    scene.text('You excuse yourself to Eduard and ask if you could borrow Valentin for a second. Eduard grins as he pushes Valentin towards you.');
    scene.text('The two of you walk away to the entrance and talk to each other for a few minutes about what happened at school today.');
    scene.text('A few minutes pass by before Valentin interrupts you. "Yeah, maybe we can talk about it later? I really want to finish the repairs on my bike before it gets too late."');
    scene.text('You nod. "Sure, talk to you later." He gives you a friendly shoulder rub then hurries back inside. You wave to Eduard and then leave the garage.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
                ]);
              } else {
                if (((s as any).garageedevent ?? 0) === 4  &&  ((s as any).locat ?? 0)?.['A158'] === 23) {
                  scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed0.jpg');
                  scene.text('As you walk past Eduard\'s garage, you hear some noises coming from his garage. You carefully approach the entrance and notice Valentin kneeling next to his bike, looking at it.');
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
                    { label: 'Go to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
                    { label: 'Approach him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed6.jpg');
    scene.text('You approach and stand next to his bike, facing him. "What\'s up Valentin?"');
    scene.text('He throws down a towel he was using to clean up. "It\'s this damn bike, I don\'t know why it keeps cutting out."');
    scene.text('You can tell he is really stressed and pissed off. "Is there anything I can do to help?"');
    scene.text('He glares at you. "You know how to rebuild an engine on a bike and have the money to buy all the parts?"');
    scene.text('You shake your head. "No, but maybe I can take your mind off it?"');
    scene.text('His face softens a little and he seems curious. "How exactly?" he asks rhetorically.');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Talk to Valentin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Talk to Valentin [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed6.jpg');
    scene.text('You bite your lip, you know what he wants but you don\'t want to do it. "We could, you know just talk and hang out if you want."');
    scene.text('He sighs, obviously a little disappointed. "I guess a little break wouldn\'t hurt. So what\'s up with you?"');
    scene.text('The two of you start talking, and before long he is fairly relaxed. "I really should get back to this, but thanks for hanging out. See you later." With that, he goes back to working on his bike and you take the hint and leave.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Strip down to your panties', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A158', 1);
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'bras', 'remove');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val1.jpg');
    scene.text('You grin at him and start undressing very slowly in a teasing manner.');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You strip down to your underwear. Tossing your clothes aside, you can already see the bulge in his pants and kneel down next to him.');
    } else {
      scene.text('You strip down naked. Tossing your clothes aside, you can already see the bulge in his pants and kneel down next to him.');
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Unbutton his pants', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val2.jpg');
    scene.text('You pull off his shirt and push him back so he is sitting back on his heels. You start to unbutton his pants while you feel one of his hands slide between your legs and start to rub your pussy, getting it nice and wet.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A158');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val3.jpg');
    // TODO-QSP: dynamic text: You pull his pants down and lean forward. Opening your mouth, you take his <<dic...
    scene.text(`You pull his pants down and lean forward. Opening your mouth, you take his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your mouth and lock your lips around his shaft. Your tongue presses hard against the shaft of his cock as you start bobbing your head up and down, sucking his dick. Before long, he starts moaning and places a hand on top of your head, forcing you to take his dick deeper into your mouth.`);
    scene.text('He then pulls your head up and his dick pops out of your mouth. He turns you around, pushing your legs slightly apart, and you feel the head of his cock rubbing against your slit, making you even wetter.');
    qspCall(s, 'arousal', 'bj', 10, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(s, 'panties', 'remove');
    qspCall(s, 'boyStat', 'A158');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val4.jpg');
    // TODO-QSP: dynamic text: Once he is sure you are good and wet, he slides his <<dick>>cm <<$dick_girth>> c...
    scene.text(`Once he is sure you are good and wet, he slides his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your warm pussy, which elicits a moan from both of you. He goes slow and not too deep at first, but as he feels you getting wetter and moaning louder, he starts fucking you a little harder and slowly works himself balls deep into you.`);
    qspCall(s, 'arousal', 'vaginal', 10, 'unknown');
    scene.actions([
      { label: 'More', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val5.jpg');
    scene.text('Once you\'re really into it, he pulls out of you and you feel the head of his dick pressing against your asshole. Once he is sure he has it lined up, he pushes forward and his dick pops into your ass, causing you gasp slightly in pain.');
    // TODO-QSP: dynamic text: He slowly start pushing his <<dick>>cm <<$dick_girth>> dick into your ass, stopp...
    scene.text(`He slowly start pushing his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} dick into your ass, stopping when you start to pull away. He slowly begins fucking your ass, and as your moans turn back to pleasure, he starts pushing a little deeper and going a little faster.`);
    qspCall(s, 'arousal', 'anal', 10, 'unknown');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/garage/val/val6.jpg');
    scene.text('He starts grunting as he fucks your ass and suddenly pulls out of you. He stands up and pulls you up to your knees, turning to face him. As you do, he is already jerking off and within seconds, warm cum starts spurting out of his dick and splattering across your tits. After a few more spurts, he moans a loud sigh of relief.');
    // TODO-QSP: dynamic text: He looks down at your cum covered tits, grinning at his handiwork, before he cle...
    scene.text(`He looks down at your cum covered tits, grinning at his handiwork, before he cleans himself up and gets dressed as you do the same. Once you are both dressed, he turns to you. "Thanks ${((s as any).pcs_nickname ?? 0)}. I needed that, but I should get back to work. Talk to you later." He turns and starts working on his bike again. You take one last look around to make sure you didn't forget anything and leave.`);
    qspCall(s, 'arousal', 'foreplay', 5, 'unknown');
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0), 1);
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
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
  } },
    ]);
  } },
                  ]);
                } else {
                  scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed1.jpg');
                  scene.text('As you walk past Eduard\'s garage, you notice him working on his motorcycle as usual. You carefully approach the entrance and peek in. He has his back towards you and seems completely engrossed in whatever he is doing with the motorcycle.');
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  qspCall(s, 'stat', '');
                  scene.actions([
                    { label: 'Be on your way', goto: ['pav_complex', 'garages'] },
                    { label: 'Say hi', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed6.jpg');
    scene.text('You step into the garage and walk up behind him. He turns as you walk in. "Hello Mr. Konstantinov."');
    // TODO-QSP: dynamic text: He gives you a friendly smile. "Hello <<$pcs_nickname>>. Please, call me Ed."
    scene.text(`He gives you a friendly smile. "Hello ${((s as any).pcs_nickname ?? 0)}. Please, call me Ed."`);
    scene.text('You nod and smile. "Okay. Hi Ed."');
    // TODO-QSP: dynamic text: He chuckles slightly. "What can I do for you <<$pcs_nickname>>? Anushka isn't he...
    scene.text(`He chuckles slightly. "What can I do for you ${((s as any).pcs_nickname ?? 0)}? Anushka isn't here and I have no clue where she is, like most days." He adds with a bit of a frown.`);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Nothing', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed1.jpg');
    scene.text('You shake your head slightly. "Nothing, I was just passing by and saw you, so thought I would stop and say hi. I\'ve got things to do, so I should let you get back to work." With that, you give him a slight wave and leave.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
      { label: 'Talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed6.jpg');
    scene.text('You shrug slightly. "I just thought you might want to talk is all." you tell him.');
    scene.text('He nods and takes a seat on his toolbox. "Sure, I\'ve got a few minutes. What\'s on your mind?"');
    scene.text('You walk over and look at his bike, then gently lean against it, being careful not to knock it over. "How are things at home?"');
    scene.text('He laughs slightly at the question. "Well if you\'re really curious, the wife is still a shrew, the boys are… well preteen boys, so are nothing but trouble and Nush… Well, I wouldn\'t know. I rarely see her, I just hope she\'s staying out of trouble." Then he snorts. "Or I should say, not getting into more trouble than she can handle. What about yourself? Everything okay at home, doing well in school?"');
    scene.text('You spend some time telling him about home and school and he seems far more interested than you expected. After around half an hour of pleasant conversation, you excuse yourself and tell him not to work too late as you leave.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
      { label: 'Keep talking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed6.jpg');
    (s as any).edchat = Math.floor(Math.random() * 13) + 1;
    if (((s as any).edchat ?? 0) === 1) {
      scene.text('"Your daughter is lots of fun, has anyone ever told you that?" you gloat a little.');
      scene.text('"So what\'s my daughter up to these days?" Eduard causally asks while working on his bike.');
      scene.text('"Oh, you know… The usual teenage stuff… Nothing serious." you smile and give him a sly wink.');
      scene.text('"As long as I don\'t get anyone angry knocking on my door…" he calmly replies.');
    } else {
      if (((s as any).edchat ?? 0) === 2) {
        scene.text('"I\'ve been trying to get to know your daughter a little bit better, but I have a hard time getting through to her. Do you mind if you share a fond memory of her with me?" you ask.');
        scene.text('"No at all." Eduard shines up. "There was this time, I remember some boys were picking on her…" he stops and begins to laugh. "So she went home and grabbed a bucket full of water to soak them. She didn\'t think that the bucket would be that heavy, however. When she lifted it, she lost her balance and drenched herself instead."');
        scene.text('The two of you start to laugh loudly. "I still remember her barging in, soaking wet…" Eduard says as you notice tears forming from laughter.');
      } else {
        if (((s as any).edchat ?? 0) === 3) {
          scene.text('"Have you seen Anushka today?" you ask Eduard as he\'s working on his bike.');
          scene.text('"Can\'t say I really have. Why, is she up to something?" he stops and looks sternly at you.');
          scene.text('"N-No, not at all…" you gulp. "I was just wondering if you\'ve seen her?"');
          scene.text('"Sorry if I scared you… I just want her to be safe you know. Keep an eye out for her, okay? I know she can be all over the place and gets in trouble a lot." Eduard tells you before going back to work on his bike.');
        } else {
          if (((s as any).edchat ?? 0) === 4) {
            // TODO-QSP: dynamic text: "May I ask you a question, <<$pcs_nickname>>?" Eduard wipes his hands as he take...
            scene.text(`"May I ask you a question, ${((s as any).pcs_nickname ?? 0)}?" Eduard wipes his hands as he takes a break from working on the bike.`);
            scene.text('You nod, a bit afraid of what he\'ll ask…');
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"So I\'ve heard some rumors that you two were doing some shit around town? Do I need to have a talk with you and my lovely daughter?" He crosses his arms, awaiting an answer.');
              scene.text('You shake your head. "No! No, we\'re staying out of trouble. We\'d never do anything to upset you. I promise."');
              scene.text('"Good! Keep it that way… Sometimes you kids drive me crazy…" he shortly replies.');
            } else {
              scene.text('"How are you and my daughter friends? Don\'t take this the wrong way, but you don\'t exactly strike me as the type of person she calls her friend."');
              scene.text('You stand and ponder for a while. "I don\'t know. we just click. It\'s hard to explain, but being around your daughter is a blast."');
              scene.text('"Hopefully, you\'ll be a good influence on her then. And be careful, don\'t let her corrupt you." he smiles and winks.');
            }
          } else {
            if (((s as any).edchat ?? 0) === 5) {
              scene.text('"I don\'t know how to say this…" you stammer as you look at Eduard fearfully. "But your boys have been spying on me."');
              scene.text('"Spying? In what way?" Eduard asks.');
              scene.text('"Well…" you squirm a little, "They like to watch me when I\'m taking a shower at your place…" you blush.');
              scene.text('Eduard stops and thinks for a while. "Again?! Those damn boys will be the death of me… Don\'t worry, I\'ll have a long discussion with them about it not being okay… Seems like I\'ll need to show them what happens when they overstep their boundaries…"');
            } else {
              if (((s as any).edchat ?? 0) === 6) {
                scene.text('"Those damn kids are sitting in front of a computer all day just staring at the screen…" Eduard rants.');
                scene.text('"What\'s the problem?" you ask.');
                scene.text('"I\'ll tell you what\'s the problem… Those brats are joining a sports team. I don\'t care which one, but they\'re not sitting around on their asses anymore…" Eduard keeps on ranting.');
              } else {
                if (((s as any).edchat ?? 0) === 7) {
                  scene.text('Eduard looks worryingly at you. "Has Anushka mentioned anything about her brothers?"');
                  scene.text('"No, not really. She usually doesn\'t mention them that often." you reply honestly.');
                  scene.text('"Oh, okay. They\'ve been going at each other lately, so I was just wondering if you\'ve heard anything." Eduard says before he shrugs his shoulders.');
                } else {
                  if (((s as any).edchat ?? 0) === 8) {
                    scene.text('"I don\'t want to be rude, but what does your wife act like that, you know, like a bitch?" you curiously ask.');
                    scene.text('He sighs loudly. "Look, I know she sometimes acts like she has a stick up her ass, but she\'s got her heart in the right place. You just don\'t see it that often."');
                  } else {
                    if (((s as any).edchat ?? 0) === 9) {
                      scene.text('"I was heading over to see Anushka and I saw your wife talking with some people outside the store…"');
                      scene.text('Eduard starts laughing. "Ah yes, the good old gossip gang. They were probably talking shit, thinking they\'re the center of attention. It\'s quite sad to be honest."');
                    } else {
                      if (((s as any).edchat ?? 0) === 10) {
                        scene.text('"That damn, fucking… Always on my ass. One day I\'ll fucking…" Eduard is muttering to himself…');
                        scene.text('"I-Is everything okay?" you quietly ask, afraid of his reaction.');
                        scene.text('He mutters on. "Is everything okay… Such a stupid question, everyone always want to know what\'s on Eduard\'s mind. Can\'t be alone for a fucking minute…"');
                        // TODO-QSP: dynamic text: Noticing he's deep inside his thoughts, you turn around and begin to leave befor...
                        scene.text(`Noticing he's deep inside his thoughts, you turn around and begin to leave before you hear "Oh sorry ${((s as any).pcs_nickname ?? 0)}. I'm just having a bad day today."`);
                      } else {
                        if (((s as any).edchat ?? 0) === 11) {
                          scene.text('"How many tattoos do you have?" you curiously ask.');
                          scene.text('Eduard smiles and starts looking all over his body.` "Got this one when I was thirteen, got this one in jail…" he trails off and looks at you. "I can\'t remember how many I\'ve done, but it\'s at least a dozen."');
                          scene.text('"Cool!" you reply.');
                          if (((s as any).pcs_tattoos ?? 0)?.['total'] === 0) {
                            scene.text('He sighs. "No, it\'s not cool. But they can be meaningful if you get one. Make sure you get one for the right reasons and not just to be \'cool\', okay?" he says in a poor attempt to discourage you.');
                          } else {
                            if ((((s as any).pcs_tattoos ?? 0)?.['arm'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['hand'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['wrist'] > 0)  ||  (((s as any).pcs_tattoos ?? 0)?.['under'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['side'] > 0)  ||  (((s as any).pcs_tattoos ?? 0)?.['shoulder'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['neck'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['lip'] > 0)  ||  (((s as any).pcs_tattoos ?? 0)?.['leg'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['ankle'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['face'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['chest'] > 0)) {
                              scene.text('You proudly show off your own tattoo to him and he\'s taken a back a little. "Oh you\'ve already got one. It\'s a great feeling, isn\'t it? I remember getting my first one and it was like a drug. I was hooked."');
                              scene.text('You nod your head. "I\'m already thinking about getting another one."');
                              scene.text('"Just remember to do something tasteful or cool and not something horrible that you\'ll regret later on." he advises.');
                            } else {
                              scene.text('You start to remove your clothes to show him your special tattoo and he holds up his hands, partially blocking his own view. "What the hell are you doing?!" he exclaims.');
                              scene.text('"I was just going to show you my tattoo…" you innocently respond.');
                              scene.text('He snorts a laugh and shakes his head. "That\'s okay, I believe you. I swear you\'re almost as bad as Nush. You would think she was allergic to clothes or something with the number of times she walks around the apartment naked…" he trails off, muttering something about girls.');
                            }
                          }
                        } else {
                          if (((s as any).edchat ?? 0) === 12) {
                            scene.text('"So I was just harassed by the local police…" you complain to Eduard.');
                            scene.text('"Ah yes, our finest." he says and spits on the ground out of spite. "They\'re always harassing people, looking for a bribe. I\'ve always hated this city\'s police force. Even when I was young, they were out to get me."');
                          } else {
                            if (((s as any).edchat ?? 0) === 13) {
                              // TODO-QSP: dynamic text: "Tell me <<$pcs_nickname>>, is that place over by the old factory still there?" ...
                              scene.text(`"Tell me ${((s as any).pcs_nickname ?? 0)}, is that place over by the old factory still there?" Eduard curiously asks.`);
                              scene.text('You ponder for a while. "I don\'t really know which one you mean, but no one really hangs out over there anymore. The only ones that remain are the drug dealers…"');
                              scene.text('"That\'s a shame, we used to use that as a meeting place. Lots of crazy stuff happened there. The fights, the women, the dru-…" he clears his throat, "Yeah, those were great times…" His mind travels away somewhere as a little smirk appears on his face.');
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
      }
    }
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Work on motorcycle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'exp_gain', 'hndiwrk', Math.floor(Math.random() * 3) + 3);
    scene.img('images/locations/pavlovsk/resident/apartment/garage/ed/ed5.jpg');
    if ((!((s as any).LearntAboutMotorcycle ?? 0))) {
      (s as any).LearntAboutMotorcycle = 1;
      scene.text('You walk up to his bike and pick up a random tool. "Actually, I was wondering if maybe you can teach me a little about working on motorcycles?" you ask hopefully.');
      scene.text('He arches a brow and seems slightly surprised, but shrugs. "Sure, if you want to learn."');
      scene.text('You nod enthusiastically. "I do, I really do. I think all girls should learn the basics, in case we break down out on the road somewhere with no one around."');
      scene.text('He smiles and looks… proud. "Couldn\'t have said it better myself." He then starts explaining how the motorcycle works in basic terms, explains some of the tools and then puts you to work on some easy stuff on the bike. You do learn stuff and before long, you are covered in grease and grime.');
      scene.text('He chuckles and shakes his head. "Okay, I think that\'s enough for now. Why don\'t you go get cleaned up? We can continue some other time." You put down the tools, smile and thank him for helping you before leaving.');
    } else {
      scene.text('You walk up to his bike and pick up a tool. "Actually, I was wondering if you could teach me a little more about working on motorcycles?" you ask hopefully.');
      scene.text('He nods. "I would be happy to show you more. Grab that wrench over there." He points at a wrench lying on a table.');
      scene.text('He puts you to work on some easy stuff on the bike. You do learn stuff and before long, you are covered in grease and grime.');
      scene.text('He chuckles and shakes his head. "Okay, I think that\'s enough for now. Why don\'t you go get cleaned up? We can continue some other time." You put down the tools, smile and thank him for helping you before leaving.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to the garages', goto: ['pav_complex', 'garages'] },
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    ]);
  } },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).curacts ?? 0) === '') {
    qspCall(s, 'stat', '');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      // TODO-QSP: act 'Go to your stepfather''s garage': minut += 5
      scene.actions([{ label: 'Continue', goto: ['gargazel', ''] }]);
    }
    scene.actions([
      { label: 'Go back to the courtyard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['pav_complex', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'garages':
      enterGarages(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_complex: LocationDef = {
  name: 'pav_complex',
  title: '<center><h2>Five Eight Estate</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
