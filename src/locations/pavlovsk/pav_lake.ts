import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'pav_lake', '');
  qspCall(s, 'stat', '');
  if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).temper ?? 0) >= 5  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 10  &&  ((s as any).hour ?? 0) < 20  &&  ((((s as any).hour ?? 0) >= 10  &&  ((s as any).week ?? 0) >= 6)  ||  (((s as any).hour ?? 0) >= 14  &&  ((s as any).week ?? 0) < 6))  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] >= 18  &&  ((s as any).mey_vika ?? 0)?.['mey_vika_qw'] < 20  &&  ((s as any).mey_vika ?? 0)?.['qw_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['mey_vika_events', 'beach_event1'] }]);
  }
  scene.text('<center><h4>Lake</h4></center>');
  if (((s as any).season ?? 0) === 'winter') {
    if (((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 17) {
      scene.img('images/locations/pavlovsk/lake/lake.winter.jpg');
      scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not.</center>');
    } else {
      scene.img('images/locations/pavlovsk/lake/lake.winter.night.jpg');
    }
    scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not. The lake froze over when winter arrived and it\'s currently being used as a skating rink.</center>');
    if (((s as any).pcs_icesktng ?? 0) > 0) {
      // TODO-QSP: dynamic text: Your ice skating skill is <<pcs_icesktng>>.
      scene.text(`Your ice skating skill is ${((s as any).pcs_icesktng ?? 0)}.`);
    }
  } else {
    if (((s as any).season ?? 0) === 'spring') {
      if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 18) {
        scene.img('images/locations/pavlovsk/lake/lake.spring.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/lake.spring.night.jpg');
      }
      scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not. When it\'s warm enough, people often come to sunbathe or go swimming.</center>');
    } else {
      if (((s as any).season ?? 0) === 'summer') {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20) {
          scene.img('images/locations/pavlovsk/lake/lake.summer.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/lake.summer.night.jpg');
        }
        scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not. People often come to sunbathe or go swimming during the summer.</center>');
      } else {
        if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 19) {
          scene.img('images/locations/pavlovsk/lake/lake.autumn.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/lake.autumn.night.jpg');
        }
        scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not. When it\'s warm enough, people often come to sunbathe or go swimming.</center>');
      }
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).season ?? 0) === 'winter') {
    if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12) {
      scene.text('Looking out over the frozen lake, you see a figure in the distance figure skating and doing all types of crazy moves. Stepping onto the ice and skating out, you notice that it\'s <a href="exec:gt \'gschool_socialchg1\', \'tVeronika\'">Veronika</a>.');
    }
  }
  if (((s as any).konki_cloth ?? 0) === 1  ||  (!((s as any).pcs_ski_worn ?? 0))) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      if (((s as any).temper ?? 0) >= 20  &&  ((s as any).sunWeather ?? 0) === 1  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 15  &&  ((((s as any).kanikuli ?? 0) === 0  &&  ((s as any).week ?? 0) === 7)  ||  (((s as any).kanikuli ?? 0) > 0  &&  ((s as any).week ?? 0) % 2 === 0))) {
        if (((s as any).clothingworntype ?? 0) === 'nude') {
          scene.text('As you walk down to the beach area of the lake, you see the jocks and cool kids hanging out and hope none of them have seen you naked. You should put on a swimsuit before approaching them if you want to hang out, or just avoid them and do your own thing today.');
        } else {
          scene.text('As you walk down to the beach area of the lake, you see the jocks and cool kids hanging out.');
          if (((s as any).mey_vika ?? 0)?.['mey_vika_qw'] === 0  &&  ((s as any).hour ?? 0) === 14) {
            scene.text('<br>You see Vicky Meynold leaving the beach area holding hands with Vanya.');
            scene.actions([
              { label: 'Ask Katja where Vicky & Vanya are going', goto: ['mey_vika_events', 'beach_stalk'] },
            ]);
          }
          scene.actions([
            { label: 'Approach them', goto: ['pav_lake', 'school_mates'] },
          ]);
        }
      }
      if (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  (((s as any).season ?? 0) === 'spring'  ||  ((s as any).season ?? 0) === 'fall')  &&  ((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).christinaQW ?? 0)?.['subpath'] === 1  &&  ((s as any).socialchg ?? 0)?.['tChristina_day'] !== ((s as any).daystart ?? 0)) {
        scene.text('<a href="exec:gt \'Zvereva_sub_1\', \'chris_sub\'">Christina</a> is standing by the beach looking out over the lake as Lina stands next to her, breathing heavily.');
      }
    }
    qspCall(s, 'camera', 'check_location');
  }
  if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).konki_cloth ?? 0) === 0  &&  (!((s as any).pcs_ski_worn ?? 0))) {
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
      scene.actions([
        { label: 'Use changing room', goto: ['changingroom', ''] },
      ]);
    } else {
      scene.text('You should buy some swimwear if you intend on spending time at the beach.');
    }
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      if ((!((s as any).sauna_stripped ?? 0))) {
        qspCall(s, 'pav_lake', 'lost_clothing');
      }
    } else {
      if (((s as any).pcs_inhib ?? 0) > 30  ||  (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).pcs_horny ?? 0) >= 60)) {
        qspCall(s, 'willpower', 'exhib', 'self', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Strip naked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Strip naked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).sauna_stripped = 0;
    if (((s as any).pcs_inhib ?? 0) < 60) {
      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 3) + 1);
    }
    if (((s as any).PSwim ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'outfit', 'backup', 'swim');
    }
    qspCall(s, 'outfit', 'strip_all');
    scene.img('images/locations/pavlovsk/lake/event/strip.jpg');
    scene.text('Without hesitation and despite the fact that other people are around, you strip from your clothes and neatly fold them before putting them down in a pile. Without your clothes holding you back, you can go for a swim in the lake or do some sunbathing.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).konki_cloth ?? 0) === 0  &&  (!((s as any).pcs_ski_worn ?? 0))) {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      if (((s as any).pcs_stam ?? 0) >= (10 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
        scene.actions([
          { label: 'Go for a swim in the lake', goto: ['pav_lake', 'swimming'] },
        ]);
      }
      if (((s as any).sunWeather ?? 0) === 1) {
        scene.actions([
          { label: 'Sunbathe', goto: ['pav_lake', 'sunbathe'] },
        ]);
      }
    }
    if (((s as any).KsenyaQW ?? 0) === 1  &&  (Math.floor(Math.random() * 3) + 1) === 1  &&  ((s as any).sunWeather ?? 0) === 1) {
      scene.actions([{ label: 'Continue', goto: ['pav_lake', 'klake'] }]);
    }
    scene.actions([
      { label: 'Take a walk along the beach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.img('images/locations/pavlovsk/lake/walknude.jpg');
      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 3) + 1);
    } else {
      if ((!((s as any).PSwim ?? 0))) {
        scene.img('images/locations/pavlovsk/lake/lake.walk0,\'+rand(0, 2)+\'.jpg');
      } else {
        if (((s as any).pcs_hips ?? 0) >= 110) {
          scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,1.jpg');
        } else {
          if (((s as any).pcs_bmi ?? 0) > 24) {
            scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,0.jpg');
          } else {
            scene.img('images/locations/pavlovsk/lake/lake.walk.bikini0,\'+rand(0, 3)+\'.jpg');
          }
        }
        if (((s as any).pcs_inhib ?? 0) < 50) {
          qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
        }
      }
    }
    scene.text('You walk along the beach, enjoying the feeling of the sun on your body.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).konki_cloth ?? 0) === 0  &&  (!((s as any).pcs_ski_worn ?? 0))) {
    scene.actions([
      { label: 'Go to the secluded beach', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_lake_nude', ''] },
    ]);
  }
  if (((s as any).season ?? 0) === 'winter') {
    if (((s as any).pcs_ski_worn ?? 0) === 1) {
      scene.actions([
        { label: 'Take off your skis', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_ski_worn = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/skiing_3.jpg');
    scene.text('You can\'t believe your time skiing is already over. It feels like you just put on your ski boots and started around the lake. But now, as you sit down on the bench to take them off, your legs are tired and sore from a day of skiing. You unlace your boots and wiggle your toes, relieved to finally be able to stretch them out. You stand up and take a few steps, savouring the feeling of being barefoot after a day in stiff ski boots before you put your regular shoes back on.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
        { label: 'Ski around the lake (30 mins)', goto: ['pav_lake', 'ski'] },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['ski'] > 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).konki_cloth ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Put your skis on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_ski_worn = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/skiing_1.jpg');
    scene.text('You pull your ski boots out of your bag and sit down on the bench near the lake. The cold air nips at your cheeks as you begin to lace up your boots. You wiggle your toes, trying to get them as far back in the boots as possible. They feel a bit tight, but you know they\'ll stretch out as you ski. You stand up and take a few steps, getting a feel for the boots.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
        ]);
      }
    }
    if (((s as any).konki_cloth ?? 0) === 1) {
      scene.actions([
        { label: 'Take off your skates', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).konki_cloth = 0;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/konki0,1.jpg');
    scene.text('You take off your skates and put your shoes back on. It takes you a while to adjust to walking on your feet again.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
        { label: 'Skate on the ice rink', goto: ['pav_lake', 'skating_start'] },
      ]);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['ice_skates'] > 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).pcs_ski_worn ?? 0) === 0  &&  ((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.actions([
          { label: 'Put your skates on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).konki_cloth = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/lake/konki0,0.jpg');
    scene.text('You take your shoes off and put your skates on.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Return to Pavlovsk', handler: (st: GameState) => {
    if (((s as any).konki_cloth ?? 0) === 1) {
      scene.text('You need to remove your skates first.');
      scene.actions([
        { label: 'Go back', goto: ['pav_lake', ''] },
      ]);
    } else {
      if (((s as any).pcs_ski_worn ?? 0) === 1) {
        scene.text('You need to remove your skis first.');
        scene.actions([
          { label: 'Return', goto: ['pav_lake', ''] },
        ]);
      } else {
        if (((s as any).PSwim ?? 0) === 1) {
          scene.text('You need to get dressed into your regular clothing first.');
          scene.actions([
            { label: 'Return', goto: ['pav_lake', ''] },
          ]);
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude') {
            scene.text('You need to put some clothes on first.');
            scene.actions([
              { label: 'Return', goto: ['pav_lake', ''] },
            ]);
          } else {
            (s as any).minut = ((s as any).minut ?? 0) + 5;
            scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterLostClothing(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Put your clothes back on', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).nudelake = Math.floor(Math.random() * 20) + 0;
    if (((s as any).nudelake ?? 0) >= 4  ||  qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
      qspCall(s, 'outfit', 'restore', 'swim');
      scene.text('You return to the place where you left your clothes and put them back on.');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake', ''] },
      ]);
    } else {
      if (((s as any).nudelake ?? 0) < 3) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'mood', 'lower', 'tiny');
        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 3) + 1);
        scene.img('images/locations/pavlovsk/lake/event/noclothes.jpg');
        scene.text('You return to the place where put your clothes to get dressed… except you can\'t find them. You desperately search the beach as a few passers-by give you amused stares. Despite your efforts, you can\'t find them. You panic and, without thinking, start running home naked.');
        scene.actions([
          { label: 'Run home naked', goto: ['home_events', 'go_home_naked_pre'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'mood', 'lower', 'tiny');
        scene.img('images/locations/pavlovsk/lake/event/nakedcar.jpg');
        scene.text('You return to the place where you put your clothes to get dressed… except you can\'t find them. You desperately search the beach as a few passers-by give you amused stares. A man eventually approaches you, his eyes darting over your body as he speaks. "Is there a problem, sweetheart? You seem upset…"');
        if (((s as any).bag ?? 0) === 1) {
          scene.text('Luckily, your bag is sitting where you left it.');
        } else {
          qspCall(s, 'money', 'set', 0, 'cash');
        }
        scene.text('You\'re seriously panicking now. "I can\'t find my clothes! I left them right here and now they\'re gone! I don\'t know what to do!" you blurt out and he tries to calm you down.');
        scene.text('"Don\'t worry girl, you\'re going to be fine. Come on, I happen to have some sportswear in my car."');
        // TODO-QSP: dynamic text: You profusely thank him as he guides you to his car and are relieved to see that...
        scene.text('You profusely thank him as he guides you to his car and are relieved to see that he wasn\'t lying. He pulls out a set of brand new sportswear that looks look like they would fit you. He doesn\'t hand them over though. "Of course, I can\'t just give these away for free… They\'re brand new! They cost me \' + $func(\'money\', \'string_price\', 3000) + \', so if you can give me that they\'re all yours."');
        if (qspFunc(s, 'money', 'can_afford', 3000, 'cash')) {
          scene.actions([
            { label: 'Pay  [+$func(\'money\', \'string_price\', 3000)]', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', 3000, 'cash');
    qspCall(s, 'clothing', 'add_item', 'danilovich_outfits', 1);
    qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 1);
    scene.img('images/locations/pavlovsk/lake/event/nakedcar.jpg');
    scene.text('There\'s the catch. He looks at your naked body as you mull over his proposition. You realize that you don\'t really have any other choice, so you silently nod and give him the money before quickly putting the clothes on when he hands them over. You feel relieved that you won\'t have to go home naked and hope that your clothes turn up later.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell him you don\'t have enough money', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/lake/event/nakedcar.jpg');
    scene.text('There\'s the catch. He looks over your naked body as you mull over your predicament. "I don\'t have that kind of money. Do you have a towel or something?"');
    scene.text('He shakes his head and you can see a slight bulge forming in his pants. "No, but I might be willing to trade the clothes…" He trails off suggestively and with the way he\'s looking at you, you have no doubt as to what he has in mind.');
    scene.text('"What did you have in mind?" you ask rhetorically and he grins.');
    scene.text('"Well, how about we get in my car and you let me fuck you? Then you can have the clothes."');
    qspCall(s, 'willpower', 'prostitution', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse and run home naked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse and run home naked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
  }, goto: ['home_events', 'go_home_naked_pre'] },
      ]);
    }
    scene.actions([
      { label: 'Agree', goto: ['pav_lake', 'car_sex'] },
    ]);
  } },
          ]);
        }
        qspCall(s, 'willpower', 'prostitution', 'self');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Suggest alternative payment [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Suggest alternative payment [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    scene.img('images/locations/pavlovsk/lake/event/nakedcar.jpg');
    // TODO-QSP: dynamic text: This is not how you planned for your day to go! Too afraid to look him in the ey...
    scene.text('This is not how you planned for your day to go! Too afraid to look him in the eye, you feebly make a suggestion. "Is there… is there some other way I can pay you? \'+$func(\'money\', \'string_price\', 3000)+\' is a lot of money…"');
    scene.text('He\'s been gawking at your naked body the whole time you\'ve been talking, and your suggestion seems to be exactly what he wanted to hear as he starts grinning. "I can think of one way…"');
    scene.text('The growing bulge in his pants does an excellent job of telling exactly what he\'s thinking.');
    scene.actions([
      { label: 'Agree to have sex', goto: ['pav_lake', 'car_sex'] },
      { label: 'Just pay [+$func(\'money\', \'get_cost_string\', 3000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 3000, 'cash');
      qspCall(s, 'clothing', 'add_item', 'danilovich_outfits', 1);
      qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 1);
      scene.img('images/locations/pavlovsk/lake/event/nakedcar.jpg');
      // TODO-QSP: dynamic text: You don't want to have sex with him, but you also don't want to go home naked. N...
      scene.text('You don\'t want to have sex with him, but you also don\'t want to go home naked. Not seeing any other option, you decide to pay him the \' + $func(\'money\', \'string_price\', 3000) + \'. You quickly put on the clothes as he hands them over. You feel relieved that you won\'t have to go home naked and hope that your clothes turn up later.');
      scene.actions([
        { label: 'Continue', goto: ['pav_lake', ''] },
      ]);
    }
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterSunbathe(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  if (((s as any).pcs_sweat ?? 0) < 35) {
    qspCall(s, 'sweat', 'add', 5);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  if (((s as any).PSwim ?? 0) === 1) {
    scene.img('images/locations/shared/lake/tanning_swimsuit.jpg');
    if (((s as any).pcs_inhib ?? 0) < 50) {
      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
    }
  } else {
    scene.img('images/locations/shared/lake/tanning_nude.jpg');
    qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 3) + 1);
  }
  if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
    scene.text('You lie down on your towel and enjoy the warm rays of the sun on your body.');
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + 1;
  } else {
    ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
    scene.text('You apply sunscreen to yourself and lie down on the towel to work on your tan. You enjoy the warm rays of the sun on your body.');
    (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + 3;
  }
  if (((s as any).pcs_hotcat ?? 0) < 4) {
    scene.actions([
      { label: 'Stop sunbathing', goto: ['pav_lake', ''] },
    ]);
  } else {
    (s as any).tipelakeboyrand = Math.floor(Math.random() * 100) + 0;
    if (((s as any).tipelakeboyrand ?? 0) < 40) {
      scene.text('Three men sit down near you as you sunbathe. While you notice them looking at you and talking about your body, they don\'t come over.');
      scene.actions([
        { label: 'Stop sunbathing', goto: ['pav_lake', ''] },
      ]);
    } else {
      if (((s as any).tipelakeboyrand ?? 0) < 80) {
        qspCall(s, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * (age + 5 - Math.max(((s as any).age ?? 0) - 5, 16) + 1)) + (Math.max(((s as any).age ?? 0) - 5, 16))));
        qspCall(s, 'npcStat', '', ((s as any).lbz_npc ?? 0));
        scene.text('A rather cute looking guy sits down next to you as you sunbathe.');
        // TODO-QSP: dynamic text: "Hey there beautiful, I'm <<$boydesc>>. What's your name?" he asks in an attempt...
        scene.text(`"Hey there beautiful, I'm ${((s as any).boydesc ?? 0)}. What's your name?" he asks in an attempt to chat you up.`);
        qspCall(s, 'LakeBoyZ', 'gL_boy_z');
        scene.actions([
          { label: 'Move away from him', goto: ['pav_lake', ''] },
        ]);
      } else {
        if (((s as any).npc_QW ?? 0)?.['A113'] >= 1) {
          scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
          // TODO-QSP: dynamic text: While you're sunbathing, you see Vadim Bely and his brother sitting not far from...
          scene.text(`While you're sunbathing, you see Vadim Bely and his brother sitting not far from you. The brother points at you, and seconds later Vadim walks over and sits down next to you. He idly scratches his tattoo covered belly as he speaks to you. "Hello ${((s as any).pcs_nickname ?? 0)}, want to go for a ride with me?"`);
          scene.text('The greedy look in his eyes tells you that when he says \'ride\', he doesn\'t just mean in his car.');
          return;
          scene.actions([
            { label: 'Get dressed and go with him', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      qspCall(s, 'outfit', 'wear_last_worn');
    } else {
      if (((s as any).PSwim ?? 0) === 1) {
        qspCall(s, 'outfit', 'restore', 'swim');
      }
    }
  }, goto: ['LakeBoyDy', 'ride'] },
          ]);
        } else {
          qspCall(s, 'stat', '');
          scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
          scene.text('While sunbathing, you can\'t help but notice a man walking towards you. He looks truly intimidating, his entire body covered in criminal gang tattoos. A bit further down the beach, you see a younger man with similar tattoos keeping an eye on the man approaching you.');
          scene.text('His head is mostly bald, and a large golden cross dangles on a thick chain from his neck. He sits his fat body down next to you before you can protest, idly scratching his belly as he begins to chat. "Hello! I\'m not interrupting anything, am I?"');
          scene.actions([
            { label: 'Annoyed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('"Erm, excuse me!? I was here first!" you exclaim in an annoyed tone.');
    scene.text('The man is not impressed in the slightest, obviously having played this game before, and immediately challenges your claim. "Oh, excuse me princess! Is this your spot? Do you own it?"');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('"Yes, this is my spot! I was here first, that\'s how it works!" you respond indignantly.');
    scene.text('You suddenly hear a deep voice behind you. "This beach is only used by prostitutes and bus drivers, and I don\'t see any fucking buses nearby!"');
    scene.text('Startled, you look behind you and see the tattooed younger man behind you. He has tattoos over his whole body as well, most notably several tombs and skulls on his chest. He stares you down with a stone cold look on his face.');
    scene.text('The bald man smiles and puts his hand on your chest as if he owns it, roughly squeezing your breast.');
    scene.text('"So… how much?"');
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'LakeBoyDy', 'slap');
  } },
      { label: 'Move away', goto: ['LakeBoyDy', 'go'] },
    ]);
  } },
    ]);
  } },
            { label: 'Ignore them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('Feeling intimidated and not wanting any trouble, you ignore them and pretend they\'re not there, lying on the beach with your eyes closed. However, you feel a strange tickling sensation on your stomach few seconds later and open your eyes. You see the fat man running a blade of grass over your stomach with a smug grin on his face.');
    scene.actions([
      { label: 'Keep ignoring them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You try to ignore them and close your eyes again, but you feel the blade of grass continuously teasing your body, and after a few minutes his sweaty hand is pawing at your breasts.');
    scene.text('"Come with me, baby and I\'ll make you feel so good! You won\'t regret it." His groping becomes more insistent.');
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'LakeBoyDy', 'slap');
  } },
    ]);
  } },
    ]);
  } },
            { label: 'Walk away', goto: ['pav_lake', ''] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterSwimming(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'exercise', 'tier1', 30, 'stren', 'vital');
  if (((s as any).pcs_sweat ?? 0) > 10) {
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
  }
  qspCall(s, 'mood', 'raise', 'tiny');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img(`images/pc/activities/swim/lake/swim_nude_${Math.floor(Math.random() * 11) + 0}.jpg`);
    qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
  } else {
    scene.img(`images/pc/activities/swim/lake/swim_bikini_${Math.floor(Math.random() * 9) + 0}.jpg`);
    if (((s as any).pcs_inhib ?? 0) < 50) {
      qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
    }
  }
  scene.text('You swim and play in the lake, feeling refreshed and invigorated by the water.');
  if (((s as any).clothingworntype ?? 0) === 'nude'  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    if (((s as any).trait_vars ?? 0)?.['exhibitionist'] <= 0) {
      qspCall(s, 'mood', 'lower', 'small');
    } else {
      qspCall(s, 'mood', 'raise', 'tiny');
    }
    // TODO-QSP: dynamic text: After a few minutes, you feel the piercing gaze of several nearby women on you. ...
    scene.text(`After a few minutes, you feel the piercing gaze of several nearby women on you. They're making an effort of whispering to one another, yet loud enough so you can hear them. "Look at that ${((s as any).pcs_lastname ?? 0)} slut! She has no decency whatsoever, shamelessly flaunting her naked body like that!" The men at the lake are much more appreciative, and openly stare at your attractive body. You can see bulges forming in the shorts of some of them.`);
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the water.');
  }
  scene.actions([
    { label: 'Get out of the water', goto: ['pav_lake', ''] },
  ]);
  scene.build();
}

function enterSki(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/skiing_2.jpg');
  scene.text('As you ski, you take in the breathtaking views of the snow-covered trees, the crisp blue sky above and all the people ice skating out on the lake. The sound of your skis slices through the snow filled air. You feel a sense of freedom and exhilaration as you carve your way around the lake. The cold air fills your lungs and you can\'t help but smile, feeling alive and free.');
  scene.actions([
    { label: 'Finish skiing', goto: ['pav_lake', ''] },
  ]);
  scene.build();
}

function enterCarSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'add_item', 'danilovich_outfits', 1);
  qspCall(s, 'clothing', 'wear', 'danilovich_outfits', 1);
  scene.img('images/locations/shared/sex/car/sexcar1.jpg');
  scene.text('He wastes no time and immediately throws you down on the back seat of his car when you agree. He pulls down his pants and, after putting a condom on, quickly guides his cock to your pussy. He obviously doesn\'t plan on spending a lot of time with you and sinks it inside you in one firm thrust before he starts fucking you with rapid, short thrusts. He quickly shoots his load in the condom, ties a knot in it and throws it away before he hands you the clothes as promised, kicks you out of the car and drives off.');
  scene.text('It wasn\'t the best sex you\'ve had, but at least you have some clothes to wear now. With a sigh of relief, you straighten the clothes and feel ready to take the day on again, hoping your own clothes will turn up at some point.');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['pav_lake', ''] },
  ]);
  scene.build();
}

function enterSkatingStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/lake/katok0,${Math.floor(Math.random() * 4) + 0}.jpg`);
  scene.text('You slowly make your way over to the ice rink where a lot of people are already skating. Some of them are really good and fly around the lake, while others carefully shuffle around, doing their best to just stay on their feet without falling.');
  scene.actions([
    { label: 'Leave the rink', goto: ['pav_lake', ''] },
    { label: 'Skate on the rink', goto: ['pav_lake', 'skating'] },
  ]);
  scene.build();
}

function enterSkating(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'sweat', 'add', 10);
  qspCall(s, 'exp_gain', 'stren', 1);
  qspCall(s, 'exp_gain', 'agil', 1);
  qspCall(s, 'exp_gain', 'react', 1);
  qspCall(s, 'exp_gain', 'icesktng', 1);
  scene.img('images/locations/pavlovsk/lake/katok_do0,\'+rand(0, 7)+\'.jpg');
  if (((s as any).pcs_icesktng ?? 0) <= 10) {
    qspCall(s, 'mood', 'lower', 'small');
    scene.text('You do your best to ride your skates, but you\'re not very good at it. You fall flat on your ass several times.');
    scene.text('Some of the friendlier skaters are cheering you on and try to give you some tips, while others laugh when you fall on your ass yet again.');
  } else {
    if (((s as any).pcs_icesktng ?? 0) <= 30) {
      qspCall(s, 'mood', 'lower', 'tiny');
      scene.text('Your persistent attempts to learn how to skate are starting to pay off. You don\'t fall as often any more, even though it still happens on occasion. Ice skating is a lot more fun when you\'re not falling on your ass all the time!');
      if ((!(Math.floor(Math.random() * 3) + 0))) {
        qspCall(s, 'exp_gain', 'icesktng', 1);
        scene.text('While you\'re trying some new things, you suddenly figure out how to do a certain move properly. It definitely improves your skating skills.');
      }
    } else {
      if (((s as any).pcs_icesktng ?? 0) <= 50) {
        qspCall(s, 'mood', 'raise', 'tiny');
        scene.text('At long last, you finally manage to skate without falling once. Some of the other regulars who have seen you struggle before notice how much better you\'re doing, and congratulate you on your progress.');
        scene.text('You become a bit more daring as you continue, almost never falling any more.');
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          qspCall(s, 'exp_gain', 'icesktng', 2);
          scene.text('You fall, but one of the more experienced skaters notices and helps you up. Once you\'re up on your skates again, he explains what you did wrong and you feel like you\'re a better skater for it. You thank him as you skate off, trying to apply the trick he just taught you.');
        }
      } else {
        if (((s as any).pcs_icesktng ?? 0) <= 70) {
          qspCall(s, 'mood', 'raise', 'tiny');
          scene.text('You\'re getting better at ice skating and basically never fall anymore. You enjoy the flow of the wind on your face as you dare to go faster and faster.');
          if ((!(Math.floor(Math.random() * 3) + 0))) {
            qspCall(s, 'exp_gain', 'icesktng', 3);
            scene.text('You watch the more experienced skaters, trying to pick up new tricks. You try to copy some of the things they are doing, and notice that those moves are indeed more efficient than how you were doing it before.');
          }
        } else {
          qspCall(s, 'mood', 'raise', 'small');
          scene.text('You\'ve pretty much mastered ice skating now, and won\'t get any better without professional training. You occasionally do some tricks while you skate around the rink, and others admire your skills as you fly past them.');
        }
      }
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) < 18) {
    scene.actions([
      { label: 'Leave the rink', goto: ['pav_lake', ''] },
      { label: 'Skate some more', goto: ['pav_lake', 'skating'] },
    ]);
  } else {
    scene.text('It\'s too dark to continue ice skating. The rink is closed.');
    scene.actions([
      { label: 'Leave', goto: ['pav_lake', ''] },
    ]);
  }
  scene.build();
}

function enterSchoolMates(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/beach_hangout/school_mates.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 225) {
    scene.text('You start approaching them, but are immediately greeted with disgusted stares and rude comments before Dimka walks over with Svyatoslav. "Get lost, slut! We don\'t want you here."');
    scene.text('You sigh before turning and walking away.');
  } else {
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('You start approaching them and are greeted with friendly smiles as several wave at you to come over and join them.');
      scene.actions([
        { label: 'Join them', goto: ['pav_lake', 'beach_hangout'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 3  ||  ((s as any).grupTipe ?? 0) === 4) {
        scene.text('You start approaching them, but the group largely ignore you until you get close and several of them give you annoyed looks, making it clear you\'re not welcome here, but make no effort to stop you from joining them at least.');
        scene.actions([
          { label: 'Join them', goto: ['pav_lake', 'beach_hangout'] },
        ]);
      } else {
        scene.text('You start approaching them and are greeted with annoyed stares and rude comments before Dimka walks over with Svyatoslav. "Get lost, loser! We don\'t want you here."');
        scene.text('You sigh before turning and walking away.');
      }
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_lake', ''] },
  ]);
  scene.build();
}

function enterBeachHangout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).PCloQuality ?? 0) < 3) {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
  } else {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
  }
  if (((s as any).PCloInhibit ?? 0) <= 10) {
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
  } else {
    if (((s as any).PCloInhibit ?? 0) < 20) {
    } else {
      if (((s as any).PCloInhibit ?? 0) < 35) {
        ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (1);
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
      } else {
        ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) - (1);
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
      }
    }
  }
  if (((s as any).PSwim ?? 0) === 1  &&  ((s as any).PCloOnePiece ?? 0) === 1) {
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/lake/beach_hangout/hangout.jpg');
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('You smile at your friends and take a seat with them before joining in on the variety of conversations going on. Some are tanning, others sit around talking, and some horse around. You can use this opportunity to get to know one of them better if you want.');
  } else {
    scene.text('You smile and take a seat with them, but get mixed responses. The ones you know better seem somewhat friendly, but the others range from indifference to annoyance. Many choose just to ignore you.');
    scene.text('Some are tanning, others sit around talking, and some horse around. You spend some time trying to get involved in the conversations going on, but meet limited success. You can use this opportunity to get to know one of them better if you want.');
  }
  scene.actions([
    { label: 'Leave', goto: ['pav_lake', ''] },
    { label: 'Talk to one of them', goto: ['pav_beach_chat', 'beach_hangout'] },
  ]);
  scene.build();
}

function enterKlake(s: GameState, scene: SceneBuilder): void {
  (s as any).KsenyaQW = 2;
  scene.img('images/characters/pushkin/ksenya/lake2.jpg');
  scene.text('As you head to the lake you see a figure walking around the water. It\'s Ksenya. She is in a black negligee and nothing else. You walk up to her and see her mother taking pictures of her. You stand back for a bit watching her work.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/lake1.jpg');
    scene.text('You watch her for some time and you see her lift the back side of her outfit and her panties drop to the sand. You hear her mother say something and she turns around.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/lake3.jpg');
    scene.text('When she turns around, she sees you and is shocked but keeps doing what she is told by her mother, trying to look like nothing is wrong.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/lake4.jpg');
    scene.text('She makes a tease with her panties around her ankles. She lifts her leg and makes it look like she is going to grab them but doesn\'t.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pushkin/ksenya/lake5.jpg');
    scene.text('She pulls her dress up and shows you her bare pussy. You hear her mother sigh and keep taking a few pictures.');
    scene.text('"Is she doing this for me?" you ask yourself as you watch. "I\'ll have to ask her the next time I see her. Best get away before her mother sees me" and with that, you leave the lake area.');
    scene.actions([
      { label: 'Go back', goto: ['pav_lake', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'lost_clothing':
      enterLostClothing(s, scene);
      break;
    case 'sunbathe':
      enterSunbathe(s, scene);
      break;
    case 'swimming':
      enterSwimming(s, scene);
      break;
    case 'ski':
      enterSki(s, scene);
      break;
    case 'car_sex':
      enterCarSex(s, scene);
      break;
    case 'skating_start':
      enterSkatingStart(s, scene);
      break;
    case 'skating':
      enterSkating(s, scene);
      break;
    case 'school_mates':
      enterSchoolMates(s, scene);
      break;
    case 'beach_hangout':
      enterBeachHangout(s, scene);
      break;
    case 'klake':
      enterKlake(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_lake: LocationDef = {
  name: 'pav_lake',
  title: '<center><h4>Lake</h4></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  locclass: 'beach',
  description: ['As you walk down to the beach area of the lake, you see the jocks and cool kids hanging out and hope none of them have seen you naked. You should put on a swimsuit before approaching them if you want to hang out, or just avoid them and do your own thing today.'],
  enter: enter,
};
