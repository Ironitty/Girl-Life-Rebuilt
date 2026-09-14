import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).kisvrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/cinema/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> buy your tickets, drinks, and popcorn. With that done you he...
  scene.text(`You and ${((s as any).telsob || '')} buy your tickets, drinks, and popcorn. With that done you head into the theater where your movie is showing.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Watch the movie', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
        if (((s as any).kisvrand ?? 0) <= 4) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
        }
        if (((s as any).kisvrand ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
        }
        if (((s as any).kisvrand ?? 0) >= 6) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
      }
    } else {
      if (((s as any).telsob ?? 0) === 'Masha') {
        (s as any).masha = ((s as any).masha ?? 0) + (1);
        if (((s as any).masha ?? 0) >= 20) {
          (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
          if (((s as any).kisvrand ?? 0) <= 4) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
          }
          if (((s as any).kisvrand ?? 0) === 5) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
          }
          if (((s as any).kisvrand ?? 0) >= 6) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        }
      } else {
        if (((s as any).telsob ?? 0) === 'Kate') {
          qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
          if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
            (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
            if (((s as any).kisvrand ?? 0) <= 4) {
              scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
            }
            if (((s as any).kisvrand ?? 0) === 5) {
              scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
            }
            if (((s as any).kisvrand ?? 0) >= 6) {
              scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
          }
        } else {
          if (((s as any).telsob ?? 0) === ((s as any).npcdesc ?? 0)) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
            if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
              scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
            } else {
              (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
              if (((s as any).kisvrand ?? 0) <= 4) {
                scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
              } else {
                if (((s as any).kisvrand ?? 0) === 5) {
                  scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
                }
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/1.jpg');
  // TODO-QSP: dynamic text: With some playful flirting, you settle into your seats ready to watch the movie ...
  scene.text(`With some playful flirting, you settle into your seats ready to watch the movie and notice it is almost completely empty. While you're engrossed in the movie, ${((s as any).telsob || '')} takes the opportunity to "accidentally" drop some popcorn down your top.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Oh, my', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cinema/2.jpg');
    scene.text('"I\'m so clumsy. Let me help you clean that up", she whispers.');
    // TODO-QSP: dynamic text: <<$telsob>> glides her hand under your shirt slowly gathering up bits of popcorn...
    scene.text(`${((s as any).telsob || '')} glides her hand under your shirt slowly gathering up bits of popcorn. Her slow sensual caress isn't part of any popcorn removal technique, but it has its intended effect of making you breathe heavy. To give her better access you slowly lift your shirt, exposing your bare midriff all the way to the bottom of your breasts.`);
    // TODO-QSP: dynamic text: <<$telsob>> looks around the theater, and seeing that the two of you are alone s...
    scene.text(`${((s as any).telsob || '')} looks around the theater, and seeing that the two of you are alone says: "It would be a shame to waste this popcorn, when it is sitting on such a lovely plate." With that, she leans down to gather popcorn with her lips and tongue.`);
    qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Show her your backside', goto: ['kinosvid', '110'] },
      { label: 'Enjoy it', goto: ['kinosvid', '10'] },
      { label: 'Pleasure her', goto: ['kinosvid', '11'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/3.jpg');
  // TODO-QSP: dynamic text: Soon the popcorn is long forgotten, as <<$telsob>> works her way down between yo...
  scene.text(`Soon the popcorn is long forgotten, as ${((s as any).telsob || '')} works her way down between your legs. Her expert tongue along with the thrill of doing this in a movie theater brings you to orgasm almost immediately.`);
  scene.text('The devilish look she gives you tells you she isn\'t done with you yet.');
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue to enjoy it', handler: (st: GameState) => {
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    scene.img('images/characters/city/boyfriend/sex/event/cinema/4.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> continues to massage your clitoris with her tongue, as she slowly wo...
    scene.text(`${((s as any).telsob || '')} continues to massage your clitoris with her tongue, as she slowly works the first of her fingers inside you. Working gently, she adds fingers one at a time until you are wrapped around her entire hand. The feeling is so intense that she brings you to a second orgasm, which runs though your entire body.`);
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'arousal', 'vaginal_finger', (-10), 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'It\'s her turn', goto: ['kinosvid', '13'] },
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
    { label: 'Show her your backside', goto: ['kinosvid', '110'] },
    { label: 'It\'s her turn', goto: ['kinosvid', '12'] },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/5.jpg');
  // TODO-QSP: dynamic text: You rise up from your chair, lifting <<$telsob>>'s shirt as you go. Your mouth f...
  scene.text(`You rise up from your chair, lifting ${((s as any).telsob || '')}'s shirt as you go. Your mouth finds one of her nipples, while you work your hand down her pants. After a minute of working your hand, ${((s as any).telsob || '')} lets out a load moan, soaking your hand with her juices.`);
  scene.text('This girl is driving you wild. It\'s time to get her pants off.');
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lick her pussy', goto: ['kinosvid', '14'] },
    { label: 'Lick her ass', goto: ['kinosvid', '15'] },
    { label: 'It\'s you turn', goto: ['kinosvid', '16'] },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/6.jpg');
  // TODO-QSP: dynamic text: You slide down in you seat, and motion <<$telsob>> upward. She quickly realizes ...
  scene.text(`You slide down in you seat, and motion ${((s as any).telsob || '')} upward. She quickly realizes what you want, and straddles your face. You raise your tongue up to meet her dripping wet pussy, and begin to lick.`);
  // TODO-QSP: dynamic text: After a few minutes <<$telsob>> starts breathing heavy, and frantically grinding...
  scene.text(`After a few minutes ${((s as any).telsob || '')} starts breathing heavy, and frantically grinding her crotch against your face, which is then covered by her additional wetness. She let's out a few plaintive moans, before finally coming to a stop.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/7.jpg');
  // TODO-QSP: dynamic text: You kneel down between <<$telsob>>'s legs, and gently lap at her folds. As you r...
  scene.text(`You kneel down between ${((s as any).telsob || '')}'s legs, and gently lap at her folds. As you reach her clitoris, thinking she might like the same thing, you gently begin to insert fingers one by one. Eventually she is stretched enough to envelope your entire hand. This brings a loud cry of pleasure from her, as her body shakes with an orgasm.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show her your backside', goto: ['kinosvid', '110'] },
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter14(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/8.jpg');
  // TODO-QSP: dynamic text: You guide her to the chair, and pull her pants down around her knees. She reache...
  scene.text(`You guide her to the chair, and pull her pants down around her knees. She reaches back to pull her panties aside, giving you access to her glistening sex. You give her a few long slow licks, before you focus her clitoris. When you do, ${((s as any).telsob || '')} pushes her backside against you, moaning for more.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep going', goto: ['kinosvid', '17'] },
  ]);
  scene.build();
}

function enter15(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/9.jpg');
  // TODO-QSP: dynamic text: You guide her to the chair, and pull her pants down around her knees. She reache...
  scene.text(`You guide her to the chair, and pull her pants down around her knees. She reaches back to pull her panties aside, giving you access to her cute little hole. You give her a few teasing licks between her cheeks, before your tongue finds its way to her hole. When it does, ${((s as any).telsob || '')} gasps, and reaches back to hold your head begging for more.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go further', goto: ['kinosvid', '17'] },
  ]);
  scene.build();
}

function enter16(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/11.jpg');
  // TODO-QSP: dynamic text: Deciding that it's your turn, you gently push <<$telsob>> to her knees. She eage...
  scene.text(`Deciding that it's your turn, you gently push ${((s as any).telsob || '')} to her knees. She eagerly drops down looking up at you with lust, as you unbutton your pants for her. When you expose your pussy for her, she rushes forward to plant her lips on yours. You encourage her fine work, with soft moans and thrusts of your pelvis`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'More', goto: ['kinosvid', '18'] },
    { label: 'It\'s her turn', goto: ['kinosvid', '19'] },
  ]);
  scene.build();
}

function enter17(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/10.jpg');
  // TODO-QSP: dynamic text: You gradually work your fingers into her pussy, while you continue to lick her b...
  scene.text(`You gradually work your fingers into her pussy, while you continue to lick her backside. Finger by finger you stretch her until your entire hand is inside her. ${((s as any).telsob || '')} almost seems overwhelmed by all this attention. Her cries of pleasure are loud enough that you fear an usher might come in to see what's going. This thought gives you a wicked little thrill, but it's probably better to finish up.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'arousal', 'vaginal_finger_give', (-10), 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter18(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/12.jpg');
  // TODO-QSP: dynamic text: You hike a leg up onto the chair, and motion <<$telsob>> forward. She reaches up...
  scene.text(`You hike a leg up onto the chair, and motion ${((s as any).telsob || '')} forward. She reaches up to gently caress one of you cheeks, as she brings her mouth close to your waiting pussy. She teases you with a few deep hot breaths, before her mouth finds its target. A few minutes of kissing and licking later, you are thoroughly satisfied.`);
  qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter19(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/13.jpg');
  // TODO-QSP: dynamic text: You help <<$telsob>> up onto the back of the chair, and spread her legs wide. Yo...
  scene.text(`You help ${((s as any).telsob || '')} up onto the back of the chair, and spread her legs wide. You start to tease her with little licks, but overcome with passion she grabs the back of your head, forcing you deep between her thighs. She moans and grinds against your face until she is spent. Afterward, you continue to slowly lick her still quiver folds, very pleased with your work.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter110(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/14.jpg');
  // TODO-QSP: dynamic text: You get up on the chair and wiggle you butt at <<$telsob>>. Needing no further e...
  scene.text(`You get up on the chair and wiggle you butt at ${((s as any).telsob || '')}. Needing no further encouragement, ${((s as any).telsob || '')} spreads your cheeks, and buries her tongue deep in your ass. Your gasp of surprise is quickly replaced with moans of pleasure, as she continues to aggressively tongue your bottom. After a few minutes of this your knees buckle, and you collapse on the chair spent.`);
  qspCall(s, 'arousal', 'rimming', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/0.jpg');
  // TODO-QSP: dynamic text: With some playful flirting, you settle into your seats ready to watch the movie ...
  scene.text(`With some playful flirting, you settle into your seats ready to watch the movie and notice it is almost completely empty, just a few people spread out watching the movie. The two of you watch the movie for a while before, ${((s as any).telsob || '')} reaches over and slides her hands between your legs and starts rubbing your crotch. Just as it is really starting to feel good, she says: "I have to use the little girls room. I'll be right back."`);
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait', handler: (st: GameState) => {
    if (((s as any).pcs_hotcat ?? 0) >= 5) {
      scene.img('images/characters/city/university/girl/kendra/theater/theater1.jpg');
      if ((!((s as any).kendra_theater ?? 0))) {
        if (((s as any).meet_kendra ?? 0) === 1) {
          // TODO-QSP: dynamic text: While she is gone, Kendra plops right down in the chair next to you. She starts ...
          scene.text(`While she is gone, Kendra plops right down in the chair next to you. She starts eating your popcorn and places a hand on your knee. Too stunned to say anything, you just sit there a few moments as she rubs your knee and eats the popcorn. "Hello again ${((s as any).pcs_nickname || '')}, so what are you doing." She says as she looks at you like a piece of property.`);
        } else {
          scene.text('While she is gone, a black girl sits down beside you, starts eating your popcorn and places a hand on your knee. Too stunned to say anything, you just sit there a few moments as she rubs your knee and eats the popcorn. "So whats your name?" She asks.');
        }
        scene.actions([
          { label: 'On a date', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('You explain you are on a date. "Uh… sorry but I am already on a date. She should be back any moment."');
      scene.text('The Kendra snorts. "Yeah I seen that white bitch you was with, you could do way better."');
      // TODO-QSP: dynamic text: Before she can say more <<$telsob>> comes back and grabs her by the arm and pull...
      scene.text(`Before she can say more ${((s as any).telsob || '')} comes back and grabs her by the arm and pulls her up out of the chair. "She's with me, get out of here."`);
      // TODO-QSP: dynamic text: The Kendra jerks her arm free and then laughs at <<$telsob>>, before walking off...
      scene.text(`The Kendra jerks her arm free and then laughs at ${((s as any).telsob || '')}, before walking off. ${((s as any).telsob || '')} is very agitated for a while as the two of you watch the movie complaining about the black girl that was just here, eventually she calms down and the two of you watch the rest of the movie in peace.`);
    } else {
      scene.text('You explain you are on a date. "Uh… sorry but I am already on a date. She should be back any moment."');
      scene.text('The black girl snorts. "Yeah I seen that white bitch you was with, you could do better."');
      // TODO-QSP: dynamic text: Before she can say more <<$telsob>> comes back and grabs her by the arm and pull...
      scene.text(`Before she can say more ${((s as any).telsob || '')} comes back and grabs her by the arm and pulls her up out of the chair. "She's with me, get out of here."`);
      // TODO-QSP: dynamic text: The black girl jerks her arm free and then laughs at <<$telsob>>, before walking...
      scene.text(`The black girl jerks her arm free and then laughs at ${((s as any).telsob || '')}, before walking off. ${((s as any).telsob || '')} is very agitated for a while as the two of you watch the movie complaining about the black girl that was just here, eventually she calms down and the two of you watch the rest of the movie in peace.`);
    }
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
          { label: 'Harmless flirting', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater1.jpg');
    if (((s as any).meet_kendra ?? 0) === 1) {
      scene.text('You explain you are on a date. "Uh… sorry but I am already on a date. She should be back any moment."');
      scene.text('Then Kendra snorts. "Yeah I seen that white bitch you was with, you could do way better."');
      scene.text('You blush a little at the compliment, there is just something about this girl. She just oozes confidence and authority, you get the feeling she is use to always getting her way, just by the way she acts and says things and she seems interested in you. "Thanks" You tell her not sure what more to say, this is an awkward situation, on a date with a girl while another girl flirts with you.');
      scene.text('"Want some popcorn." Then she pops a few in her mouth, one held by her lips, you know she is planning to feed you it with a kiss if you say yes.');
    } else {
      (s as any).meet_kendra = 1;
      qspCall(s, 'npc_relationship', 'set', 'A84', 40);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>." You tell her and then explain you are on a date. "Uh… sorry...
      scene.text(`"${((s as any).pcs_nickname || '')}." You tell her and then explain you are on a date. "Uh… sorry but I am already sorta on a date. She should be back any moment."`);
      scene.text('Then black girl snorts. "Yeah I seen that white bitch you was with, you could do better."');
      scene.text('You blush a little at the compliment, there is just something about this girl. She just oozes confidence and authority, you get the feeling she is use to always getting her way, just by the way she acts and says things and she seems interested in you. "Thanks" You tell her not sure what more to say, this is an awkward situation, on a date with a girl while another girl flirts with you.');
      scene.text('"By the way my name is Kendra." She says and before you can respond she adds to it. "Want some popcorn." Then she pops a few in her mouth, one held by her lips, you know she is planning to feed you it with a kiss if you say yes.');
    }
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    scene.text('You shake your head no. "No thanks, like I said my date should be back any moment."');
    scene.text('The Kendra snorts. "You afraid of what she might do if she see\'s you with someone better than her?"');
    // TODO-QSP: dynamic text: Before you can answer <<$telsob>> comes back and grabs Kendra by the arm and pul...
    scene.text(`Before you can answer ${((s as any).telsob || '')} comes back and grabs Kendra by the arm and pulls her up out of the chair. "She's with me, get out of here."`);
    // TODO-QSP: dynamic text: The Kendra jerks her arm free and then laughs at <<$telsob>>, before walking off...
    scene.text(`The Kendra jerks her arm free and then laughs at ${((s as any).telsob || '')}, before walking off. ${((s as any).telsob || '')} is very agitated for a while as the two of you watch the movie complaining about the black girl that was just here, eventually she calms down and the two of you watch the rest of the movie in peace.`);
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/characters/city/university/girl/kendra/theater/theater2.jpg');
    scene.text('You just nod your head and then she leans in and places the piece of popcorn in your mouth, you swallow it and soon the two of you are kissing. She taste like candy and popcorn, she is a very good kisser. You don\'t know how long the two of you kiss, a couple of minutes at least but it was so good it felt like forever and no time at all, at the same time. When the kiss finally breaks she says. "I saw her rubbing you all over your pussy, show me your wet little pussy."');
    qspCall(s, 'arousal', 'kiss', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    scene.text('You shake your head no. "No I can\'t, not to mention my date should be back any moment."');
    scene.text('The Kendra snorts. "You afraid of what she might do if she see\'s you with someone better than her?"');
    // TODO-QSP: dynamic text: Before you can answer <<$telsob>> comes back and grabs Kendra by the arm and pul...
    scene.text(`Before you can answer ${((s as any).telsob || '')} comes back and grabs Kendra by the arm and pulls her up out of the chair. "She's with me, get out of here."`);
    // TODO-QSP: dynamic text: The Kendra jerks her arm free and then laughs at <<$telsob>>, before walking off...
    scene.text(`The Kendra jerks her arm free and then laughs at ${((s as any).telsob || '')}, before walking off. ${((s as any).telsob || '')} is very agitated for a while as the two of you watch the movie complaining about the black girl that was just here, eventually she calms down and the two of you watch the rest of the movie in peace.`);
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
      { label: 'Show her', handler: (st: GameState) => {
    (s as any).kendra_theater = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/characters/city/university/girl/kendra/theater/theater3.jpg');
    scene.text('You pulls your clothes aside until you can bare your pussy to her. As she looks down at your pussy she licks her lips. "You are all shinny and wet." After a few moments she reaches over and starts to rub your thigh gently. Her hand starts sliding up your thigh to your pussy.');
    qspCall(s, 'arousal', 'flash', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater4.jpg');
    scene.text('Her fingers trail up your thigh and over to your pussy, she starts rubbing your clit for a moment, "You\'re all wet, sugar." she says, then her fingers slide down to your slit and inside of your wet pussy. For several minutes she alternates between fingering you, rubbing your clit and just teasing you by rubbing your inner thigh.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'girl interrupted', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    // TODO-QSP: dynamic text: Just as it is starting to really feel good, <<$telsob>> shows up and grabs Kendr...
    scene.text(`Just as it is starting to really feel good, ${((s as any).telsob || '')} shows up and grabs Kendra by the arm yanking her up. Kendra doesn't put up a fight, and even starts laughing as she goes. Kendra calls back to you before she walks off: "If you ever get a taste for dark chocolate come see me at the dorm, ask for me by name. I know you want to." She leaves licking her still wet fingers.`);
    // TODO-QSP: dynamic text: Furious, <<$telsob>> throws her a parting shot: "Get the fuck out of here you cr...
    scene.text(`Furious, ${((s as any).telsob || '')} throws her a parting shot: "Get the fuck out of here you crazy black bitch! ${((s as any).pcs_nickname || '')} is my girl." She says the last part so only you can hear, as she sits back down.`);
    scene.actions([
      { label: 'Wait', goto: ['kinosvid', '23'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: While she is gone, Kendra plops right down in the chair next to you. She starts ...
        scene.text(`While she is gone, Kendra plops right down in the chair next to you. She starts eating your popcorn and places a hand on your knee. Too stunned to say anything, you just sit there a few moments as she rubs your knee and eats the popcorn. "Hello again ${((s as any).pcs_nickname || '')}, I bet your all wet for me again." She says as she looks at you like a piece of property.`);
        scene.actions([
          { label: 'On a date', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    scene.text('You explain you are on a date. "Uh… sorry but I am already on a date, like last time. She should be back any moment."');
    scene.text('The Kendra snorts. "Yeah I seen that white bitch you was with, you could do way better and you know it."');
    // TODO-QSP: dynamic text: Before she can say more <<$telsob>> comes back and grabs her by the arm and pull...
    scene.text(`Before she can say more ${((s as any).telsob || '')} comes back and grabs her by the arm and pulls her up out of the chair. "She's with me, get out of here."`);
    // TODO-QSP: dynamic text: The Kendra jerks her arm free and then laughs at <<$telsob>>, before walking off...
    scene.text(`The Kendra jerks her arm free and then laughs at ${((s as any).telsob || '')}, before walking off. ${((s as any).telsob || '')} is very agitated for a while as the two of you watch the movie complaining about the black girl that was just here, eventually she calms down and the two of you watch the rest of the movie in peace.`);
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
          { label: 'Smile to her', handler: (st: GameState) => {
    (s as any).kendra = 1;
    scene.img('images/characters/city/university/girl/kendra/theater/theater1.jpg');
    scene.text('You explain you are on a date. "Uh… sorry but I am already on a date. She should be back any moment."');
    scene.text('Then Kendra snorts. "Yeah I seen that white bitch you was with, you could do way better."');
    scene.text('You blush a little at the compliment, there is just something about this girl. She just oozes confidence and authority, you get the feeling she is use to always getting her way, just by the way she acts and says things and she seems interested in you. "Thanks" You tell her as you lay your head on her shoulder.');
    scene.text('"Show me your pussy." Kendra says to you.');
    scene.actions([
      { label: 'Show her', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like');
    scene.img('images/characters/city/university/girl/kendra/theater/theater3.jpg');
    // TODO-QSP: dynamic text: You pulls your clothes aside until you can bare your pussy to her. As she looks ...
    scene.text(`You pulls your clothes aside until you can bare your pussy to her. As she looks down at your pussy she licks her lips. "Oh, are you all wet for me ${((s as any).pcs_nickname || '')}, or are you hot for that white bitch?" After a few moments she reaches over and starts to rub your thigh gently. Her hand starts sliding up your thigh to your pussy.`);
    qspCall(s, 'arousal', 'flash', 2, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Let her', handler: (st: GameState) => {
    scene.img('images/characters/city/university/girl/kendra/theater/theater4.jpg');
    scene.text('Her fingers trail up your thigh and over to your pussy, she starts rubbing your clit for a moment, "Look how wet that pussy gets at my touch, I know that white bitch doesn\'t get you this hot." she says, then her fingers slide down to your slit and inside of your wet pussy. For several minutes she alternates between fingering you, rubbing your clit and just teasing you by rubbing your inner thigh.');
    qspCall(s, 'arousal', 'vaginal_finger', 3, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'girl interrupted', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A84', 40);
    scene.img('images/characters/city/university/girl/kendra/theater/theater5.jpg');
    // TODO-QSP: dynamic text: Just as it is starting to really feel good, <<$telsob>> shows up and grabs Kendr...
    scene.text(`Just as it is starting to really feel good, ${((s as any).telsob || '')} shows up and grabs Kendra by the arm yanking her up. Kendra doesn't put up a fight, and even starts laughing as she goes. Kendra calls back to you before she walks off: "Come see me when you get tired of that white bitch. I know what you really want ${((s as any).pcs_nickname || '')}." She leaves licking her still wet fingers.`);
    // TODO-QSP: dynamic text: Furious, <<$telsob>> throws her a parting shot: "Get the fuck out of here you cr...
    scene.text(`Furious, ${((s as any).telsob || '')} throws her a parting shot: "Get the fuck out of here you crazy black bitch! ${((s as any).pcs_nickname || '')} is my girl." She says the last part so only you can hear, as she sits back down.`);
    scene.actions([
      { label: 'Wait', goto: ['kinosvid', '23'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
    } else {
      scene.img('images/characters/city/boyfriend/sex/event/cinema/0.jpg');
      scene.text('You watch the movie while she is gone, you sit and watch the movie. About ten minutes later she comes back and sits back down next to you.');
      scene.actions([
        { label: 'Finish', goto: ['kinosvid', '3'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter23(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/21.jpg');
  // TODO-QSP: dynamic text: When <<$telsob>> has calmed down a little, she looks at you with hunger in her e...
  scene.text(`When ${((s as any).telsob || '')} has calmed down a little, she looks at you with hunger in her eyes. You were so shocked by the encounter that you were still sitting there legs spread. ${((s as any).telsob || '')} reaches over and starts to unbutton your top too. It looks like she intends to claim her prize.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Let her', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cinema/22.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> gives you a slow deep kiss, as she works two fingers into your pussy...
    scene.text(`${((s as any).telsob || '')} gives you a slow deep kiss, as she works two fingers into your pussy. She curls her fingers up, and gives a firm tug. "This is mine", she whispers against your lips.`);
    scene.text('All you can do is whimper, "Yes."');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cinema/23.jpg');
    // TODO-QSP: dynamic text: You obediently roll over to your knees, when <<$telsob>> tells you to. She gets ...
    scene.text(`You obediently roll over to your knees, when ${((s as any).telsob || '')} tells you to. She gets to work, stretching your little pussy with finger after finger. She isn't rough, but she leaves no doubt about who is in charge.`);
    // TODO-QSP: dynamic text: "I want you to cum for me now, <<$pcs_nickname>>", she says, in a firm voice.
    scene.text(`"I want you to cum for me now, ${((s as any).pcs_nickname || '')}", she says, in a firm voice.`);
    scene.text('You do.');
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pleasure her', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cinema/24.jpg');
    // TODO-QSP: dynamic text: <<$telsob>> gets into position, and guides your hand between her legs. "Do it to...
    scene.text(`${((s as any).telsob || '')} gets into position, and guides your hand between her legs. "Do it to me now, sweetie", she tells you. You slowly do the same thing that she has just done to you, slowly stretching her until you get four fingers inside her. After a short time ${((s as any).telsob || '')} bucks wildly against your hand, as she climaxes. When she recovers she gives you a little kiss on the cheek, and goes back to watching the movie, without a word.`);
    qspCall(s, 'arousal', 'vaginal_finger_give', 5, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
    ]);
  } },
      { label: 'Pleasure her', goto: ['kinosvid', '22'] },
    ]);
  } },
    { label: 'Pleasure her', goto: ['kinosvid', '21'] },
  ]);
  scene.build();
}

function enter21(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/25.jpg');
  // TODO-QSP: dynamic text: As an apology, you sit on the floor, motioning for <<$telsob>> to straddle your ...
  scene.text(`As an apology, you sit on the floor, motioning for ${((s as any).telsob || '')} to straddle your face. She takes her position, and slowly grinds herself against your face. Eventually, the movement of her hips becomes more and more urgent. All you can do is hold on, as she brings herself to orgasm, against your face.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit back down', handler: (st: GameState) => {
    scene.img('images/characters/city/boyfriend/sex/event/cinema/26.jpg');
    // TODO-QSP: dynamic text: When you are dressed and watching the movie again, <<$telsob>> turns to you sayi...
    scene.text(`When you are dressed and watching the movie again, ${((s as any).telsob || '')} turns to you saying: "Oh, OK apology accepted."`);
    scene.text('She drops to her knees, spreading your legs as she goes. Her expert tongue brings you to orgasm in no time.');
    // TODO-QSP: dynamic text: You lie back, breathing heavy, basking in the afterglow, and the thought of <<$t...
    scene.text(`You lie back, breathing heavy, basking in the afterglow, and the thought of ${((s as any).telsob || '')} no longer being mad about the incident.`);
    qspCall(s, 'arousal', 'cuni', 10, 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['kinosvid', '3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter22(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/boyfriend/sex/event/cinema/27.jpg');
  // TODO-QSP: dynamic text: You gently push <<$telsob>> back in her chair, getting her hips up in the air as...
  scene.text(`You gently push ${((s as any).telsob || '')} back in her chair, getting her hips up in the air as you do. She pulls on of her cheeks aside giving you better access to her sex. After a few minutes of your expert tongue, ${((s as any).telsob || '')} is left collapsed in her chair, trembling.`);
  qspCall(s, 'arousal', 'cuni_give', 10, 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['kinosvid', '3'] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 90;
  qspCall(s, 'stat', '');
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/boyfriend/sex/event/cinema/0.jpg');
  scene.text('With some playful flirting, you settle into your seats ready to watch the movie and notice the theater is packed, you struggle to find a pair of empty seats next to each other.');
  if (((s as any).telsob ?? 0) === 'Alla'  ||  ((s as any).telsob ?? 0) === 'Masha'  ||  ((s as any).telsob ?? 0) === 'Kate') {
    // TODO-QSP: dynamic text: When the movie ends, <<$telsob>> says she has get home. She leaves you with a de...
    scene.text(`When the movie ends, ${((s as any).telsob || '')} says she has get home. She leaves you with a deep kiss, leaving you wanting more.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Leave', goto: ['pav_cinema', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', goto: ['city_mall', ''] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: When the movie ends, <<$telsob>> looks at you and waits for your next move.
    scene.text(`When the movie ends, ${((s as any).telsob || '')} looks at you and waits for your next move.`);
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([
        { label: 'Kiss her and say goodbye', goto: ['pav_cinema', ''] },
      ]);
    } else {
      scene.actions([
        { label: 'Kiss her and say goodbye', goto: ['city_mall', ''] },
      ]);
    }
    scene.actions([
      { label: 'Kiss her and invite her to your home', goto: ['lezbsex', 'startloverhome'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    case '11':
      enter11(s, scene);
      break;
    case '12':
      enter12(s, scene);
      break;
    case '13':
      enter13(s, scene);
      break;
    case '14':
      enter14(s, scene);
      break;
    case '15':
      enter15(s, scene);
      break;
    case '16':
      enter16(s, scene);
      break;
    case '17':
      enter17(s, scene);
      break;
    case '18':
      enter18(s, scene);
      break;
    case '19':
      enter19(s, scene);
      break;
    case '110':
      enter110(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '23':
      enter23(s, scene);
      break;
    case '21':
      enter21(s, scene);
      break;
    case '22':
      enter22(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const kinosvid: LocationDef = {
  name: 'kinosvid',
  title: '<center><b>Cinema</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
