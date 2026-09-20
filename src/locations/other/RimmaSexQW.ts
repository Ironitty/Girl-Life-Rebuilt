import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRimmasexdi(s: GameState, scene: SceneBuilder): void {
  (s as any).RimmaSex = ((s as any).RimmaSex ?? 0) + (1);
  if (((s as any).RimmaSex ?? 0) <= 21) {
    (s as any).RimmaRandEvent = ((s as any).RimmaSex ?? 0);
  }
  if (((s as any).RimmaSex ?? 0) > 21) {
    (s as any).RimmaSex = 21;
    (s as any).RimmaRandEvent = (Math.floor(Math.random() * 20) + 2);
  }
  qspCall(s, 'stat', '');
  if (((s as any).RimmaRandEvent ?? 0) === 23) {
    scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
    // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
    scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
    scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: $ImageNeededPlacholder
    // TODO-QSP: ! WD: IMAGE NEEDED
    scene.text('');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
    return;
  } else {
    if (((s as any).RimmaRandEvent ?? 0) === 22) {
      scene.img('mod/bestmod/images/beast/zoo/rimmabj.jpg');
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
      // TODO-QSP: dynamic text: Rima pulled the strap-on out of her purse, followed by collar with a chain attac...
      scene.text(`Rima pulled the strap-on out of her purse, followed by collar with a chain attached to it. At her order, you put on the collar and hand the chain to Rima who put on the strap-on while you were occupied. She roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
      scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
      qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
      qspCall(s, 'stat', '');
      scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: $ImageNeededPlacholder
    // TODO-QSP: ! WD: IMAGE NEEDED
    scene.text('');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
      return;
    } else {
      if (((s as any).RimmaRandEvent ?? 0) === 21) {
        scene.img('mod/bestmod/images/beast/zoo/rimma21.jpg');
        qspCall(s, 'arousal', 'pee', (-5), 'sub', 'humiliation', 'lesbian');
        scene.text('Rimma orders you to squat and gets over you, her legs spread wide. Your face an inch from her pussy, you suddenly feel something warm running over it: Without warning, Rima just started peeing on you! Shocked by this, you sit motionless until the jet subsides, the smell intense as the last droplets drip from your chin.');
        scene.text('When she\'s done, Rima orders you to lick her clean and you comply without question.');
      } else {
        if (((s as any).RimmaRandEvent ?? 0) === 20) {
          scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
          if (((s as any).pcs_throat ?? 0) < 25) {
            qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
          }
          // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
          scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
          scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
          qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
          qspCall(s, 'stat', '');
          scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    if (((st as any).pcs_ass ?? 0) < 25) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma20.jpg');
    scene.text('Rima bends you over and her strap-on enters your ass sans additional lubrication. The friction and fullness are intense but you are also suddenly aware that your bladder is not only full but feels like it\'s about to burst.');
    scene.text('As Rima fucks you, you tighten the muscles in your lower body to try and keep control of your urethra but all you do is make the stimulation by her that much more intense. When you come, and you come very quickly, the orgasm deprives you of all control and you feel your own piss running down your leg. Rima chuckles but doesn\'t stop, driving the strap-on even harder into you, sending you right over the edge again, your shame and sudden relaxation fueling your second climax.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
          return;
        } else {
          if (((s as any).RimmaRandEvent ?? 0) === 19) {
            scene.img('mod/bestmod/images/beast/zoo/rimmabj.jpg');
            qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
            // TODO-QSP: dynamic text: Rima pulled the strap-on out of her purse, followed by collar with a chain attac...
            scene.text(`Rima pulled the strap-on out of her purse, followed by collar with a chain attached to it. At her order, you put on the collar and hand the chain to Rima who put on the strap-on while you were occupied. She roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
            scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
            qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
            qspCall(s, 'stat', '');
            scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma19.jpg');
    scene.text('You bend over for Rima when she orders you to, presenting your bare ass to her, feeling the pull on the chain as she enters your wet pussy. As demeaning as this is, it feels right with Rima, experience speaking from each of her actions and her movements inside you so intensely arousing that your moans are no doubt audible to your neighbors.');
    scene.text('At some point, you feel Rima pulling hard on the chain, hard enough to make you rear, and at that exact moment, she pulls the strap-on out and inserts it into your ass, your wetness making it as easy as it\'s going to be. A few thrusts later, you are already at your limit and come so hard that all strength leaves your body and Rima has to let go of the chain, lest she choke you.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
            return;
          } else {
            if (((s as any).RimmaRandEvent ?? 0) === 18) {
              scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
              qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
              // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
              scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
              scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
              qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
              qspCall(s, 'stat', '');
              scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma18.jpg');
    scene.text('Rima bends you over doggystyle and you feel the tip of her strap-on resting against your anus as she pulls the bottle of lube out of her purse. You groan and try to relax, preparing yourself mentally as she spreads the cool liquid around and inside your puckered hole, but even after all the things you\'ve done with Rima, taking this gigantic strap-on up your ass is not an easy feat.');
    scene.text('But slowly, ever so slowly, the woman works it into you, inch by inch, and starts moving back and forth, going a little deeper with every thrust, going a little faster every time. Your voice rises with her, the mix of pain and pleasure making it impossible to remain silent, and when you feel her grabbing your hair and pulling your head back, it sends you over the edge, screaming, hurting, but satisfied nonetheless.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
              return;
            } else {
              if (((s as any).RimmaRandEvent ?? 0) === 17) {
                scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
                qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
                // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
                scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
                scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
                qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
                qspCall(s, 'stat', '');
                scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma17.jpg');
    scene.text('Rima bends you over doggystyle and drives the strap-on into your pussy with an urgency you didn\'t think possible and she doesn\'t give you time to adjust but immediately pulls out and thrusts back in again. The friction is so intense it almost hurts and it fills your vagina so completely, so perfectly that you can\'t even breathe for a moment.');
    scene.text('The pace she sets is fast but as your climax approaches, you match her almost thrust for thrust, the occasional pain of her hitting your cervix only adding to your excitement at this point and sending you into a screaming orgasm.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
                return;
              } else {
                if (((s as any).RimmaRandEvent ?? 0) === 16) {
                  scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
                  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
                  // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
                  scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
                  scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
                  qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
                  qspCall(s, 'stat', '');
                  scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma16.jpg');
    scene.text('Rima puts you on your back and spreads your legs, driving the strap-on into your pussy with one slow thrust, stopping just short of your cervix, your moan music to her ears. She doesn\'t move fast today, focusing entirely on slowly driving you towards the edge and gauging your reactions as she goes.');
    scene.text('Your eyes never leave hers, not on your slow ascent, not as you fall over the edge, not as you\'re coming back down. When the last wave of your orgasm has passed, Rima rips the strap-on off and sits down on your face. Her own climax is only a few licks away.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
                  return;
                } else {
                  if (((s as any).RimmaRandEvent ?? 0) === 15) {
                    scene.img('mod/bestmod/images/beast/zoo/rimma14.jpg');
                    qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
                    // TODO-QSP: dynamic text: Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hi...
                    scene.text(`Rima pulls a massive strap-on out of her purse and puts it on, and you feel a hint of fear mingled into your excitement, knowing that she's going to fuck you with it. Wasting no time on ordering you around, she roughly pushes you down on your knees and slips it past your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips.`);
                    scene.text('You instinctively start moving your tongue around its thick tip, her hand at the back of your head holding you in place as she guides it into your throat. Given its size, it doesn\'t come as a surprise that your gag reflex starts acting up but you endure as best you can, covering it generously in saliva.');
                    qspCall(s, 'arousal', 'bj', 10, 'sub', 'lesbian');
                    qspCall(s, 'stat', '');
                    scene.actions([
{ label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    qspCall(st, 'stat', '');
    scene.img('mod/bestmod/images/beast/zoo/rimma15.jpg');
    scene.text('Rima lies down on the couch with you, spooning you from behind, rubbing the strap-on\'s tip against your lower lips, teasing you only for a moment before she pushes it in. Between your spit and lust, the artificial dick goes in without resistance.');
    scene.text('Only when it hits your cervix do you reach back to stop her, the sudden pain shaking you out of your reverie, but Rima whispers encouragingly into your ear as she pulls back. When she starts moving in earnest, she doesn\'t hit that threshold again, filling you up as much as she can without actually hurting you, even as she furiously fucks you.');
    scene.text('Your folds tighten so much during your orgasm and grip the strap-on so violently that Rima has trouble pulling out afterwards.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Say goodbye to Rima', goto: ['korr', ''] },
    ]);
  } },
]);
                    return;
                  } else {
                    if (((s as any).RimmaRandEvent ?? 0) === 14) {
                      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 8);
                      scene.img('mod/bestmod/images/beast/zoo/rimma13.jpg');
                      scene.text('You bend over on the couch for Rima as she lubes up her hands, followed by your anus. She doesn\'t have to say a word as she does; you know what\'s coming.');
                      scene.text('She places both of her hands at your puckered hole and works her fingers in - left, right, left, right, almost like she\'s following an obscure sexual knitting manual - but you don\'t care as long as she doesn\'t stop, her expert stimulation causing you to moan like a bitch in heat right from the start.');
                      scene.text('Not only does she fit both hands into you but she does so in record time, her soft chuckle speaking of her own surprise at this. Then, she comes to the main course: Without warning or warm-up, she begins pounding you with her hands, your yelp turning into a sustained moan as she hits all the right spots.');
                      scene.text('When you come down from your climax, Rima sits down in front of you, dripping wet. You are more than happy to return the favor…');
                      (s as any).orgasm_or = 'yes';
                      qspCall(s, 'arousal', 'anal_finger', 20, 'lesbian', 'sub');
                      qspCall(s, 'stat', '');
                    } else {
                      if (((s as any).RimmaRandEvent ?? 0) === 13) {
                        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 8);
                        scene.img('mod/bestmod/images/beast/zoo/rimma12.jpg');
                        scene.text('Rima tells you to lie back on your couch and lubricate your anus while she does the same with her hands. You are too excited to question her order, instead taking the bottle of lube she presents to you and making sure your backdoor is ready for anything.');
                        scene.text('Even when you tell her that you are done, Rima lifts your ass to check if your anus is properly lubed up, by pushing several fingers at once it. When her hand is almost all the way in, she seems to be convinced… and adds a finger from her other hand. Then another. And another. What you are feeling is beyond description, beyond comprehension, and it leaves you breathless and almost mute.');
                        scene.text('Only when she starts to move, both of her hands all the way inside you, do you make noises again: Soft, understated coos that swell to loud screams when the woman picks up the pace and fucks your ass with both of her hands. The orgasm comes loud and hard and you feel deaf and numb. All you can see is Rima, grinning like a Cheshire cat, and you weakly return that grin.');
                        (s as any).orgasm_or = 'yes';
                        qspCall(s, 'arousal', 'anal_fist', 20, 'lesbian', 'sub');
                        qspCall(s, 'stat', '');
                      } else {
                        if (((s as any).RimmaRandEvent ?? 0) === 12) {
                          qspCall(s, 'arousal_funcs', 'stretch', 'anal', 6);
                          qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 5);
                          scene.img('mod/bestmod/images/beast/zoo/rimma11.jpg');
                          scene.text('Once again, Rima leads you into your bedroom and you lie down on your back for her, curious what she intends to do today. She doesn\'t keep you wondering for long: Rima rummages around her purse until she finds a bottle of lube and generously applies it to both of her hands, giving you suggestive smiles as she does.');
                          scene.text('Your previous experiences with her have prepared you well for what she has in mind: With terrifying ease and very little patience, Rima pushes one of her hands into your vagina and works the other into your anus. It\'s a testament to the times you have spent with her that you don\'t hurt as much as you feel full as, knuckle by knuckle, her fingers sink into you, your groans leaving little doubt as to your pleasure.');
                          scene.text('Soon, both of her hands are all the way inside you and Rima starts slowly pulling them out again, then back in, fucking you with her entire limbs, the fullness ebbing away only to return in force. It\'s an incredible, maddening feeling and your orgasm hits you with the suddenness and violence of a tsunami.');
                          (s as any).orgasm_or = 'yes';
                          qspCall(s, 'arousal', 'anal_fist', 20, 'lesbian', 'sub');
                          qspCall(s, 'arousal', 'vaginal_fist', (-20), 'lesbian', 'sub');
                          qspCall(s, 'stat', '');
                        } else {
                          if (((s as any).RimmaRandEvent ?? 0) === 11) {
                            qspCall(s, 'arousal_funcs', 'stretch', 'anal', 6);
                            scene.img('mod/bestmod/images/beast/zoo/rimma10.jpg');
                            scene.text('Rima has you get on your hands and knees on the living room couch and the look in her eyes is one of smoldering passion. Curious and horny, you comply without resistance and wait patiently as she rummages around her purse.');
                            scene.text('When she returns, her hand is glistening with lubricant and as soon as her index finger smoothly pushes past your sphincter, you know where this is going. As if to preempt any resistance, Rima plays with your pussy with her free hand, adding more stimulation to the mix as the second finger enters you.');
                            scene.text('Within minutes, the fifth finger has entered you and you feel her pushing her hand against your backdoor, picking up speed and making you moan louder and louder. Her free hand is spreading your ass more to make penetration easier, as is one of yours. Your other hand is furiously rubbing your clit as you enjoy her fisting your ass.');
                            scene.text('It doesn\'t take you long to cum and when you do, your ass contracts so hard you are afraid you might hurt Rima. To your relief - and, by the looks of it, hers too - you don\'t.');
                            (s as any).orgasm_or = 'yes';
                            qspCall(s, 'arousal', 'anal_fist', 20, 'lesbian', 'sub');
                            qspCall(s, 'arousal', 'clit_finger', (-20));
                            qspCall(s, 'stat', '');
                          } else {
                            if (((s as any).RimmaRandEvent ?? 0) === 10) {
                              qspCall(s, 'arousal_funcs', 'stretch', 'anal', 6);
                              scene.img('mod/bestmod/images/beast/zoo/rimma9.jpg');
                              scene.text('Rima puts you on your hands and knees and has you stick your ass up in the air, rubbing your buttcheeks teasingly as she plays with your clit.');
                              scene.text('Her fingers enter your pussy and expertly tease you but you can tell already that this is not where she wants them to remain. Feeling her spit in your rosebud confirms your suspicion and makes you wetter at the same time in anticipation of what she\'s going to do.');
                              scene.text('At first, she only sinks two fingers into your ass but more and more spit lubricates you and the third, then fourth finger join them with little resistance and no protest, your moans urging her on. The fifth and final finger pushes past your entrance and all of a sudden, Rima speeds up, her intent of pushing her entire hand in very clear and thoroughly enjoyable.');
                              scene.text('You can\'t resist her fisting for long. Your orgasm hits you hard, every wave in perfect synchronicity with her thrusts, and when it has passed, your ass feels incredibly full.');
                              (s as any).orgasm_or = 'yes';
                              qspCall(s, 'arousal', 'anal_fist', 20, 'lesbian', 'sub');
                              qspCall(s, 'stat', '');
                            } else {
                              if (((s as any).RimmaRandEvent ?? 0) === 9) {
                                qspCall(s, 'arousal_funcs', 'stretch', 'anal', 5);
                                scene.img('mod/bestmod/images/beast/zoo/rimma8.jpg');
                                scene.text('You find yourself lying on your side, spreading your legs to give Rima easier access to your sex. Indeed, her fingers penetrate your wet pussy and her wonderful touch has you panting in no time at all.');
                                scene.text('Between two strokes, though, she pulls out entirely and instead works the well-lubricated fingers into your ass. You gasp as she gets the speed back to where it was and have your backdoor thoroughly fingerfucked by her. She skillfully teases your clit for additional stimulation but you even without it, you\'d have come anyway.');
                                scene.text('And come you do, feeling your sphincter twitch around her index and middle finger, beckoning them to stay a little longer as you ride out the waves of your anal climax.');
                                (s as any).orgasm_or = 'yes';
                                qspCall(s, 'arousal', 'anal_finger', 20, 'lesbian', 'sub');
                                qspCall(s, 'stat', '');
                              } else {
                                if (((s as any).RimmaRandEvent ?? 0) === 8) {
                                  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
                                  scene.img('mod/bestmod/images/beast/zoo/rimma7.jpg');
                                  scene.text('Rima puts you on your back, your soft bed ever-willing to serve, and dives right in, her tongue finding your clit with pin-point precision.');
                                  scene.text('At the same time, her hand explores your nether regions, stroking up and down your legs, outside and inside, caresses your stomach and sides, squeezing your buttcheeks, teasing your wet folds with quick flicks and lingering strokes, but it doesn\'t come to rest… until it finds your rosebud.');
                                  scene.text('She circles around your backdoor as if she had all the time in the world, pretending to push a finger in one moment only to pull it away the next, her constant back and forth driving you crazy and making you hornier the longer she persists.');
                                  scene.text('At some point, you simply cannot hold out any longer and clamp down hard the instant you feel her pushing in. At the same time, you put one hand at the back of her head and pull her against you. This tiny push is all you need to cum, finally.');
                                  scene.text('When you\'ve relaxed enough to release her, she seems a little unhappy about you wresting control from her but the passionate kiss you give her wipes the frown right off her face.');
                                  (s as any).orgasm_or = 'yes';
                                  qspCall(s, 'arousal', 'cuni', 20, 'lesbian', 'sub');
                                  qspCall(s, 'stat', '');
                                } else {
                                  if (((s as any).RimmaRandEvent ?? 0) === 7) {
                                    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 5);
                                    scene.img('mod/bestmod/images/beast/zoo/rimma6.jpg');
                                    scene.text('The couch in the living room is where Rima wants to have you, and you have no reason to deny her. Spreading your legs for her, you watch as she patiently puts one finger after the other into you, teasing you with gusto and nipping at your clit every now and then to put you even more on edge.');
                                    scene.text('Her second hand squeezes your tits, teases your nipples, strokes your stomach, caresses your cheek - seems to be everywhere at once. Her hand inside your pussy doesn\'t go easy on you, not this time: Rima immediately goes from massaging your insides to fist-fucking you and you love every second of it.');
                                    scene.text('Your climax builds quickly - no surprise after almost half an hour of teasing - when you feel her second hand linger on your throat… and tightening around it. You open your eyes to look at her and while it\'s harder to breathe, the passion in Rima\'s eyes is infectious.');
                                    scene.text('The orgasm hits you like a truck, the slight lack of air increasing its intensity by an order of magnitude, and by the looks of it, Rima is just about ready to come herself, getting off immensely on dominating you.');
                                    (s as any).orgasm_or = 'yes';
                                    qspCall(s, 'arousal', 'vaginal_fist', 20, 'lesbian', 'sub');
                                    qspCall(s, 'stat', '');
                                  } else {
                                    if (((s as any).RimmaRandEvent ?? 0) === 6) {
                                      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 5);
                                      scene.img('mod/bestmod/images/beast/zoo/rimma5.jpg');
                                      scene.text('Once again, Rima takes you into your bedroom and has you lie down. Your memories of how she went down on you very present in your mind, you eagerly spread your legs for her and she smiles broadly as lowers her mouth onto you.');
                                      scene.text('Two of her fingers are inside your wet pussy in an instant but other than that, she takes her time, teasing and touching you with unfathomable skill, only slowly picking up speed. When you are getting closer to orgasm, she inserts a third finger but slows down at the same time, your groans turning from lust to frustration as she teases you, inches away from release.');
                                      scene.text('But Rima is merciless: She slowly, ever so slowly works you down from that almost-climax, then back up again, to that same breaking point… then introduces a fourth finger and slows down once again.');
                                      // TODO-QSP: nl
                                      scene.text('You barely even register when she sinks her whole hand into your depths - at that point, you are so desperately horny that you are literally begging her to make you cum, and this time, her fist inside you, she finally relents.');
                                      scene.text('From one moment to the next, she starts fucking you with her whole hand, pushing you right to the edge and over, then right to the next and over again. You can feel yourself twitching around her hand, gripping her like a vice, but the rest of your body is a shaking, screaming, sweating mess. That doesn\'t change the fact, though, that Rima gave you a couple of incredible orgasms, though.');
                                      (s as any).orgasm_or = 'yes';
                                      qspCall(s, 'arousal', 'vaginal_fist', 20, 'lesbian', 'sub');
                                      qspCall(s, 'stat', '');
                                    } else {
                                      if (((s as any).RimmaRandEvent ?? 0) === 5) {
                                        qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
                                        scene.img('mod/bestmod/images/beast/zoo/rimma4.jpg');
                                        scene.text('Rima and you go into the bedroom and you lie down on your back, opening yourself to your female company. She doesn\'t even try to resist the enticing view and you can feel her tongue on your clit before she\'s come to rest on the bed.');
                                        scene.text('You feel her fingers penetrate you, your folds wet and ready with anticipation, and her touch is heavenly. Rima seems to have an almost supernatural intuition for where she has to touch your insides to elicit the highest moans from you and you are all too willing to let them erupt.');
                                        scene.text('While there is a lot of variation in the way she angles her hand and hooks her fingers, she never gets slower - her index and middle finger went from teasingly slow to a good, hard fingerfuck and she seems certain that she can hold out longer than you.');
                                        // TODO-QSP: nl
                                        scene.text('She\'s right, too: When she adds a third finger - without slowing down - an incredible orgasm rips through you and you have to hold on for dear life. All you can manage when Rima kisses you is a weak smile as you taste yourself on her lips.');
                                        (s as any).orgasm_or = 'yes';
                                        qspCall(s, 'arousal', 'vaginal_finger', 20, 'lesbian', 'sub');
                                        qspCall(s, 'stat', '');
                                      } else {
                                        if (((s as any).RimmaRandEvent ?? 0) === 4) {
                                          scene.img('mod/bestmod/images/beast/zoo/rimma3.jpg');
                                          scene.text('Rima leads you into the bedroom and has you lie down. You\'ve barely come to rest when she\'s already on top of you, her wet pussy mere inches from your mouth, her eyes sparkling as she bends backwards and you feel her fingers caressing your sex.');
                                          scene.text('You lose yourself in her expert touch and the arousing taste of her juices, your tongue and lips working tirelessly to pleasure her.');
                                          scene.text('When you feel her crotch pressing more strongly against your face, you know that she won\'t take much longer and redouble your efforts, as does she. In seconds, you have her screaming and thrashing, your own orgasm muffled by her nether lips.');
                                          (s as any).orgasm_or = 'yes';
                                          qspCall(s, 'arousal', 'cuni_give', 20, 'lesbian', 'sub');
                                          qspCall(s, 'stat', '');
                                        } else {
                                          if (((s as any).RimmaRandEvent ?? 0) === 3) {
                                            scene.img('mod/bestmod/images/beast/zoo/rimma2.jpg');
                                            scene.text('You go into the living room where she sits down on the sofa, legs spread. You understand the invitation and drop to your knees, languidly licking her pussy up and down, teasing her greedy hole with one hand while you rub your own clit with the other.');
                                            scene.text('Rima moans with joy and you can feel her hands on your head, stroking it, urging you on.');
                                            scene.text('As her passion grows, her movements become rougher and in her bliss, her fingers claw into your hair. She pulls you closer, grinding her hips against your face and is quickly overcome by her orgasm. Thanks to her rough treatment and your "free" hand, you follow her immediately.');
                                            (s as any).orgasm_or = 'yes';
                                            qspCall(s, 'arousal', 'cuni_give', 20, 'lesbian', 'sub');
                                            qspCall(s, 'stat', '');
                                          } else {
                                            if (((s as any).RimmaRandEvent ?? 0) === 2) {
                                              scene.img('mod/bestmod/images/beast/zoo/rimma.jpg');
                                              scene.text('You barely make it into the bedroom. As soon as you\'re there, Rima pushes you onto the bed and lays on top of you in a 69, offering you her pussy and immediately going down on yours.');
                                              scene.text('The passion she licks you with is infectious and as you desperately try to hold onto her, you do your best to reciprocate, exploring Rima\'s delicate folds and hole with your tongue and fingers.');
                                              scene.text('Your moans, muffled as they are, grow louder, loud enough for the neighbors to hear, you\'re sure, but they don\'t last for long: Within minutes, the unearthly bliss you\'re experiencing culminates in an overwhelming orgasm that leaves you and your partner gasping and shaking.');
                                              (s as any).orgasm_or = 'yes';
                                              qspCall(s, 'arousal', 'cuni', 20, 'lesbian', 'sub');
                                              qspCall(s, 'arousal', 'cuni_give', (-20), 'lesbian', 'sub');
                                              qspCall(s, 'stat', '');
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
    { label: 'Say goodbye to Rima', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'korr', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).rimmaday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('You go over to Rima who smiles affably as she greets you.');
  // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>. My shift is almost over. Do you want to do something?"
  scene.text(`"Hi ${((s as any).pcs_nickname || '')}. My shift is almost over. Do you want to do something?"`);
  scene.actions([
    { label: '"Sorry, I can\'t right now"', goto: ['shop_moncheri', 'start'] },
    { label: '"Sure. How about we go to my place?"', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 250, 'cash');
      qspCall(st, 'stat', '');
      scene.text('Rima enthusiastically agrees. While she finishes work for the day, you call a taxi.');
      // TODO-QSP: nl
      scene.text('Only half an hour later, you unlock the door to your apartment and beckon Rima inside. As soon as the door is closed, Rima and you start kissing and tearing eachother\'s clothes off.');
      qspCall(st, 'arousal', 'foreplay', 30, 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Sex', handler: (st: GameState) => {
    qspCall(st, 'RimmaSexQW', 'rimmasexdi');
  } },
      ]);
    }
  } },
  ]);
  const arg = s.locArg;
  switch (arg) {
    case 'rimmasexdi':
      enterRimmasexdi(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const RimmaSexQW: LocationDef = {
  name: 'RimmaSexQW',
  title: 'You go over to Rima who smiles affably as she greets you.',
  region: 'other',
  enter: enter,
};
