import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
    if (((s as any).Rex_save ?? 0) === 1  &&  (!((s as any).rex_love ?? 0))) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_12_${Math.floor(Math.random() * 11) + 1}.jpg`);
      scene.text('You feel completely safe as you fall asleep.');
    } else {
      if (((s as any).iralenasleep ?? 0) >= 1) {
        scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_6_${Math.floor(Math.random() * 2) + 6}.jpg`);
        scene.text('You Lena and Ira lie in the bed side by side as you fall asleep.');
      } else {
        if (((s as any).drunk_sveta ?? 0) >= 1  &&  ((s as any).sister_party_dom ?? 0) < 1) {
          scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_4_${Math.floor(Math.random() * 3) + 1}.jpg`);
          scene.text('Your body could not withstand so much alcohol and you end up passing out. Fortunately for you, friends are close and you are placed in a bed.');
        } else {
          if (((s as any).sister_party_dom ?? 0) >= 1) {
            scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_sister_9_${Math.floor(Math.random() * 3) + 3}.jpg`);
            scene.text('You fall asleep in the arms of your sister with a final kiss before drifting off.');
          } else {
            if (((s as any).party_boys_in ?? 0) >= 1) {
              (s as any).i = Math.floor(Math.random() * 3) + 1;
              (s as any).hidden_guy = ((s as any).hidden_guy ?? 0) + (3);
              if (((s as any).i ?? 0) === 1) {
                qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                (s as any).sloc = Math.floor(Math.random() * 7) + 0;
                if (((s as any).sloc ?? 0) === 1) {
                  qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
                } else {
                  if (((s as any).sloc ?? 0) === 2) {
                    qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
                  } else {
                    if (((s as any).sloc ?? 0) === 3) {
                      qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
                    } else {
                      if (((s as any).sloc ?? 0) === 4) {
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                      } else {
                        if (((s as any).sloc ?? 0) === 5) {
                          qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
                        } else {
                          if (((s as any).sloc ?? 0) === 6) {
                            qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
                          }
                        }
                      }
                    }
                  }
                }
                qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                (s as any).sloc = Math.floor(Math.random() * 7) + 0;
                if (((s as any).sloc ?? 0) === 1) {
                  qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
                } else {
                  if (((s as any).sloc ?? 0) === 2) {
                    qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
                  } else {
                    if (((s as any).sloc ?? 0) === 3) {
                      qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
                    } else {
                      if (((s as any).sloc ?? 0) === 4) {
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                      } else {
                        if (((s as any).sloc ?? 0) === 5) {
                          qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
                        } else {
                          if (((s as any).sloc ?? 0) === 6) {
                            qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
                          }
                        }
                      }
                    }
                  }
                }
                qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                (s as any).sexunaware = 1;
                (s as any).sloc = Math.floor(Math.random() * 7) + 0;
                if (((s as any).sloc ?? 0) === 1) {
                  qspCall(s, 'cum_call', 'labia', 'unconscious rapist', 2);
                } else {
                  if (((s as any).sloc ?? 0) === 2) {
                    qspCall(s, 'cum_call', 'butt', 'unconscious rapist', 2);
                  } else {
                    if (((s as any).sloc ?? 0) === 3) {
                      qspCall(s, 'cum_call', 'back', 'unconscious rapist', 2);
                    } else {
                      if (((s as any).sloc ?? 0) === 4) {
                        qspCall(s, 'cum_call', 'face', 'unconscious rapist', 2);
                      } else {
                        if (((s as any).sloc ?? 0) === 5) {
                          qspCall(s, 'cum_call', 'mouth', 'unconscious rapist', 2);
                        } else {
                          if (((s as any).sloc ?? 0) === 6) {
                            qspCall(s, 'cum_call', 'stomach', 'unconscious rapist', 2);
                          }
                        }
                      }
                    }
                  }
                }
                scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_6_${Math.floor(Math.random() * 8) + 1}.jpg`);
                scene.text('After everything that happened tonight, you feel exhausted and fall asleep. Your face and body are still smeared and coated in sperm, but you don\'t care.');
              } else {
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
                  if (((s as any).i ?? 0) === 3) {
                    qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      qspCall(s, 'cum_call', 'anus', 'unconscious rapist', 2);
                    } else {
                      qspCall(s, 'cum_call', '', '', 'unconscious rapist', 2);
                    }
                    qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                    (s as any).sexunaware = 1;
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      qspCall(s, 'cum_call', 'anus', 'unconscious rapist', 2);
                    } else {
                      qspCall(s, 'cum_call', '', '', 'unconscious rapist', 2);
                    }
                    qspCall(s, 'npcgeneratec', '', 0, 'unconscious rapist', Math.floor(Math.random() * 6) + 17);
                    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
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
              }
            }
          }
        }
      }
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
    if (((s as any).Rex_save ?? 0) === 1  &&  (!((s as any).rex_love ?? 0))) {
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
      if (((s as any).Rex_save ?? 0) === 1  &&  (!((s as any).rex_love ?? 0))) {
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
  scene.build();
}

function enterLena(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Lena</b></center>');
  scene.img('images/characters/pavlovsk/resident/lena/lena.jpg');
  scene.text('Walking up to Lena you talk and share a drink.');
  scene.text('Small and mobile Lena');
  if (((s as any).alko ?? 0) < 6  &&  ((s as any).loc_arg ?? 0) === 'RexRoom') {
    // TODO-QSP: act 'Have a drink': gt 'rex_party_smallEvents', 'party_drink'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIra(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ira</b></center>');
  scene.img('images/characters/pavlovsk/resident/ira/ira.jpg');
  scene.text('Walking up to Ira you talk and share a drink.');
  scene.text('Constantly embarrassing Ira');
  if (((s as any).alko ?? 0) < 6  &&  ((s as any).loc_arg ?? 0) === 'RexRoom') {
    // TODO-QSP: act 'Have a drink': gt 'rex_party_smallEvents', 'party_drink'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterIraLenaLivingRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ira and Lena</b></center>');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_iralena_1_${Math.floor(Math.random() * 5) + 1}.jpg`);
  scene.text('Ira and Lena are really getting into the spirit of the party.');
  // TODO-QSP: dynamic text: Lena and Ira together clink cups. "<<$pcs_nickname>>, Lets party!" As they offer...
  scene.text(`Lena and Ira together clink cups. "${((s as any).pcs_nickname ?? 0)}, Lets party!" As they offer you a drink.`);
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).drunk_sveta = ((s as any).drunk_sveta ?? 0) + (1);
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_iralena_2.jpg');
    scene.text('Ira and Lena ply you with drinks, the more you drink the more your mood is markedly improved.');
    scene.text('After several drinks Lena and Ira pull you roughly along to come have fun with them.');
    if (((s as any).alko ?? 0) >= 7) {
      scene.text('Sudden your head starts spinning and you feel unsteady.');
      scene.actions([
        { label: 'Pass out', goto: ['rex_party_smallEvents', 'sleep'] },
      ]);
    } else {
      scene.actions([
        { label: 'Have fun', handler: (st: GameState) => {
    // TODO-QSP: gt 'rex_party_sexEvents', 'ira_lena_fun', 'boys'
  } },
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
    { label: 'Dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Ira and Lena</b></center>');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_gost_1_${Math.floor(Math.random() * 7) + 1}.mp4`);
    scene.text('Moving to the rhythmic sounds, you indulge in an unrestrained dance with Lena and Ira.');
    scene.text('You jump, sway your body, and rock your booty, losing yourself in the general merriment.');
    if (((s as any).pcs_danc ?? 0) >= 50) {
      scene.text('You move your body perfectly with the rhythm of the music in an erotic way, getting you a lot of attention from others and you love they attention.');
    }
    if (((s as any).pcs_danc ?? 0) < 50) {
      scene.text('Your ridiculous movements during the dance does not bother anyone, you dance badly, but you do not care.');
    }
    scene.actions([
      { label: 'Have a rest', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Kiss', handler: (st: GameState) => {
    // TODO-QSP: gt 'rex_party_sexEvents', 'ira_lena_fun', 'girls'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Rex</b></center>');
  scene.img('images/characters/pavlovsk/resident/reks/reks.jpg');
  scene.text('Tall, athletic guy, whom everyone calls Rex.');
  if ((!((s as any).rex_love ?? 0))) {
    scene.text('You walk up to Rex but then you realize he looks way too drunk and distracted by the other girls to pay much attention to you.');
  }
  if (((s as any).rex_love ?? 0) === 1) {
    scene.text('Rex comes up to you and hugs you sweetly.');
  }
  if (((s as any).loc_arg ?? 0) === 'RexRoom'  &&  ((s as any).alko ?? 0) < 6) {
    // TODO-QSP: act 'propose a toast': gt 'rex_party_smallEvents', 'party_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Chat': gt 'rex_party_smallEvents', 'rex_talk'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Dance together': gt 'rex_party_smallEvents', 'rex_dance'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterRexTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).rex_talk = ((s as any).rex_talk ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_2_${Math.floor(Math.random() * 5) + 1}.mp4`);
  scene.text('You find a space to sit and talk to Rex. He\'s quite interesting and very handsome, so you spend most of the time just nodding and flirting.');
  if (((s as any).rex_talk ?? 0) >= 2) {
    // TODO-QSP: act 'Hug': gt 'rex_party_smallEvents', 'rex_hug'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Ask Rex to dance', goto: ['rex_party_smallEvents', 'rex_dance'] },
  ]);
  scene.build();
}

function enterRexHug(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'stat', '');
  if (((s as any).rex_love ?? 0) ===1) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_4_1.mp4');
    } else {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_4_${Math.floor(Math.random() * 4) + 2}.jpg`);
    }
    scene.text('Rex grabs you with his strong hands and begins to knead your ass with one hand and caress your pussy with the other in front of everybody.');
    scene.text('You grab his neck and audibly groan, completely giving into his affections.');
    scene.text('You are overwhelmed with the most pleasant feeling in the world. You don\'t want it to stop.');
    scene.actions([
      { label: 'Kiss', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_5_1.jpg');
    } else {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_5_${Math.floor(Math.random() * 3) + 2}.mp4`);
    }
    scene.text('Looking adoringly into each other\'s eyes, you begin to passionately kiss.');
    scene.text('You lips touch in your long kiss. It almost feels like a shock of electricity is running through your body.');
    // TODO-QSP: dynamic text: For a long time, you continue to enjoy the warm kiss, but Rex eventually breaks ...
    scene.text(`For a long time, you continue to enjoy the warm kiss, but Rex eventually breaks the kiss and says "Come with me ${((s as any).pcs_nickname ?? 0)}. I think we've had enough fun here." Smiling, he takes you by the hand and leads you away.`);
    qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Follow Rex', goto: ['rex_party_sexEvents', 'rex_sex'] },
    ]);
  } },
    ]);
  }
  if ((!((s as any).rex_love ?? 0))) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_13_${Math.floor(Math.random() * 4) + 4}.jpg`);
    } else {
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_13_${Math.floor(Math.random() * 3) + 1}.mp4`);
    }
    scene.text('Rex grabs you with his strong hands and begins to knead your ass with one hand and caress your pussy with the other in front of everybody.');
    scene.text('You grab his neck and audibly groan, completely giving into his affections.');
    // TODO-QSP: dynamic text: After playing with your pussy for a bit, he stops, takes you by the hand and pul...
    scene.text(`After playing with your pussy for a bit, he stops, takes you by the hand and pulls you away as he says "Come with me ${((s as any).pcs_nickname ?? 0)}, I think we've had enough fun here."`);
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Follow Rex', goto: ['rex_party_sexEvents', 'rex_sex'] },
    ]);
  }
  scene.build();
}

function enterRexDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_3_${Math.floor(Math.random() * 3) + 4}.mp4`);
  } else {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_3_${Math.floor(Math.random() * 3) + 1}.jpg`);
  }
  scene.text('Rex takes you by the hand and drags you out to dance. You are happy to follow him.');
  scene.text('You dance, slowly getting closer to each other and finally grinding a bit against each other.');
  scene.text('You turn around, putting your back to him and grind your tight ass against his crotch. You can feel his hard cock against your ass as you grind against it.');
  if (((s as any).rex_talk ?? 0) >= 2) {
    // TODO-QSP: act 'Hug': gt 'rex_party_smallEvents', 'rex_hug'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterRoma(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Roma</b></center>');
  scene.img('images/characters/shared/headshots_main/big56.jpg');
  scene.text('Red-haired skinny guy named Roma.');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterAnya(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_1.jpg');
    scene.text('');
  } else {
    scene.img('images/characters/pavlovsk/resident/anya/sister2.jpg');
    scene.text('');
  }
  // TODO-QSP: 'Your sister' + iif($loc_arg = 'LivingRoom', ' is drunk and in good spirits.', '.')
  // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, how do you like our humble party? It looks like you're ha...
  scene.text(`"Oh ${((s as any).pcs_nickname ?? 0)}, how do you like our humble party? It looks like you're having a good time."`);
  if (((s as any).alko ?? 0) < 6  &&  ((s as any).loc_arg ?? 0) === 'RexRoom') {
    // TODO-QSP: act 'Have a drink': gt 'rex_party_smallEvents', 'party_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Drink': gt 'rex_party_smallEvents', 'sister_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Chat about guys': gt 'rex_party_smallEvents', 'sister_talk'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSisterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_1.jpg');
  if (((s as any).sisterQW ?? 0)?.['AnyaRomaQW'] === 1) {
    ((s as any).sisterQW ?? {})['partytalk'] = (((s as any).sisterQW ?? {})['partytalk'] ?? 0) + (1);
    if (((s as any).sisterQW ?? 0)?.['partytalk'] === 1) {
      scene.text('"It is strange seeing you back together with Roma."');
      scene.text('"We talked things out and decided to give it another chance.');
    } else {
      if (((s as any).sisterQW ?? 0)?.['partytalk'] === 2) {
        scene.text('"You\'re over it after all the cursing, crying and yelling?"');
        scene.text('"I know, I know. I got excited a little bit, but now everything is worked out."');
      } else {
        if (((s as any).sisterQW ?? 0)?.['partytalk'] === 3) {
          scene.text('"So you are just going to continue dating him after everything that happened?"');
          scene.text('"Well little sis, he made mistakes. Now he and I have worked things out, and I thank God everything is behind us."');
        } else {
          if (((s as any).sisterQW ?? 0)?.['partytalk'] === 4) {
            scene.text('"I cannot believe it! You let him crawl back and took him back? It\'s not like you."');
            // TODO-QSP: dynamic text: "Well <<$pcs_nickname>>, it's best to have a bird in the hand, especially now th...
            scene.text(`"Well ${((s as any).pcs_nickname ?? 0)}, it's best to have a bird in the hand, especially now that we don't have such a simple relationship anymore.`);
          } else {
            if (((s as any).sisterQW ?? 0)?.['partytalk'] === 5) {
              scene.text('"What do you mean you \'don\'t have a simple relationship\'? I need more details."');
              scene.text('"Yes I know, so pay attention, I\'m not going to repeat this. In a sense, we now have an open relationship."');
            } else {
              if (((s as any).sisterQW ?? 0)?.['partytalk'] === 6) {
                scene.text('"Open relationship? You mean where you can both fuck anyone you want and you keep dating him?"');
                // TODO-QSP: dynamic text: "Eh, something like that <<$pcs_nickname>>."
                scene.text(`"Eh, something like that ${((s as any).pcs_nickname ?? 0)}."`);
              } else {
                if (((s as any).sisterQW ?? 0)?.['partytalk'] === 7) {
                  scene.text('"I can see that you are a fool! I could not agree to that."');
                  scene.text('"Why? I know he loves me, and he knows that I love him, but while we are young, we have fun."');
                } else {
                  if (((s as any).sisterQW ?? 0)?.['partytalk'] === 8) {
                    scene.text('"I still say it\'s crazy how you can be in a loving relationship and still fuck anyone."');
                    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I am not a complete fool. Why 'anyone'? Look around, there a...
                    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I am not a complete fool. Why 'anyone'? Look around, there are other nice guys here too, such as Rex.`);
                  } else {
                    if (((s as any).sisterQW ?? 0)?.['partytalk'] === 9  &&  ((s as any).rex_love ?? 0) === 1) {
                      scene.text('"Do you want me to kill you? You know that I\'m dating Rex!"');
                      // TODO-QSP: dynamic text: "Calm down <<$pcs_nickname>>, I was joking! I know that you two are dating. Alth...
                      scene.text(`"Calm down ${((s as any).pcs_nickname ?? 0)}, I was joking! I know that you two are dating. Although… I did let you fuck my boyfriend, so why can't I fuck yours?"`);
                    } else {
                      if (((s as any).sisterQW ?? 0)?.['partytalk'] === 9  &&  (!((s as any).rex_love ?? 0))) {
                        scene.text('"You\'re right. I wouldn\'t mind having him myself, but I don\'t know if Rex would agree."');
                        scene.text('"Oh, what a naughty girl! Well then, how about we lure him together?"');
                      } else {
                        if (((s as any).sisterQW ?? 0)?.['partytalk'] === 10  &&  ((s as any).rex_love ?? 0) === 1) {
                          ((s as any).sisterQW ?? {})['AnyaRomaQW'] = 2;
                          scene.text('You huff and pout, but realize she has a point. "OK fine, but I\'m not sure Rex would agree. You and Roma both agreed ahead of time."');
                          // TODO-QSP: dynamic text: "The main thing is that you are not opposed to it <<$pcs_nickname>>. Besides, al...
                          scene.text(`"The main thing is that you are not opposed to it ${((s as any).pcs_nickname ?? 0)}. Besides, all men are the same. You really think Rex could withstand both our charms?"`);
                        } else {
                          if (((s as any).sisterQW ?? 0)?.['partytalk'] === 10  &&  (!((s as any).rex_love ?? 0))) {
                            ((s as any).sisterQW ?? {})['AnyaRomaQW'] = 2;
                            scene.text('"You want to seduce Rex? Haha, I\'ve already fucked him! You have no idea what he is like in bed.');
                            scene.text('"Wow! What a saucy little minx you are! So that\'s why you are always running around in his room? Well then, that will make this easier."');
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
    (s as any).i = Math.floor(Math.random() * 9) + 1;
    if (((s as any).i ?? 0) === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you still don't have a man?"
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, you still don't have a man?"`);
    }
    if (((s as any).i ?? 0) === 2) {
      // TODO-QSP: dynamic text: "Sometimes I can't decide what is more important: the size of their wallet or th...
      scene.text(`"Sometimes I can't decide what is more important: the size of their wallet or the size of their dick. What do you think ${((s as any).pcs_nickname ?? 0)}?"`);
    }
    if (((s as any).i ?? 0) === 3) {
      scene.text('"If you have a reputation as the town whore, the guys won\'t let you come to the parties anymore."');
    }
    if (((s as any).i ?? 0) === 4) {
      scene.text('"It\'s not good to come here when you\'re in a bad mood. Rex hates having miserable bastards in his house."');
    }
    if (((s as any).i ?? 0) === 5) {
      scene.text('"Still going to that crap school? Idiot, find yourself a rich man, and all your problems are solved!"');
    }
    if (((s as any).i ?? 0) === 6) {
      scene.text('"When I drink, I become like a man and constantly think about sex."');
    }
    if (((s as any).i ?? 0) === 7) {
      scene.text('"Roma sends his greetings. He said he missed our threesomes, so I slapped him across the face."');
    }
    if (((s as any).i ?? 0) === 8) {
      scene.text('"What do you think of our host?"');
    }
    if (((s as any).i ?? 0) === 9) {
      // TODO-QSP: dynamic text: "Get wild <<$pcs_nickname>>! Everything that happens at Rex's parties, stays at ...
      scene.text(`"Get wild ${((s as any).pcs_nickname ?? 0)}! Everything that happens at Rex's parties, stays at Rex's parties."`);
    }
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSisterDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  (s as any).drunk_sveta = ((s as any).drunk_sveta ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Anya</b></center>');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_sister_2.jpg');
  // TODO-QSP: dynamic text: Anya hands you a bottle. You take a swig and hand it back. "Keep the bottle, lit...
  scene.text(`Anya hands you a bottle. You take a swig and hand it back. "Keep the bottle, little sis. I won't tell ${((s as any).npc_nickname ?? 0)?.['A29']}," she says with a wink.`);
  if (((s as any).alko ?? 0) >= 7) {
    scene.text('With her encouragement, you end up drinking more than you should.');
    scene.text('Suddenly your head is severely spinning…');
    scene.actions([
      { label: 'Pass out', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } else {
    scene.text('You gladly drink more, sharing it with your sister.');
    scene.text('Feeling buzzed, you are ready to plunge into the wild debauchery of the party.');
    scene.actions([
      { label: 'Dance topless', goto: ['rex_party_sexEvents', 'sister_fun'] },
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterDj(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).party_dj = 1;
  qspCall(s, 'stat', '');
  if (((s as any).party_dj ?? 0) === 1  &&  ((s as any).dj_beer ?? 0) < 1) {
    scene.text('<center><b>DJ</b></center>');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
    // TODO-QSP: dynamic text: The guy messes with the soundboard and makes the sound even louder. "Hello, <<$p...
    scene.text(`The guy messes with the soundboard and makes the sound even louder. "Hello, ${((s as any).pcs_nickname ?? 0)}, get my friend and me a beer. You can find all the booze in the kitchen."`);
  } else {
    if (((s as any).dj_beer ?? 0) === 1  &&  ((s as any).dj_thank ?? 0) < 1) {
      scene.text('<center><b>DJ</b></center>');
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
      // TODO-QSP: dynamic text: The guy messes with the soundboard and makes the sound even louder. "Well, <<$pc...
      scene.text(`The guy messes with the soundboard and makes the sound even louder. "Well, ${((s as any).pcs_nickname ?? 0)}, where are our beers?" You go into the kitchen, get two bottles of beer and <a href="exec:gt 'rex_party_smallEvents', 'dj_give_beer'">bring</a> them to the guys.`);
    } else {
      if (((s as any).dj_thank ?? 0) === 1  &&  ((s as any).dj_bad ?? 0) < 1) {
        scene.text('<center><b>DJ</b></center>');
        scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
        scene.text('The guy messes with the soundboard and makes the sound even louder. You are allowed to <a href="exec:gt \'rex_party_smallEvents\', \'dj_thank\'">twist</a> some knobs on the turntable.');
      } else {
        if (((s as any).dj_bad ?? 0) === 1  &&  ((s as any).dj_boobs ?? 0) < 1) {
          scene.text('<center><b>DJ</b></center>');
          scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you won't get a turn. Don't even try this time.
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, you won't get a turn. Don't even try this time.`);
        } else {
          if (((s as any).dj_boobs ?? 0) === 1) {
            scene.text('<center><b>DJ</b></center>');
            scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
            scene.text('The guy messes with the soundboard and makes the sound even louder. You are again allowed to <a href="exec:gt \'rex_party_sexEvents\', \'dj_cock\'">twist</a> some knobs on the turntable.');
          }
        }
      }
    }
  }
  qspCall(s, 'willpower', 'exhib', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Flash boobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flash boobs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
  }, goto: ['rex_party_sexEvents', 'dj_boobs'] },
    ]);
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDjTakeBeer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).dj_beer = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_2_3.jpg');
  scene.text('You take two bottles of booze to the DJ and his friend');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDjGiveBeer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).dj_thank = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy.jpg');
  scene.text('You take two beers to the guys. They gratefully appreciate your offer.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you ever use one of these before?" the DJ asks you, indicati...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, you ever use one of these before?" the DJ asks you, indicating the turntable.`);
  scene.text('You shake your head. "No, I can\'t say I have."');
  scene.text('He smiles at you. "While everyone is still sitting and drinking, you can give it a little <a href="exec: gt \'rex_party_smallEvents\', \'dj_thank\'">twist</a>. Let\'s see what you can do girl!"');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterDjThank(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).dj_bad = 1;
  qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 3) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boy_1.jpg');
  scene.text('You are happy to take this opportunity. Putting your fingers on the records, you move them around, making some god awful noises. The guys stop you before too long. "OK, I think that\'s enough. I think you made my ears bleed." he says with a laugh.');
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPartyGirls(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Girls</b></center>');
  if (((s as any).loc_arg ?? 0) === 'RexRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls.jpg');
  } else {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_1_${Math.floor(Math.random() * 4) + 1}.jpg`);
  }
  scene.text('Some former classmates of your sister. You are not familiar with them.');
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Drink': gt 'rex_party_smallEvents', 'party_girls_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Dance together': gt 'rex_party_smallEvents', 'party_girls_dance'
  }
  if (((s as any).loc_arg ?? 0) === 'RexRoom'  &&  ((s as any).alko ?? 0) < 6) {
    // TODO-QSP: act 'Propose a toast': gt 'rex_party_smallEvents', 'party_drink'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterPartyGirlsDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  (s as any).drunk_sveta = ((s as any).drunk_sveta ?? 0) + (1);
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 2) + 1;
  if (((s as any).i ?? 0) === 1) {
    // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/reside...
    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_2_1.mp4"></video></center>`);
  }
  if (((s as any).i ?? 0) === 2) {
    // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/rekshome/part...
    scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_2_${Math.floor(Math.random() * 3) + 2}.jpg"></center>`);
  }
  scene.text('The girls have some booze with them and you are happy to share a drink with them. You and the girls keep drinking during dancing. Your drunk yelling drowned out by the music, as the girls tell you they want to have even more fun…');
  if (((s as any).alko ?? 0) >= 7) {
    scene.text('You are dizzy, and feel very ill.');
  }
  if (((s as any).alko ?? 0) >= 7) {
    // TODO-QSP: act 'Sleep': gt 'rex_party_smallEvents', 'sleep'
  }
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Drink more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).drunk_sveta = ((s as any).drunk_sveta ?? 0) + (1);
    qspCall(s, 'stat', '');
    (s as any).i = Math.floor(Math.random() * 2) + 1;
    if (((s as any).i ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><video autoplay loop <<$set_imgh>> src="images/locations/pavlovsk/reside...
      scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_3_1.mp4"></video></center>`);
    }
    if (((s as any).i ?? 0) === 2) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/rekshome/part...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_3_${Math.floor(Math.random() * 2) + 2}.jpg"></center>`);
    }
    scene.text('You have another drink, and start to lose touch with reality. You feel dizzy and very sick…');
    scene.actions([
      { label: 'Pass out', goto: ['rex_party_smallEvents', 'sleep'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBra(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_5_${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('Yielding to the general madness, you pull your top off exposing your bra to the frantic shouts of the boys. In this state your dancing clearly will look much more spectacular.');
  if (((s as any).rex_love ?? 0) === 1) {
    scene.text('Rex watches you closely, but says nothing.');
  }
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Dance topless', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_6_${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('Under the merry shouts of the boys and girls you take off your bra and dance half-naked. A lot of the guys come closer trying to enjoy the view.');
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('You enjoy yourself when Rex shouts "Maybe that\'s enough? This isn\'t very nice to look at."');
    }
    if (((s as any).rex_love ?? 0) === 1) {
      // TODO-QSP: act 'Drag him to the restroom': gt 'rex_party_sexEvents', 'rex_toilet_bj'
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Undress', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_9_1.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_9_2.mp4');
    }
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('You completely ignore Rex. He glares at you and turns away.');
    }
    scene.text('You undress completely, only a few girls follow your example and get naked as well. You all get into the middle of the room and dance together. Ignoring the surrounding people, you dance together, naked. Several drunks guys approach you, and tell you it would be a sin to not use such a fine bitch like you.');
    scene.actions([
      { label: 'Go with the guys', goto: ['rex_party_sexEvents', 'toilet_boys_bj'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPartyGirlsDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).pcs_inhib ?? 0) < 40) {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_gost_1_${Math.floor(Math.random() * 7) + 1}.mp4`);
  scene.text('You are grabbed by the rhythmic sounds and indulge in unrestrained dancing with the crowd.  You jump and twist your body, completely merging and absorbing yourself in the fun atmosphere.');
  if (((s as any).pcs_danc ?? 0) >= 50) {
    scene.text('Your curves and movements to the music make you a pleasure to watch. The others stare at you excitedly.');
  }
  if (((s as any).pcs_danc ?? 0) < 50) {
    scene.text('Your ridiculous movements during the dance don\'t bother anyone. You dance badly, but you do not care.');
  }
  scene.actions([
    { label: 'Take a breather', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Dance more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_14_${Math.floor(Math.random() * 4) + 1}.jpg`);
    // TODO-QSP: dynamic text: You have a lot of fun as you dance with the girls under the deafening music. Dur...
    scene.text('You have a lot of fun as you dance with the girls under the deafening music. During the dance you are pressed against each other and the other girls touch you in all sorts of places. Suddenly a pair of hands pull up your skirt and bare your ass. One of the girls \'+ iif($pantyworntype ! \'none\', \'pulls down your panties and \', \')+\'starts to kiss and lick you.');
    if (((s as any).rex_love ?? 0) === 1) {
      scene.text('Rex watches you with interest as you have fun with the girls.');
    }
    scene.text('The girls are only getting warmed up and offer you more.');
    qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Give in', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_girls_party_gost_15_${Math.floor(Math.random() * 8) + 1}.jpg`);
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, lets get wild." You give in to the general madness, ...
    scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}, lets get wild." You give in to the general madness, taking off all your clothes, and diving headlong into the abyss of insane lesbian fervor.`);
    scene.actions([
      { label: 'Have fun with the guys', goto: ['rex_party_sexEvents', 'orgy'] },
      { label: 'Go into another room with the girls', goto: ['rex_party_sexEvents', 'girl_orgy'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPartyBoys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Guys</b></center>');
  if (((s as any).loc_arg ?? 0) === 'party_kuh'  ||  ((s as any).loc_arg ?? 0) === 'LivingRoom') {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boys_2.jpg');
    scene.text('');
  } else {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boys.jpg');
    scene.text('');
  }
  scene.text('You see a couple of former classmates of your sister. You are not familiar with them.');
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: dynamic text: A couple of fun energetic guys come over to you. "Hey <<$pcs_nickname>>, long ti...
    scene.text(`A couple of fun energetic guys come over to you. "Hey ${((s as any).pcs_nickname ?? 0)}, long time no see. Do you want to come with us?"`);
  }
  if (((s as any).alko ?? 0) >= 5) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how about you show us your great tits. Just for fun?"
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, how about you show us your great tits. Just for fun?"`);
  }
  if (((s as any).alko ?? 0) < 6  &&  ((s as any).loc_arg ?? 0) === 'RexRoom') {
    // TODO-QSP: act 'Drink': gt 'rex_party_smallEvents', 'party_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'Kitchen') {
    // TODO-QSP: act 'Drink': gt 'rex_party_smallEvents', 'kitchen_boy_drink'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Drink': gt 'rex_party_smallEvents', 'gost_drink'
  }
  if (((s as any).alko ?? 0) >= 5  &&  ((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Show your tits': gt 'rex_party_smallEvents', 'show_boobs'
  }
  if (((s as any).loc_arg ?? 0) === 'LivingRoom') {
    // TODO-QSP: act 'Dance': gt 'rex_party_smallEvents', 'dance'
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGostDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  (s as any).party_boys_in = ((s as any).party_boys_in ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boys_party_gost_1.jpg');
  scene.text('You happily make a couple of sips. Some guys urge you to show off more of your body.');
  scene.text('"Hey, how about you show us your great tits. Just for fun?"');
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).alko ?? 0) >= 7) {
    // TODO-QSP: act 'Fall asleep drunk': gt 'rex_party_smallEvents', 'sleep'
  }
  scene.actions([
    { label: 'Show your tits', goto: ['rex_party_smallEvents', 'show_boobs'] },
  ]);
  scene.build();
}

function enterShowBoobs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_boys_party_gost_2_1.mp4');
  } else {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/party_boys_party_gost_2_${Math.floor(Math.random() * 4) + 2}.jpg`);
  }
  scene.text('With a twinkle in your eyes you lower your bra, baring your breasts, as the guys watch you with pleasure.');
  scene.text('"So what do you think, boys?" you ask with a smile on your face.');
  scene.text('"You are a straight up sex grenade, and I would like to pull your pin." one of the guys answers. With these words, they come over to you.');
  if (((s as any).rex_love ?? 0) === 1) {
    scene.text('Rex looks unhappily in your direction, his eyes flashing with anger and jealousy.');
  }
  if (((s as any).rex_love ?? 0) === 1) {
    // TODO-QSP: act 'Drag Rex to the restroom': gt 'rex_party_sexEvents', 'rex_toilet_bj'
  }
  qspCall(s, 'arousal', 'flash', 5, 'exhibitionism');
  qspCall(s, 'stat', '');
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Move closer', goto: ['rex_party_sexEvents', 'boobs_yes'] },
  ]);
  scene.build();
}

function enterKitchenBoyDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer');
  (s as any).party_boys_drink = ((s as any).party_boys_drink ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_2_${Math.floor(Math.random() * 4) + 1}.jpg`);
  (s as any).i = Math.floor(Math.random() * 6) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: ');
    scene.text('"Girl, sorry, and you will not have to have sex?"');
    scene.text('"Oh, sorry, I threw…"');
    scene.text('"Congratulations."');
  } else {
    if (((s as any).i ?? 0) === 2) {
      scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: "When I was a child my parents forbade me all the fun things. Now I\'m grown up and my girl doesn\'t allow me to do them."');
    } else {
      if (((s as any).i ?? 0) === 3) {
        scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: "Previously, it was clear. Did the lessons - good, grandmother moved across the street - clever, the ball broke the glass - bad. And now - one girl did well, and the other from this - bad. And you all did everything for the third. And she - still!');
      } else {
        if (((s as any).i ?? 0) === 4) {
          scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: "Girls always say: Well all, until the evening, Smack! - Well, what, on dick, Smack? Do you want to kiss - a kiss!');
        } else {
          if (((s as any).i ?? 0) === 5) {
            scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: ');
            // TODO-QSP: dynamic text: "Just listen, <<$pcs_nickname>>. When I tell a girl "Come to me", and she asks m...
            scene.text(`"Just listen, ${((s as any).pcs_nickname ?? 0)}. When I tell a girl "Come to me", and she asks me "To do what?" do I really have to explain it to her? After all, my house is not a bowling alley or a cinema."`);
            scene.text('"If I say: "I want to have sex. I definitely will have a sex. You can join in, or not. Afterwards you can stay, but it would be better if you leave", she won\'t come over."');
            scene.text('"But if I tell her something ridiculous like "Come back home with me, I have a fine collection of lute music of the 16th century" she will go for it. Girls are well aware what will happen when they come over but they want to have an excuse for it."');
          } else {
            if (((s as any).i ?? 0) === 6) {
              scene.text('You drink along with a crowd of boys. The men constantly guffaw as they tell stories: ');
              scene.text('So I\'m starting to have sex with this girl and she keeps complaining. It goes like this: ');
              scene.text('"The windows are open!"');
              scene.text('"Who cares?"');
              scene.text('"There will be mosquitoes everywhere!"');
              scene.text('"We\'ll turn off the lights."');
              scene.text('"But then the cockroaches come out!"');
            }
          }
        }
      }
    }
  }
  if (((s as any).party_boys_drink ?? 0) > 2) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_2_${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('"Guys, you poured too much into the glass. I\'m drunk already.", you say."');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, lets have another." with that, one of the guys puts ...
    scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}, lets have another." with that, one of the guys puts his arm around you and bares your breasts. The touchy guy is surprisingly nice and you are a little amused by this situation.`);
    if (((s as any).npc_rel ?? 0)?.['A57'] >= 50) {
      scene.text('You notice Rex in the room…');
      scene.actions([
        { label: 'Get Rex\'s attention', handler: (st: GameState) => {
    (s as any).Rex_save = ((s as any).Rex_save ?? 0) + (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_10.jpg');
    scene.text('You glance over to Rex. He seems ready to help you out of this awkward situation.');
    scene.text('He quickly exclaims, "Hey boys, are you insane? Take your hands off my fucking girl. One more time and I will kick your ass!"');
    scene.text('The guy takes his hands off of you, "Rex, bro, we were just having a bit of drunken fun. I\'m sorry, if I hurt your girl."');
    scene.text('Rex comes up to you and picks you up, "Come on, sweety. I\'ll make sure the other guys leave you alone. Lets go to another room."');
    scene.actions([
      { label: 'Go to the Rex\'s room', goto: ['rex_party_smallEvents', 'V_komnatu'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'drink', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break free of them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break free of them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_3.jpg');
    scene.text('You find the strength to break free of the grasping hands, shouting "Let me go, I don\'t want that. Get your filthy hands off me."');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>, we're just having fun. Just admit that you liked wh...
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}, we're just having fun. Just admit that you liked where this was going." the touchy guy responds.`);
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      { label: 'Have fun with them', goto: ['rex_party_smallEvents', 'smile'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Have fun with them', goto: ['rex_party_smallEvents', 'smile'] },
    ]);
  }
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSmile(s: GameState, scene: SceneBuilder): void {
  (s as any).party_boys_in = ((s as any).party_boys_in ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_4_${Math.floor(Math.random() * 3) + 1}.jpg`);
  scene.text('You give the guys a faint smile, showing your availability. They quickly realize the situation and come over to you and start to stroke your hair and massage your neck. It is very relaxing and you give a soft sigh which turns into a moan. You have the full attention of the boys and they decide to drag you.');
  scene.actions([
    { label: 'Go outside Rex\'s house', goto: ['rex_party_sexEvents', 'gangbang_outdoor'] },
    { label: 'Go to another room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['rex_party_smallEvents', 'V_komnatu'] },
  ]);
  scene.build();
}

function enterVKomnatu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).i = Math.floor(Math.random() * 5) + 1;
  if (((s as any).i ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_5_1.jpg');
    scene.text('One of the girls is sitting in the room trying to recover from the exhausting party.');
    if (((s as any).Rex_save ?? 0) === 1) {
      scene.text('Rex bursts into the room with you in tow, throws everyone out and shuts the door. He gently puts you on a soft bed and lies down on the floor near you.');
    }
    if (((s as any).party_boys_in ?? 0) >= 1) {
      scene.text('Several guys switch their attention to her, but are quickly rebuffed. The girl looks at you curiously as the guys unceremoniously put you on your knees and unzip their pants. Even in your drunken delirium you know what they want.');
    }
  } else {
    if (((s as any).i ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_5_2.jpg');
      scene.text('One of the girls is sitting in the room trying to recover from the exhausting party.');
      if (((s as any).Rex_save ?? 0) === 1) {
        scene.text('Rex bursts into the room with you in tow, throws everyone out and shuts the door. He gently puts you on a soft bed and lies down on the floor near you.');
      }
      if (((s as any).party_boys_in ?? 0) >= 1) {
        scene.text('Anticipating what will happen next, she quickly dodges out of the room. The guys unceremoniously put you on your knees and unzip their pants. Even in your drunken delirium you know what they want.');
      }
    } else {
      if (((s as any).i ?? 0) === 3) {
        scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_5_${Math.floor(Math.random() * 2) + 3}.jpg`);
        scene.text('In the room your sister and Roma are engaged in sweaty sex.');
        if (((s as any).Rex_save ?? 0) === 1) {
          scene.text('Rex just glances at them and says, "Guys, I don\'t want you to stop, but you will have to continue in another place."');
        }
        scene.text('"Hey that\'s my sister Anya" you exclaim. "Let\'s just close the door and let them continue. They won\'t mind, right Anya?"');
        scene.text('Anya looks at you with a blissful smile, "No, I\'m all for it. We\'ll just keep fucking over here."');
        scene.text('"No you won\'t. You get your ass out of here already!" says Rex with a menacing expression on his face and the couple quickly leaves the room. He then gently puts you on a soft bed and lies down on the floor near you.');
        if (((s as any).party_boys_in ?? 0) >= 1) {
          scene.text('"Hey grandpa, do you need help?", one of the boys shouts.');
        }
        scene.text('Roma looks at them and says, "Shut up, you dumb fucks, you have your own bitch." The guys laugh a little and decide to leave the couple alone. Then they unceremoniously put you on your knees and unzip their pants. Even in your drunken delirium you know what they want.');
      } else {
        if (((s as any).i ?? 0) === 4) {
          scene.img('images/pc/body/cum/creampie/cumpussy11.jpg');
          scene.text('The room is occupied by Lena, who is lying on a bed flashing her pussy. You can see cum dripping out of it.');
          if (((s as any).Rex_save ?? 0) === 1) {
            scene.text('Rex bursts into the room with you in tow, throws everyone out and shuts the door. He gently puts you on a soft bed and lies down on the floor near you.');
          }
          if (((s as any).party_boys_in ?? 0) >= 1) {
            scene.text('"Hey look, there is another pretty girl. This seems to be our lucky night." one of the guys says.');
          }
          // TODO-QSP: dynamic text: Another one chimes in with a grin on his face, "Yeah, but she is already used an...
          scene.text(`Another one chimes in with a grin on his face, "Yeah, but she is already used and has cum on her. Our lovely little ${((s as any).pcs_nickname ?? 0)} here is fresh and clean." With that the guys unceremoniously put you on your knees and unzip their pants. Even in your drunken delirium you know what they want.`);
        } else {
          if (((s as any).i ?? 0) === 5) {
            scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_kuh_5_6.jpg');
            scene.text('However, the room you are dragged into is currently occupied by two guys fucking Lena.');
            if (((s as any).Rex_save ?? 0) === 1) {
              scene.text('Rex bursts into the room with you in tow, throws everyone out and shuts the door. He gently puts you on a soft bed and lies down on the floor near you.');
            }
            if (((s as any).party_boys_in ?? 0) >= 1) {
              scene.text('"Do you mind, guys?" one of the boy asks with a grin.');
            }
            scene.text('"No, sit. There is room enough for everyone!" one of the guys who is fucking Lena answers.  The boys then unceremoniously put you on your knees and unzip their pants. Even in your drunken delirium you know what they want.');
          }
        }
      }
    }
  }
  if (((s as any).Rex_save ?? 0) === 1) {
    // TODO-QSP: act 'Fall asleep': gt 'rex_party_smallEvents', 'sleep'
  }
  if (((s as any).party_boys_in ?? 0) >= 1) {
    // TODO-QSP: act 'Start to suck': gt 'rex_party_sexEvents', 'gangbang_indoor'
  }
  scene.build();
}

function enterTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).party_girls_talk = ((s as any).party_girls_talk ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: $talkEvent[1] = 'You sit and chat with a couple of cute girls. One of them tells you, "I am dating a...
  // TODO-QSP: $talkEvent[2] = 'You sit and chat with a couple of cute girls. One of them tells you, "I have a very...
  // TODO-QSP: $talkEvent[3] = 'You sit and chat with a couple of cute girls. One of them tells you, "I am dating t...
  // TODO-QSP: $talkEvent[4] = 'You sit and chat with a couple of cute girls. One of them tells you, "I came home a...
  // TODO-QSP: $talkEvent[5] = 'You sit and chat with a couple of cute girls. One of them says, "Blowjob week durin...
  // TODO-QSP: $talkEvent[6] = 'You sit and chat with a couple of cute girls. One of them tells you, "A friend of m...
  // TODO-QSP: $talkEvent[7] = 'You sit and chat with a couple of cute girls. One of them tells you, "I felt so bad...
  // TODO-QSP: $talkEvent[8] = 'You sit and chat with a couple of cute girls. One of them tells you, "After spendin...
  // TODO-QSP: $talkEvent[9] = 'You sit and chat with a couple of cute girls. One of them tells you, "I love when, ...
  // TODO-QSP: $talkEvent[10] = 'You sit and chat with a couple of cute girls. One of them tells you, "I like how m...
  // TODO-QSP: $talkEvent[11] = 'You sit and chat with a couple of cute girls. One of them tells you, "A year and a...
  // TODO-QSP: $talkEvent[12] = 'You sit and chat with a couple of cute girls. One of them tells you, "It really in...
  // TODO-QSP: $talkEvent[13] = 'You sit and chat with a couple of cute girls. One of them tells you, "The guys rea...
  // TODO-QSP: $talkEvent[14] = 'You sit and chat with a couple of cute girls. One of them tells you, "I love to pa...
  // TODO-QSP: $talkEvent[15] = 'You sit and chat with a couple of cute girls. One of them tells you, "Life becomes...
  // TODO-QSP: $talkEvent[16] = 'You sit and chat with a couple of cute girls. One of them tells you, "I met a guy ...
  // TODO-QSP: $talkEvent[17] = 'You sit and chat with a couple of cute girls. One of them tells you, "My childhood...
  // TODO-QSP: $talkEvent[18] = 'You sit and chat with a couple of cute girls. One of them tells you, "My former bo...
  (s as any).i = Math.floor(Math.random() * 18) + 1;
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_2_${((s as any).i ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <<$talkEvent[i]>>
  scene.text(`${((s as any).talkEvent ?? 0)?.[String((s as any).i ?? 0)]}`);
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSmoke(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!((s as any).girls_smoke ?? 0))) {
    (s as any).girls_smoke = 1;
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_3_1.jpg');
    scene.text('"Girls, look what I stole from my worthless, addicted brother.", one of the girls says, showing you two bags of marijuana. "So, do you want to keep staring at me, or do you want to have fun?"');
    qspCall(s, 'willpower', 'drugs', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    scene.actions([
      { label: 'Start smoking', goto: ['rex_party_smallEvents', 'smoke'] },
    ]);
  } else {
    (s as any).girls_smoke = ((s as any).girls_smoke ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'drugs', 'joint', 1);
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_3_${Math.floor(Math.random() * 5) + 2}.jpg`);
    scene.text('You pour some of the marijuana into the bowl, and fill water into the bong. Then you press a finger on the hole while using a lighter to burn the weed, drawing in smoke. After some time you begin to relax and embrace the mild euphoria.');
    scene.actions([
      { label: 'Chill', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_4_${Math.floor(Math.random() * 7) + 1}.jpg`);
    (s as any).i = Math.floor(Math.random() * 5) + 1;
    if (((s as any).i ?? 0) === 1) {
      scene.text('For a moment, you feel almost cut off from the outside world. Your body has found a general state of calm and relaxation. After a while the relaxing feeling goes away and you feel excitement wash over you.');
    } else {
      if (((s as any).i ?? 0) === 2) {
        // TODO-QSP: dynamic text: Almost instantly you feel an increased sensitivity to touch as well as an enhanc...
        scene.text(`Almost instantly you feel an increased sensitivity to touch as well as an enhanced vision, hearing and sense of smell. You hear the voices of others much clearer, see ${((s as any).pcs_nickname ?? 0)} much brighter and feel the whole range of odors.`);
      } else {
        if (((s as any).i ?? 0) === 3) {
          scene.text('When you feel the effect you lose all sense of time as if everything stands still. Everyone speaks and moves very slowly and it seems like minutes are stretched into hours…');
        } else {
          if (((s as any).i ?? 0) === 4) {
            scene.text('You feel like you can fly, entering a state of nirvana. You absorb the feeling of unreality. Your attention to details is greatly increased, nothing can escape your view.');
          } else {
            if (((s as any).i ?? 0) === 5) {
              scene.text('The smoke makes you feel good, letting you focus on positive emotions. You are able to feel all kinds of effects, happy, pleased, delighted, euphoric.');
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFun(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_5_${Math.floor(Math.random() * 6) + 1}.jpg`);
  scene.text('The weed affects you greatly. It improves your mood and you become wildly aroused. "Well girls, why don\'t we have some fun?"');
  qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.actions([
    { label: 'Rejoice', handler: (st: GameState) => {
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    (s as any).fun_rand = Math.floor(Math.random() * 3) + 1;
    if (((s as any).fun_rand ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_1_${Math.floor(Math.random() * 6) + 1}.jpg`);
      scene.text('You and the girls decide to have a contest for the best ass. You call over a couple of guys and stick out your butts for them to appraise. The drunk guys are all very impressed and it is difficult for them to settle on only one of the choices.');
      if (((s as any).rex_love ?? 0) === 1) {
        scene.text('You show off your ass right in front of Rex.');
      }
      scene.actions([
        { label: 'Shake your booty', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_1_${Math.floor(Math.random() * 5) + 7}.jpg`);
    // TODO-QSP: dynamic text: You seductively wag your ass. ' + iif(rex_love = 0, 'One boy', 'Rex') + ' is sta...
    scene.text('You seductively wag your ass. \' + iif(rex_love = 0, \'One boy\', \'Rex\') + \' is standing right in front of you and you firmly press your buttocks in his palms. He exclaims, "Boys, I think I already know the winner!" You win the competition easily.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).fun_rand ?? 0) === 2) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_${Math.floor(Math.random() * 5) + 1}.jpg`);
        scene.text('You become very curious and tell they girls it would be fun to compare your boobs. They agree and you all lift your shirts and look at each other\'s breasts, estimating the size and shape, complimenting each other\'s boobs.');
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_6_${Math.floor(Math.random() * 5) + 1}.jpg`);
      scene.text('You enthusiastically examine each other\'s breasts, when a couple of guys burst into the room. You decide that the guys should evaluate your boobs with their hands and call them closer.');
      // TODO-QSP: iif(rex_love = 0, 'The guys have fun touching your boobs.', 'Rex is right in front of you and gently...
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      scene.actions([
        { label: 'Moan', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_6_${Math.floor(Math.random() * 2) + 6}.mp4`);
    // TODO-QSP: dynamic text: Getting touched by ' + iif(rex_love = 0, 'one of the guys', 'Rex') + ' you can't...
    scene.text('Getting touched by \' + iif(rex_love = 0, \'one of the guys\', \'Rex\') + \' you can\'t help but to start moaning. When \' + iif(rex_love = 0, \'the guy\', \'Rex\') + \' notices he begins to caress you even more insistently, grabbing your breasts firmly and licking your nipples. "Hey baby, if you like it so much, maybe we should go further."  Then \' + iif(rex_love = 0, \'the guy\', \'Rex\') + \' grabs you by the waist…');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Surrender', handler: (st: GameState) => {
    if ((!((s as any).rex_love ?? 0))) {
      qspCall(s, 'npcgeneratec', '', 0, 'Boy from Rex\'s Party', 17);
      qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    } else {
      (s as any).sexa = ((s as any).sexa ?? 0) + (1);
      if ((!((s as any).rexSex ?? 0))) {
        (s as any).rexSex = 1;
      }
      qspCall(s, 'boyStat', 'A57');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_6_8.jpg');
    // TODO-QSP: dynamic text: He pulls your clothes off and then lays down on his back on the floor, pulling h...
    scene.text(`He pulls your clothes off and then lays down on his back on the floor, pulling his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock out. You climb on him straddling him, you lower yourself onto his cock, feeling it slip inside of your wet pussy, working your way down till he is completely inside of you, as deep as you can take him.`);
    // TODO-QSP: dynamic text: The two of you begin to rhythmically fuck in front of the others. The girls chee...
    scene.text(`The two of you begin to rhythmically fuck in front of the others. The girls cheer you on fervently, filming everything on their phones. "Come on ${((s as any).pcs_nickname ?? 0)}, move your ass faster." You feel his hard member inside of you, and soon realize that he is about to come.`);
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    scene.actions([
      { label: 'Let him come on you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_6_9.jpg');
    // TODO-QSP: iif(rex_love = 0, 'The guy', 'Rex') + ' quickly pulls his dick out of you and pushes you off him. He...
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'cuni', 15, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    (s as any).cumspclnt = 14;
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Move faster', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_6_9.jpg');
    // TODO-QSP: iif(rex_love = 0, 'The guy', 'Rex') + ' you move faster as he requests, and you push him over the to...
    qspCall(s, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_manage', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_7_${Math.floor(Math.random() * 5) + 1}.jpg`);
      scene.text('You are having fun and get very excited. One of the girls, can\'t resist and starts to lick your erect nipples, gently sucking on them and teasing them with her tongue. You enjoy it.');
      qspCall(s, 'willpower', 'cuni', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
      if (((s as any).pcs_horny ?? 0) > 50) {
        scene.actions([
          { label: 'Moan', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_7_6.jpg');
      scene.text('You can\'t help but start to moan and the girls quickly spread you legs an begin to lick your holes in unison. You quickly come from the sensation of having every hole licked and caressed.');
      qspCall(s, 'arousal', 'rimming', (-10), 'exhibitionism', 'lesbian');
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_7_7.jpg');
      scene.text('You start to moan and the girls quickly lay you down on your back an start to caress you with their tongues. They take turns kissing you and licking your pussy, quickly bringing you to orgasm.');
    }
    qspCall(s, 'arousal', 'cuni', 10, 'exhibitionism', 'lesbian', 'no_orgasm_msg');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
    }
  } },
        ]);
      } else {
        if (((s as any).fun_rand ?? 0) === 3) {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_8_${Math.floor(Math.random() * 2) + 2}.jpg`);
          scene.text('You call in the guys and announce that you and the girls want to check out the contents of their pants. Excitedly they unzip their pants and pull out their dicks.');
          // TODO-QSP: iif(reksMeet = 1, 'You have Rex'' member in front of you and compare it with your arm.', 'One of the...
          qspCall(s, 'willpower', 'bj', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Move away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          }
          scene.actions([
            { label: 'Suck him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 5);
    if (((s as any).rex_love ?? 0) === 1) {
      (s as any).bja = ((s as any).bja ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_8_4.jpg');
      // TODO-QSP: dynamic text: Strong desire clouds your mind, and you grab ' + iif(rex_love = 0, 'the guy's', ...
      scene.text('Strong desire clouds your mind, and you grab \' + iif(rex_love = 0, \'the guy\'s\', \'Rex\'s\') + \' member in full view of all the girls. You gently masturbate it with your hand, then take it in your mouth and begin to suck on its head.');
      // TODO-QSP: iif(rex_love = 0, 'The guy', 'Rex') + ' can''t resist for long and starts…'
    } else {
      scene.img('images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_8_5.jpg');
      // TODO-QSP: dynamic text: One of the girls takes the dick in front of her in her mouth. Feeling encouraged...
      scene.text('One of the girls takes the dick in front of her in her mouth. Feeling encouraged you take \' + iif(rex_love = 0, \'the guy\'s\', \'Rex\'s\') + \' dick and gently masturbate it with your hand. Soon you put it in your mouth and begin to suck on its head, watching the other girl giving head at the same time.');
      // TODO-QSP: iif(rex_love = 0, 'The guy', 'Rex') + ' can''t resist for long and starts…'
    }
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).spafinloc = 12;
    qspCall(s, 'cum_manage', '');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    qspCall(s, 'arousal', 'end');
    scene.img(`images/locations/pavlovsk/resident/rekshome/party/reksparty_party_home_fun_2_8_${Math.floor(Math.random() * 7) + 6}.jpg`);
    scene.text('You open your mouth and stick out your tongue.');
    // TODO-QSP: iif(rex_love = 0,'The guy', 'Rex') + ' cums hard, filling up your mouth and smearing sperm all over ...
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
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
    case 'lena':
      enterLena(s, scene);
      break;
    case 'ira':
      enterIra(s, scene);
      break;
    case 'ira_lena_livingRoom':
      enterIraLenaLivingRoom(s, scene);
      break;
    case 'rex':
      enterRex(s, scene);
      break;
    case 'rex_talk':
      enterRexTalk(s, scene);
      break;
    case 'rex_hug':
      enterRexHug(s, scene);
      break;
    case 'rex_dance':
      enterRexDance(s, scene);
      break;
    case 'roma':
      enterRoma(s, scene);
      break;
    case 'anya':
      enterAnya(s, scene);
      break;
    case 'sister_talk':
      enterSisterTalk(s, scene);
      break;
    case 'sister_drink':
      enterSisterDrink(s, scene);
      break;
    case 'dj':
      enterDj(s, scene);
      break;
    case 'dj_take_beer':
      enterDjTakeBeer(s, scene);
      break;
    case 'dj_give_beer':
      enterDjGiveBeer(s, scene);
      break;
    case 'dj_thank':
      enterDjThank(s, scene);
      break;
    case 'party_girls':
      enterPartyGirls(s, scene);
      break;
    case 'party_girls_drink':
      enterPartyGirlsDrink(s, scene);
      break;
    case 'bra':
      enterBra(s, scene);
      break;
    case 'party_girls_dance':
      enterPartyGirlsDance(s, scene);
      break;
    case 'party_boys':
      enterPartyBoys(s, scene);
      break;
    case 'gost_drink':
      enterGostDrink(s, scene);
      break;
    case 'show_boobs':
      enterShowBoobs(s, scene);
      break;
    case 'kitchen_boy_drink':
      enterKitchenBoyDrink(s, scene);
      break;
    case 'smile':
      enterSmile(s, scene);
      break;
    case 'V_komnatu':
      enterVKomnatu(s, scene);
      break;
    case 'talk':
      enterTalk(s, scene);
      break;
    case 'smoke':
      enterSmoke(s, scene);
      break;
    case 'fun':
      enterFun(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const rex_party_smallEvents: LocationDef = {
  name: 'rex_party_smallEvents',
  title: 'Lena',
  region: 'other',
  enter: enter,
};
