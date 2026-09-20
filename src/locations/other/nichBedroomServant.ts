import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your Bedroom in Nicholas\' Apartment</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bedroomServant.jpg');
  scene.text('Your bedroom is fairly large, considering you\'re only an employee.');
  scene.text('There is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">double bed</a> and an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027alarmclock/u0027, /u0027start/u0027); return false;">alarm clock</a>.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  scene.text('Half a wall is taken up by an expensive-looking <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a>.');
  scene.text('There\'s a make-up table with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> beside the wardrobe.');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
    (s as any).komp = ' with your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a>.';
  } else {
    (s as any).komp = '.';
  }
  scene.text('A luxurious <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027divan/u0027, /u0027start/u0027); return false;">leather sofa</a> is on the other side of the wardrobe.');
  scene.text('Mounted on the wall opposite the sofa is a big flat screen <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027TV/u0027, /u0027start/u0027); return false;">TV</a>.');
  // TODO-QSP: dynamic text: Under the window is a nice <a href="exec:gt ''nichBedroomServant'', ''desk''">de...
  scene.text(`Under the window is a nice <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027desk/u0027); return false;">desk</a>${((s as any).komp || '')}`);
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>Your hula hoop stands in a corner of the room. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('Your jump rope is sitting on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('A yoga mat is rolled up in a corner next to the wardrobe. ');
  }
  if (((s as any).mishka ?? 0) > 0) {
    // TODO-QSP: dynamic text: On one of the shelves, you''ve placed your <<mishka>> teddy bear'+iif(mishka = 1...
    scene.text('On one of the shelves, you\'ve placed your ' + ((s as any).mishka || '') + ' teddy bear\'+iif(mishka = 1, \', \'s\')+\'.');
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).nichSalaryOutstanding ?? 0) > 0) {
    // TODO-QSP: dynamic text: On top of your desk lies your paycheck of <<$func(''money'', ''string_profit'', ...
    scene.text(`On top of your desk lies your paycheck of ${qspFunc(s, 'money', 'string_profit', ((s as any).nichSalaryOutstanding || ''))} (<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027redeemSalary/u0027); return false;">redeem</a>).`);
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  qspCall(s, 'music_actions', 'start');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  if (((s as any).sick ?? 0) >= 1) {
    scene.actions([
      { label: 'Get some bed rest (illness)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 240;
    (st as any).sick = ((st as any).sick ?? 0) - (1);
    if (((st as any).sick ?? 0) < 0) {
      (st as any).sick = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sick' + (Math.floor(Math.random() * 7) + 11) + '.jpg');
    scene.text('You lie in bed, coughing, sneezing, blowing your nose… and, as if that wasn\'t enough, you also think you might be getting a headache.');
    scene.text('Drifting in and out of sleep, you spend about 4 hours tossing and turning, trying to sweat out the illness, and you actually feel better when you decide to stretch your legs.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You hide a porn magazine under your mattress.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    // TODO-QSP: dynamic text: You have hidden <<mc_inventory[''cocaine'']>> doses of Pale Lady behind your war...
    scene.text(`You have hidden ${((s as any).mc_inventory ?? 0)?.['cocaine'] ?? ''} doses of Pale Lady behind your wardrobe.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take some cocaine (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You take a small dose of coke and not long after, you start to feel great, as if you could do anything, <b>be</b> anything - but you\'re also starting to feel incredibly horny.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  scene.text('');
  scene.text('On the wall next to your desk hangs your work schedule:');
  if (((s as any).nichVactionTil ?? 0) >= ((s as any).daystart ?? 0)) {
    scene.text('<b>You don\'t have to work today.</b>');
    if (((s as any).nichVactionTil ?? 0) === ((s as any).daystart ?? 0) + 1) {
      scene.text('Tomorrow is also a free day.');
    } else {
      if (((s as any).nichVactionTil ?? 0) > ((s as any).daystart ?? 0) + 1) {
        // TODO-QSP: dynamic text: The next '+(nichVactionTil-daystart)+' days are also free.
        scene.text('The next \'+(nichVactionTil-daystart)+\' days are also free.');
      }
    }
  }
  // TODO-QSP: dynamic text: You should start preparing breakfast before '+func('time', 'get_time_string', 7,...
  scene.text('You should start preparing breakfast before 7:15 during the week and before 8:15 on weekends.');
  if ((((s as any).thinkpreg ?? 0) > 0  ||  ((s as any).knowpreg ?? 0) > 0)  &&  (!((s as any).nichPregnancy ?? 0))) {
    scene.text('');
    scene.text('<b>You are pregnant but Nicholas hasn\'t realized it yet. He won\'t allow you to continue working for him if he figures it out, that\'s for sure. Maybe you should wear baggy clothes to hide your condition?</b>');
  }
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'servant');
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set the Nicholas house as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['nichBedroomServant', ''] },
    ]);
  }
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    if (((st as any).nichEvtGalaTele1 ?? 0) === 1  &&  ((st as any).nichGalaOpinion ?? 0) === 1  &&  ((Math.floor(Math.random() * 100) + 1) <= 20  ||  ((st as any).nichDebug ?? 0) === 1)) {
      qspGoto(st, 'nichBedroomServant', 'evtBodyguardIntim1');
    } else {
      if (((st as any).nichGalaOpponent ?? 0) === 31  &&  ((Math.floor(Math.random() * 100) + 1) <= 10  ||  ((st as any).nichDebug ?? 0) === 1)) {
      } else {
        if (((st as any).clothingworntype ?? 0) !== 'nude') {
          (st as any).minut = ((st as any).minut ?? 0) + 1;
          qspGoto(st, 'nichApartment', '');
        } else {
          dynamicGoto(st, 'curloc');
        }
      }
    }
  } },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
    { label: 'Go to the servant bathroom', handler: (st: GameState) => {
    qspGoto(st, 'nichBathServant', '');
  } },
    { label: 'Study (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'exp_gain', 'intel', 1);
    scene.img('images/pc/activities/study.jpg');
    scene.text('You spend two hours studying and feel a little smarter now.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your Bedroom in Nicholas\' Apartment</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bedroomServant.jpg');
  scene.text('Your bedroom is fairly large, considering you\'re only an employee.');
  scene.text('There is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">double bed</a> and an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027alarmclock/u0027, /u0027start/u0027); return false;">alarm clock</a>.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  scene.text('Half a wall is taken up by an expensive-looking <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a>.');
  scene.text('There\'s a make-up table with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> beside the wardrobe.');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
    (s as any).komp = ' with your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a>.';
  } else {
    (s as any).komp = '.';
  }
  scene.text('A luxurious <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027divan/u0027, /u0027start/u0027); return false;">leather sofa</a> is on the other side of the wardrobe.');
  scene.text('Mounted on the wall opposite the sofa is a big flat screen <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027TV/u0027, /u0027start/u0027); return false;">TV</a>.');
  // TODO-QSP: dynamic text: Under the window is a nice <a href="exec:gt ''nichBedroomServant'', ''desk''">de...
  scene.text(`Under the window is a nice <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027desk/u0027); return false;">desk</a>${((s as any).komp || '')}`);
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>Your hula hoop stands in a corner of the room. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('Your jump rope is sitting on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('A yoga mat is rolled up in a corner next to the wardrobe. ');
  }
  if (((s as any).mishka ?? 0) > 0) {
    // TODO-QSP: dynamic text: On one of the shelves, you''ve placed your <<mishka>> teddy bear'+iif(mishka = 1...
    scene.text('On one of the shelves, you\'ve placed your ' + ((s as any).mishka || '') + ' teddy bear\'+iif(mishka = 1, \', \'s\')+\'.');
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).nichSalaryOutstanding ?? 0) > 0) {
    // TODO-QSP: dynamic text: On top of your desk lies your paycheck of <<$func(''money'', ''string_profit'', ...
    scene.text(`On top of your desk lies your paycheck of ${qspFunc(s, 'money', 'string_profit', ((s as any).nichSalaryOutstanding || ''))} (<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027redeemSalary/u0027); return false;">redeem</a>).`);
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  qspCall(s, 'music_actions', 'start');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  if (((s as any).sick ?? 0) >= 1) {
    scene.actions([
      { label: 'Get some bed rest (illness)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 240;
    (st as any).sick = ((st as any).sick ?? 0) - (1);
    if (((st as any).sick ?? 0) < 0) {
      (st as any).sick = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sick' + (Math.floor(Math.random() * 7) + 11) + '.jpg');
    scene.text('You lie in bed, coughing, sneezing, blowing your nose… and, as if that wasn\'t enough, you also think you might be getting a headache.');
    scene.text('Drifting in and out of sleep, you spend about 4 hours tossing and turning, trying to sweat out the illness, and you actually feel better when you decide to stretch your legs.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You hide a porn magazine under your mattress.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    // TODO-QSP: dynamic text: You have hidden <<mc_inventory[''cocaine'']>> doses of Pale Lady behind your war...
    scene.text(`You have hidden ${((s as any).mc_inventory ?? 0)?.['cocaine'] ?? ''} doses of Pale Lady behind your wardrobe.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take some cocaine (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You take a small dose of coke and not long after, you start to feel great, as if you could do anything, <b>be</b> anything - but you\'re also starting to feel incredibly horny.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  scene.text('');
  scene.text('On the wall next to your desk hangs your work schedule:');
  if (((s as any).nichVactionTil ?? 0) >= ((s as any).daystart ?? 0)) {
    scene.text('<b>You don\'t have to work today.</b>');
    if (((s as any).nichVactionTil ?? 0) === ((s as any).daystart ?? 0) + 1) {
      scene.text('Tomorrow is also a free day.');
    } else {
      if (((s as any).nichVactionTil ?? 0) > ((s as any).daystart ?? 0) + 1) {
        // TODO-QSP: dynamic text: The next '+(nichVactionTil-daystart)+' days are also free.
        scene.text('The next \'+(nichVactionTil-daystart)+\' days are also free.');
      }
    }
  }
  // TODO-QSP: dynamic text: You should start preparing breakfast before '+func('time', 'get_time_string', 7,...
  scene.text('You should start preparing breakfast before 7:15 during the week and before 8:15 on weekends.');
  if ((((s as any).thinkpreg ?? 0) > 0  ||  ((s as any).knowpreg ?? 0) > 0)  &&  (!((s as any).nichPregnancy ?? 0))) {
    scene.text('');
    scene.text('<b>You are pregnant but Nicholas hasn\'t realized it yet. He won\'t allow you to continue working for him if he figures it out, that\'s for sure. Maybe you should wear baggy clothes to hide your condition?</b>');
  }
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'servant');
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set the Nicholas house as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['nichBedroomServant', ''] },
    ]);
  }
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    if (((st as any).nichEvtGalaTele1 ?? 0) === 1  &&  ((st as any).nichGalaOpinion ?? 0) === 1  &&  ((Math.floor(Math.random() * 100) + 1) <= 20  ||  ((st as any).nichDebug ?? 0) === 1)) {
      qspGoto(st, 'nichBedroomServant', 'evtBodyguardIntim1');
    } else {
      if (((st as any).nichGalaOpponent ?? 0) === 31  &&  ((Math.floor(Math.random() * 100) + 1) <= 10  ||  ((st as any).nichDebug ?? 0) === 1)) {
      } else {
        if (((st as any).clothingworntype ?? 0) !== 'nude') {
          (st as any).minut = ((st as any).minut ?? 0) + 1;
          qspGoto(st, 'nichApartment', '');
        } else {
          dynamicGoto(st, 'curloc');
        }
      }
    }
  } },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
    { label: 'Go to the servant bathroom', handler: (st: GameState) => {
    qspGoto(st, 'nichBathServant', '');
  } },
    { label: 'Study (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'exp_gain', 'intel', 1);
    scene.img('images/pc/activities/study.jpg');
    scene.text('You spend two hours studying and feel a little smarter now.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReturn(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Your Bedroom in Nicholas\' Apartment</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/bedroomServant.jpg');
  scene.text('Your bedroom is fairly large, considering you\'re only an employee.');
  scene.text('There is a small <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">double bed</a> and an <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027alarmclock/u0027, /u0027start/u0027); return false;">alarm clock</a>.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  scene.text('Half a wall is taken up by an expensive-looking <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a>.');
  scene.text('There\'s a make-up table with a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> beside the wardrobe.');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
    (s as any).komp = ' with your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a>.';
  } else {
    (s as any).komp = '.';
  }
  scene.text('A luxurious <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027divan/u0027, /u0027start/u0027); return false;">leather sofa</a> is on the other side of the wardrobe.');
  scene.text('Mounted on the wall opposite the sofa is a big flat screen <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027TV/u0027, /u0027start/u0027); return false;">TV</a>.');
  // TODO-QSP: dynamic text: Under the window is a nice <a href="exec:gt ''nichBedroomServant'', ''desk''">de...
  scene.text(`Under the window is a nice <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027desk/u0027); return false;">desk</a>${((s as any).komp || '')}`);
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>Your hula hoop stands in a corner of the room. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('Your jump rope is sitting on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('A yoga mat is rolled up in a corner next to the wardrobe. ');
  }
  if (((s as any).mishka ?? 0) > 0) {
    // TODO-QSP: dynamic text: On one of the shelves, you''ve placed your <<mishka>> teddy bear'+iif(mishka = 1...
    scene.text('On one of the shelves, you\'ve placed your ' + ((s as any).mishka || '') + ' teddy bear\'+iif(mishka = 1, \', \'s\')+\'.');
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).nichSalaryOutstanding ?? 0) > 0) {
    // TODO-QSP: dynamic text: On top of your desk lies your paycheck of <<$func(''money'', ''string_profit'', ...
    scene.text(`On top of your desk lies your paycheck of ${qspFunc(s, 'money', 'string_profit', ((s as any).nichSalaryOutstanding || ''))} (<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichBedroomServant/u0027, /u0027redeemSalary/u0027); return false;">redeem</a>).`);
  }
  qspCall(s, 'library_functions', 'set_home_read_acts');
  qspCall(s, 'music_actions', 'start');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    qspGoto(s, 'tobiQW', 'start');
  }
  if (((s as any).sick ?? 0) >= 1) {
    scene.actions([
      { label: 'Get some bed rest (illness)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 240;
    (st as any).sick = ((st as any).sick ?? 0) - (1);
    if (((st as any).sick ?? 0) < 0) {
      (st as any).sick = 0;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/sick' + (Math.floor(Math.random() * 7) + 11) + '.jpg');
    scene.text('You lie in bed, coughing, sneezing, blowing your nose… and, as if that wasn\'t enough, you also think you might be getting a headache.');
    scene.text('Drifting in and out of sleep, you spend about 4 hours tossing and turning, trying to sweat out the illness, and you actually feel better when you decide to stretch your legs.');
    scene.actions([
      { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.text('You hide a porn magazine under your mattress.');
    qspCall(s, 'library_functions', 'set_read_porn_act');
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    // TODO-QSP: dynamic text: You have hidden <<mc_inventory[''cocaine'']>> doses of Pale Lady behind your war...
    scene.text(`You have hidden ${((s as any).mc_inventory ?? 0)?.['cocaine'] ?? ''} doses of Pale Lady behind your wardrobe.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take some cocaine (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You take a small dose of coke and not long after, you start to feel great, as if you could do anything, <b>be</b> anything - but you\'re also starting to feel incredibly horny.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  scene.text('');
  scene.text('On the wall next to your desk hangs your work schedule:');
  if (((s as any).nichVactionTil ?? 0) >= ((s as any).daystart ?? 0)) {
    scene.text('<b>You don\'t have to work today.</b>');
    if (((s as any).nichVactionTil ?? 0) === ((s as any).daystart ?? 0) + 1) {
      scene.text('Tomorrow is also a free day.');
    } else {
      if (((s as any).nichVactionTil ?? 0) > ((s as any).daystart ?? 0) + 1) {
        // TODO-QSP: dynamic text: The next '+(nichVactionTil-daystart)+' days are also free.
        scene.text('The next \'+(nichVactionTil-daystart)+\' days are also free.');
      }
    }
  }
  // TODO-QSP: dynamic text: You should start preparing breakfast before '+func('time', 'get_time_string', 7,...
  scene.text('You should start preparing breakfast before 7:15 during the week and before 8:15 on weekends.');
  if ((((s as any).thinkpreg ?? 0) > 0  ||  ((s as any).knowpreg ?? 0) > 0)  &&  (!((s as any).nichPregnancy ?? 0))) {
    scene.text('');
    scene.text('<b>You are pregnant but Nicholas hasn\'t realized it yet. He won\'t allow you to continue working for him if he figures it out, that\'s for sure. Maybe you should wear baggy clothes to hide your condition?</b>');
  }
  if (((s as any).nichWork ?? 0) === 2) {
    qspCall(s, 'nichChore', 'inspect', 'servant');
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set the Nicholas house as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['nichBedroomServant', ''] },
    ]);
  }
  scene.actions([
    { label: 'Go to the hallway', handler: (st: GameState) => {
    if (((st as any).nichEvtGalaTele1 ?? 0) === 1  &&  ((st as any).nichGalaOpinion ?? 0) === 1  &&  ((Math.floor(Math.random() * 100) + 1) <= 20  ||  ((st as any).nichDebug ?? 0) === 1)) {
      qspGoto(st, 'nichBedroomServant', 'evtBodyguardIntim1');
    } else {
      if (((st as any).nichGalaOpponent ?? 0) === 31  &&  ((Math.floor(Math.random() * 100) + 1) <= 10  ||  ((st as any).nichDebug ?? 0) === 1)) {
      } else {
        if (((st as any).clothingworntype ?? 0) !== 'nude') {
          (st as any).minut = ((st as any).minut ?? 0) + 1;
          qspGoto(st, 'nichApartment', '');
        } else {
          dynamicGoto(st, 'curloc');
        }
      }
    }
  } },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
    { label: 'Open wardrobe', goto: ['wardrobe', 'start'] },
    { label: 'Go to the servant bathroom', handler: (st: GameState) => {
    qspGoto(st, 'nichBathServant', '');
  } },
    { label: 'Study (2:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'exp_gain', 'intel', 1);
    scene.img('images/pc/activities/study.jpg');
    scene.text('You spend two hours studying and feel a little smarter now.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvtBodyguardIntim1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/taras/encounter1.jpg');
  scene.text('Before you have the chance to leave your room, you get pushed back inside by a man you don\'t know.');
  scene.text('Taken by surprise, you can only gasp as he painfully turns your right arm around, forcing you into a bent over position.');
  scene.text('He obviously knows what he is doing. He has expertly subdued you with just one hand, leaving you next to no room to move.');
  scene.text('"Let me introduce myself. My name is Taras, but you will call me Sir. I am the bodyguard of Mistress Gala. I am responsible for protecting not only her life and health, but also the good reputation of her family."');
  scene.text('"She told me that her husband hired a little skank as his new maid."');
  scene.text('You gasp in surprise as he pulls up your skirt leaving your butt exposed.');
  scene.text('"And from the looks of it she is right. Not that I would have doubted her word."');
  scene.text('He smacks your left buttock painfully.');
  scene.text('"Of course that can\'t be accepted."');
  scene.text('He smacks your other buttock.');
  scene.text('"Consider this your first and only warning. If you whore around this house, if you make Mistress Gala unhappy in any way, you will regret it."');
  scene.text('He smacks your left buttock again.');
  scene.text('"Do you understand?"');
  scene.text('Unable to resist in you current position you meekly nod your head "Yes."');
  scene.text('The right buttock again.');
  scene.text('"Yes what?"');
  scene.text('"Yes sir, I understand."');
  scene.text('He waits for another few seconds before gently stroking your hair and then releasing you.');
  scene.text('"Good girl. I would hate to actually hurt you." With this obvious lie, he leaves your room.');
  qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
  (s as any).nichGalaOpinion = 2;
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterDesk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichGalaOpponent ?? 0) === 21) {
    scene.img('images/characters/city/gala/necklace.jpg');
    scene.text('You open your desk. Something doesn\'t seem to be right. After closer inspection, you find Gala\'s missing necklace hidden under some of your items.');
    scene.actions([
      { label: 'Leave it there', handler: (st: GameState) => {
    qspGoto(st, 'stol', 'start');
  } },
      { label: 'Bring it back to where it belongs', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    (st as any).nichGalaOpponent = 22;
    qspGoto(st, 'nichBedroomServant', 'return');
  } },
    ]);
  } else {
    qspGoto(s, 'stol', 'start');
  }
  scene.build();
}

function enterRedeemSalary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', ((s as any).nichSalaryOutstanding ?? 0), 'bank');
  // TODO-QSP: dynamic text: Your salary of <<$func(''money'', ''string_profit'', nichSalaryOutstanding)>> is...
  scene.text(`Your salary of ${qspFunc(s, 'money', 'string_profit', ((s as any).nichSalaryOutstanding || ''))} is transferred to your bank account.`);
  scene.actions([
    { label: 'Back', goto: ['nichBedroomServant', 'return'] },
  ]);
  scene.build();
}

function enterSleepEvents(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    if (((s as any).nichGalaOpponent ?? 0) === 30  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).nichDebug ?? 0) === 1) {
      qspGoto(s, 'nichBedroomServant', 'sleepEvents', '1000');
    } else {
      if (((s as any).nichGalaContractTaras ?? 0) === 1  &&  ((s as any).nichGalaContractTarasLast ?? 0) + (Math.floor(Math.random() * 8) + 3) <= ((s as any).daystart ?? 0)) {
        qspGoto(s, 'nichBedroomServant', 'sleepEvents', '100');
      }
    }
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 100) {
      (s as any).nichGalaContractTarasLast = ((s as any).daystart ?? 0);
      (s as any).nichRand = (-1);
      if (((s as any).nichGalaContractTarasCount ?? 0) > 10) {
        (s as any).nichRand = (Math.floor(Math.random() * 11) + 0);
      }
      if (((s as any).nichTarSaunaPay ?? 0) >= 20000) {
        scene.img('images/characters/city/gala/slave/taras/chat.jpg');
        scene.text('You wake up to the feeling of something heavy resting on you. A little bit sleepy you open your eyes and see the face of Taras directly in front of yours.');
        scene.text('"Slut, you did your job well. You earned all the money I needed and I was able to, well… start my preparations."');
        scene.text('He hesitates for a second.');
        scene.text('"I guess I can as well introduce you to my plan. As you might have guessed by now I have strong feelings for Mistress Gala. Sadly she didn\'t realize that she would be better off with me than with her husband. That\'s why I need to spend some quality time with her to convince her."');
        scene.text('"Of course she wouldn\'t agree to it if I just asked her. That\'s why I needed to create a little ruse. I needed your money so I was able to prepare our travel without anybody realizing that I was doing it."');
        scene.text('"And now I need your help again. I need a trigger for Mistress Gala to ask me to get her out of city, so the rest of the staff and the family don\'t get suspicious. And this trigger is you."');
        scene.text('"Lets just say that Mistress Gala has some secrets. And lets also say that she doesn\'t want to be around when they get revealed."');
        scene.text('"There is some problem I helped her with some time ago, and it is perfect for this situation."');
        scene.text('"Just tell her that somebody from the police called and that it\'s about a girl named Katinka. Leave everything else to me."');
        scene.text('"You will probably see neither of us ever again. But you can be assured that you helped true love to find its way."');
        scene.text('He stands up and leaves your room.');
        scene.text('');
        scene.text('<b>You should talk to Gala about this. You can either follow Taras\'s plan or expose it.</b>');
        (s as any).nichGalaTarasPlan = 1;
        scene.actions([
          { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
        ]);
      } else {
        if (((s as any).nichTarSaunaPay ?? 0) > 10000) {
          scene.img('images/characters/city/gala/slave/taras/chat.jpg');
          scene.text('You wake up to the feeling of something heavy resting on you. A little bit sleepy you open your eyes and see the face of Taras directly in front of yours.');
          scene.text('"Slut, I heard that you are doing a fine job in the sauna. I knew you would perform this job with enthusiasm."');
          // TODO-QSP: dynamic text: "Don''t slack off now! I need <<$func(''money'', ''string_profit'', 20000)>> in ...
          scene.text(`"Don't slack off now! I need ${qspFunc(s, 'money', 'string_profit', 20000)} in total from you. I am sure you can easily earn them for me. You are already more than half-way there."`);
          scene.text('He gives you a light smack on your face, then he stands up and leaves your room.');
          (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
          scene.actions([
            { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
          ]);
        } else {
          if (((s as any).nichGalaContractTarasCount ?? 0) === 10) {
            scene.img('images/characters/city/gala/slave/taras/chat.jpg');
            scene.text('You wake up to the feeling of something heavy resting on you. A little bit sleepy you open your eyes and see the face of Taras directly in front of yours.');
            scene.text('"Oh, good. You are awake."');
            scene.text('He softly runs his hand down your cheek. You didn\'t even know this soft side of his existed.');
            scene.text('"I have the feeling that the both of us are getting along quite well."');
            scene.text('You look at him in disbelief. Is he serious?');
            scene.text('"As a matter of fact, there is something you can do for me. I need to get some money off the books. Lets just say it\'s for a personal hobby of mine."');
            scene.text('You feel him touching your pussy.');
            scene.text('"And since you are such an obedient little slut, I thought I could involve you in this. It is actually pretty simple. I have a friend working at the sauna in the residential area. You go there and service customers. I get the money, you get your holes filled. Everybody wins. Of course I whitelisted the sauna for this little implant you are wearing."');
            scene.text('"Oh, and Mistress Gala doesn\'t need to know about this. Lets just say it\'s a surprise for her."');
            scene.text('He stands up and leaves your room.');
            scene.text('');
            scene.text('<b>Maybe you should go to this sauna to avoid being punished by Taras?</b>');
            (s as any).nichGalaImplant = 2;
            (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
            (s as any).nichTarSauna = 1;
            (s as any).nichTarSaunaPay = 0;
            (s as any).saunaWhore = Math.max(((s as any).SaunaWhore ?? 0), 1);
            scene.actions([
              { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
            ]);
          } else {
            if (((s as any).nichGalaContractTarasCount ?? 0) === 0  ||  (!((s as any).nichRand ?? 0))) {
              scene.img('images/characters/city/gala/slave/taras/bed7.jpg');
              scene.text('There is a sudden pain in your ass cheek and you are instantly awake. Somebody has smacked your ass.');
              scene.text('As you come to, you realize that your mouth is shut by some sort of sticking plaster and your wrists and ankles are chained to each other with short chains.');
              scene.text('In front of your bed you see Taras.');
              scene.text('"Sorry, slut. I don\'t have time for you, so you have to enjoy this substitute."');
              scene.text('He pushes a vibrator into your vagina and sets it to the max setting.');
              qspCall(s, 'arousal', 'vaginal', 30, 'bound');
              qspCall(s, 'arousal', 'end');
              qspCall(s, 'stat', '');
              scene.text('After about half an hour Taras returns and removes the vibrator.');
              scene.text('"I know you prefer the real deal. Don\'t worry, it won\'t take long before you can experience it again."');
              scene.text('He unties you and leaves your room.');
              (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
              scene.actions([
                { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
              ]);
            } else {
              if (((s as any).nichGalaContractTarasCount ?? 0) === 1  ||  ((s as any).nichRand ?? 0) === 1) {
                scene.img('images/characters/city/gala/slave/taras/bed9.jpg');
                scene.text('You have an erotic dream of being tied up tightly.');
                scene.text('Suddenly you are wide awake as your nostrils are blocked. You open your mouth to gasp for air and feel a dick being pushed into it.');
                scene.text('It takes a few seconds for you to realize what is happening. You are on your back, your hands tied behind you. It wasn\'t a dream after all.');
                scene.text('The man who slowly fucks your skull upside down must be Taras, but you can only guess since you see nothing of him but his balls directly in front of your face.');
                scene.text('It doesn\'t take long before Taras cums into your mouth, but he doesn\'t pull his dick out.');
                scene.text('"Swallow, slut!"');
                scene.text('Having no choice, you do as ordered.');
                scene.text('"I knew you were a dirty cum-eater. At least you are good for something."');
                scene.text('He unties one of your hands so you are able to remove the other ropes. Then he leaves your room without saying another word.');
                qspCall(s, 'arousal', 'bj', 5, 'bound', 'rough', 'rape');
                qspCall(s, 'arousal', 'end');
                qspCall(s, 'cum_call', 'mouth_swallow', 'A513', 1);
                qspCall(s, 'stat', '');
                (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                scene.actions([
                  { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                ]);
              } else {
                if (((s as any).nichGalaContractTarasCount ?? 0) === 2  ||  ((s as any).nichRand ?? 0) === 2) {
                  scene.img('images/characters/city/gala/slave/taras/bed3.jpg');
                  scene.text('Just as you are falling asleep, you feel yourself being lifted out of bed. You are immediately wide awake.');
                  scene.text('Realizing you are awake, Taras places you on your feet and twists your arm behind your back while pushing you forward. There is no way for you to fight back.');
                  scene.text('"Lets go, slut!"');
                  scene.text('He leads you up to the attic. There, he chains you up on your stomach and places a belt around your neck.');
                  scene.text('He then probes your ass with his index finger before he begins to fuck it mercilessly.');
                  scene.text('At the same time, he pulls at the belt around your neck, and you begin to choke. You begin to panic as you get less and less air. Taras obviously enjoys you struggling in panic and only releases the belt when you are close to blacking out.');
                  scene.text('You haven\'t even caught your breath when he repeats his vile game. It goes on several times before he finally is about to cum.');
                  scene.text('Only this time he doesn\'t release the belt. The last thing you feel before everything goes black is him cumming inside of your ass.');
                  scene.text('…');
                  scene.text('You wake up back in your bed. Apparently Taras carried you down here after he was done with you.');
                  qspCall(s, 'arousal', 'anal', 5, 'bound', 'rough', 'rape');
                  qspCall(s, 'arousal', 'end');
                  qspCall(s, 'cum_call', 'anus', 'A513', 1);
                  qspCall(s, 'stat', '');
                  (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                  scene.actions([
                    { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                  ]);
                } else {
                  if (((s as any).nichGalaContractTarasCount ?? 0) === 3  ||  ((s as any).nichRand ?? 0) === 3) {
                    scene.img('images/characters/city/gala/slave/taras/bed6.jpg');
                    scene.text('You wake up to a painful hit on your butt. Instinctively you try to reach down there, but your wrists and ankles are tied to the opposite corners of your bed. There is nothing you can do besides lie on your stomach.');
                    scene.text('"Good, you are awake."');
                    scene.text('Apparently Taras is standing right behind you.');
                    scene.text('"Sadly I don\'t have time to play with you. But I brought a little something so you don\'t forget me."');
                    scene.text('He pushes a vibrator into your exposed pussy and turns it on. At first you don\'t feel anything, but then a powerful vibration starts. Taras watches you struggle for a few minutes, then he leaves the room.');
                    scene.text('Suddenly the vibration is off again only to kick back on about 5 minutes later. Apparently the vibrator is set to a random program.');
                    qspCall(s, 'arousal', 'vaginal_vibe', 30, 'bound');
                    qspCall(s, 'arousal', 'end');
                    qspCall(s, 'stat', '');
                    scene.text('You are just too exhausted to stay awake for much longer. During another pause of the vibrator you fall asleep. You have some erotic dreams about being fucked by various guys and girls with the ongoing vibrations of the vibrator being a part of it.');
                    scene.text('You don\'t know how long Taras left the vibrator inside of you, but when you wake up next, you are untied and the vibrator is gone.');
                    (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                    scene.actions([
                      { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                    ]);
                  } else {
                    if (((s as any).nichGalaContractTarasCount ?? 0) === 4  ||  ((s as any).nichRand ?? 0) === 4) {
                      scene.img('images/characters/city/gala/slave/taras/bed4x1.jpg');
                      scene.text('You get pulled out of your sleep abruptly as your legs get pulled upwards. You want to scream in surprise, but your mouth is taped shut, as are your eyes.');
                      scene.text('You try to get away, but your hands are tied up as well. The person who restrained you also tied your ankles with a rope connected to the head end of the bed, leaving you completely exposed.');
                      scene.text('"Very nice. We just have to add a final touch."');
                      scene.text('It\'s the voice of Taras.');
                      scene.text('You feel your breasts being squeezed as Taras ties them up as well.');
                      scene.text('After he is done, he wastes no time and begins to fuck you.');
                      qspCall(s, 'arousal', 'vaginal', 10, 'bound');
                      qspCall(s, 'arousal', 'end');
                      scene.text('After about 10 minutes, you feel him cumming inside of you.');
                      qspCall(s, 'cum_call', '', '', 'A513', 1);
                      qspCall(s, 'stat', '');
                      scene.text('Without saying another word, he stands up and leaves the room.');
                      scene.text('He can\'t leave you tied up like this, can he?');
                      scene.actions([
                        { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed4x2.jpg');
    scene.text('You don\'t know how long Taras was gone, but you must have fallen asleep at some point.');
    scene.text('You get woken up by Taras fucking you again. At first you thought this was a dream, but then you realize that this is reality.');
    qspCall(st, 'arousal', 'vaginal', 20, 'bound');
    qspCall(st, 'arousal', 'end');
    scene.text('This time it takes a little longer before Taras cums. When he does, he pulls out of you and sends his load right onto your face.');
    qspCall(st, 'cum_call', 'face', 'A513', 1);
    qspCall(st, 'stat', '');
    scene.text('"I am sure you will enjoy this."');
    scene.text('He unties your right wrist, allowing you to remove the other restraints, before he leaves your room again.');
    (st as any).nichGalaContractTarasCount = ((st as any).nichGalaContractTarasCount ?? 0) + (1);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } },
                      ]);
                    } else {
                      if (((s as any).nichGalaContractTarasCount ?? 0) === 5  ||  ((s as any).nichRand ?? 0) === 5) {
                        scene.img('images/characters/city/gala/slave/taras/bed2.jpg');
                        scene.text('You are suddenly awake as you are dragged out of your bed. You want to scream, but a rope around your neck makes it hard for you to breath and impossible to make a sound.');
                        scene.text('Starting to panic you try to struggle free as you get pushed to the floor. Your left arm is twisted behind your back, making every attempt to get free futile.');
                        scene.text('Then you feel a cock being rammed into your ass. You try to get free frantically. Whenever you settle down a bit the rope around your neck gets tightened until you start to panic again.');
                        qspCall(s, 'arousal', 'vaginal', 15, 'bound');
                        qspCall(s, 'arousal', 'end');
                        scene.text('Finally you feel that your tormentor is cumming inside of you.');
                        qspCall(s, 'cum_call', 'anus', 'A513', 1);
                        scene.text('He drops the rope and pets your head.');
                        scene.text('"Well done, slut. If you haven\'t struggled that much, I wouldn\'t have had so much fun."');
                        scene.text('It was Taras all along. He picks up his rope and leaves your room.');
                        (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                        scene.actions([
                          { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                        ]);
                      } else {
                        if (((s as any).nichGalaContractTarasCount ?? 0) === 6  ||  ((s as any).nichRand ?? 0) === 6) {
                          scene.img('images/characters/city/gala/slave/taras/bed10.jpg');
                          scene.text('Suddenly you wake up. Your butt hurts. You realize that you are tied to your bed and that somebody is sitting next to you, spanking your ass.');
                          scene.text('"Silence, slut! You don\'t want to wake anybody up!"');
                          scene.text('Taras continues to spank you for about 30 minutes.');
                          qspCall(s, 'pain', '', 8, 'asscheeks', 'spank');
                          (s as any).minut = ((s as any).minut ?? 0) + 30;
                          qspCall(s, 'stat', '');
                          scene.text('After a while he seems to get tired. His hits get less frequent and less painful.');
                          scene.text('He gives you three last hits, then he stands up and unties you.');
                          scene.text('"At least you have a nice ass, slave."');
                          (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                          scene.actions([
                            { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                          ]);
                        } else {
                          if (((s as any).nichGalaContractTarasCount ?? 0) === 7  ||  ((s as any).nichRand ?? 0) === 7) {
                            scene.img('images/characters/city/gala/slave/taras/bed1x1.jpg');
                            scene.text('You get woken up by a slap to your breast. You want to shriek, but once again you are tied to your bed. A ball gag in your mouth prevents you from making any sound.');
                            scene.text('Opening your eyes you see Taras standing above you.');
                            scene.text('"Oh, good, you are awake. I think you have been a good slut lately, that\'s why I wanted to reward you."');
                            scene.actions([
                              { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed1x2.jpg');
    scene.text('He takes out a vibrator and pushes it inside your vagina. Then he turns it on. You feel the strong vibrations everywhere in your body.');
    scene.text('"I bet you will enjoy this. It will feel like being fucked by dozens of guys all night long."');
    scene.text('He leaves your room, leaving you tied up and being tormented by the vibrator.');
    qspCall(st, 'arousal', 'vaginal_vibe', 30, 'bound');
    scene.text('It feels like forever, but Taras does not return.');
    qspCall(st, 'arousal', 'vaginal_vibe', 30, 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed1x3.jpg');
    qspCall(st, 'arousal', 'vaginal_vibe', 30, 'bound');
    scene.text('You wait for what seems to be forever. The constant vibrations in your pussy began being painful long ago but you can\'t deny that they still arouse you as well.');
    qspCall(st, 'arousal', 'vaginal_vibe', 30, 'bound');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.text('Finally Taras returns and unties you. You waste no time and remove the vibrator, staring at him angrily.');
    scene.text('"I knew you would enjoy it. While normal people like me sleep at night, sluts like you want to get fucked all night long, and I am nothing but supportive in this regard."');
    scene.text('He leaves you with a grin on his face.');
    (st as any).nichGalaContractTarasCount = ((st as any).nichGalaContractTarasCount ?? 0) + (1);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } },
    ]);
  } },
                            ]);
                          } else {
                            if (((s as any).nichGalaContractTarasCount ?? 0) === 8  ||  ((s as any).nichRand ?? 0) === 8) {
                              scene.img('images/characters/city/gala/slave/taras/bed11.jpg');
                              scene.text('Suffocation… ');
                              scene.text('You open your eyes in panic. A rope around your neck makes it impossible for you to breath. You try to struggle, but you are completely tied up.');
                              scene.text('Just before you black out the rope gets loosened and you can gasp for air.');
                              scene.text('"Take a deep breath, slut. We are only beginning today\'s fun."');
                              scene.text('He tightens the rope again, and once again you feel yourself suffocating.');
                              scene.text('Then you hear the sound of his cell phone. He loosens the rope and takes a look at it.');
                              scene.text('"Damn. My services are required. I am sorry, but I am afraid we will have to continue our little fun another time."');
                              scene.text('He unties you and leaves your room without saying another word.');
                              (s as any).nichGalaContractTarasCount = ((s as any).nichGalaContractTarasCount ?? 0) + (1);
                              scene.actions([
                                { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
                              ]);
                            } else {
                              if (((s as any).nichGalaContractTarasCount ?? 0) === 9  ||  ((s as any).nichRand ?? 0) === 9) {
                                scene.img('images/characters/city/gala/slave/taras/bed5.jpg');
                                scene.text('No air…');
                                scene.text('You open your eyes in panic. There is a plastic bag over your head. You desperately try to remove it, but your hands are tied behind your back.');
                                scene.text('You try to get up, but you are already too weak and the darkness comes quickly. The last thing you see is Taras who is filming you with a small camcorder. He is grinning.');
                                scene.actions([
                                  { label: 'The end?', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed5.jpg');
    scene.text('As you wake up, you see Taras standing right in front of you. You are still tied up in your bed, and a gag in your mouth prevents you from making any intelligible sounds.');
    scene.text('"You liked that, did you? So did I. I\'m recording the fun we have together so I have something to watch in my spare time. Maybe I can even make some money selling the material."');
    scene.text('He holds the plastic bag in front of your face.');
    scene.text('"And you will be happy to provide me some additional material, won\'t you?"');
    scene.text('You desperately shake your head no, but he pulls the bag over your head nevertheless.');
    scene.text('It doesn\'t take long before the panic sets back in. You struggle wildly, but it\'s no use. You pass out again.');
    scene.actions([
      { label: 'Suffocate?', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed5.jpg');
    scene.text('You wake up once more. Your head spins like crazy. Taras is still in your room, and nothing about your situation has changed.');
    scene.text('"That was fun, don\'t you agree. How about another round?"');
    scene.text('You do everything you can, but pleading with your eyes, shaking your head, and making muffled sounds doesn\'t help.');
    scene.text('Soon you have the bag back over your head. Once again you panic as the suffocation sets in.');
    scene.actions([
      { label: 'Black out', handler: (st: GameState) => {
    scene.text('As you wake up this time, Taras is gone and you are untied.');
    scene.text('One horrific thought comes to your mind and makes you shiver: this man shows utter neglect for your safety. What if one day he kills you by accident?');
    (st as any).nichGalaContractTarasCount = ((st as any).nichGalaContractTarasCount ?? 0) + (1);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                                ]);
                              } else {
                                scene.img('images/characters/city/gala/slave/taras/bed8x1.jpg');
                                scene.text('You awaken to the feeling of something being pushed inside your mouth.');
                                scene.text('You try to push it away, only to find out that your arms are tied behind your back.');
                                scene.text('Opening your eyes, you only see the crotch of a man.');
                                scene.text('"Good, you are finally awake."');
                                scene.text('Of course it\'s Taras who is fucking your mouth.');
                                qspCall(s, 'arousal', 'bj', 5, 'bound', 'rough', 'rape\' & gs \'stat');
                                scene.actions([
                                  { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed8x2.jpg');
    scene.text('Taras pushes himself as far into your mouth as he can. You feel his dick deep in you throat.');
    scene.text('As he grabs your skull and pulls it to his crotch, it gets even harder for you to breath.');
    qspCall(st, 'arousal', 'bj', 5, 'bound', 'rough', 'rape\' & gs \'stat');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed8x3.jpg');
    scene.text('He turns you around and starts fucking your exposed pussy.');
    qspCall(st, 'arousal', 'vaginal', 5, 'bound', 'rough', 'rape\' & gs \'stat');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/taras/bed8x4.jpg');
    scene.text('It doesn\'t take long before he cums inside of you.');
    scene.text('"Well done, slave."');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', '', '', 'A513', 1);
    qspCall(st, 'stat', '');
    scene.text('He unties you and leaves your room again.');
    (st as any).nichGalaContractTarasCount = ((st as any).nichGalaContractTarasCount ?? 0) + (1);
    scene.actions([
      { label: 'Back to sleep', handler: (st: GameState) => {
    qspCall(st, 'pre_sleep_events', 'event_end');
  } },
    ]);
  } },
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
              }
            }
          }
        }
      }
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 1000) {
        (s as any).hour = 23;
        (s as any).minut = ((s as any).minut ?? 0) + 180;
        scene.text('In the middle of the night, you wake up from your sleep. You sense somebody is in your room watching you. You look around, but there is nobody to be seen.');
        scene.text('Maybe you are just paranoid?');
        scene.text('You decide to get back to sleep. You close your eyes and rest your head back on your pillow.');
        scene.text('Suddenly you feel a strong hand grabbing your face, sealing your mouth and nose shut while another hand pins you down by your hip.');
        scene.text('You try to scream, but you can\'t get a single sound out. The last thing you notice before you lose consciousness is a sweetish smell.');
        scene.text('<font color = red><b>Warning: This part of the story is currently not finished and most likely ends in a dead end. Click ignore to pass it.</b></font>');
        scene.actions([
          { label: 'Everything turns black', handler: (st: GameState) => {
    qspGoto(st, 'nichTaras', 'abdIntro');
  } },
          { label: 'Ignore', handler: (st: GameState) => {
    (st as any).nichGalaOpponent = 31;
    (st as any).inSleep = 0;
    qspGoto(st, 'nichBedroomServant', '');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'nichBedroomServant', '');
  (s as any).nichLoc = 'servant';
  (s as any).location_type = 'private';
  (s as any).locclass = 'bedr';
  if (((s as any).nichWork ?? 0) === 2) {
    if (((s as any).nichLastWorkDay ?? 0) !== ((s as any).daystart ?? 0)) {
      qspCall(s, 'nichUtil', 'startWorkday');
    }
    qspCall(s, 'nichUtil', 'checkOutfit');
  }
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'return':
      enterReturn(s, scene);
      break;
    case 'evtBodyguardIntim1':
      enterEvtBodyguardIntim1(s, scene);
      break;
    case 'desk':
      enterDesk(s, scene);
      break;
    case 'redeemSalary':
      enterRedeemSalary(s, scene);
      break;
    case 'sleepEvents':
      enterSleepEvents(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichBedroomServant: LocationDef = {
  name: 'nichBedroomServant',
  title: '<center><b>Your Bedroom in Nicholas\' Apartment</b></center>',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['Your bedroom is fairly large, considering you\'re only an employee.'],
  enter: enter,
};
