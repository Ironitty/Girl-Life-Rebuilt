import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterYakov(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  (s as any).loc_arg = 'Yakov';
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<h3><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
  scene.text(qspFunc(s, 'npc_notes', ((s as any).boy ?? '')));
  if (((s as any).Yakov ?? 0)?.['hadSex'] === 1) {
    scene.text(`As you know very well, ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} has ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pav_shared_yakov/u0027, /u0027yakov_dick/u0027); return false;">dick</a> with always smoothly shaved pubic hair.`);
  }
  scene.text(`<b>Today he looks to be in a ${(((s as any).Yakov ?? 0)?.['mood_txt'] ?? '')} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Yakov ?? 0)?.['served']) < 180) {
    ((s as any).Yakov = (s as any).Yakov ?? {})['serve'] = 0;
    scene.text(`It's not even been 3 hours since you last served ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')} is that a cum? Please go wash yourself."</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).cumloc ?? 0)[2] > 0  ||  ((s as any).cumloc ?? 0)[5] > 0  ||  ((s as any).cumloc ?? 0)[6] > 0  ||  ((s as any).cumloc ?? 0)[7] > 0) {
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')} is that a cum on your clothes? Please go change or at least strip it down."</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')} did you just have sex with the other guys? Because you forgot to wash out the cum!"</font>`);
        scene.actions([
          { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
        ]);
      } else {
        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Hey sweetie, how are you?"</font>`);
        if (((s as any).Yakov ?? 0)?.['serve'] === 1) {
          qspGoto(s, 'pav_shared_yakov', 'Yakov_Serve');
          scene.actions([
            { label: 'Offer him to serve', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['served'] = ((st as any).totminut ?? 0);
  } },
          ]);
        }
        scene.actions([
          { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
          { label: 'Chat with him', goto: ['pav_shared_yakov', 'Yakov_Chat'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterYakov_Chat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  (s as any).loc_arg = 'Yakov_Chat';
  scene.text(`<h3><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
  if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['comes']) {
    ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
    qspGoto(s, 'pav_shared_apt', 'Yakov_Room');
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Yakov ?? 0)?.['sleeps']  ||  ((s as any).hour ?? 0) < ((s as any).Yakov ?? 0)?.['wakes']) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
      qspGoto(s, 'pav_shared_apt', 'Yakov_Room');
    }
  }
  if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 0) {
    (s as any).say = (Math.floor(Math.random() * 2) + 1);
    if (((s as any).say ?? 0) === 1) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} is looking at your nude body wondering…`);
        if (((s as any).pcs_bmi ?? 0) <= 15) {
          scene.text(`He is not very content with the sight: <font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, are you not anorexic? Better not, it is a terrible thing."</font>`);
        } else {
          if (((s as any).pcs_bmi ?? 0) >= 15  &&  ((s as any).pcs_bmi ?? 0) <= 20) {
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, you have nice bodyshape you know. Do you exercise or are you mp4ten from nature?"</font>`);
          } else {
            scene.text(`He is not very content with the sight: <font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, you should eat less, too much body fat is bad for your sports performance."</font>`);
          }
        }
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Adorable panties sweetie, where did you buy those?"</font>`);
        }
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          scene.text('As you accidentally turn around, he gazes between your asscheeks on the plug stuck in your ass.');
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, is that a buttplug??"</font> (his eyes spark with weird shine).`);
          if ((Math.floor(Math.random() * 101) + 0) < 30) {
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Yes ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}, it is. Do you like it? Will you help me with it? It seems stuck."</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes! How does it feel walking around with that inside you?"</font>`);
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"It is… arousing. And also fulfilling. If you know what I mean."</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yea… I guess!"</font>`);
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"So will you help with it?"</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"You mean take it out? No! It would be a shame to relieve you of the pleasure. But I think it needs a little adjustment here and there… Let me see!"</font>`);
            scene.actions([
              { label: 'Let him play with it', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['chatLvl'] = 10;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
            ]);
          }
        }
      } else {
        if (((s as any).PCloBimbo ?? 0) === 1) {
          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} is looking at your outfit with suspicion.`);
          if (((s as any).pcs_bmi ?? 0) >= 12  &&  ((s as any).pcs_bmi ?? 0) <= 25) {
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"What a sexy dress are you wearing! Aren't you afraid it is too sexy for some people in the town, though?"</font>`);
          } else {
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Nice dress sweetie, but it would look better if you lost some fat, you know…"</font>`);
          }
        } else {
          if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} is looking at your outfit with suspicion.`);
            if (((s as any).pcs_bmi ?? 0) <= 25) {
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I love sexy dresses on you sweetie, but this one makes you look like a… playgirl if you know what I mean."</font>`);
            } else {
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sweetie this dress one makes you look like a… playgirl if you know what I mean."</font>`);
            }
          }
        }
      }
    } else {
      if (((s as any).say ?? 0) === 2) {
        if (((s as any).age ?? 0) < 18) {
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, you said you are ${((s as any).age ?? '')} years old. Are you doing some sports? You should."</font>`);
        }
      }
    }
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([
        { label: 'Chat about everyday stuff', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        (s as any).sayN = (Math.floor(Math.random() * 10) + 1);
        if (((s as any).sayN ?? 0) === 1) {
          scene.text(`<i><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Doing sports is the way of my life. I cannot imagine not doing any."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 2) {
          scene.text(`<i><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I need to work harder on my abs."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 3) {
          scene.text(`<i><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"A good soccer player has two main skills - the game itself and… his haircut."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 4) {
          scene.text(`<i><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I hate staying sweaty a game. I shower after every one of them."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 5) {
          scene.text(`<i><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Using drugs to improve one's sporting abilities is wrong."</font></i>`);
        }
        scene.text('<i>You spent some time chatting with him about sport, his trophies and achievements, slightly improving your relation with him.</i>');
        qspCall(s, 'npc_relationship', 'modify', 'A264', 1);
        qspCall(s, 'stat', '');
        (s as any).intimateTalkCh = (Math.floor(Math.random() * 101) + 0);
        if (((s as any).Yakov ?? 0)?.['mood'] <= 4  &&  ((s as any).intimateTalkCh ?? 0) <= 50) {
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 20;
        } else {
          ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
        }
        scene.actions([
          { label: 'Continue', goto: ['pav_shared_yakov', 'Yakov_Chat'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 20) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, didn't you change your mind about easing off some of the rent?"</font>`);
            scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What do you mean?"</font>`);
            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Well as we talked about it before, you know… to cook for us or clean up a bit…"</font>`);
            scene.actions([
              { label: 'Say you are still not interested in being their maid', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
              { label: 'Say you are willing to do some work after all', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['servitudeLvl'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 1) {
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, didn't you change your mind about easing off some more of the rent?"</font>`);
              scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What do you mean? I already clean and cook for you."</font>`);
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Well we also talked about this before, you know… to help us ease a bit of stress if you know what I mean"</font>`);
              scene.actions([
                { label: 'Say you are still not interested in being their cumbucket', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                { label: 'Say you are willing to spread your legs a bit after all', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['servitudeLvl'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
                scene.actions([
                  { label: 'Talk about sex', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 30;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                  { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 30) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            scene.text(`You get into rather passionate discussion about sex and all that stuff. ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} seems to love to talk about such topics.`);
            ((s as any).shared_apt = (s as any).shared_apt ?? {})['resCh'] = (Math.floor(Math.random() * 6) + 0);
            if (((s as any).shared_apt ?? 0)?.['resCh'] <= 3) {
              ((s as any).shared_apt = (s as any).shared_apt ?? {})['topicR'] = (Math.floor(Math.random() * 5) + 1);
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 1) {
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} passionately tells you he loves looking at the girls face when she orgasms.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 2) {
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} passionately tells you he loves when a girl is touching with his asscheeks.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 3) {
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} passionately tells you he adores blond girls the most.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 4) {
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} passionately tells you his ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long dick is just enough to make love and not pain.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 5) {
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} passionately tells you he loves when the girl is a sporting type.`);
              }
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['resCh'] === 4) {
                if (((s as any).Yakov ?? 0)?.['anal'] === 0) {
                  scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} admits that no girl has yet allowed him to fuck her ass.`);
                  ((s as any).Yakov = (s as any).Yakov ?? {})['doAnal'] = 1;
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                  ]);
                }
              } else {
                if (((s as any).shared_apt ?? 0)?.['resCh'] === 5) {
                  if (((s as any).Yakov ?? 0)?.['anal'] === 0) {
                    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} almost secretly tells you he owns a dildo so big that no girl can insert it into her entirely.`);
                    ((s as any).Yakov = (s as any).Yakov ?? {})['doDildo'] = 1;
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
                    ]);
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 10) {
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/buttplugplay.mp4');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Let's see what you have in there…"</font>`);
      scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes the plug and slowly pulls it halfway out, gazing and how big it is.`);
      scene.text('Then he twists it around, still in your ass and pushes it back in there, repeating this few times.');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I think it fits better now."</font>`);
      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Thank you ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}!"</font>`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['chatLvl'] = 0;
  }, goto: ['pav_shared_yakov', 'Yakov_Chat'] },
      ]);
    }
  }
  scene.build();
}

function enterYakovDick(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text(`<h3><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}</font></h3>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/cockflaccid.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/cockflaccid.jpg');
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -80) {
    ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'terrible';
    (s as any).color_rel = 'ff0000';
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -60) {
      ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'very bad';
      (s as any).color_rel = 'ff7824';
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -40) {
        ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'bad';
        (s as any).color_rel = 'fcb503';
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -20) {
          ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'strained';
          (s as any).color_rel = 'f0cc00';
        } else {
          if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 0) {
            ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'neutral';
            (s as any).color_rel = 'fcfc0f';
          } else {
            if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 20) {
              ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'good';
              (s as any).color_rel = 'abf246';
            } else {
              if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 40) {
                ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'great';
                (s as any).color_rel = '84fc03';
              } else {
                if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 60) {
                  ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'excellent';
                  (s as any).color_rel = '5eff00';
                } else {
                  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 80) {
                    ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'fantastic';
                    (s as any).color_rel = '03ff39';
                  } else {
                    if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] >= 80) {
                      ((s as any).rel_word = (s as any).rel_word ?? {})[String((s as any).boy ?? 0)] = 'incredible';
                      (s as any).color_rel = '00ff7e';
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
  scene.text('Your relationship with ' + (((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '') + ' is <font color=#' + ((s as any).color_rel ?? '') + '>' + (((s as any).rel_word ?? 0)?.[String((s as any).boy ?? 0)] ?? '') + '</font>.');
  scene.text(qspFunc(s, 'npc_notes', ((s as any).boy ?? '')));
  scene.text(`His mood is ${(((s as any).Yakov ?? 0)?.['mood_txt'] ?? '')}.`);
  scene.text(`His dick is ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long with always smoothly shaved pubic hair.`);
  if (((s as any).Yakov ?? 0)?.['hj'] === 1) {
    scene.text('-you jerked him off');
  }
  if (((s as any).Yakov ?? 0)?.['hj'] > 1) {
    scene.text(`-you jerked him off ${(((s as any).Yakov ?? 0)?.['hj'] ?? '')} times`);
    // TODO-QSP: if Yakov['hjFail'] > 1: ' and failed to make him cum with your hands <<Yakov[''hjFail'']>> times'
  }
  if (((s as any).Yakov ?? 0)?.['bj'] === 1) {
    scene.text('-you have given him a blowjob');
  }
  if (((s as any).Yakov ?? 0)?.['bj'] > 1) {
    scene.text(`-you have given him ${(((s as any).Yakov ?? 0)?.['bj'] ?? '')} blowjobs`);
    // TODO-QSP: if Yakov['bjFail'] > 1: ' and failed to make him cum with your mouth <<Yakov[''bjFail'']>> times'
  }
  if (((s as any).Yakov ?? 0)?.['bjDeep'] === 1) {
    scene.text('-you have given him a blowjob with deepthroat');
  }
  if (((s as any).Yakov ?? 0)?.['bjDeep'] > 1) {
    scene.text(`-you have given him ${(((s as any).Yakov ?? 0)?.['bjDeep'] ?? '')} blowjobs with deepthroat`);
    if (((s as any).Yakov ?? 0)?.['bjFailPuke'] > 1) {
      scene.text(` but failed and puked in his crotch ${(((s as any).Yakov ?? 0)?.['bjFailPuke'] ?? '')} times`);
    }
    if (((s as any).Yakov ?? 0)?.['bjFailPuke'] > 1) {
      scene.text(` but failed and fainted impaled on his cock ${(((s as any).Yakov ?? 0)?.['bjFailFaint'] ?? '')} times`);
    }
  }
  if (((s as any).Yakov ?? 0)?.['swall'] === 1) {
    scene.text('-you have swallowed his semen');
  }
  if (((s as any).Yakov ?? 0)?.['swall'] > 1) {
    scene.text(`-you have swallowed ${(((s as any).Yakov ?? 0)?.['swall'] ?? '')} loads in total`);
  }
  if (((s as any).Yakov ?? 0)?.['vag'] === 1) {
    scene.text('-you had vaginal sex with him');
    if (((s as any).Yakov ?? 0)?.['vagCumInside'] === 1) {
      scene.text(' and let him cum inside your pussy');
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted'] === 1) {
      scene.text(' and he also came inside your pussy against your will');
    }
  }
  if (((s as any).Yakov ?? 0)?.['vag'] > 1) {
    scene.text(`-you had vaginal sex with him ${(((s as any).Yakov ?? 0)?.['vag'] ?? '')} times`);
    if (((s as any).Yakov ?? 0)?.['vagCumInside'] >= 1) {
      scene.text(` and let him cum inside your pussy ${(((s as any).Yakov ?? 0)?.['vagCumInside'] ?? '')} times`);
    }
    if (((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted'] >= 1) {
      scene.text(` and he also came inside your pussy against your will ${(((s as any).Yakov ?? 0)?.['vagCumInsideUnwanted'] ?? '')} times`);
    }
  }
  if (((s as any).Yakov ?? 0)?.['cumVag'] > 1) {
    scene.text(`-in total he pumped ${(((s as any).Yakov ?? 0)?.['cumVag'] ?? '')} loads inside your pussy`);
  }
  if (((s as any).Yakov ?? 0)?.['anal'] === 1) {
    scene.text('-you had anal sex with him');
    if (((s as any).Yakov ?? 0)?.['analCumInside'] === 1) {
      scene.text(' and let him cum inside your ass');
    }
    if (((s as any).Yakov ?? 0)?.['analCumInsideUnwanted'] === 1) {
      scene.text(' and he also came inside your anus against your will');
    }
  }
  if (((s as any).Yakov ?? 0)?.['anal'] > 1) {
    scene.text(`-you had anal sex with him ${(((s as any).Yakov ?? 0)?.['anal'] ?? '')} times`);
    if (((s as any).Yakov ?? 0)?.['analCumInside'] >= 1) {
      scene.text(` and let him cum inside your ass ${(((s as any).Yakov ?? 0)?.['analCumInside'] ?? '')} times`);
    }
    if (((s as any).Yakov ?? 0)?.['analCumInsideUnwanted'] >= 1) {
      scene.text(` and he also came inside your ass against your will ${(((s as any).Yakov ?? 0)?.['analCumInsideUnwanted'] ?? '')} times`);
    }
  }
  if (((s as any).Yakov ?? 0)?.['analVag'] > 1) {
    scene.text(`- he pumped ${(((s as any).Yakov ?? 0)?.['cumAnal'] ?? '')} loads of cum into your anus`);
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === -4) {
    scene.text('-you wanted to give him a show with a giant dildo, but you were afraid of its size just from seeing it');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === -3) {
    scene.text('-you once gave him a show with a giant dildo, but it was a horrible experience and you\'ll never do it again');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === -2) {
    scene.text('-you once gave him a show with a giant dildo, but it felt very humiliating and he knows you will not do it again');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === -1) {
    scene.text('-you once gave him a show with a giant dildo, you do not mind but also do not find it arousing and he knows you will not do it again');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === 1  &&  ((s as any).dildoLike ?? 0) === 1) {
    scene.text('-you once gave him a show with a giant dildo, you do not mind but also do not find it arousing, but he knows you are willing to do it repeatedly');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] > 1  &&  ((s as any).dildoLike ?? 0) === 1) {
    scene.text(`-you gave him a show with a giant dildo ${(((s as any).Yakov ?? 0)?.['dildo'] ?? '')} times, you do not mind but also do not find it arousing, but he knows you are willing to do it repeatedly`);
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] === 1  &&  ((s as any).dildoLike ?? 0) === 2) {
    scene.text('-you once gave him a show with a giant dildo, you do find it somewhat arousing and he knows you are willing to do it repeatedly');
  }
  if (((s as any).Yakov ?? 0)?.['dildo'] > 1  &&  ((s as any).dildoLike ?? 0) === 2) {
    scene.text(`-you gave him a show with a giant dildo ${(((s as any).Yakov ?? 0)?.['dildo'] ?? '')} times, you do find it somewhat arousing and he knows you are willing to do it repeatedly`);
  }
  if (((s as any).loc_arg ?? 0) === 'Yakov') {
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_yakov', 'Yakov'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => { qspGoto(st, 'pav_shared_apt', ((st as any).loc_arg ?? '')); } },
    ]);
  }
  scene.build();
}

function enterYakov_Serve(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).loc_arg = 'Yakov_Serve';
  scene.text(`<h3><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg');
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['subStep'] = 0;
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['sexCh'] = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).Yakov ?? 0)?.['mood'] >= 7) {
    ((s as any).Yakov = (s as any).Yakov ?? {})['served'] = 0;
    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Not now ${((s as any).pcs_firstname ?? '')}, I am exhausted."</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['sexCh'] < 40) {
      ((s as any).Yakov = (s as any).Yakov ?? {})['served'] = 0;
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Not now ${((s as any).pcs_firstname ?? '')}, I have to excersice in a while."</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['actionR'] = (Math.floor(Math.random() * 4) + 2);
      if (((s as any).shared_apt ?? 0)?.['actionR'] === 2) {
        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sure ${((s as any).pcs_firstname ?? '')}, I could use a nice blowjob."</font>`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['actionR'] === 3) {
          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Good idea, I would like to have sex."</font>`);
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['actionR'] === 4) {
            if (((s as any).Yakov ?? 0)?.['anal'] === 0) {
              if (((s as any).Yakov ?? 0)?.['doAnal'] === 1) {
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I am not sure what I enjoy more with you ${((s as any).pcs_firstname ?? '')}…"</font>`);
                scene.actions([
                  { label: 'It\'s your choice', goto: ['pav_shared_yakov', 'Yakov_Serve'] },
                  { label: 'You told me you have never tried anal, didn\'t you?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
                ]);
              } else {
                qspGoto(s, 'pav_shared_yakov', 'Yakov_Serve');
              }
            } else {
              if (((s as any).Yakov ?? 0)?.['anal'] >= 1) {
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sure ${((s as any).pcs_firstname ?? '')}, I would like to take enjoy your beautiful ass this time."</font>`);
                scene.actions([
                  { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
                ]);
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['actionR'] === 5) {
              if (((s as any).Yakov ?? 0)?.['dildo'] === 0) {
                if (((s as any).Yakov ?? 0)?.['doDildo'] === 1) {
                  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I am not sure what I enjoy more with you ${((s as any).pcs_firstname ?? '')}…"</font>`);
                  scene.actions([
                    { label: 'It\'s your choice', goto: ['pav_shared_yakov', 'Yakov_Serve'] },
                    { label: 'You told me you own some kind of giant dildo, do you?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                  ]);
                } else {
                  qspGoto(s, 'pav_shared_yakov', 'Yakov_Serve');
                }
              } else {
                if (((s as any).Yakov ?? 0)?.['dildo'] >= 1) {
                  scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Great ${((s as any).pcs_firstname ?? '')}, I want to see you ride the Big boy once again!"</font>`);
                  scene.actions([
                    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                  ]);
                }
              }
            }
          }
        }
      }
      if (((s as any).shared_apt ?? 0)?.['actionR'] > 1) {
        scene.actions([
          { label: 'Say you changed your mind and leave', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['served'] = 0;
    qspCall(st, 'npc_relationship', 'modify', 'A264', (-1));
    qspGoto(st, 'pav_shared_apt', 'start');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterYakov_Suck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  scene.text(`<b><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} - blowjob</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/cockflaccid.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>');
    }
  }
  (s as any).loc_arg = 'Yakov_Suck';
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_blowjob']);
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} orgasm build-up: ` + ((s as any).orgB ?? '') + '/100');
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).orgB = undefined;
    (s as any).cockHard = undefined;
    (s as any).failC = undefined;
    scene.img('images/locations/pavlovsk/resident/sharedapt/sp/cockflaccid.jpg');
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes down his pants, revealing his flaccid cock. He relaxes on his bed, expecting you to do the service.`);
    scene.text('You drop on your knees and crawl to him, trying to move as sexy as possible.');
    scene.actions([
      { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
      { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
      { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
      { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      scene.img('images/shared/sex/blowjob/kotovbjbonus7.mp4');
      scene.text('You decide that the best approach is to arouse him first.');
      scene.text('Kneeling between his legs, you show him the whole length of your tongue, looking as lusty as you can.');
      scene.text('Slowly you move your head down in his crotch and bellow his phallus. The moment you start using your tongue on his device, you can feel the increased pulsation in his veins, making the cock larger and thicker every second.');
      (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 5) + 1));
      (s as any).cockHard = 1;
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
        { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
        { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
        { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        scene.img('images/shared/sex/blowjob/kotovbjbonus3.mp4');
        scene.text(`You take ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cock in your hand, pointing the tip in front of your mouth.`);
        scene.text(`As it was your favorite puppy, you start to gently lick the tip all around, slowly making the cock to get harder and harder, finally reaching his full ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm length.`);
        qspCall(s, 'arousal', 'bj', 3);
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 6) + 2));
        (s as any).cockHard = 1;
        scene.actions([
          { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
          { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
          { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
          { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          scene.img('images/shared/sex/blowjob/kotovbj114.mp4');
          if ((!((s as any).cockHard ?? 0))) {
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 11) + 5));
            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s cock is not hard yet, but you start to suck the yet soft tip as if it was, slurping aloud.`);
            scene.text('You can feel that slowly his member becomes hard right in your mouth.');
            (s as any).cockHard = 1;
          } else {
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 11) + 10));
            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s already hard cock points toward you and you suck the dark pink tip as a lollipop.`);
          }
          qspCall(s, 'arousal', 'bj', 3);
          qspCall(s, 'stat', '');
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'Try to make him cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 6;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            ]);
          }
          scene.actions([
            { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            { label: 'Deepthroat', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            scene.img('images/shared/sex/blowjob/kotovbj111.mp4');
            if ((!((s as any).cockHard ?? 0))) {
              (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 15));
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s cock is not hard yet, but you start to suck the member as if it was, making almost half of it disappear in your throat every time you move on.`);
              scene.text('You can slowly feel his member becoming hard right in your mouth, making you choke and gag on it more and more with every second.');
              (s as any).cockHard = 1;
            } else {
              (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s already hard cock points toward you and you suck almost half of it, sucking and slurping it as best as you can.`);
            }
            qspCall(s, 'arousal', 'bj', 8);
            qspCall(s, 'stat', '');
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'Try to make him cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 6;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
              ]);
            }
            scene.actions([
              { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
              { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
              { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
              { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
              { label: 'Deepthroat', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              scene.img('images/shared/sex/blowjob/shower7.mp4');
              (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 40));
              scene.text(`You decide to take ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s hard, ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long cock all the way your throat.`);
              scene.text('You force yourself on to it, overcoming the gag reflex in your throat, saliva and tears almost squirting out of you.');
              scene.text('Even though his cock is not the largest one, it is long enough to make you gag.');
              scene.text('Doing this several times in a row, you try to hold on as long as you can with dick all the way down in your throat.');
              ((s as any).Yakov = (s as any).Yakov ?? {})['bjDeep'] = 1;
              qspCall(s, 'arousal', 'bj', 6);
              qspCall(s, 'stat', '');
              ((s as any).shared_apt = (s as any).shared_apt ?? {})['deepthroatFailCh'] = (Math.floor(Math.random() * 101) + 0);
              (s as any).fadeOutCh = (Math.floor(Math.random() * 101) + 0);
              if (((s as any).shared_apt ?? 0)?.['deepthroatFailCh'] <= 10) {
                scene.text(`<b>You try too hard to put it as far as possible, unable to hold the gag reflex anymore, still with his dick inside you vomit right in ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s crotch!</b>`);
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 8;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                ]);
              } else {
                if (((s as any).fadeOutCh ?? 0) <= 10) {
                  scene.text('<b>You try too hard to keep the cock inside you as long as possible, not being able to catch enough breath. Suddenly all goes dark and you fade away…</b>');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 9;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                  ]);
                } else {
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'Try to make him cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 6;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Lick his balls', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    { label: 'Lick the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    { label: 'Suck the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    { label: 'Deepthroat', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                  ]);
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
                scene.text('You decided that now it\'s time to try and make him finally cum.');
                scene.text('Intensifying the pressure and pace, you expect him every moment to moan and be done with it.');
                qspCall(s, 'arousal', 'bj', 5);
                ((s as any).shared_apt = (s as any).shared_apt ?? {})['cumCh'] = (Math.floor(Math.random() * 101) + 0);
                if (((s as any).shared_apt ?? 0)?.['cumCh'] <= 70) {
                  scene.img('images/characters/pavlovsk/resident/leonid/sex/cummouth1.mp4');
                  scene.text(`Your attempt is successful, as ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cums right into your mouth and on your face.`);
                  ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                  scene.actions([
                    { label: 'Get up', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                  ]);
                } else {
                  (s as any).failC = ((s as any).failC ?? 0) + (1);
                  if (((s as any).failC ?? 0) >= 3) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfail.jpg');
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sweetie if you can't suck a cock don't do it. Leave me be!"</font>`);
                    scene.actions([
                      { label: 'Get up', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 7;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    ]);
                  } else {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfailtryagain.mp4');
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, sweetie, what are you doing down there?"</font>`);
                    if (((s as any).failC ?? 0) === 1) {
                      scene.text('He is getting nervous…');
                    }
                    if (((s as any).failC ?? 0) === 2) {
                      scene.text('He is obviously annoyed, you better try to finish him now!');
                    }
                    scene.actions([
                      { label: 'Suck just the tip', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                      { label: 'Suck the cock', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                      { label: 'Deepthroat', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_yakov', 'Yakov_Suck'] },
                    ]);
                  }
                }
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 7) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                  scene.text(`You get up from your knees, looking at ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}:<font color=#${((s as any).pcs_font ?? '')}>"I'm sorry I was unable to satisfy you."</font>.`);
                  scene.text(`He looks annoyed:<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Try better next time."</font>`);
                  qspCall(s, 'npc_relationship', 'modify', 'A264', (-3));
                  ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                  ((s as any).Yakov = (s as any).Yakov ?? {})['bjFail'] = ((s as any).Yakov['bjFail'] ?? 0) + (1);
                  scene.actions([
                    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 8) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjdeepthroatpuke.mp4');
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Oh my god ${((s as any).pcs_firstname ?? '')}, have you just puked into my crotch??!!"</font>`);
                    scene.text(`Cleaning your face and mouth with your clothes, all you can say is <font color=#${((s as any).pcs_font ?? '')}>"I'm sorry…"</font>.`);
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Oh gosh ${((s as any).pcs_firstname ?? '')}, I think I'm gonna puke too! Do something!"</font>`);
                    qspCall(s, 'npc_relationship', 'modify', 'A264', (-5));
                    ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                    ((s as any).Yakov = (s as any).Yakov ?? {})['bjFail'] = ((s as any).Yakov['bjFail'] ?? 0) + (1);
                    ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailPuke'] = ((s as any).Yakov['bjFailPuke'] ?? 0) + (1);
                    scene.actions([
                      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 9) {
                      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/faint.jpg');
                      scene.text(`You wake up being slapped in your face: <font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}! ${((s as any).pcs_firstname ?? '')}! Wake up!"</font>`);
                      scene.text(`Your vision slowly returns, but you're still confused<font color=#${((s as any).pcs_font ?? '')}>"Wh… what happened?"</font>`);
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I think you have held your breath for too long and fainted, ${((s as any).pcs_firstname ?? '')}."</font> He is feeling compassionate to you.`);
                      qspCall(s, 'npc_relationship', 'modify', 'A264', 1);
                      ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFail'] = ((s as any).Yakov['bjFail'] ?? 0) + (1);
                      ((s as any).Yakov = (s as any).Yakov ?? {})['bjFailFaint'] = ((s as any).Yakov['bjFailFaint'] ?? 0) + (1);
                      scene.actions([
                        { label: 'Get up and leave', goto: ['pav_shared_apt', 'start'] },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                        ((s as any).Yakov = (s as any).Yakov ?? {})['bj'] = ((s as any).Yakov['bj'] ?? 0) + (1);
                        if (((s as any).Yakov ?? 0)?.['mood'] <= 7) {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Thank you my sweetie."</font>`);
                          scene.text(`Cleaning your face and mouth off the cum: <font color=#${((s as any).pcs_font ?? '')}>"You are always welcome. Seeya!"</font>.`);
                          qspCall(s, 'npc_relationship', 'modify', 'A264', 1);
                          ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                        } else {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} doesn't pay any more attention to you, getting back to reading his sports magazine.`);
                          scene.text('You just pack your things and quietly leave through the door.');
                          ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                        }
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Get up and leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
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

function enterYakov_SexVaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  scene.text(`<b><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} - vaginal sex</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>');
    }
  }
  (s as any).loc_arg = 'Yakov_SexVaginal';
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_vaginal']);
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} orgasm build-up: ` + ((s as any).orgB ?? '') + '/100');
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).orgB = undefined;
    (s as any).cockHard = undefined;
    (s as any).failC = undefined;
    (s as any).clothingworntype = 'nude';
    scene.img('images/locations/city/residential/sauna/sex/simplystrip1.mp4');
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    scene.text(`His hairless, muscular body has a bronze tan. He moves towards you, lubing his ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, those panties are adorable, but they will get in the way you know?"</font>`);
      scene.text('You entirely forgot to take them off!');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes you by the waist, delicately kissing you.`);
    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Do you want to make love in a certain position, or should I choose?"</font>`);
    if (((s as any).Yakov ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['hisPos'] = (Math.floor(Math.random() * 3) + 1);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = (((st as any).shared_apt ?? 0)?.['hisPos']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} kneels between those, gently spreading them a bit wider with his hands.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        scene.text('You can feel a warm sensation between your legs, replaced by pressure and suddenly even a mild pain. That\'s when he enters your tender pussy.');
        scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} begins to move inside you, ever-increasing the pace.`);
        scene.text('In a few moments, he starts groaning, obviously enjoying the fuck.');
        qspCall(s, 'arousal', 'vaginal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          scene.img('images/shared/sex/vag/miss/kotovsexbonus3.mp4');
          scene.text('As he continuously fucks your pussy, you rub his hairless ass, making him even hornier.');
          scene.text('As you move your hands around his smooth asscheeks, it seems to arouse him even more.');
          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
          qspCall(s, 'arousal', 'vaginal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
          if (((s as any).orgB ?? 0) < 100) {
            qspGoto(s, 'pav_shared_yakov', 'Yakov_SexVaginal');
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
            ]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexVaginal');
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/shared/sex/vag/doggy/kotovsex10.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass high as possible.');
          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} kneels behind you, rubbing your asscheeks. He starts probing your pussy with his lubed fingers, sensitively stimulating your labia and clitoris.`);
          scene.text('Then he takes his dick and slowly enters your moist hole, pushing in until you he feels it\'s starting to feel enough for you.');
          scene.text('The first mild pain fades away and you can feel building warmth and a good feeling of being fucked from behind like a mare in heat.');
          qspCall(s, 'arousal', 'vaginal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            scene.img('images/shared/sex/vag/facedown/kotovsexbonus20.mp4');
            scene.text('As he continuously fucks your pussy, you reach for his smooth balls bashing your clitoris from behind and rubbing it, making his slow movements even more passionate.');
            scene.text('He often plays with your anus with his fingers during the sex, using the doggystyle position to his advantage.');
            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
            qspCall(s, 'arousal', 'vaginal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
            if (((s as any).orgB ?? 0) < 100) {
              qspGoto(s, 'pav_shared_yakov', 'Yakov_SexVaginal');
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
              ]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexVaginal');
  } },
              ]);
            }
          }
        }
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagsidefuck1.jpg');
            scene.text('You lie on the bed, raising the upper leg in the air, exposing your tender pussy.');
            scene.text('He takes this as an invitation, lying behind you.');
            scene.text('He rubs your ass, slowly making his way to your hole, playing with it for a while.');
            scene.text(`Finally ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes his rod, pointing the tip right to the entry of your vagina.`);
            scene.text('He starts pushing it inside, and as it is lubed, it goes in quite easily.');
            qspCall(s, 'arousal', 'vaginal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagsidefuck2.mp4');
              scene.text('As he continuously fucks your pussy, you reach for his smooth balls and rub them, making his slow movements even more passionate.');
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
              qspCall(s, 'pain', '1', 'vaginal', 'stretch');
              qspCall(s, 'arousal', 'vaginal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
              if (((s as any).orgB ?? 0) < 100) {
                qspGoto(s, 'pav_shared_yakov', 'Yakov_SexVaginal');
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
                ]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexVaginal');
  } },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} is groaning loudly, you can say that he is reaching his orgasm.`);
              scene.text('You decide to tell him:');
              ((s as any).Yakov = (s as any).Yakov ?? {})['vag'] = ((s as any).Yakov['vag'] ?? 0) + (1);
              ((s as any).shared_apt = (s as any).shared_apt ?? {})['cumOutL'] = (Math.floor(Math.random() * 5) + 2);
              scene.actions([
                { label: 'Cum inside me', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
                { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = (((st as any).shared_apt ?? 0)?.['cumOutL']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                scene.img('images/locations/shared/abduction/sex/slavewhorecumpussy3.mp4');
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end, pumping his load ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm deep inside your pussy.`);
                ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInside'] = ((s as any).Yakov['vagCumInside'] ?? 0) + (1);
                ((s as any).Yakov = (s as any).Yakov ?? {})['cumVag'] = ((s as any).Yakov['cumVag'] ?? 0) + (1);
                ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                qspCall(s, 'cum_call', '', ((s as any).boy ?? 0), 1);
                qspCall(s, 'arousal', 'vaginal', 2);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                  scene.img('images/locations/city/residential/sauna/sex/cumbelly2.mp4');
                  scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and starts spouting his seed, he takes his dick out and points it on your stomach.`);
                  scene.text('An extensive pool of cum lands on your abdomen, feeling warm but sticky.');
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 3) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/cumonass.mp4');
                    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and in the moment he starts spouting his seed, he takes his dick out and points it on your ass.`);
                    scene.text('Both your asscheeks are covered in sticky, warm seed.');
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 4) {
                      scene.img('images/characters/pavlovsk/resident/leonid/sex/cumface1.mp4');
                      scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and in the moment he starts spouting his seed, he gently pushes you on your knees and points his tip in front of your face.`);
                      scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                      (s as any).minut = ((s as any).minut ?? 0) + 2;
                      ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                      qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['subStep'] === 5) {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagcumtakoutfail.jpg');
                        scene.text(`You expect ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} to take his cock out of you any moment, but instead you hear his groans becoming louder.`);
                        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What are you doing? You aren't coming inside me, are you?"</font>`);
                        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sorry ${((s as any).pcs_firstname ?? '')}, it was just too intensive."</font>`);
                        if (((s as any).tabletkishot ?? 0) === 0  &&  ((s as any).pillcon ?? 0) < 0) {
                          scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"I am not on the pill ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}!"</font>`);
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Uh… Don't worry, it will be alright. You can take birth-control pills, anyway!"</font>`);
                          scene.text('He is obviously displeased by this.');
                          qspCall(s, 'npc_relationship', 'modify', 'A264', (-5));
                        }
                        scene.text('Annoyed you get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t land on your legs and carpet.');
                        ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['cumVag'] = ((s as any).Yakov['cumVag'] ?? 0) + (1);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['vagCumInsideUnwanted'] = ((s as any).Yakov['vagCumInsideUnwanted'] ?? 0) + (1);
                        qspCall(s, 'cum_call', '', ((s as any).boy ?? 0), 1);
                        qspCall(s, 'arousal', 'vaginal', 5, 'sub');
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                        ]);
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['subStep'] === 6) {
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I won't cum inside you, but please can you swallow?"</font>`);
                          scene.actions([
                            { label: 'Yes', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 20;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
                            { label: 'No', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 30;
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
                          ]);
                        } else {
                          if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                            scene.img('images/locations/shared/abduction/sex/slavewhorecummouth5.mp4');
                            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                            scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                            scene.text('Afterwards you show him your tongue as proof that not a drop was left unconsumed…');
                            ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                            ((s as any).Yakov = (s as any).Yakov ?? {})['swall'] = ((s as any).Yakov['swall'] ?? 0) + (1);
                            qspCall(s, 'npc_relationship', 'modify', 'A264', 1);
                            (s as any).minut = ((s as any).minut ?? 0) + 5;
                            qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                            ]);
                          } else {
                            if (((s as any).shared_apt ?? 0)?.['subStep'] === 30) {
                              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"All right I'll cum elsewhere…"</font>`);
                              qspCall(s, 'npc_relationship', 'modify', 'A264', (-3));
                              ((s as any).shared_apt = (s as any).shared_apt ?? {})['cumOutL2'] = (Math.floor(Math.random() * 4) + 2);
                              scene.actions([
                                { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = (((st as any).shared_apt ?? 0)?.['cumOutL2']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexVaginal'] },
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
    }
  }
  scene.build();
}

function enterYakov_SexAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  scene.text(`<b><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} - anal sex</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>');
    }
  }
  (s as any).loc_arg = 'Yakov_SexAnal';
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_anal']);
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} orgasm build-up: ` + ((s as any).orgB ?? '') + '/100');
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).orgB = undefined;
    (s as any).cockHard = undefined;
    (s as any).failC = undefined;
    (s as any).clothingworntype = 'nude';
    scene.img('images/locations/city/residential/sauna/sex/simplystrip1.mp4');
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    scene.text(`His hairless, muscular body has a bronze tan. He moves towards you, lubing his ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, those panties are adorable, but they will get in the way you know?"</font>`);
      scene.text('You entirely forgot to take them off!');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes you by the waist, delicately kissing you.`);
    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Do you want to make love in a certain position, or should I choose?"</font>`);
    if (((s as any).Yakov ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt = (s as any).shared_apt ?? {})['hisPos'] = (Math.floor(Math.random() * 3) + 1);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = (((st as any).shared_apt ?? 0)?.['hisPos']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 2;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 3;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/shared/sex/anal/mis/analenter.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} kneels between those, gently spreading them a bit wider with his hands.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        scene.text('He rubs the tip of his phallus around your sphincter, making it wet and preparing to penetrate it.');
        scene.text('Before doing so, he takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
        scene.text('He gently starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
        qspCall(s, 'arousal', 'anal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          scene.img('images/shared/sex/anal/mis/kotovsexanal0.mp4');
          scene.text('As he continuously fucks your anus, you rub his hairless ass, making him even hornier.');
          scene.text('As you move your hands around his smooth asscheeks, it seems to arouse him even more.');
          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
          qspCall(s, 'arousal', 'anal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
          if (((s as any).orgB ?? 0) < 100) {
            qspGoto(s, 'pav_shared_yakov', 'Yakov_SexAnal');
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
            ]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexAnal');
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/shared/sex/anal/doggy/anal4.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass as high as possible.');
          scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} kneels behind you, rubbing your asscheeks. He starts probing your anus with his lubed fingers, penetrating in and out, playing with the nice round sphincter…`);
          scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
          scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
          qspCall(s, 'arousal', 'anal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            scene.img('images/shared/sex/anal/doggy/kotovsexanal11.mp4');
            scene.text('As he continuously fucks your anus, you reach for his smooth balls and rub them, making his slow movements even more passionate.');
            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
            qspCall(s, 'arousal', 'anal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
            if (((s as any).orgB ?? 0) < 100) {
              qspGoto(s, 'pav_shared_yakov', 'Yakov_SexAnal');
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
              ]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexAnal');
  } },
              ]);
            }
          }
        }
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analsidefuck1.jpg');
            scene.text('You lie on the bed, raising the upper leg in the air, exposing your lustful anus.');
            scene.text('He takes this as an invitation, lying behind you.');
            scene.text('He rubs your ass, slowly making his way to your hole, playing with it for a while.');
            scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated later.');
            scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
            qspCall(s, 'arousal', 'anal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 16) + 5));
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analsidefuck2.mp4');
              scene.text('As he continuously fucks your anus, you reach for his smooth balls and rub them, making his slow movements even more passionate.');
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} fucks you slowly and sensitively.`);
              qspCall(s, 'pain', '1', 'anal', 'stretch');
              qspCall(s, 'arousal', 'anal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 21) + 20));
              if (((s as any).orgB ?? 0) < 100) {
                qspGoto(s, 'pav_shared_yakov', 'Yakov_SexAnal');
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  } },
                ]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 0;
    qspGoto(st, 'pav_shared_yakov', 'Yakov_SexAnal');
  } },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} is groaning loudly, you can say that he is reaching his orgasm.`);
              scene.text('You decide to tell him:');
              ((s as any).Yakov = (s as any).Yakov ?? {})['anal'] = ((s as any).Yakov['anal'] ?? 0) + (1);
              ((s as any).shared_apt = (s as any).shared_apt ?? {})['cumOutL'] = (Math.floor(Math.random() * 5) + 2);
              scene.actions([
                { label: 'Cum inside me', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 1;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
                { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = (((st as any).shared_apt ?? 0)?.['cumOutL']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                scene.img('images/shared/sex/cum/analcreampie/cumanal2.mp4');
                scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end, pumping his load ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm deep inside your anus.`);
                ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInside'] = ((s as any).Yakov['analCumInside'] ?? 0) + (1);
                ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                ((s as any).Yakov = (s as any).Yakov ?? {})['cumAnal'] = ((s as any).Yakov['cumAnal'] ?? 0) + (1);
                qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
                qspCall(s, 'arousal', 'anal', 2);
                qspCall(s, 'arousal', 'end');
                scene.actions([
                  { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                  scene.img('images/shared/sex/cum/stomach/cumbelly2.mp4');
                  scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and at the moment he starts spouting his seed, he takes his dick out and points it on your stomach.`);
                  scene.text('A small pool of cum lands on your abdomen, feeling warm but sticky.');
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
                  qspCall(s, 'arousal', 'end');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 3) {
                    scene.img('images/shared/sex/cum/cum3.mp4');
                    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and in the moment he starts spouting his seed, he takes his dick out and points it on your ass.`);
                    scene.text('Both your asscheeks are covered in sticky, warm seed.');
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 4) {
                      scene.img('images/shared/sex/cum/cumf10.mp4');
                      scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the happy end and in the moment he starts spouting his seed, he pushes you on your knees and points his tip in front of your face.`);
                      scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                      (s as any).minut = ((s as any).minut ?? 0) + 2;
                      ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                      qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['subStep'] === 5) {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagcumtakoutfail.jpg');
                        scene.text(`You expect ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} to take his cock out of you any moment, but instead you hear his groans becoming louder.`);
                        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"What are you doing? You aren't coming inside me, are you?"</font>`);
                        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Sorry ${((s as any).pcs_firstname ?? '')}, it was just too intensive."</font>`);
                        scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"I told you not to! I hate it when it slowly leaks out of my anus for hours!"</font>`);
                        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I am sorry sweetie, you are just too good a lover."</font>`);
                        scene.text('He is obvously displeased by your reaction.');
                        ((s as any).Yakov = (s as any).Yakov ?? {})['analCumInsideUnwanted'] = ((s as any).Yakov['analCumInsideUnwanted'] ?? 0) + (1);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['cumAnal'] = ((s as any).Yakov['cumAnal'] ?? 0) + (1);
                        qspCall(s, 'npc_relationship', 'modify', 'A264', (-5));
                        scene.text('You angrily get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t spur on your legs and carpet.');
                        qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
                        qspCall(s, 'arousal', 'anal', 5, 'sub');
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                        ]);
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['subStep'] === 6) {
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I won't cum inside you, but please can you swallow?"</font>`);
                          scene.actions([
                            { label: 'Yes', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 20;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
                            { label: 'No', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = 30;
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
                          ]);
                        } else {
                          if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                            scene.img('images/shared/sex/cum/mouth/yum.mp4');
                            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                            scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                            scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                            scene.text('Afterwards you show him your tongue as proof that not a drop was left unconsumed…');
                            ((s as any).Yakov = (s as any).Yakov ?? {})['swall'] = ((s as any).Yakov['swall'] ?? 0) + (1);
                            qspCall(s, 'npc_relationship', 'modify', 'A264', 1);
                            (s as any).minut = ((s as any).minut ?? 0) + 5;
                            ((s as any).Yakov = (s as any).Yakov ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                            qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', '');
  } },
                            ]);
                          } else {
                            if (((s as any).shared_apt ?? 0)?.['subStep'] === 30) {
                              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"All right I'll cum elsewhere…"</font>`);
                              qspCall(s, 'npc_relationship', 'modify', 'A264', (-3));
                              ((s as any).shared_apt = (s as any).shared_apt ?? {})['cumOutL2'] = (Math.floor(Math.random() * 4) + 2);
                              scene.actions([
                                { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['subStep'] = (((st as any).shared_apt ?? 0)?.['cumOutL2']);
  }, goto: ['pav_shared_yakov', 'Yakov_SexAnal'] },
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
    }
  }
  scene.build();
}

function enterYakov_SexGiantdildo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A264');
  scene.text(`<b><font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} - giant dildo</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/sp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/sp/cockerect.jpg"></center>');
    }
  }
  (s as any).loc_arg = 'Yakov_SexGiantdildo';
  ((s as any).shared_apt = (s as any).shared_apt ?? {})['price'] = (((s as any).shared_apt ?? 0)?.['price_special']);
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).orgB = undefined;
    (s as any).cockHard = undefined;
    (s as any).failC = undefined;
    (s as any).clothingworntype = 'nude';
    scene.img('images/locations/city/residential/sauna/sex/simplystrip1.mp4');
    scene.text(`${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    scene.text(`His hairless, muscular body has a bronze tan. He sits on a bed next to you, caressing his own ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long cock.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"${((s as any).pcs_firstname ?? '')}, those panties are adorable, but they will get in the way you know?"</font>`);
      scene.text('You entirely forgot to take them off!');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    scene.text(`As you continue to undress, ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} takes something large from a box beneath his bed.`);
    if (((s as any).Yakov ?? 0)?.['dildo'] === 0) {
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I hope you really thought it through ${((s as any).pcs_firstname ?? '')}… This Big boy did not get his name just like that!"</font>`);
      scene.text(`${((s as any).pcs_firstname ?? '')}, meet Big boy.`);
      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"Oh my g… It's really huge!"</font>`);
      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Yes, I told you it is! Are you backing up on me or what?"</font>`);
      scene.actions([
        { label: 'It is too big, I can\'t do it', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 100;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
        { label: 'It is big but I will do it', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 10;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
      ]);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo1.jpg');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 20;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 20) {
        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo2.jpg');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 30;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 30) {
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo3.jpg');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 40;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 40) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo4.jpg');
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 50;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 50) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo5.mp4');
              scene.text('The whole mass of the Big boy is now inside of you, not just stretching the entry to your sweet little pussy, but also oppressing your intestines from the other side and pusing on your cervix.');
              scene.text(`Your struggle and the idea of this makes ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} very aroused. He gets up from the bed where he watched you from until now.`);
              scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Suck me you impaled dildo pouch."</font>`);
              scene.text('Even in case you wanted to object, there is no chance given. He pushes his aroused cock to your mouth, making it penetrate inside and shutting you up.');
              scene.text(`He fucks your mouth, and even that his ${(((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} cm long dick is not the largest one, it makes you gag.`);
              scene.text('As you choke and cough, struggling not to throw up, you move around with the giant dildo inside you, causing you pain and even more struggle.');
              scene.text('This seems to arouse him even more…');
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 70;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 70) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo6.jpg');
                scene.text(`Being helplessly impaled on the thick rubber rod, ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')} seems to be at his maximum arousal.`);
                scene.text('He is now standing in front of you, masturbating himself furiously while holding your head by the hair next to the tip of his cock.');
                scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"This is for you Big boy! Now I will shower this pouch of yours with my cum!"</font>`);
                scene.text('His extraordinary arousel finishes in explosion of cum, right into your face and all over your chest, slowly leaking all the way down to your belly and crotch.');
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 80;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 80) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/sp/dildo7.jpg');
                  scene.text(`You sit there, impaled to the edge of this giant, thick dildo, covered in ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}'s sperm from your head all the way down the belly.`);
                  scene.text('The experience has exhausted you so much that you cannot even lift yourself up the take out the monster.');
                  scene.text('Finally you manage to push yourself with your legs up, leaving your pussy with a gape easily interchangeable with a freshly given birth, lacking just the blood.');
                  if (((s as any).Yakov ?? 0)?.['dildo'] === 0) {
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Are you all right ${((s as any).pcs_firstname ?? '')}? I hope Big boy did not do any lasting damage."</font>`);
                    scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"I… I'm OK. I think."</font>`);
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"So how was it ${((s as any).pcs_firstname ?? '')}?"</font>`);
                    scene.actions([
                      { label: 'The worst experience ever! Never speak of it again', handler: (st: GameState) => {
    (st as any).dildoLike = (-1);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 90;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                      { label: 'I feel humiliated, please never make me do it again', handler: (st: GameState) => {
    (st as any).dildoLike = 0;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 90;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                      { label: 'It wasn\'t so bad, but it doesn\'t really arouse me though', handler: (st: GameState) => {
    (st as any).dildoLike = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 90;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                      { label: 'I didn\'t think I would, but I liked it', handler: (st: GameState) => {
    (st as any).dildoLike = 2;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 90;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                    ]);
                  } else {
                    scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Are you all right ${((s as any).pcs_firstname ?? '')}? I hope Big boy did not do any lasting damage this time."</font>`);
                    scene.actions([
                      { label: 'I\'m fine', handler: (st: GameState) => {
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                    ]);
                  }
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 90) {
                    if (((s as any).dildoLike ?? 0) === -1) {
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Please don't be mad at me ${((s as any).pcs_firstname ?? '')}, you were the one who initiated this, I just told you about it. I didn't force you or anything."</font>`);
                      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"One more word and I will shove it up your ass!"</font>`);
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}><i>(gulp)</i></font>`);
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['dildo'] = (-3);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                      ]);
                    } else {
                      if ((!((s as any).dildoLike ?? 0))) {
                        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I am sorry ${((s as any).pcs_firstname ?? '')}, I never meant to humiliate you or anything. I guess this was both first time and last time, was it?"</font>`);
                        scene.actions([
                          { label: 'Definitely!', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['dildo'] = (-2);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                        ]);
                      } else {
                        if (((s as any).dildoLike ?? 0) === 1) {
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"Does that mean that you will be willing to do it sometime again?"</font>`);
                          scene.actions([
                            { label: 'Yes', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['dildo'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                            { label: 'Rather not', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['dildo'] = (-1);
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                          ]);
                        } else {
                          if (((s as any).dildoLike ?? 0) === 2) {
                            scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"You are such a cool girl ${((s as any).pcs_firstname ?? '')}!"</font>`);
                            scene.actions([
                              { label: 'Continue', handler: (st: GameState) => {
    ((st as any).Yakov = (st as any).Yakov ?? {})['dildo'] = 1;
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 200;
  }, goto: ['pav_shared_yakov', 'Yakov_SexGiantdildo'] },
                            ]);
                          }
                        }
                      }
                    }
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 100) {
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I am really disappointed ${((s as any).pcs_firstname ?? '')}. First you entice me on this, then you tell me you are afraid to do it. I know it is huge, but I told you so."</font>`);
                      scene.text(`<font color=#${((s as any).pcs_font ?? '')}>"I… I'm sorry ${(((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)] ?? '')}, I guess I wasn't really sure about it until I saw the monster…"</font>`);
                      scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I know, he is quite big one. Is there any chance you'll change your mind, or no?"</font>`);
                      scene.actions([
                        { label: 'No, this is just impossible for me', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 110;
  }, goto: ['pav_shared_apt', 'start'] },
                        { label: 'I don\'t know, maybe…', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', '');
    ((st as any).shared_apt = (st as any).shared_apt ?? {})['step'] = 120;
  }, goto: ['pav_shared_apt', 'start'] },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['step'] === 110) {
                        scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I see. That's bad. I think you should leave now, ${((s as any).pcs_firstname ?? '')}, I am really sad now."</font>`);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['dildo'] = (-4);
                        ((s as any).Yakov = (s as any).Yakov ?? {})['mood'] = 10;
                        ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                        scene.actions([
                          { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                        ]);
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['step'] === 120) {
                          ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                          scene.text(`<font color=#${(((s as any).Yakov ?? 0)?.['font'] ?? '')}>"I see. At least some hope is left. See you later ${((s as any).pcs_firstname ?? '')}."</font>`);
                          ((s as any).Yakov = (s as any).Yakov ?? {})['mood'] = 8;
                          scene.actions([
                            { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                          ]);
                        } else {
                          if (((s as any).shared_apt ?? 0)?.['step'] === 200) {
                            ((s as any).Yakov = (s as any).Yakov ?? {})['dildo'] = ((s as any).Yakov['dildo'] ?? 0) + (1);
                            ((s as any).shared_apt = (s as any).shared_apt ?? {})['step'] = 0;
                            qspCall(s, 'arousal', 'end');
                            qspCall(s, 'pav_shared_apt', 'payService');
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Yakov':
      enterYakov(s, scene);
      break;
    case 'Yakov_Chat':
      enterYakov_Chat(s, scene);
      break;
    case 'yakov_dick':
      enterYakovDick(s, scene);
      break;
    case 'Yakov_Serve':
      enterYakov_Serve(s, scene);
      break;
    case 'Yakov_Suck':
      enterYakov_Suck(s, scene);
      break;
    case 'Yakov_SexVaginal':
      enterYakov_SexVaginal(s, scene);
      break;
    case 'Yakov_SexAnal':
      enterYakov_SexAnal(s, scene);
      break;
    case 'Yakov_SexGiantdildo':
      enterYakov_SexGiantdildo(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_shared_yakov: LocationDef = {
  name: 'pav_shared_yakov',
  title: 'As you accidentally turn around, he gazes between your assch',
  region: 'pavlovsk',
  enter: enter,
};
