import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A7', 'like');
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big7.jpg');
  if (Math.floor(Math.random() * 6) + 0 === 0) {
    scene.text('You see Lesco talking to Lera and, unsurprisingly, things look tense. Knowing how volatile the gopnik can be, you approach them carefully. They greet you and Lesco is the first to speak up. "Lera and I were talking about her needing to do her chores at home, but she doesn\'t want to listen…"');
    scene.text('An annoyed Lera is quick to snap back. "Why are you telling your little girlfriend my business? Trying to show off? Try that shit again and I\'ll tell her all your dirty… little… secrets…" she says while prodding him on the chest.');
    scene.text('Hearing this, you wonder what kind of secrets someone like Lesco could be hiding, but keep quiet as you don\'t really want to get involved. They continue bickering as you decide to leave them alone.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
      // TODO-QSP: dynamic text: Lesco doesn't look comfortable as you approach, but you think he's too shy to sa...
      scene.text(`Lesco doesn't look comfortable as you approach, but you think he's too shy to say anything to chase you off. "Oh… Hey ${((s as any).pcs_nickname ?? 0)}…" You engage in an awkward conversation with him as he avoids eye contact with you and gives you brief, one word answers.`);
    } else {
      scene.text('He panics when he sees you walking over. "Get away from me! I have enough problems without being seen with the likes of you!" he exclaims as he quickly moves away from you.');
    }
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2  ||  ((s as any).grupTipe ?? 0) === 4) {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
        scene.text('Lesco engages you in conversation, but he keeps his answers short. You can tell he\'s still afraid of you bullying him.');
        scene.text('"Why do even want to talk with me? Is this some sort of joke so everyone will laugh at me?"');
      } else {
        scene.text('Lesco cowers up as you approach. "Leave me alone! I\'m not doing anything to you! Please just go away!"');
        scene.text('Seeing that you\'re not going to get a word out of him, you sigh as you walk away.');
        scene.text('Lesco looks at you with fear in his eyes.');
        scene.text('"Hey, I\'m not here to pick on you. I just want to talk," you say softly trying to reassure him, but he\'s not buying it.');
        scene.text('"That\'s what they always say. Just leave me alone!"');
        scene.text('Despite your best efforts, you barely get a word out of him as he nervously waits for you to leave him alone.');
      }
    } else {
      (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (1);
      (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
      if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
        scene.text('When he sees you, he relaxes and shyly looks up at you. "What do you want?"');
        scene.text('You shrug your shoulders, saying you just wanted to hang out. You end up talking with him about living at the Tsarev residence and, as you suspected, how Lera makes his life a living hell at home. He does tell you a funny story about when they were younger and things were better. Lera found a dead bird and started poking it, but it turned out to still be alive and ended up attacking her. Even after the bird had flew away, she continued running and screaming all the way home.');
      } else {
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
        scene.text('When he sees you, he stiffens and looks up at you with an apprehensive expression. "Please leave me alone."');
        scene.text('"I just want to talk," you say softly trying to reassure him, but he isn\'t buying it and you eventually give up and walk away.');
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile and strike up a conversation with him. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
      if (((s as any).npc_rel ?? 0)?.['A7'] >= 50) {
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
        scene.text('When he sees you, he relaxes and shyly looks up at you. "What do you want?"');
        scene.text('You shrug your shoulders, saying you just wanted to hang out. You end up talking with him about living at the Tsarev residence and, as you suspected, how Lera makes his life a living hell at home. He does tell you a funny story about when they were younger and things were better. Lera found a dead bird and started poking it, but it turned out to still be alive and ended up attacking her. Even after the bird had flew away, she continued running and screaming all the way home.');
      } else {
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile.');
        scene.text('When he sees you, When he sees you, he stiffens and looks up at you with an apprehensive expression. "Please leave me alone."');
        scene.text('"I just want to talk," you say softly trying to reassure him, but he isn\'t buying it and you eventually give up and walk away.');
        scene.text('You see Lesco sitting quietly by himself as usual. Feeling sorry for him, you approach with a friendly smile and strike up a conversation with him. He seems a bit hesitant at first, but quickly engages you in some idle chatter about school.');
      }
    }
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
  scene.build();
}

export const gschool_outcast_chats: LocationDef = {
  name: 'gschool_outcast_chats',
  title: 'You see Lesco talking to Lera and, unsurprisingly, things lo',
  region: 'other',
  description: ['You see Lesco talking to Lera and, unsurprisingly, things look tense. Knowing how volatile the gopnik can be, you approach them carefully. They greet you and Lesco is the first to speak up. "Lera and I were talking about her needing to do her chores at home, but she doesn\'t want to listen…"'],
  enter: enter,
};
