import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSexTalk1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (0);
  (s as any).temp = Math.floor(Math.random() * 13) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister1.jpg');
    scene.text('"Roma is <i>so</i> good in bed!" she says proudly. "He can do this thing with his hips to rub his dick against my g-spot and it makes me cum every time. He can do it in any position too!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } else {
    if (((s as any).temp ?? 0) === 2) {
      scene.img('images/characters/pavlovsk/resident/anya/sex/sister2.jpg');
      scene.text('"One time, for my friend\'s birthday, I was kind of tight on money so decided to give him a blowjob. Only, it turns out, another girl had the same idea. So we <i>both</i> sucked him off. At the same time. I bet that\'s the best birthday present he\'ll ever get!"');
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    } else {
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/resident/anya/sex/sister3.jpg');
        if (((s as any).sisterknowslut ?? 0) > 0) {
          scene.text('"I love taking it up the ass," Anya confesses to you. "I really wanted to fuck someone, but with those monthly gyno checks, I knew I was gonna get the belt if I came home with a broken hymen. So I went with the only option I had: anal! It hurt the first few times, but once my ass got used to it, I started to love it. Even now, I still love it! You should try it too if you don\'t want to get in trouble. Or stick to blowjobs."');
        } else {
          scene.text('"I love taking it up the ass," Anya confesses to you. "I really wanted to fuck someone, but with those monthly gyno checks, I knew I was gonna get the belt if I came home with a broken hymen. So I went with the only option I had: anal! It hurt the first few times, but once my ass got used to it, I started to love it. Even now, I still love it! It\'s not as good as vaginal sex, but the occasional assfuck keeps things spicy."');
        }
        qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
      } else {
        if (((s as any).temp ?? 0) === 4) {
          scene.img('images/characters/pavlovsk/resident/anya/sex/sister4.jpg');
          scene.text('"One time I was blowing Roma and he came without warning me," your sister says. "I don\'t know what happened, but I swallowed on instinct and decided to keep on sucking. Every load that came out, I kept swallowing until I had sucked him completely dry. You should have seen his face! I think I blew his mind with that!"');
          qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
        } else {
          if (((s as any).temp ?? 0) === 5) {
            scene.img('images/characters/pavlovsk/resident/anya/sex/sister5.jpg');
            scene.text('"When I was still in school, I had this friend I would sometimes study with after class. He\'d always help me with my homework and in return, I\'d let him fuck my ass. Win win!" she grins at you.');
            qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
          } else {
            if (((s as any).temp ?? 0) === 6) {
              scene.img('images/characters/pavlovsk/resident/anya/sex/sister6.jpg');
              scene.text('"One of the things I love the most is when I\'m giving a guy a blowjob and he suddenly takes over. When he grabs me by the hair and shoves his cock down my throat and face fucks me—"');
              scene.text('She starts shivering. "I\'m getting wet just thinking about it…"');
              qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
            } else {
              if (((s as any).temp ?? 0) === 7) {
                scene.img('images/characters/pavlovsk/resident/anya/sex/sister7.jpg');
                scene.text('"There was this one time I was at a party and things started getting really wild. I was fucking this guy, but another one also wanted to fuck me so I started to blow him. It\'s actually pretty fun to suck on a cock while you\'re being fucked, but I guess he got impatient or something cause he got behind me and mounted my ass. <i>Ho-ly shit.</i> I almost came right then. Double penetration became my new fetish that night. If you can ever get two guys to fuck you at the same time, you <i>have</i> to try it!"');
                qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
              } else {
                if (((s as any).temp ?? 0) === 8) {
                  scene.actions([{ label: 'Continue', goto: ['sister_sex_talk', 'black_sex'] }]);
                } else {
                  if (((s as any).temp ?? 0) === 9) {
                    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
                    scene.text('"Roma likes to fuck me doggy style, but it\'s not my favorite," Anya confesses. "It\'s not like I hate it, but I prefer being on top."');
                    if (((s as any).sisterknowslut ?? 0) > 0) {
                      scene.actions([
                        { label: 'I like missionary', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/1.jpg');
    scene.text('"I like missionary," you tell her.');
    scene.text('"What do you like about it?"');
    scene.actions([
      { label: 'It\'s easy', handler: (st: GameState) => {
    scene.text('"It\'s just easy," you shrug. "Simple I guess."');
    scene.text('"Sometimes it\'s nice to be able to just lay back and get plowed, isn\'t it?" she says, nodding along.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Hits better', handler: (st: GameState) => {
    scene.text('"Something about missionary just hits the inside of my pussy better."');
    scene.text('"I get that," she says, nodding along. "Every girl likes it different."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Like the weight of the guy', handler: (st: GameState) => {
    scene.text('"I love feeling of a guy on top of me," you grin. "The entire weight of his body pressing into me through his cock is just amazing!"');
    scene.text('"I get that," she grinning back. "But I use my weight instead of his."');
    scene.text('You both laugh.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
                        { label: 'I like doggy', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/dog1.jpg');
    scene.text('"I actually like doggy," you say.');
    scene.text('"You\'re just like Roma," she says, rolling her eyes but also smiling. "What <i>is</i> it about that you like so much?"');
    scene.actions([
      { label: 'Angle is better', handler: (st: GameState) => {
    scene.text('"The angle is so much better from behind," you grin. "It goes in deep and rubs right against my G-spot."');
    scene.text('"Grinding on top is way better for that," your sister contends.');
    scene.text('The two of you continue to argue about which position is better for several more minutes.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'I like it rough', handler: (st: GameState) => {
    scene.text('"Doggy is the best position to get pounded," you grin. "I like it when a guy gets a little rough with me and doggy is the roughest."');
    scene.text('"Why don\'t you just get rough with him instead?" your sister grins back. "Ride him like a wild stallion?"');
    scene.text('The two of you continue to argue about which position is better but in the end all you can do is agree to disagree.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
                        { label: 'I like cowgirl', handler: (st: GameState) => {
    scene.text('"I like being on top too," you say.');
    scene.text('"It must be in our blood," Anya giggles.');
    scene.text('"Couldn\'t it just be coincidence?"');
    scene.text('"Maybe. I wonder what mom\'s favorite position is?" she asks and both of you burst into laughter.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                        { label: 'I don\'t have a favorite position', handler: (st: GameState) => {
    scene.text('"Does the position really matter that much to you?" you ask. "It all pretty much feels the same to me, so I just do whatever the guy wants."');
    scene.text('"Seriously?" Anya looks at you with genuine surprise. "You really don\'t care?"');
    scene.text('"Not really," you say, shrugging again.');
    scene.text('"Missionary?"');
    scene.text('"I like it."');
    scene.text('"Doggy?"');
    scene.text('"It\'s different, I guess?"');
    scene.text('"Cowgirl?"');
    scene.text('"It\'s fun, but I get tired after a while."');
    scene.text('"Wow," Anya says, taken aback. "You might be the first person I\'ve met who doesn\'t have a favorite position."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                      ]);
                    } else {
                      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
                    }
                  } else {
                    if (((s as any).temp ?? 0) === 10) {
                      scene.img('images/pc/body/cum/creampie/cumpussy9.jpg');
                      scene.text('"I love riding bareback," Anya says. "But I hate it when guys cum inside me. It feels good in the moment, but it\'s such a chore to clean out afterwards!"');
                      if (((s as any).sisterknowslut ?? 0) > 0  &&  ((s as any).stat ?? 0)?.['total_creampies'] > 0) {
                        if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
                          scene.actions([
                            { label: 'Fear of pregnancy (dislike)', handler: (st: GameState) => {
    scene.text('"I\'m just afraid of getting knocked up," you shiver. "That fear is more of a turn off than any feeling so I always make them pull out."');
    scene.text('"Wait, you\'re not on birth control?!" your sister gasps. "Go get the pill from Aunt Luda! She won\'t tell mom, I promise, but mom will beat your ass with a broom if your belly starts rounding out! You can\'t trust guys with that shit! I can\'t tell you how many times Roma has came inside me even though he knows I hate it."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                            { label: 'Fear of pregnancy (like)', handler: (st: GameState) => {
    scene.text('"I actually like the feeling when a guy cums inside me," you say. "But I always make them pull out because I\'m afraid of getting knocked up."');
    scene.text('"Wait, you\'re not on birth control?!" your sister gasps. "Go get the pill from Aunt Luda! She won\'t tell mom, I promise, but mom will beat your ass with a broom if your belly starts rounding out! You can\'t trust guys with that shit! I can\'t tell you how many times Roma has came inside me even though he knows I hate it."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                          ]);
                        }
                        scene.actions([
                          { label: 'Creampies suck', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['panty_preference'] > 1) {
      scene.text('"It takes forever!" you moan. "And sometimes it gets so far up in there, it ends up coming out hours later, when you least expect it."');
    } else {
      scene.text('"It takes forever!" you moan. "And sometimes it gets so far up in there, it ends up coming out hours later, when you least expect it. There\'s nothing worse than walking around later and feeling something just <i>sploosh</i> into your panties."');
    }
    scene.text('"Sometimes I just sit on the toilet for half an hour and play with my phone while I wait for it to all drip out."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                          { label: 'That\'s why I use condoms', handler: (st: GameState) => {
    scene.text('"I just use condoms," you say. "No mess."');
    scene.text('"But then you don\'t get that skin on skin contact," Anya replies. "All you feel is rubber."');
    scene.text('"Small price to pay for easy waste disposal," you shrug.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                          { label: 'I don\'t mind', handler: (st: GameState) => {
    scene.text('"I don\'t mind," you shrug. "It\'s not <i>that</i> messy. Not enough to get annoyed about."');
    scene.text('"Seriously?" Anya asks. "I can\'t stand it! I feel so gross later if I find cum stains on my panties."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                          { label: 'I like creampies', handler: (st: GameState) => {
    scene.text('"I actually love creampies," you say. "They feel so good! It\'s my favorite thing when a guy cums inside me."');
    scene.text('"Agree to disagree," your sister replies, wrinkling her brow in disgust.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                        ]);
                      } else {
                        qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
                      }
                    } else {
                      if (((s as any).temp ?? 0) === 11) {
                        qspCall(s, 'sister_sex_talk', 'shave_talk');
                      } else {
                        if (((s as any).temp ?? 0) === 12) {
                          qspCall(s, 'sister_sex_talk', 'penetration_cum');
                        } else {
                          if (((s as any).temp ?? 0) === 13) {
                            qspCall(s, 'sister_sex_talk', 'anal_virginity');
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
  // TODO-QSP: end
  scene.build();
}

function enterSexTalkContinue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sisterQW ?? 0)?.['virgin_chat'] === 0  &&  ((s as any).sisterQW ?? 0)?.['ask_virgin'] !== ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['sister_sex_talk', 'virgin_ask'] }]);
  }
  if (((s as any).sisterQW ?? 0)?.['virgin_chat'] === 1) {
    if ((Math.floor(Math.random() * 4) + 0) === 2  &&  ((s as any).sisterQW ?? 0)?.['sexstyletalk'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['sister_sex_talk', 'style_preference'] }]);
    } else {
      if ((Math.floor(Math.random() * 4) + 0) === 3  &&  ((s as any).sisterQW ?? 0)?.['spitswallowtalk'] === 0  &&  ((s as any).stat ?? 0)?.['bj'] > 0) {
        scene.actions([{ label: 'Continue', goto: ['sister_sex_talk', 'spit_or_swallow'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Keep talking', goto: ['sister_chat', 'talking'] },
  ]);
  scene.build();
}

function enterVirginAsk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW ?? {})['ask_virgin'] = ((s as any).daystart ?? 0);
  scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
  // TODO-QSP: dynamic text: "What about you, <<$pcs_nickname>>? Have you popped your cherry yet?"
  scene.text(`"What about you, ${((s as any).pcs_nickname ?? 0)}? Have you popped your cherry yet?"`);
  if (((s as any).virgin_stats ?? 0)?.['taker_ID'] === 'A16') {
    scene.actions([
      { label: 'Tell Anya about Natasha', handler: (st: GameState) => {
    if ((!((s as any).sisterknowslut ?? 0))) {
      (s as any).sisterknowslut = 1;
    }
    ((s as any).sisterQW ?? {})['virgin_chat'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
    scene.text('You\'re excited about finally losing your virginity and jump on your sister\'s bed.');
    scene.text('She looks at you and grins. "No! You finally lost your V-card?!"');
    scene.text('You nod and she continues. "So? What was it like? What was <i>he</i> like? Do I know him?"');
    scene.text('You shake your head. "Well, it\'s not a him. It was with my girlfriend, Natasha."');
    scene.text('She pauses before she giggles. "What? A girl doesn\'t count!"');
    scene.text('You raise your voice, annoyed at her reaction. "It counts for me! I\'ve heard plenty of your stories about Roma. It\'s <i>my</i> turn now, but if you\'re not interested then I won\'t bother!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_07.jpg');
    // TODO-QSP: dynamic text: Anya clearly didn't expect your outburst. "Sorry <<$pcs_nickname>>, but sex with...
    scene.text(`Anya clearly didn't expect your outburst. "Sorry ${((s as any).pcs_nickname ?? 0)}, but sex with a girl doesn't count. You'll meet the right guy one day…"`);
    scene.text('You\'ve heard enough at this point. "Really?! Maybe you should look in the mirror there! <i>I like girls</i> and I shared a special moment with my <i>girlfriend</i>, but you\'re clearly not interested, so I\'m not going to waste my breath!"');
    scene.text('Before Anya can say anything, you storm out of the room, slamming the door behind you to prevent any further discussion.');
    scene.actions([
      { label: 'What about mother?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('Your thoughts drift to the fact that you\'ll need to deal with your mother…');
    scene.text('It\'s better to tell her yourself soon before she finds out from someone else.');
    scene.actions([
      { label: 'Remain in the hallway', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-15));
  }, goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === 'strapon') {
      scene.actions([
        { label: 'Tell Anya you\'ve lost your virginity', handler: (st: GameState) => {
    if ((!((s as any).sisterknowslut ?? 0))) {
      (s as any).sisterknowslut = 1;
    }
    ((s as any).sisterQW ?? {})['virgin_chat'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_05.jpg');
    scene.text('You\'re excited about finally losing your virginity and jump on your sister\'s bed.');
    scene.text('She looks at you and grins. "No! You finally lose your V-card?!"');
    scene.text('You nod and she continues. "So? What was it like? What was <i>he</i> like? Do I know him?"');
    scene.text('You shake your head. "Well, it\'s not a him. It was with my girlfriend."');
    scene.text('She pauses before she giggles. "What? A girl doesn\'t count!"');
    scene.text('You raise your voice, annoyed at her reaction. "It counts for me! I\'ve heard plenty of your stories about Roma. It\'s <i>my</i> turn now, but if you\'re not interested then I won\'t bother!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/characters/pavlovsk/resident/anya/home/sisboyqw_07.jpg');
    // TODO-QSP: dynamic text: Anya clearly didn't expect your outburst. "Sorry <<$pcs_nickname>>, but sex with...
    scene.text(`Anya clearly didn't expect your outburst. "Sorry ${((s as any).pcs_nickname ?? 0)}, but sex with a girl doesn't count. You'll meet the right guy one day…"`);
    scene.text('You\'ve heard enough at this point. "Well you\'re clearly not interested, so I\'m not going to waste my breath!"');
    scene.text('Before Anya can say anything, you storm out of the room, slamming the door behind you to prevent any further discussion.');
    scene.actions([
      { label: 'What about mother?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    scene.img('images/locations/pavlovsk/resident/apartment/home/korrpar.jpg');
    scene.text('Your thoughts drift to the fact that you\'ll need to deal with your mother…');
    scene.text('It\'s better to tell her yourself soon before she finds out from someone else.');
    scene.actions([
      { label: 'Remain in the hallway', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A33', (-15));
  }, goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.actions([
          { label: 'Saving for marriage', handler: (st: GameState) => {
    scene.text('You shake your head. "No, I\'m saving myself for marriage."');
    scene.text('"Aww! That\'s so cute!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
          { label: 'Saving for marriage (embarrassed)', handler: (st: GameState) => {
    scene.text('You shake your head while blushing hard. "Not yet. I… I want to save myself for marriage…"');
    scene.text('"Aww! That\'s so cute!"');
    scene.text('Your sister gushes over you, making you blush even harder.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
          { label: 'Waiting for the right guy', handler: (st: GameState) => {
    scene.text('You shake your head. "Not yet. I really want to, but I don\'t want to do it with just anybody. I guess I\'m waiting for the right guy."');
    scene.text('Your sister nods. "That\'s for the best. It\'s how it was with me too. But I also let people fuck my ass," she grins.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
          { label: 'I don\'t want to upset <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You shake your head. "Not yet. I don't want to upset <<$npc_nickname['A29']>>, s...
    scene.text(`You shake your head. "Not yet. I don't want to upset ${((s as any).npc_nickname ?? 0)?.['A29']}, so I'm holding off."`);
    scene.text('Your sister nods. "That\'s probably a good idea. Mom was <i>pissed</i> when she found out I lost my virginity, but not as pissed as when she went to spank me and saw my asshole…"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
          { label: 'I don\'t want to deal with <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Not yet," you say with a huff. "I want to, but with <<$npc_nickname['A29']>> br...
    scene.text(`"Not yet," you say with a huff. "I want to, but with ${((s as any).npc_nickname ?? 0)?.['A29']} breathing down my neck, I don't want to deal with it when she finds out."`);
    scene.text('Your sister nods. "That\'s probably a good idea. Mom was <i>pissed</i> when she found out I lost my virginity, but not as pissed as when she went to spank me and saw my asshole…"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
        ]);
      } else {
        if ((!((s as any).sisterknowslut ?? 0))) {
          (s as any).sisterknowslut = 1;
        }
        ((s as any).sisterQW ?? {})['virgin_chat'] = 1;
        scene.actions([
          { label: 'Yes (embarrassed)', handler: (st: GameState) => {
    scene.text('You hesitate for a moment, but that\'s all it takes for your sister to catch on.');
    scene.text('"Oh my god! You have!" Your face flushes with heat as Anya scoots over on the bed, getting close to you. "So? How was it? Your first time?"');
    qspCall(s, 'sister_sex_talk', 'first_time');
  } },
          { label: 'Yes (neutral)', handler: (st: GameState) => {
    scene.text('"Mhmm," you nod. "I lost it a little while ago."');
    scene.text('Anya\'s eyes brighten and she scoots over on the bed, getting close to you. "So? How was it? Your first time?"');
    qspCall(s, 'sister_sex_talk', 'first_time');
  } },
          { label: 'Yes (excited)', handler: (st: GameState) => {
    scene.text('"Yes!" you nod vigorously with obvious excitement. "I finally had sex with someone!"');
    scene.text('"That\'s great!" she says as she scoots over on the bed, getting close to you. "So? How was it? Your first time?"');
    qspCall(s, 'sister_sex_talk', 'first_time');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['vaginal'] >= 1) {
    scene.actions([
      { label: 'It really hurt', handler: (st: GameState) => {
    scene.text('"It was…" You wince as the memory comes back to you. "It actually hurt a lot. Seriously, it was so painful, I thought I was going to die!"');
    scene.text('"I have a few girlfriends who said their first time was like that too," Anya says, nodding sagely. "My first time, there was a little prick of pain, but I only remember feeling good after that."');
    scene.text('"You were lucky then," you say, pouting as Anya laughs.');
    // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>. They all said that it gets a lot better after th...
    scene.text(`"Don't worry ${((s as any).pcs_nickname ?? 0)}. They all said that it gets a lot better after the first time. You just need a little more pussy practice."`);
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It was okay', handler: (st: GameState) => {
    scene.text('"It was… okay?" you say, shrugging. "It didn\'t hurt, but it didn\'t really feel good either. It was just like having a \'thing\' inside me. I don\'t really understand why everybody seems to like this so much."');
    scene.text('"You just need to do it a few more times," she says insistently. "Get your pussy used to being fucked and then you\'ll enjoy it more. Maybe try it with a different boy? Not all of them are great in bed. You could have just gotten unlucky."');
    scene.text('"Maybe…"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It was great', handler: (st: GameState) => {
    scene.text('"It was <i>amazing</i>," you gush. "Being connected with someone like that, feeling filled up and stretched out, it was like finally getting to scratch an itch I never even knew I had!"');
    scene.text('"Right?" Anya grins, sharing in your excitement. "Makes you wonder how you lived your life without getting dicked, doesn\'t it?"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['vaginal'] > 1) {
    scene.actions([
      { label: 'First time was painful, better the second time', handler: (st: GameState) => {
    scene.text('"My first time <i>sucked</i>," you say, grimacing. "It actually hurt a lot. Seriously. It was so painful I thought I was going to die! The second time was a lot better, but fuck me! That first time hurt!"');
    scene.text('"I have a few girlfriends who said their first time was like that too," Anya says, nodding sympathetically. "My first time, there was a little prick of pain when he put it in, but I only remember feeling good after that."');
    scene.text('"Lucky!" you say. "I had to work for my good feeling down there!"');
    scene.text('"Oh, I got lucky all right," she winks back at you.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'First time was okay, but got better', handler: (st: GameState) => {
    scene.text('"It was… okay?" you say, shrugging. "It didn\'t hurt, but it didn\'t really feel good either. It took a few more times before I really started to enjoy it."');
    scene.text('"Really?" Anya asks quizzically. "For my first time, there was a little prick of pain at the beginning, but I only remember feeling good after that."');
    scene.text('"I guess my pussy just needed to get used to having a dick inside it?"');
    scene.text('You both look at each other and shrug about the mysteries of human anatomy.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  }
  if (((s as any).virgin_stats ?? 0)?.['cock_size'] >= 15) {
    scene.actions([
      { label: 'He was big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/blood1.jpg');
    if (((s as any).virgin_stats ?? 0)?.['cock_size'] <= 19) {
      scene.text('"He was <i>big</i>," you say, eyeing Anya meaningfully. "He barely fit the whole thing inside me."');
    } else {
      scene.text('"He was <i>big</i>," you say, eyeing Anya meaningfully. "Like, <i>really big</i>. He couldn\'t even completely fit inside me."');
    }
    scene.text('Your sister pulls her lips back into a sympathetic grimace.');
    scene.text('"Ooooh. Ouch. I have a friend who lost her virginity to a guy with a big cock. She said it still hurt a week later."');
    scene.actions([
      { label: 'It hurt', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    if (((s as any).virgin_stats ?? 0)?.['day_lost'] > ((s as any).daystart ?? 0) - 7  &&  ((s as any).pain ?? 0)?.['vaginal'] > 0) {
      scene.text('"That sounds about right," you wince. "My pussy is still sore now…"');
    } else {
      scene.text('"You have no idea," you say. "I thought I was going to be torn in half!"');
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It felt good', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('"Actually… It felt pretty good…" you admit. "It hurt at first, but once I got used to his size it was <i>amazing</i>. It was like my entire body was being filled with his cock."');
    scene.text('"Hopefully you haven\'t been spoiled for life," she smirks in amusement. "Most guys aren\'t very big. Really disappointing when you find out what\'s considered average."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShaveTalk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
  scene.text('"I shave my pussy clean, but I hate doing it," Anya grumbles. "If it were up to me, I\'d go full bush, but boys are so picky and needy! I tried shaving it only part way once and gave myself a little landing strip, but even that stopped a boy from going down on me!"');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } else {
    scene.actions([
      { label: 'Clean shaving is dumb', handler: (st: GameState) => {
    if (((s as any).pube_style ?? 0)?.['word'] === 'trimmed') {
      scene.actions([
        { label: 'I just trim', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['think_virgin'] !== 1) {
      scene.text('"I trim anyways," you shrug. "It\'s not up to boys whether or not I have hair down there. They want to fuck my pussy? They have to deal with the fur. Otherwise they can just go fuck themselves."');
      scene.text('"I wish I had that kind of confidence," your sister smiles back ruefully. "But Roma likes it this way, so even if it weren\'t for other boys, I\'d still keep doing it for him."');
    } else {
      scene.text('"I trim anyways," you shrug. "Who cares what other people think? I like having hair down there."');
      scene.text('"You say that now, but wait until you start spending more time with boys," your sister smiles back ruefully. "It\'s hard to ignore when you really want their approval."');
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      ]);
    }
    if (((s as any).pube_style ?? 0)?.['word'] === 'bush'  ||  ((s as any).pube_style ?? 0)?.['word'] === 'untrimmed') {
      scene.actions([
        { label: 'I go full bush', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['think_virgin'] !== 1) {
      scene.text('"I don\'t care what other people say, I go full bush anyways," you shrug. "It\'s my bush, so I\'ll do what I want. They want to fuck my pussy? They have to deal with the fur. Otherwise they can just go fuck themselves."');
      scene.text('"I wish I had that kind of confidence," your sister smiles back ruefully. "But Roma likes it this way, so even if it weren\'t for other boys, I\'d still keep doing it for him."');
    } else {
      scene.text('"That sucks," you say. "I hate shaving too so I just let it grow out."');
      scene.text('"Ugh! I\'m so jealous!" your sister smiles back wistfully.');
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['think_virgin'] !== 1) {
      scene.actions([
        { label: 'I feel the same way', handler: (st: GameState) => {
    scene.text('"I know what you mean," you nod sympathetically. "I hate shaving too, but I know how much boys love it so I do it anyway."');
    if (((s as any).brotherQW ?? 0)?.['Sex'] >= 7) {
      // TODO-QSP: $OpenInnerThought + 'One boy in particular…' + $CloseInnerThought + ' you add to yourself silently, ...
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
        { label: 'Boys are dumb', handler: (st: GameState) => {
    scene.text('"Boys are dumb like that," you roll your eyes, commiserating with your sister. "We\'re expected to put smelly sweaty cocks in our mouths, but a little bit of hair down there and suddenly it\'s all \'why don\'t you shave?\'"');
    scene.text('"Exactly!" she exclaims. "Although… I have to admit, I kind of like the taste of sweaty cock."');
    scene.text('You both giggle at that.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      ]);
    }
  } },
      { label: 'Disagree', handler: (st: GameState) => {
    scene.actions([
      { label: 'I don\'t mind', handler: (st: GameState) => {
    scene.text('"I don\'t really mind one way or the other," you shrug. "If boys like it, I\'m happy to do it. What\'s ten more minutes in the shower?"');
    scene.text('"It\'s such a chore!" your sister moans. "My neck hurts by the time I\'m done."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Bush is unfashionable', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['think_virgin'] !== 1) {
      scene.text('"But a bush is so unfashionable!" you reply. "Don\'t you know? Clean-shaven is all the rage."');
    } else {
      scene.text('"But a bush is so unfashionable!" you reply. "I haven\'t even had sex yet and I know to keep my pussy shaved."');
    }
    scene.text('"Believe me, I know," your sister rolls her eyes. "I should\'ve been born in the 60s when nobody cared."');
    scene.text('You both laugh at that.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Prefer shaving', handler: (st: GameState) => {
    scene.text('"Really?" you ask. "I prefer shaving. I hate having itchy scratchy stubbly hair down there."');
    scene.text('"It wouldn\'t be scratchy and stubbly if you let it grow out," your sister retorts.');
    scene.text('"Been there, done that. I\'ll keep my road paved and avoid the jungle cruise."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPenetrationCum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/vagcow2.jpg');
  if ((!((s as any).sisterknowslut ?? 0))) {
    scene.text('"I was talking with my girlfriends recently," your sister tells you. "And I found out that most of them can\'t orgasm just from getting fucked. That totally blew my mind. I\'ve always been able to cum from penetration alone. I can\'t imagine what it would be like if I couldn\'t."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } else {
    scene.text('"I was talking with my girlfriends recently," your sister tells you. "And I found out that most of them can\'t orgasm just from getting fucked. Apparently it\'s kind of rare? Can you come from penetration only?"');
    if ((!((s as any).orgasm ?? 0))) {
      scene.text('"I wouldn\'t know," you reply. "I\'ve never had an orgasm before…"');
      scene.text('Her jaw drops. "Are you serious?!"');
      scene.text('"Turns out that most guys just aren\'t that good at sex," you say wistfully.');
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    } else {
      scene.text('You nod. "Yeah. I can orgasm only from penetration too."');
      scene.text('"I can\'t imagine what it would be like if I couldn\'t. We must have good genes or something," Anya giggles.');
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalVirginity(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/anal23.jpg');
  scene.text('"Two of my best friends both got their cherry popped by a guy we all hang out with. He was about <i>this close</i> to talking me into giving up mine, but I changed my mind at the last second. I would\'ve let him, but I was still too scared of mom finding out, so I let him fuck my ass instead!" your sister giggles. "Turns out, that was his first ass fucking too. Made me feel special."');
  qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  // TODO-QSP: end
  scene.build();
}

function enterBlackSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/anya/sex/sister8.jpg');
  if (((s as any).DjibrilQW ?? 0)?.['anya_gangbang_count'] !== 0) {
    scene.text('"I can\'t believe I got gangbanged by a bunch of black guys!" she exclaims. "And here I was imagining what it would be like with <i>one</i>!"');
    scene.text('"It was good though, right?" you grin.');
    scene.text('She grins back. "Oh god yes! Having all those big black cocks in all my holes felt <i>amazing</i>!"');
    scene.text('You laugh before the two of you talk about what it was like and why it\'s taboo.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } else {
    if (((s as any).OluQW ?? 0)?.['anya_count'] !== 0) {
      scene.text('"I can\'t believe I <i>actually</i> had sex with a black guy!" she exclaims. "And with my <i>aunt\'s boyfriend</i> none the less! His cock was <i>so</i> fucking big!"');
      scene.text('"I know, right?" you grin. "How did it feel?"');
      scene.text('She grins back. "Oh god, it felt <i>amazing</i>! I didn\'t even know that a cock could be that big! How does he fit that thing in his pants never mind a pussy?"');
      scene.text('You laugh before the two of you talk about what it was like and why it\'s taboo.');
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    } else {
      if (((s as any).DjibrilQW ?? 0)?.['anya_count'] !== 0) {
        // TODO-QSP: dynamic text: "Getting fucked by Djibril was a great way to satisfy my curiosity about black g...
        scene.text(`"Getting fucked by Djibril was a great way to satisfy my curiosity about black guys. Thanks for introducing me to him, ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('"Anything for my big slut of a big sister," you reply with a grin.');
        scene.text('"Hey!" she giggles and you laugh before the two of you talk about what it was like and why it\'s taboo.');
        qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
      } else {
        scene.text('"Something I\'ve always been curious about is what it\'s like to fuck a black guy," Anya admits. "I want to know what it\'s like to have a big black cock in my mouth, what it feels like inside my pussy, and…" She starts blushing. Even she\'s apparently a little embarrassed about what she wants. "… I want him to pound my ass. Do you ever fantasize about it too?"');
        if (((s as any).OluQW ?? 0)?.['sex'] === 1  &&  ((s as any).OluQW ?? 0)?.['anya_inv'] === 0) {
          scene.actions([
            { label: 'Tell her about Olu', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You tell her that you\'ve been having sex with Olu, your aunt\'s boyfriend. She\'s shocked at first until you explain that your aunt knows all about it and even asked for help satisfying him.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    if (((s as any).OluQW ?? 0)?.['anya_inv'] === 0) {
      scene.actions([
        { label: 'Ask if she wants to join', handler: (st: GameState) => {
    ((s as any).OluQW ?? {})['anya_inv'] = 1;
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('"Would you like to come up with me next time I visit him?" you ask.');
    scene.text('She thinks about it for a moment, then grins and nods. "Yes, I think I would. You know, just to try it…" she says while blushing.');
    scene.text('You promise to text her next time you\'re going up. "Okay, I\'ll let you know and tell him."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).npc_had_sex ?? 0)?.['A82']  &&  ((s as any).DjibrilQW ?? 0)?.['anya_inv'] === 0) {
            scene.actions([
              { label: 'Tell her about Djibril', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You tell her about meeting Olu\'s nephew Djibril and having sex with him. She asks a lot of questions, which you answer as the two of you talk for some time, giggling about the details.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    scene.actions([
      { label: 'Ask if she wants to join you', handler: (st: GameState) => {
    ((s as any).DjibrilQW ?? {})['anya_inv'] = 1;
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('"Would you like to come up with me next time I go?" you ask.');
    scene.text('She thinks about it for a moment, then grins and nods. "Yes, I think I would. You know, just to try it…" she says while blushing.');
    scene.text('"Okay, next time I\'m going to the city to see him, I\'ll let you know."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).DjibrilQW ?? 0)?.['african_gangbang'] > 0  &&  ((s as any).DjibrilQW ?? 0)?.['anya_inv'] < 2) {
              scene.actions([
                { label: 'Tell her about the dorm', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You tell her about Djibril and his African college friends in the dorm and how you let them all fuck you at the same time. She\'s shocked at first, but as you keep talking, she starts to ask questions and seems to start getting curious.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    scene.actions([
      { label: 'Ask if she wants to join you', handler: (st: GameState) => {
    ((s as any).DjibrilQW ?? {})['anya_inv'] = 2;
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('"Would you like to come up with me next time I go?" you ask.');
    scene.text('She thinks about it for a moment, then grins and nods. "Yes, I think I would. You know, just to try it…" she says while blushing.');
    scene.text('"Okay, next time I\'m going to the city to see them, I\'ll let you know."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).npc_had_sex ?? 0)?.['A146']) {
                scene.actions([
                  { label: 'Tell her about Marcus', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You tell her about Marcus and how you\'ve been having sex with him. Her eyes grow wide and she starts asking all kinds of questions. You tell her how big he is and start getting into details.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
                ]);
              }
            }
          }
        }
        scene.actions([
          { label: 'Tell her you don\'t', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You shake your head. "Eww! Don\'t you have a boyfriend?"');
    scene.text('She sighs. "Yes, but if we ever break up…"');
    scene.text('She then awkwardly drops the topic.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
          { label: 'Tell her you want to', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
    scene.text('You grin at that imagery as well. "Oh god yes! There\'s a boy in my class who is from America. He\'s tall, well built and as dark skinned as I have ever seen."');
    scene.text('She laughs. "Why don\'t you hit on him then? I\'m sure he\'d be eager to show you what it\'s like…"');
    scene.text('You laugh before the two of you talk about what it would be like and why it\'s taboo.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStylePreference(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW ?? {})['sexstyletalk'] = 1;
  scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
  scene.text('"Do you prefer rough sex or gentle sex?" Anya asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gentle', handler: (st: GameState) => {
    scene.text('"I like it gentle," you reply. "I don\'t like feeling like I\'m getting fucked to death. When it\'s slow and gentle, I can feel everything and concentrate on it."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    { label: 'Rough', handler: (st: GameState) => {
    scene.text('"I like it rough," you reply while blushing slightly. "If he\'s not pounding me, then I just can\'t get into it."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    { label: 'Whatever he wants', handler: (st: GameState) => {
    scene.text('"I\'m not really fussed either way," you shrug. "I like both, so I\'ll let the guy set the pace."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
  ]);
  scene.build();
}

function enterSpitOrSwallow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sisterQW ?? {})['spitswallowtalk'] = 1;
  scene.img('images/characters/pavlovsk/resident/anya/home/sister_chat.jpg');
  scene.text('"When you blow a guy, do you spit or swallow?" Anya asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit', handler: (st: GameState) => {
    scene.actions([
      { label: 'It tastes funny', handler: (st: GameState) => {
    scene.text('"Spit," you reply while wrinkling your nose. "It tastes funny."');
    scene.text('"I didn\'t used to like it either," your sister admits. Her cheeks redden slightly as she continues. "Boys in school always asked me to do it, but I refused until I met Roma. At first I did it just because I loved him, but after a while I started to like it. Once you get used to it, you start to crave it. Now, I\'ll even lick it up off the bed!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It tastes gross', handler: (st: GameState) => {
    scene.text('"Spit," you say, looking at your sister in disgust. "It\'s so gross! I can\'t believe anybody likes swallowing."');
    scene.text('"I didn\'t used to like it either," your sister admits. Her cheeks redden slightly as she continues. "Boys in school always asked me to do it, but I refused until I met Roma. At first I did it just because I loved him, but after a while I started to like it. Once you get used to it, you start to crave it. Now, I\'ll even lick it up off the bed!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It feels weird', handler: (st: GameState) => {
    scene.text('"Spit," you say a little ambivalently. "I don\'t mind the taste, but the texture is just too weird. It feels like I\'m swallowing snot." You shudder in discomfort.');
    scene.text('"I didn\'t used to like it either," your sister admits. Her cheeks redden slightly as she continues. "Boys in school always asked me to do it, but I refused until I met Roma. At first I did it just because I loved him, but after a while I started to like it. Once you get used to it, you start to crave it. Now, I\'ll even lick it up off the bed!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
    { label: 'Swallow', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
      // TODO-QSP: end !}
      scene.actions([
        { label: 'I love the taste of cum', handler: (st: GameState) => {
    scene.text('"Swallow," you grin. "It tastes so good, I can\'t resist swallowing every time."');
    scene.text('"Right?!" your sister nods enthusiastically. "I can\'t believe some girls don\'t like it."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      ]);
    }
    scene.actions([
      { label: 'Spitting is quitting', handler: (st: GameState) => {
    scene.text('"Spitting is quitting," you say with a little bit of pride.');
    scene.text('"A waste of tasty protein too," your sister laughs.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Boys like it', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.text('"Swallow," you admit. "I\'ve gotten used to the taste, so I don\'t care one way or the other, but boys think it\'s hot, so I do it anyways."');
      scene.text('"Don\'t worry, you\'ll like it soon enough," your sister assures you. "And trust me, they can tell if you like it or not. You\'ll be so much sexier."');
    } else {
      scene.text('"Swallow," you admit. "I don\'t really like it, but boys think it\'s hot, so I do it anyway."');
      scene.text('"Don\'t worry, you\'ll like it soon enough," your sister assures you. "And trust me, they can tell if you like it or not. You\'ll be so much sexier."');
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'Swallow (makes me feel sexy)', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.text('"Swallow," you grin. "The taste is hit or miss depending on the guy, but it makes me feel like a goddess. I love seeing the look on his face when I gulp down his load."');
    } else {
      scene.text('"Swallow," you admit. "The taste isn\'t that great, but it makes me feel like a goddess. I love watching his face when I gulp down his load."');
    }
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
    { label: 'I don\'t like blowjobs', handler: (st: GameState) => {
    scene.text('"I hate blowjobs," you say, crinkling your nose.');
    scene.text('"Really?" Your sister looks back at you with surprise. "I love giving head! What don\'t you like about it?"');
    scene.actions([
      { label: 'The taste', handler: (st: GameState) => {
    scene.text('"The taste is awful!" you grimace. "You know guys never clean up down there and just putting my tongue on some unwashed cock makes me want to gag."');
    scene.text('"It\'s a bit of an acquired taste," she admits. "But if you just keep doing it, you\'ll get used to it. I actually kind of love the taste of cock now. It\'s very manly."');
    scene.text('"Ew," you say, giving her a look.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'The smell', handler: (st: GameState) => {
    scene.text('"It\'s the smell I can\'t stand," you grimace. "Guys never wash down there and you can just smell <i>everything</i> down there. It\'s such a huge turn off."');
    scene.text('"Really? I don\'t mind. It kind of turns me on actually…"');
    scene.text('"Ew," you say, giving her a look.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'The motion', handler: (st: GameState) => {
    scene.text('"It hurts," you complain. "Keeping my mouth in that position makes my jaw ache. Even worse if the guy is big. And bobbing my head up and down makes my neck cramp up."');
    scene.text('"Ouch," she winces back. "I guess I can\'t blame you for that. Never bothered me though. Maybe I\'ve just sucked so much cock that I built up the muscles!"');
    scene.text('You both laugh at that.');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
      { label: 'It\'s just gross', handler: (st: GameState) => {
    scene.text('"It\'s just gross," you grimace. "It\'s a guy\'s dick <b>in my mouth</b>. I can\'t stop thinking about it! How can you love it?"');
    scene.text('She shrugs. "It\'s not any different than having his dick in my pussy or up my ass. I guess it just doesn\'t bother me the way it bothers you."');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sex_talk1':
      enterSexTalk1(s, scene);
      break;
    case 'sex_talk_continue':
      enterSexTalkContinue(s, scene);
      break;
    case 'virgin_ask':
      enterVirginAsk(s, scene);
      break;
    case 'first_time':
      enterFirstTime(s, scene);
      break;
    case 'shave_talk':
      enterShaveTalk(s, scene);
      break;
    case 'penetration_cum':
      enterPenetrationCum(s, scene);
      break;
    case 'anal_virginity':
      enterAnalVirginity(s, scene);
      break;
    case 'black_sex':
      enterBlackSex(s, scene);
      break;
    case 'style_preference':
      enterStylePreference(s, scene);
      break;
    case 'spit_or_swallow':
      enterSpitOrSwallow(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sister_sex_talk: LocationDef = {
  name: 'sister_sex_talk',
  title: '"Roma is <i>so</i> good in bed!" she says proudly. "He can d',
  region: 'other',
  enter: enter,
};
