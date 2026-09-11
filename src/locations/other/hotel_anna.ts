import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMeeting(s: GameState, scene: SceneBuilder): void {
  if (((s as any).IgorevnaBDSM ?? 0) === 5) {
    // TODO-QSP: gt 'hotel_anna', 1
  } else {
    if (((s as any).IgorevnaBDSM ?? 0) === 6) {
      // TODO-QSP: gt 'hotel_anna', 2
    } else {
      if (((s as any).IgorevnaBDSM ?? 0) === 7) {
        // TODO-QSP: gt 'hotel_anna', 3
      } else {
        if (((s as any).IgorevnaBDSM ?? 0) === 8) {
          // TODO-QSP: gt 'hotel_anna', 4
        } else {
          if (((s as any).IgorevnaBDSM ?? 0) === 9) {
            // TODO-QSP: gt 'hotel_anna', 5
          } else {
            if (((s as any).IgorevnaBDSM ?? 0) === 10) {
              // TODO-QSP: gt 'hotel_anna', 6
            } else {
              if (((s as any).IgorevnaBDSM ?? 0) === 11) {
                // TODO-QSP: gt 'hotel_anna', 7
              } else {
                if (((s as any).IgorevnaBDSM ?? 0) === 12) {
                  // TODO-QSP: gt 'hotel_anna', 8
                } else {
                  if (((s as any).IgorevnaBDSM ?? 0) === 13) {
                    // TODO-QSP: gt 'hotel_anna', 9
                  } else {
                    if (((s as any).IgorevnaBDSM ?? 0) >= 14) {
                      // TODO-QSP: gt 'hotel_anna', 10
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

function enter2a(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"Who decides who plays those games and which games you play?"');
    scene.text('"It is decided by us. We speak about Dominance and submission, a D/s relationship for short; this can be for any duration, for an hour or a lifetime, usually within negotiated limits. The relationship will guide the roles, the games we play, and the limits within those games. A submissive is an individual who consents to give up power to a Dominant; there are different levels of submission and Dominance, for example a submissive can be a coca-cola, a light sub who only obeys the easy stuff or only when he/she feels like it, or a slave engaged into a Master/slave relationship. What really matters is not the games or the nature of those games but the relationship itself. Both will benefit from a relationship if it\'s correctly built and supported. Just like any relationship, except for the sake of safety we set out rules first."');
    scene.actions([
      { label: 'Oh!…emmmh… ok', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"It\'s easy to imagine the Dom\'s benefit but subs have their own. I can simply tell you that a sub generally likes to be dominated, but there\'s something else; to live as a sub is to avoid having to make hard choices for example and the stress that comes from that. Of course some subs just really like pain, but every case is something unique with a little or a lot of many things. What is universally accepted in our lifestyle is that all the benefits increase according the relationship. This is not something you can have immediately, you have to feed it. Communication, levels/limits, safe words, preparation and after care are the tools which help you to build your BDSM relationship and they must be provided by both parties. You cannot achieve this goal if you don\'t completely trust your partner. Here comes the need some feel to declare their relationship in contracts, like a wedding; this is often for a proper M/s or Master/slave relationship. Even without this the agreement both parties reach through words can be seen as a verbal contract."');
    scene.actions([
      { label: '…a-a contract?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/annaintrob1.jpg');
    scene.text('"Do not be surprised. It\'s like a wedding, a real wedding. The difference is in the details the parties agree on. For example, some real weddings can be made because they have had an unwanted child without an real feeling between those getting married. BDSM contracts cannot exist without mutual agreement.');
    scene.text('They are not legally enforceable of course as they limit the rights of one or both parties and actual slavery is not legal, nonetheless I can assure you that since it\'s a mutual agreement M/s contracts usually last longer than regular marriages, not to mention that breaking these contracts will end the mutual benefits.');
    scene.text('Usually these contracts are made between a Dom and a sub but that\'s not a general rule; they can involve switches too. A switch is a person who can both Top and bottom depending on the situation and their partner, they can be a Dom and a sub."');
    scene.text('"So you are a switch?"');
    // TODO-QSP: dynamic text: Anna smiles, "Very astute <<$pcs_firstname>>, I am in my own time and sometimes ...
    scene.text(`Anna smiles, "Very astute ${((s as any).pcs_firstname ?? 0)}, I am in my own time and sometimes professionally but my job now requires me to be Dominant. We will get to that in another chat our time is limited. Just remember both the sub and the Dom get pleasure from their roles and we'll talk about some more fun stuff next time."`);
    scene.text('Anna politely leads you to the exit.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3a(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Focus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    if (((s as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2a.jpg');
    } else {
      if (((s as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2b.jpg');
      } else {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy2c.jpg');
      }
    }
    scene.text('"We can divide the toys I\'ve brought into different categories: beating, flogging, sensation play, pleasure and edgeplay. As you can imagine pain has a great role in BDSM, here we have two example of typical toys that can bring you pain: a paddle and a riding crop. You can easily find those items but without them you can use alternatives.');
    scene.text('So paddle is typically used for spanking, but if you don\'t have one you can use your bare hand or the back of a hair brush. While crop is more specialist it can be found in a sex shop of course or somewhere you\'d buy horse riding equipment. They are used to whip across someone\'s butt and also intimate areas.');
    scene.text('We usually start with a warm up using some pain before intercourse as this allows the sex acts to last longer and builds the intensity, for this the riding crop is the most popular. Next we have some flogging tools, they are quite self explanatory. The martinet is the smallest whip we have with a very short handle and multiple tails, it gives great control and a spread of sensations compared to the riding crop which takes a bit of skill to use accurately and is very focused but can deliver a lot more pain."');
    if (((s as any).annaToy ?? 0) === 3) {
      // TODO-QSP: dynamic text: <<$pcs_nickname>>, you seem a little distracted… should I cover up?"
      scene.text(`${((s as any).pcs_nickname ?? 0)}, you seem a little distracted… should I cover up?"`);
      scene.text('"Oh!…emmmh… no no… there\'s no need, you were talking about something to "warm up" if i\'m correct…"');
      scene.actions([
        { label: '(…Wow! "They" are… BIG… maybe warm too…)', goto: ['hotel_anna', '3b'] },
        { label: 'Focus…', handler: (st: GameState) => {
    (st as any).annaToy = 4;
  }, goto: ['hotel_anna', '3b'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['hotel_anna', '3b'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter3b(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  if (((s as any).annaToy ?? 0) === 1) {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3a.jpg');
  } else {
    if (((s as any).annaToy ?? 0) === 2) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3b.jpg');
    } else {
      if (((s as any).annaToy ?? 0) === 3) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3ca.jpg');
        scene.text('"Exactly! That means you were listen to me, good I can finally loosen my top. That leather dress leaves my poor breasts numb, I think it is a couple of sizes too small." Anna let\'s her top fall away completely.');
      } else {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy3cb.jpg');
        scene.text('"Exactly! That means you were listen to me, good after a day in that tight leather dress even this gown feels restricting." Anna start to disrobe herself.');
      }
    }
  }
  scene.text('"After a good warm up we can move to some more serious toys like the quirt (or short whip). It\'s used during the main part of the session. It combines parts of both the crop and the martinet having a long handle and these falls that from the whip are which are quite short. Cowboys use them to hit cattle from their horses and they can cause a lot of pain so they must be used carefully.');
  scene.text('With a whip or none rigid implement the face and head are forbidden places to strike unless the eyes are covered, this is important these toys can be dangerous and we should never do something that could cause lasting harm to another.');
  scene.text('Back to the warm up phase this in itself can extremely intense and to aid that we have sensation play. The Wattenburg wheel and cupping can be part of that. Sensation play allows us to increase the perception of a good pain instead of a bad pain, I know that sounds strange but linking the pain to pleasure makes the pain feel like pleasure. These concepts are a bit advanced so maybe we\'ll cover it in more detail another time.');
  scene.text('We also have toys that can be used purely for sexual pleasure such as the butt plug or my Hitachi vibrator."');
  scene.actions([
    { label: '…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    if (((s as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4a.jpg');
    } else {
      if (((s as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4b.jpg');
      } else {
        if (((s as any).annaToy ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4ca.jpg');
        } else {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4cb.jpg');
        }
      }
    }
    scene.text('"Finally edgeplay, technically this refers to knife play, but it has come to mean anything \'on the edge\' or considered \'extreme\'. It is common in the M/s relationship, but not exclusive to it. Here we have needles for needle play: Sterilized needles which are inserted through the top layer of the skin. Every time an item is used in edgeplay and is not disposable it has to be sterilized with the right protocol, we don\'t want to be spreading diseases or causing infections.');
    scene.text('Then something not so bad, a set of Violet wands, they use electricity that can deliver a variety of sharp, cutting, or piercing type sensations. It\'s not strictly edgeplay but something you could use to get an understanding of edgeplay much more safely');
    // TODO-QSP: dynamic text: I'm sorry if some of this is a bit scary <<$pcs_nickname>>, but I think that kno...
    scene.text(`I'm sorry if some of this is a bit scary ${((s as any).pcs_nickname ?? 0)}, but I think that knowledge shouldn't be censored even when we don't like something. It can be hard to accept that someone may like a real extreme side of BDSM, but it's right for you to know that it exists and by understanding how it should be used you will be aware if you see it being misused everybody should be aware of that. One of the main things people in are community dois ensure that we are all safe. If I did something to you that you didn't like and wanted me to stop I would of course stop but if I did not, having someone else there to ensure I did protects you and me.`);
    scene.text('That is all the toys so now I can show you how one of them works if you like.');
    scene.actions([
      { label: 'Choose a toy for a demonstration', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/ztoy.jpg');
    scene.text('Anna presents you some toys to choose from:');
    scene.text('<table border=1><tr><td><a href="exec:gs \'hotel_anna_gear\', \'toys_paddle\'">Paddle</a></td><td><a href="exec:gs \'hotel_anna_gear\', \'toys_vacuum\'">Vacuum cups</a></td><td><a href="exec:gs \'hotel_anna_gear\', \'toys_wheel\'">Wattenburg wheel</a></td><td><a href="exec:gs \'hotel_anna_gear\', \'toys_wand\'">Violet wand</a></td></tr>');
    scene.actions([
      { label: 'go away', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).annaToy ?? 0) === 1) {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4a.jpg');
    } else {
      if (((s as any).annaToy ?? 0) === 2) {
        scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4b.jpg');
      } else {
        if (((s as any).annaToy ?? 0) === 3) {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4ca.jpg');
        } else {
          scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna1toy4cb.jpg');
        }
      }
    }
    scene.text('"I think it\'s time for me to leave"');
    scene.text('"Of course my dear, we can do this another time if you are ever interested." Anna leads you to the door.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4a(s: GameState, scene: SceneBuilder): void {
  scene.text('"Well first of all you have to know that fisting is a common and highly pleasurable practice that has to be done in secure position. You need lubed gloves for inexperienced practitioners, those more advanced can start small and work up to it using the women\'s arousal and natural lubrication although anal fisting requires lube no matter how good you are.');
  scene.text('Now the swing\'s role, it allows the person being fisted to decide the deepness of the penetration giving them control that is otherwise entirely in the hands of the person fisting. It lets you control something that is usually controlled by another and that is a way to trigger new mental sensations.');
  scene.text('It is not cheap though. BDSM gear can cost a lot especially elaborate furniture. That is not a worry if you get it as a gift though" She smiles. "Now for the restriction part, the fisting swing can be used to pose a sub not without a need to fist them, the pose can be very exposing making them available for various sex acts or simply to be admired.');
  scene.text('OK enough about my fabulous new swing let\'s talk about restriction and again I ask you to wait until the end where I\'ll give you a choice for a demonstration."');
  scene.actions([
    { label: 'Focus', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr2.jpg');
    scene.text('I\'ll start with something really basic: ropes and tape. Restriction is meant to be both physical and mental within BDSM, we\'ll stick to the physical restriction for now as mental restraint is a more complex subject for another time.');
    scene.text('The basics of restriction is to limit movement. For this you can use ropes, tape, chains and cuffs securing the last two with padlocks and specialist items such as arm binders and straight jackets. There are other ways, just lying on top of someone or holding their arms or legs together will restrain someone.');
    scene.text('Anyway, physical restriction is not limited to preventing movement it can reduce it too. For this you could use very high heels, chains between arms and/or legs, special tight skirts (called hobble skirts), a leash like you\'d use on a pet or small spaces like a chest or cage. Anything that prevents someone from moving with the freedom they would otherwise have.');
    scene.text('These can be used in normal play or to discipline and training a sub and in that case you can also use something like this chastity belt. It\'s main purpose is to prevent sexual activities, not orgasms as you can see this chastity belt has a built in vibrator… "');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr3.jpg');
    scene.text('"An important aspect is what is called sensation play. As I said last time, warm-up increases both the duration and the sensation of a session; some restriction items can be used with the same purpose: here we have a double breast clamp, some suspension cuffs and a head harness with a blindfold and a gag. To be suspended or to lose sight during a session will increase the feeling, both for sex or pain.');
    scene.text('The breast clamp can increase the sensitivity of your boobs and ropes can be used to similar effect. Much like in some vanilla sex we use roleplay to create the right mood or environment, we go a little further with it and that\'s when something like this collar and leash come in.');
    scene.text('While it might seem self explanatory you as a restraint and to support the sub and Dom roles it is commonly used in what we call pet play: A form of role play in which one or more participants act like animals. Pet play can be very serious with the pets being treated as owned much like real pets, that is in the world of M/s relationships. Such pets will sometimes need to be tamed through discipline and training, but well cared for and behaved pets are extremely faithful making them perfect slaves."');
    scene.actions([
      { label: 'This would be a bad time to bark', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr4.jpg');
    scene.text('"As you have seen some items can have multiple purposes. Harnesses for example can be used as restriction item or as an outfit for both sub and Dom. A spreader bar can be used to teach a sub to expose their breast or pussy, or to be linked to various things to force the sub to hold a position.');
    scene.text('So \'Linking\' is simply the process of connecting one restraint to another or a fixed point so that it is connected to the floor, a wall or some furniture. Tying ropes is a fast way to do this but not as fast as padlocks. Tape can be used for the same purpose with some adjustments, but its fiddly and not as secure, it\'s mostly used to gagging, binding or mummification (an edgeplay where the whole body is wrapped around with film or tape leaving just nostrils or mouth to allow breathing).');
    scene.text('That\'s it for today unless you want a demonstration." Anna starts putting the more advanced items away.');
    scene.actions([
      { label: 'Choose something for a demonstration', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).AnnaQW['trust'] = ((s as any).AnnaQW['trust'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/zrestr.jpg');
    scene.text('A set of items stand in front of you');
    scene.text('<table border=1><tr><td><a href="exec:gs \'hotel_anna_gear\', \'restraints_rope\'">Ropes</a></td><td><a href="exec:gs \'hotel_anna_gear\', \'restraints_harness\'">Harness</a></td>');
    scene.text('<td><a href="exec:gs \'hotel_anna_gear\', \'restraints_leash\'">Collar and leash</a></td><td><a href="exec:gs \'hotel_anna_gear\', \'restraints_cuff\'">Cuffs</a></td></tr>');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
      { label: 'Skip the demo', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionhotel/anna2restr4.jpg');
    scene.text('"Thank you Anna but I should go."');
    scene.text('"Of course dear, if you\'ll forgive me getting in and out of this swing is a bit awkward so I won\'t walk you to the door."');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
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

function enterSpank(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract03b.jpg');
  scene.text('Anna is standing there looking at you holding the ropes you had just untied from Jeanie, if that is even her name.');
  // TODO-QSP: dynamic text: Well <<$pcs_firstname>>, I wonder if you did this because you wanted to be punis...
  scene.text(`Well ${((s as any).pcs_firstname ?? 0)}, I wonder if you did this because you wanted to be punished of if you simply don't listen. Either way I gave you fair warning so get on my knee. Now!"`);
  scene.text('Anna has sat down and Jeanie is standing right behind you, her breath on your neck. It doesn\'t look like you have a choice.');
  scene.actions([
    { label: 'Comply', handler: (st: GameState) => {
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3b.jpg');
      if ((!((s as any).PCloPanties ?? 0))) {
        if (((s as any).PCloDress ?? 0) === 1) {
          scene.text('As you move toward Anna, Jeanie grabs the hem of your dress and pulls it over your head leaving you exposed.');
        } else {
          // TODO-QSP: dynamic text: As you move toward Anna, Jeanie grabs your ' + iif(PCloSkirt > 0, 'skirt and pul...
          scene.text('As you move toward Anna, Jeanie grabs your \' + iif(PCloSkirt > 0, \'skirt and pulls it\', \'pants and pulls them\') + \' down, leaving you exposed.');
        }
      }
    } else {
      scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3a.jpg');
      if ((!((s as any).PCloPanties ?? 0))) {
        if (((s as any).PCloDress ?? 0) === 1) {
          scene.text('As you move toward Anna, Jeanie grabs the hem of your dress and pulls it over your head leaving you in just your underwear.');
        } else {
          // TODO-QSP: dynamic text: As you move toward Anna, Jeanie grabs your ' + iif(PCloSkirt > 0, 'skirt and pul...
          scene.text('As you move toward Anna, Jeanie grabs your \' + iif(PCloSkirt > 0, \'skirt and pulls it\', \'pants and pulls them\') + \' down, leaving your panties exposed.');
        }
      }
    }
    scene.text('Anna lays you across her lap and starts spanking your butt, hard. After the first 5 she stops and says, "You have to count them Sweetie, or they don\'t count and I can\'t be smacking you all night."');
    scene.text('She resumes and you starting counting each strike hoping to end the humiliation and pain as quickly as you can.');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'BDSM', 3, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Endure', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/annapract09a3c.jpg');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('Jeanie interrupts Anna and loudly states: "A smack must be on a bare butt." She proceeds to pull down your panties before Anna continues.');
    }
    scene.text('Eventually as you count to 30 Anna stops. "That\'s enough for now Sweetie. I hope you have learnt more about how our world works. You will need time to think about it I\'m sure."');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'BDSM', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.text('You get up and quickly re-dress, you butt really stings from the spanking. There is also some arousal building as a result and you realize Anna is correct it will take time to understand that mixed feeling.');
    scene.text('Anna guides you to the door: "I look forward to our next session Sweetie." She then gives you a gentle pat on the butt reminding you of the pain as you walk past her.');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDresscontest(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract17.jpg');
  scene.text('Tip top tip top tip top tip top. "Anna, how am I supposed to walk with this dress?"');
  scene.text('"Well… very slowly like you are now. OK, once more around the room and stop trying to rush."');
  scene.text('Tip top tip top tip top tip top. "That\'s it, much better. You know it enhances your figure pretty very well. Not that you need to enhance it."');
  scene.text('Anna is lying back on the couch and you\'re fairly sure you saw her hand where it shouldn\'t be."');
  if (((s as any).hobble ?? 0) === 'red') {
    scene.text('"The red one full of passion isn\'t it? I almost want put a leash on you and keep you for myself, but how could I keep you at home without Lariska getting upset?" Her smile let\'s you know she is joking with you');
  } else {
    scene.text('"That dress makes you look like professional Domme, I have to resist the urge to knee in front of you and await your instructions." She says joking but you do feel like you are more assertive than normal.');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapracttable.jpg');
    scene.text('Anna hold up a piece of paper with various pictures on it.');
    scene.text('"Sorry its such a crappy print out Sweetie, I do have some cards and charts to help you learn these things but nothing for dress code."');
    scene.text('"As you can see any type of outfit can be used for both sub or Domme, it is the subtle differences, attitude and accessories that make the difference."');
    scene.text('You look over the chart and it is mostly clear but… "I\'m not sure about the Status Dress"');
    scene.text('"Ahh, yeah the chart isn\'t great but it is for dresses that are not hobbling and still convey the BDSM role. Imagine she is still wearing those boots with a regular skirt."');
    scene.text('"Now that I\'ve seen you walk and know how the outfit looks. It\'s great by the way. For your lesson I want you to see how it restricts you, so try and do some stretches and such."');
    scene.actions([
      { label: 'Stretches', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18b.jpg');
    scene.text('As you try and do some stretches Anna is barely watching and seems to be playing with her breasts, this is quite distracting and erotic,');
    scene.text('"Err… Anna? Are you even watching?"');
    scene.text('"Oh yes Sweetie, you look great. I thought it would make for a change if I watched you seeing as you watched me so much"');
    scene.text('Realising that your attempts to stretch only served to show yourself off for her pleasure has you a bit conflicted. You did spy on her when she was doing all sorts of things but this is very different.');
    scene.text('"Don\'t be like that Sweetie, I\'m tired and horny so I\'m not as subtle as I could be but this is still a lesson you need to learn. Now take off that outfit, I\'m close."');
    scene.text('You can\' go home in her clothes and leave yours\' here, you have no choice. Anna has tricked you.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic', 5);
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract13a.jpg');
    scene.text('You try to remove the hobble dress quickly but its not easy to do that and the more you struggle to go faster the hard to is to get out of.');
    scene.text('When finally naked you glace at Anna and recognise her \'O\' face. That you know it does prove her point about you watching her but you still feel like a piece of meat.');
    scene.text('You quickly dress again and turn to Anna with a pout on your face.');
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
    scene.text('Anna is positively glowing in post orgasmic joy.');
    scene.text('"That\'s much better than that stupid movie. My client will be here soon and they are always trying to tease an orgasm out of me. The longer I can resist the more they tip so I need to relieve myself first."');
    scene.text('"OK, but why use me like that without saying anything?"');
    scene.text('Anna thinks for a second before: "Honestly I hoped we could both watch that movie and get horny then masturbate. Most of my friends are in the scene and that sort of thing is normal for us. I can\'t teach you everything and not be that person."');
    scene.text('She continues, "The movie was shit so I changed the plan and being as I was already a bit horny my judgement might not have been great but you are very attractive and if you want to be a part of the scene people will masturbate to you. Sometimes as part of an act and sometimes as they watch and you perform, it is something that would have to be a part of your training."');
    scene.actions([
      { label: 'Sit', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract11a.jpg');
    scene.text('You sit on the bed to take all this in and try to understand it. Anna leans forward alert and attentive once more.');
    scene.text('"I know Sweetie, it\'s a lot to process for one session. Next time I\'ll let you get a bit of revenge with some practical Domme experience, I have the perfect client to help with such lessons."');
    scene.text('You aren\'t sure if its just her post orgasm high or normal part of the training but that does seem tempting after today.');
    scene.text('She stands up and walks you to the door, "Until next time Sweetie, it\'ll be fun!"');
    scene.actions([
      { label: 'Leave', goto: ['pav_hotel', ''] },
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
  scene.build();
}

function enterScanningPath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).IgorevnaBDSM_statusdress_b ?? 0) === 1  &&  ((s as any).IgorevnaBDSM_freeJM ?? 0) !== 3) {
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
    scene.text(`<center><b>"Wait ${((s as any).pcs_nickname ?? 0)}, i didn't finished. Since it seems you have a clear preference, i'd like to give you some option to chose, anyway you could see and chose directly next time. So basically you can chose between a man, a woman or to delay your choice to our next encounter: but in that last case, with all the probability, i will not able to call an external performer and so all the route will be avaible and it will be between me and you… hehehe."</b></center>`);
    // TODO-QSP: act'Man':
    qspCall(s, 'stat', '');
    (s as any).IgorevnaBDSM_session_slaveM = 1;
    (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
    scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
    scene.text('<center><b>"…Man uh? Generally speaking they are much more difficult to control expecially at the beginning, but do not worry: once you keep them at the balls they are marvelous. Anyway, we\'ll play easy with a loyal servant, so you have nothing to be worried about. Oh! And before you ask: no sex allowed. I forbid my pet to have sex this month… so… well, i\'m sure you can deal with that."</b></center>');
    scene.actions([
      { label: 'Bye Anna', handler: (st: GameState) => {
    // TODO-QSP: gt'pav_hotel'
  } },
    ]);
  }
  // TODO-QSP: act'Woman':
  qspCall(s, 'stat', '');
  (s as any).IgorevnaBDSM_session_slaveF = 1;
  (s as any).AnnaQW['dom'] = ((s as any).AnnaQW['dom'] ?? 0) + (1);
  scene.img('images/characters/pavlovsk/resident/Anna/sessionpractice/Annapract18.jpg');
  scene.text('<center><b>"…Woman uh? Generally speaking they are easier to control expecially at the beginning: but every rules have their own exception… hehehe. Anyway, we\'ll play easy with a loyal servant, so you have nothing to be worried about. Oh! And before you ask: no sex allowed. I forbid my pet to have sex this month… so… well, i\'m sure you can deal with that."</b></center>');
  scene.actions([
    { label: 'Bye bye Anna', handler: (st: GameState) => {
    // TODO-QSP: gt'pav_hotel'
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'meeting':
      enterMeeting(s, scene);
      break;
    case '2a':
      enter2a(s, scene);
      break;
    case '3a':
      enter3a(s, scene);
      break;
    case '3b':
      enter3b(s, scene);
      break;
    case '4a':
      enter4a(s, scene);
      break;
    case 'spank':
      enterSpank(s, scene);
      break;
    case 'dresscontest':
      enterDresscontest(s, scene);
      break;
    case 'scanning_path':
      enterScanningPath(s, scene);
      break;
    default:
      enterMeeting(s, scene);
      break;
  }
}

export const hotel_anna: LocationDef = {
  name: 'hotel_anna',
  title: '"Wait <<$pcs_nickname>>, i didn\'t finished. Since it seems you have a clear preference, i\'d like to give you some option to chose, anyway you could see and chose directly next time. So basically you can chose between a man, a woman or to delay your choice to our next encounter: but in that last case, with all the probability, i will not able to call an external performer and so all the route will be avaible and it will be between me and you… hehehe."',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
