import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('In the hallway, you\'re stopped by an older lady. You can only guess she\'s the caretaker for the building.');
  // TODO-QSP: dynamic text: She halts <<$npcdesc>> and says: "What's this… another one? That's already the t...
  scene.text(`She halts ${((s as any).npcdesc ?? 0)} and says: "What's this… another one? That's already the third girl you brought over! You know we don't normally allow guests!"`);
  // TODO-QSP: dynamic text: <<$npcdesc>> grins at her apologetically and shrugs: "Just having some fun while...
  scene.text(`${((s as any).npcdesc ?? 0)} grins at her apologetically and shrugs: "Just having some fun while on holiday, aunt Inga. You know how it is…"`);
  // TODO-QSP: dynamic text: You see her halt for a second, probably thinking back to her youth. Then she ref...
  scene.text(`You see her halt for a second, probably thinking back to her youth. Then she refocuses, and nods at ${((s as any).npcdesc ?? 0)}: "Alright, yea… just don't cause any trouble!"`);
  scene.text('Then she lets you pass and shuffles down the hallway with a wistful smile on her face.');
  (s as any).tiprand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).tiprand ?? 0) < 60) {
    (s as any).fbde = 3;
  } else {
    (s as any).fbde = 2;
    (s as any).fbde = 1;
  }
  scene.actions([
    { label: 'Enter the room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).fbde ?? 0) <= 1) {
      // TODO-QSP: dynamic text: When you enter the room, you see it's crowded with boys! It seems that some of <...
      scene.text(`When you enter the room, you see it's crowded with boys! It seems that some of ${((s as any).npcdesc ?? 0)}'s friends were having a party in the hostel. One of them walks up to greet you and says to ${((s as any).npcdesc ?? 0)}: "Hey man, what's up? How about you introduce us to your girlfriend?"`);
      // TODO-QSP: dynamic text: <<$npcdesc>> happily shakes his hand and introduces you to his friends one by on...
      scene.text(`${((s as any).npcdesc ?? 0)} happily shakes his hand and introduces you to his friends one by one, after which you look for a place to sit. There aren't enough chairs in the room, so you sit down on a bed next to ${((s as any).npcdesc ?? 0)}. One of his friends is on the other side, but you already forgot his name again. Not important, anyway. You cuddle up against ${((s as any).npcdesc ?? 0)}, not caring much for the other guy. Without even asking, one of the guys pours some vodka in a glass and hands it to you.`);
      scene.actions([
        { label: 'Drink the booze', goto: ['fbDormD', 'd_fbd_mass'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: You expected there to be other people in the room, but to your surprise it's emp...
      scene.text(`You expected there to be other people in the room, but to your surprise it's empty. ${((s as any).npcdesc ?? 0)} closes the door behind you and pulls you towards him, kissing you roughly.`);
      if (((s as any).fbde ?? 0) === 3) {
        // TODO-QSP: dynamic text: When you enter the room, you see an unfamiliar guy sitting on one of the beds, r...
        scene.text(`When you enter the room, you see an unfamiliar guy sitting on one of the beds, reading a book. ${((s as any).npcdesc ?? 0)} greets him and walks up to him, whispering something in his ear.`);
        (s as any).tiprand = Math.floor(Math.random() * 100) + 1;
        if (((s as any).tiprand ?? 0) < 90) {
          // TODO-QSP: dynamic text: The guy quickly puts on his shoes and says goodbye as he leaves the room with hi...
          scene.text(`The guy quickly puts on his shoes and says goodbye as he leaves the room with his book, giving you and ${((s as any).npcdesc ?? 0)} some privacy.`);
          scene.actions([
            { label: 'Kiss him', goto: ['fbDormD', 'd_fbd_regular'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: The guy grins as he puts his book away and introduces himself to you. Then he re...
          scene.text(`The guy grins as he puts his book away and introduces himself to you. Then he reaches for his bag, pulling out a bottle of vodka and some snacks. You hesitantly sit down on ${((s as any).npcdesc ?? 0)}'s bed. ${((s as any).npcdesc ?? 0)} immediately sits down next to you and wraps one arm around you, while his friend pours some vodka into glasses. He hands out the glasses before sitting down on your other side.`);
          scene.actions([
            { label: 'Enjoy the drink', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 2);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: While you take sips of the vodka, you chat with the guys. They're quite interest...
    scene.text(`While you take sips of the vodka, you chat with the guys. They're quite interesting, having many stories to share about where they're from. While you drink and chat, more and more of ${((s as any).npcdesc ?? 0)}'s friends return from what they were doing in Pavlovsk, and the room fills up slowly but surely. It's turning into quite a large group, and the room sounds like a disturbed bee hive while you continue to take sips of your drink, mostly chatting with ${((s as any).npcdesc ?? 0)}. When your glass is almost empty, ${((s as any).npcdesc ?? 0)} takes it from you and quickly refills it, offering it to you again.`);
    scene.actions([
      { label: 'Drink some more', handler: (st: GameState) => {
    (s as any).dormrape = 0;
    (s as any).placerParameter['number_of_man'] = Math.floor(Math.random() * 12) + 5;
    (s as any).placerStringParameter['text_someone'] = 'guys';
    qspCall(s, 'drugs', 'alcohol', 'vodka', 4);
  }, goto: ['placer_sex', 'meet'] },
    ]);
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Kiss him', goto: ['fbDormD', 'd_fbd_regular'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const fbDormD: LocationDef = {
  name: 'fbDormD',
  title: 'In the hallway, you\'re stopped by an older lady. You can onl',
  region: 'other',
  description: ['In the hallway, you\'re stopped by an older lady. You can only guess she\'s the caretaker for the building.'],
  enter: enter,
};
