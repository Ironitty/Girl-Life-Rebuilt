import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterOleg(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <h3><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
  // TODO-QSP: $func('npc_notes', $boy)
  if (((s as any).Oleg ?? 0)?.['hadSex'] === 1) {
    // TODO-QSP: dynamic text: As you know very well, <<$npc_firstname[$boy]>> has a <<$npc_thdick[$boy]>> <<np...
    scene.text(`As you know very well, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} has a ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long <a href="exec:gt 'pav_shared_oleg', 'oleg_dick'">dick</a> with wildly growing pubic hair.`);
  }
  // TODO-QSP: dynamic text: <b>Today he looks to be in a <<$Oleg['mood_txt']>> mood.</b>
  scene.text(`<b>Today he looks to be in a ${((s as any).Oleg ?? 0)?.['mood_txt']} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Oleg ?? 0)?.['served']) < 180) {
    ((s as any).Oleg ?? {})['serve'] = 0;
    // TODO-QSP: dynamic text: It's not even been 3 hours since you last served <<$npc_firstname[$boy]>>
    scene.text(`It's not even been 3 hours since you last served ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      ((s as any).Oleg ?? {})['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] >0  ||  ((s as any).cumloc ?? 0)[9] >0) {
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, I think you have sperm...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, I think you have sperm on you. Please go wash it off."</a>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).cumloc ?? 0)[2] > 0  ||  ((s as any).cumloc ?? 0)[5] > 0  ||  ((s as any).cumloc ?? 0)[6] > 0  ||  ((s as any).cumloc ?? 0)[7] > 0) {
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, I think you have sperm...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, I think you have sperm on your clothes. Please go change."</a>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, why are you naked? And...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, why are you naked? And is that sperm on you? It's gross, please go wash yourself and put on some clothes."</a>`);
        scene.actions([
          { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hello <<$pcs_firstname>>, what do you need?"</a>
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hello ${((s as any).pcs_firstname ?? 0)}, what do you need?"</a>`);
        if (((s as any).Oleg ?? 0)?.['serve'] === 1) {
          // TODO-QSP: act 'Offer him to serve': Oleg['served'] = totminut
          scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Serve'] }]);
        }
        scene.actions([
          { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
          { label: 'Chat with him', goto: ['pav_shared_oleg', 'Oleg_Chat'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterOleg_Chat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <h3><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
  if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['comes']) {
    ((s as any).shared_apt ?? {})['step'] = 0;
    scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'Oleg_Room'] }]);
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Oleg ?? 0)?.['sleeps']  ||  ((s as any).hour ?? 0) < ((s as any).Oleg ?? 0)?.['wakes']) {
      ((s as any).shared_apt ?? {})['step'] = 0;
      scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'Oleg_Room'] }]);
    }
  }
  if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 0) {
    (s as any).say = Math.floor(Math.random() * 2) + 1;
    if (((s as any).say ?? 0) === 1) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is looking at your nude body with obvious shame, blurri...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is looking at your nude body with obvious shame, blurring.`);
        if (((s as any).pcs_bmi ?? 0) <= 15) {
          // TODO-QSP: dynamic text: He is not very content with the sight: <font color=#<<$Oleg['font']>>>"<<$pcs_fi...
          scene.text(`He is not very content with the sight: <font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, you should eat more, it is unhealthy to be too thin."</font>`);
        } else {
          if (((s as any).pcs_bmi ?? 0) <= 25) {
            // TODO-QSP: dynamic text: Even though he is ashamed, he is obviously pleased with the sight: <font color=#...
            scene.text(`Even though he is ashamed, he is obviously pleased with the sight: <font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, you have a beautiful body you know… But please, put on some clothes!"</font>`);
          } else {
            // TODO-QSP: dynamic text: He is not very content with the sight: <font color=#<<$Oleg['font']>>>"<<$pcs_fi...
            scene.text(`He is not very content with the sight: <font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, you should eat less, it is unhealthy to be too fat."</font>`);
          }
        }
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"At least you are wearing panties."</font>
          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"At least you are wearing panties."</font>`);
        }
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          scene.text('As you accidentally turn around, he gazes between your asscheeks on the plug stuck in your ass.');
          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"<<$pcs_firstname>>, are you wearing a sex toy in...
          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, are you wearing a sex toy in your anus?"</font> (his blush turns dark red).`);
          if ((Math.floor(Math.random() * 101) + 0) < 30) {
            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Yes <<$npc_firstname[$boy]>>, it is a buttplug. Will...
            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Yes ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, it is a buttplug. Will you help me with it? It seems to be stuck."</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Wh… what do you mean?"</font>
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Wh… what do you mean?"</font>`);
            scene.actions([
              { label: 'Pull it out for me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['chatLvl'] = 10
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
            ]);
          }
        }
      } else {
        if (((s as any).PCloBimbo ?? 0) === 1) {
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is looking at your outfit with suspicion.
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is looking at your outfit with suspicion.`);
          if (((s as any).pcs_bmi ?? 0) >= 12  &&  ((s as any).pcs_bmi ?? 0) <= 25) {
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"You know nice girls like you should not wear so ...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"You know nice girls like you should not wear so skimpy dresses. Some people can't hold themselves, you know?"</font>`);
          } else {
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Girls should not wear so skimpy dresses, it may ...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Girls should not wear so skimpy dresses, it may be offending to other people, you know?"</font>`);
          }
        } else {
          if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is looking at your outfit with suspicion.
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is looking at your outfit with suspicion.`);
            if (((s as any).pcs_bmi ?? 0) <= 25) {
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"You know nice girls like you should not dress li...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"You know nice girls like you should not dress like whores. Some people can't know that they actually are not, you know?"</font>`);
            } else {
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Girls should not dress like a whores when they a...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Girls should not dress like a whores when they aren't."</font>`);
            }
          }
        }
      }
    } else {
      if (((s as any).say ?? 0) === 2) {
        if (((s as any).age ?? 0) < 18) {
          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"<<$pcs_firstname>>, you said you are <<age>> yea...
          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, you said you are ${((s as any).age ?? 0)} years old. Aren't you too young to live without parents?"</font>`);
        }
      }
    }
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([
        { label: 'Chat about everyday stuff', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 10
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        (s as any).sayN = Math.floor(Math.random() * 10) + 1;
        if (((s as any).sayN ?? 0) === 1) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Oleg['font']>>>"Once I have hacked into FSB network… the stuf...
          scene.text(`<i><font color=#${((s as any).Oleg ?? 0)?.['font']}>"Once I have hacked into FSB network… the stuff there, you should see."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 2) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Oleg['font']>>>"I really like playing MMO games!"</font></i>
          scene.text(`<i><font color=#${((s as any).Oleg ?? 0)?.['font']}>"I really like playing MMO games!"</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 3) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Oleg['font']>>>"I really hate when someone wants me to fix hi...
          scene.text(`<i><font color=#${((s as any).Oleg ?? 0)?.['font']}>"I really hate when someone wants me to fix his computer. Like you ask him: what computer do you have? And he tells you: Windows."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 4) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Oleg['font']>>>"You should tape your inbuilt camera and mic o...
          scene.text(`<i><font color=#${((s as any).Oleg ?? 0)?.['font']}>"You should tape your inbuilt camera and mic on your PC if you have one."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 5) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Oleg['font']>>>"I work in a local bank as an IT tech. Boring,...
          scene.text(`<i><font color=#${((s as any).Oleg ?? 0)?.['font']}>"I work in a local bank as an IT tech. Boring, but I can do stuff around."</font></i>`);
        }
        scene.text('<i>You spent some time chatting with him about his hobbies and work, slightly improving your relation with him.</i>');
        qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
        qspCall(s, 'stat', '');
        (s as any).intimateTalkCh = Math.floor(Math.random() * 101) + 0;
        if (((s as any).Oleg ?? 0)?.['mood'] <= 4  &&  ((s as any).intimateTalkCh ?? 0) <= 50) {
          ((s as any).shared_apt ?? {})['step'] = 20;
        } else {
          ((s as any).shared_apt ?? {})['step'] = 0;
        }
        scene.actions([
          { label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Chat'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 20) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"<<$pcs_firstname>>, didn't you change your mind ...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, didn't you change your mind about easing off some of the rent?"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What do you mean?"</font>
            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What do you mean?"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Well as we talked about it before, you know… to ...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Well as we talked about it before, you know… to cook for us or clean up a bit…"</font>`);
            scene.actions([
              { label: 'Say you are still not interested in being their maid', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
              { label: 'Say you are willing to do some work after all', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
    // TODO-QSP: shared_apt['servitudeLvl'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 1) {
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"<<$pcs_firstname>>, didn't you change your mind ...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, didn't you change your mind about easing off some more of the rent?"</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What do you mean? I already clean and cook for you."...
              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What do you mean? I already clean and cook for you."</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Well we also talked about this before, you know…...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Well we also talked about this before, you know… to help us ease a bit of stress if you know what I mean"</font>`);
              scene.actions([
                { label: 'Say you are still not interested in being their cumbucket', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                { label: 'Say you are willing to spread your legs a bit after all', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
    // TODO-QSP: shared_apt['servitudeLvl'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
                scene.actions([
                  { label: 'Talk about sex', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 30
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                  { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 30) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            // TODO-QSP: dynamic text: You get into rather intimate discussion about sex, porn and all that stuff. <<$n...
            scene.text(`You get into rather intimate discussion about sex, porn and all that stuff. ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} turns red, as he does not feel comfortable to talk about such topics.`);
            ((s as any).shared_apt ?? {})['resCh'] = Math.floor(Math.random() * 7) + 0;
            if (((s as any).shared_apt ?? 0)?.['resCh'] <= 3) {
              ((s as any).shared_apt ?? {})['topicR'] = Math.floor(Math.random() * 5) + 1;
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 1) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> hesitantly tells you he loves looking when the girl org...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} hesitantly tells you he loves looking when the girl orgasms, but not too loudly.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 2) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> hesitantly tells you he loves when a girl is caressing ...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} hesitantly tells you he loves when a girl is caressing his cock.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 3) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> hesitantly tells you he kinda likes when the girl is en...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} hesitantly tells you he kinda likes when the girl is enjoying the sex.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 4) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> hesitantly tells you his <<npc_dick[$boy]>> cm long dic...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} hesitantly tells you his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick is too big, sometimes making it a bit painful for the girl.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 5) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> hesitantly tells you he loves when the girl is in a hea...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} hesitantly tells you he loves when the girl is in a healthy shape, not too thin or too fat.`);
              }
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['resCh'] === 4) {
                if (((s as any).Oleg ?? 0)?.['doPornpos'] === 0) {
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you about his favorite porn videos and sex positi...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you about his favorite porn videos and sex position he would like to try.`);
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Oleg ?? {})['doPornpos'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A266', 2);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                  ]);
                } else {
                  if (((s as any).Oleg ?? 0)?.['doPornpos'] === 1) {
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you about another of his favorite porn videos and...
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you about another of his favorite porn videos and another sex position he would like to try.`);
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Oleg ?? {})['doPornpos'] = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A266', 2);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                    ]);
                  }
                }
              } else {
                if (((s as any).shared_apt ?? 0)?.['resCh'] === 5) {
                  if (((s as any).Oleg ?? 0)?.['doAnal'] === 0) {
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you that he always wanted to try anal sex.
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you that he always wanted to try anal sex.`);
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Oleg ?? {})['doAnal'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A266', 2);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                    ]);
                  }
                } else {
                  if (((s as any).shared_apt ?? 0)?.['resCh'] === 6) {
                    if (((s as any).Oleg ?? 0)?.['doPiss'] === 0) {
                      // TODO-QSP: dynamic text: In the rather intimate discussion, <<$npc_firstname[$boy]>> seemed to want to sa...
                      scene.text(`In the rather intimate discussion, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} seemed to want to say something, but in the end, he withheld it. He looks very nervous…`);
                      if (((s as any).npc_rel ?? 0)?.['A266'] >= 50) {
                        scene.actions([
                          { label: 'Try to get him talk', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['chatLvl'] = 20;
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                        ]);
                      }
                      scene.actions([
                        { label: 'Let it be', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
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
  } else {
    if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 10) {
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"O-OK… <<$pcs_firstname>>, I'll help you."</font>
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"O-OK… ${((s as any).pcs_firstname ?? 0)}, I'll help you."</font>`);
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/buttplugpullout.mp4');
      scene.text('Hesitantly he grabs the plug and slowly pulls it out.');
      scene.text('It leaves your ass gaping.');
      // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Thank you <<$npc_firstname[$boy]>>!"</font>
      scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Thank you ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}!"</font>`);
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"You're welcome <<$pcs_firstname>>, but please be...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"You're welcome ${((s as any).pcs_firstname ?? 0)}, but please be careful next time…"</font>`);
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['chatLvl'] = 0
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 20) {
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Come on <<$npc_firstname[$boy]>>, you can tell it to...
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Come on ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, you can tell it to me. After all we have done together, you don't need to be ashamed."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I don't know <<$pcs_firstname>>… I've never told...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I don't know ${((s as any).pcs_firstname ?? 0)}… I've never told anyone about it."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Let it out, it will help you."</font>
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Let it out, it will help you."</font>`);
        scene.text('<i>He lingers for a while, but then he opens his mouth, and finally decides to speak out.</i>');
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Well, I have this really dirty desire. I often w...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Well, I have this really dirty desire. I often watch this porn where the guy… you know… relieves himself."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Uhm… you mean like he takes a pee?"</font>
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Uhm… you mean like he takes a pee?"</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Yes. But it's not just that."</font>
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Yes. But it's not just that."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Huh?"</font>
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Huh?"</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"He relieves himself onto the girl. And into."</f...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"He relieves himself onto the girl. And into."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"WHAT?"</font>
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"WHAT?"</font>`);
        scene.text('<i>You shout in surprise. Who would thought such a shy, decent man would have this kind of kink?</i>');
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Please don't get mad <<$pcs_firstname>>! I shoul...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Please don't get mad ${((s as any).pcs_firstname ?? 0)}! I shouldn't have told you, I knew it!"</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I am not mad at you <<$npc_firstname[$boy]>>. I am j...
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I am not mad at you ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}. I am just surprised."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"OK…"</font>
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"OK…"</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"So you've seen in a porn? And the guy just comes, pi...
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"So you've seen in a porn? And the guy just comes, pissses himself on the girl and leaves or what?"</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"No, actually they first have sex, usually both v...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"No, actually they first have sex, usually both vaginal and anal, then he relieves himself on her and into some of her… holes."</font>`);
        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Aha…"</font>
        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Aha…"</font>`);
        scene.text('<i>You are still somehow shocked by all of this, not knowing what to say next.</i>');
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"So what do you think about it? About me?"</font>
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"So what do you think about it? About me?"</font>`);
        ((s as any).shared_apt ?? {})['step'] = 0;
        ((s as any).shared_apt ?? {})['chatLvl'] = 0;
        scene.actions([
          { label: 'It\'s gross and you are a pervert', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', (-20));
    // TODO-QSP: Oleg['doPiss'] = -1
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
          { label: 'It\'s fine if you like it, but I find it repugnant', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', (-5));
    // TODO-QSP: Oleg['doPiss'] = -1
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
          { label: 'It\'s just a kink like any other', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 10);
    // TODO-QSP: Oleg['doPiss'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Chat'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterOlegDick(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <h3><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg');
  }
  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -80) {
    // TODO-QSP: $rel_word[$boy] = 'terrible'
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -60) {
      // TODO-QSP: $rel_word[$boy] = 'very bad'
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -40) {
        // TODO-QSP: $rel_word[$boy] = 'bad'
      } else {
        if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < -20) {
          // TODO-QSP: $rel_word[$boy] = 'strained'
        } else {
          if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 0) {
            // TODO-QSP: $rel_word[$boy] = 'neutral'
          } else {
            if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 20) {
              // TODO-QSP: $rel_word[$boy] = 'good'
            } else {
              if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 40) {
                // TODO-QSP: $rel_word[$boy] = 'great'
              } else {
                if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 60) {
                  // TODO-QSP: $rel_word[$boy] = 'excellent'
                } else {
                  if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] < 80) {
                    // TODO-QSP: $rel_word[$boy] = 'fantastic'
                  } else {
                    if (((s as any).npc_rel ?? 0)?.[String((s as any).boy ?? 0)] >= 80) {
                      // TODO-QSP: $rel_word[$boy] = 'incredible'
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
  // TODO-QSP: dynamic text: Your relationship with ' + $npc_firstname[$boy] + ' is <font color=#' + $color_r...
  scene.text('Your relationship with \' + $npc_firstname[$boy] + \' is <font color=#\' + $color_rel + \'>\' + $rel_word[$boy] + \'</font>.');
  // TODO-QSP: $func('npc_notes', $boy)
  // TODO-QSP: dynamic text: His mood is <<$Oleg['mood_txt']>>
  scene.text(`His mood is ${((s as any).Oleg ?? 0)?.['mood_txt']}`);
  // TODO-QSP: dynamic text: His dick is <<npc_dick[$boy]>> cm long with wildly growing pubic hair.
  scene.text(`His dick is ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long with wildly growing pubic hair.`);
  if (((s as any).Oleg ?? 0)?.['bj'] === 1) {
    scene.text('-you have given him a blowjob');
  }
  if (((s as any).Oleg ?? 0)?.['bj'] > 1) {
    // TODO-QSP: dynamic text: -you have given him <<Oleg['bj']>> blowjobs
    scene.text(`-you have given him ${((s as any).Oleg ?? 0)?.['bj']} blowjobs`);
    // TODO-QSP: if Oleg['bjFail'] > 1: ' and failed to make him cum with your mouth <<Oleg[''bjFail'']>> times'
  }
  if (((s as any).Oleg ?? 0)?.['bjDeep'] === 1) {
    scene.text('-you have given him a blowjob with deepthroat');
  }
  if (((s as any).Oleg ?? 0)?.['bjDeep'] > 1) {
    // TODO-QSP: dynamic text: -you have given him <<Oleg['bjDeep']>> blowjobs with deepthroat
    scene.text(`-you have given him ${((s as any).Oleg ?? 0)?.['bjDeep']} blowjobs with deepthroat`);
    if (((s as any).Oleg ?? 0)?.['bjFailPuke'] > 1) {
      // TODO-QSP: dynamic text:  but failed and puked in his crotch <<Oleg['bjFailPuke']>> times
      scene.text(` but failed and puked in his crotch ${((s as any).Oleg ?? 0)?.['bjFailPuke']} times`);
    }
    if (((s as any).Oleg ?? 0)?.['bjFailFaint'] > 1) {
      // TODO-QSP: dynamic text:  but failed and fainted impaled on his cock <<Oleg['bjFailFaint']>> times
      scene.text(` but failed and fainted impaled on his cock ${((s as any).Oleg ?? 0)?.['bjFailFaint']} times`);
    }
  }
  if (((s as any).Oleg ?? 0)?.['swall'] === 1) {
    scene.text('-you have swallowed his semen');
  }
  if (((s as any).Oleg ?? 0)?.['swall'] > 1) {
    // TODO-QSP: dynamic text: -you have swallowed his semen <<Oleg['swall']>> times
    scene.text(`-you have swallowed his semen ${((s as any).Oleg ?? 0)?.['swall']} times`);
  }
  if (((s as any).Oleg ?? 0)?.['vag'] === 1) {
    scene.text('-you had vaginal sex with him');
    if (((s as any).Oleg ?? 0)?.['vagCumInside'] === 1) {
      scene.text(' and let him cum inside your pussy');
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted'] === 1) {
      scene.text(' and he also came inside your pussy against your will');
    }
  }
  if (((s as any).Oleg ?? 0)?.['vag'] > 1) {
    // TODO-QSP: dynamic text: -you had vaginal sex with him <<Oleg['vag']>> times
    scene.text(`-you had vaginal sex with him ${((s as any).Oleg ?? 0)?.['vag']} times`);
    if (((s as any).Oleg ?? 0)?.['vagCumInside'] >= 1) {
      // TODO-QSP: dynamic text:  and let him cum inside your pussy <<Oleg['vagCumInside']>> times
      scene.text(` and let him cum inside your pussy ${((s as any).Oleg ?? 0)?.['vagCumInside']} times`);
    }
    if (((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted'] >= 1) {
      // TODO-QSP: dynamic text:  and he also came inside your pussy against your will <<Oleg['vagCumInsideUnwant...
      scene.text(` and he also came inside your pussy against your will ${((s as any).Oleg ?? 0)?.['vagCumInsideUnwanted']} times`);
    }
  }
  if (((s as any).Oleg ?? 0)?.['cumVag'] > 0) {
    // TODO-QSP: dynamic text: -in total he pumped <<Oleg['cumVag']>> loads of cum into your pussy
    scene.text(`-in total he pumped ${((s as any).Oleg ?? 0)?.['cumVag']} loads of cum into your pussy`);
  }
  if (((s as any).Oleg ?? 0)?.['anal'] === 1) {
    scene.text('-you had anal sex with him');
    if (((s as any).Oleg ?? 0)?.['analCumInside'] === 1) {
      scene.text(' and let him cum inside you');
    }
    if (((s as any).Oleg ?? 0)?.['analCumInsideUnwanted'] === 1) {
      scene.text(' and he also came inside your anus against your will');
    }
  }
  if (((s as any).Oleg ?? 0)?.['anal'] > 1) {
    // TODO-QSP: dynamic text: -you had anal sex with him <<Oleg['anal']>> times
    scene.text(`-you had anal sex with him ${((s as any).Oleg ?? 0)?.['anal']} times`);
    if (((s as any).Oleg ?? 0)?.['analCumInside'] >= 1) {
      // TODO-QSP: dynamic text:  and let him cum inside your ass <<Oleg['analCumInside']>> times
      scene.text(` and let him cum inside your ass ${((s as any).Oleg ?? 0)?.['analCumInside']} times`);
    }
    if (((s as any).Oleg ?? 0)?.['analCumInsideUnwanted'] >= 1) {
      // TODO-QSP: dynamic text:  and he also came inside your ass against your will <<Oleg['analCumInsideUnwante...
      scene.text(` and he also came inside your ass against your will ${((s as any).Oleg ?? 0)?.['analCumInsideUnwanted']} times`);
    }
  }
  if (((s as any).Oleg ?? 0)?.['cumAnal'] > 0) {
    // TODO-QSP: dynamic text: -in total he pumped <<Oleg['cumAnal']>> loads of cum into your ass
    scene.text(`-in total he pumped ${((s as any).Oleg ?? 0)?.['cumAnal']} loads of cum into your ass`);
  }
  if (((s as any).Oleg ?? 0)?.['piss'] === -3) {
    scene.text('-you let him give you a Golden Shower once, but found it very terrible experience and he knows you will not do it again, like ever');
  }
  if (((s as any).Oleg ?? 0)?.['piss'] === -2) {
    scene.text('-you let him give you a Golden Shower once, but felt very humiliated and he knows you will not do it again');
  }
  if (((s as any).Oleg ?? 0)?.['piss'] === -1) {
    scene.text('-you let him give you a Golden Shower, you do not find it arousing and he knows you will not do it again');
  }
  if (((s as any).Oleg ?? 0)?.['piss'] === 1  &&  ((s as any).pissLike ?? 0) === 1) {
    scene.text('-you let him give you a Golden Shower, you do not find it arousing but he knows you are willing to do it again');
  }
  if (((s as any).Oleg ?? 0)?.['piss'] > 1  &&  ((s as any).pissLike ?? 0) === 1) {
    // TODO-QSP: dynamic text: -you let him give you a Golden Shower <<Oleg['piss']>> times, you do not find it...
    scene.text(`-you let him give you a Golden Shower ${((s as any).Oleg ?? 0)?.['piss']} times, you do not find it arousing but he knows you are willing to do it again`);
  }
  if (((s as any).Oleg ?? 0)?.['piss'] === 1  &&  ((s as any).pissLike ?? 0) === 2) {
    scene.text('-you let him give you a Golden Shower, you do find it somewhat arousing and he knows you are willing to do it again');
  }
  if (((s as any).Oleg ?? 0)?.['piss'] > 1  &&  ((s as any).pissLike ?? 0) === 2) {
    // TODO-QSP: dynamic text: -you let him give you a Golden Shower <<Oleg['piss']>> times, you do find it som...
    scene.text(`-you let him give you a Golden Shower ${((s as any).Oleg ?? 0)?.['piss']} times, you do find it somewhat arousing and he knows you are willing to do it again`);
  }
  if (((s as any).Oleg ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Oleg ?? 0)?.['pornPos'] === 0) {
    scene.text('You know that he would like to try some special pornographic sex positions, but you didn\'t let him do it yet.');
  }
  if (((s as any).Oleg ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Oleg ?? 0)?.['pornPos'] === 1) {
    scene.text('You\'ve let him fuck you in the "Full Nelson" sex position.');
  }
  if (((s as any).Oleg ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Oleg ?? 0)?.['pornPos'] === 1) {
    scene.text('You\'ve let him fuck you in the "Full Nelson" sex position, but you know that there is another porn position he would like to try.');
  }
  if (((s as any).Oleg ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Oleg ?? 0)?.['pornPos'] === 2) {
    scene.text('You\'ve let him fuck you in the "Full Nelson" and "Pile Driver" sex positions.');
  }
  if (((s as any).loc_arg ?? 0) === 'Oleg') {
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_oleg', 'Oleg'] },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_shared_apt', $loc_arg
  } },
    ]);
  }
  scene.build();
}

function enterOleg_Serve(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <h3><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg');
  ((s as any).shared_apt ?? {})['step'] = 0;
  ((s as any).shared_apt ?? {})['subStep'] = 0;
  ((s as any).shared_apt ?? {})['sexCh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).Oleg ?? 0)?.['mood'] >= 7) {
    ((s as any).Oleg ?? {})['served'] = 0;
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Not now <<$pcs_firstname>>, I don't have the moo...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Not now ${((s as any).pcs_firstname ?? 0)}, I don't have the mood for it."</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['sexCh'] < 40) {
      ((s as any).Oleg ?? {})['served'] = 0;
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Not now <<$pcs_firstname>>, I am busy."</font>
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Not now ${((s as any).pcs_firstname ?? 0)}, I am busy."</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      ((s as any).shared_apt ?? {})['actionR'] = Math.floor(Math.random() * 5) + 2;
      if (((s as any).shared_apt ?? 0)?.['actionR'] === 2) {
        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I am busy <<$pcs_firstname>>, but you can suck m...
        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I am busy ${((s as any).pcs_firstname ?? 0)}, but you can suck my dick while I am working."</font>`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 1);
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['actionR'] === 3) {
          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Sure <<$pcs_firstname>>, I could use a blowjob r...
          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Sure ${((s as any).pcs_firstname ?? 0)}, I could use a blowjob right now."</font>`);
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 1);
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['actionR'] === 4) {
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"All right, let's have a sex. I would like to fuc...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"All right, let's have a sex. I would like to fuck your pussy ${((s as any).pcs_firstname ?? 0)}."</font>`);
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 1);
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['actionR'] === 5) {
              if (((s as any).Oleg ?? 0)?.['anal'] === 0) {
                if (((s as any).Oleg ?? 0)?.['doAnal'] === 1) {
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I'm not sure <<$pcs_firstname>>…"</font>
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I'm not sure ${((s as any).pcs_firstname ?? 0)}…"</font>`);
                  scene.actions([
                    { label: 'It\'s your choice', goto: ['pav_shared_oleg', 'Oleg_Serve'] },
                    { label: 'You told me you wanted to try anal, didn\'t you?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 2);
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                  ]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Serve'] }]);
                }
              } else {
                if (((s as any).Oleg ?? 0)?.['anal'] >= 1) {
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Sure <<$pcs_firstname>>, I would like to take yo...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Sure ${((s as any).pcs_firstname ?? 0)}, I would like to take your ass this time."</font>`);
                  scene.actions([
                    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 1);
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                  ]);
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['actionR'] === 6) {
                if (((s as any).Oleg ?? 0)?.['piss'] === 0) {
                  if (((s as any).Oleg ?? 0)?.['doPiss'] === 1) {
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I'm not sure <<$pcs_firstname>>…"</font>
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I'm not sure ${((s as any).pcs_firstname ?? 0)}…"</font>`);
                    scene.actions([
                      { label: 'It\'s your choice', goto: ['pav_shared_oleg', 'Oleg_Serve'] },
                      { label: 'You told me you have this secret dream about pissing, do you?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 2);
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                    ]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Serve'] }]);
                  }
                } else {
                  if (((s as any).Oleg ?? 0)?.['piss'] >= 1) {
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"<<$pcs_firstname>>, I have a full bladder. Do so...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, I have a full bladder. Do something about it, will you?"</font>`);
                    scene.actions([
                      { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A266', 1);
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                    ]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Serve'] }]);
                  }
                }
              }
            }
          }
        }
      }
      if (((s as any).shared_apt ?? 0)?.['actionR'] > 1) {
        scene.actions([
          { label: 'Say you changed your mind and leave', handler: (st: GameState) => {
    ((s as any).Oleg ?? {})['served'] = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A266', (-1));
  }, goto: ['pav_shared_apt', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterOleg_SuckBellowTable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <b><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>> - blowjob under table...
  scene.text(`<b><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - blowjob under table</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_blowjob'];
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjtablestart.jpg');
    scene.text('You drop on your knees, crawling under his large table.');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> unzips his pants, easing your access to his warm dick, ...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} unzips his pants, easing your access to his warm dick, but then he instantly gets back to typing some stuff on his keyboard.`);
    scene.text('His semi-hard phallus now hangs down from the chair, right in front of your face.');
    scene.text('Looking at the tip, you decide to:');
    scene.actions([
      { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
      { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
      { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      (s as any).orgB = ((s as any).orgB ?? 0) + (((s as any).rand ?? 0)(1, 20) / ((s as any).Oleg ?? {})?.['mood']);
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjtablekisstip.mp4');
      // TODO-QSP: dynamic text: You take <<$npc_firstname[$boy]>> cock in your hand, pointing the tip in front o...
      scene.text(`You take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cock in your hand, pointing the tip in front of your mouth.`);
      // TODO-QSP: dynamic text: As it was your favourity puppy, you start to gently Lick the tip all around, slo...
      scene.text(`As it was your favourity puppy, you start to gently Lick the tip all around, slowly making the cock to get harder and harder, finally reaching his full ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm length.`);
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'stat', '');
      (s as any).cockHard = 1;
      scene.actions([
        { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
        { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        scene.img('images/characters/pavlovsk/resident/leonid/sex/suckundertable3.mp4');
        if ((!((s as any).cockHard ?? 0))) {
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 5);
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s cock is not hard yet, but you start to suck the yet s...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s cock is not hard yet, but you start to suck the yet soft tip as if it was, slurping aloud.`);
          scene.text('You can feel that slowly his member becomes hard right in your mouth.');
          (s as any).cockHard = 1;
        } else {
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 10);
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s already hard cock points toward you and you suck the ...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s already hard cock points toward you and you suck the dark pink tip as a lollipop.`);
        }
        qspCall(s, 'arousal', 'bj', 3);
        qspCall(s, 'stat', '');
        if (((s as any).orgB ?? 0) >= 100) {
          scene.actions([
            { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
          ]);
        }
        scene.actions([
          { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
          { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
          { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
          { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          scene.img('images/characters/pavlovsk/resident/leonid/sex/suckundertable4.mp4');
          if ((!((s as any).cockHard ?? 0))) {
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 15);
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s cock is not hard yet, but you start to suck the membe...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s cock is not hard yet, but you start to suck the member as if it was, making almost half of it disappear in your throat every time you move on.`);
            scene.text('You can slowly feel his member becoming hard right in your mouth, making you choke and gag on it more and more with every second.');
            (s as any).cockHard = 1;
          } else {
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s already hard cock points toward you and you suck almo...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s already hard cock points toward you and you suck almost half of it, sucking and slurping it as best as you can.`);
          }
          qspCall(s, 'arousal', 'bj', 8);
          qspCall(s, 'stat', '');
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
            ]);
          }
          scene.actions([
            { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
            { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
            { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
            { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjtabledeepthroat.mp4');
            // TODO-QSP: dynamic text: You decide to take <<$npc_firstname[$boy]>>'s hard, <<npc_dick[$boy]>> cm long c...
            scene.text(`You decide to take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s hard, ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock all the way your throat.`);
            scene.text('You force yourself on to it, overcoming the gag reflex in your throat, saliva and tears almost squirting out of you.');
            scene.text('Doing this several times in a row, you try to hold on as long as you can with dick all the way down in your throat.');
            ((s as any).Oleg ?? {})['bjDeep'] = 1;
            qspCall(s, 'arousal', 'bj', 6);
            qspCall(s, 'stat', '');
            ((s as any).shared_apt ?? {})['deepthroatFailCh'] = Math.floor(Math.random() * 101) + 0;
            (s as any).fadeOutCh = Math.floor(Math.random() * 101) + 0;
            if (((s as any).shared_apt ?? 0)?.['deepthroatFailCh'] <= 10) {
              // TODO-QSP: dynamic text: <b>You try too hard to put it as far as possible, unable to hold the gag reflex ...
              scene.text(`<b>You try too hard to put it as far as possible, unable to hold the gag reflex anymore, still with his dick inside you vomit right in ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s crotch!</b>`);
              scene.actions([
                { label: 'Crawl out from the table', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 7
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
              ]);
            } else {
              if (((s as any).fadeOutCh ?? 0) <= 10) {
                scene.text('<b>You try too hard to keep the cock inside you as long as possible, not being able to catch enough breath. Suddenly all goes dark and you fade away…</b>');
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 8
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                ]);
              } else {
                if (((s as any).orgB ?? 0) >= 100) {
                  scene.actions([
                    { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  ]);
                }
                scene.actions([
                  { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                ]);
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              scene.text('You decided that now it\'s time to try and make him finally cum.');
              scene.text('Intensifying the pressure and pace, you expect him every moment to moan and be done with it.');
              qspCall(s, 'arousal', 'bj', 5);
              ((s as any).shared_apt ?? {})['cumCh'] = Math.floor(Math.random() * 101) + 0;
              if (((s as any).shared_apt ?? 0)?.['cumCh'] <= 70) {
                scene.img('images/characters/pavlovsk/resident/leonid/sex/cummouth4.mp4');
                // TODO-QSP: dynamic text: Your attempt is successful, as <<$npc_firstname[$boy]>> cums right into your mou...
                scene.text(`Your attempt is successful, as ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cums right into your mouth and on your face.`);
                ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                scene.actions([
                  { label: 'Crawl out from the table', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 9
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                ]);
              } else {
                (s as any).failC = ((s as any).failC ?? 0) + (1);
                if (((s as any).failC ?? 0) >= 3) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfail.jpg');
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, if you can't suck a ...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, if you can't suck a cock stop wasting my time. Get out!"</font>`);
                  scene.actions([
                    { label: 'Crawl out from the table', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  ]);
                } else {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfailtryagain.mp4');
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, what are you doing d...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, what are you doing down there?"</font>`);
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                    { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                    { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                    { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_SuckBellowTable'] },
                  ]);
                }
              }
              qspCall(s, 'stat', '');
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                // TODO-QSP: dynamic text: You get up from your knees, looking at <<$npc_firstname[$boy]>>:<font color=#<<$...
                scene.text(`You get up from your knees, looking at ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}:<font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry I was unable to satisfy you."</font>.`);
                // TODO-QSP: dynamic text: He doesn't even look at you, again being deep in his thoughts and typing somethi...
                scene.text(`He doesn't even look at you, again being deep in his thoughts and typing something on his keyboard. <font color=#${((s as any).Oleg ?? 0)?.['font']}>"Yea yea. Bye."</font>`);
                qspCall(s, 'npc_relationship', 'modify', 'A266', (-3));
                ((s as any).shared_apt ?? {})['step'] = 0;
                ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                scene.actions([
                  { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 7) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjdeepthroatpuke.mp4');
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Oh my god <<$pcs_firstname>>, what have you done...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Oh my god ${((s as any).pcs_firstname ?? 0)}, what have you done??!!"</font>`);
                  // TODO-QSP: dynamic text: Cleaning your face and mouth with your clothes, all you can say is <font color=#...
                  scene.text(`Cleaning your face and mouth with your clothes, all you can say is <font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry…"</font>.`);
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Please <<$pcs_firstname>> do something and clean...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Please ${((s as any).pcs_firstname ?? 0)} do something and clean it, it's gross!"</font>`);
                  qspCall(s, 'npc_relationship', 'modify', 'A266', (-5));
                  ((s as any).shared_apt ?? {})['step'] = 0;
                  ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                  ((s as any).Oleg ?? {})['bjFailPuke'] = (((s as any).Oleg ?? {})['bjFailPuke'] ?? 0) + (1);
                  scene.actions([
                    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 8) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/faint.jpg');
                    // TODO-QSP: dynamic text: You wake up being slapped in your face: <font color=#<<$Oleg['font']>>>"<<$pcs_f...
                    scene.text(`You wake up being slapped in your face: <font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}! ${((s as any).pcs_firstname ?? 0)}! Wake up!"</font>`);
                    // TODO-QSP: dynamic text: Your vision slowly returns, but you are still very confused. <font color=#<<$pcs...
                    scene.text(`Your vision slowly returns, but you are still very confused. <font color=#${((s as any).pcs_font ?? 0)}>"Wh… what happened?</font>`);
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I guess you took a bigger portion than you can s...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I guess you took a bigger portion than you can stand, ${((s as any).pcs_firstname ?? 0)}."</font> is obviously worried about you.`);
                    qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                    ((s as any).shared_apt ?? {})['step'] = 0;
                    ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                    ((s as any).Oleg ?? {})['bjFailFaint'] = (((s as any).Oleg ?? {})['bjFailFaint'] ?? 0) + (1);
                    scene.actions([
                      { label: 'Get up and leave', goto: ['pav_shared_apt', 'start'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 9) {
                      ((s as any).Oleg ?? {})['bj'] = (((s as any).Oleg ?? {})['bj'] ?? 0) + (1);
                      if (((s as any).Oleg ?? 0)?.['mood'] <= 5) {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Thank you <<$pcs_firstname>>."</font>
                        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Thank you ${((s as any).pcs_firstname ?? 0)}."</font>`);
                        // TODO-QSP: dynamic text: Cleaning your face and mouth off the cum: <font color=#<<$pcs_font>>>"You are we...
                        scene.text(`Cleaning your face and mouth off the cum: <font color=#${((s as any).pcs_font ?? 0)}>"You are welcome. Bye."</font>.`);
                        ((s as any).shared_apt ?? {})['step'] = 0;
                        qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                      } else {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn't pay any more attention to you, working again on...
                        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} doesn't pay any more attention to you, working again on his computer as if nothing happened.`);
                        scene.text('You just pack your things and quietly leave through the door.');
                        ((s as any).shared_apt ?? {})['step'] = 0;
                      }
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
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
  scene.build();
}

function enterOleg_Suck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <b><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>> - blowjob</font></b>
  scene.text(`<b><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - blowjob</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_blowjob'];
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes down his pants, revealing his flaccid cock. He re...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes down his pants, revealing his flaccid cock. He relaxes on his bed, expecting you to do the service.`);
    scene.text('You drop on your knees and crawl to him, trying to move as sexy as possible.');
    scene.actions([
      { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
      { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
      { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
      { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      scene.img('images/shared/sex/blowjob/kotovbj70.mp4');
      scene.text('You decide that the best approach is to arouse him first.');
      scene.text('Kneeling between his legs, you show him the whole length of your tongue, looking as lusty as you can.');
      scene.text('Slowly you move your head down in his crotch and bellow his phallus. The moment you start using your tongue on his device, you can feel the increased pulsation in his veins, making his cock larger and thicker every second.');
      (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 5) + 1);
      (s as any).cockHard = 1;
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
        { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
        { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
        { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        scene.img('images/shared/sex/blowjob/kotovbjbonus1.mp4');
        // TODO-QSP: dynamic text: You take <<$npc_firstname[$boy]>> cock in your hand, pointing the tip in front o...
        scene.text(`You take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cock in your hand, pointing the tip in front of your mouth.`);
        // TODO-QSP: dynamic text: As it was your favorite puppy, you start to gently Lick the tip all around, slow...
        scene.text(`As it was your favorite puppy, you start to gently Lick the tip all around, slowly starting to get his cock to get harder and harder, finally reaching his full ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm length.`);
        qspCall(s, 'arousal', 'bj', 2);
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 6) + 2);
        (s as any).cockHard = 1;
        scene.actions([
          { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
          { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
          { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
          { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          scene.img('images/shared/sex/blowjob/kotovbj110.mp4');
          if ((!((s as any).cockHard ?? 0))) {
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 5);
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s cock is not hard yet, but you start to suck the yet s...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s cock is not hard yet, but you start to suck the yet soft tip as if it was, slurping aloud.`);
            scene.text('You can feel that slowly his member becomes hard right in your mouth.');
            (s as any).cockHard = 1;
          } else {
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 10);
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s already hard cock points toward you and you suck the ...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s already hard cock points toward you and you suck the dark pink tip like a lollipop.`);
          }
          qspCall(s, 'arousal', 'bj', 3);
          qspCall(s, 'stat', '');
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            ]);
          }
          scene.actions([
            { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            scene.img('images/shared/sex/blowjob/kotovbj23.mp4');
            if ((!((s as any).cockHard ?? 0))) {
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 15);
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s cock is not hard yet, but you start to suck the membe...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s cock is not hard yet, but you start to suck the member as if it was, making almost half of it disappear in your throat every time you move on.`);
              scene.text('You can slowly feel his member becoming hard right in your mouth, making you choke and gag on it more and more with every second.');
              (s as any).cockHard = 1;
            } else {
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>>'s already hard cock points toward you and you suck almo...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s already hard cock points toward you and you suck almost half of it, sucking and slurping it as best as you can.`);
            }
            qspCall(s, 'arousal', 'bj', 8);
            qspCall(s, 'stat', '');
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
              ]);
            }
            scene.actions([
              { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
              { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
              { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
              { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
              { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              scene.img('images/shared/sex/blowjob/bj1.mp4');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
              // TODO-QSP: dynamic text: You decide to take <<$npc_firstname[$boy]>>'s hard, <<npc_dick[$boy]>> cm long c...
              scene.text(`You decide to take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s hard, ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock all the way your throat.`);
              scene.text('You force yourself onto it, overcoming the gag reflex in your throat, saliva and tears almost squirting out of you.');
              scene.text('Doing this several times in a row, you try to hold on as long as you can with dick all the way down in your throat.');
              ((s as any).Oleg ?? {})['bjDeep'] = 1;
              qspCall(s, 'arousal', 'bj', 6);
              qspCall(s, 'stat', '');
              ((s as any).shared_apt ?? {})['deepthroatFailCh'] = Math.floor(Math.random() * 101) + 0;
              (s as any).fadeOutCh = Math.floor(Math.random() * 101) + 0;
              if (((s as any).shared_apt ?? 0)?.['deepthroatFailCh'] <= 10) {
                // TODO-QSP: dynamic text: <b>You try too hard to put it as far as possible, unable to hold the gag reflex ...
                scene.text(`<b>You try too hard to put it as far as possible, unable to hold the gag reflex anymore, still with his dick inside you vomit right in ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s crotch!</b>`);
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 8
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                ]);
              } else {
                if (((s as any).fadeOutCh ?? 0) <= 10) {
                  scene.text('<b>You try too hard to keep the cock inside you as long as possible, not being able to catch enough breath. Suddenly all goes dark and you fade away…</b>');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 9
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                  ]);
                } else {
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                  ]);
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
                scene.text('You decided that now it\'s time to try and make him finally cum.');
                scene.text('Intensifying the pressure and pace, you expect him every moment to moan and be done with it.');
                qspCall(s, 'arousal', 'bj', 5);
                ((s as any).shared_apt ?? {})['cumCh'] = Math.floor(Math.random() * 101) + 0;
                if (((s as any).shared_apt ?? 0)?.['cumCh'] <= 70) {
                  scene.img('images/characters/pavlovsk/resident/leonid/sex/cummouth1.mp4');
                  // TODO-QSP: dynamic text: Your attempt is successful, as <<$npc_firstname[$boy]>> cums right into your mou...
                  scene.text(`Your attempt is successful, as ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cums right into your mouth and on your face.`);
                  ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                  scene.actions([
                    { label: 'Get up', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 10
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                  ]);
                } else {
                  (s as any).failC = ((s as any).failC ?? 0) + (1);
                  if (((s as any).failC ?? 0) >= 3) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfail.jpg');
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, if you can't suck a ...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, if you can't suck a cock stop wasting my time. Get out!"</font>`);
                    scene.actions([
                      { label: 'Get up', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 7
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    ]);
                  } else {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfailtryagain.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, what are you doing d...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, what are you doing down there?"</font>`);
                    if (((s as any).failC ?? 0) === 1) {
                      scene.text('He is getting nervous…');
                    }
                    if (((s as any).failC ?? 0) === 2) {
                      scene.text('He is obviously annoyed, you better try to finish him now!');
                    }
                    scene.actions([
                      { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                      { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                      { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_oleg', 'Oleg_Suck'] },
                    ]);
                  }
                }
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 7) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                  // TODO-QSP: dynamic text: You get up from your knees, looking at <<$npc_firstname[$boy]>>:<font color=#<<$...
                  scene.text(`You get up from your knees, looking at ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}:<font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry I was unable to satisfy you."</font>.`);
                  // TODO-QSP: dynamic text: He looks annoyed:<font color=#<<$Oleg['font']>>>"I see. Bye."</font>
                  scene.text(`He looks annoyed:<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I see. Bye."</font>`);
                  qspCall(s, 'npc_relationship', 'modify', 'A266', (-3));
                  ((s as any).shared_apt ?? {})['step'] = 0;
                  ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                  scene.actions([
                    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 8) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjdeepthroatpuke.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Oh my god <<$pcs_firstname>>, what have you done...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Oh my god ${((s as any).pcs_firstname ?? 0)}, what have you done??!!"</font>`);
                    // TODO-QSP: dynamic text: Cleaning your face and mouth with your clothes, all you can say is <font color=#...
                    scene.text(`Cleaning your face and mouth with your clothes, all you can say is <font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry…"</font>.`);
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Please <<$pcs_firstname>> do something and clean...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Please ${((s as any).pcs_firstname ?? 0)} do something and clean it, it's gross!"</font>`);
                    qspCall(s, 'npc_relationship', 'modify', 'A266', (-5));
                    ((s as any).shared_apt ?? {})['step'] = 0;
                    ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                    ((s as any).Oleg ?? {})['bjFailPuke'] = (((s as any).Oleg ?? {})['bjFailPuke'] ?? 0) + (1);
                    scene.actions([
                      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 9) {
                      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/faint.jpg');
                      // TODO-QSP: dynamic text: You wake up being slapped in your face: <font color=#<<$Oleg['font']>>>"<<$pcs_f...
                      scene.text(`You wake up being slapped in your face: <font color=#${((s as any).Oleg ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}! ${((s as any).pcs_firstname ?? 0)}! Wake up!"</font>`);
                      // TODO-QSP: dynamic text: Your vision slowly returns, but you are still very confused. <font color=#<<$pcs...
                      scene.text(`Your vision slowly returns, but you are still very confused. <font color=#${((s as any).pcs_font ?? 0)}>"Wh… what happened?</font>`);
                      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I guess you took a bigger portion than you can s...
                      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I guess you took a bigger portion than you can stand, ${((s as any).pcs_firstname ?? 0)}."</font> is obviously worried about you.`);
                      qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                      ((s as any).shared_apt ?? {})['step'] = 0;
                      ((s as any).Oleg ?? {})['bjFail'] = (((s as any).Oleg ?? {})['bjFail'] ?? 0) + (1);
                      ((s as any).Oleg ?? {})['bjFailFaint'] = (((s as any).Oleg ?? {})['bjFailFaint'] ?? 0) + (1);
                      scene.actions([
                        { label: 'Get up and leave', goto: ['pav_shared_apt', 'start'] },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                        ((s as any).Oleg ?? {})['bj'] = (((s as any).Oleg ?? {})['bj'] ?? 0) + (1);
                        if (((s as any).Oleg ?? 0)?.['mood'] <= 5) {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Thank you <<$pcs_firstname>>."</font>
                          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Thank you ${((s as any).pcs_firstname ?? 0)}."</font>`);
                          // TODO-QSP: dynamic text: Cleaning your face and mouth off the cum: <font color=#<<$pcs_font>>>"You are we...
                          scene.text(`Cleaning your face and mouth off the cum: <font color=#${((s as any).pcs_font ?? 0)}>"You are welcome. Bye."</font>.`);
                          qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                          ((s as any).shared_apt ?? {})['step'] = 0;
                        } else {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn't pay any more attention to you, working again on...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} doesn't pay any more attention to you, working again on his computer as if nothing happened.`);
                          scene.text('You just pack your things and quietly leave through the door.');
                          ((s as any).shared_apt ?? {})['step'] = 0;
                        }
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Get up and leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
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

function enterOleg_Sex_Vag(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <b><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>> - vaginal sex</font><...
  scene.text(`<b><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - vaginal sex</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_vaginal'];
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/residential/sauna/sex/simplystrip1.mp4');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> begins to undress and you follow his example, stripping...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    // TODO-QSP: dynamic text: His hairy, rickety body shines with the very pale skin. He moves towards you, lu...
    scene.text(`His hairy, rickety body shines with the very pale skin. He moves towards you, lubing his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hey, <<$pcs_firstname>>, what about the panties?...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hey, ${((s as any).pcs_firstname ?? 0)}, what about the panties?"</font>`);
      scene.text('You entirely forgot to take them off! Or maybe you didn\'t want to actually?');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes you by the waist, kissing you.
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes you by the waist, kissing you.`);
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Do you want to go for a certain position, or sho...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Do you want to go for a certain position, or should I choose?"</font>`);
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 3) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 2) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Oleg ?? 0)?.['pornPos'] < 1) {
      scene.actions([
        { label: 'You told me that you want to try one position from porn, didn\'t you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A266', 3);
    ((s as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
      ]);
    }
    if (((s as any).Oleg ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Oleg ?? 0)?.['pornPos'] < 2) {
      scene.actions([
        { label: 'You told me that you want to try another position from porn, didn\'t you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A266', 2);
    ((s as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
      ]);
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] >= 1) {
      // TODO-QSP: act 'Take me full nelson': shared_apt['step'] = 4
      scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] >= 2) {
      // TODO-QSP: act 'Take me pile driver': shared_apt['step'] = 5
      scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = shared_apt['hisPos']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/vagmissionary1.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels between those, gently spreading them a bit wider...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels between those, gently spreading them a bit wider with his hands.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        scene.text('You can feel a warm sensation between your legs, replaced by pressure and suddenly even a mild pain. That\'s when he enters your tender pussy.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> begins to move inside you, ever-increasing the pace.
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} begins to move inside you, ever-increasing the pace.`);
        scene.text('In a few moments, he starts groaning, obviously enjoying the fuck.');
        qspCall(s, 'arousal', 'vaginal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/vagmissionary2.mp4');
          scene.text('As he continuously fucks your pussy, you rub his hairy ass, making him even hornier.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep as he can, all his <<npc_dick[$boy...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep as he can, all his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm are inside you.`);
          qspCall(s, 'arousal', 'vaginal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
          if (((s as any).orgB ?? 0) < 100) {
            // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
            scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/vagdoggy1.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass high as possible.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels behind you, rubbing your asscheeks. He starts pr...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels behind you, rubbing your asscheeks. He starts probing your pussy with his lubed fingers, penetrating in and out, playing with the lips…`);
          scene.text('He doesn\'t last long and finally moves with his phallus next to you.');
          scene.text('He slowly enters your moist hole, pushing as far as your still somewhat dry pussy let\'s him.');
          scene.text('The first mild pain fades away and you can feel building warmth and a good feeling of being fucked from behind like a mare in heat.');
          scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
          qspCall(s, 'arousal', 'vaginal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/vagdoggy2.mp4');
            scene.text('As he continuously fucks your pussy, you reach for his hairy balls bashing your clitoris from behind and rubbing it, making his fuck fury even more intensive.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and as fast he can, ramming all of...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and as fast he can, ramming all of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm are inside you with each stroke.`);
            qspCall(s, 'arousal', 'vaginal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
            if (((s as any).orgB ?? 0) < 100) {
              // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
              scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
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
            // TODO-QSP: dynamic text: Finally <<$npc_firstname[$boy]>> takes his rod, pointing the tip right to the en...
            scene.text(`Finally ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes his rod, pointing the tip right to the entry of your vagina.`);
            scene.text('He starts pushing it inside, and as it is lubed, it goes in quite easily.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> uses this to his advantage and pushes as far as his <<n...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} uses this to his advantage and pushes as far as his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick can reach.`);
            scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
            qspCall(s, 'arousal', 'vaginal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagsidefuck2.mp4');
              scene.text('As he continuously fucks your pussy, you reach for his hairy balls between your legs, rubbing it and making him groan even more…');
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and he can and giving the position...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and he can and giving the position and the whole (${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm) size of his dick, some of the strokes hurt a little.`);
              qspCall(s, 'pain', '', 1, 'vaginal', 'stretch');
              qspCall(s, 'arousal', 'vaginal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              if (((s as any).orgB ?? 0) < 100) {
                // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            if (((s as any).Oleg ?? 0)?.['pornPos'] < 1) {
              ((s as any).Oleg ?? {})['pornPos'] = 1;
            }
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagfullnelson1.jpg');
              scene.text('You let him sit on the edge of the bed, having his dick prepared for your vagina.');
              // TODO-QSP: dynamic text: Facing him with your back, you climb on top of him and bury his <<npc_dick[$boy]...
              scene.text(`Facing him with your back, you climb on top of him and bury his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick in your pussy a few times, making it as comfortable as possible.`);
              scene.text('When you feel it is good enough, you tell him he can begin.');
              scene.text('With his somehow weak, but for this purpose strong enough hands he lifts both your knees in the air, making you impale on his cock even deeper.');
              scene.text('Then he grabs your head with both hands, pushing it forwards almost down to your stomach.');
              scene.text('In this position, you literally see every stroke of his penis into your pussy… But there is nothing else you can do.');
              scene.text('In a few moments, he starts groaning, obviously enjoying the fuck.');
              qspCall(s, 'arousal', 'vaginal', 10, 'lube');
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagfullnelson2.mp4');
                scene.text('As he continuously fucks your pussy, you can do nothing but watch the penis moving in and out of you and his balls banging your labia and clitoris.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                qspCall(s, 'arousal', 'vaginal', 10);
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                if (((s as any).orgB ?? 0) < 100) {
                  // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
                }
                if (((s as any).orgB ?? 0) >= 100) {
                  scene.actions([
                    { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              if (((s as any).Oleg ?? 0)?.['pornPos'] < 2) {
                ((s as any).Oleg ?? {})['pornPos'] = 2;
              }
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagpiledriver1.jpg');
                scene.text('You take a pillow from his bed, put it on the floor and lie on it with your back.');
                scene.text('As if you were doing yoga, you put your ass in the hands and lift it above your head, letting the feet fall down aside your head.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now has the very best access to your pussy.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now has the very best access to your pussy.`);
                scene.text('He goes to you, rubbing your ass and penetrating your pussy with his wet fingers.');
                scene.text('After while he takes his phallus, somehow bending it downwards and pushing it inside you.');
                scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
                qspCall(s, 'arousal', 'vaginal', 10, 'lube');
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagpiledriver2.mp4');
                  scene.text('As he continuously fucks your pussy, you can do nothing but watch his penis and hairy crotch bang you down like a hammer.');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                  qspCall(s, 'arousal', 'vaginal', 10);
                  qspCall(s, 'stat', '');
                  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                  if (((s as any).orgB ?? 0) < 100) {
                    // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] }]);
                  }
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is groaning loudly, you can tell that he is reaching hi...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is groaning loudly, you can tell that he is reaching his orgasm.`);
                  scene.text('You decide to tell him:');
                  ((s as any).Oleg ?? {})['vag'] = (((s as any).Oleg ?? {})['vag'] ?? 0) + (1);
                  ((s as any).shared_apt ?? {})['cumOutL'] = Math.floor(Math.random() * 5) + 2;
                  scene.actions([
                    { label: 'Cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                    { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                    scene.img('images/locations/shared/abduction/sex/slavewhorecumpussy3.mp4');
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end, pumping his load <<npc_d...
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end, pumping his load ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm deep inside your pussy.`);
                    ((s as any).Oleg ?? {})['vagCumInside'] = (((s as any).Oleg ?? {})['vagCumInside'] ?? 0) + (1);
                    ((s as any).Oleg ?? {})['cumVag'] = (((s as any).Oleg ?? {})['cumVag'] ?? 0) + (1);
                    ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
                    qspCall(s, 'arousal', 'vaginal', 2);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                      scene.img('images/locations/city/residential/sauna/sex/cumbelly2.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and starts spouting his s...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and starts spouting his seed, he takes his dick out and points it on your stomach.`);
                      scene.text('An extensive pool of cum lands on your abdomen, feeling warm but sticky.');
                      (s as any).minut = ((s as any).minut ?? 0) + 2;
                      ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['subStep'] === 3) {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/cumonass.mp4');
                        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and starts spouting his s...
                        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and starts spouting his seed, he takes his dick out and points it on your ass.`);
                        scene.text('Both your asscheeks are covered in sticky, warm seed.');
                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                        ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                        qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                        ]);
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['subStep'] === 4) {
                          scene.img('images/characters/pavlovsk/resident/leonid/sex/cumface1.mp4');
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and in the moment he star...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and in the moment he starts spouting his seed, he pushes you on your knees and points his tip in front of your face.`);
                          scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                          (s as any).minut = ((s as any).minut ?? 0) + 2;
                          ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                          qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                          ]);
                        } else {
                          if (((s as any).shared_apt ?? 0)?.['subStep'] === 5) {
                            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagcumtakoutfail.jpg');
                            // TODO-QSP: dynamic text: You expect <<$npc_firstname[$boy]>> to take his cock out of you any moment, but ...
                            scene.text(`You expect ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} to take his cock out of you any moment, but instead you hear his groans becoming louder.`);
                            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What are you doing? You aren't coming inside me, are...
                            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What are you doing? You aren't coming inside me, are you?"</font>`);
                            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Sorry <<$pcs_firstname>>, I could'nt help myself...
                            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Sorry ${((s as any).pcs_firstname ?? 0)}, I could'nt help myself."</font>`);
                            if (((s as any).tabletkishot ?? 0) === 0  &&  ((s as any).pillcon ?? 0) < 0) {
                              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I am not on the pill <<$npc_firstname[$boy]>>!"</fon...
                              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I am not on the pill ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}!"</font>`);
                              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Than you better do something about it. We're don...
                              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Than you better do something about it. We're done here."</font>`);
                              scene.text('He is obvously annoyed by this.');
                              qspCall(s, 'npc_relationship', 'modify', 'A266', (-5));
                            }
                            scene.text('You furiously get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t spur on your legs and carpet.');
                            ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                            ((s as any).Oleg ?? {})['cumVag'] = (((s as any).Oleg ?? {})['cumVag'] ?? 0) + (1);
                            ((s as any).Oleg ?? {})['vagCumInsideUnwanted'] = (((s as any).Oleg ?? {})['vagCumInsideUnwanted'] ?? 0) + (1);
                            qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
                            qspCall(s, 'arousal', 'vaginal', 5, 'sub');
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                            ]);
                          } else {
                            if (((s as any).shared_apt ?? 0)?.['subStep'] === 6) {
                              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"If I won't cum inside you, will you swallow?"</f...
                              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"If I won't cum inside you, will you swallow?"</font>`);
                              scene.actions([
                                { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 20
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                                { label: 'No', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 30
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
                              ]);
                            } else {
                              if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                                scene.img('images/locations/shared/abduction/sex/slavewhorecummouth5.mp4');
                                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the end and in the moment he is about t...
                                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                                scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> spins the last of his cum dry from his cock, you close ...
                                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                                scene.text('Afterwards you show him your tongue as proof that not a drop was left unconsumed…');
                                ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                                ((s as any).Oleg ?? {})['swall'] = (((s as any).Oleg ?? {})['swall'] ?? 0) + (1);
                                qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                                (s as any).minut = ((s as any).minut ?? 0) + 5;
                                qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                                ]);
                              } else {
                                if (((s as any).shared_apt ?? 0)?.['subStep'] === 30) {
                                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"All right I'll cum elsewhere…"</font>
                                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"All right I'll cum elsewhere…"</font>`);
                                  qspCall(s, 'npc_relationship', 'modify', 'A266', (-3));
                                  ((s as any).shared_apt ?? {})['cumOutL2'] = Math.floor(Math.random() * 4) + 2;
                                  scene.actions([
                                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL2']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Vag'] },
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
    }
  }
  scene.build();
}

function enterOleg_Sex_Anal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <b><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>> - anal sex</font></b>
  scene.text(`<b><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - anal sex</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_anal'];
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/locations/city/residential/sauna/sex/simplystrip1.mp4');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> begins to undress and you follow his example, stripping...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    // TODO-QSP: dynamic text: His hairy, rickety body shines with the very pale skin. He moves towards you, lu...
    scene.text(`His hairy, rickety body shines with the very pale skin. He moves towards you, lubing his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hey, <<$pcs_firstname>>, what about the panties?...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hey, ${((s as any).pcs_firstname ?? 0)}, what about the panties?"</font>`);
      scene.text('You entirely forgot to take them off! Or maybe you didn\'t want to actually?');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes you by the waist, kissing you.
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes you by the waist, kissing you.`);
    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Do you want to go for a certain position, or sho...
    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Do you want to go for a certain position, or should I choose?"</font>`);
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 3) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] === 2) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).Oleg ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Oleg ?? 0)?.['pornPos'] < 1) {
      scene.actions([
        { label: 'You told me that you want to try one position from porn, didn\'t you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A266', 3);
    ((s as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
      ]);
    }
    if (((s as any).Oleg ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Oleg ?? 0)?.['pornPos'] < 2) {
      scene.actions([
        { label: 'You told me that you want to try another position from porn, didn\'t you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A266', 2);
    ((s as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
      ]);
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] >= 1) {
      // TODO-QSP: act 'Take me full nelson': shared_apt['step'] = 4
      scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
    }
    if (((s as any).Oleg ?? 0)?.['pornPos'] >= 2) {
      // TODO-QSP: act 'Take me pile driver': shared_apt['step'] = 5
      scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = shared_apt['hisPos']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/locations/city/residential/sauna/sex/fuckanal2.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels between those, gently spreading them a bit wider...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels between those, gently spreading them a bit wider with his hands.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        scene.text('He rubs the tip of his phallus around your sphincter, making it wet and preparing to penetrate it.');
        if (((s as any).Oleg ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A266'] > 80) {
          scene.text('Before doing so, he takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
          scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
        } else {
          // TODO-QSP: dynamic text: Without much care about your feelings he thrusts his <<npc_dick[$boy]>> cm long ...
          scene.text(`Without much care about your feelings he thrusts his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long thick dick through your sphincter.`);
          // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
          scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, don't be like a smal...
          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, don't be like a small child, you can take it."</font>`);
          qspCall(s, 'pain', '', 1, 'asshole', 'tear');
        }
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> begins to move inside you, ever-increasing the pace.
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} begins to move inside you, ever-increasing the pace.`);
        scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
        qspCall(s, 'arousal', 'anal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          scene.img('images/locations/city/residential/sauna/sex/fuckanal5.mp4');
          scene.text('As he continuously fucks your anus, you reach to rub his hairy ass, making him even hornier.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep as he can, all his <<npc_dick[$boy...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep as he can, all his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} centimeters are inside you.`);
          qspCall(s, 'arousal', 'anal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
          if (((s as any).orgB ?? 0) < 100) {
            // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
            scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analdoggy1.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass as high as possible.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels behind you, rubbing your asscheeks. He starts pr...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels behind you, rubbing your asscheeks. He starts probing your anus with his lubed fingers, penetrating in and out, playing with the nice round sphincter…`);
          if (((s as any).Oleg ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A266'] > 80) {
            scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
            scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
          } else {
            // TODO-QSP: dynamic text: Without much care about your feelings he thrusts his <<npc_dick[$boy]>> cm long ...
            scene.text(`Without much care about your feelings he thrusts his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long thick dick through your sphincter.`);
            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, don't be like a smal...
            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, don't be like a small child, you can take it."</font>`);
            qspCall(s, 'pain', '', 1, 'asshole', 'tear');
          }
          scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
          qspCall(s, 'arousal', 'anal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analdoggy2.mp4');
            scene.text('As he continuously fucks your anus, you reach for his hairy balls bashing your empty pussy from behind and rubbing it, making his fuck fury even more intensive.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and as fast he can, ramming all of...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and as fast he can, ramming all of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} centimeters inside you with every stroke.`);
            qspCall(s, 'arousal', 'anal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
            if (((s as any).orgB ?? 0) < 100) {
              // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
              scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
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
            if (((s as any).Oleg ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A266'] > 80) {
              scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated later.');
              scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
            } else {
              // TODO-QSP: dynamic text: Without much care about your feelings he thrusts his <<npc_dick[$boy]>> cm long ...
              scene.text(`Without much care about your feelings he thrusts his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long thick dick through your sphincter.`);
              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, don't be like a smal...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, don't be like a small child, you can take it."</font>`);
              qspCall(s, 'pain', '', 1, 'asshole', 'tear');
            }
            scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
            qspCall(s, 'arousal', 'anal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analsidefuck2.mp4');
              scene.text('As he continuously fucks your anus, you reach for his hairy balls between your legs, rubbing it and making him groan even more…');
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep as he can and giving the position ...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep as he can and giving the position and the entire (${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm) size of his dick, the continuous banging hurts a little.`);
              qspCall(s, 'pain', '', 1, 'anal', 'stretch');
              qspCall(s, 'arousal', 'anal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              if (((s as any).orgB ?? 0) < 100) {
                // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            if (((s as any).Oleg ?? 0)?.['pornPos'] < 1) {
              ((s as any).Oleg ?? {})['pornPos'] = 1;
            }
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analfullnelson1.jpg');
              scene.text('You let him sit on the edge of the bed, having his dick prepared for your anus.');
              // TODO-QSP: dynamic text: Facing him with your back, you climb on top of him and slowly burry his <<npc_di...
              scene.text(`Facing him with your back, you climb on top of him and slowly burry his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick in your anus, making it as comfortable as possible.`);
              scene.text('When you feel it is good enough, you tell him he can begin.');
              scene.text('With his somehow weak, but for this purpose strong enough hands he lifts both your knees in the air, making you impale on his cock even deeper.');
              scene.text('Then he grabs your head with both hands, pushing it forwards almost down to your stomach.');
              scene.text('In this position, you literally see every stroke of his penis into your anus, hidden bellow your empty pussy… But there is nothing else you can do.');
              scene.text('In a few moments, he starts groaning, obviously enjoying the fuck.');
              qspCall(s, 'arousal', 'anal', 10, 'lube');
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                scene.img('images/locations/shared/abduction/sex/slavewhorefuckanal3.mp4');
                scene.text('As he continuously fucks your pussy, you can do nothing but watch the penis moving in and out of you and his balls banging your empty pussy.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                qspCall(s, 'arousal', 'anal', 10);
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                if (((s as any).orgB ?? 0) < 100) {
                  // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
                }
                if (((s as any).orgB ?? 0) >= 100) {
                  scene.actions([
                    { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              if (((s as any).Oleg ?? 0)?.['pornPos'] < 2) {
                ((s as any).Oleg ?? {})['pornPos'] = 2;
              }
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analpiledriver1.jpg');
                scene.text('You take a pillow from his bed, put it on the floor and lie on it with your back.');
                scene.text('As if you were doing yoga, you put your ass in the hands and lift it above your head, letting the feet fall down aside your head.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now has the very best access to your anus.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now has the very best access to your anus.`);
                if (((s as any).Oleg ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A266'] > 80) {
                  scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated later.');
                  scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
                } else {
                  // TODO-QSP: dynamic text: Without much care about your feelings he thrusts his <<npc_dick[$boy]>> cm long ...
                  scene.text(`Without much care about your feelings he thrusts his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long thick dick through your sphincter.`);
                  // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
                  scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Come on <<$pcs_firstname>>, don't be like a smal...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, don't be like a small child, you can take it."</font>`);
                  qspCall(s, 'pain', '', 1, 'asshole', 'tear');
                }
                scene.text('In a few moments he starts groaning, obviously enjoying the fuck.');
                qspCall(s, 'arousal', 'anal', 10, 'lube');
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analpiledriver2.mp4');
                  scene.text('As he continuously fucks your anus, you can do nothing but watch his penis and hairy crotch bang you down like a hammer.');
                  scene.text('He uses the position and the fact that your pussy is empty to his advantage and while fucking your ass he sticks some of his fingers inside your pussy.');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                  qspCall(s, 'arousal', 'anal', 10);
                  qspCall(s, 'stat', '');
                  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                  if (((s as any).orgB ?? 0) < 100) {
                    // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] }]);
                  }
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                  (s as any).minut = ((s as any).minut ?? 0) + 2;
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is groaning loudly, you can say that he is reaching his...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is groaning loudly, you can say that he is reaching his orgasm.`);
                  scene.text('You decide to tell him:');
                  ((s as any).Oleg ?? {})['anal'] = (((s as any).Oleg ?? {})['anal'] ?? 0) + (1);
                  ((s as any).shared_apt ?? {})['cumOutL'] = Math.floor(Math.random() * 5) + 2;
                  scene.actions([
                    { label: 'Cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                    { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                    scene.img('images/locations/city/residential/sauna/sex/cumanal4.mp4');
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end, pumping his load <<npc_d...
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end, pumping his load ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm deep inside your anus.`);
                    ((s as any).Oleg ?? {})['analCumInside'] = (((s as any).Oleg ?? {})['analCumInside'] ?? 0) + (1);
                    ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                    ((s as any).Oleg ?? {})['cumAnal'] = (((s as any).Oleg ?? {})['cumAnal'] ?? 0) + (1);
                    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
                    qspCall(s, 'arousal', 'anal', 2);
                    qspCall(s, 'arousal', 'end');
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                      scene.img('images/locations/city/residential/sauna/sex/cumbelly2.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and starts spouting his s...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and starts spouting his seed, he takes his dick out and points it on your stomach.`);
                      scene.text('An extensive pool of cum lands on your abdomen, feeling warm but sticky.');
                      (s as any).minut = ((s as any).minut ?? 0) + 2;
                      ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                      qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
                      qspCall(s, 'arousal', 'end');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['subStep'] === 3) {
                        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/cumonass.mp4');
                        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and in the moment he star...
                        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and in the moment he starts spouting his seed, he takes his dick out and points it on your ass.`);
                        scene.text('Both your asscheeks are covered in sticky, warm seed.');
                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                        ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                        qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
                        qspCall(s, 'arousal', 'end');
                        scene.actions([
                          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                        ]);
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['subStep'] === 4) {
                          scene.img('images/characters/pavlovsk/resident/leonid/sex/cumface1.mp4');
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the happy end and in the moment he star...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the happy end and in the moment he starts spouting his seed, he pushes you on your knees and points his tip in front of your face.`);
                          scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                          (s as any).minut = ((s as any).minut ?? 0) + 2;
                          ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                          qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                          qspCall(s, 'arousal', 'end');
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                          ]);
                        } else {
                          if (((s as any).shared_apt ?? 0)?.['subStep'] === 5) {
                            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagcumtakoutfail.jpg');
                            // TODO-QSP: dynamic text: You expect <<$npc_firstname[$boy]>> to take his cock out of you any moment, but ...
                            scene.text(`You expect ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} to take his cock out of you any moment, but instead you hear his groans becoming louder.`);
                            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What are you doing? You aren't coming inside me, are...
                            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What are you doing? You aren't coming inside me, are you?"</font>`);
                            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Sorry <<$pcs_firstname>>, I could'nt help myself...
                            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Sorry ${((s as any).pcs_firstname ?? 0)}, I could'nt help myself."</font>`);
                            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I told you not to! I hate it when it slowly leaks ou...
                            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I told you not to! I hate it when it slowly leaks out of my anus for hours!"</font>`);
                            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Oh jeez you are a girl, get used to it! We're do...
                            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Oh jeez you are a girl, get used to it! We're done here."</font>`);
                            scene.text('He is obvously annoyed by your reaction.');
                            ((s as any).Oleg ?? {})['analCumInsideUnwanted'] = (((s as any).Oleg ?? {})['analCumInsideUnwanted'] ?? 0) + (1);
                            ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                            ((s as any).Oleg ?? {})['cumAnal'] = (((s as any).Oleg ?? {})['cumAnal'] ?? 0) + (1);
                            qspCall(s, 'npc_relationship', 'modify', 'A266', (-5));
                            scene.text('You furiously get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t spur on your legs and carpet.');
                            qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
                            qspCall(s, 'arousal', 'anal', 5, 'sub');
                            qspCall(s, 'arousal', 'end');
                            scene.actions([
                              { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                            ]);
                          } else {
                            if (((s as any).shared_apt ?? 0)?.['subStep'] === 6) {
                              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"If I won't cum inside you, will you swallow?"</f...
                              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"If I won't cum inside you, will you swallow?"</font>`);
                              scene.actions([
                                { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 20
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                                { label: 'No', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 30
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
                              ]);
                            } else {
                              if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                                scene.img('images/locations/city/residential/sauna/sex/cummouth3.mp4');
                                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the end and in the moment he is about t...
                                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                                scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> spins the last of his cum dry from his cock, you close ...
                                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                                scene.text('Afterwards you show him your tongue as proof that not a drop was left unconsumed…');
                                ((s as any).Oleg ?? {})['swall'] = (((s as any).Oleg ?? {})['swall'] ?? 0) + (1);
                                qspCall(s, 'npc_relationship', 'modify', 'A266', 1);
                                (s as any).minut = ((s as any).minut ?? 0) + 5;
                                ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                                qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                                qspCall(s, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                                ]);
                              } else {
                                if (((s as any).shared_apt ?? 0)?.['subStep'] === 30) {
                                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"All right I'll cum elsewhere…"</font>
                                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"All right I'll cum elsewhere…"</font>`);
                                  qspCall(s, 'npc_relationship', 'modify', 'A266', (-3));
                                  ((s as any).shared_apt ?? {})['cumOutL2'] = Math.floor(Math.random() * 4) + 2;
                                  scene.actions([
                                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL2']
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_Anal'] },
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
    }
  }
  scene.build();
}

function enterOleg_SexPiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A266');
  // TODO-QSP: dynamic text: <b><font color=#<<$Oleg['font']>>><<$npc_firstname[$boy]>> - Golden Shower</font...
  scene.text(`<b><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - Golden Shower</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/nd/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/nd.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/nd/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_special'];
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.img('images/shared/sex/undress/kotovpre11.mp4');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> begins to undress and you follow his example, stripping...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} begins to undress and you follow his example, stripping the few clothes you are currently wearing.`);
    // TODO-QSP: dynamic text: His hairy, rickety body shines with the very pale skin. He moves towards you, st...
    scene.text(`His hairy, rickety body shines with the very pale skin. He moves towards you, stroking his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock and on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Hey, <<$pcs_firstname>>, what about the panties?...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Hey, ${((s as any).pcs_firstname ?? 0)}, what about the panties?"</font>`);
      scene.text('You entirely forgot to take them off! Or maybe you didn\'t want to actually?');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes you by the waist, kissing you.
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes you by the waist, kissing you.`);
    if (((s as any).Oleg ?? 0)?.['piss'] === 0) {
      // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Are you sure about this <<$pcs_firstname>>?"</fo...
      scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Are you sure about this ${((s as any).pcs_firstname ?? 0)}?"</font>`);
      // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Yes. I'll do it for you."</font>
      scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Yes. I'll do it for you."</font>`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 10
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
      qspCall(s, 'arousal', 'foreplay', 5);
      scene.img('images/shared/sex/kiss/kotovpre10.mp4');
      // TODO-QSP: dynamic text: You feel somehow awkward as <<$npc_firstname[$boy]>> starts spreading a plastic ...
      scene.text(`You feel somehow awkward as ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} starts spreading a plastic sheet on the bed and around it.`);
      scene.text('When he\'s done, he signals you to join him on his newly decorated bedsheets.');
      scene.text('You start kissing and caressing, his cock is slowly getting hard as you stroke it.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 20
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 20) {
        qspCall(s, 'arousal', 'bj', 3);
        (s as any).cockHard = 1;
        scene.img('images/shared/sex/blowjob/kotovbj120.mp4');
        // TODO-QSP: dynamic text: You take over the initiative and move to suck his <<npc_dick[$boy]>> cm long, no...
        scene.text(`You take over the initiative and move to suck his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long, now fully hard dick.`);
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is getting unusually aroused, probably by imagining tha...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is getting unusually aroused, probably by imagining that his secret dream is to come true.`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 30
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 30) {
          qspCall(s, 'arousal', 'vaginal', 5);
          scene.img('images/shared/sex/vag/cowgirl/kotovsexbonus17.mp4');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> signals you that he wants to move to the next step and ...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} signals you that he wants to move to the next step and starts stroking his fingers into your already moist pussy.`);
          scene.text('He enters you quite easily and enjoys the fuck for some time.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 40
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 40) {
            qspCall(s, 'arousal', 'anal', 5);
            scene.img('images/shared/sex/anal/cowgirl/kotovsexanal30.mp4');
            scene.text('As you move to a doggy position, he starts caressing your anus.');
            scene.text('You expect that he will want to fuck it soon, and your hunch proves true shortly.');
            scene.text('He uses a bit of lube, probing your sphincter with his tip for a while before slowly penetrating it.');
            // TODO-QSP: dynamic text: The anal fuck does not seem as pleasurable to <<$npc_firstname[$boy]>> as usual ...
            scene.text(`The anal fuck does not seem as pleasurable to ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} as usual - he seems to suffer a bit because of his full bladder!`);
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 50
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 50) {
              (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (15);
              qspCall(s, 'arousal', 'bj', 2, 'humiliation');
              qspCall(s, 'arousal', 'pee', (-2), 'sub', 'humiliation');
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/pissmouth.mp4');
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"It's time <<$pcs_firstname>>!"</font>
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"It's time ${((s as any).pcs_firstname ?? 0)}!"</font>`);
              scene.text('With these words he takes his cock out of your ass and pushes you onto your knees beside the plastic-covered bed.');
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Oh my god <<$pcs_firstname>>, it's coming! Brace...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Oh my god ${((s as any).pcs_firstname ?? 0)}, it's coming! Brace for impact Mr Spock!"</font>`);
              scene.text('As instructed you open your mouth, eyeing the tip of his cock, expecting the flow to start.');
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Aaaaaahh!"</font>
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Aaaaaahh!"</font>`);
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> let's out a heavy sigh as the piss starts flowing. A wa...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} let's out a heavy sigh as the piss starts flowing. A warm, slightly smelly stream of golden piss lands first on your face as his aim is not entirely accurate.`);
              scene.text('You close your eyes in a reflex, but as your mouth is still open, he moves his aim and fills your wide open mouth to the edge of it.');
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Now drink it!"</font>
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Now drink it!"</font>`);
              // TODO-QSP: dynamic text: It doesn't even sound as if the shy <<$npc_firstname[$boy]>> told it, as the ord...
              scene.text(`It doesn't even sound as if the shy ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} told it, as the order is very strict and uncompromising.`);
              scene.text('You open your eyes, still covered in piss, and gulp the contents in your mouth.');
              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Good girl! There is still enough for your other ...
              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Good girl! There is still enough for your other holes, move around!"</font>`);
              scene.actions([
                { label: 'Present your pussy', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 60
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 60) {
                qspCall(s, 'arousal', 'vaginal', 2, 'humiliation');
                qspCall(s, 'arousal', 'pee', (-2), 'sub', 'humiliation');
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/pisspussy.mp4');
                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"You thought your pussy is just for cum, did you ...
                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"You thought your pussy is just for cum, did you ${((s as any).pcs_firstname ?? 0)}?!"</font>`);
                // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Something like that, yes…"</font>
                scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Something like that, yes…"</font>`);
                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"well, today it isn't! Spread those lips for me!"...
                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"well, today it isn't! Spread those lips for me!"</font>`);
                scene.text('His tone is again very strict and you feel as if you don\'t even have a choice anymore, spreading your pussy lips with hands, making the pussy gape a bit.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> uses this gape and starts pissing into it, filling you ...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} uses this gape and starts pissing into it, filling you with very warm liquid.`);
                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Oh yeah! Take it like a good piss slut!"</font>
                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Oh yeah! Take it like a good piss slut!"</font>`);
                // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Not too much, please!"</font>
                scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Not too much, please!"</font>`);
                scene.text('He hesitantly stops the stream, but still leaves your pussy filled to the edge of it.');
                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Now it's time for the last delivery! Show me you...
                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Now it's time for the last delivery! Show me your assgape!"</font>`);
                scene.actions([
                  { label: 'Present your ass', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 70
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 70) {
                  qspCall(s, 'arousal', 'anal', 3, 'humiliation');
                  qspCall(s, 'arousal', 'pee', (-3), 'sub', 'humiliation');
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/pissanus.mp4');
                  scene.text('You arch your back, pointing your ass high as possible, spreading your asscheeks with hands and giving him the best access to your gaping anus.');
                  // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"There is still at least a liter in there <<$pcs_...
                  scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"There is still at least a liter in there ${((s as any).pcs_firstname ?? 0)} and it's all going into your backdoor!"</font>`);
                  // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"<i>Oh no…</i>"</font>
                  scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"<i>Oh no…</i>"</font>`);
                  scene.text('He thrusts his cock into your anus and shortly a warm feeling starts filling your belly, slowly expanding upwards to your stomach.');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn't stop pissing as he removes his cock out of your...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} doesn't stop pissing as he removes his cock out of your anus and penetrates it again, several times around.`);
                  scene.text('He finishes pissing into your filled anus from afar, showering the whole of your asscheeks and back.');
                  scene.actions([
                    { label: 'Present your ass', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 80
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 80) {
                    qspCall(s, 'npc_relationship', 'modify', 'A266', 3);
                    ((s as any).Oleg ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                    qspCall(s, 'arousal', 'anal', 2, 'humiliation');
                    qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
                    scene.img('images/shared/sex/cum/analcreampie/analcum.jpg');
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"The first delivery was made, now to the second o...
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"The first delivery was made, now to the second one! Engage!"</font>`);
                    scene.text('In your attempt to get up from the wet, plastic sheets he pushes you back, making you stay in the same doggystyle position as he furiously masturbates his cock.');
                    scene.text('it doesn\'t take long before he finally ejaculates, cumming on your ass-cheeks before he thrust the tip into your piss-filled anus with loud sigh.');
                    // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"AAAHHHHH!"</font>
                    scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"AAAHHHHH!"</font>`);
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 90
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 90) {
                      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/nd/pisssoaked.jpg');
                      // TODO-QSP: dynamic text: You lie on the plastic-covered bed, hair wet from <<$npc_firstname[$boy]>>'s pis...
                      scene.text(`You lie on the plastic-covered bed, hair wet from ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s piss, your face sticky with the same. Your pussy still leaking some of the yellow liquid and your anus leaking a mixture of piss and cum.`);
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> get's up, cleaning his hands with a towel, looking down...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} get's up, cleaning his hands with a towel, looking down at you lying there, breathing.`);
                      if (((s as any).Oleg ?? 0)?.['piss'] === 0) {
                        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Are you alright <<$pcs_firstname>>? I hope I was...
                        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Are you alright ${((s as any).pcs_firstname ?? 0)}? I hope I wasn't too harsh on you. I was so aroused and drawn into it that I almost lost control over myself."</font>`);
                        // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I… I'm OK. I think."</font>
                        scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I… I'm OK. I think."</font>`);
                        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"So how was it <<$pcs_firstname>>?"</font>
                        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"So how was it ${((s as any).pcs_firstname ?? 0)}?"</font>`);
                        scene.actions([
                          { label: 'The worst experience ever! Never speak of it again', handler: (st: GameState) => {
    (st as any).pissLike = (-1);
    // TODO-QSP: shared_apt['step'] = 100
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                          { label: 'I feel humiliated, please never make me do it again', handler: (st: GameState) => {
    (st as any).pissLike = 0;
    // TODO-QSP: shared_apt['step'] = 100
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                          { label: 'It wasn\'t so bad, but it doesn\'t really arouse me though', handler: (st: GameState) => {
    (st as any).pissLike = 1;
    // TODO-QSP: shared_apt['step'] = 100
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                          { label: 'I didn\'t think I would, but I loved it', handler: (st: GameState) => {
    (st as any).pissLike = 2;
    // TODO-QSP: shared_apt['step'] = 100
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                        ]);
                      } else {
                        // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Are you alright <<$pcs_firstname>>? I hope I was...
                        scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Are you alright ${((s as any).pcs_firstname ?? 0)}? I hope I wasn't too harsh on you. I was so aroused and drawn into it that I almost lost control over myself."</font>`);
                        scene.actions([
                          { label: 'I\'m fine', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                        ]);
                      }
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['step'] === 100) {
                        if (((s as any).pissLike ?? 0) === -1) {
                          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Please don't be mad at me <<$pcs_firstname>>, yo...
                          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Please don't be mad at me ${((s as any).pcs_firstname ?? 0)}, you were the one who initiated this, I just told you about it. I didn't force you or anything."</font>`);
                          // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"One more word and I will not just piss, but also shi...
                          scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"One more word and I will not just piss, but also shit on you!"</font>`);
                          // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>><i>(gulp)</i></font>
                          scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}><i>(gulp)</i></font>`);
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: Oleg['piss'] = -3
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                          ]);
                        } else {
                          if ((!((s as any).pissLike ?? 0))) {
                            // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"I am sorry <<$pcs_firstname>>, I never meant to ...
                            scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"I am sorry ${((s as any).pcs_firstname ?? 0)}, I never meant to humiliate you or anything. I guess this was both first time and last time, was it?"</font>`);
                            scene.actions([
                              { label: 'Definitely!', handler: (st: GameState) => {
    // TODO-QSP: Oleg['piss'] = -2
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                            ]);
                          } else {
                            if (((s as any).pissLike ?? 0) === 1) {
                              // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Does that mean that you will be willing to do it...
                              scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Does that mean that you will be willing to do it sometime again?"</font>`);
                              scene.actions([
                                { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: Oleg['piss'] = 1
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                                { label: 'Rather not', handler: (st: GameState) => {
    // TODO-QSP: Oleg['piss'] = -1
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                              ]);
                            } else {
                              if (((s as any).pissLike ?? 0) === 2) {
                                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"Awesome! And I thought I am the only one who lik...
                                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"Awesome! And I thought I am the only one who likes this kinda stuff!"</font>`);
                                // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Yup, who would say that."</font>
                                scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Yup, who would say that."</font>`);
                                // TODO-QSP: dynamic text: <font color=#<<$Oleg['font']>>>"You are such a cool girl <<$pcs_firstname>>!"</f...
                                scene.text(`<font color=#${((s as any).Oleg ?? 0)?.['font']}>"You are such a cool girl ${((s as any).pcs_firstname ?? 0)}!"</font>`);
                                scene.actions([
                                  { label: 'Yes', handler: (st: GameState) => {
    // TODO-QSP: Oleg['piss'] = 1
    // TODO-QSP: shared_apt['step'] = 110
  }, goto: ['pav_shared_oleg', 'Oleg_Sex_piss'] },
                                ]);
                              }
                            }
                          }
                        }
                      } else {
                        if (((s as any).shared_apt ?? 0)?.['step'] === 110) {
                          qspCall(s, 'arousal', 'end');
                          ((s as any).Oleg ?? {})['piss'] = (((s as any).Oleg ?? {})['piss'] ?? 0) + (1);
                          ((s as any).shared_apt ?? {})['step'] = 0;
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
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Oleg':
      enterOleg(s, scene);
      break;
    case 'Oleg_Chat':
      enterOleg_Chat(s, scene);
      break;
    case 'oleg_dick':
      enterOlegDick(s, scene);
      break;
    case 'Oleg_Serve':
      enterOleg_Serve(s, scene);
      break;
    case 'Oleg_SuckBellowTable':
      enterOleg_SuckBellowTable(s, scene);
      break;
    case 'Oleg_Suck':
      enterOleg_Suck(s, scene);
      break;
    case 'Oleg_Sex_Vag':
      enterOleg_Sex_Vag(s, scene);
      break;
    case 'Oleg_Sex_Anal':
      enterOleg_Sex_Anal(s, scene);
      break;
    case 'Oleg_Sex_piss':
      enterOleg_SexPiss(s, scene);
      break;
    default:
      enterOleg(s, scene);
      break;
  }
}

export const pav_shared_oleg: LocationDef = {
  name: 'pav_shared_oleg',
  title: 'As you accidentally turn around, he gazes between your assch',
  region: 'pavlovsk',
  enter: enter,
};
