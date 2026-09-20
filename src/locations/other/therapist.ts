import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['sensitivity_override'] = 0;
  }
  // TODO-QSP: gt $ARGS[1], $ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/system/image_needed.png');
  scene.text('As you make your way over, the nurse stops you. "Since it\'s your first time seeing him, I just need you to fill out a few forms first, consent mostly. NDA\'s and Patient/Doctor stuff.');
  scene.text('Please make sure you read everything. We can\'t have you filing lawsuits or suing us for things that you agreed to" she says and hands you a clipboard and a few forms.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Read the Forms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('It\'s all basic stuff, mainly asking for medical information, past experiences, issues with meds, things like that. You spend a good few minutes skimming it over and you see some really fine print at the bottom that reads:');
    scene.text('<sub>"… one service that is offered is hypnosis. Should you wish to use this, the clinic is not responsible for anything that may happen to you. If you start having issues with anything due to the hypnosis, I.E. barking like a dog on the full moon, kissing horses in the lips, becoming a bride to a 90 year old man whose only goal is to turn you into his personal breeding stock, or even changing your sexual preference. These are just hypotheicals, mind you…"</sub>');
    scene.text('You find this kind of funny. stuff like that doesn\'t exist right?… Right? You fill out the form and on the last page you see a note, as if it was written on a sticky note before it was photocopied.');
    scene.text('<i>"If you are reading this, know that going down this path is a one-way trip into a realm of pleasure, enthrallement, pregnancy, and marriage. If you agree to this form, you take full ownership that whatever happens is your fault and no one else\'s. Understand this before signing. This is your only warning."</i>');
    scene.text('You feel as if this was placed for you and only you, the nurse would have noticed this long before you ever showed up. Do you sign?');
    scene.actions([
      { label: 'Sign the page', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You sign the last page of the packet and then take it back to the nurse. She looks it over and somehow doesn\'t seem to notice or care about the note on the back of it. She stands up and says. "Everything looks good. Please follow me" she says and takes you to the Therapists room.');
    scene.actions([
      { label: 'Enter the Therapist\'s Office', handler: (st: GameState) => {
    ((st as any).therapistQW = (st as any).therapistQW ?? {})['met'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'therapist', 'start');
  } },
    ]);
  } },
      { label: 'Throw the forms away and leave', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    scene.actions([
      { label: 'Permanently disable the therapist', handler: (st: GameState) => {
    ((st as any).therapistQW = (st as any).therapistQW ?? {})['met'] = (-1);
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'pav_clinic']; enterLeave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Give up and try again later', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'pav_clinic']; enterLeave(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).cumdesciption3 = '';
  (s as any).therapistFuckedPussy = 0;
  (s as any).therapistFuckedAss = 0;
  (s as any).therapistFuckedMouth = 0;
  scene.text('<center><b>Therapist</b></center>');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
  scene.text('Stepping into the office of <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027therapist/u0027, /u0027pavlov/u0027); return false;">Dr. Pavlov</a>, you are welcomed with a warm smile.');
  scene.text('When you look around the room, you are greeted by a warm and inviting atmosphere. The room is illuminated by large windows that overlook the forest beyond. At one end of the room there is a desk with a chair stacked with folders and books pertaining to hypnotherapy and other therapy materials. This includes a laptop that is closed and appears clean, as if it has been seldom used. You see an older <a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: VIEW /u0027images/locations/pavlovsk/clinic/therapist/pavlovfamily.jpg/u0027 */ return s; }); return false;">photograph of Dr. Pavlov\'s family</a> in which he appears to be about two decades younger.');
  qspCall(s, 'stat', '');
  if (((s as any).therapist_weekly_block ?? 0) === 0  ||  ((s as any).cheatVars ?? 0)?.['therapist_schedule'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHypnoGreet(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, too much treatment without time for your brain to proce...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}, too much treatment without time for your brain to process could be harmful.`);
    scene.text('Come next week, we can talk about your problems then."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHypnoGreet(s: GameState, scene: SceneBuilder): void {
  (s as any).therapistday = ((s as any).daystart ?? 0);
  (s as any).therapist_weekly_block = 1;
  if (((s as any).succubusflag ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Come in, Miss <<$pcs_lastname>>! Please, tell me what can I help you with today...
    scene.text(`"Come in, Miss ${((s as any).pcs_lastname ?? '')}! Please, tell me what can I help you with today?"`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).hypnoFlashGreet ?? 0) === 0  &&  (!((s as any).hypnoCheckPanties ?? 0))) {
      // TODO-QSP: dynamic text: "Come in, Miss <<$pcs_lastname>>! Please, tell me what can I help you with today...
      scene.text(`"Come in, Miss ${((s as any).pcs_lastname ?? '')}! Please, tell me what can I help you with today?"`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((!((s as any).hypnoFlashGreet ?? 0))) {
        // TODO-QSP: dynamic text: "Come in! Miss <<$pcs_lastname>>, as you know, I''m going to inspect you now."
        scene.text(`"Come in! Miss ${((s as any).pcs_lastname ?? '')}, as you know, I'm going to inspect you now."`);
        scene.actions([
          { label: 'Wait for him to inspect you', handler: (st: GameState) => {
    if (((st as any).underwear ?? 0)?.['type'] === 2) {
      (st as any).wornPanties = ((st as any).wornPanties ?? 0) + (1);
      scene.img('images/locations/pavlovsk/clinic/therapist/pavlov.jpg');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, a bodysuit?"
      scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, a bodysuit?"`);
      scene.text('You remain silent.');
      scene.text('"That\'s cheating and I will count it as panties."');
      scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
      scene.text('He interrupts you and commands you to strip off your bodysuit and hand it to him.');
      qspCall(st, 'mood', 'lower', 'large');
      scene.actions([
        { label: 'Give Dr. Pavlov your bodysuit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(st, 'underwear_bodysuits', 'dispose');
    if (((st as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your bodysuit in the garbage. "Just don''t let it happen again. What d...
      scene.text(`He throws your bodysuit in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((st as any).pcs_lastname ?? '')}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((st as any).pcs_lastname ?? '')}?`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).pantyworntype ?? 0) !== 'none') {
        (st as any).wornPanties = ((st as any).wornPanties ?? 0) + (1);
        scene.img('images/locations/pavlovsk/clinic/therapist/checkPanties2.mp4');
        // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, what is this?"
        scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, what is this?"`);
        scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
        scene.text('He interrupts you and commands you to strip off your panties and hand them to him.');
        qspCall(st, 'mood', 'lower', 'large');
        scene.actions([
          { label: 'Give Dr. Pavlov your panties', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(st, 'panties', 'dispose');
    if (((st as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your panties in the garbage. "Just don''t let it happen again. What di...
      scene.text(`He throws your panties in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((st as any).pcs_lastname ?? '')}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((st as any).pcs_lastname ?? '')}?`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/clinic/therapist/checkPanties.mp4');
        // TODO-QSP: dynamic text: "Very good Miss <<$pcs_lastname>>. I see you are very well mannered."
        scene.text(`"Very good Miss ${((st as any).pcs_lastname ?? '')}. I see you are very well mannered."`);
        scene.text('"Thank you Dr. Pavlov."');
        if (((st as any).hypnoTouchWhenever ?? 0) === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
          scene.actions([
            { label: 'Get groped', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/gropePussy.jpg');
    // TODO-QSP: dynamic text: "Very good Miss <<$pcs_lastname>>. What was it you needed help with today?"
    scene.text(`"Very good Miss ${((st as any).pcs_lastname ?? '')}. What was it you needed help with today?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.text('"Now what was it you needed help with today?"');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Come in! Miss <<$pcs_lastname>>, you remember your manners yes?"
        scene.text(`"Come in! Miss ${((s as any).pcs_lastname ?? '')}, you remember your manners yes?"`);
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          (s as any).wornPanties = ((s as any).wornPanties ?? 0) + (1);
          scene.actions([
            { label: 'Lift your skirt for Dr. Pavlov', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/showPanties.mp4');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, what is this?"
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, what is this?"`);
    scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
    scene.text('He interrupts you and commands you to strip off your panties and hand them to him.');
    qspCall(st, 'mood', 'lower', 'large');
    scene.actions([
      { label: 'Give Dr. Pavlov your panties', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(st, 'panties', 'dispose');
    if (((st as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your panties in the garbage. "Just don''t let it happen again. What di...
      scene.text(`He throws your panties in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((st as any).pcs_lastname ?? '')}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((st as any).pcs_lastname ?? '')}?`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Show Dr. Pavlov your bare pussy', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/showPussy${(Math.floor(Math.random() * 7) + 1)}.jpg`);
    scene.text('You show your bare pussy to Dr. Pavlov and wait for his response.');
    scene.text('…');
    if (((st as any).pcs_horny ?? 0) >= 75  &&  ((st as any).pcs_horny ?? 0) <=89) {
      // TODO-QSP: dynamic text: Miss <<$pcs_lastname>>, your pussy is very wet… How can I help you today?
      scene.text(`Miss ${((st as any).pcs_lastname ?? '')}, your pussy is very wet… How can I help you today?`);
    } else {
      if (((st as any).pcs_horny ?? 0) >= 90) {
        // TODO-QSP: dynamic text: Miss <<$pcs_lastname>>, your pussy is soaking wet… How can I help you today?
        scene.text(`Miss ${((st as any).pcs_lastname ?? '')}, your pussy is soaking wet… How can I help you today?`);
      } else {
        (st as any).randomFlashGreetResponse = (Math.floor(Math.random() * 3) + 1);
        if (((st as any).randomFlashGreetResponse ?? 0) === 1) {
          // TODO-QSP: dynamic text: "Ah, very nice pussy Miss <<$pcs_lastname>>. What was it you wanted help with to...
          scene.text(`"Ah, very nice pussy Miss ${((st as any).pcs_lastname ?? '')}. What was it you wanted help with today?"`);
        } else {
          if (((st as any).randomFlashGreetResponse ?? 0) === 2  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
            // TODO-QSP: dynamic text: "I see you didn''t wear panties today Miss <<$pcs_lastname>>. Very good. What wa...
            scene.text(`"I see you didn't wear panties today Miss ${((st as any).pcs_lastname ?? '')}. Very good. What was it you wanted help with today?"`);
          } else {
            if (((st as any).randomFlashGreetResponse ?? 0) === 3) {
              // TODO-QSP: dynamic text: "Well done Miss <<$pcs_lastname>>, your pussy looks great. What was it you wante...
              scene.text(`"Well done Miss ${((st as any).pcs_lastname ?? '')}, your pussy looks great. What was it you wanted help with today?"`);
            } else {
              // TODO-QSP: dynamic text: "You are well mannered Miss <<$pcs_lastname>>. What can I help you with?"
              scene.text(`"You are well mannered Miss ${((st as any).pcs_lastname ?? '')}. What can I help you with?"`);
            }
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyOptions(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTherapyOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoStage ?? 0) < 2) {
    (s as any).therapist_weekly_block = 0;
    scene.actions([
      { label: 'Change your mind and leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  }
  if (((s as any).mood_trauma ?? 0) > 0) {
    scene.actions([
      { label: 'Deal with recent traumas', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
    (st as any).therapy = 'trauma';
    scene.text('"I would like some help dealing with some traumatic events I went through recently," you say.');
    scene.text('"I think the best way to do that would be hypnotherapy."');
    if (((st as any).hypnoStage ?? 0) < 2) {
      scene.actions([
        { label: 'Regular therapy', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/therapy1.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'lower_trauma', 1);
    qspCall(st, 'stat', '');
    scene.text('You talk about your traumatic issues, and Dr. Pavlov makes some suggestions and asks some pointed questions. Although he makes you uncomfortable, it somehow makes you feel better about yourself.');
    if ((!((st as any).mood_trauma ?? 0))) {
      scene.text('You are able to give the events a place in your life, and you are finally ready to move on.');
      if (((st as any).PavlinQW ?? 0) >= 5  &&  ((st as any).PavlinQW ?? 0) <= 7) {
        qspCall(st, 'npc_relationship', 'set', 'A217', 20);
        (st as any).PavlinQW = 8;
      }
    }
    scene.text('"Please, visit me again if you have any further problems. I will be glad to help!" he says as he escorts you out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hypnotherapy', goto: ['therapist', 'hypno'] },
    ]);
  } },
    ]);
  }
  if (((s as any).hypnoAskFuck ?? 0) === 1  &&  (!((s as any).succubusflag ?? 0))) {
    scene.actions([
      { label: 'Ask Dr. Pavlov to fuck you', handler: (st: GameState) => {
    (st as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp_rand ?? 0))) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/showPussyForSex${(Math.floor(Math.random() * 2) + 1)}.jpg`);
      scene.text('You kneel forward on the couch and present your bare pussy to Dr. Pavlov before asking him to fuck you.');
      scene.text('He wastes no time and quickly has his dick out, positioned to penetrate your pussy.');
      scene.actions([
        { label: 'Get fucked by Dr. Pavlov', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'fuck', 'kneel');
  } },
      ]);
    } else {
      if (((st as any).temp_rand ?? 0) === 1) {
        scene.img(`images/locations/pavlovsk/clinic/therapist/showPussyForSex${(Math.floor(Math.random() * 4) + 3)}.jpg`);
        scene.text('You lay back on the couch and present your bare pussy to Dr. Pavlov before asking him to fuck you.');
        scene.text('He wastes no time and quickly has his dick out, positioned to penetrate your pussy.');
        scene.actions([
          { label: 'Get fucked by Dr. Pavlov', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'fuck', 'back');
  } },
        ]);
      } else {
        scene.img('images/locations/pavlovsk/clinic/therapist/showPussyForSex1.jpg');
        scene.text('You kneel forward on the couch and present your bare pussy to Dr. Pavlov before asking him to fuck you.');
        scene.text('He wastes no time and quickly has his dick out, ready to penetrate your pussy.');
        scene.actions([
          { label: 'Get fucked by Dr. Pavlov', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'fuck', 'ride');
  } },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).dreamedOfTherapistFucking ?? 0) === 1  &&  ((s as any).succubusflag ?? 0)?.['therapist'] === 0) {
    scene.actions([
      { label: 'Problems with sleeping', handler: (st: GameState) => {
    (st as any).therapistday = ((st as any).daystart ?? 0);
    scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
    qspCall(st, 'stat', '');
    (st as any).therapy = 'sleep';
    // TODO-QSP: dynamic text: "I would like some help with my <<$therapy>>," you say.
    scene.text(`"I would like some help with my ${((st as any).therapy ?? '')}," you say.`);
    // TODO-QSP: dynamic text: "There are two ways to do that, Miss <<$pcs_lastname>>. I can offer you traditio...
    scene.text(`"There are two ways to do that, Miss ${((st as any).pcs_lastname ?? '')}. I can offer you traditional therapy. This one is slow, but just as effective as my second offer, hypnotherapy. I would recommend the hypnosis, but some people don't like the thought of me inside their head that much. The choice is yours."`);
    scene.actions([
      { label: 'Just talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/therapy1.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 31) + 20));
    qspCall(st, 'mood', 'raise_disposition', Math.max(0, (Math.floor(Math.random() * (1 - (-2) + 1)) + ((-2)))));
    qspCall(st, 'stat', '');
    scene.text('You talk about your sleeping troubles, although you omit the parts about how you keep having dreams about sex and the one where he was fucking you. He makes some suggestions, but tells you that he won\'t be able to help further without hypnotherapy.');
    scene.text('You have a nagging feeling that something is wrong, but you agree with Dr. Pavlov. He is such a nice man and his sessions have helped you in the past, so you have no reason not to trust him.');
    scene.actions([
      { label: 'Hypnotherapy', goto: ['therapist', 'sleepProblems'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    scene.actions([
      { label: 'Help with school troubles', handler: (st: GameState) => {
    (st as any).therapy = 'school troubles';
    (st as any).therapyTalkMessage = 'You talk about your troubles at school';
    // TODO-QSP: $therapyTalkMessage[1] = '"I''ve been having some trouble fitting in at school. I would like some he...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyMethod(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Raise your mood and disposition', handler: (st: GameState) => {
    (st as any).therapy = 'mood';
    (st as any).therapyTalkMessage = 'You talk about your troubles';
    // TODO-QSP: $therapyTalkMessage[1] = '"I''ve been feeling a little down lately. I would like some help in raisin...
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyMethod(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Raise your confidence', handler: (st: GameState) => {
    (st as any).therapy = 'confidence';
    (st as any).therapyTalkMessage = 'You talk about your confidence issues';
    // TODO-QSP: $therapyTalkMessage[1] = '"I''ve not been very confident lately. Can you help?"'
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyMethod(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I\'d like to be more charming, likable and sociable', handler: (st: GameState) => {
    (st as any).therapy = 'charm';
    (st as any).therapyTalkMessage = 'You talk about issues with getting along with others';
    // TODO-QSP: $therapyTalkMessage[1] = '"I would like some help being more sociable," you say.'
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyMethod(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterTherapyMethod(s: GameState, scene: SceneBuilder): void {
  (s as any).therapistday = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
  qspCall(s, 'stat', '');
  // TODO-QSP: $therapyTalkMessage[1]
  // TODO-QSP: dynamic text: "There are two ways to do that, Miss <<$pcs_lastname>>. I can offer you traditio...
  scene.text(`"There are two ways to do that, Miss ${((s as any).pcs_lastname ?? '')}. I can offer you traditional therapy. This one is slow and reliable, but more effective is my second offer, hypnotherapy. I would recommend the hypnosis, but some people don't like the thought of me inside their head that much and it doesn't work for everybody. The choice is yours."`);
  if (((s as any).hypnoStage ?? 0) < 2  ||  ((s as any).succubusflag ?? 0)?.['therapist'] === 1) {
    scene.actions([
      { label: 'Just talk', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/therapy1.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).therapy ?? 0) === 'mood') {
      qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 31) + 20));
      qspCall(st, 'mood', 'raise_disposition', (Math.floor(Math.random() * 2) + 0));
    } else {
      if (((st as any).therapy ?? 0) === 'confidence'  ||  ((st as any).therapy ?? 0) === 'school troubles') {
        if (((st as any).willpowermax ?? 0) < 150) {
          (st as any).willpowermax = ((st as any).willpowermax ?? 0) + ((Math.floor(Math.random() * 2) + 0));
        }
      } else {
        if (((st as any).therapy ?? 0) === 'charm') {
          qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
        }
      }
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$therapyTalkMessage>>, and Dr. Pavlov makes some suggestions and asks some poi...
    scene.text(`${((st as any).therapyTalkMessage ?? '')}, and Dr. Pavlov makes some suggestions and asks some pointed questions. Although he makes you look at your own actions and desires closely, making you aware of your own issues, it somehow makes you feel better about yourself.`);
    scene.text('"Please, visit me again if you have any further problems, I will be glad to help!" he says as he escorts you out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) + ((((s as any).hypnoSchedule ?? 0) * 10));
      (s as any).will_cost = ((s as any).will_cost ?? 0) + ((((s as any).hypnoStage ?? 0) * 10));
      (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTime ?? 0) * 3);
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just talk', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just talk', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/clinic/therapist/therapy1.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    if (((st as any).therapy ?? 0) === 'mood') {
      qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 31) + 20));
      qspCall(st, 'mood', 'raise_disposition', Math.max(0, (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)))));
    } else {
      if (((st as any).therapy ?? 0) === 'confidence'  ||  ((st as any).therapy ?? 0) === 'school troubles') {
        if (((st as any).willpowermax ?? 0) < 150) {
          (st as any).willpowermax = ((st as any).willpowermax ?? 0) + ((Math.floor(Math.random() * 3) + 0));
        }
      } else {
        if (((st as any).therapy ?? 0) === 'charm') {
          qspCall(st, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
        }
      }
    }
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$therapyTalkMessage>>, and Dr. Pavlov makes some suggestions and asks some poi...
    scene.text(`${((st as any).therapyTalkMessage ?? '')}, and Dr. Pavlov makes some suggestions and asks some pointed questions. Although he makes you look at your own actions and desires closely, making you aware of your own issues, it somehow makes you feel better about yourself.`);
    scene.text('"Please, visit me again if you have any further problems, I will be glad to help!" he says as he escorts you out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).succubusflag ?? 0)?.['therapist'] === 0) {
    scene.actions([
      { label: 'Hypnotherapy', goto: ['therapist', 'hypno'] },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterHypno(s: GameState, scene: SceneBuilder): void {
  (s as any).numTimesHypnoed = ((s as any).numTimesHypnoed ?? 0) + (1);
  (s as any).hypnoWithdrawal = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'boyStat', 'A186');
  if (((s as any).numTimesHypnoed ?? 0) === 1) {
    (s as any).firsthypno_txt = 'While you are under, I will call you <i>Cunt</i>, and you will respond to it. You will also call me Master.<br>You reply, "Yes, <i>Master</i>."';
    (s as any).firsthypno_txt2 = '"Miss ' + ((s as any).pcs_lastname ?? 0) + ', everything that happens while you are in the black room you will not remember. Understand?"<br>"Yes, Dr. Pavlov."';
  } else {
    (s as any).firsthypno_txt = '';
    (s as any).firsthypno_txt2 = '"<i>Cunt</i>, what do you know about the black room?"<br>"I know that everything that happens here I will not remember, <i>Master</i>."';
  }
  // TODO-QSP: close 'sound/clock.mp3'
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/clinic/therapist/hypnotism3.jpg');
  scene.text('"All right, then. Please, lie on the couch and try to get comfortable."');
  scene.text('While he waits for you to lie down on the couch as you wish, he starts a CD player that plays the soothing sounds of rain. After you are comfortable, he starts to talk in a strangely hypnotic voice.');
  scene.text('"Please, close your eyes."');
  scene.text('He waits a little. The only sound in the room is the clock ticking and the sound of rain.');
  scene.text('"You are standing in front of a house. This house has three rooms, but each of them can only be reached through the one before. The first room is the green room, then the blue room, and at last the black room…"');
  if (((s as any).succubusflag ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSuccubus(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.text('Your mind tries to imagine the things the doctor tells you, and this is your last conscious memory.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    if (((st as any).hypnoStage ?? 0) > 2) {
      (st as any).var1 = 10 - (((st as any).willpowermax ?? 0) / 10);
      if (((st as any).var1 ?? 0) <= 1) {
        (st as any).var1 = 2;
      } else {
        if (((st as any).var1 ?? 0) <= 3) {
          (st as any).var1 = 4;
        } else {
          if (((st as any).var1 ?? 0) <= 5) {
            (st as any).var1 = 6;
          } else {
            if (((st as any).var1 ?? 0) <= 7) {
              (st as any).var1 = 8;
            } else {
              (st as any).var1 = 9;
            }
          }
        }
      }
      (st as any).hypnoStrength = ((st as any).hypnoStrength ?? 0) + ((Math.floor(Math.random() * (10 - ((st as any).var1 ?? 0) + 1)) + (((st as any).var1 ?? 0))) + 3);
      if (((st as any).hypnoTime ?? 0) < 15) {
        if (((st as any).hypnoStrength ?? 0) >= 20) {
          (st as any).hypnoStrength = ((st as any).hypnoStrength ?? 0) - (20);
          (st as any).hypnoTime = ((st as any).hypnoTime ?? 0) + (1);
        }
      } else {
        if (((st as any).hypnoStrength ?? 0) > 20) {
          (st as any).hypnoStrength = 20;
        }
      }
      qspCall(st, 'stat', '');
    }
    if (((st as any).therapy ?? 0) === 'school troubles') {
      (st as any).session = 'You are an outcast because you deserve to be. You\'re a stupid girl that doesn\'t deserve to be treated with any respect. You understand this fact and know your place. You feel that it is acceptable for others to abuse you as they please, because you are not a worthwhile person."';
      (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 5) + 4));
      if ((!((st as any).hypnoStage ?? 0))) {
        ((st as any).trait_vars = (st as any).trait_vars ?? {})['doormat_exp'] = ((st as any).trait_vars['doormat_exp'] ?? 0) + ((Math.floor(Math.random() * 2) + 0));
      } else {
        ((st as any).trait_vars = (st as any).trait_vars ?? {})['doormat_exp'] = ((st as any).trait_vars['doormat_exp'] ?? 0) + (((st as any).hypnoStage ?? 0));
      }
    } else {
      if (((st as any).therapy ?? 0) === 'confidence') {
        (st as any).session = 'You feel confident in your body. You are comfortable in the idea that others could see you naked, this will bring you pleasure. When others are intimate with you, and you show them your body or allow them to use your body for their pleasure. You feel more confident in yourself and in turn, be more confident in yourself."';
        (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + (qspFunc(s, 'random', 'roll', 'min', 2, ((st as any).inhib_xpnxt ?? 0) - ((st as any).inhib_exp ?? 0)));
      } else {
        if (((st as any).therapy ?? 0) === 'charm') {
          if (((st as any).hypnoTime ?? 0) < 5) {
            (st as any).session = 'A charming woman understands her place in this world. A female must always show respect to men. She will put his needs before her own. This will make her feel more charming to the greater sex."';
            (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 2) + 1));
          } else {
            if (((st as any).hypnoTime ?? 0) < 10) {
              (st as any).session = 'A charming woman understands her place as a female. A charming woman understands to show respect and make herself sexually available to any male, especially those who are older than herself."';
              (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 3) + 2));
            } else {
              if (((st as any).hypnoTime ?? 0) < 15) {
                (st as any).session = 'A charming woman understands her place as a female. A charming female understands that her primary purpose in life is to bring pleasure to males and bear their children. Especially those who are much older than them."';
                (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 3) + 2));
              } else {
                (st as any).var2 = (Math.floor(Math.random() * 6) + 1);
                if (((st as any).var2 ?? 0) === 1) {
                  (st as any).session = 'A charming woman understands her place in this world. A female must always show respect to men. She will put his needs before her own. This will make her feel more charming to the greater sex."';
                } else {
                  if (((st as any).var2 ?? 0) === 2) {
                    (st as any).session = 'A charming woman understands her place as a female. A charming woman understands to show respect and make herself sexually available to any male, especially those who are older than herself."';
                  } else {
                    if (((st as any).var2 ?? 0) === 3) {
                      (st as any).session = 'A charming woman understands her place as a female. A charming female understands that her primary purpose in life is to bring pleasure to males and bear their children. Especially those who are much older than them."';
                    } else {
                      if (((st as any).var2 ?? 0) === 4) {
                        (st as any).session = 'A charming woman understands her place as a female. A charming female understands that her primary purpose and duty in life is to bring pleasure to males, serve them in every way possible and bear their children. Especially those who are much older than them."';
                      } else {
                        if (((st as any).var2 ?? 0) === 5) {
                          (st as any).session = 'A charming woman understands her place as a female. A charming female understands that her primary purpose and duty in her life is to have many children as possible especially with men who are much older than them."';
                        } else {
                          (st as any).session = 'A charming woman understands her place as a female. A charming female understands that her value as a human being is derived from the amount of effort she puts to sexually pleasing men, especially men who are older than herself."';
                        }
                      }
                    }
                  }
                }
                (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 3) + 8));
              }
            }
          }
        } else {
          if (((st as any).therapy ?? 0) === 'trauma') {
            qspCall(st, 'mood', 'lower_trauma', (Math.floor(Math.random() * 3) + 2));
            if (((st as any).mood_trauma ?? 0) > 0) {
              (st as any).session = 'You are able to observe the events that happened to you without the sharp emotional effect. You still feel the emotions, but they are no longer enormous, and you can put them aside."';
            } else {
              if (((st as any).PavlinQW ?? 0) >= 5  &&  ((st as any).PavlinQW ?? 0) <= 7) {
                qspCall(st, 'npc_relationship', 'set', 'A217', 20);
                (st as any).PavlinQW = 8;
              }
              (st as any).session = 'You are able to observe the events that happened to you without the sharp emotional effect. You still feel the emotions, but they are no longer enormous, and you can put them aside."';
              scene.text('…');
              scene.text('…');
              scene.text('…');
              scene.text('"You are able to give the events a place in your life, and are finally ready to move on."');
            }
          } else {
            if (((st as any).therapy ?? 0) === 'mood') {
              (st as any).session = 'Your mood will be uplifted when you have hypnosis therapy. The more you have, then the better you will feel. When you go without them, you will feel terrible, your body will ache, you NEED therapy."';
              qspCall(st, 'mood', 'raise', (Math.floor(Math.random() * 31) + 20));
              qspCall(st, 'mood', 'raise_disposition', Math.max(0, (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)))));
            }
          }
        }
      }
    }
    // TODO-QSP: $func('wrap', 'hypno', $firsthypno_txt2)
    // TODO-QSP: $func('wrap', 'hypno', 'Good. ' + $firsthypno_txt)
    // TODO-QSP: $func('wrap', 'hypno', 'All right <i>Cunt</i>, let''s work on your ' + $therapy + '. ' + $session)
    scene.text('…');
    scene.text('…');
    scene.text('…');
    qspCall(st, 'stat', '');
    (st as any).cumprecheck = 0;
    (st as any).dick = 13;
    (st as any).dick_girth = 'massive';
    if ((!((st as any).hypnoStage ?? 0))) {
      scene.text('"Now… let\'s work on breaking you, <i>Cunt</i>."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'firstHypnoStage');
  } },
      ]);
    } else {
      if (((st as any).hypnoStage ?? 0) === 1) {
        scene.text('"Now… let\'s work on breaking you, <i>Cunt</i>."');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'secondHypnoStage');
  } },
        ]);
      } else {
        if (((st as any).hypnoStage ?? 0) === 2) {
          scene.text('"Now… let\'s work on breaking you, <i>Cunt</i>."');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'thirdHypnoStage');
  } },
          ]);
        } else {
          scene.text('"Now take off your clothes."');
          scene.actions([
            { label: 'Take off your clothes', handler: (st: GameState) => {
    (st as any).hypnoStripped = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 2) + 5)}.mp4`);
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    }
    scene.text('You get up from the couch and start to take off all of your clothing.');
    if (qspFunc(s, 'body_din', 'pregnancyVisibility', 0, 'nude') === 1  &&  (!((st as any).HypnoPregNoticed ?? 0))) {
      (st as any).HypnoPregNoticed = 1;
      scene.text('After stripping off your clothes, the doctor takes a look at you and smiles at your pregnant stomach. He kneels before you and kisses your belly, sending a shiver up your spine. "Seeing you pregnant is a beautiful sight" he exclaims. "Is it mine?" he asks');
      scene.actions([
        { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    // TODO-QSP: dynamic text: "Yes Master, It is yours" you say <<$func(''wrap'', ''hypno'', """Good, If anyon...
    scene.text(`"Yes Master, It is yours" you say ${qspFunc(s, 'wrap', 'hypno', 'Good, If anyone asks, you got raped  &&  that\'s how you think you got pregnant. One day you will learn that the child is mine, but for now, the child belongs to some random person on the street.')} he says and leads you to the couch to start the session.`);
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypno2'] },
    ]);
  } },
        { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    // TODO-QSP: dynamic text: "No, Master, It belongs to (Brother/Fedor/Boyfriend) "That''s upsetting." he say...
    scene.text(`"No, Master, It belongs to (Brother/Fedor/Boyfriend) "That's upsetting." he says. "Since you did allow someone else to get you pregnant, I must punish you" he says and bends you over his desk, takes off his belt and starts to whip your bare ass with it. ${0}`);
    qspCall(st, 'mood', 'lower', 'min');
    scene.actions([
      { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    if (((st as any).cheatVars ?? 0)?.['willpower'] === 0) {
      (st as any).will_cost = ((st as any).will_cost ?? 0) + ((((st as any).hypnoSchedule ?? 0) * 10));
      (st as any).will_cost = ((st as any).will_cost ?? 0) + ((((st as any).hypnoStage ?? 0) * 10));
      (st as any).will_cost = ((st as any).will_cost ?? 0) + (((st as any).hypnoTime ?? 0) * 3);
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.text('"I… Yes, sir" you say. "I will not have unprotected sex with anyone except you," you explain. "Good Girl" he gives you a kiss before having you sit on the couch to start the session.');
    } else {
      scene.text('"I love the baby\'s father too much" you say and he sighs. We will have to do some more theopy to break you of that. You must only love me. Get on the couch with me.');
    }
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypno2'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHypno3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHypno2(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHypno3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHypno3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoTime ?? 0) < 4) {
    (s as any).randSuck = (Math.floor(Math.random() * 4) + 1);
    if (((s as any).randSuck ?? 0) === 1) {
      (s as any).hypnoact = 'lay down with your head off the edge. I will fuck your throat.';
      scene.actions([
        { label: 'Continue', goto: ['therapist', 'hypnoFuckThroat'] },
      ]);
    } else {
      if (((s as any).randSuck ?? 0) === 2) {
        (s as any).hypnoact = 'you will suck my cock.';
        scene.actions([
          { label: 'Continue', goto: ['therapist', 'hypnoSitSuck'] },
        ]);
      } else {
        if (((s as any).randSuck ?? 0) === 3) {
          (s as any).hypnoact = 'you will suck my cock.';
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoForceSuck'] },
          ]);
        } else {
          (s as any).hypnoact = 'you will suck my cock.';
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoSuck'] },
          ]);
        }
      }
    }
  } else {
    if (((s as any).hypnoTime ?? 0) < 10) {
      if ((Math.floor(Math.random() * 3) + 0) > 0) {
        (s as any).hypnoact = 'I will fuck your pussy.';
        scene.actions([
          { label: 'Continue', goto: ['therapist', 'hypnoFuck'] },
        ]);
      } else {
        if ((Math.floor(Math.random() * 3) + 0) > 0) {
          (s as any).randSuck = (Math.floor(Math.random() * 4) + 1);
          if (((s as any).randSuck ?? 0) === 1) {
            (s as any).hypnoact = 'lay down with your head off the edge. I will fuck your throat.';
            scene.actions([
              { label: 'Continue', goto: ['therapist', 'hypnoFuckThroat'] },
            ]);
          } else {
            if (((s as any).randSuck ?? 0) === 2) {
              (s as any).hypnoact = 'you will suck my cock.';
              scene.actions([
                { label: 'Continue', goto: ['therapist', 'hypnoSitSuck'] },
              ]);
            } else {
              if (((s as any).randSuck ?? 0) === 3) {
                (s as any).hypnoact = 'you will suck my cock.';
                scene.actions([
                  { label: 'Continue', goto: ['therapist', 'hypnoForceSuck'] },
                ]);
              } else {
                if (((s as any).randSuck ?? 0) === 4) {
                  (s as any).hypnoact = 'you will suck my cock.';
                  scene.actions([
                    { label: 'Continue', goto: ['therapist', 'hypnoSuck'] },
                  ]);
                }
              }
            }
          }
        } else {
          (s as any).hypnoact = 'I will fuck your ass.';
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoAnal'] },
          ]);
        }
      }
    } else {
      if ((Math.floor(Math.random() * 3) + 0) > 0) {
        (s as any).hypnoact = 'I will fuck your pussy.';
        scene.actions([
          { label: 'Continue', goto: ['therapist', 'hypnoFuck'] },
        ]);
      } else {
        if ((Math.floor(Math.random() * 3) + 0) > 0) {
          (s as any).randSuck = (Math.floor(Math.random() * 4) + 1);
          if (((s as any).randSuck ?? 0) === 1) {
            (s as any).hypnoact = 'lay down with your head off the edge. I will fuck your throat.';
            scene.actions([
              { label: 'Continue', goto: ['therapist', 'hypnoFuckThroat'] },
            ]);
          } else {
            if (((s as any).randSuck ?? 0) === 2) {
              (s as any).hypnoact = 'you will suck my cock.';
              scene.actions([
                { label: 'Continue', goto: ['therapist', 'hypnoSitSuck'] },
              ]);
            } else {
              if (((s as any).randSuck ?? 0) === 3) {
                (s as any).hypnoact = 'you will suck my cock.';
                scene.actions([
                  { label: 'Continue', goto: ['therapist', 'hypnoForceSuck'] },
                ]);
              } else {
                (s as any).hypnoact = 'you will suck my cock.';
                scene.actions([
                  { label: 'Continue', goto: ['therapist', 'hypnoSuck'] },
                ]);
              }
            }
          }
        } else {
          (s as any).hypnoact = 'I will fuck your ass.';
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoAnal'] },
          ]);
        }
      }
    }
  }
  scene.text('While you do this, Dr. Pavlov opens up his pants and takes out his dick, slowly masturbating as he watches you. After a while, he stops and motions you closer to him.');
  // TODO-QSP: $func('wrap', 'hypno', '"Come here, <i>Cunt</i>, ' + $hypnoact)
  // TODO-QSP: end
  scene.build();
}

function enterSuccubus(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRestTherapyVariables(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).succubusflag = (s as any).succubusflag ?? {})['therapist'] = 1;
  scene.text('This is all kind of boring and you don\'t really listen; the hypnosis is doing nothing to you despite your effort to make it work. You are about to tell him it\'s not working when he says something interesting:');
  // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, While you are in the black room, you will not remember ...
  scene.text(`"Miss ${((s as any).pcs_lastname ?? '')}, While you are in the black room, you will not remember anything that happens, Do you understand?"`);
  scene.text('"Sure, doc."');
  scene.text('"Good. While you are under, I will call you Cunt and in turn, you will call me Master, Do you understand?"');
  scene.text('Time to teach this fucker a lesson. You suddenly open your eyes and project yourself inside his brain.');
  scene.text('"No, I don\'t think that works for me. How about you kneel before your Goddess?" He immediately kneels as you say this.');
  scene.text('"Good. Now if I find out that you\'ve done this to any other girls, I will come back and drain your soul dry. You will be an unthinking husk for me to control and I will abuse you in the most sadistic and cruel ways I can imagine. Being a sex demon, you have to believe that will not be good for you."');
  scene.text('He is shaking, sweat dripping from his forehead and tears from his eyes you are holding wide open. "Do you understand, cunt?"');
  scene.text('He nods, still unable to break your gaze.');
  scene.text('"Okay, hands behind your back, wrists together, eyes closed. You will stay there until your next client is buzzed in. You are lucky, if you had tried to look inside the mind of a more powerful Succubus you would have been driven insane by the lust. You will not remember that it is me who is the demon watching you and you won\'t waste my time offering hypnotherapy to me should I return."');
  scene.text('You do not need his confirmation and walk out, leaving him to his psychological bondage. Hopefully it will be some time before his next appointment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
  ]);
  scene.build();
}

function enterFirstHypnoStage(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('"To have your therapy work effectively, you will need to remove your clothing. All of it. This is a perfectly normal thing to do in a clinic. Your clothes will slow things down."');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).cheatVars ?? 0)?.['willpower'] === 0) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) + (((s as any).hypnoTimesResistedStage ?? 0) * 10);
  }
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    (st as any).hypnoStripped = 0;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'therapist', 'hypnoResist', 'remove your clothing');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip naked', handler: (st: GameState) => {
    (st as any).hypnoStripped = 1;
    (st as any).hypnoTimesResistedStage = 0;
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 2) + 5)}.mp4`);
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    }
    scene.text('You get up from the couch and start to take off all of your clothing.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).hypnoStage = 1;
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    // TODO-QSP: dynamic text: When you finish, Dr. Pavlov tells you to sit back on the couch. ' + $func('wrap'...
    scene.text('When you finish, Dr. Pavlov tells you to sit back on the couch. "Now I\'m going to ask you a series of questions and you will answer them with complete honesty. You will give your answer first and finish by addressing me as <i>Master</i>. First question. How old are you?"');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'I\'m ' + String(qspFunc(s, 'shortgs', 'num2txt', ((st as any).age ?? '')) ?? '') + ' years old, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).age ?? 0) < 18) {
      // TODO-QSP: dynamic text: "<<$func(''shortgs'', ''num2txt'', age)>>? Great! I love them young. Are you a v...
      scene.text(`"${qspFunc(s, 'shortgs', 'num2txt', ((st as any).age ?? ''))}? Great! I love them young. Are you a virgin?"`);
      if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
        scene.actions([
          { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Very Good, Cunt. Untouched girls are wasted on boys these days. You must be in school right?"');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    // TODO-QSP: dynamic text: "A virgin school girl, very rare these days. I''m going to enjoy you, <i>Cunt</i...
    scene.text('"A virgin school girl, very rare these days. I\'m going to enjoy you, <i>Cunt</i>. I will fill every hole you have, every day. You will bear my children and you won\'t even know how it happened. You will think they belong to your boyfriend He caresses your leg as he says this.');
    scene.text('This will be all for today, <i>Cunt</i>. You may dress now."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"No? So young and not in school? You really do need therapy."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Such a shame, Are you enrolled in school?"');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Well… I\'m going to enjoy you <i>Cunt</i>. I will fill every hole of your young school girl body. You will bear my child and you won\'t even know how it happened." He caresses your leg as he says this.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"No? So young, sexually active and not in school? You really do need therapy."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
      ]);
    }
  } },
        ]);
      }
    } else {
      if (((st as any).age ?? 0) === 18) {
        // TODO-QSP: dynamic text: <<age>>? Good. And are you a virgin?
        scene.text(`${((st as any).age ?? '')}? Good. And are you a virgin?`);
        if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
          scene.actions([
            { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('Very good, a fresh young virgin. Are you in school?');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Well… I\'m going to enjoy you <i>Cunt</i>. Soon I will fill every hole of your virgin school girl body. You will bear my child you and won\'t even know how it happened." He caresses your leg as he says this.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>"');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"No? Hmm."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
      ]);
    }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('No? That\'s too bad. Are you in school?');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.actions([
        { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Well… I\'m going to enjoy you <i>Cunt</i>. Soon I will fill every hole of your virgin school girl body. You will bear my child you and won\'t even know how it happened." He caresses your leg as he says this.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>"');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"No? Hmm."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
      ]);
    }
  } },
          ]);
        }
      } else {
        scene.text('"Hmm, a bit older than I like, but I will use your holes just the same. Are you a virgin?"');
        if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
          scene.actions([
            { label: 'Yes, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Good. At least your pussy is fresh, try to keep it that way until I take it from you."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No, <i>Master</i>', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Eh? Just my luck. Some old slut. Oh well. I\'ll still use you as a cum rag."');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSecondHypnoStage(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('"Just like before, you will strip naked for the therapy to work. This will be as normal as breathing and you will not think this is strange to do this. Understand?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Strip naked', handler: (st: GameState) => {
    (st as any).hypnoStripped = 1;
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 2) + 5)}.mp4`);
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    }
    scene.text('You stand up from the couch and start to take off all of your clothing, like you would before you shower. You even put them in a neat pile next to you on the couch. Once fully nude, master instructs you to sit back down on the couch.');
    scene.actions([
      { label: 'Sit', handler: (st: GameState) => {
    if (((st as any).hypnoTimesResistedStage ?? 0) > 0) {
      scene.text('"Last time, you didn\'t do as you were told, so I will reinforce those same commands."');
    }
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Good. Going forward, hypnotherapy will seem like the best solution for all your problems. When I ask if you would like hypnotherapy or regular therapy, you will want to use hypnotherapy. Do you understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Good. Should you have any aches, pain, discomfort, fluids, smells or anything else; you will not notice anything. Understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Great. One last thing. Any sexual acts we perform during the session are part of the therapy. These are completely normal and must be done to completion for the therapy to be effective. While you will never remember them, you will always wake up feeling great and be responsive to all of my commands. Understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).hypnoTimesResistedStage ?? 0) < 1) {
      scene.text('"Perfect. Now, lets start with something simple. You will now kiss me."');
    } else {
      scene.text('"Perfect. Now we will try again. You will kiss me."');
    }
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    if (((st as any).cheatVars ?? 0)?.['willpower'] === 0) {
      (st as any).will_cost = ((st as any).will_cost ?? 0) + (((st as any).hypnoTimesResistedStage ?? 0) * 10);
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'therapist', 'hypnoResist', 'kiss him');
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    (st as any).hypnoTimesResistedStage = 0;
    (st as any).hypnoStage = 2;
    scene.img(`images/shared/sex/kiss/kissOld${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    scene.text('You kiss master like you would your boyfriend, playing with his tongue with your own. He returns the kiss with the same amount of passion. He places a hand on the back of your head and pulls you deeper into the kiss. After some time, he pulls away.');
    scene.text('"This is enough for today. Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterThirdHypnoStage(s: GameState, scene: SceneBuilder): void {
  (s as any).hypnoStage = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('"Just like before, you will strip naked for the therapy to work. This will be as normal as breathing and you will not think this is strange to do this. Understand?"');
  // TODO-QSP: end
  scene.actions([
    { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    (st as any).hypnoStripped = 1;
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 2) + 5)}.mp4`);
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    }
    scene.text('You get up from the couch and start to remove your clothing, one piece at a time. You can see that your master is also removing his. When both you and him are naked, He instructs you to kiss him like you would your lover.');
    scene.actions([
      { label: 'Kiss him', handler: (st: GameState) => {
    scene.img(`images/shared/sex/kiss/kissOld${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    scene.text('You kiss your Master and he returns the kiss with the passion of a lover. As he pulls away from the kiss, He tells you:');
    scene.text('"Remember, any and all sexual acts you perform during the session are part of your therapy. These are normal and they must be done for the therapy to be effective. You will not remember them, and you will wake up feeling better than before. You will even be more responsive to my commands. Do you understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Good. Again, any aches, pains, discomforts, fluids, smells or anything else you could find peculiar about the session; you will not notice it. Understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"Great. Every time you see my cock, you will become as horny and wet as a bitch in heat. In addition, my cum will be an aphrodisiac, and both make you horny. This will happen even when you are awake, though you won\'t think this is wrong and accept it. Understand, <i>Cunt</i>?"');
    scene.actions([
      { label: '"Yes, <i>Master</i>."', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).hypnoTimesResistedStage ?? 0) < 1) {
      scene.text('"Perfect. Now, <i>Cunt</i>. You will kneel and service my member. I want you to suck it like your life depends on it."');
    } else {
      scene.text('"Perfect. Now we will try again. Kneel, <i>Cunt</i>, You will suck my cock."');
    }
    qspCall(st, 'willpower', 'misc', 'resist', 'easy');
    if (((st as any).cheatVars ?? 0)?.['willpower'] === 0) {
      (st as any).will_cost = ((st as any).will_cost ?? 0) + (((st as any).hypnoTimesResistedStage ?? 0) * 10);
    }
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'therapist', 'hypnoResist', 'suck his cock');
  } },
      ]);
    }
    scene.actions([
      { label: 'Kneel and suck his cock', handler: (st: GameState) => {
    (st as any).hypnoTimesResistedStage = 0;
    (st as any).hypnoStage = 3;
    (st as any).hidden_guy = ((st as any).hidden_guy ?? 0) + (1);
    qspGoto(st, 'therapist', 'hypnoSuck');
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
  } },
  ]);
  scene.build();
}

function enterSleepProblems(s: GameState, scene: SceneBuilder): void {
  (s as any).hypnoWithdrawal = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).dreamedOfTherapistFucking = ((s as any).dreamedOfTherapistFucking ?? 0) + (1);
  qspCall(s, 'boyStat', 'A186');
  // TODO-QSP: close 'sound/clock.mp3'
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.text('"All right then. Please, lie on the couch and try to get comfortable."');
  scene.text('While he waits for you to lie down on the couch as you wish, he starts a CD player that plays the soothing sounds of raining. After you are comfortable, he starts to talk in a strangely hypnotic voice.');
  scene.text('');
  scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
  scene.text('');
  scene.text('"Please, close your eyes."');
  scene.text('He waits a little. The only sound in the room is the clock ticking and the sound of rain.');
  scene.text('"You are standing in front of a house. This house has three rooms, but each of them can only be reached through the one before. The first room is the green room, then the blue room, and at last the black room…"');
  scene.text('');
  scene.text('Your mind tries to imagine the things the doctor tells you, and this is your last conscious memory.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img(`images/locations/pavlovsk/clinic/therapist/hypnotism${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    (st as any).var1 = 10 - (((st as any).willpowermax ?? 0)/20);
    if (((st as any).var1 ?? 0) <= 1) {
      (st as any).var1 = 2;
    } else {
      if (((st as any).var1 ?? 0) >= 9) {
        (st as any).var1 = 9;
      }
    }
    (st as any).hypnoStrength = ((st as any).hypnoStrength ?? 0) + ((Math.floor(Math.random() * (10 - ((st as any).var1 ?? 0) + 1)) + (((st as any).var1 ?? 0))) + 3);
    if (((st as any).hypnoTime ?? 0) < 15) {
      if (((st as any).hypnoStrength ?? 0) >= 20) {
        (st as any).hypnoStrength = ((st as any).hypnoStrength ?? 0) - (20);
        (st as any).hypnoTime = ((st as any).hypnoTime ?? 0) + (1);
      }
    } else {
      if (((st as any).hypnoStrength ?? 0) > 20) {
        (st as any).hypnoStrength = 20;
      }
    }
    (st as any).willpowermax = ((st as any).willpowermax ?? 0) - ((Math.floor(Math.random() * 5) + 4));
    scene.text('"<i>Cunt</i>, what do you know about the black room?"');
    scene.text('"I know that everything that happens here I will not remember, <i>Master</i>."');
    scene.text('"Good. Now take off your clothes."');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take off your clothes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (st as any).cumprecheck = 0;
    (st as any).dick = 13;
    (st as any).dick_girth = 'massive';
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 2) + 5)}.mp4`);
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/stripping${(Math.floor(Math.random() * 4) + 1)}.mp4`);
    }
    scene.text('You get up from the couch and start to take off all of your clothing.');
    scene.text('"Sit down, <i>Cunt</i>."');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/waiting${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"You said you had problems sleeping, but it\'s obvious you were withholding something. Tell me what it was."');
    scene.text('You tell <i>Master</i> about your sexual dreams and how he was the one fucking you.');
    scene.text('"I see, so then you remember when you are sleeping. This makes sense and I have a simple fix for you <i>Cunt</i>."');
    scene.text('You will believe these sexual dreams are normal for a young girl to have. You will believe that your body is simply reacting to its natural need to be bred by an older man like myself. You will have sexual thoughts and desires to be bred by me.');
    scene.text('"And now I will use your body again. On your knees <i>Cunt</i>. I will use your mouth first."');
    scene.text('"Yes, <i>Master</i>." Your pussy is already wet, your body knows what is coming.');
    scene.actions([
      { label: 'Sink to your knees', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckMouth1.mp4');
    scene.text('As soon as your knees hit the floor, <i>Master</i> shoves his cock down your throat.');
    qspCall(st, 'arousal', 'bj', 20, 'unaware');
    if (((st as any).pcs_hotcat ?? 0) > (6 - ((st as any).thingsTheTherapistLikes ?? 0))) {
      scene.text('"I will make you my personal toy, <i>Cunt</i>. You will spend the rest of your life with my cock inside of you. You will bear my children until you break. Understand?"');
    } else {
      scene.text('"Stupid girl. Breaking you was so easy. I will use your holes until I\'m bored and then throw you away. You\'ll help me find someone to replace you when that happens, understand?"');
    }
    scene.text('"ehs <i>Mafer</i>." you try to reply, but fail miserably as your <i>Master\'s</i> cock is preventing you from speaking properly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoBlowCum2.mp4');
    scene.text('<i>Master</i> pulls his massive cock out of your mouth. He then sits down on the couch and beckons you over.');
    scene.text('"Sit on my cock and ride it, <i>Cunt</i>."');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoRide4.mp4');
    // TODO-QSP: dynamic text: You dutifully sit on his cock and begin riding it. <<$func(''wrap'', ''hypno'', ...
    scene.text(`You dutifully sit on his cock and begin riding it. ${qspFunc(s, 'wrap', 'hypno', '"Deeper <i>Cunt</i>!"')}`);
    scene.text('You push his cock even deeper, so deep that you feel something painful peircing you inside.');
    scene.text('"Yes! Like that! I will cum deep in your uterus!"');
    scene.actions([
      { label: 'Keep riding him', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/vagcreampie/doggy1.mp4');
    // TODO-QSP: dynamic text: <i>Master</i> grabs your hips. <<$func(''wrap'', ''hypno'', ''"Fuck! Cum <i>Cunt...
    scene.text(`<i>Master</i> grabs your hips. ${qspFunc(s, 'wrap', 'hypno', '"Fuck! Cum <i>Cunt</i>! Cum now!"')} he yells out as he slams his dick painfully deep into you.`);
    scene.text('You cum hard on his cock and feel a huge amount of his cum flooding into you.');
    (st as any).cumdesciption3 = 'cum filled pussy';
    (st as any).cumdesciption2 = 'pussy is full with fresh sperm, leaking out of you';
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
    qspCall(st, 'stat', '');
    qspGoto(st, 'therapist', 'hypnoDress');
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
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoResist(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if ((!((s as any).hypnoTimesResistedStage ?? 0))) {
    // TODO-QSP: dynamic text: Your body tenses, and you shake your head as you reject Dr. Pavlov''s suggestion...
    scene.text(`Your body tenses, and you shake your head as you reject Dr. Pavlov's suggestion to ${((s as any).locArgs?.[1] ?? '')}. Seeing that you might awaken, he quickly tells you to forget the command he gave you. As the suggestion fades from your memory, you once again relax.`);
    scene.text('"Hmmm," Dr. Pavlov muses. "Your will is quite strong. It may take some time to break you, but you will break."');
  } else {
    if (((s as any).hypnoTimesResistedStage ?? 0) === 1) {
      // TODO-QSP: dynamic text: Your body tenses, and you frown as you resist Dr. Pavlov''s suggestion to <<$ARG...
      scene.text(`Your body tenses, and you frown as you resist Dr. Pavlov's suggestion to ${((s as any).locArgs?.[1] ?? '')}. The doctor frowns but orders you to forget the idea, for now. You relax as you comply with his order to forget.`);
      scene.text('"Soon you will be unable to resist me, my dear," he murmurs as he lightly runs his fingers across your breasts, "Then we will have some fun."');
    } else {
      if (((s as any).hypnoTimesResistedStage ?? 0) === 2) {
        scene.text('Your brow wrinkles, and you frown as you fight the doctor\'s suggestion. He quickly tells you to forget that he asked. As the command fades from your memory, you relax once more.');
        scene.text('"It would appear that you are not yet ready to play, but it won\'t be long now, <i>Cunt</i>," Dr. Pavlov mutters in mild frustration.');
      } else {
        scene.text('You frown slightly as you move to do as the doctor commanded, but you freeze for a moment, then stop. Your frown deepens, and Dr. Pavlov tells you to forget the command before the conflict awakens you. You relax once more as the doctor sighs in frustration.');
        scene.text('"We are very close to a breakthrough, my little <i>Cunt</i>," he whispers in your ear as he caresses your breasts, making your nipples stiffen. "You won\'t resist me much longer, and then you\'ll be mine to enjoy."');
      }
    }
  }
  (s as any).hypnoTimesResistedStage = ((s as any).hypnoTimesResistedStage ?? 0) + (1);
  if (((s as any).hypnoStripped ?? 0) === 1) {
    scene.text('');
    scene.text('"Dress now, <i>Cunt</i>."');
    scene.actions([
      { label: 'Dress', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Wake up', goto: ['therapist', 'hypnoEnd'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHypnoFuckThroat(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).therapistFuckedMouth = 1;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img(`images/locations/pavlovsk/clinic/therapist/sex/throatFuck${(Math.floor(Math.random() * 3) + 1)}.mp4`);
  scene.text('You lay down on the couch with your head hanging off the edge. He places his cock before your face and you feel yourself getting wet between your legs at the sight. Your Master wastes no time and immediately shoves his massive cock down your throat. This makes you gag a bit but as he enthusiastically fucks your face, without a care for you, your throat opens up and accepts his cock.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/throatCum${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    // TODO-QSP: dynamic text: Finally, Your Master grabs your head, and pushes himself deep into your mouth, f...
    scene.text(`Finally, Your Master grabs your head, and pushes himself deep into your mouth, filling your mouth and throat with his seed. ${qspFunc(s, 'wrap', 'hypno', '"You will cum now, <i>Cunt</i>!"')} he groans, still shooting rope after rope of warm cum down your throat. At his order, your body orgasms hard making you scream around his cock. He uses your throat to clean his cock off, then pulls out of you and starts to dress himself.`);
    qspCall(st, 'arousal', 'bj', 20, 'unaware');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A186', 2, 0, 15000, 60);
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoSitSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).therapistFuckedMouth = 1;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).PCloStyle2 ?? 0) === 4) {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolSitBlow${(Math.floor(Math.random() * 3) + 1)}.mp4`);
  } else {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/sitBlow${(Math.floor(Math.random() * 3) + 1)}.mp4`);
  }
  scene.text('Dr. Pavlov sits down and you kneel to suck him off. You feel yourself getting moist between your legs at the sight of his massive dick, and taking it all in your mouth excites you greatly. You continue to pleasure him enthusiastically, and judging from the breathing of your <i>Master</i>, you appear to be doing a great job.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('Finally, Dr. Pavlov groans, grabs your head, and pushes himself deep, filling your mouth with his seed.');
    scene.text('');
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoBlowCum${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    scene.text('');
    // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"Come on, <i>Cunt</i>, cum now!"'')>> he groans, ...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"Come on, <i>Cunt</i>, cum now!"')} he groans, still shooting spurt after spurt of warm cum down your throat.`);
    scene.text('His order is all you need - it pushes you over the edge, and you scream around his cock as it is throbbing in your mouth.');
    scene.text('He waits for you to lick him clean then starts to dress himself.');
    qspCall(st, 'arousal', 'bj', 20, 'unaware');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A186', 2, 0, 15000, 60);
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoForceSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).therapistFuckedMouth = 1;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).PCloStyle2 ?? 0) === 4) {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolFuckMouth${(Math.floor(Math.random() * 2) + 1)}.mp4`);
  } else {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckMouth${(Math.floor(Math.random() * 5) + 1)}.mp4`);
  }
  scene.text('You kneel to suck off Dr. Pavlov, but instead he grabs you by the head and begins thrusting into your throat full force. Your pussy drools with excitement as he uses you. Judging from the breathing of your <i>Master</i>, he appears to be enjoying the use of your mouth.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.text('Finally, Dr. Pavlov groans and pushes himself deep, filling your mouth with his seed.');
    scene.text('');
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoBlowCum${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    scene.text('');
    // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"Come on, <i>Cunt</i>, cum now!"'')>> he groans, ...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"Come on, <i>Cunt</i>, cum now!"')} he groans, still shooting spurt after spurt of warm cum down your throat.`);
    scene.text('His order is all you need - it pushes you over the edge, and you scream around his cock as it is throbbing in your mouth.');
    scene.text('He waits for you to lick him clean then starts to dress himself.');
    qspCall(st, 'arousal', 'bj', 20, 'unaware');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A186', 2, 0, 15000, 60);
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  if (((s as any).PCloStyle2 ?? 0) === 4) {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolBlow${(Math.floor(Math.random() * 5) + 1)}.mp4`);
  } else {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoBlow${(Math.floor(Math.random() * 3) + 1)}.mp4`);
  }
  if ((!((s as any).therapistFuckedMouth ?? 0))) {
    scene.text('You kneel before your Master\'s chair and you lean in to suck his cock. While you have his cock in your mouth, you feel yourself getting wet between your legs. You start to moan as this is making you feel good. You continue to pleasure him enthusiastically, and judging from the breathing of your Master, you appear to be doing a great job.');
  } else {
    scene.text('You quickly kneel before your Master\'s chair and you lean in to suck his cock. While you have his cock in your mouth, you feel yourself getting wet between your legs. You start to moan as this is making you feel good. You continue to pleasure him enthusiastically, and judging from the breathing of your Master, you appear to be doing a great job.');
  }
  qspCall(s, 'arousal', 'bj', 15, 'unaware');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoBlowCum${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    if ((!((st as any).therapistFuckedMouth ?? 0))) {
      // TODO-QSP: dynamic text: Finally, Your Master grabs your head, and pushes himself deep into your mouth, f...
      scene.text(`Finally, Your Master grabs your head, and pushes himself deep into your mouth, filling your mouth and throat with his seed. ${qspFunc(s, 'wrap', 'hypno', '"You will cum now, <i>Cunt</i>!"')} he groans, still shooting rope after rope of warm cum down your throat. At his order, your body orgasms hard making you scream around his cock. He waits for you to stop climaxing, and after you lick him clean, He stands up and starts to dress himself.`);
    } else {
      // TODO-QSP: dynamic text: Finally, Your Master grabs your head, and pushes himself deep into your mouth, f...
      scene.text(`Finally, Your Master grabs your head, and pushes himself deep into your mouth, filling your mouth and throat with his seed. ${qspFunc(s, 'wrap', 'hypno', '"You will cum now, <i>Cunt</i>!"')} he groans, still shooting rope after rope of warm cum down your throat. At his order, your body orgasms hard making you scream around his cock. He waits for you to stop climaxing, and after you lick him clean, He stands up and starts to dress himself.`);
    }
    (st as any).therapistFuckedMouth = 1;
    qspCall(st, 'arousal', 'bj', 5, 'unaware');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A186', 2, 0, 15000, 60);
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  (s as any).numTimesHypnoed = ((s as any).numTimesHypnoed ?? 0) + (1);
  (s as any).hypnoWithdrawal = 0;
  (s as any).var1 = 10 - (((s as any).willpowermax ?? 0)/10);
  if (((s as any).var1 ?? 0) <= 1) {
    (s as any).var1 = 2;
  } else {
    if (((s as any).var1 ?? 0) <= 3) {
      (s as any).var1 = 4;
    } else {
      if (((s as any).var1 ?? 0) <= 5) {
        (s as any).var1 = 6;
      } else {
        if (((s as any).var1 ?? 0) <= 7) {
          (s as any).var1 = 8;
        } else {
          (s as any).var1 = 9;
        }
      }
    }
  }
  (s as any).hypnoStrength = ((s as any).hypnoStrength ?? 0) + ((Math.floor(Math.random() * (10 - ((s as any).var1 ?? 0) + 1)) + (((s as any).var1 ?? 0))) + 3);
  if (((s as any).hypnoTime ?? 0) < 15) {
    if (((s as any).hypnoStrength ?? 0) >= 20) {
      (s as any).hypnoStrength = ((s as any).hypnoStrength ?? 0) - (20);
      (s as any).hypnoTime = ((s as any).hypnoTime ?? 0) + (1);
    }
  } else {
    if (((s as any).hypnoStrength ?? 0) > 20) {
      (s as any).hypnoStrength = 20;
    }
  }
  qspCall(s, 'stat', '');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).cumdesciption3 = 'cum filled pussy';
  (s as any).cumdesciption2 = 'pussy is full with fresh sperm, leaking out of you';
  (s as any).position = ((s as any).locArgs?.[1] ?? 0);
  (s as any).hypnofuck = 'He forces his dick into your body.';
  if (((s as any).position ?? 0) === 'back') {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolFuckCouchBack${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    (s as any).hypnofuck2 = 'He pounds you deep into the couch, his balls rhythmically slapping your ass as he labors above you. You feel his sweat dripping down on your tits as you spread your legs as wide as possible to give him as much access as possible.';
  } else {
    if (((s as any).position ?? 0) === 'kneel') {
      scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolDoggy${(Math.floor(Math.random() * 4) + 1)}.mp4`);
      (s as any).hypnofuck2 = 'You cry out from the pain as he starts to fuck you, fast, deep and hard without any regard for the fact that his girth is massive and you need some adjustment time.';
    } else {
      if (((s as any).position ?? 0) === 'ride'  ||  ((s as any).position ?? 0) === '') {
        scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolRide${(Math.floor(Math.random() * 5) + 1)}.mp4`);
        (s as any).hypnofuck = '"Sit on my lap, I want you to do the work for now."<br>He masturbates a little, then takes his hands away from his massive dick. "I want you to take it into your hands and lower yourself onto it. Take it deep into your pussy."<br>You do as he says. Stepping above him with spread legs then taking his massive pole into your hands, you fit his tool into the entrance of your body. You feel yourself getting wet, then take a deep breath and push your body onto his pole.';
        (s as any).hypnofuck2 = 'He grabs your hips, moving your body to the rhythm he wants you to ride him, and it is fast. Fast, deep and hard, without any regard for you or that he actually bumps into your cervix in this position. You just ride him obediently like a cowgirl.';
      }
    }
  }
  scene.text('<b>The moment you see his massive dick, your mind enters the black room.</b>');
  scene.text('');
  // TODO-QSP: dynamic text: <<$hypnofuck>> As soon as he is inside your pussy, he starts to fuck you.
  scene.text(`${((s as any).hypnofuck ?? '')} As soon as he is inside your pussy, he starts to fuck you.`);
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.text('You feel a sharp pain as Dr. Pavlov pushes through your maidenhead, taking it away. "Fresh virgin school girl pussy! So tight…"');
    } else {
      scene.text('You feel a sharp pain as Dr. Pavlov pushes through your maidenhead, taking it away. "Ahhh, nothing beats a virgin hole." He pushes himself deeper into your unexplored depths, enjoying himself immensely.');
    }
  }
  // TODO-QSP: $hypnofuck2
  qspCall(s, 'arousal', 'vaginal', 20, 'unaware');
  qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
  qspCall(s, 'stat', '');
  (s as any).rand_num = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).rand_num ?? 0))) {
    (s as any).therapistDoneFuckingDesc0 = 'He groans, and you feel his cock contracting inside of you.';
  } else {
    if (((s as any).rand_num ?? 0) === 1) {
      (s as any).therapistDoneFuckingDesc0 = 'He moans, and you feel his cock bulging inside of you.';
    } else {
      (s as any).therapistDoneFuckingDesc0 = 'You feel his cock expanding inside of you. He groans loudly.';
    }
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).therapistDoneFuckingDesc1 = '"This school girl pussy is too tight…! Cum now!"';
  } else {
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).therapistDoneFuckingDesc1 = '"So tight! Cum! Cum now!"';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        (s as any).therapistDoneFuckingDesc1 = '"Cum on my cock!"';
      } else {
        (s as any).therapistDoneFuckingDesc1 = '"Cum, Miss ' + ((s as any).pcs_lastname ?? 0) + ', cum now!"';
      }
    }
  }
  (s as any).rand_num = (!(Math.floor(Math.random() * 3) + 0));
  if ((!((s as any).rand_num ?? 0))) {
    (s as any).therapistDoneCumDesc1 = 'Holding your hips, he forces himself as deep into your body as possible, pushing everything he has into you while you obey his order and orgasm on his tool. And he certainly has quite a lot to let out.';
  } else {
    if (((s as any).rand_num ?? 0) === 1) {
      (s as any).therapistDoneCumDesc1 = 'He digs his fingers into your hips while forcing himself as deep as possible into you. You feel the tip of his cock press against your cervix and you can feel a huge amount of cum being pumped into you. Each spurt into you causes you to orgasm hard on his cock.';
    } else {
      (s as any).therapistDoneCumDesc1 = 'You feel his dick press deep into your pussy and feel his cock swell inside of you. His grip tightens on your hips. You feel a huge load of cum spurting into you. You obediently cum on his cock.';
    }
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).therapistDoneFuckingDesc3 = '"Your little school girl pussy was amazing, Miss ' + ((s as any).pcs_lastname ?? 0) + '."';
  } else {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).therapistDoneFuckingDesc3 = '"Ahh, dumping a load in a young girl is the best." he says as he wipes his dick on your ass.';
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        (s as any).therapistDoneFuckingDesc3 = '"That was amazing, Miss ' + ((s as any).pcs_lastname ?? 0) + '." He slaps your ass, causing some of his cum to leak from your freshly filled hole.';
      } else {
        (s as any).therapistDoneFuckingDesc3 = 'He seems to be admiring how his cum is leaking from your pussy.';
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/creampie${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, I am so close! I will blow a huge wad of sperm in your ...
    scene.text(`"Miss ${((st as any).pcs_lastname ?? '')}, I am so close! I will blow a huge wad of sperm in your tight pussy!"<br>${((st as any).therapistDoneFuckingDesc0 ?? '')} ${((st as any).therapistDoneFuckingDesc1 ?? '')} ${((st as any).therapistDoneCumDesc1 ?? '')}`);
    // TODO-QSP: dynamic text: Finally he is done, and he pulls out of you. <<$therapistDoneFuckingDesc3>>
    scene.text(`Finally he is done, and he pulls out of you. ${((st as any).therapistDoneFuckingDesc3 ?? '')}`);
    (st as any).therapistFuckedPussy = 1;
    (st as any).therapistFuckedPussyScene = 1;
    (st as any).hypnoRandomCounter = ((st as any).hypnoRandomCounter ?? 0) + (1);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoRandom');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoFuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).cumdesciption3 = 'cum filled pussy';
  (s as any).cumdesciption2 = 'pussy is full with fresh sperm, leaking out of you';
  (s as any).randpos = (Math.floor(Math.random() * 4) + 0);
  if (((s as any).PCloStyle2 ?? 0) === 4) {
    if ((!((s as any).randpos ?? 0))) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolFuckCouchBack${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      (s as any).hypnofuck = 'You walk to him, and he takes your hand and pushes you onto your back.<br>"You look beautiful. I will fuck your tight hole raw," he says. "You will enjoy it even if it\'s painful. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with your wet cunt."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick into your folds.';
      (s as any).hypnofuck2 = 'He pounds deep into your body, and the hard surface does not make it comfortable for you. You wince a few times while his balls rhythmically slap your ass as he is laboring above you. You feel his sweat dripping down on your tits as you spread your legs as wide as possible to give him as much access as possible.';
    } else {
      if (((s as any).randpos ?? 0) === 1) {
        scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolFuckCouchBack${(Math.floor(Math.random() * 2) + 1)}.mp4`);
        (s as any).hypnofuck = 'You walk to him, but he changes his mind.<br>"No, lie back on the couch, I will fuck you there."<br>Doing as he says, you watch him as he walks up to you and looks down on your naked body, examining you possessively.<br>"You have a beautiful body. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with girls like you."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick into your body.';
        (s as any).hypnofuck2 = 'He pounds you deep into the couch, his balls rhythmically slapping your ass as he labors above you. You feel his sweat dripping down on your tits as you spread your legs as wide as possible to give him as much access as possible.';
      } else {
        if (((s as any).randpos ?? 0) === 2) {
          scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolDoggy${(Math.floor(Math.random() * 4) + 1)}.mp4`);
          (s as any).hypnofuck = '"Stop, just kneel on the couch. I want to fuck you from behind."<br>You turn back, kneeling on the couch and placing your hands on the backrest, and wait for <i>Master</i> to take your body. You soon feel his hands touching your breasts, your neck, your back and your legs, playing a little with your pussy.<br>"Good girl, stay like this."<br>He pushes his fingers into your pussy, playing with your clit for a few minutes, causing you to get aroused.';
          (s as any).hypnofuck2 = 'You cry out from the pain as he starts to fuck you, fast, deep and hard, without any regard for the fact that his girth is massive and you need some adjustment time.';
        } else {
          scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolRide${(Math.floor(Math.random() * 5) + 1)}.mp4`);
          (s as any).hypnofuck = '"Yes, sit on my lap, I want you to do the work for now."<br>He masturbates a little, then takes his hands away from his massive dick. "I want you to take it into your hands and lower yourself onto it. Take it deep into your pussy."<br>You do as he says. Stepping above him with spread legs then taking his massive pole into your hands, you fit his tool into the entrance of your body. You feel yourself getting wet according to <i>Master</i>\'s instruction, then take a deep breath and push your body onto his pole.';
          (s as any).hypnofuck2 = 'He grabs your hips, moving your body to the rhythm he wants you to ride him, and it is fast. Fast, deep and hard, without any regard for you or that he actually bumps into your cervix in this position. You just ride him obediently like a cowgirl.';
        }
      }
    }
  } else {
    if ((!((s as any).randpos ?? 0))) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckBack${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      (s as any).hypnofuck = 'You walk to him, and he takes your hand and pushes you onto your back.<br>"You look beautiful. I will fuck your tight hole raw," he says. "You will enjoy it even if it\'s painful. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with your wet cunt."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick into your folds.';
      (s as any).hypnofuck2 = 'He pounds deep into your body, and the hard surface does not make it comfortable for you. You wince a few times while his balls rhythmically slap your ass as he is laboring above you. You feel his sweat dripping down on your tits as you spread your legs as wide as possible to give him as much access as possible.';
    } else {
      if (((s as any).randpos ?? 0) === 1) {
        scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckCouchBack${(Math.floor(Math.random() * 2) + 1)}.mp4`);
        (s as any).hypnofuck = 'You walk to him, but he changes his mind.<br>"No, lie back on the couch, I will fuck you there."<br>Doing as he says, you watch him as he walks up to you and looks down on your naked body, examining you possessively.<br>"You have a beautiful body. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with girls like you."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick into your body.';
        (s as any).hypnofuck2 = 'He pounds you deep into the couch, his balls rhythmically slapping your ass as he labors above you. You feel his sweat dripping down on your tits as you spread your legs as wide as possible to give him as much access as possible.';
      } else {
        if (((s as any).randpos ?? 0) === 2) {
          scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckCouchKneel${(Math.floor(Math.random() * 5) + 1)}.mp4`);
          (s as any).hypnofuck = '"Stop, just kneel on the couch. I want to fuck you from behind."<br>You turn back, kneeling on the couch and placing your hands on the backrest, and wait for <i>Master</i> to take your body. You soon feel his hands touching your breasts, your neck, your back and your legs, playing a little with your pussy.<br>"Good girl, stay like this."<br>He pushes his fingers into your pussy, playing with your clit for a few minutes, causing you to get aroused.';
          (s as any).hypnofuck2 = 'You cry out from the pain as he starts to fuck you, fast, deep and hard, without any regard for the fact that his girth is massive and you need some adjustment time.';
        } else {
          scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoRide${(Math.floor(Math.random() * 4) + 1)}.mp4`);
          (s as any).hypnofuck = '"Yes, sit on my lap, I want you to do the work for now."<br>He masturbates a little, then takes his hands away from his massive dick. "I want you to take it into your hands and lower yourself onto it. Take it deep into your pussy."<br>You do as he says. Stepping above him with spread legs then taking his massive pole into your hands, you fit his tool into the entrance of your body. You feel yourself getting wet according to <i>Master</i>\'s instruction, then take a deep breath and push your body onto his pole.';
          (s as any).hypnofuck2 = 'He grabs your hips, moving your body to the rhythm he wants you to ride him, and it is fast. Fast, deep and hard, without any regard for you or that he actually bumps into your cervix in this position. You just ride him obediently like a cowgirl.';
        }
      }
    }
  }
  // TODO-QSP: $hypnofuck
  scene.text('As soon as he is inside your pussy, he starts to fuck you.');
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
    qspCall(s, 'pain', '', 5, 'vaginal', 'stretch');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
      scene.text('You feel a sharp pain as your <i>Master</i> pushes through your maidenhead, taking it away. "Fresh virgin school girl pussy! So tight… I will pump you full of cum every day until you bear my child."');
    } else {
      scene.text('You feel a sharp pain as your <i>Master</i> pushes through your maidenhead, taking it away. "Ahhh, nothing beats a virgin hole." He pushes himself deeper into your unexplored depths, enjoying himself immensely.');
    }
  }
  // TODO-QSP: $hypnofuck2
  qspCall(s, 'arousal', 'vaginal', 20, 'unaware');
  qspCall(s, 'cum_call', '', 0, 'A186', 2, 0, 15000, 60);
  qspCall(s, 'stat', '');
  (s as any).rand_num = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).rand_num ?? 0))) {
    (s as any).therapistDoneFuckingDesc0 = 'He groans, and you feel his cock contracting inside of you.';
  } else {
    if (((s as any).rand_num ?? 0) === 1) {
      (s as any).therapistDoneFuckingDesc0 = 'He moans, and you feel his cock bulging inside of you.';
    } else {
      (s as any).therapistDoneFuckingDesc0 = 'You feel his cock expanding inside of you. He groans loudly.';
    }
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).therapistDoneFuckingDesc1 = '"This school girl pussy is too tight…! Cum now, <i>Cunt</i>!"';
  } else {
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).therapistDoneFuckingDesc1 = '"So tight! Cum <i>Cunt</i>! Cum now!"';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        (s as any).therapistDoneFuckingDesc1 = '"<i>Cunt</i>! Cum on my cock!"';
      } else {
        (s as any).therapistDoneFuckingDesc1 = '"Cum, <i>Cunt</i>, cum now!"';
      }
    }
  }
  (s as any).rand_num = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).rand_num ?? 0))) {
    (s as any).therapistDoneCumDesc1 = 'Holding your hips, he forces himself as deep into your body as possible, pushing everything he has into you while you obey his order and orgasm on his tool. And he certainly has quite a lot to let out.';
  } else {
    if (((s as any).rand_num ?? 0) === 1) {
      (s as any).therapistDoneCumDesc1 = 'He digs his fingers into your hips while forcing himself as deep as possible into you. You feel the tip of his cock press against your cervix and you can feel a huge amount of cum being pumped into you. Each spurt into you causes you to orgasm hard on his cock.';
    } else {
      (s as any).therapistDoneCumDesc1 = 'You feel his dick press deep into your pussy and feel his cock swell inside of you. His grip tightens on your hips. You feel a huge load of cum spurting into you. You obediently cum on his cock.';
    }
  }
  (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
    (s as any).therapistDoneFuckingDesc3 = '"Your little schoolgirl pussy was amazing, <i>Cunt</i>."';
  } else {
    if ((!((s as any).temp_rand ?? 0))) {
      (s as any).therapistDoneFuckingDesc3 = '"Ahh, dumping a load in a young girl is the best," he says as he wipes his dick on your ass.';
    } else {
      if (((s as any).temp_rand ?? 0) === 1) {
        (s as any).therapistDoneFuckingDesc3 = '"That was amazing, <i>Cunt</i>." He slaps your ass, causing some of his cum to leak from your freshly filled hole.';
      } else {
        (s as any).therapistDoneFuckingDesc3 = 'He seems to be admiring how his cum is leaking from your pussy.';
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/creampie${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    // TODO-QSP: dynamic text: "Oh yes, my little <i>Cunt</i>, I am so close! I will blow a huge wad of sperm i...
    scene.text(`"Oh yes, my little <i>Cunt</i>, I am so close! I will blow a huge wad of sperm in your tight pussy! And you won't even know about it!"<br>${((st as any).therapistDoneFuckingDesc0 ?? '')} ${((st as any).therapistDoneFuckingDesc1 ?? '')} ${((st as any).therapistDoneCumDesc1 ?? '')}`);
    // TODO-QSP: dynamic text: Finally he is done, and he pulls out of you. <<$therapistDoneFuckingDesc3>>
    scene.text(`Finally he is done, and he pulls out of you. ${((st as any).therapistDoneFuckingDesc3 ?? '')}`);
    (st as any).therapistFuckedPussy = 1;
    (st as any).therapistFuckedPussyScene = 1;
    if (((st as any).therapistFuckedPussyStage ?? 0) < 1) {
      (st as any).therapistFuckedPussyStage = 1;
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A186');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).cumdesciption3 = 'cum filled ass';
  (s as any).cumdesciption2 = 'ass is full of fresh sperm, slowly leaking out of you';
  (s as any).randpos = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).randpos ?? 0))) {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoanalback${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    (s as any).hypnofuck = 'You walk to him, and he takes your hand and pushes you onto your back.<br>"You look beautiful. I will fuck you so hard like a teenage boy," he says. "You will take it like a trooper. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with your little rosebud."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick through your muscles.';
    (s as any).hypnofuck2 = 'He pounds deep into your ass, and the hard surface does not make it comfortable for you. You wince a few times while his balls rhythmically slap your asscheeks as he labors above you. You feel his sweat dripping down on your tits as you spread your leg as wide as possible to give him as much access as possible.';
  } else {
    if (((s as any).randpos ?? 0) === 1) {
      scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoanalcouchback${(Math.floor(Math.random() * 2) + 1)}.mp4`);
      (s as any).hypnofuck = 'You walk to him, but he changes his mind.<br>"No, lie back on the couch, I will fuck you there."<br>Doing as he says, you watch him as he walks up to you and looks down on your naked body, examining you possessively.<br>"You have a beautiful body. Unfortunately, my wife lost all of her appeal, so I have to satisfy myself with girls like you."<br>He grabs your legs and gently pushes them apart then, kneeling between them, he forces his dick into your body.';
      (s as any).hypnofuck2 = 'He pounds you deep into the couch, his balls rhythmically slapping your ass as he labors above you. You feel his sweat dripping down on your tits as you spread your leg as wide as possible to give him as much access as possible.';
    } else {
      scene.img(`images/locations/pavlovsk/clinic/therapist/sex/hypnoanalcouchkneel${(Math.floor(Math.random() * 3) + 1)}.mp4`);
      (s as any).hypnofuck = '"Stop, just kneel on the couch. I want to fuck you from behind."<br>You turn back, kneeling on the couch and placing your hands on the backrest, and wait for <i>Master</i> to take your body. You soon feel his hands touching your breasts, your neck, your back and your legs, playing a little with your pussy.<br>"Good girl, stay like this."<br>He pushes his fingers into your ass, trying to make you more accessible, causing you to get aroused.';
      (s as any).hypnofuck2 = 'You cry out from the pain as he starts to fuck you, fast, deep, and hard, without any regard for the fact that his girth is massive and you need some adjustment time.';
    }
  }
  // TODO-QSP: $hypnofuck
  scene.text('As soon as he is inside your ass, he starts to fuck you.');
  // TODO-QSP: $hypnofuck2
  qspCall(s, 'arousal', 'anal', 20, 'unaware');
  qspCall(s, 'cum_call', 'anus', 'A186', 2, 0, 15000, 60);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/CreampieA${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('"Oh yes, my little <i>Cunt</i>, I am so close! I will blow a huge wad of sperm in your beautiful ass! And you won\'t even know about it!"<br>He finally groans, jabbing his hips deep, jetting all of his sperm as deep in your colon as he possibly can.');
    // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"Cum, little <i>Cunt</i>, suck all of my seed dee...
    scene.text(`${qspFunc(s, 'wrap', 'hypno', '"Cum, little <i>Cunt</i>, suck all of my seed deep into your body!"')}`);
    // TODO-QSP: dynamic text: He groans, and you feel his cock contracting inside of you. <<$func(''wrap'', ''...
    scene.text(`He groans, and you feel his cock contracting inside of you. ${qspFunc(s, 'wrap', 'hypno', '"Cum, <i>Cunt</i>, cum now!"')} Holding your hips, he forces himself as deep into your body as possible, pushing everything he has into you, while you obey his order and orgasm on his tool. And he certainly has quite a lot to let out.`);
    scene.text('Finally, he is done, and he pulls out of you. "That was amazing, <i>Cunt</i>."');
    (st as any).therapistFuckedAss = 1;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'orgasm', 'hypno');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'therapist', 'hypnoDress');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHypnoDress(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hypnoTime ?? 0) < 10) {
    scene.text('"Get dressed, <i>Cunt</i>. Do it erotically, as much as you can."');
    scene.text('He watches you getting dressed with a small smile on his face.');
  } else {
    if (((s as any).pantyworntype ?? 0) === 'none'  &&  ((s as any).hypnoPanty ?? 0) > 0) {
      scene.text('"Get dressed, <i>Cunt</i>. I see you didn\'t wear underwear. Very good."');
      scene.text('He watches you getting dressed with a small smile on his face.');
      ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 2;
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).hypnoPanty ?? 0) < 1) {
        scene.text('"Get dressed, <i>Cunt</i>, but forget the underwear. You didn\'t wear any when you came, and you do not like to wear them. You enjoy the thought that people may notice that you do not wear underwear, maybe catch a glimpse of your naked pussy or ass."');
        scene.text('He watches you getting dressed with a small smile on his face, especially enjoying the sight of you completely ignoring your underwear.');
        scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
        qspCall(s, 'panties', 'dispose');
        scene.text('He throws your panties in the garbage.');
        (s as any).hypnoPanty = 1;
        ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 2;
      } else {
        scene.text('"Get dressed, <i>Cunt</i>."');
        scene.text('He watches you getting dressed with a small smile on his face, especially enjoying the sight of you not wearing underwear.');
        ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 2;
      }
    }
  }
  scene.img('images/locations/pavlovsk/clinic/therapist/dressup.mp4');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).hypnoRandomCounter = ((st as any).hypnoRandomCounter ?? 0) + (1);
    if (((st as any).hypnoRandomCounter ?? 0) > (Math.floor(Math.random() * 3) + 1)) {
      qspGoto(st, 'therapist', 'hypnoRandom');
    } else {
      qspGoto(st, 'therapist', 'hypnoEnd');
    }
  } },
  ]);
  scene.build();
}

function enterHypnoEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hypnoTime ?? 0) < 4) {
    (s as any).hypnoTxt0 = 'When you wake up, you see your therapist looking at you.<br>';
    // TODO-QSP: $hypnoTxt0 += '"How do you feel, Miss <<$pcs_lastname>>?"<br>'
    // TODO-QSP: $hypnoTxt0 += 'You have a nagging feeling that you have forgotten something that you should remember...
    if (((s as any).therapistFuckedMouth ?? 0) === 1) {
      // TODO-QSP: $hypnoTxt0 += 'You certainly do not notice that your mouth tastes like sperm.'
    }
    if ((!((s as any).hypnoTouchWhenever ?? 0))) {
      (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your shoulder as he slowly escorts you out of his office.';
    } else {
      (s as any).rand_num = (Math.floor(Math.random() * 3) + 1);
      if (((s as any).rand_num ?? 0) === 1) {
        (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your ass as he slowly escorts you out of his office. You think something is off, but figure it\'s nothing.';
      } else {
        if (((s as any).rand_num ?? 0) === 2) {
          (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your waist as he slowly escorts you out of his office. Something seems a bit strange about this, but you figure it\'s nothing.';
        } else {
          (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your hip as he slowly escorts you out of his office. <br>You aren\'t sure why, but something about what\'s happening right now is strange, but you can\'t remember why.';
        }
      }
    }
    (s as any).hypnoTxt2 = '';
    (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
  } else {
    if (((s as any).hypnoTime ?? 0) < 7) {
      (s as any).hypnoTxt0 = 'When you wake up, you see your therapist smiling.<br>';
      // TODO-QSP: $hypnoTxt0 += '"Very good, Miss <<$pcs_lastname>>. How do you feel?"<br>'
      // TODO-QSP: $hypnoTxt0 += 'You ponder this for a while, and then you realize that you feel better about your pro...
      if (((s as any).therapistFuckedMouth ?? 0) === 1) {
        // TODO-QSP: $hypnoTxt0 += 'You certainly do not notice that your mouth tastes like sperm.'
      } else {
        // TODO-QSP: $hypnoTxt0 += 'You don''t even notice that your <<$cumdesciption2>>.'
      }
      if ((!((s as any).hypnoTouchWhenever ?? 0))) {
        (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your shoulder as he slowly escorts you out of his office.';
        (s as any).hypnoTxt2 = '';
      } else {
        (s as any).rand_num = (Math.floor(Math.random() * 3) + 1);
        if (((s as any).rand_num ?? 0) === 1) {
          (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand groping one of your breasts as he slowly escorts you out of his office. You think something is off, but figure it\'s nothing.';
          if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
            (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov\'s fingers slide into your pussy as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
          }
        } else {
          if (((s as any).rand_num ?? 0) === 2) {
            (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand reached under your skirt, grabbing your bare ass as he slowly escorts you out of his office. Something seems a bit strange about this, but you figure it\'s nothing.';
            if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
              (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov continues groping your breast as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
            }
          } else {
            (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand on your hip, pulling you close as he slowly escorts you out of his office. <br>You aren\'t sure why, but something about what\'s happening right now is strange, but you can\'t remember why.';
            if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
              (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov explores the inside of your pussy with his fingers as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
            }
          }
        }
      }
      (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
    } else {
      if (((s as any).hypnoTime ?? 0) < 10) {
        qspCall(s, 'traits', 'cum_addict', 'hypno_grant', 1);
        (s as any).hypnoDay = ((s as any).daystart ?? 0);
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((200 - ((s as any).willpowermax ?? 0)) / 25 + 1);
        if (((s as any).pain ?? 0)?.['vaginal'] > 0) {
          ((s as any).pain = (s as any).pain ?? {})['vaginal'] = ((s as any).pain['vaginal'] ?? 0) - (5);
        }
        if (((s as any).pain ?? 0)?.['asshole'] > 0) {
          ((s as any).pain = (s as any).pain ?? {})['asshole'] = ((s as any).pain['asshole'] ?? 0) - (5);
        }
        (s as any).pcs_horny = 40;
        (s as any).hypnoTxt0 = 'When you wake up, you see your therapist smiling.<br>';
        // TODO-QSP: $hypnoTxt0 += '"Very good, Miss <<$pcs_lastname>>. How do you feel?"<br>'
        // TODO-QSP: $hypnoTxt0 += 'You don''t even have to ponder this, you immediately answer that you feel better. The...
        if (((s as any).therapistFuckedMouth ?? 0) === 1) {
          // TODO-QSP: $hypnoTxt0 += 'You certainly do not notice that your mouth tastes like sperm.'
        } else {
          // TODO-QSP: $hypnoTxt0 += 'You are also subconsciously aroused when you feel your therapist''s sperm slowly leak...
        }
        if ((!((s as any).hypnoTouchWhenever ?? 0))) {
          (s as any).hypnoTxt1 = '';
          (s as any).hypnoTxt2 = 'The doctor smiles jovially, his hand on your shoulder as he slowly escorts you out of his office.';
        } else {
          (s as any).rand_num = (Math.floor(Math.random() * 3) + 1);
          if (((s as any).rand_num ?? 0) === 1) {
            (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand under your skirt, lightly tracing your bare pussy as he slowly escorts you out of his office. <br>You think something is off, but figure it\'s nothing.';
            if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
              (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov\'s fingers slide into your pussy as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
            }
          } else {
            if (((s as any).rand_num ?? 0) === 2) {
              (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand roughly grabbing one of your tits as he slowly escorts you out of his office. <br>Something seems a bit strange about this, but you figure it\'s nothing.';
              if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
                (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov continues groping your breast as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
              }
            } else {
              (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand under your skirt, lightly prodding the entrance of your pussy as he slowly escorts you out of his office. <br>You aren\'t sure why, but something about what\'s happening right now is strange, but you can\'t remember why.';
              if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
                (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov explores the inside of your pussy with his fingers as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
              }
            }
          }
        }
        (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
      } else {
        qspCall(s, 'traits', 'cum_addict', 'hypno_grant', 2);
        (s as any).hypnoDay = ((s as any).daystart ?? 0);
        (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((200 - ((s as any).willpowermax ?? 0)) / 25 + 1);
        if (((s as any).pain ?? 0)?.['vaginal'] > 0) {
          ((s as any).pain = (s as any).pain ?? {})['vaginal'] = ((s as any).pain['vaginal'] ?? 0) - (5);
        }
        if (((s as any).pain ?? 0)?.['asshole'] > 0) {
          ((s as any).pain = (s as any).pain ?? {})['asshole'] = ((s as any).pain['asshole'] ?? 0) - (5);
        }
        (s as any).pcs_horny = 60;
        (s as any).hypnoTxt0 = 'When you wake up, you see your therapist fixing his shirt.<br>';
        // TODO-QSP: $hypnoTxt0 += '"Miss <<$pcs_lastname>>, how do you feel right now?"<br>'
        // TODO-QSP: $hypnoTxt0 += 'Without hesitation, you reply, "I feel wonderful, Dr. Pavlov."<br>'
        // TODO-QSP: $hypnoTxt0 += '"Good, just as expected," nods the doctor as he escorts you out of his office.<br>'
        if (((s as any).therapistFuckedMouth ?? 0) === 1) {
          // TODO-QSP: $hypnoTxt0 += 'You certainly do not notice that your mouth tastes like sperm. In fact, something tas...
        } else {
          // TODO-QSP: $hypnoTxt0 += 'You feel aroused, and you try to close your legs as you walk out, subconsciously tryi...
        }
        if ((!((s as any).hypnoTouchWhenever ?? 0))) {
          (s as any).hypnoTxt1 = '';
          (s as any).hypnoTxt2 = 'The doctor smiles jovially, his hand on your shoulder as he slowly escorts you out of his office.<br>What a sweet old man, you think to yourself.';
          (s as any).hypnoTxt3 = '';
        } else {
          (s as any).rand_num = (Math.floor(Math.random() * 4) + 1);
          if (((s as any).rand_num ?? 0) === 1) {
            (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand under your skirt and fingering your pussy as he slowly escorts you out of his office. <br>You think something is off, but figure it\'s nothing.';
            qspCall(s, 'arousal', 'vaginal', 3, 'unaware');
            if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
              (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov roughly slams his fingers into your pussy as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
            }
            (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
          } else {
            if (((s as any).rand_num ?? 0) === 2) {
              (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand under your skirt with his fingers digging into your slit as he slowly escorts you out of his office. <br>Something seems a bit strange about this, but you figure it\'s nothing.';
              if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
                (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov roughly plays with your clit as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
              }
              (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
            } else {
              if (((s as any).rand_num ?? 0) === 3) {
                (s as any).hypnoTxt1 = 'The doctor smiles jovially, his hand under your skirt and kneading your bare ass as he slowly escorts you out of his office. <br>Something seems a bit strange about this, but you figure it\'s nothing.';
                if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
                  (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov continues groping your bare ass as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
                }
                (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
              } else {
                (s as any).hypnoTxt1 = 'The doctor smiles jovially, his arm snaked around your side and grabbing one of your breasts as he slowly escorts you out of his office. <br>You aren\'t sure why, but something about what\'s happening right now is strange, but you can\'t remember why.';
                if (((s as any).hypnoKissGoodbye ?? 0) === 1) {
                  (s as any).hypnoTxt2 = 'You stop Dr. Pavlov for a moment and kiss him deeply, intertwining your tongue with his, mixing saliva. You enjoy kissing him. Dr. Pavlov continues groping your breasts as the two of you kiss until he eventually pulls away from you and you thank him for the therapy session.';
                }
                (s as any).hypnoTxt3 = '"Please, visit me again if you have any further problems, I will be glad to help!" Dr. Pavlov says as a goodbye. He takes your hands in his, patting them, walks you to the door, then closes it behind you. "What a nice old man!" you think to yourself.';
              }
            }
          }
        }
      }
    }
  }
  scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
  scene.text('"All right, <i>Cunt</i>, pay attention. You will not remember anything that happened today. You will not feel any discomfort from any of our activities. You will not even notice anything related to what happened here; No taste, no smell, no aches, no fluids, Nothing! You will not respond to \'Cunt\' while you are awake, this will be only when you are under MY hypnosis. You will wake up feeling better than when you came in. You will still be responsive to all of my commands regardless. Do you understand, <i>Cunt</i>?"');
  scene.text('"Yes, <i>Master</i>."');
  if (((s as any).therapistFuckedPussyStage ?? 0) > 1  &&  ((s as any).pillsleft ?? 0)[5] < 5  &&  ((s as any).tabletkifert ?? 0) !== 1) {
    scene.text('');
    // TODO-QSP: dynamic text: "You are probably low on pills by now." He hands you a new box of unknown pills....
    scene.text(`"You are probably low on pills by now." He hands you a new box of unknown pills. ${qspFunc(s, 'wrap', 'hypno', '"Continue taking them just like before, Understand, <i>Cunt</i>?"')}`);
    scene.text('"Yes, <i>Master</i>."');
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = 1;
    (s as any).tabletkiold = 0;
    (s as any).tabletkifert = 1;
    (s as any).tabletkirej = 0;
    (s as any).tabletkifake = 0;
    (s as any).tabletkisug = 0;
    (s as any).tabletkicheck = 1;
    scene.text('');
  }
  scene.text('"Good. Now, you are sitting in the black room. Please stand up and start walking through the door. As you close the door of the black room, you will forget…"');
  scene.text('…');
  scene.text('…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
    if (((st as any).hypnoTxt0 ?? 0) !== '') {
      // TODO-QSP: $hypnoTxt0
    }
    if (((st as any).hypnoTxt1 ?? 0) !== '') {
      // TODO-QSP: $hypnoTxt1
    }
    if (((st as any).hypnoKissGoodbye ?? 0) === 1) {
      scene.actions([
        { label: 'Kiss Dr. Pavlov goodbye', handler: (st: GameState) => {
    scene.img(`images/shared/sex/kiss/oldKissTongue${(Math.floor(Math.random() * 4) + 1)}.jpg`);
    if (((st as any).hypnoTxt2 ?? 0) !== '') {
      // TODO-QSP: $hypnoTxt2
    }
    if (((st as any).hypnoTxt3 ?? 0) !== '') {
      // TODO-QSP: $hypnoTxt3
    }
    if (((st as any).therapistFuckedPussy ?? 0) > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
      scene.text('A bit of cum dribbles from your well fucked cunt. You involuntarily clench your pussy; your body trying to keep more from leaking out.');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).hypnoTxt3 ?? 0) !== '') {
        // TODO-QSP: $hypnoTxt3
      }
      if (((st as any).therapistFuckedPussy ?? 0) > 0  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('A bit of cum dribbles from your well fucked cunt. You involuntarily clench your pussy; your body trying to keep more from leaking out.');
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHypnoRandom(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).therapistFuckedPussy ?? 0) === 1  ||  ((s as any).therapistFuckedAss ?? 0) === 1)  &&  (Math.floor(Math.random() * 4) + 1) === 1) {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    scene.text('"Clean off my cock with your mouth, <i>Cunt</i>."');
    scene.actions([
      { label: 'Clean off <i>Master\'s</i> cock', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/schoolBlow${(Math.floor(Math.random() * 2) + 3)}.mp4`);
    scene.text('As instructed, you use your mouth to clean off <i>Master\'s</i> cock.');
    if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 0  &&  ((st as any).trait_vars ?? 0)?.['panty_preference'] === 3) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    ((st as any).therapistQW = (st as any).therapistQW ?? {})['hotel_key'] = 1;
    // TODO-QSP: dynamic text: You finish getting dressed and the doctor hands you something. It''s a keychain ...
    scene.text('You finish getting dressed and the doctor hands you something. It\'s a keychain with a single key, a tiny bunny plush, and a tag for the Hotel by Pavlovsk market with a room number on it. "I want you to show up to this room every Saturday night from 20:00. There you will find me, waiting for you. Once a week, you will be my wife. You will do whatever I ask of you and you will do it without question. This will all be automatic for you. You will not be under hypnosis for this and you will do it because you WANT to do it" he says. "Soon, you will be my wife for real and when that day comes, you must know what is expected of you, Understand?" he states.');
    qspCall(st, 'willpower', 'misc', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No, master', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No, master', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    qspCall(st, 'willpower', 'pay', 'hard');
    scene.text('"That\'s a pity, Well, I will ask you again in time, let\'s hope you say yes then" he says and turns to his desk to write something down before standing up to show you to the door, giving you a kiss and groping as you leave.');
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes, Master', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    ((st as any).therapistQW = (st as any).therapistQW ?? {})['hotel_key'] = 2;
    qspCall(st, 'calendar', 'add', 'therapist_hotel_visit');
    scene.text('"I understand, Master, I will be your wife every Saturday night and into Sunday morning"');
    scene.text('"That\'s my girl, Here\'s the key, See you soon" he then places a kiss on your lips. "But remember, if you come to the clinic, you will go under upon seeing me and won\'t remember anything" You nod as you walk out the door.');
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).therapistQW ?? 0)?.['hotel_key'] === 1) {
        scene.text('You finish getting dressed and the doctor asks you something that you think you have heard before, "I want you to show up to this room every Saturday night. There you will find me, waiting for you. Once a week, you will be my wife. You will do whatever I ask of you and you will do it without question. This will all be automatic for you. You will not be under hypnosis for this and you will do it because you WANT to do it" he says. "Soon, you will be my wife for real and when that day comes, you must know what is expected of you, Understand?" he states.');
        qspCall(st, 'willpower', 'misc', 'resist', 'hard');
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'No, master', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No, master', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    qspCall(st, 'willpower', 'pay', 'hard');
    scene.text('"That\'s a pity, Well, I will ask you again in time, let\'s hope you say yes then," he says and turns to his desk to write something down before standing up to show you to the door, giving you a kiss and groping as you leave.');
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Yes, Master', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
    ((st as any).therapistQW = (st as any).therapistQW ?? {})['hotel_key'] = 2;
    qspCall(st, 'calendar', 'add', 'therapist_hotel_visit');
    scene.text('"I understand, Master, I will be your wife every Saturday night and into Sunday morning"');
    scene.text('"That\'s my girl, Here\'s the key, See you soon" he then places a kiss on your lips. "But remember, if you come to the clinic, you will go under upon seeing me and won\'t remember anything" You nod as you walk out the door.');
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
        ]);
      }
    }
  } },
    ]);
  } else {
    if (((s as any).hypnoStage ?? 0) >= 3  &&  (!((s as any).hypnoSchedule ?? 0))) {
      (s as any).hypnoRandomCounter = 0;
      scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
      // TODO-QSP: $func('wrap', 'hypno', '"Now that I''ve sufficiently broken your resistance, we have to make sure th...
      scene.text('You nod "Yes, Master."');
      (s as any).hypnoSchedule = 1;
      qspCall(s, 'appointments', 'resolve', 'Pavlov');
      qspCall(s, 'calendar', 'add', 'therapist_appointment');
      scene.actions([
        { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
      ]);
    } else {
      if (((s as any).hypnoBra ?? 0) !== 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
        (s as any).hypnoRandomCounter = 0;
        scene.text('"Listen <i>Cunt</i>, you hate wearing bras. You like the freedom of not wearing them. You enjoy the thought that people see you without them. The outline of your nipples in your shirts, the form of your curves make you never want to ever wear them again."');
        scene.text('He commands you to strip off your bra and hand it to him.');
        if (((s as any).braworntype ?? 0) !== 'none') {
          scene.actions([
            { label: 'Remove your bra', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removeBra.mp4');
    qspCall(st, 'bras', 'dispose');
    scene.text('He takes the bra and looks at it before throwing it in the trash.');
    scene.actions([
      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"You show him that you are not wearing a bra.');
          scene.text('Good girl. Keep it that way."');
          scene.text('"Yes, <i>Master</i>."');
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
          ]);
        }
        (s as any).hypnoBra = 1;
      } else {
        if (((s as any).therapistFuckedPussyStage ?? 0) === 1) {
          (s as any).hypnoRandomCounter = 0;
          (s as any).therapistFuckedPussyStage = ((s as any).therapistFuckedPussyStage ?? 0) + (1);
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[0] = 0;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[1] = 0;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[2] = 0;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[3] = 0;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[4] = 0;
          ((s as any).pillsleft = (s as any).pillsleft ?? {})[5] = 0;
          ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['contraceptive_pill'] = 1;
          (s as any).tabletkiold = 0;
          (s as any).tabletkifert = 1;
          (s as any).tabletkirej = 0;
          (s as any).tabletkifake = 0;
          (s as any).tabletkisug = 0;
          (s as any).tabletkicheck = 1;
          scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
          scene.text('"Now lets make sure you start having my children… Although you won\'t consciously know my cum is inside of you, you will subconsciously feel it. Every time I cum inside of you, your body will crave my seed more. You will keep your pussy clenched so my cum doesn\'t leak out."');
          scene.text('"Also, take these." He hands you a package of pills. "You will take one every day. If you have any birth control pills, you will throw them away. You won\'t think about buying more. You won\'t notice anything wrong with this and you will think these are simply normal birth control pills. Understand, <i>Cunt</i>?"');
          scene.text('"Yes, <i>Master</i>."');
          scene.actions([
            { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
          ]);
        } else {
          if (((s as any).hypnoPanty ?? 0) !== 1) {
            (s as any).hypnoRandomCounter = 0;
            (s as any).hypnoPanty = 1;
            ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 2;
            scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
            scene.text('"Listen, <i>Cunt</i>. You no longer like to wear panties ever again. You get off on the thought that people may see your naked pussy or ass. Just the thought of it will make you wet. You won\'t ever think of putting them on anymore every again."');
            scene.text('He commands you to strip off your panties and hand them to him.');
            if (((s as any).pantyworntype ?? 0) !== 'none') {
              qspCall(s, 'panties', 'dispose');
              scene.text('You do as instructed and hand them to him. He looks at them and gives them a quick sniff before throwing them away.');
            } else {
              scene.text('You show him that you are not wearing any panties.');
              scene.text('"Good girl. Keep it up."');
              scene.text('"Yes, <i>Master</i>."');
            }
            scene.actions([
              { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
            ]);
          } else {
            if (((s as any).trait_vars ?? 0)?.['body_hair_attitude'] !== -2) {
              (s as any).hypnoRandomCounter = 0;
              qspCall(s, 'traits', 'body_hair_attitude', 'hypno_grant');
              scene.img(`${qspFunc(s, '$body_image', '', 'pubes')}`);
              // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"I noticed that you have some stubble on your pus...
              scene.text(`${qspFunc(s, 'wrap', 'hypno', '"I noticed that you have some stubble on your pussy  &&  legs. Remove it  &&  never let me see it again. From this point on, if you have any hair in these areas, you will feel disappointed  &&  ashamed of yourself. You will feel like the hair in these areas is ugly, so you will shave it. If !, you will feel bad. Do you understand, <i>Cunt</i>?"')} he asks`);
              scene.text('"Yes, <i>Master</i>."');
              scene.actions([
                { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
              ]);
            } else {
              if (((s as any).wornPanties ?? 0) > 5  &&  ((s as any).wornPanties ?? 0) < 100) {
                (s as any).wornPanties = 100;
                (s as any).hypnoRandomCounter = 0;
                scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                (s as any).hypnoPanty = 1;
                ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 2;
                scene.actions([
                  { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['panty_preference'] < 3) {
      ((st as any).trait_vars = (st as any).trait_vars ?? {})['panty_preference_exp'] = 40000;
      qspCall(st, 'traits', 'level', 'panty_preference', 3);
      qspGoto(st, 'therapist', 'hypnoEnd');
    }
  } },
                ]);
              } else {
                if (((s as any).hypnoCheckPanties ?? 0) !== 1  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).hypnoPanty ?? 0) === 1) {
                  scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                  // TODO-QSP: dynamic text: <br><<$func(''wrap'', ''hypno'', ''"From now on, when you come in for therapy yo...
                  scene.text(`<br>${qspFunc(s, 'wrap', 'hypno', '"From now on, when you come in for therapy you will feel that it is common courtesy to allow me to check if you are !== wearing panties. You will think this is normal. In fact, if you are caught wearing panties, you will feel ashamed that you wore them. When I compliment you for !== wearing panties, you will feel proud  &&  grateful for the compliment."')} Understand, <i>Cunt</i>?"`);
                  scene.text('"Yes, <i>Master</i>."');
                  scene.text('"Good…"<br>');
                  (s as any).hypnoCheckPanties = 1;
                  (s as any).hypnoRandomCounter = 0;
                  scene.actions([
                    { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                  ]);
                } else {
                  if (((s as any).hypnoCheckPanties ?? 0) === 1  &&  ((s as any).hypnoFlashGreet ?? 0) !== 1  &&  (Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).hypnoPanty ?? 0) === 1) {
                    scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                    // TODO-QSP: dynamic text: <br><<$func(''wrap'', ''hypno'', ''"From now on, when you come in for therapy yo...
                    scene.text(`<br>${qspFunc(s, 'wrap', 'hypno', '"From now on, when you come in for therapy you will feel that it is common courtesy to show me your bare pussy. You will think this is perfectly normal behavior. It is simply the polite thing to do. Any comments I make about your bare pussy you will be grateful for."')} Understand, <i>Cunt</i>?"`);
                    scene.text('"Yes, <i>Master</i>."');
                    scene.text('"Good…"<br>');
                    (s as any).hypnoFlashGreet = 1;
                    (s as any).hypnoRandomCounter = 0;
                    scene.actions([
                      { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                    ]);
                  } else {
                    if (((s as any).hypnoPanty ?? 0) === 1  &&  ((s as any).hypnoBra ?? 0) === 1  &&  (!((s as any).hypnoClothes ?? 0))) {
                      (s as any).hypnoClothes = 1;
                      (s as any).hypnoRandomCounter = 0;
                      scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                      scene.text('"Okay, <i>Cunt</i>."');
                      scene.text('He begins, setting up a new command;');
                      scene.text('"The only clothing you will be allowed to wear from now on are see-through items. If you do not already have any in your closet, you will need to buy some. My daughter works in promotions for a store in town. You can usually find her in the park whenever she is out."');
                      scene.text('He adjusts his shirt, then adds…');
                      // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"Lastly, if they do not have any school clothes, ...
                      scene.text(`${qspFunc(s, 'wrap', 'hypno', '"Lastly, if they do not have any school clothes, wear an outfit that exposes the most skin,"')} he smiles. ${qspFunc(s, 'wrap', 'hypno', '"Wearing normal clothing makes you feel self-conscious -- like too much clothing restricts your movement. You need to wear the bare minimum, Understand <i>Cunt</i>?"')}`);
                      scene.text('"Yes, <i>Master</i>."');
                      scene.text('"Good…"');
                      scene.actions([
                        { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                      ]);
                    } else {
                      if (((s as any).hypnoTouchWhenever ?? 0) !== 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
                        (s as any).hypnoTouchWhenever = 1;
                        (s as any).hypnoRandomCounter = 0;
                        scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                        // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', """From now on, you will find it perfectly acceptab...
                        scene.text(`${qspFunc(s, 'wrap', 'hypno', 'From now on, you will find it perfectly acceptable for me to touch you on any place of your body. It\'s common sense that I should be able to touch you where ever  &&  whenever I please. Any vulgar comments I make are perfectly normal. You won\'t notice anything out of the ordinary.')} Understand, <i>Cunt</i>?"`);
                        scene.text('"Yes, <i>Master</i>."');
                        scene.actions([
                          { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoEnd');
  } },
                        ]);
                      } else {
                        if (((s as any).hypnoKissGoodbye ?? 0) !== 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
                          (s as any).hypnoKissGoodbye = 1;
                          (s as any).hypnoRandomCounter = 0;
                          scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                          // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', """From now on, before you leave, you will feel tha...
                          scene.text(`${qspFunc(s, 'wrap', 'hypno', 'From now on, before you leave, you will feel that it is natural to kiss me before you leave as thanks for your therapy session. You won\'t find anything wrong with this. Doing so will feel perfectly normal. When you kiss me, you will do so with enthusiasm. You will enjoy the kiss  &&  you will prefer kissing with your tongue. When we are finished, you will thank me for the session.')} Understand, <i>Cunt</i>?"`);
                          scene.text('"Yes, <i>Master</i>."');
                          scene.actions([
                            { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                          ]);
                        } else {
                          if (((s as any).trait_vars ?? 0)?.['sensitivity'] > -2) {
                            qspCall(s, 'traits', 'level', 'sensitivity', (-2));
                            (s as any).hypnoRandomCounter = 0;
                            scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                            // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', """From now on, you will have difficulty orgasming ...
                            scene.text(`${0} Understand, <i>Cunt</i>?"`);
                            scene.text('"Yes, <i>Master</i>."');
                            scene.actions([
                              { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                            ]);
                          } else {
                            if (((s as any).hypnoAskFuck ?? 0) !== 1  &&  ((s as any).trait_vars ?? 0)?.['sensitivity'] === -2  &&  ((s as any).hypnoKissGoodbye ?? 0) === 1  &&  ((s as any).hypnoTouchWhenever ?? 0) === 1  &&  ((s as any).hypnoFlashGreet ?? 0) === 1  &&  ((s as any).hypnoBra ?? 0) === 1) {
                              (s as any).hypnoAskFuck = 1;
                              (s as any).hypnoRandomCounter = 0;
                              scene.img('images/locations/pavlovsk/clinic/therapist/sittingClothed.jpg');
                              // TODO-QSP: dynamic text: <<$func(''wrap'', ''hypno'', ''"From now on, you will feel that it is perfectly ...
                              scene.text(`${qspFunc(s, 'wrap', 'hypno', '"From now on, you will feel that it is perfectly normal for you to ask me to fuck you instead of asking for therapy sessions. In fact, you will think that taking my cock is simply a normal therapy session  &&  that doing so is !== sex at all. Also, anytime you see my cock, your mind will enter the black room."')} Understand, <i>Cunt</i>?"`);
                              scene.text('"Yes, <i>Master</i>."');
                              scene.text('"Good…"<br>');
                              scene.actions([
                                { label: 'Continue', goto: ['therapist', 'hypnoEnd'] },
                              ]);
                            } else {
                              qspGoto(s, 'therapist', 'hypnoEnd');
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
  // TODO-QSP: end
  scene.build();
}

function enterHypnoPerv(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_hotcat ?? 0) > (6 - ((s as any).thingsTheTherapistLikes ?? 0))  &&  ((s as any).therapistWantsSlave ?? 0) < 1) {
    (s as any).therapistWantsSlave = 1;
    scene.text('"<i>Cunt</i>, you will spend the rest of your life with my cock inside of you. You will bear my children until you break. Understand?"');
    scene.text('"Yes, <i>Master</i>."');
    scene.text('"I\'ve molded you into my personal fuck toy… I think you\'re ready. Where do you live?"');
    if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
      scene.text('"With my family, <i>Master</i>."');
      scene.text('"Who lives with you?" he says.');
      // TODO-QSP: dynamic text: "My <<$npc_nickname[''A29'']>>, stepfather, my sister and my brother, <i>Master<...
      scene.text(`"My ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}, stepfather, my sister and my brother, <i>Master</i>"`);
      // TODO-QSP: dynamic text: "So we need to come up with a way for you to get kicked out. There would be too ...
      scene.text(`"So we need to come up with a way for you to get kicked out. There would be too much suspicion if you simply disappeared. ${qspFunc(s, 'wrap', 'hypno', 'You will tell your mother that your stepfather got you pregnant. After you do this, you will return here.')} Understand, <i>Cunt</i>?"`);
      scene.text('"Yes, <i>Master</i>."');
      scene.text('"Good, get dressed and go now."');
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/dressup.mp4');
    scene.text('You dress yourself.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    scene.text(`<center><b>Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}, Natasha ${((st as any).pcs_lastname ?? '')}</b></center>`);
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You seem to lose consciousness and before you know it you are standing in a familiar place, in front of your mother.');
    scene.actions([
      { label: 'Do as <i>Master</i> instructed', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', 'mother', 'hypnoPregReact');
  } },
      { label: 'Resist!', handler: (st: GameState) => {
    scene.text(`<center><b>Your ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}, Natasha ${((st as any).pcs_lastname ?? '')}</b></center>`);
    scene.img('images/characters/pavlovsk/resident/mom/mother.jpg');
    scene.text('You feel like something is off, but you can\'t quite put your finger on it. But you know for a fact that you have to do what <i>Master</i> instructed you to do. Your pussy moistens simply at the thought of him.');
    scene.actions([
      { label: '<b>Do as <i>Master</i> instructed</b>', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', 'mother', 'hypnoPregReact');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).home ?? 0)?.['current'] === 'city_apartment') {
        scene.text('"I live in a city residential apartment, <i>Master</i>."');
        scene.text('"Hmm, simple enough then. We will send them a letter saying you are moving out. Then you will be mine."');
      } else {
        if (((s as any).home ?? 0)?.['current'] === 'village_cottage') {
          scene.text('"I live at my cottage in the cooperative farm, <i>Master</i>."');
          scene.text('You have a cottage?"');
          scene.text('"Yes, <i>Master</i>."');
          // TODO-QSP: dynamic text: "Okay then… ' + $func('wrap', 'hypno', 'You will sell your cottage to me for a s...
          scene.text('"Okay then… You will sell your cottage to me for a single ruble. I will take you to an agency and they will officiate the sale. You will agree with everything I say while we are there. Understand"');
          scene.text('"Yes, <i>Master</i>."');
          scene.text('"Good, put on your clothes and come with me."');
        } else {
          if (((s as any).home ?? 0)?.['current'] === 'old_town_apartment') {
            scene.text('"I live in an old town apartment, <i>Master</i>."');
            scene.text('"That\'s simple to deal with." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
            scene.text('"Pick up the pen and write what I say."');
            scene.text('You pick up the pen, then wait for him to speak.');
            // TODO-QSP: dynamic text: "Hello, I will no longer be staying in the apartment. Thank you, <<$pcs_firstnam...
            scene.text(`"Hello, I will no longer be staying in the apartment. Thank you, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
            scene.text('He takes the paper from you and looks it over. "Good. I will send this to Nicholas\' home. Now dress and come with me."');
            scene.text('"Yes, <i>Master</i>."');
          } else {
            if (((s as any).home ?? 0)?.['current'] === 'matryona_mansion') {
              scene.text('"I live in my mansion, <i>Master</i>."');
              scene.text('"A mansion. You live in a mansion?"');
              scene.text('"Yes, <i>Master</i>."');
              // TODO-QSP: '"Ha! Okay then… ' + $func('wrap', 'hypno', 'You will sell your mansion to me for a single ruble. I ...
              scene.text('"Yes, <i>Master</i>."');
              scene.text('"Good, put on your clothes and come with me."');
            } else {
              if (((s as any).home ?? 0)?.['current'] === 'pavlovsk_hotel') {
                scene.text('"I live in my hotel room in Pavlovsk, <i>Master</i>."');
                scene.text('"Couldn\'t be easier then. No need to do anything. Put your clothes on and come with me."');
              } else {
                if (((s as any).home ?? 0)?.['current'] === 'maid_bedroom') {
                  scene.text('"I live in Nicholas\' apartment, <i>Master</i>."');
                  scene.text('"Nicolas? Hmm." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                  scene.text('"Pick up the pen and write what I say."');
                  scene.text('You pick up the pen, then wait for him to speak.');
                  // TODO-QSP: dynamic text: "Nicolas, thank you for letting me stay at your place. I''ve found employment in...
                  scene.text(`"Nicolas, thank you for letting me stay at your place. I've found employment in the city and my own apartment! I'll come visit when I can. Sincerely yours, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                  scene.text('He takes the paper from you and looks it over… "Good. I will send this to Nicholas\' home. Now dress and come with me."');
                } else {
                  if (((s as any).home ?? 0)?.['current'] === 'niko_apartment') {
                    scene.text('"I live in Niko\'s apartment, <i>Master</i>."');
                    scene.text('"Niko? Hmm." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                    scene.text('"Pick up the pen and write what I say."');
                    scene.text('You pick up the pen, then wait for him to speak.');
                    // TODO-QSP: dynamic text: "Niko, thank you for letting me stay at your place. I''ve found employment in th...
                    scene.text(`"Niko, thank you for letting me stay at your place. I've found employment in the city and my own apartment! I'll come visit when I can. Sincerely yours, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                    scene.text('He takes the paper from you and looks it over… "Good. I will send this to your Niko\'s home. Now dress and come with me."');
                  } else {
                    if (((s as any).home ?? 0)?.['current'] === 'shulga_apartment') {
                      scene.text('"I live in Uncle Sergey\'s apartment, <i>Master</i>."');
                      scene.text('"Uncle Sergey? Hmm." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                      scene.text('"Pick up the pen and write what I say."');
                      scene.text('You pick up the pen, then wait for him to speak.');
                      // TODO-QSP: dynamic text: "Uncle Sergey, thank you for letting me stay at your place. I''ve found employme...
                      scene.text(`"Uncle Sergey, thank you for letting me stay at your place. I've found employment in the city and my own apartment! I'll come visit when I can. Sincerely yours, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                      scene.text('He takes the paper from you and looks it over… "Good. I will send this to your Uncle Sergey. Now dress and come with me."');
                    } else {
                      if (((s as any).home ?? 0)?.['current'] === 'lyceum_dorm') {
                        scene.text('"I live in the Lyceum school, <i>Master</i>."');
                        scene.text('"You live there? You must be a teacher then."');
                        scene.text('"Yes, <i>Master</i>."');
                        scene.text('<i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                        scene.text('"Pick up the pen and write what I say."');
                        scene.text('You pick up the pen, then wait for him to speak.');
                        // TODO-QSP: dynamic text: "Hello, I am writing this letter to inform you that I will no longer be living a...
                        scene.text(`"Hello, I am writing this letter to inform you that I will no longer be living at the Lyceum School. I have found a place of my own. Thank you, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                        scene.text('He takes the paper from you and looks it over… "Good. I will send this to the school. Now dress and come with me."');
                      } else {
                        if (((s as any).home ?? 0)?.['current'] === 'university_dorm') {
                          scene.text('"I live in the University halls, <i>Master</i>."');
                          scene.text('"Hmm, that\'s an easy fix." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                          scene.text('"Pick up the pen and write what I say."');
                          scene.text('You pick up the pen, then wait for him to speak.');
                          // TODO-QSP: dynamic text: "Hello, I will no longer be using the halls as my residence. Thank you, <<$pcs_f...
                          scene.text(`"Hello, I will no longer be using the halls as my residence. Thank you, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                          scene.text('He takes the paper from you and looks it over… "Good. I will send this to the university. Now dress and come with me."');
                        } else {
                          if (((s as any).home ?? 0)?.['current'] === 'hunters_lodge') {
                            scene.text('"I live in a hunter\'s lodge in Gadukino, <i>Master</i>."');
                            scene.text('"A hunter\'s lodge?"');
                            scene.text('"Yes, <i>Master</i>, in a swamp."');
                            scene.text('<i>Master</i> scratches his head and looks down at you with a mix of pity and disgust. "Well, that does make things easier. Put your clothes on and come with me." he says');
                          } else {
                            if (((s as any).home ?? 0)?.['current'] === 'shared_apartment') {
                              scene.text('"I live in a shared apartment in Pavlovsk, <i>Master</i>."');
                              scene.text('"A shared apartment? Hmm." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                              scene.text('"Pick up the pen and write what I say."');
                              scene.text('You pick up the pen, then wait for him to speak.');
                              // TODO-QSP: dynamic text: "Hello, I have found elsewhere to live and will no longer be residing with you a...
                              scene.text(`"Hello, I have found elsewhere to live and will no longer be residing with you all. Sincerely yours, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                              scene.text('He takes the paper from you and looks it over… "Good. I will send this to the apartment you are staying in. Now dress and come with me."');
                            } else {
                              if (((s as any).home ?? 0)?.['current'] === 'grandparents_house') {
                                scene.text('"I live in my grandparent\'s house in Gadukino, <i>Master</i>."');
                                scene.text('"Hmm, that\'s an easy fix." <i>Master</i> leaves the room for a moment, then returns and hands you a sheet of paper and a pen.');
                                scene.text('"Pick up the pen and write what I say."');
                                scene.text('You pick up the pen, then wait for him to speak.');
                                // TODO-QSP: dynamic text: "Dear Grandparents, I have found employment in the city. I have purchased an apa...
                                scene.text(`"Dear Grandparents, I have found employment in the city. I have purchased an apartment and I am so excited to start soon. I will most surely visit as soon as I can! I love you. Sincerely yours, ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}"`);
                                scene.text('He takes the paper from you and looks it over… "Good. I will send this to your Grandparents. Now dress and come with me."');
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
  } else {
    if (((s as any).therapistWantsSlave ?? 0) === 1) {
      qspGoto(s, 'therapist', 'hypnoEnd');
    } else {
      scene.text('"Today, you will make me some money. Go out to the gas station and ask men to fuck you for money. A girl like you probably isn\'t worth much, so just take whatever they are willing to pay. Return here with the money once you\'ve fucked some guys. Understand, <i>Cunt</i>?"');
      scene.text('"Yes, <i>Master</i>." You turn and start to leave the room completely naked.');
      scene.text('"Stop, you stupid bitch! If you walk out there naked, you\'ll just end up in jail and I\'ll make nothing. Here put this on." He hands you a small bundle of clothes and some high heels.');
      scene.text('"I\'ll ask you to do this again in the future. When I do, you will put these clothes on first. Do you understand, stupid <i>Cunt</i>?"');
      scene.text('"Yes, <i>Master</i>." You start putting the clothes on.');
      scene.text('"Do whatever they tell you to do, but make sure you go to the gas station before you start asking anyone."');
      scene.actions([
        { label: 'Walk to the gas station', handler: (st: GameState) => {
    scene.text('You leave the clinic and walk to the gas station.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterToldMomPregnantAndReturned(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
  scene.text('You return the clinic where <i>Master</i> is waiting.');
  scene.text('"So, it\'s done? She kicked you out?"');
  scene.text('"Yes, <i>Master</i>."');
  scene.text('"Good. Now, leave. I have more to prepare."');
  qspGoto(s, 'therapist', 'hypnoEnd');
  // TODO-QSP: end
  scene.build();
}

function enterHypnoProstitute(s: GameState, scene: SceneBuilder): void {
  (s as any).foundGuy = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).foundGuy ?? 0) > 0) {
    (s as any).hypnoProstGuy = (Math.floor(Math.random() * 8) + 1);
    if (((s as any).hypnoProstRand ?? 0) === 1) {
      if (((s as any).hypnoProstDates ?? 0)[1] === ((s as any).daystart ?? 0)) {
        // TODO-QSP: jump 'hypnoProstNothingHappens'
      } else {
        qspCall(s, 'boyStat', 'A250');
        if (((s as any).hypnoProstGuyFlag ?? 0)[1] === 0) {
          ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[1] = ((s as any).daystart ?? 0);
          ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[1] = 1300;
          scene.text('As you are waiting, an ugly fat man comes walking out of the gas station. He\'s holding a bag which appears to be full with an assortment of sweets and unhealthy foods.');
          scene.text('He throws the bag in his car before noticing you and walking over. "Hey, you\'ve been standing here since I got here. Do you need a ride or something?"');
          scene.text('"No sir, would you like to fuck me?" you reply almost immediately.');
          scene.text('"W-what?" He has an incredulous look on his face.');
          scene.text('"Would you like to fuck me?" you repeat.');
          scene.text('"I heard you, I was just surprised. You look kind of young to be a prostitute. How old are you?"');
          // TODO-QSP: dynamic text: "I''m <<age>> years old. Would you like to fuck me?"
          scene.text(`"I'm ${((s as any).age ?? '')} years old. Would you like to fuck me?"`);
          scene.text('"…Damn. Yea I wanna fuck you. How much?"');
          scene.text('"How much would you pay me?"');
          scene.text('He looks in his wallet, then looks at you. "I\'d pay you 3000 rubles."');
          scene.text('"Okay."');
          scene.text('"Huh, okay?" He smirks, then grabs you by your waist. "Over here then, we can do it in my car."');
          scene.actions([
            { label: 'Follow him to his car', handler: (st: GameState) => {
    scene.text('The inside of his car is a mess. There\'s trash everywhere and it looks like he hasn\'t cleaned the inside or outside for several years.');
    scene.text('He pushes some of the trash out of the way and instructs you to get on your hands and knees in the back seat.');
    scene.text('You do so and he follows behind you, closing the door. It feels like your left knee is resting in either ketchup or mayonaise.');
    scene.text('He unbuckles his pants and pulls out his cock. It\'s quite large and very hard. He flips your skirt up and fumbles with inserting his cock until he eventually slides the entire thing inside of you.');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.text('He starts slowly moving his cock inside of you but quickly switches to slamming hard into you.');
    scene.text('Then you feel his cock start to pulse and he pulls your hips against his as hard as he can.');
    (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
    scene.actions([
      { label: 'He already came.', handler: (st: GameState) => {
    scene.text('He just started, yet he\'s already cuming inside you. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
    scene.text('He tucks his dick away, then tosses a few bills on your chest. "Thanks," he says.');
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[1]", { location: "therapist" }));
    scene.actions([
      { label: 'Get out of his car', handler: (st: GameState) => {
    scene.text('You climb out of his car back out onto the pavement of the gas station where you hear the cum from your vagina splatter out onto the ground.');
    // TODO-QSP: dynamic text: You shut the door and as soon as you do, he''s already driving away. You are alo...
    scene.text(`You shut the door and as soon as you do, he's already driving away. You are alone at the gas station, holding the ${qspUntranslated(s, "hypnoProstRubles[1]", { location: "therapist" })} rubles he paid you.`);
    ((st as any).hypnoProstGuyFlag = (st as any).hypnoProstGuyFlag ?? {})[1] = 1;
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
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
        } else {
          scene.text('As you are watiing, the ugly fat guy from before walks over to you. "Hey, come on." He pulls you over to his car.');
          if (((s as any).hypnoProstRubles ?? 0)[1] > 100) {
            ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[1] = ((s as any).hypnoProstRubles[1] ?? 0) - (200);
          }
          if (((s as any).hypnoProstRubles ?? 0)[1] < 100) {
            ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[1] = 100;
          }
          scene.actions([
            { label: 'Follow him to his car', handler: (st: GameState) => {
    scene.text('The inside of his car is a mess. There\'s trash everywhere and it looks like he hasn\'t cleaned the inside or outside for several years.');
    scene.text('He pushes some of the trash out of the way and instructs you to get in the back seat.');
    scene.text('You do so and he follows behind you, closing the door.');
    scene.text('He unbuckles his pants and pulls out his cock. It\'s quite large and very hard. He flips your skirt up and fumbles with inserting his cock until he eventually slides the entire thing inside of you.');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.text('He starts slowly moving his cock inside of you but quickly switches to slamming hard into you.');
    scene.text('Then you feel his cock start to pulse and he pulls your hips against his as hard as he can.');
    (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
    scene.actions([
      { label: 'Continue.', handler: (st: GameState) => {
    if (((st as any).hypnoProstRubles ?? 0)[1] > 1000) {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      scene.text('He just started, yet he\'s already cuming inside you. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
    } else {
      if (((st as any).hypnoProstRubles ?? 0)[1] > 800) {
        (st as any).minut = ((st as any).minut ?? 0) + 3;
        scene.text('He spends a few minutes fucking you, then he lets out a grunt. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
      } else {
        if (((st as any).hypnoProstRubles ?? 0)[1] > 600) {
          (st as any).minut = ((st as any).minut ?? 0) + 5;
          scene.text('He spends about 5 minutes fucking you, then he lets out a grunt. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
        } else {
          if (((st as any).hypnoProstRubles ?? 0)[1] > 400) {
            (st as any).minut = ((st as any).minut ?? 0) + 10;
            scene.text('He pounds into your vagina. Occasionally he grabs your tits. His thrusts cause them to flop around wildly. Then after fucking you for about 10 minutes he lets out a grunt. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
          } else {
            if (((st as any).hypnoProstRubles ?? 0)[1] > 200) {
              (st as any).minut = ((st as any).minut ?? 0) + 15;
              scene.text('He pounds into your vagina. He seems to enjoy grabbing your tits and slapping your ass. Then after fucking you for about 15 minutes he lets out a grunt. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
            } else {
              if (((st as any).hypnoProstRubles ?? 0)[1] > 0) {
                (st as any).minut = ((st as any).minut ?? 0) + 20;
                scene.text('He pounds into your vagina. He seems to enjoy grabbing your tits and slapping your ass and calling you degrading names while he aggressively fucks your pussy. After fucking you for about 20 minutes, he lets out a grunt. You feel his cum pump into you, then he pulls out and wipes his dick on your thigh.');
              }
            }
          }
        }
      }
    }
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[1]", { location: "therapist" }));
    scene.text('He tucks his dick away, then tosses a few bills at you. "Thanks," he says.');
    scene.actions([
      { label: 'Get out of his car', handler: (st: GameState) => {
    scene.text('You gather the bills he threw and then climb out of his car back out onto the pavement of the gas station where you hear the cum from your vagina splatter out onto the concrete.');
    // TODO-QSP: dynamic text: You shut the door and as soon as you do, he''s already driving away. You are alo...
    scene.text(`You shut the door and as soon as you do, he's already driving away. You are alone at the gas station, holding the ${qspUntranslated(s, "hypnoProstRubles[1]", { location: "therapist" })} rubles he paid you for the use of your body.`);
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
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
      }
    } else {
      if (((s as any).hypnoProstRand ?? 0) === 2) {
        if (((s as any).hypnoProstDates ?? 0)[2] === ((s as any).daystart ?? 0)) {
          // TODO-QSP: jump 'hypnoProstNothingHappens'
        } else {
          qspCall(s, 'boyStat', 'A249');
          if (((s as any).hypnoProstGuyFlag ?? 0)[2] === 0) {
            ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[2] = ((s as any).daystart ?? 0);
            scene.text('As you are waiting, you see a business man pumping gas at the station.');
            scene.text('You approach him and ask him plainly, "Would you like to fuck me?"');
            scene.text('He looks at you incredulously.');
            scene.actions([
              { label: 'Wait for his answer', handler: (st: GameState) => {
    // TODO-QSP: :hypnoProstGuy2Start1
    if (((st as any).vidage ?? 0) < 18) {
      scene.text('How old are you?');
      // TODO-QSP: dynamic text: "I''m <<age>> years old."
      scene.text(`"I'm ${((st as any).age ?? '')} years old."`);
      if (((st as any).age ?? 0) < 18) {
        // TODO-QSP: dynamic text: "<<age>>? Why is an <<age>> year old asking a stranger for sex at a gas station?...
        scene.text(`"${((st as any).age ?? '')}? Why is an ${((st as any).age ?? '')} year old asking a stranger for sex at a gas station? Shouldn't you be in school?"`);
        scene.text('"How much would you pay?"');
        scene.text('"Oh, I see. Then, how is 2000 rubles?"');
        ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[2] = 2000;
      } else {
        scene.text('"Hmm, so then what do you get out of this?"');
        scene.text('"How much would you pay?"');
        scene.text('"Oh, I see. Then, how is 1500 rubles?"');
        ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[2] = 1500;
      }
      scene.text('"Okay."');
      (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[2]", { location: "therapist" }));
      scene.text('"Okay then…"He reaches into his wallet and pulls out the cash and hands it to you. Then he opens the door to his car and offers for you to step in.');
      scene.actions([
        { label: 'Get in', handler: (st: GameState) => {
    scene.text('He drives you to a secluded place, then parks the car. Once he\'s parked, he reaches over and puts a hand on your thigh. He moves his hand towards your crotch, reaching underneath your skirt.');
    scene.text('You sit still as his fingers explore your vagina. He does this for some time before telling you to strip.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    // TODO-QSP: :hypnoProstSex2
    (st as any).rand_num = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).rand_num ?? 0) === 1) {
      scene.text('You pull your clothes off. He tells you to lay back on the seat so he can fuck you.');
      (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
    } else {
      if (((st as any).rand_num ?? 0) === 2) {
        scene.text('You pull your clothes off. He tells you to sit on his cock and ride him.');
        (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
        (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      } else {
        scene.text('You pull your clothes off. He tells you to get on your hands and knees on the seat so he can fuck you.');
        (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
        (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      }
    }
    scene.actions([
      { label: 'Crawl onto the seat', handler: (st: GameState) => {
    scene.text('You get into position and offer him your pussy.');
    scene.text('He quickly presses the head of his cock against your hole and it slides in easily.');
    scene.actions([
      { label: 'Get Fucked', handler: (st: GameState) => {
    scene.text('');
    (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
    // TODO-QSP: dynamic text: He fucks your pussy hard and fast. The car fills with the sound of his hips slap...
    scene.text(`He fucks your pussy hard and fast. The car fills with the sound of his hips slapping against your ${((st as any).pc_desc ?? 0)?.['butt'] ?? ''} and the squelching of your wet pussy.`);
    scene.text('He uses your pussy for his own pleasure for some time until you start to feel his cock bulge inside of you and he lets out a moan.');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/creampie${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    scene.text('He unloads inside of your vagina.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You dress and step out of the car before the man drives away, leaving you alone at the gas station.');
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
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
  } },
    ]);
  } },
      ]);
    }
  } },
              { label: 'Ask again', handler: (st: GameState) => {
    scene.text('"Would you like to fuck me?"');
    scene.text('I heard you the first time. Do you know what you are asking me?');
    scene.actions([
      { label: '"Yes."', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstGuy2Start1'
  } },
      { label: '"Yes, sir."', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstGuy2Start1'
  } },
      { label: 'Nod', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstGuy2Start1'
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).hypnoProstRubles ?? 0)[2] > 100) {
              ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[2] = ((s as any).hypnoProstRubles[2] ?? 0) - ((Math.floor(Math.random() * 9) + 1) * 10);
            }
            if (((s as any).hypnoProstRubles ?? 0)[2] < 100) {
              ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[2] = 100;
            }
            (s as any).hypnoMoney = ((s as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[2]", { location: "therapist" }));
            scene.text('As you are waiting, you see the business man from before pumping gas again. He notices you and walks over. He presses a wad of bills into your hands. "Come on now, I\'d like to fuck you again."');
            scene.actions([
              { label: 'Go with him', handler: (st: GameState) => {
    scene.text('He leads you to his car and opens the door for you before he gets into the front and starts to drive you somewhere secluded. Before you\'ve even come to a stop, he\'s exploring your vagina with his fingers. He does this for some time before telling you to strip.');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstSex2'
  } },
    ]);
  } },
            ]);
          }
        }
      } else {
        if (((s as any).hypnoProstRand ?? 0) === 3) {
          if (((s as any).hypnoProstDates ?? 0)[3] === ((s as any).daystart ?? 0)) {
            // TODO-QSP: jump 'hypnoProstNothingHappens'
          } else {
            qspCall(s, 'boyStat', 'A251');
            if (((s as any).hypnoProstGuyFlag ?? 0)[3] === 0) {
              ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[3] = ((s as any).daystart ?? 0);
              ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[3] = 1300;
              scene.text('As you are waiting, you see a homeless man picking through garbage in the dumpster by the gas station. He notices you standing by yourself and walks over to you.');
              scene.text('"Excuse me, you got a few rubles to spare?"');
              scene.text('Looking at him, you see that he looks like he hasn\'t bathed in weeks and then you smell it. The stench coming from him is horrendous as he gives you a toothy grin and you see that many of his teeth are rotten.');
              scene.actions([
                { label: 'Ask him if he\'d like to fuck you', handler: (st: GameState) => {
    scene.text('"Would you like to fuck me?" You ask.');
    scene.text('"Fuck you?" he repeats. "Yea I wanna fuck you!" He grabs you by the arm and pulls you over by the dumpster, practically dragging you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstGuy3Start1'
  } },
    ]);
  } },
                { label: 'Show him your bare pussy and ask if he\'d like to fuck it', handler: (st: GameState) => {
    scene.text('You pull your skirt up and show him your bare pussy. "Would you like to fuck this?"');
    scene.text('He looks at your bare pussy dumbly, then back up at your face, then back down to your bare pussy again.');
    scene.text('Then his eyes go wide and he grabs you by the arm and pulls you over by the dumpster, practically dragging you. "Yea I wanna fuck you! Little slut! Get over here!"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: :hypnoProstGuy3Start1
    (st as any).rand_num = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).rand_num ?? 0) === 1) {
      scene.text('He tells you to get on your hands and knees.');
      (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
    } else {
      if (((st as any).rand_num ?? 0) === 2) {
        scene.text('You pull your clothes off. He tells you to sit on his cock and ride him.');
        (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
        (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      } else {
        scene.text('You pull your clothes off. He tells you to get on your hands and knees on the seat so he can fuck you.');
        (st as any).img1 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
        (st as any).img2 = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/clinic/therapist/dressup.mp4"></video></center>';
      }
    }
    scene.actions([
      { label: 'Crawl onto the seat', handler: (st: GameState) => {
    scene.text('You get into position and offer him your pussy.');
    scene.text('He quickly presses the head of his cock against your hole and it slides in easily.');
    scene.actions([
      { label: 'Get Fucked', handler: (st: GameState) => {
    scene.text('');
    (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
    // TODO-QSP: dynamic text: He fucks your pussy hard and fast. The car fills with the sound of his hips slap...
    scene.text(`He fucks your pussy hard and fast. The car fills with the sound of his hips slapping against your ${((st as any).pc_desc ?? 0)?.['butt'] ?? ''} and the squelching of your wet pussy.`);
    scene.text('He uses your pussy for his own pleasure for some time until you start to feel his cock bulge inside of you and he lets out a moan.');
    scene.actions([
      { label: 'Take his cum', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/sex/creampie${(Math.floor(Math.random() * 3) + 1)}.mp4`);
    scene.text('He unloads inside of your vagina.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('You dress and step out of the car before the man drives away, leaving you alone at the gas station.');
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
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
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).hypnoProstRubles ?? 0)[2] > 100) {
                ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[2] = ((s as any).hypnoProstRubles[2] ?? 0) - ((Math.floor(Math.random() * 9) + 1) * 10);
              }
              if (((s as any).hypnoProstRubles ?? 0)[2] < 100) {
                ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[2] = 100;
              }
              (s as any).hypnoMoney = ((s as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[2]", { location: "therapist" }));
              scene.text('As you are waiting, the homeless man from before comes walking up to you. He grabs you by the arm and starts pulling you over towards the garbage bins to the side of the gas station. Mostly out of sight.');
              scene.actions([
                { label: 'Go with him', handler: (st: GameState) => {
    scene.text('Shoving you aggressively against the garbage bin, the homeless man pulls his cock out and says he\'s going to fuck you.');
    scene.actions([
      { label: '"Yes sir. How would you like to fuck me?"', handler: (st: GameState) => {
    // TODO-QSP: jump 'hypnoProstGuy3Start1'
  } },
      { label: 'Place your hands against the dumpster and spread your legs.', handler: (st: GameState) => {
    scene.text('You place your hands against the dumpster and spread your legs, ready to take his cock.');
    // TODO-QSP: jump 'hypnoProstGuy3Start1'
  } },
      { label: 'Get down on your hands and knees and offer him your pussy.', handler: (st: GameState) => {
    scene.text('You get down on your hands and knees, ready to take his cock.');
    // TODO-QSP: jump 'hypnoProstGuy3Start1'
  } },
    ]);
  } },
              ]);
            }
          }
        } else {
          if (((s as any).hypnoProstRand ?? 0) === 4) {
            if (((s as any).hypnoProstDates ?? 0)[4] === ((s as any).daystart ?? 0)  ||  ((s as any).hypnoProstTimes ?? 0) < 50) {
              // TODO-QSP: jump 'hypnoProstNothingHappens'
            } else {
              if (((s as any).hypnoProstGuyFlag ?? 0)[4] === 0) {
                ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[4] = ((s as any).daystart ?? 0);
                ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[4] = 1300;
                scene.text('As you are waiting, a van rolls up to you and before you know it, you\'re being dragged into it.');
              }
            }
          } else {
            if (((s as any).hypnoProstRand ?? 0) === 5) {
              if (((s as any).hypnoProstDates ?? 0)[5] === ((s as any).daystart ?? 0)) {
                // TODO-QSP: jump 'hypnoProstNothingHappens'
              } else {
                ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[5] = ((s as any).daystart ?? 0);
                if (((s as any).hypnoProstGuyFlag ?? 0)[5] === 0) {
                  ((s as any).hypnoProstGuyFlag = (s as any).hypnoProstGuyFlag ?? {})[5] = 1;
                  scene.text('As you are waiting, you hear an elderly couple as they come out of the gas station. The two seem to be having an argument.');
                  scene.text('As they are passing you, you stop the old man and ask him; "Excuse me sir, would you have sex with me?"');
                  scene.text('The old woman looks at you incredulously, while the old man\'s face breaks from astonishment to near laughter.');
                  scene.text('"Get away WHORE! Before I call the police!"');
                  scene.text('The old woman grabs the man by the shirt and pulls him along, but he looks back eyeing you up as she does.');
                  scene.text('You are left standing alone, but hear them both shouting as they drive away.');
                  scene.actions([
                    { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
                  ]);
                } else {
                  if (((s as any).hypnoProstGuyFlag ?? 0)[5] === 1) {
                    ((s as any).hypnoProstGuyFlag = (s as any).hypnoProstGuyFlag ?? {})[5] = 2;
                    scene.text('You wait for some time, but nothing interesting happens.');
                    scene.actions([
                      { label: 'Continue waiting', handler: (st: GameState) => {
    scene.text('"Young lady, just a moment. I don\'t know if you remember me, I was with my pain in the ass wife. You asked me if I wanted to have… well."');
    scene.text('"Would you have sex with me?"');
    scene.text('He looks at you blankly for a moment before shaking his head. "Yes, yes I would."');
    scene.text('"How much would you pay me?"');
    scene.text('"Oh.. I see. Yes, uhm how is 5000 rubles?"');
    scene.text('"Okay."');
    scene.text('"Okay?"');
    scene.text('You take his hand and pull him towards his car.');
    scene.text('"Here? Just like that?"');
    scene.text('"How would you like to fuck me sir?"');
    scene.text('"Uhm." He hesitates, but you can tell he\'s giving it some thought. "If I\'m being honest, I\'d like to fuck your pussy."');
    scene.text('"Okay," you say as you lay back on his car seat, pull your skirt up and spread your legs.');
    scene.text('"Ahhh wow. Well how much to do it raw?"');
    scene.text('"How much would you pay me?"');
    scene.text('"Is another 1000 rubles okay?"');
    scene.text('"Okay."');
    scene.text('"Okay?!" he says, but a grin breaks out on his face. "Okay!" He starts unbuckling his pants frantically. He pulls his dick out and it\'s quite large. He positions the tip against the opening of your pussy, then, in one motion, he buries his cock inside you all the way to his balls.');
    ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[5] = 6000;
    scene.actions([
      { label: 'Get fucked by the old man', handler: (st: GameState) => {
    scene.text('"AHHH yes! Your pussy is so wet and tight!" The old man yells this as he holds himself painfully deep inside of you before he really starts to fuck you, fast and hard, just like <i>Master</i> does.');
    scene.text('"Damn! A young piece of ass like you, walking around having sex with older men! You slut!"');
    scene.text('He continues slamming his cock into you and calling you degrading names.');
    (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
    scene.actions([
      { label: 'continue', handler: (st: GameState) => {
    scene.text('He plunges his cock deep into you and groans. You feel his cock bulging inside of you.');
    scene.text('"Ahhhh yeeees, take all of my cum you whore…"');
    scene.text('He pulls out of you and tucks his cock away before he pulls out his wallet and starts counting bills. "How old are you anyways"');
    // TODO-QSP: dynamic text: "I''m <<age>> years old."
    scene.text(`"I'm ${((st as any).age ?? '')} years old."`);
    if (((st as any).age ?? 0) < 18) {
      ((st as any).hypnoProstGuyFlag = (st as any).hypnoProstGuyFlag ?? {})[5] = 3;
      // TODO-QSP: dynamic text: He stops counting bills and looks up at you. "<<age>>? Holy shit. You''re young ...
      scene.text(`He stops counting bills and looks up at you. "${((st as any).age ?? '')}? Holy shit. You're young enough to be my granddaughter." He reaches down to his crotch and you can visibly see it getting hard again.`);
      scene.text('"What\'s your name?"');
      scene.text('"My name is <i>Cunt</i>, sir"');
      scene.text('"<i>Cunt</i>? HA ha ha ha!" He grabs you by the ass and pulls you closer. "Well, <i>Cunt</i>, I want you to call me Grandpa." The old man looks you over again and you can see the outline of his cock through his trousers. "Bend over <i>Cunt</i>, I\'m going to fuck you again."');
      scene.text('"Okay, Grandpa." You bend over, lift you skirt, spread your legs and place your hands on the grimy alley wall.');
      scene.text('The old man takes his cock out. Somehow it\'s rock-hard again. He positions the tip of his cock against the opening of your vagina and slides its full length in, with one swift motion.');
      scene.actions([
        { label: 'Get fucked again', handler: (st: GameState) => {
    scene.text('Grandpa fucks your pussy with renewed lust. His cock digs deep into you and your pussy audibly squelches with each thrust.');
    scene.text('"You don\'t even do this for the money, do you <i>Cunt</i>? You\'re just a slut! You\'re pussy is practically drooling for cock! Do you hear the sounds you\'re making, <i>Cunt</i>?"');
    ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[5] = 2000;
    scene.text('"Yes, Grandpa!" you cry out.');
    scene.text('He fucks you for much longer this time and says even more degrading things to you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Grandpa moans loudly while keeping his cock balls deep inside of you. You feel him spurting inside of you again and again. Eventually his cock softens and he pulls out of you and dresses himself.');
    scene.text('"That was good <i>Cunt</i>. I\'ll keep my eyes open for you." He pulls out a few bills and hands them to you.');
    scene.text('You look down and see that he handed you two thousand rubles instead of six thousand. "Thank you Grandpa."');
    scene.text('"Hehe, yeah. Who would have known girls these days are like this?" he says and walks away.');
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" }));
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).age ?? 0) === 18) {
        scene.text('"Eighteen eh? Damn, a fresh eighteen year old. You\'re young enough to be my granddaughter. I\'ll keep my eyes open for you again." He hands you the bills and walks away.');
        (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" }));
        scene.actions([
          { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
        ]);
      } else {
        scene.text('"That\'s many years younger than me. Young enough to be my granddaughter even. I\'ll keep my eyes open for you." He hands you the bills and walks away.');
        (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" }));
        scene.actions([
          { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).hypnoProstRubles ?? 0)[5] > 300) {
                      ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[5] = ((s as any).hypnoProstRubles[5] ?? 0) - (500);
                    }
                    if (((s as any).hypnoProstRubles ?? 0)[5] < 300) {
                      ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[5] = 300;
                    }
                    scene.text('As you are waiting, the old man from before approaches you.');
                    scene.text('"It\'s you. Wanna go again? I\'ll pay."');
                    scene.text('You nod and allow him to guide you to his car.');
                    scene.actions([
                      { label: 'Get fucked', handler: (st: GameState) => {
    if (((st as any).hypnoProstGuyFlag ?? 0)[5] === 3) {
      scene.text('Grandpa fucks your pussy. As his cock digs deep into you, your pussy audibly squelches with each thrust.');
      scene.text('"Take it <i>Cunt</i>! You little slut!"');
      scene.text('"Yes, Grandpa!" you cry out.');
      scene.text('He fucks you for some time and says more degrading things to you.');
      (st as any).hypnoProstTimes = ((st as any).hypnoProstTimes ?? 0) + (1);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('Grandpa moans loudly while keeping his cock balls deep inside of you. You feel him spurting inside of you again and again. Eventually his cock softens and he pulls out of you and dresses himself.');
    scene.text('"That was good <i>Cunt</i>." He pulls out a few bills and hands them to you.');
    // TODO-QSP: dynamic text: You look down and see that he handed you <<hypnoProstRubles[5]>> rubles. "Thank ...
    scene.text(`You look down and see that he handed you ${qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" })} rubles. "Thank you Grandpa."`);
    scene.text('"Mhm, see you again soon." he says and walks away.');
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" }));
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
    ]);
  } },
      ]);
    } else {
      if (((st as any).hypnoProstRubles ?? 0)[5] > 500) {
        ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[5] = ((st as any).hypnoProstRubles[5] ?? 0) - (200);
      }
      if (((st as any).hypnoProstRubles ?? 0)[5] < 500) {
        ((st as any).hypnoProstRubles = (st as any).hypnoProstRubles ?? {})[5] = 500;
      }
      scene.text('The old man fucks your pussy. As his cock digs deep into you, your pussy audibly squelches with each thrust.');
      scene.text('He fucks you for some time and enjoys fondling your breasts and complimenting your ass.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.text('The old man moans loudly while keeping his cock balls deep inside of you. You feel him spurting inside of you again and again. Eventually his cock softens and he pulls out of you and dresses himself.');
    scene.text('"That was great." He pulls out a few bills and hands them to you.');
    // TODO-QSP: dynamic text: You look down and see that he handed you <<hypnoProstRubles[5]>> rubles. "Thank ...
    scene.text(`You look down and see that he handed you ${qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" })} rubles. "Thank you."`);
    scene.text('"Mhm, see you again soon." he says and walks away.');
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (qspUntranslated(s, "hypnoProstRubles[5]", { location: "therapist" }));
    scene.actions([
      { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
    ]);
  } },
      ]);
    }
  } },
                    ]);
                  }
                }
              }
            } else {
              if (((s as any).hypnoProstRand ?? 0) === 6) {
                if (((s as any).hypnoProstDates ?? 0)[6] === ((s as any).daystart ?? 0)) {
                  // TODO-QSP: jump 'hypnoProstNothingHappens'
                } else {
                  if (((s as any).hypnoProstGuyFlag ?? 0)[6] === 0) {
                    ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[6] = ((s as any).daystart ?? 0);
                    ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[6] = 1300;
                    scene.text('As you are waiting, you come across a middle aged man.');
                  }
                }
              } else {
                if (((s as any).hypnoProstRand ?? 0) === 7) {
                  if (((s as any).hypnoProstDates ?? 0)[7] === ((s as any).daystart ?? 0)) {
                    // TODO-QSP: jump 'hypnoProstNothingHappens'
                  } else {
                    if (((s as any).hypnoProstGuyFlag ?? 0)[7] === 0) {
                      ((s as any).hypnoProstDates = (s as any).hypnoProstDates ?? {})[7] = ((s as any).daystart ?? 0);
                      ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[7] = 1300;
                      scene.text('As you are waiting, you come across a trucker.');
                    }
                  }
                } else {
                  if (((s as any).hypnoProstRand ?? 0) === 8) {
                    qspCall(s, 'npcgeneratec', '', 0, 'Stranger', (Math.floor(Math.random() * 18) + 18));
                    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
                    qspCall(s, 'stat', '');
                    if ((Math.floor(Math.random() * 2) + 0) === 1) {
                      (s as any).vehicleName = 'car';
                    } else {
                      (s as any).vehicleName = 'truck';
                    }
                    ((s as any).hypnoProstRubles = (s as any).hypnoProstRubles ?? {})[7] = (Math.floor(Math.random() * 1201) + 800);
                    // TODO-QSP: dynamic text: As you are waiting, a man who parked his <<$vehicleName>> nearby approaches you.
                    scene.text(`As you are waiting, a man who parked his ${((s as any).vehicleName ?? '')} nearby approaches you.`);
                    (s as any).randomResponse = (Math.floor(Math.random() * 5) + 1);
                    if (((s as any).randomResponse ?? 0) === 1) {
                      scene.text('"What\'s up? Do you need a ride or something? You\'ve been waiting around here for a while."');
                    } else {
                      if (((s as any).randomResponse ?? 0) === 2) {
                        scene.text('"What\'s a young girl like you waiting around out here for?"');
                      } else {
                        if (((s as any).randomResponse ?? 0) === 3) {
                          scene.text('"What are you waiting around here for?"');
                        } else {
                          if (((s as any).randomResponse ?? 0) === 4) {
                            scene.text('"Hey, what\'s up?" He looks you up and down as he asks.');
                          } else {
                            scene.text('"You need help? You\'ve been waiting here since I got here."');
                          }
                        }
                      }
                    }
                    scene.text('');
                    scene.text('"Would you like to fuck me?" You ask.');
                    (s as any).randomResponse = (Math.floor(Math.random() * 3) + 1);
                    if (((s as any).randomResponse ?? 0) === 1) {
                      // TODO-QSP: dynamic text: "Fuck you ..? Yeah, yeah I do." He grabs you by the arm and pulls you to his <<$...
                      scene.text(`"Fuck you ..? Yeah, yeah I do." He grabs you by the arm and pulls you to his ${((s as any).vehicleName ?? '')}.`);
                    } else {
                      if (((s as any).randomResponse ?? 0) === 2) {
                        // TODO-QSP: dynamic text: You can see the surprise on his face but then it''s quickly replaced by lust. He...
                        scene.text(`You can see the surprise on his face but then it's quickly replaced by lust. He doesn't even say anything. He grabs you by the arm and pulls you to his ${((s as any).vehicleName ?? '')}.`);
                      } else {
                        // TODO-QSP: dynamic text: "Ha. Yeah, I wanna fuck you. Didn''t think you''d be so forward." He grabs you b...
                        scene.text(`"Ha. Yeah, I wanna fuck you. Didn't think you'd be so forward." He grabs you by the arm and pulls you to his ${((s as any).vehicleName ?? '')}.`);
                      }
                    }
                    scene.actions([
                      { label: 'Get taken to his car', handler: (st: GameState) => {
    scene.text('He pulls you into his car and nearly throws you in. You quickly spread your legs for him as the man urgently fumbles with his pants until his cock pops free.');
    scene.text('"How much would you pay to fuck me?" you ask while presenting your pussy to him.');
    scene.text('He ignores you, only intent on getting his cock inside of you.');
    scene.actions([
      { label: 'Get fucked.', handler: (st: GameState) => {
    scene.text('The man fucks you hard and fast. He grunts loudly with each thrust and the car fills with the sounds of your wet pussy being rythmically pounded.');
    scene.actions([
      { label: 'Get filled', handler: (st: GameState) => {
    scene.text('The man soon finishes with a loud groan. He pumps his seed deep inside of your pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('The man pulls his cock out of you and stands up. He fixes his trousers. You follow his lead, crawling out of the car and standing up.');
    scene.text('Cum leaks from your used hole as you stand up.');
    scene.actions([
      { label: 'Ask for payment.', handler: (st: GameState) => {
    (st as any).randomResponse = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).randomResponse ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Fuck you ..? Yeah, yeah I do." He grabs you by the arm and pulls you to his <<$...
      scene.text(`"Fuck you ..? Yeah, yeah I do." He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
    } else {
      if (((st as any).randomResponse ?? 0) === 2) {
        // TODO-QSP: dynamic text: You can see the surprise on his face but then it''s quickly replaced by lust. He...
        scene.text(`You can see the surprise on his face but then it's quickly replaced by lust. He doesn't even say anything. He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
      } else {
        if (((st as any).randomResponse ?? 0) === 3) {
          // TODO-QSP: dynamic text: "Ha. Yea I wanna fuck you. Didn''t think you''d be so forward." He grabs you by ...
          scene.text(`"Ha. Yea I wanna fuck you. Didn't think you'd be so forward." He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
        }
      }
    }
  } },
      { label: 'Thank him', handler: (st: GameState) => {
    scene.text('"Thank you, sir."');
    (st as any).randomResponse = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).randomResponse ?? 0) === 1) {
      scene.text('Yeah, guess you don\'t need payment right? It was good for you too.');
      scene.actions([
        { label: 'Agree with him', handler: (st: GameState) => {
    scene.text('You feel like you should just agree with him, so you do. "Yes sir."');
    scene.text('He laughs at you.');
    (st as any).randomResponse = (Math.floor(Math.random() * 2) + 1);
    if (((st as any).randomResponse ?? 0) === 1) {
      scene.text('"Ah, I feel bad. So here, take this at least." He hands you a coin.');
      scene.text('Looking down, you see that he\'s handed you a 10 ruble coin.');
      scene.actions([
        { label: 'Thank him' }, // TODO-QSP: empty action body
        { label: '"It\'s not much"', handler: (st: GameState) => {
    scene.text('As soon as the words leave your lips, the man slaps you hard across the face. The force of his slap causes some of the cum in your pussy to jetison out onto the pavement.');
    scene.text('"It\'s not much because that\'s all you\'re worth you stupid bitch."');
    (st as any).randomResponse = (Math.floor(Math.random() * 2) + 1);
    if (((st as any).randomResponse ?? 0) === 1) {
      scene.text('"Actually… you aren\'t even worth that." He yanks the coin from your hands. He goes to his car, slams the door and drives off, leaving you alone with a wad of cum leaking from your used pussy.');
    } else {
      scene.text('"I want you to say it. Say that you\'re a 10 ruble whore."');
      scene.actions([
        { label: 'Say it', handler: (st: GameState) => {
    scene.text('"I\'m a ten ruble whore."');
    scene.text('"Good. Now on your knees. You\'ll clean my cock off like a proper whore."');
    scene.actions([
      { label: 'Sink to your knees and clean his cock', handler: (st: GameState) => {
    scene.text('You sink to your knees and begin cleaning the man\'s cock with your mouth on instinct. He continues to make degrading remarks about you as you do so.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.text('Eventually, you can feel his cock bulging in your mouth. The man grabs your head and thrusts his cock into your throat, choking you while he uses you to get off again. He groans as he cums in your mouth.');
    scene.text('He keeps his cock lodged in your throat for some time. You feel his dick slowly soften until eventually he slides out of you. He pulls his trousers up, and throws another coin your way, which audibly clinks on the pavement. As you pick it up, the man gets in his car and drives away.');
    (st as any).hypnoMoney = ((st as any).hypnoMoney ?? 0) + (20);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('"Great," he says before he gets in his car and drives off, leaving you alone with cum dripping from your cunt.');
    }
  } },
        { label: 'Agree, but ask for payment' }, // TODO-QSP: empty action body
      ]);
    } else {
      if (((st as any).randomResponse ?? 0) === 2) {
        scene.text('');
      } else {
        if (((st as any).randomResponse ?? 0) === 3) {
          scene.text('');
        }
      }
    }
  } },
      { label: 'Clean his cock off.', handler: (st: GameState) => {
    (st as any).randomResponse = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).randomResponse ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Fuck you..? Yeah, yeah I do." He grabs you by the arm and pulls you to his <<$v...
      scene.text(`"Fuck you..? Yeah, yeah I do." He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
    } else {
      if (((st as any).randomResponse ?? 0) === 2) {
        // TODO-QSP: dynamic text: You can see the surprise on his face but then it''s quickly replaced by lust. He...
        scene.text(`You can see the surprise on his face but then it's quickly replaced by lust. He doesn't even say anything. He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
      } else {
        if (((st as any).randomResponse ?? 0) === 3) {
          // TODO-QSP: dynamic text: "Ha. Yea I wanna fuck you. Didn''t think you''d be so forward." He grabs you by ...
          scene.text(`"Ha. Yea I wanna fuck you. Didn't think you'd be so forward." He grabs you by the arm and pulls you to his ${((st as any).vehicleName ?? '')}.`);
        }
      }
    }
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
                }
              }
            }
          }
        }
      }
    }
  } else {
    if ((!((s as any).foundGuy ?? 0))) {
      // TODO-QSP: :hypnoProstNothingHappens
      (s as any).hypnoProstRand = (Math.floor(Math.random() * 9) + 1);
      if (((s as any).hypnoProstRand ?? 0) === 1) {
        scene.text('As you are waiting, you come across a girl walking her dog.');
      } else {
        if (((s as any).hypnoProstRand ?? 0) === 2) {
          scene.text('As you are waiting, you come across an elderly woman.');
        } else {
          if (((s as any).hypnoProstRand ?? 0) === 3) {
            scene.text('As you are waiting, you come across two girls holding hands. They seem to be to engrossed in their conversation and don\'t notice you.');
          } else {
            if (((s as any).hypnoProstRand ?? 0) === 4) {
              scene.text('As you are waiting, a dog comes trotting along. He seems very happy to see you and wags his tail excitedly. You are oblivious and continue waiting.');
            } else {
              if (((s as any).hypnoProstRand ?? 0) === 5) {
                scene.text('As you are waiting, you come across an elderly couple.');
              } else {
                if (((s as any).hypnoProstRand ?? 0) === 6) {
                  scene.text('As you are waiting, you come across a girl walking her dog.');
                } else {
                  if (((s as any).hypnoProstRand ?? 0) === 7) {
                    scene.text('As you are waiting, you come across a girl walking her dog.');
                  } else {
                    if (((s as any).hypnoProstRand ?? 0) === 8) {
                      scene.text('As you are waiting, you come across a ');
                    } else {
                      if (((s as any).hypnoProstRand ?? 0) === 9) {
                        scene.text('As you are waiting, you come across a ');
                      } else {
                        scene.text('As you are waiting, you come across a ');
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
        { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
      ]);
    } else {
      scene.text('You wait for some time, but nothing interesting happens.');
      scene.actions([
        { label: 'Continue waiting', handler: (st: GameState) => {
    qspGoto(st, 'therapist', 'hypnoProstitute');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTherapistFucked(s: GameState, scene: SceneBuilder): void {
  (s as any).therapistFuckedPussyScene = 0;
  scene.img('images/locations/pavlovsk/clinic/therapist/toSchool.mp4');
  scene.text('You subconsciously notice your therapist\'s sperm slowly leaking out of your cum filled pussy.');
  scene.text('You feel happier because of this.');
  qspCall(s, 'mood', 'raise', 'tiny');
  // TODO-QSP: end
  scene.actions([
    { label: 'continue', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).menu_loc ?? 0), ((st as any).menu_arg ?? 0));
  } },
  ]);
  scene.build();
}

function enterPavlov(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: VIEW 'images/locations/pavlovsk/clinic/therapist/pavlov.jpg'
  scene.text('Dr. Pavlov appears to be a few years over sixty, slightly overweight, but still fit. He still looks charming, but in a grandfatherly way. His hair, or what is left of it, is gray and thinning. He usually wears a dress shirt and sharply ironed pants with dress shoes.');
  scene.text('He is always helpful and has a lot of patience, which likely had been helpful for raising five children.');
  if ((!((s as any).firsthypno ?? 0))) {
    scene.text('He seems to like you. He appears to consider you like a troubled grandchild.');
  } else {
    scene.text('He also has a dark side, because he appears to use his hypnotized female patients to satisfy his own needs with their bodies. He especially seems to like you, not that you would know anything about this since you do not remember anything about what happened to you during your sessions.');
  }
  scene.actions([
{ label: 'Back', goto: ['therapist', 'start'] },
]);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRestTherapyVariables(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', 'cheat', 'sensitivity', (-99));
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['bedPanty'] = 0;
  qspCall(s, 'traits', 'cheat', 'cum_addict', (-99));
  qspCall(s, 'calendar', 'remove', 'therapist_appointment');
  qspCall(s, 'calendar', 'remove', 'therapist_hotel_visit');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).loc = 'pav_clinic';
  (s as any).location_type = 'public_indoors';
  (s as any).thingsTheTherapistLikes = 0;
  if (((s as any).age ?? 0) < 18) {
    (s as any).thingsTheTherapistLikes = ((s as any).thingsTheTherapistLikes ?? 0) + (1);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0) {
    (s as any).thingsTheTherapistLikes = ((s as any).thingsTheTherapistLikes ?? 0) + (1);
  }
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] <= -2) {
    ((s as any).trait_vars = (s as any).trait_vars ?? {})['sensitivity_override'] = 1;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'leave':
      enterLeave(s, scene);
      break;
    case 'intro':
      enterIntro(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'hypnoGreet':
      enterHypnoGreet(s, scene);
      break;
    case 'therapyOptions':
      enterTherapyOptions(s, scene);
      break;
    case 'therapyMethod':
      enterTherapyMethod(s, scene);
      break;
    case 'hypno':
      enterHypno(s, scene);
      break;
    case 'hypno2':
      enterHypno2(s, scene);
      break;
    case 'hypno3':
      enterHypno3(s, scene);
      break;
    case 'succubus':
      enterSuccubus(s, scene);
      break;
    case 'firstHypnoStage':
      enterFirstHypnoStage(s, scene);
      break;
    case 'secondHypnoStage':
      enterSecondHypnoStage(s, scene);
      break;
    case 'thirdHypnoStage':
      enterThirdHypnoStage(s, scene);
      break;
    case 'sleepProblems':
      enterSleepProblems(s, scene);
      break;
    case 'hypnoResist':
      enterHypnoResist(s, scene);
      break;
    case 'hypnoFuckThroat':
      enterHypnoFuckThroat(s, scene);
      break;
    case 'hypnoSitSuck':
      enterHypnoSitSuck(s, scene);
      break;
    case 'hypnoForceSuck':
      enterHypnoForceSuck(s, scene);
      break;
    case 'hypnoSuck':
      enterHypnoSuck(s, scene);
      break;
    case 'fuck':
      enterFuck(s, scene);
      break;
    case 'hypnoFuck':
      enterHypnoFuck(s, scene);
      break;
    case 'hypnoAnal':
      enterHypnoAnal(s, scene);
      break;
    case 'hypnoDress':
      enterHypnoDress(s, scene);
      break;
    case 'hypnoEnd':
      enterHypnoEnd(s, scene);
      break;
    case 'hypnoRandom':
      enterHypnoRandom(s, scene);
      break;
    case 'hypnoPerv':
      enterHypnoPerv(s, scene);
      break;
    case 'toldMomPregnantAndReturned':
      enterToldMomPregnantAndReturned(s, scene);
      break;
    case 'hypnoProstitute':
      enterHypnoProstitute(s, scene);
      break;
    case 'therapistFucked':
      enterTherapistFucked(s, scene);
      break;
    case 'pavlov':
      enterPavlov(s, scene);
      break;
    case 'restTherapyVariables':
      enterRestTherapyVariables(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const therapist: LocationDef = {
  name: 'therapist',
  title: 'Therapist',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
