import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPrincipal(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).demerit ?? 0) > 50) {
      scene.text('You take a seat at Miss Volkov\'s desk and wait for her to address you with an exacerbated tone.');
      // TODO-QSP: dynamic text: "What did you do this time, <<$pcs_lastname>>? No, I don't want to know. I reall...
      scene.text(`"What did you do this time, ${((s as any).pcs_lastname ?? 0)}? No, I don't want to know. I really don't care. You obviously have no respect for me or your teachers."`);
      scene.text('She looks over your file some more and shakes her head slightly. "You\'ve been here enough and you know what comes next. So, what will it be this time? Spanking or Saturday detention?"');
      scene.text('She seems more than a bit annoyed that you appear to be immune to her punishment system, or maybe that you\'re that troubled of a student.');
      if ((!((s as any).detention_set ?? 0))) {
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
      if (((s as any).demerit ?? 0) > 20) {
        // TODO-QSP: dynamic text: You take a seat at Miss Volkov's desk and wait for her to address you. "This is ...
        scene.text(`You take a seat at Miss Volkov's desk and wait for her to address you. "This is becoming a routine with you; I feel like I'm seeing you every day! What changed, ${((s as any).pcs_lastname ?? 0)}? You used to be such a good girl, perhaps a bit quiet, but now? This is not the way to get attention."`);
        scene.text('She looks over your file some more and shakes her head slightly. "We can\'t have you continuing to get in trouble like this - I\'ll have to punish you."');
        scene.text('She looks directly at you for a moment to make sure you understand that, when you cause problems, you\'ll be getting punished.');
        scene.text('"I believe in giving students a voice in their future, so I\'ll let you decide: Saturday detention, or a spanking, right now. Which will it be?"');
        if ((!((s as any).detention_set ?? 0))) {
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
  }
  scene.build();
}

function enterSpanked(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Principal\'s Office</b></center>');
  scene.img('images/characters/shared/headshots_main/big134.jpg');
  if (((s as any).detention_set ?? 0) !== 2) {
    scene.text('No way are you coming back to school on a Saturday. "Uh, I would rather just get it over with, so… Spanking."');
  }
  scene.text('"Very well, come over here," she says as she gets up, pulls a chair out and sits on it. You get up and walk over to her.');
  (s as any).demerit = ((s as any).demerit ?? 0) - (10);
  if (((s as any).principal_spank ?? 0) <= 5  &&  ((s as any).detention_set ?? 0) !== 2) {
    (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
      scene.actions([{ label: 'Continue', goto: ['gschool_office', 'no_plugin_nude'] }]);
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
        scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_panties'] }]);
      } else {
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_nude'] }]);
        } else {
          scene.actions([
            { label: 'Take punishment', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolspank.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees, pulls up your skirt and gives your ass a hard smack with her hand. You jerk a little in reflex - she\'s a strong woman and her blows sting quite a bit.');
    scene.text('You silently take your punishment, even if it\'s not all that bad and a part of you actually likes it. Regardless, you don\'t want her to know this doesn\'t bother you all that much, so you play along, withering around and whimpering as she spanks you for a good solid minute.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet and rubs your arm. "I hope this has taught ...
    scene.text(`She then lifts you back to your feet and rubs your arm. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you head back to class.');
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            { label: 'Flirt/rebel', handler: (st: GameState) => {
    (s as any).principal_spank = 6;
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolspank.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees, pulls up your skirt and gives your ass a hard smack with her hand. You jerk a little in reflex - she\'s a strong woman and her blows sting quite a bit.');
    scene.text('You let out a moan with each hit, soft at first but getting louder each time she strikes.');
    scene.text('"Stop that!" she scowls and gives you the hardest smack on your ass yet, but you moan even louder and wiggle your ass.');
    scene.text('"Oh yes, Miss Volkov, yes please! Harder, harder!" you beg as if you were on the verge of an orgasm. "Yes, spank me! Spank me harder and I promise to be your special, little, bad girl…" you giggle.');
    scene.text('To her credit, she doesn\'t relent and even manages to spank you harder. After another a minute or two of this, however, she roughly lifts you off her knees and back on your feet.');
    scene.text('She points at the door, her voice quivering with anger. "Back to class <i>now</i>, before I give you detention as well!"');
    scene.text('Not wanting detention, you don\'t say anything and quickly head for the door, putting a bit of extra sway into your hips as you go.');
    qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        }
      }
    }
  } else {
    if (((s as any).principal_spank ?? 0) <= 10  &&  ((s as any).detention_set ?? 0) !== 2) {
      (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
      if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
        scene.actions([{ label: 'Continue', goto: ['gschool_office', 'no_plugin_nude'] }]);
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
          scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_panties'] }]);
        } else {
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_nude'] }]);
          } else {
            scene.actions([
              { label: 'Take punishment', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 2, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolbarespank.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees, pulls up your skirt and your panties down to your knees, exposing your bare ass before she gives it a hard smack with her hand. You jerk a little in reflex - she\'s a strong woman and her blows sting quite a bit.');
    scene.text('You silently take your punishment, even if it\'s not all that bad and a part of you actually likes it. Regardless, you don\'t want her to know this doesn\'t bother you all that much, so you play along, withering around and whimpering as she spanks you for a good solid minute, giving your ass a nice crimson hue.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet and rubs your arm. "I hope this has taught ...
    scene.text(`She then lifts you back to your feet and rubs your arm. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your panties up before heading back to class.');
    qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              { label: 'Flirt/rebel', handler: (st: GameState) => {
    (s as any).principal_spank = 11;
    qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolbarespank.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees and pulls your skirt up and your panties down to your knees, exposing your bare ass before she gives it a hard smack with her hand. You jerk a little in reflex - she\'s a strong woman and her blows sting quite a bit.');
    scene.text('You let out a moan with each hit, soft at first but getting louder each time she strikes.');
    scene.text('"Stop that!" she says and gives you the hardest smack on your ass yet. You moan even louder and wiggle your ass a little.');
    scene.text('"Oh yes, Miss Volkov, yes please! Harder, harder!" you beg as if you were on the verge of an orgasm. "Yes, spank me! Spank me harder and I promise to be your special, little, bad girl!" you giggle.');
    scene.text('To her credit, she doesn\'t relent and even manages to spank you harder. After another a minute or two of this, she roughly lifts you off her knees and back on your feet.');
    scene.text('She points at the door, her voice quivering with anger. "Back to class <i>now</i>, before I give you detention as well!"');
    scene.text('Not wanting detention, you slowly pull your panties back up, giving her an extra-long look at your cherry-red cheeks before you head for the door, putting a bit of extra sway into your hips as you go.');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          }
        }
      }
    } else {
      if (((s as any).principal_spank ?? 0) <= 15  &&  ((s as any).detention_set ?? 0) !== 2) {
        (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
        if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
          scene.actions([{ label: 'Continue', goto: ['gschool_office', 'no_plugin_nude'] }]);
        } else {
          if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_panties'] }]);
          } else {
            if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
              scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_nude'] }]);
            } else {
              scene.actions([
                { label: 'Take punishment', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle2.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees and pulls your skirt up and your panties down to your knees, exposing your bare ass. This time she pulls out a leather paddle and gives your ass a hard smack. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> stings, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet and rubs your arm. "I hope this has taught ...
    scene.text(`She then lifts you back to your feet and rubs your arm. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your panties up before heading back to class.');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                { label: 'Flirt/rebel', handler: (st: GameState) => {
    (s as any).principal_spank = 16;
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle2.jpg');
    scene.text('You walk over to her while swaying your hips. You pull your panties down to your knees and lay across her legs, biting your lower lip and looking back up at her expectantly.');
    scene.text('Miss Volkov tries to ignore you as she picks up a leather paddle, which she smacks hard across your bare ass. You jerk in reflex - she\'s a strong woman and her blows really sting, but a soft moan escapes you.');
    scene.text('You get louder with each hit and she smacks your ass even harder, really putting her shoulder into it, but all it does is cause you to respond with a louder groan and a wiggle of your ass.');
    scene.text('She looks a little troubled, like she\'s unsure if this is working at all, but the troubled look only lasts a second and her face hardens into an expression of stern, if not stubborn, resolve.');
    scene.text('"Oh yes, Miss Volkov, yes please! Harder, harder!" you beg as if you were on the verge of an orgasm. "Yes, spank me! Spank me harder and I promise to be your special, little, bad girl. Oh god, you\'re making me so wet!" you say in a husky tone.');
    scene.text('To her credit, she doesn\'t relent and even manages to spank you harder. After another a minute or two of this, she roughly lifts you off her knees and back on your feet.');
    scene.text('She points at the door, her voice quivering with anger, but also uncertainty. "Back to class <i>now</i>, before this gets worse for you!"');
    scene.text('You head for the door, putting a bit of extra sway into your hips and very slowly pulling your panties back up as you go, giving her an extra-long look at your cherry-red cheeks.');
    qspCall(s, 'pain', '', 6, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'stat', '');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            }
          }
        }
      } else {
        if (((s as any).principal_spank ?? 0) <= 20  ||  ((s as any).detention_set ?? 0) === 2) {
          (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
          if (((s as any).detention_set ?? 0) === 2) {
            (s as any).detention_set = 0;
          }
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
            scene.actions([{ label: 'Continue', goto: ['gschool_office', 'no_plugin_nude'] }]);
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
              scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_panties'] }]);
            } else {
              if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
                scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_nude'] }]);
              } else {
                scene.actions([
                  { label: 'Take punishment', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('Once you walk over to her, Miss Volkov pulls you down across her knees and pulls your skirt up and your panties down to your knees, exposing your bare ass. This time she pulls out a large wooden paddle and gives you a hard smack. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> stings, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet and rubs your arm. "I hope this has taught ...
    scene.text(`She then lifts you back to your feet and rubs your arm. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your panties up before heading back to class.');
    qspCall(s, 'pain', '', 6, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                  { label: 'Flirt/rebel', handler: (st: GameState) => {
    (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
    qspCall(s, 'pain', '', 6, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('You walk over to her, swaying your hips. You pull your panties down to your knees and lay across her legs, biting your lower lips and looking back up at her expectantly.');
    scene.text('Miss Volkov tries to ignore your look and picks up a large wooden paddle which she smacks hard across your bare ass. You jerk in reflex - she\'s a strong woman and her blows really sting, but a soft moan escapes you.');
    scene.text('You get louder with each hit and she smacks your ass even harder, really putting her shoulder into it, but all it does is cause you to respond with a louder groan and a wiggle of your ass.');
    scene.text('She looks a little troubled, like she\'s unsure if this is working at all, but the troubled look only lasts a second and her face hardens into an expression of stern, if not stubborn, resolve.');
    scene.text('"Oh yes, Miss Volkov>, yes please! Harder, harder!" you beg as if you were on the verge of an orgasm. "Yes, spank me! Spank me harder and I promise to be your special, little, bad girl. Oh god, you\'re making me so wet!" you say in a husky tone.');
    scene.text('To her credit, she doesn\'t relent and even manages to spank you harder. After another a minute or two of this, she roughly lifts you off her knees and back on your feet. Her hands rest on your hips and as she stands up to face you, one hand slips down to your bare ass and stays there for just a moment.');
    scene.text('She then removes her hand and points at the door, her expression unreadable. "You\'re playing a very dangerous game, young lady! Get back to class., <i>now</i>!"');
    scene.text('You head for the door, putting a bit of extra sway into your hips and very slowly pulling your panties back up as you go, giving her an extra-long look at your cherry-red cheeks. You don\'t dare to look back, but you\'re almost certain that Miss Volkov had her eyes on your ass right until the door closed behind you.');
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              }
            }
          }
        } else {
          (s as any).principal_spank = ((s as any).principal_spank ?? 0) + (1);
          scene.text('"It\'s obvious that spanking is not an option any longer. In fact, I doubt it was an adequate punishment for you to begin with: You just acted like a whore when I was trying to punish you."');
          scene.text('She looks at you for a long minute to see if you will dispute it. She\'s right, and it\'s just as funny now as it was the first time you did it, despite her best efforts.');
          scene.text('"You leave me no choice. If you\'re going to act like a whore, then I\'ll treat you like a whore. Come over here."');
          if (((s as any).pantyworntype ?? 0) === 'none'  &&  (!((s as any).analPlugIn ?? 0))) {
            scene.actions([{ label: 'Continue', goto: ['gschool_office', 'no_plugin_nude'] }]);
          } else {
            if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
              scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_panties'] }]);
            } else {
              if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).analPlugIn ?? 0) === 1) {
                scene.actions([{ label: 'Continue', goto: ['gschool_office', 'plugin_nude'] }]);
              } else {
                scene.actions([
                  { label: 'Continue', goto: ['gschool_office', 'whore'] },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterNoPluginNude(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/principal/bare.jpg');
  scene.text('Once you walk over to her, Miss Volkov bends you over before she pulls up your skirt.');
  scene.text('She pauses. "Where are your panties?"');
  scene.actions([
    { label: 'Feign innocence', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"Oh? I must have forgotten them," you tell her in mock surprise.');
    // TODO-QSP: dynamic text: She sighs. "You seriously expect me to believe you <i>forgot</i> to put on your ...
    scene.text(`She sighs. "You seriously expect me to believe you <i>forgot</i> to put on your underwear?" She pauses, but before you can reply, she continues. "I don't care what reasons you have, it is simply unacceptable not to wear underwear to school. I will note this down as an additional demerit; don't let me catch you not wearing them again, ${((s as any).pcs_lastname ?? 0)}. Do you understand me?"`);
    scene.text('Without waiting for a response, she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    if ((!((s as any).detention_set ?? 0))) {
      (s as any).detention_set = 1;
      scene.text('Just before you walk out the door, she stops you.');
      // TODO-QSP: dynamic text: "I'm also giving you detention this Saturday, <<$pcs_lastname>>. Do <i>not</i> m...
      scene.text(`"I'm also giving you detention this Saturday, ${((s as any).pcs_lastname ?? 0)}. Do <i>not</i> miss it."`);
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: '"Don\'t like wearing them"', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"I don\'t like wearing them; the freedom I feel when I don\'t have them on is just so…"');
    scene.text('You stop when you realize how quickly her face darkens. A blind man could tell she\'s angry with you, even without the shrill tone of her voice.');
    scene.text('"I don\'t care if you don\'t like wearing them, you will <i>not</i> walk around my school like some common whore! Do you understand me?"');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"No, I don\'t have to wear them if I don\'t want to!" you reply in a haughty voice.');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine. If that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"I won\'t let it happen again…" you respond meekly and she nods before she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/principal/flirt.jpg');
    scene.text('You wiggle your ass around a little. "I didn\'t wear any, just for you. Like what you see?"');
    scene.text('"Stop acting like some little whore!" she says in a stern voice, not pleased by you or your antics.');
    scene.text('You smile at her. "Come on! Give my ass a little slap… You know you want to…"');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine. If that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPluginPanties(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/plug.jpg');
  scene.text('Once you walk over to her, Miss Volkov bends you over and pulls up your skirt and pulls down your panties, but stops when she sees your buttplug.');
  scene.text('"Why do you have <i>this</i>, young lady?"');
  scene.actions([
    { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"What? Oh, sorry. I like the way it feels and I forgot I was wearing it. I meant to take it out before I came to school this morning," you reply.');
    // TODO-QSP: dynamic text: She sighs. "You seriously expect me to believe you forgot you had a plug jammed ...
    scene.text(`She sighs. "You seriously expect me to believe you forgot you had a plug jammed in your ass?" She pauses, but before you can reply, she continues. "I don't care what reasons you have, it is simply unacceptable to wear a buttplug to school. I will note this down as an additional demerit; don't let me catch you wearing this again, ${((s as any).pcs_lastname ?? 0)}. Do you understand me?"`);
    scene.text('Without waiting for a response, she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    if ((!((s as any).detention_set ?? 0))) {
      (s as any).detention_set = 1;
      scene.text('Just before you walk out the door, she adds. "I\'m also giving you detention this Saturday. Do <i>not</i> miss it."');
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: '"I like wearing it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"I like the way it feels," you reply while wiggling your ass. "It especially helps class pass more quickly."');
    scene.text('Her face darkens and you can tell she\'s angry with you, even without the shrill tone of her voice.');
    scene.text('"I don\'t care if you like wearing it, you will <i>not</i> walk around my school like some common whore! Do you understand me?!"');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"No, I like wearing it and I\'m not going to let you tell me what I can and can\'t do!" you reply in a haughty voice.');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine, if that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"I won\'t let it happen again…" you respond meekly and she nods before she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    if ((!((s as any).detention_set ?? 0))) {
      (s as any).detention_set = 1;
      scene.text('Just before you walk out the door, she adds. "I\'m also giving you detention this Saturday. Do <i>not</i> miss it."');
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/principal/flirt.jpg');
    scene.text('You wiggle your ass around a little. "I wore it for you. Like what you see?"');
    scene.text('"Stop acting like some little whore!" she says in a stern voice, not pleased by you or your antics.');
    scene.text('You smile at her. "Come on! Give my ass a little slap… You know you want to…"');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine. If that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPluginNude(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/plug.jpg');
  scene.text('Once you walk over to her, Miss Volkov bends you over. She pulls up your skirt, but pauses when she sees your bare ass stuffed with your plug.');
  scene.text('"Where are your panties? And why do you have <i>that</i> inside you?"');
  scene.actions([
    { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"What? Oh, sorry. I like the way it feels and forgot I was wearing it. I meant to take it out before I came to school this morning. I guess I also forgot my panties too…" you smile.');
    // TODO-QSP: dynamic text: She sighs. "You seriously expect me to believe you forgot to put on your underwe...
    scene.text(`She sighs. "You seriously expect me to believe you forgot to put on your underwear <b>and</b> forgot that you had a plug jammed in your ass?" She pauses, but before you can reply, she continues. "I don't care what reasons you have, it is simply unacceptable to wear a buttplug to school… or <i>not to</i> wear underwear. I will note these down as additional demerits; don't let me catch you doing this again, ${((s as any).pcs_lastname ?? 0)}. Do you understand me?"`);
    scene.text('Without waiting for a response, she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    if ((!((s as any).detention_set ?? 0))) {
      (s as any).detention_set = 1;
      scene.text('Just before you walk out the door, she stops you.');
      // TODO-QSP: dynamic text: "I'm also giving you detention this Saturday, <<$pcs_lastname>>. Do <i>not</i> m...
      scene.text(`"I'm also giving you detention this Saturday, ${((s as any).pcs_lastname ?? 0)}. Do <i>not</i> miss it."`);
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    { label: '"I like the way it feels"', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"I don\'t like wearing them; the freedom I feel when I don\'t have them on is incredible, and the sensation of having a plug in my ass is…"');
    scene.text('You stop when you realize how quickly her face darkens. A blind man could tell she\'s angry with you, even without the shrill tone of her voice.');
    scene.text('"I don\'t care if you don\'t like wearing them, you will <i>not</i> walk around my school like some whore! Do you understand me?!"');
    qspCall(s, 'willpower', 'misc', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/angry.jpg');
    scene.text('"No, I\'m not going to let you tell me what I can and can\'t wear!" you reply in a haughty voice.');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine. If that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/schoolpaddle1.jpg');
    scene.text('"I won\'t let it happen again…" you respond meekly and she nods before she pulls out a large wooden paddle and gives you a hard smack across your bare ass. You jerk in reflex - she\'s a strong woman and her blows sting quite a bit. She clearly wants to teach you a lesson this time… and it\'s kind of working.');
    scene.text('You silently take your punishment. It almost brings you to tears, but a part of you gets turned on by it as well, a circumstance you don\'t want her to know. You don\'t have to play along much to hide it, though: It <b>really</b> hurts, even if you are enjoying it, so you wither around and whimper as she spanks you until your ass is bright red and feels like it\'s radiating heat.');
    // TODO-QSP: dynamic text: She then lifts you back to your feet. "I hope this has taught you a lesson; I do...
    scene.text(`She then lifts you back to your feet. "I hope this has taught you a lesson; I don't want to see you in my office anymore, ${((s as any).pcs_lastname ?? 0)}. You can return to class now."`);
    scene.text('With that, she goes back to her desk and you pull your skirt down before heading back to class.');
    if ((!((s as any).detention_set ?? 0))) {
      (s as any).detention_set = 1;
      scene.text('Just before you walk out the door, she stops you.');
      // TODO-QSP: dynamic text: "I'm also giving you detention this Saturday, <<$pcs_lastname>>. Do <i>not</i> m...
      scene.text(`"I'm also giving you detention this Saturday, ${((s as any).pcs_lastname ?? 0)}. Do <i>not</i> miss it."`);
    }
    qspCall(s, 'arousal', 'foreplay', 5, 'maso', 'rough');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    { label: 'Flirt', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/principal/flirt.jpg');
    scene.text('You wiggle your ass around a little. "I wore it for you. Like what you see?"');
    scene.text('"Stop acting like some little whore!" she says in a stern voice, not pleased by you or your antics.');
    scene.text('You smile at her. "Come on! Give my ass a little slap… You know you want to…"');
    scene.text('She gives you a long, hard look and her eyes narrow dangerously. "Fine. If that\'s what you want to be, but this is a school, <b>your</b> school, and as your teacher, I will show you how to be a proper whore."');
    scene.actions([
      { label: 'Continue', goto: ['gschool_office', 'whore'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDetPunishment1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'outfit', 'strip_all');
  qspCall(s, 'pain', '', 7, 'asscheeks', 'spank');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/detention/ffspank1.jpg');
  scene.text('"Very well. Since you both wanted to be naked so badly, take off your clothes. <i>All</i> of them," she says as she pulls a chair over near her leather couch and takes a seat.');
  scene.text('Hesitantly, you both slowly remove all your clothes. Once you\'re both naked, Miss Volkov motions you over. As soon as you\'re within arm\'s reach, she grabs you and pulls you across her lap. She then proceeds to spank your bare ass until your cheeks are cherry red and stinging.');
  // TODO-QSP: dynamic text: <<$rand_girl>> takes a seat on the couch and silently watches.
  scene.text(`${((s as any).rand_girl ?? 0)} takes a seat on the couch and silently watches.`);
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/ffspank2.jpg');
    scene.text('Once she\'s satisfied, she pulls you up and points to the corner of her office. "Go and stand over there. Leave your clothes where they are and face the corner."');
    // TODO-QSP: dynamic text: You do as you're told, gingerly rubbing your ass as you go. You glance back when...
    scene.text(`You do as you're told, gingerly rubbing your ass as you go. You glance back when you hear the slap of flesh on flesh; ${((s as any).rand_girl ?? 0)} is laid out across Miss Volkov's lap, getting her ass spanked as well.`);
    // TODO-QSP: dynamic text: As time passes, you can hear <<$rand_girl>> moaning, either pretending to like i...
    scene.text(`As time passes, you can hear ${((s as any).rand_girl ?? 0)} moaning, either pretending to like it or really enjoying it. Miss Volkov seems annoyed at this and spends considerably more time spanking ${((s as any).rand_girl ?? 0)}'s already glowing ass than she did with you before she finally seems to grow tired.`);
    // TODO-QSP: dynamic text: Lifting <<$rand_girl>> off her lap, she points to your corner. "Go join your fri...
    scene.text(`Lifting ${((s as any).rand_girl ?? 0)} off her lap, she points to your corner. "Go join your friend."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/detention/ffspank3.jpg');
    // TODO-QSP: dynamic text: You and <<$rand_girl>> stand facing the corner together; your ass is seriously s...
    scene.text(`You and ${((s as any).rand_girl ?? 0)} stand facing the corner together; your ass is seriously stinging and if anything ${((s as any).rand_girl ?? 0)}'s must be much redder than yours.`);
    scene.text('Apparently expecting one of you to disobey her, Miss Volkov keeps an eye on you for a while, but neither of you do. The two of you stay standing facing the corner, naked with your backsides on fire.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'outfit', 'wear_last_worn');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/ffspank4.jpg');
    scene.text('A few hours later, Miss Volkov finally speaks to you. "Alright you two, get dressed and go home. I don\'t want to see you in here again."');
    scene.text('You quickly gather up your clothes and get dressed again before hurrying out of her office.');
    scene.actions([
      { label: 'Leave the school building', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWhore(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore.jpg');
  scene.text('"Strip off your clothes," she orders.');
  scene.text('When you hesitate, she looks at you sternly. "It\'s either this or I call your parents right now and tell them why you\'re being expelled from school."');
  scene.text('A cold chill runs down your spine at the thought. Unwilling to test her and with little choice in the matter, you strip off your clothes. Once you\'re down to just your shoes and socks, she pulls you across her lap and starts giving your bare ass a hard spanking with her hand. She hits you with full force every single time and keeps it up until her own hand starts to sting and she stops. You\'re starting to think you\'re done then she grips you by the hair and bends you over her desk instead.');
  qspCall(s, 'pain', '', 3, 'asscheeks', 'spank');
  scene.actions([
    { label: 'She takes out the paddle', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore1.jpg');
    scene.text('Once bent over her desk, she takes out a large paddle and spanks you hard with it, leaving your ass red and throbbing.');
    scene.text('After a while, the pain is really starting to get to you, but she doesn\'t seem to have any intention of stopping. Finally, after many minutes, she seems to be getting tired, her hits lacking the sting the early ones had.');
    scene.text('She pulls you away from the desk and turns you to face the other way, then forces you down to your knees.');
    scene.text('"Stay like this!" she commands and walks back to her desk.');
    qspCall(s, 'pain', '', 5, 'asscheeks', 'spank');
    scene.actions([
      { label: 'When she comes back…', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore4.jpg');
    scene.text('You hear her rummaging around in her desk before she comes back into view a few minutes later, wearing a rather large strap-on.');
    scene.text('Your eyes widen in shock at the sight of it, and while you\'re still preoccupied with working through your surprise, she closes the gap between you and starts rubbing the tip of the dildo against your lips, as if trying to force it into your mouth.');
    scene.text('"Open your mouth like the good little whore you so desperately want to be."');
    scene.actions([
      { label: 'Suck it', handler: (st: GameState) => {
    qspCall(s, 'boyStat', 'D3');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore5.jpg');
    // TODO-QSP: dynamic text: You barely even have time to open your mouth at all before she shoves the <<dick...
    scene.text(`You barely even have time to open your mouth at all before she shoves the ${((s as any).dick ?? 0)}cm ${((s as any).dick_girth ?? 0)} strap-on down your throat, causing you to start gagging. Unconcerned by this, she shoves the dildo as far down your throat as it will physically go and starts roughly fucking your throat with it, barely giving you any time to catch your breath.`);
    scene.text('After several minutes, your throat feels like it\'s on fire and she finally stops, giving you time to gulp down the air you so desperately need. As you do, she lifts you up and bends you over her desk once more. She briefly slips one finger into your pussy, likely checking if you\'re a virgin.');
    qspCall(s, 'pain', '', 3, 'throat', 'choke');
    qspCall(s, 'arousal', 'bj', 5, 'lesbian', 'humiliation', 'sub', 'deepthroat');
    qspCall(s, 'stat', '');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('"I must admit, I\'m very surprised that anyone acting like such a whore would still be a virgin. I suppose that means you\'re one of those girls that just let the boys use their other holes instead…"');
      scene.actions([
        { label: 'Get your ass fucked', goto: ['gschool_office', 'whore2'] },
      ]);
    } else {
      scene.actions([
        { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore6.jpg');
    scene.text('Lifting one of your legs up to place your knee on the desk, you know what\'s about to come next, and though knowing itself only helps so much, the natural wetness of your pussy and your drool on the dildo absolutely do.');
    scene.text('It hurts a little when she shoves the strap-on all the way inside you, and the moan you give is one of both pain and pleasure.');
    scene.text('"You even moan like a little whore," she says as she repeatedly hammers the dildo\'s full length into you.');
    qspCall(s, 'arousal', 'vaginal_strap', 5, 'lesbian', 'humiliation', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get your ass fucked', goto: ['gschool_office', 'whore2'] },
    ]);
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

function enterWhore2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore7.jpg');
  scene.text('She half-lifts, half-pushes you onto her desk, where she has you kneel down and sit back until you\'re touching your heels. With your feet dangling off the edge of the desk, your backdoor is easily accessible, which seems to be the idea - you feel the pressure of the strap-on against your anus.');
  scene.text('It only lasts for a moment, though: As soon as she\'s sure she has it lined up, she shoves the dildo up your ass. Given how unprepared you were and that the only lubrication was whatever wetness clung to the dildo, your cry of pain is surprisingly soft, but your first reflex is to move forward.');
  // TODO-QSP: dynamic text: Realizing this, she grabs hold of your hips to keep you from pulling away. "I'm ...
  scene.text(`Realizing this, she grabs hold of your hips to keep you from pulling away. "I'm not done with you yet, ${((s as any).pcs_lastname ?? 0)}. This is what whores do every day, and they have to like it!" she says as she pounds the dildo into your ass.`);
  scene.text('The first few thrusts are the worst, even worse than the initial penetration, but after a while - and maybe also due to her spitting on your puckered hole several times - the pain subsides to tolerable levels and it starts feeling good, <i>really</i> good.');
  scene.text('Soft moans escape your lips and you no longer try to pull away; you\'re now pushing back against her.');
  scene.text('"Now you\'re acting like a good little whore," she comments, with your only response being another moan as you thrust against her.');
  (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (4);
  qspCall(s, 'arousal', 'anal_strap', 5, 'lesbian', 'humiliation', 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Take it deep', handler: (st: GameState) => {
    qspCall(s, 'pain', '', 5, 'asshole', 'ache');
    qspCall(s, 'arousal', 'anal_strap', 10, 'lesbian', 'humiliation', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore8.jpg');
    scene.text('She pulls out of you and part of you is relieved, but the other wants her to keep going. She pushes you forward until your elbows touch the top of her desk and climbs onto the desk behind you before sliding the dildo back into your gaping ass.');
    scene.text('Her free hand holds onto your hips for leverage while the other grabs a handful of your hair and painfully pulls and twists it as she starts jackhammering your ass again.');
    scene.text('Many more minutes pass, and while it did feel extraordinarily good for a while, your ass is now starting to get really sore; all the lubrication seems to have come off the dildo and the friction is making every thrust more painful than the last.');
    scene.text('You grit your teeth and bear it as best you can, but eventually it starts hurting so much that your ass feels like it\'s on fire and you start begging. "Please, Miss Volkov, please! It\'s really starting to hurt!"');
    scene.text('"I thought you wanted to act like a little whore in my school? Are you saying you\'ve changed your mind?" she asks as she pulls almost completely out before slamming the entire shaft back in again.');
    scene.text('You cry out in agony; at this point, you\'d be willing to do just about anything to stop this. "Yes! Yes, I\'ve changed my mind! I\'m sorry Miss Volkov, I don\'t want to be a whore! Please stop!"');
    scene.text('For a minute, you don\'t know what she\'s going to do, and are nonetheless surprised, let alone relieved, when she pulls out.');
    scene.text('"Very well," she says. "Roll over."');
    scene.actions([
      { label: 'Roll over', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore9.jpg');
    scene.text('You do as she tells you and roll over, now laying on your back on her desk. She steps one leg off the desk, straddling your face, and lowers her pussy over your mouth.');
    scene.text('"Good little whores get their customers off. Maybe you changed your mind, or maybe you just told me what I wanted to hear, but either way, this lesson isn\'t over yet. Get licking or I\'ll fuck that ass of yours again."');
    scene.text('Not wanting her to make good on that threat, you start licking her pussy and find it soaking wet already; it would seem the rumors that she used to be or still is a dominatrix really are true.');
    scene.text('You lick and suck on her pussy lips and clit, avoiding the center for a few minutes, but then slip your tongue into her, fucking her pussy as well as you can. It doesn\'t take long until she orgasms and coats your face in her pussy juices.');
    qspCall(s, 'arousal', 'cuni_give', 5, 'humiliation', 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore10.jpg');
    // TODO-QSP: dynamic text: She lifts herself up and uses her hand to tilt the dildo down to your mouth. "Th...
    scene.text(`She lifts herself up and uses her hand to tilt the dildo down to your mouth. "That wasn't too bad, ${((s as any).pcs_lastname ?? 0)}. All you have to do now is suck my dick clean, and then you can go. Or maybe you'd rather…?"`);
    scene.text('She leaves the exact alternative unspoken, but you have no doubt as to what she\'s alluding to, and while you\'d rather be doing anything else than sucking a dildo your headmistress just violated your ass with, it beats getting fucked with it again.');
    scene.text('With the choice rather easy, you obediently open your mouth and start sucking it clean, ignoring both the taste and the throbbing pain in your bowels as best as you can.');
    qspCall(s, 'arousal', 'dildo_suck', 2, 'lesbian', 'humiliation', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/teacher/aleksandrina/sex/school/whore11.jpg');
    scene.text('Once she deems the dildo clean enough, she removes it from your mouth, gets off the desk and pulls you off as well.');
    scene.text('She leans against the table and points at the door. "Get your shit and remove yourself from my office right now. If you hurry, you can make it back into the hallway and get dressed before the next bell."');
    scene.text('Your eyes widen slightly at the thought of being forced out into a hallway full of the classmates naked, but the expression on her face and her previous cruelties leave no doubt in your mind that she\'s serious. You quickly gather your clothes and hurry out of the office.');
    scene.text('Once out in the hall, you quickly get dressed, trying your best to ignore your burning asshole as you do. You barely finish getting yourself in order before the bell rings and the hallway fills up with your fellow students.');
    scene.text('It takes you a second to realize that the principal was fucking you for a full class - no wonder your ass started hurting so much. With a new understanding for what school punishment can entail, you go to your next class, trying not to walk too bowlegged.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIvanovRevenge(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Principal\'s Office</b></center>');
  scene.img('images/locations/pavlovsk/school/principal/office.jpg');
  scene.text('As Mr. Ivanov drags you into the office, you see Miss Volkov sitting behind her desk as she looks up at you. "What\'s the meaning of this?"');
  scene.text('Mr. Ivanov lets go of you. "I caught her in the bathroom doing some kind of drugs, but she flushed them down the toilet before I could get them."');
  scene.text('You\'re about to say something, but one look from Miss Volkov silences you. You know your only chance is if she believes you, and disobeying her won\'t help.');
  scene.text('She looks at him, and then at you. "This is a very serious offence. Is this true?"');
  scene.actions([
    { label: 'Admit it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/school/principal/office.jpg');
    scene.text('You sigh, knowing there\'s no way she\'ll believe you over Mr. Ivanov. "Yes Miss Volkov, I was taking drugs and I\'m very sorry."');
    scene.text('She leans back in her chair. "I appreciate your honesty, but this is very serious. I\'m afraid I can\'t let you off with a warning. You\'re suspended for one week. Go and sit in the waiting area until one of your parents can come and get you."');
    scene.text('Your heart sinks and you just nod before leaving.');
    scene.actions([
      { label: 'Wait', goto: ['gschool_office', 'suspended'] },
    ]);
  } },
    { label: 'Say nothing', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/school/principal/office.jpg');
    scene.text('You sigh, knowing there\'s no way she\'ll believe you over Mr. Ivanov, so you decide to say nothing at all.');
    scene.text('After several seconds of silence, she leans back in her chair. "I appreciate you not lying to me at least, even if you refuse to talk. You\'re suspended for one week. Go and sit in the waiting area until one of your parents can come and get you."');
    scene.text('Your heart sinks and you just nod before leaving.');
    scene.actions([
      { label: 'Wait', goto: ['gschool_office', 'suspended'] },
    ]);
  } },
    { label: 'Deny it', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/school/principal/office.jpg');
    scene.text('"I wasn\'t doing drugs! I didn\'t do anything!" you angrily reply while glancing at Mr. Ivanov. "I don\'t know what he thought he saw, but I wasn\'t doing what he says I did!"');
    scene.text('She leans back in her chair. "I\'d like to believe you, but you were clearly skipping class, so it\'s not a stretch to believe you were doing more than that. I\'m afraid I can\'t let you off with a warning. You\'re suspended for one week. Go and sit in the waiting area until one of your parents can come and get you."');
    scene.text('Your heart sinks and you just nod before leaving.');
    scene.actions([
      { label: 'Wait', goto: ['gschool_office', 'suspended'] },
    ]);
  } },
    { label: 'Say he\'s lying', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('<center><b>Principal\'s Office</b></center>');
    scene.img('images/locations/pavlovsk/school/principal/office.jpg');
    scene.text('"He\'s lying! He tried to blackmail me into having sex with him!" you angrily reply.');
    // TODO-QSP: dynamic text: She leans back in her chair. "That's a very serious accusation, Miss <<$pcs_last...
    scene.text(`She leans back in her chair. "That's a very serious accusation, Miss ${((s as any).pcs_lastname ?? 0)}. Do you have any proof?"`);
    scene.text('You shake your head. "No, just my word."');
    scene.text('She shakes her head. "I\'m sorry, but if Mr. Ivanov says he saw you, then I\'m inclinded to believe him since he has no reason to lie. As for your accusation, I just don\'t believe he would ever do that. I never thought you would resort to such tactics to try and keep yourself out of trouble. Shame on you! You\'re suspended for one week, but I would expel you if I could. Now go and sit in the waiting area until one of your parents can come and get you."');
    scene.text('Your heart sinks and you just nod before leaving.');
    scene.actions([
      { label: 'Wait', goto: ['gschool_office', 'suspended'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSuspended(s: GameState, scene: SceneBuilder): void {
  ((s as any).suspended ?? {})['day'] = ((s as any).daystart ?? 0) + 7;
  ((s as any).suspended ?? {})['on'] = 1;
  qspCall(s, 'archetypes', 'gain', 'punk', 'medium', 'Suspended from school', 30);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'npc_relationship', 'modify', 'A29', (-25));
  qspCall(s, 'stat', '');
  scene.text('<center><b>Office</b></center>');
  scene.img('images/characters/shared/headshots_main/big29.jpg');
  scene.text('You wait for half an hour until your mother shows up; she looks about as pissed as you\'ve ever seen her. She walks over and you start to open your mouth, but she interrupts you.');
  scene.text('"I don\'t want to hear it! Do you know how ashamed I am of you right now?! They called me at work and told me to come and get you. Now everyone at work knows! You\'re so selfish! All you had to do was behave yourself and get good grades, but that\'s apparently too hard for you!"');
  scene.text('She grabs your arm and drags you out of the school, lecturing you the whole way home. In fact, she never stops talking until she drops you off at the apartment.');
  scene.text('"I have to get back to work, so make yourself useful for once and clean this place up!"');
  scene.text('She walks out and slams the door before you can reply.');
  scene.actions([
    { label: 'Continue', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'principal':
      enterPrincipal(s, scene);
      break;
    case 'spanked':
      enterSpanked(s, scene);
      break;
    case 'no_plugin_nude':
      enterNoPluginNude(s, scene);
      break;
    case 'plugin_panties':
      enterPluginPanties(s, scene);
      break;
    case 'plugin_nude':
      enterPluginNude(s, scene);
      break;
    case 'detPunishment1':
      enterDetPunishment1(s, scene);
      break;
    case 'whore':
      enterWhore(s, scene);
      break;
    case 'whore2':
      enterWhore2(s, scene);
      break;
    case 'ivanov_revenge':
      enterIvanovRevenge(s, scene);
      break;
    case 'suspended':
      enterSuspended(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_office: LocationDef = {
  name: 'gschool_office',
  title: 'Principal\'s Office',
  region: 'other',
  enter: enter,
};
