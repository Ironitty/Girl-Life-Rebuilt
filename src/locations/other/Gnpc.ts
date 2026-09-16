import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).GvstreBoyAfter = (s as any).GvstreBoyAfter ?? {})[String((s as any).numnpc ?? 0)] = 0;
  (s as any).GvstreBoy = 0;
  ((s as any).boyvstre = (s as any).boyvstre ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).boyvstre[String((s as any).numnpc ?? 0)] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}</b></center>`);
  scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc || '')}.jpg`);
  // TODO-QSP: $bfTitle[numnpc] = 'date'
  if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
    // TODO-QSP: $bfRelationship[numnpc] = 'He made a pretty good impression the first time you met so you gave him y...
    // TODO-QSP: dynamic text: You spot a guy in the park. He looks like he's waiting for someone. "Ah, yes, th...
    scene.text(`You spot a guy in the park. He looks like he's waiting for someone. "Ah, yes, this must be ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}!", you think. ${((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}`);
  } else {
    if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 4) {
      // TODO-QSP: $bfRelationship[numnpc] = 'You recently started dating him'
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
        // TODO-QSP: $bfRelationship[numnpc] += ', but you are already off to a bad start. You don''t get along at all.'
      } else {
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
          // TODO-QSP: $bfRelationship[numnpc] += ', but there are already some tensions between you.'
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
            // TODO-QSP: $bfRelationship[numnpc] += ', but you don''t know him that well yet.'
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
              // TODO-QSP: $bfRelationship[numnpc] += ' and you don''t know him that well yet. But you like to occasionally blo...
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                // TODO-QSP: $bfRelationship[numnpc] += ' and you don''t know him that well yet, but you think you''re off to a g...
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                  // TODO-QSP: $bfRelationship[numnpc] += '. You don''t know him that well yet, but you enjoy each other''s company...
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                    // TODO-QSP: $bfRelationship[numnpc] += ' and even though you don''t know him that long you think you found a won...
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                      // TODO-QSP: $bfRelationship[numnpc] += ' and even though you don''t know him that long you have already strong f...
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                        // TODO-QSP: $bfRelationship[numnpc] += ' and even though you don''t know him that long it feels like he''s alrea...
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                          // TODO-QSP: $bfRelationship[numnpc] += ' and even though you don''t know him that long it feels like you found y...
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
      // TODO-QSP: dynamic text: You see <<$nameBoyfrend[numnpc]>> in the park, apparently waiting for you. <<$bf...
      scene.text(`You see ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} in the park, apparently waiting for you. ${((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}`);
    } else {
      if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 16) {
        // TODO-QSP: $bfRelationship[numnpc] = 'You''ve been dating him for a while now'
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
          // TODO-QSP: $bfRelationship[numnpc] += ' and you don''t know why you''re still wasting your time with him. You d...
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
            // TODO-QSP: $bfRelationship[numnpc] += ', but there are some tensions in your relationship.'
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
              // TODO-QSP: $bfRelationship[numnpc] += ' and you get along pretty well.'
              // TODO-QSP: $bfTitle[numnpc] = 'friend'
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                // TODO-QSP: $bfRelationship[numnpc] += 'and you like to occasionally blow off a little steam with him, no string...
                // TODO-QSP: $bfTitle[numnpc] = 'lover'
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                  // TODO-QSP: $bfRelationship[numnpc] += '. He''s a fun guy to hang around with.'
                  // TODO-QSP: $bfTitle[numnpc] = 'friend'
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                    // TODO-QSP: $bfRelationship[numnpc] += '. You are friends with benefits.'
                    // TODO-QSP: $bfTitle[numnpc] = 'lover'
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                      // TODO-QSP: $bfRelationship[numnpc] += '. He''s a good friend and you feel very comfortable around him.'
                      // TODO-QSP: $bfTitle[numnpc] = 'friend'
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                        // TODO-QSP: $bfRelationship[numnpc] += ' and you consider him your boyfriend. You really like him a lot.'
                        // TODO-QSP: $bfTitle[numnpc] = 'boyfriend'
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                          // TODO-QSP: $bfRelationship[numnpc] += ' and he''s become one of your best friends by now.'
                          // TODO-QSP: $bfTitle[numnpc] = 'best friend'
                        } else {
                          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                            // TODO-QSP: $bfRelationship[numnpc] += ' and you enjoy every minute with your lovely boyfriend. You love him dee...
                            // TODO-QSP: $bfTitle[numnpc] = 'boyfriend'
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
        // TODO-QSP: dynamic text: You see <<$nameBoyfrend[numnpc]>> in the park, apparently waiting for you. <<$bf...
        scene.text(`You see ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} in the park, apparently waiting for you. ${((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}`);
      } else {
        // TODO-QSP: $bfRelationship[numnpc] = ''
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
          // TODO-QSP: $bfRelationship[numnpc] = 'For as long as it lasted, your relationship is now ruined. You can''t sta...
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
            // TODO-QSP: $bfRelationship[numnpc] = 'You''ve been dating him pretty long, but there are tensions in your relat...
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
              // TODO-QSP: $bfRelationship[numnpc] = 'You like to occasionally hang out with him.'
              // TODO-QSP: $bfTitle[numnpc] = 'friend'
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                // TODO-QSP: $bfRelationship[numnpc] = 'You like to occasionally blow off some steam with him, no strings attache...
                // TODO-QSP: $bfTitle[numnpc] = 'lover'
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                  // TODO-QSP: $bfRelationship[numnpc] = 'He''s been a good friend to you and you have fun hanging out with him.'
                  // TODO-QSP: $bfTitle[numnpc] = 'friend'
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                    // TODO-QSP: $bfRelationship[numnpc] = 'One could consider you a couple for as long as you''ve been together now,...
                    // TODO-QSP: $bfTitle[numnpc] = 'lover'
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                      // TODO-QSP: $bfRelationship[numnpc] = 'He''s always been a very good friend and you love spending your time with...
                      // TODO-QSP: $bfTitle[numnpc] = 'friend'
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                        // TODO-QSP: $bfRelationship[numnpc] = 'He''s your lovely boyfriend.'
                        // TODO-QSP: $bfTitle[numnpc] = 'boyfriend'
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                          // TODO-QSP: $bfRelationship[numnpc] = 'He''s one of your best friends, you could talk with him about anything.'
                          // TODO-QSP: $bfTitle[numnpc] = 'best friend'
                        } else {
                          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                            // TODO-QSP: $bfRelationship[numnpc] = 'You still feel lucky that you can call him your boyfriend. You love him d...
                            // TODO-QSP: $bfTitle[numnpc] = 'boyfriend'
                          } else {
                            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                              // TODO-QSP: $bfRelationship[numnpc] = 'He''s your best friend, you would trust him with your life.'
                              // TODO-QSP: $bfTitle[numnpc] = 'best friend'
                            } else {
                              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                                // TODO-QSP: $bfRelationship[numnpc] = 'He''s your lovely boyfriend and the guy you want to marry someday. You ab...
                                // TODO-QSP: $bfTitle[numnpc] = 'boyfriend'
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
        // TODO-QSP: dynamic text: You see the familiar face of <<$nameBoyfrend[numnpc]>> in the park, obviously wa...
        scene.text(`You see the familiar face of ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} in the park, obviously waiting for you. ${((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}`);
      }
    }
  }
  (s as any).bfGreeting = '';
  if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 40) {
    if ((((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 80)  ||  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      // TODO-QSP: $bfGreeting += ' with a hug'
    }
    if ((((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 120)  ||  (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80)) {
      // TODO-QSP: $bfGreeting += ' and a kiss on the cheek'
    } else {
      if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 80) {
        // TODO-QSP: $bfGreeting += ' and a kiss on the lips'
        (s as any).orgasm_or = 'no';
        qspCall(s, 'arousal', 'kiss', 1);
        qspCall(s, 'arousal', 'end');
      }
    }
  }
  // TODO-QSP: dynamic text: You approach <<$nameBoyfrend[numnpc]>> and greet him<<$bfGreeting>>.
  scene.text(`You approach ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} and greet him${((s as any).bfGreeting || '')}.`);
  if (((s as any).preg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) <= 1920  &&  ((s as any).npc_pregtalk ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
    if (((s as any).npc_usedname ?? 0)[((s as any).ChildFath ?? 0)[Object.keys((s as any).ChildFath ?? {}).length - 1]] !== ((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]) {
      (s as any).pregLie = '(Lie) ';
    } else {
      (s as any).pregLie = '';
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).pregLie || '') ?? '') + 'Tell him that he knocked you up', handler: (st: GameState) => {
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell <<$nameBoyfrend[numnpc]>> that he got you pregnant. His eyes nearly pop...
    scene.text(`You tell ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} that he got you pregnant. His eyes nearly pop out of their sockets.`);
    if (((s as any).npc_usedname ?? 0)[((s as any).ChildFath ?? 0)[Object.keys((s as any).ChildFath ?? {}).length - 1]] !== ((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]) {
      (s as any).pregLieRand = Math.floor(Math.random() * 5) + 1;
    }
    if (((s as any).npc_usedname ?? 0)[((s as any).ChildFath ?? 0)[Object.keys((s as any).ChildFath ?? {}).length - 1]] === ((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]  ||  (((s as any).npc_usedname ?? 0)[((s as any).ChildFath ?? 0)[Object.keys((s as any).ChildFath ?? {}).length - 1]] !== ((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]  &&  ((s as any).pregLieRand ?? 0) >= 4)) {
      // TODO-QSP: dynamic text: He looks at his feet, unable to look you in the eyes. "Listen, I'm not ready to ...
      scene.text(`He looks at his feet, unable to look you in the eyes. "Listen, I'm not ready to be a father or even to marry you." He hands you ${qspFunc(s, 'money', 'string_profit', 5000)}. "Here, take this money and let us part."`);
      scene.actions([
        { label: 'Dump him and take the money', handler: (st: GameState) => {
    ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})[String((s as any).numnpc ?? 0)] = 1;
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'money', 'earn', 5000, 'cash');
    qspCall(s, 'stat', '');
    scene.text('You furiously scream at him that you never want to see him again. Then you snatch the bills from his hand and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Dump him and throw the money in his face', handler: (st: GameState) => {
    ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})[String((s as any).numnpc ?? 0)] = 1;
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    scene.text('You furiously scream at him that you never want to see him again and throw the money in his face before storming off.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('He snaps at you, "Yeah sure, you slut! Do you think I\'m that stupid? You fuck around behind my back and now you want to pin the consequences on me? Go and find some other sorry ass who you can exploit!"');
      scene.actions([
        { label: 'Dump him', handler: (st: GameState) => {
    ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})[String((s as any).numnpc ?? 0)] = 1;
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    scene.text('You furiously scream at him that you never want to see him again and storm off.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).GboyBalabol ?? 0)?.[String((s as any).numnpc ?? 0)] === 1) {
    scene.actions([
      { label: 'Blame him for your bad reputation', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You accuse <<$nameBoyfrend[numnpc]>> that he blabbed about your sexual relations...
    scene.text(`You accuse ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} that he blabbed about your sexual relationship and now and everyone thinks that you're a ${((s as any).gnikname || '')}.`);
    (s as any).reaktrand = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).reaktrand ?? 0))) {
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> begins to apologize, he's been drinking with a friend ...
      scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} begins to apologize, he's been drinking with a friend and accidentally told him about your sexual exploits together. He vows that this will never happen again.`);
    } else {
      if (((s as any).reaktrand ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> tries to comfort you, "<<$pcs_nickname>>, I would neve...
        scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} tries to comfort you, "${((s as any).pcs_nickname || '')}, I would never do such a thing. Just ignore what those idiots say. They will soon find someone else to gossip about."`);
      } else {
        if (((s as any).reaktrand ?? 0) === 2) {
          // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> grins, "Relax, <<$pcs_nickname>>. It's a fact that you...
          scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} grins, "Relax, ${((s as any).pcs_nickname || '')}. It's a fact that you're a ${((s as any).gnikname || '')}. So what?"`);
        }
      }
    }
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).GboyBalabol = (s as any).GboyBalabol ?? {})[String((s as any).numnpc ?? 0)] = 2;
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    scene.text('You furiously scream at him that you never want to see him again and storm off.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Forgive him', handler: (st: GameState) => {
    ((s as any).GboyBalabol = (s as any).GboyBalabol ?? {})[String((s as any).numnpc ?? 0)] = 2;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You think about what he said. Because of the rumors, a lot of people have alread...
    scene.text(`You think about what he said. Because of the rumors, a lot of people have already a bad opinion about you and you don't want to lose your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}, too. So you reluctantly decide to forgive him.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if ((((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 4  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 100)  ||  (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] > 4  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120)) {
    scene.actions([
      { label: 'End the relationship', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You think about how you could approach your <<$bfTitle[numnpc]>> with this delic...
    scene.text(`You think about how you could approach your ${((s as any).bfTitle ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} with this delicate matter…`);
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
    } else {
      qspCall(s, 'willpower', 'misc', 'self');
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
    } else {
      qspCall(s, 'willpower', 'misc', 'self');
    }
    qspCall(s, 'willpower', 'pay', 'self');
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell <<$nameBoyfrend[numnpc]>> that it would be better if you don't see each...
    scene.text(`You tell ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} that it would be better if you don't see each other again and that he should't call you anymore. He just stares at you, so you decide to quickly leave before he overcomes his state of shock.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 40  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Just be friends', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Just be friends', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).temprand = Math.floor(Math.random() * 5) + 0;
    // TODO-QSP: dynamic text: You nervously approach <<$nameBoyfrend[numnpc]>>, "Listen, <<$nameBoyfrend[numnp...
    scene.text(`You nervously approach ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}, "Listen, ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}, I really like you, but I'm not ready for an intimate relationship right now. I think we should forget what happened between us and just be friends, okay?"`);
    if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] > 4  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 80  &&  (!((s as any).temprand ?? 0))) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (40);
      ((s as any).gnpcSex = (s as any).gnpcSex ?? {})[String((s as any).numnpc ?? 0)] = 0;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> looks totally dejected as you tell him the bad news. Y...
      scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} looks totally dejected as you tell him the bad news. You really feel pity for him. When you finish your speech there's a moment of painful silence.`);
      // TODO-QSP: dynamic text: Then <<$nameBoyfrend[numnpc]>> takes a deep breath, looks you in the eyes and sa...
      scene.text(`Then ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} takes a deep breath, looks you in the eyes and says, "That's really hard on me, ${((s as any).pcs_firstname || '')}. But I respect your feelings. I like you, too… very much in fact! That's why I'm willing to be your friend, even if it means that we can't be a couple."`);
      // TODO-QSP: dynamic text: Wow, you didn't expect that! Still, you feel touched by his devotion and give hi...
      scene.text(`Wow, you didn't expect that! Still, you feel touched by his devotion and give him a bear hug, smiling from ear to ear. "Thank you, ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}! I'm so glad that you can understand me. I think we both need some time now to digest all that. Call me when you're feeling better."`);
    } else {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
      qspCall(s, 'mood', 'lower', 'small');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> narrows his eyes, "Just friends, huh? That's a pretty ...
      scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} narrows his eyes, "Just friends, huh? That's a pretty lame excuse, ${((s as any).pcs_firstname || '')}, you know that? If you want to break up with me then why don't you say so!"`);
      // TODO-QSP: dynamic text: You try to explain to him, "No, that's not what I mean, <<$nameBoyfrend[numnpc]>...
      scene.text(`You try to explain to him, "No, that's not what I mean, ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''}! I really like you…"`);
      scene.text('"You know what? You can stuff your friendship! I\'m outta here!", with these words he storms off.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Back down', goto: ['Gnpc', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Apologize and leave', handler: (st: GameState) => {
    // TODO-QSP: otnBoyFrend[numnpc] -= 5
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Take a walk through the park', handler: (st: GameState) => {
    if (((s as any).pcs_hairbsh ?? 0) < 1) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (5);
    }
    if (((s as any).pcs_hairbsh ?? 0) === 1) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    }
    if (((s as any).pcs_makeup ?? 0) === 2) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    }
    if (((s as any).pcs_makeup ?? 0) === 3) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (2);
    }
    if (((s as any).pcs_makeup ?? 0) === 4) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (5);
    }
    if (((s as any).pcs_sweat ?? 0) > 19) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) - (5);
    } else {
      if (((s as any).pcs_sweat ?? 0) < 10) {
        ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (1);
      }
    }
    if (((s as any).PCloSkirt ?? 0) > 2) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (3);
    }
    if (((s as any).PCloPants ?? 0) > 3) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (2);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).boytimes = (s as any).boytimes ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).boytimes[String((s as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    (s as any).bfWalk = '';
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      (s as any).bfWalk = ' hand in hand';
    }
    // TODO-QSP: dynamic text: You walk<<$bfWalk>> through the park while talking and having fun being together...
    scene.text(`You walk${((s as any).bfWalk || '')} through the park while talking and having fun being together.`);
    if (((s as any).kotovLoveQW ?? 0) > 0) {
      ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = 0;
      qspCall(s, 'mood', 'lower', 'small');
      scene.text('You hear footsteps behind you and when you turn to look you see Vitek Kotov heading straight your way. <i>"Oh boy, he looks pissed!"</i>, you think to yourself just as he shouts, "Hey, dipshit!"');
      // TODO-QSP: dynamic text: When <<$nameBoyfrend[numnpc]>> turns around to look who's shouting Vitek slaps h...
      scene.text(`When ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} turns around to look who's shouting Vitek slaps him so hard across the face that ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} immediately falls to the ground.`);
      scene.text('Vitek towers over him, his eyes glaring with rage, "Listen, you little fucker, this is MY girl! If I ever see you near her again I will bury you in the woods alive, do you understand?!"');
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> stammers something and nods his head fearfully while c...
      scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} stammers something and nods his head fearfully while crawling backwards. Then he jumps back on his feet und runs as fast as he can.`);
      scene.text('You doubt that you will ever see him again…');
      return;
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
    (s as any).gboyrand = Math.floor(Math.random() * 2) + 0;
    if ((!((s as any).gboyrand ?? 0))) {
      // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> offers to go to the movies.
      scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} offers to go to the movies.`);
      scene.actions([
        { label: 'Apologize and leave', handler: (st: GameState) => {
    // TODO-QSP: otnBoyFrend[numnpc] -= 5
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        { label: 'Go to the cinema', goto: ['Gnpc_cinema', ''] },
      ]);
    } else {
      if (((s as any).gboyrand ?? 0) === 1) {
        // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> suggests to drink some beers in the park.
        scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} suggests to drink some beers in the park.`);
        scene.actions([
          { label: 'Apologize and leave', handler: (st: GameState) => {
    // TODO-QSP: otnBoyFrend[numnpc] -= 5
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          { label: 'Go for a beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You head with <<$nameBoyfrend[numnpc]>> to the nearest kiosk. He buys a few a be...
    scene.text(`You head with ${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} to the nearest kiosk. He buys a few a beers and some snacks and then you settle down on a secluded bench in the far corner of the park.`);
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    ((s as any).otnBoyFrend = (s as any).otnBoyFrend ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).otnBoyFrend[String((s as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(s, 'stat', '');
    (s as any).bfDrinkSuffix = '.';
    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
      (s as any).bfDrinkSuffix = ', briefly forgetting the tensions in your relationship for the moment.';
    }
    // TODO-QSP: dynamic text: <<$nameBoyfrend[numnpc]>> pours some beer into glasses and you both start drinki...
    scene.text(`${((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? ''} pours some beer into glasses and you both start drinking. He tells you many funny stories and you both laugh a lot while enjoying your drinks${((s as any).bfDrinkSuffix || '')}`);
    if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 4) {
      scene.text('You think you\'ve got to know him a lot better now especially in a loose atmosphere like this.');
    }
    scene.actions([
      { label: 'Continue', goto: ['Gnpc2', ''] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

export const Gnpc: LocationDef = {
  name: 'Gnpc',
  region: 'other',
  enter: enter,
};
