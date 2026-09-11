import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDesc(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/jegor/cook.jpg');
  if ((!((s as any).nichKnowsCook ?? 0))) {
    scene.text('The cook looks pretty old. You guess that he is at least in his late 60s.');
    scene.text('When he notices you he looks up from his work.');
    if ((!((s as any).nichOutfitState ?? 0))) {
      scene.text('"Hello. My name is Jegor. And who might you be?" Before you have the chance to reply he laughs out. "Just kidding. I know you are the new maid. Didn\'t anybody tell you to wear your uniform around here? It\'s something that\'s important to Master Nicholas. Anyways, I think I didn\'t catch your name."');
    } else {
      scene.text('"Hello. You must be the new maid I heard about. My name is Jegor."');
    }
    scene.actions([
      { label: 'Introduce yourself', handler: (st: GameState) => {
    (s as any).nichKnowsCook = 1;
    if (((s as any).pcs_firstname ?? 0) === ((s as any).pcs_nickname ?? 0)) {
      // TODO-QSP: dynamic text: "Nice to meet you, Jegor. My name is <<$pcs_nickname>>."
      scene.text(`"Nice to meet you, Jegor. My name is ${((s as any).pcs_nickname ?? 0)}."`);
    } else {
      // TODO-QSP: dynamic text: "Nice to meet you, Jegor. My name is <<$pcs_firstname>>. But you can call me <<$...
      scene.text(`"Nice to meet you, Jegor. My name is ${((s as any).pcs_firstname ?? 0)}. But you can call me ${((s as any).pcs_nickname ?? 0)}."`);
    }
    // TODO-QSP: dynamic text: "My pleasure, <<$pcs_nickname>>. I'm glad there is a new maid around here. It go...
    scene.text(`"My pleasure, ${((s as any).pcs_nickname ?? 0)}. I'm glad there is a new maid around here. It got a bit boring ever since Katinka left."`);
    scene.text('He turns back to his work. "She was a nice girl. But I guess she and Mistress Gala didn\'t get along too well."');
    scene.text('"But I don\'t think you came here to chat with an old fool, did you? Are you hungry?" He points at the freezer. "You can eat any of the frozen meals. You just have to put it in the microwave or the oven."');
    scene.text('"That\'s what I make them for. The family always gets the fresh meals. But since you\'re surely as busy as I am I assume you won\'t want to wait for me preparing an additional portion for you."');
    scene.text('He points at the fridge. "You can also drink anything that\'s in the fridge. After all you are the one responsible for refilling it." He winks at you.');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
    ]);
  } else {
    if ((!((s as any).nichOutfitState ?? 0))) {
      // TODO-QSP: dynamic text: Jegor is busy preparing some meals. When he notices you he smiles at you. "Nice ...
      scene.text(`Jegor is busy preparing some meals. When he notices you he smiles at you. "Nice to see you, ${((s as any).pcs_nickname ?? 0)}. Did you get fired? Or did you just forget to put your uniform on?" He winks at you before continuing his work.`);
    } else {
      scene.text('Jegor is busy preparing some meals. When he notices you he smiles at you before continuing his work.');
    }
    scene.actions([
      { label: 'Talk', handler: (st: GameState) => {
    scene.text('"Hello Jegor"');
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>."
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}."`);
    scene.actions([
      { label: 'Talk: Nicholas', handler: (st: GameState) => {
    scene.text('"Could you tell me something about Master Nicholas?"');
    scene.text('"Not much more than you already know. He is a business man and very successful. His parents were killed three decades ago. He met Gala three years ago and it didn\'t take long before they married."');
    scene.text('"If you want to know anymore you should talk to him. It\'s not my position to share gossip about my employer."');
  } },
      { label: 'Talk: Gala', handler: (st: GameState) => {
    scene.text('"Could you tell me something about Mistress Gala?"');
    scene.text('"I don\'t want to say anything negative about her. So I\'m afraid I can\'t tell you very much. Just one friendly warning: I can afford being on her bad side since I have been a loyal servant to Master Nicholas since way before he met her. You should be more careful."');
  } },
      { label: 'Talk: Tanya', handler: (st: GameState) => {
    scene.text('"Could you tell me something about Tanya?"');
    scene.text('"I first met her when she moved in here with her mother. She appears to be a nice young lady although we don\'t talk to each other very often. She and Master Nicholas seem to get along exceptionally well."');
  } },
      { label: 'Talk: Apartment', handler: (st: GameState) => {
    scene.text('"What do you know about this apartment?"');
    scene.text('"Not very much actually. I know that it was a government building before the fall of the UdSSR. Master Nicholas bought it and restored it five years ago. If you look at the study you can still see the old furniture. Except for his computer he left that room basically untouched."');
  } },
      { label: 'Talk: Jegor', handler: (st: GameState) => {
    scene.text('"Can you tell me something about yourself?"');
    scene.text('"Sure. I once was the bodyguard of the father of Master Nicholas. He was a powerful man, just like his son is today. But he had enemies. Lots of enemies. At some point they decided to send hitmen after him. I was able to fend them off twice. But when they came for the third time I had to make a hard decision. I was only able to save one family members."');
    scene.text('He hesitates for a few seconds before he continues his story.');
    scene.text('"It was the hardest choice in my life. I was hired to save the old man but I knew that he would rather die than see his son being killed. So I saved Nicholas. He was a young man back then."');
    scene.text('"I was able to save him. But at a great cost. I got hit by several of the assassins bullets. When the paramedics found me they thought I were dead. But I have quite some will to survive."');
    scene.text('"After some months in hospital I recovered. But my reflexes, my strength and my endurance didn\'t. I was no longer able to serve as a bodyguard."');
    scene.text('"I was lost. A broken man who had learned nothing but using his now useless body."');
    scene.text('"But Master Nicholas did\'t forget me. He knew that I did everything I could to protect his family. So he gave me the one free job he was able to offer me: being his cook."');
    scene.text('"At first I was an awful chef. You know that Master Nicholas expects perfection in every regard. The only exception is when you saved his life."');
    scene.text('"He gave me the time to improve my talent. And today I\'m good enough to be hired by him even without him being merciful. He actually told me so."');
    scene.text('"He is a great employer and I owe him everything."');
  } },
      { label: 'Talk: Something unusual?', handler: (st: GameState) => {
    scene.text('"Did you ever see something \'unusual\' around here?"');
    scene.text('"Of course not. It\'s not my place to question anything Master Nicholas, his family, his staff or his guests do. And of course I wouldn\'t disclose anything he doesn\'t disclose himself. As far as I am concerned everything that happens in this apartment is \'usual\'."');
  } },
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      { label: 'Flirt', handler: (st: GameState) => {
    scene.text('"Hello Jegor." You lean over the counter intentionally presenting your cleavage to him. "When you stuffed this goose I had an idea. Would you like to hear it?"');
    scene.text('He grins at you. "You are a nice girl and I really appreciate the effort. But you\'re wasting your time here."');
    scene.actions([
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'desc':
      enterDesc(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichCook: LocationDef = {
  name: 'nichCook',
  title: 'The cook looks pretty old. You guess that he is at least in ',
  region: 'other',
  enter: enter,
};
