import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).sexloc = 'office';
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'start';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Engineering company offices</b></center>');
  scene.img('images/locations/city/citycenter/office/lobby.jpg');
  if (((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed') {
    if (((s as any).POffice ?? 0) === 1  &&  ((s as any).PCloSkirt ?? 0) > 0) {
      scene.text('You walk into the building and wave at the receptionist, who smiles back at you as you head for the elevators.');
      scene.actions([
        { label: 'Go to your floor', goto: ['office', 'work_floor'] },
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
      ]);
    } else {
      scene.text('You walk into the building and wave at the receptionist, who shakes her head and waves you over. "You know the dress code. I\'m afraid you can\'t go to work dressed like that. You need to be wearing a woman\'s business suit with a skirt. You will need to go home and change before you can go to work." You sigh and nod before turning to leave.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
      ]);
    }
  } else {
    if (((s as any).job_hiring_step ?? 0)?.['city_office_secretary'] >= 1) {
      scene.text('You enter the office building of Titran-Express Engineering. The lobby is very fancy, with black marble floors and white marble walls with lots of gold colored trim. Near the doors is a desk with a reception area, with several couches nearby. A corridor leads off to a long row of elevators. As you look around, you notice the receptionist is looking at you, likely wondering why you\'re here. You smile and walk over to her. "Hello, I\'m here for an interview with Mrs Torbica."');
      scene.text('She smiles at you. "I assume you have your secretary certification?"');
      if (((s as any).license ?? 0)?.['secretary'] === 1) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.text('<center><b>Engineering company offices</b></center>');
    scene.img('images/locations/city/citycenter/office/lobby.jpg');
    scene.text('You nod your head. "Yes, I do."');
    scene.text('"Excellent," she replies before she looks down at her screen, then back at you with a smile. "Let me call her."');
    scene.text('She picks up the phone and makes a call. "Excuse me ma\'am, a young lady is here looking to get an interview with you." A brief pause ensues while she listens to the reply. "Of course ma\'am." Then she hangs up and looks back at you. "Please go down the corridor to the elevators and take it up to the twenty third floor, then make a right. Go to the end of the hall and take a left, then go to the corner office and they will get you sorted. Have a nice day."');
    scene.actions([
      { label: 'Go to the interview', goto: ['office', 'interview'] },
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.text('<center><b>Engineering company offices</b></center>');
    scene.img('images/locations/city/citycenter/office/lobby.jpg');
    scene.text('You shake your head. "No. Do I need one?"');
    scene.text('She keeps up the pleasant smile. "Yes, I\'m afraid you do. You can\'t interview for the job without one."');
    scene.text('You frown a little. You were hoping to get this job. "Oh, I see. Thank you."');
    scene.text('She smiles. "My pleasure. If you ever get your certification, please feel free to come back and apply then. Have a nice day."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('You enter the office building of Titran-Express Engineering. The lobby is very fancy, with black marble floors and white marble walls with lots of gold colored trim. Near the doors is a desk with a reception area, with several couches nearby. A corridor leads off to a long row of elevators. As you look around, you notice the receptionist is looking at you, likely wondering why you\'re here. Perhaps you should see if they have a job vacany available? A large office building like this must have lots of secretaries. You walk over to the receptionist and smile at her. "Is there a job opening available for a secretary?"');
      scene.text('She smiles at you. "I assume you have your secretary certification?"');
      if (((s as any).license ?? 0)?.['secretary'] === 1) {
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    scene.text('<center><b>Engineering company offices</b></center>');
    scene.img('images/locations/city/citycenter/office/lobby.jpg');
    scene.text('You nod your head. "Yes, I do."');
    scene.text('"Excellent," she replies before she looks down at her screen, then back at you with a smile. "Yes, there is. Mrs Torbica is doing interviews for the position. Let me call her and see if she has time to see you." She picks up the phone and makes a call. "Excuse me ma\'am, a young lady is here looking to get an interview with you." A brief pause ensues while she listens to the reply. "Of course ma\'am." Then she hangs up and looks back at you. "Please go down the corridor to the elevators and take it up to the twenty third floor, then make a right. Go to the end of the hall and take a left, then go to the corner office and they will get you sorted. Have a nice day."');
    scene.actions([
      { label: 'Go to the interview', goto: ['office', 'interview'] },
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.text('<center><b>Engineering company offices</b></center>');
    scene.img('images/locations/city/citycenter/office/lobby.jpg');
    scene.text('You shake your head. "No. Do I need one?"');
    scene.text('She keeps up the pleasant smile. "Yes, I\'m afraid you do. You can\'t interview for the job without one."');
    scene.text('You frown a little. You were hoping to get this job. "Oh, I see. Thank you."');
    scene.text('She smiles. "My pleasure. If you ever get your certification, please feel free to come back and apply then. Have a nice day."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterWorkFloor(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event';
  (s as any).sexloc = 'office';
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'work_floor';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Engineering company offices</b></center>');
  scene.img('images/locations/city/citycenter/office/lobby.jpg');
  scene.text('This is the main hall for your work floor. It is nicely decorated and you can hear other people working in the office.');
  if (((s as any).job_status ?? 0)?.['city_office_secretary'] === 'employed') {
    if ((!((s as any).PCloOffice ?? 0))) {
      scene.text('You are not dressed according to the corporate dress code.');
    } else {
      if (qspFunc(s, 'jobs', 'is_arrival_time', 'city_office_secretary') === 1) {
        scene.actions([
          { label: 'Go to work', handler: (st: GameState) => {
    (st as any).minut = 60 - ((st as any).minut ?? 0);
    qspCall(st, 'jobs', 'clock', 'city_office_secretary');
    qspGoto(st, 'office', 'secretary_office');
  } },
        ]);
      } else {
        if (qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
          if (((s as any).job_last_work_day ?? 0)?.['city_office_secretary'] === ((s as any).daystart ?? 0)) {
            scene.actions([
              { label: 'Go back to your work station', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 12) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0));
    }
    qspCall(st, 'stat', '');
    qspGoto(st, 'office', 'work');
  } },
            ]);
          } else {
            scene.text('You\'re too late for work, so you\'re told to take the day off.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Go to the break room', goto: ['office', 'break_room'] },
      { label: 'Go to restrooms', goto: ['office', 'restrooms'] },
      { label: 'Resign', handler: (st: GameState) => {
    qspGoto(st, 'office', 'resign');
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterSecretaryOffice(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'secretary_office';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
  }
  qspCall(s, 'stat', '');
  if (qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
    scene.text('<center><b>corridor</b></center>');
    scene.img('images/locations/city/citycenter/office/secoffice.jpg');
    scene.text('There are rows of tables divided into small work stations. Most of the people here are young attractive women, with a few older but still attracive women, and a couple of young attractive men. Many of the work stations are filled by your co-workers, who are busy with whatever tasks they need to do. You walk over to your assigned work station and take a seat.');
    scene.actions([
      { label: 'Get to work', goto: ['office', 'work'] },
      { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
    ]);
  } else {
    scene.text('<center><b>corridor</b></center>');
    scene.img('images/locations/city/citycenter/office/secoffice_afterhours.jpg');
    scene.text('The secretary office is empty. It seems like everyone has gone home for the day.');
    scene.actions([
      { label: 'Leave work', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    ]);
  }
  scene.build();
}

function enterBreakRoom(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'break_room';
  (s as any).loc = 'office';
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'break_room';
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Break Room</b></center>');
  scene.img('images/locations/city/citycenter/office/breakroom.jpg');
  scene.text('The break room is neat and clean and features a large table in the middle of the room flanked by a couch along one wall with a few comfortable chairs. A set of cabinets, a sink, some appliances and a fridge to store your lunch, if you happen to bring one, are set along the far wall.');
  qspCall(s, 'kit_din', 'driwater');
  if (((s as any).mc_inventory ?? 0)?.['food_sandwich'] > 0  &&  ((s as any).hour ?? 0) === 12) {
    scene.actions([
      { label: 'Eat your lunch', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['food_sandwich'] = 0;
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (40);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).fat = ((st as any).fat ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.text('<center><b>Break Room</b></center>');
    scene.img('images/locations/city/citycenter/office/eat_lunch.jpg');
    scene.text('You get your food out of the fridge and warm it up in the microwave before you sit down to enjoy a pleasant lunch.');
    scene.actions([
      { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
      { label: 'Go back to your work station', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 12) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0));
    }
    qspCall(st, 'stat', '');
    qspGoto(st, 'office', 'work');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enterRestrooms(s: GameState, scene: SceneBuilder): void {
  (s as any).boy = undefined;
  (s as any).office_ladies_entry = 0;
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'restrooms';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Office Restrooms</b></center>');
  scene.img('images/locations/city/citycenter/office/restrooms.jpg');
  scene.text('You go to the restrooms at the end of the hall. There is a sign for the mens and the women\'s restroom.');
  qspCall(s, 'willpower', 'exhib', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Go to the mens restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the mens restroom', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'office', 'mens_restrooms');
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to the women\'s restroom', goto: ['office', 'womens_restrooms'] },
    { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enterWomensRestrooms(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'womens_restrooms';
  (s as any).locM = 'office';
  (s as any).locM_arg = 'womens_restrooms';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Women\'s Restrooms</b></center>');
  scene.img('images/locations/city/citycenter/office/womensbr.jpg');
  if ((!((s as any).office_ladies_entry ?? 0))) {
    (s as any).office_ladies_entry = 1;
    scene.text('You enter the women\'s restroom and find some women at the sink, one checking her makeup as they both talk. They give you a brief smile before they both exit, leaving you alone in the restroom.');
  }
  scene.text('The restroom is very clean and is one of the nicest, if not the nicest, restrooms you\'ve ever been in.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan', 'no_prost');
  scene.actions([
    { label: 'Look in the mirror', goto: ['mirror', 'start'] },
    { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enterMensRestrooms(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'mens_restrooms';
  (s as any).locM = 'office';
  (s as any).locM_arg = 'mens_restrooms';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mens Restrooms</b></center>');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    (s as any).temp = (Math.floor(Math.random() * 6) + 1);
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/fuck1.jpg');
      scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. You\'ve walked in on one of your fellow secretaries naked and bent over the sink as one of the managers fucks her hard from behind. Unsure if you were spotted, you quickly duck back outside.');
      qspCall(s, 'arousal', 'voyeur_sex', 2);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['office', 'restrooms'] },
      ]);
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/fuck2.jpg');
        scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. One of your fellow secretaries is naked from the waist down and bent over, holding onto one of the stall walls as one of the managers fucks her hard from behind. You quickly duck back outside before you\'re spotted.');
        qspCall(s, 'arousal', 'voyeur_sex', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['office', 'restrooms'] },
        ]);
      } else {
        if (((s as any).temp ?? 0) === 3) {
          scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/group_fuck.jpg');
          scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in. but that\'s not what catches your eye. One of your fellow secretaries is naked from the waist down and leaning against one of the stall walls as one of the managers fucks her hard from behind while another stands next to them, presumably waiting his turn. You quickly duck back outside before you\'re spotted.');
          qspCall(s, 'arousal', 'voyeur_sex', 2);
          qspCall(s, 'arousal', 'end');
          scene.actions([
            { label: 'Leave', goto: ['office', 'restrooms'] },
          ]);
        } else {
          if (((s as any).temp ?? 0) === 4) {
            scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/older_bj.jpg');
            scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. One of your fellow secretaries is squatting down in front of one of the senior managers, her tits pulled out as she sucks his dick. You quickly duck back outside before you\'re spotted.');
            qspCall(s, 'arousal', 'voyeur_sex', 2);
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Leave', goto: ['office', 'restrooms'] },
            ]);
          } else {
            if (((s as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/stall_bj.jpg');
              scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. Under one of the stalls, you see what appears to be a woman sitting on her ankles on the floor, facing in, while male legs with pants and underwear pushed down around his ankles faces her. You can hear him moaning softly and the distinct slurping sounds of a sloppy blowjob. You quickly duck back outside before you\'re spotted.');
              qspCall(s, 'arousal', 'voyeur_sex', 2);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Leave', goto: ['office', 'restrooms'] },
              ]);
            } else {
              scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/stall_fuck.jpg');
              scene.text('You gather your courage up and walk into the mens restroom. The restroom is very clean and nice looking, you think it is the nicest mens room you have ever been in. But that\'s not what catches your eye. No that would be one of your fellow secretaries naked from the waist down, riding one of the male manager cowgirl style while he sits on one of the toilets. Both of them are moaning loudly and she seems to be enjoying herself as much as he is. You quickly duck back outside before you are seen by either of them.');
              qspCall(s, 'arousal', 'voyeur_sex', 2);
              qspCall(s, 'arousal', 'end');
              scene.actions([
                { label: 'Leave', goto: ['office', 'restrooms'] },
              ]);
            }
          }
        }
      }
    }
  } else {
    scene.img('images/locations/city/citycenter/office/mensbr.jpg');
    scene.text('You gather your courage and walk into the mens restroom. It\'s empty, and you\'re not sure if you\'re happy or disappointed by that. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in.');
    qspCall(s, 'din_van', 'tampon');
    qspCall(s, 'din_van', 'quickwash');
    qspCall(s, 'din_van', 'basin');
    qspCall(s, 'din_van', 'publicpan', 'no_prost');
    scene.actions([
      { label: 'Look in the mirror', goto: ['mirror', 'start'] },
      { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
    ]);
  }
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  (s as any).boy = undefined;
  (s as any).menu_loc = 'office';
  (s as any).menu_arg = 'work';
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
  }
  qspCall(s, 'stat', '');
  if (((s as any).job_last_work_day ?? 0)?.['city_office_secretary'] !== ((s as any).daystart ?? 0)  &&  qspFunc(s, 'jobs', 'is_work_time', 'city_office_secretary') === 1) {
    qspCall(s, 'jobs', 'clock', 'city_office_secretary');
  }
  scene.text('<center><b>Your workstation</b></center>');
  scene.img('images/locations/city/citycenter/office/work_station.jpg');
  scene.text('Once seated at your work station, you greet a few of your co-workers before looking at what work you need to get done today.');
  if ((((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 12)  ||  (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) < 17)) {
    scene.actions([
      { label: 'Start working', handler: (st: GameState) => {
    if (((st as any).hour ?? 0) === 12) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0) + 240);
    }
    if (((st as any).hour ?? 0) === 8  ||  ((st as any).hour ?? 0) === 13) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0) + 180);
    }
    if (((st as any).hour ?? 0) === 9) {
      (st as any).minut = ((st as any).minut ?? 0) + (60 - ((st as any).minut ?? 0) + 120);
    }
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0  &&  ((st as any).hour ?? 0) >= 8  &&  ((st as any).hour ?? 0) < 17) {
    }
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 27) + 1);
    if (((st as any).temp ?? 0) === 1) {
      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/answeringphone` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
      scene.text('You spend most of your work period on the phone, either talking to clients or managers about various things.');
      scene.actions([
        { label: 'Go back to work', goto: ['office', 'secretary_office'] },
      ]);
    } else {
      if (((st as any).temp ?? 0) === 2) {
        scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/getbinders` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
        scene.text('You spend most of your work period collecting several binders on various projects and taking them from office to office while the managers look over them until they send you to someone else or to finally replace the binders.');
        scene.actions([
          { label: 'Go back to work', goto: ['office', 'secretary_office'] },
        ]);
      } else {
        if (((st as any).temp ?? 0) === 3) {
          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/getcoffee` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
          scene.text('You spend most of your work period fetching coffee for the various managers. A few make some inappropriate comments, but you ignore them.');
          scene.actions([
            { label: 'Go back to work', goto: ['office', 'secretary_office'] },
          ]);
        } else {
          if (((st as any).temp ?? 0) === 4) {
            scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/getfiles` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
            scene.text('You spend most of your work period collecting files and taking them to different managers in different offices, or getting files from them and filing them away.');
            scene.actions([
              { label: 'Go back to work', goto: ['office', 'secretary_office'] },
            ]);
          } else {
            if (((st as any).temp ?? 0) === 5) {
              scene.img('images/locations/city/citycenter/office/work/helpcoworker1.jpg');
              scene.text('You spend most of your work period helping a co-worker on a large project she is having trouble with.');
              scene.actions([
                { label: 'Go back to work', goto: ['office', 'secretary_office'] },
              ]);
            } else {
              if (((st as any).temp ?? 0) === 6) {
                scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/makecopies` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
                scene.text('You spend most of your work period in the copy room making copies of documents and organizing them into binders before filing them away.');
                scene.actions([
                  { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                ]);
              } else {
                if (((st as any).temp ?? 0) === 7) {
                  scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/takenotes` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
                  scene.text('You spend most of your work period in a manager\'s office taking notes as he brainstorms out loud his plans for a new project the company is about to start soon.');
                  qspGoto(st, 'office', 'secretary_office');
                } else {
                  if (((st as any).temp ?? 0) === 8) {
                    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/workatdesk` + (Math.floor(Math.random() * 7) + 1) + '.jpg"></center>');
                    scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks.');
                    scene.actions([
                      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                    ]);
                  } else {
                    if (((st as any).temp ?? 0) === 9) {
                      qspCall(st, 'mood', 'raise', 'tiny');
                      scene.img('images/locations/city/citycenter/office/work/relax1.jpg');
                      scene.text('This work period has proven to be fairly relaxing. You\'ve rarely been asked to do much of anything and so have spent most of your time surfing the net on your computer, playing on your phone or working on your makeup.');
                      scene.actions([
                        { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                      ]);
                    } else {
                      if (((st as any).temp ?? 0) === 10) {
                        scene.img('images/locations/city/citycenter/office/events/argument.jpg');
                        scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks before you\'re interrupted by several of your fellow secretaries arguing. It is quickly broken up by a manager from a nearby office as you get the impression they were arguing over a man.');
                        scene.actions([
                          { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                        ]);
                      } else {
                        if (((st as any).temp ?? 0) === 11) {
                          scene.img('images/locations/city/citycenter/office/events/butt_grab.jpg');
                          scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. In one of the offices, you are placing the files on the desk and are slightly bending forward to do so when you suddenly feel a hand groping your ass and firmly squeezing it.');
                          qspCall(st, 'arousal', 'foreplay', 2);
                          qspCall(st, 'stat', '');
                          scene.actions([
                            { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/butt_grab_allow.jpg');
    scene.text('You ignore him and let him keep squeezing your ass since you need this job. He then directs you to stack the files in a certain order, and he keeps feeling you up as you do as he asked. Once you\'re done, you return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                            { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/butt_grab_no.jpg');
    scene.text('You turn your head towards him. "Please stop that."');
    scene.text('He laughs. "You need to learn your place if you want to keep this job."');
    scene.text('You swallow at the not so veiled threat. "I don\'t like it. I just want to do my job."');
    scene.text('He laughs again. "This is part of your job, but you\'re free to go. For now." He lets go of you and you finish placing the files. Before you leave, he slaps your ass pretty hard. Flustered, you quickly return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                          ]);
                        } else {
                          if (((st as any).temp ?? 0) === 12) {
                            scene.img('images/locations/city/citycenter/office/events/butt_slap.jpg');
                            scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. In one of the offices, you are placing the files on the desk when you feel the sting of a hard slap on the ass. "That\'s a good girl! Now get back to work!" he says with a grin.');
                            qspCall(st, 'arousal', 'foreplay', 2);
                            qspCall(st, 'arousal', 'end');
                            scene.actions([
                              { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                            ]);
                          } else {
                            if (((st as any).temp ?? 0) === 13) {
                              scene.img('images/locations/city/citycenter/office/events/coffee_grab.jpg');
                              scene.text('You spend most of your work period fetching coffee for the various managers. A few make some inappropriate comments and you manage to ignore them, but one of them grabs you firmly by the ass and squeezes it hard. You manage to squirm free and get back to work.');
                              qspCall(st, 'arousal', 'foreplay', 2);
                              qspCall(st, 'arousal', 'end');
                              scene.actions([
                                { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                              ]);
                            } else {
                              if (((st as any).temp ?? 0) === 14) {
                                scene.img('images/locations/city/citycenter/office/events/copier_sit.jpg');
                                scene.text('You spend most of your work period in the copy room making copies of documents and organizing them into binders before filing them away. During one of your trips to the copy room, you find one of your fellow secretaries sitting on the copier photocopying her ass. A small stack of copies of her ass already sit in the bin. She turns to you and smiles. "It\'s for the manager. To brighten up their day!" she says with a giggle.');
                                scene.text('You don\'t really know how to respond, so you just nod. "Okay, I\'ll come back later then…" She giggles as you leave and you wait out in the hall until she leaves before getting back to work.');
                                qspCall(st, 'arousal', 'voyeur', 2);
                                qspCall(st, 'arousal', 'end');
                                scene.actions([
                                  { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                ]);
                              } else {
                                if (((st as any).temp ?? 0) === 15) {
                                  scene.img('images/locations/city/citycenter/office/events/copier_tits.jpg');
                                  scene.text('You spend most of your work period in the copy room making copies of documents and organizing them into binders before filing them away. During one of your trips to the copy room, you find one of your fellow secretaries leaning across the copier with her shirt pulled open, photocopying her tits. A small stack of copies of her breasts already sit in the bin. She turns her head towards you and smiles. "It\'s for the manager. To brighten up their day!" she says with a giggle.');
                                  scene.text('You don\'t really know how to respond, so you just nod. "Okay, I\'ll come back later then…" She giggles as you leave and you wait out in the hall until she leaves before getting back.');
                                  qspCall(st, 'arousal', 'voyeur', 2);
                                  qspCall(st, 'arousal', 'end');
                                  scene.actions([
                                    { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                  ]);
                                } else {
                                  if (((st as any).temp ?? 0) === 16) {
                                    qspCall(st, 'mood', 'lower', 'small');
                                    scene.img('images/locations/city/citycenter/office/events/flying_files.jpg');
                                    scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. In one of the offices, you place the files on the desk, but as soon as the manager picks them up, he throws them back at you. "What the fuck is this? These aren\'t the files I asked for, you stupid fucking cow!"');
                                    scene.text('You\'re a little shocked by his outburst. "I\'m sorry, I must have taken them to the wrong office. I will go and get them now."');
                                    scene.text('He sneers at you. "Clean this up and get my files. I won\'t tolerate these kinds of mistakes! Young pretty things like you are easily replaced." He throws a few more loose papers from the files on the floor before he goes back to work. You quickly gather up the papers and go back to work.');
                                    scene.actions([
                                      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                    ]);
                                  } else {
                                    if (((st as any).temp ?? 0) === 17) {
                                      scene.img('images/locations/city/citycenter/office/events/get_file1.jpg');
                                      scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. While you\'re getting some files out of one of the filing cabinets, you feel someone walk up behind you and place their hands on your hips.');
                                      qspCall(st, 'arousal', 'foreplay', 2);
                                      qspCall(st, 'arousal', 'end');
                                      scene.actions([
                                        { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/get_file2.jpg');
    scene.text('You ignore them and continue gathering the files you need. Their hands slide down to your thighs and they step even closer to you. You can feel a semi erect dick press against your ass as you finish gathering what you need and pull away from him with the files in hand. "Excuse me, but I need to deliver these."');
    scene.text('He lets go and grins at you. "I have a delivery for you as well." You give him a fake smile and walk out of the room to deliver the files and return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                        { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You pull away from his grasp and turn to face him. "Please stop that."');
    scene.text('He laughs. "You need to learn your place if you want to keep this job."');
    scene.text('You swallow at the not so veiled threat. "I just want to do my job in peace. Is that too much to ask?"');
    scene.text('He laughs even more. "This is part of your job. Remember that in the future." He turns and walks out, leaving you flustered as you return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                      ]);
                                    } else {
                                      if (((st as any).temp ?? 0) === 18) {
                                        scene.img('images/locations/city/citycenter/office/events/harras1.jpg');
                                        scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. In one of the offices, the manager is away from his desk and directs you to place the files on his desk. As you set the files down, you feel someone walk up behind you and place their hands on your hips before they start roaming around your body.');
                                        qspCall(st, 'arousal', 'foreplay', 2);
                                        qspCall(st, 'arousal', 'end');
                                        scene.actions([
                                          { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/harras_allow.jpg');
    scene.text('One hand slides up your side and grabs your breast before he turns you slightly and leans in to nuzzle and lick your neck. You find this impossible to ignore.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/harras2.jpg');
    scene.text('You choose to ignore it as best you can as he lifts one of your legs up and places it on his chair. He pulls your skirt up and starts groping your ass with his hands as he moves closer. Just when you think he\'s going to do more, another manager comes in and stops.');
    scene.text('Instead of looking shocked, he just grins. "Sorry to interrupt Ruvim, but we\'ve got a meeting."');
    scene.text('The one feeling you up suddenly stops. "Fuck! Now?" The other manager nods before leaving as Ruvim turns his attention back to you and slaps your ass hard. "We\'ll have to finish this some other time." He then walks out of the office, leaving you to straighten out your skirt before going back to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
      { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/harras_no.jpg');
    scene.text('You try to step away, but he grabs hold of you to hold you in place. You try to pull his hands away, but he\'s stronger than you are. "Please stop that."');
    scene.text('He laughs and pulls up your skirt. "You need to learn your place if you want to keep this job."');
    scene.text('You swallow at the not so veiled threat. "I just want to do my job in peace. Is that too much to ask?"');
    scene.text('He laughs. "This is part of your job, but you can go. For now." He lets go of you, allowing you to pull away and leave. Feeling flustered, you quickly return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
    ]);
  } },
                                          { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/harras_no.jpg');
    scene.text('You try to step away, but he grabs hold of you to hold you in place. You try to pull his hands free, but he\'s stronger than you are. "Please stop that."');
    scene.text('He laughs and pulls up your skirt. "You need to learn your place if you want to keep this job."');
    scene.text('You swallow at the not so veiled threat. "I just want to do my job in peace. Is that too much to ask?"');
    scene.text('He laughs. "This is part of your job, but you can go. For now." He lets go of you, allowing you to pull away and leave. Feeling flustered, you quickly return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                        ]);
                                      } else {
                                        if (((st as any).temp ?? 0) === 19) {
                                          scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/getfiles` + (Math.floor(Math.random() * 5) + 1) + '.jpg"></center>');
                                          scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. After delivering a file to one of the senior managers, he stops you when you turn to leave. "Excuse miss, but can you retrieve my pen?" He doesn\'t sound like he\'s asking.');
                                          scene.text('You smile at him. "Of course, sir. Where did you last see it?"');
                                          scene.text('He points to some chairs. "I last had it sitting over there. I think I might have dropped it on the floor."');
                                          scene.actions([
                                            { label: 'Look for the pen', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/look.jpg');
    scene.text('You smile and start trying to look for the pen. After a few minutes, you get down on your hands and knees and proceed to look under everything in his office. You quickly realize that your ass is on full display to him the entire time before you give up and quickly sit up on your knees. "I\'m sorry, but I don\'t think it\'s here, sir."');
    scene.text('He has a lustful smile on his face as he holds up a pen. "Silly me! I had it in my jacket pocket the whole time! Thank you for looking though. You best get back to work, young lady."');
    scene.text('You just nod and smile at him as you leave his office and go back to work.');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                            { label: 'Don\'t look for the pen', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/hallway.jpg');
    scene.text('"I\'m sorry, but I don\'t have time right now. I have several other files I have to deliver," you say to him with a sweet smile as nicely as you can.');
    scene.text('He frowns deeply and looks unhappy. He\'s about to say something when you decide to quickly walk out of his office. "My apologies, but I really must be going." With that you leave before he can say anything in response.');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                          ]);
                                        } else {
                                          if (((st as any).temp ?? 0) === 20) {
                                            scene.img('images/locations/city/citycenter/office/events/move_hair.jpg');
                                            scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. While you\'re working, one of the managers comes by and sits on the edge of your desk. He makes a bit of small talk with you before he suddenly reaches over and brushes your hair back over your ear. "My my, you are a cute one." With that, he gets up and walks away as you notice several of the other secretaries giving you knowing smiles. You do your best to forget about it and go back to work.');
                                            scene.actions([
                                              { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                            ]);
                                          } else {
                                            if (((st as any).temp ?? 0) === 21) {
                                              qspCall(st, 'mood', 'raise', 'tiny');
                                              scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/events/office_race` + (Math.floor(Math.random() * 2) + 1) + '.jpg"></center>');
                                              scene.text('You spend most of your work period getting files and taking them to different managers in different offices, or getting files from them and filing them away. While delivering a file to one of the managers, you are nearly run over by some of your co-workers. Two of the managers are pushing office chairs with a couple of your fellow secretaries sitting on them down the hallway in some apparent race. You jump aside just in time as they rush past you and down the hall, all of them laughing as they go. Once they\'re clear, you go back to delivering files.');
                                              scene.actions([
                                                { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                              ]);
                                            } else {
                                              if (((st as any).temp ?? 0) === 22) {
                                                scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/events/shoulder` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
                                                scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. While you\'re working, one of the managers comes up behind you and places his hands on your shoulders. "My my, you feel tense," he says as he starts massaging your shoulders. He\'s pretty good at it and you feel yourself relaxing.');
                                                qspCall(st, 'arousal', 'massage', 2);
                                                qspCall(st, 'stat', '');
                                                scene.actions([
                                                  { label: 'Let him', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'fame', 'city', 'sex', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/officemassage.jpg');
    scene.text('You keep working and let him massage your shoulders since it feels really good. After a few minutes of this, his hands slide down to your chest and he starts grabbing and squeezing your breasts.');
    qspCall(st, 'arousal', 'massage', 5, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/officeharras.jpg');
    scene.text('You choose to ignore it as best you can as he plays with your breasts for a few more minutes. You notice several of your fellow secretaries glancing in your direction. Some seem pissed, or maybe jealous, while others just look amused. None of them look surprised or act like this is out of place, so you do your best to work while he plays with your breasts. After a few more minutes, he finally lets go and walks away. "Have fun ladies." Several of the women giggle as you all go back to work.');
    qspCall(st, 'arousal', 'foreplay', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
      { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_resist.jpg');
    scene.text('You turn your body away from him as best as you can and push his hands away from you. "Please stop that."');
    scene.text('He growls. "Fine! I try and do something nice and this is the thanks I get… Fucking bitch…" he mumbles before storming off. You notice all the other secretaries looking at you and get the feeling you just made a mistake. You put your head down and do your best to focus on your work.');
    qspCall(st, 'arousal', 'foreplay', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
    ]);
  } },
                                                  { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_resist.jpg');
    scene.text('You turn your body away from him as best as you can and push his hands away from you. "Please stop that."');
    scene.text('He growls. "Fine! I try and do something nice and this is the thanks I get… Fucking bitch…" he mumbles before storming off. You notice all the other secretaries looking at you and get the feeling you just made a mistake. You put your head down and do your best to focus on your work.');
    qspCall(st, 'arousal', 'massage', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                                ]);
                                              } else {
                                                if (((st as any).temp ?? 0) === 23) {
                                                  scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/work/makecopies` + (Math.floor(Math.random() * 4) + 1) + '.jpg"></center>');
                                                  scene.text('You spend most of your work period in the copy room making copies of documents and organizing them into binders before filing them away. As you\'re standing at the printer, you hear someone walking up behind you and feel a hand groping and squeezing your ass.');
                                                  qspCall(st, 'arousal', 'foreplay', 2);
                                                  qspCall(st, 'stat', '');
                                                  scene.actions([
                                                    { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/printer_grab.jpg');
    scene.text('As you ignore him, his hands continue to group your ass until they slide up to your hips as he steps even closer behind you and you can feel his semi erect dick pressed against your ass. Finally having the files you need, you grab them and quickly pull away from him. "Excuse me, but I need to deliver these."');
    scene.text('He lets go and grins at you. "I have a delivery for you as well." You give him a fake smile and walk out of the room to deliver the files and return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                                    { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/no.jpg');
    scene.text('You step away pulling away from his grasp and turn to face him. "Please stop that."');
    scene.text('He laughs. "You need to learn your place if you want to keep this job."');
    scene.text('You swallow at the not so veiled threat. "I just want to do my job in peace. Is that too much to ask?"');
    scene.text('He laughs. "This is part of your job. Remember that in the future." He turns and walks out, leaving you flustered as you return to work.');
    qspCall(st, 'arousal', 'foreplay', 2);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                                  ]);
                                                } else {
                                                  if (((st as any).temp ?? 0) === 24) {
                                                    scene.img('images/locations/city/citycenter/office/events/selfie_bra.jpg');
                                                    scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. You glance up to see one of your fellow secretaries with her blouse pulled open, exposing her bra as she takes several selfies. You watch her for a few seconds before returning to your work, occasionally glancing up at her until she finishes.');
                                                    qspCall(st, 'arousal', 'voyeur', 2);
                                                    qspCall(st, 'arousal', 'end');
                                                    scene.actions([
                                                      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                                    ]);
                                                  } else {
                                                    if (((st as any).temp ?? 0) === 25) {
                                                      scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/locations/city/citycenter/office/events/shoulder` + (Math.floor(Math.random() * 3) + 1) + '.jpg"></center>');
                                                      scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. As you\'re working, one of the managers comes up behind you and places his hands on your shoulders. "What are you working on?" he asks before he starts giving you some pointers, but as he does so he keeps leaning in closer until you feel his crotch pressed against your upper back.');
                                                      qspCall(st, 'arousal', 'massage', 2);
                                                      qspCall(st, 'stat', '');
                                                      scene.actions([
                                                        { label: 'Ignore it', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'mood', 'raise', 'small');
    qspCall(st, 'fame', 'city', 'sex', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_allow.jpg');
    scene.text('You keep working while letting him crowd you at your desk. At least his advice is helpful and helps you finish your work a bit faster. "Thanks for your help, but I think I\'ve got it from here," you tell him.');
    qspCall(st, 'arousal', 'massage', 5, 'inhibition');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    (st as any).office_slut = ((st as any).office_slut ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_kiss.jpg');
    scene.text('To your surprise, he reaches down, grabs one of your hands and kisses the back of it. "You are most welcome." With that, he turns and walks away. You\'re unsure what just happened, but notice the amused smiles from some of your co-workers, with a few looking jealous. You do your best to ignore the looks and go back to work.');
    qspCall(st, 'arousal', 'foreplay', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
      { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_resist.jpg');
    scene.text('You turn your body away from him as best as you can and push his hands away from you. "Please stop that."');
    scene.text('He growls. "Fine! I try and do something nice and this is the thanks I get… Fucking bitch…" he mumbles before storming off. You notice all the other secretaries looking at you and get the feeling you just made a mistake. You put your head down and do your best to focus on your work.');
    qspCall(st, 'arousal', 'foreplay', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
    ]);
  } },
                                                        { label: 'Tell him to stop', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/office/events/shoulder_resist.jpg');
    scene.text('You turn your body away from him as best as you can and push his hands away from you. "Please stop that."');
    scene.text('He growls. "Fine! I try and do something nice and this is the thanks I get… Fucking bitch…" he mumbles before storming off. You notice all the other secretaries looking at you and get the feeling you just made a mistake. You put your head down and do your best to focus on your work.');
    qspCall(st, 'arousal', 'massage', 2, 'inhibition');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Go back to work', goto: ['office', 'secretary_office'] },
    ]);
  } },
                                                      ]);
                                                    } else {
                                                      if (((st as any).temp ?? 0) === 26) {
                                                        scene.img('images/locations/city/citycenter/office/events/skirt_caught.jpg');
                                                        scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. You hear giggling beside you and glance over to see several of the women giggling while looking past you. You turn and see one of the women with her skirt caught in the top of her panties, leaving her panty-clad ass exposed for all to see. You can\'t help but smile yourself, but before you can decide if you want to say something, one of the other women tells her. She blushes and quickly fixes her skirt before sitting down to work.');
                                                        qspCall(st, 'arousal', 'voyeur', 2);
                                                        qspCall(st, 'arousal', 'end');
                                                        scene.actions([
                                                          { label: 'Go back to work', goto: ['office', 'secretary_office'] },
                                                        ]);
                                                      } else {
                                                        scene.img('images/locations/city/citycenter/office/events/upskirt_photo.jpg');
                                                        scene.text('You spend most of your work period at your desk working on your computer doing a variety of tasks. As you\'re working, you see one of the managers standing behind one of the women as she bends forward slightly to grab some files. He slides his phone down and you\'re sure he\'s taking photos up her skirt. Before you can say something, she turns and notices, but instead of being upset, she giggles and lightly punches his shoulder. They banter playfully as they both leave together.');
                                                        scene.actions([
                                                          { label: 'Go back to work', goto: ['office', 'secretary_office'] },
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
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enterInterview(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/office/waiting_interview.jpg');
  scene.text('You go to the elevators and follow the directions you were given. You pass by a break room and many offices, as well as a large open room with many work stations, most likely the secretary room. When you arrive at HR, you are asked to take a seat. As you sit and wait to be called in for your interview, you reflect on what you saw on your way here. A few things stood out to you. The office is very expensive looking, almost all of the managers are men ranging from their mid twenties to mid forties and almost all of the secretaries and personal assistants seem to be rather young and attractive women. Before you can ponder this more, you are called into the office for your interview.');
  scene.actions([
    { label: 'Interview for a job', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/office/npc/torbica_office.jpg');
    if (((st as any).pcs_hotcat ?? 0) < 6) {
      if (((st as any).PCloStyle2 ?? 0) !== 5  ||  (!((st as any).PCLoSkirt ?? 0))) {
        scene.text('As soon as you walk in, the woman takes one look at you and frowns. "What are you wearing?"');
        scene.text('You start to respond, but she keeps talking before you speak. "It doesn\'t matter. That is not appropriate attire! I\'m afraid I can\'t offer you the job looking like this. Look around at how much effort our ladies have taken in their appearance and attire then look at yourself. We don\'t hire lazy bums. Good day!" She points towards the door with her pen. Crestfallen and knowing there\'s nothing you can say, you turn to leave.');
      } else {
        scene.text('As soon as you walk in, the woman takes one look at you and frowns. "I\'m afraid you\'re just not who we\'re looking for. You dressed the part nicely at least."');
        scene.text('You start to respond, but she keeps talking before you can speak. "I\'m afraid I can\'t offer you the job. Perhaps you should put more effort into your appearance. Our employees represent us and we only hire the best. Now if you don\'t mind, I\'m rather busy." she says while indicating towards the door behind you. You feel angry that you\'re being judged on your looks and not how well you could do the job, but you know it\'s pointless to try and argue, so you get up and leave.');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_center', ''] },
      ]);
    } else {
      if (((st as any).PCloStyle2 ?? 0) !== 5) {
        scene.text('As soon as you walk in, the woman takes one look at you and frowns. "What are you wearing?"');
        scene.text('You start to respond, but she keeps talking before you can speak. "That is not appropriate attire! I\'m afraid I can\'t offer you the job when you\'re dressed like <i>that</i>. If you acquire the appropriate attire, which is a womens\' business suit with a skirt, feel free to come back for an interview. For now though, I have no positions open for you. Now if you don\'t mind, I\'m rather busy." she says while indicating towards the door behind you. Crestfallen and knowing there\'s nothing you can say, you turn to leave.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['office', 'start'] },
        ]);
      } else {
        if ((!((st as any).PCLoSkirt ?? 0))) {
          scene.text('As soon as you walk in, the woman takes one look at you and frowns. "What are you wearing?"');
          scene.text('You start to respond that it\'s an office suit, but she keeps talking before you can speak. "We expect our ladies to dress as ladies! That means office wear with a skirt or dress. I\'m afraid I can\'t offer you the job when you\'re dressed like <i>that</i>. If you acquire the appropriate attire, feel free to come back for an interview, but for now I have no positions open for you. Now if you don\'t mind, I\'m rather busy." she says while indicating towards the door behind you. Crestfallen and knowing there\'s nothing you can say, you turn to leave.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['office', 'start'] },
          ]);
        } else {
          scene.text('As you walk in, she looks you over and gives you a pleasant smile. "Please take a seat so we can get started."');
          scene.text('She spends the next few minutes reading your resume and looking over your certification. Once she finishes, she asks you a lot of questions followed by a quiz that seems to mostly be a morality test. Once you\'ve finally finished it all, you glance up at the clock and notice that an hour has passed.');
          scene.text('"Congratulations, you are exactly who we\'re looking for at Titran-Express!" she says with a pleasant smile.');
          scene.text('You smile back. "That means I\'ve got the job?"');
          scene.text('She laughs slightly. "Absolutely! If you\'re ready to work for us, just come back on our next business day dressed appropriately, which is a womens\' business suit and skirt, then we can get you started. What do you say?"');
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/office/npc/torbica_office.jpg');
    scene.text('You think about it. Some of the morality questions made you rather uncomfortable, so perhaps this isn\'t the job for you. "Um… Thank you, but I\'m not sure this is a good fit."');
    scene.text('She looks very surprised and her smile fades. "I understand. If you change your mind, then you\'re welcome to apply again." With that, you get up and leave.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 75;
  }, goto: ['office', 'start'] },
    ]);
  } },
            { label: 'Take the job', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    scene.img('images/locations/city/citycenter/office/npc/torbica_office.jpg');
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_office_secretary') === 1) {
      qspCall(st, 'jobs', 'set_employed', 'city_office_secretary');
      scene.text('"Yes, I\'ll take the job. Thank you very much!" you tell her.');
      scene.text('\'"Excellent! Here\'s your welcome packet. Make sure to come to work wearing the appropriate clothes. Work starts at 9:00, but it\'s okay to show up as early as 8:00. It\'s not okay to leave before 17:00, other than to get lunch. If you leave work early, then you won\'t be paid for the day." After a few more pleasantries, you gather your stuff and leave.\'');
    } else {
      scene.text('"Sorry, I\'m already committed to another job schedule," you say, glancing at your planner.');
      scene.text('"I understand," she replies politely. "If your schedule opens up, feel free to reapply."');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_center', ''] },
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

function enterResign(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/office/npc/torbica_office.jpg');
  scene.text('You walk into Mrs Torbica\'s office and tell her that you\'re resigning.');
  scene.text('"Are you sure?" she asks, obviously a little surprised you\'re quitting.');
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'jobs', 'set_terminated', 'city_office_secretary');
    scene.img('images/locations/city/citycenter/office/npc/torbica_office.jpg');
    scene.text('"Yes, I\'m sure." You tender your resignation before leaving.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_center', ''] },
    ]);
  } },
    { label: 'Never mind', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'work_floor':
      enterWorkFloor(s, scene);
      break;
    case 'secretary_office':
      enterSecretaryOffice(s, scene);
      break;
    case 'break_room':
      enterBreakRoom(s, scene);
      break;
    case 'restrooms':
      enterRestrooms(s, scene);
      break;
    case 'womens_restrooms':
      enterWomensRestrooms(s, scene);
      break;
    case 'mens_restrooms':
      enterMensRestrooms(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'interview':
      enterInterview(s, scene);
      break;
    case 'resign':
      enterResign(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const office: LocationDef = {
  name: 'office',
  title: 'Engineering company offices',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
