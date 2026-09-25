import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
    if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 5) {
      (s as any).bonusotnG = ((s as any).pcs_apprnc ?? 0) / 8;
      if (((s as any).bonusotnG ?? 0) <= 0) {
        (s as any).bonusotnG = 1;
      }
      qspCall(s, 'npc_relationship', 'modify_exact', 'A' + ((s as any).numnpc ?? 0) + '', ((s as any).bonusotnG ?? 0));
      scene.text(`You have a chat with ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, who happily listens to what you have to say.`);
    } else {
      if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
        if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
          scene.text(`You're doing your best to engage in conversation with the guy, but ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} just looks at your body while he ignores everything you say.`);
        } else {
          scene.text(`You're doing your best to engage in conversation with the girl, but ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} turns away and does not want to talk with you: "Get away from me! I can't believe you think we're still friends!"`);
        }
      } else {
        if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 3) {
          if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
            scene.text(`You're doing your best to engage in conversation with the guy, but ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} just stares at your boobs and chuckles.`);
          } else {
            scene.text(`You're doing your best to engage in conversation with the girl, but ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} turns away and does not want to talk with you. Definitely not where others can see you.`);
          }
        } else {
          if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 2) {
            if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
              scene.text(`You try to start a conversation with ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, but he immediately dismisses you: "I have no time for you ${((s as any).pcs_nickname ?? '')}, I'm busy."`);
            } else {
              if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] > 0  &&  ((s as any).numnpc ?? 0) !== 18) {
                scene.text(`The moment you try to say something to ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, a grimace appears on her face and she says in a squeamish voice: "Ewwww! Go away ${((s as any).gnikname ?? '')}!"`);
              }
            }
          } else {
            if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 1) {
              if (((s as any).numnpc ?? 0) === 14  ||  ((s as any).numnpc ?? 0) === 15) {
                scene.text(`You have a nice chat with ${(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}. However, the topic keeps circling back to rumors of you and your reputation. ${(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} is concerned about the rumors of you being a ${((s as any).gnikname ?? '')}.`);
              } else {
                if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
                  scene.text(`You try to start a conversation with ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, but he immediately dismisses you, making an effort of leafing through a calendar: "I have no time for you ${((s as any).pcs_nickname ?? '')}, I'm busy. Maybe try again in two-thousand-and-never."`);
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['Friends'] >= 1  &&  ((s as any).numnpc ?? 0) === 23) {
                    scene.text(`${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} happily chats with you, giving you a confident smile.`);
                  } else {
                    scene.text(`The moment you try to say something to ${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, a grimace appears on her face and she says in a squeamish voice: "Ewwww! Go away!"`);
                  }
                }
              }
            } else {
              if (((s as any).npc_grupTipe ?? 0)['A' + (((s as any).numnpc ?? 0))] === 4) {
                if (((s as any).npc_gender ?? 0)['A' + (((s as any).numnpc ?? 0))] === 0) {
                  if (((s as any).numnpc ?? 0) === 9) {
                    scene.text(`You try to talk with ${(((s as any).npc_nickname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}, but he immediately cuts you off: "I don't talk to sluts, ${((s as any).pcs_nickname ?? '')}. Fuck off."`);
                  } else {
                    scene.text(`${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')} laughs at you when you try to talk to him: "Haha, what's wrong ${((s as any).gnikname ?? '')}? Looking for more cocks to suck?"`);
                  }
                } else {
                  scene.text(`${(((s as any).npc_firstname ?? 0)?.['A' + String(((s as any).numnpc ?? 0))] ?? '')}'s face contorts in disgust: "Yuck, ${((s as any).gnikname ?? '')}! Fuck off!"`);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const yesgorslut: LocationDef = {
  name: 'yesgorslut',
  region: 'other',
  enter: enter,
};
