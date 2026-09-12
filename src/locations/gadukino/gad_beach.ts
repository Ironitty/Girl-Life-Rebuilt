import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_beach', 'start');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Village Beach</h4></center>');
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
    if (((s as any).sunWeather ?? 0) === 1) {
      if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
        scene.img('images/locations/gadukino/river/gadbitch_summer.jpg');
      } else {
        scene.img('images/locations/gadukino/river/gadbitch_winter.jpg');
      }
    } else {
      if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
        scene.img('images/locations/gadukino/river/gadbitch_soft.jpg');
      } else {
        scene.img('images/locations/gadukino/river/gadbitch_cold.jpg');
      }
    }
  } else {
    scene.img('images/locations/gadukino/river/gadbitch_night.jpg');
  }
  scene.text('A small country beach, where you can sunbathe and swim.');
  if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  (Math.floor(Math.random() * 11) + 0) === 0  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).temper ?? 0) >= 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.text('<a href="exec: gt \'gad_beach\', \'GuysBeach\' ">Kolyamba and Vasyan</a> are resting on the riverbank.');
  }
  if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
    if ((Math.floor(Math.random() * 11) + 0) < 5) {
      scene.text('<a href="exec:gt \'gad_beach\', \'Mira\', 1 ">Mira</a> is lying on the beach sunbathing.');
      if (((s as any).npc_rel ?? 0)?.['A60'] < 15) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
    } else {
      scene.text('<a href="exec:gt \'gad_beach\', \'Mira\', 0 ">Mira</a> is in the river splashing water around and having fun.');
      if (((s as any).npc_rel ?? 0)?.['A60'] < 15) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
    }
  }
  if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
    scene.actions([
      { label: 'Get changed', goto: ['changingroom', ''] },
    ]);
  }
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    (s as any).clothesAtLocation = qspFunc(s, 'clothing', 'lost_clothes_here', 'VillageRiver');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (((s as any).clothesAtLocation ?? 0) === 1) {
      qspCall(s, 'outfit', 'recover_lost_outfit', 'VillageRiver', 1);
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9) {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1)) {
      scene.actions([
        { label: 'Strip naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'backup', 'swim');
    qspCall(s, 'outfit', 'strip_all', 'VillageRiver');
    scene.text('Without hesitation, you take off all your clothes and neatly fold them before putting them down on a pile. Without your clothes holding you back, you can go for a nice swim in the river or lie down in the sand and sunbathe.');
    scene.actions([
      { label: 'Continue', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'gad_beach', 'set_swimming_act');
    qspCall(s, 'gad_beach', 'set_sunbath_act');
    qspCall(s, 'gp_zlatek', 'check_for_chores', 'beach');
  }
  if ((! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  qspFunc(s, 'miroslava_schedule', 'was_here')) {
    scene.actions([{ label: 'Continue', goto: ['gad_beach', 'Mira_leaves'] }]);
  } else {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).locArgs?.[1] ?? 0) === 0  &&  ((s as any).MiraVars ?? 0)?.['follow_time'] === 0) {
      scene.actions([{ label: 'Continue', goto: ['gad_beach', 'arrive_Mira_already_there'] }]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk to the river (0:05)', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1) {
      scene.text('You need to dress in regular clothes first.');
      scene.actions([
        { label: 'Return', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text('You need to put some clothes on first.');
        scene.actions([
          { label: 'Return', goto: ['gad_beach', 'start', '1'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        scene.actions([{ label: 'Continue', goto: ['gad_river', 'start'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterSetSwimmingAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PSwim ?? 0) === 1  &&  ((s as any).pcs_stam ?? 0) >= (5 * (10 - ((s as any).sport_clothes_exercise_bonus ?? 0))) / 2) {
    scene.actions([
      { label: 'Go for a swim', handler: (st: GameState) => {
    qspCall(s, 'cum_cleanup', '', 4);
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier1', 5, 'stren', 'vital');
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    }
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    if ((Math.floor(Math.random() * 11) + 0) < 5  &&  qspFunc(s, 'miroslava_schedule', 'is_here')) {
      if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 6) {
        scene.img('images/characters/gadukino/mira/rivertwogirls.jpg');
        scene.text('You and Mira take a nighttime swim in the river, splashing water at each other and having fun.');
      } else {
        scene.img('images/characters/gadukino/mira/rivertwogirls.jpg');
        scene.text('You and Mira swim in the river, splashing water at each other and having fun.');
      }
    } else {
      if (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) <= 6) {
        scene.img('images/locations/gadukino/river/gadriverswim_night.jpg');
        scene.text('You take a nighttime swim in the river, feeling the refreshing and invigorating water flowing across your body.');
      } else {
        scene.img('images/locations/gadukino/river/gadriverswim.jpg');
        scene.text('You swim in the river, feeling the refreshing and invigorating water across your body.');
      }
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', handler: (st: GameState) => {
    (s as any).temp_rand = Math.floor(Math.random() * 10) + 0;
    if (((s as any).temp_rand ?? 0) <= 1  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      if ((!((s as any).temp_rand ?? 0))) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex13.jpg');
        scene.text('When you decide it\'s time to get out of the river, you hear the sound of men laughing as they walk on the river bank approaching you. As they get closer, you see the village boys\' smirking faces, led by Mitya, headed towards the river bank while you are still in the shallow waters.');
        scene.text('They quickly undress and jump in the water. Within a few seconds, you are surrounded by the grinning boys. Then, without a word, they reach for you and roughly take turns forcing you to suck their cocks.');
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'arousal', 'bj', 15, 'gangbang', 'sub', 'rough');
        qspCall(s, 'arousal', 'hj', (-15), 'gangbang', 'sub', 'rough');
        qspCall(s, 'arousal', 'end');
        qspCall(s, 'boyStat', 'A63');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'cum_call', 'hair', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'boyStat', 'A61');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'boyStat', 'A62');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 20);
        ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Finish', goto: ['gad_beach', 'start', '1'] },
        ]);
      } else {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex19.jpg');
        scene.text('As soon as you get out of the river, you meet a grinning Kolyamba. He smiles wickedly and commands you to get down on your hands and knees so he can fuck you in the ass…');
        qspCall(s, 'arousal', 'auto_lube', 'anal');
        qspCall(s, 'boyStat', 'A61');
        ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
        (s as any).pose = 1;
        qspCall(s, 'dinSex', 'boy_wants_anal');
        qspCall(s, 'arousal', 'anal', 20, 'sub');
        qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1, '', '', 20);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', goto: ['gad_beach', 'start', '1'] },
        ]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['gad_beach', 'start', '1'] }]);
    }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Go skinny dipping', handler: (st: GameState) => {
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pcs_stren ?? 0) < 30) {
      qspCall(s, 'exp_gain', 'stren', 1);
    }
    if (((s as any).hour ?? 0) >= 22  &&  ((s as any).hour ?? 0) <= 6) {
      scene.img('images/locations/gadukino/river/watergirls1.jpg');
      scene.text('You strip your clothes off and slowly step into the cold river, knowing that the darkness hides your nudity. You swim around, feeling the refreshing and invigorating water caressing your body.');
    } else {
      if ((Math.floor(Math.random() * 16) + 0) >= 10  &&  qspFunc(s, 'miroslava_schedule', 'is_here')) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 5);
        qspCall(s, 'stat', '');
        scene.img('images/characters/gadukino/mira/rivertwogirlsnude\'+rand(0, 5)+\'.jpg');
        scene.text('You step into the river with Mira and have a good old-fashioned water fight, splashing each other until one of you finally surrenders.');
      } else {
        scene.img('images/locations/gadukino/river/watergirls.jpg');
        scene.text('You take your clothes off and swiftly step into the river. You sigh, feeling the cold, refreshing and tonic water.');
      }
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    scene.actions([
      { label: 'Get out of the water', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 16) + 0) === 0  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex12.jpg');
      scene.text('As soon as you step out of the water, you find your naked self in front of three boys here to do some fishing.');
      scene.text('Seeing you skinny dipping, they start to talk amongst themselves about how much of a shameless slut you are and that the only good thing you are for is serving men. You tell them to fuck off, but they are too worked up and not listening to you at all.');
      scene.text('One of the boys flips you over and starts penetrating your pussy as the other boy shoves his hardened cock into your protesting mouth. They have started to fuck you in an earnest and lust-filled frenzy.');
      scene.text('Your muffled moans and the sound of your wet pussy getting pounded fill the air. The boys soon orgasm and decide to ejaculate all over your body to show dominance.');
      qspCall(s, 'arousal', 'vaginal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'anal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'hj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'boyStat', 'A63');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
      qspCall(s, 'boyStat', 'A61');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, '', '', 20);
      qspCall(s, 'boyStat', 'A62');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      qspCall(s, 'stat', '');
      ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
      scene.actions([
        { label: 'Finish', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gad_beach', 'start', '1'] }]);
    }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetSunbathAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).sunWeather ?? 0) === 1) {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Sunbathe (1:00)', handler: (st: GameState) => {
    if (qspFunc(s, 'miroslava_schedule', 'is_here')  &&  (! qspFunc(s, 'miroslava_schedule', 'was_here'))) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      ((s as any).MiraVars ?? {})['follow_time'] = 1;
      if (((s as any).pcs_inhib ?? 0) < 50) {
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
      }
      qspCall(s, 'stat', '');
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.img('images/characters/gadukino/mira/mira_go_river_nude.jpg');
      } else {
        scene.img('images/characters/gadukino/mira/mira_go_river.jpg');
      }
      scene.text('You are sunbathing by the river when Mira comes along. You smile, and she undresses and lays her towel next to yours.');
      scene.actions([
        { label: 'Continue', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
        if (((s as any).pcs_sweat ?? 0) < 35) {
          qspCall(s, 'sweat', 'add', 5);
        }
        qspCall(s, 'mood', 'raise', 'tiny');
        if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
          scene.img('images/characters/gadukino/mira/beachtwogirlsnude.jpg');
          scene.text('You lie next to Mira and gossip about the villagers, enjoying the sun.');
        } else {
          scene.img('images/locations/gadukino/river/gadrivernude.jpg');
          scene.text('You lie down on your towel and start sunbathing.');
        }
        if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
        } else {
          if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
            ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
            scene.text('You smear the suntan lotion all over your body to help prevent sunburn.');
            (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
          }
        }
        scene.actions([
          { label: 'Finish sunbathing', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 10) + 0) === 0  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex14.jpg');
      scene.text('You hear several men\'s voices rapidly approaching. Suddenly, a couple of the village boys emerge in front of you. Noticing that you are nude, they brighten up considerably. In a few minutes, despite you protesting lively, they have you on all fours and are roughly fucking you…');
      qspCall(s, 'arousal', 'vaginal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'anal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'hj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'boyStat', 'A62');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
      qspCall(s, 'boyStat', 'A63');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, '', '', 20);
      qspCall(s, 'boyStat', 'A61');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Get dressed', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gad_beach', 'start', '1'] }]);
    }
  } },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 60;
        if (((s as any).pcs_sweat ?? 0) < 35) {
          qspCall(s, 'sweat', 'add', 5);
        }
        qspCall(s, 'mood', 'raise', 'tiny');
        if (qspFunc(s, 'miroslava_schedule', 'is_here')) {
          scene.img('images/characters/gadukino/mira/beachtwogirls.jpg');
          scene.text('You lie next to Mira and gossip about trivial things, enjoying the sun.');
        } else {
          scene.img('images/locations/gadukino/river/gadrivergirl.jpg');
          scene.text('You sunbathe alone on the riverbank.');
        }
        if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
          (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
        } else {
          if (((s as any).mc_inventory ?? 0)?.['suncream'] > 0) {
            ((s as any).mc_inventory ?? {})['suncream'] = (((s as any).mc_inventory ?? {})['suncream'] ?? 0) - (1);
            (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
            scene.text('You smear suntan lotion all over your body to prevent sunburn. Then, you\'re all lathered up and sunbathing a few minutes later.');
          }
        }
        scene.actions([
          { label: 'Finish', handler: (st: GameState) => {
    (s as any).temp_rand = Math.floor(Math.random() * 10) + 0;
    if (((s as any).temp_rand ?? 0) === 0  &&  (! qspFunc(s, 'miroslava_schedule', 'is_here'))  &&  ((s as any).npc_QW ?? 0)?.['A63'] >= 13  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex15.jpg');
      scene.text('After a while, you hear some familiar voices quickly approaching you. A couple of minutes later, the village boys emerge from the bushes. Noticing you sunbathing, they brighten up considerably. But, in a short time, despite you protesting lively, all of your holes have been violated…');
      qspCall(s, 'arousal', 'vaginal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'anal', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'hj', 10, 'gangbang', 'sub', 'rough');
      qspCall(s, 'arousal', 'end');
      qspCall(s, 'boyStat', 'A61');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0), 1);
      qspCall(s, 'boyStat', 'A62');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1, '', '', 20);
      qspCall(s, 'boyStat', 'A63');
      ((s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
      qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
      ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Finish', goto: ['gad_beach', 'start', '1'] },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 1  &&  qspFunc(s, 'miroslava_schedule', 'is_here')  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 15  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 20) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex16.jpg');
        scene.text('After a while, you hear voices rapidly approaching from the village. You see the village boys emerge from the bushes in a couple of minutes. Seeing Mira, they smile obscenely, and without hesitation, they quickly surround her as she lies on the sand. You sit up and watch as they fuck her in all her holes…');
        qspCall(s, 'arousal', 'voyeur_sex', 30, 'gangbang', 'dom');
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Finish', goto: ['gad_beach', 'start', '1'] },
        ]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gad_beach', 'start', '1'] }]);
      }
    }
  } },
        ]);
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMiraLeaves(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/characters/gadukino/mira/mira_go_home_nude.jpg');
  } else {
    scene.img('images/characters/gadukino/mira/mira_go_home.jpg');
  }
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I have to go home, " Mira said and began gathering her stuff...
  scene.text(`"${((s as any).pcs_nickname ?? 0)}, I have to go home, " Mira said and began gathering her stuff.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_beach', 'start', '1'] },
  ]);
  scene.build();
}

function enterArrive_MiraAlreadyThere(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/gadukino/mira/mira_in_river.jpg');
  scene.text('Arriving at the beach, you see Mira lying down, sunbathing on a towel.');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).MiraVars ?? {})['follow_time'] = 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).MiraVars ?? 0)?.['swimday'] === ((s as any).daystart ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['gad_beach', 'start', '1'] }]);
    } else {
      scene.img('images/characters/gadukino/mira/mirariver.jpg');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why are you moping about on the shore? Get in the water and ...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}, why are you moping about on the shore? Get in the water and swim with me?" - Mira called out to you as she waded into the river.`);
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      ((s as any).MiraVars ?? {})['swimday'] = ((s as any).daystart ?? 0);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree and get changed', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/river/undressbch1.jpg');
    scene.text('"Wait, Mira, I have to change out of my clothes!" you cry in response, although she can hardly hear you as she is already splashing around in the river.');
    scene.text('You start to take off your clothes.');
    if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
      scene.actions([
        { label: 'Change into swimwear', handler: (st: GameState) => {
    qspCall(s, 'gad_beach', 'get_changed', 'start');
  } },
      ]);
    }
    if (((s as any).pcs_inhib ?? 0) >= 25  ||  ((s as any).trait_vars ?? 0)?.['exhibitionist'] > 1) {
      scene.actions([
        { label: 'Strip naked', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'outfit', 'backup', 'swim');
    qspCall(s, 'outfit', 'strip_all', 'VillageRiver');
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.text('Without hesitation, you take off all your clothes and neatly fold them before putting them down in a pile. Without your clothes holding you back, you can go for a nice swim in the river or lie down in the sand and sunbathe.');
    scene.actions([
      { label: 'Swim', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/rivertwogirlsnude\'+rand(0, 5)+\'.jpg');
    scene.text('You wade into the river and have fun with Mira spraying each other with water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    (s as any).cumspclnt = 4;
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'exercise', 'tier1', 10, 'stren', 'vital');
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get out of the water', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Second thoughts', goto: ['gad_beach', 'second_thoughts'] },
    ]);
  } },
        { label: 'Refuse', goto: ['gad_beach', 'second_thoughts'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGetChanged(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'start') {
    scene.actions([{ label: 'Continue', goto: ['changingroom', ''] }]);
  } else {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/river/undressbch.jpg');
    scene.text('You put on your swimwear and neatly fold your clothes before putting them down in a pile. Now you can go for a nice swim in the river or just lie down in the sand and sunbathe.');
    if ((!((s as any).PSwim ?? 0))) {
      scene.actions([
        { label: 'Second thoughts', goto: ['gad_beach', 'second_thoughts'] },
      ]);
    } else {
      scene.actions([
        { label: 'Swim', handler: (st: GameState) => {
    scene.img('images/characters/gadukino/mira/rivertwogirls.jpg');
    scene.text('You wade into the river and have fun with Mira spraying each other with water.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the water.');
    }
    (s as any).cumspclnt = 4;
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    if (((s as any).pcs_inhib ?? 0) < 50) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'exercise', 'tier1', 5, 'stren', 'vital');
    (s as any).pcs_sweat = 10 + (Math.floor(Math.random() * 5) + 0);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get out of the water', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSecondThoughts(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/gadukino/mira/mirariver.jpg');
  if (qspFunc(s, 'changingroom', 'count_swim_item') === 0) {
    scene.text('"Actually, Mira, I can\'t come in right now, as I didn\'t bring a swimsuit", you replied you here. "I\'m going to stay on the shore for a bit."');
    scene.text('You should probably buy some swimwear if you intend to spend time at the beach.');
  } else {
    scene.text('"Actually, Mira, I\'ve changed my mind. I don\'t feel like swimming just now," you replied to her. "I\'m going to stay on the shore for a bit."');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'npc_relationship', 'modify', 'A60', (-1));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gad_beach', 'start', '1'] },
  ]);
  scene.build();
}

function enterMira(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
    if (((s as any).MiraVars ?? 0)?.['QW'] < 12) {
      scene.img('images/characters/gadukino/mira/mirabeach.jpg');
    } else {
      scene.img('images/characters/gadukino/mira/mirabeachnude.jpg');
    }
  } else {
    if (((s as any).MiraVars ?? 0)?.['QW'] < 12) {
      scene.img('images/characters/gadukino/mira/mirariver.jpg');
    } else {
      scene.img('images/characters/gadukino/mira/mirarivernude.jpg');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    if (((s as any).MiraVars ?? 0)?.['QW'] < 7) {
      if (((s as any).npc_rel ?? 0)?.['A60'] < 15) {
        qspCall(s, 'npc_relationship', 'modify', 'A60', 1);
      }
      scene.text('You and Mira are chatting about trivial things.');
    } else {
      if (((s as any).MiraVars ?? 0)?.['QW'] === 7) {
        scene.text('You decide to speak with Mira, "So what is there to do here in the village?"');
        scene.text('"It\'s a lot quieter than a town, but we have a shop, this lovely beach, and some beautiful walks. Other than that, there are only the Gopnik guys, but they are just after one thing, and I don\'t want that. Plus, dad would kill me."');
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] === 8) {
          scene.text('Mira breaks the silence, "What brings you here to the village?"');
          scene.text('"My granma-ma and Pop-pop live here. My folks like to come here over the summer. They think the country air will be good for me."');
        } else {
          if (((s as any).MiraVars ?? 0)?.['QW'] <= 10) {
            scene.text('You talk to Mira about what it is like living in the village.');
          } else {
            if (((s as any).MiraVars ?? 0)?.['QW'] <= 14) {
              scene.text('Mira asks you about Pavlovsk, and you tell her all about it.');
            } else {
              if (((s as any).MiraVars ?? 0)?.['QW'] <= 19) {
                scene.text('You and Mira talk about clothes and shopping, she has a thing for shoes but can\'t wear pretty heels because of all the mud.');
              } else {
                if (((s as any).MiraVars ?? 0)?.['QW'] <= 29  ||  ((s as any).MiraVars ?? 0)?.['prostitute'] === 0) {
                  scene.text('It is always lovely to talk with Mira, and you gossip about boys.');
                } else {
                  if (((s as any).MiraVars ?? 0)?.['QW'] >= 30  &&  ((s as any).MiraVars ?? 0)?.['prostitute'] > 0) {
                    scene.text('You and Mira talk about her being the village prostitute and how she can improve her performance.');
                  }
                }
              }
            }
          }
        }
      }
    }
  } },
    { label: 'Leave', goto: ['gad_beach', 'start', '1'] },
  ]);
  scene.build();
}

function enterGuysBeach(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/river/mitkaguysriver.jpg');
  // TODO-QSP: dynamic text: "Oh, hi, <<$pcs_nickname>>. So it's just you today?" Kolyamba grinned.
  scene.text(`"Oh, hi, ${((s as any).pcs_nickname ?? 0)}. So it's just you today?" Kolyamba grinned.`);
  (s as any).temp_randA = Math.floor(Math.random() * 11) + 0;
  if (((s as any).temp_randA ?? 0) <= 4) {
    scene.text('"There doesn\'t seem to be anyone else around, and all of us are as horny as bullfrogs. Do you want to have a little fun with us? Come on, spread your legs, show us your pussy and start playing with yourself…"');
  } else {
    if (((s as any).temp_randA ?? 0) <= 8) {
      scene.text('"There doesn\'t seem to be anyone around, and we are as horny as bullfrogs. Do you want to have a little fun with us? How about you give us a blowjob? We\'ll be really grateful, ha-ha!"');
    } else {
      scene.text('"Ah, no, Mira, it\'s just our other hot babe. Come here, lovely. We have something exceptional for you."');
    }
  }
  if (((s as any).temp_randA ?? 0) < 4) {
    scene.actions([
      { label: 'Pleasure Kolyamba', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A61');
    qspCall(s, 'npcStat', 'A62', 'a');
    (s as any).pose = 0;
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex.jpg');
    scene.text('You quickly take off your pants and climb onto Kolyamba, grabbing his cock, and leading it inside you.');
    qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID ?? 0), 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pleasure Vasyan', handler: (st: GameState) => {
    (s as any).pose = 0;
    (s as any).temp_randB = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_randB ?? 0))) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex1.jpg');
      scene.text('Vasyan rolls you onto your back, sticking his cock into your wet pussy.');
      qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group');
    } else {
      if (((s as any).temp_randB ?? 0) === 1) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex2.jpg');
        scene.text('Vasya steps up to you and slaps you in the face while pulling out his cock, forcing you on your knees so he can beat you with his dick.');
        scene.text('He forcefully shoves the cock into your mouth and cums lavishly in your mouth…');
        qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
        qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex3.jpg');
        scene.text('Vasyan forces you on all four and starts pumping his dick into your ass.');
        qspCall(s, 'arousal', 'anal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
        qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_randA ?? 0) < 8) {
      scene.actions([
        { label: 'Pleasure Kolyamba', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A61');
    qspCall(s, 'npcStat', 'A62', 'a');
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex4.jpg');
    scene.text('You get down on your knees and start licking Kolyamba\'s dick. Then, after a while, you start sucking it like a popsicle…');
    scene.text('He only manages to hold out for a short time finishing in your mouth…');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pleasure Vasyan', handler: (st: GameState) => {
    (s as any).pose = 0;
    (s as any).temp_randC = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_randC ?? 0))) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex5.jpg');
      scene.text('Vasyan lays you onto your back, using his fingers to stimulate your vaginal lips while sticking his cock into your wet pussy.');
      qspCall(s, 'arousal', 'vaginal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
      qspCall(s, 'arousal', 'end');
    } else {
      if (((s as any).temp_randC ?? 0) === 1) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex6.jpg');
        scene.text('Vasyan roughs you up with his hands and then takes out his dick, forcing you to suck him off.');
        scene.text('He shoves the cock into your mouth and soon cums violently…');
        qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
        qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
      } else {
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex7.jpg');
        scene.text('Vasyan forces you on all fours, telling you that you will enjoy this. Then, he pulls out his dick and starts fucking you in the ass.');
        qspCall(s, 'arousal', 'anal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
        qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pleasure Kolyamba', handler: (st: GameState) => {
    qspCall(s, 'npcStat', 'A61');
    qspCall(s, 'npcStat', 'A62', 'a');
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex8.jpg');
    scene.text('Kolyamba looks you in the eyes and asks if you trust him. You gulp and reply, "Yes." He takes out a blindfold and places it over your eyes so you can\'t see what\'s happening next. Kolyamba then proceeds to take both of your clothes off. You stand in front of him, blindfolded, naked, and full of anticipation.');
    scene.text('He orders you to get down on your knees. He grabs your head and tells you to open your mouth. While pleasuring him, he orders you to stop and moves the cock away from the mouth. He then lies down on the ground and tells you to mount him. You move on top of him while he grabs his cock and leads it inside your ass. He frantically starts thrusting his cock inside your ass, cumming after a short while.');
    qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
    qspCall(s, 'arousal', 'anal', (-10), ((s as any).npcID ?? 0), 'sub', 'group', 'rough');
    qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Pleasure Vasyan', handler: (st: GameState) => {
    (s as any).pose = 1;
    (s as any).temp_randD = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp_randD ?? 0))) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex9.jpg');
      scene.text('Vasyan tells you he heard about a sex position where both of you will reach ecstasy. Intrigued by this, you take your clothes off and start caressing his cock. He removes your hand from his cock and tells you to get down on your hands and knees. Vasya walks behind you, grabs his cock and enters you from behind. You gasp as he mounts you. Soon enough, you both cry out in ecstasy cumming at the same time.');
      qspCall(s, 'arousal', 'bj', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
      qspCall(s, 'arousal', 'vaginal', (-10), ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
      qspCall(s, 'cum_call', '', '', ((s as any).npcID1 ?? 0), 1);
    } else {
      if (((s as any).temp_randD ?? 0) === 1) {
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex10.jpg');
        scene.text('Vasyan steps closer to you and tells you he wants his cock sucked. You drop down on your knees and start sucking his glans.');
        scene.text('Feeling dissatisfied by your performance, he grabs you by the head. He forces his cock deep down your throat, mumbling something about teaching you how to do it properly. Finally, he finishes inside your mouth…');
        qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough', 'deepthroat');
        qspCall(s, 'cum_call', 'mouth', ((s as any).npcID1 ?? 0), 1);
      } else {
        qspCall(s, 'boyStat', 'A62');
        qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
        scene.img('images/locations/gadukino/sex/mitka/mitkaguysriversex11.jpg');
        scene.text('Vasyan forces you to your hands and knees and starts thrusting his dick into your anus.');
        qspCall(s, 'arousal', 'anal', 10, ((s as any).npcID1 ?? 0), 'sub', 'group', 'rough');
        qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0), 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['gad_beach', 'start', '1'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gad_beach', 'start', '1'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'set_swimming_act':
      enterSetSwimmingAct(s, scene);
      break;
    case 'set_sunbath_act':
      enterSetSunbathAct(s, scene);
      break;
    case 'Mira_leaves':
      enterMiraLeaves(s, scene);
      break;
    case 'arrive_Mira_already_there':
      enterArrive_MiraAlreadyThere(s, scene);
      break;
    case 'get_changed':
      enterGetChanged(s, scene);
      break;
    case 'second_thoughts':
      enterSecondThoughts(s, scene);
      break;
    case 'Mira':
      enterMira(s, scene);
      break;
    case 'GuysBeach':
      enterGuysBeach(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_beach: LocationDef = {
  name: 'gad_beach',
  title: '<center><h4>Village Beach</h4></center>',
  region: 'gadukino',
  locationType: 'public_outdoors',
  locclass: 'beach',
  enter: enter,
};
