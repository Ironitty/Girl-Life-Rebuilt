import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['day'] !== 0) {
    // TODO-QSP: exit
  }
  if ((((s as any).locArgs?.[2] ?? 0) === 'inside'  ||  ((s as any).locArgs?.[2] ?? 0) === 'indoors')) {
    if (((((s as any).loc ?? 0)).indexOf(('church'))) + 1 <= 0) {
      // TODO-QSP: exit
    }
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === 'secluded') {
      return;
    }
  }
  if (((s as any).flash_image ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).temp_prob_chance = 300;
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (qspUntranslated(s, "max(fame['pav_slut'], fame['city_slut'])", { location: "blackmailer" }));
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (Math.max(((s as any).fame ?? 0)?.['pav_modelling'], ((s as any).fame ?? 0)?.['city_modelling']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (Math.max(((s as any).fame ?? 0)?.['pav_porn'], ((s as any).fame ?? 0)?.['city_porn']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (20 * Math.min(((s as any).trait_vars ?? {})?.['exhibitionist'] * ((s as any).trait_vars ?? {})?.['exhibitionist'], 9));
  if (((s as any).temp_prob_chance ?? 0) > 600) {
    // TODO-QSP: killvar 'temp_prob_chance'
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'tits') {
    (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (50);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'butt') {
      (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (75);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'pussy') {
        (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (85);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'full') {
          (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (120);
        }
      }
    }
  }
  if ((Math.floor(Math.random() * (((s as any).temp_prob_chance ?? 0) - 0 + 1)) + (0)) >= 5) {
    // TODO-QSP: killvar 'temp_prob_chance'
    // TODO-QSP: exit
  }
  qspCall(s, 'blackmailer', 'init_blackmail', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterInitBlackmail(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW ?? {})['day'] = ((s as any).daystart ?? 0);
  ((s as any).blackmailQW ?? {})['stage'] = 1;
  ((s as any).blackmailQW ?? {})['init_day'] = ((s as any).daystart ?? 0);
  if (((s as any).locArgs?.[1] ?? 0) === 'panty') {
    ((s as any).blackmailQW ?? {})['init_flashaction'] = 'panties';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'pantyrear') {
      ((s as any).blackmailQW ?? {})['init_flashaction'] = 'panty clad ass';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'butt_plug') {
        ((s as any).blackmailQW ?? {})['init_flashaction'] = 'butt plug';
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'full') {
          ((s as any).blackmailQW ?? {})['init_flashaction'] = 'naked body';
        } else {
          ((s as any).blackmailQW ?? {})['init_flashaction'] = ((s as any).locArgs?.[1] ?? 0);
        }
      }
    }
  }
  ((s as any).blackmailQW ?? {})['init_flashimage'] = ((s as any).flash_image ?? 0);
  ((s as any).blackmailQW ?? {})['init_flashloc'] = ((s as any).loc ?? 0);
  ((s as any).blackmailQW ?? {})['init_flashloc_arg'] = ((s as any).loc_arg ?? 0);
  ((s as any).blackmailQW ?? {})['init_flashregion'] = ((s as any).region ?? 0);
  ((s as any).blackmailQW ?? {})['total_material'] = 1;
  if (((((s as any).loc ?? 0)).indexOf(('park'))) + 1 > 0) {
    ((s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in a park';
    scene.text('<b>A flash of light</b> briefly brightens the surrounding trees and you see a shadow darting between the trees. The light of the camera flash prickling on your exposed skin.');
  } else {
    if (((((s as any).loc ?? 0)).indexOf(('church'))) + 1 > 0) {
      ((s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in a church';
      scene.text('<b>The flash of a camera</b> illuminates the inside of the church, but the source eludes you.');
    } else {
      if (((((s as any).loc ?? 0)).indexOf(('fuelstation'))) + 1 > 0) {
        ((s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'while washing cars';
        scene.text('You briefly think a <b>car turned on its headlights</b> before you realize it was the flash of a camera, the source of which is already gone.');
      } else {
        if (((s as any).loc ?? 0) === 'pav_aptcourtev'  ||  ((s as any).loc ?? 0) === 'anushapt') {
          ((s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in front of Maxim';
          scene.text('You think you notice the <b>flash of a camera</b> from the corner of your eye, but its source is already out of view.');
        } else {
          ((s as any).blackmailQW ?? {})['init_flashloc_desc'] = '';
          scene.text('You think you notice the <b>flash of a camera</b> from the corner of your eye, but its source is already out of view.');
        }
      }
    }
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    qspCall(s, 'arousal', 'flashlite', (-5));
    qspCall(s, 'arousal', 'end');
  }
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['package_day'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['package_day']  &&  ((s as any).blackmailQW ?? 0)?.['package'] > 0) {
    ((s as any).blackmailQW ?? {})['package'] = 0;
    // TODO-QSP: gs 'post_office', 'remove_mail', "gs 'blackmailer', 'set_post_act'"
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
    if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['smsday']) {
      qspCall(s, 'blackmailer', 'cikl_set_reminder');
    } else {
      if (((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['smsday']) {
        qspCall(s, 'blackmailer', 'cikl_set_failure');
      }
    }
  } else {
    if (((s as any).blackmailQW ?? 0)?.['smsday'] === 0) {
      qspCall(s, 'blackmailer', 'cikl_set_smsday');
    } else {
      if (((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['smsday']) {
        qspCall(s, 'blackmailer', 'cikl_set_sms');
      } else {
        if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['smsday']  &&  ((s as any).blackmailQW ?? 0)?.['toy_fund'] > (Math.floor(Math.random() * 3001) + 2000)  &&  ((s as any).blackmailQW ?? 0)?.['package'] === 0  &&  ((s as any).blackmailQW ?? 0)?.['inventory'] === 0) {
          qspCall(s, 'blackmailer', 'cikl_set_package');
        }
      }
    }
  }
  scene.build();
}

function enterCiklSetReminder(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_reminder'", "(totminut ...
  scene.build();
}

function enterCiklSetFailure(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_failure'", "(totminut >...
  scene.build();
}

function enterCiklSetSmsday(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 3) {
    ((s as any).blackmailQW ?? {})['smsday'] = ((s as any).blackmailQW ?? {})?.['dreamday'] + 4;
    qspCall(s, 'telefon', 'AddContact', 'Blackmailer', 'icon_na', 1);
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 5) {
      ((s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 6;
      if (((s as any).blackmailQW ?? 0)?.['stage'] === 6) {
        ((s as any).blackmailQW ?? {})['smsday'] = (((s as any).blackmailQW ?? {})['smsday'] ?? 0) + (4 - ((s as any).blackmailQW ?? {})?.['selfie_stage']);
      }
      if (((s as any).blackmailQW ?? 0)?.['stage'] < 8) {
        ((s as any).blackmailQW ?? {})['smsday'] = (((s as any).blackmailQW ?? {})['smsday'] ?? 0) + (Math.floor(Math.random() * 7) + 0);
      } else {
        ((s as any).blackmailQW ?? {})['smsday'] = (((s as any).blackmailQW ?? {})['smsday'] ?? 0) + (Math.floor(Math.random() * 5) + 0);
      }
    }
  }
  scene.build();
}

function enterCiklSetSms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 3) {
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS1'", "(totminut > <<totm...
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] === 7) {
      if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0  &&  ((s as any).blackmailQW ?? 0)?.['package'] === 0  &&  ((s as any).blackmailQW ?? 0)?.['inventory'] === 0  &&  ((s as any).blackmailQW ?? 0)?.['package_day'] === 0) {
        // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_package1'", "(totminut ...
      } else {
        if (((s as any).blackmailQW ?? 0)?.['inventory'] > 0  ||  ((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 1) {
          // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_outfit1'", "(totminut >...
        } else {
          if (((s as any).blackmailQW ?? 0)?.['package_day'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['package_day']) {
            // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_failure'", "(totminut >...
          }
        }
      }
    } else {
      if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 2) {
        // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS2'", "(totminut > <<totm...
      } else {
        if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 3) {
          // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS2_reminder'", "(totminut...
        } else {
          if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 4) {
            // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS3'", "(totminut > <<totm...
          } else {
            if (((s as any).blackmailQW ?? 0)?.['stage'] >= 5) {
              // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_repeat'", "(totminut > ...
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterCiklSetPackage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 1) {
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_package_repeat'", "(tot...
  } else {
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] >= 5) {
      // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $blackmailQW['nerdvana_phone_ID'], "gs 'blackmailer', 'Add_SMS_pac...
    }
  }
  scene.build();
}

function enterUpdatePaymentCalendar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0  &&  ((s as any).blackmailQW ?? 0)?.['smsday'] > 0) {
    qspCall(s, 'calendar', 'add', 'blackmail_payment_deadline');
  }
  scene.build();
}

function enterJournalQuests(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_inhib ?? 0) < 35  &&  ((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  qspCall(s, 'cards', 'section_open', 'Blackmailer');
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    scene.text('It would be rather unfortunate if somebody caught you while you were flashing.');
    scene.text('<it>There is a small, chance of getting caught while flashing in a park, in a church, and while washing cars.</it>');
    scene.text('<it>(Roughly between 2% and 5%)</it>');
    qspCall(s, 'cards', 'section_close');
    return;
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] < 0) {
      scene.text('You have refused the blackmailer one too many times.');
      qspCall(s, 'cards', 'section_close');
      return;
    } else {
      if (((s as any).blackmailQW ?? 0)?.['stage'] <= 3) {
        scene.text('You got caught while flashing! Who knows what could happen in the future?');
        qspCall(s, 'cards', 'section_close');
        return;
      }
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] === 0) {
    scene.text('You have paid your blackmailer, but how long will that keep them quiet?');
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
      if (((s as any).blackmailQW ?? 0)?.['worn_costume'] < 0) {
        scene.text('You did not wear the costume when you delivered the payment.');
        scene.text('You can only hope that your blackmailer doesn\'t know.');
      } else {
        if (((s as any).blackmailQW ?? 0)?.['worn_costume'] > 0) {
          scene.text('You wore the costume like a <it>good girl</it>.');
        }
      }
    }
  } else {
    // TODO-QSP: dynamic text: Your blackmailer has demanded you to leave ' + $func('money', 'string_price', bl...
    scene.text('Your blackmailer has demanded you to leave \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\']) + \' in the nearest park.');
    if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['smsday'] - 1) {
      // TODO-QSP: dynamic text: You have <<blackmailQW['smsday'] - daystart>> days left
      scene.text(`You have ${((s as any).blackmailQW ?? {})?.['smsday'] - ((s as any).daystart ?? 0)} days left`);
    } else {
      if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['smsday'] - 1) {
        scene.text('You have until tomorrow night.');
      } else {
        if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['smsday']) {
          scene.text('You have until tonight!');
        } else {
          scene.text('You were too late!!');
        }
      }
    }
    scene.text('<it>You can leave the cash in the city, pav, Pushkin park, and the Gadukino forest.</it>');
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 6) {
    scene.text('You can send selfies to your blackmailer to reduce the debt.');
    if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] < 3) {
      scene.text('    <i>Try experimenting with different (or lack of) clothes</i>');
      if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 0) {
        scene.text('    <i>Try sending a picture in a swimsuit or underwear</i>');
      } else {
        if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 1) {
          scene.text('    <i>Try sending a picture of your tits or ass</i>');
        } else {
          scene.text('    <i>Try sending a picture of your pussy</i>');
        }
      }
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['escape'] === -1) {
    scene.text('You went to the police for help but couldn\'t do it. <it>You can always come back later.</it>');
  } else {
    if (((s as any).blackmailQW ?? 0)?.['escape'] >= 1) {
      scene.text('You went to the police and showed them your phone. You got a card from officer Sokolov.');
      if (((s as any).blackmailQW ?? 0)?.['escape'] >= 2) {
        scene.text('You gave officer Sokolov the phone and account numbers of your blackmailer.');
      }
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] >= 2  &&  ((s as any).blackmailQW ?? 0)?.['escape'] < 2) {
    scene.text('You\'ve gotten the phone and account numbers of your blackmailer');
  }
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 3) {
    scene.text('Your blackmailer has requested four clothed selfies, taken from your bedroom.');
  } else {
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 4) {
      scene.text('You have sent your blackmailer four clothed selfies, taken from your bedroom.');
    } else {
      if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] >= 5) {
        // TODO-QSP: dynamic text: Your actions have alerted your blackmailer, and he has used your clothed selfies...
        scene.text(`Your actions have alerted your blackmailer, and he has used your clothed selfies to trick Nerdvana clerk ${((s as any).npc_usedname ?? 0)?.[((s as any).blackmailQW ?? 0)?.['nerdvana_phone_ID']]}.`);
      }
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['package'] > 0) {
    scene.text('Your blackmailer has sent you a package, you should go pick it up at the St. Petersburg post office.');
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
      if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['package_day'] - 1) {
        // TODO-QSP: dynamic text: You have <<blackmailQW['package_day']-daystart>> days left.
        scene.text(`You have ${((s as any).blackmailQW ?? {})?.['package_day']-((s as any).daystart ?? 0)} days left.`);
      } else {
        if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['package_day'] - 1) {
          scene.text('You only have one day left.');
        } else {
          if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['package_day']) {
            scene.text('Today is the last day.');
          } else {
            scene.text('ERROR. Report this please.');
          }
        }
      }
    }
  } else {
    if (((s as any).blackmailQW ?? 0)?.['inventory'] > 0) {
      scene.text('You have a package from your blackmailer in your possession. Maybe you should open it.');
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 7) {
    scene.text('Rules:');
    scene.text('    - Your blackmailer has demanded that you address them with "sir"');
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
      scene.text('    - Your blackmailer has demanded that you bring their payments while in a costume.');
    }
  }
  qspCall(s, 'cards', 'section_close');
  scene.build();
}

function enterCheatmenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  scene.text('<b>Blackmailer:</b>');
  scene.text('    Purge the "Blackmailer" questline: <a href="exec: gs \'blackmailer\', \'purge_all\' & dynamic $cheatmenu[$cheatmenu[\'this_menu\']]">Permanently reset the entire questline!</a>');
  if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['dreamday']) {
    // TODO-QSP: dynamic text:     Minimum days to next dream: <<blackmailQW['dreamday'] - daystart>>.  <a href...
    scene.text(`    Minimum days to next dream: ${((s as any).blackmailQW ?? {})?.['dreamday'] - ((s as any).daystart ?? 0)}.  <a href="exec: blackmailQW['dreamday']=daystart & dynamic $cheatmenu[$cheatmenu['this_menu']]">Set to 0</a>`);
  } else {
    scene.text('    Minimum days to next dream: 0');
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 3) {
    (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'Blackmailer')", { location: "blackmailer" });
    if (((s as any).temp_index ?? 0) >= 0) {
      if (((s as any).temp_ISMSCode ?? 0) !== "") {
        scene.text('    Blackmailer will contact you today.  <a href="exec:gs \'blackmailer\', \'cheatmenu_force_sendsms\' & dynamic $cheatmenu[$cheatmenu[\'this_menu\']]">Force sms now</a>');
      } else {
        if (((s as any).blackmailQW ?? 0)?.['smsday'] === 0) {
          scene.text('    Blackmailer will decide when to contact you tomorrow.  <a href="exec:blackmailQW[\'smsday\']=daystart & dynamic $cheatmenu[$cheatmenu[\'this_menu\']]">Force next sms tomorrow</a>');
        } else {
          // TODO-QSP: dynamic text:     Days to next sms: <<max(1, blackmailQW['smsday']-daystart+1)>>.  <a href="ex...
          scene.text(`    Days to next sms: ${Math.max(1, ((s as any).blackmailQW ?? {})?.['smsday']-((s as any).daystart ?? 0)+1)}.  <a href="exec:blackmailQW['smsday']=daystart-1 & gs 'blackmailer', 'cikl_set_sms' & dynamic $cheatmenu[$cheatmenu['this_menu']]">Force next sms today</a>`);
        }
      }
      if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
        // TODO-QSP: '        ' + $func('wrap', 'v_neg', 'WARNING: You have an unpaid debt.')
      }
    }
  }
  scene.build();
}

function enterCheatmenuForceSendsms(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'Blackmailer')", { location: "blackmailer" });
  if (((s as any).temp_index ?? 0) >= 0) {
    if (((s as any).temp_ISMSCode ?? 0) !== "") {
    }
  }
  scene.build();
}

function enterPurgeAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'DeleteContact', 'Blackmailer');
  qspCall(s, 'telefon', 'DeleteContact', 'Officer_bm');
  // TODO-QSP: gs 'telefon', 'DeleteContact', $blackmailQW['nerdvana_phone_ID']
  qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  scene.build();
}

function enterSetNextPayment(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW ?? {})['next_payment'] = 10 * (Math.floor(Math.random() * 51) + 50);
  ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) + (10 * ((400 * ((s as any).blackmailQW ?? {})?.['total_payment']) / (15000 + ((s as any).blackmailQW ?? {})?.['total_payment'])));
  ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) + (10 * ((200 * ((s as any).blackmailQW ?? {})?.['alter_payment']) / (20000 + ((s as any).blackmailQW ?? {})?.['alter_payment'])));
  (s as any).temp_BM_material_send = ((s as any).blackmailQW ?? {})?.['total_material'] - 1;
  ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) + (10 * ((250 * ((s as any).temp_BM_material_send ?? 0)) / (50 + ((s as any).temp_BM_material_send ?? 0))));
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
    ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) - (1000);
    ((s as any).blackmailQW ?? {})['alter_payment'] = (((s as any).blackmailQW ?? {})['alter_payment'] ?? 0) + (1000);
  }
  if (((s as any).blackmailQW ?? 0)?.['worn_costume'] === -1) {
    ((s as any).blackmailQW ?? {})['costume_punishment'] = 100 * (Math.floor(Math.random() * 21) + 20);
  } else {
    ((s as any).blackmailQW ?? {})['costume_punishment'] = 0;
  }
  ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) + (((s as any).blackmailQW ?? 0)?.['costume_punishment']);
  scene.build();
}

function enterMakePayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    ((s as any).ARGS ?? {})[1] = ((s as any).blackmailQW ?? 0)?.['next_payment'];
  }
  if (((s as any).locArgs?.[1] ?? 0) > ((s as any).blackmailQW ?? 0)?.['next_payment']) {
    ((s as any).ARGS ?? {})[1] = ((s as any).blackmailQW ?? 0)?.['next_payment'];
  }
  if (((s as any).locArgs?.[2] ?? 0) === 'money') {
    // TODO-QSP: gs 'money', 'pay', ARGS[1], 'cash'
    ((s as any).blackmailQW ?? {})['total_payment'] = (((s as any).blackmailQW ?? {})['total_payment'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "blackmailer" }));
  } else {
    ((s as any).blackmailQW ?? {})['alter_payment'] = (((s as any).blackmailQW ?? {})['alter_payment'] ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "blackmailer" }));
  }
  ((s as any).blackmailQW ?? {})['next_payment'] = (((s as any).blackmailQW ?? {})['next_payment'] ?? 0) - (qspUntranslated(s, "ARGS[1]", { location: "blackmailer" }));
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
    ((s as any).blackmailQW ?? {})['toy_fund'] = (((s as any).blackmailQW ?? {})['toy_fund'] ?? 0) + (((s as any).ARGS ?? 0)[1] / 3);
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] <= 0) {
    ((s as any).blackmailQW ?? {})['partial_payment'] = 0;
    qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  } else {
    ((s as any).blackmailQW ?? {})['partial_payment'] = 1;
  }
  scene.build();
}

function enterAddBlackmailSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_i = 0;
  ((s as any).blackmailQW ?? {})['unique_selfie_sent'] = 0;
  // TODO-QSP: :add_blackmail_loop
  if (((s as any).blackmailQW ?? 0)['selfie_image_' + ((s as any).temp_i ?? 0)] === ((s as any).locArgs?.[1] ?? 0)) {
    ((s as any).blackmailQW ?? {})['unique_selfie_sent'] = 1;
    return;
  } else {
    if (((s as any).blackmailQW ?? 0)['selfie_image_' + ((s as any).temp_i ?? 0)] !== '') {
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < 10) {
        // TODO-QSP: jump 'add_blackmail_loop'
      }
      (s as any).temp_i = Math.floor(Math.random() * 10) + 0;
    }
  }
  ((s as any).blackmailQW ?? {})['selfie_image_' + String((s as any).temp_i || '') + ''] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).blackmailQW ?? {})['selfie_location_' + String((s as any).temp_i || '') + ''] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).blackmailQW ?? {})['selfie_dress_' + String((s as any).temp_i || '') + ''] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).blackmailQW ?? {})['selfie_LocIndex_' + String((s as any).temp_i || '') + ''] = qspUntranslated(s, "ARGS[4]", { location: "blackmailer" });
  ((s as any).blackmailQW ?? {})['selfie_number_' + String((s as any).temp_i || '') + ''] = qspUntranslated(s, "ARGS[5]", { location: "blackmailer" });
  ((s as any).blackmailQW ?? {})['total_material'] = (((s as any).blackmailQW ?? {})['total_material'] ?? 0) + (1);
  scene.build();
}

function enterChooseBlackmailImage(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 11) + 0) > 0  ||  ((s as any).locArgs?.[1] ?? 0) === 1) {
  }
  if (((s as any).result ?? 0) === '') {
  }
  scene.build();
}

function enterChoosePackage(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_i2 = 0;
  // TODO-QSP: :package_loop
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0) {
    (s as any).temp_i = 7;
  } else {
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] < 5) {
      (s as any).temp_i = Math.floor(Math.random() * 7) + 1;
    } else {
      if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 5) {
        (s as any).temp_i = Math.floor(Math.random() * 12) + 1;
      } else {
        if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 6) {
          (s as any).temp_i = Math.floor(Math.random() * 18) + 1;
        } else {
          if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 7) {
            (s as any).temp_i = Math.floor(Math.random() * 20) + 1;
          } else {
            if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 8) {
              (s as any).temp_i = Math.floor(Math.random() * 20) + 1;
            } else {
              if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 9) {
                (s as any).temp_i = Math.floor(Math.random() * 30) + 1;
              } else {
                (s as any).temp_i = Math.floor(Math.random() * 20) + 21;
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_i2 = ((s as any).temp_i2 ?? 0) + (1);
  if (((s as any).temp_i2 ?? 0) < 100  &&  ((((s as any).blackmailQW ?? 0)?.['packages_opened']).indexOf((';' + ((100 + ((s as any).temp_i ?? 0)).slice((2)-1)) + ';'))) + 1 >= 0) {
    // TODO-QSP: jump 'package_loop'
  }
  ((s as any).blackmailQW ?? {})['package'] = ((s as any).temp_i ?? 0);
  scene.build();
}

function enterOpenPackage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['packages_opened'] === '') {
    ((s as any).blackmailQW ?? {})['packages_opened'] = ';';
  }
  if (((((s as any).blackmailQW ?? 0)?.['packages_opened']).indexOf((';\' + \'2\' + \';'))) + 1 <= 0) {
    ((s as any).blackmailQW ?? {})['packages_opened'] = (((s as any).blackmailQW ?? {})['packages_opened'] ?? 0) + (((100 + ((s as any).blackmailQW ?? {})?.['inventory']).slice((2)-1)) + ';');
  }
  // TODO-QSP: gs 'blackmailer', 'get_package_content', blackmailQW['inventory']
  if (((s as any).temp_package ?? 0)?.['type'] === 'clothing') {
  }
  ((s as any).blackmailQW ?? {})['inventory'] = 0;
  scene.build();
}

function enterDecreaseToyFund(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'blackmailer', 'get_package_content', ARGS[1]
  if (((s as any).temp_package ?? 0)?.['type'] === 'clothing') {
    ((s as any).blackmailQW ?? {})['toy_fund'] = (((s as any).blackmailQW ?? {})['toy_fund'] ?? 0) - (((s as any).CloPrice ?? 0));
  } else {
    ((s as any).blackmailQW ?? {})['toy_fund'] = 0;
  }
  scene.build();
}

function enterGetPackageContent(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_package = qspUntranslated(s, "ARGS[1]", { location: "blackmailer" });
  if (((s as any).temp_package ?? 0) >= 1  &&  ((s as any).temp_package ?? 0) < 21) {
    (s as any).bm_i = qspFunc(s, 'blackmailer', 'bmid_to_cosplaynumber', ((s as any).temp_package ?? 0));
    ((s as any).temp_package ?? {})['type'] = 'clothing';
    // TODO-QSP: $temp_package['set_vars'] = "gs 'clothing_attributes', 'nerdvana_cosplay', <<bm_i>>"
    // TODO-QSP: $temp_package['add_item'] = "gs 'clothing', 'add_item', 'nerdvana_cosplay', <<bm_i>>"
    ((s as any).temp_package ?? {})['image'] = 'images/pc/items/nerdvana/cosplay/' + qspUntranslated(s, "bm_i>", { location: "blackmailer" }) + '.jpg';
  } else {
    if (((s as any).temp_package ?? 0) >= 21  &&  ((s as any).temp_package ?? 0) <= 25) {
      if (((s as any).temp_package ?? 0) === 21) {
        (s as any).bm_i = 1;
      } else {
        if (((s as any).temp_package ?? 0) === 22) {
          (s as any).bm_i = 11;
        } else {
          if (((s as any).temp_package ?? 0) === 23) {
            (s as any).bm_i = 13;
          } else {
            if (((s as any).temp_package ?? 0) === 24) {
              (s as any).bm_i = 6;
            } else {
              (s as any).bm_i = 18;
            }
          }
        }
      }
      ((s as any).temp_package ?? {})['type'] = 'clothing';
      // TODO-QSP: $temp_package['set_vars'] = "gs 'clothing_attributes', 'salacious_outfits', <<bm_i>>"
      // TODO-QSP: $temp_package['add_item'] = "gs 'clothing', 'add_item', 'salacious_outfits', <<bm_i>>, 0"
      ((s as any).temp_package ?? {})['image'] = 'images/pc/items/salacious/outfits/' + qspUntranslated(s, "bm_i>", { location: "blackmailer" }) + '.jpg';
    } else {
      if (((s as any).temp_package ?? 0) >= 26  &&  ((s as any).temp_package ?? 0) <= 30) {
        if (((s as any).temp_package ?? 0) === 26) {
          (s as any).bm_i = 2;
        } else {
          if (((s as any).temp_package ?? 0) === 27) {
            (s as any).bm_i = 19;
          } else {
            if (((s as any).temp_package ?? 0) === 28) {
              (s as any).bm_i = 66;
            } else {
              if (((s as any).temp_package ?? 0) === 29) {
                (s as any).bm_i = 88;
              } else {
                (s as any).bm_i = 98;
              }
            }
          }
        }
        ((s as any).temp_package ?? {})['type'] = 'clothing';
        // TODO-QSP: $temp_package['set_vars'] = "gs 'clothing_attributes', 'eroto_outfits', <<bm_i>>"
        // TODO-QSP: $temp_package['add_item'] = "gs 'clothing', 'add_item', 'eroto_outfits', <<bm_i>>"
        ((s as any).temp_package ?? {})['image'] = 'images/pc/items/eroto/outfits/' + qspUntranslated(s, "bm_i>", { location: "blackmailer" }) + '.jpg';
      } else {
        if (((s as any).temp_package ?? 0) >= 31  &&  ((s as any).temp_package ?? 0) <= 35) {
          if (((s as any).temp_package ?? 0) === 31) {
            (s as any).bm_i = 7;
          } else {
            if (((s as any).temp_package ?? 0) === 32) {
              (s as any).bm_i = 9;
            } else {
              if (((s as any).temp_package ?? 0) === 33) {
                (s as any).bm_i = 2;
              } else {
                if (((s as any).temp_package ?? 0) === 34) {
                  (s as any).bm_i = 19;
                } else {
                  (s as any).bm_i = 30;
                }
              }
            }
          }
          ((s as any).temp_package ?? {})['type'] = 'clothing';
          // TODO-QSP: $temp_package['set_vars'] = "gs 'clothing_attributes', 'scandalicious_outfits', <<bm_i>>"
          // TODO-QSP: $temp_package['add_item'] = "gs 'clothing', 'add_item', 'scandalicious_outfits', <<bm_i>>"
          ((s as any).temp_package ?? {})['image'] = 'images/pc/items/scandalicious/outfits/' + qspUntranslated(s, "bm_i>", { location: "blackmailer" }) + '.jpg';
        } else {
          if (((s as any).temp_package ?? 0) === 36) {
            (s as any).bm_i = 34;
          } else {
            if (((s as any).temp_package ?? 0) === 37) {
              (s as any).bm_i = 94;
            } else {
              if (((s as any).temp_package ?? 0) === 38) {
                (s as any).bm_i = 129;
              } else {
                if (((s as any).temp_package ?? 0) === 39) {
                  (s as any).bm_i = 95;
                } else {
                  (s as any).bm_i = 149;
                }
              }
            }
          }
          ((s as any).temp_package ?? {})['type'] = 'clothing';
          // TODO-QSP: $temp_package['set_vars'] = "gs 'clothing_attributes', 'scandalicious_dress', <<bm_i>>"
          // TODO-QSP: $temp_package['add_item'] = "gs 'clothing', 'add_item', 'scandalicious_dress', <<bm_i>>"
          ((s as any).temp_package ?? {})['image'] = 'images/pc/items/scandalicious/dress/' + qspUntranslated(s, "bm_i>", { location: "blackmailer" }) + '.jpg';
        }
      }
    }
  }
  scene.build();
}

function enterCosplaynumberToBmid(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).locArgs?.[1] ?? 0) === 78) {
    (s as any).result = 1;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 21) {
      (s as any).result = 2;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 110) {
        (s as any).result = 3;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 26) {
          (s as any).result = 4;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 90) {
            (s as any).result = 5;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 106) {
              (s as any).result = 6;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 31) {
                (s as any).result = 7;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 34) {
                  (s as any).result = 8;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 129) {
                    (s as any).result = 9;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 74) {
                      (s as any).result = 10;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 93) {
                        (s as any).result = 11;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 133) {
                          (s as any).result = 12;
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
  return;
  if (((s as any).locArgs?.[0] ?? 0) === 'bmid_to_cosplaynumber') {
    (s as any).result = 0;
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      (s as any).result = 78;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        (s as any).result = 21;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          (s as any).result = 110;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 4) {
            (s as any).result = 26;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 5) {
              (s as any).result = 90;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6) {
                (s as any).result = 106;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 7) {
                  (s as any).result = 31;
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 8) {
                    (s as any).result = 34;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 9) {
                      (s as any).result = 129;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 10) {
                        (s as any).result = 74;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 11) {
                          (s as any).result = 83;
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 12) {
                            (s as any).result = 133;
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 13) {
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 14) {
                                (s as any).bm_i = 37;
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 15) {
                                  (s as any).bm_i = 86;
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 16) {
                                    (s as any).bm_i = 95;
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 17) {
                                      (s as any).bm_i = 130;
                                    } else {
                                      if (((s as any).locArgs?.[1] ?? 0) === 18) {
                                        (s as any).bm_i = 132;
                                      } else {
                                        if (((s as any).locArgs?.[1] ?? 0) === 19) {
                                          (s as any).bm_i = 138;
                                        } else {
                                          (s as any).bm_i = 104;
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
              }
            }
          }
        }
      }
    }
    return;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init_check':
      enterInitCheck(s, scene);
      break;
    case 'init_blackmail':
      enterInitBlackmail(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'cikl_set_reminder':
      enterCiklSetReminder(s, scene);
      break;
    case 'cikl_set_failure':
      enterCiklSetFailure(s, scene);
      break;
    case 'cikl_set_smsday':
      enterCiklSetSmsday(s, scene);
      break;
    case 'cikl_set_sms':
      enterCiklSetSms(s, scene);
      break;
    case 'cikl_set_package':
      enterCiklSetPackage(s, scene);
      break;
    case 'update_payment_calendar':
      enterUpdatePaymentCalendar(s, scene);
      break;
    case 'journal_quests':
      enterJournalQuests(s, scene);
      break;
    case 'cheatmenu':
      enterCheatmenu(s, scene);
      break;
    case 'cheatmenu_force_sendsms':
      enterCheatmenuForceSendsms(s, scene);
      break;
    case 'purge_all':
      enterPurgeAll(s, scene);
      break;
    case 'set_next_payment':
      enterSetNextPayment(s, scene);
      break;
    case 'make_payment':
      enterMakePayment(s, scene);
      break;
    case 'add_blackmail_selfie':
      enterAddBlackmailSelfie(s, scene);
      break;
    case 'choose_blackmail_image':
      enterChooseBlackmailImage(s, scene);
      break;
    case 'choose_package':
      enterChoosePackage(s, scene);
      break;
    case 'open_package':
      enterOpenPackage(s, scene);
      break;
    case 'decrease_toy_fund':
      enterDecreaseToyFund(s, scene);
      break;
    case 'get_package_content':
      enterGetPackageContent(s, scene);
      break;
    case 'cosplaynumber_to_bmid':
      enterCosplaynumberToBmid(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const blackmailer: LocationDef = {
  name: 'blackmailer',
  title: 'WARNING: You have an unpaid debt.',
  region: 'other',
  enter: enter,
};
