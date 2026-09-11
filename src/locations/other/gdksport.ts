import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gdksport', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).npc_rel ?? 0)?.['A5'] >= 80  &&  ((s as any).fedorKozlovQW ?? 0) === 0  &&  ((s as any).pcs_hotcat ?? 0) >= 5  &&  ((s as any).fedorkozbreak ?? 0) < 2  &&  ((s as any).fame ?? 0)?.['pav_slut'] <= 75) {
    scene.actions([{ label: 'Continue', goto: ['gdksport', 'Fedor First Date'] }]);
  }
  scene.text('<center><b>Community center</b></center>');
  scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
  scene.text('The community center sports club offers lessons in <a href="exec: gt \'gdksport\',\'racing1\'">Racing</a>, <a href="exec: gt \'gdksport\',\'dance1\'">Dance</a> and <a href="exec: gt \'gdksport\',\'vball1\'">Volleyball</a>.');
  // TODO-QSP: dynamic text: Volleyball and Racing lessons start before '+func('time', 'get_time_string', 18,...
  scene.text('Volleyball and Racing lessons start before \'+func(\'time\', \'get_time_string\', 18, 0)+\', while dancing must start before \'+func(\'time\', \'get_time_string\', 15, 0)+\'.');
  if ((((s as any).temper ?? 0) < 15  ||  ((s as any).sunWeather ?? 0) !== 1)  &&  ((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).bbpickupDay ?? 0) + 14 <= ((s as any).daystart ?? 0)  &&  ((s as any).fbpickupDay ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('As you pass by the sports field, you notice that most of the jocks have gathered around the <a href="exec:gt \'bbgamein\', \'start\'">basketball court</a>.');
  }
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).hour ?? 0) === 16) {
    // TODO-QSP: dynamic text: You see <a href="exec:minut += 3 & gt 'kotovEv'">Vitek</a> entering the sports c...
    scene.text('You see <a href="exec:minut += 3 & gt \'kotovEv\'">Vitek</a> entering the sports club with a large sports bag slung over his shoulder.');
  }
  if (((s as any).npc_rel ?? 0)?.['A3'] >= 60  &&  ((s as any).hour ?? 0) === 17) {
    if (((s as any).ivansportday ?? 0) !== ((s as any).daystart ?? 0)) {
      (s as any).temp_ivan_seen = 1;
      // TODO-QSP: dynamic text: You see <a href="exec:minut += 3 & gt 'IvanEv', 'ivan_vitek_fight1'">Ivan</a> en...
      scene.text('You see <a href="exec:minut += 3 & gt \'IvanEv\', \'ivan_vitek_fight1\'">Ivan</a> entering the sports club carrying a large sports bag.');
    }
    if (((s as any).ivanQW ?? 0)?.['ivan_boxing_invite'] === 1) {
      if ((!((s as any).temp_ivan_seen ?? 0))) {
        scene.text('You see Ivan entering the sports club carrying a large sports bag. He heads into the boxing area of the gym.');
      }
      scene.actions([
        { label: 'Follow Ivan for training', goto: ['IvanEv', 'training'] },
      ]);
    }
  }
  if (((s as any).week ?? 0) <= 5  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).fedorKozlovQW ?? 0) >= 20) {
    scene.text('You can see <a href="exec: gt \'FedorMisc\', \'Fedor Workout\'">Fedor</a> on his phone next to some punching bags.');
  }
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20)) {
    if (((s as any).vballVars ?? 0)?.['coach_leave'] < ((s as any).daystart ?? 0)  &&  (((s as any).vballVars ?? 0)?.['lessons_remaining'] > 0  ||  ((s as any).vballVars ?? 0)?.['on_team'] > 0)) {
      scene.text('<a href="exec: gt \'volley_coach\', \'coach_office\'">Coach Mikhail</a> is probably in his office right now.');
    }
  }
  if (((s as any).starlets_on ?? 0) === 1  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 18) {
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0) {
      if (((s as any).hour ?? 0) < 16) {
        scene.text('Some of the Starlets are already on the floor and warming up.');
      } else {
        if (((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0)) {
          scene.text('Albina and the other Starlets are here, practicing their routine to pop music. You are too late to join them.');
        }
      }
    } else {
      if (((s as any).gsAboDance ?? 0) > 0) {
        scene.text('The space for the dance lessons is occupied by a different group of dancers practicing their routine to pop music. They look pretty good and well coordinated.');
      } else {
        scene.text('A group of dancers is practicing their routine to pop music on the side. They look pretty good and well coordinated.');
      }
    }
  }
  if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).cheerleaders_on ?? 0) === 1  &&  (!((s as any).kanikuli ?? 0))) {
    scene.text('Albina is at cheerleading practice, so there is no Starlets training today.');
  }
  if ((!((s as any).PSport ?? 0))) {
    if (((s as any).PCloSport ?? 0) !== 1) {
      scene.text('<font color = "red">🗴</font> You are not dressed in sports clothes.</font>');
    }
    if (((s as any).PShoSport ?? 0) !== 1) {
      scene.text('<font color = "red">🗴</font> You are not wearing training shoes.</font>');
    }
    scene.text('Sportswear is required for all available classes and activities.');
  }
  // TODO-QSP: dynamic text: In the locker room is a <a href="exec: gt 'mirror','start'">mirror</a>, where yo...
  scene.text('In the locker room is a <a href="exec: gt \'mirror\',\'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh = 0, \'<a href="exec: gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair.');
  if (((s as any).PSport ?? 0) === 1  &&  ((s as any).hour ?? 0) < 18) {
    if (((s as any).gsAboBeg ?? 0) > 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A131'] === 0) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Take a track lesson. You have <<gsAboBeg>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You are too tired to do this. Re...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: 'Take a track lesson. You have <<gsAboBeg>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: 'Take a track lesson. You have <<gsAboBeg>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Take a track lesson. You have <<gsAboBeg>> lessons remaining (2:00)', goto: ['gdksport', 'racing2'] },
            ]);
          }
        }
      }
    }
    qspCall(s, 'volleyball_ev', 'volleyball_menu');
    if (((s as any).gsAboDance ?? 0) > 0  &&  (((s as any).starlets_on ?? 0) === 0  ||  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] > 0  ||  ((s as any).hour ?? 0) < 15)) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Take a dance lesson. You have <<gsAboDance>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'v_neg', '<br>You are too tired to do this. Re...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: 'Take a dance lesson. You have <<gsAboDance>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: 'Take a dance lesson. You have <<gsAboDance>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Take a dance lesson. You have <<gsAboDance>> lessons remaining (2:00)', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['danceGev', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'dance2'] }]);
    }
  } },
            ]);
          }
        }
      }
    }
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).hour ?? 0) === 15  &&  ((s as any).starlets_on ?? 0) === 1) {
        if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
          scene.actions([
            { label: 'Train with Starlets', goto: ['albina_starlets', 'Starletsreact'] },
          ]);
        } else {
          if (((s as any).grupTipe ?? 0) === 5) {
            scene.actions([
              { label: 'Train with Starlets', goto: ['albina_starlets', 'StarletsEnd'] },
            ]);
          } else {
            if (((s as any).starlets_missed ?? 0) === 1) {
              (s as any).starlets_missed = 0;
              (s as any).starlet_practice_skipped = ((s as any).starlet_practice_skipped ?? 0) + (1);
              scene.actions([
                { label: 'Train with Starlets', goto: ['albina_starlets', 'StarletsPracticeMissed'] },
              ]);
            } else {
              scene.actions([
                { label: 'Train with Starlets', goto: ['albina_starlets', 'starlets'] },
              ]);
            }
          }
        }
        qspCall(s, 'pushkin_ballet_evt', 'check_starlets_evt');
        scene.text('Tell Albina you want to <a href="exec:gt \'albina_starlets\', \'Quit\'">quit</a> the Starlets.');
      }
    }
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] > 0  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 0))) {
    scene.actions([
      { label: 'Take a shower', goto: ['gdksport', 'shower'] },
    ]);
  } else {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    scene.actions([
      { label: 'Apply deodorant (<<mc_inventory[\'deodorant\']>> <<iif(mc_inventory[\'deodorant\'] = 1, \'application\', \'applications\')>> left)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_commcenter', ''] }]);
    }
  } },
    { label: 'Change outfit in the locker room', goto: ['wardrobe', 'start'] },
    { label: 'Go to the toilets', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdktoilet', 'start'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterRacing1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Race training costs ' + $func('money', 'string_price', 300) + ' for 30 lessons.
  scene.text('Race training costs \' + $func(\'money\', \'string_price\', 300) + \' for 30 lessons.');
  if (((s as any).gsAboBeg ?? 0) > 0) {
    // TODO-QSP: dynamic text: You have <<gsAboBeg>> lessons remaining.
    scene.text(`You have ${((s as any).gsAboBeg ?? 0)} lessons remaining.`);
  }
  if (((s as any).gsAboBeg ?? 0) <= 0) {
    scene.actions([
      { label: 'Buy 30 racing lessons [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      (s as any).gsAboBeg = 30;
      qspCall(s, 'stat', '');
      scene.text('You pay for 30 racing lessons.');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterDance1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Dance lessons cost ' + $func('money', 'string_price', 300) + ' for 30 lessons.
  scene.text('Dance lessons cost \' + $func(\'money\', \'string_price\', 300) + \' for 30 lessons.');
  if (((s as any).gsAboDance ?? 0) > 0) {
    // TODO-QSP: dynamic text: You have <<gsAboDance>> lessons remaining.
    scene.text(`You have ${((s as any).gsAboDance ?? 0)} lessons remaining.`);
  }
  if (((s as any).gsAboDance ?? 0) <= 0) {
    scene.actions([
      { label: 'Buy 30 dance lessons [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      (s as any).gsAboDance = 30;
      qspCall(s, 'stat', '');
      scene.text('You pay for 30 dance lessons.');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).gsAboDance ?? 0) > 0) {
    scene.actions([
      { label: 'Cancel lessons', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Really cancel your remaining <<gsAboDance>> paid for lessons?
    scene.text(`Really cancel your remaining ${((s as any).gsAboDance ?? 0)} paid for lessons?`);
    scene.actions([
      { label: 'Cancel lessons', handler: (st: GameState) => {
    (s as any).gsAboDance = 0;
    scene.text('You cancel the dance lessons. Unfortunately you couldn\'t get any refund.');
    scene.actions([
      { label: 'Continue', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'No', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterVball1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Volleyball lessons cost ' + $func('money', 'string_price', 300) + ' for 30 lesso...
  scene.text('Volleyball lessons cost \' + $func(\'money\', \'string_price\', 300) + \' for 30 lessons.');
  if (((s as any).vballVars ?? 0)?.['lessons_remaining'] > 0) {
    // TODO-QSP: dynamic text: You have <<vballVars['lessons_remaining']>> lessons remaining.
    scene.text(`You have ${((s as any).vballVars ?? 0)?.['lessons_remaining']} lessons remaining.`);
  }
  if (((s as any).vballVars ?? 0)?.['lessons_remaining'] <= 0) {
    scene.actions([
      { label: 'Buy 30 volleyball lessons [+$func(\'money\', \'get_cost_string\', 300)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      ((s as any).vballVars ?? {})['lessons_remaining'] = 30;
      qspCall(s, 'stat', '');
      scene.text('You pay for 30 volleyball lessons.');
      scene.actions([
        { label: 'Leave', goto: ['gdksport', 'start'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterDance2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/dance_studio/fit1.jpg');
  if (((s as any).pcs_danc ?? 0) < 50) {
    (s as any).gsAboDance = ((s as any).gsAboDance ?? 0) - (1);
    qspCall(s, 'exercise', 'tier2', 120, 'agil', 'danc');
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.text('You take a lesson in modern dance, which is very popular with people your age.');
    if (((s as any).pcs_danc ?? 0) < ((s as any).pcs_agil ?? 0)) {
      scene.text('Your skill still has a ways to go, but your agility helps you pull off some of the dance moves.');
    } else {
      scene.text('Your body lacks the agility to perform the dance moves that you\'re being taught.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } else {
    (s as any).gsAboDance = ((s as any).gsAboDance ?? 0) - (1);
    qspCall(s, 'exercise', 'tier2', 120, 'agil');
    if (((s as any).pcs_inhib ?? 0) < 40) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'stat', '');
    scene.text('You take a lesson in modern dance, which is very popular with people your age.');
    scene.text('While it\'s still good exercise, there\'s nothing more you can learn from this class. You overhear some of the other girls in the class talking about the more advanced lessons that are offered at the fitness center in the city.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).month ?? 0) < 10  ||  (((s as any).month ?? 0) === 10  &&  ((s as any).day ?? 0) < 18))  &&  ((s as any).year ?? 0) === 2016) {
      if (((s as any).start_type ?? 0)?.['cat'] === 'dancer') {
        scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'albina3'] }]);
      } else {
        if ((((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2)  &&  ((s as any).npc_rel ?? 0)?.['A23'] >= 70) {
          scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'albina2'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'albina1'] }]);
        }
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRacing2(s: GameState, scene: SceneBuilder): void {
  (s as any).gsAboBeg = ((s as any).gsAboBeg ?? 0) - (1);
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'exercise', 'tier2', 120, 'run');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/parkbeg.jpg');
  scene.text('You spend 20 minutes on warm up and run for 90 minutes before spending 10 minutes on your cool down.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 0)) {
    (s as any).noshampoo = 1;
  }
  qspCall(s, 'din_van', 'showerdin');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
  (s as any).pcs_makeup = 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/shared/home/bathroom/dush.mp4');
  if (((s as any).IvanShowerYes ?? 0) === 1  &&  (Math.floor(Math.random() * 4) + 0) === 1  &&  ((s as any).ShowerIvan ?? 0) < 3) {
    if (((s as any).ShowerIvan ?? 0) === 1) {
      (s as any).ShowerIvan = 2;
    }
    scene.text('You enter the shower and turn the water on. As you start lathering up your body with a washcloth, you suddenly hear the door creak open and remember that you agreed not to lock it for Ivan.');
    // TODO-QSP: dynamic text: You look around and see him standing there looking at you with a smile. "Hey <<$...
    scene.text(`You look around and see him standing there looking at you with a smile. "Hey ${((s as any).pcs_nickname ?? 0)}. The men's shower is full, so I thought I could join you instead?"`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not today [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/shower/shower1.jpg');
    scene.text('You cover your breasts with one hand and turn sideways, crossing your legs while flashing Ivan your best smile. "How about another time? I\'m not feeling it right now."');
    scene.text('Ivan just laughs and walks out of the room. You quickly lock the door before finishing your shower in peace.');
    scene.actions([
      { label: 'Leave the shower', goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Shower with Ivan', goto: ['gdksport', 'ShowerWithIvan'] },
    ]);
  } else {
    if ((((s as any).kotovVSprohorov ?? 0) === 1  ||  (((s as any).IvanShowerQW ?? 0) === 2  &&  (Math.floor(Math.random() * 4) + 0) === 1))  &&  ((s as any).ShowerIvan ?? 0) < 3) {
      scene.text('You enter the shower and turn the water on. As you lather your body with a washcloth, you suddenly hear the door creak open and remember that you forgot to lock it.');
      // TODO-QSP: dynamic text: You look around and see Ivan standing in the doorway looking at you. "Hi <<$pcs_...
      scene.text(`You look around and see Ivan standing in the doorway looking at you. "Hi ${((s as any).pcs_nickname ?? 0)}. Can I join you? The men's shower is full' + iif(IvanShowerQW = 2, ' again', ') + '."`);
      (s as any).kotovVSprohorov = 2;
      (s as any).IvanShowerQW = 2;
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Throw him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Throw him out [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/shower/shower1.jpg');
    scene.text('You cover your breasts with one hand and turn sideways, crossing your legs as you hurl your washcloth at Ivan.');
    scene.text('He easily dodges the flying cloth and laughs as he exits the room. You quickly lock the door before finishing your shower in peace.');
    scene.actions([
      { label: 'Leave the shower', goto: ['gdksport', 'start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'What?', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/shower2.jpg');
    scene.text('You\'re completely surprised by Ivan\'s sudden appearance and can only stand in silence. He takes this as consent and closes the door behind him.');
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Escape from the shower [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Escape from the shower [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/shower/shower1.jpg');
    scene.text('You cover your breasts with one hand as you quickly grab your towel and run from the shower. As you run into the changing room, you can hear Ivan laughing.');
    scene.actions([
      { label: 'Leave the shower', goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wash together', handler: (st: GameState) => {
    (s as any).IvanShowerQW = 1;
    (s as any).IvanShowerYes = 0;
    if ((!((s as any).ShowerIvan ?? 0))) {
      (s as any).ShowerIvan = 1;
    }
  }, goto: ['gdksport', 'ShowerWithIvan'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You enter the shower and turn the water on before you lather your body with a washcloth and start cleaning yourself.');
      if ((((s as any).vballVars ?? 0)?.['coach_lust'] >= 40  ||  ((s as any).vballVars ?? 0)?.['coachsex'] === 1)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  (!((s as any).voltrenerVoyeur ?? 0))) {
        scene.actions([
          { label: 'Continue', goto: ['volley_coach_shower', '0'] },
        ]);
      } else {
        if ((((s as any).vballVars ?? 0)?.['coach_lust'] >= 40  ||  ((s as any).vballVars ?? 0)?.['coachsex'] === 1)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).voltrenerVoyeur ?? 0) === 1) {
          scene.actions([
            { label: 'Continue', goto: ['volley_coach_shower', '1'] },
          ]);
        } else {
          if ((((s as any).vballVars ?? 0)?.['coach_lust'] >= 40  ||  ((s as any).vballVars ?? 0)?.['coachsex'] === 1)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  ((s as any).voltrenerVoyeur ?? 0) === 2  &&  (!((s as any).IvanShowerYes ?? 0))) {
            scene.actions([
              { label: 'Continue', goto: ['volley_coach_shower', '2'] },
            ]);
          } else {
            scene.text('After your shower, you get dressed.');
            scene.actions([
              { label: 'Leave the shower', goto: ['gdksport', 'start'] },
            ]);
          }
        }
      }
    }
  }
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowerWithIvan(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bathroom/dush.mp4');
  scene.text('Ivan walks over to you, pulling his boxer shorts down and stepping out of them as they fall around his ankles. Stepping into the shower with you, he gets himself wet under the water.');
  scene.text('You try not to look at him, but your eyes involuntarily drop to his groin.');
  scene.text('"Want to wash me?" he asks with a wink when he notices you staring.');
  qspCall(s, 'arousal', 'foreplay', 5);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lather Ivan', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'A3');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/shower/shower.jpg');
    // TODO-QSP: dynamic text: You take your washcloth and begin to lather Ivan's body. As you move around him,...
    scene.text(`You take your washcloth and begin to lather Ivan's body. As you move around him, you notice his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock begin to get hard as Ivan caresses you.`);
    scene.text('After a few minutes, you feel his hands on your shoulders as he gently but firmly pushes you down to your knees.');
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Give him a blowjob', handler: (st: GameState) => {
    ((s as any).npc_had_sex ?? {})['A3'] = 1;
    ((s as any).ivanQW ?? {})['sex'] = (((s as any).ivanQW ?? {})['sex'] ?? 0) + (1);
    scene.img('images/shared/sex/blowjob/shover.jpg');
    // TODO-QSP: dynamic text: You slowly sink to your knees in front of Ivan and part your lips, letting his <...
    scene.text(`You slowly sink to your knees in front of Ivan and part your lips, letting his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slide into your mouth.`);
    scene.text('Your lips tightly wrap around Ivan\'s solid rod and you start sucking before he suddenly pulls his dick out of your mouth and takes you by the hand, pulling you back up to your feet. He brings his lips to your breast and bliss sweeps over you as he suckles your stiff nipple.');
    scene.text('Releasing your nipple with a wet pop, he pushes you back onto your knees before sliding his cock back into your mouth.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'That\'s enough for now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'That\'s enough for now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'anal', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/ivan/sex/community/shower/shower1.jpg');
    scene.text('Ivan pauses for a brief second and you use the chance to quickly stand up and jump out of the shower.');
    scene.text('"I think you\'ve had enough of me for today," you tell him. "Maybe you can have more next time."');
    scene.actions([
      { label: 'Leave the shower', goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Allow him to continue', handler: (st: GameState) => {
    if (((s as any).pcs_throat ?? 0) < 15) {
      scene.img('images/shared/sex/blowjob/shower6.mp4');
      scene.text('Feeling his cock pushing into your throat, your gag reflex overwhelms you and nearly causes you to vomit as you quickly pull yourself off of his dick.');
      scene.text('"My mouth isn\'t some bottomless hole for you to shove your dick into, you know!" you scream as you wipe away your tears and drool.');
      scene.text('He gives you a guilty look before he pulls you to your feet again and kisses you and caresses your breasts and ass until you begin to moan with desire. He then turns you around and bends you over.');
    } else {
      scene.img('images/shared/sex/blowjob/shower7.mp4');
      scene.text('Feeling his cock pushing into your throat, you take his member to the base without any problems, causing Ivan to groan loudly in pleasure.');
      scene.text('Feeling that he\'s going to cum at any moment, you pull your mouth off of his cock before turning around and bending over, presenting your ass to him.');
    }
    if (((s as any).agape ?? 0) > 0) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).pcs_throat ?? 0) < ((s as any).dick ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    }
    scene.img('images/shared/sex/cum/mouth/cum49.jpg');
    // TODO-QSP: dynamic text: Expecting to feel his <<dick>>cm <<$dick_girth>> cock slide into your pussy at a...
    scene.text(`Expecting to feel his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock slide into your pussy at any moment, you're surprised when you feel it pressing against your asshole instead.`);
    scene.text('"Wrong hole, Ivan!" you say, but he just snorts in response before he pushes the head of his cock into your ass, causing you to moan in a mixture of pain and pleasure.');
    scene.text('He takes it slow, giving you time to adjust before he pushes it in deeper, slowly working himself into your ass.');
    scene.text('You brace yourself against the wall with one hand while using the other to rub your clit. After a while, you feel your ass starting to get sore and your moans of pleasure start to turn into grunts of pain.');
    scene.text('Apparently sensing your growing discomfort, he makes one last powerful thrust before he pulls out of your ass and pushes you back down on your knees. He then shoves his cock in your mouth.');
    scene.text('You quickly suck him off and he soon shoots his load into your mouth. Once he\'s done, he finishes his shower.');
    scene.text('"That was great. We should do that again sometime," he smiles as he gets dressed before leaving the room.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'clit_finger', (-5));
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth', 'A3', 1);
    (s as any).cumspclnt = 1;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the shower', goto: ['gdksport', 'start'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Turn around and bend over', handler: (st: GameState) => {
    (s as any).lubonus = 2;
    if (((s as any).pcs_ass ?? 0) + ((s as any).lubonus ?? 0) + 2 < ((s as any).dick ?? 0)) {
      if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
        (s as any).pcs_makeup = 0;
      }
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
      qspCall(s, 'mood', 'lower', 'medium');
      if (((s as any).agape ?? 0) < 3) {
        (s as any).agape = 3;
      }
    } else {
      if (((s as any).pcs_ass ?? 0) < ((s as any).dick ?? 0)) {
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
        if (((s as any).agape ?? 0) < 2  &&  (!((s as any).lubonus ?? 0))) {
          (s as any).agape = 2;
        }
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/vag/doggy/shover2.mp4');
    scene.text('As you bend over, you feel Ivan\'s hand stroking your ass before his finger starts to massage your anus.');
    scene.text('"Uh… That\'s my <i>other</i> hole, Ivan…" you tell him.');
    // TODO-QSP: dynamic text: "Yeah, I know," he snorts in response before he pushes the head of his <<dick>>c...
    scene.text(`"Yeah, I know," he snorts in response before he pushes the head of his ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} cock into your ass, causing you to moan in a mixture of pain and pleasure. He takes it slow, giving you time to adjust before he pushes it in deeper, slowly working himself into your ass.`);
    scene.text('You brace yourself against the wall with one hand while using the other to rub your clit as you buck your hips back against him, fucking him as much as he is fucking you.');
    qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
    qspCall(s, 'arousal', 'clit_finger', (-5));
    qspCall(s, 'stat', '');
    if (((s as any).voltrenerVoyeur ?? 0) === 3) {
      scene.actions([
        { label: 'Continue', goto: ['volley_coach_shower', '3'] },
      ]);
    } else {
      if (((s as any).voltrenerVoyeur ?? 0) === 4) {
        scene.actions([
          { label: 'Continue', goto: ['volley_coach_shower', '4'] },
        ]);
      } else {
        if (((s as any).voltrenerVoyeur ?? 0) === 5) {
          scene.actions([
            { label: 'Continue', goto: ['volley_coach_shower', '5'] },
          ]);
        } else {
          if (((s as any).pcs_horny ?? 0) >= 100) {
            if (((s as any).stat ?? 0)?.['anal'] >= 10  &&  ((s as any).orgasm ?? 0) > 0) {
              qspCall(s, 'mood', 'raise', 'small');
              qspCall(s, 'arousal', 'anal', (-5), 'sub', 'rough');
            }
          }
          scene.text('A few seconds later, he makes one last powerful thrust before his body spasms against yours and you feel him cumming in your ass.');
          scene.text('Once he\'s done, he pulls out of you and finishes his shower as you feel his cum trickle out of your ass and run down your leg.');
          scene.text('"That was great. We should do that again sometime," he smiles as he gets dressed before leaving the room.');
          qspCall(s, 'cum_call', 'anus', 'A3', 1);
          (s as any).cumspclnt = 1;
          qspCall(s, 'cum_cleanup', '');
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Leave the shower', goto: ['gdksport', 'start'] },
          ]);
        }
      }
    }
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFedorFirstDate(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big5.jpg');
  if (((s as any).fedorkozbreak ?? 0) === 1) {
    scene.text('You enter the sports club and see Fedor standing by the front door. He looks as though he\'s waiting for someone and as soon as he sees you, he flashes you a smile and approaches with an affable smile on his face.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>," he says with a warm smile. He pauses for a moment, t...
    scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}," he says with a warm smile. He pauses for a moment, then reaches into his pockets and pulls out 2 tickets. "Here's the deal. I know that we had a bit of a bumpy relationship before, but I'd like to try again. So what do you say? Wanna go on another date with me?"`);
  } else {
    scene.text('You enter the sports club and see Fedor standing by the front door. He looks as though he\'s waiting for someone and as soon as he sees you, his eyes light up and he approaches you with an affable smile on his face.');
    // TODO-QSP: dynamic text: "Hello <<$pcs_firstname>>," he says with a warm smile. He pauses for a moment, t...
    scene.text(`"Hello ${((s as any).pcs_firstname ?? 0)}," he says with a warm smile. He pauses for a moment, then reaches into his pockets and pulls out 2 tickets. "Here's the deal. I have an extra ticket to the movies and I'd like know if you would be up for a good comedy?"`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/park/walk.jpg');
    scene.text('"I\'d like that," you say with a smile.');
    scene.text('"Good," Fedor responds. "I hear that this movie will have us in stiches."');
    scene.text('With a delighted look on his face, he wraps his arm around yours and walks you to the movie theater.');
    scene.actions([
      { label: 'Watch a movie', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'mood', 'raise', 'huge');
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/cinema/kino_1.jpg');
    scene.text('Fedor presents the tickets at the entrance and you walk into the theater. You look around and notice that the seats are mostly empty, so Fedor leads you to the front row and you both sit down.');
    scene.text('The lights dim and the movie starts. Fedor sits motionless and only occasionally glances at you. The movie is quite interesting and you can\'t help but laugh occasionally at the wackiness of it.');
    // TODO-QSP: dynamic text: When the movie ends, the lights turn on and Fedor walks you out. "You seem like ...
    scene.text(`When the movie ends, the lights turn on and Fedor walks you out. "You seem like a cool girl, ${((s as any).pcs_firstname ?? 0)}. Maybe we could go out together? What do you say?"`);
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A5', 20);
    (s as any).fedorKozlovQW = 10;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/park/walk.jpg');
    scene.text('"Sure! I\'d love to go out with you," you reply and Fedor is visibly delighted.');
    scene.text('"Alright, I look forward to hanging out with you again. Whenever you\'re up for another date, then meet me in the school yard, after school."');
    scene.text('The two of you have fun discussing your favorite movies as you walk home.');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    if ((!((s as any).fedorkozbreak ?? 0))) {
      (s as any).fedorKozlovQW = 0;
    }
    if (((s as any).fedorkozbreak ?? 0) === 1) {
      (s as any).fedorKozlovQW = (-1);
    }
    if (((s as any).npc_rel ?? 0)?.['A5'] > 70) {
      qspCall(s, 'npc_relationship', 'set', 'A5', 70);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A5', 'loathe');
    }
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    if (((s as any).fedorkozbreak ?? 0) === 1) {
      scene.text('You shake your head. "Sorry Fedor, but I don\'t think that this is really working out."');
      scene.text('Fedor looks visibly upset. "I guess it was never meant to be. I\'m sorry for wasting your time…"');
      scene.text('He then silently walks you home.');
    } else {
      scene.text('You shake your head. "You seem like a cool guy, but I\'m just not ready for a relationship right now."');
      scene.text('Fedor is visibly upset. "I guess it wasn\'t a good time. If you ever change your mind, then pay me a visit at school," he says with a forced smile before he silently walks you home.');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Refuse', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A5'] > 70) {
      qspCall(s, 'npc_relationship', 'set', 'A5', 70);
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A5', 'loathe');
    }
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/fedorsad.jpg');
    scene.text('You shake your head. "I have too much that I need to do right now. Maybe some other time."');
    scene.text('Fedor lowers his head with a frown. "Okay. Maybe some other time then."');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJocksAcceptance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).jock_check ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).jock_check = ((s as any).daystart ?? 0);
    if (((s as any).PCloQuality ?? 0) >= 4) {
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).PCloInhibit ?? 0) >= 35) {
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    } else {
      if (((s as any).PCloInhibit ?? 0) >= 20) {
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
      } else {
        if (((s as any).PCloInhibit ?? 0) <= 10) {
          ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
        }
      }
    }
    if (((s as any).PShoStyle2 ?? 0) !== 2) {
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    } else {
      if (((s as any).PShoQuality ?? 0) > 5) {
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'racing1':
      enterRacing1(s, scene);
      break;
    case 'dance1':
      enterDance1(s, scene);
      break;
    case 'vball1':
      enterVball1(s, scene);
      break;
    case 'dance2':
      enterDance2(s, scene);
      break;
    case 'racing2':
      enterRacing2(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'ShowerWithIvan':
      enterShowerWithIvan(s, scene);
      break;
    case 'Fedor First Date':
      enterFedorFirstDate(s, scene);
      break;
    case 'jocks_acceptance':
      enterJocksAcceptance(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gdksport: LocationDef = {
  name: 'gdksport',
  title: 'Community center',
  region: 'other',
  locationType: 'bathroom',
  enter: enter,
};
