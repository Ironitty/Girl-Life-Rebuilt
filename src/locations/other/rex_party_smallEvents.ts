import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_gost_1_${Math.floor(Math.random() * 7) + 1}.mp4`);
  scene.text('Moving to the rhythmic sounds, you indulge in an unrestrained dance.');
  scene.text('You jump, sway your body and rock your booty, losing yourself in the general merriment.');
  if (((s as any).pcs_danc ?? 0) >= 50) {
    scene.text('You move your body perfectly with the rhythm of the music in an erotic way. This gets you a lot of attention from the others. Attention that you love.');
  }
  if (((s as any).pcs_danc ?? 0) < 50) {
    scene.text('Your ridiculous movements during the dance doesn\'t bother anyone. You dance badly, but you don\'t care.');
  }
  scene.actions([
    { label: 'Have a rest', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Dance more', goto: ['rex_party_smallEvents', 'dance'] },
  ]);
  scene.build();
}

function enterPartyDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).alkoParty = ((s as any).alkoParty ?? 0) + (1);
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_2_\' + rand(1, 4) + \'.jpg');
  scene.text('Someone hands you a half full bottle of booze. Putting your lips to the mouth of the bottle, you turn it up and gulp down several swigs of strong drink, noticing the effects almost at once.');
  scene.text('The party has just begun, you can still walk through the apartment and find something to do.');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).Rex_save ?? 0) === 1  &&  ((s as any).rex_love ?? 0) === 1) {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_13_${Math.floor(Math.random() * 4) + 1}.jpg`);
    scene.text('You fall asleep feeling the warmth of his body against your back as he hugs you tightly.');
    scene.text('You feel his hard erection against your ass. It excites you, but you are too tired to do anything with it as you fall fast asleep.');
  } else {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_12_${Math.floor(Math.random() * 11) + 1}.jpg`);
    scene.text('You feel completely safe as you fall asleep.');
    if (((s as any).iralenasleep ?? 0) >= 1) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_${Math.floor(Math.random() * 2) + 6}.jpg`);
      scene.text('You Lena and Ira lie in the bed side by side as you fall asleep.');
    } else {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_4_${Math.floor(Math.random() * 3) + 1}.jpg`);
      scene.text('Your body could not withstand so much alcohol and you end up passing out. Fortunately for you, friends are close and you are placed in a bed.');
      if (((s as any).sister_party_dom ?? 0) >= 1) {
        scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_9_${Math.floor(Math.random() * 3) + 3}.jpg`);
        scene.text('You fall asleep in the arms of your sister with a final kiss before drifting off.');
      } else {
        (s as any).i = Math.floor(Math.random() * 3) + 1;
        (s as any).hidden_guy = ((s as any).hidden_guy ?? 0) + (3);
        if (((s as any).i ?? 0) === 1) {
          qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
          qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
          (s as any).sloc = Math.floor(Math.random() * 7) + 0;
          if (((s as any).sloc ?? 0) === 1) {
            qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
          } else {
            qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
            if (((s as any).sloc ?? 0) === 3) {
              qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
            } else {
              qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
              if (((s as any).sloc ?? 0) === 5) {
                qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
              } else {
                qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
              }
              qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
              qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
              (s as any).sloc = Math.floor(Math.random() * 7) + 0;
              if (((s as any).sloc ?? 0) === 1) {
                qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
              } else {
                qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
                if (((s as any).sloc ?? 0) === 3) {
                  qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
                } else {
                  qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                  if (((s as any).sloc ?? 0) === 5) {
                    qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
                  } else {
                    qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
                  }
                  qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                  (s as any).sexunaware = 1;
                  (s as any).sloc = Math.floor(Math.random() * 7) + 0;
                  if (((s as any).sloc ?? 0) === 1) {
                    qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
                  } else {
                    qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
                    if (((s as any).sloc ?? 0) === 3) {
                      qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
                    } else {
                      qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                      if (((s as any).sloc ?? 0) === 5) {
                        qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
                      } else {
                        qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
                      }
                      scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_6_${Math.floor(Math.random() * 8) + 1}.jpg`);
                      scene.text('After everything that happened tonight, you feel exhausted and fall asleep. Your face and body are still smeared and coated in sperm, but you don\'t care.');
                      if (((s as any).i ?? 0) === 2) {
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                        scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_8_${Math.floor(Math.random() * 5) + 1}.jpg`);
                        scene.text('After everything that happened tonight, you feel exhausted and fall asleep. You have a dream about warm wet drops landing on your face and lips, like a warm summers rain. You sleepily like at the drops.');
                      } else {
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        if (Math.floor(Math.random() * 2) + 0 === 0) {
                          qspCall(s, 'cum_call', 'anus', 'unconscious rapist', 2);
                        } else {
                          qspCall(s, 'cum_call', '', '', 'unconscious rapist', 2);
                        }
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        (s as any).sexunaware = 1;
                        if (Math.floor(Math.random() * 2) + 0 === 0) {
                          qspCall(s, 'cum_call', 'anus', 'unconscious rapist', 2);
                        } else {
                          qspCall(s, 'cum_call', '', '', 'unconscious rapist', 2);
                        }
                        qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                        qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                        if (Math.floor(Math.random() * 2) + 0 === 0) {
                          qspCall(s, 'cum_call', 'anus', 'unconscious rapist', 2);
                        } else {
                          qspCall(s, 'cum_call', '', '', 'unconscious rapist', 2);
                        }
                        (s as any).i = Math.floor(Math.random() * 2) + 1;
                        if (((s as any).i ?? 0) === 1) {
                          // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/rekshome/part...
                          scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_9_${Math.floor(Math.random() * 2) + 1}.jpg"></center>`);
                        }
                        if (((s as any).i ?? 0) === 2) {
                          // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/reside...
                          scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_9_3.mp4"></video></center>`);
                        }
                        scene.text('After everything that happened tonight, you feel exhausted and fall asleep. You have a dream about being impaled on a stake for all your sins but surprisingly, instead of hurting, it actually feels wonderful.');
                      }
                    }
                    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0) {
                      scene.text('');
                      scene.text('After sleeping for some time, you are suddenly awakened by someone yelling at you to wake up while they slap you.');
                      scene.actions([
                        { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_7.jpg');
    scene.text('Anya shakes, yells at and slaps you until you slowly wake up.');
    scene.text('She smiles at you. "It looks like you had fun tonight. How are you feeling?"');
    scene.text('You groan, feeling sick. Your head is pounding, you feel like you are about to throw up and you are sore in more places than you can remember. "Go away and let me sleep, sis"');
    scene.text('Anya shakes you again. "Get up you drunk idiot! Mom will kill us both if you don\'t come home tonight."');
    if (((s as any).Rex_save ?? 0) === 1  &&  ((s as any).rex_love ?? 0) === 0) {
      scene.text('As you leave the apartment, you gently kiss Rex on the cheek, thanking for the evening.');
    }
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('As you leave the apartment, you passionatly kiss Rex on the lips. "Thank you for a lovely evening."');
    }
    if (((s as any).party_boys_in ?? 0) >= 1) {
      scene.text('As you leave the apartment, some drunk guys tell you they will miss you and to sleep well while laughing to each other.');
    }
    if (((s as any).hour ?? 0) < 22  &&  ((s as any).hour ?? 0) > 18) {
      (s as any).minut = ((s as any).minut ?? 0) + (((21 - ((s as any).hour ?? 0)) * 60) + (60 - ((s as any).minut ?? 0)));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go home', goto: ['bedrPar', ''] },
      ]);
    } else {
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['bedrPar', ''] },
      ]);
    }
  } },
                      ]);
                    } else {
                      if (((s as any).hour ?? 0) < 9  &&  ((s as any).hour ?? 0) > 3) {
                        qspCall(s, 'sleep_simple', 'sleep_until', 9, 0);
                        scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_7.jpg');
                        scene.text('Anya shakes you until you slowly wake up');
                        scene.text('She smiles at you. "Well it looks like you had fun tonight. How are you feeling?"');
                        scene.text('You groan, feeling sick. Your head is pounding and you are sore in more places than you can remember. "Let me sleep sis! I feel so sick."');
                        scene.text('Anya shakes you again. "Get up you drunk idiot! Mom is going to kill us both since we haven\'t come home yet!"');
                        if (((s as any).Rex_save ?? 0) === 1  &&  ((s as any).rex_love ?? 0) === 0) {
                          scene.text('As you leave the apartment, you gently kiss Rex on the cheek, thanking for the evening.');
                        }
                        if (((s as any).rex_love ?? 0) === 1) {
                          scene.text('As you leave the apartment, you passionatly kiss Rex on the lips. "Thank you for a lovely evening."');
                        }
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Go home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['bedrPar', ''] },
                        ]);
                      } else {
                        (s as any).minut = ((s as any).minut ?? 0) + 90;
                        qspCall(s, 'stat', '');
                        scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_4_1.jpg');
                        scene.actions([
                          { label: 'Return to party', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dance':
      enterDance(s, scene);
      break;
    case 'party_drink':
      enterPartyDrink(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    default:
      enterDance(s, scene);
      break;
  }
}

export const rex_party_smallEvents: LocationDef = {
  name: 'rex_party_smallEvents',
  title: 'Lena',
  region: 'other',
  description: ['Moving to the rhythmic sounds, you indulge in an unrestrained dance.'],
  enter: enter,
};
