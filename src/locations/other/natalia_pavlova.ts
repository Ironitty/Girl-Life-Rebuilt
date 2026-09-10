// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).nataliaQW['introduction'] = 1;
  if (((s as any).grupTipe ?? 0) === 1) {
    scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up and smiles.');
    // TODO-QSP: dynamic text: You smile back at her. "Hey Natalia. I thought I'd come and say hello. I'm <<$pc...
    scene.text(`You smile back at her. "Hey Natalia. I thought I'd come and say hello. I'm ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the \'cool kids\', so I\'m just surprised that you\'re here."');
    scene.text('You smile. "I just thought I\'d be friendly and welcome you to our school."');
    // TODO-QSP: dynamic text: "Oh. Thank you, <<$pcs_nickname>>."
    scene.text(`"Oh. Thank you, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You smile. "Don\'t worry, I get it. A new school is daunting. Maybe we\'ll chat again at some point?"');
    // TODO-QSP: dynamic text: "Yes, I'd like that," she answers. "See you later, <<$pcs_nickname>>."
    scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? 0)}."`);
  } else {
    scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up and smiles.');
    // TODO-QSP: dynamic text: You smile back at her. "Hey Natalia. I'm <<$pcs_nickname>>."
    scene.text(`You smile back at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the sporty kids, so I\'m just surprised you\'re here."');
    scene.text('You smile. "I thought I\'d be friendly and welcome you to our school."');
    // TODO-QSP: dynamic text: "Oh. Thank you, <<$pcs_nickname>>."
    scene.text(`"Oh. Thank you, ${((s as any).pcs_nickname ?? 0)}."`);
    scene.text('You smile. "Don\'t worry, I get it. A new school is daunting. Maybe we\'ll chat again at some point?"');
    // TODO-QSP: dynamic text: "Yes, I'd like that," she answers. "See you later, <<$pcs_nickname>>."
    scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? 0)}."`);
    if (((s as any).grupTipe ?? 0) === 3) {
      scene.text('You see Natalia sitting with the other nerds, reading a book. When she notices you, she glances up and smiles.');
      // TODO-QSP: dynamic text: You smile back at her. "Hey Natalia. I'm <<$pcs_nickname>>."
      scene.text(`You smile back at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? 0)}."`);
      // TODO-QSP: dynamic text: "Hi, <<$pcs_nickname>>. It's nice to meet you," she replies in a quiet voice.
      scene.text(`"Hi, ${((s as any).pcs_nickname ?? 0)}. It's nice to meet you," she replies in a quiet voice.`);
      scene.text('You smile. "I just thought I\'d be friendly."');
      scene.text('"Thanks, I\'m just a little overwhelmed getting to know loads of new people and a different environment. It\'s a bit daunting."');
      scene.text('You smile. "Don\'t worry. Maybe we\'ll chat again soon, but before I go; Can I ask you something?"');
      scene.text('"Of course," she replies with a smile.');
      scene.text('"You don\'t go to the game nights. I just wondered why?"');
      scene.text('"Ah, right. Not really my scene. I prefer my books, and I also want to focus on my studies, which doesn\'t allow for many distractions."');
      scene.text('"Oh, okay. I\'d like to chat about what you like to read at some point."');
      scene.text('"Yes, I\'d like that," she answers while smiling at you.');
      scene.text('"Okay, see you later. I think it\'s time for class."');
    } else {
      scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up with a worried expression.');
      // TODO-QSP: dynamic text: You smile at her. "Hey Natalia. I'm <<$pcs_nickname>>."
      scene.text(`You smile at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the gopniks, so I\'m not sure why you\'d want to speak to me?"');
      scene.text('You decide to reassure her. "I\'m not here to cause trouble. We\'re not all bad, you know."');
      scene.text('"I didn\'t mean to offend you, I was just a little surprised is all."');
      scene.text('You smile. "I get that. Anyway, hello and welcome to our school. Maybe we\'ll chat again at some point?"');
      // TODO-QSP: dynamic text: "Yes, I'd like that," she answers. "See you later, <<$pcs_nickname>>."
      scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? 0)}."`);
      if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
        scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up at you.');
        // TODO-QSP: dynamic text: You smile. "Hi, I'm <<$pcs_nickname>>."
        scene.text(`You smile. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('Natalia turns to you. "Umm… Hi? What brings you here?"');
        scene.text('"I wanted to welcome you to the school is all," you reply');
        scene.text('"That\'s nice of you," she replies with a smile. "However, I\'d like to get to the end of this chapter before class." She returns to reading her book without waiting for your reply.');
        scene.text('You turn away and wait for the next class to start, thinking she seems nice. At least she was reasonably friendly, unlike many of your classmates.');
      } else {
        scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up at you.');
        // TODO-QSP: dynamic text: You smile. "Hi, I'm <<$pcs_nickname>>."
        scene.text(`You smile. "Hi, I'm ${((s as any).pcs_nickname ?? 0)}."`);
        scene.text('Natalia turns to you. "Umm… Hi? What brings you here?"');
        scene.text('"I wanted to welcome you to the school is all," you reply.');
        scene.text('"That\'s nice of you," she replies with a smile. "However, I can\'t be seen associating with you, given your reputation. It\'s difficult enough for me as it is. If you\'ll excuse men, I\'d like to get to the end of this chapter before class." She returns to reading her book without waiting for your reply.');
        scene.text('You turn away and wait for the next class to start, thinking she seems nice. At least she was reasonably friendly compared to many of your classmates.');
      }
    }
  }
  scene.build();
}

export const natalia_pavlova: LocationDef = {
  name: 'natalia_pavlova',
  title: 'You see Natalia sitting with the nerds, reading a book. When',
  region: 'other',
  description: ['You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up and smiles.'],
  enter: enter,
};
