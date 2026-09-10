import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).setloc['imagepath'] = 'locations/pushkin/ballet_school/';
  (s as any).setloc['StageTitle'] = 'Terpsichore Wing';
  (s as any).setloc['StageImage'] = '<<$setloc[\'imagepath\']>>daily/hall.jpg';
  (s as any).balletEv['trigger'] = '';
  (s as any).event_day_max = 0;
  qspCall(s, 'core_library', 'corridor');
  qspCall(s, 'core_library', 'stage_title');
  if ((((s as any).month ?? 0) === 7  &&  ((s as any).day ?? 0) === 9)  &&  (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
      // TODO-QSP: dynamic text: You've done it. You've survived until the end of the week. Then, <<$npc_firstnam...
      scene.text(`You've done it. You've survived until the end of the week. Then, ${((s as any).npc_firstname ?? 0)?.['A274']}. runs up to you and gives you a big hug. "What's that for?" you ask. "For being a friend and my dance partner," she says with a big smile.`);
      // TODO-QSP: dynamic text: It's been great to meet you, <<$pcs_nickname>>. I hope we meet again and can wor...
      scene.text(`It's been great to meet you, ${((s as any).pcs_nickname ?? 0)}. I hope we meet again and can work together." You pretend to think for a moment and see the worried expression on her face. "Sure, it's been fantastic to meet you, and I'll keep in touch."`);
    } else {
      // TODO-QSP: dynamic text: You've done it. You've survived until the end of the week. Then, <<$npc_firstnam...
      scene.text(`You've done it. You've survived until the end of the week. Then, ${((s as any).npc_firstname ?? 0)?.['A274']} comes up to you and gives you a quick hug. "What's that for?", you ask.`);
      scene.text('"For being my dance partner!" she says with a smile.');
      // TODO-QSP: dynamic text: "It's been wonderful to meet you, <<$pcs_nickname>>. I hope we meet again and ca...
      scene.text(`"It's been wonderful to meet you, ${((s as any).pcs_nickname ?? 0)}. I hope we meet again and can work together."`);
      scene.text('"Sure, it\'s been great to meet you too, I\'ll keep in touch. Once I know my results, I\'ll let you know.');
      // TODO-QSP: dynamic text: "Yeah, and I'll do the same, <<$pcs_nickname>>"
      scene.text(`"Yeah, and I'll do the same, ${((s as any).pcs_nickname ?? 0)}"`);
    }
    // TODO-QSP: dynamic text: At that moment, <<$npc_firstname['A284']>> comes out of the examination room. "T...
    scene.text(`At that moment, ${((s as any).npc_firstname ?? 0)?.['A284']} comes out of the examination room. "Thank you all for attending this week. I hope you all had a great experience and have taken these lessons to heart." You and your class murmur together in agreement.`);
    scene.text('"The school will be in touch in a few weeks to give your assessment marks and if we have decided to grant you a place in our apprenticeship program."');
    // TODO-QSP: dynamic text: You know the places are going to be hard fought over, and you glance at <<$npc_f...
    scene.text(`You know the places are going to be hard fought over, and you glance at ${((s as any).npc_firstname ?? 0)?.['A274']}.`);
    scene.text('She gives you a wink indicating she has confidence about your acceptance into the school.');
    // TODO-QSP: dynamic text: You grab a shower before you leave to catch the bus that is waiting for you outs...
    scene.text(`You grab a shower before you leave to catch the bus that is waiting for you outside. Standing next to it is ${((s as any).npc_firstname ?? 0)?.['A284']}, who addresses you all once you've gathered. "It has been a pleasure to have you all with us this week, and I wish you all the best for your future." With that, ${((s as any).npc_firstname ?? 0)?.['A284']} returns back into the school.`);
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    qspCall(s, 'homes_properties', 'set_home', 'parents_home');
    if (((s as any).balletqw ?? 0)?.['school'] !== 1  &&  ((s as any).ballet_day ?? 0) === 1) {
      // TODO-QSP: dynamic text: You are chaperoned to your school by <<$npc_firstname['A284']>>. After a short j...
      scene.text(`You are chaperoned to your school by ${((s as any).npc_firstname ?? 0)?.['A284']}. After a short journey, you were standing outside a classroom and told to wait by ${((s as any).npc_firstname ?? 0)?.['A284']}. You look around you at various photographs and artwork of dancers and performances.`);
      // TODO-QSP: dynamic text: You look at the girls you are with, with a few of them trying to catch your atte...
      scene.text(`You look at the girls you are with, with a few of them trying to catch your attention, but before you can talk to them, ${((s as any).npc_firstname ?? 0)?.['A284']}has come back from the classroom. "You can enter now, girls."`);
      scene.actions([
        { label: 'Attend class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'pilates');
  } },
      ]);
    } else {
      scene.text('You head to school with your group, and you can see a few of your classmates gossiping up front, but you are left to your own thoughts. Before you realize it, you\'re standing at the doors to your first lesson.');
      if (((s as any).month ?? 0) !== 7  ||  ((s as any).month ?? 0) === 7  &&  ((s as any).day ?? 0) === 9  &&  ((s as any).hour ?? 0) >= 8) {
        (s as any).ballet_grade_score['class'] = ((s as any).ballet_grade_score['class'] ?? 0) - (500);
        scene.text('You were late or did not attend the exam. You have failed the course.');
        scene.actions([
          { label: 'Return home', goto: ['pav_commcenter', ''] },
        ]);
      }
      scene.actions([
        { label: 'Attend class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'pilates');
  } },
      ]);
    }
    scene.actions([
      { label: 'Return home', handler: (st: GameState) => {
    (s as any).AlbinaQW['StarletsJoined'] = 0;
  }, goto: ['pav_commcenter', ''] },
    ]);
  }
  scene.build();
}

export const pushkin_ballet_class: LocationDef = {
  name: 'pushkin_ballet_class',
  region: 'pushkin',
  locationType: 'public_indoors',
  enter: enter,
};
