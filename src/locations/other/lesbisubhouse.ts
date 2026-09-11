import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).lesbiday = ((s as any).day ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).mistsexshop ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).slavejobday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.img('images/characters/city/natalya/doorlock.jpg');
    scene.text('You ring the bell, but no one answers. You then remember that your slave is probably working in the sex shop\'s basement right now.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } else {
    if (((s as any).mistsexshop ?? 0) === 0  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 22  &&  ((s as any).lesbiday ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).slavejobday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).slavejoballexp ?? 0) >= 50) {
      scene.img('images/characters/city/natalya/doorlock.jpg');
      scene.text('You ring the bell, but no one answers. It seems like nobody\'s home, so where could your slave be?');
      scene.actions([
        { label: 'Leave', goto: ['city_residential', ''] },
      ]);
    } else {
      if (((s as any).mistsexshop ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 23) {
        scene.img('images/characters/city/natalya/doorlock.jpg');
        scene.text('You ring the bell, but no one answers. You then remember that your slave is probably whoring herself out near the highway right now.');
        scene.actions([
          { label: 'Leave', goto: ['city_residential', ''] },
        ]);
      } else {
        if (((s as any).mistendbound ?? 0) > 50  &&  (!(Math.floor(Math.random() * 4) + 0))) {
          scene.img('images/characters/city/natalya/sex/dom26.jpg');
          scene.text('You ring the bell. Nobody answers, but you can definitely hear somebody inside. You try the handle and to your surprise, the door isn\'t locked. You\'ve barely crossed the threshold when you see your slave sitting on a chair. She seems to have bound herself in anticipation of your arrival. You help her off the chair and bend her over…');
          scene.actions([
            { label: 'Continue', goto: ['lesbisubhouse', 'bound'] },
          ]);
        } else {
          if (((s as any).mistendspank ?? 0) > 50) {
            scene.img('images/characters/city/natalya/sex/dom25.jpg');
            scene.text('You ring the bell and the door swings open a few seconds later. You\'re greeted by your slave kneeling in front of you, a whip in her mouth and her eyes as big as a puppy\'s: She\'s practically begging you to punish her.');
            scene.actions([
              { label: 'Enter the apartment', goto: ['lesbisubhouse', 'events'] },
            ]);
          } else {
            if (((s as any).hour ?? 0) >= 8) {
              scene.img('images/characters/city/natalya/dooropen.jpg');
              scene.text('You ring the bell and within seconds, the door opens.');
            } else {
              scene.img('images/characters/city/natalya/dooropen1.jpg');
              scene.text('You ring the bell. Once. Twice. Thrice. After a minute or so, your slave opens the door, mumbling curses under her breath and rubbing the sleep out of her eyes. Once she sees that it\'s you, she immediately falls silent and steps aside to let you in.');
            }
            scene.actions([
              { label: 'Enter the apartment', goto: ['lesbisubhouse', 'events'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lesbiQW ?? 0) === 2) {
    qspCall(s, 'arousal', 'erotic', 5, 'dom', 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/Dom.jpg');
    scene.text('To your surprise, Natalya stands before you only in a negligee and a pair of panties that reveal her supple yet toned body. Although you can\'t tell from her carefully schooled features, her excitement is evident from the trembling of her lower lip and the unmistakable wet spot on her panties.');
    scene.actions([
      { label: 'Check how submissive she is', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    (s as any).lesbiQW = 3;
    scene.img('images/characters/city/natalya/sex/dom2.jpg');
    scene.text('You understand that, to be accepted by her as her Mistress, you have to act with absolute authority and certainty. Without a second thought, you order her to get down on all fours and present her ass for "inspection".');
    scene.text('Natalya, after a moment\'s hesitation, obediently drops to her knees in front of you, then turns around and spreads her asscheeks for you, awaiting further instructions. You take your time, examining all of her charms and feeling pleased with yourself. As tempting as it is to continue, you know better than to push your luck. Therefore, you end the inspection with a slap on her ass and, without a word, leave.');
    qspCall(s, 'arousal', 'erotic_nudity', 15, 'dom', 'lesbian', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Enough for now', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).lesbiQW ?? 0) === 3) {
      scene.actions([{ label: 'Continue', goto: ['lesbisubhouse', 'event2'] }]);
    } else {
      if (((s as any).lesbiQW ?? 0) === 4) {
        scene.actions([{ label: 'Continue', goto: ['lesbisubhouse', 'event3'] }]);
      } else {
        if (((s as any).lesbiQW ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['lesbisubhouse', 'event4'] }]);
        }
      }
    }
  }
  scene.build();
}

function enterEvent2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/Dom.jpg');
  scene.text('"Oh, please enter," she happily says and lets you inside. "I\'ve been waiting for you and-" She stops, remembering what her role is, and looks down obediently.');
  scene.actions([
    { label: 'Go to the kitchen', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 5, 'dom', 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom3.jpg');
    scene.text('Without saying a word, you walk into the kitchen, sit on a chair and unceremoniously order her to pose for you and stick out her ass. Natalya timidly follows your order and within seconds, you are admiring her lean ass.');
    scene.actions([
      { label: 'Order her to take off her panties', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 20, 'dom', 'lesbian', 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom4.jpg');
    scene.text('The thin fabric of her underwear spoils things, so you order her to remove them. Natalya immediately moves her hands to her hips and takes them off. You nod approvingly and tell her to return to her previous position, which she does without hesitation. Satisfied, you have her come closer to you and begin explaining several things to her: Who she is now, what her place is and how she should behave in your presence. She listens in obedient silence and you decide to check if she has internalized what you just told her.');
    scene.actions([
      { label: 'Test her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom4.jpg');
    scene.text('"Who are you?" you ask.');
    scene.text('"I… I\'m a slave, Mistress." Her voice is soft, but when she meets your eyes, she clears her throat and speaks louder. "I am your humble slave!"');
    scene.text('"What\'s your name?"');
    scene.text('"I have no name… I…" This one seemed to take a little more out of her. "I\'m just a slave…"');
    scene.text('"Why do you live?"');
    scene.text('"I live to serve you, Mistress!"');
    scene.text('"Is there anything you desire?"');
    scene.text('"No, Mistress! Slaves don\'t desire anything! The only wishes I know are yours, Mistress."');
    scene.text('"Excellent. Very good." you praise your living toy. "Tell me: Do you have any preferences when it comes to sex?"');
    scene.text('"No, Mistress. I\'ll be happy to do anything you tell me."');
    scene.text('"And if I decide to stretch your holes, to the point where they hurt, really hurt, would you still happily follow my commands?"');
    scene.text('"Yes, Mistress. Even if I hurt or are uncomfortable, I know that I\'m pleasing you by enduring it, so I\'ll be glad to serve you!"');
    scene.text('"Glad, you say…" You grin. "We\'ll see about that. Your answers have pleased me so far. Bring me the strapon. I think you\'ve earned a good, hard fuck."');
    scene.text('Your new slave nods and immediately rushes out. About a minute later, she returns, strapon in hand with an eager look on her face.');
    scene.actions([
      { label: 'Fuck your slave', handler: (st: GameState) => {
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    (s as any).lesbiQW = 4;
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom5.jpg');
    scene.text('You put on the strapon and, paying absolutely no attention to any discomfort she might suffer, drive it straight into her pussy and start fucking her. Even though the dick isn\'t actually yours, fucking with this strapon is pleasureable due to how the strap stimulates your clitoris.');
    scene.text('The thrill of practically owning this woman and being free to do whatever you want to her is almost physically palpable. Soon, you are so entranced by your own pleasure that you don\'t even hear your slave\'s moans anymore and a powerful orgasm shakes you like a leaf in the wind. When you regain your senses, you notice how exhausted your slave looks. Judging by her demeanor and copious juices covering your strapon, she came long before you.');
    qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'lesbian', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/Dom.jpg');
  scene.text('"Mistress! I\'ve been waiting for you," your slave greets you.');
  scene.text('"As you should," you respond with an enigmatic smile as you enter. "Last time, I explored your pussy, so this time I want to become better acquainted with your ass. Bend over for me, slave. Show me what you have to offer!"');
  scene.text('"Yes, Mistress. Please watch."');
  scene.actions([
    { label: 'Watch', handler: (st: GameState) => {
    (s as any).lesbiQW = 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom6.jpg');
    scene.text('Your slave pulls down her panties, turns away from you and bends over. She even spreads her asscheeks apart, giving you a better look at her anus, which looks anything but virginal.');
    scene.text('"Good," you comment, leaving it open to whether you\'re referring to her obedience or her ass. "Tell me, slave: Do you play with your ass?"');
    scene.text('"Yes, Mistress. Sometimes, I play with it."');
    scene.text('"And I suppose you\'ve also had some lucky guy pop your anal cherry, correct?"');
    scene.text('"Umm… No, Mistress. I\'ve never let anyone touch me back there."');
    scene.text('"Why?" you ask, genuinely curious.');
    scene.text('"I… didn\'t want to," she begins her explanation lamely. "I am willing to explore it with you, Mistress, but… Well… I mean, I am your humble slave now, but before that, I was like you… I loved to dominate, both men and women, and I didn\'t feel comfortable letting any of them take my ass. But all that is in the past. I like to obey you; you are a stronger, better Mistress than I ever was!"');
    scene.text('"So why does your ass look like it\'s been used quite often?"');
    scene.text('"Um…" she stammers. "I… I like to play with it myself… Like I said, I don\'t let anyone touch me back there and-');
    scene.text('"Touch you where?" you interrupt her mid-sentence, sensing her discomfort.');
    scene.text('"My ass. Even though I like it, I don\'t let anybody near it. It seemed like a weakness to me and I considered myself to be strong. But… I was weak because I played with my ass very often."');
    scene.text('"Well that much is obvious." You nod your head, pondering how you want to continue. "Alright, my lustful slut…"');
    qspCall(s, 'arousal', 'foreplay', 5, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her fuck herself in the ass', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 20, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom7.jpg');
    scene.text('You tell your slave to fuck herself in the ass with a dildo and she nods enthusiastically before running out of the room. A minute later, she returns, a rubber cock in hand, and turns away from you so you can see what she does next.');
    scene.text('She sucks on the dildo\'s tip while she rubs her backdoor, lubricating both, then slowly bends over a little more and, with surprising ease, inserts the dildo into her ass, almost all the way in one thrust. Her pace is slow at first, but only a few minutes later, your slave is furiously fucking herself in the ass, sometimes giving you submissive glances and even louder moans - her explanation couldn\'t possibly convey how big a buttslut she truly is!');
    scene.text('About fifteen minutes later, she moans and convulses even harder than before and drives the dildo into her ass one final, powerful time. It looks like she just came from anal masturbation.');
    scene.actions([
      { label: 'It\'s your turn to cum now', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom8.jpg');
    scene.text('Hot and bothered by her show, you sit on the sofa and order your slave to bring you to orgasm. Pulling out the toy out of her ass, she quickly crawls over to you. You lower yourself slightly and immediately feel her tongue going to work on your pussy. It feels like only seconds pass before you reach your own powerful climax.');
    qspCall(s, 'arousal', 'cuni', 15, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her in the ass', goto: ['lesbisubhouse', 'event3_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'anal_strap_give', 15, 'dom', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/dom9.jpg');
  scene.text('You order your slave to bring you the strapon, which she does with unquestioning eagerness. Once it\'s fastened to your hips, you push onto her back and penetrate her ass.');
  scene.text('Despite very little preparation, you encounter almost no resistance due to the strap being lubed already.');
  scene.text('"So you were hoping I would fuck your ass all along, slave?"');
  scene.text('"A good slave is always prepared Mistress." She counters');
  scene.text('You spank her butt and increase your pace, if she is going to get ass fucked it will be rough and forceful.');
  scene.text('A few minutes pass before you notice that she\'s muttering something under her breath.');
  scene.actions([
    { label: 'Listen', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'anal_strap_give', 15, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom10.jpg');
    scene.text('You try to make out what she\'s muttering, but she\'s too quiet to make it out over the sound of you raping her ass, so you decide to ignore it and enjoy the moment.');
    scene.text('"This is for you slave so you will do the work," You say as you lift her up, spin around and sit yourself down with her now riding you reverse cowgirl.');
    scene.text('Your slave takes the initiative and pulls herself up until the dildo is almost all the way out before slamming back down. You relax and close your eyes.');
    scene.text('"Yes!" your slave moans all of a sudden, much louder than her previous mutterings. "Yes… Mistress… Fuck my ass, Mistress! Fuck me, treat me like a whore! Shove your dick into my filthy asshole, Mistress! Oh Mistress… Yes… My ass… Into my ass… Mmm…"');
    scene.text('You feel your jaw drop, completely blindsided by this turn of events, and you listen to her for a while, a seemingly infinite supply of obscenities at her disposal as she furiously fucks herself on your strapon.');
    scene.actions([
      { label: 'Forbid her from talking', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom10.jpg');
    scene.text('"Shut your mouth and never speak like that again! Do you understand me, slave?!" you ask imperiously.');
    scene.text('Her voice is compliant. "Yes… I\'m sorry, Mistress. I don\'t know what came over me. I won\'t do that again."');
    scene.text('You continue fucking for quite a while, trying to reach an orgasm, but her talking and your annoyance about it has robbed you of most of your excitement.');
    qspCall(s, 'arousal', 'anal_strap_give', 15, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Punish your slave', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom11.jpg');
    scene.text('You order her to get in position for a whipping and spend the next half hour taking out your frustration on her ass. Blow by blow, her moans first turn plaintive, then turn into louder and louder yelps that fill the apartment, tears soon wetting her face. At the end of it, you\'re positive that you\'ve made your point.');
    qspCall(s, 'arousal', 'foreplay', 30, 'dom', 'lesbian', 'maso');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Try to ignore it', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    (s as any).mistskold = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom10.jpg');
    scene.text('You decide to let her continue as she pumps your strap harder and hard desperate to reach her peak.');
    scene.text('You give her butt a few slaps to help her on her way as she screams: "Oh God! Fuck... I\'m so close... I fucking love you Mistress! I\'m cumming,,, Fuck! I\'m cumming!"');
    scene.text('Finally she sinks down on the strapon, spent. Her whole body quivering as she comes down from her violent anal orgasm on your lap.');
    qspCall(s, 'arousal', 'anal_strap_give', 10, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['lesbisubhouse', 'BDSM_unlock'] }]);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).mistressspank ?? 0) === ((s as any).daystart ?? 0)) {
    scene.img('images/characters/city/natalya/sex/dom27.jpg');
  } else {
    if (((s as any).mistendspank ?? 0) > 50) {
      scene.img('images/characters/city/natalya/sex/dom25.jpg');
    } else {
      scene.img('images/characters/city/natalya/sex/dom12.jpg');
      scene.text('"How may I serve you? Mistress." Your slave asks.');
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 90) {
    scene.actions([
      { label: 'Get on all fours so she can fuck you', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom40.jpg');
    scene.text('Without a word, you strip and get on all fours in front of your surprised slave.');
    scene.text('"Mistress?" she asks hesitantly. "Do you want to… Uhh…" She can\'t even finish the sentence, you will have to take control.');
    qspCall(s, 'arousal', 'foreplay', 5, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Fuck me, slave', goto: ['lesbisubhouse', 'get_fucked'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistressspank ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Whip her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    qspCall(s, 'sweat', 'add', 10);
    (s as any).mistressspank = ((s as any).daystart ?? 0);
    if (((s as any).mistendbound ?? 0) <= 50) {
      (s as any).mistendspank = ((s as any).mistendspank ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom24.jpg');
    scene.text('You order your slave to get ready for whipping. You notice just the slightest of winces before she lies on her back, legs spread and knees raised to give you easy access.');
    scene.text('You whip her hard from different angles leaving red marks and welts, her squeals answer your every blow. Some of pain and some of arousal.');
    qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'maso', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_energy ?? 0) < 20) {
    scene.actions([
      { label: 'Have her prepare a meal for you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    if (((s as any).mistanalfist ?? 0) >= 25  &&  (!(Math.floor(Math.random() * 10) + 0))) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 30);
      scene.img('images/characters/city/natalya/sex/dom391.jpg');
      scene.text('You go to the kitchen and tell your slave that she should cook for you. She obediently follows you and gets to work while you lazily flip through a fashion magazine. You occasionally glance up and catch your slave longingly staring at a cucumber she took out of the fridge.');
      scene.text('You get up, give her a lascivious smile as you grab the cucumber and quickly shove it into her ass, her moans lustful and grateful. She continues preparing the food, but rather than staring at the beauties in the glossy fashion magazine, you watch as your slutty slave tries to keep the green vegetable inside her ass.');
    } else {
      scene.img('images/characters/city/natalya/sex/dom39.jpg');
      scene.text('You go to the kitchen and tell your slave that she should cook for you. She obediently follows you and gets to work while you lazily flip through a fashion magazine.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Dig in', goto: ['lesbisubhouse', 'cook'] },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_sweat ?? 0) >= 40) {
    scene.actions([
      { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom32.jpg');
    scene.text('You tell your slave that you want to clean yourself and she obediently nods, "Should your slave accompany you Mistress?" She asks.');
    scene.actions([
      { label: 'Go by yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom41.jpg');
    scene.text('You go into the bathroom alone and get into the shower. You quickly lather your body, wash off the soap and dry yourself off with one of your slave\'s towels.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Return to the living room', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
      { label: 'Take your slave with you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom42.jpg');
    scene.text('Your slave accompanies you and prepares the shower for you, making sure the water temperature is to your liking. She gets into the shower with you and lathers your body, then proceeds to carefully clean and massage you with a washcloth.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    if (((s as any).pcs_horny ?? 0) >= 90  &&  ((s as any).mistbath ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Have her lick your pussy', handler: (st: GameState) => {
    (s as any).mistbath = ((s as any).daystart ?? 0);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom43.jpg');
    scene.text('You can\'t stand your horniness any longer. You put a hand on your slave\'s head and push her down. She immediately understands what you want and squats down. You close your eyes as you feel her warm tongue stroke your clit and dip into your pussy. Your subsequent orgasm is so powerful you have to hold on to your slave to keep yourself from falling.');
    qspCall(s, 'arousal', 'cuni', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the living room', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Return to the living room', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if ((!((s as any).mistsexshop ?? 0))) {
    scene.actions([
      { label: 'Order your slave to work in the sex shop booths', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mistsexshop = 1;
    if ((!((s as any).slavejobQW ?? 0))) {
      (s as any).slavejobdayexp = ((s as any).daystart ?? 0);
      (s as any).slavejobQW = 1;
    }
    (s as any).slavepay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    scene.text('"From now on, you will work in the basement of the sex shop," you command. "You will go there every day and suck off anybody who sticks his cock through those gloryholes. You will bring me all the money you make doing that."');
    scene.text('"Thank you Mistress. I will suck every cock in this city if it will please you."');
    scene.actions([
      { label: 'Continue', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistsexshop ?? 0) === 0  &&  ((s as any).slavejoballexp ?? 0) >= 30) {
    scene.actions([
      { label: 'Order your slave to prostitute herself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mistsexshop = 2;
    if ((!((s as any).slavejobQW ?? 0))) {
      (s as any).slavejobdayexp = ((s as any).daystart ?? 0);
      (s as any).slavejobQW = 1;
    }
    (s as any).slavepay = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    scene.text('"I want you to go to the highway near the park and sell your body like all the other whores there. You will bring me any money you make with your filthy body. Understood?"');
    scene.text('She nods, "Thank you for this task Mistress. I will not let you down."');
    scene.actions([
      { label: 'Continue', goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistsexshop ?? 0) === 1  &&  ((s as any).slavepay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take the money your slave has earned', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cocsuckedonday = Math.floor(Math.random() * 3) + 1;
    (s as any).cocsuckedonday = ((s as any).cocsuckedonday ?? 0) * (((s as any).daystart ?? 0) - ((s as any).slavepay ?? 0));
    // TODO-QSP: gs 'money', 'earn', 300 * cocsuckedonday
    (s as any).slavejoballexp = ((s as any).slavejoballexp ?? 0) + (((s as any).daystart ?? 0) - ((s as any).slavejobdayexp ?? 0));
    (s as any).slavejobQW = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    // TODO-QSP: dynamic text: Your slave has earned <<$func('money', 'string_profit', 300*cocsuckedonday)>> fo...
    scene.text(`Your slave has earned ${qspFunc(s, 'money', 'string_profit', 300*((s as any).cocsuckedonday ?? 0))} for you at the gloryholes.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).slavepay = ((st as any).daystart ?? 0);
  }, goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistsexshop ?? 0) === 2  &&  ((s as any).slavepay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Take earned money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).cocsuckedonday = Math.floor(Math.random() * 3) + 1;
    (s as any).cocsuckedonday = ((s as any).cocsuckedonday ?? 0) * (((s as any).daystart ?? 0) - ((s as any).slavepay ?? 0));
    // TODO-QSP: gs 'money', 'earn', 900 * cocsuckedonday
    (s as any).slavejoballexp = ((s as any).slavejoballexp ?? 0) + (((s as any).daystart ?? 0) - ((s as any).slavejobdayexp ?? 0));
    (s as any).slavejobQW = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    // TODO-QSP: dynamic text: Your slave has earned <<$func('money', 'string_profit', 900*cocsuckedonday)>> fo...
    scene.text(`Your slave has earned ${qspFunc(s, 'money', 'string_profit', 900*((s as any).cocsuckedonday ?? 0))} for you while whoring herself out.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).slavepay = ((st as any).daystart ?? 0);
  }, goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistsexshop ?? 0) === 1) {
    scene.actions([
      { label: 'Tell your slave to stop working the gloryhole at the sex shop', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mistsexshop = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    scene.text('You command your slave to no longer work in the sex shop\'s basement. She nods her head with downcast eyes.');
    scene.text('"It has been this slave\'s honour to use my worthless mouth sucking all those cocks for you."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).slavepay = ((st as any).daystart ?? 0);
  }, goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistsexshop ?? 0) === 2) {
    scene.actions([
      { label: 'Tell your slave to stop prostituting herself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).mistsexshop = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom12.jpg');
    scene.text('You command your slave to no longer prostitute herself. She nods her head with downcast eyes.');
    scene.text('"Thank you Mistress for letting me use my worthless holes to make you money."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).slavepay = ((st as any).daystart ?? 0);
  }, goto: ['lesbisubhouse', 'event4'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mistpiss ?? 0) >= 20) {
    scene.actions([
      { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  }
  scene.actions([
    { label: 'Bind her', handler: (st: GameState) => {
    if (((s as any).mistendspank ?? 0) <= 50) {
      (s as any).mistendbound = ((s as any).mistendbound ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom16.jpg');
    scene.text('You order your slave to bring you some rope. She quickly returns with several lengths of suitable ropes in various colours.');
    scene.text('You take your time binding her tightly. Your hands lingering on her most sensitive parts.');
    qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'bound', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['lesbisubhouse', 'bound'] },
    ]);
  } },
    { label: 'Position her for sex', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).mistressfist ?? 0) === 1  ||  ((s as any).mistressfist ?? 0) === 4) {
      scene.img('images/characters/city/natalya/sex/dom19vagina.jpg');
    } else {
      if (((s as any).mistressfist ?? 0) === 2  ||  ((s as any).mistressfist ?? 0) === 5) {
        scene.img('images/characters/city/natalya/sex/dom19anus.jpg');
      } else {
        if (((s as any).mistressfist ?? 0) === 3) {
          scene.img('images/characters/city/natalya/sex/dom19both.jpg');
        } else {
          if (((s as any).mistanalfist ?? 0) < 25) {
            scene.img('images/characters/city/natalya/sex/dom19.jpg');
          } else {
            if (((s as any).mistanalfist ?? 0) >= 25  &&  ((s as any).mistanalfist ?? 0) < 50) {
              scene.img('images/characters/city/natalya/sex/dom191.jpg');
            } else {
              scene.img('images/characters/city/natalya/sex/dom192.jpg');
            }
          }
        }
      }
    }
    scene.text('You order her to get in position and she eagerly executes your order.');
    qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'bound', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterEvent5(s: GameState, scene: SceneBuilder): void {
  scene.text('This is the end of the current content. Here to add more later.');
  scene.actions([
    { label: 'Continue', goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterBDSMUnlock(s: GameState, scene: SceneBuilder): void {
  ((s as any).bdsmclub ?? {})['unlocked'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub199.jpg');
  scene.text('There\'s a BDSM club near the city, where people with interest in our lifestyle can go to explore their interests. I think you would enjoy going there."');
  scene.text('She offers you a luxurious black business card with a gold trim. "If you\'re interested, this will get you in."');
  scene.text('Your slave then slowly strips off all her clothes, neatly folding them and placing them on a side table.');
  scene.text('"I am your slave body and soul. A slave has no need for clothing in private. I am yours to command, Mistress." She says in what sounds like a prepared speech.');
  scene.actions([
    { label: 'Decide what to do', goto: ['lesbisubhouse', 'event4'] },
  ]);
  scene.build();
}

function enterBound(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).mistressfist ?? 0))) {
    scene.img('images/characters/city/natalya/sex/dom13.jpg');
    scene.text('Your personal slave lies quietly at your feet, not daring to stir and patiently awaiting your command or punishment.');
  } else {
    if (((s as any).mistressfist ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/dom13.jpg');
      scene.text('Your helplessly bound slave lies at your feet. Her pussy is slowly contracting back to normal and is so wet that you can see her juices running down her thigh and dripping onto the floor.');
    } else {
      if (((s as any).mistressfist ?? 0) === 2) {
        scene.img('images/characters/city/natalya/sex/dom13.jpg');
        scene.text('Your helplessly bound slave lies at your feet. Her dilated anus glistens with lubricant and randomly twitches as her sphincter ever so slowly tries to contract back to normal size.');
      } else {
        if (((s as any).mistressfist ?? 0) === 3) {
          scene.img('images/characters/city/natalya/sex/dom13.jpg');
          scene.text('Your helplessly bound slave lies at your feet. Both her holes are wide open to your gaze, juices and lubricant dripping from them. Their twitching and her moaning speak volumes of how much she enjoys being your pet.');
        } else {
          if (((s as any).mistressfist ?? 0) === 4) {
            scene.img('images/characters/city/natalya/sex/dom13.jpg');
            scene.text('Your helplessly bound slave lies at your feet. Her vagina has been stretched about as much as you think is humanly possible. An opaque liquid oozes from it, proof of her excitement.');
          } else {
            if (((s as any).mistressfist ?? 0) === 5) {
              scene.img('images/characters/city/natalya/sex/dom13.jpg');
              scene.text('Your helplessly bound slave lies at your feet. Her anus looks completely destroyed and it looks like she\'s consciously trying to squeeze it shut in a vain attempt to return it to normal.');
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 80) {
    scene.actions([
      { label: 'Fuck her pussy', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom14.jpg');
    scene.text('You put on your strapon and, without foreplay, roughly shove it into your slave\'s pussy. Not that it matters: She\'s so horny already that it easily slides in. You reward / punish her excitement by fucking her hard.');
    if (((s as any).mistskold ?? 0) === 1) {
      if (((s as any).mistressfist ?? 0) === 4) {
        scene.text('"Oh god…" your slave groans as you drive yourself in all the way in. "You make my pussy feel so good!" You impale her all the way in again in one fluid motion. "Yes! I can feel you in my womb, Mistress! Fuck me! Fuck my bottomless hole with your big cock! Fuck your obedient slave!');
        scene.text('You spend the next half hour fucking your slave senseless while she groans, begs and demeans herself. In the end, neither of you cum. At least you didn\'t.');
        qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('"Yes, Mistress! Fuck me, Mistress! More! Harder! Destroy my wet pussy with your big dick!"');
        scene.text('Your slave just won\'t stop talking. In an attempt to shut her up, you give her the most violent thrusts you can manage, hoping that she\'ll be too busy moaning to speak. Despite all the moaning, groaning and screams, she keeps talking.');
        scene.text('"Oh, Mistress… You are so… so… Oh god, harder, Mistress! Fuck my womb! Fuck your whore! I am your slave… Your cheap slut… Oh, my pussy…"');
        scene.text('Thankfully, it doesn\'t take much longer for her to finish, her orgasm robbing her of all coherence. These precious moments of silence allow you to focus all the excitement over her self-demeaning monologue and the sensations of the strapon rubbing against your pussy. Speeding up the pace, you send her plummeting over the edge again and cum yourself only moments later.');
        qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    } else {
      if (((s as any).mistressfist ?? 0) === 4) {
        scene.text('At some point, you feel a bit of resistance, as if your slave is gripping the strapon with her pussy - quite a surprise considering you fisted her earlier - and she\'s furiously rubbing her clit, trying to reach her climax, but you don\'t pay attention to her: The belt rubs against you just the way you like and you find yourself orgasming moments later.');
        qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('Her sweet cries of pleasure make you almost as wet as her; it\'s thrilling beyond imagination to fuck this woman, your slave, bound and at your mercy. Even without the dildo\'s straps rubbing against your clit, you\'d be just about ready to cum. With it, however, every thrust brings you closer and closer to climax. A particularly violent one is all it takes: You cum so hard that you almost faint, darkness shrouding the edge of your view for a minute. You hold onto the body under you for dear life, her convulsions telling you that she\'s not faring any better.');
        qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her ass', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom15.jpg');
    scene.text('You rub the tip of your strapon around your slave\'s wet pussy lips, lubricating it generously and raising her anticipation in the process. When you feel that you\'ve teased her enough, you line up the dildo with her backdoor and slowly push it in. She groans as you invade her supple ass, filling her up inch by inch.');
    if (((s as any).mistskold ?? 0) === 1) {
      if (((s as any).mistressfist ?? 0) === 5) {
        scene.text('Your slave groans in frustration as you start moving in and out of her previously fisted anus. "It\'s too small… Fuck me deep, Mistress. Shove your dick all the way into my destroyed ass. Fuck your slave, make me feel it!"');
        scene.text('Ignoring your slave as well as you can, you fuck her ass at your leisure. She proves distracting enough to keep you from cumming, though.');
        qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('"Oh Mistress… I don\'t deserve to have you in my dirty hole… Thank you, Mistress. Thank you, that you\'re filling my ass."');
        scene.text('Your slave keeps talking, only pausing when she is overtaken by moans of pleasure. Somehow, she managed to free one hand from her bindings and immediately puts it between her legs, frantically rubbing her clit and talking, talking, talking…');
        scene.text('"I can feel you moving in my gut, Mistress… Fuck me! Fuck my ass… Oh god… I want more inside me! Fingers, cucumbers, bottles, dicks… Once I… I… Ohh… Ohh!"');
        scene.text('You accelerate the pace, her incoherent mumbling distracting and even angering you, each thrust a tiny punishment in its own right. Once she\'s silenced, you have no trouble bringing yourself to orgasm. Meanwhile, your slave enjoys herself thoroughly and cums several times more, helping herself with her fingers.');
        qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'lesbian', 'rough', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    } else {
      if (((s as any).mistressfist ?? 0) === 5) {
        scene.text('You pull out all the way the way again, torturously slowly, until her wide anus releases your strapon with a pop. You can hear her heavy breathing and see her impatience, her hips moving towards you, looking for your fake cock. She finds it, as if her hole had been drawn to it, and you drive it back in one powerful thrust, entering her without resistance, eliciting guttural sounds of satisfaction from her. Once you\'ve pushed the strapon all the way in to the hilt, you start fuck her roughly, slapping against her perfect ass with loud slaps. Soon, you sense that familiar tingling in your stomach and an orgasm shakes both of you.');
        qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'lesbian', 'rough', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('You start moving your hips, moving whichever way you have to to rub the strapon against your pussy. Your slave manages to free one of her hands from her bindings and immediately puts it between her legs, furiously rubbing her clit - the final push to send her into a screaming orgasm. You keep driving the dildo into her ass, feeling the resistance as her contracting muscles try to push the invader from her anus, but it only spurs you on and you drive the cock into her with even more force, the excitement of the situation soon causing you to cum with your slave, who is already enjoying her second climax.');
        qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'lesbian', 'rough', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck your pussy with her mouth', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    if (((s as any).pcs_vag ?? 0) < 10) {
      if (((s as any).vgape ?? 0) < 3) {
        (s as any).vgape = ((s as any).vgape ?? 0) + (1);
      }
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom28.jpg');
    scene.text('You strap your dildo to your willing slave\'s mouth and lay her on the bed, her eyes filled with anticipation. Without a word, you climb on top of her, your crotch completely exposed to her and slowly lower your pussy onto the dildo. As soon as it is inside you, you feel your juices running down its length and dripping onto your slave\'s face and you start riding it in earnest, going out of your way to rub your labia on your helpless pet\'s face. Sometimes, you even feel her nose brushing against your anus.');
    qspCall(s, 'arousal', 'vaginal_dildo', 30, 'lesbian', 'dom', 'humiliation', 'bound');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream of urine while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Fist her pussy', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    if (((s as any).mistressfist ?? 0) === 1) {
      (s as any).mistressfist = 4;
    }
    if ((!((s as any).mistressfist ?? 0))) {
      (s as any).mistressfist = 1;
    }
    if (((s as any).mistressfist ?? 0) === 2) {
      (s as any).mistressfist = 3;
    }
    (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom17.jpg');
    scene.text('You lay your slave on her back and, finger by finger, slowly push your entire hand into her pussy.');
    if (((s as any).mistskold ?? 0) === 1) {
      if (((s as any).mistressfist ?? 0) === 4) {
        scene.text('"Oh, Mistress! My wet pussy is so wide I almost can\'t feel your hand, but I\'ll make my hole tighter to please you! Am I a good slave?"');
        scene.text('Despite her best efforts, her pussy doesn\'t tighten noticeably and in the end, your hand isn\'t enough to make her cum.');
        qspCall(s, 'arousal', 'vaginal_fist_give', 30, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('"Oh god!", she exclaims. "Your hand, Mistress… Your hand is in my pussy! Oh yes, fuck your slave with your fist, fuck my womb, tear my pussy apart!"');
        scene.text('You stuff her pussy while she keeps uttering obscenities, becoming louder and less coherent until, finally, your slave cums all over your fist.');
        qspCall(s, 'arousal', 'vaginal_fist_give', 30, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    } else {
      if (((s as any).mistressfist ?? 0) === 4) {
        scene.text('Your slave\'s large pussy is literally oozing with her juices, lubricating you more than you could possibly need, so you drop all pretense of caution and start fucking her with your fist, obscene squishing sounds mingling with her lustful moans.');
        qspCall(s, 'arousal', 'vaginal_fist_give', 30, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('You take it slow, giving your slave time to adapt as you pull your hand in and out of her pussy. You can\'t see any signs of discomfort on her face though - she\'s getting off immensely on this, reaching her limit in record time as her insides convulse around you in anticipation, feeling more like a snake pit than a vagina.');
        scene.text('She\'s almost there, but you stop in the middle of a thrust, not allowing her to reach her orgasm, her desperate and frustrated groans music to your ears.');
        qspCall(s, 'arousal', 'vaginal_fist_give', 30, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'start'] },
    ]);
  } },
      { label: 'Fist her ass', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (40);
    if (((s as any).mistressfist ?? 0) === 2) {
      (s as any).mistressfist = 5;
    }
    if ((!((s as any).mistressfist ?? 0))) {
      (s as any).mistressfist = 2;
    }
    if (((s as any).mistressfist ?? 0) === 1) {
      (s as any).mistressfist = 3;
    }
    (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom18.jpg');
    scene.text('You have your slave lay down on her stomach, her face unreadable. You spit on her ass, liberally lubricating her anus, and slowly push more and more of your hand into her. Once it\'s all the way in, you start thrusting it in and out of her ass.');
    if (((s as any).mistskold ?? 0) === 1) {
      if (((s as any).mistressfist ?? 0) === 5) {
        scene.text('"Mistress," your slave whines with tears in her eyes. "My ass hurts so much! Please, slow down! It feels like my insides are…"');
        scene.text('Given you\'ve practically destroyed her anus, it doesn\'t come as too big of a surprise that she\'s in pain. You decide to show mercy and stop.');
        qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('"Yes, Mistress!" Your slave wiggles around you, moving against you. "Yes, fuck me in the ass! Shove your hand deep into me!"');
        scene.text('Ignoring her words as best as you can, you focus on moving with her as you fuck her convulsing, contracting ass with your fist.');
        qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    } else {
      if (((s as any).mistressfist ?? 0) === 5) {
        scene.text('Seeing how much you\'ve widened her ass already, you pull out and, in one smooth motion, push your hand into her ass again, feeling the warm, wet walls of her rectum envelop you immediately. You immediately and roughly jerk it out again, the room filled by squelching and other sounds.');
        qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.text('Your slave cries and squirms as your hand moves inside her, but endures her obvious pain. You take your time, exploring her ass and stretching it, but after a while you have mercy on her and pull your hand out.');
        qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian', 'bound');
        qspCall(s, 'arousal', 'end');
      }
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'start'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Untie her', goto: ['lesbisubhouse', 'events'] },
  ]);
  scene.build();
}

function enterSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mistressfist ?? 0) === 1  ||  ((s as any).mistressfist ?? 0) === 4) {
    scene.img('images/characters/city/natalya/sex/dom19vagina.jpg');
    scene.text('Your slave obediently presents her holes to you, her pussy wide open and dripping with juices.');
  } else {
    if (((s as any).mistressfist ?? 0) === 2  ||  ((s as any).mistressfist ?? 0) === 5) {
      scene.img('images/characters/city/natalya/sex/dom19anus.jpg');
      scene.text('Your slave obediently presents her holes to you, her ass stretched wide open.');
    } else {
      if (((s as any).mistressfist ?? 0) === 3) {
        scene.img('images/characters/city/natalya/sex/dom19both.jpg');
        scene.text('Your slave obediently presents her holes to you, both of them gaping and ready.');
      } else {
        scene.img('images/characters/city/natalya/sex/dom19.jpg');
        scene.text('Your slave obediently presents her holes to you, quivering in anticipation of what you\'re going to do to her.');
      }
    }
  }
  if (((s as any).pcs_horny ?? 0) >= 80) {
    scene.actions([
      { label: 'Have sex with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).mistressfist ?? 0) === 1  ||  ((s as any).mistressfist ?? 0) === 4) {
      scene.img('images/characters/city/natalya/sex/dom19vagina.jpg');
      scene.text('Your slave obediently presents her holes to you, her vagina wide open and dripping with juices.');
    } else {
      if (((s as any).mistressfist ?? 0) === 2  ||  ((s as any).mistressfist ?? 0) === 5) {
        scene.img('images/characters/city/natalya/sex/dom19anus.jpg');
        scene.text('Your slave obediently presents her holes to you, her ass stretched wide open.');
      } else {
        if (((s as any).mistressfist ?? 0) === 3) {
          scene.img('images/characters/city/natalya/sex/dom19both.jpg');
          scene.text('Your slave obediently presents her holes to you, both of them gaping and ready.');
        } else {
          scene.img('images/characters/city/natalya/sex/dom19.jpg');
          scene.text('Your slave obediently presents her holes to you, quivering in anticipation of what you\'re going to do to her.');
        }
      }
    }
    scene.actions([
      { label: 'Fuck her pussy', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom22.jpg');
    scene.text('You spoon up with her, put on your strapon and, after rubbing it against her wet slit for a while, insert it into your slave\'s waiting pussy.');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.text('She gasps and groans. "Your cock in my horny pussy! Ohh… I love it when you fuck me, Mistress!"');
      qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
      qspCall(s, 'stat', '');
    } else {
      scene.text('She moans loudly and moves her hips back to meet you, pushing the dildo even deeper into her pussy.');
      qspCall(s, 'arousal', 'vaginal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
      qspCall(s, 'stat', '');
    }
    scene.text('Forgetting everything around you, you keep driving your fake cock into your submissive slave\'s cunt until both of you are shaken by orgasms.');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Fuck her in the ass', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom23.jpg');
    scene.text('You bend your slave over and climb into your strapon before lubricating it with her pussy juices and slowly pushing it into her ass.');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.text('"Mmm…" she moans lasciviously. "I can feel your cock in my ass. It feels so good!"');
      qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
      qspCall(s, 'stat', '');
    } else {
      scene.text('She moans in a mix of pleasure and pain while pulling her asscheeks apart for you, moving her ass back to meet your thrusts.');
      qspCall(s, 'arousal', 'anal_strap_give', 30, 'dom', 'rough', 'lesbian', 'bound');
      qspCall(s, 'stat', '');
    }
    scene.text('You soon have enough of going slow. You place your hands on her back and start to really drive it into her, practically feeling her orgasm when you see her sphincter tighten around the strapon. Soon, you feel that tingling in your stomach and, driving all the way into her one last time, cum yourself.');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes when she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Place the dildo on her mouth', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).pcs_mood ?? 0) < 50) {
      (s as any).pcs_mood = 50;
    }
    if (((s as any).pcs_ass ?? 0) < 10) {
      if (((s as any).agape ?? 0) < 3) {
        (s as any).agape = ((s as any).agape ?? 0) + (1);
      }
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom29.jpg');
    scene.text('You strap your dildo to your willing slave\'s mouth and order her to fuck your ass. You lay down on your back, preparing your back passage with your fingers before you signal her. Your slave gently probes your ass with the dildo and begins to work it inside, moving her head to please you as you are overcome by an urge to rub your pussy. It doesn\'t take you long to bring yourself to an orgasm, your hips shakily moving to meet your slave\'s thrusts, occasionally dipping her nose into your pussy.');
    qspCall(s, 'arousal', 'anal_dildo', 30, 'lesbian', 'dom', 'humiliation', 'bound');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pcs_horny ?? 0) < 80) {
      scene.actions([
        { label: 'Make her pleasure you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom32.jpg');
    scene.text('You sit down on the couch and, after a while, tell your slave that you are bored. She humbly lowers hear head in front of you and asks what she can do to dispel your boredom.');
    scene.actions([
      { label: 'Order her to play with her pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('"Of course, Mistress. Your wish is my command," she says obligingly. "May I use dildos or do you want me to only use my hands?"');
    scene.actions([
      { label: 'Allow her to use dildos', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/dom331.jpg');
      scene.text('Your slave nods her head, grabs a few dildos and, with a joyful squeal, jumps on the bed. She spreads her legs wide and, one after the other, stuffs two dildos into her cunt. When they\'re both inside her, she starts fucking herself with them, cursing and demeaning herself all the while.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      scene.img('images/characters/city/natalya/sex/dom33.jpg');
      scene.text('Your slave nods her head and grabs a dildo. She lays back on the bed and widely spreads her legs so you can see everything, including her pussy, already wet with anticipation. Your slave stuffs the dildo into her pussy without further preparation and enthusiastically fucks herself with it, fulfilling your command with pleasure.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
      { label: 'Order her to fist herself', handler: (st: GameState) => {
    if (((s as any).mistressfist ?? 0) === 1) {
      (s as any).mistressfist = 4;
    }
    if ((!((s as any).mistressfist ?? 0))) {
      (s as any).mistressfist = 1;
    }
    qspCall(s, 'stat', '');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/dom341.jpg');
      scene.text('Your slave nods and lies down on her back in front of you, spreading her legs. After putting some lubricant on her hand, she bends forward and slowly pushes her whole hand into her vagina.');
      scene.text('"Oh Mistress," she mutters under her breath. "As you requested, my hand is in my pussy!" Do you like it? Am I pleasing you? Ohh… It feels so good to fist myself in front of my beloved Mistress!"');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      scene.img('images/characters/city/natalya/sex/dom34.jpg');
      scene.text('Your slave nods her head and turns around, putting one of her legs up on the coffee table. She looks back to make sure that you can see everything she\'s doing, then starts fucking herself with her hand.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
      { label: 'Surprise me', handler: (st: GameState) => {
    (s as any).mistressfist = 4;
    qspCall(s, 'stat', '');
    (s as any).temp_lesbisubhouse = Math.floor(Math.random() * 5) + 0;
    if ((!((s as any).temp_lesbisubhouse ?? 0))) {
      scene.img('images/characters/city/natalya/sex/dom35.jpg');
      scene.text('Your slave nods obediently and looks around for inspiration. Unable to find anything suitable here, she rushes into the kitchen and soon returns with a small bottle of sparkling wine in one hand and something smaller in the other. After a few seconds you recognize that it\'s an unwrapped condom, which she proceeds to put on the neck of the bottle. She hesitates for a second before she sets the bottle on the ground and hovers over it. The next thing you hear is a low groan as she impales herself on the glass object. Only a minute later, she\'s practically riding the bottle.');
    } else {
      if (((s as any).temp_lesbisubhouse ?? 0) === 1) {
        scene.img('images/characters/city/natalya/sex/dom351.jpg');
        scene.text('Your slave nods obediently and looks around for inspiration. Unable to find anything suitable here, she rushes into the kitchen and soon returns with a can of beer, the condensation telling you that she found it in the fridge. She puts it on the floor and immediately lowers her wet pussy onto it. Try as she might, she only manages to fit about half of it inside her - perhaps the cold is making her clench too hard. With further penetration out of the question, your slave instead starts riding the can, moaning loudly and pinching her nipples for further stimulation.');
      } else {
        if (((s as any).temp_lesbisubhouse ?? 0) === 2) {
          scene.img('images/characters/city/natalya/sex/dom352.jpg');
          scene.text('Your slave nods obediently and looks around for inspiration. Unable to find anything suitable here, she rushes into the kitchen and soon returns with a bottle of champagne. She sits down next to you, turns around and lifts her ass up high, basically sitting on the sofa wrong side up, and then slowly shoves the bottle into her pussy, thick end first. You stare, mystified, as her nether mouth swallows more and more of the large object right in front of you. When the bottle is almost all the way inside, she tries hard to push it out using only her vaginal muscles, her face strained with concentration, but she can\'t do it. She keeps trying but after many futile attempts, her idea loses its charm and you tire of it. Maybe she\'ll manage next time.');
        } else {
          if (((s as any).temp_lesbisubhouse ?? 0) === 3) {
            scene.img('images/characters/city/natalya/sex/dom353.jpg');
            scene.text('Your slave nods obediently and looks around for inspiration. Unable to find anything suitable here, she rushes into the kitchen and soon returns with a full plastic bottle of mineral water. She sits down in front of you and slowly, from behind, shoves the bottle into her pussy. When it has all but disappeared in her bottomless hole, she gets up and bends over so you can get a better view at it, spreading her legs for you and sticking out her ass even more than usual. She then starts walking around the room, the strength of her vaginal muscles being the only thing that keeps the bottle inside her pussy.');
          } else {
            if (((s as any).temp_lesbisubhouse ?? 0) === 4) {
              scene.img('images/characters/city/natalya/sex/dom354.jpg');
              scene.text('Your slave nods obediently and looks around for inspiration and within a second, clearly with an idea in mind, rushes to the dressing table from which she produces two impressively large dildos, both of which are stuffed into her vagina only a minute later. Your slave moans loudly as she rides them and seems to be enjoying yourself, but you soon tire of her display and put an end to it.');
            }
          }
        }
      }
    }
    qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
    ]);
  } },
      { label: 'Order her to play with her ass', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom32.jpg');
    scene.text('"Of course, Mistress. Your wish is my command," she says obligingly. "May I use dildos or do you want me to only use my hands?"');
    scene.actions([
      { label: 'Allow her to use dildos', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).mistanalfist ?? 0) < 25) {
      scene.img('images/characters/city/natalya/sex/dom36.jpg');
      scene.text('Your slave nods obediently and pulls an average-sized dildo out of her dressing table. Once it\'s fastened to the floor, she lubricates her anus with her spit, then slowly lowers her ass onto the dildo. When about half of it is inside her, she starts moving her hips, your eyes curiously following her every movement.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).mistanalfist ?? 0) >= 25  &&  ((s as any).mistanalfist ?? 0) < 50) {
        scene.img('images/characters/city/natalya/sex/dom361.jpg');
        scene.text('Your slave nods obediently and pulls a large dildo out of her dressing table and lies down on her belly in front of you. She sucks and throats the dildo a little to lubricate it with her saliva, then slowly inserts it all the way into her ass. She gives herself a minute to get used to the foreign object, then, without warning, starts moving it in and out of her ass at a rapid pace.');
        qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
        qspCall(s, 'arousal', 'end');
      } else {
        scene.img('images/characters/city/natalya/sex/dom362.jpg');
        scene.text('Your slave, saying nothing, goes to the dressing table and pulls out a particularly big dildo. With hasty movement, she fastens it to the floor and positions herself over it. Her hands spreading her buttocks apart, she seems to feel nothing but lust as she lowers her backdoor onto the giant rubber cock. When the member is as deep inside as it will go, she starts riding it wildly, moaning like a bitch in heat, completely oblivious to your presence.');
        qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
        qspCall(s, 'arousal', 'end');
      }
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
      { label: 'Order her to use her hand', handler: (st: GameState) => {
    if (((s as any).mistanalfist ?? 0) >= 25) {
      if (((s as any).mistressfist ?? 0) === 2) {
        (s as any).mistressfist = 5;
      }
      if ((!((s as any).mistressfist ?? 0))) {
        (s as any).mistressfist = 2;
      }
    }
    (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) + (1);
    qspCall(s, 'stat', '');
    if (((s as any).mistanalfist ?? 0) < 25) {
      scene.img('images/characters/city/natalya/sex/dom37.jpg');
      scene.text('Your slave nods and immediately turns her ass to you. Spreading her butt a little wider with one hand, she licks two of her fingers until they are nice and wet and then inserts them into her ass with very little resistance, fingerfucking herself for your pleasure… and, judging by her moans, for her own.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      scene.img('images/characters/city/natalya/sex/dom34.jpg');
      scene.text('Your slave nods and gets on all fours in front of the sofa. Once her hand is sufficiently covered in spit, she starts pushing it into her widened ass. A few minutes later, her hand is finally all the way inside her anus and your slave, moaning languidly, starts moving it in and out, fisting her own ass.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
      { label: 'Surprise me', handler: (st: GameState) => {
    if (((s as any).mistanalfist ?? 0) < 50) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 21) + 30);
    }
    if (((s as any).mistanalfist ?? 0) >= 50) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (80);
    }
    if (((s as any).mistanalfist ?? 0) >= 25  &&  ((s as any).mistanalfist ?? 0) < 50) {
      if (((s as any).mistressfist ?? 0) === 2) {
        (s as any).mistressfist = 5;
      }
    } else {
      if (((s as any).mistanalfist ?? 0) >= 50) {
        if (((s as any).mistressfist ?? 0) === 2) {
          (s as any).mistressfist = 5;
        }
        if ((!((s as any).mistressfist ?? 0))) {
          (s as any).mistressfist = 2;
        }
      }
    }
    if (((s as any).mistanalfist ?? 0) >= 25) {
      (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    if (((s as any).mistanalfist ?? 0) < 25) {
      scene.img('images/characters/city/natalya/sex/dom38.jpg');
      scene.text('Your slave nods and, after taking a moment to think, lies on her back in front of you and, with some difficulty, puts two fingers of each hand into her ass. When all four are inside, your slave pulls her sphincter open, giving you the opportunity to see the inside of her ass.');
      qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).mistanalfist ?? 0) >= 25  &&  ((s as any).mistanalfist ?? 0) < 50) {
        scene.img('images/characters/city/natalya/sex/dom381.jpg');
        scene.text('Your slave nods and rushes headlong into the kitchen. A minute later, she returns with a bottle of wine. Brazenly staring you straight in the eye, she licks and sucks the bottle\'s neck for a few minutes and covers it generously with her drool, then gets on all fours in front of you and sticks the bottle, neck first, into her anus. Meeting no resistance, she slowly starts fuck herself in the ass.');
        qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
        qspCall(s, 'arousal', 'end');
      } else {
        if (((s as any).mistanalfist ?? 0) >= 50) {
          scene.img('images/characters/city/natalya/sex/dom382.jpg');
          scene.text('Your slave nods and quickly rushes to the kitchen. A minute passes before she returns with a can of beer. Getting on all fours in front of you, she takes a couple of minutes to prepare her practically destroyed asshole with her fingers and lubricate the can with her spit. When she deems everything ready, she slowly shoves the beer can into her ass. Soon, most of it is inside and your slave, moaning lustfully but not stopping, starts fucking her ass with the can, coming to a shuddering orgasm soon after.');
          qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'exhibitionism', 'lesbian');
          qspCall(s, 'arousal', 'end');
        }
      }
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Tell her you\'re going to double-fist her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).mistressfist ?? 0) === 1  ||  ((s as any).mistressfist ?? 0) === 4) {
      scene.img('images/characters/city/natalya/sex/dom19vagina.jpg');
      scene.text('Your slave obediently presents her holes to you, her pussy wide open and dripping with juices.');
    } else {
      if (((s as any).mistressfist ?? 0) === 2  ||  ((s as any).mistressfist ?? 0) === 5) {
        scene.img('images/characters/city/natalya/sex/dom19anus.jpg');
        scene.text('Your slave obediently presents her holes to you, her ass stretched wide open.');
      } else {
        if (((s as any).mistressfist ?? 0) === 3) {
          scene.img('images/characters/city/natalya/sex/dom19both.jpg');
          scene.text('Your slave obediently presents her holes to you, both of them gaping and ready.');
        } else {
          scene.img('images/characters/city/natalya/sex/dom19.jpg');
          scene.text('Your slave obediently presents her holes to you, quivering in anticipation of what you\'re going to do to her.');
        }
      }
    }
    scene.actions([
      { label: 'Double-fist her ass', handler: (st: GameState) => {
    if (((s as any).mistressfist ?? 0) === 2) {
      (s as any).mistressfist = 5;
    }
    if ((!((s as any).mistressfist ?? 0))) {
      (s as any).mistressfist = 2;
    }
    if (((s as any).mistressfist ?? 0) === 1) {
      (s as any).mistressfist = 3;
    }
    (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom20.jpg');
    scene.text('You generously lubricate your hands and order your slave to bend over. You then proceed to work your fingers into her, one after the other, until your entire hand is inside her ass. You then start inserting the other…');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.text('"Mistress…" she whimpers; both her pain and pleasure are obvious. "Your hands… They feel so… Ohh… Stick them deeper into my ass, Mistress! Put them both in! Tear your worthless slave\'s ass apart!"');
      scene.text('You alternate between slow and fast thrusts, shallow and deep ones, moving one hand, then the other, then both. More than once, you feel her quiver in orgasm. Your arms eventually grow tired and you decide to stop.');
      qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian');
      qspCall(s, 'arousal', 'end');
    } else {
      scene.text('She whimpers in pain but endures her suffering while you fuck her ass with both hands.');
      qspCall(s, 'arousal', 'anal_fist_give', 20, 'dom', 'lesbian');
      qspCall(s, 'arousal', 'end');
    }
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
      { label: 'Double-fist her pussy', handler: (st: GameState) => {
    if (((s as any).mistressfist ?? 0) === 1) {
      (s as any).mistressfist = 4;
    }
    if ((!((s as any).mistressfist ?? 0))) {
      (s as any).mistressfist = 1;
    }
    if (((s as any).mistressfist ?? 0) === 2) {
      (s as any).mistressfist = 3;
    }
    (s as any).mistanalfist = ((s as any).mistanalfist ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom21.jpg');
    scene.text('You have your slave lean on the wall and order her not to move. Then, finger by finger, you start inserting your hands into her pussy.');
    if (((s as any).mistskold ?? 0) === 1) {
      scene.text('"Mmm…" she moans, walking the fine line between pleasure and pain. "You\'ll rip me open, Mistress… I can feel your hands in my pussy… "Yes, fuck me, fuck me with your divine hands, Mistress!"');
      qspCall(s, 'arousal', 'vaginal_fist_give', 20, 'dom', 'lesbian');
      qspCall(s, 'arousal', 'end');
    }
    scene.text('You feel the walls of her pussy tightly wrapped around your wrists and fuck your slave like this for a while before you grow tired.');
    qspCall(s, 'arousal', 'vaginal_fist_give', 20, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Take a breather', goto: ['lesbisubhouse', 'sex'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Have her prepare a snack for you', goto: ['lesbisubhouse', 'cook'] },
  ]);
  scene.build();
}

function enterCook(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (20);
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (1);
  (s as any).frost = 0;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if (((s as any).mistanalfist ?? 0) >= 25  &&  (!(Math.floor(Math.random() * 4) + 0))) {
    scene.img('images/characters/city/natalya/sex/dom393.jpg');
    scene.text('Just when you\'re starting to run out of patience, your slave finally returns with your meal and you happily eat what she made for you. As you eat, she entertains you by pleasuring herself with two dildos at your feet.');
  } else {
    scene.img('images/characters/city/natalya/sex/dom392.jpg');
    scene.text('Just when you\'re starting to run out of patience, your slave finally returns with your meal and you happily eat what she made for you.');
  }
  scene.actions([
    { label: 'Finish eating', goto: ['lesbisubhouse', 'events'] },
  ]);
  scene.build();
}

function enterGetFucked(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/natalya/sex/dom40.jpg');
  scene.text('You see a glimmer of excitement light up your slave\'s eyes when you voice your desire to get fucked by her. Her only visible reaction, though, is an obedient nod as she puts on the strapon.');
  scene.actions([
    { label: 'Fuck my pussy', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A178');
    qspCall(s, 'boyStat', 'D2');
    scene.img('images/characters/city/natalya/sex/dom401.jpg');
    qspCall(s, 'dinsex2', 'd_strapon_vag', 30, 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) > 20) {
      scene.actions([
        { label: 'Punish', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 10);
    if (((s as any).mistendbound ?? 0) <= 50) {
      (s as any).mistendspank = ((s as any).mistendspank ?? 0) + (1);
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom404.jpg');
    scene.text('Since she failed to give you the orgasm you so desperately wanted, you feel that your slave deserves a good spanking. Acknowledging her guilt, she nods her head apologetically and meekly suffers her punishment.');
    qspCall(s, 'arousal', 'foreplay', 15, 'dom', 'lesbian', 'maso');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
  } },
    { label: 'Fuck my ass', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A178');
    qspCall(s, 'boyStat', 'D2');
    if (((s as any).pcs_pubes ?? 0) <= 10) {
      scene.img('images/characters/city/natalya/sex/dom402.jpg');
    } else {
      scene.img('images/characters/city/natalya/sex/dom403.jpg');
    }
    qspCall(s, 'dinSex', 'girl_wants_anal', '', 'lubri');
    qspCall(s, 'dinsex2', 'd_strapon_anal', 30, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom31.jpg');
    scene.text('You get rid of the strapon and start collecting your things. Your slave sees that you intend to leave and falls to her knees in front of you. She has actual tears in her eyes as she begs you to urinate on her before you go.');
    scene.actions([
      { label: 'Give her what she wants', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'pee_give', 10, 'dom', 'lesbian');
    qspCall(s, 'arousal', 'end');
    (s as any).mistpiss = ((s as any).mistpiss ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom30.jpg');
    scene.text('You order your slave girl to sit back and lean against the couch. Once she does it, you put one leg up on the cushions, move yourself over her and start urinating on her.');
    if (((s as any).mistpiss ?? 0) < 10) {
      scene.text('Your slave grimaces in disgust and turns her head away, but meekly tolerates it, not daring to argue with you.');
    }
    if (((s as any).mistpiss ?? 0) >= 10  &&  ((s as any).mistpiss ?? 0) < 20) {
      scene.text('She waits quietly until you\'re done. You can\'t make out any emotion on her face. All you see is obedience.');
    }
    if (((s as any).mistpiss ?? 0) >= 20) {
      scene.text('She opens her mouth wide and eagerly tries to catch your stream while rubbing her pussy.');
    }
    scene.text('Once your bladder is empty, you finish dressing and exit the apartment, leaving your slave alone, dirty and covered in your urine.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse and leave', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
    (st as any).mistpiss = ((st as any).mistpiss ?? 0) - (1);
  }, goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enough for now', handler: (st: GameState) => {
    (st as any).mistressfist = 0;
  }, goto: ['city_residential', ''] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'event2':
      enterEvent2(s, scene);
      break;
    case 'event3':
      enterEvent3(s, scene);
      break;
    case 'event3_1':
      enterEvent3_1(s, scene);
      break;
    case 'event4':
      enterEvent4(s, scene);
      break;
    case 'event5':
      enterEvent5(s, scene);
      break;
    case 'BDSM_unlock':
      enterBDSMUnlock(s, scene);
      break;
    case 'bound':
      enterBound(s, scene);
      break;
    case 'sex':
      enterSex(s, scene);
      break;
    case 'cook':
      enterCook(s, scene);
      break;
    case 'get_fucked':
      enterGetFucked(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const lesbisubhouse: LocationDef = {
  name: 'lesbisubhouse',
  title: 'You ring the bell, but no one answers. You then remember tha',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You ring the bell, but no one answers. You then remember that your slave is probably working in the sex shop\'s basement right now.'],
  enter: enter,
};
