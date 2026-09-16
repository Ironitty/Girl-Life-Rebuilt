import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSultan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'telefon', 'AddContact', 'A295', 'images/locations/city/shared/fightclub/sultan_portrait.jpg', 0);
  // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A295', "gt 'fightClub_phone', 'dial'", "fightClubQW['sultancall...
  // TODO-QSP: end
  scene.build();
}

function enterDial(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['sultancall'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  qspCall(s, 'telefon', 'phone_ring');
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('The dial tone sounds. You wait. The whole thing still sounds dubious, but the man has made an impression on you. He seemed sincere to you - and a little sad. And he said that you could make a lot of money and - it doesn\'t cost anything to ask, does it?');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 20  &&  ((s as any).fightClubQW ?? 0)?.['story'] === 2) {
    scene.actions([
      { label: 'You wait', goto: ['fightClub_phone', 'invitation'] },
    ]);
  } else {
    if (((s as any).week ?? 0) === 7  &&  (((s as any).hour ?? 0) >= 21  ||  ((s as any).hour ?? 0) < 8)) {
      scene.actions([
        { label: 'You wait', goto: ['fightClub_phone', 'outofoffice'] },
      ]);
    } else {
      scene.actions([
        { label: 'Hang up (no reply)', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterInvitation(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightClubQW = (s as any).fightClubQW ?? {})['story'] = 3;
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('After a short time, a male voice answers: "Who is this?"');
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, you spoke to me at the Havana Gym."
  scene.text(`"${((s as any).pcs_nickname || '')}, you spoke to me at the Havana Gym."`);
  // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>, I knew you were smart. I'm glad you called."
  scene.text(`"Ah, ${((s as any).pcs_nickname || '')}, I knew you were smart. I'm glad you called."`);
  scene.text('"You said we could talk, and I have some questions."');
  scene.text('"Sure, but not on the phone, sweetie. I have an office in the industrial area. You can usually find me there between noon and 5 pm. Why don\'t you just come by and we can talk quietly, okay?"');
  scene.text('"Yeah, sure." He gives you the address - it is the same that is on his business card - and hangs up. You stare at the phone. It looked like you\'d interrupted something. But maybe that\'s a good sign with a manager.');
  (s as any).minut = ((s as any).minut ?? 0) + 4;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hang up, you should visit him soon', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterOutofoffice(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/fightclub/sultan_portrait.jpg');
  scene.text('It rings, but in the end you only reach the voicemail, which tells you that you\'d better try between 8.00 and 20.00.');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Hang up, maybe try at another time?', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sultan':
      enterSultan(s, scene);
      break;
    case 'dial':
      enterDial(s, scene);
      break;
    case 'invitation':
      enterInvitation(s, scene);
      break;
    case 'outofoffice':
      enterOutofoffice(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fightClub_phone: LocationDef = {
  name: 'fightClub_phone',
  title: 'The dial tone sounds. You wait. The whole thing still sounds',
  region: 'other',
  enter: enter,
};
