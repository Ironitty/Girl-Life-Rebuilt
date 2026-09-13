import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEmpty(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your walk', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 21) {
    scene.text('Hidden by a tree\'s shadow, you notice a man standing there, he watches you and when you look back at him he shouts "Whore!" at you.');
    return;
    scene.actions([
      { label: 'Silently leave', goto: ['city_park', 'start'] },
      { label: 'Tell him to shut up', handler: (st: GameState) => {
    scene.text('"Shut your trap, jackass." You\'re surprised when you see him quickly running away.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).suchunt ?? 0) === 1) {
      scene.text('From the shadow of the tree, a guy walks out…');
      scene.text('He comes up to you, grabs you, and, through gritted teeth says, "Com\'ear Bitch", dragging you into the bushes.');
      scene.text('He never notices your little smile as you anticipate the meal to come.');
      (s as any).suchunt = 0;
      (s as any).scfwon = 1;
      (s as any).suchuntday = ((s as any).daystart ?? 0);
      scene.actions([
        { label: 'Continue', goto: ['succubus', 'RapistFight'] },
      ]);
    } else {
      scene.text('From the shadow of the tree, a guy walks out…');
      scene.text('He comes up to you, grabs you, and, through gritted teeth says, "Com\'ear Bitch", dragging you into the bushes.');
      qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      if (((s as any).succubusQW ?? 0) === 14) {
        scene.actions([
          { label: 'Lure him in and feed (this can take a lot of time)', handler: (st: GameState) => {
    scene.text('You wait until he has dragged you almost to the bushes before turning on him.');
    scene.actions([
      { label: 'Continue', goto: ['succubus', 'RapistFight'] },
    ]);
  } },
        ]);
      }
      return;
      scene.actions([
        { label: 'Fight him', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'rapist');
  }, goto: ['fight', 'start'] },
        { label: 'Try to run away', handler: (st: GameState) => {
    if (((s as any).pcs_run ?? 0) < 10) {
      (s as any).peshimraperand = Math.floor(Math.random() * 12) + 0;
    } else {
      if (((s as any).pcs_run ?? 0) < 30) {
        (s as any).peshimraperand = Math.floor(Math.random() * 21) + 0;
      } else {
        if (((s as any).pcs_run ?? 0) < 50) {
          (s as any).peshimraperand = Math.floor(Math.random() * 31) + 0;
        } else {
          if (((s as any).pcs_run ?? 0) < 70) {
            (s as any).peshimraperand = Math.floor(Math.random() * 41) + 0;
          } else {
            if (((s as any).pcs_run ?? 0) < 90) {
              (s as any).peshimraperand = Math.floor(Math.random() * 51) + 0;
            } else {
              if (((s as any).pcs_run ?? 0) < 110) {
                (s as any).peshimraperand = Math.floor(Math.random() * 61) + 0;
              } else {
                if (((s as any).pcs_run ?? 0) < 130) {
                  (s as any).peshimraperand = Math.floor(Math.random() * 71) + 0;
                } else {
                  if (((s as any).pcs_run ?? 0) < 150) {
                    (s as any).peshimraperand = Math.floor(Math.random() * 81) + 0;
                  } else {
                    if (((s as any).pcs_run ?? 0) < 170) {
                      (s as any).peshimraperand = Math.floor(Math.random() * 91) + 0;
                    } else {
                      (s as any).peshimraperand = 11;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).peshimraperand ?? 0) <= 10) {
      scene.text('You try to run away, but you\'re not quick enough and he catches you. He drags you back into the bushes.');
      if (qspFunc(s, 'succubus', 'active', 4)) {
        scene.actions([
          { label: 'Continue', goto: ['succubus', 'RapistFight'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['city_park', 'rape1'] },
        ]);
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      scene.text('You rush through the park, not caring where you\'re going. You\'re just trying to get the hell away from him. After almost running for an hour, you finally catch your breath and the rapist is nowhere to be seen.');
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    (s as any).locbegrand = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).locbegrand ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
    }
    if (((s as any).locbegrand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 3) {
      scene.actions([{ label: 'Continue', goto: ['city_industrial', ''] }]);
    }
    if (((s as any).locbegrand ?? 0) === 4) {
      scene.actions([{ label: 'Continue', goto: ['city_lake', 'start'] }]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsexFX', '');
  if (((s as any).pcs_apprnc ?? 0) >= 120  &&  ((s as any).parkday ?? 0) === ((s as any).daystart ?? 0)) {
    scene.text('You see a man sitting under a tree drinking beer. It\'s the guy who fucked you here in the park a while ago. He looks at you and his sudden grin tells you that he remembers who you are.');
    return;
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } else {
    if (((s as any).pcs_apprnc ?? 0) >= 120  &&  ((s as any).parkday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).parkslut ?? 0) > 0) {
      scene.text('From the bench under one of the trees a guy comes up to you. It\'s the guy who fucked you here in the park a while back. He smiles and asks you "Hello again beautiful girl, do you mind if we do it once again?"');
      return;
      scene.actions([
        { label: 'Walk away', goto: ['city_park', 'start'] },
        { label: '"I don\'t mind it all"', handler: (st: GameState) => {
    scene.text('The guy laughs "Unfortunately, I doubt it\'ll be as much fun as the first time, but why don\'t you bend over this bench right here?"');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not this time, I\'m afraid [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '"Not this time, I\'m afraid" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Bend over the bench', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 500);
    qspCall(s, 'npcStat', 'A121');
    (s as any).parkday = ((s as any).daystart ?? 0);
    (s as any).picrand = Math.floor(Math.random() * 6) + 1;
    scene.img(`images/locations/shared/park/sex/bench/dogging${((s as any).picrand ?? 0)}.jpg`);
    scene.text('The man pushes you over the backrest of the bench and pushes his cock into your pussy. He slowly begins to thrust in and out of you.');
    qspCall(s, 'cum_call', '', '', 'Guy from the park');
    qspCall(s, 'arousal', 'vaginal', 20, 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).pcs_apprnc ?? 0) >= 120  &&  ((s as any).parkday ?? 0) !== ((s as any).daystart ?? 0)  &&  (!((s as any).parkslut ?? 0))) {
        // TODO-QSP: dynamic text: A man appears from the shadows and approaches you, "Good evening beautiful lady,...
        scene.text(`A man appears from the shadows and approaches you, "Good evening beautiful lady, would you like to earn ${qspFunc(s, 'money', 'string_profit', 2000)}?" he asks you.`);
        return;
        scene.actions([
          { label: 'Ask him how to do it', handler: (st: GameState) => {
    scene.text('"What do I have to do?", you ask. He smiles, "Let us go over there." and points over to the bench in a somewhat secluded part of the park.');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fuck off, asshole [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fuck off, asshole [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Follow him', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 2000);
    qspCall(s, 'npcStat', 'A121');
    (s as any).parkday = ((s as any).daystart ?? 0);
    if ((!((s as any).parkslut ?? 0))) {
      (s as any).parkslut = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    (s as any).picrand = Math.floor(Math.random() * 6) + 1;
    scene.img(`images/locations/shared/park/sex/bench/dogging${((s as any).picrand ?? 0)}.jpg`);
    scene.text('The man pushes you over the backrest of the bench and pushes his cock into your pussy. He slowly begins to thrust in and out of you.');
    qspCall(s, 'cum_call', '', '', 'Guy from the park');
    qspCall(s, 'arousal', 'vaginal', 20, 'prostitution');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } },
          { label: 'Leave', goto: ['city_park', 'start'] },
        ]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('As you walk through the park, you hear moans and groans coming out of the bush close to one of the paths.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue walking', goto: ['city_park', 'start'] },
    { label: 'Peek', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/shfoto.jpg');
    scene.text('You take a peek through the bushes and see three guys fucking one woman. It seems like she\'s really enjoying it.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.actions([
        { label: 'Pry', handler: (st: GameState) => {
    scene.text('You hide behind a tree to get a better look at the group action.');
    qspCall(s, 'arousal', 'voyeur_sex', 10);
    qspCall(s, 'arousal', 'end');
    if (((s as any).pcs_horny ?? 0) >= 75) {
      scene.text('This sight really excites you and you can feel your pussy moisten.');
    } else {
      scene.text('While this is quite the sight to enjoy, you think it\'s better not to get caught, so you silently move away.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['tech_hidden_cam'] === 1  ||  ((s as any).mc_inventory ?? 0)?.['tech_camera'] === 1) {
      scene.actions([
        { label: 'Take a photo', handler: (st: GameState) => {
    qspCall(s, 'exp_gain', 'photoskl', 2);
    if (((s as any).mc_inventory ?? 0)?.['tech_hidden_cam'] === 1) {
      (s as any).fotoparkrand = Math.floor(Math.random() * 11) + 0;
    }
    if (((s as any).mc_inventory ?? 0)?.['tech_hidden_cam'] === 0) {
      (s as any).fotoparkrand = Math.floor(Math.random() * 2) + 0;
    }
    if (((s as any).fotoparkrand ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).shantfoto = ((s as any).shantfoto ?? 0) + (1);
      scene.text('As you hide behind a tree, you start to take photos of them and watch them until they\'re done. Once they are you silently move away and decide to find out who she was. Blackmailing her would be a nice source of income, you think to yourself.');
      scene.actions([
        { label: 'Back to the park', goto: ['city_park', 'start'] },
      ]);
    }
    if ((!((s as any).fotoparkrand ?? 0))) {
      scene.text('You hide behind the tree and start taking pictures. Somehow you get carried away and one of the perpetrators noticed you. He slowly walks up behind you, grabs you and takes you to the others.');
      scene.text('"Look what I\'ve found. We\'ve got ourselves a new volunteer." says the guy while holding you tightly.');
      qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
      qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '1');
      qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
      qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), '2');
      scene.actions([
        { label: 'Try to talk your way out', handler: (st: GameState) => {
    scene.text('You try to talk your way out, but they just laugh at you, pitying you for even trying. Then one of the guys forces you onto your knees as they prepare to rape you.');
    if (((s as any).mc_inventory ?? 0)?.['tech_hidden_cam'] === 1) {
      if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['tech_hidden_cam'] = 0;
      scene.text('One of the other guys takes your camera and smashes it against a rock');
    } else {
      scene.text('One of the other guys takes your camera and smashes it against a rock');
      if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['tech_camera'] = 0;
    }
    scene.actions([
      { label: 'Further', goto: ['paysex', 'start'] },
    ]);
  } },
        { label: 'Try to run away', handler: (st: GameState) => {
    if (((s as any).pcs_run ?? 0) < 10) {
      (s as any).peshimraperand = Math.floor(Math.random() * 12) + 0;
    } else {
      if (((s as any).pcs_run ?? 0) < 30) {
        (s as any).peshimraperand = Math.floor(Math.random() * 21) + 0;
      } else {
        if (((s as any).pcs_run ?? 0) < 50) {
          (s as any).peshimraperand = Math.floor(Math.random() * 31) + 0;
        } else {
          if (((s as any).pcs_run ?? 0) < 70) {
            (s as any).peshimraperand = Math.floor(Math.random() * 41) + 0;
          } else {
            if (((s as any).pcs_run ?? 0) < 90) {
              (s as any).peshimraperand = Math.floor(Math.random() * 51) + 0;
            } else {
              if (((s as any).pcs_run ?? 0) < 110) {
                (s as any).peshimraperand = Math.floor(Math.random() * 61) + 0;
              } else {
                if (((s as any).pcs_run ?? 0) < 130) {
                  (s as any).peshimraperand = Math.floor(Math.random() * 71) + 0;
                } else {
                  if (((s as any).pcs_run ?? 0) < 150) {
                    (s as any).peshimraperand = Math.floor(Math.random() * 81) + 0;
                  } else {
                    if (((s as any).pcs_run ?? 0) < 170) {
                      (s as any).peshimraperand = Math.floor(Math.random() * 91) + 0;
                    } else {
                      (s as any).peshimraperand = Math.floor(Math.random() * 101) + 0;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).peshimraperand ?? 0) < 11) {
      if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
      (s as any).guy = ((s as any).guy ?? 0) + (3);
      scene.text('You try to run away, but you\'re not fast enough and one of them eventually catches up with you. He drags you back into the bushes and forces you onto your knees, preparing to rape you.');
      if (((s as any).mc_inventory ?? 0)?.['tech_hidden_cam'] === 1) {
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['tech_hidden_cam'] = 0;
        scene.text('The other guys soon catch up, and one of them takes your camera and smashes it against a rock');
      } else {
        scene.text('The other guys soon catch up, and one of them takes your camera and smashes it against a rock');
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['tech_camera'] = 0;
      }
      scene.actions([
        { label: 'Further', goto: ['paysex', 'start'] },
      ]);
    } else {
      if (((s as any).peshimraperand ?? 0) > 10) {
        scene.text('You rush through the park, not caring where you\'re going. You\'re just trying to get the hell away from him. After almost an hour of running, you finally stop to catch your breath. Your would-be rapists are nowhere to be seen.');
        (s as any).locbegrand = Math.floor(Math.random() * 5) + 0;
        if ((!((s as any).locbegrand ?? 0))) {
          scene.actions([
            { label: 'Take a look around to see where you are', goto: ['city_park', 'start'] },
          ]);
        } else {
          if (((s as any).locbegrand ?? 0) === 1) {
            scene.actions([
              { label: 'Take a look around to see where you are', goto: ['city_residential', ''] },
            ]);
          } else {
            if (((s as any).locbegrand ?? 0) === 2) {
              scene.actions([
                { label: 'Take a look around to see where you are', goto: ['city_center', ''] },
              ]);
            } else {
              if (((s as any).locbegrand ?? 0) === 3) {
                scene.actions([
                  { label: 'Take a look around to see where you are', goto: ['city_industrial', ''] },
                ]);
              } else {
                if (((s as any).locbegrand ?? 0) === 4) {
                  scene.actions([
                    { label: 'Take a look around to see where you are', goto: ['city_lake', 'start'] },
                  ]);
                }
              }
            }
          }
        }
      }
    }
  } },
      ]);
    }
  } },
        { label: 'Back to the park', goto: ['city_park', 'start'] },
      ]);
    }
    return;
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).parkblackmail ?? 0))) {
    scene.text('On one of the parks open grass area, you see a group of young people enjoying a barbecue. As you walk past them, one of the guys comes up to you and asks if you would like to join them.');
    return;
    scene.actions([
      { label: 'Decline and continue your walk', goto: ['city_park', 'start'] },
      { label: 'Agree and join them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    qspCall(s, 'stat', '');
    scene.text('You had fun drinking with the guys and girls. One of the guys comes up behind you while you\'re at the table and puts his arms around your waist, then presses himself against your ass. <i>…God, he\'s HUGE. It feels like a big sausage against your lower back… damn, why do I suddenly feel so hot.</i> You begin to wonder if you\'ve been drinking too fast.');
    scene.text('Shortly after, one of the guy gropes your breast and pushes you against the closest tree. You softly moan as he massages your breasts. You can feel his stiff cock poking your belly. Then he asks you in a rather harsh tone, "You like this slut, don\'t you?"');
    scene.actions([
      { label: 'Tell him to get away', handler: (st: GameState) => {
    scene.text('You sharply tell him to let you go. Surprised, he takes a step back, and you move away from the tree.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text('You turn to leave, but the guy quickly catches up to you. He grabs your ass, spins you around to face him, and orders "On your knees, quickly, bitch!"');
    qspCall(s, 'willpower', 'rape', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Kick him in the his nuts and walk away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Kick him in the his nuts and walk away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Do as he tells you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/parkbj.jpg');
    scene.text('Too drunk to resist further, you quickly do as he says. He drops his pants to his knees and abruptly thrusts his big dick into your mouth. You quickly forget about everything else and start hungrily sucking him off. His big, juicy, fragrant cock is driving you mad. He gathers your hair behind your head to make sure it doesn\'t get in the way. After a little while he pulls his delicious cock out of your mouth, but it\'s immediately replaced by a guy you didn\'t even notice approach.');
    scene.text('His cock is so big, you can barely breath and are on the verge of fainting. More men gather around you and take out their cocks for you to suck on. They call you many names, but \'Slut\' burns itself into your memory, so often it\'s used. You suck them off one by one, giving two other cocks a hand job. You try to swallow as much cum as possible, maybe it\'s due to you being drunk, but the taste is just overwhelming to you. One of them removes your top, so everyone can enjoy the sight of your beautiful breasts.');
    scene.text('His cock even bigger than the last guy\'s, and the excitement it gives you is almost overpowering. The other guys gather around and hurl insults at you, mocking you for sucking strangers. You suck each of them off too, one by one, while stroking others, a cock in each hand. Every guy you blow cums in your mouth, and you swallow every time. Someone pulls down your top, letting your boobs spill out. You feel a cock slap against your chest as someone takes the opportunity to give himself a titfuck.');
    scene.text('"Fuck, slut, suck faster!" orders one of the guys.');
    (s as any).i = 0;
    // TODO-QSP: :park_blowbang
    qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 5) + 19);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub', 'humiliation', 'deepthroat', 'rape');
    qspCall(s, 'arousal', 'hj', (-10), 'gangbang', 'sub', 'humiliation', 'rape');
    qspCall(s, 'arousal', 'titjob', (-10), 'gangbang', 'sub', 'humiliation', 'rape');
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < 6) {
      // TODO-QSP: jump 'park_blowbang'
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: '"Guys, be quieter… someone might hear"', handler: (st: GameState) => {
    scene.text('"Guys, be quieter… someone might hear," you try to warn them while coughing.');
    scene.text('One the guys bitch-slaps you, "Shut up slut. You\'re not here to talk."');
    scene.text('"Stop talking and work your mouth, bitch. You\'re here to suck, not to lecture us." another one adds.');
    qspCall(s, 'pain', '', 5, 'cheeks', 'slap');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Okay', handler: (st: GameState) => {
    if ((!((s as any).parkblackmail ?? 0))) {
      (s as any).guy = ((s as any).guy ?? 0) + (2);
      (s as any).parkblackmail = 1;
      (s as any).parkday = ((s as any).daystart ?? 0);
    }
    scene.text('"Okay, boys," you say around the cock in your mouth.');
    scene.text('You drunkenly wonder why they insist on talking so loud. But when you open your eyes, you see two of the girls from the group with a camera.');
    scene.text('With a growl, the guy fucking your chest finally comes - and comes a lot. Your breasts are completely coated with semen. You start to feel an overpowering need to make the guy currently in your mouth cum as well. You put your hands on his ass and pull him toward you, forcing his cock down your own throat, forgetting about the cameras and onlookers. You feel like an insatiable whore as you deepthroat him, swallowing his large head as far as you can manage.');
    scene.text('The second guy took you by the hair as roughly started to face fuck you. He grabs your hair, calling you "whore" and a "cocksucker" as he forced your head deeper his cock, and at the last second roughly jerks your head backwards to cum all over your face. He covers you with an incredible amount of sperm.');
    scene.text('That you were ashamed goes without saying, you just swallowed six strangers\' cum and took two others\' loads all over you.');
    (s as any).i = 0;
    // TODO-QSP: :park_blowbang2
    qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 5) + 19);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'bj', 3, 'gangbang', 'sub', 'humiliation', 'deepthroat');
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < 6) {
      // TODO-QSP: jump 'park_blowbang2'
    }
    qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 5) + 19);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'stranger', Math.floor(Math.random() * 5) + 19);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'titjob', 2, 'gangbang', 'sub', 'humiliation');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go home', goto: ['city_park', 'start'] },
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
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).yaq ?? 0) === 0  &&  qspFunc(s, 'uniutil', 'student', 'enrolled')) {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.text('As you\'re walking and pondering, a man walks up to you. He introduces himself as Yaroslav and asks if you would like to earn some money.');
    return;
    scene.actions([
      { label: '"No, thanks"', goto: ['city_park', 'start'] },
      { label: '"I\'m listening"', handler: (st: GameState) => {
    scene.text('"My house is a bit dirty and I\'m looking for someone who would like to keep it clean for me," he says. "All you have to do is to dust and clean everything. My house isn\'t too big so it should be quite manageable."');
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Turn him down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Turn him down [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Alright, but what\'s in for me?" you ask him.');
    // TODO-QSP: dynamic text: "I'd pay you <<$func('money', 'string_profit', 2000)>>," he answers. "By the way...
    scene.text(`"I'd pay you ${qspFunc(s, 'money', 'string_profit', 2000)}," he answers. "By the way, I haven't asked you for your name yet."`);
    // TODO-QSP: dynamic text: "I'm <<$pcs_nickname>>.", you tell him.
    scene.text(`"I'm ${((s as any).pcs_nickname ?? 0)}.", you tell him.`);
    scene.text('He nods, smiles, and tells you it\'s a cute name. Then he gives you his card and judging by the address, it\'s somewhere in the city center.');
    scene.actions([
      { label: 'Ask him when to come by', handler: (st: GameState) => {
    (s as any).yaq = ((s as any).yaq ?? 0) + (1);
    scene.text('"When would you like me to come by?" you ask Yaroslav.');
    scene.text('"No hurry, just come by when you\'ve got some free time, but I\'m usually home in the evening, so there\'s just that." he answers.');
    scene.text('"Alright, thank you and see you soon I guess.", you say and walk away.');
    scene.actions([
      { label: 'Finish your walk', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your walk', goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!((s as any).ublyudokparkivent ?? 0))) {
    scene.text('As you were deep in your own thoughts, walking through the park, you\'ve strayed of the normal path, realizing you\'ve ended up in a somewhat shady area of it. Standing between two trees you notice a man waving at you.');
    return;
    scene.actions([
      { label: 'Walk away', goto: ['city_park', 'start'] },
      { label: 'Walk up to him', handler: (st: GameState) => {
    (s as any).ublyudokparkivent = 1;
    qspCall(s, 'pain', '', 8, 'head', 'hit');
    qspCall(s, 'stat', '');
    scene.text('You walk up to him, asking what he wants. He says, he would like to show you something. As you approach, and lean in he quickly hits you over the back head and everything fades to black.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'npcgeneratec', '', 0, 'Rapist', Math.floor(Math.random() * 23) + 18);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/sex/event/rape/1.jpg');
    scene.text('"Ouch…", you say groggily as you wake up.');
    scene.text('"I thought you would never wake up.", a deep voice says. He grabs you by the hair and pulls you up, then takes his huge knife and holds it to your face. "Look pretty, if you don\'t resist, this might be a pleasurable experience for you," he tells you, "Now take off your clothes, you won\'t need them for now."');
    scene.actions([
      { label: 'Take off your clothing', goto: ['park_walkevents', '6a'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter6a(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/centralpark/sex/event/rape/2.jpg');
  scene.text('He\'s huge and intimidating, you decide it\'s better to do as he tells you, so can get out of the situation alive, hence you take off your clothes and a cold breeze makes your nipples rock-hard immediately.');
  scene.text('The man is quite enjoying himself, licking his lips as he keeps on observing you taking off your clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Now what?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/sex/event/rape/3.jpg');
    scene.text('You shiver a bit as you stand in front of him, almost looking nonchalantly what now.');
    scene.text('"Good girl," he says and orders you to bend over. You oblige and present your bum to him. He then closely \'inspects\' it, by spreading your ass cheeks apart. You yelp when you feel his finger is entering your cunt.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Obey', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/sex/event/rape/4.jpg');
    scene.text('"The two of us are going to have a lot of fun together, so prepare yourself and make you tight little twat moist for me", he tells you and you begin to rub your clit. He unbuttoned his pants, took out his cock and started to stroke it, while listening to your soft moans.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go on…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/sex/event/rape/5.jpg');
    scene.text('Even though you hate to admit it, you feel quite turned on and start moaning louder.');
    scene.text('"Come over here and suck me,", he orders you, holding his rock-hard cock in his hand. The man grabbed you by the hair and throws you onto the ground in front of him.');
    scene.text('As you\'re laying on the ground he yells out, "Open your mouth slut!"');
    scene.text('As soon as you open the mouth, he grabs your head and began furiously thrusting his fat cock into your throat.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'humiliation', 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', goto: ['park_walkevents', '6b'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter6b(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/centralpark/sex/event/rape/6.jpg');
  scene.text('His odor is quiet strong and his cock smells quite foul and tastes slightly salty. You try your best to disconnect yourself from the foul taste but with every thrust you\'re reminded of it, making you feel nauseous, barely able to hold it in.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'humiliation', 'rough', 'rape');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stay focused', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/event/rape/7.jpg');
    scene.text('It doesn\'t take long before he presses himself down your throat, having you deepthroat his cock all the way down to his balls.');
    scene.text('You gag once he\'s all the way down, but he doesn\'t seem to care, and only lets out a chuckle as he hears you struggle.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'humiliation', 'rough', 'rape', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/event/rape/8.jpg');
    scene.text('All of a sudden he pulls out and your mouth makes a pop sound as his cock leaves your mouth.');
    scene.text('"You\'re quite the cocksucker, but I\'d rather use a different hole instead," he says as he shoves three of his fingers deep inside you. It\'s very painful, and as your pussy stretches, you scream from the pain.');
    qspCall(s, 'pain', '', 7, 'vaginal', 'stretch');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'humiliation', 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/event/rape/9.jpg');
    scene.text('"Too much? I thought whores like you could take it," he mocks you.');
    scene.text('You look pleadingly at him as he grabs you by the throat and tells you to masturbate by yourself. You start of gently touching yourself, while he turns his back to you and begins searching for something.');
    scene.text('You\'re too afraid to stop as he glances at you from time to time and it doesn\'t take long before you switch over to rubbing your clit as he returns with a rope.');
    qspCall(s, 'arousal', 'clit_finger', 5, 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/event/rape/10.jpg');
    scene.text('Worried, you continue playing with yourself while he ties you up, leaving only the hand you\'re masturbating with free. You keep on petting yourself for a while, letting him watch, until he tells you to stop and ties your last arm. "Hope you\'ve made yourself wet enough," he whispers.');
    scene.text('He smiles as he grabs his fat cock and pushes it into you. You try to twitch and kick, but as you\'re tied up you get nowhere. Without any hesitation he keeps thrusting himself into you as you continue trying to squirm.');
    qspCall(s, 'arousal', 'clit_finger', (-5), 'sub', 'humiliation');
    qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'humiliation', 'rough', 'rape');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop resisting', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/sex/event/rape/11.jpg');
    scene.text('For every thrust he goes deeper into you and with a violent thrust he reaches your cervix and you squeal as he smirks. He continues thrusting and by now you don\'t even know if you\'re enjoying yourself or if you\'re in pain.');
    scene.text('You keep on screaming but to no avail, he\'s pulled you deep into the woods and no one can hear your screams. Realizing this, you give up and let him have his way with you.');
    scene.text('He picks up his pace and after a while you can feel his cock swell. He abruptly shoves his cock deep into you and you feel a hot jet of sperm fill your vagina with a warm, slippery fluid.');
    qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough', 'humiliation', 'rape');
    qspCall(s, 'cum_call', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Did he just cum in me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/sex/event/rape/12.jpg');
    scene.text('He\'s smirking as he pulls out, "Wow… what a great fuck you were," he says between his panting.');
    scene.text('"Could you let me go now? You\'ve finished with what you wanted." you plead.');
    scene.text('He laughs, "Not yet my dear," he takes two fingers and shoves them into you again. You yelp as they enter and he begins to dig around a little. "Before I let you go I want you to taste me," he diabolically laughs.');
    scene.actions([
      { label: 'Lick his fingers', goto: ['park_walkevents', '6c'] },
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

function enter6c(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'lower', 'medium');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).spafinloc = 9;
  qspCall(s, 'cum_manage', '');
  scene.img('images/locations/city/centralpark/sex/event/rape/13.jpg');
  scene.text('He pulls out his fingers and you can feel the remainder of his sperm flowing down your thighs. He stands up and brings his cum covered fingers towards you, "Be a good slut and taste this." as he shoves his fingers into your mouth.');
  scene.text('Even his cum tastes quite foul and you try your best to cleaning his dirty fingers with your tongue as quickly as possible. You\'re forced to swallow the cum and you almost puke as you\'re doing it.');
  scene.text('After a while he removes his fingers and starts cutting the ropes. You\'ve finally been released and before he gets any other ideas you quickly get dressed and run away from him.');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the police station', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 31) + 30);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/alleynight.jpg');
    if (((s as any).region ?? 0) === 'pav') {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the train depot and the police station that resides next to it.');
      scene.actions([
        { label: 'Continue', goto: ['pav_station', 'rape_report'] },
      ]);
    } else {
      scene.text('You decide you need to file a report, in hopes that someone will catch the monster that did this to you. You slowly limp your way towards the city center and the police station that resides in it.');
      scene.actions([
        { label: 'Continue', goto: ['police_station', 'rape_report'] },
      ]);
    }
  } },
    { label: 'Don\'t go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/street/alleynight.jpg');
    scene.text('For a brief moment you consider telling the police what happened, but emotion wells up inside you and you\'re immediately filled with thoughts of disgust and shame. It doesn\'t make sense. It\'s not like you wanted this to happen. But still. The idea of sharing what happened to you, even to the police… You already feel filthy from what happened tonight. You don\'t want to feel even worse. The only thing you want is to go home.');
    scene.text('You slowly limp away, clutching your arms around your belly, trying your best to leave the events of tonight in the alley behind you…');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((!((s as any).pusher ?? 0))) {
    scene.text('A young boy wearing a hooded jacket walks up to you and tells you in a conspiratorial voice, "Hey girl, I\'ve got some cocaine, want to try it? Completely free, I promise. Lovely thing, instantly clears the brain, the mood goes bananas and your body feels as it\'s never been healthier. "');
    qspCall(s, 'willpower', 'drugs', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).pusher = 1;
    qspCall(s, 'drugs', 'cocaine', 1);
    scene.text('You\'ve never been interested and you\'ve never tried it before, but you\'re tempted as it\'s free. The opportunity is too good to pass on, so you nod your head and the dealer takes out a little bag filled with white powder. He spreads it on your hand and tells you to snort it.');
    scene.text('You nod and snort the white powder. It instantly hits you and you\'re feeling on top of the world.');
    // TODO-QSP: dynamic text: The guy looks at you and says, "Good shit, right? If you like it, come see me ag...
    scene.text(`The guy looks at you and says, "Good shit, right? If you like it, come see me again, it only costs ${qspFunc(s, 'money', 'string_price', 2000)}."`);
    return;
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 1201) + 0) <= ((s as any).pcs_apprnc ?? 0)  &&  ((s as any).cheatVars ?? 0)?.['random_lovers'] !== 1) {
    qspCall(s, 'npcgeneratec', '', 0, '', 'like');
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    // TODO-QSP: dynamic text: A guy with <<$npcheight_pref>>, <<$npcbuild>> body and <<$npchair>> hair approac...
    scene.text(`A guy with ${((s as any).npcheight_pref ?? 0)}, ${((s as any).npcbuild ?? 0)} body and ${((s as any).npchair ?? 0)} hair approaches you. He's wearing wearing ${((s as any).npcClo ?? 0)}.`);
    // TODO-QSP: dynamic text: The guy introduces himself as <<$npcdesc>> and asks for your number.
    scene.text(`The guy introduces himself as ${((s as any).npcdesc ?? 0)} and asks for your number.`);
    return;
    scene.actions([
      { label: 'Give him your number', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      qspCall(s, 'lover', 'add_boyfriend', ((s as any).npcID ?? 0));
    }
    (s as any).stopboy = 0;
    // TODO-QSP: dynamic text: <<$npcdesc>> writes it in his phone and walks away from you smiling.
    scene.text(`${((s as any).npcdesc ?? 0)} writes it in his phone and walks away from you smiling.`);
    scene.actions([
      { label: 'Finish your walk', goto: ['city_park', 'start'] },
    ]);
  } },
      { label: 'Leave', goto: ['city_park', 'start'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).temp_npcID ?? 0) === '') {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  qspCall(s, 'npcStat', '', ((s as any).temp_npcID ?? 0));
  // TODO-QSP: dynamic text: As you walk through the park, you notice <<$npcdesc>> walking towards you.
  scene.text(`As you walk through the park, you notice ${((s as any).npcdesc ?? 0)} walking towards you.`);
  if (((s as any).npc_had_sex ?? 0)?.[String((s as any).npcID ?? 0)] === 0  ||  (!((s as any).SUB ?? 0))) {
    scene.actions([
      { label: 'Nice to talk', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: dynamic text: <<$npcdesc>> is happy about meeting you randomly and gives you a big hug. You ha...
    scene.text(`${((s as any).npcdesc ?? 0)} is happy about meeting you randomly and gives you a big hug. You have a nice short talk and kiss goodbye as you part ways again.`);
    scene.actions([
      { label: 'Finish your walk', goto: ['city_park', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_had_sex ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).SUB ?? 0) > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is happy to see you, quickly grabbing you by the hand leading you i...
      scene.text(`${((s as any).npcdesc ?? 0)} is happy to see you, quickly grabbing you by the hand leading you into a more secluded area of the park.`);
      scene.actions([
        { label: 'Follow <<$npcdesc>>.', handler: (st: GameState) => {
    if (((s as any).npc_gender ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
      scene.actions([{ label: 'Continue', goto: ['event', 'city_park'] }]);
    }
    if (((s as any).npc_gender ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['parksvid', ''] }]);
    }
  } },
      ]);
    } else {
      if (((s as any).npc_had_sex ?? 0)?.[String((s as any).npcID ?? 0)]) {
        // TODO-QSP: dynamic text: <<$npcdesc>> is happy to see you, quickly grabbing you by the hand, wanting to l...
        scene.text(`${((s as any).npcdesc ?? 0)} is happy to see you, quickly grabbing you by the hand, wanting to lead you to a secluded area of the park.`);
        scene.actions([
          { label: 'Offer to sit on the bench', handler: (st: GameState) => {
    if (((s as any).npc_gender ?? 0)?.[String((s as any).boy ?? 0)] === 0) {
      scene.actions([{ label: 'Continue', goto: ['event', 'city_park'] }]);
    }
    if (((s as any).npc_gender ?? 0)?.[String((s as any).boy ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['parksvid', ''] }]);
    }
  } },
          { label: 'Nice talk', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 2);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: dynamic text: <<$npcdesc>> is happy about meeting you randomly and gives you a big hug. You ha...
    scene.text(`${((s as any).npcdesc ?? 0)} is happy about meeting you randomly and gives you a big hug. You have a nice short talk and kiss goodbye as you part ways again.`);
    scene.actions([
      { label: 'Finish your walk', goto: ['city_park', 'start'] },
    ]);
  } },
        ]);
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
  }, goto: ['city_park', 'start'] },
  ]);
  scene.build();
}

function enterRunningImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/pc/activities/exercises/running/park_jog1.jpg');
    } else {
      scene.img('images/pc/activities/exercises/running/park_jogn1.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/pc/activities/exercises/running/park_jog2.jpg');
    } else {
      scene.img('images/pc/activities/exercises/running/park_jogn2.jpg');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRunCooldownImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/pc/activities/exercises/running/park_jog_cool1.jpg');
    } else {
      scene.img('images/pc/activities/exercises/running/park_jog_cooln1.jpg');
    }
  } else {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      scene.img('images/pc/activities/exercises/running/park_jog_cool2.jpg');
    } else {
      scene.img('images/pc/activities/exercises/running/park_jog_cooln1.jpg');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRun(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) <= 5  ||  ((s as any).hour ?? 0) >= 23) {
    // TODO-QSP: exit
  }
  if ((!((s as any).PSport ?? 0))) {
    scene.text('You could jog around the park if you were wearing sports clothes and shoes.');
  } else {
    scene.actions([
      { label: 'Jog through the park (1:00)', handler: (st: GameState) => {
    if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
      qspCall(s, 'stat', '');
      qspCall(s, 'park_walkevents', 'running_image');
      scene.text('You go for a nice long jog through the park.');
      if (((s as any).pcs_inhib ?? 0) >= 35  ||  (((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
        scene.actions([
          { label: 'Expose your breasts', handler: (st: GameState) => {
    if (((s as any).daybegskver ?? 0) === ((s as any).daystart ?? 0)) {
      qspCall(s, 'exercise', 'tier1', 30, 'run');
    } else {
      qspCall(s, 'exercise', 'tier2', 30, 'run');
    }
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (2);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/park/flash\'+rand(3, 4)+\'.jpg');
    } else {
      scene.img('images/locations/shared/park/flash\'+rand(1, 2)+\'.mp4');
    }
    scene.text('Halfway through your run, you pull up your top and expose your breasts. The cool air against your warm skin causes you to shiver, and almost immediately your nipples start to harden, a mixed reaction from the air hitting them and your growing excitement.');
    qspCall(s, 'park_walkevents', 'run_reactions');
  } },
        ]);
      }
      scene.actions([
        { label: 'Run', handler: (st: GameState) => {
    if (((s as any).daybegskver ?? 0) === ((s as any).daystart ?? 0)) {
      qspCall(s, 'exercise', 'tier1', 30, 'run');
    } else {
      qspCall(s, 'exercise', 'tier2', 30, 'run');
    }
    (s as any).daybegskver = ((s as any).daystart ?? 0);
    if ((Math.floor(Math.random() * 20) + 1) > ((s as any).pcs_hotcat ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'run_end'] }]);
    } else {
      qspCall(s, 'park_walkevents', 'running_image');
      scene.text('About halfway through your run, you hear a whistle pierce the air.');
      scene.actions([
        { label: 'Turn', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 28) + 18, 'like');
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).boy ?? 0)]}`);
    if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['catcall'] = Math.floor(Math.random() * 3) + 1;
    scene.text('Turning your head instinctively at the sound, you see a guy lowering his fingers from his mouth, a wide grin on his face.');
    if (((s as any).temp ?? 0)?.['catcall'] === 1) {
      scene.text('"Hey sexy! Why don\'t you come run back to my place so I can fuck your brains out!"');
    } else {
      if (((s as any).temp ?? 0)?.['catcall'] === 2) {
        scene.text('"You got a killer rack gorgeous! Look at those tits! Lemme put my face between them!');
      } else {
        if (((s as any).temp ?? 0)?.['catcall'] === 3) {
          scene.text('"Wooooeee! That ass! I wanna take it home with me and make it mine!"');
        }
      }
    }
    scene.actions([
      { label: 'Ignore him', handler: (st: GameState) => {
    qspCall(s, 'park_walkevents', 'running_image');
    scene.text('You roll your eyes but otherwise ignore him, continuing to run until his hollering is nothing but a distant buzz behind you. And soon enough, there\'s no hollering at all.');
    scene.actions([
      { label: 'Finish your run', goto: ['park_walkevents', 'run_end'] },
    ]);
  } },
      { label: 'Ignore him (annoyed)', handler: (st: GameState) => {
    if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['catcall'] = 4;
    qspCall(s, 'park_walkevents', 'running_image');
    scene.text('You grit your teeth and try to ignore him, continuing to run past while he shouts lewd remarks about your body and what he\'d like to do to it. Even once he\'s far behind you, you can\'t stop thinking about it, seething internally and grinding your teeth.');
    scene.text('Fuck! Who does he think he is? Are you just a piece of meat to him? Fuck that guy and fuck everybody like him!');
    scene.actions([
      { label: 'Finish your run', goto: ['park_walkevents', 'run_end'] },
    ]);
  } },
      { label: 'Walk up to him', handler: (st: GameState) => {
    scene.text('Slowing down, your jog reduces to a walk until you stop right in front of the guy.');
    scene.text('"You serious?" you puff.');
    // TODO-QSP: dynamic text: "Serious about you," he snickers before making a kissy face at you. "I'm <<$npc_...
    scene.text(`"Serious about you," he snickers before making a kissy face at you. "I'm ${((s as any).npc_firstname ?? 0)?.[String((s as any).npclastgenerated ?? 0)]}. What's your name?"`);
    scene.actions([
      { label: 'You\'re a piece of shit', handler: (st: GameState) => {
    if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['catcall'] = 4;
    scene.text('"You\'re a real piece of shit, you know that?" you huff. "You think that girls like this kind of thing? Ugly fucks like you calling out lewd shit about their bodies?"');
    scene.text('"I don\'t think they like it, I know they <i>love</i> it. Come on, I\'m just being nice, giving you some nice compliments. No need to be such a bitch about it."');
    scene.text('"Ugh, fuck you!" You spit at his shoes and break back into a run, trying to get as far away as possible.');
    scene.text('"You know I would baby! Just come back here and we\'ll make it happen!" the guy shouts after you.');
    scene.actions([
      { label: 'Finish your run', goto: ['park_walkevents', 'run_end'] },
    ]);
  } },
      { label: 'Wanna fuck?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>." you say flatly. "Nice to meet you. But really. You mean all...
    scene.text(`"${((s as any).pcs_nickname ?? 0)}." you say flatly. "Nice to meet you. But really. You mean all that stuff you said? Cause if you're serious, we could go back to your place and get it on. I could go for a good fuck right now."`);
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('He blinks in surprise but recovers quickly. "I mean, hell yeah. If you\'re offering."');
      scene.text('"You\'re the one who offered," you shrug. "Now hurry up and lead the way."');
      scene.text('He quickly heads out of the park and towards an apartment complex, you follow all the way.');
      scene.actions([
        { label: 'Go to his place', handler: (st: GameState) => {
    qspCall(s, 'npcpreservec', '', ((s as any).npclastgenerated ?? 0));
    if (!(s as any).hookup) (s as any).hookup = {}; (s as any).hookup['pickup'] = 'park_run';
  }, goto: ['sex_ev_start', 'hookup_npc_home_start'] },
      ]);
    } else {
      scene.text('"Uhhh…" he blinks in surprise and begins sputtering. "Well I- You\'re uhmm… It\'s just-"');
      scene.text('"Ugh," you roll your eyes. "What a waste of fucking time. Limp dick loser." You don\'t spare him another thought and break back into a run, leaving him and your disappointment behind.');
      scene.actions([
        { label: 'Finish your run', goto: ['park_walkevents', 'run_end'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).region ?? 0) === 'pav') {
        qspCall(s, 'pav_park', 'park_image');
      } else {
        scene.img('images/locations/city/centralpark/park.jpg');
      }
      if (((s as any).daystage ?? 0)?.['desc'] === 'sunset') {
        scene.text('It\'s getting dark soon. Are you sure it\'s such a good idea to go running right now?');
      } else {
        if (((s as any).daystage ?? 0)?.['desc'] === 'early_night') {
          scene.text('It\'s pretty dark out. Are you sure it\'s such a good idea to go running right at night?');
        } else {
          if (((s as any).daystage ?? 0)?.['desc'] === 'mid_night') {
            scene.text('It\'s very dark out. Are you sure it\'s such a good idea to go running so late at night?');
          } else {
            if (((s as any).daystage ?? 0)?.['desc'] === 'pre_dawn') {
              scene.text('It\'s still dark out. Are you sure it\'s such a good idea to go running so early in the morning?');
            }
          }
        }
      }
      scene.actions([
        { label: 'Maybe not', handler: (st: GameState) => {
    scene.text('On second thought, maybe a young girl like yourself <i>shouldn\'t</i> go running in the dark…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        { label: 'It\'ll be fine', handler: (st: GameState) => {
    (s as any).fat = ((s as any).fat ?? 0) - (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'sweat', 'add', 5);
    qspCall(s, 'stat', '');
    qspCall(s, 'park_walkevents', 'running_image');
    scene.text('You ignore your instincts and start jogging through the park.');
    if (((s as any).pcs_inhib ?? 0) >= 35  ||  (((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 0)) {
      scene.actions([
        { label: 'Expose your breasts', handler: (st: GameState) => {
    if (((s as any).daybegskver ?? 0) === ((s as any).daystart ?? 0)) {
      qspCall(s, 'exercise', 'tier1', 30, 'run');
    } else {
      qspCall(s, 'exercise', 'tier2', 30, 'run');
    }
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
    qspCall(s, 'arousal', 'flash', 5);
    qspCall(s, 'arousal', 'end');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/shared/park/flash\'+rand(3, 4)+\'.jpg');
    } else {
      scene.img('images/locations/shared/park/flash\'+rand(1, 2)+\'.mp4');
    }
    scene.text('Halfway through your run, you pull up your top and expose your breasts. The cool night air against your warm skin causes you to shiver and almost immediately your nipples start to harden.');
    if ((Math.floor(Math.random() * 25) + 0) < 7  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] !== 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['rape_type'] = 'gang';
    scene.img('images/shared/misc/jumped.jpg');
    scene.text('You\'re just thinking to yourself how exciting it is to bare your breasts even when no one is around when suddenly arms grip you from behind and a dirty hand clamps over your mouth. Your eyes go wide with fear as several more shapes emerge from the darkness, moving towards you.');
    scene.text('"Well well well, what do we have here?" a gravely voice says from behind you as another hand begins to paw your exposed breasts. "A little slut looking for some fun?"');
    scene.actions([
      { label: 'Scream', goto: ['rape_events', 'park_rape_struggle_start'] },
      { label: 'Fight!', goto: ['rape_events', 'fight_init'] },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'park_walkevents', 'run_reactions');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Run', handler: (st: GameState) => {
    if (((s as any).daybegskver ?? 0) === ((s as any).daystart ?? 0)) {
      qspCall(s, 'exercise', 'tier1', 30, 'run');
    } else {
      qspCall(s, 'exercise', 'tier2', 30, 'run');
    }
    (s as any).daybegskver = ((s as any).daystart ?? 0);
    if ((Math.floor(Math.random() * 25) + 0) < 7  &&  ((s as any).cheatVars ?? 0)?.['random_rapists'] !== 1) {
      if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['rape_type'] = 'gang';
      scene.img('images/pc/activities/exercises/running/park_jogn1.jpg');
      scene.text('About halfway through your run, you hear a branch snap to your left. You turn to see a shadow crouching in the bushes, but before you can react, arms grip you from behind and a dirty hand clamps over your mouth. Your eyes go wide with fear as several more shapes emerge from the darkness, moving towards you.');
      scene.text('"Well well well, what do we have here?" a gravely voice says from behind you. "A tasty little treat for us to enjoy?"');
      scene.actions([
        { label: 'Scream', goto: ['rape_events', 'park_rape_struggle_start'] },
        { label: 'Fight!', goto: ['rape_events', 'fight_init'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'run_end'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRunReactions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20) {
    scene.text('With it being so late, there isn\'t anyone in the park to see you, but it doesn\'t matter, the thrill and pleasure is still there. When you\'re finished, you make sure to pull your top back down.');
    qspCall(s, 'arousal', 'flashlite', 10);
    qspCall(s, 'arousal', 'end');
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('Despite it being daytime, you manage to go unnoticed during your run, but you still find yourself aroused and excited from the thought of being seen by a stranger or someone you know. When you\'re finished, you make sure to pull your top back down.');
      qspCall(s, 'arousal', 'flashlite', 10);
      qspCall(s, 'arousal', 'end');
    } else {
      scene.text('You come across a group of gopniks loitering in a circle, empty beer bottles scattered around them. They\'re loudly talking among themselves, but as you near the group, one of them notices you and quickly interrupts his friends to point you out to everyone.');
      scene.text('You can\'t help but smile slightly as you watch them rush to stand and then fight over getting to the front so they can see you better. As you run by, some start to clap and whistle while a few shout at you.');
      scene.text('"Is this real or am I fucking dreaming?!"');
      scene.text('"You need a running partner, babe? I can go all day, every day!"');
      scene.text('"Just another crazy slut."');
      scene.text('You continue your run until their catcalling can\'t be heard anymore.');
      qspCall(s, 'arousal', 'flashlite', 10);
      qspCall(s, 'arousal', 'end');
    }
  }
  scene.text('You feel great after your jogging session. A bit sweaty, but also that you\'ve managed to improve your stamina as you even feel a bit slimmer.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your run', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterRunEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'park_walkevents', 'run_cooldown_image');
  if (((s as any).temp ?? 0)?.['catcall'] === 4) {
    qspCall(s, 'mood', 'lower', 'large');
    scene.text('After about a full hour of running, you finally start to slow down, breathing tiredly. Under normal circumstances, you might be in the middle of your runner\'s high but that guy in the middle of your jog just soured the whole thing. You feel exhausted and angry and you just want to go home.');
  } else {
    scene.text('About an hour after you started, you call your run to a halt, breathing tiredly. You feel exhausted in a good way. A bit sweaty, but also that you\'ve managed to improve your stamina as you even feel a bit slimmer.');
  }
  if (((s as any).daybegskver ?? 0) === ((s as any).daystart ?? 0)) {
    qspCall(s, 'exercise', 'tier1', 30, 'run');
  } else {
    qspCall(s, 'exercise', 'tier2', 30, 'run');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterFindBaby(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).park_baby_found ?? 0) < 1) {
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/park_baby/park_woods.jpg');
    scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
    scene.text('Your thoughts are interrupted by a weak noise coming from a small forest in the park.');
    scene.actions([
      { label: 'Investigate', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/park_baby/park_baby_a.jpg');
    scene.text('After searching and following the noises you end up finding an abandoned baby in the park. You approach it and can hear weak cries coming from it.');
    scene.text('You pull it from the crib an see that it is a boy. The baby boy isn\'t moving much as he seems really weak.');
    (s as any).park_baby_found = 1;
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      scene.text('His small almost dry mouth makes little smacking movements.');
    }
    scene.text('What do you want to do?');
    if (((s as any).lactation ?? 0)?.['active'] > 0) {
      scene.actions([
        { label: 'Breastfeed him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/centralpark/park_baby/park_baby_bf.jpg');
    scene.text('You sit down on a nearby bench and get a breast out.');
    if (((s as any).kid ?? 0) <= 0) {
      scene.text('Something feels weird in your breast, a pulling tension goes through it from the base to the nipple.');
    }
    scene.text('The boy is in your arms and you lead your nipple into his small dry mouth. You can feel the small lips clamping weakly onto your nipple, only light suction coming from the mouth.');
    scene.img('images/locations/city/centralpark/park_baby/feeding_01.jpg');
    (s as any).temp_var = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 7, 30);
    if (((s as any).temp_var ?? 0) > 10) {
      scene.text('<br>The baby boys weak suckling isn\'t getting better with time. He is suckling on your nipple for almost 10 minutes and his condition isn\'t getting better.');
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 7, 10);
      (s as any).milkedvolume = 0;
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_var ?? 0));
      if (((s as any).pcs_mood ?? 0) < 20) {
        scene.actions([
          { label: 'Leave him here', handler: (st: GameState) => {
    scene.text('You look around, someone probably left him here for good. You put him back into the crib and leave the baby behind, finishing your walk.');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Bring him to the hospital', handler: (st: GameState) => {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('You take the baby and walk to the hospital in the residential area of St. Petersburg.');
    scene.text('They take him at the reception and you explain what happened. A nurse takes the baby away and the receptionist assures you that they will take care of him.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.actions([
      { label: 'Finish', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <br>The baby boys weak suckling is getting better with time. After around <<temp...
      scene.text(`<br>The baby boys weak suckling is getting better with time. After around ${((s as any).temp_var ?? 0)} minutes his sucking is getting more intense.`);
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 7, ((s as any).temp_var ?? 0));
      (s as any).milkedvolume = 0;
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_var ?? 0));
      if (((s as any).pcs_mood ?? 0) < 20) {
        scene.actions([
          { label: 'Call an ambulance and leave.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('You call an ambulance. It takes them 10 minutes to get here. They take the baby with them and thank you for the report.');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Continue to breastfeed him', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You adjust yourself a bit as you continue to breastfeed the baby. He opens his mouth more to suck in your areola, starting to chew on it. You can feel how it causes your breast to leak more milk. His small hands grabbing up, holding onto your nutrious breast.');
    scene.img('images/locations/city/centralpark/park_baby/feeding_02.jpg');
    (s as any).temp_var = qspFunc(s, 'lact_lib', '$get_breastmilk_time', 2, 120);
    if (((s as any).temp_var ?? 0) > 30) {
      scene.text('You try to breastfeed him for 30 minutes but you can\'t satisfy his needs even after switching breasts. He doesn\'t seem to get enough milk from your breasts.');
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, 30);
      (s as any).milkedvolume = 0;
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      if (((s as any).pcs_mood ?? 0) < 20) {
        scene.actions([
          { label: 'Leave him here', handler: (st: GameState) => {
    scene.text('You look around, someone probably left him here for good. You put him back into the crib and leave the baby behind, finishing your walk.');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Bring him to the hospital', handler: (st: GameState) => {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('You take the baby and walk to the hospital in the residential area of St. Petersburg.');
    scene.text('They take him at the reception and you explain what happened. A nurse takes the baby away and the receptionist assures you that they will take care of him.');
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    scene.actions([
      { label: 'Finish', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_var ?? 0) === 1) {
        if ((((s as any).lactation ?? 0)?.['breastmv']/120000) < 2) {
          scene.text('You breastfeed him for one minute. During feeding you have to switch breasts as he is drinking a lot, but your breasts make enough milk to satisfy his needs.');
        } else {
          scene.text('You breastfeed him for one minute. Your breasts make so much milk you don\'t even have to switch breasts during feeding. He seems fully satisfied when you\'re done.');
        }
      } else {
        if ((((s as any).lactation ?? 0)?.['breastmv']/120000) < 2) {
          // TODO-QSP: dynamic text: You breastfeed him for <<temp_var>> minutes. During feeding you have to switch b...
          scene.text(`You breastfeed him for ${((s as any).temp_var ?? 0)} minutes. During feeding you have to switch breasts as he is drinking a lot, but your breasts make enough milk to satisfy his needs.`);
        } else {
          // TODO-QSP: dynamic text: You breastfeed him for <<temp_var>> minutes. Your breasts make so much milk you ...
          scene.text(`You breastfeed him for ${((s as any).temp_var ?? 0)} minutes. Your breasts make so much milk you don't even have to switch breasts during feeding. He seems fully satisfied when you're done.`);
        }
      }
      if (((s as any).age ?? 0) < 18  &&  ((s as any).kid ?? 0) <= 0) {
        scene.text('As you notice how you were able to fully breastfeed a baby, even if you never had kids yourself, you start to feel proud and confident of yourself, smiling and nodding. This raises your mood as you feel more like a woman now.');
        qspCall(s, 'mood', 'raise', 'small');
      } else {
        if (((s as any).age ?? 0) >= 18  &&  ((s as any).kid ?? 0) <= 0) {
          scene.text('As you notice how you were able to fully breastfeed a baby, even if you never had kids yourself, you start to feel proud and confident of yourself, smiling and nodding. This raises your mood a bit.');
          qspCall(s, 'mood', 'raise', 'tiny');
        } else {
          scene.text('You feel satisfied after the breastfeeding and smile at the baby. Your mood rises a bit.');
          qspCall(s, 'mood', 'raise', 'tiny');
        }
      }
      (s as any).milkedvolume = qspFunc(s, 'lact_lib', '$get_breastmilk', 2, ((s as any).temp_var ?? 0));
      (s as any).milkedvolume = 0;
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_var ?? 0));
      if (((s as any).pcs_mood ?? 0) < 20) {
        scene.actions([
          { label: 'Call an ambulance and leave.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('You call an ambulance. It takes them 10 minutes to get here. They take the baby with them and thank you for the report.');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Bring him to the hospital', handler: (st: GameState) => {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('You take the baby and walk to the hospital in the residential area of St. Petersburg.');
    scene.text('They take him at the reception and you explain what happened. A nurse takes the baby away and the receptionist assures you that they will take care of him.');
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    scene.actions([
      { label: 'Finish', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    }
  } },
        { label: 'Bring him to the hospital', handler: (st: GameState) => {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('You take the baby and walk to the hospital in the residential area of St. Petersburg.');
    scene.text('They take him at the reception and you explain what happened. A nurse takes the baby away and the receptionist assures you that they will take care of him.');
    (s as any).minut = ((s as any).minut ?? 0) + 35;
    scene.actions([
      { label: 'Finish', goto: ['city_clinic', 'start'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).pcs_mood ?? 0) < 20) {
      scene.actions([
        { label: 'Call an ambulance and leave.', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('You call an ambulance. It takes them 10 minutes to get here. They take the baby with them and thank you for the report.');
    scene.actions([
      { label: 'Finish your walk', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Bring him to the hospital', handler: (st: GameState) => {
    scene.text('<center><b>Clinic</b></center>');
    scene.img('images/locations/shared/clinic/poli.jpg');
    scene.text('You take the baby and walk to the hospital in the residential area of St. Petersburg.');
    scene.text('They take him at the reception and you explain what happened. A nurse takes the baby away and the receptionist assures you that they will take care of him.');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.actions([
      { label: 'Finish', goto: ['city_clinic', 'start'] },
    ]);
  } },
    ]);
  } },
      { label: 'Finish your walk', goto: ['city_park', 'start'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['park_walkevents', 'empty'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'empty':
      enterEmpty(s, scene);
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
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '6a':
      enter6a(s, scene);
      break;
    case '6b':
      enter6b(s, scene);
      break;
    case '6c':
      enter6c(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case 'running_image':
      enterRunningImage(s, scene);
      break;
    case 'run_cooldown_image':
      enterRunCooldownImage(s, scene);
      break;
    case 'run':
      enterRun(s, scene);
      break;
    case 'run_reactions':
      enterRunReactions(s, scene);
      break;
    case 'run_end':
      enterRunEnd(s, scene);
      break;
    case 'find_baby':
      enterFindBaby(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const park_walkevents: LocationDef = {
  name: 'park_walkevents',
  title: 'One of the other guys takes your camera and smashes it against a rock',
  region: 'other',
  enter: enter,
};
