import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).foto['documentary'] = 0;
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  scene.text('You step out of the room and almost run head first into one of the managers.');
  scene.text('"Woah!" you say, jumping back. "What are you doing?"');
  // TODO-QSP: dynamic text: "Oh <<$model['firstname']>>, glad I caught you before you wandered off somewhere...
  scene.text(`"Oh ${((s as any).model ?? 0)?.['firstname']}, glad I caught you before you wandered off somewhere else in the studio. I was just going to see if anyone else showed up today. We're looking for volunteers to participate in some interviews for a documentary."`);
  scene.text('"Documentary?" you ask. "What about?"');
  scene.text('"There\'s some people here today who are making a film about models, their lives, and about working here. They want to capture girls working here in their usual working environment so you wouldn\'t be dressing up or anything, just interviewed as in the studio approved dress code."');
  scene.text('<i>You mean naked…</i> you think to yourself.');
  scene.text('"They\'re paying the equivalent of a two hour nude shoot for every model that participates. Do you want in?"');
  if (((s as any).modelfoto ?? 0)?.['nip'] < 1) {
    scene.actions([
      { label: 'No way! I\'ve never been naked on camera before!', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"No way! I\'ve never been naked on camera before!"');
    scene.text('"Oh, yeah that\'s right. Sure you don\'t want this to be your first time?"');
    scene.text('"They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. It could give your popularity as a model a big boost."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
      } else {
        (s as any).will_cost = 0;
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Still no', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check."');
    scene.text('With that, he pays you no more mind and ducks past into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If it\'s really that good for my profile…"');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
      ]);
    }
  } },
      { label: 'No thanks, not interested', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehh, no thanks. The pay sounds nice, but I\'m just not interested."');
    scene.text('"You sure? They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. It could give your popularity as a model a big boost."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
      } else {
        (s as any).will_cost = 0;
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Still no', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check. Not like it\'s the agency is the one paying anything," he laughs, ducking into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If it\'s really that good for my profile…"');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'No thanks, I\'m here to model', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehh, no thanks. I\'m here to model, not do interviews."');
    scene.text('"You sure? They\'re doing them right now and they said it will only take a few minutes. Might be good for your profile. People are always more interested when they see the personality behind a pretty face. Exposure is important for a model too."');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'easy');
    } else {
      qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'medium');
      if (((s as any).pcs_inhib ?? 0) < 60) {
        qspCall(s, 'willpower', 'skill', 'inhib', 'resist', 'hard');
      } else {
        (s as any).will_cost = 0;
      }
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Still no [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Still no', handler: (st: GameState) => {
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'resist');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Ehhh, still no."');
    scene.text('"Alright, that\'s fine. I just wanted to double check. Not like it\'s the agency is the one paying anything," he laughs, ducking into the locker room, presumably to ask other girls who are in there if they want to participate.');
    scene.actions([
      { label: 'Go to the set', goto: ['foto', 'studio'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'I guess I could…', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"I guess I could… If you really think it\'ll help my career."');
    // TODO-QSP: dynamic text: "Alright! Just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright! Just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day." He points you in the direction of the right set and ducks into the locker room, presumably to ask other girls who are in there if they want to participate.`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Sure, I\'ll take part', handler: (st: GameState) => {
    (s as any).specialjob7 = 0;
    scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
    scene.text('"Sure, I\'ll take part," you say.');
    // TODO-QSP: dynamic text: "Alright, just go over to set <<rand(1,50)>> and tell a production assistant you...
    scene.text(`"Alright, just go over to set ${Math.floor(Math.random() * 50) + 1} and tell a production assistant you're one of the volunteers. They're set up in there for the day."`);
    scene.actions([
      { label: 'Go to the set', goto: ['foto_model_documentary', 'documentary_1'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const foto_model_documentary: LocationDef = {
  name: 'foto_model_documentary',
  title: 'You step out of the room and almost run head first into one ',
  region: 'other',
  description: ['You step out of the room and almost run head first into one of the managers.'],
  enter: enter,
};
