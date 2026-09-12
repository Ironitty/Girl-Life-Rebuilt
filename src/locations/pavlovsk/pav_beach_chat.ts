import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBeachHangout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hour ?? 0) < 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.text('<center><b>Beach</b></center>');
    scene.text('Some of the cool kids and jocks are lounging around tanning and chatting while others are wading and swimming out in the lake.');
    (s as any).i = 1;
    (s as any).i2 = 0;
    // TODO-QSP: :beachcool_loop
    if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
      if ((!((s as any).i2 ?? 0))) {
        // TODO-QSP: $table_beach += '<tr>'
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td><table bgcolor=#FFF8DC><tr><td align=center><a href="exec: i = <<i>> & gt ''pav...
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'beachcool_loop'
    }
    (s as any).i = 1;
    // TODO-QSP: :beachjock_loop
    if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === 2  &&  ((s as any).i ?? 0) !== 141) {
      if ((!((s as any).i2 ?? 0))) {
        // TODO-QSP: $table_beach += '<tr>'
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td><table bgcolor=#FFF8DC><tr><td align=center><a href="exec: i = <<i>> & gt ''pav...
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'beachjock_loop'
    }
    if (((s as any).i2 ?? 0) % 6 !== 0) {
      // TODO-QSP: :beach_loopi21
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td></td>'
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      } else {
        // TODO-QSP: jump 'beach_loopi21'
      }
    }
    // TODO-QSP: $table_beach += '</table>'
    // TODO-QSP: $table_beach
    scene.actions([
      { label: 'Go back', goto: ['pav_lake', ''] },
    ]);
  } else {
    scene.text('It seems everyone has had their fill of hanging out at the beach today. You see several of them have already left and the rest are either walking away or are gathering up their stuff and saying their goodbyes to each another. You are soon the last person left.');
    scene.actions([
      { label: 'Go back', goto: ['pav_lake', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterJocksList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_beach_chat', $listname
  // TODO-QSP: end
  scene.build();
}

function enterCoolList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_beach_chat', $listname
  // TODO-QSP: end
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/lazar/beach_chat.jpg');
  if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
    qspCall(s, 'fame', 'pav', 'sex', 'small');
    scene.text('Lazar smirks when he sees you. "Back for more? I know, it was amazing."');
    scene.text('You only let out a short "Mmhmm" as you roll your eyes.');
    // TODO-QSP: dynamic text: Lazar breaks out in a smile. "No worries <<$pcs_nickname>>! I'm sure we'll hook ...
    scene.text(`Lazar breaks out in a smile. "No worries ${((s as any).pcs_nickname ?? 0)}! I'm sure we'll hook up again." You notice several others paying attention to what he says and aren't happy about him bragging publicly about banging you. You try and change the topic, but all you get from him is sexual banter.`);
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['Lazar_Threesome'] >= 1) {
      scene.text('Lazar smirks when he sees you. "Back for more? Albina is a little busy right now, but I\'m sure we can work something out next time she\'s in the mood."');
      scene.text('You blush at his comment and he smiles. "I\'m sure you enjoy our… sessions as much as she does." He has a wide grin on his face and winks at you.');
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
        qspCall(s, 'npc_relationship', 'modify', 'A149', 'dislike');
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          scene.text('"Taking a break from sucking dicks?" Lazar snickers.');
          scene.text('You sigh. "I just wanted to talk to you."');
          scene.text('"I\'m sure you do, but I\'m pretty busy, so get lost." Several of the other jocks and cool kids start mocking you, forcing you to flee as their laughter echoes behind you.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
            scene.text('He turns to look at you as you approach. "Get the fuck away from me you skank." Several of the jocks and cool kids start mocking you, forcing you to flee.');
          } else {
            scene.text('"You here to suck me off, slut?" Lazar snickers.');
            scene.text('You sigh. "I just wanted to talk to you."');
            scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! Your mouth is good for only one thing. Sucking dick!" he says with a laugh and several of the other jocks and cool kids join in. "If you\'re not going to get on your knees and suck me off, then get lost." You walk away with the laughter echoing behind you.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you eyeballing me." Lazar winks.
            scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you eyeballing me." Lazar winks.`);
            scene.text('You laugh. "Nice line Lazar… Is that how you get the ladies interested in you?"');
            scene.text('He confidently continues. "You know it. And it works like a charm every time. You just wait, you\'ll fall for me too." You talk about a variety of topics, mostly sports.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
              scene.text('"Are you the one that\'s been going around telling the other girls that I\'m no good for them?!" Lazar angrily asks.');
              scene.text('"No? Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
              scene.text('"Good. Keep it that way or else we might have a problem…" he says as he brushes past you.');
            } else {
              // TODO-QSP: dynamic text: "I didn't take you for one of them girls <<$pcs_nickname>>?" Lazar smiles.
              scene.text(`"I didn't take you for one of them girls ${((s as any).pcs_nickname ?? 0)}?" Lazar smiles.`);
              scene.text('"What?" you ask surprised.');
              scene.text('"Didn\'t take you for one of my fan girls, that\'s all." he winks. You roll your eyes and shake your head. You know he\'s full of himself, even if he is the most gifted athlete in school and cute to boot. You talk about a variety of things, which he twists into you just liking him.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
              // TODO-QSP: dynamic text: "Did you see that move I made at the last game <<$pcs_nickname>>?" Lazar boasts.
              scene.text(`"Did you see that move I made at the last game ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
              scene.text('"I heard about it…" you inform him.');
              scene.text('You start talking about his last game, but soon move on to a variety of other topics.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar smirks as he stands with his a...
                scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}…" Lazar smirks as he stands with his arms crossed.`);
                scene.text('You sigh. "What now Lazar? I don\'t have time for your games today…"');
                // TODO-QSP: dynamic text: He huffs. "Somebody's been talking shit behind my back to some girls, but I have...
                scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I wanted you to know that I'm keeping my eyes on you ${((s as any).pcs_nickname ?? 0)}."`);
                scene.text('"Okay…" you say as you roll your eyes. "What does that have to do with me?"');
              } else {
                // TODO-QSP: dynamic text: "Did you hear my own little cheer squad at the last game <<$pcs_nickname>>?" Laz...
                scene.text(`"Did you hear my own little cheer squad at the last game ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
                scene.text('"I heard many boys are out to get at your level <i>Mister Superstar</i>. Watch out, you might lose that cheer squad of yours!" you jokingly reply.');
                scene.text('Lazar bursts out in laughter. "No no, I\'m not worried. That only makes me want to improve even more…"');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me." Lazar wink...
                scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me." Lazar winks.`);
                scene.text('You blush. "No… no I haven\'t."');
                scene.text('He confidently continues. "Are you saying I\'m not good looking?" You start to stammer and he laughs, showing he is just messing with you. You proceed to talk about a variety of topics, mostly sports.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                  scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!" He then returns to ignoring you and you walk away.');
                } else {
                  // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>." Lazar smirks, bringing everyone's at...
                  scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}." Lazar smirks, bringing everyone's attention to you.`);
                  scene.text('You glance around, waiting for someone to start picking on you. "Hi, I just wanted to say hi."');
                  scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
                  scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you. At least no one is picking on you.');
                }
              }
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                  // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me." Lazar wink...
                  scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me." Lazar winks.`);
                  scene.text('You laugh. "You wish… Are any of the girls dumb enough to fall for that?"');
                  scene.text('He confidently continues. "Nothing to fall for, it\'s a simple fact. You don\'t have to hide it." He lifts up his shirt and shows off his six pack, which gets the attention of most of the girls. You have to admit that he has a great body. You proceed to talk about a variety of topics, mostly sports.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                    scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants you to talk to you!" He then returns to ignoring you and you walk away.');
                  } else {
                    // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>. Get lost? Or maybe you're too drunk t...
                    scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}. Get lost? Or maybe you're too drunk to find your way to the dump where you lot hang out?" Lazar asks with a laugh, bringing everyone's attention to you.`);
                    scene.text('You sigh. "I just wanted to say hi."');
                    scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
                    scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you.');
                  }
                }
              } else {
                qspCall(s, 'npc_relationship', 'modify', 'A8', 'dislike');
                if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
                  scene.text('As you approach, several of the other jocks and cool kids start giving you a hard time. Before you can even say a word, he scoffs at you. "Get lost! This isn\'t for you." He starts talking to the others as you walk away. At least he wasn\'t mean about it.');
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
                    scene.text('"Looks like the loser is lost." someone comments as you approach.');
                    scene.text('"Nah, I bet even Lesco and Petia can\'t stand being around her and, honestly, who can blame them?" Lazar replies, which gets the group laughing so hard you know it\'s pointless to even try and talk to him.');
                  } else {
                    scene.text('You approach and try to talk to him, but he straight up ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!" He then returns to ignoring you and you walk away.');
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
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterSvyatoslav(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A8', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/svyatoslav/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
      scene.text('"Well isn\'t this a surprise. Are you here to wish me good luck in the next race?" Svyatoslav curiously asks.');
      scene.text('Seeing him excited and not wanting to hurt his feelings, you just nod. "Yeah… that\'s exactly what I wanted to say…"');
      // TODO-QSP: dynamic text: "Thanks <<$pcs_nickname>>! I'll be sure to win this time!" he boastfully replies...
      scene.text(`"Thanks ${((s as any).pcs_nickname ?? 0)}! I'll be sure to win this time!" he boastfully replies. The two of you then talk about the many times he fails to beat Ivan or Lazar in one of the various sports at school.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
        scene.text('He gives you a dirty look as you approach. "I\'ve got nothing to say to you, so go bother someone else." You try talking to him, but he just seems to get more annoyed with you, so you finally give up and just leave.');
      } else {
        scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you. You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
        scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you. You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
          scene.text('He gives you a dirty look as you approach. "I\'ve got nothing to say to you, so go bother someone else." You try talking to him, but he just seems to get more annoyed with you, so you finally give up and just leave.');
        } else {
          scene.text('You walk up to him and start chatting. You talk about working out and staying fit before he starts flirting with you. You get the feeling he has a thing for you, or that he just wants to get in any girl\'s panties so he has something to brag about to the other jocks.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
          scene.text('"You get lost, nerd?" he asks as you approach.');
          scene.text('You shake your head. "No, I just wanted to say hi."');
          scene.text('He snorts. "Whatever." He then ignores you, but doesn\'t pick on you at least.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
            scene.text('"You get lost, nerd?" he asks as you approach.');
            scene.text('You shake your head. "No, I just wanted to say hi."');
            scene.text('He steps towards you, places his hand on your shoulder and shoves you hard enough that you stumble back. "Get the fuck out of here!" You notice the stares of some of the others and decide it\'s best to leave before things get worse.');
          } else {
            scene.text('"You get lost, nerd?" he asks as you approach.');
            scene.text('You shake your head. "No, I just wanted to say hi."');
            scene.text('He laughs. "Why don\'t you just go back to your fellow losers and pretend to be an elf or whatever it is you losers do." He continues mocking you when he isn\'t talking to someone else.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
            scene.text('"You come to see what real men are like?" he asks as you approach.');
            scene.text('You shake your head and roll your eyes at his comment. "No, I just wanted to say hi."');
            scene.text('He snorts. "Sure you didn\'t. Well, take a good look." He does a little flexing before you\'re able to engage him in something resembling a conversation.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
              scene.text('"You come to beg for some money to buy drugs?" he asks with a laugh, causing several others to join in.');
              scene.text('You shake your head. "No, I just wanted to say hi."');
              scene.text('"Yeah? Well no one wants to talk to your skank ass, so go back to your own kind." You notice the stares of the others and decide it\'s best to leave before things get worse.');
            } else {
              scene.text('"You get lost, junkie?" he asks as you approach.');
              scene.text('You shake your head. "No, I just wanted to say hi."');
              scene.text('He laughs. "Why don\'t you just go back to your fellow wannabe gangsters and pretend like you matter?" He continues mocking you when he isn\'t talking to someone else.');
            }
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A8'] >= 50) {
            scene.text('As you approach, he walks towards you and grabs you by the arm before dragging you away so no one can hear his whispers. "What the fuck do you think you\'re doing? Don\'t ever come up to me in public." He then shoves you away. "And stay the fuck away from us, loser!" he says loud enough for the others to hear and several of them laugh and commend him for getting rid of you as he walks back to them. You just sigh and walk away, knowing it\'s pointless to try and talk to him.');
          } else {
            scene.text('He shakes his head as you approach. "Fuck no! Stay the fuck away from me, you worthless fuck. No one likes you, so just turn your fucking ass around and walk the fuck away from here." He glares at you and you notice a lot of the others giving you unkind looks. You sigh before turning and walking away.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterVanya(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A165', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/vanya/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A165'] >= 50) {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      // TODO-QSP: dynamic text: "Say <<$pcs_nickname>> did you hear about the prank I pulled on the football coa...
      scene.text(`"Say ${((s as any).pcs_nickname ?? 0)} did you hear about the prank I pulled on the football coach?" Vanya is having a hard time keeping himself from laughter.`);
      scene.text('"No, what did you do this time?" you curiously ask.');
      scene.text('"Well, during one of the training sessions, I unscrewed the top from a water bottle thinking one of the boys would drink it but here comes the coach, who grabs it. Just as he\'s about to drink, the top falls off and water splashes all over him!" Vanya bursts out in laughter.');
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>! You need to help me hide!" Vanya is alarmingly looking aroun...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}! You need to help me hide!" Vanya is alarmingly looking around.`);
      scene.text('Feeling stressed, you ask. "What\'s wrong?! Who\'s after you?!"');
      scene.text('Vanya cracks up seeing you panic. "Just kidding! I just wanted to see your reaction."');
      scene.text('"Always the same thing with you, Vanya. Don\'t you get tired of playing games all the time?" you reprimand him.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A165'] <= 20) {
      scene.text('He just completely ignores you and spends his time talking to Vicky.');
    } else {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! Check this out!" Vanya says as he flexes showing off wha...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}! Check this out!" Vanya says as he flexes showing off what muscles he has. You just shake your head at him and soon the two of you are having a pleasant conversation.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterErast(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A150', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/erast/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A150'] >= 50) {
    scene.text('"Here\'s the resident big guy!" you say jokingly as you approach Erast, who\'s watching some of the girls in their bikinis.');
    // TODO-QSP: dynamic text: You can see him blushing a little when he looks up and notices you. "Hello <<$pc...
    scene.text(`You can see him blushing a little when he looks up and notices you. "Hello ${((s as any).pcs_nickname ?? 0)}, how are you doing today?"`);
    scene.text('"I\'m fine, thanks for asking. You know, I came here to get some pointers as I\'ve been struggling with my training recently. I have to pay attention to my shape and some good tips are always useful."');
    // TODO-QSP: dynamic text: "You already look good, <<$pcs_nickname>>," he says politely, but his face turns...
    scene.text(`"You already look good, ${((s as any).pcs_nickname ?? 0)}," he says politely, but his face turns a little red. Before you can react, he starts talking about aerobic and anaerobic techniques that he thinks would help you with your goal.`);
    scene.text('You listen to him very carefully and try to remember as much as you can. This isn\'t easy, since he\'s so passionate about this topic that he often uses technical terms that you don\'t even remotely understand.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
      scene.text('"Hey Erast!" you greet him, but he\'s focused on watching some of the other guys flexing and showing off their muscles. When you try and talk to him, he excuses himself and walks over to show the guys what real muscles look like.');
    } else {
      scene.text('You walk over and take a seat on the sand next to him. You start talking to him and he quickly engages in a conversation with you, the two of you talking for some time about a variety of topics.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterChristina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/christina/beach_chat.jpg');
  scene.text('You walk over to Christina as she lays on the beach sunbathing. Before you can even say a word, she speaks up. "I\'m having a good day, so go away before you ruin it or I\'ll ruin your day." You sigh before turning and walking away. It seems she\'ll never forgive you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterAlbina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A23', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/albina/beach_chat.jpg');
  if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 1) {
    if (!(s as any).AlbinaQW) (s as any).AlbinaQW = {}; (s as any).AlbinaQW['Friends'] = 2;
    qspCall(s, 'npc_relationship', 'set', 'A23', 100);
    // TODO-QSP: dynamic text: Albina is relaxing in the sun and working on her tan as you approach. She lifts ...
    scene.text(`Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and smiles gratefully when she notices you. "I just wanted to thank you again, ${((s as any).pcs_nickname ?? 0)}. There's some stupid shit about 'a friend in need' or something. I'm letting you know that I'm disbanding the Starlets as well. Too many bad memories you know?"`);
    scene.text('You tell her you understand and she embraces you in a tight hug before composing herself, staring down anyone looking at her with a cold glare and returning to her sunbathing.');
  } else {
    if (((s as any).AlbinaQW ?? 0)?.['Friends'] === 2) {
      scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up when you block her light, but smiles when she sees you.');
      scene.text('You sit on the sand next to her and have a pleasant conversation where you both talk about almost anything, but you\'re careful not to bring up her father, the Starlets or anything else that might upset her. The conversation ends with Albina embracing you in a tight and extended hug.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
          scene.text('Albina has a friendly, yet awkward conversation with you. You both talk about your shared interests, but when you bring up family life she fiercely avoids the subject, eventually refusing to speak with you anymore and storming off to swim in the lake. You don\'t know what her problem is, but she\'s always been sensitive when it comes to discussing her home life.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
            scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light.');
            scene.text('"What do you want, you fake ass bitch?" she scowls.');
            scene.text('You can tell she isn\'t waiting for an answer, so you back off before she causes a scene.');
          } else {
            // TODO-QSP: dynamic text: Albina is relaxing in the sun and working on her tan as you approach. She lifts ...
            scene.text(`Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light. "What do you want, ${((s as any).pcs_nickname ?? 0)}?" she asks in an exasperated tone.`);
            scene.text('"I just wanted to talk," you reply with a smile.');
            scene.text('She sighs and begrudgingly starts chatting with you, but makes no effort to hide her boredom. She doesn\'t dislike you, but it\'s obvious that she\'s just tolerating your presence and humouring you with conversation.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
            scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up when you block her light before smiling at you.');
            scene.text('She engages you in a friendly, yet awkward conversation where you both talk about the sports you enjoy and which of the male jocks have caught your eye, but when you bring up family life she fiercely avoids the subject, eventually refusing to speak with you anymore and storming off to swim in the lake. You don\'t know what her problem is, but she\'s always been sensitive when it comes to discussing her home life.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
              scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light.');
              scene.text('She scoffs at you. "I don\'t like you, I barely tolerate you being in the same social group as me, so why would I want to talk to you?"');
              scene.text('You can tell she isn\'t waiting for an answer, so you back off before she causes a scene.');
            } else {
              // TODO-QSP: dynamic text: Albina is relaxing in the sun and working on her tan as you approach. She lifts ...
              scene.text(`Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light. "What do you want, ${((s as any).pcs_nickname ?? 0)}?" she asks in an exasperated tone.`);
              scene.text('"I just wanted to talk," you reply with a smile.');
              scene.text('She sighs and begrudgingly starts chatting with you, but makes no effort to hide her boredom. She doesn\'t dislike you, but it\'s obvious that she\'s just tolerating your presence and humouring you with conversation.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
              scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light.');
              scene.text('"I didn\'t think I\'d see you here," she laughs. "Getting some sunlight in before you go back to hiding indoors?" she asks.');
              scene.text('You smile. "Something like that," you reply and have a short conversation before she asks to be left alone to work on her tan.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
                scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light before rolling her eyes.');
                scene.text('"What the fuck do you want? I thought you losers were allergic to the sun and do all that geeky shit indoors where it can\'t hurt you? Can you fuck off now and stop blocking my light?"');
                scene.text('Realizing you\'re not going to get anywhere with her, you back away.');
              } else {
                // TODO-QSP: dynamic text: Albina is relaxing in the sun and working on her tan as you approach. She lifts ...
                scene.text(`Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light. "What do you want, ${((s as any).pcs_nickname ?? 0)}?" she asks in an exasperated tone.`);
                scene.text('"I just wanted to talk," you reply with a smile.');
                scene.text('She sighs and begrudgingly starts chatting with you, but makes no effort to hide her boredom. She doesn\'t dislike you, but it\'s obvious that she\'s just tolerating your presence and humouring you with conversation.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light. "Oh god, it\'s you. What the fuck do you want?"');
              scene.text('"What\'s your problem, bitch? I just want to talk," you scornfully reply.');
              scene.text('She looks at you unimpressed. "<i>My problem</i> is that some knuckle brained moron is blocking my sunlight! Can you fuck off already?!"');
              scene.text('"Fucking stuck up rich bitch…" you mutter as you walk away, but she doesn\'t hear you.');
              scene.text('You don\'t know why, but she seems to have an intense hatred for the gopniks, yourself included.');
            } else {
              scene.text('Albina is relaxing in the sun and working on her tan as you approach. She lifts her sunglasses and glares up at you when you block her light before pulling them down again.');
              scene.text('When you don\'t move and continue blocking her light, she lifts her glasses again and looks up at you with an annoyed glare. "What the fuck do you want, you social reject? Can\'t you see I\'m working on my tan?"');
              scene.text('You open your mouth to reply, but she shoos you away. "I don\'t care, loser. Now piss off and stop blocking my light!"');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterLina(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A19', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lina/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A19'] >= 50) {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"I\'ve finally been improving my lap times!" Lina proudly tells you.');
      scene.text('"Great news! I\'m glad you\'re improving!" you encourage her.');
      scene.text('Lina nods. "Yeah, the new workout plan that Christina made for me is really great. She\'s really helped me out a lot."');
      // TODO-QSP: $OpenInnerThought + 'There she goes, worshipping Christina.' + $CloseInnerThought
    } else {
      // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>! Did you watch the latest video someone took of the Starle...
      scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}! Did you watch the latest video someone took of the Starlets? Their movements were amazing! I wish I could join them, but I'm too clumsy…" She looks a little dejected.`);
      scene.text('"Is that so?" you curiously ask.');
      scene.text('"I should stop, you\'re probably not interested in this anyway…" she replies with a nervous laugh. Before you\'re able to answer, you can hear Christina calling her over and Lina quickly runs over to her, leaving you alone.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        scene.text('"I always hear that I\'m bad at sports, but you\'re even worse than me!" Lina spares no time to insult you.');
        scene.text('"Where did this come from?" you ask.');
        scene.text('"It\'s just something me and the other girls were discussing and I just wanted you to know that," she mockingly replies.');
        scene.text('"Come and face me and I\'ll show you who the worse athlete is!" you fire back.');
      } else {
        scene.text('"So where\'s the old ball and chain?" you teasingly ask.');
        // TODO-QSP: dynamic text: "Oh shut up, <<$pcs_nickname>>! Don't you have anything better to do? At least I...
        scene.text(`"Oh shut up, ${((s as any).pcs_nickname ?? 0)}! Don't you have anything better to do? At least I have a friend unlike <i>some</i> people…" she fires back.`);
      }
    } else {
      // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>? Christina is looking for me…" Lina says ir...
      scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}? Christina is looking for me…" Lina says irritatingly.`);
      scene.text('"I wanted to ask you if you had the notes from the class. I need to copy them," you tell her.');
      scene.text('"We\'ll do it later. I have to find Christina right away or else she\'ll get mad." She quickly excuses herself.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterLariska(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A13', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lariska/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A13'] >= 50) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>! I need help with a thing and I think you're the perfect ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}! I need help with a thing and I think you're the perfect person that can help me out." Lariska smiles.`);
    scene.text('"Sure thing! What do you need help with?" you curiously ask.');
    scene.text('"Well… I need to impress Christina and need your help with coming up with something fitting," she starts and goes on a long tirade about what might impress Christina.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      scene.text('"So where\'s the old ball and chain?" you teasingly ask.');
      // TODO-QSP: dynamic text: "Oh shut up <<$pcs_nickname>>. Don't you have anything better to do? At least I ...
      scene.text(`"Oh shut up ${((s as any).pcs_nickname ?? 0)}. Don't you have anything better to do? At least I have friends!" she fires back.`);
      scene.text('You start laughing. "Yeah, \'friends.\'"');
    } else {
      // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>? I don't really have the time right now," L...
      scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}? I don't really have the time right now," Lariska says.`);
      scene.text('"Well… I just wanted to talk…" you tell her.');
      scene.text('She glances around to see if Christina is looking, then talks with you for a few minutes before she suddenly stops and gets up. You notice Christina looking in your direction with an angry look on her face as Lariska heads towards her.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterFedor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A5', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/fedor/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 50) {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>!" Fedor smiles at you.
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}!" Fedor smiles at you.`);
    scene.text('You take a seat next to him on the sand and quickly find yourself in a deep conversation with him for a while before things start to wind down and you bid him farewell as you get up.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A5'] <= 20) {
      scene.text('You sit down and try to talk to him, but he just ignores you until he finally gets up and walks away, leaving you sitting in the sand alone.');
    } else {
      // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>?" he asks.
      scene.text(`"What's up, ${((s as any).pcs_nickname ?? 0)}?" he asks.`);
      scene.text('"I just wanted to talk," you reply.');
      scene.text('He smiles and engages you in an interesting conversation for a while. The conversation eventually ends and you sit in silence before he gets up and walks over to Ivan.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterIvan(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A3', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/ivan/beach_chat.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] < 225  &&  ((s as any).IvanShowerQW ?? 0) === 1) {
    (s as any).IvanShowerQW = 11;
    // TODO-QSP: dynamic text: Ivan thinks for a second before he speaks. "<<$pcs_nickname>>, I would like to t...
    scene.text(`Ivan thinks for a second before he speaks. "${((s as any).pcs_nickname ?? 0)}, I would like to talk to you about what happened in the shower. You're a great girl, and I had a great time, but I'm not ready for a relationship. I need to put all my energy into my athletics. I think I have a good shot at getting to the Russian National Championships this year. I really can't afford to be distracted by girls, even girls as attractive as you. So how about we just stick to fooling around a little?"`);
    scene.actions([
      { label: 'Discuss', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big3.jpg');
    scene.text('You nod at what he says. "Sure Ivan, I understand. I\'m okay with just being friends, really close friends who sometimes fool around in the shower…" you say in your best sexy voice with a wink.');
    // TODO-QSP: dynamic text: He gives you a one armed hug. "<<$pcs_nickname>>, you're the best! Not only are ...
    scene.text(`He gives you a one armed hug. "${((s as any).pcs_nickname ?? 0)}, you're the best! Not only are you smoking hot, but you're a super cool chick too! If you want to hang out some time, you can stop by my place." He pauses and looks around before leaning in close. "Or if you get a little bored during lunch break, you can let me know too…" he says with a suggestive tone and waggled eyebrows.`);
    scene.text('You laugh at his silly antics. It\'s nice to have found a fun guy to hang out with. Perhaps you will stop by his place, or maybe even take him up on his offer to make lunch break less boring. "Sure Ivan, I\'ll think about it."');
    // TODO-QSP: $func('npc_reactions', 'general', 'A3')
    scene.actions([
      { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A3'] >= 50) {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," Ivan greets you as he sees you approaching.
      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," Ivan greets you as he sees you approaching.`);
      scene.text('"Hey Ivan. How was your last training match?" you ask curiously.');
      scene.text('He tells you about it and after that the two of you talk about a variety of topics for a while until he gets up and says he\'s going for a swim. He runs out into the lake and dives forward once the water is deep enough.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
        scene.text('You see Ivan talking to Fedor and decide to approach him. "Hey Ivan, do you have a minute?" you ask.');
        // TODO-QSP: dynamic text: He turns around. "Hey <<$pcs_nickname>>. Is it important? As you can see, I'm ta...
        scene.text(`He turns around. "Hey ${((s as any).pcs_nickname ?? 0)}. Is it important? As you can see, I'm talking to Fedor and we're discussing an important thing."`);
        scene.text('"Not that important, I just thought we could have a little chat. You\'re always talking to Fedor anyway, you need a change, don\'t you?" you ask in a playful, flirtatious tone.');
        scene.text('He\'s clearly not impressed by your desperate attempt as he looks you in the eye. "I told you I\'m busy right now. Maybe some other time." With that, he starts talking to Fedor again.');
        scene.text('You feel very awkward as he wasn\'t interested in your flirting at all. You decide not to push it any further and leave them alone.');
      } else {
        scene.text('"Hey Ivan, how are you today?" you ask as you walk over to him.');
        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. I'm fine…" Ivan replies as he looks around. When he sees...
        scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}. I'm fine…" Ivan replies as he looks around. When he sees that everyone is busy doing something or talking to someone, he sits down on the sand and gestures for you to sit next to him.`);
        scene.text('You start chatting about everything from school, to sports and reading. After a while, Ivan starts talking about how he tried to help his younger siblings learn. "It\'s important that they get a good education. I want them to achieve something in life," he says with a serious look in his eyes.');
        scene.text('"That\'s very thoughtful of you. If you want, I can share some tips?" you reply. For the next few minutes, you share a few tips on how he can help them as much as possible and how he could make learning enjoyable for them.');
        scene.text('After a while, you stand up. "I should get going."');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A1', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dimka/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 50) {
      scene.text('"Just the person I was hoping to see!" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would\'ve loved it out there. It really made me realize we\'re wasting away out here in a place like this." You then chat about the other places he has visited.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
        // TODO-QSP: dynamic text: "You seem to have the wrong idea about me <<$pcs_nickname>>." Dimka holds out hi...
        scene.text(`"You seem to have the wrong idea about me ${((s as any).pcs_nickname ?? 0)}." Dimka holds out his hand to keep you from getting any closer. "Just because we run in the same social circle doesn't mean we're friends."`);
        scene.text('You can\'t help but scoff and roll your eyes. "Who said I want to be friends? You just looked lonely standing over here by yourself. I was just trying to be nice." You trade a few more barbs back and forth.');
      } else {
        scene.text('Dimka is willing to entertain you for a few minutes, occasionally taking part in the conversation but letting you do most of the talking. "Hey, Bella!" he calls as he spots her walking by. "Sorry, I hope you don\'t mind." He follows after her before you can even reply. At least he let you talk to him.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A1'] >= 50) {
        scene.text('"Have I shown you my photos from my last trip?" he smiles. "Take a look at this." He pulls out his phone and shows you some photos from his latest trip to Moscow. "You would\'ve loved it out there. It really made me realize we\'re wasting away out here in a place like this." You then chat about the other places he\'s visited.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
          scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his \'friendly\' appearance in front of everyone.');
          scene.text('"I just wanted to say hi is all," you reply.');
          scene.text('He looks around like this is a common burden. "Of course you did, everyone does." You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
        } else {
          scene.text('Dimka is willing to entertain you for a bit, occasionally taking part in the conversation but letting you do most of the talking. "Hey, Bella!" he calls as he spots her walking by. "Sorry, I hope you don\'t mind." He follows after her before you can even reply. At least he let you talk to him.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
          scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few others. Some of them give you an odd look, obviously not sure why you\'re here, but Dimka makes you feel welcome. "Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
            scene.text('Dimka looks down at you with a condescending smile. "You get lost loser? Shouldn\'t you be off pretending to be an elf or something?" he asks with a charming smile on his face.');
            scene.text('"I just wanted to say hi is all," you reply.');
            scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that you have, why don\'t you go back to your own kind?" You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
          } else {
            scene.text('Dimka looks down at you with a condescending smile. "What do you want?" he asks, maintaining his "friendly" appearance in front of everyone.');
            scene.text('"I just wanted to say hi is all," you reply.');
            scene.text('He looks around like this is a common burden. "Of course you did, everyone does." You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
          scene.text('Dimka greets you with a friendly smile, making room for you in the group made up of Bella, Igor and a few others. Some of them give you an odd look, obviously not sure why you\'re here, but Dimka makes you feel welcome. "Relax, she doesn\'t have the plague," he playfully chides everyone and you\'re soon engaged in a conversation with Dimka.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
            scene.text('Dimka looks down at you with a condescending smile. "What do you want? We don\'t have any drugs and none of us want whatever it is you\'re selling," he remarks, maintaining his "friendly" appearance in front of everyone.');
            scene.text('"I just wanted to say hi is all," you reply.');
            scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now go away before you ruin everyone\'s day with your dreadful attempt at fashion." You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
          } else {
            scene.text('Dimka looks down at you with a condescending smile. "What do you want? Maybe looking for some fashion advice?" he asks, maintaining his "friendly" appearance in front of everyone.');
            scene.text('"I just wanted to say hi is all," you reply.');
            scene.text('He looks around like this is a common burden. "Of course you did, everyone does. Now that I\'ve made your day you can go do… whatever it is you people do." You try talking to him, but he acts like he is barely tolerating you, like a Tsar might a peasant in his court.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterIgor(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A4', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/igor/beach_chat.jpg');
  if (((s as any).IgorQW ?? 0)?.['Lover'] > 0) {
    scene.text('When Igor sees you, his face lights up and he smiles warmly. "I was hoping I\'d see you. I, uh, kind of missed you…" he says shyly and it makes you giggle. While you talk with each other, his warm hand finds yours.');
    if (((s as any).IgorQW ?? 0)?.['strap'] >= 1) {
      scene.actions([
        { label: 'Tease him about fucking him with a strapon', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/beach_chat.jpg');
    scene.text('You decide to tease him a little. "I hope you\'re not too sore after last time…" you whisper with a smirk. Igor\'s cheeks flush pink as he looks around nervously, hoping no one overheard.');
    scene.actions([
      { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
      { label: 'Just chat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/beach_chat.jpg');
    scene.text('You choose not to press it any further and start talking to him about a variety of topics while holding hands until break is over. With a smile, you give him a quick kiss goodbye.');
    scene.actions([
      { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just chat with him', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/igor/beach_chat.jpg');
    scene.text('You sit next to Igor holding his hand while the two of you chat for some time about a variety of topics.');
    scene.actions([
      { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A4'] >= 50) {
        scene.text('You know he doesn\'t have many friends, so he\'s more than happy that you want to hang out with him. Unlike most boys, Igor is really attentive and listens to everything you say, even taking an interest in the more "girly" topics.');
        scene.text('"Oh, it\'s not that weird," he says while blushing. "I have a sister, so I hear about these things all the time…"');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
          scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this as a courtesy since you\'re in the same clique.');
        } else {
          scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 60) {
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka."');
          scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
            scene.text('The conversation feels forced as Igor makes almost no effort to talk to you. You get the feeling he\'s just doing this to try and be polite to you.');
          } else {
            scene.text('As usual, Igor is hanging around Dimka, but he pays closer attention to you. With a smile, he asks you how your day has been so far and before long you\'re talking about all kinds of things. He even takes an interest in the more "girly" topics.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A4'] >= 70) {
          scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
          scene.text('He shrugs dismissively. "Just waiting for Dimka."');
          scene.text('The two of you spend some time chatting while he waits for Dimka. Eventually he shows up and Igor is ready to leave. "Maybe we can talk some other time?" he asks with a small smile as he waves goodbye.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('Igor looks around in a slight panic. "Just waiting for Dimka. I think I see him." He almost runs away like he\'s afraid you\'re about to do something to him.');
          } else {
            scene.text('"Hey Igor, what are you doing?" you ask as you see him looking around for someone.');
            scene.text('Igor looks around in a slight panic. "Why? what do you want?"');
            scene.text('You give him a friendly smile. "I just wanted to see how you were doing. Anything wrong with that?"');
            scene.text('He swallows and looks a little afraid. "No… no of course not." You talk for a few minutes, but you can tell he is afraid of you, like he is expecting you to bully him in some manner. He looks relived upon seeing Dimka and rushes over to him. "Uh, I\'ve got to go. See you later."');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterKatja(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/katja/beach_chat.jpg');
  if (((s as any).katjaQW ?? 0)?.['drunk_help'] === 1) {
    scene.actions([
      { label: 'Thank her for taking you home', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'like');
    if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['drunk_help'] = 0;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} ${((s as any).npc_lastname ?? 0)?.['A14']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    // TODO-QSP: dynamic text: You approach Katja and thank her for taking you home from the disco when you wer...
    scene.text(`You approach Katja and thank her for taking you home from the disco when you were drunk and she gives you a knowing smile. "Don't mention it, ${((s as any).pcs_nickname ?? 0)}! You really shouldn't get that drunk again though. It could end badly. Some of the guys there are real pigs…" she says. "Do you want to hang out after school? We could do our homework together?"`);
    scene.text('"Sure, why not?" you reply.');
    scene.actions([
      { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
    ]);
  } },
    ]);
  }
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
      if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
        scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'katja_uni_tell'] }]);
      }
      scene.text('You spend some time lying next to Katja, laughing and joking as she tells you some personal stories about Vicky. "She had been drinking all night and had to go, but all the stalls were full, so she drags me out behind the community center to go pee behind a bush." She breaks out into a fit of giggles.');
      scene.text('"She was so drunk, as she was squatting, she stumbled and fell into her own pee!"');
      if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
        scene.actions([
          { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
        ]);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
        scene.text('You smile at her as you approach. "Hey Katja, trying a new lipstick out? That color looks pretty on you."');
        scene.text('She smiles sheepishly at your compliment. "Yeah… Just wanted to try something a little different…" she answers quietly. The conversation doesn\'t really go anywhere as she keeps her answers short or doesn\'t say anything at all. At least she\'s willing to actually talk to you.');
      } else {
        scene.text('With Katja being a quiet girl, she doesn\'t do much talking, but she seems to enjoy some lighthearted banter with you, so long as you\'re doing most of the talking. You get the feeling that if you were closer, she\'d open up more, but for now you\'ll have to settle with this.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
        if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
          scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'katja_uni_tell'] }]);
        }
        scene.text('Lying next to Katja, you have a lively conversation where you exchange funny stories about Vanya. "And that\'s how my sister fell in love with the biggest clown in school!" she laughs with a snort.');
        scene.text('"And I wouldn\'t change him for the world!" Vicky adds with a smile.');
        if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
          scene.actions([
            { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
          ]);
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
          scene.text('Katja looks around nervously when she sees you approaching. "Why do you want to talk to me? I\'m not sporty like you or my sister or Albina. Could you go and… speak with someone else please?"');
        } else {
          scene.text('With Katja being a quiet girl, she doesn\'t do much talking, but she seems to enjoy some lighthearted banter with you, so long as you\'re doing most of the talking. You get the feeling that if you were closer, she\'d open up more, but for now you\'ll have to settle with this.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
            scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'katja_uni_tell'] }]);
          }
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0) {
            scene.text('Katja smiles as you approach and you have a lively conversation about your favorite subjects and her plans for going to university after school. "I want to become a teacher. Helping others achieve their potential just sounds like the perfect job!" she gleefully states.');
          } else {
            // TODO-QSP: dynamic text: Lying next to Katja, you have a lively conversation looking back at your favorit...
            scene.text('Lying next to Katja, you have a lively conversation looking back at your favorite class in school and about it is going to be for \' + iif( katjaQW[\'know_going_to_teaching_degree\'] = 1, \'her\', \'you\') + \' studying at the university.');
          }
          if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
            scene.actions([
              { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
            ]);
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
            scene.text('Katja doesn\'t look too happy to see you and your conversation doesn\'t really go anywhere as she keeps her answers short or doesn\'t say anything at all. At least she\'s willing to actually talk to you.');
          } else {
            scene.text('Although Katja is happy to see you, she doesn\'t do much talking. You get the feeling that she\'d open up more if you were closer, but for now you\'ll have to settle with this.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A14'] >= 50) {
          if (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  &&  (((s as any).month ?? 0) > 6  ||  (((s as any).month ?? 0) === 6  &&  ((s as any).day ?? 0) > 15))) {
            scene.actions([{ label: 'Continue', goto: ['KatjaHomeTalk', 'katja_uni_tell'] }]);
          }
          scene.text('Katja takes a surprising interest in what you and your fellow gopniks get up to outside of school and listens carefully when you answer her numerous questions.');
          if (((s as any).university ?? 0)?.['student'] === 1  &&  ((s as any).katjaQW ?? 0)?.['know_going_to_teaching_degree'] === 0  &&  ((s as any).university ?? 0)?.['enrolled_in'] === 'teaching_studies') {
            scene.actions([
              { label: 'Tell Katja that you are going to the university', goto: ['KatjaHomeTalk', 'uni_tell'] },
            ]);
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
            scene.text('Katja looks around nervously when she sees you approaching. She catches sight of her sister and dashes over to hide behind her, clearly scared of you and wanting to avoid speaking to you.');
          } else {
            scene.text('With Katja being a quiet girl, she doesn\'t do much talking and often avoids eye contact with you. You get the feeling she\'d open up more if you were closer, but for now you\'ll have to settle with this.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterBella(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A22', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/bella/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A22'] >= 50) {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"You know, you should come and hang out with me and my friends," Bella says with a smile.');
      scene.text('"You really mean that?" you ask as your eyes widen. "You think I\'ll fit in with them?"');
      scene.text('Bella nods. "No doubt! You\'ll have no issues fitting in. I\'ll be seeing you around and we can plan something, no?"');
    } else {
      scene.text('"Now that we\'ve established that you\'re pretty mature and cool, you should come and hang with my friends," Bella says with a smile.');
      scene.text('"You really mean that?" you reply as your eyes widen.');
      scene.text('Bella nods. "Of course, I don\'t joke around. I\'ll be seeing you around and we can plan something, no?"');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        // TODO-QSP: dynamic text: "What do you want now, <<$pcs_nickname>>? What can you possibly want from me?" B...
        scene.text(`"What do you want now, ${((s as any).pcs_nickname ?? 0)}? What can you possibly want from me?" Bella moans as she rolls her eyes.`);
        scene.text('"I was thinking about asking yo…" you start.');
        scene.text('Bella begins to mockingly laugh. "Don\'t be silly! Like I would give advice to someone like you…"');
      } else {
        scene.text('"What do you want?" Bella arrogantly asks as you approach her.');
        scene.text('"I just wanted to ask you about this store in the city. I heard…"');
        scene.text('Before you\'re able to continue she cuts you off, looks at her pedicure and sighs. "Listen, the city is not for children like you. You\'re better off buying clothes like the rest of your classmates at the G&M store here in Pavlovsk."');
      }
    } else {
      // TODO-QSP: dynamic text: "Make it quick <<$pcs_nickname>>! I don't really have the time to stand here and...
      scene.text(`"Make it quick ${((s as any).pcs_nickname ?? 0)}! I don't really have the time to stand here and chat…" Bella hurries you on.`);
      scene.text('"I was thinking we could maybe hang after school one day?" you cheerfully ask.');
      scene.text('"You and I?" she looks around. "Is this a prank? Where have you hidden the cameras?" She keeps on looking around. "Don\'t be silly! Run along now, kid." She scoffs you aside.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterLizaveta(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A140', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/lizaveta/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
      scene.text('The perks of being a close friend of Liza go beyond just running in the same social circle. She tells you some gossip that no one else should know about.');
      scene.text('"I heard from a little red bird that one time while Vicky was out partying at the community center, she couldn\'t hold it in, so she went to do her business behind a bush, buuuut…" Liza drags it out to build a little suspense. "She was so drunk that she ended up falling into her own piss! Luckily Kat-- her friend, I mean, was there to take her home before anyone saw!" The two of you chat for some time about some of the recent stuff she has heard.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
        scene.text('"You know, you really shouldn\'t shit where you sleep," Lizaveta says while shaking her head disapprovingly.');
        scene.text('"What? What\'s that supposed to mean?" you ask, but she just sighs.');
        scene.text('"You\'re dumber than I thought…" she mutters. You try to get an answer out of her, but she dances around your questions while talking to Bella.');
      } else {
        scene.text('You spend some time talking with Lizaveta, and for a while you manage to avoid talking about anything gossipy, but considering she\'s the queen of it, it eventually devolves into some "He said, she said."');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
        scene.text('You would think that being close friends with Lizaveta would mean getting some exclusive gossip from her, but she keeps her lips sealed. "I know everyone likes to say I can\'t keep my mouth shut, but even I need to have some secrets of my own." she winks.');
        scene.text('"Oh come on!" you plead. "You gotta give me a little bit of something…"');
        scene.text('With a dramatic sigh, Liza caves and shares some harmless, yet juicy gossip you hadn\'t heard about until now.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
          scene.text('The conversation is stale and lifeless as Lizaveta taps away at her phone while you talk, only managing an occasional "Yeah…" or "Uh-huh…"');
        } else {
          scene.text('You spend some time talking with Lizaveta, and for a while you manage to avoid talking about anything gossipy, but considering she\'s the queen of it, it eventually devolves into some "He said, she said."');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
          scene.text('When you sit on the sand next to Lizaveta, she smiles at you and the two of you are soon talking about a variety of subjects. However, she can\'t help herself and soon starts asking you all sorts of questions about your fellow nerds. You can barely even get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
            scene.text('When you sit on the sand next to Lizaveta, she looks at you in shock and surprise. "Why are you sitting next to me, loser? Get away from me." Her outburst attracts the attention of the other cool kids and jocks around and now everyone is staring at you, making you feel very unwelcome. She continues to stare at you until you get up and leave.');
          } else {
            scene.text('When you sit on the sand next to Lizaveta, she starts asking you all sorts of questions about your fellow nerds. You can barely get a word in edge wise as she pumps you for gossip. You just can\'t help yourself and start letting some stuff slip as the two of you talk.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A140'] >= 50) {
          scene.text('When you sit on the sand next to Lizaveta, she smiles at you and the two of you are soon talking about a variety of subjects. However, she can\'t help herself and starts asking you all sorts of questions about your fellow gopniks. You can barely even get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
            scene.text('When you sit on the sand next to Lizaveta, she looks at you in shock and surprise before scooting away. "Why are you sitting next to me, freak? Get away from me." Her outburst attracts the attention of the other cool kids and jocks around and now everyone is staring at you, making you feel very unwelcome. She continues to stare at you until you get up and leave.');
          } else {
            scene.text('When you sit on the sand next to Lizaveta, she starts asking you all sorts of questions about your fellow gopniks. You can barely get a word in edge wise as she pumps you for gossip. You can\'t help yourself and start letting some stuff slip as the two of you talk.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterMarcus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A146', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/marcus/beach_chat.jpg');
  if (((((s as any).katjaQW ?? 0)?.['QWstage'] === 5  &&  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === 0)  ||  ((s as any).katjaQW ?? 0)?.['marcus_asked'] === -1)  &&  ((s as any).Marcus_sextype ?? 0) > 0  &&  ((s as any).katjaQW ?? 0)?.['boy_block'] === 0) {
    scene.actions([
      { label: 'Ask Marcus about [+iif(katjaQW[\'QWstage\'] > 5, \'a threesome...]', goto: ['pav_beach_chat', 'Marcus_Katja_talk'] },
    ]);
  }
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
      scene.text('Talking with Marcus is always fun. He always knows how to make you laugh with the stories he tells. "You should have seen his face!" He lets out a deep laugh. "We walk by the bathroom on the way to his room and BAM! There\'s his mom, butt naked, and we see it all! You ever seen someone change colors? Poor guy was as pink as… as his mom\'s nipples now that I think about it!"');
      scene.text('You spend some time laughing along with him as he tells you some more stories.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
        scene.text('You try to strike up a conversation with Marcus, but he just ignores you as he continues talking to Andrey and Dimka.');
      } else {
        scene.text('You walk up to Marcus and he gives you a small smile as you start talking to him. He responds and talks back, sharing a few stories of his time in America or when he first arrived here in Russia, but he spends just as much time talking to Andrey as he does you.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
        scene.text('You walk up to Marcus and he gives you a big smile as you start talking to him. The conversation quickly turns to sports, mostly sports in America. It seems he was a jock back home and loves watching and playing sports. He seems to really miss American football, his favorite sport to play, but is happy there is basketball here, his second favorite sport. He talks about his games back home, but also asks about how you are doing in sports yourself.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
          scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
        } else {
          scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. The conversation quickly turns to sports, mostly sports in America. It seems he was a jock back home and loves watching and playing sports. He seems to really miss American football, his favorite sport to play, but is happy there is basketball here, his second favorite sport. He talks about the games he played back home.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
          scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America, though he often talks about the differences between nerds here and there. He explains how nerds back home are less about grades and more about what school club you belonged to.');
          scene.text('You spend some time asking more questions about his home life and he\'s happy to tell you all about it.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
            scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
          } else {
            scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America. "It\'s kind of funny, I don\'t think I was nearly as popular as this back home. I\'m not complaining though!"');
            scene.text('You spend some time asking more questions about his home life and he\'s happy to tell you all about it.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A146'] >= 50) {
          scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America. "You guys seem a lot more fun than I expected. I\'m still trying to wrap my head around what a gopnik is. I know a lot of you are called that, but there are some big differences." You explain some of the differences between the collective term and what a real gopnik is, which just leads to him once again wondering why you all hang out together.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
            scene.text('You try to strike up a conversation with Marcus, but he mostly ignores you and continues talking to Andrey and Dimka.');
          } else {
            scene.text('You walk up to Marcus and he gives you a smile as you start talking to him. You enjoy hearing the stories Marcus tells about his life in America. "You guys aren\'t nearly as bad as the bangers back home. I\'ve never seen any of you carrying guns." He goes on to tell you about some of his encounters with gangbangers back home. It sounds like they were a lot more dangerous than gopniks.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterMarcus_KatjaTalk(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).katjaQW) (s as any).katjaQW = {}; (s as any).katjaQW['marcus_asked'] = 1;
  scene.img('images/characters/pavlovsk/school/boy/marcus/beach_chat.jpg');
  scene.text('"So you know how we sometimes have fun together?" you ask him.');
  // TODO-QSP: dynamic text: "Yeah?" he answers and you smile. "Well, I have this friend who's ' + iif(katjaQ...
  scene.text('"Yeah?" he answers and you smile. "Well, I have this friend who\'s \' + iif(katjaQW[\'QWstage\'] > 5, \'a little shy and don\'t have a boyfriend so I was wondering if you were up for a threesome?\', \'never been with a boy before, but would like to try it. So I was wondering if you were up for helping me give her an amazing first time?\') + \' She\'s \' + iif(pcs_hotcat < npc_hotcat[\'A14\'], \'even hotter than I am,\', \'totally hot,\') + \' so you won\'t regret it."');
  // TODO-QSP: dynamic text: "Are you asking me if I want to have a threesome with two beautiful girls' + iif...
  scene.text('"Are you asking me if I want to have a threesome with two beautiful girls\' + iif(katjaQW[\'QWstage\'] > 5, \', with one of them even being a virgin?\', \'?\') + \'" he asks with a surprised look on his face. "Of course I\'m up for this!" he exclaims as his face turns into a huge grin.');
  scene.text('"Great," you answer. "I\'ll call you with her address when we are ready. But you have to be discreet, we don\'t want any rumors spread around!" you tell him and he smiles. "Of course, I\'m a gentleman and gentlemen never kiss and tell. I look forward to your call."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterAndrey(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A147', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/andrey/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
      scene.text('"Do you think Stasya will ever get over this whole… jealousy thing she has for Marcus?" Andrey confides in you with a look of exhaustion.');
      scene.text('Stasya must really be putting him through it lately. "She\'ll get over herself, don\'t worry. Just be glad you\'re not one of the nerds." you tease.');
      scene.text('That seems to brighten his mood a bit as the conversation continues in a lighter tone.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
        scene.text('You spend a few minutes talking with Andrey until he makes up an excuse to leave. "I gotta go meet up with Marcus. Uh, maybe we\'ll talk some other time?"');
      } else {
        scene.text('"Hanging out with Marcus has been great for me!" Andrey says with a grin.');
        scene.text('"Oh yeah?" You can\'t help but smile when you see the good mood he\'s in. "Did something happen recently?"');
        scene.text('"No, it\'s just that hanging around him has made me more popular than ever! I mean, I was already pretty popular but this… Being his friend sure has its perks!"');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
        scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
        scene.text('Andrey just shrugs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
        scene.text('You spend some time chatting with him, which seems to take his mind off things for a bit.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
          scene.text('You spend a few minutes talking with Andrey until he makes up an excuse to leave. "I gotta go meet up with Marcus. Uh, maybe we\'ll talk some other time?"');
        } else {
          scene.text('"Hanging out with Marcus has been great for me!" Andrey says with a grin.');
          scene.text('"Oh yeah?" You can\'t help but smile when you see the good mood he\'s in. "Did something happen recently?"');
          scene.text('"No, it\'s just that hanging around him, he is way more into sports than I am. But he got me into working out and jogging and you know what? I feel great." He goes on talking about the positive changes in his life since Marcus moved in.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
          scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
          scene.text('He gives you a slightly confused stare as to why you\'re talking to him. "Are you lost or something, nerd?"');
          scene.text('You shake your head. "No, I just wanted to see how things were with you is all."');
          scene.text('Andrey just sighs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
          scene.text('You spend some time chatting with him. He is a bit reluctant at first, but he eventually welcomes the distraction.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
            scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Go hang out with your own kind. No one here wants anything to do with you." He proceeds to ignore you and you can feel everyone else staring at you. Afraid someone might start picking on you, you quickly leave.');
          } else {
            scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused look as to why you\'re talking to him. "If I wanted to talk to you, I would come find you. Go away." He proceeds to ignore you and you can feel everyone else staring at you. Afraid someone might start picking on you, you quickly leave.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A147'] >= 50) {
          scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
          scene.text('He gives you a smirk. "Come to see what it\'s like to be, well… liked? Or did you just get too drunk and get lost?"');
          scene.text('You shake your head. "No, I just wanted to see how things were with you is all."');
          scene.text('Andrey just sighs. "Oh you know, Stasya and my parents still complain about Marcus, so the usual," he teases halfheartedly.');
          scene.text('You spend some time chatting with him. He is a bit reluctant at first, but he eventually welcomes the distraction.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
            scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Don\'t you have some street to hang out on trying to look tough or something? No one wants you around, so get lost." He proceeds to ignore you and you can feel everyone else staring at you.');
          } else {
            scene.text('"Hey, Andrey! How\'s it been?" you ask with a small smile.');
            scene.text('He gives you a slightly confused look as to why you\'re talking to him. "Why are you talking to me? We\'re not friends, so go bother someone else." He proceeds to ignore you and you can feel everyone else staring at you.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterMefodiy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A148', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/mefodiy/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A148'] >= 50) {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"I still don\'t get why you guys keep me around. There really isn\'t much about me that screams \'popular.\'" Mefodiy explains with a shy smile.');
      scene.text('"Hey, you\'re selling yourself short." you comfort him. "Every kingdom needs their village idiot, right?" you add with a smirk.');
      // TODO-QSP: dynamic text: He winces and groans as he clutches at his heart. "Damn, that was a cold one <<$...
      scene.text(`He winces and groans as he clutches at his heart. "Damn, that was a cold one ${((s as any).pcs_nickname ?? 0)}! You're lucky I like you!"`);
    } else {
      scene.text('"Who would have thought that being funny and cute would make me so popular?" Mefodiy says and you can\'t help but laugh.');
      scene.text('"You really couldn\'t be more wrong." you tease him.');
      // TODO-QSP: dynamic text: He takes a second to think. "Hmm… ah, you're right! What I should have said was ...
      scene.text(`He takes a second to think. "Hmm… ah, you're right! What I should have said was <i>incredibly handsome and hilarious</i>. Thanks for correcting me ${((s as any).pcs_nickname ?? 0)}!" he says with a wink.`);
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        scene.text('"It doesn\'t take much to get on people\'s good sides. Just look at me. If I can manage it, why can\'t you?" Mefodiy seems disappointed that you\'re not getting along better, but at least he seems willing to give you a chance.');
      } else {
        scene.text('"I just can\'t." Mefodiy groans after talking to you for a few minutes. "You just kill my whole mood…" He sighs heavily before walking away, dragging his feet the entire time.');
      }
    } else {
      scene.text('Mefodiy has you laughing nonstop the entire time you\'re hanging out with him. You lose track of time, but eventually some of the guys call him over and he excusses himself to go see what they want.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterVicky(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A15', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/vicky/beach_chat.jpg');
  if (((s as any).npc_rel ?? 0)?.['A15'] >= 50) {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      // TODO-QSP: dynamic text: As soon as Vicky sees you, she pulls you into a tight hug. "<<$pcs_nickname>>, m...
      scene.text(`As soon as Vicky sees you, she pulls you into a tight hug. "${((s as any).pcs_nickname ?? 0)}, my third favorite person!"`);
      scene.text('"Wait, third? I get Katja being second, but who\'s first?!" You pretend to be outraged and she plays along.');
      scene.text('"Oh honey. You… you didn\'t know? I don\'t know how to tell you this but… Vanya is my number one!"');
      scene.text('You pout and cross your arms. "That\'s not fair. I can\'t fuck my way to the number one spot like he can!" you say before the two of you burst into laughter.');
    } else {
      scene.text('"I\'ve been thinking of going all in and dying my hair to match the color of the outfits I wear. What do you think?" Vicky asks as she runs her fingers through her red hair.');
      scene.text('You can\'t help but laugh at her odd question. "Uhmm, you wear a different color every day. Do you know what will to your hair after a week?"');
      scene.text('Vicky is silent for a while before shrugging. "No?"');
      scene.text('"Bald. You will definitely be bald after a week of dying your hair…" You and Vicky then spend the rest of break joking back and forth.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        scene.text('"I know we\'re both \'popular\' which means we should be friends, but I would honestly rather have people think I let Lera\'s creepy brother finger me than spend another minute talking to you!" Vicky throws her hands up and shrugs.');
      } else {
        // TODO-QSP: dynamic text: "Do you hear that <<$pcs_nickname>>?" Vicky interrupts you mid sentence. You go ...
        scene.text(`"Do you hear that ${((s as any).pcs_nickname ?? 0)}?" Vicky interrupts you mid sentence. You go quiet and listen carefully, but don't hear anything unusual.`);
        scene.text('"Listen carefully… that\'s the sound of me running away from this conversation. See ya!"');
        scene.text('Before you can respond, she takes off down the hallway.');
      }
    } else {
      scene.text('It can be hard to follow Vicky as she keeps up a lively conversation, jumping from one topic to another, but you don\'t really mind and find her upbeat attitude intoxicating.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterStasya(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A139', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/stasya/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1) {
    if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
      scene.text('When Stasya sees you, she smiles and waves. "Glad you showed up. We were just discussing which boy is cutest - other than Andrey of course," she tells you. It seems she and Bella can\'t agree on which of the boys are the cutest and you join in with their ranking of the boys. The conversation is rather fun.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
        scene.text('"Don\'t think that just because we\'re in the same clique, we\'re going to be best buddies," Stasya tells you. Despite that, she doesn\'t run you off as you hang around to talk, though she pretty much ignores you while she talks to others.');
      } else {
        scene.text('You spend some time conversing with Stasya until she holds out her hand to stop you from talking. "I don\'t mean to cut you off, but I need to see Andrey." She gives you a half-assed apologetic smile before walking off in search of her elusive boyfriend.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
        scene.text('When Stasya sees you, she smiles and waves. We were just discussing which boy is cutest - other than Andrey of course," she tells you. It seems she and Bella can\'t agree on which of the boys are the cutest and you join in with their ranking of the boys. The conversation is rather fun.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
          scene.text('"What do you want? Don\'t you have some balls to play with?" Stasya says with a smirk. Despite that, she doesn\'t run you off as you hang around to talk, though she pretty much ignores you while she talks to others.');
        } else {
          scene.text('You spend some time conversing with Stasya until she holds out her hand to stop you from talking. "I don\'t mean to cut you off, but I need to see Andrey." She gives you a half-assed apologetic smile before walking off in search of her elusive boyfriend.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
          scene.text('She stares at you approaching. "Are you lost or something?" Bella and Irina giggle at her remark and she turns and ignores you, talking with Bella and Irina instead, who also ignore you. They sometimes respond to your comments or questions, mostly acting like how adults act when small children try to take part in adult conversations.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
            scene.text('"Don\'t even fucking think about it!" Stasya warns when you try to approach. She stares you down until you finally back away.');
          } else {
            scene.text('She stares at you approaching. "What do you want? Never mind I don\'t want to know." She turns and ignores you, talking with Bella and Irina instead, who also ignore you. At least they don\'t chase you off.');
          }
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
          scene.text('She looks you over from head to toe before she scoffs. "What?"');
          scene.text('You smile at her. "I just wanted to talk."');
          scene.text('She rolls her eyes and starts talking to Bella and Irina. They mostly ignore you, but do respond to a few of your questions and comments as they talk about boys and fashion.');
        } else {
          scene.text('She stares at you approaching. "What do you want? Never mind I don\'t want to know." She turns and ignores you, talking with Bella and Irina instead, who also ignore you. At least they don\'t chase you off.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterInna(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A17', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/irina/beach_chat.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 90) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what did the virgin say after her first blowjob?" Irina asks...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, what did the virgin say after her first blowjob?" Irina asks, taking a sip of water as you respond.`);
      scene.text('"I don\'t know, what did she say?"');
      scene.text('"<i>Ah lurb yuuhh~!</i>" she replies without swallowing, grinning at you as it spills down her chin.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
        scene.text('"I would rather have Petia stare at my tits until he creams himself than to talk to you, slut!" she hisses with disgust. "Keep your legs together, cunt! You\'re a fucking embarrassment, you know that?" she taunts before she spits in front of your legs. "Use this as lube to go and fuck yourself!"');
        scene.text('You let her finish her rant before placing your hand into your swimsuit and letting your fingers slide over your clit. "When there\'s an itch, you\'ve got to scratch it!" Irina stands silently, shocked at your actions.');
      } else {
        scene.text('"I would rather have Petia stare at my tits until he creams himself than to talk to you, slut!" she hisses with disgust.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A17'] >= 60) {
        scene.text('"God, have you ever seen that Natasha girl? She\'s so pathetic, right? She\'s so obsessed with us!" Irina says before rolling her eyes and the two of you chat for a while about a variety of topics.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
          scene.text('"My advice is to sleep with as many people as possible," Irina says.');
          scene.text('"But that would make me a slut, wouldn\'t it?" you reply.');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, everybody does it. It's just that nobody talks about it," sh...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}, everybody does it. It's just that nobody talks about it," she assures you.`);
          scene.text('"So, it\'s like a secret society?"');
          scene.text('"That\'s one way of looking at it…" she nods in an approving manner, then gives you a friendly smile before walking away.');
        } else {
          scene.text('"Liza told me that some girl overheard this group of girls talking at lunch. Apparently, they heard Stasya talking shit about me!" Irina exclaims and both of you let out a little gasp, even though it really isn\'t much of a surprise.');
          scene.text('"What did she say?" you ask.');
          scene.text('"Oh I wouldn\'t dare repeat the things she said. It would just leave a bad taste in my mouth." Irina shakes her head in disappointment, but you notice the hint of a smirk on her lips. "Jealousy is such an ugly look…" The two of you continue gossiping for a while.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A17'] >= 70) {
          scene.text('"Back when we were kids, Bella tried to ride a cow," Irina giggles.');
          scene.text('"What, like a real life cow? How\'d that go?" you ask curiously.');
          scene.text('"She managed for few minutes before the cow shook her off and she landed in cowshit!" she cackles. "But you didn\'t hear it from me, okay?"');
          scene.text('You tap your nose, assuring Irina her secret is safe is safe with you.');
          scene.text('"What are you girls laughing at?" Bella shouts from a distance.');
          scene.text('"Nothing, nothing…" you both reply in a near synchronized manner, though you both keep giggling for some time as Bella rolls her eyes and sighs deeply. "Effing kindergarten, seriously."');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
            scene.text('Irina listens to you talk with a tired and bored expression. "Oh god, I think I\'d rather talk to Lesco…" she yawns before brushing you off.');
          } else {
            scene.text('You try to make small talk with Irina, and to your surprise, she doesn\'t instantly turn you away. Seeing as though she hasn\'t said anything yet, you keep talking to her, even though she hasn\'t said much of anything yet. Falling quiet, you hear the faint sound of music and realize she\'s being wearing earpods the whole time.');
            scene.text('With comical timing, Irina pulls them out when she finally notices you standing next to her. "What do you want?" she sneers.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A17'] >= 80) {
            scene.text('"I need to get my nails done, but I won\'t have time with all this stupid homework!" Irina whines with a pout.');
            scene.text('"I\'m sure Feofan or Petka would be more than happy to help you out," you gently remind her.');
            // TODO-QSP: dynamic text: A sly smile spreads across Irina's face. "You're totally right <<$pcs_nickname>>...
            scene.text(`A sly smile spreads across Irina's face. "You're totally right ${((s as any).pcs_nickname ?? 0)}! You know me so well."`);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
              scene.text('Irina listens to you talk with a tired and bored expression. "Oh god, I think I\'d rather talk to Lesco…" she yawns before brushing you off.');
            } else {
              scene.text('"That Ben Solo is <i>so</i> hot. I would let him do anything he wants with me… You think he\'s single?" Irina asks out loud.');
              scene.text('"I\'m more into Luke myself…" you reply while keeping your cool.');
              scene.text('"Who? You mean the old man who trained Rey?" she asks in surprise while mimicking a cock getting soft with her finger.');
              scene.text('"He was young and cute in the originals! You know, A New Hope, Empire Strikes Back?" you explain.');
              scene.text('"I don\'t watch old movies. They\'re… old," she shrugs.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A17'] >= 80) {
              scene.text('"You know that, I think it was in 9th grade, we girls had Lavrenti over because we wanted to borrow his camera for new shots for our social media and when he arrived, Bella suggested we kill the lights and see which one of us would dare get naked in front of him as a thank you. Of course, we were joking, so when the light were switched back on none of us were naked, but he had the biggest boner I\'d ever seen!" she giggles.');
              scene.text('"Wow, you girls really surprise me sometimes…" you reply with a hint of disappointment, hoping for something more juicy.');
              scene.text('"I know, right?!" She giggles while mimicking the size of Lavrenti\'s cock with her hands like a fisherman describing his catch.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
                scene.text('"Oh, it\'s you. The lowlife. I thought you would\'ve been in jail by now, but here you are! That must really be an accomplishment for you, right?" Irina says mockingly.');
                scene.text('"Keep running your mouth like that and I\'m gonna use that tongue of yours to clean my asshole!"');
                scene.text('"I was wondering where that horrible smell was coming from!" she says and continues to ridicule you.');
                // TODO-QSP: dynamic text: "Fuck you bitch, you're getting it now!" You storm towards her but a group of th...
                scene.text(`"Fuck you bitch, you're getting it now!" You storm towards her but a group of the jocks block you. "Stop causing a scene and get out of here, ${((s as any).pcs_nickname ?? 0)}!" Lazar says sternly.`);
              } else {
                scene.text('"Psst, you know where to get some, you know… green?" Irina whispers at you.');
                scene.text('"What, you think just because I\'m a gopnik I know every fucking drug dealer in town? Is that what you\'re saying?!" you angrily reply.');
                scene.text('"God no, of course not!" she says trying to explain herself.');
                scene.text('"There\'s a guy in front of the Five-Eight in the evening. Your pretty face and those nice lips might get you a discount, if you know what I mean…" you laugh.');
                // TODO-QSP: dynamic text: "Eeeww, gross! What's wrong with you?! Thanks anyway, <<$pcs_nickname>>." As you...
                scene.text(`"Eeeww, gross! What's wrong with you?! Thanks anyway, ${((s as any).pcs_nickname ?? 0)}." As you're parting ways, you give her an air gesture of a blowjob while holding an imaginary bag of weed in the other hand.`);
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A17'] >= 90) {
              scene.text('It\'s easy to please Irina since she likes to talk about herself. So long as you ask her about herself and don\'t interrupt her, she\'s more than happy to talk with you.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
                scene.text('"Hey Irina…" you try to inquire.');
                scene.text('"God, I can\'t have even five minutes to myself without some loser trying to talk to me!" she mumbles in an angry tone as she walks away.');
              } else {
                scene.text('"You don’t have any friends, do you?" Irina asks with a stern, unimpressed look. "And you won\'t ever find any either." She then turns around and ignores you.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterSonia(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'npc_relationship', 'modify', 'A25', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/beach_chat.jpg');
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
      scene.text('You walk over and take a seat on the sand next to Sonia and the two of you are soon talking about some of your recent nights out. It seems like Sonia really wants to just cut loose.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
        scene.text('You spend some time talking with Sonia, but she ends up focusing more on getting a tan and rarely responds to you, which is a bit disappointing, but at least she stuck around.');
      } else {
        scene.text('"What are you up to?" you ask as you watch Sonia laying back getting a tan.');
        scene.text('"Just trying to get a tan so I\'m not so white," she sighs as she looks over at you.');
        scene.text('You can\'t help but laugh and tease her a little. In the end, the two of you end up talking about how to get the best tan and how much guys like tanned girls.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 3) {
      if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
        scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
        scene.text('"What\'s up neeeeerd?" she asks with a giggle and you tell her you just wanted to hang out. With Sonia being so friendly, you slip into an easygoing banter with her for a while.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
          scene.text('You spend some time talking with Sonia, but she ends up focusing more on getting a tan and rarely responds to you, which is a bit disappointing, but at least she stuck around.');
        } else {
          scene.text('"Hey Sonia!" you greet her with a smile and gives you a friendly little wave.');
          // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>?" she asks and you tell her you just wanted to han...
          scene.text(`"What's up, ${((s as any).pcs_nickname ?? 0)}?" she asks and you tell her you just wanted to hang out. "Sure, I've got some time."`);
          scene.text('With Sonia being so friendly, you slip into an easygoing banter with her.');
        }
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A139'] >= 50) {
        scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
        scene.text('"What\'s up? Mind if I ask you some questions?" she asks and you shrug, causing her to launch into a barrage of questions about partying with your fellow gopniks. She seems very interested in what you and the other gopniks do for fun and you end up talking for a while, mostly sharing some of your favorite stories.');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
          scene.text('You spend some time talking with Sonia, but she ends up focusing more on getting a tan and rarely responds to you, which is a bit disappointing, but at least she stuck around.');
        } else {
          scene.text('"Hey Sonia!" you greet her with a smile and she gives you a friendly little wave.');
          // TODO-QSP: dynamic text: "What's up, <<$pcs_nickname>>?" she asks and you tell her you just wanted to han...
          scene.text(`"What's up, ${((s as any).pcs_nickname ?? 0)}?" she asks and you tell her you just wanted to hang out for a bit. "Sure, I've got some time."`);
          scene.text('With Sonia being so friendly, you slip into an easygoing banter with her for a while.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'beach_hangout':
      enterBeachHangout(s, scene);
      break;
    case 'jocks_list':
      enterJocksList(s, scene);
      break;
    case 'cool_list':
      enterCoolList(s, scene);
      break;
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
    case 'albina':
      enterAlbina(s, scene);
      break;
    case 'lina':
      enterLina(s, scene);
      break;
    case 'lariska':
      enterLariska(s, scene);
      break;
    case 'fedor':
      enterFedor(s, scene);
      break;
    case 'ivan':
      enterIvan(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'igor':
      enterIgor(s, scene);
      break;
    case 'katja':
      enterKatja(s, scene);
      break;
    case 'bella':
      enterBella(s, scene);
      break;
    case 'lizaveta':
      enterLizaveta(s, scene);
      break;
    case 'marcus':
      enterMarcus(s, scene);
      break;
    case 'Marcus_Katja_talk':
      enterMarcus_KatjaTalk(s, scene);
      break;
    case 'andrey':
      enterAndrey(s, scene);
      break;
    case 'mefodiy':
      enterMefodiy(s, scene);
      break;
    case 'vicky':
      enterVicky(s, scene);
      break;
    case 'stasya':
      enterStasya(s, scene);
      break;
    case 'inna':
      enterInna(s, scene);
      break;
    case 'sonia':
      enterSonia(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_beach_chat: LocationDef = {
  name: 'pav_beach_chat',
  title: 'Beach',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
