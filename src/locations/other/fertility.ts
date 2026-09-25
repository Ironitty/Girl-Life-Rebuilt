import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterAutoPill(s: GameState, scene: SceneBuilder): void {
  while (true) {
    if (((s as any).daystart ?? 0) <= ((s as any).tabletkichday ?? 0)) {
      return;
    }
    (s as any).tabletkichday = ((s as any).daystart ?? 0);
    (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (((s as any).tabletkipi ?? 0));
    (s as any).tabletkipi = 0;
    (s as any).tabletkipt = 0;
    if (((s as any).tabletkicheck ?? 0) === 1) {
      (s as any).temp_img = '<img height = ' + (((s as any).stat_cfg ?? 0)?.['icon_height']) + ' src="images/system/icons/status/bc_pill.png"><br>';
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
        (s as any).tabletkicheck = 0;
        qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You are out of birth control pills.');
        (s as any).tabletkipi = (-5);
        break;
      } else {
        if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 28) {
          qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You have just opened your last package of birth control pills. You need to buy more.');
        } else {
          if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] === 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] <= 5) {
            qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You are running out of birth control pills, you only have a few left.');
          }
        }
      }
      ((s as any).birth_control = (s as any).birth_control ?? {})['using_bc'] = 3;
      (s as any).tabletkimm = (100 * (((s as any).pcs_willpwr ?? 0) / ((s as any).willpowermax ?? 0))) + ((s as any).pcs_mood ?? 0);
      if (((s as any).pcs_sleep ?? 0) < 10) {
        (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) - ((100 - (((s as any).pcs_sleep ?? 0) * 10)));
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0) / 4) {
        (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) / 4;
      } else {
        if (((s as any).pcs_mood ?? 0) < 10) {
          (s as any).tabletkimm = ((s as any).tabletkimm ?? 0) / 2;
        }
      }
      (s as any).tabletkiap = ((s as any).tabletkimm ?? 0);
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) + ((((s as any).pcs_intel ?? 0) * 4) + (((s as any).pcs_sprt ?? 0) * 2) + (((s as any).age ?? 0) * 3));
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) - (((((s as any).kid ?? 0) * 30) + (((s as any).abort ?? 0) * 2) - (((s as any).tabletkipd ?? 0) * ((60 - ((s as any).age ?? 0)) / 10))));
      (s as any).temprand = (Math.floor(Math.random() * ((200 + (((s as any).tabletkimm ?? 0) - ((100 - ((s as any).pcs_sprt ?? 0)) * 3))) - 0 + 1)) + (0));
      (s as any).tabletkiap = ((s as any).tabletkiap ?? 0) + (((s as any).temprand ?? 0));
      if (((s as any).tabletkiap ?? 0) < 300) {
        if (((s as any).tabletkipd ?? 0) > -10) {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).willpowermax ?? 0) / 4) {
            qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You stare at your package of birth control pills, you know you should take one but you can\'t quite work up enough effort to care.');
          } else {
            if (((s as any).pcs_mood ?? 0) < 10) {
              qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You stare at your package of birth control pills, but you don\'t open it.');
            } else {
              if (((s as any).pcs_sleep ?? 0) < 10) {
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You fumble with your birth control pills, trying to get a pill out. You finally give up too tired to manage it.');
              } else {
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You just realized you forgot to take your birth control pill today.');
              }
            }
          }
        }
        (s as any).tabletkipt = 2;
        (s as any).tabletkipi = (-4);
      } else {
        if (((s as any).tabletkiap ?? 0) < 350) {
          (s as any).temprand = (Math.floor(Math.random() * 6) + 0);
        } else {
          (s as any).temprand = (Math.floor(Math.random() * 1001) + 0);
        }
        if ((!((s as any).temprand ?? 0))) {
          (s as any).temprand = (Math.floor(Math.random() * 2) + 0);
          if ((!((s as any).temprand ?? 0))) {
            qspCall(s, 'din_bad', 'takepill');
            (s as any).tabletkipt = (-2);
            (s as any).tabletkipi = 1;
          } else {
            (s as any).tabletkipt = 3;
            (s as any).tabletkipi = (-3);
          }
          if (((s as any).tabletkipd ?? 0) > -10) {
            qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You find yourself holding the bottle of birth control pills, you cannot remember if you took one or not.');
          }
          if (((s as any).tabletkipd ?? 0) > 0) {
            if ((!(Math.floor(Math.random() * 10) + 0))) {
              if (((s as any).tabletkipt ?? 0) < 0) {
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You don\'t think you have taken your pill today.');
              } else {
                (s as any).pilldaychk = ((s as any).daystart ?? 0);
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You think you have taken your pill today.');
              }
            } else {
              if (((s as any).tabletkipt ?? 0) > 0) {
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You don\'t think you have taken your pill today.');
              } else {
                (s as any).pilldaychk = ((s as any).daystart ?? 0);
                qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You think you have taken your pill today.');
              }
            }
          }
        } else {
          if (((s as any).droutine ?? 0)?.['active'] === 0) {
            qspCall(s, 'notification', 'add', '' + ((s as any).temp_img ?? 0) + 'You take your birth control pill for the day.');
          }
          (s as any).pilldaychk = ((s as any).daystart ?? 0);
          qspCall(s, 'din_bad', 'takepill');
          if ((Math.floor(Math.random() * 8) + 0) === 0  &&  ((s as any).tabletkiday ?? 0) >= (((s as any).daystart ?? 0) - 1)) {
            (s as any).tabletkipd = ((s as any).tabletkipd ?? 0) + (1);
          }
          (s as any).tabletkiday = ((s as any).daystart ?? 0);
          (s as any).tabletkipt = 0;
          (s as any).tabletkipi = 0;
        }
      }
    }
    if (((s as any).birth_control ?? 0)?.['using_bc'] > 0) {
      if (((s as any).pilldaychk ?? 0) === ((s as any).daystart ?? 0)) {
        (s as any).pilldays = ((s as any).pilldays ?? 0) + (1);
        ((s as any).birth_control = (s as any).birth_control ?? {})['using_bc'] = 3;
      } else {
        (s as any).pilldays = ((s as any).pilldays ?? 0) - (1);
        if (((s as any).placebopart ?? 0) <= 0) {
          ((s as any).birth_control = (s as any).birth_control ?? {})['using_bc'] = ((s as any).birth_control['using_bc'] ?? 0) - (1);
        }
      }
    }
    if (((s as any).pilldays ?? 0) > 18) {
      (s as any).pilldays = 18;
    }
    if (((s as any).pilldays ?? 0) < 0) {
      (s as any).pilldays = 0;
    }
    if (((s as any).birth_control ?? 0)?.['using_bc'] < 0) {
      (s as any).pilldays = 0;
    }
    if (((s as any).tabletkiday ?? 0) < ((s as any).daystart ?? 0) - 5) {
      ((s as any).birth_control = (s as any).birth_control ?? {})['using_bc'] = 0;
    }
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      ((s as any).stat = (s as any).stat ?? {})['forgot_bc_pill'] = 0;
    } else {
      if (((s as any).pilldaychk ?? 0) < ((s as any).daystart ?? 0) - 1  &&  ((s as any).pilldaychk ?? 0) > ((s as any).daystart ?? 0) - 5  &&  ((s as any).pillcon2 ?? 0) > 0) {
        ((s as any).stat = (s as any).stat ?? {})['forget_bc_count'] = ((s as any).stat['forget_bc_count'] ?? 0) + (1);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlStatusUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
    break;
  }
  // LABEL: auto_pill_break_goto
  (s as any).temp_img = undefined;
  scene.build();
}

function enterDailyUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tabletkishot ?? 0) <= 0) {
    (s as any).pillcon = ((s as any).pillcon ?? 0) - (1000);
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) - (1000);
  }
  if (((s as any).pillcon ?? 0) < 0) {
    (s as any).pillcon = 0;
  }
  if (((s as any).pillcon2 ?? 0) < 0) {
    (s as any).pillcon2 = 0;
  }
  if ((!((s as any).tabletkicheck ?? 0))) {
    if (((s as any).tabletkiday ?? 0) >= (((s as any).daystart ?? 0) - 1)  &&  ((s as any).tabletkipt ?? 0) === 0  &&  (!(Math.floor(Math.random() * 8) + 0))) {
      (s as any).tabletkipt = 1;
    }
    if (((s as any).pillcon ?? 0) > 0  &&  ((s as any).tabletkipi ?? 0) === 0  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  (((s as any).tabletkiday ?? 0) + 15) > (!((s as any).daystart ?? 0))) {
      (s as any).tabletkipi = (-1);
    }
  }
  if (((s as any).lutH ?? 0) > (((s as any).lutH_max ?? 0) - 75)  &&  ((s as any).birth_control ?? 0)?.['placebo_skip'] === 0) {
    (s as any).placebopart = 1;
  } else {
    (s as any).placebopart = 0;
  }
  if (((s as any).tabletkicheck ?? 0) === 2) {
    if (((s as any).tabletkishot ?? 0) !== 0) {
      (s as any).mesec = 0;
      if ((Math.floor(Math.random() * 1001) + 0) === 1000) {
        (s as any).EggRH = (Math.floor(Math.random() * 61) + 20);
      } else {
        (s as any).EggRH = 0;
      }
      (s as any).focH = ((s as any).EggRH ?? 0);
    }
    if (((s as any).tabletkishot ?? 0) <= 0) {
      (s as any).pillcon = ((s as any).pillcon ?? 0) - (29000);
      (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) - (29000);
      if (((s as any).tabletkishot ?? 0) < 0) {
        (s as any).tabletkishot = 0;
      }
    }
    if (((s as any).shotdays ?? 0) < 2) {
      (s as any).tabletkicheck = 0;
      alert('Your birth control shot is no longer protecting you.');
    } else {
      if (((s as any).shotdays ?? 0) < 10) {
        alert('Your birth control shot is past due for renewal. The chemicals regulating your fertility cycle are wearing off.');
      } else {
        if (((s as any).shotdays ?? 0) > 10  &&  ((s as any).shotdays ?? 0) < 14) {
          alert('You are due for a birth control shot soon if you do not get one, you might get pregnant.');
        } else {
          if (((s as any).shotdays ?? 0) === 10) {
            alert('Your birth control shot is due for renewal tomorrow.');
          }
        }
      }
    }
  }
  if (((s as any).tabletkishot ?? 0) > 0) {
    (s as any).tabletkishot = ((s as any).tabletkishot ?? 0) - (1);
  }
  if (((s as any).shotdays ?? 0) > 0) {
    (s as any).shotdays = ((s as any).shotdays ?? 0) - (1);
  }
  if (((s as any).spellTarget ?? 0)?.['birth_control'] === 'self') {
    (s as any).pillcon = 40000;
    (s as any).pillcon2 = 40000;
    ((s as any).spellTime = (s as any).spellTime ?? {})['birth_control'] = ((s as any).spellTime['birth_control'] ?? 0) - (1);
    if (((s as any).spellTime ?? 0)?.['birth_control'] > 0  &&  ((s as any).spellTime ?? 0)?.['birth_control'] < 30) {
      ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 2;
      alert('Your birth control spell will only last for ' + (((s as any).spellTime ?? 0)?.['birth_control']) + ' more' + ((((s as any).spellTime ?? 0)?.['birth_control'] === 1) ? ('day.') : ('days.')));
    } else {
      if (((s as any).spellTime ?? 0)?.['birth_control'] < 1) {
        ((s as any).spellTarget = (s as any).spellTarget ?? {})['birth_control'] = '';
        (s as any).pillcon = 0;
        (s as any).pillcon2 = 0;
        alert('Your birth control spell has ended. You\'ll need to recast it if you don\'t want to get pregnant.');
      }
    }
  } else {
    if (((s as any).birth_control ?? 0)?.['implant_status'] > 1) {
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
      if (((s as any).pillcon ?? 0) > 40000) {
        (s as any).pillcon = 40000;
      }
      (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
      if (((s as any).pillcon2 ?? 0) > 40000) {
        (s as any).pillcon2 = 40000;
      }
      ((s as any).birth_control = (s as any).birth_control ?? {})['implant_timer'] = ((s as any).birth_control['implant_timer'] ?? 0) - (1);
      if ((((s as any).birth_control ?? 0)?.['implant_timer'] - 1090) > 0) {
        qspCall(s, 'pain', '' + ((((s as any).birth_control ?? {})?.['implant_timer'] ?? 0) - 1090)*2 + '', 'armL', 'ache');
      } else {
        if (((s as any).birth_control ?? 0)?.['implant_timer'] > 0  &&  ((s as any).birth_control ?? 0)?.['implant_timer'] < 30) {
          ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 2;
          scene.text(`Your birth control implant is only good for ${(((s as any).birth_control ?? 0)?.['implant_timer'] ?? '')} more` + ((((s as any).birth_control ?? 0)?.['implant_timer'] === 1) ? ('day.') : ('days.')));
        } else {
          if (((s as any).birth_control ?? 0)?.['implant_timer'] < 0) {
            ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 1;
            alert('You should renew or remove your birth control implant.');
          }
        }
      }
    } else {
      if (((s as any).birth_control ?? 0)?.['implant_status'] === 1) {
        alert('You should renew or remove your birth control implant.');
      }
    }
  }
  (s as any).MenCal = [...((s as any).MenCal ?? []), String(((s as any).cycle ?? 0))];
  if (Object.keys((s as any).MenCal ?? {}).length === 60) {
    (s as any).MenCal = undefined;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlStatusUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.build();
}

function enterBirthControlStatusUpdate(s: GameState, scene: SceneBuilder): void {
  ((s as any).birth_control = (s as any).birth_control ?? {})['old_pillcon'] = ((s as any).pillcon ?? 0);
  ((s as any).birth_control = (s as any).birth_control ?? {})['old_pillcon2'] = ((s as any).pillcon2 ?? 0);
  if (((s as any).pillcon ?? 0) > 26000) {
    ((s as any).birth_control = (s as any).birth_control ?? {})['safe'] = 1;
  } else {
    if (((s as any).placebopart ?? 0) <= 0) {
      ((s as any).birth_control = (s as any).birth_control ?? {})['safe'] = 0;
    }
  }
  if (((s as any).pillcon2 ?? 0) > 26000) {
    if (((s as any).tabletkishot ?? 0) > 0  &&  ((s as any).birth_control ?? 0)?.['type'] !== 'shot') {
      ((s as any).birth_control = (s as any).birth_control ?? {})['type'] = 'shot';
    } else {
      if (((s as any).birth_control ?? 0)?.['type'] !== 'pill') {
        ((s as any).birth_control = (s as any).birth_control ?? {})['type'] = 'pill';
      }
    }
    ((s as any).birth_control = (s as any).birth_control ?? {})['think_safe'] = 1;
  } else {
    if (((s as any).placebopart ?? 0) <= 0) {
      ((s as any).birth_control = (s as any).birth_control ?? {})['think_safe'] = 0;
      ((s as any).birth_control = (s as any).birth_control ?? {})['type'] = 'none';
    }
  }
  scene.build();
}

function enterCumArrcheat(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h2>Cheat Menu - OOX Debug</h2></center>');
  if ((!((s as any).cycle ?? 0))) {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'menstruating with ' + ((s as any).mesec ?? 0) + ' hours remaining';
  } else {
    if (((s as any).cycle ?? 0) === 1) {
      ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'in your follicular phase with an egg release hormone level of ' + ((s as any).EggRH ?? 0) + ' with around ' + ((s as any).focH_max ?? 0) - ((s as any).focH ?? 0) + ' hours remaining until ovulation';
    } else {
      if (((s as any).cycle ?? 0) === 2) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'ovulating with around ' + ((s as any).Ovulate ?? 0) + ' hours remaining until your luteal phase begins and ' + ((s as any).EggRH ?? 0) + ' remaining egg release hormone. You have ' + ((s as any).UnfertEgg ?? 0) + ' unfertilized egg and ' + ((s as any).FertEgg ?? 0) + ' unimplanted zygote. It has been ' + ((s as any).ferteggage ?? 0) + ' hours since ovulation began';
      } else {
        if (((s as any).cycle ?? 0) === 3) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'in your luteal phase with ' + ((s as any).BabyEmbryo ?? 0) + ' foetus and ' + ((s as any).FertEgg ?? 0) + ' unimplanted zygote. Your body currently has a pregnancy chemical level of ' + ((s as any).pregChem ?? 0) + '. It has been ' + ((s as any).ferteggage ?? 0) + ' hours since you ovulated. You have around ' + ((s as any).lutH_max ?? 0) - ((s as any).lutH ?? 0) + ' hours remaining until menstruation or official pregnancy';
        } else {
          if (((s as any).cycle ?? 0) === 4) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'in your post pregnancy recovery phase. You have around ' + ((s as any).RecovH ?? 0) + ' hours remaining before your follicular phase begins';
          } else {
            if (((s as any).cycle ?? 0) === 5) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'pregnant. Your body currently has a pregnancy chemical level of ' + ((s as any).pregChem ?? 0) + '. You have ' + ((s as any).BabyEmbryo ?? 0) + ' baby growing inside you';
            } else {
              if (((s as any).cycle ?? 0) === 6) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'menopausal';
              } else {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[1] = 'an unknown value';
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).steriletu ?? 0) < 0) {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = '. You have had a tubal ligation procedure';
  } else {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = '';
  }
  if (((s as any).lactation ?? 0)?.['active'] > 0) {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = '. You are lactating. You currently have ' + (((s as any).lactation ?? {})?.['breastmv'] ?? 0)/1000 + ' millilitres of milk stored, with a capacity of ' + (((s as any).lactation ?? {})?.['breastmm'] ?? 0)/1000 + ' millilitres';
  } else {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = '';
  }
  if (((s as any).tabletkicheck ?? 0) === 2) {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = '. You are currently protected from pregnancy by a birth control shot. You have ' + ((s as any).tabletkishot ?? 0) + ' days until it runs out';
  } else {
    if (((s as any).tabletkicheck ?? 0) === 1) {
      if (((s as any).tabletkiday ?? 0) === ((s as any).daystart ?? 0)) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[6] = '. You have taken your pill today';
      } else {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[6] = '. You have not taken your pill today';
      }
      ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = '. You automatically take your pill. Your current pill discipline is ' + ((s as any).tabletkipd ?? 0) + '' + (((s as any).cycletemp ?? 0)?.[6] ?? 0) + '. ' + ((s as any).tabletkipt ?? 0) + ' will be added to your pill discipline if you take the pill now, and ' + ((s as any).tabletkipi ?? 0) + ' will be added to your pill discipline if you do no additional action. You currently have ' + ((s as any).pillcon ?? 0) + ' units of birth control chemical in your body, though you believe it is actually ' + ((s as any).pillcon2 ?? 0) + '.';
    } else {
      if (((s as any).pillcon2 ?? 0) > 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = '. You currently have ' + ((s as any).pillcon ?? 0) + ' units of birth control chemical in your body, but you think it is actually ' + ((s as any).pillcon2 ?? 0) + '.';
      } else {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = '';
      }
    }
  }
  if (((s as any).pilldays ?? 0) > 0) {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[8] = 'You believe you have taken your birth control pill ' + ((s as any).pilldays ?? 0) + ' days in a row.';
  } else {
    ((s as any).cycletemp = (s as any).cycletemp ?? {})[8] = '';
  }
  scene.text(`You are currently ${(((s as any).cycletemp ?? 0)?.[1] ?? '')}${(((s as any).cycletemp ?? 0)?.[2] ?? '')}${(((s as any).cycletemp ?? 0)?.[4] ?? '')} ${(((s as any).cycletemp ?? 0)?.[8] ?? '')} Your womb damage is at ${((s as any).sterilewb ?? '')} and your Ovary damage is at ${((s as any).sterileov ?? '')}${(((s as any).cycletemp ?? 0)?.[2] ?? '')}. You have been cummed on or inside yourself ${(((s as any).stat ?? 0)?.['cum_count'] ?? '')} times.`);
  (s as any).cycletemp_cnt = 0;
  if (((s as any).cycletemp_cnt ?? 0) > 0) {
    (s as any).cycletemp = 0;
    scene.text(`Potential Father List (of ${((s as any).cycletemp_cnt ?? '')}):`);
    do {
      if (((s as any).wombpotfath ?? 0)?.[String((s as any).cycletemp ?? 0)] !== 'unknown') {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[5] = (((s as any).npc_usedname ?? 0)?.[(((s as any).wombpotfath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0)] ?? 0);
      } else {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[5] = '';
      }
      scene.text(`Father ${((s as any).cycletemp ?? '')}: ${(((s as any).wombpotfath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} - ${(((s as any).cycletemp ?? 0)?.[5] ?? '')}`);
      (s as any).cycletemp = ((s as any).cycletemp ?? 0) + (1);
    } while (((s as any).cycletemp ?? 0) < Object.keys((s as any).wombpotfath ?? {}).length);
  } else {
    scene.text('No listed potential fathers.');
  }
  (s as any).cycletemp_cnt = 0;
  if (((s as any).cycletemp_cnt ?? 0) > 0) {
    (s as any).cycletemp = 0;
    scene.text(`Sperm in your womb (of ${((s as any).cycletemp_cnt ?? '')}):`);
    scene.text('<table border=1><tr><th>Index</th><th>ID</th><th>Owner</th><th>Potential Potency</th><th>Current Potency</th><th>Method of Acquisition</th><th>Contraception Type</th><th>Age in Hours</th><th>Aware</th></tr>');
    while (true) {
      if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'Vaginal intercourse';
      } else {
        if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 1) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'From spatter on the vagina';
        } else {
          if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 2) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'From the anal area';
          } else {
            if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 3) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'From sperm on clothing';
            } else {
              if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 4) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'From sperm on fingers';
              } else {
                if (((s as any).cumarrdel ?? 0)?.[String((s as any).cycletemp ?? 0)] === 5) {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'From sperm on wipes';
                } else {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'improperly defined';
                }
              }
            }
          }
        }
      }
      if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'No contraception used';
      } else {
        if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 1) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'You lied about being on the pill';
        } else {
          if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 2) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = ((((s as any).birth_control ?? 0)?.['implant_status'] > 1) ? ('You have a birth control implant') : ('You were on the pill'));
          } else {
            if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 3) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'You used a condom';
            } else {
              if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 4) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'The condom broke';
              } else {
                if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 5) {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'The condom slipped off inside you';
                } else {
                  if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 6) {
                    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'The condom was sabotaged by someone else';
                  } else {
                    if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 7) {
                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'You sabotaged the condom';
                    } else {
                      if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 8) {
                        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Precum had sperm in it';
                      } else {
                        if (((s as any).cumarrcon ?? 0)?.[String((s as any).cycletemp ?? 0)] === 9) {
                          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Semen from a previous sexual act was pushed into the vagina';
                        } else {
                          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'improperly defined';
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
      ((s as any).cycletemp = (s as any).cycletemp ?? {})[5] = (((s as any).npc_usedname ?? 0)?.[(((s as any).cumarrnam ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0)] ?? 0);
      scene.text(`<tr><td>${((s as any).cycletemp ?? '')}</td><td>${(((s as any).cumarrcnt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).cumarrnam ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} - ${(((s as any).cycletemp ?? 0)?.[5] ?? '')}</td><td>${(((s as any).cumarrppt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} Sperm</td><td>${(((s as any).cumarrcpt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} Sperm</td><td>${(((s as any).cycletemp ?? 0)?.[2] ?? '')}</td><td>${(((s as any).cycletemp ?? 0)?.[3] ?? '')}</td><td>${(((s as any).Cumarrage ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).cumarrkno ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td></tr>`);
      (s as any).cycletemp = ((s as any).cycletemp ?? 0) + (1);
      if (((s as any).cycletemp ?? 0) < Object.keys((s as any).cumarrnam ?? {}).length) {
        break;
      } else {
        scene.text('</table>');
      }
    }
  } else {
    scene.text('No sperm is registered in your womb.');
  }
  (s as any).cycletemp_cnt = 0;
  if (((s as any).cycletemp_cnt ?? 0) > 0) {
    (s as any).cycletemp = 0;
    scene.text(`Sperm spatter (of ${((s as any).cycletemp_cnt ?? '')}):`);
    scene.text('<table border=1><tr><th>Index</th><th>ID</th><th>Sperm Owner</th><th>Potential Potency</th><th>Age in Hours</th><th>Aware</th><th>Volume (ml)</th><th>Location</th><th>Spread Value</th></tr>');
    while (true) {
      (s as any).cycletemp_vol = (((s as any).sparrvol ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0) / 10;
      if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'In your Vagina';
      } else {
        if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 1) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your labia';
        } else {
          if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 2) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your panties over your vagina';
          } else {
            if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 3) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'In your anus';
            } else {
              if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 4) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your butt';
              } else {
                if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 5) {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your panties over your butt';
                } else {
                  if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 6) {
                    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your clothes in your groin area';
                  } else {
                    if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 7) {
                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your clothes';
                    } else {
                      if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 8) {
                        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your back';
                      } else {
                        if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 9) {
                          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your legs';
                        } else {
                          if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 10) {
                            ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your arms';
                          } else {
                            if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 11) {
                              ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your face';
                            } else {
                              if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 12) {
                                ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Inside your mouth';
                              } else {
                                if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 13) {
                                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your hands';
                                } else {
                                  if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 14) {
                                    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your stomach';
                                  } else {
                                    if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 15) {
                                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'On your breasts';
                                    } else {
                                      if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 16) {
                                        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'In your hair';
                                      } else {
                                        if (((s as any).sparrloc ?? 0)?.[String((s as any).cycletemp ?? 0)] === 17) {
                                          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'In a condom in your vagina';
                                        } else {
                                          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'improperly defined';
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
      ((s as any).cycletemp = (s as any).cycletemp ?? {})[5] = (((s as any).npc_usedname ?? 0)?.[(((s as any).sparrnam ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0)] ?? 0);
      scene.text(`<tr><td>${((s as any).cycletemp ?? '')}</td><td>${(((s as any).sparrcnt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).sparrnam ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} - ${(((s as any).cycletemp ?? 0)?.[5] ?? '')}</td><td>${(((s as any).sparrppt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).sparrage ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).sparridt ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${((s as any).cycletemp_vol ?? '')}</td><td>${(((s as any).cycletemp ?? 0)?.[3] ?? '')}</td><td>${(((s as any).sparrslc ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td></tr>`);
      (s as any).cycletemp = ((s as any).cycletemp ?? 0) + (1);
      if (((s as any).cycletemp ?? 0) < Object.keys((s as any).sparrvol ?? {}).length) {
        break;
      } else {
        scene.text('</table>');
      }
    }
  } else {
    scene.text('No sperm spatter is registered.');
  }
  (s as any).cycletemp_cnt = 0;
  if (((s as any).cycletemp_cnt ?? 0) > 0) {
    (s as any).cycletemp = 0;
    if (((s as any).wombthfath ?? 0) !== 'unknown') {
      scene.text(`Current father set as the father you think is of the children in the womb: ${((s as any).wombthfath ?? '')}`);
    }
    scene.text(`Babies and Children (of ${((s as any).cycletemp_cnt ?? '')}):`);
    scene.text('<table border=1><tr><th>Index</th><th>Name</th><th>Age</th><th>Born(M/D/Y)</th><th>Sex</th><th>Pregnancy Type</th><th>Biological Father</th><th>Believed Father</th><th>Eye Color</th><th>Hair Color</th><th>Type</th><th>Contraception Type</th></tr>');
    while (true) {
      if (((s as any).polkid ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'F';
      } else {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[2] = 'M';
      }
      if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Zygote';
      } else {
        if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 1) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Healthy Implantation';
        } else {
          if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 2) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Ectopic Pregnancy';
          } else {
            if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 3) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Breach';
            } else {
              if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 40) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Damaged Foetus from Alcohol/Smoking/Other drugs';
              } else {
                if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 45) {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Damaged Foetus from other sources';
                } else {
                  if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 50) {
                    ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Severely Damaged Foetus';
                  } else {
                    if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 100) {
                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Foetal Death';
                    } else {
                      if (((s as any).babyptype ?? 0)?.[String((s as any).cycletemp ?? 0)] === 105) {
                        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Foetal Death, will not self purge';
                      } else {
                        ((s as any).cycletemp = (s as any).cycletemp ?? {})[3] = 'Unlabelled Ptype';
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 0) {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'No contraception used';
      } else {
        if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 1) {
          ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'You lied about being on the pill';
        } else {
          if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 2) {
            ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'You were on the pill';
          } else {
            if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 3) {
              ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'You used a condom';
            } else {
              if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 4) {
                ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'The condom broke';
              } else {
                if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 5) {
                  ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'The condom slipped off inside you';
                } else {
                  if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 6) {
                    ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'The condom was sabotaged by someone else';
                  } else {
                    if (((s as any).ChildConType ?? 0)?.[String((s as any).cycletemp ?? 0)] === 7) {
                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'You sabotaged the condom';
                    } else {
                      ((s as any).cycletemp = (s as any).cycletemp ?? {})[4] = 'improperly defined';
                    }
                  }
                }
              }
            }
          }
        }
      }
      ((s as any).cycletemp = (s as any).cycletemp ?? {})[5] = (((s as any).npc_usedname ?? 0)?.[(((s as any).ChildFath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0)] ?? 0);
      if (((s as any).npc_usedname ?? 0)[((s as any).ChildThFath ?? 0)?.[String((s as any).cycletemp ?? 0)]] !== '') {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[7] = (((s as any).npc_usedname ?? 0)?.[(((s as any).ChildThFath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0)] ?? 0);
      } else {
        ((s as any).cycletemp = (s as any).cycletemp ?? {})[7] = (((s as any).ChildThFath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? 0);
      }
      scene.text(`<tr><td>${((s as any).cycletemp ?? '')}</td><td>${(((s as any).kidname ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).kidage ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).monthkid ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} / ${(((s as any).daykid ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} / ${(((s as any).yearkid ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).cycletemp ?? 0)?.[2] ?? '')}</td><td>${(((s as any).cycletemp ?? 0)?.[3] ?? '')}</td><td>${(((s as any).ChildFath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} - ${(((s as any).cycletemp ?? 0)?.[5] ?? '')}</td><td>${(((s as any).ChildThFath ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')} - ${(((s as any).cycletemp ?? 0)?.[7] ?? '')}</td><td>${(((s as any).eyeskid ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).hairkid ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).childtype ?? 0)?.[String((s as any).cycletemp ?? 0)] ?? '')}</td><td>${(((s as any).cycletemp ?? 0)?.[4] ?? '')}</td></tr>`);
      (s as any).cycletemp = ((s as any).cycletemp ?? 0) + (1);
      if (((s as any).cycletemp ?? 0) < Object.keys((s as any).ChildFath ?? {}).length) {
        break;
      } else {
        scene.text('</table>');
      }
    }
  } else {
    scene.text('No Pregnancies registered.');
  }
  (s as any).cycletemp = undefined;
  (s as any).cycletemp_cnt = undefined;
  (s as any).cycletemp_vol = undefined;
  scene.actions([
    { label: 'Return to cheat index', goto: ['cheatmenu_din', 'index'] },
  ]);
  scene.build();
}

function enterForcePregBy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).preg ?? 0) === 1) {
    return;
  }
  if (qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[1] ?? 0)) === 0) {
    return;
  }
  if (((s as any).npc_usedname ?? 0)[String((s as any).locArgs?.[1] ?? '')] === '') {
    return;
  }
  if (((s as any).npc_gender ?? 0)[String((s as any).locArgs?.[1] ?? '')] !== 0) {
    if (((s as any).npc_spermpot ?? 0)[String((s as any).locArgs?.[1] ?? '')] <= 0) {
      alert('ERROR: Cannot set PC pregnant. Father "' + ((s as any).locArgs?.[1] ?? 0) + '" is neither male nor fertile.');
      return;
    }
  }
  (s as any).fp_fathid = ((s as any).locArgs?.[1] ?? 0);
  (s as any).fp_fathname = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).fp_fathname ?? 0) === '') {
    (s as any).fp_fathname = (((s as any).npc_usedname ?? 0)?.[String((s as any).fp_fathid ?? 0)] ?? 0);
  }
  (s as any).fp_bio = ((s as any).fp_fathid ?? 0);
  (s as any).fp_bel = ((s as any).fp_fathid ?? 0);
  (s as any).fp_show = ((s as any).fp_fathname ?? 0);
  (s as any).wombthfath = ((s as any).fp_show ?? 0);
  (s as any).mesec = 0;
  (s as any).focH = 0;
  (s as any).EggRH = 0;
  (s as any).Ovulate = 0;
  (s as any).UnfertEgg = 0;
  (s as any).lutH = 0;
  (s as any).RecovH = 0;
  (s as any).preg = 1;
  (s as any).cycle = 5;
  (s as any).lastovulation = ((s as any).daystart ?? 0);
  if (((s as any).pregChem ?? 0) <= 150) {
    (s as any).pregChem = 150;
  }
  (s as any).babyembryo = ((s as any).babyembryo ?? 0) + (1);
  if (((s as any).fertegg ?? 0) > 0) {
    (s as any).fertegg = ((s as any).fertegg ?? 0) - (1);
  } else {
    (s as any).nextBaby = 0;
    (s as any).Temppolkid = (Math.floor(Math.random() * 2) + 0);
    ((s as any).polkid = (s as any).polkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).Temppolkid ?? 0);
    ((s as any).kidname = (s as any).kidname ?? {})[String((s as any).nextBaby ?? 0)] = 'unborn';
    ((s as any).kidage = (s as any).kidage ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).babyptype = (s as any).babyptype ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).ChildFath = (s as any).ChildFath ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).fp_bio ?? 0);
    ((s as any).ChildThFath = (s as any).ChildThFath ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).fp_bel ?? 0);
    ((s as any).hairkid = (s as any).hairkid ?? {})[String((s as any).nextBaby ?? 0)] = (Math.floor(Math.random() * 4) + 0);
    ((s as any).eyeskid = (s as any).eyeskid ?? {})[String((s as any).nextBaby ?? 0)] = (Math.floor(Math.random() * 4) + 0);
    ((s as any).ChildConType = (s as any).ChildConType ?? {})[String((s as any).nextBaby ?? 0)] = 0;
    ((s as any).babyptype = (s as any).babyptype ?? {})[String((s as any).nextBaby ?? 0)] = 1;
  }
  qspCall(s, 'din_bad', 'd_cycreport_upduedate');
  (s as any).fp_fathid = undefined;
  (s as any).fp_fathname = undefined;
  (s as any).fp_bio = undefined;
  (s as any).fp_bel = undefined;
  (s as any).fp_show = undefined;
  (s as any).dateVars = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'auto_pill':
      enterAutoPill(s, scene);
      break;
    case 'daily_update':
      enterDailyUpdate(s, scene);
      break;
    case 'birth_control_status_update':
      enterBirthControlStatusUpdate(s, scene);
      break;
    case 'cum_arrcheat':
      enterCumArrcheat(s, scene);
      break;
    case 'force_preg_by':
      enterForcePregBy(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fertility: LocationDef = {
  name: 'fertility',
  title: '<center><h2>Cheat Menu - OOX Debug</h2></center>',
  region: 'other',
  enter: enter,
};
