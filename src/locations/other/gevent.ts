import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  (s as any).dyadyamishaevent = 1;
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'npcStat', 'A54');
  scene.img('images/characters/pavlovsk/resident/misha/sex/rape.jpg');
  scene.text('You agree to help, and leave the cafe with uncle Misha. When you reach his apartment, he takes you by the hand and pulls you to his bedroom, locking the door with a key behind him. Roughly grabbing you by your hair, he pulls you down to your knees and unbuttons his pants with his other hand.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/misha/sex/bj.mp4');
    scene.text('His erect cock springs to life, which he impatiently pushes against your pursed lips.');
    scene.text('"Open your mouth, whore. You know why you are here", he commands, slapping your cheeks with his hand.');
    scene.text('As you try to resist and keep your mouth shut, he starts rubbing the head of his engorged dick against your lips, spreading his precum over it with a lewd grin on his face. When he realizes you have no intentions of opening your mouth he slaps you harder and harder. After one particularly hard slap he leans over and snarls menacingly: "Stop testing my patience and open up, bitch. I\'m not going to ask again."');
    scene.text('Reluctantly you open your mouth, allowing his vile smelling dick access past your lips. He places the head of his dick firmly inside your mouth and continues to pressure you: "Go on bitch, suck it. You\'ll regret it if you make me do all the work."');
    scene.text('Thoroughly intimidated by his demands, you begin to suck him off obediently. He can tell your heart is not really into it and decides to help out, shoving his cock further and further down your throat until you\'re nuzzling his hairy crotch. He leaves it in a few seconds more than you are comfortable with, making you gag. Watching you struggle puts an evil grin on his face and after a while he pulls his dick out of your mouth, a thick strand of saliva slowly dripping off it.');
    // TODO-QSP: dynamic text: "Not bad <<$pcs_nickname>>, not bad. Lie down, I''m going to have some fun with ...
    scene.text(`"Not bad ${((st as any).pcs_nickname ?? '')}, not bad. Lie down, I'm going to have some fun with you."`);
    qspCall(st, 'arousal', 'bj', 25, 'rough', 'rape');
    scene.actions([
      { label: 'Lie down on the bed', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/misha/sex/sex.mp4');
    scene.text('You are no longer resisting, having lost all hope of getting yourself out of this situation. Lying wearily on the bed, he quickly takes your clothes off and sits down at your feet, examining your pussy with his fingers as much as his eyes.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      (st as any).cumprecheck = 1;
      qspCall(st, 'cum_manage', '');
      scene.text('"You\'re still a virgin? We\'ll have to fix that."');
      scene.text('He mounts you and guides the head of his cock towards your virgin pussy, rubbing it against you for a little while before slamming his cock in all the way, breaking your hymen. It hurts so much! With no concerns for your feelings, he starts hammering his dick in you, while you meekly try to resist but fail to even inconvenience him.');
      qspCall(st, 'arousal', 'vaginal', 25, 'rough');
      scene.text('After raping your pussy for a few minutes, he pulls his dick out and forcibly thrusts it down your throat. You no longer have the strength to even fight it and just go along with whatever he wants to do, trying to appease him so he doesn\'t think of anything worse to do instead. You quietly lick your blood off his dick trying to hide the disgust, and when he cums he pulls back just a bit. You can feel it spasm just as a warm liquid hits your tongue.');
    } else {
      (st as any).cumprecheck = 1;
      qspCall(st, 'cum_manage', '');
      scene.text('"No longer a virgin, eh? No need for me to take it slow, then!"');
      scene.text('He mounts you and guides the head of his cock towards your pussy, rubbing it against your opening for a little while before slamming his cock in all the way. He begins to fuck you with short, intense strokes.');
      if (((st as any).dick ?? 0) - ((st as any).pcs_vag ?? 0) > 10  &&  ((st as any).dick ?? 0) - ((st as any).pcs_vag ?? 0) <= 7) {
        scene.text('The rough handling uncle Misha gives you is feeling quite good, and you wish he\'d fuck you even harder.');
      }
      if (((st as any).dick ?? 0) - ((st as any).pcs_vag ?? 0) > 6  &&  ((st as any).dick ?? 0) - ((st as any).pcs_vag ?? 0) <= 3) {
        scene.text('Uncle Misha\'s thrusts hurt a lot, and you wish for it to be over soon.');
      }
      qspCall(st, 'arousal', 'vaginal', 25, 'rough', 'rape');
      scene.text('After raping your pussy for a few minutes, he pulls his dick out and forcibly thrusts it down your throat. You no longer have the strength to even fight it and just go along with whatever he wants to do, trying to appease him so he doesn\'t think of anything worse to try instead. When he cums he pulls back just a bit, and you can feel it spasm as a warm liquid hits your tongue.');
    }
    scene.actions([
      { label: 'Swallow his cum', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth_swallow', 'A54');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'money', 'earn', 500);
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/resident/misha/sex/cum.mp4');
    scene.text('His sperm tastes quite bitter as it hits your tongue. Nevertheless, knowing it is what he expects you to do, you swallow it and lick your lips clean like an obedient girl.');
    scene.text('"You swallowed it, girl?" he asks, melodramatically patting your head as a sign of approval. He continues: "Very nice. Go ahead and get dressed, I\'ll give you a present for your efforts."');
    // TODO-QSP: dynamic text: Uncle Misha leaves the room as you get dressed, and while you quickly put your c...
    scene.text(`Uncle Misha leaves the room as you get dressed, and while you quickly put your clothes back on you hope that 'present' is not more punishment in some shape or form. To your surprise, his present is actually a bank note worth ${qspFunc(s, 'money', 'string_profit', 500)}.`);
    scene.text('"Go on child, go buy yourself some ice cream. I know you\'re from a poor family, so if you\'re ever in need of money you can come pay me a visit. There\'s more where that came from."');
    scene.text('Having had his fun, he gestures that you should get lost now. You quietly take the money from uncle Misha\'s hand, and leave as he says.');
    scene.actions([
      { label: 'Leave uncle Misha\'s apartment', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter1_1(s: GameState, scene: SceneBuilder): void {
  (s as any).dmishaday = ((s as any).daystart ?? 0);
  qspCall(s, 'npcStat', 'A54');
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  (s as any).minut = ((s as any).minut ?? 0) + 50;
  qspCall(s, 'money', 'earn', 200);
  qspCall(s, 'themes', 'indoors');
  scene.img('images/characters/pavlovsk/resident/misha/sex/mishasex.jpg');
  // TODO-QSP: dynamic text: You leave the cafe with uncle Misha and go to his apartment. He once again locks...
  scene.text(`You leave the cafe with uncle Misha and go to his apartment. He once again locks the door behind him and then turns towards you. Knowing you're here of your own volition this time, he is a bit more daring in his demands: "${((s as any).pcs_nickname ?? '')}, take off your clothes."`);
  // TODO-QSP: dynamic text: You know what he wants and give him a quick striptease, taking off your clothes ...
  scene.text(`You know what he wants and give him a quick striptease, taking off your clothes and performing a little dance as you do. It's not very good, but uncle Misha appreciates the effort anyway. He gets comfortable and watches you slowly reveal your soon to be naked body, and encourages you to do a few erotic poses for him. "Very nice ${((s as any).pcs_nickname ?? '')}, now suck", he says as he pulls out his cock and pulls your face closer to it. You obediently move over to him and close your lips around his dick, gently sucking him off. From the smell of it, the tongue bath you're giving it is the first wash it has had in a while.`);
  scene.text('You\'re doing a good enough job that he doesn\'t feel like he needs to take control of you and just leans back to enjoy your ministrations, sometimes giving you directions. After a few minutes, he pulls you down and rubs the head of his cock against your pussy before slamming it in.');
  qspCall(s, 'arousal', 'bj', 10);
  qspCall(s, 'arousal', 'vaginal', 10);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him!', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/misha/sex/mishasex3.jpg');
    // TODO-QSP: dynamic text: Ultimately, you can tell uncle Misha is close to his orgasm. You try your best t...
    scene.text(`Ultimately, you can tell uncle Misha is close to his orgasm. You try your best to encourage him by squeezing your pussy around his dick, and he rewards you by pulling out and shooting thick ropes of cum on your stomach. Once he recovers from his orgasm, he kisses you on your forehead and drops some crumpled bills worth ${qspFunc(s, 'money', 'string_profit', 200)} on the floor for your efforts. You quickly pick them up as you put your clothes back on and get ready to leave.`);
    qspCall(st, 'arousal', 'vaginal', 5);
    qspCall(st, 'arousal', 'end');
    (st as any).spafinloc = 14;
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave uncle Misha\'s apartment', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'sex', 8);
  qspCall(s, 'money', 'earn', 100);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/2.jpg');
  // TODO-QSP: dynamic text: You quietly leave with the guy, who pulls you towards the men''s room rather urg...
  scene.text(`You quietly leave with the guy, who pulls you towards the men's room rather urgently. After pulling you into one of the stalls, he locks the door and shoves you down to your knees, expecting you to suck his cock as he pulls out his phone. You obediently put your lips around his dick, not wanting to disappoint. Slowly bobbing your head back and forth, you take his dick further and further down your throat until you can lick his balls. He smirks and says: "Nice show. Smile for the camera, baby!", as he pulls his cock out of your mouth and cums all over your face, rubbing his dick against your lips for good measure. After you clean up his cum with your tongue, he quickly pulls up his pants and drops a crumpled bank note. By the time you notice it's only worth ${qspFunc(s, 'money', 'string_profit', 10)}, he is gone. You hope he won't share the video with his friends, but deep inside you know better.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Wash up and return to the cinema lobby', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_cleanup', '', 2);
    qspGoto(st, 'pav_cinema', '');
  } },
    { label: 'Return to the cinema lobby', goto: ['pav_cinema', ''] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka', 3);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 3);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 3);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 3);
  (s as any).guy = ((s as any).guy ?? 0) + (3);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Armenian Male', (Math.floor(Math.random() * 7) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Armenian Male', (Math.floor(Math.random() * 7) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'npcgeneratec', '', 0, 'Armenian Male', (Math.floor(Math.random() * 7) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'b');
  qspCall(s, 'fame', 'pav', 'sex', 8);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/3.jpg');
  scene.text('You go with the Armenian to his home nearby. In the apartment there are two more guys, also Armenians. They speak to each other in their own language, while drinking a lot of alcohol. You don\'t realize just how strong it is until you are completely wasted, then they strip and fuck you, taking turns in all of your holes, finishing inside and all over you, all the while they are filming with their phones. Finally, when they are spent and bored of you, they kicked you out of the apartment.');
  qspCall(s, 'arousal', 'bj', 50, ((s as any).npcID2 ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'vaginal', 50, ((s as any).npcID ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'anal', (-50), ((s as any).npcID1 ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'cum_call', '', '', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'anus', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID2 ?? 0));
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID2 ?? 0));
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/4.jpg');
  scene.text('You accompany the guy to his house, where you enjoy a few beverages with him. A while later you find yourself on your back, getting pounded by this stranger. He rides you with his hairy body and pulls out right before he orgasms, draping his load all over your buttocks. Not bothering to clean it up, you simply get dressed. You sit back down and chat with him for a while, drinking some tea in an attempt to sober up before leaving. You still feel rather drunk when you close the door behind you, returning to the streets.');
  qspCall(s, 'arousal', 'vaginal', 20, 'humiliation');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to Pavlovsk', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).cumprecheck = 1;
  qspCall(s, 'cum_manage', '');
  (s as any).spafinloc = 4;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'money', 'earn', 200);
  ((s as any).stat = (s as any).stat ?? {})['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/5.jpg');
  if (((s as any).PCloSkirt ?? 0) > 0) {
    if (((s as any).PCloDress ?? 0) === 1) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: You accompany the guy into the bushes for a quick fuck. He simply lifts up your ...
        scene.text(`You accompany the guy into the bushes for a quick fuck. He simply lifts up your dress and yanks down your panties before thrusts his cock inside you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      } else {
        // TODO-QSP: dynamic text: The guy leads you into the bushes for a quick fuck. He simply pulls up your dres...
        scene.text(`The guy leads you into the bushes for a quick fuck. He simply pulls up your dress and thrusts his cock inside you. "No panties, nice," he winks as he starts to fuck you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: You follow the guy into the bushes for a quick fuck. He simply undoes your skirt...
        scene.text(`You follow the guy into the bushes for a quick fuck. He simply undoes your skirt, yanks down your panties, and thrusts his cock inside you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      } else {
        // TODO-QSP: dynamic text: The man takes you into the bushes for a quick fuck. He simply undoes your skirt ...
        scene.text(`The man takes you into the bushes for a quick fuck. He simply undoes your skirt before thrusts his cock inside you. "No panties, nice," he winks as he starts to fuck you hard. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      }
    }
  } else {
    if (((s as any).PCloPants ?? 0) === 6) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: The guy hurries you into the bushes for a quick fuck. He doesn''t bother to undr...
        scene.text(`The guy hurries you into the bushes for a quick fuck. He doesn't bother to undress you, just pushes your shorts and panties to the side and thrusts his dick inside you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      } else {
        // TODO-QSP: dynamic text: The guy pulls you into the bushes for a quick fuck. He pushes your shorts to the...
        scene.text(`The guy pulls you into the bushes for a quick fuck. He pushes your shorts to the side and thrusts his dick inside you. "No panties, nice," he chuckles as he starts to fuck you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      }
    } else {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: dynamic text: The guy leads you into the bushes for a quick fuck. He yanks your pants down to ...
        scene.text(`The guy leads you into the bushes for a quick fuck. He yanks your pants down to your knees and shoves his cock inside you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      } else {
        // TODO-QSP: dynamic text: The guy takes you into the bushes for a quick fuck. He pulls down your pants to ...
        scene.text(`The guy takes you into the bushes for a quick fuck. He pulls down your pants to your knees and pushes his cock deep inside you. "No panties, nice," he grunts as he starts to fuck you. Within minutes, his breathing grows heavier and he pulls out, jerking his load onto your ass cheeks. "Nice, babe…" he pants. "You're definitely worth the money", as he hands you ${qspFunc(s, 'money', 'string_profit', 200)} and leaves.`);
      }
    }
  }
  qspCall(s, 'arousal', 'vaginal', 15, 'prostitution');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Straighten your clothes', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', (Math.floor(Math.random() * 9) + 8));
  (s as any).guyondisco = (Math.floor(Math.random() * 6) + 5);
  (s as any).guy = ((s as any).guy ?? 0) + (((s as any).guyondisco ?? 0));
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', ((s as any).guyondisco ?? 0));
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', ((s as any).guyondisco ?? 0));
  (s as any).guyondiscotime = 600 / ((s as any).guyondisco ?? 0);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  // TODO-QSP: :geventgondloop
  qspCall(s, 'npcgeneratec', '', 0, 'guy from the disco', (Math.floor(Math.random() * 9) + 19), 0, 1);
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'arousal', 'bj', ((s as any).guyondiscotime ?? 0), ((s as any).npcID ?? 0), 'rough', 'rape', 'humiliation', 'group');
  // TODO-QSP: gs 'arousal', 'vaginal', -guyondiscotime, $npcID, 'rough', 'rape', 'humiliation', 'group'
  qspCall(s, 'cum_call', 'vagina', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'anus', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'butt', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'back', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'legs', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'arms', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0));
  (s as any).guyondisco = ((s as any).guyondisco ?? 0) - (1);
  if (((s as any).guyondisco ?? 0) > 0) {
    // TODO-QSP: jump 'geventgondloop'
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/6.1.jpg');
  scene.text('You barely remember what happened. You were standing against the wall at the disco, quietly enjoying the admittedly rather outdated music when a guy approached you. He started groping you, but you were too drunk to stop him. It also felt kind of nice to be wanted, so you just went along with it.');
  scene.text('The next thing you remember: you were on your knees, sucking him off in the bathroom stalls. After he came in your mouth he took you away from the disco to a different place, where several of his friends had already gathered. "Dude, nice!" they praised his catch, while you unsteadily tried to move to the couch to sit down. You never made it to the couch, the guys immediately surrounded you and started to maul you from all sides.');
  scene.text('Taking their turns fucking your mouth and pussy mercilessly, some even came back for seconds while one of them made sure to capture all of it on camera. The last thing you remember is him taking some close-ups of your cum-covered face, saying: "Man look at this whore, no inhibitions whatsoever! This video is going to be a huge hit on the internet!"');
  scene.text('By the time you wake up again it\'s the middle of the next day, and you are lying naked in a ditch somewhere just outside of town, covered in semen. Luckily they were decent enough to at least give you your clothes back, which you find in a pile next to you with your other belongings. As you quickly get dressed you silently pray they reconsidered and didn\'t share the video, but at the same time know better. As you make your way back to Pavlovsk you realize this probably hurt your reputation in town as a result, since many people will have seen the video by now.');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the Pavlovsk streets', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  (s as any).guy = ((s as any).guy ?? 0) + (2);
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 2);
  qspCall(s, 'arousal_funcs', 'stretch', 'anal', 2);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 2);
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'npcgeneratec', '', 0, 'Apartment Boy', (Math.floor(Math.random() * 7) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
  qspCall(s, 'npcgeneratec', '', 0, 'Apartment Boy', (Math.floor(Math.random() * 7) + 19));
  qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/7.jpg');
  scene.text('The guys bring you back to their apartment, where they swiftly strip you of your clothes and subsequently fuck you in all holes, taking turns spitroasting you. When they\'re close to cumming, they force you down on your knees and they both release their loads onto your face. Before you even get a chance to wash up they kick you out, leaving you to get dressed on the streets. You desperately grab your clothes from the ground and quickly hide behind a car as you put them on, hoping no random passers-by spotted you. One of the guys is watching you through the window the whole time, and you can hear his laughter while you run away as quickly as you can.');
  qspCall(s, 'arousal', 'bj', 25, ((s as any).npcID ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'bj', 25, ((s as any).npcID1 ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'vaginal', 25, ((s as any).npcID ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'vaginal', 25, ((s as any).npcID1 ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'anal', (-25), ((s as any).npcID ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'arousal', 'anal', (-25), ((s as any).npcID1 ?? 0), 'rough', 'rape', 'humiliation', 'group');
  qspCall(s, 'cum_call', 'vaginal', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0));
  qspCall(s, 'cum_call', 'vaginal', ((s as any).npcID1 ?? 0));
  qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0));
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the Pavlovsk streets', goto: ['pav_residential', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  const arg = s.locArg;
  switch (arg) {
    case '1':
      enter1(s, scene);
      break;
    case '1-1':
      enter1_1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gevent: LocationDef = {
  name: 'gevent',
  title: 'You agree to help, and leave the cafe with uncle Misha. When',
  region: 'other',
  enter: enter,
};
