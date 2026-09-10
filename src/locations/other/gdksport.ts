import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
        scene.text('Albina and the other Starlets are here, practicing their routine to pop music. You are too late to join them.');
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
        scene.actions([
          { label: 'Take a track lesson. You have <<gsAboBeg>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        ]);
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
          scene.actions([
            { label: 'Take a dance lesson. You have <<gsAboDance>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        }
        if (((s as any).AlbinaQW ?? 0)?.['StarletsJoined'] > 0  &&  ((s as any).AlbinaQW ?? 0)?.['StarletsShutDown'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A23'] === 0  &&  ((s as any).AlbinaQW ?? 0)?.['startletsday'] !== ((s as any).daystart ?? 0)) {
          if (((s as any).hour ?? 0) === 15  &&  ((s as any).starlets_on ?? 0) === 1) {
            if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
              scene.actions([
                { label: 'Train with Starlets', goto: ['albina_starlets', 'Starletsreact'] },
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
              qspCall(s, 'pushkin_ballet_evt', 'check_starlets_evt');
              scene.text('Tell Albina you want to <a href="exec:gt \'albina_starlets\', \'Quit\'">quit</a> the Starlets.');
              scene.actions([
                { label: 'Train with Starlets', goto: ['albina_starlets', 'StarletsEnd'] },
              ]);
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
    (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
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
        scene.actions([
          { label: 'Change outfit in the locker room', goto: ['wardrobe', 'start'] },
          { label: 'Go to the toilets', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdktoilet', 'start'] }]);
    }
  } },
        ]);
      }
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
  }
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_commcenter', ''] }]);
    }
  } },
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
        scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'albina2'] }]);
        scene.actions([{ label: 'Continue', goto: ['albina_starlets', 'albina1'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['gdksport', 'start'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterRacing2(s: GameState, scene: SceneBuilder): void {
  (s as any).gsAboBeg = ((s as any).gsAboBeg ?? 0) - (1);
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'exercise', 'tier2', 120, 'run');
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/park/parkbeg.jpg');
  scene.text('You spend 20 minutes on warm up and run for 90 minutes before spending 10 minutes on your cool down.');
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
        { label: 'Not today', handler: (st: GameState) => {
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
        { label: 'Throw him out', handler: (st: GameState) => {
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
    scene.text('You enter the shower and turn the water on before you lather your body with a washcloth and start cleaning yourself.');
    if ((((s as any).vballVars ?? 0)?.['coach_lust'] >= 40  ||  ((s as any).vballVars ?? 0)?.['coachsex'] === 1)  &&  (Math.floor(Math.random() * 4) + 0) === 0  &&  (!((s as any).voltrenerVoyeur ?? 0))) {
      scene.actions([
        { label: 'Continue', goto: ['volley_coach_shower', '0'] },
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
      scene.actions([
        { label: 'Continue', goto: ['volley_coach_shower', '1'] },
      ]);
    }
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
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
        { label: 'Escape from the shower', handler: (st: GameState) => {
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
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const gdksport: LocationDef = {
  name: 'gdksport',
  title: 'Community center',
  region: 'other',
  locationType: 'bathroom',
  description: ['You see Ivan entering the sports club carrying a large sports bag. He heads into the boxing area of the gym.'],
  enter: enter,
};
