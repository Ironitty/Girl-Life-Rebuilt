import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'like', 1, 'chat');
  if (((s as any).locat ?? 0)?.['katja'] === 25) {
    scene.img('images/characters/pavlovsk/school/girl/katja/uni/campus_grounds.jpg');
    scene.text('You approach Katja while she\'s talking on the phone. She finishes her call just before you reach her.');
  } else {
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('Katja is in her room getting her things ready for class. She looks out the window to check if the weather has improved.');
    if (((s as any).locat ?? 0)?.['katja'] === 44) {
      scene.text('Katja is standing in front of the store, looking through the windows. She notices you approaching before you reach her.');
    } else {
      scene.img('images/characters/shared/headshots_main/big14.jpg');
    }
    if (((s as any).npc_had_sex ?? 0)?.['A14']) {
      if (((s as any).katjaQW ?? 0)?.['slut'] >= 100  &&  ((s as any).katjaQW ?? 0)?.['sex_clossedness'] < 2) {
        // TODO-QSP: dynamic text: Katja embraces you and gives you a quick kiss on the lips. "How are you, <<$pcs_...
        scene.text(`Katja embraces you and gives you a quick kiss on the lips. "How are you, ${((s as any).pcs_nickname ?? 0)}? It's great to see you," she says after letting you go.`);
        scene.text('"I\'m good," you answer. "How about you?"');
        scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
      } else {
        // TODO-QSP: dynamic text: Katja hugs you and asks, "How are you, <<$pcs_nickname>>? It's great to see you!...
        scene.text(`Katja hugs you and asks, "How are you, ${((s as any).pcs_nickname ?? 0)}? It's great to see you!"`);
        scene.text('"I\'m good," you answer. "How about you?"');
        scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
        // TODO-QSP: dynamic text: Katja smiles at you and asks, "How are you, <<$pcs_nickname>>? It's good to see ...
        scene.text(`Katja smiles at you and asks, "How are you, ${((s as any).pcs_nickname ?? 0)}? It's good to see you!"`);
        scene.text('"I\'m good," you answer. "How about you?"');
        scene.text('"I\'m doing fine. In fact, even better now that you\'re here," she replies.');
      }
      scene.actions([
        { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
        { label: 'Say you can\'t stay to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['city_slut'] > 200) {
        scene.text('"This is not the place to attract boys," she says mockingly. "Take your antics somewhere else!"');
        scene.text('"Maybe I\'m not hunting for boys this time," you reply in jest.');
        scene.text('"Stop it! I\'m not interested," she says in a tone less harsh than you expected.');
        scene.text('"Maybe you should be," you say with a smirk. "I could definitely teach you a thing or two about how to have fun."');
        scene.text('Katja\'s face grows red and her breath hitches, defying the stern look on her face.');
        if (((s as any).npc_rel ?? 0)?.['A14'] > 40) {
          scene.actions([
            { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
            { label: 'Say you can\'t stay to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. Great to see you. How is it going?" she asks.
        scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}. Great to see you. How is it going?" she asks.`);
        scene.text('"It\'s going good," you reply. "How about you?"');
        scene.text('"I\'m good," she says.');
        if (((s as any).npc_rel ?? 0)?.['A14'] < 25) {
          scene.text('"What are you doing here?" she asks. "I don\'t have time for bullies like you." She then turns around and ignores you.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," she says while looking at you awkwardly as if she's tryi...
          scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}," she says while looking at you awkwardly as if she's trying to determine why you approached her.`);
          scene.text('"Hi Katja," you say. "How are you?"');
          scene.text('"I\'m good," she replies, and her composure loosens a little.');
          scene.actions([
            { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
            { label: 'Say you don\'t have time to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
        scene.actions([
          { label: 'Continue chatting with Katja', goto: ['katja_chat', 'chat'] },
          { label: 'Say you don\'t have time to chat', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const katja_chat: LocationDef = {
  name: 'katja_chat',
  title: 'You approach Katja while she\'s talking on the phone. She fin',
  region: 'other',
  description: ['You approach Katja while she\'s talking on the phone. She finishes her call just before you reach her.'],
  enter: enter,
};
