import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big149.jpg');
  if (Math.floor(Math.random() * 4) + 1 === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
    qspCall(s, 'fame', 'pav', 'sex', 'tiny');
    scene.text('Lazar smirks when he sees you. "Back for more? I know, it was amazing."');
    scene.text('You only let out a short "Mmhmm" as you roll your eyes.');
    // TODO-QSP: dynamic text: Lazar breaks out in a smile. "No worries <<$pcs_nickname>>! I'm sure we'll hook ...
    scene.text(`Lazar breaks out in a smile. "No worries ${((s as any).pcs_nickname ?? 0)}! I'm sure we'll hook up again."`);
    scene.text('You notice several others paying attention to what he says and aren\'t happy about him bragging publicly about banging you. You try and change the topic, but all you get from him is sexual banter.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A149')
  } else {
    scene.text('Lazar smirks when he sees you. "Back for more? Albina is a little busy right now, but I\'m sure we can work something out next time she\'s in the mood."');
    scene.text('You blush at his comment and he smiles. "I\'m sure you enjoy our… sessions as much as she does."');
    scene.text('He has a wide grin on his face and winks at you.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A149')
    if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
      qspCall(s, 'npc_relationship', 'modify', 'A149', 'dislike');
      if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
        scene.text('"Taking a break from sucking dicks?" Lazar snickers.');
        scene.text('You sigh. "I just wanted to talk to you."');
        scene.text('"I\'m sure you do, but I\'m pretty busy, so get lost."');
        scene.text('Several of the other jocks and cool kids start mocking you, forcing you to flee as their laughter echoes behind you.');
      } else {
        scene.text('He turns to look at you as you approach. "Get the fuck away from me, you skank!"');
        scene.text('Several of the jocks and cool kids start mocking you, forcing you to flee.');
        scene.text('"You here to suck me off, slut?" Lazar snickers.');
        scene.text('You sigh. "I just wanted to talk to you."');
        scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! Your mouth is good for only one thing. Sucking dick!" he says with a laugh and several of the other jocks and cool kids join in. "If you\'re not going to get on your knees and suck me off, then get lost!"');
        scene.text('You walk away with the laughter echoing behind you.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
        // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you eyeballing me…" Lazar winks.
        scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you eyeballing me…" Lazar winks.`);
        scene.text('You laugh. "Nice line, Lazar… Is that how you get the ladies interested in you?"');
        scene.text('He confidently continues. "You know it. And it works like a charm every time. You just wait, you\'ll fall for me too."');
        scene.text('You end up talking about a variety of topics, mostly sports.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A149')
      } else {
        scene.text('"Are you the one that\'s been going around telling the other girls that I\'m no good for them?!" Lazar angrily asks.');
        scene.text('"No? Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
        scene.text('"Good. Keep it that way or else we might have a problem…" he says as he brushes past you.');
        // TODO-QSP: dynamic text: "I didn't take you for one of them girls, <<$pcs_nickname>>?" Lazar smiles.
        scene.text(`"I didn't take you for one of them girls, ${((s as any).pcs_nickname ?? 0)}?" Lazar smiles.`);
        scene.text('"What?" you ask, surprised.');
        scene.text('"Didn\'t take you for one of my fan girls, that\'s all," he winks.');
        scene.text('You roll your eyes and shake your head. You know he\'s full of himself, even if he is the most gifted athlete in school and cute to boot.');
        scene.text('You end up talking about a variety of things, which he twists into you just liking him.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A149')
      }
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          // TODO-QSP: dynamic text: "Did you see that move I made at the last game, <<$pcs_nickname>>?" Lazar boasts...
          scene.text(`"Did you see that move I made at the last game, ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
          scene.text('"I heard about it…" you inform him.');
          scene.text('You start talking about his last game, but soon move on to a variety of other topics.');
        } else {
          // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar smirks as he stands with his a...
          scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}…" Lazar smirks as he stands with his arms crossed.`);
          scene.text('You sigh. "What now, Lazar? I don\'t have time for your games today…"');
          // TODO-QSP: dynamic text: He huffs. "Somebody's been talking shit behind my back to some girls, but I have...
          scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I wanted you to know that I'm keeping my eyes on you, ${((s as any).pcs_nickname ?? 0)}…"`);
          scene.text('"Okay…" you say as you roll your eyes. "What does that have to do with me?"');
          // TODO-QSP: dynamic text: "Did you hear my own little cheer squad at the last game, <<$pcs_nickname>>?" La...
          scene.text(`"Did you hear my own little cheer squad at the last game, ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
          scene.text('"I heard many boys are out to get at your level, <i>Mister Superstar</i>. Watch out, you might lose that cheer squad of yours!" you jokingly reply.');
          scene.text('Lazar bursts out in laughter. "No no, I\'m not worried. That only makes me want to improve even more…"');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A149')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me…" Lazar wink...
          scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me…" Lazar winks.`);
          scene.text('You blush. "No I haven\'t!"');
          scene.text('He confidently continues. "Are you saying I\'m not good looking?"');
          scene.text('You start to stammer and he laughs, showing he\'s just messing with you. You then proceed to talk about a variety of topics, mostly sports.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A149')
        } else {
          scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there.');
          scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!"');
          scene.text('He then returns to ignoring you and you walk away.');
          // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar smirks, bringing everyone's at...
          scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}…" Lazar smirks, bringing everyone's attention to you.`);
          scene.text('You glance around, waiting for someone to start picking on you. "Hi, I just wanted to say hi."');
          scene.text('He smirks. "Of course you did…" Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
          scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you. At least no one is picking on you.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A149')
        }
        if (((s as any).grupTipe ?? 0) === 4) {
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me…" Lazar wink...
            scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me…" Lazar winks.`);
            scene.text('You laugh. "You wish… Are any of the girls dumb enough to fall for that?"');
            scene.text('He confidently continues. "Nothing to fall for, it\'s a simple fact. You don\'t have to hide it."');
            scene.text('He lifts up his shirt and shows off his six pack, which gets the attention of most of the girls. You have to admit that he has a great body…');
            scene.text('You proceed to talk about a variety of topics, mostly sports.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A149')
          } else {
            scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there.');
            scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants you to talk to you!"');
            scene.text('He then returns to ignoring you and you walk away.');
            // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>. Get lost? Or maybe you're too drunk t...
            scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}. Get lost? Or maybe you're too drunk to find the stairwell?" Lazar asks with a laugh, bringing everyone's attention to you.`);
            scene.text('You sigh. "I just wanted to say hi."');
            scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
            scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A149')
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            scene.text('As you approach, several of the other jocks and cool kids start giving you a hard time.');
            scene.text('Before you can even say a word, he scoffs at you. "Get lost! This isn\'t for you."');
            scene.text('He starts talking to the others as you walk away. At least he wasn\'t mean about it.');
          } else {
            scene.text('"Looks like the loser is lost," someone comments as you approach.');
            scene.text('"Nah, I bet even Lesco and Petia can\'t stand being around her and, honestly, who can blame them?" Lazar replies, which gets the group laughing so hard you know it\'s pointless to even try and talk to him.');
            scene.text('You approach and try to talk to him, but he straight up ignores you and pretends you\'re not there.');
            scene.text('After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!"');
            scene.text('He then returns to ignoring you and you walk away.');
          }
        }
        scene.actions([
          { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
        ]);
      }
    }
  }
  scene.build();
}

export const gschool_jock_chats: LocationDef = {
  name: 'gschool_jock_chats',
  title: '<<"Ivan Prokhorov">>',
  region: 'other',
  description: ['Lazar smirks when he sees you. "Back for more? I know, it was amazing."'],
  enter: enter,
};
