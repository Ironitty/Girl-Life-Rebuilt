import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    if (((s as any).week ?? 0) === 7) {
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 12) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
    } else {
      if (((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 13  &&  ((s as any).hour ?? 0) <= 7) {
      }
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
      }
      if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
      }
    }
  }
  qspCall(s, 'themes', 'outdoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Church of Saint Nikolas</b></center>');
  scene.img('images/locations/pavlovsk/church/st-nikolas.jpg');
  scene.text('The church of Saint Nikolas is the only church in Pavlovsk and the tallest building in town. It\'s very old, but is well maintained by the worshipers of the parish.');
  scene.text('');
  // TODO-QSP: dynamic text: You can attend confession every weekday between '+func('time', 'get_time_string'...
  scene.text('You can attend confession every weekday between \'+func(\'time\', \'get_time_string\', 7, 0)+\' and \'+func(\'time\', \'get_time_string\', 9, 0)+\' or \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\', and on the weekend between \'+func(\'time\', \'get_time_string\', 16, 0)+\' and \'+func(\'time\', \'get_time_string\', 18, 0)+\'.');
  // TODO-QSP: dynamic text: Vigil is held on Saturdays at '+func('time', 'get_time_string', 19, 0)+'.
  scene.text('Vigil is held on Saturdays at \'+func(\'time\', \'get_time_string\', 19, 0)+\'.');
  // TODO-QSP: dynamic text: The Divine Liturgy is on Sundays between '+func('time', 'get_time_string', 9, 0)...
  scene.text('The Divine Liturgy is on Sundays between \'+func(\'time\', \'get_time_string\', 9, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\'.');
  if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >=19  &&  ((s as any).hour ?? 0) <= 22  &&  ((s as any).churchday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Attend vigil', goto: ['pav_church', 'vigil'] },
    ]);
  } else {
    if (((s as any).Churchbad ?? 0) === 3  &&  ((s as any).Churchbadtime ?? 0) > ((s as any).daystart ?? 0)) {
      scene.text('The priest is probably still mad at you. You decide to avoid him for now.');
      scene.actions([
        { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
        { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
      ]);
    } else {
      (s as any).Churchbad = 2;
      scene.text('"You figure that the priest has probably calmed down enough for you to try talking to him."');
      scene.actions([
        { label: 'Enter the church', goto: ['pav_church', 'Narthex'] },
        { label: 'Enter the church', goto: ['pav_church', 'Narthex'] },
      ]);
    }
    scene.actions([
      { label: 'Attend Divine Liturgy', goto: ['pav_church', 'liturgy'] },
    ]);
  }
  qspCall(s, 'camera', 'check_location');
  scene.actions([
    { label: 'Go to the residential area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['pav_residential', ''] },
    { label: 'Go to the commercial area', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['pav_commercial', ''] },
  ]);
  scene.build();
}

function enterMom(s: GameState, scene: SceneBuilder): void {
  (s as any).mom_church = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <center><b><h4><font color=#CB00A2>"Natasha <<$pcs_lastname>>"</font></h4></b></...
  scene.text(`<center><b><h4><font color=#CB00A2>"Natasha ${((s as any).pcs_lastname ?? 0)}"</font></h4></b></center>`);
  if (((s as any).VKChurchNo ?? 0) === 4  ||  ((s as any).VKChurchNo ?? 0) === 5) {
    scene.img('images/characters/pavlovsk/resident/mom/prost10.jpg');
  } else {
    scene.img('images/characters/pavlovsk/resident/mom/prost9.jpg');
  }
  if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchIntro ?? 0) === 0) {
    // TODO-QSP: dynamic text: You suddenly hear someone calling you out. "<<$pcs_firstname>>? I never expected...
    scene.text(`You suddenly hear someone calling you out. "${((s as any).pcs_firstname ?? 0)}? I never expected you to come here without me dragging you."`);
    scene.text('You turn to see your mother sitting in the middle row, who motions for you to sit next to her.');
  } else {
    // TODO-QSP: dynamic text: You see your mother sitting in the middle row, who turns and notices you. "<<$pc...
    scene.text(`You see your mother sitting in the middle row, who turns and notices you. "${((s as any).pcs_firstname ?? 0)}, you're here! Come and take a seat." She motions for you to sit next to her.`);
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchNo ?? 0) === 4) {
      scene.text('You see your mother sitting in the middle row. She quickly notices you, gets up and walks over to you.');
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>, we need to talk," she says sternly as she drags you out of ...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}, we need to talk," she says sternly as she drags you out of the church.`);
    } else {
      scene.text('You see your mother sitting in the middle row. She peeks over in your direction before turning away from you, as if you\'re not there.');
      scene.text('You see your mother sitting in the middle row. She doesn\'t seem to notice you.');
    }
    if (((s as any).motherKnowWhore ?? 0) === 0  &&  ((s as any).VKChurchNo ?? 0) === 4) {
      scene.actions([
        { label: 'Make excuses and leave', goto: ['pav_church', 'Excuses'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sit down', handler: (st: GameState) => {
    (s as any).VKChurchIntro = 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/church/enterchurch.jpg');
    if (((s as any).VKChurch ?? 0) === 0) {
      scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start.');
      scene.text('Your mother turns to you. "It\'s been a long time since you were last here. I should show you how to follow the sermon."');
      scene.text('You give your mother a nod as everyone takes a seat around you. The room then slowly falls into silence as the sermon begins.');
    } else {
      scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start. Your mother turns to you and says "It\'s good to see you back here. There is so much of our soul that can only be revealed through prayer." You give her a puzzled look and she smiles. "You might not understand what I mean now, but you will."');
      scene.text('Everyone in the church begin taking their seats as the room slowly silences. The sermon is about to begin.');
      if (((s as any).VKChurch ?? 0) === 2) {
        scene.text('You do your best to make yourself comfortable as the priests prepare for the sermon. Your mother places her hand on your shoulder and says "Since you\'ve been such a good Christian, I\'ll take you out to eat after this and we can catch up on what\'s new with you."');
        scene.text('You give her a smile and nod. "I\'d like that."');
        scene.text('Everyone else takes a seat around you and the room slowly silences as the sermon begins.');
      } else {
        scene.text('You gaze around the room and see the now familiar faces of your church. Some of the them notice you and give you a warm smile while others are preoccupied looking through their bibles.');
        scene.text('Your mother rubs your shoulder. "You\'ve become a regular here. We\'re all children of the lord, so that\'s why we all take time out of our day to spend it with each other in this holy place."');
        scene.text('You give her a nod as you contemplate her words while taking another look around. Many are preparing their bibles as the sermon begins.');
        if (((s as any).VKChurch ?? 0) === 4) {
          scene.text('You try to make yourself comfortable on the hard wooden pew while waiting for the sermon to start.');
          scene.text('Your mother turns to you. "It\'s been a long time since you\'ve been here, so I should show you how to follow the sermon."');
          scene.text('You give her a nod while everyone takes a seat around you. The room slowly silences as the sermon is about to begin.');
        } else {
          scene.text('You casually lean back in your seat, looking forward to the sermon. You start reading the bible your mother gave you, studying the psalms while occasionally looking and chatting with the other churchgoers. Your mother joins in and you discuss the word of god until the priest finally enters the room. You close your book and place it on your lap as the sermon begins.');
        }
        scene.actions([
          { label: 'Begin sermon', goto: ['pav_church', 'Sermon'] },
        ]);
      }
      scene.actions([
        { label: 'Make excuses and leave', goto: ['pav_church', 'Excuses'] },
        { label: 'Leave', goto: ['pav_church', 'start'] },
      ]);
    }
  } },
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
    case 'Mom':
      enterMom(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const pav_church: LocationDef = {
  name: 'pav_church',
  title: 'Church of Saint Nikolas',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['The church of Saint Nikolas is the only church in Pavlovsk and the tallest building in town. It\'s very old, but is well maintained by the worshipers of the parish.'],
  enter: enter,
};
