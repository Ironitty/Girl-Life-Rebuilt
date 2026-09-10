import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Principal\'s Office</b></center>');
  scene.img('images/locations/pavlovsk/school/principal/office.jpg');
  scene.text('The office is, in a word, impressive: It must have cost a full year\'s worth of the school\'s budget to decorate it. At least now you know why so much of the school is in dire need of repair and it never seems to happen - all the money is spent on this one room.');
  if (((s as any).detention_set ?? 0) === 2) {
    scene.text('You take a seat at Miss Volkov\'s desk and wait for her to address you with an exacerbated tone.');
    scene.text('"I usually give pupils the choice of detention so that I don\'t have to punish them personally, but you have abused my leniency one time too many. I\'m going to teach you not to insult my kindness."');
    scene.text('She\'s clearly angry and you can almost already feel the pain on your ass that you\'re about to receive.');
    scene.actions([
      { label: 'Accept the inevitable', goto: ['gschool_office', 'spanked'] },
    ]);
  } else {
    scene.text('You take a seat at Miss Volkov\'s desk and wait for her to address you with an exacerbated tone.');
    // TODO-QSP: dynamic text: "What did you do this time, <<$pcs_lastname>>? No, I don't want to know. I reall...
    scene.text(`"What did you do this time, ${((s as any).pcs_lastname ?? 0)}? No, I don't want to know. I really don't care. You obviously have no respect for me or your teachers."`);
    scene.text('She looks over your file some more and shakes her head slightly. "You\'ve been here enough and you know what comes next. So, what will it be this time? Spanking or Saturday detention?"');
    scene.text('She seems more than a bit annoyed that you appear to be immune to her punishment system, or maybe that you\'re that troubled of a student.');
    if (((s as any).detention_set ?? 0) === 0) {
      scene.actions([
        { label: 'Choose detention', handler: (st: GameState) => {
    (st as any).detention_set = 1;
  }, goto: ['gschool_lessons', 'short_break'] },
        { label: 'Choose spanking', goto: ['gschool_office', 'spanked'] },
      ]);
    } else {
      scene.text('She takes a look at your file and slowly shakes her head. "I see you already have detention. That means I have no other choice but to use the alternative punishment."');
      scene.actions([
        { label: 'Get spanked', goto: ['gschool_office', 'spanked'] },
      ]);
    }
    if (((s as any).demerit ?? 0) > 20) {
      // TODO-QSP: dynamic text: You take a seat at Miss Volkov's desk and wait for her to address you. "This is ...
      scene.text(`You take a seat at Miss Volkov's desk and wait for her to address you. "This is becoming a routine with you; I feel like I'm seeing you every day! What changed, ${((s as any).pcs_lastname ?? 0)}? You used to be such a good girl, perhaps a bit quiet, but now? This is not the way to get attention."`);
      scene.text('She looks over your file some more and shakes her head slightly. "We can\'t have you continuing to get in trouble like this - I\'ll have to punish you."');
      scene.text('She looks directly at you for a moment to make sure you understand that, when you cause problems, you\'ll be getting punished.');
      scene.text('"I believe in giving students a voice in their future, so I\'ll let you decide: Saturday detention, or a spanking, right now. Which will it be?"');
      if (((s as any).detention_set ?? 0) === 0) {
        scene.actions([
          { label: 'Choose detention', handler: (st: GameState) => {
    (st as any).detention_set = 1;
  }, goto: ['gschool_lessons', 'short_break'] },
          { label: 'Choose spanking', goto: ['gschool_office', 'spanked'] },
        ]);
      } else {
        scene.text('She takes a look at your file and slowly shakes her head. "I see you already have detention. That means I have no other choice but to use the alternative punishment."');
        scene.actions([
          { label: 'Get spanked', goto: ['gschool_office', 'spanked'] },
        ]);
      }
    } else {
      scene.text('You take a seat at Miss Volkov\'s desk and wait for her to address you.');
      // TODO-QSP: dynamic text: "Do you know why you're here, <<$pcs_lastname>>?" Before you have a chance to re...
      scene.text(`"Do you know why you're here, ${((s as any).pcs_lastname ?? 0)}?" Before you have a chance to reply, she continues. "It was a rhetorical question! We both know why you're here. You're here because you got in trouble."`);
      scene.text('She pauses to look over at the folder in front of her. "Your file shows you\'ve mostly stayed out of trouble until now. I hope this is only a minor lapse in judgment and not a new trend from you. We won\'t get into what you did, just understand this is a warning. Straighten yourself out or there will be consequences. Now, return to class."');
      scene.actions([
        { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  scene.build();
}

export const gschool_office: LocationDef = {
  name: 'gschool_office',
  title: 'Principal\'s Office',
  region: 'other',
  description: ['The office is, in a word, impressive: It must have cost a full year\'s worth of the school\'s budget to decorate it. At least now you know why so much of the school is in dire need of repair and it never seems to happen - all the money is spent on this one room.'],
  enter: enter,
};
