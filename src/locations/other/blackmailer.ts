import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

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
  if ((Number((s as any).locArgs?.[2] ?? 0) === 'inside'  ||  Number((s as any).locArgs?.[2] ?? 0) === 'indoors')) {
    if (((String(((s as any).loc ?? 0)).indexOf(String('church'))) + 1) <= 0) {
      // TODO-QSP: exit
    }
  } else {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'secluded') {
      return;
    }
  }
  if (((s as any).flash_image ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).temp_prob_chance = 300;
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (Math.max(((s as any).fame ?? 0)?.['pav_slut'], ((s as any).fame ?? 0)?.['city_slut']));
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (Math.max(((s as any).fame ?? 0)?.['pav_modelling'], ((s as any).fame ?? 0)?.['city_modelling']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (Math.max(((s as any).fame ?? 0)?.['pav_porn'], ((s as any).fame ?? 0)?.['city_porn']) / 10);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp']);
  (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (20 * Math.min((((s as any).trait_vars ?? {})?.['exhibitionist'] ?? 0) * (((s as any).trait_vars ?? {})?.['exhibitionist'] ?? 0), 9));
  if (((s as any).temp_prob_chance ?? 0) > 600) {
    // TODO-QSP: killvar 'temp_prob_chance'
    // TODO-QSP: exit
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'tits') {
    (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (50);
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'butt') {
      (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (75);
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'pussy') {
        (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (85);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'full') {
          (s as any).temp_prob_chance = ((s as any).temp_prob_chance ?? 0) - (120);
        }
      }
    }
  }
  if ((Math.floor(Math.random() * (((s as any).temp_prob_chance ?? 0) - 0 + 1)) + (0)) >= 5) {
    // TODO-QSP: killvar 'temp_prob_chance'
    // TODO-QSP: exit
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterInitBlackmail(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterInitBlackmail(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['day'] = ((s as any).daystart ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 1;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_day'] = ((s as any).daystart ?? 0);
  if (Number((s as any).locArgs?.[1] ?? 0) === 'panty') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashaction'] = 'panties';
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'pantyrear') {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashaction'] = 'panty clad ass';
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'butt_plug') {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashaction'] = 'butt plug';
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'full') {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashaction'] = 'naked body';
        } else {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashaction'] = ((s as any).locArgs?.[1] ?? 0);
        }
      }
    }
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashimage'] = ((s as any).flash_image ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc'] = ((s as any).loc ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_arg'] = ((s as any).loc_arg ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashregion'] = ((s as any).region ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['total_material'] = 1;
  if (((String(((s as any).loc ?? 0)).indexOf(String('park'))) + 1) > 0) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in a park';
    scene.text('<b>A flash of light</b> briefly brightens the surrounding trees and you see a shadow darting between the trees. The light of the camera flash prickling on your exposed skin.');
  } else {
    if (((String(((s as any).loc ?? 0)).indexOf(String('church'))) + 1) > 0) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in a church';
      scene.text('<b>The flash of a camera</b> illuminates the inside of the church, but the source eludes you.');
    } else {
      if (((String(((s as any).loc ?? 0)).indexOf(String('fuelstation'))) + 1) > 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'while washing cars';
        scene.text('You briefly think a <b>car turned on its headlights</b> before you realize it was the flash of a camera, the source of which is already gone.');
      } else {
        if (((s as any).loc ?? 0) === 'pav_aptcourtev'  ||  ((s as any).loc ?? 0) === 'anushapt') {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_desc'] = 'in front of Maxim';
          scene.text('You think you notice the <b>flash of a camera</b> from the corner of your eye, but its source is already out of view.');
        } else {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['init_flashloc_desc'] = '';
          scene.text('You think you notice the <b>flash of a camera</b> from the corner of your eye, but its source is already out of view.');
        }
      }
    }
  }
  if (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0) {
    qspCall(s, 'arousal', 'flashlite', (-5));
    qspCall(s, 'arousal', 'end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['package_day'] > 0  &&  ((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['package_day']  &&  ((s as any).blackmailQW ?? 0)?.['package'] > 0) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 0;
    // TODO-QSP: gs 'post_office', 'remove_mail', "gs 'blackmailer', 'set_post_act'"
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
    if (((s as any).daystart ?? 0) === ((s as any).blackmailQW ?? 0)?.['smsday']) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSetReminder(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['smsday']) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSetFailure(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    if (((s as any).blackmailQW ?? 0)?.['smsday'] === 0) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSetSmsday(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['smsday']) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSetSms(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['smsday']  &&  ((s as any).blackmailQW ?? 0)?.['toy_fund'] > (Math.floor(Math.random() * 3001) + 2000)  &&  ((s as any).blackmailQW ?? 0)?.['package'] === 0  &&  ((s as any).blackmailQW ?? 0)?.['inventory'] === 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCiklSetPackage(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCiklSetReminder(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_reminder'", "(totminut ...
  // TODO-QSP: end
  scene.build();
}

function enterCiklSetFailure(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS_failure'", "(totminut >...
  // TODO-QSP: end
  scene.build();
}

function enterCiklSetSmsday(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 3) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = (((s as any).blackmailQW ?? {})?.['dreamday'] ?? 0) + 4;
    qspCall(s, 'telefon', 'AddContact', 'Blackmailer', 'icon_na', 1);
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 5) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 6;
      if (((s as any).blackmailQW ?? 0)?.['stage'] === 6) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).blackmailQW['smsday'] ?? 0) + (4 - (((s as any).blackmailQW ?? {})?.['selfie_stage'] ?? 0));
      }
      if (((s as any).blackmailQW ?? 0)?.['stage'] < 8) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).blackmailQW['smsday'] ?? 0) + ((Math.floor(Math.random() * 7) + 0));
      } else {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).blackmailQW['smsday'] ?? 0) + ((Math.floor(Math.random() * 5) + 0));
      }
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterUpdatePaymentCalendar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0  &&  ((s as any).blackmailQW ?? 0)?.['smsday'] > 0) {
    qspCall(s, 'calendar', 'add', 'blackmail_payment_deadline');
  }
  // TODO-QSP: end
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
      // TODO-QSP: dynamic text: You have <<blackmailQW[''smsday''] - daystart>> days left
      scene.text(`You have ${(((s as any).blackmailQW ?? {})?.['smsday'] ?? 0) - ((s as any).daystart ?? '')} days left`);
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
        scene.text(`Your actions have alerted your blackmailer, and he has used your clothed selfies to trick Nerdvana clerk ${((s as any).npc_usedname ?? 0)?.[((s as any).blackmailQW ?? 0)?.['nerdvana_phone_ID'] ?? '']}.`);
      }
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['package'] > 0) {
    scene.text('Your blackmailer has sent you a package, you should go pick it up at the St. Petersburg post office.');
    if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
      if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['package_day'] - 1) {
        // TODO-QSP: dynamic text: You have <<blackmailQW[''package_day'']-daystart>> days left.
        scene.text(`You have ${(((s as any).blackmailQW ?? {})?.['package_day'] ?? 0)-((s as any).daystart ?? '')} days left.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterCheatmenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  scene.text('<b>Blackmailer:</b>');
  scene.text('    Purge the "Blackmailer" questline: <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[$cheatmenu[/u0027this_menu/u0027]] */ return s; }); window.__gameStore.getState().doGoto(/u0027blackmailer/u0027, /u0027purge_all/u0027); return false;">Permanently reset the entire questline!</a>');
  if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['dreamday']) {
    // TODO-QSP: dynamic text:     Minimum days to next dream: <<blackmailQW[''dreamday''] - daystart>>.  <a hr...
    scene.text(`    Minimum days to next dream: ${(((s as any).blackmailQW ?? {})?.['dreamday'] ?? 0) - ((s as any).daystart ?? '')}.  <a href="#" onclick="window.__gameStore.setState((s) => { (s.blackmailQW ??= {})/u0027dreamday/u0027 = s.daystart; /* TODO-QSP: dynamic $cheatmenu[$cheatmenu[/u0027this_menu/u0027]] */ return s; }); return false;">Set to 0</a>`);
  } else {
    scene.text('    Minimum days to next dream: 0');
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 3) {
    (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'Blackmailer')", { location: "blackmailer" });
    if (((s as any).temp_index ?? 0) >= 0) {
      (s as any).temp_ISMSCode = ((s as any).contactISMSCode ?? 0)?.[String((s as any).temp_index ?? 0)];
      if (((s as any).temp_ISMSCode ?? 0) !== "") {
        scene.text('    Blackmailer will contact you today.  <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: dynamic $cheatmenu[$cheatmenu[/u0027this_menu/u0027]] */ return s; }); window.__gameStore.getState().doGoto(/u0027blackmailer/u0027, /u0027cheatmenu_force_sendsms/u0027); return false;">Force sms now</a>');
      } else {
        if (((s as any).blackmailQW ?? 0)?.['smsday'] === 0) {
          scene.text('    Blackmailer will decide when to contact you tomorrow.  <a href="#" onclick="window.__gameStore.setState((s) => { (s.blackmailQW ??= {})/u0027smsday/u0027 = s.daystart; /* TODO-QSP: dynamic $cheatmenu[$cheatmenu[/u0027this_menu/u0027]] */ return s; }); return false;">Force next sms tomorrow</a>');
        } else {
          // TODO-QSP: dynamic text:     Days to next sms: <<max(1, blackmailQW[''smsday'']-daystart+1)>>.  <a href="...
          scene.text(`    Days to next sms: ${Math.max(1, (((s as any).blackmailQW ?? {})?.['smsday'] ?? 0)-((s as any).daystart ?? '')+1)}.  <a href="#" onclick="window.__gameStore.setState((s) => { (s.blackmailQW ??= {})/u0027smsday/u0027 = daystart-1; /* TODO-QSP: dynamic $cheatmenu[$cheatmenu[/u0027this_menu/u0027]] */ return s; }); window.__gameStore.getState().doGoto(/u0027blackmailer/u0027, /u0027cikl_set_sms/u0027); return false;">Force next sms today</a>`);
        }
      }
      if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
        // TODO-QSP: '        ' + $func('wrap', 'v_neg', 'WARNING: You have an unpaid debt.')
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatmenuForceSendsms(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_index = qspUntranslated(s, "arrpos('contact', 'Blackmailer')", { location: "blackmailer" });
  if (((s as any).temp_index ?? 0) >= 0) {
    (s as any).temp_ISMSCode = ((s as any).contactISMSCode ?? 0)?.[String((s as any).temp_index ?? 0)];
    if (((s as any).temp_ISMSCode ?? 0) !== "") {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPurgeAll(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'DeleteContact', 'Blackmailer');
  qspCall(s, 'telefon', 'DeleteContact', 'Officer_bm');
  // TODO-QSP: gs 'telefon', 'DeleteContact', $blackmailQW['nerdvana_phone_ID']
  qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  // TODO-QSP: end
  scene.build();
}

function enterSetNextPayment(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 10 * (Math.floor(Math.random() * 51) + 50);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (10 * ((400 * (((s as any).blackmailQW ?? {})?.['total_payment'] ?? 0)) / (15000 + (((s as any).blackmailQW ?? {})?.['total_payment'] ?? 0))));
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (10 * ((200 * (((s as any).blackmailQW ?? {})?.['alter_payment'] ?? 0)) / (20000 + (((s as any).blackmailQW ?? {})?.['alter_payment'] ?? 0))));
  (s as any).temp_BM_material_send = (((s as any).blackmailQW ?? {})?.['total_material'] ?? 0) - 1;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (10 * ((250 * ((s as any).temp_BM_material_send ?? 0)) / (50 + ((s as any).temp_BM_material_send ?? 0))));
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) - (1000);
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['alter_payment'] = ((s as any).blackmailQW['alter_payment'] ?? 0) + (1000);
  }
  if (((s as any).blackmailQW ?? 0)?.['worn_costume'] === -1) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['costume_punishment'] = 100 * (Math.floor(Math.random() * 21) + 20);
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['costume_punishment'] = 0;
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (((s as any).blackmailQW ?? 0)?.['costume_punishment']);
  // TODO-QSP: end
  scene.build();
}

function enterMakePayment(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).blackmailQW ?? 0)?.['next_payment'];
  }
  if (Number((s as any).locArgs?.[1] ?? 0) > ((s as any).blackmailQW ?? 0)?.['next_payment']) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).blackmailQW ?? 0)?.['next_payment'];
  }
  if (Number((s as any).locArgs?.[2] ?? 0) === 'money') {
    // TODO-QSP: gs 'money', 'pay', ARGS[1], 'cash'
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['total_payment'] = ((s as any).blackmailQW['total_payment'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['alter_payment'] = ((s as any).blackmailQW['alter_payment'] ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) - (((s as any).locArgs?.[1] ?? 0));
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['toy_fund'] = ((s as any).blackmailQW['toy_fund'] ?? 0) + (((s as any).locArgs?.[1] ?? 0) / 3);
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] <= 0) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['partial_payment'] = 0;
    qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['partial_payment'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddBlackmailSelfie(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_i = 0;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['unique_selfie_sent'] = 0;
  // TODO-QSP: :add_blackmail_loop
  if (((s as any).blackmailQW ?? 0)['selfie_image_' + ((s as any).temp_i ?? 0)] === Number((s as any).locArgs?.[1] ?? 0)) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['unique_selfie_sent'] = 1;
    return;
  } else {
    if (((s as any).blackmailQW ?? 0)['selfie_image_' + ((s as any).temp_i ?? 0)] !== '') {
      (s as any).temp_i = ((s as any).temp_i ?? 0) + (1);
      if (((s as any).temp_i ?? 0) < 10) {
        // TODO-QSP: jump 'add_blackmail_loop'
      }
      (s as any).temp_i = (Math.floor(Math.random() * 10) + 0);
    }
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_image_' + String(((s as any).temp_i ?? 0))] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_location_' + String(((s as any).temp_i ?? 0))] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_dress_' + String(((s as any).temp_i ?? 0))] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_LocIndex_' + String(((s as any).temp_i ?? 0))] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_number_' + String(((s as any).temp_i ?? 0))] = ((s as any).locArgs?.[5] ?? 0);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['total_material'] = ((s as any).blackmailQW['total_material'] ?? 0) + (1);
  // TODO-QSP: end
  scene.build();
}

function enterChooseBlackmailImage(s: GameState, scene: SceneBuilder): void {
  (s as any).result = '';
  if ((Math.floor(Math.random() * 11) + 0) > 0  ||  Number((s as any).locArgs?.[1] ?? 0) === 1) {
    (s as any).result = ((s as any).blackmailQW ?? 0)['selfie_image_' + ((s as any).rand ?? 0)(0, ((s as any).in ?? 0)(((s as any).blackmailQW ?? 0)?.[String((s as any).total_material ?? 0)]-1, 9)) + ''];
  }
  if (((s as any).result ?? 0) === '') {
    (s as any).result = ((s as any).blackmailQW ?? 0)?.['init_flashimage'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterChoosePackage(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_i2 = 0;
  // TODO-QSP: :package_loop
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0) {
    (s as any).temp_i = 7;
  } else {
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] < 5) {
      (s as any).temp_i = (Math.floor(Math.random() * 7) + 1);
    } else {
      if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 5) {
        (s as any).temp_i = (Math.floor(Math.random() * 12) + 1);
      } else {
        if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 6) {
          (s as any).temp_i = (Math.floor(Math.random() * 18) + 1);
        } else {
          if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 7) {
            (s as any).temp_i = (Math.floor(Math.random() * 20) + 1);
          } else {
            if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 8) {
              (s as any).temp_i = (Math.floor(Math.random() * 20) + 1);
            } else {
              if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 9) {
                (s as any).temp_i = (Math.floor(Math.random() * 30) + 1);
              } else {
                (s as any).temp_i = (Math.floor(Math.random() * 20) + 21);
              }
            }
          }
        }
      }
    }
  }
  (s as any).temp_i2 = ((s as any).temp_i2 ?? 0) + (1);
  if (((s as any).temp_i2 ?? 0) < 100  &&  ((String(((s as any).blackmailQW ?? 0)?.['packages_opened']).indexOf(String(';' + (String(100 + ((s as any).temp_i ?? 0)).slice((2)-1)) + ';'))) + 1) >= 0) {
    // TODO-QSP: jump 'package_loop'
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = ((s as any).temp_i ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterOpenPackage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['packages_opened'] === '') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['packages_opened'] = ';';
  }
  if (((String(((s as any).blackmailQW ?? 0)?.['packages_opened']).indexOf(String(';' + (String(100 + ((s as any).blackmailQW ?? 0)?.['inventory']).slice((2)-1)) + ';'))) + 1) <= 0) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['packages_opened'] = ((s as any).blackmailQW['packages_opened'] ?? 0) + ((String(100 + (((s as any).blackmailQW ?? {})?.['inventory'] ?? 0)).slice((2)-1)) + ';');
  }
  // TODO-QSP: gs 'blackmailer', 'get_package_content', blackmailQW['inventory']
  if (((s as any).temp_package ?? 0)?.['type'] === 'clothing') {
  }
  (s as any).result = ((s as any).temp_package ?? 0)?.['image'];
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['inventory'] = 0;
  // TODO-QSP: end
  scene.build();
}

function enterDecreaseToyFund(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'blackmailer', 'get_package_content', ARGS[1]
  if (((s as any).temp_package ?? 0)?.['type'] === 'clothing') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['toy_fund'] = ((s as any).blackmailQW['toy_fund'] ?? 0) - (((s as any).CloPrice ?? 0));
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['toy_fund'] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetPackageContent(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_package = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).temp_package ?? 0) >= 1  &&  ((s as any).temp_package ?? 0) < 21) {
    (s as any).bm_i = qspFunc(s, 'blackmailer', 'bmid_to_cosplaynumber', ((s as any).temp_package ?? 0));
    ((s as any).temp_package = (s as any).temp_package ?? {})['type'] = 'clothing';
    ((s as any).temp_package = (s as any).temp_package ?? {})['set_vars'] = 'gs \'clothing_attributes\', \'nerdvana_cosplay\', ' + ((s as any).bm_i ?? 0) + '';
    ((s as any).temp_package = (s as any).temp_package ?? {})['add_item'] = 'gs \'clothing\', \'add_item\', \'nerdvana_cosplay\', ' + ((s as any).bm_i ?? 0) + '';
    ((s as any).temp_package = (s as any).temp_package ?? {})['image'] = 'images/pc/items/nerdvana/cosplay/' + ((s as any).bm_i ?? 0) + '.jpg';
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
      ((s as any).temp_package = (s as any).temp_package ?? {})['type'] = 'clothing';
      ((s as any).temp_package = (s as any).temp_package ?? {})['set_vars'] = 'gs \'clothing_attributes\', \'salacious_outfits\', ' + ((s as any).bm_i ?? 0) + '';
      ((s as any).temp_package = (s as any).temp_package ?? {})['add_item'] = 'gs \'clothing\', \'add_item\', \'salacious_outfits\', ' + ((s as any).bm_i ?? 0) + ', 0';
      ((s as any).temp_package = (s as any).temp_package ?? {})['image'] = 'images/pc/items/salacious/outfits/' + ((s as any).bm_i ?? 0) + '.jpg';
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
        ((s as any).temp_package = (s as any).temp_package ?? {})['type'] = 'clothing';
        ((s as any).temp_package = (s as any).temp_package ?? {})['set_vars'] = 'gs \'clothing_attributes\', \'eroto_outfits\', ' + ((s as any).bm_i ?? 0) + '';
        ((s as any).temp_package = (s as any).temp_package ?? {})['add_item'] = 'gs \'clothing\', \'add_item\', \'eroto_outfits\', ' + ((s as any).bm_i ?? 0) + '';
        ((s as any).temp_package = (s as any).temp_package ?? {})['image'] = 'images/pc/items/eroto/outfits/' + ((s as any).bm_i ?? 0) + '.jpg';
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
          ((s as any).temp_package = (s as any).temp_package ?? {})['type'] = 'clothing';
          ((s as any).temp_package = (s as any).temp_package ?? {})['set_vars'] = 'gs \'clothing_attributes\', \'scandalicious_outfits\', ' + ((s as any).bm_i ?? 0) + '';
          ((s as any).temp_package = (s as any).temp_package ?? {})['add_item'] = 'gs \'clothing\', \'add_item\', \'scandalicious_outfits\', ' + ((s as any).bm_i ?? 0) + '';
          ((s as any).temp_package = (s as any).temp_package ?? {})['image'] = 'images/pc/items/scandalicious/outfits/' + ((s as any).bm_i ?? 0) + '.jpg';
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
          ((s as any).temp_package = (s as any).temp_package ?? {})['type'] = 'clothing';
          ((s as any).temp_package = (s as any).temp_package ?? {})['set_vars'] = 'gs \'clothing_attributes\', \'scandalicious_dress\', ' + ((s as any).bm_i ?? 0) + '';
          ((s as any).temp_package = (s as any).temp_package ?? {})['add_item'] = 'gs \'clothing\', \'add_item\', \'scandalicious_dress\', ' + ((s as any).bm_i ?? 0) + '';
          ((s as any).temp_package = (s as any).temp_package ?? {})['image'] = 'images/pc/items/scandalicious/dress/' + ((s as any).bm_i ?? 0) + '.jpg';
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCosplaynumberToBmid(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === 78) {
    (s as any).result = 1;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 21) {
      (s as any).result = 2;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 110) {
        (s as any).result = 3;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 26) {
          (s as any).result = 4;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 90) {
            (s as any).result = 5;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 106) {
              (s as any).result = 6;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 31) {
                (s as any).result = 7;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 34) {
                  (s as any).result = 8;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === 129) {
                    (s as any).result = 9;
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === 74) {
                      (s as any).result = 10;
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) === 93) {
                        (s as any).result = 11;
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) === 133) {
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
  scene.build();
}

function enterBmidToCosplaynumber(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
    (s as any).result = 78;
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 2) {
      (s as any).result = 21;
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 3) {
        (s as any).result = 110;
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 4) {
          (s as any).result = 26;
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 5) {
            (s as any).result = 90;
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 6) {
              (s as any).result = 106;
            } else {
              if (Number((s as any).locArgs?.[1] ?? 0) === 7) {
                (s as any).result = 31;
              } else {
                if (Number((s as any).locArgs?.[1] ?? 0) === 8) {
                  (s as any).result = 34;
                } else {
                  if (Number((s as any).locArgs?.[1] ?? 0) === 9) {
                    (s as any).result = 129;
                  } else {
                    if (Number((s as any).locArgs?.[1] ?? 0) === 10) {
                      (s as any).result = 74;
                    } else {
                      if (Number((s as any).locArgs?.[1] ?? 0) === 11) {
                        (s as any).result = 83;
                      } else {
                        if (Number((s as any).locArgs?.[1] ?? 0) === 12) {
                          (s as any).result = 133;
                        } else {
                          if (Number((s as any).locArgs?.[1] ?? 0) === 13) {
                          } else {
                            if (Number((s as any).locArgs?.[1] ?? 0) === 14) {
                              (s as any).bm_i = 37;
                            } else {
                              if (Number((s as any).locArgs?.[1] ?? 0) === 15) {
                                (s as any).bm_i = 86;
                              } else {
                                if (Number((s as any).locArgs?.[1] ?? 0) === 16) {
                                  (s as any).bm_i = 95;
                                } else {
                                  if (Number((s as any).locArgs?.[1] ?? 0) === 17) {
                                    (s as any).bm_i = 130;
                                  } else {
                                    if (Number((s as any).locArgs?.[1] ?? 0) === 18) {
                                      (s as any).bm_i = 132;
                                    } else {
                                      if (Number((s as any).locArgs?.[1] ?? 0) === 19) {
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
  // TODO-QSP: end
  scene.build();
}

function enterRegisterCosplayUsed(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = qspFunc(s, 'blackmailer', 'cosplaynumber_to_bmid', ((s as any).clothingwornnumber ?? 0));
  }
  (s as any).temp_cu = (String(100 + ((s as any).locArgs?.[1] ?? 0)).slice((2)-1));
  if (((s as any).blackmailQW ?? 0)?.['cosplays_used'] === '') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplays_used'] = ';';
  }
  if ((!((String(((s as any).blackmailQW ?? 0)?.['cosplays_used']).indexOf(String(';' + ((s as any).temp_cu ?? 0) + ';'))) + 1))) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplays_used'] = ((s as any).blackmailQW['cosplays_used'] ?? 0) + ('' + ((s as any).temp_cu ?? 0) + ';');
  }
  // TODO-QSP: end
  scene.build();
}

function enterChooseRandomCosplayUsed(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 7;
  if ((String(((s as any).blackmailQW ?? 0)?.['cosplays_used']).length) < 4) {
    return;
  }
  (s as any).temp_tries = 0;
  // TODO-QSP: :choose_random_cosplay_loop
  (s as any).temp_rand = (Math.floor(Math.random() * 12) + 1);
  if ((!((String(((s as any).blackmailQW ?? 0)?.['cosplays_used']).indexOf(String(';' + (String(100 + ((s as any).temp_rand ?? 0)).slice((2)-1)) + ';'))) + 1))) {
    (s as any).temp_tries = ((s as any).temp_tries ?? 0) + (1);
    if (((s as any).temp_tries ?? 0) < 1000) {
      // TODO-QSP: jump 'choose_random_cosplay_loop'
    } else {
      (s as any).temp_rand = 7;
    }
  }
  (s as any).result = ((s as any).temp_rand ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetCosplayImg(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_i = qspFunc(s, 'blackmailer', 'cosplaynumber_to_bmid', ((s as any).locArgs?.[1] ?? 0));
  if ((!((s as any).temp_i ?? 0))) {
    (s as any).temp_i = 7;
  }
  (s as any).result = 'images/locations/shared/park/blackmailer/cosplay' + ((s as any).temp_i ?? 0) + '.jpg';
  return;
  // TODO-QSP: end
  scene.build();
}

function enterBlackmailDreamEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['dreamday']) {
    // TODO-QSP: exit
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] <= 2) {
    // TODO-QSP: exit
  }
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: exit
  }
  // TODO-QSP: $sleep_events[] = "gs 'blackmailer', 'photo_dream1'"
  if (((s as any).blackmailQW ?? 0)?.['total_material'] > 1) {
    // TODO-QSP: $sleep_events[] = "gs 'blackmailer', 'photo_dream3'"
  }
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 1) {
    // TODO-QSP: $sleep_events[] = "gs 'blackmailer', 'cosplay_dream1'"
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackmailSleepEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['dreamday']) {
    // TODO-QSP: exit
  }
  if ((Math.floor(Math.random() * 60) + 0) > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 1) {
    // TODO-QSP: $sleep_events_priority[] = "gt 'blackmailer', 'photo_dream1'"
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] === 2) {
      // TODO-QSP: $sleep_events_priority[] = "gt 'blackmailer', 'photo_dream2'"
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 3  &&  (!(Math.floor(Math.random() * 9) + 0))) {
    // TODO-QSP: $sleep_events_priority[] = "gt 'blackmailer', 'photo_dream2'"
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlackmailDreams(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 0) {
    // TODO-QSP: exit
  }
  if (((s as any).daystart ?? 0) < ((s as any).blackmailQW ?? 0)?.['dreamday']) {
    // TODO-QSP: exit
  }
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 1) {
    // TODO-QSP: $sleep_events_priority[] = "gs 'blackmailer', 'photo_dream1'"
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] === 2) {
      // TODO-QSP: $sleep_events_priority[] = "gt 'blackmailer', 'photo_dream2'"
    } else {
      (s as any).temp_rand = (Math.floor(Math.random() * 10) + 0);
      if (((s as any).temp_rand ?? 0) < 5) {
      } else {
        if (((s as any).temp_rand ?? 0) < 8) {
          // TODO-QSP: $sleep_events[] = "gt 'blackmailer', 'photo_dream1'"
        } else {
          if (((s as any).temp_rand ?? 0) < 9) {
            // TODO-QSP: $sleep_events[] = "gt 'blackmailer', 'photo_dream2'"
          }
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterPhotoDream1(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['dreamday'] = ((s as any).daystart ?? 0) + 3;
  scene.text('<center><b>Dream</b></center>');
  scene.img(`${((s as any).blackmailQW ?? 0)?.['init_flashimage'] ?? ''}`);
  (s as any).temp_dream_text = 'You dream about getting caught while flashing your ';
  // TODO-QSP: $temp_dream_text += $blackmailQW['init_flashaction']
  if (((s as any).blackmailQW ?? 0)?.['init_flashloc_desc'] !== '') {
    // TODO-QSP: $temp_dream_text += ' ' + $blackmailQW['init_flashloc_desc']
  }
  // TODO-QSP: $temp_dream_text += ', your skin prickling from the light of unending camera flashes.'
  if (((String('panty;pantyrear;bra').indexOf(String(((s as any).blackmailQW ?? 0)?.['init_flashaction']))) + 1) > 0) {
    qspCall(s, 'arousal', 'flashlite', (-5));
  } else {
    qspCall(s, 'arousal', 'flash', (-5));
  }
  qspCall(s, 'arousal', 'end');
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 1) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 2;
    scene.actions([
      { label: 'Continue sleeping', goto: ['sleep_events', 'event_end', 'sleep'] },
    ]);
  } else {
    qspCall(s, 'dream_events', 'event_end');
  }
  scene.build();
}

function enterPhotoDream2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 2) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 3;
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 6;
    qspCall(s, 'telefon', 'AddContact', 'Blackmailer', 'icon_na', 1);
    // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', 'Blackmailer', "gs 'blackmailer', 'Add_SMS1'", "daystart > blackma...
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['dreamday'] = ((s as any).daystart ?? 0) + 3;
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A29'] >= 10) {
    scene.text('<center><b>Dream</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    // TODO-QSP: dynamic text: You dream that your <<$npc_nickname[''A29'']>> is sitting at the kitchen table, ...
    scene.text(`You dream that your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is sitting at the kitchen table, looking somber, almost defeated, reading what seems to be a letter.`);
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Ask your ' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + ' what\'s wrong', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/mum_gyno2.jpg');
    // TODO-QSP: dynamic text: You walk up to her and ask "What''s wrong <<$npc_nickname[''A29'']>>?"
    scene.text(`You walk up to her and ask "What's wrong ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}?"`);
    scene.text('She drops the letter and see that it is accompanied by a picture.');
    scene.actions([
      { label: 'Look at the picture', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img(`${((st as any).blackmailQW ?? 0)?.['init_flashimage'] ?? ''}`);
    (st as any).temp_dream_text = 'You get a clear look at the picture depicting you flashing your ';
    // TODO-QSP: $temp_dream_text += $blackmailQW['init_flashaction']
    if (((st as any).blackmailQW ?? 0)?.['init_flashloc_desc'] !== '') {
      // TODO-QSP: $temp_dream_text += ' ' + $blackmailQW['init_flashloc_desc']
    }
    // TODO-QSP: $temp_dream_text += '.'
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: dynamic text: Overcoming the initial shock, you can barely hear that your <<$npc_nickname[''A2...
    scene.text(`Overcoming the initial shock, you can barely hear that your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} is speaking to you, though you don't register what she's saying to you.`);
    scene.actions([
      { label: 'Listen to your mother', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/spank.jpg');
    // TODO-QSP: dynamic text: "Oh, you slut! Your father and I worked so hard to raise you as a decent person,...
    scene.text(`"Oh, you slut! Your father and I worked so hard to raise you as a decent person, hoping you would find a good husband some day and it turns out you're a whore who gets off on showing her ${((st as any).blackmailQW ?? 0)?.['init_flashaction'] ?? ''} to strangers!"`);
    scene.text('Suddenly her expression steels, her mind made up. "You can still be saved. I will turn you away from this errant path, you will not shame this family even if I have to beat the sin out of you."');
    scene.text('She grabs your arm and yanks you over kitchen table, ripping donw your pants as she reaches for something outside of your view.');
    scene.text('You hear sound of metal and leather, the feel of thick, rough, leather against your naked behind. The sound as she cracks it like a whip. "This is for your own good, someday you\'ll understand."');
    scene.text('…');
    scene.text('"Someday you will."');
    scene.actions([
      { label: 'Brace yourself', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img('images/characters/pavlovsk/resident/mom/hug_sad1.jpg');
    // TODO-QSP: dynamic text: Bracing yourself for the pain that never comes, the dream shifts. You are left o...
    scene.text(`Bracing yourself for the pain that never comes, the dream shifts. You are left on the outside looking in, the house a mess, your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} crying, ${((st as any).npc_nickname ?? 0)?.['A34'] ?? ''} and your ${((st as any).npc_nickname ?? 0)?.['A28'] ?? ''} nowhere to be seen.`);
    scene.text('The lingering feelings of a happy family quickly fading.');
    scene.actions([
      { label: 'Continue sleeping', handler: (st: GameState) => {
    qspCall(st, 'sleep_events', 'event_end', 'sleep');
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
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).grupTipe ?? 0) !== 5) {
      scene.text('<center><b>Dream</b></center>');
      scene.img('images/locations/pavlovsk/school/building/locker.jpg');
      scene.text('You dream that it\'s the end of a long school day, a tired track back to your lockers, the drab hallways, the monotonous marching of time.');
      scene.text('Opening your locker to take your stuff, ready for the same walk home, you yelp in surprise as hundreds of polaroids flow out of your opened locker. Similar shouts of surprise happen all around you as even more polaroids burst from their lockers too.');
      scene.text('As the surprise fades you can hear snickering around you, your friends holding the pictures pointing and laughing at you.');
      scene.actions([
        { label: 'Grab a polaroid', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img(`${((st as any).blackmailQW ?? 0)?.['init_flashimage'] ?? ''}`);
    (st as any).temp_dream_text = 'You grab one of the pictures and see yourself flashing your ';
    // TODO-QSP: $temp_dream_text += $blackmailQW['init_flashaction']
    if (((st as any).blackmailQW ?? 0)?.['init_flashloc_desc'] !== '') {
      // TODO-QSP: $temp_dream_text += ' ' + $blackmailQW['init_flashloc_desc']
    }
    // TODO-QSP: $temp_dream_text += '.'
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.text('The laughter around you grows, you are surrounded by a sea of people holding your picture and laughing at you.');
    scene.text('Wading through the ocean of polaroids, you are ever confronted with the fact that you have lost the respect of your former friends.');
    scene.actions([
      { label: 'Continue sleeping', goto: ['sleep_events', 'event_end', 'sleep'] },
    ]);
  } },
      ]);
    } else {
      scene.text('<center><b>Dream</b></center>');
      scene.img('images/locations/pavlovsk/gorodok.jpg');
      scene.text('You dream that you\'re walking through Pavlovsk on a beautiful, windless, cloudless, sunny afternoon, the soft hum of cars, people, wind, and birds fills your ears as the simmering heat of the sun caresses your skin.');
      scene.text('Snippets of conversations happening around you press against the edges of your mind.');
      scene.text('"…ink that\'s h…", "…ooks li…", "…ouldn\'t da…", "…at a sl…"');
      scene.text('You can\'t really under stand what\'s being said as the harsh wind rips the words from the air, but from the way that they\'re looking at the newspaper you guess that\'s what they\'re talking about.');
      scene.actions([
        { label: 'Head to the post office to satiate your curriosity', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img('images/locations/pavlovsk/pavresn.jpg');
    scene.text('You hurry to the post office to get a copy of your own, the wind howling in your ears. The cold sends shivers down you spine as the rain beats relentless in your face.');
    scene.text('When you finally arrive you see the postmaster, an older man, look at you strangely. Deafening thunder shakes the building, rain drums loudly against the windows as lightning flashes outside.');
    scene.actions([
      { label: 'Buy a newspaper', handler: (st: GameState) => {
    scene.text('<center><b>Dream</b></center>');
    scene.img(`${((st as any).blackmailQW ?? 0)?.['init_flashimage'] ?? ''}`);
    (st as any).temp_dream_text = 'The postmaster distandly hands you a newspaper, and on the front cover you see a picture of yourself flashing your ';
    // TODO-QSP: $temp_dream_text += $blackmailQW['init_flashaction']
    if (((st as any).blackmailQW ?? 0)?.['init_flashloc_desc'] !== '') {
      // TODO-QSP: $temp_dream_text += ' ' + $blackmailQW['init_flashloc_desc']
    }
    // TODO-QSP: $temp_dream_text += '.'
    qspCall(st, 'arousal', 'flash', (-5));
    qspCall(st, 'arousal', 'end');
    scene.text('"I didn\'t know that you were such a whore!", "That\'s really her, what a slut!", "Maybe she\'ll let us fuck her too!"');
    scene.text('You run outside into the raging storm, the insults piercing through, chasing you.');
    scene.actions([
      { label: 'Continue sleeping', goto: ['sleep_events', 'event_end', 'sleep'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterPhotoDream3(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['dreamday'] = ((s as any).daystart ?? 0) + 3;
  (s as any).temp_dream_image = qspFunc(s, 'blackmailer', 'choose_blackmail_image', 1);
  scene.text('<center><b>Dream</b></center>');
  scene.img(`${((s as any).temp_dream_image ?? '')}`);
  scene.text('You dream about sending a selfie to your blackmailer, tingles in you loins as you hit the send button.');
  qspCall(s, 'arousal', 'flashlite', (-5));
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterCosplayDream1(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['dreamday'] = ((s as any).daystart ?? 0) + 3;
  (s as any).temp_dream_image = qspFunc(s, 'blackmailer', 'get_cosplay_img', qspFunc(s, 'blackmailer', 'choose_random_cosplay_used'));
  scene.text('<center><b>Dream</b></center>');
  scene.img(`${((s as any).temp_dream_image ?? '')}`);
  scene.text('You dream about walking through the park in cosplay as your blackmailer demands, tingles in you loins as eyes follow you around.');
  qspCall(s, 'arousal', 'flashlite', (-5));
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSetParkAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
    scene.actions([
      { label: 'Walk to the fourth bench to pay your blackmailer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    if (((st as any).blackmailQW ?? 0)?.['stage'] === 4) {
      qspGoto(st, 'blackmailer', 'park1');
    } else {
      if (((st as any).blackmailQW ?? 0)?.['stage'] === 7) {
        qspGoto(st, 'blackmailer', 'park2');
      } else {
        qspGoto(st, 'blackmailer', 'park_repeat');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPark1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/park/bench_6.jpg');
  scene.text('You spot the bench that your blackmailer is talking about, and take a seat at the edge of it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hide the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).blackmailQW ?? 0)?.['next_payment'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      if (((st as any).blackmailQW ?? 0)?.['stage'] === 4) {
        ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['stage'] = 5;
      }
      qspCall(st, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
      ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['smsday'] = 0;
      // TODO-QSP: gs 'blackmailer', 'make_payment', blackmailQW['next_payment'], 'money'
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'stat', '');
      scene.img('images/locations/shared/park/blackmailer/dropoff.jpg');
      scene.text('You descretely hide the money inside a nearby paper bag and hide it on the side of the bench.');
      scene.actions([
        { label: 'Quickly walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
    { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterPark2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0  ||  ((s as any).clothingworntype ?? 0) !== 'nerdvana_cosplay') {
    scene.img('images/locations/shared/park/bench_6.jpg');
    scene.text('You walk to the familiar bench and take a seat at the edge of it.');
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0) {
      scene.actions([
        { label: 'Hide the money  [+$func(\'wrap\', \'neg\', \'(Open the package)...]', handler: (st: GameState) => {
    scene.text('<br>You need to open the package to do this.');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Hide the money  [+$func(\'wrap\', \'neg\', \'(Wear the costume)...]', handler: (st: GameState) => {
    scene.text('<br>You need to wear the costume to do this.');
  } },
      ]);
    }
  } else {
    scene.img('images/locations/shared/park/blackmailer/cosplay7.jpg');
    scene.text('As you walk through the park, you try and draw as little attention to yourself as you possibly can.');
    scene.actions([
      { label: 'Go to the bench', handler: (st: GameState) => {
    scene.img('images/locations/shared/park/blackmailer/cosplay7_1.jpg');
    scene.text('You walk to the familiar bench and take a seat at the edge of it.');
    scene.actions([
      { label: 'Hide the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).blackmailQW ?? 0)?.['next_payment'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['stage'] = 8;
      qspCall(st, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
      ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['smsday'] = 0;
      ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['cosplay_stage'] = 1;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 7]; enterRegisterCosplayUsed(s, scene); (st as any).locArgs = __savedLocArgs; }
      // TODO-QSP: gs 'blackmailer', 'make_payment', blackmailQW['next_payment'], 'money'
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'stat', '');
      scene.img('images/locations/shared/park/blackmailer/dropoff.jpg');
      scene.text('You can only hope that this getup doesn\'t draw too much attention to you as you try to descretely put the money inside a nearby paper bag and hide it on the side of the bench.');
      scene.actions([
        { label: 'Quickly walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterParkRepeat(s: GameState, scene: SceneBuilder): void {
  scene.img(`${qspFunc(s, 'blackmailer', 'get_park_img')}`);
  scene.text('You walk to the familiar bench and take a seat at the edge of it.');
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0  ||  ((s as any).clothingworntype ?? 0) === 'nerdvana_cosplay') {
    scene.actions([
      { label: 'Hide the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).blackmailQW ?? 0)?.['next_payment'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      if (((st as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0) {
        qspGoto(st, 'blackmailer', 'park_repeat_hide');
      } else {
        if ((!(Math.floor(Math.random() * 10) + 0))) {
          ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['worn_costume'] = 2;
        } else {
          ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['worn_costume'] = 1;
        }
        qspGoto(st, 'blackmailer', 'park_repeat_hide', '1');
      }
    }
  } },
    ]);
  } else {
    qspCall(s, 'willpower', 'humiliation', 'resist', 'medium');
    scene.actions([
      { label: 'Hide the money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', ((st as any).blackmailQW ?? 0)?.['next_payment'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        s.scene = { ...s.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
      } else {
        qspCall(st, 'willpower', 'humiliation', 'resist', 'medium');
        qspCall(st, 'willpower', 'pay', 'resist');
        if ((!(Math.floor(Math.random() * 10) + 0))) {
          ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['worn_costume'] = (-2);
        } else {
          ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['worn_costume'] = (-1);
        }
        // TODO-QSP: gt 'blackmailer', 'park_repeat_hide', -1
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterParkRepeatHide(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = 0;
  // TODO-QSP: gs 'blackmailer', 'make_payment', blackmailQW['next_payment'], 'money'
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/blackmailer/dropoff.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 0) {
    scene.text('You descretely put the money inside a nearby paper bag and hide it on the side of the bench.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === -1) {
      scene.text('You try to descretely put the money inside a nearby paper bag and hide it on the side of the bench.');
      if (((s as any).blackmailQW ?? 0)?.['resist'] > 0) {
        scene.text('You can only hope that the police have scared off the blackmailer from checking up on you');
      } else {
        scene.text('You can only hope that the blackmailer isn\'t currently watching you.');
      }
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
        scene.text('You can only hope that this getup doesn\'t draw too much attention to you as you try to descretely put the money inside a nearby paper bag and hide it on the side of the bench.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).clothingwornnumber ?? 0)]; enterRegisterCosplayUsed(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Quickly walk away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGetParkImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 0  ||  ((s as any).clothingworntype ?? 0) !== 'nerdvana_cosplay') {
    (s as any).result = 'images/locations/shared/park/bench_6.jpg';
  } else {
    (s as any).result = qspFunc(s, 'blackmailer', 'get_cosplay_img', ((s as any).clothingwornnumber ?? 0));
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSetPoliceAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 4  &&  ((s as any).blackmailQW ?? 0)?.['escape'] === 0) {
    scene.actions([
      { label: 'Report that you\'re being blackmailed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    qspGoto(st, 'blackmailer', 'police1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPolice1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/pavlovsk/police/pavrec.jpg');
    scene.text('You walk up to a bored looking cop shuffling about some paperwork.');
  } else {
    scene.img('images/locations/city/citycenter/police/cityrec.jpg');
    scene.text('You walk up to a window, you pick up the phone and hear a buzzer sound on the other side. One of the officers picks it up without hesitation and looks at you.');
  }
  scene.text('"Can I help you?"');
  scene.text('"I-I\'m being blackmailed" you stammer. The cops eyebrow raises slightly, but other than that his expression doesn\'t change.');
  if (((s as any).region ?? 0) === 'pav') {
    scene.text('"Follow me, we can take your statement over here."');
  } else {
    scene.text('"Someone will come out to meet you. Follow them and they\'ll take your statement in the back."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/interrogation1.jpg');
    if (((st as any).region ?? 0) === 'pav') {
      scene.text('You sit down at a shoddy looking desk and another officer who looks only marginally more competent than the one who greeted you sits down across from you.');
    } else {
      scene.text('As promised, someone comes out and takes you into their office space behind. You sit down at a shoddy looking desk and the officer takes his place on the other side of it.');
    }
    scene.text('"Alright ma\'am, you stated that you were being blackmailed. Could you please explain the situation?"');
    qspCall(st, 'willpower', 'flash', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Tell them that somebody caught you flashing your ' + String(((st as any).blackmailQW ?? 0)?.['init_flashaction'] ?? '' ?? '') + ' [+iif($blackmailQW[\'init_flashloc_desc\'] =...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Tell them that somebody caught you flashing your ' + String(((st as any).blackmailQW ?? 0)?.['init_flashaction'] ?? '' ?? '') + ' [+iif($blackmailQW[\'init_flashloc_desc\'] =...]', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/interrogation2.jpg');
    scene.text('"Some creep took a picture of me and is demanding money or he\'ll release the picture!"');
    scene.text('"Hmm, how did this person contact you?"');
    scene.text('"He texted me."');
    scene.text('You see a stark of hope flash through the officers eyes, if you could show us the texts we might be able to locate him."');
    if ((Array.isArray((st as any).SMSContact) ? ((st as any).SMSContact as any[]).indexOf('Blackmailer') : -1) >= 0) {
      scene.actions([
        { label: 'Show them the messages', handler: (st: GameState) => {
    if (((st as any).blackmailQW ?? 0)?.['blackmail_image_chosen'] === '') {
      ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['blackmail_image_chosen'] = ((st as any).blackmailQW ?? 0)?.['init_flashimage'];
    }
    ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['escape'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`${((st as any).blackmailQW ?? 0)?.['blackmail_image_chosen'] ?? ''}`);
    scene.text('You open your phone and show the police officers the messages, and the images that you were send. You see the officer raise his eyebrow and you think you can almost hear him mutter "accidentally?" under his breath.');
    scene.text('The officer fuddles around with you phone for a few minutes, his expression darkning with every bygone moment.');
    scene.text('"Ma\'am, we\'re taking this very seriously, but the perp was smart and hid his telephone number. We\'ll try our best, stake out this drop-off location, but I don\'t have high hopes that we\'ll catch him quick enough."');
    scene.text('"I\'m so sorry."');
    scene.text('A sense of defeat and humiliation fills you, the need to remove yourself from this situation is almost unbearable.');
    scene.text('"We will do everything we can, and here, take my card. Anything you need."');
    scene.text('You pocket the card without even looking at it, and quickly hurry out the station.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetOfficerContact(s, scene); (st as any).locArgs = __savedLocArgs; }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Claim you deleted the messages', goto: ['blackmailer', 'police_deleted'] },
      ]);
    } else {
      scene.actions([
        { label: 'Say you deleted the messages', goto: ['blackmailer', 'police_deleted'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'This is too embarrassing, flee the police station', handler: (st: GameState) => {
    ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['escape'] = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    if (((st as any).region ?? 0) === 'pav') {
      scene.img('images/locations/pavlovsk/police/pavext.jpg');
    } else {
      scene.img('images/locations/city/citycenter/police/cityext.jpg');
    }
    // TODO-QSP: dynamic text: Sitting in the interrogation room with the police officer, the situation suddenl...
    scene.text('Sitting in the interrogation room with the police officer, the situation suddenly comes crashing into you. You\'re going to have to show some proof. That you were flashing your ' + ((st as any).blackmailQW ?? 0)?.['init_flashaction'] ?? '' + '\' + iif($blackmailQW[\'init_flashloc_desc\'] = \', \', \' ' + ((st as any).blackmailQW ?? 0)?.['init_flashloc_desc'] ?? '' + '\') + \'. They will see the texts, the photos. They will see you for who you must be on the inside. You can already feel their eyes judging you.');
    scene.text('"I-I-I can\'t, I can\'t, I can\'t…" you manage to push out, nearly hyper-ventilating.');
    scene.text('You nearly jump up out of the chair, backing up towards the door. Your eyes wide with panic "I\'m sorry, I was mistaken".');
    scene.text('The police officer just sighs and moves towards the door "If you change your mind, you kn…"');
    scene.text('The remainder of the officers words fall on deaths ear as you rush out of the police station.');
    scene.actions([
      { label: 'Leave the station', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPoliceDeleted(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = (-1);
  qspCall(s, 'stat', '');
  if (((s as any).region ?? 0) === 'pav') {
    scene.img('images/locations/pavlovsk/police/pavext.jpg');
  } else {
    scene.img('images/locations/city/citycenter/police/cityext.jpg');
  }
  scene.text('"Uhhmm" you stammer. "I, uhh, I deleted them."');
  scene.text('The hope in the officers eyes is immediately extinguised, replaced with a distrusting and tired look. "I\'m sorry ma\'am, we\'ll try our best but without any evidence we really can\'t help you."');
  scene.text('"If the suspect contacts you again, please don\'t delete the messages. Okay?"');
  scene.text('You nod your head dejectedly.');
  scene.text('The officer stands up and escorts you back to the lobby. You briefly think to inform the officer about the drop-off location, but before you can even open your mouth you\'re already outside the station.');
  scene.text('Seems like you\'ll need some proof before they\'ll take you seriously.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetOfficerContact(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['Officer_bm'] = 'Officer Sokolov';
  qspCall(s, 'telefon', 'AddContact', 'Officer_bm', 'images/system/phone/icons/icon_police.png', 0);
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'Officer_bm', "gt 'blackmailer', 'call_officer'", "hour >= 8 and...
  // TODO-QSP: end
  scene.build();
}

function enterCallOfficer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] > 1  &&  ((s as any).blackmailQW ?? 0)?.['escape'] === 1) {
    qspGoto(s, 'blackmailer', 'call_officer1');
  } else {
    qspGoto(s, 'blackmailer', 'call_officer_fail');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCallOfficerFail(s: GameState, scene: SceneBuilder): void {
  scene.text('As the phone rings, you realise that you don\'t have anything new to tell.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterCallOfficer1(s: GameState, scene: SceneBuilder): void {
  scene.text('"Hello this is Officer Sokolov."');
  // TODO-QSP: dynamic text: "Hi, it''s <<$pcs_firstname>> <<$pcs_lastname>>"
  scene.text(`"Hi, it's ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
  scene.text('"…"');
  scene.text('"We met a while ago when I reported that I was being blackmailed."');
  // TODO-QSP: dynamic text: "Right. How can I help you Miss <<$pcs_lastname>>?"
  scene.text(`"Right. How can I help you Miss ${((s as any).pcs_lastname ?? '')}?"`);
  scene.text('"I\'ve managed to find the phone number and an account number linked to my blackmailer. Would this help you in your search?"');
  scene.text('"How did you… Never mind. Yes, that would be immensely helpful. What is the phone number?"');
  scene.text('"The phone number is 945-977-7397"');
  scene.text('"7397, and the account number?"');
  scene.text('"The account number is 5334 7262 3618 0390"');
  // TODO-QSP: dynamic text: "0390. Thank you Miss <<$pcs_lastname>>. I will keep you up to date!"
  scene.text(`"0390. Thank you Miss ${((s as any).pcs_lastname ?? '')}. I will keep you up to date!"`);
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = 2;
  // TODO-QSP: end
  scene.actions([
    { label: 'End the call', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterSetPostAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick up the package', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: gs 'post_office', 'remove_mail', "gs 'blackmailer', 'set_post_act'"
    qspCall(st, 'stat', '');
    if (((st as any).blackmailQW ?? 0)?.['stage'] === 7) {
      qspGoto(st, 'blackmailer', 'post_office1');
    } else {
      qspGoto(st, 'blackmailer', 'post_office_repeat');
    }
  } },
  ]);
  scene.build();
}

function enterPostOffice1(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['inventory'] = ((s as any).blackmailQW ?? 0)?.['package'];
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 0;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = 0;
  scene.img('images/locations/shared/postoffice/worker.jpg');
  scene.text('The postal worker hands you a medium sized non-descript package. It has no return address.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask who send the package', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/postoffice/worker.jpg');
    scene.text('He looks at you and raises an eyebrow. "Why are you picking up a package if you don\'t know who send it?"');
    scene.text('After a few seconds of silence, the postal worker sighs and looks at something out of your view.');
    if (((st as any).year ?? 0) <= 2016  ||  ((st as any).year ?? 0) === 2017  &&  ((st as any).month ?? 0) < 9) {
      scene.text('"It says here that the package was collected from a public post box in Pavlovsk."');
    } else {
      scene.text('"It says here that the package was collected from a public post box in the University district."');
    }
    scene.text('"Not much more to go on I\'m afraid."');
    scene.actions([
      { label: 'Thank him and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['post_office', 'pickup_mail'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterOpenPackageAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['inventory'] > 0) {
    scene.actions([
      { label: 'Take the package from your <b>blackmailer</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    if (((st as any).blackmailQW ?? 0)?.['stage'] === 7) {
      qspGoto(st, 'blackmailer', 'package1');
    } else {
      qspGoto(st, 'blackmailer', 'package_outfit_repeat');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPackage1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/mail/package_receive1.jpg');
  scene.text('You set the package in front of you and examine it. It\'s about medium sized, it has no labels nor a brand name. The only recognizable feature is a label with your name on top.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open the package', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    (st as any).bm_owns_cosplay = 0;
    if (((st as any).trait_vars ?? 0)?.['academic'] > 0  ||  ((st as any).start_type ?? 0)?.['group'] === 'nerd') {
      (st as any).bm_i = 1;
      // TODO-QSP: :cosplays_owned
      if (((st as any).nerdvana_cosplay ?? 0)?.[String((st as any).bm_i ?? 0)] === 1) {
        (st as any).bm_owns_cosplay = 1;
        (st as any).bm_i = 300;
      }
      (st as any).bm_i = ((st as any).bm_i ?? 0) + (1);
      if (((st as any).bm_i ?? 0) < 200) {
        // TODO-QSP: jump 'cosplays_owned'
      }
    }
    (st as any).temp_bm_out_img = qspFunc(s, 'blackmailer', 'open_package');
    ((st as any).blackmailQW = (st as any).blackmailQW ?? {})['cosplay_stage'] = 1;
    scene.img(`${((st as any).temp_bm_out_img ?? '')}`);
    if (((st as any).trait_vars ?? 0)?.['academic'] > 0  ||  ((st as any).start_type ?? 0)?.['group'] === 'nerd') {
      scene.text('You open the package and are surprised when you spot the high-quality wonder-woman cosplay inside.');
    } else {
      scene.text('You open the package and are surprised when you spot an outfit that looks like a movie-costume or something.');
    }
    scene.text('It doesn\'t take you long to figure out WHY you were sent this package and a sigh escapes your mouth.');
    scene.text('You can only wait until the blackmailer contacts you again.');
    scene.text('…');
    scene.text('Unless… There can\'t be too many shops that sell stuff like this.');
    if (((st as any).trait_vars ?? 0)?.['academic'] > 0  ||  ((st as any).start_type ?? 0)?.['group'] === 'nerd') {
      if (((st as any).bm_owns_cosplay ?? 0) === 1) {
        scene.text('Next time you\'re going to Nerdvana, you should ask around.');
      } else {
        scene.text('You\'ve heard about a store in the university district that sells cosplays like this.');
        scene.text('You could always ask around.');
      }
    }
    scene.actions([
      { label: 'Put the outfit into your wardrobe', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPostOfficeRepeat(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['inventory'] = ((s as any).blackmailQW ?? 0)?.['package'];
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 0;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = 0;
  scene.img('images/locations/shared/postoffice/worker.jpg');
  scene.text('The postal worker hands you a medium sized non-descript package. It has no return address.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['post_office', 'pickup_mail'] },
  ]);
  scene.build();
}

function enterPackageOutfitRepeat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/mail/package_receive1.jpg');
  scene.text('You set the package in front of you and examine it. It\'s about medium sized, it has no labels nor a brand name. The only recognizable feature is a label with your name on top.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Open the package', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    (st as any).bm_out_img = qspFunc(s, 'blackmailer', 'open_package');
    scene.img(`${((st as any).bm_out_img ?? '')}`);
    scene.actions([
      { label: 'Put the outfit into your wardrobe', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetNerdvanaTalkAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] >= 1  &&  ((s as any).daystart ?? 0) > ((s as any).blackmailQW ?? 0)?.['nerdvana_talkday']) {
    if (((s as any).blackmailQW ?? 0)?.['cosplay_stage'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNerdvanaCosplayTalk1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 50) {
        if (((s as any).blackmailQW ?? 0)[((s as any).npcID ?? 0) + '_bj'] > 0) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Sneak off with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNerdvanaBj1(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Return to the counter with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReturnToNerdvana(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).blackmailQW ?? 0)[((s as any).npcID ?? 0) + '_kuni'] > 0) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Sneak off with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNerdvanaKuni1(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Return to the counter with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReturnToNerdvana(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterReturnToNerdvana(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['nerdvana_talkday'] = ((s as any).daystart ?? 0) + ((s as any).locArgs?.[1] ?? 0);
  qspGoto(s, 'shop_nerdvana', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterNerdvanaCosplayTalk1(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_act_text = 'Try to find out who send you the ';
  (s as any).temp_knows_cosplay = (((s as any).trait_vars ?? 0)?.['academic'] > 0  ||  ((s as any).start_type ?? 0)?.['group'] === 'nerd');
  if (((s as any).temp_knows_cosplay ?? 0)) {
    // TODO-QSP: $temp_act_text += 'cosplay'
  } else {
    // TODO-QSP: $temp_act_text += 'costume'
  }
  // TODO-QSP: $temp_act_text += iif(len($blackmailQW['packages_opened']) > 4, 's', '')
  // TODO-QSP: act $temp_act_text:
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/shared/headshots_main/big${(String(((s as any).npcID ?? '')).slice((2)-1))}.jpg`);
  if ((String(((s as any).blackmailQW ?? 0)?.['packages_opened']).length) <= 7) {
    if (((s as any).temp_knows_cosplay ?? 0) === 1) {
      scene.text('"Hey, I have a question. Could this cosplay have been bought here?" you ask.');
      // TODO-QSP: dynamic text: <<$Xec>> gives you quizzical look, but then examines the costume. "Yeah that loo...
      scene.text(`${((s as any).Xec ?? '')} gives you quizzical look, but then examines the costume. "Yeah that looks like one of ours."`);
      // TODO-QSP: dynamic text: "Yes!" you involuntarily shout. You quickly regain control of yourself as <<$xe>...
      scene.text(`"Yes!" you involuntarily shout. You quickly regain control of yourself as ${((s as any).xe ?? '')} gives you a glance.`);
      scene.text('"Is there a way to see who bought it? It\'s really important!"');
      scene.text('"I\'m sorry miss, but we\'ve sold a dozen of these in the last month alone."');
      scene.text('"Without more to go on, I\'m afraid I wouldn\'t be able to help you, even if I wanted to."');
      scene.text('"And that\'s not even taking into account the fact that we can\'t just give away customer details."');
    } else {
      scene.text('"Hey, I have a question… ld this… co…  thingy… have been bought here?" you ask.');
      // TODO-QSP: dynamic text: <<$npcdesc>> gives you quizzical look, clearly asking <<$xemself>> why you are h...
      scene.text(`${((s as any).npcdesc ?? '')} gives you quizzical look, clearly asking ${((s as any).xemself ?? '')} why you are here, but then examines the costume. "Yeah that looks like one of ours."`);
      // TODO-QSP: dynamic text: "Yes!" you involuntarily shout. You quickly regain control of yourself as <<$xe>...
      scene.text(`"Yes!" you involuntarily shout. You quickly regain control of yourself as ${((s as any).xe ?? '')} gives you a glance.`);
      scene.text('"Is there a way to see who bought it? It\'s really important!"');
      scene.text('"I\'m sorry miss, but we\'ve sold a dozen of these in the last month alone", a hint of annoyance showing through the clerks voice.');
      scene.text('"Without more to go on, I wouldn\'t be able to help you, even if I wanted to."');
      scene.text('"And that\'s not even taking into account the fact that we can\'t just give away customer details."');
    }
  } else {
    if (((s as any).temp_knows_cosplay ?? 0) === 1) {
      scene.text('"Hey, I have a question. Could these cosplays have been bought here?" you ask.');
      // TODO-QSP: dynamic text: <<$Xec>> gives you quizzical look, but then examines the costumes. "Yeah these l...
      scene.text(`${((s as any).Xec ?? '')} gives you quizzical look, but then examines the costumes. "Yeah these look like ours."`);
      // TODO-QSP: dynamic text: "Yes!" you involuntarily shout. You quickly regain control of yourself as <<$xe>...
      scene.text(`"Yes!" you involuntarily shout. You quickly regain control of yourself as ${((s as any).xe ?? '')} gives you a glance.`);
      scene.text('"Is there a way to see who bought them? It\'s really important!"');
      scene.text('"I\'m sorry miss, but we can\'t just give customer details away."');
      // TODO-QSP: dynamic text: You feel your face drop as despair slowly flows through you. <<$npcdesc>>, notic...
      scene.text(`You feel your face drop as despair slowly flows through you. ${((s as any).npcdesc ?? '')}, noticing the changes across your face, ask "Is everything alright?"`);
      scene.text('"I really need to know who sent me this, can you help me please."');
      // TODO-QSP: dynamic text: "Look miss, I can''t help you. I''m sorry." <<$xe>> says.
      scene.text(`"Look miss, I can't help you. I'm sorry." ${((s as any).xe ?? '')} says.`);
    } else {
      scene.text('"Hey, I have a question… d these… cost… hingies… have been bought here?" you ask.');
      // TODO-QSP: dynamic text: <<$npcdesc>> gives you quizzical look, clearly asking <<$xemself>> why you are h...
      scene.text(`${((s as any).npcdesc ?? '')} gives you quizzical look, clearly asking ${((s as any).xemself ?? '')} why you are here, but then examines the costumes. "Yeah these look like ours."`);
      // TODO-QSP: dynamic text: "Yes!" you involuntarily shout. You quickly regain control of yourself as <<$xe>...
      scene.text(`"Yes!" you involuntarily shout. You quickly regain control of yourself as ${((s as any).xe ?? '')} gives you a glance.`);
      scene.text('"Is there a way to see who bought them? It\'s really important!"');
      scene.text('"I\'m sorry miss, but we can\'t just give customer details away", a hint of annoyance showing through the clerks voice.');
      // TODO-QSP: dynamic text: You feel your face drop as despair slowly flows through you. <<$npcdesc>>, notic...
      scene.text(`You feel your face drop as despair slowly flows through you. ${((s as any).npcdesc ?? '')}, noticing the changes across your face, softens ${((s as any).xyr ?? '')} tone and asks "Is everything alright?"`);
      scene.text('"I really need to know who sent me this, can you help me please."');
      // TODO-QSP: dynamic text: "Look miss, I can''t help you. I''m sorry." <<$xe>> says. "I could lose my job."
      scene.text(`"Look miss, I can't help you. I'm sorry." ${((s as any).xe ?? '')} says. "I could lose my job."`);
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Try to convince ' + String(((s as any).xem ?? '') ?? ''), goto: ['blackmailer', 'nerdvana_cosplay_talk1_1'] },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'blackmailer', 'return_to_nerdvana', (Math.floor(Math.random() * 5) + 5));
  } },
  ]);
  scene.build();
}

function enterNerdvanaCosplayTalk1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/shared/headshots_main/big${(String(((s as any).npcID ?? '')).slice((2)-1))}.jpg`);
  scene.text('"Please, <i>please</i>, there has to be <b>something</b>…"');
  // TODO-QSP: dynamic text: You see <<$xem>> looking down to your <<iif(pcs_buttsize > pcs_cupsize, ''hips''...
  scene.text(`You see ${((s as any).xem ?? '')} looking down to your ${((((s as any).pcs_buttsize ?? 0) > ((s as any).pcs_cupsize ?? 0)) ? ('hips') : ('tits'))} for barely a moment before quickly looking away. ${((s as any).Xec ?? '')} probably only needs a small push.`);
  if (((s as any).pcs_inhib ?? 0) < 20) {
    qspCall(s, 'willpower', 'flash', 'self', 'hard');
  } else {
    if (((s as any).pcs_inhib ?? 0) < 50) {
      qspCall(s, 'willpower', 'flash', 'self', 'medium');
    } else {
      qspCall(s, 'willpower', 'flash', 'self', 'easy');
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Flash ' + String(((s as any).xem ?? '') ?? ''), handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Flash ' + String(((s as any).xem ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_buttsize ?? 0) > ((st as any).pcs_cupsize ?? 0)) {
      if (((st as any).pantyworntype ?? 0) === 'none') {
        qspCall(st, 'flash', 'pussy', 'inside', 5, 2);
        // TODO-QSP: dynamic text: You steel yourself and ' + iif(PCloSkirt > 0, 'lift the front of your skirt', 'p...
        scene.text('You steel yourself and \' + iif(PCloSkirt > 0, \'lift the front of your skirt\', \'pull down the front of your pants\') + \', exposing your naked flesh, ' + ((st as any).xyr ?? '') + ' wide eyes locked to your pussy.');
      } else {
        qspCall(st, 'flash', 'panties', 'inside', 5, 2);
        // TODO-QSP: dynamic text: You steel yourself and ' + iif(PCloSkirt > 0, 'lift the front of your skirt', 'p...
        scene.text('You steel yourself and ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('lift the front of your skirt') : ('pull down the front of your pants')) + ', exposing your underwear.');
      }
    } else {
      if (((st as any).braworntype ?? 0) === 'none') {
        qspCall(st, 'flash', 'tits', 'inside', 5, 2);
        // TODO-QSP: dynamic text: You steel yourself and ' + iif(PCloSkirt > 0, 'pull down', 'lift up') + ' your t...
        scene.text('You steel yourself and \' + iif(PCloSkirt > 0, \'pull down\', \'lift up\') + \' your top, exposing your naked flesh, ' + ((st as any).xyr ?? '') + ' wide eyes locked to your quickly stiffening nipples.');
      } else {
        qspCall(st, 'flash', 'bra', 'inside', 5, 2);
        // TODO-QSP: dynamic text: You steel yourself and ' + iif(PCloSkirt > 0, 'pull down', 'lift up') + ' your t...
        scene.text('You steel yourself and ' + ((((st as any).PCloSkirt ?? 0) > 0) ? ('pull down') : ('lift up')) + ' your top, exposing your underwear.');
      }
    }
    scene.text('"Please, it would mean so much to me"');
    // TODO-QSP: dynamic text: You see <<$xyr>> resolve falter, but not break. <<$Xec>> only needs one more pus...
    scene.text(`You see ${((st as any).xyr ?? '')} resolve falter, but not break. ${((st as any).Xec ?? '')} only needs one more push`);
    qspCall(st, 'willpower', 'bj', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)  &&  ((st as any).pcs_inhib ?? 0) >= 35) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => '<i>Convince ' + String(((st as any).xem ?? '') ?? '') + '</i>', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => '<i>Convince ' + String(((st as any).xem ?? '') ?? '') + '</i>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/shared/headshots_main/big${(String(((st as any).npcID ?? '')).slice((2)-1))}.jpg`);
    // TODO-QSP: dynamic text: You lean over the counter, keeping <<$xyr>> eyes locked on you as you slowly lic...
    scene.text(`You lean over the counter, keeping ${((st as any).xyr ?? '')} eyes locked on you as you slowly lick your lips.`);
    // TODO-QSP: dynamic text: "How about I make it worth your while?" you ' + iif(pcs_chrsm < 50, 'manage to s...
    scene.text('"How about I make it worth your while?" you ' + ((((st as any).pcs_chrsm ?? 0) < 50) ? ('manage to stumble') : ('say sultrily')) + '.');
    // TODO-QSP: dynamic text: <<$Xec>> eagerly nods <<$xyr>> head, and you drag <<$xem>> into an unoccupied fi...
    scene.text(`${((st as any).Xec ?? '')} eagerly nods ${((st as any).xyr ?? '')} head, and you drag ${((st as any).xem ?? '')} into an unoccupied fitting-room.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNerdvanaCosplayTalk1_2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Give up for now', handler: (st: GameState) => {
    qspCall(st, 'blackmailer', 'return_to_nerdvana', (Math.floor(Math.random() * 5) + 5));
  } },
      { label: '', labelFn: (s: GameState) => 'Bribe ' + String(((st as any).xem ?? '') ?? ''), handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 5000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 3;
      qspCall(st, 'money', 'pay', 5000, 'cash');
      qspCall(st, 'stat', '');
      scene.img(`images/characters/shared/headshots_main/big${(String(((st as any).npcID ?? '')).slice((2)-1))}.jpg`);
      // TODO-QSP: dynamic text: You reach into your purse and pull out ' + $func('money', 'string_price', 5000) ...
      scene.text('You reach into your purse and pull out 5000₽.');
      // TODO-QSP: dynamic text: The clerks eyes fill with a mixture of lust and greed as <<$xe>> reaches out and...
      scene.text(`The clerks eyes fill with a mixture of lust and greed as ${((st as any).xe ?? '')} reaches out and takes the money.`);
      scene.actions([
        { label: 'Continue', goto: ['blackmailer', 'nerdvana_cosplay_talk1_3'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Give up for now', handler: (st: GameState) => {
    qspCall(st, 'blackmailer', 'return_to_nerdvana', (Math.floor(Math.random() * 5) + 5));
  } },
  ]);
  scene.build();
}

function enterNerdvanaCosplayTalk1_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick ?? 0) > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Unbuckle ' + String(((s as any).xyr ?? '') ?? '') + ' belt', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNerdvanaBj1(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Return to the counter with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspGoto(st, 'blackmailer', 'nerdvana_cosplay_talk1_3');
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Pull ' + String(((s as any).xyr ?? '') ?? '') + ' shorts to the side', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNerdvanaKuni1(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Return to the counter with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspGoto(st, 'blackmailer', 'nerdvana_cosplay_talk1_3');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNerdvanaBj1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: blackmailQW[$npcID + '_bj'] += 1
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/fitting_room_bj.jpg');
  // TODO-QSP: 'Wanting to get this over with, you take off your shirt to give <<$xem>> a better look at your ' + i...
  // TODO-QSP: dynamic text: You get on your knees and unbuckle <<$xyr>> belt, pulling <<$xyr>> pants and und...
  scene.text(`You get on your knees and unbuckle ${((s as any).xyr ?? '')} belt, pulling ${((s as any).xyr ?? '')} pants and underwear down, and freeing ${((s as any).xyr ?? '')} ${((s as any).dick_girth ?? '')} cock.`);
  // TODO-QSP: dynamic text: With <<$xyr>> erection pointed at your face and a tingle in your loins, and you ...
  scene.text(`With ${((s as any).xyr ?? '')} erection pointed at your face and a tingle in your loins, and you get to work.`);
  // TODO-QSP: dynamic text: You feel a sense of pride as <<$xyr>> breath slowly becomes shallow and unsteady...
  scene.text(`You feel a sense of pride as ${((s as any).xyr ?? '')} breath slowly becomes shallow and unsteady, feeling ${((s as any).xyr ?? '')} quickening heartbeat on your tongue.`);
  // TODO-QSP: dynamic text: The taste of salt spreading through your mouth as your rhythmic bobbing sends sh...
  scene.text(`The taste of salt spreading through your mouth as your rhythmic bobbing sends shivers down ${((s as any).xyr ?? '')} spine.`);
  // TODO-QSP: dynamic text: Sensing <<$xyr>> imminent release approaching, and not wanting to deal with a me...
  scene.text(`Sensing ${((s as any).xyr ?? '')} imminent release approaching, and not wanting to deal with a mess, you speed up.`);
  // TODO-QSP: dynamic text: <<$npcdesc>> spasms, the salty liquid coats your tongue and palate, as you start...
  scene.text(`${((s as any).npcdesc ?? '')} spasms, the salty liquid coats your tongue and palate, as you start swallowing the fruits of your labour.`);
  // TODO-QSP: dynamic text: You collect yourself and stand up. Suddenly <<$npcdesc>> leans in closer and giv...
  scene.text(`You collect yourself and stand up. Suddenly ${((s as any).npcdesc ?? '')} leans in closer and gives you a passionate kiss, before recoiling.`);
  // TODO-QSP: dynamic text: With a red glow on <<$xyr>> cheeks <<$xe>> says "Sor… hat was… sorry."
  scene.text(`With a red glow on ${((s as any).xyr ?? '')} cheeks ${((s as any).xe ?? '')} says "Sor… hat was… sorry."`);
  // TODO-QSP: dynamic text: You take a moment to make yourself presentable as <<$npcdesc>> catches <<$xyr>> ...
  scene.text(`You take a moment to make yourself presentable as ${((s as any).npcdesc ?? '')} catches ${((s as any).xyr ?? '')} breath.`);
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterNerdvanaKuni1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: blackmailQW[$npcID + '_kuni'] += 1
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/kuni/fitting_room_kuni.jpg');
  // TODO-QSP: dynamic text: You push <<$xem>> down on small stool and get on your knees, letting your hand b...
  scene.text(`You push ${((s as any).xem ?? '')} down on small stool and get on your knees, letting your hand briefly roam over ${((s as any).xyr ?? '')} legs before pulling ${((s as any).xyr ?? '')} shorts and panties to the side.`);
  // TODO-QSP: dynamic text: Ignoring your own impatience, you start off slow by lazily placing small trailin...
  scene.text(`Ignoring your own impatience, you start off slow by lazily placing small trailing kissing up ${((s as any).xyr ?? '')} thigh. You can already hear ${((s as any).xyr ?? '')} breathing become louder, and feel the tension in ${((s as any).xyr ?? '')} legs as you reposition yourself to begin your attack in earnest.`);
  // TODO-QSP: dynamic text: Switching between kisses, licks, and the occasional bite you crawl ever closer t...
  scene.text(`Switching between kisses, licks, and the occasional bite you crawl ever closer to ${((s as any).xyr ?? '')} wet folds. The audable moan, and full body shudder, when you finally reach the goald fills you with a sense of pride.`);
  // TODO-QSP: dynamic text: <<$Xyrc>> wetness fills your mouth and <<$xyr>> smell your nose. You feel <<$npc...
  scene.text(`${((s as any).Xyrc ?? '')} wetness fills your mouth and ${((s as any).xyr ?? '')} smell your nose. You feel ${((s as any).npcdesc ?? '')} putter her hand on your head as ${((s as any).xe ?? '')} starts to lose control.`);
  // TODO-QSP: dynamic text: You focus on <<$xyr>> clit as the audable panting edges you on, and as you sense...
  scene.text(`You focus on ${((s as any).xyr ?? '')} clit as the audable panting edges you on, and as you sense ${((s as any).xyr ?? '')} immanent release approaching you double down.`);
  // TODO-QSP: dynamic text: <<$npcdesc>> spasms, <<$xyr>> legs press into you, <<$xyr>> fingers intertwined ...
  scene.text(`${((s as any).npcdesc ?? '')} spasms, ${((s as any).xyr ?? '')} legs press into you, ${((s as any).xyr ?? '')} fingers intertwined with your hair. Then ${((s as any).xe ?? '')} releases you, panting heavily.`);
  // TODO-QSP: dynamic text: You collect yourself and stand up. Suddenly <<$npcdesc>> leans in closer and giv...
  scene.text(`You collect yourself and stand up. Suddenly ${((s as any).npcdesc ?? '')} leans in closer and gives you a passionate kiss, before recoiling.`);
  // TODO-QSP: dynamic text: With a red glow on <<$xyr>> cheeks <<$xe>> says "Sor… hat was… sorry."
  scene.text(`With a red glow on ${((s as any).xyr ?? '')} cheeks ${((s as any).xe ?? '')} says "Sor… hat was… sorry."`);
  // TODO-QSP: dynamic text: You take a moment to make yourself presentable as <<$npcdesc>> catches <<$xyr>> ...
  scene.text(`You take a moment to make yourself presentable as ${((s as any).npcdesc ?? '')} catches ${((s as any).xyr ?? '')} breath.`);
  qspCall(s, 'arousal', 'cuni_give', 10);
  qspCall(s, 'arousal', 'kiss', (-1));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterNerdvanaCosplayTalk1_3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplay_stage'] = 2;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/shared/headshots_main/big${(String(((s as any).npcID ?? '')).slice((2)-1))}.jpg`);
  // TODO-QSP: dynamic text: <<$npcdesc>> gets behind the counter and starts typing away on the computer, and...
  scene.text(`${((s as any).npcdesc ?? '')} gets behind the counter and starts typing away on the computer, and a short while later ${((s as any).xe ?? '')} speaks up.`);
  // TODO-QSP: dynamic text: "There''s only a single customer that bought those specific cosplays." <<$Xec>> ...
  scene.text(`"There's only a single customer that bought those specific cosplays." ${((s as any).Xec ?? '')} turns the monitor around so you can look at the contents.`);
  scene.text('"See, they called in their orders and paid through this account." pointing at the screen.');
  scene.text('You take out your phone and note down the phone account numbers: 945-977-7397 and 5334 7262 3618 0390');
  scene.text('Before you leave you quickly add your blackmailer\'s phone number.');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['nerdvana_phone_ID'] = ((s as any).npcID ?? 0);
  // TODO-QSP: gs 'telefon', 'AddContact', $blackmailQW['nerdvana_phone_ID'], 'icon_na', 1
  qspCall(s, 'telefon', 'AddContact', 'Blackmailer', 'images/system/phone/icons/icon_blackmailer.png', 1);
  // TODO-QSP: end
  scene.actions([
    { label: 'leave', handler: (st: GameState) => {
    qspCall(st, 'blackmailer', 'return_to_nerdvana');
  } },
  ]);
  scene.build();
}

function enterAdd_SMS1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 3) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 4;
  }
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetNextPayment(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdatePaymentCalendar(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['blackmail_image_chosen'] = ((s as any).blackmailQW ?? 0)?.['init_flashimage'];
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hello ' + ((s as any).pcs_firstname ?? 0) + '!';
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A29'] > 0) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want your mother to see this image you will do exactly as I say';
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).grupTipe ?? 0) !== 5) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want your friends to see this image you will do exactly as I say';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want the world to see this image you will do exactly as I say';
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'Leave ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' beneath the fourth park bench, I know you know which one.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['3'] = 'You have two days';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMSText_builder', 'receive_img', $blackmailQW['blackmail_image_chosen']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['3']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSReminder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
    if (((s as any).blackmailQW ?? 0)?.['escape'] === -1) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = 0;
    }
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = '' + ((s as any).pcs_firstname ?? 0) + ' don\'t forget, if you don\'t leave \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\']) + \' beneath the fourth park bench, you will regret it';
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
    // TODO-QSP: gs 'SMSText_builder', 'receive_img', $blackmailQW['blackmail_image_chosen']
    qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
    qspCall(s, 'SMStext_builder', 'end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSFailure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = 0;
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0  ||  ((s as any).blackmailQW ?? 0)?.['stage'] === 7) {
    if (((s as any).blackmailQW ?? 0)?.['escape'] === -1) {
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = 0;
    }
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 0;
    qspCall(s, 'calendar', 'remove', 'blackmail_payment_deadline');
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Guess you like it when people know you\'re a whore';
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'or you didn\'t think I\'d go through with it';
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'we\'ll see';
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
    qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
    qspCall(s, 'SMStext_builder', 'end');
    if (((s as any).blackmailQW ?? 0)?.['init_flashregion'] === 'city') {
      ((s as any).fame = (s as any).fame ?? {})['city_sex'] = ((s as any).fame['city_sex'] ?? 0) + (2 * (((s as any).blackmailQW ?? {})?.['total_material'] ?? 0));
    } else {
      if (((s as any).blackmailQW ?? 0)?.['init_flashregion'] === 'gad') {
        ((s as any).fame = (s as any).fame ?? {})['gad_sex'] = ((s as any).fame['gad_sex'] ?? 0) + (10 * (((s as any).blackmailQW ?? {})?.['total_material'] ?? 0));
      } else {
        ((s as any).fame = (s as any).fame ?? {})['pav_sex'] = ((s as any).fame['pav_sex'] ?? 0) + (5 * (((s as any).blackmailQW ?? {})?.['total_material'] ?? 0));
      }
    }
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = (-1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSPackage1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 2;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = ((s as any).blackmailQW ?? 0)?.['smsday'];
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package'] = 7;
  // TODO-QSP: gs 'post_office', 'add_mail', 'city', "gs 'blackmailer', 'set_post_act'"
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'The package has arrived at the St. Petersburg post office';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'Pick it up in the next 2 days, or you know what will happen';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSOutfit1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 2;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 10 * (Math.floor(Math.random() * 11) + 15);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdatePaymentCalendar(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'We saw that you picked the package, good girl';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'You\'ll have to wear it from now on when you drop off our money and we\'ll knock off ' + qspFunc(s, 'money', 'string_price', 1000);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'You don\'t want to upset us';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['3'] = 'Drop ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' off at the park in the two days';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['3']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMS2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 4;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 0;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplay_stage'] = 3;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['toy_fund'] = 0;
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Today we\'re going to have a mixup, to see if you\'re still a good girl';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'You have four days to send us 4 fully clothed selfies taken in your bedroom';
  qspCall(s, 'SMSText_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  qspCall(s, 'SMStext_builder', 'send_selfie', 'Send a clothed selfie', 'c', 'blackmailer', 'Add_SMS2_1', 0);
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMSText_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMS2_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a'] = 'Bad girl, that was not taken in your bedroom.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b'] = 'Bad girl, you\'ve already send that one.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c'] = 'Good girl, only ' + 3 - ((s as any).locArgs?.[1] ?? 0) + ' to go.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d'] = 'Good girl! That wasn\'t too hard now was it.';
  qspCall(s, 'SMSText_builder', 'start');
  qspCall(s, 'SMSText_builder', 'send_img', ((s as any).locArgs?.[3] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  if (Number((s as any).locArgs?.[4] ?? 0) !== 'bedroom') {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['a']
  } else {
    if (((s as any).blackmailQW ?? 0)?.['catfish_pic_0'] === Number((s as any).locArgs?.[3] ?? 0)  ||  ((s as any).blackmailQW ?? 0)?.['catfish_pic_1'] === Number((s as any).locArgs?.[3] ?? 0)  ||  ((s as any).blackmailQW ?? 0)?.['catfish_pic_2'] === Number((s as any).locArgs?.[3] ?? 0)) {
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['b']
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) < 3) {
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['c']
      } else {
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['d']
      }
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['catfish_pic_' + String(((s as any).locArgs?.[1] ?? 0))] = ((s as any).locArgs?.[3] ?? 0);
      ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['total_material'] = ((s as any).blackmailQW['total_material'] ?? 0) + (1);
      ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((s as any).ARGS[1] ?? 0) + (1);
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) < 4) {
    // TODO-QSP: gs 'SMStext_builder', 'send_selfie', 'Send a clothed selfie', 'c', 'blackmailer', 'Add_SMS2_1', ARGS...
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 4;
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplay_stage'] = 4;
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMSText_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMS2Reminder(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  if (((s as any).blackmailQW ?? 0)?.['escape'] === -1) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = 0;
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = '' + ((s as any).pcs_firstname ?? 0) + ' don\'t forget, if you don\'t send four clothed pictures by the end of today, you will regret it.';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMSText_builder', 'receive_img', $blackmailQW['blackmail_image_chosen']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMS3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = 0;
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['cosplay_stage'] = 5;
  // TODO-QSP: gs 'telefon', 'SetInSMSSchedule', $blackmailQW['nerdvana_phone_ID'], "gs 'blackmailer', 'Add_SMS_Ner...
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'You thought you could abuse our generousity';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'That you could use that loser over at Nerdvana to spy for you';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'Well you fucked up!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['3'] = 'And we\'ve got another toy';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['3']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMS_Nerdvana(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'npcStat', $blackmailQW['nerdvana_phone_ID'], 'i'
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Is this ' + ((s as any).pcs_firstname ?? 0) + '? ';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'Yeah, who are you?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'It\'s ' + ((s as any).npcdesc9 ?? 0) + ', from Nerdvana.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['3'] = 'Did you take this picture just to have somebody catfish me?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['4'] = 'Ruin my life?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['5'] = 'No!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['6'] = 'The reason I was there was because I\'m being blackmailed';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['7'] = 'Fuck!! I\'m so sorry ' + ((s as any).pcs_firstname ?? 0) + '. He got me too';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['8'] = 'He used that one, and some others too, pretended to be you.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['9'] = 'Fuck!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['10'] = 'What\'s going on';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['11'] = 'A few days ago I got contacted through Assbook by an account claiming to be you.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['12'] = 'I didn\'t trust it, catfishing is not uncommon, so I asked for proof.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['13'] = 'When I received some pictures of you, pictures that weren\'t available online.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['14'] = 'Pictures I thought you wouldn\'t just share with friends.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['15'] = 'I thought it was you';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['16'] = 'Oh no, what did they do?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['17'] = 'He did enough';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['18'] = 'This could ruin my life';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['19'] = 'This person, he told me that from now on I will have to send you the costumes';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['20'] = 'Next time he orders something, I\'ll have to let you know.';
  if (((s as any).blackmailQW ?? 0)?.['escape'] < 1) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['21'] = 'Maybe the police could help?';
  } else {
    if (((s as any).blackmailQW ?? 0)?.['escape'] === 1) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['21'] = 'I went to the police, but I haven\'t told them about what we learned yet';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['21'] = 'I went to the police, and I told them about what we learned';
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['22'] = 'Just hang tight, we\'ll get through this';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['23'] = 'Okay, if you need anything from me, you know how to reach me.';
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).npcID9 ?? 0));
    qspCall(s, 'SMStext_builder', 'start');
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['1'], 'blackmailer', 'Add_SMS_Nerdvana', '1'
    qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).npcID9 ?? 0));
    qspCall(s, 'SMStext_builder', 'end');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === '1') {
      qspCall(s, 'SMStext_builder', 'start');
      // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['1']
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      qspCall(s, 'telefon', 'AddContact', ((s as any).npcID9 ?? 0), 'images/characters/shared/headshots_main/' + (String(((s as any).npcID9 ?? 0)).slice((2)-1)) + '.jpg', 0);
      // TODO-QSP: gs 'SMStext_builder', 'receive_img', $blackmailQW['catfish_pic_<<rand(0, 3)>>']
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['3']
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['4']
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['5'], 'blackmailer', 'Add_SMS_Nerdvana', '2'
      // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
      qspCall(s, 'SMStext_builder', 'end');
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === '2') {
        qspCall(s, 'SMStext_builder', 'start');
        // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['5']
        // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
        // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['6']
        // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['7']
        // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['8']
        // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
        // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['9']
        // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['10'], 'blackmailer', 'Add_SMS_Nerdvana', '3'
        // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
        qspCall(s, 'SMStext_builder', 'end');
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === '3') {
          qspCall(s, 'SMStext_builder', 'start');
          // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['10']
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['11']
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['12']
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['13']
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['14']
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['15']
          // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['16'], 'blackmailer', 'Add_SMS_Nerdvana', '4'
          // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
          qspCall(s, 'SMStext_builder', 'end');
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === '4') {
            qspCall(s, 'SMStext_builder', 'start');
            // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['16']
            // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
            // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['17']
            // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
            // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['18']
            // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
            // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['19']
            // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
            // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['20']
            // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['21'], 'blackmailer', 'Add_SMS_Nerdvana', '5'
            // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
            qspCall(s, 'SMStext_builder', 'end');
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === '5') {
              qspCall(s, 'SMStext_builder', 'start');
              // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['21']
              // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
              // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree['22']
              // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
              // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['23']
              // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
              qspCall(s, 'SMStext_builder', 'end');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSms_EOC(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSms_EOC(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'receive', '<i>This is the current end of the storyline.</i>');
  qspCall(s, 'SMStext_builder', 'receive', '<i>Thank you for enjoying the Blackmailer\'s content</i>');
  qspCall(s, 'SMStext_builder', 'receive', '<i>Love, Anjuna</i>');
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSet_SMSTree(s: GameState, scene: SceneBuilder): void {
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'You know what we want';
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A29'] > 0) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want your mother to see this image you will do exactly as I say';
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).grupTipe ?? 0) !== 5) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want your friends to see this image you will do exactly as I say';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'If you don\'t want the world to see this image you will do exactly as I say';
    }
  }
  if (((s as any).blackmailQW ?? 0)?.['worn_costume'] === -1) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'Leave ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' beneath the same park bench. We\'ve increased it by ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ', because you were a bad girl last time.';
  } else {
    if (((s as any).blackmailQW ?? 0)?.['worn_costume'] === 1) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'You were a such a good girl delivering our money in that outfit. Leave ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' beneath the same park bench this time';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'Leave ' + qspFunc(s, 'money', 'string_price', ((s as any).blackmailQW ?? 0)?.['next_payment']) + ' beneath the same park bench';
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['3'] = 'You have two days';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['x3'] = 'Don\'t forget to wear our gift';
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'Why are you doing this to me?';
  } else {
    ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'What do you want from me?';
  }
  if (((s as any).blackmailQW ?? 0)?.['total_material'] <= 4) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'Where am I going to get that much money from?';
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b4'] = 'Sir, where am I going to get that much money from?';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'How much do you want before it stops?';
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b4'] = 'How much do you want before it stops, sir?';
    }
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'What about lowering the amount?';
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b4'] = 'What about lowering the amount, sir?';
    } else {
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['a4'] = 'What can I do to lower that?';
      ((s as any).SMSTree = (s as any).SMSTree ?? {})['b4'] = 'Sir, what can I do to lower that?';
    }
  }
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['5'] = 'Just drop off the money';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['6'] = 'or else';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['10a'] = 'Work as a stripper, it\'s what you were clearly born to do';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['11a'] = 'How about this. Send us a picture of your tits and we\'ll lower it';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['10b'] = 'Send a nude like the slut you are';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['11b'] = 'or you could do something special for us';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['10c'] = 'You shall address us as sir, we\'re adding ' + qspFunc(s, 'money', 'string_price', 1000) + '!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['11c'] = 'Send us a picture of your tits and we\'ll lower it';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['10d'] = 'Good girl';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['11d'] = 'Send a nude like the slut you are';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a12'] = 'fuck you';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b12'] = 'Send a (swimsuit or underwear) selfie from your gallery';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c12'] = 'Send a (flashing) selfie from your gallery';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['d12'] = 'Send a selfie from your gallery';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['e12'] = 'what?';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['f12'] = 'yes sir';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a20'] = 'WTF! I said a pic of your tits, not this boring shit';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a21'] = 'you better bring an additional ' + qspFunc(s, 'money', 'string_price', 500) + '!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a22'] = 'drop ' + qspFunc(s, 'money', 'string_price', (((s as any).blackmailQW ?? {})?.['next_payment'] ?? 0) + 500) + ' off in the park, or else!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba20'] = 'nice';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba21'] = 'that\'s worth about ' + qspFunc(s, 'money', 'string_price', 500);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ba22'] = 'don\'t forget to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 500) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb20'] = 'sure, but we\'ve already seen that one';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb21'] = 'we\'ll knock off ' + qspFunc(s, 'money', 'string_price', 250);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['bb22'] = 'don\'t forget to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 250) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ca20'] = 'WOW';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ca21'] = 'that\'s worth about ' + qspFunc(s, 'money', 'string_price', 1000);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['ca22'] = 'don\'t forget to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 1000) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cb20'] = 'we\'ve already seen that one';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cb21'] = 'it\'s still good though, so that\'s worth about ' + qspFunc(s, 'money', 'string_price', 500);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['cb22'] = 'don\'t forget to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 500) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['da20'] = 'DAMN! you really are a slut aren\'t you';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['da21'] = 'definitely worth ' + qspFunc(s, 'money', 'string_price', 2000);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['da22'] = 'now you only need to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 2000) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['db20'] = 'we never get enough of you slut';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['db21'] = 'but having seen that one already, its only worh ' + qspFunc(s, 'money', 'string_price', 1000);
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['db22'] = 'now you only need to drop \' + $func(\'money\', \'string_price\', blackmailQW[\'next_payment\'] - 1000) + \' off in the park';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['x22'] = 'you\'re all settled for now';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['30'] = 'We\'ll send you a package with instructions, it\'ll take a while though';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['31'] = 'we\'ll clear your debt for this week, do not make us regret this!';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['a32'] = 'fuck you';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b32'] = 'ok';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b33'] = 'we\'ll work on your tone';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['b34'] = 'from now on you\'ll call us sir';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c32'] = 'yes sir';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c33'] = 'good girl';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['c34'] = 'keep calling us that in the future';
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSRepeat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 2;
  if (((s as any).blackmailQW ?? 0)?.['escape'] === -1) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['escape'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetNextPayment(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterUpdatePaymentCalendar(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['blackmail_image_chosen'] = qspFunc(s, 'blackmailer', 'choose_blackmail_image');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMSText_builder', 'receive_img', $blackmailQW['blackmail_image_chosen']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['3']
  if (((s as any).blackmailQW ?? 0)?.['stage'] >= 8) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['x3']
  }
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] < 2000  &&  ((s as any).blackmailQW ?? 0)?.['total_payment'] < 5000) {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a4'], 'blackmailer', 'sms_repeat_end1', $SMSTree['a4']
  } else {
    if (((s as any).blackmailQW ?? 0)?.['stage'] <= 5  ||  (((s as any).blackmailQW ?? 0)?.['stage'] === 6  &&  (((s as any).blackmailQW ?? 0)?.['next_payment'] < 3000  ||  ((s as any).pcs_inhib ?? 0) < 20))) {
      // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a4'], 'blackmailer', 'sms_repeat_switch1', 'a', $SMSTre...
    } else {
      if (((s as any).blackmailQW ?? 0)?.['stage'] <= 6) {
        // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a4'], 'blackmailer', 'sms_repeat_switch1', 'b', $SMSTre...
      } else {
        // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a4'], 'blackmailer', 'sms_repeat_switch1', 'c', $SMSTre...
        // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b4'], 'blackmailer', 'sms_repeat_switch1', 'd', $SMSTre...
      }
    }
  }
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatEnd1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['5']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['6']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatSwitch1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blackmailQW ?? 0)?.['stage'] === 5) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 6;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['10' + $ARGS[1]]
  if (Number((s as any).locArgs?.[1] ?? 0) === 'c') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (1000);
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['11' + $ARGS[1]]
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a12'], 'blackmailer', 'sms_repeat_end1', $SMSTree['a12'...
  if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 0) {
    // TODO-QSP: gs 'SMStext_builder', 'send_selfie', $SMSTree['b12'], 'c;sw;u', 'blackmailer', 'sms_repeat_selfie1'
  } else {
    if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 1) {
      // TODO-QSP: gs 'SMStext_builder', 'send_selfie', $SMSTree['c12'], 'c;sw;u;ft;fa', 'blackmailer', 'sms_repeat_sel...
    } else {
      // TODO-QSP: gs 'SMStext_builder', 'send_selfie', $SMSTree['d12'], 'c;sw;u;n;b;sh;ft;fa;fp', 'blackmailer', 'sms_...
    }
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'b') {
    // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['e12'], 'blackmailer', 'sms_repeat_first_favour', $SMSTr...
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[3]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatSelfie1(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send_img', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[1]
  if (Number((s as any).locArgs?.[4] ?? 0) === 'clothed') {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = ((s as any).blackmailQW['next_payment'] ?? 0) + (500);
    (s as any).temp_path = 'a';
  } else {
    if (((String('bikini;underwear').indexOf(String(((s as any).locArgs?.[4] ?? 0)))) + 1) > 0) {
      // TODO-QSP: gs 'blackmailer', 'add_blackmail_selfie', $ARGS[2], $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
      if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 0) {
        ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 1;
      }
      if (((s as any).blackmailQW ?? 0)?.['unique_selfie_sent'] === 0) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 500, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_path = 'ba';
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 250, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
        (s as any).temp_path = 'bb';
      }
    } else {
      if (((String('bath;shower;titflash;assflash').indexOf(String(((s as any).locArgs?.[4] ?? 0)))) + 1) > 0) {
        // TODO-QSP: gs 'blackmailer', 'add_blackmail_selfie', $ARGS[2], $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
        if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 1) {
          ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 2;
        }
        if (((s as any).blackmailQW ?? 0)?.['unique_selfie_sent'] === 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
          (s as any).temp_path = 'ca';
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 500, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
          (s as any).temp_path = 'cb';
        }
      } else {
        if (((String('nude;pussyflash').indexOf(String(((s as any).locArgs?.[4] ?? 0)))) + 1) > 0) {
          // TODO-QSP: gs 'blackmailer', 'add_blackmail_selfie', $ARGS[2], $ARGS[3], $ARGS[4], ARGS[5], ARGS[6]
          if (((s as any).blackmailQW ?? 0)?.['selfie_stage'] === 2) {
            ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['selfie_stage'] = 3;
          }
          if (((s as any).blackmailQW ?? 0)?.['unique_selfie_sent'] === 0) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2000, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
            (s as any).temp_path = 'da';
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1000, 'picture']; enterMakePayment(s, scene); (s as any).locArgs = __savedLocArgs; }
            (s as any).temp_path = 'db';
          }
        }
      }
    }
  }
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$temp_path + '20']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[1]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$temp_path + '21']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[1]
  if (((s as any).blackmailQW ?? 0)?.['next_payment'] > 0) {
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$temp_path + '22']
  } else {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 0;
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = 0;
    // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['x22']
  }
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[1]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatFirstFavour(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['30']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['31']
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['a32'], 'blackmailer', 'sms_repeat_end1', $SMSTree['a32'...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['b32'], 'blackmailer', 'sms_repeat_setup_first_gift', 'b...
  // TODO-QSP: gs 'SMStext_builder', 'add_reply', $SMSTree['c32'], 'blackmailer', 'sms_repeat_setup_first_gift', 'c...
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatSetupFirstGift(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet_SMSTree(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).blackmailQW ?? 0)?.['stage'] < 7) {
    ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['stage'] = 7;
  }
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['smsday'] = ((s as any).daystart ?? 0) + 14;
  // TODO-QSP: gs 'blackmailer', 'make_payment', blackmailQW['next_payment'], 'favour'
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'send', $SMSTree[$ARGS[1] + '32']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[1] + '33']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree[$ARGS[1] + '34']
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeatSwitch2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'blackmailer', 'sms_repeat_EOC', $ARGS[1], ARGS[2]
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSmsRepeat_EOC(s: GameState, scene: SceneBuilder): void {
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['next_payment'] = 0;
  qspCall(s, 'SMStext_builder', 'start');
  qspCall(s, 'SMStext_builder', 'send', ((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'receive', '<i>This content is not ready yet.</i>');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'receive', '<i>As a freebie your debt will be set to 0!</i>');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'receive', '<i>Thank you for enjoying the Blackmailer\'s content</i>');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'receive', '<i>Love, Anjuna</i>');
  // TODO-QSP: gs 'SMStext_builder', 'show_sms', ARGS[2]
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSPackageRepeat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'ClearInSMSSchedule', 'Blackmailer');
  // TODO-QSP: gs 'post_office', 'add_mail', 'city', "gs 'blackmailer', 'set_post_act'"
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = ((s as any).daystart ?? 0) + 14;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChoosePackage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'blackmailer', 'decrease_toy_fund', blackmailQW['package']
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'We\'ve send you another package. You can pick it up at the St. Petersburg post office.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'You can pick it up in the next two weeks';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  qspCall(s, 'SMStext_builder', 'add_sms', 'Blackmailer');
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
  scene.build();
}

function enterAdd_SMSPackageRepeat2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'npcStat', $blackmailQW['nerdvana_phone_ID'], 'i'
  qspCall(s, 'telefon', 'ClearInSMSSchedule', ((s as any).npcID9 ?? 0));
  // TODO-QSP: gs 'post_office', 'add_mail', 'city', "gs 'blackmailer', 'set_post_act'"
  ((s as any).blackmailQW = (s as any).blackmailQW ?? {})['package_day'] = ((s as any).daystart ?? 0) + 14;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterChoosePackage(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: gs 'blackmailer', 'decrease_toy_fund', blackmailQW['package']
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['0'] = 'Hey ' + ((s as any).pcs_nickname ?? 0) + ', it\'s ' + ((s as any).npcdesc9 ?? 0) + ', from Nerdvana.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['1'] = 'I\'ve just deliverd a package for you at the St. Petersburg post office.';
  ((s as any).SMSTree = (s as any).SMSTree ?? {})['2'] = 'It\'ll be there for the next fourteen days.';
  qspCall(s, 'SMStext_builder', 'start');
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['0']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['1']
  // TODO-QSP: gs 'SMStext_builder', 'receive', $SMSTree['2']
  qspCall(s, 'SMStext_builder', 'add_sms', ((s as any).npcID9 ?? 0));
  qspCall(s, 'SMStext_builder', 'end');
  // TODO-QSP: end
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
    case 'bmid_to_cosplaynumber':
      enterBmidToCosplaynumber(s, scene);
      break;
    case 'register_cosplay_used':
      enterRegisterCosplayUsed(s, scene);
      break;
    case 'choose_random_cosplay_used':
      enterChooseRandomCosplayUsed(s, scene);
      break;
    case 'get_cosplay_img':
      enterGetCosplayImg(s, scene);
      break;
    case 'blackmail_dream_events':
      enterBlackmailDreamEvents(s, scene);
      break;
    case 'blackmail_sleep_events':
      enterBlackmailSleepEvents(s, scene);
      break;
    case 'blackmail_dreams':
      enterBlackmailDreams(s, scene);
      break;
    case 'photo_dream1':
      enterPhotoDream1(s, scene);
      break;
    case 'photo_dream2':
      enterPhotoDream2(s, scene);
      break;
    case 'photo_dream3':
      enterPhotoDream3(s, scene);
      break;
    case 'cosplay_dream1':
      enterCosplayDream1(s, scene);
      break;
    case 'set_park_act':
      enterSetParkAct(s, scene);
      break;
    case 'park1':
      enterPark1(s, scene);
      break;
    case 'park2':
      enterPark2(s, scene);
      break;
    case 'park_repeat':
      enterParkRepeat(s, scene);
      break;
    case 'park_repeat_hide':
      enterParkRepeatHide(s, scene);
      break;
    case 'get_park_img':
      enterGetParkImg(s, scene);
      break;
    case 'set_police_act':
      enterSetPoliceAct(s, scene);
      break;
    case 'police1':
      enterPolice1(s, scene);
      break;
    case 'police_deleted':
      enterPoliceDeleted(s, scene);
      break;
    case 'set_officer_contact':
      enterSetOfficerContact(s, scene);
      break;
    case 'call_officer':
      enterCallOfficer(s, scene);
      break;
    case 'call_officer_fail':
      enterCallOfficerFail(s, scene);
      break;
    case 'call_officer1':
      enterCallOfficer1(s, scene);
      break;
    case 'set_post_act':
      enterSetPostAct(s, scene);
      break;
    case 'post_office1':
      enterPostOffice1(s, scene);
      break;
    case 'open_package_act':
      enterOpenPackageAct(s, scene);
      break;
    case 'package1':
      enterPackage1(s, scene);
      break;
    case 'post_office_repeat':
      enterPostOfficeRepeat(s, scene);
      break;
    case 'package_outfit_repeat':
      enterPackageOutfitRepeat(s, scene);
      break;
    case 'set_nerdvana_talk_act':
      enterSetNerdvanaTalkAct(s, scene);
      break;
    case 'return_to_nerdvana':
      enterReturnToNerdvana(s, scene);
      break;
    case 'nerdvana_cosplay_talk1':
      enterNerdvanaCosplayTalk1(s, scene);
      break;
    case 'nerdvana_cosplay_talk1_1':
      enterNerdvanaCosplayTalk1_1(s, scene);
      break;
    case 'nerdvana_cosplay_talk1_2':
      enterNerdvanaCosplayTalk1_2(s, scene);
      break;
    case 'nerdvana_bj1':
      enterNerdvanaBj1(s, scene);
      break;
    case 'nerdvana_kuni1':
      enterNerdvanaKuni1(s, scene);
      break;
    case 'nerdvana_cosplay_talk1_3':
      enterNerdvanaCosplayTalk1_3(s, scene);
      break;
    case 'Add_SMS1':
      enterAdd_SMS1(s, scene);
      break;
    case 'Add_SMS_reminder':
      enterAdd_SMSReminder(s, scene);
      break;
    case 'Add_SMS_failure':
      enterAdd_SMSFailure(s, scene);
      break;
    case 'Add_SMS_package1':
      enterAdd_SMSPackage1(s, scene);
      break;
    case 'Add_SMS_outfit1':
      enterAdd_SMSOutfit1(s, scene);
      break;
    case 'Add_SMS2':
      enterAdd_SMS2(s, scene);
      break;
    case 'Add_SMS2_1':
      enterAdd_SMS2_1(s, scene);
      break;
    case 'Add_SMS2_reminder':
      enterAdd_SMS2Reminder(s, scene);
      break;
    case 'Add_SMS3':
      enterAdd_SMS3(s, scene);
      break;
    case 'Add_SMS_Nerdvana':
      enterAdd_SMS_Nerdvana(s, scene);
      break;
    case 'sms_EOC':
      enterSms_EOC(s, scene);
      break;
    case 'set_SMSTree':
      enterSet_SMSTree(s, scene);
      break;
    case 'Add_SMS_repeat':
      enterAdd_SMSRepeat(s, scene);
      break;
    case 'sms_repeat_end1':
      enterSmsRepeatEnd1(s, scene);
      break;
    case 'sms_repeat_switch1':
      enterSmsRepeatSwitch1(s, scene);
      break;
    case 'sms_repeat_selfie1':
      enterSmsRepeatSelfie1(s, scene);
      break;
    case 'sms_repeat_first_favour':
      enterSmsRepeatFirstFavour(s, scene);
      break;
    case 'sms_repeat_setup_first_gift':
      enterSmsRepeatSetupFirstGift(s, scene);
      break;
    case 'sms_repeat_switch2':
      enterSmsRepeatSwitch2(s, scene);
      break;
    case 'sms_repeat_EOC':
      enterSmsRepeat_EOC(s, scene);
      break;
    case 'Add_SMS_package_repeat':
      enterAdd_SMSPackageRepeat(s, scene);
      break;
    case 'Add_SMS_package_repeat2':
      enterAdd_SMSPackageRepeat2(s, scene);
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
