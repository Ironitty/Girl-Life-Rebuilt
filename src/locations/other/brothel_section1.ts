import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = Math.min(100, ((s as any).brothel_vars ?? 0)?.['orgasm_meter']);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = Math.min(100, ((s as any).brothel_vars ?? 0)?.['rage_meter']);
  scene.build();
}

function enterPrintStats(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Playroom</h3>');
  // TODO-QSP: dynamic text: <b>Orgasm meter: <<brothel_vars['orgasm_meter']>> / 100</b>
  scene.text(`<b>Orgasm meter: ${((s as any).brothel_vars ?? 0)?.['orgasm_meter'] ?? ''} / 100</b>`);
  // TODO-QSP: dynamic text: <b>Rage meter: <<brothel_vars['rage_meter']>> / 100</b>
  scene.text(`<b>Rage meter: ${((s as any).brothel_vars ?? 0)?.['rage_meter'] ?? ''} / 100</b>`);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSection1PrefUpdate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fetish', 'add_exp', 'sub');
  qspCall(s, 'fetish', 'add_exp', 'prostitution');
  if (((s as any).locArgs?.[1] ?? 0) === 'maso') {
    qspCall(s, 'fetish', 'add_exp', 'maso');
    if (((s as any).fetishes ?? 0)?.['maso_pref'] > 20) {
      qspCall(s, 'mood', 'raise', 'tiny');
    } else {
      if (((s as any).fetishes ?? 0)?.['maso_pref'] < -20) {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
    }
    if (((s as any).pain ?? 0)?.['total'] >= 10) {
      if (((s as any).pain ?? 0)?.['total'] <= 45) {
        if ((Math.floor(Math.random() * 10) + 1) === 1) {
          if (((s as any).fetishes ?? 0)?.['maso_pref'] < -25) {
            qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
          } else {
            if ((Math.floor(Math.random() * 100) + 1) <= Math.min(((s as any).pcs_horny ?? 0), 100)) {
              qspCall(s, 'fetish', 'add_pref', 'maso', 1);
            } else {
              qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
            }
          }
        }
      } else {
        if (((s as any).fetishes ?? 0)?.['maso_pref'] >= 15) {
          if ((Math.floor(Math.random() * 8) + 1) === 1) {
            qspCall(s, 'fetish', 'add_pref', 'maso', 1);
          }
        } else {
          if ((Math.floor(Math.random() * 8) + 1) === 1) {
            qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
          }
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'bound') {
      qspCall(s, 'fetish', 'add_exp', 'bound');
      if (((s as any).fetishes ?? 0)?.['bound_pref'] > 20) {
        qspCall(s, 'mood', 'raise', 'tiny');
      } else {
        if (((s as any).fetishes ?? 0)?.['bound_pref'] < -20) {
          qspCall(s, 'mood', 'lower', 'tiny');
        }
      }
      if ((Math.floor(Math.random() * 10) + 1) === 1) {
        if (((s as any).fetishes ?? 0)?.['bound_pref'] > 15) {
          qspCall(s, 'fetish', 'add_pref', 'bound', 1);
        } else {
          if (((s as any).fetishes ?? 0)?.['bound_pref'] < -15) {
            qspCall(s, 'fetish', 'add_pref', 'bound', (-1));
          } else {
            if ((Math.floor(Math.random() * 100) + 1) <= Math.min(((s as any).pcs_horny ?? 0), 100)) {
              qspCall(s, 'fetish', 'add_pref', 'bound', 1);
            } else {
              qspCall(s, 'fetish', 'add_pref', 'bound', (-1));
            }
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'humiliation') {
        qspCall(s, 'fetish', 'add_exp', 'humiliation');
        if (((s as any).fetishes ?? 0)?.['humiliation_pref'] > 20) {
          qspCall(s, 'mood', 'raise', 'tiny');
        } else {
          if (((s as any).fetishes ?? 0)?.['humiliation_pref'] < -20) {
            qspCall(s, 'mood', 'lower', 'tiny');
          }
        }
        if ((Math.floor(Math.random() * 10) + 1) === 1) {
          if (((s as any).fetishes ?? 0)?.['humiliation_pref'] > 15) {
            qspCall(s, 'fetish', 'add_pref', 'humiliation', 1);
          } else {
            if (((s as any).fetishes ?? 0)?.['humiliation_pref'] < -15) {
              qspCall(s, 'fetish', 'add_pref', 'humiliation', (-1));
            } else {
              if ((Math.floor(Math.random() * 100) + 1) <= Math.min(((s as any).pcs_horny ?? 0), 100)) {
                qspCall(s, 'fetish', 'add_pref', 'humiliation', 1);
              } else {
                qspCall(s, 'fetish', 'add_pref', 'humiliation', (-1));
              }
            }
          }
        }
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'sub') {
          qspCall(s, 'fetish', 'add_exp', 'sub');
          if (((s as any).fetishes ?? 0)?.['sub_pref'] > 20) {
            qspCall(s, 'mood', 'raise', 'tiny');
          } else {
            if (((s as any).fetishes ?? 0)?.['sub_pref'] < -20) {
              qspCall(s, 'mood', 'lower', 'tiny');
            }
          }
          if ((Math.floor(Math.random() * 10) + 1) === 1) {
            if (((s as any).fetishes ?? 0)?.['sub_pref'] > 15) {
              qspCall(s, 'fetish', 'add_pref', 'sub', 1);
            } else {
              if (((s as any).fetishes ?? 0)?.['sub_pref'] < -15) {
                qspCall(s, 'fetish', 'add_pref', 'sub', (-1));
              } else {
                if ((Math.floor(Math.random() * 100) + 1) <= Math.min(((s as any).pcs_horny ?? 0), 100)) {
                  qspCall(s, 'fetish', 'add_pref', 'sub', 1);
                } else {
                  qspCall(s, 'fetish', 'add_pref', 'sub', (-1));
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

function enterSection1Cage(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Brothel Lobby</h3>');
  scene.text('<h5>Slave cage</h5>');
  scene.img('images/locations/shared/brothel/slaveincage.jpg');
  scene.text('You crawl into one of the small cages. The door locks on its own as it closes with an audible click.');
  scene.text('You are locked in a cage, like an animal. The bars are cold to the touch and don\'t budge in the slightest, stressing the feeling of helplessness even more.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for a client', goto: ['brothel_section1', 'section1_cage_client'] },
    { label: 'Try to get someone to let you out', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      qspGoto(s, 'brothel_section1', 'section1_cage_leave');
    } else {
      (s as any).i = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).i ?? 0))) {
        scene.text('The receptionist signals for you to wait, then goes back to looking at his screen. You start to doubt he will help you.');
        ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['receptionist_annoy'] = ((s as any).brothel_vars['receptionist_annoy'] ?? 0) + (1);
      } else {
        if (((s as any).i ?? 0) === 1) {
          scene.text('The receptionist ignores you and suddenly seems very busy with some paperwork. Only glancing at you when he thinks you won\'t notice.');
          ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['receptionist_annoy'] = ((s as any).brothel_vars['receptionist_annoy'] ?? 0) + (1);
        } else {
          scene.text('An other naked girl comes over "Sorry, I\'ll just get in trouble if I help you." she shrugs. "I\'m sure one of the masters will let you out soon." she winks.');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterSection1CageLeave(s: GameState, scene: SceneBuilder): void {
  (s as any).brothelCredit = ((s as any).brothelCredit ?? 0) - (2);
  scene.text('<h3>Brothel Lobby</h3>');
  scene.img('images/locations/shared/brothel/slaveincage.jpg');
  if (((s as any).brothel_vars ?? 0)?.['receptionist_annoy'] < 4) {
    scene.text('The receptionist comes over to the slave cage you\'re in. "What seems to be the matter?"');
    scene.text('He unlocks the self-locking mechanism from outside and lets you crawl out.');
    scene.text('"Only the customers should be getting you out of this cage. Don\'t make me come over here again."');
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['receptionist_annoy'] = ((s as any).brothel_vars['receptionist_annoy'] ?? 0) + (2);
    scene.actions([
      { label: 'Say an excuse and leave', goto: ['brothel', 'brothel_dressingroom'] },
    ]);
  } else {
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['receptionist_annoy'] = 0;
    scene.text('The receptionist comes over and unlocks the cage, only to pull you out by the hair. "Someone needs to teach you not to annoy your betters."');
    scene.text('He pushes you onto the cage and painfully holds your hair as he proceeds to spank your ass repeatedly.');
    qspCall(s, 'pain', '', 6, 'asscheeks', 'slap');
    qspCall(s, 'pain', '', 5, 'hair', 'bind');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/shared/brothel/caressface.jpg');
    qspCall(s, 'pain', '', 5, 'neck', 'choke');
    scene.text('He then pulls you up and pushes you against the wall "Now go and do whatever you need to do and then I want to see you back in there, being a good girl."');
    scene.actions([
      { label: 'Nod and flee into the girls room', goto: ['brothel', 'brothel_dressingroom'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1ForceWork(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Brothel Lobby</h3>');
  scene.text('<h5>Slave cage: Forced to work</h5>');
  scene.img('images/locations/shared/brothel/slaveincage.jpg');
  scene.text('"Running off, again and again, whore? If you can\'t make up your mind, maybe some training will help you."');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('With this, the receptionist grabs and undresses you, then locks you in a cage.');
    qspCall(s, 'clothing', 'strip');
    qspCall(s, 'underwear', 'remove');
    qspCall(s, 'stat', '');
  } else {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('With this, the receptionist grabs you, rips your panties off, then locks you in a cage.');
      qspCall(s, 'underwear', 'remove');
      qspCall(s, 'stat', '');
    } else {
      scene.text('With this, the receptionist grabs you, then locks you in a cage.');
    }
  }
  scene.text('"Stay there, someone will teach you a lesson in time. Hopefully you learn to be responsible."');
  (s as any).brothelCredit = 0;
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for a client', goto: ['brothel_section1', 'section1_cage_client'] },
  ]);
  scene.build();
}

function enterSection1CageClient(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'clock_in', 'highway_brothel_prostitute');
  (s as any).hadOwnanalPlugIn = ((s as any).analPlugIn ?? 0);
  qspCall(s, 'npcgeneratec', '', 0, 'Client', '', '', 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['electro_counter'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['like'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_whip'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_cane'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_pinch'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_punch'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_1'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_2'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_3'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_4'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_5'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_6'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_tied_7'] = 0;
  (s as any).analplay = 0;
  scene.text('<h3>Brothel Lobby</h3>');
  scene.text('<h5>Slave cage: a client has arrived</h5>');
  scene.img('images/locations/shared/brothel/slaveincageclient.jpg');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = Math.floor(Math.random() * 16) + 25;
    scene.text('A client comes to your cage, not saying a word.');
    scene.text('He unlocks the cage and harshly takes you by the collar, attaching a leash, leading you to one of the playrooms.');
  } else {
    if (((s as any).age ?? 0) < 18) {
      ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = Math.floor(Math.random() * 16) + 10;
      scene.text('"Ahh, my pet is already in its place I see."');
      scene.text('He scans you through the bars with hungry eyes.');
      scene.text('"Hmm, she looks young, exactly as I ordered. What is your age, slave?"');
      scene.text('<center><b>"I… I am 18, Master."</b></center>');
      scene.text('"No, tell me your true age, girl."');
      scene.text(`<center><b>"Well… it's ${((s as any).age || '')} years, Master."</b></center>`);
      scene.text('"Good, very good. Now let us go."');
    } else {
      ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = 50;
      scene.text('"Ahh, my pet is already in its place I see."');
      scene.text('He scans you through the bars with hungry eyes.');
      scene.text('"Hmm, she doesn\'t look as young as I expected. What is your age, slave?"');
      scene.text(`<center><b>"I… I am ${((s as any).age || '')}, Master."</b></center>`);
      scene.text('He turns pale and is obviously annoyed.');
      scene.text('<center><b>"Idiots. I told them what I want, and they delivered me this. Bad for you slut, you will feel the cost of their failure."</b></center>');
      scene.text('"Let\'s go you walking set of holes!"');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Be led out of the cage', goto: ['brothel_section1', 'section1_start'] },
  ]);
  scene.build();
}

function enterSection1Start(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Playroom</h3>');
  scene.img('images/locations/shared/brothel/playroom.jpg');
  scene.text('This room is designed for every perverted action you could think of. The thick walls indicate it is soundproof, though the walls are painted with a smooth coating, probably to be easily washable.');
  scene.text('It is quite spacious, in each corner is a different bondage device. Next to the already locked doors lies a large box with who-knows-what kind of devices.');
  scene.text('The only thing that connects you with the outside are cameras in each corner of the room, watchfully recording all that happens here.');
  if (((s as any).brothel_vars ?? 0)?.['rage_meter'] <= 100) {
    scene.text('"So what will we do today, my little painslut?"');
    scene.actions([
      { label: 'Be quiet and await what\'s next', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 0);
  } },
      { label: 'Suggest an action', handler: (st: GameState) => {
    // TODO-QSP: 'You decide to suggest what your Master should do with you. You ask him: ' + $func('wrap', 'neg', '"...
    scene.actions([
      { label: '..I need to recharge my batteries', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 1);
  } },
      { label: '..I\'ve been a bad girl, I should be punished', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 2);
  } },
      { label: '..just bind me and use my holes', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 3);
  } },
      { label: 'Reconsider and be quiet', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 0);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('Without a word Master leads you to a device…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_pick', 0);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1Pick(s: GameState, scene: SceneBuilder): void {
  (s as any).stage = 1;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['master_decision'] = 0;
  if (((s as any).locArgs?.[1] ?? 0) !== 0  &&  (Math.floor(Math.random() * 61) + 0) > ((s as any).brothel_vars ?? 0)?.['rage_meter']) {
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['master_decision'] = ((s as any).locArgs?.[1] ?? 0);
  } else {
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['master_decision'] = Math.floor(Math.random() * 3) + 1;
  }
  if (((s as any).locArgs?.[1] ?? 0) !== 0) {
    if (((s as any).brothel_vars ?? 0)?.['master_decision'] === ((s as any).locArgs?.[1] ?? 0)) {
      if (((s as any).brothel_vars ?? 0)?.['rage_meter'] <= 25) {
        scene.img('images/shared/sex/dom/kotovsub.jpg');
        scene.text('As you wish, slut. We\'ll do it your way.');
      } else {
        if (((s as any).brothel_vars ?? 0)?.['rage_meter'] <= 50) {
          scene.img('images/shared/sex/dom/kotovsub.jpg');
          scene.text('So, that\'s how you like to play, slut? Sure, we will do that. I\'ll make your cries only sweeter.');
        } else {
          ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (10);
          scene.img('images/locations/city/residential/sauna/sex/slapface1.mp4');
          scene.text('You think you can order me around, slut? Fine, let\'s give you what you want. See if you don\'t regret it!');
        }
      }
    } else {
      if (((s as any).brothel_vars ?? 0)?.['rage_meter'] <= 25) {
        ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
        scene.img('images/shared/sex/dom/kotovsub.jpg');
        scene.text('The client frowns.');
        scene.text('Not a bad idea, slut. But I have a better one.');
      } else {
        ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (10);
        scene.img('images/locations/city/residential/sauna/sex/slapface1.mp4');
        scene.text('You think you can order me around, slut? I\'ll do with you what *I* want.');
      }
    }
  }
  if (((s as any).brothel_vars ?? 0)?.['master_decision'] === 1) {
    // TODO-QSP: 'The client puts the small shock device on the table in the center of the room. ' + $func('wrap', 'n...
    scene.actions([
      { label: 'Begin the session', goto: ['brothel_section1', 'section1_electro_main'] },
    ]);
  } else {
    if (((s as any).brothel_vars ?? 0)?.['master_decision'] === 2) {
      // TODO-QSP: 'The client grabs a box full of smaller tools from a shelf and fetches a few wooden sticks. ' + $fun...
      scene.actions([
        { label: 'Begin the session', goto: ['brothel_section1', 'section1_tits_main'] },
      ]);
    } else {
      if (((s as any).brothel_vars ?? 0)?.['master_decision'] === 3) {
        // TODO-QSP: 'The client grabs a box full of smaller tools from a shelf, with several ropes hanging out of it. ' ...
        scene.actions([
          { label: 'Begin the session', goto: ['brothel_section1', 'section1_tied_main'] },
        ]);
      } else {
        if (((s as any).brothel_vars ?? 0)?.['master_decision'] === 4) {
          scene.text('Let us start nice and slow, little whore. I\'ll have my fun, either way.');
          scene.actions([
            { label: 'Begin the session', goto: ['brothel_section1', 'section1_play_sex'] },
          ]);
        } else {
          if (((s as any).brothel_vars ?? 0)?.['master_decision'] === 5) {
            scene.text('Don\'t you think, you should be much more open to your clients needs, especially in your line if work, whore?');
            scene.actions([
              { label: 'Begin the session', goto: ['brothel_section1', 'section1_play_stretch'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1ElectroMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brothel_vars ?? 0)?.['rage_meter'] >= 100) {
    qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_rage');
  }
  if ((((s as any).pain ?? 0)?.['total'] > 50  &&  ((s as any).analPlugIn ?? 0) === 1)) {
    if ((Math.floor(Math.random() * 100) + 1) <= 25) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroPushPlug(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (((s as any).analPlugIn ?? 0) === 0  &&  (Math.floor(Math.random() * 100) + 1) <= 30  &&  ((s as any).analplay ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroButtplug(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).analplay = 1;
  if (((s as any).brothel_vars ?? 0)?.['orgasm_meter'] >= 100) {
    scene.text('So my little light bulb, ready for the next step?');
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rand_fin'] = 0;
    if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 1) {
      qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_behind_anal');
    } else {
      if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 2) {
        qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_behind_vaginal');
      } else {
        if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 3) {
          qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_mouth');
        } else {
          if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 4) {
            qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_face');
          }
        }
      }
    }
  }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    qspGoto(s, 'brothel_section1', 'section1_electro_asshigh');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      if ((!((s as any).analPlugIn ?? 0))) {
        qspGoto(s, 'brothel_section1', 'section1_electro_buttplug', '2');
      } else {
        qspGoto(s, 'brothel_section1', 'section1_electro_main', '2');
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        qspGoto(s, 'brothel_section1', 'section1_electro_electrodes');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          (s as any).temp_say = 0;
          if (((s as any).temp_say ?? 0) === 1) {
            scene.text('"Let\'s shine, my little slut!"');
          } else {
            if (((s as any).temp_say ?? 0) === 2) {
              scene.text('"SCREAM BITCH!"');
            } else {
              if (((s as any).temp_say ?? 0) === 3) {
                scene.text('"HAHAHAHAHAHHAAAAA!!!!"');
              }
            }
          }
          scene.text('With these words the Client turns the power on.');
          scene.img('images/locations/shared/brothel/togglepowerbutton.jpg');
          scene.actions([
            { label: 'Continue', goto: ['brothel_section1', 'section1_electro_electrocute'] },
          ]);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 4) {
            if (((s as any).brothel_vars ?? 0)?.['like'] === 1) {
              scene.text('YES! That\'s all a slut like you needs to feel!');
              scene.text('But I think you still don\'t have enough…');
            } else {
              if (((s as any).brothel_vars ?? 0)?.['like'] === 0) {
                scene.text('WHAT!? I can\'t hear you well! I think I\'ll just turn this toggle to a higher setting, just to be sure!');
                scene.text('<center><b>No please, everything but THAT! Pleeaase!</b></center>');
              }
            }
            qspGoto(s, 'brothel_section1', 'section1_electro_main', '5');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 5) {
              qspGoto(s, 'brothel_section1', 'section1_electro_electrocute_more');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6) {
                qspGoto(s, 'brothel_section1', 'section1_electro_main', '7');
              } else {
                if (((s as any).locArgs?.[1] ?? 0) >= 7) {
                  qspGoto(s, 'brothel_section1', 'section1_electro_electrocute_max');
                }
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

function enterSection1ElectroAsshigh(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 2, 'legR', 'bind');
  qspCall(s, 'pain', '', 2, 'legL', 'bind');
  qspCall(s, 'pain', '', 2, 'wrists', 'bind');
  qspCall(s, 'pain', '', 2, 'thighs', 'bind');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bound']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/asshigh.mp4');
  scene.text('You are bound, lying on your chest. Master raises your ass high in the air, forcing you in an awkward position with both your holes on display, while tying you so you cannot move at all.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_electro_main', '1'] },
  ]);
  scene.build();
}

function enterSection1ElectroLike(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['like'] = 1;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (20);
  qspCall(s, 'fetish', 'add_pref', 'maso', 1);
  // TODO-QSP: end
  scene.build();
}

function enterSection1ElectroDislike(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['like'] = 0;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (15);
  qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
  // TODO-QSP: end
  scene.build();
}

function enterSection1ElectroButtplug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'anal_dildo', 2, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 5, 'asshole', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).analPlugIn = 1;
  scene.img('images/locations/shared/brothel/buttplug.mp4');
  scene.text('<center><b>(What in the world have I gotten into…)</b></center>');
  scene.text('<center><b>"Owwchhh!" Take it out! Take it ouuuut PLEASE!"</b></center>');
  // TODO-QSP: 'Disregarding your plea, Master says half for himself, obviously entertained ' + $func('wrap', 'neg'...
  scene.text('You can only guess what as you don\'t see what happens behind you, however you feel a cold, probably metallic plug in your anus.');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: exit
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['brothel_section1', 'section1_electro_main', '2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1ElectroPushPlug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).analPlugIn = 0;
  (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
  qspCall(s, 'pain', '', 6, 'asshole', 'cramp');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/pushplugout.mp4');
  scene.text('Unable to withstand all the pain, your muscles pull themselves in a massive cramp, causing the anal plug fall out like an apple from a tree.');
  if ((Math.floor(Math.random() * 100) + 1) <= 20) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_electro_rod');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_electro_replug');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1ElectroRod(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  qspCall(s, 'pain', '', 9, 'asshole', 'shock');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/shockanus.mp4');
  scene.text('You have obviously annoyed the Client by what you did.');
  // TODO-QSP: 'He takes a long rod: ' + $func('wrap', 'neg', '"Now where''s the fucking button!"')
  scene.text('A shiver runs through your spine and soon you know why! He puts the rod on your anus, electrocuting your sensitive hole!"');
  scene.text('<center><b>"Owwwwwwwwwwwwwwwwww!"</b></center>');
  scene.text('"Don\'t do it again slut! Or this will be halfway in your anus!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'brothel_section1', 'section1_electro_replug');
  } },
  ]);
  scene.build();
}

function enterSection1ElectroReplug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  qspCall(s, 'pain', '', 6, 'asshole', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'anal_dildo', 2, 'bound', 'sub', 'prostitution', 'humiliation');
  (s as any).analPlugIn = 1;
  scene.img('images/locations/shared/brothel/buttplug.mp4');
  scene.text('"What is it, slut? Can\'t handle being plugged any longer? Too bad, in it goes!"');
  scene.text('<center><b>"Owwchhh! PLEASE! PLEASE, DON\'T!"</b></center>');
  scene.text('The metallic plug touches your anus again, only to be brutally pushed in, increasing your pain even more.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: exit
  } },
  ]);
  scene.build();
}

function enterSection1ElectroElectrodes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 5, 'bound', 'sub', 'prostitution', 'humiliation');
  scene.img('images/locations/shared/brothel/electrodesass.jpg');
  scene.text('You feel a slightly cold sensation, as if something wet was put on and near your private areas.');
  scene.text('The sensation fades away in a few seconds, leaving a feeling of something being stuck to your bottom parts.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_electro_main', '3'] },
  ]);
  scene.build();
}

function enterSection1ElectroElectrocute(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'pain', '', 4, 'asscheeks', 'shock');
  qspCall(s, 'pain', '', 5, 'labia', 'shock');
  qspCall(s, 'pain', '', 3, 'thighs', 'shock');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough', 'maso', 'bound');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/electrocuteass.mp4');
  scene.text('Your body trembles and cramps as the electric discharge flows through your sensitive parts.');
  scene.text('<center><b>"Owwchhh! It hurts!"</b></center>');
  scene.text('"That\'s the point slut! How do you like it? Tell me now!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you hate it and want him to stop', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroDislike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '4');
  } },
    { label: 'Tell him you love it', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroLike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '4');
  } },
  ]);
  scene.build();
}

function enterSection1ElectroElectrocuteMore(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough', 'maso', 'bound');
  qspCall(s, 'pain', '', 6, 'asscheeks', 'shock');
  qspCall(s, 'pain', '', 5, 'thighs', 'shock');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/electrocuteassmore.mp4');
  scene.text('Your body trembles and cramps, pushing you to your limit, as the electric discharge set on high settings flows through your sensitive parts.');
  scene.text('You feel as if your skin should peel away and your anus would tear apart at any second.');
  scene.text('<center><b>"Owwchhh! It hurts so much! STOPP ITT!"</b></center>');
  scene.text('"You should\'ve subdued at the first point, dumb slut. How do you like it now?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you hate it and want him to stop', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroDislike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '6');
  } },
    { label: 'Tell him you love it', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroLike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '6');
  } },
  ]);
  scene.build();
}

function enterSection1ElectroElectrocuteMax(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough', 'maso', 'bound');
  // TODO-QSP: gs 'pain', 7 + brothel_vars['electro_counter'], 'asscheeks', 'shock'
  // TODO-QSP: gs 'pain', 6 + brothel_vars['electro_counter'], 'labia', 'shock'
  // TODO-QSP: gs 'pain', 5 + brothel_vars['electro_counter'], 'vaginal', 'shock'
  // TODO-QSP: gs 'pain', 4 + brothel_vars['electro_counter'], 'asshole', 'shock'
  // TODO-QSP: gs 'pain', 6 + brothel_vars['electro_counter'], 'thighs', 'shock'
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['electro_counter'] = ((s as any).brothel_vars['electro_counter'] ?? 0) + (1);
  scene.img('images/locations/shared/brothel/electrocuteassmax.mp4');
  scene.text('Your body trembles and cramps far beyond what you thought possible, as the electric discharge set on the highest settings flows through your sensitive parts and spreads throughout your whole body.');
  scene.text('You feel as if your skin should turn inside out and your anus would explode together with your stomach.');
  scene.text('<center><b>"Owwchhh! AAARHHHGHHGHGH!!!"</b></center>');
  scene.text('"Now this is what I call a barbecue party!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cry that you hate it and want him to stop', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroDislike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '7');
  } },
    { label: 'Cry that you love it', handler: (st: GameState) => {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSection1ElectroLike(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspGoto(s, 'brothel_section1', 'section1_electro_main', '7');
  } },
  ]);
  scene.build();
}

function enterSection1TitsMain(s: GameState, scene: SceneBuilder): void {
  (s as any).analplay = 0;
  if (((s as any).brothel_vars ?? 0)?.['orgasm_meter'] === 100) {
    scene.text('So my walking pair of tortured tits, ready for the next step?');
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rand_fin'] = 0;
    if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 1) {
      qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_behind_anal');
    } else {
      if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 2) {
        qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_behind_vaginal');
      } else {
        if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 3) {
          qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_mouth');
        } else {
          if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 4) {
            qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_face');
          }
        }
      }
    }
  }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    qspGoto(s, 'brothel_section1', 'section1_tits_hang_neck');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rand_tits_kind'] = Math.floor(Math.random() * 4) + 1;
      if ((((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 1  &&  ((s as any).brothel_vars ?? 0)?.['did_whip'] === 1)  ||  (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 2  &&  ((s as any).brothel_vars ?? 0)?.['did_cane'] === 1)  ||  (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 3  &&  ((s as any).brothel_vars ?? 0)?.['did_pinch'] === 1)  ||  (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 4  &&  ((s as any).brothel_vars ?? 0)?.['did_punch'] === 1)) {
        if ((Math.floor(Math.random() * 4) + 1) > 1) {
          ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rand_tits_kind'] = Math.floor(Math.random() * 4) + 1;
        }
      }
      if (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 1) {
        if (((s as any).brothel_vars ?? 0)?.['did_whip'] === 0) {
          qspGoto(s, 'brothel_section1', 'section1_tits_whip');
        }
      } else {
        if (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 2) {
          if (((s as any).brothel_vars ?? 0)?.['did_cane'] === 0) {
            qspGoto(s, 'brothel_section1', 'section1_tits_cane');
          }
        } else {
          if (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 3) {
            if (((s as any).brothel_vars ?? 0)?.['did_pinch'] === 0) {
              qspGoto(s, 'brothel_section1', 'section1_tits_pinch');
            }
          } else {
            if (((s as any).brothel_vars ?? 0)?.['rand_tits_kind'] === 4) {
              if (((s as any).brothel_vars ?? 0)?.['did_punch'] === 0) {
                qspGoto(s, 'brothel_section1', 'section1_tits_punch');
              }
            }
          }
        }
      }
      qspGoto(s, 'brothel_section1', 'section1_tits_main', '2');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        qspGoto(s, 'brothel_section1', 'section1_tits_pull_nipples');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          qspGoto(s, 'brothel_section1', 'section1_tits_bind');
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 4) {
            qspGoto(s, 'brothel_section1', 'section1_tits_pinch_bound');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 5) {
              qspGoto(s, 'brothel_section1', 'section1_tits_hang_tits');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6) {
                if ((Math.floor(Math.random() * 99) + 1) <= 60) {
                  qspGoto(s, 'brothel_section1', 'section1_tits_nails_needles');
                } else {
                  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = 100;
                  qspGoto(s, 'brothel_section1', 'section1_tits_main', '7');
                }
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

function enterSection1TitsHangNeck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 2, 'neck', 'choke');
  qspCall(s, 'pain', '', 3, 'wrists', 'bind');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bound']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/hangbyneck.jpg');
  scene.text('First he binds your hands behind your back.');
  scene.text('As you stand there, you are getting more nervous about what he\'s going to do with you…');
  scene.text('The Client comes with another rope, attaching it to an already prepared hook hanging from the ceiling.');
  scene.text('To your horror he snaps the rope around your neck as if he\'s going to hang you!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TitsWhip(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_whip'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 5, 'breasts', 'spank');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/whiptits.mp4');
  scene.text('As you hang with your hands tied, you can only watch as the Client takes a whip and repeatedly punishes your tender titties…');
  scene.text('<center><b>"Oww! Oww! Nooo! Owww! Not… Any… More… Please… Oww…"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TitsCane(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_cane'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 5, 'breasts', 'spank');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/canetits.mp4');
  scene.text('As you hang with hands tied, you can only watch as the Client takes a wooden cane and repeatedly punishes your tender titties…');
  scene.text('<center><b>"Oww! Oww! Nooo! Owww! Not… Any… More… Please… Oww…"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TitsPinch(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_pinch'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 5, 'nipples', 'pinch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/pinchtits.mp4');
  scene.text('As you hang with hands tied, you can only watch as the Client takes a few wooden pins and pinches your sensitive nipples and areolas.');
  scene.text('First it is just unpleasant but the repeated attacks on your tits make it worse with each attempt…');
  scene.text('<center><b>"Oww! Oww! Nooo! Owww!"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TitsPunch(s: GameState, scene: SceneBuilder): void {
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['did_punch'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 6, 'breasts', 'hit');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/punchtits.mp4');
  scene.text('As you hang with hands tied, you can only watch as the Client closes his strong, manly fists.');
  scene.text('Your tender titties are but punchbags for him, as if this was a boxing session!');
  scene.text('<center><b>"Oww! Oww! Nooo! Owww!"</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TitsPullNipples(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 7, 'nipples', 'stretch');
  qspCall(s, 'pain', '', 4, 'breasts', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/pullnipples.mp4');
  scene.text('The client takes a piece of rope and attaches it to your nipples.');
  scene.text('As soon as both strings are in place, he pulls them hard, as if he was trying to tear off your nipples!');
  scene.text('<center><b>"Owwwwuuch!!!"</b></center>');
  scene.text('"Nice! Do you think this will make your nipples longer, slut? Or will those shrink again? Let\'s see!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '3'] },
  ]);
  scene.build();
}

function enterSection1TitsBind(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 7, 'breasts', 'stretch');
  qspCall(s, 'pain', '', 3, 'chest', 'bind');
  qspCall(s, 'pain', '', 3, 'ribs', 'bind');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bound']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/bindtits.jpg');
  scene.text('The client takes a piece of rope and starts attaching it to your chest.');
  scene.text('First you do not know what he is planning, but as soon as he circles your breasts with the ropes, you know it well.');
  scene.text('He ties the strings around your tits very tight, making them even more sensitive and as an addition turning more purple with each minute.');
  scene.text('<center><b>"Not so tight Master, please!"</b></center>');
  scene.text('"Shut up slut!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '4'] },
  ]);
  scene.build();
}

function enterSection1TitsPinchBound(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 7, 'breasts', 'stretch');
  qspCall(s, 'pain', '', 6, 'nipples', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/pinchboundtits.mp4');
  scene.text('Your tits are already squeezed by the ropes, but the Client wants to unleash additional suffering upon them.');
  scene.text('He uses his fingers to pinch your nipples, stretching them as far as they go.');
  scene.text('Your tits are already so full that you feel as they should rupture any second, and by trying to catch the nipples, the client causes you extremely unpleasant sensations!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '5'] },
  ]);
  scene.build();
}

function enterSection1TitsHangTits(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'pain', '', 8, 'breasts', 'stretch');
  qspCall(s, 'pain', '', 6, 'chest', 'stretch');
  qspCall(s, 'pain', '', 6, 'ribs', 'bind');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/hangbytits.mp4');
  scene.text('The client attaches another rope to your already bound tits, using a pulley attached to the ceiling.');
  scene.text('You start to shake the moment he connects the ropes attached to your breasts with the pulley above you…');
  scene.text('<center><b>"No Master, you can\'t be serious!! You will tear them off! It is against the rules, stop it!</b></center>');
  scene.text('"NO, it\'s not against the rules. They won\'t tear off, you\'ll see!"');
  scene.text('<center><b>"AYYYEEEEEEEEEEEE!</b></center>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '6'] },
  ]);
  scene.build();
}

function enterSection1TitsNailsNeedles(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    // TODO-QSP: 'The Client is obviously aroused beyond his expectation:' + $func('wrap', 'neg', '"I have these beau...
    scene.text('<center><b>"What the…?"</b></center>');
    scene.text('"… and I think those nipples of yours are aching for them!"');
    scene.text('<center><b>"You can\'t be serious! This IS against the rules, let me out!"</b></center>');
    scene.text('"Not if you agree with it. So what will it be?"');
    scene.actions([
      { label: 'No way, you\'ll never do that', goto: ['brothel_section1', 'section1_tits_nails_needles', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      (s as any).caneFeetCount = 0;
      scene.text('"Would a bonus to your pay change your mind?"');
      scene.text('<center><b>"Wh… what bonus?"</b></center>');
      scene.text(`"Ah, let's say ${qspFunc(s, 'money', 'string_profit', 1000)}?"`);
      scene.actions([
        { label: 'Say you\'ll do it', goto: ['brothel_section1', 'section1_tits_nails_needles', '2'] },
        { label: '', labelFn: (s: GameState) => 'Say you\'ll do it for ' + String(qspFunc(s, 'money', 'string_profit', 2000) ?? ''), goto: ['brothel_section1', 'section1_tits_nails_needles', '3'] },
        { label: 'No way, you\'ll never do that', goto: ['brothel_section1', 'section1_tits_nails_needles', '10'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.text('"A whore is a whore I see. Now let us begin!"');
        qspCall(s, 'jobs', 'bonus_pay', 'highway_brothel_prostitute', 1000);
        scene.actions([
          { label: 'Continue', goto: ['brothel_section1', 'section1_tits_nails_needles', '4'] },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          if ((Math.floor(Math.random() * 100) + 1) <= 33) {
            scene.text('"I agree bitch! Twice more money for you, twice more pain for your tits! Now let us begin!');
            qspCall(s, 'jobs', 'bonus_pay', 'highway_brothel_prostitute', 2000);
            scene.actions([
              { label: 'Continue', goto: ['brothel_section1', 'section1_tits_nails_needles', '4'] },
            ]);
          } else {
            scene.text('"What? Who do you think I am, slut? A fucking monger?"');
            scene.text('<center><b>"I… No! I didn\'t mean…"</b></center>');
            scene.text('"Shut up slave! You will agree to it for free, NOW!"');
            scene.actions([
              { label: 'Continue', goto: ['brothel_section1', 'section1_tits_nails_needles', '10'] },
            ]);
          }
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 4) {
            qspCall(s, 'pain', '', 8, 'nipples', 'pierce');
            qspCall(s, 'pain', '', 7, 'breasts', 'pierce');
            qspCall(s, 'stat', '');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.img('images/locations/shared/brothel/needlesintits.mp4');
            scene.text('He brings a bag with a set of needles of various sizes. Judging by the fancy bag he carries them in, he is not doing this to a girl for the first time…');
            scene.text('One by one he takes them out of the bag and slowly penetrates your areola.');
            scene.text('It hurts like being at the doctor\'s office, getting blood taken, but worse, because they don\'t take blood from your nipples there!');
            scene.text('When you think it\'s over he takes out one large needle with a longer rod than the others…');
            scene.text('"Now, where do you think this one goes?"');
            scene.text('Not waiting for answer, he stabs it in the middle of your nipple!');
            scene.text('<center><b>"Owwwwwwwwwwwwwwwwww"</b></center>');
            scene.text('And if it wasn\'t already enough, he moves the needle in and out…');
            scene.text('<center><b>"Pleaase, no more… no more…"</b></center>');
            scene.text('Stepping away he looks at his doing, and your poor tits.');
            scene.text('"Yes, no more. No more needles. Now to the nails!"');
            qspCall(s, 'piercing_management', 'pierce');
            scene.actions([
              { label: 'Continue', goto: ['brothel_section1', 'section1_tits_nails_needles', '5'] },
            ]);
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 5) {
              qspCall(s, 'pain', '', 9, 'breasts', 'pierce');
              qspCall(s, 'pain', '', 9, 'nails', 'pierce');
              qspCall(s, 'pain', '', 6, 'chest', 'pierce');
              qspCall(s, 'pain', '', 5, 'hair', 'stretch');
              qspCall(s, 'stat', '');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
              scene.img('images/locations/shared/brothel/nailtits.mp4');
              scene.text('He pulls out the needles, fast and not caring about the further pain it causes.');
              scene.text('He let\'s you down, laying you on a wooden plank with your tits touching it.');
              scene.text('The hammer and nails in his hands frighten you to another level.');
              scene.text('<center><b>"Oh my… I thought it through! I don\'t agree with this! Take your money back and release me now!"</b></center>');
              scene.text('"Too late bitch! Once you agree there\'s no going back! It\'s on camera, remember? Now enjoy!"');
              scene.text('<center><b>"Owwwwwwwwwwwwwwwwww"</b></center>');
              scene.text('He puts the nails to your tits and starts nailing them to the plank.');
              scene.actions([
                { label: 'Endure', goto: ['brothel_section1', 'section1_tits_nails_needles', '6'] },
              ]);
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 6) {
                qspCall(s, 'pain', '', 9, 'breasts', 'pierce');
                qspCall(s, 'stat', '');
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
                scene.img('images/locations/shared/brothel/nailedbytitstotheground.jpg');
                scene.text('At the end of the session, you lie on the wooden ground with your nipples being nailed to it, hanging by your hair and barely staying awake.');
                scene.text('"So slut, how did you like it?"');
                scene.text('<center><b>"Ehh… I… Master…"</b></center>');
                scene.text('"You know? I don\'t care anyways. Actually I hope it was horrible for you. You deserve it, such a naughty whore."');
                scene.text('"Now beg me to fuck you!"');
                scene.actions([
                  { label: 'Beg him to fuck you', handler: (st: GameState) => {
    // TODO-QSP: brothel_vars['orgasm_meter'] = 100
    // TODO-QSP: gt 'brothel_section1', 'section1_tits_main', 7
  } },
                ]);
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 10) {
                  if (((s as any).caneFeetCount ?? 0) >= 3) {
                    qspGoto(s, 'brothel_section1', 'section1_tits_nails_needles', '20');
                  } else {
                    if ((!((s as any).caneFeetCount ?? 0))) {
                      (s as any).caneFeetCount = ((s as any).caneFeetCount ?? 0) + (1);
                      qspCall(s, 'pain', '', 6, 'feet', 'spank');
                      qspCall(s, 'stat', '');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
                      scene.img('images/locations/shared/brothel/canefeet.mp4');
                      scene.text('"I think you need more motivation, slut."');
                      scene.text('With that he takes your feet and starts to cane your sensitive feet, increasing the pace with every stroke!');
                      scene.text('<center><b>"Oww! Oww! Oww! Oww! Oww!"</b></center>');
                      scene.text('"So slave, what do you say now? Should I continue with this, or do you agree with my offer?"');
                      scene.actions([
                        { label: 'Say you agree', goto: ['brothel_section1', 'section1_tits_nails_needles', '4'] },
                        { label: 'Say you still don\'t agree', goto: ['brothel_section1', 'section1_tits_nails_needles', '10'] },
                      ]);
                    } else {
                      (s as any).caneFeetCount = ((s as any).caneFeetCount ?? 0) + (1);
                      qspCall(s, 'pain', '', 8, 'feet', 'spank');
                      qspCall(s, 'pain', '', 6, 'ankles', 'spank');
                      qspCall(s, 'pain', '', 5, 'legR', 'spank');
                      qspCall(s, 'pain', '', 5, 'legL', 'spank');
                      qspCall(s, 'stat', '');
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
                      scene.img('images/locations/shared/brothel/canefeet.mp4');
                      scene.text('"Think about it slut! Think about your poor feet right now!"');
                      scene.text('<center><b>"Oww! Oww! Oww! Oww! Oww!"</b></center>');
                      scene.text('"So slave, what do you say now? Should I continue with this, or do you agree with my offer?"');
                      scene.actions([
                        { label: 'Say you agree', goto: ['brothel_section1', 'section1_tits_nails_needles', '4'] },
                        { label: 'Say you still don\'t agree', goto: ['brothel_section1', 'section1_tits_nails_needles', '10'] },
                      ]);
                    }
                  }
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 20) {
                    scene.text('He is obviously pissed off by your disapproval.');
                    scene.text('"Fucking bitch! Now let me at least punish you how I can!"');
                    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = 100;
                    scene.actions([
                      { label: 'Continue', goto: ['brothel_section1', 'section1_tits_main', '7'] },
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
  // TODO-QSP: end
  scene.build();
}

function enterSection1TiedMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).brothel_vars ?? 0)?.['rage_meter'] >= 100) {
    qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_rage');
  }
  (s as any).analplay = 0;
  if (((s as any).brothel_vars ?? 0)?.['orgasm_meter'] === 100) {
    scene.text('He finally builds up the orgasm and is ready to deliver his seed!');
    ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rand_fin'] = 0;
    if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 1) {
      qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_front_anal');
    } else {
      if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 2) {
        qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_front_vaginal');
      } else {
        if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 3) {
          qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_mouth');
        } else {
          if (((s as any).brothel_vars ?? 0)?.['rand_fin'] === 4) {
            qspGoto(s, 'brothel_section1', 'section1_end_main', 'section1_end_face');
          }
        }
      }
    }
  }
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    qspGoto(s, 'brothel_section1', 'section1_tied_lie_back');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      qspGoto(s, 'brothel_section1', 'section1_tied_on_back');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        (s as any).action = Math.floor(Math.random() * 7) + 1;
        if (((s as any).brothel_vars ?? 0)['did_tied_' + ((s as any).action ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) > 1) {
          (s as any).action = Math.floor(Math.random() * 7) + 1;
        }
        // TODO-QSP: brothel_vars['did_tied_' + action] = 1
        if (((s as any).action ?? 0) === 1) {
          qspGoto(s, 'brothel_section1', 'section1_tied_mouth');
        } else {
          if (((s as any).action ?? 0) === 2) {
            qspGoto(s, 'brothel_section1', 'section1_tied_anal');
          } else {
            if (((s as any).action ?? 0) === 3) {
              qspGoto(s, 'brothel_section1', 'section1_tied_vaginal');
            } else {
              if (((s as any).action ?? 0) === 4) {
                qspGoto(s, 'brothel_section1', 'section1_tied_tease');
              } else {
                if (((s as any).action ?? 0) === 5) {
                  qspGoto(s, 'brothel_section1', 'section1_tied_analfisting');
                } else {
                  if (((s as any).action ?? 0) === 6) {
                    qspGoto(s, 'brothel_section1', 'section1_tied_vibrate');
                  } else {
                    if (((s as any).action ?? 0) === 7) {
                      qspGoto(s, 'brothel_section1', 'section1_tied_whip');
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
  // TODO-QSP: end
  scene.build();
}

function enterSection1TiedLieBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'pain', '', 3, 'neck', 'choke');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sub']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/onbackkneeshigh.jpg');
  scene.text('The client reaches for your neck, forcefully leading you to one of the beds.');
  // TODO-QSP: 'You know what''s coming… he throws you on the soft pillows:' + $func('wrap', 'neg', '"Lie on your b...
  scene.text('You do as ordered…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '1'] },
  ]);
  scene.build();
}

function enterSection1TiedOnBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (5);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tiedonbackkneeshigh.jpg');
  // TODO-QSP: 'He brings some ropes and wooden sticks. ' + $func('wrap', 'bimbo', '(What does he need those for?)'...
  scene.text('Soon you get to know what for - your titties! Not that he ties you, that would be expected, but he secures your tender tits with the wooden sticks, forcing them to get fuller and fuller…');
  scene.text('You end up bound so securely, that all you can do is stare at him in expectation of what is coming next…');
  qspCall(s, 'pain', '', 6, 'breasts', 'stretch');
  qspCall(s, 'pain', '', 4, 'LegR', 'bind');
  qspCall(s, 'pain', '', 4, 'LegL', 'bind');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bound']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedMouth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (25);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_mouth.mp4');
  scene.text('You are still bound on your back, with hands and knees tied together, exposing both of your holes.');
  scene.text('The Client reaches out to you, looking down at your crotch.');
  scene.text('"So what will it be, slut?"');
  scene.text('<center><b>"Uhm… a fucking of my pussy? Or anus?"</b></center>');
  scene.text('"Fucking indeed, but neither of those. Open your mouth!"');
  scene.text('You have no other option, but to do as he wants, opening your lips for his thick phallus.');
  scene.text('You choke, saliva everywhere, but it seems he won\'t stop until you either suffocate or he cums!');
  qspCall(s, 'arousal', 'bj', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 5, 'throat', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'humiliation']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (25);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_anal.mp4');
  scene.text('You are still bound on your back, with hands and knees tied together, exposing both of your holes.');
  scene.text('The Client reaches out to you, looking down at your crotch.');
  scene.text('"So what will it be, slut?"');
  scene.text('Before you can even try to decide how to react to this straight question, he forces his dick down your… anus!');
  scene.text('<center><b>"Owwwch!"</b></center>');
  scene.text('"Didn\'t expect such a quick entry, did you?"');
  scene.text('But again you are unable to answer, because he starts to pound you so fast and deep, that every attempt to get a sound out of your mouth is futile.');
  scene.text('You can just helplessly endure the hard fucking he\'s giving you…');
  scene.text('As if it wasn\'t enough, he slaps your tits every now and then, making the whole experience even more hopeless.');
  qspCall(s, 'arousal', 'anal', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 6, 'asshole', 'stretch');
  qspCall(s, 'pain', '', 4, 'breasts', 'slap');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sub']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (25);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_vaginal.mp4');
  scene.text('You are still bound on your back, with hands and knees tied together, exposing both of your holes.');
  scene.text('The Client reaches out to you, looking down at your crotch.');
  scene.text('"So what will it be, slut?"');
  scene.text('Before you can even try to decide how to react to this straight question, he forces his dick down your… pussy!');
  scene.text('<center><b>"Owwwch!"</b></center>');
  scene.text('"Didn\'t expect such a quick entry, did you?"');
  scene.text('But again you are unable to answer, because he starts to pound you so fast and deep, that every attempt to get a sound out of your mouth is futile.');
  scene.text('You can just helplessly endure the hard fucking he\'s giving you…');
  scene.text('As if it wasn\'t enough, he slaps your tits every now and then, making the whole experience even more hopeless.');
  qspCall(s, 'pain', '', 6, 'vaginal', 'stretch');
  qspCall(s, 'pain', '', 4, 'breasts', 'slap');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sub']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'arousal', 'vaginal', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedTease(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (5);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (5);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_tease.mp4');
  scene.text('The client circles around you, touching every part of your body as if he is looking for something.');
  scene.text('He starts by exploring both of your holes, stretching the lips and probing the insides.');
  scene.text('Then he twists your nipples around, waiting for you to make an uncomfortable sound.');
  scene.text('After a while he seems to be done, likely looking content with his explorations.');
  scene.text('You notice a large bulge rising from his (still worn) pants.');
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 4, 'nipples', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'humiliation']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedAnalfisting(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (10);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_analfisting.mp4');
  scene.text('"What\'s the longest dick you are able to take inside your ass, slut?"');
  scene.text('<center><b>"I… I don\'t know master, I have never measured any."</b></center>');
  scene.text('"Then we need to take the measurements, I\'d say!"');
  scene.text('He takes a big bottle of lube, squirting it on his hand.');
  scene.text('<center><b>"No please, this won\'t fit inside me!"</b></center>');
  scene.text('"How can you know if you didn\'t try, dumb cunt?"');
  scene.text('He pushes a few fingers into your anus right away, causing your abdomen to cramp.');
  scene.text('But he doesn\'t stop, putting one by one all of his fingers in, even the thumb.');
  scene.text('You scream in pain and horror, but he pushes even more until finally his hand slips inside you.');
  scene.text('"Now let us see how far can we get!"');
  scene.text('He pushes his hand even deeper inside, almost the whole elbow is in your intestines now!');
  scene.text('He turns his fist from side to side, making your thin stomach bulge!');
  qspCall(s, 'arousal', 'anal_fist', 15, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 7, 'asshole', 'stretch');
  qspCall(s, 'pain', '', 4, 'tummy', 'cramp');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedVibrate(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (10);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (10);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_vibrate.mp4');
  scene.text('"Is your pussy a sensitive one, girl?"');
  scene.text('<center><b>"I… I would say regularly sensitive, master."</b></center>');
  scene.text('"After this, it will be nothing like regular, haha!"');
  scene.text('With those words his face turns grim - and you feel an unpleasant shiver down your back.');
  scene.text('Your fears come true in a few seconds - he takes out a giant vibration device!');
  scene.text('He puts the top of the device right on your exposed pussy lips, spreading them to get right onto your clitoris.');
  scene.text('Then he slowly reaches for the button with a big red ON.');
  qspCall(s, 'pain', '', 6, 'clitoris', 'stretch');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).orgasm_or = 'What comes next is too intensive for you, forcing you into an orgasm mixed with pain and loud screams!';
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal_vibe', 15, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1TiedWhip(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['rage_meter'] = ((s as any).brothel_vars['rage_meter'] ?? 0) + (20);
  ((s as any).brothel_vars = (s as any).brothel_vars ?? {})['orgasm_meter'] = ((s as any).brothel_vars['orgasm_meter'] ?? 0) + (5);
  qspCall(s, 'arousal', 'foreplay', 10, 'bound', 'sub', 'prostitution', 'humiliation');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'pain', '', 6, 'labia', 'spank');
  qspCall(s, 'pain', '', 2, 'tummy', 'spank');
  qspCall(s, 'pain', '', 4, 'clitoris', 'spank');
  qspCall(s, 'pain', '', 4, 'pubic', 'spank');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'maso']; enterSection1PrefUpdate(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/locations/shared/brothel/tied_whip.mp4');
  scene.text('"Is your pussy a sensitive one, girl?"');
  scene.text('<center><b>"I… I would say regularly sensitive, master."</b></center>');
  scene.text('"After this, it will be nothing like regular, haha!"');
  scene.text('With those words his face turn grim - and you feel an unpleasant shiver down your back.');
  scene.text('Your fears come true in a few seconds - he takes out a whip!');
  scene.text('He puts the top of the whip right on your exposed pussy lips, enjoying the frightened face you are giving him.');
  scene.text('Then suddenly he starts to punish the most sensitive part of your young body, giving you no mercy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_tied_main', '2'] },
  ]);
  scene.build();
}

function enterSection1EndMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_rage') {
    qspGoto(s, 'brothel_section1', 'section1_end_rage');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_behind_vaginal') {
      qspGoto(s, 'brothel_section1', 'section1_end_behind_vaginal');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_behind_anal') {
        qspGoto(s, 'brothel_section1', 'section1_end_behind_anal');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_front_vaginal') {
          qspGoto(s, 'brothel_section1', 'section1_end_front_vaginal');
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_front_anal') {
            qspGoto(s, 'brothel_section1', 'section1_end_front_anal');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_mouth') {
              qspGoto(s, 'brothel_section1', 'section1_end_mouth');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'section1_end_face') {
                qspGoto(s, 'brothel_section1', 'section1_end_face');
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

function enterSection1EndRage(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPrintStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/brothel/masturbateinface.mp4');
  scene.text('The client is now too excited by the violence unleashed upon you. He takes his dick in his hands and starts masturbating right in front of your face.');
  scene.text('Being bound, you have no choice but to witness his slimy dick turning dark red as he furiously masturbates.');
  scene.text('Finally, after a few minutes, a large amount of slimy cum lands all over your face. It gets in your mouth and even sticks your eyelids together.');
  qspCall(s, 'cum_call', 'face', 'Master');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
  ]);
  scene.build();
}

function enterSection1EndBehindVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'arousal', 'vaginal', 15, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  scene.text('<h3>Playroom</h3>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.img('images/locations/shared/brothel/spreadasswithplugfrombehind.jpg');
    } else {
      scene.img('images/locations/shared/brothel/spreadassfrombehind.mp4');
    }
    scene.text('The client now leaves all the toys behind and goes behind you. Unable to see him, you can just guess what he\'s doing behind your bare ass.');
    scene.text('He puts his hands on your asscheeks, spreading them wide to get a better look on both your holes…');
    scene.text('You start to shake as you know what\'s coming…');
    scene.actions([
      { label: 'Continue', goto: ['brothel_section1', 'section1_end_behind_vaginal', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        if (((s as any).analPlugIn ?? 0) === 1) {
          scene.img('images/locations/shared/brothel/insertvaginalwithplugfrombehind.jpg');
          // TODO-QSP: 'Both your pussy and your anus are too well on display… You say to yourself: ' + $func('wrap', 'bimb...
          scene.text('Right at that moment the Client penetrates your pussy and thrusts his pole in, up to the rim!');
        } else {
          scene.img('images/locations/shared/brothel/insertvaginalfrombehind.mp4');
          // TODO-QSP: 'Both your pussy and your anus are too well on display… You say to yourself: ' + $func('wrap', 'bimb...
          scene.text('Right at that moment the Client penetrates your pussy and thrusts his pole in, up to the rim!');
        }
      } else {
        if (((s as any).analPlugIn ?? 0) === 1) {
          scene.img('images/locations/shared/brothel/insertvaginalwithplugfrombehind.jpg');
          // TODO-QSP: 'Both your pussy and your anus are well on display… You say to yourself: ' + $func('wrap', 'bimbo', ...
          scene.text('Right at that moment the Client pushes his phallus in your tender pussy… and all the way in!');
          scene.text('The pain is intensified as the previously inserted anal plug is still in its place, rubbing the thin wall between your vagina and intestines.');
          scene.text('The Client seems to disregard that, as he pounds your pussy even deeper…');
          scene.text('<center><b>"Owwwwuuch! Pleaaase no, no, take it ouuuut! Maaaster, pleaaase!"</b></center>');
          scene.text('Just as you say that the next pound of the Client\'s dick pushes out the plug, which falls out down between your bound legs.');
          (s as any).analPlugIn = 0;
          (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
          // TODO-QSP: killvar 'hadOwnanalPlugIn'
          qspCall(s, 'pain', '', 4, 'pussy', 'stretch');
          qspCall(s, 'stat', '');
        } else {
          scene.img('images/locations/shared/brothel/insertvaginalfrombehind.mp4');
          // TODO-QSP: 'Both your pussy and your anus are well on display… You say to yourself: ' + $func('wrap', 'bimbo', ...
          scene.text('Right at that moment the Client pushes his phallus in your tender pussy… and all the way in!');
        }
      }
      scene.actions([
        { label: 'Continue', goto: ['brothel_section1', 'section1_end_behind_vaginal', '2'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/shared/brothel/fuckvaginalfrombehind.mp4');
        scene.text('"Now bitch I\'m gonna ride you hard and deep!"');
        scene.text('With these words the Client increases his pace, fucking your poor pussy violently, roughly and very, very deep…');
        scene.actions([
          { label: 'Endure it', goto: ['brothel_section1', 'section1_end_behind_vaginal', '3'] },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          scene.img('images/locations/shared/brothel/cuminpussyfrombehind.mp4');
          scene.text('After what seems like eternity, the Client seems to be close to orgasm.');
          scene.text('<center><b>"Yes Master, please fill me with your cum!"</b></center>');
          scene.text('It works as your words arouse him even more and finally he pumps all his vile seed deep into your vagina…');
          scene.text('<center><b>(Yuk… I think it went even to my uterus! That\'s gross!)</b></center>');
          if (((s as any).knowpreg ?? 0) === 0  &&  ((s as any).thinkpreg ?? 0) === 0  &&  ((s as any).pillcon2 ?? 0) < 1000) {
            scene.text('With a growing sense of horror, you realize that you aren\'t on the shot and have no idea when you last took a birth control pill.');
          }
          qspCall(s, 'cum_call', '', '', 'Master');
          scene.actions([
            { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1EndBehindAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'arousal', 'anal', 15, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  scene.text('<h3>Playroom</h3>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    if (((s as any).analPlugIn ?? 0) === 1) {
      scene.img('images/locations/shared/brothel/spreadasswithplugfrombehind.jpg');
    } else {
      scene.img('images/locations/shared/brothel/spreadassfrombehind.mp4');
    }
    scene.text('The client now leaves all the toys behind and goes behind you. Unable to see him you can just guess what\'s he doing behind your bare ass.');
    scene.text('He puts his hands on your asscheeks, spreading them wide to get better look on both your holes…');
    scene.text('You start to shake as you know what\'s coming…');
    scene.actions([
      { label: 'Continue', goto: ['brothel_section1', 'section1_end_behind_anal', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        if (((s as any).analPlugIn ?? 0) === 1) {
          scene.img('images/locations/shared/brothel/fuckanalwithplugfrombehind.mp4');
          // TODO-QSP: 'Both your pussy and your anus are too well on display… You say to yourself: ' + $func('wrap', 'bimb...
          scene.text('But as if you said your thought aloud, in precisely that moment the Client sticks a warm, hard pole right in your ass… up to his rim!');
          scene.text('<center><b>"Owwwwuuch! Pleaaase no, no, take it ouuuut! Maaaster, pleaaase!"</b></center>');
          scene.text('Just as you say that the next pound of the Client\'s dick pushes out the plug, which falls out down between your bound legs.');
          scene.text('The Client seems to disregard that, as he stretches your anus even more with his phallus… Or maybe he does it on purpose!');
          (s as any).analPlugIn = 0;
          (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
          // TODO-QSP: killvar 'hadOwnanalPlugIn'
          qspCall(s, 'pain', '', 4, 'anus', 'stretch');
          qspCall(s, 'stat', '');
        } else {
          scene.img('images/locations/shared/brothel/fuckanalfrombehind2.mp4');
          // TODO-QSP: 'Both your pussy and your anus are too well on display… You say to yourself: ' + $func('wrap', 'bimb...
          scene.text('But as if you said your thought aloud, in precisely that moment the Client sticks a warm hard pole right in your ass… up to his rim!');
          scene.text('<center><b>"Owwwwuuch! Pleaaase no take it ouuuut! Maaaster please not in my ass!"</b></center>');
        }
      } else {
        if (((s as any).analPlugIn ?? 0) === 1) {
          scene.img('images/locations/shared/brothel/fuckanalwithplugfrombehind.mp4');
          // TODO-QSP: 'Both your pussy and your anus are well on display… You say to yourself: ' + $func('wrap', 'bimbo', ...
          scene.text('Ironically you actually sigh in relief as the Client sticks his warm, hard pole in your anus and not your pussy.');
          scene.text('But you entirely forgot about that thing already inside you!');
          scene.text('The pain is intensified as the previously inserted anal plug is still in its place… in your ass!');
          scene.text('The Client seems to disregard that, as he stretches your anus even more with his phallus…');
          scene.text('<center><b>"Owwwwuuch! Pleaaase no, no, take it ouuuut! Maaaster, pleaaase!"</b></center>');
          scene.text('Just as you say that the next pound of the Client\'s dick pushes out the plug, which falls out down between your bound legs.');
          (s as any).analPlugIn = 0;
          (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
          // TODO-QSP: killvar 'hadOwnanalPlugIn'
          qspCall(s, 'pain', '', 7, 'anus', 'stretch');
          qspCall(s, 'stat', '');
        } else {
          // TODO-QSP: 'Both your pussy and your anus are well on display… You say to yourself: ' + $func('wrap', 'bimbo', ...
          scene.text('Ironically you actually sigh in relief as the Client sticks his warm, hard pole in your anus and not your pussy.');
          scene.img('images/locations/shared/brothel/fuckanalfrombehind.mp4');
        }
      }
      scene.actions([
        { label: 'Continue', goto: ['brothel_section1', 'section1_end_behind_anal', '2'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/shared/brothel/fuckanalfrombehind.mp4');
        scene.text('"Now bitch I\'m gonna ride you hard and deep!"');
        scene.text('With these words the Client increases his pace, fucking your poor anus violently, roughly and very, very deep…');
        scene.actions([
          { label: 'Endure it', goto: ['brothel_section1', 'section1_end_behind_anal', '3'] },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          scene.img('images/locations/shared/brothel/cuminassfrombehind.mp4');
          scene.text('After what seems like eternity, the Client seems to be close to orgasm.');
          scene.text('<center><b>"Yes Master, please fill me with your cum!"</b></center>');
          // TODO-QSP: 'It works as your words arouse him even more and finally he pumps all his vile seed deep into your i...
          qspCall(s, 'cum_call', 'anus', 'Master');
          scene.actions([
            { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1EndFrontVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'vaginal', 5, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  qspCall(s, 'pain', '', 3, 'cervix', 'ache');
  qspCall(s, 'stat', '');
  scene.text('<h3>Playroom</h3>');
  scene.img('images/locations/shared/brothel/cummissionaryvaginal.mp4');
  scene.text('Being still bound on your back, you finally expect it to end.');
  scene.text('The Client increases his pace and, with a groan, cums into your vagina, releasing his hot sperm down your pussy, reaching even to your cervix…');
  if (((s as any).knowpreg ?? 0) === 0  &&  ((s as any).thinkpreg ?? 0) === 0  &&  ((s as any).pillcon2 ?? 0) < 1000) {
    scene.text('With a growing sense of horror, you realize that you aren\'t on the shot and have no idea when you last took a birth control pill.');
  }
  qspCall(s, 'cum_call', '', '', 'Master');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
  ]);
  scene.build();
}

function enterSection1EndFrontAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'anal', 5, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  qspCall(s, 'pain', '', 2, 'anus', 'stretch');
  qspCall(s, 'stat', '');
  scene.text('<h3>Playroom</h3>');
  scene.img('images/locations/shared/brothel/cummissionaryanal.mp4');
  scene.text('Being still bound on your back, you finally expect it to end.');
  scene.text('The Client increases his pace and, with a groan, cums into your anus, releasing his hot sperm inside your intestines.');
  qspCall(s, 'cum_call', 'anus', 'Master');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
  ]);
  scene.build();
}

function enterSection1EndMouth(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'bj', 5, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  qspCall(s, 'pain', '', 4, 'throat', 'stretch');
  qspCall(s, 'stat', '');
  scene.text('<h3>Playroom</h3>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.img('images/locations/shared/brothel/caressface.jpg');
    scene.text('The client now leaves all the toys behind and goes to you.');
    scene.text('He starts to caress your face… unable to move, you just hold still and endure his touches…');
    scene.text('You start to shake as you know what\'s coming…');
    scene.actions([
      { label: 'Continue', goto: ['brothel_section1', 'section1_end_mouth', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.img('images/locations/shared/brothel/fuckfacetied.mp4');
      // TODO-QSP: 'As you were afraid of, the Client takes his cock and thrusts it in your mouth: ' + $func('wrap', 'b...
      scene.text('Unable to even react or moan, you are plugged with his meat, choking and dribbling all around…');
      scene.actions([
        { label: 'Continue', goto: ['brothel_section1', 'section1_end_mouth', '2'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/shared/brothel/cuminmouth.mp4');
        scene.text('His pace is increasing as an orgasm builds in his cock.');
        scene.text('The warm feel of his cum surprises you…');
        scene.text('Most of the cum penetrates directly into your throat and down to your belly, the rest flows out around your mouth and his dick…');
        qspCall(s, 'cum_call', 'mouth', 'Master');
        scene.actions([
          { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1EndFace(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'arousal', 'bj', 15, 'bound', 'sub', 'prostitution', 'humiliation', 'rough');
  scene.text('<h3>Playroom</h3>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    scene.img('images/locations/shared/brothel/caressface.jpg');
    scene.text('The client now leaves all the toys behind and goes to you.');
    scene.text('He starts to caress your face… unable to move, you just hold still and endure his touches…');
    scene.text('You start to shake as you know what\'s coming…');
    scene.actions([
      { label: 'Continue', goto: ['brothel_section1', 'section1_end_face', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.img('images/locations/shared/brothel/fuckfacetied.mp4');
      // TODO-QSP: 'As you were afraid of, the Client takes his cock and thrusts it in your mouth: ' + $func('wrap', 'b...
      scene.text('Unable to even react or moan, you are plugged with his meat, choking and dribbling all around…');
      scene.actions([
        { label: 'Continue', goto: ['brothel_section1', 'section1_end_face', '2'] },
      ]);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/shared/brothel/cumonface.mp4');
        scene.text('His pace is increasing as an orgasm builds in his cock.');
        scene.text('The warm feel of his cum surprises you as it lands all over your face.');
        scene.text('The sticky white liquid gets in your eyes and nose, slowly dripping around your mouth…');
        qspCall(s, 'cum_call', 'face', 'Master');
        scene.actions([
          { label: 'Continue', goto: ['brothel_section1', 'section1_end'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSection1End(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'jobs', 'clock_out', 'highway_brothel_prostitute');
  qspCall(s, 'stat', '');
  scene.text('<h3>Playroom</h3>');
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    qspCall(s, 'pain', '', 2, 'asscheeks', 'slap');
    qspCall(s, 'fetish', 'add_exp', 'prostitution');
    if (((s as any).fetishes ?? 0)?.['sub_pref'] < -30  ||  ((s as any).fetishes ?? 0)?.['maso_pref'] < -30) {
      qspCall(s, 'mood', 'lower_disposition', 'tiny');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/brothel/sessionend.jpg');
    scene.text('It seems you have served your purpose. The client is satisfied, his needs are taken care of.');
    scene.text('He starts to pack the few things he brought to the room, entirely ignoring your uncomfortable moans and pleas. As if you weren\'t there anymore.');
    scene.text('The last little indication that he is even aware of you is a rough, loud slap on your ass. Afterwards he leaves the room, closing the door behind you, leaving you tied in the pitiful state and awkward position you were in the whole session.');
    scene.text('<center><b>"Please, someone get me out of here!"</b></center>');
    scene.text('After a few minutes and some struggling, the receptionist finally enters the playroom.');
    scene.actions([
      { label: 'Ask him to release you', goto: ['brothel_section1', 'section1_end', '1'] },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      scene.text('The Receptionist circles around you, obviously enjoying the open position you are tied in.');
      if (((s as any).analPlugIn ?? 0) === 1  &&  (Math.floor(Math.random() * 100) + 1) <= 30) {
        scene.text('Then he notices the anal plug that is still well inside your anus. He gigles aloud but doesn\'t say a word… this is not good…');
        scene.img('images/locations/shared/brothel/pullplugfromass.mp4');
        scene.text('With one hard pull he rips the plug out of your anus, causing your already abused anus additional pain!');
        scene.text('<center><b>"Ouuuuchhhhh! You moron, you didn\'t even pay for this!"</b></center>');
        (s as any).analPlugIn = 0;
        (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
        // TODO-QSP: killvar 'hadOwnanalPlugIn'
        qspCall(s, 'pain', '', 5, 'asshole', 'stretch');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Yell at him to untie you', goto: ['brothel_section1', 'section1_end', '2'] },
        ]);
      } else {
        scene.img('images/locations/shared/brothel/receptionistgaze.jpg');
        scene.text('You can read obvious disgust from his face. You rather not try to guess what he thinks about you… The feel of his gaze on your bare body is frightening you even more than you already are…');
        scene.actions([
          { label: 'Beg him to finally untie you', goto: ['brothel_section1', 'section1_end', '2'] },
        ]);
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 2) {
        scene.img('images/locations/shared/brothel/receptionistslaverelease.jpg');
        scene.text('Finally he reaches out to you and starts with the untying, letting you go.');
        if (((s as any).analPlugIn ?? 0) === 1) {
          scene.actions([
            { label: 'Get up', goto: ['brothel_section1', 'section1_end', '3'] },
          ]);
        } else {
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Leave', goto: ['brothel', 'brothel_dressingroom'] },
          ]);
        }
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 3) {
          scene.text('As you try to get up, suddenly you realize the massive plug is still deep in your anus…');
          scene.text('<center><b>(I have to take it out…)</b></center>');
          scene.img('images/locations/shared/brothel/pullplugfromassyourself.mp4');
          scene.text('<center><b>Oww… Oww… Owwwch!</b></center>');
          (s as any).analPlugIn = 0;
          (s as any).analPlugOut = ((s as any).hadOwnanalPlugIn ?? 0);
          // TODO-QSP: killvar 'hadOwnanalPlugIn'
          qspCall(s, 'pain', '', 5, 'asshole', 'stretch');
          qspCall(s, 'stat', '');
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Throw it away and leave', goto: ['brothel', 'brothel_dressingroom'] },
          ]);
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
    case 'print_stats':
      enterPrintStats(s, scene);
      break;
    case 'section1_pref_update':
      enterSection1PrefUpdate(s, scene);
      break;
    case 'section1_cage':
      enterSection1Cage(s, scene);
      break;
    case 'section1_cage_leave':
      enterSection1CageLeave(s, scene);
      break;
    case 'section1_force_work':
      enterSection1ForceWork(s, scene);
      break;
    case 'section1_cage_client':
      enterSection1CageClient(s, scene);
      break;
    case 'section1_start':
      enterSection1Start(s, scene);
      break;
    case 'section1_pick':
      enterSection1Pick(s, scene);
      break;
    case 'section1_electro_main':
      enterSection1ElectroMain(s, scene);
      break;
    case 'section1_electro_asshigh':
      enterSection1ElectroAsshigh(s, scene);
      break;
    case 'section1_electro_like':
      enterSection1ElectroLike(s, scene);
      break;
    case 'section1_electro_dislike':
      enterSection1ElectroDislike(s, scene);
      break;
    case 'section1_electro_buttplug':
      enterSection1ElectroButtplug(s, scene);
      break;
    case 'section1_electro_push_plug':
      enterSection1ElectroPushPlug(s, scene);
      break;
    case 'section1_electro_rod':
      enterSection1ElectroRod(s, scene);
      break;
    case 'section1_electro_replug':
      enterSection1ElectroReplug(s, scene);
      break;
    case 'section1_electro_electrodes':
      enterSection1ElectroElectrodes(s, scene);
      break;
    case 'section1_electro_electrocute':
      enterSection1ElectroElectrocute(s, scene);
      break;
    case 'section1_electro_electrocute_more':
      enterSection1ElectroElectrocuteMore(s, scene);
      break;
    case 'section1_electro_electrocute_max':
      enterSection1ElectroElectrocuteMax(s, scene);
      break;
    case 'section1_tits_main':
      enterSection1TitsMain(s, scene);
      break;
    case 'section1_tits_hang_neck':
      enterSection1TitsHangNeck(s, scene);
      break;
    case 'section1_tits_whip':
      enterSection1TitsWhip(s, scene);
      break;
    case 'section1_tits_cane':
      enterSection1TitsCane(s, scene);
      break;
    case 'section1_tits_pinch':
      enterSection1TitsPinch(s, scene);
      break;
    case 'section1_tits_punch':
      enterSection1TitsPunch(s, scene);
      break;
    case 'section1_tits_pull_nipples':
      enterSection1TitsPullNipples(s, scene);
      break;
    case 'section1_tits_bind':
      enterSection1TitsBind(s, scene);
      break;
    case 'section1_tits_pinch_bound':
      enterSection1TitsPinchBound(s, scene);
      break;
    case 'section1_tits_hang_tits':
      enterSection1TitsHangTits(s, scene);
      break;
    case 'section1_tits_nails_needles':
      enterSection1TitsNailsNeedles(s, scene);
      break;
    case 'section1_tied_main':
      enterSection1TiedMain(s, scene);
      break;
    case 'section1_tied_lie_back':
      enterSection1TiedLieBack(s, scene);
      break;
    case 'section1_tied_on_back':
      enterSection1TiedOnBack(s, scene);
      break;
    case 'section1_tied_mouth':
      enterSection1TiedMouth(s, scene);
      break;
    case 'section1_tied_anal':
      enterSection1TiedAnal(s, scene);
      break;
    case 'section1_tied_vaginal':
      enterSection1TiedVaginal(s, scene);
      break;
    case 'section1_tied_tease':
      enterSection1TiedTease(s, scene);
      break;
    case 'section1_tied_analfisting':
      enterSection1TiedAnalfisting(s, scene);
      break;
    case 'section1_tied_vibrate':
      enterSection1TiedVibrate(s, scene);
      break;
    case 'section1_tied_whip':
      enterSection1TiedWhip(s, scene);
      break;
    case 'section1_end_main':
      enterSection1EndMain(s, scene);
      break;
    case 'section1_end_rage':
      enterSection1EndRage(s, scene);
      break;
    case 'section1_end_behind_vaginal':
      enterSection1EndBehindVaginal(s, scene);
      break;
    case 'section1_end_behind_anal':
      enterSection1EndBehindAnal(s, scene);
      break;
    case 'section1_end_front_vaginal':
      enterSection1EndFrontVaginal(s, scene);
      break;
    case 'section1_end_front_anal':
      enterSection1EndFrontAnal(s, scene);
      break;
    case 'section1_end_mouth':
      enterSection1EndMouth(s, scene);
      break;
    case 'section1_end_face':
      enterSection1EndFace(s, scene);
      break;
    case 'section1_end':
      enterSection1End(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brothel_section1: LocationDef = {
  name: 'brothel_section1',
  title: '"Only the customers should be getting you out of this cage. ',
  region: 'other',
  enter: enter,
};
