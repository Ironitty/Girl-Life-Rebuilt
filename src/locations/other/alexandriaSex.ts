import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNice1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A241');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N1.jpg');
  scene.text('You find yourself lying half-naked on Aleksei\'s fluffy bed, only thinking about how much <i>HE</i> seems like a <i>SHE</i>. Your mind knows, on an intellectual level, that Aleksei is a man trapped in a woman\'s body… a curvaceous female body… with elegantly applied make-up and perfume traces… and a female lingerie set that screams to you a name… Alexandria.');
  // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I know that my appearance can be confusing. I consider mysel...
  scene.text(`"${((s as any).pcs_lastname || '')}, I know that my appearance can be confusing. I consider myself a man and I try to make people around me understand that fact, but… as you can see, my curse not only changed my sex, but continues to interfere with my life. Always pushing for a more… let's say <i>stereotypical</i> female appearance that I detest, but it has it's uses."`);
  scene.text('You only moan in reply, mostly because Aleksei has moved a hand between your thighs and started to caress your pussy, turning on a heat that quickly rises towards your stomach, where a tensed knot pushes for release… a release that is negated as he quickly withdraws the hand, making you squirm in frustration.');
  scene.text('"Hey! What are you doing?! I was… I mean… Fuck!"');
  // TODO-QSP: dynamic text: "I was thinking that I prefer you naked, <<$pcs_lastname>>. So let''s take off t...
  scene.text(`"I was thinking that I prefer you naked, ${((s as any).pcs_lastname || '')}. So let's take off those clothes."`);
  scene.text('Grumbling, you follow his order and finally manage to get the last of your clothes off, something that seems to please him.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Your turn Aleksei"', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'clit_finger', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N2.jpg');
    scene.text('He only answers with a raised eyebrow and an amused half-smile before taking your dominant hand towards his lips, lightly kissing your fingers.');
    // TODO-QSP: dynamic text: "Bossing me around, <<$pcs_lastname>>? Not a good idea, and for that you''re goi...
    scene.text(`"Bossing me around, ${((st as any).pcs_lastname || '')}? Not a good idea, and for that you're going to have to wait for me to be ready."`);
    scene.text('He pushes your hand towards your pussy and waits, sitting motionless until you begin to caress your love button for his entertainment. Your moans quickly return as the teasing pushes you towards an orgasm, but he again puts his hand over yours and stops you.');
    // TODO-QSP: dynamic text: "No <<$pcs_lastname>>. Slow… with care."
    scene.text(`"No ${((st as any).pcs_lastname || '')}. Slow… with care."`);
    scene.text('You grit your teeth and let Aleksei mark the rhythm, making you burn as he slowly takes off his lingerie until he sits naked between your legs, looking pleasantly between them. Slowly caressing your knees, he traps your hand in between your legs, forcefully stopping your masturbation.');
    scene.actions([
      { label: '"Stop teasing me!"', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N3.jpg');
    scene.text('When you try to play with your trapped cunt, he slaps your hand and forcefully takes it away.');
    // TODO-QSP: dynamic text: "Ordering me again <<$pcs_lastname>>? What am I supposed to do with you? I think...
    scene.text(`"Ordering me again ${((st as any).pcs_lastname || '')}? What am I supposed to do with you? I think I must meditate on it, but until then, don't you think that your bosom needs some attention?"`);
    scene.text('You bite your lips to stop a retort and obediently raise your hands towards your rock-hard nipples and begin to play with them. Aleksei just looks down at your ever-growing arousal with an amused smirk while humming a lullaby.');
    scene.text('"Hm?! What the… Yes!"');
    scene.text('It takes you by surprise when Aleksei suddenly and forcefully opens your legs and starts lapping away at your pussy like a rabid dog, the sensation quickly cutting through the knot in your stomach and releasing an orgasm that lashes against your magical core, triggering an even more powerful orgasm.');
    // TODO-QSP: dynamic text: "Isn''t it better when you listen to me <<$pcs_lastname>>?"
    scene.text(`"Isn't it better when you listen to me ${((st as any).pcs_lastname || '')}?"`);
    scene.actions([
      { label: '"Yeah… a lot better."', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N4.jpg');
    scene.text('Now a lot more relaxed, you lie beside Aleksei, who tenderly caresses your hair and looks into your eyes with something like fondness before interlocking one of his hands with yours and sending some mana through your excited nervous system.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_lastname>>, let''s work on our magic."
    scene.text(`"Okay ${((st as any).pcs_lastname || '')}, let's work on our magic."`);
    scene.text('Words of power are whispered and you, the dutiful student, repeat them, forcing the liberated mana to bend under your will, little sparks forming between your united hands. If some mundane could see you, the scene would unfold as two lovers, cuddling and whispering cute nonsenses. It won\'t look anything like the truth.');
    // TODO-QSP: dynamic text: "That''s the end of this lesson <<$pcs_lastname>>."
    scene.text(`"That's the end of this lesson ${((st as any).pcs_lastname || '')}."`);
    scene.text('With a disappointed sigh, you spirit away the magical sparks, but your hands remain interlocked for a minute as you look into Aleksei\'s eyes and a silent communication is established. His removes his hand from yours and caresses your cheek, followed by your neck and finally resting on your shoulder.');
    scene.actions([
      { label: 'It\'s his turn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 10, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/N5.jpg');
    scene.text('As a dutiful apprentice, you understand your master\'s commands without words, and following them, you begin to kiss and fondle Aleksei\'s gorgeous body until you end up in a tangled mess with your face over his beautiful love box.');
    scene.text('"Remember my apprentice… slow… We have all the time to enjoy this."');
    scene.text('"I will try <i>master</i>…"');
    scene.text('You expect some kind of retort, but Aleksei just gives his archetypical half-smile and caresses your hair, putting only the slightest strength to mark the rhythm as he relaxes and lets you pleasure him. With moans of pleasure signaling his pleasured arousal, you slowly raise his hips until you feel his climax in a beautiful display of pleasure.');
    scene.actions([
      { label: 'Afterglow', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).AlexandriaQW = 8;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'spellList', 'addAvailableSpells', 'electSpells');
    (st as any).pcs_sweat = 0;
    (st as any).pcs_breath = 1;
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (100 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N6.jpg');
    scene.text('After cuddling for a few minutes, Aleksei gets up and sits on a nearby chair, where he proceeds to light a cigarette and look at the void. His posture is slightly slouched, yet strangely relaxed when compared with Aleksei\'s always ram-rod demeanor');
    // TODO-QSP: dynamic text: "That was strange. I wasn''t expecting Rikudo''s magic to force us into this sit...
    scene.text(`"That was strange. I wasn't expecting Rikudo's magic to force us into this situation ${((st as any).pcs_lastname || '')}. However, I must say that is fascinating! I have not had this sort of insight into Rikudo's work in centuries. I assume, that it has been as… enlightening to you as it was to me?"`);
    scene.text('You answer by stretching sexily over the covers and extending your hands, a slight electric flash illuminating your smiling face and making Aleksei cover a smile with a drag of his cigarette before he walks up and kneels by your side.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, this is an opportunity I can''t refuse. With your approval, ...
    scene.text(`"${((st as any).pcs_lastname || '')}, this is an opportunity I can't refuse. With your approval, we will continue with more of these <i>teaching sessions</i>, but I want to emphasize that this has been enjoyable, and I am sure that neither of us regrets what just happened. However, this can't be anything more than an exchange for my knowledge`);
    scene.text('He caresses your face before getting to his feet and, with a disgusted grimace, collects his discarded lingerie and exits the room, leaving you alone with your thoughts. As Aleksei said, you will need more <i>teaching sessions</i>, but for the moment, you must get dressed.');
    scene.text('"What the…?"');
    scene.text('As you rise from the bed, you realize the fresh feeling over your skin, and your perfectly arranged hair. Did Aleksei\'s curse <i>clean</i> you in an act of utter bullshit?');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGrumpy1(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = 'no';
  qspCall(s, 'npcStat', 'A241');
  qspCall(s, 'arousal', 'massage', 5, 'sub', 'lesbian');
  qspCall(s, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G1.jpg');
  scene.text('You find yourself tied in bondage gear with a ball gag in your mouth kneeling in the center of a bare-bones room, looking directly at assorted tools that you can barely recognize. Some are piercing equipment that are used for body modification, others seem surgical and the rest look like they were taken from a toolbox.');
  // TODO-QSP: dynamic text: "Afraid <<$pcs_lastname>>?" Aleksei asks with a whisper in your ear, his hands m...
  scene.text(`"Afraid ${((s as any).pcs_lastname || '')}?" Aleksei asks with a whisper in your ear, his hands massaging your shoulders just outside of your field of view.`);
  // TODO-QSP: dynamic text: "Don''t be <<$pcs_lastname>>. The truth is that you haven''t won that privilege,...
  scene.text(`"Don't be ${((s as any).pcs_lastname || '')}. The truth is that you haven't won that privilege, maybe later, but not at this moment."`);
  scene.text('He turns you violently, scraping your immobilized knees over the hardwood and grabs your chin, looking intently into your eyes, his gaze hard as his hands begin to travel arousingly over your exposed body.');
  // TODO-QSP: dynamic text: "You must understand the conundrum that I am now in <<$pcs_lastname>>. We made a...
  scene.text(`"You must understand the conundrum that I am now in ${((s as any).pcs_lastname || '')}. We made a mutually beneficial deal, but it's evident that you lack the strength of character to follow the Path of Knowledge, so I am going to include some <i>discipline</i> lessons."`);
  scene.text('He then proceeds to intensify his massage, caressing your body, kissing your neck and rubbing between your legs, increasing your arousal and masking the pain in your knees.');
  // TODO-QSP: end
  scene.actions([
    { label: 'He slaps you', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'massage', 5, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G2.jpg');
    scene.text('You are quivering under Aleksei ministrations when the strike comes. He smacks your exposed breasts several times, turning your gagged moans into silent screams. When you instinctively try to get away from him, one of his hands darts towards your hair, locking you painfully in position.');
    // TODO-QSP: dynamic text: "No, no, no <<$pcs_lastname>>! This is a lesson you MUST learn."
    scene.text(`"No, no, no ${((st as any).pcs_lastname || '')}! This is a lesson you MUST learn."`);
    scene.text('Aleksei looks at you, fluttering his eyes before embracing you, one of his hands traveling down towards your buttocks, a finger sneaking between your crack to caress your asshole before he spanks your ass.');
    // TODO-QSP: dynamic text: "Don''t move <<$pcs_lastname>>, you are doing it right"
    scene.text(`"Don't move ${((st as any).pcs_lastname || '')}, you are doing it right"`);
    scene.text('Aleksei continues kissing and caressing your body, slapping, pinching and twisting your flesh with commanding but encouraging words, arousing your core at the same time your skin <i>burns</i>.');
    scene.actions([
      { label: 'The torture continues', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'lesbian', 'no_orgasm_msg');
    scene.img('images/characters/city/alexandria/sex/G3.jpg');
    scene.text('Finally, after who knows how long, Aleksei breaks away from you and stands up, looking down at you with a critical eye as he drags slowly on a cigarette, the silence eternalizing as you kneel before him.');
    scene.text('"You have done well, my new pet."');
    scene.text('It takes you a few minutes to understand the compliment because your addled head, the ropes that dig into your itching body, your reddening skin and some carefully placed clothing pins twisting your nipples all distract you.');
    scene.text('"I suppose it\'s time to make your mana flow…"');
    scene.text('You groan and drool down the ball-gag as Aleksei squats by your side, a hand helping you stay upright as the other starts trailing down your body, caressing the painful stretches of red skin until he reaches your pussy, where his fingers begin to play.');
    scene.text('This isn\'t an act of love or sex, it is mechanical. Aleksei looks impassively at your eyes and silently forces you to climax. You trash around Aleksei\'s fingers, drool into the gag until you are forcefully made to cum, liberating the magic in your core and eliciting a spasm of pleasure.');
    scene.actions([
      { label: 'Time to learn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('"Fuck!"');
    scene.text('That is the only word that you can express between coughs as Aleksei takes off the ball gag and reclines you against a low table so you can recover your breath. He just stands and observes you between drags of his cigarette.');
    // TODO-QSP: dynamic text: "Well <<$pcs_lastname>>, time to teach you some magic."
    scene.text(`"Well ${((st as any).pcs_lastname || '')}, time to teach you some magic."`);
    scene.text('You look at him scornfully. You are sore, tired and breathless with bound hands and wobbly legs, and he wants you to continue? A look at Aleksei\'s determined eyes tells you one thing. "No" isn\'t the answer he is expecting.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>> You are a wizard, a literal <i>willworker</i> that can make t...
    scene.text(`"${((st as any).pcs_lastname || '')} You are a wizard, a literal <i>willworker</i> that can make the world cry like a little girl. So why should pain, fatigue or mental duress be allowed to have power over you?"`);
    scene.text('He then grabs your chin, sending some mana through your nervous system as he begins to whisper words of power, again and again, until you grit your teeth and push mana to your bound hands, repeats his words and a sudden flash of electricity illuminates the room.');
    // TODO-QSP: dynamic text: "It is evident that I''m a great teacher <<$pcs_lastname>>, so how will you than...
    scene.text(`"It is evident that I'm a great teacher ${((st as any).pcs_lastname || '')}, so how will you thank me?"`);
    scene.actions([
      { label: 'It\'s his turn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/G5.jpg');
    scene.text('Aleksei sits on the low table and grabs your hair, positioning you between his thighs, with a leg over one of your shoulders so you end up fixed in place. His hot, wet pussy is pushed firmly against your mouth.');
    scene.text('"Remember my pet. Slow. We have all the time to enjoy us."');
    scene.text('You can\'t retort with your face firmly in his crotch. He relaxes and lets you pleasure him, his moans of pleasure signaling that you\'re doing a good job. You slowly raise his hips until you feel his climax in a dominant display of pleasure.');
    scene.actions([
      { label: 'Resting', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).AlexandriaQW = 8;
    qspCall(st, 'spellList', 'addAvailableSpells', 'electSpells');
    ((st as any).pain = (st as any).pain ?? {})['mouth'] = ((st as any).pain['mouth'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['back'] = ((st as any).pain['back'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legL'] = ((st as any).pain['legL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legR'] = ((st as any).pain['legR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['shoulders'] = ((st as any).pain['shoulders'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armL'] = ((st as any).pain['armL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armR'] = ((st as any).pain['armR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['breasts'] = ((st as any).pain['breasts'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['nipples'] = ((st as any).pain['nipples'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['wrists'] = ((st as any).pain['wrists'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['ankles'] = ((st as any).pain['ankles'] ?? 0) + (5);
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (50 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('This time, you can barely talk after the session and collapse over the table with a smug-looking, cigarette smoking Aleksei looking down at you with what you hope is satisfaction, because you are going to need some rest if he wants to encode.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, I suppose that this lesson is over. It seems that the curse ...
    scene.text(`"${((st as any).pcs_lastname || '')}, I suppose that this lesson is over. It seems that the curse is stronger than I thought, but… We have learned something isn't it ${((st as any).pcs_lastname || '')}? so… our deal is unchanged. I must clear up some facts, however. The truth is that this is only the beginning. I will escalate our methodology."`);
    scene.text('He then kneels and again grabs you by your chin before continuing.');
    // TODO-QSP: dynamic text: "You may dislike my methods, but at the end of the day, that is irrelevant. I ha...
    scene.text(`"You may dislike my methods, but at the end of the day, that is irrelevant. I have not had this sort of insight into Rikudo's work in centuries, and I am not going to refuse it, so… this is the new deal ${((st as any).pcs_lastname || '')}. If you want the knowledge that I can impart, we will continue these <i>teaching sessions</i>."`);
    scene.text('He then removes the ropes and exits the room, leaving you to try and get to your feet.');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterLong(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = (Math.floor(Math.random() * 6) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      qspGoto(s, 'alexandriaSex', 'nL1');
    } else {
      qspGoto(s, 'alexandriaSex', 'gL1');
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).random_event ?? 0) < 4) {
      qspGoto(s, 'alexandriaSex', 'nL1');
    } else {
      if (((s as any).npc_rel ?? 0)?.['A241'] === 1  &&  ((s as any).random_event ?? 0) > 3) {
        qspGoto(s, 'alexandriaSex', 'nL2');
      } else {
        if (((s as any).npc_rel ?? 0)?.['A241'] === 2  &&  ((s as any).random_event ?? 0) < 4) {
          qspGoto(s, 'alexandriaSex', 'gL1');
        } else {
          qspGoto(s, 'alexandriaSex', 'gL2');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShort(s: GameState, scene: SceneBuilder): void {
  (s as any).random_event = (Math.floor(Math.random() * 6) + 1);
  qspCall(s, 'stat', '');
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      if (((s as any).random_event ?? 0) < 3) {
        qspGoto(s, 'alexandriaSex', 'ns1');
      } else {
        if (((s as any).random_event ?? 0) < 5) {
          qspGoto(s, 'alexandriaSex', 'ns2');
        } else {
          if (((s as any).random_event ?? 0) < 7) {
            qspGoto(s, 'alexandriaSex', 'ns3');
          }
        }
      }
    } else {
      if (((s as any).random_event ?? 0) < 3) {
        qspGoto(s, 'alexandriaSex', 'gs1');
      } else {
        if (((s as any).random_event ?? 0) < 5) {
          qspGoto(s, 'alexandriaSex', 'gs2');
        } else {
          if (((s as any).random_event ?? 0) < 7) {
            qspGoto(s, 'alexandriaSex', 'gs3');
          }
        }
      }
    }
  } else {
    if (((s as any).npc_rel ?? 0)?.['A241'] === 1) {
      if (((s as any).random_event ?? 0) === 1) {
        qspGoto(s, 'alexandriaSex', 'ns1');
      } else {
        if (((s as any).random_event ?? 0) === 2) {
          qspGoto(s, 'alexandriaSex', 'ns2');
        } else {
          if (((s as any).random_event ?? 0) === 3) {
            qspGoto(s, 'alexandriaSex', 'ns3');
          } else {
            if (((s as any).random_event ?? 0) === 4) {
              qspGoto(s, 'alexandriaSex', 'ns4');
            } else {
              if (((s as any).random_event ?? 0) === 5) {
                qspGoto(s, 'alexandriaSex', 'ns5');
              } else {
                if (((s as any).random_event ?? 0) === 6) {
                  qspGoto(s, 'alexandriaSex', 'ns6');
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).random_event ?? 0) === 1) {
        qspGoto(s, 'alexandriaSex', 'gs1');
      } else {
        if (((s as any).random_event ?? 0) === 2) {
          qspGoto(s, 'alexandriaSex', 'gs2');
        } else {
          if (((s as any).random_event ?? 0) === 3) {
            qspGoto(s, 'alexandriaSex', 'gs3');
          } else {
            if (((s as any).random_event ?? 0) === 4) {
              qspGoto(s, 'alexandriaSex', 'gs4');
            } else {
              if (((s as any).random_event ?? 0) === 5) {
                qspGoto(s, 'alexandriaSex', 'gs5');
              } else {
                if (((s as any).random_event ?? 0) === 6) {
                  qspGoto(s, 'alexandriaSex', 'gs6');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNs1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 25, 'lesbian');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N3.jpg');
  scene.text('Lying down over Aleksei\'s fluffy bed, you treat him with the vision of your hands caressing your body, arousing the flesh, trying and failing to elicit a reaction beyond amusement from your master.');
  scene.text('"Hm… Okay, let\'s continue with some thaumaturgic terms"');
  scene.text('With this, he lies on top of you, your rock-hard nipples poking against his perfect bosom and his amused gaze against your dilated pupils. You know that Aleksei won\'t let you climax until he decides that the lesson is over.');
  scene.text('His lips in the nook of your neck signal the beginning as he slowly caresses and kisses his way down your body, words of power weaving magic all over your skin, making you heave and dig your fingers into the sheets as you let the wizard overload your senses.');
  scene.text('You are groaning over a needed release as his face reaches your pussy and stops… He smells it and looks at you wickedly before he starts devouring your love button, making you climax in a torrent of magical force that wipes away all your tension and leaves you exhausted.');
  scene.text('"You have done well, my new apprentice."');
  scene.text('Aleksei lies down beside your breathless form and after giving you a few minutes to catch your breath, grabs your hips and draws you to him so he can continue with your <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterNs2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 45, 'lesbian');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N4.jpg');
  scene.text('After an exhausting sex session, you lie next to Aleksei as he slowly and methodically explains the secret of the Electric School to you, a sparking nimbus forming between the two of you two as your body and mind learn to channel its force, your breathing synchronized as the two of you utter the same magical invocations.');
  // TODO-QSP: dynamic text: "I think that is enough for today <<$pcs_lastname>>."
  scene.text(`"I think that is enough for today ${((s as any).pcs_lastname || '')}."`);
  scene.text('The electrical aura that was filling the room quickly evaporates and you find yourself sitting snugly in a comfortable bed, exhausted, but pleased as you look into Aleksei\'s beautiful eyes as they observe you deep in thought, but with less intensity than they normally have, almost… relaxed.');
  scene.text('For the next few minutes, only the sound of your in sync breathing can barely be heard in the room until this is broken by a slight gasp on your part when one of Aleksei\'s hands caresses your body and makes you bend slightly towards his nipple that ends up in your mouth. After that, the spell is broken as you start kissing down her body to fulfill your part of the deal.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterNs3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 30, 'lesbian');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'cuni_give', 15, 'lesbian');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 5, 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N5.jpg');
  scene.text('After being driven to an intense climax and learning more about the Electrical School, you can\'t do anything more as a dutiful apprentice than show your master all the tricks you have learned.');
  // TODO-QSP: dynamic text: "<<$pcs_lastname>>… Don''t rush, I''m not going anywhere."
  scene.text(`"${((s as any).pcs_lastname || '')}… Don't rush, I'm not going anywhere."`);
  scene.text('A sardonic smile accompanies Aleksei\'s statement as he lies comfortably on his bed, a hand caressing your head and marking your rhythm as you lap at his cunt and try with all your heart to break that confident facade and make him scream like a bitch.');
  scene.text('"Hm… Yes, my apprentice… Hm… You are doing well…"');
  scene.text('You caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth and tongue, but it\'s not enough. Only elicit entertained half-smiles appear on his face, pushing you a little more in a restless effort until you see him close his eyes and hear a change in his breathing as one of Aleksei\'s hands travels sensually down his body and he soon moans in constricted pleasure,');
  scene.text('For the next minutes, a smug Aleksei caresses your hair as you lie with your head in his pussy. You have not been able to make him scream like a bitch, but there is always another training lesson.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['mouth'] = ((s as any).pain['mouth'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['back'] = ((s as any).pain['back'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 50, 'lesbian');
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal_finger', 5, 'lesbian', 'no_orgasm_msg');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G3.jpg');
  // TODO-QSP: dynamic text: "Get on your knees, look forward and straighten your back <<$pcs_lastname>>."
  scene.text(`"Get on your knees, look forward and straighten your back ${((s as any).pcs_lastname || '')}."`);
  scene.text('The training lesson always begins with a series of reminders about what you must do as Aleksei works your skin, caresses your body and arouses your constricted flesh. His expert hands easily energize your pussy without touching it.');
  scene.text('"Smack!"');
  scene.text('Then come the slaps, quick and precise, one after the other in a constant rhythm, all over your taut flesh, sending mixed signals to your brain as pain and arousal crisscross your nerves until Aleksei feels that it is enough and lets you catch your breath behind the ball gag.');
  // TODO-QSP: dynamic text: "Let''s end this lesson <<$pcs_lastname>>."
  scene.text(`"Let's end this lesson ${((s as any).pcs_lastname || '')}."`);
  scene.text('His smug smile meets your eyes as one of his hands travels down your body, little sparks shocking you and adding synesthetic pressure to your brain until he finally reaches your needy cunt and begins a quick and mechanical fingering, making your arousal climb until it peaks, making you scream in orgasmic bliss behind the ball gag.');
  // TODO-QSP: dynamic text: "Well done <<$pcs_lastname>>. Are you ready for the next part?"
  scene.text(`"Well done ${((s as any).pcs_lastname || '')}. Are you ready for the next part?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['mouth'] = ((s as any).pain['mouth'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['back'] = ((s as any).pain['back'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 45, 'lesbian', 'no_orgasm_msg', 'bound');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G4.jpg');
  scene.text('After making you orgasm in a session of magical bondage, Aleksei reclines you against the wall and hovers over your tired form, the ropes, seemingly even tighter, digging into your itching flesh as he waits for you to catch your breath.');
  // TODO-QSP: dynamic text: "Repeat after me <<$pcs_lastname>>."
  scene.text(`"Repeat after me ${((s as any).pcs_lastname || '')}."`);
  scene.text('Maybe a little too soon, Aleksei grabs you by the chin so he can raise your face towards his so nothing obstructs the line of vision as words of power are pronounced and magic energy begins to fill the room as you follow his example and will your mana.');
  // TODO-QSP: dynamic text: "Hm… Well, that will be all for now <<$pcs_lastname>>."
  scene.text(`"Hm… Well, that will be all for now ${((s as any).pcs_lastname || '')}."`);
  scene.text('After a few minutes, Aleksei releases your head and nonchalantly sits by your side, letting the electric magic exit the room, refilling it with the sound of your ragged breathing until he opens his legs and slowly caresses the side of your face before grabbing a lock of your hair. The message is clear and you begin to kneel.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 12) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['mouth'] = ((s as any).pain['mouth'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['back'] = ((s as any).pain['back'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['breasts'] = ((s as any).pain['breasts'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['nipples'] = ((s as any).pain['nipples'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 45, 'lesbian', 'no_orgasm_msg', 'bound');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G5.jpg');
  scene.text('After a session of magical bondage and some <i>teaching</i> from Aleksei, done in his unmistakable style, you find yourself kneeling on hardwood, wrapped in bondage ropes with your head between your teacher\'s toned thighs that cross behind your neck so you can\'t escape.');
  // TODO-QSP: dynamic text: "Ah-Ah-Ah… Easy now, <<$pcs_lastname>>, you''re not some common harlot!"
  scene.text(`"Ah-Ah-Ah… Easy now, ${((s as any).pcs_lastname || '')}, you're not some common harlot!"`);
  scene.text('You eat out Aleksei, his constant nagging and <i>helpful</i> advice making sure that you <i>properly</i>, caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth and tongue, but it is not enough. Only elicit moans and even more nagging escape his mouth, pushing you a little more in a restless effort until you see him close his eyes and hear a change in his breathing as one of his handw travels sensually down his body he soon moans in constricted pleasure,');
  scene.text('For the next minutes, a smug Aleksei sits relaxed, smoking a cigarette as he observes you catching your breath, a silent question in the air… do you want another session?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterNL1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N3.jpg');
  scene.text('Lying down over Aleksei\'s fluffy bed, you treat him with the vision of your hands caressing your body, arousing the flesh, trying and failing to elicit a reaction beyond amusement from your master.');
  scene.text('"Hm… Okay, let\'s continue with some thaumaturgic terms"');
  scene.text('With this, he lies on top of you, your rock-hard nipples poking against his perfect bosom and his amused gaze against your dilated pupils. You know that Aleksei won\'t let you climax until he decides that the lesson is over.');
  scene.text('His lips in the nook of your neck signal the beginning as he slowly caresses and kisses his way down your body, words of power weaving magic all over your skin, making you heave and dig your fingers into the sheets as you let the wizard overload your senses.');
  scene.text('You are groaning over a needed release as his face reaches your pussy and stops… He smells it and looks at you wickedly before he starts devouring your love button, making you climax in a torrent of magical force that wipes away all your tension and leaves you exhausted.');
  scene.text('"You have done well, my new apprentice."');
  scene.text('Aleksei lies down beside your breathless form and after giving you a few minutes to catch your breath, grabs your hips and draws you to him so he can continue with your <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N4.jpg');
    scene.text('After an exhausting sex session, you lie next to Aleksei as he slowly and methodically explains the secret of the Electric School to you, a sparking nimbus forming between the two of you two as your body and mind learn to channel its force, your breathing synchronized as the two of you utter the same magical invocations.');
    // TODO-QSP: dynamic text: "I think that is enough for today <<$pcs_lastname>>."
    scene.text(`"I think that is enough for today ${((st as any).pcs_lastname || '')}."`);
    scene.text('The electrical aura that was filling the room quickly evaporates and you find yourself sitting snugly in a comfortable bed, exhausted, but pleased as you look into Aleksei\'s beautiful eyes as they observe you deep in thought, but with less intensity than they normally have, almost… relaxed.');
    scene.text('For the next few minutes, only the sound of your in sync breathing can barely be heard in the room until this is broken by a slight gasp on your part when one of Aleksei\'s hands caresses your body and makes you bend slightly towards his nipple that ends up in your mouth. After that, the spell is broken as you start kissing down her body to fulfill your part of the deal.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).AlexandriaQW ?? 0) < 12) {
      (st as any).AlexandriaQW = ((st as any).AlexandriaQW ?? 0) + (1);
    }
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_sweat = 0;
    (st as any).pcs_breath = 1;
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 40, 'lesbian', 'no_orgasm_msg');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (100 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N5.jpg');
    scene.text('After being driven to an intense climax and learning more about the Electrical School, you can\'t do anything more as a dutiful apprentice than show your master all the tricks you have learned.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>… Don''t rush, I''m not going anywhere."
    scene.text(`"${((st as any).pcs_lastname || '')}… Don't rush, I'm not going anywhere."`);
    scene.text('A sardonic smile accompanies Aleksei\'s statement as he lies comfortably on his bed, a hand caressing your head and marking your rhythm as you lap at his cunt and try with all your heart to break that confident facade and make him scream like a bitch.');
    scene.text('"Hm… Yes, my apprentice… Hm… You are doing well…"');
    scene.text('You caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth and tongue, but it\'s not enough. Only elicit entertained half-smiles appear on his face, pushing you a little more in a restless effort until you see him close his eyes and hear a change in his breathing as one of Aleksei\'s hands travels sensually down his body and he soon moans in constricted pleasure,');
    scene.text('For the next minutes, a smug Aleksei caresses your hair as you lie with your head in his pussy. You have not been able to make him scream like a bitch, but there is always another training lesson.');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGL1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G3.jpg');
  // TODO-QSP: dynamic text: "Get on your knees, look forward and straighten your back <<$pcs_lastname>>."
  scene.text(`"Get on your knees, look forward and straighten your back ${((s as any).pcs_lastname || '')}."`);
  scene.text('The training lesson always begins with a series of reminders about what you must do as Aleksei works your skin, caresses your body and arouses your constricted flesh. His expert hands easily energize your pussy without touching it.');
  scene.text('"Smack!"');
  scene.text('Then come the slaps, quick and precise, one after the other in a constant rhythm, all over your taut flesh, sending mixed signals to your brain as pain and arousal crisscross your nerves until Aleksei feels that it is enough and lets you catch your breath behind the ball gag.');
  // TODO-QSP: dynamic text: "Let''s end this lesson <<$pcs_lastname>>."
  scene.text(`"Let's end this lesson ${((s as any).pcs_lastname || '')}."`);
  scene.text('His smug smile meets your eyes as one of his hands travels down your body, little sparks shocking you and adding synesthetic pressure to your brain until he finally reaches your needy cunt and begins a quick and mechanical fingering, making your arousal climb until it peaks, making you scream in orgasmic bliss behind the ball gag.');
  // TODO-QSP: dynamic text: "Well done <<$pcs_lastname>>. Are you ready for the next part?"
  scene.text(`"Well done ${((s as any).pcs_lastname || '')}. Are you ready for the next part?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('After making you orgasm in a session of magical bondage, Aleksei reclines you against the wall and hovers over your tired form, the ropes, seemingly even tighter, digging into your itching flesh as he waits for you to catch your breath.');
    // TODO-QSP: dynamic text: "Repeat after me <<$pcs_lastname>>."
    scene.text(`"Repeat after me ${((st as any).pcs_lastname || '')}."`);
    scene.text('Maybe a little too soon, Aleksei grabs you by the chin so he can raise your face towards his so nothing obstructs the line of vision as words of power are pronounced and magic energy begins to fill the room as you follow his example and will your mana.');
    // TODO-QSP: dynamic text: "Hm… Well, that will be all for now <<$pcs_lastname>>."
    scene.text(`"Hm… Well, that will be all for now ${((st as any).pcs_lastname || '')}."`);
    scene.text('After a few minutes, Aleksei releases your head and nonchalantly sits by your side, letting the electric magic exit the room, refilling it with the sound of your ragged breathing until he opens his legs and slowly caresses the side of your face before grabbing a lock of your hair. The message is clear and you begin to kneel.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).AlexandriaQW ?? 0) < 12) {
      (st as any).AlexandriaQW = ((st as any).AlexandriaQW ?? 0) + (1);
    }
    ((st as any).pain = (st as any).pain ?? {})['mouth'] = ((st as any).pain['mouth'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['back'] = ((st as any).pain['back'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legL'] = ((st as any).pain['legL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legR'] = ((st as any).pain['legR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['shoulders'] = ((st as any).pain['shoulders'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armL'] = ((st as any).pain['armL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armR'] = ((st as any).pain['armR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['breasts'] = ((st as any).pain['breasts'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['nipples'] = ((st as any).pain['nipples'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['wrists'] = ((st as any).pain['wrists'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['ankles'] = ((st as any).pain['ankles'] ?? 0) + (5);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 45, 'lesbian', 'no_orgasm_msg', 'bound');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (50 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G5.jpg');
    scene.text('After a session of magical bondage and some <i>teaching</i> from Aleksei, done in his unmistakable style, you find yourself kneeling on hardwood, wrapped in bondage ropes with your head between your teacher\'s toned thighs that cross behind your neck so you can\'t escape.');
    // TODO-QSP: dynamic text: "Ah-Ah-Ah… Easy now, <<$pcs_lastname>>, you''re not some common harlot!"
    scene.text(`"Ah-Ah-Ah… Easy now, ${((st as any).pcs_lastname || '')}, you're not some common harlot!"`);
    scene.text('You eat out Aleksei, his constant nagging and <i>helpful</i> advice making sure that you <i>properly</i>, caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth and tongue, but it is not enough. Only elicit moans and even more nagging escape his mouth, pushing you a little more in a restless effort until you see him close his eyes and hear a change in his breathing as one of his hand travels sensually down his body he soon moans in constricted pleasure,');
    scene.text('For the next minutes, a smug Aleksei sits relaxed, smoking a cigarette as he observes you catching your breath, a silent question in the air… do you want another session?');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNice2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A241');
  qspCall(s, 'arousal', 'foreplay', 5, 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N7.jpg');
  scene.text('Aleksei, don\'t run to take away your clothes, in fact, he goes slow, taking with care every piece of your outfits and carefully folding them. You in the meantime bit your lips and moans, as every touch coming from the powerful wizard, sent a pleasant mana charge up your body\'s nerves.');
  scene.text('"Good, my apprentice, good. You are learning to be patient and… <i>obedient</i>."');
  scene.text('Blushing at the strange level of flattery in Aleksei\'s voice, you <i>obedientlly</i> bend over the bed, so the now very naked wizard, has an easy job taking off the rest of your clothes. You don\'t know what exactly he is perceiving, but you? a beautiful woman, with just the right amount of make-up in a well-lit room taken out from a film… Yes, <i>his</i> curse is bullshit.');
  scene.text('"Nice my apprentice, very… nice. Now, sit on the headboard and present you to me."');
  scene.text('You don\'t doubt, and wiggling your ass, climb unto the bed, exposing as much you can to the wizard and tantalizingly dragging yourself towards the headboard, where you sit on the fluffy pillows, and lean back, opening your legs so Aleksei has a close-up of your aroused pussy.');
  scene.text('Aleksei stands beside the bed, obviously pleased as his eyes travel your body, then climbs unto it, and kneels between your legs. The next moments pass in silence until Aleksei extends a hand and delicately grabs your chin, an amused smirk on his lips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'He goes down on you.', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'arousal', 'foreplay', 5, 'lesbian');
    qspCall(st, 'arousal', 'cuni', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N8.jpg');
    scene.text('The grab turns into a caress, that slowly goes down your neck towards your bust, where he stops a minute to slowly fondle your diamond-hard nipples, seemingly pleased with the ragged moans, his mana-enhanced touch elicits. You in the meantime clench your teeth, grab the headboard, and somehow resist the urge to dip your hands between your tensed legs.');
    scene.text('"Hm… It\'s seems that you have waited enough my apprentice. Let\'s see if we can end this in a pleasant note."');
    scene.text('Aleksei hand continues its travel towards your wetness, where sweetly, he begins to push a finger between your drenched folds… and then stop. You gasp and instinctively try to move your hips to indulge your needs, but again and again, Aleksi moves away his finger, all the time an evil smile on his lips.');
    scene.text('"Patience my apprentice… I don\'t want to <i>feel</i> you… I want to <i>taste</i> you."');
    scene.text('He then, begin to bend, first to kiss your bosom, and after that, to lick your blood-engorged love bud, at the same time, the until that moment quiescent fingers, begin to play with the rest of your aroused pussy. The room fills with your unrestricted sex-induced moans, accompanied by the sound of his mouth sucking your wet flesh. Aleksei barely contains your rising hips, as the constant stimulation, begins to charge your nerves with mana-enhanced arousal, quickly peeling away any rational thought, except the need for his tongue. Finally, the arousal is just too much and all the accumulated magical tension… explodes… as your mind turns to mush and your body shakes in a mind-shattering orgasm.');
    scene.actions([
      { label: 'Learn some magic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N9.jpg');
    scene.text('Enjoying your mana-enhanced afterglow, you lie no-cuddling over Aleksei, with your head resting on his beautiful bust, as he caresses your scalp, his mind seeming on another place, probably thinking in whatever insights your magical link has shown him.');
    // TODO-QSP: dynamic text: "Enough <<$pcs_lastname>>, is time to continue your training."
    scene.text(`"Enough ${((st as any).pcs_lastname || '')}, is time to continue your training."`);
    scene.text('Aleksei accompanies his words with a pair of finger taps to the back of your head before rolling, putting you two on your side, and grabbing your face with both hands, begin to say words of power. You shortly join in a magical duet, filling your mind with knowledge. Finally, instinctively, you interlock a hand, with one of Aleksei\'s ones, and extending the united member, you concentrate to unleash a shower of sparks in the middle of the bedroom.');
    scene.text('The magical display only lasts a second, and with you looking into Aleksei\'s amused eyes… then, something catches your attention… from the corner of the eye, you see a strange item… a transparent dildo has found its way to Aleksei\'s fluffy bed, and sit innocently by your side - <i>AlExAnDrIa HaVe a BeAuTiFuLl RuMp IsN\'t It?</i> - You blink at the strange thought, and look down at the sex toy - <i>YeS, ShE WiLl ApPrEcIaTe A LiTtLe LoVe DoWn ThErE</i> - Yeah! That is a great idea!');
    scene.actions([
      { label: 'FiRsT, TaStE HeR', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 5, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N10.jpg');
    scene.text('You smile and try to put as much sultriness you can on your next words "Master! Will you let your <i>obedient</i> apprentice to <i>requite</i> your largesse?" Aleksei don\'t answers but looks at you with curiosity, and you take that like a keep going. You, then push him to his side until he is on all fours.');
    scene.text('"Let me <i>serve</i> you master."');
    scene.text('Kneeling by his side, you bend and begin a trail of kisses, down her back towards his buttocks, where with care, you open them and proceed to cover with kisses his puckered hole, all the way feeling Aleksei\'s tenseness through your lips. He quickly loses that strain and with care, you begin to stick your tongue into the supernaturally clean b-hole.');
    scene.text('There is a jolt of… something… and your head is flooded with the taste of… a thunderstorm annihilating an army, of old musty books whispering dark secrets and of… agelessness. You blink, your <i>mundane</i> mind trying to understand the alien tastes, but… your growing <i>magical</i> one? Just delight on the taste of true power.');
    scene.text('You lost track of time, as you plunge your tongue without care beyond Aleksei\'s backdoor, enjoying the pleasured gasps coming from your master, and the occasional assurance caress to the back of your head, progressively drenching his innards with your spit, with the only idea to prepare him for the next part.');
    scene.actions([
      { label: 'TiMe To BrInG tHe LoVe!', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'arousal', 'anal_dildo_give', 5, 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/N11.jpg');
    scene.text('Cleaning your mouth with the back of a hand after your feast, you rise and look to an expectant Aleksei. He is obviously flustered and heaving, but his eyes look at you with curiosity, waiting for your next move that is, slide a hand down his tummy towards his drenched cunt. During a moment, your hand plays with Aleksei\'s well-groomed bush before changing objectives, and finger his wet snatch.');
    scene.text('Aleksei gives a contented sigh and languidly rests his head in the bed, surrendering completely to your ministrations. You take cue of this, and without stopping your attack to his box, you grab the dildo, that soon finds itself against Aleksei\'s backdoor, and with care, you begin to push.');
    scene.text('"Hmmm…"');
    scene.text('Aleksei pleasured wailings, fill your ears, as you begin to love with daintiness, his accommodating innards, slowly, but without pause, rising the cranky wizard excitement. You are totally engrossed in the act to give him a well-deserved orgasm, and in a reciprocity gesture - and with flexibility worthy of porn - Aleksei turns slightly to grab your face and look into your eyes.');
    scene.text('"Ahhh…"');
    scene.text('You are so utterly lost in Aleksei\'s eyes, that barely hears the orgasmic moan, that accompanies his climax. He trembles and through your skin contact, feel the shivers that signal the highlight of all your work before his limbs fail, and Aleksei drops boneless in orgasmic bliss.');
    scene.actions([
      { label: 'No-Cuddling', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 20;
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'spellList', 'addAvailableSpells', 'electSpells');
    (st as any).pcs_sweat = 0;
    (st as any).pcs_breath = 1;
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (100 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N9.jpg');
    scene.text('No-cuddling again, over Aleksei\'s comfortable bosom, you somewhat startled, observe the disintegrating dildo in his hands. Now that your <i>teaching lesson</i> has ended, you can see with clarity how Aleksei\'s curse has manipulated you again.');
    // TODO-QSP: dynamic text: "Fascinating! Isn''t it <<$pcs_lastname>>? Your magic interacts with my curse, i...
    scene.text(`"Fascinating! Isn't it ${((st as any).pcs_lastname || '')}? Your magic interacts with my curse, in truly interesting ways! Beyond altering your thought patterns and senses, now we have <i>Creatio ex nihilo</i>! All of this without true volition!"`);
    scene.text('Aleksei doesn\'t seems to mind that his curse has basically made you a brainwashed <i>ass</i> crazy, that essentially has had her way with his butt, in fact, he seems genuinely in a good mood after the whole act, as he is caressing your hair as he muses over the whole situation.');
    // TODO-QSP: dynamic text: "Well, it has been illuminating, but I think that this <i>teaching lesson</i> ha...
    scene.text(`"Well, it has been illuminating, but I think that this <i>teaching lesson</i> has come to an end, and I must think on how to <i>reward</i> you the next time ${((st as any).pcs_lastname || '')}"`);
    scene.text('He says this as the dildo finally disappears and during a moment, Aleksei observes the know empty hand, before taking it towards your buttocks and… slice a finger towards your asshole, where he plays a little with it, before rising up from the bed, re-dress and leave the room.');
    scene.actions([
      { label: 'Redress and follow him.', goto: ['alexandriaChat', 'tractatus'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGrumpy2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A241');
  qspCall(s, 'arousal', 'BDSM', 10, 'sub', 'lesbian');
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G7.jpg');
  scene.text('After reaching the basement and getting naked, Aleksei put your hands and feet in manacles, hogtie you with ropes, and hang up your body face down from the ceiling. The bondage setup, is incredibly annoying, as it cut the blood to your extremities, extending a tingling all over your body and impeding all your movements, letting you only silently observe as Aleksei, undress and carefully fold the clothes on a nearby table. He… takes his time to take away the clothes, seemingly enjoying your discomfort.');
  scene.text('"…"');
  scene.text('Aleksei doesn\'t talk. He just sits on a stool and observes you helplessly squirm with a cooly smile, at the same time he takes on a cigar. It\'s smoke carefully exhaled, fly towards your face, so you can take in the strange weed. You don\'t know what it is, but it\'s effects in your current predicament are brutal, as it enhances your sense of self, making you painfully aware of the tightly ropes tied all over your body.');
  // TODO-QSP: dynamic text: "Ok <<$pcs_lastname>>! Let''s get you ready!"
  scene.text(`"Ok ${((s as any).pcs_lastname || '')}! Let's get you ready!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Ready?', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal_finger', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G8.jpg');
    scene.text('Aleksei finally stands, a tube of K-Y Jelly in hand, and walks towards your backside, so you lose sight of him. Then, a finger caresses your back, and you see stars as your hypersensitive skin flare at the slight touch.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>> I want to get something clear. I am not a sadist, and this, d...
    scene.text(`"${((st as any).pcs_lastname || '')} I want to get something clear. I am not a sadist, and this, doesn't give me any pleasure, but… you on the other hand… ARE enjoying this isn't it? That is what I find fascinating, MY curse is working through OUR link, to make YOU a masochist!"`);
    scene.text('Saying this, he gives you a hard slap to your backside that sends shivers up your back and distracts you momentarily from the finger that he pushes up your asshole, then… "Ahhhhh!" Your screams fill the room, as an electrical jolt make you struggle against the ropes');
    // TODO-QSP: dynamic text: "There… There… <<$pcs_lastname>>, you are clean and ready."
    scene.text(`"There… There… ${((st as any).pcs_lastname || '')}, you are clean and ready."`);
    scene.text('You stop shaking and find a weird sensation of <i>emptyness</i> in your bowels… It\'s seems that Aleksei\'s electrical spell has thoroughly cleaned your innards, leaving you suddenly very tired, but before you can even begin to heave, his gooey fingers begin to extend the jelly inside your sensitive anus.');
    scene.actions([
      { label: 'It stings!', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal_finger', 5, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'BDSM', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G9.jpg');
    scene.text('You moan as the substance touch your now, VERY sensitive asshole, and for the next pair of minutes, you can only gurgle incoherently as Aleksei, prepare your innards for the next part. Unfortunately, the next part is announced with two slaps to your backside.');
    // TODO-QSP: dynamic text: "SLAP! Wake up <<$pcs_lastname>>! SLAP!"
    scene.text(`"SLAP! Wake up ${((st as any).pcs_lastname || '')}! SLAP!"`);
    scene.text('Again, without giving you time to rest, Aleksei, pick something hard and cold and begin to push it beyond your rim. You can\'t see it, but it <i>feels</i> slighted bent, and hooklike? At least is what you surmise, as Aleksei after inserting the item, seems to tie it to the ropes that bind you to the ceiling and…');
    scene.text('"SLAP! SLAP!"');
    scene.text('He begins again to slap your sensitive backside, the hits, making the ropes tremble and the <i>anal hook</i>? rub against the slick skin of your anus. Your moans turn into screams of pleasure that fill the room, as the pain sends you quickly towards your climax… and then Aleksei stops.');
    // TODO-QSP: dynamic text: "No <<$pcs_lastname>>… No… Remember… when I say so."
    scene.text(`"No ${((st as any).pcs_lastname || '')}… No… Remember… when I say so."`);
    scene.actions([
      { label: 'Wait a little', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'arousal', 'anal_dildo', 5, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G10.jpg');
    scene.text('Aleksei returns to your sigh and sits on the stool, a smirk on his lips as he lights another cigar and observes you squirm and sob. The sensations are overwhelming. You suffer painful cramps all over your bound limbs… Your asshole burns after the <i>cleaning</i> and the rubbing <i>analhook</i>… but the WORST is that you are incredibly aroused, and beyond moaning or grunting, there is nothing that you can do to quell the burn in your loins.');
    // TODO-QSP: dynamic text: "Don''t worry <<$pcs_lastname>>! Just relax! We have all the time in the world!"
    scene.text(`"Don't worry ${((st as any).pcs_lastname || '')}! Just relax! We have all the time in the world!"`);
    scene.text('Aleksei look at you with the most beatific expression that you have ever seen, like he, in His infinite goodness, is doing you a favor. The mocking display extends several minutes that don\'t help your arousal before he finally gets up and after delicately rearranging your hair, walks away beyond your line of sight.');
    scene.text('"BRRRRR"');
    scene.text('Aleksei presses a vibrating something against your needed clit, at the same time, he uses his other hand to play with your vagina and asshole. "Oh, God!" You scream in surprise to the creator, trash against the tight ropes that dig into your skin, and lose all reasoning, as finally, Aleksei decides to <i>play</i> with your needy cunt and anus, but <i>somehow</i>, even with that, you can\'t reach the climax.');
    // TODO-QSP: dynamic text: "Good <<$pcs_lastname>>, good, now you can have your release."
    scene.text(`"Good ${((st as any).pcs_lastname || '')}, good, now you can have your release."`);
    scene.text('With those words, <i>something</i> magical clicks in your head, and all the tension accumulated against your core, explodes in a body-shaking magical orgasm, making you give a silent scream as all your muscles tense fighting against the ropes.');
    scene.actions([
      { label: 'Learn some magic', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G11.jpg');
    scene.text('It takes a while for your mind, to get clear from the mana-enhanced <i>petite mort</i>, and perceive a silent Aleksei looking intensely into your eyes. He then, when finally realizes that you are more or less cognizant, raises your head by your hair… and kisses you. It\'s only a moment, and immediately, he withdraws his head but maintains your lower lip between his teeth… There is a sharp sensation, pain and you taste blood… He has bitten your lip!');
    // TODO-QSP: dynamic text: "Now <<$pcs_lastname>>, let''s see if you can learn something."
    scene.text(`"Now ${((st as any).pcs_lastname || '')}, let's see if you can learn something."`);
    scene.text('Uncaring, Aleksei turns your head and puts his mouth beside your ear. Then, words of power began to push into your mana-overloaded brain, building the foundations for a new spell. Somehow, you push over the discomforts and pains, and join Aleksei in a magical duet, that little by little begins to channel all your overflowing mana in a sudden lightning flash, that sends sparks flying all over the room.');
    // TODO-QSP: dynamic text: "Nice <<$pcs_lastname>>… very nice…"
    scene.text(`"Nice ${((st as any).pcs_lastname || '')}… very nice…"`);
    scene.text('Aleksei then, take away your ropes, making you fall down painfully, before returning to the stool, and opening his thighs.');
    scene.actions([
      { label: 'You get the message', handler: (st: GameState) => {
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    qspCall(st, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/city/alexandria/sex/G5.jpg');
    // TODO-QSP: dynamic text: "What are you waiting <<$pcs_lastname>>? You are a will-worker! Just come here!"
    scene.text(`"What are you waiting ${((st as any).pcs_lastname || '')}? You are a will-worker! Just come here!"`);
    scene.text('<i>Encoraged</i> by Aleksei\'s words, you fight against cramps, soreness, pain, and the blood in your mouth to somehow rise to a doggy position. The next crawl towards the waiting wizard, eternalizes, as you fight to move your sleeping extremities.');
    // TODO-QSP: dynamic text: "Only a little more <<$pcs_lastname>>!"
    scene.text(`"Only a little more ${((st as any).pcs_lastname || '')}!"`);
    scene.text('Finally, breathless, you reach between Aleksei\'s spread legs, where he grabs your hair and forcefully makes you dip into his beautiful pink box. Understanding what he is expecting from you, you open your mouth and begin to eat the cranky wizard only for another jolt of mana to shake your mind… tasting… a thunderstorm annihilating an army, old musty books whispering dark secrets and… agelessness. You blink, your <i>mundane</i> mind trying to understand the alien tastes, but… your growing <i>magical</i> one? Just delight in the taste of true power.');
    // TODO-QSP: dynamic text: "Hm… ¨You are learning <<$pcs_lastname>>."
    scene.text(`"Hm… ¨You are learning ${((st as any).pcs_lastname || '')}."`);
    scene.text('Suddenly, you are re-energized and launch yourself to devour Aleksei\'s pink bottom. Your hands grabbing firmly his thighs as you try to drink on Aleksei\'s <i>unearthly</i> flavor, filling the room with the sound of your lapping, and Aleksei\'s silent moans, until you sense him tensing as he climaxes.');
    scene.actions([
      { label: 'Some time afterwards', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 20;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'spellList', 'addAvailableSpells', 'electSpells');
    ((st as any).pain = (st as any).pain ?? {})['lips'] = ((st as any).pain['lips'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asshole'] = ((st as any).pain['asshole'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legL'] = ((st as any).pain['legL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legR'] = ((st as any).pain['legR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['shoulders'] = ((st as any).pain['shoulders'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armL'] = ((st as any).pain['armL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armR'] = ((st as any).pain['armR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['wrists'] = ((st as any).pain['wrists'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['ankles'] = ((st as any).pain['ankles'] ?? 0) + (5);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (50 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G4.jpg');
    scene.text('A pleased Aleksei looks down at your prone form, too sore and tired to do much more than heave in the floor, but… strangely, coming out utterly satisfied from the rough treatment. After some moments of introspective smoking, he bent, grabbed your chin, and looked into your eyes.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, It''s evident to me, that you have enjoyed this lesson beyon...
    scene.text(`"${((st as any).pcs_lastname || '')}, It's evident to me, that you have enjoyed this lesson beyond whatever the curse made you feel… What do you think about that? Hm? Well, at the end of the day it's unimportant, as it seems that you can't learn without discipline."`);
    scene.text('Saying this, Aleksei rises, grabs his carefully folded clothes, and exits the room, leaving your slowly recovering body on the floor, until with a great deal of willpower you manage to get up.');
    scene.actions([
      { label: 'Redress and follow him.', goto: ['alexandriaChat', 'tractatus'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNL2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N8.jpg');
  scene.text('<i>Obediently</i>, you take your clothes for the enjoyment of your <i>master</i>… <i>Obediently</i> you crawl towards the bed\'s headboard for the enjoyment of your <i>master</i>… <i>Obediently</i> you sit on the fluffy pillows and open your legs for the enjoyment of your <i>master</i>… Then, you watch in silence as a chuckling Aleksei, gets himself naked and crawls towards you.');
  scene.text('"Good, my apprentice, good. You are learning to be patient and… <i>obedient</i>."');
  scene.text('He then, caress delicately your chin and giving you a half-smile begins the long-road towards your burning sex, taking care that your bosom receives well-earned attention, making your sigh as goosebumps trigger all over your skin. The next minutes pass with you heaving and moaning as Aleksei, do his dammest to impede you from cum! He eats and caresses your cunt, only to retreat and observe pleased at you squirm obediently, wetting his sheets and forcing yourself to don\'t rush your hands towards your sex, until you finally can\'t stop and plead.');
  scene.text('"So be it, my apprentice."');
  scene.text('Then, and only then, Aleksei let your arousal rise without impediment under his ministrations. You moan, scream and trash as mana begins to gather in your core, in sync with your sexual excitement, until you climax and a torrent of power sublimates your body in an orgasmic wave.');
  scene.text('After this, you slide down the headboard and cuddle with Aleksei so you can continue with your <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N9.jpg');
    scene.text('After getting eaten by Aleksei, and being overflowed with mana, you lie over his comfortable bust. He doesn\'t seems to dislike your need to cuddle and scratch lazily your scalp.');
    scene.text('"Ok, my apprentice, that is enough procrastination, is time for your next <i>lesson</i>"');
    scene.text('He then, grabs your head and looks deep into your eyes. His mouth opens and unearthly words fill your head with arcane knowledge. Little by little you join him in a duet, at first labored but soon easily as you work through your magical connection.');
    scene.text('"Good my apprentice… good… now show me."');
    scene.text('You stir over Aleksei and extend a hand, soon, as you push mana through words of power, sparks begin to form between the fingers until there is an electrical flash, and magical lighting illuminates the room. Aleksei observe your demonstration with a critical eye, before assenting with approval. After that, is just you two, lazily lying in each other arms, before a sudden magical compulsion in the back of your head, made you move. Aleksei looks at you in understanding… is time to continue with his part of the <i>lesson</i>.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).AlexandriaQW ?? 0) < 23) {
      (st as any).AlexandriaQW = ((st as any).AlexandriaQW ?? 0) + (1);
    }
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_sweat = 0;
    (st as any).pcs_breath = 1;
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 35, 'lesbian', 'no_orgasm_msg');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (100 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/N10.jpg');
    scene.text('Aleksei has made you climax, and fill your mind with arcane knowledge, so it is time to reciprocate and give something back to your master, so… you put him in his fours, and delicately begin to kiss his back down to that beautiful rump that hides his little brown star.');
    scene.text('He doesn\'t stop you as your tongue digs into that delicious hole - a light sigh on his lips as the only reaction - and your mind is flooded with strange visions and sensations, as your magics <i>connect</i>, making you shudder as mana begin to flow between you two. Instinctively, one of your hands reaches towards his pubic mound and plays with his well-groomed bush… but that isn\'t your final destination… After some moments, you reach to his perfect box, and begin to work.');
    scene.text('The room fills with Aleksei\'s dainty moans and your wet laps, as you edge his wet box and hot asshole, pleasuring the unflappable wizard. The only signal that he is getting near his climax, is when he finally caresses your face, so you turn and look into Aleksei\'s eyes, as he cum.');
    scene.text('After this, you again cuddle with him thinking in your lessons, until he pats lightly your backhead, to signal the end of your little runt.');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGL2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G10.jpg');
  scene.text('Aleksei, ties you with ropes in utter silence, ignoring your grunts of pain, as your body is bound so you can\'t enact any move. When he is sure you can\'t move your extremities, he hangs you face down from the ceiling. Aleksei then, takes away slowly his clothes, letting you come under cramps as he ignores your suffering.');
  // TODO-QSP: dynamic text: "Well… Let''s begin <<$pcs_lastname>>."
  scene.text(`"Well… Let's begin ${((s as any).pcs_lastname || '')}."`);
  scene.text('You contain your breath because you know what is going to happen. Aleksei disappears from your line of sight as he walks behind you, and pushes a finger up your rectum… "AHHHH!" You scream as an electrical jolt cleans your innards, and make you shake in your bounds… Then, without care for your sore asshole, Aleksei begins to smear some K-Y Jelly inside it. Your ragged breath fills the room at the mix of sensations as the Jelly touches the sensitive inner skin.');
  scene.text('"Hmpf" That barely whispered grunt, is the only sound that occasionally says Aleksei to accompany your grunts and moans. He, with utter detachment, plays with you, first stirring your asshole with an analhook and after that, he works your cunt with a magic wand. Your body suffers from painful cramps, your asshole is sore and stretched tight, and occasionally magical jolts shake your body. Even with all that you can negate your arousal, and little by little Aleksei manages to forcibly made you cum, triggering your core to suffuse your body in mana.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G11.jpg');
    scene.text('After hanging you from the ceiling, and forcefully making you climax, Aleksei stands in front of you. He smokes and seems strangely pleased with your squirming and sore form. Finally, after some moments of introspection, he raises your head by your hair, and kisses you, not forgetting to bite your lips slightly.');
    // TODO-QSP: dynamic text: Pay attention <<$pcs_lastname>>."
    scene.text(`Pay attention ${((st as any).pcs_lastname || '')}."`);
    scene.text('Aleksei puts his mouth beside your ear and begins to spell words of power. You fight through the numbness provoked by the manna-enhanced climax, your tired body, and sore limbs, managing to somehow join him in the spell crafting, and little by little something unearthly begins to form in the room. There is a flash and momentarily lighting illuminates the room.');
    // TODO-QSP: dynamic text: Hm… Well done <<$pcs_lastname>>."
    scene.text(`Hm… Well done ${((st as any).pcs_lastname || '')}."`);
    scene.text('After that, Aleksei rearranges your hair, before without too much fanfare, releases the ropes, that tie you, and you fall painfully to the ground, ready for your next <i>lesson</i>.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).AlexandriaQW ?? 0) < 23) {
      (st as any).AlexandriaQW = ((st as any).AlexandriaQW ?? 0) + (1);
    }
    if (((st as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    ((st as any).pain = (st as any).pain ?? {})['lips'] = ((st as any).pain['lips'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asshole'] = ((st as any).pain['asshole'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['asscheeks'] = ((st as any).pain['asscheeks'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legL'] = ((st as any).pain['legL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['legR'] = ((st as any).pain['legR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['shoulders'] = ((st as any).pain['shoulders'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armL'] = ((st as any).pain['armL'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['armR'] = ((st as any).pain['armR'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['wrists'] = ((st as any).pain['wrists'] ?? 0) + (5);
    ((st as any).pain = (st as any).pain ?? {})['ankles'] = ((st as any).pain['ankles'] ?? 0) + (5);
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 50, 'lesbian', 'bound', 'no_orgasm_msg');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'foreplay', 10, 'lesbian');
    qspCall(st, 'stat', '');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (50 * ((st as any).scfeed ?? 0));
      (st as any).suclezsex = ((st as any).stat ?? 0)?.['female_sexual_times'];
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
      (st as any).sucabslez = 1;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/alexandria/sex/G5.jpg');
    scene.text('After a session of magical bondage and some <i>teaching</i> from Aleksei, done in his unmistakable style, you find yourself, kneeling on hardwood, wrapped in bondage ropes and with your head between your teacher toned thighs, that cross behind your neck, so you can\'t scape this munching session.');
    // TODO-QSP: dynamic text: "Ah-Ah-Ah… Easy now, <<$pcs_lastname>>, you''re not some common harlot!"
    scene.text(`"Ah-Ah-Ah… Easy now, ${((st as any).pcs_lastname || '')}, you're not some common harlot!"`);
    scene.text('And you munch… and munch… with Aleksei\'s hand in your head, marking the rhythm, and his constant nagging and <i>helpful</i> advice, so you <i>properly</i>, caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth, and tongue… and is not enough… only elicit more nagging from the elder wizard, pushing you a little more, in a restless effort… until you see him close the eyes, and hear a change in his breathing as one of Aleksei\'s hand travels sensually his body, and soon the blonde, moan in constricted pleasure,');
    scene.text('During the next minutes, a smug Aleksei sits relaxed, smoking a cigarette as he observes you, recatching your breath, a silent question in the air… do you want another session?');
    scene.actions([
      { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNs4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 35, 'lesbian', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N8.jpg');
  scene.text('<i>Obediently</i>, you take your clothes for the enjoyment of your <i>master</i>… <i>Obediently</i> you crawl towards the bed\'s headboard for the enjoyment of your <i>master</i>… <i>Obediently</i> you sit on the fluffy pillows and open your legs for the enjoyment of your <i>master</i>… Then, you watch in silence as a chuckling Aleksei, gets himself naked and crawls towards you.');
  scene.text('"Good, my apprentice, good. You are learning to be patient and… <i>obedient</i>."');
  scene.text('He then, caress delicately your chin and giving you a half-smile begins the long-road towards your burning sex, taking care that your bosom receives some well-earned attention, making your sigh as goosebumps trigger all over your skin. The next minutes pass with you heaving and moaning as Aleksei, does his damnedest to impede you from cum! He eats and caresses your cunt, only to retreat and observe pleased at you squirm obediently, wetting his sheets and forcing yourself to don\'t rush your hands towards your sex, until you finally can\'t stop and plead.');
  scene.text('"So be it, my apprentice."');
  scene.text('Then, and only then, Aleksei let your arousal rise without impediment under his ministrations. You moan, scream and trash as mana begins to gather in your core, in sync with your sexual excitement, until you climax and a torrent of power sublimates your body in an orgasmic wave.');
  scene.text('After this, you slide down the headboard and cuddle with Aleksei so you can continue with your <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterNs5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 35, 'lesbian', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N9.jpg');
  scene.text('After getting eaten by Aleksei, and being overflowed with mana, you lie over his comfortable bust. He doesn\'t seems to dislike your need to cuddle and scratch lazily your scalp.');
  scene.text('"Ok, my apprentice, that is enough procrastination, is time for your next <i>lesson</i>"');
  scene.text('He then, grabs your head and looks deep into your eyes. His mouth opens and unearthly words fill your head with arcane knowledge. Little by little you join him in a duet, at first labored but soon easily as you work through your magical connection.');
  scene.text('"Good my apprentice… good… now show me."');
  scene.text('You stir over Aleksei and extend a hand, soon, as you push mana through words of power, sparks begin to form between the fingers until there is an electrical flash, and magical lighting illuminates the room. Aleksei observe your demonstration with a critical eye, before assenting with approval. After that, is just you two, lazily lying in each other arms, before a sudden magical compulsion in the back of your head, made you move. Aleksei looks at you in understanding… is time to continue with his part of the <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterNs6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 4;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_sweat = 0;
  (s as any).pcs_breath = 1;
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 35, 'lesbian', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (100 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/N10.jpg');
  scene.text('Aleksei has made you climax, and filled your mind with arcane knowledge, so it is time to reciprocate and give something back to your master, so… you put him on his fours, and delicately begin to kiss his back down to that beautiful rump that hides his little brown star.');
  scene.text('He doesn\'t stop you as your tongue digs into that delicious hole - a light sigh on his lips is the only reaction - and your mind is flooded with strange visions and sensations, as your magics <i>connect</i>, making you shudder as mana begin to flow between you two. Instinctively, one of your hands reaches towards his pubic mound and plays with his well-groomed bush… but that isn\'t your final destination… After some moments, you reach to his perfect box, and begin to work.');
  scene.text('The room fills with Aleksei\'s dainty moans and your wet laps, as you edge his wet box and hot asshole, pleasuring the unflappable wizard. The only signal that he is getting near his climax, is when he finally caresses your face, so you turn and look into Aleksei\'s eyes, as he cum.');
  scene.text('After this, you again cuddle with him thinking in your lessons, until he pats lightly your backhead, to signal the end of your little runt.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs4(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['lips'] = ((s as any).pain['lips'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 50, 'lesbian', 'bound', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G10.jpg');
  scene.text('Aleksei, ties you with ropes in utter silence, ignoring your grunts of pain, as your body is bound so you can\'t enact any move. When he is sure you can\'t move your extremities, he hangs you face down from the ceiling. Aleksei then, takes away slowly his clothes, letting you come under cramps as he ignores your suffering.');
  // TODO-QSP: dynamic text: "Well… Let''s begin <<$pcs_lastname>>."
  scene.text(`"Well… Let's begin ${((s as any).pcs_lastname || '')}."`);
  scene.text('You contain your breath because you know what is going to happen. Aleksei disappears from your line of sight as he walks behind you, and push a finger up your rectum… "AHHHH!" You scream as an electrical jolt cleans your innards, and make you shake in your bounds… Then, without care for your sore asshole, Aleksei begins to smear some K-Y Jelly inside it. Your ragged breath fills the room at the mix of sensations as the Jelly touches the sensitive inner skin.');
  scene.text('"Hmpf" That barely whispered grunt, is the only sound that occasionally says Aleksei to accompany your grunts and moans. He, with utter detachment, play with you, first stirring your asshole with an analhook and after that works your cunt with a magic wand. Your body suffers from painful cramps, your asshole is sore and stretched tight, and occasionally magical jolts shake your body. Even with all that you can negate your arousal, and little by little Aleksei manages to forcibly made you cum, triggering your core to suffuse your body in mana.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['lips'] = ((s as any).pain['lips'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 50, 'lesbian', 'bound', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G11.jpg');
  scene.text('After hanging you from the ceiling, and forcefully making you climax, Aleksei stands in front of you. He smokes and seems strangely pleased with your squirming and sore form. Finally, after some moments of introspection, he rises your head by your hair, and kisses you, not forgetting to bit slightly your lips.');
  // TODO-QSP: dynamic text: Pay attention <<$pcs_lastname>>."
  scene.text(`Pay attention ${((s as any).pcs_lastname || '')}."`);
  scene.text('Aleksei put his mouth beside your ear and began to spell words of power. You fight through the numbness provoked by the manna-enhanced climax, your tired body, and sore limbs, managing to somehow join him in the spell crafting, and little by little something unearthly begins to form in the room. There is a flash and momentarily lighting illuminates the room.');
  // TODO-QSP: dynamic text: Hm… Well done <<$pcs_lastname>>."
  scene.text(`Hm… Well done ${((s as any).pcs_lastname || '')}."`);
  scene.text('After that, Aleksei rearranges your hair, before without too much fanfare, releases the ropes, that tie you, and you fall painfully to the ground, ready for your next <i>lesson</i>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enterGs6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).AlexandriaQW ?? 0) < 23) {
    (s as any).AlexandriaQW = ((s as any).AlexandriaQW ?? 0) + (1);
  }
  ((s as any).pain = (s as any).pain ?? {})['lips'] = ((s as any).pain['lips'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asshole'] = ((s as any).pain['asshole'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['asscheeks'] = ((s as any).pain['asscheeks'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legL'] = ((s as any).pain['legL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['legR'] = ((s as any).pain['legR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['shoulders'] = ((s as any).pain['shoulders'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armL'] = ((s as any).pain['armL'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['armR'] = ((s as any).pain['armR'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['wrists'] = ((s as any).pain['wrists'] ?? 0) + (5);
  ((s as any).pain = (s as any).pain ?? {})['ankles'] = ((s as any).pain['ankles'] ?? 0) + (5);
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'cuni', 50, 'lesbian', 'bound', 'no_orgasm_msg');
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'foreplay', 10, 'lesbian');
  qspCall(s, 'stat', '');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (50 * ((s as any).scfeed ?? 0));
    (s as any).suclezsex = ((s as any).stat ?? 0)?.['female_sexual_times'];
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
    (s as any).sucabslez = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/alexandria/sex/G5.jpg');
  scene.text('After a session of magical bondage and some <i>teaching</i> from Aleksei, done in his unmistakable style, you find yourself, kneeling on hardwood, wrapped in bondage ropes and with your head between your teacher toned thighs, that cross behind your neck, so you can\'t scape this munching session.');
  // TODO-QSP: dynamic text: "Ah-Ah-Ah… Easy now, <<$pcs_lastname>>, you''re not some common harlot!"
  scene.text(`"Ah-Ah-Ah… Easy now, ${((s as any).pcs_lastname || '')}, you're not some common harlot!"`);
  scene.text('And you munch… and munch… with Aleksei\'s hand in your head, marking the rhythm, and his constant nagging and <i>helpful</i> advice, so you <i>properly</i>, caress, lick, penetrate, sink, slurp and stroke all around his pussy using your fingers, mouth, and tongue… and is not enough… only elicit more nagging from the elder wizard, pushing you a little more, in a restless effort… until you see him close the eyes, and hear a change in his breathing as one of Aleksei\'s hand travels sensually his body, and soon the blonde, moan in constricted pleasure,');
  scene.text('During the next minutes, a smug Aleksei sits relaxed, smoking a cigarette as he observes you, recatching your breath, a silent question in the air… do you want another session?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Redress and follow Aleksei', goto: ['alexandriaHome', 'study'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'nice1':
      enterNice1(s, scene);
      break;
    case 'grumpy1':
      enterGrumpy1(s, scene);
      break;
    case 'long':
      enterLong(s, scene);
      break;
    case 'short':
      enterShort(s, scene);
      break;
    case 'ns1':
      enterNs1(s, scene);
      break;
    case 'ns2':
      enterNs2(s, scene);
      break;
    case 'ns3':
      enterNs3(s, scene);
      break;
    case 'gs1':
      enterGs1(s, scene);
      break;
    case 'gs2':
      enterGs2(s, scene);
      break;
    case 'gs3':
      enterGs3(s, scene);
      break;
    case 'nL1':
      enterNL1(s, scene);
      break;
    case 'gL1':
      enterGL1(s, scene);
      break;
    case 'nice2':
      enterNice2(s, scene);
      break;
    case 'grumpy2':
      enterGrumpy2(s, scene);
      break;
    case 'nL2':
      enterNL2(s, scene);
      break;
    case 'gL2':
      enterGL2(s, scene);
      break;
    case 'ns4':
      enterNs4(s, scene);
      break;
    case 'ns5':
      enterNs5(s, scene);
      break;
    case 'ns6':
      enterNs6(s, scene);
      break;
    case 'gs4':
      enterGs4(s, scene);
      break;
    case 'gs5':
      enterGs5(s, scene);
      break;
    case 'gs6':
      enterGs6(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const alexandriaSex: LocationDef = {
  name: 'alexandriaSex',
  title: 'You find yourself lying half-naked on Aleksei\'s fluffy bed, ',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
