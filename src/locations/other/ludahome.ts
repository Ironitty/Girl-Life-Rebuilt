import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHome(s: GameState, scene: SceneBuilder): void {
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
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It would be rude to even ring the doorbell at this time of day. Luda is probably asleep. You decide against it and lower your hand.');
      scene.actions([
        { label: 'Move away from the door', goto: ['pod_ezd', 'etaj_4'] },
      ]);
    } else {
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
        if ((((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) >= 18  &&  ((s as any).hour ?? 0) <= 22)  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 22)) {
          if ((Math.floor(Math.random() * 10) + 1) <= 3) {
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
            if ((Math.floor(Math.random() * 7) + 1) <= 3) {
              scene.img('images/characters/shared/headshots_main/big30.jpg');
              // TODO-QSP: dynamic text: You stand outside your aunt's apartment, knocking on the door. The door is answe...
              scene.text(`You stand outside your aunt's apartment, knocking on the door. The door is answered by Luda, and she smiles as soon as she sees you. "${((s as any).pcs_nickname ?? 0)}! Come in, come in!"`);
              scene.text('She invites you in and closes the door behind you.');
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
            } else {
              if ((Math.floor(Math.random() * 4) + 1) <= 3) {
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
                  if (((s as any).OluQW ?? 0)?.['met'] === 1  &&  ((s as any).OluQW ?? 0)?.['talked'] === 1) {
                    scene.text('You stand outside your aunt\'s apartment, knocking on the door. The door is answered by Olu, who gives you a friendly smile.');
                    scene.text('"Hello again," he says in heavily accented Russian.');
                    scene.text('You return his smile. "Is my Aunt Luda home?"');
                    scene.text('He shakes his head. "No, she not home right now. Would you like to come in and talk again?"');
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
                    ]);
                  } else {
                    if (((s as any).OluQW ?? 0)?.['met'] === 0) {
                      ((s as any).OluQW ?? {})['met'] = 1;
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
                  }
                }
              } else {
                scene.text('You stand in the hallway for a few minutes, but nobody is home.');
                scene.actions([
                  { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
                ]);
              }
            }
          }
        } else {
          scene.text('You stand in the hallway for a few minutes, but nobody is home.');
          scene.actions([
            { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterInvite(s: GameState, scene: SceneBuilder): void {
  if (((s as any).OluQW ?? 0)?.['anya_inv'] === 1  &&  ((s as any).OluQW ?? 0)?.['anya_busy'] !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Text Anya': gt 'ludahome', 'textanya'
  }
  if (((s as any).OluQW ?? 0)?.['nush_inv'] === 1  &&  ((s as any).OluQW ?? 0)?.['nush_busy'] !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Text Anushka': gt 'ludahome', 'textnush'
  }
  if (((s as any).OluQW ?? 0)?.['nat_inv'] === 1  &&  ((s as any).NatbelQW ?? 0)?.['Debt'] > 0  &&  ((s as any).OluQW ?? 0)?.['nat_busy'] !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: act 'Text Natasha': gt 'ludahome', 'textnatasha'
  }
  scene.actions([
    { label: 'Have fun without a third', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['olu', 'olusex1'] },
  ]);
  scene.build();
}

function enterTextanya(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/phone/text_indoor.jpg');
  scene.text('The two of you sit on the couch while you text Anya. "Hey, what are you doing?"');
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Anya'] < 9  ||  ((s as any).locat ?? 0)?.['Anya'] > 15) {
    ((s as any).OluQW ?? {})['anya_busy'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).OluQW ?? 0)?.['anya_busy'] === ((s as any).daystart ?? 0)) {
    scene.text('You wait a few minutes before you get a reply. "Busy, why?"');
    scene.text('You sigh before you send a reply. "Nothing. I\'ll talk to you later."');
    scene.text('You glance at Olu. "Sorry, she\'s busy."');
    qspCall(s, 'ludahome', 'invite');
    scene.actions([
      { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He looks disappointed, but then smiles. "It\'s okay. Maybe some other time."');
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
      { label: 'Have fun without a third', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['olu', 'olusex1'] },
    ]);
  } else {
    ((s as any).OluQW ?? {})['anya_busy'] = ((s as any).daystart ?? 0);
    scene.text('You wait a few minutes before you get a reply. "Nothing. Why?"');
    scene.text('You smile as you reply back. "Want to come up to Aunt Luda\'s and have some fun with Olu?"');
    scene.text('"Sure! Be right up."');
    scene.text('You glance up at Olu and smile. "Anya is on her way."');
    scene.text('He looks a little surprised. "Your sister?"');
    scene.text('You nod and smile. "Yeah, she wants to have fun with you after I told her about you."');
    scene.text('You could swear he just blushed.');
    scene.actions([
      { label: 'Wait for Anya', goto: ['olu', 'oluanya'] },
    ]);
  }
  scene.build();
}

function enterTextnush(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/phone/text_indoor.jpg');
  scene.text('The two of you sit on the couch while you text Anushka. "Hey, what are you doing?"');
  if (((s as any).hour ?? 0) < 8  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 14)  ||  ((s as any).week ?? 0) === 3  ||  ((s as any).week ?? 0) === 5  ||  (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 18)  ||  (Math.floor(Math.random() * 4) + 0) > 0) {
    ((s as any).OluQW ?? {})['nush_busy'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).OluQW ?? 0)?.['nush_busy'] === ((s as any).daystart ?? 0)) {
    scene.text('You wait a few minutes before you get a reply. "In the middle of something right now. What\'s up bitch?"');
    scene.text('You sigh before you send a reply. "Nothing. I\'ll talk to you later."');
    scene.text('You glance at Olu. "Sorry, she\'s busy."');
    qspCall(s, 'ludahome', 'invite');
    scene.actions([
      { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He looks slightly disappointed, but then smiles. "It\'s okay. Maybe some other time."');
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
      { label: 'Have fun without a third', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['olu', 'olusex1'] },
    ]);
  } else {
    ((s as any).OluQW ?? {})['nush_busy'] = ((s as any).daystart ?? 0);
    scene.text('You wait a little bit before you get a reply, "Why, you got something fun going on?"');
    scene.text('You smile as you reply back. "Want to come to my Aunt Luda\'s and have some fun with Olu?"');
    scene.text('"Olu? Who\'s that?"');
    scene.text('"My Aunt\'s boyfriend. Remember I told you about him? The black guy with the monster-sized dick?"');
    scene.text('You don\'t wait long until she replies with an emoji of a face with big eyes and a tongue hanging out. "Sure! Be right there."');
    scene.text('With a smile, you glance up at Olu. "Anushka is on her way. I think you\'ll like her. She\'s really wild."');
    scene.actions([
      { label: 'Wait for Anushka', goto: ['olu', 'olunush'] },
    ]);
  }
  scene.build();
}

function enterTextnatasha(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/phone/text_indoor.jpg');
  scene.text('The two of you sit on the couch while you text Natasha. "Hey, what are you doing?"');
  if (((s as any).hour ?? 0) < 8  ||  (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).week ?? 0) === 2  &&  ((s as any).hour ?? 0) >= 18)  ||  (Math.floor(Math.random() * 4) + 0) > 0) {
    ((s as any).OluQW ?? {})['nat_busy'] = ((s as any).daystart ?? 0);
  }
  if (((s as any).OluQW ?? 0)?.['nat_busy'] === ((s as any).daystart ?? 0)) {
    scene.text('You wait a few minutes before you get a reply. "Kind of wamped with stuff. What did you need?"');
    scene.text('You sigh as you reply back. "Nothing. I\'ll talk to you later."');
    scene.text('You glance at Olu. "Sorry, she\'s busy."');
    qspCall(s, 'ludahome', 'invite');
    scene.actions([
      { label: 'Say you would rather talk', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big55.jpg');
    scene.text('He looks slightly disappointed, but then smiles. "It\'s okay. Maybe some other time."');
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
      { label: 'Have fun without a third', handler: (st: GameState) => {
    (st as any).OluLoc = 5;
  }, goto: ['olu', 'olusex1'] },
    ]);
  } else {
    ((s as any).OluQW ?? {})['nat_busy'] = ((s as any).daystart ?? 0);
    scene.text('You wait a little bit before you get a reply, "Just reading. What\'s up?"');
    scene.text('You smile and reply, "Come over to my Aunt\'s and work off some of your debt."');
    scene.text('You wait long enough that you\'re about to send another text when you finally get a reply. "Okay. Be there in a few minutes."');
    scene.text('You glance up at Olu and smile. "Natasha is on her way."');
    scene.actions([
      { label: 'Wait for Natasha', goto: ['olu', 'olunat'] },
    ]);
  }
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'ludahome', 'hallway');
  qspCall(s, 'ludahome', 'timecheck');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Entrance hall</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/ludahome/hall.jpg');
  scene.text('The first thing you notice is how clean and organized everything is. Inside the door is a coat rack, and all the coats and umbrellas are neatly hung up. A small mirror is on the wall opposite the coat rack.');
  scene.actions([
    { label: '<b>Leave Luda\'s apartment</b>', goto: ['pod_ezd', 'etaj_4'] },
    { label: 'Luda\'s Room', goto: ['ludahome', 'ludaroom'] },
    { label: 'Bathroom', goto: ['ludahome', 'bathroom'] },
    { label: 'Living Room', goto: ['ludahome', 'livingroom'] },
    { label: 'Kitchen', goto: ['ludahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'ludahome', 'timecheck');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/ludahome/bathroom.jpg');
  scene.text('The first you notice the god-awful pea-green tiles, with a white sink just in front of a large shelf and mirror. You don\'t know who picked it, but they clearly don\'t have any good taste. Other than that, it\'s a reasonably typical bathroom.');
  scene.text('You can do your hair and makeup in the <a href="exec: gt \'mirror\', \'start\'">mirror</a> above the sink.');
  qspCall(s, 'piercing_management', 'set_manage_string');
  qspCall(s, 'din_van', 'bath');
  qspCall(s, 'din_van', 'bteeth');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'prvt_pee');
  scene.actions([
    { label: 'Leave the bathroom', goto: ['ludahome', 'hallway'] },
    { label: 'Take a shower', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'din_van', 'showerdin');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Bathroom</b></center>');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You take a quick shower.');
    scene.actions([
      { label: 'Take a selfie', handler: (st: GameState) => {
    qspCall(s, 'telefon', 'Phone_selfie_image_bathing', 'shower');
  } },
      { label: 'Get out of the shower', goto: ['ludahome', 'bathroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLudaroom(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 1;
  qspCall(s, 'ludahome', 'timecheck');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Luda\'s Room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/ludahome/bedroom.jpg');
  scene.text('The room is spotless and neat. Right next to the window is a bed. Next to the door are the closet, dresser and wardrobe. The room is otherwise very empty.');
  scene.actions([
    { label: 'Go back to the hallway', goto: ['ludahome', 'hallway'] },
  ]);
  scene.build();
}

function enterLivingroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'ludahome', 'timecheck');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Living room</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/ludahome/living.jpg');
  scene.text('The living room is clean and neat. A couch rests against one wall, with an entertainment center on the opposite wall holding a relatively decent-sized flat-screen TV and a DVD player. Inside one of the glass doors of the entertainment center, you see several dozen DVDs.');
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Mother'] === 20  &&  ((s as any).OluLoc ?? 0) === 5) {
    scene.text('Olu is sitting on the couch watching sports and seems pretty focused on it. When he notices you, he briefly looks up and smiles.');
    scene.actions([
      { label: 'Watch TV with him (0:30)', goto: ['ludahome', 'watchtv'] },
    ]);
  } else {
    if (((s as any).LudaLoc ?? 0) === 5  &&  ((s as any).OluLoc ?? 0) === 5) {
      scene.text('Luda and Olu are sitting on the couch watching TV. Luda glances up and smiles at you as you walk back in.');
      scene.actions([
        { label: 'Watch TV with them (0:30)', goto: ['ludahome', 'watchtv'] },
      ]);
    } else {
      if (((s as any).LudaLoc ?? 0) === 5  &&  ((s as any).locat ?? 0)?.['Mother'] !== 20) {
        scene.text('Luda is sitting on the couch. She smiles at you as you walk back in.');
        scene.actions([
          { label: 'Sit down and chat', goto: ['ludahome', 'chat_luda'] },
        ]);
      } else {
        if (((s as any).OluLoc ?? 0) === 5) {
          scene.text('Olu is sitting on the couch. He smiles at you as you walk back in.');
          scene.actions([
            { label: 'Sit down and chat', goto: ['ludahome', 'chat_olu'] },
          ]);
        } else {
          scene.text('Nobody\'s here right now.');
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave the living room', goto: ['ludahome', 'hallway'] },
  ]);
  scene.build();
}

function enterWatchtv(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).locat ?? 0)?.['Mother'] === 20) {
      qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
      scene.img('images/locations/pavlovsk/resident/apartment/ludahome/olutv.jpg');
      scene.text('You take a seat on the couch next to Olu. He offers you a brief smile, but his attention seems to be focused on a football game. You decide to watch it with him, and he occasionally shouts at the TV in joy or anger as one team or the other scores.');
      scene.text('You soon realize that he doesn\'t seem interested in chatting.');
    } else {
      qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
      qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
      scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_olu_tv.jpg');
      scene.text('You sit on the couch next to your aunt and watch TV with them. Olu seems pretty focused on the show and doesn\'t speak. On the other hand, Luda periodically makes small talk with you about a variety of things, seemingly only half paying attention to the show.');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Stop watching TV', goto: ['ludahome', 'livingroom'] },
      { label: 'Keep watching TV (0:30)', handler: (st: GameState) => {
    // TODO-QSP: gt 'ludahome', 'watchtv', iif(locat['Mother'] = 20, 'Olu', '...
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Olu') {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/ludahome/olutv.jpg');
      if (((s as any).hour ?? 0) > 22) {
        // TODO-QSP: dynamic text: As it gets late, your <<$npc_nickname['A29']>> enters the living room. "Come on,...
        scene.text(`As it gets late, your ${((s as any).npc_nickname ?? 0)?.['A29']} enters the living room. "Come on, ${((s as any).pcs_nickname ?? 0)}, they're about to go to bed. We should leave."`);
        // TODO-QSP: dynamic text: Knowing better than to argue, you get up and head for the door. Olu gives you bo...
        scene.text(`Knowing better than to argue, you get up and head for the door. Olu gives you both a brief smile and wave, but quickly focuses back on the game. You don't think he'll go to bed until after the game. Regardless, you follow your ${((s as any).npc_nickname ?? 0)?.['A29']} out.`);
        scene.text('"You should come home before it gets late," she says before she walks down the stairs out of sight.');
        scene.actions([
          { label: 'Stairwell', goto: ['pod_ezd', 'etaj_4'] },
        ]);
      } else {
        scene.text('You remain seated next to Olu. He keeps intently watching the game, and you often wonder if he even remembers that you\'re here. He keeps yelling at the TV regardless of whether the team he likes does well or poorly.');
        scene.actions([
          { label: 'Stop watching TV', goto: ['ludahome', 'livingroom'] },
          { label: 'Keep watching TV (0:30)', handler: (st: GameState) => {
    // TODO-QSP: gt 'ludahome', 'watchtv', 'Olu'
  } },
        ]);
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'OluLuda') {
        (s as any).minut = ((s as any).minut ?? 0) + 30;
        qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
        qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
        qspCall(s, 'stat', '');
        scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_olu_tv.jpg');
        if (((s as any).hour ?? 0) > 22) {
          scene.text('As it starts to get late, Luda pats Olu on the leg. Olu glances at her before he picks up the remote and turns the TV off.');
          scene.text('As they both get up, Luda turns to you. "It was wonderful that you came to visit, but it\'s time for us to go to bed. Come back any time, though."');
          scene.text('Olu gives you a smile before Luda escorts you to the apartment door, where you bid her farewell and leave.');
          scene.actions([
            { label: 'Leave Luda\'s apartment', goto: ['pod_ezd', 'etaj_4'] },
          ]);
        } else {
          scene.text('You remain seated next to your aunt and watch TV with them for another half an hour. Olu seems pretty focused on the show and doesn\'t speak. On the other hand, Luda periodically makes small talk with you about a variety of things, seemingly only half paying attention to the show.');
          scene.actions([
            { label: 'Stop watching TV', goto: ['ludahome', 'livingroom'] },
            { label: 'Keep watching TV (0:30)', handler: (st: GameState) => {
    // TODO-QSP: gt 'ludahome', 'watchtv', 'OluLuda'
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'ludahome', 'timecheck');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Kitchen</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/ludahome/kitchen.jpg');
  scene.text('Along one wall are the kitchen counters, stove, fridge and sink. A microwave sits on one of the counters with a small table and chairs opposite. The room is pretty clean, but looks lived in and used. You see some small racks with what looks to be spices on them. Some of them seem foreign, and you don\'t know what they are.');
  qspCall(s, 'family_schedule', '');
  if (((s as any).locat ?? 0)?.['Mother'] === 20) {
    // TODO-QSP: 'Luda and your <<$npc_nickname[''A29'']>> sit at the kitchen table, chatting and drinking tea.'+iif(...
    if (((s as any).LudaQW ?? 0)?.['tea_day'] !== ((s as any).daystart ?? 0)) {
      ((s as any).LudaQW ?? {})['tea_day'] = ((s as any).daystart ?? 0);
      return;
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_nat.jpg');
    scene.text('You shake your head. "No thanks, Aunt. I was just looking around."');
    scene.text('You see your mother shaking her head slightly while Luda smiles. "Of course, dear. Help yourself to anything in the fridge."');
    scene.actions([
      { label: 'Leave the kitchen', goto: ['ludahome', 'hallway'] },
      { label: 'Look in the fridge', goto: ['ludahome', 'fridge'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Join them for tea (0:30)', goto: ['ludahome', 'luda_mom_talk'] },
    ]);
  } else {
    scene.text('Nobody\'s here right now.');
  }
  qspCall(s, 'kit_din', 'fill_bottle');
  qspCall(s, 'kit_din', 'driwater');
  scene.actions([
    { label: 'Leave', goto: ['ludahome', 'hallway'] },
    { label: 'Look in the fridge', goto: ['ludahome', 'fridge'] },
  ]);
  scene.build();
}

function enterLudaMomTalk(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).LudaLoc = 4;
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (10);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'npc_relationship', 'modify', 'A29', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_nat.jpg');
    scene.text('You take a seat next to them. "Sure! That sounds great," you smile.');
    // TODO-QSP: dynamic text: You see your <<$npc_nickname['A29']>> give you a friendly smile while Luda fills...
    scene.text(`You see your ${((s as any).npc_nickname ?? 0)?.['A29']} give you a friendly smile while Luda fills a cup with tea and offers it to you. "So what have you been up to, dear?"`);
    // TODO-QSP: dynamic text: Before you can even answer, your <<$npc_nickname['A29']>> does and embellishes t...
    scene.text(`Before you can even answer, your ${((s as any).npc_nickname ?? 0)?.['A29']} does and embellishes things. She makes it sound like things at home and what's going on are better than they are. You feel she's trying to impress her sister with how great her family is, so you simply sit back and sip your tea.`);
    // TODO-QSP: dynamic text: After a while, they start talking about other things, so you can finally join in...
    scene.text(`After a while, they start talking about other things, so you can finally join in. However, your ${((s as any).npc_nickname ?? 0)?.['A29']} still occasionally cuts you off, perhaps afraid you'll shatter the illusion she's building up of your family.`);
    scene.actions([
      { label: 'Get up from the table', goto: ['ludahome', 'kitchen'] },
      { label: 'Keep chatting', handler: (st: GameState) => {
    // TODO-QSP: gt 'ludahome', 'luda_mom_talk', 1
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      qspCall(s, 'npc_relationship', 'modify', 'A29', 'like');
      qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/ludahome/luda_nat.jpg');
      if (((s as any).hour ?? 0) > 22) {
        // TODO-QSP: dynamic text: As it starts to get late, your <<$npc_nickname['A29']>> gets up. "Come on, <<$pc...
        scene.text(`As it starts to get late, your ${((s as any).npc_nickname ?? 0)?.['A29']} gets up. "Come on, ${((s as any).pcs_nickname ?? 0)}, it's getting late. We should leave so they can go to bed."`);
        // TODO-QSP: dynamic text: Knowing better than to argue, you get up and head for the door. Luda says her go...
        scene.text(`Knowing better than to argue, you get up and head for the door. Luda says her goodbyes to both of you and hugs you goodbye. Your ${((s as any).npc_nickname ?? 0)?.['A29']} walks out first while Luda holds your hug a little longer, giving your ${((s as any).npc_nickname ?? 0)?.['A29']} time to walk down the stairs.`);
        // TODO-QSP: dynamic text: "Don't worry about your <<$npc_nickname['A29']>>," she says. "She just wants wha...
        scene.text(`"Don't worry about your ${((s as any).npc_nickname ?? 0)?.['A29']}," she says. "She just wants what's best for you and for you to have a happy family, even if it isn't always so," she says with a wink, letting you know she knows the truth or at least suspects it, but plays along with your ${((s as any).npc_nickname ?? 0)?.['A29']} to make her feel better.`);
        scene.text('Once you\'re outside the apartment, she closes the door.');
        scene.actions([
          { label: 'Stairwell', goto: ['pod_ezd', 'etaj_4'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: You remain seated at the table with your <<$npc_nickname['A29']>> and Aunt, most...
        scene.text(`You remain seated at the table with your ${((s as any).npc_nickname ?? 0)?.['A29']} and Aunt, mostly listening to them talk but occasionally taking part, at least when your mother doesn't interrupt you trying to impress your aunt. They seem to get along better than you thought, given how rarely Luda comes down to your apartment. You briefly wonder why that is. Does your ${((s as any).npc_nickname ?? 0)?.['A29']} always make excuses so Luda can't see or overhear something less perfect than the picture she paints?`);
        scene.actions([
          { label: 'Get up from the table', goto: ['ludahome', 'kitchen'] },
          { label: 'Keep chatting', handler: (st: GameState) => {
    // TODO-QSP: gt 'ludahome', 'luda_mom_talk', 1
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterFridge(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).LudaQW ?? 0)?.['food_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).LudaQW ?? {})['soup_count'] = 1;
    ((s as any).LudaQW ?? {})['leftover_count'] = 1;
    ((s as any).LudaQW ?? {})['water_count'] = 1;
    ((s as any).LudaQW ?? {})['tea_count'] = 1;
    ((s as any).LudaQW ?? {})['sandwich_count'] = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).LudaQW ?? 0)?.['leftover_count'] > 0) {
    // TODO-QSP: $fridge_temp += ' some leftovers'
  }
  if (((s as any).LudaQW ?? 0)?.['soup_count'] > 0) {
    // TODO-QSP: $fridge_temp += iif(instr($fridge_temp, 's')>0, ',', '') + ' some soup'
  }
  if (((s as any).LudaQW ?? 0)?.['water_count'] > 0) {
    // TODO-QSP: $fridge_temp += iif(instr($fridge_temp, 's')>0, ',', '') + ' some bottled water'
  }
  if (((s as any).LudaQW ?? 0)?.['tea_count'] > 0) {
    // TODO-QSP: $fridge_temp += iif(instr($fridge_temp, 's')>0, ',', '') + ' some tea'
  }
  if (((s as any).LudaQW ?? 0)?.['sandwich_count'] > 0) {
    // TODO-QSP: $fridge_temp += iif(instr($fridge_temp, 's')>0, ',', '') + ' some stuff to make a sandwich'
  }
  scene.img('images/shared/home/kitchen/fridge.jpg');
  // TODO-QSP: dynamic text: You open the fridge and see:<<$fridge_temp>>.
  scene.text(`You open the fridge and see:${((s as any).fridge_temp ?? 0)}.`);
  if (((s as any).LudaQW ?? 0)?.['leftover_count'] > 0) {
    scene.actions([
      { label: 'Eat some leftovers', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).LudaQW ?? {})['leftover_count'] = (((s as any).LudaQW ?? {})['leftover_count'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/leftovers.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (3);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('It seems to be leftovers from a previous night\'s dinner. It looks delicious, even for leftovers.');
    scene.actions([
      { label: 'Continue', goto: ['ludahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).LudaQW ?? 0)?.['tea_count'] > 0) {
    scene.actions([
      { label: 'Have some tea', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).LudaQW ?? {})['tea_count'] = (((s as any).LudaQW ?? {})['tea_count'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/drinks/tea.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (5);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (35);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (70);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You find some tea and make it.');
    scene.actions([
      { label: 'Continue', goto: ['ludahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).LudaQW ?? 0)?.['water_count'] > 0) {
    scene.actions([
      { label: 'Have some water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).LudaQW ?? {})['water_count'] = (((s as any).LudaQW ?? {})['water_count'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/waterbottle1.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (35);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (70);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You drink some bottled water.');
    scene.actions([
      { label: 'Continue', goto: ['ludahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).LudaQW ?? 0)?.['soup_count'] > 0) {
    scene.actions([
      { label: 'Have some soup', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).LudaQW ?? {})['soup_count'] = (((s as any).LudaQW ?? {})['soup_count'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/soup.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (2);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (50);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You find some soup in the fridge and spoon a bowlful to eat.');
    scene.actions([
      { label: 'Continue', goto: ['ludahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  if (((s as any).LudaQW ?? 0)?.['sandwich_count'] > 0) {
    scene.actions([
      { label: 'Make a sandwich', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['food_day'] = ((s as any).daystart ?? 0);
    ((s as any).LudaQW ?? {})['sandwich_count'] = (((s as any).LudaQW ?? {})['sandwich_count'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/food/reuben.jpg');
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (1);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    scene.text('You get all the stuff you need from the fridge, get some bread out of the cabinet and make yourself a sandwich.');
    scene.actions([
      { label: 'Continue', goto: ['ludahome', 'kitchen'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Close the refrigerator', goto: ['ludahome', 'kitchen'] },
  ]);
  scene.build();
}

function enterChatLuda(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big30.jpg');
  scene.text('Once you\'re both comfortable on the couch, she waits for you to decide what you want to talk about.');
  if (((s as any).LudaQW ?? 0)?.['olu_offer'] === 1  &&  ((s as any).LudaQW ?? 0)?.['olu_offer_day'] !== ((s as any).daystart ?? 0)) {
    ((s as any).LudaQW ?? {})['olu_offer_day'] = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, do you remember our conversation? You know… about Olu?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, do you remember our conversation? You know… about Olu?"`);
    scene.text('You nod your head. "I do. What about it?"');
    scene.text('"I don\'t want to put you on the spot, but… have you decided yet?" she asks with that same glimmer of hope in her eyes that you left her with the last time.');
    scene.actions([
      { label: 'Agree to help with Olu', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['olu_offer'] = 2;
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You nod. It sounds like it can be fun. "Sure. As long as you\'re okay with it, I wouldn\'t mind helping out with his sexual energy," you say with a wink.');
    scene.text('She laughs. "I\'ll let him know. Also, I should warn you. He likes butts, but don\'t worry, I keep a large stockpile of lube in the apartment." Then, seeing your face at the thought of a man described as hung like a horse fucking your ass, she quickly adds, "Don\'t worry, it might hurt the first time, but you quickly get used to it, and it even starts feeling good after a while."');
    scene.text('You nod. "Okay, hopefully it doesn\'t take me long to get used to it then."');
    scene.text('The two of you then start talking about anal sex, and she shares a few tips on how to relax and make it feel better.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'Still thinking about it', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"I\'m sorry, aunt Luda, I haven\'t decided yet. I need some more time."');
    scene.text('"Oh, okay then… Take your time, dear," she says and then changes the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'Refuse', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['olu_offer'] = (-1);
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"I\'m sorry, aunt Luda. I thought about it, but I can\'t. It\'s just too weird," you tell her.');
    scene.text('"Oh, okay then… I understand. Don\'t give it another thought," she says and then changes the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).LudaQW ?? 0)?.['olu_offer'] === 2  &&  ((s as any).OluQW ?? 0)?.['sex'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 10;
      ((s as any).LudaQW ?? {})['olu_offer'] = 3;
      qspCall(s, 'stat', '');
      scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
      scene.text('Luda pats the seat and sits close to you. "Olu told me you had sex. I want to know all about it."');
      scene.text('You tell her all the details, good and bad. "I\'m not sure how often I can do that, though. He\'s so big and has so much stamina. It wears me out."');
      scene.text('She giggles. "You don\'t have to tell me about it. I fully understand, and I don\'t mind that he sleeps with other women to give me a break. Feel free to sleep with him as much as you like. I really don\'t mind," she says.');
      scene.text('You give it some thought. You know a few other girls that might be interested as long as your Aunt doesn\'t mind. "Would it be okay if I brought another girl with me?"');
      scene.text('Luda thinks for only a moment before she nods. "Of course, dear. As long as Olu likes them, I don\'t mind. Who did you have in mind?"');
      scene.text('You smile. "I have some friends I think would be interested, and maybe Anya. I wanted to make sure you didn\'t mind before I asked them to join me."');
      scene.text('She nods. "Of course, dear. If they\'re interested, bring them along, but it\'s up to Olu if he wants to sleep with them."');
      scene.text('You nod in agreement, and then the two of you talk about sex for a while.');
      scene.actions([
        { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
        { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
      ]);
    } else {
      if (((s as any).OluQW ?? 0)?.['met'] === 1  &&  ((s as any).OluQW ?? 0)?.['talked'] === 1  &&  ((s as any).LudaQW ?? 0)?.['boytalk'] === 1  &&  ((s as any).pcs_hotcat ?? 0) >= 5) {
        scene.actions([
          { label: 'Talk about Olu some more', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"I met Olu earlier when you weren\'t home. He was here and I talked to him for a while. I didn\'t realize how big he was until I was so close to him."');
    scene.text('She laughs. "Oh, you have no clue how big he is. He\'s just as big all over," she says with a wink, "Yes, he told me you stopped by, and the two of you talked. He liked you. He asked about you."');
    scene.text('You blush a little. "Really? What did he say?"');
    scene.text('She smiles amusedly at your blush. "Well, he thought you were cute, for one."');
    scene.actions([
      { label: 'You don\'t mind?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You expect her to be upset, but she doesn\'t seem to mind. "That doesn\'t bother you?"');
    scene.text('She shakes her head. "Why should it? I don\'t mind if he finds other women attractive. Just because we\'re together doesn\'t make us suddenly blind to how attractive others might be. Besides, we\'re in an open relationship."');
    scene.actions([
      { label: 'You have an open relationship?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['open_rel'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You gasp in surprise. "You\'re in an open relationship? You mean you can sleep with other people?"');
    scene.text('She laughs at your reaction. "Yes and no. It doesn\'t bother me, and it doesn\'t bother him. We know we love each other, and sex is just sex."');
    if ((((s as any).fame ?? 0)?.['pav_slut'] >= 100  ||  ((s as any).LudaQW ?? 0)?.['KnowsSexActive'] >= 10)  &&  ((s as any).LudaQW ?? 0)?.['olu_offer'] === 0  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      scene.text('You nod. "Yeah, okay, I guess I can see that."');
      scene.text('She seems to be considering something. "Actually, I\'m glad of it. The man has amazing stamina and just loves sex. He can\'t get enough of it, honestly. Don\'t get me wrong, I love sex, but he wears me out, so I\'m glad he can burn up some of that sexual energy with other women."');
      scene.text('You\'re a little surprised by that, but it does explain things. "I see," you say with a sly smile of understanding.');
      scene.text('She giggles a little at your comment. "Well, since he finds you cute and I\'m pretty sure you\'re sexually active, if you want to spend some time with him and help burn off his sexual energy, then I won\'t mind. I have to warn you though, he\'s hung like a horse."');
      scene.actions([
        { label: 'Agree to spend time with Olu', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['olu_offer'] = 2;
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You nod. It sounds like it can be fun. "Sure. As long as you\'re okay with it, I wouldn\'t mind helping out with his sexual energy," you say with a wink.');
    scene.text('She laughs at that. "I\'ll let him know. Also, I should warn you. He likes butts, but don\'t worry, I keep a large stockpile of lube in the apartment." Then, seeing your face at the thought of a man described as hung like a horse fucking your ass, she quickly adds, "Don\'t worry, it might hurt the first time, but you quickly get used to it, and it even starts feeling good after a while."');
    scene.text('You nod. "Okay, hopefully, it doesn\'t take me long to get used to it then."');
    scene.text('The two of you start talking about anal sex, and she shares a few tips on how to relax and make it feel better.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
        { label: 'Decline', handler: (st: GameState) => {
    ((s as any).LudaQW ?? {})['olu_offer'] = 1;
    ((s as any).LudaQW ?? {})['olu_offer_day'] = ((s as any).daystart ?? 0);
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('This is not what you thought you would be doing today. "No way! You can\'t ask me to be some black guy\'s sex toy!"');
    // TODO-QSP: dynamic text: Aunt Luda looks a little taken aback. "I'm sorry, <<$pcs_nickname>>. I shouldn't...
    scene.text(`Aunt Luda looks a little taken aback. "I'm sorry, ${((s as any).pcs_nickname ?? 0)}. I shouldn't have asked this of you."`);
    scene.text('You feel bad for reacting like you did. "I\'m not saying yes, but I\'m not saying no either. I might help the two of you. I just need a while to think about it."');
    scene.text('She smiles. "Of course, dear. I\'ll let him know you\'re thinking about it, so if you change your mind when I\'m not around, you can just let him know."');
    scene.text('You don\'t know what more to say about this, so you change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You shake your head slightly. "I\'m not sure if I could do that. I mean, I can see the appeal, but…"');
      scene.text('She pats your leg. "It\'s not for everyone, but it works for us, and we\'re happy and love each other."');
      scene.text('You get the feeling she almost said something else, but chose not to do so. You should ask her about it again some other day.');
      scene.actions([
        { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
        { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
      ]);
    }
  } },
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You sit and talk with Luda about various topics. For example, you tell her about what has been happening at home and school, and she tells you about funny things that happened at work or when she and Olu went out.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
        { label: 'Talk about your <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    // TODO-QSP: dynamic text: You ask Luda about your <<$npc_nickname['A29']>> and what she was like growing u...
    scene.text(`You ask Luda about your ${((s as any).npc_nickname ?? 0)?.['A29']} and what she was like growing up, and she shares a few stories about their childhood and some of the stuff they both got up to. It sounds like she started to get boy crazy in her late teens from your aunt's stories.`);
    if (((s as any).momslut ?? 0) >= 1) {
      scene.actions([
        { label: '<<$npc_nickname[\'A29\']>> is a slut', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    // TODO-QSP: dynamic text: You look at your Aunt. "I know my <<$npc_nickname['A29']>> is a slut. I can't be...
    scene.text(`You look at your Aunt. "I know my ${((s as any).npc_nickname ?? 0)?.['A29']} is a slut. I can't believe she's such a hypocrite!"`);
    // TODO-QSP: dynamic text: Luda looks a little surprised. "You shouldn't say that sort of thing about your ...
    scene.text(`Luda looks a little surprised. "You shouldn't say that sort of thing about your mother, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You snort a laugh. "Why? It\'s true."');
    scene.text('She sighs. "Maybe so, but it\'s still not nice to say. While I haven\'t always agreed with her choices, she\'s still human and makes mistakes like the rest of us. While she might be hard on you and your sister, she does it out of love because she wants what\'s best for you."');
    scene.text('You decide it\'s best to just change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).motherrumor ?? 0) === 1) {
        scene.actions([
          { label: 'Rumors about your <<$npc_nickname[\'A29\']>>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    // TODO-QSP: dynamic text: You gather your courage and ask Luda about the rumors you've heard about your mo...
    scene.text(`You gather your courage and ask Luda about the rumors you've heard about your mother. "Aunt Luda, I've heard some rumors about ${((s as any).npc_nickname ?? 0)?.['A29']}. Are they true?"`);
    scene.text('She pauses. "What kind of rumors?"');
    scene.text('"Well, some people have said she\'s a slut, and others have alluded to it. So are they true?"');
    if (((s as any).npc_rel ?? 0)?.['A30'] <= 80) {
      scene.text('Luda sighs and looks around the room before turning back to you. "Yes, it\'s true, but not as bad as some claim. It\'s just how your mother is. She\'s always been pretty wild and likes to have fun. Even so, she\'s still your mother, and just because she is doesn\'t mean you have to be."');
    } else {
      scene.text('Luda sighs and looks around the room before turning back to you. "You should ask your mother about this."');
    }
    scene.text('You can tell she doesn\'t want to discuss this and allow her to change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'What do you think of Vladimir?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"What do you think of Vlad?" you ask.');
    scene.text('She considers it for a moment. "He\'s a good man who works hard and provides for you and your mother. He\'s always treated you and your sister like you were his own daughters."');
    scene.text('She then goes on to talk about a few stories about him when you were too young to really remember or were not around, but it sounds like he loves your mother.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
        { label: 'Ask about your biological father', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"What do you know about my biological father?" you ask.');
    scene.text('She shakes her head slightly. "Not much, honestly. I\'d already left by the time your mother met him. I came back after they had split up, so what I know is mostly what I heard and what your mother told me."');
    scene.actions([
      { label: 'Where is he?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You nod. "Do you know where he is?"');
    scene.text('"I heard he\'s a truck driver and works out of a depot on the highway, but I don\'t know if he\'s still there."');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'Why did he leave?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"Do you know why he left?" you ask.');
    scene.text('She sighs. "Not for sure, but they fought a lot about a variety of things, so he packed up one day and left. Regardless of why, he should have stayed in touch with you. I\'ll never forgive him for that."');
    scene.text('She sounds like she really doesn\'t care for him. Not knowing what else to ask and not expecting to get a better answer, you change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
        { label: 'Talk about Olu', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"Tell me about your boyfriend. What\'s he like?" you curiously ask.');
    scene.text('She lights up at your questions. "He\'s fairly quiet, but so kind and caring. Not to mention so big… and muscular. He really is the perfect man."');
    scene.text('She talks about some of the things they\'ve done together, and it sounds like they\'re very much in love. You notice that she never mentions that he\'s black.');
    scene.actions([
      { label: 'How do people react?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"How do people treat you and him, you know, with him being black?"');
    scene.text('She frowns. "Some people are okay with it, but most just make comments behind our backs while a few say nasty things to our faces. I don\'t care. He\'s a good man, and I don\'t care what colour his skin is."');
    scene.text('"It doesn\'t bother you?"');
    scene.text('"Of course it bothers me, but not as much as losing him would. If this is the price we have to pay to be together, then I\'m willing to pay it. Even if your grandparents disowned me because of it."');
    scene.text('You nod, and not sure what more to say, you change the subject.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'How did you meet?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"So, how did the two of you meet?" you ask.');
    scene.text('She laughs. "Everyone thinks I met him on my travels in Africa, but that isn\'t true. His nephew Djibril goes to the university in Saint Petersburg, and he was visiting him. I was in the city at the time shopping after I had moved back here and we ran into each other on the metro, literally. He nearly knocked me down, but he caught me in his strong arms and kept me from falling. We both apologised and I thanked him for saving me from falling…"');
    scene.text('She stops to sigh happily before she continues. "So it was my stop, and I got off thinking nothing more of it. A few minutes later, he comes strolling beside me and gives me some flowers he had bought, telling me "pretty flowers for pretty lady" in his bad-accented Russian. I thanked him and blushed before he asked me out to coffee, and well, we hit it off and started dating. Not long after, I asked him to move in with me."');
    scene.text('You\'re glad your Aunt found someone that makes her happy.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'What does he do?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"So what does he do? For a living, I mean." you ask.');
    scene.text('"Well, his visa expired, so he legally can\'t work, but he saved up a little money and bought a van that he cleaned up and put some seats in. He drives it around, offering tourists rides to take them to all the different sites around the area. He makes decent money, though he mostly makes his money in the summers. Of course, when there\'s a lot more tourists, he gets some fares year around. He mostly sits near the train station and tries to offer people rides, but I don\'t care. I make enough for both of us, but it makes him feel good to work, and it gives us a little extra spending money.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
        { label: 'Talk about boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).LudaQW ?? {})['boytalk'] = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You talk to her about boys in general and sex with them. She gives you some advice on how to deal with guys, what to expect from them when it comes to sex, and that you can always say no. She eventually asks you if you have a boyfriend.');
    if (((s as any).NikoVolkovQW ?? 0) >= 5  ||  ((s as any).fedorKozlovQW ?? 0) >= 5  ||  ((s as any).kotovLoveQW ?? 0) === 1  ||  ((s as any).artemQW ?? 0)?.['bf'] === 1  ||  ((s as any).rex_love ?? 0) === 1  ||  ((s as any).IgorQW ?? 0)?.['Lover'] === 1  ||  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I have a boyfriend', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('"I have a boyfriend," you smile.');
    scene.text('She looks curious. "Who\'s the lucky boy?"');
    if (((s as any).NikoVolkovQW ?? 0) >= 5) {
      scene.actions([
        { label: 'Niko', handler: (st: GameState) => {
    scene.text('"Niko," you reply.');
    scene.text('She shakes her head. "I don\'t think I know him."');
    scene.text('You tell her about Niko, and as you do, she nods and has a knowing smile.');
    scene.text('"Ah yes, a bad boy. I know the pull that all girls feel for bad boys. They\'re fun, but rarely make good long-term choices. You\'re young and have lots of time though, so enjoy your bad boy," she says with a wink.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).fedorKozlovQW ?? 0) >= 5) {
      scene.actions([
        { label: 'Fedor', handler: (st: GameState) => {
    scene.text('"Fedor," you reply.');
    scene.text('She shakes her head. "I don\'t think I know him."');
    scene.text('You tell her about Fedor, and as you do, she nods and has a knowing smile.');
    scene.text('"A jock. I bet he has a really nice body and amazing stamina," she says with a wink.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).kotovLoveQW ?? 0) === 1) {
      scene.actions([
        { label: 'Vitek', handler: (st: GameState) => {
    scene.text('"Vitek," you reply.');
    scene.text('She shakes her head. "I don\'t think I know him."');
    scene.text('You tell her about Vitek, and as you do, she nods and has a knowing smile.');
    scene.text('"Isn\'t he one of those punks that sometimes hang out on the stairs?"');
    scene.text('You nod. "Yes, he\'s good friends with Vasily."');
    scene.text('She shakes her head. "I don\'t like those boys. I get the appeal; trust me. I ran around with my share of bad boys, but they\'re trouble. You be careful around them, you hear?"');
    // TODO-QSP: dynamic text: You nod just to make her happy, but she doesn't understand. At least she's not a...
    scene.text(`You nod just to make her happy, but she doesn't understand. At least she's not as bad as your ${((s as any).npc_nickname ?? 0)?.['A29']}.`);
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).artemQW ?? 0)?.['bf'] === 1) {
      scene.actions([
        { label: 'Artem', handler: (st: GameState) => {
    scene.text('"Artem," you reply.');
    scene.text('"Isn\'t he the boy that lives on the first floor?"');
    scene.text('You nod and tell her all about him.');
    scene.text('She smiles and nods. "He sounds like a very nice boy. I hope the two of you are very happy together. Who knows? You might have gotten lucky and found the right one early on, but don\'t be afraid to keep fishing for another man if things don\'t work out."');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).rex_love ?? 0) === 1) {
      scene.actions([
        { label: 'Rex', handler: (st: GameState) => {
    scene.text('"Rex," you reply.');
    scene.text('She shakes her head. "I don\'t think I know him."');
    scene.text('You tell her about Rex, and as you do, she starts nodding and has a knowing smile on her face.');
    scene.text('An inquisitive look appears on her face. "How did you meet him? Isn\'t he a few years older?"');
    scene.text('You smile at her. "He\'s friends with Anya, and she invited me to his birthday party. That\'s when we met."');
    scene.text('You then talk about the night you met him and your first date.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    if (((s as any).IgorQW ?? 0)?.['Lover'] === 1) {
      scene.actions([
        { label: 'Igor', handler: (st: GameState) => {
    scene.text('"Igor," you reply.');
    scene.text('"I don\'t think I know him. Tell me about him."');
    scene.text('You nod and tell her all about him. You keep his secret, but tell her all about him otherwise.');
    scene.text('She smiles and nods. "He sounds like a very nice boy. I hope the two of you are very happy together. Who knows? You might have gotten lucky and found the right one early on, but don\'t be afraid to keep fishing for another man if things don\'t work out."');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      ]);
    }
    (s as any).i = 0;
    // TODO-QSP: :lover_looop
    if (((s as any).i ?? 0) < Object.keys((s as any).lover ?? {}).length) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).temp_npcid ?? 0)] === 'boyfriend') {
        // TODO-QSP: dynamic 'act ''<<$npc_usedname["<<$temp_npcid>>"]>>'': gt ''ludahome'', ''tell_about_generic_boyfrei...
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'lover_looop'
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You shake your head. "No, I don\'t have a boyfriend. Just haven\'t found the right guy yet."');
    scene.text('She smiles at you. "The right guy doesn\'t really exist. The right <i>enough</i> guy is what you\'re looking for. Until you put yourself out there, you\'ll never know."');
    scene.text('Not sure what to say, you just nod.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'I like girls', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You shake your head. "No, I like girls more."');
    scene.text('She seems a little surprised before she smiles. "Well, if that\'s what makes you happy, then don\'t let anyone try and tell you there\'s anything wrong with it. I was never attracted to other women. I like the hard muscles of men too much," she says with a laugh before the two of you discuss the differences between having sex with a man or another woman.');
    scene.text('Not sure what else to say, you just nod.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'No, but I am dating', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You shake your head. "No, I don\'t have a boyfriend. At least not like that. I am dating, though. I want to ensure I find the right guy before committing."');
    scene.text('She nods and smiles at you. "That\'s the best way to do it. You\'re young, so no need to rush into anything. There are a lot of men out there, and no reason not to take a few of them for a test drive before deciding on the one you want," she says with a wink and leaves no doubt in your mind by her tone precisely what she means.');
    scene.text('Not sure what to say, you just nod.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
        { label: 'Talk about her travels', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A30', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
    scene.text('You ask your aunt about her travels, and she excitedly tells you stories about her time in Europe. She started travelling around Europe before drifting south to Africa. She tells you many funny and some sex stories about her travels.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
        { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
      ]);
    }
  }
  scene.build();
}

function enterTellAboutGenericBoyfreind(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/luda/talk.jpg');
  scene.text('"I have a boyfriend," you reply.');
  scene.text('She looks curious. "Who\'s the lucky boy?"');
  // TODO-QSP: dynamic text: "<<$ARGS[1]>>," you reply.
  scene.text(`"${((s as any).locArgs?.[1] ?? 0)}," you reply.`);
  scene.text('She shakes her head. "I don\'t think I know him."');
  // TODO-QSP: dynamic text: You tell her about <<$ARGS[1]>>, and as you do, she nods and has a knowing smile...
  scene.text(`You tell her about ${((s as any).locArgs?.[1] ?? 0)}, and as you do, she nods and has a knowing smile.`);
  scene.text('"Well, that\'s an interesting way to meet a boy, but I\'ve heard of worse ways. As long as he makes you happy, that\'s all that matters."');
  scene.actions([
    { label: 'Keep talking', goto: ['ludahome', 'chat_luda'] },
    { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
  ]);
  scene.build();
}

function enterChatOlu(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  ((s as any).OluQW ?? {})['talked'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big55.jpg');
  scene.text('You sit and talk with Olu about various topics. Or rather: you\'re doing most of the talking, and Olu is mostly listening to you talk. Occasionally, he comments or asks a question, but seems content to just let you talk.');
  if (((s as any).LudaQW ?? 0)?.['open_rel'] === 1) {
    scene.actions([
      { label: 'Ask about their open relationship', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/flirttalk.jpg');
    scene.text('"Luda told me about your open relationship," you say as you place a hand on his leg, flirting with him a little.');
    scene.text('He nods. "Yes, it her idea. I be happy with just her, but she say I \'wear her out\' and want me to be happy. My needs are more than she can take," he says with a blush.');
    scene.text('You cock your head slightly. "So you don\'t mind then?"');
    scene.text('He shakes his head. "I like it, if she want me to, I do it. I love her; she love me, and we both know it. The rest is just sex."');
    if (((s as any).LudaQW ?? 0)?.['olu_offer'] >= 2) {
      scene.actions([
        { label: 'Do you want to fuck me?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/flirttalk.jpg');
    scene.text('You rub his thigh with your hand. "Do you want to fuck me?"');
    scene.text('"Yes," he grins before he leans in and kisses you.');
    scene.actions([
      { label: 'Return the kiss', goto: ['olu', 'olusex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do you think I\'m pretty?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/flirttalk.jpg');
    if (((s as any).LudaQW ?? 0)?.['olu_offer'] === 1) {
      scene.text('"Do you think I\'m pretty?" you ask with a flirty smile.');
      scene.text('He nods and his eyes roam across your body. "Yes, you are beautiful." Then he suddenly stands up. "Sorry, I was about to take shower before you arrive. I be right back," he says before he suddenly walks out of the room.');
      scene.text('You could sit and wait for him to finish or leave and come back some other time.');
      scene.actions([
        { label: 'Leave', goto: ['pod_ezd', 'etaj_4'] },
        { label: 'Wait for him to return', goto: ['olu', 'seduction'] },
      ]);
    } else {
      scene.text('"Do you think I\'m pretty?" you ask with a flirty smile.');
      scene.text('He nods and his eyes roam across your body. "Yes, you are beautiful, and I would very much like to have sex with you," he smiles before he kisses you.');
      if (((s as any).LudaQW ?? 0)?.['olu_offer'] >= 2) {
        scene.actions([
          { label: 'Return the kiss', goto: ['olu', 'olusex'] },
        ]);
      }
      scene.actions([
        { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
        { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Make small talk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('The two of you chat about various things, mostly school, how he and Luda have been doing, and what\'s been going on in Pavlovsk lately.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    { label: 'Talk about Luda', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"So you and Luda seem to get along well. Do you love her?" you curiously ask.');
    scene.text('He lights up at your questions. "Yes, very much. She is very kind and loving woman, very understanding. She is most wonderful woman I ever meet."');
    scene.text('He talks about some of the things they\'ve done together, and it sounds like they\'re very much in love.');
    scene.actions([
      { label: 'How do people react?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"How do people treat you and my aunt. You know, with you being black?"');
    scene.text('He frowns. "Some say nasty things to our face, though only one time. Others too scared to speak to us and say things behind our backs."');
    scene.text('You can understand why someone of his size could convince someone else that they might not want to say more on the topic to Luda.');
    scene.text('You can tell he wants to change the subject, so you do.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
      { label: 'How did you meet?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"So, how did the two of you meet?" you ask.');
    scene.text('He grins. "I seen her on train and wanted to talk to her because she was most beautiful woman I see, but I wasn\'t watching and walked right into her." He laughs loudly at the memory. "She bounced off me and nearly fell on floor, but I quickly grab her and say sorry. She was so nice and said it was her fault. That\'s when I wanted to talk to her even more."');
    scene.text('"She got off train, I didn\'t know where we was, but I did not care. So I got off quickly as well, I trying to think what to say when I see girl selling flowers, so I bought many of them and ran up to Luda and gave them to her. I told her, "pretty flowers for a pretty lady". When I saw she blushed, I just asked her out for coffee, and she said yes." He grins broadly. "It was best day of my life. We went out for coffee and I knew I had to make her mine. In the end, she felt the same way. I not regret one minute since then."');
    scene.text('You can\'t help but smile at the sweet story. It\'s obvious he\'s deeply in love with your aunt.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'What do you do?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"So what do you do? For a living, I mean," you ask.');
    scene.text('He seems to consider your question for a moment. "I buy van and fix it. I got it new paint and got some old seats and other stuff out of a wrecked car. I turned van into taxi. I wait around the train station or hotel for tourists. I offer them ride and guide tour for money. I earn most during summer, but there is enough tourist in winter to make money."');
    scene.actions([
      { label: 'You have your own taxi service?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"You have your own taxi service?"');
    scene.text('He smiles. "No, I just turn old van into service for tourist. Police mostly ignore it, as long as I give them money, but don\'t tell Luda. She would be upset to know I pay off police so they leave me alone."');
    scene.text('You frown, but nod. You understand why he doesn\'t want her to know, but you wish the police weren\'t so corrupt that he has to deal with it.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'What does he think about Russia?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"What do you think about Russia?" you ask.');
    scene.text('He seems to consider it for a moment. "I like it, even if people are not nice. Luda love it here, so I don\'t mind if she happy."');
    scene.text('You ask him about what some people have said or done and he tells you some genuinely awful stories, and not just about what he\'s experienced. After some time, he wants to change the subject to something more pleasant.');
    scene.actions([
      { label: 'Do you miss your family?', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"Do you miss your family?" you ask.');
    scene.text('He nods. "Sometimes very much, but I talk to them as much as I can. I see my nephew Djibril as much as I can, and we talk on the phone almost every day. At least when he not busy with school or girls," he says with a laugh.');
    scene.text('You ask him about his family back home, and he tells you what it was like growing up poor in Africa and how he would like to someday move his family to a more pleasant place. Most of his stories are good, even if they were dirt poor. He cares deeply about his family, but it\'s just as evident that he loves your Aunt Luda just as much.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ask about Djibril', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'npc_relationship', 'modify', 'A55', 'like');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/olu/olutalk.jpg');
    scene.text('"Tell me about your nephew, Djibril," you say.');
    scene.text('He smiles and talks at length about how clever Djibril is and how proud everyone in the family is of him. He tells you he goes to the university in Saint Petersburg, is getting excellent grades, and has many girlfriends. He\'s clearly very fond of his nephew.');
    scene.text('"He is almost your age," he says. "You should meet him."');
    scene.text('You nod and consider it.');
    scene.actions([
      { label: 'Keep talking', goto: ['ludahome', 'chat_olu'] },
      { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
    ]);
  } },
    { label: 'Stop talking', goto: ['ludahome', 'livingroom'] },
  ]);
  scene.build();
}

function enterTimecheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) > 23  ||  ((s as any).hour ?? 0) < 3) {
    scene.text('It\'s too late to be running around in Luda\'s apartment. You should leave.');
    return;
    scene.actions([
      { label: 'Leave Luda\'s apartment', goto: ['pod_ezd', 'etaj_4'] },
    ]);
  } else {
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early to be running around in Luda\'s apartment. You should leave.');
      return;
      scene.actions([
        { label: 'Leave Luda\'s apartment', goto: ['pod_ezd', 'etaj_4'] },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home':
      enterHome(s, scene);
      break;
    case 'invite':
      enterInvite(s, scene);
      break;
    case 'textanya':
      enterTextanya(s, scene);
      break;
    case 'textnush':
      enterTextnush(s, scene);
      break;
    case 'textnatasha':
      enterTextnatasha(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'ludaroom':
      enterLudaroom(s, scene);
      break;
    case 'livingroom':
      enterLivingroom(s, scene);
      break;
    case 'watchtv':
      enterWatchtv(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'luda_mom_talk':
      enterLudaMomTalk(s, scene);
      break;
    case 'fridge':
      enterFridge(s, scene);
      break;
    case 'chat_luda':
      enterChatLuda(s, scene);
      break;
    case 'tell_about_generic_boyfreind':
      enterTellAboutGenericBoyfreind(s, scene);
      break;
    case 'chat_olu':
      enterChatOlu(s, scene);
      break;
    case 'timecheck':
      enterTimecheck(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ludahome: LocationDef = {
  name: 'ludahome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'kitr',
  enter: enter,
};
