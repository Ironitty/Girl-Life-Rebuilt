import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['train_incidental', 'event<<rand(1,27)>>'] }]);
  scene.build();
}

function enterEvent1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/train/fat.jpg');
  scene.text('A large, sweaty man sits next to you. He reeks as if he hasn\'t bathed in days. You look around, but there\'s no other place to sit.');
  scene.text('About halfway through the journey, he turns to you and starts asking questions. You thought his body reeked, but his breath is even worse.');
  scene.text('You lean back as far as you can and do your best to discourage him from talking as he continues to talk for the entire journey.');
  scene.text('When you finally arrive, you rush out of the train car to the fresh air outside.');
  if (((s as any).locArgs?.[0] ?? 0) === 'event2') {
    scene.img('images/locations/shared/train/sex/finger\'+ rand(1, 2) +\'.mp4');
    scene.text('A young couple sits down a little way away from you. The boy keeps trying to feel the girl up, and she keeps pushing his hands away, glancing nervously around the car.');
    scene.text('Eventually, she gives in to his persistence, and they\'re soon kissing passionately as one of his hands slides up her skirt. You try your best to give them privacy, but her loud moans are very distracting.');
    scene.text('By the next stop, her moans reach a crescendo, followed by her shuddering in the boy\'s arms and growing quiet. When she notices your eyes on them, she blushes bright red and pushes his hands away while whispering at him.');
    scene.text('He looks over at you with a huge grin and leans back, clearly proud of his actions, while she does everything she can to hide.');
    scene.actions([
      { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'event3') {
      scene.img('images/locations/shared/train/nursing.jpg');
      scene.text('The train is sparsely populated today and you sit across from a young woman holding a baby. After a while, the baby gets fussy and the young woman responds by beginning to breastfeed.');
      scene.text('As you watch her, you can\'t help but wonder what it would feel like. A man to your right notices you staring and jokingly tells you he could help you out if you want one of your own.');
      scene.text('You blush bright red and lower your head while he gets a good laugh.');
      scene.actions([
        { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'event4') {
        scene.img('images/locations/shared/train/crowded.jpg');
        scene.text('The train is absolutely packed today. No seats are available, so you\'re left standing, feeling much like a canned sardine.');
        scene.text('At one of the stops, you stumble forward a bit. After regaining your footing, you feel something hard lodged between your legs. It seems the man in front of you is carrying a thin briefcase, and you managed to stumble onto it. He doesn\'t seem to notice, and the car is too packed for you to move away. As a result, the briefcase brushes against your pussy every time the train starts or stops.');
        scene.text('You spend the rest of the journey hoping nobody notices while stifling any unintentional moans.');
        scene.actions([
          { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'event5') {
          scene.img('images/locations/shared/train/glare.jpg');
          scene.text('The train is mostly empty and you enjoy having so much space to yourself. There is a woman a few rows ahead of you dressed in office clothes and makeup who glares at you when you check out her dress.');
          scene.text('She stands up and walks toward you, stopping right in front of you and asking what you\'re looking at. It takes you a while, but you manage to deescalate the situation. Luckily, she gets off the train at the next station.');
          scene.actions([
            { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'event6') {
            scene.img('images/locations/shared/train/sleep.jpg');
            scene.text('The train is full of commuters today and you marvel at how all the office workers look so similar. One catches your eye, however. He\'s wearing what could be a very nice suit — if it weren\'t so faded and worn.');
            scene.text('He simply looks outside, not reading like the others. He seems so exhausted. You wonder what turns his life has taken to reach this point.');
            scene.actions([
              { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'event7') {
              (s as any).minut = ((s as any).minut ?? 0) + 20;
              scene.text('You get a window seat today and enjoy watching the countryside go by. After some time passes, the train stops and the conductor announces that there are some technical difficulties with the train.');
              scene.text('You get very bored staring at the same farm for twenty minutes, wishing you had a magazine before the train finally starts moving again.');
              scene.actions([
                { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
              ]);
            } else {
              if (((s as any).locArgs?.[0] ?? 0) === 'event8') {
                scene.img('images/locations/shared/train/invest.jpg');
                scene.text('A man in a suit sits opposite you and starts looking through things on his laptop. Every so often, his phone rings and he lists company names and prices with instructions to buy and sell.');
                scene.text('You briefly wonder if you should be paying attention, but you doubt you have the money needed to invest, even if you wanted.');
                scene.actions([
                  { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                ]);
              } else {
                if (((s as any).locArgs?.[0] ?? 0) === 'event9') {
                  scene.img('images/locations/shared/train/ride.jpg');
                  scene.text('A fly gets stuck in the carriage. It\'s surprisingly noisy, and you spend 5 minutes trying to shoo it out of the window.');
                  scene.text('You finally manage to get it out and the other people in the carriage jokingly applaud. Your face turns red as you return to your seat.');
                  scene.actions([
                    { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  ]);
                } else {
                  if (((s as any).locArgs?.[0] ?? 0) === 'event10') {
                    scene.img('images/locations/shared/train/ride.jpg');
                    scene.text('Some foreign tourists get on the train with you and stow several suitcases in the overhead racks. A small case on top of the pile slides about as the train starts and stops.');
                    scene.text('You can\'t help but watch it, thinking it will slide off and fall on someone, but thankfully, it never does.');
                    scene.actions([
                      { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                    ]);
                  } else {
                    if (((s as any).locArgs?.[0] ?? 0) === 'event11') {
                      scene.img('images/locations/shared/train/ride.jpg');
                      scene.text('A local city newspaper has been left on your seat, so you flick through it to pass the time, idly turning through the pages looking for articles of interest.');
                      scene.text('You don\'t manage to find any, but it still beats just sitting there daydreaming.');
                      scene.actions([
                        { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                      ]);
                    } else {
                      if (((s as any).locArgs?.[0] ?? 0) === 'event12') {
                        scene.img('images/locations/shared/train/ride.jpg');
                        scene.text('After you\'ve settled down, a woman enters with three children and a push-chair looking for a seat. One of the few remaining ones is next to you, so now you have the pleasure of an energetic small child sitting next to you, one that jumps up and down on the seat, shouts to his brother, and occasionally throws things at him.');
                        scene.text('Sometimes those things are thrown back. Sometimes they hit you, by accident or perhaps deliberately, given how amusing they find it.');
                        scene.actions([
                          { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                        ]);
                      } else {
                        if (((s as any).locArgs?.[0] ?? 0) === 'event13') {
                          scene.img('images/locations/shared/train/animalr.jpg');
                          scene.text('As you board the train, you notice there\'s no one else in the carriage with you. However, as you take your seat, you look over and see some sort of dog like animal curled up in one of the seats.');
                          scene.text('It looks like a wild animal, but it\'s not bothering you, so you ignore it and get off at your stop.');
                          scene.actions([
                            { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                          ]);
                        } else {
                          if (((s as any).locArgs?.[0] ?? 0) === 'event14') {
                            scene.img('images/locations/shared/train/boobflash\'+ rand(1, 2) +\'.jpg');
                            scene.text('About halfway through the journey, you hear some whistles and clapping. You look up and see another young girl, not much older than you are, flashing her breasts at everyone on the train, which is appreciated by most of the passengers, though a few of the women and elders seem to disapprove.');
                            scene.text('Either way, she sure looks like she\'s loving the attention.');
                            scene.actions([
                              { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                            ]);
                          } else {
                            if (((s as any).locArgs?.[0] ?? 0) === 'event15') {
                              scene.img('images/locations/shared/train/buttflash1.jpg');
                              scene.text('About halfway through the journey, you hear some whistles and clapping. You look up and see another young girl, not much older than you are, flashing her naked ass at everyone on the train, which is appreciated by most of the passengers, though a few of the women and elders seem to disapprove.');
                              scene.text('Either way, she sure looks like she\'s loving the attention.');
                              scene.actions([
                                { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                              ]);
                            } else {
                              if (((s as any).locArgs?.[0] ?? 0) === 'event16') {
                                scene.img('images/locations/shared/train/dickslip.jpg');
                                scene.text('While sitting in your seat, you glance up at the guy across from you. He\'s texting on his phone while leaned back with his legs spread.');
                                scene.text('As you check him out, you notice the head of his dick hanging out the leg of his shorts. You glance around and see an older woman watching you. By the smile she gives, you know she noticed as well.');
                                scene.text('You start blushing and try looking away, trying to find anything else to look at for the rest of the trip.');
                                scene.actions([
                                  { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                ]);
                              } else {
                                if (((s as any).locArgs?.[0] ?? 0) === 'event17') {
                                  scene.img('images/locations/shared/train/gflashtrain.jpg');
                                  scene.text('You spend most of your time looking out the windows. As you pass by a field, you notice a young woman standing in it completely naked, arms behind her back and legs apart, putting all she has on display for the passengers on the train.');
                                  scene.text('She smiles and waves as the train races by.');
                                  scene.actions([
                                    { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                  ]);
                                } else {
                                  if (((s as any).locArgs?.[0] ?? 0) === 'event18') {
                                    scene.img('images/locations/shared/train/hot.jpg');
                                    scene.text('You notice the attractive young woman sitting across the row from you. Dressed in a short tight leather dress and stockings, you try to avoid checking her out, but you catch her watching you a few times.');
                                    scene.text('When your eyes meet, she smiles at you before turning her attention to her phone. She doesn\'t look back over at you the rest of the trip.');
                                    scene.actions([
                                      { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                    ]);
                                  } else {
                                    if (((s as any).locArgs?.[0] ?? 0) === 'event19') {
                                      scene.img('images/locations/shared/train/nakedb\'+ rand(1, 2) +\'.jpg');
                                      scene.text('As you take your seat, you glance up to see a naked boy standing in the middle of the carriage. Many of the other passengers are staring at him, but he seems completely unconcerned. He never takes a seat and simply rides the train while standing as if there\'s nothing wrong.');
                                      scene.text('Before you can figure out why he\'s naked, he gets off at the next stop.');
                                      scene.actions([
                                        { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                      ]);
                                    } else {
                                      if (((s as any).locArgs?.[0] ?? 0) === 'event20') {
                                        scene.img('images/locations/shared/train/nakedg\'+ rand(1, 6) +\'.jpg');
                                        scene.text('As you take your seat, you glance up to see a naked girl standing in the middle of the car. Many of the other passengers are staring at her, but she seems completely unconcerned. She\'s smiling, seemingly enjoying the attention she\'s getting.');
                                        scene.text('She makes no attempt to ever cover herself and just rides the train like any other passenger before she gets off at her stop and heads into the train station.');
                                        scene.actions([
                                          { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                        ]);
                                      } else {
                                        if (((s as any).locArgs?.[0] ?? 0) === 'event21') {
                                          scene.img('images/locations/shared/train/nipslip\'+ rand(1, 2) +\'.jpg');
                                          scene.text('The ride has been fairly boring so far, so you start looking around at your fellow passengers, and that\'s when you notice it.');
                                          scene.text('A woman is distracted and seems to be completely unaware that her shirt has ridden down and left her breast and nipple exposed for all to see. You\'re about to say something to her when another woman gets her attention.');
                                          scene.text('She blushes and quickly tucks her breast back in.');
                                          scene.actions([
                                            { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                          ]);
                                        } else {
                                          if (((s as any).locArgs?.[0] ?? 0) === 'event22') {
                                            scene.img('images/locations/shared/train/pantyflash.mp4');
                                            scene.text('About halfway through the journey, you look up and notice a girl about your age looking back at you.');
                                            scene.text('You politely smile at her and go about your business, but she manages to catch your attention again as she flashes her panties at you with a smile.');
                                            scene.actions([
                                              { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                            ]);
                                          } else {
                                            if (((s as any).locArgs?.[0] ?? 0) === 'event23') {
                                              if ((Math.floor(Math.random() * 3) + 0) !== 0) {
                                                scene.img('images/locations/shared/train/pussyflash\'+ rand(1, 2) +\'.jpg');
                                              } else {
                                                scene.img('images/locations/shared/train/pussyflash.mp4');
                                              }
                                              scene.text('About halfway through the journey, you look up and notice a girl about your age looking back at you.');
                                              scene.text('You politely smile at her and go about your business, but she manages to catch your attention again as she flashes her bare pussy at you with a smile.');
                                              scene.actions([
                                                { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                              ]);
                                            } else {
                                              if (((s as any).locArgs?.[0] ?? 0) === 'event24') {
                                                scene.img('images/locations/shared/train/toprip.mp4');
                                                scene.text('As you\'re approaching your destination, you see a man reach over and grab the top of a woman sitting across the row from you. Once he has a firm grip on her top, he rips it off, leaving her completely topless.');
                                                scene.text('She seems surprised before she covers herself up and starts screaming at the man while yanking her top back from him. He only laughs as she screams at him while trying to fix her top.');
                                                scene.actions([
                                                  { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                ]);
                                              } else {
                                                if (((s as any).locArgs?.[0] ?? 0) === 'event25') {
                                                  scene.img('images/locations/shared/train/sex/bj\'+ rand(1, 2) +\'.mp4');
                                                  scene.text('A couple sits across from you and a few minutes pass by before the man suddenly pulls his cock out of his pants and grabs the woman\'s head.');
                                                  scene.text('He shoves her face down towards his crotch as she obediently opens her mouth and starts sucking his cock.');
                                                  scene.text('As time passes, he grabs her hair and starts forcing her head down while thrusting his hips up until he finally groans loudly.');
                                                  scene.text('Pulling her off his cock, he puts it away as she uses her fingers to clean up the cum at the corner of her lips.');
                                                  scene.actions([
                                                    { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                  ]);
                                                } else {
                                                  if (((s as any).locArgs?.[0] ?? 0) === 'event26') {
                                                    scene.img('images/locations/shared/train/sex/dblgmas.jpg');
                                                    scene.text('Some young girls sit across from you and you hear them giggling as they whisper back and forth. Blushing slightly, they look around before they start goading each other.');
                                                    scene.text('You\'re about to ask what they\'re up to when both of them pull up their skirts, spread their legs and begin to masturbate. They don\'t pay any attention to you at all as they do this.');
                                                    scene.text('Sometime later, one of them cries out in pleasure before flipping off her friend immediately after, apparently racing to see who could get off first.');
                                                    scene.actions([
                                                      { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                    ]);
                                                  } else {
                                                    if (((s as any).locArgs?.[0] ?? 0) === 'event27') {
                                                      scene.img('images/locations/shared/train/sex/gmast.mp4');
                                                      scene.text('The train car is empty other than one other woman who spends a lot of time texting on her phone before she suddenly pulls up her shirt and unbuttons her pants.');
                                                      scene.text('She reaches down into her pants with one hand and starts masturbating while keeping the other hand occupied with her breasts. Unsure what to do, you attempt to ignore her, but her moans of pleasure make it very hard to do so.');
                                                      scene.text('Luckily, she seems adept at getting herself off and it doesn\'t take too long before she climaxes. Once she does, she goes back to using her phone as if nothing happened.');
                                                      scene.actions([
                                                        { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                                                      ]);
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
        }
      }
    }
  }
  scene.actions([
    { label: 'Complete your journey', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'events':
      enterEvents(s, scene);
      break;
    case 'event1':
      enterEvent1(s, scene);
      break;
    default:
      enterEvents(s, scene);
      break;
  }
}

export const train_incidental: LocationDef = {
  name: 'train_incidental',
  title: 'A large, sweaty man sits next to you. He reeks as if he hasn',
  region: 'other',
  enter: enter,
};
