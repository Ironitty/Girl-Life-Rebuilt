import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).menu_loc = 'stripclub';
  (s as any).menu_arg = 'start';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      if (((s as any).hour ?? 0) >= 3  &&  ((s as any).hour ?? 0) <= 17) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 3  &&  ((s as any).hour ?? 0) <= 17) {
      }
    }
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Strip Club</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).hour ?? 0) >= 19  ||  ((s as any).hour ?? 0) <= 5) {
      scene.img('images/locations/city/redlight/stripclub/club_night_winter.jpg');
    } else {
      scene.img('images/locations/city/redlight/stripclub/club_day_winter.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) <= 5) {
      scene.img('images/locations/city/redlight/stripclub/club_night_summer.jpg');
    } else {
      scene.img('images/locations/city/redlight/stripclub/club_day_summer.jpg');
    }
  }
  if (((s as any).hour ?? 0) === 3) {
    scene.text('The strip club is closing, and the security guards are ushering everyone out.');
  } else {
    if (((s as any).hour ?? 0) >= 18  ||  ((s as any).hour ?? 0) < 3) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEntry(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEmployeeEntrance(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if ((((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_stripper') === 1)  ||  (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_bargirl') === 1)) {
        scene.text('The strip club is closed to the public, but employees can still enter through the back.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEmployeeEntrance(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: The strip club is closed. The sign on the door states that business hours are be...
        scene.text('The strip club is closed. The sign on the door states that business hours are between 18:00 and 3:00.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_redlight', 'start'] },
  ]);
  scene.build();
}

function enterEmployeeEntrance(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Head around to the back', handler: (st: GameState) => {
    if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  &&  qspFunc(s, 'jobs', 'has_booking_for_day', 'city_strip_stripper', ((s as any).daystart ?? 0))) {
      // TODO-QSP: dynamic text: "Evening, <<$pcs_strippername>>. Good crowd tonight," the bouncer says with a sm...
      scene.text(`"Evening, ${((s as any).pcs_strippername || '')}. Good crowd tonight," the bouncer says with a smile.`);
      scene.text('You give him a quick nod as you head for the stripper entrance round back.');
      scene.actions([
        { label: 'Use the stripper\'s entrance', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork', 'start'] },
      ]);
    } else {
      if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_work_day', 'city_strip_bargirl', ((s as any).daystart ?? 0)) === 1) {
        qspCall(s, 'jobs', 'get_shift_for_day', 'city_strip_bargirl', ((s as any).daystart ?? 0));
        if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_strip_bargirl') === 1) {
          scene.text('"Good crowd. Should be a busy bar tonight," the bouncer says with a smile.');
          scene.text('You give him a nod as he stands aside and lets you enter.');
          scene.actions([
            { label: 'Head to the bar', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork3', 'start'] },
          ]);
        } else {
          if (qspFunc(s, 'jobs', 'is_work_time', 'city_strip_bargirl') === 1) {
            if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).result_start ?? 0) + 60) {
              scene.text('"You\'re cutting it close. Get inside and get ready. Don\'t be surprised if some of your pay gets docked," the bouncer says with a frown.');
              // TODO-QSP: gs 'jobs', 'dock_pay', 'city_strip_bargirl', job_pay_rate['city_strip_bargirl'] / 3
              scene.text('You give him a nod as he stands aside and lets you enter.');
              scene.actions([
                { label: 'Head to the bar', handler: (st: GameState) => {
    (st as any).frost = 0;
  }, goto: ['stwork3', 'start'] },
              ]);
            } else {
              scene.text('"You\'re too late for your shift. Come back on your next scheduled night," the bouncer says while shaking his head.');
            }
          } else {
            if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).result_arrival ?? 0)) {
              // TODO-QSP: dynamic text: "Your shift isn't until later. Come back between '+func('time', 'get_time_string...
              scene.text('"Your shift isn\'t until later. Come back between 17:00 and 18:00," the bouncer reminds you.');
            } else {
              scene.text('"You\'re too late for your shift. Come back on your next scheduled night," the bouncer says while shaking his head.');
            }
          }
        }
      } else {
        if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed'  ||  ((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
          scene.text('"Decided to pay us a visit on your night off?" the bouncer asks.');
          scene.text('You nod and he stands aside to let you in.');
          if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
            scene.text('"I\'m sure the customers won\'t recognize you with clothes on," he says with a smile.');
            scene.actions([
              { label: 'Head over to the dressing room', goto: ['stwork', 'start'] },
            ]);
          }
          if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
            scene.text('"Have fun spending the night on the other side of the bar," he says with a smile.');
          }
          scene.actions([
            { label: 'Enter the club', goto: ['stripclub', 'main_floor'] },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
      { label: 'Go back to the front', goto: ['stripclub', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEntry(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_status ?? 0)?.['city_strip_stripper'] !== 'employed') {
    if (((s as any).pcs_dancero ?? 0) > 0  ||  ((s as any).pcs_inhib ?? 0) >= 40) {
      scene.actions([
        { label: 'Ask about working here', goto: ['stripclub', 'hire1'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'pcs_inhib', 'self', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ask about working here', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask about working here', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'force');
    qspGoto(s, 'stripclub', 'hire1');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enter the club', handler: (st: GameState) => {
    scene.text('<center><b>Strip Club</b></center>');
    if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
      scene.img('images/locations/city/redlight/stripclub/club_night_winter.jpg');
    } else {
      scene.img('images/locations/city/redlight/stripclub/club_night_summer.jpg');
    }
    if (((s as any).strip_club ?? 0)?.['id_check'] !== 0) {
      scene.text('Recognizing you from your previous visit, the bouncer nods and stands aside to let you enter.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPayEnter(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('You try to enter the club, but the bouncer stops you at the door.');
      scene.text('"Hold up. I\'m gonna need to see some ID."');
      if (((s as any).age ?? 0) >= 21) {
        scene.actions([
          { label: 'Seriously?', handler: (st: GameState) => {
    ((s as any).strip_club = (s as any).strip_club ?? {})['id_check'] = 1;
    scene.text('You roll your eyes. "Are you being serious? Do I look like some snot nosed teenager trying to sneak in and see some tits?"');
    scene.text('"Deadly," he replies. "ID or you\'re not getting in to \'see some tits.\'"');
    scene.text('You begrudingly rummage through your purse and pull out your passport. The bouncer takes a look at it and nods.');
    scene.text('"Nice picture," he laughs as he hands it back to you. "I was just messing with you. You\'re free to come in."');
    scene.text('You just roll your eyes at him as you stuff your passport back in your bag.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPayEnter(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).age ?? 0) >= 18  &&  ((s as any).age ?? 0) < 21) {
          scene.actions([
            { label: 'Show him your passport', handler: (st: GameState) => {
    ((s as any).strip_club = (s as any).strip_club ?? {})['id_check'] = 1;
    scene.text('You rummage through your purse and pull out your passport, showing him you\'re of legal age. The bouncer takes a look at it and nods.');
    scene.text('"Okay, you check out."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPayEnter(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if (((s as any).fakepassport ?? 0) === 1) {
            scene.actions([
              { label: 'Show him your fake passport', handler: (st: GameState) => {
    ((s as any).strip_club = (s as any).strip_club ?? {})['id_check'] = 1;
    scene.text('You rummage through your purse and pull out your fake passport, showing him you\'re of "legal age." The bouncer takes a long look at it before he nods.');
    scene.text('"Okay, you check out."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPayEnter(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Uhh…', handler: (st: GameState) => {
    scene.text('"Uhhh…" You awkwardly make a show of rummaging through your purse before coming up empty handed. "Sorry, I must have left my ID at home. Can I-"');
    scene.text('"No!" he firmly states before he effortlessly pushes you away. "No under 18s allowed. Come back when you\'re old enough."');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterPayEnter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).strip_club ?? 0)?.['pay_fee'] === 0) {
    // TODO-QSP: dynamic text: He stops you just as you're about to walk past him. "Not so fast. There's a ' + ...
    scene.text('He stops you just as you\'re about to walk past him. "Not so fast. There\'s a 300₽ cover charge."');
    scene.actions([
      { label: 'Seriously?!', handler: (st: GameState) => {
    scene.text('"Ugh, are you kidding me?"');
    scene.text('"Rules are rules," he shrugs.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
      { label: 'Pay up', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('You dig through your purse a second time and pull out a small wad of cash. Handing it to the bouncer, he takes it from you and waves you inside.');
      qspCall(s, 'money', 'pay', 300, 'cash');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      ((s as any).strip_club = (s as any).strip_club ?? {})['pay_fee'] = 1;
      (s as any).frost = 0;
      scene.actions([
        { label: 'Go inside', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('The bouncer clears his throat and holds out his hand.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
      { label: 'Pay up', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.text('You sigh before digging through your purse and pulling out a small wad of cash. Handing it to the bouncer, he takes it from you and waves you inside.');
      qspCall(s, 'money', 'pay', 300, 'cash');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      (s as any).frost = 0;
      qspGoto(s, 'stripclub', 'main_floor');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWorkLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    // TODO-QSP: gs 'clothing', $lastwornclothingtype['strip_club'], lastwornclothingnumber['strip_club']
  }
  if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).lastwornpantytype ?? 0)?.['strip_club'] !== 'none') {
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['strip_club'], lastwornpantynumber['strip_club']
  }
  if (((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).lastwornbratype ?? 0)?.['strip_club'] !== 'none') {
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['strip_club'], lastwornbranumber['strip_club']
  }
  qspGoto(s, 'stripclub', 'main_floor');
  // TODO-QSP: end
  scene.build();
}

function enterMainFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).menu_loc = 'stripclub';
  (s as any).menu_arg = 'main_floor';
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Strip Club</b></center>');
  scene.img('images/locations/city/redlight/stripclub/stripclub_interior.jpg');
  // TODO-QSP: dynamic text: As you enter the club, you see a half naked girl performing on the stage to the ...
  scene.text('As you enter the club, you see a half naked girl performing on the stage to the loud, booming music as others walk around trying to entice customers into buying a private dance. You notice a sign stating that private dances cost 1000₽.');
  if (((s as any).hour ?? 0) < 2  ||  (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 45)) {
    scene.actions([
      { label: 'Watch a striptease', goto: ['stripclub', 'striptease'] },
    ]);
  }
  if ((((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  ||  ((s as any).AlbinaQW ?? 0)?.['working_stripclub'] === 1)  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
    scene.actions([
      { label: 'Order a private dance from Albina', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(s, 'stripclub', 'albina_dance');
    }
  } },
    ]);
  }
  if (((s as any).hour ?? 0) < 2  ||  (((s as any).hour ?? 0) === 2  &&  ((s as any).minut ?? 0) < 30)) {
    scene.actions([
      { label: 'Get a drink at the bar', goto: ['stripclub', 'bar'] },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_strip_stripper'] !== 'employed') {
    scene.actions([
      { label: 'Ask the manager about working as a stripper', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 50) {
      scene.text('You could ask the manager for a job, but you don\'t feel confident enough to be a stripper. You should get more used to showing off your body first.');
      scene.actions([
        { label: 'Continue', goto: ['stripclub', 'main_floor'] },
      ]);
    } else {
      if (((s as any).pcs_dancero ?? 0) <= 0) {
        scene.text('You could ask the manager for a job, but you don\'t have the dance skills to be a stripper. You should get some erotic dance lessons.');
        scene.actions([
          { label: 'Continue', goto: ['stripclub', 'main_floor'] },
        ]);
      } else {
        qspGoto(s, 'stripclub', 'hire2');
      }
    }
  } },
    ]);
  }
  if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] !== 'employed') {
    scene.actions([
      { label: 'Ask the manager about working in the bar', handler: (st: GameState) => {
    if (((s as any).pcs_inhib ?? 0) < 60) {
      scene.text('You could ask the manager for a job, but you don\'t feel confident enough to work in a strip club, even if it is just in the bar.');
      scene.actions([
        { label: 'Continue', goto: ['stripclub', 'main_floor'] },
      ]);
    } else {
      qspGoto(s, 'stripclub', 'hire3');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['stripclub', 'start'] },
    { label: 'Order a private dance', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(s, 'stripclub', 'private_dance');
    }
  } },
  ]);
  scene.build();
}

function enterBar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) < 5) {
    scene.img('images/locations/city/redlight/stripclub/lev.jpg');
    // TODO-QSP: dynamic text: You head over to the bar, where ' + iif($job_status['city_strip_bargirl'] <> ', ...
    scene.text('You head over to the bar, where \' + iif($job_status[\'city_strip_bargirl\'] <> \', \'Lev\', \'the bartender\') + \' is taking orders while checking out the girl on stage. You decide what you want to drink as you wait your turn.');
  } else {
    scene.img('images/locations/city/redlight/stripclub/nadia.jpg');
    // TODO-QSP: dynamic text: You head over to the bar, where ' + iif($job_status['city_strip_bargirl'] <> ', ...
    scene.text('You head over to the bar, where \' + iif($job_status[\'city_strip_bargirl\'] <> \', \'Nadia\', \'a girl wearing a skimpy outfit\') + \' is taking orders, her large breasts drawing your attention as they jiggle with each of her movements. You decide what you want to drink as you wait your turn.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['stripclub', 'main_floor'] },
    { label: 'Order a glass of water', handler: (st: GameState) => {
    if (((s as any).alko ?? 0) > 0) {
      (s as any).alko = ((s as any).alko ?? 0) - (1);
    }
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (50);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'beverage', 'afterdrink');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/stripclub_bar.jpg');
    scene.text('You order a glass of water and take a seat at the bar to drink it, taking in the sights of the club as you do.');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
    { label: 'Order a beer', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 80) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 80);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'drugs', 'alcohol', 'beer');
      qspCall(s, 'beverage', 'afteralcohol');
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/stripclub_bar.jpg');
      scene.text('You order a bottle of beer and take a seat at the bar to drink it, taking in the sights of the club as you do.');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
    { label: 'Order a shot of vodka', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 120) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 120);
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'drugs', 'alcohol', 'vodka');
      qspCall(s, 'beverage', 'afteralcohol');
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/stripclub_bar.jpg');
      scene.text('You order a shot of vodka and gulp it down, feeling it burn down your throat as you place the empty glass back on the bartop.');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
    { label: 'Order a glass of wine', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      qspCall(s, 'drugs', 'alcohol', 'wine');
      qspCall(s, 'beverage', 'afteralcohol');
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/stripclub_bar.jpg');
      scene.text('You order a glass of wine and take a seat at the bar to drink it, taking in the sights of the club as you do.');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPrivateDance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 1000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (25);
  qspCall(s, 'stat', '');
  (s as any).privrand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).privrand ?? 0))) {
    scene.img('images/locations/city/redlight/stripclub/sex/private_dance.jpg');
    scene.text('You order a private dance from one of the strippers and she leads you to a private room, where you\'re joined by another girl. They seem to enjoy the female company as they give you a double dance and you can feel your pussy growing slightly wet.');
    // TODO-QSP: dynamic text: When they finish their dance, one of them climbs onto your lap and whispers in y...
    scene.text('When they finish their dance, one of them climbs onto your lap and whispers in your ear. "2000₽ and I\'ll eat your pussy, right here, right now…"');
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(s, 'stripclub', 'private_sex');
    }
  } },
      { label: 'Leave', goto: ['stripclub', 'main_floor'] },
    ]);
  } else {
    scene.img('images/locations/city/redlight/stripclub/private_dance.jpg');
    scene.text('You order a private dance and two girls lead you to a private room. They push you down into the chair and start dancing around you in a very erotic manner as they strip each other. You feel your heart starting to race and your pussy growing slightly wet.');
    scene.actions([
      { label: 'Finish', goto: ['stripclub', 'main_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/sveta_show3.jpg');
  scene.text('The DJ announces that one of the strippers will soon be performing on the pole, much to the glee of the men in the crowd.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the show', handler: (st: GameState) => {
    qspCall(s, 'schedule', 'A23');
    if ((Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 0  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinaFirstDance1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).AlbinaQW ?? 0)?.['seen_strip'] === 1  &&  ((s as any).locat ?? 0)?.['A23'] === 22) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAlbinaRecurrentDance(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        qspCall(s, 'stat', '');
        scene.img('images/locations/city/redlight/stripclub/stripclub_show1.mp4');
        scene.text('You decide to take a seat and watch the upcoming show.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetGirl(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.text('The music booms as the scantily clad girl struts out onto the stage to loud cheers and whistles.');
        scene.text('She then starts her performance, slowly stripping down as she dances on the pole. The men in the crowd throw fistfuls of rubles on the stage while hooting and hollering.');
        scene.actions([
          { label: 'Give her money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', 100, 'cash');
      scene.img('images/locations/city/redlight/stripclub/stripclub_show2.mp4');
      // TODO-QSP: dynamic text: You stick '+$func('money', 'string_price', 100)+' in her thong and she invitingl...
      scene.text('You stick 100₽ in her thong and she invitingly starts shaking her ass and swinging around the pole in front of you. You feel yourself slowly getting excited.');
      scene.text('The girl soon finishes her show and gathers up her clothing and tips before walking off stage as the men cheer at her.');
      scene.actions([
        { label: 'Move away', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
          { label: 'Watch the show', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/redlight/stripclub/stripclub_show2.mp4');
    scene.text('You feel yourself slowly getting excited as you watch the girl perform until she finally peels off her thong and does one final spin on the pole before gathering up her clothing and tips and walking off stage as the men cheer at her.');
    scene.actions([
      { label: 'Move away', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
          { label: 'Look away', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (5);
    scene.text('You decide not to give any money to the stripper and look away from her. You feel a little ashamed as your arousal goes down.');
    scene.actions([
      { label: 'Move away', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterPrivateSex(s: GameState, scene: SceneBuilder): void {
  (s as any).girl = ((s as any).girl ?? 0) + (2);
  ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'money', 'pay', 2000);
  qspCall(s, 'arousal', 'cuni', 15, 'lesbian', 'group');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/private_dance_sex.jpg');
  scene.text('The girls lead you away from the stage and into a private booth. Before you know it, they\'ve taken off your clothes and have you spreading your legs as one of them licks your pussy, quickly and expertly bringing you to orgasm while the other girl continues to caress your body.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['stripclub', 'main_floor'] },
    { label: 'More', goto: ['stripclub', 'private_sex1'] },
  ]);
  scene.build();
}

function enterPrivateSex1(s: GameState, scene: SceneBuilder): void {
  (s as any).girl = ((s as any).girl ?? 0) + (2);
  ((s as any).stat = (s as any).stat ?? {})['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
  qspCall(s, 'arousal', 'cuni', 15, 'lesbian', 'group');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/city/redlight/stripclub/private_dance_sex.jpg');
  scene.text('The other girl lets out a sigh and gently pushes her friend away. "You\'ve already made her cum. I want in on the action now," she says and starts eating you out, quickly bringing you to orgasm a second time.');
  scene.text('When you recover, you notice that you\'re now alone in the room.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['stripclub', 'main_floor'] },
  ]);
  scene.build();
}

function enterHire1(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Strip Club</b></center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/city/redlight/stripclub/club_night_winter.jpg');
  } else {
    scene.img('images/locations/city/redlight/stripclub/club_night_summer.jpg');
  }
  scene.text('"Hey," you say to the bouncer. "I want to get a job here. Can I see the manager?"');
  if (((s as any).pcs_hotcat ?? 0) > 5) {
    scene.text('"Hrmph," he grunts. "ID?"');
    if (((s as any).age ?? 0) >= 18) {
      scene.actions([
        { label: 'Show him your passport', handler: (st: GameState) => {
    scene.text('You rummage through your purse and pull out your passport, showing him you\'re of legal age. The bouncer takes a look at it and nods.');
    scene.text('"You check out. Go ahead," he says, waving you past him. "You\'re looking for Sasha. Knock on the door that says \'manager\' on it."');
    scene.actions([
      { label: 'Head inside', goto: ['stripclub', 'hire2'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fakepassport ?? 0) === 1) {
        scene.text('You rummage through your purse and pull out your fake passport, showing him you\'re of "legal age." The bouncer takes a look at it and nods.');
        scene.text('"You check out. Go ahead," he says, waving you past him. "You\'re looking for Sasha. Knock on the door that says \'manager\' on it."');
        scene.actions([
          { label: 'Head inside', goto: ['stripclub', 'hire2'] },
        ]);
      } else {
        scene.actions([
          { label: 'Uhh…', handler: (st: GameState) => {
    scene.text('"Uhhh…" You awkwardly make a show of rummaging through your purse. "Sorry, I must have left my ID at home. Can I-"');
    scene.text('"No," he says before he pushes you away. "Come back when you find it."');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        ]);
      }
    }
  } else {
    scene.text('"Hrmph," he snickers. "You serious?"');
    scene.text('"Yeah, I want to work here."');
    scene.text('"Well we only hire pretty girls here," he says as he pushes you away. "Now back off. You\'re scaring away the customers."');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHire2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You enter the manager\'s very well decorated office and see a rather imposing middle aged man in an expensive looking suit sitting behind a desk. "Yes? How can I help you?"');
  scene.text('You give him a smile which he doesn\'t return as you walk over to the desk. When you reach it, you\'re surprised to see a half naked girl getting off her knees from behind the desk and grabbing some tissues to wipe what looks like cum from her massive breasts.');
  scene.text('She then puts her tight fitting white leather corset back on and the man hands her some money before smacking her ass. "Those tits were as good as always, Opal," he grins.');
  scene.text('She smiles at him before brushing past you and out of the room, seemingly not caring that you just walked in on her presumably giving her boss a titfuck.');
  scene.text('"Are you Sasha?" you ask, trying to ignore what you just saw. "I was told to ask you if I could get a job here?"');
  scene.text('"That\'s me," he nods and zips his pants up before he looks you over. "Are you at least 18 years old? I had a visit from the police last week, and they found an underage girl working here. I was fortunate enough that the officers could be bribed, but I don\'t wish for a repeat visit."');
  if (((s as any).age ?? 0) >= 18  ||  ((s as any).fakepassport ?? 0) === 1) {
    if (((s as any).age ?? 0) >= 18) {
      scene.text('"Yes I am," you confidently reply and hand him your ID.');
      scene.text('You see him smile as he checks it. "Looks like everything is in order. So what kind of work were you looking for? Stripping or waitressing?"');
    } else {
      scene.text('"Yes…" you answer while handing him your fake passport.');
      scene.text('You see him frown as he checks it with suspicion. "Well, I guess everything is in order. So what kind of work were you looking for? Stripping or waitressing?"');
    }
    scene.actions([
      { label: 'Stripping', handler: (st: GameState) => {
    scene.text('"I want to be a stripper," you reply.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripperTryout1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Waitressing', handler: (st: GameState) => {
    scene.text('"I want to be a waitress," you reply.');
    scene.actions([
      { label: 'Continue', goto: ['stripclub', 'hire3'] },
    ]);
  } },
      { label: 'Can\'t I bartend?', handler: (st: GameState) => {
    scene.text('"Do I have to be a waitress? Can\'t I tend bar?"');
    scene.text('"That\'s an important position that\'s highly coveted. If you want that, you\'ll have to work up to it. I need to know I can trust you. So stripping or waitressing?"');
    scene.text('"Waitress I guess," you shrug in disappointment.');
    scene.actions([
      { label: 'Continue', goto: ['stripclub', 'hire3'] },
    ]);
  } },
    ]);
  } else {
    scene.text('"Nearly…" you say dejectedly.');
    scene.text('"Right. You need to leave, but be sure to come back when you\'re old enough," he replies.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHire3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('"Do you have any experience working in a bar?" he asks as he looks you over.');
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] !== '') {
    scene.text('"Somewhat," you reply. "I used to work in a diner with a bar."');
    scene.text('"The Roadhouse?" he asks. "Excellent. You\'ll be able to handle yourself on the floor, but you\'ll need training before you can work behind the bar."');
    scene.text('"How long would that take?" you ask.');
    scene.text('He smiles. "If you can do this without any trouble, then I\'ll find the time to train you to work the bar."');
  } else {
    scene.text('You shake your head. "No, I\'ve never had a job like this before. Is that a problem?"');
    scene.text('He frowns. "It\'s not ideal. Our patrons get very thirsty, and not just for drinks, so it would be some very intense on the job learning for you."');
    scene.text('"Oh," you reply dejectedly, but he smiles.');
    scene.text('Don\'t worry. Our bar staff will show you the ropes and keep you right."');
  }
  scene.text('"Did you have any questions for me?" he asks.');
  scene.text('"Just two," you reply. "When do I work and what do I get paid?"');
  // TODO-QSP: dynamic text: He chuckles. "Straight to the point I see. The club operates between '+func('tim...
  scene.text('He chuckles. "Straight to the point I see. The club operates between 18:00 and 3:00, and bargirls need to show up between 17:00 and18:00.');
  scene.text('He pulls up a list of some kind. "I currently have two shift patterns open: Wednesday and Thursday nights, or Friday and Saturday nights. You get paid weekly plus tips. Interested?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the job', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I\'ll take it," you say with a smile.');
    scene.text('"Excellent," he replies. "Which shift pattern suits you?"');
    (s as any).temp_can_weekday = qspFunc(s, 'jobs', 'check_employment_possible', 'city_strip_bargirl', 0);
    (s as any).temp_can_weekend = qspFunc(s, 'jobs', 'check_employment_possible', 'city_strip_bargirl', 1);
    if (((s as any).temp_can_weekday ?? 0) === 0  &&  (!((s as any).temp_can_weekend ?? 0))) {
      scene.text('"Actually, I\'m not going to be able to fit any of the schedules around my current commitments," you say with a frown.');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'main_floor'] },
      ]);
    } else {
      if (((s as any).temp_can_weekday ?? 0) === 1) {
        scene.actions([
          { label: 'Take the weekday shifts', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'city_strip_bargirl');
    scene.text('"Great. Come see me next week for your first shift and I\'ll get you set up."');
    scene.text('He stops you just before you\'re about to leave. "If you ever want to change your shifts or quit, then come and see me <i>after</i> a shift so I can make all the changes for the next night."');
    if (((s as any).hour ?? 0) >= 3) {
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'work_leave'] },
      ]);
    }
  } },
        ]);
      }
      if (((s as any).temp_can_weekend ?? 0) === 1) {
        scene.actions([
          { label: 'Take the weekend shifts', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'city_strip_bargirl');
    qspCall(s, 'jobs', 'change_schedule', 'city_strip_bargirl', 1);
    scene.text('"Great. Come see me next week for your first shift and I\'ll get you set up."');
    scene.text('He stops you just before you\'re about to leave. "If you ever want to change your shifts or quit, then come and see me <i>after</i> a shift so I can make all the changes for the next night."');
    if (((s as any).hour ?? 0) >= 3) {
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'work_leave'] },
      ]);
    }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Reject his offer', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Sorry, but I don\'t feel like I\'m quite ready for a job like this yet," you say and he smiles.');
    scene.text('"That\'s fine," he replies. "Come back when you are."');
    if (((s as any).hour ?? 0) >= 3) {
      scene.actions([
        { label: 'Leave', goto: ['city_redlight', 'start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'work_leave'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStripperTryout1(s: GameState, scene: SceneBuilder): void {
  scene.text('"Okay, first thing\'s first. Get naked."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Panic', handler: (st: GameState) => {
    scene.text('A chill runs through your spine.');
    scene.text('"<i>What?</i>" you blurt out in surprise.');
    scene.text('He rolls his eyes. "Oh, for fuck\'s sake. Not another one… If you want to be a stripper, then people are going to see you naked. Which means <i>I</i> have to see you naked to make sure you\'re hot enough to dance in my club and won\'t pussy out <i>just like this</i>. Now get those clothes off or fuck off."');
    scene.actions([
      { label: 'Strip', goto: ['stripclub', 'stripper_tryout2'] },
    ]);
  } },
    { label: 'Surprise', handler: (st: GameState) => {
    scene.text('"Huh?" you blink. "Right now?"');
    scene.text('"Why not?" he shrugs. "If you want to be a stripper, then people are going to see you naked. Which means <i>I</i> have to see you naked to make sure you\'re hot enough to dance in my club. So <i>strip.</i>"');
    scene.actions([
      { label: 'Strip', goto: ['stripclub', 'stripper_tryout2'] },
    ]);
  } },
    { label: 'Strip', goto: ['stripclub', 'stripper_tryout2'] },
  ]);
  scene.build();
}

function enterStripperTryout2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stwork', 'strip_clothing');
  scene.img('images/locations/city/redlight/stripclub/stripinspection.jpg');
  scene.text('You take off your clothes and stand naked before Sasha, who stands up to take a closer look.');
  if (((s as any).pcs_leghair ?? 0) <= 3) {
    scene.text('He admires your legs.');
    scene.text('"Smooth legs. Very good."');
  } else {
    scene.text('He frowns at your legs.');
    scene.text('"You\'ll need to shave those."');
  }
  scene.text('He places his hand on your mound and slowly rubs it. You feel your pussy get a little wet from his touch and hope that he doesn\'t notice.');
  qspCall(s, 'arousal', 'foreplay', 2);
  qspCall(s, 'stat', '');
  if ((((s as any).pubestyle ?? 0) === 1  &&  ((s as any).pcs_pubes ?? 0) <= 3)  ||  ((s as any).lashair ?? 0) === 1) {
    scene.text('"Cleanshaven. Nice."');
  } else {
    if (((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) <=7)  ||  (((s as any).pubestyle ?? 0) >= 12  &&  ((s as any).pubestyle ?? 0) <= 14))  &&  ((s as any).pcs_pubes ?? 0) <= 25) {
      (s as any).strippermission = 1;
      scene.text('"Nice bush," he smirks. "I\'m sure the customers will love it."');
      ((s as any).strip_club = (s as any).strip_club ?? {})['dancing_rounds'] = 3;
    } else {
      if (((s as any).pcs_leghair ?? 0) <= 3) {
        scene.text('"You\'ll need to shave this," he grunts, running his fingers through your thick bush. "Or at least trim it. Something cute."');
      } else {
        scene.text('"And this too," he scowls, running his fingers through your thick bush. "What are you, some kind of hippie? This is a strip club, not a zoo!"');
      }
    }
  }
  if (((s as any).tits ?? 0) >= 5) {
    scene.text('He takes in the sight of your enormous breasts.');
    scene.text('"Not many girls working here can brag about having tits the size of their head," he chuckles as he kneads them in his hand. "Opal might have a rival on her hands here."');
    qspCall(s, 'arousal', 'foreplay', 2);
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).tits ?? 0) === 4) {
      scene.text('He admires your large breasts.');
      scene.text('"Nice tits. Are they natural?" he asks as he gently fondles them in his hand.');
      qspCall(s, 'arousal', 'foreplay', 2);
      qspCall(s, 'stat', '');
    } else {
      if (((s as any).tits ?? 0) === 3) {
        scene.text('He checks out your breasts.');
        scene.text('"Your tits are decent enough."');
      } else {
        if (((s as any).tits ?? 0) === 2) {
          scene.text('He frowns at the sight of your small breasts.');
          scene.text('"Shame about the tits."');
        } else {
          scene.text('He frowns at your tiny breasts.');
          scene.text('"Hhhmmm..."');
        }
      }
    }
  }
  if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
    scene.text('He spins you round and inspects your huge ass.');
    scene.text('"Great ass, girl," he says as he paws at your massive rear. "You\'ll be the talk of the club!"');
    if (((s as any).year ?? 0) > 2017  ||  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) > 8)) {
      scene.text('"I think Amber might actually have a rival for best ass in the club!"');
    }
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_big')  ||  qspFunc(s, 'pcs_has_attr', 'body_ass_heart')) {
      scene.text('He spins you round and inspects your shapely ass.');
      scene.text('"Nice ass," he says as his hand paws at your rear. "This will earn you extra tips for sure."');
    } else {
      if (qspFunc(s, 'pcs_has_attr', 'body_ass_flat')) {
        scene.text('He spins you round and inspects your ass.');
        scene.text('"Hhhm…" he says. "You should do some squats and pad this out. The customers need something to look at."');
      } else {
        scene.text('He spins you round and inspects your ass.');
        scene.text('"Not bad, but some squats to pad it out wouldn\'t hurt."');
      }
    }
  }
  scene.text('He then leads you to one of the private booths and points to the pole.');
  scene.text('"Alright. Now show me what you can do."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance for him', goto: ['stripclub', 'stripper_tryout3'] },
  ]);
  scene.build();
}

function enterStripperTryout3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/tryout.jpg');
  if (((s as any).pcs_dancero ?? 0) >= 40  &&  ((s as any).pcs_dancpol ?? 0) >= 30) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStripperAccept1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).pcs_dancero ?? 0) >= 40) {
      scene.text('After a minute, he stops you and shakes his head. "You\'ve got the erotic nature nailed, but your poledancing is lacking. I believe you can take poledancing classes at the gym. Come back when you can handle the pole, and I\'ll give you another chance."');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'work_leave'] },
      ]);
    } else {
      scene.text('After a minute, he stops you and shakes his head. "Your dancing skills are lacking. If you want this job, you\'ll have to take some classes first. I believe you can do that at the gym. Come back when you can dance on stage without me worrying you\'ll fall off, and I\'ll give you another chance."');
      scene.actions([
        { label: 'Leave', goto: ['stripclub', 'work_leave'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStripperAccept1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  scene.text('You dance sensually and he\'s clearly smitten by you before he asks you to sit down.');
  // TODO-QSP: dynamic text: "Our business hours are '+func('time', 'get_time_string', 18, 0)+' to '+func('ti...
  scene.text('"Our business hours are 18:00 to 3:00 and we operate two six hour shifts - 18:00 to midnight and 21:00 to 3:00. Shift priority is first come, first served. A whiteboard with the schedule is available backstage."');
  scene.text('He pulls some papers out of a cabinet behind him.');
  // TODO-QSP: dynamic text: "Any tips you get are yours, but we're not paying you hourly. Think of it as an ...
  scene.text('"Any tips you get are yours, but we\'re not paying you hourly. Think of it as an incentive to perform well. If a customer wants a private lap dance, then it\'s \'+$func(\'money\', \'string_profit\', 1000)+\' <i>per</i> dance. You get 40% and the rest goes to the club."');
  scene.text('He then sits up in his chair and gives you a serious look. "Some clients may want to pay extra for a \'happy ending\' to their dance; this is strictly limited to a blowjob at most. We are <i>not</i> a brothel, so you <i>will</i> refuse <i>any</i> requests for sex, no matter how much they offer to pay you. If they get pushy, then call Viktor. Now sign here."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change your mind', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"On second thought, I don\'t know if I can do this," you say hesitantly.');
    scene.text('"Ugh, another fucking flake." He rolls his eyes before throwing the papers into a drawer and slamming it shut. "Come back when you\'re ready to get serious. Until then, get the fuck out."');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
    { label: 'Sign', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'set_employed', 'city_strip_stripper');
    qspCall(s, 'stat', '');
    scene.text('You think about it for a minute and smile at him as you accept his offer.');
    scene.text('He then leads you to the dressing room and tells a woman responsible for the outfits that you\'re going to join the club. He also introduces you to the chief of security, who takes your picture and makes you sign some documents before walking you back to his office.');
    scene.text('"Our girls don\'t perform under their real names for obvious reasons. We have a bit of a gemstone theme going on, but you can choose whatever stage name you want. You <i>would</i> stand out if you go against the theme though, which could be a good <i>or</i> a bad thing for your reputation."');
    scene.text('He then pulls out a list of some kind. "If you want to use a gemstone name yourself, then know that Amber, Jade, Onyx, Emerald, Amythest, Diamond, Azul, Opal and Ruby are already taken. So what will your name be?"');
    (s as any).pcs_strippername = 0;
    if (((s as any).pcs_strippername ?? 0) === 'Amber'  ||  ((s as any).pcs_strippername ?? 0) === 'Jade'  ||  ((s as any).pcs_strippername ?? 0) === 'Onyx'  ||  ((s as any).pcs_strippername ?? 0) === 'Emerald'  ||  ((s as any).pcs_strippername ?? 0) === 'Amythest'  ||  ((s as any).pcs_strippername ?? 0) === 'Diamond'  ||  ((s as any).pcs_strippername ?? 0) === 'Azul'  ||  ((s as any).pcs_strippername ?? 0) === 'Opal'  ||  ((s as any).pcs_strippername ?? 0) === 'Ruby') {
      scene.text('That name is not available.');
    } else {
      if (((s as any).pcs_strippername ?? 0) === '') {
        (s as any).pcs_strippername = 'Sapphire';
        scene.text('"Uhh, I don\'t know..." you say dully and Sasha rolls his eyes.');
        scene.text('"Whatever. You\'re Sapphire from now on. Now fill out these forms," he says and passes you the papers from earlier before adding your new name to the list.');
      } else {
        // TODO-QSP: dynamic text: "Can I be called <<$pcs_strippername>>?"
        scene.text(`"Can I be called ${((s as any).pcs_strippername || '')}?"`);
        scene.text('"Sure," he shrugs and adds your chosen name to the list pointing to the papers from earlier. "Now fill out these forms."');
      }
    }
    scene.text('You scribble out your information on the documents and sign them as Sasha keeps talking to you.');
    scene.text('"Before you go on stage, I expect you to drop by my office so I can check if you\'re up to our club standards. It\'s just a routine check to make sure that the club\'s reputation stays intact. Nothing to worry about," he says before ushering you out of his office.');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'work_leave'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterManagerJobChange(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/manager_office.jpg');
  // TODO-QSP: dynamic text: You enter Sasha's office and he greets you with a smile. "Hey there <<$pcs_nickn...
  scene.text(`You enter Sasha's office and he greets you with a smile. "Hey there ${((s as any).pcs_nickname || '')}, how can I help you?"`);
  if (((s as any).job_status ?? 0)?.['city_strip_bargirl'] === 'employed') {
    if (parseFloat(((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl']) === 0) {
      if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_strip_bargirl', 1) === 1) {
        scene.actions([
          { label: 'I want to change to weekend bar shifts', handler: (st: GameState) => {
    scene.text('"Can I change my shifts so I\'m working on weekends instead?" you ask.');
    scene.text('"Are you sure?" he asks. "It would be a lot busier than you have now, but one of the other bargirls would happily swap so she has the weekend off instead."');
    scene.text('"I\'m sure," you nod.');
    qspCall(s, 'jobs', 'change_schedule', 'city_strip_bargirl', 1);
    // TODO-QSP: dynamic text: "Okay then," he smiles. "I'll make the changes. Be ready to come back to work on...
    scene.text('"Okay then," he smiles. "I\'ll make the changes. Be ready to come back to work on Friday and Saturday nights, and arrive between 17:00 and 18:00."');
    scene.text('You thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      if (parseFloat(((s as any).job_active_schedule ?? 0)?.['city_strip_bargirl']) === 1) {
        if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_strip_bargirl', 0) === 1) {
          scene.actions([
            { label: 'I want to change to weekday bar shifts', handler: (st: GameState) => {
    scene.text('"Can I change my shifts so I\'m working on weekdays instead?" you ask.');
    scene.text('"Are you sure?" he asks. "It would be a lot quieter than you have now, so one of the other bargirls would happily swap so she has the extra money."');
    scene.text('"I\'m sure," you nod.');
    qspCall(s, 'jobs', 'change_schedule', 'city_strip_bargirl', 0);
    // TODO-QSP: dynamic text: "Okay then," he smiles. "I'll make the changes. Be ready to come back to work on...
    scene.text('"Okay then," he smiles. "I\'ll make the changes. Be ready to come back to work on Wednesday and Thursday nights, and arrive between 17:00 and 18:00."');
    scene.text('You thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'I want to quit my bartending job', handler: (st: GameState) => {
    scene.text('"I want to quit my job," you tell him and he nods.');
    scene.text('"I\'m sure you have your reasons, but if it\'s because you want to work the pole instead then you\'ll have to come back and try out another night like all the other girls."');
    qspCall(s, 'jobs', 'set_terminated', 'city_strip_bargirl');
    scene.text('You just nod and thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      { label: 'Never mind', handler: (st: GameState) => {
    scene.text('"Oh, it was nothing important," you reply. "Sorry for disturbing you."');
    scene.text('"Okay," he shrugs before he returns his attention to what he was doing.');
    scene.text('You thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).job_status ?? 0)?.['city_strip_stripper'] === 'employed') {
      scene.actions([
        { label: 'I want to work as a waitress instead', handler: (st: GameState) => {
    scene.text('You return the smile. "Hi, I was wondering if I could work as a waitress instead?"');
    scene.text('He chuckles. "Got bored of working the pole and want an easier job?"');
    scene.text('"You could say that," you smile.');
    qspCall(s, 'jobs', 'set_terminated', 'city_strip_stripper');
    scene.actions([
      { label: 'Continue', goto: ['stripclub', 'hire3'] },
    ]);
  } },
        { label: 'I want to quit my job', handler: (st: GameState) => {
    scene.text('"I want to quit my job," you tell him and he nods.');
    scene.text('"I\'m sure you have your reasons, but if it\'s because you want to work the pole instead then you\'ll have to come back and try out another night like all the other girls."');
    qspCall(s, 'jobs', 'set_terminated', 'city_strip_stripper');
    scene.text('You just nod and thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
        { label: 'Never mind', handler: (st: GameState) => {
    scene.text('"Oh, it was nothing important," you reply. "Sorry for disturbing you."');
    scene.text('"Okay," he shrugs before he returns his attention to what he was doing.');
    scene.text('You thank him before leaving the office.');
    scene.actions([
      { label: 'Leave', goto: ['city_redlight', 'start'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaFirstDance1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['seen_strip'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/stripclub_show1.mp4');
  scene.text('After a few minutes, the DJ hypes the crowd up as he announces which of the strippers is performing.');
  if ((((s as any).start_type ?? 0)?.['magic'] === 'tg'  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg')  &&  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0) {
    scene.text('"Now here\'s a girl I know a lot of you fine gents out there have been waiting for! Give it up for the finest ass in the city because here comes... AAMMMBBERRR!" the DJ announces over the speakers and the crowd erupts into loud cheers and whistles.');
    scene.text('As you look up at the stage, a very attractive looking brunette wearing a tight silver corset with matching thong struts out and starts shaking her ass for the crowd.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('"Now here\'s a girl I know a lot of you fine gents out there have been waiting for! Give it up for the finest ass in the city because here comes... AAMMMBBERRR!" the DJ announces over the speakers and the crowd loudly cheers.');
      scene.text('Your jaw drops as a girl wearing a tight silver corset with matching thong struts onto the stage to loud cheers, shaking her ass for the crowd. Is that Albina?!');
    } else {
      scene.text('"Now here\'s a girl I know a lot of you fine gents out there have been waiting for! Give it up for the finest ass in the city because here comes... AAMMMBBERRR!" the DJ announces over the speakers and the crowd loudly cheers as a girl wearing a tight silver corset with matching thong struts out onto the stage and starts shaking her ass.');
      scene.text('As you look up at the stage, you can\'t help but notice that she looks familiar… You look closer and notice that it\'s Albina!');
    }
  }
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    scene.text('She smiles when she sees you and dances up close to you, wiggling her bubble butt in your face.');
    scene.actions([
      { label: 'Watch her show', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
    scene.text('You watch in silence as Albina entices the crowd with her moves as she strips down to the music, shaking her ass in their faces as they throw piles of rubles onto the stage. She occasionally struts over and dances in front of you, causing the men to throw even more money on the stage so she\'ll return her attention to them.');
    scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothing and tips before strutting off stage without even looking in your direction.');
    scene.text('A few minutes later, she walks out onto the floor and immediately grabs you by the arm before dragging you into a private room.');
    scene.actions([
      { label: 'Go with her', goto: ['stripclub', 'albina_confront'] },
    ]);
  } },
      { label: 'Give her money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
      // TODO-QSP: dynamic text: You throw '+$func('money', 'string_price', 100)+' onto the stage in front of her...
      scene.text('You throw 100₽ onto the stage in front of her and she gives you a wink before moving back into the middle of the stage, enticing the crowd with her moves as they throw piles of rubles onto the stage.');
      scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothes and tips up before strutting off the stage as the men hoot and holler.');
      scene.text('A few minutes later, she walks out onto the floor and immediately grabs you by the arm before dragging you into a private room.');
      scene.actions([
        { label: 'Go with her', goto: ['stripclub', 'albina_confront'] },
      ]);
    }
  } },
    ]);
  } else {
    scene.text('You make eye contact and notice a flash of recognition in her eyes, but other than that she doesn\'t acknowledge you in the slightest, continuing her performance and stripping down.');
    scene.actions([
      { label: 'Watch her show', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
    // TODO-QSP: dynamic text: You watch in silence as '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['...
    scene.text('You watch in silence as \'+iif(AlbinaQW[\'know_albina_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'the brunette\', \'Albina\')+\' entices the crowd with her moves as she strips down to the music, shaking her ass in their faces as they throw piles of rubles onto the stage.');
    scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothing and tips before strutting off stage without even looking in your direction.');
    scene.text('A few minutes later, she walks out onto the floor and immediately grabs you by the arm before dragging you into a private room.');
    scene.actions([
      { label: 'Go with her', goto: ['stripclub', 'albina_confront'] },
    ]);
  } },
      { label: 'Give her money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: You throw '+$func('money', 'string_price', 100)+' onto the stage in front of her...
      scene.text('You throw 100₽ onto the stage in front of her, but she just rolls her eyes and moves over to dance in front of a group of men offering her far more generous tips.');
      scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothing and tips before strutting off stage without even looking in your direction.');
      scene.text('A few minutes later, she walks out onto the floor and immediately grabs you by the arm before dragging you into a private room.');
      scene.actions([
        { label: 'Go with her', goto: ['stripclub', 'albina_confront'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaRecurrentDance(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/stripclub_show1.mp4');
  scene.text('After a few minutes, the DJ hypes the crowd up as he announces which of the strippers is performing.');
  scene.text('"Now here\'s a girl I know a lot of you fine gents out there have been waiting for! Give it up for the finest ass in the city because here comes... AAMMMBBERRR!"');
  scene.text('You smile when you see Albina strutting onto the stage to start her show.');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    scene.text('She smiles when she sees you and dances up close to you as she strips, wiggling her bubble butt in your face.');
    scene.actions([
      { label: 'Give her money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
      // TODO-QSP: dynamic text: You throw '+$func('money', 'string_price', 100)+' onto the stage in front of her...
      scene.text('You throw 100₽ onto the stage in front of her and she gives you a wink before moving back into the middle of the stage, enticing the crowd with her moves as they throw piles of rubles onto the stage.');
      scene.text('She slowly strips from her outfit and dances on the pole before teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage.');
      scene.text('Her show over, the music stops and she gathers her clothes and tips up before strutting off the stage, swaying her hips and showing off her naked ass as the men hoot and holler.');
      scene.actions([
        { label: 'Move away', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
      { label: 'Watch her show', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
    scene.text('You watch in silence as Albina entices the crowd with her moves as she strips down to the music, shaking her ass in their faces as they throw piles of rubles onto the stage. She occasionally struts over and dances in front of you, causing the men to throw even more money on the stage so Albina will return her attention to them.');
    scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothing and tips before strutting off stage without even looking in your direction.');
    scene.actions([
      { label: 'Move away', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
    ]);
  } else {
    scene.text('She doesn\'t return your smile when she sees you, however, and barely acknowledges you as she starts stripping down and dancing on the pole.');
    scene.actions([
      { label: 'Give her money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
      // TODO-QSP: dynamic text: You throw '+$func('money', 'string_price', 100)+' onto the stage in front of her...
      scene.text('You throw 100₽ onto the stage in front of her, but she just rolls her eyes and moves over to dance in front of a group of rowdy men offering her far more generous tips.');
      scene.text('She slowly strips from her outfit and dances on the pole before teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage.');
      scene.text('Her show over, the music stops and she gathers her clothes and tips up before strutting off the stage, swaying her hips and showing off her naked ass as the men hoot and holler.');
      scene.actions([
        { label: 'Move away', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  } },
      { label: 'Watch her show', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/albina_show.mp4');
    scene.text('You watch in silence as Albina entices the crowd with her moves as she strips down to the music, shaking her ass in their faces as they throw piles of rubles onto the stage.');
    scene.text('She finishes her show by teasingly tugging at her thong and slowly peeling it off, much to the delight of the patrons around you, who ogle and cheer at her as she rolls around naked on the stage. She then gathers her clothing and tips before strutting off stage without even looking in your direction.');
    scene.actions([
      { label: 'Move away', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaConfront(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    // TODO-QSP: dynamic text: "What are you doing here, <<$pcs_nickname>>?" she asks.
    scene.text(`"What are you doing here, ${((s as any).pcs_nickname || '')}?" she asks.`);
    scene.text('"What are <i>you</i> doing here?!" you retort and she smiles.');
    scene.text('"Exactly what it looks like. Mama won\'t cover all my expenses and I needed to make my own money, so I decided to make use of my skills and get a job working the poles here."');
    scene.text('"Do you enjoy it?" you ask and she shrugs.');
    scene.text('"It\'s not too bad. I make a ton of cash and security help out with the creeps who get too hands on. Just don\'t tell anyone I work here."');
    scene.text('"Your secret\'s safe with me," you wink and she smiles.');
    // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>, but I need to get back to work," she says before she ...
    scene.text(`"Thanks ${((s as any).pcs_nickname || '')}, but I need to get back to work," she says before she leaves the room.`);
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 0  &&  (((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).start_type ?? 0)?.['magic'] === 'tg')) {
      // TODO-QSP: dynamic text: "What are you doing here, <<$pcs_nickname>>?" she asks.
      scene.text(`"What are you doing here, ${((s as any).pcs_nickname || '')}?" she asks.`);
      scene.text('You struggle to come up with an answer as you try to remember who this girl is.');
      scene.text('"Well?" she asks expectantly. "If you don\'t have anything to say for yourself, then I\'ll have security throw you out for being a creep!"');
      // TODO-QSP: dynamic text: You suddenly remember what your journal said. This girl is Albina, a former clas...
      scene.text(`You suddenly remember what your journal said. This girl is Albina, a former classmate of ${((s as any).pcs_nickname || '')} who has a natural talent for dancing.`);
      scene.text('"Fancy seeing you here," you reply. "Putting those dance skills to good use, I see."');
      // TODO-QSP: dynamic text: "Fuck you, <<$pcs_nickname>>!" she scowls. "I can't stop you from coming here, b...
      scene.text(`"Fuck you, ${((s as any).pcs_nickname || '')}!" she scowls. "I can't stop you from coming here, but don't think for a fucking second that <i>any</i> amount of money will ever convince me to entertain you!"`);
      scene.text('She storms out without saying another word. It appears that she isn\'t your biggest fan… You should probably try and avoid her when you visit this place.');
      scene.actions([
        { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "What the fuck are you doing here, <<$pcs_nickname>>?!" she asks sternly.
      scene.text(`"What the fuck are you doing here, ${((s as any).pcs_nickname || '')}?!" she asks sternly.`);
      scene.text('"<i>Me<i>?! What are <i>you</i> doing here?!" you retort and she rolls her eyes.');
      scene.text('"I\'m their new cleaner, but they asked me to fill in for one of the girls tonight. What does it look like I\'m doing, you fucking idiot?! I don\'t know or care why you came here, but don\'t expect a private dance from me!"');
      scene.text('"I wasn-" you start to reply, but she cuts you off.');
      scene.text('"Whatever. I need to get back to work," she says before leaving the room.');
      scene.actions([
        { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAlbinaDance(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/redlight/stripclub/private_room.jpg');
  scene.text('You hand over the money and are taken to one of the private rooms, where you take a seat and wait for Albina to arrive.');
  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60  ||  ((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
    if (((s as any).AlbinaQW ?? 0)?.['special_lapdance'] === 0) {
      // TODO-QSP: dynamic text: Albina walks into the room and her face lights up when she sees you. "<<$pcs_nic...
      scene.text(`Albina walks into the room and her face lights up when she sees you. "${((s as any).pcs_nickname || '')}! I should have known that it was you!"`);
      scene.text('All you can do is grin as she seductively struts over to you. "What if we make this dance more... interesting?"');
      scene.text('"Oh?" you ask while raising an eyebrow.');
      scene.text('"Let\'s do it on the stage in front of everyone!" she grins.');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'money', 'pay', 1000);
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['special_lapdance'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/alb_lapdance.jpg');
    scene.text('The DJ announces a special performance by Amber and Albina leads you out onto the stage. She pushes you down onto a chair placed on the stage and music starts playing as she starts her show. She seductively dances and twerks while slowly peeling her clothes off, all while giving you and the cheering audience a teasing smile and wiggling her hips.');
    scene.text('Once down to her thong, she climbs into your lap and starts grinding against you as her perky breasts jiggle in your face. You\'re feeling rather aroused by the time she finishes by bending over in front of you and tugging the skimpy thong down her legs, much to the joy of the men in the crowd. You notice her pussy is a little wet; it seems she\'s enjoying this as much as you.');
    scene.text('The song ends and a naked Albina smiles while wiggling her naked ass at you. The men whistle and holler as you give her a firm smack on the ass.');
    scene.text('Her show over, she gathers up her clothes and tips before strutting off the stage as the men continue cheering, leaving you to climb off the stage.');
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
        { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'money', 'pay', 1000);
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No, I just want a private dance if that\'s okay."');
    scene.text('She nods. "Sure. Just sit back and enjoy the show."');
    scene.text('She pushes you down onto the chair and music starts playing as she starts her show. She seductively dances and twerks while slowly peeling her clothes off, all while giving you a teasing smile and wiggling her hips.');
    scene.text('Once down to her thong, she climbs into your lap and starts grinding against you as her perky breasts jiggle in your face. You\'re feeling rather aroused by the time she finishes by bending over in front of you and tugging the skimpy thong down her legs. You notice her pussy is a little wet; it seems she\'s enjoying this as much as you.');
    scene.text('The song ends and a naked Albina smiles and wiggles her naked ass at you before she gathers up her clothes and gets dressed. She winks at you before strutting out of the room, leaving you to return to the main area.');
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: Albina walks into the room and her face lights up when she sees you. "<<$pcs_nic...
      scene.text(`Albina walks into the room and her face lights up when she sees you. "${((s as any).pcs_nickname || '')}! I should have known that it was you!"`);
      scene.text('All you can do is grin as she seductively struts over to you. "Want to get back on stage for another \'special\' show?"');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'money', 'pay', 1000);
    ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['special_lapdance'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/stripclub/alb_lapdance.jpg');
    scene.text('The DJ announces a special performance by Amber and Albina leads you out onto the stage. She pushes you down onto a chair placed on the stage and music starts playing as she starts her show. She seductively dances and twerks while slowly peeling her clothes off, all while giving you and the cheering audience a teasing smile and wiggling her hips.');
    scene.text('Once down to her thong, she climbs into your lap and starts grinding against you as her perky breasts jiggle in your face. You\'re feeling rather aroused by the time she finishes by bending over in front of you and tugging the skimpy thong down her legs, much to the joy of the men in the crowd. You notice her pussy is a little wet; it seems she\'s enjoying this as much as you.');
    scene.text('The song ends and a naked Albina smiles while wiggling her naked ass at you. The men whistle and holler as you give her a firm smack on the ass.');
    scene.text('Her show over, she gathers up her clothes and tips before strutting off the stage as the men continue cheering, leaving you to climb off the stage.');
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
        { label: 'Refuse', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'money', 'pay', 1000);
    qspCall(s, 'stat', '');
    scene.text('You shake your head. "No, I just want a private dance if that\'s okay."');
    scene.text('She nods. "Sure. Just sit back and enjoy the show."');
    scene.text('She pushes you down onto the chair and music starts playing as she starts her show. She seductively dances and twerks while slowly peeling her clothes off, all while giving you a teasing smile and wiggling her hips.');
    scene.text('Once down to her thong, she climbs into your lap and starts grinding against you as her perky breasts jiggle in your face. You\'re feeling rather aroused by the time she finishes by bending over in front of you and tugging the skimpy thong down her legs. You notice her pussy is a little wet; it seems she\'s enjoying this as much as you.');
    scene.text('The song ends and a naked Albina smiles and wiggles her naked ass at you before she gathers up her clothes and gets dressed. She winks at you before strutting out of the room, leaving you to return to the main area.');
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  } },
      ]);
    }
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'money', 'pay', 100);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    scene.text('A few minutes later, Albina walks in and rolls her eyes when she sees you. "I\'m not giving you of all people a fucking lapdance!" She throws your money on the floor. "Here\'s your refund, minus a small fee for wasting my time of course. Now fuck off before I call security!"');
    scene.text('She crosses her arms and glares at you intently until you leave the room.');
    scene.actions([
      { label: 'Return to the floor', goto: ['stripclub', 'main_floor'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFanApproach(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    scene.img('images/locations/city/redlight/stripclub/club_night_winter.jpg');
  } else {
    scene.img('images/locations/city/redlight/stripclub/club_night_summer.jpg');
  }
  ((s as any).temp = (s as any).temp ?? {})['strip_club_partner'] = Math.floor(Math.random() * 300) + 1;
  qspCall(s, 'npcgeneratec', '', 0, 'guy from the strip club', 0, Math.floor(Math.random() * 2) + 3, 'like');
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((s as any).npc_age ?? 0)?.[String((s as any).npcID ?? 0)] < 26) {
    ((s as any).npc_age = (s as any).npc_age ?? {})[String((s as any).npcID ?? 0)] = Math.floor(Math.random() * 20) + 26;
  }
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).temp = (s as any).temp ?? {})['strip_club_partner'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
    // TODO-QSP: dynamic text: A man dressed in <<$npc_outfit[$npcID]>> is trying to get your attention as you ...
    scene.text(`A man dressed in ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} is trying to get your attention as you exit through the staff door.`);
  } else {
    // TODO-QSP: dynamic text: A man dressed in <<$npc_outfit[$npcID]>> is trying to get your attention as you ...
    scene.text(`A man dressed in ${((s as any).npc_outfit ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} is trying to get your attention as you exit through the staff door. His clothes look expensive.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore him', goto: ['stripclub', 'start'] },
    { label: 'Approach him', goto: ['stripclub', 'fan_chat'] },
  ]);
  scene.build();
}

function enterFanChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] < 2) {
    // TODO-QSP: dynamic text: His face is flushed with excitement. "I loved the show you put on tonight, <<$pc...
    scene.text(`His face is flushed with excitement. "I loved the show you put on tonight, ${((s as any).pcs_strippername || '')}! I'm a big fan!"`);
    scene.text('"Oh. Thanks," you reply. "And you are?"');
    // TODO-QSP: dynamic text: "Oh. I'm <<$npcdesc>>," he smiles. "But don't tell me your name! I like the myst...
    scene.text(`"Oh. I'm ${((s as any).npcdesc || '')}," he smiles. "But don't tell me your name! I like the mystery of only knowing you as ${((s as any).pcs_strippername || '')}."`);
    // TODO-QSP: dynamic text: "Were you looking for an autograph or something, <<$npcdesc>>?" you giggle.
    scene.text(`"Were you looking for an autograph or something, ${((s as any).npcdesc || '')}?" you giggle.`);
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('He starts eyeing you up and down with lustful desire.');
      scene.text('"You got me so fucking horny watching you perform! Let\'s head back to my place so I can fuck the shit out of you!"');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"No thanks. I\'m not interested in having a one night stand," you reply.');
    scene.text('He looks at you with anger on his face. "After the way you were dancing like a slut in there, you\'re not gonna give it up?!"');
    scene.text('He makes a show of your rejection, hissing at you and spitting on the ground, narrowly missing your shoes before storming off.');
    scene.text('You just roll your eyes and wait until he\'s gone before leaving yourself.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'Fuck off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"That\'s what this was about? Why don\'t you just fuck off?" you scowl. "You have <i>no</i> chance with me!"');
    scene.text('He looks at you with anger on his face. "After the way you were dancing like a slut in there, you\'re not gonna give it up?!"');
    scene.text('He makes a show of your rejection, hissing at you and spitting on the ground, narrowly missing your shoes before storming off.');
    scene.text('You just roll your eyes and wait until he\'s gone before leaving yourself.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'That sounds nice', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"That sounds nice," you say with a smile.');
    scene.text('He leans in and gives you a quick, yet passionate kiss.');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.text('"Great! I live in the city center, so it\'s not too far."');
    } else {
      scene.text('"Great! I live in the residential area, but it shouldn\'t take us too long to get there."');
    }
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    }
  } },
        { label: 'That sounds great', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"Fuck yeah, that sounds awesome!" you grin.');
    scene.text('He leans in and smacks your ass.');
    qspCall(s, 'arousal', 'kiss', 2);
    qspCall(s, 'arousal', 'end');
    scene.text('He leans in and gives you a quick, yet passionate kiss.');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.text('"I knew there was a reason I liked you! I live in the city center, so it\'s not too far."');
    } else {
      scene.text('"I knew there was a reason I liked you! I live in the residential area, but it shouldn\'t take us too long to get there."');
    }
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('"I had a really good time watching you dance tonight and I was wondering… Would you maybe want to come back to my place and…"');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"No thanks, I\'m not interested," you reply.');
    scene.text('"Oh, sure. That\'s okay. Uhh, sorry I asked," he says with a slight hint of disappointment.');
    scene.text('You just shrug and walk away.');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'Hook up with him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"That sounds nice," you smile.');
    scene.text('"Great! So... Shall we?"');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.text('You follow him back to his apartment in the city center, flirting in innuendos along the way.');
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    } else {
      scene.text('You follow him back to his home in an apartment complex in the residential area, flirting in innuendos along the way.');
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    }
  } },
        { label: 'Want to fuck?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"… fuck?" you say, finishing his sentence.');
    scene.text('He looks dumbfounded. "Uhh…"');
    scene.text('"Fuck," you repeat. "You want to take me back to your place and fuck me?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems stunned by your straightforwardness, but eventually answers. ...
    scene.text(`${((s as any).npcdesc || '')} seems stunned by your straightforwardness, but eventually answers. "Yes!"`);
    scene.text('"Lead the way then!" you grin before the two of you hurry through the streets together.');
    if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 'city_center') {
      scene.text('You follow him back to his apartment in the city center, flirting in innuendos along the way.');
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    } else {
      scene.text('You follow him back to his home in an apartment complex in the residential area, flirting in innuendos along the way.');
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    }
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: "I loved the show you put on tonight, <<$pcs_strippername>>!" he grins. "I'm onl...
    scene.text(`"I loved the show you put on tonight, ${((s as any).pcs_strippername || '')}!" he grins. "I'm only in town on business, but I'm such a big fan that I might come back just for you!"`);
    scene.text('"Oh. Thanks," you reply. "And you are?"');
    // TODO-QSP: dynamic text: "I'm <<$npcdesc>>," he smiles. "But don't tell me your name! I like the mystery ...
    scene.text(`"I'm ${((s as any).npcdesc || '')}," he smiles. "But don't tell me your name! I like the mystery of only knowing you as ${((s as any).pcs_strippername || '')}..."`);
    // TODO-QSP: dynamic text: "Were you looking for an autograph or something to take home with you, <<$npcdes...
    scene.text(`"Were you looking for an autograph or something to take home with you, ${((s as any).npcdesc || '')}?" you giggle.`);
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('He starts eyeing you up and down with lustful desire.');
      scene.text('"You got me so fucking horny watching you perform! Let\'s head back to my hotel room so I can fuck the shit out of you!"');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"No thanks. I\'m not interested in having a one night stand," you reply.');
    scene.text('He looks at you with anger on his face. "After the way you were dancing like a slut in there, you\'re not gonna give it up?!"');
    scene.text('He makes a show of your rejection, hissing at you and spitting on the ground, narrowly missing your shoes before storming off.');
    scene.text('You just roll your eyes and wait until he\'s gone before leaving yourself.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'Fuck off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"That\'s what this was about? Why don\'t you just fuck off?" you scowl. "You have <i>no</i> chance with me!"');
    scene.text('He looks at you with anger on his face. "After the way you were dancing like a slut in there, you\'re not gonna give it up?!"');
    scene.text('He makes a show of your rejection, hissing at you and spitting on the ground, narrowly missing your shoes before storming off.');
    scene.text('You just roll your eyes and wait until he\'s gone before leaving yourself.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'That sounds nice', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"That sounds nice," you say with a smile and he grins happily.');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    // TODO-QSP: close all
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/coupletaxi.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly hails a taxi and has a short chat with the driver. "Come on...
    scene.text(`${((s as any).npcdesc || '')} quickly hails a taxi and has a short chat with the driver. "Come on. Let's go!"`);
    // TODO-QSP: dynamic text: You get into the back seat of the taxi with him and spend the next 30 minutes dr...
    scene.text(`You get into the back seat of the taxi with him and spend the next 30 minutes driving, mostly in silence. You notice ${((s as any).npcdesc || '')} giving the taxi driver an impressive tip when you arrive at the hotel... Is he trying to impress you or is he just very generous?`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npcdesc || '') ?? '') + '\'s room', goto: ['sex_ev_start', 'hookup_hotel_start'] },
    ]);
  } },
    ]);
  } },
        { label: 'That sounds great', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_kiss.jpg');
    scene.text('"Fuck yeah, that sounds awesome!" you grin.');
    scene.text('He leans in and smacks your ass. "I knew there was a reason I liked you!"');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    // TODO-QSP: close all
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/coupletaxi.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly hails a taxi and has a short chat with the driver. "Come on...
    scene.text(`${((s as any).npcdesc || '')} quickly hails a taxi and has a short chat with the driver. "Come on. Let's go!"`);
    // TODO-QSP: dynamic text: You get into the back seat of the taxi with him and spend the next five minutes ...
    scene.text(`You get into the back seat of the taxi with him and spend the next five minutes driving, mostly in silence. You notice ${((s as any).npcdesc || '')} giving the taxi driver an impressive tip when you arrive at the hotel... Is he trying to impress you or is he just very generous?`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npcdesc || '') ?? '') + '\'s room', goto: ['sex_ev_start', 'hookup_hotel_start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"I had a really good time watching you dance tonight and I was wondering... Would you maybe want to come back to my hotel and..."');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"No thanks, I\'m not interested," you reply.');
    scene.text('"Oh, sure. That\'s okay. Uhh, sorry I asked," he says with a slight hint of disappointment.');
    scene.text('You just shrug and walk away.');
    scene.actions([
      { label: 'Leave', goto: ['stripclub', 'start'] },
    ]);
  } },
        { label: 'Hook up with him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"That sounds nice," you smile.');
    scene.text('"Great! So, shall we…"');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    // TODO-QSP: close all
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/coupletaxi.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly hails a taxi and has a short chat with the driver. "Come on...
    scene.text(`${((s as any).npcdesc || '')} quickly hails a taxi and has a short chat with the driver. "Come on. Let's go!"`);
    // TODO-QSP: dynamic text: You get into the back seat of the taxi with him and spend the next five minutes ...
    scene.text(`You get into the back seat of the taxi with him and spend the next five minutes driving, mostly in silence. You notice ${((s as any).npcdesc || '')} giving the taxi driver an impressive tip when you arrive at the hotel... Is he trying to impress you or is he just very generous?`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npcdesc || '') ?? '') + '\'s room', goto: ['sex_ev_start', 'hookup_hotel_start'] },
    ]);
  } },
    ]);
  } },
        { label: 'Want to fuck?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/outside_talk.jpg');
    scene.text('"… fuck?" you say, finishing his sentence.');
    scene.text('He looks dumbfounded. "Uhh…"');
    scene.text('"Fuck," you repeat. "You want to take me back to your hotel room and fuck me?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems stunned by your straightforwardness, but eventually answers. ...
    scene.text(`${((s as any).npcdesc || '')} seems stunned by your straightforwardness, but eventually answers. "Yes!"`);
    scene.text('"Lead the way then!" you grin.');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    // TODO-QSP: close all
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/sex/hotel/coupletaxi.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> quickly hails a taxi and has a short chat with the driver. "Come on...
    scene.text(`${((s as any).npcdesc || '')} quickly hails a taxi and has a short chat with the driver. "Come on. Let's go!"`);
    // TODO-QSP: dynamic text: You get into the back seat of the taxi with him and spend the next five minutes ...
    scene.text(`You get into the back seat of the taxi with him and spend the next five minutes driving, mostly in silence. You notice ${((s as any).npcdesc || '')} giving the taxi driver an impressive tip when you arrive at the hotel... Is he trying to impress you or is he just very generous?`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npcdesc || '') ?? '') + '\'s room', goto: ['sex_ev_start', 'hookup_hotel_start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetGirl(s: GameState, scene: SceneBuilder): void {
  scene.text('After a few minutes, the DJ hypes the crowd up as he announces which of the strippers will be performing.');
  if ((!(Math.floor(Math.random() * 8) + 0))) {
    scene.text('"It\'s the fiery red headed beauty who\'s always ready to give all you fine gentlemen out there some extra <i>looooovvve</i>... Give it up for... RUUUUBBBBYYY!"');
  } else {
    if ((Math.floor(Math.random() * 8) + 0) === 1) {
      scene.text('"It\'s the blonde bombshell herself, gents! With a few improvements to that already <i>fantastic</i> body, give it up for... JAAAAAAADDEE!"');
    } else {
      if ((Math.floor(Math.random() * 8) + 0) === 2) {
        scene.text('"Prepare yourselves for the raven haired spectacle that defies time itself gents because here comes... OOONNNNNYYYYX!"');
      } else {
        if ((Math.floor(Math.random() * 8) + 0) === 3) {
          scene.text('"The little minx is so eager to perform for you all fine gents that she\'s already stripping down backstage! Give it up for... EMMEERRAALLLD!"');
        } else {
          if ((Math.floor(Math.random() * 8) + 0) === 4) {
            scene.text('"Pay attention now gents because the mysterious beauty from lands unknown is here to charm you all! Give it up for the exotic goddess that is... AAAAMMMYTHEEEEESSSST!"');
          } else {
            if ((Math.floor(Math.random() * 8) + 0) === 5) {
              scene.text('"Here\'s the girl that will make your night <i>shine</i>, gents! All the way from the glittering heart of Moscow, give it up for... DIIIAAMMMMOOOOONNNND!"');
            } else {
              if ((Math.floor(Math.random() * 8) + 0) === 6) {
                scene.text('"One thing this girl certainly isn\'t shy about anymore is performing for all you fine gentlemen out there! Give it up for... AAAZZZUUUULLL!"');
              } else {
                scene.text('"Now here\'s a girl I know a lot of you fine gents out there have been waiting for! Give it up for the finest pair of tits in the city because here comes... OOOPPAAALLL!"');
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'employee_entrance':
      enterEmployeeEntrance(s, scene);
      break;
    case 'entry':
      enterEntry(s, scene);
      break;
    case 'pay_enter':
      enterPayEnter(s, scene);
      break;
    case 'work_leave':
      enterWorkLeave(s, scene);
      break;
    case 'main_floor':
      enterMainFloor(s, scene);
      break;
    case 'bar':
      enterBar(s, scene);
      break;
    case 'private_dance':
      enterPrivateDance(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'private_sex':
      enterPrivateSex(s, scene);
      break;
    case 'private_sex1':
      enterPrivateSex1(s, scene);
      break;
    case 'hire1':
      enterHire1(s, scene);
      break;
    case 'hire2':
      enterHire2(s, scene);
      break;
    case 'hire3':
      enterHire3(s, scene);
      break;
    case 'stripper_tryout1':
      enterStripperTryout1(s, scene);
      break;
    case 'stripper_tryout2':
      enterStripperTryout2(s, scene);
      break;
    case 'stripper_tryout3':
      enterStripperTryout3(s, scene);
      break;
    case 'stripper_accept1':
      enterStripperAccept1(s, scene);
      break;
    case 'manager_job_change':
      enterManagerJobChange(s, scene);
      break;
    case 'albina_first_dance1':
      enterAlbinaFirstDance1(s, scene);
      break;
    case 'albina_recurrent_dance':
      enterAlbinaRecurrentDance(s, scene);
      break;
    case 'albina_confront':
      enterAlbinaConfront(s, scene);
      break;
    case 'albina_dance':
      enterAlbinaDance(s, scene);
      break;
    case 'fan_approach':
      enterFanApproach(s, scene);
      break;
    case 'fan_chat':
      enterFanChat(s, scene);
      break;
    case 'set_girl':
      enterSetGirl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stripclub: LocationDef = {
  name: 'stripclub',
  title: 'Strip Club',
  region: 'other',
  enter: enter,
};
