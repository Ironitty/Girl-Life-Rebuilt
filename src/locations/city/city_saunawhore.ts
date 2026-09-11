import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).moodTypeRand ?? 0) <= 0) {
  } else {
    if (((s as any).moodTypeRand ?? 0) >= 1  &&  ((s as any).moodTypeRand ?? 0) <= 3) {
    } else {
      if (((s as any).moodTypeRand ?? 0) >= 4) {
      }
    }
  }
  scene.build();
}

function enterSaunawork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_saunawhore', 'saunawork');
  (s as any).saunaYouRoom = 1;
  if ((!((s as any).paymamka ?? 0))) {
    (s as any).paymamka = 300;
  }
  if (((s as any).workDolg ?? 0) > 0) {
    (s as any).paymamka = 300;
  }
  if (((s as any).workDolg ?? 0) <= 0) {
    (s as any).paymamka = 500;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/residential/sauna/sauna1.jpg');
  scene.text('');
  // TODO-QSP: dynamic text: The sauna is open to "customers" between '+func('time', 'get_time_string', 8, 0)...
  scene.text('The sauna is open to "customers" between \'+func(\'time\', \'get_time_string\', 8, 0)+\' and \'+func(\'time\', \'get_time_string\', 0, 0)+\'.');
  scene.text('All the walls are covered in <a href="exec:gt \'mirror\', \'start\'">mirrors</a>.');
  if (((s as any).saunaWorkNow ?? 0) === 1) {
    (s as any).saunaWorkNow = 0;
    qspCall(s, 'money', 'pay', ((s as any).paymamka ?? 0));
    // TODO-QSP: dynamic text: A nurse enters the room and takes ' + $func('money', 'string_price', paymamka) +...
    scene.text('A nurse enters the room and takes \' + $func(\'money\', \'string_price\', paymamka) + \' per customer from you.');
  }
  if (((s as any).workDolg ?? 0) > 0) {
    qspCall(s, 'money', 'debt_pay', 'workDolg');
    if (((s as any).workDolg ?? 0) <= 0) {
      (s as any).abductionReturned = 1;
    }
    // TODO-QSP: 'Your debt is ' + $func('money', 'string_debt', workDolg)
  }
  qspCall(s, 'stat', '');
  if (((s as any).workDolg ?? 0) <= 0) {
    // TODO-QSP: act 'Leave': gt 'city_sauna'
  }
  if (((s as any).workDolg ?? 0) > 0  &&  (((s as any).pcs_mood ?? 0) <= 10  ||  ((s as any).drugVars ?? 0)?.['heroin_need'] > 0)) {
    qspCall(s, 'money', 'debt_add', 'workDolg', 420);
    qspCall(s, 'stat', '');
    scene.text('You are beckoned by the nurse. You walk up to her and she demands to see your arm. You present your arm and she takes out a syringe filled with drugs. "Sit still, I\'ll give you a shot now and it will make you feel like normal again."');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'heroin');
  }, goto: ['city_saunawhore', 'saunawork'] },
    ]);
  }
  if (((s as any).workDolg ?? 0) <= 0  &&  ((s as any).pcs_mood ?? 0) <= 50  &&  ((s as any).saunaWhore ?? 0) > 0  &&  qspFunc(s, 'money', 'can_afford', 420) === 1) {
    scene.actions([
      { label: 'Ask for some drugs', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Okay, come here."');
    scene.text('You walk up to her and she asks to see your arm. You present your arm and she takes out a syringe filled with drugs. "Sit still, I\'ll give you a shot now and it will make you feel like normal again."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'heroin');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'money', 'pay', 420);
  }, goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).cumcondslip ?? 0) > 0  &&  ((s as any).cumcondslip_aware ?? 0) > 0) {
    scene.actions([
      { label: 'Ask to see a doctor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.text('You explain how you feel nauseous and have pain in your pubic area. The nurse checks you over and eventually comes to a conclusion.');
    scene.text('"I think it might be toxic shock. We\'ll have to get you sorted out. Wait here I\'ll call the doctor."');
    scene.actions([
      { label: 'Sometime later', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'cum_cleanup', 'cleanloc', 17);
    (s as any).cumcondslip = 0;
    qspCall(s, 'stat', '');
    scene.text('When he arrives, the doctor examines you and establishes that you\'re suffering from toxic shock from a spent condom in your body.');
    scene.text('"I removed it as soon as I found it. If you were feeling sick, it should slowly subside."');
    scene.text('You reflexively thank the doctor, even though he\'s visiting you in this place.');
    scene.actions([
      { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).GerpesNapr ?? 0) > 0  &&  ((s as any).GerpesUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'See nurse for herpes shot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'debt_add', 'workDolg', 750);
    (s as any).GerpesUkolDay = ((s as any).daystart ?? 0);
    (s as any).GerpesNapr = ((s as any).GerpesNapr ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('You see the nurse and she gives you a painful injection in your ass.');
    if ((!((s as any).GerpesNapr ?? 0))) {
      (s as any).Gerpes = (-10);
      scene.text('You have completed the treatment.');
    }
    scene.actions([
      { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).TriperNapr ?? 0) > 0  &&  ((s as any).TriperUkolDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'See nurse for gonorrhoea shot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'debt_add', 'workDolg', 750);
    (s as any).TriperUkolDay = ((s as any).daystart ?? 0);
    (s as any).TriperNapr = ((s as any).TriperNapr ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('You see the nurse and she gives you a painful injection in your ass.');
    if ((!((s as any).TriperNapr ?? 0))) {
      (s as any).TriperOral = 0;
      (s as any).TriperOralSigns = 0;
      (s as any).Triper = 0;
      (s as any).Venera = ((s as any).Venera ?? 0) - (1);
      (s as any).TriperOnce = 0;
      scene.text('You have completed the treatment.');
    }
    scene.actions([
      { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).Sifilis ?? 0) > 0) {
    scene.actions([
      { label: 'See nurse for syphilis shot', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'money', 'debt_add', 'workDolg', 1000);
    (s as any).SifNapr = 0;
    (s as any).SifacOnce = 0;
    (s as any).Sifilis = 0;
    (s as any).Venera = ((s as any).Venera ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.text('You see the nurse and she gives you a painful injection in your ass.');
    scene.text('"That\'s it, you might still feel a bit off but the infection is now cured".');
    scene.actions([
      { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 8) {
    scene.actions([
      { label: 'Sit on the couch', handler: (st: GameState) => {
    if (((s as any).pcs_makeup ?? 0) <= 1  ||  ((s as any).pcs_hairbsh ?? 0) !== 1  ||  ((s as any).pcs_sweat ?? 0) >= 26  ||  ((s as any).pcs_leghair ?? 0) > 3  ||  ((s as any).pcs_pubes ?? 0) > 3) {
      scene.text('The brothel madam walks over to you. "Our customers expect you to be clean, shaven, made-up and with your hair looking nice. Go and sort yourself out, now!"');
      scene.actions([
        { label: 'Leave', goto: ['city_saunawhore', 'saunawork'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/sauna/saunawork.jpg');
      scene.text('You spend an hour sitting on the couch waiting for customers.');
      (s as any).saunaWorkKlient = 0;
      if (((s as any).hour ?? 0) >= 21) {
        if ((Math.floor(Math.random() * 101) + 0) >= 10) {
          (s as any).saunaWorkKlient = 1;
        }
      } else {
        if (((s as any).hour ?? 0) >= 16) {
          if ((Math.floor(Math.random() * 101) + 0) >= 20) {
            (s as any).saunaWorkKlient = 1;
          }
        } else {
          if (((s as any).hour ?? 0) >= 12) {
            if ((Math.floor(Math.random() * 101) + 0) >= 40) {
              (s as any).saunaWorkKlient = 1;
            }
          } else {
            if (((s as any).hour ?? 0) >= 8) {
              if ((Math.floor(Math.random() * 101) + 0) >= 80) {
                (s as any).saunaWorkKlient = 1;
              }
            } else {
              if ((Math.floor(Math.random() * 101) + 0) >= 40) {
                (s as any).saunaWorkKlient = 1;
              }
            }
          }
        }
      }
      if ((!((s as any).saunaWorkKlient ?? 0))) {
        scene.text('The client chooses another girl and she leads him to one of the back rooms.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'saunawork'] },
        ]);
      } else {
        qspCall(s, 'stat', '');
        scene.img('images/locations/city/residential/sauna/saunawhore.jpg');
        scene.text('A client has arrived at the sauna, and the girls line up so that the customer can choose one of them.');
        if ((Math.floor(Math.random() * 121) + 0) < ((s as any).pcs_apprnc ?? 0)) {
          scene.text('The client jabs a finger at you. "This one."');
          scene.actions([
            { label: 'Go with the client', handler: (st: GameState) => {
    (s as any).saunaWorkKlient = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).saunaWhore = ((s as any).saunaWhore ?? 0) + (1);
  }, goto: ['city_saunawhore', 'clientGate'] },
          ]);
        } else {
          scene.text('The client examines you closely, but turns away to chose another girl.');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'saunawork'] },
          ]);
        }
      }
    }
  } },
    ]);
  }
  if (((s as any).clenerSauna ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Clean toilets', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).clenerSauna = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'exp_gain', 'cleaning', Math.floor(Math.random() * 3) + 1);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/clener2.jpg');
    if (((s as any).workDolg ?? 0) > 0) {
      // TODO-QSP: dynamic text: You scrub the sauna toilets for an hour, reducing your debt by ' + $func('money'...
      scene.text('You scrub the sauna toilets for an hour, reducing your debt by \' + $func(\'money\', \'string_debt_reduction\', 100) + \'.');
      qspCall(s, 'money', 'debt_pay', 'workDolg', 100, 'none');
    } else {
      // TODO-QSP: dynamic text: You scrub the sauna toilets for an hour. You are paid ' + $func('money', 'string...
      scene.text('You scrub the sauna toilets for an hour. You are paid \' + $func(\'money\', \'string_profit\', 100) + \' for your work.');
      qspCall(s, 'money', 'earn', 100);
    }
    scene.actions([
      { label: 'Leave', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).clenerSauna2 ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Scrub floors', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).clenerSauna2 = ((s as any).daystart ?? 0);
    qspCall(s, 'exp_gain', 'cleaning', Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/office/clener1.jpg');
    if (((s as any).workDolg ?? 0) > 0) {
      // TODO-QSP: dynamic text: You spend an hour mopping and scrubbing all the floors, reducing your debt by ' ...
      scene.text('You spend an hour mopping and scrubbing all the floors, reducing your debt by \' + $func(\'money\', \'string_debt_reduction\', 100) + \'.');
      qspCall(s, 'money', 'debt_pay', 'workDolg', 100, 'none');
    } else {
      // TODO-QSP: dynamic text: You spend an hour mopping and scrubbing all the floors. You are paid ' + $func('...
      scene.text('You spend an hour mopping and scrubbing all the floors. You are paid \' + $func(\'money\', \'string_profit\', 100) + \' for your work.');
      qspCall(s, 'money', 'earn', 100);
    }
    qspCall(s, 'sweat', 'add', 30);
    scene.actions([
      { label: 'Leave', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_QW ?? 0)?.['A113'] === 1  &&  ((s as any).workDolg ?? 0) <= 0  &&  ((s as any).belgangPay ?? 0) <= 0) {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You see a familiar face as you enter the sauna. Vadim Bely stands with his brother. "Good news little whore, you\'ve finally paid off your debt. You\'re free to do whatever you want now."');
    scene.text('You look at him with hate-filled eyes. "Do you know what you put me through here? You\'re the most despicable man I\'ve ever met in my life!"');
    scene.text('Vadim laughs loudly. "Choose your words carefully girl. I\'m still in control of your future and maybe I think you haven\'t paid off your debt yet?"');
    scene.text('Not wanting to escalate the situation, you look down at the floor in silence.');
    scene.text('"Good girl. Now that you\'re free, how about you come and party with us to celebrate your freedom?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('"No. I\'m sorry, but I just want to go home… Maybe some other time."');
    scene.text('Vadim looks at you with a serious stare. "You\'re lucky I\'m in a good mood today. I\'ll let it slide this time."');
    scene.text('You quickly gather your stuff before he has a change of heart and run outside the sauna.');
    ((s as any).npc_QW ?? {})['A113'] = 2;
    scene.actions([
      { label: 'Leave', goto: ['city_sauna', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to your room', goto: ['city_sauna', 'saunaroom'] },
    { label: 'Use the staff bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_saunawhore', 'bathroom'] },
    { label: 'See nurse for STD check up', handler: (st: GameState) => {
    if (((s as any).Gerpes ?? 0)+((s as any).Sifilis ?? 0)+((s as any).Triper ?? 0) > (Math.floor(Math.random() * 3) + 2)  ||  ((s as any).Kandidoz ?? 0) > 10) {
      qspCall(s, 'stat', '');
      scene.text('The nurse has you strip and put your legs in stirrups then roughly examines you.');
      if (((s as any).GerpesOnce ?? 0) === 1) {
        scene.text('You have genital herpes. You can\'t afford the cure and I can\'t provide it.');
        if (((s as any).Gerpes ?? 0) >= 3) {
          if ((!((s as any).GerpesNapr ?? 0))) {
            (s as any).GerpesNapr = 3;
          } else {
            if (((s as any).GerpesNapr ?? 0) > 0) {
              scene.text('You need to finish your course of herpes injections.');
            }
          }
        } else {
          scene.text('Your herpes are in an inactive stage, take vitamins and it won\'t show itself.');
        }
      }
      if (((s as any).SifacOnce ?? 0) === 1) {
        (s as any).SifNapr = 1;
        scene.text('You have syphilis which if untreated can be fatal. However, thanks to modern medicine can now be cured with a single shot.');
        // TODO-QSP: dynamic text: The injection will cost ' + $func('money', 'string_debt_addition', 1000) + ', wh...
        scene.text('The injection will cost \' + $func(\'money\', \'string_debt_addition\', 1000) + \', which will be added to your debt or put you in debt if not already.');
      }
      if (((s as any).TriperOnce ?? 0) === 1) {
        scene.text('We found gonorrhoea. In principle, this disease is curable.');
        if ((!((s as any).TriperNapr ?? 0))) {
          (s as any).TriperNapr = 5;
        } else {
          if (((s as any).TriperNapr ?? 0) > 0) {
            scene.text('You need to finish your course of gonorrhoea injections.');
          }
        }
      }
      if (((s as any).KandidozOnce ?? 0) === 1) {
        scene.text('You have a yeast infection. The cure for this disease is very expensive, but it\'s not that harmful and can easily be suppressed.');
        if ((!((s as any).KandidNapr ?? 0))) {
          (s as any).KandidNapr = 1;
          ((s as any).mc_inventory ?? {})['antibiotics'] = (((s as any).mc_inventory ?? {})['antibiotics'] ?? 0) + (5);
          scene.text('Here\'s some pills, the drug company rep gives these away so I won\'t add anything to your debt. When you have it in remission you must take vitamins to keep it that way.');
        }
        if (((s as any).Kandidoz ?? 0) < 30) {
          scene.text('Your yeast infection is currently in remission, take vitamins, and it will stay that way.');
        }
      }
      scene.actions([
        { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
      ]);
    } else {
      scene.text('The nurse has you strip and put your legs in stirrups then roughly examines you. I can\'t see anything wrong with you down there so whatever it is you got it\'s in remission so you\'re good to work.');
      scene.actions([
        { label: 'Return', goto: ['city_saunawhore', 'saunawork'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_saunawhore', 'bathroom');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/brothelshower.jpg');
  scene.text('');
  scene.text('You enter the staff bathroom, which is usually cleaned by the new girls who have just started working here, whether they want to or not.');
  // TODO-QSP: dynamic text: There is a <a href="exec:gt 'mirror', 'start'">mirror</a>, where you can ' + iif...
  scene.text('There is a <a href="exec:gt \'mirror\', \'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, a shower, toilet and a sink.');
  if (((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
    if (((s as any).workDolg ?? 0) > 0) {
      // TODO-QSP: dynamic text: You have a handful of cheap razors you can use, enough for <<mc_inventory['razor...
      scene.text(`You have a handful of cheap razors you can use, enough for ${((s as any).mc_inventory ?? 0)?.['razor']} shaves. <a href="exec:gs 'din_van', 'shave_options'">Shave Options</a>`);
    } else {
      // TODO-QSP: dynamic text: Your current pack of razors will last for <b><<mc_inventory['razor']>></b> more ...
      scene.text(`Your current pack of razors will last for <b>${((s as any).mc_inventory ?? 0)?.['razor']}</b> more shaves. <a href="exec:gs 'din_van', 'shave_options'">Shave Options</a>`);
    }
    qspCall(s, 'din_van', 'brit');
  } else {
    if (((s as any).workDolg ?? 0) > 0) {
      scene.text('You are out of disposable razors. You should go to your room and ask for more.');
    } else {
      scene.text('You are out of disposable razors. You should to go to the store and buy more.');
    }
  }
  qspCall(s, 'din_van', 'prvt_pee');
  qspCall(s, 'din_van', 'enema');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'basin');
  if (((s as any).mc_inventory ?? 0)?.['breast_pump'] > 0  &&  ((s as any).bp_unbox ?? 0) >= 1) {
    scene.actions([
      { label: 'Use breast pump', goto: ['lact_bp', 'bp_milking'] },
    ]);
  }
  scene.actions([
    { label: 'Return to the foyer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_saunawhore', 'saunawork'] },
    { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    qspCall(s, 'din_van', 'showerdin');
    scene.text('<center><h3>Staff Bathroom</h3></center>');
    scene.img('images/locations/shared/brothel/brothelshower.jpg');
    scene.text('');
    scene.text('You strip from your clothes and gather up your towel, washcloth and soap before heading to the shower. You thoroughly wash yourself so you\'re as clean as possible for potential customers.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((s as any).workDolg ?? 0) > 0) {
      if (((s as any).mc_inventory ?? 0)?.['razor'] <= 0) {
        ((s as any).mc_inventory ?? {})['razor'] = 5;
      }
      qspCall(s, 'din_van', 'brit');
    } else {
      if (((s as any).workDolg ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['razor'] > 0) {
        qspCall(s, 'din_van', 'brit');
      }
    }
    qspCall(s, 'din_van', 'dryOff');
  } },
  ]);
  scene.build();
}

function enterDebtPay(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'debt_pay', 'workDolg');
  scene.build();
}

function enterClientGate(s: GameState, scene: SceneBuilder): void {
  (s as any).moodTypeRand = (Math.floor(Math.random() * (3 - -3 + 1)) + (-3));
  (s as any).bodyTypeRand = 3;
  (s as any).heightTypeRand = 3;
  (s as any).customerAge = Math.floor(Math.random() * 76) + 15;
  qspCall(s, 'npcgeneratec', '', 0, 'client', ((s as any).customerAge ?? 0), Math.floor(Math.random() * 2) + 3, 1);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  (s as any).raceRand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).raceRand ?? 0) <= 7) {
    (s as any).dickChance = 30;
    (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + ((Math.floor(Math.random() * (8 - -2 + 1)) + (-2)));
    (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + ((Math.floor(Math.random() * (6 - -1 + 1)) + (-1)));
  } else {
    if (((s as any).raceRand ?? 0) <= 9) {
      (s as any).dickChance = 20;
      (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + ((Math.floor(Math.random() * (2 - -6 + 1)) + (-6)));
      (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + ((Math.floor(Math.random() * (1 - -4 + 1)) + (-4)));
    } else {
      (s as any).dickChance = 40;
      (s as any).bodyTypeRand = ((s as any).bodyTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
      (s as any).heightTypeRand = ((s as any).heightTypeRand ?? 0) + (Math.floor(Math.random() * 7) + 0);
    }
  }
  (s as any).dickRand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).dickRand ?? 0) <= ((s as any).dickChance ?? 0)) {
    (s as any).dick = Math.floor(Math.random() * 16) + 15;
  } else {
    if (((s as any).dickRand ?? 0) <= (((s as any).dickChance ?? 0) * 2)) {
      (s as any).dick = Math.floor(Math.random() * 11) + 10;
    } else {
      (s as any).dick = Math.floor(Math.random() * 5) + 8;
    }
  }
  if (((s as any).dick ?? 0) >= 26) {
    (s as any).cumVol = Math.floor(Math.random() * 2) + 4;
  } else {
    if (((s as any).dick ?? 0) >= 23) {
      (s as any).cumVol = Math.floor(Math.random() * 3) + 3;
    } else {
      if (((s as any).dick ?? 0) >= 20) {
        (s as any).cumVol = Math.floor(Math.random() * 4) + 2;
      } else {
        if (((s as any).dick ?? 0) >= 16) {
          (s as any).cumVol = Math.floor(Math.random() * 3) + 2;
        } else {
          if (((s as any).dick ?? 0) >= 12) {
            (s as any).cumVol = Math.floor(Math.random() * 4) + 1;
          } else {
            (s as any).cumVol = Math.floor(Math.random() * 4) + 0;
          }
        }
      }
    }
  }
  if (((s as any).cumVol ?? 0) <= 1) {
    (s as any).cumVolMl = 10;
  } else {
    if (((s as any).cumVol ?? 0) === 2) {
      (s as any).cumVolMl = 20;
    } else {
      if (((s as any).cumVol ?? 0) === 3) {
        (s as any).cumVolMl = 40;
      } else {
        if (((s as any).cumVol ?? 0) === 4) {
          (s as any).cumVolMl = 60;
        } else {
          if (((s as any).cumVol ?? 0) >= 5) {
            (s as any).cumVolMl = 100;
          }
        }
      }
    }
  }
  if (((s as any).bodyTypeRand ?? 0) <= 1) {
  } else {
    if (((s as any).bodyTypeRand ?? 0) >= 2  &&  ((s as any).bodyTypeRand ?? 0) <= 4) {
    } else {
      if (((s as any).bodyTypeRand ?? 0) >= 5  &&  ((s as any).bodyTypeRand ?? 0) <= 6) {
      } else {
        if (((s as any).bodyTypeRand ?? 0) >= 7) {
        }
      }
    }
  }
  if (((s as any).heightTypeRand ?? 0) <= 1) {
  } else {
    if (((s as any).heightTypeRand ?? 0) >= 2  &&  ((s as any).heightTypeRand ?? 0) <= 4) {
    } else {
      if (((s as any).heightTypeRand ?? 0) >= 5) {
      }
    }
  }
  if (((s as any).customerAge ?? 0) <= 18) {
  } else {
    if (((s as any).customerAge ?? 0) > 18  &&  ((s as any).customerAge ?? 0) <= 30) {
    } else {
      if (((s as any).customerAge ?? 0) > 30  &&  ((s as any).customerAge ?? 0) <= 45) {
      } else {
        if (((s as any).customerAge ?? 0) > 45  &&  ((s as any).customerAge ?? 0) <= 60) {
        } else {
          if (((s as any).customerAge ?? 0) > 60  &&  ((s as any).customerAge ?? 0) <= 80) {
          } else {
            if (((s as any).customerAge ?? 0) > 80) {
            }
          }
        }
      }
    }
  }
  if ((!(Math.floor(Math.random() * 20) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['city_saunawhore', 'bdsmclient'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/sauna/room.jpg');
  scene.text('You lead the client into your room, closing the door behind him. He sits down in the chair and stares at you with obvious lust.');
  // TODO-QSP: dynamic text: He is <<$ageType>> <<$raceType>> man, and he is <<$heightType>> and <<$bodyType>...
  scene.text(`He is ${((s as any).ageType ?? 0)} ${((s as any).raceType ?? 0)} man, and he is ${((s as any).heightType ?? 0)} and ${((s as any).bodyType ?? 0)}.`);
  if (((s as any).dick ?? 0) >= 16) {
    // TODO-QSP: dynamic text: From the bulge in his pants, you can tell he probably has a <<$dick_girth>> dick...
    scene.text(`From the bulge in his pants, you can tell he probably has a ${((s as any).dick_girth ?? 0)} dick.`);
  }
  // TODO-QSP: dynamic text: He seems to be in a <<$moodType>> mood.
  scene.text(`He seems to be in a ${((s as any).moodType ?? 0)} mood.`);
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
      }
    }
    (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (1);
    qspCall(s, 'arousal', 'foreplay', 3, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get straight to business', goto: ['city_saunawhore', 'strippedGate'] },
    ]);
  } else {
    if (((s as any).pcs_dancero ?? 0) >= 10) {
      // TODO-QSP: act 'Do a little striptease': gt 'city_saunawhore', 'striptease'
    }
    scene.actions([
      { label: 'Take off your clothes', goto: ['city_saunawhore', 'simplystrip'] },
    ]);
  }
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'dancero', Math.floor(Math.random() * 2) + 0);
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
  } else {
    if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    }
  }
  scene.img('images/locations/city/residential/sauna/sex/striptease\'+rand(1, 5)+\'.mp4');
  scene.text('Hoping to please the customer, you decide to give him a little show. You count a beat in your head and begin dancing, slowly stripping away your clothes, one piece at a time. It would probably be better if you had actual music, but the client smirks and seems to enjoy it nonetheless.');
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (1);
  qspCall(s, 'arousal', 'striptease', 5, 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'strippedGate'] },
  ]);
  scene.build();
}

function enterSimplystrip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'dancero', Math.floor(Math.random() * 2) + 0);
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  } else {
    if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
    }
  }
  scene.img('images/locations/city/residential/sauna/sex/simplystrip\'+rand(1, 2)+\'.mp4');
  scene.text('You remove your clothes and toss them aside, mentally preparing for the task ahead. The client looks vaguely irritated - perhaps he expected something a bit more provocative?');
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) - (1);
  qspCall(s, 'arousal', 'foreplay', 2, 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'strippedGate'] },
  ]);
  scene.build();
}

function enterStrippedGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/locations/city/residential/sauna/sex/nakedstand.jpg');
  scene.text('You are fully naked in front of the client, his eyes devouring every inch of your body.');
  if (((s as any).pcs_dancero ?? 0) >= 20) {
    // TODO-QSP: act 'Dance naked': gt 'city_saunawhore', 'nakeddance'
  }
  if (((s as any).stat ?? 0)?.['men_fucked'] >= 20) {
    // TODO-QSP: act 'Present your holes to him': gt 'city_saunawhore', 'holeshow'
  }
  scene.actions([
    { label: 'Kneel and open your mouth', goto: ['city_saunawhore', 'blowjob'] },
  ]);
  scene.build();
}

function enterNakeddance(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'dancero', Math.floor(Math.random() * 2) + 0);
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 3);
  } else {
    if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
  }
  scene.img('images/locations/city/residential/sauna/sex/nakeddance\'+rand(1, 4)+\'.mp4');
  scene.text('You walk towards the client, straddle his legs, and begin to dance. He leans back and you proceed to give him the best lapdance you can muster. You alternate between rubbing your breasts in his face and turning around to grind your ass on his crotch. Judging from the hardness in his pants, it seems that he is pleased with your efforts.');
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (1);
  qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'blowjob'] },
  ]);
  scene.build();
}

function enterHoleshow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 4) + 3);
  } else {
    if (((s as any).pcs_inhib ?? 0) >= 40  &&  ((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
  }
  scene.img('images/locations/city/residential/sauna/sex/holeshow\'+rand(1, 5)+\'.mp4');
  scene.text('You decide to tease him further. You lean in close to him and open your mouth, sticking your tongue out and sucking your fingers before you turn around, bend over and grab your ass with both hands.');
  scene.text('You pull your ass cheeks apart, giving him a great view of both your holes.');
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (1);
  qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'blowjob'] },
  ]);
  scene.build();
}

function enterBlowjob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).moodType ?? 0) === 'fairly normal') {
    scene.img('images/locations/city/residential/sauna/sex/blowjob\'+rand(1, 5)+\'.mp4');
    // TODO-QSP: dynamic text: You kneel in front of him and bite your lip, caressing his cock through his pant...
    scene.text(`You kneel in front of him and bite your lip, caressing his cock through his pants with your hands. He pulls out his ${((s as any).dick_girth ?? 0)} dick and brings it to your ${((s as any).pc_desc ?? 0)?.['lips']} lips.`);
    scene.text('You start kissing the tip, licking it all around and putting it a bit inside your mouth and sucking the head.');
    qspCall(s, 'arousal', 'bj', 5, 'prostitution');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck it', goto: ['city_saunawhore', 'blowjobGate'] },
    ]);
  } else {
    if (((s as any).moodType ?? 0) === 'good') {
      scene.img('images/locations/city/residential/sauna/sex/blowjob\'+rand(1, 5)+\'.mp4');
      scene.text('You kneel in front of him and bite your lip, caressing his cock through his pants with your hand.');
      scene.text('He then fondles your hair and face and takes you gently by your arm, pulling you up from the floor. He directs you to the bed, undresses and both of you lie down.');
      scene.actions([
        { label: 'Embrace him', goto: ['city_saunawhore', 'fuckGate'] },
      ]);
    } else {
      if (((s as any).moodType ?? 0) === 'bad') {
        scene.img('images/locations/city/residential/sauna/sex/slapface\'+rand(1, 1)+\'.mp4');
        scene.text('You kneel in front of him and bite your lip, caressing his cock through his pants with your hands.');
        scene.text('He comes close to you and suddenly slaps your face hard. You\'re caught by surprise and tears well up in your eyes. He seems very angry and even aroused by your misfortune.');
        scene.text('As you kneel in front of him in tears, he grabs you roughly by your arms, painfully twisting them behind your back, and slams you down on the bed.');
        qspCall(s, 'pain', '', 1, 'cheeks', 'slap');
        if (((s as any).stat ?? 0)?.['prostitution_count'] < 10) {
          (s as any).Mana = ((s as any).Mana ?? 0) - (50);
        } else {
          (s as any).Mana = ((s as any).Mana ?? 0) - (10);
        }
        qspCall(s, 'pain', '', 2, 'armL', 'twist');
        qspCall(s, 'pain', '', 2, 'armR', 'twist');
        scene.actions([
          { label: 'Brace yourself', goto: ['city_saunawhore', 'fuckRoughGate'] },
        ]);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterBlowjobGate(s: GameState, scene: SceneBuilder): void {
  scene.text('You begin to suck his cock in earnest, bobbing your head back and forth while running your tongue along the underside of his shaft.');
  // TODO-QSP: dynamic text: He is rock-hard now and you can see his <<$dick_girth>> <<dick>>cm member in all...
  scene.text(`He is rock-hard now and you can see his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm member in all its glory.`);
  scene.text('He seems to be content with your performance, but you think he wants you to go further.');
  qspCall(s, 'arousal', 'bj', 5, 'prostitution');
  qspCall(s, 'stat', '');
  if (((s as any).dick ?? 0) > ((s as any).pcs_throat ?? 0)) {
    scene.text('There\'s no way you\'ll be able to fit the entire thing in your mouth.');
    scene.actions([
      { label: 'Try to deepthroat him', goto: ['city_saunawhore', 'blowjobCaress'] },
    ]);
  } else {
    scene.actions([
      { label: 'Deepthroat him', goto: ['city_saunawhore', 'blowjobDeepthroat'] },
    ]);
  }
  scene.build();
}

function enterBlowjobCaress(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: You try to deepthroat him, but his <<$dick_girth>> cock is just too big for you ...
  scene.text(`You try to deepthroat him, but his ${((s as any).dick_girth ?? 0)} cock is just too big for you to handle, and you end up gagging yourself and coughing.`);
  qspCall(s, 'arousal', 'bj', 5, 'prostitution', 'deepthroat');
  scene.text('');
  (s as any).moodChange = (Math.floor(Math.random() * (0 - -2 + 1)) + (-2));
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (((s as any).moodChange ?? 0));
  if (((s as any).moodType ?? 0) === 'good') {
    scene.img('images/locations/city/residential/sauna/sex/blowjob\'+rand(1, 5)+\'.mp4');
    scene.text('He seems to enjoy your efforts anyway, and signals that he\'s ready to move on to the next stage.');
    scene.actions([
      { label: 'Continue', goto: ['city_saunawhore', 'fuckGate'] },
    ]);
  } else {
    if (((s as any).moodType ?? 0) === 'fairly normal') {
      scene.img('images/locations/city/residential/sauna/sex/blowjob\'+rand(1, 5)+\'.mp4');
      scene.text('He seem to have had enough as he takes your hand and directs you towards the bed.');
      scene.actions([
        { label: 'Continue', goto: ['city_saunawhore', 'fuckGate'] },
      ]);
    } else {
      if (((s as any).moodType ?? 0) === 'bad') {
        scene.img('images/locations/city/residential/sauna/sex/slapface\'+rand(1, 1)+\'.mp4');
        scene.text('He scowls at your pathetic attempt and pulls his cock out of your mouth.');
        (s as any).question = 0;
        if (((s as any).question ?? 0) === 1) {
          scene.text('He slaps your face hard. "What the hell is wrong with you? What kind of whore is this bad at sucking cock?!"');
        } else {
          if (((s as any).question ?? 0) === 2) {
            scene.text('He slaps your face hard. "My cock isn\'t tasty enough for you to suck on properly, bitch?!"');
          } else {
            if (((s as any).question ?? 0) === 3) {
              scene.text('He slaps your face hard. "What kind of good-for-nothing whore are you?!"');
            }
          }
        }
        qspCall(s, 'pain', '', 1, 'cheeks', 'slap');
        scene.text('Furious, he grabs you roughly by your arms, painfully twisting them behind your back, and slams you down on the bed.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'fuckRoughGate'] },
        ]);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterBlowjobDeepthroat(s: GameState, scene: SceneBuilder): void {
  (s as any).moodChange = ((s as any).moodChange ?? 0) + ((Math.floor(Math.random() * (2 - -1 + 1)) + (-1)));
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (((s as any).moodChange ?? 0));
  scene.img('images/locations/city/residential/sauna/sex/deepthroat\'+rand(1, 5)+\'.mp4');
  // TODO-QSP: dynamic text: The client groans as you take him all the way to the hilt - his <<$dick_girth>> ...
  scene.text(`The client groans as you take him all the way to the hilt - his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock is pushing deep into your throat.`);
  scene.text('You try to hold it as long as possible while teasing his balls with your tongue.');
  if (((s as any).moodType ?? 0) === 'bad') {
    scene.text('He gets a sadistic look in his eye, and then grabs the back of your head and holds you down, not letting you escape.');
    scene.text('You feel yourself beginning to suffocate and panic, trying to get away from him, but he is much stronger than you and holds you tightly in place. Your eyes begin to roll back and you feel your consciousness fading when he finally releases you. You hack and sputter, thick strands of saliva hanging from his cock to your mouth. He seems to have enjoyed that quite a lot.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'prostitution', 'deepthroat');
  scene.text('He seems to have had enough and signals that he wants some more.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'fuckGate'] },
  ]);
  scene.build();
}

function enterFuckGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).noCondChance = Math.floor(Math.random() * 100) + 1;
  if (((s as any).noCondChance ?? 0) < 40) {
    scene.text('He leers at you lustfully. "So baby, how much for not using a condom?"');
    scene.text('When you hesitate, he adds, "Come on, I\'ll pay you double."');
    scene.actions([
      { label: 'Let him fuck you without a condom', goto: ['city_saunawhore', 'fuckGateCondomNo'] },
      { label: 'Insist on using a condom', goto: ['city_saunawhore', 'fuckGateCondomYes'] },
    ]);
  } else {
    qspCall(s, 'city_saunawhore', 'fuckGateCondomYes');
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckGateCondomYes(s: GameState, scene: SceneBuilder): void {
  (s as any).useCondom = 1;
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) - (2);
  qspCall(s, 'city_saunawhore', 'fuckGateGo');
  scene.build();
}

function enterFuckGateCondomNo(s: GameState, scene: SceneBuilder): void {
  (s as any).useCondom = 2;
  (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + (1);
  qspCall(s, 'city_saunawhore', 'fuckGateGo');
  scene.build();
}

function enterFuckGateGo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/locations/city/residential/sauna/sex/lieonbedboth.jpg');
  scene.text('You lie back on the bed in front of the client.');
  scene.text('"How do you want me?" you ask teasingly.');
  if (((s as any).moodType ?? 0) === 'bad') {
    scene.text('"How do I want you whore? I want you screaming!"');
    (s as any).forced = 1;
    scene.actions([
      { label: 'Continue', goto: ['city_saunawhore', 'fuckRoughGate'] },
    ]);
  } else {
    (s as any).forced = 2;
    (s as any).holeType = Math.floor(Math.random() * 2) + 1;
    if (((s as any).holeType ?? 0) === 1) {
      scene.text('"I want some pussy."');
      scene.actions([
        { label: 'Spread your legs', goto: ['city_saunawhore', 'fuckVaginal'] },
      ]);
    } else {
      if (((s as any).holeType ?? 0) === 2) {
        scene.text('"I want to fuck your ass."');
        scene.actions([
          { label: 'Turn around and spread your ass', goto: ['city_saunawhore', 'fuckAnal'] },
        ]);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/fuckvaginal\'+rand(1, 5)+\'.mp4');
  scene.text('He climbs on top of you and pushes his dick inside you.');
  if (((s as any).dick ?? 0) > ((s as any).pcs_vag ?? 0)) {
    // TODO-QSP: dynamic text: His <<$dick_girth>> <<dick>>cm cock is too big for your pussy and causes you int...
    scene.text(`His ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock is too big for your pussy and causes you intense pain, stretching you past your limit and bringing tears to your eyes. At least he isn't too rough.`);
    // TODO-QSP: dynamic text: He thrusts his <<$dick_girth>> <<dick>>cm cock into you over and over, seeming t...
    scene.text(`He thrusts his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock into you over and over, seeming to enjoy the tightness and not caring much about your pain.`);
    (s as any).DMG = (((s as any).dick ?? 0) - ((s as any).pcs_vag ?? 0)) / 2;
    qspCall(s, 'pain', '', 1, 'vaginal', 'stretch');
    // TODO-QSP: gs 'mood', 'lower', (DMG * 5)
    qspCall(s, 'arousal', 'vaginal', 10, 'prostitution', 'rough');
  } else {
    // TODO-QSP: dynamic text: He thrusts his <<$dick_girth>> <<dick>>cm cock into you over and over, not carin...
    scene.text(`He thrusts his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock into you over and over, not caring much about technique or your own pleasure.`);
    qspCall(s, 'arousal', 'vaginal', 10, 'prostitution');
  }
  scene.text('');
  scene.text('After a while, you can sense that he\'s about to cum.');
  qspCall(s, 'stat', '');
  if (((s as any).useCondom ?? 0) === 2) {
    scene.actions([
      { label: 'Ask him not to cum inside you', handler: (st: GameState) => {
    (s as any).not_inside = 1;
  }, goto: ['city_saunawhore', 'cumClientGate'] },
    ]);
  }
  scene.actions([
    { label: 'Let him cum wherever he wants', handler: (st: GameState) => {
    (s as any).not_inside = 2;
  }, goto: ['city_saunawhore', 'cumClientGate'] },
  ]);
  scene.build();
}

function enterFuckAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/fuckanal\'+rand(1, 5)+\'.mp4');
  scene.text('He climbs on the bed behind you, presses the tip of his dick against your asshole and begins to push it in.');
  if (((s as any).dick ?? 0) > ((s as any).pcs_ass ?? 0)) {
    // TODO-QSP: dynamic text: His <<dick>> cm <<$dick_girth>> cock is too big for your ass and causes you inte...
    scene.text(`His ${((s as any).dick ?? 0)} cm ${((s as any).dick_girth ?? 0)} cock is too big for your ass and causes you intense pain as it stretches you out painfully and presses deep inside of you.`);
    // TODO-QSP: dynamic text: He thrusts his <<$dick_girth>> <<dick>>cm cock into your ass over and over, seem...
    scene.text(`He thrusts his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock into your ass over and over, seeming to enjoy the tightness and not caring much about your pain.`);
    (s as any).DMG = (((s as any).dick ?? 0) - ((s as any).pcs_ass ?? 0)) / 2;
    qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
    // TODO-QSP: gs 'mood', 'lower', (DMG * 5)
    qspCall(s, 'arousal', 'anal', 10, 'prostitution', 'rough');
  } else {
    // TODO-QSP: dynamic text: He thrusts his <<$dick_girth>> <<dick>>cm cock into your ass over and over, not ...
    scene.text(`He thrusts his ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm cock into your ass over and over, not caring much about technique or whether or not you're enjoying it.`);
    qspCall(s, 'arousal', 'anal', 10, 'prostitution');
  }
  scene.text('');
  scene.text('After a while, you can sense that he\'s about to cum.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Let him cum wherever he wants', handler: (st: GameState) => {
    (s as any).not_inside = 2;
  }, goto: ['city_saunawhore', 'cumClientGate'] },
  ]);
  scene.build();
}

function enterFuckRoughGate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/locations/city/residential/sauna/sex/bedoverpowered.jpg');
  scene.text('The man is much stronger than you, and you are completely overpowered and entirely at his will.');
  scene.text('He keeps your arms pinned painfully behind your back as he fucks you hard.');
  qspCall(s, 'mood', 'lower', 'huge');
  (s as any).useCondom = Math.floor(Math.random() * 2) + 1;
  (s as any).forced = 1;
  qspCall(s, 'pain', '', 2, 'armL', 'twist');
  qspCall(s, 'pain', '', 2, 'armR', 'twist');
  (s as any).holeType = Math.floor(Math.random() * 2) + 1;
  if (((s as any).holeType ?? 0) === 1  &&  ((s as any).useCondom ?? 0) === 1) {
    scene.text('You feel the tip of his cock against your pussy. It feels like he\'s using a condom.');
    scene.actions([
      { label: 'Continue', goto: ['city_saunawhore', 'fuckRoughVaginal'] },
    ]);
  } else {
    if (((s as any).holeType ?? 0) === 1  &&  ((s as any).useCondom ?? 0) === 2) {
      scene.text('You feel the tip of his cock against your pussy. It feels like he\'s not wearing a condom!');
      scene.actions([
        { label: 'Continue', goto: ['city_saunawhore', 'fuckRoughVaginal'] },
      ]);
    } else {
      if (((s as any).holeType ?? 0) === 2) {
        scene.text('You feel the tip of his cock pressing against your asshole.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'fuckRoughAnal'] },
        ]);
      }
    }
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterFuckRoughVaginal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/fuckroughvaginal\'+rand(1, 5)+\'.mp4');
  scene.text('He forces his dick inside you and begins to roughly fuck your tender pussy.');
  scene.text('You cannot help but scream in pain, which seems to arouse him even more and makes him push even harder and deeper.');
  if (((s as any).dick ?? 0) > ((s as any).pcs_vag ?? 0)) {
    // TODO-QSP: dynamic text: His <<$dick_girth>> <<dick>>cm is too big for your pussy and causes you intense ...
    scene.text(`His ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm is too big for your pussy and causes you intense pain, stretching you horribly and slamming against your cervix.`);
    (s as any).DMG = (((s as any).dick ?? 0) - ((s as any).pcs_vag ?? 0));
    qspCall(s, 'pain', '', 2, 'vaginal', 'stretch');
    // TODO-QSP: gs 'mood', 'lower', (DMG * 5)
  }
  qspCall(s, 'arousal', 'vaginal', 10, 'prostitution', 'rough', 'bound');
  scene.text('');
  scene.text('After seemingly endless fucking, you finally sense that he\'s about to cum.');
  qspCall(s, 'stat', '');
  if (((s as any).useCondom ?? 0) === 2) {
    scene.actions([
      { label: 'Beg him not to cum inside you', handler: (st: GameState) => {
    (s as any).not_inside = 1;
  }, goto: ['city_saunawhore', 'cumClientGate'] },
    ]);
  }
  scene.actions([
    { label: 'Let him cum wherever he wants', handler: (st: GameState) => {
    (s as any).not_inside = 2;
  }, goto: ['city_saunawhore', 'cumClientGate'] },
  ]);
  scene.build();
}

function enterFuckRoughAnal(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/fuckroughanal\'+rand(1, 5)+\'.mp4');
  scene.text('He roughly shoves his entire cock up your ass and begins to fuck it furiously.');
  scene.text('You cannot help but scream in agony, which arouses him even more and makes him push even harder and deeper.');
  if (((s as any).dick ?? 0) > ((s as any).pcs_ass ?? 0)) {
    // TODO-QSP: dynamic text: His <<$dick_girth>> <<dick>>cm is too big for your ass and causes you intense pa...
    scene.text(`His ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)}cm is too big for your ass and causes you intense pain, stretching you out and making it feel like you're being ripped open.`);
    (s as any).DMG = (((s as any).dick ?? 0) - ((s as any).pcs_ass ?? 0));
    qspCall(s, 'pain', '', 2, 'asshole', 'stretch');
    // TODO-QSP: gs 'mood', 'lower', (DMG * 5)
  }
  (s as any).not_inside = 2;
  qspCall(s, 'arousal', 'anal', 10, 'prostitution', 'rough', 'bound');
  scene.text('');
  scene.text('After seemingly endless assfucking, you finally sense that he\'s about to cum.');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Let him cum wherever he wants', goto: ['city_saunawhore', 'cumClientGate'] },
  ]);
  scene.build();
}

function enterCumClientGate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).moodType ?? 0) === 'bad') {
    if (((s as any).not_inside ?? 0) === 2) {
      (s as any).cumRand = Math.floor(Math.random() * 10) + 1;
      if (((s as any).cumRand ?? 0) <= 9  &&  ((s as any).holeType ?? 0) === 1) {
        scene.text('You feel his cock twitch and realize he\'s about to cum inside you.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'cumVaginal'] },
        ]);
      } else {
        if (((s as any).cumRand ?? 0) <= 9  &&  ((s as any).holeType ?? 0) === 2) {
          scene.text('You feel his cock twitch and realize he\'s about to cum in your ass.');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'cumAnal'] },
          ]);
        } else {
          scene.text('He pulls out and brings his cock up to your face.');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'cumFace'] },
          ]);
        }
      }
    } else {
      (s as any).cumRand = Math.floor(Math.random() * 2) + 1;
      if (((s as any).cumRand ?? 0) === 1  &&  ((s as any).holeType ?? 0) === 1) {
        scene.text('He just laughs and you realize he\'s going to cum inside you anyway.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'cumVaginal'] },
        ]);
      } else {
        if (((s as any).cumRand ?? 0) === 2) {
          scene.text('He just smirks. "Fine. How about in your eyes then, whore?"');
          qspCall(s, 'pain', '', 1, 'eyes', 'burn');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'cumFace'] },
          ]);
        }
      }
    }
  } else {
    if (((s as any).not_inside ?? 0) === 2) {
      (s as any).cumRand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).cumRand ?? 0) === 1  &&  ((s as any).holeType ?? 0) === 1) {
        scene.text('You feel his cock twitch and realize he\'s about to cum inside you.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'cumVaginal'] },
        ]);
      } else {
        if (((s as any).cumRand ?? 0) === 1  &&  ((s as any).holeType ?? 0) === 2) {
          scene.text('You feel his cock twitch and realize he\'s about to cum in your ass.');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'cumAnal'] },
          ]);
        } else {
          if (((s as any).cumRand ?? 0) === 2) {
            scene.text('He pulls out and brings his cock up to your face.');
            scene.actions([
              { label: 'Continue', goto: ['city_saunawhore', 'cumFace'] },
            ]);
          } else {
            if (((s as any).cumRand ?? 0) === 3) {
              scene.text('He pulls out and brings his cock up to your face.');
              scene.actions([
                { label: 'Continue', goto: ['city_saunawhore', 'cumMouth'] },
              ]);
            } else {
              if (((s as any).cumRand ?? 0) === 4) {
                scene.text('He pulls out and holds his cock over your body.');
                scene.actions([
                  { label: 'Continue', goto: ['city_saunawhore', 'cumBelly'] },
                ]);
              } else {
                if (((s as any).cumRand ?? 0) === 5) {
                  scene.text('He pulls out and holds his cock over your body.');
                  scene.actions([
                    { label: 'Continue', goto: ['city_saunawhore', 'cumTits'] },
                  ]);
                }
              }
            }
          }
        }
      }
    } else {
      (s as any).cumRand = Math.floor(Math.random() * 9) + 1;
      if (((s as any).cumRand ?? 0) <= 2) {
        scene.text('He nods, pulls out and brings his cock up to your face.');
        scene.actions([
          { label: 'Continue', goto: ['city_saunawhore', 'cumFace'] },
        ]);
      } else {
        if (((s as any).cumRand ?? 0) <= 4) {
          scene.text('He nods, pulls out and brings his cock up to your face.');
          scene.actions([
            { label: 'Continue', goto: ['city_saunawhore', 'cumMouth'] },
          ]);
        } else {
          if (((s as any).cumRand ?? 0) <= 6) {
            scene.text('He nods, pulls out and holds his cock over your body.');
            scene.actions([
              { label: 'Continue', goto: ['city_saunawhore', 'cumBelly'] },
            ]);
          } else {
            if (((s as any).cumRand ?? 0) <= 8) {
              scene.text('He nods, pulls out and holds his cock over your body.');
              scene.actions([
                { label: 'Continue', goto: ['city_saunawhore', 'cumTits'] },
              ]);
            } else {
              scene.text('He shakes his head. "Sorry, I can\'t stop now!" You realize he\'s going to cum in you anyway!');
              scene.actions([
                { label: 'Continue', goto: ['city_saunawhore', 'cumVaginal'] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCumVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).useCondom ?? 0) === 1) {
    scene.img('images/locations/city/residential/sauna/sex/cumcondomvaginal.jpg');
    scene.text('The client\'s cock twitches several more times as he cums into the condom.');
    // TODO-QSP: dynamic text: He rips the condom from his dick, and you see that it has <<$cumType>> cum in it...
    scene.text(`He rips the condom from his dick, and you see that it has ${((s as any).cumType ?? 0)} cum in it.`);
    (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + ((Math.floor(Math.random() * (2 - -2 + 1)) + (-2)));
    if (((s as any).moodType ?? 0) === 'bad') {
      scene.img('images/locations/city/residential/sauna/sex/cumcondompourface.jpg');
      scene.text('He then suddenly grabs your head and pours the contents over your face.');
      qspCall(s, 'cum_call', '', '', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
      qspCall(s, 'cum_call', 'face', 'sauna client', 0, 0, 0, ((s as any).cumVolMl ?? 0));
    } else {
      if (((s as any).moodType ?? 0) === 'fairly normal') {
        scene.text('He throws it on the floor, not caring about spilling the fluids around.');
        qspCall(s, 'cum_call', '', '', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
      } else {
        if (((s as any).moodType ?? 0) === 'good') {
          scene.text('He throws it in the waste bin and gently caresses your hair afterwards.');
          qspCall(s, 'cum_call', '', '', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
        }
      }
    }
  } else {
    scene.img('images/locations/city/residential/sauna/sex/cumvaginal\'+rand(1, 5)+\'.mp4');
    // TODO-QSP: dynamic text: The client's cock twitches several more times, and you feel a warmth spreading i...
    scene.text(`The client's cock twitches several more times, and you feel a warmth spreading inside you as he pumps ${((s as any).cumType ?? 0)} cum deep inside your pussy.`);
    qspCall(s, 'cum_call', '', '', 'sauna client', 0, 0, 0, ((s as any).cumVolMl ?? 0));
    if ((Math.floor(Math.random() * 100) + 1) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterCumAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).useCondom ?? 0) === 1) {
    scene.img('images/locations/city/residential/sauna/sex/cumcondomanal.jpg');
    scene.text('The client\'s cock twitches several more times as he cums into the condom.');
    // TODO-QSP: dynamic text: He rips the condom from his dick, and you see that it has <<$cumType>> cum in it...
    scene.text(`He rips the condom from his dick, and you see that it has ${((s as any).cumType ?? 0)} cum in it.`);
    (s as any).moodTypeRand = ((s as any).moodTypeRand ?? 0) + ((Math.floor(Math.random() * (2 - -2 + 1)) + (-2)));
    if (((s as any).moodType ?? 0) === 'bad') {
      scene.img('images/locations/city/residential/sauna/sex/cumcondompourface.jpg');
      scene.text('He then suddenly grabs your head and pours the contents over your face.');
      qspCall(s, 'cum_call', 'anus', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
      qspCall(s, 'cum_call', 'face', 'sauna client', 0, 0, 0, ((s as any).cumVolMl ?? 0));
    } else {
      if (((s as any).moodType ?? 0) === 'fairly normal') {
        scene.text('He throws it on the floor, not caring about spilling the fluids around.');
        qspCall(s, 'cum_call', 'anus', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
      } else {
        if (((s as any).moodType ?? 0) === 'good') {
          scene.text('He throws it in the waste bin and gently caresses your hair afterwards.');
          qspCall(s, 'cum_call', 'anus', 'sauna client', 0, 3, 0, ((s as any).cumVolMl ?? 0));
        }
      }
    }
  } else {
    scene.img('images/locations/city/residential/sauna/sex/cumanal\'+rand(1, 5)+\'.mp4');
    // TODO-QSP: dynamic text: The client's cock twitches several more times, and you feel a warmth spreading i...
    scene.text(`The client's cock twitches several more times, and you feel a warmth spreading inside you as he pumps ${((s as any).cumType ?? 0)} cum deep inside your bowels.`);
    if ((Math.floor(Math.random() * 100) + 1) >= 70) {
      qspCall(s, 'dinSex', 'std_trigger');
    }
    qspCall(s, 'cum_call', 'anus', 'sauna client', 0, 0, 0, ((s as any).cumVolMl ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterCumFace(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/cumface\'+rand(1, 5)+\'.mp4');
  if (((s as any).useCondom ?? 0) === 1) {
    // TODO-QSP: dynamic text: The client rips the condom from his dick and <<$cumType>> cum splatters all over...
    scene.text(`The client rips the condom from his dick and ${((s as any).cumType ?? 0)} cum splatters all over your face.`);
  } else {
    // TODO-QSP: dynamic text: The client finishes himself off and <<$cumType>> cum splatters all over your fac...
    scene.text(`The client finishes himself off and ${((s as any).cumType ?? 0)} cum splatters all over your face.`);
  }
  qspCall(s, 'cum_call', 'face', 0, 0, 0, ((s as any).cumVolMl ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterCumMouth(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/cummouth\'+rand(1, 5)+\'.mp4');
  if (((s as any).useCondom ?? 0) === 1) {
    // TODO-QSP: dynamic text: The client rips the condom from his dick and shoots <<$cumType>> cum inside your...
    scene.text(`The client rips the condom from his dick and shoots ${((s as any).cumType ?? 0)} cum inside your mouth.`);
  } else {
    // TODO-QSP: dynamic text: The client stuffs his dick back inside your mouth and shoots <<$cumType>> cum in...
    scene.text(`The client stuffs his dick back inside your mouth and shoots ${((s as any).cumType ?? 0)} cum into your throat.`);
  }
  if ((Math.floor(Math.random() * 100) + 1) >= 70) {
    qspCall(s, 'dinSex', 'std_trigger_oral');
  }
  qspCall(s, 'cum_call', 'mouth_swallow', 0, 0, 0, ((s as any).cumVolMl ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterCumBelly(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/cumbelly\'+rand(1, 5)+\'.mp4');
  if (((s as any).useCondom ?? 0) === 1) {
    // TODO-QSP: dynamic text: The client rips the condom from his dick and <<$cumType>> cum splatters all over...
    scene.text(`The client rips the condom from his dick and ${((s as any).cumType ?? 0)} cum splatters all over your belly.`);
  } else {
    // TODO-QSP: dynamic text: The client finishes himself off and <<$cumType>> cum splatters all over your bel...
    scene.text(`The client finishes himself off and ${((s as any).cumType ?? 0)} cum splatters all over your belly.`);
  }
  qspCall(s, 'cum_call', 'stomach', 0, 0, 0, ((s as any).cumVolMl ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterCumTits(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/cumtits\'+rand(1, 5)+\'.mp4');
  scene.text('You kneel down in front of him, raising your breasts higher for him to shoot his load on them.');
  if (((s as any).useCondom ?? 0) === 1) {
    // TODO-QSP: dynamic text: The client rips the condom from his dick and shoots <<$cumType>> cum all over yo...
    scene.text(`The client rips the condom from his dick and shoots ${((s as any).cumType ?? 0)} cum all over your tits.`);
  } else {
    // TODO-QSP: dynamic text: The client finishes himself off and shoots <<$cumType>> cum all over your tits.
    scene.text(`The client finishes himself off and shoots ${((s as any).cumType ?? 0)} cum all over your tits.`);
  }
  qspCall(s, 'cum_call', 'breasts', 0, 0, 0, ((s as any).cumVolMl ?? 0));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['city_saunawhore', 'clientLeave'] },
  ]);
  scene.build();
}

function enterBdsmclient(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/sauna/sex/bdsm1.jpg');
  scene.text('You\'re brought into one of the private sauna rooms where they tell you that today you\'ll be performing a different task than your regular routine.');
  scene.text('You look around and see some ropes hanging by a bench. Your body tenses as you come to the realization that the ropes are for you…');
  // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>. This client is only somewhat kinky, so he won't ...
  scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}. This client is only somewhat kinky, so he won't hurt you." they assure you as they make you sit on the bench and tie you up.`);
  scene.text('"Just one last thing." they say as they put a paper bag over your head. They leave the room as you sit in silence.');
  scene.actions([
    { label: 'Sit and wait', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 2, 'handL', 'bind');
    qspCall(s, 'pain', '', 2, 'handR', 'bind');
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/sauna/sex/bdsm2.jpg');
    scene.text('The ropes are chafing, you\'re uncomfortable and it feels like an eternity until you hear someone open the door. You hear some heavy steps come towards you but you can\'t see anything.');
    scene.text('"Let me help you there." you hear a deep voice say as he removes the bag from your head. You flinch as you see he\'s wearing a mask over his head.');
    scene.text('The man tells you to relax and that he doesn\'t want to fuck you, only watch you squirm.');
    scene.actions([
      { label: 'Squirm', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/sauna/sex/bdsm3.jpg');
    scene.text('Not wanting to upset the patron you begin acting as you\'re fighting to get loose, grunting and moaning.');
    scene.text('"Good good." the man says as he drops his pants and begins touching his little cock. It\'s quite clear why you needn\'t have worried about getting fucked by this guy.');
    scene.text('You do this for some time while the man begins touching himself. This continues for a few minutes until he suddenly stops touching himself and also commands you to stop. He walks over to the door and whispers something to the men standing outside.');
    scene.actions([
      { label: 'Stand up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/sauna/sex/bdsm4.jpg');
    scene.text('The men quickly enter the room, grab hold of you and stand you up. "How do you want her?"');
    scene.text('The man stands pondering what to do next. "Tie her up like she is. I want to observe her while standing." the voice behind the mask commands.');
    scene.text('The men are pretty quick and tie your hands, mid-section and legs so you can\'t move. They leave as soon as they\'re done while the man begins touching his cock once again.');
    scene.text('"You have a great body girl, has anyone told you that?" he asks as you try to move your body to a comfortable position.');
    scene.text('"That\'s right, squirm you little whore. I know you\'re uncomfortable. How does it feel having someone else in control of your fate?"');
    scene.text('You\'re starting to worry about what his intentions actually are.');
    scene.actions([
      { label: 'On all fours', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 2, 'legs', 'bind');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/sauna/sex/bdsm5.jpg');
    scene.text('The man claps his hands and the men run inside the room again. "I want to see her from behind. And be sure to tie her up nicely, no weak ass shit like the last time."');
    scene.text('They quickly finish up, leaving you at the mercy of the man. "Like I said, you don\'t have to worry. I won\'t fuck you. To be in control is enough for me."');
    scene.text('You nod as you\'re too afraid to speak. "Now spread your legs. I want to see your beautiful pussy lips."');
    scene.text('You try to spread your legs as much as you can, but the ropes are preventing you and the harder you try, the more painfully the ropes dig into you. You let out a desperate cry as he starts grunting.');
    scene.actions([
      { label: 'On your back', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 4, 'labia', 'pinch');
    scene.img('images/locations/city/residential/sauna/sex/bdsm6.jpg');
    scene.text('"You little minx! Do you want me to cum this quickly? No no, we\'re not done just yet." He once again calls in the men and they lie you on your back, spread your legs and tie you tightly. They also tie your hands above your head.');
    scene.text('"Excellent work. Did you bring what I asked for?" the man asks.');
    scene.text('Your stomach starts churning as you listen. The men hand over a brown bag and leave the room.');
    scene.text('The man walks up to you and without saying anything, takes out a number of pins and clips them along your labia. The pinching hurts, but is arousing at the same time.');
    scene.text('"Feels great, right? I know how to please women." the man confidently says. You answer with a loud moan. That\'s enough for him as he starts tugging at his cock and it doesn\'t take long before he cums on the floor. He quickly gets dressed, leaving you tied up.');
    qspCall(s, 'arousal', 'foreplay', 15, 'prostitution', 'bound', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (s as any).basePay = (10 * (Math.floor(Math.random() * 51) + 85));
    (s as any).payment = (((s as any).basePay ?? 0) / 2);
    scene.img('images/locations/city/residential/sauna/givemoney.jpg');
    if (((s as any).workDolg ?? 0) > 0) {
      qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).payment ?? 0), 'none');
      // TODO-QSP: dynamic text: The client leaves the room and pays the sauna ' + $func('money', 'string_debt_re...
      scene.text('The client leaves the room and pays the sauna \' + $func(\'money\', \'string_debt_reduction\', payment) + \' for your services.');
      scene.text('The men untie you and have you slowly turn around so the madam can be sure you are unmarked, then leave.');
    } else {
      qspCall(s, 'money', 'earn', ((s as any).payment ?? 0));
      // TODO-QSP: dynamic text: The client counts the money out as his men untie you. He hands you ' + $func('mo...
      scene.text('The client counts the money out as his men untie you. He hands you \' + $func(\'money\', \'string_profit\', payment) + \' for your services.');
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Head back to the main area', goto: ['city_saunawhore', 'saunawork'] },
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

function enterClientLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).basePay = (10 * (Math.floor(Math.random() * 51) + 75));
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0) {
    (s as any).condomPrice = 100;
  } else {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      qspCall(s, 'dina', 'prezik');
      (s as any).condomPrice = 0;
    }
  }
  if (((s as any).forced ?? 0) === 2) {
    (s as any).payment = (((s as any).basePay ?? 0) * ((s as any).useCondom ?? 0)) - ((s as any).condomPrice ?? 0);
  } else {
    (s as any).payment = (((s as any).basePay ?? 0) / 2) - ((s as any).condomPrice ?? 0);
  }
  scene.img('images/locations/city/residential/sauna/givemoney.jpg');
  if (((s as any).workDolg ?? 0) > 0) {
    qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).payment ?? 0), 'none');
    // TODO-QSP: dynamic text: Having finished with you, the client gets dressed, leaves the room and pays the ...
    scene.text('Having finished with you, the client gets dressed, leaves the room and pays the sauna \' + $func(\'money\', \'string_debt_reduction\', payment) + \' for your services.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Head back to the main area', goto: ['city_saunawhore', 'saunawork'] },
    ]);
  } else {
    if (((s as any).nichTarSauna ?? 0) === 1) {
      (s as any).nichTarSaunaPay = ((s as any).nichTarSaunaPay ?? 0) + (((s as any).payment ?? 0));
      // TODO-QSP: dynamic text: Having finished with you, the client gets dressed, leaves the room and pays the ...
      scene.text('Having finished with you, the client gets dressed, leaves the room and pays the sauna \' + $func(\'money\', \'string_profit\', payment) + \' for your services. This money will be collected by Taras later.');
      // TODO-QSP: dynamic text: You earned ' + $func('money', 'string_profit', nichTarSaunaPay) + ' for Taras.
      scene.text('You earned \' + $func(\'money\', \'string_profit\', nichTarSaunaPay) + \' for Taras.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Head back to the main area', goto: ['city_saunawhore', 'saunawork'] },
      ]);
    } else {
      qspCall(s, 'money', 'earn', ((s as any).payment ?? 0));
      // TODO-QSP: dynamic text: Having finished with you, the client gets dressed, takes his wallet out and hand...
      scene.text('Having finished with you, the client gets dressed, takes his wallet out and hands you \' + $func(\'money\', \'string_profit\', payment) + \'.');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Take the money and see him out', goto: ['city_saunawhore', 'saunawork'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'saunawork':
      enterSaunawork(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'debtPay':
      enterDebtPay(s, scene);
      break;
    case 'clientGate':
      enterClientGate(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'simplystrip':
      enterSimplystrip(s, scene);
      break;
    case 'strippedGate':
      enterStrippedGate(s, scene);
      break;
    case 'nakeddance':
      enterNakeddance(s, scene);
      break;
    case 'holeshow':
      enterHoleshow(s, scene);
      break;
    case 'blowjob':
      enterBlowjob(s, scene);
      break;
    case 'blowjobGate':
      enterBlowjobGate(s, scene);
      break;
    case 'blowjobCaress':
      enterBlowjobCaress(s, scene);
      break;
    case 'blowjobDeepthroat':
      enterBlowjobDeepthroat(s, scene);
      break;
    case 'fuckGate':
      enterFuckGate(s, scene);
      break;
    case 'fuckGateCondomYes':
      enterFuckGateCondomYes(s, scene);
      break;
    case 'fuckGateCondomNo':
      enterFuckGateCondomNo(s, scene);
      break;
    case 'fuckGateGo':
      enterFuckGateGo(s, scene);
      break;
    case 'fuckVaginal':
      enterFuckVaginal(s, scene);
      break;
    case 'fuckAnal':
      enterFuckAnal(s, scene);
      break;
    case 'fuckRoughGate':
      enterFuckRoughGate(s, scene);
      break;
    case 'fuckRoughVaginal':
      enterFuckRoughVaginal(s, scene);
      break;
    case 'fuckRoughAnal':
      enterFuckRoughAnal(s, scene);
      break;
    case 'cumClientGate':
      enterCumClientGate(s, scene);
      break;
    case 'cumVaginal':
      enterCumVaginal(s, scene);
      break;
    case 'cumAnal':
      enterCumAnal(s, scene);
      break;
    case 'cumFace':
      enterCumFace(s, scene);
      break;
    case 'cumMouth':
      enterCumMouth(s, scene);
      break;
    case 'cumBelly':
      enterCumBelly(s, scene);
      break;
    case 'cumTits':
      enterCumTits(s, scene);
      break;
    case 'bdsmclient':
      enterBdsmclient(s, scene);
      break;
    case 'clientLeave':
      enterClientLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_saunawhore: LocationDef = {
  name: 'city_saunawhore',
  title: 'Sauna',
  region: 'city',
  locationType: 'bathroom',
  enter: enter,
};
