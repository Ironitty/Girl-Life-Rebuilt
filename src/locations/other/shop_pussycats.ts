import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'start');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<b><center><font size="4">Pussy-Cats</font></center></b>');
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('The latest chart topping pop single is playing throughout the small store. The interior is decorated in bright colors and bold designs, and the floor is packed with stands and tables displaying clothes with a more daring style.');
  scene.text('Looking around at all the advertisements with attractive yet emaciated models, you\'ll either leave here seduced into buying something or with lower self-esteem.');
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed'  &&  ((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] >= 3  &&  qspFunc(s, 'jobs', 'is_work_time', 'city_pussycats_clerk') === 1) {
    scene.actions([{ label: 'Continue', goto: ['andrey', ''] }]);
  }
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
    // TODO-QSP: dynamic text: As you enter, you notice a for hire sign with a note scribbled on it that reads:...
    scene.text('As you enter, you notice a for hire sign with a note scribbled on it that reads: "<b>The Manager Mr. Sobulyagin works weekdays from 9:00 to 20:00, weekends 9:00 to 15:00; Applicants should speak to him weekdays BEFORE 14:30!</b>"');
    if (((s as any).hour ?? 0) >= 9  &&  (((s as any).hour ?? 0) < 15  ||  (((s as any).hour ?? 0) === 14  &&  ((s as any).minut ?? 0) <= 30))  &&  ((s as any).week ?? 0) < 6) {
      scene.actions([
        { label: 'Talk to the manager', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['andrey', ''] },
      ]);
    }
  }
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_pussycats_clerk') === 1) {
    scene.actions([
      { label: 'Go to work', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'clock', 'city_pussycats_clerk');
    qspCall(s, 'jobs', 'get_shift_for_day', 'city_pussycats_clerk', ((s as any).daystart ?? 0));
    if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).result_start ?? 0)) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).result_start ?? 0) - (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)));
    }
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).result_duration ?? 0));
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (((s as any).result_duration ?? 0) / 10);
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (((s as any).result_duration ?? 0) / 5);
    qspCall(s, 'stat', '');
    if (((s as any).result_duration ?? 0) <= 240) {
      scene.text('You spend 4 hours cleaning the department, folding and rehanging clothes and serving customers. The store now looks clean and pretty organized.');
    } else {
      scene.text('You spend 6 hours cleaning the department, folding and rehanging clothes and serving customers. The store now looks clean and pretty organized.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if ((((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'terminated'  ||  ((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'fired')  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6) {
    scene.actions([
      { label: 'Talk to the manager again', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['andrey', ''] },
    ]);
  }
  if (((s as any).hour ?? 0) > 21  ||  ((s as any).hour ?? 0) < 8) {
    scene.text('A security guard approaches you. "Sorry, but the store is closed. You\'ll have to leave."');
    scene.text('<center><b>The store is closed.</b></center>');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the shop', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'View dresses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'dress'] },
    { label: 'View other outfits', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'clothes'] },
    { label: 'View panties', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'panties'] },
    { label: 'View bras', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'bras'] },
    { label: 'View shoes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'shoes'] },
    { label: 'View purses', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'purses'] },
    { label: 'View coats', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['shop_pussycats', 'coats'] },
  ]);
  scene.build();
}

function enterDress(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'dress');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats dresses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_dress');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, Clothingstock mod 3
    qspCall(s, 'shop_utils', 'init', 'set_default_exceptions');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'clothes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats outfits</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'clothing', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats_outfits');
    // TODO-QSP: gs 'shop_utils', 'init', 'set_steps', 3, (Clothingstock / 3) mod 3
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterShoes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'shoes');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats shoes</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'shoes', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterPanties(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'panties');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats panties</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'panties', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterBras(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'bras');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats bras</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'bras', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterPurses(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'purses');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats purses</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'purses', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterCoats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'shop_pussycats', 'coats');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Viewing Pussy Kats coats</b></center>');
  if (qspFunc(s, 'shop_utils', 'is_init') === 0) {
    qspCall(s, 'shop_utils', 'init', 'start', 'coats', 'shop');
    qspCall(s, 'shop_utils', 'init', 'add_type', 'cats');
    qspCall(s, 'shop_utils', 'init', 'end');
  }
  qspCall(s, 'shop_utils', 'display', 'grid_shop');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'shop_utils', 'cleanup');
  }, goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).random = Math.floor(Math.random() * 15) + 0;
  if ((!((s as any).random ?? 0))) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter0(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).random ?? 0) === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter1(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).random ?? 0) === 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).random ?? 0) === 3) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter3(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).random ?? 0) === 4) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter4(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).random ?? 0) === 5) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter5(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).random ?? 0) === 6) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter6(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).random ?? 0) === 7) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter7(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  if (((s as any).random ?? 0) === 8) {
                    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter8(s, scene); (s as any).locArgs = __savedLocArgs; }
                  } else {
                    if (((s as any).random ?? 0) === 9) {
                      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter9(s, scene); (s as any).locArgs = __savedLocArgs; }
                    } else {
                      if (((s as any).random ?? 0) === 10) {
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter10(s, scene); (s as any).locArgs = __savedLocArgs; }
                      } else {
                        if (((s as any).random ?? 0) === 11) {
                          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter11(s, scene); (s as any).locArgs = __savedLocArgs; }
                        } else {
                          if (((s as any).random ?? 0) === 12) {
                            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter12(s, scene); (s as any).locArgs = __savedLocArgs; }
                          } else {
                            if (((s as any).random ?? 0) === 13) {
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter13(s, scene); (s as any).locArgs = __savedLocArgs; }
                            } else {
                              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enter14(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/mag5.jpg');
  scene.text('Two guys continuously flirt with you and distract you from your work. After several unsuccessful attempts to send them away, you\'re quite desperate to get rid of them.');
  scene.text('To your relief, the manager notices the situation and quickly shoves the guys out of the store.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/twogirls.jpg');
  scene.text('Two girls stop by the store and you show them around, attempting to entice them into buying the more expensive offerings.');
  scene.text('Once they\'ve bought all they wanted and more, one of them smiles at you. "You were such a good help! I could fucking kiss you right now!"');
  scene.text('You\'re a little dumbfounded by how bluntly she says it. "Anything to keep our customers happy!"');
  scene.text('They pay for their clothes and happily stroll out of the store.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
  scene.text('There are a lot of customers today and you\'re run off your feet working hard for the next two hours.');
  scene.text('At the end of your shift, the manager approaches you.');
  // TODO-QSP: dynamic text: "Listen <<$pcs_nickname>>, I know you've worked hard today, but as you can see, ...
  scene.text(`"Listen ${((s as any).pcs_nickname || '')}, I know you've worked hard today, but as you can see, we're short on staff. Hang on for another hour and I'll give you a bonus you won't regret!"`);
  qspCall(s, 'willpower', 'misc', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).job_bonus_pay ?? 0)?.['city_pussycats_clerk'] >= 205) {
      qspCall(s, 'jobs', 'bonus_pay', 'city_pussycats_clerk', (-205));
    }
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('You start making excuses, but the manager just shrugs.');
    scene.text('"Okay, go home then. We\'ll manage without you, but don\'t count on a bonus for today!"');
    scene.text('You just shrug, too exhausted to care at this point.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'jobs', 'bonus_pay', 'city_pussycats_clerk', 205);
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('It seems that you have no choice. After working for another hour, you\'re very tired, but the thought of a bonus makes you smile.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('There are very few customers today, so you spend some time chatting with Nastya while folding some clothes. She likes to talk about her sexual experiences and feelings and has decided that today\'s topic is the story of how she lost her virginity.');
  scene.text('She leaves very little to the imagination as she regales you with how she was gangbanged in the locker room after gym class one day. Though some time has passed, she still vividly remembers every detail, including the name of every boy involved.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  if (((s as any).katia ?? 0) === 1) {
    scene.text('The odd girl comes in again and looks through the clothes. It\'s a shame that store policy states that you\'re not allowed to fraternize with customers, as you\'d love the opportunity to befriend her.');
    scene.text('You get the feeling that she\'s constantly looking at you since, whenever you glance at her, she smiles before she blushes and turns away.');
  } else {
    (s as any).katia = 1;
    scene.text('An odd girl pays a visit to the store today. She walks through the store and browses through the clothes without buying or even trying anything on. She dresses plainly, but doesn\'t look like she\'s poor, so she couldn\'t simply be window shopping.');
    scene.text('You constantly get the impression that she\'s looking at you. When you raise your eyes, she quickly turns away and stares at the nearest item of clothing, examining it with feigned interest.');
    scene.text('You offer assistance, but she lowers her gaze and and mutters something under her breath as you see her blushing. A few seconds later, she runs out of the store without another word.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('The manager asked you to come and see him after your shift, but didn\'t tell you the reason why.');
  scene.text('You approach the door to his office and are about to knock when you notice that the door is slightly ajar…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look inside', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/young_shop_quest10.jpg');
    scene.text('Your eyes witness an obscene picture. The manager is facing the monitor, his pants pulled down as he strokes his cock, which is wrapped in a condom. Almost immediately, he throws back his head and starts to cum.');
    scene.text('Shortly thereafter, he pulls off the condom and throws it in the nearby trash can before he pulls his pants up and heads towards the door.');
    scene.text('Trying to be as quiet as possible, you rush back from the door and hide behind some boxes near the service exit. Mr. Sobulyagin, noticing nothing, passes you and heads into the toilet.');
    scene.text('The coast clear, you head into his office and, out of curiosity, look at his monitor. It appears that he\'s a fan of teen porn going by the images you see.');
    scene.actions([
      { label: 'Wait for him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('You step away from the desk, thinking about what he\'d do if he saw you looking at his computer.');
    // TODO-QSP: dynamic text: A minute later, he returns, "Ah, <<$pcs_nickname>>, nice of you to come! I have ...
    scene.text(`A minute later, he returns, "Ah, ${((s as any).pcs_nickname || '')}, nice of you to come! I have something for you to sign."`);
    scene.text('He walks over to his desk and shuffles through some paperwork before handing you a form.');
    scene.text('You\'re not really focused on the piece of paper, so you don\'t read it before signing and returning it. After saying goodbye, you return to the shop floor.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'earn', 1000, 'cash');
  scene.img('images/locations/city/citycenter/mall/cats/young_shop_quest6.jpg');
  scene.text('Three drunk women of indeterminate age stumble into the store dressed in shabby clothes. All three of them are wearing torn stockings, colorful miniskirts and dirty T-shirts.');
  scene.text('Nastya smiles when she sees them and you give her an inquisitive look.');
  scene.text('She points towards one of them. "See her, the one in the red skirt? I know her from school."');
  scene.text('"She barely looks 18 years old!" you reply. "It\'s quite depraved how whorish she looks for someone so young."');
  // TODO-QSP: dynamic text: "Depravity has nothing to do with it, <<$pcs_nickname>>!" she scowls. "Some girl...
  scene.text(`"Depravity has nothing to do with it, ${((s as any).pcs_nickname || '')}!" she scowls. "Some girls have had more guys than her, but don't look like it. You have to look past their appearance."`);
  scene.text('The group, not even looking at the clothes, grab the first few available things they see and carry them to the register. Nastya\'s friend throws a pile of dirty, crumpled bills on the counter.');
  scene.text('"Thanks, Nastya!" she says as the girls take their belongings and leave the store.');
  scene.text('"Here you go, you should get half," Nastya says as she hands you a handful of bills with a wink. "They\'re a bit short on funds, so… I give them a discount."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pussycats_index = qspUntranslated(s, "rand(1, func('clothing', 'get_total', 'cats_outfits'))", { location: "shop_pussycats" });
  qspCall(s, 'clothing_attributes', 'cats_outfits', ((s as any).temp_pussycats_index ?? 0));
  scene.img(`images/pc/items/cats/outfits/${((s as any).temp_pussycats_index || '')}.jpg`);
  // TODO-QSP: dynamic text: Nastya approaches you. "This nice new blouse has a slight defect and the manager...
  scene.text(`Nastya approaches you. "This nice new blouse has a slight defect and the manager asked me to put it in the discount bin, but maybe you want to take it for yourself? It's normally ${qspFunc(s, 'money', 'string_price', ((s as any).CloPrice || ''))}, but you can have it for 720₽."`);
  if (((s as any).cats_outfits ?? 0)?.[String((s as any).temp_pussycats_index ?? 0)] === 1) {
    scene.text('You look at the outfit and see that it\'s one you already own. "Thanks, but I already have that outfit."');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } else {
    if (qspFunc(s, 'money', 'can_afford', 720)) {
      scene.actions([
        { label: 'Buy the outfit (Kats #<<temp_pussycats_index>>  [720₽])...]', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 720);
    qspCall(s, 'clothing', 'add_item', 'cats_outfits', ((s as any).temp_pussycats_index ?? 0));
    qspCall(s, 'clothing', 'decrease_strength', 'cats_outfits', ((s as any).temp_pussycats_index ?? 0), 40);
    scene.text('You hand over the money for the slightly less than perfect outfit. It\'s not going to last you as long it should since the stitching has a flaw, but you still got quite a bargain.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
        { label: 'Refuse', goto: ['shop_pussycats', 'endwork'] },
      ]);
    } else {
      scene.text('You don\'t have the cash on you, so you can\'t take her up on this offer.');
      scene.actions([
        { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop_quest5.jpg');
  scene.text('Two guys with a very glamorous appearance come into the shop to look at the transparent blouses. You often notice them in this neighborhood, so they probably live somewhere close by. They\'re constantly together and even hold hands.');
  // TODO-QSP: end
  scene.actions([
    { label: 'May I help you?', handler: (st: GameState) => {
    scene.text('"I see you\'re picking out a gift for a girl. Can I be of any help?"');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('One of them examines you from head to toe.');
      scene.text('"Honey, it looks like you need the help!" he says with disdain.');
      scene.text('He starts insultingly discussing your appearance with his boyfriend as you leave to look for another, hopefully nicer, customer.');
      scene.actions([
        { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
      ]);
    } else {
      scene.text('One of them examines you from head to toe. "My, what a pretty girl! Don\'t worry, beautiful, we can help ourselves!"');
      scene.text('The guy waves you goodbye and takes his friend\'s hand while admiringly discussing your appearance.');
      scene.text('With a spring in your step, you look for another customer.');
      scene.actions([
        { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  scene.text('You head into one the changing booths to collect some clothes that a customer has left behind. As you do, you accidentally drop a skirt. As you bend down to pick it up, you notice a very inconspicuous item on the plinth.');
  scene.text('You\'re shocked when you realise that it\'s a hidden camera! You can only think of one reason why you would find something like this here. You should probably tell the manager…');
  qspCall(s, 'willpower', 'misc', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell the manager', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell the manager', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('You storm into the manager\'s office without knocking and start chattering about what happened.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, calm down! What happened?!"
    scene.text(`"${((s as any).pcs_nickname || '')}, calm down! What happened?!"`);
    scene.text('You point with trembling hands in the direction of the changing booths. "There! There! In the booth! Hurry!"');
    scene.text('He reluctantly gets up from his chair and goes with you. Walking back into the booth, he squats down and pulls on the camera glued to the plinth.');
    scene.text('"We should call th-" you start to say, but he interrupts you mid-sentence.');
    scene.text('"No," he says as he stands and twirls the camera in his hand. "If we call the cops, the store will be shut down and the whole place gets searched for more of these things. We could get fined, or worse, so let\'s not do anything rash."');
    scene.text('He ushers you from the booth. "Go home. I\'ll inspect the rest of the booths. It\'s good that you were vigilant and found this, but there\'s no need to tell anyone, okay?"');
    scene.text('You nod as your shift is coming to an end anyway, so you decide to just go home and forget about it.');
    scene.actions([
      { label: 'Leave work', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep silent', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
    scene.text('You take a few deep breaths and force yourself to calm down while gathering your thoughts.');
    scene.text('You can always say that you didn\'t know about it. You haven\'t changed in this booth, and most girls who have will likely never know there was a camera here anyway.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pussycats_index = qspUntranslated(s, "rand(1, func('clothing', 'get_total', 'gm_outfits'))", { location: "shop_pussycats" });
  scene.img(`images/pc/items/gm/outfits/${((s as any).temp_pussycats_index || '')}.jpg`);
  scene.text('You go to the changing booths and find that someone has left an outfit behind. You remember that it belongs to a girl who just left the store after buying a new outfit. She has apparently decided that she no longer needs this and has just left it in the booth.');
  scene.text('You decide to wait until the end of the shift in case she returns, but she never does. You carefully look at the outfit; it\'s an ordinary looking outfit from G&M, almost new and fairly clean. Could you just keep it for yourself?');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Keep it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Keep it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    scene.text('Before leaving, you take the outfit with you. The girl clearly didn\'t want it and you\'re not about to throw away fairly new clothing that\'s free for the taking!');
    if (((s as any).gm_outfits ?? 0)?.[String((s as any).temp_pussycats_index ?? 0)] === 0) {
      scene.text('However, it then occurs to you that you already have this outfit, so you decide to leave it behind in the store. Perhaps it could be resold? Your boss will love you for that!');
    } else {
      qspCall(s, 'clothing', 'add_item', 'gm_outfits', ((s as any).temp_pussycats_index ?? 0));
    }
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Put it back and finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enter11(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/sex/young_shop_quest2.jpg');
  scene.text('While passing by the changing booths, you hear noises from within. Curious, you make sure that no one\'s watching and look inside to see a rather erotic display.');
  scene.text('A young looking woman is on her knees giving quite a skillful blowjob to an equally young looking man.');
  qspCall(s, 'willpower', 'misc', 'self', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Listen to them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Listen to them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', 'hard');
    qspCall(s, 'willpower', 'pay', 'self');
    scene.text('You stand next to the booth and listen as she licks and sucks his cock. Suddenly she makes a strange sound indicating that something has changed.');
    scene.text('You quickly peek into the booth again and see the guy holding the girl\'s hair as he firmly pulls her down onto his cock. You\'ve never seen a girl getting fucked in the throat with such force.');
    scene.text('Then you hear the guy starting to moan, he must be close.');
    scene.text('The girl coughs loudly before you hear her giggle. "Yes, cum on my face! Yes…"');
    qspCall(s, 'arousal', 'voyeur_sex', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look into the booth', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/young_shop_quest3.jpg');
    scene.text('You peek into the booth again. The girl\'s face is covered with a thick layer of cum as the guy shoves his cock back into her mouth, forcing her to suck it clean.');
    scene.text('When he\'s done, he quietly pulls up his pants while watching the girl use her hands to scoop up the cum from her face and lick them.');
    scene.text('You decide to leave before you get caught. A minute later, the pair shows up and you see that she didn\'t wipe her face very thoroughly.');
    scene.text('You stay quiet as the two of them leave the store.');
    qspCall(s, 'arousal', 'voyeur_sex', (-2));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore them', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
    scene.text('This is clearly none of your business, so you walk away from the booth and start folding some clothes.');
    scene.text('After a few minutes, the couple walks out of the booth and you see traces of cum still on the girl\'s face.');
    scene.text('All your efforts to stop yourself from smiling fail as the couple quickly and quietly leave the store.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter12(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('You\'ve just finished hanging up some cute shirts from the new collection when an old lady comes up to you. She looks to be in her 70s and begins a long, dull monologue about herself, her work, modern fashion and the old days.');
  scene.text('She then starts complaining about modern society and its flaws: Deception, corruption, drugs, sex and everything in general. Then she remembers the good old times when the grass was greener and women married as virgins at the age of 18:');
  scene.text('"And now it has come to this… There are no virgins in my granddaughter\'s class. She\'s a 7th grade student with 10 other girls in her class! How can this be? One girl, Lena, has already had <i>three</i> abortions! What has this world come to?"');
  scene.text('"Here\'s my granddaughter," she says before she shows you a picture of a younger girl. "Did you also go to the same school? Is that why you dress this way? Are you not ashamed?"');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Shame on you, grandma!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Shame on you, grandma!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"And why should I be ashamed of that? I\'ve done nothing wrong! This is just today\'s fashion; we don\'t live in Stalin\'s time anymore!"');
    scene.text('"During Comrade Stalin\'s time, this would not have happened!" she scowls.');
    scene.text('She then starts a new lecture about old times, honesty, integrity and correctness.');
    scene.text('She keeps ranting for a long time before she finally gets bored and waddles out the door while cursing at the modern youth.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s just part of your job', handler: (st: GameState) => {
    scene.text('"I dress like this because I need to work to earn money. Without that, how could I survive?" you explain while promising the grandmother you never go out like this.');
    scene.text('She relents, satisfied with your answer, but still says a prayer and gives you the sign of the cross before wishing you happiness and kindness.');
    scene.text('You sigh with relief as the old lady <i>finally</i> heads to the exit.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter13(s: GameState, scene: SceneBuilder): void {
  (s as any).kira = 1;
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('Twenty minutes before the end of your shift, a lady approaches you with a glamorous looking girl beside her. The girl seems somewhat upset.');
  scene.text('"Mother, this isn\'t necessary! Let\'s not shop in this store…"');
  scene.text('"Stop acting up! Your classmates are wearing these clothes. You want to be popular, right? You don\'t want the others to make fun of you, do you?"');
  scene.text('"Hello. How may I help you?" you ask with a smile.');
  scene.text('The woman inspects you, appraising your appearance before turning to her daughter.');
  scene.text('"You see, Kira? This girl is only a little older than you, and dressed-" She doesn\'t have time to finish her sentence before Kira starts complaining again.');
  scene.text('"Well, hardly anyone can see her here! I can\'t wear this outside, especially without a bra; people will be able to see me!"');
  scene.text('The woman throws up her hands in surprise. "And why shouldn\'t they? You\'re growing up! It would be a shame not to show off your body! I\'m tired of arguing with you."');
  scene.text('The woman returns her gaze to you with a haughty smile.');
  scene.text('"Tell me, girl. Would clothes like yours fit my Kira?" she asks with a little nod, clearly just waiting for your positive response.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Of course', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/young_shop_quest9.jpg');
    scene.text('"Yes, of course!" you confidently reply. "All of my friends buy their clothes here. We have the <i>perfect</i> blouse that will look <i>amazing</i> on your daughter! And of course, all of our products are designed to be worn without a bra," you wink. You quickly find the right size and hand it over to a tearful Kira. "There\'s a booth over there where you can try it on!"');
    scene.text('The woman grabs her daughter by the arm and takes her to the booth. They return a few minutes later.');
    scene.text('"As I thought," you smile. "You look great in this one!"');
    scene.text('"All of Kira\'s friends will be so jealous! How much is this beauty?"');
    // TODO-QSP: dynamic text: "Only <<$func('money', 'string_price', 2400)>>!"
    scene.text(`"Only ${qspFunc(s, 'money', 'string_price', 2400)}!"`);
    scene.text('The woman beams happily and hands over the money before grabbing Kira by the arm and practically dragging her out of the store.');
    scene.actions([
      { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
    ]);
  } },
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/oh_really_fine.jpg');
    scene.text('You shake your head. "Sorry, but she\'s too young to be wearing such clothes yet. Maybe in a few more years."');
    scene.text('The woman looks at you with disbelief. She obviously couldn\'t imagine that you would be arguing against a potential sale.');
    scene.text('"I\'ve seen on TV that young girls everywhere are wearing this style!"');
    scene.actions([
      { label: 'Dissuade her', handler: (st: GameState) => {
    scene.text('"Don\'t believe everything you see on TV. Those girls are just dolled up for the views. No self respecting girl actually dresses like that."');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images/locations/city/citycenter/mall/cats/oh_really_fine.jpg');
      scene.text('"Really?" The glamorous lady ponders for a moment before accepting your advice. "Okay, we\'ll go to a regular store then. I don\'t want my Kira dressing like a slut."');
      scene.text('You notice Kira beaming at you. "Thank you so much. Goodbye!"');
      scene.text('She waves goodbye before running after her mother.');
      scene.actions([
        { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
      ]);
    } else {
      scene.img('images/locations/city/citycenter/mall/cats/oh_really_fine.jpg');
      scene.text('The woman refuses to listen to you. "If you won\'t help us, then I\'ll find another clerk who will!"');
      scene.text('Before leaving, the girl thanks you for trying before running to catch up with her mother.');
      scene.actions([
        { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter14(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/young_shop.jpg');
  scene.text('Nothing interesting happens before it\'s time for you to clock out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish your shift', goto: ['shop_pussycats', 'endwork'] },
  ]);
  scene.build();
}

function enterEndwork(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_worked_count ?? 0)?.['city_pussycats_clerk'] > 0  &&  qspFunc(s, 'jobs', 'is_work_day', 'city_pussycats_clerk', ((s as any).daystart ?? 0) + 1) === 0) {
    scene.actions([
      { label: 'Collect your pay', goto: ['andrey', 'regular'] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dress':
      enterDress(s, scene);
      break;
    case 'clothes':
      enterClothes(s, scene);
      break;
    case 'shoes':
      enterShoes(s, scene);
      break;
    case 'panties':
      enterPanties(s, scene);
      break;
    case 'bras':
      enterBras(s, scene);
      break;
    case 'purses':
      enterPurses(s, scene);
      break;
    case 'coats':
      enterCoats(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
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
    case 'endwork':
      enterEndwork(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const shop_pussycats: LocationDef = {
  name: 'shop_pussycats',
  title: 'The store is closed.',
  region: 'other',
  locclass: 'changingroom',
  description: ['The latest chart topping pop single is playing throughout the small store. The interior is decorated in bright colors and bold designs, and the floor is packed with stands and tables displaying clothes with a more daring style.'],
  enter: enter,
};
