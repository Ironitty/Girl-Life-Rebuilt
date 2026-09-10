import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLeave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1) {
    (s as any).trait_vars['sensitivity_override'] = 0;
  }
  // TODO-QSP: gt $ARGS[1], $ARGS[2]
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/system/image_needed.png');
  scene.text('As you make your way over, the nurse stops you. "Since it\'s your first time seeing him, I just need you to fill out a few forms first, consent mostly. NDA\'s and Patient/Doctor stuff.');
  scene.text('Please make sure you read everything. We can\'t have you filing lawsuits or suing us for things that you agreed to" she says and hands you a clipboard and a few forms.');
  scene.actions([
    { label: 'Read the Forms', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('It\'s all basic stuff, mainly asking for medical information, past experiences, issues with meds, things like that. You spend a good few minutes skimming it over and you see some really fine print at the bottom that reads:');
    scene.text('<sub>"… one service that is offered is hypnosis. Should you wish to use this, the clinic is not responsible for anything that may happen to you. If you start having issues with anything due to the hypnosis, I.E. barking like a dog on the full moon, kissing horses in the lips, becoming a bride to a 90 year old man whose only goal is to turn you into his personal breeding stock, or even changing your sexual preference. These are just hypotheicals, mind you…"</sub>');
    scene.text('You find this kind of funny. stuff like that doesn\'t exist right?… Right? You fill out the form and on the last page you see a note, as if it was written on a sticky note before it was photocopied.');
    scene.text('<i>"If you are reading this, know that going down this path is a one-way trip into a realm of pleasure, enthrallement, pregnancy, and marriage. If you agree to this form, you take full ownership that whatever happens is your fault and no one else\'s. Understand this before signing. This is your only warning."</i>');
    scene.text('You feel as if this was placed for you and only you, the nurse would have noticed this long before you ever showed up. Do you sign?');
    scene.actions([
      { label: 'Sign the page', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/system/image_needed.png');
    scene.text('You sign the last page of the packet and then take it back to the nurse. She looks it over and somehow doesn\'t seem to notice or care about the note on the back of it. She stands up and says. "Everything looks good. Please follow me" she says and takes you to the Therapists room.');
    scene.actions([
      { label: 'Enter the Therapist\'s Office', handler: (st: GameState) => {
    (s as any).therapistQW['met'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['therapist', 'start'] },
    ]);
  } },
      { label: 'Throw the forms away and leave', handler: (st: GameState) => {
    // TODO-QSP: delact $selact
    scene.actions([
      { label: 'Permanently disable the therapist', handler: (st: GameState) => {
    (s as any).therapistQW['met'] = (-1);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'therapist', 'leave', 'pav_clinic');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Give up and try again later', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'therapist', 'leave', 'pav_clinic');
  } },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).therapistFuckedPussy = 0;
  (s as any).therapistFuckedAss = 0;
  (s as any).therapistFuckedMouth = 0;
  scene.text('<center><b>Therapist</b></center>');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  scene.img('images/locations/pavlovsk/clinic/therapist/room.jpg');
  scene.text('Stepping into the office of <a href="exec:gs \'therapist\', \'pavlov\'">Dr. Pavlov</a>, you are welcomed with a warm smile.');
  scene.text('When you look around the room, you are greeted by a warm and inviting atmosphere. The room is illuminated by large windows that overlook the forest beyond. At one end of the room there is a desk with a chair stacked with folders and books pertaining to hypnotherapy and other therapy materials. This includes a laptop that is closed and appears clean, as if it has been seldom used. You see an older <a href="exec: VIEW \'images/locations/pavlovsk/clinic/therapist/pavlovfamily.jpg\'">photograph of Dr. Pavlov\'s family</a> in which he appears to be about two decades younger.');
  qspCall(s, 'stat', '');
  if (((s as any).therapist_weekly_block ?? 0) === 0  ||  ((s as any).cheatVars ?? 0)?.['therapist_schedule'] > 0) {
    qspCall(s, 'therapist', 'hypnoGreet');
  } else {
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, too much treatment without time for your brain to proce...
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, too much treatment without time for your brain to process could be harmful.`);
    scene.text('Come next week, we can talk about your problems then."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'therapist', 'leave', ((st as any).loc ?? 0));
  } },
    ]);
  }
  scene.build();
}

function enterHypnoGreet(s: GameState, scene: SceneBuilder): void {
  (s as any).therapistday = ((s as any).daystart ?? 0);
  (s as any).therapist_weekly_block = 1;
  if (((s as any).succubusflag ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Come in, Miss <<$pcs_lastname>>! Please, tell me what can I help you with today...
    scene.text(`"Come in, Miss ${((s as any).pcs_lastname ?? 0)}! Please, tell me what can I help you with today?"`);
    qspCall(s, 'therapist', 'therapyOptions');
  } else {
    // TODO-QSP: dynamic text: "Come in, Miss <<$pcs_lastname>>! Please, tell me what can I help you with today...
    scene.text(`"Come in, Miss ${((s as any).pcs_lastname ?? 0)}! Please, tell me what can I help you with today?"`);
    qspCall(s, 'therapist', 'therapyOptions');
    if (((s as any).hypnoFlashGreet ?? 0) === 0) {
      // TODO-QSP: dynamic text: "Come in! Miss <<$pcs_lastname>>, as you know, I'm going to inspect you now."
      scene.text(`"Come in! Miss ${((s as any).pcs_lastname ?? 0)}, as you know, I'm going to inspect you now."`);
      scene.actions([
        { label: 'Wait for him to inspect you', handler: (st: GameState) => {
    if (((s as any).underwear ?? 0)?.['type'] === 2) {
      (s as any).wornPanties = ((s as any).wornPanties ?? 0) + (1);
      scene.img('images/locations/pavlovsk/clinic/therapist/pavlov.jpg');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, a bodysuit?"
      scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, a bodysuit?"`);
      scene.text('You remain silent.');
      scene.text('"That\'s cheating and I will count it as panties."');
      scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
      scene.text('He interrupts you and commands you to strip off your bodysuit and hand it to him.');
      qspCall(s, 'mood', 'lower', 'large');
      scene.actions([
        { label: 'Give Dr. Pavlov your bodysuit', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(s, 'underwear_bodysuits', 'dispose');
    if (((s as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your bodysuit in the garbage. "Just don't let it happen again. What di...
      scene.text(`He throws your bodysuit in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((s as any).pcs_lastname ?? 0)}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((s as any).pcs_lastname ?? 0)}?`);
    }
    qspCall(s, 'therapist', 'therapyOptions');
  } },
      ]);
    } else {
      (s as any).wornPanties = ((s as any).wornPanties ?? 0) + (1);
      scene.img('images/locations/pavlovsk/clinic/therapist/checkPanties2.mp4');
      // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, what is this?"
      scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, what is this?"`);
      scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
      scene.text('He interrupts you and commands you to strip off your panties and hand them to him.');
      qspCall(s, 'mood', 'lower', 'large');
      scene.img('images/locations/pavlovsk/clinic/therapist/checkPanties.mp4');
      // TODO-QSP: dynamic text: "Very good Miss <<$pcs_lastname>>. I see you are very well mannered."
      scene.text(`"Very good Miss ${((s as any).pcs_lastname ?? 0)}. I see you are very well mannered."`);
      scene.text('"Thank you Dr. Pavlov."');
      if (((s as any).hypnoTouchWhenever ?? 0) === 1  &&  Math.floor(Math.random() * 2) + 1 === 1) {
        scene.actions([
          { label: 'Get groped', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/gropePussy.jpg');
    // TODO-QSP: dynamic text: "Very good Miss <<$pcs_lastname>>. What was it you needed help with today?"
    scene.text(`"Very good Miss ${((s as any).pcs_lastname ?? 0)}. What was it you needed help with today?"`);
    qspCall(s, 'therapist', 'therapyOptions');
  } },
        ]);
      } else {
        scene.text('"Now what was it you needed help with today?"');
        qspCall(s, 'therapist', 'therapyOptions');
      }
      scene.actions([
        { label: 'Give Dr. Pavlov your panties', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(s, 'panties', 'dispose');
    if (((s as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your panties in the garbage. "Just don't let it happen again. What did...
      scene.text(`He throws your panties in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((s as any).pcs_lastname ?? 0)}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((s as any).pcs_lastname ?? 0)}?`);
    }
    qspCall(s, 'therapist', 'therapyOptions');
  } },
      ]);
    }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Come in! Miss <<$pcs_lastname>>, you remember your manners yes?"
      scene.text(`"Come in! Miss ${((s as any).pcs_lastname ?? 0)}, you remember your manners yes?"`);
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        (s as any).wornPanties = ((s as any).wornPanties ?? 0) + (1);
        scene.actions([
          { label: 'Lift your skirt for Dr. Pavlov', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/showPanties.mp4');
    // TODO-QSP: dynamic text: "Miss <<$pcs_lastname>>, what is this?"
    scene.text(`"Miss ${((s as any).pcs_lastname ?? 0)}, what is this?"`);
    scene.text('"I\'m sorry Dr. Pavlov… I don\'t know what I was thinking. I-"');
    scene.text('He interrupts you and commands you to strip off your panties and hand them to him.');
    qspCall(s, 'mood', 'lower', 'large');
    scene.actions([
      { label: 'Give Dr. Pavlov your panties', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/clinic/therapist/removePanties.jpg');
    qspCall(s, 'panties', 'dispose');
    if (((s as any).wornPanties ?? 0) < 5) {
      // TODO-QSP: dynamic text: He throws your panties in the garbage. "Just don't let it happen again. What did...
      scene.text(`He throws your panties in the garbage. "Just don't let it happen again. What did you need help with today, Miss ${((s as any).pcs_lastname ?? 0)}?"`);
    } else {
      // TODO-QSP: dynamic text: You are still resisting ha? We need to fix that. Anyway, What did you need help ...
      scene.text(`You are still resisting ha? We need to fix that. Anyway, What did you need help with today Miss ${((s as any).pcs_lastname ?? 0)}?`);
    }
    qspCall(s, 'therapist', 'therapyOptions');
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Show Dr. Pavlov your bare pussy', handler: (st: GameState) => {
    scene.img(`images/locations/pavlovsk/clinic/therapist/showPussy${Math.floor(Math.random() * 7) + 1}.jpg`);
    scene.text('You show your bare pussy to Dr. Pavlov and wait for his response.');
    scene.text('…');
    if (((s as any).pcs_horny ?? 0) >= 75  &&  ((s as any).pcs_horny ?? 0) <=89) {
      // TODO-QSP: dynamic text: Miss <<$pcs_lastname>>, your pussy is very wet… How can I help you today?
      scene.text(`Miss ${((s as any).pcs_lastname ?? 0)}, your pussy is very wet… How can I help you today?`);
    } else {
      // TODO-QSP: dynamic text: Miss <<$pcs_lastname>>, your pussy is soaking wet… How can I help you today?
      scene.text(`Miss ${((s as any).pcs_lastname ?? 0)}, your pussy is soaking wet… How can I help you today?`);
      (s as any).randomFlashGreetResponse = Math.floor(Math.random() * 3) + 1;
      if (((s as any).randomFlashGreetResponse ?? 0) === 1) {
        // TODO-QSP: dynamic text: "Ah, very nice pussy Miss <<$pcs_lastname>>. What was it you wanted help with to...
        scene.text(`"Ah, very nice pussy Miss ${((s as any).pcs_lastname ?? 0)}. What was it you wanted help with today?"`);
      } else {
        // TODO-QSP: dynamic text: "I see you didn't wear panties today Miss <<$pcs_lastname>>. Very good. What was...
        scene.text(`"I see you didn't wear panties today Miss ${((s as any).pcs_lastname ?? 0)}. Very good. What was it you wanted help with today?"`);
        if (((s as any).randomFlashGreetResponse ?? 0) === 3) {
          // TODO-QSP: dynamic text: "Well done Miss <<$pcs_lastname>>, your pussy looks great. What was it you wante...
          scene.text(`"Well done Miss ${((s as any).pcs_lastname ?? 0)}, your pussy looks great. What was it you wanted help with today?"`);
        } else {
          // TODO-QSP: dynamic text: "You are well mannered Miss <<$pcs_lastname>>. What can I help you with?"
          scene.text(`"You are well mannered Miss ${((s as any).pcs_lastname ?? 0)}. What can I help you with?"`);
        }
      }
      qspCall(s, 'therapist', 'therapyOptions');
    }
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
    default:
      enterLeave(s, scene);
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
