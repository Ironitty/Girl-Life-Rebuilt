import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.text('Lazar smirks when he sees you. "Back for more? I know, it was amazing."');
    scene.text('You only let out a short "Mmhmm" as you roll your eyes.');
    // TODO-QSP: dynamic text: Lazar breaks out in a smile. "No worries <<$pcs_nickname>>! I''m sure we''ll hoo...
    scene.text(`Lazar breaks out in a smile. "No worries ${((s as any).pcs_nickname || '')}! I'm sure we'll hook up again."`);
    scene.text('You notice several others paying attention to what he says and aren\'t happy about him bragging publicly about banging you. You try and change the topic, but all you get from him is sexual banter.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A149')
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] > 0) {
      scene.text('Lazar smirks when he sees you. "Back for more? Albina is a little busy right now, but I\'m sure we can work something out next time she\'s in the mood."');
      scene.text('You blush at his comment and he smiles. "I\'m sure you enjoy our… sessions as much as she does."');
      scene.text('He has a wide grin on his face and winks at you.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A149')
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
        qspCall(s, 'npc_relationship', 'modify', 'A149', 'dislike');
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          scene.text('"Taking a break from sucking dicks?" Lazar snickers.');
          scene.text('You sigh. "I just wanted to talk to you."');
          scene.text('"I\'m sure you do, but I\'m pretty busy, so get lost."');
          scene.text('Several of the other jocks and cool kids start mocking you, forcing you to flee as their laughter echoes behind you.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
            scene.text('He turns to look at you as you approach. "Get the fuck away from me, you skank!"');
            scene.text('Several of the jocks and cool kids start mocking you, forcing you to flee.');
          } else {
            scene.text('"You here to suck me off, slut?" Lazar snickers.');
            scene.text('You sigh. "I just wanted to talk to you."');
            scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! Your mouth is good for only one thing. Sucking dick!" he says with a laugh and several of the other jocks and cool kids join in. "If you\'re not going to get on your knees and suck me off, then get lost!"');
            scene.text('You walk away with the laughter echoing behind you.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I''ve been noticing you eyeballing me…" Lazar winks.
            scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. So I've been noticing you eyeballing me…" Lazar winks.`);
            scene.text('You laugh. "Nice line, Lazar… Is that how you get the ladies interested in you?"');
            scene.text('He confidently continues. "You know it. And it works like a charm every time. You just wait, you\'ll fall for me too."');
            scene.text('You end up talking about a variety of topics, mostly sports.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A149')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
              scene.text('"Are you the one that\'s been going around telling the other girls that I\'m no good for them?!" Lazar angrily asks.');
              scene.text('"No? Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
              scene.text('"Good. Keep it that way or else we might have a problem…" he says as he brushes past you.');
            } else {
              // TODO-QSP: dynamic text: "I didn''t take you for one of them girls, <<$pcs_nickname>>?" Lazar smiles.
              scene.text(`"I didn't take you for one of them girls, ${((s as any).pcs_nickname || '')}?" Lazar smiles.`);
              scene.text('"What?" you ask, surprised.');
              scene.text('"Didn\'t take you for one of my fan girls, that\'s all," he winks.');
              scene.text('You roll your eyes and shake your head. You know he\'s full of himself, even if he is the most gifted athlete in school and cute to boot.');
              scene.text('You end up talking about a variety of things, which he twists into you just liking him.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A149')
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
              // TODO-QSP: dynamic text: "Did you see that move I made at the last game, <<$pcs_nickname>>?" Lazar boasts...
              scene.text(`"Did you see that move I made at the last game, ${((s as any).pcs_nickname || '')}?" Lazar boasts.`);
              scene.text('"I heard about it…" you inform him.');
              scene.text('You start talking about his last game, but soon move on to a variety of other topics.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                // TODO-QSP: dynamic text: "Well well, if it isn''t <<$pcs_nickname>>…" Lazar smirks as he stands with his ...
                scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname || '')}…" Lazar smirks as he stands with his arms crossed.`);
                scene.text('You sigh. "What now, Lazar? I don\'t have time for your games today…"');
                // TODO-QSP: dynamic text: He huffs. "Somebody''s been talking shit behind my back to some girls, but I hav...
                scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I wanted you to know that I'm keeping my eyes on you, ${((s as any).pcs_nickname || '')}…"`);
                scene.text('"Okay…" you say as you roll your eyes. "What does that have to do with me?"');
              } else {
                // TODO-QSP: dynamic text: "Did you hear my own little cheer squad at the last game, <<$pcs_nickname>>?" La...
                scene.text(`"Did you hear my own little cheer squad at the last game, ${((s as any).pcs_nickname || '')}?" Lazar boasts.`);
                scene.text('"I heard many boys are out to get at your level, <i>Mister Superstar</i>. Watch out, you might lose that cheer squad of yours!" you jokingly reply.');
                scene.text('Lazar bursts out in laughter. "No no, I\'m not worried. That only makes me want to improve even more…"');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A149')
          } else {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I''ve been noticing you''ve been eying me…" Lazar wi...
                scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. So I've been noticing you've been eying me…" Lazar winks.`);
                scene.text('You blush. "No I haven\'t!"');
                scene.text('He confidently continues. "Are you saying I\'m not good looking?"');
                scene.text('You start to stammer and he laughs, showing he\'s just messing with you. You then proceed to talk about a variety of topics, mostly sports.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A149')
              } else {
                if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                  scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there.');
                  scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!"');
                  scene.text('He then returns to ignoring you and you walk away.');
                } else {
                  // TODO-QSP: dynamic text: "Well well, if it isn''t <<$pcs_nickname>>…" Lazar smirks, bringing everyone''s ...
                  scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname || '')}…" Lazar smirks, bringing everyone's attention to you.`);
                  scene.text('You glance around, waiting for someone to start picking on you. "Hi, I just wanted to say hi."');
                  scene.text('He smirks. "Of course you did…" Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
                  scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you. At least no one is picking on you.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A149')
                }
              }
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I''ve been noticing you''ve been eying me…" Lazar wi...
                  scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. So I've been noticing you've been eying me…" Lazar winks.`);
                  scene.text('You laugh. "You wish… Are any of the girls dumb enough to fall for that?"');
                  scene.text('He confidently continues. "Nothing to fall for, it\'s a simple fact. You don\'t have to hide it."');
                  scene.text('He lifts up his shirt and shows off his six pack, which gets the attention of most of the girls. You have to admit that he has a great body…');
                  scene.text('You proceed to talk about a variety of topics, mostly sports.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A149')
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                    scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there.');
                    scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants you to talk to you!"');
                    scene.text('He then returns to ignoring you and you walk away.');
                  } else {
                    // TODO-QSP: dynamic text: "Well well, if it isn''t <<$pcs_nickname>>. Get lost? Or maybe you''re too drunk...
                    scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname || '')}. Get lost? Or maybe you're too drunk to find the stairwell?" Lazar asks with a laugh, bringing everyone's attention to you.`);
                    scene.text('You sigh. "I just wanted to say hi."');
                    scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
                    scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you.');
                    // TODO-QSP: $func('npc_reactions', 'general', 'A149')
                  }
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                  scene.text('As you approach, several of the other jocks and cool kids start giving you a hard time.');
                  scene.text('Before you can even say a word, he scoffs at you. "Get lost! This isn\'t for you."');
                  scene.text('He starts talking to the others as you walk away. At least he wasn\'t mean about it.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                    scene.text('"Looks like the loser is lost," someone comments as you approach.');
                    scene.text('"Nah, I bet even Lesco and Petia can\'t stand being around her and, honestly, who can blame them?" Lazar replies, which gets the group laughing so hard you know it\'s pointless to even try and talk to him.');
                  } else {
                    scene.text('You approach and try to talk to him, but he straight up ignores you and pretends you\'re not there.');
                    scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!"');
                    scene.text('He then returns to ignoring you and you walk away.');
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
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterSvyatoslav(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big8.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
    qspCall(s, 'npc_relationship', 'modify', 'A8', 'dislike');
    if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
      scene.text('"So when am I going to get the complementary blowjob?" Svyatoslav asks.');
      scene.text('"Never…" you sourly reply.');
      scene.text('"Come on, don\'t play hard to get. I know you loving sucking cock, you little slut…"');
      scene.text('He starts approaching you, so you turn and walk away.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A8')
    } else {
      scene.text('"Look who it is, the school bicycle! Run out of cocks in the bathroom? Had to come out of your stall to find more?" Svyatoslav says as you approach.');
      scene.text('Most of the other jocks and cool kids laugh at his comments. "No…" you sourly reply.');
      scene.text('"Well, unless you get down on your knees and start sucking me off, get the fuck out of here! Only time anyone wants anything to do with you is when they want to fuck one of your holes."');
      scene.text('Several others start adding comments and you know it\'s about to turn ugly, so you quickly leave before someone drags you off to the bathroom or worse.');
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
        scene.text('"Well, isn\'t this a surprise? Are you here to wish me good luck in the next race?" Svyatoslav curiously asks.');
        scene.text('Seeing him excited and not wanting to hurt his feelings, you just nod. "Yeah… That\'s exactly what I wanted to say…"');
        // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>! I''ll be sure to win this time!" he boastfully replie...
        scene.text(`"Thanks ${((s as any).pcs_nickname || '')}! I'll be sure to win this time!" he boastfully replies.`);
        scene.text('The two of you then talk about the many times he fails to beat Ivan or Lazar in one of the various sports at school.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A8')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
          scene.text('He gives you a dirty look as you approach. "I\'ve got nothing to say to you, so go bother someone else."');
          scene.text('You try talking to him, but he just gets more annoyed with you, so you finally give up and leave.');
        } else {
          scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you.');
          scene.text('You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A8')
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
          scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you.');
          scene.text('You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A8')
        } else {
          if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
            scene.text('He gives you a dirty look as you approach. "I\'ve got nothing to say to you, so go bother someone else."');
            scene.text('You try talking to him, but he just gets more annoyed with you, so you finally give up and leave.');
          } else {
            scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you.');
            scene.text('You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A8')
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
            scene.text('"You get lost, nerd?" he asks as you approach.');
            scene.text('You shake your head. "No, I just wanted to say hi."');
            scene.text('He snorts. "Whatever. Make sure you don\'t lean too far forward in class so I can copy off you."');
            scene.text('He then ignores you, but doesn\'t pick on you.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A8')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
              scene.text('"You get lost, nerd?" he asks as you approach.');
              scene.text('You shake your head. "No, I just wanted to say hi."');
              scene.text('He steps towards you, places his hand on your shoulder and shoves you hard enough that you stumble back. "Get the fuck out of here!"');
              scene.text('You notice the stares of the others and decide it\'s best to leave before things get worse.');
            } else {
              scene.text('"You get lost, nerd?" he asks as you approach.');
              scene.text('You shake your head. "No, I just wanted to say hi."');
              scene.text('He laughs. "Why don\'t you just go back to your fellow losers and pretend to be an elf or whatever it is you losers do."');
              scene.text('He continues mocking you when he isn\'t talking to someone else.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A8')
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
              scene.text('"You come to see what real men are like?" he asks as you approach.');
              scene.text('You shake your head and roll your eyes at his comment. "No, I just wanted to say hi."');
              scene.text('He snorts. "Sure you didn\'t. Well, take a good look."');
              scene.text('He does a little flexing before you\'re able to engage him in something resembling a conversation.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A8')
            } else {
              if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
                scene.text('"You come to beg for some money to buy drugs?" he asks with a laugh, causing several others to join in.');
                scene.text('You shake your head. "No, I just wanted to say hi."');
                scene.text('"Yeah? Well no one wants to talk to your skank ass, so go back to your own kind."');
                scene.text('You notice the stares of the others and decide it\'s best to leave before things get worse.');
              } else {
                scene.text('"You get lost, junkie?" he asks as you approach.');
                scene.text('You shake your head. "No, I just wanted to say hi."');
                scene.text('He laughs. "Why don\'t you just go back to your fellow wannabe gangsters and pretend like you matter?"');
                scene.text('He continues mocking you when he isn\'t talking to someone else.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A8')
              }
            }
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A8', 'dislike');
            if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
              scene.text('As you approach, he walks towards you and grabs you by the arm before dragging you away so no one can hear his whispers.');
              scene.text('"What the fuck do you think you\'re doing? Don\'t ever come up to me in public!" He then shoves you away. "And stay the fuck away from us, loser!" he says loud enough for the others to hear.');
              scene.text('Several of them laugh and commend him for getting rid of you as he walks back to them. You just sigh and walk away, knowing it\'s pointless to try and talk to him.');
            } else {
              scene.text('He shakes his head as you approach. "Fuck no! Stay the fuck away from me, you worthless fuck! No one likes you, so just turn your fucking ass around and walk the fuck away from here."');
              scene.text('He glares at you and you notice a lot of the others giving you unkind looks. You sigh before turning and walking away.');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterVanya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big165.jpg');
  if (((s as any).npc_rel ?? 0)?.['A165'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 225) {
    if (((s as any).grupTipe ?? 0) === 2) {
      // TODO-QSP: dynamic text: Vanya is having a hard time stopping himself from laughing. "<<$pcs_nickname>>, ...
      scene.text(`Vanya is having a hard time stopping himself from laughing. "${((s as any).pcs_nickname || '')}, did you hear about the prank I pulled on the football coach?"`);
      scene.text('"No. What did you do this time?" you curiously ask.');
      scene.text('"During one of the training sessions, I unscrewed the top from a water bottle thinking one of the boys would drink it, but here comes the coach! Just as he\'s about to drink, the top falls off and water splashes all over him!"');
      scene.text('Unable to help himself, he bursts out into laughter.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You need to help me hide!" Vanya says alarmingly as he looks...
      scene.text(`"${((s as any).pcs_nickname || '')}! You need to help me hide!" Vanya says alarmingly as he looks around.`);
      scene.text('"What\'s wrong?!" you reply in a panic. "Who\'s after you?!"');
      scene.text('Vanya cracks up. "Just kidding! I just wanted to see your reaction."');
      scene.text('"Don\'t you get tired of playing games all the time, Vanya?" you reprimand him.');
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A165')
  } else {
    if (((s as any).npc_rel ?? 0)?.['A165'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 225) {
      if (((s as any).grupTipe ?? 0) === 2) {
        scene.text('"What the hell, Vanya?!" you yell while angrily stomping towards him.');
        scene.text('"What now?" he replies with an innocent look. "I\'m getting tired of you accusing me of things I haven\'t done!"');
        scene.text('"It must\'ve been you! Who else replaces talc powder with itching powder?!"');
        scene.text('"No idea. What an amazing… I mean cruel joke, though…" he replies.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A165')
      } else {
        scene.text('"Funny joke you played on me there, dickhead!" you angrily yell while pushing him.');
        scene.text('"What are you talking about? You\'ve gone crazy!" he replies.');
        scene.text('"I know it was you!" you yell in response.');
        scene.text('"Oh yeah? Prove it then!" he yells back.');
        scene.text('You both stand in silence for a few seconds before you stomp off as Vanya grins from ear to ear.');
      }
    } else {
      if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 20) {
        scene.text('"Hey Vanya…" you sneakily greet him. "Want to hear a secret?"');
        scene.text('Vanya turns towards you. "Hell yeah! I love secrets! Especially ones I can use against others as a joke!"');
        scene.text('"Well this one is special…" you snicker. "I saw you and Vicky having sex in the park…"');
        scene.text('Vanya stops and thinks for a second before grinning. "That\'s the big secret? Well that\'s nothing new. Vicky and I love to have sex outdoors," he winks.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A165')
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 225) {
          qspCall(s, 'npc_relationship', 'modify', 'A8', 'dislike');
          scene.text('"Are you up for a threesome with Vicky and me?" Vanya asks.');
          scene.text('"What?" you ask surprised.');
          scene.text('He breaks out in a mischievous smile. "Yeah, you know. We\'ve heard that you\'ve become such a big slut, so we wanted to try a threesome."');
          scene.text('"Hmm…" you start to think.');
          scene.text('"Gross, I was just kidding!" he scorns. "Like I would share Vicky with a slut like you!"');
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Check this out!" Vanya yells as he throws a crumbled pap...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}! Check this out!" Vanya yells as he throws a crumbled paper ball at Vitek's head.`);
          scene.text('Vitek quickly spins around and glares, trying to figure out who threw it.');
          scene.text('"Who did that?!" he yells. "Tell me who the fuck it was!"');
          scene.text('"So easily agitated…" Vanya comments while you burst out in laughter over the stupid face Vitek is making.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A165')
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterErast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A150', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big150.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
    if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
      // TODO-QSP: dynamic text: You approach Erast and tap his shoulder. "Oh… Hello <<$pcs_nickname>>," he says ...
      scene.text(`You approach Erast and tap his shoulder. "Oh… Hello ${((s as any).pcs_nickname || '')}," he says gently.`);
      scene.text('"Hi Erast. I just wanted to talk to you," you reply with a smile.');
      scene.text('You start talking about different things, but see him glancing at the others, as if he\'s worried about being seen with you.');
      scene.text('"Am I not worthy to look at?" you ask jokingly, but you exactly know what\'s going on.');
      scene.text('"What? No. I mean, yes. You look…" He starts to check you out. You can tell he likes you, but unlike the others, he isn\'t undressing you with his eyes and remains a gentleman, despite your reputation.');
      scene.text('"Look, I get it. Don\'t worry," you reply before grabbing your things and leaving, not wanting to make him feel more uncomfortable than he does now.');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I…" He starts saying something, but you can''t hear the end ...
      scene.text(`"${((s as any).pcs_nickname || '')}, I…" He starts saying something, but you can't hear the end of it.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
        scene.text('You approach Erast and tap his shoulder. When he turns, you can easily tell he\'s not happy to see you at all.');
        // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. Sorry, but I was about to leave and do some important th...
        scene.text(`"Hi, ${((s as any).pcs_nickname || '')}. Sorry, but I was about to leave and do some important things…" he mutters.`);
        scene.text('"I just wanted to…" You would continue your sentence, but he\'s already gone. It\'s obvious he didn\'t want to be seen with you.');
        scene.text('There are a few minutes until the end of the break, so you decide to spend some time on your phone before going on your way.');
      } else {
        // TODO-QSP: dynamic text: You approach Erast and tap his shoulder. "Oh hi, <<$pcs_nickname>>. Am I in your...
        scene.text(`You approach Erast and tap his shoulder. "Oh hi, ${((s as any).pcs_nickname || '')}. Am I in your way?" he asks.`);
        scene.text('"What do you mean?" you ask confusedly.');
        scene.text('"I don\'t know. Maybe you were looking for the toilets to retouch your makeup or something and I was in your way?"');
        scene.text('He doesn\'t want to be rude, but you understand he was referring to your reputation and the rumors about what you do in the toilets.');
        scene.text('"Was that a hint that I should leave you alone or maybe you want me to go there?" you wink.');
        scene.text('"What? No. I mean… never mind, see you later." He turns around and goes on his own business without finishing his sentence. You don\'t know if you should feel offended or rejected.');
        scene.text('You don\'t have too much time to think about it since the break is almost over, so you grab your things and go on your way.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
        scene.text('"Here\'s the resident big guy of our school!" you say jokingly when you approach Erast, who is watching something on his phone.');
        // TODO-QSP: dynamic text: You can see him blushing when he looks up and notices you. "Hello <<$pcs_nicknam...
        scene.text(`You can see him blushing when he looks up and notices you. "Hello ${((s as any).pcs_nickname || '')}, how are you doing today?"`);
        scene.text('"I\'m fine, thanks for asking. You know, I came here to get some pointers as I\'ve been struggling with my training recently. I have to pay attention to my shape and some good tips are always useful."');
        // TODO-QSP: dynamic text: "You already look good <<$pcs_nickname>>," he says politely, but his face turns ...
        scene.text(`"You already look good ${((s as any).pcs_nickname || '')}," he says politely, but his face turns red. Before you can react, he starts talking about aerobic and anaerobic techniques which he thinks would help you with your goal.`);
        scene.text('You listen to him very carefully and try to remember as much as you can, which isn\'t easy since he\'s so passionate about this topic that he often uses technical terms you don\'t understand.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A150')
        scene.text('When you realize the bell is about to ring, you thank him for his useful tips and you both head to the classroom for the next lesson.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
          scene.text('"Hey Erast!" you greet him, but he\'s so focused on watching something on his phone that he doesn\'t even notice you. You poke him and greet him again.');
          // TODO-QSP: dynamic text: "Oh.. Hello <<$pcs_nickname>>. Sorry, I didn''t notice you were talking to me." ...
          scene.text(`"Oh.. Hello ${((s as any).pcs_nickname || '')}. Sorry, I didn't notice you were talking to me." He glances at you before immediately staring at the screen again.`);
          scene.text('"Okay, no problem. What are you watching anyway? You seem to be lost in it," you say as you have a look at the video he\'s watching.');
          scene.text('"Oh, he\'s my favorite bodybuilder. He just uploaded this new motivational video on his channel. It\'s really worth watching. So inspirational."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A150')
          scene.text('You sit next to him and exchange the occasional word while watching the video, but he\'s not interested in chatting. Soon, you hear the bell signaling the end of the break.');
          // TODO-QSP: dynamic text: "See you later, <<$pcs_nickname>>," he says before putting his phone in his pock...
          scene.text(`"See you later, ${((s as any).pcs_nickname || '')}," he says before putting his phone in his pocket and leaving.`);
        } else {
          scene.text('"I can\'t believe it!" you say when you approach Erast, who is watching something on his phone.');
          // TODO-QSP: dynamic text: "Whoa, what''s wrong <<$pcs_nickname>>?" he asks. You can see by his expression ...
          scene.text(`"Whoa, what's wrong ${((s as any).pcs_nickname || '')}?" he asks. You can see by his expression that he doesn't understand what your problem is.`);
          scene.text('"You know, I\'ve been trying to pay more attention to my shape lately and I feel like I\'m not getting the results I should, according to my training plan," you explain as you get your plan out of your pocket and show it to him.');
          scene.text('"It\'s not a horse race," he quickly replies. "People usually think they get the required result within weeks when it actually needs months, even years sometimes."');
          scene.text('"Years?" you ask in despair before asking if he could explain some things to you.');
          scene.text('He looks around, as if looking for someone to talk to instead, before he sighs and starts to talk about nutrition, metabolism, resting, bulking, calisthenics, and everything that can affect your progress.');
          scene.text('You don\'t understand everything he says, but are happy that he\'s willing to share some of his knowledge. After talking about it for a few minutes, you feel you might have learned something.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A150')
          scene.text('"Good talk. Thanks Erast!" you say when you hear the bell ringing and head to the classroom for the next lesson.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>…" Erast greets you with a smile when you approach him.
          scene.text(`"Hi ${((s as any).pcs_nickname || '')}…" Erast greets you with a smile when you approach him.`);
          scene.text('"Hey Erast! I\'ve been looking for you all day! Could you give me some more tips on strength and conditioning? I think I might be doing something wrong since I\'m not gaining as much as I think I should."');
          // TODO-QSP: dynamic text: "Gladly," he replies. "You know <<$pcs_nickname>>, you should try to increase yo...
          scene.text(`"Gladly," he replies. "You know ${((s as any).pcs_nickname || '')}, you should try to increase your training volume and decrease between-set rest intervals."`);
          scene.text('"Also, get enough sleep. Your muscles need enough recovery time," he adds. He clearly knows a lot about strength and conditioning and could continue talking about it for hours, but the bell rings after only a few minutes.');
          scene.text('"Thanks Erast, that\'s really helpful. See you later."');
          scene.text('"Don\'t sweat it. Come and find me if you have more questions."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A150')
          scene.text('With that, you both grab your things and head to the next lesson together.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, what''s up?" Erast asks as you approach him.
            scene.text(`"Hi ${((s as any).pcs_nickname || '')}, what's up?" Erast asks as you approach him.`);
            scene.text('"Hey Erast! I was wondering if you could give me some new tips on boxing. You might have learned something new while boxing with Ivan which would be useful for me too."');
            scene.text('"Oh, boxing\'s not my greatest asset, to be honest. Ivan or Vitek can give you better advice, I guess. You should watch their next match at the community center if you\'re so interested."');
            scene.text('"Well, I\'m not, but it helps me to improve my balance and posture," you reply.');
            scene.text('By the skin of his teeth, he shares his knowledge but doesn\'t let you interrupt him with your questions. You get the feeling that he only helps you because he is polite and you are a fellow jock.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A150')
            scene.text('When the bell rings, he seems a bit relieved.');
            scene.text('"Thanks Erast," you say while grabbing your things and you both go your own ways.');
          } else {
            scene.text('"Hi Erast, what\'s that?" you ask when you see he is completely immersed in his notes.');
            // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>. Sorry I didn''t notice you," he replies. "I''m try...
            scene.text(`"Oh, hello ${((s as any).pcs_nickname || '')}. Sorry I didn't notice you," he replies. "I'm trying to improve my training plan and make it more varied," he says and shows you his notes.`);
            scene.text('"Wow, this is… this is really interesting," you reply. You\'ve always known that he\'s very committed to sport, but this new plan is very detailed, even for him.');
            scene.text('You start chatting, mostly about training and exchanging some tips on working out, stretching and different warm-up techniques.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A150')
            // TODO-QSP: dynamic text: "Look, <<$pcs_nickname>>, I still have to do some things before the next lesson....
            scene.text(`"Look, ${((s as any).pcs_nickname || '')}, I still have to do some things before the next lesson. Talk to you later," he says and gives you a little wave while he's leaving.`);
            scene.text('"Sure, later then." When he leaves, you look at the clock and see that you don\'t have much time to left before the next lesson starts, so you head to your classroom.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
            // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>," Erast politely greets when he notices you. "How''ve y...
            scene.text(`"Hello ${((s as any).pcs_nickname || '')}," Erast politely greets when he notices you. "How've you been doing?"`);
            scene.text('"Fine, thanks for asking. Lately, I\'ve been reading a lot. Luckily there are more and more new books out and I can borrow some old ones too, some of which I haven\'t even heard of."');
            scene.text('The last part makes Erast smile. "It\'s still hard to imagine there are books you haven\'t heard of. There should be a book about how to manage your time between working out and studying. I\'m still falling more and more behind."');
            scene.text('"Yes, studying is important…" you reply and suddenly don\'t know what to say. You know he\'s not the brightest, but despite being in a different clique, he\'s always been kind and polite to you and you don\'t want him to feel bad about it.');
            scene.text('After a short pause, you start to talk about studying and doing exercises. By this time, it\'s clear to both of you that they have something in common: both require dedication and a lot of discipline in some way.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A150')
            scene.text('You hear the bell a few minutes later. "I should go, Erast. There\'s something I would like to ask the teacher before the lesson. See you later." You then hurry to catch your teacher in the corridor.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
              // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>… Is there anything I can help with?" Erast asks when he...
              scene.text(`"Hello ${((s as any).pcs_nickname || '')}… Is there anything I can help with?" Erast asks when he notices you approaching him.`);
              scene.text('He seems a bit confused because you don\'t know each other that well. You hesitate before spitting it out: "Hey… So, I wanted to ask…"');
              scene.text('You don\'t finish your sentence before he interrupts you. "Uhm, look, the thing is that I\'m very busy now. Yeah, I\'m busy, sooo maybe another time?"');
              scene.text('You get the hint and don\'t want to be pushy, so you just say you\'ll try to find him at a more suitable time.');
              // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, yeah, do that… Now if you''ll excuse me…" he says polit...
              scene.text(`"Okay ${((s as any).pcs_nickname || '')}, yeah, do that… Now if you'll excuse me…" he says politely but firmly and goes about his own business.`);
              scene.text('You realize there\'s still time, so you check your schedule to see what your next lesson is before heading to your classroom.');
            } else {
              // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>… What''s up?" Erast asks when he notices you approachin...
              scene.text(`"Hello ${((s as any).pcs_nickname || '')}… What's up?" Erast asks when he notices you approaching him.`);
              scene.text('"Hi Erast," you reply. "I just thought I would come and chat was all."');
              // TODO-QSP: dynamic text: He looks surprised, but eventually starts to talk about his training routines. "...
              scene.text(`He looks surprised, but eventually starts to talk about his training routines. "You know ${((s as any).pcs_nickname || '')}, it's very important to do something for your body every single day."`);
              scene.text('"I know, I know…" you sigh. It\'s clear you don\'t have a lot in common, but you\'re able to have a nice chat with each other.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A150')
              // TODO-QSP: dynamic text: Before the break is over, he grabs his things. "Alright <<$pcs_nickname>>, I hav...
              scene.text(`Before the break is over, he grabs his things. "Alright ${((s as any).pcs_nickname || '')}, I have a few things I need to do before the lesson. Thanks for the chat."`);
              scene.text('"Of course. See you later." You quickly check your notes from the previous lesson and revise them before going to the classroom.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
              // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>." Erast politely greets when he notices you. "How''ve y...
              scene.text(`"Hello ${((s as any).pcs_nickname || '')}." Erast politely greets when he notices you. "How've you been doing?"`);
              scene.text('"You know me Erast. Same old, same old. Another day, the same shit." you reply while you sit on the floor next to him.');
              scene.text('He\'s not the person who completely understands your lifestyle, but he\'s polite and kind enough to fully accept your choice and you enjoy chatting with him.');
              scene.text('"How\'s your training going lately?" you ask and he starts talking about his training schedule and plan he\'s been doing for a while. He enjoys talking to you about it, although you\'re not sure whether it\'s because of you or because he\'s so obsessed with this topic.');
              scene.text('"That\'s cool," you reply and start telling him some new stories that have happened to you lately. You also talk about boxing, which seems to be the only topic you\'re both familiar with.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A150')
              scene.text('You have a nice chat and don\'t even notice how fast time flies. You only realize your break is over when you hear the bell.');
              scene.text('"See you later big boy," you say as you gather your things and stand up.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
                scene.text('"Here\'s our big boy, the one and only Erast!" you say mockingly as you approach him.');
                // TODO-QSP: dynamic text: "What do you want <<$pcs_nickname>>?" He doesn''t seem amused.
                scene.text(`"What do you want ${((s as any).pcs_nickname || '')}?" He doesn't seem amused.`);
                scene.text('"Agghh, don\'t be a pussy! Come on, you\'re no fun. How can you be bigger than Mother Russia, but as soft as a teddy bear?"');
                scene.text('You see his face turning red and can\'t decide whether it\'s because of the shame or the anger he feels. You realize you might have gone too far again and clearly don\'t want to put up a fight with him.');
                scene.text('"Relax, I\'m just joking. Don\'t take everything so seriously!" you say, trying to ease the tension.');
                // TODO-QSP: dynamic text: "Whatever <<$pcs_nickname>>. Have your fun," He says before turning and leaving....
                scene.text(`"Whatever ${((s as any).pcs_nickname || '')}. Have your fun," He says before turning and leaving. You giggle at your victory before leaving to do something else until the bell rings.`);
              } else {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, what''s up?" Erast asks when he notices you.
                scene.text(`"Hi ${((s as any).pcs_nickname || '')}, what's up?" Erast asks when he notices you.`);
                scene.text('"Where do I begin? You know how it is, party here, a bit of mischief and mayhem there." You can see by his expression that he actually doesn\'t understand what you mean.');
                scene.text('"If you say so," he shrugs before pausing, unsure of what to say. He opens his mouth to speak, but he\'s just trying to find the words.');
                scene.text('"How about you?" you ask before the conversation turns awkward for both of you.');
                scene.text('"I\'ve been working out hard as always." He\'s noticeably somewhere else in his mind, so you try not to interrogate him.');
                scene.text('You wonder whether he\'s disorganised because he\'s just exhausted, or if the rumors are true and it\'s a side effect of the steroids he takes.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A150')
                scene.text('After a very short conversation, you both go your own ways and try to do something useful before the next lesson starts.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
              // TODO-QSP: dynamic text: Erast politely greets you. "Hello <<$pcs_nickname>>, what''s up?"
              scene.text(`Erast politely greets you. "Hello ${((s as any).pcs_nickname || '')}, what's up?"`);
              scene.text('"I\'m bored and I thought we could chat? I feel like this day is never going to end!" you reply with some sorrow in your voice.');
              scene.text('Knowing you don\'t really have any friends and you aren\'t on speaking terms with many of your classmates, he smiles. "Sure, I can check this video later."');
              scene.text('He puts his phone away and you chat for a while, occasionally changing subjects to things you don\'t completely understand. You don\'t mind; You\'re just happy you don\'t have to spend the break alone.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A150')
              scene.text('"Okay Erast, I should let you do your things before the next lesson starts," you tell him with a smile.');
              // TODO-QSP: dynamic text: "See you later <<$pcs_nickname>>," he replies before heading to the toilet. You ...
              scene.text(`"See you later ${((s as any).pcs_nickname || '')}," he replies before heading to the toilet. You grab your things and go to your classroom to wait for the bell.`);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
                scene.text('"Hello Erast, how\'re you doing today?" you ask as you approach him.');
                // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>… Sorry I don''t want to be rude, but I was just abo...
                scene.text(`"Oh, hello ${((s as any).pcs_nickname || '')}… Sorry I don't want to be rude, but I was just about to go to the toilet." You get the feeling he's just using this as an excuse and is trying to avoid talking to you.`);
                scene.text('"Okay, I just…" you start, but he\'s already left. He clearly isn\'t interested in having you as company, but at least he\'s not as rude to you as the others.');
                scene.text('You spend the rest of the break alone wondering if anything interesting will happen today or it\'ll be just another hellish day for you.');
              } else {
                scene.text('"Hello Erast, how\'re you doing today?" you ask as you approach him.');
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, what''s up?"
                scene.text(`"Hi ${((s as any).pcs_nickname || '')}, what's up?"`);
                scene.text('"As you\'re really good at skating, I was wondering if you could give me some advice about keeping my balance and posture?" you ask him nicely.');
                scene.text('He looks at his watch and glances at the others before he sighs. "Okay, I can give you some tips…" he says reluctantly and you realize that he would prefer spending the break with someone else.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A150')
                scene.text('He quickly explains some things before stopping. "Well, I have to go now if you don\'t mind. Another time maybe?" He doesn\'t wait for your answer before leaving.');
                scene.text('You have a few minutes before the next lesson, so you head to your classroom and try to kill the time.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterChristina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'Zvereva_events', 'cikl');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] === 2) {
    scene.actions([
      { label: 'Pay off Natasha\'s debt', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 500);
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['chrispaid'] = 3;
      ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['evt_day'] = ((st as any).daystart ?? 0);
      qspCall(st, 'stat', '');
      scene.img('images/characters/shared/headshots_main/big18.jpg');
      scene.text('You see Christina chatting with Lina as you approach. When she notices you, she glares at you before turning to Lina.');
      scene.text('"Later, Lina," she says. Lina smiles at Christina and leaves before Christina turns back to you. "What do you want?"');
      // TODO-QSP: dynamic text: You ignore her attitude. "Natasha owes you money, right? <<$func(''money'', ''st...
      scene.text(`You ignore her attitude. "Natasha owes you money, right? ${qspFunc(s, 'money', 'string_price', 500)}?"`);
      scene.text('"Yeah, what about it? It\'s not any of your business," she snaps.');
      scene.text('"Actually, it is," you say, pulling out the money and handing it to her. "I\'m here to pay you back."');
      scene.text('She snatches the money from your hand. "What, was she too scared to speak to me? She had to get you to do it for her?"');
      scene.text('"Something like that," you reply. "Anyway, don\'t lend her any more money."');
      scene.text('"Wasn\'t planning to. It took her long enough to pay this back!" She counts out the money and a slight smile crosses her face. "Alright, we\'re done here. You can leave now."');
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
      if (((s as any).christinaQW ?? 0)?.['subpath'] >= 3) {
        scene.text('As you pass by Christina, she looks at you triumphantly. "Don\'t forget my little slave! Showers after gym class…"');
        // TODO-QSP: $func('npc_reactions', 'general', 'A18')
        scene.text('Before you\'re able to respond, she turns around and walks away.');
      } else {
        scene.text('"I\'m looking forward to after P.E. class," Christina says with a wicked smile.');
        scene.text('"W-Why? What happens after class?"');
        scene.text('"Oh, I don\'t want to ruin the surprise, pet." Throwing one last smirk in your direction, she heads off to her next class.');
      }
    } else {
      if (((s as any).christinaQW ?? 0)?.['blackmail'] === 1) {
        if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
          ((s as any).christinaQW = (s as any).christinaQW ?? {})['blackmail'] = 2;
          scene.text('"I need to talk to you," you quietly say as you approach Christina.');
          scene.text('"What do you want? I\'m busy," she says, not even looking at you.');
          scene.text('You take a deep breath. "Lariska. I want Lariska."');
          // TODO-QSP: dynamic text: Surprised, she finally looks at you. "No, <<$pcs_nickname>>. She''s mine, and I ...
          scene.text(`Surprised, she finally looks at you. "No, ${((s as any).pcs_nickname || '')}. She's mine, and I don't want you filling her head with nonsense."`);
          scene.text('"Well, the thing is you don\'t really have a choice. Not a good one anyway." Pulling out your phone and checking to make sure nobody\'s looking, you show her a picture of her blowing the coach.');
          scene.text('Her face turns bright red with anger and she hisses at you. "You fucking bitch! How did you get that?! If you show anybody…"');
          scene.text('"I won\'t… if you tell Lariska it\'s okay to hang out with me outside of school. I mean, I would hate to see these pictures fall into Lizaveta\'s hands…"');
          scene.text('Her face turns even more red, if that were possible. "Fine," she spits out. "But I swear, if I even hear about these pictures again, I will break you into tiny fucking pieces!"');
          scene.text('"Oh, you won\'t. So long as you keep your word…" you say with a fake smile that doesn\'t quite reach your eyes. "Now do be a dear and let her know she\'s free to do whatever she wants outside of school, will you?"');
          scene.text('"Oh, and if you try and punish her for this, I will know," the threat clear on your face. Turning on your heels, you head off to your next class, smiling.');
        } else {
          ((s as any).christinaQW = (s as any).christinaQW ?? {})['blackmail'] = 2;
          scene.text('"I need to talk to you," you quietly say as you approach Christina.');
          scene.text('"What do you want? I\'m busy," she says, not even looking at you.');
          scene.text('"Oh, I just wanted you to know I have something you should see." Pulling out your phone and checking to make sure nobody is looking, you show her a picture of her blowing the coach.');
          scene.text('Her face turns bright red with anger and she hisses at you. "You fucking bitch! How did you get that?! If you show anybody…"');
          scene.text('"It would be a real shame if Lizaveta got her hands on these…" you say menacingly.');
          scene.text('Glaring at you, her hands balled into fists, she says quietly "What the fuck do you want from me, bitch?"');
          scene.text('"Oh, I haven\'t decided yet. When I do, I\'ll let you know. I\'m sure whatever I decide I want, you\'ll give it to me without a fuss. In the meantime, stay away from me."');
          scene.text('Her face turns even more red, if that were possible. "Fine," she spits out. "But I swear, if I even hear about these pictures again, I will break you into tiny fucking pieces!"');
          scene.text('"Oh, you won\'t. So long as you keep your word…" you say with a fake smile that doesn\'t quite reach your eyes. Turning on your heels, you head off to your next class, smiling.');
        }
      } else {
        if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
          if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
            ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
          }
          scene.text('Christina takes one look at you coming over to talk with her. "What now?"');
          scene.text('"Nothing," you say cheerfully. "Just came over to say hi."');
          scene.text('"Well don\'t. We\'re not friends. You got what you wanted, now leave me alone unless it\'s important."');
          scene.text('"Now don\'t be like that. I thought we were great friends!" you say while giving her your best fake smile.');
          scene.text('"Whatever." Giving you a dirty look, she heads off to her next class, and you do the same, chuckling to yourself.');
        } else {
          if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
            if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
              ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
            }
            scene.text('Seeing you walking towards her, she tenses up and whispers "What do you need?"');
            scene.text('"Nothing," you say cheerfully. "Just came over to say hi."');
            scene.text('"Uh, hi. Well, I gotta go, class is starting." Grabbing her stuff, she flees from your sight. Chuckling to yourself, you do the same.');
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
              scene.text('"What does the school slut want from me? Don\'t you have a cock to suck somewhere?" Christina asks mockingly.');
              scene.text('"Shut up Christina! I\'m tired of your bullshit," you tiredly reply.');
              scene.text('"Poor little thing. It must\'ve been what, five minutes since you last spread your legs for someone?"');
              scene.text('She begins to laugh as she walks away.');
            } else {
              if (((s as any).grupTipe ?? 0) === 2) {
                scene.text('"Look at the biggest joke among us. You shouldn\'t even be allowed to call yourself a jock. What a joke…" Christina shakes her head.');
                scene.text('"Oh yeah? I could beat you at whatever you want! Just name the time and place!" you fiercely reply.');
                scene.text('"Hmmrph!!" Christina looks angrily at you. "You know what? I don\'t have time for this right now!"');
                scene.text('She crosses her arms and refuses to say another word to you.');
              } else {
                scene.text('"Why are you trying to talk to me? I don\'t speak to people like you."');
                scene.text('"Well <i>excuse me</i>, your highness!" You sarcastically take a bow in front of her and hear some snickering behind you.');
                scene.text('Christina turns red as she pushes you away and storms off with Lina trying to keep up behind her.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).NatbelQW ?? 0)?.['chrispaid'] < 5  &&  ((s as any).NatbelQW ?? 0)?.['FriendLover'] === 3) {
    if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
      scene.actions([
        { label: 'Talk to Christina about Natasha', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['chrispaid'] = 5;
    scene.text('You see Christina chatting with Lina as you approach. When Christina notices you, she glares at you and then turns to Lina.');
    scene.text('"Later, Lina," she says. Lina smiles at Christina and leaves before Christina turns back to you. "What do you want?"');
    scene.text('You ignore her attitude. "I wanted to talk about how you treat Natasha."');
    scene.text('"What about it?" she snaps. "It\'s not like it\'s any of your business!"');
    scene.text('"Actually, it is. She\'s my friend, so I\'m telling you to stop so I don\'t have to beat your ass in front of everyone again."');
    scene.text('She doesn\'t answer, so you continue. "So we\'re in agreement then? Unless you want to go another round with me? I hope not, because I won\'t stop at a simple beating this time!"');
    scene.text('She nods in agreement before storming off. With a grin on your face, you head to your next class.');
  } },
      ]);
    } else {
      if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2) {
        scene.actions([
          { label: 'Talk to Christina about Natasha', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['chrispaid'] = 5;
    scene.text('You see Christina chatting with Lina when as approach. When Christina notices you, she glares at you and then turns to Lina.');
    scene.text('"Later, Lina," she says. Lina smiles at Christina and leaves before Christina turns back to you. "What do you want?"');
    scene.text('You ignore her attitude. "I wanted to talk about how you treat Natasha."');
    scene.text('"What about it?" she snaps. "It\'s not like it\'s any of your business!"');
    scene.text('"Actually, it is. She\'s my friend, so I\'m asking you to stop because I don\'t want to embarrass you in front of the others."');
    scene.text('"Fucking make me," she scoffs, so you pull out your phone and show her your recording of her blowing the coach.');
    scene.text('She balls her fists in rage. "So we\'re in agreement then? Unless you want everyone to see this?" you ask smugly.');
    scene.text('She coldly glares at you before storming off without answering. A satisfied grin on your face, you head to your next class.');
  } },
        ]);
      }
    }
  }
  if (((s as any).christinaQW ?? 0)?.['blackmail'] === 0  &&  ((s as any).christinaQW ?? 0)?.['pre_bm'] === 0  &&  ((s as any).christinaQW ?? 0)?.['pre_fight'] === 0  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0  &&  ((s as any).christinaQW ?? 0)?.['subpath'] === 0  &&  ((s as any).christinaQW ?? 0)?.['bully'] <= 40) {
    scene.actions([
      { label: 'Think about Christina', goto: ['Zvereva_events', 'christina_decide1'] },
    ]);
  }
  if (((s as any).christinaQW ?? 0)?.['blackmail'] === 0  &&  ((s as any).christinaQW ?? 0)?.['pre_bm'] === 0  &&  ((s as any).christinaQW ?? 0)?.['pre_fight'] === 0  &&  ((s as any).christinaQW ?? 0)?.['fight'] === 0  &&  ((s as any).christinaQW ?? 0)?.['subpath'] === 0  &&  ((s as any).christinaQW ?? 0)?.['bully'] >= 60) {
    scene.actions([
      { label: 'Think about Christina', goto: ['Zvereva_events', 'christina_decide2'] },
    ]);
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"My… my period started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChristinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"My… my period started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChristinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChristinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChristinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterChristinaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  scene.text('"Christina," you say as you approach her discreetly. "I need your help."');
  scene.text('"Oh this ought to be good…" She looks at you flatly.');
  // TODO-QSP: dynamic text: <<$temp[''tampon_ask'']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask'] ?? ''}`);
  scene.text('She looks at you in surprise.');
  scene.text('"You mean if I don\'t give you a tampon, your panties are going to get stained and blood is going to run all down your thighs, get all over your seat and embarrass you in front of the whole class?"');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.text('"Yes!" you hiss urgently. Christina stops to stare at you for a few seconds. "I really need your help!"');
  } else {
    scene.text('"Not exactly," you mumble, deeply aware of your <i>lack</i> of panties and how it\'s going to very quickly skip that step. "But yes, I really need your help."');
  }
  scene.text('She just smiles.');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"My… my period started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    scene.text('"Ha! That\'s the best thing I\'ve heard all day! Fuck you, enjoy the humiliation loser!" she grins, flipping you the bird as she walks away and leaves you with absolutely nothing.');
  } else {
    scene.text('"Ha! That\'s the best thing I\'ve heard all day! Fuck you, enjoy the humiliation!" she grins, flipping you the bird as she walks away. "And start using tampons you fucking loser! Nobody uses pads anymore!" she calls back over her shoulder.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAlbina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
  qspCall(s, 'stat', '');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  &&  ((s as any).npc_had_sex ?? 0)?.['A23']  &&  ((s as any).albina_schoolsex ?? 0) !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 4) + 1) === 4) {
    (s as any).albina_schoolsex = ((s as any).daystart ?? 0);
    if (((s as any).school_period ?? 0) === 3) {
      qspGoto(s, 'albina_school_sex', 'break_fun_1');
    } else {
      qspGoto(s, 'albina_school_sex', 'lunch_fun_1');
    }
  } else {
    scene.img('images/characters/shared/headshots_main/big23.jpg');
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        // TODO-QSP: dynamic text: You approach Albina and she gives you a small smile. "Hey <<$pcs_nickname>>, how...
        scene.text(`You approach Albina and she gives you a small smile. "Hey ${((s as any).pcs_nickname || '')}, how are you enjoying the Starlets?"`);
        scene.text('You open your mouth to answer, but she cuts you off before you can speak. "Just keep coming to dance practice, okay?"');
        scene.text('She gives you another small smile before walking away.');
      } else {
        // TODO-QSP: dynamic text: You approach Albina, who is lost in her thoughts. "Oh hey <<$pcs_nickname>>…" sh...
        scene.text(`You approach Albina, who is lost in her thoughts. "Oh hey ${((s as any).pcs_nickname || '')}…" she says glumly when she notices you.`);
        scene.text('"Is everything okay? Something on your mind?" you ask concerned.');
        scene.text('She sighs in response. "Yeah, it\'s… it\'s nothing. Just keep coming to dance practice, okay?"');
        scene.text('She gives you a weak smile before walking away, lost in her thoughts again.');
      }
    } else {
      if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 1) {
        ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['Friends'] = 2;
        qspCall(s, 'npc_relationship', 'set', 'A23', 100);
        qspCall(s, 'stat', '');
        if (((s as any).npc_had_sex ?? 0)?.['A23']) {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Albina smiles at you. "I wanted to thank you again for ...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}," Albina smiles at you. "I wanted to thank you again for what you did. I don't want to get into any mushy bullshit, but I just wanted to let you know I… <i>appreciated</i> it."`);
          scene.text('Her eyes drift down between your legs and she winks at you while giving her lips a subtle lick. "It meant a lot."');
        } else {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Albina smiles at you. "I wanted to thank you again for ...
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}," Albina smiles at you. "I wanted to thank you again for what you did. I don't want to get into any mushy bullshit, but I just wanted to let you know I appreciated it. It meant a lot."`);
        }
        scene.text('"It was no problem, Albina. You\'re my friend. That\'s what friends do," you reply.');
        scene.text('She smiles. "Also, I\'m disbanding the Starlets," she says. "Too many bad memories, you know?"');
        scene.text('"I get it."');
        scene.text('She embraces you in a tight hug before giving you a quick smile and continuing down the hall.');
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
          if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
            scene.text('"Hey Al-"');
            if ((Math.floor(Math.random() * 2) + 0) === 1) {
              // TODO-QSP: dynamic text: "Hey <i>whore</i>!" a random boy shouts at you from a group passing by. "I got <...
              scene.text(`"Hey <i>whore</i>!" a random boy shouts at you from a group passing by. "I got ${qspFunc(s, 'money', 'string_profit', 50)}! That's enough for an ass fuck, right?"`);
              scene.text('His friends cackle at you as he makes a rude gesture and grins at you, but one glare from Albina is all it takes for their expressions to change and send them packing.');
            } else {
              scene.text('"Fucking all the boys isn\'t enough for you?" a random girl sneers at you from a group passing by. "Trying to get into Albina\'s panties too?"');
              scene.text('"I don\'t know why she bothers," another girl says. "She probably gives them a strapon to take it up her ass anyway!"');
              scene.text('The rest of the girls giggle until they see Albina\'s glare and quickly scurry away.');
            }
            scene.text('She sighs as she turns back to you.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A23')
            scene.text('"I told you to be careful…" she says and places her hand on your cheek. She lingers there for just a moment before turning away, a sorry look in her eyes is the last thing you see before she leaves.');
          } else {
            scene.text('"Hey Alb-"');
            scene.text('"Ew! Get away from me you walking cum dumpster!" she sneers and forcefully shoves you backwards. "I don\'t want to catch AIDS or some other shit! God, I feel dirty just touching your clothes!"');
            scene.text('She walks away with a huff, several of your classmates going with her.');
          }
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 150) {
            if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
              scene.text('"Hey Albina!" you wave.');
              scene.text('She suddenly grabs you by the arm and yanks you over to the side of the hallway.');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" she hisses in a hushed tone. "There are some <i>nasty</i> f...
              scene.text(`"${((s as any).pcs_nickname || '')}!" she hisses in a hushed tone. "There are some <i>nasty</i> fucking rumors going around about you! Everything from cock hungry slut to a straight up hooker!"`);
              scene.text('"They\'re just rumors Albina," you try to reassure her.');
              // TODO-QSP: dynamic text: "They don''t sound like <i>just</i> rumors <<$pcs_nickname>>…" She glares at you...
              scene.text(`"They don't sound like <i>just</i> rumors ${((s as any).pcs_nickname || '')}…" She glares at you for a moment before sighing. "Look, I'm not trying to slut shame you or anything like that. I know I'm not one to talk. But seriously, be careful okay?"`);
              // TODO-QSP: $func('npc_reactions', 'general', 'A23')
              scene.text('She gives you a worried look and hugs you tight before you part ways for your next class.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
                scene.text('She just stares at you in disbelief. "There\'s some <i>nasty</i> rumors about you going around school. Everyone is saying that you\'re a cock hungry whore! How can you live like that - just letting guys… <i>use</i> you like that?"');
                scene.text('You try to respond, but she shakes her head and walks away. You can\'t tell if she was feeling disgusted or disappointed at you. She might even have been both.');
              } else {
                scene.text('You approach Albina, but before you can even say anything, she holds up her hand and sticks out her tongue in a gagging motion.');
                scene.text('"Ugh, that\'s far enough, slut! I can smell the cum on your breath from here! Why are you dragging your dirty whore ass over to me? Even if I had a cock between my legs for you to suck, I wouldn\'t want your filthy cum breath all over it. Now fuck off before I throw up!"');
              }
            }
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] >= 75) {
              if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, I''ve been hearing some weird rumors about you lately," ...
                scene.text(`"Hey ${((s as any).pcs_nickname || '')}, I've been hearing some weird rumors about you lately," she says with a bemused look. "Everyone's saying you're 'easy' and suck dick in the boys bathroom! I don't know what's going on, but… be careful, okay?"`);
                scene.text('"They\'re just rumors, Albina," you try to reassure her.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                scene.text('"This might end up worse than you think…" she says with a worried look before walking away.');
              } else {
                scene.text('She just stares at you in disbelief. "There\'s some <i>nasty</i> rumors about you going around school. Everyone is saying you\'re a cock hungry whore! How can you live like that - just letting guys… use you like that?"');
                scene.text('You\'re about to speak up, but she shakes her head and walks away. You can\'t tell if she was feeling disgusted or disappointed at you. She might even have been both.');
              }
            } else {
              if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
                if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
                  scene.text('Albina gives you a tight hug when you approach and you both have a lively conversation. It\'s as if a weight has been lifted from her shoulders and she smiles a lot more than before.');
                  if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).week ?? 0) === 1) {
                    scene.text('As you chat, you notice Lazar glancing your way and Albina winks at him before they give each other flirty smiles.');
                    scene.text('"What was that about?" you ask.');
                    if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 2) {
                      scene.text('"You know <i>exactly</i> what that was about," she giggles.');
                      scene.text('You roll your eyes and smile. "Yeah, yeah. You went home with him after the disco again and let him rail you. <i>Again</i>… Slut."');
                      scene.text('"Takes one to know one!" she grins.');
                    } else {
                      if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 1) {
                        scene.text('"You know exactly what that was about," she giggles.');
                        scene.text('You gasp. "You <i>did not</i> go home with him after the disco and fuck him again!"');
                        scene.text('She grins. "Both holes, morning and night. I could barely walk home afterwards!"');
                        scene.text('"Slut…" you smile.');
                        scene.text('"Takes one to know one!" she grins.');
                        ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['know_walk_of_shame'] = 2;
                      } else {
                        scene.text('"I might have went home with him from the disco the other night and let him fuck my brains out…" she whispers. "Then fucked him again the next morning."');
                        scene.text('"Oh my god!" you gasp. "You slut!"');
                        scene.text('"Takes one to know one!" she grins.');
                        ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['know_walk_of_shame'] = 1;
                      }
                    }
                  } else {
                    if ((Math.floor(Math.random() * 3) + 0) === 1) {
                      scene.text('As you chat, she stretches and lets out a soft moan.');
                      scene.text('"You okay?" you ask.');
                      scene.text('"Yeah," she replies. "I went for a massage at the Beauty Bar in the city at the weekend and they <i>really</i> know how to use their hands there…" she grins.');
                      scene.text('You just grin back. "Uh huh. A \'hands on\' massage you say…"');
                      scene.text('"Shut up!" she giggles. "I just meant that I feel really relaxed afterwards."');
                    } else {
                      scene.text('"I can\'t wait to get home so I can get a good workout," she says. "Gym class is okay, but I don\'t feel like it pushes me hard enough."');
                      if (((s as any).grupTipe ?? 0) === 1) {
                        scene.text('"What is it with you jocks and wanting to get sweaty?" you jokingly reply.');
                        scene.text('"Working up a sweat means you had a good workout," she says. "You should try it sometime and build some muscle. The guys love a girl with a nice firm ass."');
                        scene.text('"I look pretty enough already," you confidently state. "I don\'t need to smell like a gym sock doing it."');
                        scene.text('She just laughs at your jab. "I bet you don\'t have the stamina to last as long in bed as I do, though!"');
                      } else {
                        scene.text('"I love working up a sweat," you reply. "I\'m not working out hard enough if my muscles don\'t feel it."');
                        scene.text('She nods. "Lift some weights, do some squats and finish it off with some cardio. Then I spend <i>at least</i> half an hour in the bath relaxing afterwards. <i>That\'s</i> a good workout to me."');
                        scene.text('You sigh. "I wish I could do that, but I would get nagged at for hogging the bathroom. The joys of living with other people."');
                        scene.text('"Come and work out with me at my place then," she smiles. "Then you can lounge in the bath as long as you want."');
                        if (((s as any).npc_had_sex ?? 0)?.['A23']) {
                          scene.text('She leans in and whispers in your ear. "Maybe we can even share the bath…"');
                        }
                      }
                    }
                  }
                  // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                } else {
                  if (((s as any).grupTipe ?? 0) === 3) {
                    scene.text('You approach Albina and she smiles. She ignores the stares you\'re getting from her friends and has a friendly conversation with you.');
                    if ((Math.floor(Math.random() * 3) + 0) === 0  &&  ((s as any).week ?? 0) === 1) {
                      scene.text('As you chat, you notice Lazar glancing your way and Albina winks at him before giving him a flirty smile.');
                      scene.text('"What was that about?" you ask.');
                      if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 2) {
                        scene.text('"You know exactly what that was about," she giggles.');
                        scene.text('You roll your eyes and smile. "Yeah, yeah. You went home with him after the disco again and let him rail you. <i>Again</i>… Slut."');
                        scene.text('"Takes one to know one!" she grins.');
                      } else {
                        if (((s as any).AlbinaQW ?? 0)?.['know_walk_of_shame'] === 1) {
                          scene.text('"You know exactly what that was about," she giggles.');
                          scene.text('You gasp. "You <i>did not</i> go home with him after the disco and fuck him again!"');
                          scene.text('She grins. "Both holes, morning and night. I could barely walk home afterwards!"');
                          scene.text('"Slut…" you smile.');
                          scene.text('"Takes one to know one!" she grins.');
                          ((s as any).AlbinaQW = (s as any).AlbinaQW ?? {})['know_walk_of_shame'] = 2;
                        } else {
                          scene.text('"I might have went home with him from the disco the other night and let him fuck my brains out…" she whispers. "Then fucked him again the next morning."');
                          scene.text('"Oh my god!" you gasp. "You slut!"');
                          scene.text('"Takes one to know one!" she grins.');
                        }
                      }
                    } else {
                      if ((Math.floor(Math.random() * 3) + 0) === 1) {
                        scene.text('As you chat, she stretches and lets out a soft moan.');
                        scene.text('"You okay?" you ask.');
                        scene.text('"Yeah," she replies. "I went for a massage at the Beauty Bar in the city at the weekend. I always feel really relaxed afterwards."');
                        scene.text('"Is that a recommendation?" you ask with a smile.');
                        scene.text('"If you haven\'t been, then you really should," she replies. "They work magic there."');
                      } else {
                        scene.text('"I can\'t wait to get home so I can get a good workout," she says. "Gym class is okay, but I don\'t feel like it pushes me hard enough."');
                        scene.text('"What is it with you jocks and wanting to get sweaty?" you jokingly reply.');
                        scene.text('"Working up a sweat means you had a good workout," she says. "You should try it sometime and build some muscle. The guys love a girl with a nice firm ass."');
                        scene.text('"I guess, but doesn\'t it hurt pushing yourself like that?" you ask.');
                        scene.text('"That\'s why I spend <i>at least</i> half an hour relaxing in the bath afterwards," she replies.');
                      }
                    }
                  } else {
                    if (((s as any).grupTipe ?? 0) === 4) {
                      scene.text('Albina shakes her head as you approach.');
                      scene.text('"What\'s up?" you ask and she scoffs.');
                      // TODO-QSP: dynamic text: "What''s up? You used to be cool <<$pcs_nickname>>, but then you started hanging...
                      scene.text(`"What's up? You used to be cool ${((s as any).pcs_nickname || '')}, but then you started hanging out with <i>them</i>."`);
                      scene.text('It\'s clear she has no interest in speaking to you despite your attempts, so you just leave her alone.');
                    } else {
                      scene.text('Albina looks up from her as you approach and pulls you in close.');
                      scene.text('"Not here. We\'ll talk later when we\'re alone…" she whispers in your ear before pushing you back and returning to her phone, feigning disinterest in you.');
                      scene.text('The cool kids and some of the jocks are now staring at you, so you quickly leave before anyone says anything.');
                    }
                  }
                }
              } else {
                if (((s as any).grupTipe ?? 0) === 1) {
                  if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
                    if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                      scene.text('Albina has a friendly, yet awkward conversation with you. You both talk about your shared interests, but when you bring up family life she fiercely avoids the subject, eventually refusing to speak with you anymore and storming off.');
                      scene.text('You don\'t know what her problem is, but she\'s always been sensitive when it comes to discussing her home life.');
                      // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                    } else {
                      scene.text('Albina has a friendly conversation with you where you both talk about your shared interests. The conversation then eventually turns into a discussion where you both complain about the different ways that your respective mothers nag at you.');
                      scene.text('You don\'t know what\'s changed in her life that she\'s now willing to talk about a subject that she once fiercely avoided.');
                    }
                  } else {
                    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
                      scene.text('Albina glares at you. "What do you want you fake ass bitch? I don\'t like you, so why would I want to talk to you?"');
                      scene.text('You can tell she isn\'t waiting for an answer, so you back off before she causes a scene.');
                    } else {
                      scene.text('Albina sighs before she starts chatting with you. She doesn\'t dislike you, but it\'s obvious that she\'s just humouring you with conversation.');
                      // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                    }
                  }
                } else {
                  if (((s as any).grupTipe ?? 0) === 2) {
                    if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
                      if (((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0) {
                        scene.text('Albina has a friendly, yet awkward conversation with you. You both talk about the sports you enjoy and which of the jocks have caught your attention lately, but when you bring up family life she fiercely avoids the subject, eventually refusing to speak with you anymore and storming off.');
                        scene.text('You don\'t know what her problem is, but she\'s always been sensitive when it comes to discussing her home life.');
                        // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                      } else {
                        scene.text('Albina has a friendly conversation with you where you both talk about your shared interests. The conversation then eventually turns into a discussion where you both complain about the different ways that your respective mothers nag at you.');
                        scene.text('You don\'t know what\'s changed in her life that she\'s now willing to talk about a subject that she once fiercely avoided.');
                      }
                    } else {
                      if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
                        scene.text('Albina scoffs at you. "I don\'t like you, I barely tolerate you being in the same social group as me, so why would I want to talk to you?"');
                        scene.text('You can tell she isn\'t waiting for an answer, so you back off before she causes a scene.');
                      } else {
                        scene.text('Albina sighs before she starts chatting with you. She doesn\'t dislike you, but it\'s obvious that she\'s just humouring you with conversation.');
                        // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                      }
                    }
                  } else {
                    if (((s as any).grupTipe ?? 0) === 3) {
                      if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
                        scene.text('"You know you remind me of a character from LOL?" you tell her and she looks at you in confusion.');
                        scene.text('"League of Legends? The online strategy game?" you continue and she looks even more confused.');
                        // TODO-QSP: dynamic text: Before you can explain, she puts a finger against your lips and shushes you. "I ...
                        scene.text(`Before you can explain, she puts a finger against your lips and shushes you. "I don't play any of that dumb geeky shit, ${((s as any).pcs_nickname || '')}. I only play fighting games like Tekken and Mortal Kombat."`);
                        scene.text('You nod and end up chatting about fighting games instead, comparing your favorite characters and moves.');
                        // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                      } else {
                        if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
                          // TODO-QSP: dynamic text: Albina rolls her eyes and crosses her arms. "This isn''t your stop, <<$pcs_nickn...
                          scene.text(`Albina rolls her eyes and crosses her arms. "This isn't your stop, ${((s as any).pcs_nickname || '')}. The train to Geeksville terminates over there."`);
                          scene.text('She motions towards the door to the classroom that the nerds hang out in. "So get back on board and piss off!"');
                        } else {
                          scene.text('Albina sighs before she starts chatting with you. She doesn\'t dislike you, but it\'s obvious that she\'s just humouring you with conversation.');
                          // TODO-QSP: $func('npc_reactions', 'general', 'A23')
                        }
                      }
                    } else {
                      if (((s as any).grupTipe ?? 0) === 4) {
                        scene.text('Albina glares at you with a look of utter contempt on her face. "What the hell do you want? Go find the other knuckle brained morons. The zoo is over there."');
                        scene.text('She motions towards the stairway that the gopniks usually hang out in before returning to her phone and ignoring you.');
                        scene.text('"Fucking stuck up rich bitch…" you mutter as you walk away, but she doesn\'t hear you.');
                        scene.text('You don\'t know why, but she seems to have an intense hatred for the gopniks, yourself included.');
                      } else {
                        scene.text('Albina is on her phone as you approach. She looks up at you before returning her attention to her phone and ignoring you.');
                        scene.text('After a few seconds, she looks up again and glares at you. "Go hang out with the other losers, freak! Can\'t you see I\'m busy here?"');
                        scene.text('She shoos you away with a motion of her hand before going back to texting on her phone.');
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Albina," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Albina," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Albina," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Albina," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlbinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAlbinaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big23.jpg');
  // TODO-QSP: dynamic text: <<$temp[''tampon_ask'']>>
  scene.text(`${((s as any).temp ?? 0)?.['tampon_ask'] ?? ''}`);
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Albina," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Albina," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
      // TODO-QSP: dynamic text: She gives you a sympathetic look. "Sorry <<$pcs_nickname>>, but I don''t have an...
      scene.text(`She gives you a sympathetic look. "Sorry ${((s as any).pcs_nickname || '')}, but I don't have any. I'm on birth control and don't get periods…"`);
      scene.text('"Oh…" you nod understandingly.');
      scene.text('"I\'d help if I could, I really would," she says with an apologetic smile.');
    } else {
      scene.text('"Suuuure, just give me a few rubles," she replies and you just stare blankly at her. "Do I look like a fucking dispenser to you?" she scorns. "What kind of idiot doesn\'t keep tampons in her purse?"');
      scene.text('"Do you have any?" you ask in a desperate plea, but she shakes her head.');
      scene.text('"No, I\'m on birth control and don\'t get periods. You need to deal with this yourself, preferably before it starts running down your leg." She then walks away, leaving you to your predicament.');
    }
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2  ||  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
      scene.text('She gives you a bewildered look. "Why are you still using pads? Sorry, but I don\'t have anything like that. I\'m on birth control and don\'t get periods."');
      scene.text('"Oh…" you nod understandingly.');
      scene.text('"I\'d help if I could, I really would," she says with an apologetic smile.');
    } else {
      scene.text('She gives you a stern look. "Do I look like a fucking dispenser to you? What kind of idiot doesn\'t keep tampons in her purse? And why are you still using pads?!"');
      scene.text('"Do you have any?" you ask in a desperate plea, but she shakes her head.');
      scene.text('"No, I\'m on birth control and don\'t get periods. You need to deal with this yourself, preferably before it starts running down your leg." She then walks away, leaving you to your predicament.');
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterVeronika(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A141', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big141.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
    if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
      scene.text('You sit next to Veronika. "What\'s up?" you ask and the two of you start talking about things that have happened recently. She also shows you some photos of her latest skating routine, which makes you wonder if you could ever be as flexible as she is.');
      scene.text('"I wish I could be as flexible as you are. It would save me a lot of muscle pain," you say. She opens her mouth and is about to ask what you mean when she suddenly realizes. She pinches her nose, but she doesn\'t say a word about it.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A141')
      scene.text('After a few awkward seconds, she gets up. "Okay… I\'ve got to go now. Hopefully you\'ll return to reason one day."');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
        scene.text('As you walk past Veronika during your break, you her her mumbling something and approach her. "Were you talking to me? Sorry, I didn\'t hear what you said."');
        scene.text('She stares at you with an empty glare, but doesn\'t say anything. She looks you up and down, then as she walks away, she mumbles again: "Slut…"');
        scene.text('"Frigid virgin…" you reply before getting your mirror out of your bag and checking your looks again before you head to your next lesson.');
      } else {
        scene.text('"Hey Veronika, how are you doing?" you ask as you sit next to her.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>…" she greets you indifferently. "As a matter of fact, I''...
        scene.text(`"Hey ${((s as any).pcs_nickname || '')}…" she greets you indifferently. "As a matter of fact, I'm busy now so if you'll excuse me…"`);
        scene.text('With that, she takes her backpack and walks over to the other jocks. She doesn\'t take part in the conversation, but it seems it\'s still a better option than being seen with you.');
        scene.text('As you still have a lot of time before the next lesson starts, you retouch your makeup and refresh yourself.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
        scene.text('You see Veronika among her fellow jocks and decide to talk to her. "Hey Veronika!" you say as you sit next to her. "What\'s up?"');
        scene.text('She looks up and greets you with a small smile. The two of you start talking about things that have happened to you lately, addressing various topics. She seems indifferent to some of them, but she\'s always happy to talk about sports, especially skating.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A141')
        scene.text('"You know Veronika, I got some ideas about your clothing the other day," you say. She seems confused, as she\'s not really into fashion, especially not as much as you.');
        scene.text('"If you want to enter the Winter Olympic Games, we have to find you a really good one which would fit your nickname. The <i>Ice Queen</i>…" you say jokingly. "You can\'t skate in an average skating costume. Looks are important too, not just the pure skill."');
        scene.text('She smiles, which surprises you a little. You exchange some ideas about her costume before you hear the bell ring. You both pick up your things and head to the classroom.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
          scene.text('"Hi Veronika!" you greet her with a wave as you see her in the hallway.');
          // TODO-QSP: dynamic text: She pretends she didn''t hear you. After a while, when she realizes it''s gettin...
          scene.text(`She pretends she didn't hear you. After a while, when she realizes it's getting awkward, she finally replies. "Oh, sorry ${((s as any).pcs_nickname || '')}. I was lost in my thoughts and I didn't notice you…" she says rigidly.`);
          scene.text('You sigh and as soon as you start to talk to her, she looks at you and puckers her brows, as if she doesn\'t understand why you started talking to her in the first place.');
          scene.text('"I have other things to do…" she says without any hesitation and leaves you to go on her business.');
        } else {
          // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, do you want something?" she asks in her cold voice whe...
          scene.text(`"Hello ${((s as any).pcs_nickname || '')}, do you want something?" she asks in her cold voice when she sees you approaching.`);
          scene.text('"Hi Veronika. I just thought we could chat and catch up?" you reply as you touch her shoulder as a sign of a friendly welcome. She immediately pulls back from you since she doesn\'t like the idea of physical contact, especially with someone she\'s not close to.');
          scene.text('The two of you start talking about things that have happened lately in Pavlovsk, occasionally discussing ice skating and school PE lessons too. She talks to you without interest or concern, but at least she tolerates you enough to have a word or two.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A141')
          scene.text('Talking to her for 10 minutes can feel like an hour as time goes slowly when she doesn\'t put much effort into the conversation. When you realize the break is almost over, you bid her farewell and head to your classroom.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
          // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, I was hoping we would talk today," Veronika says when ...
          scene.text(`"Hello ${((s as any).pcs_nickname || '')}, I was hoping we would talk today," Veronika says when she sees you.`);
          scene.text('"Hey Veronika. As a matter of fact, so was I," you reply.');
          scene.text('"I wanted to ask if you could come and see my skating routine. I\'ve been practicing some new moves lately," she says with hope in her eyes, as there aren\'t a lot of people who\'d be interested in it.');
          scene.text('"Yes, of course! Who wouldn\'t like to steal some of your moves or pick up new skills!" you wink. She is an exceptional skater and some say she might qualify for the next Winter Olympic Games, so you could learn a lot from her.');
          scene.text('"Oh, really? You\'ll come? Wonderful! I can show you many moves which would be helpful to you, too!" She seems like a little kid as she replies.');
          scene.text('"I wouldn\'t miss the chance to see another practice of the Ice Queen," you smile as you refer to her infamous nickname.');
          // TODO-QSP: dynamic text: "You too, <<$pcs_nickname>>?" She rolls her eyes, but smiles. She knows you''re ...
          scene.text(`"You too, ${((s as any).pcs_nickname || '')}?" She rolls her eyes, but smiles. She knows you're just joking, unlike many of the other students who regularly mock her with it.`);
          scene.text('"Come on now, you\'re really acting like your nickname now…" you reply jokingly as you poke her shoulder.');
          scene.text('Both of you burst into laughter and start talking about different topics before you hear the ring.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A141')
          scene.text('You pack your things and go to the classroom together.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
            scene.text('"Hey Veronika, how are things going?" you ask as you approach her.');
            scene.text('"Fine, just fine…" she replies with a huge amount of indifference in her words.');
            scene.text('You know she can be very cold and indifferent to people she doesn\'t like and you aren\'t friends. In fact, you\'re barely on speaking terms despite being in the same social group.');
            scene.text('"And… Is there anything that\'s happened to you lately?" you ask, still trying to strike up a conversation.');
            scene.text('She reluctantly tells you about her practice sessions and the competitions she\'s entered lately, but you get the feeling she\'s not willing to go into details. She\'s trying to keep it as simple and short as possible.');
            // TODO-QSP: dynamic text: "Look, <<$pcs_nickname>>… I have to do something important, so if you don''t min...
            scene.text(`"Look, ${((s as any).pcs_nickname || '')}… I have to do something important, so if you don't mind…" She doesn't even finish the sentence before she starts walking away.`);
            scene.text('"Yeah, no wonder everyone calls you Ice Queen behind your back…" you reply, not caring if she hears you or not. Once she\'s left, you head to the classroom for your next lesson.');
          } else {
            scene.text('"Hey Veronika, what\'s up?" you ask as you approach her.');
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, I''m trying to find some new moves and figures I could do...
            scene.text(`"Hi ${((s as any).pcs_nickname || '')}, I'm trying to find some new moves and figures I could do on the ice," she says as she draws a skating figure in her notepad.`);
            scene.text('"Care to share? I can always use some help when it comes to balance and agility. You apparently know one or two things about those."');
            scene.text('She glances at you with her blank, indifferent stare before you start talking about different techniques and moves. You try to pay attention to what she says since she\'s more experienced than anyone else. In fact, she has every chance to be a professional skater.');
            scene.text('"Thanks Veronika. I\'m sure many of these will be useful and your advice can come in handy anytime." You feel you\'ve learned something and it was good to talk to her. Despite her nickname, she can be talkative too.');
            scene.text('"And most importantly, never forget to warm up and stretch correctly," she adds before she goes on her business.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A141')
            scene.text('You look at the clock in the hallway and see you don\'t have too much time left. You grab your things and go to your next lesson.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
            // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>," Veronika greets you with a slight wave when she sees ...
            scene.text(`"Hello ${((s as any).pcs_nickname || '')}," Veronika greets you with a slight wave when she sees you approaching.`);
            scene.text('"Hey Veronika, I just wanted to chat," you reply.');
            scene.text('As you sit next to her, she starts talking mainly about her practicing and some of her previous competitions. She does almost all the talking, but you don\'t mind. It\'s hard to get a conversation like this out of her.');
            scene.text('She\'s talking about some of her moves on the ice when you interrupt her. "Look, this is all very interesting. Not many know this, but physics actually plays a huge part in skating."');
            scene.text('For the rest of the break time, you explain some things to her. How surface friction, different angles and dragging can help her with getting better results.');
            scene.text('The time flies and you could talk about it for many hours, but you soon hear the bell ringing.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A141')
            scene.text('"Alright, Veronika, we\'ll get back to this later," you say and head to the classroom together, hoping you won\'t be late.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
              scene.text('You see Veronika sitting alone in the hallway, so you decide to go and talk to her.');
              scene.text('"Hello Veronika, how are you doing today?" you ask with a friendly smile.');
              scene.text('She looks up and coldly glares at you. "No, don\'t bother me now."');
              scene.text('"Uh, okay… I\'m sorry for bothering you then." The atmosphere suddenly becomes very chilling. Calling her the Ice Queen is not a flaw, it seems.');
              scene.text('As you still have a lot of time before the next lesson, you double-check your homework before you go to the classroom.');
            } else {
              scene.text('As you walk past the jocks in the hallway, you notice Veronika looking for something in her backpack.');
              scene.text('"Hey Veronika, is there anything I can help with?" you ask as you try to figure out what the problem is.');
              scene.text('"No." She doesn\'t even look up as she replies.');
              scene.text('Just as you\'re about to leave, she glances up and stops you.');
              scene.text('"Wait! Maybe you can help me, yes," she says, hoping you still hear her. You turn back, smile at her and ask her again. She explains that she didn\'t have time to do her homework because she was practicing for her next competition until late.');
              scene.text('You sit next to her and help her with it. Not only do you help her, but also explain some things. You\'re not sure how much she understands, but you\'re happy that she\'s listening to you at all.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A141')
              scene.text('"You see? It wasn\'t that complicated and it\'s not that hard to understand," you say as you finish.');
              scene.text('"I see." She keeps her reply short and thanks you for the help before you both hurry to the classroom.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
              scene.text('As you\'re wandering the hallway, you see Veronika leaning against the wall and decide to chat with her.');
              // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, I see you have nothing better to do so you came to tal...
              scene.text(`"Hello ${((s as any).pcs_nickname || '')}, I see you have nothing better to do so you came to talk to me?" she asks with a little smile.`);
              scene.text('"Don\'t be silly. I\'ll talk to the Queen of the Ice whenever I feel like it." You squat next to her. "Don\'t even think for a second that just because you stand and I squat, I\'d ever look up to you!" you jokingly add.');
              scene.text('You both smile and start chatting. She mostly talks about her recent results and how much she has been improved lately, but complains about your PE lessons as she doesn\'t think the level of the PE education is good enough.');
              scene.text('You listen to her and occasionally ask her about the upcoming competitions. After a while, you share some of your latest stories with her and also complain a lot about school, but for different reasons.');
              scene.text('"Alright Veronika, I guess it\'s time to finish the interview," you say as you wouldn\'t miss a chance to mock her a little.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A141')
              scene.text('When the bell rings, you go about your own business as she joins the other jocks to go to the classroom.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
                scene.text('"Well, well, look who\'s here…" you say as you approach Veronika.');
                // TODO-QSP: dynamic text: She looks up and notices you. "What do you want, <<$pcs_firstname>>?" she asks w...
                scene.text(`She looks up and notices you. "What do you want, ${((s as any).pcs_firstname || '')}?" she asks with a cold, almost freezing tone in her voice. "Shouldn't you be somewhere else? Like drinking in a stairway, smoking in the park or whatever it is you gopniks do these days?"`);
                scene.text('"Brrrr… Am I the only one who feels a little icy here?" you say mockingly as you lean against the wall and cross your arms. "Your problem is that there\'s no one in the world who\'d ever want to heat you up a little, if you know what I mean…"');
                // TODO-QSP: dynamic text: She rolls her eyes, but you must admit that she takes your mockery quite well. H...
                scene.text(`She rolls her eyes, but you must admit that she takes your mockery quite well. However, she isn't amused at all. "You know ${((s as any).pcs_nickname || '')}, I could insult you too. But that's what mirrors are for…" she says as she turns around and joins the other jocks.`);
                scene.text('"Get back here, bitch!" you snarl while clenching your fist, but realize it wouldn\'t be worth it. You return to the other gopniks and try to calm down.');
              } else {
                scene.text('As you\'re wandering through the hallway, you see Veronika sitting on the floor checking her phone. You walk up to her and, without greeting her, sit down and start chatting.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A141')
                scene.text('"Ugh, where do I begin? What does one need to suffer?" you say before complaining about anything that comes to mind. You complain about school, your fellow gopniks and your parents.');
                // TODO-QSP: dynamic text: She listens to you for some time before finally speaking up. "Hey <<$pcs_nicknam...
                scene.text(`She listens to you for some time before finally speaking up. "Hey ${((s as any).pcs_nickname || '')}, why do you tell me these things? We're barely on speaking terms anyway and what you're talking about is something I'm not interested in at all…" she says with a cold tone.`);
                scene.text('"Suuuure, whatever. Jog on, even better, skate on. Queen of the Ice, huh? More like Queen of Boredom…" you mutter as you stand up and go back to your fellow gopniks to wait for the bell.');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A141'] >= 50) {
              // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>…" Veronika greets you as you walk towards her. "Are you lo...
              scene.text(`"Hi ${((s as any).pcs_nickname || '')}…" Veronika greets you as you walk towards her. "Are you looking for me?"`);
              scene.text('"Hi Veronika, yes, yes, I was looking for you. It\'s always good to see you and talk," you happily reply.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A141')
              scene.text('She starts talking about her skating routines, techniques and dreams of entering the Winter Olympic Games. Even though you\'re not an expert of this topic, she\'s happy to talk about it as she knows you always listen to her.');
              scene.text('"You\'re so energetic when you mention these things. I envy you a lot, you know. It must be super cool. I can\'t even imagine what it would be like to participate in the Olympic Games! I\'m sure there are some good-looking boys among the athletes…" you blush.');
              scene.text('"Ah, you know I\'m not interested in that. Anyway, not everything is black or white. You know how much they mock me and call me that nickname. Even the jocks make fun of me sometimes…" she says with sadness in her voice.');
              scene.text('You exactly know what it feels like, so you pat her shoulder which, surprisingly, she doesn\'t mind. When you hear the bell ringing, you grab your things and head to the next lesson together.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
                scene.text('Veronika is leaning against the wall and checking something on her phone when you decide to approach her.');
                scene.text('"He…" you start to greet her when she looks up and notices you standing in front of her.');
                scene.text('"Don\'t even start…" she coldly replies. As she looks up and her eyes meets yours, you see a piercing, cold glare that could freeze the sun.');
                scene.text('Understanding you\'re not welcome, you go back to your classroom and try to kill the time until the next lesson starts.');
              } else {
                scene.text('"Hey Veronika!" you greet her as you approach.');
                // TODO-QSP: dynamic text: "Oh… Hi <<$pcs_nickname>>…" she replies indifferently.
                scene.text(`"Oh… Hi ${((s as any).pcs_nickname || '')}…" she replies indifferently.`);
                scene.text('You sit next to her and try to strike up a conversation, but you end up doing most of the talking. She gives you a one-word answer every now and then, but mostly just nods or grunts. She doesn\'t seem to enjoy the conversation and doesn\'t try to hide that fact.');
                scene.text('In spite of that, she spends some time with you, listening to you talk about your problems at school and how the others pick you on almost every time.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A141')
                scene.text('After a few minutes, she starts packing her things. "Okay, I\'m leaving now."');
                scene.text('She keeps it short and goes about her business as you stay for a while and try to eavesdrop on others talking.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Veronika," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVeronikaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Veronika," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVeronikaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Veronika," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVeronikaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Veronika," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVeronikaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterVeronikaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big141.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Veronika," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Veronika," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A141'] >= 70) {
      scene.text('"Yeah, of course," she says calmly, immediately digging into her backpack and coming up with a tampon. "Here."');
      scene.text('"Thanks, Veronika."');
      scene.text('"It\'s fine," she shrugs. "I have a huge stash for competitions."');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A141'] > 20) {
        scene.text('She gives you a look.');
        scene.text('"Sure I guess," she sighs, digging into her backpack and coming up with a tampon. "Here."');
        scene.text('"Thanks, Veronika."');
        scene.text('"It\'s fine," she shrugs. "I have a huge stash for competitions. That\'s not permission to use me as a dispenser though."');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      } else {
        scene.text('She gives you a look.');
        scene.text('"… Fine," she says begrudgingly and makes a big show of digging through her backpack and coming up with a tampon. "Here."');
        scene.text('"Thanks, Veronika."');
        scene.text('"Whatever," she shrugs.');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A141'] >= 70) {
      scene.text('"I\'ve only got tampons," she says calmly, immediately digging into her backpack and coming up with one. "Here."');
      scene.text('"Thanks Veronika."');
      scene.text('"It\'s fine," she shrugs. "I have a huge stash."');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A141'] > 20) {
        scene.text('She gives you a look.');
        scene.text('"Sure I guess," she sighs, digging into her backpack. "But I\'ve only got tampons. Here."');
        scene.text('"Thanks Veronika."');
        scene.text('"It\'s fine," she shrugs. "I have a huge stash for competitions. That\'s not permission to use me as a dispenser though."');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      } else {
        scene.text('She gives you a look.');
        scene.text('"… Fine," she says begrudgingly and makes a big show of digging through her backpack and coming up with a tampon. "But I don\'t have any pads. I\'m an ice skater, not a nerd, remember? Here."');
        scene.text('"Thanks, Veronika."');
        scene.text('"Whatever," she shrugs.');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      }
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big19.jpg');
  qspCall(s, 'npc_relationship', 'modify', 'A19', 'like');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 225) {
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
      scene.text('Lina sees you and leans forward conspiratorially.');
      scene.text('"Any good stories to tell?" she whispers.');
      scene.text('Looking around to make sure nobody is watching, you lean in and whisper back, telling her about some of your latest sexual adventures.');
      scene.text('When your story is done, she leans back against the wall, a dreamy look on her face.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A19')
    } else {
      if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
        scene.text('"Christina says that you fuck anyone," Lina says while glaring at you.');
        scene.text('"Christina doesn\'t know what she\'s talking about it," you reply.');
        scene.text('"I knew it! It\'s true isn\'t it? Christina is always correct… Go and suck someone off!" she fires back.');
        scene.text('"Whatever, bitch. Like you know anything about me," you scorn as you walk away.');
      } else {
        scene.text('Lina gives you a strange look, like she has something to say but she\'s afraid to be seen talking to you.');
        scene.text('"What\'s it like?" she asks, unable to help herself.');
        scene.text('"What is what like?" you ask back in confusion.');
        scene.text('"Free to not care what others think. To have sex whenever you want."');
        scene.text('You think about it for a moment. "Every day is… just… fun," you shrug.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A19')
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," she greets you.
        scene.text(`"Hey ${((s as any).pcs_nickname || '')}," she greets you.`);
        scene.text('"Hi Lina," you reply. "What\'s new with you?"');
        // TODO-QSP: $func('npc_reactions', 'general', 'A19')
        scene.text('The two of you spend the break chatting about various things until it ends.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
          scene.text('Lina sees you coming over to her. "You just think you\'re so cool. You\'ll never be as cool as Christina!" she says.');
          scene.text('You have a mental picture of Christina wearing a fancy dress with her hair done, and can\'t help but laugh out loud.');
          scene.text('Your laugh causes her face to turn bright red. "You fucking bitch! You\'ll get yours someday!"');
        } else {
          // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. Did you see the last track race?"
          scene.text(`"Hey, ${((s as any).pcs_nickname || '')}. Did you see the last track race?"`);
          scene.text('"Sorry, Lina. I don\'t really watch those."');
          scene.text('"Oh. You should come watch some time. You might like it."');
          scene.text('"Maybe."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A19')
          scene.text('"See you around, Lina."');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
          scene.text('"I\'ve finally been improving my lap times!" Lina says proudly when she sees you.');
          scene.text('"Great news! I\'m glad you\'re improving!" you encouragingly tell her.');
          scene.text('She nods. "Yeah, the new workout plan that Christina made for me is really great. She\'s really helped me out a lot."');
          // TODO-QSP: $OpenInnerThought + 'There she goes again, worshipping Christina!' + $CloseInnerThought
          // TODO-QSP: $func('npc_reactions', 'general', 'A19')
        } else {
          if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
            scene.text('"I always hear that I\'m bad at sports, but you\'re even worse than me!" Lina laughs, sparing no time to insult you.');
            scene.text('"Where did this come from?"');
            scene.text('"It\'s just something me and the other girls were discussing. I just wanted you to know," she mockingly replies.');
            scene.text('"Come face me then and I\'ll show you who\'s the worse athlete!" you fire back, but deciding this conversation has lasted long enough, you walk away.');
          } else {
            // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>? Christina is looking for me…" Lina says ir...
            scene.text(`"What do you want, ${((s as any).pcs_nickname || '')}? Christina is looking for me…" Lina says irritatingly.`);
            scene.text('"I wanted to ask you if you had the notes from the class. I need to copy them," you tell her.');
            scene.text('She quickly excuses herself. "We\'ll do it later. I have to find Christina right away or else she\'ll get mad…"');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
            scene.text('Looking up from her schoolbook and seeing you coming, Lina shows you her book. "What\'s the answer to this problem?"');
            scene.text('"42," you reply. Come on, that\'s an easy one!"');
            scene.text('"I wasn\'t paying attention to the teacher because Christina was texting me. She wants to know what I\'m wearing to the dance this weekend."');
            scene.text('"Why does that matter?" you ask.');
            scene.text('"I don\'t know. Maybe she wants us to match or something?" she replies, looking a little confused.');
            // TODO-QSP: $OpenInnerThought + 'Yeah right. She probably wanted to make sure she''s wearing something better th...
            scene.text('You walk away, leaving Lina looking all dreamy-eyed thinking about her and Christina wearing the same clothes. She probably didn\'t even see you leaving.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
              scene.text('"Unless you\'re here to do my homework, get lost nerd."');
              scene.text('"What did I ever do to you, Lina?"');
              scene.text('"Christina hates you. That\'s good enough for me."');
              scene.text('"Right… Bye then." You get out of there before things get heated.');
            } else {
              scene.text('Seeing you approaching, Lina raises an eyebrow. "You sure you want to be seen here? I thought nerds were supposed to be smart."');
              scene.text('"Don\'t be mean, Lina. I\'m just saying hello."');
              scene.text('"Hi," she replies. "Now leave before somebody runs you out."');
              scene.text('You sigh. "Alright, fine. I can take the hint." You walk away before anybody starts messing with you.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
              if (((s as any).pcs_tattoos ?? 0)?.['total'] === 0) {
                // TODO-QSP: dynamic text: "Why don''t you have any tattoos, <<$pcs_nickname>>?"
                scene.text(`"Why don't you have any tattoos, ${((s as any).pcs_nickname || '')}?"`);
                scene.text('"I don\'t know," you say with a shrug.');
                scene.text('"I\'m surprised the other gopniks let you hang around without at least one. Like an initiation or something."');
                scene.text('"We aren\'t a gang, Lina," you reply with a laugh.');
                scene.text('"Okay…" she says, not sounding convinced.');
                scene.text('"If you don\'t believe me, just look after the next gym class. We don\'t all have tattoos."');
                scene.text('She laughs. "Yeah, I\'m sure the other girls wouldn\'t mind me checking for tattoos. Especially Lena and Lera."');
                scene.text('You both end up laughing at the thought, and gossip for the rest of the break away.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A19')
              } else {
                scene.text('"Does getting a tattoo hurt?"');
                scene.text('"A little. Why, are you thinking about getting one?"');
                // TODO-QSP: dynamic text: "Hell no. Christina would beat my ass if I did. She says…" She goes on a tirade ...
                scene.text(`"Hell no. Christina would beat my ass if I did. She says…" She goes on a tirade about Christina's views on tattoos and the people who get them when she remembers who she's talking to. "Err… sorry ${((s as any).pcs_nickname || '')}."`);
                scene.text('"You should make your own mind up about things, Lina."');
                scene.text('You spend the rest of your break trying to get her to open her mind to new ideas, but you\'re pretty sure it had no effect.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A19')
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
                scene.text('Lina sees you coming and seems to get nervous. "I don\'t speak to your kind. Go away!"');
                scene.text('"My <i>kind</i>?"');
                scene.text('As you come closer, she shrinks back. "Just go away!"');
                scene.text('You see the other jocks starting to look your way, and decide it\'s best to leave.');
              } else {
                scene.text('"Why do you people always get tattoos? Christina says they look awful."');
                if (((s as any).pcs_tattoos ?? 0)?.['total'] === 0) {
                  scene.text('"What are you talking about? I don\'t have any tattoos."');
                  scene.text('"It\'s just a matter of time then."');
                  scene.text('"Wow. Okay, bye bitch," you reply before you walk away.');
                } else {
                  scene.text('"My body is a work of art. Don\'t be jealous of that."');
                  scene.text('"I\'m not jealous! Eww. Why would I want that crap on me?"');
                  scene.text('"Okay, did Christina not let you eat her out today or something? You\'re in a bad mood."');
                  scene.text('With that said, you just walk away.');
                }
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
              scene.text('Lina sees you walking over to her and looks uncomfortable.');
              scene.text('"How are you, Lina?" you ask while giving her your best smile.');
              scene.text('"I\'m fine," she replies. "Look, I like you, but I can\'t be seen talking to you."');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
                scene.text('"So, where\'s the old ball and chain?" you ask teasingly.');
                // TODO-QSP: dynamic text: "Oh shut up, <<$pcs_nickname>>! Don''t you have anything better to do? At least ...
                scene.text(`"Oh shut up, ${((s as any).pcs_nickname || '')}! Don't you have anything better to do? At least I have a friend unlike <i>some</i> people…" she fires back.`);
              } else {
                scene.text('Lina sees you walking over to her and looks uncomfortable.');
                scene.text('"How are you, Lina?" you ask while giving her your best smile.');
                scene.text('"I\'m sorry, but I can\'t be seen talking to you."');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lina," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lina," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lina," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lina," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLinaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLinaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big19.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Lina," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Lina," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 70) {
      scene.text('She looks around before quickly digging through her backpack for a tampon. "Here."');
      scene.text('"Thanks, Lina."');
      scene.text('"Just don\'t tell Christina," she whispers. "I know how she feels about you. She\'d be pissed."');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      (s as any).isprok = 1;
    } else {
      if (((s as any).npc_rel ?? 0)?.['A19'] > 20) {
        scene.text('She looks around before hesitantly digging through her backpack for a tampon. "Here."');
        scene.text('"Thanks, Lina."');
        scene.text('"Just don\'t tell Christina," she whispers. "I know how she feels about you. She\'d be pissed."');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        scene.text('"No fucking way!" She gives you a look. "Take care of yourself, you dumb bimbo!');
        scene.text('She then walks away, leaving you in the middle of the hallway.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 70) {
      scene.text('She looks around before quickly digging through her backpack. "I only have tampons."');
      scene.text('"Thanks, Lina."');
      scene.text('"Just don\'t tell Christina," she whispers. "I know how she feels about you. She\'d be pissed."');
      scene.text('You run off to the bathroom to go put the tampon in before class starts.');
      (s as any).isprok = 1;
    } else {
      if (((s as any).npc_rel ?? 0)?.['A19'] > 20) {
        scene.text('She looks around before hesitantly digging through her backpack. "I only have tampons."');
        scene.text('"Thanks, Lina."');
        scene.text('"Just don\'t tell Christina," she whispers. "I know how she feels about you. She\'d be pissed."');
        scene.text('You run off to the bathroom to go put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        scene.text('"No fucking way!" She gives you a look. "Take care of yourself, you dumb bimbo! And who the fuck uses pads?"');
        scene.text('She then walks away, leaving you cramping in the middle of the hallway.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLariska(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  if (((s as any).LariskaQW ?? 0)?.['story'] >= 2) {
    if (((s as any).LariskaQW ?? 0)?.['story'] === 2) {
      if (((s as any).christinaQW ?? 0)?.['fight'] === 1) {
        qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
        ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
        scene.text('Pulling out the volleyball she dropped outside your parents apartment the other day, you hand it to her. "You dropped this, Lariska."');
        scene.text('When she sees the ball, her eyes grow wide and she looks around fearfully. Seeing that Christina is engrossed in her conversation with Lina, she snatches the ball and stuffs it out of sight.');
        // TODO-QSP: dynamic text: "I''m sorry, <<$pcs_nickname>>. If Christina finds out I was there instead of th...
        scene.text(`"I'm sorry, ${((s as any).pcs_nickname || '')}. If Christina finds out I was there instead of the sports center like I told her I would be…"`);
        scene.text('"Then why were you there?" you ask her teasingly, pretty sure you already know the answer.');
        scene.text('Her face turns bright red. "I-I… Uh… I…" she stammers as she tries to think of an excuse, unwilling to admit the truth.');
        scene.text('"Relax," you say laughing. "I beat the shit out of her, so she knows better than to deny me something I want. Just ask her about it the next time you get a chance, okay?"');
        scene.text('She looks at you, a bit dazed, but manages to nod.');
        scene.text('Giving her a soft smile, you head off to your next class.');
      } else {
        if (((s as any).christinaQW ?? 0)?.['blackmail'] >= 2  ||  ((s as any).christinaQW ?? 0)?.['subpath'] >= 2) {
          qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
          scene.text('Pulling out the volleyball she dropped outside your parents apartment the other day, you hand it to her. "You dropped this, Lariska."');
          scene.text('When she sees the ball, her eyes grow wide and she looks around fearfully. Seeing that Christina is engrossed in her conversation with Lina, she snatches the ball and stuffs it out of sight.');
          // TODO-QSP: dynamic text: "I''m sorry, <<$pcs_nickname>>. If Christina finds out I was there instead of th...
          scene.text(`"I'm sorry, ${((s as any).pcs_nickname || '')}. If Christina finds out I was there instead of the sports center like I told her I would be…"`);
          scene.text('"Then why were you there?" you ask her teasingly, pretty sure you already know the answer.');
          scene.text('Her face turns bright red. "I-I… Uh… I…" she stammers as she tries to think of an excuse, unwilling to admit the truth.');
          scene.text('"Relax," you say laughing. "I already talked to her and she agreed to let you hang out with me outside of school. I promise. Just ask her about it the next time you get a chance, okay?"');
          scene.text('She looks at you, a bit dazed, but manages to nod.');
          scene.text('Giving her a soft smile, you head off to your next class.');
        } else {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 3;
          qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
          scene.text('Pulling out the volleyball she dropped outside your parents apartment the other day, you hand it to her. "You dropped this, Lariska."');
          scene.text('When she sees the ball, her eyes go wide and she looks around fearfully. Seeing that Christina is engrossed in her conversation with Lina, she snatches the ball and stuffs it out of sight.');
          // TODO-QSP: dynamic text: "I''m sorry, <<$pcs_nickname>>. If Christina finds out I was there instead of th...
          scene.text(`"I'm sorry, ${((s as any).pcs_nickname || '')}. If Christina finds out I was there instead of the sports center like I told her I would be…"`);
          scene.text('"Then why were you there?" you ask her teasingly, pretty sure you already know the answer.');
          scene.text('Her face turns bright red. "I-I… Uh… I…" she stammers as she tries to think of an excuse, unwilling to admit the truth.');
          scene.text('"Relax," you say laughing. "I\'m pretty sure I already know," you say with a twinkle in your eye.');
          scene.text('Her face flushes again. "Don\'t tell Christina I was there! She doesn\'t like me hanging around you. She hates you, always has."');
          scene.text('"I know, though I have no idea why. But don\'t worry, I\'ll figure out a way for her to agree to let us hang out. Or eliminate the need for her approval."');
          // TODO-QSP: dynamic text: Her eyes grow wide. "Just be careful, <<$pcs_nickname>>. I don''t want her to hu...
          scene.text(`Her eyes grow wide. "Just be careful, ${((s as any).pcs_nickname || '')}. I don't want her to hurt you because of me."`);
          scene.text('"I can take it, sweetie. Especially when it\'s worth it." You give her a sweet smile and head off to class.');
        }
      }
    } else {
      if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
        qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
        if (((s as any).christinaQW ?? 0)?.['blackmail'] >= 2  ||  ((s as any).christinaQW ?? 0)?.['subpath'] >= 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 5;
          qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
          // TODO-QSP: dynamic text: "Okay, <<$pcs_nickname>>. I guess Christina won''t stop me from hanging out with...
          scene.text(`"Okay, ${((s as any).pcs_nickname || '')}. I guess Christina won't stop me from hanging out with you now," she smiles shyly. "Do you want to come over after school and work on our homework together?"`);
          scene.text('You smile in response. "Sure. I\'ll meet up with you after school!"');
          scene.text('She blushes a little. "Good, I\'m looking forward to it!"');
          // TODO-QSP: $func('npc_reactions', 'general', 'A13')
        } else {
          scene.text('"Hey Lariska! How\'s your day going?"');
          // TODO-QSP: dynamic text: "I''m sorry <<$pcs_nickname>>, but I already told you that Christina doesn''t wa...
          scene.text(`"I'm sorry ${((s as any).pcs_nickname || '')}, but I already told you that Christina doesn't want me hanging out with you."`);
          scene.text('"I know, but I\'m working on it. In the meantime, I was just saying hi."');
          scene.text('She gives you a sad smile. "O-Oh. I\'m sorry, I just keep thinking about it. Hopefully you\'ll manage to convince her."');
          scene.text('"Hang in there, sweetie. I\'ll convince her, I promise."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A13')
        }
      } else {
        if (((s as any).LariskaQW ?? 0)?.['story'] === 4) {
          ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 5;
          qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
          // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>. I guess Christina won''t stop me from hanging out with ...
          scene.text(`"Okay ${((s as any).pcs_nickname || '')}. I guess Christina won't stop me from hanging out with you now," she smiles shyly. "Do you want to come over after school and work on our homework together?"`);
          scene.text('You smile in response. "Sure thing, Lariska. I\'ll meet up with you after school!"');
          scene.text('She blushes a little. "Good, I\'m looking forward to it!"');
          // TODO-QSP: $func('npc_reactions', 'general', 'A13')
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A13', 'love');
          scene.text('"Hey cutie," you say when you see Lariska.');
          scene.text('She blushes a little, but still smiles at you. You then spend the rest of the break chatting with her.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A13')
        }
      }
    }
  } else {
    qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 225) {
      if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
        scene.text('Lariska smiles when she sees you. "Hey slut, what are you up to?"');
        scene.text('"Bored. Hey, did I ever tell you about the time I…"');
        scene.text('You spend the rest of break telling her dirty stories, trying to make her face turn as red as you can before class starts.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A13')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
          scene.text('"Aren\'t you looking for a cock to suck, you big slut?" Lariska asks mockingly.');
          scene.text('"Shut up, Lariska! Don\'t you have Christina\'s tail to run after or something?" you tiredly reply.');
          scene.text('"Poor little slut. Go chase another cock," she laughs as she walks away.');
        } else {
          scene.text('Seeing you in the hallway, Lariska can\'t help but scowl. "Why are <i>you</i> here? The boys bathroom is that way, I\'m sure they\'re missing you right now."');
          scene.text('You respond by giving her your best sultry look. "I take care of girls too. Wanna try?"');
          // TODO-QSP: dynamic text: She gives you a shocked look as her face turns bright red. "Go away, <<$pcs_nick...
          scene.text(`She gives you a shocked look as her face turns bright red. "Go away, ${((s as any).pcs_nickname || '')}!"`);
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
          // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, have you seen Christina around?" Lariska asks.
          scene.text(`"Hey ${((s as any).pcs_nickname || '')}, have you seen Christina around?" Lariska asks.`);
          scene.text('"No, why?" You can sense the desperation in her demeanor.');
          scene.text('She dismayingly looks at you. "Well Lina was running after her and I don\'t want to be left out…"');
          scene.text('"Listen Lariska," you say as you grab hold of her. "You don\'t need to run after anyone. You\'re fine on your own, okay? Now stop worrying and head to class instead."');
          scene.text('Blushing, she nods. "I\'ll try."');
          // TODO-QSP: $func('npc_reactions', 'general', 'A13')
          scene.text('You spend the rest of break chatting with her, trying to take her mind off Christina.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
            scene.text('"The other kids may think you\'re cool, but I know better!"');
            scene.text('"Well, that\'s one way to start a conversation, I guess."');
            scene.text('"Pass, bitch. I would rather not talk with you at all."');
            scene.text('"Okay… Who\'s actually the bitch here?" You walk away before this gets heated.');
          } else {
            // TODO-QSP: dynamic text: Lariska smiles. "Hey <<$pcs_nickname>>! I need help with a thing and I think you...
            scene.text(`Lariska smiles. "Hey ${((s as any).pcs_nickname || '')}! I need help with a thing and I think you're the perfect person that can help me out."`);
            scene.text('"What do you need help with?" you curiously ask.');
            scene.text('"Well… I need to impress Christina and need your help with coming up with something fitting…" she replies before she starts on a long tirade about what might impress Christina.');
            scene.text('Feeling your braincells slowly dying, you interrupt her instead. "Well, I\'ve got to head to class. Got this thing to do. Bye!"');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, have you seen Christina around?" Lariska asks.
            scene.text(`"Hey ${((s as any).pcs_nickname || '')}, have you seen Christina around?" Lariska asks.`);
            scene.text('"No, why?" You can sense the desperation in her demeanor.');
            scene.text('She dismayingly looks at you. "Well Lina was running after her and I don\'t want to be left out…"');
            scene.text('"Listen Lariska," you say as you grab hold of her. "You don\'t need to run after anyone. You\'re fine on your own, okay? Now stop worrying and head to class instead."');
            scene.text('She nods while blushing. "I\'ll try."');
            // TODO-QSP: $func('npc_reactions', 'general', 'A13')
            scene.text('You spend the rest of break chatting with her, trying to take her mind off Christina.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
              scene.text('"I sure beat your ass during gym class. You had no chance against me!" Lariska smiles, gleefully trash-talking you.');
              scene.text('"Well at least I don\'t have to fish for other people\'s approval," you ferociously tell her off.');
              scene.text('"I can\'t believe you said something like that!" she replies, seemingly shocked.');
              scene.text('"Don\'t start what you can\'t finish then," you say, walking away before she can respond.');
            } else {
              // TODO-QSP: dynamic text: Lariska smiles. "Hey <<$pcs_nickname>>! I need help with a thing and I think you...
              scene.text(`Lariska smiles. "Hey ${((s as any).pcs_nickname || '')}! I need help with a thing and I think you're the perfect person that can help me out."`);
              scene.text('"What do you need help with?" you curiously ask.');
              scene.text('"Well… I need to impress Christina and need your help with coming up with something fitting…" she replies before she starts on a long tirade about what might impress Christina.');
              scene.text('Feeling your braincells slowly dying, you interrupt her instead. "Well, I\'ve got to head to class. Got this thing to do. Bye!"');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. When are you going to stop staring at books and come pla...
              scene.text(`"Hey ${((s as any).pcs_nickname || '')}. When are you going to stop staring at books and come play some sports with us?"`);
              scene.text('"No thank you, Lariska. I want to go to university, so I have to keep studying."');
              scene.text('"There\'s nothing wrong with studying, but you have to go outside once in a while too."');
              scene.text('You tell her a bit about the last book you read, but you can see her eyes glazing over. "Okay, I need to head to class," you say, letting her off the hook.');
              scene.text('"Okay," she responds. "See you later." She\'s trying to hide her relief.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A13')
            } else {
              if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
                scene.text('"You don\'t belong here, nerd. You better leave before I get Christina to kick your ass!"');
                scene.text('"My, aren\'t you friendly today?"');
                scene.text('"I\'m not kidding, bitch! Get lost. Now!"');
                scene.text('Sighing, you leave before she can start a fight.');
              } else {
                scene.text('"Hey Lariska. Why can\'t you trust atoms?"');
                // TODO-QSP: dynamic text: "Huh? What are you talking about, <<$pcs_nickname>>?"
                scene.text(`"Huh? What are you talking about, ${((s as any).pcs_nickname || '')}?"`);
                scene.text('"They make up everything!"');
                scene.text('"Right… I gotta go. Christina needs me."');
                scene.text('Standing up, she walks away before you can tell her any more jokes.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
                scene.text('Lariska sees you walking towards her and stands up, looking nervous.');
                scene.text('"Hey, Lariska."');
                // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. You know Christina will throw a fit if she sees you talk...
                scene.text(`"Hi, ${((s as any).pcs_nickname || '')}. You know Christina will throw a fit if she sees you talking to me."`);
                scene.text('"Fuck her. I\'m not afraid."');
                scene.text('Your attitude seems to embolden her a bit, as she stands a bit straighter and actually talks to you for a while.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A13')
                scene.text('Break eventually ends and she waves goodbye with a secret little smile on her face meant just for you.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
                  scene.text('Lariska sees you walking towards her and stands up, looking nervous.');
                  scene.text('"Hey Lariska."');
                  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. Sorry, can''t chat. Christina needs me."
                  scene.text(`"Hi ${((s as any).pcs_nickname || '')}. Sorry, can't chat. Christina needs me."`);
                  scene.text('She then runs off, looking for her idol.');
                  // TODO-QSP: $OpenInnerThought + 'Well that was rude, bitch!' + $CloseInnerThought
                } else {
                  scene.text('Lariska sees you walking towards her and stands up, looking nervous.');
                  scene.text('"Hey Lariska."');
                  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. Sorry, I don''t think you''re supposed to be here." She l...
                  scene.text(`"Hi ${((s as any).pcs_nickname || '')}. Sorry, I don't think you're supposed to be here." She looks around, like she's afraid and needs protection.`);
                  scene.text('"I just wanted to chat with you. I won\'t bite… much."');
                  scene.text('Her face turns bright red and she starts shuffling her feet while giving you a pleading look. "I\'m sorry, but I\'ll get in trouble if Christina sees me talking to you…"');
                  scene.text('"Okay, okay. I\'ll just head to class then. See you around." She gives you a brief, shy smile before you walk away.');
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
                scene.text('"I asked Christina if you could join our group. I was not prepared for the answer."');
                scene.text('You shrug. "Yeah, that bitch has hated me for as long as I can remember. Whatever her issue is, it\'s her problem."');
                scene.text('"I would be careful talking like that. If she hears you…"');
                scene.text('You shrug again. "I\'m not afraid of her."');
                scene.text('Changing the subject, the two of you gossip for the rest of break.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A13')
              } else {
                if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
                  scene.text('"So where\'s the old ball and chain?" you ask teasingly.');
                  // TODO-QSP: dynamic text: "Oh shut up, <<$pcs_nickname>>! Don''t you have anything better to do? At least ...
                  scene.text(`"Oh shut up, ${((s as any).pcs_nickname || '')}! Don't you have anything better to do? At least I have friends!" she fires back.`);
                  scene.text('You start laughing. "Yeah, <i>friends</i>."');
                  scene.text('Rolling your eyes at her, you walk away.');
                } else {
                  // TODO-QSP: dynamic text: "What are you doing here, <<$pcs_nickname>>? You don''t have friends here."
                  scene.text(`"What are you doing here, ${((s as any).pcs_nickname || '')}? You don't have friends here."`);
                  scene.text('"Just because I\'m not in your little social club doesn\'t mean I don\'t have friends."');
                  scene.text('"That\'s exactly what that means. If you actually tried to get along with people, maybe they would start accepting you."');
                  scene.text('Shrugging, you just give her a smile and walk away.');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lariska," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLariskaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lariska," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLariskaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lariska," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLariskaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Lariska," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLariskaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLariskaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Lariska," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Lariska," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 70) {
      scene.text('She looks around before quickly digging through her backpack for a tampon and discreetly passes it to you. "Here."');
    } else {
      scene.text('She looks around before hesitantly digging through her backpack for a tampon. "Here."');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 70) {
      scene.text('She looks around before quickly digging through her backpack.');
      scene.text('"I only have tampons," she says as she discreetly passes you one.');
    } else {
      scene.text('She looks around before hesitantly digging through her backpack.');
      scene.text('"I only have tampons," she says as she discreetly passes you one.');
    }
  }
  scene.text('"Thanks, Lariska."');
  scene.text('"Just don\'t tell Christina," she whispers. "I don\'t want to leave you hanging but she\'ll kill me if she finds out."');
  scene.text('You run off to the bathroom to go put the tampon in before class starts.');
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterFedor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).FedorLove ?? 0) < 0) {
    qspGoto(s, 'FedorMisc', 'Fedor Hate');
  } else {
    qspGoto(s, 'FedorMisc', 'Fedor Chat');
  }
  // TODO-QSP: end
  scene.build();
}

function enterIvan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big3.jpg');
  if (((s as any).npc_rel ?? 0)?.['A3'] >= 80  &&  ((s as any).NikoPayback ?? 0) === 2  &&  (!((s as any).IvanVsNiko ?? 0))) {
    scene.actions([
      { label: 'Ask for help with Niko', goto: ['NikoPayback', 'Ivan Help'] },
    ]);
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] < 225  &&  ((s as any).IvanShowerQW ?? 0) === 1) {
    (s as any).IvanShowerQW = 11;
    // TODO-QSP: dynamic text: Ivan thinks for a second before he speaks. "<<$pcs_nickname>>, I''d like to talk...
    scene.text(`Ivan thinks for a second before he speaks. "${((s as any).pcs_nickname || '')}, I'd like to talk to you about what happened in the shower. You're a great girl, and I had a great time, but I'm not ready for a relationship."`);
    scene.text('He offers you a small smile. "I need to put all my energy into my athletics since I have a good shot at getting to the National Championships this year. I really can\'t afford to be distracted by girls, even one as attractive as you. So how about we just stick to fooling around a little?"');
    scene.actions([
      { label: 'Discuss', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You nod at what he says. "I understand. I\'m okay with just being friends, <i>really</i> close friends who sometimes fool around in the shower…" you say in your best sexy voice with a wink.');
    scene.text('He gives you a one armed hug. "You\'re the best! Not only are you smoking hot, but you\'re a super cool chick too! If you want to hang out some time, you can stop by my place." He pauses and looks around before leaning in close. "Or if you get a little bored during lunch break, you can let me know too…" he says with a suggestive tone.');
    scene.text('You laugh at his silly antics. It\'s nice to have found a fun guy to hang out with. Perhaps you will stop by his place, or maybe even take him up on his offer to make lunch break less boring. "Sure Ivan, I\'ll think about it."');
    // TODO-QSP: $func('npc_reactions', 'general', 'A3')
    if (((st as any).npc_rel ?? 0)?.['A3'] >= 80  &&  ((st as any).NikoPayback ?? 0) === 2  &&  (!((st as any).IvanVsNiko ?? 0))) {
      scene.actions([
        { label: 'Ask for help with Niko', goto: ['NikoPayback', 'Ivan Help'] },
      ]);
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      { label: 'Tell him you\'re bored right now', goto: ['IvanEv', 'ivan_bored'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 225) {
      if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
        scene.text('You see Ivan standing by the lockers and approach him. You cover his eyes from behind with your hands and whisper in his ear. "Guess who?"');
        scene.text('Ivan grabs your hands, pulls free and turns around. "Judging by the mixture of your perfume and the shame I can smell in the air, who else could it be but the school\'s resident minx?" he jokingly replies.');
        scene.text('"Come on, since when are you interested in gossip?" you reply, twirling a lock of hair with your finger and then running your eyes over Ivan\'s body. "Besides, a little flirting never hurts, right?" you ask playfully.');
        scene.text('"You sure know how to play this game, I\'ll give you that," he replies. You flirt back and forth with each other for the next few minutes. The air between you is almost glowing. "By the way, if you ever decide you want to train your ass, let me know. I can help you with that." Ivan winks.');
        scene.text('"I have a feeling you\'re talking about a very tiring and deeeeep workout plan…" you reply. "Is there ever a time when your mind isn\'t on butts?"');
        scene.text('"Hardly ever…" he replies. Following his gaze with your eyes, you see him looking at your ass. He\'s about to continue his sentence, but the bell rings, so you both start walking towards the classroom.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A3')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
          scene.text('"Hello handsome!" you greet Ivan as you approach him in the corridor.');
          // TODO-QSP: dynamic text: "What do you want <<$pcs_nickname>>?" he asks, barely looking at you. "Whatever ...
          scene.text(`"What do you want ${((s as any).pcs_nickname || '')}?" he asks, barely looking at you. "Whatever it is, I'm not interested," he adds in a cold tone.`);
          scene.text('"Well, I thought we could spend some time together?" you reply as you bite your lip. "We could sneak out of school using the back door, if you know what I mean…" you wink and slap your ass playfully.');
          scene.text('"Don\'t even dream about it. I have no desire to catch something from a slut like you!" he replies before heading off towards the other jocks.');
          scene.text('Hurt by the rejection, you don\'t feel like doing anything during the break, so you head to the classroom.');
        } else {
          scene.text('You step in front of him. "Hold up, Ivan. I need to talk to you…"');
          scene.text('He stops and gives you a confused look. "Why are you talking to me? I don\'t really have anything to say to you."');
          scene.text('"Come on, don\'t be like that… I thought we could have some fun…" You give him a wink.');
          scene.text('Ivan looks apathetically at you without any response, making the whole situation awkward. After what feels like an eternity, he just walks away.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
          scene.text('As you come out into the corridor, you see Ivan standing a little further away from the others. You decide to approach him and talk.');
          scene.text('"Hi Ivan. I see you\'re spending your break alone. Wouldn\'t it be much nicer in the company of a pretty girl?" you wink at him, not noticing that you also blush a little.');
          // TODO-QSP: dynamic text: "Oh, hi <<$pcs_nickname>>. Are you volunteering?" he replies with a friendly smi...
          scene.text(`"Oh, hi ${((s as any).pcs_nickname || '')}. Are you volunteering?" he replies with a friendly smile on his face. "Maybe I should, but I don't have that luxury."`);
          scene.text('For the next few minutes, you talk mainly about why he doesn\'t have time for a serious relationship. With all the training and helping at home, he doesn\'t have time to get to date anyone.');
          scene.text('"I can\'t let anything hold me back. It\'s the only thing that can help me achieve my goals and give my family everything they deserve," he says. You can tell he\'s very determined and that he doesn\'t take things lightly.');
          scene.text('"Still, sometimes you have to let go a little. You know, make friends. I don\'t even see you with anyone else but Fedor. Go out and have fun. Enjoy life, especially while you\'re young. Or even ask a girl out on a date…" you add quietly, trying to avoid his gaze.');
          scene.text('As you wait for his response, the bell rings.');
          scene.text('"I\'ll try to take your advice. But no dating, I certainly can\'t get anyone pregnant by accident," he replies before walking towards the classroom.');
          scene.text('You do the same, thinking that the rumors about him might be true.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A3')
          if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).IvanShowerYes ?? 0) === 1) {
            // TODO-QSP: dynamic text: As you walk away Ivan suddenly jogs up beside you and leans over as he whispers ...
            scene.text(`As you walk away Ivan suddenly jogs up beside you and leans over as he whispers in your ear. "Tell me you're bored, ${((s as any).pcs_nickname || '')}."`);
            scene.actions([
              { label: 'Tell Ivan you\'re bored', goto: ['IvanEv', 'ivan_bored'] },
              { label: 'Tell him not today', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).IvanShowerYes ?? 0) === 0  &&  ((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).ShowerIvan ?? 0) < 3) {
              // TODO-QSP: dynamic text: "Well, I guess that means no more fun," you sigh and start walking towards the c...
              scene.text(`"Well, I guess that means no more fun," you sigh and start walking towards the classroom together, Ivan suddenly stops you. "${((s as any).pcs_nickname || '')}, want to meet up with me in the showers after school?"`);
              scene.actions([
                { label: 'Decline', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Agree', handler: (st: GameState) => {
    (st as any).IvanShowerYes = 1;
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give him a cute wink. "Sounds like fun. I\'ll see you there!"');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
          scene.actions([
            { label: 'Teach me to box', handler: (st: GameState) => {
    ((st as any).ivanQW = (st as any).ivanQW ?? {})['ivan_boxing_invite'] = 1;
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You stop as you start to walk away. "Hey, do you think you could show me some boxing moves, for real?"');
    scene.text('He stops and seems to think about it. "Sure, stop by the gym at the community center just before it closes. I train after it closes some nights and I can show you some stuff then."');
    scene.text('You smile at him and wave goodbye before heading to class.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
            scene.text('You see Ivan talking to Fedor and decide to approach them. "Hi Ivan, do you have a minute?"');
            // TODO-QSP: dynamic text: As he turns around, he notices it''s you talking to him. "Hi <<$pcs_nickname>>. ...
            scene.text(`As he turns around, he notices it's you talking to him. "Hi ${((s as any).pcs_nickname || '')}. Is it important? Fedor and I are discussing an important thing," he says before turning back to Fedor.`);
            scene.text('"I just thought we could have a little chat? You\'re always talking to Fedor anyway. You need a change, don\'t you?" you ask in a playful, flirtatious tone.');
            scene.text('He\'s clearly not impressed by your desperate attempt. He turns back to you and looks you in the eye. "I told you I\'m busy. Maybe some other time…"');
            scene.text('With that, he starts talking to Fedor again. You feel very awkward and stand there, unsure of what to do.');
            scene.text('You decide not to push it any further, so you leave them and take out your phone. You check some things until you hear the bell, signaling that the break is over.');
          } else {
            scene.text('"Hey Ivan, are you busy?" you ask as you approach him in the hallway.');
            // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, I''m looking for Fedor…" he says, then looks around the h...
            scene.text(`"Hi ${((s as any).pcs_nickname || '')}, I'm looking for Fedor…" he says, then looks around the hallway with a searching eye, but doesn't see him anywhere.`);
            scene.text('He sits down and continues. "… but I can\'t find him anywhere. I guess that makes me yours," he says with a friendly smile.');
            scene.text('You sit next to him and start chatting. He\'s mostly listens to you as you tell him what\'s been happening to you lately. You talk about the last party you had, the school, share some gossip, and take the opportunity to complain about how there\'s not much to do around town.');
            scene.text('"I don\'t have much free time anyway…" he says in a slightly tired voice. You wait for him to continue, but he doesn\'t seem to be in much of a talking mood. Although he listens to what you have to say, he doesn\'t add much to it.');
            scene.text('You continue talking for the next few minutes, touching on many topics and trying to get him to speak, but he still prefers to listen.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A3')
            scene.text('The bell then rings and Ivan gets up and starts walking towards the classroom. Halfway there, he turns around. "If you really don\'t know what to do, you can always come and watch my next match."');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
            // TODO-QSP: dynamic text: "Hello <<$pcs_nickname>>, I hope you''re looking for me?" Ivan asks when he sees...
            scene.text(`"Hello ${((s as any).pcs_nickname || '')}, I hope you're looking for me?" Ivan asks when he sees you approaching.`);
            scene.text('You lean against the wall and start talking. "How are things going?" you ask curiously, hoping that he has something interesting to share.');
            scene.text('"Just the usual," he replies and you discuss the events of the past few days before something occurs to Ivan. "Oh, look at this!" he says excitedly before pulling out his phone and starting a video.');
            scene.text('"Let me guess, your last sparring with Vitek?" you ask as you put your hand on his shoulder and lean closer to him to get a better look at the phone screen. "Let\'s see if I can steal a trick or two."');
            scene.text('While you\'re watching the video, Ivan shares a few useful techniques he thinks you can benefit from. Useful tips on agility, stamina and endurance, as well as some squatting techniques. "If you do this exercise, you\'ll have the hardest butt in school…" he says as his gaze shifts from your eyes to your ass.');
            scene.text('You playfully slap your ass and giggle. "Then you\'ll have to share more of your secret information with me next time. I can\'t settle for the second place."');
            scene.text('Time almost flies, and you almost don\'t even notice the bell ringing. "We\'ll continue this next time, champ!" you say and head for the classroom.');
            scene.text('As you walk away, you can almost feel Ivan\'s eyes on your ass and wonder why he\'s so obsessed with it.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A3')
            if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).IvanShowerYes ?? 0) === 1) {
              // TODO-QSP: dynamic text: As you walk away Ivan suddenly jogs up beside you and leans over as he whispers ...
              scene.text(`As you walk away Ivan suddenly jogs up beside you and leans over as he whispers in your ear. "Tell me you're bored, ${((s as any).pcs_nickname || '')}."`);
              scene.actions([
                { label: 'Tell Ivan you\'re bored', goto: ['IvanEv', 'ivan_bored'] },
                { label: 'Tell him not today', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).IvanShowerYes ?? 0) === 0  &&  ((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).ShowerIvan ?? 0) < 3) {
                // TODO-QSP: dynamic text: "Well, I guess that means no more fun," you sigh and start walking towards the c...
                scene.text(`"Well, I guess that means no more fun," you sigh and start walking towards the classroom together, Ivan suddenly stops you. "${((s as any).pcs_nickname || '')}, want to meet up with me in the showers after school?"`);
                scene.actions([
                  { label: 'Decline', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Agree', handler: (st: GameState) => {
    (st as any).IvanShowerYes = 1;
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give him a cute wink. "Sounds like fun. I\'ll see you there!"');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
            }
            scene.actions([
              { label: 'Teach me to box', handler: (st: GameState) => {
    ((st as any).ivanQW = (st as any).ivanQW ?? {})['ivan_boxing_invite'] = 1;
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You stop as you start to walk away. "Hey, do you think you could show me some boxing moves, for real?"');
    scene.text('He stops and seems to think about it. "Sure, stop by the gym at the community center just before it closes. I train after it closes some nights and I can show you some stuff then."');
    scene.text('You smile at him and wave goodbye before heading to class.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
              scene.text('As you step out into the corridor, you spot Ivan and approach him.');
              scene.text('"Hey Ivan," you greet him with a friendly smile. "I hope you can spare a minute. Since you\'re pretty good at boxing, I\'d like to ask you for some advice on how to improve my endurance and speed. Besides agility, these are the ones I should improve a lot."');
              // TODO-QSP: dynamic text: Ivan closes the locker door and turns to you. "Listen, <<$pcs_nickname>>, I''m s...
              scene.text(`Ivan closes the locker door and turns to you. "Listen, ${((s as any).pcs_nickname || '')}, I'm sorry, but I don't have time right now. Maybe you should ask someone else," he replies indifferently before turning and walking towards the others.`);
              scene.text('As he leaves, you wonder if he really doesn\'t have time or if he just didn\'t feel like talking to you. Since you have a lot of time until your next class, you organize your locker and throw out some old things you don\'t need anymore.');
            } else {
              scene.text('"Hey Ivan, what\'s up?" you ask him as you approach.');
              // TODO-QSP: dynamic text: He turns to you as he closes the locker door. "Oh, hello <<$pcs_nickname>>. Noth...
              scene.text(`He turns to you as he closes the locker door. "Oh, hello ${((s as any).pcs_nickname || '')}. Nothing special. I was just putting away my boxing gear and wondering if I should practice my fist pumping today or go for a run."`);
              scene.text('"Someone\'s very dedicated today!" you say jokingly as you playfully touch his shoulders. "Sometimes it doesn\'t hurt to take a break. You know it\'s not good for your body to exercise all the time," you continue, taking the words a little more seriously.');
              scene.text('"I can\'t slack off. I have to do my best every day," he says before telling you how important boxing is to him. It\'s a good chance for him to break out so he can help his mom financially and provide his family a better life.');
              scene.text('You put your hand on his shoulder understandingly and try to say a few words, but he cuts you off. "I\'m sorry, but I have to go now. I have to discuss a few things with Fedor."');
              scene.text('It seems that, although he\'s glad you listen to him and are supportive, he\'s not so keen to hear about your affairs. With not much time left of the break, you head for the classroom and wait for the lesson to start.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A3')
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Ivan greets you as he sees you approaching.
              scene.text(`"Hey ${((s as any).pcs_nickname || '')}," Ivan greets you as he sees you approaching.`);
              scene.text('"Hey Ivan, what\'s up? How was your last training match?" you ask curiously.');
              scene.text('He puts his bag on the floor and sits on it before pulling out his phone and beckoning you to lean closer. "I\'ll show you. I\'ll analyze it with the coach and see what mistakes I made."');
              scene.text('For the next few minutes, you watch the video together, sometimes pausing to analyze a punch. "You see, when you hit at that angle, you can put a lot more power into it," you comment while imitating the punch.');
              // TODO-QSP: dynamic text: "Look at that! Little <<$pcs_nickname>> is starting to box?" he laughs while jok...
              scene.text(`"Look at that! Little ${((s as any).pcs_nickname || '')} is starting to box?" he laughs while jokingly punching you on the shoulder. "Who would think that physics and maths would make someone a boxing coach?"`);
              scene.text('You talk for the rest of the break, although it\'s mainly Ivan who does the talking. He explains the training plans he\'s been working on with Fedor to improve his pace and agility.');
              scene.text('When he hears the bell ring, he turns to you. "Don\'t forget to give the girls tips on how to improve their squats. You know, to get achieve the perfect shape," he winks.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A3')
              if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).IvanShowerYes ?? 0) === 1) {
                // TODO-QSP: dynamic text: "Ah, you never change," you reply while rolling your eyes before grabbing your s...
                scene.text(`"Ah, you never change," you reply while rolling your eyes before grabbing your stuff and heading to the classroom together, with Ivan when he leans toward you and whispers in your ear. "Tell me you're bored, ${((s as any).pcs_nickname || '')}."`);
                scene.actions([
                  { label: 'Tell Ivan you\'re bored', goto: ['IvanEv', 'ivan_bored'] },
                  { label: 'Tell him not today', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).IvanShowerYes ?? 0) === 0  &&  ((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).ShowerIvan ?? 0) < 3) {
                  // TODO-QSP: dynamic text: "Well, I guess that means no more fun," you sigh and start walking towards the c...
                  scene.text(`"Well, I guess that means no more fun," you sigh and start walking towards the classroom together, Ivan suddenly stops you. "${((s as any).pcs_nickname || '')}, want to meet up with me in the showers after school?"`);
                  scene.actions([
                    { label: 'Decline', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    { label: 'Agree', handler: (st: GameState) => {
    (st as any).IvanShowerYes = 1;
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give him a cute wink. "Sounds like fun. I\'ll see you there!"');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
                scene.text('When you reach the hallway, you see Ivan standing by his locker, looking for something. You approach him and try to talk to him. "Hi Ivan, are you looking for something?"');
                scene.text('He closes the locker door and looks at you. "Hey, I didn\'t notice you. As a matter of fact yes, I\'m looking for something, so if you don\'t mind I\'ll be going now," he says as he grabs his backpack.');
                scene.text('"I could help you look for it if you like? We could talk in the mean time?" you reply with hope in your voice as you stand a little confused and shy.');
                scene.text('Ivan looks back over his shoulders. "I don\'t think you can help me. And as for talking, I don\'t want to be rude, but there isn\'t much we can talk about. And now if you\'ll excuse me…"');
                scene.text('With that, he walks away. Not wanting to stand by the lockers alone, you decide to head into the classroom and wait for the next lesson there.');
              } else {
                scene.text('As you walk through the hallway, you spot Ivan and decide to approach him and try to strike up a conversation. "Hi Ivan, how are you today?"');
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, fine…" he replies as he looks around. When he sees that e...
                scene.text(`"Hi ${((s as any).pcs_nickname || '')}, fine…" he replies as he looks around. When he sees that everyone is busy or talking to someone, he sits on the floor and gestures for you to sit next to him.`);
                scene.text('You start chatting about everything from school, to sports and reading. After a while, he starts talking about how he tried to help his younger siblings learn.');
                scene.text('"It\'s important that they get a good education. I want them to achieve something in life," he says with a serious look in his eyes.');
                scene.text('"That\'s very thoughtful of you. If you want, I can share some tips." you reply. For the next few minutes, you share a few tips on how he can help them as much as possible and how he could make learning enjoyable for them.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A3')
                scene.text('After a while, you stand up. "I\'ll be going now. I want to revise my homework one more time before class." you say before heading off to the classroom.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," Ivan greets you as you walk towards him.
                scene.text(`"Hi ${((s as any).pcs_nickname || '')}," Ivan greets you as you walk towards him.`);
                scene.text('"What\'s up, Prince of Boxers? Do you still have time to chat despite all the training and the crowds of cheerleaders?" you ask jokingly as you do shadowboxing next to him.');
                scene.text('"I always have time for you," he replies as he winks at you. He starts to talk about everything that comes to his mind, but mostly about boxing, running, and the workouts he and Fedor have been doing together lately.');
                scene.text('"You\'ll end up joining us if you become such a pro at fighting. Think about it," you say with a wistful sigh before you start talking about how many adventures he could have with you and your fellow gopniks. "I\'d challenge you to a fight sometime, though." you say, filled with self-confidence. "I bet I could kick your ass."');
                scene.text('"You can always find me in the community center if you\'d like to bet <i>your</i> ass," he says as you see his eyes running down your ass.');
                scene.text('"Oh, shut up!" you reply as you slap his cheek playfully. "I\'d rather you just be quiet and just listen to me."');
                scene.text('You start talking about what\'s been going on with you lately. Time passes quickly and you soon hear the bell ring.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A3')
                if (((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).IvanShowerYes ?? 0) === 1) {
                  scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
                  scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
                  // TODO-QSP: dynamic text: "Well, I guess that means no more fun," you sigh and start walking towards the c...
                  scene.text(`"Well, I guess that means no more fun," you sigh and start walking towards the classroom together, with Ivan when he leans toward you and whispers in your ear. "Tell me you're bored, ${((s as any).pcs_nickname || '')}."`);
                  scene.actions([
                    { label: 'Tell Ivan you\'re bored', goto: ['IvanEv', 'ivan_bored'] },
                    { label: 'Tell him not today', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).IvanShowerYes ?? 0) === 0  &&  ((s as any).IvanShowerQW ?? 0) === 11  &&  ((s as any).ShowerIvan ?? 0) < 3) {
                    // TODO-QSP: dynamic text: "Well, I guess that means no more fun," you sigh and start walking towards the c...
                    scene.text(`"Well, I guess that means no more fun," you sigh and start walking towards the classroom together, Ivan suddenly stops you. "${((s as any).pcs_nickname || '')}, want to meet up with me in the showers after school?"`);
                    scene.actions([
                      { label: 'Decline', handler: (st: GameState) => {
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give it some thought, but have to decline.');
    scene.text('You shake your head apologetically. "Sorry Ivan, I can\'t today."');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                      { label: 'Agree', handler: (st: GameState) => {
    (st as any).IvanShowerYes = 1;
    scene.text(`<center><b>${'Ivan Prokhorov'}</b></center>`);
    scene.img('images/characters/pavlovsk/school/boy/ivan/School/ivan2.jpg');
    scene.text('You give him a cute wink. "Sounds like fun. I\'ll see you there!"');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                    ]);
                  }
                }
                scene.actions([
                  { label: 'Teach me to box', handler: (st: GameState) => {
    ((st as any).ivanQW = (st as any).ivanQW ?? {})['ivan_boxing_invite'] = 1;
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You stop as you start to walk away. "Hey, do you think you could show me some boxing moves, for real?"');
    scene.text('He stops and seems to think about it. "Sure, stop by the gym at the community center just before it closes. I train after it closes some nights and I can show you some stuff then."');
    scene.text('You smile at him and wave goodbye before heading to class.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
                  scene.text('You see Ivan talking to his fellow jocks and decide to try and talk to him.');
                  scene.text('As you get closer, Ivan just looks at you. Without uttering a word to you, he walks towards the men\'s toilet.');
                  scene.text('"Hey, Ivan. I just thought we could have a little chat?" you call after him, confused and a little bit embarrassed.');
                  // TODO-QSP: dynamic text: "You thought wrong, <<$pcs_nickname>>. We have nothing to talk about anyway. We ...
                  scene.text(`"You thought wrong, ${((s as any).pcs_nickname || '')}. We have nothing to talk about anyway. We don't really have much in common, in case you haven't noticed," he replies without even looking back.`);
                  scene.text('You stand there alone while the other jocks look at you. You feel a little humiliated as ou look at them.');
                  scene.text('"Mind your own business!" you snarl before storming off to spend the rest of your break somewhere else.');
                } else {
                  scene.text('"Hi Ivan," you greet him as he stands by the lockers. "Tell me something exciting, I\'m bored," you say as you sit on the floor, grab his hand and pull him down next to you.');
                  scene.text('"The truth is, I was just about to…" he starts to say, but when he looks at you and sees that he has no chance of getting away, he continues. "… but anyway, we can talk."');
                  scene.text('He\'s not in a great mood, and keeps looking in the direction of the others, as if expecting one of them to do something. He sighs and realizes he has no choice but to share a thing or two about what\'s been going on with him lately.');
                  scene.text('"Booooring!" you say as you roll your eyes. "You should do more things, get some free time or you\'ll miss the best time of your life."');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A3')
                  scene.text('"You know, I don\'t really have time for anything other than training and doing some important things at home," he says, then complains about how although he\'d like to be a bit more social, but can\'t afford to be distracted by anything.');
                  scene.text('"I was hoping you\'d tell me something more interesting, though. I\'m probably more bored now than I was before!" you say jokingly before standing up, dusting yourself off and walking away while waving at him.');
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
                // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," Ivan greets you as you approach him.
                scene.text(`"Hi ${((s as any).pcs_nickname || '')}," Ivan greets you as you approach him.`);
                scene.text('You give him a friendly smile. "Hi Ivan. I don\'t really have much to do and I saw you were standing here all alone, so I thought we could talk? What\'s been going on with you lately?" you ask as you lean against the wall.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A3')
                scene.text('He leans against the wall with you and spends the next few minutes talking about the boxing techniques he\'s trying to master, the training sessions he\'s had with Fedor, and of course a few fights with Vitek.');
                scene.text('"And do you have any exciting plans? Like, are you going to meet someone and hang out, or are you going to go to the disco for a change?" you ask curiously. "If you\'re not careful, you might end up a friendless outcast."');
                scene.text('As you say this, you both start laughing out loud. "Look who\'s talking!" he says jokingly. "Besides, that would never happen. I\'m too popular with the girls for that." He winks, then laughs again.');
                scene.text('You open your mouth as if you\'re about to say something, but realize that it\'s a valid point. After a short pause, you quietly reply. "True, you\'re too good-looking for that…"');
                scene.text('"What was that?" he asks, and from the look on his face, you can\'t tell whether he really didn\'t hear you or if he\'s just teasing you.');
                scene.text('"Nothing… I just remembered… I have to do something… I promised someone… Yeah…" you stutter and clumsily drop everything you have in your hand.');
                scene.text('You quickly pick everything up and walk away as fast as you can.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
                  scene.text('You see Ivan standing in the hallway and decide to strike up a conversation with him.');
                  scene.text('As soon as he notices you approaching, he looks at you, almost with a piercing look, and starts walking in the other direction. It\'s clear that he\'s not looking for your company and has no intention of talking to you.');
                  scene.text('You don\'t want to make things any more awkward, so when he starts walking away, you turn the other way as if you weren\'t looking for him. You keep walking, heading back to the classroom instead and waiting there for the next lesson to start.');
                } else {
                  scene.text('You see Ivan looking at something on his phone and decide to approach him. "Hi Ivan, what are you looking at?" you ask as you lean over and look at the screen.');
                  // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>, nothing important. I''m looking at some new boxing...
                  scene.text(`"Oh, hello ${((s as any).pcs_nickname || '')}, nothing important. I'm looking at some new boxing gear. You know, it's very important to have the right grip so you don't get hurt."`);
                  scene.text('For the next few minutes, you look at the range of products in an online shop together. He sometimes comments on what different products are good for.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A3')
                  scene.text('Although you don\'t really talk, he tolerates you enough not to send you away.');
                  scene.text('"I\'m going to show these to Fedor," he says before he leaves.');
                  scene.text('There\'s still a few minutes left of the break, so you decide to walk around a bit before heading back to the classroom.');
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
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lazar':
      enterLazar(s, scene);
      break;
    case 'svyatoslav':
      enterSvyatoslav(s, scene);
      break;
    case 'vanya':
      enterVanya(s, scene);
      break;
    case 'erast':
      enterErast(s, scene);
      break;
    case 'christina':
      enterChristina(s, scene);
      break;
    case 'christina_tampon':
      enterChristinaTampon(s, scene);
      break;
    case 'albina':
      enterAlbina(s, scene);
      break;
    case 'albina_tampon':
      enterAlbinaTampon(s, scene);
      break;
    case 'veronika':
      enterVeronika(s, scene);
      break;
    case 'veronika_tampon':
      enterVeronikaTampon(s, scene);
      break;
    case 'lina':
      enterLina(s, scene);
      break;
    case 'lina_tampon':
      enterLinaTampon(s, scene);
      break;
    case 'lariska':
      enterLariska(s, scene);
      break;
    case 'lariska_tampon':
      enterLariskaTampon(s, scene);
      break;
    case 'fedor':
      enterFedor(s, scene);
      break;
    case 'ivan':
      enterIvan(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_jock_chats: LocationDef = {
  name: 'gschool_jock_chats',
  region: 'other',
  enter: enter,
};
