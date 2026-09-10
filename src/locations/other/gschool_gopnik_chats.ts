import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    // TODO-QSP: dynamic text: Vitek scowls. "What's this garbage I hear about what you and <<$gnikname>> did? ...
    scene.text(`Vitek scowls. "What's this garbage I hear about what you and ${((s as any).gnikname ?? 0)} did? The whole town already knows and the guys have been telling me all about it. You fucking slut!"`);
    qspCall(s, 'willpower', 'misc', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Argue that it\'s not true [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Argue that it\'s not true', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    qspCall(s, 'willpower', 'pay', 'force');
    if (((s as any).fame ?? 0)?.['pav_sex'] > 75) {
      qspCall(s, 'fame', 'pav', 'sex', (-75));
    }
    if (((s as any).fame ?? 0)?.['pav_prostitute'] > 75) {
      qspCall(s, 'fame', 'pav', 'prostitute', (-75));
    }
    qspCall(s, 'stat', '');
    scene.text('It takes a while, but you manage to convince him that it\'s just gossip and none of it is true.');
    scene.text('He frowns. "I\'ll knock their teeth out if they whisper one more word about you then. Don\'t worry baby. I\'ll shut their yapping mouths."');
    qspCall(s, 'mood', 'raise', 'medium');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accuse him of sleeping around', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'set', 'A9', 0);
    (s as any).kotovLoveQW = (-1);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You start yelling at Vitek about him fucking other girls. Vitek starts yelling at you before there\'s a sudden ringing in your head and your vision goes blurry.');
    scene.text('You find you\'re on the floor with Vitek standing over you. Your cheek burns with pain and it takes you a few seconds to figure out what happened. It seems he slapped you so hard that he knocked you off your feet.');
    scene.text('"Stay away from me, you fucking whore! It\'s over between us!"');
    qspCall(s, 'pain', '', 7, 'cheeks', 'slap');
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
      scene.text('"Hey Vitek, what did the virgin say after her first blowjob?"');
      scene.text('"I don\'t know, what did she say?" Vitek shrugs while you use the opportunity to take a mouthful of water.');
      scene.text('"I love you…" you reply, pretending that the water dripping out of your mouth is cum while you talk.');
      scene.text('This gets laughs from a few others, and you manage to get him to talk about a variety of things the group is up to. He only insults you every so often, but in an almost friendly way.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A9')
    } else {
      scene.text('You sit on the stairs near Vitek. He glances at you and gives you a look of disgust. "Get the fuck away from me, slut!"');
      scene.text('"Maybe she\'s looking for a fuck?" Dan chimes in as he gives you a dark look.');
      scene.text('Seeing the mood turning dark and ugly, you beat a hasty retreat, hearing the laughter behind you.');
      scene.text('You sit on the stairs near Vitek and he turns to you. "What\'s up, slut?"');
      scene.text('You grimace slightly, but what can you say> You\'re pretty much the gopnik\'s party slut by your own choice.');
      scene.text('"I just wanted to say hi and talk is all," you reply.');
      scene.text('He laughs. "Who knew your mouth was good for anything other than sucking cock?"');
      scene.text('You put up with the comments and end up talking to him, managing to get him to talk a little but not much.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A9')
    }
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
        scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. As you listen, Vitek starts talking about a dream he had about Bella, a sex dream of course.');
        scene.text('"Of course, just as I was getting to the best part, Lena wakes me up by slapping my dick. The fucking bitch laughed about it! Now that\'s a fucked up way to be woken up!"');
        scene.text('"You think I\'d have a shot with Bella? I saw her tight ass in gym class and damn, would I love to plow that. Would a BMW impress her?"');
        scene.text('"Never say never," you say while patting him in the back. You talk to him for a while, mostly about the girls he would like to bang.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A9')
      } else {
        scene.text('As you approach Vitek, he looks at you and glares. "Fuck off, princess!"');
        scene.text('You try to talk to him, but he pretty much ignores you.');
        scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
        // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when they notice you.
        scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when they notice you.`);
        scene.text('"I just wanted to say hi and talk is all," you reply.');
        scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He only answers a few, but doesn\'t completely ignore you.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A9'] >= 60) {
        // TODO-QSP: dynamic text: You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stori...
        scene.text(`You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. "What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when they notice you.`);
        scene.text('"I just wanted to say hi and talk is all," you reply.');
        scene.text('He shrugs. "Whatever." He then goes back to talking, but now including you in the conversation.');
        // TODO-QSP: dynamic text: Just as the bell rings, Vitek smiles at you. "You know what? You're a pretty coo...
        scene.text(`Just as the bell rings, Vitek smiles at you. "You know what? You're a pretty cool chick, ${((s as any).pcs_nickname ?? 0)}."`);
        // TODO-QSP: $func('npc_reactions', 'general', 'A9')
      } else {
        scene.text('As you approach Vitek, he looks at you and glares. "Fuck off, dyke."');
        scene.text('You try to talk to him, but he pretty much ignores you.');
        scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. "I want to punch Christina in the face when I see her!" Vitek growls.');
        scene.text('"Whoah, what did she do?" you inquire');
        scene.text('"I was putting the moves on Lina and she was about to drop to her knees and give me a blowjob right there and then before Christina stormed over and dragged her away, the fucking bitch!"');
        scene.text('You just shake your head and listen to the guys talk about the girls they have banged or want to bang.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A9')
      }
      if (((s as any).grupTipe ?? 0) === 3) {
        if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          scene.text('"Hey, you\'re friends with Zinaida, right?" Vitek asks when they notice you.');
          scene.text('"Yeah, why? Want her to help you with your studies or something?" you reply.');
          scene.text('"No no, nothing like that. We thought, being her friend, you could take a picture of Zinaida\'s tits for us, you know?" He mimics large breasts with his hands. "It\'s Dan\'s birthday."');
          scene.text('You just roll your eyes and ignore their request. You still don\'t know how that rumor got started and instead talk with the boys for a while.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A9')
        } else {
          scene.text('Before you can even say hello, Vitek forcefully shoves you into the wall as he walks past.');
          scene.text('You get the message and walk away.');
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          scene.text('"This isn\'t the place where good girls like you should hang out," Vitek says when they notice you and tries to direct you back to where you came from.');
          scene.text('"Girls like me?" you reply.');
          scene.text('"You know… Whatever, just keep quiet." He lights his cigarette and returns to chatting with the boys.');
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A9'] >= 50) {
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          scene.text('After a few questions, he starts telling you about some of his more exciting adventures and you\'re soon both laughing about them and telling them stories of your own.');
          if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
            (s as any).gopnik_fight_nightQW['invite'] = 1;
            qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
            scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A9')
        } else {
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          scene.text('"What do you want, you stupid fucking cow?" Vitek snarls when they notice you.');
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('He glares at you. "Fuck off, bitch!" He then goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He ignores your questions, but doesn\'t chase you off either.');
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when they notice you.
          scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when they notice you.`);
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures. You\'re soon both laughing about them.');
          if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
            (s as any).gopnik_fight_nightQW['invite'] = 1;
            qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
            scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
          }
        }
        if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
          scene.text('You greet and swap few words, though he seems indifferent towards you and rejoins his friends, leaving you standing alone.');
        } else {
          scene.text('"Why are you staring me? You retarded or something, freak?" Vitek snarls loudly so everyone nearby can hear while his friends join him in laughing at you.');
          scene.text('You try to explain, but get cut off by Vitek. "Get lost while you still can, cunt!"');
          scene.text('He rejoins his friends and, not wanting to push your luck, you move away.');
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
          scene.text('"What do you want, you stupid cow?" Vitek asks when they notice you.');
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He only answers a few, but doesn\'t completely ignore you.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A9')
        }
      }
      scene.actions([
        { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
  }
  scene.build();
}

export const gschool_gopnik_chats: LocationDef = {
  name: 'gschool_gopnik_chats',
  region: 'other',
  enter: enter,
};
