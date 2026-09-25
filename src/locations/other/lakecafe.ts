import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'main';
  (s as any).loc = 'lakecafe';
  (s as any).menu_loc = 'lakecafe';
  (s as any).menu_arg = 'main';
  (s as any).location_type = 'public_indoors';
  (s as any).barrnd = (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>The Lake Cafe</b></center>');
  scene.img('images/locations/city/industrial/bbq/lakecafe.jpg');
  scene.text('An old-fashioned BBQ café/diner near the lake, known for offering relatively cheap but tasty meals.');
  scene.text('\'Opening hours are from 14:00 until 4:00\'');
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    if (((s as any).npc_QW ?? 0)?.['A89'] === 0) {
      if (((s as any).barrnd ?? 0) === 1) {
        scene.text('You see a smiling <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">barmaid</a> behind the bar polishing some glasses.');
      }
      if (((s as any).barrnd ?? 0) === 2) {
        scene.text('When you walk into the diner, you see a smiling <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">barmaid</a> picking up some dirty dishes and cleaning a table.');
      }
      if (((s as any).barrnd ?? 0) === 3) {
        scene.text('You see a smiling <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">barmaid</a> behind the bar skillfully making some drinks.');
      }
    } else {
      if (((s as any).npc_QW ?? 0)?.['A89'] >= 1) {
        if (((s as any).barrnd ?? 0) === 1) {
          scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">Eugene</a> behind the bar with that perpetual smile on her face. She\'s currently polishing some glasses.');
        }
        if (((s as any).barrnd ?? 0) === 2) {
          scene.text('You walk into the diner and see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">Eugene</a> with that perpetual smile on her face collecting dirty dishes from tables.');
        }
        if (((s as any).barrnd ?? 0) === 3) {
          scene.text('You see <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027barmensha\u0027); return false;">Eugene</a> behind the bar with that perpetual smile on her face. She\'s skillfully mixing some drinks.');
        }
      }
    }
    if (((s as any).week ?? 0) === 1  &&  ((s as any).hour ?? 0) === 22) {
      (s as any).LCWorkRand = (Math.floor(Math.random() * 6) + 1);
      if (((s as any).LCWorkRand ?? 0) === 1) {
        (s as any).randguycafe = (Math.floor(Math.random() * 4) + 3);
        if ((!((s as any).LCwork ?? 0))) {
          scene.text('A group of men are seated at one of the tables. They\'re talking loudly and laughing while having drinks.');
        }
        if (((s as any).LCwork ?? 0) === 1) {
          scene.text(`<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027LCwork/u0027, /u0027start1/u0027); return false;">${((s as any).randguycafe ?? '')} men</a> are seated at one of the tables. They're talking loudly and laughing while having drinks.`);
        }
      } else {
        if (((s as any).LCWorkRand ?? 0) === 2) {
          if ((!((s as any).LCwork ?? 0))) {
            scene.text('An older man is sitting at one of the tables, enjoying his meal.');
          }
          if (((s as any).LCwork ?? 0) === 1) {
            scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027LCwork\u0027, \u0027start2\u0027); return false;">An older man</a> is sitting at one of the tables, enjoying his meal.');
          }
        } else {
          if (((s as any).LCWorkRand ?? 0) === 3) {
            if ((!((s as any).LCwork ?? 0))) {
              scene.text('Two guys are sitting at one of the tables in a corner. They\'ve clearly had a few drinks already.');
            }
            if (((s as any).LCwork ?? 0) === 1) {
              scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027LCwork\u0027, \u0027start3\u0027); return false;">Two men</a> are sitting at one of the tables. They\'ve clearly had a few drinks already.');
            }
          } else {
            if (((s as any).LCWorkRand ?? 0) === 4) {
              if ((!((s as any).LCwork ?? 0))) {
                scene.text('A fairly young couple are seated at one of the tables having a lively discussion. The girl seems a bit embarrassed about something, while the guy exudes confidence.');
              }
              if (((s as any).LCwork ?? 0) === 1) {
                scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027LCwork\u0027, \u0027start4\u0027); return false;">A fairly young couple</a> are seated at one of the tables having a lively discussion. The girl seems a bit embarrassed about something, while the guy exudes confidence.');
              }
            } else {
              if (((s as any).LCWorkRand ?? 0) === 5) {
                if ((!((s as any).LCwork ?? 0))) {
                  scene.text('A woman sits by herself at one of the tables, enjoying a nice meal.');
                }
                if (((s as any).LCwork ?? 0) === 1) {
                  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027LCwork\u0027, \u0027start5\u0027); return false;">A woman</a> sits by herself at one of the tables, enjoying a nice meal.');
                }
              } else {
                if (((s as any).LCWorkRand ?? 0) === 6) {
                  if ((!((s as any).LCwork ?? 0))) {
                    scene.text('A fat man is sitting at one of the tables. He\'s loudly talking on his phone, receiving a few disgruntled looks from other diners.');
                  }
                  if (((s as any).LCwork ?? 0) === 1) {
                    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027LCwork\u0027, \u0027start6\u0027); return false;">A fat man</a> is sitting at one of the tables. He\'s loudly talking on his phone, receiving a few disgruntled looks from other diners.');
                  }
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).hour ?? 0) >= 23) {
      scene.text('Several <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027lakecafe\u0027, \u0027bandits\u0027); return false;">shady looking men</a> are sitting around a small table in a fairly secluded corner of the diner. They talk in hushed voices amongst each another, and look like they might very well be criminals.');
    }
    scene.text('The diner has a single <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027laketoilet\u0027, \u0027main\u0027); return false;">toilet</a> available, for both males and females.');
    scene.actions([
      { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    qspCall(st, 'food_menu', '');
  } },
      { label: 'Order take-out (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 350) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 350);
      qspGoto(st, 'food', 'fast_food');
    }
  } },
    ]);
  }
  if (((s as any).LCwork2 ?? 0) >= 1  &&  ((s as any).LCwork2day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 18) {
    scene.actions([
      { label: 'Help out in the kitchen', goto: ['lakecafe', 'Kitchen'] },
    ]);
  }
  scene.actions([
    { label: 'Leave the cafe', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_industrial', ''] },
  ]);
  scene.build();
}

function enterBarmensha(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  qspCall(s, 'stat', '');
  if (((s as any).npc_QW ?? 0)?.['A89'] > 0) {
    scene.text('<center><b>Barmaid Eugene</b></center>');
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    if (((s as any).npc_rel ?? 0)?.['A89'] < 20) {
      scene.text('You have a bad relationship with Eugene.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A89'] < 40) {
        scene.text('You have cold relations with Eugene.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A89'] < 60) {
          scene.text('You have a normal relationship with Eugene.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A89'] < 80) {
            scene.text('You have a good relationship with Eugene.');
          } else {
            scene.text('You have an excellent relationship with Eugene.');
          }
        }
      }
    }
  } else {
    scene.text('<center><b>Barmaid</b></center>');
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
  }
  if (((s as any).npc_QW ?? 0)?.['A89'] === 0) {
    scene.text('The barmaid gives you a warm smile as she looks you straight in the eyes. "Hi there! Can I get you anything?"');
    scene.actions([
      { label: 'Leave the barmaid so she can work', goto: ['lakecafe', 'main'] },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A89'] >= 1) {
      scene.text(`Eugene smiles as she sees you approach the bar and cheerfully greets you. "Hi ${((s as any).pcs_nickname ?? '')}! What's up?"`);
      scene.actions([
        { label: 'Leave Eugene so she can work', goto: ['lakecafe', 'main'] },
      ]);
    }
  }
  if (((s as any).hour ?? 0) >= 14  ||  ((s as any).hour ?? 0) < 4) {
    if (((s as any).npc_QW ?? 0)?.['A89'] === 0) {
      scene.actions([
        { label: 'Chat with the barmaid', handler: (st: GameState) => {
    ((st as any).npc_QW = (st as any).npc_QW ?? {})['A89'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    scene.text('You spend some time chatting with the barmaid. She\'s very open, and you learn a lot about her.');
    scene.text('Her name is Eugene, and she works here with her sister, Angela, who is a chef in the kitchen. They both work every day of the week, and wouldn\'t have it any other way.');
    scene.actions([
      { label: 'Continue', goto: ['lakecafe', 'barmensha'] },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_QW ?? 0)?.['A89'] >= 1) {
      scene.actions([
        { label: 'Chat with Eugene', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    if (((st as any).npc_rel ?? 0)?.['A89'] < 10) {
      scene.text('Eugene glares at you. "I have nothing to say to you."');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A89'] < 40  &&  (!((st as any).LCEugenefirst ?? 0))) {
        scene.text('You spend some time chatting with Eugene, getting to know her a little bit better. You chat about all sorts of things; your lives, work and current events.');
      } else {
        if (((st as any).lakepater ?? 0)[0] > 0) {
          scene.text('You spend time discussing family with Eugene.');
        } else {
          if ((Math.floor(Math.random() * 5) + 1) === 1  &&  ((st as any).LCEugenefirst ?? 0) > 0  &&  ((st as any).eugene_randy ?? 0) !== ((st as any).daystart ?? 0)) {
            (st as any).eugene_randy = ((st as any).daystart ?? 0);
            scene.text('Eugene smiles at you with a glimmer in her eye. You can see her clothing slightly bulging, making you think her cock is hard.');
            if (((st as any).LCknowslut ?? 0) > 0) {
              scene.text('She grabs your hand and starts to lead you to the back room.');
              scene.actions([
                { label: 'Resist', handler: (st: GameState) => {
    scene.img('images/pc/reactions/no.jpg');
    scene.text('"No!" you shout in resistance.');
    scene.text('She seems disappointed as she lets go of your hand.');
    scene.text(`"We both know what kind of girl you are, ${((st as any).pcs_nickname ?? '')}. Don't pretend you aren't."`);
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-5));
    scene.img('images/pc/reactions/no.jpg');
    scene.text('"I said no!" you fiercely reply.');
    scene.text('She seems annoyed with you. "What? Suddenly I\'m not good enough for you? Or do I need to pay for it? Never mind, just go."');
    scene.actions([
      { label: 'Continue', goto: ['lakecafe', 'barmensha'] },
    ]);
  } },
      { label: 'Relent', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 1);
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('You sigh. "Okay, fine."');
    scene.text('She smiles and takes you by the hand. "Don\'t worry, you won\'t regret this."');
    scene.actions([
      { label: 'Go with her', goto: ['eugeneev1', 'sex'] },
    ]);
  } },
    ]);
  } },
                { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 1);
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('You smile at her. "Sounds good to me."');
    scene.text('She smiles and leads you into the back.');
    scene.actions([
      { label: 'Go with her', goto: ['eugeneev1', 'sex'] },
    ]);
  } },
              ]);
            } else {
              scene.text(`"I seem to have a growing problem, ${((st as any).pcs_nickname ?? '')}. Could you help me out?"`);
              scene.actions([
                { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-1));
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('You shake your head. "Maybe another day. I\'m just not in the mood today." you reply.');
    scene.text('She lets go of your hand. "Okay, I understand. Maybe some other time." She goes back to work, but you can tell she is disappointed.');
    scene.actions([
      { label: 'Continue', goto: ['lakecafe', 'barmensha'] },
    ]);
  } },
                { label: 'Of course', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 1);
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('She smiles when you nod. "Okay, how about you follow me and we have some fun?" she says as she grabs your hand and leads you out to the back room.');
    qspGoto(st, 'eugeneev1', 'sex');
  } },
              ]);
            }
          } else {
            scene.text('You spend time chatting with Eugene. You chat about all sorts of things; your lives, work and current events.');
            if (((st as any).portfolio_people ?? 0)[6] !== 1  &&  ((st as any).LCEugenefirst ?? 0) > 0) {
              qspCall(st, 'camera', 'check_person', 'eugene');
              scene.actions([
                { label: 'Don\'t ask', goto: ['lakecafe', 'barmensha'] },
              ]);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['lakecafe', 'barmensha'] },
    ]);
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A89'] >= 40) {
      scene.actions([
        { label: 'Flirt with Eugene', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 3);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    if (((st as any).npc_rel ?? 0)?.['A89'] >= 60) {
      scene.text('You flirt with Eugene as you chat, tossing in as many double innuendos as you can.');
      scene.text('After a few minutes, she smiles wolfishly at you. "You want me, don\'t you?"');
      scene.text('She smiles when you nod. "How about you follow me out back and we have some fun?"');
      scene.text('You nod and follow Eugene, feeling your heart pound in your chest as you stare at her ass.');
      scene.actions([
        { label: 'Follow her', handler: (st: GameState) => {
    if ((!((st as any).LCEugenefirst ?? 0))) {
      qspGoto(st, 'eugeneev1', 'firsttime');
    }
    if (((st as any).LCEugenefirst ?? 0) === 1) {
      qspGoto(st, 'eugeneev1', 'sex');
    }
  } },
      ]);
    } else {
      scene.text('You flirt with Eugene as you chat, tossing in as many double innuendos as you can.');
      scene.text('She flirts back a little, but it\'s hard to tell if she\'s just being friendly or not. She\'s not given you a strong indication one way or the other yet.');
      scene.actions([
        { label: 'Continue', goto: ['lakecafe', 'barmensha'] },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A89'] >= 35) {
      scene.actions([
        { label: 'Ask about work', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    if (((st as any).LCworkwork2 ?? 0) < 1) {
      scene.text('"I\'m looking for a job. Would you happen to know about anything?" you ask Eugene with a smile.');
      scene.text(`'She ponders for a second before answering. "Actually, my sister always complains about how busy she is in the kitchen during the early evening hours. If you come between 18:00 and 19:00, you could probably help her out for a bit. We'd pay you ${qspFunc(s, 'money', 'string_profit', 300)} for your troubles!"'`);
      scene.text('You smile at and thank her, saying you\'ll keep it in mind.');
      (st as any).LCworkwork2 = 1;
      (st as any).LCwork2 = 1;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
      ]);
    } else {
      scene.text(`'When you ask Eugene about a job, she laughs. "Did you forget ${((st as any).pcs_nickname ?? '')}? I already told you that my sister could use some help in the kitchen! If you come between 18:00 and 19:00, you can help her out for a bit and we'll pay you ${qspFunc(s, 'money', 'string_profit', 300)} for your time."'`);
      scene.actions([
        { label: 'Thank her for the reminder', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
      ]);
    }
  } },
      ]);
    }
    if (((s as any).npc_rel ?? 0)?.['A89'] >= 80  &&  ((s as any).LCworkwork ?? 0) < 2) {
      scene.actions([
        { label: 'Ask about the special work', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bbq/lakebarmensha.jpg');
    if ((!((st as any).LCworkwork ?? 0))) {
      scene.text('You pull Eugene aside during a slow moment. "I\'ve overheard some of the customers talking fondly about a \'special\' service this diner has. What\'s that all about?"');
      if (((st as any).npc_love ?? 0)?.['A89'] > 80) {
        scene.text('Eugene blushes. "That\'s something some of the girls do here. It would hurt me to see you doing that though."');
      } else {
        if (((st as any).npc_love ?? 0)?.['A89'] > 60) {
          scene.text(`Eugene blushes. "That's something some of the girls do here. I don't think you should do it, ${((st as any).pcs_nickname ?? '')}."`);
          scene.actions([
            { label: 'Press for more information', handler: (st: GameState) => {
    scene.text('You press for more information, but Eugene seems to be hurt by your insistence. She begs you not to ask any more.');
    scene.actions([
      { label: 'Refuse to relent', handler: (st: GameState) => {
    ((st as any).npc_love = (st as any).npc_love ?? {})['A89'] = ((st as any).npc_love['A89'] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-20));
    scene.text(`'You refuse to relent and Eugene sighs. "All our regulars know that we 'arrange meetings' every Monday between 22:00 and 23:00. If you're here at that time and want to earn some money, introduce yourself to the person or group you want to service and say 'I'll be your waitress tonight.' They'll know what it means, but I beg you, please don't do it ${((st as any).pcs_nickname ?? '')}!"'`);
    scene.text('You see tears forming in her eyes.');
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Say you won\'t do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Say you won\'t do it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('Eugene seems relieved as she looks back at you.');
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}. I don't know what I would do if you were doing that…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).LCworkwork = 2;
    (st as any).LCwork = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    ((st as any).npc_love = (st as any).npc_love ?? {})['A89'] = ((st as any).npc_love['A89'] ?? 0) - (30);
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-40));
    (st as any).LCworkwork = 1;
    (st as any).LCwork = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'main');
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((st as any).npc_love ?? 0)?.['A89'] > 30) {
            scene.text(`Eugene blushes. "That's something some of the girls do here, but it's not something I would like to see you doing, ${((st as any).pcs_nickname ?? '')}."`);
            scene.actions([
              { label: 'Press for more information', handler: (st: GameState) => {
    scene.text('You press Eugene for more information and Eugene seems to be hurt by your insistence, but she reluctantly relents.');
    scene.text(`'"All our regulars know that we 'arrange meetings' every Monday between 22:00 and 23:00. If you're here at that time and want to earn some money, introduce yourself to the person or group you want to service and say 'I'll be your waitress tonight.' They'll know what it means. From what the girls told me, they get paid between ${qspFunc(s, 'money', 'string_profit', 500)} and ${qspFunc(s, 'money', 'string_profit', 1000)}."'`);
    scene.text('Before you leave, she adds "Please don\'t do it though. I\'m starting to care for you and…" She looks away from you before finishing her sentence.');
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Say you won\'t do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Say you won\'t do it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('Eugene seems relieved as she looks back at you.');
    scene.text(`"Thank you, ${((st as any).pcs_nickname ?? '')}. I don't know what I would do if you were doing that…"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).LCworkwork = 2;
    (st as any).LCwork = 0;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    ((st as any).npc_love = (st as any).npc_love ?? {})['A89'] = ((st as any).npc_love['A89'] ?? 0) - (5);
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-20));
    (st as any).LCworkwork = 1;
    (st as any).LCwork = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'main');
  } },
    ]);
  } },
            ]);
          } else {
            if ((!((st as any).LCknowslut ?? 0))) {
              scene.text('\'Eugene ponders for a minute before deciding that she can trust you. "We… we do offer special services, once a week. It\'s every Monday, at 22:00. I\'m not sure it\'s something you would be interested in though…"\'');
              scene.text('She confesses when she sees the confusion on your face. "It\'s… it\'s borderline prostitution, really. Some of the girls working here earn some extra money on the side by offering themselves to our customers after work. It happened sporadically at first, but then it became so popular that we organize a weekly event now. Customers can hook up with our waitresses, and our waitresses can earn some extra cash if they want. Everybody wins… right?"');
              scene.actions([
                { label: 'Ask for more information', handler: (st: GameState) => {
    scene.text('Eugene notices the spark in your eye and laughs. "I see you might be interested after all!"');
    scene.text('You play it cool. "Maybe. But just in case I were, how does it work?"');
    scene.text(`'She gives you a kind smile. "I trust you, so… okay. I'll let you do it if you want. Like I said, all our regulars know that we 'arrange meetings' every Monday between 22:00 and 23:00. If you're here at that time and want to earn some money, introduce yourself to the person or group you want to service and say 'I'll be your waitress tonight.' They'll know what it means. From what the girls told me, they get paid between ${qspFunc(s, 'money', 'string_profit', 500)} and ${qspFunc(s, 'money', 'string_profit', 1000)}."'`);
    scene.text('Before you leave, she adds "Keep in mind that the diner is just a meeting area; whatever happens when you leave with someone is between you and them! Don\'t embarrass us though, we\'d hate to lose regular customers, no matter how perverted they might be!" She added the last bit with a laugh and a wink.');
    scene.actions([
      { label: 'Say you\'ll think about it', handler: (st: GameState) => {
    (st as any).LCworkwork = 1;
    (st as any).LCwork = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
    ]);
  } },
              ]);
            } else {
              scene.text('Eugene smiles at you. "This is something right up your alley"');
              scene.text(`'All our regulars know that we 'arrange meetings' every Monday between 22:00 and 23:00. If you're here at that time and want to earn some money, introduce yourself to the person or group you want to service and say: 'I'll be your waitress tonight.' They'll know what it means. From what the girls told me, they get paid between ${qspFunc(s, 'money', 'string_profit', 500)} and ${qspFunc(s, 'money', 'string_profit', 1000)}."'`);
              scene.text('Before you leave, she adds "Keep in mind that the diner is just a meeting area; whatever happens when you leave with someone is between you and them! Don\'t embarrass us though, we\'d hate to lose regular customers, no matter how perverted they might be."');
              scene.actions([
                { label: 'Thank her for the information', handler: (st: GameState) => {
    (st as any).LCworkwork = 1;
    (st as any).LCwork = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((st as any).LCworkwork ?? 0) === 1) {
        if (((st as any).LCknowslut ?? 0) === 1  &&  ((st as any).npc_love ?? 0)?.['A89'] > 30) {
          scene.text('Eugene glares at you.');
          scene.text(`'"Did you come to brag about how much of a slut you are, ${((st as any).pcs_firstname ?? '')}? If you want to whore yourself out, come here on Monday night between 22:00 and 23:00 and show the men here what kind of a person you are. Just don't lose us any customers."'`);
          scene.text('She turns around and walks away from you.');
          ((st as any).npc_love = (st as any).npc_love ?? {})['A89'] = (-5);
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
          ]);
        } else {
          scene.text(`'"So you're still interested in that, huh?" she smirks when you mention the special work. "Like I said, our regulars know that we 'arrange meetings' every Monday between 22:00 and 23:00. If you're here at that time and want to earn some money using your body, introduce yourself to the person or group you want to service and say 'I'll be your waitress tonight.' They'll know what it means. From what the girls told me, they get paid between ${qspFunc(s, 'money', 'string_profit', 500)} and ${qspFunc(s, 'money', 'string_profit', 1000)}."'`);
          scene.actions([
            { label: 'Thank her for the reminder', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspGoto(st, 'lakecafe', 'barmensha');
  } },
          ]);
        }
      }
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 180;
  (s as any).LCwork2 = ((s as any).LCwork2 ?? 0) + (1);
  qspCall(s, 'money', 'earn', 300);
  (s as any).LCwork2day = ((s as any).daystart ?? 0);
  scene.img('images/locations/city/industrial/bbq/kitchenworkcafe.jpg');
  scene.text('Eugene gives you a warm smile. "That would be great, thanks!" She then hands you a hat and an apron to wear while you work. Once you put them on, you get to work.');
  if ((Math.floor(Math.random() * 5) + 1) === 1  &&  ((s as any).LCEugenefirst ?? 0) > 0  &&  ((s as any).eugene_randy ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).eugene_randy = ((s as any).daystart ?? 0);
    scene.text('Angela leaves as you\'re in the middle of chopping vegetables. A few seconds later, Eugene comes in and walks up behind you, leaning against your back. You can feel her breasts against your back and her stiff cock against your ass.');
    scene.text(`"I seem to have a growing problem, ${((s as any).pcs_nickname ?? '')}. Could you help me out?"`);
    scene.actions([
      { label: 'Not today', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', (-1));
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('You shake your head. "Maybe another day. I\'m just not in the mood today." you reply.');
    scene.text('She lets go of your hand. "Okay, I understand. Maybe some other time." She goes back to work, but you can tell she is disappointed.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text(`You spend the rest of the time washing dishes, cleaning the floors and chopping vegetables. When you're finished, Eugene gives you your well-earned ${qspFunc(s, 'money', 'string_profit', 300)}.`);
    scene.actions([
      { label: 'Finish work', goto: ['lakecafe', 'main'] },
    ]);
  } },
    ]);
  } },
      { label: 'Follow her into a back room', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A89', 1);
    scene.img('images/characters/shared/headshots_main/big89.jpg');
    scene.text('She smiles when you nod. "Okay, how about you follow me and we have some fun?" she says as she grabs your hand and leads you out to the back room.');
    ((st as any).npc_horny = (st as any).npc_horny ?? {})['A89'] = 49;
    qspGoto(st, 'eugeneev1', 'sex_work');
  } },
    ]);
  } else {
    scene.text(`You spend the next three hours washing dishes, cleaning the floors and chopping vegetables. When you're finished, Eugene gives you your well-earned ${qspFunc(s, 'money', 'string_profit', 300)}.`);
    scene.actions([
      { label: 'Finish work', goto: ['lakecafe', 'main'] },
    ]);
  }
  scene.build();
}

function enterBandits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Criminals</b></center>');
  scene.img('images/locations/city/industrial/bbq/bandits.jpg');
  scene.text('A group of tough men, clearly very different from the other visitors this diner usually gets, sit around the table. Their dark clothes and threatening demeanor leave no doubt in your mind: these men are criminals. Fairly well organized, and probably dangerous criminals.');
  scene.text('You overheard that they loan people money with abysmal terms. They demand 20% interest, and give you 7 days to repay the debt. Several girls who were unable to repay their debts have disappeared.');
  scene.text('');
  if (((s as any).workDolg ?? 0) > 0) {
    scene.text('One of them notices you and says "Hey, you! You know you owe us ' + qspFunc(s, 'money', 'string_debt', ((s as any).workDolg ?? '')) + '? We want it back, and soon!"');
  } else {
    scene.text('"Are you lost, girl? Fuck off!" one of them grunts menacingly.');
  }
  if (((s as any).workDolg ?? 0) > 0) {
    scene.actions([
      { label: 'Move away', goto: ['lakecafe', 'main'] },
      { label: 'Promise you\'ll pay him on time', handler: (st: GameState) => {
    scene.text('"I\'ll pay you back on time! I swear!" you plead.');
    scene.text(`"Talk is cheap, ${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}. You have ${((st as any).workDolgDay ?? '')} days, don't forget!" he shrugs, and turns back to his associates.`);
  } },
    ]);
  }
  if (((s as any).workDolg ?? 0) > 0) {
    scene.actions([
      { label: 'Pay back your debt [+$func(\'money\', \'get_debt_cost_string\', w...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford_debt', ((st as any).workDolg ?? 0)) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      (st as any).workDisk = 0;
      qspCall(st, 'money', 'debt_pay', 'workDolg');
      qspCall(st, 'stat', '');
      scene.text('You pay back the money you owe the criminals. The man who gave you the money seems surprised, but quickly pockets the money.');
      scene.text('"Excellent, I knew I could trust you! Pleasure doing business!" he grins, even though it\'s fairly obvious he\'s lying through his teeth.');
      scene.actions([
        { label: 'Leave them alone', goto: ['lakecafe', 'main'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).workDolgDay ?? 0) <= 0  &&  ((s as any).workDolg ?? 0) > 0) {
    qspCall(s, 'stat', '');
    (s as any).workDisk = 0;
    scene.img('images/locations/city/residential/street/bug.jpg');
    scene.text('When two very broad men approach you, you can\'t help but notice the distinct outline of pistols underneath their clothes.');
    scene.text('They look at you with disdain, and one of them says "You. It\'s time you repay your debt."');
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).workDolg ?? 0), 'cash')) {
      qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).workDolg ?? 0), 'cash');
      scene.text('You give the man the amount of money you owe, and he counts it meticulously before he nods to his colleague. "It\'s all there."');
      scene.text('The other man already had his gun in his hand and reluctantly puts it away. "I guess you\'re off the hook, for now. Consider yourself lucky!" he says in a menacing tone.');
      scene.actions([
        { label: 'Watch them leave', goto: ['lakecafe', 'main'] },
      ]);
    } else {
      if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).workDolg ?? 0), 'desk')) {
        qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).workDolg ?? 0), 'desk');
        scene.text('You don\'t have the full amount on you, but you tell them that you have the rest at home. "Oh really? Very original! We\'re coming with you! I\'m not letting you out of my sight for even one second until your debt is paid!" one of the men grunts.');
        scene.text('The men follow you to your home, and wait impatiently while you collect the money you owe them. When you produce the full amount, they actually seem a bit surprised.');
        scene.text('"Huh. I guess you weren\'t lying after all," one says after counting it twice. "Consider your debt paid, miss. Pleasure doing business."');
        scene.actions([
          { label: 'Close the door behind them', handler: (st: GameState) => {
    dynamicGoto(st, (((st as any).home ?? {})['entrance']), 'start');
  } },
        ]);
      } else {
        qspCall(s, 'money', 'debt_pay', 'workDolg', ((s as any).workDolg ?? 0), 'all');
        qspCall(s, 'money', 'debt_add', 'workDolg', 10000);
        scene.text('"I… I don\'t have the money, I\'m sorry!" you tell the guys, who roughly grab you by the shoulders the moment you confess.');
        scene.text('"Oh, you will be sorry!" one laughs at you. They walk to your apartment with you between them, never even asking for directions.');
        scene.text('Once you arrive, one of the men searches your house, piling up all the money you do have, while the other holds you at gunpoint.');
        scene.text('\'"Still not enough, huh?" the man holding you the gun mutters as the other finishes his search. "So, here\'s what\'s gonna happen. Since you can\'t pay your debt and we have to go through all this trouble getting it back, consider your debt increased by \' + $func(\'money\', \'string_debt_addition\', 10000) + \'. Don\'t you worry your pretty little head, though. We\'re going to give you an alternative way to pay it off."\'');
        scene.text('"Ha! That pretty face will come in handy there!" the other laughs.');
        scene.text('Without explaining further, they drag you to a car outside your apartment and throw you into the back seat. About half an hour later, the car pulls over and one of the men tells you to get out. You\'re at a sauna building in the city.');
        scene.actions([
          { label: 'Get out of the car', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'stat', '');
    scene.text('After one of the criminals makes sure the coast is clear, the two of them pull you out of the car and escort you to a room inside the sauna building. One leaves the room as the other explains your situation. "Until you pay off your debt, we own you! You\'ll live and work here until you\'ve paid off every last ruble. Any expenses you incur while you are here will be added to your debt. Understood?"');
    scene.text('Silence fills the room as he waits for you to acknowledge what he just said. Mortified about what might happen if you don\'t, you nod. He decides to paint the picture anyway. "If you try to escape or refuse to work, we\'ll put a bullet in your head, chop you up and bury you in the woods in pieces! And that would be a waste, with a pretty face such as yours."');
    scene.text('He pinches your cheek and then slaps your face. After looking you in the eyes for a few more seconds to make sure you get the message, he turns around and leaves. You\'re all alone now…');
    scene.actions([
      { label: 'Look around', goto: ['city_sauna', 'saunaroom'] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Leave them alone', goto: ['lakecafe', 'main'] },
    { label: 'Ask to borrow money', handler: (st: GameState) => {
    (st as any).intinp = window.prompt("How much money do you want to borrow?") ?? '';
    if (((st as any).intinp ?? 0) <= 0) {
      scene.text('"You want to borrow… no money? Quit wasting our time!" one of them shouts, rather annoyed at your inability to choose an amount.');
    } else {
      if (((st as any).intinp ?? 0) > 2000000) {
        scene.text('"Do we look like the National Bank, girl? Don\'t be ridiculous!" one of them scoffs.');
      } else {
        if (((st as any).intinp ?? 0) > 0  &&  ((st as any).intinp ?? 0) <= 2000000) {
          qspCall(st, 'money', 'earn', ((st as any).intinp ?? 0));
          qspCall(st, 'money', 'debt_add', 'workDolg', ((st as any).intinp ?? 0) + (((st as any).intinp ?? 0)/100)*20);
          (st as any).workDolgDay = 7;
          scene.text('One of them extends his hand out at you. "Passport. Now."');
          scene.text('With your passport in his hand, he makes a few quick phone calls. He writes some stuff down before handing you your passport back, along with your money.');
          scene.text(`"Listen up, ${((st as any).pcs_firstname ?? '')} ${((st as any).pcs_lastname ?? '')}," he grunts. "You have ${((st as any).workDolgDay ?? '')} days to pay back the ${qspFunc(s, 'money', 'string_profit', ((st as any).intinp ?? ''), 1)}, plus ${qspFunc(s, 'money', 'string_price', (((st as any).intinp ?? '') / 100) * 20, 1)} in interest."`);
          scene.text('When you nod, he grabs your wrist roughly. "<i>Don\'t</i> screw us over! I know everything about you, and I <i>will</i> get my money back, one way or the other…"');
          scene.actions([
            { label: 'Promise you\'ll pay and leave', goto: ['lakecafe', 'main'] },
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
    case 'main':
      enterMain(s, scene);
      break;
    case 'barmensha':
      enterBarmensha(s, scene);
      break;
    case 'Kitchen':
      enterKitchen(s, scene);
      break;
    case 'bandits':
      enterBandits(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lakecafe: LocationDef = {
  name: 'lakecafe',
  title: 'The Lake Cafe',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
