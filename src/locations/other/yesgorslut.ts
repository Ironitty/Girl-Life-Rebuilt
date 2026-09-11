import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
    if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 5) {
      (s as any).bonusotnG = ((s as any).pcs_apprnc ?? 0) / 8;
      if (((s as any).bonusotnG ?? 0) <= 0) {
        (s as any).bonusotnG = 1;
      }
      qspCall(s, 'npc_relationship', 'modify_exact', 'A' + qspUntranslated(s, "numnpc>", { location: "yesgorslut" }) + '', ((s as any).bonusotnG ?? 0));
      // TODO-QSP: dynamic text: You have a chat with <<$npc_firstname['A<<numnpc>>']>>, who happily listens to w...
      scene.text(`You have a chat with ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>, who happily listens to what you have to say.`);
    } else {
      if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
        if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
          // TODO-QSP: dynamic text: You're doing your best to engage in conversation with the guy, but <<$npc_firstn...
          scene.text(`You're doing your best to engage in conversation with the guy, but ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> just looks at your body while he ignores everything you say.`);
        } else {
          // TODO-QSP: dynamic text: You're doing your best to engage in conversation with the girl, but <<$npc_first...
          scene.text(`You're doing your best to engage in conversation with the girl, but ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> turns away and does not want to talk with you: "Get away from me! I can't believe you think we're still friends!"`);
        }
      } else {
        if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 3) {
          if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
            // TODO-QSP: dynamic text: You're doing your best to engage in conversation with the guy, but <<$npc_firstn...
            scene.text(`You're doing your best to engage in conversation with the guy, but ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> just stares at your boobs and chuckles.`);
          } else {
            // TODO-QSP: dynamic text: You're doing your best to engage in conversation with the girl, but <<$npc_first...
            scene.text(`You're doing your best to engage in conversation with the girl, but ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> turns away and does not want to talk with you. Definitely not where others can see you.`);
          }
        } else {
          if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 2) {
            if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
              // TODO-QSP: dynamic text: You try to start a conversation with <<$npc_firstname['A<<numnpc>>']>>, but he i...
              scene.text(`You try to start a conversation with ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>, but he immediately dismisses you: "I have no time for you ${((s as any).pcs_nickname ?? 0)}, I'm busy."`);
            } else {
              if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] > 0  &&  ((s as any).numnpc ?? 0) !== 18) {
                // TODO-QSP: dynamic text: The moment you try to say something to <<$npc_firstname['A<<numnpc>>']>>, a grim...
                scene.text(`The moment you try to say something to ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>, a grimace appears on her face and she says in a squeamish voice: "Ewwww! Go away ${((s as any).gnikname ?? 0)}!"`);
              }
            }
          } else {
            if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 1) {
              if (((s as any).numnpc ?? 0) === 14  ||  ((s as any).numnpc ?? 0) === 15) {
                // TODO-QSP: dynamic text: You have a nice chat with <<$npc_nickname['A<<numnpc>>']>>. However, the topic k...
                scene.text(`You have a nice chat with ${qspUntranslated(s, "npc_nickname['A<<numnpc", { location: "yesgorslut" })}']>>. However, the topic keeps circling back to rumors of you and your reputation. ${qspUntranslated(s, "npc_nickname['A<<numnpc", { location: "yesgorslut" })}']>> is concerned about the rumors of you being a ${((s as any).gnikname ?? 0)}.`);
              } else {
                if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
                  // TODO-QSP: dynamic text: You try to start a conversation with <<$npc_firstname['A<<numnpc>>']>>, but he i...
                  scene.text(`You try to start a conversation with ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>, but he immediately dismisses you, making an effort of leafing through a calendar: "I have no time for you ${((s as any).pcs_nickname ?? 0)}, I'm busy. Maybe try again in two-thousand-and-never."`);
                } else {
                  if (((s as any).AlbinaQW ?? 0)?.['Friends'] >= 1  &&  ((s as any).numnpc ?? 0) === 23) {
                    // TODO-QSP: dynamic text: <<$npc_firstname['A<<numnpc>>']>> happily chats with you, giving you a confident...
                    scene.text(`${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> happily chats with you, giving you a confident smile.`);
                  } else {
                    // TODO-QSP: dynamic text: The moment you try to say something to <<$npc_firstname['A<<numnpc>>']>>, a grim...
                    scene.text(`The moment you try to say something to ${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>, a grimace appears on her face and she says in a squeamish voice: "Ewwww! Go away!"`);
                  }
                }
              }
            } else {
              if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).numnpc ?? 0)] === 4) {
                if (((s as any).npc_gender ?? 0)['A' + ((s as any).numnpc ?? 0)] === 0) {
                  if (((s as any).numnpc ?? 0) === 9) {
                    // TODO-QSP: dynamic text: You try to talk with <<$npc_nickname['A<<numnpc>>']>>, but he immediately cuts y...
                    scene.text(`You try to talk with ${qspUntranslated(s, "npc_nickname['A<<numnpc", { location: "yesgorslut" })}']>>, but he immediately cuts you off: "I don't talk to sluts, ${((s as any).pcs_nickname ?? 0)}. Fuck off."`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npc_firstname['A<<numnpc>>']>> laughs at you when you try to talk to him: "Ha...
                    scene.text(`${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>> laughs at you when you try to talk to him: "Haha, what's wrong ${((s as any).gnikname ?? 0)}? Looking for more cocks to suck?"`);
                  }
                } else {
                  // TODO-QSP: dynamic text: <<$npc_firstname['A<<numnpc>>']>>'s face contorts in disgust: "Yuck, <<$gnikname...
                  scene.text(`${qspUntranslated(s, "npc_firstname['A<<numnpc", { location: "yesgorslut" })}']>>'s face contorts in disgust: "Yuck, ${((s as any).gnikname ?? 0)}! Fuck off!"`);
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
