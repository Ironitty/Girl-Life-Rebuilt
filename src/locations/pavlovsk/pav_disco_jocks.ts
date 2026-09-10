import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if (Math.floor(Math.random() * 4) + 1 === 1) {
    scene.text('Lazar is out on the dance floor dancing with a small group of people. The girls in the group are all competing for his attention.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lazar_dance2.jpg');
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('You move out onto the dance floor and he smiles as you approach. "Come to have a little fun, huh?"');
      scene.text('You nod your head and join the group dancing.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Keep dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.text('He laughs as you get close. "Get lost loser." he scoffs before turning his back on you.');
      if (((s as any).npc_rel ?? 0)?.['A149'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        scene.text('He gives you a dirty look as you approach. "Go dance somewhere else."');
        scene.text('With the look he\'s giving you, you decide not to press it and leave.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        scene.text('He laughs as you approach. "Look everyone, the slut is in the house!" he says very loudly, drawing the attention of several other dancers.');
        scene.text('Feeling a little uncomfortable with some of the looks you\'re getting, you decide to move away.');
        scene.text('He gives you a chin up greeting as you approach, but keeps dancing with the small group he\'s with. Not having anyone to dance with, you decide to do something else.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
    scene.text('You see Lazar hanging out with the cool kids and jocks. He\'s the center of attention of a small group of mostly girls who seem to be fawning over him.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
      scene.text('Lazar smiles as you approach. "Hey Lazar, what\'s up?"');
      scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work. You?"');
      scene.text('You shrug a little. "You know, just out to have a little fun."');
      scene.text('The two of you start talking and the conversation soon turns towards sports.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He grins. "Sure, why not?"');
      scene.text('Lazar leads you out onto the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He shakes his head. "No thanks."');
      scene.text('You get the feeling he doesn\'t want to dance with you, but doesn\'t want to be rude, so you decide to do something else.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('Lazar gives you a dirty look as you approach. "Why don\'t you stick to your own kind? No one wants you here."');
      scene.text('You notice several of the other jocks giving you unkind looks, so you decide to just leave.');
      if (((s as any).npc_rel ?? 0)?.['A149'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 250) {
        if (((s as any).grupTipe ?? 0) === 2) {
          // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar quips as he stands with his ar...
          scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}…" Lazar quips as he stands with his arms crossed.`);
          scene.text('You sigh. "What now, Lazar? I don\'t have time for your games today…"');
          // TODO-QSP: dynamic text: He huffs. "Somebody's been talking shit behind my back to some girls, but I have...
          scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I just wanted you to know that I'm keeping my eyes on you, ${((s as any).pcs_nickname ?? 0)}."`);
          scene.text('"Well, it\'s not me," you say as you roll your eyes and spend time trying to convince him, but your words fall on deaf ears.');
        } else {
          scene.text('"Are you the one that\'s been going around and telling the other girls that I\'m no good for them?!" Lazar angrily asks as you approach.');
          scene.text('"No… Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
          scene.text('"Good. Keep it that way or else we might have a problem…" he says as he pushes you.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        scene.text('"You here to suck me off, slut?" he snickers as you approach.');
        scene.text('"What did you say?" you angrily reply.');
        scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! What\'s another dick to you?" he winks.');
        scene.text('You try to defend your reputation, but it\'s no good. He obviously thinks of you as nothing but a slut now.');
        if (((s as any).grupTipe ?? 0) === 2) {
          scene.text('Lazar smiles as you approach. "Hey Lazar, what\'s up?"');
          scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work. You?"');
          scene.text('You shrug. "You know, just out to have a little fun."');
          scene.text('The two of you start talking and the conversation soon turns towards sports.');
        } else {
          scene.text('Lazar nods at you as you approach. "Hey Lazar, what\'s up?"');
          scene.text('He spreads his arms wide. "Just taking it all in and basking in the good times that come with hard work."');
          scene.text('You shrug. "You know, just out to have a little fun."');
          scene.text('The two of you start talking and the conversation soon turns towards sports.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big149.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He grins. "Sure, why not?"');
      scene.text('He leads you out onto the dance floor.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_jocks', 'lazar_dance'] },
      ]);
    } else {
      scene.text('"Would you like to dance?" you ask with a smile.');
      scene.text('He shakes his head. "No thanks."');
      scene.text('You get the feeling he doesn\'t want to dance with you, but doesn\'t want to be rude, so you decide to do something else.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const pav_disco_jocks: LocationDef = {
  name: 'pav_disco_jocks',
  title: '<<"Ivan Prokhorov">>',
  region: 'pavlovsk',
  description: ['Lazar is out on the dance floor dancing with a small group of people. The girls in the group are all competing for his attention.'],
  enter: enter,
};
