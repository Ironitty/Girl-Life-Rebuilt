import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka', 3);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: You exit the park with your friend, and follow <<$boydesc>> to an apartment near...
  scene.text(`You exit the park with your friend, and follow ${((s as any).boydesc || '')} to an apartment nearby. You all go inside, and continue to drink and have fun there.`);
  if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 1) {
    // TODO-QSP: dynamic text: You begin to hug and kiss <<$boydesc>>. Soon <<$ev_name>> joins in and you''re b...
    scene.text(`You begin to hug and kiss ${((s as any).boydesc || '')}. Soon ${((s as any).ev_name || '')} joins in and you're both kissing the guy, as well as each other.`);
    qspCall(s, 'arousal', 'foreplay', 4, 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck him off', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/threesomebj.jpg');
    // TODO-QSP: dynamic text: You and <<$ev_name>> both get down on your knees in front of <<$boydesc>> and sh...
    scene.text(`You and ${((st as any).ev_name || '')} both get down on your knees in front of ${((st as any).boydesc || '')} and share his cock, giving him a blowjob in turns. When you don't have his cock in your mouth, you spend the idle time by playing with his balls, licking and sucking on them while softly whispering words of encouragement to ${((st as any).ev_name || '')}, challenging her to take the cock deeper down her throat.`);
    qspCall(st, 'arousal', 'bj', 5, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get on your hands and knees for him', handler: (st: GameState) => {
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['park_sex'] === 0) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['park_sex'] = 1;
      }
      if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
      }
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_in_the_park_comment'] = 5;
    }
    (st as any).pose = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/threesome.jpg');
    // TODO-QSP: dynamic text: When you get down on your hands and knees for him, <<$boydesc>> wastes no time a...
    scene.text(`When you get down on your hands and knees for him, ${((st as any).boydesc || '')} wastes no time and immediately gets behind you, ready to fuck you. Just as he slams his cock in and begins to fuck you in earnest, ${((st as any).ev_name || '')} is very turned on by your horny mewling and scoots over in front of you with her legs spread wide. Without a second thought, you immediately begin to lap up her pussy juices from her soaked snatch.`);
    qspCall(st, 'arousal', 'vaginal', 15, 'group');
    qspCall(st, 'arousal', 'cuni_give', (-15), 'group', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 2) {
      (s as any).guy = ((s as any).guy ?? 0) + (1);
      // TODO-QSP: dynamic text: The guys seem to each have picked their favorite girl, and <<$boydesc>> is all o...
      scene.text(`The guys seem to each have picked their favorite girl, and ${((s as any).boydesc || '')} is all over you. While he kisses and gropes you greedily, his friend is doing the same to ${((s as any).ev_name || '')}. She seems to be quite into him, and happily returns him kiss and lets him touch her wherever and however he wants. Within minutes, she lowered her body and is vigorously sucking her guy's cock. Meanwhile, ${((s as any).boydesc || '')} looks at you expectantly as he exposes his hard dick to you, expecting you to do the same.`);
      scene.actions([
        { label: 'Suck off your guy', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/foursomebj.mp4');
    // TODO-QSP: dynamic text: You''re not about to let her show you up! You quickly scoot down on the bed unti...
    scene.text(`You're not about to let her show you up! You quickly scoot down on the bed until your mouth is near his erection. The musky and manly smell of it is impossible to ignore, and actually arouses you a quite a bit. You eagerly take his cock in your mouth and suck on the head, trying to compete with ${((st as any).ev_name || '')}. However, she is one step ahead of you and already has her guy's cock all the way down her throat. The guy has his hand behind her head but realizes he doesn't need to do anything, ${((st as any).ev_name || '')} is giving him the blowjob of a lifetime! You try to smile with ${((st as any).boydesc || '')}'s cock still in your mouth… guess she wins this one. Then you decide to focus solely on making ${((st as any).boydesc || '')} feel good instead, and forget about ${((st as any).ev_name || '')} and the other guy.`);
    qspCall(st, 'arousal', 'bj', 4, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Fuck him', handler: (st: GameState) => {
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['park_sex'] === 0) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['park_sex'] = 1;
      }
      if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_in_the_park_comment'] = 4;
    }
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/foursome.jpg');
    qspCall(st, 'arousal', 'vaginal', 15, 'group');
    qspCall(st, 'arousal', 'cuni_give', (-15), 'group', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).placerParameter ?? 0)?.['number_of_man'] === 3) {
        (s as any).d_dozdat = qspUntranslated(s, "{", { location: "placer_house" });
        (s as any).d_girlfrend_end = qspUntranslated(s, "{", { location: "placer_house" });
        (s as any).d_girlfrend_end2 = qspUntranslated(s, "{", { location: "placer_house" });
        // TODO-QSP: dynamic text: One of the guys suggests you and him could stay in this room, while <<$ev_name>>...
        scene.text(`One of the guys suggests you and him could stay in this room, while ${((s as any).ev_name || '')} goes to the other room with whom she likes.`);
        scene.actions([
          { label: 'Wait for your friend', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    (st as any).cumface = 0;
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      scene.img('images/locations/pavlovsk/park/event/katja/katjacum.jpg');
      scene.text('Eventually, Katja comes out of the room. She has cum smeared all over her face, and looks exhausted… but happy. Very happy.');
    }
    // TODO-QSP: dynamic text: You quickly brush up a little together with <<$ev_name>>, and get ready to leave...
    scene.text(`You quickly brush up a little together with ${((st as any).ev_name || '')}, and get ready to leave the apartment.`);
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
          { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
      qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['park_sex'] === 0) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['park_sex'] = 1;
      }
      if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_in_the_park_comment'] = 1;
    }
    qspCall(st, 'stat', '');
    scene.text('The boys leave to the bathroom to freshen up, leaving you by yourself.');
    scene.actions([
      { label: 'Peek at your friend', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      scene.img('images/locations/pavlovsk/park/event/katja/katjaend.jpg');
      scene.text('You open the door slightly look inside the room. On the bed lies Katja, clearly flustered from getting fucked just now. She\'s eagerly sucking off the boy with her, sucking his cock and pleading and begging for him to cum on her face. The guy does, and Katja happily smears the sperm over her lips and cheeks before licking some of it up.');
      qspCall(st, 'arousal', 'voyeur_sex', 15);
      qspCall(st, 'arousal', 'end');
    }
    scene.text('You pull the door closed, realizing you shouldn\'t be peeking on your friend. Instead, you just sit back on the bed and patiently wait for your friend to be done.');
  } },
    ]);
  } },
          { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
      qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (10);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['park_sex'] < 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['park_sex'] = 2;
      }
      if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] < 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['simultanous_boys'] = 2;
      }
      if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_in_the_park_comment'] = 2;
    }
    qspCall(st, 'stat', '');
    scene.text('The guy crashes down next to you and almost immediately falls asleep. Within minutes his snoring fills the room, and you\'re not quite sure… should you feel flattered for exhausting him so effectively, or insulted that he\'s no longer paying any attention to you?');
    scene.actions([
      { label: 'Peek at your friend', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      scene.img('images/locations/pavlovsk/park/event/katja/katjaendgang.jpg');
      scene.text('The two guys in the room have Katja spitroasted; one of them is furiously fucking her from behind, while Katja is sucking the other guy\'s cock like her life depended on it. Her loud groans are clearly noticeable for you, despite her having a cock in her mouth… you can\'t help but notice how cute she sounds, even during an act such as this.');
      qspCall(st, 'arousal', 'voyeur_sex', 15);
      qspCall(st, 'arousal', 'end');
    }
    scene.text('You pull the door closed, realizing you shouldn\'t be peeking on your friend. Instead, you just sit back on the bed and patiently wait for your friend to be done.');
  } },
    ]);
  } },
          { label: 'Make out with the guy', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/kiss/kiss.jpg');
    // TODO-QSP: dynamic text: You sheepishly smile at the guy as <<$ev_name>> takes the other two guys by the ...
    scene.text(`You sheepishly smile at the guy as ${((st as any).ev_name || '')} takes the other two guys by the hand and leaves the room. Then you move in and kiss him. The guy quickly answers your kiss, and roughly paws at your body hoping to get you naked.`);
    qspCall(st, 'arousal', 'kiss', 5);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take him in your mouth', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/bj.jpg');
    scene.text('You quietly slide down to your haunches, while you rub your hand over the quite noticeable bulge in his pants. Unable to withstand your teasings any longer, he unbuttons his pants and his erect penis jumps out.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    (st as any).tipsexrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((st as any).tipsexrand ?? 0))) {
      qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
      qspCall(st, 'stat', '');
      scene.img('images/locations/pavlovsk/park/event/katja/swallow2.jpg');
      scene.text('You take his cock in your mouth, and start to pleasure him. It doesn\'t take long before his cum fills your throat.');
      qspCall(st, 'arousal', 'bj', 5, 'sub');
      qspCall(st, 'arousal', 'end');
    } else {
      if (((st as any).tipsexrand ?? 0) === 1) {
        scene.img('images/locations/pavlovsk/park/sex/bj.jpg');
        // TODO-QSP: dynamic text: The guy whispers: "<<$pcs_nickname>>, I want you…"
        scene.text(`The guy whispers: "${((st as any).pcs_nickname || '')}, I want you…"`);
        scene.actions([
          { label: 'Redouble your efforts', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/swallow2.jpg');
    scene.text('You smile up at him with his cock still in your mouth, and redouble your efforts to give him the best blowjob you can come up with.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'arousal', 'end');
  } },
          { label: 'Lie on your back', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitkasex1.jpg');
    scene.text('You lie down on your back and the guy quickly spreads your legs, and slams his cock inside your snatch before you can change your mind. While he fucks you vigorously, a second comes up out of nowhere and puts his cock in front of your mouth. Not giving it another thought, you open your mouth and close your lips around it.');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
  } },
          { label: 'Offer him your ass', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/anal2.jpg');
    scene.text('You tease him and whisper back: "Do you want my ass, baby? Just say the word and it\'s all yours…"');
    scene.text('He eagerly nods and nearly stutters over his words a few times, unsure whether you\'re playing a prank on him or not. However, you hold true to your word and undress for him, making a little striptease out of it. Then you get on your hands and knees and wink at him.');
    qspCall(st, 'arousal', 'auto_lube', 'anal');
    qspCall(st, 'arousal', 'striptease', 5);
    qspCall(st, 'arousal', 'anal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
  } },
          { label: 'Stay in the room', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/swing.jpg');
    // TODO-QSP: dynamic text: <<$ev_name>> comes up to you and whispers: "<<$boydesc>> said he had something r...
    scene.text(`${((st as any).ev_name || '')} comes up to you and whispers: "${((st as any).boydesc || '')} said he had something really cool to show me, in private… you'll be fine here by yourself for a while, right?", before leaving to the next room without waiting for an answer.`);
    scene.text('You sheepishly grin at the two guys, and mutter: "Looks like it\'s just us for a while, boys… what do you want to do to pass the time?"');
    scene.text('The boys have some ideas, and sit down next to you. One of them kisses you passionately, while the other plays with your boobs through your clothes.');
    qspCall(st, 'arousal', 'foreplay', 5, 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Stay with the guys', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/doublebj.jpg');
    // TODO-QSP: dynamic text: Well, you are feeling great right now, and these boys are kinda cute… might as w...
    scene.text(`Well, you are feeling great right now, and these boys are kinda cute… might as well have some fun while you wait for ${((st as any).ev_name || '')}!`);
    scene.text('You giggle drunkenly as the boys begin to undress you. Without really realizing what is happening, you find yourself with one hard dick inside your mouth, and another in your hand. You\'re idly massaging it, without even giving it any thought. You decide you might as well give the boys a good show while you wait for your friend, and begin to suck them in turns.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lie on your back', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/mmf/fbdtdouble.jpg');
    // TODO-QSP: dynamic text: You pull away from the boys and lie back on the bed. One of them immediately not...
    scene.text(`You pull away from the boys and lie back on the bed. One of them immediately notices what you want and gets between your legs, slamming his cock inside you. You make a gesture for the other guy to move his cock back to your mouth, which he happily does. Soon you find yourself on some stranger's bed, getting roughly pounded while you're giving another a deepthroating blowjob… is this even about waiting for ${((st as any).ev_name || '')} any more, or do you just enjoy being here?`);
    (st as any).sexrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((st as any).sexrand ?? 0))) {
      qspCall(st, 'dinsex', 'boy_puts_condom');
      qspCall(st, 'dinsex', 'vaginal_sex', 10);
      qspCall(st, 'dinsex', 'sexcum');
      qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
      (st as any).spafinloc = 12;
      qspCall(st, 'cum_manage', '');
      (st as any).spafinloc = 11;
      qspCall(st, 'cum_manage', '');
      qspCall(st, 'stat', '');
      scene.text('Suddenly you feel the cock inside your mouth spasming, and your mouth is filled with his cum.');
      qspCall(st, 'arousal', 'bj', 5, 'sub', 'group', 'deepthroat');
      qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'group');
      qspCall(st, 'stat', '');
    } else {
      if (((st as any).sexrand ?? 0) === 1) {
        scene.text('Suddenly, the guys decide to change places.');
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/doublemiss2.jpg');
    scene.text('The guys change places, and the guy who you had been sucking for the last few minutes easily slides his cock inside you. You\'d done a good job drooling over his dick, and the saliva made his entry very easy. Meanwhile, the guy who had been fucking you for the last few minutes thrusts his cock at your face, and you obediently open your mouth to take it in. When you lick your own juices of him you realize… you kind of like your own taste! You don\'t get long to enjoy it, however. Within the minute he groans, shooting his load all over your exposed tongue and inside your mouth. He pulls out before he is finished, shooting the last drops of his load over your face.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'group', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'group');
    qspCall(st, 'arousal', 'end');
  } },
        ]);
      }
    }
  } },
      { label: 'Get on your hands and knees', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/rakom.jpg');
    scene.text('You quickly take off your clothes, and get down on the bed on your hands and knees.');
    scene.actions([
      { label: 'In your ass', handler: (st: GameState) => {
    (st as any).dick = (Math.floor(Math.random() * 6) + 15);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/group/grupd2.jpg');
    scene.text('You give the boys a sweet smile and ask them: "Boys, I would really like it if you fucked me in my ass right now, it\'s been so long… could you be a dear and make a girl feel good?"');
    scene.text('They gladly agree, and one of them impatiently rubs his cock against your tight spincter. Meanwhile, his friend moves back to your face and offers you his cock to suck on while you get fucked. You open your mouth without hesitation and obediently suck him off, while his friend fucks your ass from behind.');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).sexrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((st as any).sexrand ?? 0))) {
      (st as any).spafinloc = 12;
      qspCall(st, 'cum_manage', '');
      (st as any).spafinloc = 11;
      qspCall(st, 'cum_manage', '');
      qspCall(st, 'stat', '');
      scene.text('Suddenly you feel the cock inside your mouth spasming, shooting his load all over your exposed tongue and inside your mouth. He pulls out before he is finished, shooting the last drops of his cum over your cheeks. Since it would be rude to spit out his load now, you swallow it.');
      qspCall(st, 'arousal', 'bj', 5, 'sub', 'group', 'deepthroat');
      qspCall(st, 'arousal', 'anal', (-5), 'sub', 'group');
      qspCall(st, 'stat', '');
    } else {
      if (((st as any).sexrand ?? 0) === 1) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/anal.jpg');
    scene.text('The first guy pulls his limp cock out of your asshole, truly spent. The guy who you were sucking off earlier is more than happy to take his place; he didn\'t think he would get to fuck your ass today, and quickly makes his move before you can change your mind. He immediately pulls away from your mouth and gets behind you, pushing his cock into your already prepared butthole in one fluent motion.');
    qspCall(st, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'group', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'group');
    qspCall(st, 'arousal', 'end');
  } },
        ]);
      }
    }
  } },
      { label: 'In your pussy', handler: (st: GameState) => {
    (st as any).pose = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/event/katja/doubledog.jpg');
    scene.text('One of the guys moves back to your face, and offers you his cock to suck on while you get fucked. You open your mouth without hesitation and obediently suck him off, while his friend fucks your pussy from behind.');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0));
    (st as any).spafinloc = 12;
    qspCall(st, 'cum_manage', '');
    (st as any).spafinloc = 11;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.text('Suddenly you feel the cock inside your mouth spasming, shooting his load all over your exposed tongue and inside your mouth. He pulls out before he is finished, shooting the last drops of his cum over your cheeks. Since it would be rude to spit out his load now, you swallow it.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'group', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'group');
    qspCall(st, 'arousal', 'end');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).placerParameter ?? 0)?.['number_of_man'] >= 4) {
          (s as any).guy = ((s as any).guy ?? 0) + (2);
          // TODO-QSP: dynamic text: The boys begin to embrace you and your girlfriend, feeling emboldened by the liq...
          scene.text(`The boys begin to embrace you and your girlfriend, feeling emboldened by the liquor they have been drinking. Their touches soon make you want more, and you and ${((s as any).ev_name || '')} make out with the boys while they impatiently tug at your clothes. Two of them seem to have taken a liking to you, while the two others are focusing their efforts on ${((s as any).ev_name || '')}.`);
          scene.actions([
            { label: 'Have sex with two of them', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '', 0, 'Guy', (Math.floor(Math.random() * 18) + 18));
    qspCall(st, 'boyStat', '', ((st as any).npclastgenerated ?? 0), 'b');
    qspCall(st, 'boyStat', '', ((st as any).boy ?? 0), 'a');
    if (((st as any).placerParameter ?? 0)?.['friend_index'] === 14) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (10);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['park_sex'] < 3) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['park_sex'] = 3;
      }
      if (((st as any).katjaQW ?? 0)?.['simultanous_boys'] < 2) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['simultanous_boys'] = 2;
      }
      if (((st as any).dick ?? 0) > ((st as any).npc_throat ?? 0)?.['A14']) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (((st as any).npc_vag ?? 0)?.['A14']*2 < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['sex_in_the_park_comment'] = 4;
    }
    scene.img('images/locations/pavlovsk/park/event/katja/dp.jpg');
    (st as any).pose = 3;
    qspCall(st, 'dinSex', 'boy_wants_anal', ((st as any).boydesc2 ?? 0), 'lubri');
    qspCall(st, 'dinsex2', 'doublepenetration', 20, 'sub', 'gangbang');
    qspCall(st, 'dinsex', 'sexcum');
    qspCall(st, 'cum_call', 'anus', ((st as any).boy2 ?? 0), 1);
    scene.text('The second guy begins to groan while his cock is still inside you and sure enough you feel a warm liquid spreading inside your ass, slowly leaking out. It is quite a large load, and you feel quite a few squirts entering you before he is finally finished.');
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'group');
    qspCall(st, 'arousal', 'vaginal', (-5), 'sub', 'group');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['placer_end', ''] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

export const placer_house: LocationDef = {
  name: 'placer_house',
  region: 'other',
  enter: enter,
};
