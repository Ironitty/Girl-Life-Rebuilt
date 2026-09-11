import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPa(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('Inside the small office is a young man sitting at a computer, tapping away at the keyboard.');
  if ((!((s as any).film ?? 0))) {
    scene.text('"Who are you? This office is for staff only."');
  } else {
    scene.text('"Hi there, what can I do for you?"');
    if ((!((s as any).pfilmNO ?? 0))) {
      scene.actions([
        { label: 'Change your porn name', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Is it possible for me to change my stage name?" you ask.');
    scene.text('"Of course! Just give me a minute to register it in the database. So, what would you like to be called?" he replies.');
    scene.actions([
      { label: '"I want to be called…"', handler: (st: GameState) => {
    if (((s as any).pfname ?? 0) === '') {
    }
  }, goto: ['pornstudio', 'pa'] },
      { label: 'Nothing', goto: ['pornstudio', 'pa'] },
    ]);
  } },
      ]);
    }
    if ((!((s as any).pfilmSTOP ?? 0))) {
      scene.actions([
        { label: 'What\'s the rating of my videos?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "You've made <<film>> films."
    scene.text(`"You've made ${((s as any).film ?? 0)} films."`);
    if (((s as any).porn_fame ?? 0) < 10) {
      scene.text('"Nobody knows your name. You\'re one of hundreds of amateur actresses whose fims are sold really cheap."');
    } else {
      if (((s as any).porn_fame ?? 0) < 20) {
        scene.text('"You\'re still unknown and are unlikely to be recognized. Your own films are still sold cheap."');
      } else {
        if (((s as any).porn_fame ?? 0) < 40) {
          scene.text('"You\'re mentioned here and there, but still mostly get minor roles. Your name is slowly emerging and you have your own fanbase."');
        } else {
          if (((s as any).porn_fame ?? 0) < 60) {
            scene.text('"You get the occasional back cover appearance and your films are getting more popular, which means more fans and more money."');
          } else {
            if (((s as any).porn_fame ?? 0) < 80) {
              scene.text('"You\'re a known porn actress who appears on the front cover. Your films are sold at a decent price, and in big numbers."');
            } else {
              scene.text('"You\'re a very well known porn actress and your films are sold at a premium. You\'re likely to receive offers to work with renowned studios and producers."');
            }
          }
        }
      }
    }
    if (((s as any).porn_fame ?? 0) >= 20) {
      ((s as any).ftypecount ?? {})[0] = ((s as any).pornvag ?? 0);
      ((s as any).ftypecount_text ?? {})[0] = 'vaginal';
      ((s as any).ftypecount ?? {})[1] = ((s as any).pornanal ?? 0);
      ((s as any).ftypecount_text ?? {})[1] = 'anal';
      ((s as any).ftypecount ?? {})[2] = ((s as any).porngasm ?? 0);
      ((s as any).ftypecount_text ?? {})[2] = 'orgasm';
      ((s as any).ftypecount ?? {})[3] = ((s as any).porngang ?? 0);
      ((s as any).ftypecount_text ?? {})[3] = 'group sex';
      ((s as any).ftypecount ?? {})[4] = ((s as any).porncream ?? 0);
      ((s as any).ftypecount_text ?? {})[4] = 'creampie';
      ((s as any).ftypecount ?? {})[5] = ((s as any).pornhole ?? 0);
      ((s as any).ftypecount_text ?? {})[5] = 'gloryhole';
      ((s as any).ftypecount ?? {})[6] = ((s as any).pornbdsm ?? 0);
      ((s as any).ftypecount_text ?? {})[6] = 'bdsm';
      ((s as any).ftypecount ?? {})[7] = ((s as any).pornlesbo ?? 0);
      ((s as any).ftypecount_text ?? {})[7] = 'lesbian';
      ((s as any).ftypecount ?? {})[8] = ((s as any).pornpreg ?? 0);
      ((s as any).ftypecount_text ?? {})[8] = 'pregnant';
      ((s as any).ftypecount ?? {})[9] = ((s as any).pornexhib ?? 0);
      ((s as any).ftypecount_text ?? {})[9] = 'public';
      ((s as any).ftypecount ?? {})[10] = ((s as any).pornmast ?? 0);
      ((s as any).ftypecount_text ?? {})[10] = 'masturbation';
      ((s as any).ftypecount ?? {})[11] = ((s as any).pornbukk ?? 0);
      ((s as any).ftypecount_text ?? {})[11] = 'cumshot';
      ((s as any).ftypecount ?? {})[12] = ((s as any).pornbj ?? 0);
      ((s as any).ftypecount_text ?? {})[12] = 'blowjob';
      ((s as any).ftypecount ?? {})[13] = ((s as any).pornhj ?? 0);
      ((s as any).ftypecount_text ?? {})[13] = 'handjob';
      ((s as any).ftypecount ?? {})[14] = ((s as any).pornswall ?? 0);
      ((s as any).ftypecount_text ?? {})[14] = 'cum swallowing';
      ((s as any).temp ?? {})['max0'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
      ((s as any).temp ?? {})['pos0'] = qspUntranslated(s, "arrpos('ftypecount', temp['max0'])", { location: "pornstudio" });
      ((s as any).temp ?? {})['type0'] = qspUntranslated(s, "ftypecount_text[temp['pos0']]", { location: "pornstudio" });
      ((s as any).temp ?? {})['max1'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
      ((s as any).temp ?? {})['pos1'] = qspUntranslated(s, "arrpos('ftypecount', temp['max1'])", { location: "pornstudio" });
      ((s as any).temp ?? {})['type1'] = qspUntranslated(s, "ftypecount_text[temp['pos1']]", { location: "pornstudio" });
      if (10 * ((s as any).temp ?? 0)?.['max1'] < 9 * ((s as any).temp ?? 0)?.['max0']) {
        // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>> scenes.
        scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']} scenes.`);
      } else {
        ((s as any).temp ?? {})['max2'] = qspUntranslated(s, "max('ftypecount')", { location: "pornstudio" });
        ((s as any).temp ?? {})['pos2'] = qspUntranslated(s, "arrpos('ftypecount', temp['max2'])", { location: "pornstudio" });
        ((s as any).temp ?? {})['type2'] = qspUntranslated(s, "ftypecount_text[temp['pos2']]", { location: "pornstudio" });
        if (10 * ((s as any).temp ?? 0)?.['max2'] < 9 * ((s as any).temp ?? 0)?.['max0']) {
          // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>> and <<$temp['type1']>> scenes.
          scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']} and ${((s as any).temp ?? 0)?.['type1']} scenes.`);
        } else {
          // TODO-QSP: dynamic text: You're known for your <<$temp['type0']>>, <<$temp['type1']>> and <<$temp['type2'...
          scene.text(`You're known for your ${((s as any).temp ?? 0)?.['type0']}, ${((s as any).temp ?? 0)?.['type1']} and ${((s as any).temp ?? 0)?.['type2']} scenes.`);
        }
      }
    }
    if (((s as any).film ?? 0) < 10  &&  ((s as any).porn_fame ?? 0) < 10) {
      scene.text('"By the way, if you wanted, I could completely remove them from our systems - for the right price of course…" the guy whispers.');
      scene.actions([
        { label: 'Tell me more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).films_stop_payment = ((s as any).film ?? 0) * 40000;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Seeing as you're not well known, it's unlikely anyone would notice. However, to...
    scene.text('"Seeing as you\'re not well known, it\'s unlikely anyone would notice. However, to remove them you\'d have to cover the loss of the studio\'s profits- \' + $func(\'money\', \'string_price\', 40000) + \' per film. That\'s a total of \' + $func(\'money\', \'string_price\', films_stop_payment) + \'."');
    scene.text('"Also, it would piss off your co-stars and director, and likely end your porn career. You should also know that there\'s no guarantee there\'s no other copies out there, so think carefully."');
    scene.actions([
      { label: 'Remove them [+$func(\'money\', \'get_cost_string\', films_...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((s as any).films_stop_payment ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'money', 'pay', ((s as any).films_stop_payment ?? 0));
      (s as any).pfilmSTOP = 1;
      ((s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'retired';
      qspCall(s, 'jobs', 'set_terminated', 'city_pornstudio_actress');
      ((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = 0;
      ((s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = 0;
      (s as any).film = 0;
      qspCall(s, 'stat', '');
      scene.text('"We never met. Have a nice day, and don\'t come back."');
      scene.actions([
        { label: 'Leave', goto: ['pornstudio', ''] },
      ]);
    }
  } },
      { label: 'Not interested', goto: ['pornstudio', ''] },
    ]);
  } },
        { label: 'Leave', goto: ['pornstudio', ''] },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pornstudio', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pornstudio', ''] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enterDelivery(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('"We made inquiries about you, and everything seems in order. In short, we give you a thumb drive and you deliver it to the sauna. They give you an envelope and you bring it to us. Immediately."');
  // TODO-QSP: dynamic text: "Upon delivery of the envolope, you get '+$func('money', 'string_profit', 5000)+...
  scene.text('"Upon delivery of the envolope, you get \'+$func(\'money\', \'string_profit\', 5000)+\'. Deliveries are available every Friday, after the studio has opened. If you agree, then visit any Friday, and choose a safe mode of transport."');
  scene.actions([
    { label: 'Disagree', handler: (st: GameState) => {
    (st as any).bomzQW = (-1);
    qspCall(st, 'jobs', 'set_terminated', 'city_pornstudio_delivery');
  }, goto: ['city_redlight', 'start'] },
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('"We\'ll take you this one time. In the future, you\'ll have to make your own way because Fridays are getting risky for us. We need to introduce you to our colleagues."');
    scene.actions([
      { label: 'Let\'s go', handler: (st: GameState) => {
    (s as any).workDisk = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You climb into a car by the entrance and are driven to the sauna.');
    if (((s as any).saunasex ?? 0) === 1) {
      scene.text('You recall going to this sauna. You had some pretty energetic sex here.');
    } else {
      if (((s as any).sauna ?? 0) > 0) {
        scene.text('Oh, it\'s the sauna near your home.');
      } else {
        scene.text('This sauna is located near your home. You find it strange that you didn\'t notice it before.');
      }
    }
    scene.text('You\'re introduced to the local managers and it\'s explained to you who you need to deliver to. You\'re also reminded that it\'s necessary to return the envelope the same day you receive it.');
    scene.text('"Don\'t forget to use secure transport. We\'ll see you on Fridays. <i>Don\'t</i> fuck up."');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pornstudio', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
  (s as any).pcs_makeup = 1;
  qspCall(s, 'din_van', 'showerdin');
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  (s as any).cumspclnt = 20;
  qspCall(s, 'cum_cleanup', '');
  scene.text('You enter the cubicle, turn the water on and thoroughly wash yourself.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0) {
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    qspCall(s, 'stat', '');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['mirror', 'start'] },
      { label: 'Go and see Dimitri', goto: ['pornstudio', 'postvideo'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    { label: 'Go and see Dimitri', goto: ['pornstudio', 'postvideo'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/shower.jpg');
  scene.text('You can freshen up in the mirror or go and see Dimitri about being paid.');
  scene.actions([
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    { label: 'Go and see Dimitri', goto: ['pornstudio', 'postvideo'] },
  ]);
  scene.build();
}

function enterManager(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/studio_porn/studia_0.jpg');
  scene.text('You walk into the manager\'s office and find Dimitri at his desk.');
  if ((!((s as any).firstkasting ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['pornstudio', 'first'] }]);
  }
  if (((s as any).pregChem ?? 0) >= 2688  &&  (!((s as any).pregtalkpornstudio ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['pornstudio', 'pregreact'] }]);
  }
  if (((s as any).pfilmNoVenera ?? 0) === 1) {
    scene.text('"Why are you here? You\'re banned from filming until you get that STD sorted. Show me a medical certificate saying you\'re clean and you can come back to work."');
  } else {
    if (((s as any).pfilmNO ?? 0) === 1) {
      scene.text('"Why are you here? You\'re blacklisted and will never work in porn again."');
    } else {
      if (((s as any).pfilmSTOP ?? 0) === 1) {
        scene.text('"I\'m sorry, I thought you had retired?"');
      } else {
        if (((qspFunc(s, 'jobs', 'is_work_time', 'city_pornstudio_actress') === 1  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_pornstudio_actress') === 0)  ||  ((s as any).pornmiss ?? 0) === 1)  &&  ((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] <= ((s as any).job_penalty_max_debt ?? 0)?.['city_pornstudio_actress']  &&  (!((s as any).missedshoot ?? 0))) {
          (s as any).missedshoot = 1;
          (s as any).pornmiss = 0;
          scene.text('Dimitri looks agitated as he storms towards you, ready to chew you out.');
          scene.text('"Where the fuck were you?! I paid the actors and director to sit around on their asses waiting for you! The whole shoot was a bust!"');
          scene.text('He manages to cool off a little with the venting of his frustration, and after a deep breath, he continues more calmly.');
          if (qspFunc(s, 'jobs', 'has_booking_for_day', 'city_pornstudio_actress', ((s as any).daystart ?? 0) + 1) === 0) {
            (s as any).missday = Math.floor(Math.random() * 4) + 0;
            ((s as any).porntaken ?? {})['1,' + String((s as any).missday || '') + ''] = 0;
            scene.text('"I\'ll give you a chance to make it right. Another actress has gotten sick and cancelled her shoot. If you jump in for her, your debt is cancelled. And no, I don\'t remember what she was going to shoot. This day has been anything but easy due to you! You can also work it off, but that will take longer, or just pay it back if you have the money."');
            scene.actions([
              { label: 'Jump in tomorrow', handler: (st: GameState) => {
    ((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = (((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] ?? 0) - (((s as any).job_last_miss_cost ?? 0)?.['city_pornstudio_actress']);
    if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] < 0) {
      ((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = 0;
    }
    ((s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = 0;
    (s as any).pfilmNOPAY = 1;
    ((s as any).porntaken ?? {})['1,' + String((s as any).missday || '') + ''] = 2;
    // TODO-QSP: gs 'jobs', 'book_slot', 'city_pornstudio_actress', daystart + 1, missday, $str(pornplan['1,<<missday...
  }, goto: ['pornstudio', ''] },
            ]);
          } else {
            scene.text('"You know what, you can work it off, but it will take you a while. You could also just pay it off if you have the money."');
          }
          qspCall(s, 'willpower', 'misc', 'self');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'I quit! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'I quit! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('"Fuck this shit, I quit!" you yell before storming out of his office.');
    (s as any).pfilmNO = 1;
    ((s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'quit';
    qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_actress');
    ((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = 0;
    ((s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = 0;
  }, goto: ['pornstudio', ''] },
            ]);
          }
          return;
          scene.actions([
            { label: 'Accept your debt', goto: ['pornstudio', ''] },
          ]);
        } else {
          if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > ((s as any).job_penalty_max_debt ?? 0)?.['city_pornstudio_actress']  &&  ((s as any).pornmiss ?? 0) === 1) {
            (s as any).pfilmNO = 1;
            ((s as any).job_termination_reason ?? {})['city_pornstudio_actress'] = 'blacklisted';
            qspCall(s, 'jobs', 'set_fired', 'city_pornstudio_actress');
            ((s as any).job_booking_debt ?? {})['city_pornstudio_actress'] = 0;
            ((s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = 0;
            scene.text('"You didn\'t come to the shoot! You fucked me over once again when you already owed me a lot of money! You took the second chance I gave you and threw it back in my face! I don\'t want to work with you anymore, so get out! You\'re blacklisted!"');
          } else {
            if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_pornstudio_actress') === 1) {
              if (((s as any).minut ?? 0) <= 30) {
                scene.text('"You\'re a bit early, but no matter. You can wait around for a bit until the doctor arrives for your check-up," he says with a smile.');
              } else {
                if (((s as any).minut ?? 0) <= 55) {
                  scene.text('"You\'re just in time for your inspection. Off you go now," he says with a smile.');
                } else {
                  // TODO-QSP: dynamic text: "You're almost late, <<pfname>>! I suggest you be more careful in the future," h...
                  scene.text(`"You're almost late, ${((s as any).pfname ?? 0)}! I suggest you be more careful in the future," he says with a stern look. "Now move along and get yourself checked up."`);
                }
              }
              (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
              (s as any).temp_mgr_pf_type = qspUntranslated(s, "val(func('jobs', 'get_booking_data_for_day', 'city_pornstudio_actress', daystart))", { location: "pornstudio" });
              // TODO-QSP: dynamic 'act ''Go for medical check-up'': gt ''pornstudio'', ''medical'', <<temp_mgr_pf_type>>'
              return;
            } else {
              if (((s as any).film ?? 0) === 0  &&  ((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] === 0) {
                if ((!((s as any).firstoffer ?? 0))) {
                  (s as any).firstoffer = 1;
                  if (((s as any).tits ?? 0) >= 4) {
                    // TODO-QSP: dynamic text: "So you're the new girl, huh? As luck would have it, we're looking for someone f...
                    scene.text('"So you\'re the new girl, huh? As luck would have it, we\'re looking for someone fresh for our next shoot. It\'s called \'Girls Jerk Guys #36\'. For \'+$func(\'money\', \'string_profit\', 500)+\', you would jerk a guy off and have him cum on your tits. However, in your case, you\'ll be using those puppies instead. Titfucking is a market we want to break into," he says while looking at your well endowed chest.');
                    scene.text('"You should also know that this particular shoot is booked with Egor, one of our more… experienced actors. He\'s rather… proud of being in this line of work."');
                  } else {
                    // TODO-QSP: dynamic text: "So you're the new girl, huh? As luck would have it, we're looking for someone f...
                    scene.text('"So you\'re the new girl, huh? As luck would have it, we\'re looking for someone fresh for our next shoot. It\'s called \'Girls Jerk Guys #36\'. For \'+$func(\'money\', \'string_profit\', 500)+\', you jerk a guy off and have him cum on your tits."');
                    scene.text('"You should also know that this particular shoot is booked with Egor, one of our more… experienced actors. He\'s rather… proud of being in this line of work."');
                  }
                } else {
                  if (((s as any).tits ?? 0) >= 4) {
                    // TODO-QSP: dynamic text: "Hello. Since you're new, all I can offer you is an introductory movie called 'G...
                    scene.text('"Hello. Since you\'re new, all I can offer you is an introductory movie called \'Girls Jerk Guys #36\'. For \'+$func(\'money\', \'string_profit\', 500)+\', you would jerk a guy off and have him cum on your tits. However, in your case, you\'ll be using those puppies instead. Titfucking is a market we want to break into," he says while looking at your well endowed chest.');
                    scene.text('"You should also know that this particular shoot is booked with Egor, one of our more… experienced actors. He\'s rather… proud of being in this line of work."');
                  } else {
                    // TODO-QSP: dynamic text: "Hello. Since you're new, all I can offer you is an introductory movie called 'G...
                    scene.text('"Hello. Since you\'re new, all I can offer you is an introductory movie called \'Girls Jerk Guys #36\'. For \'+$func(\'money\', \'string_profit\', 500)+\', you jerk a guy off and have him cum on your tits."');
                    scene.text('"You should also know that this particular shoot is booked with Egor, one of our more… experienced actors. He\'s rather… proud of being in this line of work."');
                  }
                }
                qspCall(s, 'willpower', 'exhib', 'self');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Agree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Agree [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    // TODO-QSP: gs 'jobs', 'book_slot', 'city_pornstudio_actress', daystart + 1, 0, '1'
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Cool. We shoot tomorrow, so be here between '+$func('time', 'get_time_string', ...
    scene.text('"Cool. We shoot tomorrow, so be here between \'+$func(\'time\', \'get_time_string\', 9, 0)+\' and \'+$func(\'time\', \'get_time_string\', 10, 0)+\'. Please don\'t be late."');
    scene.actions([
      { label: 'Leave', goto: ['pornstudio', ''] },
    ]);
  } },
                  ]);
                }
                return;
                scene.actions([
                  { label: 'I don\'t think I\'m ready', goto: ['pornstudio', ''] },
                ]);
              } else {
                if (((s as any).film ?? 0) > 0) {
                  qspCall(s, 'pornstudio', 'options');
                } else {
                  scene.text('Dimitri looks up from his paperwork and greets you. "Hello. Can I help you with something?"');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).job_booking_debt ?? 0)?.['city_pornstudio_actress'] > 0) {
    scene.actions([
      { label: 'Ask about your debt', handler: (st: GameState) => {
    // TODO-QSP: '"Of course. Your current debt to the company is <<job_booki...
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enterOptions(s: GameState, scene: SceneBuilder): void {
  scene.text('"Let\'s see what I have on offer for you."');
  if (((s as any).film ?? 0) < 5) {
    (s as any).fmulti = 100;
  } else {
    if (((s as any).film ?? 0) < 10) {
      (s as any).fmulti = 120;
    } else {
      if (((s as any).film ?? 0) < 15) {
        (s as any).fmulti = 140;
      } else {
        if (((s as any).film ?? 0) < 25) {
          (s as any).fmulti = 160;
        } else {
          if (((s as any).film ?? 0) < 50) {
            (s as any).fmulti = 180;
          } else {
            if (((s as any).film ?? 0) >= 50) {
              (s as any).fmulti = 200;
            }
          }
        }
      }
    }
  }
  if (((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] > 1  ||  (((s as any).pfilmNOPAY ?? 0) === 0  &&  ((s as any).job_bookings_active ?? 0)?.['city_pornstudio_actress'] > 0)) {
    scene.actions([
      { label: 'Cancel a contract', handler: (st: GameState) => {
    qspCall(st, 'pornschedule', 'canceling');
  } },
    ]);
  }
  scene.actions([
    { label: 'Filter by date', handler: (st: GameState) => {
    qspCall(st, 'pornschedule', 'selection');
  } },
    { label: 'Filter by participants', handler: (st: GameState) => {
    qspCall(st, 'pornschedule', 'displaynum');
  } },
    { label: 'Porn production schedule', handler: (st: GameState) => {
    qspCall(st, 'pornschedule', 'contracting');
  } },
    { label: 'Leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enterFirst(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/studio_porn/casting/casting0.jpg');
  scene.text('You sit on the sofa and greet the manager. "I see it\'s your first time with us. So, you want to be a porn star?"');
  if (((s as any).pcs_inhib ?? 0) > 40) {
    scene.text('You confirm your enthusiasm to be in porn and he nods.');
    scene.actions([
      { label: 'Continue', goto: ['pornstudio', 'yes'] },
    ]);
  } else {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      scene.text('You\'re in desperate need of money and are willing to do anything to earn it.');
      scene.actions([
        { label: 'Continue', goto: ['pornstudio', 'yes'] },
      ]);
    } else {
      if (qspFunc(s, 'money', 'can_afford', 500) === 0  &&  (((s as any).drugVars ?? 0)?.['cocaine_addict'] === 1  ||  ((s as any).drugVars ?? 0)?.['heroin_need'] > 0)) {
        scene.text('You\'re in need of money to buy drugs and are willing to do anything to earn it.');
        scene.actions([
          { label: 'Continue', goto: ['pornstudio', 'yes'] },
        ]);
      } else {
        scene.text('You don\'t feel confident enough to start a career in porn. You should gain some confidence showing off your body first.');
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enterYes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/studio_porn/casting/casting0.jpg');
  scene.text('"Let\'s see your papers then," he says. "You are 18 or older, yes?"');
  if (((s as any).age ?? 0) >= 18  &&  ((s as any).age ?? 0) < 20) {
    scene.text('"Yes I am," you answer while handing him your passport.');
    scene.text('He looks it over with a smirk. "A teen, huh? Perfect. You need to do a casting first, so take off your clothes."');
  } else {
    if (((s as any).age ?? 0) >= 20  &&  ((s as any).age ?? 0) < 25) {
      scene.text('"Yes I am," you answer while handing him your passport.');
      scene.text('He looks it over and nods. "Looks good, but you need to do a casting first. Take off your clothes."');
    } else {
      if (((s as any).age ?? 0) >= 25) {
        scene.text('"Yes I am," you answer while handing him your passport.');
        scene.text('He looks it over and frowns. "You\'re a bit old to start doing porn, no?"');
        scene.text('"What do you mean?" you ask with a frown.');
        scene.text('"Most of our girls started when they were 18. The oldest was 20," he replies. "We can work with you, but you need to do a casting first. Take off your clothes."');
      } else {
        if (((s as any).fakepassport ?? 0) === 1) {
          scene.text('"Yes I am," you answer while handing him your fake passport.');
          scene.text('You see him frown as he checks your passport with suspicion. "You need to do a casting first. Take off your clothes."');
        } else {
          scene.text('"Nearly…" you plead.');
          scene.text('"Right… Come back when you\'re old enough, kid."');
          (s as any).fakepassport = 2;
          return;
          scene.actions([
            { label: 'Leave', goto: ['pornstudio', ''] },
          ]);
        }
      }
    }
  }
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Undress [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Undress [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting1.jpg');
    scene.text('You undress as he gets up from his chair and walks towards you with a camera. "Lie down on the couch and spread your legs."');
    scene.actions([
      { label: 'Grab your clothes and run out', goto: ['pornstudio', ''] },
      { label: 'Lie down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting2.jpg');
    scene.text('You lie back on the sofa and spread your legs as he takes a few pictures, explaining that they\'re for your portfolio.');
    if (((s as any).tits ?? 0) >= 4) {
      scene.text('"Are these puppies real?" he asks while fondling one of your large breasts in his hand with an approving grin. "These things bouncing around as you get fucked will certainly draw in the views."');
      if (((s as any).age ?? 0) < 20) {
        scene.text('"A big tit teen like you is going to be <i>very</i> popular, and not just with the viewers!"');
      }
    } else {
      if (((s as any).tits ?? 0) < 2) {
        scene.text('He notices your clear lack of sizeable breasts. "No worries. Small tits are just as popular in porn as big ones."');
      } else {
        scene.text('"Nice tits. Always good to give the viewers something to look at," he smiles while fondling one of your breasts in his hand.');
      }
    }
    if (((s as any).pcs_pubes ?? 0) <= 3) {
      scene.text('He runs his hand over your smooth crotch. "clean-shaven. Good. Make sure it stays smooth. Stubble looks ugly on camera."');
    } else {
      if (((s as any).pcs_pubes ?? 0) <= 10) {
        scene.text('He shakes his head while running his hand over your crotch. "You either need to grow this out into a neat bush or shave it. Stubble looks ugly on camera."');
      } else {
        if (((s as any).pcs_pubes ?? 0) <= 15) {
          scene.text('"You can shave this off or grow it out a little. Some of our viewers like girls having some hair down there, others like it smooth."');
        } else {
          if (((s as any).pcs_pubes ?? 0) <= 25) {
            scene.text('"Cute bush. They\'re popular with some of our viewers, just keep it neat and clean. We don\'t want a jungle on camera."');
          } else {
            scene.text('He shakes his head while looking at your mound of pubic hair. "You\'re going to have to trim this down or shave it off. We can\'t have that covering up the goods on camera. Viewers want to see your pussy, not a jungle of untrimmed hair."');
          }
        }
      }
    }
    if (qspFunc(s, 'pcs_has_attr', 'body_ass_bubble')) {
      scene.text('"Turn around," he orders and you get on all fours and show him your bubble butt. "Nice," he says while squeezing it in his hand and taking some pictures. "I highly recommend doing anal if you have an ass like this."');
      if (((s as any).tits ?? 0) >= 4  &&  ((s as any).age ?? 0) < 20) {
        scene.text('"A teen with big tits and a nice bubble butt. You really are the perfect little porn star in the making," he says with a grin.');
      } else {
        if (((s as any).tits ?? 0) >= 4) {
          scene.text('"Big tits and a bubble butt? You really are the complete package," he says with a grin.');
        }
      }
    }
    scene.text('"Okay, get on your knees for me," he orders.');
    if (((s as any).tits ?? 0) >= 4) {
      scene.actions([
        { label: 'Kneel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'titjob', (-2), 'exhibitionism');
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/sex/titfuck.mp4');
    scene.text('He takes a seat on the sofa and you kneel in front of him as he pulls out his sizeable cock. You admire it for a few seconds before wrapping your large breasts around it and giving him a titfuck as you suck on the tip.');
    scene.text('He smiles down at you as he takes more pictures. "You know how to appeal to an audience, girl. Now suck it."');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting4.jpg');
    scene.text('You take his shaft into your mouth and start sucking it as he takes more pictures.');
    scene.text('"That\'s it. Take it deeper," he says as you look up at him. "And play with your tits as well. Show off the goods."');
    scene.text('You squeeze your breasts together as you take his cock deeper and keep sucking.');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-2), 'deepthroat', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting5.jpg');
    // TODO-QSP: dynamic text: You continue taking his dick as deep into your throat as you can while trying to...
    scene.text('You continue taking his dick as deep into your throat as you can while trying to look as sexy as possible. Meanwhile, he fondles one of your breasts with his free hand. "These tits are something else!" \'+iif(age < 20, \'He pinches your nipple, causing you to moan onto his cock. "And on a cute little teen no less!"\', \'He pinches your nipple, causing you to moan onto his cock.\')+\'');
    scene.text('After a few minutes, he pulls his dick out of your mouth and you quickly jerk him off, a thick load of cum soon covering your face. He takes a few more pictures of you before returning to his desk and offering you some wipes. You quickly clean yourself, get dressed and sit down.');
    scene.text('"You can call me Dimitri. You\'re going to need a stage name."');
    scene.actions([
      { label: 'Choose your name', handler: (st: GameState) => {
    (s as any).firstkasting = 1;
    qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
    if (((s as any).pfname ?? 0) === '') {
    }
    scene.text('"There we go, you\'re now registered. We shoot about four films a day, so you can choose what you to be in. Anal or gangbang, it\'s your choice, just remember to take care of your health. If you get sick or something, just cancel the shoot. You can do this up to the day of the shooting."');
    scene.text('A stern look then appears on his face. "Before shooting starts, you have to pass a mandatory medical examination. If we find any sign of a sexually transmitted disease, you\'re out, no exceptions. Understood?"');
    scene.text('You nod and he smiles. "Excellent. Come see me when you want a contract. And welcome to the world of pornography."');
    scene.actions([
      { label: 'Continue', goto: ['pornstudio', ''] },
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
      scene.actions([
        { label: 'Kneel', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting3.jpg');
    scene.text('You get up from the sofa and kneel in front of him as he pulls out his sizeable cock. You admire it for a few seconds before slowly sucking on the tip as he takes more pictures.');
    scene.text('"Good girl. Now suck it."');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-2), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting4.jpg');
    scene.text('You take his shaft into your mouth and start sucking it as he takes more pictures.');
    scene.text('"That\'s it. Take it deeper," he says as you look up at him.');
    scene.actions([
      { label: 'Finish him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'bj', (-2), 'deepthroat', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/city/redlight/studio_porn/casting/casting5.jpg');
    scene.text('You take his dick deep into your throat while trying to look as sexy as possible as he reaches down and pinches your nipple, causing you to moan onto his cock.');
    scene.text('After a few minutes, he pulls his dick out of your mouth and you quickly jerk him off, a thick load of cum soon covering your face. He takes a few more pictures of you before returning to his desk and offering you some wipes. You quickly clean yourself, get dressed and sit down.');
    scene.text('"You can call me Dimitri. You\'re going to need a stage name."');
    scene.actions([
      { label: 'Choose your name', handler: (st: GameState) => {
    (s as any).firstkasting = 1;
    qspCall(s, 'jobs', 'set_employed', 'city_pornstudio_actress');
    if (((s as any).pfname ?? 0) === '') {
    }
    scene.text('"There we go, you\'re now registered. We shoot about four films a day, so you can choose what you to be in. Anal or gangbang, it\'s your choice, just remember to take care of your health. If you get sick or something, just cancel the shoot. You can do this up to the day of the shooting."');
    scene.text('A stern look then appears on his face. "Before shooting starts, you have to pass a mandatory medical examination. If we find any sign of a sexually transmitted disease, you\'re out, no exceptions. Understood?"');
    scene.text('You nod and he smiles. "Excellent. Come see me when you want a contract. And welcome to the world of pornography."');
    scene.actions([
      { label: 'Continue', goto: ['pornstudio', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Make excuses and leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enterMedical(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'clock_in', 'city_pornstudio_actress');
  scene.img('images/locations/city/redlight/studio_porn/exam.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You enter the office where the doctor is waiting. He quickly snaps on a pair of rubber gloves and tells you to undress.');
  scene.text('You remove your clothes and sit on the gynecological chair before the doctor starts the check up. After a thorough inspection, he takes a blood sample.');
  scene.text('"It will be about half an hour before the tests are finished. They will tell us if you have caught something."');
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 11) + 25);
    qspCall(s, 'stat', '');
    scene.text('…');
    scene.text('…');
    if (((s as any).Venera ?? 0) > 0) {
      (s as any).pfilmNO = 1;
      (s as any).pfilmNoVenera = 1;
      qspCall(s, 'jobs', 'suspend_job', 'city_pornstudio_actress');
      ((s as any).job_last_miss_cost ?? {})['city_pornstudio_actress'] = 0;
      scene.text('"Your analysis shows you have an STD," the doctor tells you as he calls Dimitri to the office.');
      scene.text('Once he arrives, Dimitri looks at the test results. "Sorry, but as long as you have an STD, you can\'t make films."');
      scene.actions([
        { label: 'Leave', goto: ['pornstudio', ''] },
      ]);
    } else {
      scene.text('"Very good, you\'re clean. You can go to the dressing room."');
      scene.actions([
        { label: 'Go to the dressing room', handler: (st: GameState) => {
    (s as any).pf = qspUntranslated(s, "ARGS[1]", { location: "pornstudio" });
    qspCall(s, 'pornfilm', 'pornactor');
    qspCall(s, 'pornfilm', 'pornactress');
    scene.img('images/locations/city/redlight/studio_porn/makeup.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 20);
    qspCall(s, 'din_van', 'showerdin');
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = 4;
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8);
    (s as any).pcs_breath = 1;
    scene.text('An older woman is waiting for you in the dressing room.');
    scene.text('You take a thorough shower before getting an enema. You then get your hair and make-up done.');
    if (((s as any).pcs_pubes ?? 0) > 2  &&  ((s as any).pcs_pubes ?? 0) < 11) {
      (s as any).pcs_pubes = 0;
      scene.text('Your stubble is shaved off and you\'re left with a perfectly smooth pussy.');
    } else {
      if (((s as any).pcs_pubes ?? 0) >= 26) {
        (s as any).pcs_pubes = 16;
        scene.text('Your bush is trimmed down into a neat patch of hair atop your pussy.');
      }
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the set', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'clock', 'city_pornstudio_actress');
  }, goto: ['pornfilm', '<<pf>>'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterPostvideo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 21) + 20);
  (s as any).pf = qspUntranslated(s, "val(func('jobs', 'get_booking_data_for_day', 'city_pornstudio_actress', daystart))", { location: "pornstudio" });
  ((s as any).job_clocked_in ?? {})['city_pornstudio_actress'] = 0;
  (s as any).temp_pv_slot = 0;
  // TODO-QSP: :pv_clear_slot_loop
  if (((s as any).temp_pv_slot ?? 0) < 4) {
    if (((s as any).job_booking ?? 0)['city_pornstudio_actress, ' + String(((s as any).daystart ?? 0)) + ', ' + String(((s as any).temp_pv_slot ?? 0))] !== '') {
      qspCall(s, 'jobs', 'cancel_booking', 'city_pornstudio_actress', ((s as any).daystart ?? 0), ((s as any).temp_pv_slot ?? 0));
      // TODO-QSP: jump 'pv_clear_done'
    }
    (s as any).temp_pv_slot = ((s as any).temp_pv_slot ?? 0) + (1);
    // TODO-QSP: jump 'pv_clear_slot_loop'
  }
  // TODO-QSP: :pv_clear_done
  if (((s as any).film ?? 0) < 5) {
    (s as any).fmulti = 25;
  } else {
    if (((s as any).film ?? 0) < 10) {
      (s as any).fmulti = 30;
    } else {
      if (((s as any).film ?? 0) < 15) {
        (s as any).fmulti = 35;
      } else {
        if (((s as any).film ?? 0) < 25) {
          (s as any).fmulti = 40;
        } else {
          if (((s as any).film ?? 0) < 50) {
            (s as any).fmulti = 45;
          } else {
            if (((s as any).film ?? 0) >= 50) {
              (s as any).fmulti = 50;
            }
          }
        }
      }
    }
  }
  (s as any).film = ((s as any).film ?? 0) + (1);
  if (((s as any).film ?? 0) === 1) {
    // TODO-QSP: $porntitle[film] = 'Girls Jerk Guys #36 - <<$pfname>>'
    if (((s as any).tits ?? 0) >= 4) {
      // TODO-QSP: $pornfilmstory[film] = '<<$pfname>>''s debut into the world of porn. Watch as she gives silver fox E...
    } else {
      // TODO-QSP: $pornfilmstory[film] = '<<$pfname>>''s debut into the world of porn. Watch as she jerks silver fox E...
    }
  } else {
    if (((s as any).pstory ?? 0) === ''  &&  ((s as any).cheatVars ?? 0)?.['rename_porn'] === 1) {
      // TODO-QSP: $pornfilmstory[film] = input('You can enter the story for the film. This action can only be done onc...
    } else {
      // TODO-QSP: $pornfilmstory[film] = $pstory
    }
    if (((s as any).cheatVars ?? 0)?.['rename_porn'] === 1) {
      // TODO-QSP: $porntitle[film] = input("Enter the name of the film. <i>This action can only be done once, but you ...
    }
  }
  if ((!((s as any).pfilmNOPAY ?? 0))) {
    (s as any).pfcash = ((s as any).pcash ?? 0) * ((s as any).fmulti ?? 0);
    qspCall(s, 'jobs', 'bonus_pay', 'city_pornstudio_actress', ((s as any).pfcash ?? 0));
    (s as any).pfcash = qspFunc(s, 'jobs', 'paycheck', 'city_pornstudio_actress', 'cash');
    // TODO-QSP: dynamic text: Dimitri counts ' + $func('money', 'string_profit', pfcash) + ' out for your film...
    scene.text('Dimitri counts \' + $func(\'money\', \'string_profit\', pfcash) + \' out for your film and wishes you good luck.');
  } else {
    (s as any).pfilmNOPAY = 0;
    (s as any).pfcash = 0;
    scene.text('You have fulfilled your obligation and made the film for free.');
    ((s as any).job_worked_count ?? {})['city_pornstudio_actress'] = 0;
  }
  ((s as any).pornfilmYear ?? {})[String((s as any).film ?? 0)] = ((s as any).year ?? 0);
  ((s as any).pornfilmMonth ?? {})[String((s as any).film ?? 0)] = ((s as any).month ?? 0);
  ((s as any).pornfilmDay ?? {})[String((s as any).film ?? 0)] = ((s as any).day ?? 0);
  ((s as any).porndaystart ?? {})[String((s as any).film ?? 0)] = ((s as any).daystart ?? 0);
  ((s as any).pornfilmType ?? {})[String((s as any).film ?? 0)] = ((s as any).pf ?? 0);
  ((s as any).pornfilmCash ?? {})[String((s as any).film ?? 0)] = ((s as any).pfcash ?? 0);
  ((s as any).pornfilmActAge ?? {})[String((s as any).film ?? 0)] = ((s as any).age ?? 0);
  ((s as any).pornfilmAppAge ?? {})[String((s as any).film ?? 0)] = ((s as any).vidage ?? 0);
  ((s as any).pornfilmpregchem ?? {})[String((s as any).film ?? 0)] = ((s as any).pregChem ?? 0);
  ((s as any).pornfilmacting ?? {})[String((s as any).film ?? 0)] = ((s as any).cumulativeactbonus ?? 0) + ((s as any).orgasmbonus ?? 0) + ((s as any).pcs_intel ?? 0) / 10;
  if (((s as any).pornfilmacting ?? 0)?.[String((s as any).film ?? 0)] >= 90) {
    (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (3);
  } else {
    if (((s as any).pornfilmacting ?? 0)?.[String((s as any).film ?? 0)] >= 75) {
      (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (2);
    } else {
      if (((s as any).pornfilmacting ?? 0)?.[String((s as any).film ?? 0)] >= 60) {
        (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (1);
      }
    }
  }
  if (((s as any).pcs_hotcat ?? 0) >= 9) {
    (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (3);
  } else {
    if (((s as any).pcs_hotcat ?? 0) >= 7) {
      (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (2);
    } else {
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        (s as any).porn_fame = ((s as any).porn_fame ?? 0) + (1);
      }
    }
  }
  ((s as any).pornfilmvnesh ?? {})[String((s as any).film ?? 0)] = ((s as any).pcs_hotcat ?? 0);
  (s as any).cumulativeactbonus = ((s as any).cumulativeactbonus ?? 0) + (((s as any).actbonus ?? 0));
  if (((s as any).pfType ?? 0) !== 0) {
    (s as any).unprotfilm = (-1);
    if (((s as any).succubusflag ?? 0) === 1) {
      if (((s as any).pfcash ?? 0) > 0) {
      }
      // TODO-QSP: dynamic text: <<$tmp>> you think to yourself as you smirk in satisfaction.
      scene.text(`${((s as any).tmp ?? 0)} you think to yourself as you smirk in satisfaction.`);
    } else {
      if (((s as any).knowpreg ?? 0) === 0  &&  ((s as any).thinkpreg ?? 0) === 0  &&  ((s as any).pillcon2 ?? 0) < 1000) {
        ((s as any).pornDanger ?? {})[String((s as any).film ?? 0)] = 1;
        if ((!((s as any).ppreg ?? 0))) {
          if (((s as any).pfcash ?? 0) > 0) {
          }
          // TODO-QSP: dynamic text: With a growing sense of horror, you realize that you aren't on the shot and have...
          scene.text(`With a growing sense of horror, you realize that you aren't on the shot and have no idea when you last took a birth control pill. ${((s as any).tmp ?? 0)}`);
        } else {
          // TODO-QSP: !{If she has birth control and deliberately isn''t using it, obviously she wants to get pregnant or ...
          if (((s as any).pfcash ?? 0) > 0) {
          }
          scene.text('From the moment you stepped onto the set, you kept thinking about how you were completely unprotected during this shoot. You aren\'t sure if you\'re afraid of the consequences or excited by them.');
          (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        }
      }
    }
  }
  if (((s as any).pfactor ?? 0) === 50) {
    // TODO-QSP: $pornfilmActor[film] = 'Fifty fans of'
  } else {
    // TODO-QSP: $pornfilmActor[film] = ''
    (s as any).pact = ((s as any).pfactor ?? 0);
    // TODO-QSP: :pornactortext
    if (((s as any).pact ?? 0) > 1) {
      // TODO-QSP: $pornfilmActor[film] += $pactor[pact]+', '
    } else {
      // TODO-QSP: $pornfilmActor[film] += $pactor[pact]
    }
    (s as any).pact = ((s as any).pact ?? 0) - (1);
    if (((s as any).pact ?? 0) > 0) {
      // TODO-QSP: jump 'pornactortext'
    }
  }
  if (((s as any).film ?? 0) < 10) {
    (s as any).filmkoef = 10;
  } else {
    if (((s as any).film ?? 0) < 25) {
      (s as any).filmkoef = 5;
    } else {
      (s as any).filmkoef = 0;
    }
  }
  (s as any).pfcash = 0;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/studio_porn/pierre_1.jpg');
  scene.text('You\'ve come to the studio, looking for someone, anything that you think can help you.');
  scene.text('You approach a man, who introduces himself as Dimitri.');
  scene.actions([
    { label: 'State the purpose of your visit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    scene.img('images/locations/city/redlight/studio_porn/pierre_2.jpg');
    scene.text('Dimitri smiles. "New actresses are always welcome, but if they\'re terrible, the studio won\'t take them. The auditions are made public, so remember that if you ever consider it."');
    scene.text('"I\'ll tell you everything else under one condition - you have to undress."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/casting_3.jpg');
    scene.text('You strip out of your clothes. Once you\'re nude, Dimitri smiles and starts his tour.');
    scene.text('"We start with the casting auditions. As I said, if you\'re terrible, then you have no hope. This can be overlooked if you have an attractive appearance, however."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/model_0.jpg');
    scene.text('"Then a girl is chosen for the lead role. Only the most attractive of girls are chosen."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/film_0.jpg');
    scene.text('"Then she shoots the scenes, an interesting and exciting process that can take hours. The films we shoot…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/dvd-disx.jpg');
    scene.text('He pulls a DVD off the top of a nearby stack. "Are how we make money."');
    scene.actions([
      { label: 'How and where is it all sold?', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/pierre_2.jpg');
    scene.text('"We mostly sell it digitally on our premium websites, but we have guys at the sauna in the residential area and in the sex shop for those who want to buy physical copies.');
    scene.text('We\'re thinking of moving in on the university as well, and not just to sell our films. We want to shoot on campus. There\'s a huge market for female college students and we want a slice."');
    scene.actions([
      { label: 'Is that legal?', handler: (st: GameState) => {
    scene.img('images/locations/city/redlight/studio_porn/ment_0.jpg');
    scene.text('"It doesn\'t matter since we bribe the cops. Maybe in the future you\'ll be able to help us with that? In the meantime, I\'ve told you everything you need to know."');
    scene.actions([
      { label: 'I understand', handler: (st: GameState) => {
    (s as any).pornstudio = 1;
    scene.img('images/locations/city/redlight/studio_porn/pierre_2.jpg');
    scene.text('"Good girl. Now leave and stop wasting my time."');
  }, goto: ['pornstudio', ''] },
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
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).carrar = Math.floor(Math.random() * 61) + 40;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/redlight/studio_porn/casting_${Math.floor(Math.random() * 6) + 1}.jpg`);
  scene.text('You spend eight hours posing in a variety of sexy underwear for the casting director.');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  if (((s as any).pcs_apprnc ?? 0) < ((s as any).carrar ?? 0)) {
    scene.text('"You don\'t have what it takes. Sorry."');
  } else {
    if (((s as any).pcs_apprnc ?? 0) >= ((s as any).carrar ?? 0)) {
      (s as any).actr = 1;
      scene.text('You get the role.');
    }
  }
  scene.actions([
    { label: 'Finish', goto: ['pornstudio', ''] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).actr = 0;
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['BDSM', ''] }]);
  scene.build();
}

function enterPregreact(s: GameState, scene: SceneBuilder): void {
  scene.text('"Wow. I\'m surprised you still want to do the shoot considering how far along you are. The good news is, we\'ve been looking into appealing to people with different fetishes, so this is the perfect opportunity to start marketing to pregnancy fetishists. However, this is also going to change the shoots you can do."');
  scene.text('"You see, this is more of a niche thing and not something we can really use for wide appeal. You can still work, but only on specific pregnancy shoots, so you might not get the same amount of work you got before. Don\'t worry; if we can find a way to make money off of you, we definitely will," Dimitri says with a smile.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).pregtalkpornstudio = 1;
  }, goto: ['pornstudio', 'manager'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pa':
      enterPa(s, scene);
      break;
    case 'delivery':
      enterDelivery(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'manager':
      enterManager(s, scene);
      break;
    case 'options':
      enterOptions(s, scene);
      break;
    case 'first':
      enterFirst(s, scene);
      break;
    case 'yes':
      enterYes(s, scene);
      break;
    case 'medical':
      enterMedical(s, scene);
      break;
    case 'postvideo':
      enterPostvideo(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case 'pregreact':
      enterPregreact(s, scene);
      break;
    default:
      enterPa(s, scene);
      break;
  }
}

export const pornstudio: LocationDef = {
  name: 'pornstudio',
  title: 'You enter the studio and are greeted by a busy scene of acto',
  region: 'other',
  locationType: 'bathroom',
  description: ['Inside the small office is a young man sitting at a computer, tapping away at the keyboard.'],
  enter: enter,
};
