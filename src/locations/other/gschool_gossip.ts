import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMorning(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniafall ?? 0)?.['gossip'] !== ((s as any).soniaQW ?? 0)?.['soniafall']  &&  ((s as any).soniaQW ?? 0)?.['soniafall'] > 0  &&  ((s as any).soniaQW ?? 0)?.['soniafall'] < 8) {
    qspCall(s, 'gschool_gossip', 'sonia_disco_gossip');
  }
  if (((s as any).sveta_dyke_rumor ?? 0) === 30  ||  ((s as any).sveta_dyke_rumor ?? 0) === 24  ||  ((s as any).sveta_dyke_rumor ?? 0) === 18  ||  ((s as any).sveta_dyke_rumor ?? 0) === 12  ||  ((s as any).sveta_dyke_rumor ?? 0) === 6  ||  ((s as any).sveta_dyke_rumor ?? 0) === 1) {
    qspCall(s, 'gschool_gossip', 'sveta_dyke_rumors', 'picture');
  } else {
    qspCall(s, 'gschool_gossip', 'gossip', 'picture');
  }
  scene.build();
}

function enterSkipping(s: GameState, scene: SceneBuilder): void {
  scene.text('On your way to hang out with your friends during lunch, you pass by small groups of your fellow students engaged in their own conversations. As you do, you overhear them talking about a variety of things, including some juicy gossip.');
  qspCall(s, 'gschool_gossip', 'gossip');
  scene.build();
}

function enterBagged(s: GameState, scene: SceneBuilder): void {
  scene.text('You take your bagged lunch to one of the empty tables and take a seat. As you\'re eating your lunch, you overhear some of the conversations going on around you. Your fellow students are talking about a variety of things, including some juicy gossip.');
  qspCall(s, 'gschool_gossip', 'gossip');
  scene.build();
}

function enterBuying(s: GameState, scene: SceneBuilder): void {
  scene.text('You stand in line to buy your lunch. While waiting in line, you chat to a few of your fellow students until you make your purchase. You then take your lunch tray and sit at one of the empty tables.');
  scene.text('As you\'re eating your lunch, you overhear some of the conversations going on around you. Your fellow students are talking about a variety of things, including some juicy gossip.');
  qspCall(s, 'gschool_gossip', 'gossip');
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  scene.text('Exiting the girls locker room, you pass by some of your fellow students as they leave the gym as well. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  qspCall(s, 'gschool_gossip', 'girls');
  scene.build();
}

function enterLesson(s: GameState, scene: SceneBuilder): void {
  scene.text('You\'re curious about what your classmates behind you are talking about. You shift back in your seat a little, take a quick peek and listen in.');
  qspCall(s, 'gschool_gossip', 'gossip');
  scene.build();
}

function enterGossip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/boys_gossip.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).soniaQW ?? 0)?.['slut'] < 4  &&  (Math.floor(Math.random() * (1+((s as any).soniaQW ?? 0)?.['slut'] - 0 + 1)) + (0))=== 0) {
    if (((s as any).soniaQW ?? 0)?.['slut'] === 1) {
      if ((((s as any).soniaQW ?? 0)?.['slutdays']+7) < ((s as any).daystart ?? 0)) {
        ((s as any).soniaQW ?? {})['slut'] = 2;
        qspCall(s, 'array', 'remove_element', 'soniaQW', 'slutdays');
      }
      scene.text('"Did you hear what happened at the disco the other night? Sonia gave like five guys a blowjob, all at once!"');
      scene.text('"Yeah, I heard. I don\'t think anyone will want to go out with her now, not after Kotov and his cronies had their way with her."');
      scene.text('"What do you mean?"');
      scene.text('"They all came right on her face and made her walk out like that. I bet half the town has seen pictures of her face covered in cum. It\'s disgusting!"');
    } else {
      if (((s as any).soniaQW ?? 0)?.['slut'] === 2) {
        scene.text('"Have you heard what Sonia is up to nowadays? Apparently, she\'s in the bathroom during break giving out blowjobs to literally anyone!"');
        scene.text('"That\'s nasty! Think we should go have a look?"');
      } else {
        if (((s as any).soniaQW ?? 0)?.['slut'] === 3) {
          scene.text('"Sonia turned into a huge whore all of a sudden. She has all sorts of sex now, no matter how nasty! Such a shame."');
          scene.text('"What do you mean, such a shame? Why do you even care?"');
          scene.text('"Oh it\'s nothing. I just used to like her a lot, but she was such a prude back then that she wouldn\'t even go on a date with me!"');
        }
      }
    }
  } else {
    if ((!((s as any).fuckornot ?? 0))) {
      (s as any).fuckornot = 1;
      (s as any).fuckornot_day = ((s as any).daystart ?? 0);
      scene.text('Several boys are snickering and looking at something on a tablet computer. "Have you guys checked out this site?"');
      scene.text('"Which site?" one of the boys asks.');
      scene.text('"Fuckable or Not. Some nerds made a website listing all the girls where you can rate them on how fuckable they are!" he says with a laugh.');
      scene.text('A third boys almost grabs the tablet. "What!? Let me see that!" They start talking about which girls they think should be rated higher or lower.');
    } else {
      if (((s as any).fuckornot ?? 0) === 1  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 2) {
        (s as any).fuckornot = 2;
        (s as any).fuckornot_day = ((s as any).daystart ?? 0);
        scene.img('images/locations/pavlovsk/school/events/girls_gossip2.jpg');
        scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
        scene.text('A group of girls are clustered around a laptop. "Oh my god, that\'s disgusting! Boys are such pigs!" the first one says.');
        scene.text('The second girl nods. "I know right? And the name, so disgusting! They could have at least called it Hot or Not."');
        scene.text('"I heard some of the nerds made it and it was called Hot or Not, but then some of the other guys found out about it and made them rename it," a third girl adds in disgust.');
        scene.text('They are silent for a few seconds before the second one asks where she\'s rated. They all start talking about where they\'re rated and where they think they should have been rated, and of course about how disgusting boys are.');
      } else {
        if (((s as any).hotornot ?? 0) === 0  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 9) {
          (s as any).hotornot = 1;
          (s as any).fuckornot_day = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/girls_gossip2.jpg');
          scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
          scene.text('A group of girls are looking at their phones. "Can you believe these ratings?" one of them asks.');
          scene.text('"Boys are such pigs!" another responds.');
          scene.text('"We should return the favor and rate <i>them</i>," a third one says. The rest all stop and look at her, then at each other, and smile.');
        } else {
          if (((s as any).hotornot ?? 0) === 1  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 11) {
            (s as any).hotornot = 2;
            (s as any).fuckornot_day = ((s as any).daystart ?? 0);
            scene.img('images/locations/pavlovsk/school/events/girls_gossip1.jpg');
            scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
            scene.text('Several of the cool girls are talking to Zinaida. At first you think they might be bullying her, but it instead sounds like they\'re asking her a bunch of questions. Whatever they\'re talking about, they seem to come to an agreement.');
          } else {
            if (((s as any).cheerleadingQW ?? 0)?.['gossip'] === 0  &&  ((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) >= 19)  ||  ((s as any).month ?? 0) !== 9)) {
              ((s as any).cheerleadingQW ?? {})['gossip'] = 1;
              ((s as any).cheerleadingQW ?? {})['gossip_day'] = ((s as any).daystart ?? 0);
              scene.text('"Albina said that she knows Karine is skipping out on the squad to spend time with that dick she calls her boyfriend."');
              scene.text('"Karine, the youngest one who wears purple all the time? Never understood why Albina even considered someone from a junior class."');
              scene.text('"Yeah, her. Ever since she started dating that asshole, she\'s been skipping out on cheerleading practice and not caring about her grades. I don\'t know how Albina found out, but she\'s seriously pissed and threatening to kick her off the squad!"');
              scene.text('"I bet Lizaveta told her. Knowing Albina, I\'d give Karine a month before her ass is given the boot."');
              scene.text('"Girl, Albina will scratch her eyes out by the end of the week!"');
            } else {
              if (((s as any).cheerleadingQW ?? 0)?.['gossip_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] === 1) {
                ((s as any).cheerleadingQW ?? {})['gossip'] = 2;
                ((s as any).cheerleadingQW ?? {})['gossip_day'] = ((s as any).daystart ?? 0) + (7-((s as any).week ?? 0));
                scene.text('"I heard from Lizaveta that Albina and Karine were fighting at the game last Friday!"');
                scene.text('"Albina and who?"');
                scene.text('"Karine, the youngest one who\'s… well endowed shall we say?"');
                scene.text('"Oh her, yeah. This happened at the game?"');
                scene.text('"Yeah, apparently they were shouting so loud that you could hear them over the referee\'s whistle."');
                scene.text('"Damn dude. We should go to the next game. Maybe we can see a catfight and put some bets on?"');
                scene.text('"You read my mind, man!"');
                scene.text('The two boys fistbump each other and change the subject.');
              } else {
                if (((s as any).cheerleadingQW ?? 0)?.['gossip_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] === 2) {
                  ((s as any).cheerleadingQW ?? {})['gossip'] = 3;
                  ((s as any).cheerleadingQW ?? {})['gossip_day'] = ((s as any).daystart ?? 0);
                  scene.text('"So is it true? Did Albina actually start throwing punches at Karine?"');
                  scene.text('"Damn straight. She just flew at her as soon as she saw her. Girl wouldn\'t be walking if Vicky didn\'t stop her."');
                  scene.text('"So she\'s off the squad then? I know I won\'t be signing up to replace her. Albina scares me."');
                  scene.text('"Apparently, she terrified Karine so much that she went to live with her aunt in Moscow."');
                  scene.text('"Damn. I wonder how a younger girl made the squad in the first place?"');
                  scene.text('"Albina said it was because she had talent nobody in our year had, but I think it was the…" The girl cups her breasts in her hands and bounces them slightly as the other girl nods in agreement.');
                } else {
                  if (((s as any).cheerleadingQW ?? 0)?.['gossip_day'] <= ((s as any).daystart ?? 0)  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] === 3) {
                    ((s as any).cheerleadingQW ?? {})['gossip'] = 4;
                    ((s as any).cheerleadingQW ?? {})['gossip_day'] = ((s as any).daystart ?? 0);
                    scene.text('Two boys are watching a video on a phone. You hear Albina\'s loud screaming echoing from the screen.');
                    scene.text('"Just look at Albina going all out on Karine at the last game. Vicky had to stop her from punching the girl\'s lights out!"');
                    scene.text('"I\'m guessing she\'s off the squad then?"');
                    scene.text('"Oh she\'s done. You don\'t cross Albina like that. Word is her parents found out about her skipping class to spend time with that asshole guy she was seeing and sent her to live with her super strict aunt in Moscow."');
                    scene.text('"Damn, poor girl. I heard Albina only put her on the squad because of her puppies. That said, there\'s a few hot chicks I\'d like to see replace her."');
                    scene.text('The boys start discussing who they\'d like to see in "that hot cheerleading outfit."');
                  } else {
                    if ((!(Math.floor(Math.random() * 2) + 0))) {
                      qspCall(s, 'gschool_gossip', 'mixed', ((s as any).locArgs?.[1] ?? 0));
                    } else {
                      if ((!(Math.floor(Math.random() * 2) + 0))) {
                        qspCall(s, 'gschool_gossip', 'boys', ((s as any).locArgs?.[1] ?? 0));
                      } else {
                        qspCall(s, 'gschool_gossip', 'girls', ((s as any).locArgs?.[1] ?? 0));
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

function enterMixed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  (s as any).chat_rand = Math.floor(Math.random() * 95) + 1;
  if (((s as any).chat_rand ?? 0) === 1) {
    scene.text('"Man, this town is so boring! We really need to graduate soon, so we can go live in the city!"');
    scene.text('His friend heartily agrees. "Absolutely, I hear they have parties in the university dorm every day of the week!"');
  } else {
    if (((s as any).chat_rand ?? 0) === 2) {
      scene.text('"We went to the old town the other day and it\'s <i>so boring</i>! Just old buildings and a huge park, but I got to make out with a hot guy there, so it wasn\'t all bad."');
    } else {
      if (((s as any).chat_rand ?? 0) === 3) {
        scene.text('"I heard some of the older kids have a party every week. It\'s all drinking and sex."');
      } else {
        if (((s as any).chat_rand ?? 0) === 4) {
          // TODO-QSP: dynamic text: "I swear there's a porn star who looks just like <<$pcs_firstname>>!"
          scene.text(`"I swear there's a porn star who looks just like ${((s as any).pcs_firstname ?? 0)}!"`);
        } else {
          if (((s as any).chat_rand ?? 0) === 5) {
            scene.text('"I was visiting a friend in the apartment complexes and saw a couple having sex right there in the stairwell."');
          } else {
            if (((s as any).chat_rand ?? 0) === 6) {
              scene.text('"I heard the volleyball coach is fucking one of the girls on the team."');
            } else {
              if (((s as any).chat_rand ?? 0) === 7) {
                scene.text('"My little brother plays football after school almost every day. They watch porn afterwards and he said that one of the girls from our class sometimes stops by and blows them all, but he won\'t tell me who it is."');
              } else {
                if (((s as any).chat_rand ?? 0) === 8) {
                  scene.text('"My cousin goes to the university and said there\'s a dorm whore who fucks all the black guys."');
                } else {
                  if (((s as any).chat_rand ?? 0) === 9) {
                    // TODO-QSP: dynamic text: "We were coming back from the city and I swear I saw someone who looked almost e...
                    scene.text(`"We were coming back from the city and I swear I saw someone who looked almost exactly like ${((s as any).pcs_firstname ?? 0)} standing around with all the whores near the highway."`);
                  } else {
                    if (((s as any).chat_rand ?? 0) === 10) {
                      scene.text('"I heard Mr. Kuznetsov has a big dick. One of the girls was cutting class in the mens room and spied on him taking a piss. She said his dick nearly hung down to his knees."');
                    } else {
                      if (((s as any).chat_rand ?? 0) === 11) {
                        scene.text('"I heard Mr. Kuznetsov hates it here and was trying to get a transfer, but Miss Volkov blocked it and now they hate each other."');
                        scene.text('"Really? I heard they were fucking each other."');
                      } else {
                        if (((s as any).chat_rand ?? 0) === 12) {
                          scene.text('"A friend said her mom overheard Mrs. Tsarev telling someone that Mr. Tsarev has a little dick and that\'s why she won\'t have sex with him anymore."');
                        } else {
                          if (((s as any).chat_rand ?? 0) === 13) {
                            scene.text('"I heard Mr. Tsarev is not a happily married man and they might be getting a divorce. I feel sorry for Lera."');
                          } else {
                            if (((s as any).chat_rand ?? 0) === 14) {
                              scene.text('"I heard Mr. Ivanov cornered one of the girls in the bathroom and threatened to have her expelled if she didn\'t suck his dick."');
                              scene.text('"Yeah, I heard that too. I also heard that he fucked her in the ass until she cried."');
                              scene.text('"Fucking bastard!"');
                            } else {
                              if (((s as any).chat_rand ?? 0) === 15) {
                                scene.text('"Mr. Ivanov is such an asshole! He\'s always giving the nerds special treatment while fucking with the rest of us. I got Artem to write my paper and barely got a passing grade on it while he got a perfect score on his!"');
                                scene.text('"I always knew he\'s harder on anyone that isn\'t a nerd. I heard it\'s because he was a nerd in school and was always picked on."');
                                scene.text('"Yeah, I can imagine that. He looks like a loser."');
                              } else {
                                if (((s as any).chat_rand ?? 0) === 16) {
                                  scene.text('"I heard Marcus\' dick is bigger than most girls arms and he has to tape it to his leg during gym class to keep it from falling out of his shorts."');
                                } else {
                                  if (((s as any).chat_rand ?? 0) === 17) {
                                    scene.text('"I heard Marcus tries to lure girls to the city, where he takes them to the university dorm and all the black guys gang bang her."');
                                  } else {
                                    if (((s as any).chat_rand ?? 0) === 18) {
                                      scene.text('"I heard Marcus is a sex fiend who always has a hard-on."');
                                      scene.text('"Well, I heard it\'s because all the girls like to tease him because they think it\'s funny."');
                                    } else {
                                      if (((s as any).chat_rand ?? 0) === 19) {
                                        scene.text('"I heard the only reason Marcus is here is because he wants to find a nice Russian girl to marry and take back to America."');
                                        scene.text('"That\'s not what I heard. I heard he came here because he thought all the Russian girls would want to jump on his dick because he\'s black."');
                                      } else {
                                        if (((s as any).chat_rand ?? 0) === 20) {
                                          scene.text('"I heard that Mr. Vasilyev is gay and that he came onto some of the guys after school."');
                                          scene.text('"Ugh, he shouldn\'t be allowed to teach here."');
                                        } else {
                                          if (((s as any).chat_rand ?? 0) === 21) {
                                            scene.text('"I heard Miss Volkov has a drawer full of sex toys she\'s confiscated from students."');
                                          } else {
                                            if (((s as any).chat_rand ?? 0) === 22) {
                                              scene.text('"I heard Miss Volkov uses a strap-on if she feels the paddle isn\'t working."');
                                              scene.text('"Really? Well, I guess the gopniks would know…"');
                                            } else {
                                              if (((s as any).chat_rand ?? 0) === 23) {
                                                scene.text('"I heard Miss Volkov used to work as a Dominatrix."');
                                                scene.text('"I heard she still does on the weekends."');
                                              } else {
                                                if (((s as any).chat_rand ?? 0) === 24) {
                                                  scene.text('"Mrs. Sokoloff has been teaching so long I swear they built the old school building around her."');
                                                } else {
                                                  if (((s as any).chat_rand ?? 0) === 25) {
                                                    scene.text('"I was in the city last week and saw Ms. Braakman at a club partying like crazy!"');
                                                    scene.text('"I heard she\'s a total party animal who goes to the city on Friday night and doesn\'t come home until Sunday afternoon."');
                                                  } else {
                                                    if (((s as any).chat_rand ?? 0) === 26) {
                                                      scene.text('"I heard Ms. Braakman and her husband were swingers, but now she just goes to orgies."');
                                                    } else {
                                                      if (((s as any).chat_rand ?? 0) === 27) {
                                                        scene.text('"I heard Ms. Braakman killed her husband and made it look like an accident."');
                                                      } else {
                                                        if (((s as any).chat_rand ?? 0) === 28) {
                                                          scene.text('"A girl told me she went to the supply closet to get paper towels and found the janitor in there, jerking off."');
                                                          scene.text('"Eww, that\'s gross!"');
                                                          scene.text('"She also said he had a little dick that was barely big enough for him to fit his hand around."');
                                                        } else {
                                                          if (((s as any).chat_rand ?? 0) === 29) {
                                                            scene.text('"I heard the janitor goes through the girls lockers and steals their panties if they leave them at school."');
                                                          } else {
                                                            if (((s as any).chat_rand ?? 0) === 30) {
                                                              scene.text('"I heard the janitor drilled a hole in the wall of the girls shower in the gym and spies on them when they take a shower."');
                                                            } else {
                                                              if (((s as any).chat_rand ?? 0) === 31) {
                                                                scene.text('"Oh man, did you hear what happened to Igor?"');
                                                                scene.text('"About him getting his shorts pulled down? Yeah, I also heard he had a tiny dick that wasn\'t much bigger than a girl\'s clit."');
                                                              } else {
                                                                if (((s as any).chat_rand ?? 0) === 32) {
                                                                  scene.text('"Man, Andrey is such an asshole!"');
                                                                  scene.text('"Why?"');
                                                                  scene.text('"He cheats on Stasya."');
                                                                  scene.text('"Yeah, well she deserves it. She\'s a total bitch."');
                                                                } else {
                                                                  if (((s as any).chat_rand ?? 0) === 33) {
                                                                    scene.text('"I heard Stasya is so in love with Andrey, she\'ll let him do anything to her."');
                                                                    scene.text('"Yeah, I heard he makes her eat out other girls while he watches."');
                                                                    scene.text('"Well I heard he makes her bring him girls for a threesome."');
                                                                  } else {
                                                                    if (((s as any).chat_rand ?? 0) === 34) {
                                                                      scene.text('"Some girl said Mefodiy has a big dick, so big she couldn\'t fit it all in her mouth."');
                                                                    } else {
                                                                      if (((s as any).chat_rand ?? 0) === 35) {
                                                                        scene.text('"Stasya is a complete bitch. I said hi to her in the hall last week and she just looked at me like I insulted her and didn\'t say anything back."');
                                                                      } else {
                                                                        if (((s as any).chat_rand ?? 0) === 36) {
                                                                          scene.text('"I heard Stasya hates Marcus and is trying to get him expelled."');
                                                                          scene.text('"Well, I heard she\'s fucking him behind Andrey\'s back."');
                                                                        } else {
                                                                          if (((s as any).chat_rand ?? 0) === 37) {
                                                                            scene.text('"I overheard Stasya talking and she was worried Andrey was cheating on her. Stupid bitch, he\'s constantly cheating on her!"');
                                                                          } else {
                                                                            if (((s as any).chat_rand ?? 0) === 38  &&  ((s as any).katjaQW ?? 0)?.['school_kiss'] >= 1) {
                                                                              scene.text('"I heard Katja is a lesbian and that she was kissing some other girl in the hall."');
                                                                            } else {
                                                                              if (((s as any).chat_rand ?? 0) === 39) {
                                                                                scene.text('"I heard that Albina whores out the girls in her dance troupe and that she\'s a madam."');
                                                                                scene.text('"Don\'t let her hear you say that! If she doesn\'t beat you up, then her dad will ruin your dad!"');
                                                                              } else {
                                                                                if (((s as any).chat_rand ?? 0) === 40) {
                                                                                  scene.text('"If you ever want to know the latest gossip, just ask Lizaveta. That girl seems to know every bit of gossip and never shuts up about it."');
                                                                                  scene.text('Their friend laughs. "I heard she even mutters about gossip in her sleep!"');
                                                                                } else {
                                                                                  if (((s as any).chat_rand ?? 0) === 41) {
                                                                                    scene.text('"Don\'t cross Lizaveta or she\'ll totally ruin your reputation by spreading gossip about you."');
                                                                                  } else {
                                                                                    if (((s as any).chat_rand ?? 0) === 42) {
                                                                                      scene.text('"I heard Ivan\'s dad skipped town when he was young and now his mom works two jobs to support him and his brother and sister."');
                                                                                    } else {
                                                                                      if (((s as any).chat_rand ?? 0) === 43) {
                                                                                        scene.text('"Burr, did you feel that chill? The Ice Queen just walked by."');
                                                                                        scene.text('"Do people call her that because she\'s such a good skater?"');
                                                                                        scene.text('"That, and the fact she\'s completely cold hearted with no emotion at all."');
                                                                                      } else {
                                                                                        if (((s as any).chat_rand ?? 0) === 44) {
                                                                                          scene.text('"I heard Lazar has a box full of girls panties at his house."');
                                                                                          scene.text('"He wears girls panties?"');
                                                                                          scene.text('"What? No! He takes the panties of all the girls he fucks for the first time, like a trophy."');
                                                                                          scene.text('"Oh. How many does he have?"');
                                                                                          scene.text('"I heard he\'s at a couple dozen, and that by the time school is over, he plans to have a pair from every girl. Well, at least from the pretty girls."');
                                                                                        } else {
                                                                                          if (((s as any).chat_rand ?? 0) === 45) {
                                                                                            scene.text('"I heard Erast is taking steroids and that\'s why he\'s so big and strong."');
                                                                                          } else {
                                                                                            if (((s as any).chat_rand ?? 0) === 46) {
                                                                                              scene.text('"If Lariska wasn\'t such a total doormat letting people tell her what to do, she would make a great captain for the volleyball team."');
                                                                                            } else {
                                                                                              if (((s as any).chat_rand ?? 0) === 47) {
                                                                                                scene.text('"If Christina was half as good as she thinks she is, she would hold the women\'s world record for all track events."');
                                                                                              } else {
                                                                                                if (((s as any).chat_rand ?? 0) === 48) {
                                                                                                  scene.text('"I saw Feofan walking around in a costume over the weekend."');
                                                                                                  scene.text('"Yeah, he likes to dress up and go to those conventions and stuff."');
                                                                                                  scene.text('"No, I mean he was just walking around town all dressed up. I wasn\'t sure it was him at first until he said something to me."');
                                                                                                  scene.text('"Man, he is weird."');
                                                                                                } else {
                                                                                                  if (((s as any).chat_rand ?? 0) === 49) {
                                                                                                    if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7) {
                                                                                                      scene.text('"Natasha\'s mom must be super poor. She\'s wearing the same school uniform she had last year."');
                                                                                                      scene.text('"She\'s been wearing the same clothes for the last few years and always brings a lunch from home."');
                                                                                                    } else {
                                                                                                      scene.text('"Natasha\'s mom must be super poor. Until recently, she was wearing the same school uniform she had last year."');
                                                                                                      // TODO-QSP: dynamic text: "Yeah, I hear she's been hanging out with <<$pcs_nickname>> recently. I think I ...
                                                                                                      scene.text(`"Yeah, I hear she's been hanging out with ${((s as any).pcs_nickname ?? 0)} recently. I think I saw them holding hands in the park a while back."`);
                                                                                                      // TODO-QSP: dynamic text: "I guess <<$pcs_nickname>>'s been buying stuff for her then. Think they're lesbi...
                                                                                                      scene.text(`"I guess ${((s as any).pcs_nickname ?? 0)}'s been buying stuff for her then. Think they're lesbians?"`);
                                                                                                      scene.text('I don\'t know. I guess so, but there were rumors a while back that she was hanging around with Lazar too."');
                                                                                                    }
                                                                                                  } else {
                                                                                                    if (((s as any).chat_rand ?? 0) === 50) {
                                                                                                      if (((s as any).NatbelQW ?? 0)?.['chrispaid'] === 3) {
                                                                                                        scene.text('"Did you hear the latest? Natasha is apparently repaying her debts!"');
                                                                                                        scene.text('"I find that hard to believe. I heard she still owes Christina, who\'s getting tired of waiting."');
                                                                                                        // TODO-QSP: dynamic text: "Not according to Lizaveta. She said that <<$pcs_nickname>> paid her debt for he...
                                                                                                        scene.text(`"Not according to Lizaveta. She said that ${((s as any).pcs_nickname ?? 0)} paid her debt for her, and she's rarely wrong."`);
                                                                                                        scene.text('"I doubt this changes anything, though. She\'ll be asking for money again within a week or two."');
                                                                                                      } else {
                                                                                                        // TODO-QSP: dynamic text: "Whatever you do, don't loan money to Natasha. She'll never pay you back. I lent...
                                                                                                        scene.text(`"Whatever you do, don't loan money to Natasha. She'll never pay you back. I lent her ${qspFunc(s, 'money', 'format', 50)} and I doubt I'll ever see it again."`);
                                                                                                        scene.text('"I heard one of the guys threatened her and told her to get his money or she better start blowing him, so she dropped right to her knees and sucked him off."');
                                                                                                        scene.text('"Seriously? Hmmm… Maybe I better ask her for my money again…"');
                                                                                                      }
                                                                                                    } else {
                                                                                                      if (((s as any).chat_rand ?? 0) === 51) {
                                                                                                        scene.text('"Radomir acts like he\'s already the next Yuri Shatunov. I mean, he\'s okay but he\'s nowhere near as good as he likes to think he is."');
                                                                                                        scene.text('"I don\'t know… He\'s pretty good, and so is his band."');
                                                                                                      } else {
                                                                                                        if (((s as any).chat_rand ?? 0) === 52) {
                                                                                                          scene.text('"Man, I can\'t believe how much Lavrenti has changed. He used to be so much cooler back before he went all gopnik."');
                                                                                                          scene.text('"I heard it was because he was in love with some girl, and Dimka knew it. So he got her drunk, fucked her every which way and filmed it to show Lavrenti that she was a slut."');
                                                                                                          scene.text('"Damn! Well, I guess Dimka was right though, if she let him film her while he fucked her."');
                                                                                                        } else {
                                                                                                          if (((s as any).chat_rand ?? 0) === 53) {
                                                                                                            scene.text('"I heard Lena is a lesbian."');
                                                                                                            scene.text('"Yeah, I heard it\'s because Vitek has beat the shit out of every guy who\'s ever looked at her."');
                                                                                                          } else {
                                                                                                            if (((s as any).chat_rand ?? 0) === 54) {
                                                                                                              scene.text('"I heard Lera is a lesbian."');
                                                                                                              scene.text('"Yeah, I heard she spends most of her time going down on Lena when they\'re alone together."');
                                                                                                            } else {
                                                                                                              if (((s as any).chat_rand ?? 0) === 55) {
                                                                                                                scene.text('"I heard Lesco is a fag."');
                                                                                                                scene.text('"He sure looks and acts like he\'s gay. I believe it."');
                                                                                                              } else {
                                                                                                                if (((s as any).chat_rand ?? 0) === 56) {
                                                                                                                  scene.text('"I heard the only reason Lesco\'s uncle took him in is because his mom is a whore who was so strung out on drugs, she left him alone for two weeks."');
                                                                                                                  scene.text('"I don\'t blame her. If I had a son that looked like that, I\'d be high all the time too."');
                                                                                                                } else {
                                                                                                                  if (((s as any).chat_rand ?? 0) === 57) {
                                                                                                                    scene.text('"Oh god, avoid Petia the mooch today! He smells worse than usual. Does that fat loser ever take a bath or brush his teeth?"');
                                                                                                                    scene.text('"I swear I\'d rather fart in my gym sock and smell it than go anywhere near that thing."');
                                                                                                                  } else {
                                                                                                                    if (((s as any).chat_rand ?? 0) === 58) {
                                                                                                                      scene.text('"I bet Radomir is happy his band has their first groupie. Alyona is always hanging out with them and going to all their gigs."');
                                                                                                                      scene.text('"I heard she lets the whole band, including Anushka, pull trains on her."');
                                                                                                                      scene.text('"Dude, better be careful saying that or she might stab you with that knife she always carries around."');
                                                                                                                    } else {
                                                                                                                      if (((s as any).chat_rand ?? 0) === 59) {
                                                                                                                        scene.text('"I saw Alyona stumbling home last night, drunk off her ass, probably fucked up on drugs too. I offered to help her and the bitch pulled a knife on me."');
                                                                                                                        scene.text('"Yeah, all she ever does is get drunk, do drugs, fight and fuck. Just like her parents."');
                                                                                                                      } else {
                                                                                                                        if (((s as any).chat_rand ?? 0) === 60) {
                                                                                                                          scene.text('"Anushka is such a slut. I saw her giving Radomir a handjob in class the other day and she\'s always making out with Alyona. I bet the whole band pulls trains on the slut every night."');
                                                                                                                          scene.text('"Shh, not so loud! The last person to call her a slut got their ass beat by the gopniks."');
                                                                                                                        } else {
                                                                                                                          if (((s as any).chat_rand ?? 0) === 61) {
                                                                                                                            scene.text('"I heard Anushka is a real honest to god nympho and if she isn\'t getting fucked three times a day, she isn\'t happy."');
                                                                                                                            scene.text('"Well, I guess she doesn\'t get fucked three times a day most days. Most of the time, she\'s a total bitch to me."');
                                                                                                                            scene.text('"Well, offer to fuck her next time. I bet she\'d take you up on it. Or beat your ass. Maybe both."');
                                                                                                                          } else {
                                                                                                                            if (((s as any).chat_rand ?? 0) === 62) {
                                                                                                                              scene.text('"Did you catch the fight in the park over the weekend?"');
                                                                                                                              scene.text('"No, who was fighting?"');
                                                                                                                              scene.text('"Some gopniks from the city were acting all hard and tried pushing Katyusha around. She beat the guy\'s ass, along with his two friends. She\'s one scary bitch!"');
                                                                                                                            } else {
                                                                                                                              if (((s as any).chat_rand ?? 0) === 63) {
                                                                                                                                scene.text('"I\'ve got a riddle for you. Britney Spears had one, Katie Holmes is having one and you\'ll never have one. What is it?"');
                                                                                                                                scene.text('"That\'s easy. A baby."');
                                                                                                                                scene.text('"No, a career!"');
                                                                                                                              } else {
                                                                                                                                if (((s as any).chat_rand ?? 0) === 64) {
                                                                                                                                  scene.text('"I wonder how Gerasim got in that wheelchair."');
                                                                                                                                  scene.text('"I heard he got an infection that messed up his spine."');
                                                                                                                                  scene.text('"I heard his dad got drunk and ran him over."');
                                                                                                                                } else {
                                                                                                                                  if (((s as any).chat_rand ?? 0) === 65) {
                                                                                                                                    scene.text('"I can\'t believe you aced the homework."');
                                                                                                                                    scene.text('"I should have! Gerasim done it."');
                                                                                                                                  } else {
                                                                                                                                    if (((s as any).chat_rand ?? 0) === 66) {
                                                                                                                                      scene.text('"I heard Lina is sucking Coach Pavlovich\'s dick."');
                                                                                                                                      scene.text('"I heard it was Christina."');
                                                                                                                                    } else {
                                                                                                                                      if (((s as any).chat_rand ?? 0) === 67) {
                                                                                                                                        scene.text('"Yeah, Vicky climbed into my mum\'s old chest and pulled the lid shut."');
                                                                                                                                        scene.text('"How the hell did she get in that?"');
                                                                                                                                        scene.text('"How should I know? She\'d make a good magician\'s assistant."');
                                                                                                                                      } else {
                                                                                                                                        if (((s as any).chat_rand ?? 0) === 68) {
                                                                                                                                          scene.text('"Hey, do you know where Christina went last Friday after PE?"');
                                                                                                                                          scene.text('"Yeah, she told me she was out on the athletics field with Coach Pavlovich."');
                                                                                                                                          scene.text('"Again? She does this every Friday! What are they up to?"');
                                                                                                                                          scene.text('"I don\'t know. Maybe he\'s giving her some private training sessions or something? There\'s got to be a reason she keeps winning those dashes."');
                                                                                                                                        } else {
                                                                                                                                          if (((s as any).chat_rand ?? 0) === 69) {
                                                                                                                                            scene.text('"Did you notice the way Coach Pavlovich stared at the principal during the last assembly?"');
                                                                                                                                            scene.text('"Yeah, he seemed completely zoned out. And I think she noticed towards the end!"');
                                                                                                                                            scene.text('"Really? I didn\'t see that. How did she react?"');
                                                                                                                                            scene.text('"I think she… smiled at him."');
                                                                                                                                          } else {
                                                                                                                                            if (((s as any).chat_rand ?? 0) === 70) {
                                                                                                                                              scene.text('"Svyatoslav is incredible. Did you see him in PE last week? It\'s weird he isn\'t part of some national team yet."');
                                                                                                                                              scene.text('"Yeah, well… Maybe he\'s pushing too hard."');
                                                                                                                                              scene.text('"Why do you say that?"');
                                                                                                                                              scene.text('"I saw Svyatoslav talk to some shady guy behind the community center yesterday. I think he was buying steroids."');
                                                                                                                                              scene.text('"Huh… Well, it would explain how he bulked up so much during the summer break."');
                                                                                                                                            } else {
                                                                                                                                              if (((s as any).chat_rand ?? 0) === 71) {
                                                                                                                                                scene.text('"I wonder where Bella goes after class."');
                                                                                                                                                scene.text('"To the city."');
                                                                                                                                                scene.text('"What?"');
                                                                                                                                                scene.text('"She takes the train to the city. I saw her board it a couple of times."');
                                                                                                                                                scene.text('"What could she possibly be doing in the city every day?"');
                                                                                                                                                scene.text('"I think she takes singing lessons or something."');
                                                                                                                                                scene.text('"With a voice like hers, she probably sucks him off so he doesn\'t run out."');
                                                                                                                                              } else {
                                                                                                                                                if (((s as any).chat_rand ?? 0) === 72) {
                                                                                                                                                  if (((s as any).christinaQW ?? 0)?.['fight'] >= 1) {
                                                                                                                                                    scene.text('"Did you hear Christina got her ass kicked?"');
                                                                                                                                                    scene.text('"I was there! That girl tore her to pieces!"');
                                                                                                                                                    scene.text('"Good. If anybody had it coming, it was her."');
                                                                                                                                                  } else {
                                                                                                                                                    scene.text('"Every time I see Lina, I just want to punch her."');
                                                                                                                                                    scene.text('"Come on, she\'s not that bad."');
                                                                                                                                                    scene.text('"Yes, she is. Just the way she keeps vying for Christina\'s attention pisses me off. She\'s like her lap dog."');
                                                                                                                                                    scene.text('"Well… Christina is kind of scary."');
                                                                                                                                                    scene.text('"Yeah, but Lina isn\'t scared - she worships her! I saw her and Christina after track training last week; Lina dropped to her knees and licked Christina\'s cunt, just because Christina said she felt \'tense\'. I bet Lina would fuck somebody if Christina ordered her to."');
                                                                                                                                                  }
                                                                                                                                                } else {
                                                                                                                                                  if (((s as any).chat_rand ?? 0) === 73) {
                                                                                                                                                    scene.text('"I\'m telling you, Julia was trying to kiss a girl!"');
                                                                                                                                                    scene.text('"Who was it?"');
                                                                                                                                                    scene.text('"I don\'t know. I couldn\'t see her face."');
                                                                                                                                                    scene.text('"And how do you know it was a girl?"');
                                                                                                                                                    scene.text('"Do you see any of the guys walking around in a skirt?"');
                                                                                                                                                    scene.text('"Fair point. What happened next?"');
                                                                                                                                                    scene.text('"The girl shoved her away and left."');
                                                                                                                                                    scene.text('"So that\'s why she keeps giving the boys the cold shoulder…"');
                                                                                                                                                  } else {
                                                                                                                                                    if (((s as any).chat_rand ?? 0) === 74) {
                                                                                                                                                      scene.text('"… I\'m not saying he wasn\'t being a dick, but… You know, everybody is, sometimes."');
                                                                                                                                                      scene.text('"I don\'t get it. Why do you keep defending Dan? He\'s one of the biggest assholes in school!"');
                                                                                                                                                      scene.text('"Well… We used to hang out when we were younger. He was cool."');
                                                                                                                                                      scene.text('"Dan? We\'re both talking about Dan Ryzhov, right?"');
                                                                                                                                                      scene.text('"I\'m telling you, he was really nice back then!"');
                                                                                                                                                      scene.text('"Well, if he was such a nice guy, what happened to him?"');
                                                                                                                                                      scene.text('"His parents got divorced and… Well, my mom heard that neither of them wanted him, so he ended up living with his uncle."');
                                                                                                                                                      scene.text('"Oh…"');
                                                                                                                                                    } else {
                                                                                                                                                      if (((s as any).chat_rand ?? 0) === 75) {
                                                                                                                                                        scene.text('"Wait, are you telling me that Evgeny, nerdy chess guy Evgeny, was trying to hit on that mousy girl whatsherface?"');
                                                                                                                                                        scene.text('"Yeah. I think she\'s called Zinaida, or something."');
                                                                                                                                                        scene.text('"Who cares about her name?! How did she react?"');
                                                                                                                                                        scene.text('"She shot him down. Just turned around and left without saying anything."');
                                                                                                                                                        scene.text('"Wow, that\'s cold."');
                                                                                                                                                        scene.text('"I know, right? I almost felt a little sorry for the little nerd."');
                                                                                                                                                      } else {
                                                                                                                                                        if (((s as any).chat_rand ?? 0) === 76  &&  ((s as any).IgorQW ?? 0)?.['kdwalk'] >= 3) {
                                                                                                                                                          // TODO-QSP: dynamic text: "I saw <<$pcs_nickname>> walking through the park with some girl I've never seen...
                                                                                                                                                          scene.text(`"I saw ${((s as any).pcs_nickname ?? 0)} walking through the park with some girl I've never seen. She was really pretty."`);
                                                                                                                                                          scene.text('"Was she a girl from our school?"');
                                                                                                                                                          scene.text('"I couldn\'t get a good look at her face, but they were being really friendly with each other. Maybe a bit too friendly…"');
                                                                                                                                                          scene.text('"Maybe she\'s a lesbian?"');
                                                                                                                                                        } else {
                                                                                                                                                          if (((s as any).chat_rand ?? 0) === 77) {
                                                                                                                                                            scene.text('"Did I tell you that retard Evgeny spazzed out on me in class yesterday?"');
                                                                                                                                                            scene.text('"No, what happened?"');
                                                                                                                                                            scene.text('"I accidentally bumped into his desk when he was playing chess and he lost his shit!"');
                                                                                                                                                            scene.text('"I wish I could have seen that!"');
                                                                                                                                                            scene.text('"The best part of it was that the teacher ended up taking his game until the end of class and he looked like he was about to cry."');
                                                                                                                                                          } else {
                                                                                                                                                            if (((s as any).chat_rand ?? 0) === 78) {
                                                                                                                                                              scene.text('"Shit, I forgot to do my homework last night."');
                                                                                                                                                              scene.text('"Just get Gerasim to do it. That\'s what I do."');
                                                                                                                                                              scene.text('"Do I need to pay him or something?"');
                                                                                                                                                              scene.text('"Nah, just act like you really need it done and he\'ll say yes. It\'s almost annoying how nice he is to everyone, but I haven\'t gotten a bad grade from him yet."');
                                                                                                                                                            } else {
                                                                                                                                                              if (((s as any).chat_rand ?? 0) === 79  &&  ((s as any).npc_rel ?? 0)?.['A9'] >= 45  &&  ((s as any).grupTipe ?? 0) !== 4) {
                                                                                                                                                                // TODO-QSP: dynamic text: "Have you noticed <<$pcs_nickname>> hanging out with Vitek lately?"
                                                                                                                                                                scene.text(`"Have you noticed ${((s as any).pcs_nickname ?? 0)} hanging out with Vitek lately?"`);
                                                                                                                                                                scene.text('"You think she\'s a gopnik now? Oh god, maybe she\'s fucking him!"');
                                                                                                                                                                scene.text('"Ew, I didn\'t need that mental image!"');
                                                                                                                                                              } else {
                                                                                                                                                                if (((s as any).chat_rand ?? 0) === 80  &&  ((s as any).npc_rel ?? 0)?.['A9'] >= 45  &&  ((s as any).grupTipe ?? 0) === 4) {
                                                                                                                                                                  // TODO-QSP: dynamic text: "Even for a gopnik, <<$pcs_nickname>> has been hanging around Vitek a lot more l...
                                                                                                                                                                  scene.text(`"Even for a gopnik, ${((s as any).pcs_nickname ?? 0)} has been hanging around Vitek a lot more lately."`);
                                                                                                                                                                  scene.text('"You know, I heard he sells drugs. You think he\'s selling some to her?"');
                                                                                                                                                                  scene.text('"Pfft, obviously! I mean they\'re both gopniks, so of course all they do is drink, be loud and do drugs."');
                                                                                                                                                                } else {
                                                                                                                                                                  if (((s as any).chat_rand ?? 0) === 81  &&  ((s as any).npc_rel ?? 0)?.['A11'] <= 25  &&  ((s as any).grupTipe ?? 0) !== 4) {
                                                                                                                                                                    // TODO-QSP: dynamic text: "Aren't <<$pcs_nickname>> and Vasily childhood friends?"
                                                                                                                                                                    scene.text(`"Aren't ${((s as any).pcs_nickname ?? 0)} and Vasily childhood friends?"`);
                                                                                                                                                                    scene.text('"More like were. They\'re not close anymore."');
                                                                                                                                                                    scene.text('"Aww… When you think about it, it\'s kind of sad."');
                                                                                                                                                                    scene.text('"It\'s hard for me to feel bad for someone that calls Dan and Vitek his best friends."');
                                                                                                                                                                  } else {
                                                                                                                                                                    if (((s as any).chat_rand ?? 0) === 82) {
                                                                                                                                                                      scene.text('"Did you hear about the rapist in St. Petersburg?"');
                                                                                                                                                                      scene.text('"Which one? There are so many."');
                                                                                                                                                                      scene.text('"The one who\'d been out of jail less than a week. When he tried to do it again, he picked the wrong girl."');
                                                                                                                                                                      scene.text('"Who\'d he pick?"');
                                                                                                                                                                      scene.text('"Whoever she was, she beat him senseless, took his wallet, his phone and his clothes and wrote "Don\'t fuck with Pavlovsk girls" on his chest."');
                                                                                                                                                                      scene.text('"Will it wash off?"');
                                                                                                                                                                      scene.text('"I doubt it. She wrote it with a broken bottle."');
                                                                                                                                                                    } else {
                                                                                                                                                                      if (((s as any).chat_rand ?? 0) === 83) {
                                                                                                                                                                        scene.text('"Katyusha knocked out another drunk at the disco last night when he wouldn\'t take a hint."');
                                                                                                                                                                        scene.text('"Must have been a tourist. Nobody here would be stupid enough to push her."');
                                                                                                                                                                        scene.text('"Petia might."');
                                                                                                                                                                      } else {
                                                                                                                                                                        if (((s as any).chat_rand ?? 0) === 84) {
                                                                                                                                                                          scene.text('"Apparently some guy was groping women on the Metro and one of the women kicked his ass and threw him off."');
                                                                                                                                                                          scene.text('"Yeah? Good for her."');
                                                                                                                                                                          scene.text('"Yeah. Someone who saw it says the woman who did it had just got off the train from Pavlovsk, too."');
                                                                                                                                                                        } else {
                                                                                                                                                                          if (((s as any).chat_rand ?? 0) === 85) {
                                                                                                                                                                            scene.text('"Seen this?"');
                                                                                                                                                                            scene.text('"What\'s that?"');
                                                                                                                                                                            scene.text('"Some guy in St. Petersburg."');
                                                                                                                                                                            scene.text('"Why would I want to see some guy in St. Petersburg\'s naked backside?"');
                                                                                                                                                                            scene.text('"Seen what\'s up it?"');
                                                                                                                                                                            scene.text('"What? OH! That\'s SICK! Why would he do that?"');
                                                                                                                                                                            scene.text('"Story is he tried to do that to someone else, and she won."');
                                                                                                                                                                            scene.text('"That\'s quite a win."');
                                                                                                                                                                          } else {
                                                                                                                                                                            if (((s as any).chat_rand ?? 0) === 86) {
                                                                                                                                                                              scene.text('"I saw some boys at the sports field talking to an older girl before they snuck off somewhere. I wonder what they were up to?"');
                                                                                                                                                                            } else {
                                                                                                                                                                              if (((s as any).chat_rand ?? 0) === 87) {
                                                                                                                                                                                scene.text('You hear some students whispering about something. "Did you hear about the jocks having a secret pick up game every weekend?"');
                                                                                                                                                                                scene.text('The other student nods. "Yeah, I heard they don\'t let anyone else join unless they belong to that clique…"');
                                                                                                                                                                                scene.text('They continue whispering that it would be nice to join in at least once.');
                                                                                                                                                                              } else {
                                                                                                                                                                                if (((s as any).chat_rand ?? 0) === 88) {
                                                                                                                                                                                  scene.text('"You know how the gopniks sometimes grab at girls during class? Usually the girls hate it, but this one girl the other day… Oh man, did she seem to enjoy it!"');
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (((s as any).chat_rand ?? 0) === 89) {
                                                                                                                                                                                    scene.text('"After school yesterday, I saw one of the lower class girls blowing one of the teachers, obviously trying to get her grades up like his dick was."');
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (((s as any).chat_rand ?? 0) === 90) {
                                                                                                                                                                                      scene.text('"Ever notice how everyone seems obsessed with sex?"');
                                                                                                                                                                                      scene.text('"What, you\'re not?"');
                                                                                                                                                                                      scene.text('"No, I mean <i>everyone</i>. Anyway, I heard my grandmother talking to some of the other old women the other day and they were talking about how the area is cursed. They were talking about how apparently some lust demon was killed here long ago and it\'s blood tainted the area, making everyone sex crazed."');
                                                                                                                                                                                      scene.text('The other student laughs. "Your grandmother is crazy! I want some of what she\'s taking. Magic and demons aren\'t real!"');
                                                                                                                                                                                      scene.text('"So you don\'t believe in god and stuff? I mean if that\'s all real, why wouldn\'t demons and stuff be?"');
                                                                                                                                                                                      scene.text('They both go silent, as if really considering it');
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (((s as any).chat_rand ?? 0) === 91  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] < 0  &&  ((s as any).cheerleadingQW ?? 0)?.['try_count'] > 0) {
                                                                                                                                                                                        // TODO-QSP: dynamic text: "Did you hear about <<$pcs_nickname>> trying to be a cheerleader?"
                                                                                                                                                                                        scene.text(`"Did you hear about ${((s as any).pcs_nickname ?? 0)} trying to be a cheerleader?"`);
                                                                                                                                                                                        scene.text('"There\'s no way someone like that made the team."');
                                                                                                                                                                                        scene.text('"Of course she didn\'t. They laughed her right out of the place."');
                                                                                                                                                                                        scene.text('"Did someone record it? I bet it would be hilarious to watch."');
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (((s as any).chat_rand ?? 0) === 92  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] > 1  &&  (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)) {
                                                                                                                                                                                          // TODO-QSP: dynamic text: "So I heard <<$pcs_nickname>> joined the cheerleading squad."
                                                                                                                                                                                          scene.text(`"So I heard ${((s as any).pcs_nickname ?? 0)} joined the cheerleading squad."`);
                                                                                                                                                                                          // TODO-QSP: dynamic text: "Well yeah, she is one of them. You know, '+iif(grupTipe = 1, 'popular', 'sporty...
                                                                                                                                                                                          scene.text('"Well yeah, she is one of them. You know, \'+iif(grupTipe = 1, \'popular\', \'sporty\')+\' enough to pass their judgemental selection process?"');
                                                                                                                                                                                          scene.text('"It\'s pretty harsh I know. I can only imagine Anushka on the team if they allowed it, running around the field flashing everyone during a game."');
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (((s as any).chat_rand ?? 0) === 93  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] === 2) {
                                                                                                                                                                                            // TODO-QSP: dynamic text: "Why did Albina let <<$pcs_nickname>> on the team? I thought they only allowed t...
                                                                                                                                                                                            scene.text(`"Why did Albina let ${((s as any).pcs_nickname ?? 0)} on the team? I thought they only allowed their own to join?"`);
                                                                                                                                                                                            scene.text('"She\'s their so called \'backup member\'. Honestly, she\'s probably only there so they can laugh at her."');
                                                                                                                                                                                            scene.text('"Poor naive girl doesn\'t know what she\'s gotten herself into…"');
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (((s as any).chat_rand ?? 0) === 94) {
                                                                                                                                                                                              scene.text('"Is Lariska only on the cheerleading squad because Christina is there? She seems to enjoy volleyball more than dancing."');
                                                                                                                                                                                              scene.text('"Well she does follow Christina around like a lost puppy, so maybe you\'re right."');
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (((s as any).chat_rand ?? 0) === 95) {
                                                                                                                                                                                                scene.text('"I really want to go down on Albina. Having those toned thighs squeeze my head in orgasm as I eat her pussy would be heaven!"');
                                                                                                                                                                                              } else {
                                                                                                                                                                                                qspCall(s, 'gschool_gossip', 'mixed', ((s as any).locArgs?.[1] ?? 0));
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
  if (((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 13  &&  ((s as any).loc_arg ?? 0) === 'watercooler') {
    scene.text('You find Natasha in the hallway and have a little chat. Dimka is nowhere to be seen. A few other seats are empty as well. You smile thinking about what that means.');
  }
  scene.build();
}

function enterBoys(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/boys_gossip.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  (s as any).chat_rand = Math.floor(Math.random() * 45) + 1;
  if (((s as any).chat_rand ?? 0) === 1) {
    scene.text('"Dude, you should\'ve seen me in League of Legends yesterday. I totally carried my crappy team to victory!"');
    scene.text('His friend doesn\'t seem impressed. "I\'ve seen you play before," he scoffs. "You couldn\'t carry a paper bag to the litter bin if your life depended on it!"');
  } else {
    if (((s as any).chat_rand ?? 0) === 2) {
      scene.text('"Double rainbows man… What do they even mean?"');
    } else {
      if (((s as any).chat_rand ?? 0) === 3) {
        scene.text('"I\'m going to stop getting into trouble. I got sent to the principal again yesterday and my ass is still sore."');
        scene.text('"It\'s not that bad, I\'ve been there."');
        scene.text('"I\'ve been there too much. She uses a bloody paddle on me now."');
      } else {
        if (((s as any).chat_rand ?? 0) === 4) {
          scene.text('"My uncle is a cop. He said he catches girls pissing in the bushes at the park all the time and lets them off with a warning if they suck him off."');
        } else {
          if (((s as any).chat_rand ?? 0) === 5) {
            scene.text('"I heard there\'s a gloryhole in the bathrooms at the community center and sometimes some slut is there, blowing guys."');
          } else {
            if (((s as any).chat_rand ?? 0) === 6) {
              scene.text('"I saw some girls naked at the lake last summer. They were off in the woods where you can\'t see them from the swimming area."');
            } else {
              if (((s as any).chat_rand ?? 0) === 7) {
                scene.text('"Come play football with us after school. They sometimes have a girl who comes and sucks them all off after the game."');
              } else {
                if (((s as any).chat_rand ?? 0) === 8) {
                  scene.text('"I saw some drunk girl squatting and pissing in the park last night. I couldn\'t see her face though."');
                } else {
                  if (((s as any).chat_rand ?? 0) === 9) {
                    scene.text('"My friend in the city said there\'s some chick from our school that they often pick up and take back to their hotel room, where she lets them use her as they please."');
                  } else {
                    if (((s as any).chat_rand ?? 0) === 10) {
                      scene.text('"My uncle is a truck driver and told me that he always picks up female hitchhikers because they\'re willing to blow him for a free ride."');
                    } else {
                      if (((s as any).chat_rand ?? 0) === 11) {
                        scene.text('"Miss Orlov is so fucking hot! I totally want to bang her."');
                        scene.text('"Get in line! She\'s hotter than any of the girls in school."');
                      } else {
                        if (((s as any).chat_rand ?? 0) === 12) {
                          scene.text('"Miss Volkov is kind of hot. I mean, for someone almost as old as my mom."');
                          scene.text('"I hear you. She\'s a total MILF."');
                        } else {
                          if (((s as any).chat_rand ?? 0) === 13  &&  ((s as any).katjaQW ?? 0)?.['school_kiss'] > 2) {
                            scene.text('"Did you see the picture of Katja kissing another girl?"');
                            scene.text('"Katja\'s a lesbian? And no, let me see the picture." They look at the image on a phone. "Who\'s she kissing?"');
                            // TODO-QSP: dynamic text: "I don't know. I heard it was <<$pcs_firstname>>."
                            scene.text(`"I don't know. I heard it was ${((s as any).pcs_firstname ?? 0)}."`);
                            scene.text('"Fuck, they\'re both lesbians? That sucks."');
                            scene.text('"Well I heard Ivan fucked them both, so I think they\'re both bi."');
                            scene.text('"Sweet… Lucky bastard."');
                          } else {
                            if (((s as any).chat_rand ?? 0) === 14) {
                              scene.text('"I heard Ivan only fucks girls in the ass and they all seem to be lining up to let him do it."');
                              scene.text('"I wonder how he convinces them? Maybe we should ask him what his secret is?"');
                            } else {
                              if (((s as any).chat_rand ?? 0) === 15) {
                                scene.text('"I heard Sokolov is a lesbian."');
                                scene.text('"I heard she has no interest in sex at all. Some of the girls even hit on her too. A real shame. She\'s cute."');
                              } else {
                                if (((s as any).chat_rand ?? 0) === 16) {
                                  scene.text('"Man, I can\'t believe all the girls let Lazar fuck them. It\'s not fair, I mean what does he have that I don\'t?"');
                                  scene.text('His friend laughs. "You mean other than having good looks, a huge dick and being captain of the football team who\'s in great shape? Oh, he\'s got nothing on you."');
                                  scene.text('"Haha, very funny. Yeah okay, maybe he\'s good looking, but he\'s also a total asshole to the girls and I\'m nice to them. Being a nice guy has to count for something, right?"');
                                  scene.text('His friend shrugs. "Girls like bad boys, plus I think most of them secretly love being treated like the sluts they are, no matter what they tell us."');
                                } else {
                                  if (((s as any).chat_rand ?? 0) === 17) {
                                    scene.text('"Vitek almost got expelled. Some guy started talking to his sister Lena and he shoved him to the ground and almost started a fight, but the teachers broke it up. That poor guy is going to get his ass beat later when Vitek catches him away from school."');
                                  } else {
                                    if (((s as any).chat_rand ?? 0) === 18) {
                                      scene.text('"It\'s not fair I tell you. All the girls are lining up to suck Radomir\'s dick just because he\'s in a band. He treats them like shit, but they keep coming back for more!"');
                                      scene.text('"I hear you, but girls like assholes and he\'s the biggest asshole around."');
                                    } else {
                                      if (((s as any).chat_rand ?? 0) === 19) {
                                        scene.text('"I heard Roman and some of the others went to the city recently and as always, he got in a fight."');
                                        scene.text('"Yeah, so? That\'s all he does."');
                                        scene.text('"Yeah, but they say he tore the other guy\'s eyes out."');
                                        scene.text('"Holy shit, are you serious?"');
                                      } else {
                                        if (((s as any).chat_rand ?? 0) === 20) {
                                          scene.text('"Lena\'s kind of hot."');
                                          scene.text('"Are you crazy?! You know what Vitek would do to you if he heard you were eyeing his sister?"');
                                          scene.text('"Yeah yeah, but I bet she\'s so fucking horny that she\'d let you do anything you want to her. It would be totally worth it!"');
                                        } else {
                                          if (((s as any).chat_rand ?? 0) === 21) {
                                            scene.text('"Dude, you missed it. The other day Anushka goes up to the teacher during class and leans over his desk to ask him a question. While she\'s doing it, she pulls up her skirt and pulls her panties down, mooning the whole class."');
                                            scene.text('"Damn. Did you take a picture?"');
                                          } else {
                                            if (((s as any).chat_rand ?? 0) === 22) {
                                              scene.text('"If I have to hear one more time about how much harder the city is, how much more badass everyone is and how lame Pavlovsk is, I think I\'m going to punch Arkadi in the face."');
                                              scene.text('"Yeah, and he\'ll beat the shit out of you and likely stick his drum sticks up your ass for good measure if you give him any lip."');
                                            } else {
                                              if (((s as any).chat_rand ?? 0) === 23) {
                                                scene.text('"Ever since I smiled at Vicky, I\'ve had Vanya glaring at me everywhere I go."');
                                              } else {
                                                if (((s as any).chat_rand ?? 0) === 24) {
                                                  scene.text('"Did you see Bella in gym class?"');
                                                  scene.text('"Of course I did. There wasn\'t a guy there who didn\'t have a boner!"');
                                                } else {
                                                  if (((s as any).chat_rand ?? 0) === 25) {
                                                    scene.text('"I bet Zinaida has some big ones hiding under that baggy shirt."');
                                                  } else {
                                                    if (((s as any).chat_rand ?? 0) === 26) {
                                                      scene.text('"Dan!"');
                                                      scene.text('"Not so loud, Vasily!"');
                                                      scene.text('"How much did we drink last night?"');
                                                      scene.text('"Too much. Why?"');
                                                      scene.text('"I think we fucked Pauline."');
                                                      scene.text('"What makes you think that?"');
                                                      scene.text('"When I saw her this morning she punched me."');
                                                    } else {
                                                      if (((s as any).chat_rand ?? 0) === 27) {
                                                        scene.text('"Do you remember that girl who left the disco with Dimka yesterday?"');
                                                        scene.text('"Which girl?"');
                                                        scene.text('"I don\'t know her name. Zina or Zinaida or something. You know, the nerdy girl who doesn\'t brush her hair or go out?"');
                                                        scene.text('"Oh, uh… I guess? I was kind of drunk."');
                                                        scene.text('"You don\'t remember anything, do you?"');
                                                        scene.text('"Oh no, I remember… She left with Dimka, sure… So?"');
                                                        scene.text('"Well, she looked weird this morning. Weirder than usual, I mean."');
                                                        scene.text('"Like I-let-the-hottest-guy-in-school-pop-my-cherry weird?"');
                                                        scene.text('"No, actually, she looked like… I don\'t know. She kept looking at Dimka like she was scared of him."');
                                                        scene.text('"Maybe <i>you\'re</i> still drunk. Why would anybody be scared of Dimka?"');
                                                      } else {
                                                        if (((s as any).chat_rand ?? 0) === 28) {
                                                          scene.text('"I\'m serious! That chess nerd hacked my computer!"');
                                                          scene.text('"How would he even do that?"');
                                                          scene.text('"I have no idea, but I know it was him."');
                                                          scene.text('"How can you tell?"');
                                                          scene.text('"All of my porn was gone and there was a text that said he would send it to my mom if I harassed him again."');
                                                          scene.text('"So why don\'t you go over there and show him what happens if he does? You\'re not scared of him, are you?"');
                                                          scene.text('"No, of course not!"');
                                                          scene.text('"… You\'re scared of your mother, aren\'t you?"');
                                                          scene.text('"… She hits a lot harder than she looks."');
                                                        } else {
                                                          if (((s as any).chat_rand ?? 0) === 29) {
                                                            scene.text('"And you\'re sure it\'s her?"');
                                                            scene.text('"Absolutely, I saw her checking her ranking on her phone: Zinaida is ZindaRella2000."');
                                                            scene.text('"Wow… I never would have guessed that she\'s a Challenger tier League of Legends player."');
                                                            scene.text('"And that\'s not the only game I found her in. I found her in Counter Strike too. That\'s the amazing thing here: She doesn\'t look like it, but she\'s just raking in that prize money."');
                                                            scene.text('"I wouldn\'t be surprised if her family didn\'t know about it. Just look at how fucked up her parents are. Natasha and Petia would probably mooch off of her all day, if they aren\'t doing it already."');
                                                          } else {
                                                            if (((s as any).chat_rand ?? 0) === 30) {
                                                              scene.text('"Did you check out that picture I sent you yesterday?"');
                                                              scene.text('"No, I couldn\'t. My phone died and my mom hogged the charger all damn evening. Why?"');
                                                              scene.text('"Why?! Dude, it was a picture of Irina in her underwear!"');
                                                              scene.text('"WHAT?! Are you serious?"');
                                                              scene.text('"Dead serious!"');
                                                              scene.text('"How the hell did you get that?"');
                                                              scene.text('"I found it on some glamour model site. At first I thought it was just a lookalike, but it\'s her, I\'m sure of it."');
                                                              scene.text('"Is that even legal?"');
                                                              scene.text('"Don\'t know and don\'t care. What, are you telling me you\'d report her for showing off her great ass and tits in lingerie?"');
                                                              scene.text('"Hell no… Damn, I can\'t wait to get home and charge my phone!"');
                                                            } else {
                                                              if (((s as any).chat_rand ?? 0) === 31) {
                                                                scene.text('"I saw Dan yesterday, making out with a girl behind school!"');
                                                                scene.text('"So? Big deal. I\'d be more surprised if he <i>wasn\'t</i> trying to fuck somebody."');
                                                                scene.text('"You didn\'t ask me who the girl was…"');
                                                                scene.text('"Fine… Who was the girl?"');
                                                                scene.text('"Lena."');
                                                                scene.text('"Vitek\'s sister?!"');
                                                                scene.text('"Yep."');
                                                                scene.text('"Holy shit! I mean, Lena is a bit of a slut, but if Vitek finds out, he\'s gonna kill him."');
                                                              } else {
                                                                if (((s as any).chat_rand ?? 0) === 32  &&  ((s as any).fedorKozlovQW ?? 0) <= -10) {
                                                                  scene.text('"I can\'t believe what happened to Fedor."');
                                                                  scene.text('"I know. All of that because he tried to hit on Vitek\'s girl."');
                                                                  scene.text('"I can\'t really blame him I guess. She is hot."');
                                                                  scene.text('"You better be careful. If Vitek hears you say that…"');
                                                                  scene.text('"Say what? I didn\'t say anything."');
                                                                } else {
                                                                  if (((s as any).chat_rand ?? 0) === 33  &&  ((s as any).fedorKozlovQW ?? 0) <= -10) {
                                                                    scene.text('"I never took Fedor for a cocksucker, but it does explain why he used to spend so much time with Ivan. You don\'t think Ivan is…"');
                                                                    scene.text('"No way! After Fedor sucked Vasily\'s dick, Ivan punched the first guy who asked him "Isn\'t that your friend?""');
                                                                    scene.text('"Whoa. I\'m glad I didn\'t ask him that. You might have just saved me from a broken jaw."');
                                                                    scene.text('"Speaking of broken jaws, we should probably stop talking before he hears us."');
                                                                  } else {
                                                                    if (((s as any).chat_rand ?? 0) === 34  &&  ((s as any).fedorKozlovQW ?? 0) === -15  &&  ((s as any).kotovLoveQW ?? 0) > 0) {
                                                                      scene.text('"Do you feel like Fedor\'s been acting extremely odd since that day in the courtyard?"');
                                                                      scene.text('"Yeah, he dresses all emo and never talks to anyone."');
                                                                      // TODO-QSP: dynamic text: "I saw him after school the other day heading into the park with <<$pcs_firstnam...
                                                                      scene.text(`"I saw him after school the other day heading into the park with ${((s as any).pcs_firstname ?? 0)} following him."`);
                                                                      scene.text('"No way! Do you think they\'re still?"');
                                                                      scene.text('"I doubt they would be that crazy. Vitek would kill them both with his bare hands."');
                                                                      scene.text('"Don\'t forget that he also has connections with Vadim Bely."');
                                                                      scene.text('"You shouldn\'t talk about him. You remember the last guy that talked behind his back?"');
                                                                      scene.text('"They never did find his legs, did they? Umm, let\'s talk about something else now…"');
                                                                    } else {
                                                                      if (((s as any).chat_rand ?? 0) === 35) {
                                                                        scene.text('"Dude, you\'re not going to believe this. There\'s this chick in my class that\'s always letting me look down her shirt!"');
                                                                        scene.text('"Man, you\'re so full of shit!"');
                                                                      } else {
                                                                        if (((s as any).chat_rand ?? 0) === 36) {
                                                                          scene.text('"I heard that Anushka and Alyona sometimes like to run around the school naked after lessons are over."');
                                                                          scene.text('"Really? They\'re so hot! Maybe I should hang around school for a while before going home."');
                                                                        } else {
                                                                          if (((s as any).chat_rand ?? 0) === 37) {
                                                                            scene.text('"I heard Lariska sometimes does a striptease for the jocks after school."');
                                                                            scene.text('"Really? God they\'re so lucky… I wish I was athletic enough to try out for sports. Lucky bastards get all the girls."');
                                                                          } else {
                                                                            if (((s as any).chat_rand ?? 0) === 38) {
                                                                              scene.text('"I went to see my cousin in Moscow this weekend and we were talking about girls."');
                                                                              scene.text('"So what\'s new about that? That\'s all you guys talk about."');
                                                                              scene.text('"Yeah, I know, but he told me that when he stayed here this summer, he noticed that things are different here."');
                                                                              scene.text('"Different? Different how?"');
                                                                              scene.text('"Well, he said Pavlovsk is like living in a porn movie or video game. That Moscow is nothing like this."');
                                                                              scene.text('The second boy laughs. "More like the girls there see through his bullshit and don\'t give him play."');
                                                                              scene.text('"Yeah, maybe, but I don\'t know. The girls are just different there. I mean, normally it isn\'t too hard to find a girl that will let you fuck her, but they\'re a lot more resistant there."');
                                                                              scene.text('"Well, what do you expect? It\'s Moscow, they\'re obsessed with being all prim and proper. It\'s not us that are different, it\'s them."');
                                                                              scene.text('"Hmm yeah, you\'re most likely right, but man it would be fun to live in a porn movie or video game though, wouldn\'t it?"');
                                                                              scene.text('"Fuck yeah it would!"');
                                                                            } else {
                                                                              if (((s as any).chat_rand ?? 0) === 39  &&  ((s as any).fame ?? 0)?.['pav_sex'] > 25) {
                                                                                if (((s as any).fame ?? 0)?.['pav_sex'] < 50) {
                                                                                  // TODO-QSP: dynamic text: "Did you know <<$pcs_nickname>> is a huge tease? I heard she just undressed righ...
                                                                                  scene.text(`"Did you know ${((s as any).pcs_nickname ?? 0)} is a huge tease? I heard she just undressed right in front of someone lately!"`);
                                                                                  scene.text('"No way! How do you know?"');
                                                                                  scene.text('"A friend of mine told me! He saw her take all her clothes off, one item at a time!"');
                                                                                  scene.text('"Wow, what a lucky bastard! She\'s hot!"');
                                                                                } else {
                                                                                  if (((s as any).fame ?? 0)?.['pav_sex'] < 75) {
                                                                                    // TODO-QSP: dynamic text: "I heard <<$pcs_nickname>> is great at sucking dick!"
                                                                                    scene.text(`"I heard ${((s as any).pcs_nickname ?? 0)} is great at sucking dick!"`);
                                                                                    scene.text('"No way! She seems like such a decent girl! How do you know?"');
                                                                                    scene.text('"A friend of mine told me. He said it\'s the best head he ever had!"');
                                                                                    scene.text('"Come on man, for real?"');
                                                                                    scene.text('"I swear, it\'s true! Maybe he\'ll shoot us a video next time…"');
                                                                                  } else {
                                                                                    if (((s as any).fame ?? 0)?.['pav_sex'] < 100) {
                                                                                      // TODO-QSP: dynamic text: "They say <<$pcs_nickname>> took part in a blowbang recently!"
                                                                                      scene.text(`"They say ${((s as any).pcs_nickname ?? 0)} took part in a blowbang recently!"`);
                                                                                      scene.text('"What, really? How did she even get in that situation?"');
                                                                                      scene.text('"Apparently, she just got down on her knees and told all the guys to gather around her in a circle!"');
                                                                                      scene.text('"Wow, what a slut! I can\'t believe it."');
                                                                                      scene.text('"I know, right!?"');
                                                                                      (s as any).SchoolGossip = ((s as any).SchoolGossip ?? 0) + (1);
                                                                                    } else {
                                                                                      if (((s as any).fame ?? 0)?.['pav_sex'] < 125) {
                                                                                        // TODO-QSP: dynamic text: "I heard <<$pcs_nickname>> got gangbanged just the other day!"
                                                                                        scene.text(`"I heard ${((s as any).pcs_nickname ?? 0)} got gangbanged just the other day!"`);
                                                                                        scene.text('"Wow, she just let that happen?"');
                                                                                        scene.text('"Oh yeah, she was even encouraging them! The guys were spinning her around every which way they liked and fucked her, no holes barred!"');
                                                                                        scene.text('"What a slut! Still, I wouldn\'t mind getting in on that next time."');
                                                                                        scene.text('"Heh, you and me both! Maybe after gym class one day."');
                                                                                        (s as any).SchoolGossip = ((s as any).SchoolGossip ?? 0) + (1);
                                                                                      } else {
                                                                                        if (((s as any).fame ?? 0)?.['pav_sex'] < 150) {
                                                                                          // TODO-QSP: dynamic text: "Man, <<$pcs_nickname>> is such a washed up whore."
                                                                                          scene.text(`"Man, ${((s as any).pcs_nickname ?? 0)} is such a washed up whore."`);
                                                                                          scene.text('"I know, right? It\'s kind of sad, really."');
                                                                                          scene.text('"Sad, but kind of hot at the same time. I wouldn\'t mind getting a piece. She must be great in the sack with how often she gets fucked."');
                                                                                          scene.text('"If you can even feel anything. She must be so stretched out by now."');
                                                                                          (s as any).SchoolGossip = ((s as any).SchoolGossip ?? 0) + (1);
                                                                                        } else {
                                                                                          // TODO-QSP: dynamic text: "<<$pcs_nickname>> is such a washed up whore. She'll do anything for money nowad...
                                                                                          scene.text(`"${((s as any).pcs_nickname ?? 0)} is such a washed up whore. She'll do anything for money nowadays."`);
                                                                                          scene.text('"Yeah, it\'s sad. She used to be such a nice girl."');
                                                                                          // TODO-QSP: dynamic text: "Totally. Very sad. So, can you loan me <<$func('money', 'format', 200)>>?"
                                                                                          scene.text(`"Totally. Very sad. So, can you loan me ${qspFunc(s, 'money', 'format', 200)}?"`);
                                                                                          scene.text('"Dude, seriously!? Why would you even want to touch her at all? You\'d just boldly go where every man has gone before!"');
                                                                                          // TODO-QSP: dynamic text: "Come on man, I'm in a bit of a dry spell. Please? I'll try to negotiate you in ...
                                                                                          scene.text(`"Come on man, I'm in a bit of a dry spell. Please? I'll try to negotiate you in on the deal. Surely ${qspFunc(s, 'money', 'format', 200)} is enough for two."`);
                                                                                          scene.text('"That\'s sick, but I like it. Alright, I\'m in."');
                                                                                          (s as any).SchoolGossip = ((s as any).SchoolGossip ?? 0) + (1);
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              } else {
                                                                                if (((s as any).chat_rand ?? 0) === 40) {
                                                                                  scene.text('"I heard that the cheerleaders have lesbian orgies with each other in the locker room."');
                                                                                  scene.text('"Are you for real? I wish I could watch Albina eating Bella\'s pussy. That would be so fucking hot!"');
                                                                                  scene.text('"Tell me about it. Maybe they make Lariska lick them all out?"');
                                                                                  scene.text('They nod at each other as they debate over who the hottest cheerleader is.');
                                                                                } else {
                                                                                  if (((s as any).chat_rand ?? 0) === 41) {
                                                                                    scene.text('"I wish I could do sports. The cheerleaders fuck the football team after every game."');
                                                                                    scene.text('"What? No way!"');
                                                                                    scene.text('"So I heard. They just walk right into the girls locker room and all the girls just drop to their knees and blow them."');
                                                                                    scene.text('"Shit. What I would do to have one of those well-toned chicks suck my dick. Those uniforms make them look so fucking sexy."');
                                                                                    scene.text('"Too right man, too fucking right."');
                                                                                  } else {
                                                                                    if (((s as any).chat_rand ?? 0) === 42) {
                                                                                      scene.text('"Hey man, you want to go to the next football game?"');
                                                                                      scene.text('"I\'m not interested in football."');
                                                                                      scene.text('"I\'m not talking about the game. I\'m going there to watch Bella do her stuff. I know a good spot in the stands where you can get a nice view of that toned ass."');
                                                                                      scene.text('"Oh I\'m definitely down to see that!"');
                                                                                    } else {
                                                                                      if (((s as any).chat_rand ?? 0) === 43) {
                                                                                        scene.text('You overhear two boys speaking to each other.');
                                                                                        scene.text('"I heard Albina\'s ass is fake and that her dad paid for implants."');
                                                                                        scene.text('The other boy laughs. "Oh believe me, it\'s real. It\'s too firm to be fake."');
                                                                                        scene.text('"How would you know? She\'d break your arm if you tried to cop a feel."');
                                                                                        scene.text('"I\'ve watched her enough in gym class. Trust me, it\'s solid, toned muscle."');
                                                                                      } else {
                                                                                        if (((s as any).chat_rand ?? 0) === 44) {
                                                                                          scene.text('You overhear two boys speaking to each other.');
                                                                                          scene.text('"The things I\'d do to have a shot with Albina…" one says with a grin. "Wouldn\'t you love to put your junk in her trunk?"');
                                                                                          scene.text('His friend looks in Albina\'s direction. "Even just copping a feel of that ass would be heaven! How does Lazar do it?"');
                                                                                        } else {
                                                                                          if (((s as any).chat_rand ?? 0) === 45) {
                                                                                            scene.text('As you walk down the hallway, you overhear a group of boys from another class whispering at each other.');
                                                                                            scene.text('"I don\'t know, she\'s kind of scary…" one of them says, looking rather nervous.');
                                                                                            scene.text('"You lost the bet, dude. Loser has to hit on her," his friend replies and pushes him towards Albina.');
                                                                                            scene.text('"Uh, hey… Do you wear space pants to gym class…? Because your ass is out of this world…" he asks with a crack in his voice, but still making a cringy attempt to act smooth by leaning against the locker.');
                                                                                            scene.text('Albina\'s not impressed by his poor attempt at flirting and gives him a dirty look, causing the boy to quickly flee. You\'ve never seen anyone run so fast in your life.');
                                                                                          } else {
                                                                                            qspCall(s, 'gschool_gossip', 'boys', ((s as any).locArgs?.[1] ?? 0));
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
  if (((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 13) {
    scene.text('You find Natasha in the hallway and have a little chat. Dimka is nowhere to be seen; you smile, thinking about what that means.');
  }
  scene.build();
}

function enterGirls(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/girls_gossip1.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  (s as any).chat_rand = Math.floor(Math.random() * 43) + 1;
  if (((s as any).chat_rand ?? 0) === 1) {
    scene.text('"I quit volleyball."');
    scene.text('"Why?"');
    scene.text('"The coach spent the whole time at the back of the court looking at my butt! I know I shouldn\'t have worn a thong, but it was a bet and I needed the cash."');
  } else {
    if (((s as any).chat_rand ?? 0) === 2) {
      scene.text('"I\'m going to stop getting into trouble. I got sent to the principal again yesterday and my butt\'s still sore."');
      scene.text('"It\'s not that bad. I actually kind of like it."');
      scene.text('"Wha… Never mind, I don\'t want to know. All I know is I\'ve been there so much, she uses a paddle on me now."');
      scene.text('"Really?" she asks, sounding excited. "I mean that sounds terrible… What kind of paddle?"');
    } else {
      if (((s as any).chat_rand ?? 0) === 3) {
        scene.text('"I was almost raped in the park the other day by some guys trying to get me to drink with them."');
      } else {
        if (((s as any).chat_rand ?? 0) === 4) {
          scene.text('"Some perv at the market tried to get me to go home with him for a free purse."');
        } else {
          if (((s as any).chat_rand ?? 0) === 5) {
            scene.text('"My mother sent me to the therapist last week and he put me under hypnosis. When I woke up I felt great, but my mouth tasted foul. I think I\'m allergic to hypnosis or something…"');
          } else {
            if (((s as any).chat_rand ?? 0) === 6) {
              scene.text('"I was taking a shower at the center after training and saw the volleyball coach in the girls shower room, skulking around like a perv."');
            } else {
              if (((s as any).chat_rand ?? 0) === 7) {
                scene.text('"I saw Ivan training at the center the other night. He was all sweaty and I seriously thought about going up and talking to him. He\'s so sexy…"');
              } else {
                if (((s as any).chat_rand ?? 0) === 8) {
                  scene.text('"I asked Mr. Ivanov for some help on my assignment and the asshole felt me up. When I called him on it, he threatened to have me expelled for telling lies."');
                  scene.text('"I know, I was picking up my book in his class after I dropped it and he grabbed my ass. When I protested, he told me the same thing."');
                } else {
                  if (((s as any).chat_rand ?? 0) === 9) {
                    scene.text('"If you have a secret, don\'t tell Lizaveta about it. I told her about I gave my boyfriend a blowjob and before the day was over, everyone knew about it. What a bitch."');
                  } else {
                    if (((s as any).chat_rand ?? 0) === 10) {
                      scene.text('"Ivan is such a hottie! It\'s a shame he doesn\'t want a girlfriend. I would totally be his girlfriend, but no matter who asks, he always says no."');
                      scene.text('"Maybe he\'s gay?"');
                      scene.text('Her friend giggles. "No, he likes fucking girls, but just as friends."');
                    } else {
                      if (((s as any).chat_rand ?? 0) === 11) {
                        scene.text('"Lazar is kind of cute."');
                        scene.text('"Yeah and he has a huge dick. Biggest one I\'ve ever seen, even bigger than the guys in pornos."');
                        scene.text('"When did you see it?"');
                        scene.text('"Some of us went skinny dipping one night over the summer and oh my god, it was scary big."');
                        scene.text('"Well no wonder so many girls go slutting it up around him. I wonder if it would hurt or feel great…"');
                      } else {
                        if (((s as any).chat_rand ?? 0) === 12) {
                          scene.text('"Did you hear what happened to Petka?"');
                          scene.text('"No, what?"');
                          scene.text('"Some of the boys grabbed him while he was in the shower and threw him out of the boys locker room naked, just as us girls were leaving. There he was, completely naked before he covered himself up and ran back into the locker room."');
                          scene.text('"Poor guy, boys can be so mean."');
                          scene.text('"I know, right? Oh and he has a really little dick!"');
                        } else {
                          if (((s as any).chat_rand ?? 0) === 13) {
                            scene.text('"Radomir is so good looking and is so talented. I wish he would ask me out."');
                            scene.text('"I don\'t know about that. I heard after he fucks a girl a few times, he dumps her."');
                          } else {
                            if (((s as any).chat_rand ?? 0) === 14) {
                              scene.text('"Roman has a huge dick."');
                              scene.text('"How would you know? Don\'t tell me you…"');
                              scene.text('"No, nothing like that. I was kneeling down tying my shoe the other day and he walked up and said while I was down there, I might as well suck his dick. I look up and he has his dick out right in my face."');
                              scene.text('"Oh my god, what did you do?"');
                              scene.text('"I got away from him! He\'s a crazy little fucker, no telling what he might do. But it was huge, like the size of a horse."');
                              scene.text('"A horse? Really? Wow… huh…"');
                            } else {
                              if (((s as any).chat_rand ?? 0) === 15) {
                                scene.text('"Did you hear Valentin has a huge dick? Like, as big as my forearm."');
                                scene.text('"Someone else told me that. They said something about a picture."');
                                scene.text('"Yeah, my sister and her friends went to see them play and during one of the sets, some slut climbs up on stage and just pulled his dick out and started sucking it right there on stage while the band kept playing. My sister took a picture and she sent it to me. It almost didn\'t fit in the sluts mouth it was so big."');
                              } else {
                                if (((s as any).chat_rand ?? 0) === 16) {
                                  scene.text('"I kind of feel sorry for Lena. She can\'t date any guys because Vitek keeps chasing them off."');
                                  scene.text('"Yeah, I think she would be a lot nicer if he would just let her date a nice guy."');
                                } else {
                                  if (((s as any).chat_rand ?? 0) === 17) {
                                    scene.text('"Have you seen the way Lera looks at Lena? She\'s clearly in love."');
                                    scene.text('"Who could miss it? What a total lesbo."');
                                  } else {
                                    if (((s as any).chat_rand ?? 0) === 18) {
                                      scene.text('"Did you see the picture of Petia\'s little dick?" she says with a giggle.');
                                      scene.text('"Who hasn\'t? But why did he take it?"');
                                      scene.text('"I heard he sent it to Katja and when she almost threw up, he said it was an accident."');
                                    } else {
                                      if (((s as any).chat_rand ?? 0) === 19) {
                                        scene.text('"I wish Anushka would wear a towel or something in the locker room. I\'m tired of her constantly walking around naked."');
                                        scene.text('"Well, she <i>is</i> bisexual. I bet she\'s trying to get the other girls to look at her."');
                                        scene.text('"I don\'t know, I think she just likes being naked. She flashes her tits at tourists in the park too."');
                                      } else {
                                        if (((s as any).chat_rand ?? 0) === 20) {
                                          scene.text('"Anushka is a total slut."');
                                          scene.text('"More like a nympho. I heard she cuts at least one class a day to go and fuck someone in the bathrooms."');
                                          scene.text('"Well, I heard she\'s fucking all the gopniks, even most of the girls."');
                                        } else {
                                          if (((s as any).chat_rand ?? 0) === 21) {
                                            scene.text('"I think Evgeny might be autistic. All he cares about is chess. During gym class, all the boys were looking at me, except him."');
                                            scene.text('"Maybe he just doesn\'t find you attractive."');
                                            scene.text('"That\'s impossible!"');
                                          } else {
                                            if (((s as any).chat_rand ?? 0) === 22) {
                                              scene.text('"Will you sit with me in science class tomorrow?"');
                                              scene.text('"I don\'t know. I might skip it."');
                                              scene.text('"Please don\'t! Last time, I had to sit with Vasily and he kept telling me I should show more of my \'titties\'."');
                                            } else {
                                              if (((s as any).chat_rand ?? 0) === 23) {
                                                scene.text('"Irina can be such a bitch. I asked her for some beauty tips and she told me nothing I do will make me look as good as her."');
                                              } else {
                                                if (((s as any).chat_rand ?? 0) === 24) {
                                                  scene.text('"I keep trying to get Dimka to notice me, but he doesn\'t know I exist."');
                                                  scene.text('"Maybe you could go out with Igor, then he\'d have to talk to you."');
                                                  scene.text('"Igor? He looks just like my sister!"');
                                                  scene.text('"Yeah, you got the looks in your family."');
                                                } else {
                                                  if (((s as any).chat_rand ?? 0) === 25) {
                                                    scene.text('"Hey sis, we need to talk."');
                                                    scene.text('"About what?"');
                                                    scene.text('"I thought I saw you kissing Vanya."');
                                                    scene.text('"Did I see you kissing your friend?"');
                                                    scene.text('"Never mind."');
                                                  } else {
                                                    if (((s as any).chat_rand ?? 0) === 26) {
                                                      scene.text('"I was in a classroom last lunch time with Vitek, letting his hands wander, when I turn around and Julia is sitting there. We didn\'t see her and she didn\'t say anything. Totally ruined the moment."');
                                                    } else {
                                                      if (((s as any).chat_rand ?? 0) === 27) {
                                                        scene.text('"I was watching the hockey game and that Svyatoslav really fills a pair of shorts."');
                                                        scene.text('"Pauline! Get your mind out of the gutter. No wonder you don\'t have any friends."');
                                                      } else {
                                                        if (((s as any).chat_rand ?? 0) === 28) {
                                                          scene.text('"I caught Artem looking at your butt during class."');
                                                          scene.text('"Artem? I thought he was gay."');
                                                          scene.text('The girls turn to Artem, who blushes and turns away.');
                                                          scene.text('"Wow, I guess he does look at my butt."');
                                                        } else {
                                                          if (((s as any).chat_rand ?? 0) === 29) {
                                                            scene.text('"You\'ve been giggling since the break! What\'s going on with you?"');
                                                            scene.text('"I accidentally walked into the boy\'s bathroom," her friend says before she starts giggling.');
                                                            scene.text('"So?"');
                                                            scene.text('"I ran into Igor while he was taking a piss."');
                                                            scene.text('"And?"');
                                                            scene.text('The girl can\'t speak. She just holds up her hands, keeping them very close together and has to fight the urge to break into laughter. It dawns on the other girl what she\'s trying to tell her and she starts giggling too.');
                                                          } else {
                                                            if (((s as any).chat_rand ?? 0) === 30) {
                                                              scene.text('"Don\'t you think it\'s weird that Fedor keeps training with Ivan without getting jealous?"');
                                                              scene.text('"A little bit. But hey, I still hang out with you, and you\'re much better at putting on make-up than me."');
                                                              scene.text('"That\'s different… Maybe Fedor is gay."');
                                                              scene.text('"Fedor? Gay? Get real."');
                                                              scene.text('"Well, what if he is? It would explain so much."');
                                                              scene.text('"You\'re just pissed he shot you down when you flirted with him."');
                                                              scene.text('"And why would he have done that if he wasn\'t gay? I\'m telling you, something\'s wrong with him."');
                                                              if (((s as any).fedorKozlovQW ?? 0) >= 20) {
                                                                scene.actions([
                                                                  { label: 'Tell them off', handler: (st: GameState) => {
    scene.text('You cut it on the conversation. "What are you talking about? You better not be talking shit about my boyfriend, especially behind his back!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } },
                                                                ]);
                                                              }
                                                            } else {
                                                              if (((s as any).chat_rand ?? 0) === 31  &&  ((s as any).fedorKozlovQW ?? 0) <= -10) {
                                                                scene.text('"It\'s such a shame what happened to Fedor."');
                                                                scene.text('"I know. He was so cute. I was thinking of asking him out."');
                                                                scene.text('"Boys can be so cruel to each other."');
                                                                scene.text('"I know, it\'s so sad. The only thing he did was go out with a girl he liked."');
                                                                scene.text('"I tried to talk to him after school, but he ignored me and stormed off towards the park."');
                                                                scene.text('"Hmm, I wonder what he does there?"');
                                                              } else {
                                                                if (((s as any).chat_rand ?? 0) === 32) {
                                                                  scene.text('You overhear some of the girls gossip with each other. "Which of the boys in the class do you think is the most feminine?" one of them asks.');
                                                                  scene.text('"I don\'t know, I haven\'t really thought about it," the other one answers.');
                                                                  scene.text('"Don\'t be a drag, you have to pick one!" she keeps on pushing.');
                                                                  scene.text('The other girl thinks for a second before answering. "I would say Igor. Sometimes he acts really strange and not like a real man."');
                                                                  scene.text('"You\'re right, I haven\'t really been thinking about it, but I\'ve heard he sits down while peeing, just like a girl."');
                                                                  scene.text('The two girls laugh and continue gossiping as you move away from them.');
                                                                } else {
                                                                  if (((s as any).chat_rand ?? 0) === 33  &&  ((s as any).IgorQW ?? 0)?.['DimaNos'] > 1) {
                                                                    if (((s as any).IgorQW ?? 0)?.['DimaNos'] >= 3) {
                                                                      scene.text('"Have you seen the girl Dimka has been seen with lately?"');
                                                                      scene.text('"Yeah, I saw them holding hands in town. They\'re quite cute together."');
                                                                      scene.text('"But don\'t you think she looks kind of manly?"');
                                                                      scene.text('"What do you mean?"');
                                                                      scene.text('"Well, just look at her physique. She\'s either working out a lot or there\'s something else wrong with her."');
                                                                      scene.text('"Now that you mention it, she does look a bit butch…"');
                                                                      scene.text('You laugh to yourself as you move away. If they only knew…');
                                                                    }
                                                                  } else {
                                                                    if (((s as any).chat_rand ?? 0) === 34) {
                                                                      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7  &&  ((s as any).NatbelQW ?? 0)?.['QWstage'] <= 2) {
                                                                        scene.text('"Natasha asked me where I bought my top earlier and I had to stop myself from laughing in her face."');
                                                                        scene.text('"Why?"');
                                                                        scene.text('"Because she could never afford it! Why would she even bother asking? Does she not realize her mom is dirt poor?"');
                                                                      } else {
                                                                        scene.text('"Where did Natasha get that new uniform? Isn\'t her mom dirt poor?"');
                                                                        // TODO-QSP: dynamic text: "She's been hanging around a lot with <<$pcs_nickname>> recently. Maybe she's bu...
                                                                        scene.text(`"She's been hanging around a lot with ${((s as any).pcs_nickname ?? 0)} recently. Maybe she's buying stuff for her?"`);
                                                                        scene.text('"I guess so. I wonder if they\'re more than friends?"');
                                                                        scene.text('"If you find out, then let me know."');
                                                                      }
                                                                    } else {
                                                                      if (((s as any).chat_rand ?? 0) === 35) {
                                                                        scene.text('"I left my sweater in my locker yesterday, you know the one. Anyway, I came back to school to get it and I saw Anushka running down the hall stark naked."');
                                                                        scene.text('The other girl laughs. "Yeah, I\'m honestly surprised she hasn\'t done it during school yet. I swear that girl doesn\'t like wearing clothes."');
                                                                        scene.text('"What a weirdo. I bet she hopes some guys jump her or something."');
                                                                        scene.text('"I don\'t know about that. I saw one of the guys get all handsy with her at the disco and she punched him in the face and broke his nose."');
                                                                        scene.text('"Really? I heard she was a slut." They go back and forth, debating if Anushka is a tease or a slut.');
                                                                      } else {
                                                                        if (((s as any).chat_rand ?? 0) === 36) {
                                                                          scene.text('"Ugh, I\'m always getting hit on by these random weirdos whenever I\'m in town!"');
                                                                          scene.text('"That\'s because you\'re, like, so beautiful! Who wouldn\'t want to date you?"');
                                                                        } else {
                                                                          if (((s as any).chat_rand ?? 0) === 37) {
                                                                            scene.text('"Ever noticed how all the boys think about sex, all the time?"');
                                                                            scene.text('"What do you expect? They\'re boys."');
                                                                            scene.text('A third girl chimes in. "Yeah, like you two aren\'t obsessed about it too!"');
                                                                            scene.text('"Shut up and speak for yourself!" the second one replies.');
                                                                            scene.text('"Hey, I admit I think about it all the time too, but I heard it\'s because Baba Yaga cursed the area long ago," the third girl replies.');
                                                                            scene.text('"Really? How so?" the first girl asks.');
                                                                            scene.text('"Well, supposedly way back, some villagers in the area had some young couple distract Baba Yaga by pretending they were about to have an orgy. Meanwhile, others snuck into her hut and stole a bunch of her food. When Baba Yaga realized what they\'d done, she cursed everyone, all their descendants and all who would ever live here to forever lust for one another."');
                                                                            scene.text('"That\'s crazy!" the second girl says, but she only sounds half convinced.');
                                                                            scene.text('"Or that means it\'s not our fault how we feel," the first girl replies and they all go quiet as they think about it, likely liking the idea it\'s someone else\'s fault for their lusty thoughts.');
                                                                          } else {
                                                                            if (((s as any).chat_rand ?? 0) === 38) {
                                                                              scene.text('"Sooo, I\'ve got a secret to tell you, but make sure not to spread it to anyone else," one girl whispers to another. "You know I\'ve been obsessed with Ivan lately…"');
                                                                              scene.text('The other girl nods, inattentively listening to her friend. "Come on, tell me…"');
                                                                              scene.text('The girl looks carefully around. "So I saw Ivan and Fedor last weekend. They were going towards the beach. I didn\'t dare to follow them to see what they were up to."');
                                                                              scene.text('The other girl lets out a squeal. "We\'re sooo going to meet up this weekend and see if they\'re heading there again."');
                                                                            } else {
                                                                              if (((s as any).chat_rand ?? 0) === 39) {
                                                                                scene.text('"Those snooty bimbos just love dressing up like sluts and dancing for that field of perverts. Sluts don\'t care if those pervs are looking at their butts and undressing them with their eyes!"');
                                                                                scene.text('"Not so loud! Do you want them to hear you? Who knows what they would do to you if they found out you said that?!"');
                                                                              } else {
                                                                                if (((s as any).chat_rand ?? 0) === 40  &&  ((s as any).cheerleadingQW ?? 0)?.['quest_stage'] !== 0) {
                                                                                  scene.text('"I\'m wondering whether I should\'ve tried out for the cheerleading squad or not."');
                                                                                  scene.text('"Yeah, I\'m sure that they would\'ve invited your unfit ass with open arms. Besides, they\'re a bunch of sluts who enjoy teasing the perverts in the stands and sucking off the football team."');
                                                                                  scene.text('"Maybe I did dodge a bullet then…"');
                                                                                } else {
                                                                                  if (((s as any).chat_rand ?? 0) === 41) {
                                                                                    scene.text('"I might work out more. I want a big butt just like Albina\'s!"');
                                                                                    scene.text('"Girl please. Her ass is as fake as her \'sweet girl\' personality."');
                                                                                    scene.text('"I dare you to say that to her face!"');
                                                                                    scene.text('The girl turns silent.');
                                                                                    scene.text('"Yeah, that\'s what I thought…" the first one quips.');
                                                                                  } else {
                                                                                    if (((s as any).chat_rand ?? 0) === 42) {
                                                                                      scene.text('"I wonder how much Albina\'s butt implants cost?"');
                                                                                      scene.text('"Bitch, you\'re just jealous because you have such a flat ass!"');
                                                                                      scene.text('"I\'m too scared to ask her what workout she does to get such a nice butt!"');
                                                                                    } else {
                                                                                      if (((s as any).chat_rand ?? 0) === 43) {
                                                                                        scene.text('You overhear some girls whispering amongst themselves.');
                                                                                        scene.text('"I was told that Albina is a lesbian, which is why she doesn\'t like guys hitting on her," one says.');
                                                                                        scene.text('"Told by who?" a second one asks.');
                                                                                        scene.text('"Lizeveta. Although I also heard she sometimes skips class to hook with some of the hot guys in the bathroom."');
                                                                                      } else {
                                                                                        qspCall(s, 'gschool_gossip', 'girls', ((s as any).locArgs?.[1] ?? 0));
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
  if (((s as any).dimaRevenge ?? 0) === 4  &&  ((s as any).dimaRevChoice ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 13) {
    scene.text('You find Natasha in the hallway and have a little chat. Dimka is nowhere to be seen; you smile, thinking about what that means.');
  }
  scene.build();
}

function enterLizaveta(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/girls_gossip2.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  (s as any).chat_rand = Math.floor(Math.random() * 48) + 1;
  if (((s as any).chat_rand ?? 0) === 1) {
    scene.text('"I heard Andrey cheats on Stasya!"');
  } else {
    if (((s as any).chat_rand ?? 0) === 2) {
      scene.text('"Stasya is so in love with Andrey, she\'ll let him do anything to her, even lesbian stuff with other girls while he watches."');
    } else {
      if (((s as any).chat_rand ?? 0) === 3) {
        scene.text('"I heard some of the older kids have a party every week and it\'s all drinking and sex."');
      } else {
        if (((s as any).chat_rand ?? 0) === 4) {
          scene.text('"There\'s a porn star who looks just like you."');
        } else {
          if (((s as any).chat_rand ?? 0) === 5) {
            scene.text('"I was visiting a friend in the apartment complexes and saw a couple having sex right there in the stairwell!"');
          } else {
            if (((s as any).chat_rand ?? 0) === 6) {
              scene.text('"I heard the volleyball coach from the center is fucking one of the girls on the team."');
            } else {
              if (((s as any).chat_rand ?? 0) === 7) {
                scene.text('"I saw Ivan training at the center the other night, he was all sweaty and I seriously thought about going up and talking to him."');
              } else {
                if (((s as any).chat_rand ?? 0) === 8) {
                  scene.text('"Some perv at the market tried to get me to go home with him for a free purse."');
                } else {
                  if (((s as any).chat_rand ?? 0) === 9) {
                    scene.text('"I was taking a shower at the center after training and saw the volleyball coach in the girls shower room, skulking around like a perv."');
                  } else {
                    if (((s as any).chat_rand ?? 0) === 10) {
                      scene.text('"I heard Mr. Kuznetsov has a big dick. One of the girls was cutting class in the mens room and spied on him taking a piss. She said his dick nearly hung down to his knees."');
                    } else {
                      if (((s as any).chat_rand ?? 0) === 11) {
                        scene.text('"I heard Mr. Kuznetsov hates it here and was trying to get a transfer, but Miss Volkov blocked it and now they hate each other."');
                      } else {
                        if (((s as any).chat_rand ?? 0) === 12) {
                          scene.text('"A friend said her mom overheard Mrs. Tsarev telling someone that Mr. Tsarev has a little dick and that\'s why she won\'t have sex with him anymore."');
                        } else {
                          if (((s as any).chat_rand ?? 0) === 13) {
                            scene.text('"I heard Mr. Tsarev is not a happily married man and they might be getting a divorce."');
                          } else {
                            if (((s as any).chat_rand ?? 0) === 14) {
                              scene.text('"I heard Mr. Ivanov cornered one of the girls in the bathroom and threatened to have her expelled if she didn\'t suck his dick."');
                            } else {
                              if (((s as any).chat_rand ?? 0) === 15) {
                                scene.text('"Ivan is such a hottie. It\'s a shame he doesn\'t want a girlfriend. I would totally be his girlfriend, but no matter who asks, he always tells them no."');
                              } else {
                                if (((s as any).chat_rand ?? 0) === 16) {
                                  scene.text('"I heard Marcus\' dick is bigger than most girls arms and he has to tape it to his leg during gym class to keep it from falling out of his shorts."');
                                } else {
                                  if (((s as any).chat_rand ?? 0) === 17) {
                                    scene.text('"I heard Marcus tries to lure girls to the city, where he takes them to the university dorms and all the blacks gang bang her."');
                                  } else {
                                    if (((s as any).chat_rand ?? 0) === 18) {
                                      scene.text('"Did you hear what happened to Petka? Some of the boys grabbed him while he was in the shower and threw him out of the boys locker room naked, just as us girls were leaving. There he was, completely naked before he covered himself up and ran back into the locker room."');
                                    } else {
                                      if (((s as any).chat_rand ?? 0) === 19) {
                                        scene.text('"I wish Anushka would wear a towel or something in the locker room! I\'m tired of her constantly walking around naked."');
                                      } else {
                                        if (((s as any).chat_rand ?? 0) === 20) {
                                          scene.text('"I heard that Mr. Vasilyev is gay and that he came onto some of the guys after school."');
                                        } else {
                                          if (((s as any).chat_rand ?? 0) === 21) {
                                            scene.text('"I heard Miss Volkov has a drawer full of sex toys she\'s confiscated from students."');
                                          } else {
                                            if (((s as any).chat_rand ?? 0) === 22) {
                                              scene.text('"I heard Miss Volkov uses a strap-on on her students if she feels the paddle isn\'t working."');
                                            } else {
                                              if (((s as any).chat_rand ?? 0) === 23) {
                                                scene.text('"I heard Miss Volkov used to work as a Dominatrix and she still does on the weekends."');
                                              } else {
                                                if (((s as any).chat_rand ?? 0) === 24  &&  ((s as any).fedorKozlovQW ?? 0) <= -10) {
                                                  scene.text('"I heard, now that Fedor sucked Vasily\'s dick, that he is now gay and loves it."');
                                                } else {
                                                  if (((s as any).chat_rand ?? 0) === 25) {
                                                    scene.text('"I was in the city last week and saw Ms. Braakman at a club partying like crazy! I hear she\'s a total party animal who goes to the city on Friday night and doesn\'t come home until Sunday afternoon."');
                                                  } else {
                                                    if (((s as any).chat_rand ?? 0) === 26) {
                                                      scene.text('"I heard Ms. Braakman and her husband were swingers. Now she just goes to orgies."');
                                                    } else {
                                                      if (((s as any).chat_rand ?? 0) === 27) {
                                                        scene.text('"I heard Ms. Braakman killed her husband and made it look like an accident."');
                                                      } else {
                                                        if (((s as any).chat_rand ?? 0) === 28) {
                                                          scene.text('"A girl told me she went to the supply closet to get paper towels and found the janitor in there, jerking off."');
                                                        } else {
                                                          if (((s as any).chat_rand ?? 0) === 29) {
                                                            scene.text('"I heard the janitor goes through the girls lockers and steals their panties, if they leave them at school."');
                                                          } else {
                                                            if (((s as any).chat_rand ?? 0) === 30) {
                                                              scene.text('"I heard the janitor drilled a hole in the wall of the girls shower in the gym and spies on them when they take a shower."');
                                                            } else {
                                                              if (((s as any).chat_rand ?? 0) === 31) {
                                                                scene.text('"Did you hear what happened to Igor? He got his shorts pulled down in the middle of gym class. He has a tiny dick that isn\'t much bigger than a girl\'s clit!"');
                                                              } else {
                                                                if (((s as any).chat_rand ?? 0) === 32) {
                                                                  scene.text('"Lazar has a huge dick. Biggest one I\'ve ever seen, even bigger than the guys in pornos. I seen it when a bunch of us went skinny dipping last summer."');
                                                                } else {
                                                                  if (((s as any).chat_rand ?? 0) === 33) {
                                                                    scene.text('"Irina can be such a bitch. I asked her for some beauty tips and she told me nothing I do will make me look as good as her."');
                                                                  } else {
                                                                    if (((s as any).chat_rand ?? 0) === 34) {
                                                                      scene.text('"Some girl said Mefodiy has a big dick, so big she couldn\'t fit it all in her mouth."');
                                                                    } else {
                                                                      if (((s as any).chat_rand ?? 0) === 35) {
                                                                        scene.text('"I heard Anushka is a real honest to god nympho and if she isn\'t getting fucked three times a day, she isn\'t happy."');
                                                                      } else {
                                                                        if (((s as any).chat_rand ?? 0) === 36) {
                                                                          scene.text('"I heard Stasya hates Marcus and is trying to get him expelled."');
                                                                        } else {
                                                                          if (((s as any).chat_rand ?? 0) === 37) {
                                                                            scene.text('"I heard Albina whores out the girls in her dance troupe and that she\'s a madam."');
                                                                          } else {
                                                                            if (((s as any).chat_rand ?? 0) === 38) {
                                                                              scene.text('"I heard Ivan\'s dad skipped town when he was young and now his mom works two jobs to support him and his brother and sister."');
                                                                            } else {
                                                                              if (((s as any).chat_rand ?? 0) === 39) {
                                                                                scene.text('"I heard Lazar takes girls panties as trophies after he fucks them and has a box full of them at his house."');
                                                                              } else {
                                                                                if (((s as any).chat_rand ?? 0) === 40) {
                                                                                  scene.text('"I heard Erast is taking steroids and that\'s why he\'s so big and strong."');
                                                                                } else {
                                                                                  if (((s as any).chat_rand ?? 0) === 41) {
                                                                                    scene.text('"If Lariska wasn\'t such a total doormat letting people tell her what to do, she would make a great captain for the volleyball team."');
                                                                                  } else {
                                                                                    if (((s as any).chat_rand ?? 0) === 42) {
                                                                                      scene.text('"If Christina was half as good as she thinks she is, she would hold the women\'s world record for all track events."');
                                                                                    } else {
                                                                                      if (((s as any).chat_rand ?? 0) === 43) {
                                                                                        if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7) {
                                                                                          scene.text('"Natasha\'s mom must be super poor. She\'s wearing the same school uniform she had last year."');
                                                                                        } else {
                                                                                          scene.text('"Natasha\'s mom must be super poor. She was wearing the same school uniform she had last year, but now I see she\'s wearing a nice new one."');
                                                                                          scene.text('After a brief pause, she continues. "I\'ve noticed she\'s been hanging out a lot with you recently too. I actually think I saw you two holding hands in the park as well."');
                                                                                          scene.text('Knowing her reputation for gossip, you keep your response simple. "Yeah, she\'s helping me with schoolwork, so I got her some new clothes as thanks. Just being friendly…"');
                                                                                          scene.text('Deciding to end this conversation before it become too awkward, you make your excuses and leave.');
                                                                                        }
                                                                                      } else {
                                                                                        if (((s as any).chat_rand ?? 0) === 44) {
                                                                                          if (((s as any).NatbelQW ?? 0)?.['FriendLover'] < 7) {
                                                                                            // TODO-QSP: dynamic text: "Whatever you do, don't loan money to Natasha. She'll never pay you back. I lent...
                                                                                            scene.text(`"Whatever you do, don't loan money to Natasha. She'll never pay you back. I lent her ${qspFunc(s, 'money', 'format', 50)} and I doubt I'll ever see it again."`);
                                                                                          } else {
                                                                                            scene.text('"Natasha actually repaid me! I was starting to think she never would!"');
                                                                                            scene.text('After a brief pause, she continues. "I know she\'s been hanging out a lot with you recently. I actually think I saw you two holding hands in the park as well."');
                                                                                            scene.text('Knowing her reputation for gossip, you keep your response simple. "Yeah, she\'s helping me with schoolwork, so I helped her out since she was getting stressed about owing people. Just being friendly…"');
                                                                                            scene.text('Deciding to end this conversation before it become too awkward, you make your excuses and leave.');
                                                                                          }
                                                                                        } else {
                                                                                          if (((s as any).chat_rand ?? 0) === 45) {
                                                                                            scene.text('"Radomir acts like he\'s already the next Yuri Shatunov. I mean, he\'s okay, but he\'s nowhere near as good as he likes to think he is."');
                                                                                          } else {
                                                                                            if (((s as any).chat_rand ?? 0) === 46) {
                                                                                              scene.text('"Lera is a lesbian. All you have to do is watch how she looks at Lena or other girls in the locker room."');
                                                                                            } else {
                                                                                              if (((s as any).chat_rand ?? 0) === 47) {
                                                                                                scene.text('"I\'ve heard so many things about Albina\'s ass that I don\'t know what to tell people!"');
                                                                                              } else {
                                                                                                if (((s as any).chat_rand ?? 0) === 48) {
                                                                                                  scene.text('"I think Albina\'s a lesbian. Why else would she hate all the hot guys hitting on her?"');
                                                                                                } else {
                                                                                                  qspCall(s, 'gschool_gossip', 'Lizaveta', ((s as any).locArgs?.[1] ?? 0));
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

function enterSoniaDiscoGossip(s: GameState, scene: SceneBuilder): void {
  if (((s as any).soniaQW ?? 0)?.['soniafall'] === 1) {
    scene.text('"You should have seen Sonia at the disco."');
    scene.text('"Why? What happened?"');
    scene.text('"She kept getting drinks from the gopniks all night and when she was on the dance floor, she was grinding on anyone and everyone that wanted to dance with her. She got totally wasted, but one of the girls screwed it all up and took her home."');
    scene.text('"Damn! I can\'t believe I missed that."');
  } else {
    if (((s as any).soniaQW ?? 0)?.['soniafall'] === 2) {
      scene.text('"Sonia was at it again at the disco."');
      scene.text('"What? Again? When?"');
      scene.text('"Right after you left. She kept getting drinks from the gopniks all night again and when she was on the dance floor, she was grinding on anyone and everyone that wanted to dance with her. She got totally wasted again! Of course, one of the girls screwed it all up again and took her home."');
      scene.text('"Damn! I can\'t believe I missed that… Again."');
    } else {
      if (((s as any).soniaQW ?? 0)?.['soniafall'] === 3) {
        scene.text('"Sonia went off with some of the gopniks and came back totally wasted with one of her tits hanging out."');
        scene.text('"Are you kidding me?!"');
        scene.text('"No, it was really amazing. Of course, some girl eventually had to ruin it, but it was nice while it lasted."');
        scene.text('"Why does all of this keep happening when I\'m not there?!"');
      } else {
        if (((s as any).soniaQW ?? 0)?.['soniafall'] === 4) {
          scene.text('"Sonia went off with some of the gopniks at the disco and got totally wasted with them. She took off her top and flashed them all her tits."');
          scene.text('"No way! How do you know?"');
          scene.text('"It\'s true! Pauline took a video of her and I seen it."');
          scene.text('"Shit, I need to ask Pauline for a copy…"');
        } else {
          if (((s as any).soniaQW ?? 0)?.['soniafall'] === 5) {
            scene.text('"Sonia went off with some of the gopniks at the disco and got totally wasted with them. She took off her panties and flashed her pussy at them."');
            scene.text('"Fuck, are you serious?! I honestly can\'t believe Sonia would go that far! I know she\'s been acting slutty lately, but damn…"');
            scene.text('"Yeah, no shit. I always thought she was one of those good girls like Katja, but now she\'s worse than Vicky."');
            scene.text('"Did Pauline record it again?"');
            scene.text('"Yeah, she has a nice pussy."');
            scene.text('"Fuck, how do you always find out about this first? I need to see that video."');
          } else {
            if (((s as any).soniaQW ?? 0)?.['soniafall'] === 6) {
              scene.text('"Sonia went off with some of the gopniks at the disco and got totally wasted with them. She gave Vitek a blowjob!"');
              scene.text('"Lucky bastard. I guess she really is turning into a slut."');
              scene.text('"Totally. It\'s a shame since she was such a nice girl." He looks at his friend and sighs. "Yes, Pauline recorded it."');
              scene.text('"I didn\'t… Well if everyone has seen it, then I should too I guess…"');
            } else {
              if (((s as any).soniaQW ?? 0)?.['soniafall'] === 7) {
                scene.text('You see Sonia walking down the hall ahead of you with her head down. Some people are laughing, many are jeering at her, and more than a few are calling her a slut. When they\'re not doing that, they\'re on their phones watching something. You get a ping on your phone and stop to pull it out.');
                scene.text('It\'s a message from Pauline with a video attached. You open the video, and to your shock, see Sonia getting gangbanged by a group of gopniks. When they all finish on her face, they drag her back to the disco, where she is paraded around like a prize as cum drips off her face. She eventually realizes what\'s going on and flees as everyone laughs at her.');
                scene.text('You know her reputation is in tatters now. One drunk mistake and her life as she knew it is over. The cool kids will dump her after this and no one will take her in. The only people that will talk to her now are boys wanting to use her for sex. You sigh and put your phone away.');
              }
            }
          }
        }
      }
    }
  }
  ((s as any).soniafall ?? {})['gossip'] = ((s as any).soniaQW ?? 0)?.['soniafall'];
  scene.build();
}

function enterSvetaDykeRumors(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'picture') {
    scene.img('images/locations/pavlovsk/school/events/boys_gossip.jpg');
    scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
  }
  if (((s as any).sveta_dyke_rumor ?? 0) === 30) {
    scene.text('Two boys are chatting in the hallway as you walk past. "Hey dyke, cock not good enough for you?"');
    scene.text('His friend laughs. "Maybe no one\'s given her a good enough ride yet. Hey rug muncher, come and find out what a real man is like!"');
    scene.text('They both laugh as you keep walking, but they follow you and make more crude comments. Several of your fellow students laugh or give you disgusted looks when they hear the boys comments.');
  } else {
    if (((s as any).sveta_dyke_rumor ?? 0) === 24) {
      scene.text('"Hey dyke," two boys say as you walk past them in the hallway. "I hear you\'re creeping the other girls out. You know, if they kick you out of the girls locker room, you can always come over to the boys side."');
      scene.text('"Yeah," says the other boy. "We can set you <i>straight</i> in there."');
      scene.text('They follow you down the hall for a while, making crude jokes before finally losing interest.');
    } else {
      if (((s as any).sveta_dyke_rumor ?? 0) === 18) {
        // TODO-QSP: dynamic text: Two boys are chatting in the hallway as you walk past. "Did you hear about <<$pc...
        scene.text(`Two boys are chatting in the hallway as you walk past. "Did you hear about ${((s as any).pcs_nickname ?? 0)}?" one of them asks.`);
        scene.text('"What? That she\'s a dyke? Everyone knows that!" his friend replies while glancing at you.');
        scene.text('"No. Well, sort of. She was caught rubbing one out at the other girls when they were showering," the first one replies.');
        scene.text('"Fuck, she\'s a bigger dyke than Lera!"');
        scene.text('Eventually, you walk far enough way to no longer be able to hear them as you head on your way.');
      } else {
        if (((s as any).sveta_dyke_rumor ?? 0) === 12) {
          // TODO-QSP: dynamic text: Two boys are chatting in the hallway as you walk past. "<<$pcs_nickname>> is suc...
          scene.text(`Two boys are chatting in the hallway as you walk past. "${((s as any).pcs_nickname ?? 0)} is such a dyke. She just won't stop checking out the other girls in the locker room."`);
          scene.text('"I heard she was pretty much drooling while checking out Bella…" his friend replies while glancing at you.');
          scene.text('The first one laughs. "Well I can hardly blame her for that."');
          scene.text('Eventually, you walk far enough way to no longer be able to hear them as you head on your way.');
        } else {
          if (((s as any).sveta_dyke_rumor ?? 0) === 6) {
            // TODO-QSP: dynamic text: Two boys are chatting in the hallway as you walk past. "<<$pcs_nickname>>'s been...
            scene.text(`Two boys are chatting in the hallway as you walk past. "${((s as any).pcs_nickname ?? 0)}'s been at it again. She was caught checking out several of the other girls."`);
            scene.text('"Damn, I guess she really is a muff diver."');
            scene.text('Eventually, you walk far enough way to no longer be able to hear them as you head on your way.');
          } else {
            // TODO-QSP: dynamic text: Two boys are chatting in the hallway as you walk past. "Did you hear about <<$pc...
            scene.text(`Two boys are chatting in the hallway as you walk past. "Did you hear about ${((s as any).pcs_nickname ?? 0)}?" one of them asks the other as you walk past.`);
            scene.text('"What about her?" his friend replies while glancing at you.');
            scene.text('"I heard she was caught checking out the other girls in the locker room after gym class."');
            scene.text('"Damn. Think she\'s a lesbian?"');
            scene.text('Eventually, you walk far enough away to no longer hear them as you head on your way.');
          }
        }
      }
    }
  }
  (s as any).sveta_dyke_rumor = ((s as any).sveta_dyke_rumor ?? 0) + (1);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'morning':
      enterMorning(s, scene);
      break;
    case 'skipping':
      enterSkipping(s, scene);
      break;
    case 'bagged':
      enterBagged(s, scene);
      break;
    case 'buying':
      enterBuying(s, scene);
      break;
    case 'gym':
      enterGym(s, scene);
      break;
    case 'lesson':
      enterLesson(s, scene);
      break;
    case 'gossip':
      enterGossip(s, scene);
      break;
    case 'mixed':
      enterMixed(s, scene);
      break;
    case 'boys':
      enterBoys(s, scene);
      break;
    case 'girls':
      enterGirls(s, scene);
      break;
    case 'Lizaveta':
      enterLizaveta(s, scene);
      break;
    case 'sonia_disco_gossip':
      enterSoniaDiscoGossip(s, scene);
      break;
    case 'sveta_dyke_rumors':
      enterSvetaDykeRumors(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_gossip: LocationDef = {
  name: 'gschool_gossip',
  title: 'On your way to hang out with your friends during lunch, you ',
  region: 'other',
  enter: enter,
};
