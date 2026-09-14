import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSetWillpower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['dom'] < 0) {
    qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'easy');
  } else {
    if (((s as any).katjaQW ?? 0)?.['dom'] <= 30) {
      qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    } else {
      qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'hard');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterActivity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).locat ?? 0)?.['katja'] === 53  &&  (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg'))) {
    if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 600 < ((s as any).totminut ?? 0)) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 0;
    }
    if (((s as any).katjaQW ?? 0)?.['disco_loc'] >= 3  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] <= 6) {
      if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 30 < ((s as any).totminut ?? 0)) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
        if (((Math.floor(Math.random() * 15) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['liberated']  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
          if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 3  &&  (Math.floor(Math.random() * 5) + 0) < 4) {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_boy'] = 1;
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
          } else {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['alone_with_other_day'] = ((s as any).daystart ?? 0);
            if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 5) {
              qspCall(s, 'katja_procedural', 'sex_set', 0, 1);
            } else {
              if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 6) {
                qspCall(s, 'katja_procedural', 'sex_set', 2);
              } else {
                qspCall(s, 'katja_procedural', 'sex_set', 1);
              }
            }
            if (((s as any).hour ?? 0) > 10) {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
            } else {
              if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0) - 1;
            }
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
            if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
          }
        } else {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 2;
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
          } else {
            if ((!(Math.floor(Math.random() * 5) + 0))) {
              if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 8;
            } else {
              if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
            }
          }
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 2) {
        if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
          if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
          if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
          if ((!(Math.floor(Math.random() * 9) + 0))) {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 8;
          } else {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
          }
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 7) {
          if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 60 < ((s as any).totminut ?? 0)) {
            if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
            if ((!(Math.floor(Math.random() * 5) + 0))) {
              if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 8;
            } else {
              if ((!(Math.floor(Math.random() * 6) + 0))) {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
              } else {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
              }
            }
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 8) {
            if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
              if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
              if ((!(Math.floor(Math.random() * 6) + 0))) {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 2;
              } else {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
              }
            }
          } else {
            if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 9) {
              if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 60 < ((s as any).totminut ?? 0)) {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
                if ((!(Math.floor(Math.random() * 5) + 0))) {
                  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 8;
                } else {
                  if ((!(Math.floor(Math.random() * 6) + 0))) {
                    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 9;
                    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
                  } else {
                    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
                  }
                }
              }
            } else {
              if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
                if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
                if ((Math.floor(Math.random() * 4) + 1) <= 3) {
                  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
                } else {
                  if ((!(Math.floor(Math.random() * 6) + 0))) {
                    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 2;
                    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
                  } else {
                    if ((!(Math.floor(Math.random() * 9) + 0))) {
                      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 8;
                    } else {
                      if ((Math.floor(Math.random() * 12) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  ||  (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0  &&  (Math.floor(Math.random() * 8) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10)  ||  (((s as any).katjaQW ?? 0)?.['liberated'] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
                        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 3;
                      } else {
                        if ((Math.floor(Math.random() * 12) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  ||  (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0  &&  (Math.floor(Math.random() * 8) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10)  ||  (((s as any).katjaQW ?? 0)?.['liberated'] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
                          if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = Math.floor(Math.random() * 3) + 4;
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
    if (((s as any).locArgs?.[1] ?? 0) === 'dance_floor') {
      if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 1) {
        scene.text('You see <a href="exec: gt \'katja_nightclub\',\'dance_approach\'">Katja</a> on the dance floor, dancing alone.');
      } else {
        if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 3) {
          scene.text('You see <a href="exec: gt \'katja_nightclub\',\'dance_guy_approach\'">Katja</a> on the dance floor, dancing with a guy.');
        } else {
          if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 4) {
          } else {
            if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 5) {
            } else {
              if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 6) {
              }
            }
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'bar') {
        if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 2) {
          scene.text('You see <a href="exec: gt \'katja_nightclub\',\'bar_approach\'">Katja</a> at the bar, talking with the bartender.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceApproach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 < ((s as any).totminut ?? 0)) {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 70) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
      scene.text('You approach her from behind. "Hey Katja!" you shout so she can hear you over the music.');
      // TODO-QSP: dynamic text: She turns around and ' + iif(npc_had_sex['A14'] and func('katja_procedural', 'wi...
      scene.text('She turns around and \' + iif(npc_had_sex[\'A14\'] and func(\'katja_procedural\', \'willing_to_be_naughty\') > 80 and katjaQW[\'sex_clossedness\'] < 2, \'gives you a quick kiss\', \'a huge smile appears on her face\') + \' when she sees that it\'s you. "You\'re here, too? We\'re going to have so much fun! Let\'s dance!"');
      scene.actions([
        { label: 'Dance with Katja', goto: ['katja_nightclub', 'dance'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
        scene.img('images/characters/shared/headshots_main/big14.jpg');
        scene.text('You approach her and try to move yourself so that she can see you, but when she finally notices you, she just turns around and continues dancing like she doesn\'t know who you are.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
        scene.text('You approach her from behind. "Hey Katja!" you shout so she can hear you over the music.');
        // TODO-QSP: dynamic text: She turns around. "Oh hi, <<$pcs_nickname>>!" she shouts back when she sees you....
        scene.text(`She turns around. "Oh hi, ${((s as any).pcs_nickname || '')}!" she shouts back when she sees you. "You decided to come clubbing tonight as well? It's a great place to let loose. Why don't we dance?"`);
        scene.actions([
          { label: 'Dance with Katja', goto: ['katja_nightclub', 'dance'] },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 70) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
      // TODO-QSP: dynamic text: You approach her and tap her on the shoulder. She turns around and ' + iif(npc_h...
      scene.text('You approach her and tap her on the shoulder. She turns around and \' + iif(npc_had_sex[\'A14\'] and func(\'katja_procedural\', \'willing_to_be_naughty\') > 80 and katjaQW[\'sex_clossedness\'] < 2, \'gives you a quick kiss\', \'a huge smile appears on her face\') + \'. "You\'re back! Let\'s dance!"');
      scene.actions([
        { label: 'Dance with Katja', goto: ['katja_nightclub', 'dance'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] < 20) {
        scene.img('images/characters/shared/headshots_main/big14.jpg');
        scene.text('You approach her and try to move yourself so that she can see you, but when she finally notices you, she just turns around and continues dancing like she doesn\'t know who you are.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
        scene.text('You approach her and she smiles when she sees you coming. "You\'re back! Let\'s dance!"');
        scene.actions([
          { label: 'Dance with Katja', goto: ['katja_nightclub', 'dance'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Katja', goto: ['city_nightclub', 'dance'] },
  ]);
  scene.build();
}

function enterBarApproach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 70) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
      scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender. "Hi, Katja!" you say loudly so she can hear you over the music.');
      // TODO-QSP: dynamic text: She turns to you with a huge smile on her face. "It's great to see you here! We'...
      scene.text(`She turns to you with a huge smile on her face. "It's great to see you here! We're going to have so much fun! Get a drink and join me, ${((s as any).pcs_nickname || '')}!"`);
      scene.actions([
        { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
        scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender and sit close to her.');
        scene.text('When she notices you, she just acts like she doesn\'t know you and strikes up a conversation with another person at the bar, clearly signaling that she doesn\'t want to talk to you.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
        scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender. "Hi, Katja!" you say loudly so she can hear you over the music.');
        // TODO-QSP: dynamic text: She turns to you and shouts back. "Oh hi, <<$pcs_nickname>>! You decided to come...
        scene.text(`She turns to you and shouts back. "Oh hi, ${((s as any).pcs_nickname || '')}! You decided to come clubbing tonight as well? It's a great place to let loose. Have a drink with me!"`);
        scene.actions([
          { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
        ]);
      }
    }
  } else {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] > 0  ||  ((s as any).npc_rel ?? 0)?.['A14'] >= 70) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
      scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender. "Hi, Katja!" you say loudly so she can hear you over the music.');
      // TODO-QSP: dynamic text: She turns to you with a huge smile on her face. "You need a drink too, <<$pcs_ni...
      scene.text(`She turns to you with a huge smile on her face. "You need a drink too, ${((s as any).pcs_nickname || '')}? Great minds think alike."`);
      scene.actions([
        { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
        scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender and sit close to her.');
        scene.text('When she notices you, she just acts like she doesn\'t know you and strikes up a conversation with another person at the bar, clearly signaling that she doesn\'t want to talk to you.');
      } else {
        scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
        scene.text('You approach the bar where she\'s getting a drink handed to her by the bartender. "Hi, Katja!" you say loudly so she can hear you over the music.');
        // TODO-QSP: dynamic text: She turns to you. "Oh hi, <<$pcs_nickname>>! You thirsty too? Have a drink with ...
        scene.text(`She turns to you. "Oh hi, ${((s as any).pcs_nickname || '')}! You thirsty too? Have a drink with me."`);
        scene.actions([
          { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Katja', goto: ['city_nightclub', 'bar'] },
  ]);
  scene.build();
}

function enterDanceGuyApproach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_katja_guy${Math.floor(Math.random() * 2) + 1}.jpg`);
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    }
    scene.text('As you approach her, she notices you and demonstrably drags the guy she\'s dancing with away from you. She clearly doesn\'t want anything to do with you.');
    scene.actions([
      { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
    ]);
  } else {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
      }
      scene.text('As you approach her, you notice that the guy she\'s dancing with is wearing expensive clothes. She notices you and waves you over to join them.');
      scene.actions([
        { label: 'Join them', goto: ['katja_nightclub', 'dance_guy2'] },
        { label: 'Don\'t join them', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      scene.text('As you approach, you can see that Katja is dancing with a guy in expensive clothes. She seems to be enjoying it and he\'s clearly into her as you notice his hands sometimes touch her body.');
      scene.actions([
        { label: 'Join them', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    }
    scene.text('You get closer and get the attention of Katja. When she sees you, she motions for you to join them.');
    scene.actions([
      { label: 'Join them', goto: ['katja_nightclub', 'dance_guy2'] },
    ]);
  } },
        { label: 'Stay back and see how it goes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('They continue to dance for a while, and as the dance goes on, he keeps getting closer and closer to her. His hand starts to go from just touching her arms and back to resting on her ass.');
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 50  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
      scene.text('That seems to be too much for her. When he doesn\'t get the hint after she\'s removed his hand from her ass several times, she dances away from him, leaving him alone.');
      scene.actions([
        { label: 'Go to her', goto: ['katja_nightclub', 'dance_approach'] },
        { label: 'Leave her', goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 65  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
        scene.text('It seems that Katja can\'t decide how to respond to this. She tries at times to move so that his hand will let go. At other times, it seems as though she likes the attention.');
      } else {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
        scene.text('Katja clearly enjoys the attention she\'s getting and starts to get closer to him as well, almost grinding her body against his.');
      }
      if ((((s as any).katjaQW ?? 0)?.['liberated'] === 1  &&  ((((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 0  &&  (Math.floor(Math.random() * 10) + 1))  ||  (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 0  &&  (Math.floor(Math.random() * 5) + 1))))  ||  (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (Math.floor(Math.random() * 10) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  &&  (Math.floor(Math.random() * 5) + 1) <= (Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) - 50) / 10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  (((s as any).katjaQW ?? 0)?.['faithful'] === 0  ||  ((s as any).katjaQW ?? 0)?.['cheat_warning'] === 2))) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_boy'] = 1;
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
        scene.text('By the end of the dance, he grabs her and leans in for a kiss and she fully kisses him back. Afterwards, he whispers something in her ear and she nods as he takes her hand and leads her towards the private rooms.');
        scene.actions([
          { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
        ]);
      } else {
        scene.text('By the end of the dance, he grabs her and leans in for a kiss, but she just gives him a quick peck on the cheek and gets herself out of his grip. She thanks him for the dance before dancing away, leaving him standing there looking very disappointed.');
        scene.actions([
          { label: 'Go to her', goto: ['katja_nightclub', 'dance_approach'] },
          { label: 'Leave her', goto: ['city_nightclub', 'dance'] },
        ]);
      }
    }
  } },
        { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceBlackGuyApproach(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDanceGirlApproach(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterDanceTwoGuysApproach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_katja_guy${Math.floor(Math.random() * 2) + 1}.jpg`);
  if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    }
    scene.text('As you approach her, she notices you and demonstrably drags the guys she\'s dancing with away from you. She clearly doesn\'t want anything to do with you.');
    scene.actions([
      { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
    ]);
  } else {
    if ((Math.floor(Math.random() * 1) + 0) === 1) {
      if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
        qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
      }
      scene.text('As you approach her, you notice that the men she\'s dancing with are wearing expensive clothes. She notices you and waves you over to join them.');
      scene.actions([
        { label: 'Join them', goto: ['katja_nightclub', 'dance_two_guys2'] },
        { label: 'Don\'t join them', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
  }, goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      scene.text('As you approach, you can see that Katja is dancing with two men in expensive clothes. She seems to be enjoying it, and they\'re clearly into her as you notice their hands sometimes touch her body.');
      scene.actions([
        { label: 'Join them', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 > ((s as any).totminut ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['disco_met'] + 600 > ((s as any).totminut ?? 0)) {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_met'] = ((s as any).totminut ?? 0);
      qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    }
    scene.text('You get closer and get the attention of Katja. When she sees you, she motions for you to join them.');
    scene.actions([
      { label: 'Join them', goto: ['katja_nightclub', 'dance_two_guys2'] },
    ]);
  } },
        { label: 'Stay back and see how it goes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    scene.text('They continue to dance for a while, and as the dance goes on, the men keep getting closer and closer to her. Their hands start to go from just touching her arms and back to resting on her ass.');
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 75  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0) {
      scene.text('That seems to be too much for her. When they don\'t get the hint after she\'s removed their hands from her ass several times, she dances away from him, leaving him alone.');
      scene.actions([
        { label: 'Go to Katja', goto: ['katja_nightclub', 'dance_approach'] },
        { label: 'Leave her', goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 2  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 90  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
        scene.text('It seems that Katja can\'t decide how to respond to this. She tries at times to move so that their hands will let go. At other times, it seems as though she likes the attention.');
      } else {
        if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (20);
        scene.text('Katja clearly enjoys the attention she\'s getting from the men. She starts to get closer to them as well, almost grinding her body against theirs.');
      }
      if ((((s as any).katjaQW ?? 0)?.['liberated'] === 1  &&  (((s as any).katjaQW ?? 0)?.['simultanous_boys'] === 1  &&  (Math.floor(Math.random() * 10) + 1))  ||  (((s as any).katjaQW ?? 0)?.['simultanous_boys'] > 1  &&  (Math.floor(Math.random() * 5) + 1)))  ||  (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (Math.floor(Math.random() * 10) + 1) <= (Math.min(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  &&  (Math.floor(Math.random() * 5) + 1) <= (Math.min(((s as any).katjaQW ?? 0)?.['horny'], 100) - 50) / 10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  (((s as any).katjaQW ?? 0)?.['faithful'] === 0  ||  ((s as any).katjaQW ?? 0)?.['cheat_warning'] === 2))) {
        qspCall(s, 'katja_procedural', 'sex_set', 2);
        if (((s as any).hour ?? 0) > 10) {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
        } else {
          if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0) - 1;
        }
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
        // TODO-QSP: dynamic text: By the end of the dance, one of the men leans in and says something to Katja tha...
        scene.text('By the end of the dance, one of the men leans in and says something to Katja that you can\'t hear. \' + iif(katjaQW[\'simultanous_boys\'] > 2 and func(\'katja_procedural\', \'willing_to_be_naughty\') >= 100 and katjaQW[\'horny\'] >= 75, \'She immediately, and eagerly, agrees to his proposition.\' , \'she seems to consider it for some time before she hesitantly agrees.\') + \' The three of them then leave the dance floor and head for the exit of the club.');
        scene.actions([
          { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
        ]);
      } else {
        scene.text('By the end of the dance, one of the men grabs her and leans in for a kiss, but she just gives him a quick peck on the cheek and gets herself out of his grip. She thanks them for the dance before dancing away, leaving him standing there looking very disappointed.');
        scene.actions([
          { label: 'Go to her', goto: ['katja_nightclub', 'dance_approach'] },
          { label: 'Leave her', goto: ['city_nightclub', 'dance'] },
        ]);
      }
    }
  } },
        { label: 'Leave them', goto: ['city_nightclub', 'dance'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 20) + 1;
  if (((s as any).temp_rand ?? 0) < 2) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_talking_on__dance_floor.jpg');
    scene.text('A song that Katja loves comes on and she starts singing the lyrics as you join her.');
    if (((s as any).katjaQW ?? 0)?.['drinks'] > 8) {
      // TODO-QSP: dynamic text: She's very drunk and is basically just shouting parts of the song very loudly.' ...
      scene.text('She\'s very drunk and is basically just shouting parts of the song very loudly.\' + iif( alko < 8 or pcs_vokal > 50, \' You at least manage to sing the correct lyrics.\', \' You\'re not doing any better.\') + \' At least\' + iif( alko < 8, \'she\'s\', \'you\'re\') + \' having fun.');
    } else {
      if (((s as any).katjaQW ?? 0)?.['drinks'] > 4) {
        // TODO-QSP: 'Katja is able to sing the song quite well considering how drunk she is.' + iif(alko < 5 or pcs_voka...
      } else {
        // TODO-QSP: 'Katja clearly knows this song by heart, and sings it very well.' + iif(pcs_vokal > 50, ' Your singi...
      }
    }
  } else {
    if (((s as any).temp_rand ?? 0) === 3) {
      (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (10);
      qspCall(s, 'sweat', 'add', 3);
      (s as any).fat = ((s as any).fat ?? 0) - (1);
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_wild.jpg');
      scene.text('A very popular beat comes on, and the crowd goes wild. The dance floor becomes a mass of people moving fast to the rhythm. Dance skill does not matter at the moment, just enthusiasm and stamina.');
      if (((s as any).katjaQW ?? 0)?.['drinks'] > 8) {
        // TODO-QSP: 'Katja is very drunk and is having trouble staying on her feet with all the people bombing into her....
      } else {
        if (((s as any).katjaQW ?? 0)?.['drinks'] > 4) {
          // TODO-QSP: iif(alko > 4, 'You and Katja are drunkenly', 'Katja is drunkenly') + ' bumping into other dancers, b...
        }
      }
    } else {
      if (((s as any).temp_rand ?? 0) <= (((s as any).pcs_hotcat ?? 0) + 1) / 2) {
        scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_two_guys1'] }]);
      } else {
        if (((s as any).temp_rand ?? 0) <= (2 * ((s as any).pcs_hotcat ?? 0) + 1) / 3) {
          scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_two_girls1'] }]);
        } else {
          if (((s as any).temp_rand ?? 0) <= ((s as any).pcs_hotcat ?? 0)) {
            scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_guy1'] }]);
          } else {
            if (((s as any).temp_rand ?? 0) === 11  &&  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') > 30 * (2 - ((s as any).npc_had_sex ?? 0)?.['A14'])) {
              if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
              qspCall(s, 'arousal', 'foreplay', (-5));
              qspCall(s, 'arousal', 'end');
              scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_grinding.jpg');
              scene.text('As you\'re dancing, Katja turns around and starts doing sexy dance moves in front of you. She starts to grind her ass into you as the rhythm allows it.');
              scene.text('When the number is over, she turns around and dance normally for the next number with a naughty glint in her eye.');
            } else {
              scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing1.jpg');
              if (((s as any).katjaQW ?? 0)?.['drinks'] < 4) {
                // TODO-QSP: 'You and Katja are dancing and having fun. She''s a pretty good dancer, ' + iif(pcs_danc < 50, 'and ...
              } else {
                if (((s as any).katjaQW ?? 0)?.['drinks'] < 8) {
                  // TODO-QSP: 'You and Katja are dancing and having fun, but it''s clear that Katja''s moves aren''t as smooth sin...
                  scene.text('She clearly doesn\'t care what others think about how good or silly you look doing it.');
                } else {
                  // TODO-QSP: dynamic text: Katja is very drunk and more rolling around than actually dancing.' + iif( alko ...
                  scene.text('Katja is very drunk and more rolling around than actually dancing.\' + iif( alko < 8, \' You do your best to not make it a complete disaster.\', \' You\'re in the same state and almost fall over a few times.\') + \' At least\' + iif( alko < 8, \'she\'s\', \'you\'re\') + \' having fun.');
                }
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDanceEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).locat ?? 0)?.['Katja'] !== 53) {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)) {
      // TODO-QSP: dynamic text: "It's getting late, <<$pcs_nickname>>. Let's go home," Katja says as the song en...
      scene.text(`"It's getting late, ${((s as any).pcs_nickname || '')}. Let's go home," Katja says as the song ends. It looks like there's no way to convince her to stay.`);
      scene.actions([
        { label: 'Go home with Katja', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['on_date'] = 1
  }, goto: ['katja_city', 'metro'] },
        { label: 'Stay at the nightclub', goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "It's getting late, <<$pcs_nickname>>. I'm heading home," Katja says as she fini...
      scene.text(`"It's getting late, ${((s as any).pcs_nickname || '')}. I'm heading home," Katja says as she finishes her drink. It looks like there's no way to convince her to stay.`);
      if ((((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2)  ||  ((s as any).home ?? 0)?.['current'] === 'university_dorm') {
        scene.actions([
          { label: 'Suggest you go home together', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Why don\'t we go back together?" you suggest.');
    scene.text('"Great idea," she replies.');
    scene.actions([
      { label: 'Go home with Katja', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['on_date'] = 1
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Say goodbye to Katja', goto: ['city_nightclub', 'dance'] },
      ]);
    }
  } else {
    if ((!(Math.floor(Math.random() * 9) + 0))) {
      scene.text('After a while, Katja tells you that she needs to go to the restroom, but will be back shortly.');
      scene.actions([
        { label: 'Let her go', goto: ['city_nightclub', 'dance'] },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 5) + 0))) {
        scene.text('"I\'m getting thirsty. Let\'s go to the bar," Katja says after dancing for a while.');
        scene.actions([
          { label: 'Go to the bar', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 2, 'agree');
  }, goto: ['katja_nightclub', 'bar_arrive'] },
          { label: 'Tell her that you want to keep dancing', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if ((Math.floor(Math.random() * (30 - -30 + 1)) + (-30)) > ((s as any).katjaQW ?? 0)?.['dom']) {
      scene.text('"Okay," she says. "We can dance a little longer."');
      scene.actions([
        { label: 'Continue to dance', goto: ['katja_nightclub', 'dance'] },
      ]);
    } else {
      scene.text('"No. I really want a drink right now!" she insists, looking quite determined.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drink', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her to keep dancing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her to keep dancing', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"Just one more song, then we can go to the bar! Can you hear what\'s coming on? We need to dance to this!" you plead and Katja gives in and starts to dance with you again.');
    scene.actions([
      { label: 'Dance', goto: ['katja_nightclub', 'dance'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Relent and go to the bar', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'stat', '');
  }, goto: ['katja_nightclub', 'bar_arrive'] },
        { label: 'Tell her she can go alone', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 0);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 2;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drink'] = ((s as any).katjaQW['drink'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
  }, goto: ['city_nightclub', 'dance'] },
      ]);
    }
  } },
          { label: 'Tell Katja that you need to leave', goto: ['city_nightclub', 'dance'] },
        ]);
      } else {
        scene.text('"Listen. Can you hear that? We need to dance to this!" Katja says after you\'ve danced for several songs, still full of energy.');
        scene.actions([
          { label: 'Dance some more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  }, goto: ['katja_nightclub', 'dance'] },
          { label: 'Tell Katja that you want a drink', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if ((Math.floor(Math.random() * (30 - -30 + 1)) + (-30)) > ((s as any).katjaQW ?? 0)?.['dom']) {
      scene.text('"Okay," she says. "We can get drinks, I\'m starting to get thirsty."');
      scene.actions([
        { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
      ]);
    } else {
      scene.text('"I really want to dance to this number, though! Come on, stay with me! Please?" she pleads.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'drink', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her to go to the bar', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her to go to the bar', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"Come on! I really, really need something to drink right now. Please?" you plead and Katja finally gives in.');
    scene.actions([
      { label: 'Go to the bar', goto: ['katja_nightclub', 'bar_arrive'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Relent and continue dancing', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'stat', '');
  }, goto: ['katja_nightclub', 'dance'] },
        { label: 'Go to the bar alone while she dances', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 0);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
  }, goto: ['city_nightclub', 'bar'] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarArrive(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['first_orgy'] === ''  &&  ((s as any).katjaQW ?? 0)?.['first_orgy_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] !== 0  &&  ((s as any).katjaQW ?? 0)?.['birth_control_start_day'] <= ((s as any).daystart ?? 0)) {
    qspCall(s, 'anushka_konstantinov_schedule', '');
    if ((((s as any).hour ?? 0) === 20  ||  (((s as any).hour ?? 0) === 21  &&  ((s as any).minut ?? 0) < 30))  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).locat ?? 0)?.['A144'] === 0  &&  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&   ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  (!(Math.floor(Math.random() * 6) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['katja_nightclub_first_orgy', 'first_orgy_invite'] }]);
    }
  }
  if ((((s as any).hour ?? 0) < 6  ||  ((s as any).hour ?? 0) > 22)  &&  (Math.floor(Math.random() * 5) + 0) === 0  &&  ((s as any).katjaQW ?? 0)?.['lone_bartender'] < ((s as any).daystart ?? 0) - 1) {
    scene.actions([{ label: 'Continue', goto: ['katja_nightclub_sex', 'lone_bartender'] }]);
  }
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 2;
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
  scene.text('You make your way to the bar, which is quite crowded. Katja quickly orders a drink while you think about what to order.');
  if (((s as any).pcs_health ?? 0) > 20) {
    scene.actions([
      { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
    ]);
  } else {
    scene.text('You don\'t feel well enough to drink alcohol.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t order a drink', goto: ['katja_nightclub', 'bar_after_drink'] },
  ]);
  scene.build();
}

function enterDrink(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_drink_bought'] = 1;
  qspCall(s, 'food_menu', 'city_nightclub_only_cost');
  // TODO-QSP: end
  scene.build();
}

function enterBarAfterDrink(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 20) + 1;
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
  if (((s as any).temp_rand ?? 0) === 1  &&  (((s as any).katjaQW ?? 0)?.['QWstage'] >= 3  ||  ((s as any).katjaQW ?? 0)?.['drinks'] > 3)  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_kiss_cheek.jpg');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (5);
    // TODO-QSP: iif(katjaQW['disco_drink_bought'] = 1, 'You and Katja are', 'Katja is') + ' enjoying ' + iif(katjaQW...
    if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 65  &&  ((s as any).katjaQW ?? 0)?.['drinks'] < 8) {
      scene.text('She quickly looks around and starts giggling, as if she\'s embarrassed about what she just did.');
    } else {
      if (qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') < 65) {
        scene.text('As she\'s doing this, she stumbles and almost falls to the ground, laughing. It\'s clear that she\'s entirely wasted at this point.');
      } else {
        scene.text('She then continues the conversation like it was the most natural thing to do.');
      }
    }
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_drink_bought'] = 0;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).temp_rand ?? 0) <= ((s as any).pcs_hotcat ?? 0) / 2) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dringking_man_approach.jpg');
      // TODO-QSP: dynamic text: As ' + iif(katjaQW['disco_drink_bought'] = 1, 'you and Katja are', 'Katja is') +...
      scene.text('As \' + iif(katjaQW[\'disco_drink_bought\'] = 1, \'you and Katja are\', \'Katja is\') + \' enjoying \' + iif(katjaQW[\'disco_drink_bought\'] = 1, \'your drinks\', \'her drink\') + \', a well-dressed man comes up to you. "Hello, ladies! Mind if I join you?"');
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_drink_bought'] = 0;
      scene.actions([
        { label: 'Let him join', handler: (st: GameState) => {
    if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2)  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 51) + 50)) {
      if (((s as any).katjaQW ?? 0)?.['dom'] > (Math.floor(Math.random() * 31) + 0)) {
        scene.text('You\'re about to tell him that he can join you when Katja shakes her head.');
        scene.text('"If you want to have him fawning over you, then I\'ll leave you to it," she says in a clearly disapproving voice.');
        scene.text('The guy takes the hint and excuses himself before leaving the two of you alone.');
        scene.actions([
          { label: 'Ask her what\'s going on', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"What was that about?" you ask.');
    // TODO-QSP: dynamic text: "I thought we were having a drink together, just the two of us?" she asks. "If y...
    scene.text('"I thought we were having a drink together, just the two of us?" she asks. "If you want to chase boys then go ahead, but \' + iif(katjaQW[\'boy_block\'] = 1, \'I thought you didn\'t have any interest in them?\', \'I\'m not interested,\') + \'"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Just finish your drinks in peace', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_bar1.jpg');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.text('"Yes, you can join us," you tell him, but Katja looks at you disapprovingly. It\'s clear that she doesn\'t want him there, but she\'s not going to say anything.');
        scene.actions([
          { label: 'Tell him you changed your mind', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You pull out your phone. "Oh shit, lost track of time! Sorry, but my friend and I need to meet somebody on the dance floor right now!" you say and drag Katja away from the bar without giving him time to protest.');
    scene.text('"Thanks. I really didn\'t want to have a guy hitting on us right now," she says as you make your way to the dance floor.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Ignore Katja\'s discomfort', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dringking_man_approach.jpg');
    scene.text('You ignore Katja and he joins you. You spend the time chatting with while Katja says nothing.');
    if ((Math.floor(Math.random() * 4) + 5) < ((s as any).pcs_hotcat ?? 0)) {
      scene.text('He then thanks you for a nice time, but says he has to run and leaves you and Katja alone at the bar.');
      scene.text('"Why did you invite <i>him</i>?" she asks in a harsh tone.');
      scene.text('"It\'s fine. It never hurts to talk to a good looking guy," you answer.');
      scene.text('"Well, I didn\'t want to talk to him! Next time, I\'ll just leave you alone," she says, still a little upset with you.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        scene.text('He\'s clearly flirting with the two of you, which Katja tries to ignore. After your glasses are empty, he asks if you want to join him on the dance floor.');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.text('"Sure! Sounds good," you tell him.');
    scene.text('Katja then leans in and whispers in your ear. "You go ahead, I won\'t be joining you."');
    scene.actions([
      { label: 'Dance with him alone', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, Math.floor(Math.random() * 2) + 3);
    qspCall(s, 'boystat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
  }, goto: ['city_nightclub', 'dance_guy'] },
      { label: 'Stay with Katja', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend just reminded me that we need to be somewhere else. I hope you understand," you tell him. He looks disappointed, but leaves the two of you alone.');
    scene.text('"Thanks. I really didn\'t want to have a guy hitting on us right now," she says.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend and I are going to stay at the bar," you tell him, making it clear that you\'re not interested.');
    scene.text('"Too bad, you\'ll be missing a great time," he says as he leaves, almost like you\'ve insulted him.');
    scene.text('Once he\'s gone, Katja turns to you. "Thanks. I didn\'t want to spend any more time with him."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.text('"I\'d like to buy you another drink, but let\'s go to one of the private booths. We\'ll be more comfortable there and it\'ll be easier to get to know each other with less noise," he says.');
        scene.text('"Sorry, but we really should be going," Katja says before you have time to respond.');
        scene.text('"Okay. Maybe I\'ll see you around?" he asks before leaving with a disappointed look.');
        if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
          scene.text('"I\'m sure he just wanted to get in our panties. As if that would ever happen," she snorts.');
        } else {
          scene.text('"Sorry, but I didn\'t want to spend any more time with him," she says.');
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } },
        ]);
      }
    } else {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.max(0, (Math.floor(Math.random() * (100 - (((s as any).katjaQW ?? {})?.['slut'] ?? 0) - 50 + 1)) + ((((s as any).katjaQW ?? {})?.['slut'] ?? 0) - 50)) / 50));
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dringking_man_approach.jpg');
      scene.text('You tell him that he\'s welcome to join and Katja nods in agreement. You spend the time chatting with him while your glasses empty.');
      if ((Math.floor(Math.random() * 4) + 5) > ((s as any).pcs_hotcat ?? 0)) {
        scene.text('He then thanks you for a nice time, but says he has to run, and leaves you and Katja alone at the bar.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          scene.text('He\'s clearly flirting with the two of you and asks if you want to join him on the dance floor.');
          scene.actions([
            { label: 'Go to the dance floor with him', handler: (st: GameState) => {
    scene.text('You agree and the three of you leave the bar and head to the dance floor.');
    scene.actions([
      { label: 'Dance', goto: ['katja_nightclub', 'dance_guy2'] },
    ]);
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend and I are going to stay at the bar," you tell him, making it clear that you\'re not interested.');
    scene.text('"Too bad, you\'ll be missing a great time," he says as he leaves, almost like you had insulted him.');
    // TODO-QSP: 'Once he''s gone, Katja turns to you. ' + iif((katjaQW['QWstage'] >= 6 or katjaQW['liberated'] = 1) ...
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.text('"I\'d like to buy you another drink, but let\'s go to one of the private booths. We\'ll be more comfortable there and it\'ll be easier to get to know each other with less noise," he says.');
          if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['boy_block'] === 1  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2)) {
            scene.text('"Sorry, but we really should be going," Katja says before you have time to respond.');
            scene.text('"Okay. Maybe I\'ll see you around?" he asks before leaving with a disappointed look.');
            if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
              scene.text('"I\'m sure he just wanted to get in our panties. As if that would ever happen," she snorts.');
            } else {
              scene.text('"I\'m sorry, but I\'m not really comfortable with us being alone with strange guys," she says.');
            }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            scene.actions([
              { label: 'Join him', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2  &&  ((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You and Katja both end up agreeing at the same time, which causes her to giggle. You\'re not sure if it\'s because of the awkwardness of the two of you speaking at the same time or the eagerness both of you showed to his proposal.');
      scene.text('"Great. Follow me, my ladies," he says and leads you to a private room. The bouncer seems to know him and opens the door for you.');
      scene.actions([
        { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
      ]);
    } else {
      scene.text('"Sure," you answer.');
      scene.text('However, Katja grabs your shoulder and whispers in your ear. "I\'m not going with him. You go ahead, but I\'m staying here."');
      scene.actions([
        { label: 'Go with him alone', handler: (st: GameState) => {
    scene.text('"Suits yourself," you shrug and turn to the guy. "Lead the way."');
    scene.text('"Great. Follow me, my lady," he says and leads you to a private room. The bouncer seems to know him and opens the door for you.');
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
    qspCall(s, 'boystat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have sex with him', handler: (st: GameState) => {
    (st as any).picrand = 38;
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'sex', 'var'
  } },
      { label: 'Leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
        { label: 'Stay with Katja', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend just reminded me that we need to be somewhere else. I hope you understand," you tell him. He looks disappointed, but leaves the two of you alone.');
    scene.text('"Thanks. I really didn\'t want to have a guy hitting on us right now," she says.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
              { label: 'Refuse', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2  &&  ((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You\'re about to refuse, but Katja says he can join you.');
      scene.text('She gives you a surprised look while the man looks confused.');
      scene.actions([
        { label: 'Relent and let Katja decide', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['doem'] = ((s as any).katjaQW['doem'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
        { label: 'Try to convince her to stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "I don\'t want to go with him. He gives me the wrong vibes."');
    scene.text('"I don\'t get bad vibes from him. I think he\'s actually quite hot and that we should go with him," she answers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to stay at the bar', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to stay at the bar', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t think it\'s a good idea to go with him. He really seems like a guy that won\'t stop if we tell him to when we\'re alone with him," you whisper.');
    scene.text('Katja looks at the guy again, and after a moment of thinking, she relents. "Okay. I\'m not really convinced that he\'s bad, but I\'ll stay with you," she answers.');
    // TODO-QSP: dynamic text: She turns to him. "Sorry, but my friend ' + iif(func('katja_procedural', 'willin...
    scene.text('She turns to him. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('He shrugs before leaving, looking very disappointed.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['doem'] = ((s as any).katjaQW['doem'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
      { label: 'Let Katja go with guy, but stay at the bar', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_boy'] = 1;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
    scene.text('"You can go with him if you want," you shrug.');
    // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the guy. "My friend ' + i...
    scene.text('She looks at you a little skeptical, but then turns to the guy. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so she isn\'t coming, but I\'d love to have another drink with you."');
    scene.text('He lights up before taking her hand and walking away, leaving you alone at the bar.');
    scene.actions([
      { label: 'Continue', goto: ['city_nightclub', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Thanks, but no. I think we\'ll go dancing," you tell him.');
      scene.text('"We had a good time. Maybe we can join you some other time?" Katja asks.');
      scene.text('He just shrugs before leaving, looking a little disappointed.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
            ]);
          }
        }
      }
    }
  } },
        { label: 'Tell him no', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2  &&  ((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)  &&  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') > (Math.floor(Math.random() * 1) + 80)) {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
      scene.text('"We\'d love to have you join us for a drink," Katja says before you have time to say anything.');
      scene.actions([
        { label: 'You don\'t want him to join', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.text('You lean in and whisper in Katja\'s ear. "We\'re having fun by ourselves. We don\'t need some guy. Besides, he gives me the wrong vibes…"');
    // TODO-QSP: dynamic text: She looks at him again, then at you. "Okay, you win," she whispers before she tu...
    scene.text('She looks at him again, then at you. "Okay, you win," she whispers before she turns back to him. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'prefers for us to be alone right now\') + \', so we have to decline. Maybe another time?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Let him join', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.max(0, (Math.floor(Math.random() * (100 - (((s as any).katjaQW ?? {})?.['slut'] ?? 0) - 50 + 1)) + ((((s as any).katjaQW ?? {})?.['slut'] ?? 0) - 50)) / 50));
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dringking_man_approach.jpg');
    scene.text('You tell him that he\'s welcome to join and Katja nods in agreement. You spend the time chatting with him while your glasses empty.');
    if ((Math.floor(Math.random() * 4) + 5) < ((s as any).pcs_hotcat ?? 0)) {
      scene.text('He then thanks you for a nice time, but says he has to run and leaves you and Katja alone at the bar.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        scene.text('He\'s clearly flirting with the two of you and asks if you want to join him on the dance floor.');
        scene.actions([
          { label: 'Go to the dance floor with him', handler: (st: GameState) => {
    scene.text('You agree and the three of you leave the bar and head to the dance floor.');
    scene.actions([
      { label: 'Dance', goto: ['katja_nightclub', 'dance_guy2'] },
    ]);
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend and I are going to stay at the bar," you tell him, making it clear that you\'re not interested.');
    scene.text('"Too bad, you\'ll be missing a great time," he says as he leaves, almost like you\'ve insulted him.');
    // TODO-QSP: 'Once he''s gone, Katja turns to you. ' + iif((katjaQW['QWstage'] >= 6 or katjaQW['liberated'] = 1) ...
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.text('"I\'d like to buy you another drink, but let\'s go to one of the private booths. We\'ll be more comfortable there and it\'ll be easier to get to know each other with less noise," he says.');
        scene.actions([
          { label: 'Join him', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You and Katja both end up agreeing at the same time, which causes her to giggle. You\'re not sure if it\'s because of the awkwardness of the two of you speaking at the same time or the eagerness both of you showed to his proposal.');
      scene.text('"Great. Follow me, my ladies," he says and leads you to a private room. The bouncer seems to know him and opens the door for you.');
      scene.actions([
        { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
      ]);
    } else {
      scene.text('"Sure," you answer.');
      scene.text('However, Katja grabs your shoulder and whispers in your ear. "I\'m not going with him. You can go ahead, but I\'m staying here."');
      scene.actions([
        { label: 'Go with him alone', handler: (st: GameState) => {
    scene.text('"Suits yourself," you shrug and turn to the guy "Lead the way."');
    scene.text('"Great. Follow me, my lady," he says and leads you to a private room. The bouncer seems to know him and opens the door for you.');
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
    qspCall(s, 'boystat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have sex with him', handler: (st: GameState) => {
    (st as any).picrand = 38;
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'sex', 'var'
  } },
      { label: 'Leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
        { label: 'Stay with Katja', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend just reminded me that we need to be somewhere else. I hope you understand," you tell him. He looks disappointed, but leaves the two of you alone.');
    scene.text('"Thanks. I really didn\'t want to have a guy hitting on us right now," she says.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You\'re about to tell him no when Katja says he can join you.');
      scene.text('She gives you a surprised look while the man looks confused.');
      scene.actions([
        { label: 'Relent and let Katja decide', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['doem'] = ((s as any).katjaQW['doem'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
        { label: 'Try to convince her to stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "Come on. I don\'t want to go with him. He gives me the wrong vibes."');
    scene.text('"I don\'t get bad vibes from him. I think he\'s actually quite hot and that we should go with him," Katja answers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to stay at the bar', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to stay at the bar', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t think it\'s a good idea to go with him. He really seems like a guy that won\'t stop if we tell him to when we are alone with him," you whisper.');
    scene.text('Katja looks at the guy again and after a moment of thinking, she relents. "Okay. I\'m not really convinced that he\'s bad, but I will stay with you," she answers.');
    // TODO-QSP: dynamic text: She turns to him. "I'm sorry, but my friend ' + iif(func('katja_procedural', 'wi...
    scene.text('She turns to him. "I\'m sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('He just shrugs before leaving, looking very disappointed.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with the guy', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['doem'] = ((s as any).katjaQW['doem'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room, the bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
      { label: 'Let her go with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_boy'] = 1;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
    scene.text('"You can go with him if you want to," you shrug.');
    // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the guy. "My friend ' + i...
    scene.text('She looks at you a little skeptical, but then turns to the guy. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so she\'s not coming, but I\'d love another drink with you."');
    scene.text('He lights up and takes her hand before walking away, leaving you alone at the bar.');
    scene.actions([
      { label: 'Continue', goto: ['city_nightclub', 'bar'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Thanks, but no. I think we\'ll go dancing," you tell him.');
      scene.text('"We had fun, though. Maybe some other time?" Katja asks.');
      scene.text('He just shrugs before leaving, looking a little disappointed.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
        ]);
      }
    }
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
      scene.text('You say a polite \'no\', which he accepts and leaves you in peace.');
      scene.text('"Thanks," Katja says. "I didn\'t want to talk to some random guy right now."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
      ]);
    } else {
      scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_drinnking_bar.jpg');
      // TODO-QSP: dynamic text: You spend some time hanging at the bar talking as ' + iif(katjaQW['disco_drink_b...
      scene.text('You spend some time hanging at the bar talking as \' + iif(katjaQW[\'disco_drink_bought\'] = 1, \'you and Katja\', \'Katja\') + \' enjoy\' + iif(katjaQW[\'disco_drink_bought\'] = 1, \' your drinks.\', \'s her drink.\') + \'');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).locat ?? 0)?.['Katja'] !== 53) {
    if (((s as any).katjaQW ?? 0)?.['disco_arrival'] + 600 < ((s as any).totminut ?? 0)) {
      // TODO-QSP: dynamic text: "It's getting late, <<$pcs_nickname>>. Let's go home," Katja says after finishin...
      scene.text(`"It's getting late, ${((s as any).pcs_nickname || '')}. Let's go home," Katja says after finishing her drink. It looks like there's no way to convince her to stay.`);
      scene.actions([
        { label: 'Go home with Katja', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['on_date'] = 1
  }, goto: ['katja_city', 'metro'] },
        { label: 'Stay at the nightclub', goto: ['city_nightclub', 'bar'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "It's getting late, <<$pcs_nickname>>. I'm heading home," Katja says after finis...
      scene.text(`"It's getting late, ${((s as any).pcs_nickname || '')}. I'm heading home," Katja says after finishing her drink. It looks like there's no way to convince her to stay.`);
      if ((((s as any).npc_had_sex ?? 0)?.['A14']  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2)  ||  ((s as any).home ?? 0)?.['current'] === 'university_dorm') {
        scene.actions([
          { label: 'Suggest you go home together', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Why don\'t we go back together?" you suggest.');
    scene.text('"Great idea," she replies.');
    scene.actions([
      { label: 'Go home with Katja', handler: (st: GameState) => {
    // TODO-QSP: katjaQW['on_date'] = 1
  }, goto: ['katja_city', 'metro'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Say goodbye', goto: ['city_nightclub', 'bar'] },
      ]);
    }
  } else {
    if ((!(Math.floor(Math.random() * 9) + 0))) {
      scene.text('After finishing her drink, Katja tells you that she needs to go to the restroom. She says she\'ll be back shortly, but that you should just go ahead and start dancing.');
      scene.actions([
        { label: 'Let her go', goto: ['city_nightclub', 'bar'] },
      ]);
    } else {
      scene.text('"Come on, we\'ve wasted enough time! Let\'s go dance!" she says after finishing her drink.');
      scene.actions([
        { label: 'Go dancing with Katja', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 2, 'agree');
  }, goto: ['katja_nightclub', 'dance'] },
        { label: 'Tell her that you want to have another drink', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if ((Math.floor(Math.random() * (15 - -45 + 1)) + (-45)) > ((s as any).katjaQW ?? 0)?.['dom']) {
      scene.text('"Okay, we can get another drink," she says and quickly gets the attention of the bartender.');
      scene.actions([
        { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
      ]);
    } else {
      scene.text('"I don\'t want another drink, I want to dance!" she insists, looking quite determined.');
      if (((s as any).katjaQW ?? 0)?.['dom'] < 0  ||  ((s as any).katjaQW ?? 0)?.['drinks'] > 8) {
        qspCall(s, 'willpower', 'drink', 'force', 'easy');
      } else {
        if (((s as any).katjaQW ?? 0)?.['dom'] <= 30  ||  ((s as any).katjaQW ?? 0)?.['drinks'] >= 4) {
          qspCall(s, 'willpower', 'drink', 'force');
        } else {
          qspCall(s, 'willpower', 'drink', 'force', 'hard');
        }
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her to have another drink', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her to have another drink', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"Just one more drink!" you plead. "You know you want another. Please… There\'s plenty of time for dancing later!" Katja finally gives in and quickly gets the attention of the bartender.');
    scene.actions([
      { label: 'Order a drink', goto: ['katja_nightclub', 'drink'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Relent and dance', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'stat', '');
  }, goto: ['katja_nightclub', 'dance'] },
        { label: 'Tell her she can go dance alone while you stay at the bar', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
  }, goto: ['city_nightclub', 'bar'] },
      ]);
    }
  } },
        { label: 'Tell Katja that you need to leave', goto: ['city_nightclub', 'bar'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceGuy1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing1.jpg');
  scene.text('A guy approaches you and Katja and it\'s clear that he wants to join you. He\'s rather good looking and wearing nice clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him join you', goto: ['katja_nightclub', 'dance_guy2'] },
    { label: 'Don\'t let him join', handler: (st: GameState) => {
    scene.text('You make sure to let him know that you don\'t want him to join you before you and Katja continue dancing alone, having a lot of fun.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDanceGuy2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 9) + 4)) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_guy1.jpg');
    // TODO-QSP: dynamic text: You dance through several songs, and while he's a ' + iif(rand(0, 1) = 0, 'good'...
    scene.text('You dance through several songs, and while he\'s a \' + iif(rand(0, 1) = 0, \'good\', \'terrible\') + \' dancer, he never tries to get too close to either you or Katja. In fact, whenever you try to get closer to him, he always distances himself.');
    scene.text('After some time, he thanks you for the dance and excuses himself.');
    scene.text('"Well, seems he wasn\'t that into us," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_guy3'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceGuy3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'arousal', 'foreplay', (Math.floor(Math.random() * (0 - (-5) + 1)) + ((-5))));
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_guy1.jpg');
  scene.text('You dance through several songs, and he\'s clearly into you and and Katja. He dances quite close to you and, from time to time, his hand moves from your back to your ass.');
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 13) + 0)) {
    qspCall(s, 'arousal', 'end');
    scene.text('After some time, he thanks you for the dance and excuses himself.');
    scene.text('"Seems he wasn\'t that into us after all," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      scene.text('"This is great," he says after you\'ve danced for a while. "Let\'s keep going!"');
      scene.actions([
        { label: 'Keep dancing with him', goto: ['katja_nightclub', 'dance_guy3'] },
        { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks. We need to get going," you say and look at Katja, who seems to be fine with the idea. He\'s clearly not satisfied with your reply, but he doesn\'t try to keep you.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        scene.text('After some time he suggest that you get some drinks in one of the private booths.');
        if ((((s as any).katjaQW ?? 0)?.['QWstage'] < 3  &&  ((s as any).katjaQW ?? 0)?.['liberated'] === 0)  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0) {
          scene.text('"Sorry, but we want to keep dancing," Katja says before you have time to respond.');
          scene.text('"Okay. Maybe I\'ll see you around?" he says and leaves with a disappointed look.');
          if (((s as any).katjaQW ?? 0)?.['boy_block'] === 1) {
            scene.text('"I\'m sure he just wanted to get in our panties. As if that would ever happen," she snorts.');
          } else {
            scene.text('"I\'m sorry, but I\'m not really comfortable with us being alone with strange guys," she tells you.');
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          scene.actions([
            { label: 'Join him', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You and Katja both end up agreeing at the same time, which causes her to giggle. You\'re not sure if it\'s because of the awkwardness of the two of you speaking at the same time or the eagerness both of you showed to his proposal.');
      scene.text('"Great! Follow me, my ladies," he says and leads you to a private room. The bouncer seems to know him and opens the curtain for you.');
      scene.actions([
        { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
      ]);
    } else {
      scene.text('"Sure," you answer.');
      scene.text('However, Katja grabs your shoulder and whispers in your ear. "I\'m not going with him. You can go ahead, but I\'m staying here."');
      scene.actions([
        { label: 'Go with him alone', handler: (st: GameState) => {
    scene.text('"Suits yourself," you shrug and turn to the guy. "Lead the way."');
    scene.text('"Great. Follow me, my lady," he says and leads you to a private room. The bouncer seems to know him and opens the door for you.');
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, 4);
    qspCall(s, 'boystat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have sex with him', handler: (st: GameState) => {
    (st as any).picrand = 38;
    // TODO-QSP: $sexloc = 'city_nightclub'
    // TODO-QSP: xgt 'sex', 'var'
  } },
      { label: 'Leave', goto: ['city_nightclub', 'private_rooms'] },
    ]);
  } },
        { label: 'Stay with Katja', handler: (st: GameState) => {
    scene.text('"Sorry, but my friend just reminded me that we need to be somewhere else. I hope you understand," you tell him. He looks disappointed, but leaves the two of you alone.');
    scene.text('"Thanks. I really didn\'t want to have a guy hitting on us right now," she says.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
            { label: 'Refuse', handler: (st: GameState) => {
    if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 6  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0  &&  ((s as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 21) + 40)) {
      scene.text('You\'re about to tell him no, but Katja says he can join you.');
      scene.text('She gives you a surprised look while the man looks confused.');
      if (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
        scene.actions([
          { label: 'Let her go with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_boy'] = 1;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 7;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
    scene.text('"You can go with him if you want to," you shrug.');
    // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the guy. "My friend ' + i...
    scene.text('She looks at you a little skeptical, but then turns to the guy. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so she\'s not coming, but I\'d love another drink with you."');
    scene.text('He lights up and takes her hand before walking away, leaving you alone on the dance floor.');
    scene.actions([
      { label: 'Continue', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Relent and let Katja decide', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with the guy', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
        { label: 'Try to convince Katja to stay', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "I don\'t want to go with him. He gives me the wrong vibes."');
    scene.text('"I don\'t get bad vibes from him. He\'s actually quite hot and I think that we should go with him," she answers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her to stay on the dance floor', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her to stay on the dance floor', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t think it\'s a good idea to go with him. He seems like a guy that won\'t stop if we tell him to when we are alone with him," you whisper.');
    scene.text('Katja looks at the guy again and after a moment of thinking, she relents. "Okay. I\'m not really convinced that he\'s bad, but I\'ll stay with you."');
    // TODO-QSP: dynamic text: She then turns to him. "Sorry, but my friend ' + iif(func('katja_procedural', 'w...
    scene.text('She then turns to him. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('He shrugs before leaving, looking very disappointed.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
    ]);
  } },
        { label: 'Relent and go with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    scene.text('His face lights up. "Great! Follow me, my ladies." He leads you to a private room. The bouncer seems to know him and opens the door for you.');
    scene.actions([
      { label: 'Go with him', goto: ['katja_nightclub_sex', 'private_room1'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Thanks, but no thanks. I think we\'ll stick to dancing," you tell him.');
      scene.text('"We had fun, though. Maybe some other time?" Katja asks.');
      scene.text('He leaves you, looking a disappointed.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
          ]);
        }
      } else {
        scene.text('After some time, he tells you that his place isn\'t far from here and suggests that you continue the party there, making it very clear that he\'s expecting his bedroom to be the main location.');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] <= 5  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 51) + 50)) {
          scene.text('"No. We\'d prefer to stay here and dance," Katja quickly replies in a firm voice, which clearly surprises the guy.');
          if (((s as any).katjaQW ?? 0)?.['QWstage'] >= 5  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
            scene.actions([
              { label: 'Try to convince her to go with him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: "Come on, Katja. It's going to be fun. He's quite good-looking and ' + iif(katja...
    scene.text('"Come on, Katja. It\'s going to be fun. He\'s quite good-looking and \' + iif(katjaQW[\'QWstage\'] = 5, \'we talked about you trying to have sex with a guy,\', \'I know you do like have a cock inside you,\') + \'" you whisper in her ear.');
    scene.text('Her face turns red. "I don\'t know… I\'m not sure he\'s right for us."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sex', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"I know you want his cock. Just imagine it sliding in and out of your tight, wet pussy…" you whisper in her ear and you can see her start squirming.');
    // TODO-QSP: '"Okay. Let''s go," she finally says out loud and the guy''s face lights up. You walk ' + iif(temper...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_a_guy'] },
    ]);
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
      scene.actions([
        { label: 'Go home with him alone', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(s, 'npcgeneratec', '', 0, '', Math.floor(Math.random() * 38) + 18, Math.floor(Math.random() * 2) + 3);
    scene.text('"Well, I\'m going with him. If you don\'t want to have fun, then you can stay here alone," you tell her.');
    scene.text('Katja almost looks angry. "If you get hurt, then I won\'t be able to help you. But whatever," she says before turning around and walking away.');
    // TODO-QSP: 'The guy looks a little surprised by the exchange, but takes you under his arm and walks you ' + iif...
    scene.actions([
      { label: 'Go with him', goto: ['sex_ev_start', 'hookup_npc_home_start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'arousal', 'end');
    scene.text('You resign yourself and accept Katja\'s decision. "Sorry, but my friend doesn\'t feel like it, so we\'re staying here to dance," you tell him, and he says goodbye and walks away, looking quite sad.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree and say goodbye to him', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('You agree with Katja and say goodbye to the guy.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if ((qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['dom'] >= 0)  ||  (((s as any).katjaQW ?? 0)?.['dom'] >= 25  &&  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] >= 150)) {
            scene.text('"That sounds like a good idea. I\'m sure that you have lots of ways to entertain us," Katja says in a seductive voice before you even have time to reply.');
            scene.actions([
              { label: 'Go home with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    // TODO-QSP: '"I just hope you''re man enough to really entertain a couple of hot girls like us. Let''s go," you ...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_a_guy'] },
    ]);
  } },
              { label: 'You don\'t want to go home with him', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "I don\'t want to go home with him. Who knows what will happen?"');
    scene.text('"He\'s actually quite hot and I get a good feeling from him. I\'m sure nothing we don\'t want to happen will happen. Besides, there\'s two of us and only one of him, we have nothing to be afraid of," she answers.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her not to go home with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her not to go home with him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t think it\'s a good idea to go with him. I get the feeling he might have someone waiting for us, and then what\'re we going to do?" you whisper.');
    scene.text('Katja looks at the guy again and after a moment of thinking, she relents. "Okay. I\'m not really convinced that he\'s bad, but I\'ll stay with you," she answers.');
    // TODO-QSP: dynamic text: She then turns to him. "Sorry, but my friend ' + iif(func('katja_procedural', 'w...
    scene.text('She then turns to him. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('He shrugs before leaving, looking very disappointed.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
      scene.actions([
        { label: 'Let her go home with him', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['alone_with_other_day'] = ((s as any).daystart ?? 0);
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    scene.text('"You can go with him if you want," you shrug.');
    // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the guy. "My friend ' + i...
    scene.text('She looks at you a little skeptical, but then turns to the guy. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so she isn\'t coming, but I\'d love another drink with you."');
    scene.text('He then lights up and takes her hand and walks away, leaving you alone on the dance floor.');
    scene.actions([
      { label: 'Continue', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    // TODO-QSP: 'His face lights up. "Great! Follow me, my ladies." You walk ' + iif(temper < 20, 'to the wardrobe t...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_a_guy'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            scene.text('Katja looks at you, making it clear that it\'s up to you to decide and that she\'ll do whatever you choose.');
            scene.actions([
              { label: 'Go home with the guy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    // TODO-QSP: '"That does sound like fun. Let''s go," you say and his face lights up. You walk ' + iif(temper < 20...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_a_guy'] },
    ]);
  } },
              { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks," you say. "We prefer to stay here and dance."');
    scene.text('He clearly looks disappointed, but says goodbye before leaving you and Katja alone on the dance floor.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
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

function enterDanceTwoGuys1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing1.jpg');
  scene.text('Two men approach you and Katja and it\'s clear that they want to join you. They\'re rather good looking and wearing nice clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them join you', goto: ['katja_nightclub', 'dance_two_guys2'] },
    { label: 'Don\'t let them join', handler: (st: GameState) => {
    scene.text('You make sure to let them know that you don\'t want them to join you before you and Katja continue dancing alone, having a lot of fun.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDanceTwoGuys2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 8) + 5)) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_guy1.jpg');
    // TODO-QSP: dynamic text: You dance through several songs, and while they're ' + iif(rand(0, 1) = 0, 'good...
    scene.text('You dance through several songs, and while they\'re \' + iif(rand(0, 1) = 0, \'good\', \'terrible\') + \' dancers, they never try to get too close to either you or Katja. In fact, whenever you try to get closer to one of them, he always distances himself.');
    scene.text('After some time, they thank you for the dance and excuse themselves.');
    scene.text('"Seems they weren\'t that into us," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_two_guys3'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceTwoGuys3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'arousal', 'foreplay', (Math.floor(Math.random() * (0 - (-5) + 1)) + ((-5))));
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_guy1.jpg');
  scene.text('You dance through several songs, and they\'re clearly into you and and Katja. One of them dances quite close to you and, from time to time, his hand moves from your back to your ass.');
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 13) + 0)) {
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: dynamic text: After some time, he thanks you for the dance and excuses himself. He then go to ...
    scene.text('After some time, he thanks you for the dance and excuses himself. He then go to his friend, who\'s dancing with Katja, and says something you can\'t hear.\' + iif(rand(0, 2) = 0, \' His friend just nods and\', \' He seems not to agree with his friend, but after some back and forth he relents and\') + \' thanks Katja for the dance before they leave.');
    scene.text('"Seems they weren\'t that into us after all," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      scene.text('"This is great," he says after you\'ve danced for a while. "Let\'s keep dancing," he says.');
      scene.text('You look over at Katja and her partner and it seems that they\'re also ready to dance some more.');
      scene.actions([
        { label: 'Keep dancing with them', goto: ['katja_nightclub', 'dance_two_guys3'] },
        { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks. We need to get going," you say and look at Katja, who seems to be fine with the idea. They\'re clearly not satisfied with your reply, but they don\'t try to keep you.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('After some time, he gets you and Katja close so you both can hear him. He suggests that the four of you continue the party at his place, making it very clear that he and his friend are expecting the bedroom to be the main location of the party.');
      if (((s as any).katjaQW ?? 0)?.['QWstage'] < 5  ||  ((s as any).katjaQW ?? 0)?.['boy_block'] === 1  ||  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 51) + 50)) {
        scene.text('"No. We prefer to stay here and dance," Katja quickly replies in a firm voice, which clearly surprises the guy. ');
        if (((s as any).katjaQW ?? 0)?.['QWstage'] > 5  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] === 0) {
          if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 2) {
            scene.text('She then leans into you and whispers in your ear. "I\'ve never been with two guys at once…"');
          } else {
            scene.text('');
          }
          scene.actions([
            { label: 'Try to convince her to go with them', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: "Come on, it'll be fun! They look hot and ' + iif(katjaQW['simultanous_boys'] < ...
    scene.text('"Come on, it\'ll be fun! They look hot and \' + iif(katjaQW[\'simultanous_boys\'] < 2, \' if you\'ve never been with two guys, then you should defiantly try it.\', \'I know you like to have several cocks to play with.\') + \'" you whisper in her ear.');
    // TODO-QSP: dynamic text: Her face turns red. "I don't know. I'm not sure ' + iif(katjaQW['simultanous_boy...
    scene.text('Her face turns red. "I don\'t know. I\'m not sure \' + iif(katjaQW[\'simultanous_boys\'] < 2, \'it\'s the right time to try a foursome\', \'they\'re right for us\') + \'…"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'group', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"I know you want those cocks. Just imagine one of them sliding in and out of your tight, wet pussy, while you look at me bouncing up and down the other cock…" you whisper in her ear and can see her start squirming.');
    // TODO-QSP: '"Okay. Let''s go," she finally says out loud and the men''s faces light up. You walk ' + iif(temper...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_two_guys'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'arousal', 'end');
    scene.text('You resign yourself and accept Katja\'s decision. "Sorry, but my friend doesn\'t feel like it, so we\'re staying here to dance," you tell them and they say goodbye before walking away, looking quite sad.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree and say goodbye to them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('You agree with Katja and say goodbye to the men.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if ((qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 100  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['dom'] >= 0)  ||  (((s as any).katjaQW ?? 0)?.['dom'] >= 25  &&  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] >= 150)) {
          scene.text('"That sounds like a good idea. I\'m sure that you two have lots of ways to entertain us," Katja says in a seductive voice before you even have time to reply.');
          scene.actions([
            { label: 'Go home with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    // TODO-QSP: '"I just hope you''re both man enough to really entertain a couple of hot girls like us. Let''s go,"...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_two_guys'] },
    ]);
  } },
            { label: 'You don\'t want to go home with them', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "I don\'t want to go home with them. Who knows what will happen?"');
    scene.text('"They\'re actually quite hot and I get a good feeling from them. I\'m sure nothing we don\'t want to happen will happen. I\'ll protect you if they try to do something we don\'t want," she answers while trying to look tough.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her not to go home with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her not to go home with them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t think it\'s a good idea to go with them. I got a really bad feeling from the guy I was dancing with. You can play tough, but you know damn well that we won\'t be able to do anything if they get violent!" you whisper.');
    scene.text('Katja looks at the man you were dancing with again and after a moment of thinking, she relents. "Okay. I\'m not really convinced that they\'re bad, but I\'ll stay with you," she answers.');
    // TODO-QSP: dynamic text: She then turns to them. "Sorry, but my friend ' + iif(func('katja_procedural', '...
    scene.text('She then turns to them. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('They both leave, looking very disappointed.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
      scene.actions([
        { label: 'Let her go home with them', handler: (st: GameState) => {
    scene.text('"You can go with them if you want, but I\'m staying here," you shrug.');
    if (((s as any).katjaQW ?? 0)?.['simultanous_boys'] < 2) {
      // TODO-QSP: dynamic text: Katja looks at you a little panicked. "But I've never been with two guys before!...
      scene.text('Katja looks at you a little panicked. "But I\'ve never been with two guys before! Come with me, please!" she pleads, but seeing that you won\'t relent, she turns to the guys. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so I\'ll stay with her. Maybe another time?"');
      scene.text('They both leave, looking very disappointed.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['alone_with_other_day'] = ((s as any).daystart ?? 0);
      if (((s as any).hour ?? 0) > 10) {
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
      } else {
        if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
      }
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
      // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the men. "My friend ' + i...
      scene.text('She looks at you a little skeptical, but then turns to the men. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'doesn\'t feel like it\') + \', so she isn\'t coming, but I\'d love another drink with you."');
      scene.text('Their faces light up and they take her hands and walk away, leaving you alone on the dance floor.');
      scene.actions([
        { label: 'Continue', goto: ['city_nightclub', 'dance'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say.');
    // TODO-QSP: 'Their faces lights up. "Great! Follow me, my ladies," the guy you were dancing with says and you wa...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_two_guys'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('Katja looks at you, making it clear that it\'s up to you to decide and that she\'ll do whatever you choose.');
          scene.actions([
            { label: 'Go home with the men', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (((s as any).hour ?? 0) > 10) {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
    } else {
      if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_rand3'] = ((s as any).daystart ?? 0) - 1;
    }
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja_save2'] = 54;
    if (!(s as any).locat) (s as any).locat = {}; (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
    // TODO-QSP: '"That does sound like fun. Let''s go," you say and their faces light up. You walk ' + iif(temper < ...
    scene.actions([
      { label: 'Walk to his home', goto: ['katja_city_sex', 'walking_home_with_two_guys'] },
    ]);
  } },
            { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks," you say. "We\'d prefer to stay here and dance."');
    scene.text('They clearly look disappointed, but say goodbye before leaving you and Katja alone on the dance floor.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceTwoGirls1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing2.jpg');
  scene.text('Two girls approach you and Katja and it\'s clear that they want to join you. They\'re pretty hot wearing very sexy dresses.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let them join you', goto: ['katja_nightclub', 'dance_two_girls2'] },
    { label: 'Don\'t let them join', handler: (st: GameState) => {
    scene.text('You make sure to let them know that you don\'t want them to join you before you and Katja continue dancing alone, having a lot of fun.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDanceTwoGirls2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 8) + 5)) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
    qspCall(s, 'sweat', 'add', 3);
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    qspCall(s, 'exp_gain', 'danc', 1);
    (s as any).frost = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_girl.jpg');
    // TODO-QSP: dynamic text: You dance through several songs, and while they're ' + iif(rand(0, 1) = 0, 'fant...
    scene.text('You dance through several songs, and while they\'re \' + iif(rand(0, 1) = 0, \'fantastic\', \'okay\') + \' dancers, they don\'t try anything else than dancing.');
    scene.text('After some time, they thank you for the dance and excuse themselves.');
    scene.text('"That was fun," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([{ label: 'Continue', goto: ['katja_nightclub', 'dance_two_girls3'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDanceTwoGirls3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'arousal', 'foreplay', (Math.floor(Math.random() * (0 - (-5) + 1)) + ((-5))));
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 11) + 0);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/nightclub/disco_dancing_extra_girl.jpg');
  scene.text('You dance through several songs and they start to dance closer and closer to you and Katja, form time to time one of the girls will grind her butt at you.');
  if (((s as any).pcs_hotcat ?? 0) < (Math.floor(Math.random() * 13) + 0)) {
    qspCall(s, 'arousal', 'end');
    // TODO-QSP: dynamic text: After some time, they thank you for the dance and excuse themselves, but thank y...
    scene.text('After some time, they thank you for the dance and excuse themselves, but thank you for the dance and tell you, \' + iif(pcs_danc < rand(50, 75), \'That you are a great dancer and it was a pleasure\', \'that it was fun\') + \' dancing with you before they leave.');
    scene.text('"That was fun," Katja says with a smile.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      scene.text('"This is great," the girl danicning with you in this moment says after you\'ve danced for a while. "Let\'s keep dancing," she says.');
      scene.text('You look over at Katja and the other girl, and it seems that they\'re also ready to dance some more.');
      scene.actions([
        { label: 'Keep dancing with them', goto: ['katja_nightclub', 'dance_two_guys3'] },
        { label: 'Find something else to do', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks. We need to get going," you say and look at Katja, who seems to be fine with the idea. The girls look a little disappointed with your reply, but they don\'t try to keep you.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.text('After some time, when there is a break in the song, one of the girls suggest that you go to the private room to have some drinks.');
      if (((s as any).katjaQW ?? 0)?.['sex_clossedness'] > 0  ||  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 51) + 25)) {
        scene.text('"No. We prefer to stay here and dance," Katja quickly replies quickly which makes the girls seem a little surprised. ');
        if (((s as any).npc_had_sex ?? 0)?.['A14']) {
          if (((s as any).katjaQW ?? 0)?.['simultanous_girls'] < 2) {
            scene.text('She then leans into you and whispers in your ear. "While the might just want to drink they might want to do more, and I\'ve never been with several girls at once…"');
          } else {
            scene.text('');
          }
          scene.actions([
            { label: 'Try to convince her to go with them', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: "Come on, it'll be fun! I was fun dancing with them so I'm sure it will be fun g...
    scene.text('"Come on, it\'ll be fun! I was fun dancing with them so I\'m sure it will be fun getting to know them a little better. \' + iif(katjaQW[\'simultanous_boys\'] < 2, \'Also you should try more than one girl at some point so know might be a good time if that is what they want.\', \' It might just be completely innocent drinking.\') + \'" you whisper in her ear.');
    scene.text('Her she still seems a little skeptical. "I don\'t know, I\'m not really thisty and just wanna keep dancing." She replies');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'group', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push her a little more', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (10);
    qspCall(s, 'stat', '');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"Come on. I\'m thirsty, so do that for mee please." you whisper in her ear pleadingly.');
    scene.text('"Okay. Let\'s go get that drink," she finally says out loud and the girls look happy.');
    scene.actions([
      { label: 'Go to the private room', goto: ['katja_nightclub_sex', 'privateroom_two_girls'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let it go', handler: (st: GameState) => {
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 2);
    qspCall(s, 'arousal', 'end');
    scene.text('You resign yourself and accept Katja\'s decision. "Sorry, but my friend is not thirsty, so we\'re staying here to dance," you tell them and they say goodbye before walking away.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree and say goodbye to them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('You agree with Katja and say goodbye to the girls.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if ((qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') >= 50  &&  ((s as any).katjaQW ?? 0)?.['horny'] >= 25  &&  ((s as any).katjaQW ?? 0)?.['dom'] >= 0)  ||  (((s as any).katjaQW ?? 0)?.['dom'] >= 25  &&  qspFunc(s, 'katja_procedural', 'willing_to_be_naughty') + ((s as any).katjaQW ?? 0)?.['horny'] >= 100)) {
          scene.text('"That sounds like a good idea. I\'m also getting thirsty," Katja says before you even have time to reply.');
          scene.actions([
            { label: 'Agree to have a drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"Me too, lead the way" you say to the girls');
    scene.actions([
      { label: 'Go to the private room', goto: ['katja_nightclub_sex', 'privateroom_two_girls'] },
    ]);
  } },
            { label: 'You don\'t have a drink', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja and whisper in her ear. "I\'m not thirsty. Let\'s stay here dancing"');
    // TODO-QSP: dynamic text: "I'm actually thirsty, and I would like to to know these girls a little better. ...
    scene.text('"I\'m actually thirsty, and I would like to to know these girls a little better. \' + iif(npc_had_sex[\'A14\'] and katjaQW[\'simultanous_girls\'] > 1, \'They are actually quite hot don\'t you think?\', \'I think it will be fun.\') + \'" she whispers back.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sex', 'force']; enterSetWillpower(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Convince her not to go drinking with them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Convince her not to go drinking with them', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'willpower', 'pay', 'force');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) - (Math.floor(Math.random() * 2) + 1);
    qspCall(s, 'stat', '');
    scene.text('"I really don\'t wanna go drinking with them. I get bad vibes. Like if we where going to go drinking with Bella, Irena, Staysya nad Chtistina at the same time" you whisper.');
    scene.text('Katja looks at the girls you were dancing with again and after a moment of thinking, she relents. "I don\'t really get that feeling but if you want to stay we will stay," she answers.');
    // TODO-QSP: dynamic text: She then turns to them. "Sorry, but my friend ' + iif(func('katja_procedural', '...
    scene.text('She then turns to them. "Sorry, but my friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'isn\'t thirsty\') + \', so I\'ll stay with her. Maybe another time?"');
    scene.text('The two girls then leave heading for one of the private rooms.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0) {
      scene.actions([
        { label: 'Let her go without you', handler: (st: GameState) => {
    scene.text('"You can go with them if you want, but I\'m staying here," you shrug.');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['nightclub_private_room_girls'] = 1;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_loc'] = 9;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
    // TODO-QSP: dynamic text: She looks at you a little skeptical, but then turns to the men. "My friend ' + i...
    scene.text('She looks at you a little skeptical, but then turns to the men. "My friend \' + iif(func(\'katja_procedural\', \'willing_to_be_naughty\') + katjaQW[\'horny\'] > 175, \'is boring\', \'isn\'t thirsty\') + \', so she isn\'t coming, but I\'d love a drink with you."');
    scene.text('They all then leaves the dance floor for the private rooms, leaving you alone.');
    scene.actions([
      { label: 'Continue', goto: ['city_nightclub', 'dance'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent and go with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['dom'] = ((s as any).katjaQW['dom'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
    scene.text('"Well, if you really want to," you say, and the girsl start leading you from the dance floor.');
    scene.actions([
      { label: 'Go to the private room', goto: ['katja_nightclub_sex', 'privateroom_two_girls'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('Katja looks at you, making it clear that it\'s up to you to decide and that she\'ll do whatever you choose.');
          scene.actions([
            { label: 'Go drinking with the girls', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.text('"That does sound like fun. Let\'s go have some drinks," you say and the girls start to lead you towards the private rooms.');
    scene.actions([
      { label: 'Go to the private room', goto: ['katja_nightclub_sex', 'privateroom_two_girls'] },
    ]);
  } },
            { label: 'No thanks', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
    scene.text('"Thanks, but no thanks," you say. "We aren\'t thirsty and prefer to stay here and dance."');
    scene.text('The girls then say goodbye before walking towards the private rooms leaving you and Katja alone on the dance floor.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDanceEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
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
    case 'set_willpower':
      enterSetWillpower(s, scene);
      break;
    case 'activity':
      enterActivity(s, scene);
      break;
    case 'dance_approach':
      enterDanceApproach(s, scene);
      break;
    case 'bar_approach':
      enterBarApproach(s, scene);
      break;
    case 'dance_guy_approach':
      enterDanceGuyApproach(s, scene);
      break;
    case 'dance_black_guy_approach':
      enterDanceBlackGuyApproach(s, scene);
      break;
    case 'dance_girl_approach':
      enterDanceGirlApproach(s, scene);
      break;
    case 'dance_two_guys_approach':
      enterDanceTwoGuysApproach(s, scene);
      break;
    case 'dance':
      enterDance(s, scene);
      break;
    case 'dance_end':
      enterDanceEnd(s, scene);
      break;
    case 'bar_arrive':
      enterBarArrive(s, scene);
      break;
    case 'drink':
      enterDrink(s, scene);
      break;
    case 'bar_after_drink':
      enterBarAfterDrink(s, scene);
      break;
    case 'bar_end':
      enterBarEnd(s, scene);
      break;
    case 'dance_guy1':
      enterDanceGuy1(s, scene);
      break;
    case 'dance_guy2':
      enterDanceGuy2(s, scene);
      break;
    case 'dance_guy3':
      enterDanceGuy3(s, scene);
      break;
    case 'dance_two_guys1':
      enterDanceTwoGuys1(s, scene);
      break;
    case 'dance_two_guys2':
      enterDanceTwoGuys2(s, scene);
      break;
    case 'dance_two_guys3':
      enterDanceTwoGuys3(s, scene);
      break;
    case 'dance_two_girls1':
      enterDanceTwoGirls1(s, scene);
      break;
    case 'dance_two_girls2':
      enterDanceTwoGirls2(s, scene);
      break;
    case 'dance_two_girls3':
      enterDanceTwoGirls3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const katja_nightclub: LocationDef = {
  name: 'katja_nightclub',
  title: 'You see <a href="exec: gt \'katja_nightclub\',\'dance_approach\'',
  region: 'other',
  enter: enter,
};
