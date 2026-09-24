import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).job_title ?? 0)?.['city_diner_secretary'] === '') {
    qspCall(s, 'jobs', 'get_job_definition', 'city_diner_secretary');
  }
  if (((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0) < ((s as any).job_start_time ?? 0)?.['city_diner_secretary']) {
    (s as any).hour = (((s as any).job_start_time ?? {})?.['city_diner_secretary'] ?? 0) / 60;
    (s as any).minut = (((s as any).job_start_time ?? {})?.['city_diner_secretary'] ?? 0) % 60;
  }
  qspCall(s, 'jobs', 'clock', 'city_diner_secretary');
  qspCall(s, 'BurgerTip', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/diner/work.jpg');
  scene.text('You sit in front of Anatoly Borisovich\'s office.');
  if (qspFunc(s, 'jobs', 'is_work_time', 'city_diner_secretary') === 1) {
    scene.actions([
      { label: 'Work until lunchtime', handler: (st: GameState) => {
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['WorkShift'] = 1;
    (st as any).minut = ((st as any).minut ?? 0) + (60 * 2);
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/diner/work.jpg');
    scene.text('You sit at the table and begin to prepare the agreement on the computer.');
    if (((st as any).BurgerQW ?? 0)?.['TerminalTask'] === 1) {
      ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['TerminalTask'] = 0;
      scene.text('Anatoly Borisovich scolds you for not getting documents to the storage terminal, disrupting supplies.');
    } else {
      if (((st as any).BurgerQW ?? 0)?.['TerminalTask'] === 2) {
        ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['TerminalTask'] = 0;
        scene.text('Anatoly Borisovich thanks you for delivering the documents to the storage terminal.');
      }
    }
    if (((st as any).BurgerQW ?? 0)?.['BankTask'] === 1) {
      ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['BankTask'] = 0;
      scene.text('Anatoly Borisovich chastises you for not taking the documents to the bank.');
    } else {
      if (((st as any).BurgerQW ?? 0)?.['BankTask'] === 2) {
        ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['BankTask'] = 0;
        scene.text('Anatoly Borisovich thanks you for delivering the documents to the bank.');
      }
    }
    if (((st as any).BurgerQW ?? 0)?.['SaunaWhoreKnown'] === 1  ||  ((st as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] === 1) {
      scene.text('Anatoly Borisovich comes into your office and puts the paper in front of you with a pen. "Write up your resignation. I don\'t need a secretary with a past like yours."');
      scene.actions([
{ label: 'Write a statement of resignation', handler: (st: GameState) => {
    (st as any).pay = qspFunc(s, 'jobs', 'paycheck', 'city_diner_secretary');
    qspCall(st, 'jobs', 'set_fired', 'city_diner_secretary');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: You write a statement of resignation and quickly get it signed by your boss. He ...
    scene.text(`You write a statement of resignation and quickly get it signed by your boss. He writes out a paycheck of ${qspFunc(s, 'money', 'string_profit', ((st as any).pay ?? ''))} to you says, "It's over ${((st as any).pcs_nickname ?? '')}, get out of here."`);
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
]);
      return;
    }
    qspCall(st, 'BurgerTip', 'work');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'food', 'fast_food');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get back to work', goto: ['burgerWork', 'work3'] },
  ]);
  scene.build();
}

function enterWork2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] >= 6  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWBJFilmed'] > 0) {
    (s as any).kobl = 0;
    (s as any).kobl2 = 2;
  } else {
    if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] >= 6  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWBJFilmed'] === 0) {
      (s as any).kobl = 0;
      (s as any).kobl2 = 2;
    } else {
      if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] < 6) {
        (s as any).kobl = 0;
        (s as any).kobl2 = 1;
      }
    }
  }
  (s as any).komblrand = (Math.floor(Math.random() * (((s as any).kobl2 ?? 0) - ((s as any).kobl ?? 0) + 1)) + (((s as any).kobl ?? 0)));
  if (((s as any).BurgerQW ?? 0)?.['IlyQWBlackmail'] >= 2) {
    if ((!((s as any).komblrand ?? 0))) {
      scene.text('After work, you are about to leave the bistro, but Ilyushkin stops you. "Where are you going, baby? Want to suck my dick?"');
      qspCall(s, 'willpower', 'bj', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'BurgerTip', 'work4');
  } },
        ]);
      }
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A76');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A76', 1);
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['IlyQWBlackmail'] = ((st as any).BurgerQW['IlyQWBlackmail'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilybj.jpg');
    scene.text('Ilyushkin takes you around the corner to a dirty alley behind the bistro. It smells like urine. He pulls his member out of his pants. "Put it in your mouth and show me what you can do." You squat in front of Ilyushkin and take his penis in your mouth. It tastes salty and unwashed. You start to suck actively trying to make Ilyushkin finish as quickly as possible. Finally Ilyushkin lets out a moan starts to cum in your mouth. You quickly swallow while looking around, hoping no one saw you. Once you swallowed his cum, Ilyushkin puts his cleaned up dick in his pants "That was average. You can do better. Now get out of here!"');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).komblrand ?? 0) === 1) {
        scene.text('After work, you are about to leave the bistro, but Ilyushkin stops you. "Where are you going, baby? Want to suck my dick?"');
        qspCall(s, 'willpower', 'bj', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'BurgerTip', 'work4');
  } },
          ]);
        }
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A76');
    qspCall(st, 'cum_call', 'mouth_swallow', 'A76', 1);
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['IlyQWBlackmail'] = ((st as any).BurgerQW['IlyQWBlackmail'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilybjcar.jpg');
    // TODO-QSP: dynamic text: Ilyushkin takes you to his car standing in the alley. He gets behind the wheel a...
    scene.text(`Ilyushkin takes you to his car standing in the alley. He gets behind the wheel and you sit next to him. Ilyushkin gets his dick out of his pants and grabs you by the hair pulling your face to his groin until his cock is buried in your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips. You open your mouth and allow the member to enter between your lips. You are trying to suck hard, using your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips on the penis so Ilyushkin would be finished quickly. Ilyushkin's body finally jerks and he finishes in your mouth. You continue to suck his dick swallowing the sperm without spilling a drop. Ilyushkin tucks his dick back in his pants and says, "Okay cocksucker, get out."`);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['city_center', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).komblrand ?? 0) === 2) {
          scene.text('After work, you are about to leave the bistro, but Ilyushkin stops you. "Where are you going, baby? Want to suck my dick?"');
          qspCall(s, 'willpower', 'bj', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'BurgerTip', 'work4');
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['IlyQWBlackmail'] = ((st as any).BurgerQW['IlyQWBlackmail'] ?? 0) + (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/car.jpg');
    scene.text('Ilyushkin takes you to his car standing in the alley. He gets behind the wheel and you sit next to him. Ilyushkin starts the car and drives you to the city industrial region. "Don\'t forget baby. As long as you continue to serve me you have a job and prospects, but if you piss me off, I will take everything from you." As soon as you come to a new building, Ilyushkin parks his car in a free space. You get out and go with Ilyushkin to a staircase. The lift takes you up to Ilyushkin\'s apartment and he opens the door for you. Without hesitation Ilyushkin takes you by the hand and leads you to his bedroom. He sits down on the bed and takes out a camera. Ilyushkin gets his dick out of his pants and says, "Now suck it baby. And give it your all, I don\'t want the video to be bad."');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'BurgerTip', 'work4');
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    ((st as any).BurgerQW = (st as any).BurgerQW ?? {})['IlyQWBJFilmed'] = ((st as any).BurgerQW['IlyQWBJFilmed'] ?? 0) + (1);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilybjfilm.jpg');
    // TODO-QSP: dynamic text: You get down on your knees in front of Ilyushkin and clasp his member with your ...
    scene.text(`You get down on your knees in front of Ilyushkin and clasp his member with your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips. Ilyushkin films you using his camera to get a closeup of you sucking his cock. After a while he lies you down on his couch and sits on your chest to make sure his cock is right in front of your face.`);
    scene.actions([
      { label: 'Suck', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilybjfilm2.jpg');
    scene.text('Sitting on top of you Ilyushkin starts to fuck your mouth sticking is member in your throat as far as possible. You suck diligently trying not to choke as Ilyushkin is filming you the whole time. Finally he takes his dick out of your mouth.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Open your mouth', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'boyStat', 'A76');
    qspCall(st, 'cum_call', 'face', 'A76', 1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ilyushkin/sex/ilybjfilm3.jpg');
    // TODO-QSP: dynamic text: Ilyushkin begins to finish on your <<$pc_desc[''lips'']>> lips. Cum drips from y...
    scene.text(`Ilyushkin begins to finish on your ${((st as any).pc_desc ?? 0)?.['lips'] ?? ''} lips. Cum drips from your lips on your chin and chest. Ilyushkin finally turns the camera off and puts it away in a drawer. "Not bad. You did what you were required. Wash up and then get out."`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).cumspclnt = 12;
    qspCall(st, 'cum_cleanup', '');
  }, goto: ['city_industrial', ''] },
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
    return;
  }
  qspGoto(s, 'burger', 'start');
  // TODO-QSP: end
  scene.build();
}

function enterWork3(s: GameState, scene: SceneBuilder): void {
  ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['WorkShift'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).minut = ((s as any).minut ?? 0) + (60 * 4);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/diner/work.jpg');
  scene.text('You sit down and start preparing the contract on the computer.');
  qspCall(s, 'BurgerTip', 'work');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'work2':
      enterWork2(s, scene);
      break;
    case 'work3':
      enterWork3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const burgerWork: LocationDef = {
  name: 'burgerWork',
  title: 'You sit in front of Anatoly Borisovich\'s office.',
  region: 'other',
  enter: enter,
};
