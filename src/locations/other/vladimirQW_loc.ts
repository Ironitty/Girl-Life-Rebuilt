import { qspCall, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Man</b></center>');
  scene.img('images/characters/city/vladimir/001.jpg');
  if (((s as any).pcs_makeup ?? 0) > 1  &&  ((s as any).pcs_hairbsh ?? 0) === 1) {
    scene.text('A man standing near the fence noticed your gaze and smiled.');
    scene.actions([
      { label: 'Approach the man', handler: (st: GameState) => {
    scene.text('You approach the man and he leaves the fence to walk towards you.');
    qspGoto(st, 'vladimirQW_loc', 'qwvladdy');
  } },
      { label: 'Smile', handler: (st: GameState) => {
    scene.text('You smile at the man and he leaves the fence to walk towards you.');
    qspGoto(st, 'vladimirQW_loc', 'qwvladdy');
  } },
      { label: 'Ignore', handler: (st: GameState) => {
    scene.text('You decide to ignore the man and start walking away but hearing his footsteps behind you, you turn back around.');
    qspGoto(st, 'vladimirQW_loc', 'qwvladdy');
  } },
    ]);
  } else {
    scene.text('The man returns your gaze for a moment before turning away.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
    ]);
  }
  scene.build();
}

function enterQwvladdy(s: GameState, scene: SceneBuilder): void {
  scene.text('The man smiles at you. "My name is Vladimir. I couldn\'t help but admire your beauty. Would you allow me the honor of your name?"');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterQwnamedy(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Sorry, I\'m busy', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 1;
    scene.text('"Sorry, I\'m busy," you excuse yourself.');
    scene.text('Vladimir shakes his head to that. "Well, what are you busy with? I will not bite. I would just like to know the name of a beautiful, young lady."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterQwnamedy(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Leave anyway', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 2;
    scene.text('You turn away from the man with a roll of your eyes and leave.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQwnamedy(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(((s as any).pcs_nickname ?? '') ?? ''), handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 10;
    scene.text(`"${((st as any).pcs_nickname ?? '')}," you introduce yourself.`);
    scene.text('Vladimir smiled. "A beautiful name that suits you perfectly. Unfortunately I have to go, but I would like to see you again. If you leave me your phone number, I could call you tomorrow. I could take you out to dinner at a restaurant."');
    scene.actions([
      { label: 'No (Go)', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 2;
    scene.text('You decline and walk away, leaving the man standing.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
    ]);
  } },
      { label: 'Give him your number', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 20;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'AddContact', 'A108', 'icon_na', 1);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17');
    qspCall(st, 'stat', '');
    scene.text('You tell Vladimir your phone number and he writes it down in a small notebook with a leather cover.');
    scene.actions([
      { label: 'Leave', goto: ['city_park', 'luna'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`You answer the phone to hear a male voice speaking, "Hello ${((s as any).pcs_nickname ?? '')}, this is Vladimir. We met at the park, if you remember?"`);
  scene.actions([
    { label: 'Hello, of course I remember', handler: (st: GameState) => {
    scene.text('"Hey, of course I remember. How could I forget?" You respond.');
    scene.text('"The offer to take you to dinner at the restaurant is still on the table. Would you like to go?" Vladimir asks.');
    scene.actions([
      { label: 'Oh, I have a lot to do today, I\'m sorry.', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 20;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('You explain that you simply can\'t today, as busy as you are.');
    scene.text('\'"Okay. Then I\'ll call you tomorrow at 16:00." Vladimir promises.\'');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'I wouldn\'t mind', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 21;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('"I would like that," you tell him.');
    scene.text('\'"Wonderful!" says Vladimir. "Then I\'ll meet you at the restaurant in the city center at 20:00."\'');
    scene.text('"I\'ll see you then!"');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`You answer the phone to hear a male voice on the other end, "Hello ${((s as any).pcs_nickname ?? '')}, this is Vladimir. I happen to own a boat and wondered if you would like a ride on it?"`);
  scene.actions([
    { label: 'Oh, I have a lot to do today, I\'m sorry', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('You explain that you simply can\'t today, as busy as you are.');
    scene.text('"Okay. Then I\'ll call you another time." Vladimir promises.');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'I\'d like that', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 30;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('"I\'d like that." you tell him.');
    scene.text('You can hear that Vladimir\'s pleased over the phone. "Wonderful, my driver will come to pick you up."');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`You pick up the phone to hear a male voice speaking, "Hello ${((s as any).pcs_nickname ?? '')}, it's Vladimir. I was wondering if you have time to meet up?"`);
  scene.actions([
    { label: 'Oh, I have a lot to do today, I\'m sorry', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('You explain that you simply can\'t today, as busy as you are.');
    scene.text('"Okay. Then I\'ll call you another day." Vladimir promises.');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'I\'d like that', handler: (st: GameState) => {
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['stage'] = 40;
    ((st as any).vladimirQW = (st as any).vladimirQW ?? {})['day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'telefon', 'SetInCallSchedule', 'A108', 'gs \'vladimirQW_loc\', \'telephone_call\'', 'vladimirQW[\'day\'] ! daystart and hour >= 15 and hour <= 17 and week = 6');
    scene.text('"I\'d like that." you tell him.');
    scene.text('You can hear that Vladimir\'s pleased over the phone. "Wonderful, my driver will come to pick you up."');
    scene.actions([
      { label: 'Hang up', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTelephoneCall(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'telefon', 'phone_ring');
  if (((s as any).vladimirQW ?? 0)?.['stage'] === 20  ||  ((s as any).vladimirQW ?? 0)?.['stage'] === 21) {
    qspGoto(s, 'vladimirQW_loc', '2');
  } else {
    if (((s as any).vladimirQW ?? 0)?.['stage'] === 25  ||  ((s as any).vladimirQW ?? 0)?.['stage'] === 30) {
      qspGoto(s, 'vladimirQW_loc', '3');
    } else {
      if (((s as any).vladimirQW ?? 0)?.['stage'] === 35  ||  ((s as any).vladimirQW ?? 0)?.['stage'] === 40) {
        qspGoto(s, 'vladimirQW_loc', '4');
      } else {
        qspGoto(s, 'vladimirQW_loc', '4');
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'event_outdoors';
  const arg = s.locArg;
  switch (arg) {
    case 'qwvladdy':
      enterQwvladdy(s, scene);
      break;
    case 'qwnamedy':
      enterQwnamedy(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case 'telephone_call':
      enterTelephoneCall(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const vladimirQW_loc: LocationDef = {
  name: 'vladimirQW_loc',
  title: 'Man',
  region: 'other',
  locationType: 'event_outdoors',
  description: ['A man standing near the fence noticed your gaze and smiled.'],
  enter: enter,
};
