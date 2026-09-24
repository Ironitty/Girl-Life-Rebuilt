import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'like', 1, 'living_room');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('You casually talk to him about whatever topics come up.');
  (s as any).brotherchat = (Math.floor(Math.random() * 8) + 1);
  if (((s as any).brotherchat ?? 0) === 1) {
    // TODO-QSP: dynamic text: "… so, yeah. <<$npc_nickname[''A29'']>> wants me to clean up my stuff on the cou...
    scene.text(`"… so, yeah. ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} wants me to clean up my stuff on the couch, but if I'm going to sleep there anyways, why does it matter?" he asks, snapping you out of your idle thoughts and bringing you back to the room.`);
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
      // TODO-QSP: dynamic text: "I know it seems pointless but you should listen to <<$npc_nickname[''A29'']>>. ...
      scene.text(`"I know it seems pointless but you should listen to ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. You'll get in trouble otherwise," you admonish him.`);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A29'] < 40) {
        // TODO-QSP: dynamic text: "Ugh, I know! <<$npc_nickname[''A29'']>> is always nagging me about everything! ...
        scene.text(`"Ugh, I know! ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is always nagging me about everything! She can be such a pain in the ass sometimes!" you `);
      }
    }
  } else {
    if (((s as any).brotherchat ?? 0) === 2) {
      scene.text('"… and dad asked me if I want to help him work on the Gazelle but I don\'t know. I\'d rather go play football with Zhendos and Mishan," he finishes, snapping you out of your idle thoughts and bringing you back to the room.');
      scene.text('"It\'s good to have fun with your friends but it might also be good to work with dad. It\'s a good life skill. Besides, there\'s nothing girls love more than a man who knows how to work a car!" you wink at him.');
    } else {
      if (((s as any).brotherchat ?? 0) === 3) {
        scene.text('"I hate math so much!" he moans. "Math sucks! It can go die in a hole!"');
        if (((s as any).class ?? 0)?.['school_math_grade'] >= 70) {
          scene.text('"Oh Kolka, you shouldn\'t think like that. Math is important!"');
        } else {
          scene.text('"Blegh! Yeah, you\'re right. Math sucks!" you grumble in agreement.');
        }
      } else {
        if (((s as any).brotherchat ?? 0) === 4) {
          scene.text('Kolka starts telling you a story about him and his friends. As it goes on longer and all over the place, you find yourself zoning out and not really paying attention to what he\'s saying.');
          scene.text('"… and then he ripped his pants!" he giggles, snapping you out of your idle thoughts and bringing you back to the room. "Isn\'t that hilarious?"');
          scene.text('"Uhh, yeah! That\'s pretty funny!" you fake laugh as best you can.');
        } else {
          if (((s as any).brotherchat ?? 0) === 5  &&  ((s as any).brotherQW ?? 0)?.['sex_ed'] >= 1) {
            scene.text('"… so I\'m enjoying science a lot more," he says, snapping you out of your idle thoughts and bringing you back to the room. "My grades have gotten better since you started helping me with my homework but I\'m still not sure I completely get it…" He hesitates. "Could you maybe… give me another anatomy lesson? Like you did before?" he says, looking at you meaningfully.');
            scene.text('"I\'m thinking about it…" you say slyly.');
          } else {
            if (((s as any).brotherchat ?? 0) === 5) {
              scene.text('"… so science class is alright," he says. "I\'m really having trouble with my anatomy homework though. The diagrams in the book aren\'t very good, I don\'t understand it."');
              scene.text('"Hmm. Well maybe I could help you with it sometime? Do something to help you understand it better?"');
              ((s as any).brotherQW = (s as any).brotherQW ?? {})['anatomy_help'] = 1;
            } else {
              if (((s as any).brotherchat ?? 0) === 6) {
                scene.text('… and then he sprayed milk all over his locker!" he says with a burst of laughter "It was <i>so</i> funny!"');
                scene.text('"I bet it was," you say.');
                scene.text('<i>What weird kids he and his friends are…</i> you think to yourself.');
              } else {
                if (((s as any).brotherchat ?? 0) === 7) {
                  scene.text('"… so the plan is while he\'s showering to take his underwear and replace them with girls panties," he says. "Zhendos says that I should just steal some of yours out of your drawer but-" he stops dead with wide eyes and the realization of what he just said.');
                  if (((s as any).npc_rel ?? 0)?.['A34'] < 80) {
                    scene.text('"<i>Excuse me?</i> You were planning to do <i>what</i> with my underwear??" you say, sternly staring at him while he twiddles his thumbs and tries to pretend he didn\'t say anything.');
                  } else {
                    scene.text('"Woah woah woah!" you say. "Hold up! I love you Kolka, but I am not about to let you put my panties on some juvenile boy!"');
                  }
                } else {
                  if (((s as any).brotherchat ?? 0) === 8) {
                    // TODO-QSP: dynamic text: "… I just want more time to play football with Zhendos and Mishan though," he mo...
                    scene.text(`"… I just want more time to play football with Zhendos and Mishan though," he moans. "I can't do anything with them when ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is dragging us to boring old Gadukino every other weekend."`);
                    if ((!((s as any).seepornofut ?? 0))) {
                      // TODO-QSP: dynamic text: "It''s okay Kolka," you console him. "Just enjoy the time you have with them. In...
                      scene.text(`"It's okay Kolka," you console him. "Just enjoy the time you have with them. In a couple years ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} might not force you to go anymore but you all might end up too busy to hang out."`);
                    } else {
                      if (((s as any).seepornofut ?? 0) >= 1) {
                        scene.text('"Pfft! More like you want more time to watch porn with them!" you laugh scoffingly.');
                        if (((s as any).mc_inventory ?? 0)?.['mag_porn'] === 0) {
                          scene.text('"We play football too!" Kolka protests while you tease him with a silly face and fake jerk off motions.');
                        } else {
                          if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
                            scene.text('"We play football too!" Kolka protests while you tease him with silly face and fake jerk off motions. "Hrmph! You\'re one to talk anyways," he grumbles. "I know about that magazine you hide under your bed."');
                            scene.text('"I don\'t know what you\'re talking about," you say with an air of feigned innocence and superiority. "I have never been anything other than ladylike!"');
                            scene.text('"Come on sis," he says with a look. "We were just talking about this. I watch porn. I know what girls do when no one is looking. Furiously schlicking it while biting down on your pillow <i>is</i> your version of ladylike."');
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
  scene.actions([
    { label: 'Continue', goto: ['brother', 'start'] },
  ]);
  scene.build();
}

function enterDTR(s: GameState, scene: SceneBuilder): void {
  (s as any).brother_DTR = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('"Kolka, we need to talk," you say.');
  scene.text('"About what?"');
  scene.text('"About us. Now that we\'ve started… doing stuff… we need to figure out where this is going."');
  scene.text('"I don\'t know what you mean," he says, looking confused.');
  // TODO-QSP: end
  scene.actions([
    { label: 'What are we doing?', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"What are we doing Kolka? I mean, what <i>are</i> we? Siblings? Lovers? Something else?"');
    scene.text('Kolka chews on his lip, not sure how to respond.');
    scene.text('"What we need to do is define our relationship. Mom and dad can\'t find out for sure, but we need to figure out for ourselves what we\'re doing."');
    scene.text('Kolka nods along. "So, what does that mean then?"');
    scene.actions([
      { label: 'Are we lovers or not?', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You take a deep breath.');
    scene.text('"Well, the first thing is, are we lovers? Is it actually romance between us? Or something else? Can we see other people? If we do, can we still do what we\'ve been doing?"');
    scene.text('Kolka considers for a moment before asking, "Would you get jealous if I started fucking other girls?"');
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 9;
    scene.text('You ponder the question for a moment before deciding, "No. It wouldn\'t bother me. Will you get jealous if I fuck other guys?"');
    scene.text('The question makes him flinch, but he quickly blurts out, "No! Why would I get jealous?" His response seemed a little too fast, a little too defensive, and for a moment, you wonder if he wanted something more with you. But there\'s nothing else for it. You have to move forward.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"Good. Cause I want to fuck other guys," you grin.');
    scene.text('"Psh, as if you think they could satisfy you the way I can."');
    scene.text('"Variety is the spice of life Kolka."');
    scene.text('"So…" he says, getting back on topic. "What does this make us? You said we need to define our relationship? If you want to see other guys, does that mean we aren\'t going to…?"');
    scene.text('You think for a few seconds.');
    scene.actions([
      { label: 'Siblings with benefit', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"You\'re my brother. I\'m your sister. That makes us siblings. But," you hold up your finger. "With benefits. If I want to have some fun with my brother, why shouldn\'t I? It\'s not any different from when we play football together, is it?"');
    scene.text('He nods eagerly. Whatever wounds he might have suffered earlier seem to be getting overridden by his teenage sexual desires. Good. It would be sad to be in love with your sister. That\'s just weird.');
    scene.text('"So we\'re still going to fuck?"');
    scene.text('"Yes, we\'re still goinng to fuck," you grin. "Maybe less if I get a boyfriend, but you know… Maybe he\'ll be bad in bed."');
    scene.actions([
      { label: 'End the conversation', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('You give his hair a small ruffle and stand up. Your relationship has successfully been defined. You\'re siblings. With benefits. It\'s just casual.');
    scene.text('<i>And will probably be a lot of fun.</i>');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Yes', goto: ['brother2', 'DTR_yes'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDTRYes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('The question takes you by surprise. Not what he said, but how it pierces through your chest, making you ache at just the thought of Kolka with another woman.');
  scene.text('"… yes…" you whisper.');
  scene.text('Your body trembles as your eyes meet his. He looks away for a second, chewing his lip again. And then he turns back and kisses you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', (-5), 'incest');
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    scene.text('You melt into the kiss, parting your lips as you feel his tongue snake inside your mouth, letting his warmth spread through you. A long moment later, he pulls away.');
    scene.text('"I don\'t want to fuck other girls either. I only want you."');
    scene.text('You smile back. "Me too."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You sit next to him, not saying anything, feeling stupidly happy for knowing your brother feels this way about you. Surprisingly, Kolka breaks the silence.');
    scene.text('"So… you said this was about defining our relationship. Does this mean you\'re my… girlfriend?"');
    scene.text('You consider for a moment before shaking your head.');
    scene.text('"No. I\'m your sister. That makes us even closer." And you lean in to kiss him again.');
    scene.actions([
      { label: 'Pull away', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/resident/apartment/home/sitrpar.jpg');
    scene.text('After a brief kiss, you pull away. Your relationship has successfully been defined. You\'re siblings. And lovers. You share a bond that few others will ever know. And it makes you so wonderfully happy.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Get into it', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 10;
    scene.img('images/shared/sex/kiss/kiss_lips.mp4');
    // TODO-QSP: dynamic text: You and Kolka makeout like the horny teenagers that you are. Your brother''s han...
    scene.text(`You and Kolka makeout like the horny teenagers that you are. Your brother's hands roam from your ${((st as any).pc_desc ?? 0)?.['breast'] ?? ''} chest to your thighs and you occasionally rub your hand across his crotch.`);
    scene.text('You take the odd break here and there to ensure that you\'re not about to get caught by your family. But you quickly return to greedily kissing each other, savoring the sensation of your taboo snogging.');
    qspCall(st, 'arousal', 'kiss', 10, 'incest');
    qspCall(st, 'arousal', 'foreplay', (-10), 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish up', handler: (st: GameState) => {
    scene.text('"Mmmph! Kolka," you try pulling yourself away from your brother, but he\'s not letting you.');
    scene.text('He groans and tries to force his tongue deeper into your mouth.');
    scene.text('You push him a little harder. "Kolka, we need to stop or we might get caught!"');
    scene.text('He looks at you, panting, "Fuck."');
    scene.text('"I know," you console him. "But it\'s just for now."');
    scene.text('You straighten out yourself and fix up your hair, trying to catch your breath and put away your lustful thoughts. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    qspCall(st, 'arousal', 'kiss', 5, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
      { label: 'Pants off', handler: (st: GameState) => {
    scene.text('"Pants," you manage to huff out between kisses.');
    scene.text('"What?" Kolka chuckles.');
    scene.text('"Pants. Off." you say a little more clearly this time.');
    // TODO-QSP: dynamic text: "Oh!" He excitedly starts yanking down on his pants while still making out with ...
    scene.text(`"Oh!" He excitedly starts yanking down on his pants while still making out with you. His ${((st as any).npc_dick ?? 0)?.['A34'] ?? ''}cm cock pops free, already fully hard, when he pulls down his underwear.`);
    qspCall(st, 'arousal', 'foreplay', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Jerk his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/handjob1.mp4');
    scene.text('Kolka moans into your mouth when you grasp his member and start stroking it.');
    scene.text('You continue kissing while you rub your brother\'s shaft up and down for a few minutes.');
    scene.text('He mumbles something and you feel him start to tense up, his cock has grown slick with his precum and you feel it starting to swell.');
    qspCall(st, 'arousal', 'hj', 10, 'incest');
    qspCall(st, 'arousal', 'foreplay', (-10), 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish him off', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/bossbjcum.jpg');
    scene.text('You pull your lips away from his and focus on jerking him to completion.');
    // TODO-QSP: dynamic text: "Fuck, <<$pcs_nickname>>!" he groans in a hushed tone. "Here it comes!"
    scene.text(`"Fuck, ${((st as any).pcs_nickname ?? '')}!" he groans in a hushed tone. "Here it comes!"`);
    scene.text('He rears his head back and starts bucking his hips slightly as he comes. Ropes of jizz fly from the tip of his cock onto his stomach and legs, as well as your hand. You keep working his dick until his orgasm is over. He breathlessly slumps back and you give his deflating member a few more tugs before giving him a loving and sweet kiss.');
    scene.text('"My, my, little brother," you tease. "Look at the mess you\'ve made!"');
    // TODO-QSP: dynamic text: Kolka has a huge grin on his face and looks at you. "You had a hand in that, <<$...
    scene.text(`Kolka has a huge grin on his face and looks at you. "You had a hand in that, ${((st as any).pcs_nickname ?? '')}."`);
    scene.text('"My hand was definitely on it," you joke. "I\'m sure you\'d love nothing more than to sit here and bask in it, but we need to get cleaned up before someone catches us."');
    scene.text('He sighs before nabbing some nearby tissue and starts wiping himself up.');
    qspCall(st, 'arousal', 'hj', 3, 'incest');
    qspCall(st, 'cum_call', 'hands', 'A34', 1);
    qspCall(st, 'stat', '');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Lick your hand clean', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/lickupcum.jpg');
    scene.text('You bring your cum-covered hand to your face and start licking up your sibling\'s semen.');
    scene.text('Kolka watches you for a moment. "If I knew you were gonna do that, I\'d have asked you to lick me clean instead of wasting these tissues," he says half-serious.');
    scene.text('You poke your tongue out at your brother before resuming cleaning his spunk from your hand.');
    qspCall(st, 'arousal', 'end');
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('You quickly straighten out yourself while Kolka pulls his pants back up. You peek into the hallway to check for anyone before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go wash your hands', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('You get up from the couch and head to the bathroom and wash your hands clean of your brother\'s semen.');
    qspCall(st, 'arousal', 'end');
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['vanrPar', ''] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Suck him off', goto: ['brother2', 'DTR_suck'] },
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

function enterDTRSuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/handjob/kotovhj.jpg');
  scene.text('You firmly squeeze your hand around the top of his cock.');
  scene.text('Pulling away from the kiss, you order him, "Not yet!"');
  scene.text('He gives you a contemptuous look before you slide down off the couch and get between his legs.');
  scene.text('"Ah," he sighs out when he realizes you want to blow him.');
  qspCall(s, 'arousal', 'hj', 3, 'incest');
  qspCall(s, 'arousal', 'kiss', (-3), 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Kiss his cock', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj.jpg');
    scene.text('You flash him a naughty smile before you lean down and plant your lips against the tip of his penis.');
    scene.text('"Fuck," he groans. "I love it, sis."');
    scene.text('You run your tongue across the head then up and down his shaft, savoring the taste of his precum leftover from your handjob.');
    qspCall(st, 'arousal', 'bj', 2, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Put it in your mouth', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj50.mp4');
    scene.text('You take the head of his cock into your mouth and begin bobbing your head up and down, using your tongue to massage his shaft.');
    scene.text('Kolka gasps with delight and places his hands on each side of your head, guiding you along at a slow, sensual pace.');
    scene.text('"So good," he moans.');
    scene.text('You spend a few minutes lovingly blowing your brother when he warns you that he\'s close again.');
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj13.mp4');
    scene.text('You double your efforts and speed up, using your hands to massage the bottom of his shaft and balls.');
    scene.text('His breathing gets louder and he starts to pant when he suddenly pushes down on the back of your head, holding you in place and fills your mouth with his hot load.');
    scene.text('"Fuck fuck fuck fuck!" he practically bellows out, and for a moment you\'re worried someone will hear him. But there\'s nothing you can do it about right now while he holds you in place.');
    scene.text('After what feels like a good 30 seconds, Kolka finally lets go - his orgasm finally over.');
    // TODO-QSP: dynamic text: He slumps back on the couch, looking absolutely spent. With a huge grin on his f...
    scene.text(`He slumps back on the couch, looking absolutely spent. With a huge grin on his face, he looks down at you. "Fucking. Amazing. ${((st as any).pcs_nickname ?? '')}."`);
    qspCall(st, 'arousal', 'bj', 3, 'incest');
    qspCall(st, 'stat', '');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Swallow it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/swallow3.mp4');
    scene.text('You return his gaze and give him one last treat. Making a show of it, you gulp down his fresh load, letting out a satisfied \'aaah!\'.');
    scene.text('"You really like that stuff?" Kolka asks, looking a bit uncomfortable.');
    scene.text('"It\'s really good," you say, giving his cock a few more licks.');
    scene.text('"If you say so."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('You quickly straighten out yourself while Kolka pulls his pants back up. You peek into the hallway to check for anyone before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(st, 'willpower', 'swallow', 'self');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Swallow it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Swallow it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/shared/sex/cum/mouth/swallow2.mp4');
    scene.text('You return his gaze and swallow down his slimy load.');
    // TODO-QSP: dynamic text: "You really don''t have to do that, <<$pcs_nickname>>," Kolka says. "I''m happy ...
    scene.text(`"You really don't have to do that, ${((st as any).pcs_nickname ?? '')}," Kolka says. "I'm happy enough with getting a blowjob."`);
    scene.text('You blush a little. "I don\'t know what came over me. I just wanted to do it."');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.text('You quickly straighten out yourself while Kolka pulls his pants back up. You peek into the hallway to check for anyone before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Go spit it out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_call', 'mouth', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.text('You pull your mouth off of your brother\'s deflating dick and tightly close your lips.');
    scene.text('"Aah!" Kolka sighs, content. "That was great!"');
    scene.text('You give him a curious look before you rush out of the living room and into the bathroom where you spit his cum into the sink.');
    scene.actions([
      { label: 'Finish', goto: ['vanrPar', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Jerk off finish', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/handjob/hand2.jpg');
    scene.text('You pull your lips off your brother\'s pulsing cock and start rapidly jerking it. A few seconds later, he starts shooting ropes of cum, groaning in absolute ecstasy. His load lands all over his lap, splashing onto his legs, his stomach and your hand.');
    // TODO-QSP: dynamic text: Kolka lies back on the couch, panting. "Ah! Thank you so much, <<$pcs_nickname>>...
    scene.text(`Kolka lies back on the couch, panting. "Ah! Thank you so much, ${((st as any).pcs_nickname ?? '')}! Your blowjobs are the best!"`);
    scene.text('He sits for a few more moments before he starts reaching for some tissue to wipe himself up.');
    qspCall(st, 'arousal', 'hj', 3, 'incest');
    qspCall(st, 'cum_call', 'hands', 'A34', 1);
    qspCall(st, 'stat', '');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] === 1) {
      scene.actions([
        { label: 'Lick your hand clean', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'arousal', 'end');
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/lickupcum.jpg');
    scene.text('You bring your cum-covered hand to your face and start licking up your sibling\'s semen.');
    scene.text('Kolka watches you for a moment. "If I knew you were gonna do that, I\'d have asked you to lick me clean instead of wasting these tissues," he says half-serious.');
    scene.text('You poke your tongue out at your brother before resuming cleaning his spunk from your hand.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    scene.text('You straighten out yourself and fix up your hair, trying to catch your breath and put away your lustful thoughts. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Go wash your hands', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    (st as any).cumspclnt = 9;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You get up from the couch and head to the bathroom and wash your hands clean of your brother\'s semen.');
    scene.actions([
      { label: 'Finish', goto: ['vanrPar', ''] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'Fuck him (vaginal)', goto: ['brother2', 'DTR_vaginal'] },
      { label: 'Fuck him (anal)', goto: ['brother2', 'DTR_anal'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDTRVaginal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'outfit', 'backup', 'sex');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    qspCall(s, 'shortgs', 'undress');
  }
  scene.img('images/shared/sex/handjob/kotovhj.jpg');
  scene.text('You take your mouth off of his cock and squeeze down on it.');
  scene.text('Kolka winces at once again being denied his orgasm.');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).panty_txt = ', slide your panties off';
  }
  // TODO-QSP: dynamic text: 'After a moment, you stand up ' + iif($clothingworntype <> 'nude', 'and start re...
  scene.text('After a moment, you stand up ' + ((((s as any).clothingworntype ?? 0) !== 'nude') ? ('and start removing your clothes') : ('')) + `${((s as any).panty_txt ?? '')} and sit on your brother's lap.`);
  scene.text('"Ready for some real fun, now, dear brother?" you ask him in your most seductive voice.');
  scene.text('He nods enthusiastically.');
  if (((s as any).preziktype ?? 0) !== 1) {
    qspCall(s, 'dinsex', 'boy_puts_condom');
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('"Kolka I am a virgin, you will be my first."');
  }
  scene.text('You lift yourself up and slowly lower yourself onto his stiff cock.');
  scene.text('"God, I love being inside of you," Kolka groans.');
  scene.text('"And I love you being inside me," you purr back.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/nipple_play1.mp4');
    // TODO-QSP: dynamic text: You move yourself up and down on your brother''s <<npc_dick[''A34'']>>cm cock, s...
    scene.text(`You move yourself up and down on your brother's ${((st as any).npc_dick ?? 0)?.['A34'] ?? ''}cm cock, slowly increasing your tempo until you find a pace both of you enjoy.`);
    // TODO-QSP: dynamic text: Kolka starts playing with your <<$titsize>> breasts, tweaking your nipples with ...
    scene.text(`Kolka starts playing with your ${((st as any).titsize ?? '')} breasts, tweaking your nipples with his fingers before putting his mouth over them and sucking.`);
    scene.text('You mewl in appreciation. "Mmm."');
    qspCall(st, 'arousal', 'kiss', (-5), 'incest');
    qspCall(st, 'arousal', 'foreplay', (-5), 'incest');
    qspCall(st, 'arousal', 'vaginal', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Doggy', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/pussytouch.jpg');
    scene.text('Before long, Kolka stops you and pulls you off of him, placing you on the couch.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, get on your hands and knees," he says.
    scene.text(`"${((st as any).pcs_nickname ?? '')}, get on your hands and knees," he says.`);
    scene.text('You comply and Kolka gets behind you and penetrates you again.');
    scene.text('Kolka starts thrusting deeply into you, the sound of your skin slapping against each other echoes through the room. He reaches between your legs and starts rubbing at your clit. You have to cover your mouth with your hand to keep from moaning too loudly.');
    qspCall(st, 'arousal', 'vaginal', (-5), 'incest');
    qspCall(st, 'arousal', 'clit_finger', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.text('Kolka can only take so much, however, and he soon cries out that he\'s going to come.');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/back1.jpg');
    scene.text('"Pull out!" you whisper loudly.');
    qspCall(st, 'arousal', 'vaginal', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.text('Kolka thrusts a few more times, before quickly removing his cock.');
    if (((st as any).preziktype ?? 0) !== 1) {
      scene.text('He pulls the condom off his dick and starts rapidly stroking himself, breathing heavily, before you feel his cum splattering across your buttocks and back.');
    } else {
      scene.text('You hear him rapidly stroking himself, breathing heavily, before you feel his warm cum splattering across your buttocks and back.');
    }
    qspCall(st, 'cum_call', 'back', 'A34', 1, '', '', 20);
    qspCall(st, 'cum_call', 'butt', 'A34', 1, '', '', 20);
    qspCall(st, 'arousal', 'vaginal', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.text('"Fuck!" he groans, a little too loudly, before he plops back down on the couch, completely spent.');
    scene.text('You turn your head and see your brother lying there, a satisfied smile etched across his face.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'outfit', 'restore', 'sex');
    qspCall(st, 'stat', '');
    scene.text('You quickly get redressed and straighten out yourself, trying to catch your breath while Kolka pulls his pants back up. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Come inside', handler: (st: GameState) => {
    scene.text('You start thrusting back against Kolka.');
    if (((st as any).preziktype ?? 0) !== 1) {
      scene.img('images/shared/sex/cum/cum71.jpg');
      scene.text('Kolka\'s thrusts suddenly become slower, but harder as he empties himself into the condom.');
    } else {
      scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
      // TODO-QSP: dynamic text: Kolka''s thrusts suddenly become slower, but harder as he empties himself inside...
      scene.text(`Kolka's thrusts suddenly become slower, but harder as he empties himself inside your ${((st as any).pc_desc ?? 0)?.['pussy'] ?? ''} pussy.`);
      qspCall(st, 'cum_call', '', 'A34', 1);
      qspCall(st, 'stat', '');
    }
    qspCall(st, 'arousal', 'vaginal', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.text('"Fuck!" he groans, a little too loudly, before he plops back down on the couch, completely spent.');
    scene.text('You turn your head and see your brother lying there, a satisfied smile etched across his face.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'outfit', 'restore', 'sex');
    qspCall(st, 'stat', '');
    scene.text('You quickly get redressed and straighten out yourself, trying to catch your breath while Kolka pulls his pants back up. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
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

function enterDTRAnal(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'outfit', 'backup', 'sex');
  scene.img('images/shared/sex/handjob/kotovhj.jpg');
  scene.text('"Not so fast," you say, squeezing down on his cock with your hand again.');
  // TODO-QSP: dynamic text: "Fuck, <<$pcs_nickname>>!" Kolka protests.
  scene.text(`"Fuck, ${((s as any).pcs_nickname ?? '')}!" Kolka protests.`);
  scene.text('"I want you in my ass," you whisper to him.');
  scene.text('He perks up and smiles. "Really?"');
  scene.text('"Mm-hmm."');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    (s as any).panty_txt = ', slide your panties off';
  }
  // TODO-QSP: dynamic text: 'After a moment, you stand up ' + iif($clothingworntype <> 'nude', 'and start re...
  scene.text('After a moment, you stand up ' + ((((s as any).clothingworntype ?? 0) !== 'nude') ? ('and start removing your clothes') : ('')) + `${((s as any).panty_txt ?? '')} and move to the end of the couch, presenting your ${((s as any).pc_desc ?? 0)?.['anus'] ?? ''} ass to your brother.`);
  scene.text('You turn your head back and wiggle your ass enticingly. "Come and get it."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked in the ass', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/anal23.jpg');
    qspCall(st, 'dinSex', 'boy_wants_anal', 'Kolka', 'lubri');
    scene.text('Kolka pushes his cock into your ass slowly, stopping once he\'s fully inside.');
    // TODO-QSP: dynamic text: "Fuck, <<$pcs_nickname>>, this is so hot!" he murmurs.
    scene.text(`"Fuck, ${((st as any).pcs_nickname ?? '')}, this is so hot!" he murmurs.`);
    scene.text('Kolka starts thrusting deeply into you, the sound of your skin slapping against each other echoes through the room. He reaches between your legs and starts rubbing at your clit. You have to cover your mouth with your hand to keep from moaning too loudly.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'clit_finger', 5, 'incest');
    qspCall(st, 'arousal', 'anal', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.text('Kolka can only take so much, however, and he soon cries out that he\'s going to come.');
    scene.actions([
      { label: 'Pull out', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/back1.jpg');
    scene.text('"Pull out!" you whisper loudly.');
    scene.text('Kolka thrusts a few more times, before quickly removing his cock.');
    qspCall(st, 'arousal', 'anal', 3, 'incest');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'back', 'A34', 1, '', '', 20);
    qspCall(st, 'cum_call', 'butt', 'A34', 1, '', '', 20);
    qspCall(st, 'stat', '');
    scene.text('You hear him rapidly stroking himself, breathing heavily, before you feel his warm cum splatter across your buttocks and backside.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'restore', 'sex');
    qspCall(st, 'stat', '');
    scene.text('You quickly get redressed and straighten out yourself, trying to catch your breath while Kolka pulls his pants back up. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Come inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/analcreampie/analcum.jpg');
    scene.text('You start thrusting back against Kolka.');
    // TODO-QSP: dynamic text: Kolka''s thrusts suddenly become slower, but harder as he empties himself inside...
    scene.text(`Kolka's thrusts suddenly become slower, but harder as he empties himself inside your ${((st as any).pc_desc ?? 0)?.['anus'] ?? ''} asshole.`);
    qspCall(st, 'arousal', 'anal', 5, 'incest');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'anus', 'A34', 1);
    qspCall(st, 'stat', '');
    scene.text('"Fuck!" he groans, a little too loudly, before he plops back down on the couch, completely spent.');
    scene.text('You turn your head and see your brother lying there, a satisfied smile etched across his face.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'outfit', 'restore', 'sex');
    qspCall(st, 'stat', '');
    scene.text('You quickly get redressed and straighten out yourself, trying to catch your breath while Kolka pulls his pants back up. You poke your head out into the hallway to make sure the coast is clear before leaving.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNattalk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('"So Kolka, did you like what you saw in the stairway?" You ask him coyly.');
  scene.text('"I was wondering if you did that for my benefit." He says hesitantly.');
  scene.text('"Well? Did you like it?"');
  scene.text('"Of course I did, Natasha wasn\'t wearing any panties, I could see everything."');
  scene.text('"She was wearing panties." You say with a grin. "I had stuffed them in her tight pussy."');
  scene.text('"You? Wow. That\'s hot."');
  if (((s as any).NatbelQW ?? 0)?.['KolkaWantsNat'] === 0) {
    scene.actions([
      { label: 'Offer to set something up between them', handler: (st: GameState) => {
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['KolkaTease'] = ((st as any).NatbelQW['KolkaTease'] ?? 0) + (1);
    ((st as any).NatbelQW = (st as any).NatbelQW ?? {})['KolkaWantsNat'] = 1;
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    if (((st as any).brotherQW ?? 0)?.['Sex'] > 6) {
      scene.text('"Would you like to fuck Natasha too? I could arrange something."');
      scene.text('"Could I?" He asks in disbelief.');
      scene.text('"Only if you promise to do exactly as I say."');
    } else {
      if (((st as any).npc_rel ?? 0)?.['A34'] >= 50) {
        scene.text('"Since you\'re constantly sporting a boner lately I thought I\'d help you out a bit. Would you like me to set something up with Natasha?"');
        scene.text('"You\'d be the best sister ever if you did." He says, grinning from ear to ear.');
        scene.text('"But you\'ll have to promise to do exactly as I say."');
      } else {
        scene.text('"Look Kolka, I know we haven\'t been very close lately. So I wanted to try and make it up to you. I was thinking I could help you hook you up with Natasha."');
        scene.text('Kolka looks at you dubiously. "Why would you do that?"');
        scene.text('"Do I need a reason to try and be a better sister? Do you want me to set it up or not?"');
        scene.text('"How would that work?"');
        scene.text('"Just trust me. As long as you do as I tell you it\'ll work out."');
      }
    }
    scene.text('"Of course, I promise." He says without hesitation.');
    scene.text('"Good, I\'ll keep you informed."');
    scene.actions([
      { label: 'Continue', goto: ['brother', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tease him', handler: (st: GameState) => {
    scene.text('<center><b>Kolka</b></center>');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('"She was dripping wet all day long." You say, eyeing the growing bulge in his pants.');
    scene.text('You lean in close to him and whisper in his ear, "Now you\'ll have something to jerk off to tonight."');
    scene.actions([
      { label: 'Continue', goto: ['brother', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  qspCall(s, 'arousal', 'kiss', (Math.floor(Math.random() * 5) + 1), 'incest');
  qspCall(s, 'stat', '');
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['kiss'] = ((s as any).brotherQW['kiss'] ?? 0) + (1);
  scene.img('images/shared/sex/kiss/kiss_lips.mp4');
  scene.text('With your stepfather gone, you take the opportunity you have and start kissing your brother.');
  scene.text('Your lips and tongues intertwine with pleasure and satisfaction.');
  if (((s as any).brother_lesson_oral ?? 0) === 1) {
    scene.actions([
      { label: 'Have him give you head', goto: ['brother2', 'cuni'] },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4) {
    scene.actions([
      { label: 'Give him a handjob', goto: ['brother2', 'hj'] },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5) {
    scene.actions([
      { label: 'Give him a blowjob', goto: ['brother2', 'bj'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['brother2', 'kiss_end'] },
    { label: 'Keep making out', goto: ['brother2', 'kiss2'] },
  ]);
  scene.build();
}

function enterKiss2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'kiss', (Math.floor(Math.random() * 3) + 1), 'incest');
  qspCall(s, 'arousal', 'foreplay', (Math.floor(Math.random() * 3) + 1), 'incest');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/kiss/kiss_lips.mp4');
  scene.text('You continue making out with your brother. His hands gently feel up your body, inciting pleasure and excitement wherever they go.');
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5) {
    scene.actions([
      { label: 'Give him a blowjob', goto: ['brother2', 'bj'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['brother2', 'kiss_end'] },
    { label: 'Give him a handjob', goto: ['brother2', 'hj'] },
  ]);
  scene.build();
}

function enterKissEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('Eventually, you the two of you reluctantly pull apart.');
  scene.text('"Better stop before we get caught," you say breathlessly.');
  scene.text('"Yeah…"');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['sitrPar', ''] },
  ]);
  scene.build();
}

function enterCuni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  (s as any).brothercuni = ((s as any).brothercuni ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hj.jpg');
  scene.text('"Kolka, you know you told me that you wanted more because I taste good?" you ask and Kolka looks a little confused.');
  scene.text('"I… What?"');
  scene.text('"When we were doing your anatomy homework, and you said that I tasted good?"');
  scene.text('Kolka looks a little embarrassed. "Umm, yeah?"');
  scene.text('You smile sweetly. "Would you like another taste?"');
  scene.text('He smiles broadly. "Absolutely!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylick1.mp4');
    scene.text('You quickly undress and get comfortable, Kolka watching you intensely as you do so. Sitting on the couch with your ass near the edge, you lay back and spread your legs as Kolka eagerly puts his head between them and starts to explore your rapidly wetting pussy.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'cuni', (Math.floor(Math.random() * 3) + 1), 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Enjoy', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylick3.mp4');
    scene.text('His tongue laps, flicks and probes at your intimate hole. Anything he lacks in skill he more than makes up in enthusiasm.');
    scene.text('He moves between sucking on your clit and plunging his tongue deep into you. The licking and sucking makes an obscene noise, and you have to fight the urge to loudly moan.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'cuni', (Math.floor(Math.random() * 3) + 3), 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylickorgasm.mp4');
    (st as any).orgasm_txt = 'As the sensations build, you find yourself gripping onto his head when your mind goes blank as Kolka\'s tongue makes another deep probe. You can feel your muscles clamp down as a wonderful orgasm violently bursts though you.';
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'cuni', (Math.floor(Math.random() * 3) + 3), 'incest');
    qspCall(st, 'stat', '');
    scene.text('Your legs are trembling uncontrollably as your previous actions are reversed, and you start trying to push Kolka off. He pushes against your hands as he returns to your clit. Catching your breath, you reluctantly have to tell him to stop.');
    scene.actions([
      { label: 'Enough', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'wear_last_worn');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/anatomylesson/12.jpg');
    scene.text('After a few more blissful seconds, he pulls back and asks "Are you sure you want me to stop?"');
    scene.text('"As much as I wish we could keep going, I don\'t want to push our luck," you reply.');
    scene.text('You get dressed as Kolka grabs a shirt from his pile of clothes and wipes his face clean.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'cuni', 1, 'incest');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
      { label: 'Give him a handjob', handler: (st: GameState) => {
    (st as any).brotherhj = ((st as any).brotherhj ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 1);
    qspCall(st, 'arousal', 'hj', (Math.floor(Math.random() * 3) + 1), 'incest');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hj.jpg');
    scene.text('"Do you want me to give you a <i>hand</i>?" you ask sweetly.');
    scene.text('"I thought you didn\'t want to push our luck?" Kolka asks and you sweetly smile.');
    scene.text('"Well, if you don\'t want to…"');
    scene.text('Kolka pulls his already very hard cock out. "No! I want to!"');
    scene.text('You start jerking it as you lean in to kiss him.');
    scene.actions([
      { label: 'Give him a handjob', goto: ['brother2', 'hj'] },
    ]);
  } },
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A34', 2);
    qspCall(st, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 1), 'incest');
    qspCall(st, 'stat', '');
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 6) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 6;
    }
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['bj'] = ((st as any).brotherQW['bj'] ?? 0) + (1);
    scene.text('"Get that cock out and I\'ll return the favor," you tell him and he starts pulling his cock out.');
    scene.text('"I thought we were short of time?" he asks and you smile.');
    scene.text('"You won\'t take that long…"');
    scene.text('"Shut up!" he retorts as he guides your head towards his hard cock.');
    scene.text('It doesn\'t take long before you feel his body start to tense up.');
    scene.text('"OH God, I\'m going to cum sis."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBj2(st, scene); (st as any).locArgs = __savedLocArgs; }
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

function enterHj(s: GameState, scene: SceneBuilder): void {
  (s as any).brotherhj = ((s as any).brotherhj ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 1);
  qspCall(s, 'arousal', 'hj', (Math.floor(Math.random() * 3) + 1), 'incest');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hj.jpg');
  scene.text('Snaking your hand into his pants, you pull out his cock. It is painfully erect in a way only a teenage boy anticipating sexual relief can be.');
  scene.text('You wrap your hand around it feeling the warmth and his quickening pulse. Continuing to kiss him you start to pump it vigorously, your mouth suppressing his moans and gasps as you work his cock hard and fast.');
  (s as any).brohj = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep going', goto: ['brother2', 'hj2'] },
    { label: 'Give him a blowjob', goto: ['brother2', 'bj'] },
  ]);
  scene.build();
}

function enterHj2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hj.jpg');
  scene.text('You continue to give him a handjob while making out, your arm is complaining with the effort but you know you have to get him off quickly.');
  scene.text('It doesn\'t take long before you feel his body start to stiffen beneath yours. He must be about to cum.');
  qspCall(s, 'arousal', 'hj', (Math.floor(Math.random() * 3) + 1), 'incest');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him cum in your hand', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/kotovhj.jpg');
    scene.text('Not stopping, you quicken your pace still further until you feel ropes of his thick cum spattering against your hand.');
    scene.text('Moving your head back, you survey your handiwork before smiling back at him and leaning in for a peck on the lips before getting up to find some tissues for your brother and to wash off your hand.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'Put your lips over the tip', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'incest');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'npc_relationship', 'modify', 'A34', 3);
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 6) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 6;
    }
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/swallow.mp4');
    scene.text('You break away from the kiss and moving quickly, you wrap your lips around the tip of his cock. The additional stimulus from your mouth enveloping him is more than he can handle and his cum explodes inside you, the taste of his hot salty cum filling your mouth.');
    scene.text('He spurts several times and you wait a several seconds more until nothing more comes out. After spending a moment to make sure he\'s finished, you suck hard to gather up all the cum in your mouth while pulling your lips back from his tip and leaving his cock completely clean and cum free. As your lips leave his cock, you tilt back your head to look at him, swallowing in the same motion. Kolka stares at you in disbelief of what you just did.');
    scene.text('"I didn\'t want to leave a mess," you smile bashfully.');
    scene.text('Licking his tip a few more times, you ensure that his cock is clean enough to put back inside his trousers, happily giving him a kiss on the cheek as he does so.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A34', 2);
  qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 5) + 1), 'incest');
  qspCall(s, 'stat', '');
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 6;
  }
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['bj'] = ((s as any).brotherQW['bj'] ?? 0) + (1);
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none') {
    scene.img('images/characters/pavlovsk/resident/kolka/sex/bj1.mp4');
  } else {
    scene.img('images/characters/pavlovsk/resident/kolka/sex/bj.mp4');
  }
  if (((s as any).brohj ?? 0) === 1) {
    (s as any).brohj = 0;
    scene.text('After a few more tugs on his cock, you break the kiss and lean downward.');
  } else {
    scene.text('Breaking away from the kiss, you unzip Kolka\'s trousers and lean down.');
  }
  scene.text('Taking his cock in your mouth, you begin to move your lips up and down his shaft, sucking gently. After an indeterminate amount of time goes by, you hear your brother\'s voice.');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>!" he whispers harshly. "I''m gonna cum!"
  scene.text(`"${((s as any).pcs_nickname ?? '')}!" he whispers harshly. "I'm gonna cum!"`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBj2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBj2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/swallow.mp4');
    scene.text('You diligently continue to blow him until you feel his hot cum spurting into your mouth. Gathering it all up, your remove your lips from Kolka\'s cock, tilting your head back and swallowing at the same time.');
    scene.text('"I can\'t believe you just swallowed like that," he says, breathless.');
    // TODO-QSP: dynamic text: "We shouldn''t leave a mess for <<$npc_nickname[''A29'']>> and dad to find, righ...
    scene.text(`"We shouldn't leave a mess for ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad to find, right?" you say, giving him a clean smile.`);
    scene.text('After licking his cock a little bit more to make sure it\'s clean, you finish up by helping him put it back in his trousers, lest your mother suddenly walk in and wonder what you\'re doing together.');
    scene.actions([
      { label: 'Finish', goto: ['sitrPar', ''] },
    ]);
  } },
    { label: 'Pull back', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    qspCall(st, 'arousal', 'end');
    scene.text('You quickly pull back and kneel in front of Kolka as he furiously jerks off in front of you. You close your eyes just as you feel his hot cum spatter against your face, flinching as it does. When he\'s finally done, you feel a few droplets drip down your cheeks onto the carpeted floor.');
    scene.text('Peeking through cum-slathered eyes, you look at your brother, saying, "Maybe we shouldn\'t have done it like this. Now we need to clean up before someone spots us."');
    scene.text('Leaving Kolka to clean his semen out of the carpet, you slink towards the bathroom to wash off your face.');
    scene.actions([
      { label: 'Finish', goto: ['vanrPar', ''] },
    ]);
  } },
    { label: 'Stick your tongue out', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    scene.img('images/shared/sex/cum/facial/facial25.mp4');
    scene.text('You pull back from your brother and close your eyes, sticking out your tongue. You briefly hear his cock fapping in front of you before you feel a jet of hot sticky cum fly into your mouth. The next spurt takes you on the cheek and you immediately feel it dripping down your neck.');
    scene.actions([
      { label: 'Swallow', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial26.mp4');
    scene.text('Waiting patiently, you take a moment to swallow what\'s already in your mouth. You stick your tongue back out and continue to wait, but you realize that he\'s probably spent at this point.');
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(st, 'cum_call', 'clothes', 'A34', 1);
      scene.text('You open your eyes and look down at the cum that\'s dripped from your face onto your clothes and floor.');
    } else {
      qspCall(st, 'cum_call', 'breasts', 'A34', 1);
      scene.text('You open your eyes and look down at the cum that\'s dripped from your face onto your breasts and floor.');
    }
    scene.text('"Maybe we shouldn\'t have finished like that…" you say, smiling wistfully at your brother.');
    scene.text('Leaving Kolka to clean his semen out of the carpet, you slink towards the bathroom to wipe off .');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vanrPar', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeup(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boystat', 'A34');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('"Hey, it\'s time to get up Kolka."');
  scene.text('"Mrph. Lemme alone," he mutters, eyes squeezing tight in annoyance.');
  // TODO-QSP: dynamic text: "Come on Kolka. <<$npc_nickname[''A29'']>>''s gonna be mad if you''re late for b...
  scene.text(`"Come on Kolka. ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}'s gonna be mad if you're late for breakfast again."`);
  scene.text('He doesn\'t respond except to grumble again, turning over and pulling his blanket tighter.');
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 2  ||  ((s as any).pcs_inhib ?? 0) >= 35  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 75) {
    scene.actions([
      { label: 'Tell him you\'ll show him your tits', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_morning'] = ((st as any).daystart ?? 0);
    scene.text('"I\'ll tell you what Kolka, if you get up now, I\'ll let you look at my tits."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'tits']; enterWakeupresponse(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      scene.actions([
        { label: 'Pull up your top', handler: (st: GameState) => {
    (st as any).whatshow = 'top';
    qspGoto(st, 'brother2', 'show');
  } },
      ]);
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Pull down your bra', handler: (st: GameState) => {
    (st as any).whatshow = 'bra';
    qspGoto(st, 'brother2', 'show');
  } },
        ]);
      }
    }
    if (((st as any).clothingworntype ?? 0) !== 'nude'  ||  ((st as any).braworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Trick him and don\'t do it', handler: (st: GameState) => {
    (st as any).whatshow = 'tits';
    qspGoto(st, 'brother2', 'trick');
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 3  ||  ((s as any).pcs_inhib ?? 0) >= 45  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 80) {
    scene.actions([
      { label: 'Tell him you\'ll show him your pussy', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_morning'] = ((st as any).daystart ?? 0);
    scene.text('"I\'ll tell you what Kolka, if you get up now, I\'ll show you my pussy."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'pussy']; enterWakeupresponse(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).clothingworntype ?? 0) !== 'nude'  ||  ((st as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Expose yourself', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A34', 4);
    scene.img('images/characters/pavlovsk/resident/kolka/pussyflash.jpg');
    scene.text('Following through on your promise, you pull down your panties and pull up your top, exposing your breasts and pussy to your brother. Still tired, he smiles only faintly in satisfaction.');
    scene.text('"There. Happy now?"');
    if (((st as any).brotherwaketrick ?? 0) === 1) {
      scene.text('"Pretty happy, yeah. Especially since you actually kept your promise this time."');
      scene.text('You gently lower your top again, not really sure what to say to that. He is right. You didn\'t keep your promise last time.');
      // TODO-QSP: dynamic text: "Well, I followed through this time. Hopefully you''ll forgive me. Now go get dr...
      scene.text(`"Well, I followed through this time. Hopefully you'll forgive me. Now go get dressed Kolka. ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} will kill you if you're late for school."`);
      (st as any).brotherwaketrick = 2;
    } else {
      scene.text('"Very. Not that I\'m complaining, but how come you showed me your boobs too? I only asked to see your pussy."');
      scene.text('"More motivation for you to wake up," you smile. You cover yourself up, putting your clothes back in place. "Bet it\'s difficult to go back to sleep with an erection that hard. Now go get dressed."');
    }
    scene.text('"Alright," he says, yawning one more time before folding his blanket for storage and beginning the process of getting ready for school.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Trick him and don\'t do it', handler: (st: GameState) => {
    (st as any).whatshow = 'pussy';
    qspGoto(st, 'brother2', 'trick');
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 5  ||  ((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 85) {
    scene.actions([
      { label: 'Tell him you\'ll give him a handjob', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_morning'] = ((st as any).daystart ?? 0);
    (st as any).brotherwakeup = ((st as any).brotherwakeup ?? 0) + (1);
    (st as any).brother_hj_wakeup = ((st as any).brother_hj_wakeup ?? 0) + (1);
    // TODO-QSP: dynamic text: "I''ll tell you what Kolka, if you get up now, I''ll help you deal with your mor...
    scene.text(`"I'll tell you what Kolka, if you get up now, I'll help you deal with your morning wood before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad come out of their room."`);
    scene.text('His eye cracks open to look at you, seemingly intrigued.');
    scene.text('"How?"');
    scene.text('"With a handjob of course!"');
    scene.text('"Hmmm…" He seems to consider for a moment before throwing off his blanket and revealing to you a rock-hard erection showing through his pajama pants. "Deal."');
    scene.actions([
      { label: 'Give your brother a handjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 5, 'incest');
    qspCall(st, 'cum_call', 'hands', ((st as any).boy ?? 0));
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 5) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 5;
    }
    scene.img('images/shared/sex/handjob/kotovhj.jpg');
    scene.text('Pulling down Kolka\'s pants, you get started immediately, gently working his member with your hand.');
    scene.text('Within just a few minutes he groans, ejaculating as his warm cum coats your fingers.');
    // TODO-QSP: dynamic text: Your duty done, you pull your now sticky hand back, saying, "Alright Kolka. A de...
    scene.text(`Your duty done, you pull your now sticky hand back, saying, "Alright Kolka. A deal's a deal. Now clean up and get dressed before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out here and sees you like this."`);
    scene.text('"Alright!" he says cheerfully, waddling away with his pants around his ankles to find some tissues to clean himself up.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).brotherQW ?? 0)?.['Sex'] >= 6  ||  ((s as any).pcs_inhib ?? 0) >= 50  ||  ((s as any).npc_rel ?? 0)?.['A34'] >= 85) {
    scene.actions([
      { label: 'Tell him you\'ll give him a blowjob', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_morning'] = ((st as any).daystart ?? 0);
    (st as any).brotherwakeup = ((st as any).brotherwakeup ?? 0) + (1);
    (st as any).brother_bj_wakeup = ((st as any).brother_bj_wakeup ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A34', 5);
    // TODO-QSP: dynamic text: "Okay Kolka, if you get up now, before <<$npc_nickname[''A29'']>> and dad come o...
    scene.text(`"Okay Kolka, if you get up now, before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} and dad come out of their room, I'll give you a blowjob."`);
    scene.text('His eye cracks open to look at you, seemingly intrigued.');
    scene.text('"How does that sound?"');
    // TODO-QSP: dynamic text: "Sounds pretty good to me," he says, throwing off his blanket and leaning back a...
    scene.text(`"Sounds pretty good to me," he says, throwing off his blanket and leaning back as he pulls his ${((st as any).dick ?? '')} cm cock out.`);
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'hj', 5, 'incest');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0));
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['bj'] = ((st as any).brotherQW['bj'] ?? 0) + (1);
    if (((st as any).brotherQW ?? 0)?.['Sex'] < 6) {
      ((st as any).brotherQW = (st as any).brotherQW ?? {})['Sex'] = 6;
    }
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none') {
      scene.img('images/characters/pavlovsk/resident/kolka/sex/bj1.mp4');
    } else {
      scene.img('images/characters/pavlovsk/resident/kolka/sex/bj2.mp4');
    }
    scene.text('Kneeling down, you lean forward and wrap your lips around Kolka\'s cock. You suck on it gently, but move your head forward and backward with quick bobbing motions.');
    scene.text('Several minutes go by before you feel hot viscous liquid shooting into your mouth without warning and hear your brother sighing loudly in satisfaction. You pull back as he finishes cumming and realizing there\'s nowhere else for you to deposit his sperm, swallow it in one gulp.');
    scene.text('"Thanks sis," he says. "That was pretty refreshing. Actually makes me want to get up in the morning if you\'re gonna give me great head like that!"');
    // TODO-QSP: dynamic text: "Glad I could help I guess," you reply, giving his cock a few more licks to make...
    scene.text(`"Glad I could help I guess," you reply, giving his cock a few more licks to make sure it's clean. "Now go get dressed for school. Before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out and yells at you for having your dick hanging out."`);
    scene.text('"Okay, okay," he says, getting up and tidying up the couch from where he was sleeping.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him alone', handler: (st: GameState) => {
    scene.text('You shrug, realizing that you\'re not going to find a way to wake him up any time soon without him being mad at you and decide to leave him be.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Yank his blanket off', handler: (st: GameState) => {
    ((st as any).brotherQW = (st as any).brotherQW ?? {})['last_sex_day_morning'] = ((st as any).daystart ?? 0);
    scene.text('"Come on Kolka! Wake. UP!"');
    if (((st as any).clothingworntype ?? 0) === 'nude') {
      scene.text('With a mighty tug, you yank the blanket off of him, leaving him clutching himself and shivering on the couch. After a few moments, he forces his eyes open, blinking wearily as he sits up on the couch and shamelessly glances up and down your naked body.');
    } else {
      scene.text('With a mighty tug, you yank the blanket off of him, leaving him clutching himself and shivering on the couch. After a few moments, he forces his eyes open, blinking wearily as he sits up on the couch, glaring at you with half closed eyes.');
    }
    if (((st as any).brotherQW ?? 0)?.['Sex'] >= 7) {
      scene.text('"You know, it\'s a good thing that you put out or I might not like you as much."');
      scene.text('Rolling your eyes, you toss your brother\'s blanket into the corner.');
      // TODO-QSP: dynamic text: "Yeah, well lucky for you, I happen to go above and beyond the qualities of a go...
      scene.text(`"Yeah, well lucky for you, I happen to go above and beyond the qualities of a good sister. Including getting her annoying little brother out of bed when he needs to be getting ready for school. Now go get dressed before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out and yells at you!"`);
    } else {
      if (((st as any).brotherQW ?? 0)?.['Sex'] === 6) {
        scene.text('"You\'re lucky that you give me blowjobs or I might actually get mad at you."');
        scene.text('You throw your brother\'s blanket into the corner.');
        // TODO-QSP: dynamic text: "You''re lucky I decide to give you blowjobs at all! Keep this up and that might...
        scene.text(`"You're lucky I decide to give you blowjobs at all! Keep this up and that might change. You might end up having to get your own rocks off," you sneer, miming a jerk-off motion at him. "Now go get dressed before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out and yells at you too!"`);
      } else {
        if (((st as any).brotherQW ?? 0)?.['Sex'] === 5) {
          qspCall(st, 'npc_relationship', 'modify', 'A34', (-1));
          scene.text('"Not even handjobs are worth this," he mutters.');
          // TODO-QSP: dynamic text: "Yeah well I can always stop if you''re gonna be a little baby about it," you sa...
          scene.text(`"Yeah well I can always stop if you're gonna be a little baby about it," you say, throwing your brother's blanket into the corner. "Now go get dressed before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out here and yells at you."`);
        } else {
          if (((st as any).clothingworntype ?? 0) === 'nude') {
            qspCall(st, 'npc_relationship', 'modify', 'A34', (-1));
            scene.text('"At least you have the decency to give me a good view when you ruin my sleep in the morning."');
            scene.text('You roll your eyes in exasperation and throw his blanket into the corner.');
            // TODO-QSP: dynamic text: "Shut the fuck up and get dressed for school Kolka. Before <<$npc_nickname[''A29...
            scene.text(`"Shut the fuck up and get dressed for school Kolka. Before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} comes out here and yells at the both of us."`);
          } else {
            qspCall(st, 'npc_relationship', 'modify', 'A34', (-1));
            scene.text('"I hate you."');
            // TODO-QSP: dynamic text: "Oh stop being so melodramatic," you say, rolling your eyes and tossing his blan...
            scene.text(`"Oh stop being so melodramatic," you say, rolling your eyes and tossing his blanket into the corner. "Now get ready for school before ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} yells at you."`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWakeupresponse(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'tits'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none') {
    scene.text('He cracks open an eye. "I don\'t need to get up to do that."');
    scene.text('You look down at yourself and remember that you\'re already topless. Right. That wasn\'t a very good plan…');
    scene.actions([
      { label: 'Back to the drawing board', goto: ['brother2', 'wakeup'] },
    ]);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'pussy'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('He cracks open an eye. "I don\'t need to get up to do that."');
      scene.text('You look down at yourself and remember that you\'re naked. Right. That wasn\'t a very good plan…');
      scene.actions([
        { label: 'Back to the drawing board', goto: ['brother2', 'wakeup'] },
      ]);
    } else {
      if (((s as any).brotherwaketrick ?? 0) === 1) {
        scene.text('He opens his eyes slowly, looking at you with suspicion.');
        scene.text('"You\'re not just going to leave like you did last time are you?"');
        scene.text('"No Kolka."');
        scene.text('"You promise? For real this time?"');
        scene.text('"I promise."');
        scene.text('He pulls back his blanket and sits up, rubbing the sleep from his eyes before focusing on you.');
      } else {
        scene.text('He opens his eyes slowly, looking at you with suspicion.');
        scene.text('"This isn\'t just some trick to get me out of bed?"');
        scene.text('"No Kolka."');
        scene.text('"You promise?"');
        scene.text('"I promise."');
        scene.text('He pulls back his blanket and sits up, rubbing the sleep from his eyes before focusing on you.');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 4);
  if (((s as any).whatshow ?? 0) === 'top') {
    scene.img(`images/characters/pavlovsk/resident/kolka/titflash${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    scene.text('Following through on your promise, you lift up your top, revealing your breasts to your brother. Still tired, he smiles only faintly in satisfaction.');
  } else {
    if (((s as any).whatshow ?? 0) === 'bra') {
      scene.img('images/characters/pavlovsk/resident/kolka/titflash5.jpg');
      scene.text('Following through on your promise, you pull down your bra, revealing your breasts to your brother. Still tired, he smiles only faintly in satisfaction.');
    }
  }
  scene.text('"There. Happy now?"');
  if (((s as any).brotherwaketrick ?? 0) === 1) {
    scene.text('"Pretty happy, yeah. Especially since you actually kept your promise this time."');
    if (((s as any).whatshow ?? 0) === 'top') {
      scene.text('You gently lower your top again, not really sure what to say to that. He is right. You didn\'t keep your promise last time.');
    } else {
      if (((s as any).whatshow ?? 0) === 'bra') {
        scene.text('You gently pull your bra up again, not really sure what to say to that. He is right. You didn\'t keep your promise last time.');
      }
    }
    scene.text('"Well, I followed through this time. Hopefully you\'ll forgive me. Now go get dressed Kolka."');
    (s as any).brotherwaketrick = 2;
  } else {
    scene.text('"Very."');
    scene.text('"Good." You cover yourself up, putting your clothes back in place. "Now go get dressed."');
  }
  scene.text('"Alright," he says, yawning one more time before folding his blanket for storage and beginning the process of getting ready for school.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterTrick(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).daystart ?? 0);
  (s as any).brotherwaketrick = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A34', (-5));
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('You wait for him to be more or less fully awake before snatching his blanket and move away.');
  scene.text('"Hey!" he cries. "What are you doing?"');
  // TODO-QSP: dynamic text: "I''m leaving. What the hell is wrong with you? You really thought I was gonna s...
  scene.text(`"I'm leaving. What the hell is wrong with you? You really thought I was gonna show you my ${((s as any).whatshow ?? '')}?"`);
  if (((s as any).brotherQW ?? 0)?.['Sex'] === 2  ||  ((s as any).brotherQW ?? 0)?.['Sex'] === 3) {
    scene.text('"You\'ve let me look at you before!"');
    scene.text('"Yeah well, this isn\'t \'before\'. I\'m not doing it today."');
  } else {
    if (((s as any).brotherQW ?? 0)?.['Sex'] >= 4) {
      scene.text('"You\'ve done so much with me before!"');
      scene.text('"Yeah well, this isn\'t \'before\'. I\'m not doing anything today."');
    }
  }
  scene.text('"Liar!" he screams at you.');
  scene.text('"Listen here you little-!"');
  scene.text('<b><i>"Hey!"</i></b> your mother shouts from the bedroom. "What is all this racket going on so early in the morning?! You two get along or so help me I will spank you! I don\'t care how old you are!"');
  scene.text('Glaring silently at one another, the two of you retreat after a ceasefire being called by your mother. This probably wasn\'t good for your relationship though…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMorninghj(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).daystart ?? 0);
  (s as any).brotherwakeup = ((s as any).brotherwakeup ?? 0) + (1);
  (s as any).brother_hj_wakeup = ((s as any).brother_hj_wakeup ?? 0) + (1);
  qspCall(s, 'arousal', 'hj', 5, 'incest');
  qspCall(s, 'cum_call', 'hands', ((s as any).boy ?? 0));
  qspCall(s, 'npc_relationship', 'modify', 'A34', 5);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 5) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 5;
  }
  scene.img('images/shared/sex/handjob/kotovhj.jpg');
  scene.text('Kneeling down next to the sofa, you carefully pull back his blanket to see his morning erection sticking through his pants. Slipping his cock out, you wrap your hand around it and begin to gently work it up and down, feeling it harden even more under your grip.');
  scene.text('Kolka starts to stir and blearily opens his eyes in confusion to see you giving him head.');
  scene.text('"Whaa-? What\'s happening? What are you doing?"');
  scene.text('"I thought that would be obvious. I\'m giving you a handjob to wake you up!" You smile at him, not for a moment stopping your jerking hand. "This little guy got up even earlier than you did."');
  scene.text('Your brother sighs in satisfaction, your hand continuing to work his cock. After several minutes he orgasms, his sticky cum spilling all over your hand.');
  scene.text('As you think about what you should do to clean it off, you hear him saying, "Handjobs are great and everything, but do you think you could try a blowjob next time instead?"');
  scene.text('"I\'ll think about it," you say, rolling your eyes in amusement as you walk away, your brother automatically beginning to get ready for school.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterMorningbj(s: GameState, scene: SceneBuilder): void {
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['last_sex_day_morning'] = ((s as any).daystart ?? 0);
  (s as any).brotherwakeup = ((s as any).brotherwakeup ?? 0) + (1);
  (s as any).brother_bj_wakeup = ((s as any).brother_bj_wakeup ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'incest');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
  ((s as any).brotherQW = (s as any).brotherQW ?? {})['bj'] = ((s as any).brotherQW['bj'] ?? 0) + (1);
  qspCall(s, 'npc_relationship', 'modify', 'A34', 10);
  if (((s as any).brotherQW ?? 0)?.['Sex'] < 6) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['Sex'] = 6;
  }
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none') {
    scene.img('images/characters/pavlovsk/resident/kolka/sex/bj1.mp4');
  } else {
    scene.img('images/characters/pavlovsk/resident/kolka/sex/bj2.mp4');
  }
  scene.text('Kneeling down, you carefully pull back his blanket to see his morning erection sticking through his pants. Slipping his cock out, you wrap your lips around it and begin to suck gently.');
  scene.text('Kolka starts to stir and blearily opens his eyes in confusion to see you giving him head.');
  scene.text('"Whaa-? What\'s happening? What are you doing?"');
  scene.text('"What\'s it look like I\'m doing?" you say after removing his cock from your mouth so you can speak. "I\'m giving you your morning blowjob so you can get up in time for school."');
  scene.text('With no further explanations, you get back to blowing your brother. A few more minutes go by and you hear Kolka groan as his hot cum shoots into your mouth.');
  scene.text('"You\'re the best sister ever…"');
  scene.text('Swallowing his cum, you flash him a toothy grin. "I know. Now up an at\'em kiddo! I don\'t do this just so you can go back to sleep."');
  scene.text('Having been given sufficient positive reinforcement, he obediently gets up and starts going about tidying the sofa and getting ready to go to school.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterVideoGames(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/kolka/gaming/${(Math.floor(Math.random() * 3) + 1)}.jpg`);
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'clothing', 'wear_last_worn');
    scene.text('You pull your clothing on before asking him to play.');
  }
  scene.text('"Kolka do you mind if I play with you?" you ask him.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['brother2', 'video_games2'] },
  ]);
  scene.build();
}

function enterVideoGames2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).first_sex_dare ?? 0) >= 2  &&  ((s as any).first_sex_dare_darstart ?? 0) !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * (10 - ((s as any).brother_alt_game ?? 0) + 1)) + (((s as any).brother_alt_game ?? 0))) === 10  &&  ((s as any).brother ?? 0)?.['tempted'] >= 1  &&  ((s as any).brother ?? 0)?.['horny'] >= 10) {
    (s as any).brother_alt_game = 0;
    if (((s as any).brother ?? 0)?.['SexQW'] >= 7) {
      (s as any).first_sex_dare = 6;
    }
    qspGoto(s, 'brother2', 'brother_alt_game_ask');
  } else {
    if (((s as any).brother_alt_game ?? 0) < 10) {
      (s as any).brother_alt_game = ((s as any).brother_alt_game ?? 0) + (1);
    }
  }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).gaming_taunt ?? 0) >= 5) {
    if (((s as any).npc_QW ?? 0)?.['A34'] < 2) {
      ((s as any).npc_QW = (s as any).npc_QW ?? {})['A34'] = 2;
    }
    (s as any).gaming_rand = (Math.floor(Math.random() * 10) + 1);
  } else {
    (s as any).gaming_rand = 0;
  }
  (s as any).sitting_on_sofa = 3;
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/pavlovsk/school/boy/kolka/brother.jpg');
  if (((s as any).npc_rel ?? 0)?.['A34'] < 50) {
    (s as any).sitting_on_sofa = 0;
    scene.text('"Not right now! I\'ve almost beaten this level!" he screams at you.');
    scene.text('"Fine little turd!" you snap at him as you turn to leave the room.');
    scene.actions([
      { label: 'Leave', goto: ['korrPar', ''] },
    ]);
  } else {
    if (((s as any).gaming_rand ?? 0) > 1  &&  ((s as any).brother ?? 0)?.['Confidence'] >= 20) {
      scene.text('"Sure." he says moving over to give you room. However, as soon as you sit down he adds.');
      scene.text('"<b>Only… on one condition!</b>" Giving him a wary look you ask him "What kind of <i>Condition</i>?"');
      scene.text('Kolka quickly says "Loser has to do <b>what ever</b> the winner says!"');
      scene.text('Unsure of yourself you think about your answer.');
      scene.actions([
        { label: '<b>Agree and play</b>', handler: (st: GameState) => {
    // TODO-QSP: :repick2
    (st as any).game_dare = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).game_dare ?? 0) === ((st as any).game_dare_store ?? 0)) {
      // TODO-QSP: jump 'repick2'
    }
    (st as any).game_dare_store = ((st as any).game_dare ?? 0);
    qspGoto(st, 'brother2', 'video_gaming');
  } },
        { label: 'Tell him no for now', goto: ['sitrPar', ''] },
      ]);
    } else {
      if (((s as any).gaming_rand ?? 0) > 5  &&  ((s as any).brother ?? 0)?.['Confidence'] >= 10) {
        scene.text('"Sure." he says moving over to give you room. However, as soon as you sit down he adds.');
        scene.text('"<b>Only… on one condition!</b>" Giving him a wary look you ask him "What kind of <i>Condition</i>?"');
        scene.text('Kolka quickly says "Loser has to do what ever the winner says!"');
        scene.text('Unsure of yourself you think about your answer.');
        scene.actions([
          { label: '<b>Agree and play</b>', handler: (st: GameState) => {
    (st as any).game_dare = (Math.floor(Math.random() * 2) + 1);
    qspGoto(st, 'brother2', 'video_gaming');
  } },
          { label: 'Tell him no for now', goto: ['sitrPar', ''] },
        ]);
      } else {
        if (((s as any).gaming_rand ?? 0) > 8  ||  ((s as any).brother ?? 0)?.['Confidence'] >= 10  &&  ((s as any).gaming_rand ?? 0) > 0) {
          scene.text('"Sure." he says moving over to give you room. However, as soon as you sit down he adds.');
          scene.text('"One condition!" Giving him a wary look you ask him "What kind of <i>Condition</i>?"');
          scene.text('Kolka quickly says "Loser has to do what the winner says!"');
          scene.text('Unsure of yourself you think about your answer.');
          scene.actions([
            { label: '<b>Agree and play</b>', handler: (st: GameState) => {
    (st as any).game_dare = 1;
  }, goto: ['brother2', 'video_gaming'] },
            { label: 'Tell him no for now', goto: ['sitrPar', ''] },
          ]);
        } else {
          scene.text('"Sure but you know you can\'t beat me!" he says as he sticks it tongue out at you.');
          scene.actions([
            { label: 'Play', handler: (st: GameState) => {
    (st as any).game_dare = 0;
  }, goto: ['brother2', 'video_gaming'] },
            { label: 'Tell him you changed your mind', goto: ['sitrPar', ''] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVideoGaming(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/controller.jpg');
  scene.text('You pick up the controller while your brother loads a new game.');
  scene.text('"Alright here we go! Your going down!" he says stiting back down next to you.');
  scene.text('Wanting to win you wonder if you can beat him?');
  qspCall(s, 'willpower', 'misc', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '<b>Give it all you\'ve got!</b>', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '<b>Give it all you\'ve got!</b>', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 51) + 25));
    qspGoto(st, 'brother2', 'video_gaming_start', '3');
  } },
    ]);
  }
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Try to beat him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Try to beat him', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'easy');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 25) + 1));
    qspGoto(st, 'brother2', 'video_gaming_start', '2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<i>Play for fun</i>', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'gaming', (Math.floor(Math.random() * 6) + 0));
    qspGoto(st, 'brother2', 'video_gaming_start', '1');
  } },
    { label: '<i>Take it easy on your brother</i>', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'gaiming', (Math.floor(Math.random() * 6) + 0));
    qspGoto(st, 'brother2', 'video_gaming_start', '0');
  } },
  ]);
  scene.build();
}

function enterVideoGamingStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 16) + 15));
  scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/${(Math.floor(Math.random() * 3) + 1)}.jpg`);
  qspCall(s, 'stat', '');
  if (String((s as any).locArgs?.[1] ?? '') === 0) {
    (s as any).temp_winchance = (Math.floor(Math.random() * (10 - (-2) + 1)) + ((-2)));
    scene.text('In it for the fun and taking it easy on Kolka.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 1) {
      (s as any).temp_winchance = (Math.floor(Math.random() * 10) + 1);
      scene.text('In it for the fun you still hope to beat Kolka.');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 2) {
        (s as any).temp_winchance = (Math.floor(Math.random() * 6) + 5);
        scene.text('Focusing on the game you grip your controller and start playing.');
      } else {
        (s as any).temp_winchance = (Math.floor(Math.random() * 3) + 8);
        scene.text('Giving it your all you focus hard on trying your best to beat Kolka.');
      }
    }
  }
  scene.text('You both wait for the game to load. It\'s an older system so it takes a bit of time.');
  scene.text('"Why is this taking so long?" you ask.');
  scene.text('Kolka says "I don\'t know. but when it does you\'re going down!"');
  scene.text('"Yea right…" you say just as the game loads. You both start playing intently. Hooping and hollering. Several times it looks like Kolka will win only for you to take the lead.');
  if (((s as any).locat ?? 0)?.['Mom_athome'] === 1) {
    scene.text('<i>At some point your mother peeks her head in and tells you to both to keep it down.</i>');
  }
  if (String((s as any).locArgs?.[1] ?? '') === 3) {
    scene.text('You having taken the lead, Kolka steels him self for a last minute come back.');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      scene.text('Having been neck and neck the hole game it\'s near its end.');
    } else {
      scene.text('Kolka is in the lead but you still have a chance to come back.');
    }
  }
  if (((s as any).pcs_gaming ?? 0) >= 50) {
    (s as any).temp_winchance = ((s as any).temp_winchance ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  } else {
    (s as any).temp_winchance = ((s as any).temp_winchance ?? 0) - (1);
  }
  if (((s as any).temp_winchance ?? 0) > (Math.floor(Math.random() * 2) + 7)) {
    (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + ((Math.floor(Math.random() * 5) + 1));
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) + ((Math.floor(Math.random() * 11) + 5));
    scene.text('<center><b><font color="green">---------- YOU WIN! ----------</font></b></center>');
    scene.actions([
      { label: 'Continue', goto: ['brother2', 'video_gaming_stop', 'win'] },
    ]);
  } else {
    (s as any).pcs_mood = ((s as any).pcs_mood ?? 0) - ((Math.floor(Math.random() * 5) + 1));
    ((s as any).brother = (s as any).brother ?? {})['Confidence'] = ((s as any).brother['Confidence'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    scene.text('<center><b><font color="RED">---------- YOU LOSE! ----------</font></b></center>');
    scene.actions([
      { label: 'Continue', goto: ['brother2', 'video_gaming_stop', 'lose'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVideoGamingStop(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/${(Math.floor(Math.random() * 3) + 1)}.jpg`);
  if (String((s as any).locArgs?.[1] ?? '') === 'win') {
    if ((!((s as any).game_dare ?? 0))) {
      scene.text('Having won you say to Kolka "Ha! Eat it bro!" Your brother bummed out that he lost lets out a quick sigh and goes back to playing solo.');
      qspCall(s, 'brother2', 'video_gaming_taunt');
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', 'sofa');
  } },
      ]);
    } else {
      if (((s as any).game_dare ?? 0) === 1) {
        scene.text('Having won you say to Kolka "Alright, it looks like you have to do what I say… hmmm…" Your brother bummed out that he lost lets out a quick sigh and readies him self for your task.');
        scene.text('Not having much to work with you wonder what you could make him do?');
      } else {
        if (((s as any).game_dare ?? 0) === 2) {
          scene.text('Having won you say to Kolka "Alright, it looks like you have to do what I say… hmmm…" Your brother bummed out that he lost lets out a quick sigh and readies him self for your task.');
          scene.text('You could make him strip? Maybe have him do something? You wonder what you could make him do?');
        } else {
          scene.text('Having won you say to Kolka "Alright, it looks like you have to do what I say… hmmm…" Your brother bummed out that he lost lets out a quick sigh and readies him self for your task.');
          scene.text('You\'re feeling a little bold and you could take advantage of your win. You wonder what you could make him do?');
        }
      }
    }
    if (((s as any).game_dare ?? 0) >= 1) {
      scene.actions([
        { label: 'Dare him to flash you', goto: ['brother2', 'flash_dare'] },
      ]);
    }
    if (((s as any).game_dare ?? 0) >= 2) {
      scene.actions([
        { label: 'Dare him to strip', goto: ['brother2', 'strip_dare'] },
      ]);
    }
    if (((s as any).game_dare ?? 0) >= 3) {
      scene.actions([
        { label: 'Dare him to do something humiliating', goto: ['brother2', 'humiliating_dare'] },
      ]);
    }
  } else {
    if ((!((s as any).game_dare ?? 0))) {
      if (((s as any).gaming_taunt ?? 0) >= 3) {
        scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/taunt/kolka/${(Math.floor(Math.random() * 32) + 1)}.jpg`);
      }
      scene.text('Having lost Kolka says "Ha! Eat it sis!" Your brother pumped that he won does a quick victory dance and goes back to playing solo.');
      if (((s as any).gaming_taunt ?? 0) >= 3) {
        scene.text('However, before he does, he points his butt in your face and moons you while he continues taunting you.');
      }
      scene.actions([
        { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', 'sofa');
  } },
      ]);
    } else {
      if (((s as any).game_dare ?? 0) === 1) {
        scene.text('Having lost, Kolka starts boasting and says "HAHA you lose! Alright, it looks like you have to do what I say… hmmm… let me think." Bummed out about losing you let out a quick sigh and ready yourself for his dare.');
        scene.text('You have not taken things too far yet but you wonder what he might make you do.');
      } else {
        if (((s as any).game_dare ?? 0) === 2) {
          scene.text('Having lost, Kolka starts boasting and says "HAHA you lose! Alright, it looks like you have to do what I say… hmmm… let me think." Bummed out about losing you let out a quick sigh and ready yourself for his dare.');
          scene.text('You feel like he will "up the anty" and are a little worried about what he will dare you to do…');
        } else {
          scene.text('Having lost, Kolka starts boasting and says "HAHA you lose! Alright, it looks like you have to do what I say… hmmm… let me think." Bummed out about losing you let out a quick sigh and ready yourself for his dare.');
          scene.text('You are dreading what Kolka has in mind for your dare.');
        }
      }
    }
    if (((s as any).game_dare ?? 0) >= 1) {
      scene.actions([
        { label: '"OK whats my dare?"', handler: (st: GameState) => {
    qspGoto(st, 'brother2', 'lose_dares2', ((st as any).game_dare ?? ''));
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlashDare(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'voyeur', 5, 'incest');
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/taunt/kolka/${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('"Alright then I DARE YOU TO FLASH ME!" you say with conviction. "And you have to hold until I say so."');
  scene.text('Kolka nods and puts his hands under the waste band of his shorts and pulls down in one quick motion.');
  scene.text('At this point you are standing in the living room with Kolka bending over, his shorts down around his ankles and his bare butt open for all to see.');
  scene.text('Figuring you might as well make him squirm a bit you say "Hmm that\'s a nice butt you got there little brother. You should show it off more often."');
  // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>! Is this enough? Mom will come in and see!" he wines.
  scene.text(`"Come on ${((s as any).pcs_nickname ?? '')}! Is this enough? Mom will come in and see!" he wines.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him he can stop', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/dress.jpg');
    scene.text('"Alright…" you say "You can stop." you say.');
    scene.text('Kolka quickly pulls his pants back up and you go back to gaming.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', 'sofa');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLoseDares1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).game_dare ?? 0) !== 0) {
    scene.actions([
      { label: '"OK whats my dare?"', handler: (st: GameState) => {
    qspGoto(st, 'brother2', 'lose_dares2', ((st as any).game_dare ?? ''));
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLoseDares2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img(`${qspFunc(s, '$brother_face_image')}`);
  // TODO-QSP: dynamic text: "Ok <<$pcs_nickname>>, I dare you… too…" he say as he looks around as if he is t...
  scene.text(`"Ok ${((s as any).pcs_nickname ?? '')}, I dare you… too…" he say as he looks around as if he is thinking about what to dare you to do.`);
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'brother2', 'caught_risk');
      if (((s as any).dare_lick ?? 0) < 3) {
        qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
        scene.text('too… lick whipped cream off my fingers!" he says boastfully.');
      } else {
        if (((s as any).dare_lick ?? 0) < 4) {
          qspCall(s, 'willpower', 'exhib', 'resist');
          scene.text('too… let me lick whipped cream off your tits!" he says boastfully.');
          if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
            scene.text('"What! you perv! I\'m not-" he stops you and quickly says "What are you chicken?"');
          }
        } else {
          if (((s as any).dare_lick ?? 0) >= 4) {
            qspCall(s, 'willpower', 'exhib', 'resist', 'hard');
            scene.text('too… let me lick whipped cream off your tits <i>AND</i> you have to be <b>naked</b>!" he says boastfully.');
            if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
              scene.text('"What! you perv! I\'m not-" he stops you and quickly says "What are you chicken?"');
            }
          }
        }
      }
      scene.actions([
        { label: 'Do it', goto: ['brother2', 'lose_dares3', '1', 'lick'] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'resist', 'easy');
      qspCall(s, 'brother2', 'caught_risk');
      scene.text('too… Flash me your tits!" he says boastfully.');
      if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
        scene.text('"What! you perv! I\'m not-" he stops you and quickly says "What are you chicken?"');
      }
      scene.actions([
        { label: 'Do it', goto: ['brother2', 'lose_dares3', '1', 'tits'] },
      ]);
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 2) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        // TODO-QSP: 'too… uhh" he seems unsure of what he wants. "Well, I''m not going to sit here all day." you say imp...
        if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
          scene.text('"What! you perv! Why do you want to rub my bu-" he stops you and quickly says "What are you chicken?"');
        }
        scene.actions([
          { label: 'Do it', goto: ['brother2', 'lose_dares3', '3', 'rub_butt'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'exhib', 'resist');
        scene.text('too… dance… naked!" he says boastfully.');
        if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
          scene.text('"What! you perv! I\'m not-" he stops you and quickly says "What are you chicken?"');
        }
        scene.actions([
          { label: 'Do it', goto: ['brother2', 'lose_dares3', '2', 'dance'] },
        ]);
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 3) {
        qspCall(s, 'boyStat', 'A34');
        // TODO-QSP: :repick3
        if (((s as any).brother ?? 0)?.['pentalk'] === 1) {
          (s as any).sex_darerand = (Math.floor(Math.random() * 4) + 1);
        } else {
          (s as any).sex_darerand = (Math.floor(Math.random() * 3) + 1);
        }
        if (((s as any).sex_darerand ?? 0) === ((s as any).sex_darerand_store ?? 0)) {
          // TODO-QSP: jump 'repick3'
        }
        (s as any).sex_darerand_store = ((s as any).sex_darerand ?? 0);
        if (((s as any).sex_darerand ?? 0) === 1) {
          qspCall(s, 'willpower', 'hj', 'resist', 'easy');
          // TODO-QSP: 'too… uhh" he seems unsure of what he wants. "Well, I''m not going to sit here all day." you say imp...
          if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
            scene.text('"What! you perv! I\'m your sister that\'s… I\'m not-" he stops you and quickly says "What are you chicken?"');
          }
          scene.actions([
            { label: 'Do it', goto: ['brother2', 'lose_dares3', '3', 'hj'] },
          ]);
        } else {
          if (((s as any).sex_darerand ?? 0) === 2) {
            qspCall(s, 'willpower', 'bj', 'resist');
            // TODO-QSP: 'too… uhh" he seems unsure of what he wants. "Well, I''m not going to sit here all day." you say imp...
            if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
              scene.text('"What! you perv! I\'m your sister that\'s… I\'m not-" he stops you and quickly says "What are you chicken?"');
            }
            scene.actions([
              { label: 'Do it', goto: ['brother2', 'lose_dares3', '3', 'bj'] },
            ]);
          } else {
            if (((s as any).sex_darerand ?? 0) === 3) {
              qspCall(s, 'willpower', 'exhib', 'resist');
              qspCall(s, 'brother2', 'caught_risk');
              scene.text('too… give me a lap dance!" he says boastfully.');
              if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
                scene.text('"What! you perv! I\'m not-" he stops you and quickly says "What are you chicken?"');
              }
              scene.actions([
                { label: 'Do it', goto: ['brother2', 'lose_dares3', '2', 'lap'] },
              ]);
            } else {
              if (((s as any).sex_darerand ?? 0) === 4) {
                qspCall(s, 'willpower', 'sex', 'resist', 'hard');
                (s as any).dare_location = qspFunc(s, 'random', 'pick_from', 'kitchen', 'hall', 'stairway');
                // TODO-QSP: dynamic text: too… uhh" he seems unsure of what he wants. "Well, I''m not going to sit here al...
                scene.text(`too… uhh" he seems unsure of what he wants. "Well, I'm not going to sit here all day." you say impatiently. "You have to… <b>let me fuck you in the ${((s as any).dare_location ?? '')}</b>!" he blurts out.`);
                scene.text('"What! you perv!" you say with a big grin. He laughs and says "What are you chicken?"');
                qspCall(s, 'family_schedule', '');
                if (((s as any).dare_location ?? 0) === 'kitchen'  &&  (((s as any).locat ?? 0)?.['Mother'] === 12  ||  ((s as any).locat ?? 0)?.['Mother'] === 23)) {
                  scene.text('"Any way isn\'t mom in the kitchen right now? Wont we get caught?" you ask. He retorts with "Nope she said she forgot something at the market and would be back later."');
                }
                scene.actions([
                  { label: 'Do it', goto: ['brother2', 'lose_dares3', '3', 'sex'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).brother = (st as any).brother ?? {})['Confidence'] = ((st as any).brother['Confidence'] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A34'] = ((st as any).npc_rel['A34'] ?? 0) - ((Math.floor(Math.random() * 2) + 1));
    qspCall(st, 'stat', '');
    scene.img('images/pc/no.mp4');
    scene.text('"No way…" you tell him. Kolka ruffles his face into a scowl and answers with "Hurmf, wimp! Chicken!"');
    scene.text('Even though he is mocking you he seems mad that you did not do the dare.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', 'sofa');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLoseDares3(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === 'tits') {
    if (((s as any).brother ?? 0)?.['horny'] >= 10  &&  ((s as any).brother ?? 0)?.['tempted'] >= 1  &&  ((s as any).pcs_inhib ?? 0) >= 25  &&  ((s as any).pcs_horny ?? 0) >= 20  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  (Math.floor(Math.random() * 3) + 1) === 2) {
      qspGoto(s, 'brother2', 'tit_flash_dare2');
    }
    if (((s as any).brother ?? 0)?.['SexQW'] < 2) {
      ((s as any).brother = (s as any).brother ?? {})['SexQW'] = 2;
    }
    qspCall(s, 'brother_disc', 'arousal', 'strong');
    qspCall(s, 'arousal', 'flash', 2, 'incest');
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/flash/flash_dare (${(Math.floor(Math.random() * 7) + 1)}).mp4`);
    // TODO-QSP: dynamic text: You grab your shirt and pull up- "Woa!" your brother sits there stuned. "Oh my g...
    scene.text(`You grab your shirt and pull up- "Woa!" your brother sits there stuned. "Oh my god ${((s as any).pcs_nickname ?? '')}, I was just joking. I wasn't going to really make you do it." he says.`);
    scene.text('Kolka continues with "But I… Wow! Your tits look great!" By this time he is blushing at the situation and you start turning red as well. "Well a dare is a dare… right?" you say looking away from him.');
    scene.text('"Oh, you can pull your shirt back down…" he tells you. You turn an even darker shade of red as you quickly pull your shirt back on.');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', 'sofa');
  } },
    ]);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === 'lick') {
      if ((!((s as any).dare_lick ?? 0))) {
        (s as any).dare_lick = 1;
      }
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/home/kuhrpar.jpg');
      scene.text('Both of you head to the kitchen to find the whipped cream.');
      scene.text('Before you do you make sure the coast is clear so as to not attact attention.');
      scene.actions([
        { label: 'Search for the cream', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/characters/pavlovsk/resident/kolka/event...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/kolka/event/videogaming/lick/search1,` + ((((st as any).dare_lick ?? 0) === 1) ? ('1') : ('2')) + '.jpg"></center>');
    // TODO-QSP: 'At first you''re not sure if you have any but as look around for some you''re sure Kolka was' + iif...
    // TODO-QSP: dynamic text: '"Ah duh it should be in the fridge' + iif(dare_lick < 2, '."', ' <i>where I put...
    scene.text('"Ah duh it should be in the fridge' + ((((st as any).dare_lick ?? 0) < 2) ? ('."') : (' <i>where I put it last time.</i>"')) + ' you say.');
    scene.actions([
      { label: 'Look in the fridge', handler: (st: GameState) => {
    if (((st as any).dare_lick ?? 0) >= 4) {
      qspGoto(st, 'brother2', 'dare_lick3');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/lick/search2,${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('Quickly you head over to the fridge and rummage through it until you come across the whipped cream.');
    scene.text('Pulling it out you shut the fridge and turn to your brother.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((st as any).dare_lick ?? 0) < 3) {
      qspGoto(st, 'brother2', 'dare_lick1');
    } else {
      if (((st as any).dare_lick ?? 0) === 3) {
        qspGoto(st, 'brother2', 'dare_lick2');
      }
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'dance') {
        if (((s as any).brother ?? 0)?.['SexQW'] < 3) {
          ((s as any).brother = (s as any).brother ?? {})['SexQW'] = 3;
        }
        if (((s as any).pcs_horny ?? 0) >= 50  &&  ((s as any).pcs_inhib ?? 0) >= 35) {
          (s as any).strip_img_temp = 3;
        } else {
          if (((s as any).pcs_inhib ?? 0) >= 35) {
            (s as any).strip_img_temp = 2;
          } else {
            (s as any).strip_img_temp = 1;
          }
        }
        qspCall(s, 'arousal', 'flash', 3, 'incest');
        qspCall(s, 'brother_disc', 'arousal');
        qspCall(s, 'stat', '');
        scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/strip/strip (${((s as any).strip_img_temp ?? '')}).mp4`);
        scene.text('Reluctantly you start pulling off your clothing as your brother watches from the sofa. His eyes glued to your every move.');
        if (((s as any).strip_img_temp ?? 0) === 1) {
          scene.text('You can\'t help but try to hide yourself as you undress. Not being used to doing something like this in front of others, especially your brother, is making it that much harder.');
        } else {
          if (((s as any).strip_img_temp ?? 0) === 2) {
            scene.text('Not really caring if any one sees you naked you have almost no problem getting undressed. However, because Kolka is watching you, it still makes it a little embarrassing.');
          } else {
            if (((s as any).strip_img_temp ?? 0) === 3) {
              // TODO-QSP: 'As horny as you are you can''t help but feel the air on your skin as you eroticly slide your clothi...
            }
          }
        }
        scene.text('Soon enough you get naked and wait for a moment before Kolka says "Ok give us a pose or something… come on a dare is a dare!"');
        scene.actions([
          { label: 'Pose for Kolka', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 3, 'incest');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/strip/nude_pose (${(Math.floor(Math.random() * 7) + 1)}).jpg`);
    scene.text('Considering you were just playing video games you pick a pose that makes it look like you are, eroticly, playing video games.');
    scene.text('You give your brother a few poses before you move to get dress.');
    if ((!((st as any).lose_strip_once ?? 0))) {
      (st as any).lose_strip_once = 1;
      scene.text('It looks as though Kolka is about to say something but seems to hold back.');
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', '');
  } },
      ]);
    } else {
      scene.text('But Kolka jumps up and says "Wait! I wanted you to dance for me first!" Hoping that he would have forgotten like before you roll your eyes and nod.');
      scene.text('"<i>Might as well get this over with…</i>" you reason to yourself.');
      scene.actions([
        { label: 'Dance for Kolka', handler: (st: GameState) => {
    (st as any).dancetemp = 1;
  }, goto: ['brother2', 'dance_dare'] },
      ]);
    }
  } },
        ]);
      } else {
        if (String((s as any).locArgs?.[2] ?? '') === 'lap') {
          ((s as any).brother = (s as any).brother ?? {})['Confidence'] = ((s as any).brother['Confidence'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
          qspCall(s, 'brother_disc', 'arousal', 'light');
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          qspCall(s, 'arousal', 'foreplay', (-2), 'incest');
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/lap/lap_dressed.mp4');
          scene.text('Wasting no time you hop on to your brother and start grinding your hips on his legs. At first it\'s just a silly game, but soon you are feeling hot and feeling tingles in your hips as you grind closer to your bother\'s crotch.');
          scene.text('Soon you figure its enough and are about to stop when he says "You know most lap dances, the performer takes some clothing off… just saying."');
          if (((s as any).brother ?? 0)?.['SexQW'] < 5  &&  ((s as any).brother ?? 0)?.['kisstalk'] === 0  &&  ((s as any).brother ?? 0)?.['pentalk'] === 0) {
            scene.text('"What! you perv! why should I-…" he stops you and quickly says "What are you chicken?"');
          }
          scene.text('Taking a moment you wonder if you should continue…');
          qspCall(s, 'brother2', 'resist_stop_lap');
          scene.actions([
            { label: 'Take your clothing off', goto: ['brother2', 'lap1'] },
          ]);
        } else {
          if (String((s as any).locArgs?.[2] ?? '') === 'hj') {
            qspCall(s, 'stat', '');
            ((s as any).npc_rel = (s as any).npc_rel ?? {})['A34'] = ((s as any).npc_rel['A34'] ?? 0) + (2);
            scene.img(`images/characters/pavlovsk/school/boy/kolka/sex/jerk${(Math.floor(Math.random() * 18) + 1)}.mp4`);
            if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
              scene.text('"Oh my god I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… n-… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and looked down at his penis. "You had better not tell any one about this!" you say threateningly. He nods.');
            }
            // TODO-QSP: dynamic text: You take his hard <<npc_dick[''A34'']>> cm cock in your hand and begin masturbat...
            scene.text(`You take his hard ${((s as any).npc_dick ?? 0)?.['A34'] ?? ''} cm cock in your hand and begin masturbating him. It only takes a few minutes of gliding your hand up and down his shaft for him to yell out "I'm cumming!"`);
            qspCall(s, 'arousal', 'hj', 5, 'incest');
            qspCall(s, 'stat', '');
            scene.actions([
              { label: 'Let him cum', handler: (st: GameState) => {
    (st as any).cumnostd = 1;
    ((st as any).brother = (st as any).brother ?? {})['cum'] = 1;
    qspCall(st, 'brother_disc', 'arousal');
    qspCall(st, 'cum_call', 'hands', 'A34', 1);
    scene.img('images/characters/pavlovsk/resident/kolka/event/homework/hjcum.mp4');
    scene.text('Picking up the pace for a quick burst of speed, you feel his hot cum burst all over your hand. Pulling back, you smile at the look of bliss on his face before looking back at your hand and saying "Eww…"');
    qspCall(st, 'arousal', 'hj', 8, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    qspGoto(st, 'sitrPar', '');
  } },
    ]);
  } },
            ]);
          } else {
            if (String((s as any).locArgs?.[2] ?? '') === 'bj') {
              ((s as any).brother = (s as any).brother ?? {})['bj'] = ((s as any).brother['bj'] ?? 0) + (1);
              ((s as any).npc_rel = (s as any).npc_rel ?? {})['A34'] = ((s as any).npc_rel['A34'] ?? 0) + (3);
              if (((s as any).dare_blow ?? 0) === 1) {
                (s as any).dareblowrand = (Math.floor(Math.random() * 2) + 1);
              } else {
                (s as any).dareblowrand = 1;
              }
              scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/blow/dare_blow${((s as any).dareblowrand ?? '')}.mp4`);
              if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
                scene.text('"Oh my god I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… n-… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and looked down at his penis. "You had better not tell any one about this!" you say threateningly. He nods.');
              }
              if (((s as any).dare_blow ?? 0) === 1  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
                scene.text('You drop to your knees in front of your brother and move your face towards his waiting member. Kolka takes a deep breath in anticipation.');
              } else {
                scene.text('"Come on I\'m at least going to be comfortable." you say to him as you sit on the sofa and grab a controller.');
              }
              qspCall(s, 'arousal', 'bj', 5, 'incest');
              qspCall(s, 'stat', '');
              qspCall(s, 'dinsex', 'bj_random');
              scene.text('You think about your brother\'s cuming soon and pull off your shirt just in case.');
              // TODO-QSP: 'It isn''t long before you hear your brother moaning and breathing harder' + iif(dare_blow = 1, ', "...
              if ((!((s as any).dare_blow ?? 0))) {
                scene.actions([
                  { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A34');
    qspCall(st, 'cum_call', 'hair', 'A34', 1);
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    (st as any).cumnostd = 1;
    ((st as any).brother = (st as any).brother ?? {})['cum'] = 1;
    qspCall(st, 'brother_disc', 'arousal');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/blow/in.mp4');
    scene.text('Just as you are wondering if he is close to shooting it happens…');
    scene.text('Before you can pull him out of your mouth your brother\'s cock starts pulsing and a large jet of cum hits the back of your throat and then another.');
    scene.text('"Ewwaa-!" you let out and wimper/cough as his penis launches several more ropes of cum into your face.');
    scene.text('When he is done you look at him and he has turned white. Your eyes are open as wide as saucers and your mouth is hanging open with cum slowly pouring out.');
    scene.text('Attempting to speak you get out"-hy -edin\'t ouh… wor- meh!" you get up and head to the bathroom as your brother says "I-… I\'m sorry!"');
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'stat', '');
    (st as any).dare_blow = 1;
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    (st as any).temp_block = 1;
    qspGoto(st, 'vanrPar', '');
  } },
    ]);
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Keep sucking', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A34');
    qspCall(st, 'cum_call', 'hair', 'A34', 1);
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    (st as any).cumnostd = 1;
    ((st as any).brother = (st as any).brother ?? {})['cum'] = 1;
    qspCall(st, 'brother_disc', 'arousal');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A34', 1);
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/blow/in.mp4');
    qspCall(st, 'dinsex', 'bj_swallow_random');
    qspCall(st, 'arousal', 'bj', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    (st as any).temp_block = 1;
    qspGoto(st, 'vanrPar', '');
  } },
    ]);
  } },
                  { label: 'Take his cock out of your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A34'] = ((st as any).npc_rel['A34'] ?? 0) + (3);
    qspCall(st, 'boyStat', 'A34');
    ((st as any).brother = (st as any).brother ?? {})['cum'] = 1;
    qspCall(st, 'cum_call', 'face', 'A34', 1);
    (st as any).facial = ((st as any).facial ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/blow/out.mp4');
    scene.text('Just as you take his dick out of your mouth, you\'re hit with a hot blast of cum across your face, followed by several more spurts. Your face is covered in your brother\'s cum when he is finally finished with his orgasm.');
    scene.actions([
      { label: 'Go to the bathroom', handler: (st: GameState) => {
    qspCall(st, 'brother2', 'video_game_reset');
    (st as any).temp_block = 1;
    qspGoto(st, 'vanrPar', '');
  } },
    ]);
  } },
                ]);
              }
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'rub_butt') {
                if (((s as any).brother ?? 0)?.['SexQW'] < 4) {
                  ((s as any).brother = (s as any).brother ?? {})['SexQW'] = 4;
                }
                if (((s as any).brother ?? 0)?.['but_rub'] < 4  ||  ((s as any).brother ?? 0)?.['but_rub'] >= 4  &&  ((s as any).brother ?? 0)?.['horny'] < 10  &&  (Math.floor(Math.random() * 3) + 1) === 2) {
                  qspGoto(s, 'brother2', 'lose_dares4', 'rub_butt_start');
                }
                qspCall(s, 'arousal', 'voyeur', 2, 'incest');
                qspCall(s, 'brother_disc', 'arousal', 'light');
                qspCall(s, 'stat', '');
                scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/brother_ready.mp4');
                // TODO-QSP: dynamic text: Laying down like before you get yourself comfortable but as you glance at your b...
                scene.text(`Laying down like before you get yourself comfortable but as you glance at your brother you see he has taken off his clothing and his hard ${((s as any).npc_dick ?? 0)?.['A34'] ?? ''} cm cock is at full mast. He gives it a few tugs as he moves closer to you.`);
                if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
                  scene.text('"Why are are taking your clothes off? Didn\'t you say you just wanted to rub my… by butt?" you whisper, confused at why he is naked. "Any why are you touching yourself?!"');
                }
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2, 'incest');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/reluctant.mp4');
    // TODO-QSP: dynamic text: He ignores you and says "Come on <<$pcs_nickname>> you lost…" as he pulls at you...
    scene.text(`He ignores you and says "Come on ${((st as any).pcs_nickname ?? '')} you lost…" as he pulls at your panties.`);
    if (((st as any).brother ?? 0)?.['SexQW'] < 5) {
      scene.text('"Oh my god I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… n-… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at his penis. "You had better not tell any one about this!" you say threateningly. He nods.');
    }
    scene.text('Relenting you finish taking everything off and you prop yourself up on your hands and knees.');
    scene.actions([
      { label: '"Alright you can… keep going"', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'incest');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/resi...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/kolka/event/videogaming/sex/` + (((Math.floor(Math.random() * 2) + 1) === 2) ? ('butt_rub') : ('nodressed_nopanties (1)')) + '.mp4"></video></center>');
    scene.text('Kolka reaches down and slowly starts running his hands up and down your lower back and butt cheeks. He basically starts giving you a massage.');
    scene.text('As he does this soon you\'re starting to feel very relaxed when something unexpected happens.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'incest');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/butt_rub2 (${(Math.floor(Math.random() * 2) + 1)}).mp4`);
    // TODO-QSP: 'He starts running his hands over the outer lips of your sex. Being so caught up in moment and being...
    scene.text('However, all of a sudden, he stops…');
    scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/butt_reaction.mp4');
    scene.actions([
      { label: 'Further', goto: ['brother2', 'sex_dare1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
                ]);
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'sex') {
                  if (String((s as any).locArgs?.[3] ?? '') === 'kitchen'  ||  String((s as any).locArgs?.[3] ?? '') === 'hall') {
                    qspCall(s, 'npcStat', 'A34');
                    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/resi...
                    scene.text(`<center><video autoplay loop ${((s as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/kolka/event/videogaming/sex/${((s as any).dare_location ?? '')}/${((s as any).dare_location ?? '')} ` + ((((s as any).dare_location ?? 0) !== 'kitchen') ? ('(' + (Math.floor(Math.random() * 12) + 1) + ')') : ('(' + (Math.floor(Math.random() * 38) + 1) + ')')) + '.mp4"></video></center>');
                    if ((!((s as any).losedare_sexcount ?? 0))) {
                      ((s as any).brother = (s as any).brother ?? {})['fuck'] = ((s as any).brother['fuck'] ?? 0) + (1);
                      qspCall(s, 'brother2', 'dare_condom_ask');
                      scene.text('You wast no time and quickly position yourself as your brother thrusts his penis into you.');
                      // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is stiff, and is thrusting ...
                      scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is stiff, and is thrusting into you.`);
                    } else {
                      if (((s as any).losedare_sexcount ?? 0) === 1) {
                        // TODO-QSP: dynamic text: You glance across the <<$dare_location>> to keep an eye out.
                        scene.text(`You glance across the ${((s as any).dare_location ?? '')} to keep an eye out.`);
                        // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <i>hard</i>, and is fill...
                        scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <i>hard</i>, and is filling you up fully.`);
                      } else {
                        if (((s as any).losedare_sexcount ?? 0) === 2) {
                          // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <i>rock hard</i> and his...
                          scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <i>rock hard</i> and his skin is blushing red from arousal.`);
                        } else {
                          if (((s as any).losedare_sexcount ?? 0) === 3) {
                            // TODO-QSP: dynamic text: Once more you glance across the <<$dare_location>> to keep an eye out and make s...
                            scene.text(`Once more you glance across the ${((s as any).dare_location ?? '')} to keep an eye out and make sure you not about to get caught.`);
                            // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <font color="maroon"><b>...
                            scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <font color="maroon"><b>rock-hard</b>, his skin is blushing red from arousal. He has started breathing heavily as his thrusting becomes quicker.</font>.`);
                          } else {
                            if (((s as any).losedare_sexcount ?? 0) === 4) {
                              scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/${((s as any).dare_location ?? '')}/cum.mp4`);
                              // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <font color="red"><b>roc...
                              scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <font color="red"><b>rock-hard. He starts furiously slamming himself into you as all the muscles in his body have start tensing up, signaling his oncoming <b>ORGASM!</b></font>.`);
                            }
                          }
                        }
                      }
                    }
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    qspCall(s, 'dinsex', 'vaginal_sex', (-10), 'incest');
                    qspCall(s, 'brother_disc', 'pre_cum_chance_disc');
                    // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                    qspCall(s, 'stat', '');
                    // TODO-QSP: act iif(losedare_sexcount = 4, '<font color="red"><b>Eek-!</b></font>', 'Keep fucking him'):
                    if (((s as any).losedare_sexcount ?? 0) !== 4) {
                      (s as any).losedare_sexcount = ((s as any).losedare_sexcount ?? 0) + (1);
                      qspGoto(s, 'brother2', 'lose_dares3', '3', 'sex');
                    } else {
                      qspCall(s, 'brother2', 'dare_sexcum_end');
                    }
                  }
                } else {
                  if (String((s as any).locArgs?.[3] ?? '') === 'stairway') {
                    qspCall(s, 'npcStat', 'A34');
                    if ((!((s as any).losedare_sexcount ?? 0))) {
                      (s as any).losedare_sexcount = 1;
                    }
                    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/stairway/${((s as any).losedare_sexcount ?? '')}.mp4`);
                    qspCall(s, 'boyStat', 'A34');
                    if (((s as any).losedare_sexcount ?? 0) === 1) {
                      ((s as any).brother = (s as any).brother ?? {})['fuck'] = ((s as any).brother['fuck'] ?? 0) + (1);
                      scene.text('You wast no time and quickly position yourself as your brother bends down and starts licking your sex.');
                      // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is stiff, as he eats you ou...
                      scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is stiff, as he eats you out.`);
                    } else {
                      if (((s as any).losedare_sexcount ?? 0) === 2) {
                        // TODO-QSP: dynamic text: You glance across the <<$dare_location>> to keep an eye out as you kneel down an...
                        scene.text(`You glance across the ${((s as any).dare_location ?? '')} to keep an eye out as you kneel down and take your brothers cock into your mouth.`);
                        // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <i>hard</i>, as it goes ...
                        scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <i>hard</i>, as it goes in and out of your wide open mouth.`);
                        qspCall(s, 'dinsex', 'bj_random');
                        qspCall(s, 'arousal', 'bj', (Math.floor(Math.random() * 2) + 1), 'incest');
                        // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                      } else {
                        if (((s as any).losedare_sexcount ?? 0) === 3) {
                          qspCall(s, 'brother2', 'dare_condom_ask');
                          scene.text('Repositioning yourself you brace for him to penetrate your waiting hole with his member.');
                          // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <i>hard</i>, and starts ...
                          scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <i>hard</i>, and starts filling you up fully as he thrusts him self into you.`);
                          qspCall(s, 'dinsex', 'vaginal_sex', (-10), 'incest');
                          qspCall(s, 'brother_disc', 'pre_cum_chance_disc');
                          // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                        } else {
                          if (((s as any).losedare_sexcount ?? 0) === 4) {
                            // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <i>rock hard</i> and his...
                            scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <i>rock hard</i> and his skin is blushing red from arousal.`);
                            scene.text('His thighs slap against yours with each thrust.');
                            qspCall(s, 'dinsex', 'vaginal_sex', (-10), 'incest');
                            qspCall(s, 'brother_disc', 'pre_cum_chance_disc');
                            // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                          } else {
                            if (((s as any).losedare_sexcount ?? 0) === 5) {
                              // TODO-QSP: dynamic text: Once more you glance across the <<$dare_location>> to keep an eye out and make s...
                              scene.text(`Once more you glance across the ${((s as any).dare_location ?? '')} to keep an eye out and make sure you not about to get caught.`);
                              // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <font color="maroon"><b>...
                              scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <font color="maroon"><b>rock-hard</b>, his skin is blushing red from arousal. He has started breathing heavily as his thrusting becomes quicker.</font>.`);
                              qspCall(s, 'dinsex', 'vaginal_sex', (-10), 'incest');
                              qspCall(s, 'brother_disc', 'pre_cum_chance_disc');
                              // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                            } else {
                              if (((s as any).losedare_sexcount ?? 0) === 6) {
                                // TODO-QSP: dynamic text: Kolka''s <<dick_length>>cm long <<$dick_girth>> cock is <font color="red"><b>roc...
                                scene.text(`Kolka's ${((s as any).dick_length ?? '')}cm long ${((s as any).dick_girth ?? '')} cock is <font color="red"><b>rock-hard. He starts furiously slamming himself into you as all the muscles in his body have start tensing up, signaling his oncoming <b>ORGASM!</b></font>.`);
                                qspCall(s, 'dinsex', 'vaginal_sex', (-10), 'incest');
                                qspCall(s, 'brother_disc', 'pre_cum_chance_disc');
                                // TODO-QSP: iif(pcs_horny >= 85, 'Lost in waves of pleasure from your teenage love making, you start to lose tra...
                              }
                            }
                          }
                        }
                      }
                    }
                    (s as any).minut = ((s as any).minut ?? 0) + 2;
                    qspCall(s, 'stat', '');
                    // TODO-QSP: act iif(losedare_sexcount = 6, '<font color="red"><b>Eek-!</b></font>', 'Keep fucking him'):
                    if (((s as any).losedare_sexcount ?? 0) !== 6) {
                      (s as any).losedare_sexcount = ((s as any).losedare_sexcount ?? 0) + (1);
                      qspGoto(s, 'brother2', 'lose_dares3', '3', 'sex');
                    } else {
                      qspCall(s, 'brother2', 'dare_sexcum_end');
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
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterLoseDares4(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'rub_butt_start') {
    if (((s as any).brother ?? 0)?.['but_rub'] === 0) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        (s as any).temp_rub_image = 'dressed_panties (' + (Math.floor(Math.random() * 2) + 1) + ')';
        (s as any).temp_rub_txt = '';
      } else {
        (s as any).temp_rub_image = 'dressed_nopanties (' + (Math.floor(Math.random() * 2) + 1) + ')';
        (s as any).temp_rub_txt = '';
      }
      qspCall(s, 'arousal', 'foreplay', 2, 'incest');
      qspCall(s, 'brother_disc', 'arousal', 'light');
      qspCall(s, 'stat', '');
      scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/${((s as any).temp_rub_image ?? '')}.mp4`);
      scene.text('Laying down, you get yourself comfortable while glancing at your brother. He seams a bit nervous but also at the same time eager. Looking at him you see that he is sporting a large bulging boner. He gives it a few tugs to adjust him self, thinking you arn\'t looking, as he moves closer to you.');
      if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
        scene.text('Letting out a long sigh "God… I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at the buldge in his pants. You quickly tell him "Well come on lets get this over with."');
      }
      if (((s as any).pantyworntype ?? 0) === 'none') {
        ((s as any).brother = (s as any).brother ?? {})['but_rub'] = ((s as any).brother['but_rub'] ?? 0) + (1);
        scene.text('Just as you get into position you remember that you don\'t have any panties on but before you can say any thing he reaches over and places his hands on your butt cheeks.');
        scene.text('Slowly he starts running his hands up and down your butt cheeks basically giving you a massage.');
        // TODO-QSP: 'Several times his hands get very close to the outer lips of your sex. Being so caught up in moment ...
        scene.text('It lasts a bit longer before finally telling him "Ok times up!" He seams pleased.');
      } else {
        scene.text('Kolka reaches over and slowly starts running his hands up and down your butt cheeks. He basically starts giving you a massage. But it does not last long and you tell him "Ok times up!" He seams a bit disappointed but not much.');
        scene.text('<b>You think to yourself "I\'m glad that I had panties on…"</b> ');
      }
      scene.actions([
        { label: 'Sit back down on the sofa', goto: ['sitrPar', 'sofa'] },
      ]);
    } else {
      if (((s as any).brother ?? 0)?.['but_rub'] < 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        qspCall(s, 'brother_disc', 'arousal', 'light');
        qspCall(s, 'stat', '');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          qspCall(s, 'clothing', 'strip');
          (s as any).sofa_redress = 1;
          scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/lap/remove_clothing.mp4');
        } else {
          scene.img('images/locations/pavlovsk/resident/apartment/home/bed/clothing.mp4');
        }
        scene.text('Laying down, you get yourself comfortable while glancing at your brother. He seams a bit nervous but also at the same time eager. Looking at him you see that he is sporting a large bulging boner. He gives it a few tugs to adjust him self, thinking you arn\'t looking, as he moves closer to you.');
        if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
          scene.text('Letting out a long sigh "God… I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at the buldge in his pants. You quickly tell him "Well come on lets get this over with."');
          if (((s as any).brother ?? 0)?.['but_rub'] === 1  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
            ((s as any).brother = (s as any).brother ?? {})['but_rub'] = ((s as any).brother['but_rub'] ?? 0) + (1);
            scene.text('This time before he starts he adds "This time you have to take your clothes off!"');
            scene.text('"What!?" you blert out. "That\'s not the dare!"');
            scene.text('He hesitates for a moment before saying "Are you… chicken?"');
            scene.text('"FINE! but don\'t call me chicken twerp!" you say taking the bait… "And I\'m keeping my underwear on!" He seams to want to protest but does to push his luck.');
            scene.text('Relenting you take off your clothing, leaving you only in your underwear, and lay down while proping yourself up on your elbows.');
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              scene.text('"You forgeting something?" he says.');
              scene.text('Rolling your eyes you click your toungh hoping he forgot about last time.');
              scene.text('Once again you take off your clothing, leaving you only in your underwear, and lay down while proping yourself up on your elbows.');
            } else {
              if (((s as any).pantyworntype ?? 0) === 'none') {
                scene.text('"You forgeting something?" he says.');
                scene.text('"I don\'t have any panties on so I\'m leaving everything else." you say sternly. He seams to want to protest but does to push his luck.');
                scene.text('Once again you take off your clothing, leaving you only in your underwear, and lay down while proping yourself up on your elbows.');
              }
            }
          }
        } else {
          ((s as any).brother = (s as any).brother ?? {})['but_rub'] = 4;
        }
        scene.actions([
          { label: 'Further', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      (st as any).temp_rub_image = 'nodressed_panties (' + (Math.floor(Math.random() * 4) + 1) + ')';
    } else {
      (st as any).temp_rub_image = 'dressed_nopanties (' + (Math.floor(Math.random() * 2) + 1) + ')';
    }
    qspCall(st, 'arousal', 'foreplay', 2, 'incest');
    qspCall(st, 'brother_disc', 'arousal', 'light');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/${((st as any).temp_rub_image ?? '')}.mp4`);
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('He reaches over and places his hands on your butt cheeks.');
      scene.text('Slowly he starts running his hands up and down your butt cheeks basically giving you a massage.');
      // TODO-QSP: 'Several times his hands get very close to the outer lips of your sex. Being so caught up in moment ...
      scene.text('It lasts a bit longer before finally telling him "Ok times up!" He seams pleased.');
    } else {
      scene.text('Kolka reaches over and slowly starts running his hands up and down your butt cheeks. He basically starts giving you a massage. But it does not last long and you tell him "Ok times up!" He seams slightly pleased.');
    }
    scene.actions([
      { label: 'Sit back down on the sofa', handler: (st: GameState) => {
    if (((st as any).brother ?? 0)?.['but_rub'] > 1  &&  ((st as any).pcs_horny ?? 0) >= 30) {
      if (((st as any).pantyworntype ?? 0) === 'none') {
        scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/self_rub${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      } else {
        scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/rubself_panties.mp4');
      }
      scene.text('Before you get up you can\'t help be give your sex a few slow rubs.');
      scene.text('"Wait-… what am I doing!" you think to yourself as you quickly stand up.');
      qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'stat', '');
      ((st as any).brother = (st as any).brother ?? {})['but_rub'] = ((st as any).brother['but_rub'] ?? 0) + (1);
      scene.actions([
        { label: 'Stand up', goto: ['sitrPar', ''] },
      ]);
    } else {
      qspGoto(st, 'sitrPar', 'sofa');
    }
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).brother ?? 0)?.['but_rub'] === 3) {
          qspCall(s, 'arousal', 'foreplay', 2, 'incest');
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/reluctant.mp4');
          // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>> you lost… take off everything this time!" as he pulls...
          scene.text(`"Come on ${((s as any).pcs_nickname ?? '')} you lost… take off everything this time!" as he pulls at your panties.`);
          if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
            scene.text('"Oh my god I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… n-… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at his penis. "You had better not tell any one about this!" you say threateningly. He nods.');
          }
          scene.text('Relenting you finish taking everything off and you prop yourself up on your hands and knees.');
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2, 'incest');
    qspCall(st, 'brother_disc', 'arousal', 'light');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/resi...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/kolka/event/videogaming/sex/` + (((Math.floor(Math.random() * 2) + 1) === 2) ? ('butt_rub') : ('nodressed_nopanties (1)')) + '.mp4"></video></center>');
    scene.text('He reaches over and places his hands on your butt cheeks.');
    scene.text('Slowly he starts running his hands up and down your butt cheeks basically giving you a massage.');
    // TODO-QSP: 'Several times his hands get very close to the outer lips of your sex. Being so caught up in moment ...
    scene.text('It lasts a bit longer before finally telling him "Ok times up!" He seams pleased.');
    scene.actions([
      { label: 'Sit back down on the sofa', handler: (st: GameState) => {
    if (((st as any).brother ?? 0)?.['but_rub'] > 1  &&  ((st as any).pcs_horny ?? 0) >= 30) {
      scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/self_rub${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      scene.text('Before you get up you can\'t help be give your sex a few slow rubs.');
      scene.text('"Wait-… what am I doing!" you think to yourself as you quickly stand up.');
      qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'stat', '');
      ((st as any).brother = (st as any).brother ?? {})['but_rub'] = ((st as any).brother['but_rub'] ?? 0) + (1);
      scene.actions([
        { label: 'Stand up', goto: ['sitrPar', ''] },
      ]);
    } else {
      qspGoto(st, 'sitrPar', 'sofa');
    }
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).brother ?? 0)?.['but_rub'] >= 4  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  (Math.floor(Math.random() * 3) + 1) === 2) {
            qspCall(s, 'arousal', 'foreplay', 2, 'incest');
            qspCall(s, 'stat', '');
            scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/reluctant.mp4');
            scene.text('Laying down, you get yourself comfortable while glancing at your brother. He seams a bit nervous but also at the same time eager. Looking at him you see that he is sporting a large bulging boner. He gives it a few tugs to adjust him self, thinking you arn\'t looking, as he moves closer to you.');
            // TODO-QSP: dynamic text: He then says "Come on <<$pcs_nickname>> you lost…" as he pulls at your panties.
            scene.text(`He then says "Come on ${((s as any).pcs_nickname ?? '')} you lost…" as he pulls at your panties.`);
            if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
              scene.text('"Oh my god I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… n-… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at his penis. "You had better not tell any one about this!" you say threateningly. He nods.');
            }
            scene.text('Relenting you finish taking everything off and you prop yourself up on your hands and knees.');
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 2, 'incest');
    qspCall(st, 'brother_disc', 'arousal', 'light');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><video autoplay loop <<$set_imgh>> src="images/characters/pavlovsk/resi...
    scene.text(`<center><video autoplay loop ${((st as any).set_imgh ?? '')} src="images/characters/pavlovsk/resident/kolka/event/videogaming/sex/` + (((Math.floor(Math.random() * 2) + 1) === 2) ? ('butt_rub') : ('nodressed_nopanties (1)')) + '.mp4"></video></center>');
    scene.text('He reaches over and places his hands on your butt cheeks.');
    scene.text('Slowly he starts running his hands up and down your butt cheeks basically giving you a massage.');
    // TODO-QSP: 'Several times his hands get very close to the outer lips of your sex. Being so caught up in moment ...
    scene.text('It lasts a bit longer before finally telling him "Ok times up!" He seams pleased.');
    scene.actions([
      { label: 'Sit back down on the sofa', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) >= 30) {
      if (((st as any).pantyworntype ?? 0) === 'none') {
        scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/self_rub${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      } else {
        scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/rubself_panties.mp4');
      }
      scene.text('Before you get up you can\'t help be give your sex a few slow rubs.');
      scene.text('"Wait-… what am I doing!" you think to yourself as you quickly stand up.');
      qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Stand up', goto: ['sitrPar', ''] },
      ]);
    } else {
      qspGoto(st, 'sitrPar', 'sofa');
    }
  } },
    ]);
  } },
            ]);
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 1;
            qspCall(s, 'brother_disc', 'arousal', 'light');
            qspCall(s, 'stat', '');
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              qspCall(s, 'clothing', 'strip');
              (s as any).sofa_redress = 1;
              scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/lap/remove_clothing.mp4');
            } else {
              scene.img('images/locations/pavlovsk/resident/apartment/home/bed/clothing.mp4');
            }
            scene.text('Laying down, you get yourself comfortable while glancing at your brother. He seams a bit nervous but also at the same time eager. Looking at him you see that he is sporting a large bulging boner. He gives it a few tugs to adjust him self, thinking you arn\'t looking, as he moves closer to you.');
            if (((s as any).brother ?? 0)?.['SexQW'] < 5) {
              scene.text('Letting out a long sigh "God… I can\'t believe you\'re making me do this…" you whine. Kolka says "A deal is a deal. You lost… now pay up." You could tell he was nervous as he told you this but it did not help and so you let out a short sigh and look back at the buldge in his pants. You quickly tell him "Well come on lets get this over with."');
              if (((s as any).pantyworntype ?? 0) !== 'none') {
                scene.text('"You forgeting something?" he says.');
                scene.text('Rolling your eyes you click your toungh hoping he forgot about last time.');
                scene.text('Once again you take off your clothing, leaving you only in your underwear, and lay down while proping yourself up on your elbows.');
              } else {
                scene.text('"You forgeting something?" he says.');
                scene.text('"I don\'t have any panties on so I\'m leaving everything else." you say sternly. He seams to want to protest but does to push his luck.');
                scene.text('Once again you take off your clothing, leaving you only in your underwear, and lay down while proping yourself up on your elbows.');
              }
            }
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      (st as any).temp_rub_image = 'nodressed_panties (' + (Math.floor(Math.random() * 4) + 1) + ')';
    } else {
      (st as any).temp_rub_image = 'dressed_nopanties (' + (Math.floor(Math.random() * 2) + 1) + ')';
    }
    qspCall(st, 'arousal', 'foreplay', 2, 'incest');
    qspCall(st, 'brother_disc', 'arousal', 'light');
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/${((st as any).temp_rub_image ?? '')}.mp4`);
    if (((st as any).pantyworntype ?? 0) === 'none') {
      scene.text('He reaches over and places his hands on your butt cheeks.');
      scene.text('Slowly he starts running his hands up and down your butt cheeks basically giving you a massage.');
      // TODO-QSP: 'Several times his hands get very close to the outer lips of your sex. Being so caught up in moment ...
      scene.text('It lasts a bit longer before finally telling him "Ok times up!" He seams pleased.');
    } else {
      scene.text('Kolka reaches over and slowly starts running his hands up and down your butt cheeks. He basically starts giving you a massage. But it does not last long and you tell him "Ok times up!" He seams slightly pleased.');
    }
    scene.actions([
      { label: 'Sit back down on the sofa', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) >= 30) {
      if (((st as any).pantyworntype ?? 0) === 'none') {
        scene.img(`images/characters/pavlovsk/resident/kolka/event/videogaming/sex/self_rub${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      } else {
        scene.img('images/characters/pavlovsk/resident/kolka/event/videogaming/sex/rubself_panties.mp4');
      }
      scene.text('Before you get up you can\'t help be give your sex a few slow rubs.');
      scene.text('"Wait-… what am I doing!" you think to yourself as you quickly stand up.');
      qspCall(st, 'arousal', 'clit_finger', (-2), 'masturbate');
      qspCall(st, 'arousal', 'end');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Stand up', goto: ['sitrPar', ''] },
      ]);
    } else {
      qspGoto(st, 'sitrPar', 'sofa');
    }
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'chat':
      enterChat(s, scene);
      break;
    case 'DTR':
      enterDTR(s, scene);
      break;
    case 'DTR_yes':
      enterDTRYes(s, scene);
      break;
    case 'DTR_suck':
      enterDTRSuck(s, scene);
      break;
    case 'DTR_vaginal':
      enterDTRVaginal(s, scene);
      break;
    case 'DTR_anal':
      enterDTRAnal(s, scene);
      break;
    case 'nattalk':
      enterNattalk(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'kiss2':
      enterKiss2(s, scene);
      break;
    case 'kiss_end':
      enterKissEnd(s, scene);
      break;
    case 'cuni':
      enterCuni(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'hj2':
      enterHj2(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'bj2':
      enterBj2(s, scene);
      break;
    case 'wakeup':
      enterWakeup(s, scene);
      break;
    case 'wakeupresponse':
      enterWakeupresponse(s, scene);
      break;
    case 'show':
      enterShow(s, scene);
      break;
    case 'trick':
      enterTrick(s, scene);
      break;
    case 'morninghj':
      enterMorninghj(s, scene);
      break;
    case 'morningbj':
      enterMorningbj(s, scene);
      break;
    case 'video_games':
      enterVideoGames(s, scene);
      break;
    case 'video_games2':
      enterVideoGames2(s, scene);
      break;
    case 'video_gaming':
      enterVideoGaming(s, scene);
      break;
    case 'video_gaming_start':
      enterVideoGamingStart(s, scene);
      break;
    case 'video_gaming_stop':
      enterVideoGamingStop(s, scene);
      break;
    case 'flash_dare':
      enterFlashDare(s, scene);
      break;
    case 'lose_dares1':
      enterLoseDares1(s, scene);
      break;
    case 'lose_dares2':
      enterLoseDares2(s, scene);
      break;
    case 'lose_dares3':
      enterLoseDares3(s, scene);
      break;
    case 'lose_dares4':
      enterLoseDares4(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const brother2: LocationDef = {
  name: 'brother2',
  title: 'Kolka',
  region: 'other',
  enter: enter,
};
