import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterNudeModelConvo(s: GameState, scene: SceneBuilder): void {
  (s as any).hunterVars['knowfoto'] = 1;
  (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (5);
  (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (3);
  scene.text('"I\'m telling you, I\'ve seen her pictures in a men\'s magazine." you overhear Igor.');
  scene.text('As soon as they notice you, the men stop talking and change the subject to another topic.');
  scene.build();
}

function enterStripperConvo(s: GameState, scene: SceneBuilder): void {
  (s as any).hunterVars['knowstrip'] = 1;
  (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (5);
  (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
  scene.text('"I promise you, it was her, I swear!" you overhear Sergei. "She was on the stage, stripping and dancing."');
  scene.text('As soon as they notice you, the men stop talking and change the subject to another topic.');
  scene.build();
}

function enterPornstarConvo(s: GameState, scene: SceneBuilder): void {
  (s as any).hunterVars['knowfilm'] = 1;
  (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (7);
  (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (5);
  // TODO-QSP: dynamic text: "I recently downloaded some porn, and guess who was getting fucked in the video....
  scene.text(`"I recently downloaded some porn, and guess who was getting fucked in the video. Trust me, it was ${((s as any).pcs_firstname ?? 0)}." you overhear Andrei.`);
  scene.text('As soon as they notice you, the men stop talking and change the subject to another topic.');
  scene.build();
}

function enterRiverRapeConvo(s: GameState, scene: SceneBuilder): void {
  (s as any).hunterVars['Rape'] = 1;
  (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (7);
  (s as any).hunterVars['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (10);
  scene.text('"I\'m telling you, everyone in Gadukino has had the pleasure to "test out" the goods." you overhear Andrei.');
  scene.build();
}

function enterGenericConvo(s: GameState, scene: SceneBuilder): void {
  (s as any).convo_rng_roll = Math.floor(Math.random() * 28) + 1;
  if (((s as any).convo_rng_roll ?? 0) === 1) {
    scene.text('"What\'s the difference between a dog and a fox?"');
    scene.text('"Two shots of vodka!"');
  } else {
    if (((s as any).convo_rng_roll ?? 0) === 2) {
      scene.text('"I swear, it was something like a large orangutan standing by the trees watching us! I also saw those massive prints the other day!"');
      scene.text('"Sure, it had nothing to with that vodka bottle you were chugging," says Igor');
      scene.text('"Nah, I totally believe him. It was just his mom making sure his baby boy was fine," says Sergei before starting to laugh loudly');
    } else {
      if (((s as any).convo_rng_roll ?? 0) === 3) {
        scene.text('We once found a perfect spot while hunting. So we unpacked and checked what we had brought with us. There was ammo, water and snacks.');
        scene.text('But we forgot the vodka. So we had to pack up and go back.');
      } else {
        if (((s as any).convo_rng_roll ?? 0) === 4) {
          scene.text('The men had gathered for a hunt. All but one were joyful. Unfortunately, he had gotten in trouble with his wife. She said: "I know what you do when you hunt. You only get drunk as pigs and then crawl home." In the middle of the argument, the man had enough and told his wife that she could join them. When the rest of the men noticed that a woman was supposed to join them, they got pretty irritated.');
          scene.text('They walked into the forest, found a suitable clearing and the man gave his wife a rifle and said:');
          scene.text('"You can sit here hidden in the bushes, and I will drive the moose towards you. I will drive it straight at you, and you better not miss, or else all the hard work will go to waste…"');
          scene.text('The man leaves and joins the other men near a hut, and they start to drink. Time passed by, and all of a sudden, the man woke up after sundown… The man grabbed his head, thinking that he would get a scolding from his wife.');
          scene.text('He arrives near the clearing and sees an odd picture: in the middle of the clearing lies a carcass, and the wife jumps with joy around it. Standing next to her is an upset man rubbing his bald head.');
          scene.text('"Yes, dear, look at the elk you killed. We just need to remove the saddle…"');
        } else {
          if (((s as any).convo_rng_roll ?? 0) === 5) {
            scene.text('Two hunters are hunting in the woods. They notice a woman in the distance lying down on her stomach, sunbathing. One of the hunters looks at her legs and says:');
            scene.text('"Now, that\'s a hunt I could chase forever!"');
            scene.text('Then he looks at the woman\'s ass and says:');
            scene.text('"Well, maybe not."');
          } else {
            if (((s as any).convo_rng_roll ?? 0) === 6) {
              scene.text('There once was a politician that was going hunting. He drove out in his fancy jeep, dressed in camouflage and had a super fancy rifle with optical sight night vision… He walked into the forest and met a man in sandals, a simple hat and a torn jacket. He looked like a typical village guy.');
              scene.text('The man asked: "Where are you heading?"');
              scene.text('The politician told him: "I\'m gonna shoot a bear!"');
              scene.text('The man replies: "Yes, you seem well prepared…"');
              scene.text('The politician says: "Yes, you see! This rifle can shoot down an elephant…"');
              scene.text('He continues walking into the woods.');
              scene.text('Smiling, the man thinks, "Too bad there haven\'t been any bears here for quite a while now."');
            } else {
              if (((s as any).convo_rng_roll ?? 0) === 7) {
                scene.text('After a shot, a hunter asks his partner:');
                scene.text('"Can you look at what beast I\'ve put down?"');
                scene.text('He comes back after a while:');
                scene.text('"Judging by the beast\'s passport, his last name was Ivanov."');
              } else {
                if (((s as any).convo_rng_roll ?? 0) === 8) {
                  scene.text('There are two types of shroom trips you can have.');
                  scene.text('The first can lead you to an extremely thoughtful introspection, letting you know way more about yourself than before you ate the shrooms.');
                  scene.text('While the second can make you feel paranoid, as if you were being chased by a guy with a chainsaw in a maze.');
                } else {
                  if (((s as any).convo_rng_roll ?? 0) === 9) {
                    scene.text('"I once killed a whale with one shot."');
                    scene.text('"Oh yeah? Well, I strangled a bear with my bare hands."');
                    scene.text('"What about this: Have you two ever heard of the Dead Sea?"');
                    scene.text('"Yeah, what about it?"');
                    scene.text('"So I was walking on the beach this one time…"');
                  } else {
                    if (((s as any).convo_rng_roll ?? 0) === 10) {
                      (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
                      scene.text('"I heard you beat down a snake with your bare hands once?"');
                      scene.text('"The rumors are true, my friend."');
                      scene.text('"So tell me, how did you manage that?"');
                      scene.text('"As usual, with wine, soft music and porn."');
                    } else {
                      if (((s as any).convo_rng_roll ?? 0) === 11) {
                        scene.text('If nothing comes by while you\'re hunting, you\'ve become one with the forest.');
                      } else {
                        if (((s as any).convo_rng_roll ?? 0) === 12) {
                          (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
                          scene.text('I once went hunting. I brought my rifle but forgot the cartridges. So I let the dog sniff the gun, and she retrieved the ammo!');
                          scene.text('Something similar happened to me. I brought the bullets with me but forgot the rifle. So I let the dog sniff the ammo, and she retrieved the gun!');
                          scene.text('I went swimming with my wife, but she forgot the swimsuit. I let the dog sniff my wife between her legs, and she retrieved the neighbor by his balls!!!"');
                        } else {
                          if (((s as any).convo_rng_roll ?? 0) === 13) {
                            scene.text('"I once went on a hunt with only the bullet in the barrel, no spares. I ended up meeting a pack of wolves. They didn\'t even flinch when I shot at them and kept running towards me, so I climbed up a tree.');
                            scene.text('"Oh wow… How did you survive?"');
                            scene.text('"I just hung up in that tree for hours until the wolves decided they had better things to do. Needed a new pair of pants after that."');
                          } else {
                            if (((s as any).convo_rng_roll ?? 0) === 14) {
                              scene.text('"Guys, do you all ever look into the sky and think whether we are all alone in the universe?"');
                              scene.text('"Not really. The universe is massive. There is no way no other life exists out there," says Igor');
                              scene.text('"Then how do we not see any signs of other life out there? We should have been seeing something, anything, by now," says Sergei');
                            } else {
                              if (((s as any).convo_rng_roll ?? 0) === 15) {
                                scene.text('The man returns home after being out hunting for a month. A friend asks him:');
                                scene.text('"Well, I guess you\'ve made quite a fortune. You\'ve been away for a month. You will be able to buy your wife lots of things!"');
                                scene.text('"Not really. I drank it all up."');
                              } else {
                                if (((s as any).convo_rng_roll ?? 0) === 16) {
                                  (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
                                  scene.text('A hunter was chasing a bear. The bear was tough and healthy and sprinted, leaving the hunter behind. While looking backward, the bear got stuck between two trees. A rabbit runs by and asks the bear:');
                                  scene.text('"How did you get stuck there?"');
                                  scene.text('"Well…" the bear began its story, but the rabbit jumped on the bear and started fucking it in the ass. The bear got upset but could not get out.');
                                  scene.text('Then he saw a fox running by and called it over:');
                                  scene.text('"Hey, fox, come over here and help me out!"');
                                  scene.text('The fox thought about it, and like the rabbit, it started fucking the bear. The bear was now getting desperate when he saw the wolf. The wolf comes over and asks:');
                                  scene.text('"What happened to you?"');
                                  scene.text('The bear answers: "Well, wolf, you might as well fuck me over first, then I\'ll tell you!!"');
                                } else {
                                  if (((s as any).convo_rng_roll ?? 0) === 17) {
                                    scene.text('I went out with some men hunting, and as usual, we got drunk. One of the men grabs his rifle and goes hunting. Suddenly a bear appears, and he starts climbing a tree. He shouts:');
                                    scene.text('"Guys, save me! Kill the bear."');
                                    scene.text('Since we\'re all drunk, we take aim, shoot, and the shots fly by the bear. The bear continues on, not caring about the shots. the guy yells again:');
                                    scene.text('"Come on, guys! Kill this fucking bear."');
                                    scene.text('We retake, aim, shoot and miss. The man, now desperate, shouts:');
                                    scene.text('"What are you bastards doing!? Are you trying to kill the bear or me!"');
                                  } else {
                                    if (((s as any).convo_rng_roll ?? 0) === 18) {
                                      scene.text('"Every year, we clean the hut, throwing away old canned food and stuff. Well, one guy threw a family-size can of baked beans in the burn barrel instead of in the trash can.');
                                      scene.text('"That night, as we were all telling stories and drinking around the burn barrel, the can explode! Hot baked beans covered everything within a 10-meter radius, including us.');
                                    } else {
                                      if (((s as any).convo_rng_roll ?? 0) === 19) {
                                        scene.text('One of the hunters tells the other: "I once had a sparrow try to fly over my head, so I whacked it with my shotgun barrel, killing it."');
                                      } else {
                                        if (((s as any).convo_rng_roll ?? 0) === 20) {
                                          scene.text('The hunters are all huddled up, and one of them puts their rifle on his knees, pointing it at his neighbor.');
                                          scene.text('"Sorry, I\'ll be more careful next time, so I don\'t accidentally gun you down!"');
                                          scene.text('"Just finish me off already…" the other hunter replies.');
                                        } else {
                                          if (((s as any).convo_rng_roll ?? 0) === 21) {
                                            scene.text('"So I got lost in the forest one night and was trying to return to the hut. I stumbled around in the darkness for hours until I heard someone yelling, "MARK! MARK! MARK!" So I say to myself, "This guy knows where he is, so go find him."');
                                            scene.text('"I walked all the way there in the dark, and when I got there, all I found was an old hair-lipped dog…"');
                                          } else {
                                            if (((s as any).convo_rng_roll ?? 0) === 22) {
                                              scene.text('So the local government was looking for investors in the area, and a particular Minister was invited to a rabbit hunt.');
                                              scene.text('Ultimately, he was unanimously proclaimed one of the most excellent hunters to pass the village, managing to hunt 30 rabbits in a day.');
                                              scene.text('"Yes indeed", the Minister then commented jokingly, "Especially considering that I only took ten shots."');
                                            } else {
                                              if (((s as any).convo_rng_roll ?? 0) === 23) {
                                                scene.text('"I have a dog that can locate a wounded duck and bring it to me."');
                                                scene.text('"My dog is way cooler. If I see a flying flock of ducks, I put the dog in my man-made catapult. Aim it in the direction of the pack, fire off, and the dog flies towards them and brings me some ducks back…"');
                                                scene.text('Meanwhile, a calf grazing nearby raises its head and sees the dog flying.');
                                                scene.text('"Mom, look! That dog is flying after those ducks!"');
                                                scene.text('The cow responds: "I told you we should not have eaten those mushrooms and stuck to the grass."');
                                              } else {
                                                if (((s as any).convo_rng_roll ?? 0) === 24) {
                                                  scene.text('Remember, it is best to hunt with dogs for extra help. They will always find the way back if you get lost and want to return home. But keep them on a short leash and don\'t let go of them when they try running at something they smell.');
                                                } else {
                                                  if (((s as any).convo_rng_roll ?? 0) === 25) {
                                                    scene.text('"Yesterday I shot two geese…"');
                                                    scene.text('"Were they wild?"');
                                                    scene.text('"They were not, but their owner got pretty wild!"');
                                                  } else {
                                                    if (((s as any).convo_rng_roll ?? 0) === 26) {
                                                      (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
                                                      scene.text('A depressed man goes hunting. He finds a bear den, starts firing his rifle, shoots toward the bear and says:');
                                                      scene.text('"Listen here, either I kill you, or we fuck. Your choice! If you wanna survive, I suggest you pick the second option… Not satisfied, the hunter goes home, picks up more ammunition, returns to the den, and empties his clip. He forces the bear out, saying:');
                                                      scene.text('"Listen, either we fuck again, or I\'ll kill you, take your pick! The man survives even this time, wondering how he can still be alive. He goes home and returns with dynamite wanting to blow up the den. He sets up the dynamite, hides behind a rock and blows up the entrance to the den.');
                                                      scene.text('Behind him, he hears the voice of the bear: "Man, I do not understand. Are you this terrible a hunter or just like getting fucked in the ass?"');
                                                    } else {
                                                      if (((s as any).convo_rng_roll ?? 0) === 27) {
                                                        scene.text('"I went hunting once and saw this huge wild boar killing one deer."');
                                                        scene.text('"Yeah, they do that, nasty bastards."');
                                                      } else {
                                                        if (((s as any).convo_rng_roll ?? 0) === 28) {
                                                          (s as any).hunterVars['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
                                                          scene.text('So it was goose hunting season. A hunter, tired of staying hidden, finally saw a lone goose. He sneaks on it and gets as close as possible to take a shot.');
                                                          scene.text('He lets off a shot when he\'s finally close enough but misses the goose. It turns around and hisses towards the hunter.');
                                                          scene.text('"Shit! Do they bite?" asked the hunter. "What did you expect? That they suck?" answered his friend.');
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

function enterYardConvo(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/hanterstalk.jpg');
  scene.text('While walking around the yard, you overhear the hunters\' conversation.');
  (s as any).convo_rng_roll = Math.floor(Math.random() * 20) + 1;
  if (((s as any).convo_rng_roll ?? 0) === 1) {
    if (((s as any).fame_sexind ?? 0) > 10  &&  ((s as any).fame ?? 0)?.['city_modelling'] > 30  &&  ((s as any).hunterVars ?? 0)?.['knowfoto'] === 0) {
      qspCall(s, 'hunter_ambient', 'nude_model_convo');
    }
  } else {
    if (((s as any).convo_rng_roll ?? 0) === 2) {
      if (((s as any).strip_club ?? 0)?.['total_stripshows'] > 0  &&  ((s as any).hunterVars ?? 0)?.['knowstrip'] === 0) {
        qspCall(s, 'hunter_ambient', 'stripper_convo');
      }
    } else {
      if (((s as any).convo_rng_roll ?? 0) === 3) {
        if (((s as any).film ?? 0) > 0  &&  ((s as any).hunterVars ?? 0)?.['knowfilm'] === 0) {
          qspCall(s, 'hunter_ambient', 'pornstar_convo');
        }
      } else {
        if (((s as any).convo_rng_roll ?? 0) === 4) {
          if (((s as any).GadBoy ?? 0)?.['river_gang'] > 0  &&  ((s as any).hunterVars ?? 0)?.['Rape'] === 0) {
            qspCall(s, 'hunter_ambient', 'river_rape_convo');
          }
        } else {
          qspCall(s, 'hunter_ambient', 'generic_convo');
        }
      }
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

function enterSchedule(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'breakfast');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'lunch');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'dinner');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'evening');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'drink');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'inside');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'outside');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'sleep');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'available');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'hunting');
  qspCall(s, 'array', 'remove_element', 'hunterVars', 'chattime');
  if (((s as any).hunterVars ?? 0)?.['were_met'] > 0) {
    if (((s as any).hour ?? 0) === 7) {
      (s as any).hunterVars['breakfast'] = 1;
      (s as any).hunterVars['available'] = 1;
      (s as any).hunterVars['inside'] = 1;
    } else {
      if (((s as any).hour ?? 0) === 8) {
        (s as any).hunterVars['available'] = 1;
        (s as any).hunterVars['chattime'] = 1;
        if ((((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 15)) {
          (s as any).hunterVars['inside'] = 1;
        }
      } else {
        if (((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 12) {
          (s as any).hunterVars['hunting'] = 1;
        } else {
          if (((s as any).hour ?? 0) === 12  ||  ((s as any).hour ?? 0) === 13) {
            (s as any).hunterVars['lunch'] = 1;
            (s as any).hunterVars['available'] = 1;
            if (((s as any).hour ?? 0) === 13) {
              (s as any).hunterVars['chattime'] = 1;
            }
            (s as any).hunterVars['inside'] = 1;
          } else {
            if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 17) {
              (s as any).hunterVars['hunting'] = 1;
            } else {
              if (((s as any).hour ?? 0) === 18  ||  ((s as any).hour ?? 0) === 19) {
                (s as any).hunterVars['evening'] = 1;
                (s as any).hunterVars['available'] = 1;
                if (((s as any).hour ?? 0) === 19) {
                  (s as any).hunterVars['chattime'] = 1;
                }
                if ((((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 15)  ||  (((s as any).campfire ?? 0) === 0)) {
                  (s as any).hunterVars['inside'] = 1;
                }
              } else {
                if (((s as any).hour ?? 0) === 20) {
                  (s as any).hunterVars['dinner'] = 1;
                  (s as any).hunterVars['available'] = 1;
                  (s as any).hunterVars['inside'] = 1;
                } else {
                  if (((s as any).hour ?? 0) > 20  &&  ((s as any).hour ?? 0) < 23) {
                    (s as any).hunterVars['drink'] = 1;
                    (s as any).hunterVars['available'] = 1;
                    if ((((s as any).sunWeather ?? 0) === 0  ||  ((s as any).temper ?? 0) < 15)  ||  (((s as any).campfire ?? 0) === 0)) {
                      (s as any).hunterVars['inside'] = 1;
                    }
                  } else {
                    if (((s as any).hour ?? 0) >= 23  ||  ((s as any).hour ?? 0) < 7) {
                      (s as any).hunterVars['sleep'] = 1;
                      (s as any).hunterVars['inside'] = 1;
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
  (s as any).hunterVars['outside'] = ((((s as any).hunterVars ?? 0)?.['inside'] === 1) ? (0) : (1));
  scene.build();
}

function enterBringFood(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).hunterVars ?? 0)?.['hunting'] === 1)  &&  (Math.floor(Math.random() * 20) + 1) === 1) {
    scene.img('images/locations/gadukino/hunters/bunny_butcher.jpg');
    scene.text('You see one of the hunters returning with a rabbit he shot. He proceeds to skin and butcher the animal.');
    (s as any).raw_meat = ((s as any).raw_meat ?? 0) + (1);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['gad_swamp_yard', 'start'] }]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'nude_model_convo':
      enterNudeModelConvo(s, scene);
      break;
    case 'stripper_convo':
      enterStripperConvo(s, scene);
      break;
    case 'pornstar_convo':
      enterPornstarConvo(s, scene);
      break;
    case 'river_rape_convo':
      enterRiverRapeConvo(s, scene);
      break;
    case 'generic_convo':
      enterGenericConvo(s, scene);
      break;
    case 'yard_convo':
      enterYardConvo(s, scene);
      break;
    case 'schedule':
      enterSchedule(s, scene);
      break;
    case 'bring_food':
      enterBringFood(s, scene);
      break;
    default:
      enterNudeModelConvo(s, scene);
      break;
  }
}

export const hunter_ambient: LocationDef = {
  name: 'hunter_ambient',
  title: '"I\'m telling you, I\'ve seen her pictures in a men\'s magazine',
  region: 'other',
  description: ['"I\'m telling you, I\'ve seen her pictures in a men\'s magazine." you overhear Igor.'],
  enter: enter,
};
