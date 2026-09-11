import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNestor(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <h3><center><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>></font></h3...
  scene.text(`<h3><center><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  // TODO-QSP: $func('npc_notes', $boy)
  if (((s as any).Nestor ?? 0)?.['hadSex'] === 1) {
    // TODO-QSP: dynamic text: As you know very well, <<$npc_firstname[$boy]>> has a <<$npc_thdick[$boy]>> <<np...
    scene.text(`As you know very well, ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} has a ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long <a href="exec:gt 'pav_shared_nestor', 'nestor_dick'">dick</a> with somehow maintained pubic hair.`);
  }
  // TODO-QSP: dynamic text: <b>Today he looks to be in a <<$Nestor['mood_txt']>> mood.</b>
  scene.text(`<b>Today he looks to be in a ${((s as any).Nestor ?? 0)?.['mood_txt']} mood.</b>`);
  if ((((s as any).totminut ?? 0) - ((s as any).Nestor ?? 0)?.['served']) < 180) {
    ((s as any).Nestor ?? {})['serve'] = 0;
    // TODO-QSP: dynamic text: It's not even been 3 hours since you last served <<$npc_firstname[$boy]>>
    scene.text(`It's not even been 3 hours since you last served ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}`);
  } else {
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      ((s as any).Nestor ?? {})['serve'] = 1;
    }
  }
  if (((s as any).cumloc ?? 0)[13] > 0  ||  ((s as any).cumloc ?? 0)[11] > 0  ||  ((s as any).cumloc ?? 0)[16] > 0  ||  ((s as any).cumloc ?? 0)[10] > 0  ||  ((s as any).cumloc ?? 0)[9] > 0) {
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, is that cum? Go wash y...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, is that cum? Go wash yourself, I don't want you near me like that!"</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).cumloc ?? 0)[2] > 0  ||  ((s as any).cumloc ?? 0)[5] > 0  ||  ((s as any).cumloc ?? 0)[6] > 0  ||  ((s as any).cumloc ?? 0)[7] > 0) {
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, is that cum on your cl...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, is that cum on your clothes? Go change, I don't want you near me like that!"</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if ((((s as any).cumloc ?? 0)[14] > 0  ||  ((s as any).cumloc ?? 0)[15] > 0  ||  ((s as any).cumloc ?? 0)[1] > 0  ||  ((s as any).cumloc ?? 0)[4] > 0)  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
        // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey <<$pcs_firstname>>, you dirty slut, you fo...
        scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey ${((s as any).pcs_firstname ?? 0)}, you dirty slut, you forgot to wash the cum off! Get out!"</font>`);
        scene.actions([
          { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey chick, here for fun?"</font>
        scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey chick, here for fun?"</font>`);
        if (((s as any).Nestor ?? 0)?.['serve'] === 1) {
          // TODO-QSP: act 'Offer to serve him': Nestor['served'] = totminut
          scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_Serve'] }]);
        }
        scene.actions([
          { label: 'Just say hello and leave', goto: ['pav_shared_apt', 'start'] },
          { label: 'Chat with him', goto: ['pav_shared_nestor', 'Nestor_Chat'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterNestorDick(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <h3><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg');
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
  // TODO-QSP: dynamic text: his mood is <<$Nestor['mood_txt']>>
  scene.text(`his mood is ${((s as any).Nestor ?? 0)?.['mood_txt']}`);
  // TODO-QSP: dynamic text: His dick is <<npc_dick[$boy]>> cm long with somehow maintained pubic hair.
  scene.text(`His dick is ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long with somehow maintained pubic hair.`);
  if (((s as any).Nestor ?? 0)?.['hj'] === 1) {
    scene.text('-you have jerked him off');
  }
  if (((s as any).Nestor ?? 0)?.['hj'] > 1) {
    // TODO-QSP: dynamic text: -you have jerked him off <<Nestor['hj']>> times
    scene.text(`-you have jerked him off ${((s as any).Nestor ?? 0)?.['hj']} times`);
    // TODO-QSP: if Nestor['hjFail'] > 1: ' and failed to make him cum with your hands <<Nestor[''hjFail'']>> times'
  }
  if (((s as any).Nestor ?? 0)?.['bj'] === 1) {
    scene.text('-you have given him a blowjob');
  }
  if (((s as any).Nestor ?? 0)?.['bj'] > 1) {
    // TODO-QSP: dynamic text: -you have given him <<Nestor['bj']>> blowjobs
    scene.text(`-you have given him ${((s as any).Nestor ?? 0)?.['bj']} blowjobs`);
    if (((s as any).Nestor ?? 0)?.['bjFail'] > 1) {
      // TODO-QSP: dynamic text:  and failed to make him cum with your mouth <<Nestor['bjFail']>> times
      scene.text(` and failed to make him cum with your mouth ${((s as any).Nestor ?? 0)?.['bjFail']} times`);
    }
  }
  if (((s as any).Nestor ?? 0)?.['bjDeep'] === 1) {
    scene.text('-you have given him a blowjob with deepthroat');
  }
  if (((s as any).Nestor ?? 0)?.['bjDeep'] > 1) {
    // TODO-QSP: dynamic text: -you have given him <<Nestor['bjDeep']>> blowjobs with deepthroat
    scene.text(`-you have given him ${((s as any).Nestor ?? 0)?.['bjDeep']} blowjobs with deepthroat`);
    if (((s as any).Nestor ?? 0)?.['bjFailPuke'] > 1) {
      // TODO-QSP: dynamic text:  but failed and puked in his crotch <<Nestor['bjFailPuke']>> times
      scene.text(` but failed and puked in his crotch ${((s as any).Nestor ?? 0)?.['bjFailPuke']} times`);
    }
    if (((s as any).Nestor ?? 0)?.['bjFailFaint'] > 1) {
      // TODO-QSP: dynamic text:  but failed and fainted impaled on his cock <<Nestor['bjFailFaint']>> times
      scene.text(` but failed and fainted impaled on his cock ${((s as any).Nestor ?? 0)?.['bjFailFaint']} times`);
    }
  }
  if (((s as any).Nestor ?? 0)?.['swall'] === 1) {
    // TODO-QSP: dynamic text: -you have swallowed <<Nestor['Swall']>> load of his cum
    scene.text(`-you have swallowed ${((s as any).Nestor ?? 0)?.['Swall']} load of his cum`);
  }
  if (((s as any).Nestor ?? 0)?.['swall'] > 1) {
    // TODO-QSP: dynamic text: -you have swallowed <<Nestor['Swall']>> loads of his cum
    scene.text(`-you have swallowed ${((s as any).Nestor ?? 0)?.['Swall']} loads of his cum`);
  }
  if (((s as any).Nestor ?? 0)?.['vag'] === 1) {
    scene.text('-you had vaginal sex with him');
    if (((s as any).Nestor ?? 0)?.['vagCumInside'] >= 1) {
      scene.text(' and let him cum inside your pussy');
    }
    if (((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted'] >= 1) {
      scene.text(' and he also came inside your pussy against your will');
    }
  } else {
    if (((s as any).Nestor ?? 0)?.['vag'] > 1) {
      // TODO-QSP: dynamic text: -you had vaginal sex with him <<Nestor['vag']>> times
      scene.text(`-you had vaginal sex with him ${((s as any).Nestor ?? 0)?.['vag']} times`);
      if (((s as any).Nestor ?? 0)?.['vagCumInside'] >= 1) {
        // TODO-QSP: dynamic text:  and let him cum inside you <<Nestor['vagCumInside']>> times
        scene.text(` and let him cum inside you ${((s as any).Nestor ?? 0)?.['vagCumInside']} times`);
      }
      if (((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted'] >= 1) {
        // TODO-QSP: dynamic text:  and he also came inside your pussy against your will <<Nestor['vagCumInsideUnwa...
        scene.text(` and he also came inside your pussy against your will ${((s as any).Nestor ?? 0)?.['vagCumInsideUnwanted']} times`);
      }
    }
  }
  if (((s as any).Nestor ?? 0)?.['cumVag'] > 0) {
    // TODO-QSP: dynamic text: - he pumped a total of <<Nestor['cumVag']>> loads of cum into your pussy
    scene.text(`- he pumped a total of ${((s as any).Nestor ?? 0)?.['cumVag']} loads of cum into your pussy`);
  }
  if (((s as any).Nestor ?? 0)?.['anal'] === 1) {
    scene.text('-you had anal sex with him');
    if (((s as any).Nestor ?? 0)?.['analCumInside'] >= 1) {
      scene.text(' and let him cum inside your ass');
    }
    if (((s as any).Nestor ?? 0)?.['analCumInsideUnwanted'] >= 1) {
      scene.text(' and he also came inside your ass against your will');
    }
  }
  if (((s as any).Nestor ?? 0)?.['anal'] > 1) {
    // TODO-QSP: dynamic text: -you had anal sex with him <<Nestor['anal']>> times
    scene.text(`-you had anal sex with him ${((s as any).Nestor ?? 0)?.['anal']} times`);
    if (((s as any).Nestor ?? 0)?.['analCumInside'] >= 1) {
      // TODO-QSP: dynamic text:  and let him cum inside your ass <<Nestor['analCumInside']>> times
      scene.text(` and let him cum inside your ass ${((s as any).Nestor ?? 0)?.['analCumInside']} times`);
    }
    if (((s as any).Nestor ?? 0)?.['analCumInsideUnwanted'] >= 1) {
      // TODO-QSP: dynamic text:  and he also came inside your ass against your will <<Nestor['analCumInsideUnwan...
      scene.text(` and he also came inside your ass against your will ${((s as any).Nestor ?? 0)?.['analCumInsideUnwanted']} times`);
    }
  }
  if (((s as any).Nestor ?? 0)?.['cumAnal'] > 0) {
    // TODO-QSP: dynamic text: - he pumped a total of <<Nestor['cumAnal']>> loads of cum into your anus
    scene.text(`- he pumped a total of ${((s as any).Nestor ?? 0)?.['cumAnal']} loads of cum into your anus`);
  }
  if (((s as any).loc_arg ?? 0) === 'Nestor') {
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_nestor', 'Nestor'] },
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

function enterNestor_Chat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <h3><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['leaves']  &&  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['comes']) {
    ((s as any).shared_apt ?? {})['step'] = 0;
    scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'Nestor_Room'] }]);
  } else {
    if (((s as any).hour ?? 0) >= ((s as any).Nestor ?? 0)?.['sleeps']  ||  ((s as any).hour ?? 0) < ((s as any).Nestor ?? 0)?.['wakes']) {
      ((s as any).shared_apt ?? {})['step'] = 0;
      scene.actions([{ label: 'Continue', goto: ['pav_shared_apt', 'Nestor_Room'] }]);
    }
  }
  if (((s as any).shared_apt ?? 0)?.['chatLvl'] === 0) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is scanning your nude body with his eyes.
      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is scanning your nude body with his eyes.`);
      if (((s as any).pcs_bmi ?? 0) <= 18) {
        // TODO-QSP: dynamic text: He obviously enjoys the sight: <font color=#<<$Nestor['font']>>>"Nice body <<$pc...
        scene.text(`He obviously enjoys the sight: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Nice body ${((s as any).pcs_firstname ?? 0)}. Are you here to offer it?"</font>`);
      } else {
        if (((s as any).pcs_bmi ?? 0) <= 25) {
          // TODO-QSP: dynamic text: He is not very content with the sight: <font color=#<<$Nestor['font']>>>"You sho...
          scene.text(`He is not very content with the sight: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"You should lose some weight, ${((s as any).pcs_firstname ?? 0)}, you are getting fat."</font>`);
        } else {
          // TODO-QSP: dynamic text: He seems almost disgusted by the sight: <font color=#<<$Nestor['font']>>>"Jeezus...
          scene.text(`He seems almost disgusted by the sight: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Jeezus ${((s as any).pcs_firstname ?? 0)}, stop eating you are beginning to look like an elephant!"</font>`);
        }
      }
      if (((s as any).pcs_bmi ?? 0) <= 25  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Why did you leave those panties on <<$pcs_firs...
        scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Why did you leave those panties on ${((s as any).pcs_firstname ?? 0)}? Such a shame."</font>`);
      } else {
        if (((s as any).pcs_bmi ?? 0) <= 25  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          scene.text('As you accidentally turn around, he gazes between your asscheeks on the plug stuck in your ass.');
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Wow, you just can't be a second without someth...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Wow, you just can't be a second without something filling your holes, do you?"</font>`);
          if ((Math.floor(Math.random() * 101) + 0) < 30) {
            scene.text('As he watches you, he gets up and goes near you, his hand reaching for your plugged ass.');
            scene.actions([
              { label: 'What are you doing?', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['chatLvl'] = 10
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).PCloBimbo ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is scanning your outfit with his eyes.
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is scanning your outfit with his eyes.`);
        if (((s as any).pcs_bmi ?? 0) <= 25) {
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"You know I like when you dress like a mindless...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"You know I like when you dress like a mindless bimbo. Not that you aren't, but anyway, good job!"</font>`);
        } else {
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"I like girls dressed like bimbos, but they sho...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"I like girls dressed like bimbos, but they should have the body shape for it. Waste of good clothes on you."</font>`);
        }
      } else {
        if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is scanning your outfit with his eyes.
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is scanning your outfit with his eyes.`);
          if (((s as any).pcs_bmi ?? 0) <= 25) {
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Only thing that I like more than stupid bimbos...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Only thing that I like more than stupid bimbos are whores. I won't pay you anyway, but good job!"</font>`);
          } else {
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"I literally love whores, but with your body sh...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"I literally love whores, but with your body shape you won't be earning much money, darling."</font>`);
          }
        }
      }
    }
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([
        { label: 'Chat about everyday stuff', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 10
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 15;
        (s as any).sayN = Math.floor(Math.random() * 10) + 1;
        if (((s as any).sayN ?? 0) === 1) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Nestor['font']>>>"Once I have kicked a guy to his nose… he bl...
          scene.text(`<i><font color=#${((s as any).Nestor ?? 0)?.['font']}>"Once I have kicked a guy to his nose… he bled like a pig!"</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 2) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Nestor['font']>>>"Only morons have a job. I know how to make ...
          scene.text(`<i><font color=#${((s as any).Nestor ?? 0)?.['font']}>"Only morons have a job. I know how to make money without one, that's a skill!"</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 3) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Nestor['font']>>>"I know some cool guys of your age. They oft...
          scene.text(`<i><font color=#${((s as any).Nestor ?? 0)?.['font']}>"I know some cool guys of your age. They often hang around in the park."</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 4) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Nestor['font']>>>"No one likes the authorities. Especially th...
          scene.text(`<i><font color=#${((s as any).Nestor ?? 0)?.['font']}>"No one likes the authorities. Especially the cops. Yes. Fuck the cops!"</font></i>`);
        }
        if (((s as any).sayN ?? 0) === 5) {
          // TODO-QSP: dynamic text: <i><font color=#<<$Nestor['font']>>>"Don't hang around the train station too muc...
          scene.text(`<i><font color=#${((s as any).Nestor ?? 0)?.['font']}>"Don't hang around the train station too much. Shady people, you know."</font></i>`);
        }
        scene.text('<i>You spent some time chatting with him about his ventures and mischiefs, slightly improving your relation with him.</i>');
        qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
        qspCall(s, 'stat', '');
        (s as any).intimateTalkCh = Math.floor(Math.random() * 101) + 0;
        if (((s as any).Nestor ?? 0)?.['mood'] <= 5  &&  ((s as any).intimateTalkCh ?? 0) <= 80) {
          ((s as any).shared_apt ?? {})['step'] = 20;
        } else {
          ((s as any).shared_apt ?? {})['step'] = 0;
        }
        scene.actions([
          { label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_Chat'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 20) {
          (s as any).minut = ((s as any).minut ?? 0) + 3;
          if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 0) {
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"<<$pcs_firstname>>, have you finally decided t...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, have you finally decided to be our maid?"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Jeez…"</font>
            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Jeez…"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Come on girl, don't you see I need to tidy thi...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Come on girl, don't you see I need to tidy this shit-of-a-room?"</font>`);
            scene.actions([
              { label: 'Say you are still not interested', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
              { label: 'Say you are willing to do some work after all', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
    // TODO-QSP: shared_apt['servitudeLvl'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 1) {
              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"<<$pcs_firstname>>, have you finally decided t...
              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, have you finally decided to be our fucktoy?"</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What? I already clean and cook for you."</font>
              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What? I already clean and cook for you."</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey, you have to earn the rent money somewhere...
              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey, you have to earn the rent money somewhere anyway. This way you don't need to whore yourself on the streets you know?"</font>`);
              scene.actions([
                { label: 'Say you are no whore and you are not interested', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                { label: 'Say you are willing to spread your legs a bit after all', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
    // TODO-QSP: shared_apt['servitudeLvl'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
                scene.actions([
                  { label: 'Talk about sex', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 30
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                  { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 30) {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            // TODO-QSP: dynamic text: You get into rather wild discussion about sex, porn and all that stuff. <<$npc_f...
            scene.text(`You get into rather wild discussion about sex, porn and all that stuff. ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is obviously thinking about sex most of his time.`);
            ((s as any).shared_apt ?? {})['resCh'] = Math.floor(Math.random() * 7) + 0;
            if (((s as any).shared_apt ?? 0)?.['resCh'] <= 3) {
              ((s as any).shared_apt ?? {})['topicR'] = Math.floor(Math.random() * 5) + 1;
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 1) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he loves rough sex.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he loves rough sex.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 2) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he loves when the girl is submissive.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he loves when the girl is submissive.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 3) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he kinda likes when it is a bit painful for t...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he kinda likes when it is a bit painful for the girl.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 4) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you his <<npc_dick[$boy]>> cm long dick is big en...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick is big enough, but he would like it to be even bigger.`);
              }
              if (((s as any).shared_apt ?? 0)?.['topicR'] === 5) {
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he loves when the girl is young and thin.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he loves when the girl is young and thin.`);
              }
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['resCh'] === 4) {
                if (((s as any).Nestor ?? 0)?.['doPornpos'] === 0) {
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he loves to fuck girls in the Full Nelson pos...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he loves to fuck girls in the Full Nelson position. He saw it in porn.`);
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Nestor ?? {})['doPornpos'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                  ]);
                } else {
                  if (((s as any).Nestor ?? 0)?.['doPornpos'] === 1) {
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you he loves to fuck girls in the Pile Driver pos...
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you he loves to fuck girls in the Pile Driver position. He also saw it in porn.`);
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Nestor ?? {})['doPornpos'] = 2;
    qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                    ]);
                  }
                }
              } else {
                if (((s as any).shared_apt ?? 0)?.['resCh'] === 5) {
                  if (((s as any).Nestor ?? 0)?.['doAnal'] === 0) {
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you that he loves rough anal sex.
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you that he loves rough anal sex.`);
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Nestor ?? {})['doAnal'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                    ]);
                  }
                } else {
                  if (((s as any).shared_apt ?? 0)?.['resCh'] === 6) {
                    if (((s as any).Nestor ?? 0)?.['doAnal'] === 1  &&  ((s as any).Nestor ?? 0)?.['doPornpos'] === 2) {
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> tells you that he recently bought a vacuum dick enlarge...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} tells you that he recently bought a vacuum dick enlarger and cannot wait to test it.`);
                      scene.actions([
                        { label: 'Continue', handler: (st: GameState) => {
    ((s as any).Nestor ?? {})['doVacuum'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
    ((s as any).shared_apt ?? {})['step'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
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
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Helping you out!"</font>
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Helping you out!"</font>`);
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/buttplugpullout.mp4');
      scene.text('Suddenly he grabs the plug and pulls it out without a warning!');
      scene.text('PLOPPP… your ass makes a sound as the plug leaves it gaping.');
      // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch!"</font>
      scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch!"</font>`);
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"You're welcome <<$pcs_firstname>>, come again!...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"You're welcome ${((s as any).pcs_firstname ?? 0)}, come again!"</font>`);
      (s as any).analPlugIn = 0;
      (s as any).analPlugOut = 1;
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['chatLvl'] = 0
  }, goto: ['pav_shared_nestor', 'Nestor_Chat'] },
      ]);
    }
  }
  scene.build();
}

function enterNestor_Serve(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <h3><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>></font></h3>
  scene.text(`<h3><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}</font></h3>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  ((s as any).shared_apt ?? {})['step'] = 0;
  ((s as any).shared_apt ?? {})['subStep'] = 0;
  ((s as any).shared_apt ?? {})['sexCh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).Nestor ?? 0)?.['mood'] >= 7) {
    ((s as any).Nestor ?? {})['served'] = 0;
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Not now <<$pcs_firstname>>, get lost."</font>
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Not now ${((s as any).pcs_firstname ?? 0)}, get lost."</font>`);
    scene.actions([
      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['sexCh'] < 40) {
      ((s as any).Nestor ?? {})['served'] = 0;
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Not now <<$pcs_firstname>>, can't you see I am...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Not now ${((s as any).pcs_firstname ?? 0)}, can't you see I am busy?"</font>`);
      scene.actions([
        { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
      ]);
    } else {
      ((s as any).shared_apt ?? {})['actionR'] = Math.floor(Math.random() * 5) + 2;
      if (((s as any).shared_apt ?? 0)?.['actionR'] === 2) {
        // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"You can do me with your little hands."</font>
        scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"You can do me with your little hands."</font>`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A265', 1);
  }, goto: ['pav_shared_nestor', 'Nestor_handjob_start'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['actionR'] === 3) {
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Sure <<$pcs_firstname>>, blow me right now."</...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Sure ${((s as any).pcs_firstname ?? 0)}, blow me right now."</font>`);
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A265', 1);
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['actionR'] === 4) {
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Present your pussy, <<$pcs_firstname>>."</font...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Present your pussy, ${((s as any).pcs_firstname ?? 0)}."</font>`);
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A265', 1);
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['actionR'] === 5) {
              if (((s as any).Nestor ?? 0)?.['anal'] === 0) {
                if (((s as any).Nestor ?? 0)?.['doAnal'] === 1) {
                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hmmm… what would I like to do to you?"</font>
                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hmmm… what would I like to do to you?"</font>`);
                  scene.actions([
                    { label: 'It\'s your choice', goto: ['pav_shared_nestor', 'Nestor_Serve'] },
                    { label: 'You told me you like anal, do you?', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A265', 3);
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                  ]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_Serve'] }]);
                }
              } else {
                if (((s as any).Nestor ?? 0)?.['anal'] >= 1) {
                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Sure <<$pcs_firstname>>, I would like to take ...
                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Sure ${((s as any).pcs_firstname ?? 0)}, I would like to take your ass this time."</font>`);
                  scene.actions([
                    { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A265', 1);
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                  ]);
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['actionR'] === 6) {
                if (((s as any).Nestor ?? 0)?.['doVacuum'] >= 1) {
                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hmmm… what would I like to do to you?"</font>
                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hmmm… what would I like to do to you?"</font>`);
                  scene.actions([
                    { label: 'It\'s your choice', goto: ['pav_shared_nestor', 'Nestor_Serve'] },
                    { label: 'You told me you bought some vacuum enlarger, did you?', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
    qspCall(st, 'npc_relationship', 'modify', 'A265', 2);
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                  ]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_Serve'] }]);
                }
              }
            }
          }
        }
      }
      if (((s as any).shared_apt ?? 0)?.['actionR'] > 1) {
        scene.actions([
          { label: 'Say you changed your mind and leave', handler: (st: GameState) => {
    ((s as any).Nestor ?? {})['served'] = 0;
    qspCall(s, 'npc_relationship', 'modify', 'A265', (-1));
  }, goto: ['pav_shared_apt', 'start'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterNestorHandjobStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <b><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>> - handjob</font></b...
  scene.text(`<b><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - handjob</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg');
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_handjob'];
  scene.img('images/shared/sex/blowjob/kotovbj2.mp4');
  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> sits on his bed, spreading his legs, showing you where ...
  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} sits on his bed, spreading his legs, showing you where to go.`);
  scene.text('You drop on your knees, crawl to him and unzip his pants.');
  // TODO-QSP: dynamic text: His dick falls out of them, already half hard. <font color=#<<$Nestor['font']>>>...
  scene.text(`His dick falls out of them, already half hard. <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Get to work, little girl."</font>`);
  scene.text('Looking at the cock, you decide to:');
  scene.actions([
    { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
  ]);
  scene.build();
}

function enterNestorHandjobHeader(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <b><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>> - handjob</font></b...
  scene.text(`<b><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - handjob</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if ((!((s as any).cockHard ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg"></center>`);
    }
    if (((s as any).cockHard ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>`);
    }
  } else {
    if ((!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg"></center>');
    }
    if (((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>');
    }
  }
  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  scene.build();
}

function enterNestorHandjobSlow(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  if (((s as any).Nestor ?? 0)?.['mood'] === 0) {
    (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 20) + 1);
  } else {
    (s as any).orgB = ((s as any).orgB ?? 0) + ((Math.floor(Math.random() * 30) + 1) /((s as any).Nestor ?? {})?.['mood']);
  }
  scene.img('images/shared/sex/handjob/handjob2.mp4');
  // TODO-QSP: dynamic text: You grab <<$npc_firstname[$boy]>>'s cock in your hand, jerking it slowly, changi...
  scene.text(`You grab ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s cock in your hand, jerking it slowly, changing the pressure from time to time.`);
  if ((!((s as any).cockHard ?? 0))) {
    (s as any).cockHard = 1;
    // TODO-QSP: dynamic text: Your moves are slowly making the cock to get harder and harder, finally reaching...
    scene.text(`Your moves are slowly making the cock to get harder and harder, finally reaching his full ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm length.`);
  }
  qspCall(s, 'arousal', 'hj', 3);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
    { label: 'Jerk it fast', goto: ['pav_shared_nestor', 'Nestor_handjob_fast'] },
    { label: 'Lube and massage his cock', goto: ['pav_shared_nestor', 'Nestor_handjob_lube'] },
    { label: 'Lube and massage the tip', goto: ['pav_shared_nestor', 'Nestor_handjob_lube_tip'] },
  ]);
  scene.build();
}

function enterNestorHandjobFast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  scene.img('images/shared/sex/handjob/hj0.mp4');
  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 10);
  scene.text('You jerk his hard cock with quite a fast pace, making him moan from pleasure.');
  qspCall(s, 'arousal', 'hj', 3);
  qspCall(s, 'stat', '');
  if (((s as any).orgB ?? 0) >= 100) {
    scene.actions([
      { label: 'Try to make him cum', goto: ['pav_shared_nestor', 'Nestor_handjob_cum_attempt'] },
    ]);
  }
  scene.actions([
    { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
    { label: 'Jerk it fast', goto: ['pav_shared_nestor', 'Nestor_handjob_fast'] },
    { label: 'Put on lube and massage the cock', goto: ['pav_shared_nestor', 'Nestor_handjob_lube'] },
    { label: 'Put on lube and massage the tip', goto: ['pav_shared_nestor', 'Nestor_handjob_lube_tip'] },
  ]);
  scene.build();
}

function enterNestorHandjobLube(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  scene.img('images/shared/sex/handjob/handjob1.mp4');
  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 15);
  scene.text('You put some lube on your hands and massage his cock with it.');
  scene.text('The slimy lube enables you to increase the sensation, making him moan even more inensively.');
  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Oh yeah <<$pcs_firstname>>, this is what girls...
  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Oh yeah ${((s as any).pcs_firstname ?? 0)}, this is what girls should learn as young as possible!"</font>`);
  qspCall(s, 'arousal', 'hj', 3);
  qspCall(s, 'stat', '');
  if (((s as any).orgB ?? 0) >= 100) {
    scene.actions([
      { label: 'Try to make him cum', goto: ['pav_shared_nestor', 'Nestor_handjob_cum_attempt'] },
    ]);
  }
  scene.actions([
    { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
    { label: 'Jerk it fast', goto: ['pav_shared_nestor', 'Nestor_handjob_fast'] },
    { label: 'Put on lube and massage the cock', goto: ['pav_shared_nestor', 'Nestor_handjob_lube'] },
    { label: 'Put on lube and massage the tip', goto: ['pav_shared_nestor', 'Nestor_handjob_lube_tip'] },
  ]);
  scene.build();
}

function enterNestorHandjobLubeTip(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  scene.img('images/shared/sex/handjob/hj1.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 15);
  scene.text('You put some lube on your hands and massage the tip of his cock with it.');
  scene.text('The slimy lube enables you to play with the violet head of his cock, stroking also the hole time to time.');
  if (((s as any).orgB ?? 0) >= 100) {
    scene.actions([
      { label: 'Try to make him cum', goto: ['pav_shared_nestor', 'Nestor_handjob_cum_attempt'] },
    ]);
  }
  scene.actions([
    { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
    { label: 'Jerk it fast', goto: ['pav_shared_nestor', 'Nestor_handjob_fast'] },
    { label: 'Put on lube and massage the cock', goto: ['pav_shared_nestor', 'Nestor_handjob_lube'] },
    { label: 'Put on lube and massage the tip', goto: ['pav_shared_nestor', 'Nestor_handjob_lube_tip'] },
  ]);
  scene.build();
}

function enterNestorHandjobCumAttempt(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  scene.text('You decided that now it\'s time to try and make him finally cum.');
  scene.text('Intensifying the pressure and pace, you expect him every moment to moan and be done with it.');
  qspCall(s, 'arousal', 'hj', 5);
  ((s as any).shared_apt ?? {})['cumCh'] = Math.floor(Math.random() * 101) + 0;
  if (((s as any).shared_apt ?? 0)?.['cumCh'] <= 70) {
    scene.img('images/shared/sex/cum/handjob/hand0,0.mp4');
    // TODO-QSP: dynamic text: Your attempt is successful, as <<$npc_firstname[$boy]>> cums right onto your han...
    scene.text(`Your attempt is successful, as ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cums right onto your hands and squirts all around them.`);
    ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
    qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0), 1);
    scene.actions([
      { label: 'Get up', goto: ['pav_shared_nestor', 'Nestor_handjob_cum_success'] },
    ]);
  } else {
    (s as any).failC = ((s as any).failC ?? 0) + (1);
    if (((s as any).failC ?? 0) >= 3) {
      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfail.jpg');
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Come on <<$pcs_firstname>>, if you can't suck ...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, if you can't suck a cock stop wasting my time. Get out!"</font>`);
      scene.actions([
        { label: 'Get up', goto: ['pav_shared_nestor', 'Nestor_handjob_cum_fail'] },
      ]);
    } else {
      scene.img('images/shared/sex/handjob/kotovhj.jpg');
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Come on <<$pcs_firstname>>, what are you doing...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, what are you doing down there?"</font>`);
      scene.actions([
        { label: 'Jerk it slowly', goto: ['pav_shared_nestor', 'Nestor_handjob_slow'] },
        { label: 'Jerk it fast', goto: ['pav_shared_nestor', 'Nestor_handjob_fast'] },
        { label: 'Put on lube and massage the cock', goto: ['pav_shared_nestor', 'Nestor_handjob_lube'] },
        { label: 'Put on lube and massage the tip', goto: ['pav_shared_nestor', 'Nestor_handjob_lube_tip'] },
      ]);
    }
  }
  scene.build();
}

function enterNestorHandjobCumFail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
  // TODO-QSP: dynamic text: You get up from your knees, looking at <<$npc_firstname[$boy]>>:<font color=#<<$...
  scene.text(`You get up from your knees, looking at ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}:<font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry I was unable to satisfy you."</font>.`);
  // TODO-QSP: dynamic text: He looks really pissed:<font color=#<<$Nestor['font']>>>"Get out you lousy slut!...
  scene.text(`He looks really pissed:<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Get out you lousy slut!"</font>`);
  qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
  ((s as any).Nestor ?? {})['hjFail'] = (((s as any).Nestor ?? {})['hjFail'] ?? 0) + (1);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterNestorHandjobCumSuccess(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_shared_nestor', 'Nestor_handjob_header');
  ((s as any).Nestor ?? {})['hj'] = (((s as any).Nestor ?? {})['hj'] ?? 0) + (1);
  if (((s as any).Nestor ?? 0)?.['mood'] <= 5) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Good job, <<$pcs_firstname>>. Now get out."</f...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Good job, ${((s as any).pcs_firstname ?? 0)}. Now get out."</font>`);
    // TODO-QSP: dynamic text: Cleaning your hands off the cum: <font color=#<<$pcs_font>>>"OK, see you later."...
    scene.text(`Cleaning your hands off the cum: <font color=#${((s as any).pcs_font ?? 0)}>"OK, see you later."</font>.`);
    qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
  } else {
    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn't pay anymore attention to you, dressing up his p...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} doesn't pay anymore attention to you, dressing up his pants he takes another magazine and starts reading it.`);
    scene.text('You just pack your things and quietly leave through the door.');
  }
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
  ]);
  scene.build();
}

function enterNestor_Suck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <b><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>> - blowjob</font></b...
  scene.text(`<b><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - blowjob</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  (!((s as any).cockHard ?? 0))) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).cockHard ?? 0) === 1) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>');
    }
  }
  ((s as any).shared_apt ?? {})['price'] = ((s as any).shared_apt ?? 0)?.['price_blowjob'];
  if (((s as any).shared_apt ?? 0)?.['step'] > 0) {
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> orgasm build-up: '+orgB+'/100
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} orgasm build-up: '+orgB+'/100`);
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    scene.img('images/locations/pavlovsk/resident/sharedapt/gp/cockflaccid.jpg');
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes down his pants, revealing his flaccid cock. He re...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes down his pants, revealing his flaccid cock. He relaxes on his bed, expecting you to do the service.`);
    scene.text('You drop on your knees and crawl to him, trying to move as sexy as possible.');
    scene.actions([
      { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
      { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
      { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
      { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      scene.img('images/shared/sex/blowjob/kotovbj74.mp4');
      scene.text('You decide that the best approach is to arouse him first.');
      scene.text('Kneeling between his legs, you show him the whole length of your tongue, looking as lusty as you can.');
      scene.text('Slowly you move your head down in his crotch and bellow his phallus. The moment you start using your tongue on his device, you can feel the increased pulsation in his veins, making the cock larger and thicker every second.');
      (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 5) + 1);
      (s as any).cockHard = 1;
      qspCall(s, 'arousal', 'bj', 3);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
        { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
        { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
        { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
      ]);
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        scene.img('images/shared/sex/blowjob/kotovbj50.mp4');
        // TODO-QSP: dynamic text: You take <<$npc_firstname[$boy]>> cock in your hand, pointing the tip in front o...
        scene.text(`You take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cock in your hand, pointing the tip in front of your mouth.`);
        // TODO-QSP: dynamic text: As it was your favourity puppy, you start to gently Lick the tip all around, slo...
        scene.text(`As it was your favourity puppy, you start to gently Lick the tip all around, slowly making the cock to get harder and harder, finally reaching his full ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm length.`);
        qspCall(s, 'arousal', 'bj', 3);
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 6) + 2);
        (s as any).cockHard = 1;
        scene.actions([
          { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
          { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
          { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
          { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          scene.img('images/locations/shared/abduction/sex/slavewhoreblowjobtip3.mp4');
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
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            ]);
          }
          scene.actions([
            { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            scene.img('images/shared/sex/blowjob/kotovbj122.mp4');
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
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
              ]);
            }
            scene.actions([
              { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
              { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
              { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
              { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
              { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjdeepthroat.mp4');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
              // TODO-QSP: dynamic text: You decide to take <<$npc_firstname[$boy]>>'s hard, <<npc_dick[$boy]>> cm long c...
              scene.text(`You decide to take ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}'s hard, ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock all the way your throat.`);
              scene.text('You force yourself onto it, overcoming the gag reflex in your throat, saliva and tears almost squirting out of you.');
              scene.text('Doing this several times in a row, you try to hold on as long as you can with dick all the way down in your throat.');
              ((s as any).Nestor ?? {})['bjDeep'] = 1;
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
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                ]);
              } else {
                if (((s as any).fadeOutCh ?? 0) <= 10) {
                  scene.text('<b>You try too hard to keep the cock inside you as long as possible, not being able to catch enough breath. Suddenly all goes dark and you fade away…</b>');
                  scene.actions([
                    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 9
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                  ]);
                } else {
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'Try to make him cum', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 6
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Lick his balls', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    { label: 'Lick the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    { label: 'Suck the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
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
                  scene.img('images/shared/sex/cum/mouth/cum1,5.mp4');
                  // TODO-QSP: dynamic text: Your attempt is successful, as <<$npc_firstname[$boy]>> cums right into your mou...
                  scene.text(`Your attempt is successful, as ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} cums right into your mouth and on your face.`);
                  ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
                  scene.actions([
                    { label: 'Get up', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 10
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                  ]);
                } else {
                  (s as any).failC = ((s as any).failC ?? 0) + (1);
                  if (((s as any).failC ?? 0) >= 3) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfail.jpg');
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"You are such a lousy sucker <<$pcs_firstname>>...
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"You are such a lousy sucker ${((s as any).pcs_firstname ?? 0)}. Get out!"</font>`);
                    scene.actions([
                      { label: 'Get up', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 7
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    ]);
                  } else {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjfailtryagain.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Come on <<$pcs_firstname>>, what are you doing...
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Come on ${((s as any).pcs_firstname ?? 0)}, what are you doing down there?"</font>`);
                    if (((s as any).failC ?? 0) === 1) {
                      scene.text('He is getting nervous…');
                    }
                    if (((s as any).failC ?? 0) === 2) {
                      scene.text('He is obviously annoyed, you better try to finish him now!');
                    }
                    scene.actions([
                      { label: 'Suck just the tip', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                      { label: 'Suck the cock', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 4
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                      { label: 'Deepthroat', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 5
  }, goto: ['pav_shared_nestor', 'Nestor_Suck'] },
                    ]);
                  }
                }
                qspCall(s, 'stat', '');
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 7) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                  // TODO-QSP: dynamic text: You get up from your knees, looking at <<$npc_firstname[$boy]>>:<font color=#<<$...
                  scene.text(`You get up from your knees, looking at ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}:<font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry I was unable to satisfy you."</font>.`);
                  // TODO-QSP: dynamic text: He looks really pissed:<font color=#<<$Nestor['font']>>>"Get out you lousy slut!...
                  scene.text(`He looks really pissed:<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Get out you lousy slut!"</font>`);
                  qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
                  ((s as any).shared_apt ?? {})['step'] = 0;
                  ((s as any).Nestor ?? {})['bjFail'] = (((s as any).Nestor ?? {})['bjFail'] ?? 0) + (1);
                  scene.actions([
                    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['step'] === 8) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/bjdeepthroatpuke.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Oh my god <<$pcs_firstname>>, have you just pu...
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Oh my god ${((s as any).pcs_firstname ?? 0)}, have you just puked your shit onto me??!!"</font>`);
                    // TODO-QSP: dynamic text: Cleaning your face and mouth with your clothes, all you can say is <font color=#...
                    scene.text(`Cleaning your face and mouth with your clothes, all you can say is <font color=#${((s as any).pcs_font ?? 0)}>"I'm sorry…"</font>.`);
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Get out you stupid cunt!"</font>
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Get out you stupid cunt!"</font>`);
                    qspCall(s, 'npc_relationship', 'modify', 'A265', (-5));
                    ((s as any).shared_apt ?? {})['step'] = 0;
                    ((s as any).Nestor ?? {})['bjFail'] = (((s as any).Nestor ?? {})['bjFail'] ?? 0) + (1);
                    ((s as any).Nestor ?? {})['bjFailPuke'] = (((s as any).Nestor ?? {})['bjFailPuke'] ?? 0) + (1);
                    scene.actions([
                      { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['step'] === 9) {
                      scene.img('images/locations/pavlovsk/resident/sharedapt/sex/faint.jpg');
                      // TODO-QSP: dynamic text: You wake up being slapped in your face: <font color=#<<$Nestor['font']>>>"<<$pcs...
                      scene.text(`You wake up being slapped in your face: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}! ${((s as any).pcs_firstname ?? 0)}! Wake up!"</font>`);
                      // TODO-QSP: dynamic text: Slowly your normal sight returns to you, but still, you are very confused. <font...
                      scene.text(`Slowly your normal sight returns to you, but still, you are very confused. <font color=#${((s as any).pcs_font ?? 0)}>"Wh… what happened?</font>`);
                      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"I guess you took somehow bigger portion than y...
                      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"I guess you took somehow bigger portion than you can stand, ${((s as any).pcs_firstname ?? 0)}!"</font> He is obviously entertained by this, even though you were unable to finish him.`);
                      qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
                      ((s as any).shared_apt ?? {})['step'] = 0;
                      ((s as any).Nestor ?? {})['bjFail'] = (((s as any).Nestor ?? {})['bjFail'] ?? 0) + (1);
                      ((s as any).Nestor ?? {})['bjFailFaint'] = (((s as any).Nestor ?? {})['bjFailFaint'] ?? 0) + (1);
                      scene.actions([
                        { label: 'Get up and leave', goto: ['pav_shared_apt', 'start'] },
                      ]);
                    } else {
                      if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                        ((s as any).Nestor ?? {})['bj'] = (((s as any).Nestor ?? {})['bj'] ?? 0) + (1);
                        if (((s as any).Nestor ?? 0)?.['mood'] <= 5) {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Good job, <<$pcs_firstname>>. Now get out."</f...
                          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Good job, ${((s as any).pcs_firstname ?? 0)}. Now get out."</font>`);
                          // TODO-QSP: dynamic text: Cleaning your face and mouth off the cum: <font color=#<<$pcs_font>>>"OK, see yo...
                          scene.text(`Cleaning your face and mouth off the cum: <font color=#${((s as any).pcs_font ?? 0)}>"OK, see you later."</font>.`);
                          qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
                          ((s as any).shared_apt ?? {})['step'] = 0;
                        } else {
                          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/leave.jpg');
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> doesn't pay any more attention to you, dressing up his ...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} doesn't pay any more attention to you, dressing up his pants he takes another magazine and starts reading it.`);
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

function enterNestor_SexVaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <b><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>> - vaginal sex</font...
  scene.text(`<b><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - vaginal sex</font></b>`);
  if (((s as any).cfg_vars ?? 0)?.['imgh'] < 250) {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).shared_apt ?? 0)?.['step'] < 6) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>`);
    }
    if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
      // TODO-QSP: dynamic text: <center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/sharedapt/gp/...
      scene.text(`<center><img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img ${((s as any).set_imgh ?? 0)} src="images/locations/pavlovsk/resident/sharedapt/gp/cockerectvacuum.jpg"></center>`);
    }
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).shared_apt ?? 0)?.['step'] < 6) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>');
    }
    if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
      scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerectvacuum.jpg"></center>');
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
    // TODO-QSP: dynamic text: His somewhat thin but muscular body has rather pale skin. He moves towards you, ...
    scene.text(`His somewhat thin but muscular body has rather pale skin. He moves towards you, lubing his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey, <<$pcs_firstname>>, you let those panties...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey, ${((s as any).pcs_firstname ?? 0)}, you let those panties on for me to rip them off, or what?"</font>`);
      scene.text('You entirely forgot to take them off! Or maybe you didn\'t want to actually?');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes you by the ass, instantly poking his fingers into...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes you by the ass, instantly poking his fingers into your pussy.`);
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Do you want to have your pussy fucked a certai...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Do you want to have your pussy fucked a certain way, or should I choose?"</font>`);
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 3) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 2) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['vacuum'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 6) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Nestor ?? 0)?.['pornPos'] < 1) {
      scene.actions([
        { label: 'You told me that you like the Full Nelson position, do you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 3);
    ((s as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Nestor ?? 0)?.['pornPos'] < 2) {
      scene.actions([
        { label: 'You told me that you want the Pile Driver position, do you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 2);
    ((s as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['doVacuum'] === 1  &&  ((s as any).Nestor ?? 0)?.['vacuum'] < 1) {
      scene.actions([
        { label: 'You told me you want to test some kind dick enlarger device…', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 2);
    ((s as any).shared_apt ?? {})['step'] = 6;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] >= 1) {
      // TODO-QSP: act 'Take me Full Nelson': shared_apt['step'] = 4
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] >= 2) {
      // TODO-QSP: act 'Take me Pile Driver': shared_apt['step'] = 5
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
    }
    if (((s as any).Nestor ?? 0)?.['vacuum'] === 1) {
      // TODO-QSP: act 'Take me using the vacuum enlarger on your dick': shared_apt['step'] = 6
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = shared_apt['hisPos']
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/vagmissionary1.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels between those, roughly spreading them as wide as...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels between those, roughly spreading them as wide as they go, making you scream a bit.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        // TODO-QSP: dynamic text: He points the tip of his <<npc_dick[$boy]>> to your pussy and looks up to your f...
        scene.text(`He points the tip of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} to your pussy and looks up to your face: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Look at me while I penetrate your slit!"</font>`);
        scene.text('Slightly shaking you do as he says…');
        scene.text('In that moment he pushes his dick inside you as far as your somewhat dry pussy let\'s him.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> bangs you wildly right from the start.
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} bangs you wildly right from the start.`);
        qspCall(s, 'arousal', 'vaginal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 10);
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/vagmissionary2.mp4');
          scene.text('As he continuously and wildly rams your pussy, you have no strength to do anything but endure it and moan like an injured pig.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as fast as he can, all his <<npc_dick[$boy...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as fast as he can, all his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm are inside you.`);
          qspCall(s, 'arousal', 'vaginal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
          if (((s as any).orgB ?? 0) < 100) {
            // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
            scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/vagdoggy1.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass as high as possible.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels behind you, probing your vagina with several of ...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels behind you, probing your vagina with several of his fingers.`);
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"<<$pcs_firstname>>, prepare for the entry!"</f...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, prepare for the entry!"</font>`);
          // TODO-QSP: dynamic text: After his words, he grabs your hips and thrusts all of his <<npc_dick[$boy]>> ce...
          scene.text(`After his words, he grabs your hips and thrusts all of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} centimeters inside your pussy, making you scream from discomfort.`);
          scene.text('The first pain fades away and you can feel building warmth and a good feeling of being fucked from behind like a mare in heat.');
          scene.text('He fucks you furiously right from the start.');
          qspCall(s, 'arousal', 'vaginal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.img('images/locations/city/residential/sauna/sex/fuckroughvaginal4.mp4');
            scene.text('As he continuously and wildly rams your pussy, you have no strength to do anything but endure it and moan like an injured pig.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and as fast he can, all of his <<n...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and as fast he can, all of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm is inside you with each stroke.`);
            qspCall(s, 'arousal', 'vaginal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
            if (((s as any).orgB ?? 0) < 100) {
              // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
              scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
              ]);
            }
          }
        }
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagsidefuck1.jpg');
            scene.text('You lie on the bed, raising the upper leg in the air, exposing your tender pussy.');
            scene.text('He doesn\'t wait for anything and lies behind you, instantly preparing his large dick for the entry.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes his rod, pointing the tip right to the entry of y...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes his rod, pointing the tip right to the entry of your vagina.`);
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"<<$pcs_firstname>>, prepare for the penetratio...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, prepare for the penetration!"</font>`);
            // TODO-QSP: dynamic text: Then he pushes as far as his <<npc_dick[$boy]>> cm long dick can reach.
            scene.text(`Then he pushes as far as his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick can reach.`);
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> bangs you wildly right from the start.
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} bangs you wildly right from the start.`);
            qspCall(s, 'arousal', 'vaginal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 10);
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              (s as any).minut = ((s as any).minut ?? 0) + 10;
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagsidefuck2.mp4');
              scene.text('As he continuously and wildly rams your pussy, you have no strength to do anything but endure it and moan like an injured pig.');
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep as he can and giving the position ...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep as he can and giving the position and the whole (${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm) size of his dick, most of the strokes hurt.`);
              qspCall(s, 'pain', '', 1, 'vaginal', 'stretch');
              qspCall(s, 'arousal', 'vaginal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
              if (((s as any).orgB ?? 0) < 100) {
                // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            if (((s as any).Nestor ?? 0)?.['pornPos'] < 1) {
              ((s as any).Nestor ?? {})['pornPos'] = 1;
            }
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagfullnelson1.jpg');
              scene.text('You let him sit on the edge of the bed, having his large dick prepared for your vagina.');
              // TODO-QSP: dynamic text: Facing him with your back, you climb on top of him and bury his <<npc_dick[$boy]...
              scene.text(`Facing him with your back, you climb on top of him and bury his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick in your pussy. You wanted to ride it a bit to make the fuck smoother, but he doesn't let you:<font color=#${((s as any).Nestor ?? 0)?.['font']}>"No time for that ${((s as any).pcs_firstname ?? 0)}, let's start already!"</font>`);
              scene.text('Not waiting for your answer he grabs your legs and reaches for your head, immobilizing you entirely. Then he starts fucking you like a wild animal.');
              // TODO-QSP: dynamic text: In this position, you literally see every stroke of his <<npc_dick[$boy]>> cm lo...
              scene.text(`In this position, you literally see every stroke of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long penis into your pussy… And there is nothing else you can do.`);
              qspCall(s, 'arousal', 'vaginal', 10, 'lube');
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                (s as any).minut = ((s as any).minut ?? 0) + 10;
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagfullnelson2.mp4');
                scene.text('As he continuously and wildly rams your pussy, you have no strength to do anything but endure it and moan like an injured pig.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                qspCall(s, 'arousal', 'vaginal', 10);
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
                if (((s as any).orgB ?? 0) < 100) {
                  // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
                }
                if (((s as any).orgB ?? 0) >= 100) {
                  scene.actions([
                    { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              if (((s as any).Nestor ?? 0)?.['pornPos'] < 2) {
                ((s as any).Nestor ?? {})['pornPos'] = 2;
              }
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagpiledriver1.jpg');
                scene.text('You take a pillow from his bed, put it on the floor and lie on it with your back.');
                scene.text('As if you were doing yoga, you put your ass in the hands and lift it above your head, letting the feet fall down aside your head.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now has the very best access to your pussy: <font color...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now has the very best access to your pussy: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Now that's a sight! Every girl should be fucked like that!"</font>`);
                scene.text('He goes to you, probing your pussy with several of his fingers.');
                scene.text('After a while he takes his phallus, somehow bending it downwards and pushing it inside you.');
                qspCall(s, 'arousal', 'vaginal', 10, 'lube');
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                  (s as any).minut = ((s as any).minut ?? 0) + 10;
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/vagpiledriver2.mp4');
                  scene.text('As he continuously and wildly rams your pussy, you have no strength to do anything but endure it and moan like an injured pig.');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can, making big effort to hammer...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can, making big effort to hammer you down as much as he can.`);
                  qspCall(s, 'arousal', 'vaginal', 10);
                  qspCall(s, 'stat', '');
                  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
                  if (((s as any).orgB ?? 0) < 100) {
                    // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
                  }
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
                if (((s as any).Nestor ?? 0)?.['vacuum'] < 1) {
                  ((s as any).Nestor ?? {})['vacuum'] = 1;
                }
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  ((s as any).Nestor ?? {})['Dick_enlarged'] = ((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] + (((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] * (Math.floor(Math.random() * 3) + 2) / 10);
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/vacuumpumppenis.jpg');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes a vacuum dick enlarger device from his closet, pu...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes a vacuum dick enlarger device from his closet, putting it on his already ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick.`);
                  scene.text('As he is pushing the pump, you can see the cock getting larger with each push.');
                  // TODO-QSP: dynamic text: After some time he stops, putting a ring on the root of his dick. Today the devi...
                  scene.text(`After some time he stops, putting a ring on the root of his dick. Today the device has enlarged it to ${((s as any).Nestor ?? 0)?.['Dick_enlarged']} cm!`);
                  scene.actions([
                    { label: 'Let him fuck you with that monster', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                    scene.img('images/locations/shared/abduction/sex/slavewhorefuckdeep1.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Now <<$pcs_firstname>> prepare your pussy for ...
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Now ${((s as any).pcs_firstname ?? 0)} prepare your pussy for the famous Pussy Destroyer!"</font>`);
                    scene.text('As he reaches for your pussy you close your eyes and brace for the expected pain.');
                    scene.text('He starts pushing it into, and even that it is quite lubed, it goes hard.');
                    // TODO-QSP: dynamic text: Finally, he slips through the inner barrier and thrusts a big part of his <<$npc...
                    scene.text(`Finally, he slips through the inner barrier and thrusts a big part of his ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} enlarged, ${((s as any).Nestor ?? 0)?.['Dick_enlarged']} cm long dick into you.`);
                    (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 20);
                    qspCall(s, 'pain', '', 1, 'vaginal', 'tear');
                    scene.actions([
                      { label: 'Endure it', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                      scene.img('images/locations/shared/abduction/sex/slavewhorefuckdeep2.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> uses his newly gained centimeters and fucks you harder ...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} uses his newly gained centimeters and fucks you harder than usual, making you scream and moan and beg for relief… in vain.`);
                      scene.text('Today he obviously enjoys his dominance and fucks you relentlessly.');
                      scene.text('You have no strength to fight him and just try to endure it till the end.');
                      (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
                      qspCall(s, 'pain', '', 1, 'vaginal', 'stretch');
                      if (((s as any).orgB ?? 0) < 100) {
                        // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 2
                        scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
                      }
                      if (((s as any).orgB ?? 0) >= 100) {
                        scene.actions([
                          { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                        ]);
                      }
                    }
                  }
                }
              } else {
                if (((s as any).shared_apt ?? 0)?.['step'] === 10) {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> is groaning wildly, you can say that he is reaching his...
                    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} is groaning wildly, you can say that he is reaching his orgasm.`);
                    scene.text('You decide to tell him:');
                    ((s as any).Nestor ?? {})['vag'] = (((s as any).Nestor ?? {})['vag'] ?? 0) + (1);
                    ((s as any).shared_apt ?? {})['cumOutL'] = Math.floor(Math.random() * 5) + 2;
                    scene.actions([
                      { label: 'Cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                      { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL']
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                      scene.img('images/locations/shared/abduction/sex/slavewhorecumpussy3.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm, pumping his load <<...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm, pumping his load ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm deep inside your pussy.`);
                      ((s as any).Nestor ?? {})['vagCumInside'] = (((s as any).Nestor ?? {})['vagCumInside'] ?? 0) + (1);
                      ((s as any).Nestor ?? {})['cumVag'] = (((s as any).Nestor ?? {})['cumVag'] ?? 0) + (1);
                      ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and starts spouting ...
                        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and starts spouting his seed, he takes his dick out and points it on your stomach.`);
                        scene.text('A large pool of cum lands on your abdomen, feeling warm but sticky.');
                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                        ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and starts spouting ...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and starts spouting his seed, he takes his dick out and points it on your ass.`);
                          scene.text('Both your asscheeks are covered in sticky, warm seed.');
                          (s as any).minut = ((s as any).minut ?? 0) + 2;
                          ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and spouting his see...
                            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and spouting his seed, he pushes you on your knees and points his tip in front of your face.`);
                            scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Oh yes, now that's the right makeup for a girl...
                            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Oh yes, now that's the right makeup for a girl!"</font>`);
                            (s as any).minut = ((s as any).minut ?? 0) + 2;
                            ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>>, I cum where I want...
                              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)}, I cum where I want to."</font>`);
                              if (((s as any).tabletkishot ?? 0) === 0  &&  ((s as any).pillcon ?? 0) < 0) {
                                // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I am not on the pill <<$npc_firstname[$boy]>>!"</fon...
                                scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I am not on the pill ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}!"</font>`);
                                // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"And? Your problem. Piss off."</font>
                                scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"And? Your problem. Piss off."</font>`);
                                scene.text('He is obvously annoyed by your reaction.');
                                qspCall(s, 'npc_relationship', 'modify', 'A265', (-5));
                              } else {
                                qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
                              }
                              scene.text('You furiously get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t land on your legs and carpet.');
                              ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                              ((s as any).Nestor ?? {})['cumVag'] = (((s as any).Nestor ?? {})['cumVag'] ?? 0) + (1);
                              ((s as any).Nestor ?? {})['vagCumInsideUnwanted'] = (((s as any).Nestor ?? {})['vagCumInsideUnwanted'] ?? 0) + (1);
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
                                // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"I will cum in your pussy or you will swallow i...
                                scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"I will cum in your pussy or you will swallow it. Make your choice before it's too late, ${((s as any).pcs_firstname ?? 0)}!"</font>`);
                                if (((s as any).Nestor ?? 0)?.['mood'] <= 4) {
                                  // TODO-QSP: act 'Neither!': shared_apt['subStep'] = 30
                                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
                                }
                                if (((s as any).Nestor ?? 0)?.['mood'] > 4) {
                                  // TODO-QSP: act 'Neither!': shared_apt['subStep'] = 5
                                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] }]);
                                }
                                scene.actions([
                                  { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 20
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                                  { label: 'Pussy', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
                                ]);
                              } else {
                                if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                                  scene.img('images/locations/shared/abduction/sex/slavewhorecummouth5.mp4');
                                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the end and in the moment he is about t...
                                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                                  scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> spins the last of his cum dry from his cock, you close ...
                                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                                  scene.text('Afterwards, you show him your tongue as proof that not a drop was left unconsumed…');
                                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Good girl, better than any food, is it?"</font...
                                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Good girl, better than any food, is it?"</font>`);
                                  ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                                  ((s as any).Nestor ?? {})['swall'] = (((s as any).Nestor ?? {})['swall'] ?? 0) + (1);
                                  qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
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
                                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Alright I'll cum elsewhere, but only because I...
                                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Alright I'll cum elsewhere, but only because I have a ${((s as any).Nestor ?? 0)?.['mood_txt']} mood today!"</font>`);
                                    qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
                                    ((s as any).shared_apt ?? {})['cumOutL2'] = Math.floor(Math.random() * 3) + 2;
                                    scene.actions([
                                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL2']
  }, goto: ['pav_shared_nestor', 'Nestor_SexVaginal'] },
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
  }
  scene.build();
}

function enterNestor_SexAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A265');
  // TODO-QSP: dynamic text: <b><font color=#<<$Nestor['font']>>><<$npc_firstname[$boy]>> - anal sex</font></...
  scene.text(`<b><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} - anal sex</font></b>`);
  if (((s as any).shared_apt ?? 0)?.['step'] === 0) {
    scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"></center>');
  }
  if (((s as any).shared_apt ?? 0)?.['step'] > 0  &&  ((s as any).shared_apt ?? 0)?.['step'] < 6) {
    scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerect.jpg"></center>');
  }
  if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
    scene.text('<center><img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/gp.jpg"> <img height="250" src="images/locations/pavlovsk/resident/sharedapt/gp/cockerectvacuum.jpg"></center>');
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
    // TODO-QSP: dynamic text: His somewhat thin but muscular body has rather pale skin. He moves towards you, ...
    scene.text(`His somewhat thin but muscular body has rather pale skin. He moves towards you, lubing his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long cock and stroking it on the way.`);
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      qspCall(s, 'panties', 'remove');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Hey, <<$pcs_firstname>>, you let those panties...
      scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Hey, ${((s as any).pcs_firstname ?? 0)}, you let those panties on for me to rip them off, or what?"</font>`);
      scene.text('You entirely forgot to take them off! Or maybe you didn\'t want to actually?');
      scene.text('You reach for the ribbon of the panties, slowly slipping them off, down your legs. You blush a little.');
    }
    // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes you by the ass, instantly poking his fingers into...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes you by the ass, instantly poking his fingers into your anus.`);
    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Do you want to have your ass fucked a certain ...
    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Do you want to have your ass fucked a certain way, or should I choose?"</font>`);
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 0) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 3) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 4) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] === 2) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['vacuum'] === 1) {
      ((s as any).shared_apt ?? {})['hisPos'] = Math.floor(Math.random() * 6) + 1;
    }
    if (((s as any).Nestor ?? 0)?.['doPornpos'] === 1  &&  ((s as any).Nestor ?? 0)?.['pornPos'] < 1) {
      scene.actions([
        { label: 'You told me that you like the Full Nelson position, do you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 3);
    ((s as any).shared_apt ?? {})['step'] = 4;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['doPornpos'] === 2  &&  ((s as any).Nestor ?? 0)?.['pornPos'] < 2) {
      scene.actions([
        { label: 'You told me that you want the Pile Driver position, do you?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 2);
    ((s as any).shared_apt ?? {})['step'] = 5;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['doVacuum'] === 1  &&  ((s as any).Nestor ?? 0)?.['vacuum'] < 1) {
      scene.actions([
        { label: 'You told me you want to test some kind dick enlarger device…', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A265', 2);
    ((s as any).shared_apt ?? {})['step'] = 6;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      ]);
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] >= 1) {
      // TODO-QSP: act 'Take me Full Nelson': shared_apt['step'] = 4
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
    }
    if (((s as any).Nestor ?? 0)?.['pornPos'] >= 2) {
      // TODO-QSP: act 'Take me Pile Driver': shared_apt['step'] = 5
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
    }
    if (((s as any).Nestor ?? 0)?.['vacuum'] >= 1) {
      // TODO-QSP: act 'Take me using the vacuum enlarger on your dick': shared_apt['step'] = 6
      scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
    }
    scene.actions([
      { label: 'Let him choose', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = shared_apt['hisPos']
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      { label: 'Take me like a missionary', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      { label: 'Take me from behind', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
      { label: 'Take me from side', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['step'] = 3
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
    ]);
  } else {
    if (((s as any).shared_apt ?? 0)?.['step'] === 1) {
      if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
        scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/analmissionary1.mp4');
        scene.text('You lie on the bed, spreading your legs for easy access.');
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels between those, roughly spreading them as wide as...
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels between those, roughly spreading them as wide as they go, making you scream a bit.`);
        scene.text('As he is content with the sight, he leans above you, moving his hips closer to your crotch.');
        // TODO-QSP: dynamic text: He points the tip of his <<npc_dick[$boy]>> to your anus and looks up to your fa...
        scene.text(`He points the tip of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} to your anus and looks up to your face: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Look at me while I penetrate your sphincter!"</font>`);
        if (((s as any).Nestor ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A265'] > 80) {
          scene.text('Before doing so, he takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
          scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
        } else {
          scene.text('Slightly shaking you do as he says…');
          scene.text('In that moment he pushes his dick inside your ass as far as he can!');
          // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
          scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
          // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>> and take it like a ...
          scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)} and take it like a good little girl!"</font>`);
          qspCall(s, 'pain', '', 1, 'asshole', 'tear');
        }
        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> bangs you wildly right from the start.
        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} bangs you wildly right from the start.`);
        qspCall(s, 'arousal', 'anal', 10, 'lube');
        qspCall(s, 'stat', '');
        (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
        scene.actions([
          { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
        ]);
      } else {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          scene.img('images/locations/shared/abduction/sex/slavewhorefuckanal5.mp4');
          scene.text('As he continuously and wildly rams your anus, you have no strength to do anything but endure it and moan like an injured pig.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep as he can, all his <<npc_dick[$boy...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep as he can, all his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} centimeters are inside you.`);
          qspCall(s, 'arousal', 'anal', 10);
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
          if (((s as any).orgB ?? 0) < 100) {
            // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
            scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
          }
          if (((s as any).orgB ?? 0) >= 100) {
            scene.actions([
              { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).shared_apt ?? 0)?.['step'] === 2) {
        if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
          scene.img('images/locations/city/residential/sauna/sex/fuckanal3.mp4');
          scene.text('You kneel on the bed, bending your back as much as you can, putting your nice round ass as high as possible.');
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> kneels behind you, poking your anus with several of his...
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} kneels behind you, poking your anus with several of his fingers.`);
          if (((s as any).Nestor ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A265'] > 80) {
            scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated.');
            scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
          } else {
            scene.text('In a few moments, he pushes his dick inside your ass as far as he can!');
            // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
            scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>> and take it like a ...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)} and take it like a good little girl!"</font>`);
            qspCall(s, 'pain', '', 1, 'asshole', 'tear');
          }
          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> bangs you wildly right from the start.
          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} bangs you wildly right from the start.`);
          qspCall(s, 'arousal', 'anal', 10, 'lube');
          qspCall(s, 'stat', '');
          (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
          scene.actions([
            { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
          ]);
        } else {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
            (s as any).minut = ((s as any).minut ?? 0) + 10;
            scene.img('images/locations/shared/abduction/sex/slavewhorefuckanal2.mp4');
            scene.text('As he continuously and wildly rams your anus, you have no strength to do anything but endure it and moan like an injured pig.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and as fast he can, pushing all of...
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and as fast he can, pushing all of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} centimeters inside you with every stroke.`);
            qspCall(s, 'arousal', 'anal', 10);
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
            if (((s as any).orgB ?? 0) < 100) {
              // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
              scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
            }
            if (((s as any).orgB ?? 0) >= 100) {
              scene.actions([
                { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
              ]);
            }
          }
        }
      } else {
        if (((s as any).shared_apt ?? 0)?.['step'] === 3) {
          if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
            scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analsidefuck1.jpg');
            scene.text('You lie on the bed, raising the upper leg in the air, exposing your lustful anus.');
            scene.text('He doesn\'t wait for anything and lies behind you, instantly preparing his large dick for the entry.');
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes his rod, pointing the tip right to your anus.
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes his rod, pointing the tip right to your anus.`);
            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"<<$pcs_firstname>>, prepare for the penetratio...
            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"${((s as any).pcs_firstname ?? 0)}, prepare for the penetration!"</font>`);
            if (((s as any).Nestor ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A265'] > 80) {
              scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated later.');
              scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
            } else {
              scene.text('In a few moments, he pushes his dick inside your ass as far as he can!');
              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>> and take it like a ...
              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)} and take it like a good little girl!"</font>`);
              qspCall(s, 'pain', '', 1, 'asshole', 'tear');
            }
            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> bangs you wildly right from the start.
            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} bangs you wildly right from the start.`);
            qspCall(s, 'arousal', 'anal', 10, 'lube');
            qspCall(s, 'stat', '');
            (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 16) + 5);
            scene.actions([
              { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
            ]);
          } else {
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
              scene.img('images/locations/shared/abduction/sex/slavewhorefuckanal1.mp4');
              scene.text('As he continuously and wildly rams your anus, you have no strength to do anything but endure it and moan like an injured pig.');
              // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now rams you as deep and he can and giving the position...
              scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now rams you as deep and he can and giving the position and the entire (${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm) size of his dick, the continuous banging hurts.`);
              qspCall(s, 'pain', '', 1, 'anal', 'stretch');
              qspCall(s, 'arousal', 'anal', 10);
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              if (((s as any).orgB ?? 0) < 100) {
                // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
              }
              if (((s as any).orgB ?? 0) >= 100) {
                scene.actions([
                  { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                ]);
              }
            }
          }
        } else {
          if (((s as any).shared_apt ?? 0)?.['step'] === 4) {
            if (((s as any).Nestor ?? 0)?.['pornPos'] < 1) {
              ((s as any).Nestor ?? {})['pornPos'] = 1;
            }
            if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
              scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analfullnelson1.jpg');
              scene.text('You let him sit on the edge of the bed, having his dick prepared for your anus.');
              // TODO-QSP: dynamic text: Facing him with your back, you climb on top of him and slowly bury his <<npc_dic...
              scene.text(`Facing him with your back, you climb on top of him and slowly bury his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick in your anus. You wanted to ride it a bit to make the fuck smoother, but he doesn't let you:<font color=#${((s as any).Nestor ?? 0)?.['font']}>"No time for that ${((s as any).pcs_firstname ?? 0)}, let's start already!"</font>`);
              scene.text('Not waiting for your answer he grabs your legs and reaches for your head, immobilizing you entirely. Then he starts fucking you like a wild animal.');
              // TODO-QSP: dynamic text: In this position, you literally see every stroke of his <<npc_dick[$boy]>> cm lo...
              scene.text(`In this position, you literally see every stroke of his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long penis into your anus, hidden bellow your empty pussy… But there is nothing else you can do.`);
              scene.text('You feel like being continuously impaled.');
              qspCall(s, 'arousal', 'anal', 10, 'lube');
              qspCall(s, 'stat', '');
              (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
              scene.actions([
                { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
              ]);
            } else {
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                scene.img('images/locations/shared/abduction/sex/slavewhorefuckanal3.mp4');
                scene.text('As he continuously and wildly rams your anus, you have no strength to do anything but endure it and moan like an injured pig.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                qspCall(s, 'arousal', 'anal', 10);
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                if (((s as any).orgB ?? 0) < 100) {
                  // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
                }
                if (((s as any).orgB ?? 0) >= 100) {
                  scene.actions([
                    { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).shared_apt ?? 0)?.['step'] === 5) {
              if (((s as any).Nestor ?? 0)?.['pornPos'] < 2) {
                ((s as any).Nestor ?? {})['pornPos'] = 2;
              }
              if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analpiledriver1.jpg');
                scene.text('You take a pillow from his bed, put it on the floor and lie on it with your back.');
                scene.text('As if you were doing yoga, you put your ass in the hands and lift it above your head, letting the feet fall down aside your head.');
                // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> now has the very best access to your anus: <font color=...
                scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} now has the very best access to your anus: <font color=#${((s as any).Nestor ?? 0)?.['font']}>"Now that's a sight! Every girl should be fucked like that!"</font>`);
                scene.text('He goes to you, probing your anus with several of his fingers.');
                if (((s as any).Nestor ?? 0)?.['mood'] <= 5  ||  ((s as any).npc_rel ?? 0)?.['A265'] > 80) {
                  scene.text('He takes some more lube on his fingers and one by one he stretches your anus with them. Making it easier for you to be penetrated later.');
                  scene.text('He starts pushing his dick inside, and as it is lubed, it goes in quite easily.');
                } else {
                  // TODO-QSP: dynamic text: Without much care about your feelings he rams his <<npc_dick[$boy]>> cm long thi...
                  scene.text(`Without much care about your feelings he rams his ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long thick dick into your anus.`);
                  // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"Ouuuch! <<$npc_firstname[$boy]>>, that hurt!"</font>
                  scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"Ouuuch! ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]}, that hurt!"</font>`);
                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>> and take it like a ...
                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)} and take it like a good anal slut!"</font>`);
                  qspCall(s, 'pain', '', 1, 'asshole', 'tear');
                }
                scene.text('You feel like being continuously impaled.');
                qspCall(s, 'arousal', 'anal', 10, 'lube');
                qspCall(s, 'stat', '');
                (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 20);
                scene.actions([
                  { label: 'Let him continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                ]);
              } else {
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/analpiledriver2.mp4');
                  scene.text('As he continuously and wildly rams your anus, you have no strength to do anything but endure it and moan like an injured pig.');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> rams you as deep as he can.
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} rams you as deep as he can.`);
                  qspCall(s, 'arousal', 'anal', 10);
                  qspCall(s, 'stat', '');
                  (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 30);
                  if (((s as any).orgB ?? 0) < 100) {
                    // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 1
                    scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
                  }
                  if (((s as any).orgB ?? 0) >= 100) {
                    scene.actions([
                      { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).shared_apt ?? 0)?.['step'] === 6) {
                if (((s as any).Nestor ?? 0)?.['vacuum'] < 1) {
                  ((s as any).Nestor ?? {})['vacuum'] = 1;
                }
                if (((s as any).shared_apt ?? 0)?.['subStep'] === 0) {
                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                  ((s as any).Nestor ?? {})['Dick_enlarged'] = ((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] + (((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)] * (Math.floor(Math.random() * 25) + 20) / 100);
                  scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/vacuumpumppenis.jpg');
                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> takes a vacuum dick enlarger device from his closet, pu...
                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} takes a vacuum dick enlarger device from his closet, putting it on his already ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm long dick.`);
                  scene.text('As he is pushing the pump, you can see the cock getting larger with each push.');
                  // TODO-QSP: dynamic text: After some time he stops, putting a ring on the root of his dick. Today the devi...
                  scene.text(`After some time he stops, putting a ring on the root of his dick. Today the device has enlarged it to ${((s as any).Nestor ?? 0)?.['Dick_enlarged']} cm!`);
                  scene.actions([
                    { label: 'Let him fuck you with that monster', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                  ]);
                } else {
                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                    scene.img('images/locations/pavlovsk/resident/sharedapt/sex/gp/analvacuumenlargerpen.mp4');
                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Now <<$pcs_firstname>> prepare your pussy for ...
                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Now ${((s as any).pcs_firstname ?? 0)} prepare your pussy for the famous Anus Destroyer!"</font>`);
                    scene.text('As he reaches for your ass you close your eyes and brace for the expected pain.');
                    scene.text('He starts pushing it into you, and even that it is quite lubed, it goes hard.');
                    // TODO-QSP: dynamic text: Finally, he slips through the sphincter and thrusts a big part of his <<$npc_thd...
                    scene.text(`Finally, he slips through the sphincter and thrusts a big part of his ${((s as any).npc_thdick ?? 0)?.[String((s as any).boy ?? 0)]} enlarged, ${((s as any).Nestor ?? 0)?.['Dick_enlarged']} cm long dick into your ass.`);
                    (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 11) + 20);
                    qspCall(s, 'pain', '', 1, 'asshole', 'tear');
                    scene.actions([
                      { label: 'Endure it', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 2
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 2) {
                      scene.img('images/locations/shared/abduction/sex/slavewhorefuckanaldeep1.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> uses his newly gained centimeters and fucks your ass ha...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} uses his newly gained centimeters and fucks your ass harder than usual, making you scream and moan and beg for relief… in vain.`);
                      scene.text('Today he obviously enjoys his dominance and fucks you relentlessly.');
                      scene.text('You have no strength to fight him and just try to endure it till the end.');
                      qspCall(s, 'pain', '', 1, 'asshole', 'stretch');
                      (s as any).orgB = ((s as any).orgB ?? 0) + (Math.floor(Math.random() * 21) + 40);
                      if (((s as any).orgB ?? 0) < 100) {
                        // TODO-QSP: act 'Let him continue': shared_apt['subStep'] = 2
                        scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
                      }
                      if (((s as any).orgB ?? 0) >= 100) {
                        scene.actions([
                          { label: 'He is about to cum', handler: (st: GameState) => {
    ((s as any).shared_apt ?? {})['step'] = 10;
    ((s as any).shared_apt ?? {})['subStep'] = 0;
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                        ]);
                      }
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
                    ((s as any).Nestor ?? {})['anal'] = (((s as any).Nestor ?? {})['anal'] ?? 0) + (1);
                    ((s as any).shared_apt ?? {})['cumOutL'] = Math.floor(Math.random() * 5) + 2;
                    scene.actions([
                      { label: 'Cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                      { label: 'Don\'t cum inside me', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL']
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                    ]);
                  } else {
                    if (((s as any).shared_apt ?? 0)?.['subStep'] === 1) {
                      scene.img('images/locations/city/residential/sauna/sex/cumanal4.mp4');
                      // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm, pumping his load <<...
                      scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm, pumping his load ${((s as any).npc_dick ?? 0)?.[String((s as any).boy ?? 0)]} cm deep inside your anus.`);
                      ((s as any).Nestor ?? {})['analCumInside'] = (((s as any).Nestor ?? {})['analCumInside'] ?? 0) + (1);
                      ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                      ((s as any).Nestor ?? {})['cumAnal'] = (((s as any).Nestor ?? {})['cumAnal'] ?? 0) + (1);
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
                        // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and at the moment he...
                        scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and at the moment he starts spouting his seed, he takes his dick out and points it on your stomach.`);
                        scene.text('A large pool of cum lands on your abdomen, feeling warm but sticky.');
                        (s as any).minut = ((s as any).minut ?? 0) + 2;
                        ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                          // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and starts spouting ...
                          scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and starts spouting his seed, he takes his dick out and points it on your ass.`);
                          scene.text('Both your asscheeks are covered in sticky, warm seed.');
                          (s as any).minut = ((s as any).minut ?? 0) + 2;
                          ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                            // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches his violent orgasm and in the moment he...
                            scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches his violent orgasm and in the moment he starts spouting his seed, he pushes you on your knees and points his tip in front of your face.`);
                            scene.text('The seed starts squirting, splashing your face with surprisingly strong force, leaking to your nose and eyes and hair…');
                            // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Oh yes, now that's the right makeup for an ana...
                            scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Oh yes, now that's the right makeup for an anal whore like you!"</font>`);
                            (s as any).minut = ((s as any).minut ?? 0) + 2;
                            ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
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
                              // TODO-QSP: dynamic text: You expect <<$npc_firstname[$boy]>> to take his cock out of your ass any moment,...
                              scene.text(`You expect ${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} to take his cock out of your ass any moment, but instead you hear his groans becoming louder.`);
                              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"What are you doing? You aren't coming inside me, are...
                              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"What are you doing? You aren't coming inside me, are you?"</font>`);
                              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Shut up <<$pcs_firstname>>, I cum where I want...
                              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Shut up ${((s as any).pcs_firstname ?? 0)}, I cum where I want to."</font>`);
                              // TODO-QSP: dynamic text: <font color=#<<$pcs_font>>>"I told you not to! -I hate it when it slowly leaks o...
                              scene.text(`<font color=#${((s as any).pcs_font ?? 0)}>"I told you not to! -I hate it when it slowly leaks out of my anus for hours!"</font>`);
                              // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Every girl deserves having her ass pumped with...
                              scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Every girl deserves having her ass pumped with cum, so piss off!"</font>`);
                              scene.text('He is obviously annoyed by your reaction.');
                              scene.text('You furiously get up from the bed, putting your clothes between your legs to catch the remainder of the cum, so it doesn\'t land on your legs and carpet.');
                              ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                              ((s as any).Nestor ?? {})['cumAnal'] = (((s as any).Nestor ?? {})['cumAnal'] ?? 0) + (1);
                              ((s as any).Nestor ?? {})['analCumInsideUnwanted'] = (((s as any).Nestor ?? {})['analCumInsideUnwanted'] ?? 0) + (1);
                              qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
                              qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
                              qspCall(s, 'arousal', 'anal', 5, 'sub');
                              qspCall(s, 'arousal', 'end');
                              scene.actions([
                                { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                              ]);
                            } else {
                              if (((s as any).shared_apt ?? 0)?.['subStep'] === 6) {
                                // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"I will cum in your ass or you will swallow it....
                                scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"I will cum in your ass or you will swallow it. Make your choice before it's too late, ${((s as any).pcs_firstname ?? 0)}!"</font>`);
                                if (((s as any).Nestor ?? 0)?.['mood'] <= 4) {
                                  // TODO-QSP: act 'Neither!': shared_apt['subStep'] = 30
                                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
                                }
                                if (((s as any).Nestor ?? 0)?.['mood'] > 4) {
                                  // TODO-QSP: act 'Neither!': shared_apt['subStep'] = 5
                                  scene.actions([{ label: 'Continue', goto: ['pav_shared_nestor', 'Nestor_SexAnal'] }]);
                                }
                                scene.actions([
                                  { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 20
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                                  { label: 'Ass', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = 1
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
                                ]);
                              } else {
                                if (((s as any).shared_apt ?? 0)?.['subStep'] === 20) {
                                  scene.img('images/locations/shared/abduction/sex/slavewhorecummouth3.mp4');
                                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> finally reaches the end and in the moment he is about t...
                                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} finally reaches the end and in the moment he is about the come, you get on your knees and open your mouth for his delivery.`);
                                  scene.text('The seed starts squirting, landing in your mouth and some even around it.');
                                  // TODO-QSP: dynamic text: <<$npc_firstname[$boy]>> spins the last of his cum dry from his cock, you close ...
                                  scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).boy ?? 0)]} spins the last of his cum dry from his cock, you close your mouth, swallowing the mouthful in one gulp.`);
                                  scene.text('Afterwards, you show him your tongue as proof that not a drop was left unconsumed…');
                                  // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Good girl, better than any food, is it?"</font...
                                  scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Good girl, better than any food, is it?"</font>`);
                                  ((s as any).Nestor ?? {})['swall'] = (((s as any).Nestor ?? {})['swall'] ?? 0) + (1);
                                  qspCall(s, 'npc_relationship', 'modify', 'A265', 1);
                                  (s as any).minut = ((s as any).minut ?? 0) + 5;
                                  ((s as any).Nestor ?? {})['lastCum'] = ((s as any).daystart ?? 0);
                                  qspCall(s, 'cum_call', 'mouth', ((s as any).boy ?? 0), 1);
                                  qspCall(s, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'payService');
  } },
                                  ]);
                                } else {
                                  if (((s as any).shared_apt ?? 0)?.['subStep'] === 30) {
                                    // TODO-QSP: dynamic text: <font color=#<<$Nestor['font']>>>"Alright I'll cum elsewhere, but only because I...
                                    scene.text(`<font color=#${((s as any).Nestor ?? 0)?.['font']}>"Alright I'll cum elsewhere, but only because I have a ${((s as any).Nestor ?? 0)?.['mood_txt']} mood today!"</font>`);
                                    qspCall(s, 'npc_relationship', 'modify', 'A265', (-3));
                                    ((s as any).shared_apt ?? {})['cumOutL2'] = Math.floor(Math.random() * 3) + 2;
                                    scene.actions([
                                      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: shared_apt['subStep'] = shared_apt['cumOutL2']
  }, goto: ['pav_shared_nestor', 'Nestor_SexAnal'] },
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
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Nestor':
      enterNestor(s, scene);
      break;
    case 'nestor_dick':
      enterNestorDick(s, scene);
      break;
    case 'Nestor_Chat':
      enterNestor_Chat(s, scene);
      break;
    case 'Nestor_Serve':
      enterNestor_Serve(s, scene);
      break;
    case 'Nestor_handjob_start':
      enterNestorHandjobStart(s, scene);
      break;
    case 'Nestor_handjob_header':
      enterNestorHandjobHeader(s, scene);
      break;
    case 'Nestor_handjob_slow':
      enterNestorHandjobSlow(s, scene);
      break;
    case 'Nestor_handjob_fast':
      enterNestorHandjobFast(s, scene);
      break;
    case 'Nestor_handjob_lube':
      enterNestorHandjobLube(s, scene);
      break;
    case 'Nestor_handjob_lube_tip':
      enterNestorHandjobLubeTip(s, scene);
      break;
    case 'Nestor_handjob_cum_attempt':
      enterNestorHandjobCumAttempt(s, scene);
      break;
    case 'Nestor_handjob_cum_fail':
      enterNestorHandjobCumFail(s, scene);
      break;
    case 'Nestor_handjob_cum_success':
      enterNestorHandjobCumSuccess(s, scene);
      break;
    case 'Nestor_Suck':
      enterNestor_Suck(s, scene);
      break;
    case 'Nestor_SexVaginal':
      enterNestor_SexVaginal(s, scene);
      break;
    case 'Nestor_SexAnal':
      enterNestor_SexAnal(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_shared_nestor: LocationDef = {
  name: 'pav_shared_nestor',
  title: '-you have jerked him off',
  region: 'pavlovsk',
  enter: enter,
};
