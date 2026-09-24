import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/courthouse.jpg');
  scene.text('You\'re standing in the middle of the Greco-Roman inspired courthouse, the bastion of justice for the city of St. Petersburg.');
  scene.text('There are many statues of political and legal figures in the region going right back to a bust of Catherine the Great.');
  if (((s as any).policeQW_courthearing_dates ?? 0)[0] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 7  &&  ((s as any).hour ?? 0) < 11) {
    scene.actions([
      { label: 'Go to your hearing', goto: ['sentence', 'hearing'] },
    ]);
  }
  if (((s as any).AlexandriaQW ?? 0) === 13) {
    scene.actions([
      { label: 'Look for Filipp Kudashov\'s office', goto: ['alexandriaEv', 'filipp'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterHearing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/entrance.jpg');
  scene.text('You walk into the courthouse, dragging your legs as you join the queue of people waiting to head through the body scanner. You patiently await your turn before heading through to the reception area.');
  // TODO-QSP: dynamic text: "Hello, my name is <<$pcs_firstname>> <<$pcs_lastname>>. I got this summon in th...
  scene.text(`"Hello, my name is ${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}. I got this summon in the mail," you tell a woman sitting at the desk.`);
  scene.text('She tells you to hand it over and looks through it. "Okay, head to courtroom number 5 and they\'ll call you in when it\'s your turn."');
  scene.text('You nervously nod before finding your way to the designated courtroom.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Head to the courtroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/court/courtroom.jpg');
    scene.text('You end up getting lost and spending some time searching for the correct courtroom, asking several people where the room is located. Thankfully, they\'re really helpful and point you in the right direction.');
    scene.text('Before opening the door, you take a deep breath as you try to shake off the nervousness. Steeling yourself, you grab the handle and push the door…');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/shared/court/wait.jpg');
    scene.text('Hardly anyone pays any attention to you as you walk in as there\'s already a sentencing in process. You take a seat and wait for what feels like an eternity, listening to case after case before you.');
    scene.text('You try your best to listen to some of the defenses, hoping you can pick up something useful before seeing the judge, but it doesn\'t take long before you lose focus and dream yourself away.');
    scene.text('Your daydreaming is suddenly interrupted when you hear your name being called out. Startled, you quickly let the whole room know that you\'re here as you hear some people quietly let out a laugh.');
    scene.actions([
      { label: 'Stand in front of the judge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    qspGoto(st, 'court_sentence_events', 'judge_start', (((st as any).policeQW_courthearing_subjects ?? 0)?.[0] ?? 0));
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPunishment(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/sentence.jpg');
  // TODO-QSP: dynamic text: The judge looks sternly at you. "You''ve caused quite ruckus, Miss <<$pcs_lastna...
  scene.text(`The judge looks sternly at you. "You've caused quite ruckus, Miss ${((s as any).pcs_lastname ?? '')}. The law is quite stern, even when it comes to petty crimes."`);
  scene.text('You tremble a little in fear as he continues. "With that said, I believe in a more soft approach and that you can improve yourself by learning from your mistakes."');
  scene.text('You meekly nod and feel a little relieved.');
  qspCall(s, 'court_sentence_events', 'punishment_start', (((s as any).policeQW_courthearing_subjects ?? 0)?.[0] ?? 0));
  ((s as any).policeQW = (s as any).policeQW ?? {})['fine_deadline'] = ((s as any).policeQW['fine_deadline'] ?? 0) + (14);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the court', goto: ['city_center', '', 'mom_check'] },
  ]);
  scene.build();
}

function enterPoliceArrest(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_arrest = ((s as any).locArgs?.[1] ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/police/police_door.jpg');
  scene.text('There\'s a loud knock at the door and you open it to see two police officers standing in the hallway.');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, you''re under arrest!" one of them bellow...
  scene.text(`"${((s as any).pcs_firstname ?? '')} ${((s as any).pcs_lastname ?? '')}, you're under arrest!" one of them bellows.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'What?', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/shared/police/police_arrested.jpg');
    scene.text('"What?! Why?!" you ask in utter disbelief.');
    scene.text('One of them holds up a piece of paper for you to read. "This is a warrant for your arrest for failure to show up for court."');
    scene.text('You only get to read part of it before he puts it away. It seems like all those letters you got about attending court weren\'t a joke…');
    scene.text('The other officer handcuffs your hands behind your back and they escort you down to their car. They roughly shove you in the backseat before driving you to the police station, where they remove your cuffs and throw you in a holding cell.');
    scene.actions([
      { label: 'The next morning', handler: (st: GameState) => {
    if ((!((st as any).temp_arrest ?? 0))) {
      qspGoto(st, 'sentence', 'police_arrest1');
    } else {
      if (((st as any).temp_arrest ?? 0) === 1) {
        qspGoto(st, 'sentence', 'police_arrest2');
      } else {
        qspGoto(st, 'sentence', 'police_arrest3');
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPoliceArrest1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/judge.jpg');
  scene.text('You\'re taken out of holding and over to the courthouse to await your hearing.');
  // TODO-QSP: dynamic text: "It seems you''ve missed your hearings, Miss <<$pcs_lastname>>. What do you have...
  scene.text(`"It seems you've missed your hearings, Miss ${((s as any).pcs_lastname ?? '')}. What do you have to say for yourself?" the rather stern looking judge asks.`);
  scene.text('You look around, trying to come up with an excuse, but in the end you decide it\'s best to own up.');
  scene.text('"I have no excuse, your honor…" you meekly answer.');
  // TODO-QSP: policeQW_courthearing_dates[] = -daystart
  // TODO-QSP: $policeQW_courthearing_subjects[] = $mid($policeQW_courtletter_subjects[0], 14)
  if (Object.keys((s as any).policeQW_courthearing_dates ?? {}).length > 1) {
    qspCall(s, 'array', 'coupled_sort', 'policeQW_courthearing_dates', '$policeQW_courthearing_subjects');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Await punishment', goto: ['sentence', 'punishment'] },
  ]);
  scene.build();
}

function enterPoliceArrest2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/judge.jpg');
  scene.text('You\'re taken out of holding and over to the courthouse to await your hearing.');
  // TODO-QSP: dynamic text: "You''ve been refusing to pay your fines, Miss <<$pcs_lastname>>. What do you ha...
  scene.text(`"You've been refusing to pay your fines, Miss ${((s as any).pcs_lastname ?? '')}. What do you have to say for yourself?" the rather stern looking judge asks.`);
  scene.text('You begin to look around, trying to come up with an excuse, but in the end you decide it\'s best to own up.');
  scene.text('"I have no excuse, your honor…" you meekly answer.');
  scene.text('Their eyes piercing through you, the judge clears their throat. "I see. You have thirty days to pay your fine. If you fail to do so, you will be arrested again and given a prison sentence."');
  scene.text('You silently nod that you understand.');
  ((s as any).policeQW = (s as any).policeQW ?? {})['fine_deadline'] = Math.max((((s as any).policeQW ?? 0)?.['fine_deadline']), ((s as any).daystart ?? 0) + 30);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the court', goto: ['city_center', '', 'mom_check'] },
  ]);
  scene.build();
}

function enterPoliceArrest3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/shared/court/judge.jpg');
  scene.text('You\'re taken out of holding and over to the courthouse to await your hearing.');
  // TODO-QSP: dynamic text: "Do you believe yourself to be above the law, Miss <<$pcs_lastname>>? I can assu...
  scene.text(`"Do you believe yourself to be above the law, Miss ${((s as any).pcs_lastname ?? '')}? I can assure you that you are not. I sentence you to one year in prison."`);
  scene.text('You just nod in silence before you\'re hauled away to serve your time.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'gameover', 'check', 14);
    ((st as any).policeQW = (st as any).policeQW ?? {})['arrest_gameover_flag'] = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'hearing':
      enterHearing(s, scene);
      break;
    case 'punishment':
      enterPunishment(s, scene);
      break;
    case 'police_arrest':
      enterPoliceArrest(s, scene);
      break;
    case 'police_arrest1':
      enterPoliceArrest1(s, scene);
      break;
    case 'police_arrest2':
      enterPoliceArrest2(s, scene);
      break;
    case 'police_arrest3':
      enterPoliceArrest3(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sentence: LocationDef = {
  name: 'sentence',
  title: 'You\'re standing in the middle of the Greco-Roman inspired co',
  region: 'other',
  enter: enter,
};
