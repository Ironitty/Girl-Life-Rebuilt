import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'start') {
    qspCall(s, 'core_library', 'setloc', 'uni_dorm', '');
    ((s as any).uni_dorm ?? {})['floor'] = '';
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    qspCall(s, 'themes', 'indoors');
    scene.text('<center><b>Dormitory</b></center>');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk up to the dorm building and head inside. It\'s pretty clean and in good shape. An older woman, with a very unpleasant and judgmental look on her face sits in a room just off the main hallway. It has a partially glass wall and window splitting it from the main room.');
    scene.text('She glares up at you as you enter, her look telling you she\'s already judging you as her face frowns into a look of disapproval.');
    if (qspFunc(s, 'homes_properties', 'can_live_here')  ||  ((s as any).university ?? 0)?.['student'] === 1) {
      scene.actions([
        { label: 'Show her your student ID', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('As you walk by, you take out your student ID and show it to her. She looks for just a second and nods before going back to what she was doing as you head for the elevators.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
      ]);
    } else {
      scene.text('Since you\'re not attending the university and don\'t have a student ID, you won\'t be allowed access to the dorms unless you\'re on the guest list of a student.');
      if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
        if (((s as any).DjibrilQW ?? 0)?.['invite'] === 1) {
          scene.actions([
            { label: 'I\'m here to visit Djibril', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'bbc', 'tiny');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Djibril."');
    scene.text('The woman gives you a look of complete disgust. "What, your own kind not good enough for you? Go ahead and take care of those black cocks. He\'s on the eighth floor, room 810."');
    scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
          ]);
        }
        if (((s as any).gosh ?? 0) > 0) {
          scene.actions([
            { label: 'I\'m here to visit Gosha', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Gosha."');
    scene.text('The woman shakes her head in disapproval. "You\'re Gosha\'s new whore? I\'ll never understand what you sluts see in that scrawny bastard. He\'s been through half of the dorm already! He\'s on the sixth floor, room 602."');
    scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
    (s as any).reccoldorm = 1;
    (s as any).goshiflag = 1;
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
          ]);
        }
        if (((s as any).meet_kendra ?? 0) === 1) {
          scene.actions([
            { label: 'I\'m here to visit Kendra', handler: (st: GameState) => {
    qspCall(s, 'fame', 'city', 'bbc', 'tiny');
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    if (((s as any).kendraQW ?? 0)?.['sub'] < 0) {
      scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Kendra."');
      scene.text('The woman gives you a look of complete disgust. "It seems like she\'s gotten tired of you since you\'re no longer on the guest list. Now get out of here before I call security!"');
      scene.text('Surprised, you turn and quickly leave.');
      scene.actions([
        { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
      ]);
    } else {
      scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Kendra."');
      scene.text('The woman gives you a look of complete disgust. "What, a man not good enough for you? Go ahead and serve that black whore. She\'s on the eighth floor, room 801."');
      scene.text('She turns away from you and goes back to what she was doing. Not wanting to get into an argument with her, you say nothing and quickly head for the elevator.');
      scene.actions([
        { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
      ]);
    }
  } },
          ]);
        }
        if (((s as any).katjaQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
          scene.actions([
            { label: 'I\'m here to visit Katja', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Katja Meynold."');
    scene.text('The woman smiles. "You\'re one of Katja\'s friends? She\'s such a sweet girl. She\'s on the second floor, room 204."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
          ]);
        }
        if (((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] > 0  &&  ((s as any).yearstart ?? 0) > 1) {
          scene.actions([
            { label: 'I\'m here to visit Artem', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Artem Chebotarev."');
    scene.text('The woman smiles. "You\'re one of Artem\'s friends? He\'s such a sweet boy. He\'s on the second floor, room 209."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
          ]);
        }
        if (((s as any).AlbinaQW ?? 0)?.['dorm_invite'] === 1  &&  ((s as any).yearstart ?? 0) > 1) {
          scene.actions([
            { label: 'I\'m here to visit Albina', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Albina Barlovskaya."');
    scene.text('"Oh. <i>Her</i>," the woman says with a disgusted frown. "That little whore needs some discipline. Her mother should be ashamed of herself for raising such a shameless slut!"');
    scene.text('She gives you a judgmental stare. "Your \'friend\' is up on the seventh floor, room 707." She points you at the elevator before going back to what she was doing.');
    scene.text('You\'ve better things to do than stand around and argue with her, so you head for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
          ]);
        }
        if (((s as any).NatbelQW ?? 0)?.['uni_dorm_access'] === 1  &&  ((s as any).yearstart ?? 0) > 1) {
          scene.actions([
            { label: 'I\'m here to visit Natasha',  },
          ]);
        }
        // TODO-QSP: if twins
        scene.actions([
          { label: 'I\'m here to visit the twins', handler: (st: GameState) => {
    scene.img('images/locations/city/island/university/dorm/dorm.jpg');
    scene.text('You walk over to the counter and pull out your ID. "I\'m here to visit Mia and Yana Radimova."');
    scene.text('The woman rolls her eyes. "Those two troublemakers really aren\'t as funny as they think they are. Anyway, they\'re up on the seventh floor, room 702."');
    scene.text('She lets you in and you thank her before heading for the elevator.');
    scene.actions([
      { label: 'Take the elevator', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'elevator'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Head outside', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['uni_grounds', ''] },
    ]);
  }
  scene.build();
}

export const uni_dorm: LocationDef = {
  name: 'uni_dorm',
  title: 'Dormitory',
  region: 'other',
  locationType: 'private',
  locclass: 'restroom',
  description: ['You walk up to the dorm building and head inside. It\'s pretty clean and in good shape. An older woman, with a very unpleasant and judgmental look on her face sits in a room just off the main hallway. It has a partially glass wall and window splitting it from the main room.'],
  enter: enter,
};
