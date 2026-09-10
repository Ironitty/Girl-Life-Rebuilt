import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/pavlovsk/lake/lake.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/lake/lake.spring.night.jpg');
    }
    scene.text('<center>A small lake, located not far from Pavlovsk. You\'re not sure whether Pavlovsk was built near the lake on purpose or not. When it\'s warm enough, people often come to sunbathe or go swimming.</center>');
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
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).season ?? 0) === 'winter') {
      if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12) {
        scene.text('Looking out over the frozen lake, you see a figure in the distance figure skating and doing all types of crazy moves. Stepping onto the ice and skating out, you notice that it\'s <a href="exec:gt \'gschool_socialchg1\', \'tVeronika\'">Veronika</a>.');
      }
    }
    if (((s as any).konki_cloth ?? 0) === 1  ||  ((s as any).pcs_ski_worn ?? 0) === 0) {
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
    scene.actions([
      { label: 'Return to Pavlovsk', handler: (st: GameState) => {
    if (((s as any).konki_cloth ?? 0) === 1) {
      scene.text('You need to remove your skates first.');
      scene.actions([
        { label: 'Go back', goto: ['pav_lake', ''] },
      ]);
    } else {
      scene.text('You need to remove your skis first.');
      if (((s as any).PSwim ?? 0) === 1) {
        scene.text('You need to get dressed into your regular clothing first.');
        scene.actions([
          { label: 'Return', goto: ['pav_lake', ''] },
        ]);
      } else {
        scene.text('You need to put some clothes on first.');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.actions([{ label: 'Continue', goto: ['pav_residential', ''] }]);
        scene.actions([
          { label: 'Return', goto: ['pav_lake', ''] },
        ]);
      }
      scene.actions([
        { label: 'Return', goto: ['pav_lake', ''] },
      ]);
    }
    if (((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).konki_cloth ?? 0) === 0  &&  ((s as any).pcs_ski_worn ?? 0) === 0) {
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
        scene.actions([
          { label: 'Use changing room', goto: ['changingroom', ''] },
        ]);
      } else {
        scene.text('You should buy some swimwear if you intend on spending time at the beach.');
      }
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        if (((s as any).sauna_stripped ?? 0) === 0) {
          qspCall(s, 'pav_lake', 'lost_clothing');
        }
      } else {
        if (((s as any).pcs_inhib ?? 0) > 30  ||  (((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1  &&  ((s as any).pcs_horny ?? 0) >= 60)) {
          qspCall(s, 'willpower', 'exhib', 'self', 'hard');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Strip naked [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Strip naked', handler: (st: GameState) => {
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
    if (((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) < 10  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21  &&  ((s as any).konki_cloth ?? 0) === 0  &&  ((s as any).pcs_ski_worn ?? 0) === 0) {
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
      if (((s as any).KsenyaQW ?? 0) === 1  &&  Math.floor(Math.random() * 3) + 1 === 1  &&  ((s as any).sunWeather ?? 0) === 1) {
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
      scene.img('images/locations/pavlovsk/lake/lake.walk0,\'+rand(0, 2)+\'.jpg');
      if (((s as any).pcs_hips ?? 0) >= 110) {
        scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,1.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/lake.walk.bikini.fat0,0.jpg');
        scene.img('images/locations/pavlovsk/lake/lake.walk.bikini0,\'+rand(0, 3)+\'.jpg');
      }
      if (((s as any).pcs_inhib ?? 0) < 50) {
        qspCall(s, 'exp_gain', 'inhib', Math.floor(Math.random() * 2) + 1);
      }
    }
    scene.text('You walk along the beach, enjoying the feeling of the sun on your body.');
    scene.actions([
      { label: 'Continue', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    }
    if (((s as any).konki_cloth ?? 0) === 0  &&  ((s as any).pcs_ski_worn ?? 0) === 0) {
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
  } },
    ]);
  }
  scene.build();
}

export const pav_lake: LocationDef = {
  name: 'pav_lake',
  title: '<center><h4>Lake</h4></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  locclass: 'beach',
  enter: enter,
};
