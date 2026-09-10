import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  if (((s as any).soniaQW ?? 0)?.['slut'] > 0  &&  ((s as any).soniaQW ?? 0)?.['slut'] < 4  &&  ((s as any).rand ?? 0)(0, 1+((s as any).soniaQW ?? 0)?.['slut'])=== 0) {
    if (((s as any).soniaQW ?? 0)?.['slut'] === 1) {
      if ((((s as any).soniaQW ?? 0)?.['slutdays']+7) < ((s as any).daystart ?? 0)) {
        (s as any).soniaQW['slut'] = 2;
        qspCall(s, 'array', 'remove_element', 'soniaQW', 'slutdays');
      }
      scene.text('"Did you hear what happened at the disco the other night? Sonia gave like five guys a blowjob, all at once!"');
      scene.text('"Yeah, I heard. I don\'t think anyone will want to go out with her now, not after Kotov and his cronies had their way with her."');
      scene.text('"What do you mean?"');
      scene.text('"They all came right on her face and made her walk out like that. I bet half the town has seen pictures of her face covered in cum. It\'s disgusting!"');
    } else {
      scene.text('"Have you heard what Sonia is up to nowadays? Apparently, she\'s in the bathroom during break giving out blowjobs to literally anyone!"');
      scene.text('"That\'s nasty! Think we should go have a look?"');
      if (((s as any).soniaQW ?? 0)?.['slut'] === 3) {
        scene.text('"Sonia turned into a huge whore all of a sudden. She has all sorts of sex now, no matter how nasty! Such a shame."');
        scene.text('"What do you mean, such a shame? Why do you even care?"');
        scene.text('"Oh it\'s nothing. I just used to like her a lot, but she was such a prude back then that she wouldn\'t even go on a date with me!"');
      }
      if (((s as any).fuckornot ?? 0) === 0) {
        (s as any).fuckornot = 1;
        (s as any).fuckornot_day = ((s as any).daystart ?? 0);
        scene.text('Several boys are snickering and looking at something on a tablet computer. "Have you guys checked out this site?"');
        scene.text('"Which site?" one of the boys asks.');
        scene.text('"Fuckable or Not. Some nerds made a website listing all the girls where you can rate them on how fuckable they are!" he says with a laugh.');
        scene.text('A third boys almost grabs the tablet. "What!? Let me see that!" They start talking about which girls they think should be rated higher or lower.');
      } else {
        (s as any).fuckornot = 2;
        (s as any).fuckornot_day = ((s as any).daystart ?? 0);
        scene.img('images/locations/pavlovsk/school/events/girls_gossip2.jpg');
        scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
        scene.text('A group of girls are clustered around a laptop. "Oh my god, that\'s disgusting! Boys are such pigs!" the first one says.');
        scene.text('The second girl nods. "I know right? And the name, so disgusting! They could have at least called it Hot or Not."');
        scene.text('"I heard some of the nerds made it and it was called Hot or Not, but then some of the other guys found out about it and made them rename it," a third girl adds in disgust.');
        scene.text('They are silent for a few seconds before the second one asks where she\'s rated. They all start talking about where they\'re rated and where they think they should have been rated, and of course about how disgusting boys are.');
        if (((s as any).hotornot ?? 0) === 0  &&  ((s as any).fuckornot_day ?? 0) < ((s as any).daystart ?? 0) - 9) {
          (s as any).hotornot = 1;
          (s as any).fuckornot_day = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/girls_gossip2.jpg');
          scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
          scene.text('A group of girls are looking at their phones. "Can you believe these ratings?" one of them asks.');
          scene.text('"Boys are such pigs!" another responds.');
          scene.text('"We should return the favor and rate <i>them</i>," a third one says. The rest all stop and look at her, then at each other, and smile.');
        } else {
          (s as any).hotornot = 2;
          (s as any).fuckornot_day = ((s as any).daystart ?? 0);
          scene.img('images/locations/pavlovsk/school/events/girls_gossip1.jpg');
          scene.text('Walking down the halls, you barely notice the poor state of the school anymore, having grown used to it. Approaching your locker, you see several of your classmates who you wave to. As you do, you overhear some of them talking about a variety of things, including some juicy gossip.');
          scene.text('Several of the cool girls are talking to Zinaida. At first you think they might be bullying her, but it instead sounds like they\'re asking her a bunch of questions. Whatever they\'re talking about, they seem to come to an agreement.');
          if (((s as any).cheerleadingQW ?? 0)?.['gossip'] === 0  &&  ((((s as any).month ?? 0) === 9  &&  ((s as any).day ?? 0) >= 19)  ||  ((s as any).month ?? 0) !== 9)) {
            (s as any).cheerleadingQW['gossip'] = 1;
            (s as any).cheerleadingQW['gossip_day'] = ((s as any).daystart ?? 0);
            scene.text('"Albina said that she knows Karine is skipping out on the squad to spend time with that dick she calls her boyfriend."');
            scene.text('"Karine, the youngest one who wears purple all the time? Never understood why Albina even considered someone from a junior class."');
            scene.text('"Yeah, her. Ever since she started dating that asshole, she\'s been skipping out on cheerleading practice and not caring about her grades. I don\'t know how Albina found out, but she\'s seriously pissed and threatening to kick her off the squad!"');
            scene.text('"I bet Lizaveta told her. Knowing Albina, I\'d give Karine a month before her ass is given the boot."');
            scene.text('"Girl, Albina will scratch her eyes out by the end of the week!"');
          } else {
            (s as any).cheerleadingQW['gossip'] = 2;
            (s as any).cheerleadingQW['gossip_day'] = ((s as any).daystart ?? 0) + (7-((s as any).week ?? 0));
            scene.text('"I heard from Lizaveta that Albina and Karine were fighting at the game last Friday!"');
            scene.text('"Albina and who?"');
            scene.text('"Karine, the youngest one who\'s… well endowed shall we say?"');
            scene.text('"Oh her, yeah. This happened at the game?"');
            scene.text('"Yeah, apparently they were shouting so loud that you could hear them over the referee\'s whistle."');
            scene.text('"Damn dude. We should go to the next game. Maybe we can see a catfight and put some bets on?"');
            scene.text('"You read my mind, man!"');
            scene.text('The two boys fistbump each other and change the subject.');
            if (((s as any).cheerleadingQW ?? 0)?.['gossip_day'] < ((s as any).daystart ?? 0)  &&  ((s as any).cheerleadingQW ?? 0)?.['gossip'] === 2) {
              (s as any).cheerleadingQW['gossip'] = 3;
              (s as any).cheerleadingQW['gossip_day'] = ((s as any).daystart ?? 0);
              scene.text('"So is it true? Did Albina actually start throwing punches at Karine?"');
              scene.text('"Damn straight. She just flew at her as soon as she saw her. Girl wouldn\'t be walking if Vicky didn\'t stop her."');
              scene.text('"So she\'s off the squad then? I know I won\'t be signing up to replace her. Albina scares me."');
              scene.text('"Apparently, she terrified Karine so much that she went to live with her aunt in Moscow."');
              scene.text('"Damn. I wonder how a younger girl made the squad in the first place?"');
              scene.text('"Albina said it was because she had talent nobody in our year had, but I think it was the…" The girl cups her breasts in her hands and bounces them slightly as the other girl nods in agreement.');
            } else {
              (s as any).cheerleadingQW['gossip'] = 4;
              (s as any).cheerleadingQW['gossip_day'] = ((s as any).daystart ?? 0);
              scene.text('Two boys are watching a video on a phone. You hear Albina\'s loud screaming echoing from the screen.');
              scene.text('"Just look at Albina going all out on Karine at the last game. Vicky had to stop her from punching the girl\'s lights out!"');
              scene.text('"I\'m guessing she\'s off the squad then?"');
              scene.text('"Oh she\'s done. You don\'t cross Albina like that. Word is her parents found out about her skipping class to spend time with that asshole guy she was seeing and sent her to live with her super strict aunt in Moscow."');
              scene.text('"Damn, poor girl. I heard Albina only put her on the squad because of her puppies. That said, there\'s a few hot chicks I\'d like to see replace her."');
              scene.text('The boys start discussing who they\'d like to see in "that hot cheerleading outfit."');
              if (Math.floor(Math.random() * 2) + 0 === 0) {
                qspCall(s, 'gschool_gossip', 'mixed', ((s as any).locArgs?.[1] ?? 0));
              } else {
                qspCall(s, 'gschool_gossip', 'boys', ((s as any).locArgs?.[1] ?? 0));
                qspCall(s, 'gschool_gossip', 'girls', ((s as any).locArgs?.[1] ?? 0));
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
    default:
      enterMorning(s, scene);
      break;
  }
}

export const gschool_gossip: LocationDef = {
  name: 'gschool_gossip',
  title: 'On your way to hang out with your friends during lunch, you ',
  region: 'other',
  enter: enter,
};
