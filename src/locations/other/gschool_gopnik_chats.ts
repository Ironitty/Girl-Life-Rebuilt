import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterVitek(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).fame ?? 0)?.['pav_slut'] > 200) {
    // TODO-QSP: dynamic text: Vitek scowls. "What''s this garbage I hear about what you and <<$gnikname>> did?...
    scene.text(`Vitek scowls. "What's this garbage I hear about what you and ${((s as any).gnikname || '')} did? The whole town already knows and the guys have been telling me all about it. You fucking slut!"`);
    qspCall(s, 'willpower', 'misc', 'force', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Argue that it\'s not true', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Argue that it\'s not true', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    qspCall(st, 'willpower', 'pay', 'force');
    if (((st as any).fame ?? 0)?.['pav_sex'] > 75) {
      qspCall(st, 'fame', 'pav', 'sex', (-75));
    }
    if (((st as any).fame ?? 0)?.['pav_prostitute'] > 75) {
      qspCall(st, 'fame', 'pav', 'prostitute', (-75));
    }
    qspCall(st, 'stat', '');
    scene.text('It takes a while, but you manage to convince him that it\'s just gossip and none of it is true.');
    scene.text('He frowns. "I\'ll knock their teeth out if they whisper one more word about you then. Don\'t worry baby. I\'ll shut their yapping mouths."');
    qspCall(st, 'mood', 'raise', 'medium');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Accuse him of sleeping around', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'set', 'A9', 0);
    (st as any).kotovLoveQW = (-1);
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You start yelling at Vitek about him fucking other girls. Vitek starts yelling at you before there\'s a sudden ringing in your head and your vision goes blurry.');
    scene.text('You find you\'re on the floor with Vitek standing over you. Your cheek burns with pain and it takes you a few seconds to figure out what happened. It seems he slapped you so hard that he knocked you off your feet.');
    scene.text('"Stay away from me, you fucking whore! It\'s over between us!"');
    qspCall(st, 'pain', '', 7, 'cheeks', 'slap');
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
        scene.text('"Hey Vitek, what did the virgin say after her first blowjob?"');
        scene.text('"I don\'t know, what did she say?" Vitek shrugs while you use the opportunity to take a mouthful of water.');
        scene.text('"I love you…" you reply, pretending that the water dripping out of your mouth is cum while you talk.');
        scene.text('This gets laughs from a few others, and you manage to get him to talk about a variety of things the group is up to. He only insults you every so often, but in an almost friendly way.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A9')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
          scene.text('You sit on the stairs near Vitek. He glances at you and gives you a look of disgust. "Get the fuck away from me, slut!"');
          scene.text('"Maybe she\'s looking for a fuck?" Dan chimes in as he gives you a dark look.');
          scene.text('Seeing the mood turning dark and ugly, you beat a hasty retreat, hearing the laughter behind you.');
        } else {
          scene.text('You sit on the stairs near Vitek and he turns to you. "What\'s up, slut?"');
          scene.text('You grimace slightly, but what can you say> You\'re pretty much the gopnik\'s party slut by your own choice.');
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('He laughs. "Who knew your mouth was good for anything other than sucking cock?"');
          scene.text('You put up with the comments and end up talking to him, managing to get him to talk a little but not much.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A9')
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
          scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. As you listen, Vitek starts talking about a dream he had about Bella, a sex dream of course.');
          scene.text('"Of course, just as I was getting to the best part, Lena wakes me up by slapping my dick. The fucking bitch laughed about it! Now that\'s a fucked up way to be woken up!"');
          scene.text('"You think I\'d have a shot with Bella? I saw her tight ass in gym class and damn, would I love to plow that. Would a BMW impress her?"');
          scene.text('"Never say never," you say while patting him in the back. You talk to him for a while, mostly about the girls he would like to bang.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A9')
        } else {
          if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
            scene.text('As you approach Vitek, he looks at you and glares. "Fuck off, princess!"');
            scene.text('You try to talk to him, but he pretty much ignores you.');
          } else {
            scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
            // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when they notice you.
            scene.text(`"What do you want, ${((s as any).pcs_nickname || '')}?" Vitek asks when they notice you.`);
            scene.text('"I just wanted to say hi and talk is all," you reply.');
            scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He only answers a few, but doesn\'t completely ignore you.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A9'] >= 60) {
            // TODO-QSP: dynamic text: You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stori...
            scene.text(`You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. "What do you want, ${((s as any).pcs_nickname || '')}?" Vitek asks when they notice you.`);
            scene.text('"I just wanted to say hi and talk is all," you reply.');
            scene.text('He shrugs. "Whatever." He then goes back to talking, but now including you in the conversation.');
            // TODO-QSP: dynamic text: Just as the bell rings, Vitek smiles at you. "You know what? You''re a pretty co...
            scene.text(`Just as the bell rings, Vitek smiles at you. "You know what? You're a pretty cool chick, ${((s as any).pcs_nickname || '')}."`);
            // TODO-QSP: $func('npc_reactions', 'general', 'A9')
          } else {
            if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
              scene.text('As you approach Vitek, he looks at you and glares. "Fuck off, dyke."');
              scene.text('You try to talk to him, but he pretty much ignores you.');
            } else {
              scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories. "I want to punch Christina in the face when I see her!" Vitek growls.');
              scene.text('"Whoah, what did she do?" you inquire');
              scene.text('"I was putting the moves on Lina and she was about to drop to her knees and give me a blowjob right there and then before Christina stormed over and dragged her away, the fucking bitch!"');
              scene.text('You just shake your head and listen to the guys talk about the girls they have banged or want to bang.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A9')
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
              scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
              scene.text('"Hey, you\'re friends with Zinaida, right?" Vitek asks when they notice you.');
              scene.text('"Yeah, why? Want her to help you with your studies or something?" you reply.');
              scene.text('"No no, nothing like that. We thought, being her friend, you could take a picture of Zinaida\'s tits for us, you know?" He mimics large breasts with his hands. "It\'s Dan\'s birthday."');
              scene.text('You just roll your eyes and ignore their request. You still don\'t know how that rumor got started and instead talk with the boys for a while.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A9')
            } else {
              if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
                scene.text('Before you can even say hello, Vitek forcefully shoves you into the wall as he walks past.');
                scene.text('You get the message and walk away.');
              } else {
                scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
                scene.text('"This isn\'t the place where good girls like you should hang out," Vitek says when they notice you and tries to direct you back to where you came from.');
                scene.text('"Girls like me?" you reply.');
                scene.text('"You know… Whatever, just keep quiet." He lights his cigarette and returns to chatting with the boys.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A9'] >= 50) {
                scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
                scene.text('After a few questions, he starts telling you about some of his more exciting adventures and you\'re soon both laughing about them and telling them stories of your own.');
                if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                  ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                  scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                }
                // TODO-QSP: $func('npc_reactions', 'general', 'A9')
              } else {
                if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
                  scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
                  scene.text('"What do you want, you stupid fucking cow?" Vitek snarls when they notice you.');
                  scene.text('"I just wanted to say hi and talk is all," you reply.');
                  scene.text('He glares at you. "Fuck off, bitch!" He then goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He ignores your questions, but doesn\'t chase you off either.');
                } else {
                  scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
                  // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when they notice you.
                  scene.text(`"What do you want, ${((s as any).pcs_nickname || '')}?" Vitek asks when they notice you.`);
                  scene.text('"I just wanted to say hi and talk is all," you reply.');
                  scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures. You\'re soon both laughing about them.');
                  if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                    ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                    qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                    scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                  }
                }
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A9'] >= 70) {
                scene.text('You greet and swap few words, though he seems indifferent towards you and rejoins his friends, leaving you standing alone.');
              } else {
                if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
                  scene.text('"Why are you staring me? You retarded or something, freak?" Vitek snarls loudly so everyone nearby can hear while his friends join him in laughing at you.');
                  scene.text('You try to explain, but get cut off by Vitek. "Get lost while you still can, cunt!"');
                  scene.text('He rejoins his friends and, not wanting to push your luck, you move away.');
                } else {
                  scene.text('You sit on the stairs near Vitek and listen to him, Dan and Vasily telling stories.');
                  scene.text('"What do you want, you stupid cow?" Vitek asks when they notice you.');
                  scene.text('"I just wanted to say hi and talk is all," you reply.');
                  scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He only answers a few, but doesn\'t completely ignore you.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A9')
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterRadomir(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('"Well well well, if it isn\'t my favorite groupie slut," Radomir says as you approach.');
    scene.text('You smile and put up with the comments, knowing this is now your place among the gopniks.');
    scene.text('He tells you that you should stop by practice sometime, saying the boys could use some "stress release", which leads to him talking about the band and where they will be playing.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A154')
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      qspCall(s, 'npc_relationship', 'modify', 'A154', 'dislike');
      scene.text('As you start to say something to him, he interrupts you. "Get lost, slut! I can\'t be seen with the likes of you! I have a reputation to uphold!"');
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A154'] >= 50) {
          if (((s as any).pcs_hotcat ?? 0) >= 6) {
            scene.text('Radomir is talking about the band\'s latest gig as you approach.');
            scene.text('He gives you a wink when he sees you. "What\'s up, hot stuff?"');
            scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
            if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
              ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
              qspCall(s, 'calendar', 'add', 'band_practice_event');
              scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
              scene.text('You tell him you will and you both head to class.');
            }
            if (((s as any).npc_rel ?? 0)?.['A154'] >= 50  &&  ((s as any).radomirQW ?? 0)?.['first_visit'] === 0) {
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you should come over to my place today and hang out. Wha...
              scene.text(`"Hey ${((s as any).pcs_nickname || '')}, you should come over to my place today and hang out. What do you say?"`);
              scene.actions([
                { label: 'Not today', goto: ['gschool_gopnik_chats', 'rad_invite_no'] },
                { label: 'Sure', goto: ['gschool_gopnik_chats', 'rad_invite_yes'] },
              ]);
            }
          } else {
            scene.text('Radomir is talking about the band\'s latest gig as you approach.');
            scene.text('He smirks a little when he sees you. "So what can I do for one of my fans?"');
            scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A154')
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
            scene.text('Radomir is talking about the band\'s latest gig as you approach.');
            scene.text('You\'re not sure if he\'s even seen you as he completely ignores you. Instead, he tells the others about all the girls throwing their panties on stage at him at their last gig. He ignores your comments, like you\'re not even there.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A154')
          } else {
            if (((s as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('Radomir is talking about the band\'s latest gig as you approach. Seeing you, he looks your body up and down. "Looking good girl, looking good…"');
              scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
              if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                qspCall(s, 'calendar', 'add', 'band_practice_event');
                scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                scene.text('You tell him you will and you both head to class.');
              }
            } else {
              scene.text('Radomir is talking about the band\'s latest gig as you approach. He smirks when he sees you. "Come to try and butter me up before I get famous?"');
              scene.text('You ignore his comment and ask him about how things are going for the band. He starts telling you about all the girls throwing their panties on stage and asking a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A154')
            }
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A154'] >= 50) {
            if (((s as any).pcs_hotcat ?? 0) >= 6) {
              scene.text('Radomir is talking about the band\'s latest gig as you approach.');
              scene.text('He notices you and gives you a wink as he looks your body up and down. "Nice to see all the working out is paying off. Looking good."');
              scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
              if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                qspCall(s, 'calendar', 'add', 'band_practice_event');
                scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                scene.text('You tell him you will and you both head to class.');
              }
              if (((s as any).npc_rel ?? 0)?.['A154'] >= 50  &&  ((s as any).radomirQW ?? 0)?.['first_visit'] === 0) {
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you should come over to my place today and hang out. Wha...
                scene.text(`"Hey ${((s as any).pcs_nickname || '')}, you should come over to my place today and hang out. What do you say?"`);
                scene.actions([
                  { label: 'Not today', goto: ['gschool_gopnik_chats', 'rad_invite_no'] },
                  { label: 'Sure', goto: ['gschool_gopnik_chats', 'rad_invite_yes'] },
                ]);
              }
            } else {
              scene.text('Radomir is talking about the band\'s latest gig as you approach.');
              scene.text('He gives you a slight knowing smirk when he sees you. "So what can I do for one of my fans?"');
              scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A154')
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
              scene.text('Radomir is talking about the band\'s latest gig as you approach.');
              scene.text('You\'re not sure if he\'s even seen you as he completely ignores you. Instead, he tells the others about all the girls throwing their panties on stage at him at their last gig. He ignores your comments, like you\'re not even there.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A154')
            } else {
              if (((s as any).pcs_hotcat ?? 0) >= 6) {
                scene.text('Radomir is talking about the band\'s latest gig as you approach. He sees you and looks your body up and down. "Nice to see all the working out is paying off. Looking good."');
                scene.text('You ignore his stares as you ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'band_practice_event');
                  scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                  scene.text('You tell him you will and you both head to class.');
                }
              } else {
                scene.text('Radomir is talking about the band\'s latest gig as you approach. He smirks when he sees you. "Come to try and butter me up before I get famous?"');
                scene.text('You ignore his comment and ask him how things are going for the band. He starts telling you about all the girls throwing their panties on stage and asking a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A154')
              }
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A154'] >= 50) {
              if (((s as any).pcs_hotcat ?? 0) >= 6) {
                scene.text('Radomir is talking about the band\'s latest gig as you approach. He gives you a wink when he sees you. "You know if you just dressed a little more sexy and showed off that hot little bod of yours more, you would be pretty good looking for a nerd."');
                scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                  ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'band_practice_event');
                  scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                  scene.text('You tell him you will and you both head to class.');
                }
                if (((s as any).npc_rel ?? 0)?.['A154'] >= 50  &&  ((s as any).radomirQW ?? 0)?.['first_visit'] === 0) {
                  // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you should come over to my place today and hang out. Wha...
                  scene.text(`"Hey ${((s as any).pcs_nickname || '')}, you should come over to my place today and hang out. What do you say?"`);
                  scene.actions([
                    { label: 'Not today', goto: ['gschool_gopnik_chats', 'rad_invite_no'] },
                    { label: 'Sure', goto: ['gschool_gopnik_chats', 'rad_invite_yes'] },
                  ]);
                }
              } else {
                scene.text('Radomir is talking about the band\'s latest gig as you approach.');
                scene.text('He gives you a wink when he sees you. "So what can I do for one of my fans?"');
                scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage and asking a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A154')
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
                scene.text('Radomir is talking about the band\'s latest gig as you approach.');
                scene.text('You\'re not sure if he\'s even seen you as he completely ignores you. Instead, he tells the others about all the girls throwing their panties on stage at him at their last gig. He ignores your comments, like you\'re not even there.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A154')
              } else {
                if (((s as any).pcs_hotcat ?? 0) >= 6) {
                  scene.text('Radomir is talking about the band\'s latest gig as you approach. He sees you and starts looking your body up and down. "You know if you just dressed a little more sexy and showed off that hot little bod of yours more, you would be pretty good looking for a nerd."');
                  scene.text('You feel like a side of meat on display under his gaze, but do your best to ignore it and ask him how things are going for the band. He starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                  if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                    ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                    qspCall(s, 'calendar', 'add', 'band_practice_event');
                    scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                    scene.text('You tell him you will and you both head to class.');
                  }
                } else {
                  scene.text('Radomir is talking about the band\'s latest gig as you approach. He smirks when he sees you. "Come to try and butter me up before I get famous?"');
                  scene.text('You ignore his comment and ask him how things are going for the band. He starts telling you about all the girls throwing their panties on stage and asking a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A154')
                }
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A154'] >= 50) {
                if (((s as any).pcs_hotcat ?? 0) >= 6) {
                  scene.text('Radomir is talking about the band\'s latest gig as you approach. He gives you a wink when he sees you. "Damn, you make even a school uniform look sexy as hell!"');
                  scene.text('You ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                  if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                    ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                    qspCall(s, 'calendar', 'add', 'band_practice_event');
                    scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                    scene.text('You tell him you will and you both head to class.');
                  }
                  if (((s as any).npc_rel ?? 0)?.['A154'] >= 50  &&  ((s as any).radomirQW ?? 0)?.['first_visit'] === 0) {
                    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, you should come over to my place today and hang out. Wha...
                    scene.text(`"Hey ${((s as any).pcs_nickname || '')}, you should come over to my place today and hang out. What do you say?"`);
                    scene.actions([
                      { label: 'Not today', goto: ['gschool_gopnik_chats', 'rad_invite_no'] },
                      { label: 'Sure', goto: ['gschool_gopnik_chats', 'rad_invite_yes'] },
                    ]);
                  }
                } else {
                  scene.text('Radomir is talking about the band\'s latest gig as you approach.');
                  scene.text('He gives you a wink when he sees you and starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A154')
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
                  scene.text('Radomir is talking about the band\'s latest gig as you approach, but he barely acknowledges you. Instead, he tells the others about all the girls throwing their panties on stage at him at their last gig.');
                  scene.text('He mostly ignores you, but does reply to a few of your comments.');
                } else {
                  if (((s as any).pcs_hotcat ?? 0) >= 6) {
                    scene.text('Radomir is talking about the band\'s latest gig as you approach. When he sees you, he starts looking your body up and down. "Damn, you make even a school uniform look sexy as hell!"');
                    scene.text('You ignore his stares as you ask him how things are going for the band and he starts telling you about all the girls throwing their panties on stage. Asking him a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                    if (((s as any).gopnikbandQW ?? 0)?.['practice_invite'] === 0) {
                      ((s as any).gopnikbandQW = (s as any).gopnikbandQW ?? {})['practice_invite'] = 1;
                      qspCall(s, 'calendar', 'add', 'band_practice_event');
                      scene.text('After the bell rings, you start to head to class when Radomir calls out to you. "Hey, you should stop by the garages sometime and listen to us."');
                      scene.text('You tell him you will and you both head to class.');
                    }
                  } else {
                    scene.text('Radomir is talking about the band\'s latest gig as you walk up. He smirks when he sees you. "Come to try and butter me up before I get famous?"');
                    scene.text('You ignore his comment and ask him how things are going for the band. He starts telling you about all the girls throwing their panties on stage and asking a few questions leads to the two of you talking about where the band\'s going and the success it will have.');
                    // TODO-QSP: $func('npc_reactions', 'general', 'A154')
                  }
                }
              }
            } else {
              qspCall(s, 'npc_relationship', 'modify', 'A154', 'dislike');
              scene.text('As you start saying something to him, he interrupts you. "Get lost, loser! I can\'t be seen with the likes of you! I have a reputation to uphold!"');
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterRadInviteNo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'loathe');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  scene.text('"Sorry, but I can\'t. Maybe some other time?" you reply.');
  scene.text('He frowns and shrugs. "Sure, whatever."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterRadInviteYes(s: GameState, scene: SceneBuilder): void {
  ((s as any).radomirQW = (s as any).radomirQW ?? {})['meet_after_school'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big154.jpg');
  scene.text('"Yeah, I would like that," you reply.');
  scene.text('"Nice babe, I\'ll wait for you at the doors after school."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterRoman(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big157.jpg');
  if (((s as any).npc_rel ?? 0)?.['A157'] >= 50  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('"Well well well, if it isn\'t our little fuck bunny. You looking for a cock to hop on?" Roman asks with a smirk as you approach.');
    scene.text('"I just wanted to say hi and talk is all," you reply.');
    scene.text('"Tell me how much you love cock then." You banter with him for a while, where he rips on you a lot, but at least he talks to you.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A157')
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      qspCall(s, 'npc_relationship', 'modify', 'A157', 'dislike');
      scene.text('As you approach Roman, he snarls at you. "If you so much as open your cum breath mouth at me, I\'ll toss you down these stairs."');
      scene.text('Not wishing to push your luck, you walk away.');
    } else {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        qspCall(s, 'npc_relationship', 'modify', 'A157', (Math.floor(Math.random() * 2) + 0));
        if (((s as any).npc_rel ?? 0)?.['A157'] >= 80) {
          scene.text('"Well, what do you want?" Roman asks as you approach.');
          scene.text('"I just wanted to say hi and talk is all," you reply.');
          scene.text('"Yeah, what about?" You banter with him for a while about a variety of things. He seems friendly enough, considering his reputation.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A157'] <= 20) {
            scene.text('You take a seat near Roman. "What\'s up, Roman?"');
            scene.text('"Get lost, cunt!" he snarls in response.');
            scene.text('"Calm down, I just want to talk." He mostly ignores you and when he does respond, he insults you, but at least he doesn\'t run you off.');
          } else {
            scene.text('"Well, what do you want?" Roman asks as you approach.');
            scene.text('"I just wanted to say hi and talk is all," you reply.');
            scene.text('"Yeah, what about?" You banter with him for a while about a variety of things. He\'s rude and often insulting, but at least he doesn\'t threaten you.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A157')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          qspCall(s, 'npc_relationship', 'modify', 'A157', (Math.floor(Math.random() * 2) + 0));
          if (((s as any).npc_rel ?? 0)?.['A157'] >= 80) {
            scene.text('"Well, what do you want?" Roman asks as you approach.');
            scene.text('"I just wanted to say hi and talk is all," you reply.');
            scene.text('"Whatever…"');
            scene.text('You banter with him for a while about a variety of things. He spends most of the time making fun of you and you get the feeling that, regardless of what he thinks of you, he\'s going to pick on any nerd.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A157'] <= 20) {
              scene.text('You take a seat near Roman. "What\'s up, Roman?"');
              scene.text('"Get lost, cunt!" he snarls in response.');
              scene.text('"Calm down, I just want to talk." He mostly insults you as you try and talk to him, but at least he doesn\'t run you off.');
            } else {
              scene.text('"Fuck off, nerd!" Roman snarls as you approach.');
              scene.text('"I just wanted to say hi and talk is all," you reply.');
              scene.text('"Whatever…"');
              scene.text('You banter with him for a while about a variety of things. He spends most of his time making fun of you and you get the feeling that, regardless of what he thinks of you, he\'s going to pick on any nerd.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A157')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            qspCall(s, 'npc_relationship', 'modify', 'A157', 'like');
            if (((s as any).npc_rel ?? 0)?.['A157'] >= 50) {
              scene.text('"So listen to this, I was arguing with this old hag yesterday. She wouldn\'t let go that I was swearing." Roman is telling one of his crazy stories to the group again.');
              scene.text('You join in, listening and asking him a few questions, and soon the two of you are chatting about a variety of topics.');
              if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A157'] <= 20) {
                scene.text('You take a seat near Roman. "What\'s up, Roman?"');
                scene.text('"Fuck off, bitch!" he snarls in response.');
                scene.text('"Calm down, I just want to talk." He mostly ignores you and when he does respond, he insults you, but at least he doesn\'t run you off.');
              } else {
                scene.text('"Well, what do you want?" Roman asks as you approach.');
                scene.text('"I just wanted to say hi and talk is all," you reply.');
                scene.text('"Yeah, what about?"');
                scene.text('You banter with him for a while about a variety of things. He\'s rude and often insulting, but at least he doesn\'t threaten you.');
                if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                  ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                  scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                }
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A157')
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A157', 'dislike');
            scene.text('You take a seat near Roman. "What\'s up, Roman?"');
            scene.text('"Get lost, cunt!" he snarls in response.');
            scene.text('"Calm down, I just want to talk." He mostly insults you as you try and talk to him, but at least he doesn\'t run you off.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A157')
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterDan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A10', 'like');
  scene.img('images/characters/shared/headshots_main/big10.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('"You lost or just looking for a cock to suck?" Dan asks as you approach.');
    scene.text('"I just wanted to say hi and talk is all," you reply.');
    scene.text('"I bet that\'s rare. Not having your mouth full long enough to talk."');
    scene.text('You banter with him for a while. He rips on you a lot, but at least he talks to you.');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
      ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
      qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
      scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A10')
  } else {
    if (((s as any).npc_rel ?? 0)?.['A10'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('"Hey Dan!" you greet him.');
        // TODO-QSP: dynamic text: "What''s up, <<$pcs_nickname>>?" he replies and the two of you engage in a frien...
        scene.text(`"What's up, ${((s as any).pcs_nickname || '')}?" he replies and the two of you engage in a friendly conversation.`);
        if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
          ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
          qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
          scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
        }
      } else {
        scene.text('"Hey Dan!" you greet him. As usual, Dan is his arrogant self and barely pays any attention to you.');
        scene.text('"Oh, come on Dan! Don\'t act that way. I know you like it when I talk to you."');
        scene.text('"Is that so?" he asks.');
        scene.text('You laugh and the two of you strike up a friendly conversation.');
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A10')
    } else {
      if (((s as any).npc_rel ?? 0)?.['A10'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('"Hey Dan!" you greet him.');
          scene.text('He narrows his eyes at you. "What do you want?"');
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"Well, I\'m busy, so get lost!"');
          scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
        } else {
          scene.text('"Hey Dan!" you greet him.');
          scene.text('He narrows his eyes at you. "What the fuck do you want?"');
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"Yeah? Well, I don\'t want to talk to you."');
          scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A10')
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('You try and talk to him, but he completely ignores you, like you aren\'t even there. You eventually give up and walk away.');
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('"Hey Dan!" you greet him.');
            scene.text('He glances at you. "What do you want?"');
            scene.text('"I just wanted to talk is all," you reply.');
            scene.text('"I\'m not in the mood."');
            scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
            if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
              ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
              qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
              scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
            }
          } else {
            scene.text('"Hey Dan!" you greet him.');
            scene.text('He glances at you. "What do you want?"');
            scene.text('"I just wanted to talk is all," you reply.');
            scene.text('"I\'m not in the mood."');
            scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A10')
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterValentin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A158', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    // TODO-QSP: dynamic text: He smiles as you approach. "What''s up, <<$pcs_nickname>>?"
    scene.text(`He smiles as you approach. "What's up, ${((s as any).pcs_nickname || '')}?"`);
    scene.text('You smile back. "Nothing much just wanted to hang out and talk."');
    scene.text('The two of you talk about a few things as he gets a little hands-on with you, but you\'re used to it.');
    scene.text('As you\'re about to leave, he stops you. "Stop by the garage sometime. I can always use a break and a quick fuck."');
    // TODO-QSP: $func('npc_reactions', 'general', 'A158')
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 300) {
      if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
        // TODO-QSP: dynamic text: He smiles as you approach. "What''s up, <<$pcs_nickname>>?"
        scene.text(`He smiles as you approach. "What's up, ${((s as any).pcs_nickname || '')}?"`);
        scene.text('You smile back. "Nothing much just wanted to hang out and talk."');
        scene.text('The two of you talk about a few things. He gets a little hands-on with you at times, but you\'re used to it.');
        scene.text('As you\'re about to leave, he stops you. "Stop by the garage some time, I can always use a break and a quick fuck."');
        // TODO-QSP: $func('npc_reactions', 'general', 'A158')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
          scene.text('"Hey, Valentin!" you greet him as you approach.');
          scene.text('He frowns at you. "Fuck off, slut!"');
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"The only reason you should ever open that whore mouth of yours is to suck cock, so unless you\'re going to drop to your knees, then get the fuck out of here!"');
          scene.text('He stands up and starts to unbuckle his belt. Seeing the look he and the others are giving you, you decide to leave before something happens.');
        } else {
          scene.text('"Hey, Valentin!" you greet him as you approach.');
          scene.text('He frowns at you. "We have nothing to talk about, so go bother someone else slut!"');
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"Yeah? Well, I don\'t want to talk to you."');
          scene.text('Seeing the look he and the others are giving you, you decide to leave before something happens.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A158'] >= 50) {
          // TODO-QSP: dynamic text: Valentin calls out to you as you approach. "Hey <<$pcs_nickname>>, coming over t...
          scene.text(`Valentin calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}, coming over to slum it with us or did you realize you miss good music and some good fun?"`);
          scene.text('You smile and shake your head. "Not exactly. I just want to hang out a bit and say hi, you know?"');
          scene.text('Valentin winks at you in the most charming way he can. "Well I hope I\'ll see more of you in the future."');
          scene.text('Your cheeks turn red and the two of you engage in a friendly conversation, mostly about the band or his bike.');
          scene.actions([
            { label: 'Ask for a ride on his bike', handler: (st: GameState) => {
    scene.text('Listening to him, you tease him a little. "As soon as you\'ve fixed your bike, I want you to take me on a ride! And I won\'t take no for an answer."');
    // TODO-QSP: dynamic text: Valentin gives you a big smile. "Sure thing, <<$pcs_nickname>>. I''ll send you a...
    scene.text(`Valentin gives you a big smile. "Sure thing, ${((st as any).pcs_nickname || '')}. I'll send you a text as soon as I've finished repairing her and I'll take you on a ride."`);
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
            scene.text('"Hey Valentin!" you greet him as you approach.');
            scene.text('He frowns at you. "We have nothing to talk about, so go bother someone else!"');
            scene.text('"I just wanted to talk is all," you reply.');
            scene.text('"Yeah? Well, I don\'t want to talk to you."');
            scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
          } else {
            scene.text('"Hey Valentin!" you greet him as you approach.');
            // TODO-QSP: dynamic text: He gives you a slight chin up greeting. "Hey <<$pcs_nickname>>. What do you need...
            scene.text(`He gives you a slight chin up greeting. "Hey ${((s as any).pcs_nickname || '')}. What do you need?"`);
            scene.text('"I just wanted to talk is all," you reply.');
            scene.text('He shrugs and you start talking to him. You wouldn\'t say he\'s eager to talk to you, but he doesn\'t seem to mind either.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A158')
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A158'] >= 50) {
            // TODO-QSP: dynamic text: Valentin calls out to you as you approach. "Hey <<$pcs_nickname>>."
            scene.text(`Valentin calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}."`);
            scene.text('You smile as you reply. "You know, I\'ve been busy lately, so I haven\'t really been around here."');
            scene.text('Valentin gives you his most charming smile. "Well, I hope I\'ll see you more frequently in the future."');
            scene.text('You snort a laugh and the two of you engage in a friendly conversation, mostly about the band or his bike.');
            scene.actions([
              { label: 'Ask for a ride on his bike', handler: (st: GameState) => {
    scene.text('Listening to him, you tease him a little. "As soon as you\'ve fixed your bike, I want you to take me on a ride! And I won\'t take no for an answer."');
    // TODO-QSP: dynamic text: Valentin gives you a big smile. "Sure thing, <<$pcs_nickname>>. I''ll send you a...
    scene.text(`Valentin gives you a big smile. "Sure thing, ${((st as any).pcs_nickname || '')}. I'll send you a text as soon as I've finished repairing her and I'll take you on a ride."`);
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
              scene.text('"Hey Valentin!" you greet him as you approach.');
              scene.text('He frowns at you. "We have nothing to talk about, so go bother someone else!"');
              scene.text('"I just wanted to talk is all," you reply.');
              scene.text('"Yeah? Well, I don\'t want to talk to you."');
              scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
            } else {
              scene.text('"Hey, Valentin!" you greet him as you approach.');
              // TODO-QSP: dynamic text: He gives you a slight chin-up greeting. "Hey <<$pcs_nickname>>. What do you need...
              scene.text(`He gives you a slight chin-up greeting. "Hey ${((s as any).pcs_nickname || '')}. What do you need?"`);
              scene.text('"I just wanted to talk is all," you reply.');
              scene.text('He shrugs and you start talking to him. You wouldn\'t say he\'s eager to talk to you, but he doesn\'t seem to mind either.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A158')
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
              // TODO-QSP: dynamic text: Valentin calls out to you as you approach. "Hey <<$pcs_nickname>>, get lost? Or ...
              scene.text(`Valentin calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}, get lost? Or just wanting to take a peek at the wild side?"`);
              scene.text('You smile as you reply. "No, nothing like that. I just wanted to say hi and see what you\'ve been up to of late."');
              scene.text('Valentin gives you his most charming smile. "Well I hope I\'ll see you more frequently in the future. Maybe get a shorter skirt and I will."');
              scene.text('Your cheeks turn red and the two of you engage in a friendly conversation, mostly about the band or his bike.');
              scene.actions([
                { label: 'Ask for a ride on his bike', handler: (st: GameState) => {
    scene.text('Listening to him, you tease him a little. "As soon as you\'ve fixed your bike, I want you to take me on a ride! And I won\'t take no for an answer."');
    // TODO-QSP: dynamic text: Valentin gives you a big smile. "Sure thing, <<$pcs_nickname>>. I''ll send you a...
    scene.text(`Valentin gives you a big smile. "Sure thing, ${((st as any).pcs_nickname || '')}. I'll send you a text as soon as I've finished repairing her and I'll take you on a ride."`);
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                scene.text('"Hey Valentin!" you greet him as you approach.');
                scene.text('He frowns at you. "We have nothing to talk about, so go bother someone else!"');
                scene.text('"I just wanted to talk is all," you reply.');
                scene.text('"Yeah? Well, I don\'t want to talk to you."');
                scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
              } else {
                scene.text('"Hey Valentin!" you greet him as you approach.');
                // TODO-QSP: dynamic text: He gives you a slight chin-up greeting. "Hey <<$pcs_nickname>>. You get lost lit...
                scene.text(`He gives you a slight chin-up greeting. "Hey ${((s as any).pcs_nickname || '')}. You get lost little nerd?"`);
                scene.text('"No, I just wanted to talk is all," you reply.');
                scene.text('He shrugs and you start talking to him. You wouldn\'t say he\'s eager to talk to you, but he doesn\'t seem to mind either.');
                scene.text('After a few minutes, you break off the conversation and bid him farewell as the looks some of the other gopniks are giving you make you nervous.');
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A158')
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A158'] >= 50) {
                // TODO-QSP: dynamic text: Valentin calls out to you as you approach. "Hey <<$pcs_nickname>>, do anything f...
                scene.text(`Valentin calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}, do anything fun lately?"`);
                scene.text('You smile as you reply. "You know, this and that, causing a bit of mayhem when I can."');
                scene.text('Valentin laughs. "Well then, we should hang out sometime and see what we can get up to together."');
                scene.text('His suggestive look and tone of voice make it sound dirty and you don\'t know if he\'s being serious or is joking, so you just shake your head at his comment and the two of you engage in a friendly conversation, mostly about the band or his bike.');
                scene.actions([
                  { label: 'Ask for a ride on his bike', handler: (st: GameState) => {
    scene.text('Listening to him, you tease him a little. "As soon as you\'ve fixed your bike, I want you to take me on a ride! And I won\'t take no for an answer."');
    // TODO-QSP: dynamic text: Valentin gives you a big smile. "Sure thing, <<$pcs_nickname>>. I''ll send you a...
    scene.text(`Valentin gives you a big smile. "Sure thing, ${((st as any).pcs_nickname || '')}. I'll send you a text as soon as I've finished repairing her and I'll take you on a ride."`);
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
                  scene.text('"Hey Valentin!" you greet him as you walk up.');
                  scene.text('He sighs. "What do you want?"');
                  scene.text('"I just wanted to talk is all," you reply.');
                  scene.text('"Yeah? Well I\'m busy, so I don\'t have time for you."');
                  scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
                } else {
                  scene.text('"Hey Valentin!" you greet him as you approach.');
                  scene.text('He gives you a slight nod in greeting.');
                  scene.text('"So what have you been up to?" you ask.');
                  scene.text('"Working on my bike and practicing with the band," he half-heartedly answers, but warms up the more you talk to him. You mostly ask him about his music and his bike, which seems to do the trick.');
                }
              }
              // TODO-QSP: $func('npc_reactions', 'general', 'A158')
            } else {
              if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
                scene.text('"Hey Valentin!" you greet him as you approach.');
                scene.text('He frowns at you. "We have nothing to talk about, so go bother someone else!"');
                scene.text('"I just wanted to talk is all," you reply.');
                scene.text('"Yeah? Well, I don\'t want to talk to you."');
                scene.text('You persist, but he just ignores you. The looks some of the other gopniks are giving you make you nervous, so you give up and walk away.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A158')
              } else {
                scene.text('"Hey Valentin!" you greet him as you approach.');
                scene.text('He frowns at you. "Fuck off, loser!"');
                scene.text('"I just wanted to talk is all," you reply.');
                scene.text('"Why would I want to talk to someone like you? Fuck off before things get ugly."');
                scene.text('You glance around and, seeing the stares of the other gopniks, decide to leave while you still can.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterShulga(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A11', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big11.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    // TODO-QSP: dynamic text: "I''m surprised you don''t walk bow-legged the number of times you''ve been fuck...
    scene.text(`"I'm surprised you don't walk bow-legged the number of times you've been fucked, ${((s as any).pcs_nickname || '')}!" Vasily says with a laugh.`);
    scene.text('You flip him the bird as you sit next to him. The two of you talk about a variety of things, although he keeps asking about who you\'ve fucked or whose dick you just finished sucking.');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
      ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
      qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
      scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A11')
  } else {
    if (((s as any).npc_rel ?? 0)?.['A11'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      if (((s as any).grupTipe ?? 0) === 4) {
        // TODO-QSP: dynamic text: Vasily calls out to you as you approach. "Hey <<$pcs_nickname>>, what''s up?"
        scene.text(`Vasily calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}, what's up?"`);
        scene.text('You smile at him. "Not much. I thought I\'d just come by and hang out with you."');
        scene.text('The two of you engage in a friendly conversation about what\'s been going on.');
        if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
          ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
          qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
          scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
        }
      } else {
        // TODO-QSP: dynamic text: Vasily calls out to you as you approach. "Hey <<$pcs_nickname>>, what''s up?"
        scene.text(`Vasily calls out to you as you approach. "Hey ${((s as any).pcs_nickname || '')}, what's up?"`);
        scene.text('You smile. "Not much. I thought I\'d just come by and hang out with you."');
        scene.text('The two of you engage in a friendly conversation, mostly about when you were both kids.');
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A11')
    } else {
      if (((s as any).npc_rel ?? 0)?.['A11'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('"Hey Vasily!" you greet him as you approach.');
          // TODO-QSP: dynamic text: He frowns at you. "What do you want, <<$pcs_nickname>>?"
          scene.text(`He frowns at you. "What do you want, ${((s as any).pcs_nickname || '')}?"`);
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"Can\'t you find someone else to bother?"');
          scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
        } else {
          scene.text('"Hey Vasily!" you greet him as you approach.');
          // TODO-QSP: dynamic text: He frowns at you. "Stop bothering me, <<$pcs_nickname>>!"
          scene.text(`He frowns at you. "Stop bothering me, ${((s as any).pcs_nickname || '')}!"`);
          scene.text('"I just wanted to talk is all," you reply.');
          scene.text('"Go bother someone else!"');
          scene.text('You persist and he relents. He briefly chats to you before making it clear that he\'s done talking, so you leave him in peace.');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A11')
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Get lost, you fucking slut!" he says with a sneer, more than loud enough for everyone to hear, so you turn and walk away.');
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('As you approach, he greets you with a slight nod. "Hey."');
            scene.text('You smile. "I thought I\'d just come by and hang out with you."');
            scene.text('The two of you engage in a friendly conversation, mostly about when you were both kids.');
            if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
              ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
              qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
              scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
            }
          } else {
            scene.text('As you approach, he greets you with a slight nod. "Hey."');
            scene.text('You smile. "I thought I\'d just come by and hang out with you."');
            scene.text('The two of you engage in a friendly conversation, mostly about when you were both kids.');
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A11')
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterArkadi(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A156', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big156.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('As you approach, he cups his crotch and bounces it. "Yeah, you want this, don\'t you? Well, I don\'t have time to give it to you right now."');
    scene.text('"I just wanted to talk is all," you reply.');
    scene.text('He snorts, but doesn\'t refute what you say as you talk to him.');
    if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
      ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
      qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
      scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
    }
    // TODO-QSP: $func('npc_reactions', 'general', 'A156')
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
      qspCall(s, 'npc_relationship', 'modify', 'A156', 'dislike');
      if (((s as any).npc_rel ?? 0)?.['A156'] >= 50) {
        scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you for a bit."');
        scene.text('He scoffs. "Unless you plan on sucking my dick, then just turn that nasty ass of yours around and get the fuck out of here."');
        scene.text('You glance at him and some of the other gopniks before turning and walking away.');
      } else {
        scene.text('"Get lost, you disgusting whore!" he says before you even make it to him.');
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A156'] >= 70) {
          scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
          scene.text('He scoots over and makes room for you on the step he\'s sitting on. "That so, princess? You want to hear what the world is like from a real man, huh?"');
          scene.text('You roll your eyes and ignore his comment. You know he loves the city, so you ask him questions about it and soon you\'re both chatting away.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A156')
        } else {
          if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
            scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
            scene.text('He snorts and grabs his crotch. "Why don\'t you do something useful with that mouth of yours and suck my dick instead, princess?"');
            scene.text('You ignore his comment and ask him about the city, but he just ignores you, so you give up and walk away.');
          } else {
            scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you for a bit and talk."');
            scene.text('He looks up and down from where he\'s sitting on the stairs, making you feel like a piece of meat on display. "That so, princess? You curious about the dark side, huh?"');
            scene.text('You ignore his stares. You know he loves the city, so you ask him questions about it and soon you\'re both chatting away.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A156')
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 2) {
          if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
            scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
            scene.text('He scoots over and makes room for you on the step he\'s sitting on. "Oh yeah? What about?"');
            scene.text('You know he loves the city, so you ask him questions about it and soon you\'re both chatting away.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
              scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
              scene.text('He snorts and grabs his crotch. "Why don\'t you do something useful with that mouth of yours and suck my dick instead?"');
              scene.text('You ignore his comment and ask him about the city. He mostly ignores you, but occasionally comments about something when you get a fact about the city wrong.');
            } else {
              scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you for a bit and talk."');
              scene.text('He looks up and down from where he\'s sitting on the stairs, making you feel like a piece of meat on display. "That so? So what do you want to talk about?"');
              scene.text('You ignore his stares. You know he loves the city, so you ask him questions about it and soon you\'re both chatting away.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A156')
        } else {
          if (((s as any).grupTipe ?? 0) === 3) {
            if (((s as any).npc_rel ?? 0)?.['A156'] >= 80) {
              scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
              scene.text('He snorts. "Why do you think I would hang out with a nerd like you?"');
              scene.text('You ignore his comment and ask him about the city. He\'s reluctant to talk at first, but eventually starts to respond and tells you about his time in the city.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A156')
            } else {
              if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
                scene.text('He snorts and grabs his crotch. "Why don\'t you suck my dick instead? Or would I have to dress up as an elf or some shit to get you all wet?"');
                scene.text('He laughs at you and several of the others join in. Everyone is soon making fun of you, so you turn around and flee.');
              } else {
                scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you for a bit."');
                scene.text('He snorts. "Why do you think I would hang out with a nerd like you?" Before you can respond, he continues. "Why don\'t you go back to your fellow nerds and prance around pretending to be elves or some shit?"');
                scene.text('He laughs at you and several of the others join in. Everyone is soon making fun of you, so you turn around and flee.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              if (((s as any).npc_rel ?? 0)?.['A156'] >= 50) {
                scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
                scene.text('He scoots over and makes room for you on the step he\'s sitting on. "Sure, what do you want to talk about?"');
                scene.text('You know he loves the city, so you ask him questions about it and you\'re soon both chatting away.');
                if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                  ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                  scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
                  scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
                  scene.text('He snorts and grabs his crotch. "Why don\'t you suck my dick instead?"');
                  scene.text('You ignore his comment and ask him about the city. He\'s reluctant to talk at first, but eventually starts to respond and tells you about his time in the city.');
                } else {
                  scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you for a bit and talk."');
                  scene.text('He looks up at you from where he\'s sitting on the stairs. "Oh yeah? What about?"');
                  scene.text('You know he loves the city, so you ask him questions about it and soon you\'re both chatting away.');
                  if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                    ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                    qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                    scene.text('He comments how he has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                  }
                }
              }
              // TODO-QSP: $func('npc_reactions', 'general', 'A156')
            } else {
              qspCall(s, 'npc_relationship', 'modify', 'A156', 'dislike');
              if (((s as any).npc_rel ?? 0)?.['A156'] >= 80) {
                scene.text('Youa approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
                scene.text('He snorts. "Why do you think I would hang out with a loser like you?"');
                scene.text('You ignore his comment and ask him about the city. He\'s reluctant to talk at first, but eventually starts to respond and tells you about his time in the city.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A156')
              } else {
                scene.text('You approach Arkadi. "Hey, I thought I\'d just come by and hang out with you."');
                scene.text('He snorts. "Why do you think I would hang out with a loser like you?" Before you can respond, he turns to the others. "Maybe she\'s lonely and misses us picking on her?" He turns towards you as you hear several of the others agreeing with him and you start to panic. "Is that it?"');
                scene.text('You shake your head as he gets up and takes a step towards you. You turn and run before they can do whatever it is they were planning. You can hear their laughter echoing behind you as you run away.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLavrenti(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A155', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big155.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
    scene.text('Lavrenti slightly smiles at you while barely looking up from his phone. "Not much. I was just texting some girl I met recently."');
    scene.text('You\'re not surprised by his answer. He was always a good looking guy and now he has that bad boy vibe going for him as well. "Oh, you like her?"');
    scene.text('He laughs and nods. "Fuck yeah! I tore her tight little ass up so much I doubt it\'s tight anymore!" You smile at him, used to how the gopnik boys talk. "Don\'t worry, I\'ll always loving fucking yours."');
    scene.text('He chuckles as he slaps you on the ass and you start talking about other girls, then his legendary parties.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A155')
    scene.text('Just before the bell rings, Lavrenti smiles at you. "My parents will be out of town soon and I was thinking of throwing another party."');
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
      if (((s as any).npc_rel ?? 0)?.['A155'] >= 50) {
        scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
        scene.text('Lavrenti gives you a slight frown. "None of your business."');
        scene.text('You sigh at his response. "I was wondering what to do this weekend…" you tell him, trying to connect with him.');
        scene.text('He doesn\'t look up from texting on his phone. "Knowing you, I imagine it will involve sucking a lot of cocks."');
        scene.text('You try talking to him, but he just ignores you. As soon as the bell rings, he walks away without a word.');
        scene.text('Just before the bell rings, Lavrenti gets the attention of the other gopniks. "Hey guys, my parents will be out of town soon and I was thinking of throwing another party."');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
          scene.text('"Get the fuck away from me, you fucking slut!"');
          scene.text('He stares you down until you walk away.');
        } else {
          scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
          scene.text('Lavrenti gives you a slight frown. "Are you hear to suck my dick?"');
          scene.text('You shake your head. "No, I just wanted to talk is all."');
          scene.text('He looks back down at his phone and keeps texting. "Then fuck off!"');
          scene.text('You try talking to him, but he just ignores you. As soon as the bell rings, he walks away without a word.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A155'] >= 50) {
          scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you Lavrenti?"');
          scene.text('Lavrenti smiles at you while barely looking up from his phone. "Not much. I was just texting some girl I met recently."');
          scene.text('You\'re not surprised by his answer. He was always a good-looking guy and now he has that bad-boy vibe going for him as well. "Oh, you like her?"');
          scene.text('He laughs and nods. "Fuck yeah! I tore her tight little ass up so much I doubt it\'s tight anymore!"');
          scene.text('You smile at him and start talking about girls, then his legendary parties.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A155')
          scene.text('Just before the bell rings, Lavrenti gets the attention of the other gopniks. "Hey guys, my parents will be out of town soon and I was thinking of throwing another party."');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
            scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
            scene.text('Lavrenti glares at you. "My parents will be out of town soon and I was thinking of throwing a party."');
            scene.text('"Sounds great. Parties are always fun," you tell him, wondering if you will get an invite.');
            scene.text('He frowns at you. "Fuck off! You\'re not invited."');
            scene.text('"Come on, don\'t be like that. It\'ll be fun!" you reply.');
            scene.text('He snorts. "You\'re about the last person I would invite."');
            scene.text('You keep talking to him, hoping to warm him up for an invite. You ask about his party, which slowly gets him talking a little.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A155')
          } else {
            scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
            scene.text('Lavrenti gives you a slight shrug. "Not much. I was just thinking about what I want to do this weekend."');
            scene.text('"Me too. I\'m always looking forward to the weekend," you reply, trying to connect with him.');
            scene.text('He chuckles a little. "Yeah, I remember what you guys did on the weekends, so much lamer than what I do now."');
            scene.text('"Oh? In what way?" you ask.');
            scene.text('He snorts, then tells you about what some of the gopniks get up to, which seems to mostly involve partying, fighting, fucking, getting drunk or high and vandalizing stuff for fun.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A155')
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A155'] >= 50) {
            scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
            scene.text('Lavrenti smiles at you. "Not a lot. I was just texting some girl I met."');
            scene.text('You\'re not surprised by his answer. He was always a good-looking guy and now he has that bad-boy vibe going for him as well.');
            scene.text('"Oh. So what did you think of class today?" you ask, wanting to change the subject knowing how gopnik boys talk about girls.');
            scene.text('He sighs and shakes his head. He half-ass talks about class, but the conversation soon turns towards him talking about his legendary parties and he starts telling you about some of the funny things that happened at some of the other gopnik parties.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A155')
            scene.text('Just before the bell rings, Lavrenti gets the attention of the other gopniks. "Hey guys, my parents will be out of town soon and I was thinking of throwing another party."');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
              scene.text('"Get the fuck out of here, nerd!"');
              scene.text('He stares you down until you walk away.');
            } else {
              scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
              scene.text('Lavrenti gives you a slight shrug. "Not much. I was just thinking about what I want to do this weekend."');
              scene.text('"Me too. I\'m always looking forward to the weekend," you reply, trying to connect with him.');
              scene.text('He chuckles. "Let me guess. Studying, followed by playing some video games, maybe hanging out with the other nerds pretending to be elves or something."');
              scene.text('"Is that all you think us nerds do?" you ask.');
              scene.text('He snorts, then tells you about what some of the gopniks get up to, which seems to mostly involve partying, fighting, fucking, getting drunk or high and vandalizing stuff for fun.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A155')
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A155'] >= 50) {
              scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
              scene.text('Lavrenti grins at you and throws his arm around your shoulder in a friendly way. "Not much. I was just texting some girl I met recently."');
              scene.text('You\'re not surprised by his answer. He was always a good-looking guy and now he has that bad-boy vibe going for him as well. "So, you bang her yet?"');
              scene.text('He laughs and nods. "Fuck yeah! I tore her tight little ass up so much I doubt it\'s tight anymore."');
              scene.text('You smile at him, used to how the gopnik boys talk and start talking about girls, then his legendary parties.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A155')
              scene.text('Just before the bell rings, Lavrenti smiles at you. "My parents will be out of town soon and I was thinking of throwing another party."');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
                scene.text('You approach Lavrenti and stand as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
                scene.text('Lavrenti just looks at you. "Why the fuck do you care?"');
                scene.text('"Come on, don\'t be like that. I just want to try and be friends," you reply.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A155')
                scene.text('He\'s reluctant to talk to you and mostly talks to some of the other gopniks. Just before the bell rings, he mentions how he\'s planning to throw another one of his parties soon.');
              } else {
                scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you Lavrenti?"');
                scene.text('Lavrenti smiles at you while barely looking up from his phone. "Not much. I was just texting some girl I met recently."');
                scene.text('You\'re not surprised by his answer. He was always a good-looking guy and now he has that bad-boy vibe going for him as well. "So, you bang her yet?"');
                scene.text('He laughs and nods. "Fuck yeah! I tore her tight little ass up so much I doubt it\'s tight anymore!"');
                scene.text('You smile at him, used to how the gopnik boys talk and start talking about girls, then his legendary parties.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A155')
                scene.text('Just before the bell rings, Lavrenti smiles at you. "My parents will be out of town soon and I was thinking of throwing another party."');
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A155'] >= 50) {
              scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
              scene.text('Lavrenti gives you a slight frown. "Not much. I was just thinking about what I want to do this weekend."');
              scene.text('"Me too. I\'m always looking forward to the weekend," you reply, trying to connect with him.');
              scene.text('He doesn\'t look up from texting on his phone. "Uh-huh."');
              scene.text('You try talking to him, but he just ignores you. As soon as the bell rings, he walks away without a word.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
                scene.text('"Get the fuck out of here, loser!"');
                scene.text('He stares you down until you walk away.');
              } else {
                scene.text('You approach Lavrenti as he leans against the wall near the stairs. "So, what\'s up with you, Lavrenti?"');
                scene.text('Lavrenti gives you a slight frown. "None of your business."');
                scene.text('You sigh at his response. "I was wondering what to do this weekend," you reply, trying to connect with him.');
                scene.text('He doesn\'t look up from texting on his phone. "Uh-huh."');
                scene.text('You try talking to him, but he just ignores you. As soon as the bell rings, he walks away without a word.');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterNiko(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).NikoBreakup ?? 0) === 1) {
    qspGoto(s, 'NikoEv', 'Lunch Breakup');
  } else {
    if (((s as any).NikoBreakup ?? 0) === 3) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
      scene.actions([
        { label: 'Break up with Niko', handler: (st: GameState) => {
    (st as any).NikoEv = (-1);
    (st as any).NikoLuv = (-8);
    (st as any).NikoDate = (-1);
    (st as any).NikoVolkovQW = (-1);
    (st as any).NikoPayback = 1;
    (st as any).NikoBreakup = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/ouch.jpg');
    scene.text('Niko starts to put his arm around you, like he cares about you, like he loves you, but you\'re not falling for it anymore. You\'ve figured out what he really is, so you quickly push him away.');
    scene.text('"Stop! You don\'t love me. You never did."');
    scene.text('He looks shocked and hurt at your words. "Of course I do, everything I\'ve ever done is for you!"');
    scene.text('You can feel the eyes of the other gopniks on you, watching and listening to what\'s going on.');
    scene.text('You shake your head as tears start to well up in your eyes. "Fuck you! You\'re just lying to me like you always do! I\'m not trusting you anymore! Stay away from me!"');
    scene.text('He gets noticeably angry. "You ungrateful bitch! I\'ve done so much for you and spent so much on you. You better fucking apologize!"');
    scene.text('You nod your head. "Sure, I\'ll apologize."');
    scene.text('You take two steps forward and ram your knee into his balls before spitting on him. The other gopniks roar in laughter as Niko goes down holding his balls.');
    if (((st as any).npc_rel ?? 0)?.['A144'] >= 60) {
      scene.text('You hear Anushka over the others\' laughter. "About fucking time."');
    }
    scene.text('You then quickly hurry away before Niko gets back up, heading down the hall.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if ((!((s as any).NikoIntro ?? 0))) {
        qspGoto(s, 'NikoEv', 'Lunch Intro');
      } else {
        if (((s as any).NikoIntro ?? 0) === 1  ||  ((s as any).NikoIntro ?? 0) === -1) {
          qspGoto(s, 'NikoEv', 'Lunch Chat');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKatyusha(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A145', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big145.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
    scene.text('She gives you a look of disgust. "Not really. Some of the girls and I got together last night for fight night. Something <i>you</i> wouldn\'t understand."');
    scene.text('You ask her a few questions and she answers you in as few words as possible before getting up and walking away from you. She clearly isn\'t a fan of how you became a gopnik.');
  } else {
    if (((s as any).npc_rel ?? 0)?.['A145'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
        scene.text('She shakes her head. "Not really. Some of the girls and I got together last night for fight night."');
        scene.text('She goes on to tell you about how some of the gopnik girls get together and fight each other to practice or just to kick the shit out of each other for fun.');
        scene.text('"You should come by sometime and go a few rounds."');
        if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
          ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
          qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
          scene.text('It happens on the third Saturday each month at eight PM.');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A145')
      } else {
        scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
        scene.text('She shakes her head. "Not really. Some of the girls and I got together last night for fight night."');
        scene.text('She then goes on to tell you about how some of the gopnik girls get together and fight each other to practice or just to kick the shit out of each other for fun.');
        scene.text('She then stops and looks you over, as if judging you. "You should come by sometime and go a few rounds. See what you\'re made of."');
        // TODO-QSP: $func('npc_reactions', 'general', 'A145')
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A145'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
          scene.text('She glares at you. "What fucking business is it of yours?"');
          scene.text('You raise your hands to show you didn\'t mean anything by it. "I was just asking is all."');
          scene.text('She starts to say something but stops and gives you a look over before a dark smile creeps onto her face. "You should come by sometime and go a few rounds. See what you\'re made of."');
          scene.text('By the way she\'s looking at you, you think she just wants an excuse to beat your ass.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A145')
        } else {
          scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
          scene.text('She snarls at you. "What fucking business is it of yours?"');
          scene.text('You raise your hands to show you didn\'t mean anything by it. "I was just asking is all."');
          scene.text('"Well fuck off!" she snarls.');
          scene.text('You try to talk to her, but she ignores or snarls at you, driving you off.');
        }
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Get the fuck away from me before I kick your teeth in!"');
          scene.text('You\'re certain she means it, so you beat a hasty retreat.');
        } else {
          scene.text('As you approach her, you see her nursing some bruised knuckles. "Get in a fight?"');
          scene.text('She shakes her head. "Mind your own business!"');
          scene.text('You raise your hands to show you didn\'t mean anything by it. "I was just asking is all."');
          scene.text('"Yeah?" she scowls. "Well don\'t."');
          scene.text('You change the subject to school and she pays half attention to you, clearly not that interested in talking.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLera(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A21', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big21.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    scene.text('As usual, you find Lera and Lena smoking on the stairs.');
    scene.text('"So, hopped on any cocks today bunny?" Lera inquires.');
    scene.text('You sigh. "No. Have you licked any pussy?"');
    scene.text('"No, but you just might if you don\'t watch your mouth!" Lera replies as she spreads her legs.');
    scene.text('You both engage in a bit of back-and-forth banter for the rest of the break.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A21')
  } else {
    if (((s as any).npc_rel ?? 0)?.['A21'] >= 50) {
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('As usual, you find Lera and Lena smoking on the stairs.');
        // TODO-QSP: dynamic text: "What''s up, <<$pcs_nickname>>?" Lera inquires.
        scene.text(`"What's up, ${((s as any).pcs_nickname || '')}?" Lera inquires.`);
        scene.text('You shrug your shoulders. "Nothing much. You?"');
        scene.text('"Nah," Lera says as she shakes her head.');
        scene.text('You both engage in a bit of banter back and forth about how the school day has been.');
        if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
          ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
          qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
          scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A21')
      } else {
        scene.text('Seeing Lera sitting on the steps without Lena, you decide to approach her. "Hey, Lera! What are you up to?"');
        // TODO-QSP: dynamic text: She looks back at you and shrugs her shoulders. "Hi <<$pcs_nickname>>, nothing m...
        scene.text(`She looks back at you and shrugs her shoulders. "Hi ${((s as any).pcs_nickname || '')}, nothing much. Just waiting for Lena."`);
        // TODO-QSP: $func('npc_reactions', 'general', 'A21')
        scene.text('The two of you continue talking for a while until Lena shows up and calls Lera over, ending your conversation.');
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A21'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('As usual, you find Lera and Lena smoking on the stairs. "Hi, Lera! What are you up to?"');
          scene.text('She looks back at you and frowns. "None of your fucking business."');
          scene.text('You continue talking to her, but it\'s mostly one-sided as she alternates between ignoring you and making snide remarks.');
        } else {
          scene.text('As usual, you find Lera and Lena smoking on the stairs. "Hi, Lera! What are you up to?"');
          scene.text('She looks back at you and frowns. "None of your fucking business, bitch!"');
          scene.text('You continue talking to her, but it\'s mostly one-sided as she alternates between ignoring you and making snide remarks.');
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A21')
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Don\'t even come near me with that disgusting cum breath of yours!"');
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('Seeing Lera sitting on the steps without Lena, you decide to approach her. "Hey, Lera! What are you up to?"');
            scene.text('She looks back at you and shrugs her shoulders. "Nothing much. Just waiting for Lena."');
            if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
              ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
              qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
              scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A21')
            scene.text('The two of you continue talking for a while until Lena shows up and calls Lera over, ending your conversation.');
          } else {
            scene.text('Seeing Lera sitting on the steps without Lena, you decide to approach her. "Hey, Lera! What are you up to?"');
            scene.text('She looks back at you and shrugs her shoulders. "Nothing much. Just waiting for Lena."');
            // TODO-QSP: $func('npc_reactions', 'general', 'A21')
            scene.text('The two of you continue talking for a while until Lena shows up and calls Lera over, ending your conversation.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAlyona(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A143', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big143.jpg');
  if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
    if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
      scene.text('As you go to the stairway, you see that Alyona is a little further away from the other gopniks, so you decide to go to her. "Hey Alyona, how are you?"');
      scene.text('When she notices you, she leans against the wall, smiles at you and beckons you to join her as she pulls out a flask out of her pocket. You can smell the alcohol in it.');
      scene.text('"Want a sip?" she asks while holding the flask out.');
      scene.text('"No thanks. Tell me something exciting instead. Something always happens to you," you reply, hoping she has an interesting story to share.');
      scene.text('"More for me," she shrugs and starts to tell you about what happened to her recently. She talks about her quarrels at school, the other gopniks and what trouble they\'ve been getting into together lately. "Not to mention I\'d rather be on the streets than at home…"');
      scene.text('Apparently not wanting to get into any details, she looks at you. "Your turn. I bet you\'ve got some juicy stories. I\'d be surprised if you didn\'t."');
      scene.text('She pumps an eyebrow at you, clearly hinting at your dubious reputation.');
      // TODO-QSP: $func('npc_reactions', 'general', 'A143')
      scene.text('Time passes quickly, and you soon realize your break is over when you hear the bell.');
      scene.text('"I hope we can continue this next time?" you ask as you start walking towards the classroom.');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
        scene.text('You approach Alyona as she\'s talking to the other gopniks. "Hi Alyona, how are you today?"');
        scene.text('"What the hell are you doing here, huh? Are you lost or something? Aren\'t you supposed to be on your knees in the bathroom? Or did you think you were going to hunt down your next victim here? Get out of my sight, slut!" she says while looking you up and down with a piercing stare.');
        scene.text('You can tell she\'s not happy to see you and doesn\'t want your company at all. "I was just…" You try to say something, but it\'s clear from the looks on the others\' faces that you\'re not welcome.');
        scene.text('You don\'t want to cause any trouble. Knowing her quick temper, you turn around and decide you\'d rather spend the break alone. You walk to the side, take out your phone and wait for the next class to start.');
      } else {
        // TODO-QSP: dynamic text: Alyona is sitting on the stairs listening to music. When she sees you approachin...
        scene.text(`Alyona is sitting on the stairs listening to music. When she sees you approaching, she takes out her earbuds. "Hey ${((s as any).pcs_nickname || '')}, what's up?" she asks as she moves a little so you can sit down next to her.`);
        scene.text('As you sit next to her, you start telling her some stories that have happened to you recently. You talk about your adventures, one or two wilder stories, and then anything else that comes to your mind, changing topics quickly.');
        scene.text('"At least someone else in this shitty place knows how to live. I\'m tired of everyone telling me what to do, and especially what not to do!" she says in a complaining tone.');
        scene.text('Maybe that\'s why, although you\'re not friends, you understand each other well. She complains for the next few minutes before stopping. "But enough of that, let\'s listen to some music instead." She hands you one of her earbuds.');
        scene.text('She shows you a few new songs, tells you about her new favorite bands and that she hopes they\'ll come and play in the area one day.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A143')
        scene.text('Before the break is over, she takes back the earbud and stands up. "Okay, I\'ve got some things to do. See you next time." With that, she leaves.');
      }
    }
  } else {
    if (((s as any).grupTipe ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
        // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, what''s up?" Alyona greets you as you make your way up th...
        scene.text(`"Hi ${((s as any).pcs_nickname || '')}, what's up?" Alyona greets you as you make your way up the stairs.`);
        scene.text('"Hey Alyona. How\'s my favorite troublemaker?" you ask, giggling as you lean against the wall. "I know very well you have a story to tell. If you can\'t find any trouble, you\'re always happy to kick up a riot by yourself!" you add jokingly.');
        scene.text('"Huh, you know me, right?" she replies. She takes a deep breath, then starts talking about all the things she\'s been getting into lately. Some of the stories are wild, others are rather naughty, some are sad, and some aren\'t exactly legal, though you\'re not surprised by that at all.');
        scene.text('"And what boring things happened to you?" she asks jokingly, looking at you and rolling her eyes. "I promise I\'ll try not to fall asleep while I\'m listening."');
        scene.text('"Hey, that\'s not fair!" You tap her on the shoulder and then talk about some things that happened to you recently. You also complain, mostly about how much traveling you have to do to buy some nice clothes or for a little beautification. You also tell her about how random people always walk up you to ask for a date.');
        scene.text('"Well, that\'s not my problem. I guess it\'s the downside of being so popular," she replies while laughing boisterously. You talk for a few more minutes before you hear the bell ring, signaling that your next class is about to start.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A143')
      } else {
        if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
          scene.text('You see Alyona sitting on the stairs. She has her phone in her hand and earbuds in her ears. You decide to try and strike up a conversation.');
          scene.text('As you approach her, she looks up and starts shaking her head with a questioning, confused look, indicating that she has no intention of talking to you.');
          scene.text('You freeze, unsure whether or not to approach her before deciding to try and talk to her. "Hey Alyona, I just thought we could have a word? Are you listening to something good?" you ask, hoping she won\'t send you away.');
          scene.text('She looks at you with a piercing stare and sighs as she takes out her earbuds. Her body language says enough, so you decide not to push it further.');
          scene.text('"Okay, maybe some other time?" you reply as you leave. With plenty of time left on your break, you find a place where no one will bother you and use your phone\'s camera to check your makeup and hair.');
        } else {
          scene.text('When you reach the stairway, you see Alyona talking to Anushka and Valentin.');
          // TODO-QSP: dynamic text: Alyona looks at you as you approach. "Hi <<$pcs_nickname>>. Sorry, but I''m in t...
          scene.text(`Alyona looks at you as you approach. "Hi ${((s as any).pcs_nickname || '')}. Sorry, but I'm in the middle of a conversation." She then turns back to the others, visibly upset about what she missed while she wasn't listening.`);
          scene.text('"I thought we could have a word? I wanted to ask your opinion on something," you say pleadingly.');
          scene.text('She\'s clearly not happy at you bothering her, but she seems curious about why you\'re asking her opinion in the first place. She tells Anushka that they\'ll talk later, then sits down on the stairs and beckons for you to take a seat.');
          scene.text('She looks at you. "Come on, I haven\'t got all day for this…" she says urgently.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A143')
          // TODO-QSP: dynamic text: For the next few minutes, you tell her what you want her opinion on. However, sh...
          scene.text(`For the next few minutes, you tell her what you want her opinion on. However, she gets tired of listening and stands up. "Okay ${((s as any).pcs_nickname || '')}, you could have asked someone else, actually. I'm going back to the others now…"`);
          scene.text('With that, she leaves. You still have a little time left, but not enough to do anything, so you decide to head for the classroom and wait for the lesson to start.');
        }
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
          // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>," Alyona greets you as soon as she sees you approaching.
          scene.text(`"Hi ${((s as any).pcs_nickname || '')}," Alyona greets you as soon as she sees you approaching.`);
          scene.text('"Hey. Move over, I have lots to tell you!" you say excitedly as you sit on the stairs next to her so quickly that you don\'t even wait for her to move.');
          scene.text('"Hey, slow down! This isn\'t a race!" she says when you almost end up sitting on her lap. She moves her bag out of the way so you both have enough room to get comfortable. "Come on, I\'m listening…"');
          scene.text('For the next few minutes, you talk excitedly about what new training plans you\'ve come up with. You also tell her some of your ideas to improve your endurance and stamina. "Maybe you could benefit from it too?" you tell her, half jokingly, half seriously.');
          // TODO-QSP: dynamic text: "Oh <<$pcs_nickname>>, you know I''m not interested in sports at all. However, s...
          scene.text(`"Oh ${((s as any).pcs_nickname || '')}, you know I'm not interested in sports at all. However, some jock guys have a good, sexy body, I gotta admit it. Or jock girls." she adds while biting her lip.`);
          // TODO-QSP: $func('npc_reactions', 'general', 'A143')
          scene.text('For the rest of the break, you continue talking about sports and she shares some stories that happened to her recently. When you hear the bell, you say goodbye and head to your next class.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
            scene.text('You see Alyona leaning against the wall. Her eyes are scanning the corridor as if to see if anyone can see her.');
            scene.text('When you move a little closer, you see her pull a bottle of alcohol from her bag and she takes a few sips.');
            scene.text('"Hey Alyona. I see you\'re having a rough day…" you start to say. "You know, it\'s not really healthy to drink so early. Or drink that much alcohol at any time actually."');
            scene.text('Before you can say another word, she cuts in.');
            scene.text('"And you know what else isn\'t healthy? To say that. You don\'t want to accidentally get hurt, do you?!" she says in a threatening tone, then takes another sip. "What wasn\'t clear?" she asks. "Go bother someone who cares!"');
            scene.text('Seeing better not to push the matter, you decide to leave and spend the rest of the break somewhere else.');
          } else {
            scene.text('You see Alyona leaning against the wall and approach her with a friendly smile.');
            scene.text('"Hey Alyona, how are you today?" you ask, even though you know in advance that today is no different. You\'re surprised to even see her here.');
            scene.text('She turns her head and seems a bit surprised, as if she wasn\'t expecting you. She shrugs, pulls a bottle of alcohol from her bag and takes a sip.');
            scene.text('"Another day, another wasted one. We shouldn\'t even be here, we should be enjoying life!" she begins, then goes on to tell you about her ideas for partying, pranks or a little mischief to keep herself entertained.');
            scene.text('Despite the fact that you\'re not good friends and there\'s rivalry between gopniks and jocks, she\'s happy to talk to you sometimes. Or rather she talks and lets you listen.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A143')
            scene.text('After spending a few minutes daydreaming about wild parties, she puts the bottle back in her bag before putting her finger to her mouth. "Sshh… Not a word to anyone about the booze. The teachers would freak out and the others would come asking for it."');
            scene.text('She laughs, then starts walking towards the toilet, probably to smoke.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
            scene.text('As you go to the stairway, you see that Alyona is a little further away from the other gopniks, so you decide to go to her. "Hey Alyona, how are you?"');
            // TODO-QSP: dynamic text: Y"ou know me <<$pcs_nickname>>, just trying to get through the day," she replies...
            scene.text(`Y"ou know me ${((s as any).pcs_nickname || '')}, just trying to get through the day," she replies. She's clearly not having the best of days. She looks tired as she leans against the wall and can barely keep her eyes open.`);
            scene.text('"Another long night?" you ask, knowing very well that she was partying again or wasn\'t able to sleep at night because of what\'s going on at home.');
            scene.text('"Where do I begin?" she says, and then, perhaps a little uncharacteristically, she starts talking openly about the things that are bothering her. She sometimes glances at you, but mostly just stares at the floor or wall.');
            scene.text('As she talks, you get the feeling that maybe the reason why she likes you more than the gopniks is because she sees in you what she might have been if she hadn\'t been born into that family.');
            scene.text('After a short time complaining, she sighs. "Never mind, check this song out instead."');
            scene.text('She pulls out her phone and shows you a song that you listen to together.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A143')
            scene.text('Before the break is over, you give her a little hug. "I have to check my homework before class. So if you don\'t mind, we\'ll continue this next time."');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
              scene.text('Alyona is sitting on the stairs talking to the other gopniks. When she sees you approaching, she nods to the others to get their attention and to warn them not to miss the show.');
              // TODO-QSP: dynamic text: "What''s up, <<$pcs_nickname>>? came to do my homework?" she asks mockingly.
              scene.text(`"What's up, ${((s as any).pcs_nickname || '')}? came to do my homework?" she asks mockingly.`);
              scene.text('"No… I mean… I want to talk, but only if you want to…" You falter as you see everyone looking at you and trying to hold their laughter in.');
              scene.text('"I\'m just kidding, smartass. I don\'t give a shit if my homework is done or not. Get out of here! You have no business with me."');
              scene.text('She then turns to the others and starts laughing spectacularly. You decide not to push your luck, so find a place to be alone. You take your notes out of your backpack to review them before your next lesson starts.');
            } else {
              scene.text('As you go to the stairway, you see that Alyona sitting a little further away from the other gopniks. You approach her and sit next to her. "Do you mind if I sit here?" you ask in a friendly tone.');
              scene.text('She glances at you, then without saying a word, just nods her head. Although she doesn\'t send you away and doesn\'t insult you, it\'s clear from her body language that she\'s not interested in talking to you.');
              scene.text('While she listens to music and sometimes sings a line out loud, you take out your notes and read them to prepare for the next lesson.');
              scene.text('After spending some time revising, you decide to head to the classroom and wait for the teacher to arrive.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
              // TODO-QSP: dynamic text: As you reach the stairway, your eyes meet Alyona''s and she beckons you over. "H...
              scene.text(`As you reach the stairway, your eyes meet Alyona's and she beckons you over. "Hey ${((s as any).pcs_nickname || '')}, what's new?" she asks as you sit next to her on the stairs.`);
              scene.text('"Don\'t even ask, I\'m just looking forward to the end of the day. I can\'t even tell you how bored I am."');
              scene.text('"Do you have anything to make it go by a little faster?" you ask, hoping that she has some alcohol on her.');
              scene.text('She looks at you and smiles, knowing exactly what you mean. "No, sorry. Today\'s been a hard day for me too, so I\'ve already drank my dose," she says as she lets out a sigh.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A143')
              scene.text('You start talking about all sorts of things, but mostly music and parties, and soon get into a small argument about how far Radomir\'s band would take them. As their number one fan, she really thinks they\'ll have their big break one day. You also revive some old memories before you hear the bell.');
              scene.text('You both sigh as you look at each other and almost simultaneously say "I was beginning to forget where we were."');
              scene.text('You laugh, then start walking towards your classroom.');
              if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
                scene.text('As soon as your lesson is over, you leave the classroom. When you reach the stairway, you see Alyona sitting alone, so you decide to go to her.');
                scene.text('"Hey Alyona, is everything okay?" you ask since she looks worse than usual. It looks like she didn\'t sleep much last night.');
                scene.text('She looks up, and without saying a word, rolls her eyes. She pulls a flask from her bag, which emits the strong scent of alcohol. She takes a few sips, then holds the flask out to you.');
                // TODO-QSP: dynamic text: When she sees that you don''t want to drink, she takes another sip. "Listen <<$p...
                scene.text(`When she sees that you don't want to drink, she takes another sip. "Listen ${((s as any).pcs_nickname || '')}, just because we're in the same group doesn't mean we're friends. I don't care if you leave or stay, but I'm in no mood to talk."`);
                scene.text('You sit next to her and try to get her to talk with little success, so you give up. With nothing better to do, you take your phone out of your pocket and listen to some music until your next lesson starts.');
              } else {
                scene.text('As you reach the stairway, you see Alyona sitting away from the others, listening to music You decide to approach her and sit on the stairs close to her so you can hear the music, which is so loud that you can hear just by sitting next to her.');
                scene.text('"Hey Alyona, what\'s up? Listening to something new? It sounds pretty good."');
                // TODO-QSP: dynamic text: Alyona looks at you. "Oh hey <<$pcs_nickname>>! Sorry, I didn''t even notice you...
                scene.text(`Alyona looks at you. "Oh hey ${((s as any).pcs_nickname || '')}! Sorry, I didn't even notice you were there. I'm totally immersed in these new songs."`);
                scene.text('She takes out one of her earbuds and hands it to you.');
                scene.text('"I\'ve never heard these ones before. Are they from some new band?" you ask as you start nodding your head to the beat. "They\'re pretty awesome."');
                scene.text('Alyona takes out her earbud and tells you how she found these bands and how many new ones she wants to listen to. "Sometimes you find some rare gems," she says.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A143')
                scene.text('You listen to the music for a few more minutes before Alyona takes the earbud back and stands up. "I\'ll show you some more bands next time, but right now I\'ve got some things to do."');
                scene.text('With that, she walks away towards the others.');
                if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                  ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                  scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                }
              }
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A143'] >= 50) {
              scene.text('You see Alyona talking to Anushka and decide to approach them. "Hi Alyona, are you free? I\'d like to have a word with you."');
              scene.text('She looks at Anushka, who nods, indicating that she doesn\'t mind her talking to you instead. "What\'s so important?" she asks while turning to you.');
              scene.text('"The thing is…" you begin your sentence as you sit next to her on the stairs, then start complaining to her about how every gopnik is mocking you again. "Could you put in a word for me?" you ask. "You know, maybe they\'ll listen to you and leave me alone?"');
              // TODO-QSP: dynamic text: You can tell by her expression that she doesn''t know what to do. "<<$pcs_nickna...
              scene.text(`You can tell by her expression that she doesn't know what to do. "${((s as any).pcs_nickname || '')}, you know very well that most of them aren't on good terms with you. I'll see what I can do, but no promises. Besides, I have my own problems."`);
              scene.text('She spends the rest of the break complaining, mostly about school, but also about things at home. However, whenever you ask her about it, she refuses to go into details, preferring to just vent her pent-up tension.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A143')
              scene.text('After spending a few minutes complaining, you hear the bell ringing. You get up and walk towards the classroom.');
            } else {
              if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
                scene.text('When Alyona sees you approaching her, she looks at you questioningly, as if she doesn\'t understand why you would want to talk to her at all. Or rather, why she should. "What the hell do you want?" she asks edgily.');
                scene.text('You flinch a little. "Hi Alyona, I just wanted to talk to you for a bit…" you reply quietly.');
                scene.text('"You thought wrong," she replies as she turns to you, looks you in the eyes. "I don\'t know what made you think I had anything to say to you. You better get the hell out of here real quick," she adds in a threatening tone.');
                scene.text('She\'s made it quite clear that she doesn\'t want to talk to or be seen with you, so you head to the classroom to wait for the break to end.');
              } else {
                scene.text('As you reach the stairway, you see Alyona and Anushka both leaning against the wall, listening to music together.');
                scene.text('"Hi Alyona, what are you two doing? Are you listening to something good?" you ask as you approach them and lean against the wall next to them.');
                scene.text('She looks at you a little confused, not really understanding what you\'re doing there. However, she\'s clearly not in the mood for arguing so she just replies briefly that they\'re listening to a new band\'s songs.');
                scene.text('You try to engage her in a conversation and start asking her about the band, but her short answers show that she doesn\'t want to talk.');
                scene.text('You stand next to them for a few more minutes, listening to the music a little because it\'s so loud before you decide to head to the classroom. "Okay, I hope we can talk next time."');
                scene.text('When you look back as you walk away, you see Alyona whispering something to Anushka. You can\'t hear them, but you\'re sure they\'re talking about you.');
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Alyona," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlyonaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Alyona," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlyonaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Alyona," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlyonaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Alyona," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAlyonaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAlyonaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big143.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Alyona," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Alyona," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A143'] >= 60) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('"Ah fuck," she mumbles, fumbling around in her bag. "I think I- no wait. Here."');
        scene.text('She holds it out for you.');
        scene.text('"Thanks Alyona. I owe you one."');
        scene.text('"Damn straight you do, that was my last one."');
        scene.text('You nod and run off to the bathroom to go put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        // TODO-QSP: dynamic text: "Ah fuck," she mumbles, fumbling around in her bag. "I think I got drunk during ...
        scene.text(`"Ah fuck," she mumbles, fumbling around in her bag. "I think I got drunk during my last period and forgot to pack new ones. Sorry ${((s as any).pcs_nickname || '')}."`);
        scene.text('She shrugs apologetically, seeming a little embarrassed too.');
      }
    } else {
      scene.text('"Just take one," she waves dismissively at her bag on the floor before taking another drink from her flask.');
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('Not knowing what else to do, you start opening random zippers looking for a tampon. You find one jammed into a cramped pocket sandwiched between several blunts.');
        scene.text('"Thanks," you say, raising it up to show her you found it.');
        scene.text('"Yeah whatever," she shrugs and you run off to the bathroom to put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        scene.text('Not knowing what else to do, you start opening random zippers looking for a tampon. You search every single pocket but don\'t find a tampon anywhere.');
        scene.text('"I can\'t find any," you say.');
        scene.text('"Then I don\'t have any," she shrugs. "Sorry."');
        scene.text('She picks the bag up with all the pockets still open and trudges off to class.');
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A143'] >= 60) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('"Ah fuck," she mumbles, fumbling around in her bag. "I only use tampons but I think I- no wait. Here."');
        scene.text('She holds a tampon out for you.');
        scene.text('"Thanks Alyona. I owe you one."');
        scene.text('"Damn straight you do, that was my last one."');
        scene.text('You nod and run off to the bathroom to go put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        // TODO-QSP: dynamic text: "Ah fuck," she mumbles, fumbling around in her bag. "I only use tampons but I th...
        scene.text(`"Ah fuck," she mumbles, fumbling around in her bag. "I only use tampons but I think I got drunk during my last period and forgot to pack new ones. Sorry ${((s as any).pcs_nickname || '')}."`);
        scene.text('She shrugs apologetically, seeming a little embarrassed too.');
      }
    } else {
      scene.text('"Just take one," she waves dismissively at her bag on the floor before taking another drink from her flask.');
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('Not knowing what else to do, you start opening random zippers looking for a pad. Instead, you find a tampon jammed into a cramped pocket sandwiched between several blunts.');
        scene.text('"Can I take this?" you say, raising it up to show her.');
        scene.text('"Yeah whatever," she shrugs and you run off to the bathroom to put the tampon in before class starts.');
        (s as any).isprok = 1;
      } else {
        scene.text('Not knowing what else to do, you start opening random zippers looking for a tampon. You search every single pocket but don\'t find a pad anywhere.');
        scene.text('"I can\'t find any," you say.');
        scene.text('"Then I don\'t have any," she shrugs. "Sorry."');
        scene.text('She picks the bag up with all the pockets still open and trudges off to class.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAnushka(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  if (((s as any).npc_rel ?? 0)?.['A144'] > 60  &&  (((s as any).anushkaQW ?? 0)?.['sex'] > 0  &&  ((s as any).pcs_hotcat ?? 0) >= 7)  &&  (Math.floor(Math.random() * 6) + 0) === 0  &&  ((s as any).nush_daycheck ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'You\'re looking flushed', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    (st as any).nush_daycheck = ((st as any).daystart ?? 0);
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('As you head towards the stairwell with the other gopniks, you notice Anushka looking very flushed. "Hey Nush, you feeling okay? You look a little red. Is something wrong?"');
    scene.text('She pushes you up against the wall and tries to kiss you while her hand reaches down to squeeze your ass. You break the kiss out of surprise by her bold actions more than anything else. "What are you doing?! I was only asking if you were okay."');
    scene.text('She crowds you a bit more so you\'re face to face. "You talk too much. I can think of better things you can do with that tongue of yours…"');
    scene.text('Pauline speaks up at this point. "What the fuck? I\'m about to eat my lunch! No one wants to see your lesbian shit, Nush! For fuck\'s sake, keep it in your fucking pants for once!"');
    scene.text('She sounds very annoyed, but Anushka just ignores her. You notice most of the guys don\'t seem to mind and even seem interested in watching, as does Lera.');
    scene.actions([
      { label: 'That\'s not what I meant', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/anushka/nomake.jpg');
    scene.text('You place your hand on her shoulders and gently push her away. "No, I don\'t want to."');
    scene.text('She rolls her eyes. "Fine whatever. If you don\'t want to have a little fun, I\'ll find someone who does."');
    scene.text('She turns and walks away, leaving you unsure about what just happened.');
    scene.actions([
      { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      { label: 'Go with it', handler: (st: GameState) => {
    ((st as any).anushkaQW = (st as any).anushkaQW ?? {})['lunch'] = 1;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'npc_relationship', 'modify', 'A144', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/anushka/makeout.mp4');
    scene.text('You breathe heavily, feeling yourself getting wet. "Okay, where?"');
    scene.text('You barely even have time to get the words out when she leans in and kisses you and you kiss her back. Your hands are roaming over each other\'s bodies and several of the other gopniks are checking the two of you out, especially the guys.');
    scene.text('Katyusha on the other hand is disgusted. "Get the fuck out of here, you fucking dykes!"');
    scene.text('She sounds fairly pissed off, but when you both ignore her she just walks away as the two of you keep kissing.');
    scene.text('After a few minutes, Anushka grabs you by the hands and pulls you along with her.');
    scene.actions([
      { label: 'Go somewhere private', goto: ['gschool_sex', 'Anush_private'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
        scene.text('As you walk up the steps, you notice Anushka sitting on the top step crosslegged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
        scene.text('Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
        scene.text('She glances at you with a smile.');
        // TODO-QSP: $func('npc_reactions', 'general', 'A144')
        if (((s as any).PCloStyle ?? 0) === 2) {
          scene.text('You see her look over your uniform. "Nice outfit."');
        } else {
          if (((s as any).PCloSkirt ?? 0) >= 4) {
            scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
          }
        }
        scene.text('"No, I was just doing some online window shopping. I guess you could call it that." She acts like she is about to say more, but stops and looks at you before shaking her head. "You know you could have just been one of us, instead of a sex toy for the boys to use whenever they want."');
        scene.text('You shrug. "I love sex, so it worked out."');
        scene.text('She sighs. "Loving sex is great, I love it, but fucking stand up for yourself and control your own body! Have sex when you want to have sex, not them. Fuck whatever, do what you want."');
        scene.text('It takes a while, but the two of you are soon talking about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
        if (((s as any).npc_rel ?? 0)?.['A144'] >= 55  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
          scene.text('"Want to come over after school and hang out today?"');
          scene.actions([
            { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
            { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
          ]);
        }
      } else {
        if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
          scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone. You stand next to her and try and peek, but before you can see anything, she puts her phone away and frowns at you.');
          scene.text('"Sorry, I don\'t have a dick for you to suck. Best look elsewhere."');
          scene.text('You sigh, not getting to see whatever it is she found so amusing. "I thought we could just hang out?"');
          scene.text('She rolls her eyes. "Whatever…"');
          scene.text('You try to talk to her, but she mostly ignores you.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A144')
        } else {
          scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
          scene.text('Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
          scene.text('She glances to you with a slight smile.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A144')
          if (((s as any).PCloStyle ?? 0) === 2) {
            scene.text('You see her look over your uniform. "Nice outfit."');
          } else {
            if (((s as any).PCloSkirt ?? 0) >= 4) {
              scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
            }
          }
          scene.text('"No, I was just doing some online window shopping. I guess you could call it." She acts like she is about to say more, but stops and looks at you before shaking her head. "You know you could have just been one of us, instead of a sex toy for the boys to use whenever they want."');
          scene.text('You shrug. "I love sex, so it worked out."');
          scene.text('She sighs and shakes her head slightly. It takes a bit of effort for you to get her to talk, but the two of you are soon talking about her music, which leads to a variety of other subjects. The two of you talk until the bell rings.');
        }
      }
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
        if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
          scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
          scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
          scene.text('She glances to you with a friendly smile.');
          // TODO-QSP: $func('npc_reactions', 'general', 'A144')
          if (((s as any).PCloStyle ?? 0) === 2) {
            scene.text('You see her look over your uniform. "Nice outfit."');
          } else {
            if (((s as any).PCloSkirt ?? 0) >= 4) {
              scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
            }
          }
          scene.text('"Yeah, just finishing it up. So what are you up to, slut? Blow anyone new?"');
          scene.text('You know she\'s just teasing, but sometimes it still bothers you. You ignore her teasing and the two of you talk about her music, which leads to a variety of other subjects. You can\'t help but notice the dirty looks you\'re getting from the other gopniks and some of it seems to be directed at Anushka for being so friendly with you. She either doesn\'t notice or ignores it.');
          if (((s as any).npc_rel ?? 0)?.['A144'] > 70  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
            scene.text('"Want to come over after school and hang out today?"');
            scene.text('You notice the stares several of the other gopniks give her, but she doesn\'t seem to notice or just ignores them.');
            scene.actions([
              { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
              { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
            ]);
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
            scene.text('She gives you a disgusted look. "Get the fuck away from me!"');
            scene.text('You sigh and, seeing the looks the other gopniks are giving you, turn and walk away.');
          } else {
            scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
            scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
            scene.text('She glances to you with a slight smile.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A144')
            if (((s as any).PCloStyle ?? 0) === 2) {
              scene.text('You see her look over your uniform. "Nice outfit."');
            } else {
              if (((s as any).PCloSkirt ?? 0) >= 4) {
                scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
              }
            }
            scene.text('"No, it\'s something Rad wrote and I\'m well… fixing it."');
            scene.text('You notice Radomir glancing over and giving her a slightly annoyed look, but he doesn\'t say anything.');
            scene.text('She\'s a little reluctant to talk at first, but the two of you are soon talking about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
          }
        }
      } else {
        if (((s as any).grupTipe ?? 0) === 1) {
          if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
            scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
            scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
            scene.text('She glances at you with a friendly smile.');
            // TODO-QSP: $func('npc_reactions', 'general', 'A144')
            if (((s as any).PCloStyle ?? 0) === 2) {
              scene.text('"Nice outfit," she says, looking over your uniform. "Though I doubt your social circle would approve."');
            } else {
              if (((s as any).PCloSkirt ?? 0) >= 4  &&  ((s as any).pantyworntype ?? 0) === 'none') {
                scene.text('"Cute skirt," she smirks. "Nice panties."');
                scene.text('You look at her in bewilderment.');
                scene.text('"How did you-" you start and she winks at you.');
              } else {
                if (((s as any).PCloSkirt ?? 0) >= 4) {
                  scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt! I bet the boys love it and the girls hate it."');
                }
              }
            }
            scene.text('She closes the computer and puts it in her bag. "You finally get bored with all the snooty kids and came to hang out with the real cool kids?"');
            scene.text('You can\'t help but smile and shake your head as the two of you talk about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
            if (((s as any).npc_rel ?? 0)?.['A144'] > 60  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
              scene.text('"Want to come over after school and hang out today?"');
              scene.actions([
                { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
                { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
              ]);
            }
          } else {
            if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
              scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
              scene.text('You stand next to her and try and peek, but before you can see anything, she puts her phone away and frowns at you. "Get lost, freak! I\'m busy."');
              scene.text('You sigh, not getting to see whatever it is she found so amusing. "I just thought we could hang out?"');
              scene.text('She rolls her eyes. "Like I would want to talk to you! I don\'t find gossiping about who\'s dating who or what clothes are in fashion this year interesting, so go bother someone that finds that shallow shit interesting."');
              scene.text('You try to talk to her, but she just ignores you, only occasionally responding with another barbed comment.');
            } else {
              scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
              scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
              scene.text('She glances to you with a slight smile.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A144')
              if (((s as any).PCloStyle ?? 0) === 2) {
                scene.text('You see her look over your uniform. "Nice outfit, though I doubt your social circle would approve."');
              } else {
                if (((s as any).PCloSkirt ?? 0) >= 4) {
                  scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt, though doubt your social circle would approve."');
                }
              }
              scene.text('"No, it\'s something Rad wrote and I\'m well.. fixing it, princess."');
              scene.text('You sigh, unsure if she\'s just teasing you or not. It\'s hard to tell with Anushka.');
              scene.text('She smirks. "Is that what you cool girls do? Try and look like whoever\'s the most popular this week?" You can hear the quotes around "cool girls" when she says it.');
              scene.text('You shake your head. "Sometimes, but we\'re a lot deeper than that. Why don\'t you tell me about your song."');
              scene.text('The two of you start talking about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
            }
          }
        } else {
          if (((s as any).grupTipe ?? 0) === 2) {
            if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
              scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
              scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
              scene.text('She glances to you with a friendly smile.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A144')
              if (((s as any).PCloStyle ?? 0) === 2) {
                scene.text('You see her look over your uniform. "Nice outfit, though I doubt your social circle would approve."');
              } else {
                if (((s as any).PCloSkirt ?? 0) >= 4) {
                  scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                }
              }
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, just finishing it up." She closes the computer and puts ...
              scene.text(`"Hey ${((s as any).pcs_nickname || '')}, just finishing it up." She closes the computer and puts it away in her pack before flexing at you. She has decent muscle tone, but nothing like you or the other jock girls.`);
              scene.text('"Grrr! Watch out or you girls will start looking like boys with little boobs, kind of like Christina."');
              scene.text('You can\'t help but laugh her comment and the two of you start talking about you working out, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
              if (((s as any).npc_rel ?? 0)?.['A144'] > 60  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
                scene.text('"Want to come over after school and hang out today?"');
                scene.actions([
                  { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
                  { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
                ]);
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
                scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
                scene.text('You stand next to her and try and peek, but before you can see anything, she puts her phone away and frowns at you. "Get lost hulkette, I\'m busy."');
                scene.text('You sigh, not getting to see whatever it is she found so amusing. "I just thought we could hang out?"');
                scene.text('She rolls her eyes. "Like I would want to talk to you to a steroid junky like you!"');
                scene.text('You try to talk to her, but she just ignores you, only occasionally responding with another barbed comment.');
              } else {
                scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties to anyone. She\'s using her knees to support a notebook computer that she\'s typing on.');
                scene.text('Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                scene.text('She glances to you with a slight smile.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                if (((s as any).PCloStyle ?? 0) === 2) {
                  scene.text('You see her look over your uniform. "Nice outfit, though I doubt your social circle would approve."');
                } else {
                  if (((s as any).PCloSkirt ?? 0) >= 4) {
                    scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                  }
                }
                scene.text('"No, just checking something," she replies as she closes the computer and puts it away. "What do you need? Looking for some steroids so you can bulk up?" she asks while flexing in an over-exaggerated way with a grin on her face.');
                scene.text('You sigh, unsure if she\'s just teasing you or not. It\'s hard to tell with Anushka. "No, I don\'t want any steroids. I just wanted to hang out and talk is all."');
                scene.text('She smirks. "Oh… So what flavor protein drink is best? I don\'t like that powdered crap. I tried it once and it was as nasty as Petia\'s breath. I prefer liquid protein right from the tap if you know what I mean…" she says with a wink.');
                scene.text('You shake your head, knowing exactly what she means and the two of you are soon talking about a variety of subjects. You talk and laugh until the bell rings.');
              }
            }
          } else {
            if (((s as any).grupTipe ?? 0) === 3) {
              if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
                scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. You blush when you see her panties on full display like that.');
                scene.text('She\'s using her knees to support a notebook computer that she\'s typing on. Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                scene.text('She glances to you with a smirk.');
                // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                if (((s as any).PCloStyle ?? 0) === 2) {
                  scene.text('You see her look over your uniform. "Nice outfit, though I doubt your fellow nerds would approve."');
                } else {
                  if (((s as any).PCloSkirt ?? 0) >= 4) {
                    scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt! I bet your fellow nerds nearly died seeing you in something so short."');
                  }
                }
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>. No, I was looking at porn," she replies, cauisng you to ...
                scene.text(`"Hey ${((s as any).pcs_nickname || '')}. No, I was looking at porn," she replies, cauisng you to blush even more, which makes her grin in amusement.`);
                scene.text('You decide to change the subject and ask her about her music and the two of you are soon talking about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
                if (((s as any).npc_rel ?? 0)?.['A144'] > 60  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
                  scene.text('"Want to come over after school and hang out today?"');
                  scene.actions([
                    { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
                    { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
                  ]);
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
                  scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
                  scene.text('You stand next to her and try and peek, but before you can see anything, she puts her phone away and frowns at you. "Get lost nerd, I\'m busy."');
                  scene.text('You sigh, not getting to see whatever it is she found so amusing. "I just thought we could hang out?"');
                  scene.text('She scoffs. "Like I would want to talk to a loser like you! Get lost, you\'re ruining my high."');
                  scene.text('You try to talk to her, but she just ignores you, only occasionally responding to bully you verbally. After a while, you get tired of it and walk away.');
                } else {
                  scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. You blush when you see her panties on full display like that.');
                  scene.text('She\'s using her knees to support a notebook computer that she\'s typing on. Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                  scene.text('She glances to you with a smirk.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    scene.text('You see her look over your uniform. "Nice outfit."');
                  } else {
                    if (((s as any).PCloSkirt ?? 0) >= 4) {
                      scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                    }
                  }
                  scene.text('"Hey neeeerrrd! No, I was looking at porn," she replies, which makes you blush even more, which makes her grin in amusement.');
                  scene.text('You decide to change the subject and ask her about her music. She\'s reluctant to talk, but eventually opens up and you have a pleasant conversation with her.');
                  scene.text('She even seems to know a fair bit about some of your favorite nerdy topics, though she can\'t seem to help herself from sometimes making snide and even occasionally hurtful comments about them. The two of you talk and laugh until the bell rings.');
                }
              }
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
                  scene.text('As you walk up the steps, you notice Anushka sitting on the top step with her knees pulled up almost to her chin, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
                  scene.text('Taking a seat next to her, you glance over and see her typing lyrics to a song. "New song?"');
                  scene.text('She glances to you with a friendly smile.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    scene.text('You see her look over your uniform. "Nice outfit."');
                  } else {
                    if (((s as any).PCloSkirt ?? 0) >= 4) {
                      scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                    }
                  }
                  scene.text('"Yeah, if I can get it finished. What do you think?"');
                  scene.text('You look over it and the two of you are soon talking about her music, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
                  if (((s as any).npc_rel ?? 0)?.['A144'] >= 55  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
                    scene.text('"Want to come over after school and hang out today?"');
                    scene.actions([
                      { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
                      { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
                    ]);
                  }
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
                    scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
                    scene.text('You stand next to her and try and peek. Before you can see anything, she puts her phone away and frowns at you. "What do you want?"');
                    scene.text('You sigh, not getting to see whatever it is she found so amusing. "I thought we could just hang out?"');
                    scene.text('She rolls her eyes. "Whatever…"');
                    scene.text('You try to talk to her, but she just ignores you.');
                  } else {
                    scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on. Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                    scene.text('She glances to you with a slight smile.');
                    // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                    if (((s as any).PCloStyle ?? 0) === 2) {
                      scene.text('You see her look over your uniform. "Nice outfit."');
                    } else {
                      if (((s as any).PCloSkirt ?? 0) >= 4) {
                        scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                      }
                    }
                    scene.text('"No, I was just doing some online window shopping. I guess you could call it."');
                    scene.text('The two of you are soon talking about clothes, which leads to a variety of other subjects. The two of you talk and laugh until the bell rings.');
                  }
                }
              } else {
                if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
                  scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
                  scene.text('Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                  scene.text('She looks over at you with a shocked look. "Oh my god, were you looking up my skirt pervert?" she says loud enough for everyone nearby to stare at you, which causes you to blush.');
                  scene.text('You shake your head. "No, no! Of course not!"');
                  scene.text('She frowns at you. "What? Am I not pretty enough for you?"');
                  scene.text('You stammer as you feel flustered. She\'s always doing things like this to you. "What? No… I mean yes… No! If you didn\'t sit like that, no one would look."');
                  scene.text('She grins at you. "So you were looking?"');
                  scene.text('You just sigh and lean back until you\'re looking straight up and give up trying to defend yourself. You just let her have her fun.');
                  // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                  if (((s as any).PCloStyle ?? 0) === 2) {
                    scene.text('You see her look over your uniform. "Nice outfit."');
                  } else {
                    if (((s as any).PCloSkirt ?? 0) >= 4) {
                      scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                    }
                  }
                  scene.text('The two of you are soon talking about a variety of subjects. You can\'t help but notice the unfriendly looks you both get from the other gopniks.');
                  scene.text('They obviously don\'t like you being here or her talking to you, but she doesn\'t seem to care. The two of you talk and laugh until the bell rings.');
                  if (((s as any).npc_rel ?? 0)?.['A144'] > 70  &&  ((s as any).anushkaQW ?? 0)?.['first_visit'] === 0) {
                    scene.text('"Want to come over after school and hang out today?"');
                    scene.text('You notice the looks several of the other gopniks give her, but she doesn\'t seem to notice or just ignores them.');
                    scene.actions([
                      { label: 'Not today', goto: ['gschool_gopnik_chats', 'nush_invite_no'] },
                      { label: 'Sure', goto: ['gschool_gopnik_chats', 'nush_invite_yes'] },
                    ]);
                  }
                } else {
                  if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
                    scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
                    scene.text('You stand next to her and try and peek, but before you can see anything, she puts her phone away and frowns at you. "Get lost, freak! I\'m busy."');
                    scene.text('You sigh, not getting to see whatever it is she found so amusing. "I just thought we could hang out?"');
                    scene.text('She rolls her eyes. "Like I would want to talk to the likes of you!"');
                    scene.text('You try to talk to her, but she just ignores you.');
                  } else {
                    scene.text('As you walk up the steps, you notice Anushka sitting on the top step cross-legged, which gives you a nice upskirt view of her panties. She\'s using her knees to support a notebook computer that she\'s typing on.');
                    scene.text('Taking a seat next to her, you glance over at the screen as she\'s closing it, missing whatever she was looking at. "New song?"');
                    scene.text('She glances to you with a smirk.');
                    // TODO-QSP: $func('npc_reactions', 'general', 'A144')
                    if (((s as any).PCloStyle ?? 0) === 2) {
                      scene.text('You see her look over your uniform. "Nice outfit."');
                    } else {
                      if (((s as any).PCloSkirt ?? 0) >= 4) {
                        scene.text('You follow her gaze to your short skirt and see her smile widen. "Cute skirt."');
                      }
                    }
                    scene.text('"Hey loser! No, I was looking at porn," she grins in amusement and you decide to change the subject and ask her about her music.');
                    scene.text('She\'s reluctant to talk, but eventually opens up and you have a pleasant conversation with her. The two of you talk and laugh until the bell rings.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.actions([
        { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Anushka," you whisper. "My period just started and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnushkaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Anushka," you whisper. "My period just started and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnushkaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).placebopart ?? 0) > 0  &&  ((s as any).lutH ?? 0) > 0  &&  ((s as any).knowpreg ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  (!((s as any).isprokp ?? 0))) {
      if (((s as any).pantyworntype ?? 0) !== 'none') {
        scene.actions([
          { label: 'Ask for a pad', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Anushka," you whisper. "My period is starting soon and I don\'t have a pad. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnushkaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask for a tampon', handler: (st: GameState) => {
    ((st as any).temp = (st as any).temp ?? {})['tampon_ask'] = '"Anushka," you whisper. "My period is starting soon and I don\'t have a tampon. Can I borrow one?"';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnushkaTampon(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterNushInviteNo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'dislike');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('"Sorry, but I can\'t. Maybe some other time?" you reply.');
  scene.text('She frowns and shrugs. "Sure, whatever. Some other time then."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterNushInviteYes(s: GameState, scene: SceneBuilder): void {
  (s as any).meet_after_school = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  scene.text('"Yeah, I\'d like that," you reply.');
  scene.text('"Sweet, I\'ll wait for you at the doors after school."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterAnushkaTampon(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  if (((s as any).temp ?? 0)?.['tampon_ask'] === '"Anushka," you whisper. "My period just started  &&  I don\'t have a tampon. Can I borrow one?"'  ||  ((s as any).temp ?? 0)?.['tampon_ask'] === '"Anushka," you whisper. "My period is starting soon  &&  I don\'t have a tampon. Can I borrow one?"') {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
      scene.text('"Yeah no problem," she says casually and reaches into her bag to pull one out.');
      scene.text('"Thanks," you sigh in relief.');
      scene.text('"Happy to help," she smiles.');
      scene.text('You smile back and run off to go put the tampon in before class starts.');
    } else {
      scene.text('"Yeah, sure," she says casually and reaches into her bag to pull one out.');
      scene.text('"Thanks," you sigh in relief.');
      scene.text('"Don\'t worry about it," she smiles. "Wouldn\'t wish this kind of thing on my worst enemy."');
      scene.text('You smile back and run off to go put the tampon in before class starts.');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
      scene.text('"You\'re still using pads?" she smirks teasingly as she reaches into her bag. "Sorry, don\'t have any for you. Only got this."');
      scene.text('She holds out a tampon for you instead.');
      scene.text('"I\'ll take it," you say gratefully.');
      scene.text('"Happy to help," she smiles.');
      scene.text('You smile back and run off to go put the tampon in before class starts.');
    } else {
      scene.text('"Pads, huh?" she smirks teasingly as she reaches into her bag. "Didn\'t know you were that kind of girl. Here, take a tampon."');
      scene.text('She holds one out for you.');
      scene.text('"Thanks," you sigh in relief.');
      scene.text('"Don\'t worry about it," she smiles. "Wouldn\'t wish this kind of thing on my worst enemy."');
      scene.text('You smile back and run off to go put the tampon in before class starts.');
    }
  }
  (s as any).isprok = 1;
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterLena(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big20.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
    scene.text('As usual, you find Lena smoking on the stairs.');
    scene.text('"Shouldn\'t you be in the bathroom getting gangbanged?" Lena inquires with a note of disgust.');
    scene.text('You sigh slightly. "No, I just wanted to see what you were up to."');
    scene.text('"Go bother someone else!" she says.');
    scene.text('You talk to her for a bit and while she doesn\'t ignore you, she also makes it clear she doesn\'t approve of how you got in the gopniks.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A20')
  } else {
    if (((s as any).npc_rel ?? 0)?.['A20'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
      if (((s as any).grupTipe ?? 0) === 4) {
        scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
        // TODO-QSP: dynamic text: She looks back at you and shrugs her shoulders. "Hey <<$pcs_nickname>>, nothing ...
        scene.text(`She looks back at you and shrugs her shoulders. "Hey ${((s as any).pcs_nickname || '')}, nothing much. Just waiting for this day to end."`);
        scene.text('The two of you talk for a while about how much school sucks and all the better things you could be doing with your time.');
        if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
          ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
          qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
          scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
        }
      } else {
        scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
        // TODO-QSP: dynamic text: She looks back at you and arches a brow. "Nothing much. You lost, <<$pcs_nicknam...
        scene.text(`She looks back at you and arches a brow. "Nothing much. You lost, ${((s as any).pcs_nickname || '')}?"`);
        scene.text('You shake your head. "No, I just came over to see how you were and hang out."');
        scene.text('The two of you talk for a while about how much school sucks and all the better things you could be doing with your time.');
      }
      // TODO-QSP: $func('npc_reactions', 'general', 'A20')
    } else {
      if (((s as any).npc_rel ?? 0)?.['A20'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
          // TODO-QSP: dynamic text: She looks back at you with a frown. "What do you want, <<$pcs_nickname>>?"
          scene.text(`She looks back at you with a frown. "What do you want, ${((s as any).pcs_nickname || '')}?"`);
          scene.text('"I just wanted to say hi and see what you were up to."');
          scene.text('"Yeah? Well, I don\'t want to talk to you." You continue talking to her for a while, but it\'s obvious that she has no interest in talking to you.');
        } else {
          scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
          scene.text('She looks back at you with a frown. "What do you want, freak?"');
          scene.text('"I just wanted to say hi and see what you were up to."');
          scene.text('"Yeah? Well, I don\'t want to talk to you."');
          scene.text('You continue talking to her for a while, but it\'s obvious that she has no interest in talking to you.');
        }
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"What do you want, cunt? Shouldn\'t you be sucking some cocks somewhere?" She turns away and ignores you.');
        } else {
          qspCall(s, 'npc_relationship', 'modify', 'A20', 1);
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
            scene.text('She looks back at you and arches a brow. "You lost? Shouldn\'t you be hanging out with your own friends?"');
            scene.text('You shake your head. "I have a lot of friends. I just wanted to come over to see how you were and hang out."');
            scene.text('The two of you talk for a while about how much school sucks and all the better things you could be doing with your time.');
            if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
              ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
              qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
              scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
            }
          } else {
            scene.text('Seeing Lena sitting on the steps, you approach her. "Hi, Lena! What are you up to?"');
            scene.text('She looks back at you and arches a brow. "You lost? Shouldn\'t you be hanging out with your own friends?"');
            scene.text('You shake your head. "I have a lot of friends. I just wanted to come over to see how you were and hang out."');
            scene.text('The two of you talk for a while about how much school sucks and all the better things you could be doing with your time.');
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A20')
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enterPauline(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A24', 'like');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big24.jpg');
  if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
    qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
    scene.text('As usual, you find Pauline on the stairs.');
    scene.text('"What do you want?" she asks in a non-too-friendly tone as you approach.');
    scene.text('You sigh slightly. "I just wanted to talk."');
    scene.text('"Go talk to someone that cares then!" she replies.');
    scene.text('You talk to her and, while she doesn\'t ignore you, she also makes it clear she doesn\'t approve of how you got into the gopniks.');
    // TODO-QSP: $func('npc_reactions', 'general', 'A24')
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250) {
      qspCall(s, 'npc_relationship', 'modify', 'A24', 'dislike');
      scene.text('She glares at you as you approach. "Don\'t even think about trying to talk to me, slut."');
    } else {
      if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
        if (((s as any).npc_rel ?? 0)?.['A24'] >= 60) {
          scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
          // TODO-QSP: dynamic text: She looks back at you. "What do you want, <<$pcs_nickname>>?"
          scene.text(`She looks back at you. "What do you want, ${((s as any).pcs_nickname || '')}?"`);
          scene.text('You shake your head. "I just came over to see how you were doing."');
          scene.text('She just sighs and the two of you talk for a while, mostly about how, if you want to hang with the gopniks, you should join them.');
        } else {
          if (((s as any).npc_rel ?? 0)?.['A24'] <= 20) {
            scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
            scene.text('She glances at you and then looks around before replying. "If there weren\'t teachers around, I would kick your ass right now."');
            scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
            scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offer a few threats.');
          } else {
            scene.text('Seeing Pauline sitting on the steps, you approach her, "Hi Pauline! What are you up to?"');
            // TODO-QSP: dynamic text: She looks back at you and asks "You lost, <<$pcs_nickname>>? Shouldn''t you be w...
            scene.text(`She looks back at you and asks "You lost, ${((s as any).pcs_nickname || '')}? Shouldn't you be with your own kind?"`);
            scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
            scene.text('The two of you continue talking for a while, mostly about how, if you want to hang with the gopniks, you should just change everything about yourself and join them.');
          }
        }
        // TODO-QSP: $func('npc_reactions', 'general', 'A24')
      } else {
        if (((s as any).grupTipe ?? 0) === 3) {
          qspCall(s, 'npc_relationship', 'modify', 'A24', (Math.floor(Math.random() * ((-1) - 0 + 1)) + (0)));
          if (((s as any).npc_rel ?? 0)?.['A24'] >= 80) {
            scene.text('Seeing Pauline sitting on the steps, you approach her, "Hi Pauline! What are you up to?"');
            // TODO-QSP: dynamic text: She looks back at you. "What do you want, <<$pcs_nickname>>?"
            scene.text(`She looks back at you. "What do you want, ${((s as any).pcs_nickname || '')}?"`);
            scene.text('You shake your head. "I just came over to see how you were doing."');
            scene.text('She just sighs. The two of you continue talking for a while, mostly about how, if you want to hang with the gopniks, you should join them.');
          } else {
            if (((s as any).npc_rel ?? 0)?.['A24'] <= 20) {
              scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
              scene.text('She glances at you and then looks around before replying. "If there weren\'t teachers around, I would kick your ass right now."');
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offer a few threats.');
            } else {
              scene.text('Seeing Pauline sitting on the steps, you approach her, "Hi Pauline! What are you up to?"');
              scene.text('She looks back at you. "You lost, nerd? Shouldn\'t you be with your own kind?"');
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('The two of you continue talking for a while, mostly about how about how crap all the stuff you like is and that you have no business hanging with the gopniks.');
            }
          }
          // TODO-QSP: $func('npc_reactions', 'general', 'A24')
        } else {
          if (((s as any).grupTipe ?? 0) === 4) {
            if (((s as any).npc_rel ?? 0)?.['A24'] >= 50) {
              scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
              // TODO-QSP: dynamic text: She looks back at you and smiles. "Hey <<$pcs_nickname>>, nothing much." She loo...
              scene.text(`She looks back at you and smiles. "Hey ${((s as any).pcs_nickname || '')}, nothing much." She looks over at Anushka when she laughs while talking to Valentin. "Why the fuck we let that slut hang out with us is beyond me."`);
              scene.text('The two of you continue talking for a while about what it means to be a gopnik and how certain people shouldn\'t be allowed to hang out with them.');
              if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
              }
            } else {
              if (((s as any).npc_rel ?? 0)?.['A24'] <= 20) {
                scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
                scene.text('She glances at you and then looks around before replying "I should just kick your ass right now."');
                scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
                scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offer a few threats.');
              } else {
                scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
                // TODO-QSP: dynamic text: She looks back at you and shrugs her shoulders. "Hey <<$pcs_nickname>>, nothing ...
                scene.text(`She looks back at you and shrugs her shoulders. "Hey ${((s as any).pcs_nickname || '')}, nothing much. Just waiting for this day to end."`);
                scene.text('The two of you talk for a while about how much school sucks and all the better things you could be doing with your time.');
                if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 0) {
                  ((s as any).gopnik_fight_nightQW = (s as any).gopnik_fight_nightQW ?? {})['invite'] = 1;
                  qspCall(s, 'calendar', 'add', 'gopnik_fight_night_event');
                  scene.text('She comments how she has not seen you at the fight night and tells you, you should come by and take part. It happens on the third Saturday each month at eight PM.');
                }
              }
            }
            // TODO-QSP: $func('npc_reactions', 'general', 'A24')
          } else {
            qspCall(s, 'npc_relationship', 'modify', 'A24', (Math.floor(Math.random() * ((-1) - 0 + 1)) + (0)));
            if (((s as any).npc_rel ?? 0)?.['A24'] >= 80) {
              scene.text('Seeing Pauline sitting on the steps, you approach her, "Hi Pauline! What are you up to?"');
              // TODO-QSP: dynamic text: She looks back at you and asks "You lost, <<$pcs_nickname>>? Shouldn''t you be w...
              scene.text(`She looks back at you and asks "You lost, ${((s as any).pcs_nickname || '')}? Shouldn't you be with your own kind?"`);
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('She narrows her eyes a little at you. "Yeah? Well, no one cares how you\'re doing, so go back to your own kind before I kick your ass back over there!"');
              scene.text('You try talking to her, but she just gets more agitated with you until you get up and leave.');
            } else {
              scene.text('Seeing Pauline sitting on the steps, you approach her. "Hi Pauline! What are you up to?"');
              scene.text('She glances at you and then looks around before replying. "If there weren\'t teachers around, I would kick your ass right now."');
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offer a few threats.');
              // TODO-QSP: $func('npc_reactions', 'general', 'A24')
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Time for the next class', goto: ['gschool_lessons', 'short_break'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'vitek':
      enterVitek(s, scene);
      break;
    case 'radomir':
      enterRadomir(s, scene);
      break;
    case 'rad_invite_no':
      enterRadInviteNo(s, scene);
      break;
    case 'rad_invite_yes':
      enterRadInviteYes(s, scene);
      break;
    case 'roman':
      enterRoman(s, scene);
      break;
    case 'dan':
      enterDan(s, scene);
      break;
    case 'valentin':
      enterValentin(s, scene);
      break;
    case 'shulga':
      enterShulga(s, scene);
      break;
    case 'arkadi':
      enterArkadi(s, scene);
      break;
    case 'lavrenti':
      enterLavrenti(s, scene);
      break;
    case 'niko':
      enterNiko(s, scene);
      break;
    case 'katyusha':
      enterKatyusha(s, scene);
      break;
    case 'lera':
      enterLera(s, scene);
      break;
    case 'alyona':
      enterAlyona(s, scene);
      break;
    case 'alyona_tampon':
      enterAlyonaTampon(s, scene);
      break;
    case 'anushka':
      enterAnushka(s, scene);
      break;
    case 'nush_invite_no':
      enterNushInviteNo(s, scene);
      break;
    case 'nush_invite_yes':
      enterNushInviteYes(s, scene);
      break;
    case 'anushka_tampon':
      enterAnushkaTampon(s, scene);
      break;
    case 'lena':
      enterLena(s, scene);
      break;
    case 'pauline':
      enterPauline(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_gopnik_chats: LocationDef = {
  name: 'gschool_gopnik_chats',
  title: '"Well well well, if it isn\'t my favorite groupie slut," Rado',
  region: 'other',
  enter: enter,
};
