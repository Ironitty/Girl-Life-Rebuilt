import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBeachHangout(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).hour ?? 0) < 15  &&  ((s as any).sunWeather ?? 0) === 1) {
    scene.text('<center><b>Beach</b></center>');
    scene.text('Some of the cool kids and jocks are lounging around tanning and chatting while others are wading and swimming out in the lake.');
    (s as any).i = 1;
    (s as any).i2 = 0;
    // TODO-QSP: :beachcool_loop
    if (((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).i ?? 0))] === 1) {
      if (((s as any).i2 ?? 0) === 0) {
        // TODO-QSP: $table_beach += '<tr>'
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td><table bgcolor=#FFF8DC><tr><td align=center><a href="exec: i = <<i>> & gt ''pav...
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'beachcool_loop'
    }
    (s as any).i = 1;
    // TODO-QSP: :beachjock_loop
    if (((s as any).npc_grupTipe ?? 0)?.['A' + String(((s as any).i ?? 0))] === 2  &&  ((s as any).i ?? 0) !== 141) {
      if (((s as any).i2 ?? 0) === 0) {
        // TODO-QSP: $table_beach += '<tr>'
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td><table bgcolor=#FFF8DC><tr><td align=center><a href="exec: i = <<i>> & gt ''pav...
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
      // TODO-QSP: jump 'beachjock_loop'
    }
    if (((s as any).i2 ?? 0) % 6 !== 0) {
      // TODO-QSP: :beach_loopi21
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      // TODO-QSP: $table_beach += '<td></td>'
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        // TODO-QSP: $table_beach += '</tr>'
      } else {
        // TODO-QSP: jump 'beach_loopi21'
      }
    }
    // TODO-QSP: $table_beach += '</table>'
    // TODO-QSP: $table_beach
    scene.actions([
      { label: 'Go back', goto: ['pav_lake', ''] },
    ]);
  } else {
    scene.text('It seems everyone has had their fill of hanging out at the beach today. You see several of them have already left and the rest are either walking away or are gathering up their stuff and saying their goodbyes to each another. You are soon the last person left.');
    scene.actions([
      { label: 'Go back', goto: ['pav_lake', ''] },
    ]);
  }
  scene.build();
}

function enterJocksList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_beach_chat', $listname
  scene.build();
}

function enterCoolList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gt 'pav_beach_chat', $listname
  scene.build();
}

function enterLazar(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'exp_gain', 'chrsm', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'npc_relationship', 'modify', 'A149', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/lazar/beach_chat.jpg');
  if (Math.floor(Math.random() * 4) + 1 === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A149']) {
    qspCall(s, 'fame', 'pav', 'sex', 'small');
    scene.text('Lazar smirks when he sees you. "Back for more? I know, it was amazing."');
    scene.text('You only let out a short "Mmhmm" as you roll your eyes.');
    // TODO-QSP: dynamic text: Lazar breaks out in a smile. "No worries <<$pcs_nickname>>! I'm sure we'll hook ...
    scene.text(`Lazar breaks out in a smile. "No worries ${((s as any).pcs_nickname ?? 0)}! I'm sure we'll hook up again." You notice several others paying attention to what he says and aren't happy about him bragging publicly about banging you. You try and change the topic, but all you get from him is sexual banter.`);
  } else {
    scene.text('Lazar smirks when he sees you. "Back for more? Albina is a little busy right now, but I\'m sure we can work something out next time she\'s in the mood."');
    scene.text('You blush at his comment and he smiles. "I\'m sure you enjoy our… sessions as much as she does." He has a wide grin on his face and winks at you.');
    if (((s as any).fame ?? 0)?.['pav_slut'] > 225) {
      qspCall(s, 'npc_relationship', 'modify', 'A149', 'dislike');
      if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
        scene.text('"Taking a break from sucking dicks?" Lazar snickers.');
        scene.text('You sigh. "I just wanted to talk to you."');
        scene.text('"I\'m sure you do, but I\'m pretty busy, so get lost." Several of the other jocks and cool kids start mocking you, forcing you to flee as their laughter echoes behind you.');
      } else {
        scene.text('He turns to look at you as you approach. "Get the fuck away from me you skank." Several of the jocks and cool kids start mocking you, forcing you to flee.');
        scene.text('"You here to suck me off, slut?" Lazar snickers.');
        scene.text('You sigh. "I just wanted to talk to you."');
        scene.text('"Come on, everyone knows that you\'re the school\'s biggest slut! Your mouth is good for only one thing. Sucking dick!" he says with a laugh and several of the other jocks and cool kids join in. "If you\'re not going to get on your knees and suck me off, then get lost." You walk away with the laughter echoing behind you.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
        // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you eyeballing me." Lazar winks.
        scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you eyeballing me." Lazar winks.`);
        scene.text('You laugh. "Nice line Lazar… Is that how you get the ladies interested in you?"');
        scene.text('He confidently continues. "You know it. And it works like a charm every time. You just wait, you\'ll fall for me too." You talk about a variety of topics, mostly sports.');
      } else {
        scene.text('"Are you the one that\'s been going around telling the other girls that I\'m no good for them?!" Lazar angrily asks.');
        scene.text('"No? Like I give a shit about you! You\'re not the center of the world, Lazar!" you yell back.');
        scene.text('"Good. Keep it that way or else we might have a problem…" he says as he brushes past you.');
        // TODO-QSP: dynamic text: "I didn't take you for one of them girls <<$pcs_nickname>>?" Lazar smiles.
        scene.text(`"I didn't take you for one of them girls ${((s as any).pcs_nickname ?? 0)}?" Lazar smiles.`);
        scene.text('"What?" you ask surprised.');
        scene.text('"Didn\'t take you for one of my fan girls, that\'s all." he winks. You roll your eyes and shake your head. You know he\'s full of himself, even if he is the most gifted athlete in school and cute to boot. You talk about a variety of things, which he twists into you just liking him.');
      }
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          // TODO-QSP: dynamic text: "Did you see that move I made at the last game <<$pcs_nickname>>?" Lazar boasts.
          scene.text(`"Did you see that move I made at the last game ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
          scene.text('"I heard about it…" you inform him.');
          scene.text('You start talking about his last game, but soon move on to a variety of other topics.');
        } else {
          // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>…" Lazar smirks as he stands with his a...
          scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}…" Lazar smirks as he stands with his arms crossed.`);
          scene.text('You sigh. "What now Lazar? I don\'t have time for your games today…"');
          // TODO-QSP: dynamic text: He huffs. "Somebody's been talking shit behind my back to some girls, but I have...
          scene.text(`He huffs. "Somebody's been talking shit behind my back to some girls, but I haven't figured out who it is yet. I wanted you to know that I'm keeping my eyes on you ${((s as any).pcs_nickname ?? 0)}."`);
          scene.text('"Okay…" you say as you roll your eyes. "What does that have to do with me?"');
          // TODO-QSP: dynamic text: "Did you hear my own little cheer squad at the last game <<$pcs_nickname>>?" Laz...
          scene.text(`"Did you hear my own little cheer squad at the last game ${((s as any).pcs_nickname ?? 0)}?" Lazar boasts.`);
          scene.text('"I heard many boys are out to get at your level <i>Mister Superstar</i>. Watch out, you might lose that cheer squad of yours!" you jokingly reply.');
          scene.text('Lazar bursts out in laughter. "No no, I\'m not worried. That only makes me want to improve even more…"');
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
          // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me." Lazar wink...
          scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me." Lazar winks.`);
          scene.text('You blush. "No… no I haven\'t."');
          scene.text('He confidently continues. "Are you saying I\'m not good looking?" You start to stammer and he laughs, showing he is just messing with you. You proceed to talk about a variety of topics, mostly sports.');
        } else {
          scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!" He then returns to ignoring you and you walk away.');
          // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>." Lazar smirks, bringing everyone's at...
          scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}." Lazar smirks, bringing everyone's attention to you.`);
          scene.text('You glance around, waiting for someone to start picking on you. "Hi, I just wanted to say hi."');
          scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
          scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you. At least no one is picking on you.');
        }
        if (((s as any).grupTipe ?? 0) === 4) {
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>. So I've been noticing you've been eying me." Lazar wink...
            scene.text(`"Hey, ${((s as any).pcs_nickname ?? 0)}. So I've been noticing you've been eying me." Lazar winks.`);
            scene.text('You laugh. "You wish… Are any of the girls dumb enough to fall for that?"');
            scene.text('He confidently continues. "Nothing to fall for, it\'s a simple fact. You don\'t have to hide it." He lifts up his shirt and shows off his six pack, which gets the attention of most of the girls. You have to admit that he has a great body. You proceed to talk about a variety of topics, mostly sports.');
          } else {
            scene.text('You approach and try to talk with him, but he flat out ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants you to talk to you!" He then returns to ignoring you and you walk away.');
            // TODO-QSP: dynamic text: "Well well, if it isn't <<$pcs_nickname>>. Get lost? Or maybe you're too drunk t...
            scene.text(`"Well well, if it isn't ${((s as any).pcs_nickname ?? 0)}. Get lost? Or maybe you're too drunk to find your way to the dump where you lot hang out?" Lazar asks with a laugh, bringing everyone's attention to you.`);
            scene.text('You sigh. "I just wanted to say hi."');
            scene.text('He smirks. "Of course you do." Just the way he says it makes it sound like a forgone conclusion you would want to talk to him.');
            scene.text('"Okay…" you reply, not sure how to respond. He starts talking to some of the others and seems friendly enough, even if he and the others don\'t pay much attention to you.');
          }
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A8', 'dislike');
          if (((s as any).npc_rel ?? 0)?.['A149'] >= 50) {
            scene.text('As you approach, several of the other jocks and cool kids start giving you a hard time. Before you can even say a word, he scoffs at you. "Get lost! This isn\'t for you." He starts talking to the others as you walk away. At least he wasn\'t mean about it.');
          } else {
            scene.text('"Looks like the loser is lost." someone comments as you approach.');
            scene.text('"Nah, I bet even Lesco and Petia can\'t stand being around her and, honestly, who can blame them?" Lazar replies, which gets the group laughing so hard you know it\'s pointless to even try and talk to him.');
            scene.text('You approach and try to talk to him, but he straight up ignores you and pretends you\'re not there. After several minutes of this, he finally sighs loudly. "Can\'t you take a fucking hint? No one wants to talk to you!" He then returns to ignoring you and you walk away.');
          }
        }
        scene.actions([
          { label: 'Talk to someone else', goto: ['pav_beach_chat', 'beach_hangout'] },
        ]);
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'beach_hangout':
      enterBeachHangout(s, scene);
      break;
    case 'jocks_list':
      enterJocksList(s, scene);
      break;
    case 'cool_list':
      enterCoolList(s, scene);
      break;
    case 'lazar':
      enterLazar(s, scene);
      break;
    default:
      enterBeachHangout(s, scene);
      break;
  }
}

export const pav_beach_chat: LocationDef = {
  name: 'pav_beach_chat',
  title: 'Beach',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['Some of the cool kids and jocks are lounging around tanning and chatting while others are wading and swimming out in the lake.'],
  enter: enter,
};
