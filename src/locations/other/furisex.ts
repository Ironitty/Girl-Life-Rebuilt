import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).furibj_today = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if ((!((s as any).locArgs?.[0] ?? 0))) {
    scene.text('The driver climbs into his seat and starts the engine. The two of you drive off, and chat casually for fifteen minutes.');
    scene.text('Then, the driver spots another roadside parking lot and stops his truck.');
    scene.actions([
      { label: 'Look at the driver', goto: ['furisex', '', '1'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 1) {
    scene.text('When you look at the driver questioningly, he has a greedy grin on his face. He says: "Now, it\'s time for you to fulfill your part of the deal. Undress and go to my sleeping compartment, I want to look at your naked body while you blow me."');
    scene.actions([
      { label: 'Do as he says', goto: ['furisex', '', '2'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 2) {
    scene.text('You nod and take off your clothes. You squeeze past him into the sleeping compartment behind the chairs, and the driver follows you. When he takes off his pants, his cock jumps free. It\'s not particularly large, but still a bit above average size.');
    scene.text('When you reach out to touch it, he playfully slaps it away and says: "Put on the condom first, girl! I don\'t take risks with slutty hitchhikers."');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      qspCall(s, 'dina', 'prezik');
    } else {
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0) {
        ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) + (1);
        ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) - (1);
        qspCall(s, 'dina', 'prezik');
      } else {
        scene.text('Your search through your pile of clothes becomes more and more frantic; you\'d swear you had a condom with you! When you turn to the trucker to tell him you can\'t find one, he wordlessly hands you one from his pocket before you can say anything.');
      }
    }
    scene.actions([
      { label: 'Put on the condom with your hands', goto: ['furisex', '', '3'] },
      { label: 'Put on the condom with your mouth', goto: ['furisex', '', '4'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 3) {
    scene.img('images/locations/highway/sex/condomput.jpg');
    scene.text('You quickly take the condom out of its wrapper and roll it down the man\'s erection.');
    scene.actions([
      { label: 'Suck his dick', goto: ['furisex', '', '5'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 4) {
    scene.img('images/locations/highway/sex/condomput2.jpg');
    scene.text('You quickly take the condom out of its wrapper and place it between your lips. It takes you a while to put the condom on his penis using only your mouth, but eventually you manage. The truck driver laughs when he sees you struggle at first, but you can tell he\'s impressed when you actually succeed.');
    scene.actions([
      { label: 'Suck his dick', goto: ['furisex', '', '5'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 5) {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).furibj = ((s as any).furibj ?? 0) + (1);
    scene.img('images/locations/highway/sex/condombj.jpg');
    scene.text('You take his condom-clad cock in your mouth and begin to suck him off. The rubbery taste isn\'t particularly enticing and you have to work harder because of the condom between your tongue and him, but you decide to give it your best shot anyway. You don\'t want him to kick you out of his truck!');
    scene.text('It takes you a few minutes to stimulate him enough, and you try to provide extra suction to compensate for the condom. Eventually the man groans softly, and you slowly feel the cock in your mouth soften a few seconds later. When you release his cock from your mouth, you see a fairly large amount of sperm gathered in the condom tip.');
    qspCall(s, 'arousal', 'bj', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Put your clothes back on', goto: ['furisex', '', '6'] },
    ]);
  }
  if (((s as any).locArgs?.[0] ?? 0) === 6) {
    scene.text('The truck driver ties a knot in the condom and flings it out the window without another thought, before he puts his clothes back on and takes place behind the wheel again.');
    scene.text('He drives you to where you wanted to go, not talking much on the way there.');
    qspCall(s, 'arousal', 'end');
    (s as any).furisex = 0;
    if (((s as any).nroad ?? 0) !== 0) {
      scene.actions([
        { label: 'Have him drop you off in St. Petersburg', goto: ['city_industrial', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) !== 20) {
      scene.actions([
        { label: 'Have him drop you off in Pavlovsk', goto: ['pav_commercial', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) !== 10) {
      scene.actions([
        { label: 'Have him drop you off in Gadukino', goto: ['gadukino', ''] },
      ]);
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 100) {
    if (((s as any).furibj ?? 0) >= 5) {
      scene.text('The driver starts the engine and unzips his trousers. His semi-hard cock flops out and without further instruction you reach over and jerk him a few times to get him properly stiff.');
      if ((((s as any).furibj ?? 0) / 10) >= ((s as any).furi_driver ?? 0)) {
        scene.text('You\'ve done this with him before, you know the drill.');
      } else {
        if (((s as any).furibj ?? 0) < 15) {
          scene.text('You\'ve done this more than a few times now so you kind of understand what the driver expects from you, but even so it\'s still hard to get used to, sucking off a stranger for a ride in their car.');
        } else {
          if (((s as any).furibj ?? 0) < 20) {
            scene.text('You didn\'t necessarily think you\'d be making a habit out of this but dare you say it, you\'re starting to get used to trading sexual favors for transport and your body instinctively starts going through the motions.');
          } else {
            if (((s as any).furibj ?? 0) < 30) {
              scene.text('This is almost completely normalized to you now. You\'ve gotten quite used to blowing people for rides. The only worry left in your mind is if this could cause a reputation about you to pop up.');
            } else {
              scene.text('You\'re an expert hitchhiker at this point and trading road head for rides is as natural to you as breathing. You know what you need to do');
            }
          }
        }
      }
      scene.actions([
        { label: 'Blow him', goto: ['furisex', '', '101'] },
      ]);
    } else {
      scene.text('The driver climbs into his seat and starts the engine. The two of you drive off, and chat casually for a few minutes.');
      scene.text('Then he nods at his groin, and says: "I believe you owe me something! I don\'t have much time, so just do it while I\'m driving. Oh, and take off your clothes. I want to look at your tits while you suck me off."');
      scene.actions([
        { label: 'Do as he says', goto: ['furisex', '', '101'] },
      ]);
    }
  }
  if (((s as any).locArgs?.[0] ?? 0) === 101) {
    qspCall(s, 'npcgeneratec', '', 0, 'Truck Driver', Math.floor(Math.random() * 11) + 30);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).furibj = ((s as any).furibj ?? 0) + (1);
    (s as any).furiswallow = ((s as any).furiswallow ?? 0) + (1);
    qspCall(s, 'dinSex', 'std_trigger_oral');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    if (((s as any).furibj ?? 0) >= 5) {
      scene.img('images/locations/highway/sex/bj (1).mp4');
    } else {
      scene.img('images/locations/highway/sex/furibj.jpg');
    }
    if (((s as any).furibj ?? 0) >= 200  ||  (((s as any).furibj ?? 0) / 10) >= ((s as any).furi_driver ?? 0)) {
      scene.text('He hits the accelerator and starts the journey and you bend over his lap, gently sucking his cock. You try your best to remember what this particular driver likes in how you use your tongue and what his sensitive spots are. Judging by some of his reactions and sharpish movements he makes with the wheel, you think you\'ve got him on point.');
    } else {
      if (((s as any).furibj ?? 0) < 10) {
        scene.text('He hits the accelerator and starts the journey and you apprehensively bend over his lap. You place your quivering lips to his head and begin awkwardly blowing him, adjusting to the bumps and jostling of the road.');
      } else {
        if (((s as any).furibj ?? 0) < 20) {
          scene.text('He hits the accelerator and starts the journey and you naturally but nervously bend over his lap to wrap your mouth around his cock.');
        } else {
          if (((s as any).furibj ?? 0) >= 30) {
            scene.text('He hits the accelerator and starts the journey and you calmly bend over his lap and start sucking his cock.');
          } else {
            scene.text('That wasn\'t part of the deal! You frown for a moment but decide to do as he says, and expose your boobs for him to look at. Then you free the driver\'s cock from his pants and close your lips around it, gently sucking on it while he keeps driving.');
          }
        }
      }
    }
    scene.text('The driver casually steers his truck along the road and chats with colleagues over the board radio casually while you have his cock in your mouth, and gently strokes his hand through your hair when he can.');
    if ((((s as any).furibj ?? 0) / 10) >= ((s as any).furi_driver ?? 0)) {
      scene.text('"Mmm…" he hums with satisfaction. "You\'re my favorite hitchhiker you know that? You always give such great road head." You can\'t really respond so you just continue to bob your head up and down over his dick.');
      scene.text('With no warning other than a grunt, he begins to cum and your mouth is filled with hot sperm.');
      if (((s as any).furibj ?? 0) < 5) {
        scene.text('Not knowing what else to do, you swallow it like you did the last time you sucked him off.');
      } else {
        if (((s as any).furibj ?? 0) < 10) {
          scene.text('You swallow it quickly. You\'ve hitchhiked with payment via blowjob enough to know there\'s nothing else to be done with cum in your mouth.');
        } else {
          scene.text('You swallow without a second thought. You\'ve done this all before.');
        }
      }
      scene.text('You straighten up in your seat, you notice that you have coincidentally arrived at your destination and the driver pulls over for you.');
      scene.text('As you hop out of the truck the driver rolls down the window and calls out to you.');
      if (((s as any).furibj ?? 0) >= 200) {
        scene.text('"See you around, road head girl! Keep up the good work!"');
      } else {
        if (((s as any).furibj ?? 0) >= 100) {
          scene.text('"Hope to see you again road head girl!"');
        } else {
          if (((s as any).furibj ?? 0) >= 50) {
            scene.text('"I hope to see you again some time!"');
          } else {
            scene.text('"If you ever need another lift, come look for me! I\'ll be more than happy to take you!"');
          }
        }
      }
    } else {
      scene.text('"Oh yea… I know it\'s risky, but it\'s so much better without a condom!" he groans, and you feel his sperm being squirted into your mouth mere seconds later. It has a rather tangy taste, but you can\'t spit it out anywhere! You swallow it quickly, without giving it much thought.');
      scene.text('"Nice timing!" the driver grins. "If you ever need another ride, come find me. That was the best head I\'ve had in quite a while!"');
    }
    qspCall(s, 'arousal', 'bj', 15);
    qspCall(s, 'arousal', 'end');
    (s as any).furisex = 0;
    if (((s as any).nroad ?? 0) !== 0) {
      scene.actions([
        { label: 'Have him drop you off in St. Petersburg', goto: ['city_industrial', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) !== 20) {
      scene.actions([
        { label: 'Have him drop you off in Pavlovsk', goto: ['pav_commercial', ''] },
      ]);
    }
    if (((s as any).nroad ?? 0) !== 10) {
      scene.actions([
        { label: 'Have him drop you off in Gadukino', goto: ['gadukino', ''] },
      ]);
    }
  }
  scene.build();
}

export const furisex: LocationDef = {
  name: 'furisex',
  title: 'The driver climbs into his seat and starts the engine. The t',
  region: 'other',
  description: ['The driver climbs into his seat and starts the engine. The two of you drive off, and chat casually for fifteen minutes.'],
  enter: enter,
};
