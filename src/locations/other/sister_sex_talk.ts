import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (0);
  (s as any).temp = Math.floor(Math.random() * 13) + 1;
  if (((s as any).temp ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister1.jpg');
    scene.text('"Roma is <i>so</i> good in bed!" she says proudly. "He can do this thing with his hips to rub his dick against my g-spot and it makes me cum every time. He can do it in any position too!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
  } else {
    scene.img('images/characters/pavlovsk/resident/anya/sex/sister2.jpg');
    scene.text('"One time, for my friend\'s birthday, I was kind of tight on money so decided to give him a blowjob. Only, it turns out, another girl had the same idea. So we <i>both</i> sucked him off. At the same time. I bet that\'s the best birthday present he\'ll ever get!"');
    qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    if (((s as any).temp ?? 0) === 3) {
      scene.img('images/characters/pavlovsk/resident/anya/sex/sister3.jpg');
      if (((s as any).sisterknowslut ?? 0) > 0) {
        scene.text('"I love taking it up the ass," Anya confesses to you. "I really wanted to fuck someone, but with those monthly gyno checks, I knew I was gonna get the belt if I came home with a broken hymen. So I went with the only option I had: anal! It hurt the first few times, but once my ass got used to it, I started to love it. Even now, I still love it! You should try it too if you don\'t want to get in trouble. Or stick to blowjobs."');
      } else {
        scene.text('"I love taking it up the ass," Anya confesses to you. "I really wanted to fuck someone, but with those monthly gyno checks, I knew I was gonna get the belt if I came home with a broken hymen. So I went with the only option I had: anal! It hurt the first few times, but once my ass got used to it, I started to love it. Even now, I still love it! It\'s not as good as vaginal sex, but the occasional assfuck keeps things spicy."');
      }
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
    } else {
      scene.img('images/characters/pavlovsk/resident/anya/sex/sister4.jpg');
      scene.text('"One time I was blowing Roma and he came without warning me," your sister says. "I don\'t know what happened, but I swallowed on instinct and decided to keep on sucking. Every load that came out, I kept swallowing until I had sucked him completely dry. You should have seen his face! I think I blew his mind with that!"');
      qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
      if (((s as any).temp ?? 0) === 5) {
        scene.img('images/characters/pavlovsk/resident/anya/sex/sister5.jpg');
        scene.text('"When I was still in school, I had this friend I would sometimes study with after class. He\'d always help me with my homework and in return, I\'d let him fuck my ass. Win win!" she grins at you.');
        qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
      } else {
        scene.img('images/characters/pavlovsk/resident/anya/sex/sister6.jpg');
        scene.text('"One of the things I love the most is when I\'m giving a guy a blowjob and he suddenly takes over. When he grabs me by the hair and shoves his cock down my throat and face fucks me—"');
        scene.text('She starts shivering. "I\'m getting wet just thinking about it…"');
        qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
        if (((s as any).temp ?? 0) === 7) {
          scene.img('images/characters/pavlovsk/resident/anya/sex/sister7.jpg');
          scene.text('"There was this one time I was at a party and things started getting really wild. I was fucking this guy, but another one also wanted to fuck me so I started to blow him. It\'s actually pretty fun to suck on a cock while you\'re being fucked, but I guess he got impatient or something cause he got behind me and mounted my ass. <i>Ho-ly shit.</i> I almost came right then. Double penetration became my new fetish that night. If you can ever get two guys to fuck you at the same time, you <i>have</i> to try it!"');
          qspCall(s, 'sister_sex_talk', 'sex_talk_continue');
        } else {
          scene.actions([{ label: 'Continue', goto: ['sister_sex_talk', 'black_sex'] }]);
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
            if (((s as any).temp ?? 0) === 11) {
              qspCall(s, 'sister_sex_talk', 'shave_talk');
            } else {
              qspCall(s, 'sister_sex_talk', 'penetration_cum');
              if (((s as any).temp ?? 0) === 13) {
                qspCall(s, 'sister_sex_talk', 'anal_virginity');
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const sister_sex_talk: LocationDef = {
  name: 'sister_sex_talk',
  title: '"Roma is <i>so</i> good in bed!" she says proudly. "He can d',
  region: 'other',
  enter: enter,
};
