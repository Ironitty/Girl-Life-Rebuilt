import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'masseuse_break';
  (s as any).loc_arg = 'start';
  scene.img('images/locations/city/citycenter/mall/salon/work/break.jpg');
  if (((s as any).masseuse ?? 0)?.['break'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).salon = (s as any).salon ?? {})['work_minutes'] = ((s as any).salon['work_minutes'] ?? 0) + (15);
    ((s as any).masseuse = (s as any).masseuse ?? {})['break'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('You\'re taking a break.');
  // TODO-QSP: dynamic text: 'There''s a vending machine in the corner you can buy '+iif(func('money', 'can_a...
  scene.text('There\'s a vending machine in the corner you can buy ' + ((qspFunc(s, 'money', 'can_afford', 100, 'cash')) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027money/u0027, /u0027pay/u0027, String(window.__gameStore.getState().100 ?? /u0027/u0027)); return false;">snacks</a>') : ('snacks' + qspFunc(s, 'money', 'get_cost_string', 100, 'cash'))) + ' from and a fridge stocked with <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027beverage/u0027, /u0027water/u0027); return false;">bottled water</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027beverage/u0027, /u0027juice/u0027); return false;">juice</a> for masseuses to enjoy, as well as a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027beverage/u0027, /u0027coffee/u0027); return false;">coffee machine</a>.');
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    if (((s as any).masseuse ?? 0)?.['meet_lei'] === 0) {
      scene.text('The only other person in here right now is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027masseuse_break/u0027, /u0027lei_talk/u0027); return false;">a small asian girl</a> taking duck face selfies on her phone.');
    } else {
      scene.text('Looks like <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027masseuse_break/u0027, /u0027lei_talk/u0027); return false;">Lei</a> is also taking a break right now, taking duck face selfies on her phone again.');
    }
  } else {
    scene.text('No one else is here with you.');
  }
  if (((s as any).salon ?? 0)?.['work_minutes'] >= 235) {
    scene.actions([
      { label: 'Finish your shift', goto: ['masseuse_work', 'shift_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakOver(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/room.jpg');
  scene.text('You head back to your room and buzz Xian.');
  scene.text('"Hey, I\'m done taking my break."');
  scene.text('"Okay, I\'ll tell you when the next client has requested you."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for a client', goto: ['masseuse_work', 'begin'] },
  ]);
  scene.build();
}

function enterLeiTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['meet_lei'] === 1) {
    qspGoto(s, 'masseuse_break', 'lei_talk2');
  }
  ((s as any).masseuse = (s as any).masseuse ?? {})['meet_lei'] = 1;
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('You slide around the table to talk to the girl.');
  // TODO-QSP: dynamic text: "Hey, I don''t think we''ve met before," you say. "I''m <<$pcs_firstname>>."
  scene.text(`"Hey, I don't think we've met before," you say. "I'm ${((s as any).pcs_firstname ?? '')}."`);
  scene.text('She puts down her phone to look at you.');
  scene.text('"I\'m Lei." Despite her looks, she speaks Russian flawlessly without even hint of an accent.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Do you like working here?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"You like working here?" you ask, not sure what else to say.');
    scene.text('"I guess so," she replies. "Though it\'s not like I have a huge choice in the matter. Sort of a family business."');
    scene.text('"What?"');
    scene.text('"Yeah, my mom owns the place. Set up here a couple decades ago."');
    scene.actions([
      { label: '"Your mom set up a brothel?"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"Your mom set up a brothel??"');
    scene.text('"Well, yeah. How else was a divorced Chinese immigrant going to make money in St. Petersburg? I mean, sure, she started out as just an \'exotic masseuse\' but you know it goes. One thing leads to another, your hand ends up on some guys\'s cock, next thing you know you\'re jerking him off. Next time he sees you he wants a little more and soon enough the neighborhood knows where to go for exotic poon."');
    scene.text('Her story is interrupted when her phone suddenly starts beeping.');
    scene.text('"Welp, my break time is up. Gotta go back to work. See you around sometime." And with that she gets up and leaves.');
    scene.text('Looking at the clock, you realize maybe it\'s time for you to get back to work too and also stand up.');
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  } },
      { label: '"Wow, that\'s… entrepreneurial…"', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"Wow, that\'s very… entrepreneurial of her…"');
    scene.text('"Mhmm. Not a bad way to make some money as a divorced Chinese immigrant woman. She did start out as a regular masseuse to be fair, but turns out everybody\'s got that yellow fever and you can charge a lot more for fucking than you can for foreplay. When you\'ve got daughters to feed, you just do what it takes I guess."');
    scene.text('Her story is interrupted when her phone suddenly starts beeping.');
    scene.text('"Welp, my break time is up. Gotta go back to work. See you around sometime." And with that she gets up and leaves.');
    scene.text('Looking at the clock, you realize maybe it\'s time for you to get back to work too and also stand up.');
    scene.actions([
      { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLeiTalk2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('"Hey Lei, how\'s it going."');
  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>."
  scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}."`);
  scene.text('"Wanna hang?"');
  scene.text('"Sure."');
  scene.text('You start talking about stuff with her.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeiTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLeiTalk3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['lei_fun'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Do anything fun lately?', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your break', goto: ['masseuse_break', 'lei_talk_end'] },
    { label: 'Make small talk', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
    { label: 'Ask about her', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
    { label: 'Talk about her family', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
  ]);
  scene.build();
}

function enterLeiSmallTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  // TODO-QSP: :lei_talk_loop1
  ((s as any).masseuse = (s as any).masseuse ?? {})['lei_talk'] = (Math.floor(Math.random() * 6) + 1);
  if (((s as any).masseuse ?? 0)?.['lei_talk'] === 1) {
    if (((s as any).masseuse ?? 0)?.['lei_sisters'] < 1) {
      // TODO-QSP: jump 'lei_talk_loop1'
    }
    scene.text('"So you said you\'re a student at the university?"');
    scene.text('"Mhmm."');
    scene.text('"What are you studying?"');
    scene.text('"I\'m in the medical programme. I\'m gonna be a doctor."');
    scene.text('"Wow! That\'s ambitious."');
    scene.text('"Yeah, stereotypical too. Chinese girl studying to be a doctor. Classic right? Funniest part is that unlike the stereotype my mom isn\'t forcing me. I think she wouldn\'t mind if I worked as a whore for the rest of my life. She\'s seen firsthand how good the money is."');
  } else {
    if (((s as any).masseuse ?? 0)?.['lei_talk'] === 2) {
      if (((s as any).masseuse ?? 0)?.['lei_sisters'] >= 2) {
        if (((s as any).masseuse ?? 0)?.['lei_sisters'] < 3) {
          ((s as any).masseuse = (s as any).masseuse ?? {})['lei_sisters'] = 3;
        }
        scene.text('"You said your mom was an immigrant right?"');
        scene.text('"Yeah."');
        scene.text('"I have to say, your Russian is actually really good."');
        scene.text('"It\'s the only language I speak," Lei shrugs. "I\'m a natural born citizen."');
        scene.text('You hesitate. "Wait, you mean…"');
        scene.text('"Yup. I\'m half Russian, half Chinese. The product of a prostitute who failed to use birth control. My next four oldest sisters --well, half sisters I guess-- were conceived that way too. The rest were all born in China and came here with mom. That\'s why Xian has an accent and I don\'t."');
        scene.text('If Lei is bothered by the fact that she\'s a bastard daughter of a whore, she doesn\'t show it. She talks about her conception and half sisters very casually.');
      } else {
        // TODO-QSP: jump 'lei_talk_loop1'
      }
    } else {
      if (((s as any).masseuse ?? 0)?.['lei_talk'] === 3) {
        if (((s as any).masseuse ?? 0)?.['lei_peek'] === 1) {
          scene.text('"By the way, I couldn\'t help but notice, you\'re very… loud when you\'re with customers. Do you really enjoy it that much?"');
          scene.text('"Nah, not really. Only the guys who work here are good enough to send me into a frenzy like that for reals. But mom makes us pay for them too. No freebies. Anyways, I just do it because I figure the clients love it. Men are shallow creatures. And having a little girl like me screaming how big their average-sized cock is really boosts their ego. Makes them more likely to leave a tip, or at least come back again later."');
        } else {
          // TODO-QSP: jump 'lei_talk_loop1'
        }
      } else {
        if (((s as any).masseuse ?? 0)?.['lei_talk'] === 4) {
          scene.text('"Do you prefer lace or cotton underwear?" Lei asks you. "I can never decide. Lace is a lot sexier but cotton is just way more comfortable."');
        } else {
          if (((s as any).masseuse ?? 0)?.['lei_talk'] === 5) {
            scene.text('"The policy here is to always clean up after servicing a customer, but honestly you don\'t need to do it if they cum inside. Vaginas are weird, after you wipe you\'re still full of spunk anyways. God knows, sometimes I\'ll be in class hours after a shift and just feel something <i>gush</i> out into my panties. And it\'s definitely not the normal discharge."');
          } else {
            if (((s as any).masseuse ?? 0)?.['lei_talk'] === 6) {
              scene.text('"I just wish mom would let us keep water bottles in the rooms. I get so dehydrated waiting for the one break, but if I drink too much then I have to pee in the middle of a session. Some guys are into that but I sure as fuck am not."');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeiFunTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('"Do anything fun lately?" you ask conversationally.');
  // TODO-QSP: :lei_talk_loop2
  ((s as any).masseuse = (s as any).masseuse ?? {})['lei_fun'] = ((s as any).daystart ?? 0);
  ((s as any).masseuse = (s as any).masseuse ?? {})['lei_talk'] = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).masseuse ?? 0)?.['lei_talk'] === 1) {
    scene.text('"I went to that fair in the park with some friends the other day."');
    scene.text('"That sounds nice. How was it?"');
    if (((s as any).month ?? 0) <= 2  ||  ((s as any).month ?? 0) >= 11) {
      scene.text('"It\'s alright. They got a few games and lemonade and stuff. Still, too damn cold for that shit right now. Probably better in the summer."');
    } else {
      scene.text('"It\'s alright. They got a few games and lemonade and stuff."');
    }
  } else {
    if (((s as any).masseuse ?? 0)?.['lei_talk'] === 2) {
      scene.text('Lei looks up at the ceiling, tapping her phone against her chin while she thinks.');
      scene.text('"Well, there was that one guy…" she mutters. "Tch, but he turned into the clingy type afterward so that really wasn\'t great."');
      scene.text('"Eh, not really I guess," she shrugs before turning back to her phone and scrolling through her feed.');
    } else {
      if (((s as any).masseuse ?? 0)?.['lei_talk'] === 3) {
        scene.text('"Went to a party last weekend, that was pretty cool."');
        scene.text('"Oh yeah?"');
        scene.text('"Yeah. Someone brought some blow so it was hype as fuck. Well, I thought it was." She stops to think for a moment. "Actually… I\'m just realizing now that I don\'t remember much of it. I remember having a lot of sex… and… waking up in my socks…? Damn." She shakes her head as if waking up.');
        scene.text('"They\'re right, cocaine <i>is</i> one helluva drug. I gotta stop doing that."');
      } else {
        if (((s as any).masseuse ?? 0)?.['lei_talk'] === 4) {
          scene.text('"Do anything fun lately?"');
          scene.text('"Nah, I\'ve been studying all week. Got a big test coming up."');
        } else {
          if (((s as any).masseuse ?? 0)?.['lei_talk'] === 5) {
            if (((s as any).month ?? 0) >= 10  ||  ((s as any).month ?? 0) <= 3) {
              // TODO-QSP: jump 'lei_talk_loop2'
            }
            scene.text('"Went to the beach with some friends last weekend. That was pretty cool."');
            scene.text('"Wow! Where\'d you go? Out of town?"');
            scene.text('"There\'s a lake about a 40 minute walk from the residential area. Can be hard to find if you don\'t know where you\'re going.');
            scene.text('"Oh! I had no idea."');
            scene.text('"Yeah, like I said, hard to find. There\'s a cordoned off section for a nudist beach too. My friends dared me to strip down on it. I got naked and dared them right back! The guys looked pretty uncomfortable with their dongs hanging out," she smirks. "But it turned into a good time for everybody. Played a pickup game of beach volleyball afterwards."');
          } else {
            if (((s as any).masseuse ?? 0)?.['lei_talk'] === 6) {
              scene.text('"Splurged on a bit of shopping the other day. Found a cute outfit for myself. That reminds me, I heard about this place called Coco Carmen the other day. It\'s outside the city in some small town Pavlov or something like that. Supposed to have some pretty nice stuff."');
            } else {
              if (((s as any).masseuse ?? 0)?.['lei_talk'] === 7) {
                scene.text('"Yeah. Last night."');
                scene.text('"And…?"');
                scene.text('"Shhh. I\'m still hungover."');
              }
            }
          }
        }
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeiTalk3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLeiTalkSelf(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['lei_sisters'] >= 3) {
    scene.actions([
      { label: '"Would you ever want to keep working here?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"Would you ever want to keep working her? Like Xian?"');
    scene.text('"No way!" she says, wrinkling her nose in disgust. "Don\'t get me wrong, I don\'t mind working here now, but that\'s just because it helps fund what I\'ve going on. As soon as I\'m done with uni, I\'m getting out of here. Maybe move to Moscow. I hear it\'s nice there."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkSelf(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
    { label: 'How do you feel about working as a whore?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"You never really answered my question. Do you like working here? How do you feel about being a whore?"');
    scene.text('"Ehh, I don\'t really mind," she says nonchalantly. "The sex is hit or miss, but when it\'s good it\'s nice. Not a bad way to make money, especially if you do some stripping on the side. I guess I don\'t really care one way or the other. But it beats waiting tables."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkSelf(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'What do you use the money for?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"What do you do with the money you make here?"');
    scene.text('"Mostly it just goes to paying for uni. But it does also allow me to have a few extra luxuries here and there. Sexy clothes, drinks at the club, some nice shoes every once in a while. But I don\'t splurge often. I put it in my savings when I can. I know I can\'t keep fucking guys here forever."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkSelf(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'What do you do for fun?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"What do you do for fun??"');
    scene.text('"Oh, the usual. Go to the movies, go shopping, hang out at parties, have drunken wild monkey sex with a classmate or two, browse Twatter, all that. The usual hobbies for girls my age."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkSelf(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'What\'s your sex life like?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"What\'s your sex life like?"');
    scene.text('"I assume you mean outside of work," she says with a twist of her mouth. "Ironically, it\'s actually pretty similar. Mostly just a string of one night stands and group sex at parties, though I do have a fuckbuddy or two who I occasionally booty call. No boyfriend or girlfriend or anything like that, I\'m just not interested in anything serious right now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkSelf(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterLeiTalkFamily(s: GameState, scene: SceneBuilder): void {
  if (((s as any).masseuse ?? 0)?.['lei_sisters'] >= 1) {
    scene.actions([
      { label: 'Sisters?', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['lei_sisters'] < 2) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['lei_sisters'] = 2;
    }
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"You mentioned something about your sisters working here?"');
    scene.text('"Yup. Back when mom started the place, she couldn\'t afford to hire other employees so she got my oldest sister to help. Being the responsible eldest daughter that she was, she didn\'t hesitate to start fucking guys and giving happy end massages to help put food on the table. And then business started booming so my second oldest sister started working and then the third, and you get the point. I think somewhere in the middle of us is where we started doing it for personal money rather than just \'for the family.\'"');
    scene.text('"Wow. So you weren\'t kidding that it was a family business."');
    scene.text('"Mhmm. You\'ve met one of my sisters actually."');
    scene.text('"Really?');
    scene.text('"Xian, at the front desk. She\'s my seventh oldest sister. Used to be a whore here and was pretty popular with the boys if I remember it, but she\'s got good people skills so she stepped up to be a manager after a while. It was her idea to start diversifying and bringing in local girls like you join the ranks. Also her idea to start allowing part timers and getting male whores for female customers. That last one apparently doubled the store\'s profits. This city is really sex crazed for some reason."');
    scene.text('"How many sisters do you have?"');
    scene.text('"Fourteen. I\'m the youngest."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkFamily(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).masseuse ?? 0)?.['lei_sisters'] >= 3) {
    scene.actions([
      { label: 'You only have sisters?', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"So you have all sisters? No brothers?"');
    scene.text('"Nope! Not even a single one. Just one of those things I guess huh? There\'s some kind of science behind it apparently, like if your first two kids are girls then you\'re more likely to have all girls. Same with boys. But if it\'s one and then the other, it\'s equal chance from there on out. Learned about it in class. Weird stuff."');
    scene.text('"Ever wish you had a brother?"');
    scene.text('"Not really. I\'m fine having all girls around the house, though I\'m glad it\'s less crowded since another few moved out. I do have some nieces and nephews I get to see now and then though."');
    scene.text('"Oh! Some of your sisters are married?"');
    scene.text('Lei bites her lip for a second, as if considering what she\'s going to say.');
    scene.text('"Some… but most of my extended relatives are…" She gestures towards herself. You look at her in confusion, not sure that you understand before it suddenly clicks.');
    scene.text('"Oh. Like…"');
    scene.text('"Yeah," she says, giving you a confirmational wink. "My eldest sisters weren\'t very good with birth control either. Me? I\'m not taking any chances. I get the shot every 3 months. Last thing I want is some random kid messing up my enjoyable student life just because I got drunk one night and forgot to take some stupid pill."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkFamily(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Talk about something else', handler: (st: GameState) => {
    qspCall(st, 'masseuse_break', '');
  } },
    { label: 'Family business?', handler: (st: GameState) => {
    if (((st as any).masseuse ?? 0)?.['lei_sisters'] < 1) {
      ((st as any).masseuse = (st as any).masseuse ?? {})['lei_sisters'] = 1;
    }
    scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
    scene.text('"So, you said this was a family business?"');
    scene.text('"Yeah. Mom started it but now she kind of just ascended into \'the madam\' these days. So hiring the laundry services, keeping the lights on, paying off the cops, all that stuff. She leaves the day to day to the managers. The place became a sort of rite of passage for me and my sisters though cause mom doesn\'t give handouts. We all started working here to get some pocket money once we were old enough and then some of us move on whenever we\'re ready. Not any time soon for me though. I need to pay through uni."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeiTalkFamily(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterLeiTalkEnd(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/salon/work/lei/face.jpg');
  scene.text('"Welp," you say, standing up. "It\'s probably about time I got back to work now."');
  scene.text('"Yeah, me too," she says, joining you. "See you around sometime."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to work', goto: ['masseuse_break', 'break_over'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'break_over':
      enterBreakOver(s, scene);
      break;
    case 'lei_talk':
      enterLeiTalk(s, scene);
      break;
    case 'lei_talk2':
      enterLeiTalk2(s, scene);
      break;
    case 'lei_talk3':
      enterLeiTalk3(s, scene);
      break;
    case 'lei_small_talk':
      enterLeiSmallTalk(s, scene);
      break;
    case 'lei_fun_talk':
      enterLeiFunTalk(s, scene);
      break;
    case 'lei_talk_self':
      enterLeiTalkSelf(s, scene);
      break;
    case 'lei_talk_family':
      enterLeiTalkFamily(s, scene);
      break;
    case 'lei_talk_end':
      enterLeiTalkEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const masseuse_break: LocationDef = {
  name: 'masseuse_break',
  title: 'You\'re taking a break.',
  region: 'other',
  enter: enter,
};
