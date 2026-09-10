import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'ludahome', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  (s as any).LudaLoc = 0;
  (s as any).OluLoc = 0;
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  if (((s as any).hour ?? 0) >= 23) {
    scene.text('It would be rude to even ring the doorbell at this time of day. Luda is probably asleep. You decide against it and lower your hand.');
    scene.actions([
      { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } else {
    scene.text('It would be rude to even ring the doorbell at this time of day. Luda is probably asleep. You decide against it and lower your hand.');
    qspCall(s, 'stat', '');
    scene.text('You go to Aunt Luda\'s apartment and ring the doorbell.');
    qspCall(s, 'family_schedule', '');
    if (((s as any).locat ?? 0)?.['Mother'] === 20) {
      scene.img('images/characters/shared/headshots_main/big55.jpg');
      scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by Olu, who gives you a friendly smile. When he sees you, his smile turns into a hungry grin as his eyes roam over your body.');
      scene.text('"Hello again," he says in heavily accented Russian.');
      scene.text('You return his smile. "Is my Aunt Luda home?"');
      scene.text('He nods. "Yes, she is in kitchen with your mother. Would you like to come in?"');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You shake your head. "No thanks. I should get going, but thanks anyways."');
    scene.text('He nods and smiles. "Okay, see you other time."');
    scene.text('He closes the door after you walk away.');
    scene.actions([
      { label: 'Leave Luda\'s apartment', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).LudaLoc = 5;
    (s as any).OluLoc = 5;
    scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_olu_tv.jpg');
    scene.text('He opens the door wide enough that you can walk in. Once you\'re inside, he closes the door.');
    scene.text('"They are in kitchen. I watching sports," he says before walking into the living room.');
    scene.actions([
      { label: 'Enter', goto: ['ludahome', 'hallway'] },
    ]);
  } },
      ]);
    } else {
      if (Math.floor(Math.random() * 10) + 1 <= 3) {
        scene.img('images/characters/shared/headshots_main/big30.jpg');
        // TODO-QSP: dynamic text: You stand outside your aunt's apartment, knocking on the door. The door is answe...
        scene.text(`You stand outside your aunt's apartment, knocking on the door. The door is answered by Luda, and she smiles as soon as she sees you. "${((s as any).pcs_nickname ?? 0)}! Come in, come in!"`);
        scene.text('You step inside and she closes the door behind you.');
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).LudaLoc = 5;
    (s as any).OluLoc = 5;
    scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_olu_tv.jpg');
    scene.text('She leads you to her living room, where you see Olu sitting watching TV. He gives you a big friendly smile as Luda sits on the couch next to him and pats the seat next to her. "We were just watching some TV. You\'re welcome to join us, or you can help yourself to something in the kitchen."');
    scene.actions([
      { label: '<b>Leave Luda\'s apartment</b>', goto: ['pod_ezd', 'etaj_4'] },
      { label: 'Go explore', goto: ['ludahome', 'hallway'] },
      { label: 'Watch TV', goto: ['ludahome', 'watchtv'] },
    ]);
  } },
        ]);
      } else {
        scene.img('images/characters/shared/headshots_main/big30.jpg');
        // TODO-QSP: dynamic text: You stand outside your aunt's apartment, knocking on the door. The door is answe...
        scene.text(`You stand outside your aunt's apartment, knocking on the door. The door is answered by Luda, and she smiles as soon as she sees you. "${((s as any).pcs_nickname ?? 0)}! Come in, come in!"`);
        scene.text('She invites you in and closes the door behind you.');
        if (Math.floor(Math.random() * 4) + 1 <= 3) {
          scene.img('images/characters/shared/headshots_main/big55.jpg');
          if (((s as any).OluQW ?? 0)?.['sex'] === 1) {
            scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by Olu, who gives you a friendly smile. When he sees you, his smile turns into a hungry grin as his eyes roam all over your body.');
            scene.text('"Hello again," he says in heavily accented Russian.');
            scene.text('You return his smile. "Is my Aunt Luda home?"');
            scene.text('He shakes his head. "No, she not home right now. We have time to have some fun. Come in, come in."');
            if (((s as any).OluQW ?? 0)?.['anya_inv'] + ((s as any).OluQW ?? 0)?.['nush_inv'] + ((s as any).OluQW ?? 0)?.['nat_inv'] > 0) {
              scene.actions([
                { label: 'How about I invite someone else?', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('You smile at him. "I thought I could invite someone if you\'re up for it?"');
    scene.text('He pauses to process what you said before he grins. "Yes, more the better. Is she pretty?"');
    scene.text('You nod. "Yes, she\'s pretty. Let me text her and see if she\'s around."');
    qspCall(s, 'ludahome', 'invite');
  } },
              ]);
            }
            scene.actions([
              { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
              { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He looks both surprised and slightly disappointed, but he nods and opens the door wide enough for you to walk through. Once you step inside, he closes the door behind you and leads you to the living room, where he takes a seat.');
    scene.text('He indicates for you to take a seat as well. "What shall we talk about?"');
    scene.actions([
      { label: 'Sit down and chat', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('You make a bit of small talk, asking him about his recent work and telling him about some of the stuff that happened in school recently. Everything seems to be going well before he suddenly stands up.');
    scene.text('"Sorry, I was about to take shower before you arrive. I be right back," he says before he suddenly walks out of the room. You could sit and wait for him to finish or leave and come back some other time.');
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
      { label: 'Wait for him to return', goto: ['olu', 'seduction'] },
    ]);
  } },
      { label: 'I should go', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
              { label: 'Agree to have fun', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['olu', 'olusex1'] },
            ]);
          } else {
            scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by Olu, who gives you a friendly smile.');
            scene.text('"Hello again," he says in heavily accented Russian.');
            scene.text('You return his smile. "Is my Aunt Luda home?"');
            scene.text('He shakes his head. "No, she not home right now. Would you like to come in and talk again?"');
            if (((s as any).OluQW ?? 0)?.['met'] === 0) {
              (s as any).OluQW['met'] = 1;
              scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by a domineering African man.');
              scene.text('"Can I help you?" he asks in heavily accented Russian.');
              scene.text('You return his smile. "Yes. Is my Aunt Luda home?"');
              scene.text('He shakes his head. "No, she not home right now. You one her nieces?"');
              // TODO-QSP: dynamic text: You nod. "Yes, I'm <<$pcs_nickname>>. You must be Olu? I've heard about you. Nic...
              scene.text(`You nod. "Yes, I'm ${((s as any).pcs_nickname ?? 0)}. You must be Olu? I've heard about you. Nice to finally meet you."`);
              scene.text('He smiles. "All good, I hope. I tell her you stop by. It nice to meet you."');
              scene.actions([
                { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
                { label: 'Ask if you can come in', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He pauses before he nods and opens the door for you to walk through. Once you step inside, he closes the door behind you and leads you to the living room, where he takes a seat.');
    scene.text('He indicates for you to take a seat as well. "What do you need?"');
    scene.actions([
      { label: 'I just wanted to talk', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['ludahome', 'chat_olu'] },
      { label: 'I should go', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
              ]);
            } else {
              scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by Olu, who gives you a friendly smile.');
              scene.text('"Hello again," he says in heavily accented Russian.');
              scene.text('You return his smile. "Is my Aunt Luda home?"');
              scene.text('He shakes his head. "No, she not home right now. I tell her you stopped by, it nice seeing you again."');
              scene.actions([
                { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
                { label: 'Ask if you can come in', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['ludahome', 'chat_olu'] },
              ]);
            }
            scene.text('You stand in the hallway for a few minutes, but nobody is home.');
            scene.actions([
              { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
              { label: 'Go in and talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He opens the door wide enough for you to walk through. Once you step inside, he closes the door behind you and leads you to the living room, where he takes a seat.');
    scene.text('He indicates for you to take a seat as well. "What shall we talk about?"');
    scene.actions([
      { label: 'Sit down and chat', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['ludahome', 'chat_olu'] },
      { label: 'I should go', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } },
              { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
            ]);
          }
        } else {
          scene.text('You stand in the hallway for a few minutes, but nobody is home.');
          scene.actions([
            { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
          ]);
        }
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big30.jpg');
    scene.text('She leads you to her living room, sits on the couch, and pats the seat next to her. "So what have you been up to?"');
    scene.actions([
      { label: 'Sit down and chat', handler: (st: GameState) => {
    (st as any).LudaLoc = 5;
  }, goto: ['ludahome', 'chat_luda'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  }
  scene.build();
}

export const ludahome: LocationDef = {
  name: 'ludahome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  description: ['It would be rude to even ring the doorbell at this time of day. Luda is probably asleep. You decide against it and lower your hand.'],
  enter: enter,
};
