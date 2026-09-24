import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'home');
  (s as any).location_type = 'private';
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if ((!((s as any).shgopsex_init ?? 0))) {
    qspCall(s, 'gopsex', 'settings');
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You\'re at the door to the Shulgin apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Knock on door', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
    if (((st as any).week ?? 0) < 6  &&  ((st as any).hour ?? 0) >= 10  &&  ((st as any).hour ?? 0) < 16) {
      scene.text('You knock on the door, but no one comes to answer. It seems like nobody is home.');
      if (((st as any).npc_rel ?? 0)?.['A112'] >= 70) {
        scene.text('You could still enter with the key that Sergey gave you.');
        scene.actions([
          { label: 'Unlock the door and enter', goto: ['vasilyhome', 'hallway'] },
        ]);
      }
    } else {
      if (((st as any).hour ?? 0) >= 16  &&  ((st as any).hour ?? 0) <= 19) {
        scene.img('images/characters/shared/headshots_main/big112.jpg');
        // TODO-QSP: dynamic text: When you knock on the door, <<$serg_obr>> Sergey answers it.
        scene.text(`When you knock on the door, ${((st as any).serg_obr ?? '')} Sergey answers it.`);
        // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>," he shrugs. "If you''re looking for Vasily, he''s ...
        scene.text(`"Oh, hello ${((st as any).pcs_nickname ?? '')}," he shrugs. "If you're looking for Vasily, he's not here, and I don't know when he'll be back."`);
        if (((st as any).npc_rel ?? 0)?.['A112'] >= 50) {
          scene.text('"You can come in and wait for him if you want," he offers.');
          scene.actions([
            { label: 'Enter', goto: ['vasilyhome', 'hallway'] },
          ]);
        }
      } else {
        if ((((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6)  &&  ((st as any).hour ?? 0) >= 20) {
          scene.img('images/characters/shared/headshots_main/big112.jpg');
          // TODO-QSP: dynamic text: When you knock on the door, <<$serg_obr>> Sergey answers it.
          scene.text(`When you knock on the door, ${((st as any).serg_obr ?? '')} Sergey answers it.`);
          // TODO-QSP: dynamic text: "Oh, hello <<$pcs_nickname>>," he shrugs. "If you''re looking for Vasily, he''s ...
          scene.text(`"Oh, hello ${((st as any).pcs_nickname ?? '')}," he shrugs. "If you're looking for Vasily, he's not here. He's probably at the disco with everyone else."`);
          if (((st as any).npc_rel ?? 0)?.['A112'] >= 50) {
            scene.text('"You can come in and wait for him if you want," he offers.');
            scene.actions([
              { label: 'Enter', goto: ['vasilyhome', 'hallway'] },
            ]);
          }
        } else {
          if (((st as any).hour ?? 0) >= 2  &&  ((st as any).hour ?? 0) < 5) {
            scene.text('You move your hand to knock on the door, but stop yourself. It\'s too late for a visit; you\'d wake everyone up!');
            if (((st as any).npc_rel ?? 0)?.['A112'] >= 70) {
              scene.text('You could use the key that Sergey gave you to enter the apartment quietly.');
              scene.actions([
                { label: 'Unlock the door and enter', goto: ['vasilyhome', 'hallway'] },
              ]);
            }
          } else {
            if (((st as any).hour ?? 0) >= 5  &&  ((st as any).hour ?? 0) < 10) {
              scene.text('You move your hand to knock on the door, but stop yourself. It\'s too early and they won\'t be out of bed yet.');
              if (((st as any).npc_rel ?? 0)?.['A112'] >= 70) {
                scene.text('You could use the key that Sergey gave you to enter the apartment quietly.');
                scene.actions([
                  { label: 'Unlock the door and enter', goto: ['vasilyhome', 'hallway'] },
                ]);
              }
            } else {
              scene.text('The door is opened by Vasily, who looks at you for a second before he stands aside to let you in.');
              scene.actions([
                { label: 'Enter', goto: ['vasilyhome', 'hallway'] },
              ]);
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_3'] },
    ]);
  } },
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_3'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'hallway');
  (s as any).location_type = 'public_indoors';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/korr.jpg');
  scene.text('The hallway of Uncle Sergey\'s apartment is similar to every other one in the complex. There are several doors leading to the various rooms. The first bedroom is Uncle Sergey\'s, while the second one is Vasily\'s. There\'s also the kitchen, bathroom, and finally the living room.');
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
    scene.text('There are several <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">closets</a> in the hall, which Sergey said you can use to store your clothes while you\'re staying here</a>, and a large tall <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> on one of the doors.');
    if (((s as any).home ?? 0)?.['current'] === 'shulga_apartment'  &&  ((s as any).prostitute ?? 0)?.['active']) {
      qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    }
  } else {
    scene.text('There are several closets in the hall</a> and a large tall <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> on one of the doors.');
  }
  if (((s as any).momslut ?? 0) >= 1  &&  ((s as any).sexev_momgg_day ?? 0) !== ((s as any).daystart ?? 0)) {
    if (((s as any).locat ?? 0)?.['Fam_inGad'] === 0  &&  ((s as any).hour ?? 0) < 23  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 15)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10))) {
      if ((Math.floor(Math.random() * 5) + 1) === 1) {
        (s as any).temprand = (Math.floor(Math.random() * 5) + 1);
        if (((s as any).temprand ?? 0) <= 2) {
          scene.text('You hear some strange sounds coming from uncle Sergey\'s room. You could go and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasily_home_sex/u0027, /u0027vasily_home_momgg1/u0027); return false;">see</a> what\'s causing them.');
        } else {
          if (((s as any).temprand ?? 0) <= 4) {
            scene.text('You hear some strange sounds coming from uncle Sergey\'s room, leaving no doubt as to what\'s happening there. You could go and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasily_home_sex/u0027, /u0027vasily_home_momgg2/u0027); return false;">see</a> who\'s with him.');
          } else {
            scene.text('You hear some strange sounds coming from uncle Sergey\'s room, leaving no doubt as to what\'s happening there. It doesn\'t sound like he\'s the only person in there though! You could go and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasily_home_sex/u0027, /u0027vasily_home_momggbang/u0027); return false;">see</a> who else is in there.');
          }
        }
      }
      (s as any).sexev_momgg_day = ((s as any).daystart ?? 0);
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: '<b>Leave the apartment</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    // TODO-QSP: killvar 'boy'
  }, goto: ['pod_ezd', 'etaj_3'] },
    ]);
  } else {
    scene.text('You can not leave the apartment while naked.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Go to the bathroom', goto: ['vasilyhome', 'bathroom'] },
    { label: 'Go to the kitchen', goto: ['vasilyhome', 'vasilykitchen'] },
    { label: 'Go to Sergey\'s room', goto: ['vasilyhome', 'sergey_room'] },
    { label: 'Go to Vasily\'s room', goto: ['vasilyhome', 'vasily_room'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'livingroom');
  if (((s as any).bazar_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).bazar_count = 10;
  }
  if (((s as any).bazar_day_den ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).bazar_count_den = 5;
  }
  if (((s as any).bazar_day_vitek ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).bazar_count_vitek = 5;
  }
  if (((s as any).playcardgame_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).playcardgame_count = 2;
  }
  if (((s as any).sh_hooker_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sh_hooker_count = 1;
  }
  if (((s as any).shulga_lern_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).shulga_lern_count = 1;
  }
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  (s as any).internetS = ((s as any).internet ?? 0);
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom.jpg');
  if (((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) <= 23  &&  ((s as any).shulga_whore ?? 0) !== 0  &&  ((s as any).shulga_whore ?? 0) !== ((s as any).daystart ?? 0) + 7) {
    if (((s as any).shulga_whore ?? 0) < ((s as any).daystart ?? 0)) {
      (s as any).shulga_whore = ((s as any).daystart ?? 0) + 7;
      qspCall(s, 'fame', 'pav', 'sex', 20);
      // TODO-QSP: dynamic text: As you walk in, the boys are already laughing. "Too late <<$pcs_nickname>>, the ...
      scene.text(`As you walk in, the boys are already laughing. "Too late ${((s as any).pcs_nickname ?? '')}, the whole school now knows what a whore you are. Since you're here, you might as well fuck us like the good little slut you are."`);
      qspCall(s, 'willpower', 'misc', 'self', 'hard');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Put an end to this', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Put an end to this', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', 'hard');
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).shulga_whore = 0;
    scene.text('You laugh back at them. "Like I care what anyone in this crap hole thinks."');
    scene.actions([
      { label: 'Leave', goto: ['vasilyhome', 'hallway'] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'misc', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Run out of the room crying', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Run out of the room crying', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'hallway'] },
        ]);
      }
      scene.actions([
{ label: 'Get naked', goto: ['vasily_home_sex', 'gang_sex_room_ev1_1'] },
]);
      return;
    } else {
      (s as any).shulga_whore = ((s as any).daystart ?? 0) + 7;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: You walk into the room and the boys smile at you. "Well look who it is. <<$pcs_n...
      scene.text(`You walk into the room and the boys smile at you. "Well look who it is. ${((s as any).pcs_nickname ?? '')}, our own personal fuck slut. Isn't that right, slut?"`);
      scene.text('You nod your head, knowing you have no choice but to obey. "Yes, I\'m your fuck slut…"');
      scene.text('Laughing, they look at each other. "Damn, if we don\'t have the bitch well trained." Then they look back at you. "So? Take off your clothes then!"');
      scene.text('You walk over to them while taking off your clothes.');
      scene.actions([
{ label: 'Serve them', goto: ['vasily_home_sex', 'gang_sex_room_ev1_2'] },
]);
      return;
    }
  }
  if ((((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1)  &&  ((s as any).sh_hooker_count ?? 0) > 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    qspGoto(s, 'vasilyhome', 'sh_hooker');
  }
  (s as any).roomsex_sonia = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).roomsex_sonia ?? 0) <= 5  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 1  &&  ((s as any).sexev_sonya_count ?? 0) > 0  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20))) {
    qspGoto(s, 'vasilyhome', 'vasily_sex_sonya');
  }
  if (((s as any).roomsex_sonia ?? 0) >= 97  &&  ((s as any).soniaQW ?? 0)?.['slut'] >= 3  &&  ((s as any).sexev_sonya_count ?? 0) > 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    qspGoto(s, 'vasily_home_sex', 'gang_sex_sonya');
  }
  qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
  scene.text('There are two sofas next to a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027shultv/u0027); return false;">TV</a>, and a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">laptop</a> sitting on a table covered in empty beer bottles.');
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shulga_room_rnd = 'The boys are sitting on the couch talking and drinking beer.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shulga_room_rnd = 'The boys are drinking beer and playing cards.';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shulga_room_rnd = 'The boys are drinking beer while watching TV.';
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: <<$shulga_room_rnd>> <a href="exec: gt ''vasilyhome'', ''vasily_bazar_night''">V...
    scene.text(`${((s as any).shulga_room_rnd ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vasily_bazar_night/u0027); return false;">Vasily</a>, <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027dan_bazar/u0027); return false;">Dan</a> and <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vitek_bazar/u0027); return false;">Vitek</a>, invites you to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vasily_beer/u0027); return false;">have a drink with them</a>.`);
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20)) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vasily_bazar_day/u0027); return false;">Vasily</a> is sitting on the big sofa.');
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Drink beer with the guys', goto: ['vasilyhome', 'vasily_beer'] },
      { label: 'Play cards', goto: ['cardgame_durak', 'start'] },
    ]);
  }
  if (((s as any).shulga_lern_count ?? 0) > 0  &&  ((s as any).lernHome ?? 0) > 0  &&  ((s as any).kanikuli ?? 0) === 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20))) {
    scene.actions([
      { label: 'Do homework with Vasily', goto: ['vasilyhome', 'vasily_lern'] },
    ]);
  }
  if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17  &&  ((s as any).npc_rel ?? 0)?.['A11'] >= 70)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).npc_rel ?? 0)?.['A11'] >= 70)  ||  (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 150  &&  ((s as any).alko ?? 0) >= 1)) {
    if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
      qspCall(s, 'willpower', 'sex', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Seduce the guys', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Seduce the guys', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    qspCall(st, 'willpower', '');
  }, goto: ['gopsex', 'gopsex_select'] },
        ]);
      }
    } else {
      if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20)) {
        qspCall(s, 'willpower', 'sex', 'self', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Seduce Vasily', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Seduce Vasily', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    qspCall(st, 'willpower', '');
  }, goto: ['gopsex', 'gopsex_select'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to hallway', goto: ['vasilyhome', 'hallway'] },
    { label: 'Sit on the small sofa', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/sdivan.jpg');
    scene.text('<center>A small sofa just big enough for you to curl up and take a nap on.</center>');
    scene.actions([
      { label: 'Look around the room', goto: ['vasilyhome', 'livingroom'] },
      { label: 'Take an hour long nap (1:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', '');
  } },
      { label: 'Sleep for a few hours', handler: (st: GameState) => {
    if (((st as any).pcs_sleep ?? 0) < 90) {
      // TODO-QSP: sleepVars['no_health']
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (5);
      qspCall(st, 'sleep_simple', 'forced', 240);
      scene.text('You sleep for about four hours.');
      scene.actions([
        { label: 'Get up', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.text('You\'re not tired enough to sleep, even for a short nap.');
      scene.actions([
        { label: 'Stand up', goto: ['vasilyhome', 'livingroom'] },
      ]);
    }
  } },
    ]);
  } },
    { label: 'Watch TV', goto: ['vasilyhome', 'shultv'] },
  ]);
  scene.build();
}

function enterShHooker(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/gopsex/body/h` + (Math.floor(Math.random() * 10) + 1) + '.jpg"></center>');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave feigning resentment', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave feigning resentment', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'hallway'] },
    ]);
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why on earth are dressed like a whore? You know damn well we...
    scene.text(`"${((s as any).pcs_nickname ?? '')}, why on earth are dressed like a whore? You know damn well we aren't going to pay you for it," Vasily jokes.`);
    scene.text('Dan and Vitek snicker and start throwing catcalls your way.');
    scene.text('"I come over dressed like this for you guys and this is how you greet me? I guess I\'ll just be on my way then…" you say as you turn toward the door.');
    // TODO-QSP: dynamic text: "Wait <<$pcs_nickname>>, it was just a joke. We didn''t mean to offend you. Why ...
    scene.text(`"Wait ${((s as any).pcs_nickname ?? '')}, it was just a joke. We didn't mean to offend you. Why don't you come over and let us make it up to you?" Vasily asks with a grin.`);
    scene.actions([
      { label: 'Sigh dramatically and open your arms', handler: (st: GameState) => {
    (st as any).shgopsex_gr_day = ((st as any).daystart ?? 0);
    (st as any).shgopsex_gr_count = ((st as any).shgopsex_gr_count ?? 0) - (1);
    (st as any).sh_hooker_day = ((st as any).daystart ?? 0);
    (st as any).sh_hooker_count = ((st as any).sh_hooker_count ?? 0) - (1);
    qspCall(st, 'gopsex', 'settings');
    qspCall(st, 'gopsex', 'shgopsex_group');
  } },
    ]);
  } else {
    if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20)) {
      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, why are you dressed like a whore? Did you leave work in ...
      scene.text(`"Hey ${((s as any).pcs_nickname ?? '')}, why are you dressed like a whore? Did you leave work in such a hurry that you forgot to change your uniform?" Vasily asks sarcastically.`);
      scene.text('"Listen you jerk, I came here dressed like this for you. If you want I can turn around and head right back out that door," you say while putting on your best pouty expression.');
      // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>, it was just a bad joke. Let''s just kiss and make up...
      scene.text(`"Come on ${((s as any).pcs_nickname ?? '')}, it was just a bad joke. Let's just kiss and make up," Vasily smiles as he unzips his pants.`);
      scene.actions([
        { label: 'Accept his apology', handler: (st: GameState) => {
    (st as any).gopsex_n_npc = 1;
    (st as any).shgopsex_vasya_day = ((st as any).daystart ?? 0);
    (st as any).shgopsex_vasya_count = ((st as any).shgopsex_vasya_count ?? 0) - (1);
    (st as any).sh_hooker_day = ((st as any).daystart ?? 0);
    (st as any).sh_hooker_count = ((st as any).sh_hooker_count ?? 0) - (1);
    qspCall(st, 'boyStat', 'A11');
    qspCall(st, 'gopsex', 'settings');
    qspCall(st, 'gopsex', 'shgopsex');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVasilyBeer(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) < 6) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/beer` + (Math.floor(Math.random() * 8) + 1) + '.jpg"></center>');
    // TODO-QSP: func('gopsex', 'hide', 'gop_text_beer2')
    qspCall(s, 'willpower', 'drink', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'You\'ve had enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You\'ve had enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'livingroom'] },
      ]);
    }
    scene.actions([
      { label: 'Have another drink', goto: ['vasilyhome', 'vasily_beer'] },
    ]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja` + (Math.floor(Math.random() * 8) + 1) + '.jpg"></center>');
    scene.text('You\'re almost too drunk to stand. The boys notice and start harassing you.');
    // TODO-QSP: dynamic text: "We let you drink for free all night, <<$pcs_nickname>>. Show us a little skin a...
    scene.text(`"We let you drink for free all night, ${((s as any).pcs_nickname ?? '')}. Show us a little skin as a thank you," Vasily says with a grin.`);
    if (qspFunc(s, 'cardgame_durak', 'get_mod_fame') >= 250  &&  ((s as any).kotovLoveQW ?? 0) <= 0) {
      scene.actions([
        { label: 'Get this party started', goto: ['vasilyhome', 'drunken_sex_yes'] },
      ]);
    } else {
      if (((s as any).kotovLoveQW ?? 0) > 0) {
        scene.actions([
          { label: 'Tell them to knock it off', goto: ['vasilyhome', 'drunken_sex_no'] },
        ]);
      } else {
        qspCall(s, 'willpower', 'sex', 'resist');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Tell them to knock it off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Tell them to knock it off', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'drunken_sex_no'] },
          ]);
        }
        scene.actions([
          { label: 'Get this party started', goto: ['vasilyhome', 'drunken_sex_yes'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrunkenSexYes(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).vasily = (s as any).vasily ?? {})['drunk_sex'] = ((s as any).vasily['drunk_sex'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/yes` + (Math.floor(Math.random() * 6) + 1) + '.jpg"></center>');
  scene.text('It\'s time to show these boys that you know how to have a good time. The guys urge you on, calling out various lewd suggestions.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Present your ass', goto: ['vasily_home_sex', 'drunken_body_popa'] },
    { label: 'Show them your pussy', goto: ['vasily_home_sex', 'drunken_body_piz'] },
    { label: 'Shake your tits', goto: ['vasily_home_sex', 'drunken_body_sisi'] },
    { label: 'Finger yourself', goto: ['vasily_home_sex', 'drunken_body_mast'] },
  ]);
  scene.build();
}

function enterDrunkenSexNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).healthmax ?? 0) / 10);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep` + (Math.floor(Math.random() * 17) + 1) + '.jpg"></center>');
  scene.text('"You\'re all fixing to get a swift kick in the balls if you don\'t cut it out, or I can wake this whole building up with a scream," you drunkenly slur.');
  scene.text('Dan sneers at you. "Settle down bitch, nobody\'s going to hurt you. Why don\'t you go lie down on the couch and sleep it off?"');
  scene.text('The guys lose interest in you and go back to pounding beers as you crawl away in the direction of the sofa.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['vasilyhome', 'drunken_sleep'] },
  ]);
  scene.build();
}

function enterDrunkenSleep(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['no_health'] = 1;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) - (((s as any).healthmax ?? 0) / 10);
  qspCall(s, 'mood', 'lower', 'large');
  qspCall(s, 'sleep_simple', 'forced', 180);
  // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
  scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
  scene.text('You passed out for about three hours and wake up with a splitting headache and only vague memories of your night with the guys. Remembering that somebody deserved a kick in the balls, you look around the room. Vasily is passed out in a heap on the sofa with no sign of the other two.');
  scene.text('"It was probably Dan that deserved a kick…" you mutter to yourself as you try to get your bearings.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Clear your head', goto: ['vasilyhome', 'livingroom'] },
  ]);
  scene.build();
}

function enterVasilySexSonya(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 101) + 0) <= 40) {
    qspGoto(s, 'vasily_home_sex', 'vasily_sexev1_sonya');
  } else {
    qspGoto(s, 'vasily_home_sex', 'vasily_sexev2_sonya');
  }
  // TODO-QSP: end
  scene.build();
}

function enterShultv(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 4) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shulga_tv_rnd = 'You watch';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shulga_tv_rnd = 'You watch';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shulga_tv_rnd = 'You find';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shulga_tv_rnd = 'It\'s';
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 12) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvdance.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a teenage music video, with a half-naked girl shaking her charms.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo1.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a David Attenborough documentary about animals.';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo2.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a documentary about the world, with Morgan Freeman narrating.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo3.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a David Attenborough documentary about nature.';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvgeo4.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a documentary film about the ocean called Blue Planet.';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino1.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' that much-loved Soviet comedy.';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino2.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' Import blockbuster.';
  }
  if (((s as any).temp_rand ?? 0) === 7) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvkino3.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' an old Western. You hope Clint Eastwood shows up, and shoots someone';
  }
  if (((s as any).temp_rand ?? 0) === 8) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult1.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' some cartoons It looks like a cheap imitation of Pixar.';
  }
  if (((s as any).temp_rand ?? 0) === 9) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvmult2.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a classic Disney cartoon.';
  }
  if (((s as any).temp_rand ?? 0) === 10) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport1.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' an MMA fight. You wonder if Vitek is as good as these guys.';
  }
  if (((s as any).temp_rand ?? 0) === 11) {
    (s as any).shulga_tv_rand = '<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvsport2.mp4"></video></center>' + ((s as any).shulga_tv_rnd ?? 0) + ' a football match.';
  }
  if ((Math.floor(Math.random() * 100) + 1) > 10) {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'mood', 'raise', 'tiny');
    // TODO-QSP: dynamic text: <<$shulga_tv_rand>> <br> You veg out in front of the TV for 30 minutes.
    scene.text(`${((s as any).shulga_tv_rand ?? '')} <br> You veg out in front of the TV for 30 minutes.`);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: dynamic text: '<center><video autoplay loop width="748" height="540" src="images/locations/pav...
    scene.text('<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvrekl' + (Math.floor(Math.random() * 4) + 1) + '.mp4"></video></center> You find some advertising.');
  }
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 20) {
    qspCall(s, 'vasily_home_sex', 'view_pornotv_evgr');
  } else {
    if ((((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 17)  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) >= 20)) {
      qspCall(s, 'vasily_home_sex', 'view_pornotv_vasily');
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterViewPornotv(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Look around the room', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Change the channel', goto: ['vasilyhome', 'shultv'] },
  ]);
  scene.build();
}

function enterViewPornotv(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Flip to the porn channel', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'porn', 20);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><video autoplay loop width="748" height="540" src="images/locations/pav...
    scene.text('<center><video autoplay loop width="748" height="540" src="images/locations/pavlovsk/resident/apartment/shulginhome/tv/tvporn' + (Math.floor(Math.random() * 5) + 1) + '.mp4"></video></center> You switched to the porn channel.');
    scene.text('You watch porn for about 20 minutes. It\'s very exciting.');
    scene.actions([
      { label: 'Turn it off', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVasilyBazarNight(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/vasya/vasya.jpg');
  scene.text('Vasily is always with Dan and Vitek, who are his best friends. He\'s physically the weakest one of the three, but is a bit of a prankster and always makes the others laugh. He was raised by his father after his mother left when he was still an infant.');
  if (((s as any).npc_rel ?? 0)?.['A11'] >= 70  &&  ((s as any).alko ?? 0) >= 1  ||  ((s as any).npc_rel ?? 0)?.['A11'] >= 70  &&  ((s as any).pcs_horny ?? 0) > 50  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 200  &&  ((s as any).alko ?? 0) >= 1) {
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask him for sex', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask him for sex', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).shgopsex_vasya_count ?? 0))) {
      scene.text('"Keep your pants on, woman. I\'m not a machine," Vasily says.');
      scene.actions([
        { label: 'Humph', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      if (((st as any).shgopsex_vasya_count ?? 0) > 0) {
        (st as any).gopsex_n_npc = 1;
        (st as any).shgopsex_vasya_day = ((st as any).daystart ?? 0);
        (st as any).shgopsex_vasya_count = ((st as any).shgopsex_vasya_count ?? 0) - (1);
        qspCall(st, 'boyStat', 'A11');
        qspCall(st, 'gopsex', 'settings');
        qspCall(st, 'gopsex', 'shgopsex');
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).bazar_day = ((st as any).daystart ?? 0);
    (st as any).bazar_count = ((st as any).bazar_count ?? 0) - (1);
    if (((st as any).bazar_count ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/talk/talk` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    if (((st as any).bazar_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: "Give it a rest, <<$pcs_nickname>>. How about a drink instead?" Vasily offers.
      scene.text(`"Give it a rest, ${((st as any).pcs_nickname ?? '')}. How about a drink instead?" Vasily offers.`);
    } else {
      if (((st as any).fame ?? 0)?.['pav_slut'] < 200) {
        (st as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
        if ((!((st as any).temp_rand ?? 0))) {
          scene.text('"Life is like a Matryoshka doll," Vasily says mysteriously.<br> "What the hell is that supposed to mean?" you ask.<br> "Think about it," is all he says.<br> You roll you eyes and give him a sarcastic: "Oh I will."');
        } else {
          if (((st as any).temp_rand ?? 0) === 1) {
            // TODO-QSP: dynamic text: "I love <<$pcs_haircolor>> hair, and it looks so good on you <<$pcs_nickname>>."...
            scene.text(`"I love ${((st as any).pcs_haircolor ?? '')} hair, and it looks so good on you ${((st as any).pcs_nickname ?? '')}."<br> "Thanks Vasily. That's very sweet," you reply while blushing.<br> "Does the carpet match the drapes?" he asks with a smirk.<br> "Typical," is all you answer with an exasperated sigh.`);
          } else {
            if (((st as any).temp_rand ?? 0) === 2) {
              if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                scene.text('He gives you some advice. "Having a phone will make school go by much faster. Just be careful not to let the teacher catch you playing with it."<br> "Nobody is getting my phone without a fight," you declare with a smile.');
              } else {
                scene.text('You tell Vasily a story from gym class. "This one time after gym class, I was all sweaty and Katja tried to drag me into the shower. It was really weird."<br> Vasily adds: "She told me to take a shower a few weeks ago too."<br> "Well, that\'s because you stink," you reply while sticking your tongue out at him.');
              }
            } else {
              if (((st as any).temp_rand ?? 0) === 3) {
                scene.text('He tells you a story about a fight. "I got into a scrap with Dimka behind the community center once. I totally whipped his ass, but be careful around him. He\'s a nasty piece of work."');
              } else {
                if (((st as any).temp_rand ?? 0) === 4) {
                  scene.text('He tells you a story about his trip to the city. "I lost my wallet in the city and had no way to get home. The only way I could earn money for the train was by washing dishes at the barbecue. It turned out great though. The cute barmaid was flirting with me all night, and I even got to make out with her before I left. The next time I make it up there, I\'m going to rock her world."<br> "You go get her tiger," you say encouragingly.');
                } else {
                  if (((st as any).temp_rand ?? 0) === 5) {
                    scene.text('Vasily complains: "The economy is broken, and none of these idiots are doing anything about it."<br> "What should be done to fix it?" you ask curiously.<br> "Oh, I don\'t care. I can use my laptop to hack the banks, and get money whenever I need it," he says.<br> "Then why the hell are you complaining?" you ask in frustration.');
                  } else {
                    if (((st as any).temp_rand ?? 0) === 6) {
                      scene.text('He talks about his trip to the city. "I got lost in the old section of the city. I nearly starved to death before I found my way out. If you ever end up there be careful. That place is like a Byzantine labyrinth."<br> "Did you find anything interesting?" you ask.<br> "Not really. There was lots of grass and abandoned buildings, but I did see a leather clad woman get out of a cab. She disappeared like a puff of smoke though."');
                    } else {
                      if (((st as any).temp_rand ?? 0) === 7) {
                        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, the guys and I were trying to figure something out. How ...
                        scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, the guys and I were trying to figure something out. How big are your tits? I said they look like ${((st as any).titsize ?? '')}s, but I figured I'd ask you to be sure."<br> You cross your arms over your chest, and glare at him in response.<br> "So, bigger then?" he quirks an eyebrow.<br> You give him a little slug in the arm for an answer.`);
                      } else {
                        if (((st as any).npc_rel ?? 0)?.['A11'] < 30) {
                          scene.text('He tells you a story about magic fairies who live in the countryside. He swears it\'s true, but you just roll your eyes.');
                        } else {
                          if (((st as any).mc_inventory ?? 0)?.['tech_webcam'] === 1) {
                            scene.text('Don\'t you sometimes do homework at Julia\'s place after school?" he asks.<br> "Maybe," you say suspiciously.<br> "Well, if you ever do, please put in a good word for me. I think she\'s cute."');
                          } else {
                            if (((st as any).npc_rel ?? 0)?.['A11'] < 50) {
                              // TODO-QSP: dynamic text: "Have you heard about all the webcam sites that are popping up? Apparently girls...
                              scene.text(`"Have you heard about all the webcam sites that are popping up? Apparently girls can make a lot of money on them. If you have a computer, webcam, and are willing to show a little skin, I bet you could do very well ${((st as any).pcs_nickname ?? '')}," he says.<br> "I'm not sure I would be comfortable doing something like that," you reply.<br> "You should think about it. It's not like you would be selling it on the street. All you have to do is lie around on a bed and talk to a bunch of lonely guys. Then you show them a little skin and the money starts rolling in. It would be so easy."`);
                            } else {
                              if (((st as any).npc_rel ?? 0)?.['A11'] < 70) {
                                scene.text('"Do you remember when I told you about the webcam sites where you can earn big money for showing some skin?"<br> "Yeah, I remember," you answer.<br> "Well, not too long ago, I bought a webcam so that I could video chat on Skype. If you want to use it, I wouldn\'t mind…"<br> "Umm thanks, I\'ll think about it…" you reply.');
                              } else {
                                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, have you checked out the webcam I bought?" Vasily asks.<...
                                scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, have you checked out the webcam I bought?" Vasily asks.<br> "Yeah, I may have checked it out a little…" you say.<br> "Well, if you ever want to get on there during the weekend let me know. We could do a show together and rake in some big bucks," he says with a wink and a smile.<br> "That's not a bad idea, but I'll have to think about it," you blush.`);
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
      } else {
        (st as any).temp_rand = (Math.floor(Math.random() * 13) + 0);
        if ((!((st as any).temp_rand ?? 0))) {
          if (((st as any).soniaQW ?? 0)?.['slut'] === 1) {
            scene.text('He tells you about fucking Sonia. "The boys and I were all taking turns with that slut until she couldn\'t even stand. She eventually just collapsed in a heap. The first thing she did when she got up was try to get my cock in her mouth. It\'s crazy hoe fucking addicted to cock that whore is."');
          } else {
            scene.text('"I saw you poke your head in the door the other day when we were screwing Sonia. You seemed to enjoy it, because you watched for a long time. Were you trying to learn something, or just wishing it was you?" he asks with a smile.');
          }
        } else {
          if (((st as any).temp_rand ?? 0) === 1) {
            // TODO-QSP: dynamic text:  You really seemed to enjoy getting fucked like a drunken slut the other day <<$...
            scene.text(` You really seemed to enjoy getting fucked like a drunken slut the other day ${((st as any).pcs_nickname ?? '')}," Vasily snickers.<br> "Well I… yeah, I kind of got into it," you stammer meekly.<br> "Then you should come drinking with us in the park more often. We'll gladly fuck you six ways to Sunday if you show up there," he says with a sly grin.<br> "Don't be surprised if I take you up on that offer," you say with a wink.`);
          } else {
            if (((st as any).temp_rand ?? 0) === 2) {
              if (((st as any).soniaQW ?? 0)?.['slut'] === 1) {
                scene.text(' "We have to figure out how to get you and Sonia in the same room," Vasily says hungrily.<br> "I certainly wouldn\'t kick her out of bed…" you say and give him a wink.<br> "Just thinking about it is getting me going. Actually seeing you two together would be hot enough to start a fire."<br> You rest your hand on his groin and give it a squeeze. "Oh, I can tell…" you whisper seductively.');
              } else {
                // TODO-QSP: dynamic text: "Sonia was talking about you the other day," Vasily tells you.<br> "Oh really? W...
                scene.text(`"Sonia was talking about you the other day," Vasily tells you.<br> "Oh really? What did she say?" you ask.<br> "She said and I quote: That ${((st as any).pcs_nickname ?? '')} is crazy hot. Every time I see her, I just want to eat her like a bowl of ice cream," he says laughing.<br> "Well, next time you see her, tell her it tastes like cherry", you tell him laughing.`);
              }
            } else {
              if (((st as any).temp_rand ?? 0) === 3) {
                if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                  scene.text('"Oh, what I would give to see under that little skirt our English teacher wears. Her ass just looks unbelievable in that thing. I swear she must wear it just to drive the kids crazy," Vasily says dreamily.<br> "I totally agree. She knows what\'s she is doing. If she keeps it up, I might get under that skirt myself. If I ever do manage to get in there, I\'ll report back to you with the details commander," you say while giving him a mock salute.');
                } else {
                  scene.text('"God, I would love to get in Julia\'s pants. The quiet ones like her always turn into freaks in the bedroom," he says dreamily.<br> "I think she has a crush on me. Maybe I\'ll get her drunk, and find out for myself. I could have that little wallflower between my legs in no time. Should we make a bet?" you ask with a wink.<br> "No, but just the thought of it is getting a rise out of me. Luckily I already have a little freak in the bedroom handy…" he says while looking at you with lust.');
                }
              } else {
                if (((st as any).temp_rand ?? 0) === 4) {
                  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, did you know that your mother is still a slut? We saw he...
                  scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, did you know that your mother is still a slut? We saw her in the cafe after closing with her boss. She was sucking his dick like it was the fountain of youth. I see where you got your skills from; she must have been a really good teacher."<br> "Ha, dream on asshole," you tell him with a laugh.`);
                } else {
                  if (((st as any).temp_rand ?? 0) === 5) {
                    if (((st as any).soniaQW ?? 0)?.['slut'] === 1) {
                      if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
                        scene.text('"Sonia spends almost the whole day in the boys bathroom at school now. That girl sucks and fucks like quantity is the only things that matters," Vasily tells you.<br> "I think most of her diet is cum these days," you add.<br> "Yeah, I do my part to feed her almost every day," he says laughing.');
                      } else {
                        scene.text('"Sonia was fucking one of the teachers the other day," he says. "It was so damn loud I bet half the school heard it."<br> "Oh? Who was she fucking?" you ask with interest.<br> "I couldn\'t tell, but that\'s not the point. That slut is completely out of control! I almost feel bad for her. There\'s no way this will end well for her," he laments.');
                      }
                    } else {
                      scene.text('"Come over here babe. Idle hands are the devil\'s plaything," Vasily says while motioning for you to sit.<br> He put an arm around your neck and fondles your breast. You giggle and give him a peck on the cheek.');
                    }
                  } else {
                    if (((st as any).temp_rand ?? 0) === 6) {
                      scene.text('The guys have all gathered around you. "How about we get this party started?" Vasily asks as they all look at you with anticipation.<br> "Well one of you guys is going to have to get me a drink first," you smile.<br> "Why do you always need a drink? Let\'s just get to it.<br> It\'s the only way I can make you guys look good enough to fuck!" you say laughing. "Now fetch me a drink."');
                    } else {
                      if (((st as any).temp_rand ?? 0) === 7) {
                        // TODO-QSP: dynamic text: "Do you like anal now <<$pcs_nickname>>? Does it hurt, or does it give you pleas...
                        scene.text(`"Do you like anal now ${((st as any).pcs_nickname ?? '')}? Does it hurt, or does it give you pleasure?" Vasily asks.<br> "My ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''} has a dildo in her closet. I could get it if you want to find out for yourself…" you say laughing.<br> "Yeah, I'll pass," he says dryly.<br> "Party pooper," you say while sticking out your tongue at him.`);
                      } else {
                        if (((st as any).temp_rand ?? 0) === 8) {
                          scene.text('"What\'s your favorite position?" Vasily asks.<br> "Comfortable," you answer laughing.<br> All the boys join in laughing.');
                        } else {
                          if (((st as any).temp_rand ?? 0) === 9) {
                            // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you want to play some cards?" Vasily asks.<br> "I don''t...
                            scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, you want to play some cards?" Vasily asks.<br> "I don't know, will I get to keep my clothes on?" you ask.<br> "Sure, we can play for money," he says.<br> "Too bad, I guess I'l pass," you say disappointedly. You flash him your tits and have a good laugh.`);
                          } else {
                            if (((st as any).temp_rand ?? 0) === 10) {
                              scene.text('"Do you remember that barmaid in the city I was telling you about?" Vasily says. "I finally made it back to the barbecue to see her again. She gave me the best blowjob I\'ve had in my life!"<br> "Umm Vasily, there\'s something I…"<br> "I didn\'t mean it babe. She was good is all. Nobody is better than you," he says apologetically.<br> You decide not to push the topic of the barmaid.');
                            } else {
                              if (((st as any).temp_rand ?? 0) === 11) {
                                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, are you into water sports?" he asks innocently.<br> "Oh,...
                                scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, are you into water sports?" he asks innocently.<br> "Oh, I don't know. I'm better at volleyball and running than I am at swimming. If it's warm, I do like to cool off in the water though."<br> "I think that means she's up for it guys," he announces to the room.<br> "What are you guys talking about? Up for what?" you ask suspiciously.`);
                              } else {
                                if (((st as any).npc_rel ?? 0)?.['A11'] < 30) {
                                  // TODO-QSP: dynamic text: "I love <<$pcs_haircolor>> hair, and it looks so good on you <<$pcs_nickname>>."...
                                  scene.text(`"I love ${((st as any).pcs_haircolor ?? '')} hair, and it looks so good on you ${((st as any).pcs_nickname ?? '')}."<br> "Thanks Vasily. That's very sweet," you reply while blushing.<br> "Does the carpet match the drapes?" he asks with a smirk.<br> "Typical," is all you answer with an exasperated sigh.`);
                                } else {
                                  if (((st as any).mc_inventory ?? 0)?.['tech_webcam'] === 1) {
                                    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, would you grab me a beer?" Vasily asks.<br> "Sure thing," yo...
                                    scene.text(`"${((st as any).pcs_nickname ?? '')}, would you grab me a beer?" Vasily asks.<br> "Sure thing," you say.<br> "Grab one for yourself too," he adds.<br> "Vasily Shulgin, are you trying to get me drunk?" you answer in a shocked tone. Laughing, you head for the kitchen.`);
                                  } else {
                                    if (((st as any).npc_rel ?? 0)?.['A11'] < 50) {
                                      // TODO-QSP: dynamic text: "Have you heard about all the webcam sites that are popping up? Apparently girls...
                                      scene.text(`"Have you heard about all the webcam sites that are popping up? Apparently girls can make a lot of money on them. If you have a computer, webcam, and are willing to show a little skin I bet you could do very well ${((st as any).pcs_nickname ?? '')}," he says.<br> "I'm not sure I would be comfortable doing something like that," you reply.<br> "You should think about it. It's not like you would be selling it on the street. All you have to do is lie around on a bed and talk to a bunch of lonely guys. Then you show them a little skin and the money starts rolling in. It would be so easy."`);
                                    } else {
                                      if (((st as any).npc_rel ?? 0)?.['A11'] < 70) {
                                        scene.text('"Do you remember when I told you about the webcam sites where you can earn big money for showing some skin?"<br> "Yeah, I remember," you answer.<br> "Well, not too long ago I bought a webcam so that I could video chat on Skype. If you want to use it, I wouldn\'t mind…"<br> "Umm thanks, I\'ll think about it…" you reply.');
                                      } else {
                                        // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, have you checked out the webcam I bought?" Vasily asks.<...
                                        scene.text(`"Hey ${((st as any).pcs_nickname ?? '')}, have you checked out the webcam I bought?" Vasily asks.<br> "Yeah, I may have checked it out a little…" you say.<br> "Well, if you ever want to get on there during the weekend let me know. We could do a show together and rake in some big bucks," he says with a wink and a smile.<br> "That's not a bad idea, but I'll have to think about it," you blush.`);
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
      { label: 'Further', goto: ['vasilyhome', 'vasily_bazar_night'] },
    ]);
  } },
    { label: 'Drink beer', goto: ['vasilyhome', 'vasily_beer'] },
  ]);
  scene.build();
}

function enterDanBazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/dan/dan.jpg');
  scene.text('Dan is a tall and skinny guy who usually communicates to others with disdain and contempt. He\'s very stubborn and will never let an argument go. He\'s best friends with Vitek and Vasily, and can be considered the smartest one of the three.');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  &&  ((s as any).alko ?? 0) >= 1) {
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Have sex with Dan', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Have sex with Dan', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).shgopsex_den_count ?? 0))) {
      scene.text('"Damn slut, I\'m only one man. Suck your supper out of someone else\'s cock!" Dan says.');
      scene.actions([
        { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      if (((st as any).shgopsex_den_count ?? 0) > 0) {
        (st as any).gopsex_n_npc = 0;
        (st as any).shgopsex_den_day = ((st as any).daystart ?? 0);
        (st as any).shgopsex_den_count = ((st as any).shgopsex_den_count ?? 0) - (1);
        qspCall(st, 'boyStat', 'A10');
        qspCall(st, 'gopsex', 'settings');
        qspCall(st, 'gopsex', 'shgopsex');
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bazar_day_den = ((st as any).daystart ?? 0);
    (st as any).bazar_count_den = ((st as any).bazar_count_den ?? 0) - (1);
    if (((st as any).bazar_count_den ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/talk/talk` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    (st as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).den_textb = 'Dan tells you about a girl they saw giving a guy a blowjob in the park today. "She had such lovely ' + ((st as any).pcs_eyecolor ?? 0) + ' eyes, and beautiful ' + ((st as any).pcs_haircolor ?? 0) + ' hair," he says while smiling at you. "Oh ' + ((st as any).pcs_nickname ?? 0) + ', you should come join us in the park after school. We\'re almost always there having drinks," he adds as an afterthought.';
    }
    if (((st as any).temp_rand ?? 0) === 1) {
      if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        (st as any).den_textb = '"Hey ' + ((st as any).pcs_nickname ?? 0) + ', how is school going?" Dan asks. Before you can answer, he continues, "I don\'t think smart people even belong in school. I have to cut class and hang out in the bathroom just so I don\'t lose my mind."';
      } else {
        (st as any).den_textb = 'Dan tells you his plans for after graduation. "I can\'t wait to get to get out of this one horse town. I want to move to the city where all the best food, women, drugs and everything else you could think of are."';
      }
    }
    if (((st as any).temp_rand ?? 0) === 2) {
      (st as any).den_textb = '"' + ((st as any).pcs_nickname ?? 0) + ', get over here and make yourself useful. I need a back massage, and you look like just the right girl for the job," Dan hollers. <br> "How would you like a swift kick instead? Even if you had bothered to ask me nicely, I still would\'t have done it. It never hurts to be polite," you smirk back at him sweetly.';
    }
    if (((st as any).temp_rand ?? 0) === 3) {
      (st as any).den_textb = 'Dan asks you to grab him a beer. When you return from the kitchen with his beer, he politely asks you to open it for him. Rolling your eyes, you crack it open and hand it over to him. <br>"Thanks ' + ((st as any).pcs_nickname ?? 0) + '. You\'re going to make a fine little wife," Dan laughs.<br> You give him a kick in the shin before turning to leave. He just laughs, and sends you on your way with a smack on the ass.';
    }
    if (((st as any).temp_rand ?? 0) === 4) {
      (st as any).den_textb = '"' + ((st as any).pcs_nickname ?? 0) + ', if you\'re looking for work I hear the hotel is hiring. They have a job opening for a ' + ((st as any).pc_desc ?? 0)?.['lips'] + ' set of lips," Dan says.<br> You flick your hand between his legs, and he lets out a sharp cry of pain. "Thanks for the tip asshole," you smile back at him.';
    }
    if (((st as any).temp_rand ?? 0) === 5) {
      (st as any).den_textb = 'Dan gives you his opinion on religion. "A church is no fit place for a woman on her knees. That should be reserved for places like alleys, bathrooms and living rooms. Speaking of which; ' + ((st as any).pcs_nickname ?? 0) + ', would you be a dear?"<br>  You walk away shaking your head before he can finish.';
    }
    if (((st as any).temp_rand ?? 0) === 6) {
      (st as any).den_textb = 'Unprompted, Dan turns to you and says "You got a real pretty mouth girl," in his best creepy accent.<br> You swiftly raise your knee like you are going for his crotch, but stop short and just walk past him. Seeing him instinctively double over in fear puts a little spring in your step.';
    }
    (st as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).den_textb_gorslut = 'Dan looks at you appraisingly. "' + ((st as any).pcs_nickname ?? 0) + ', do you have any money? If you need some, then I\'m sure I could find some work putting your body to good use."<br>  "Dream on. The only work I\'m thinking of using this body for involves a swift kick between your balls!" you snarl.<br> With one hand protecting his nuts, Dan says "Settle down, slut. I wasn\'t suggesting you become a whore. Honestly, I was just thinking out loud. I mean if you\'re already giving it away for free, then why not?" You leave in a huff before he can finish.';
    }
    if (((st as any).temp_rand ?? 0) === 1) {
      if (((st as any).soniaQW ?? 0)?.['slut'] <= 0) {
        (st as any).den_textb_gorslut = 'Dan is idly going on about what a good girl Sonia is when he turns to you and says "Hey ' + ((st as any).pcs_nickname ?? 0) + ', you\'re friends with Sonia, right?"<br>  "Not this again, Dan…" you say with a weary sigh.<br> "Oh, come on! You both like to have a good time. It could be a lot of fun," he replies.<br> You stop him right there. "Listen Dan. I like Sonia, but she has a look in her eyes lately that makes me nervous. Besides, any girl willing to sleep with you has to be half mad. Getting two of us in the same room might be more than you could handle…" You give him a little sway of your hips as you walk away.';
      } else {
        (st as any).den_textb_gorslut = 'Dan mockingly issues you a challenge.<br> "' + ((st as any).pcs_nickname ?? 0) + ', I can\'t decide if I prefer your cute set of ' + ((st as any).pc_desc ?? 0)?.['lips'] + ' lipss or Sonia\'s. We need to all get together to find out who has the best skills. I have a warm wet surprise for the winner."<br> "Dream on!" you say while shaking your head, though you do wonder if you might be able to best her.';
      }
    }
    if (((st as any).temp_rand ?? 0) === 2) {
      if (((st as any).soniaQW ?? 0)?.['slut'] <= 0) {
        (st as any).den_textb_gorslut = '"Be a dear and fetch me another beer, ' + ((st as any).pcs_lastname ?? 0) + '," Dan says.<br> You head to the kitchen and grab a beer. You take a little sip and give him a smile when you hand it to him. He gives you a rough slap on the ass as he sends you away giggling.';
      } else {
        (st as any).den_textb_gorslut = '"Yesterday, Sonia was servicing every boy in the mens bathroom in any fashion they desired," Dan says. "Not too long ago, she was such a stuck up goody-two-shoes. Now she doesn\'t have a care in the world. You could probably learn a thing or two from her ' + ((st as any).pcs_nickname ?? 0) + '."<br> You just stare back at him with your arms crossed as he slowly moves a hand in front of his crotch for protection.';
      }
    }
    if (((st as any).temp_rand ?? 0) === 3) {
      (st as any).den_textb_gorslut = 'Dan looks like he\'s up to something. "' + ((st as any).pcs_nickname ?? 0) + ', who\'s your best girlfriend at school?"<br> "Why?" you ask while giving him a stern look.<br> "Well, I was just thinking maybe you\'d like to bring a friend on one of your visits here?" Dan says, trying his best to sound diplomatic.<br> Your anger boils over as you say "Don\'t you think for one second that I\'m going to drag some innocent girl back here and throw her to you jackals. If you\'re so desperate to have a three-way, I would be happy to let you help me suck Vitek\'s cock right now." <br> You hear Dan mutter under his breath. "Bitch, what the hell crawled up your ass tonight?" You turn to leave.';
    }
    if (((st as any).temp_rand ?? 0) === 4) {
      (st as any).den_textb_gorslut = '"Hey babe, how about you stop by the park the next time we\'re hanging out there and have some beers with us? You\'re so much fun when you get a few beers in you," Dan says while roughly giving your ass a squeeze.<br> You give him a playful slap on the thigh and a giggle.';
    }
    if (((st as any).temp_rand ?? 0) === 5) {
      (st as any).den_textb_gorslut = '"' + ((st as any).pcs_nickname ?? 0) + ', hand me the TV remote," Dan says.<br> He\'s way closer to it than you, but he looks comfortable, so you happily fetch it for him.<br>  "Good girl," he praises.';
    }
    if (((st as any).temp_rand ?? 0) === 6) {
      (st as any).den_textb_gorslut = '"' + ((st as any).pcs_nickname ?? 0) + ', does your sister still work at the local supermarket?" Dan asks. <br> "Yeah, but she doesn\'t enjoy it much, so I try not to bother her when she\'s working," you inform him.<br>  "You should bring her over here sometime. I bet we could find a way to cheer her up…" he says suggestively.<br> "God, is sex the only thing you ever think about?! And what on earth makes you think I would do that sort of thing with my sister?" you say a little sheepishly while giving him a sideways glance.';
    }
    if (((st as any).temp_rand ?? 0) === 7) {
      (st as any).den_textb_gorslut = 'Dan tells you about his visit to the strip club. "You need an ID to get in, but once you do it\'s great. They have some of the best looking women I\'ve ever seen in there, and I think on some nights they even have male strippers for ladies."';
    }
    if (((st as any).bazar_count_den ?? 0) <= 0) {
      // TODO-QSP: dynamic text: "Be quiet, <<$pcs_nickname>>! That''s enough talk out of you tonight. Leave me i...
      scene.text(`"Be quiet, ${((st as any).pcs_nickname ?? '')}! That's enough talk out of you tonight. Leave me in peace, unless you want to put those ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips to better use," he says.`);
    } else {
      if (((st as any).fame ?? 0)?.['pav_slut'] < 200) {
        // TODO-QSP: dynamic text: <<$den_textb>>
        scene.text(`${((st as any).den_textb ?? '')}`);
      } else {
        // TODO-QSP: dynamic text: <<$den_textb_gorslut>>
        scene.text(`${((st as any).den_textb_gorslut ?? '')}`);
      }
    }
    scene.actions([
      { label: 'Further', goto: ['vasilyhome', 'dan_bazar'] },
    ]);
  } },
    { label: 'Drink beer', goto: ['vasilyhome', 'vasily_beer'] },
  ]);
  scene.build();
}

function enterVitekBazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/vitek/vitek.jpg');
  scene.text('Vitek is an aggressive and strong guy who considers himself a \'gangsta\', but his personality is pretty much see-through. Lena is his twin sister.');
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 200  &&  ((s as any).alko ?? 0) >= 1) {
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Get laid', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get laid', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).shgopsex_vitya_count ?? 0))) {
      scene.text('"Sorry kitten, but you\'ve worn me out for the day," he says.');
      scene.actions([
        { label: 'Humph', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      if (((st as any).shgopsex_vitya_count ?? 0) > 0) {
        (st as any).gopsex_n_npc = 2;
        (st as any).shgopsex_vitya_day = ((st as any).daystart ?? 0);
        (st as any).shgopsex_vitya_count = ((st as any).shgopsex_vitya_count ?? 0) - (1);
        qspCall(st, 'boyStat', 'A9');
        qspCall(st, 'gopsex', 'settings');
        qspCall(st, 'gopsex', 'shgopsex');
        qspCall(st, 'stat', '');
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).bazar_day_vitek = ((st as any).daystart ?? 0);
    (st as any).bazar_count_vitek = ((st as any).bazar_count_vitek ?? 0) - (1);
    if (((st as any).bazar_count_vitek ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/talk/talk` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    (st as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).vitek_textb = '"Any chance I could get you to come over and do some cleaning? My apartment is such a wreck that it\'s virtually uninhabitable. It could really use a woman\'s touch."<br>  "I\'ll think about it," you answer shyly.<br> The thought of cleaning Vitek\'s place in a skimpy little outfit bubbles up in your mind, and you turn away blushing.';
    }
    if (((st as any).temp_rand ?? 0) === 1) {
      if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
        (st as any).vitek_textb = 'Vitek flexes his bicep, and tells you to feel it. Somewhat hesitantly, you give his muscle a little squeeze. It\'s hard as a rock, and a little exciting too.<br> "I can bench 300," he boasts.<br> You have no idea what that means, but smile anyway. "Wow, that\'s really good. I\'m impressed."';
      } else {
        (st as any).vitek_textb = 'Vitek compliments you. "' + ((st as any).pcs_nickname ?? 0) + ', your hair looks beautiful. I\'ve always had a thing for girls with ' + ((st as any).pcs_haircolor ?? 0) + ' hair."<br> "Thank you," you reply while blushing.';
      }
    }
    if (((st as any).temp_rand ?? 0) === 2) {
      (st as any).vitek_textb = 'Vitek invites you to the community center at night to drink and dance with him. The thought of dancing with him sends a little flutter though your chest.<br> "I might just take you up on that offer," you tell him, trying your best to sound sexy.';
    }
    if (((st as any).temp_rand ?? 0) === 3) {
      (st as any).vitek_textb = 'Vitek talks to you about his boxing training at that community center. He thinks he\'s getting pretty good. "Stop by if you want to see me in action. There\'s plenty of other stuff to do there too."';
    }
    if (((st as any).temp_rand ?? 0) === 4) {
      (st as any).vitek_textb = '"Do you ever go down to the lake to swim?" Vitek asks.<br> "Sometimes, but it\'s been a while," you answer.<br> "It\'s a shame I\'ve never seen you in a bathing suit," he says almost shyly.';
    }
    if (((st as any).temp_rand ?? 0) === 5) {
      (st as any).vitek_textb = '"I had to kick the shit out of that Igor kid after the dance a few weeks ago. You should steer clear of that guy, ' + ((st as any).pcs_nickname ?? 0) + '. I don\'t like the way he treats women."';
    }
    if (((st as any).temp_rand ?? 0) === 6) {
      (st as any).vitek_textb = 'Vitek must have been boxing today as his shoulders look tense. Trying to be helpful, you walk up behind him and start giving them a good rub.<br> "Oh ' + ((st as any).pcs_nickname ?? 0) + ', your hands feel great…" he sighs in appreciation.';
    }
    if (((st as any).temp_rand ?? 0) === 7) {
      (st as any).vitek_textb = 'You notice Vitek\'s beer is almost empty. Thinking this looks like a job you can handle, you go to the kitchen to get him a fresh one. You return just as he\'s ready for another and hand him it while smiling.<br> "Thanks ' + ((st as any).pcs_nickname ?? 0) + ', you read my mind," he says. His hand grazes your hip when he takes his beer, sending butterflies through your stomach.';
    }
    (st as any).temp_rand = (Math.floor(Math.random() * 8) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).vitek_textb_gorslut = 'You\'re lying on the couch when Vitek sits down and puts your feet in his lap. Without saying anything, he gently starts to massage them. You let him know how good it feels with a series of soft moans. Vitek can be so good to you when he wants to be; you think you should probably reward him.';
    }
    if (((st as any).temp_rand ?? 0) === 1) {
      (st as any).vitek_textb_gorslut = 'Vitek imparts some wisdom. "You can determine how close your relationship is with someone by how much you can mock them before receiving a beating."<br> "What if I said you have a tiny cock?" you say.<br> "Then I would attack you," he says. He takes both hands and furiously tickles you around your sides and stomach.<br> You squeal with delight, laughing until you\'re out of breath.';
    }
    if (((st as any).temp_rand ?? 0) === 2) {
      (st as any).vitek_textb_gorslut = 'Vitek is full of fun facts. "Did you know that it\'s empirically proven that 95% of girls can no longer pronounce the name of the city Naberezhnye Cheln if they go a month without sex?"<br> Deadpan, you respond "I speak seven languages."';
    }
    if (((st as any).temp_rand ?? 0) === 3) {
      if (((st as any).soniaQW ?? 0)?.['slut'] === 0) {
        (st as any).vitek_textb_gorslut = '"If you ever lend money to nerdy Natasha, then don\'t expect to get it back. Well, not in cash anyway. Her methods of repayment are very interesting though…"<br> You give him a playful slug on the shoulder, and start thinking about Natasha\'s legs.';
      } else {
        if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
          (st as any).vitek_textb_gorslut = '"Sonia pulled me into the school toilet yesterday, climbed on top of me, and used me for sex. She basically raped me. I may have to go see the therapist at the clinic to get over it."<br> He says it with a smile, but you can tell he\'s worried about Sonia.';
        } else {
          (st as any).vitek_textb_gorslut = '"Sonia was pestering me in the park yesterday. When I told her no and walked away, she just followed me. I decided I\'d had enough, and started to jog away, but she chased me! She actually chased me though the park trying to have sex with me…" He just shakes his head dumbfounded by this turn of events.';
        }
      }
    }
    if (((st as any).temp_rand ?? 0) === 4) {
      (st as any).vitek_textb_gorslut = 'Vitek starts talking like he\'s telling a ghost story. "There\'s a woman who walks our quiet streets at night wearing leather and brandishing a whip. They say if she catches you, you wind up in her dungeon, never to be seen again." He finishes by laughing and making spooky sounds.<br> You\'re too distracted by thoughts of mysterious leather clad women to laugh with him.';
    }
    if (((st as any).temp_rand ?? 0) === 5) {
      (st as any).vitek_textb_gorslut = '"What\'s your favorite thing about a penis?" Vitek asks.<br> "They always stand up when a fine lady like myself enters the room," you answer back.<br> Vitek bursts out laughing, and starts tickling your sides.';
    }
    if (((st as any).temp_rand ?? 0) === 6) {
      (st as any).vitek_textb_gorslut = '"Drunk girls might as well call their pussy mistress. They can think of nothing but obeying its wishes," Vitek says.<br> You parry: "Yeah, and guys should call their cocks sir. They follow every order like it\'s a life and death mission issued by their commanding officer."<br>  You both burst out laughing when Vitek gives his crotch a salute.';
    }
    if (((st as any).temp_rand ?? 0) === 7) {
      (st as any).vitek_textb_gorslut = 'Vitek tells a joke. <br> A man walks into a pharmacy and loudly declares: "I\'ll have a pack of condoms, please!"<br> The cute young clerk blushed and whispered: "Sir, this sort of thing should be asked for in the ear, not…"<br> "What about ears? I don\'t need them for me ears! I need them for my dick!"';
    }
    if (((st as any).bazar_count_vitek ?? 0) <= 0) {
      // TODO-QSP: dynamic text: "That''s enough talk for now, <<$pcs_nickname>>," he says.
      scene.text(`"That's enough talk for now, ${((st as any).pcs_nickname ?? '')}," he says.`);
    } else {
      if (((st as any).fame ?? 0)?.['pav_slut'] < 200) {
        // TODO-QSP: dynamic text: <<$vitek_textb>>
        scene.text(`${((st as any).vitek_textb ?? '')}`);
      } else {
        // TODO-QSP: dynamic text: <<$vitek_textb_gorslut>>
        scene.text(`${((st as any).vitek_textb_gorslut ?? '')}`);
      }
    }
    scene.actions([
      { label: 'Further', goto: ['vasilyhome', 'vitek_bazar'] },
    ]);
  } },
    { label: 'Drink beer', goto: ['vasilyhome', 'vasily_beer'] },
  ]);
  scene.build();
}

function enterVasilyBazarDay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/vasya/vasya.jpg');
  scene.text('Vasily is always with Dan and Vitek, who are his best friends. He\'s physically the weakest one of the three, but is a bit of a prankster and always makes the others laugh. He was raised by his father after his mother left when he was still an infant.');
  if (((s as any).shulga_lern_count ?? 0) > 0  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
    scene.actions([
      { label: 'Do homework', goto: ['vasilyhome', 'vasily_lern'] },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A11'] >= 70  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  (((s as any).alko ?? 0) >= 1  ||  ((s as any).pcs_horny ?? 0) >= 30)) {
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest sex', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest sex', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).shgopsex_vasya_count ?? 0))) {
      // TODO-QSP: dynamic text: "Maybe next time, <<$pcs_nickname>>. I''ve had enough for today," Vasily says.
      scene.text(`"Maybe next time, ${((st as any).pcs_nickname ?? '')}. I've had enough for today," Vasily says.`);
      scene.actions([
        { label: 'Sigh', goto: ['vasilyhome', 'livingroom'] },
      ]);
    } else {
      (st as any).gopsex_n_npc = 1;
      (st as any).shgopsex_vasya_day = ((st as any).daystart ?? 0);
      (st as any).shgopsex_vasya_count = ((st as any).shgopsex_vasya_count ?? 0) - (1);
      qspCall(st, 'boyStat', 'A11');
      qspCall(st, 'gopsex', 'settings');
      qspCall(st, 'gopsex', 'shgopsex');
      qspCall(st, 'stat', '');
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['vasilyhome', 'livingroom'] },
    { label: 'Talk', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).bazar_day = ((st as any).daystart ?? 0);
    (st as any).bazar_count = ((st as any).bazar_count ?? 0) - (1);
    if (((st as any).bazar_count ?? 0) > 0) {
      qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVasilyRep(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/talk/talk` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
    (st as any).temp_rand = (Math.floor(Math.random() * 9) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      (st as any).vasyan_textb_day = '"Life is like a Matryoshka doll," Vasily says mysteriously.<br> "What the hell is that supposed to mean?" you ask.<br> "Think about it," is all he says.<br> You roll you eyes and give him a sarcastic: "Oh I will."';
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        (st as any).vasyan_textb_day = '"I love ' + ((st as any).pcs_haircolor ?? 0) + ' hair, and it looks so good on you ' + ((st as any).pcs_nickname ?? 0) + '."<br> "Thanks Vasily. That\'s very sweet," you reply while blushing.<br> "Does the carpet match the drapes?" he asks with a smirk.<br> "Typical," is all you answer with an exasperated sigh.';
      } else {
        if (((st as any).temp_rand ?? 0) === 2) {
          if (((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
            (st as any).vasyan_textb_day = 'He gives you some advice. "Having a phone will make school go by much faster. Just be careful not to let the teacher catch you playing with it."<br> "Nobody is getting my phone without a fight," you declare with a smile.';
          } else {
            (st as any).vasyan_textb_day = 'You tell Vasily a story from gym class. "This one time after gym class, I was all sweaty and Katja tried to drag me into the shower. It was really weird."<br> Vasily adds: "She told me to take a shower a few weeks ago too."<br> "Well, that\'s because you stink," you reply while sticking your tongue out at him.';
          }
        } else {
          if (((st as any).temp_rand ?? 0) === 3) {
            (st as any).vasyan_textb_day = 'He tells you a story about a fight. "I got into a scrap with Dimka behind the community center once. I totally whipped his ass, but be careful around him. He\'s a nasty piece of work."';
          } else {
            if (((st as any).temp_rand ?? 0) === 4) {
              (st as any).vasyan_textb_day = 'He tells you a story about his trip to the city. "I lost my wallet in the city and had no way to get home. The only way I could earn money for the train was by washing dishes at the barbecue. It turned out great though. The cute barmaid was flirting with me all night, and I even got to make out with her before I left. The next time I make it up there, I\'m going to rock her world."<br> "You go get her tiger," you say encouragingly.';
            } else {
              if (((st as any).temp_rand ?? 0) === 5) {
                (st as any).vasyan_textb_day = 'Vasily complains: "The economy is broken, and none of these idiots are doing anything about it."<br> "What should be done to fix it?" you ask curiously.<br> "Oh, I don\'t care. I can use my laptop to hack the banks, and get money whenever I need it," he says.<br> "Then why the hell are you complaining?" you ask in frustration.';
              } else {
                if (((st as any).temp_rand ?? 0) === 6) {
                  (st as any).vasyan_textb_day = 'He talks about his trip to the city. "I got lost in the old section of the city. I nearly starved to death before I found my way out. If you ever end up there be careful. That place is like a Byzantine labyrinth."<br> "Did you find anything interesting?" you ask.<br> "Not really. There was lots of grass and abandoned buildings, but I did see a leather clad woman get out of a cab. She disappeared like a puff of smoke though."';
                } else {
                  if (((st as any).temp_rand ?? 0) === 7) {
                    (st as any).vasyan_textb_day = '"Hey ' + ((st as any).pcs_nickname ?? 0) + ', the guys and I were trying to figure something out. How big are your tits? I said they look like ' + ((st as any).titsize ?? 0) + 's, but I figured I\'d ask you to be sure."<br> You cross your arms over your chest, and glare at him in response.<br> "So, bigger then?" he quirks an eyebrow.<br> You give him a little slug in the arm for an answer.';
                  } else {
                    if (((st as any).npc_rel ?? 0)?.['A11'] >= 30  &&  ((st as any).mc_inventory ?? 0)?.['tech_webcam'] === 1) {
                      (st as any).vasyan_textb_day = '"Don\'t you sometimes do homework at Julia\'s place after school?" he asks.<br> "Maybe," you say suspiciously.<br> "Well, if you ever do, please put in a good word for me. I think she\'s cute."';
                    } else {
                      if (((st as any).npc_rel ?? 0)?.['A11'] >= 100) {
                        (st as any).vasyan_textb_day = '"Hey ' + ((st as any).pcs_nickname ?? 0) + ', have you checked out the webcam I bought?" Vasily asks.<br> "Yeah, I may have checked it out a little…" you say.<br> "Well, if you ever want to get on there during the weekend let me know. We could do a show together and rake in some big bucks," he says with a wink and a smile.<br> "That\'s not a bad idea, but I\'ll have to think about it," you blush.';
                      } else {
                        if (((st as any).npc_rel ?? 0)?.['A11'] >= 50) {
                          (st as any).vasyan_textb_day = '"Do you remember when I told you about the webcam sites where you can earn big money for showing some skin?"<br> "Yeah, I remember," you answer.<br> "Well, not too long ago, I bought a webcam so that I could video chat on Skype. If you want to use it, I wouldn\'t mind…"<br> "Umm thanks, I\'ll think about it…" you reply.';
                        } else {
                          if (((st as any).npc_rel ?? 0)?.['A11'] >= 30) {
                            (st as any).vasyan_textb_day = '"Have you heard about all the webcam sites that are popping up? Apparently girls can make a lot of money on them. If you have a computer, webcam, and are willing to show a little skin, I bet you could do very well ' + ((st as any).pcs_nickname ?? 0) + '," he says.<br> "I\'m not sure I would be comfortable doing something like that," you reply.<br> "You should think about it. It\'s not like you would be selling it on the street. All you have to do is lie around on a bed and talk to a bunch of lonely guys. Then you show them a little skin and the money starts rolling in. It would be so easy."';
                          } else {
                            (st as any).vasyan_textb_day = 'He tells you a story about magic fairies who live in the countryside. He swears it\'s true, but you just roll your eyes.';
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
    if (((st as any).bazar_count ?? 0) <= 0) {
      // TODO-QSP: dynamic text: "I''m tired of talking, <<$pcs_nickname>>. Leave me alone," he says.
      scene.text(`"I'm tired of talking, ${((st as any).pcs_nickname ?? '')}. Leave me alone," he says.`);
    } else {
      // TODO-QSP: dynamic text: <<$vasyan_textb_day>>
      scene.text(`${((st as any).vasyan_textb_day ?? '')}`);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', goto: ['vasilyhome', 'vasily_bazar_day'] },
    ]);
  } },
    { label: 'Ask for some alcohol', handler: (st: GameState) => {
    scene.text('Vasily gets up and comes back with a bottle of cold vodka from the refrigerator. He takes a big swig of it before passing it to you.');
    scene.actions([
      { label: 'Take the bottle', goto: ['vasilyhome', 'vasily_vodka'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVasilyRep(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A11'] < 50) {
    scene.text('You have known Vasily since childhood.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A11'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A11'] < 100) {
      scene.text('You are good friends with Vasily.');
    } else {
      scene.text('Vasily is your very close friend.');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVasilyVodka(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vasily ?? 0)?.['day_drunk'] >= 8  &&  ((s as any).vasily ?? 0)?.['drunk_sex'] > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka4.jpg');
    scene.text('Vasily is now so drunk that he\'s barely aware of what\'s going on. This could be your chance to pay him back for taking advantage of you when you got drunk with him. You have your strapon in your purse after all.');
    qspCall(s, 'willpower', 'sex', 'force', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Decide to get revenge', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Decide to get revenge', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka5.jpg');
    scene.text('You think about it and decide the asshole deserves it, thinking he can take advantage of a girl when she gets too drunk to say no. You need to leave the room and put the strapon harness on, so it would be best if he keeps drinking before you spring it on him. "I need to use the bathroom, but I\'ll be right back. You just keep drinking," you tell him and he grins at you, giving you a thumbs up before he takes another huge swig of the vodka.');
    scene.actions([
      { label: 'Go put on the strapon', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/pc/activities/misc/puton_strapon1.mp4');
    scene.text('Getting up from the couch, you grab your purse and walk out into the hallway to the bathroom. You latch the door and pull your strapon harness out of your purse before you slide your legs through the loops and pull it up over your hips. Once it\'s in place, you start pulling the straps tight before you smooth your skirt back down over the strapon, hiding it from view.');
    scene.actions([
      { label: 'Return to Vasily', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka6.jpg');
    scene.text('You make your way back to the living room and find Vasily still drinking the vodka. You walk over to him and pull up your skirt, exposing the dildo attached to your strapon harness. He stops and tries to focus on what he\'s seeing as you say "Suck my dick, bitch!"');
    scene.text('He stares puzzled for a moment, but just when you think he\'s about to do it, he shakes his head. "I\'m not sucking that!" His words are slurred and he starts to take another swig of vodka, but you reach over and snatch it out of his hand.');
    scene.actions([
      { label: 'Bargain the vodka', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka7.jpg');
    scene.text('He tries to reach for the vodka and almost slams his face against your dildo in the process. He keeps trying to reach for the vodka bottle, but you just keep pulling it away from him. "I\'ll give you the bottle back if you suck my dick."');
    scene.text('He gives you an annoyed glare and looks at the dildo. "You don\'t have a real dick."');
    scene.text('You smile down at him. "True, so it wouldn\'t even be gay in the slightest. Come on, just suck it a little and you can have the vodka back," you tell him in your most sweet and charming voice.');
    scene.actions([
      { label: 'Bargain struck', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka8.jpg');
    scene.text('He seems to ponder your words for a moment before sighing. "Fine, give me the bottle and I\'ll suck your… whatever." You grin and hand him back the bottle of vodka. He eagerly snatches it from your hand and takes a big swig of it as he eyes you stroking your dildo like it was a cock.');
    scene.actions([
      { label: 'Get your dick sucked', goto: ['vasily_home_sex', 'vodka_revenge'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Decide not to get revenge', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka5.jpg');
    scene.text('You think about it, but you just can\'t do that to Vasily, even if he might deserve it. You get up and leave his drunk ass on the couch while you go home.');
    scene.actions([
      { label: 'Leave the apartment', goto: ['pod_ezd', 'etaj_3'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).alko ?? 0) >= 6  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 100) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
      scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja` + (Math.floor(Math.random() * 8) + 1) + '.jpg"></center>');
      scene.text('You\'re so drunk the room is spinning around and you can barely focus on anything. You see Vasily smile and walk over to you before pulling his dick out of his pants and rubbing the tip against your lips. "Open your mouth, slut."');
      scene.actions([
        { label: 'Open your mouth', goto: ['vasily_home_sex', 'vasily_vodka_bj'] },
      ]);
    } else {
      if (((s as any).alko ?? 0) >= 4  &&  ((s as any).fame ?? 0)?.['pav_slut'] <= 100) {
        (s as any).minut = ((s as any).minut ?? 0) + 5;
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/boy/vasya/vasya.jpg');
        scene.text('When you ask for another beer, he shakes his head. "I\'m cutting you off. Good girls don\'t get drunk with bad boys like me. You should go home." He refuses to give you another beer and starts ignoring you.');
        scene.actions([
          { label: 'Get up', goto: ['vasilyhome', 'livingroom'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 3;
        qspCall(s, 'stat', '');
        scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka1.jpg');
        scene.text('After Vasily takes a big swig, you take the bottle from him as the two of you chat about random stuff.');
        if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).strapNumber ?? 0) > 0  &&  ((s as any).vasily ?? 0)?.['drunk_sex'] > 0  &&  ((s as any).PCLoSkirt ?? 0) > 0) {
          scene.actions([
            { label: 'Pretend to take a swig', handler: (st: GameState) => {
    ((st as any).vasily = (st as any).vasily ?? {})['day_drunk'] = ((st as any).vasily['day_drunk'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka3.jpg');
    scene.text('You and Vasily talk about a variety of things as you pretend to take a swig of vodka and swallow very little of it before you pass it back to him. As he quickly takes the bottle and takes another swig, you remember how the bastard made you give him a blowjob when you got drunk with him last time. Maybe you should pay him back after he gets drunk?');
    scene.actions([
      { label: 'Stop pretending to drink', goto: ['vasilyhome', 'livingroom'] },
      { label: 'Ask for another drink', goto: ['vasilyhome', 'vasily_vodka'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Take a swig', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    // TODO-QSP: func('gopsex', 'hide', 'gop_text_beer2')
    scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/revenge/vodka2.jpg');
    scene.text('You and Vasily talk about a variety of things as you take a swig of vodka.');
    qspCall(st, 'willpower', 'drink', 'self', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'You\'ve had enough', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You\'ve had enough', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'livingroom'] },
      ]);
    }
    scene.actions([
      { label: 'Have another drink', goto: ['vasilyhome', 'vasily_vodka'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVasilyLern(s: GameState, scene: SceneBuilder): void {
  (s as any).lern_imgset = (Math.floor(Math.random() * 7) + 1);
  if (((s as any).lernHome ?? 0) > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).lern = ((s as any).lern ?? 0) + ((Math.floor(Math.random() * 6) + 1));
    qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 1));
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/lern/ev${((s as any).lern_imgset ?? '')}.jpg`);
    scene.text('You sit with Vasily for an hour and do your homework.');
    if (((s as any).lernHome ?? 0) > 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 2, 1, 'A2');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 1, 'A2');
    }
    scene.actions([
      { label: 'Keeps studying', handler: (st: GameState) => {
    qspGoto(st, 'vasilyhome', 'vasily_lern');
  } },
      { label: 'Take a break', handler: (st: GameState) => {
    qspGoto(st, 'vasilyhome', 'vasily_bazar_day');
  } },
    ]);
  } else {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/lern/ev${((s as any).lern_imgset ?? '')}_1.jpg`);
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 200) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, there''s no way I can concentrate with you in that outfit. L...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, there's no way I can concentrate with you in that outfit. Let's get you out of it so we can continue," he suggests.`);
      scene.text('From the way he\'s pawing at you, it looks like more school work is out of the question. The only question that remains is: What are you going to do about that bulge in Vasily\'s pants?');
      qspCall(s, 'willpower', 'sex', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'You\'re not in the mood', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You\'re not in the mood', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'vasily_lern_sex_no'] },
        ]);
      }
      // TODO-QSP: act iif(pcs_horny >= 50, 'You''re already wet', 'Oh, I suppose'): gt 'vasily_home_sex', 'vasily_lern...
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, if you would like to keep learning, I''ve been told that I''...
      scene.text(`"${((s as any).pcs_nickname ?? '')}, if you would like to keep learning, I've been told that I'm an excellent teacher," Vasily says as he gently starts to paw at you.`);
      scene.text('You have a sneaking suspicion that he isn\'t talking about the biology assignment.');
      scene.text('"I… Don\'t know… Would you please…" you stammer.');
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
        qspCall(s, 'willpower', 'sex', 'resist', 'easy');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Stop it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Stop it', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
  }, goto: ['vasilyhome', 'vasily_lern_sex_no'] },
          ]);
        }
        scene.actions([
          { label: 'Teach me', goto: ['vasily_home_sex', 'vasily_lern_sex_yes'] },
        ]);
      } else {
        scene.actions([
          { label: 'Stop it', goto: ['vasilyhome', 'vasily_lern_sex_no'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVasilyLernSexNo(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).shulga_lern_day = ((s as any).daystart ?? 0);
  (s as any).shulga_lern_count = ((s as any).shulga_lern_count ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/vasya/sex/shuglinhome/lern/no.jpg');
  scene.text('"That\'s enough! I\'m not in the mood. It should be enough that I let you touch me, but if you really want to fuck, then here you go," you say as you flip your middle finger at him.');
  scene.text('He bursts out laughing, and playfully tries to bite your finger.');
  scene.text('"Hey, watch those teeth! You\'re such a good teacher that you might give me ideas," you finish by playfully snapping your teeth at him. He just laughs even harder');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stand', goto: ['vasilyhome', 'livingroom'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'bathroom');
  qspCall(s, 'stat', '');
  if (((s as any).soniaQW ?? 0)?.['slut'] >= 2) {
    (s as any).temp_rand = (Math.floor(Math.random() * 10) + 1);
    if (((s as any).temp_rand ?? 0) === 1  &&  ((s as any).sh_sonya_sexev ?? 0) > 2  &&  ((s as any).sonya_bazar_count ?? 0) > 0  &&  ((s as any).ev_sonya_day ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) <= 23  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10))) {
      qspGoto(s, 'vasilyhome', 'sonia_ev');
    } else {
      if (((s as any).temp_rand ?? 0) === 2  &&  ((s as any).npc_rel ?? 0)?.['A112'] >= 20  &&  ((s as any).sexev_sonya_count ?? 0) > 0  &&  ((s as any).hour ?? 0) <= 23  &&  ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10))) {
        qspGoto(s, 'vasilyhome', 'sonia_sex');
      }
    }
  }
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/vanna.jpg');
  // TODO-QSP: dynamic text: 'Uncle Sergey''s bathroom is small and very unpretentious. Nevertheless, it has ...
  scene.text('Uncle Sergey\'s bathroom is small and very unpretentious. Nevertheless, it has everything a bathroom needs. There is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a> above the sink, where you can ' + ((((s as any).pcs_hairbsh ?? 0) < 1) ? ('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027brush/u0027); return false;">brush</a>') : ('brush')) + ' your hair, a shower and a bathtub.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the bathroom', goto: ['vasilyhome', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You take a quick shower.');
    scene.actions([
      { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(st, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
      { label: 'Get out of the shower', goto: ['vasilyhome', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSoniaSex(s: GameState, scene: SceneBuilder): void {
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    qspGoto(s, 'vasily_home_sex', 'sonia_bathroom_sex1');
  } else {
    qspGoto(s, 'vasily_home_sex', 'sonia_bathroom_sex2');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoniaEv(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/m.jpg');
  scene.text('When you go to the bathroom, you find Sonia already in there. "Hi!" she says cheerfully before returning to touching up her make-up.');
  if (((s as any).sh_sonya_bazar ?? 0) > 5  &&  ((s as any).mesec ?? 0) <= 0) {
    qspCall(s, 'willpower', 'cuni', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest you take a bath together', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest you take a bath together', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    qspCall(st, 'willpower', '');
  }, goto: ['vasily_home_sex', 'sonia_les_bathroom'] },
      ]);
    }
  }
  if (((s as any).sh_sonya_bazar ?? 0) >= 25  &&  ((s as any).npc_rel ?? 0)?.['A112'] >= 50  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    qspCall(s, 'willpower', 'group', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest you and Sonia fuck Vasily together', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest you and Sonia fuck Vasily together', handler: (st: GameState) => {
    qspCall(st, 'willpower', '');
    qspCall(st, 'willpower', '');
  }, goto: ['vasily_home_sex', 'vasily_3some_sex'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Chat with Sonia', goto: ['vasilyhome', 'sonia_chat'] },
    { label: 'Leave the bathroom', goto: ['vasilyhome', 'hallway'] },
  ]);
  scene.build();
}

function enterSoniaChat(s: GameState, scene: SceneBuilder): void {
  (s as any).ev_sonya_day = ((s as any).daystart ?? 0);
  (s as any).sonya_bazar_day = ((s as any).daystart ?? 0);
  (s as any).sonya_bazar_count = ((s as any).sonya_bazar_count ?? 0) - (1);
  (s as any).sh_sonya_bazar = ((s as any).sh_sonya_bazar ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/sonia/b.jpg');
  (s as any).temp_rand = (Math.floor(Math.random() * 5) + 1);
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.text('You spend some time chatting about everyday things with Sonia.');
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    scene.text('You and Sonia chat for a few minutes about the news and current events.');
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    scene.text('Sonia tells you about some interesting encounters she had in the Pavlovsk hotel the other day.');
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    scene.text('Sonia tells an interesting story.');
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    scene.text('You spend some time chatting with Sonia, mostly sharing what the two of you have done today.');
  }
  // TODO-QSP: dynamic text: "Sorry <<$pcs_nickname>>, but I have to go. Maybe I''ll see you here again so we...
  scene.text(`"Sorry ${((s as any).pcs_nickname ?? '')}, but I have to go. Maybe I'll see you here again so we can chat some more!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['vasilyhome', 'hallway'] },
  ]);
  scene.build();
}

function enterVasilykitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'vasilykitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh.jpg');
  scene.text('An uninspiring kitchen, with the basic amenities for life.');
  if (((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) < 21  &&  String((s as any).locArgs?.[0] ?? '') === 0) {
    if ((Math.floor(Math.random() * 100) + 1) < 10) {
      // TODO-QSP: dynamic text: When you enter the kitchen, <<$serg_obr>> <a href="exec:gt ''Serge_kuh'',''kuh_b...
      scene.text(`When you enter the kitchen, ${((s as any).serg_obr ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Serge_kuh/u0027, /u0027kuh_buh/u0027); return false;">Sergey</a> gives you a friendly nod. He's sitting at the kitchen table, drinking vodka.`);
    } else {
      // TODO-QSP: dynamic text: When you enter the kitchen, <<$serg_obr>> <a href="exec:gt ''Serge_kuh''">Sergey...
      scene.text(`When you enter the kitchen, ${((s as any).serg_obr ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Serge_kuh/u0027, /u0027/u0027); return false;">Sergey</a> is standing at the kitchen counter preparing a meal.`);
    }
  }
  qspCall(s, 'kit_din', 'kitchen', 'edasnack');
  qspCall(s, 'core_library', 'kitchen', 'shared');
  if ((Math.floor(Math.random() * 100) + 0) < 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 300  &&  ((s as any).gangsexroom_count ?? 0) > 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 3  &&  ((s as any).kotovLoveQW ?? 0) < 1  &&  ((s as any).gangsexroom_day ?? 0) !== ((s as any).daystart ?? 0)) {
    qspGoto(s, 'vasily_home_sex', 'gang_sex_ev1');
  }
  if (((s as any).beer_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).beer_count = 2;
  }
  if (((s as any).vodka_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).vodka_count = 5;
  }
  if (((s as any).sup_day ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).sup_count = 2;
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['vasilyhome', 'hallway'] },
    { label: 'Look in the fridge', goto: ['vasilyhome', 'fridge'] },
  ]);
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).beer_count ?? 0) === 2) {
    (s as any).r_beer = ' 2 beers,';
  } else {
    if (((s as any).beer_count ?? 0) === 1) {
      (s as any).r_beer = ' 1 beer,';
    } else {
      (s as any).r_beer = '';
    }
  }
  if (((s as any).vodka_count ?? 0) === 5) {
    (s as any).r_vodka = ' a full bottle of vodka,';
  } else {
    if (((s as any).vodka_count ?? 0) === 3) {
      (s as any).r_vodka = ' a half-empty bottle of vodka,';
    } else {
      if (((s as any).vodka_count ?? 0) === 1) {
        (s as any).r_vodka = ' a nearly empty bottle of vodka,';
      } else {
        (s as any).r_vodka = '';
      }
    }
  }
  if (((s as any).sup_count ?? 0) >= 1) {
    (s as any).r_sup = ' a large pot of soup';
  } else {
    (s as any).r_sup = '';
  }
  if (((s as any).beer_count ?? 0) === 0  &&  ((s as any).vodka_count ?? 0) === 0  &&  (!((s as any).sup_count ?? 0))) {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holodpusto.jpg"></center><br><font color = red>empty shelves.</font>';
  } else {
    (s as any).r_pusto = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/holod\' + rand(1, 3) + \'.jpg"></center>';
  }
  // TODO-QSP: dynamic text: You open the fridge and see:<<$r_vodka>><<$r_beer>><<$r_sup>><<$r_pusto>>
  scene.text(`You open the fridge and see:${((s as any).r_vodka ?? '')}${((s as any).r_beer ?? '')}${((s as any).r_sup ?? '')}${((s as any).r_pusto ?? '')}`);
  if (((s as any).beer_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink a beer', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    (st as any).beer_day = ((st as any).daystart ?? 0);
    (st as any).beer_count = ((st as any).beer_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
    scene.text('You take a bottle of beer from the fridge and drink it, quenching your thirst.');
    scene.actions([
      { label: 'Keep looking around', goto: ['vasilyhome', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['vasilyhome', 'vasilykitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).vodka_count ?? 0) > 0) {
    scene.actions([
      { label: 'Drink some vodka', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
    (st as any).vodka_day = ((st as any).daystart ?? 0);
    (st as any).vodka_count = ((st as any).vodka_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/sh...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
    scene.text('You pour some vodka in a glass and drink it. You shiver as you feel the warm, burning sensation slowly slide down your gullet.');
    scene.actions([
      { label: 'Put the bottle back in the fridge', goto: ['vasilyhome', 'fridge'] },
      { label: 'Drink more vodka', handler: (st: GameState) => {
    if ((!((st as any).vodka_count ?? 0))) {
      // TODO-QSP: dynamic text: <font color = red>There''s no vodka left, you drank it all!</font><center><img <...
      scene.text(`<font color = red>There's no vodka left, you drank it all!</font><center><img ${((st as any).set_imgh ?? '')} src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka0.jpg"></center>`);
    }
    if (((st as any).vodka_count ?? 0) > 0) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
      (st as any).vodka_day = ((st as any).daystart ?? 0);
      (st as any).vodka_count = ((st as any).vodka_count ?? 0) - (1);
      qspCall(st, 'stat', '');
      scene.text('You pour yourself another glass and drain it in one gulp. Wow, that stuff is strong!');
      scene.actions([
        { label: 'Put the bottle back in the fridge', goto: ['vasilyhome', 'fridge'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sup_count ?? 0) > 0) {
    scene.actions([
      { label: 'Eat a bowl of soup', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).sup_day = ((st as any).daystart ?? 0);
    (st as any).sup_count = ((st as any).sup_count ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/sup.jpg');
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) + (10);
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).fat = ((st as any).fat ?? 0) + (2);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (50);
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    }
    qspCall(st, 'cum_cleanup', '2');
    (st as any).pcs_breath = 0;
    // TODO-QSP: dynamic text: You happily eat a bowl of soup. <<$serg_obr>> Sergey sure knows how to cook!
    scene.text(`You happily eat a bowl of soup. ${((st as any).serg_obr ?? '')} Sergey sure knows how to cook!`);
    scene.actions([
      { label: 'Keep looking around', goto: ['vasilyhome', 'fridge'] },
      { label: 'Close the refrigerator', goto: ['vasilyhome', 'vasilykitchen'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Close the refrigerator', goto: ['vasilyhome', 'vasilykitchen'] },
  ]);
  scene.build();
}

function enterSergeyRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'vasilyhome';
  (s as any).menu_arg = 'sergey_room';
  (s as any).locM_arg = 'sergey_room';
  (s as any).locM = 'vasilyhome';
  (s as any).loc_arg = 'sergey_room';
  (s as any).loc = 'vasilyhome';
  (s as any).locclass = 'bedr';
  (s as any).track_loop = '';
  (s as any).music_loop = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Uncle Sergey\'s bedroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/smroom.jpg');
  scene.text('Sergey\'s bedroom looks just like any other bedroom. There\'s a large bed, a television with a VCR connected to it, and a large cabinet to store clothes in. A random amount of junk is deposited on one of the nightstands.');
  if (((s as any).hour ?? 0) < 7  ||  ((s as any).hour ?? 0) >= 23) {
    // TODO-QSP: dynamic text: When you come in, you see that<<$serg_obr>> <a href="exec: gt ''Serge_Shulgin'',...
    scene.text(`When you come in, you see that${((s as any).serg_obr ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Serge_Shulgin/u0027, /u0027sleep/u0027); return false;">Sergey</a> is currently on his bed, sound asleep.`);
  } else {
    if (((s as any).hour ?? 0) < 18  ||  ((s as any).hour ?? 0) >= 21) {
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 16) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSleep(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: When you come in, you see that<<$serg_obr>> <a href="exec: gt ''Serge_Shulgin'',...
        scene.text(`When you come in, you see that${((s as any).serg_obr ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027Serge_Shulgin/u0027, /u0027tv/u0027); return false;">Sergey</a> is relaxing on his bed, watching TV.`);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['vasilyhome', 'hallway'] },
  ]);
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a nap (2:00)', handler: (st: GameState) => {
    qspCall(st, 'sleep_simple', 'nap_base', 120);
    scene.text('Since Sergey isn\'t using his bed, you\'re sure he won\'t mind if you take a nap here. You get under the covers and snooze for a few hours, feeling less tired when you wake up.');
    scene.actions([
      { label: 'Get out of bed', goto: ['vasilyhome', 'sergey_room'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVasilyRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).track_loop = '';
  (s as any).music_loop = 1;
  qspCall(s, 'core_library', 'setloc', 'vasilyhome', 'vasily_room');
  (s as any).locclass = 'bedr';
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Vasily\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/vasily_room.jpg');
  scene.text('There is a dresser and small desk on one side of the room, with posters of bands and naked women along the walls. It\'s a messy room, and you can barely see the floor under all the clothes laying around. You can\'t tell if they\'re dirty or clean, not to mention the room smells of stale sweat, weed, stale beer and maybe a hint of urine.');
  if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 7) {
    scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vasily_asleep/u0027); return false;">Vasily</a> is sleeping on his narrow bed');
  } else {
    scene.text('A narrow <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027vasilyhome/u0027, /u0027vasily_bed/u0027); return false;">bed</a> is against the other wall.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the hallway', goto: ['vasilyhome', 'hallway'] },
  ]);
  scene.build();
}

function enterVasilyBed(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'vasilyhome';
  (s as any).menu_arg = 'vasily_bed';
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/vasily_room.jpg');
  scene.text('You lie on his bed and roll over. There\'s not much to do and you start feeling a bit bored, wishing Vasily was here.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the bed', goto: ['vasilyhome', 'vasily_room'] },
    { label: 'Take a nap', goto: ['vasilyhome', 'sleep_vasily_bed'] },
  ]);
  scene.build();
}

function enterSleepVasilyBed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  qspCall(s, 'sleep_simple', 'forced', 240);
  scene.text('You lay down and sleep for a few hours.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up', goto: ['vasilyhome', 'vasily_room'] },
  ]);
  scene.build();
}

function enterVasilyAsleep(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/vasya/vasya_sleep.jpg');
  scene.text('Vasily is fast asleep.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['vasilyhome', 'hallway'] },
    { label: 'Wake him up', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A11'] < 50) {
      qspGoto(st, 'vasilyhome', 'vasily_asleep1');
    }
    if (((st as any).npc_rel ?? 0)?.['A11'] >= 50) {
      qspGoto(st, 'vasilyhome', 'vasily_asleep2');
    }
  } },
  ]);
  scene.build();
}

function enterVasilyAsleep1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'npc_relationship', 'modify', 'A11', (-1));
  // TODO-QSP: dynamic text: What do you want <<$pcs_nickname>>? Can''t you see I''m sleeping?!
  scene.text(`What do you want ${((s as any).pcs_nickname ?? '')}? Can't you see I'm sleeping?!`);
  scene.text('"Can I lay next to you while I sleep?" you ask.');
  scene.text('"Go sleep on the small couch or just go home, you big baby!" Vasily answers.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['vasilyhome', 'hallway'] },
  ]);
  scene.build();
}

function enterVasilyAsleep2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: Vasily rubs his eyes. "What do you want <<$pcs_nickname>>?"
  scene.text(`Vasily rubs his eyes. "What do you want ${((s as any).pcs_nickname ?? '')}?"`);
  scene.text('"Can I sleep next to you?" you ask. "I can\'t get comfortable on the little sofa."');
  scene.text('He sighs and scoochs over to let you into the bed.');
  if (((s as any).npc_rel ?? 0)?.['A11'] >= 70) {
    qspCall(s, 'willpower', 'sex', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Suggest sex', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Suggest sex', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    if ((!((st as any).shgopsex_vasya_count ?? 0))) {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I''m beat. Go away and let me sleep."
      scene.text(`"${((st as any).pcs_nickname ?? '')}, I'm beat. Go away and let me sleep."`);
      scene.actions([
        { label: 'Sigh', goto: ['vasilyhome', 'hallway'] },
      ]);
    } else {
      if (((st as any).shgopsex_vasya_count ?? 0) > 0) {
        (st as any).gopsex_n_npc = 1;
        (st as any).shgopsex_vasya_day = ((st as any).daystart ?? 0);
        (st as any).shgopsex_vasya_count = ((st as any).shgopsex_vasya_count ?? 0) - (1);
        qspCall(st, 'boyStat', 'A11');
        qspCall(st, 'gopsex', 'settings');
        qspCall(st, 'gopsex', 'shgopsex');
      }
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a nap', goto: ['vasilyhome', 'sleep_vasily_bed'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'sh_hooker':
      enterShHooker(s, scene);
      break;
    case 'vasily_beer':
      enterVasilyBeer(s, scene);
      break;
    case 'drunken_sex_yes':
      enterDrunkenSexYes(s, scene);
      break;
    case 'drunken_sex_no':
      enterDrunkenSexNo(s, scene);
      break;
    case 'drunken_sleep':
      enterDrunkenSleep(s, scene);
      break;
    case 'vasily_sex_sonya':
      enterVasilySexSonya(s, scene);
      break;
    case 'shultv':
      enterShultv(s, scene);
      break;
    case 'view_pornotv':
      enterViewPornotv(s, scene);
      break;
    case 'vasily_bazar_night':
      enterVasilyBazarNight(s, scene);
      break;
    case 'dan_bazar':
      enterDanBazar(s, scene);
      break;
    case 'vitek_bazar':
      enterVitekBazar(s, scene);
      break;
    case 'vasily_bazar_day':
      enterVasilyBazarDay(s, scene);
      break;
    case 'vasily_rep':
      enterVasilyRep(s, scene);
      break;
    case 'vasily_vodka':
      enterVasilyVodka(s, scene);
      break;
    case 'vasily_lern':
      enterVasilyLern(s, scene);
      break;
    case 'vasily_lern_sex_no':
      enterVasilyLernSexNo(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'sonia_sex':
      enterSoniaSex(s, scene);
      break;
    case 'sonia_ev':
      enterSoniaEv(s, scene);
      break;
    case 'sonia_chat':
      enterSoniaChat(s, scene);
      break;
    case 'vasilykitchen':
      enterVasilykitchen(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'sergey_room':
      enterSergeyRoom(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'vasily_room':
      enterVasilyRoom(s, scene);
      break;
    case 'vasily_bed':
      enterVasilyBed(s, scene);
      break;
    case 'sleep_vasily_bed':
      enterSleepVasilyBed(s, scene);
      break;
    case 'vasily_asleep':
      enterVasilyAsleep(s, scene);
      break;
    case 'vasily_asleep1':
      enterVasilyAsleep1(s, scene);
      break;
    case 'vasily_asleep2':
      enterVasilyAsleep2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vasilyhome: LocationDef = {
  name: 'vasilyhome',
  title: 'Hallway',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'bedr',
  enter: enter,
};
