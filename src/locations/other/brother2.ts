import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'npc_relationship', 'modify', 'A34', 'like', 1, 'living_room');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kolka</b></center>');
  scene.img('images/characters/shared/headshots_main/big34.jpg');
  scene.text('You casually talk to him about whatever topics come up.');
  (s as any).brotherchat = Math.floor(Math.random() * 8) + 1;
  if (((s as any).brotherchat ?? 0) === 1) {
    // TODO-QSP: dynamic text: "… so, yeah. <<$npc_nickname['A29']>> wants me to clean up my stuff on the couch...
    scene.text(`"… so, yeah. ${((s as any).npc_nickname ?? 0)?.['A29']} wants me to clean up my stuff on the couch, but if I'm going to sleep there anyways, why does it matter?" he asks, snapping you out of your idle thoughts and bringing you back to the room.`);
    if (((s as any).npc_rel ?? 0)?.['A29'] >= 40) {
      // TODO-QSP: dynamic text: "I know it seems pointless but you should listen to <<$npc_nickname['A29']>>. Yo...
      scene.text(`"I know it seems pointless but you should listen to ${((s as any).npc_nickname ?? 0)?.['A29']}. You'll get in trouble otherwise," you admonish him.`);
    } else {
      // TODO-QSP: dynamic text: "Ugh, I know! <<$npc_nickname['A29']>> is always nagging me about everything! Sh...
      scene.text(`"Ugh, I know! ${((s as any).npc_nickname ?? 0)?.['A29']} is always nagging me about everything! She can be such a pain in the ass sometimes!" you `);
    }
  } else {
    scene.text('"… and dad asked me if I want to help him work on the Gazelle but I don\'t know. I\'d rather go play football with Zhendos and Mishan," he finishes, snapping you out of your idle thoughts and bringing you back to the room.');
    scene.text('"It\'s good to have fun with your friends but it might also be good to work with dad. It\'s a good life skill. Besides, there\'s nothing girls love more than a man who knows how to work a car!" you wink at him.');
    if (((s as any).brotherchat ?? 0) === 3) {
      scene.text('"I hate math so much!" he moans. "Math sucks! It can go die in a hole!"');
      if (((s as any).class ?? 0)?.['school_math_grade'] >= 70) {
        scene.text('"Oh Kolka, you shouldn\'t think like that. Math is important!"');
      } else {
        scene.text('"Blegh! Yeah, you\'re right. Math sucks!" you grumble in agreement.');
      }
    } else {
      scene.text('Kolka starts telling you a story about him and his friends. As it goes on longer and all over the place, you find yourself zoning out and not really paying attention to what he\'s saying.');
      scene.text('"… and then he ripped his pants!" he giggles, snapping you out of your idle thoughts and bringing you back to the room. "Isn\'t that hilarious?"');
      scene.text('"Uhh, yeah! That\'s pretty funny!" you fake laugh as best you can.');
      if (((s as any).brotherchat ?? 0) === 5  &&  ((s as any).brotherQW ?? 0)?.['sex_ed'] >= 1) {
        scene.text('"… so I\'m enjoying science a lot more," he says, snapping you out of your idle thoughts and bringing you back to the room. "My grades have gotten better since you started helping me with my homework but I\'m still not sure I completely get it…" He hesitates. "Could you maybe… give me another anatomy lesson? Like you did before?" he says, looking at you meaningfully.');
        scene.text('"I\'m thinking about it…" you say slyly.');
      } else {
        scene.text('"… so science class is alright," he says. "I\'m really having trouble with my anatomy homework though. The diagrams in the book aren\'t very good, I don\'t understand it."');
        scene.text('"Hmm. Well maybe I could help you with it sometime? Do something to help you understand it better?"');
        (s as any).brotherQW['anatomy_help'] = 1;
        if (((s as any).brotherchat ?? 0) === 6) {
          scene.text('… and then he sprayed milk all over his locker!" he says with a burst of laughter "It was <i>so</i> funny!"');
          scene.text('"I bet it was," you say.');
          scene.text('<i>What weird kids he and his friends are…</i> you think to yourself.');
        } else {
          scene.text('"… so the plan is while he\'s showering to take his underwear and replace them with girls panties," he says. "Zhendos says that I should just steal some of yours out of your drawer but-" he stops dead with wide eyes and the realization of what he just said.');
          if (((s as any).npc_rel ?? 0)?.['A34'] < 80) {
            scene.text('"<i>Excuse me?</i> You were planning to do <i>what</i> with my underwear??" you say, sternly staring at him while he twiddles his thumbs and tries to pretend he didn\'t say anything.');
          } else {
            scene.text('"Woah woah woah!" you say. "Hold up! I love you Kolka, but I am not about to let you put my panties on some juvenile boy!"');
          }
          if (((s as any).brotherchat ?? 0) === 8) {
            // TODO-QSP: dynamic text: "… I just want more time to play football with Zhendos and Mishan though," he mo...
            scene.text(`"… I just want more time to play football with Zhendos and Mishan though," he moans. "I can't do anything with them when ${((s as any).npc_nickname ?? 0)?.['A29']} is dragging us to boring old Gadukino every other weekend."`);
            if ((!((s as any).seepornofut ?? 0))) {
              // TODO-QSP: dynamic text: "It's okay Kolka," you console him. "Just enjoy the time you have with them. In ...
              scene.text(`"It's okay Kolka," you console him. "Just enjoy the time you have with them. In a couple years ${((s as any).npc_nickname ?? 0)?.['A29']} might not force you to go anymore but you all might end up too busy to hang out."`);
            } else {
              scene.text('"Pfft! More like you want more time to watch porn with them!" you laugh scoffingly.');
              if (((s as any).mc_inventory ?? 0)?.['mag_porn'] === 0) {
                scene.text('"We play football too!" Kolka protests while you tease him with a silly face and fake jerk off motions.');
              } else {
                scene.text('"We play football too!" Kolka protests while you tease him with silly face and fake jerk off motions. "Hrmph! You\'re one to talk anyways," he grumbles. "I know about that magazine you hide under your bed."');
                scene.text('"I don\'t know what you\'re talking about," you say with an air of feigned innocence and superiority. "I have never been anything other than ladylike!"');
                scene.text('"Come on sis," he says with a look. "We were just talking about this. I watch porn. I know what girls do when no one is looking. Furiously schlicking it while biting down on your pillow <i>is</i> your version of ladylike."');
              }
            }
          }
          scene.actions([
            { label: 'Continue', goto: ['brother', 'start'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const brother2: LocationDef = {
  name: 'brother2',
  title: 'Kolka',
  region: 'other',
  description: ['You casually talk to him about whatever topics come up.'],
  enter: enter,
};
