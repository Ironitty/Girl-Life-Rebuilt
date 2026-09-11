import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Alley entrance next to cafe</b></center>');
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  scene.text('You walk around the cafe going into a back alley, where you see several guys. They did their best to look like Gopniks, wearing the stereotypical track suits. They mostly just seem to be loitering about, drinking beer and harassing people passing by their alley. You\'re certain none of these guys have jobs, and mostly live off the spoils they gain from their petty crime.');
  qspCall(s, 'gopwho', '');
  qspCall(s, 'goplust', '');
  if (((s as any).gopnew ?? 0)?.['feed'] >= 1) {
    scene.actions([{ label: 'Continue', goto: ['gopnew', 'succubus_1'] }]);
  } else {
    if (((s as any).gopnew ?? 0)?.['fight'] > 0) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', 'mistress_1'] }]);
    } else {
      if (((s as any).gnewQW ?? 0) === 0  &&  ((s as any).gopnew ?? 0)?.['ran'] >= 1) {
        scene.actions([{ label: 'Continue', goto: ['gopnew', 'coward_1'] }]);
      } else {
        if ((!((s as any).gnewQW ?? 0))) {
          qspCall(s, 'gopnew', 'start0');
        } else {
          if (((s as any).gnewQW ?? 0) === 1) {
            qspCall(s, 'gopnew', 'start1');
          } else {
            if (((s as any).gnewQW ?? 0) === 2) {
              qspCall(s, 'gopnew', 'start2');
            } else {
              if (((s as any).gnewQW ?? 0) === 3) {
                qspCall(s, 'gopnew', 'start3');
              } else {
                if (((s as any).gnewQW ?? 0) === 4) {
                  qspCall(s, 'gopnew', 'start4');
                } else {
                  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5) {
                    qspCall(s, 'gopnew', 'start5');
                  } else {
                    if (((s as any).sipovka ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 6) {
                      qspCall(s, 'gopnew', 'start6');
                    } else {
                      if (((s as any).loh ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 7) {
                        qspCall(s, 'gopnew', 'start7');
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
  // TODO-QSP: end
  scene.build();
}

function enterStart0(s: GameState, scene: SceneBuilder): void {
  scene.text('Once they notice you walking into their alley, one of them steps towards you. He gives you a toothy grin as he says: "Hey babe! Want to come hang out with us? We have beer!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Have a beer with them', goto: ['gopnew', 'pivas'] },
    { label: 'Decline and walk away', handler: (st: GameState) => {
    scene.text('You wordlessly shake your head and keep walking, hoping he\'ll get the message and leave you alone. He\'s not giving up that easily though, and follows you.');
    scene.text('"Come on, babe! Relax! We\'re decent guys, you don\'t have to be scared around us! We just want to have a good time!" he reassures you. He seems fairly genuine in his offer.');
    scene.actions([
      { label: 'Agree to have a beer with them', goto: ['gopnew', 'pivas'] },
      { label: 'Decline again, more clearly this time', handler: (st: GameState) => {
    scene.text('<center><b>Alley entrance next to cafe</b></center>');
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('"I have no intentions of drinking beer with you. Leave me alone!" you snap at the guy.');
    scene.text('He squints his eyes angrily and shouts: "What!? Are you one of those snobs who look down on us? What the fuck is your problem?"');
    scene.text('The Gopniks are often looked down upon by others, and this guy is taking it very personally that you keep refusing his offer. He\'s starting to get mad at you.');
    scene.actions([
      { label: 'Agree to have a beer after all', goto: ['gopnew', 'pivas'] },
      { label: 'Push him away and swear at him', handler: (st: GameState) => {
    scene.text('"Leave me the fuck alone!" you scream at the hoodlum, and push him away. He won\'t let you leave though, and blocks the exit while he grabs you by the arm.');
    scene.text('"All I wanted to do was be nice, and you had to go and be a rude bitch! You\'re coming with me, now!" he shouts angrily. All the kindness is gone from his eyes, and he looks like he won\'t hesitate to use violence if you don\'t do as he says.');
    scene.text('His friends look at the two of you intently now, also upset that you won\'t join them.');
    qspCall(s, 'willpower', 'rape', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Try to squirm free and run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Squirm free and run away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).gopnew ?? {})['ran'] = (((s as any).gopnew ?? {})['ran'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You do your best to wrestle yourself free, but his grip is too tight. Deciding you need to get out of there at any cost, you knee him hard in the groin and run as he lets you go with a grunt of pain. His friends start after you, but weren\'t ready for it, and your fear gives you the speed you need to make it out of the alley and disappear into the crowd.');
    scene.text('It would be smart not to return here unprepared, next time they will be ready for you.');
    scene.actions([
      { label: 'Continue', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit and let him take you into the alley', handler: (st: GameState) => {
    scene.text('Deciding you can\'t take them all on at once, you stop resisting and let the man take you further into the alley. At the back end, he roughly pushes you against the wall. His friends get up and follow the two of you, a greedy look in their eyes.');
    scene.actions([
      { label: 'Ask what they want from you', goto: ['gopnew', 'bazar'] },
    ]);
  } },
      { label: 'Fight them all', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'gopnews_1', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_2', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_3', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_4', 'opp');
    (s as any).fightEnding = 21;
  }, goto: ['fight', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStart1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>! I was hoping you'd come by again, cutie! Want to go hav...
  scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}! I was hoping you'd come by again, cutie! Want to go have a beer with me?" Vasan asks you. He's clearly happy to see you.`);
  // TODO-QSP: dynamic text: <<$gopnik>>
  scene.text(`${((s as any).gopnik ?? 0)}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you\'d like to, but have no time', handler: (st: GameState) => {
    scene.text('"I\'m sorry, Vasan! I would love to, but I\'m really in a hurry right now!" you say apologetically, pointing at your watch.');
    scene.text('"Come on, babe!" he tries. "Surely you can spare like 30 minutes and have a chat with me?"');
    qspCall(s, 'willpower', 'drink', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
    ]);
  } },
    { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>! I was hoping you'd come by again, cutie! Want to go hav...
  scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}! I was hoping you'd come by again, cutie! Want to go have a beer with me?" Vasan asks you. He's clearly happy to see you. ${((s as any).gopnik ?? 0)}`);
  scene.text('"Or if you\'re feeling brave… want to make some money? We could go to the park and try to rob some careless suckers? All you have to do is distract them! No one will even know you had anything to do with it!" he continues, with a sly grin on his face. "The pay isn\'t great, but it\'s an easy way to make some money together!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you have no time', handler: (st: GameState) => {
    scene.text('"I\'m sorry, Vasan! I would love to have a beer with you, but I\'m really in a hurry right now!" you say apologetically, pointing at your watch.');
    scene.text('"Come on, babe!" he tries. "Surely you can spare like 30 minutes and have a chat with me?"');
    qspCall(s, 'willpower', 'drink', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
    ]);
  } },
    { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
    { label: 'Go stealing with them in the park', handler: (st: GameState) => {
    scene.img('images/locations/city/centralpark/park.jpg');
    (s as any).goprandwork = Math.floor(Math.random() * 100) + 1;
    if (((s as any).goprandwork ?? 0) < 75) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).gopota = ((s as any).gopota ?? 0) + (1);
      scene.text('You walk through the park with Vasan, but don\'t find any marks worth robbing. You still had a fun time chatting with him, though.');
      scene.actions([
        { label: 'Say goodbye and go back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).goprandwork ?? 0) < 95) {
        (s as any).gopstop = ((s as any).gopstop ?? 0) + (1);
        (s as any).gopota = ((s as any).gopota ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        scene.text('You help the guys steal a few cellphones by distracting random people in the park, but didn\'t get much done. The few rubles you all got for selling the items, were immediately used to buy more beer.');
        scene.actions([
          { label: 'Say goodbye and go back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
        ]);
      } else {
        (s as any).gopstop = ((s as any).gopstop ?? 0) + (1);
        (s as any).gopota = ((s as any).gopota ?? 0) + (1);
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        (s as any).randmon = Math.floor(Math.random() * 451) + 50;
        qspCall(s, 'money', 'earn', ((s as any).randmon ?? 0), 'cash');
        // TODO-QSP: dynamic text: You and the guys had a pretty good day, and they managed to steal several wallet...
        scene.text(`You and the guys had a pretty good day, and they managed to steal several wallets and cell phones while you distracted the marks. After Vasan sells the lot to the pawn shop, he gives you your share: ${qspFunc(s, 'money', 'string_profit', ((s as any).randmon ?? 0))}.`);
        scene.actions([
          { label: 'Say goodbye and go back home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  (s as any).gopota = ((s as any).gopota ?? 0) + (5);
  (s as any).gnewQW = 4;
  scene.text('"We heard you got arrested by the cops! What happened? You didn\'t rat us out, did you?" Vasan asks with some concern in his voice.');
  scene.text('"Of course not! You know me!" you reassure them. You sit down and tell the guys what happened, omitting some of the sexual details. When you\'re finished, one of them grins: "We should find this cop bitch, and catch her! You deserve to fuck her, after all she did to you!"');
  scene.text('The other Gopniks laugh, and you laugh with them. If they only knew…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Excuse yourself and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterStart4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>! I was hoping you'd come by again, cutie! Want to go hav...
  scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}! I was hoping you'd come by again, cutie! Want to go have a beer with me?" Vasan asks you. He's clearly happy to see you. ${((s as any).gopnik ?? 0)}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you have no time', handler: (st: GameState) => {
    scene.text('"I\'m sorry, Vasan! I would love to have a beer with you, but I\'m really in a hurry right now!" you say apologetically, pointing at your watch.');
    scene.text('"Come on, babe!" he tries. "Surely you can spare like 30 minutes and have a chat with me?"');
    qspCall(s, 'willpower', 'drink', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decline and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
    ]);
  } },
    { label: 'Go drink beer with him', goto: ['gopnew', 'pivas'] },
  ]);
  scene.build();
}

function enterStart5(s: GameState, scene: SceneBuilder): void {
  (s as any).gnewQW = 5;
  (s as any).gtalkrand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).gtalkrand ?? 0))) {
  }
  if (((s as any).gtalkrand ?? 0) === 1) {
  }
  if (((s as any).gtalkrand ?? 0) === 2) {
  }
  if (((s as any).gtalkrand ?? 0) === 3) {
  }
  if (((s as any).gtalkrand ?? 0) === 4) {
  }
  (s as any).gtalkrand = Math.floor(Math.random() * 5) + 0;
  if ((!((s as any).gtalkrand ?? 0))) {
  }
  if (((s as any).gtalkrand ?? 0) === 1) {
  }
  if (((s as any).gtalkrand ?? 0) === 2) {
  }
  if (((s as any).gtalkrand ?? 0) === 3) {
  }
  if (((s as any).gtalkrand ?? 0) === 4) {
  }
  // TODO-QSP: dynamic text: <<$gopnik>>
  scene.text(`${((s as any).gopnik ?? 0)}`);
  // TODO-QSP: dynamic text: "Hey, <<$goptalk>>! <<$goptalk2>>" one of them shouts, getting a good laugh out ...
  scene.text(`"Hey, ${((s as any).goptalk ?? 0)}! ${((s as any).goptalk2 ?? 0)}" one of them shouts, getting a good laugh out of his friends. They all look at you intently.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait until one of them approaches you', handler: (st: GameState) => {
    scene.text('One of them comes walking towards you.');
    if (((s as any).gopopusday ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.text('"Got the money?" he asks intently.');
      if (qspFunc(s, 'money', 'can_afford', 2000, 'cash') === 1) {
        scene.actions([
          { label: 'Give him the money ( [+$func(\'money\', \'string_price\', 2000) + \'...]', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 2000, 'cash');
    (s as any).gopopusday = ((s as any).daystart ?? 0);
    // TODO-QSP: dynamic text: You offer him the ' + $func('money', 'string_price', 2000) + ' he expects from y...
    scene.text('You offer him the \' + $func(\'money\', \'string_price\', 2000) + \' he expects from you. He counts it quickly and gives you an affirmative grunt.');
    if (((s as any).GLust ?? 0) > 0) {
      scene.text('He rubs his groin awkwardly while he tells you: "I\'m horny, and you\'re going to help me with that. Come on, be a good whore and follow me."');
      scene.actions([
        { label: 'Follow him', goto: ['gopnew', 'sexstart'] },
      ]);
    }
    scene.actions([
      { label: 'Walk away quickly', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Explain you have no money', handler: (st: GameState) => {
    scene.text('"Guys, please! I have no money!" you cry out, with tears in your eyes.');
    // TODO-QSP: dynamic text: Vasan punches you in the stomach and smirks: "I don't think you understand the s...
    scene.text(`Vasan punches you in the stomach and smirks: "I don't think you understand the situation you're in, ${((s as any).pcs_nickname ?? 0)}. Either you pay us, or you're in serious trouble!"`);
    scene.text('Ignoring your weak whimpering, he nods to the other guys: "She\'s yours, guys. Do what you want with her. Make sure she gets the message."');
    scene.actions([
      { label: 'Let them drag you to a car', goto: ['gopnew', 'degrading'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).gopopusday ?? 0) === ((s as any).daystart ?? 0)) {
        if (((s as any).GLust ?? 0) > 0) {
          scene.text('He rubs his groin awkwardly while he tells you: "I\'m horny, and you\'re going to help me with that. Come on, be a good whore and follow me."');
          scene.actions([
            { label: 'Go with him', goto: ['gopnew', 'sexstart'] },
          ]);
        } else {
          scene.text('Vasan spits on the ground in front of you and grunts: "You\'re lucky no one wants you right now, bitch. Get out of here, before I change my mind."');
          scene.actions([
            { label: 'Get away from him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
          ]);
        }
      }
    }
  } },
    { label: 'Pretend you didn\'t hear him', handler: (st: GameState) => {
    scene.text('You pretend you didn\'t hear Vasan and keep walking. Hopefully he\'ll leave you be.');
    if (((s as any).gopopusday ?? 0) === ((s as any).daystart ?? 0)) {
      scene.text('Vasan laughs: "Look at her run! A bit bow-legged at that… probably fresh from getting her worthless cunt fucked again! Keep running, whore!"');
      scene.actions([
        { label: 'Run away from them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).gopopusday ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.text('Unfortunately, he doesn\'t. He and his friends quickly overtake you and surround you.');
        scene.text('"Do you have cum in your ears or something, slut? We asked you a question! Where\'s our fucking money?" Vasan shouts.');
        if (qspFunc(s, 'money', 'can_afford', 2000, 'cash') === 1) {
          scene.actions([
            { label: 'Give him the money ( [+$func(\'money\', \'string_price\', 2000) + \'...]', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 2000, 'cash');
    (s as any).gopopusday = ((s as any).daystart ?? 0);
    // TODO-QSP: dynamic text: You offer him the ' + $func('money', 'string_price', 2000) + ' he expects from y...
    scene.text('You offer him the \' + $func(\'money\', \'string_price\', 2000) + \' he expects from you. He counts it quickly and gives you an affirmative grunt.');
    if (((s as any).GLust ?? 0) > 0) {
      scene.text('He rubs his groin awkwardly while he tells you: "I\'m horny, and you\'re going to help me with that. Come on, be a good whore and follow me."');
      scene.actions([
        { label: 'Follow him', goto: ['gopnew', 'sexstart'] },
      ]);
    }
    scene.actions([
      { label: 'Walk away quickly', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Explain you have no money', handler: (st: GameState) => {
    scene.text('"Guys, please! I have no money!" you cry out, with tears in your eyes.');
    // TODO-QSP: dynamic text: Vasan punches you in the stomach and smirks: "I don't think you understand the s...
    scene.text(`Vasan punches you in the stomach and smirks: "I don't think you understand the situation you're in, ${((s as any).pcs_nickname ?? 0)}. Either you pay us, or you're in serious trouble!"`);
    scene.text('Ignoring your weak whimpering, he nods to the other guys: "She\'s yours, guys. Do what you want with her. Make sure she gets the message."');
    scene.actions([
      { label: 'Let them drag you to a car', goto: ['gopnew', 'degrading'] },
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

function enterStart6(s: GameState, scene: SceneBuilder): void {
  (s as any).gnewQW = 6;
  // TODO-QSP: dynamic text: <<$gopnik>>
  scene.text(`${((s as any).gopnik ?? 0)}`);
  scene.text('"Hey, slut! Get over here!" one of them shouts.');
  if (((s as any).GLust ?? 0) <= 0) {
    scene.text('When you approach them, he gives you a dismissive nod, noticing you didn\'t ignore him. "Good, you listened. Now get out of here, before we change our minds."');
    scene.actions([
      { label: 'Quickly leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } else {
    scene.text('He rubs his groin awkwardly while he tells you: "How long has it been? I want you, now. Follow me."');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Quickly leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Quickly leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go with him', goto: ['gopnew', 'sexstart'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStart7(s: GameState, scene: SceneBuilder): void {
  (s as any).gnewQW = 7;
  // TODO-QSP: dynamic text: <<$gopnik>>
  scene.text(`${((s as any).gopnik ?? 0)}`);
  scene.text('"It\'s that whore, guys! Hey whore, get over here!" one of them shouts loudly, catching the attention of everyone nearby.');
  scene.text('All the bystanders in the area quickly walk away, when they notice it\'s you they\'re talking to. They want no part in what\'s about to happen.');
  if (((s as any).gopdolg ?? 0) > 0  &&  ((s as any).gopdaydolg ?? 0) > ((s as any).daystart ?? 0)) {
    scene.text('"Do you have the money? Don\'t forget, time is running out!" he says menacingly.');
  } else {
    if (((s as any).gopdolg ?? 0) > 0  &&  ((s as any).gopdaydolg ?? 0) <= ((s as any).daystart ?? 0)) {
      scene.text('"Where\'s our money, slut?" he asks intently.');
      if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).gopdolg ?? 0), 'cash')) {
        scene.actions([
          { label: 'Give him the money', handler: (st: GameState) => {
    (s as any).temp_paid = qspFunc(s, 'money', 'debt_pay', 'gopdolg', 0, 'cash');
    // TODO-QSP: dynamic text: You give the guy <<$func('money', 'string_debt_reduction', temp_paid)>>. He coun...
    scene.text(`You give the guy ${qspFunc(s, 'money', 'string_debt_reduction', ((s as any).temp_paid ?? 0))}. He counts the money, almost disappointed to see it's all there.`);
    scene.actions([
      { label: 'Quickly go away', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        scene.text('"Guys, please! I have no money!" you cry out, with tears in your eyes.');
        scene.text('Vasan laughs: "I was hoping you\'d say that, I could use a blowjob! And so could the other guys, I\'m sure… get down on your knees!"');
        scene.actions([
          { label: 'Kneel before them', goto: ['gopnew', 'rapebj'] },
        ]);
      }
      return;
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Quickly walk away from them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterPivasContent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).film ?? 0) > 0) {
    (s as any).pfknowrand = Math.floor(Math.random() * 101) + 0;
    if (((s as any).film ?? 0) >= ((s as any).pfknowrand ?? 0)) {
      (s as any).filmknow = 1;
    }
  } else {
    if (((s as any).kavslut ?? 0) >= 3) {
      (s as any).kavknowrand = Math.floor(Math.random() * 101) + 0;
      if (((s as any).kavknowrand ?? 0) >= 95) {
        (s as any).kavslutknow = 1;
      }
    } else {
      if (((s as any).frot ?? 0) >= 3) {
        (s as any).frotknowrand = Math.floor(Math.random() * 101) + 0;
        if (((s as any).frot ?? 0) >= ((s as any).frotknowrand ?? 0)) {
          (s as any).frotknow = 1;
        }
      } else {
        if (((s as any).bomjshet ?? 0) >= 3) {
          (s as any).bomjknowrand = Math.floor(Math.random() * 101) + 0;
          if (((s as any).bomjknowrand ?? 0) >= 95) {
            (s as any).bomjknow = 1;
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPivas(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  scene.text('You follow the guys to a playground, where they shoo the kids away and crash down onto a bench.');
  if (((s as any).cumloc ?? 0)[11] === 1  ||  (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)) {
    scene.text('One of them looks at you closely and says: "Is… fuck me! Is that cum!? That\'s sad, I thought you were one of the good ones, but you\'re just another whore… come with us, we can put that mouth of yours to work."');
    qspCall(s, 'gopnew', 'choice_1');
  } else {
    if (((s as any).gnewQW ?? 0) > 0) {
      qspCall(s, 'drugs', 'alcohol', 'beer');
      scene.text('You sit down next to the guys on the bench and have a beer with them.');
      scene.text('A burly man named Udmurt and a bald man named Grey enter the playground a few minutes later, walking towards your group.');
      qspCall(s, 'gopnew', 'pivas_content');
      if (((s as any).filmknow ?? 0) === 1) {
        scene.text('Udmurt sits down on a bench near yours, and doesn\'t take his eyes off you once. After a few minutes he says to you in his rough voice: "I think I\'ve seen you before… but where?"');
        scene.text('You shrug: "I live around here… plenty of chances to see me?"');
        scene.text('He shakes his head decisively: "No, that\'s definitely not it. Let\'s see."');
        scene.text('Then Udmurt produces his mobile phone and shows it to the guys: "Right, this is why!"');
        scene.text('You hear the moans of a woman coming from the phone speakers, and you realize - that\'s you in one of your movies!');
        scene.text('"What a whore…" all the guys mumble in unison. Then all their looks turn to you.');
        scene.text('Udmurt silently turns his phone to you, and you see yourself sucking a dick enthusiastically.');
        scene.text('One of the Gopniks angrily throws his beer bottle to the side and shouts: "What the fuck!? You\'ve been drinking our beer with that mouth! Get on your fucking knees, it\'s time you pay us back!"');
        qspCall(s, 'gopnew', 'choice_1');
      } else {
        if (((s as any).kavslutknow ?? 0) === 1) {
          scene.text('Gray recognizes you and laughs. He says with an evil grin: "You know guys, this girl who\'s with you… she\'s a total whore! You know Givi and Ashot, from the cafe? They both fucked her, simultaneously… Ashot showed me a video of them doing her after work. Once our bottles are empty, maybe we should empty something else in her, eh!?"');
          scene.text('One of the Gopniks throws his beer bottle to the side and grins: "Sounds good. Let\'s see how many she can take at once…"');
          qspCall(s, 'gopnew', 'choice_1');
        } else {
          if (((s as any).frotknow ?? 0) === 1) {
            scene.text('Gray recognizes you and laughs. He says with an evil grin: "Subway slut, hi! You know guys, this girl who\'s often with you… she\'s a minor celebrity! One of my buddies made a video of her serving some random guy in the subway. Look, here it is… she doesn\'t mind at all! That is you, right?"');
            scene.text('He shows you the video, and you\'re speechless. Yea… that girl on the subway train getting humped is you.');
            scene.text('One of the Gopniks angrily throws his beer bottle to the side and grins: "In that case, I\'m sure she wouldn\'t mind serving a few more if she doesn\'t want trouble! Come on, let\'s go teach her how things work around here…"');
            qspCall(s, 'gopnew', 'choice_1');
          } else {
            if (((s as any).bomjknow ?? 0) === 1) {
              scene.text('Gray looks at you intently after he sits down. Then he pulls out his mobile phone, and browses it for a while. You shrug and just chat with the other guys.');
              scene.text('Suddenly, he stands up and offers his phone to Vasan.');
              scene.text('"Remember when I showed you this photo before? Some random girl flashing a homeless man by the dumpsters? Look closely…!" Gray says triumphantly.');
              scene.text('He snags his phone out of Vasan\'s hands and shows you the photo: it\'s you exposing your breasts to a homeless man, who is quite obviously jerking off!');
              scene.text('Vasan nearly spits out his beer, and shouts: "You really give it up for just about everyone, don\'t you? No wonder you were so eager to come sit with us!"');
              scene.text('One of his friends nods to the back end of the alley and suggests: "In that case, let\'s teach her how things are going to work around here…"');
              qspCall(s, 'gopnew', 'choice_1');
            } else {
              (s as any).gopota = ((s as any).gopota ?? 0) + (1);
              qspCall(s, 'drugs', 'alcohol', 'beer');
              scene.text('You sit down next to Vasan and share a beer with him.');
              // TODO-QSP: dynamic text: <<$gopnik>>
              scene.text(`${((s as any).gopnik ?? 0)}`);
              if (((s as any).gnewQW ?? 0) > 1) {
                if (((s as any).VasanTut ?? 0) === 2  ||  ((s as any).BerezaTut ?? 0) === 2  ||  ((s as any).VitekTut ?? 0) === 2  ||  ((s as any).KostilTut ?? 0) === 2  ||  ((s as any).UdmurtTut ?? 0) === 2  ||  ((s as any).SeriTut ?? 0) === 2) {
                  scene.actions([{ label: 'Continue', goto: ['gopnew', 'sexstart'] }]);
                }
              }
              scene.actions([
                { label: 'Leave them be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
              ]);
            }
          }
        }
      }
    } else {
      if ((!((s as any).gnewQW ?? 0))) {
        (s as any).gnewQW = 1;
        // TODO-QSP: dynamic text: You walk towards the group of guys, and the one who walked you there introduces ...
        scene.text(`You walk towards the group of guys, and the one who walked you there introduces you to them. "Hey guys, this is ${((s as any).pcs_nickname ?? 0)}. ${((s as any).pcs_nickname ?? 0)}, these are my friends: Bereza, Konstantin and Kostil. I'm Vasan."`);
        scene.text('You look at him and his friends. The guy who talked to you, Vasan, is fairly burly and muscular. Bereza is a tall blonde guy, Konstantin is rather short and stocky, and Kostil is fairly skinny.');
        scene.text('After the introductions are over, he pulls a beer bottle from his bag and takes a swig from it, and then passes it around.');
        scene.text('While you\'re drinking, two more men approach. Vasan whispers: "The short stocky guy is Udmurt. We don\'t know the bald man\'s name… everyone calls him Gray. Be careful around those guys, they have connections."');
        scene.text('Gray flashes you a grin, surprised to see a girl in the circle. You notice that he has several gold teeth, making him look even more menacing.');
        if (((s as any).filmknow ?? 0) === 1) {
          scene.text('Udmurt sits down on a bench near yours, and doesn\'t take his eyes off you once. After a few minutes he says to you in his rough voice: "I think I\'ve seen you before… but where?"');
          scene.text('You shrug: "I live around here… plenty of chances to see me?"');
          scene.text('He shakes his head decisively: "No, that\'s definitely not it. Let\'s see."');
          scene.text('Then Udmurt produces his mobile phone and shows it to the guys: "Right, this is why!"');
          scene.text('You hear the moans of a woman coming from the phone speakers, and you realize - that\'s you in one of your movies!');
          scene.text('"What a whore…" all the guys stumble in unison. Then all their looks turn to you.');
          scene.text('Udmurt silently turns his phone to you, and you see yourself sucking a dick enthusiastically.');
          scene.text('One of the Gopniks angrily throws his beer bottle to the side and shouts: "What the fuck!? You\'ve been drinking our beer with that mouth!"');
          qspCall(s, 'gopnew', 'choice_1');
        } else {
          if (((s as any).kavslutknow ?? 0) === 1) {
            scene.text('Gray recognizes you and laughs. He says with an evil grin: "You know guys, this girl who\'s with you… she\'s a total whore! You know Givi and Ashot, from the cafe? They both fucked her, simultaneously… Ashot showed me a video of them doing her after work. Once our bottles are empty, maybe we should empty something else in her, eh!?"');
            scene.text('One of the Gopniks throws his beer bottle to the side and grins: "Sounds good. Let\'s go have a little chat with her…"');
            qspCall(s, 'gopnew', 'choice_1');
          } else {
            if (((s as any).frotknow ?? 0) === 1) {
              scene.text('Gray recognizes you and laughs. He says with an evil grin: "Subway slut, hi! You know guys, this girl who\'s often with you… she\'s a minor celebrity! One of my buddies made a video of her serving some random guy in the subway. Look, here it is… she doesn\'t mind at all! That is you, right?"');
              scene.text('He shows you the video, and you\'re speechless. Yea… that girl on the subway train getting humped is you.');
              scene.text('One of the Gopniks angrily throws his beer bottle to the side and grins: "In that case, I\'m sure she wouldn\'t mind serving a few more if she doesn\'t want trouble! Come on, let\'s go teach her how things work around here…"');
              qspCall(s, 'gopnew', 'choice_1');
            } else {
              if (((s as any).bomjknow ?? 0) === 1) {
                scene.text('Gray looks at you intently after he sits down. Then he pulls out his mobile phone, and browses it for a while. You shrug and just chat with the other guys.');
                scene.text('Suddenly, he stands up and offers his phone to Vasan.');
                scene.text('"Remember when I showed you this photo before? Some random girl flashing a homeless man by the dumpsters? Look closely…!" Gray says triumphantly.');
                scene.text('He snags his phone out of Vasan\'s hands and shows you the photo: it\'s you exposing your breasts to a homeless man, who is quite obviously jerking off!');
                scene.text('Vasan nearly spits out his beer, and shouts: "You really give it up for just about everyone, don\'t you? No wonder you were so eager to come sit with us!"');
                scene.text('One of his friends nods to the back end of the alley and suggests: "In that case, let\'s teach her how things are going to work around here…"');
                qspCall(s, 'gopnew', 'choice_1');
              } else {
                (s as any).gopota = ((s as any).gopota ?? 0) + (1);
                qspCall(s, 'drugs', 'alcohol', 'beer');
                scene.text('You sit down next to Vasan and share a beer with him.');
                // TODO-QSP: dynamic text: <<$gopnik>>
                scene.text(`${((s as any).gopnik ?? 0)}`);
                if (((s as any).gnewQW ?? 0) > 1) {
                  if (((s as any).VasanTut ?? 0) === 2  ||  ((s as any).BerezaTut ?? 0) === 2  ||  ((s as any).VitekTut ?? 0) === 2  ||  ((s as any).KostilTut ?? 0) === 2  ||  ((s as any).UdmurtTut ?? 0) === 2  ||  ((s as any).SeriTut ?? 0) === 2) {
                    scene.actions([{ label: 'Continue', goto: ['gopnew', 'sexstart'] }]);
                  }
                }
                scene.actions([
                  { label: 'Leave them be', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
                ]);
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

function enterBazar(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  scene.text('"Guys, come on! What do you want from me?" you mumble, a tad frightened. The guys force you to walk between them, firmly holding you by the shoulders.');
  scene.text('Vasan punches you in the stomach and grunts: "Shut up, bitch." They drag you to your feet again and guide you to a secluded area, between some abandoned buildings.');
  scene.text('Konstantin scowls: "You\'re nothing but a whore… and whores pay protection money to stay out of trouble! You fucking owe us! Unless you\'re looking for trouble!?"');
  scene.text('Vasan roughly shakes you by the shoulders and says: "Well? What do you say?"');
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    scene.text('You sense a vague evil and powerful magic, that suppresses your own magical powers. You can\'t use your spells against the Gopniks.');
  }
  qspCall(s, 'willpower', 'misc', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Say you don\'t owe them anything [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Say you don\'t owe them anything [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('Vasan laughs and gives you an amused look: "Oh really, and why not? Are you saying I\'m a liar and that you\'re not a whore?"');
    scene.actions([
      { label: 'Tell him he\'s a liar', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 8, 'stomach', 'hit');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('Vasan punches you in the stomach before you can even finish your sentence, besides himself with rage. "You fucking… you\'re the liar!"');
    scene.actions([
      { label: 'Drop to your knees before him', goto: ['gopnew', 'rapebj'] },
    ]);
  } },
      { label: 'Tell him he\'s not a liar', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('Vasan nods affirmatively: "If I\'m not a liar, that means you\'re a whore! And like Konstantin said: whores pay, or they get fucked up. What\'s it gonna be?"');
    qspCall(s, 'willpower', 'misc', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to pay [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to pay [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 8, 'head', 'hit');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('"You\'re stubborn, aren\'t you?" Vasan roars, clearly annoyed. Before you know it he punches you in the face, causing you to fall back onto the ground.');
    scene.text('He undoes his pants while he walks over to you and grunts: "Here\'s what happens if you don\'t pay…"');
    scene.actions([
      { label: 'Crawl up to your knees', goto: ['gopnew', 'rapebj'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree to pay', handler: (st: GameState) => {
    scene.text('Vasan grins, when he notices you don\'t object: "Good whore. Now, let\'s talk money."');
    scene.actions([
      { label: 'Ask him how much he wants', goto: ['gopnew', 'dolg'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree to their demands', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('You quickly nod your head, terrified of what they might do to you. Hopefully they\'ll get bored of you soon enough and leave you alone. When you see his intense look, you blurt out: "Okay, okay!"');
    scene.text('Vasan turns to his friends and laughs: "You hear that, guys? She agrees that she owes us money, and that she\'s a whore!"');
    scene.actions([
      { label: '"Hey, I\'m no whore!"', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('"Hey, I\'m no whore!" you object, earning you a scorching look from Vasan.');
    scene.text('"Oh really? So you don\'t suck a dick every now and then? You don\'t use your body to get what you want?" he asks angrily.');
    scene.actions([
      { label: 'Admit that you do', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('Vasan gives you a triumphant grin and says: "Exactly. So that makes you a liar, as well as a whore."');
    scene.text('Before you can say anything more, Vasan grunts: "Down on your knees, whore. And open your liar mouth… maybe a cock in it will remind you about your place!"');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to blow him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to blow him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'pain', '', 8, 'head', 'hit');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('When you shake your head, you feel an intense pain on the side of your head and fall down to the ground. When you manage to focus your blurry gaze again, you see Vasan standing over you with a raised fist. "I wasn\'t fucking asking, whore! Open. Your. Mouth."');
    scene.actions([
      { label: 'Kneel before him', goto: ['gopnew', 'rapebj'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kneel before him', goto: ['gopnew', 'rapebj'] },
    ]);
  } },
      { label: 'Say you don\'t', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 8, 'stomach', 'hit');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('"More lies!" Vasan spits in your face.');
    scene.text('He punches you in the stomach before you can respond, and you collapse to your knees before him.');
    scene.text('"That\'s right bitch, get on your knees where you belong. Open your fucking mouth!" he shouts, and begins to pull down his pants.');
    scene.actions([
      { label: 'Kneel before him', goto: ['gopnew', 'rapebj'] },
    ]);
  } },
    ]);
  } },
      { label: 'Remain silent', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/gopnews.jpg');
    scene.text('Vasan grins, when he notices you don\'t object: "Good whore. Now, let\'s talk money."');
    scene.actions([
      { label: 'Ask him how much he wants', goto: ['gopnew', 'dolg'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRapebj(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  ((s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})['rape_count'] ?? 0) + (1);
  scene.img('images/locations/city/residential/street/sex/rapebj.jpg');
  scene.text('Vasan pulls his unwashed cock out of his pants, and waves it in front of your face. When he notices you\'re not opening your mouth quick enough, he growls: "Don\'t pretend you forgot what to do with these, whore! Start sucking!"');
  qspCall(s, 'willpower', 'bj', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep your lips tightly together [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep your lips tightly together [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((!((s as any).vasansex ?? 0))) {
      (s as any).vasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    scene.img('images/locations/city/residential/street/sex/rapebj3.jpg');
    scene.text('Vasan puts one hand over your throat, slowly choking you out while he rubs his cock against your lips impatiently. His other hand goes behind your head, and he thrusts his cock into your mouth when you try to gasp for breath.');
    scene.text('"That\'s right, whore… all you need is a little encouragement!" he laughs, and begins to fuck your mouth while he keeps choking you."');
    qspCall(s, 'arousal', 'bj', 3, 'rape', 'sub', 'humiliation', 'rough');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give in and do what he wants', goto: ['gopnew', 'tf'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Reluctantly part your lips', handler: (st: GameState) => {
    if ((!((s as any).vasansex ?? 0))) {
      (s as any).vasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    scene.img('images/locations/city/residential/street/sex/rapebj1.jpg');
    scene.text('You stare it down for another while, but realize they\'re not going to let you go until they\'re satisfied.');
    scene.text('You hesitantly part your lips a little, and take the bulbous purple head of his cock between your lips. You suck on it a little without much enthusiasm, which he notices immediately.');
    scene.text('"What is this garbage? Put some effort into it, slut! Or else…" he grunts.');
    qspCall(s, 'arousal', 'bj', 3, 'rape', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Put some effort into it', goto: ['gopnew', 'tf'] },
      { label: 'Keep doing what you\'re doing', goto: ['gopnew', 'tf'] },
    ]);
  } },
    { label: 'Lick his dick with your tongue', handler: (st: GameState) => {
    if ((!((s as any).vasansex ?? 0))) {
      (s as any).vasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
    ((s as any).stat ?? {})['bj'] = (((s as any).stat ?? {})['bj'] ?? 0) + (1);
    scene.img('images/locations/city/residential/street/sex/rapebj2.jpg');
    scene.text('You open your mouth but don\'t take his cock in your mouth. Instead you run your tongue up and down his shaft repeatedly, without much enthusiasm.');
    scene.text('"What is this garbage? Put some effort into it, slut! Or else…" he grunts.');
    qspCall(s, 'arousal', 'foreplay', 3, 'rape', 'sub', 'humiliation');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Start sucking', goto: ['gopnew', 'tf'] },
      { label: 'Keep licking', goto: ['gopnew', 'tf'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTf(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/street/sex/rapebjt2.jpg');
  scene.text('Vasan grabs a fistful of your hair and begins to fuck your mouth in earnest. His cock causes a gag reflex every time he hits the back of your throat, and your eyes are tearing up quickly.');
  scene.text('He\'s not giving you much chance to breathe, and you\'re gasping for breath every time he gives you a bit of a break to breathe. They never last long.');
  qspCall(s, 'arousal', 'bj', 3, 'rape', 'sub', 'humiliation', 'rough', 'deepthroat');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/street/sex/rapebjt.jpg');
    scene.text('Suddenly Vasan thrusts his cock deeper down your throat, and holds your head firmly against his groin once he bottoms out in you.');
    scene.text('You feel like you\'re going to throw up!');
    qspCall(s, 'arousal', 'bj', 3, 'rape', 'sub', 'humiliation', 'rough', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'boyStat', 'A102');
    (s as any).spafinloc = 11;
    qspCall(s, 'cum_manage', '');
    if (((s as any).pcs_makeup ?? 0) !== 1) {
      (s as any).pcs_makeup = 0;
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/sex/rapebjcum.jpg');
    scene.text('Then, just as sudden as when he began deepthroating you, Vasan pulls his cock out of your mouth and begins to cum on your face. Your entire face is covered with sperm by the time he\'s done!');
    scene.text('"What are you waiting for, whore?" he grunts, when he\'s finished. "Clean me up with your tongue!"');
    scene.actions([
      { label: 'Lick his cock with your tongue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/street/sex/rapebjcum2.jpg');
    scene.text('You close your eyes as you close your lips around the head of his cock again, not wanting to look him in the eye while you swallow his load and lick him clean.');
    // TODO-QSP: dynamic text: "Vasan pulls his cock away when he's bored of it, and says: "Listen up, whore. Y...
    scene.text(`"Vasan pulls his cock away when he's bored of it, and says: "Listen up, whore. You just got yourself into a heap of trouble. As an apology, you will bring me ${qspFunc(s, 'money', 'string_debt_addition', 2000)} every day for as long as I want. I will fuck you whenever I want as well, got that?"`);
    // TODO-QSP: dynamic text: The amount dazzles you - <<$func('money', 'string_debt_addition', 2000)>> every ...
    scene.text(`The amount dazzles you - ${qspFunc(s, 'money', 'string_debt_addition', 2000)} every day!? How are you supposed to get that kind of money?`);
    scene.text('"Don\'t even try to hide from me, whore. I will find you. You\'re mine! I will fucking end you if you don\'t keep coming, understood?"');
    scene.actions([
      { label: 'Nod meekly', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).gnewQW = 5;
    scene.img('images/locations/city/residential/street/sex/spit.jpg');
    scene.text('You nod meekly, anything to get out of here! Maybe you can avoid him later?');
    scene.text('Vasan grabs your face in his hands and forces your mouth open, spitting in your mouth as he says: "That goes for my buddies as well! If they want to have fun with you, you do as they say!"');
    scene.text('Then he grins to his friends: "She\'s all yours, guys. Have fun."');
    scene.text('Just when they came closer to you pulling their cocks out of their pants, you hear shouting at the end of the alley. Someone spotted you!');
    // TODO-QSP: dynamic text: The Gopniks quickly run away, leaving you alone on the pavement covered in cum, ...
    scene.text(`The Gopniks quickly run away, leaving you alone on the pavement covered in cum, saliva and tears. "Remember, whore… ${qspFunc(s, 'money', 'string_debt_addition', 2000)}! Tomorrow!" Vasan shouts, before he disappears around a corner.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the streets', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
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

function enterDolg(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).gnewQW = 7;
  // TODO-QSP: gs 'money', 'debt_add', 'gopdolg', money + stolmoney + (karta - bankDebtLimit) + 10000
  (s as any).gopdaydolg = ((s as any).daystart ?? 0) + 10;
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  // TODO-QSP: dynamic text: Vasan says: "After 10 days, you will give us… let's say we're even at <<$func('m...
  scene.text(`Vasan says: "After 10 days, you will give us… let's say we're even at ${qspFunc(s, 'money', 'string_debt', ((s as any).gopdolg ?? 0))}. I don't care how you get it, or where you get it, but you <b>will</b> get it if you know what's good for you. If you can't pay you're ours."`);
  // TODO-QSP: dynamic text: You feel dazzled when you hear the amount - <<$func('money', 'string_debt', gopd...
  scene.text(`You feel dazzled when you hear the amount - ${qspFunc(s, 'money', 'string_debt', ((s as any).gopdolg ?? 0), 1)}! How the hell are you supposed to gather than in ten days?`);
  // TODO-QSP: dynamic text: "We will find you if you don't pay, <<$pcs_nickname>>. Don't bother trying to hi...
  scene.text(`"We will find you if you don't pay, ${((s as any).pcs_nickname ?? 0)}. Don't bother trying to hide from us," Konstantin says with a mean grin on his face."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave while you can', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Tell them you can\'t gather that much money', handler: (st: GameState) => {
    scene.text('"Guys, come on!" you plead. "I can\'t gather that amount on such short notice!"');
    scene.text('Not my problem," Vasan shrugs. "Perhaps you can earn it with your body, eh? You seem to be good at that…"');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Ask if there is another way', handler: (st: GameState) => {
    scene.text('"Come on, please! Surely we can work something out!" you beg.');
    scene.text('"How about you pay us directly with your body? I guess I wouldn\'t mind a good fuck every now and then, and neither would my buddies! Fine… forget about the money, but you\'re ours to fuck whenever we want. Deal?" Vasan grins.');
    // TODO-QSP: dynamic text: The large bulge in his groin tells you he wants you to start 'paying' right away...
    scene.text(`The large bulge in his groin tells you he wants you to start 'paying' right away, if you say yes. It might be your only way out, though… how are you going to gather ${qspFunc(s, 'money', 'string_debt', ((s as any).gopdolg ?? 0))} in ten days?`);
    scene.actions([
      { label: 'Refuse, maybe you can get the money after all', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Agree to let them fuck you whenever they want', handler: (st: GameState) => {
    (s as any).gnewQW = 6;
    (s as any).gopdolg = 0;
    (s as any).VasanTut = 3;
  }, goto: ['gopnew', 'sexstart'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexstart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/residential/street/gopnews.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  if (((s as any).opusk ?? 0) > 0  ||  ((s as any).gnewQW ?? 0) === 5  ||  ((s as any).gnewQW ?? 0) === 6  ||  ((s as any).sipovka ?? 0) > 0) {
    if (((s as any).GLust ?? 0) === 1) {
      qspCall(s, 'gopnew', 'sexboy');
    }
    if (((s as any).GLust ?? 0) === 2  ||  ((s as any).GLust ?? 0) === 3) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', '2'] }]);
    }
    if (((s as any).GLust ?? 0) > 3) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', '3'] }]);
    }
  } else {
    if ((((s as any).opusk ?? 0) === 0  &&  ((s as any).sipovka ?? 0) === 0)  ||  ((s as any).gnewQW ?? 0) > 5) {
      if (((s as any).GLust ?? 0) === 2) {
        scene.text('Two Gopniks stand up and motion for you to come with them to the secluded area. They want to fuck you.');
        scene.actions([
          { label: 'Let the two of them fuck you', handler: (st: GameState) => {
    (st as any).gnewQW = 6;
  }, goto: ['gopnew', '2'] },
        ]);
      } else {
        if (((s as any).GLust ?? 0) === 3) {
          scene.text('Three Gopniks stand up and motion for you to come with them to the secluded area. They want to fuck you.');
          scene.actions([
            { label: 'Let the three of them fuck you', handler: (st: GameState) => {
    (st as any).gnewQW = 6;
  }, goto: ['gopnew', '2'] },
          ]);
        } else {
          if (((s as any).GLust ?? 0) === 4) {
            scene.text('Four Gopniks stand up and motion for you to come with them to the secluded area. They want to fuck you.');
            scene.actions([
              { label: 'Let the four of them fuck you', handler: (st: GameState) => {
    (st as any).gnewQW = 6;
  }, goto: ['gopnew', '3'] },
            ]);
          } else {
            if (((s as any).GLust ?? 0) === 5) {
              scene.text('Five Gopniks stand up and motion for you to come with them to the secluded area. They want to fuck you.');
              scene.actions([
                { label: 'Let the five of them fuck you', handler: (st: GameState) => {
    (st as any).gnewQW = 6;
  }, goto: ['gopnew', '3'] },
              ]);
            } else {
              if (((s as any).GLust ?? 0) === 6) {
                scene.text('The complete group of Gopniks stand up in unison and motion for you to come with them to the secluded area. They want to fuck you.');
                scene.actions([
                  { label: 'Let all six of them fuck you', handler: (st: GameState) => {
    (st as any).gnewQW = 6;
  }, goto: ['gopnew', '3'] },
                ]);
              } else {
                if (((s as any).VasanTut ?? 0) === 2) {
                  scene.text('Vasan looks at you intently and suggests: "I want you… come on, let\'s go fuck."');
                  scene.actions([
                    { label: 'Go with Vasan', handler: (st: GameState) => {
    (st as any).VasanTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
  } },
                  ]);
                } else {
                  if (((s as any).BerezaTut ?? 0) === 2) {
                    scene.text('Bereza gives you a sly grin and says: "I need to blow off some steam… how about you give me a hand?"');
                    scene.actions([
                      { label: 'Go with Bereza', handler: (st: GameState) => {
    (st as any).BerezaTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
  } },
                    ]);
                  } else {
                    if (((s as any).VitekTut ?? 0) === 2) {
                      // TODO-QSP: dynamic text: Konstantin mentions: "I could go for a fuck… how about it, <<$pcs_nickname>>?"
                      scene.text(`Konstantin mentions: "I could go for a fuck… how about it, ${((s as any).pcs_nickname ?? 0)}?"`);
                      scene.actions([
                        { label: 'Go with Konstantin', handler: (st: GameState) => {
    (st as any).VitekTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
  } },
                      ]);
                    } else {
                      if (((s as any).KostilTut ?? 0) === 2) {
                        // TODO-QSP: dynamic text: Kostil has a serious boner tenting in his pants. When he sees you look at it, he...
                        scene.text(`Kostil has a serious boner tenting in his pants. When he sees you look at it, he hisses: "This is all your fault, ${((s as any).pcs_nickname ?? 0)}… how about you take care of it?"`);
                        scene.actions([
                          { label: 'Go with Kostil', handler: (st: GameState) => {
    (st as any).KostilTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
  } },
                        ]);
                      } else {
                        if (((s as any).UdmurtTut ?? 0) === 2) {
                          scene.text('Udmurt suggests: "Are you as hot as I am? Let\'s go blow off some steam together…"');
                          scene.actions([
                            { label: 'Go with Udmurt', handler: (st: GameState) => {
    (st as any).UdmurtTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
  } },
                          ]);
                        } else {
                          scene.text('You can tell Gray is horny, and try to avoid his gaze. Nevertheless, he flashes you his golden smile once he catches sight of you and orders you: "You, girl. You\'ll do. Come with me."');
                          scene.actions([
                            { label: 'Go with Gray', handler: (st: GameState) => {
    (st as any).SeriTut = 3;
    qspCall(st, 'gopnew', 'sexboy1');
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
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterSexboy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VasanTut ?? 0) === 2) {
    if ((!((s as any).vasansex ?? 0))) {
      (s as any).vasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).BerezaTut ?? 0) === 2) {
    if ((!((s as any).berezasex ?? 0))) {
      (s as any).berezasex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).VitekTut ?? 0) === 2) {
    if ((!((s as any).viteksex ?? 0))) {
      (s as any).viteksex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).KostilTut ?? 0) === 2) {
    if ((!((s as any).kostilsex ?? 0))) {
      (s as any).kostilsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).UdmurtTut ?? 0) === 2) {
    if ((!((s as any).udmurtsex ?? 0))) {
      (s as any).udmurtsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).SeriTut ?? 0) === 2) {
    if ((!((s as any).serisex ?? 0))) {
      (s as any).serisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  (s as any).gsbrand = Math.floor(Math.random() * 3) + 0;
  if ((!((s as any).gsbrand ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['gopnew', '1'] }]);
  } else {
    if (((s as any).gsbrand ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['gopnew', '11'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gopnew', '12'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexboy1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).VasanTut ?? 0) === 3) {
    if ((!((s as any).vasansex ?? 0))) {
      (s as any).vasansex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).BerezaTut ?? 0) === 3) {
    if ((!((s as any).berezasex ?? 0))) {
      (s as any).berezasex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).VitekTut ?? 0) === 3) {
    if ((!((s as any).viteksex ?? 0))) {
      (s as any).viteksex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).KostilTut ?? 0) === 3) {
    if ((!((s as any).kostilsex ?? 0))) {
      (s as any).kostilsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).UdmurtTut ?? 0) === 3) {
    if ((!((s as any).udmurtsex ?? 0))) {
      (s as any).udmurtsex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  if (((s as any).SeriTut ?? 0) === 3) {
    if ((!((s as any).serisex ?? 0))) {
      (s as any).serisex = 1;
      (s as any).guy = ((s as any).guy ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Suggest he fucks you', goto: ['gopnew', '1'] },
    { label: 'Suck his dick', goto: ['gopnew', '11'] },
    { label: 'Suggest he fucks your ass', goto: ['gopnew', '12'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'boyStat', '', ((s as any).guygop ?? 0));
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 6) + 1;
  scene.img(`images/locations/city/residential/street/sex/gopslut${((s as any).picrand ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <<$boydesc>> guides you to a secluded area between some buildings, where he know...
  scene.text(`${((s as any).boydesc ?? 0)} guides you to a secluded area between some buildings, where he knows you won't be disturbed.`);
  scene.text('He unceremoniously pushes you down and quickly pulls your clothes to the side, not even bothering to undress you while he fucks you quickly.');
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('You were not satisfied.');
  } else {
    scene.text('You orgasm with him, holding your hand over your mouth to stop yourself from crying out.');
  }
  // TODO-QSP: dynamic text: <<$boydesc>> wipes his cock on your ass cheeks and tucks it back into his pants....
  scene.text(`${((s as any).boydesc ?? 0)} wipes his cock on your ass cheeks and tucks it back into his pants. After that, he goes back to drinking beer with his friends, not paying any more attention to you.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub', 'humiliation');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  qspCall(s, 'boyStat', '', ((s as any).guygop ?? 0));
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 10) + 13;
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <<$boydesc>> guides you to a quiet area, and waits impatiently for you to pull h...
  scene.text(`${((s as any).boydesc ?? 0)} guides you to a quiet area, and waits impatiently for you to pull his cock out of his pants. He groans contently when you begin to suck him off diligently. A few minutes later, he groans that he's about to cum.`);
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'humiliation');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your mouth', handler: (st: GameState) => {
    qspCall(s, 'boyStat', '', ((s as any).guygop ?? 0));
    (s as any).picrand = Math.floor(Math.random() * 10) + 20;
    scene.img(`images/shared/sex/cum/mouth/cum${((s as any).picrand ?? 0)}.jpg`);
    scene.text('Several powerful jets of sperm land in your mouth, and you keep sucking until you\'re sure he\'s finished.');
    // TODO-QSP: dynamic text: You show him the load you caught in your mouth, earning yourself a satisfied gri...
    scene.text(`You show him the load you caught in your mouth, earning yourself a satisfied grin from ${((s as any).boydesc ?? 0)}.`);
    scene.actions([
      { label: 'Swallow his load', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    // TODO-QSP: dynamic text: You swallow <<$boydesc>>'s sperm diligently after which he wipes his dick on you...
    scene.text(`You swallow ${((s as any).boydesc ?? 0)}'s sperm diligently after which he wipes his dick on your lips, making you lick the last remains off. Once he's satisfied, he pulls his pants up again and returns to his friends.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Spit it out', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0));
    // TODO-QSP: dynamic text: You wait for <<$boydesc>> to turn his back on you, and discreetly spit the semen...
    scene.text(`You wait for ${((s as any).boydesc ?? 0)} to turn his back on you, and discreetly spit the semen onto the ground. He doesn't seem to care what you do with it, he's already walking away from you.`);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    (s as any).bjrand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).bjrand ?? 0))) {
      // TODO-QSP: dynamic text: You catch his signals on time, and even manage to move out of the way while you ...
      scene.text(`You catch his signals on time, and even manage to move out of the way while you jerk him to an orgasm. ${((s as any).boydesc ?? 0)}'s sperm flies past you and lands on the ground, a short distance away.`);
    } else {
      if (((s as any).bjrand ?? 0) === 1) {
        qspCall(s, 'boyStat', '', ((s as any).guygop ?? 0));
        (s as any).spafinloc = 11;
        qspCall(s, 'cum_manage', '');
        (s as any).picrand = Math.floor(Math.random() * 5) + 11;
        scene.img(`images/shared/sex/cum/facial/facial${((s as any).picrand ?? 0)}.jpg`);
        // TODO-QSP: dynamic text: You're too late to avoid getting <<$boydesc>>'s sperm on you, and his load ends ...
        scene.text(`You're too late to avoid getting ${((s as any).boydesc ?? 0)}'s sperm on you, and his load ends up all over your face.`);
        scene.text('He wipes the last remains of sperm off onto your cheek, and makes you lick his cock clean before tucking it back into his pants. Then he leaves, no longer caring about what you do.');
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  qspCall(s, 'boyStat', '', ((s as any).guygop ?? 0));
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 6) + 1;
  scene.img(`images/locations/city/residential/street/sex/gopslut${((s as any).picrand ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <<$boydesc>> guides you to a secluded area between some buildings, where he know...
  scene.text(`${((s as any).boydesc ?? 0)} guides you to a secluded area between some buildings, where he knows you won't be disturbed.`);
  scene.text('He unceremoniously pushes you down and quickly pulls your clothes to the side, not even bothering to undress you while he slides his cock inside your ass. He\'s going a bit faster than you would like, and you have to do your best to keep quiet and not alert anyone.');
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('He doesn\'t care about your pleasure, and you\'re nowhere near satisfied by the time he finishes.');
  } else {
    scene.text('You orgasm with him, holding your hand over your mouth to stop yourself from crying out.');
  }
  // TODO-QSP: dynamic text: <<$boydesc>> pulls out right before he orgasms, and ends up spraying his sperm a...
  scene.text(`${((s as any).boydesc ?? 0)} pulls out right before he orgasms, and ends up spraying his sperm all over your ass cheeks. He wipes his cock clean on an unsoiled spot on your ass and tucks it back into his pants, returning to his friends for another beer. He no longer cares what you do or where you go next.`);
  qspCall(s, 'arousal', 'anal', 15, 'sub', 'humiliation');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  if (((s as any).GLust ?? 0) !== 2) {
    (s as any).tiprand = Math.floor(Math.random() * 2) + 0;
  }
  if (((s as any).tiprand ?? 0) === 0  &&  ((s as any).GLust ?? 0) !== 2) {
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
    (s as any).namgopctnc = 6;
    // TODO-QSP: :goptipr0loop
    if (((s as any).namgop ?? 0)?.[String((s as any).namgopctnc ?? 0)] === '') {
      (s as any).namgopctnc = ((s as any).namgopctnc ?? 0) - (1);
      if (((s as any).namgopctnc ?? 0) > 0) {
        // TODO-QSP: jump 'goptipr0loop'
      }
    } else {
      // TODO-QSP: gs 'boyStat', 'A' + $str(101 + namgopctnc)
      (s as any).sexpartkno = 1;
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        (s as any).spafinloc = 12;
      } else {
        (s as any).spafinloc = 11;
      }
      qspCall(s, 'cum_manage', '');
      (s as any).GLust = ((s as any).GLust ?? 0) - (1);
      if (((s as any).GLust ?? 0) > 0) {
        // TODO-QSP: jump 'goptipr0loop'
      }
    }
    qspCall(s, 'stat', '');
    (s as any).picrand = Math.floor(Math.random() * 11) + 1;
    scene.img(`images/shared/sex/group/tri${((s as any).picrand ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: <<$namgop[0]>>. The guys make you kneel before them, and begin to slap their coc...
    scene.text(`${qspUntranslated(s, "namgop[0]", { location: "gopnew" })}. The guys make you kneel before them, and begin to slap their cocks against your face impatiently. You do your best to pay attention to all of them, sucking them off one by one and jerking off those you can't put in your mouth.`);
    scene.text('They cum all over your face and in your mouth, and your face looks like a mess by the time they finally let you go.');
    qspCall(s, 'arousal', 'bj', (-15), 'sub', 'humiliation', 'gangbang');
    qspCall(s, 'arousal', 'hj', (-15), 'sub', 'humiliation', 'gangbang');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } else {
    if (((s as any).tiprand ?? 0) === 1  ||  ((s as any).GLust ?? 0) === 2) {
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 5);
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
      (s as any).namgopctnc = 6;
      // TODO-QSP: :goptipr1loop
      if (((s as any).namgop ?? 0)?.[String((s as any).namgopctnc ?? 0)] === '') {
        (s as any).namgopctnc = ((s as any).namgopctnc ?? 0) - (1);
        if (((s as any).namgopctnc ?? 0) > 0) {
          // TODO-QSP: jump 'goptipr1loop'
        }
      } else {
        // TODO-QSP: gs 'boyStat', 'A' + $str(101 + namgopctnc)
        (s as any).sexpartkno = 1;
        if ((!(Math.floor(Math.random() * 4) + 0))) {
          (s as any).cumprecheck = 1;
          qspCall(s, 'cum_manage', '');
        }
        (s as any).temprand = Math.floor(Math.random() * 6) + 0;
        if ((!((s as any).temprand ?? 0))) {
          (s as any).spafinloc = 14;
        } else {
          if (((s as any).temprand ?? 0) === 1) {
            (s as any).spafinloc = 3;
          } else {
            if (((s as any).temprand ?? 0) === 2) {
              (s as any).spafinloc = 12;
            } else {
              if (((s as any).temprand ?? 0) === 3) {
                (s as any).spafinloc = 8;
              } else {
                if (((s as any).temprand ?? 0) === 4) {
                  (s as any).spafinloc = 15;
                }
              }
            }
          }
        }
        qspCall(s, 'cum_manage', '');
        (s as any).GLust = ((s as any).GLust ?? 0) - (1);
        if (((s as any).GLust ?? 0) > 0) {
          // TODO-QSP: jump 'goptipr1loop'
        }
      }
      qspCall(s, 'stat', '');
      (s as any).picrand = Math.floor(Math.random() * 14) + 2;
      scene.img(`images/shared/sex/group/gang${((s as any).picrand ?? 0)}.jpg`);
      // TODO-QSP: dynamic text: <<$namgop[0]>>. The guys begin to fuck you in all of your holes at the same time...
      scene.text(`${qspUntranslated(s, "namgop[0]", { location: "gopnew" })}. The guys begin to fuck you in all of your holes at the same time!`);
      (s as any).horand = Math.floor(Math.random() * 100) + 1;
      if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        scene.text('The guys don\'t care about your pleasure, and you\'re nowhere near satisfied by the time they all finish.');
      } else {
        scene.text('You orgasm during their relentless pounding, holding your hand over your mouth to stop yourself from crying out loud.');
      }
      scene.text('The guys just cum wherever they feel like while they\'re fucking you, giving you no warning. By the time they all finish, you\'re a mess. You should probably go take a shower…');
      qspCall(s, 'arousal', 'bj', (-15), 'sub', 'humiliation', 'gangbang');
      qspCall(s, 'arousal', 'vaginal', (-15), 'sub', 'humiliation', 'gangbang');
      qspCall(s, 'arousal', 'anal', (-15), 'sub', 'humiliation', 'gangbang');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 5);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
  (s as any).namgopctnc = 6;
  // TODO-QSP: :goptipr2loop
  if (((s as any).namgop ?? 0)?.[String((s as any).namgopctnc ?? 0)] === '') {
    (s as any).namgopctnc = ((s as any).namgopctnc ?? 0) - (1);
    if (((s as any).namgopctnc ?? 0) > 0) {
      // TODO-QSP: jump 'goptipr2loop'
    }
  } else {
    // TODO-QSP: gs 'boyStat', 'A' + $str(101 + namgopctnc)
    (s as any).sexpartkno = 1;
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      (s as any).cumprecheck = 1;
      qspCall(s, 'cum_manage', '');
    }
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      (s as any).spafinloc = 11;
    } else {
      (s as any).spafinloc = 12;
    }
    qspCall(s, 'cum_manage', '');
    (s as any).GLust = ((s as any).GLust ?? 0) - (1);
    if (((s as any).GLust ?? 0) > 0) {
      // TODO-QSP: jump 'goptipr2loop'
    }
  }
  qspCall(s, 'stat', '');
  (s as any).picrand = Math.floor(Math.random() * 14) + 2;
  scene.img(`images/shared/sex/group/gang${((s as any).picrand ?? 0)}.jpg`);
  // TODO-QSP: dynamic text: <<$namgop[0]>>. The guys begin to fuck you in all of your holes at the same time...
  scene.text(`${qspUntranslated(s, "namgop[0]", { location: "gopnew" })}. The guys begin to fuck you in all of your holes at the same time!`);
  scene.text('They swap positions from time to time, making sure to finish in your mouth or on your face.');
  (s as any).horand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).horand ?? 0) > ((s as any).pcs_horny ?? 0)) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('The guys don\'t care about your pleasure, and you\'re nowhere near satisfied by the time they all finish.');
  } else {
    scene.text('You orgasm during their relentless pounding, holding your hand over your mouth to stop yourself from crying out loud.');
  }
  qspCall(s, 'arousal', 'bj', (-15), 'sub', 'humiliation', 'gangbang');
  qspCall(s, 'arousal', 'vaginal', (-15), 'sub', 'humiliation', 'gangbang');
  qspCall(s, 'arousal', 'anal', (-15), 'sub', 'humiliation', 'gangbang');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterDegrading(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 10);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 10);
  (s as any).gopopusday = ((s as any).daystart ?? 0);
  qspCall(s, 'pain', '', 6, 'cheeks', 'slap');
  qspCall(s, 'pain', '', 6, 'breasts', 'slap');
  qspCall(s, 'pain', '', 6, 'vaginal', 'stretch');
  qspCall(s, 'pain', '', 6, 'anal', 'stretch');
  qspCall(s, 'stat', '');
  if (((s as any).VasanTut ?? 0) === 2  &&  (!((s as any).vasansex ?? 0))) {
    (s as any).vasansex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).BerezaTut ?? 0) === 2  &&  (!((s as any).berezasex ?? 0))) {
    (s as any).berezasex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).VitekTut ?? 0) === 2  &&  (!((s as any).viteksex ?? 0))) {
    (s as any).viteksex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).KostilTut ?? 0) === 2  &&  (!((s as any).kostilsex ?? 0))) {
    (s as any).kostilsex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).UdmurtTut ?? 0) === 2  &&  (!((s as any).udmurtsex ?? 0))) {
    (s as any).udmurtsex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).SeriTut ?? 0) === 2  &&  (!((s as any).serisex ?? 0))) {
    (s as any).serisex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  scene.img('images/locations/city/residential/street/sex/deg\'+rand(1, 9)+\'.jpg');
  scene.text('The guys drive you to a nearby building and drag you inside, forcing you to undress. They spend the next two hours degrading you in every way imaginable: they slap your face and tits, they spit in your face, but most of the time they try to force large objects into your vagina and ass. By the time you\'re exhausted, they pick you up and dump you in the back yard with your clothes. When you catch your breath again, you slowly put your clothes on and try to find your way back to the main streets.');
  qspCall(s, 'arousal', 'vaginal', 120, 'sub', 'humiliation', 'gangbang', 'rape');
  qspCall(s, 'arousal', 'anal', (-120), 'sub', 'humiliation', 'gangbang', 'rape');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterChoice_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'rape', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Try to flee [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Flee [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).gopnew ?? {})['ran'] = (((s as any).gopnew ?? {})['ran'] ?? 0) + (1);
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('desc');
    scene.actions([
      { label: 'Continue', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow them to an isolated area', goto: ['gopnew', 'bazar'] },
    { label: 'Fight them all', handler: (st: GameState) => {
    qspCall(s, 'fight', 'initFight');
    qspCall(s, 'fight_npcdata', 'gopnews_1', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_2', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_3', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_4', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_5', 'opp');
    qspCall(s, 'fight_npcdata', 'gopnews_6', 'opp');
    (s as any).fightEnding = 21;
  }, goto: ['fight', 'start'] },
  ]);
  scene.build();
}

function enterSuccubusOption(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'succubus', 'active', 5)) {
    scene.actions([
      { label: 'Feed off of them  [+$func(\'wrap\', \'neg\', \'(Succubus)\')]', handler: (st: GameState) => {
    ((s as any).gopnew ?? {})['feed'] = 1;
  }, goto: ['gopnew', 'succubus_1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSuccubus_1(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['city_residential', ''] }]);
  // TODO-QSP: end
  scene.build();
}

function enterMistress_1(s: GameState, scene: SceneBuilder): void {
  scene.text('The guys look warily at you, knowing they are no match for your fighting skills. You get a few terse nods but otherwise nobody will look you in the eye.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
    { label: 'Demand a beer', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/pc/activities/drinking/beer_1.jpg');
    scene.text('One of them hands you a beer, and you slam it before tossing the bottle down.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
      { label: 'Demand another beer', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.text('Another one gives you a second beer, still not looking at you. You slam it down too, and then throw it down hard. The sound of the bottle shattering makes them all flinch, but otherwise gets no reaction.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoward_1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).gopnew ?? 0)?.['ran'] === 1) {
    scene.text('As soon as they notice you, you remember you weren\'t supposed to come here again. They jump to their feet and start walking towards you with a dangerous look in their eyes, leaving you only a few moments to decide what you\'re going to do…');
  } else {
    scene.text('As soon as they notice you, you remember you weren\'t supposed to come here again. They start making jokes to each other about how you\'re a coward, not even bothering to get up this time. That could change fast though, if you don\'t get out of here while you still can.');
  }
  qspCall(s, 'gopnew', 'choice_1');
  // TODO-QSP: end
  scene.build();
}

function enterFightWin(s: GameState, scene: SceneBuilder): void {
  ((s as any).gopnew ?? {})['fight'] = 1;
  qspCall(s, 'money', 'earn', Math.floor(Math.random() * 51) + 50, 'cash');
  qspCall(s, 'stat', '');
  scene.text('The last one goes down, unable to stand up to you. With a shrug, you start going through their pockets, pocketing any money you find. Finished, you saunter out of the alley, feeling like nothing can stop you today!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterFightLost(s: GameState, scene: SceneBuilder): void {
  ((s as any).gopnew ?? {})['fight'] = (-1);
  qspCall(s, 'stat', '');
  scene.text('You hit the ground hard, the guys stand over you looking down, and you know you\'re in trouble now! Carefully you get to your feet, clinging to the hope you can escape but knowing this won\'t end well.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask what they want from you', goto: ['gopnew', 'bazar'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'start0':
      enterStart0(s, scene);
      break;
    case 'start1':
      enterStart1(s, scene);
      break;
    case 'start2':
      enterStart2(s, scene);
      break;
    case 'start3':
      enterStart3(s, scene);
      break;
    case 'start4':
      enterStart4(s, scene);
      break;
    case 'start5':
      enterStart5(s, scene);
      break;
    case 'start6':
      enterStart6(s, scene);
      break;
    case 'start7':
      enterStart7(s, scene);
      break;
    case 'pivas_content':
      enterPivasContent(s, scene);
      break;
    case 'pivas':
      enterPivas(s, scene);
      break;
    case 'bazar':
      enterBazar(s, scene);
      break;
    case 'rapebj':
      enterRapebj(s, scene);
      break;
    case 'tf':
      enterTf(s, scene);
      break;
    case 'dolg':
      enterDolg(s, scene);
      break;
    case 'sexstart':
      enterSexstart(s, scene);
      break;
    case 'sexboy':
      enterSexboy(s, scene);
      break;
    case 'sexboy1':
      enterSexboy1(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case 'degrading':
      enterDegrading(s, scene);
      break;
    case 'choice_1':
      enterChoice_1(s, scene);
      break;
    case 'succubus_option':
      enterSuccubusOption(s, scene);
      break;
    case 'succubus_1':
      enterSuccubus_1(s, scene);
      break;
    case 'mistress_1':
      enterMistress_1(s, scene);
      break;
    case 'coward_1':
      enterCoward_1(s, scene);
      break;
    case 'fight_win':
      enterFightWin(s, scene);
      break;
    case 'fight_lost':
      enterFightLost(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gopnew: LocationDef = {
  name: 'gopnew',
  title: '(Succubus)',
  region: 'other',
  enter: enter,
};
