import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).GvstreBoyAfter = (s as any).GvstreBoyAfter ?? {})[String((s as any).numnpc ?? 0)] = 0;
  (s as any).GvstreBoy = 0;
  ((s as any).boyvstre = (s as any).boyvstre ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).boyvstre[String((s as any).numnpc ?? 0)] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}</b></center>`);
  scene.img(`images/characters/shared/headshots_main/big${((s as any).numnpc ?? '')}.jpg`);
  ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'date';
  if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
    ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He made a pretty good impression the first time you met so you gave him your phone number. This is your first date with him, you wonder how you\'ll get along.';
    scene.text(`You spot a guy in the park. He looks like he's waiting for someone. "Ah, yes, this must be ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}!", you think. ${(((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}`);
  } else {
    if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 4) {
      ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You recently started dating him';
      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (', but you are already off to a bad start. You don\'t get along at all.');
      } else {
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (', but there are already some tensions between you.');
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
            ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (', but you don\'t know him that well yet.');
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
              ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you don\'t know him that well yet. But you like to occasionally blow off a little steam with him, no strings attached.');
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you don\'t know him that well yet, but you think you\'re off to a good start.');
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                  ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + ('. You don\'t know him that well yet, but you enjoy each other\'s company and your sexual adventures.');
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                    ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and even though you don\'t know him that long you think you found a wonderful friend in him.');
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                      ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and even though you don\'t know him that long you have already strong feelings for him.');
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and even though you don\'t know him that long it feels like he\'s already one of your best friends.');
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 100  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and even though you don\'t know him that long it feels like you found your soulmate. You are totally in love with him!');
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
      scene.text(`You see ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')} in the park, apparently waiting for you. ${(((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}`);
    } else {
      if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] <= 16) {
        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You\'ve been dating him for a while now';
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you don\'t know why you\'re still wasting your time with him. You don\'t get along at all.');
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
            ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (', but there are some tensions in your relationship.');
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
              ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you get along pretty well.');
              ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + ('and you like to occasionally blow off a little steam with him, no strings attached.');
                ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'lover';
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                  ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + ('. He\'s a fun guy to hang around with.');
                  ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                    ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + ('. You are friends with benefits.');
                    ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'lover';
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                      ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + ('. He\'s a good friend and you feel very comfortable around him.');
                      ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you consider him your boyfriend. You really like him a lot.');
                        ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'boyfriend';
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and he\'s become one of your best friends by now.');
                          ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'best friend';
                        } else {
                          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                            ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = ((s as any).bfRelationship[String((s as any).numnpc ?? 0)] ?? 0) + (' and you enjoy every minute with your lovely boyfriend. You love him deeply.');
                            ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'boyfriend';
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
        scene.text(`You see ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')} in the park, apparently waiting for you. ${(((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}`);
      } else {
        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = '';
        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 20) {
          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'For as long as it lasted, your relationship is now ruined. You can\'t stand each other.';
        } else {
          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 40) {
            ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You\'ve been dating him pretty long, but there are tensions in your relationship.';
          } else {
            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
              ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You like to occasionally hang out with him.';
              ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
            } else {
              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 60  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You like to occasionally blow off some steam with him, no strings attached.';
                ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'lover';
              } else {
                if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                  ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s been a good friend to you and you have fun hanging out with him.';
                  ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
                } else {
                  if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                    ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'One could consider you a couple for as long as you\'ve been together now, but you both see yourselves more as friends with benefits.';
                    ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'lover';
                  } else {
                    if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                      ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s always been a very good friend and you love spending your time with him.';
                      ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'friend';
                    } else {
                      if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 120  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                        ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s your lovely boyfriend.';
                        ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'boyfriend';
                      } else {
                        if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                          ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s one of your best friends, you could talk with him about anything.';
                          ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'best friend';
                        } else {
                          if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                            ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'You still feel lucky that you can call him your boyfriend. You love him deeply.';
                            ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'boyfriend';
                          } else {
                            if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0) {
                              ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s your best friend, you would trust him with your life.';
                              ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'best friend';
                            } else {
                              if (((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] >= 160  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
                                ((s as any).bfRelationship = (s as any).bfRelationship ?? {})[String((s as any).numnpc ?? 0)] = 'He\'s your lovely boyfriend and the guy you want to marry someday. You absolutely adore him.';
                                ((s as any).bfTitle = (s as any).bfTitle ?? {})[String((s as any).numnpc ?? 0)] = 'boyfriend';
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
        scene.text(`You see the familiar face of ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')} in the park, obviously waiting for you. ${(((s as any).bfRelationship ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')}`);
      }
    }
  }
  (s as any).bfGreeting = '';
  if (((s as any).boytimes ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 40) {
    if ((((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 80)  ||  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0) {
      (s as any).bfGreeting = ((s as any).bfGreeting ?? '') + ' with a hug';
    }
    if ((((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 120)  ||  (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] < 80)) {
      (s as any).bfGreeting = ((s as any).bfGreeting ?? 0) + (' and a kiss on the cheek');
    } else {
      if (((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).otnBoyFrend ?? 0)?.[String((s as any).numnpc ?? 0)] > 80) {
        (s as any).bfGreeting = ((s as any).bfGreeting ?? 0) + (' and a kiss on the lips');
        (s as any).orgasm_or = 'no';
        qspCall(s, 'arousal', 'kiss', 1);
        qspCall(s, 'arousal', 'end');
      }
    }
  }
  scene.text(`You approach ${(((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)] ?? '')} and greet him${((s as any).bfGreeting ?? '')}.`);
  if (((s as any).preg ?? 0) === 1  &&  ((s as any).pregChem ?? 0) <= 1920  &&  ((s as any).npc_pregtalk ?? 0)?.[String((s as any).numnpc ?? 0)] === 0  &&  ((s as any).gnpcSex ?? 0)?.[String((s as any).numnpc ?? 0)] > 0  &&  ((s as any).knowpreg ?? 0) === 1) {
    if (((s as any).npc_usedname ?? 0)[((s as any).ChildFath ?? 0)[Object.keys((s as any).ChildFath ?? {}).length - 1]] !== ((s as any).nameBoyfrend ?? 0)?.[String((s as any).numnpc ?? 0)]) {
      (s as any).pregLie = '(Lie) ';
    } else {
      (s as any).pregLie = '';
    }
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).pregLie ?? '') ?? '') + 'Tell him that he knocked you up', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'huge');
    qspCall(st, 'stat', '');
    scene.text(`You tell ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} that he got you pregnant. His eyes nearly pop out of their sockets.`);
    if (((st as any).npc_usedname ?? 0)[((st as any).ChildFath ?? 0)[Object.keys((st as any).ChildFath ?? {}).length - 1]] !== ((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)]) {
      (st as any).pregLieRand = (Math.floor(Math.random() * 5) + 1);
    }
    if (((st as any).npc_usedname ?? 0)[((st as any).ChildFath ?? 0)[Object.keys((st as any).ChildFath ?? {}).length - 1]] === ((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)]  ||  (((st as any).npc_usedname ?? 0)[((st as any).ChildFath ?? 0)[Object.keys((st as any).ChildFath ?? {}).length - 1]] !== ((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)]  &&  ((st as any).pregLieRand ?? 0) >= 4)) {
      scene.text(`He looks at his feet, unable to look you in the eyes. "Listen, I'm not ready to be a father or even to marry you." He hands you ${qspFunc(s, 'money', 'string_profit', 5000)}. "Here, take this money and let us part."`);
      scene.actions([
        { label: 'Dump him and take the money', handler: (st: GameState) => {
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})[String((st as any).numnpc ?? 0)] = 1;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'money', 'earn', 5000, 'cash');
    qspCall(st, 'stat', '');
    scene.text('You furiously scream at him that you never want to see him again. Then you snatch the bills from his hand and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Dump him and throw the money in his face', handler: (st: GameState) => {
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})[String((st as any).numnpc ?? 0)] = 1;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
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
    ((st as any).npc_pregtalk = (st as any).npc_pregtalk ?? {})[String((st as any).numnpc ?? 0)] = 1;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
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
    qspCall(st, 'stat', '');
    scene.text(`You accuse ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} that he blabbed about your sexual relationship and now and everyone thinks that you're a ${((st as any).gnikname ?? '')}.`);
    (st as any).reaktrand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).reaktrand ?? 0))) {
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} begins to apologize, he's been drinking with a friend and accidentally told him about your sexual exploits together. He vows that this will never happen again.`);
    } else {
      if (((st as any).reaktrand ?? 0) === 1) {
        scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} tries to comfort you, "${((st as any).pcs_nickname ?? '')}, I would never do such a thing. Just ignore what those idiots say. They will soon find someone else to gossip about."`);
      } else {
        if (((st as any).reaktrand ?? 0) === 2) {
          scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} grins, "Relax, ${((st as any).pcs_nickname ?? '')}. It's a fact that you're a ${((st as any).gnikname ?? '')}. So what?"`);
        }
      }
    }
    qspCall(st, 'willpower', 'misc', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 2;
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
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
    ((st as any).GboyBalabol = (st as any).GboyBalabol ?? {})[String((st as any).numnpc ?? 0)] = 2;
    qspCall(st, 'stat', '');
    scene.text(`You think about what he said. Because of the rumors, a lot of people have already a bad opinion about you and you don't want to lose your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}, too. So you reluctantly decide to forgive him.`);
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
    scene.text(`You think about how you could approach your ${(((st as any).bfTitle ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} with this delicate matter…`);
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] < 40) {
      qspCall(st, 'willpower', 'misc', 'self', 'easy');
    } else {
      qspCall(st, 'willpower', 'misc', 'self');
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Break up with him', handler: (st: GameState) => {
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] < 40) {
      qspCall(st, 'willpower', 'misc', 'self', 'easy');
    } else {
      qspCall(st, 'willpower', 'misc', 'self');
    }
    qspCall(st, 'willpower', 'pay', 'self');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
    qspCall(st, 'stat', '');
    scene.text(`You tell ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} that it would be better if you don't see each other again and that he should't call you anymore. He just stares at you, so you decide to quickly leave before he overcomes his state of shock.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] >= 40  &&  ((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] > 0) {
      qspCall(st, 'willpower', 'misc', 'self', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Just be friends', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Just be friends', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).temprand = (Math.floor(Math.random() * 5) + 0);
    scene.text(`You nervously approach ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}, "Listen, ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}, I really like you, but I'm not ready for an intimate relationship right now. I think we should forget what happened between us and just be friends, okay?"`);
    if (((st as any).boytimes ?? 0)?.[String((st as any).numnpc ?? 0)] > 4  &&  ((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] >= 80  &&  (!((st as any).temprand ?? 0))) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (40);
      ((st as any).gnpcSex = (st as any).gnpcSex ?? {})[String((st as any).numnpc ?? 0)] = 0;
      qspCall(st, 'stat', '');
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} looks totally dejected as you tell him the bad news. You really feel pity for him. When you finish your speech there's a moment of painful silence.`);
      scene.text(`Then ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} takes a deep breath, looks you in the eyes and says, "That's really hard on me, ${((st as any).pcs_firstname ?? '')}. But I respect your feelings. I like you, too… very much in fact! That's why I'm willing to be your friend, even if it means that we can't be a couple."`);
      scene.text(`Wow, you didn't expect that! Still, you feel touched by his devotion and give him a bear hug, smiling from ear to ear. "Thank you, ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}! I'm so glad that you can understand me. I think we both need some time now to digest all that. Call me when you're feeling better."`);
    } else {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
      qspCall(st, 'mood', 'lower', 'small');
      qspCall(st, 'stat', '');
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} narrows his eyes, "Just friends, huh? That's a pretty lame excuse, ${((st as any).pcs_firstname ?? '')}, you know that? If you want to break up with me then why don't you say so!"`);
      scene.text(`You try to explain to him, "No, that's not what I mean, ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')}! I really like you…"`);
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
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (5);
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    { label: 'Take a walk through the park', handler: (st: GameState) => {
    if (((st as any).pcs_hairbsh ?? 0) < 1) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (5);
    }
    if (((st as any).pcs_hairbsh ?? 0) === 1) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    }
    if (((st as any).pcs_makeup ?? 0) === 2) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    }
    if (((st as any).pcs_makeup ?? 0) === 3) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (2);
    }
    if (((st as any).pcs_makeup ?? 0) === 4) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (5);
    }
    if (((st as any).pcs_sweat ?? 0) > 19) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) - (5);
    } else {
      if (((st as any).pcs_sweat ?? 0) < 10) {
        ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (1);
      }
    }
    if (((st as any).PCloSkirt ?? 0) > 2) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (3);
    }
    if (((st as any).PCloPants ?? 0) > 3) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (2);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).boytimes = (st as any).boytimes ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).boytimes[String((st as any).numnpc ?? 0)] ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'stat', '');
    (st as any).bfWalk = '';
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] > 80  &&  ((st as any).gnpcSex ?? 0)?.[String((st as any).numnpc ?? 0)] > 0) {
      (st as any).bfWalk = ' hand in hand';
    }
    scene.text(`You walk${((st as any).bfWalk ?? '')} through the park while talking and having fun being together.`);
    if (((st as any).kotovLoveQW ?? 0) > 0) {
      ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = 0;
      qspCall(st, 'mood', 'lower', 'small');
      scene.text('You hear footsteps behind you and when you turn to look you see Vitek Kotov heading straight your way. <i>"Oh boy, he looks pissed!"</i>, you think to yourself just as he shouts, "Hey, dipshit!"');
      scene.text(`When ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} turns around to look who's shouting Vitek slaps him so hard across the face that ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} immediately falls to the ground.`);
      scene.text('Vitek towers over him, his eyes glaring with rage, "Listen, you little fucker, this is MY girl! If I ever see you near her again I will bury you in the woods alive, do you understand?!"');
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} stammers something and nods his head fearfully while crawling backwards. Then he jumps back on his feet und runs as fast as he can.`);
      scene.text('You doubt that you will ever see him again…');
      scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
      return;
    }
    (st as any).gboyrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((st as any).gboyrand ?? 0))) {
      scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} offers to go to the movies.`);
      scene.actions([
        { label: 'Apologize and leave', handler: (st: GameState) => {
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (5);
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        { label: 'Go to the cinema', goto: ['Gnpc_cinema', ''] },
      ]);
    } else {
      if (((st as any).gboyrand ?? 0) === 1) {
        scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} suggests to drink some beers in the park.`);
        scene.actions([
          { label: 'Apologize and leave', handler: (st: GameState) => {
    (st as any).otnBoyFrend[String((st as any).numnpc ?? '')] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? '')] ?? 0) - (5);
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
          { label: 'Go for a beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text(`You head with ${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} to the nearest kiosk. He buys a few a beers and some snacks and then you settle down on a secluded bench in the far corner of the park.`);
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    ((st as any).otnBoyFrend = (st as any).otnBoyFrend ?? {})[String((st as any).numnpc ?? 0)] = ((st as any).otnBoyFrend[String((st as any).numnpc ?? 0)] ?? 0) + (5);
    qspCall(st, 'stat', '');
    (st as any).bfDrinkSuffix = '.';
    if (((st as any).otnBoyFrend ?? 0)?.[String((st as any).numnpc ?? 0)] < 40) {
      (st as any).bfDrinkSuffix = ', briefly forgetting the tensions in your relationship for the moment.';
    }
    scene.text(`${(((st as any).nameBoyfrend ?? 0)?.[String((st as any).numnpc ?? 0)] ?? '')} pours some beer into glasses and you both start drinking. He tells you many funny stories and you both laugh a lot while enjoying your drinks${((st as any).bfDrinkSuffix ?? '')}`);
    if (((st as any).boytimes ?? 0)?.[String((st as any).numnpc ?? 0)] <= 4) {
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
