import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterWorkFloor(s: GameState, scene: SceneBuilder): void {
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
    (s as any).minut = 60 - ((s as any).minut ?? 0);
    qspCall(s, 'jobs', 'clock', 'city_office_secretary');
  }, goto: ['office', 'secretary_office'] },
        ]);
      } else {
        if (((s as any).job_last_work_day ?? 0)?.['city_office_secretary'] === ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Go back to your work station', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) === 12) {
      (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
  }, goto: ['office', 'work'] },
          ]);
        } else {
          scene.text('You\'re too late for work, so you\'re told to take the day off.');
        }
      }
    }
    scene.actions([
      { label: 'Go to the break room', goto: ['office', 'break_room'] },
      { label: 'Go to restrooms', goto: ['office', 'restrooms'] },
      { label: 'Resign', goto: ['office', 'resign'] },
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
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Break Room</b></center>');
  scene.img('images/locations/city/citycenter/office/breakroom.jpg');
  scene.text('The break room is neat and clean and features a large table in the middle of the room flanked by a couch along one wall with a few comfortable chairs. A set of cabinets, a sink, some appliances and a fridge to store your lunch, if you happen to bring one, are set along the far wall.');
  qspCall(s, 'kit_din', 'driwater');
  if (((s as any).mc_inventory ?? 0)?.['food_sandwich'] > 0  &&  ((s as any).hour ?? 0) === 12) {
    scene.actions([
      { label: 'Eat your lunch', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).mc_inventory['food_sandwich'] = 0;
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).fat = ((s as any).fat ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.text('<center><b>Break Room</b></center>');
    scene.img('images/locations/city/citycenter/office/eat_lunch.jpg');
    scene.text('You get your food out of the fridge and warm it up in the microwave before you sit down to enjoy a pleasant lunch.');
    scene.actions([
      { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
      { label: 'Go back to your work station', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) === 12) {
      (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
    }
    qspCall(s, 'stat', '');
  }, goto: ['office', 'work'] },
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
  (s as any).office_ladies_entry = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Office Restrooms</b></center>');
  scene.img('images/locations/city/citycenter/office/restrooms.jpg');
  scene.text('You go to the restrooms at the end of the hall. There is a sign for the mens and the women\'s restroom.');
  qspCall(s, 'willpower', 'exhib', 'self', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Go to the mens restroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Go to the mens restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['office', 'mens_restrooms'] },
    ]);
  }
  scene.actions([
    { label: 'Go to the women\'s restroom', goto: ['office', 'womens_restrooms'] },
    { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
  ]);
  scene.build();
}

function enterWomensRestrooms(s: GameState, scene: SceneBuilder): void {
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
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mens Restrooms</b></center>');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    (s as any).temp = Math.floor(Math.random() * 6) + 1;
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/fuck1.jpg');
      scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. You\'ve walked in on one of your fellow secretaries naked and bent over the sink as one of the managers fucks her hard from behind. Unsure if you were spotted, you quickly duck back outside.');
      qspCall(s, 'arousal', 'voyeur_sex', 2);
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Leave', goto: ['office', 'restrooms'] },
      ]);
    } else {
      scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/fuck2.jpg');
      scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. One of your fellow secretaries is naked from the waist down and bent over, holding onto one of the stall walls as one of the managers fucks her hard from behind. You quickly duck back outside before you\'re spotted.');
      qspCall(s, 'arousal', 'voyeur_sex', 2);
      qspCall(s, 'arousal', 'end');
      if (((s as any).temp ?? 0) === 3) {
        scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/group_fuck.jpg');
        scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in. but that\'s not what catches your eye. One of your fellow secretaries is naked from the waist down and leaning against one of the stall walls as one of the managers fucks her hard from behind while another stands next to them, presumably waiting his turn. You quickly duck back outside before you\'re spotted.');
        qspCall(s, 'arousal', 'voyeur_sex', 2);
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', goto: ['office', 'restrooms'] },
        ]);
      } else {
        scene.img('images/locations/city/citycenter/office/sex/restroom/mensroom/older_bj.jpg');
        scene.text('You gather your courage and walk into the mens restroom. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in, but that\'s not what catches your eye. One of your fellow secretaries is squatting down in front of one of the senior managers, her tits pulled out as she sucks his dick. You quickly duck back outside before you\'re spotted.');
        qspCall(s, 'arousal', 'voyeur_sex', 2);
        qspCall(s, 'arousal', 'end');
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
        scene.img('images/locations/city/citycenter/office/mensbr.jpg');
        scene.text('You gather your courage and walk into the mens restroom. It\'s empty, and you\'re not sure if you\'re happy or disappointed by that. The restroom is very clean and nice looking and you think it\'s the nicest mens room you\'ve ever been in.');
        qspCall(s, 'din_van', 'tampon');
        qspCall(s, 'din_van', 'quickwash');
        qspCall(s, 'din_van', 'basin');
        qspCall(s, 'din_van', 'publicpan', 'no_prost');
        scene.actions([
          { label: 'Leave', goto: ['office', 'restrooms'] },
          { label: 'Look in the mirror', goto: ['mirror', 'start'] },
          { label: 'Go to the corridor', goto: ['office', 'work_floor'] },
        ]);
      }
      scene.actions([
        { label: 'Leave', goto: ['office', 'restrooms'] },
      ]);
    }
  }
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const office: LocationDef = {
  name: 'office',
  title: 'Engineering company offices',
  region: 'other',
  locationType: 'event',
  description: ['You walk into the building and wave at the receptionist, who smiles back at you as you head for the elevators.'],
  enter: enter,
};
