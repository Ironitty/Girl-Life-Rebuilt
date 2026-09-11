import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_lake_nude', '');
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.text('<center><h4>Secluded beach</h4></center>');
  if (((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 5) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 17) {
      scene.img('images/locations/pavlovsk/lake/lake.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/lake.spring.night.jpg');
    }
    scene.text('<center>This small natural beach is hidden away from the general public on an inlet of the lake, and is only accessible through a nearby forest trail. Other than those seeking privacy and some of the local kids, nobody really comes here outside of winter, when people come to use the nearby sauna.</center>');
  } else {
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 19) {
        scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/lake.summer.night.jpg');
      }
      scene.text('<center>This small natural beach is hidden away from the general public on an inlet of the lake, and is only accessible through a nearby forest trail. Other than those seeking privacy and some of the local kids, nobody really comes here outside of winter, when people come to use the nearby sauna.</center>');
    } else {
      if (((s as any).month ?? 0) >= 9  &&  ((s as any).month ?? 0) <= 11) {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 18) {
          scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/lake.autumn.night.jpg');
        }
        scene.text('<center>This small natural beach is hidden away from the general public on an inlet of the lake, and is only accessible through a nearby forest trail. Other than those seeking privacy and some of the local kids, nobody really comes here outside of winter, when people come to use the nearby sauna.</center>');
      } else {
        if (((s as any).month ?? 0) < 3  ||  ((s as any).month ?? 0) === 12) {
          if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) <= 16) {
            scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
          } else {
            scene.img('images/locations/pavlovsk/lake/lake.winter.night.jpg');
          }
          scene.text('<center>This small natural beach is hidden away from the general public on an inlet of the lake, and is only accessible through a nearby forest trail. Other than those seeking privacy and some of the local kids, nobody really comes here outside of winter, when people come to use the nearby sauna.</center>');
          scene.text('<center>The lake in Pavlovsk has been frozen over ever since winter arrived. However, the ice is broken in a small part of the inlet, so those brave enough to take a dip in the icy cold water can.</center>');
        }
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).month ?? 0) >= 3  &&  ((s as any).month ?? 0) <= 8  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 10  &&  ((s as any).ivanfedorseennaked ?? 0) !== ((s as any).daystart ?? 0)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).fedorKozlovQW ?? 0) >= 0) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'arousal', 'flash', (-5), 'exhibitionism');
      qspCall(s, 'fame', 'pav', 'sex', 3);
      scene.text('You\'re walking down the secluded beach, enjoying the sensation of feeling free and the cool breeze on your naked body, when you suddenly hear someone running up behind you. Expecting the worst, you turn around only to see a sweaty Ivan with a huge grin on his face, closely followed by Fedor. As they get a look at your face and realize who you are, they slow down and stop, looking a bit surprised to see… well all of you on display.');
      scene.actions([
        { label: 'Run away', handler: (st: GameState) => {
    (st as any).ivanfedorseennaked = ((st as any).daystart ?? 0);
  }, goto: ['pav_lake_nude', ''] },
        { label: 'Greet them', handler: (st: GameState) => {
    (st as any).ivanfedorseennaked = ((st as any).daystart ?? 0);
  }, goto: ['gschool_socialchg1', 'ivan_fedor_naked'] },
      ]);
    } else {
      scene.text('You\'re walking down the secluded beach, enjoying the tranquility when you suddenly hear someone running up behind you. Expecting the worst, you turn around only to see a sweaty <a href="exec:ivanfedorseennaked = daystart & gt \'gschool_socialchg1\', \'tIvan\'">Ivan</a>, closely followed by <a href="exec:ivanfedorseennaked = daystart & gt \'gschool_socialchg1\', \'tFedor\'">Feodor</a>.');
    }
  }
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10) {
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
      scene.actions([
        { label: 'Use changing room', goto: ['changingroom', ''] },
      ]);
    } else {
      scene.text('You should buy some swimwear if you intend on spending time at the beach');
    }
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).pcs_inhib ?? 0) > 30  ||  (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).pcs_horny ?? 0) >= 60))) {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Take off your clothes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Take off your clothes [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).sauna_stripped = 0;
    if (((s as any).pcs_inhib ?? 0) < 60) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    if ((!((s as any).PSwim ?? 0))) {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 80  &&  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  (((s as any).PCloPanties ?? 0) === 1  ||  ((s as any).pantyworntype ?? 0) !== 'none')) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/wetpussypants3.jpg');
      scene.text('You strip off. A few passers-by do a double-take and pause to look at your sopping wet panties, probably thinking about what is making you so excited. You don\'t care about what they might say or think of you.');
    } else {
      if (((s as any).pcs_inhib ?? 0) >= 60) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
        scene.text('Not caring if anyone is looking at you, you slowly take off your clothes, peeling off each item like a stripper. You\'re soon naked.');
      } else {
        if (((s as any).pcs_inhib ?? 0) < 60) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/dress/undressnudebeach.jpg');
          scene.text('You quickly check to see if anyone is watching, and when you\'re satisfied no one is paying you undue attention, you take your clothes off.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', ''] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  (!((s as any).sauna_stripped ?? 0))) {
        scene.actions([
          { label: 'Put your clothes back on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'restore', 'swim');
    (s as any).nudelake = Math.floor(Math.random() * 10) + 1;
    scene.img('images/locations/pavlovsk/lake/event/noclothes.jpg');
    if (((s as any).nudelake ?? 0) <= 2  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      scene.text('You return to the place where you put your clothes to get dressed… except you can\'t find them. You desperately search the beach for a while, a few passers-by giving you amused stares. Despite your efforts, you can\'t find them. You panic and, without thinking, start running home naked.');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'mood', 'lower', 'tiny');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Run home naked', goto: ['home_events', 'go_home_naked_pre'] },
      ]);
    } else {
      scene.text('You return to the place where you left your clothes and put them back on.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake_nude', ''] },
      ]);
    }
  } },
        ]);
      }
    }
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).pcs_stam ?? 0) >= (20 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
        scene.actions([
          { label: 'Go swimming (0:30)', handler: (st: GameState) => {
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).willday_swim ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).willday_swim = ((s as any).daystart ?? 0);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (1);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
      }
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      }
    }
    if (((s as any).pcs_sweat ?? 0) > 10) {
      (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    }
    if (((s as any).pcs_stren ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'stren', 1);
    }
    if (((s as any).pcs_vital ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'vital', 1);
    }
    (s as any).fat = ((s as any).fat ?? 0) - (1);
    (s as any).pcs_makeup = 1;
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img(`images/pc/activities/swim/lake/swim_nude_${Math.floor(Math.random() * 11) + 0}.jpg`);
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
      scene.text('You play around and have fun in the lake, enjoying the feeling of the warm water on your naked body. The water refreshes and invigorates you.');
    } else {
      scene.img(`images/pc/activities/swim/lake/swim_bikini_${Math.floor(Math.random() * 9) + 0}.jpg`);
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
      scene.text('You play around and have fun in the lake, its a bit liberating to see so many people here naked. The water refreshes and invigorates you.');
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get out of the water', goto: ['pav_lake_nude', ''] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).sunWeather ?? 0) === 1  &&  (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude')) {
      scene.actions([
        { label: 'Go sunbathing', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      if (((s as any).pcs_sweat ?? 0) < 35) {
        qspCall(s, 'sweat', 'add', 5);
      }
      qspCall(s, 'mood', 'raise', 'tiny');
      if (((s as any).PSwim ?? 0) === 1) {
        scene.img('images/locations/shared/lake/tanning_swimsuit.jpg');
        if (((s as any).pcs_inhib ?? 0) < 50) {
          (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (1);
        }
        if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
          scene.text('You lie down on your towel and enjoy the warm rays of the sun on your body. You move your straps around to try and prevent tan lines on your back.');
        } else {
          ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
          scene.text('You apply sunscreen to yourself and lie down on the towel to work on your tan. You enjoy the warm rays of the sun on your body. You move your straps around to try and prevent tan lines on your back.');
        }
      } else {
        scene.img('images/locations/shared/lake/tanning_nude.jpg');
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
          scene.text('You lie down on your towel and enjoy the warm rays of the sun on your naked body.');
        } else {
          ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
          scene.text('You apply sunscreen to yourself and lie down on the towel to work on your tan. You enjoy the warm rays of the sun on your naked body.');
        }
      }
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake_nude', ''] },
      ]);
    } else {
      scene.text('You have to take your clothes off first before you can sunbathe.');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake_nude', ''] },
      ]);
    }
  } },
      ]);
    }
    if ((!((s as any).voyeurism_start ?? 0))) {
      scene.actions([
        { label: 'Look around the beach', handler: (st: GameState) => {
    (s as any).voyeurism_start_view = Math.floor(Math.random() * 3) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).voyeurism_start_view ?? 0) <= 2) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.img('images/locations/shared/lake/lake_beach1.jpg');
      scene.text('You look around, but see nothing interesting.');
    } else {
      (s as any).voyeurism_start = 1;
      (s as any).voyeurism = ((s as any).voyeurism ?? 0) + (1);
      qspCall(s, 'arousal', 'voyeur_sex', 5);
      scene.img('images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event.jpg');
      scene.text('You look around and notice a pair of lovers lying on the sand at the other end of the beach. The girl is completely naked and her hand is stroking the guy\'s cock through his white pants. The guy turns his head and notices you looking at them. You immediately turn away, blushing as you stare at your feet.');
    }
    scene.actions([
      { label: 'Return', goto: ['pav_lake_nude', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).voyeurism_start ?? 0) === 1) {
        qspCall(s, 'willpower', 'voyeur', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Watch couple on the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Watch couple on the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((!((s as any).voyeurism ?? 0))) {
      qspCall(s, 'arousal', 'voyeur_sex', 5);
      (s as any).voyeurism = ((s as any).voyeurism ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/lake_legs.jpg');
      scene.text('You see several naked people in the corner of your eye and think that they\'re looking right at you. You blush and freeze in terror as tears well up in your eyes. After a few minutes, you find yourself looking at your feet.<br><dh>"Wha-… what am I doing?! Why do I feel like watching… am I a voyeur? Yes, I am! I\'m a girl who likes to watch nude people!"</dh> you think to yourself.<br>');
      scene.actions([
        { label: 'Stop watching', goto: ['pav_lake_nude', ''] },
      ]);
    } else {
      (s as any).voyeurism_start = 2;
      qspCall(s, 'arousal', 'voyeur_sex', 30);
      (s as any).voyeurism = ((s as any).voyeurism ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event.jpg');
      scene.text('You see several naked people in the corner of your eye and think that they\'re looking right at you. You blush and freeze in terror as tears well up in your eyes. After a few minutes, you find yourself looking at your feet.<br><dh>"Wha-… what am I doing?! Why do I feel like watching… am I a voyeur? Yes, I am! I\'m a girl who likes to watch nude people!"</dh> you think to yourself.<br> You then remember how you were recently watching others on the beach and think: <dh>"That was scary, cool and hot. I need to keep at least one eye always watching…"</dh>');
      scene.actions([
        { label: 'Watch the couple', handler: (st: GameState) => {
    qspCall(st, 'pav_lake_nude_events', 'pav_lake_nude_sex');
  } },
      ]);
    }
  } },
          ]);
        }
      } else {
        if (((s as any).voyeurism_start ?? 0) === 2  &&  (((s as any).pcs_horny ?? 0) < 90  ||  ((s as any).fame ?? 0)?.['pav_slut'] < 100)) {
          qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Spy on other nudists on the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Spy on other nudists on the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if (((s as any).voyeurism_nudist ?? 0) <= 14  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 100) {
      (s as any).voyeurism_nudist = ((s as any).voyeurism_nudist ?? 0) + (1);
      qspCall(s, 'pav_lake_nude_events', 'pav_lake_nude_nudist');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake_nude', ''] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/self/nudebeachself\' + rand(1, 3) + \'.jpg');
      scene.text('You want to watch for nudists, but suddenly start to feel weird.<br><dh>"Probably spying too much."</dh> you think to yourself and look straight ahead.');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake_nude', ''] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
    if (((s as any).voyeurism ?? 0) >= 17  &&  ((s as any).voyeurism_start ?? 0) === 2) {
      if ((!((s as any).voyeurism_forest ?? 0))) {
        scene.actions([
          { label: 'Explore the forest', goto: ['pav_lake_nude_forest', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Hide in the woods near the beach', goto: ['pav_lake_nude_forest', ''] },
        ]);
      }
    }
    scene.actions([
      { label: 'Take a walk along the beach (0:30)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    if ((((s as any).PSwim ?? 0) === 1)  &&  ((s as any).pcs_hips ?? 0) <= 90) {
      scene.img('images/locations/pavlovsk/lake/lake.walk.bikini0,\' + rand(0, 3) + \'.jpg');
    } else {
      if ((((s as any).PSwim ?? 0) === 1)  &&  ((s as any).pcs_hips ?? 0) >= 90  &&  ((s as any).pcs_hips ?? 0) <= 110) {
        scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,0.jpg');
      } else {
        if ((((s as any).PSwim ?? 0) === 1)  &&  ((s as any).pcs_hips ?? 0) >= 110) {
          scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,1.jpg');
          if (((s as any).pcs_inhib ?? 0) < 50) {
            (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
          }
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.img('images/locations/pavlovsk/lake/walknude.jpg');
            (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
          } else {
            scene.img('images/locations/pavlovsk/lake/lake.walk0,\' + rand(0, 2) + \'.jpg');
          }
        }
      }
    }
    scene.text('You walk along the beach, enjoying the feeling of the sun on your body.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave the secluded beach', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_lake', ''] },
    { label: 'Go to the sauna', goto: ['pav_lake_nude', 'sauna'] },
  ]);
  scene.build();
}

function enterSauna(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_lake_nude', 'sauna');
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/sauna.jpg');
  scene.text('You walk up the small trail from the beach to the sauna. They say it was built for the tourists, but you wonder why they put it on a secluded beach where tourists can\'t possibly find it. Either way, you and many others are glad they built it. It\'s well built inside and out with three sections - the mens section, the women\'s section and a co-ed section. You need swimwear to use the sauna, but some people use it naked.');
  if (((s as any).PSwim ?? 0) === 1  &&  ((s as any).temper ?? 0) < 15) {
    scene.text('It is too cold to go back to the beach in your swimwear. You need to dress first.');
  } else {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  ||  (!((s as any).sauna_stripped ?? 0))) {
      scene.actions([
        { label: 'Go back to the beach', goto: ['pav_lake_nude', ''] },
      ]);
    } else {
      qspCall(s, 'willpower', 'exhib', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Go back to the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Go to the beach [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['pav_lake_nude', ''] },
        ]);
      }
    }
  }
  if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
    scene.actions([
      { label: 'Use changing room', goto: ['changingroom', ''] },
    ]);
  } else {
    scene.text('You should buy some swimwear if you intend on spending time at the beach.');
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).pcs_inhib ?? 0) > 25  ||  (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).pcs_horny ?? 0) >= 60))) {
    scene.actions([
      { label: 'Take your clothes off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).sauna_stripped = 1;
    if ((!((s as any).PSwim ?? 0))) {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'stat', '');
    scene.text('You strip out of your clothes, folding them neatly and placing them in one of the open shelves.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sauna_stripped ?? 0) === 1) {
      scene.actions([
        { label: 'Put your clothes back on', handler: (st: GameState) => {
    (s as any).sauna_stripped = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'restore', 'swim');
    qspCall(s, 'stat', '');
    scene.text('You put your clothes back on.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PSwim ?? 0))) {
    scene.text('You need to undress or wear a swimsuit to enter the sauna.');
  } else {
    scene.actions([
      { label: 'Go to the women\'s section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 22) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
      scene.text('It appears to be empty at the moment.');
    } else {
      (s as any).saunarand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).saunarand ?? 0) === 4) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/womennude.jpg');
        scene.text('You find several other girls inside who are completely naked.');
      } else {
        if (((s as any).saunarand ?? 0) > 4) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/womenbikini.jpg');
          scene.text('You find several other girls inside using the sauna while wearing their bikinis.');
        } else {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
          scene.text('It appears to be empty at the moment.');
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
      { label: 'Use the sauna', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
      }
    }
    qspCall(s, 'stat', '');
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  } },
      { label: 'Go to the mens section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
    scene.text('It appears to be empty at the moment.');
    qspCall(s, 'willpower', 'exhib', 'self', 'hard');
    if (((s as any).saunarand ?? 0) < 4  ||  ((s as any).PSwim ?? 0) === 1) {
      (s as any).will_cost = 3;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
      }
    }
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      { label: 'Go to the co-ed section', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) > 22) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
      scene.text('It appears to be empty at the moment.');
    } else {
      (s as any).saunarand = Math.floor(Math.random() * 5) + 1;
      if (((s as any).saunarand ?? 0) === 4) {
        scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/coednude.jpg');
        scene.text('You find several other people in here, both men and women. All of them are completely naked.');
      } else {
        if (((s as any).saunarand ?? 0) > 4) {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/coedtowel.jpg');
          scene.text('You find several other people in here, both men and women. Some are wearing their swimwear while others are wearing towels.');
        } else {
          scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunaempty.jpg');
          scene.text('It appears to be empty at the moment.');
        }
      }
    }
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    if (((s as any).saunarand ?? 0) < 4  ||  ((s as any).PSwim ?? 0) === 1) {
      (s as any).will_cost = 0;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the sauna [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).sauna_daystart = ((s as any).daystart ?? 0);
      (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
      (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (3);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunabikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 40) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/saunanude.jpg');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      }
    }
    qspCall(s, 'stat', '');
    scene.text('You spend 30 minutes relaxing in the sauna.');
    if (((s as any).month ?? 0) === 12  ||  ((s as any).month ?? 0) < 3) {
      qspCall(s, 'pav_lake_nude', 'ice_plunge');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterIcePlunge(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Take an ice plunge', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    if (((s as any).pcs_sweat ?? 0) > 10) {
      (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/icedipbikini.jpg');
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 0);
      }
    } else {
      scene.img('images/locations/pavlovsk/lake/secluded_beach/sauna/icedipnude.jpg');
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.text('You exit the sauna and the cold air nips at your body as you rush down to the edge of the lake where the ice is broken and a ladder has been put in place. You take the plunge into the ice cold water. The sudden change from the hot sauna to the freezing waters of the lake is refreshing, if a little sudden. After a few minutes, you climb out of the water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Go back to the sauna', goto: ['pav_lake_nude', 'sauna'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sauna':
      enterSauna(s, scene);
      break;
    case 'ice_plunge':
      enterIcePlunge(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_lake_nude: LocationDef = {
  name: 'pav_lake_nude',
  title: '<center><h4>Secluded beach</h4></center>',
  region: 'pavlovsk',
  locationType: 'secluded',
  locclass: 'beach',
  description: ['You\'re walking down the secluded beach, enjoying the sensation of feeling free and the cool breeze on your naked body, when you suddenly hear someone running up behind you. Expecting the worst, you turn around only to see a sweaty Ivan with a huge grin on his face, closely followed by Fedor. As they get a look at your face and realize who you are, they slow down and stop, looking a bit surprised to see… well all of you on display.'],
  enter: enter,
};
